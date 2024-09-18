import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartPage from '../screens/StartPage';
import FoodPage from '../screens/FoodPage';
import FoodDetails from '../screens/FoodDetails';

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={StartPage}
          options={{ title: 'Start Page' , headerShown: false}}/>
        <Stack.Screen
          name="Food"
          component={FoodPage}
          options={{ title: 'Food Page', headerShown: false }}
        />
        <Stack.Screen
          name="FoodDetails"
          component={FoodDetails}
          options={{ title: 'Food Page', headerShown: false }}
        />
            </Stack.Navigator>
        </NavigationContainer>
    );
}