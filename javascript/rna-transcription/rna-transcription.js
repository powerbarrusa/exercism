export const toRna = (dna) => {
  let rna = ""
  const transcription = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  }
  for (let i = 0; i < dna.length; i++){
    rna+=(transcription[dna[i]])
  }
    return rna
  }
