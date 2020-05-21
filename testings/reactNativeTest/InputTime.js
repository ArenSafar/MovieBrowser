import React from 'react'
import {View,Text,Button,StyleSheet, TextInput } from 'react-native'
import App from './App';
import {getTime} from './Timer'

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
        inputWork : 25*60,
        inputBreak: 5*60,
        showInput : true,
    }

    dismiss() {
        this.setState({
            showInput : !this.state.showInput
        })
    }
    setWork(text) {
        this.setState({
            inputWork : Number(text)*60
        })
    }
    setBreak(text){
        this.setState({
            inputBreak : Number(text)*60
        })
    }

    render() {

        if (this.state.showInput) {
            return (

                <View style={styles.Container}>
                    <Text style={styles.Text}> Set working time (minutes): </Text>
                    <TextInput style={styles.Input} value={this.state.inputWork}
                               onChangeText={text => this.setWork(text)}
                               keyboardType = "numeric"
                               placeholder={"Default: 25"}/>
                    <Text style={styles.Text}> Set Break Time (minutes):</Text>
                    <TextInput style={styles.Input} value={this.state.inputBreak}
                               onChangeText={text => this.setBreak(text)}
                               keyboardType = 'numeric'
                               placeholder = {"Defult: 5"}/>
                    < Button title={'Set'} onPress={() => this.dismiss()}/>
                </View>
            )
        }
        return <App timeEdited={true} inputWork={this.state.inputWork} inputBreak={this.state.inputBreak}/>
    }
}

