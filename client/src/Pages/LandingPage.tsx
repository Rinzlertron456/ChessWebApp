import {useNavigate} from "react-router-dom";

export const LandingPage = () => {
    const navigate = useNavigate();
    const handleLetsPlay=() =>{
        navigate("/chessGame");
    }

    return (
        <>
            <div className="land-container flex justify-content-evenly" style={{backgroundColor:"#536d99"}}>
                <div className="desc-container text-center" style={{margin:"10rem auto 5rem", color:"aliceblue"}}>
                    <h1 className="mb-5">Welcome to 3D Chess Game</h1>
                    <h2 className="mb-5">This is a multiplayer online chess game with a 3D environment.</h2>
                    <div className="button-container flex gap-5" style={{marginLeft:"18rem", width:"44%"}}>
                        <button className=" btn bg-blue-950" style={{border:"2px solid aliceblue", color:"aliceblue"}}>Play with AI</button>
                        <button className=" btn bg-blue-950" style={{border:"2px solid aliceblue", color:"aliceblue"}} onClick={()=>handleLetsPlay()}>Play with Friend</button>
                    </div>
                </div>
                <div className="img-container">
                    <img className="w-full h-dvh" src={"/chessboard.jpeg"} alt="3D Chess Board"/>
                </div>
            </div>
        </>
    );
};
