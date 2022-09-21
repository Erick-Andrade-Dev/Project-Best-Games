import React from "react";
import PropTypes from "prop-types"
import games from "../Data/data";
import GamesCard from "./GamesCard";

export default class GamesList extends React.Component {
    render() {
        return(
            <div className="games-list">
                {
                    games.map((game, index) => <GamesCard key= { index } game= { game } />)
                }
            </div>
        )
    }
}

GamesList.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.object,
    ).isRequired,
  };