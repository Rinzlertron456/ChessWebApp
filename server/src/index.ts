import { WebSocketServer } from 'ws';
import {ChessGameHandler} from "./ChessGameHandler";

const wss = new WebSocketServer({ port: 8080 });
const chessGameHandler = new ChessGameHandler();
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
