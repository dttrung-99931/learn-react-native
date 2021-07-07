import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Button,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CoreComponentView from './views/core_components_view.js';
import HomeView from './views/home_view.js';
import CallApiView from './views/call_api_view.js';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabView1 from './views/TabView1';
import TabView2 from './views/TabView2';
import TabView3 from './views/TabView3';

const Tab = createBottomTabNavigator();
const CloneApp = (): Node => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Tab1"
          component={TabView1}
          options={{
            tabBarLabel: 'TAB 1',
            tabBarIcon: () => (
              <Image
                style={{
                  width: 24,
                  height: 24,
                }}
                source={require('./assets/icon.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Tab12"
          component={TabView2}
          options={{
            tabBarLabel: 'TAB 2',
            tabBarIcon: () => (
              <Image
                style={{
                  width: 24,
                  height: 24,
                }}
                source={require('./assets/icon.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Tab3"
          component={TabView3}
          options={{
            tabBarLabel: 'TAB 3',
            tabBarIcon: () => (
              <Image
                style={{
                  width: 24,
                  height: 24,
                }}
                source={require('./assets/icon.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default CloneApp;
