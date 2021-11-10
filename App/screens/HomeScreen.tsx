import {
  createNavigationContainerRef,
  useNavigation,
} from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { SafeAreaView, Button } from 'react-native'
import {
  AllScreenParamList,
  HomeStackParamList,
  RootStackParamList,
} from '../types/navigation'

// before adding declare global in the types, this works typing navigation.navigate
// type authScreenType = NativeStackNavigationProp<HomeStackParamList>

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50,
      }}
    >
      {/* <NewModuleButton /> */}
      {/* <PickImage /> */}
      {/* <TorchModule /> */}
      {/* <Posts /> */}
      <Button
        title="GO TO POSTS"
        onPress={() => navigation.navigate('PostScreen', { limit: 2 })}
        // onPress={() => navigation.navigate}
      />
      <Button
        title="GO TO USERS"
        onPress={() => navigation.navigate('UserScreen')}
      />
    </SafeAreaView>
  )
}

export default HomeScreen

export const navigationRef = createNavigationContainerRef<RootStackParamList>()

export function navigate(
  name: keyof RootStackParamList,
  params?: AllScreenParamList,
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}
