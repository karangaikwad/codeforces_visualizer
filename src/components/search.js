import React,{useState} from "react";


// const SearchBar = () => (
//     <form action="/" method="get">
//         <div class="col-2">
//             <label htmlFor="header-search">
//             <span className="visually-hidden">Search blog posts</span>
//         </label>
//         <input
//             type="text"
//             id="header-search"
//             placeholder="Enter username"
//             name="str" 
//         />
//         <button type="submit">search</button>
//         {/* <button onClick={handleclick}>
//            SearchBar
//         </button> */}
//         </div>
//     </form>
// );


// const Search = () =>{
//     const [userid, setuserid] = useState("");
//     const inputEvent = (event) =>{
//         const data = event.target.value;
//         //console.log(data);
//         setuserid(event.target.value)
//         setuserid(data);
//     };
//     return(
//         <>
//         <div className="searchbar">
//             <input 
//             type="text" 
//             placeholder="Search Anything" 
//             value={userid}
//             onChange={inputEvent}
//             />
//             <button onclick={()=>setuserid(true)}>print data</button>
//         </div>
//         </>
//     );
// };

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
