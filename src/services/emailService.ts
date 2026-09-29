import env from '../../env';
import { buildPasswordResetEmail } from '../utils/emailTemplates';

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';
const REQUEST_TIMEOUT_MS = 10_000;

type PasswordResetEmailParams = {
    to: string;
    name: string;
    resetUrl: string;
};

class EmailService {
    async sendPasswordResetEmail({ to, name, resetUrl }: PasswordResetEmailParams) {
        const { subject, htmlContent, textContent } = buildPasswordResetEmail({ firstName: name, resetUrl });

        if (!env.BREVO_API_KEY) {
            if (env.APP_STAGE === 'production') {
                throw new Error('BREVO_API_KEY no está configurada');
            }
            console.log(`[Email] BREVO_API_KEY ausente — no se envió el correo a ${to}`);
            console.log(`[Email] Enlace de reseteo: ${resetUrl}`);
            return;
        }

        const response = await fetch(BREVO_API_URL, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': env.BREVO_API_KEY,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                sender: {
                    name: env.BREVO_SENDER_NAME,
                    email: env.BREVO_SENDER_EMAIL,
                },
                to: [{ email: to, name }],
                subject,
                htmlContent,
                textContent,
            }),
            signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
        });

        if (!response.ok) {
            const body = await response.json().catch(() => null);
            const detail = body?.message ?? response.statusText;
            throw new Error(`Brevo rechazó el envío (HTTP ${response.status}): ${detail}`);
        }

        // Brevo returning 2xx only means it queued the message, not that it was
        // delivered. The messageId is what you look up in the Brevo logs when a
        // mail never shows up in the inbox.
        const body = await response.json().catch(() => null);
        console.log(`[Email] Aceptado por Brevo para ${to} (messageId: ${body?.messageId ?? 'sin messageId'})`);
    }
}

export default EmailService;
