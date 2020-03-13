export const gigasecond = (moment) => {
  const Giga = 1e12
  return new Date(moment.getTime() + Giga)
}