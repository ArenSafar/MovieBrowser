import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OfferScreen from './Screens/OfferScreen';
import RequestScreen from './Screens/RequestScreen';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    tabBarOptions={{
                        activeTintColor: 'orange',
                        inactiveTintColor: 'gray',
                        labelStyle: {
                            fontSize: 20,
                            margin: 5,
                            padding: 0,
                        }}}
                        screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'REQUESTS') {
                        iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline';
                    } else if (route.name === 'OFFERS') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    })}
                    >
                    <Tab.Screen name="REQUESTS" component={RequestScreen} />
                    <Tab.Screen name="OFFERS" component={OfferScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }


}
