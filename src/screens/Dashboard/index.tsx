import React, { useEffect, useRef, useState } from 'react'
import { ImageBackground, PermissionsAndroid, Text, TouchableOpacity, View, BackHandler } from 'react-native'
import Geolocation from 'react-native-geolocation-service';
import api from '../../services/api';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { FadeOut, FadeIn } from "react-native-reanimated";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
import { COLORS } from '../../utils/colors/colors-consts';
import { getFormatedDate } from '../../utils/date/date-utils';
import { kelvinToCelsius } from '../../utils/temp/tempUtils';
import IconButton from '../../components/IconButton';

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);
const AnimatedIB = Animated.createAnimatedComponent(ImageBackground);

export default () => {
    const { top } = useSafeAreaInsets();

    const [isLoading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<Weather>()

    const Img = Rainy

    useEffect(() => {
        requestLocation()
    }, [])

    const requestLocation = async () => {
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
        api.get(`/weather?lat=${latitude}&lon=${longitude}`).then(({ data: res }) => {
            setData(res)
            setLoading(false)
        }).catch(err => {
            requestWeather({ latitude, longitude })
            console.warn(err)
        })
    }

    const updateWeather = (): void => {
        setLoading(true)

        // only for visual effects
        setTimeout(requestLocation, 800);
    }

    if (!data) return (
        <AnimatedLG
            exiting={FadeOut}
            colors={COLORS.GRADIENTS}
            style={styles.container}
        />
    )

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
                <IconButton
                    loading={isLoading}
                    type={MaterialCommunityIcons}
                    name={'cloud-sync'}
                    color={'#FFF'}
                    disabled={isLoading}
                    size={'small'}
                    underlayColor={'rgba(0,0,0,0.4)'}
                    style={{
                        top: top + 16,
                        right: 16,
                        position: 'absolute',
                        backgroundColor: 'rgba(0,0,0,0.2)',
                        borderRadius: 999,
                    }}
                    onPress={updateWeather}
                />
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
                            {data.wind.speed.toFixed(0)} km/h
                        </Text>

                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.infoText}>Pressão</Text>
                        <Text style={[styles.infoText, { fontSize: 24 }]}>
                            {data.main.pressure} hpa
                        </Text>

                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.infoText}>Umidade</Text>
                        <Text style={[styles.infoText, { fontSize: 24 }]}>
                            {data.main.humidity}%
                        </Text>

                    </View>
                </View>
            </View>
        </AnimatedIB>
    )
}