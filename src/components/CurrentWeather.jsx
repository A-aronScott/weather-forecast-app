import { convertTemp } from '../utils/convertTemp';

function CurrentWeather({ weather, unit }) {
  const { city, temperature, description, icon, humidity, windSpeed } = weather;
  const displayTemp = convertTemp(temperature, unit);

  return (
    <section className="current-weather">
      <h2>{city}</h2>

      <div className="current-weather-icon" aria-hidden="true">
        {icon}
      </div>

      <p className="current-weather-temp">{displayTemp}°{unit}</p>
      <p className="current-weather-description">{description}</p>

      <div className="current-weather-details">
        <p>Humidity: {humidity}%</p>
        <p>Wind: {windSpeed} km/h</p>
      </div>
    </section>
  );
}

export default CurrentWeather;
