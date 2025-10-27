import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-10 grid gap-10 md:grid-cols-2 items-center">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-300">
            New • Multi-tenant Chatbot SaaS
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
            Build, train, and embed AI chatbots for your website
          </h1>
          <p className="mt-4 text-neutral-300">
            BotForge lets you create secure, configurable chatbots for every team. Train with your docs, enforce guardrails, and deploy with a single snippet.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-md bg-white text-black px-4 py-2 font-medium hover:bg-neutral-200">Start free</button>
            <button className="rounded-md border border-neutral-700 px-4 py-2 text-white hover:bg-neutral-900">View docs</button>
          </div>
          <div className="mt-4 text-xs text-neutral-500">Free tier includes 1,000 messages/month • OAuth • GDPR-ready</div>
        </div>
        <div className="relative h-[420px] md:h-[520px] w-full">
          <Spline
            scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
