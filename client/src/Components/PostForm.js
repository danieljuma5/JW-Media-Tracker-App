import React, { useState } from 'react';
import axios from 'axios';
import ErrorBanner from './ErrorBanner';

const PostForm = ({user}) => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [errors,setErrors] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/posts', {
        user_id: user.id,
        title,
        image_url: imageUrl,
        description,
      });
      console.log('Post created:', response.data);
      setDescription('')
      setImageUrl('')
      setTitle('')
    } catch (error) {
      console.error('Error creating post:', error);
      setErrors(error.response.data.errors)
      // Handle error scenario
    }

  };
  return (
    <div>
      <form className="w-full max-w-lg px-8" onSubmit={handleSubmit}>
        {/* Title input */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label htmlFor="title" className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2">
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>
        {/* Image URL input */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label htmlFor="imageUrl" className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2">
              Image URL
            </label>
            <input
              id="imageUrl"
              type="text"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>
        {/* Description input */}
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label htmlFor="description" className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2">
              Description
            </label>
            <input
              id="description"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
          </div>
        </div>
        {/* Submit button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-700 text-white rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
          </div>
      </form>
      {errors.length > 0 && (
        <div className="w-full max-w-lg px-8 mt-4">
          {errors.map((error) => 
          <ul>
            <li>
            <ErrorBanner key={error} error={error} />
            </li>
          </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default PostForm;
