import React , { Component } from 'react';
import AnimeList from '../ListCreation/ListCreation';

//accessories
import axios from 'axios';

class Anime extends Component {
    state= {
        animeList: [],
        type: ''
    }

    componentDidMount = () => {
        this.isComponentMounted= true;

        axios.get('/anime')
            .then(response => {
                if (this.isComponentMounted) {
                    this.setState({
                        animeList: response.data.Anime,
                        type: response.data.Type
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    componentWillUnmount = () => {
        this.isComponentMounted= false;
    }

    render () {

        const List = this.state.animeList.map(anime => {
            return <AnimeList key={anime.id} type={this.state.type} id={anime.id} name={anime.name} />
        });
        
        return (
            <div>
                {List}
            </div>
        )
    }
}

export default Anime;