import {useState} from "react";

export const useSocket = () => {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    return socket;
}