export const age = (
  planet,
  seconds,
  factors = {
    earth: 31557600,
    mercury: 7600525,
    venus: 19411026,
    mars: 59360959,
    jupiter: 374222565,
    saturn: 930232558,
    uranus: 2630703165,
    neptune: 5202924160
  },
  planetsInEarthYears = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  }) => {
    return planetsInEarthYears[planet] = +((seconds / (factors[planet])).toFixed(2))
  }
