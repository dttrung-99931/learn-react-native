import React, {useState} from 'react';
import {StatusBar, Text, SafeAreaView, Button, View} from 'react-native';
import LoginView from './cloneTimeKeeping/login/loginView';
import {Colors} from './cloneTimeKeeping/values/colors';
import {Provider} from 'react-redux';
import {store} from './cloneTimeKeeping/store/store';

export default TabView2 = (): Node => {
  return (
    <Provider store={store}>
      <View>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.COLOR_PRIMARY}
        />
        <LoginView></LoginView>
      </View>
    </Provider>
  );
};
