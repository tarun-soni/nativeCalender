import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import Navigation from './navigation'
import { NavigationContainer } from '@react-navigation/native'

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
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App
