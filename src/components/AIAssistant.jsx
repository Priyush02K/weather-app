import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const handleAsk = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `
      You are a friendly AI Weather Assistant.
      Answer briefly and clearly about weather, temperature, or forecasts.
      Question: ${question}
      `;

      const result = await model.generateContent(prompt);
      const response = result.response.text();

      setAnswer(response);
      setChatHistory([...chatHistory, { q: question, a: response }]);
      setQuestion("");
    } catch (err) {
      setAnswer("⚠️ Error connecting to Gemini API. Check your key or try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 bg-white shadow-md rounded-xl p-4 w-full max-w-2xl">
      <h2 className="text-xl font-semibold mb-3">🤖 AI Weather Assistant</h2>

      <div className="h-60 overflow-y-auto border p-3 rounded-md bg-gray-50">
        {chatHistory.length === 0 && (
          <p className="text-gray-500 text-center mt-8">
            Ask about any city’s weather ☁️
          </p>
        )}
        {chatHistory.map((msg, i) => (
          <div key={i} className="mb-3">
            <p className="font-semibold">🧑 You: {msg.q}</p>
            <p className="ml-4 text-gray-700">🤖 {msg.a}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleAsk} className="flex gap-2 mt-3">
        <input
          type="text"
          placeholder="Ask e.g. Will it rain tomorrow in Pune?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="flex-grow p-2 border rounded-lg"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          {loading ? "Thinking..." : "Ask"}
        </button>
      </form>
    </div>
  );
}

export default AIAssistant;
