import React from 'react'
import { Button, NativeModules, SafeAreaView } from 'react-native'

const PickImage = () => {
  const { ImagePickerModule } = NativeModules
  const onPickImagePress = async () => {
    console.log('ImagePickerModule', ImagePickerModule)
    const image = await ImagePickerModule.pickImage()

    console.log('image', image)
  }

  return (
    <SafeAreaView>
      <Button onPress={onPickImagePress} title="pickimage" />
    </SafeAreaView>
  )
}

export default PickImage
