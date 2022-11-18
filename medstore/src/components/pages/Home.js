import React, { useState,useEffect } from 'react';
import Axios from 'axios';

const Home = () => {
  const [medList,setMedList]= useState([])

useEffect(()=>{
	Axios.get("http://localhost:3001/read").then((response)=>{
		setMedList(response.data);

	});
}, []);

  return (
    <div
      /*style={{
        
				justifyContent: 'center',
				color: 'brown',
				margin: '1%',
				padding:'1%',
				width:'20%',
			
				background:'yellow'
      }} */
    >
      
      {medList.map((val,key)=>{
		return(
			<div key={key} style={{justifyContent: 'center',
      color: 'brown',
      margin: '1%',
      padding:'1%',
      width:'25%',
    
      background:'yellow'}}>
	
				<h1>{val.medName}</h1> 
				<h1>{val.expiryDays}</h1>

			</div>
		);
	})}
    </div>
  );
};
  
export default Home;