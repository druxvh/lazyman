import { io } from 'socket.io-client'

// const urlParams = new URLSearchParams(window.location.search)
// const serverIp = urlParams.get('server')

// const SOCKET_URL = serverIp ? `http://${serverIp}` : '192.168.43.95:3000'
const SOCKET_URL = window.location.origin

const socket = io(SOCKET_URL, {
    transports: ['websocket', 'polling'],
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
    timeout: 10000,
})

export default socket