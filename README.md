# EMIWise

EMIWise is a responsive Next.js and TypeScript web app for calculating loan EMIs and comparing multiple loan offers.

## Features

- Single EMI calculator with loan amount, interest rate, and tenure controls
- Slider and typed number input support for precise values
- Loan amount range from Rs. 0 to Rs. 5,00,00,000
- Loan comparison mode for three editable offers
- Monthly EMI, total interest, total repayment, savings, and payment split
- Responsive mobile and desktop UI
- Production build powered by Next.js, TypeScript, and Tailwind CSS

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- ESLint

## Getting Started

Install dependencies:

```bash
npm.cmd install
```

Start the development server:

```bash
npm.cmd run dev
```

Open `http://localhost:3000`.

Use `npm.cmd` on Windows PowerShell if script execution policy blocks `npm.ps1`.

## Available Scripts

```bash
npm.cmd run dev
npm.cmd run build
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run start
```

## Production Check

Run these before publishing:

```bash
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run build
```

To test the production build locally:

```bash
npm.cmd run start
```

## Files Not Committed

Generated files and local-only files are ignored, including:

- `.next/`
- `node_modules/`
- `*.log`
- `tsconfig.tsbuildinfo`
- `.env*`
- `.vercel/`
- `out/`
