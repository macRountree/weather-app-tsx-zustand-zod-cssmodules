import axios from 'axios';
import {Search} from '../interfaces';
// import {object, string, number, InferOutput, parse} from 'valibot';
import {z} from 'zod';
import {useMemo, useState} from 'react';

//*>Zod schema definition
const Weather = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    humidity: z.number(),
    temp_min: z.number(),
    temp_max: z.number(),
  }),
});
export type Weather = z.infer<typeof Weather>; //*>Type of the Weather object

//*Valibot schema definition
// const WeatherSchema = object({
//   name: string(),
//   main: object({
//     temp: number(),
//     humidity: number(),
//     temp_min: number(),
//     temp_max: number(),
//   }),
// });
// type Weather = InferOutput<typeof WeatherSchema>;
export const useWheater = () => {
  //*create state for the weather data

  const [weather, setWeather] = useState({
    name: '',
    main: {
      temp: 0,
      humidity: 0,
      temp_min: 0,
      temp_max: 0,
    },
  });

  //*Loader
  const [loading, setLoading] = useState(false);
  const fetchWheater = async (search: Search) => {
    const appId = import.meta.env.VITE_API_KEY;

    setLoading(true);
    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;
      const {data} = await axios(geoUrl); //*axios get request
      const lat = data[0].lat;
      const lon = data[0].lon;
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
      console.log(weatherUrl, 'from wheater');

      //*Cast the response to the data object
      const {data: weatherData} = await axios(weatherUrl);
      const result = Weather.safeParse(weatherData);
      if (result.success) {
        setWeather(result.data);
      }
      //   const result = parse(WeatherSchema, weatherData);
      //   if (result) {
      //     console.log(result.name);
      //   }

      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    console.log('fetchWheater');
  };

  const hasWeatherData = useMemo(() => weather.name, [weather]);

  return {weather, setWeather, loading, fetchWheater, hasWeatherData};
};
