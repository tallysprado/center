import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Post from './Post';

export default class Feed extends Component {
    render() {
        return (
            <View style = { styles.contentContainer}>
                <View style={styles.col2}>
                <Post imageSource = {require('../assets/images/size2.png')}></Post>

                </View>
               
                <View style={styles.col1}>
                    <Post imageSource = {require('../assets/images/plus1.png')}></Post>

                </View>
                
                <View style={styles.col2}>
                    <Post imageSource = {require('../assets/images/plus2.png')}></Post>

                </View>
                
                <View style={styles.col2}>
                    <Post imageSource = {require('../assets/images/splash5.png')}></Post>

                </View>

                <View style={styles.col2}>
                    <Post imageSource = {require('../assets/images/splash2.png')}></Post>

                </View>
                <View style={styles.contentBanner}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,

    },
    col1: {
        flex: 1,
        padding: 5,
    },
    col2: {
        flex: 2,
        padding: 5,
    },
    contentBanner: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    }
});
