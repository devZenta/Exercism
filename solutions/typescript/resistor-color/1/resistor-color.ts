export const COLORS: string[] = [
  "black", 
  "brown", 
  "red", 
  "orange", 
  "yellow", 
  "green",
  "blue",
  "violet",
  "grey",
  "white",
]

export const colorCode = (inputColor: string): number => {
  const index = COLORS.findIndex(color => color === inputColor);
  return index >= 0 ? index : 999;
}
