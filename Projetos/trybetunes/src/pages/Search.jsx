import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistName: '',
      artistArray: [],
      loading: false,
      artistQuery: '',
    };
  }

  artistFromApi = async () => {
    const { artistName } = this.state;
    this.setState({ loading: true });
    const apiArtistReturn = await searchAlbumsAPI(artistName);
    this.setState({
      artistName: '',
      loading: false,
      artistArray: apiArtistReturn,
      artistQuery: artistName,
    });
  }

  verification = () => {
    const { artistName } = this.state;
    const MAX_NUMBER = 2;
    if (artistName.length < MAX_NUMBER) {
      return true;
    }
    return false;
  };

  randomChange = ({ target: { name, value } }) => {
    this.setState(
      {
        [name]: value,
      },
    );
  }

  render() {
    const { artistName, loading, artistArray, artistQuery } = this.state;
    return loading ? (<Loading />) : (
      <div data-testid="page-search">
        <Header />
        <label htmlFor="artistName">
          Artista
          <input
            type="text"
            data-testid="search-artist-input"
            name="artistName"
            placeholder="Artista"
            value={ artistName }
            onChange={ this.randomChange }
          />
        </label>
        <button
          type="button"
          data-testid="search-artist-button"
          disabled={ this.verification() }
          onClick={ this.artistFromApi }
        >
          Procurar
        </button>
        <div>
          {`Resultado de álbuns de: ${artistQuery}`}
          {artistArray.length === 0 ? (<p>Nenhum álbum foi encontrado</p>)
            : artistArray.map((artist, index) => (
              <div key={ index }>
                <img src={ artist.artworkUrl100 } alt={ artist.artistName } />
                <Link
                  to={ `/album/${artist.collectionId}` }
                  data-testid={ `link-to-album-${artist.collectionId}` }
                >
                  <h1>{ artist.collectionName }</h1>
                </Link>
                <h2>{artist.artistName}</h2>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Search;
