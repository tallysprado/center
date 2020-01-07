import React, {useState} from "react"
import {View, StyleSheet, Animated, TouchableOpacity, Text, TouchableHighlight} from "react-native"

import {theme, mocks} from '../constants'


const Header = () => {

  const [active, setActive] = useState("")
  const [bounceValue, setBounceValue] = useState(new Animated.Value(-100))
  const [prev, setPrev] = useState("")
  const [categories, setCategories] = useState(['Todos os itens', 'Para Elas', 'Para Eles'])
  const [pressStatus, setPressStatus] = useState(false)
  const [category, setCategory] = useState("")

  const tabs = ["Todos os itens", "Para Elas", "Para Eles"]

  var isHidden = true

  const handleTab = tab => {
    
    
    _toggleView(active, tab);
    
    setPrev(active)
    setActive(tab)
  };
  _onHideUnderlay = () => {
    setPressStatus(false)
  }
  _onShowUnderlay = () => {
    setPressStatus(true)
  }

  _toggleView = (active, tab) => {
    var toValue = -100;
    if (tab == "Todos os itens") {
      //desapareça
      toValue = "-100";
    }
    if (active == "Para Eles" && tab == "Para Elas") {
      //desapareça se cli
      toValue = 0;
    }
    if (active == "Para Elas" && tab == "Para Eles") {
      toValue = 0;
    }

    if (isHidden) {
      toValue = 0;
    }

    Animated.spring(bounceValue, {
      toValue: toValue,
      velocity: 3,
      tension: 2,
      friction: 8
    }).start();

    isHidden = !isHidden;
  }
  const handleTabAndToggleView = (tab) =>{
    handleTab(tab);
  }

  renderTab = (tab) =>{
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleTabAndToggleView(tab)}
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

  return(
    
    <View style={styles.containerPrincipal}>
        <View style={styles.menu1}>{tabs.map(tab => renderTab(tab))}</View>

        <Animated.View
          style={[
            styles.menu2,
            { transform: [{ translateY: bounceValue }] }
          ]}
        >
          <TouchableHighlight
            activeOpacity={1}
            style={pressStatus ? styles.buttonPress : styles.button1}
            onHideUnderlay={_onHideUnderlay.bind(this)}
            onShowUnderlay={_onShowUnderlay.bind(this)}
          >
            <Text style={styles.menu2Text}>Blusa</Text>
          </TouchableHighlight>

          <TouchableOpacity style={styles.button1}>
            <Text style={styles.menu2Text}>Calça</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1}>
            <Text style={styles.menu2Text}>Short</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1}>
            <Text style={styles.menu2Text}>Calçados</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          style={[
            styles.menu3,
            { transform: [{ translateY: bounceValue }] }
          ]}
        >
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.menu2Text}>Acessórios</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1}>
            <Text style={styles.menu2Text}>Moda Íntima</Text>
          </TouchableOpacity>
        </Animated.View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    top: -100,
    paddingLeft: 10
  },
  
  menu1Text: {
    fontFamily: "Roboto_Regular",
    fontSize: 14,
    color: "white",
    fontWeight: "300",
    textAlign: "auto"
  },

  menu2Text: {
    fontFamily: "Roboto_Regular",
    fontSize: 17,
    color: "white",
    fontWeight: "300",
    textAlign: "auto"
  },
  buttonPress: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "#fb7f64",
    marginRight: 2,
    marginLeft: 2,
    borderRadius: 8
  },

  button1: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "#3c303e",
    marginRight: 2,
    marginLeft: 2,
    borderRadius: 8
  },
  containerPrincipal: {},
  menu1: {
    zIndex: 6,
    paddingTop: 45,
    justifyContent: "space-around",
    backgroundColor: "#3c303e",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  menu2: {
    position: 'absolute',

    zIndex: 1,
    backgroundColor: "#3c303e",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  menu3: {
    backgroundColor: "#3c303e",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
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
  
});