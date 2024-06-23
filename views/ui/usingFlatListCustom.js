import React, {Component} from 'react';
import FlatListCustom from './timeKeepingComponents/flatListCustom';
import {Fonts} from './values/fonts';
import {Constants} from './values/constants';
import {Text, View} from 'react-native';

export default class UsingFlatListCustom extends Component {
  render() {
    const data = this.generateData(50);
    return (
      <FlatListCustom
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={item => <Text>{item.value}</Text>}
        ListHeaderComponent={
          <Text style={{fontSize: Fonts.FONT_SIZE_X_LARGE}}>Header</Text>
        }
        onLoadMore={() => {
          alert('loadmore');
        }}
        style={{
          padding: Constants.PADDING_X_LARGE,
        }}
        // inverted={true}
      />
    );
  }

  generateData(size) {
    const data = [];
    for (let i = 0; i < size; i++) {
      data.push({
        key: i,
        value: `Item ${i}`,
      });
    }
    return data;
  }
}
