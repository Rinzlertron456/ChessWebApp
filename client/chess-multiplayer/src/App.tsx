import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/"/>
            </Routes>
        </BrowserRouter>
        <div className="container text-center">
            <h1>Welcome to Chess App</h1>
            <p>This is a simple implementation of a Chess game using React and WebSockets.</p>
            <p>To play, open two tabs in your browser and navigate to <a href="http://localhost:3000">localhost:3000</a></p>
            <button className="bg-red-500">Join the lobby</button>
            <p>Enjoy the game!</p>
        </div>
    </>
  )
}

export default App
