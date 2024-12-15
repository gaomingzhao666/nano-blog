export const sluglify = (text: string) => {
  return text.replace(/\s+/g, '-')
}

export const unsluglify = (text: string) => {
  return text.replace(/-/g, ' ')
}
