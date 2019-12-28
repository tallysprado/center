import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import CustomImage from './CustomImage'

export default class ContentContainer extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <CustomImage style={styles.col1} source={require('../assets/images/plus1.png')} ></CustomImage>
            
                <CustomImage style={styles.col2} source={require('../assets/images/masc1.png')} ></CustomImage>

                <CustomImage style={styles.col1} source={require('../assets/images/plus2.png')} ></CustomImage>
            
                <CustomImage style={styles.col2} source={require('../assets/images/masc2.png')} ></CustomImage>
        
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingTop: 30,
        position: 'absolute',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
    },

})
