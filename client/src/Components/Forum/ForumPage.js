import { useEffect, useState } from "react";
import axios from "axios";
import ForumSection from "./ForumSection";

const ForumPage = () => {
  const [forumPosts, setForumPosts] = useState([]);
  const [sortedPosts, setSortedPosts] = useState([]);
  
  useEffect(() => {
    axios
      .get('/forum_posts')
      .then((r) => {
        setForumPosts(r.data);
        setSortedPosts(r.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const sortByReplies = () => {
    const sorted = [...sortedPosts].sort((a, b) => b.forum_replies.length - a.forum_replies.length);
    setSortedPosts(sorted);
  };

  const sortByCreatedAt = () => {
    const sorted = [...sortedPosts].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    setSortedPosts(sorted);
  };

  return (
    <div>
      <div className="flex gap-1 justify-center my-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={sortByReplies}>
          Most Replies
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={sortByCreatedAt}>
          Newest
        </button>
      </div>
      <hr className="my-4 border-gray-300" />

      {sortedPosts.map((forumPost) => (
        <ul key={forumPost.id}>
          <li>
            <ForumSection setForumPosts={setForumPosts} forumPost={forumPost} />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ForumPage;
