import React from 'react'
import { Button, NativeModules, Text, View } from 'react-native'

const PickImage = () => {
  const { ImagePickerModule } = NativeModules
  const onPickImagePress = async () => {
    console.log('ImagePickerModule', ImagePickerModule)
    const image = await ImagePickerModule.pickImage()

    console.log('image', image)
  }

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        width: '80%',
        marginVertical: 50,
      }}
    >
      <Text>Pick image (android only)</Text>

      <Button onPress={onPickImagePress} title="pickimage" />
    </View>
  )
}

export default PickImage
