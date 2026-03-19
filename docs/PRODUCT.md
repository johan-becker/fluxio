# Fluxio — Full Product Specification

## PHASE 1: Nischen-Findung & Marktforschung

### Gewählte Nische: AI Cash Flow Intelligence für KMU

**Warum diese Nische gewinnt:**
- 82% der kleinen Unternehmen scheitern an Cash Flow-Problemen (US Bank Studie)
- 25 Millionen KMU allein in der EU — riesiger TAM
- Bestehende Tools (Xero, QuickBooks, Lexoffice) sind Buchhaltungstools, keine Intelligenz-Plattformen
- Zahlungsbereitschaft €49-149/Monat ist für Geschäftsinhaber trivial vs. Insolvenzrisiko

**Elevator Pitch:**
Fluxio ist die erste Cash Intelligence Plattform für kleine Unternehmen — sie verbindet automatisch alle Geldflüsse, prognostiziert die Liquidität der nächsten 90 Tage mit KI-Präzision und sagt dem Unternehmer exakt, was er wann tun muss, um nie wieder in eine Cash-Krise zu geraten.

---

## PHASE 2: Design-Philosophie & UI/UX

### Ästhetik
Modern, Clean, Professional — Vertrauen durch Premium-Qualität. Großzügiger Whitespace, makellose Typografie, keine visuelle Überladung.

### Farbsystem (Semantisch)

**Light Mode:**
| Token | Hex | Verwendung |
|---|---|---|
| Primary | `#0F1A2E` | Deep Navy — Text, Headings, Sidebar Dark |
| Accent | `#00C9A7` | Electric Teal — CTAs, Active States, Highlights |
| Background | `#F8FAFB` | Page Background |
| Surface | `#FFFFFF` | Cards, Inputs |
| Text Primary | `#0F1A2E` | Body Text |
| Text Secondary | `#64748B` | Muted Text |
| Success | `#10B981` | Positive Trends, Income |
| Warning | `#F59E0B` | Alerts, Burn Rate |
| Danger | `#EF4444` | Critical Alerts, Expenses |
| Border | `#E2E8F0` | Card Borders, Dividers |

**Dark Mode:**
| Token | Hex | Verwendung |
|---|---|---|
| Background | `#0A1020` | Page Background |
| Surface | `#111827` | Cards |
| Text Primary | `#F1F5F9` | Body Text |
| Border | `#1E293B` | Borders |

**Psychologische Begründung:**
- Navy = Vertrauen, Stabilität, Professionalität (Finanzbranche)
- Teal = Wachstum, Frische, Innovation (differenziert von klassischem Blau)
- Großzügiges Weiß = Klarheit, Einfachheit (Anti-Accounting-Chaos)

### Typografie
- **Font:** Inter (Google Fonts)
- Display: 48px / 600 weight
- H1: 32px / 600
- H2: 24px / 600
- H3: 18px / 600
- Body: 16px / 400
- Small: 14px / 400
- XSmall: 12px / 400

### Spacing-Skala
4, 8, 12, 16, 24, 32, 48, 64, 96px

### Mobile-First Translation
- Alle Layout-Grids nutzen CSS Grid/Flexbox mit responsive Breakpoints
- Sidebar (Desktop) → Bottom Tab Bar (Mobile)
- 4-Column Metric Grid → 2-Column auf Mobile
- 2-Column Bottom Grid → Stacked auf Mobile
- Charts responsive via `ResponsiveContainer`

---

## PHASE 3: Core Features & Innovation

### 3 Kern-Funktionen

1. **Smart Cash Dashboard**
   Echtzeit-Überblick über Cash Balance, Forecast, Burn Rate und Runway. 4 KPI-Cards + 90-Tage-Chart + Upcoming Transactions auf einen Blick.

2. **AI-Powered 90-Day Forecasting**
   KI analysiert historische Transaktionen, wiederkehrende Ausgaben, saisonale Muster und prognostiziert die Cash-Position für die nächsten 90 Tage mit >90% Genauigkeit.

3. **Actionable AI Insights**
   Nicht nur "was passiert", sondern "was zu tun ist". Jeder Insight hat eine Severity (Critical/Warning/Positive), eine Confidence-Score und eine konkrete Handlungsempfehlung.

### 2 Hochinnovative Premium-Features

**Feature A: "Cash Scenario Simulator" (kein Konkurrent hat das)**
Der Nutzer kann "Was wäre wenn"-Szenarien simulieren:
- "Was passiert, wenn ich einen neuen Mitarbeiter einstelle?"
- "Was passiert, wenn Kunde X 30 Tage später zahlt?"
- "Was passiert, wenn ich diesen SaaS-Stack kündige?"

→ **Premium-Zwang:** Free Users sehen nur den aktuellen Forecast. Szenarien sind der Grund, warum Unternehmer €149/Monat zahlen — sie müssen Entscheidungen absichern, bevor sie sie treffen.

**Feature B: "Smart Invoice Acceleration" (kein Konkurrent hat das)**
KI erkennt Kunden mit chronischem Zahlungsverzug und generiert automatisch:
- Optimale Zahlungserinnerungen (Timing + Tonfall)
- Frühzahler-Rabatt-Vorschläge (z.B. "2% Skonto bei Zahlung innerhalb 10 Tagen")
- Priorisierung: Welche Rechnung soll zuerst eingetrieben werden?

