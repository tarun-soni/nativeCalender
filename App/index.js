/* eslint-disable no-lone-blocks */
import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Provider } from 'react-redux'
import Users from './components/Users'
import { store } from './store'

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
    <Provider store={store}>
      <SafeAreaView>
        <Text>Hello</Text>

        <Users />
      </SafeAreaView>
    </Provider>
  )
}

export default App

{
  /* <Text>Calender Native </Text>
      <NewModuleButton />
      <PickImage /> 

      <TorchModule /> */
}
