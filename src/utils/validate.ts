type IsNumberProps = {
  value: any
}

export function isNumber({ value }: IsNumberProps): boolean {
  if (!/^\d+$/.test(value)) {
    return false
  }

  return true
}
