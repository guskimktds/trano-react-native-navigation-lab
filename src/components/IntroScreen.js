import React, { PropTypes } from 'react';
// import {
//   View,
//   TouchableOpacity,
//   StatusBar,
//   StyleSheet
// } from 'react-native';
// import * as globalStyles from '../styles/global';
// import Title from './Title';
// import AppText from './AppText';

import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

// StatusBar.setBarStyle('light-content');

// const IntroScreen = ({ navigator, nextScene }) => (
//   <View style={[globalStyles.COMMON_STYLES.pageContainer, styles.container]}>
//     <TouchableOpacity
//       onPress={() => navigator.push(nextScene)}
//     >
//       <Title>React Native News Reader</Title>
//       <AppText>
//         Start Reading
//       </AppText>
//     </TouchableOpacity>
//   </View>
// );

class IntroScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Welcome',
  // };
  render() {
    // const {navigate} = this.props.navigation;
    return (
      // <Button
      //   title="Go to IntroScreen"
      //   onPress={() => navigate('IntroScreen')}
      // />
      <View>
        <Text>IntroScreen</Text>
      </View>
    );
  }
}

// IntroScreen.propTypes = {
//   //onPress: PropTypes.func.isRequired
//   navigator: PropTypes.shape({
//     push: PropTypes.func
//   }).isRequired,
//   nextScene: PropTypes.objectOf(PropTypes.any)
// };

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: IntroScreen
  }
});

export default createAppContainer(AppNavigator);
