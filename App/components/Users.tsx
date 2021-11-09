import React from 'react'
import {
  ActivityIndicator,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { fetchUserRequest } from '../store/actions/userActions'

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

  const { pending, users, error } = useSelector(
    (state: RootState) => state.users,
  )

  function getUsersHandler() {
    dispatch(fetchUserRequest())
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

      {pending ? (
        <ActivityIndicator size="small" />
      ) : error ? (
        <Text>Error</Text>
      ) : (
        <View>
          <Text>Users</Text>
          <ScrollView>
            {users?.map(user => (
              <View key={user.id} style={styles.userList}>
                <Text style={styles.name}>user id - {user.id}</Text>
                <Text style={styles.name}>username -{user.username}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      )}
      <View>
        <Button title="FETCH Users" onPress={getUsersHandler} />
      </View>
    </View>
  )
}

export default Users
