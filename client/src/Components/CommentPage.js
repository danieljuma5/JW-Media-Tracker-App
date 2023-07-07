import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CommentPageCard from './CommentPageCard';
import CommentSection from './CommentSection';
// import axios from 'axios';

const CommentPage = () => {
  const [posts,setPosts] = useState([])
  const {postId} = useParams()
  console.log(postId)
  useEffect(() => {
    axios.get(`/posts/${postId}`)
    .then((r) => setPosts(r.data))
  },[])
  console.log(posts)
  return (
    <>
    <CommentPageCard post={posts}/>
    <CommentSection post={posts}/>
    
    </>
  )
}

export default CommentPage




 





