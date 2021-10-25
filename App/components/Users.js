import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getUserFetch } from '../store/actions'

const Users = () => {
  const dispatch = useDispatch()

  const users = useSelector(state => state.myFirstReducer.users)
  // console.log(`state`, state)
  function getUsersHandler() {
    console.log('in get uset')

    dispatch(getUserFetch())
  }

  return (
    <View>
      {console.log(`users`, users)}
      <Text>Users:</Text>

      <View>
        {users?.map(user => (
          <Text>{user.name}</Text>
        ))}

        <Button title="get usrs" onPress={getUsersHandler} />
      </View>
    </View>
  )
}

export default Users
