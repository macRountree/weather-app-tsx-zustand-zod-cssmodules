import {ChangeEvent, FormEvent, useState} from 'react';
import {countries} from '../data/countries';
import styles from './Form.module.css';
import {Search} from '../interfaces';
import {Alert} from './Alert/Alert';

interface FormProps {
  fetchWheater: (search: Search) => void;
}

export const Form = ({fetchWheater}: FormProps) => {
  const [search, setSearch] = useState<Search>({
    city: '',
    country: '',
  });
  const [alert, setAlert] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearch({...search, [e.target.name]: e.target.value});
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(search).includes('')) {
      setAlert('All fields are required');
      return;
    }
    fetchWheater(search);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {alert && <Alert>{alert} </Alert>}
      <div className={styles.field}>
        <label htmlFor="city">City: </label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="City"
          value={search.city}
          onChange={handleChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="country">Country: </label>
        <select
          name="country"
          id="country"
          value={search.country}
          onChange={handleChange}
        >
          <option>-- Select country --</option>
          {countries.map(country => (
            <option
              key={country.code}
              value={country.code}
              className={styles.option}
            >
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value="Check Wheater" className={styles.submit} />
    </form>
  );
};
