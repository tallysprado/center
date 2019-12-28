import React, { Component } from 'react'
import { Text, View , Image, ImageBackground,StyleSheet} from 'react-native'


export default class CustomImage extends React.Component {
    render() {
        return (
            <ImageBackground source={this.props.source} style={styles.image}>
                               
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    }
});