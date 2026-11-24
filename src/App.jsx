import CurrentWeather from './components/CurrentWeather'
import ForecastList from './components/ForecastList'
import { sampleCurrentWeather, sampleForecast } from './data/sampleWeather'
import './App.css'

function App() {
  return (
    <>
      <h1>Weather Forecast</h1>
      <CurrentWeather weather={sampleCurrentWeather} />
      <ForecastList forecast={sampleForecast} />
    </>
  )
}

export default App
