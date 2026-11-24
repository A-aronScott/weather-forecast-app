import ForecastCard from './ForecastCard';

function ForecastList({ forecast }) {
  return (
    <section className="forecast-list">
      <h2>Five-Day Forecast</h2>
      <div className="forecast-cards">
        {forecast.map((day) => (
          <ForecastCard key={day.date} forecastDay={day} />
        ))}
      </div>
    </section>
  );
}

export default ForecastList;
