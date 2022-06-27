import React from 'react';
import { ImageBackground, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { FadeOut, FadeIn } from 'react-native-reanimated';
import { Icon } from 'react-native-vector-icons/Icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { DashboardProps } from './Dashboard-types';
import { useDashboardConfig } from './Dashboard-controllers';

import Label from '../../components/Label';
import IconButton from '../../components/IconButton';

import { COLORS } from '../../utils/colors/colors-consts';
import { getFormatedDate } from '../../utils/date/date-utils';
import { kelvinToCelsius } from '../../utils/temp/temp-utils';

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);
const AnimatedIB = Animated.createAnimatedComponent(ImageBackground);

export default ({ navigation }: DashboardProps) => {
  const {
    state: { isLoading, weather, img, iconName },
    methods: { updateWeather, handlePress },
    styles: {
      containerStyle,
      contentStyle,
      updateIconStyle,
      topInfoWrapperStyle,
      weatherTypeStyle,
      separatorStyle,
      bottomInfoWrapperStyle,
      flexDirectionRowStyle,
      alignItemsCenterStyle,
      fontBoldStyle,
    },
  } = useDashboardConfig({ navigation });

  if (!weather) return <AnimatedLG exiting={FadeOut} colors={COLORS.SPLASH_GRADIENTS} style={containerStyle} />;

  return (
    <AnimatedIB source={img!} fadeDuration={0} entering={FadeIn} style={containerStyle}>
      <View style={contentStyle}>
        <IconButton
          type={MaterialCommunityIcons}
          name={'cloud-sync'}
          loading={isLoading}
          activeOpacity={1}
          disabled={isLoading}
          style={updateIconStyle}
          onPress={updateWeather}
        />
        <View style={topInfoWrapperStyle}>
          <View>
            <Label size='xLarge' style={fontBoldStyle}>
              {weather?.name}
            </Label>
            <Label size='xSmall' style={fontBoldStyle}>
              {getFormatedDate()}
            </Label>
          </View>

          <View style={flexDirectionRowStyle}>
            <View>
              <Label size='display'>{`${kelvinToCelsius(weather?.main.temp)} \u2103`}</Label>
              <View style={flexDirectionRowStyle}>
                <IconButton type={FontAwesome5 as typeof Icon} name={iconName!} size={'xSmall'} disabled />
                <Label size={'large'} style={weatherTypeStyle}>
                  {weather?.weather[0].description}
                </Label>
              </View>
            </View>

            <IconButton
              type={MaterialCommunityIcons}
              name={'arrow-right-top'}
              color={'#FFF'}
              size={'regular'}
              activeOpacity={0.6}
              onPress={handlePress}
              style={containerStyle}
            />
          </View>
        </View>
        <View style={separatorStyle} />
        <View style={bottomInfoWrapperStyle}>
          <View style={alignItemsCenterStyle}>
            <Label size={'xSmall'} style={fontBoldStyle}>
              Vento
            </Label>
            <Label size='large' style={fontBoldStyle}>
              {weather?.wind.speed.toFixed(0)} km/h
            </Label>
          </View>
          <View style={alignItemsCenterStyle}>
            <Label size={'xSmall'} style={fontBoldStyle}>
              Pressão
            </Label>
            <Label size='large' style={fontBoldStyle}>
              {weather?.main.pressure} hpa
            </Label>
          </View>
          <View style={alignItemsCenterStyle}>
            <Label size={'xSmall'} style={fontBoldStyle}>
              Umidade
            </Label>
            <Label size='large' style={fontBoldStyle}>
              {weather?.main.humidity}%
            </Label>
          </View>
        </View>
      </View>
    </AnimatedIB>
  );
};
