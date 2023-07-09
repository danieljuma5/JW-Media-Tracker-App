import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ErrorModal from './ErrorModal';
import ForumRepliesCards from './ForumRepliesCards';


const ForumReplies = ({user}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState(false);
  const [comment,setComment] = useState('')
  const [forumPost, setForumPost] = useState([]);
  const {forumPostId} = useParams()

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

    const handleSubmitComment = (event) => {
    event.preventDefault();
      axios.post('/forum_replies',{
        body: comment,
        forum_post_id: forumPostId,
        user_id:  user.id
      })
      .then((r) => {
       setForumPost((prevState) => ({
            ...prevState,
            forum_replies: [...prevState.forum_replies, r.data]
          }));
        })
    .catch((err) => {
          console.log(err.message);
        });
    console.log('Submitted comment:', comment);
    setComment('');
  };

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
  console.log(forumPost,showError,comment)
  
  return (
    <div>
      {showError ? <ErrorModal/> :
      (<div>
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion ({forumPost.forum_replies.length})</h2>
        </div>
        <form className="mb-6"  onSubmit={handleSubmitComment}>
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <label htmlFor="comment" className="sr-only">Your comment</label>
          <textarea
      id="comment"
      rows="6"
      value={comment}
      onChange={handleCommentChange}
      className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
      placeholder="Write a comment..."
      required
    ></textarea>
      </div>
      <button
      type="submit"
      className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-1 focus:ring-blue-200 hover:bg-blue-500"
    >
      Post comment
    </button>
    </form>
    
            {forumPost.forum_replies.map((reply) => (
          <ul>
            <li>
              <ForumRepliesCards setComment={setComment} user={user} post={forumPost} setForumPost={setForumPost} reply={reply} />
            </li>
          </ul>
        ))}
          </div>
    </section>
      </div>)
    }
    </div>
  )
  
  // Render loading state until the posts are fetched
  if (isLoading) {
  }
  
}

export default ForumReplies

