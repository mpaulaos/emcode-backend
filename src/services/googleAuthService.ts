import { OAuth2Client } from 'google-auth-library';
import env from '../../env';
import UserRepository from '../repositories/userRepository';
import { signToken } from '../utils/jwt';
import type { AuthUser } from '../types/auth';

const googleClient = new OAuth2Client(
  env.GOOGLE_CLIENT_ID,
  env.GOOGLE_CLIENT_SECRET,
  `${env.BACKEND_URL}/api/auth/google/callback`,
);

export function generateAuthUrl(state: string): string {
  return googleClient.generateAuthUrl({
    access_type: 'offline',
    scope: ['openid', 'profile', 'email'],
    state,
  });
}

export async function handleCallback(code: string): Promise<{ token: string; user: AuthUser }> {
  const { tokens } = await googleClient.getToken(code);
  googleClient.setCredentials(tokens);

  const ticket = await googleClient.verifyIdToken({
    idToken: tokens.id_token!,
    audience: env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload()!;
  const email = payload.email!;
  const googleName = payload.name || '';
  const picture = payload.picture;

  const nameParts = googleName.split(' ');
  const firstName = nameParts[0] || email.split('@')[0];
  const lastName = nameParts.slice(1).join(' ') || '';

  const userRepository = new UserRepository();
  let user = await userRepository.findByEmail(email);

  if (!user) {
    user = await userRepository.create({
      firstName,
      lastName,
      email,
      role: 'student',
      isVerified: true,
      profilePicture: picture,
    });
  }

  const token = signToken({
    id: user.id,
    email: user.email,
    role: user.role ?? 'student',
    firstName: user.firstName,
    lastName: user.lastName,
  });

  return {
    token,
    user: {
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      role: user.role ?? 'student',
    },
  };
}
