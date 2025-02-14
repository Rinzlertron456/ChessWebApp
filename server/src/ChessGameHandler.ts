import { WebSocket } from "ws";
import {ChessGame} from "./ChessGame";
import {MOVE_PIECE, START_GAME} from "./messages";

export class ChessGameHandler{
    // ChessGame logic goes here
    private ChessGames:ChessGame[];
    private awaitingPlayer: WebSocket | null;
    private players: WebSocket[];
    constructor(){
        this.ChessGames = [];
        this.awaitingPlayer = null;
        this.players = [];
    }

    addPlayer( socket: WebSocket){
        this.players.push(socket);
        this.addPlayerHandler(socket);
    }

    removePlayer( socket: WebSocket){
        this.players = this.players.filter(player => player!== socket);
    }

    private addPlayerHandler(socket:WebSocket){
        socket.on("message",data => {
            const message = JSON.parse(data.toString());
            if(message.type===START_GAME){
                if(this.awaitingPlayer){
                    //the game begins now
                    const game = new ChessGame(this.awaitingPlayer,socket);
                    this.ChessGames.push(game);
                    this.awaitingPlayer = null;
                }
                else {
                    this.awaitingPlayer = socket;
                }
            }
            if(message.type===MOVE_PIECE){
                const game = this.ChessGames.find(game=> game.player1 === socket && game.player2 === socket);
                if(game){
                    game.movePiece(socket,message.payload.move);
                }
            }
        })
    }
}