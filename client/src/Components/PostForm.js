import React from 'react'

const PostForm = () => {
  return (
    <div>
      <form className="w-full max-w-lg px-8">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label htmlFor="grid-password" className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2">
        Title
      </label>
      <input
        id="grid-password"
        type="text"
        placeholder="Title"
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label htmlFor="grid-password" className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2">
        Image URL
      </label>
      <input
        id="grid-password"
        type="text"
        placeholder="image-URL"
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full px-3">
      <label htmlFor="grid-password" className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2">
        Description
      </label>
      <input
        id="grid-password"
        type="text"
        placeholder="Description"
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      />
      <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
    </div>
  <div className="flex justify-end">
    <button className="bg-indigo-600 text-white rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      Submit
    </button>
  </div>
</form>

    </div>
  )
}

export default PostForm