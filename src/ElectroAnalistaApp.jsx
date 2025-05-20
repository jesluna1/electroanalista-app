import { useState } from "react";

export default function ElectroAnalistaApp() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const promptBase = `Eres un asistente experto en electrónica aplicada. Analiza la siguiente consulta como si fueras el GPT personalizado ElectroAnalista, especializado en fuentes conmutadas, motherboards y fallas electrónicas. Responde en español técnico, de forma clara y paso a paso si es necesario.

Consulta:`;

  const handleAsk = async () => {
    if (!query.trim()) return;
    setLoading(true);
    const fullPrompt = promptBase + query;
    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": \`Bearer \${import.meta.env.VITE_OPENAI_API_KEY}\`
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [{ role: "user", content: fullPrompt }],
          temperature: 0.3
        })
      });
      const data = await res.json();
      const answer = data.choices?.[0]?.message?.content || "Sin respuesta.";
      setResponse(answer);
    } catch (err) {
      setResponse("Error al contactar el modelo.");
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h1>ElectroAnalista</h1>
      <textarea
        rows={8}
        placeholder="Escribe tu consulta técnica aquí..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: '100%', marginBottom: '1rem' }}
      />
      <button onClick={handleAsk} disabled={loading}>
        {loading ? "Analizando..." : "Consultar"}
      </button>
      {response && (
        <div style={{ marginTop: '1rem', background: '#eef', padding: '1rem', borderRadius: '4px' }}>
          <strong>Respuesta:</strong>
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
}