import {useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChessKing, faMicrochip, faRobot} from "@fortawesome/free-solid-svg-icons";
import {Button} from "../Components/Button.tsx";
export const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex w-screen h-screen" style={{backgroundColor:"#8B4513", boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)"}}>
                <div className="desc-container text-center position-relative justify-end mt-48 text-amber-50">
                    <h1 className="mb-5">Welcome to 3D Chess Game</h1>
                    <h2 className="mb-5">This is a multiplayer online chess game with a 3D environment.</h2>
                    <div className="button-container flex gap-5 ml-64 w-75">
                        <div className="buttons flex gap-5">
                            <Button>Play with AI</Button>
                            <Button onClick={()=>{navigate("/chessGame")}}>Play with Friend</Button>
                        </div>
                    </div>
                </div>
                <div className="img-container">
                    <img className="size-full" src={"/chessboard.jpeg"} alt="3D Chess Board"/>
                </div>
            </div>
        </>
    );
};