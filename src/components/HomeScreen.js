import React, {Component} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
//import { createStackNavigator, createAppContainer } from 'react-navigation';
import Title from './Title';
import AppText from './AppText';

export default class HomeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View
        style={styles.container}
      >
        <View style={styles.topMenu}>
          <AppText>Home Screen</AppText>
            <Button
              title="Go to DetailScreen"
              onPress={() => this.props.navigation.navigate('Detail')}
            />
            <Button
              title="Go to AnotherScreen"
              onPress={() => this.props.navigation.navigate('Another')}
            />
        </View>

        <View style={styles.contents}>
          <Title>
              여기는 카풀운행정보목록 영역
          </Title>
        </View>
    </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  topMenu: {

  },
  contents: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
