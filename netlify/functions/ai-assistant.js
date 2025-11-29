// backend/netlify/functions/ai-assistant.js

// Função Serverless para o Netlify
// Endpoint gerado: /.netlify/functions/ai-assistant

exports.handler = async function (event, context) {
  // CORS liberado
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Pré-flight do navegador (OPTIONS)
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  // Só aceitamos POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: 'Método não permitido' };
  }

  try {
    // Corpo enviado pelo front
    const { text, categories } = JSON.parse(event.body);

    // Chave da DeepSeek vinda das variáveis de ambiente do Netlify
    const API_KEY = process.env.DEEPSEEK_API_KEY;

    if (!API_KEY) {
      console.error("ERRO: Chave de API não configurada no painel do Netlify.");
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Configuração de servidor ausente' })
      };
    }

    const today = new Date().toISOString().split('T')[0];
    const catsList = Array.isArray(categories) && categories.length
      ? categories.join(', ')
      : 'Geral';

    const systemPrompt = `
      Você é uma API JSON para controle financeiro. 
      Hoje: ${today}. 
      Categorias: ${catsList}.
      Responda APENAS o JSON puro, sem markdown.

      1. Transação:
      { "action": "add_tx", "tipo": "expense" (ou "income"), "desc": "...", "val": 0.00, "cat": "...", "data": "YYYY-MM-DD" }

      2. Recorrente:
      { "action": "add_rec", "desc": "...", "val": 0.00, "dia": 10 }
    `;

    // Aqui usamos o fetch nativo do Node 18 (Netlify já fornece)
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
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
      const err = await response.text();
      console.error('Erro DeepSeek:', err);
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({ error: 'Erro na inteligência artificial' })
      };
    }

    const data = await response.json();
    const aiText = data.choices?.[0]?.message?.content;

    let cmd;
    try {
      // DeepSeek já deve retornar JSON puro
      cmd = JSON.parse(aiText);
    } catch (e) {
      console.error('Erro ao interpretar JSON da IA:', e, aiText);
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({ error: 'Resposta inválida da IA' })
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(cmd)
    };

  } catch (error) {
    console.error('Erro Interno:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    };
  }
};
