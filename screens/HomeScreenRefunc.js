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
        <Header/>
        <ContentContainer/>
        </View>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    mainView: {
        flexWrap: 'wrap'
    },

})