"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Rocket, Cpu, Globe, Zap, ArrowRight, ChevronRight, Terminal, Shield, Activity } from 'lucide-react';

const FadeIn = ({ children, delay = 0, duration = 0.8 }: { children: React.ReactNode; delay?: number; duration?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 1.4] }}
  >
    {children}
  </motion.div>
);

const GlassCard = ({ children, className, colSpan = "col-span-1", rowSpan = "row-span-1" }: { children: React.ReactNode; className?: string; colSpan?: string; rowSpan?: string }) => (
  <motion.div
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className={cn(
      "relative group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl",
      "hover:border-white/20 transition-all duration-500",
      colSpan, rowSpan, className
    )}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
    <div className="relative z-10 p-8 h-full">{children}</div>
  </motion.div>
);

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="relative min-h-screen text-white selection:bg-violet-500/30 font-sans overflow-x-hidden">
      <div className="fixed inset-0 z-[-1] bg-[#020202]" />
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-violet-900/20 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/20 blur-[120px] pointer-events-none" />
      <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-2xl border-b border-white/5 bg-black/20">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <div className="w-5 h-5 bg-black rounded-sm rotate-45" />
          </div>
          <span className="font-bold text-xl tracking-tighter uppercase">Bremspace</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium opacity-40 group-hover:opacity-100 transition-all">
          <a href="#vision" className="hover:text-white transition-colors">Vision</a>
          <a href="#tech" className="hover:text-white transition-colors">Stack</a>
          <a href="#ecosystem" className="hover:text-white transition-colors">Ecosystem</a>
        </div>
        <a href="#waitlist" className="px-5 py-2.5 bg-white text-black rounded-full text-xs font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-white/10">
          Get Access
        </a>
      </nav>

      <main className="pt-40 px-6 max-w-7xl mx-auto relative z-10">
        {/* HERO */}
        <section className="flex flex-col items-center text-center mb-40 relative">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-[10px] uppercase tracking-widest font-bold mb-8 opacity-60">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Autonomous Venture Studio
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-none">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">Beyond Space.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-2xl opacity-40 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              We merge human creativity with AI autonomy to build the next frontier of scalable software.
              <span className="block text-sm italic opacity-30 mt-4 font-mono tracking-wide">
                Sistem masa depan untuk kedaulatan teknologi global.
              </span>
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group px-10 py-5 bg-white text-black rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-white/10">
                Enter the Void <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all opacity-60 hover:opacity-100">
                Whitepaper
              </button>
            </div>
          </FadeIn>
        </section>

        {/* VISION BENTO */}
        <section id="vision" className="mb-40">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-20 tracking-tighter">Core Philosophy</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]">
            <GlassCard colSpan="md:col-span-2" rowSpan="md:row-span-2" className="border-white/20 shadow-2xl shadow-violet-500/10">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-violet-500/20 flex items-center justify-center mb-6 border border-violet-500/30">
                    <Globe className="w-6 h-6 text-violet-400" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Global Sovereignty</h3>
                  <p className="text-zinc-400 leading-relaxed max-w-md">
                    Building decentralized infrastructure that ensures data autonomy and systemic resilience.
                    <span className="block mt-4 text-sm opacity-40 italic">Membangun infrastruktur terdesentralisasi untuk kedaulatan data.</span>
                  </p>
                </div>
                <div className="mt-8 p-4 bg-black/40 rounded-2xl border border-white/10 font-mono text-[10px] opacity-40">
                  <span className="text-violet-400">$</span> bremspace init --global-sovereignty
                </div>
              </div>
            </GlassCard>

            <GlassCard className="hover:border-cyan-500/30 transition-all duration-500">
              <div className="flex flex-col h-full justify-between">
                <Cpu className="w-8 h-8 text-cyan-400 mb-4" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Neural Sync</h3>
                  <p className="text-sm opacity-50">Low-latency synchronization for distributed minds.</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="hover:border-indigo-500/30 transition-all duration-500">
              <div className="flex flex-col h-full justify-between">
                <Shield className="w-8 h-8 text-indigo-400 mb-4" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Quantum Layer</h3>
                  <p className="text-sm opacity-50">Post-quantum encryption by default.</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard colSpan="md:col-span-2" className="group hover:border-white/30">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">Interstellar Mesh</h3>
                  <p className="text-sm opacity-50">Network protocols optimized for long-distance propagation.</p>
                  <div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden relative">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 h-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '70%' }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* TECH STACK */}
        <section id="tech" className="mb-40 py-20">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-sm uppercase tracking-[0.3em] opacity-40 font-bold mb-4">Infrastructure</h2>
              <h3 className="text-4xl font-bold tracking-tighter">Powered by Modernity.</h3>
            </div>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {['Rust', 'Wasm', 'Next.js', 'TypeScript', 'gRPC', 'QUIC'].map((tech) => (
              <span key={tech} className="text-3xl font-black tracking-tighter hover:text-white transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ECOSYSTEM */}
        <section id="ecosystem" className="mb-40">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-20 tracking-tighter">Future Ecosystem</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'BremOS', desc: 'A spatial operating system for the next-gen hardware.', id: 'Sistem operasi spasial untuk hardware generasi baru.', icon: <Terminal className="w-6 h-6" /> },
              { name: 'VoidCore', desc: 'High-performance compute engine for decentralized apps.', id: 'Mesin komputasi performa tinggi untuk aplikasi terdesentralisasi.', icon: <Activity className="w-6 h-6" /> },
              { name: 'NovaLink', desc: 'Zero-latency communication bridge across nodes.', id: 'Sistem komunikasi zero-latency antar node.', icon: <Zap className="w-6 h-6" /> }
            ].map((prod) => (
              <GlassCard key={prod.name} className="group hover:bg-white/[0.08] transition-all cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {prod.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">{prod.name}</h3>
                <p className="text-sm opacity-50 mb-4 leading-relaxed">{prod.desc}</p>
                <p className="text-xs opacity-30 italic mb-6 font-mono">{prod.id}</p>
                <div className="flex items-center gap-1 text-xs font-bold opacity-30 group-hover:opacity-100 transition-all uppercase tracking-widest">
                  Explore <ChevronRight className="w-3 h-3" />
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* WAITLIST */}
        <section id="waitlist" className="mb-40 py-32 rounded-[4rem] glass border-white/10 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Get Early Access</h2>
            <p className="opacity-40 mb-12 max-w-xl mx-auto px-6 text-lg font-light">
              Join the vanguard. Experience the future of digital sovereignty.
              <span className="block text-sm italic opacity-30 mt-3">Bergabunglah dengan garis depan teknologi.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto px-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                className="flex-1 px-6 py-5 rounded-full bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-white placeholder:text-white/20"
              />
              <button
                onClick={() => setIsSubmitted(true)}
                className="px-10 py-5 bg-white text-black rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10"
              >
                Join
              </button>
            </div>
            <AnimatePresence>
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 text-sm font-bold text-violet-400"
                >
                  Welcome to the void, Pioneer. Check your email soon.
                </motion.p>
              )}
            </AnimatePresence>
          </FadeIn>
        </section>

        {/* FOOTER */}
        <footer className="py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 opacity-30 text-[10px] uppercase tracking-[0.2em] font-bold">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-black rotate-45" />
            </div>
            <span>&copy; 2026 BREMSPACE ENGINE</span>
          </div>
          <div className="flex gap-10">
            <a href="#" className="hover:opacity-100 transition-opacity">Twitter</a>
            <a href="#" className="hover:opacity-100 transition-opacity">GitHub</a>
            <a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
