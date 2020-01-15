import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {AppLoading} from 'expo'
import * as Font from 'expo-font'

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {createAppContainer} from 'react-navigation'

import {createBottomTabNavigator} from 'react-navigation-tabs'

import {createStackNavigator} from 'react-navigation-stack'

import HomeScreenRefunc from './screens/HomeScreenRefunc'
import {Shirts} from './components'

import { Provider } from "react-redux";
import Store from "./stores/Store";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreenRefunc,
    navigationOptions: {
      header: null,
    }
  },
  
},{headerMode: 'screen'})

const AppContainer = createAppContainer(AppNavigator);

const App = ()=> {
  
  const [fontLoaded, setFontLoaded] = useState(false)
  useEffect(async() =>{
         await Font.loadAsync({
          Roboto_Regular: require("./assets/fonts/Roboto-Regular.ttf"),
          Pacifico: require("./assets/fonts/Pacifico.ttf"),
          CaviarDreams: require("./assets/fonts/CaviarDreams.ttf"),
          Amatic_Bold: require("./assets/fonts/Amatic-Bold.ttf"),
          LemonJuice: require("./assets/fonts/LemonJuice.otf"),
        }); 
      setFontLoaded(true);
    }, []);
    
  if(!fontLoaded){
    return(
      <AppLoading></AppLoading>
    )
  }else{

  return( 
      <Provider store={Store}>
        <AppContainer></AppContainer>
      </Provider>
    
  )
}
}




export default App
//export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
