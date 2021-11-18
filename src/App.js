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
    <div className="aaa">

    
       <SearchBar handleclick={handleclick} /> 
       </div>
       <div className="aaa">
       <Userrating name={userid} /> 
       </div>
       <div className="aaa">

       <Submissiontable name={userid} /> 
       </div>
       <div className="aaa">
      <Contesttable name={userid} />
      </div>
    </>
  );
}

export default App;
