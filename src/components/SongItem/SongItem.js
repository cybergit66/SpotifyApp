import React, { PropTypes } from 'react';
import styles from './SongItem.css';

const SongItem = (props) => {
  const { songData } = props;
  const album = songData.album;
  const albumName = album.name;
  const albumImage = album.images[0];
  return (
    <div className={styles.root}>
      <div className={styles.album}>
        <img className={styles.image} role="presentation" src={albumImage.url} />
        <span className={styles.albumName}>{albumName}</span>
      </div>
      <div className={styles.songAndDescription}>
        <audio controls duration src={songData.preview_url} />
        <span className={styles.songDescription}>Name: {songData.name}</span>
      </div>
    </div>
    );
};

SongItem.propTypes = {
  songData: PropTypes.object,
};

export default SongItem;
