import React , { Component } from 'react';
import MangaList from '../ListCreation/ListCreation';

//accessories
import axios from 'axios';


class Manga extends Component {

    state= {
        managaList: [],
        type: ''
    }

    componentDidMount = () => {
        this.isComponentMounted= true;

        axios.get('/manga')
            .then(response => {
                if (this.isComponentMounted) {
                    this.setState({
                        managaList: response.data.Manga,
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

        if (this.state.managaList == []) return null;
        
        const List = this.state.managaList.map(manga => {
            return <MangaList key={manga.id} type={this.state.type} id={manga.id} name={manga.name} />
        });
        
        return (
            <div>
                {List}
            </div>
        )
    }
}

export default Manga;