"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { type ChangeEvent, useMemo, useState } from "react"
import { AmortizationSchedule } from "@/components/amortization-schedule"
import {
  calculateEmiByMonths,
  formatTenure,
  yearsToMonths,
} from "@/lib/loan-calculations"

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
})

const number = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 2,
})

type FieldProps = {
  label: string
  value: number
  min: number
  max: number
  step: number
  suffix?: string
  display: string
  onChange: (value: number) => void
}

type LoanCalculatorProps = {
  title: string
  eyebrow: string
  description: string
  defaultAmount: number
  defaultRate: number
  defaultYears: number
  example: string
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function Field({
  label,
  value,
  min,
  max,
  step,
  suffix,
  display,
  onChange,
}: FieldProps) {
  const updateValue = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = Number(event.target.value)

    if (Number.isFinite(nextValue)) {
      onChange(clamp(nextValue, min, max))
    }
  }

  return (
    <label className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <span className="font-black text-slate-800">{label}</span>
      <div className="mt-3 flex items-center rounded-md border border-slate-200 bg-slate-50 focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-100">
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={updateValue}
          className="min-w-0 flex-1 rounded-md bg-transparent px-3 py-2 text-right text-lg font-black text-slate-950 outline-none"
        />
        {suffix && <span className="pr-3 text-sm font-black text-slate-500">{suffix}</span>}
      </div>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={updateValue}
        className="mt-4 w-full accent-teal-600"
        aria-label={`${label} slider`}
      />
      <span className="mt-2 block text-xs font-bold text-slate-500">{display}</span>
    </label>
  )
}

function calculateCompound(principal: number, annualRate: number, years: number) {
  const futureValue = principal * Math.pow(1 + annualRate / 100, years)

  return {
    invested: Math.round(principal),
    returns: Math.round(futureValue - principal),
    maturity: Math.round(futureValue),
  }
}

export function LoanCalculator({
  title,
  eyebrow,
  description,
  defaultAmount,
  defaultRate,
  defaultYears,
  example,
}: LoanCalculatorProps) {
  const [amount, setAmount] = useState(defaultAmount)
  const [rate, setRate] = useState(defaultRate)
  const [tenureMonths, setTenureMonths] = useState(yearsToMonths(defaultYears))

  const result = useMemo(
    () => calculateEmiByMonths(amount, rate, tenureMonths),
    [amount, rate, tenureMonths],
  )
  const tenureRows = [12, 18, 24, 36, 60, 120, 180, 240].map((tenure) => ({
    tenure,
    result: calculateEmiByMonths(amount, rate, tenure),
  }))
  const rateRows = [rate - 1, rate, rate + 1].map((rateValue) => ({
    rate: Math.max(0, rateValue),
    result: calculateEmiByMonths(amount, Math.max(0, rateValue), tenureMonths),
  }))

  return (
    <div className="space-y-8">
      <section className="grid gap-6 xl:grid-cols-[1fr_420px]">
        <div className="rounded-xl border border-white/70 bg-white/85 p-5 shadow-xl shadow-slate-200/70 sm:p-6">
          <p className="text-sm font-black uppercase tracking-wide text-teal-700">
            {eyebrow}
          </p>
          <h1 className="mt-2 text-4xl font-black tracking-normal text-slate-950">
            {title}
          </h1>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">{description}</p>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <Field
              label="Loan amount"
              value={amount}
              min={100000}
              max={50000000}
              step={10000}
              display={currency.format(amount)}
              onChange={setAmount}
            />
            <Field
              label="Interest rate"
              value={rate}
              min={0}
              max={24}
              step={0.05}
              suffix="%"
              display={`${number.format(rate)}% annually`}
              onChange={setRate}
            />
            <Field
              label="Tenure"
              value={tenureMonths}
              min={1}
              max={360}
              step={1}
              suffix="mo"
              display={formatTenure(tenureMonths)}
              onChange={setTenureMonths}
            />
          </div>
        </div>

        <aside className="rounded-xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl shadow-slate-300/70">
          <p className="text-sm font-black uppercase tracking-wide text-teal-300">
            Monthly EMI
          </p>
          <h2 className="mt-2 text-4xl font-black tracking-normal">
            {currency.format(result.emi)}
          </h2>
          <dl className="mt-6 grid gap-3">
            <div className="rounded-lg bg-white/10 p-4">
              <dt className="text-xs font-black uppercase tracking-wide text-slate-300">
                Total interest
              </dt>
              <dd className="mt-1 text-2xl font-black text-rose-200">
                {currency.format(result.totalInterest)}
              </dd>
            </div>
            <div className="rounded-lg bg-white/10 p-4">
              <dt className="text-xs font-black uppercase tracking-wide text-slate-300">
                Total payment
              </dt>
              <dd className="mt-1 text-2xl font-black text-teal-200">
                {currency.format(result.totalPayment)}
              </dd>
            </div>
          </dl>
          <p className="mt-5 text-sm leading-6 text-slate-300">{example}</p>
        </aside>
      </section>

      <CalculatorDiagram
        title="Loan calculation flow"
        steps={["Loan amount", "Interest rate", "Tenure", "Monthly EMI"]}
        note="The calculator combines principal, monthly rate, and tenure to estimate EMI, total interest, and total repayment."
      />
      <ComparisonTables tenureRows={tenureRows} rateRows={rateRows} />
      <AmortizationSchedule amount={amount} rate={rate} months={tenureMonths} />
      <CalculatorFaq type="emi" />
    </div>
  )
}

