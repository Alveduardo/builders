import React, { useEffect } from 'react'
import { View } from 'react-native'

const API_KEY = '87d99c5fef103ac87af8f23775c0ac41'

const lat = 21.7794456
const lon = -48.1792643

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

export default () => {
    useEffect(() => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then(res => {
                console.log(res);
            });
    }, [])

    return (
        <View style={{ flex: 1 }}>

        </View>
    )
}