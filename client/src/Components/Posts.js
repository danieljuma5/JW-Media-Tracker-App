import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import axios from 'axios'

function Posts({posts,setPosts,onUpdatePost}) {
  
  // making a request for posts
  const fetchPosts = () => {
    axios.get('/posts')
    .then((r) => setPosts(r.data))
    .catch((err) => console.log(err))
  }
useEffect(() => {
  fetchPosts()
},[])





  return (
  <ul>
  {posts.map((post) => (
    <li key={post.id}>
  <PostCard onUpdatePost={onUpdatePost} setPosts={setPosts} post={post}/>
    </li>
  ))
  }
  </ul>
  )
}
export default Posts;