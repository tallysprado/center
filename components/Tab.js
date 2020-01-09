import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

const Tab = () => {
 
        return (
            <View style={{flex: 1}}>
                <View style={{width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
                    <View style={{flexDirection: 'row', marginTop: 40, marginBottom: 20, height: 36, position: 'relative'}}>
                        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Para Todos</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Para Elas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Para Eles</Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </View>
        )
    
}

export default Tab;

const styles = StyleSheet.create({

})
