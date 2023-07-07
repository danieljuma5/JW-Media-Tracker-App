import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentPageCard from './CommentPageCard';
import CommentSection from './CommentSection';

const CommentPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    axios.get(`/posts/${postId}`)
      .then((response) => {
        setPosts(response.data);
        setIsLoading(false); // Mark the loading as false once the posts are fetched
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false); // In case of an error, mark the loading as false to handle the error state
      });
  }, [postId]);

  // Render loading state until the posts are fetched
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <CommentPageCard post={posts} />
      <CommentSection />
    </>
  );
};

export default CommentPage;
