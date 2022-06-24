import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, PermissionsAndroid, Text, TouchableOpacity, View, BackHandler, Platform } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Location {
  latitude: number;
  longitude: number;
}

type Weather = any;

import ScatteredCloudsNight from '../../../assets/day1.jpg';

import { styles } from './styles';

let Img;

export default () => {
  const { top, bottom } = useSafeAreaInsets();

  Img = ScatteredCloudsNight;

  return (
    <ImageBackground source={Img} fadeDuration={0} style={styles.container}>
      <View style={[styles.content, { paddingTop: top, paddingBottom: bottom }]}></View>
    </ImageBackground>
  );
};
