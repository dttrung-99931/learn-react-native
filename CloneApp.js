import React, {useState} from 'react';
import {View, SafeAreaView, Button} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CoreComponentView from './views/core_components_view.js';
import HomeView from './views/home_view.js';

const Stack = createStackNavigator();
const navOption = {
  headerStyle: {
    backgroundColor: 'grey',
  },
};
const CloneApp = (): Node => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeView} options={navOption} />
        <Stack.Screen
          name="core-components"
          component={CoreComponentView}
          options={navOption}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default CloneApp;
