import hexToHsl from 'hex-to-hsl'
import hsl from 'hsl-to-hex-simple'

const fixedTemp = {
  tmin: -10,
  tminColor: "#00ffff",
  tmidle: 10,
  tmidleColor: "#fff700",
  tmax: 30,
  tmaxColor: "#ff8c00"
}

const { tmin, tminColor, tmidle, tmidleColor, tmax, tmaxColor } = fixedTemp

// function for linear color interpolation based on the obtained air temperature

export const bgcolor = (tcurrent) => {

  if (tcurrent >= tmidle) {
    const t1 = tmidle
    const t2 = tmax
    const [h1, saturation, luminosity] = hexToHsl(tmidleColor)
    const h2 = hexToHsl(tmaxColor)[0]
    const h = (h1 - h2) / (t1 - t2) * tcurrent + (h2 * t1 - h1 * t2) / (t1 - t2)
    const hex = hsl(h, saturation, luminosity)
    return hex
  } else {
    const t1 = tmidle
    const t2 = tmin
    const [h1, saturation, luminosity] = hexToHsl(tmidleColor)
    const h2 = hexToHsl(tminColor)[0]
    const h = (h1 - h2) / (t1 - t2) * tcurrent + (h2 * t1 - h1 * t2) / (t1 - t2)
    const hex = hsl(h, saturation, luminosity)
    return hex
  }

}
