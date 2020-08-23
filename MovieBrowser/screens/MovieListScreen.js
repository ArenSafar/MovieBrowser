import React from 'react';
import {
    FlatList,View,Text,
} from 'react-native';
import Row from './Row'
import {fetchMovies} from '../Api';


export default class MovieListScreen extends React.Component {

    state = {
        movieData : null,
    }

    details = (theMovie) => {
        const {showDetails, ...rest} = theMovie
        this.props.navigation.push('Movie Deatails', rest)
    }

    componentDidMount() {
        fetchMovies(this.props.route.params.inputText).then(result =>
            this.setState({
            movieData : result
        }))
    }

    render() {
        return (
            <FlatList renderItem={({ item }) => <Row {...item} showDetails = {this.details} />}
                      data = {[this.state.movieData]}
                      keyExtractor = { (item, index) => index+''}/>
        )
    }
}

