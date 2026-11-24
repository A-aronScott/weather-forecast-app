// Sample (and future real) data is always stored in Celsius.
// This is the one place that knows how to convert it for display.
export function convertTemp(celsius, unit) {
  if (unit === 'F') {
    return Math.round((celsius * 9) / 5 + 32);
  }
  return Math.round(celsius);
}
