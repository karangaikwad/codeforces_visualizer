import React, { useState } from "react";
function SearchBar(props) {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(name);
    props.handleclick(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="spacinginsubmitbutton">
        
        <input

          type="text"
          placeholder="USERNAME" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}
export default SearchBar;
