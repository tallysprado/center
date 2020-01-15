import React, {useState} from 'react'
import {StyleSheet, View, Text, TouchableOpacity, ScrollView} from 'react-native'
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

    const tabs = ["Blusas", "Calças", "Sapatos", "Moletons", "Boné", "Chapéu"];
    return(
        <View style={{flex: 0.125}}>
          <ScrollView horizontal={true} bounces={false} showsHorizontalScrollIndicator={false}>
            <View style={styles.menu1}>{tabs.map(tab => this.renderTab(tab, active))}</View>
          </ScrollView>
        </View>
    )
}


export default Header

const styles = StyleSheet.create({
    menu1: {
        zIndex: 6,
        paddingTop: 45,
        justifyContent: "space-around",
        backgroundColor: '#333745',
        flexDirection: "row",
        flexWrap: "wrap"
      },
      menu1Text: {
        fontFamily: "CaviarDreams",
        fontSize: 18,
        color: "white",
        fontWeight: "600",
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
        borderBottomColor: "#D55F8F",
        borderBottomWidth: 3
      },
})