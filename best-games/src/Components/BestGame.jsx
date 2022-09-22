import React from "react";
import PropTypes from "prop-types"
import GamesList from "./GamesList";
import AddGames from "./AddGames";
import SearchBar from "./SearchBar";

export default class BestGames extends React.Component {
    constructor(props){
        super(props);

        const { games } = this.props

        this.state = {
            searchText: '',
            bookmarkedOnly: false,
            selectedCategory: '',
            games,
          };
    }

    handleSearch = (e) => {
        this.setState({ searchText: e.target.value })
    }

    handleBookmark = (e) => {
        this.setState({ bookmarkedOnly: e.target.checked })
    }

    handleSelectedGame = (e) => {
        this.setState({ selectedCategory: e.target.value })
    }

    filter = () => {
        const { searchText, games, bookmarkedOnly, selectedCategory } = this.state;
        if (bookmarkedOnly === true) {
          return games.filter((game) => game.bookmarked === true);
        }
        if (selectedCategory !== '') {
          return games.filter((game) => game.category === selectedCategory);
        }
        if (searchText !== '') {
          return games.filter((game) => game.title.includes(searchText)
          || game.subtitle.includes(searchText)
          || game.storyline.includes(searchText));
        }
        return games.filter((game) => game.title.includes(searchText));
      }
    
    addGamer = (newGame) => {
        const { games } = this.props
        this.setState({
            games: [...games, newGame],
        })
    }

    render() {
        const games = this.filter();
        const { searchText, bookmarkedOnly, selectedCategory } = this.state
        return(
            <div>
                <h2 className="subtitle-game"> Meus jogos favoritos! </h2>
                <SearchBar
                    searchText={ searchText }
                    onSearchTextChange={ this.handleSearch }
                    bookmarkedOnly={ bookmarkedOnly }
                    onBookmarkedChange={ this.handleBookmark }
                    selectedCategory={ selectedCategory }
                    onSelectedCategoryChange={ this.handleSelectedGame }
                />
                <GamesList games= { games }/>
                <AddGames onClick= { this.addGamer }/>
        </div>
        )
    }
}

BestGames.propTypes = {
    games: PropTypes.arrayOf(PropTypes.object),
  }.isRequired;