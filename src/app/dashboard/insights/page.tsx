"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { aiInsights } from "@/lib/mock-data";
import {
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowRight,
  Lightbulb,
  Sparkles,
  Brain,
} from "lucide-react";

const severityConfig = {
  critical: {
    color: "#EF4444",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    badgeBg: "bg-red-500/10 text-red-500",
    icon: XCircle,
  },
  warning: {
    color: "#F59E0B",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    badgeBg: "bg-amber-500/10 text-amber-500",
    icon: AlertTriangle,
  },
  positive: {
    color: "#10B981",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    badgeBg: "bg-emerald-500/10 text-emerald-500",
    icon: CheckCircle,
  },
};

export default function InsightsPage() {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-6 pb-24 md:pb-6">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                AI Insights
                <Sparkles className="w-5 h-5 text-[#00C9A7]" />
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Actionable intelligence from your financial data — updated daily
              </p>
            </div>
            <Badge className="bg-[#00C9A7]/10 text-[#00C9A7] border-[#00C9A7]/20 hover:bg-[#00C9A7]/20">
              <Brain className="w-3 h-3 mr-1" />
              {aiInsights.length} insights
            </Badge>
          </div>

          {/* Summary row */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {(["critical", "warning", "positive"] as const).map((severity) => {
              const count = aiInsights.filter((i) => i.severity === severity).length;
              const config = severityConfig[severity];
              const Icon = config.icon;
              return (
                <Card key={severity} className={`p-4 rounded-2xl border ${config.border}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${config.bg} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" style={{ color: config.color }} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground capitalize">{severity}</p>
                      <p className="text-xl font-bold text-foreground">{count}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Insight Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {aiInsights.map((insight) => {
              const config = severityConfig[insight.severity];
              const Icon = config.icon;
              return (
                <Card
                  key={insight.id}
                  className={`p-5 rounded-2xl border ${config.border} hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-1 self-stretch rounded-full flex-shrink-0"
                      style={{ backgroundColor: config.color }}
                    />
                    <div className="flex-1 min-w-0">
                      {/* Header */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <Badge className={`${config.badgeBg} border-0 text-xs font-semibold capitalize`}>
                          {insight.severity}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex-shrink-0">
                          {insight.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-semibold text-foreground mb-2">{insight.title}</h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {insight.description}
                      </p>

                      {/* Confidence */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs text-muted-foreground">Confidence</span>
                        <div className="flex-1">
                          <Progress value={insight.confidence} className="h-1.5" />
                        </div>
                        <span className="text-xs font-semibold text-foreground">{insight.confidence}%</span>
                      </div>

                      {/* Action */}
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-[#00C9A7] flex items-center gap-1.5">
                          <Lightbulb className="w-3.5 h-3.5" />
                          {insight.action}
                        </p>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 px-3 text-xs text-muted-foreground hover:text-foreground rounded-lg"
                        >
                          Details
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
