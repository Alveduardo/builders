import React from 'react';

import { HEADER } from './Header-consts';
import { useHeaderConfig } from './Header-controllers';

import Label from '../../Label';

const Header = ({ title = '' }) => {
  const {
    styles: { labelStyle },
  } = useHeaderConfig();

  return (
    <Label testID={HEADER.TEST_ID.LABEL} size='regular' style={labelStyle}>
      {title}
    </Label>
  );
};

export default Header;
