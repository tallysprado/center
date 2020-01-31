import React, {useState} from 'react'
import { Animated,Text,FlatList, StyleSheet, View, ImageBackground, TouchableWithoutFeedback } from 'react-native'

import Heart from './Heart'
import ImageHeader from './ImageHeader'

import Icon from 'react-native-vector-icons/FontAwesome5'

import { data } from "../constants/mocks"
import { TouchableOpacity } from 'react-native-gesture-handler'

import { connect } from 'react-redux';
import Store from '../stores/Store'
import {bindActionCreators} from 'redux';

import * as Actions from '../stores/PostsReducer'

const HeaderImage = () => {
    return(
        <View style={styles.header}>


        </View>
    )
}

const BottomButtons = (liked) => {
    
    
    
    return(
        <View style={styles.bottom}>
            <TouchableOpacity>
                <Icon 
                    name={'fire'}
                    size={32}
                    color={liked?'red':'white'}
                    style={{paddingLeft: 10,}}    
                    />    

            </TouchableOpacity>

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
                                color={item.like ? 'orange':'white'}
                                style={{paddingLeft: 10,}}    
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
    item: {
        width: "50%",
        height: 240,
        padding: 10,
    },
    itemImage: {
        resizeMode: "center",
        width: "100%",
        height: 230,
    },
    flatList: {
    },
    header: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        //position: 'absolute', 
        //bottom: 0,
        height: 50,
        width: '100%',
        backgroundColor: 'rgba(123, 204, 254, 0.6)',
    },
    bottom: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        position: 'absolute', 
        bottom: 0,
        height: 40,
        width: '100%',
    },
})
