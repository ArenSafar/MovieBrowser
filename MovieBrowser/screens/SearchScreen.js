import React from 'react';
import {
    Text,
    TextInput,
    Button,
    StyleSheet,
    KeyboardAvoidingView, Image,
} from 'react-native';
import {fetchMovies} from '../Api';

export default class SearchScreen extends React.Component {
  state = {
    input : '',
      mockData : null,
  };

  updateInput = input => {
    this.setState({input});
  };

  componentDidMount() {
      fetchMovies('hugo').then(result =>
          this.setState({
              mockData : result.Year
          }))
  }

    render() {
    return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "paddin"} style={styles.container}>
        <Image style = {{flex: 1,
            width: 425,
            borderRadius: 20,
            resizeMode: 'contain'}}
            source = {{uri : 'https://www.pngitem.com/pimgs/m/80-801174_production-clipart-icon-png-transparent-transparent-background-movie.png'}}
        />
        <Text style={[styles.Text,{fontWeight : 'bold'}]}>Please enter the Movie Name:</Text>

        <TextInput
            style = {styles.TextInput}
            value = {this.state.input}
            onChangeText = {this.updateInput}
            placeholder = {'Example: The Godfather'}
        />
        <Button style = {{padding : 20}} title={'Search'} onPress={()=> this.props.navigation.navigate('MovieList'
            ,{inputText : this.state.input})}/>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  Text: {
    fontSize: 25,
    alignSelf : 'center'
  },
  TextInput :
      {
        margin : 20,
        padding : 15,
        borderWidth : 2,
        borderColor: 'white',
        borderRadius: 15,
        backgroundColor: 'white'


      },
  container: {
    flex: 1,
    backgroundColor: 'silver',
    justifyContent: 'center'
  },
});
