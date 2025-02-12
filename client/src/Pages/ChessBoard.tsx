export const ChessBoard = () =>{
    return (
        <>
            <div className="justify-center flex">
                <div className="pt-8 max-w-screen-lg" style={{border:"5px solid black"}}>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="col-span-4 bg-red-200">
                            <h4>ChessBoard</h4>
                        </div>
                        <div className="col-span-2 bg-green-200">
                            <button>Start the Game</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}