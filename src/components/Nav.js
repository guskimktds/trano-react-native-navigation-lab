import React from "react";
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

const Nav = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Detail: {
      screen: DetailScreen
    }
  },
  {
    initialRouteName: "Home", HeaderMode: "none"
  }
);

export default createAppContainer(Nav);



//const Nav = createAppContainer(AppNavigator);
