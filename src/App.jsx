//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import FormAction from './formAction';

export default function App() {
  // For testing purposes, you can remove this block in a production scenario
  // const sampleData = [
  //   {
  //     name: "Gauri",
  //     age: 25,
  //     address: "Punjab",
  //     email: "gaurisharma@gmail.com"
  //   },
  //   {
  //     name: "Aim More",
  //     age: 19,
  //     address: "bh1 apartments",
  //     email: "aim@aimmore.in"
  //   }
  // ];

  // const sampleDataString = JSON.stringify(sampleData);
  // localStorage.setItem("sampleData", sampleDataString);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/formAction' element={<FormAction />} />
      </Routes>
    </Router>
  );
}
