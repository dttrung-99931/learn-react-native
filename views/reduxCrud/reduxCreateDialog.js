import React, {Component} from 'react';
import {Text, View, Modal} from 'react-native';

class CreateDialog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Modal
          style={{
            margin: 16,
          }}>
          <Text>ABC</Text>
        </Modal>
      </View>
    );
  }
}

export default CreateDialog;
