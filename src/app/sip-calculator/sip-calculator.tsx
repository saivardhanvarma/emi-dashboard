"use client"

import { type ChangeEvent, useMemo, useState } from "react"

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
})

const number = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 2,
})

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function calculateSip(monthlyInvestment: number, annualReturn: number, years: number) {
  const months = years * 12
  const monthlyRate = annualReturn / 12 / 100
  const investedAmount = monthlyInvestment * months

  if (monthlyRate <= 0) {
    return {
      investedAmount,
      estimatedReturns: 0,
      futureValue: investedAmount,
      months,
    }
  }

  const futureValue =
    monthlyInvestment *
    (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate))

  return {
    investedAmount: Math.round(investedAmount),
    estimatedReturns: Math.round(futureValue - investedAmount),
    futureValue: Math.round(futureValue),
    months,
  }
}

function SipField({
  label,
  value,
  min,
  max,
  step,
  suffix,
  display,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  suffix?: string
  display: string
  onChange: (value: number) => void
}) {
  const updateValue = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = Number(event.target.value)

    if (Number.isFinite(nextValue)) {
      onChange(clamp(nextValue, min, max))
    }
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-4">
        <label className="font-black text-slate-800" htmlFor={`${label}-sip-input`}>
          {label}
        </label>
        <div className="flex max-w-44 items-center rounded-md border border-slate-200 bg-slate-50 focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-100">
          <input
            id={`${label}-sip-input`}
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
      <p className="mt-2 text-xs font-bold text-slate-500">{display}</p>
    </div>
  )
}

export function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000)
  const [annualReturn, setAnnualReturn] = useState(12)
  const [years, setYears] = useState(15)

  const result = useMemo(
    () => calculateSip(monthlyInvestment, annualReturn, years),
    [annualReturn, monthlyInvestment, years],
  )

  const investedPercent =
    result.futureValue > 0
      ? Math.min(100, (result.investedAmount / result.futureValue) * 100)
      : 0

  return (
    <section className="grid gap-6 xl:grid-cols-[1fr_420px]">
      <div className="rounded-xl border border-white/70 bg-white/85 p-5 shadow-xl shadow-slate-200/70 sm:p-6">
        <p className="text-sm font-black uppercase tracking-wide text-teal-700">
          SIP calculator
        </p>
        <h1 className="mt-2 text-4xl font-black tracking-normal text-slate-950">
          Estimate monthly investment growth.
        </h1>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          Calculate estimated maturity value, total investment, and possible
          returns for a systematic investment plan.
        </p>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <SipField
            label="Monthly SIP"
            value={monthlyInvestment}
            min={500}
            max={500000}
            step={500}
            display={currency.format(monthlyInvestment)}
            onChange={setMonthlyInvestment}
          />
          <SipField
            label="Expected return"
            value={annualReturn}
            min={1}
            max={30}
            step={0.5}
            suffix="%"
            display={`${number.format(annualReturn)}% annually`}
            onChange={setAnnualReturn}
          />
          <SipField
            label="Time period"
            value={years}
            min={1}
            max={40}
            step={1}
            display={`${years} years`}
            onChange={setYears}
          />
        </div>
      </div>

      <aside className="rounded-xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl shadow-slate-300/70">
        <p className="text-sm font-black uppercase tracking-wide text-teal-300">
          Estimated value
        </p>
        <h2 className="mt-2 text-4xl font-black tracking-normal">
          {currency.format(result.futureValue)}
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          Based on {result.months} monthly investments at an assumed{" "}
          {number.format(annualReturn)}% annual return.
        </p>

        <div className="mt-8 space-y-5">
          <div>
            <div className="mb-2 flex justify-between text-sm font-bold">
              <span>Invested amount</span>
              <span>{currency.format(result.investedAmount)}</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-teal-400"
                style={{ width: `${investedPercent}%` }}
              />
            </div>
          </div>
          <div>
            <div className="mb-2 flex justify-between text-sm font-bold">
              <span>Estimated returns</span>
              <span>{currency.format(result.estimatedReturns)}</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-indigo-400"
                style={{ width: `${100 - investedPercent}%` }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-white/10 bg-white/10 p-4">
          <p className="text-xs font-black uppercase tracking-wide text-slate-300">
            Planning note
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-200">
            SIP returns are market-linked estimates. Use conservative assumptions
            for important goals and review your investments regularly.
          </p>
        </div>
      </aside>
    </section>
  )
}
