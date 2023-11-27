export function debounce(originalFn: Function, timeOutMs: number) {
  let timeOut: ReturnType<typeof setTimeout>
  return (...args: unknown[]) => {
    clearTimeout(timeOut)
    timeOut = setTimeout(() => originalFn(...args), timeOutMs)
  }
}
