export const toRna = (dna: string): string => {
  const splitType: string[] = dna.split("");
  let complementRna: string = "";
  for (let type of splitType) {
    switch (type) {
      case "G":
        complementRna += "C";
        break;
      case "C":
        complementRna += "G";
        break;
      case "T":
        complementRna += "A";
        break;
      case "A":
        complementRna += "U";
        break;
      default:
        throw new Error("Invalid input DNA.");
        break;
    }
  }
  return complementRna;
}