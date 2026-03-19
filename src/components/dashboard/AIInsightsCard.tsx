"use client";

import { aiInsights } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { AlertTriangle, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Severity = "critical" | "warning" | "positive";

const severityConfig: Record<Severity, { color: string; bgColor: string; borderColor: string; icon: React.ElementType; label: string }> = {
  critical: {
    color: "text-[#EF4444]",
    bgColor: "bg-[#EF4444]/5",
    borderColor: "border-l-[#EF4444]",
    icon: AlertCircle,
    label: "Critical",
  },
  warning: {
    color: "text-[#F59E0B]",
    bgColor: "bg-[#F59E0B]/5",
    borderColor: "border-l-[#F59E0B]",
    icon: AlertTriangle,
    label: "Warning",
  },
  positive: {
    color: "text-[#10B981]",
    bgColor: "bg-[#10B981]/5",
    borderColor: "border-l-[#10B981]",
    icon: CheckCircle,
    label: "Positive",
  },
};

function InsightItem({ insight }: { insight: (typeof aiInsights)[number] }) {
  const config = severityConfig[insight.severity];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "border-l-2 pl-4 py-3 rounded-r-xl transition-all duration-200 hover:pl-5",
        config.borderColor,
        config.bgColor
      )}
    >
      <div className="flex items-start justify-between gap-2 mb-1.5">
        <div className="flex items-center gap-2">
          <Icon className={cn("w-3.5 h-3.5 flex-shrink-0", config.color)} />
          <span className={cn("text-xs font-semibold uppercase tracking-wide", config.color)}>
            {config.label}
          </span>
        </div>
        <span className="text-xs text-muted-foreground">{insight.confidence}% confidence</span>
      </div>
      <p className="text-sm font-semibold text-foreground mb-1">{insight.title}</p>
      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{insight.description}</p>
      <button className={cn("flex items-center gap-1 text-xs font-medium mt-2 transition-colors", config.color, "hover:opacity-80")}>
        {insight.action}
        <ArrowRight className="w-3 h-3" />
      </button>
    </div>
  );
}

export function AIInsightsCard() {
  const topInsights = aiInsights.slice(0, 3);

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base font-semibold text-foreground">AI Insights</h2>
          <p className="text-xs text-muted-foreground mt-0.5">Powered by Fluxio Intelligence</p>
        </div>
        <a
          href="/dashboard/insights"
          className="text-xs font-medium text-[#00C9A7] hover:text-[#00A88B] transition-colors"
        >
          View all
        </a>
      </div>
      <div className="space-y-3">
        {topInsights.map((insight) => (
          <InsightItem key={insight.id} insight={insight} />
        ))}
      </div>
    </div>
  );
}
