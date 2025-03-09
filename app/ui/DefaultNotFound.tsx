import type { ReactNode } from "react"
import { Link, type NotFoundRouteProps } from "@tanstack/react-router"

export function DefaultNotFount({ children }: NotFoundRouteProps & { children?: ReactNode }) {
  return (
    <div className="space-y-2 p-2">
      <div className="text-gray-600 dark:text-gray-400">
        {children || <p>The page you are looking for does not exist.</p>}
      </div>
      <p className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => window.history.back()}
          className="rounded bg-emerald-500 px-2 py-1 text-sm font-black text-white uppercase">
          Go back
        </button>
        <Link
          to="/"
          className="rounded bg-cyan-600 px-2 py-1 text-sm font-black text-white uppercase">
          Start Over
        </Link>
      </p>
    </div>
  )
}
