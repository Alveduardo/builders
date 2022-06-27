import React, { memo } from 'react';
import { View } from 'react-native';

import Label from '../../Label';
import IconButton from '../../IconButton';
import TempIndicator from '../../TempIndicator';

import { Icon } from 'react-native-vector-icons/Icon';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { ITEM } from './Item-consts';
import { ItemProps } from './Item-types';
import { useItemConfig } from './Item-controllers';

import { areEqualListProps } from '../../../utils';

const Item = memo(({ item, index }: ItemProps): JSX.Element => {
  const {
    state: { hour, iconName },
    styles: { containerStyle, iconStyle },
  } = useItemConfig({ item });

  return (
    <View testID={ITEM.TEST_ID.CONTAINER} style={containerStyle}>
      <Label testID={ITEM.TEST_ID.LABEL} size='xSmall'>
        {hour}
      </Label>
      <IconButton
        testID={ITEM.TEST_ID.ICON_BUTTON}
        type={FontAwesome5 as typeof Icon}
        name={iconName}
        size={'xxxSmall'}
        style={iconStyle}
        disabled
      />
      <TempIndicator
        testID={ITEM.TEST_ID.TEMP_INDICATOR}
        min={Math.round(item.main.temp_min)}
        max={Math.round(item.main.temp_max)}
      />
    </View>
  );
}, areEqualListProps);

export default Item;
