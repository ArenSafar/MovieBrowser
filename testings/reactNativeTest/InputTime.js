import React from 'react'
import {View,Text,Button,StyleSheet, TextInput } from 'react-native'
import App from './App';


const styles = StyleSheet.create ({
    Text: {
        fontSize : 20,
        marginTop: 10,
        textAlign : 'center'
    },
    Container : {
        flex: 1,
        padding: 8,
    },
    Input : {
        marginBottom : 100,
        padding: 5,
        borderRadius : 3,
        borderColor : 'orange',
        borderWidth : 1
    }

})
export default class InputTime extends React.Component {

    state = {
        inputWork : 7,
        inputBreak: 2,
        showInput : true,
    }

    dismiss() {
        this.setState({
            showInput : !this.state.showInput
        })
    }
    setWork(text) {
        this.setState({
            inputWork : text
        })
    }
    setBreak(text){
        this.setState({
            inputBreak : text
        })
    }

    render() {

        if (this.state.showInput) {
            return (

                <View style={styles.Container}>
                    <Text style={styles.Text}> Set working time: </Text>
                    <TextInput style={styles.Input} value={this.state.inputWork}
                               onChangeText={text => this.setWork(text)}
                               keyboardType = "numeric"/>
                    <Text style={styles.Text}> Set Break Time:</Text>
                    <TextInput style={styles.Input} value={this.state.inputBreak}
                               onChangeText={text => this.setBreak(text)}
                               keyboardType = 'numeric'/>
                    < Button title={'Set'} onPress={() => this.dismiss()}/>
                </View>
            )
        }
        return <App timeEdited={true} inputWork={this.state.inputWork} inputBreak={this.state.inputBreak}/>
    }
}

