import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomText from './customText';
import { WHITE, SECONDARY, PRIMARY } from '../styles/colors';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const Slider = ({ sliderLenth, min, max, onValuesChange, minResult, maxResult }) => {

  return (

    <>
      <MultiSlider
        isMarkersSeparated={true}
        unselectedStyle={[styles.selection, { backgroundColor: SECONDARY }]}
        selectedStyle={[styles.selection, { backgroundColor: WHITE }]}
        sliderLength={sliderLenth}
        markerStyle={styles.marker}
        values={[min, max]}
        min={min}
        max={max}
        enabledOne={true}
        enabledTwo={true}
        onValuesChange={(value) => { onValuesChange(value) }}
      />

      <View style={styles.lables}>
        <View
          style={styles.lableContainer}
        >
          <CustomText
            text={minResult}
            color="white"
            fontFamily="semiBold"
          />
        </View>

        <View
          style={styles.lableContainer}
        >
          <CustomText
            text={maxResult}
            color="white"
            fontFamily="semiBold"
          />
        </View>
      </View>
    </>

  );
};

const styles = StyleSheet.create({
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
  lables: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lableContainer: {
    borderColor: SECONDARY,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default Slider;
