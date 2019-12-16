import React, { Component } from 'react'
import {  StyleSheet, View, FlatList, Image, Dimensions, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import {Block} from '../components/';
import {Text} from '../components/';
import {theme} from '../constants/';


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
export default class Home extends Component {
    constructor(props) {
        super(props);
        
    }

    state = {
        active: 'Tudo',
        categories: [],
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

    render() {
        const {categories} = this.state;
        const tabs = ['Tudo', 'Masculino', 'Feminino'];

        return (
            <View style={styles.containerPrincipal}>

                <View style={styles.menu}>
                    <Button title="Blusas"></Button>
                    <Button title="Shorts"></Button>

                </View>                
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

const styles = StyleSheet.create({
    containerPrincipal: {
        flex:1,
    },
    menu: {
        
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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
