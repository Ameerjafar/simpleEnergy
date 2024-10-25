import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import AddVechicle from "./component/AddVechicle";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  
  const [allVehicles, setAllVehicles] = useState([{}])
  return (
    <div>
        <BrowserRouter>
            <Routes>
              <Route path = 'add-vechicle' element = { <AddVechicle setAllVehicles={setAllVehicles} />}></Route>
              <Route path = '/' element = { <Dashboard allVehicles={ allVehicles } />}> </Route>
            </Routes>
        </BrowserRouter>
        <ToastContainer />
    </div>
  )
}

export default App;

