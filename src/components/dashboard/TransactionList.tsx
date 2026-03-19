"use client";

import { upcomingTransactions } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import {
  Building2,
  Users,
  CreditCard,
  Receipt,
  ShoppingBag,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
} from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  "Client Payment": ArrowUpRight,
  "Payroll": Users,
  "Rent": Building2,
  "SaaS / Tools": CreditCard,
  "Tax": Receipt,
  "Operations": ShoppingBag,
};

function TransactionItem({
  item,
}: {
  item: (typeof upcomingTransactions)[number];
}) {
  const Icon = categoryIcons[item.category] || CreditCard;
  const isIncome = item.type === "income";

  return (
    <div className="flex items-center gap-3 py-3 border-b border-border last:border-0 group">
      <div
        className={cn(
          "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200",
          isIncome
            ? "bg-[#10B981]/10 text-[#10B981]"
            : "bg-[#EF4444]/10 text-[#EF4444]"
        )}
      >
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-xs text-muted-foreground">{item.category}</span>
          <span className="text-muted-foreground">·</span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            {item.daysUntil}d
          </span>
        </div>
      </div>
      <div className="text-right flex-shrink-0">
        <p
          className={cn(
            "text-sm font-semibold",
            isIncome ? "text-[#10B981]" : "text-[#EF4444]"
          )}
        >
          {isIncome ? "+" : ""}
          {item.amount > 0 ? "" : ""}
          €{Math.abs(item.amount).toLocaleString()}
        </p>
        <p className="text-xs text-muted-foreground">
          {new Date(item.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}

export function TransactionList() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base font-semibold text-foreground">Upcoming Transactions</h2>
          <p className="text-xs text-muted-foreground mt-0.5">Next 30 days</p>
        </div>
        <a
          href="/dashboard/cashflow"
          className="text-xs font-medium text-[#00C9A7] hover:text-[#00A88B] transition-colors"
        >
          View all
        </a>
      </div>
      <div>
        {upcomingTransactions.map((item) => (
          <TransactionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
