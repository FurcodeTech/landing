# Vercel Analytics Deployment Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Vercel Analytics and Speed Insights to the landing page so production deploys collect traffic and performance data.

**Architecture:** This is a Vite + React app with a single client entrypoint. The integration lives in `src/main.tsx`, where the Vercel components are mounted once at the root so they stay outside the page content and work across the whole app.

**Tech Stack:** React 19, Vite 7, `@vercel/analytics`, `@vercel/speed-insights`

---

### Task 1: Install Vercel telemetry packages

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`

- [ ] **Step 1: Install the dependencies**

Run:

```powershell
npm.cmd install @vercel/analytics @vercel/speed-insights
```

Expected: `package.json` gains both packages under `dependencies` and the lockfile updates cleanly.

- [ ] **Step 2: Confirm the package metadata**

Run:

```powershell
npm.cmd ls @vercel/analytics @vercel/speed-insights
```

Expected: both packages resolve from the project tree.

### Task 2: Mount telemetry in the app root

**Files:**
- Modify: `src/main.tsx`

- [ ] **Step 1: Add the Vercel React components**

Use this code:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Analytics />
    <SpeedInsights />
  </StrictMode>,
)
```

- [ ] **Step 2: Keep the render tree root-level only**

Expected: no page component needs to know about analytics; the telemetry stays global.

### Task 3: Build and verify

**Files:**
- None

- [ ] **Step 1: Run a production build**

Run:

```powershell
npm.cmd run build
```

Expected: TypeScript and Vite both complete without errors.

- [ ] **Step 2: Check the working tree**

Run:

```powershell
git status --short
```

Expected: only the intended telemetry files are changed.
