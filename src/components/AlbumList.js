import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    state = { albums: [] };

  componentWillMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }))
      // .then(response => (console.log('response')));
    console.log('Component Will Mount');
    // debugger;
  }

  renderAlbums() {
    return this.state.albums.map(albums => <Text>{albums.title}</Text>);
  }

  render() {
    console.log('====================================');
    console.log('Displaing List of AlbumList', this.state);
    console.log('====================================');
    return (
      <View style={{ color: 'red', height: 20 }}>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;