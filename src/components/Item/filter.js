import React from "react";
import { useState } from "react";


function filter(){

    const [find, setFind] = useState("");

    return (
      <input
        id="filter"
        name="filter"
        type="text"
        value={find}
        onChange={(event) => setFind(event.target.value)}
      />
    );

}

export default filter;