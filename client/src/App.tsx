import { useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css'
import {LandingPage} from "./Pages/LandingPage.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/chess/:id" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
      <button className="bg-red-200 ">Join here</button>
    </>
  )
}

export default App
