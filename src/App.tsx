import styles from './App.module.css';
import {Form} from './components/Form';
import {Spinner} from './components/spinner/Spinner';
import {WheaterDetail} from './components/WheaterDetail/WheaterDetail';
import {useWheater} from './hook/useWeather';
function App() {
  const {weather, loading, fetchWheater, hasWeatherData} = useWheater();

  return (
    <>
      {' '}
      <h1 className={styles.title}>WheateraPP</h1>
      <div className={styles.container}>
        <Form fetchWheater={fetchWheater} />
        {loading && <Spinner />}
        {hasWeatherData && <WheaterDetail weather={weather} />}
      </div>
    </>
  );
}

export default App;
