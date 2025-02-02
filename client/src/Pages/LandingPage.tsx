
export const LandingPage = () => {
    return (
        <>
            <div className="container">
                <div>Welcome to 3D Chess Game</div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <img src={"/chessboard.jpeg"} alt="3D Chess Board"/>
                </div>
            </div>
            <button className="bg-red-200 ">Join here</button>
        </>
    );
};
