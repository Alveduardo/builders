import React from 'react';
import { ImageBackground, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { FadeOut, FadeIn } from 'react-native-reanimated';
import { Icon } from 'react-native-vector-icons/Icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { DashboardProps } from './Dashboard-types';
import { useDashboardConfig } from './Dashboard-controllers';

import IconButton from '../../components/IconButton';
import Label from '../../components/Label';

import { COLORS } from '../../utils/colors/colors-consts';
import { getFormatedDate } from '../../utils/date/date-utils';
import { kelvinToCelsius } from '../../utils/temp/temp-utils';
import { useTime } from '../../contexts/Time';

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);
const AnimatedIB = Animated.createAnimatedComponent(ImageBackground);

export default ({ navigation }: DashboardProps) => {
  const {
    state: { data, img, iconName },
  } = useTime();

  const {
    state: { isLoading },
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
  } = useDashboardConfig({
    navigation,
    data,
  });

  if (!data) return <AnimatedLG exiting={FadeOut} colors={COLORS.GRADIENTS} style={containerStyle} />;

  return (
    <AnimatedIB source={img!} fadeDuration={0} entering={FadeIn} style={containerStyle}>
      <View style={contentStyle}>
        <IconButton
          type={MaterialCommunityIcons}
          name={'cloud-sync'}
          color={'#FFF'}
          loading={isLoading}
          disabled={isLoading}
          underlayColor={'rgba(0,0,0,0.4)'}
          style={updateIconStyle}
          onPress={updateWeather}
        />
        <View style={topInfoWrapperStyle}>
          <View>
            <Label size='xLarge' style={fontBoldStyle}>{data.name}</Label>
            <Label size='small' style={fontBoldStyle}>{getFormatedDate()}</Label>
          </View>

          <View style={flexDirectionRowStyle}>
            <View>
              <Label size='display'>
                {`${kelvinToCelsius(data.main.temp)} \u2103`}
              </Label>
              <View style={flexDirectionRowStyle}>
                <IconButton
                  type={FontAwesome5 as typeof Icon}
                  name={iconName!}
                  size={'xSmall'}
                  color={'#FFF'}
                  onPress={updateWeather}
                  disabled
                />
                <Label size={'large'} style={weatherTypeStyle}>{data.weather[0].description}</Label>
              </View>
            </View>

            <IconButton
              type={MaterialCommunityIcons}
              name={'arrow-right-top'}
              color={'#FFF'}
              size={'regular'}
              onPress={handlePress}
              underlayColor={'transparent'}
              style={containerStyle}
            />
          </View>
        </View>
        <View style={separatorStyle} />
        <View style={bottomInfoWrapperStyle}>
          <View style={alignItemsCenterStyle}>
            <Label size={'small'} style={fontBoldStyle}>Vento</Label>
            <Label size='large' style={fontBoldStyle}>{data.wind.speed.toFixed(0)} km/h</Label>
          </View>
          <View style={alignItemsCenterStyle}>
            <Label size={'small'} style={fontBoldStyle}>Pressão</Label>
            <Label size='large' style={fontBoldStyle}>{data.main.pressure} hpa</Label>
          </View>
          <View style={alignItemsCenterStyle}>
            <Label size={'small'} style={fontBoldStyle}>Umidade</Label>
            <Label size='large' style={fontBoldStyle}>{data.main.humidity}%</Label>
          </View>
        </View>
      </View>
    </AnimatedIB>
  );
};
