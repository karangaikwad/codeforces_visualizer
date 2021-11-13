import "./App.css";
import useState from "react";
import Search from "./components/search";
import Search from "./components/userrating";
function App() {
  const [userid, setUserid] = useState(null);
  function handleclick(str) {
    setUserid(str);
  }
  return (
    <>
      {/* <Search handleclick={handleclick} /> */}
      {/* <Userrating /> */}
    </>
  );
}


export default App;