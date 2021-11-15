import { useState, useEffect } from "react";

function Userrating(props) {
  const [userdata, setUserdata] = useState(null);

  useEffect(() => {
    getData();
    async function getData() {
      const response = await fetch(
        "https://codeforces.com/api/user.info?handles=" + props.name
      );
      const data = await response.json();

      setUserdata(data);
    }
  }, [props.name]);

  //   console.log(props.name);
  //   console.log(userdata);
  return <> {userdata && <h1>User Rating - {userdata.result[0].rating}</h1>}</>;
}

export default Userrating;
