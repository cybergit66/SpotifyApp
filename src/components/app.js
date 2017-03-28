import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import searchSpotify from '../utils/searchSpotify';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
      song: '',
    };
  }
  fetchSongs = () => {
    searchSpotify(this.state.song)
      .then((tracks) => console.log('tracks', tracks));
  }
  render() {
    const { initialMessage } = this.state;
    return (
      <div>
        <SearchBar updateText={(song) => this.setState({ song: song })} fetchSongs={this.fetchSongs} />
        {initialMessage}
      </div>
    );
  }
}
