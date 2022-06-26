import React from 'react';
import { ImageBackground, ImageURISource, ScrollView, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

import { WeatherForecastProps } from './WeatherForecast-types';
import { useWeatherForecastConfig } from './WeatherForecast-controllers';
import IconButton from '../../components/IconButton';
import Label from '../../components/Label';
import { Item } from '../../components/List';
import { kelvinToCelsius } from '../../utils/temp/temp-utils';
import { ItemT } from '../../components/List/Item/Item';

export default ({ navigation }: WeatherForecastProps) => {
  const {
    state: { weather, forecast, img },
    methods: { goBack },
    styles: {
      containerStyle,
      contentStyle,
      goBackIconStyle,
      feelsLikeTitleStyle,
      tempMaxMinStyle,
      forecastLabelStyle,
      containerListStyle,
      containerBottomStyle,
      containerCardStyle,
      containerTitleCardStyle,
      textAlignCenter,
      borderRounded,
    },
  } = useWeatherForecastConfig({ navigation });

  return (
    <ImageBackground source={img!} defaultSource={img as ImageURISource} fadeDuration={0} style={containerStyle}>
      <IconButton type={Ionicons} name={'arrow-back'} style={goBackIconStyle} onPress={goBack} />
      <Label size='large' style={feelsLikeTitleStyle}>
        Sensação
      </Label>

      <Label size='xxLarge' style={textAlignCenter}>
        {`${kelvinToCelsius(weather?.main.feels_like!)} \u2103`}
      </Label>

      <Label size='regular' style={tempMaxMinStyle}>
        Max.:{kelvinToCelsius(weather?.main.temp_max)} Min.:{kelvinToCelsius(weather?.main.temp_min)}
      </Label>

      <ScrollView
        style={borderRounded}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={contentStyle}
      >
        <View style={containerListStyle}>
          <Label size='regular' style={forecastLabelStyle}>
            Previsão horária
          </Label>

          {forecast?.list.map((item: ItemT, index: number) => {
            return <Item {...{ key: index, item, index }} />;
          })}
        </View>

        <View style={containerBottomStyle}>
          <View style={containerCardStyle}>
            <View style={containerTitleCardStyle}>
              <IconButton size={'xxxSmall'} style={{ marginRight: 4 }} type={AntDesign} name={'eye'} disabled />
              <Label size={'small'}>Visibilidade</Label>
            </View>

            <Label style={{ marginBottom: 'auto' }} size='xLarge'>
              {weather?.visibility / 1000} km
            </Label>

            <Label size='xxSmall'>Distância que os objetos podem ser observados.</Label>
          </View>
          <View style={containerCardStyle}>
            <View style={containerTitleCardStyle}>
              <IconButton size={'xxxSmall'} style={{ marginRight: 6 }} type={Fontisto} name={'day-sunny'} disabled />
              <Label size={'small'}>Nascer do sol</Label>
            </View>

            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
              <IconButton size={'xSmall'} style={{ marginRight: 6 }} type={Feather} name={'sunrise'} disabled />
              <Label size={'large'}>{weather?.visibility / 1000}</Label>
            </View>
            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
              <IconButton size={'xSmall'} style={{ marginRight: 6 }} type={Feather} name={'sunset'} disabled />
              <Label size={'large'}>{weather?.visibility / 1000}</Label>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
