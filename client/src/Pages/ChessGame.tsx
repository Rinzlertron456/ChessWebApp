import {ChessBoard} from "./ChessBoard.tsx";
import {useSocket} from "../Hooks/useSocket.tsx";
import {Button} from "../Components/Button.tsx";
import {useEffect, useState} from "react";
import { Chess } from "chess.js";


export const START_GAME = "start_game";
export const MOVE_PIECE = "move_piece";
export const GAME_OVER = "game_over";
export const ChessGame = () =>{
    const socket = useSocket();
    const [chess, setChess] = useState(new Chess());
    const [board, setBoard] = useState(chess.board());
    const [started, setStarted] = useState(false);
    useEffect(() =>{
        if(!socket) {
            return;
        }
        socket.onmessage = (event) => {
            const message = JSON.parse(event.data)
            console.log(message);
            switch(message.type) {
                case START_GAME:
                    setBoard(chess.board());
                    setStarted(true);
                    console.log("Game started");
                    break;
                case MOVE_PIECE:
                    const move = message.payload;
                    chess.move(move);
                    setBoard(chess.board());
                    console.log("Received move:", move);
                    break;
                case GAME_OVER:
                    console.log("Game over. Winner:", message.payload.winner);
                    break;
            }
        }
    },[socket])
    if(!socket) return <div>Connecting...</div>
    return (
        <>
            <div className="justify-center flex bg-slate-950 w-screen h-screen">
                <div className="pt-8 max-w-screen-lg ">
                    <div className="grid grid-cols-6 gap-4 w-full">
                        <div className="col-span-4 w-full flex justify-center">
                            <ChessBoard chess = {chess} setBoard  = {setBoard} socket = {socket} board = {board}/>
                        </div>
                        <div className="col-span-2 bg-slate-900 w-full flex justify-center">
                            <div className="pt-8">
                                {!started&&<Button onClick={()=>socket.send(JSON.stringify({
                                type: START_GAME
                            }))}>Let's Play</Button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}