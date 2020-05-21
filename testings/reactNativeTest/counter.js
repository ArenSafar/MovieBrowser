/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet,
    ScrollView,
    Button,
    View,
    Text,
    Vibration,
} from 'react-native';
import Timer from './Timer.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,

    },
    text : {
        fontSize : 40,
        marginTop: 150,
        textAlign : 'center',
    },
})

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workTime : props.workTime,
            breakTime : props.breakTime,
            isDone : this.props.isDone,
            isBreak : this.props.isBreak,
        }
    }

    changeTask() {
        this.setState({
            rawTime: this.state.isBreak ? this.state.breakTime : this.state.workTime,
            isDone: !this.state.isDone,
            isBreak : !this.state.isBreak,
        })
        Vibration.cancel()
    }

    render(): React$Node {
        let msg = this.state.isBreak ? 'Time for a Break!' : 'Time to Work!'
        if (this.state.isDone) {
            return (
                <View style = {{padding: 12}}>
                    <Text style = {styles.text}>  00:00 </Text>
                    <Text style = {styles.text}>  {msg} </Text>
                    <Button title={'OK'} color = 'green' onPress={()=> this.changeTask()}/>
                </View>
            )
        } else {
            return (
            <Timer time = {this.state.rawTime} isBreak = {this.state.isBreak}/>
                   )
        }
    }
}
export default Counter;
