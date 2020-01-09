import React, {useState} from "react"
import { Header } from "react-native-elements"


const tabs = tab => {

}

const MyHeader = () => {

  return(
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'CENTER', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
      containerStyle={{ backgroundColor: 'black' }}
    />
  );
}

export default MyHeader;
