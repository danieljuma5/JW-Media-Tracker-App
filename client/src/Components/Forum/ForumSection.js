import React from "react"

const ForumSection = ({forumPost}) => {
  console.log(forumPost)
  return (
   <>
    <>
  <article className="flex items-start space-x-6 p-6 rounded-lg shadow-lg">
    <div className="min-w-0 relative flex-auto">
      <div className="flex justify-end">
        <div className="flex items-center space-x-1">
          <dt className="text-sky-500">
            <img className="rounded-full w-8 h-8" src={forumPost.user.avatar_url} alt="Avatar" />
          </dt>
          <dd>{forumPost.user.username}</dd>
        </div>
      </div>
      <h2 className="font-semibold text-gray-700 dark:text-gray-400 truncate pr-20">{forumPost.category}</h2>
      <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
        <div className="flex-none w-full mt-2 font-normal">
          <dt className="sr-only">Body</dt>
          <dd className="text-slate-400">
            <div className="bg-white rounded-md p-4">
              {forumPost.description}
            </div>
          </dd>
        </div>
        <div className="flex-none w-full mt-2 font-normal flex items-center justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Reply</button>
          <span className="text-gray-500 ml-2">{forumPost.forum_replies.length}</span>
        </div>
      </dl>
    </div>
  </article>
  <hr className="my-4 border-gray-300" />
</>
   </>


  )
}

export default ForumSection