import { useState, useEffect } from "react";
import {Routes,Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import LoginForm from "./Components/LoginForm";
import Home from "./Components/Home";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/login" element={<LoginForm/>}/>
      <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
