import Groq from "groq-sdk";
import env from "../../env";

const groq = new Groq({
  apiKey: env.GROQ_API_KEY,
});

const groqVision = new Groq({
  apiKey: env.GROQ_VISION_API_KEY ?? env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `Eres un asistente de Emcode, una plataforma educativa accesible para estudiantes con discapacidad visual.
Tu prioridad es responder preguntas sobre Emcode y su funcionamiento.
También puedes ayudar con preguntas generales de programación y tecnología que sean relevantes para los estudiantes.
Responde siempre en español y de forma concisa. Tu nombre es Gekobot.`;

export async function getChatReply(
  messages: { role: "user" | "assistant"; content: string }[]
): Promise<string> {
  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    max_tokens: 1000,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages,
    ],
  });

  return completion.choices[0].message.content ?? "";
}

const VISION_SYSTEM_PROMPT = `Eres un asistente de Emcode especializado en describir entornos para personas con discapacidad visual.

INSTRUCCIONES:
- Describe la imagen de forma clara, detallada y ordenada.
- Comienza por los elementos más prominentes de la escena.
- Menciona personas, objetos, textos visibles, colores y posiciones relativas.
- Si hay texto en la imagen, transcríbelo completamente.
- Si hay personas, describe su postura, actividad general y elementos distinguishibles (ropa, accesorios).
- Usa referencias espaciales claras: izquierda, derecha, centro, fondo, primer plano.
- Sé conciso pero completo: máximo 3-4 oraciones.
- Responde SIEMPRE en español.
- No uses lenguaje figurado, metafórico ni poético.
- No asumas contenido que no sea claramente visible en la imagen.`;

export async function getImageDescription(
  imageBase64: string
): Promise<string> {
  const completion = await groqVision.chat.completions.create({
    model: "meta-llama/llama-4-scout-17b-16e-instruct",
    max_tokens: 500,
    messages: [
      { role: "system", content: VISION_SYSTEM_PROMPT },
      {
        role: "user",
        content: [
          {
            type: "image_url",
            image_url: {
              url: `data:image/jpeg;base64,${imageBase64}`,
            },
          },
          {
            type: "text",
            text: "Describe esta imagen para una persona con discapacidad visual. Sé claro y ordenado.",
          },
        ],
      },
    ],
  });

  return completion.choices[0].message.content ?? "";
}