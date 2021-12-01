import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import CustomText from './customText';
import { ArrowList } from '../assets/svgIcons';

const Expand = ({ isOpen, changeIsOpen, headerTitle, expoandContent }) => {

  return (


    <View style={styles.expandContainer}>

      <TouchableOpacity
        onPress={changeIsOpen}
        style={styles.expandHeader}>
        <CustomText
          text={headerTitle}
          size={18}
        />
        <ArrowList style={{ transform: isOpen ? [{ rotateX: '180deg' }] : [] }} />
      </TouchableOpacity>

      {isOpen && expoandContent}

    </View>


  );
};

const styles = StyleSheet.create({
  expandContainer: {
    width: '100%',
    paddingBottom: 20
  },
  expandHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
});

export default Expand;
