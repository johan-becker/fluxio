"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";
import { Sun, Moon, Pencil } from "lucide-react";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />

        <main className="flex-1 overflow-y-auto p-6 pb-24 md:pb-6">
          {/* Header */}
          <div className="mb-6 flux-enter">
            <h1 className="text-2xl font-bold text-foreground">Settings</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage your account and preferences
            </p>
          </div>

          <div className="max-w-2xl space-y-6">
            {/* Profile card */}
            <Card className="p-6 rounded-2xl border border-border flux-enter flux-enter-1">
              <h2 className="text-base font-semibold text-foreground mb-5">Profile</h2>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Alex Morgan"
                    className="h-10 rounded-xl text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="alex@morgan.studio"
                    className="h-10 rounded-xl text-sm"
                  />
                </div>
                <div className="flex justify-end">
                  <Button className="bg-[#00C9A7] hover:bg-[#00A88B] text-white rounded-xl font-semibold transition-all duration-200">
                    Save Changes
                  </Button>
                </div>
              </div>
            </Card>

            {/* Preferences card */}
            <Card className="p-6 rounded-2xl border border-border flux-enter flux-enter-2">
              <h2 className="text-base font-semibold text-foreground mb-5">Preferences</h2>
              <div className="divide-y divide-border">
                {/* Safe Balance Floor */}
                <div className="flex items-center justify-between py-4 first:pt-0">
                  <div>
                    <p className="text-sm font-medium text-foreground">Safe Balance Floor</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Alert threshold for minimum cash balance
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-foreground">€15,000</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-xl h-8 px-3 text-xs transition-all duration-200"
                    >
                      <Pencil className="w-3 h-3 mr-1.5" />
                      Edit
                    </Button>
                  </div>
                </div>

                {/* Notifications */}
                <div className="flex items-center justify-between py-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">Notifications</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Email alerts for cash flow events
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-xl h-8 px-3 text-xs text-emerald-600 border-emerald-500/30 hover:bg-emerald-500/10 transition-all duration-200"
                  >
                    Enabled
                  </Button>
                </div>

                {/* Theme */}
                <div className="flex items-center justify-between py-4 last:pb-0">
                  <div>
                    <p className="text-sm font-medium text-foreground">Theme</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Switch between light and dark mode
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-xl h-8 px-3 text-xs transition-all duration-200"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun className="w-3 h-3 mr-1.5" />
                        Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="w-3 h-3 mr-1.5" />
                        Dark Mode
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>

      <MobileNav />
    </div>
  );
}
