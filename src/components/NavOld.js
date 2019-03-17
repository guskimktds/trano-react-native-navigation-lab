import React, { Component } from 'react';
import {
  Navigator,
  TouchableOpacity,
  StyleSheet,
  View,
  Text
} from 'react-native';

import HomeScreen from './HomeScreen';
import IntroScreen from './IntroScreen';

// import Title from './Title';
// import SmallText from './SmallText';
//
// import * as globalStyles from '../styles/global';
//
const HOME_ROUTE = {
  title: 'RNNYT',
  component: HomeScreen
};

const INTRO_ROUTE = {
  title: 'Welcome',
  component: IntroScreen,
  props: {
    nextScene: HOME_ROUTE
  }
};

export default class Nav extends Component {

  renderScene(route, navigator) {
    if(route === INTRO_ROUTE) {
      return (
        <IntroScreen
          onPress={() => navigator.push(HOME_ROUTE)}
        />
      );
    }
    return <HomeScreen />;
    // return (
    //   <route.components
    //     {route.props}
    //     navigator={navigator}
    //   />
    // );
  }

  render() {
    return (
      <Navigator
        initialRoute={INTRO_ROUTE}
        renderScene={this.renderScene}
      />
      // <View>
      //   <Text>gusgus</Text>
      //   <HomeScreen />
      // </View>
    );
  }
}
