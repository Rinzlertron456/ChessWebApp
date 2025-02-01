import { WebSocket } from "ws";
import { Chess } from "chess.js";
import {GAME_OVER, MOVE_PIECE, START_GAME} from "./messages";


export class ChessGame{
    // Chess game logic goes here
    public player1: WebSocket;
    public player2: WebSocket;
    public board: Chess;
    private startTime: Date;
    private totalMoves = 0;

    constructor(player1: WebSocket, player2: WebSocket){
        this.player1 = player1;
        this.player2 = player2;
        this.board = new Chess();
        this.startTime = new Date();
        this.player1.send(JSON.stringify({
            type:START_GAME,
            payload: {
                color : "White",
            }
        }));
        this.player2.send(JSON.stringify({
            type:START_GAME,
            payload: {
                color : "Black",
            }
        }))
    }

    movePiece(socket: WebSocket, move: {
        from: string;
        to: string;
    }
    ) {
        // Check if it's this player's turn, and if the move is valid
        if(this.totalMoves % 2 === 0 && socket !== this.player1) {
            return;
        }
        if(this.totalMoves % 2 === 1 && socket!== this.player2) {
            return;
        }
        try{
            this.board.move(move);
            this.totalMoves++;
        } catch(e){
            console.log(e);
            return;
        }
        //Check if there is a checkmate and who did it
        if(this.board.isGameOver()){
            // const winner = this.board.isCheckmate()? this.board.turn : 'draw';
            this.player1.emit(JSON.stringify({
                type: GAME_OVER,
                payload: {
                    winner: this.board.turn() === "w" ? "Black" : "White"
                }
            }));
            this.player2.emit(JSON.stringify({
                type: GAME_OVER,
                payload: {
                    winner: this.board.turn() === "w" ? "Black" : "White"
                }
            }));
            return;
        }
        //Player confirmation on who should make the move if the game is not over
        if(this.totalMoves % 2 === 0){
            this.player2.send(JSON.stringify({
                type: MOVE_PIECE,
                payload: move
            }));
        }
        else{
            this.player1.send(JSON.stringify({
                type: MOVE_PIECE,
                payload: move
            }));
        }
        this.totalMoves++;
    }
}