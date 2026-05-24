"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Cpu, Globe, Zap, ArrowRight, ChevronRight, Terminal, Shield, Activity } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

function FadeUp({ children, delay = 0, className = '' }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 1.4] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GlassCard({
  children,
  className = '',
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`glass p-8 ${hover ? 'transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_60px_rgba(139,92,246,0.06)]' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

const products = [
  {
    name: 'BremOS',
    desc: 'Spatial operating system for next-gen hardware.',
    id: 'Sistem operasi spasial',
    icon: Terminal,
  },
  {
    name: 'VoidCore',
    desc: 'High-performance compute engine for dApps.',
    id: 'Mesin komputasi terdesentralisasi',
    icon: Activity,
  },
  {
    name: 'NovaLink',
    desc: 'Zero-latency bridge across distributed nodes.',
    id: 'Komunikasi zero-latency',
    icon: Zap,
  },
];

const techs = ['Rust', 'Wasm', 'Next.js', 'TypeScript', 'gRPC', 'QUIC'];

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#020202] selection:bg-violet-500/30">
      {/* Background layers */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -left-[20%] -top-[20%] h-[60%] w-[60%] rounded-full bg-violet-900/15 blur-[150px]" />
        <div className="absolute -bottom-[20%] -right-[20%] h-[60%] w-[60%] rounded-full bg-cyan-900/15 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Navbar */}
        <nav className="fixed left-0 right-0 top-0 z-50 mx-auto max-w-7xl px-6">
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/[0.06] bg-black/60 px-6 py-4 backdrop-blur-2xl">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                <div className="h-4 w-4 rotate-45 rounded-sm bg-black" />
              </div>
              <span className="text-sm font-bold tracking-tight uppercase">Bremspace</span>
            </div>
            <div className="hidden items-center gap-8 text-sm text-white/40 md:flex">
              <a href="#vision" className="transition-colors hover:text-white/80">Vision</a>
              <a href="#solutions" className="transition-colors hover:text-white/80">Solutions</a>
              <a href="#impact" className="transition-colors hover:text-white/80">Impact</a>
            </div>
            <a
              href="#waitlist"
              className="rounded-full bg-white px-5 py-2 text-xs font-bold text-black transition-all hover:scale-105 active:scale-95"
            >
              Get Access
            </a>
          </div>
        </nav>

        <main className="pt-48">
          {/* Hero */}
          <section className="mb-48 flex flex-col items-center text-center">
            <FadeUp delay={0}>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/50">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                Autonomous Venture Studio
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
                <h1 className="mb-8 text-[clamp(3rem,10vw,8rem)] font-black leading-[0.9] tracking-tighter">
                  Empowering<br />
                  <span className="bg-gradient-to-b from-white via-white/80 to-white/20 bg-clip-text text-transparent">
                    Digital Society.
                  </span>
                </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mb-12 max-w-2xl text-lg leading-relaxed text-white/40 md:text-xl">
                We make advanced technology accessible to everyone—simplifying everyday lives through intelligent AI solutions.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <button className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-black shadow-xl shadow-white/10 transition-all hover:scale-105">
                  Enter the Void
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 font-bold text-white/60 transition-all hover:bg-white/10">
                  Whitepaper
                </button>
              </div>
            </FadeUp>
          </section>

          {/* Vision Bento */}
          <section id="vision" className="mb-48">
            <FadeUp>
              <h2 className="mb-20 text-center text-4xl font-bold tracking-tighter">Core Philosophy</h2>
            </FadeUp>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
              className="bento-grid"
            >
              <FadeUp className="md:col-span-2 md:row-span-2" delay={0.1}>
                <GlassCard className="flex h-full flex-col justify-between border-white/[0.12] glass-glow" hover>
                  <div>
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-500/20">
                      <Globe className="h-6 w-6 text-violet-400" />
                    </div>
                    <h3 className="mb-4 text-3xl font-bold">Global Sovereignty</h3>
                    <p className="max-w-md leading-relaxed text-white/40">
                      Building decentralized infrastructure that ensures data autonomy and systemic resilience.
                    </p>
                  </div>
                  <div className="mt-8 rounded-2xl border border-white/[0.06] bg-black/40 px-4 py-3 font-mono text-[10px] text-white/30">
                    <span className="text-violet-400">$</span> bremspace init --global-sovereignty
                  </div>
                </GlassCard>
              </FadeUp>

              <FadeUp delay={0.2}>
                <GlassCard className="flex h-full flex-col justify-between transition-all duration-500 hover:border-cyan-500/30" hover>
                  <Cpu className="mb-4 h-8 w-8 text-cyan-400" />
                  <div>
                    <h3 className="mb-2 text-xl font-bold">Neural Sync</h3>
                    <p className="text-sm text-white/40">Low-latency synchronization for distributed minds.</p>
                  </div>
                </GlassCard>
              </FadeUp>

              <FadeUp delay={0.25}>
                <GlassCard className="flex h-full flex-col justify-between transition-all duration-500 hover:border-indigo-500/30" hover>
                  <Shield className="mb-4 h-8 w-8 text-indigo-400" />
                  <div>
                    <h3 className="mb-2 text-xl font-bold">Quantum Layer</h3>
                    <p className="text-sm text-white/40">Post-quantum encryption by default.</p>
                  </div>
                </GlassCard>
              </FadeUp>

              <FadeUp className="md:col-span-2" delay={0.3}>
                <GlassCard className="flex items-center gap-6 transition-all duration-500 hover:border-white/20" hover>
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-transform group-hover:scale-110">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 text-2xl font-bold">Interstellar Mesh</h3>
                    <p className="mb-4 text-sm text-white/40">Network protocols optimized for long-distance propagation.</p>
                    <div className="relative h-1.5 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="absolute inset-0 h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                        initial={{ width: '0%' }}
                        whileInView={{ width: '70%' }}
                        transition={{ duration: 2, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                </GlassCard>
              </FadeUp>
            </motion.div>
          </section>

          {/* Tech Stack */}
          <section id="stack" className="mb-48">
            <FadeUp>
              <div className="mb-20 text-center">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Infrastructure</p>
                <h3 className="text-4xl font-bold tracking-tighter">Powered by Modernity.</h3>
              </div>
            </FadeUp>
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 opacity-30 grayscale transition-all duration-700 hover:grayscale-0">
              {techs.map((t) => (
                <span key={t} className="cursor-default text-3xl font-black tracking-tighter transition-colors hover:text-white">
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* Ecosystem */}
          <section id="ecosystem" className="mb-48">
            <FadeUp>
              <h2 className="mb-20 text-center text-4xl font-bold tracking-tighter">Future Ecosystem</h2>
            </FadeUp>
            <div className="grid gap-8 md:grid-cols-3">
              {products.map((p) => {
                const Icon = p.icon;
                return (
                  <FadeUp key={p.name} delay={0.1}>
                    <GlassCard className="group cursor-pointer transition-all duration-500 hover:bg-white/[0.06]" hover>
                      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-transform group-hover:scale-110">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="mb-3 text-2xl font-bold transition-colors group-hover:text-white/90">{p.name}</h3>
                      <p className="mb-4 text-sm leading-relaxed text-white/40">{p.desc}</p>
                      <p className="mb-6 font-mono text-xs italic text-white/20">{p.id}</p>
                      <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-white/30 transition-all group-hover:text-white">
                        Explore <ChevronRight className="h-3 w-3" />
                      </div>
                    </GlassCard>
                  </FadeUp>
                );
              })}
            </div>
          </section>

          {/* Waitlist */}
          <section id="waitlist" className="glass mb-48 overflow-hidden rounded-[3rem] border-white/10 py-28 text-center">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/8 via-transparent to-cyan-500/8" />
            <FadeUp>
              <h2 className="mb-8 text-[clamp(2.5rem,6vw,4.5rem)] font-black tracking-tighter">Get Early Access</h2>
              <p className="mx-auto mb-12 max-w-xl px-6 text-lg text-white/30">
                Join the vanguard. Experience the future of digital sovereignty.
              </p>
              <div className="mx-auto flex max-w-md flex-col gap-4 px-6 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className="flex-1 rounded-full border border-white/10 bg-black/40 px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <button
                  onClick={() => setSubmitted(true)}
                  className="rounded-full bg-white px-10 py-4 font-bold text-black shadow-xl shadow-white/10 transition-all hover:scale-105 active:scale-95"
                >
                  Join
                </button>
              </div>
              <AnimatePresence>
                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 font-bold text-violet-400"
                  >
                    Welcome to the void, Pioneer.
                  </motion.p>
                )}
              </AnimatePresence>
            </FadeUp>
          </section>
        </main>

        {/* Footer */}
        <footer className="flex flex-col items-center justify-between gap-8 border-t border-white/[0.04] py-16 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
              <div className="h-2.5 w-2.5 rotate-45 rounded-sm bg-black" />
            </div>
            &copy; 2026 BREMSPACE
          </div>
          <div className="flex gap-10">
            {['Twitter', 'GitHub', 'LinkedIn'].map((s) => (
              <a key={s} href="#" className="transition-opacity hover:opacity-100">{s}</a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
