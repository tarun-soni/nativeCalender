import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { SafeAreaView, Button } from 'react-native'
import { HomeStackProps } from '../navigation'

type authScreenType = NativeStackNavigationProp<HomeStackProps>

const HomeScreen = () => {
  const navigation = useNavigation<authScreenType>()
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
        onPress={() => navigation.navigate('PostScreen')}
      />
      <Button
        title="GO TO USERS"
        onPress={() => navigation.navigate('UserScreen')}
      />
    </SafeAreaView>
  )
}

export default HomeScreen
