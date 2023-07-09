import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ErrorModal from './ErrorModal';
import ForumRepliesCards from './ForumRepliesCards';


const ForumReplies = ({user}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState(false);
  const [forumpost, setForumPost] = useState([]);
  const {forumPostId} = useParams()

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
  console.log(forumpost,showError)
  
  return (
    <div>
      {showError ? <ErrorModal/> :
      <ForumRepliesCards forumpost={forumpost} />}
    </div>
  )

  // Render loading state until the posts are fetched
  if (isLoading) {
  }

}

export default ForumReplies