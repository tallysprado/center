import React, { useState, useEffect } from "react";

import { View, StyleSheet } from "react-native"
//Atualizar o index porra
import { Header, Menu } from '../components/'




const HomeScreen = () => {

    return(
        <View style={styles.mainView}>
            <Header/>
              
            <Menu/>     
        </View>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
})