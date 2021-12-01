import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import CustomText from './customText';
import { SECONDARY } from '../styles/colors';
import { WhiteRightIcon } from '../assets/svgIcons';

const TagsContent = ({ data, onPress }) => {
  return (


    <View style={styles.tags}>
      {data.map((item, index) => {

        return (
          <TouchableOpacity
            onPress={() => {
              onPress(index)
            }}
            style={[styles.tagContainer, { backgroundColor: item.isActive ? SECONDARY : 'transparent' }]}
          >
            {item.isActive && <WhiteRightIcon style={styles.icon} />}
            <CustomText
              text={item.title}
              color="white"
              fontFamily="semiBold"
            />
          </TouchableOpacity>
        );
      })}
    </View>


  );
};

const styles = StyleSheet.create({
  tagContainer: {
    borderColor: SECONDARY,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 15,
    overflow: 'hidden',
    textAlignVertical: 'center',
    marginRight: 8,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12
  },
  icon: {
    marginRight: 5
  }
});

export default TagsContent;
