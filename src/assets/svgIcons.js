import * as React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { WHITE } from '../styles/colors';

export const ArrowList = (props) => {
  return (
    <Svg
      fill="none"
      height={24}
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M12.707 15.707a1 1 0 01-1.414 0l-6-6a1 1 0 011.414-1.414L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6z"
        fill={WHITE}
        fillRule="evenodd"
      />
    </Svg>
  );
};

export const WhiteRightIcon = (props) => {
  return (
    <Svg width={13} height={11} viewBox="0 0 13 11" fill="none" {...props}>
      <Path
        d="M5.885 9.904a1.51 1.51 0 01-2.135 0L.442 6.596A1.51 1.51 0 012.577 4.46l1.97 1.97c.15.15.39.15.54 0l5.336-5.336a1.51 1.51 0 012.135 2.135L5.885 9.904z"
        fill="#fff"
      />
    </Svg>
  );
};