"use client"

import { useMemo } from "react"
import {
  buildAmortizationSchedule,
  formatTenure,
  type AmortizationRow,
} from "@/lib/loan-calculations"

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
})

type AmortizationScheduleProps = {
  amount: number
  rate: number
  months: number
  title?: string
}

function escapeCsv(value: string | number) {
  const stringValue = String(value)
  return `"${stringValue.replaceAll('"', '""')}"`
}

function scheduleToCsv(rows: AmortizationRow[]) {
  const header = ["Month", "EMI", "Principal", "Interest", "Balance"]
  const body = rows.map((row) => [
    row.month,
    row.emi,
    row.principal,
    row.interest,
    row.balance,
  ])

  return [header, ...body]
    .map((line) => line.map((value) => escapeCsv(value)).join(","))
    .join("\n")
}

export function AmortizationSchedule({
  amount,
  rate,
  months,
  title = "Monthly repayment schedule",
}: AmortizationScheduleProps) {
  const rows = useMemo(
    () => buildAmortizationSchedule(amount, rate, months),
    [amount, months, rate],
  )

  const downloadCsv = () => {
    const csv = scheduleToCsv(rows)
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "emi-amortization-schedule.csv"
    link.click()
    URL.revokeObjectURL(url)
  }

  const downloadPdf = () => {
    const rowsHtml = rows
      .map(
        (row) => `
          <tr>
            <td>${row.month}</td>
            <td>${currency.format(row.emi)}</td>
            <td>${currency.format(row.principal)}</td>
            <td>${currency.format(row.interest)}</td>
            <td>${currency.format(row.balance)}</td>
          </tr>
        `,
      )
      .join("")
    const printWindow = window.open("", "_blank")

    if (!printWindow) {
      return
    }

    printWindow.document.write(`
      <!doctype html>
      <html>
        <head>
          <title>EMIWYZE EMI Schedule</title>
          <style>
            body { font-family: Arial, sans-serif; color: #0f172a; padding: 24px; }
            h1 { font-size: 24px; margin-bottom: 8px; }
            p { margin: 4px 0 16px; color: #475569; }
            table { width: 100%; border-collapse: collapse; font-size: 12px; }
            th, td { border: 1px solid #cbd5e1; padding: 8px; text-align: right; }
            th:first-child, td:first-child { text-align: left; }
            th { background: #f1f5f9; }
          </style>
        </head>
        <body>
          <h1>${title}</h1>
          <p>Loan amount: ${currency.format(amount)} | Interest rate: ${rate}% | Tenure: ${formatTenure(months)}</p>
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>EMI</th>
                <th>Principal</th>
                <th>Interest</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>${rowsHtml}</tbody>
          </table>
          <script>
            window.onload = () => {
              window.print();
            };
          </script>
        </body>
      </html>
    `)
    printWindow.document.close()
  }

  return (
    <section className="rounded-xl border border-white/70 bg-white/85 p-5 shadow-lg shadow-slate-200/70">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-950">{title}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Month-by-month breakup for {formatTenure(months)} showing EMI,
            principal, interest, and remaining balance.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={downloadCsv}
            className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-black text-white transition hover:bg-teal-700"
          >
            Download CSV
          </button>
          <button
            type="button"
            onClick={downloadPdf}
            className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-black text-white transition hover:bg-slate-800"
          >
            Download PDF
          </button>
        </div>
      </div>

      <div className="mt-5 max-h-[520px] overflow-auto rounded-lg border border-slate-200">
        <table className="w-full min-w-[680px] text-sm text-slate-700">
          <thead className="sticky top-0 bg-slate-100">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wide text-slate-500">
                Month
              </th>
              <th className="px-4 py-3 text-right text-xs font-black uppercase tracking-wide text-slate-500">
                EMI
              </th>
              <th className="px-4 py-3 text-right text-xs font-black uppercase tracking-wide text-slate-500">
                Principal
              </th>
              <th className="px-4 py-3 text-right text-xs font-black uppercase tracking-wide text-slate-500">
                Interest
              </th>
              <th className="px-4 py-3 text-right text-xs font-black uppercase tracking-wide text-slate-500">
                Balance
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.month} className="border-t border-slate-200">
                <td className="px-4 py-3 font-bold">{row.month}</td>
                <td className="px-4 py-3 text-right font-black">
                  {currency.format(row.emi)}
                </td>
                <td className="px-4 py-3 text-right">
                  {currency.format(row.principal)}
                </td>
                <td className="px-4 py-3 text-right text-rose-600">
                  {currency.format(row.interest)}
                </td>
                <td className="px-4 py-3 text-right">
                  {currency.format(row.balance)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
