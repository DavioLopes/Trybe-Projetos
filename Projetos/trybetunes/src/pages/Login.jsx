import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      loading: false,
      redirect: false,
    };
  }

  verification = () => {
    const { name } = this.state;
    const MAX_NUMBER = 3;
    if (name.length < MAX_NUMBER) {
      return true;
    }
    return false;
  }

  randomChange = ({ target: { name, value } }) => {
    this.setState(
      {
        [name]: value,
      },
    );
  }

  submit = async (event) => {
    event.preventDefault();
    const { name } = this.state;
    this.setState({
      loading: true,
    });
    await createUser({ name });
    this.setState({
      loading: false,
      redirect: true,
    });
  }

  render() {
    const { name, loading, redirect } = this.state;
    return (
      <div data-testid="page-login">
        <label htmlFor="name">
          Nome
          <input
            type="text"
            data-testid="login-name-input"
            value={ name }
            name="name"
            onChange={ this.randomChange }
          />
        </label>
        <button
          type="button"
          data-testid="login-submit-button"
          disabled={ this.verification() }
          onClick={ this.submit }
        >
          Entrar
        </button>
        {(loading) ? <Loading /> : null}
        {(redirect) ? <Redirect to="search" /> : null}
      </div>
    );
  }
}
