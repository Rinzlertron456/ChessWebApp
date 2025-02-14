"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessGameHandler = void 0;
const ChessGame_1 = require("./ChessGame");
const messages_1 = require("./messages");
class ChessGameHandler {
    constructor() {
        this.ChessGames = [];
        this.awaitingPlayer = null;
        this.players = [];
    }
    addPlayer(socket) {
        this.players.push(socket);
        this.addPlayerHandler(socket);
    }
    removePlayer(socket) {
        this.players = this.players.filter(player => player !== socket);
    }
    addPlayerHandler(socket) {
        socket.on("message", data => {
            const message = JSON.parse(data.toString());
            if (message.type === messages_1.START_GAME) {
                if (this.awaitingPlayer) {
                    //the game begins now
                    const game = new ChessGame_1.ChessGame(this.awaitingPlayer, socket);
                    this.ChessGames.push(game);
                    this.awaitingPlayer = null;
                }
                else {
                    this.awaitingPlayer = socket;
                }
            }
            if (message.type === messages_1.MOVE_PIECE) {
                const game = this.ChessGames.find(game => game.player1 === socket && game.player2 === socket);
                if (game) {
                    game.movePiece(socket, message.payload.move);
                }
            }
        });
    }
}
exports.ChessGameHandler = ChessGameHandler;
