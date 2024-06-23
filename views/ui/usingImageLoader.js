import React, {Component} from 'react';
import {Constants} from './values/constants';
import {Text, View} from 'react-native';
import ImageLoader from './timeKeepingComponents/imageLoader';

export default class UsingImageLoader extends Component {
  render() {
    //   Error Fast image was not found
    return (
      <ImageLoader
        resizeModeType={'contain'}
        path="https://image-us.24h.com.vn/upload/2-2021/images/2021-04-22/anh-1-1619081214-688-width650height813.jpg"
      />
    );
  }
}
