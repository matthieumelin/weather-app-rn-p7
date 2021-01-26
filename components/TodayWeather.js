import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function TodayWeather() {
    return (
        <View style={styles.today}>
            <Text style={styles.today_day_name}>Sun Jan 13 2021</Text>
            <Text style={styles.today_morning_temp}>19°</Text>
            <Text style={styles.today_afternoon_temp}>12°</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    today: {
      flex: 1,
      backgroundColor: '#0353a4',
      padding: 20
    },
    today_day_name: {
        color: '#fff',
        fontSize: '1.5rem'
    },
    today_morning_temp: {
        color: '#fff',
        fontSize: '3rem'
    },
    today_afternoon_temp: {
        color: '#fff',
        fontSize: '1.5rem'
    }
  });