import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

const Tab = () => {
 
        return (
            <View style={{flex: 1}}>
                <View style={{width: '90%', 
                marginLeft: 'auto',
                 marginRight: 'auto'}}>
                    <View style={{flexDirection: 'row', 
                    marginTop: 40, marginBottom: 20,
                     height: 36, 
                     position: 'relative'}}>
                        
                        <View style={{position: 'absolute', width: '50%', height: '100%', top: 0, left: 0, backgroundColor: '#0007af'}}/>
                        
                        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center',
                        borderWidth: 1,
                        borderColor: '#007af', borderRightWidth: 0,
                        borderTopRightRadius: 0,
                        borderTopBottomRadius: 0 }}>
                            <Text>Para Todos</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center',
                        borderWidth: 1,
                        borderColor: '#007af', borderRightWidth: 0,
                        borderTopRightRadius: 0,
                        borderTopBottomRadius: 0}}>
                            <Text>Para Elas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center',
                        borderWidth: 1,
                        borderColor: '#007af', borderRightWidth: 0,
                        borderTopRightRadius: 0,
                        borderTopBottomRadius: 0}}>
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
