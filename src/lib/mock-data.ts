// ─── Cash Flow Forecast ───────────────────────────────────────────────────────
function generateCashFlowData() {
  const data = [];
  const today = new Date();
  let balance = 47832;

  for (let i = 0; i < 90; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    // Simulate weekly patterns + monthly events
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate();

    let dailyChange = 0;

    // Regular daily revenue (Mon-Fri)
    if (dayOfWeek > 0 && dayOfWeek < 6) {
      dailyChange += Math.random() * 800 + 200;
    }

    // Weekly SaaS subscriptions collected (varies)
    if (dayOfWeek === 2) {
      dailyChange += Math.random() * 2000 + 500;
    }

    // Monthly expenses
    if (dayOfMonth === 1) {
      dailyChange -= 4200; // Rent
    }
    if (dayOfMonth === 15) {
      dailyChange -= 8500; // Payroll
    }
    if (dayOfMonth === 28 || dayOfMonth === 29) {
      dailyChange -= 8500; // Payroll
    }
    if (dayOfMonth === 5) {
      dailyChange -= 1200; // SaaS tools
    }

    // Random variance
    dailyChange += (Math.random() - 0.45) * 300;

    // Slight upward trend
    dailyChange += i * 0.5;

    balance += dailyChange;
    balance = Math.max(balance, 8000); // Floor

    data.push({
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      fullDate: date.toISOString().split("T")[0],
      balance: Math.round(balance),
      projected: Math.round(balance + (Math.random() - 0.5) * 500),
      threshold: 15000, // Min safe balance
      dayIndex: i,
    });
  }

  return data;
}

export const cashFlowData = generateCashFlowData();

// ─── Monthly Cash Flow (Bar Chart) ────────────────────────────────────────────
export const monthlyCashFlow = [
  { month: "Oct", income: 62400, expenses: 48200, net: 14200 },
  { month: "Nov", income: 58900, expenses: 51300, net: 7600 },
  { month: "Dec", income: 71200, expenses: 52800, net: 18400 },
  { month: "Jan", income: 54300, expenses: 49100, net: 5200 },
  { month: "Feb", income: 66800, expenses: 53400, net: 13400 },
  { month: "Mar", income: 73100, expenses: 55200, net: 17900 },
];

// ─── Transactions ─────────────────────────────────────────────────────────────
export const transactions = [
  {
    id: "t1",
    name: "Acme Corp — Invoice #1042",
    category: "Client Payment",
    amount: 12500,
    date: "2026-03-19",
    type: "income" as const,
    status: "completed" as const,
  },
  {
    id: "t2",
    name: "Office Rent — March",
    category: "Rent",
    amount: -4200,
    date: "2026-03-01",
    type: "expense" as const,
    status: "completed" as const,
  },
  {
    id: "t3",
    name: "Payroll — Feb 28",
    category: "Payroll",
    amount: -8500,
    date: "2026-02-28",
    type: "expense" as const,
    status: "completed" as const,
  },
  {
    id: "t4",
    name: "Stripe Revenue",
    category: "Sales",
    amount: 7840,
    date: "2026-03-18",
    type: "income" as const,
    status: "completed" as const,
  },
  {
    id: "t5",
    name: "AWS Cloud Services",
    category: "SaaS / Tools",
    amount: -890,
    date: "2026-03-15",
    type: "expense" as const,
    status: "completed" as const,
  },
  {
    id: "t6",
    name: "TechStart Ltd — Consulting",
    category: "Client Payment",
    amount: 6200,
    date: "2026-03-14",
    type: "income" as const,
    status: "completed" as const,
  },
  {
    id: "t7",
    name: "Slack + Notion + Linear",
    category: "SaaS / Tools",
    amount: -320,
    date: "2026-03-10",
    type: "expense" as const,
    status: "completed" as const,
  },
  {
    id: "t8",
    name: "VAT Payment Q1",
    category: "Tax",
    amount: -3800,
    date: "2026-03-05",
    type: "expense" as const,
    status: "completed" as const,
  },
  {
    id: "t9",
    name: "InnovateCo — Retainer",
    category: "Client Payment",
    amount: 4500,
    date: "2026-03-03",
    type: "income" as const,
    status: "completed" as const,
  },
  {
    id: "t10",
    name: "Office Supplies",
    category: "Operations",
    amount: -245,
    date: "2026-03-02",
    type: "expense" as const,
    status: "completed" as const,
  },
  {
    id: "t11",
    name: "DigitalOcean Hosting",
    category: "SaaS / Tools",
    amount: -180,
    date: "2026-02-28",
    type: "expense" as const,
    status: "completed" as const,
  },
  {
    id: "t12",
    name: "BlueSky Agency — Invoice",
    category: "Client Payment",
    amount: 9100,
    date: "2026-02-25",
    type: "income" as const,
    status: "completed" as const,
  },
  {
    id: "t13",
    name: "Business Insurance",
    category: "Insurance",
    amount: -620,
    date: "2026-02-20",
    type: "expense" as const,
    status: "completed" as const,
  },
  {
    id: "t14",
    name: "Google Workspace",
    category: "SaaS / Tools",
    amount: -72,
    date: "2026-02-15",
    type: "expense" as const,
    status: "completed" as const,
  },
  {
    id: "t15",
    name: "Consulting Referral Bonus",
    category: "Other Income",
    amount: 1500,
    date: "2026-02-10",
    type: "income" as const,
    status: "completed" as const,
  },
];

