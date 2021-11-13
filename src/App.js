import "./App.css";
import { useState, useEffect } from "react";
import Search from "./components/search";
import Userrating from "./components/userrating";
function App() {
  const [userid, setUserid] = useState(null);
  function handleclick(str) {
    setUserid(str);
    console.log(userid);
  }
  return (
    <>
      <Search handleclick={handleclick} />
      <Userrating />
    </>
  );
}

export default App;
