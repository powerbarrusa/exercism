export const decodedValue = ([color1, color2]) => {
  let code1 = COLORS.indexOf(color1)
  let code2 = COLORS.indexOf(color2)
  let digits = code1 * 10 + code2
  let trueDigits = Number(digits)
  return trueDigits
}

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
