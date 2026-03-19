"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { MobileNav } from "@/components/layout/MobileNav";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { CashFlowChart } from "@/components/dashboard/CashFlowChart";
import { TransactionList } from "@/components/dashboard/TransactionList";
import { AIInsightsCard } from "@/components/dashboard/AIInsightsCard";
import { keyMetrics } from "@/lib/mock-data";
import {
  DollarSign,
  TrendingUp,
  Flame,
  Clock,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />

        <main className="flex-1 overflow-y-auto p-6 pb-24 md:pb-6">
          {/* Greeting */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground">Good morning, Alex 👋</h1>
            <p className="text-sm text-muted-foreground mt-1">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <MetricCard
              title="Current Balance"
              value={`€${keyMetrics.currentBalance.toLocaleString()}`}
              change={keyMetrics.balanceChange}
              changeLabel="vs last month"
              icon={DollarSign}
              trend="up"
              severity="success"
            />
            <MetricCard
              title="30-Day Forecast"
              value={`€${keyMetrics.forecast30Day.toLocaleString()}`}
              change={keyMetrics.forecastChange}
              changeLabel="projected growth"
              icon={TrendingUp}
              trend="up"
              severity="success"
            />
            <MetricCard
              title="Burn Rate"
              value={`€${keyMetrics.burnRate.toLocaleString()}/mo`}
              change={keyMetrics.burnRateChange}
              changeLabel="vs last month"
              icon={Flame}
              iconColor="text-[#F59E0B]"
              iconBg="bg-[#F59E0B]/10"
              trend="up"
              severity="warning"
            />
            <MetricCard
              title="Runway"
              value={`${keyMetrics.runway} months`}
              change={Math.abs(keyMetrics.runwayChange)}
              changeLabel="vs last month"
              icon={Clock}
              iconColor="text-[#F59E0B]"
              iconBg="bg-[#F59E0B]/10"
              trend="down"
              severity="warning"
            />
          </div>

          {/* Cash Flow Chart */}
          <div className="mb-6">
            <CashFlowChart />
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TransactionList />
            <AIInsightsCard />
          </div>
        </main>
      </div>

      <MobileNav />
    </div>
  );
}
