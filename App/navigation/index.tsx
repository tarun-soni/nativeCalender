import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserScreen from '../screens/UserScreen'
import PostScreen from '../screens/PostScreen'
import HomeScreen from '../screens/HomeScreen'
import { HomeStackParamList } from '../types/navigation'

const HomeStack = createNativeStackNavigator<HomeStackParamList>()

const Navigation = () => {
  return (
    <HomeStack.Navigator initialRouteName={'HomeScreen'}>
      <HomeStack.Screen name={'HomeScreen'} component={HomeScreen} />
      <HomeStack.Screen name={'UserScreen'} component={UserScreen} />
      <HomeStack.Screen name={'PostScreen'} component={PostScreen} />
    </HomeStack.Navigator>
  )
}
export default Navigation
