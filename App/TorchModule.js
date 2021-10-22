import React from 'react'
import {
  NativeModules,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native'

const TorchModule = () => {
  const { Torch } = NativeModules
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
      backgroundColor: '#444',
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
  })

  return (
    <View style={styles.mainVew}>
      <TouchableOpacity onPress={onTorchOn} style={styles.torchButton}>
        <Text style={{ color: 'green', fontSize: 30 }}>ON</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onTorchOff} style={styles.torchButton}>
        <Text style={{ color: 'red', fontSize: 30 }}>OFF</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={dateAddEvent} style={styles.torchButton}>
        <Text style={{ color: 'yellow', fontSize: 30 }}>add event</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TorchModule
