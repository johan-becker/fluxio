"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import {
  TrendingUp,
  Zap,
  Brain,
  Bell,
  Shield,
  ArrowRight,
  Moon,
  Sun,
  Menu,
  X,
  BarChart3,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/landing/Hero";
import { Pricing } from "@/components/landing/Pricing";
import { useState } from "react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Forecasting",
    description:
      "Our AI analyzes your historical transactions, recurring bills, and seasonal patterns to predict your cash position 90 days out with 90%+ accuracy.",
    color: "text-[#00C9A7]",
    bg: "bg-[#00C9A7]/10",
  },
  {
    icon: Bell,
    title: "Smart Cash Alerts",
    description:
      "Get notified before a cash dip happens, not after. Fluxio detects risk patterns 14-21 days in advance so you have time to act.",
    color: "text-[#F59E0B]",
    bg: "bg-[#F59E0B]/10",
  },
  {
    icon: Shield,
    title: "Safe Balance Protection",
    description:
      "Set your minimum safe cash balance and let Fluxio guard it. Every forecast highlights when you might breach it and how to avoid it.",
    color: "text-[#10B981]",
    bg: "bg-[#10B981]/10",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Connect your accounts",
    description: "Securely link your business bank accounts in under 2 minutes.",
  },
  {
    step: "02",
    title: "Set your safe floor",
    description: "Tell Fluxio the minimum cash you always want to maintain.",
  },
  {
    step: "03",
    title: "Get your forecast",
    description: "See your next 90 days of cash flow with AI insights instantly.",
  },
];

function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0F1A2E]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#00C9A7] flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-bold text-white text-lg">Fluxio</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {["Features", "Pricing", "Blog", "Docs"].map((item) => (
            <a
              key={item}
              href={item === "Pricing" ? "#pricing" : "#"}
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Link href="/dashboard">
            <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-white/10 h-9 px-4 rounded-lg text-sm border-0 bg-transparent">
              Sign In
            </Button>
          </Link>
          <Link href="/onboarding">
            <Button className="bg-[#00C9A7] hover:bg-[#00A88B] text-white h-9 px-4 rounded-lg text-sm font-semibold transition-all duration-200">
              Start Free
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-400"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0F1A2E] border-t border-white/10 px-6 py-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
          {["Features", "Pricing", "Blog", "Docs"].map((item) => (
            <a key={item} href="#" className="block text-slate-400 hover:text-white">
              {item}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <Link href="/dashboard" className="flex-1">
              <Button variant="ghost" className="w-full border border-white/20 text-white hover:bg-white/10 bg-transparent">Sign In</Button>
            </Link>
            <Link href="/onboarding" className="flex-1">
              <Button className="w-full bg-[#00C9A7] hover:bg-[#00A88B] text-white">Start Free</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Features */}
      <section className="py-24 bg-white dark:bg-[#111827]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#00C9A7]/10 border border-[#00C9A7]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-medium text-[#00C9A7]">Why Fluxio</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Intelligence built for SMBs
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Not another accounting tool. Fluxio is your cash flow co-pilot — always on, always looking ahead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`group p-8 rounded-2xl border border-border bg-card hover:border-[#00C9A7]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flux-enter flux-enter-${i + 1}`}
                >
                  <div className={`w-12 h-12 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-[#F8FAFB] dark:bg-[#0A1020]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#00C9A7]/10 border border-[#00C9A7]/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-xs font-medium text-[#00C9A7]">How It Works</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                From setup to insight in under 5 minutes
              </h2>
              <div className="space-y-8">
                {howItWorks.map((step, i) => (
                  <div key={step.step} className={`flex gap-5 flux-enter flux-enter-${i + 1}`}>
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#0F1A2E] dark:bg-[#1E293B] border border-[#00C9A7]/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-[#00C9A7]">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/onboarding" className="inline-flex mt-10">
                <Button className="h-11 px-6 rounded-xl bg-[#00C9A7] hover:bg-[#00A88B] text-white font-semibold transition-all duration-200 hover:scale-105">
                  Get Started Free
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Insight cards preview */}
            <div className="space-y-4">
              {[
                { color: "#10B981", label: "Positive", title: "Revenue momentum +23% MoM", badge: "94% confidence" },
                { color: "#F59E0B", label: "Warning", title: "Burn rate accelerating — review SaaS", badge: "87% confidence" },
                { color: "#EF4444", label: "Critical", title: "Cash dip predicted April 2nd", badge: "94% confidence" },
              ].map((card, i) => (
                <div
                  key={card.title}
                  className={`bg-card border border-border rounded-2xl p-5 flex items-start gap-4 hover:border-[#00C9A7]/20 transition-all duration-200 hover:shadow-md flux-enter flux-enter-${i + 1}`}
                >
                  <div
                    className="w-1 self-stretch rounded-full flex-shrink-0"
                    style={{ backgroundColor: card.color }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: card.color }}>
                        {card.label}
                      </span>
                      <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                        {card.badge}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-foreground">{card.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <Pricing />

      {/* CTA Section */}
      <section className="py-24 bg-[#0F1A2E] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00C9A7]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Stop guessing.{" "}
            <span className="text-[#00C9A7]">Start knowing.</span>
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Join hundreds of SMBs who use Fluxio to stay cash-positive and grow with confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/onboarding">
              <Button className="h-12 px-8 rounded-xl bg-[#00C9A7] hover:bg-[#00A88B] text-white font-semibold text-base shadow-lg shadow-[#00C9A7]/25 transition-all duration-200 hover:scale-105">
                Start Free — No CC Required
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-slate-500">
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" />14-day trial</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" />No credit card</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" />Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080E1A] border-t border-white/5 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-[#00C9A7] flex items-center justify-center">
                  <Zap className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="font-bold text-white text-lg">Fluxio</span>
              </div>
              <p className="text-sm text-slate-500 max-w-xs">
                AI-powered cash flow intelligence for small and medium businesses.
              </p>
            </div>
            {[
              { label: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
              { label: "Company", links: ["About", "Blog", "Careers", "Contact"] },
              { label: "Legal", links: ["Privacy", "Terms", "Security", "GDPR"] },
            ].map((col) => (
              <div key={col.label}>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">{col.label}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">© 2026 Fluxio. All rights reserved.</p>
            <p className="text-sm text-slate-600">Built for founders who care about cash.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
