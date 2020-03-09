export const decodedValue = (duo) => {
  let color1 = COLORS.indexOf(duo[0])
  let color2 = COLORS.indexOf(duo[1])
  let digits = color1 + "" + color2
  let trueDigits = Number(digits)
  return trueDigits
}

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
