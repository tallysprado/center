import React, {useState} from 'react'
import { Animated,Text,FlatList, StyleSheet, View, ImageBackground, TouchableWithoutFeedback } from 'react-native'

import Heart from './Heart'
import ImageHeader from './ImageHeader'

import { data } from "../constants/mocks"

// const numColumns = 2

const ContentContainer = () => {
    const [dataState, setData] = useState(data)

    renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <ImageBackground style={styles.itemImage} source={item.img}>
                    <ImageHeader text={'PinkFashion'}/>
                    <TouchableWithoutFeedback>
                        <Animated.View>
                            < Heart filled={item.like}/>

                        </Animated.View>
                    </TouchableWithoutFeedback>
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

export default ContentContainer


const styles = StyleSheet.create({ 
    item: {
        width: "50%",
        height: 210,
        padding: 10,
    },
    itemImage: {
        resizeMode: "center",
        width: "100%",
        height: "100%"
    },
    flatList: {
        marginBottom: 130,
    },
})
