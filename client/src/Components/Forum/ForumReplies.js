import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ErrorModal from './ErrorModal';


const ForumReplies = ({user}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState(false);
  const [forumpost, setForumPost] = useState([]);
  const {forumPostId} = useParams()

  console.log(forumpost,forumPostId)
  useEffect(() => {
    if (user) {
    axios.get(`/forum_posts/${forumPostId}`)
      .then((response) => {
        setForumPost(response.data);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false); 
      });
    }else {
      setShowError(true)
    }
  }, [forumPostId]);



  // Render loading state until the posts are fetched
  if (isLoading) {
    return <ErrorModal/>
  }

}

export default ForumReplies