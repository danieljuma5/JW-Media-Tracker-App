import { useState, useEffect } from "react";
import {Routes,Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import LoginForm from "./Components/LoginForm";
import Home from "./Components/Home";
import SignUpForm from "./Components/SignUpForm";
import Posts from "./Components/Posts";
import CommentPage from "./Components/CommentPage";
import ForumPage from "./Components/Forum/ForumPage";
import ForumReplies from "./Components/Forum/ForumReplies";

function App() {
  const [user, setUser] = useState(null)
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
  });
 }, []);

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/login" element={<LoginForm setUser={setUser}/>}/>
        <Route path="/signup" element={<SignUpForm setUser={setUser} />}/>
      <Route path="/" element={<Home user={user}/>}/>
      <Route path="/posts" element={<Posts posts={posts} setPosts={setPosts} />}/>
      <Route path="/posts/:postId" element={<CommentPage user={user}/>}/>
      <Route path="/forum" element={<ForumPage/>} />
      <Route path="/forum_posts/:forumPostId" element={<ForumReplies user={user}/>}/>
      </Routes>
    </div>
  );
}

export default App;
