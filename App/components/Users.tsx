import React from 'react'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { fetchPostsRequest } from '../store/actions/postActions'

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

  function getPostsHandler() {
    dispatch(fetchPostsRequest())
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
            <Text style={styles.name}> id - {user.userId}</Text>
            <Text style={styles.name}>title -{user.title}</Text>
          </View>
        ))}

        {console.log('posts :>> ', posts)}
        <Button title="FETCH POSTS" onPress={getPostsHandler} />
      </ScrollView>
    </View>
  )
}

export default Users
