import { useState } from 'react'
import CurrentWeather from './components/CurrentWeather'
import ForecastList from './components/ForecastList'
import SearchBar from './components/SearchBar'
import UnitToggle from './components/UnitToggle'
import { sampleCurrentWeather, sampleForecast } from './data/sampleWeather'
import './App.css'

function App() {
  const [searchedCity, setSearchedCity] = useState('')
  const [unit, setUnit] = useState('C')

  function handleSearch(city) {
    setSearchedCity(city)
  }

  function handleUnitChange(newUnit) {
    setUnit(newUnit)
  }

  return (
    <>
      <h1>Weather Forecast</h1>
      <SearchBar onSearch={handleSearch} />
      {searchedCity && (
        <p className="search-feedback">
          You searched for "{searchedCity}" — showing sample weather data below (not yet connected to a real city).
        </p>
      )}
      <UnitToggle unit={unit} onUnitChange={handleUnitChange} />
      <CurrentWeather weather={sampleCurrentWeather} unit={unit} />
      <ForecastList forecast={sampleForecast} unit={unit} />
    </>
  )
}

export default App
