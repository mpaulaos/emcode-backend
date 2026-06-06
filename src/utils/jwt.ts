import jwt from 'jsonwebtoken';
import env from '../../env';

export type TokenPayload = {
  id: number;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
};

export function signToken(payload: TokenPayload): string {
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES_IN as any });
}

export function verifyToken(token: string): TokenPayload {
  return jwt.verify(token, env.JWT_SECRET) as TokenPayload;
}
