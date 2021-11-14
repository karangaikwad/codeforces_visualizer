import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./components/search";
import Userrating from "./components/userrating";
import Contesttable from "./components/contesttable";
import Submissiontable from "./components/submissiontable";
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

      {/* <Submissiontable name={userid} /> */}
      {/* <Contesttable name={userid} /> */}
    </>
  );
}

export default App;
