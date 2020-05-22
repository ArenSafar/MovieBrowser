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
    }

    dismiss() {
        this.props.setWorkAndBreak(this.state.inputWork,this.state.inputBreak)
        this.props.toggleShowInput()
    }
    setWork(text) {
        this.setState({
            inputWork : parseInt(Number(text)*60,10)
        })
    }
    setBreak(text){
        this.setState({
            inputBreak : parseInt(Number(text)*60,10)
        })
    }

    render() {
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
}

