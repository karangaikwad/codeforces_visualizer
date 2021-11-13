import React,{useState} from "react";

function Search(props) {
    const [data,setData]=useState(null)
    const [print,setPrint]=useState(false)
    
      function getData(val)
      {
        console.warn(val.target.value)
        if (setPrint) {
          setData(val.target.value)
          props.handleclick(val.target.value)
        }
      }
      return (
        <div className="App">
         {
           print?
           <h1> {data}</h1>
           :null
         }
        <input type="text"  />
        <button onClick={()=>setPrint(true)} onClick={getData} >Print Data</button>
        </div>
      );
}

export default Search;
