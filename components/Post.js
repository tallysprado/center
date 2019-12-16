import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Post extends Component {
    render() {
        return (
            <View>
                <Image source = {this.props.imageSource} style = {styles.image}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    }    
});

