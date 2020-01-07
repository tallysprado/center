import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

import {Icon} from 'react-native-elements'  

const ImageHeader = (props) => {
        const text = props.text
        return (
            <View style={styles.header}>
                <Image style={styles.icon} source={require('../assets/images/iconShop.jpg')}/> 
                <Text style={styles.text}>{text}</Text>
            </View>
        )
    
}

export default ImageHeader

const styles = StyleSheet.create({
    icon: {
        width: 5,
        height: 5,
        flex: 1,
        borderRadius: 3,
    },
    header: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 30,
        width: '100%',
        backgroundColor: 'white',
    },
    text: {
        fontFamily: 'Roboto_Regular',
    },
})
