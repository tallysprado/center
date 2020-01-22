import React, {useState} from 'react'
import {StyleSheet, Image, Animated, View} from 'react-native'

import { useSelector, useDispatch } from "react-redux";
import { ACTIVE_MALE } from "../stores/GenderReducer"
import { Header, LinearGradient, Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';

import ReactNativeTooltipMenu from 'react-native-tooltip-menu';


import Icon from 'react-native-vector-icons/FontAwesome5'
import {DrawerNavigator, DrawerItem} from 'react-navigation'
import {ACTIVE_VIEW} from '../stores/GenderReducer'


const active = new Animated.Value(0)

const GenderView = () =>{
    
    
    return(
        <View style={styles.genderContainer}>
            
           
        </View>
        
    )
}



const RightButton = () => {
    const [active, setActive] = useState(false)
    const y = new Animated.Value(0)
    
    //const active = useSelector(state => state.active);
    //const dispatch = useDispatch();
    //dispatch({ type: ACTIVE_VIEW })

    
    return(
        <TouchableOpacity onPress={()=>{
            
        }}
        >
            <Icon
                style={styles.icon}
                name="cog"
                size={32}
                color="#fff"
                
            />

            
            
            
        </TouchableOpacity>
    )
}

const LeftButton = () => {
    return(
        <TouchableOpacity>
            <Icon
                style={styles.icon}
                name="tshirt"
                size={32}
                color="#fff"
            />
        </TouchableOpacity>
    )
}

const CenterLogo = () => {
    return(
        <Image
            source={require('../assets/centerlogo.png')}
            style={styles.image}
        />
    )
}


const HeaderSelector = ({ navigation }) => {
    
    return(
        <Header 
            statusBarProps = {{
                headerBackground: (
                <LinearGradient
                colors={['#4cbdd7', '#3378C3']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                style={{ flex: 1 }}
                />
                )
            }}
            containerStyle = {styles.header}
            leftComponent={<LeftButton/>}
            centerComponent={<CenterLogo/>}
            rightComponent={<RightButton/>}
            placement="center"
        />
    )
}

HeaderSelector.navigationOptions = {
    title: 'Home',
    
    headerBackground: (
        <LinearGradient
          colors={['#4cbdd7', '#3378C3']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={{ flex: 1 }}
        />
    ),
    

};

const styles = StyleSheet.create({
    header: {
        paddingTop: 40,
        height: 80,

    },
    icon: {
        paddingBottom: 50,

    },
    image: {
        height: 80,
        width: 80,
        resizeMode: 'contain',
    }, 
    animated: {
        
    },  
    genderContainer: {
        width: 20,
        height: 50,
        flexDirection: 'column',
        backgroundColor: "#000",

        
    }
})


export default HeaderSelector