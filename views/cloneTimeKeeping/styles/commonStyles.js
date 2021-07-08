import {Colors} from './../values/colors';
import {StyleSheet} from 'react-native';

const commonStyles = {
  container: {
    height: '100%',
    width: '100%',
  },
  title: {
    color: Colors.COLOR_WHITE,
    fontSize: 20,
  },
  horizontalView: {
    flexDirection: 'row',
  },
  horizontalViewCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
};
export default commonStyles;
