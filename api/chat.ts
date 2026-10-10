 
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido." });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: "A chave do Gemini não está configurada no servidor.",
    });
  }

  try {
    const { prompt } = req.body ?? {};

    if (typeof prompt !== "string" || !prompt.trim()) {
      return res.status(400).json({
        error: "Envie uma mensagem válida.",
      });
    }

    const model = "gemini-3.6-flash";

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data: any = await response.json();

    if (!response.ok) {
      console.error("Erro do Gemini:", response.status);

      return res.status(502).json({
        error: "Não foi possível obter uma resposta do Gemini.",
      });
    }

    const text = data.candidates?.[0]?.content?.parts
      ?.map((part: { text?: string }) => part.text ?? "")
      .join("");

    if (!text) {
      return res.status(502).json({
        error: "O Gemini não retornou uma resposta.",
      });
    }

    return res.status(200).json({ text });
  } catch (error) {
    console.error("Erro interno no chat:", error);

    return res.status(500).json({
      error: "Ocorreu um erro ao processar sua mensagem.",
    });
  }
}
