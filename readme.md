# Rough Points

Client -> through websockets -> Server (PC)

Client handles the touch x and y data and pass it to the server in real time (delta of x and y touch events)

Server takes the data and controls the pc mouse (OS Api) in real time as per the delta of x and y 

## some interesting features to add:

- nodejs executing server (PC) commands like sleep, brightness control, restart, shutdown, etc voice support ai agents handling basic commands based on user given info about his pc so the ai could give better answers
- full screen (toggle mode) mouse pad with basic gestures like on laptop touchpad else its 80% of screen height within the center
- network discovery to make it look available to connect on devices along with qr manual connect support

