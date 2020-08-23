import React from 'react';

import {Text, StyleSheet,TouchableOpacity} from 'react-native';

const Row = props => (
    <TouchableOpacity style={styles.row} onPress = {()=>props.showDetails({...props})}>
        <Text style = {styles.text}> {props.Title} {props.Year} </Text>
    </TouchableOpacity>
)
export default Row
const styles = StyleSheet.create({
    row: { padding: 20,},
    text: {fontSize : 25, color:'#4263f5'}
});
