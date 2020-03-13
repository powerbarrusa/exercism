export const gigasecond = (moment) => {
  let unix = moment.getTime()
  let giga = 1e12
  let future = (unix + giga)
  let converted = new Date(future)
  return converted
}