import React, { useState } from 'react';
import axios from 'axios';

const CommentCard = ({ comment,user,post,setPost }) => {

  const isCurrentUser = user && comment.user_information.id === user.id;
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownClass = isDropdownOpen ? 'block' : 'hidden';

  // Separate date and time from the datetime string
  const createdAt = new Date(comment.created_at);
  const date = createdAt.toDateString();
  const time = createdAt.toLocaleTimeString();

  function handleDelete(id) {
    axios.delete(`/comments/${comment.id}`)
  .then(response => {
    console.log(`Deleted post with ID ${comment.id}`);
    setPost(prevPost => ({
        ...prevPost,
        comments: prevPost.comments.filter(prevComment => prevComment.id !== comment.id)
      }));
  })
  .catch(error => {
    console.error(error);
  });
  }

  return (
    <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img className="mr-2 w-6 h-6 rounded-full" src={comment.user_information.avatar_url} alt={comment.user_information.username} />
            {comment.user_information.username}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span>{date}</span>
            <span> at </span>
            <span>{time}</span>
          </p>
        </div>

        {isCurrentUser && <div className="relative">
          <button
            id="dropdownComment1Button"
            onClick={toggleDropdown}
            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
          >
            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            <span className="sr-only">Comment settings</span>
          </button>
          <div
            id="dropdownComment1"
            className={`absolute top-full right-0 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 ${dropdownClass}`}
          >
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
              <li>
                <div className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</div>
              </li>
              <li>
                <div onClick={handleDelete} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</div>
              </li>
            </ul>
          </div>
        </div>}
      </footer>
      <p className="text-gray-500 dark:text-gray-400">{comment.body}</p>
      <div className="flex items-center mt-4 space-x-4">
      </div>
    </article>
  );
};

export default CommentCard;
