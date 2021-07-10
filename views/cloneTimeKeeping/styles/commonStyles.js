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
  textHint: {
    color: Colors.COLOR_LIGHT_GREY,
    fontSize: 16,
  },
  // view
  horizontalView: {
    flexDirection: 'row',
  },
  verticalView: {
    flexDirection: 'column',
  },
  // align
  alignItemsCenter: {
    alignItems: 'center',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};
export default commonStyles;
