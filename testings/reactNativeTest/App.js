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
    Button,
    Text,
    View,
    Vibration
} from 'react-native';

import Counter from './counter'
import InputTime from './InputTime';

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#E0E0E0',
    flex: 1,
    padding: 18,

  },
  text : {
    fontSize : 40,
    marginTop: 150,
    textAlign : 'center',
  },

})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTimer : false,
      showInput : false,
      workTime : this.props.timeEdited ? this.props.inputWork : 25*60,
      breakTime : this.props.timeEdited ? this.props.inputBreak : 5*60,
    }
  }

  setWorkAndBreak = (work,breakTime) => {
      this.setState({
          workTime: work,
          breakTime : breakTime
      })
  }
  toggleShowTimer = () => {
      this.setState({
        showTimer : !this.state.showTimer
      })
      Vibration.cancel()
  }

  toggleInput () {
      this.setState({
          showInput : !this.state.showInput
      })
}

  render() {
      if (this.state.showInput) {
          return <InputTime toggleShowInput={()=>this.toggleInput()} setWorkAndBreak={this.setWorkAndBreak}/>
      }
      if (!this.state.showTimer) {
          return (
              <View style = {styles.container}>
                  <View style = {{padding: 8}}>
                      <Button title =  {"Start"} color = '#006600' onPress = {()=> this.toggleShowTimer()}/>
                  </View>
                  <View style = {{padding: 8}}>
                      <Button title =  {"Set Timers"} color = '#336666' onPress = {()=> this.toggleInput()}/>
                  </View>
              </View>
          )
      } else {
          return (
          <View style = {styles.container}>
              <Counter isBreak = {true} isDone = {false}
                    workTime = {this.state.workTime} breakTime = {this.state.breakTime}/>
              <Button title = {"Stop"} color = '#ff9900' onPress = {()=> this.toggleShowTimer()}/>
          </View>
          )
      }
  }
}
export default App;
