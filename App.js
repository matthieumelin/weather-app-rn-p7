import React, { useState } from 'react';
import { View } from 'react-native';

import axios from 'axios';

import TodayWeather from './components/TodayWeather';
import OtherDayWeather from './components/OtherDayWeather';

export default function App() {
  const [data, setData] = useState([]);

  axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=72108e347dc182365f7eb12a2452214b')
    .then(res => {
      setData(res.data);
    })

  return (
    <>
      { Object.keys(data).length !== 0 ?
        <>
          <TodayWeather />
          <OtherDayWeather />
        </>
        : <Text></Text>
      }
    </>
  );
}

