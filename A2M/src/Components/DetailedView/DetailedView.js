import React , { Component } from 'react';
import axios from 'axios';

import Publisher from './Section/Publisher';
import Chapter from './Section/chapterDetails';
import Episode from './Section/EpisodeDetails';
import Title from './Section/Title';
import ContentDetails from './Section/ContentDetails';

import Styles from './Section/Layout.css';
import AUX from '../../HOC/BasicAUX';

class DetailedView extends Component {

    state= {
        details: {},
        isDataLoaded: false
    }

    componentDidMount = () => {
        const id = this.props.match.params.id,
            type = this.props.match.params.type;

        if (id == null) return;

        const url = '/' + type + '/' + id;

        axios.get(url)
            .then( response => {
                console.log(response);
                this.setState({details: response.data, isDataLoaded: true});
            })
            .catch( error => {
                console.log(error)
            })
    }

    render () {
        if (!this.state.isDataLoaded) return null;

        const releases = this.props.match.params.type === 'anime' ?
                        <Episode details= {this.state.details.AnimeDetails}/> :
                        <Chapter details= {this.state.details.MangaDetails}/>;
        
        return (
            <AUX>
                <Title 
                    name= {this.state.details.Name}/>
                <div className={Styles.detailsContainer}>
                    <ContentDetails 
                        genre= {this.state.details.Genres}
                        author= {this.state.details.Arthor}
                        art= {this.state.details.Art}
                        otherNames= {this.state.details.OtherNames}
                        ranking= {this.state.details.Ranking}
                        type= {this.state.details.Type}
                        description= {this.state.details.Description} />
                    {releases}
                    <Publisher 
                        publisher= {this.state.details.Publish}/>
                </div>
            </AUX>
        )
    }
}

export default DetailedView;