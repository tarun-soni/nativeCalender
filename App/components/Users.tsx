import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getUserFetch } from '../store/actions'
import { User } from '../types'

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

// export function useSelectorTyped<T>(fn: (state: RootState) => T): T {
//   return useSelector(fn)
// }

const Users = () => {
  const dispatch = useDispatch()

  const users = useSelector((state: any) => state.myFirstReducer.users)

  // const users = useSelectorTyped(state => state.users)

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
        {users?.map((user: User) => (
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
