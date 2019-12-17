import React, { Component } from 'react'
import {  StyleSheet, View, FlatList, Image, Dimensions, TouchableOpacity, Text } from 'react-native'

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
    }];
const numColumns = 3;



class HomeScreen extends Component {
    state = {
        fontLoaded: false,
        categories: [],
    }

    async componentWillMount() {
        try {
            await Font.loadAsync({
            GE_Ergonomic_Regular: require("./assets/fonts/GE_Ergonomic_Regular.ttf"),
          });
          this.setState({ fontLoaded: true });
        }catch(error){
          console.log('error loading fonts', error);
    
        }
      }
    

    

   

 

    componentDidMount() {
        this.setState({ categories: this.props.categories });
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
    
    renderTab(tab) {
        const { active } = this.state;
        const isActive = active === tab;
    
        return (
          <TouchableOpacity
            key={`tab-${tab}`}
            onPress={() => this.handleTab(tab)}
            style={[
              styles.tab,
              isActive ? styles.active : null
            ]}
          >
            <Text size={16} medium gray={!isActive} secondary={isActive}>
              {tab}
            </Text>
          </TouchableOpacity>
        )
    }
    
    

    render() {
        const {categories} = this.state;
        const tabs = ['Para Elas', 'Para Eles'];

       
        return (
            
            <View style={styles.containerPrincipal}>

                <View style={styles.menu1}>{tabs.map(tab => this.renderTab(tab))}</View>

                <View style={styles.menu2}>
                    
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.menuText}>Blusa</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.menuText}>Calça</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.menuText}>Short</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.menuText}>Calçados</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.menu2}>

                <TouchableOpacity style={styles.button1}>
                        <Text style={styles.menuText}>Acessórios</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.menuText}>Moda Íntima</Text>
                    </TouchableOpacity>

                </View>
            
                
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
                    style={styles.container}
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
    menuText:{ 
        fontFamily: 'GE Ergonomic Regular',
        fontSize: 17,
        color: 'white',
        fontWeight: '300',
        textAlign: 'auto',
    },
    
    button1:{
        paddingHorizontal:15,
        paddingVertical:15,
        backgroundColor:'#c37dc6',
        marginRight:2,
        marginLeft: 2,
        borderRadius:8
      },
    containerPrincipal: {
        flex:1,
    },
    menu1: {
        
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    menu2: {
        backgroundColor: '#c37dc6',
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
        flex: 1,
        marginVertical: 20,
        marginLeft: 5,
            
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
        borderBottomColor: theme.colors.secondary,
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
