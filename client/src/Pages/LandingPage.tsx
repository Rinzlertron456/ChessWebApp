
export const LandingPage = () => {
    return (
        <>
            <div className="land-container flex justify-content-evenly">
                <div className="desc-container text-center" style={{margin:"10rem auto 4rem"}}>
                    <h1 className="">Welcome to 3D Chess Game</h1>
                    <h2 className="mb-10">This is a multiplayer online chess game with a 3D environment.</h2>
                    <button className="bg-blue-950">Play with AI</button>
                    <button className="bg-blue-950">Play with a Friend</button>
                </div>
                <div className="img-container">
                    <img className="w-full h-dvh" src={"/chessboard.jpeg"} alt="3D Chess Board"/>
                </div>
            </div>
        </>
    );
};
