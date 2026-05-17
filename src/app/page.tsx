"use client"

import { type ChangeEvent, useMemo, useState } from "react"
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
    <div className="rounded-lg border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur">
      <p className="text-xs font-black uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className={`mt-2 text-2xl font-black tracking-normal ${tones[tone]}`}>
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
  const updateValue = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = Number(event.target.value)

    if (Number.isFinite(nextValue)) {
      onValueChange(clampValue(nextValue, min, max))
    }
  }

  return (
    <div className="block rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-4">
        <label className="font-black text-slate-800" htmlFor={`${label}-input`}>
          {label}
        </label>
        <div className="flex min-w-0 flex-col items-end gap-1">
          <div className="flex max-w-44 items-center rounded-md border border-slate-200 bg-slate-50 text-slate-950 focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-100">
            <input
              id={`${label}-input`}
              type="number"
              value={value}
              min={min}
              max={max}
              step={step}
              onChange={updateValue}
              className="min-w-0 flex-1 rounded-md bg-transparent px-3 py-2 text-right text-lg font-black outline-none"
            />
            {inputSuffix && (
              <span className="pr-3 text-sm font-black text-slate-500">
                {inputSuffix}
              </span>
            )}
          </div>
          <span className="text-xs font-bold text-slate-500">{display}</span>
        </div>
      </div>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={updateValue}
        aria-label={`${label} slider`}
        className="w-full accent-teal-600"
      />
      <div className="mt-2 flex justify-between text-xs font-bold text-slate-400">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
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
    <section className="grid gap-6 xl:grid-cols-[1fr_420px]">
      <div className="space-y-4">
        <div className="rounded-xl border border-white/70 bg-white/80 p-5 shadow-xl shadow-slate-200/70 backdrop-blur sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-teal-700">
                Single EMI calculator
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
                Calculate one loan clearly.
              </h2>
            </div>
            <div className="rounded-lg bg-slate-950 px-4 py-3 text-white">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-300">
                Monthly EMI
              </p>
              <p className="mt-1 text-2xl font-black">{currency.format(result.emi)}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
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

        <div className="grid gap-4 sm:grid-cols-3">
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
      </div>

      <aside className="rounded-xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl shadow-slate-300/70">
        <p className="text-sm font-black uppercase tracking-wide text-teal-300">
          Payment split
        </p>
        <h3 className="mt-2 text-3xl font-black tracking-normal">
          {currency.format(result.totalPayment)}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          Total repayment over {result.months} months at {number.format(rate)}%.
        </p>

        <div className="mt-8 space-y-5">
          <div>
            <div className="mb-2 flex justify-between text-sm font-bold">
              <span>Principal</span>
              <span>{currency.format(amount)}</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-teal-400"
                style={{ width: `${100 - interestPercent}%` }}
              />
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between text-sm font-bold">
              <span>Interest</span>
              <span>{currency.format(result.totalInterest)}</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-rose-400"
                style={{ width: `${interestPercent}%` }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-white/10 bg-white/10 p-4">
          <p className="text-xs font-black uppercase tracking-wide text-slate-300">
            Quick read
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-200">
            Your EMI is {currency.format(result.emi)}. Interest makes up{" "}
            {number.format(interestPercent)}% of your total payment.
          </p>
        </div>
      </aside>
      <div className="xl:col-span-2">
        <AmortizationSchedule amount={amount} rate={rate} months={tenureMonths} />
      </div>
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
    <section className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
        <div className="rounded-xl border border-white/70 bg-white/80 p-5 shadow-xl shadow-slate-200/70 backdrop-blur sm:p-6">
          <p className="text-sm font-black uppercase tracking-wide text-indigo-700">
            Loan comparison
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-normal text-slate-950">
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

        <div className="rounded-xl border border-slate-200 bg-slate-950 p-5 text-white shadow-xl shadow-slate-300/70 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-teal-300">
                Best matched offer
              </p>
              <h3 className="mt-2 text-3xl font-black tracking-normal">
                {bestLoan.name}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {number.format(bestLoan.rate)}% interest,{" "}
                {currency.format(bestLoan.result.emi)} EMI.
              </p>
            </div>
            <div className="rounded-lg bg-white px-4 py-3 text-slate-950">
              <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                Saves up to
              </p>
              <p className="mt-1 text-2xl font-black">{currency.format(savings)}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {loans.map((loan) => (
              <label key={loan.id} className="rounded-lg bg-white/10 p-4">
                <span className="text-sm font-black">{loan.name}</span>
                <div className="mt-3 flex items-center rounded-md bg-white text-slate-950">
                  <input
                    type="number"
                    min="0"
                    step="0.05"
                    value={loan.rate}
                    onChange={(event) => updateRate(loan.id, event.target.value)}
                    className="min-w-0 flex-1 rounded-md bg-transparent px-3 py-3 font-black outline-none"
                  />
                  <span className="pr-3 text-sm font-black text-slate-500">%</span>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {loans.map((loan) => {
          const isBest = loan.id === bestLoan.id
          const barWidth = maxEmi > 0 ? Math.max(10, (loan.result.emi / maxEmi) * 100) : 0

          return (
            <article
              key={loan.id}
              className={`rounded-xl border p-5 shadow-lg transition hover:-translate-y-1 ${
                isBest
                  ? "border-teal-300 bg-teal-50 shadow-teal-100"
                  : "border-white/70 bg-white/80 shadow-slate-200/70"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-black tracking-normal text-slate-950">
                    {loan.name}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-slate-500">
                    {number.format(loan.rate)}% for {formatTenure(tenureMonths)}
                  </p>
                </div>
                {isBest && (
                  <span className="rounded-md bg-teal-600 px-3 py-2 text-xs font-black text-white">
                    BEST
                  </span>
                )}
              </div>

              <div className="mt-6">
                <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                  EMI
                </p>
                <p className="mt-2 text-4xl font-black tracking-normal text-slate-950">
                  {currency.format(loan.result.emi)}
                </p>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className={`h-full rounded-full ${
                      isBest ? "bg-teal-500" : "bg-indigo-400"
                    }`}
                    style={{ width: `${barWidth}%` }}
                  />
                </div>
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-white/75 p-4">
                  <dt className="text-xs font-black uppercase tracking-wide text-slate-500">
                    Interest
                  </dt>
                  <dd className="mt-1 text-lg font-black text-rose-600">
                    {currency.format(loan.result.totalInterest)}
                  </dd>
                </div>
                <div className="rounded-lg bg-white/75 p-4">
                  <dt className="text-xs font-black uppercase tracking-wide text-slate-500">
                    Total
                  </dt>
                  <dd className="mt-1 text-lg font-black text-indigo-700">
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

export default function Home() {
  const [mode, setMode] = useState<"single" | "compare">("single")

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <section className="mb-6 grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-teal-700">
              Fast, responsive, finance-ready
            </p>
            <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight tracking-normal text-slate-950 sm:text-6xl">
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
            className={`rounded-lg px-3 py-3 text-sm font-black transition ${
              mode === "single" ? "bg-slate-950 text-white" : "text-slate-600"
            }`}
          >
            Single EMI
          </button>
          <button
            type="button"
            onClick={() => setMode("compare")}
            className={`rounded-lg px-3 py-3 text-sm font-black transition ${
              mode === "compare" ? "bg-slate-950 text-white" : "text-slate-600"
            }`}
          >
            Comparison
          </button>
        </div>

        {mode === "single" ? <SingleCalculator /> : <ComparisonCalculator />}

        <section className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-xl border border-white/70 bg-white/85 p-5 shadow-lg shadow-slate-200/70">
            <h2 className="text-2xl font-black text-slate-950">
              EMI example: Rs. 10 lakh at 9% for 5 years
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              A Rs. 10 lakh loan at 9% for 5 years has an estimated EMI of about
              Rs. 20,758, total repayment of about Rs. 12.45 lakh, and total
              interest of about Rs. 2.45 lakh. If you increase tenure, EMI usually
              falls but total interest rises.
            </p>
          </div>
          <div className="rounded-xl border border-white/70 bg-white/85 p-5 shadow-lg shadow-slate-200/70">
            <h2 className="text-2xl font-black text-slate-950">EMI Calculator FAQs</h2>
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
                  <h3 className="font-black text-slate-950">{question}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
  )
}
