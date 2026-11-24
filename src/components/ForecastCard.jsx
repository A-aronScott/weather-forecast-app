function ForecastCard({ forecastDay }) {
  const { day, high, low, description, icon } = forecastDay;

  return (
    <div className="forecast-card">
      <p className="forecast-day">{day}</p>
      <div className="forecast-icon" aria-hidden="true">
        {icon}
      </div>
      <p className="forecast-description">{description}</p>
      <p className="forecast-temps">
        <span className="forecast-high">{high}°C</span>
        <span className="forecast-low">{low}°C</span>
      </p>
    </div>
  );
}

export default ForecastCard;
