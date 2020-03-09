export const reverseString = (string) => {
  let lower = string.toLowerCase()
  let reverse = ""
  for (let i = lower.length + 1; i > 0; i--){
    reverse.concat(lower[i])
  }
  return reverse
}
