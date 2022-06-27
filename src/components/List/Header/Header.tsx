import React from 'react';
import Label from '../../Label';
import { HEADER } from './Header-consts';
import { useHeaderConfig } from './Header-controllers';

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