// Upcoming transactions
export const upcomingTransactions = [
  {
    id: "u1",
    name: "Payroll — March 31",
    category: "Payroll",
    amount: -8500,
    date: "2026-03-31",
    type: "expense" as const,
    daysUntil: 12,
  },
  {
    id: "u2",
    name: "Acme Corp — Q2 Retainer",
    category: "Client Payment",
    amount: 12500,
    date: "2026-04-01",
    type: "income" as const,
    daysUntil: 13,
  },
  {
    id: "u3",
    name: "Office Rent — April",
    category: "Rent",
    amount: -4200,
    date: "2026-04-01",
    type: "expense" as const,
    daysUntil: 13,
  },
  {
    id: "u4",
    name: "SaaS Renewals",
    category: "SaaS / Tools",
    amount: -1462,
    date: "2026-04-05",
    type: "expense" as const,
    daysUntil: 17,
  },
  {
    id: "u5",
    name: "TechStart — Invoice #89",
    category: "Client Payment",
    amount: 6200,
    date: "2026-04-08",
    type: "income" as const,
    daysUntil: 20,
  },
];

// ─── AI Insights ──────────────────────────────────────────────────────────────
export const aiInsights = [
  {
    id: "i1",
    severity: "warning" as const,
    title: "Burn Rate Accelerating",
    description:
      "Your monthly expenses increased 12% over the last 90 days, largely driven by SaaS subscriptions and payroll growth. At this rate, runway drops below 4 months by June.",
    action: "Review SaaS stack — potential €800/mo savings identified",
    confidence: 87,
    category: "Runway",
    createdAt: "2026-03-19",
  },
  {
    id: "i2",
    severity: "positive" as const,
    title: "Strong Revenue Momentum",
    description:
      "Client payment velocity is up 23% month-over-month. Three recurring clients represent 68% of revenue — healthy concentration for your stage.",
    action: "Diversify by targeting 2 new client segments",
    confidence: 92,
    category: "Revenue",
    createdAt: "2026-03-19",
  },
  {
    id: "i3",
    severity: "critical" as const,
    title: "Cash Dip Predicted — April 2nd",
    description:
      "Payroll (€8,500) and rent (€4,200) both fall on April 1st. Combined with a €3,800 VAT payment, your balance may drop to €31,332 — below your safe threshold of €35,000.",
    action: "Accelerate Acme Corp invoice by 7 days",
    confidence: 94,
    category: "Cash Alert",
    createdAt: "2026-03-19",
  },
  {
    id: "i4",
    severity: "positive" as const,
    title: "90-Day Outlook Improving",
    description:
      "Projected end-of-quarter balance is €58,200 — up 22% from current. New contract pipeline adds €24,000 in expected Q2 revenue.",
    action: "Lock in contracts early to secure Q2 forecast",
    confidence: 79,
    category: "Forecast",
    createdAt: "2026-03-18",
  },
  {
    id: "i5",
    severity: "warning" as const,
    title: "Invoice Payment Delay Pattern",
    description:
      "Two clients consistently pay 8-12 days late. This creates predictable short-term cash gaps every mid-month.",
    action: "Set up automatic payment reminders at Day 25",
    confidence: 88,
    category: "Collections",
    createdAt: "2026-03-17",
  },
  {
    id: "i6",
    severity: "positive" as const,
    title: "Tax Reserve on Track",
    description:
      "Based on current revenue, estimated Q2 tax liability is €6,400. You currently have sufficient reserves to cover this comfortably.",
    action: "No action needed — reserve is healthy",
    confidence: 95,
    category: "Tax",
    createdAt: "2026-03-16",
  },
];

// ─── Key Metrics ──────────────────────────────────────────────────────────────
export const keyMetrics = {
  currentBalance: 47832,
  balanceChange: 3.2,
  forecast30Day: 52100,
  forecastChange: 8.9,
  burnRate: 8200,
  burnRateChange: 12.4,
  runway: 5.8,
  runwayChange: -0.3,
};

// ─── Summary Stats ────────────────────────────────────────────────────────────
export const summaryStats = {
  totalIn: 198840,
  totalOut: -167200,
  net: 31640,
  average: 5273,
};
