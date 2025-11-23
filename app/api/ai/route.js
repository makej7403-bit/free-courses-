import OpenAI from "openai";

export async function POST(req) {
  try {
    const { message } = await req.json();
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }]
    });

    return new Response(JSON.stringify({ reply: response.choices[0].message.content }));
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
