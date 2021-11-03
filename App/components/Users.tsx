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
    fontSize: 20,
    color: 'gray',
  },
})

const Users = () => {
  const dispatch = useDispatch()

  const users = useSelector(state => state.myFirstReducer.users)

  function getUsersHandler() {
    dispatch(getUserFetch())
  }

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50,
      }}
    >
      <Text style={{ fontSize: 30 }}>Users:</Text>

      <View>
        {users?.map(user => (
          <View key={user.id} style={styles.userList}>
            <Text style={styles.name}>{user.name}</Text>
          </View>
        ))}

        <Button title="FETCH USERS" onPress={getUsersHandler} />
      </View>
    </View>
  )
}

export default Users
