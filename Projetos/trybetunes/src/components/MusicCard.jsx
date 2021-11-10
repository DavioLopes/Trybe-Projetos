import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

export default class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      load: false,
    };
  }

  sendFavoriteSong = async () => {
    const { checked } = this.state;
    this.setState({
      load: true,
    });
    await addSong(this.props);
    if (checked === false) {
      this.setState({
        checked: true,
      });
    } else {
      this.setState({
        checked: false,
      });
    }
    await getFavoriteSongs(this.props);
    this.setState({
      load: false,
    });
  };

  render() {
    const { previewUrl, trackName, trackId } = this.props;
    const { load, checked } = this.state;
    return load ? (<Loading />) : (
      <div>
        <p>{trackName}</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code> audio</code>
          .
        </audio>
        <label htmlFor="favoriteSong">
          <input
            id="favoriteSong"
            type="checkbox"
            checked={ checked }
            onChange={ this.sendFavoriteSong }
            data-testid={ `checkbox-music-${trackId}` }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  previewUrl: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
};
