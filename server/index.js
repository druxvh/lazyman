import e from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { Button, mouse, Point, straightTo } from '@nut-tree-fork/nut-js'
import { networkInterfaces } from 'os'
import localtunnel from 'localtunnel'

const app = e()
const httpServer = createServer(app)
const io = new Server(httpServer, {
    cors: {
        origin: '*'
    }
})

const PORT = 3000;


// to keep track of connected clients
const connectedClients = new Set()

io.on("connection", (socket) => {
    console.log(`🟢 Client connected: ${socket.id}`);
    connectedClients.add(socket.id)

    io.emit('clients-count', connectedClients.size)

    // handle mouse movement
    socket.on('mouse-move', async (data) => {
        const { deltaX, deltaY, senstivity = 1 } = data

        try {
            // current mouse position
            const mousePos = await mouse.getPosition()

            // calc new positions
            const newX = mousePos.x + (deltaX * senstivity)
            const newY = mousePos.y + (deltaY * senstivity)

            // move mouse
            await mouse.move(straightTo(new Point(newX, newY)))

        } catch (error) {
            console.error('Mouse move error: ', error)
        }
    })

    // handle left click
    socket.on('mouse-click', async ({ button = 'left' | 'right' }) => {
        try {
            const mouseButton = button === 'left' ? Button.LEFT : Button.RIGHT
            await mouse.click(mouseButton)
        } catch (error) {
            console.error('Left click error: ', error)
        }
    })


    // handle disconnect
    socket.on('disconnect', () => {
        console.log(`🔴 Client disconnected: ${socket.id}`);
        connectedClients.delete(socket.id);
        io.emit('clients-count', connectedClients.size);
    })
})


app.get("/status", (req, res) => {
    res.json({
        status: 'running',
        clients: connectedClients.size,
        uptime: process.uptime()
    })
});

app.get("/", (req, res) => {
    const publicUrl = app.locals.publicUrl || `http://${getLocalIP()}:3000`
    res.send(`
        <html>
            <head><title>Touch Mouse Server</title></head>
            <body style="font-family: sans-serif; text-align: center; padding: 50px;">
                <h1>🖱️ Touch Mouse Server</h1>
                <p>Status: Running ✅</p>
                <p>Connected Clients: ${connectedClients.size}</p>
                <p>Server IP: ${getLocalIP()}</p>
                <p>Port: 3000</p>
                <p>Scan this QR code to connect:</p>
                <div id="qrcode"></div>
                <p>Public URL: <a href="${publicUrl}" target="_blank">${publicUrl}</a></p>
                <script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>
                <script>
                    new QRCode(document.getElementById("qrcode"), {
                        text: "${publicUrl}",
                        width: 180,
                        height: 180
                    });
                </script>
            </body>
        </html>
    `);
});

function getLocalIP() {
    const nets = networkInterfaces()

    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            // Skip over non-IPv4 and internal (127.0.0.1) addresses
            if (net.family === 'IPv4' && !net.internal) {
                return net.address;
            }
        }
    }
    return 'localhost';

}

httpServer.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on port ${PORT}`);

    // try {
    //     const tunnel = await localtunnel({ port: PORT })
    //     app.locals.publicUrl = tunnel.url
    //     console.log(`\n==============================================`);
    //     console.log(`📡 PUBLIC INTERNET URL: ${tunnel.url}`);
    //     console.log(`Scan the QR code by opening http://localhost:3000 on your PC`);
    //     console.log(`==============================================\n`);

    //     tunnel.on('close', () => {
    //         console.log('🔴 Tunnel closed');
    //     });

    // } catch (err) {
    //     console.error('❌ Failed to establish localtunnel:', err);
    // }

    console.log(`📡 Local: http://localhost:${PORT}`);
    console.log(`📡 Network: http://${getLocalIP()}:${PORT}`);
    console.log(`\n📱 On your phone, open: http://${getLocalIP()}:5173`);
});