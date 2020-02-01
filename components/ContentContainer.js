import React, {useState} from 'react'
import { Animated,Text,FlatList, StyleSheet, View, ImageBackground,Image, TouchableWithoutFeedback } from 'react-native'

import Heart from './Heart'
import ImageHeader from './ImageHeader'

import Icon from 'react-native-vector-icons/FontAwesome5'

import { data } from "../constants/mocks"
import { TouchableOpacity } from 'react-native-gesture-handler'

import { connect } from 'react-redux';
import Store from '../stores/Store'
import {bindActionCreators} from 'redux';

import {theme} from '../constants'

import * as Actions from '../stores/PostsReducer'

const HeaderImage = () => {
    return(
        <View style={styles.header}>
            <View style={styles.storeLogo}>
                <Image 
                    style={styles.storeImage}
                    source={require('../assets/icons/company.png')}

                />
            </View>

            <Text style={styles.textLogo}>Nome da Loja </Text>
        </View>
    )
}


//se voce começou algo voce nao esta dando um passo para trás 



const ContentContainer = (  ) => {

    //state = Store.getState()

    const [dataState, setData] = useState(data)
   
    likeItem = (item) => {
        const newData = data.map(i => {
            if(i.key == item.key){
                i.like = !i.like
            }
            return i
        }
        )
        setData(newData)
    
    }
    
    renderItem = ({ item }) => {
        
        return (
            <View style={styles.item}>
                <ImageBackground style={styles.itemImage} source={item.img}>
                    <HeaderImage/>

                    <View style={styles.bottom}>
                        <TouchableOpacity onPress={ ()=>{likeItem(item)} }>
                            
                            <Icon 
                                name={'fire'}
                                size={32}
                                color={item.like ? 'orange':theme.colors.itemIcons}
                                style={{paddingLeft: 10,}}    
                                />    

                        </TouchableOpacity>

                        <TouchableOpacity onPress={ ()=>{} }>
                            
                            <Icon 
                                name={'cart-plus'}
                                size={32}
                                color={theme.colors.itemIcons}
                                style={{paddingRight: 10}}    
                                />    

                        </TouchableOpacity>

                    </View>
                </ImageBackground>
            </View>
        );
    };

    return (
        <View>
            <FlatList 
                data={dataState}
                style={styles.flatList}
                renderItem={renderItem}
                numColumns={2}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}


const mapStateToProps = ( state ) => {
    const {like, key} = state
    
    return {like, key}
}

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(Actions, dispatch)
})

//export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer)
export default ContentContainer

const styles = StyleSheet.create({ 
    storeLogo: {
        backgroundColor: 'transparent',
        width: 60,

    },
    textLogo: {
        top: 15,
        
        fontSize: 19,
        fontWeight: '700',
        color: 'white',
        fontFamily: 'CaviarDreams',
        
    },
    storeImage:{
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        borderRadius: 25,
        borderWidth: 3,
        borderColor: theme.colors.storeImageBorder,
        marginLeft: 5,
        marginTop: 5,
    },
    item: {
        width: "50%",
        height: 240,
        padding: 5,
    },
    itemImage: {
        resizeMode: "center",
        width: "100%",
        height: 230,
    },
    flatList: {
        marginLeft: -5,
        marginRight: -5,
        marginTop: -5,
    },
    header: {
        flexWrap: 'wrap',
        alignContent: 'space-between',
        //position: 'absolute', 
        //bottom: 0,
        height: 50,
        width: '100%',
        backgroundColor: theme.colors.headerImage,
    },
    bottom: {
        //flexDirection: 'row',
        flexWrap: 'wrap',
        position: 'absolute', 
        alignContent: 'space-between',
        bottom: 0,
        height: 40,
        width: '100%',
    },
})
