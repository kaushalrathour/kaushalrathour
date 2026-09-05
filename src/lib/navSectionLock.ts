type LockHandler = (href: string, ms: number) => void

let handler: LockHandler | null = null

/** Navbar registers once; sections call lock while layout is intentionally thrashing. */
export function setNavSectionLockHandler(next: LockHandler | null) {
  handler = next
}

export function lockNavSection(href: string, ms: number) {
  handler?.(href, ms)
}
