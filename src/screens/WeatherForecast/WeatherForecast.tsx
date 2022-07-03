import React from 'react';
import { ImageBackground, ImageURISource, ScrollView, View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

import { WeatherForecastProps } from './WeatherForecast-types';
import { useWeatherForecastConfig } from './WeatherForecast-controllers';

import Label from '../../components/Label';
import IconButton from '../../components/IconButton';
import { ItemT } from '../../components/List/Item/Item-types';
import { Header as ListHeaderComponent, Item } from '../../components/List';

import { kelvinToCelsius } from '../../utils/temp/temp-utils';
import { getDateFromUnix } from '../../utils/date/date-utils';

export default ({ navigation }: WeatherForecastProps) => {
  const {
    state: { weather, forecast, img },
    methods: { goBack },
    styles: {
      containerStyle,
      containerContentStyle,
      goBackIconStyle,
      feelsLikeTitleStyle,
      tempMaxMinStyle,
      containerListStyle,
      containerBottomStyle,
      containerCardStyle,
      containerTitleCardStyle,
      sunriseContentStyle,
      marginRightSmall,
      marginRightRegular,
      marginBottomDisplay,
      textAlignCenter,
    },
  } = useWeatherForecastConfig({ navigation });

  return (
    <ImageBackground source={img!} defaultSource={img as ImageURISource} fadeDuration={0} style={containerStyle}>
      <IconButton type={Ionicons} name={'arrow-back'} activeOpacity={0.6} style={goBackIconStyle} onPress={goBack} />
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
        bounces={false}
        style={containerContentStyle}
        contentContainerStyle={containerContentStyle}
        fadingEdgeLength={16}
        showsVerticalScrollIndicator={false}
      >
        <View style={containerListStyle}>
          <ListHeaderComponent title={'Previsão horária'} />

          {forecast?.list.map((item: ItemT, index: number) => {
            return <Item {...{ key: index, item, index }} />;
          })}
        </View>

        <View style={containerBottomStyle}>
          <View style={containerCardStyle}>
            <View style={containerTitleCardStyle}>
              <IconButton size={'xxxSmall'} style={marginRightSmall} type={AntDesign} name={'eye'} disabled />
              <Label size={'small'}>Visibilidade</Label>
            </View>

            <Label style={marginBottomDisplay} size='xLarge'>
              {weather?.visibility / 1000} km
            </Label>

            <Label size='xxSmall'>Distância que os objetos podem ser observados.</Label>
          </View>
          <View style={containerCardStyle}>
            <View style={containerTitleCardStyle}>
              <IconButton size={'xxxSmall'} style={marginRightSmall} type={Fontisto} name={'day-sunny'} disabled />
              <Label size={'small'}>Nascer do sol</Label>
            </View>

            <View style={sunriseContentStyle}>
              <IconButton size={'xSmall'} style={marginRightRegular} type={Feather} name={'sunrise'} disabled />
              <Label size={'large'}>{getDateFromUnix(weather?.sys.sunrise)}</Label>
            </View>
            <View style={sunriseContentStyle}>
              <IconButton size={'xSmall'} style={marginRightRegular} type={Feather} name={'sunset'} disabled />
              <Label size={'large'}>{getDateFromUnix(weather?.sys.sunset)}</Label>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
