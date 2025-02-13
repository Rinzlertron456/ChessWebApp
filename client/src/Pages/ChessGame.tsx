import {ChessBoard} from "./ChessBoard.tsx";

export const ChessGame = () =>{
    return (
        <>
            <div className="justify-center flex">
                <div className="pt-8 max-w-screen-lg ">
                    <div className="grid grid-cols-6 gap-4 w-full">
                        <div className="col-span-4 bg-red-200 w-full">
                            <ChessBoard/>
                        </div>
                        <div className="col-span-2 bg-green-200 w-full">
                            <button>Start the Game</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}