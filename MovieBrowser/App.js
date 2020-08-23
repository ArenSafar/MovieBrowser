/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './screens/SearchScreen';
import MovieListScreen from './screens/MovieListScreen';
import DetailsScreen from './screens/DetailsScreen';


const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Search'} component={SearchScreen} />
        <Stack.Screen name={'MovieList'} component={MovieListScreen} />
        <Stack.Screen name={'Movie Deatails'} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