→ **Premium-Zwang:** Free Users sehen das Problem ("Kunde X zahlt 12 Tage zu spät"). Pro Users bekommen die Lösung (automatische Erinnerungen + Optimierung). Der Schmerz ist sofort spürbar, die Lösung nur einen Klick entfernt.

---

## PHASE 4: Deliverables

### A. Brand & Design System

**Design Tokens:**
```
colors:
  primary: #0F1A2E
  accent: #00C9A7
  accent-hover: #00A88B
  bg-light: #F8FAFB
  bg-dark: #0A1020
  surface-light: #FFFFFF
  surface-dark: #111827
  text-primary-light: #0F1A2E
  text-primary-dark: #F1F5F9
  text-secondary: #64748B
  success: #10B981
  warning: #F59E0B
  danger: #EF4444
  border-light: #E2E8F0
  border-dark: #1E293B

fonts:
  family: Inter
  weights: [300, 400, 500, 600, 700, 800]

spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]

radii:
  sm: 8px (rounded-lg)
  md: 12px (rounded-xl)
  lg: 16px (rounded-2xl)
  full: 9999px (rounded-full)

shadows:
  sm: 0 1px 2px rgba(0,0,0,0.05)
  md: 0 4px 6px rgba(0,0,0,0.07)
  lg: 0 10px 15px rgba(0,0,0,0.1)
```

**Kern-Komponenten:**

- **Buttons:** `rounded-xl`, subtle shadow, teal accent (`bg-[#00C9A7] hover:bg-[#00A88B]`), white text, `transition-all duration-200`, hover scale 1.05 für primäre CTAs
- **Cards:** `rounded-2xl`, `border border-border`, subtle shadow, großzügiges `p-5/p-6` Padding, hover border color change
- **Inputs:** `rounded-xl`, `h-12` Höhe, focus ring in teal (`focus-visible:ring-[#00C9A7]`)
- **Navigation:** Sidebar auf Desktop (collapsible, 60px → 240px), Bottom Tab Bar auf Mobile (fixed, 64px Höhe)
- **Badges:** `rounded-full`, farbcodiert nach Severity, `text-xs font-semibold`
- **Metric Cards:** Icon + Trend-Badge oben, Wert + Label unten, hover lift Effekt

### B. Screen-by-Screen Architektur

**Screen 1: Landing Page (`/`)**
- Navbar: Fixed top, glassmorphism blur, Logo links, Nav-Links Mitte, Theme Toggle + Sign In + Start Free rechts
- Hero: Großer Headline "Your Business Always Has Cash" mit teal Akzent, Subheadline, 2 CTAs, Gradient Glow Effekt
- Features: 3 Feature-Cards mit Icons, Hover-Lift
- How It Works: 2-Spalten Layout, Steps links, Preview-Insight-Cards rechts
- Pricing: 3 Tiers (Free/Growth/Pro), Pro hervorgehoben
- CTA: Dark Section mit Glow, finaler Push
- Footer: 5-Spalten Grid

*Mobile:* Navbar → Hamburger Menu, Grids → Stacked, Hero → Centered Text

**Screen 2: Dashboard (`/dashboard`)**
- Sidebar links (Desktop): Logo, 5 Nav-Items, Theme Toggle, Collapse Toggle, User Avatar
- TopBar: Greeting + Datum, Search Bar, Notification Bell
- Content: 4 Metric Cards → 90-Day Area Chart → 2-Spalten (Upcoming Transactions + AI Insights)

*Mobile:* Sidebar → Bottom Tab Bar, 4-Grid → 2×2, Bottom Grid → Stacked

**Screen 3: Cash Flow (`/dashboard/cashflow`)**
- 4 Summary-Stat Cards (Total In/Out/Net/Average)
- Full-Width Bar Chart (6 Monate, Income vs Expenses)
- Filterable Transaction Table mit Search + Type-Filter Buttons

*Mobile:* Stat Cards 2×2, Chart Full-Width, Table → Card-List

**Screen 4: AI Insights (`/dashboard/insights`)**
- Header mit Insight-Count Badge
- 3 Summary Cards (Critical/Warning/Positive Counts)
- 2-Spalten Grid mit Insight Cards: Severity Badge, Title, Description, Confidence Bar, Action

*Mobile:* Summary 3er-Row bleibt, Insight Grid → Stacked

**Screen 5: Onboarding (`/onboarding`)**
- Centered Card Layout (max-w-lg)
- 4-Step Progress Dots oben
- Step 1: Business Name Input
- Step 2: Bank Connection (4 Mock-Banks mit Connect/Disconnect Toggle)
- Step 3: Safe Balance Slider (€5k-100k)
- Step 4: Success + First Insight Preview + Dashboard CTA

*Mobile:* Gleich — bereits Mobile-optimiert durch centered Layout

### C. User Journeys & Edge Cases