function ComparisonTables({
  tenureRows,
  rateRows,
}: {
  tenureRows: { tenure: number; result: ReturnType<typeof calculateEmiByMonths> }[]
  rateRows: { rate: number; result: ReturnType<typeof calculateEmiByMonths> }[]
}) {
  return (
    <section className="grid gap-5 lg:grid-cols-2">
      <TableCard title="Tenure vs EMI">
        <tbody>
          {tenureRows.map((row) => (
            <tr key={row.tenure} className="border-t border-slate-200">
              <td className="py-3 font-bold">{formatTenure(row.tenure)}</td>
              <td className="py-3 text-right font-black">{currency.format(row.result.emi)}</td>
              <td className="py-3 text-right font-bold text-rose-600">
                {currency.format(row.result.totalInterest)}
              </td>
            </tr>
          ))}
        </tbody>
      </TableCard>
      <TableCard title="Rate vs Total Interest">
        <tbody>
          {rateRows.map((row) => (
            <tr key={row.rate} className="border-t border-slate-200">
              <td className="py-3 font-bold">{number.format(row.rate)}%</td>
              <td className="py-3 text-right font-black">{currency.format(row.result.emi)}</td>
              <td className="py-3 text-right font-bold text-rose-600">
                {currency.format(row.result.totalInterest)}
              </td>
            </tr>
          ))}
        </tbody>
      </TableCard>
    </section>
  )
}

function TableCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-white/70 bg-white/85 p-5 shadow-lg shadow-slate-200/70">
      <h2 className="text-2xl font-black text-slate-950">{title}</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[420px] text-sm text-slate-700">
          <thead>
            <tr>
              <th className="pb-3 text-left text-xs font-black uppercase tracking-wide text-slate-500">
                Scenario
              </th>
              <th className="pb-3 text-right text-xs font-black uppercase tracking-wide text-slate-500">
                EMI
              </th>
              <th className="pb-3 text-right text-xs font-black uppercase tracking-wide text-slate-500">
                Interest
              </th>
            </tr>
          </thead>
          {children}
        </table>
      </div>
    </div>
  )
}

