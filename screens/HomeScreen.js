import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image } from 'react-native'


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
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: false,
         
        };
    }

    renderItem = ({item,index}) => {
        return(
            <View style={styles.item}>
                <Image style={styles.item} source={item.key}></Image>
            </View>
        );
    };

    render() {
        return (
            <FlatList 
                data={data}
                style={styles.container}
                renderItem={this.renderItem}
                numColumns = {numColumns}
                showsHorizontalScrollIndicator={false}
            />
        );
    }
}

const styles = StyleSheet.create({
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
    }

})
