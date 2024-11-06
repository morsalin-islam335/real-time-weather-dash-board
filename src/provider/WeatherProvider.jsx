import { WeatherContext } from "../context";
import useWeather from "../hooks/useWeather";
// eslint-disable-next-line react/prop-types
const WeatherProvider = ({ children }) => {
  const { weatherData, error, loading } = useWeather();
  return (
    <WeatherContext.Provider value={{ weatherData, error, loading }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
