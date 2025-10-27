import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Send } from 'lucide-react';

function Message({ role, content }) {
  return (
    <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[80%] rounded-lg px-3 py-2 text-sm whitespace-pre-wrap ${role === 'user' ? 'bg-white text-black' : 'bg-neutral-800 text-neutral-100'}`}>{content}</div>
    </div>
  );
}

export default function DemoChat() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I am your BotForge demo assistant. Ask me about features, embedding, or pricing.' },
  ]);
  const listRef = useRef(null);

  const suggested = useMemo(() => [
    'How do I embed the widget?',
    'Do you support Stripe billing?',
    'What data sources can I train on?',
  ], []);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async (value) => {
    const text = (value ?? input).trim();
    if (!text) return;
    setInput('');
    setMessages((m) => [...m, { role: 'user', content: text }]);
    setLoading(true);

    // Simulate streaming answer with a small delay and synthetic RAG-like response
    const answer = generateAnswer(text);
    let idx = 0;
    const interval = setInterval(() => {
      idx++;
      setMessages((m) => {
        const hasAssistant = m[m.length - 1]?.role === 'assistant' && m[m.length - 1].streaming;
        if (!hasAssistant) return [...m, { role: 'assistant', content: answer.slice(0, idx * 3), streaming: true }];
        const copy = m.slice();
        copy[copy.length - 1] = { ...copy[copy.length - 1], content: answer.slice(0, idx * 3) };
        return copy;
      });
      if (idx * 3 >= answer.length) {
        clearInterval(interval);
        setMessages((m) => {
          const copy = m.slice();
          copy[copy.length - 1] = { role: 'assistant', content: answer };
          return copy;
        });
        setLoading(false);
      }
    }, 30);
  };

  return (
    <section id="demo" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Try the live demo</h2>
            <p className="mt-2 text-neutral-400">This mock chat simulates the BotForge runtime with retrieval and streaming. In production, it connects to a secure, multi-tenant API.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {suggested.map((s) => (
                <button key={s} onClick={() => handleSend(s)} className="rounded-full border border-neutral-800/60 bg-neutral-900/40 px-3 py-1 text-xs text-neutral-300 hover:border-neutral-700">{s}</button>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-neutral-800/60 bg-neutral-900/40 h-[460px] flex flex-col overflow-hidden">
            <div ref={listRef} className="flex-1 overflow-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <Message key={i} role={m.role} content={m.content} />
              ))}
            </div>
            <div className="border-t border-neutral-800/60 p-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={loading ? 'Generating…' : 'Ask anything about BotForge'}
                  className="flex-1 rounded-md bg-black/40 border border-neutral-800/60 px-3 py-2 text-sm outline-none focus:border-neutral-600"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-md bg-white text-black px-3 py-2 text-sm font-medium hover:bg-neutral-200 disabled:opacity-50"
                >
                  <Send size={14} /> Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function generateAnswer(q) {
  const lower = q.toLowerCase();
  if (lower.includes('embed')) {
    return 'Embed the widget by adding a single async script tag. Configure tenantId, botId, theme, and security settings. Our loader works with strict CSP and supports custom placement like bottom-right or inline.';
  }
  if (lower.includes('stripe') || lower.includes('billing') || lower.includes('price')) {
    return 'Yes. We integrate with Stripe for subscriptions, invoices, and usage-based overages. Start on the free tier (1,000 messages/month) and upgrade anytime with seat-based or usage add-ons.';
  }
  if (lower.includes('data') || lower.includes('train')) {
    return 'Train bots using PDFs, CSVs, or URLs. We parse and chunk content, store embeddings in PGVector or Pinecone, and ground responses with per-tenant isolation and caching.';
  }
  if (lower.includes('security') || lower.includes('gdpr')) {
    return 'Security first: per-tenant RBAC, encryption in transit and at rest, audit logs, per-tenant rate limiting, and GDPR export/delete workflows.';
  }
  return 'BotForge offers a secure, multi-tenant chat platform with streaming responses, configurable personalities, embeddable widgets, analytics, and Stripe billing.';
}
