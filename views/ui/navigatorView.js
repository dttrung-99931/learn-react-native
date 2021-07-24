import React, {Component} from 'react';
import {View, Button} from 'react-native';
import commonStyles from './styles/commonStyles';
import {Routes} from './routes/routes';

export default class NavigatorView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[commonStyles.viewCenterVertical]}>
        <Button
          title={'Clone Insta UI'}
          onPress={() =>
            this.props.navigation.navigate(Routes.CLONE_INSTA)
          }></Button>
        <View style={{height: 16}}></View>
        <Button
          color={'purple'}
          title={'Using ref'}
          onPress={() => this.props.navigation.navigate(Routes.REF)}></Button>
        <View style={{height: 16}}></View>
        <Button
          title={'Anim'}
          onPress={() => this.props.navigation.navigate(Routes.ANIM)}></Button>
      </View>
    );
  }
}
