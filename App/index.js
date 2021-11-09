/* eslint-disable no-lone-blocks */
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import Users from './components/Users'
import NewModuleButton from './components/NewModuleButton'
import PickImage from './components/PickImage'
import TorchModule from './components/TorchModule'
import { store } from './store'
import Posts from './components/Posts'

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
        {/* <Posts /> */}
      </SafeAreaView>
    </Provider>
  )
}

export default App
