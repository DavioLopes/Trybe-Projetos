import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form className="form">
        <label htmlFor="nome">
          Nome
          <input
            type="text"
            data-testid="name-input"
            value={ cardName }
            name="cardName"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="descrição">
          Descrição
          <input
            type="text"
            data-testid="description-input"
            value={ cardDescription }
            name="cardDescription"
            onChange={ onInputChange }
          />
        </label>

        <div>
          <label htmlFor="attr01">
            Attr01
            <input
              type="number"
              name="cardAttr1"
              id="attr01"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr02">
            Attr02
            <input
              type="number"
              name="cardAttr2"
              id="attr02"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr03">
            Attr03
            <input
              type="number"
              name="cardAttr3"
              id="attr03"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <label htmlFor="cardImage">
          Imagem
          <input
            type="text"
            name="cardImage"
            id="img"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="raridae">
          Raridade
          <select
            name="cardRare"
            id="input-raridade"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal"> normal</option>
            <option value="raro"> raro</option>
            <option value="muito raro"> muito raro</option>
          </select>
        </label>
        { hasTrunfo ? (
          <p>
            Você já tem um Super Trunfo em seu baralho
          </p>
        ) : (
          <label htmlFor="trunfo">
            Super Trybe Trunfo
            <input
              htmlFor="trunfo"
              name="cardTrunfo"
              data-testid="trunfo-input"
              type="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
        )}
        <button
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Form;
