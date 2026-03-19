"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { cashFlowData } from "@/lib/mock-data";
import { useTheme } from "next-themes";

const formatCurrency = (value: number) =>
  `€${(value / 1000).toFixed(0)}k`;

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; dataKey: string }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-xl p-3 shadow-lg text-sm">
        <p className="font-semibold text-foreground mb-1">{label}</p>
        {payload.map((entry, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: entry.dataKey === "balance" ? "#00C9A7" : "#E2E8F0",
              }}
            />
            <span className="text-muted-foreground capitalize">{entry.dataKey}:</span>
            <span className="font-semibold text-foreground">
              €{entry.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

// Sample every 7th point for cleaner X axis
const chartData = cashFlowData.filter((_, i) => i % 7 === 0 || i === cashFlowData.length - 1);

export function CashFlowChart() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const gridColor = isDark ? "#1E293B" : "#E2E8F0";
  const axisColor = isDark ? "#64748B" : "#94A3B8";

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-base font-semibold text-foreground">Cash Flow — Next 90 Days</h2>
          <p className="text-sm text-muted-foreground mt-0.5">Projected balance vs. safe threshold</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#00C9A7]" />
            <span className="text-muted-foreground font-medium">Balance</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-0.5 bg-[#EF4444] rounded" style={{ display: "inline-block", borderTop: "2px dashed #EF4444" }} />
            <span className="text-muted-foreground font-medium">Safe Floor</span>
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={cashFlowData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <defs>
            <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00C9A7" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#00C9A7" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 11, fill: axisColor }}
            tickLine={false}
            axisLine={false}
            interval={13}
          />
          <YAxis
            tickFormatter={formatCurrency}
            tick={{ fontSize: 11, fill: axisColor }}
            tickLine={false}
            axisLine={false}
            width={44}
          />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine
            y={15000}
            stroke="#EF4444"
            strokeDasharray="4 4"
            strokeOpacity={0.7}
            strokeWidth={1.5}
          />
          <Area
            type="monotone"
            dataKey="balance"
            stroke="#00C9A7"
            strokeWidth={2.5}
            fill="url(#balanceGradient)"
            dot={false}
            activeDot={{ r: 4, fill: "#00C9A7", strokeWidth: 2, stroke: "#fff" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
