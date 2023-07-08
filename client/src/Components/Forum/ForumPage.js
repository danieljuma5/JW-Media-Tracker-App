import { useEffect, useState } from "react"
import axios from "axios"
import ForumSection from "./ForumSection"

const ForumPage = () => {
  const [forumPosts,setForumPosts] = useState([])
  useEffect(() => {
    axios.get('/forum_posts')
    .then((r) => setForumPosts(r.data))
    .catch((err) => console.log(err.message))

  },[])
  return (
    <div>
     <div className="flex gap-1 justify-center my-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Most Replies</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Newest</button>
    </div>
      <hr className="my-4 border-gray-300" />

      {forumPosts.map((forumPost) => {
        return (<ul>
          <li>
            <ForumSection forumPost={forumPost}/>
          </li>
        </ul>)
      })}
      ForumPage
      
    </div>
  )
}

export default ForumPage