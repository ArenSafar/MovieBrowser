import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PostRequestScreen from './PostRequestScreen';
import RequestHistoryScreen from './RequestHistoryScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();
export default class RequestScreen extends React.Component{

    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    labelStyle: { fontSize: 20, color: 'white' },
                    tabStyle: { borderWidth: 1, borderRadius: 5, borderColor: 'white'},
                    style: { backgroundColor: '#477877' },
                }}

                >
                <Tab.Screen name={'myRequests'} component={RequestHistoryScreen}/>
                <Tab.Screen name={'post'} component={PostRequestScreen}/>
            </Tab.Navigator>
        )
    }
}




