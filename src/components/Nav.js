import React from "react";
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import AnotherScreen from './AnotherScreen';

const Nav = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Detail: {
      screen: DetailScreen
    },
    Another: {
      screen: AnotherScreen
    },
  },
  {
    initialRouteName: "Home", HeaderMode: "none"
  }
);

export default createAppContainer(Nav);



//const Nav = createAppContainer(AppNavigator);
