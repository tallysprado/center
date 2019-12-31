import React, { useState, useEffect } from "react";

import { View, Animated } from "react-native"

import Header from '../components/Header'

const HomeScreen = () => {
    const [active, setActive] = useState("Todos os itens")

    useEffect( () => {
        Roboto_Regular: require("../assets/fonts/Roboto-Regular.ttf");

    }, [])

    return(
        <Header/>
    )
}

export default HomeScreen;