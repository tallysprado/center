import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { ACTIVE_MALE } from "../stores/GenderReducer"
import { Header, LinearGradient, Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {StyleSheet, Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'



const LeftButton = () => {
    return(
        <TouchableOpacity>
            <Icon
                style={styles.icon}
                name="venus-mars"
                size={32}
                color="#fff"
            />
        </TouchableOpacity>
    )
}

const RightButton = () => {
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
    const gender = useSelector(state => state.gender);
    const dispatch = useDispatch();
    dispatch({ type: ACTIVE_MALE })
    return(
        <Header 
            
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
        resizeMode: 'contain'
    }
})


export default HeaderSelector