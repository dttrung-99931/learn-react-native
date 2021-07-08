import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import BaseView from './../base/baseView';
import {Colors} from './../values/colors';
import commonStyles from './../styles/commonStyles';
import {StyleSheet} from 'react-native';
import ic_logo from './../images/ic_logo.png';
import ic_account_grey from './../images/ic_account_grey.png';
import ic_key_grey from './../images/ic_key_grey.png';
import TextInputCustom from './../components/textInputCustom';
import {Constants} from './../values/constants';
import Hr from './../components/hr';

class LoginView extends BaseView {
  render() {
    return (
      <View style={commonStyles.container}>
        {this.renderHeader()}
        {this.renderBody()}
      </View>
    );
  }

  renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <Text style={commonStyles.title}>Đăng nhập</Text>
      </View>
    );
  }

  renderBody() {
    return (
      <View>
        <Image style={styles.logoImage} source={ic_logo} />
        <View style={styles.textInputContainer}>
          <TextInputCustom contentLeft={ic_account_grey} hint="Tên đăng nhập" />
          <Hr />
          <TextInputCustom contentLeft={ic_key_grey} hint="Mật khẩu" />
        </View>
      </View>
    );
  }
}

export default LoginView;

const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: Colors.COLOR_WHITE,
    borderRadius: 8,
    margin: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  logoImage: {
    alignSelf: 'center',
    marginVertical: Constants.MARGIN_X_LARGE,
  },
  headerContainer: {
    backgroundColor: Colors.COLOR_PRIMARY,
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
