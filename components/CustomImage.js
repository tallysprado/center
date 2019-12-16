import React, { Component } from 'react'
import { Text, View , Image, ImageBackground,StyleSheet} from 'react-native'

import ImageOverlay from '../components/ImageOverlay';


export default class CustomImage extends Component {
    render() {
        return (
            <ImageBackground source={this.props.imageSource} style={styles.image}>
                <ImageOverlay>
                    header={this.props.header}
                    paragraph={this.props.paragraph}
                </ImageOverlay>                
            </ImageBackground>
        )
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