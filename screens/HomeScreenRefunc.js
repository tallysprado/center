import React, { useState, useEffect } from "react";

import { View, StyleSheet } from "react-native"
//Atualizar o index porra
import { MyHeader, ContentContainer, Tab } from '../components/'




const HomeScreen = () => {

    return(
        <View style={styles.mainView}>
            <Tab></Tab>
        </View>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
})