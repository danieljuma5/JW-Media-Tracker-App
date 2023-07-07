import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import axios from 'axios';

const CommentPage = () => {
  const [data,setData] = useState([])
  const {postId} = useParams()
  console.log(postId)
  useEffect(() => {
    axios.get(`/posts/${postId}`)
    .then((r) => console.log(r))
  },[])
  return (
    <div>CommentPage</div>
  )
}

export default CommentPage




 





