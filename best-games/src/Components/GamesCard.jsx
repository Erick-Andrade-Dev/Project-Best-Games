import React from "react";
import PropTypes from "prop-types"
import Rating from "./Rating";

export default class GamesCard extends React.Component {
    render(){
        const { game: { title, subtitle, storyline, rating, imagePath } } = this.props;

        return(
        <div className="games-card">
            <img alt="Game" className="games-card-image" src={ imagePath } />
            <div className="game-card-body">
                <h4 className="game-card-title">{title}</h4>
                <h5 className="game-card-subtitle">{subtitle}</h5>
                <p className="game-card-storyline">{storyline}</p>
            </div>
            <Rating rating= { rating }/>            
      </div>
        )
    }
}

GamesCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        storyline: PropTypes.string,
        rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        imagePath: PropTypes.string,
    }).isRequired,
};