"use client"

import { type ChangeEvent, useMemo, useRef, useState } from "react"
import { AmortizationSchedule } from "@/components/amortization-schedule"
import {
  calculateEmiByMonths,
  formatTenure,
} from "@/lib/loan-calculations"

type LoanOption = {
  id: "a" | "b" | "c"
  name: string
  rate: number
}

type Tone = "slate" | "teal" | "coral" | "indigo"

type SliderFieldProps = {
  label: string
  value: number
  display: string
  inputSuffix?: string
  minLabel: string
  maxLabel: string
  min: number
  max: number
  step?: number
  onValueChange: (value: number) => void
}

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
})

const number = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 2,
})

const compareOptions: LoanOption[] = [
  { id: "a", name: "Offer A", rate: 8.4 },
  { id: "b", name: "Offer B", rate: 9.1 },
  { id: "c", name: "Offer C", rate: 10.2 },
]

const MIN_LOAN_AMOUNT = 0
const MAX_LOAN_AMOUNT = 50000000

function clampValue(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function Metric({
  label,
  value,
  tone = "slate",
}: {
  label: string
  value: string
  tone?: Tone
}) {
  const tones: Record<Tone, string> = {
    slate: "text-slate-950",
    teal: "text-teal-700",
    coral: "text-rose-600",
    indigo: "text-indigo-700",
  }

  return (
    <div className="min-w-0 rounded-lg border border-white/70 bg-white/75 p-3 shadow-sm backdrop-blur sm:p-4">
      <p className="truncate text-xs font-black uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className={`mt-2 truncate text-lg font-black tracking-normal sm:text-2xl ${tones[tone]}`}>
        {value}
      </p>
    </div>
  )
}

function SliderField({
  label,
  value,
  display,
  inputSuffix,
  minLabel,
  maxLabel,
  min,
  max,
  step = 1,
  onValueChange,
}: SliderFieldProps) {
  const [inputText, setInputText] = useState(String(value))

  // Keep local text in sync when value changes externally (e.g. slider drag)
  const prevValue = useRef(value)
  if (prevValue.current !== value) {
    prevValue.current = value
    setInputText(String(value))
  }

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
    const nextValue = Number(event.target.value)
    if (Number.isFinite(nextValue)) {
      onValueChange(clampValue(nextValue, min, max))
    }
  }

  const handleBlur = () => {
    // On blur, snap display back to the clamped value
    setInputText(String(value))
  }

  const handleSlider = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = Number(event.target.value)
    if (Number.isFinite(nextValue)) {
      onValueChange(clampValue(nextValue, min, max))
    }
  }

  return (
    <div className="block rounded-lg border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
      <div className="mb-4 flex flex-col gap-2">
        <label className="text-sm font-black text-slate-800 sm:text-base" htmlFor={`${label}-input`}>
          {label}
        </label>
        <div className="flex min-w-0 items-center overflow-hidden rounded-md border border-slate-200 bg-slate-50 focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-100">
          <input
            id={`${label}-input`}
            type="text"
            inputMode="decimal"
            value={inputText}
            onChange={handleTextChange}
            onBlur={handleBlur}
            className="min-w-0 flex-1 rounded-md bg-transparent px-2 py-2 text-right text-sm font-black text-slate-950 outline-none sm:px-3 sm:py-2.5 sm:text-base"
          />
          {inputSuffix && (
            <span className="shrink-0 pr-2 text-xs font-black text-slate-500 sm:pr-3 sm:text-sm">
              {inputSuffix}
            </span>
          )}
        </div>
        <span className="truncate text-xs font-bold text-slate-500">{display}</span>
      </div>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={handleSlider}
        aria-label={`${label} slider`}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-teal-600"
      />
      <div className="mt-2 flex justify-between gap-1 text-xs font-bold text-slate-400">
        <span className="truncate">{minLabel}</span>
        <span className="shrink-0">{maxLabel}</span>
      </div>
    </div>
  )
}

