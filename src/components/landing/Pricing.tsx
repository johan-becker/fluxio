"use client";

import Link from "next/link";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "€0",
    period: "forever",
    description: "Perfect to get started and explore your cash flow basics.",
    features: [
      "30-day cash flow forecast",
      "1 bank account connection",
      "Basic transaction categorization",
      "5 AI insights per month",
      "Email alerts",
    ],
    cta: "Get Started Free",
    href: "/onboarding",
    popular: false,
    variant: "outline" as const,
  },
  {
    name: "Growth",
    price: "€49",
    period: "per month",
    description: "For growing businesses that need reliable cash visibility.",
    features: [
      "90-day cash flow forecast",
      "5 bank account connections",
      "Smart auto-categorization",
      "Unlimited AI insights",
      "Cash alerts & notifications",
      "Scenario modeling",
      "Priority support",
    ],
    cta: "Start Growth Plan",
    href: "/onboarding",
    popular: true,
    variant: "default" as const,
  },
  {
    name: "Pro",
    price: "€149",
    period: "per month",
    description: "For businesses that run on financial intelligence.",
    features: [
      "Everything in Growth",
      "Unlimited bank connections",
      "Custom AI models",
      "Multi-currency support",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    href: "/onboarding",
    popular: false,
    variant: "outline" as const,
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-[#F8FAFB] dark:bg-[#0A1020]" id="pricing">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#00C9A7]/10 border border-[#00C9A7]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-medium text-[#00C9A7]">Simple Pricing</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Invest in your cash flow clarity
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Start free, scale as you grow. No hidden fees, no long-term contracts.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl p-8 transition-all duration-200 hover:-translate-y-1",
                plan.popular
                  ? "bg-[#0F1A2E] border-2 border-[#00C9A7] shadow-xl shadow-[#00C9A7]/10"
                  : "bg-card border border-border shadow-sm hover:shadow-md"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-[#00C9A7] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={cn(
                    "text-sm font-semibold uppercase tracking-widest mb-2",
                    plan.popular ? "text-[#00C9A7]" : "text-muted-foreground"
                  )}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span
                    className={cn(
                      "text-4xl font-bold",
                      plan.popular ? "text-white" : "text-foreground"
                    )}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      plan.popular ? "text-slate-400" : "text-muted-foreground"
                    )}
                  >
                    /{plan.period}
                  </span>
                </div>
                <p
                  className={cn(
                    "text-sm",
                    plan.popular ? "text-slate-400" : "text-muted-foreground"
                  )}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      className={cn(
                        "w-4 h-4 flex-shrink-0 mt-0.5",
                        plan.popular ? "text-[#00C9A7]" : "text-[#10B981]"
                      )}
                    />
                    <span className={plan.popular ? "text-slate-300" : "text-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href={plan.href} className="block">
                <Button
                  className={cn(
                    "w-full h-11 rounded-xl font-semibold transition-all duration-200",
                    plan.popular
                      ? "bg-[#00C9A7] hover:bg-[#00A88B] text-white"
                      : "border-border hover:bg-secondary"
                  )}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
