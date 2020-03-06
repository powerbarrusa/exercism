export const colorCode = (color, COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]) => {
  for (let i = 0; i < color.length; i++){
    if (COLORS[i].includes(color)){
      return COLORS.indexOf(color)
    }
  }
}

export const COLORS = undefined