export function GstCalculator() {
  const [amount, setAmount] = useState(10000)
  const [rate, setRate] = useState(18)
  const [mode, setMode] = useState<"exclusive" | "inclusive">("exclusive")

  const result = useMemo(() => {
    if (mode === "exclusive") {
      const gst = amount * (rate / 100)
      return { base: amount, gst, total: amount + gst }
    }

    const base = amount / (1 + rate / 100)
    return { base, gst: amount - base, total: amount }
  }, [amount, mode, rate])

  return (
    <SimpleCalculatorShell
      eyebrow="GST calculator"
      title="GST Calculator"
      description="Calculate GST exclusive and inclusive amounts for common Indian invoice scenarios."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <Field
          label={mode === "exclusive" ? "Base amount" : "GST inclusive amount"}
          value={amount}
          min={1}
          max={10000000}
          step={100}
          display={currency.format(amount)}
          onChange={setAmount}
        />
        <Field
          label="GST rate"
          value={rate}
          min={0}
          max={28}
          step={0.1}
          suffix="%"
          display={`${number.format(rate)}% GST`}
          onChange={setRate}
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {(["exclusive", "inclusive"] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setMode(item)}
            className={`rounded-lg px-4 py-2 text-sm font-black ${
              mode === item ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-700"
            }`}
          >
            {item === "exclusive" ? "Add GST" : "Remove GST"}
          </button>
        ))}
      </div>
      <ResultGrid
        items={[
          ["Base value", currency.format(result.base)],
          ["GST amount", currency.format(result.gst)],
          ["Invoice total", currency.format(result.total)],
        ]}
      />
      <CalculatorDiagram
        title="GST calculation flow"
        steps={["Amount", "GST rate", mode === "exclusive" ? "Add tax" : "Extract tax", "Invoice value"]}
        note="Use exclusive mode when GST is added to base price and inclusive mode when tax is already inside the quoted price."
      />
    </SimpleCalculatorShell>
  )
}

export function FdCalculator() {
  const [amount, setAmount] = useState(100000)
  const [rate, setRate] = useState(7)
  const [years, setYears] = useState(5)
  const result = useMemo(() => calculateCompound(amount, rate, years), [amount, rate, years])

  return (
    <InvestmentShell
      eyebrow="FD calculator"
      title="FD Calculator"
      description="Estimate fixed deposit maturity value and interest earned using annual compounding."
      amount={amount}
      rate={rate}
      years={years}
      setAmount={setAmount}
      setRate={setRate}
      setYears={setYears}
      result={result}
    />
  )
}

