import React from 'react'
import {Text,TextInput, Button, StyleSheet,KeyboardAvoidingView } from "react-native";

export default class SearchScreen extends React.Component{
    state= {
        input : ''
    }

    updateInput = (input)=> {this.setState({input})}


    render() {
        return (
        <KeyboardAvoidingView behavior="padding" style = {styles.container}>
            <Text style = {styles.Text}>Please enter the Movie Name:</Text>
            <TextInput> value={this.state.input}
                        placeholder={"Example: The Godfather"}
                        onChangeText={this.updateInput}
            </TextInput>
            <Button title = {'Search'} />
        </KeyboardAvoidingView>
        )
    }
}

const styles= StyleSheet.create({
    Text : {
        fontSize : 25
    },
    container: {
        flex : 1,
        backgroundColor : 'silver',
    }

})
