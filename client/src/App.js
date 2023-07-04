import { useState, useEffect } from "react";
import {Routes,Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import LoginForm from "./Components/LoginForm";
import Home from "./Components/Home";
import SignUpForm from "./Components/SignUpForm";

function App() {
  const [user, setUser] = useState(null)

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
      </Routes>
    </div>
  );
}

export default App;
