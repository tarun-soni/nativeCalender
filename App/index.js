/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import {
  NativeEventEmitter,
  NativeModules,
  SafeAreaView,
  Text,
} from 'react-native'
import NewModuleButton from './components/NewModuleButton'
import PickImage from './components/PickImage'
import TorchModule from './components/TorchModule'

const App = () => {
  // useEffect(() => {
  //   let eventListener = null

  //   const eventEmitter = new NativeEventEmitter(NativeModules.ToastExample)
  //   eventListener = eventEmitter.addListener('EventReminder', event => {
  //     console.log('event.eventProperty', event.eventProperty) // "someValue"
  //   })

  //   return () => {
  //     eventListener.remove()
  //   }
  // }, [])

  return (
    <SafeAreaView>
      <Text>Calender Native </Text>
      <NewModuleButton />
      {/* <PickImage /> */}

      <TorchModule />
    </SafeAreaView>
  )
}

export default App
