import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {ChessGame} from "./Pages/ChessGame.tsx";

import './App.css'
import {LandingPage} from "./Pages/LandingPage.tsx";

function App() {
  return (
    <>
        <div className="min-h-screen bg-blue-600">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/chessGame" element={<ChessGame />} />
            </Routes>
        </BrowserRouter>
        </div>
    </>
  )
}

export default App
