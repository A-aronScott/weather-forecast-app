import { convertTemp } from '../utils/convertTemp';

function ForecastCard({ forecastDay, unit }) {
  const { day, high, low, description, icon } = forecastDay;
  const displayHigh = convertTemp(high, unit);
  const displayLow = convertTemp(low, unit);

  return (
    <div className="forecast-card">
      <p className="forecast-day">{day}</p>
      <div className="forecast-icon" aria-hidden="true">
        {icon}
      </div>
      <p className="forecast-description">{description}</p>
      <p className="forecast-temps">
        <span className="forecast-high">{displayHigh}°{unit}</span>
        <span className="forecast-low">{displayLow}°{unit}</span>
      </p>
    </div>
  );
}

export default ForecastCard;
