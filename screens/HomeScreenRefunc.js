import React, { useState, useEffect } from "react";

import { View, StyleSheet } from "react-native"

import { MyHeader, ContentContainer } from '../components/'



const HomeScreen = () => {

    return(
        <View style={styles.mainView}>
            <MyHeader /> 
            <ContentContainer />
        </View>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
})