import type { PropsWithChildren } from "react"

export function ContentCard({ children }: PropsWithChildren) {
  return (
    <div className="rounded-xl border border-white/70 bg-white/85 p-5 shadow-lg shadow-slate-200/70 sm:p-7">
      {children}
    </div>
  )
}
