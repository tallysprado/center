import React, { Component } from 'react'
import {    ImageBackground, StyleSheet, View, 
            FlatList, Image, Dimensions, TouchableOpacity,
            TouchableHighlight ,Text,Animated,
            TouchableWithoutFeedback } from 'react-native'


import Card from '../components/Card'

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



const Heart = ({filled, style, ...props}) => {
    const centerNonFilled = (
        <View style={[StyleSheet.absoluteFill, styles.fit]}>
            <View style={[styles.leftHeart, styles.heartShape, styles.empty]}></View>
            <View style={[styles.rigthHeart, styles.heartShape, styles.empty]}></View>
        </View>
    )
    
    const fillStyle = filled ? styles.filledHeart : styles.empty;

    return (
        <Animated.View {...props} style ={[styles.heart, style]}>
            
                <View  style={[styles.leftHeart, styles.heartShape, fillStyle]}>
                </View>
                
                <View  style={[styles.rightHeart, styles.heartShape, fillStyle]}>
                </View>
            
                {!filled && centerNonFilled}
        </Animated.View>
    )
}


const numColumns = 2;

var isHidden = true;

class HomeScreen extends Component {
    state = {
        active: '',
        categories: [],
        pressStatus: false,
        bounceValue: new Animated.Value(-100),
        active: [],
        prev: '',
        liked: false,
    }
    
    constructor(props) {
        super(props);
        this.state = { 
            pressStatus: false,
            bounceValue: new Animated.Value(-100),
            active: 'Todos os itens',
            liked: false,
            scale: new Animated.Value(0),
            animations: [
                new Animated.Value(0),
                new Animated.Value(0),
                new Animated.Value(0),
                new Animated.Value(0),
                new Animated.Value(0),
                new Animated.Value(0),
            ]
            
        };
        this.triggerLike = this.triggerLike.bind(this)
    }

    triggerLike(){
        this.setState({
            liked: !this.state.liked
        })
    }
    
    _onHideUnderlay() {
        this.setState({ pressStatus: false });
    }
    _onShowUnderlay() {
        this.setState({ pressStatus: true });
    }

    _toggleView(active,tab){
        var toValue = -100;
        if(tab=='Todos os itens'){
            //desapareça
            toValue='-100';
        }
        if(active=='Para Eles' && tab=='Para Elas'){
            //desapareça se cli
            toValue=0;
        }
        if(active=='Para Elas' && tab=='Para Eles'){
            toValue=0;
        }
        
        
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
    
    



    renderItem = ({item, index}) => {
        return(
            <View style={styles.item}>
                <ImageBackground style={styles.item} source={item.key}>
                    
                    <TouchableWithoutFeedback onPress={this.triggerLike}>
                        <Animated.View>
                        <Heart filled={this.state.liked}></Heart>

                        </Animated.View>
                    </TouchableWithoutFeedback>

                </ImageBackground>
            </View>
        );
    };


    handleTab = tab => {
        const { categories } = this.props;
        const filtered = categories.filter(
          category => category.tags.includes(tab.toLowerCase())
        );
        var active = this.state.active;
        this._toggleView(active,tab)
        this.setState({ prev: this.state.active, active: tab, categories: filtered });
        
        
        
    }
    
    handleTabAndToggleView(tab) {
        this.handleTab(tab);
        
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
                
                <View style={styles.contentContainer}>


                    <View style={styles.card}>
                        <ImageBackground style={styles.image} source={require('../assets/images/plus1.png')}>
                            <Heart></Heart>
                        </ImageBackground>
                    </View>

                    <View style={styles.card}>
                        <ImageBackground style={styles.image} source={require('../assets/images/plus1.png')}>
                            <Heart></Heart>
                        </ImageBackground>
                    </View>

                    <View style={styles.card}>
                        <ImageBackground style={styles.image} source={require('../assets/images/plus1.png')}>
                            <Heart></Heart>
                        </ImageBackground>
                    </View>

                    <View style={styles.card}>
                        <ImageBackground style={styles.image} source={require('../assets/images/plus1.png')}>
                            <Heart></Heart>
                        </ImageBackground>
                    </View>

                    

                </View>
                
                {/*

                <FlatList 
                    data={data}
                    style={{bottom: 0,position: 'fixed',paddingBottom: 10, top: -100}}
                    renderItem={this.renderItem}
                    numColumns = {numColumns}
                    showsHorizontalScrollIndicator={false}
                />

                <View style = {styles.contentContainer}>
                    <CustomImage></CustomImage>
                </View>
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
            </View>
        );
                
    }
}

HomeScreen.defaultProps = {
    categories: mocks.categories,
}

export default HomeScreen;

const styles = StyleSheet.create({
    card: {
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: { height: 0, width: 0 },
        padding: 5,
    },
    
    
    image:{
        resizeMode: 'contain',
        width: 185,
        height: 185,
    },
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        top: -100,
        paddingLeft: 10,     
           
    },
    col1: {
        flex: 1,
        padding: 5,

    },  
    col2: {
        flex: 1,
        padding: 5,
        
    },  
    options: {
        justifyContent: 'space-between',
        flex: 0.25,
        top: 150,
    },
    heart: {
        width: 40,
        height: 40, 
        backgroundColor: 'transparent',
        left: 5,
        top: 145,
        opacity: 0.7,
        
    },
    heartShape: {
        width: 22,
        height: 32, 
        position: 'absolute',
        
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    filledHeart: {
        backgroundColor: '#e31745',
    },
    fit: {
        transform: [
            {scale: .2}
        ]
    }, 
    emptyFill: {
        backgroundColor: '#fff'
    },
    empty: {
        backgroundColor: '#ccc'
    },
    leftHeart: {
        backgroundColor: "#000",
        transform: [
            {rotate: '-45deg'}
        ],
        left: 5,
    },
    rightHeart: {
        backgroundColor: "#000",
        transform: [
            {rotate: '45deg'}
        ],
        right: 5
    },
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
