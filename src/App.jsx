import { useState } from 'react'
import CurrentWeather from './components/CurrentWeather'
import ForecastList from './components/ForecastList'
import SearchBar from './components/SearchBar'
import UnitToggle from './components/UnitToggle'
import LoadingMessage from './components/LoadingMessage'
import ErrorMessage from './components/ErrorMessage'
import { sampleCurrentWeather, sampleForecast } from './data/sampleWeather'
import './App.css'

function App() {
  const [searchedCity, setSearchedCity] = useState('')
  const [unit, setUnit] = useState('C')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  function handleSearch(city) {
    setIsLoading(true)
    setError(null)

    setTimeout(() => {
      // NOTE: temporary demo-only trigger for testing the error UI.
      // Real validation will come from the actual API in a later stage.
      if (city.toLowerCase() === 'error') {
        setError('City not found. Please try another search.')
        setSearchedCity('')
        setIsLoading(false)
      } else {
        setSearchedCity(city)
        setError(null)
        setIsLoading(false)
      }
    }, 800)
  }

  function handleUnitChange(newUnit) {
    setUnit(newUnit)
  }

  return (
    <>
      <h1>Weather Forecast</h1>
      <SearchBar onSearch={handleSearch} />

      {isLoading && <LoadingMessage />}
      {!isLoading && error && <ErrorMessage message={error} />}

      {!isLoading && !error && (
        <>
          {searchedCity && (
            <p className="search-feedback">
              You searched for "{searchedCity}" — showing sample weather data below (not yet connected to a real city).
            </p>
          )}
          <UnitToggle unit={unit} onUnitChange={handleUnitChange} />
          <CurrentWeather weather={sampleCurrentWeather} unit={unit} />
          <ForecastList forecast={sampleForecast} unit={unit} />
        </>
      )}
    </>
  )
}

export default App
