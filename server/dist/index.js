"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const ChessGameHandler_1 = require("./ChessGameHandler");
const wss = new ws_1.WebSocketServer({ port: 8080 });
const chessGameHandler = new ChessGameHandler_1.ChessGameHandler();
wss.on('connection', function connection(ws) {
    chessGameHandler.addPlayer(ws);
    ws.on("disconnect", () => chessGameHandler.removePlayer(ws));
    // ws.on('error', console.error);
    //
    // ws.on('message', function message(data) {
    //     console.log('received: %s', data);
    // });
    // ws.send('chess dummy');
});
