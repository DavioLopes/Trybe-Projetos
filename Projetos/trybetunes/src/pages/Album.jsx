import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from './Loading';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

export default class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musics: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.songs(id);
  }

  songs = async (id) => {
    const musics = await getMusics(id);
    this.setState({
      musics,
      loading: false,
    });
  }

  artist = (musics) => (
    <div>
      {musics.map((music, i) => {
        if (i) {
          const { previewUrl, trackName, trackId } = music;
          return (
            <MusicCard
              key={ trackId }
              trackId={ trackId }
              previewUrl={ previewUrl }
              trackName={ trackName }
              music={ music }
            />);
        }
        return (
          <div key={ 1 }>
            <h1 data-testid="artist-name">{musics[i].artistName}</h1>
            <h1 data-testid="album-name">{musics[i].collectionName}</h1>
          </div>
        );
      })}
    </div>
  )

  render() {
    const { musics, loading } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        { loading ? <Loading /> : this.artist(musics)}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
