import React, {Component} from 'react';
import {
  CoordinatorLayout,
  AppBarLayout,
  CollapsingToolbarLayout,
  CollapsingParallax,
} from 'react-native-collapsing-toolbar';
import {View, Text} from 'react-native';

// Nested scroll view not working with react native 064
// import NestedScrollView from 'react-native-nested-scroll-view';

export default class MyCollapsingLayout extends Component {
  render() {
    const fakeViews = [];
    for (let i = 0; i < 10; i++) {
      fakeViews.push(<Text>ABC</Text>);
    }

    return (
      <CoordinatorLayout>
        <AppBarLayout
          style={{
            height: 200,
          }}>
          <CollapsingToolbarLayout>
            <CollapsingParallax>
              <View>
                <Text>Collapsing tool bar</Text>
              </View>
            </CollapsingParallax>
          </CollapsingToolbarLayout>
        </AppBarLayout>
        {/* <NestedScrollView>
          {fakeViews}
        </NestedScrollView> */}
      </CoordinatorLayout>
    );
  }
}
