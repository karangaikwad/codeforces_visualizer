import { useState, useEffect } from "react";


function Submissiontable(props) {
  const [userdata, setUserdata] = useState(null);
  const [usersub, setUsersub] = useState(null);
  const [usersolved, setUsersolved] = useState(null);
  const [useraverage, setUseraverage] = useState(null);
  useEffect(() => {
    getData();
    async function getData() {
      const response = await fetch(
        "https://codeforces.com/api/user.status?handle=" + props.name
      );
      const data = await response.json();

      setUserdata(data);
    }
  }, [props.name]);

  useEffect(() => {
    if (userdata) {
      console.log(userdata.result);
      const mySet = new Set();
      userdata.result.map((problem) => {
        mySet.add(problem.problem.name);
      });
      console.log(mySet);
      setUsersub(mySet);
    }
  }, [userdata]);
  useEffect(() => {
    if (userdata) {
      console.log(userdata.result);
      const mySet = new Set();
      for(var i=0; i<userdata.result.length ; i++){
          if(userdata.result[i].verdict=="OK")
          {
        mySet.add(userdata.result[i].problem.name);}
      };
      console.log(mySet);
      setUsersolved(mySet);
    }
  }, [userdata]);
  

  

  return <> {usersolved && usersub && userdata && <table className="table1">
    <tr>
      <th>Some no. about</th>
      
      <th>{props.name}</th>
    </tr>
    <tr>
      <td> tried - </td>
      <td>{usersub.size}</td>
      
     
    </tr>
    <tr>
    <td> solved - </td>
      <td>{usersolved.size}</td>
      
    </tr>
  </table>
  }
  
  </>;
}

export default Submissiontable;