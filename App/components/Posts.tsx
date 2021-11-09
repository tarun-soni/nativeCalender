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
import { fetchPostsRequest } from '../store/actions/postActions'

const Posts = () => {
  const dispatch = useDispatch()
  const { pending, posts, error } = useSelector(
    (state: RootState) => state.posts,
  )

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
      <Button title="FETCH POSTS" onPress={getPostsHandler} />
      <Text style={{ fontSize: 30 }}>Posts:</Text>
      {pending ? (
        <ActivityIndicator size="small" />
      ) : error ? (
        <Text>Error</Text>
      ) : (
        <View>
          <ScrollView>
            {posts?.map(post => (
              <View key={post.id} style={styles.userList}>
                <Text style={styles.name}>user id - {post.title}</Text>
                <Text style={styles.name}>completed-{post.completed}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  )
}

export default Posts
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
