
import React from 'react';
import {StyleSheet, Text, Vibration, View} from 'react-native';
import Counter from './counter.js';

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

function getTime(seconds) {
    return Math.floor((seconds)/60)+":"+(seconds)%60+""
}
class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isBreak : this.props.isBreak,
            rawTime : this.props.time,
            time : getTime(this.props.time)
        }
    }
    componentDidMount(): * {
        this.interval = setInterval(()=> this.updateTimer(), 1000)
    }

    shouldComponentUpdate(nextProps: Props, nextState: State, nextContext: *): boolean {
        return nextState.rawTime >= 0
    }

    componentWillUnmount(): * {
        clearInterval(this.interval)
    }

    updateTimer() {
        if (this.state.rawTime === 0 ) {
            Vibration.vibrate(400,true)
        } else {
            this.setState(prevState => ({
                    rawTime: prevState.rawTime - 1,
                    time : getTime(this.state.rawTime - 1)
                })
            )
        }
    }
    render() {
        if (this.state.rawTime === 0) {
            return (
                <Counter isDone = {true} isBreak = {this.state.isBreak} workTime={this.props.workTime}
                breakTime = {this.props.breakTime}/>
            )
        }
        return (
            <View>
                <Text style = {styles.text}> {this.state.time} </Text>
            </View>
        );
    }
}

export default Timer
