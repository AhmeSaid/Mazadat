import {Dimensions, PixelRatio} from 'react-native';
import {WHITE_RGB} from './colors';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

const guidelindeBaseWidth = 375;
const guidelindeBaseHeight = 812;

export const scaleWidthSize = (size) =>
  (WINDOW_WIDTH / guidelindeBaseWidth) * size;
export const scaleHeightSize = (size) =>
  (WINDOW_HEIGHT / guidelindeBaseHeight) * size;

const scale = WINDOW_WIDTH / guidelindeBaseWidth;

export function scaleFontSize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export function boxShadow(
  color = WHITE_RGB(0.06),
  offset = {height: 2, width: 2},
  radius = 20,
  opacity = 0.2,
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}
