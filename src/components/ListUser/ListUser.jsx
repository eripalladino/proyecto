import axios from "axios";
import React, {useState, useEffect} from 'react'
import CardUser from "../CardUser/CardUser"
import "./ListUser.css"

import {Link} from "react-router-dom"

const ListUser = () => {
    const [chars, setChars] = useState([]);

    useEffect(() => {
       
      axios("https://dummyjson.com/products").then(json => setChars(json.data.products))
            
    }, []);

  return (
    
    <div className="Cards-List">
    
        {chars.map((char) => {
            return(
                <div style={{margin: 10}} key={char.id}>
                  <Link to={`detail/${char.id}`}>
                  <CardUser char={char}/>
                  </Link>
                </div>
            )
        })}        
    </div>
  );
};

export default ListUser