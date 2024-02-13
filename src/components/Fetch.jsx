import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


const Fetch = () => {
    // let endPoint = "https://api.github.com/users"
    // let endPoint = "https://www.googleapis.com/youtube/v3"
    // let endPoint = "https://musica-api.up.railway.app/popular"
    let endPoint = ""
    const [data, setData] = useState()
    const fetchApi = ()=>{
       axios.get(endPoint)
      .then((response)=>{
        console.log(response.data);
        setData( response.data);
      })
      .catch((err)=>{
        console.log(err)
      });
    };
  

  return (
    <div>
          <h1>Fetch Api</h1>
        <button className="Fetch" onClick={fetchApi}>
            FETCH
        </button>
        {data.map((item, index) => (
            <div key={index}>
                <h1>{item.name}</h1>
            </div>
        ))}
    </div>
  )
}

export default Fetch