export function LumpsumCalculator() {
  const [amount, setAmount] = useState(100000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(10)
  const result = useMemo(() => calculateCompound(amount, rate, years), [amount, rate, years])

  return (
    <InvestmentShell
      eyebrow="Lumpsum calculator"
      title="Lumpsum Calculator"
      description="Estimate future value for a one-time investment using an expected annual return."
      amount={amount}
      rate={rate}
      years={years}
      setAmount={setAmount}
      setRate={setRate}
      setYears={setYears}
      result={result}
    />
  )
}

export function RdCalculator() {
  const [monthly, setMonthly] = useState(5000)
  const [rate, setRate] = useState(7)
  const [years, setYears] = useState(5)
  const result = useMemo(() => {
    const months = years * 12
    const monthlyRate = rate / 12 / 100
    const maturity =
      monthlyRate > 0
        ? monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
        : monthly * months
    const invested = monthly * months
    return {
      invested: Math.round(invested),
      returns: Math.round(maturity - invested),
      maturity: Math.round(maturity),
    }
  }, [monthly, rate, years])

  return (
    <SimpleCalculatorShell
      eyebrow="RD calculator"
      title="RD Calculator"
      description="Estimate recurring deposit maturity value from monthly deposits, tenure, and interest rate."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <Field
          label="Monthly deposit"
          value={monthly}
          min={500}
          max={500000}
          step={500}
          display={currency.format(monthly)}
          onChange={setMonthly}
        />
        <Field
          label="Interest rate"
          value={rate}
          min={0}
          max={15}
          step={0.1}
          suffix="%"
          display={`${number.format(rate)}% annually`}
          onChange={setRate}
        />
        <Field
          label="Tenure"
          value={years}
          min={1}
          max={10}
          step={1}
          display={`${years} years`}
          onChange={setYears}
        />
      </div>
      <ResultGrid
        items={[
          ["Total deposit", currency.format(result.invested)],
          ["Interest earned", currency.format(result.returns)],
          ["Maturity value", currency.format(result.maturity)],
        ]}
      />
      <CalculatorDiagram
        title="RD growth flow"
        steps={["Monthly deposit", "Interest rate", "Tenure", "Maturity value"]}
        note="Recurring deposits grow through repeated monthly deposits and interest credited over the selected tenure."
      />
    </SimpleCalculatorShell>
  )
}

export function LoanPrepaymentCalculator() {
  const [amount, setAmount] = useState(2000000)
  const [rate, setRate] = useState(9)
  const [tenureMonths, setTenureMonths] = useState(180)
  const [prepayment, setPrepayment] = useState(100000)

  const result = useMemo(() => {
    const original = calculateEmiByMonths(amount, rate, tenureMonths)
    const afterPrepay = calculateEmiByMonths(
      Math.max(0, amount - prepayment),
      rate,
      tenureMonths,
    )
    return {
      original,
      afterPrepay,
      interestSaved: original.totalInterest - afterPrepay.totalInterest,
      emiReduced: original.emi - afterPrepay.emi,
    }
  }, [amount, prepayment, rate, tenureMonths])

  return (
    <SimpleCalculatorShell
      eyebrow="Loan prepayment calculator"
      title="Loan Prepayment Calculator"
      description="Estimate how a one-time principal prepayment can reduce EMI and total interest."
    >
      <div className="grid gap-4 lg:grid-cols-4">
        <Field
          label="Outstanding loan"
          value={amount}
          min={100000}
          max={50000000}
          step={10000}
          display={currency.format(amount)}
          onChange={setAmount}
        />
        <Field
          label="Interest rate"
          value={rate}
          min={0}
          max={24}
          step={0.05}
          suffix="%"
          display={`${number.format(rate)}% annually`}
          onChange={setRate}
        />
        <Field
          label="Remaining tenure"
          value={tenureMonths}
          min={1}
          max={360}
          step={1}
          suffix="mo"
          display={formatTenure(tenureMonths)}
          onChange={setTenureMonths}
        />
        <Field
          label="Prepayment"
          value={prepayment}
          min={0}
          max={amount}
          step={10000}
          display={currency.format(prepayment)}
          onChange={setPrepayment}
        />
      </div>
      <ResultGrid
        items={[
          ["Current EMI", currency.format(result.original.emi)],
          ["New EMI estimate", currency.format(result.afterPrepay.emi)],
          ["EMI reduction", currency.format(result.emiReduced)],
          ["Interest saved", currency.format(result.interestSaved)],
        ]}
      />
      <CalculatorDiagram
        title="Prepayment impact flow"
        steps={["Outstanding loan", "Prepayment", "Lower principal", "Interest saved"]}
        note="A principal prepayment reduces the balance on which future interest is calculated."
      />
    </SimpleCalculatorShell>
  )
}

function InvestmentShell({
  eyebrow,
  title,
  description,
  amount,
  rate,
  years,
  setAmount,
  setRate,
  setYears,
  result,
}: {
  eyebrow: string
  title: string
  description: string
  amount: number
  rate: number
  years: number
  setAmount: (value: number) => void
  setRate: (value: number) => void
  setYears: (value: number) => void
  result: { invested: number; returns: number; maturity: number }
}) {
  return (
    <SimpleCalculatorShell eyebrow={eyebrow} title={title} description={description}>
      <div className="grid gap-4 lg:grid-cols-3">
        <Field
          label="Investment amount"
          value={amount}
          min={1000}
          max={10000000}
          step={1000}
          display={currency.format(amount)}
          onChange={setAmount}
        />
        <Field
          label="Expected return"
          value={rate}
          min={0}
          max={30}
          step={0.1}
          suffix="%"
          display={`${number.format(rate)}% annually`}
          onChange={setRate}
        />
        <Field
          label="Time period"
          value={years}
          min={1}
          max={40}
          step={1}
          display={`${years} years`}
          onChange={setYears}
        />
      </div>
      <ResultGrid
        items={[
          ["Invested amount", currency.format(result.invested)],
          ["Estimated returns", currency.format(result.returns)],
          ["Maturity value", currency.format(result.maturity)],
        ]}
      />
      <CalculatorDiagram
        title="Investment growth flow"
        steps={["Investment", "Return rate", "Time period", "Maturity value"]}
        note="The estimate shows how time and expected return can affect long-term compounding."
      />
      <CalculatorFaq type="investment" />
    </SimpleCalculatorShell>
  )
}

function CalculatorDiagram({
  title,
  steps,
  note,
}: {
  title: string
  steps: string[]
  note: string
}) {
  return (
    <section className="rounded-xl border border-white/70 bg-white/85 p-5 shadow-lg shadow-slate-200/70">
      <h2 className="text-2xl font-black text-slate-950">{title}</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step} className="relative rounded-lg border border-slate-200 bg-slate-50 p-4">
            <span className="grid size-8 place-items-center rounded-full bg-slate-950 text-sm font-black text-white">
              {index + 1}
            </span>
            <p className="mt-4 font-black text-slate-950">{step}</p>
            {index < steps.length - 1 && (
              <div className="absolute right-3 top-6 hidden h-0.5 w-8 translate-x-full bg-teal-300 md:block" />
            )}
          </div>
        ))}
      </div>
      <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">{note}</p>
    </section>
  )
}

function SimpleCalculatorShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-white/70 bg-white/85 p-5 shadow-xl shadow-slate-200/70 sm:p-6">
        <p className="text-sm font-black uppercase tracking-wide text-teal-700">
          {eyebrow}
        </p>
        <h1 className="mt-2 text-4xl font-black tracking-normal text-slate-950">
          {title}
        </h1>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">{description}</p>
        <div className="mt-6">{children}</div>
      </section>
    </div>
  )
}

function ResultGrid({ items }: { items: [string, string][] }) {
  return (
    <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map(([label, value]) => (
        <div
          key={label}
          className="rounded-lg border border-white/70 bg-slate-950 p-4 text-white shadow-sm"
        >
          <p className="text-xs font-black uppercase tracking-wide text-slate-300">
            {label}
          </p>
          <p className="mt-2 text-2xl font-black">{value}</p>
        </div>
      ))}
    </div>
  )
}

function CalculatorFaq({ type }: { type: "emi" | "investment" }) {
  const items =
    type === "emi"
      ? [
          [
            "How accurate is this EMI calculator?",
            "It gives a planning estimate using the standard reducing-balance EMI formula. Your lender may include fees, insurance, reset dates, or rounding rules.",
          ],
          [
            "What happens if I increase tenure?",
            "The monthly EMI usually falls, but the total interest generally rises because the loan remains active for more months.",
          ],
          [
            "Can I use this before applying for a loan?",
            "Yes. It is useful for comparing loan amounts, interest rates, and tenures before discussing the final offer with a bank or lender.",
          ],
        ]
      : [
          [
            "Are investment returns guaranteed?",
            "No. FD and RD returns may be fixed by the bank, while market-linked investments such as mutual funds can vary. Use estimates for planning.",
          ],
          [
            "Should I use a conservative return assumption?",
            "Yes, especially for important goals. A conservative estimate gives more room for market changes, tax, and inflation.",
          ],
          [
            "How often should I review the plan?",
            "Review yearly or whenever your income, goal amount, risk profile, or time horizon changes.",
          ],
        ]

  return (
    <section className="rounded-xl border border-white/70 bg-white/85 p-5 shadow-lg shadow-slate-200/70">
      <h2 className="text-2xl font-black text-slate-950">Calculator FAQs</h2>
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        {items.map(([question, answer]) => (
          <div key={question} className="rounded-lg bg-slate-50 p-4">
            <h3 className="font-black text-slate-950">{question}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{answer}</p>
          </div>
        ))}
      </div>
      <Link
        href="/faqs"
        className="mt-5 inline-block text-sm font-black text-teal-700 hover:text-teal-900"
      >
        Read all FAQs
      </Link>
    </section>
  )
}
