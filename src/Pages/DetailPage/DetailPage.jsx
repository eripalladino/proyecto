//import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios";
import { useParams } from "react-router-dom";

import CardUser from "../../components/CardUser/CardUser";

const DetailPage = () => {
  const [char, setChar] = useState({});
  let {id} = useParams();
console.log(char)
    useEffect(() => {
       
      axios(`https://dummyjson.com/products/${id}`).then(json => setChar(json.data))
            
    }, [id]);
  return (
    
    <div style={{display: "flex", justifyContent: "center", margin: 20 }}>
      <CardUser char={char}/>
    </div>
    
  )
}

export default DetailPage
