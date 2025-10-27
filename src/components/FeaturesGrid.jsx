import React from 'react';
import { Rocket, Shield, Database, Settings, CreditCard, BarChart } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Fast chat runtime',
    desc: 'Streaming responses with retrieval-augmented generation and caching for sub-second first tokens.',
  },
  {
    icon: Shield,
    title: 'Secure multi-tenancy',
    desc: 'RBAC, per-tenant isolation, audit logs, rate limiting, and GDPR tooling built-in.',
  },
  {
    icon: Database,
    title: 'Bring your knowledge',
    desc: 'Upload PDFs/CSVs, crawl URLs, or paste Q&A. Vector adapters for PGVector or Pinecone.',
  },
  {
    icon: Settings,
    title: 'Configurable bots',
    desc: 'Personality, language, domain allowlist, fallbacks, and timeouts—per bot and per environment.',
  },
  {
    icon: CreditCard,
    title: 'Usage-based billing',
    desc: 'Free tier + paid plans with Stripe. Enforce quotas by tenant and export invoices anytime.',
  },
  {
    icon: BarChart,
    title: 'Analytics & observability',
    desc: 'Latency, top queries, MAU, error rates, plus Sentry and metrics endpoints for alerts.',
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Everything you need to launch a chatbot platform</h2>
        <p className="mt-2 text-neutral-400">Built with modern best practices for security, scale, and developer experience.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-lg border border-neutral-800/60 bg-neutral-900/40 p-5 hover:border-neutral-700 transition">
              <div className="mb-3 inline-flex items-center justify-center rounded-md bg-orange-500/10 p-2 text-orange-300">
                <Icon size={18} />
              </div>
              <h3 className="font-medium text-white">{title}</h3>
              <p className="mt-1 text-sm text-neutral-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
