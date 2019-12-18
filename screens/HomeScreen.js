import React, { Component } from 'react'
import {  ScrollView, StyleSheet, View, FlatList, Image, Dimensions, TouchableOpacity, TouchableHighlight ,Text,Animated } from 'react-native'

import {AppLoading} from 'expo';

import * as Font from 'expo-font'

import {theme, mocks} from '../constants/';


const { width } = Dimensions.get('window');

const data = [{
        key: require('../assets/images/plus1.png')
    },{
        key: require('../assets/images/plus2.png')
    },{
        key: require('../assets/images/masc1.png')
    },{
        key: require('../assets/images/masc2.png')
    },
    {
        key: require('../assets/images/masc1.png')
    },
    {
        key: require('../assets/images/masc1.png')
    },
    {
        key: require('../assets/images/masc1.png')
    },
    {
        key: require('../assets/images/masc1.png')
    },
    {
        key: require('../assets/images/plus2.png')
    },
    {
        key: require('../assets/images/plus2.png')
    },
    {
        key: require('../assets/images/plus2.png')
    },
    {
        key: require('../assets/images/plus1.png')
    },
    {
        key: require('../assets/images/plus1.png')
    },
    {
        key: require('../assets/images/plus1.png')
    },
    
];
const numColumns = 2;

var isHidden = true;

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pressStatus: false,
            bounceValue: new Animated.Value(-100),
        };
    }
    _onHideUnderlay() {
        this.setState({ pressStatus: false });
    }
    _onShowUnderlay() {
        this.setState({ pressStatus: true });
    }

    _toggleView(){
        var toValue = -100;
        if(isHidden) {
            toValue =0;
        }

        Animated.spring(
            this.state.bounceValue,
            {
                toValue: toValue,
                velocity: 3,
                tension: 2,
                friction: 8,
            }
        ).start();

        isHidden = !isHidden;
    }
    
    state = {
        categories: [],
        pressStatus: false,
        bounceValue: new Animated.Value(-100),

    }


    renderItem = ({item, index8}) => {
        return(
            <View style={styles.item}>
                <Image style={styles.item} source={item.key}></Image>
            </View>
        );
    };


    handleTab = tab => {
        const { categories } = this.props;
        const filtered = categories.filter(
          category => category.tags.includes(tab.toLowerCase())
        );
    
        this.setState({ active: tab, categories: filtered });
    }
    
    handleTabAndToggleView(tab) {
        this.handleTab(tab);
        this._toggleView();
    }

    renderTab(tab) {
        const { active } = this.state;
        const isActive = active === tab;
    
        return (
          <TouchableOpacity
            key={`tab-${tab}`}
            onPress={() => this.handleTabAndToggleView(tab)}
            style={[
              styles.tab,
              isActive ? styles.active : null
            ]}
          >
            <Text style={styles.menu1Text} medium gray={!isActive} secondary={isActive}>
              {tab}
            </Text>
          </TouchableOpacity>
        )
    }
    
    

    render() {
        const {categories} = this.state;
        const tabs = ['Todos os itens','Para Elas', 'Para Eles'];


        return (
            
            <View style={styles.containerPrincipal}>

                <View style={styles.menu1}>{tabs.map(tab => this.renderTab(tab))}</View>

                <Animated.View style={[styles.menu2, {transform: [{translateY: this.state.bounceValue}]}]}>
                    
                    <TouchableHighlight activeOpacity={1} 
                        style={this.state.pressStatus ? styles.buttonPress : styles.button1}
                        onHideUnderlay={this._onHideUnderlay.bind(this)}
                        onShowUnderlay={this._onShowUnderlay.bind(this)}>
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

                <Animated.View style={[styles.menu3, {transform: [{translateY: this.state.bounceValue}]}]}>

                <TouchableOpacity style={styles.button1}>
                        <Text style={styles.menu2Text}>Acessórios</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.menu2Text}>Moda Íntima</Text>
                    </TouchableOpacity>

                </Animated.View>
            
                
                {/*
                <View>
                    {categories.map(category => (
                        <TouchableOpacity
                            key={category.name}
                            onPress={() => navigation.navigate('Explore', { category })}>
                
                                <Image source={category.image} />
            
                        </TouchableOpacity>
                        ))}
                </View>   
                 */}
                <FlatList 
                    data={data}
                    style={{flex:1, top: -100}}
                    renderItem={this.renderItem}
                    numColumns = {numColumns}
                    showsHorizontalScrollIndicator={false}
                />

            </View>
        );
                
    }
}

HomeScreen.defaultProps = {
    categories: mocks.categories,
}

export default HomeScreen;

const styles = StyleSheet.create({
    menu1Text: {
        fontFamily: 'Roboto_Regular',
        fontSize: 14,
        color: 'white',
        fontWeight: '300',
        textAlign: 'auto',    
    },
    
    menu2Text: { 
        fontFamily: 'Roboto_Regular',
        fontSize: 17,
        color: 'white',
        fontWeight: '300',
        textAlign: 'auto',
    },
    buttonPress: {
        paddingHorizontal:15,
        paddingVertical:15,
        backgroundColor: '#fb7f64',
        marginRight:2,
        marginLeft: 2,
        borderRadius:8
        
    },
    
    button1:{
        paddingHorizontal:15,
        paddingVertical:15,
        backgroundColor:'#3c303e',
        marginRight:2,
        marginLeft: 2,
        borderRadius:8
      },
    containerPrincipal: {
        flex: 1,
    },
    menu1: {
        zIndex: 6,
        paddingTop: 45,
        justifyContent: 'space-around',
        backgroundColor: '#3c303e',
        flexDirection: 'row',
        flexWrap: 'wrap',  
        
    },
    menu2: {
        zIndex: 5,
        backgroundColor: '#3c303e',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    menu3: {
        zIndex: 5,
        backgroundColor: '#3c303e',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },

    item: {
        resizeMode: 'cover',
        width: 200,
        height: 200,
        marginBottom: 10,
        marginRight: 5, 
        
    },
    container: {
        position: 'absolute',
        flex: 1,
        
            
    },
    tabs: {
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: theme.sizes.base,
        marginHorizontal: theme.sizes.base * 2,
      },
      tab: {
        marginRight: theme.sizes.base * 2,
        paddingBottom: theme.sizes.base
      },
      active: {
        borderBottomColor: '#FB7F64',
        borderBottomWidth: 3,
      },
      categories: {
        flexWrap: 'wrap',
        paddingHorizontal: theme.sizes.base * 2,
        marginBottom: theme.sizes.base * 3.5,
      },
      category: {
        // this should be dynamic based on screen width
        minWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
        maxWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
        maxHeight: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
      }

})
