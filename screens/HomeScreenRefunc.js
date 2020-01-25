import React, { useState, useEffect } from "react";

import { View, StyleSheet, Text } from "react-native"
//Atualizar o index porra
import { HeaderSelector, Menu } from '../components/'


import {OffCanvas3D} from 'react-native-off-canvas-menu'

import Icon from 'react-native-vector-icons/FontAwesome5'

import ReactNativeTooltipMenu from 'react-native-tooltip-menu'


const MascButtom = () => {
    return(
        <Icon
                style={styles.icon}
                name="mars"
                size={36}
                color="#4cbdd7"
            />
    )
}

const FemButtom = () => {
    return(
        <Icon
                style={styles.icon}
                name="venus"
                size={36}
                color="#4cbdd7"
            />
    )
}


const GenderButton = ({navigator}) => {
    
    return(
    <ReactNativeTooltipMenu
        
        widthType={'auto'}
        
        labelContainerStyle={styles.labelContainerStyle}
        buttonComponent={
            <View
              style={{
                backgroundColor: '#4cbdd7',
                padding: 10,
                borderRadius: 25
              }}
            >
              <Icon
                style={styles.icon}
                name="venus-mars"
                size={36}
                color="#fff"
            />
            </View>
          }
          items={[
            {
              label: (MascButtom),
              onPress: () => this.setState({ counterItem1: this.state.counterItem1 + 1 })
            },
            {
              label: (FemButtom),
              onPress: () => this.setState({ counterItem2: this.state.counterItem2 + 1 }),
            },
        ]}
    />
    )
}



const HomeScreen = ({ navigation }) => {

    const [menuOpen, setMenuOpen] = useState(false)

    handleMenu = () =>{
        setMenuOpen(!menuOpen)
    }

    return(

        <View style={styles.mainView}>
            
            
            <GenderButton/>


        </View>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    labelContainerStyle: {
        
    }
})