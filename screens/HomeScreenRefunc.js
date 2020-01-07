import React, { useState, useEffect } from "react";

import { View, StyleSheet } from "react-native"

import {Header,ContentContainer} from '../components/'



const HomeScreen = () => {
    const [active, setActive] = useState("Todos os itens")

    useEffect( () => {
        Roboto_Regular: require("../assets/fonts/Roboto-Regular.ttf");

    }, [])

    return(
        <View style={styles.mainView}>
          <View style={styles.header}><Header /></View>
          <View style={styles.ContentContainer}><ContentContainer /></View>
        </View>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    header: {
        zIndex: 1,
        position: 'absolute',
        width: '100%'

    },
    contentContainer: {
        zIndex: 0,
        marginTop: 100,
        position: 'absolute',
        marginTop: 100,
    },

})