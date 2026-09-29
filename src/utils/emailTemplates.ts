type PasswordResetEmailData = {
    firstName: string;
    resetUrl: string;
};

type EmailContent = {
    subject: string;
    htmlContent: string;
    textContent: string;
};

const layout = (content: string) => `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Restablecer contraseña</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:32px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e4e4e7;">
          <tr>
            <td style="background-color:#1e3a5f;padding:28px 32px;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;line-height:1.3;font-weight:700;">EMCODE</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;color:#3f3f46;font-size:16px;line-height:1.6;">
              ${content}
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 32px;color:#71717a;font-size:13px;line-height:1.5;">
              <p style="margin:0;">
                Si no solicitaste el cambio de contraseña, podés ignorar este mensaje y tu contraseña seguirá siendo la misma.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#fafafa;padding:20px 32px;color:#a1a1aa;font-size:12px;line-height:1.5;border-top:1px solid #e4e4e7;">
              <p style="margin:0;">Este es un mensaje automático de EMCODE. No respondas a este correo.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

export function buildPasswordResetEmail({ firstName, resetUrl }: PasswordResetEmailData): EmailContent {
    const body = `
              <p style="margin:0 0 16px;">Hola ${firstName},</p>
              <p style="margin:0 0 16px;">
                Recibimos una solicitud para restablecer la contraseña de tu cuenta en EMCODE.
              </p>
              <p style="margin:0 0 24px;">
                Entrá al siguiente enlace y elegí una nueva contraseña. El enlace es de un solo uso.
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
                <tr>
                  <td style="border-radius:8px;background-color:#1e3a5f;">
                    <a href="${resetUrl}" style="display:inline-block;padding:13px 28px;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;">Restablecer contraseña</a>
                  </td>
                </tr>
              </table>
              <p style="margin:0 0 8px;color:#71717a;font-size:13px;">
                Si el botón no funciona, copiá esta dirección en tu navegador:
              </p>
              <p style="margin:0 0 24px;word-break:break-all;">
                <a href="${resetUrl}" style="color:#1e3a5f;font-size:13px;">${resetUrl}</a>
              </p>`;

    return {
        subject: 'Restablecer tu contraseña de EMCODE',
        htmlContent: layout(body),
        textContent: [
            `Hola ${firstName},`,
            '',
            ' Recibimos una solicitud para restablecer la contraseña de tu cuenta en EMCODE.',
            '',
            'Entrá al siguiente enlace y elegí una nueva contraseña. El enlace es de un solo uso.',
            '',
            resetUrl,
            '',
            'Si no solicitaste el cambio de contraseña, podés ignorar este mensaje.',
        ].join('\n'),
    };
}
