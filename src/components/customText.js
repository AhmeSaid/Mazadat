import React from 'react';
import {
  WHITE,
} from '../styles/colors';
import { Text } from 'react-native';
import { scaleFontSize } from '../styles/mixins';

const chooseTextColor = (color) => {
  switch (color) {
    case 'white':
      return WHITE;
    default:
      break;
  }
};

const chooseFontFamily = (font) => {
  switch (font) {
    case 'extraBold':
      return '1000';
    case 'bold':
      return '900';
    case 'semiBold':
      return '800';
    case 'medium':
      return '600';
    case 'regular':
      return '400';

    default:
      break;
  }
};

const CustomText = ({
  text = 'none',
  color = 'white',
  size = 14,
  fontFamily = 'regular',
  style,
  num,
}) => {
  return (
    <Text
      numberOfLines={num}
      style={[
        {
          color: chooseTextColor(color),
          fontWeight: chooseFontFamily(fontFamily),
          fontSize: scaleFontSize(size),
        },
        style,
      ]}>
      {text}
    </Text>
  );
};

export default CustomText;
