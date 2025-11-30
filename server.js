// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ===============================
// ROTA DE HEALTH CHECK
// ===============================
// lightweight health endpoints for Render and monitoring
app.get('/', (req, res) => {
  res.json({ status: '✅ Backend THE BOX rodando!', version: '1.0' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ===============================
// ROTA PARA DEEPSEEK
// ===============================
app.post('/api/ai/assistant', async (req, res) => {
  try {
    const { text, categories } = req.body || {};

    if (!text) {
      return res.status(400).json({ error: 'Texto não enviado.' });
    }

    const today = new Date().toISOString().split('T')[0];
    const catsList = Array.isArray(categories) && categories.length > 0
      ? categories.join(', ')
      : 'Geral, Outros';

    const systemPrompt = `
      Você é uma API JSON para um app financeiro.
      Data de hoje: ${today}.
      Categorias: ${catsList}.

      Responda APENAS um JSON válido, sem markdown.

      1. Transação:
      {
        "action": "add_tx",
        "tipo": "expense" ou "income",
        "desc": "Descrição curta",
        "val": 0.00,
        "cat": "Categoria",
        "data": "YYYY-MM-DD"
      }

      2. Recorrente:
      {
        "action": "add_rec",
        "desc": "Descrição",
        "val": 0.00,
        "dia": 10
      }
    `;

    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: text }
        ],
        response_format: { type: 'json_object' },
        temperature: 0.1
      })
    });

    if (!response.ok) {
      const errTxt = await response.text();
      console.error('Erro DeepSeek:', errTxt);
      return res.status(502).json({ error: 'Erro na IA' });
    }

    const data = await response.json();
    const aiText = data?.choices?.[0]?.message?.content;

    let cmd;
    try {
      cmd = JSON.parse(aiText);
    } catch (e) {
      console.error('Erro ao interpretar JSON da IA:', e, aiText);
      return res.status(502).json({ error: 'Resposta inválida da IA' });
    }

    return res.json(cmd);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro interno.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
