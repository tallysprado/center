import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Banner extends Component {
    render() {
        return (
            <View>
                <Image source = {require('../assets/images/modelo1.png')} style = {styles.banner}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    banner: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }    
});

