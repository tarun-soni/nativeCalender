import React, { useEffect, useState } from 'react'
import {
  NativeModules,
  NativeEventEmitter,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native'

const TorchModule = () => {
  const { Torch } = NativeModules
  const [torchState, setTorchState] = useState(false)
  useEffect(() => {
    const TorchEvent = new NativeEventEmitter(Torch)
    let torchListener = null
    torchListener = TorchEvent.addListener('onChange', result => {
      console.log('result', result)
      setTorchState(result)
    })
    return () => {
      torchListener.remove()
    }
  }, [Torch])
  const onTorchOn = async () => {
    Torch.on()
  }
  const onTorchOff = async () => {
    Torch.off()
  }
  const dateAddEvent = async () => {
    Torch.addEvent('name===x', 'location===y', 10)
  }

  const styles = StyleSheet.create({
    mainVew: {
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#f5f5',
      margin: 10,
      padding: 40,
    },
    torchButton: {
      marginTop: 20,
      width: 100,
      height: 50,
      borderWidth: 2,
      color: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: { color: '#fff', fontSize: 30 },
  })

  return (
    <View>
      <View
        style={[
          styles.mainVew,
          { backgroundColor: torchState ? 'green' : 'gray' },
        ]}
      >
        <TouchableOpacity onPress={onTorchOn} style={styles.torchButton}>
          <Text style={styles.button}>ON</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onTorchOff} style={styles.torchButton}>
          <Text style={styles.button}>OFF</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={dateAddEvent} style={styles.torchButton}>
          <Text style={styles.button}>add event</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TorchModule
