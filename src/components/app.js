import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import searchSpotify from '../utils/searchSpotify';
import styles from './app.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialMessage: '',
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
      <div className={styles.root}>
        <SearchBar updateText={(song) => this.setState({ song: song })} fetchSongs={this.fetchSongs} />
        {initialMessage}
      </div>
    );
  }
}
