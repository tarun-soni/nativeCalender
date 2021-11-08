/* eslint-disable no-lone-blocks */
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import Users from './components/Users'
import { store } from './store'
import NewModuleButton from './components/NewModuleButton'
import PickImage from './components/PickImage'
import TorchModule from './components/TorchModule'

const App = () => {
  // useEffect(() => {
  //   let eventListener = null
  //   const { ToastExample } = NativeModules
  //   const eventEmitter = new NativeEventEmitter(ToastExample)
  //   eventListener = eventEmitter.addListener('EventReminder', event => {
  //     console.log('event.eventProperty', event.eventProperty) // "someValue"
  //   })

  //   return () => {
  //     eventListener.remove()
  //   }
  // }, [])

  return (
    <Provider store={store}>
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
