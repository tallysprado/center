import React, { useState, useEffect } from "react";

import { View, StyleSheet } from "react-native"
//Atualizar o index porra
import { HeaderSelector, Menu } from '../components/'

import {Header} from 'react-navigation-stack'




const HomeScreen = ({ navigation }) => {
    return(
        <View style={styles.mainView}>
            <HeaderSelector navigation={ navigation }/>
        </View>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
})