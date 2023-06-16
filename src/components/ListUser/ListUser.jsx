import axios from "axios";
import React, {useState, useEffect} from 'react'
import CardUser from "../CardUser/CardUser"
import "./ListUser.css"


const ListUser = () => {
    const [chars, setChars] = useState([]);

    useEffect(() => {
       
      axios("https://fakestoreapi.com/products").then(json => setChars(json.data))
    
            
    }, []);

  return (
    
    <div className="Cards-List">
    
        {chars.map((char) => {
            return(
                <div style={{margin: 10}} key={char.id}>
                    <CardUser char={char}/>
                </div>
            )
        })}        
    </div>
  );
};

export default ListUser