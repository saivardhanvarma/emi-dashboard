export type LoanResult = {
  emi: number
  totalInterest: number
  totalPayment: number
  months: number
}

export type AmortizationRow = {
  month: number
  emi: number
  principal: number
  interest: number
  balance: number
}

export function normalizeMonths(months: number) {
  return Math.max(1, Math.round(months))
}

export function yearsToMonths(years: number) {
  return normalizeMonths(years * 12)
}

export function formatTenure(months: number) {
  const normalizedMonths = normalizeMonths(months)
  const years = normalizedMonths / 12

  if (normalizedMonths % 12 === 0) {
    const fullYears = normalizedMonths / 12
    return `${normalizedMonths} months (${fullYears} ${fullYears === 1 ? "year" : "years"})`
  }

  return `${normalizedMonths} months (${years.toFixed(1)} years)`
}

export function calculateEmiByMonths(
  principal: number,
  annualRate: number,
  months: number,
): LoanResult {
  const normalizedMonths = normalizeMonths(months)
  const monthlyRate = annualRate / 12 / 100

  if (monthlyRate <= 0) {
    const emi = principal / normalizedMonths

    return {
      emi: Math.round(emi),
      totalInterest: 0,
      totalPayment: Math.round(principal),
      months: normalizedMonths,
    }
  }

  const compound = Math.pow(1 + monthlyRate, normalizedMonths)
  const emi = (principal * monthlyRate * compound) / (compound - 1)
  const totalPayment = emi * normalizedMonths

  return {
    emi: Math.round(emi),
    totalInterest: Math.round(totalPayment - principal),
    totalPayment: Math.round(totalPayment),
    months: normalizedMonths,
  }
}

export function buildAmortizationSchedule(
  principal: number,
  annualRate: number,
  months: number,
): AmortizationRow[] {
  const normalizedMonths = normalizeMonths(months)
  const monthlyRate = annualRate / 12 / 100
  const { emi } = calculateEmiByMonths(principal, annualRate, normalizedMonths)
  let balance = principal

  return Array.from({ length: normalizedMonths }, (_, index) => {
    const month = index + 1
    const interest = monthlyRate > 0 ? balance * monthlyRate : 0
    const principalPayment =
      month === normalizedMonths ? balance : Math.max(0, emi - interest)
    balance = Math.max(0, balance - principalPayment)

    return {
      month,
      emi: Math.round(principalPayment + interest),
      principal: Math.round(principalPayment),
      interest: Math.round(interest),
      balance: Math.round(balance),
    }
  })
}
