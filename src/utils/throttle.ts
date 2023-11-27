export const throttle = (fn: () => void, timeOut: number) => {
  let timer = false
  return function () {
    if (timer) {
      return
    }

    fn()
    timer = true

    setTimeout(() => {
      timer = false
    }, timeOut)
  }
}
