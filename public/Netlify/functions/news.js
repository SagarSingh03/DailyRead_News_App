// netlify/functions/news.js
export async function handler(event) {
  try {
    const category = event.queryStringParameters?.category || "general";

    const resp = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${encodeURIComponent(
        category
      )}&pageSize=30`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEWS_API_KEY}`,
        },
      }
    );

    const data = await resp.json();

    return {
      statusCode: resp.ok ? 200 : resp.status,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
