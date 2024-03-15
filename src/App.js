
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [cityInput, setCityInput] = useState(''); // Define cityInput state

  useEffect(() => {
    const fetchData = async () => {
      const appKey = 'fac3cf3991c3995edc72e5be2bb20074';
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${appKey}`;

      try {
        const response = await fetch(URL);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (cityInput) { // Fetch data only if cityInput is not empty
      fetchData();
    }
  }, [cityInput]); // Run effect whenever cityInput changes

  return (
    <div className="weather-container">
      <h1 className="weather-title">Weather App</h1>
      {data && data.main && (
        <div className="weather-data">
          <div>
            <label className="weather-label">Temperature:</label>
            <p className="weather-value">{data.main.temp}°C</p>
          </div>
          <div>
            <label className="weather-label">Humidity:</label>
            <p className="weather-value">{data.main.humidity}%</p>
          </div>
          <div>
            <label className="weather-label">Wind:</label>
            <p className="weather-value">{data.wind.speed} m/s</p>
          </div>
        </div>
      )}
      <input
        type="text"
        placeholder="Enter city"
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
        className="city-input"
      />
    </div>
  );


}

export default App;
