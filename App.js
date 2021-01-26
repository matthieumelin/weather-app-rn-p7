import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import axios from 'axios';

import TodayWeather from './components/TodayWeather';
import OtherDayWeather from './components/OtherDayWeather';

export default function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=72108e347dc182365f7eb12a2452214b')
    .then(res => {
      setData(res.data);
    })
  }, []);

  return (
    <View>
      { Object.keys(data).length !== 0 ?
        <View>
          <TodayWeather 
          data={data} />
          <OtherDayWeather
          data={data} />
        </View>
        : <Text style={styles.loading}>Chargement..</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
});
