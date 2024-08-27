import styles from './App.module.css';
import {Alert} from './components/Alert/Alert';
import {Form} from './components/Form';
import {Spinner} from './components/spinner/Spinner';
import {WheaterDetail} from './components/WheaterDetail/WheaterDetail';
import {useWheater} from './hook/useWeather';
function App() {
  const {weather, loading, notFound, fetchWheater, hasWeatherData} =
    useWheater();

  return (
    <>
      {' '}
      <h1 className={styles.title}>WheateraPP</h1>
      <div className={styles.container}>
        <Form fetchWheater={fetchWheater} />
        {notFound && <Alert> Weather Not Found </Alert>}
        {loading && <Spinner />}
        {hasWeatherData && <WheaterDetail weather={weather} />}
      </div>
    </>
  );
}

export default App;
