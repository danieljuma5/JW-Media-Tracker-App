import React, { useEffect } from 'react'
import PostCard from './PostCard'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
     <div className="flex">

  <ul>
  {posts.map((post) => (
    <li key={post.id}>
  <PostCard onUpdatePost={onUpdatePost} setPosts={setPosts} post={post}/>
    </li>
  ))
}
  </ul>
      <div className="w-auto bg-gray-200 flex flex-col items-center">
        <Link to={"/add_post"}>
        <button className="py-4 px-8 bg-blue-500 text-white font-semibold rounded-t-lg">Addpost</button>
        </Link>
      </div>
      <div className="border-l border-gray-400" style={{ height: '100vh' }}></div>
    </div>
  )
}
export default Posts;