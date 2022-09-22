/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, onBookmarkedChange,
      bookmarkedOnly, selectedCategory, onSelectedCategoryChange } = this.props;
    return (
      <form className="form-flex" data-testid="search-bar-form">
        <label htmlFor="input-text" data-testid="text-input-label">
          <p className="label-p1">Inclui texto</p>
          <input
            className='text-name'
            type="text"
            id="input-text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="input-checkbox" data-testid="checkbox-input-label">
          <p className="label-p1">Mostrar somente favoritos.</p>
          <input
            className='checkbox'
            type="checkbox"
            id="input-checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="select" data-testid="select-input-label">
          <p className="label-p1">Filtrar por gênero</p>
          <select
            name="select"
            id="select"
            value={ selectedCategory }
            onChange={ onSelectedCategoryChange }
            data-testid="select-input"
          >
            <option value="">Todos</option>
            <option value="mmorpg" selected>MMORpg</option>
            <option value="fps">FPS</option>
            <option value="moba">Moba</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.protoTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedCategory: PropTypes.string,
  onSelectedCategoryChange: PropTypes.func,
}.isRequired;