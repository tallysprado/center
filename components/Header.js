import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createRequire } from 'module';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={style.header}>
        <Image source = {require('../assets/images/cart.png')} style = {styles.cart}></Image>
        <Text style = {styles.logo}>CENTER</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header:{
        height: 80,
        marginTop: 20,
        backgroundColor: '#fff',
        flexDirection: row,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderBottomWidth: 4,
        borderBottomColor: '#ccc'
    },
    cart: {
        width: 40,
        height: 40
    },
    logo: {
        fontSize: 20,
        marginLeft: 10,
        fontStyle: 'italic',
        color: '#292929'
    }   
});