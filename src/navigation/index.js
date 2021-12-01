import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Filter from '../screens/filter';
import { PRIMARY, WHITE } from '../styles/colors';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Filter"
        screenOptions={{

        }}
      >
        <Stack.Screen
          name="Filter"
          component={Filter}
          options={{
            title: 'Filter Results',
            headerStyle: {
              backgroundColor: PRIMARY,
            },
            headerTitleStyle: {
              color: WHITE,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
