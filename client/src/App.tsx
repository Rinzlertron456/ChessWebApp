import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {ChessGame} from "./Pages/ChessGame.tsx";
import {LandingPage} from "./Pages/LandingPage.tsx";
import './App.css'
function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/chessGame" element={<ChessGame />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
