import React from 'react'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { fetchPostsRequest } from '../store/actions/postActions'
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
  const { posts } = useSelector((state: RootState) => state.posts)
  const { users } = useSelector((state: RootState) => state.users)
  function getPostsHandler() {
    dispatch(fetchPostsRequest())
  }
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

      <ScrollView>
        {posts?.map(user => (
          <View key={user.id} style={styles.userList}>
            <Text style={styles.name}> post id - {user.userId}</Text>
            <Text style={styles.name}>post title -{user.title}</Text>
          </View>
        ))}
        {users?.map(user => (
          <View key={user.id} style={styles.userList}>
            <Text style={styles.name}>user id - {user.id}</Text>
            <Text style={styles.name}>username -{user.username}</Text>
          </View>
        ))}

        <Button title="FETCH POSTS" onPress={getPostsHandler} />
        <Button title="FETCH Users" onPress={getUsersHandler} />
      </ScrollView>
    </View>
  )
}

export default Users
