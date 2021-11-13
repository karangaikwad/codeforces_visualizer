import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./components/search";
import Userrating from "./components/userrating";
function App() {
  const [userid, setUserid] = useState("karanrg");
  useEffect(() => {}, [userid]);
  function handleclick(str) {
    setUserid(str);
  }
  return (
    <>
      <SearchBar handleclick={handleclick} />
      <Userrating name={userid} />
    </>
  );
}

export default App;
