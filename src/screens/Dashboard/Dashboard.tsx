import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { FadeOut, FadeIn } from 'react-native-reanimated';
import { Icon } from 'react-native-vector-icons/Icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { DashboardPropsType } from './Dashboard-types';
import { useDashboardConfig } from './Dashboard-controllers';

import IconButton from '../../components/IconButton';

import { COLORS } from '../../utils/colors/colors-consts';
import { getFormatedDate } from '../../utils/date/date-utils';
import { kelvinToCelsius } from '../../utils/temp/temp-utils';
import { useTime } from '../../contexts/Time';

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);
const AnimatedIB = Animated.createAnimatedComponent(ImageBackground);

export default ({ navigation }: DashboardPropsType) => {
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
      cityStyle,
      timeStyle,
      flexDirectionRowStyle,
      temparatureStyle,
      weatherTypeStyle,
      separatorStyle,
      bottomInfoWrapperStyle,
      infoTitleStyle,
      infoParagraphStyle,
      alignItemsCenterStyle,
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
            <Text style={cityStyle}>{data.name}</Text>
            <Text style={timeStyle}>{getFormatedDate()}</Text>
          </View>

          <View style={flexDirectionRowStyle}>
            <View>
              <Text style={temparatureStyle}>{`${kelvinToCelsius(data.main.temp)} \u2103`}</Text>
              <View style={flexDirectionRowStyle}>
                <IconButton
                  type={FontAwesome5 as typeof Icon}
                  name={iconName!}
                  size={'xSmall'}
                  color={'#FFF'}
                  onPress={updateWeather}
                  disabled
                />
                <Text style={weatherTypeStyle}>{data.weather[0].description}</Text>
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
            <Text style={infoTitleStyle}>Vento</Text>
            <Text style={infoParagraphStyle}>{data.wind.speed.toFixed(0)} km/h</Text>
          </View>
          <View style={alignItemsCenterStyle}>
            <Text style={infoTitleStyle}>Pressão</Text>
            <Text style={infoParagraphStyle}>{data.main.pressure} hpa</Text>
          </View>
          <View style={alignItemsCenterStyle}>
            <Text style={infoTitleStyle}>Umidade</Text>
            <Text style={infoParagraphStyle}>{data.main.humidity}%</Text>
          </View>
        </View>
      </View>
    </AnimatedIB>
  );
};
