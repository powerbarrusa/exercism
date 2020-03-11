export const decodedValue = ([color1, color2]) => {
  color1 = COLORS.indexOf(color1)
  color2 = COLORS.indexOf(color2)
  let digits = color1 * 10 + color2
  let trueDigits = Number(digits)
  return trueDigits
}

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
