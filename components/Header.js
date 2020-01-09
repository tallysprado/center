import React, {useState} from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { DefaultTheme } from 'react-native-paper'


import {theme, mocks} from '../constants'






const Header = () => {
    
    const [active, setActive] = useState("Todos os itens")

    setTab = (tab) => {

        setActive(tab)
    }

    renderTab = (tab, active) => {
    
        const isActive = active === tab;
    
        return (
          <TouchableOpacity
            key={`tab-${tab}`}
            onPress={() => setTab(tab)}
            style={[styles.tab, isActive ? styles.active : null]}
          >
            <Text
              style={styles.menu1Text}
              medium
              gray={!isActive}
              secondary={isActive}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        );
      }

    const tabs = ["Todos os itens", "Para Elas", "Para Eles"];
    return(
        <View style={styles.menu1}>{tabs.map(tab => this.renderTab(tab, active))}</View>
    )
}



export default Header

const styles = StyleSheet.create({
    menu1: {
        zIndex: 6,
        paddingTop: 45,
        justifyContent: "space-around",
        backgroundColor: "#3c303e",
        flexDirection: "row",
        flexWrap: "wrap"
      },
      menu1Text: {
        fontFamily: "Roboto_Regular",
        fontSize: 14,
        color: "white",
        fontWeight: "300",
        textAlign: "auto"
      },
      tabs: {
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: theme.sizes.base,
        marginHorizontal: theme.sizes.base * 2
      },
      tab: {
        marginRight: theme.sizes.base * 2,
        paddingBottom: theme.sizes.base
      },
      active: {
        borderBottomColor: "#FB7F64",
        borderBottomWidth: 3
      },
})