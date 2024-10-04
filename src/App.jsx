import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./index.css"

function App() {

  let[data,setdata]=useState([])

  useEffect(()=>{ 
    axios.get("http://localhost:3000/user").then(x=>{(setdata(x.data))})},[]
  
  )
  console.log(data)
  return (
    <div id="mainDiv">
      <div id="mainsubDiv">
    <h1>Today 3 Birthday List</h1>
    <br />

      {data.map(x=>{return(<div className='personCard'>
                            <img src={x.image} className='personImg' />
                            <div>
                              <h2>Name : {x.name}</h2>
                              <h3>Age : {x.age}</h3>
                            </div>
                           </div>)})}
        <button onClick={()=>{setdata([])}}>Clear Data</button>
        
        </div>
        
    </div>
  );
}

export default App;
