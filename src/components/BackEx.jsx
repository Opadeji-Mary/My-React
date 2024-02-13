import axios from 'axios';
import React, { useEffect, useState } from 'react'

const BackEx = () => {
  const [data, setData] = useState([]);
  useEffect(() =>{
    axios.get("/api/users")
    .then((res) => {
        console.log(res.data.users);
        setData(res.data.users);
    });
  }, []);
  return (
    <div>BackEx
        {/* <div>
            {data.map(user) => {(
                <div key={user.id}></div>
            )}
        </div> */}
    </div>
  )
}

export default BackEx