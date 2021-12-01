import { StyleSheet } from 'react-native';
import {
  WHITE,
  PRIMARY,
  WHITE_RGB,
  SECONDARY,
} from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: PRIMARY,
    paddingHorizontal: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  line: {
    height: 1,
    backgroundColor: WHITE_RGB(.5),
    width: '100%'
  },
  selection: {
    backgroundColor: WHITE,
    height: 5,
    borderRadius: 3
  },
  marker: {
    backgroundColor: PRIMARY,
    borderColor: WHITE,
    borderWidth: 2,
    width: 20,
    height: 20
  },
  lableContainer: {
    borderColor: SECONDARY,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  onMarkerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

export default styles;
