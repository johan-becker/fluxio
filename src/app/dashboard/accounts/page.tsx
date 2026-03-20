"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Landmark, CreditCard, Wallet, PiggyBank } from "lucide-react";

const accounts = [
  {
    bank: "Deutsche Bank",
    type: "Business Checking",
    masked: "•••• 4821",
    balance: "€24,350.00",
    icon: Landmark,
    color: "#0018A8",
  },
  {
    bank: "Commerzbank",
    type: "Business Savings",
    masked: "•••• 7703",
    balance: "€12,900.00",
    icon: CreditCard,
    color: "#FFD700",
  },
  {
    bank: "N26",
    type: "Business Checking",
    masked: "•••• 3312",
    balance: "€8,420.50",
    icon: Wallet,
    color: "#48D2A0",
  },
  {
    bank: "ING",
    type: "Business Savings",
    masked: "•••• 9156",
    balance: "€6,161.50",
    icon: PiggyBank,
    color: "#FF6200",
  },
];

export default function AccountsPage() {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />

        <main className="flex-1 overflow-y-auto p-6 pb-24 md:pb-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6 flux-enter">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Connected Accounts</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Manage your linked bank accounts
              </p>
            </div>
            <Button className="bg-[#00C9A7] hover:bg-[#00A88B] text-white rounded-xl font-semibold transition-all duration-200">
              <Plus className="w-4 h-4 mr-2" />
              Add Account
            </Button>
          </div>

          {/* Accounts grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-5">
            {accounts.map((account, i) => {
              const Icon = account.icon;
              return (
                <Card
                  key={account.bank}
                  className={`p-6 rounded-2xl border border-border hover:border-[#00C9A7]/30 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 flux-enter flux-enter-${i + 1}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: account.color + "20" }}
                    >
                      <Icon className="w-6 h-6" style={{ color: account.color }} />
                    </div>
                    <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 text-xs font-semibold">
                      Connected
                    </Badge>
                  </div>

                  <h3 className="text-base font-semibold text-foreground mb-1">{account.bank}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{account.type}</p>
                  <p className="text-sm text-muted-foreground font-mono mb-4">{account.masked}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Balance</span>
                    <span className="text-lg font-bold text-foreground">{account.balance}</span>
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
