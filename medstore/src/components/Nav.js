import React from "react";
import {Outlet,Link} from 'react-router-dom';
import { useNavigate } from "react-router";
import { useUserAuth } from "../Context/UserAuthContext";

function Nav()
{
 
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };  
    // console.log(user);  
    return(
        <>
       
        {
            
            user == null ?
            (
          
            <nav className="navbar navbar-expand-lg navbar-dark bg-success py-0">
  
            <ul className="navbar-nav">
               <li className="navbar" style={{marginLeft:"30px"}}>
                <Link className="navbar-brand" href="#"><h1 style={{fontSize:"50px"}}>Med Locator</h1></Link>
               </li>
                <li className="navbar" style={{marginLeft:"100px"}} >
                <Link to='/' className="nav-link active"><h2>Home</h2></Link>
                 
                </li>
                <li className="navbar" style={{marginLeft:"100px"}} >
                 <Link to='/about' className="nav-link active"><h2>About</h2></Link>
                </li>
                
                
                <li className="navbar" style={{marginLeft:"600px"}}>
                 <Link to='/login' className="nav-link active"><button type="button" className="btn btn-success" style={{fontFamily: 'Gemunu Libre',fontSize:"30px",paddingLeft:"20px",paddingRight:"20px"}}>Login</button></Link>
                </li>
                
                
            </ul>
        

           </nav>
        
            ):
            (
                <nav className="navbar navbar-expand-lg navbar-dark  py-0" style={{background:"#454B1B"}}>
  
            <ul className="navbar-nav">
               <li className="navbar" style={{marginLeft:"30px"}}>
                <Link className="navbar-brand" href="#"><h1 style={{fontSize:"50px",fontFamily:"sans-serif"}}>Med Locator</h1></Link>
               </li>
                <li className="navbar" style={{marginLeft:"100px"}} >
                <Link to='/' className="nav-link active"><h2>Home</h2></Link>
                 
                </li>
                
                <li className="navbar" style={{marginLeft:"100px"}} >
                 <Link to='/annual' className="nav-link active"><h2>IMPORT</h2></Link>
                </li>
                <li className="navbar" style={{marginLeft:"100px"}} >
                 <Link to='/about' className="nav-link active"><h2>About</h2></Link>
                </li>
                <li className="navbar" style={{marginLeft:"250px"}} >
                    <h3 style={{fontFamily: 'Gemunu Libre',color:'white'}}>Hello {user && user.email} !</h3>
                </li>
                <li className="navbar" style={{marginLeft:"50px"}}>
                <button type="button" className="btn btn-danger" onClick={handleLogout} style={{fontFamily: 'Gemunu Libre',fontSize:"30px",paddingLeft:"20px",paddingRight:"20px"}}>Logout</button>
                </li>
            </ul>
        

           </nav>
            )
        }
        <Outlet/>
        </>
    );
}

export default Nav;