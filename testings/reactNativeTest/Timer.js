
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

export function getTime(seconds) {

    let min = Math.floor(seconds / 60)
    let res = min < 10 ? "0"+min+":" : min+":"
    let sec = (seconds) % 60
    res = sec < 10 ? res+"0"+sec : res+sec
    return res
}



class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rawTime : this.props.time,
            time : getTime(this.props.time),
            count : 0
        }
    }
    componentDidMount(): * {
        this.interval = setInterval(this.updateTimer, 1000)
    }

    shouldComponentUpdate(nextProps: Props, nextState: State, nextContext: *): boolean {
        return nextState.rawTime >= 0
    }

    componentWillUnmount(): * {
        clearInterval(this.interval)
    }

    updateTimer = () =>{

        if (this.state.rawTime <= 0) {
            Vibration.vibrate([500,200,500], true)
            this.props.toggleDone()
        } else {
            this.setState(prevState => ({
                    rawTime: prevState.rawTime - 1,
                    time : getTime(this.state.rawTime - 1)
                })
            )
        }
    }


    render() {
        return (
            <View>
                <Text style = {styles.text}> {this.state.time} </Text>
            </View>
        );
    }
}

export default Timer
