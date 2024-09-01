// // In App.js in a new project

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from './src/screens/LoginScreen';
// import LoginOpt from './src/components/LoginOpt';
// import InputOtp from './src/components/InputOtp';
// import OTPVerified from './src/components/OTPVerified';
// import HomeScreen from './src/screens/HomeScreen';


// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator  initialRouteName="Home"
//         screenOptions={{headerShown: false}}>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="LoginScreen" component={LoginScreen} />
//         <Stack.Screen name="LoginOpt" component={LoginOpt} />
//         <Stack.Screen name="InputOtp" component={InputOtp} />
//         <Stack.Screen name="OTPVerified" component={OTPVerified} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
   