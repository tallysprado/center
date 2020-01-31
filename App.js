import React, {useState, useEffect} from 'react'


import { Text, View, SafeAreaView, StyleSheet, ScrollView, Dimensions, Image , TouchableOpacity, Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems, DrawerNavigator} from 'react-navigation-drawer'

import {AppLoading} from 'expo'
import * as Font from 'expo-font'

import {LinearGradient} from 'react-native-linear-gradient'

import Icon from 'react-native-vector-icons/FontAwesome5'



import {createStackNavigator} from 'react-navigation-stack'

import HomeScreenRefunc from './screens/HomeScreenRefunc'
import {Shirts} from './components'

import { Provider } from "react-redux";
import Store from "./stores/Store";






const { width } = Dimensions.get("window");

const CenterLogo = () => {
  return(
      <Image
          source={require('./assets/centerlogo.png')}
          style={styles.image}
      />
  )
}

const CustomDrawerNavigation = (props) => {
  
  
  return (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 250, backgroundColor: '#4cbdd7', opacity: 0.9 }}>
      <View style={{ height: 200, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('./assets/images/explore_1.png')} style={{ height: 150, width: 150, borderRadius: 60 }} />
      </View>

      <View style={{ height: 50, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
        <Text>John Cena</Text>
      </View>
    </View>
    
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  
    <View style={{ alignItems: "center", bottom: 20 }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column', marginRight: 15 }}>
          <Icon name="cog" style={{ fontSize: 24, padding: 10, }} onPress={() => console.log("Tıkladın")} />
        </View>
       
        <View style={{ flexDirection: 'column' }}>
          <Icon name="info-circle" style={{ fontSize: 24, padding: 10, }} onPress={() => console.log("Tıkladın")} />
        </View>
      </View>
    </View>

  </SafeAreaView>
  );
}



const Drawer = createDrawerNavigator({
  Home: {
    screen: HomeScreenRefunc,
    navigationOptions: {
      title: 'Homepage',
    }
  }},
  { 
    headerMode: 'screen',
    drawerPosition: 'left',
    contentComponent: CustomDrawerNavigation,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: (width / 3) * 2
  });

const active = false

const navigationOptionsHeader = ({ navigation }) => {
  return {
    headerTitle: <CenterLogo/>,
    
    headerRight: (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon
              style={styles.icon}
              name="fire-alt"
              size={32}
              color="#fff"
          />
      </TouchableOpacity>
    ),

    
    headerLeft: (
      
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon
              style={styles.icon}
              name="tshirt"
              size={32}
              color="#fff"
          />
      </TouchableOpacity>
    ),
    headerStyle:{
      backgroundColor: '#4cbdd7',
      top: 50,
    },
  };
};


const AppNavigator = createStackNavigator({
  Home: {
    screen: Drawer,
    navigationOptions: navigationOptionsHeader,
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
  icon: {
    paddingLeft: 10,
    paddingRight: 10,
  }
});
