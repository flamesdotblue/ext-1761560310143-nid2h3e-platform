import React, { useMemo, useState } from 'react';

export default function EmbedSnippet() {
  const [tenantId] = useState('demo-tenant');
  const [botId] = useState('demo-bot');

  const snippet = useMemo(() => {
    return `<!-- BotForge Embed -->\n<script>\n  window.BotForge=window.BotForge||{};\n  BotForge.config={\n    tenantId: '${tenantId}',\n    botId: '${botId}',\n    theme:{primary:'#f97316',position:'bottom-right'},\n    allowedDomains:['*']\n  };\n  (function(){\n    var s=document.createElement('script');\n    s.src='https://cdn.botforge.example/widget.js';\n    s.async=true;\n    document.head.appendChild(s);\n  })();\n</script>`;
  }, [tenantId, botId]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(snippet);
    } catch {}
  };

  return (
    <section id="embed" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Embed with a single snippet</h2>
            <p className="mt-2 text-neutral-400">Drop the snippet into your website to load the chat widget. Configure theme, placement, and security via data attributes or the dashboard.</p>
            <ul className="mt-4 list-disc pl-5 text-sm text-neutral-300 space-y-1">
              <li>Lightweight async loader</li>
              <li>CORS and CSP friendly</li>
              <li>Supports custom styling and i18n</li>
            </ul>
          </div>
          <div className="rounded-lg border border-neutral-800/60 bg-neutral-900/40">
            <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800/60">
              <span className="text-xs text-neutral-400">embed.html</span>
              <button onClick={copy} className="rounded bg-white/10 hover:bg-white/20 px-2 py-1 text-xs">Copy</button>
            </div>
            <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-neutral-200"><code>{snippet}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}