function SingleCalculator() {
  const [amount, setAmount] = useState(1000000)
  const [rate, setRate] = useState(8.75)
  const [tenureMonths, setTenureMonths] = useState(84)

  const result = useMemo(
    () => calculateEmiByMonths(amount, rate, tenureMonths),
    [amount, rate, tenureMonths],
  )
  const interestPercent =
    result.totalPayment > 0
      ? Math.min(100, (result.totalInterest / result.totalPayment) * 100)
      : 0

  return (
    <section className="min-w-0 space-y-6">
      <div className="grid min-w-0 gap-6 lg:grid-cols-[360px_minmax(0,1fr)]">
        <div className="min-w-0 rounded-xl border border-white/70 bg-white/80 p-4 shadow-xl shadow-slate-200/70 backdrop-blur sm:p-6">
          <p className="text-sm font-black uppercase tracking-wide text-teal-700">
            Single EMI calculator
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-normal text-slate-950 sm:text-3xl">
            Calculate one loan clearly.
          </h2>

          <div className="mt-6 space-y-4">
            <SliderField
              label="Loan amount"
              value={amount}
              min={MIN_LOAN_AMOUNT}
              max={MAX_LOAN_AMOUNT}
              step={10000}
              display={currency.format(amount)}
              minLabel={currency.format(MIN_LOAN_AMOUNT)}
              maxLabel={currency.format(MAX_LOAN_AMOUNT)}
              onValueChange={setAmount}
            />
            <SliderField
              label="Interest rate"
              value={rate}
              min={0}
              max={24}
              step={0.05}
              inputSuffix="%"
              display={`${number.format(rate)}%`}
              minLabel="0%"
              maxLabel="24%"
              onValueChange={setRate}
            />
            <SliderField
              label="Tenure"
              value={tenureMonths}
              min={1}
              max={360}
              inputSuffix="mo"
              display={formatTenure(tenureMonths)}
              minLabel="1 month"
              maxLabel="30 years"
              onValueChange={setTenureMonths}
            />
          </div>
        </div>

        <div className="min-w-0 rounded-xl border border-slate-200 bg-slate-950 p-4 text-white shadow-xl shadow-slate-300/70 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-teal-300">
                Monthly EMI
              </p>
              <h3 className="mt-2 text-3xl font-black tracking-normal sm:text-4xl">
                {currency.format(result.emi)}
              </h3>
              <p className="mt-2 text-xs leading-6 text-slate-300 sm:text-sm">
                For {currency.format(amount)} over {formatTenure(tenureMonths)} at{" "}
                {number.format(rate)}%.
              </p>
            </div>
            <div className="min-w-0 rounded-lg bg-white px-3 py-2 text-slate-950 sm:shrink-0 sm:px-4 sm:py-3">
              <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                Total payment
              </p>
              <p className="mt-1 truncate text-xl font-black sm:text-2xl">
                {currency.format(result.totalPayment)}
              </p>
            </div>
          </div>

          <div className="mt-6 grid min-w-0 gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-white/10 p-3 sm:p-4">
              <p className="text-xs font-black uppercase tracking-wide text-slate-300">
                Interest
              </p>
              <p className="mt-2 truncate text-lg font-black text-rose-300 sm:text-xl">
                {currency.format(result.totalInterest)}
              </p>
            </div>
            <div className="rounded-lg bg-white/10 p-3 sm:p-4">
              <p className="text-xs font-black uppercase tracking-wide text-slate-300">
                Tenure
              </p>
              <p className="mt-2 truncate text-lg font-black text-teal-300 sm:text-xl">
                {formatTenure(tenureMonths)}
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
            <div>
              <div className="mb-2 flex justify-between gap-2 text-xs font-bold sm:text-sm">
                <span className="shrink-0">Principal</span>
                <span className="truncate text-right">{currency.format(amount)}</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-teal-400"
                  style={{ width: `${100 - interestPercent}%` }}
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between gap-2 text-xs font-bold sm:text-sm">
                <span className="shrink-0">Interest</span>
                <span className="truncate text-right">{currency.format(result.totalInterest)}</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-rose-400"
                  style={{ width: `${interestPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid min-w-0 gap-4 lg:grid-cols-3">
        <Metric label="Monthly EMI" value={currency.format(result.emi)} tone="teal" />
        <Metric
          label="Total interest"
          value={currency.format(result.totalInterest)}
          tone="coral"
        />
        <Metric
          label="Total payment"
          value={currency.format(result.totalPayment)}
          tone="indigo"
        />
      </div>

      <AmortizationSchedule amount={amount} rate={rate} months={tenureMonths} />
    </section>
  )
}

function ComparisonCalculator() {
  const [amount, setAmount] = useState(1000000)
  const [tenureMonths, setTenureMonths] = useState(120)
  const [rates, setRates] = useState<Record<LoanOption["id"], number>>({
    a: 8.4,
    b: 9.1,
    c: 10.2,
  })

  const loans = useMemo(
    () =>
      compareOptions.map((option) => ({
        ...option,
        rate: rates[option.id],
        result: calculateEmiByMonths(amount, rates[option.id], tenureMonths),
      })),
    [amount, rates, tenureMonths],
  )

  const bestLoan = loans.reduce((best, loan) =>
    loan.result.emi < best.result.emi ? loan : best,
  )
  const maxPayment = Math.max(...loans.map((loan) => loan.result.totalPayment))
  const minPayment = Math.min(...loans.map((loan) => loan.result.totalPayment))
  const savings = maxPayment - minPayment
  const maxEmi = Math.max(...loans.map((loan) => loan.result.emi))

  const updateRate = (id: LoanOption["id"], value: string) => {
    setRates((current) => ({ ...current, [id]: Math.max(0, Number(value) || 0) }))
  }

  return (
    <section className="min-w-0 space-y-6">
      <div className="grid min-w-0 gap-6 lg:grid-cols-[360px_minmax(0,1fr)]">
        <div className="min-w-0 rounded-xl border border-white/70 bg-white/80 p-4 shadow-xl shadow-slate-200/70 backdrop-blur sm:p-6">
          <p className="text-sm font-black uppercase tracking-wide text-indigo-700">
            Loan comparison
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-normal text-slate-950 sm:text-3xl">
            Compare offers side by side.
          </h2>

          <div className="mt-6 space-y-4">
            <SliderField
              label="Loan amount"
              value={amount}
              min={MIN_LOAN_AMOUNT}
              max={MAX_LOAN_AMOUNT}
              step={10000}
              display={currency.format(amount)}
              minLabel={currency.format(MIN_LOAN_AMOUNT)}
              maxLabel={currency.format(MAX_LOAN_AMOUNT)}
              onValueChange={setAmount}
            />
            <SliderField
              label="Tenure"
              value={tenureMonths}
              min={1}
              max={360}
              inputSuffix="mo"
              display={formatTenure(tenureMonths)}
              minLabel="1 month"
              maxLabel="30 years"
              onValueChange={setTenureMonths}
            />
          </div>
        </div>

        <div className="min-w-0 rounded-xl border border-slate-200 bg-slate-950 p-4 text-white shadow-xl shadow-slate-300/70 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-teal-300">
                Best matched offer
              </p>
              <h3 className="mt-2 text-2xl font-black tracking-normal sm:text-3xl">
                {bestLoan.name}
              </h3>
              <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                {number.format(bestLoan.rate)}% interest,{" "}
                {currency.format(bestLoan.result.emi)} EMI.
              </p>
            </div>
            <div className="min-w-0 rounded-lg bg-white px-3 py-2 text-slate-950 sm:shrink-0 sm:px-4 sm:py-3">
              <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                Saves up to
              </p>
              <p className="mt-1 truncate text-xl font-black sm:text-2xl">{currency.format(savings)}</p>
            </div>
          </div>

          <div className="mt-6 grid min-w-0 gap-3 sm:grid-cols-3">
            {loans.map((loan) => (
              <label key={loan.id} className="rounded-lg bg-white/10 p-3 sm:p-4">
                <span className="text-xs font-black sm:text-sm">{loan.name}</span>
                <div className="mt-3 flex items-center rounded-md bg-white text-slate-950">
                  <input
                    type="number"
                    min="0"
                    step="0.05"
                    value={loan.rate}
                    onChange={(event) => updateRate(loan.id, event.target.value)}
                    className="min-w-0 flex-1 rounded-md bg-transparent px-2 py-2 text-sm font-black outline-none sm:px-3 sm:py-3"
                  />
                  <span className="pr-2 text-xs font-black text-slate-500 sm:pr-3">%</span>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="grid min-w-0 gap-4 lg:grid-cols-3">
        {loans.map((loan) => {
          const isBest = loan.id === bestLoan.id
          const barWidth = maxEmi > 0 ? Math.max(10, (loan.result.emi / maxEmi) * 100) : 0

          return (
            <article
              key={loan.id}
              className={`rounded-xl border p-4 shadow-lg transition hover:-translate-y-1 sm:p-5 ${isBest
                  ? "border-teal-300 bg-teal-50 shadow-teal-100"
                  : "border-white/70 bg-white/80 shadow-slate-200/70"
                }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-black tracking-normal text-slate-950 sm:text-2xl">
                    {loan.name}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-slate-500 sm:text-sm">
                    {number.format(loan.rate)}% for {formatTenure(tenureMonths)}
                  </p>
                </div>
                {isBest && (
                  <span className="rounded-md bg-teal-600 px-2 py-1 text-xs font-black text-white sm:px-3 sm:py-2">
                    BEST
                  </span>
                )}
              </div>

              <div className="mt-6">
                <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                  EMI
                </p>
                <p className="mt-2 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
                  {currency.format(loan.result.emi)}
                </p>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className={`h-full rounded-full ${isBest ? "bg-teal-500" : "bg-indigo-400"
                      }`}
                    style={{ width: `${barWidth}%` }}
                  />
                </div>
              </div>

              <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-white/75 p-3 sm:p-4">
                  <dt className="text-xs font-black uppercase tracking-wide text-slate-500">
                    Interest
                  </dt>
                  <dd className="mt-1 text-base font-black text-rose-600 sm:text-lg">
                    {currency.format(loan.result.totalInterest)}
                  </dd>
                </div>
                <div className="rounded-lg bg-white/75 p-3 sm:p-4">
                  <dt className="text-xs font-black uppercase tracking-wide text-slate-500">
                    Total
                  </dt>
                  <dd className="mt-1 text-base font-black text-indigo-700 sm:text-lg">
                    {currency.format(loan.result.totalPayment)}
                  </dd>
                </div>
              </dl>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 text-sm text-slate-600 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-lg bg-slate-950 text-xs font-black text-white">
              EW
            </div>
            <div>
              <p className="font-black text-slate-950">EMIWise</p>
              <p className="text-xs font-bold text-slate-500">
                EMI estimates for faster loan decisions.
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-3xl text-xs leading-6 sm:text-sm">
            EMI values are estimates based on the loan amount, interest rate, and
            tenure entered. Final repayment terms may vary by lender, fees,
            taxes, and eligibility checks.
          </p>
        </div>

        <div className="grid gap-2 text-left text-xs font-bold text-slate-500 sm:text-sm lg:text-right">
          <p>Single EMI calculator</p>
          <p>Loan comparison</p>
          <p className="text-slate-400">2026 EMIWise</p>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  const [mode, setMode] = useState<"single" | "compare">("single")

  return (
    <div className="min-h-screen overflow-hidden bg-[#eef3f8] text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(20,184,166,0.22),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.20),transparent_30%),linear-gradient(135deg,#f8fafc,#e6f4f1_45%,#eef2ff)]" />

      <header className="border-b border-white/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          {/* <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-300">
              EW
            </div>
            <div>
              <h1 className="text-xl font-black tracking-normal text-slate-950">
                EMIWise
              </h1>
              <p className="text-xs font-bold text-slate-500">
                Modern loan calculator
              </p>
            </div>
          </div> */}

          <div className="hidden rounded-xl border border-slate-200 bg-white p-1 shadow-sm sm:flex">
            <button
              type="button"
              onClick={() => setMode("single")}
              className={`rounded-lg px-4 py-2 text-sm font-black transition ${mode === "single"
                  ? "bg-slate-950 text-white"
                  : "text-slate-600 hover:bg-slate-100"
                }`}
            >
              Single EMI
            </button>
            <button
              type="button"
              onClick={() => setMode("compare")}
              className={`rounded-lg px-4 py-2 text-sm font-black transition ${mode === "compare"
                  ? "bg-slate-950 text-white"
                  : "text-slate-600 hover:bg-slate-100"
                }`}
            >
              Comparison
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <section className="mb-6 grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-teal-700">
              Fast, responsive, finance-ready
            </p>
            <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight tracking-normal text-slate-950 sm:text-6xl">
              EMI calculator for quick decisions and clean comparisons.
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-3 rounded-xl border border-white/70 bg-white/75 p-4 shadow-lg shadow-slate-200/70 backdrop-blur">
            <div>
              <p className="text-2xl font-black text-slate-950">2</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">
                Modes
              </p>
            </div>
            <div>
              <p className="text-2xl font-black text-slate-950">3</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">
                Offers
              </p>
            </div>
            <div>
              <p className="text-2xl font-black text-slate-950">30y</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">
                Tenure
              </p>
            </div>
          </div>
        </section>

        <div className="mb-6 grid max-w-md grid-cols-2 rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
          <button
            type="button"
            onClick={() => setMode("single")}
            className={`rounded-lg px-3 py-3 text-sm font-black transition ${mode === "single" ? "bg-slate-950 text-white" : "text-slate-600"
              }`}
          >
            Single EMI
          </button>
          <button
            type="button"
            onClick={() => setMode("compare")}
            className={`rounded-lg px-3 py-3 text-sm font-black transition ${mode === "compare" ? "bg-slate-950 text-white" : "text-slate-600"
              }`}
          >
            Comparison
          </button>
        </div>

        {mode === "single" ? <SingleCalculator /> : <ComparisonCalculator />}

        <section className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-xl border border-white/70 bg-white/85 p-4 shadow-lg shadow-slate-200/70 sm:p-5">
            <h2 className="text-xl font-black text-slate-950 sm:text-2xl">
              EMI example: Rs. 10 lakh at 9% for 5 years
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A Rs. 10 lakh loan at 9% for 5 years has an estimated EMI of about
              Rs. 20,758, total repayment of about Rs. 12.45 lakh, and total
              interest of about Rs. 2.45 lakh. If you increase tenure, EMI usually
              falls but total interest rises.
            </p>
          </div>
          <div className="rounded-xl border border-white/70 bg-white/85 p-4 shadow-lg shadow-slate-200/70 sm:p-5">
            <h2 className="text-xl font-black text-slate-950 sm:text-2xl">EMI Calculator FAQs</h2>
            <div className="mt-4 space-y-4">
              {[
                [
                  "What does EMI include?",
                  "EMI includes principal repayment and interest. In early months, the interest portion is usually higher.",
                ],
                [
                  "Why compare total interest?",
                  "A low EMI can still be expensive when tenure is long, so total interest shows the real borrowing cost.",
                ],
                [
                  "Can this replace a bank quote?",
                  "No. Use it for planning, then verify fees, insurance, and final EMI with the lender.",
                ],
              ].map(([question, answer]) => (
                <div key={question}>
                  <h3 className="text-sm font-black text-slate-950 sm:text-base">{question}</h3>
                  <p className="mt-1 text-xs leading-6 text-slate-600 sm:text-sm">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
