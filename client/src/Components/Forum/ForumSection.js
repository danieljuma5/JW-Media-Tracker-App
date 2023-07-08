import React from "react";

const ForumSection = ({ forumPost }) => {
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleString("en-US", options);
  };

  return (
    <>
      <article className="flex items-start space-x-6 p-6 rounded-lg shadow-lg">
        <div className="min-w-0 relative flex-auto">
          <div className="flex justify-end">
            <div className="flex items-center space-x-1">
              <dt className="text-sky-500">
                <img
                  className="rounded-full w-8 h-8"
                  src={forumPost.user.avatar_url}
                  alt="Avatar"
                />
              </dt>
              <dd>{forumPost.user.username}</dd>
            </div>
          </div>
          <h2 className="font-semibold text-gray-700 dark:text-gray-400 truncate pr-20">
            {forumPost.category}
          </h2>
          <span className="text-gray-500 text-xs mb-2">
            {formatDate(forumPost.created_at)}
          </span>
          <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
            <div className="flex-none w-full mt-2 font-normal">
              <dt className="sr-only">Body</dt>
              <dd className="text-slate-900">
                <div className="bg-white rounded-md p-4">
                  {forumPost.description}
                </div>
              </dd>
            </div>
            <div className="flex-none w-full mt-2 font-normal flex items-center justify-end">
              <button className="flex items-center justify-center w-10 h-10 mr-2 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30 3C30 1.35 28.65 0 27 0H3C1.35 0 0 1.35 0 3V21C0 22.65 1.35 24 3 24H24L30 30V3ZM21 13.5H16.5V18C16.5 18.825 15.825 19.5 15 19.5C14.175 19.5 13.5 18.825 13.5 18V13.5H9C8.175 13.5 7.5 12.825 7.5 12C7.5 11.175 8.175 10.5 9 10.5H13.5V6C13.5 5.175 14.175 4.5 15 4.5C15.825 4.5 16.5 5.175 16.5 6V10.5H21C21.825 10.5 22.5 11.175 22.5 12C22.5 12.825 21.825 13.5 21 13.5Z"
                    fill="#1D4ED8"
                  />
                </svg>
              </button>
              <span className="text-gray-500 ml-2">
                {forumPost.forum_replies.length}
              </span>
            </div>
          </dl>
        </div>
      </article>
      <hr className="my-4 border-gray-300" />
    </>
  );
};

export default ForumSection;
