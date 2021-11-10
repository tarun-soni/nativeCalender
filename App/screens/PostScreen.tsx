import { RouteProp, useRoute } from '@react-navigation/core'
import React from 'react'
import { View } from 'react-native'
import Posts from '../components/Posts'
import { HomeStackParamList } from '../types/navigation'

type PostScreenRouteType = RouteProp<HomeStackParamList, 'PostScreen'>

const PostScreen = () => {
  const { params } = useRoute<PostScreenRouteType>()
  return (
    <View>
      {console.log('params :>> ', params.limit)}
      <Posts />
    </View>
  )
}

export default PostScreen
