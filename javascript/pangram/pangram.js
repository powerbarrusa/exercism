export const isPangram = (pang, alpha = "abcdefghijklmnopqrstuvwxyz") => {
  for (let i = 0; i < alpha.length; i++){
    // console.log(alpha[i])
    if (pang.includes("")){
      return false
    }
  }
}