**Onboarding → Aha-Moment:**
1. Nutzer klickt "Start Free" auf Landing Page
2. → Onboarding Step 1: Business Name eingeben (1 Klick)
3. → Step 2: Bank verknüpfen (1 Klick pro Bank)
4. → Step 3: Safe Balance setzen (Slider)
5. → Step 4: **AHA-MOMENT** — Sofort ein erster AI Insight Preview ("Wir schätzen €52,100 in 30 Tagen")
6. → Dashboard mit vollem Überblick

**Gesamtzeit bis Aha-Moment: < 2 Minuten**

**Empty States:**
- **Insights ohne Daten:** Friendly Message "Connect your accounts to get insights" + Icon
- **Transactions leer:** "No transactions found" mit Such-Feedback
- **Dashboard ohne Bank:** Redirect zu Onboarding Step 2
- **Chart ohne Daten:** Placeholder mit "We need at least 7 days of data" Message

### D. Technische Architektur

**High-Level Datenbankschema:**

```
users
  - id (UUID)
  - email
  - name
  - created_at

businesses
  - id (UUID)
  - user_id → users.id
  - name
  - safe_balance_threshold
  - currency

bank_connections
  - id (UUID)
  - business_id → businesses.id
  - provider (string)
  - account_name
  - status (active/disconnected)
  - last_synced_at

transactions
  - id (UUID)
  - business_id → businesses.id
  - bank_connection_id → bank_connections.id
  - name
  - category
  - amount (integer, cents)
  - type (income/expense)
  - date
  - status (completed/pending/scheduled)

forecasts
  - id (UUID)
  - business_id → businesses.id
  - date
  - predicted_balance
  - confidence
  - generated_at

insights
  - id (UUID)
  - business_id → businesses.id
  - severity (critical/warning/positive)
  - title
  - description
  - action
  - confidence
  - category
  - is_read
  - created_at

subscriptions
  - id (UUID)
  - user_id → users.id
  - plan (free/growth/pro)
  - status (active/cancelled/past_due)
  - stripe_customer_id
  - current_period_end
```

**Tech Stack:**
| Layer | Technologie |
|---|---|
| Frontend | Next.js 16 (App Router), TypeScript, Tailwind, shadcn/ui |
| Backend | Next.js API Routes + Server Actions |
| Database | PostgreSQL (via Supabase oder Neon) |
| ORM | Drizzle ORM |
| Auth | NextAuth.js v5 (Auth.js) |
| Payments | Stripe (Subscriptions + Webhooks) |
| Banking API | GoCardless (Open Banking EU) oder Plaid (US) |
| AI/ML | OpenAI GPT-4o für Insights, eigene Forecast-Modelle |
| Hosting | Vercel (Web) + Vercel Postgres |
| Mobile | React Native (Expo) — shared Business Logic |
| Monitoring | Vercel Analytics + Sentry |

### E. Monetarisierungs-Matrix

**Pricing-Modell:**

| Feature | Free | Growth (€49/mo) | Pro (€149/mo) |
|---|---|---|---|
| Bank Connections | 1 | 3 | Unlimited |
| Cash Flow Dashboard | ✅ | ✅ | ✅ |
| Forecast Horizon | 30 Tage | 60 Tage | 90 Tage |
| AI Insights | 3/Monat | 15/Monat | Unlimited |
| Cash Scenario Simulator | ❌ | ❌ | ✅ |
| Smart Invoice Acceleration | ❌ | ❌ | ✅ |
| Export (CSV/PDF) | ❌ | ✅ | ✅ |
| Priority Support | ❌ | ✅ | ✅ |
| Team Members | 1 | 3 | 10 |
| API Access | ❌ | ❌ | ✅ |

**Konversions-Strategie:**
- Free Tier zeigt den Wert (30-Tage-Forecast + 3 Insights/Monat)
- Growth ist der Sweet Spot für Solopreneure (€49 = ein günstiges Business-Lunch)
- Pro ist für wachsende Teams, die Szenarien simulieren und Rechnungen optimieren müssen

**Warum Fluxio finanziell erfolgreich wird:**

1. **Existenzieller Pain Point:** Cash Flow-Probleme sind der #1 Killer für KMU. Das ist kein "Nice to Have" — es ist Überlebenswerkzeug.

2. **Asymmetrischer Wert:** €149/Monat kostet Pro. Eine verhinderte Liquiditätskrise spart €10.000-100.000+. Der ROI ist offensichtlich.

3. **Lock-In durch Daten:** Je länger ein Unternehmen Fluxio nutzt, desto besser werden die Prognosen. Wechselkosten steigen mit der Zeit.

4. **Negative Churn-Potential:** Wachsende Unternehmen brauchen mehr Bank-Connections, mehr Team-Members → automatisches Upgrade.

5. **Klarer Upgrade-Trigger:** Free Users sehen 3 Insights/Monat. Wenn der 4. Insight "CRITICAL: Cash Dip in 14 Tagen" ist und hinter einer Paywall steht, zahlt jeder Unternehmer sofort.

6. **Massive TAM:** 25M+ KMU in Europa, 30M+ in den USA. Selbst 0.1% Penetration = 55.000 zahlende Kunden = €2.7M-8.2M ARR.
