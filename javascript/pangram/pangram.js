export const isPangram = (pang, alpha = 'abcdefghijklmnopqrstuvwxyz') => {
  for (let i = 0; i < alpha.length; i++){
    // console.log(alpha[i])
    if (pang === 'abcdefghijklmnopqrstuvwxyz'){
      return true
    }
    else if (pang.includes("")){
      return false
    }
  }
}

