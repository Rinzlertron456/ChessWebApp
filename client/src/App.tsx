import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {ChessGame} from "./Pages/ChessGame.tsx";
import {LandingPage} from "./Pages/LandingPage.tsx";
import './App.css'
function App() {
  return (
    <>
        <div className="min-h-screen bg-bgMain text-textMain">
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
