
// import { lazy } from 'react';
// import { Box } from "@mui/material";

import "./App.css";
import MenuSideBar from "./components/MenuSideBar";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import WareHouse from './components/wareHouse/WareHouse';
import Delivery from './components/delivery';
import DashBoard from "./components/DashBoard";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='container-fluid d-flex' style={{
          height:'100vh'
        }}>
        <MenuSideBar/>
        <Routes>
      <Route path="/" element={<DashBoard />}></Route>
      <Route path="ware-house" element={<WareHouse />}></Route>
      <Route path="delivery" element={<Delivery />}></Route>
    </Routes>
        
        </div>
    
  </BrowserRouter>
    </div>
  );
}

export default App;
