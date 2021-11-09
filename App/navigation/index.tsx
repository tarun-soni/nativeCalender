import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserScreen from '../screens/UserScreen'
import PostScreen from '../screens/PostScreen'
import HomeScreen from '../screens/HomeScreen'

export type StackProps = {
  HomeScreen: undefined
  UserScreen: undefined
  PostScreen: undefined
}

const Stack = createNativeStackNavigator<StackProps>()

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName={'HomeScreen'}>
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
      <Stack.Screen name={'UserScreen'} component={UserScreen} />
      <Stack.Screen name={'PostScreen'} component={PostScreen} />
    </Stack.Navigator>
  )
}
export default Navigation
