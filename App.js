import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {AppLoading} from 'expo'
import * as Font from 'expo-font'


import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import HomeScreen from './screens/HomeScreen'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },

  
},{headerMode: 'screen'})

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  state = {
    fontLoaded: false
  };


  async componentDidMount() {
    try {
        await Font.loadAsync({
        Roboto_Regular: require("./assets/fonts/Roboto-Regular.ttf"),
      });
      this.setState({ fontLoaded: true });
    }catch(error){
      console.log('error loading fonts', error);

    }
  }


  render() {
    if (!this.state.fontLoaded) {


      return <AppLoading />;


    }
    return (
      <AppContainer></AppContainer>
    );
    
    }
}


export default App;

//export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
