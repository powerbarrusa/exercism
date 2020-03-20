export const toRna = (dna) => {
  let rna = ""
  const transcription = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  }
  for (let i = 0; i < dna.length; i++){
    if (dna[i] === "G"){
      rna+= "C"
    }
    else if (dna[i] === "C"){
      rna+= "G"
    }
    else if (dna[i] === "T"){
      rna+= "A"
    }
    else if (dna[i] === "A"){
      rna+= "U"
    }
  }
    return rna
  }
