import React from 'react'
import { NativeModules, Button } from 'react-native'

const { CalendarModule } = NativeModules

const NewModuleButton = () => {
  const onButton1Press = () => {
    console.log('We will invoke the native module here!')
    CalendarModule.createCalendarEvent('testName', 'testLocation')
  }

  const onButton2Press = () => {
    CalendarModule.createCalendarEventCallback(
      'testName',
      'testLocation',
      (error, eventId) => {
        if (error) {
          console.error(`Error found! ${error}`)
        }
        console.log(`event id ${eventId} returned`)
      },
    )
  }
  const onButton3Press = () => {
    const successCB = eventId => {
      console.log(`event id ${eventId} returned`)
    }
    const errorCB = error => {
      console.error(`Error found! ${error}`)
    }

    CalendarModule.createCalendarEventCallback(
      'button3 name',
      'button 3 location',
      errorCB,
      successCB,
    )
  }
  return (
    <>
      <Button
        title="Calender Event Button"
        color="#841584"
        onPress={onButton1Press}
      />
      <Button
        title="Calender Event with callback"
        color="#123442"
        onPress={onButton2Press}
      />
      <Button
        title="Calender Event with multiple callbacks"
        color="#f73947"
        onPress={onButton3Press}
      />
    </>
  )
}

export default NewModuleButton
