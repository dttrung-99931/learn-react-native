import React, {Component} from 'react';
import {Text, Button, View} from 'react-native';

import {observer, inject} from 'mobx-react';

@inject('myStoreDecorator')
@observer
class MobxViewDecorator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{this.props.myStoreDecorator.countMsg}</Text>
        <Button
          title="Incresase...."
          onPress={() => {
            this.props.myStoreDecorator.insCount();
          }}></Button>
      </View>
    );
  }
}
export default MobxViewDecorator;
