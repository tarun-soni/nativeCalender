import React from 'react'
import { NativeModules, Button, SafeAreaView } from 'react-native'

const { CalendarModule } = NativeModules

const NewModuleButton = () => {
  const { DEFAULT_EVENT_NAME, DEFAULT_EVENT_NAME2 } =
    CalendarModule.getConstants()

  const onButton1Press = () => {
    console.log('We will invoke the native module here!')
    console.log('DEFAULT_EVENT_NAME ', DEFAULT_EVENT_NAME)
    console.log('DEFAULT_EVENT_NAME2 ', DEFAULT_EVENT_NAME2)

    CalendarModule.createCalendarEvent('testName', 'testLocation')
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

  const onButton4Press = async () => {
    try {
      const eventId = await CalendarModule.createAsyncCalenderEvent(
        'Party',
        'my house',
      )
      console.log(`Created a new event with id ${eventId}`)
    } catch (e) {
      console.error(e)
    }
  }

  // const onButton5Press = async () => {
  //   try {
  //     const eventId = await CalendarModule.createCalendarEvent(
  //       'promiseparty',
  //       'promise house',
  //     )
  //     console.log(`Created a new event with id ${eventId}`)
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }

  const onButton6Press = async () => {
    try {
      const eventId = await CalendarModule.createPromiseCalendarEvent(
        'Party',
        'My House',
      )
      console.log(`Created a new event with id ${eventId}`)
    } catch (error) {
      console.log(`error`, error)
    }
  }
  return (
    <SafeAreaView style={{ margin: 10 }}>
      <Button
        title="Calender Event Button"
        color="#841584"
        onPress={onButton1Press}
      />

      <Button
        title="Calender Event with multiple callbacks"
        color="#f73947"
        onPress={onButton3Press}
      />
      <Button
        title="Calender Event with async"
        color="#f73947"
        onPress={onButton4Press}
      />
      {/* <Button
        title="Calender Event with promise"
        color="#f73947"
        onPress={onButton5Press}
      /> */}

      <Button
        title="Android Calender Event with promise"
        color="#f54288"
        onPress={onButton6Press}
      />
    </SafeAreaView>
  )
}

export default NewModuleButton
