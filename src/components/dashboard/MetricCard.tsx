"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowDownRight, LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  changeLabel?: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
  trend?: "up" | "down" | "neutral";
  severity?: "success" | "warning" | "danger" | "neutral";
}

export function MetricCard({
  title,
  value,
  change,
  changeLabel,
  icon: Icon,
  iconColor = "text-[#00C9A7]",
  iconBg = "bg-[#00C9A7]/10",
  trend = "up",
  severity = "neutral",
}: MetricCardProps) {
  const isPositive = trend === "up";
  const severityColors = {
    success: "text-[#10B981]",
    warning: "text-[#F59E0B]",
    danger: "text-[#EF4444]",
    neutral: isPositive ? "text-[#10B981]" : "text-[#EF4444]",
  };

  const changeColor = severityColors[severity];

  return (
    <div className="flux-card-hover rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", iconBg)}>
          <Icon className={cn("w-5 h-5", iconColor)} />
        </div>
        <div className={cn("flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-lg", 
          severity === "success" || (severity === "neutral" && isPositive) 
            ? "bg-[#10B981]/10 text-[#10B981]" 
            : severity === "warning" 
            ? "bg-[#F59E0B]/10 text-[#F59E0B]"
            : "bg-[#EF4444]/10 text-[#EF4444]"
        )}>
          {isPositive ? (
            <ArrowUpRight className="w-3 h-3" />
          ) : (
            <ArrowDownRight className="w-3 h-3" />
          )}
          {Math.abs(change)}%
        </div>
      </div>
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-1">{title}</p>
        <p className="text-2xl font-bold text-foreground tracking-tight">{value}</p>
        {changeLabel && (
          <p className="text-xs text-muted-foreground mt-1">{changeLabel}</p>
        )}
      </div>
    </div>
  );
}
