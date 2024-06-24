import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginOpt from './screens/LoginOpt'
import Login from './screens/Login'
import Register from './screens/Register'
import Onboard from './screens/Onboard'
import DataCollect from './screens/DataCollect'
import Home from './screens/Home'
import User from './screens/User'
import Compare from './screens/Compare'
import Setting from './screens/Setting'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginOpt" component={LoginOpt} />
        <Stack.Screen name="Onboard" component={Onboard} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="DataCollect" component={DataCollect} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Compare" component={Compare} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}