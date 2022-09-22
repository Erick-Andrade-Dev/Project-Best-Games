import React from "react";
import PropTypes from 'prop-types';

export default class AddGames extends React.Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(props)
        this.handleClick = this.handleClick.bind(props)

        this.state = {
            title: '',
            subtitle: '',
            imagePath: '',
            storyline: '',
            rating: 0,
            category: 'mmorpg',
    }
}
    
    handleChange = ({ target }) => {
        const { name } = target
        this.setState(({ [name]: target.value }));
    }

    handleClick = (event) => {
        event.preventDefault();
        const { onClick } = this.props
        onClick(this.state);
        this.setState({
            title: '',
            subtitle: '',
            imagePath: '',
            storyline: '',
            rating: 0,
            category: 'mmorpg',
      })
    }        
  
    render(){
        const {
            subtitle, title, imagePath,
            storyline, rating, category } = this.state;
        return(
            <form className="form-column" >
            <label htmlFor="title">
              <p className="label-p">Título</p>
              <input
                name="title"
                id="title"
                type="text"
                value={ title }
                onChange={ this.handleChange }                
              />
            </label>
            <label htmlFor="subtitle">
              <p className="label-p">Subtitle</p>
              <input
                name="subtitle"
                id="subtitle"
                type="text"
                value={ subtitle }
                onChange={ this.handleChange }                
              />
            </label>
            <label htmlFor="imagePath" >
              <p className="label-p">Imagem</p>
              <input
                name="imagePath"
                type="text"
                id="imagePath"
                value={ imagePath }
                onChange={ this.handleChange }                
              />
            </label>
            <label htmlFor="storyline">
              <p className="label-p">Descrição</p>
              <textarea
                name="storyline"
                value={ storyline }
                id="storyline"
                cols="30"
                rows="3"
                onChange={ this.handleChange }                
              />
            </label>
            <label htmlFor="rating">
              <p className="label-p">Avaliação</p>
              <input
                name="rating"
                type="number"
                value={ rating }
                id="rating"
                onChange={ this.handleChange }                
              />
            </label>
            <label htmlFor="category">
              <p className="label-p">Categoria</p>
              <select
                name="category"
                id="select"
                value={ category }
                onChange={ this.handleChange }                
              >
                <option value="">Todos</option>
                <option value="MMORpg">MMORpg</option>
                <option value="Moba">Moba</option>
                <option value="FPS">FPS</option>
              </select>
            </label>
            <button
              type="submit"              
              onClick={ this.handleClick }
            >
              Adicionar jogos
            </button>
          </form>
        )
    }
} 

AddGames.propTypes = {
    onClick: PropTypes.func,
  }.isRequired;