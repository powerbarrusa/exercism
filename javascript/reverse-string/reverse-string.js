export const reverseString = (string) => {
  const Reverse = ""
  for (let i = string.length + 1; i > 0; i--){
    Reverse.concat(string[i])
  }
  return Reverse
}
