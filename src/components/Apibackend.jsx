import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Apibackend = (req, res) => {
  const [data, setData] = useState([])
    let Url = "http://localhost:3000/display"
   useEffect(() => {
     axios.get(Url).then((res)=>{
      console.log(res.data)
      setData(res.data)
     }).catch((err)=>{
      console.log(err)
     }
     )
     }, [])

  return (
    <div>
      <h1>ZHellllllldkdfm</h1>
      {
        data.map((data)=>(
          <div key={data.id}>
            <div className="flex items-center text-left gap-40 px-7">
              <h1 className="w-1/2"key={data.firstName}></h1>
              <h1 className="text-left w-1/2"key={data.lastName}></h1>
            </div>
            <div className="mt-10 flex">
              <h1 key={data.email}></h1>
              <h1 key={data.gender}></h1>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Apibackend