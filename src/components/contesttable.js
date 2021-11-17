import { useState, useEffect } from "react";

function Contesttable(props) {
  const [userdata, setUserdata] = useState(null);
  const [bestrank, setRank] = useState(99999);
  const [wrostrank, setwrost] = useState(0);
  const [max_up, setmax] = useState(0);
  const [max_down, setdown] = useState(99999);
  useEffect(() => {
    getData();
    async function getData() {
      const response = await fetch(
        "https://codeforces.com/api/user.rating?handle=" + props.name
      );

      const data = await response.json();
      setRank(99999);
      setUserdata(data);
    }
  }, [props.name]);
  // Function for calulating best rank
  useEffect(() => {
    if (userdata) {
      let temp = 99999;
      for (let i = 0; i < userdata.result.length; i++) {
        if (userdata.result[i].rank < temp) {
          temp = userdata.result[i].rank;
          console.log(userdata.result[i].rank);  
        }
      }
      setRank(temp);
    }
  }, [userdata]);

  // function for calculating wrost rank
  useEffect(() => {
    if (userdata) {
      let temp = 0;
      for (let i = 0; i < userdata.result.length; i++) {
        if (userdata.result[i].rank > temp) {
          temp = userdata.result[i].rank;
          console.log(userdata.result[i].rank);  
        }
      }
      setwrost(temp);
    }
  }, [userdata]);
  // Function for calculating Max_up
  useEffect(() => {
    if (userdata) {
      let temp = 0;
      for (let i = 0; i < userdata.result.length; i++) {
        if ((userdata.result[i].newRating-userdata.result[i].oldRating) > temp) {
          temp = userdata.result[i].newRating-userdata.result[i].oldRating;
          console.log(userdata.result[i].rank);  
        }
      }
      setmax(temp);
    }
  }, [userdata]);
  // Function for calculating Max_down
  useEffect(() => {
    if (userdata) {
      let temp = 0;
      for (let i = 0; i < userdata.result.length; i++) {
        if ((userdata.result[i].newRating-userdata.result[i].oldRating) < temp) {
          temp = userdata.result[i].newRating-userdata.result[i].oldRating;
          console.log(userdata.result[i].rank);  
        }
      }
      setdown(temp);
    }
  }, [userdata]);

  return (
    <>  
      <table className="mdl-data-table mdl-js-data-table" data-upgraded=",MaterialDataTable" >
        <tbody>
          <tr className="mdl-color--teal-300">
            <th className="mdl-data-table__cell--non-numeric">Contests of</th>
            <th className="handle-text">{userdata && <p>{props.name}</p>}</th>
          </tr>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">
              Number of contests
            </td>
            <td id="contestCount">
              {userdata && <p>{userdata.result.length}</p>}
            </td>
          </tr>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">Best rank</td>
            <td id="best">{userdata && <p>{bestrank}</p>}</td>
          </tr>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">Worst rank</td>
            <td id="worst">{userdata && <p>{wrostrank}</p>}</td>
          </tr>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">Max up</td>
            <td id="maxUp">{userdata && <p>{max_up}</p>}</td>
          </tr>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">Max down</td>
            <td id="maxDown">{userdata && <p>{max_down}</p>}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Contesttable;