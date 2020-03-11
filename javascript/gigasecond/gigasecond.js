export const gigasecond = (moment) => {
  let today = new Date()
  let future = today.setDate(moment)
  let farAway = future.getDate(0, 0, 0, 0, 0, 1000000000)
  console.log(farAway)
  return farAway
}
