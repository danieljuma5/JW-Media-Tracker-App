import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentCard from './CommentCard';
import axios from 'axios';
import ErrorAlert from './ErrorAlert';

function CommentSection({post,setPost,user}) {
  const [comment, setComment] = useState('');
  const [showError, setShowError] = useState(false);
  const {postId} = useParams()

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = (event) => {
    event.preventDefault();
    if (user) {

      axios.post('/comments',{
        body: comment,
        post_id: postId,
        user_id:  user.id
      })
      .then((r) => {
       setPost((prevState) => ({
            ...prevState,
            comments: [...prevState.comments, r.data]
          }));
        })
    .catch((err) => {
          console.log(err.message);
        });
    } else {
     setShowError(true)
    }
    console.log('Submitted comment:', comment);
    setComment('');
  };

  return (
    <>
      {showError && <ErrorAlert />}
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion ({post.comments.length})</h2>
        </div>
        <form className="mb-6" onSubmit={handleSubmitComment}>
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
    
            {post.comments.map((comment,index) => (
              <ul key={index}>
                <li >
                  <CommentCard setComment={setComment} setPost={setPost} comment={comment} user={user}/>
                </li>
              </ul>
            ))}
          </div>
    </section>
    </>
  );
}

export default CommentSection;
