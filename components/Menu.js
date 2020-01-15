import * as React from 'react';
import { BottomNavigation, Text, StyleSheet, Tab } from 'react-native-paper';

import { Ionicons } from '@expo/vector-icons';


const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;


class Menu extends React.Component{
  state = {
    index: 0,
    routes: [
      { key: 'all', title: 'Para Todos', icon: 'all-inclusive', color: '#333745' },
      { key: 'her', title: 'Para Elas', icon: 'gender-female', color: "#D55F8F" },
      { key: 'him', title: 'Para Eles', icon: 'gender-male', color: '#333745' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    all: MusicRoute,
    her: AlbumsRoute,
    him: RecentsRoute,
  });

    render(){
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        shifting={true}
      />
    );
    }
}


export default Menu