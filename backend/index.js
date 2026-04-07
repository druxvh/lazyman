import e from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { Button, mouse, Point, screen, keyboard } from '@nut-tree-fork/nut-js'
import { networkInterfaces } from 'os'
import { fileURLToPath } from 'url'
import path from 'path'
import qrcode from 'qrcode-terminal'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = e()
const httpServer = createServer(app)
const io = new Server(httpServer, {
    cors: { origin: '*' }
})

const PORT = 6006;

// Config for quick typing
keyboard.config.autoDelayMs = 33;

// keep track of the virtual mouse position in memory
let x = 0, y = 0, screenW = 1920, screenH = 1080

// Initialise x,y to the actual mouse position once the server starts
async function initMouse() {
    try {
        const pos = await mouse.getPosition()
        x = pos.x
        y = pos.y

        screenW = await screen.width();
        screenH = await screen.height();
    } catch (error) {
        console.error('Failed to init mouse: ', error.message)
    }
}
initMouse()

app.use(e.static(path.join(__dirname, 'dist'), { dotfiles: 'allow' }))

app.get("/status", (req, res) => {
    res.json({
        status: 'running',
        uptime: process.uptime()
    })
});

app.get("/network-info", (req, res) => {
    res.json({
        localIP: getLocalIP(),
        port: PORT
    })
})

// Catch all route
app.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

io.on("connection", (socket) => {
    console.log(`🟢 Phone connected: ${socket.id}`);

    // handle mouse movement
    socket.on('mouse-move', async ({ deltaX, deltaY }) => {
        const senstivity = 2

        try {
            // Clamping to keep the values within a specific range
            x = Math.max(0, Math.min(screenW, x + (deltaX * senstivity)))
            y = Math.max(0, Math.min(screenH, y + (deltaY * senstivity)))

            await mouse.setPosition(new Point(x, y))

        } catch (error) {
            console.error('Mouse move error: ', error)
        }
    })

    // handle left click
    socket.on('mouse-click', async ({ button = 'left' }) => {
        try {
            const mouseButton = button === 'left' ? Button.LEFT : Button.RIGHT
            await mouse.click(mouseButton)
        } catch (error) {
            console.error('Click error: ', error)
        }
    })

    // mouse scroll
    socket.on('mouse-scroll', async ({ direction, amount = 1 }) => {
        try {

            if (direction === 'down') await mouse.scrollDown(amount);
            else await mouse.scrollUp(amount);

        } catch (error) {
            console.error('Scroll error: ', error);
        }
    });

    socket.on('mouse-reset', async () => {
        try {
            x = screenW / 2
            y = screenH / 2

            await mouse.setPosition(new Point(x, y));
        } catch (error) {
            console.error('Reset error: ', error);
        }
    });

    socket.on('keyboard-type', async ({ text }) => {
        try {
            await keyboard.type(text);
        } catch (error) {
            console.error('Keyboard typing error: ', error);
        }
    });

    // handle disconnect
    socket.on('disconnect', () => {
        console.log(`🔴 Phone disconnected: ${socket.id}`);
    })
})

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

    const localUrl = `http://${getLocalIP()}:${PORT}`

    console.clear();
    console.log(`\n🚀 LAZYMAN IS LIVE`);
    console.log(`-----------------------------------`);
    console.log(`📡 Network URL: ${localUrl}`);
    console.log(`-----------------------------------`);
    console.log(`\n📱 SCAN TO CONNECT:`);

    qrcode.generate(localUrl, { small: true })

    console.log(`\n(Keep this terminal open to stay active)`);
});