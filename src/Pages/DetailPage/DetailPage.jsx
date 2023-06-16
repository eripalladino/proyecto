//import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios";
import { useParams } from "react-router-dom";

import CardUser from "../../components/CardUser/CardUser";

const DetailPage = () => {
  const [char, setChar] = useState({});
  const [value, setValue] = useState();

  let {id} = useParams();
  let {description} = useParams();

  console.log(description)
  
    useEffect(() => {
       
      axios(`https://dummyjson.com/products/${id}`).then(json => setChar(json.data))
            
    }, [id]);

    useEffect(() => {
       
      axios(`https://dummyjson.com/products/${description}`).then(json => setValue(json.data))
            
    }, [description]);

  return (
    
    <div style={{display: "flex", justifyContent: "center"}}>
      <CardUser char = {char} value= {value}/>
    </div>
    
  )
}

export default DetailPage
