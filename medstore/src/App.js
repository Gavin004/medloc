import React from 'react';
import './App.css';
import Nav from '../src/components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/about';
import AnnualReport from './components/pages/annual';
import Login from './components/Login'
 import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";




function App() {
	



return (
	<BrowserRouter>
	<UserAuthContextProvider>
	<Nav/>
	<Routes>
		<Route path="/" element={<Nav/>} />
		<Route index element={<Home/>} />
		<Route path='/about' element={<About/>} />
		<Route path='/annual' element={<ProtectedRoute><AnnualReport/></ProtectedRoute>} />
		<Route path='/Login' element={<Login/>} />
	</Routes>
	</UserAuthContextProvider>
	</BrowserRouter>
);
}

export default App;
