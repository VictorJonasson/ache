import 'react-native-gesture-handler';
import React from 'react';
import {default as theme} from '../Assets/CustomTheme/custom-theme.json';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from '../Screens/LandingScreen';
import { HomeScreen } from "../Screens/HomeScreen";

const Stack = createStackNavigator();

const StackNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="landingScreen"
        component={LandingScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: theme['color-primary-400'],
          },
          headerTintColor: '#2E3A59',
        }}
      />
        <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
                headerShown: false,
                title: '',
                headerStyle: {
                    backgroundColor: theme['color-primary-500'],
                },
                headerTintColor: '#2E3A59',
            }}
        />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigation;
