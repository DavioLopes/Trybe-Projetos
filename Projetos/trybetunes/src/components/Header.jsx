import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      usuario: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.headerName();
  }

  headerName = () => {
    getUser().then((user) => this.setState({
      usuario: user,
      loading: false,
    }));
  }

  render() {
    const { usuario: { name }, loading } = this.state;
    return (
      <div>
        <header data-testid="header-component">
          {loading ? <Loading /> : (
            <h1 data-testid="header-user-name">
              { name }
            </h1>
          )}
          <Link to="/search" data-testid="link-to-search">Search</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
          <Link to="/profile" data-testid="link-to-profile">Profile</Link>
        </header>
      </div>
    );
  }
}
