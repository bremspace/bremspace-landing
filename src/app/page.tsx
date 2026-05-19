"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Rocket, Cpu, Globe, Zap, Mail, ArrowRight, ChevronRight } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export default function LandingPage() {
  return (
    <div className="relative min-h-screen text-white selection:bg-white/20">
      {/* Grid Background */}
      <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-black rotate-45" />
          </div>
          <span>BREMSPACE</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium opacity-70">
          <a href="#vision" className="hover:opacity-100 transition-opacity">Vision</a>
          <a href="#tech" className="hover:opacity-100 transition-opacity">Tech</a>
          <a href="#products" className="hover:opacity-100 transition-opacity">Products</a>
        </div>
        <a href="#waitlist" className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-white/90 transition-colors">
          Join Waitlist
        </a>
      </nav>

      <main className="pt-32 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mb-32">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium mb-6 opacity-80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Next Generation Systems
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight">
              Engineering <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Beyond Space.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl opacity-60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Cyber-minimalist infrastructure designed for the next frontier. 
              <span className="block text-sm italic opacity-40 mt-2">Sistem masa depan untuk kedaulatan teknologi global.</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                Explore Core <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-colors">
                Whitepaper
              </button>
            </div>
          </FadeIn>
        </section>

        {/* Vision Section - Bento Grid */}
        <section id="vision" className="mb-32">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-16 tracking-tight">Core Vision</h2>
          </FadeIn>
          <div className="bento-grid">
            <div className="glass p-8 col-span-1 md:col-span-2 row-span-2 flex flex-col justify-between group hover:border-white/30 transition-colors">
              <div>
                <Globe className="w-10 h-10 mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">Global Sovereignty</h3>
                <p className="opacity-60 leading-relaxed">
                  Building decentralized infrastructure that ensures data autonomy and systemic resilience. 
                  <br /><br />
                  <span className="italic opacity-40">Membangun infrastruktur terdesentralisasi untuk kedaulatan data.</span>
                </p>
              </div>
              <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10 font-mono text-xs opacity-50">
                $ bremspace init --global-sovereignty
              </div>
            </div>
            <div className="glass p-8 col-span-1 flex flex-col justify-between group hover:border-white/30 transition-colors">
              <Cpu className="w-8 h-8 mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-2">Neural Sync</h3>
              <p className="text-sm opacity-60">Low-latency synchronization for distributed minds.</p>
            </div>
            <div className="glass p-8 col-span-1 flex flex-col justify-between group hover:border-white/30 transition-colors">
              <Zap className="w-8 h-8 mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-2">Quantum Layer</h3>
              <p className="text-sm opacity-60">Post-quantum encryption by default.</p>
            </div>
            <div className="glass p-8 col-span-2 flex flex-col justify-between group hover:border-white/30 transition-colors">
              <div className="flex items-center gap-4">
                <Rocket className="w-10 h-10 opacity-80" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Interstellar Mesh</h3>
                  <p className="text-sm opacity-60">Network protocols optimized for long-distance propagation.</p>
                </div>
              </div>
              <div className="mt-6 h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-white" 
                  initial={{ width: 0 }}
                  whileInView={{ width: '70%' }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech" className="mb-32 py-20 relative">
          <div className="absolute inset-0 bg-white/[0.02] rounded-3xl pointer-events-none border border-white/5" />
          <div className="relative z-10 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-16 tracking-tight">Tech Stack</h2>
            </FadeIn>
            <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {['Rust', 'Wasm', 'Next.js', 'TypeScript', 'gRPC', 'QUIC'].map((tech) => (
                <span key={tech} className="text-2xl font-medium tracking-widest">{tech}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Future Products Section */}
        <section id="products" className="mb-32">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-16 tracking-tight">Future Ecosystem</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'BremOS',
                desc: 'A spatial operating system for the next-gen hardware.',
                id: 'Sistem operasi spasial untuk hardware generasi baru.',
              },
              {
                name: 'VoidCore',
                desc: 'High-performance compute engine for decentralized apps.',
                id: 'Mesin komputasi performa tinggi untuk aplikasi terdesentralisasi.',
              },
              {
                name: 'NovaLink',
                desc: 'Zero-latency communication bridge across nodes.',
                id: 'Sistem komunikasi zero-latency antar node.',
              }
            ].map((prod, i) => (
              <div key={prod.name} className="glass p-8 group hover:bg-white/[0.05] transition-all cursor-pointer">
                <h3 className="text-xl font-bold mb-3 group-hover:text-white/80 transition-colors">{prod.name}</h3>
                <p className="text-sm opacity-60 mb-4 leading-relaxed">{prod.desc}</p>
                <p className="text-xs opacity-40 italic mb-6">{prod.id}</p>
                <div className="flex items-center gap-1 text-xs font-bold opacity-50 group-hover:opacity-100 transition-all">
                  LEARN MORE <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="mb-32 py-24 glass border-white/20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Get Early Access</h2>
            <p className="opacity-60 mb-10 max-w-xl mx-auto px-6">
              Join the vanguard. Experience the future of digital sovereignty.
              <br />
              <span className="text-sm italic opacity-40">Bergabunglah dengan garis depan teknologi.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto px-6">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all text-white placeholder:text-white/30"
              />
              <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-white/90 transition-all">
                Join
              </button>
            </div>
          </FadeIn>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 opacity-50 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-black rotate-45" />
            </div>
            <span>© 2026 BREMSPACE</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:opacity-100 transition-opacity">Twitter</a>
            <a href="#" className="hover:opacity-100 transition-opacity">GitHub</a>
            <a href="#" className="hover:opacity-100 transition-opacity">span className="hover:opacity-100 transition-opacity">LinkedIn</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
