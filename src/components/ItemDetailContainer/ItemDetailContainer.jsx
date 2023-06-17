import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

  const [data, setData] = useState({});
  let {id} = useParams();
    console.log(data)
    useEffect(() => {
       
      axios(`https://dummyjson.com/products/${id}`).then(json => setData(json.data))
            
    }, [id]);
  return (
    
    <div style={{display: "flex", justifyContent: "center", margin: 20 }}>
      
        <ItemDetail data={data}/>
  </div>
  )

}

export default ItemDetailContainer