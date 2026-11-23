import CurrentWeather from './components/CurrentWeather'
import { sampleCurrentWeather } from './data/sampleWeather'
import './App.css'

function App() {
  return (
    <>
      <h1>Weather Forecast</h1>
      <CurrentWeather weather={sampleCurrentWeather} />
    </>
  )
}

export default App
