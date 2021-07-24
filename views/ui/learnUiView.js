import React, {Component} from 'react';
import {
  Box,
  Container,
  Header,
  Footer,
  Center,
  Square,
  Circle,
  AppBar,
  Heading,
} from 'native-base';
import {View, Text, ScrollView, Button} from 'react-native';
import TimeKeepingComonents from './learnTimekeepingComponents';
import MyCollapsingLayout from './components/myCollapsingLayout';
import commonStyles from './styles/commonStyles';
import {Routes} from './routes/routes';
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorView from './navigatorView';
import InstaView from './cloneInstaUI/instaView';
import RefComponent from './ref/refComponent';
import AnimComponent from './anim/AnimComponent';

const Stack = createStackNavigator();

export default class LearnUIView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.NAVIGATOR}
          component={NavigatorView}></Stack.Screen>
        <Stack.Screen
          name={Routes.CLONE_INSTA}
          component={InstaView}></Stack.Screen>
        <Stack.Screen name={Routes.REF} component={RefComponent}></Stack.Screen>
        <Stack.Screen
          name={Routes.ANIM}
          component={AnimComponent}></Stack.Screen>
      </Stack.Navigator>
    );
    // return this.renderBasicComponent1();
    // return this.renderBasicComponent2();
    // return <TimeKeepingComonents></TimeKeepingComonents>;
    // return <MyCollapsingLayout></MyCollapsingLayout>;
  }

  renderBasicComponent1() {
    return (
      <Container bg="grey">
        <Heading size="sm">ABC</Heading>
        <AppBar>ABC</AppBar>
      </Container>
    );
  }

  renderBasicComponent2() {
    return (
      <ScrollView>
        {/* // bg <-> background
      // bgColor <-> backgroundColor */}
        <Box
          w={64}
          h={64}
          p={4}
          m={8}
          bg="grey"
          _text={{
            fontSize: 18,
            color: 'white',
          }}
          shadow={5}>
          Box
        </Box>

        <Center bg="red.100" w={100} h={100}>
          Center
        </Center>

        <Center mt={8}>
          <Square bg="purple.100" size={120}>
            Square
          </Square>
        </Center>

        <Center mt={8}>
          <Circle bg="orange.100" size={120} borderRadius={16}>
            rounded square
          </Circle>
        </Center>
      </ScrollView>
    );
  }
}
