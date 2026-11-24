import { useState } from 'react'
import CurrentWeather from './components/CurrentWeather'
import ForecastList from './components/ForecastList'
import SearchBar from './components/SearchBar'
import { sampleCurrentWeather, sampleForecast } from './data/sampleWeather'
import './App.css'

function App() {
  const [searchedCity, setSearchedCity] = useState('')

  function handleSearch(city) {
    setSearchedCity(city)
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
      <CurrentWeather weather={sampleCurrentWeather} />
      <ForecastList forecast={sampleForecast} />
    </>
  )
}

export default App
