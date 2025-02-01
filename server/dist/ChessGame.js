"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessGame = void 0;
const chess_js_1 = require("chess.js");
const messages_1 = require("./messages");
class ChessGame {
    constructor(player1, player2) {
        this.totalMoves = 0;
        this.player1 = player1;
        this.player2 = player2;
        this.board = new chess_js_1.Chess();
        this.startTime = new Date();
        this.player1.send(JSON.stringify({
            type: messages_1.START_GAME,
            payload: {
                color: "White",
            }
        }));
        this.player2.send(JSON.stringify({
            type: messages_1.START_GAME,
            payload: {
                color: "Black",
            }
        }));
    }
    movePiece(socket, move) {
        // Check if it's this player's turn, and if the move is valid
        if (this.totalMoves % 2 === 0 && socket !== this.player1) {
            return;
        }
        if (this.totalMoves % 2 === 1 && socket !== this.player2) {
            return;
        }
        try {
            this.board.move(move);
            this.totalMoves++;
        }
        catch (e) {
            console.log(e);
            return;
        }
        //Check if there is a checkmate and who did it
        if (this.board.isGameOver()) {
            // const winner = this.board.isCheckmate()? this.board.turn : 'draw';
            this.player1.emit(JSON.stringify({
                type: messages_1.GAME_OVER,
                payload: {
                    winner: this.board.turn() === "w" ? "Black" : "White"
                }
            }));
            this.player2.emit(JSON.stringify({
                type: messages_1.GAME_OVER,
                payload: {
                    winner: this.board.turn() === "w" ? "Black" : "White"
                }
            }));
            return;
        }
        //Player confirmation on who should make the move if the game is not over
        if (this.totalMoves % 2 === 0) {
            this.player2.send(JSON.stringify({
                type: messages_1.MOVE_PIECE,
                payload: move
            }));
        }
        else {
            this.player1.send(JSON.stringify({
                type: messages_1.MOVE_PIECE,
                payload: move
            }));
        }
        this.totalMoves++;
    }
}
exports.ChessGame = ChessGame;
