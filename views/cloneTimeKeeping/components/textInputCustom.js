import React, {Component} from 'react';
import {Image, View, TextInput} from 'react-native';
import commonStyles from './../styles/commonStyles';

class TextInputCustom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={commonStyles.horizontalViewCenter}>
        {this.props.contentLeft != null ? (
          <Image source={this.props.contentLeft} />
        ) : null}
        <TextInput
          placeholder={this.props.hint}
          style={{
            marginLeft: 8,
          }}
        />
      </View>
    );
  }
}
export default TextInputCustom;
