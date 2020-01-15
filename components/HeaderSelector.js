import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { ACTIVE_MALE } from "../stores/GenderReducer"
import { Header } from 'react-native-elements'

const HeaderSelector = ({ navigation }) => {
    const gender = useSelector(state => state.gender);
    const dispatch = useDispatch();
    dispatch({ type: ACTIVE_MALE })
    return(
        <Header 
            leftComponent={{icon: 'tshirt', text: 'Gender'}}
            centerComponent={{text: 'CENTER FASHION LOGO'}}
            rightComponent={{icon: 'tshirt', text: 'Vestuário'}}
            placement="center"
        />
    )
}

HeaderSelector.navigationOptions = {
    title: 'Home',
};

export default HeaderSelector