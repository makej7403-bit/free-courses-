import OpenAI from "openai";

export async function POST(req) {
  const { message } = await req.json();

  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are an AI tutor created by Akin S. Sokpah from Liberia. Always be helpful and polite."
      },
      { role: "user", content: message }
    ],
  });

  return Response.json({
    reply: response.choices[0].message.content,
  });
}
