import React from 'react'

const CommentPageCard = ({post}) => {
  return (
    <div className="w-4/5 mx-auto pt-6">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-2" style={{ marginLeft: '5px', width: '80%', minHeight: '200px' }}>
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={post.image_url} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <div className="flex items-center justify-between mb-2">
            <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ float: 'left' }}>{post.title}</h5>
            <div className="flex items-center" style={{ float: 'right' }}>
              <img className="w-8 h-8 rounded-full mr-2" src={post.user.avatar_url} alt="" />
              <p className="text-sm text-gray-700 dark:text-gray-400">
                {post.user.username}
              </p>
            </div>
          </div>
          <div className="overflow-y-auto flex-grow">
            <p className="font-normal text-gray-700 dark:text-gray-400">{post.description}</p>
          </div>
          </div>
        </div>
      </div>
  )
}

export default CommentPageCard