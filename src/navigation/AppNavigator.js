// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import LoginOpt from '../components/LoginOpt';
import InputOtp from '../components/InputOtp';
import OTPVerified from '../components/OTPVerified';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="LoginOpt" component={LoginOpt} />
        <Stack.Screen name="InputOtp" component={InputOtp} />
        <Stack.Screen name="OTPVerified" component={OTPVerified} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
