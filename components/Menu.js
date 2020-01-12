import * as React from 'react';
import { BottomNavigation, Text, StyleSheet } from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const BlusasRoute = () => <Text>Busas</Text>;

class Menu extends React.Component{
  state = {
    index: 0,
    routes: [
      { key: 'music', title: 'Blusas', icon: 'tshirt', color: '#333745' },
      { key: 'albums', title: 'Sapatos', icon: 'shoe-heel', color: "#D55F8F" },
      { key: 'recents', title: 'Acessórios', icon: 'sunglasses', color: '#333745' },
      { key: 'blusas', title: 'Blusas', icon: 'history', color: "#D55F8F" },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    blusas: BlusasRoute,
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