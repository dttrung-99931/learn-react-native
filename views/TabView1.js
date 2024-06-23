import React, {useState} from 'react';
import {View, SafeAreaView, Button} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CoreComponentView from './core_components_view.js';
import HomeView from './home_view.js';
import CallApiView from './call_api_view.js';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MobxViewDecorator from './mobx_view_decorator';
import MobxView from './mobx_view';
import {Provider as MobxProvider} from 'mobx-react';
import {Provider as ReduxProvider} from 'react-redux';
import MyStore from './MyStore';
import MyStoreDecorator from './MyStoreDecorator';
import ReduxView from './redux/reduxView';
import ReduxCrudView from './reduxCrud/reduxCrudView';
import store from './redux/reduxStore';
import {crudStore} from './reduxCrud/reduxCrudStore';
import CreateDialog from './reduxCrud/reduxCreateDialog';

const Stack = createStackNavigator();
const navOption = {
  headerStyle: {
    backgroundColor: 'grey',
  },
  title: 'Learn react native',
};
const myStore = new MyStore();
const myStoreDecorator = new MyStoreDecorator();
const TabView1 = (): Node => {
  return (
    // <MobxProvider myStore={myStore} myStoreDecorator={myStoreDecorator}>
    // <ReduxProvider store={store}>
    <ReduxProvider store={crudStore}>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeView} options={navOption} />
        <Stack.Screen
          name="core-components"
          component={CoreComponentView}
          options={navOption}
        />
        <Stack.Screen
          name="call-api"
          component={CallApiView}
          options={navOption}
        />
        <Stack.Screen
          name="mobx"
          component={MobxViewDecorator}
          options={navOption}
        />
        <Stack.Screen name="redux" component={ReduxView} options={navOption} />
        <Stack.Screen
          name="reduxCrud"
          component={ReduxCrudView}
          options={navOption}
        />
        <Stack.Screen name="reduxCrud/create" component={CreateDialog} />
      </Stack.Navigator>
    </ReduxProvider>
    // </MobxProvider>
  );
};
export default TabView1;
