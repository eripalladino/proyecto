import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import CardUser from '../../components/CardUser/CardUser';
import { Link } from 'react-router-dom';


const Category = () => {
  const [chars, setChars] = useState([]);
  let { categoryId } = useParams();
  console.log(categoryId)
  console.log(chars)

  let filteredCharacters = chars.filter((item) => {
    return item.category === categoryId;
  });
  useEffect(() => {

    axios("https://dummyjson.com/products").then(json => setChars(json.data.products))

  }, []);
  return (

    <div className="Cards-List">

      {filteredCharacters.map((char) => {
        return (
          <div style={{margin: 10}} key={char.id}>
         <Link to={`/item-detail/${char.id}`}>
         <CardUser char={char}/>
         </Link>
        </div>
        )
      })}
    </div>
  )
}

export default Category;