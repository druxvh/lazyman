import { io } from 'socket.io-client'

const urlParams = new URLSearchParams(window.location.search)
const serverIp = urlParams.get('server')

const SOCKET_URL = serverIp ? `http://${serverIp}` : window.location.origin

const socket = io(SOCKET_URL, {
    transports: ['websocket', 'polling'],
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
    timeout: 10000,
})

export default socket