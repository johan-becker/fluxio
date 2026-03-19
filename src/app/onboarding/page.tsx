"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Zap,
  ArrowRight,
  ArrowLeft,
  Building2,
  Landmark,
  ShieldCheck,
  PartyPopper,
  CheckCircle,
  CreditCard,
  Wallet,
  PiggyBank,
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { label: "Business", icon: Building2 },
  { label: "Accounts", icon: Landmark },
  { label: "Threshold", icon: ShieldCheck },
  { label: "Ready!", icon: PartyPopper },
];

const banks = [
  { name: "Deutsche Bank", color: "#0018A8", icon: Landmark },
  { name: "Commerzbank", color: "#FFD700", icon: CreditCard },
  { name: "N26", color: "#48D2A0", icon: Wallet },
  { name: "ING", color: "#FF6200", icon: PiggyBank },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [businessName, setBusinessName] = useState("");
  const [connectedBanks, setConnectedBanks] = useState<string[]>([]);
  const [safeBalance, setSafeBalance] = useState(15000);

  const next = () => setCurrentStep((s) => Math.min(s + 1, 3));
  const back = () => setCurrentStep((s) => Math.max(s - 1, 0));

  const toggleBank = (name: string) => {
    setConnectedBanks((prev) =>
      prev.includes(name) ? prev.filter((b) => b !== name) : [...prev, name]
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-8">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 rounded-xl bg-[#00C9A7] flex items-center justify-center">
          <Zap className="w-4 h-4 text-white" />
        </div>
        <span className="font-bold text-xl text-foreground tracking-tight">Fluxio</span>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center gap-2 mb-8">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300",
                i <= currentStep
                  ? "bg-[#00C9A7] text-white scale-110"
                  : "bg-secondary text-muted-foreground"
              )}
            >
              {i < currentStep ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                i + 1
              )}
            </div>
            {i < steps.length - 1 && (
              <div
                className={cn(
                  "w-8 h-0.5 rounded-full transition-all duration-300",
                  i < currentStep ? "bg-[#00C9A7]" : "bg-border"
                )}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <Card className="w-full max-w-lg p-8 rounded-2xl border border-border shadow-sm">
        {/* Step 1: Welcome */}
        {currentStep === 0 && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#00C9A7]/10 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-7 h-7 text-[#00C9A7]" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Let&apos;s set up Fluxio for your business
              </h2>
              <p className="text-sm text-muted-foreground">
                We just need a few details to personalize your experience.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="business-name" className="text-sm font-medium">
                What&apos;s your business name?
              </Label>
              <Input
                id="business-name"
                placeholder="e.g. Morgan Design Studio"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="h-12 rounded-xl text-base"
              />
            </div>
          </div>
        )}

        {/* Step 2: Connect Accounts */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#00C9A7]/10 flex items-center justify-center mx-auto mb-4">
                <Landmark className="w-7 h-7 text-[#00C9A7]" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Connect your bank accounts
              </h2>
              <p className="text-sm text-muted-foreground">
                Securely link your business accounts. We use bank-grade encryption.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {banks.map((bank) => {
                const isConnected = connectedBanks.includes(bank.name);
                const Icon = bank.icon;
                return (
                  <button
                    key={bank.name}
                    onClick={() => toggleBank(bank.name)}
                    className={cn(
                      "flex items-center justify-between p-4 rounded-xl border transition-all duration-200",
                      isConnected
                        ? "border-[#00C9A7] bg-[#00C9A7]/5"
                        : "border-border hover:border-[#00C9A7]/30 hover:bg-secondary/50"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: bank.color + "15" }}
                      >
                        <Icon className="w-5 h-5" style={{ color: bank.color }} />
                      </div>
                      <span className="font-medium text-foreground">{bank.name}</span>
                    </div>
                    {isConnected ? (
                      <Badge className="bg-[#00C9A7]/10 text-[#00C9A7] border-[#00C9A7]/20">
                        Connected
                      </Badge>
                    ) : (
                      <span className="text-xs text-muted-foreground">Click to connect</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 3: Safe Balance */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#00C9A7]/10 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-7 h-7 text-[#00C9A7]" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Set your safe cash floor
              </h2>
              <p className="text-sm text-muted-foreground">
                This is the minimum balance you always want to maintain. Fluxio will alert you before you dip below it.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-center">
                <span className="text-4xl font-bold text-[#00C9A7]">
                  €{safeBalance.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={5000}
                max={100000}
                step={1000}
                value={safeBalance}
                onChange={(e) => setSafeBalance(parseInt(e.target.value))}
                className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-[#00C9A7]"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>€5,000</span>
                <span>€100,000</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Ready */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#00C9A7]/10 flex items-center justify-center mx-auto mb-4">
                <PartyPopper className="w-7 h-7 text-[#00C9A7]" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Your Fluxio is ready! 🎉
              </h2>
              <p className="text-sm text-muted-foreground">
                {businessName ? `${businessName} is` : "You're"} all set up. Here&apos;s your first insight:
              </p>
            </div>

            {/* Preview insight */}
            <Card className="p-4 rounded-xl border-[#00C9A7]/20 bg-[#00C9A7]/5">
              <div className="flex items-start gap-3">
                <div className="w-1 self-stretch rounded-full bg-[#00C9A7] flex-shrink-0" />
                <div>
                  <span className="text-xs font-semibold text-[#00C9A7] uppercase">First Insight</span>
                  <p className="text-sm font-semibold text-foreground mt-1">
                    Based on your account activity, we estimate a strong cash position for the next 30 days with €52,100 projected balance.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">94% confidence • Updated just now</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8">
          {currentStep > 0 ? (
            <Button
              variant="ghost"
              onClick={back}
              className="rounded-xl text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          ) : (
            <div />
          )}

          {currentStep < 3 ? (
            <Button
              onClick={next}
              className="rounded-xl bg-[#00C9A7] hover:bg-[#00A88B] text-white font-semibold px-6 transition-all duration-200 hover:scale-105"
              disabled={currentStep === 0 && !businessName}
            >
              Continue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Link href="/dashboard">
              <Button className="rounded-xl bg-[#00C9A7] hover:bg-[#00A88B] text-white font-semibold px-6 transition-all duration-200 hover:scale-105">
                Go to Dashboard
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          )}
        </div>
      </Card>

      <p className="text-xs text-muted-foreground mt-6">
        Your data is encrypted end-to-end. We never sell your information.
      </p>
    </div>
  );
}

function Badge({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border", className)}>
      {children}
    </span>
  );
}
