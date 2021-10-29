import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getUserFetch } from '../store/actions'

const styles = StyleSheet.create({
  userList: {
    margin: 5,
    padding: 10,
  },
  name: {
    fontSize: 24,
  },
})

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
      <Text>Users:</Text>

      <View>
        {users?.map(user => (
          <View key={user.id} style={styles.userList}>
            <Text style={styles.name}>{user.name}</Text>
          </View>
        ))}

        <Button title="get usrs" onPress={getUsersHandler} />
      </View>
    </View>
  )
}

export default Users
