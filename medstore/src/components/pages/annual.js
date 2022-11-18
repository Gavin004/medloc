
import React, { useState,useEffect } from 'react';
import Axios from 'axios';
//import { useParams } from 'react-router-dom';
const AnnualReport = () => {
	const [medName, setMedName] = useState('');
	const [expiryDays,setDay] = useState('');
	//const [district,setDistrict] = useState('');

	//const [newMedName,setNewMedName] = useState("");

	const addToList = () =>{
		console.log(medName + expiryDays);
		Axios.post("http://localhost:3001/insert",{
		medName: medName,
		expiryDays: expiryDays,
		//district: district,
    });
};

/*const deleteFood = () =>{
	Axios.post("http://localhost:3001/delete",
	{
		medName:medList.medName,
		expiryDays:medList.expiryDays,
	});
}; */

const deleteMed = (id) =>{
	Axios.delete(`http://localhost:3001/delete/${id}`)
};

const [medList,setMedList]= useState([])

useEffect(()=>{
	Axios.get("http://localhost:3001/read").then((response)=>{
		setMedList(response.data);

	});
}, []);

return (
	<div
	style={{
		textAlign:'center',
		display: 'flex',
		flexDirection:'column',
		justifyContent: 'center'
		//alignItems: 'Right',
		//height: '100vh'
	}}
	>
	<h1>UPLOAD</h1>
	<label>Medicine Name</label>
	<input type="text" 
	onChange={(event) =>{
		setMedName(event.target.value);
	}}/>
	<label>Address line(city/district)</label>
	<input type="text"
	onChange={(event) =>{
	    setDay(event.target.value);
	}} />
	
	<button onClick={addToList}>Add it</button>

	<h1>Med List</h1>
	{medList.map((val,key)=>{
		return(
			<div key={key} style={{
				
				justifyContent: 'center',
				color: 'white',
				margin: '1%',
				padding:'1%',
				width:'20%',
			
				background:'steelblue'
			  }}>
				
				<h1>{val.medName}</h1> 
				<h1>{val.expiryDays}</h1>
				
				
				<button onClick={()=>deleteMed(val._id)}>Delete</button>

			</div>
		);
	})}

	</div>
);
};

export default AnnualReport;
