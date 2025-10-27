import React from 'react';
import HeroSpline from './components/HeroSpline';
import FeaturesGrid from './components/FeaturesGrid';
import EmbedSnippet from './components/EmbedSnippet';
import DemoChat from './components/DemoChat';

function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/60 bg-black/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-orange-500 to-amber-400" />
          <span className="font-semibold tracking-tight text-white">BotForge</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-neutral-300 hover:text-white">Features</a>
          <a href="#embed" className="text-neutral-300 hover:text-white">Embed</a>
          <a href="#demo" className="text-neutral-300 hover:text-white">Demo</a>
          <a href="#pricing" className="text-neutral-300 hover:text-white">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="rounded-md px-3 py-2 text-sm text-neutral-200 hover:text-white">Sign in</button>
          <button className="rounded-md bg-white text-black px-3 py-2 text-sm font-medium hover:bg-neutral-200">Get started</button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-800/60 mt-20">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-6 md:grid-cols-3 text-sm text-neutral-300">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-orange-500 to-amber-400" />
            <span className="font-semibold text-white">BotForge</span>
          </div>
          <p className="text-neutral-400">Multi-tenant chatbot platform for modern teams. Secure, scalable, and developer-friendly.</p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:col-span-2 md:grid-cols-4">
          <div>
            <h4 className="text-white font-medium mb-2">Product</h4>
            <ul className="space-y-1">
              <li><a className="hover:text-white" href="#features">Features</a></li>
              <li><a className="hover:text-white" href="#demo">Demo</a></li>
              <li><a className="hover:text-white" href="#embed">Embed</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Developers</h4>
            <ul className="space-y-1">
              <li><a className="hover:text-white" href="#api">API</a></li>
              <li><a className="hover:text-white" href="#docs">Docs</a></li>
              <li><a className="hover:text-white" href="#status">Status</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Company</h4>
            <ul className="space-y-1">
              <li><a className="hover:text-white" href="#about">About</a></li>
              <li><a className="hover:text-white" href="#careers">Careers</a></li>
              <li><a className="hover:text-white" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Legal</h4>
            <ul className="space-y-1">
              <li><a className="hover:text-white" href="#privacy">Privacy</a></li>
              <li><a className="hover:text-white" href="#terms">Terms</a></li>
              <li><a className="hover:text-white" href="#gdpr">GDPR</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-10 text-xs text-neutral-500">© {new Date().getFullYear()} BotForge Inc. All rights reserved.</div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSpline />
      <FeaturesGrid />
      <EmbedSnippet />
      <DemoChat />
      <Footer />
    </div>
  );
}
