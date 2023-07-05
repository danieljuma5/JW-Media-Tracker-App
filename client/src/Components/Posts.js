import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import axios from 'axios'

function Posts() {
  const [posts,setPosts] = useState([]);
  // making a request for posts
  const fetchPosts = () => {
    axios.get('/posts')
    .then((r) => setPosts(r.data))
    .catch((err) => console.log(err))
  }
useEffect(() => {
  fetchPosts()
},[])
  console.log(posts)
  return (
    <div className="flex justify-between">
      <PostCard posts={posts}/>
    </div>
  )
}

export default Posts;