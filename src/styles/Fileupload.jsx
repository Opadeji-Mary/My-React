import axios from 'axios';
import React, { useEffect } from 'react'

const Fileupload = () => {
    let URL = "http://localhost:3000/upload "
    const fileChanger = (e) => {
        console.log(e.target.files[0]);
        let myImage = e.target.files[0];

        let reader = new FileReader();
        reader.readAsDataURL(myImage);
        reader.onload = () => {
            setmyFile(reader.result);
        };
    };
 
   const upload = ()=>{
    axios.post(URL, {myfile})
   }
  return (
    <div>
        <input type="file" onChange={(e) => fileChanger(e)} />
        <button onClick={upload}>Upload</button>
    </div>
  )
}

export default Fileupload