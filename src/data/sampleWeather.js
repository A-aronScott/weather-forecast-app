// Sample data shaped to resemble what a real weather API would return.
// Used in Stage 1 to build the UI before any network requests exist.

export const sampleCurrentWeather = {
  city: 'Austin',
  temperature: 24,        // current temp in Celsius
  description: 'Partly Cloudy',
  icon: 'partly-cloudy',  // identifier used to pick an icon later
  humidity: 58,           // percent
  windSpeed: 14,          // km/h
};

export const sampleForecast = [
  {
    date: '2026-11-24',
    day: 'Tuesday',
    high: 26,
    low: 15,
    description: 'Sunny',
    icon: 'clear-day',
  },
  {
    date: '2026-11-25',
    day: 'Wednesday',
    high: 23,
    low: 14,
    description: 'Partly Cloudy',
    icon: 'partly-cloudy',
  },
  {
    date: '2026-11-26',
    day: 'Thursday',
    high: 19,
    low: 12,
    description: 'Light Rain',
    icon: 'rain',
  },
  {
    date: '2026-11-27',
    day: 'Friday',
    high: 17,
    low: 10,
    description: 'Thunderstorms',
    icon: 'thunderstorm',
  },
  {
    date: '2026-11-28',
    day: 'Saturday',
    high: 21,
    low: 13,
    description: 'Cloudy',
    icon: 'cloudy',
  },
];
