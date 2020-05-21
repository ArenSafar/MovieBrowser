import React from 'react'
import {View,Text,Button,StyleSheet, TextInput } from 'react-native'


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
        work : 25,
        breakTime: 5
    }

    toggleShow() {

    }
    setWork() {
        this.setState({work})
    }
    setBreak() {
        this.setState({breakTime})
    }

    render() {
        return (
            <View style={styles.Container}>
                <Text style = {styles.Text}> Set working time: </Text>
                <TextInput style = {styles.Input} value ={this.state.work} onChangeText = {()=> this.setWork }/>
                <Text style = {styles.Text}> Set Break Time:</Text>
                <TextInput style={styles.Input} value ={this.state.breakTime} onChangeText = {()=>this.setBreak}/>
                < Button title={'Set'} onPress = {()=> this.toggleShow()}/>
            </View>
        )
    }
}

