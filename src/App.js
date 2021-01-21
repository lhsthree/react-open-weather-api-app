import React from 'react'
import { WeatherCard, CitySelector, WeatherList } from './components'
import './App.css';
import {Container} from 'react-bootstrap'
import UseFetch from './hooks/UseFetch'
import {API_KEY, API_BASE_URL} from './apis/config';

const App = () => {
const {data, error, isLoading, setUrl} = UseFetch();
  
  return (
    <Container className="App">
      <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}`)} />
      { data && <WeatherList weathers={data.list} /> }
    </Container>
  );
}

export default App;
