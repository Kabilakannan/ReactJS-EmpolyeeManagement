import { useState } from "react";
import "./App.css";
import ListEMpolyeeComponent from "./ListEMpolyeeComponent";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import EmpolyeeComponent from "./Component/EmpolyeeComponent";
function App() {

  return (
    <BrowserRouter>
      <Header/>
       <Routes>
        <Route path='/' element={<ListEMpolyeeComponent/>}></Route>
        <Route path='/empolyees' element={<ListEMpolyeeComponent/>}></Route>
        <Route path='/add-empolyee' element={<EmpolyeeComponent/>}></Route>
        <Route path='/edit-empolyee/:id' element={<EmpolyeeComponent/>}></Route>
        </Routes>  
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
