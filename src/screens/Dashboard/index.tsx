import React, { useEffect, useRef, useState } from 'react'
import { ImageBackground, PermissionsAndroid, Text, TouchableOpacity, View, BackHandler } from 'react-native'
import Geolocation from 'react-native-geolocation-service';
import api from '../../services/api';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { FadeOut, FadeIn } from "react-native-reanimated";



interface Location {
    latitude: number,
    longitude: number
}

type Weather = any

import Sunny from '../../../assets/sunny.jpg'
import Night from '../../../assets/night.jpg'
import Cloudy from '../../../assets/cloudy.jpeg'
import Rainy from '../../../assets/rainy.jpg'

import { styles } from './styles';
import { COLORS } from '../../utils/colors/colorsUtils';
import { getFormatedDate } from '../../utils/date/dateUtils';
import { kelvinToCelsius } from '../../utils/temp/tempUtils';

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);
const AnimatedIB = Animated.createAnimatedComponent(ImageBackground);

export default () => {

    const [data, setData] = useState<Weather>()

    const Img = Rainy

    useEffect(() => {
        requestLocationPermission()
    }, [])

    const requestLocationPermission = async () => {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

        if (granted === PermissionsAndroid.RESULTS.GRANTED)
            Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
                requestWeather({ latitude, longitude })//
            }, (error) => {
                console.log(error.code, error.message);
            }, { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 });
        else
            console.log("Permission denied");
    };

    const requestWeather = ({ latitude, longitude }: Location) => {
        api.get(`?lat=${latitude}&lon=${longitude}`).then(({ data: res }) => {
            setData(res);
        }).catch(err => {
            requestWeather({ latitude, longitude })
            console.warn(err)
        })
    }

    if (!data) return (
        <AnimatedLG
            exiting={FadeOut}
            colors={COLORS.GRADIENTS}
            style={styles.container}
        />
    )
    console.log(data);


    return (
        <AnimatedIB
            source={Img}
            fadeDuration={0}
            entering={FadeIn}
            style={styles.container}>
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    padding: 20,
                }}>
                <View style={styles.topInfoWrapper}>
                    <View>
                        <Text style={styles.city}>{data.name}</Text>
                        <Text style={styles.time}>{getFormatedDate()}</Text>
                    </View>
                    <View>
                        <Text style={styles.temparature}>
                            {`${kelvinToCelsius(data.main.temp)} \u2103`}
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.weatherType}>
                                {data.weather[0].description}
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        borderBottomColor: 'rgba(255,255,255,0.7)',
                        marginTop: 20,
                        borderBottomWidth: 1,
                    }}
                />
                <View style={styles.bottomInfoWrapper}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.infoText}>Vento</Text>
                        <Text style={[styles.infoText, { fontSize: 24 }]}>
                            {data.wind.speed}
                        </Text>
                        <Text style={styles.infoText}>km/h</Text>
                        <View style={styles.infoBar}>
                            <View
                                style={{
                                    width: data.wind.speed / 2,
                                    height: 5,
                                    backgroundColor: '#69F0AE',
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.infoText}>Chuva</Text>
                        <Text style={[styles.infoText, { fontSize: 24 }]}>
                            {data.main.pressure}
                        </Text>
                        <Text style={styles.infoText}>%</Text>
                        <View style={styles.infoBar}>
                            <View
                                style={{
                                    width: 20 / 2,
                                    height: 5,
                                    backgroundColor: '#F44336',
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.infoText}>Umidade</Text>
                        <Text style={[styles.infoText, { fontSize: 24 }]}>
                            {data.main.humidity}
                        </Text>
                        <Text style={styles.infoText}>%</Text>
                        <View style={styles.infoBar}>
                            <View
                                style={{
                                    width: data.main.humidity / 2,
                                    height: 5,
                                    backgroundColor: '#F44336',
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </AnimatedIB>
    )
}