"use client";

import Link from "next/link";
import { ArrowRight, Play, TrendingUp, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0F1A2E] pt-24 pb-20">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00C9A7]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00C9A7]/8 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFhMmI0YSIgb3BhY2l0eT0iMC4zIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#00C9A7]/10 border border-[#00C9A7]/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 bg-[#00C9A7] rounded-full animate-pulse" />
          <span className="text-xs font-medium text-[#00C9A7]">AI-powered for 2026 — Now in Beta</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          Your Business
          <br />
          Always Has{" "}
          <span className="text-[#00C9A7] relative">
            Cash
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
              <path d="M2 6C40 2 100 1 198 6" stroke="#00C9A7" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Fluxio gives small business owners AI-powered 90-day cash flow forecasting.
          No accounting degree needed — just clear, actionable intelligence.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/onboarding">
            <Button className="h-12 px-8 rounded-xl bg-[#00C9A7] hover:bg-[#00A88B] text-white font-semibold text-base shadow-lg shadow-[#00C9A7]/25 transition-all duration-200 hover:scale-105">
              Start Free
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button
              variant="outline"
              className="h-12 px-8 rounded-xl border-white/20 text-white hover:bg-white/10 font-semibold text-base transition-all duration-200"
            >
              <Play className="mr-2 w-4 h-4" />
              See Demo
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mb-16">
          {[
            { value: "90 Days", label: "Cash Forecast" },
            { value: "< 5 min", label: "Setup Time" },
            { value: "3.2x", label: "Avg. Runway Extension" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Dashboard preview card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00C9A7]/20 to-[#00C9A7]/5 rounded-3xl blur-xl" />
          <div className="relative bg-[#111827] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Mock browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#0F1A2E]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-[#1E293B] rounded-md px-3 py-1 text-xs text-slate-500 text-left max-w-xs mx-auto">
                  app.fluxio.io/dashboard
                </div>
              </div>
            </div>

            {/* Mock dashboard content */}
            <div className="p-6 grid grid-cols-4 gap-3 mb-4">
              {[
                { label: "Cash Balance", value: "€47,832", color: "text-[#10B981]" },
                { label: "30-Day Forecast", value: "€52,100", color: "text-[#10B981]" },
                { label: "Burn Rate", value: "€8,200/mo", color: "text-[#F59E0B]" },
                { label: "Runway", value: "5.8 months", color: "text-[#F59E0B]" },
              ].map((card) => (
                <div key={card.label} className="bg-[#1E293B] rounded-xl p-3">
                  <p className="text-[10px] text-slate-500 mb-1">{card.label}</p>
                  <p className={`text-sm font-bold ${card.color}`}>{card.value}</p>
                </div>
              ))}
            </div>

            {/* Mock chart */}
            <div className="mx-6 mb-6 bg-[#1E293B] rounded-xl h-32 flex items-end px-4 pb-4 gap-0.5 overflow-hidden">
              {[40, 55, 45, 60, 52, 70, 65, 80, 75, 85, 72, 88, 82, 95, 90].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    background: `rgba(0,201,167,${0.3 + i * 0.04})`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
