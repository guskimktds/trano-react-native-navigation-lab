import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
//import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class HomeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text>Home Screen</Text>
        <Button
          title="Go to DetailScreen"
          onPress={() => this.props.navigation.navigate('Detail')}
        />
    </View>
    );
  }
}

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   }
// });
//
// export default createAppContainer(AppNavigator);
