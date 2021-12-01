import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CustomText from './customText';
import { WHITE, SECONDARY } from '../styles/colors';
import CheckBox from '@react-native-community/checkbox';

const CheckBoxList = ({ brandData, onValueChange }) => {

  return (

    <FlatList
      data={brandData}
      renderItem={({ item, index }) => {
        return (
          <View style={styles.checkBoxContainer}>
            <CheckBox
              tintColors={{ true: WHITE, false: SECONDARY }}
              disabled={false}
              value={item.isActive}
              onValueChange={(newValue) => {
                onValueChange(newValue, index)
              }}
            />

            <CustomText
              text={item.title + ' (' + item.quantity + ')'}
              color="white"
              fontFamily="semiBold"
            />
          </View>
        )
      }}
    />

  );
};

const styles = StyleSheet.create({
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
});

export default CheckBoxList;
