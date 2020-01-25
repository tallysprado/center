import React, {useState} from 'react'
import { Animated,Text,FlatList, StyleSheet, View, Image,ImageBackground, TouchableWithoutFeedback } from 'react-native'

import Heart from './Heart'
import ImageHeader from './ImageHeader'

import { data } from "../constants/mocks"

const ContentContainer = () => {
    const [dataState, setData] = useState(data)

    renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <Image style={styles.itemImage} source={item.img}/>
                    
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
        height: 190
    },
    flatList: {
        marginBottom: 100,
    },
})
