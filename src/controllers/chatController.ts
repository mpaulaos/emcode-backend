import { Request, Response } from "express";
import { getChatReply } from "../services/groq";

export async function sendMessage(req: Request, res: Response) {
  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Se requiere un array de mensajes" });
    }

    const reply = await getChatReply(messages);
    return res.json({ reply });

  } catch (error) {
    console.error("Error Groq:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}