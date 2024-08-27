import {Weather} from '../../hook/useWeather';
import style from './WheaterDetail.module.css';
import {formatTempC, formatTempF} from '../../helpers/index';
interface WheaterDetailProps {
  weather: Weather;
}

export const WheaterDetail = ({weather}: WheaterDetailProps) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}> Weather of : {weather.name}</h2>
      <p className={style.current}> {formatTempC(weather.main.temp)} &deg;C </p>
      <p className={style.current}> {formatTempF(weather.main.temp)} &deg;F </p>
      <div className={style.minMax}>
        <div>
          <p>
            {' '}
            Min: <span> {formatTempC(weather.main.temp_min)} &deg;C </span>{' '}
          </p>
          <p>
            {' '}
            Min: <span> {formatTempF(weather.main.temp_min)} &deg;F </span>{' '}
          </p>
        </div>
        <div>
          <p>
            {' '}
            Max: <span> {formatTempC(weather.main.temp_max)} &deg;C </span>{' '}
          </p>
          <p>
            {' '}
            Max: <span> {formatTempF(weather.main.temp_max)} &deg;F </span>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};
