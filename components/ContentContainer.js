import React, {useState} from 'react'
import { Animated,Text,FlatList, StyleSheet, View, ImageBackground, TouchableWithoutFeedback } from 'react-native'

import Heart from './Heart'
import ImageHeader from './ImageHeader'



const ContentContainer = () => {
    
    
    const numColumns = 2
    
    const data = [
        {
            key: require("../assets/images/plus1.png"),
            like: false,
        },
        {
            key: require("../assets/images/plus2.png"),
            like: false,
        },
        {
            key: require("../assets/images/masc1.png"),
            like: false,
        },
        {
            key: require("../assets/images/masc2.png"),
            like: false,

        },
        {
            key: require("../assets/images/masc1.png"),
            like: false,

        },
        {
            key: require("../assets/images/masc1.png"),
            like: false,

        },
        {
            key: require("../assets/images/masc1.png"),
            like: false,

        },
        {
            key: require("../assets/images/masc1.png"),
            like: false,

        },
        {
            key: require("../assets/images/plus2.png"),
            like: false,

        },
        {
            key: require("../assets/images/plus2.png"),
            like: false,

        },
        {
            key: require("../assets/images/plus2.png"),
            like: false,

        },
        {
            key: require("../assets/images/plus1.png"),
            like: false,
        },
        {
            key: require("../assets/images/plus1.png"),
            like: false,
        },
        {
            key: require("../assets/images/plus1.png"),
            like: true,
        }
    ];

    
    
    const [dataState, setData] = useState(data)
    
    

    renderItem = ({ item, index }) => {
        return (
          <View style={styles.item}>
            <ImageBackground style={styles.item} source={item.key}>
                <ImageHeader text={'PinkFashion'}/>
                <TouchableWithoutFeedback>
                    <Animated.View>
                      <Heart filled={item.like}/>

                    </Animated.View>
                </TouchableWithoutFeedback>
            </ImageBackground>
          </View>
        );
    };
    
    return (
            <FlatList 
                    data={dataState}
                    style={{bottom: 0,position: 'fixed',paddingBottom: 10, top: -100}}
                    renderItem={this.renderItem}
                    numColumns = {numColumns}
                    showsHorizontalScrollIndicator={false}
                />
        )
}

export default ContentContainer


const styles = StyleSheet.create({
    contentContainer: {
        top: -100,
    },  
    item: {
        resizeMode: "cover",
        width: 200,
        height: 200,
        marginBottom: 10,
        marginRight: 5,
    },
    
    
    
})
