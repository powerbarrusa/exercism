export const reverseString = (string) => {
  const reversedString = ""
  for (let i = string.length + 1; i > 0; i--){
    reversedString.concat(string[i])
  }
  return reversedString
}
