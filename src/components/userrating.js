
import {useState,useEffect} from "react";

function Userrating(props) {
  const [userdata, setUserdata] = useState(null);
  const url = "https://codeforces.com/api/user.info?handles=karanrg";
  useEffect(() => {
    getData();
    async function getData() {
      const response = await fetch(url);
      const data = await response.json();

      setUserdata(data);
    }
    
    
    
  }, []);
  console.log(userdata);
  return (
    <> {userdata && <h1>
         {userdata.result[0].rating}
      </h1>  } 
      </>   
    
  );
}


export default Userrating;