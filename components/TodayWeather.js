import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default function TodayWeather({ data }) {
    const name = new Date(data.current.dt * 1000).toLocaleString('fr-FR', { weekday: 'long', month: 'long', day: 'numeric' });
    const temp = data.current.temp;
    const icon = data.current.weather[0].icon;
    const time = data.current.weather[0].description;

    useEffect(() => {
        console.log(data);
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.today}>
                <View style={styles.today_infos}>
                    <Text style={styles.today_day_name}>{name}</Text>
                    <Text style={styles.today_morning_temp}>{temp}°</Text>
                </View>
                <View style={styles.today_time}>
                    <Image
                        source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }}
                        style={styles.today_time_icon} />
                    <Text style={styles.today_time_text}>{time}</Text>
                </View>
            </View>
            {/* <Text style={styles.today_afternoon_temp}>12°</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0353a4',
        padding: 20,
    },
    today: {
        flexDirection: 'row',
        alignItems: 'center'
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
    },
    today_time: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        right: 0
    },
    today_time_icon: {
        width: 100,
        height: 100
    },
    today_time_text: {
        color: '#fff',
        fontSize: '1rem',
        position: 'absolute',
        bottom: -5
    }
});