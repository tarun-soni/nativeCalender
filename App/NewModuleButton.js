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
    </>
  )
}

export default NewModuleButton
