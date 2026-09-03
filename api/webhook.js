export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(200).send('OK');
  
  const { message } = req.body;
  if (!message) return res.status(200).send('OK');

  const chatId = message.chat.id;
  const text = message.text;

  let reply = "D190-V2 is online ✅";
  if (text === '/start') reply = "Hello! D190-V2 is working ✅ Welcome!";

  const token = process.env.TELEGRAM_BOT_TOKEN;
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: reply })
  });

  res.status(200).send('OK');
}
