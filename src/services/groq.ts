import Groq from "groq-sdk";
import env from "../../env";

const groq = new Groq({
  apiKey: env.GROQ_API_KEY,
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