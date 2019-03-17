import React, { Component } from 'react';
import {
  ToolbarAndroid,
  Text,
  View
} from 'react-native';

import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

//import ViewPager from 'react-native-viewpager';
//import NewsFeed from './NewsFeed';
import * as globalStyles from '../styles/global';

class HomeScreen extends Component {

  constructor(props) {
      super(props);
      this.state = {
        tab: 'newsFeed'
      };
  }

  render() {
    return (
      <View>
        <Text>NewsFeed</Text>
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);
