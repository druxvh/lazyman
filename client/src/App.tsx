import { useEffect, useRef, useState, type TouchEvent } from 'react'
import socket from './socket';

export default function App() {

  const [isConnected, setIsConnected] = useState(socket.connected)
  // const [status, setStatus] = useState('Ready');
  // const [sensitivity, setSensitivity] = useState(1)
  // const [clientsCount, setClientsCount] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const lastTouchPos = useRef({ x: 0, y: 0 });


  useEffect(() => {
    const onConnect = () => setIsConnected(true);
    const onDisconnect = () => setIsConnected(false);
    // const onClientsCount = (count: number) => setClientsCount(count);

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    // socket.on('clients-count', onClientsCount)


    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      // socket.off('clients-count', onClientsCount)

    }
  }, [])


  const handleTouchStart = (event: TouchEvent) => {
    // event.preventDefault();

    // setStatus('Dragging!');
    setIsDragging(true)

    lastTouchPos.current = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    }

    // console.log('touch: ', lastTouchPos.current)
  };

  const handleTouchMove = (event: TouchEvent) => {
    // event.preventDefault()

    if (!isDragging) return

    const currentX = event.touches[0].clientX
    const currentY = event.touches[0].clientY

    const deltaX = currentX - lastTouchPos.current.x
    const deltaY = currentY - lastTouchPos.current.y

    // deltaX = deltaX * sensitivity
    // deltaY = deltaY * sensitivity


    // sends data to the server
    socket.emit('mouse-move', { deltaX, deltaY })

    lastTouchPos.current = {
      x: currentX,
      y: currentY
    }
  };

  const handleTouchClick = (button: 'left' | 'right') => {

    socket.emit('mouse-click', { button })
    // setStatus("Click")

    // setTimeout(() => {
    //   if (!isDragging) setStatus('✅ Ready');
    // }, 500);
  }

  const handleTouchEnd = () => {
    // event.preventDefault();
    // setStatus('✅ Ready');
    setIsDragging(false);
  };

  // return (
  //   <h1 className='text-4xl text-red-700'>hey</h1>
  //   // <div style={{
  //   //   height: '100%',
  //   //   display: 'flex',
  //   //   flexDirection: 'column',
  //   //   margin: 0,
  //   //   padding: 0,
  //   //   fontFamily: 'system-ui, -apple-system, sans-serif'
  //   // }}>
  //   //   {/* Status Bar */}
  //   //   <div style={{
  //   //     padding: '16px',
  //   //     backgroundColor: isConnected ? '#10b981' : '#ef4444',
  //   //     color: 'white',
  //   //     textAlign: 'center',
  //   //     fontWeight: 'bold'
  //   //   }}>
  //   //     {isConnected ? `✅ Connected (${clientsCount} client${clientsCount !== 1 ? 's' : ''})` : '❌ Disconnected'}
  //   //   </div>

  //   //   {/* Touchpad Area */}
  //   //   <div
  //   //     style={{
  //   //       flex: 1,
  //   //       backgroundColor: '#1a1a2e',
  //   //       margin: '20px',
  //   //       borderRadius: '24px',
  //   //       boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
  //   //       cursor: 'pointer',
  //   //       position: 'relative',
  //   //       touchAction: 'none', // Important for touch handling
  //   //       border: `2px solid ${isDragging ? '#10b981' : '#2d2d44'}`
  //   //     }}
  //   //     onTouchStart={handleTouchStart}
  //   //     onTouchMove={handleTouchMove}
  //   //     onTouchEnd={handleTouchEnd}
  //   //   >
  //   //     {/* Center Indicator */}
  //   //     <div style={{
  //   //       position: 'absolute',
  //   //       top: '50%',
  //   //       left: '50%',
  //   //       width: '20px',
  //   //       height: '20px',
  //   //       backgroundColor: isDragging ? '#10b981' : '#2d2d44',
  //   //       borderRadius: '50%',
  //   //       transform: 'translate(-50%, -50%)',
  //   //       transition: 'background-color 0.2s',
  //   //       boxShadow: '0 0 10px rgba(0,0,0,0.3)'
  //   //     }} />

  //   //     {/* Instructions Overlay */}
  //   //     <div style={{
  //   //       position: 'absolute',
  //   //       bottom: '20px',
  //   //       left: 0,
  //   //       right: 0,
  //   //       textAlign: 'center',
  //   //       color: '#666',
  //   //       fontSize: '14px',
  //   //       pointerEvents: 'none'
  //   //     }}>
  //   //       {status}
  //   //     </div>
  //   //   </div>

  //   //   {/* Sensitivity Slider */}
  //   //   <div style={{
  //   //     padding: '0 20px',
  //   //     marginBottom: '20px'
  //   //   }}>
  //   //     <label style={{
  //   //       display: 'block',
  //   //       marginBottom: '8px',
  //   //       color: '#666',
  //   //       fontSize: '14px',
  //   //       fontWeight: '500'
  //   //     }}>
  //   //       Sensitivity: {sensitivity.toFixed(1)}x
  //   //     </label>
  //   //     <input
  //   //       type="range"
  //   //       min="0.2"
  //   //       max="3"
  //   //       step="0.1"
  //   //       value={sensitivity}
  //   //       onChange={(e) => setSensitivity(parseFloat(e.target.value))}
  //   //       style={{
  //   //         width: '100%',
  //   //         height: '4px',
  //   //         borderRadius: '2px',
  //   //         background: '#2d2d44',
  //   //         WebkitAppearance: 'none'
  //   //       }}
  //   //     />
  //   //   </div>

  //   //   {/* Click Buttons */}
  //   //   <div style={{
  //   //     display: 'flex',
  //   //     gap: '12px',
  //   //     padding: '0 20px 30px 20px'
  //   //   }}>
  //   //     <button
  //   //       onClick={() => handleTouchClick('left')}
  //   //       style={{
  //   //         flex: 1,
  //   //         padding: '16px',
  //   //         backgroundColor: '#2d2d44',
  //   //         border: 'none',
  //   //         borderRadius: '12px',
  //   //         color: 'white',
  //   //         fontSize: '16px',
  //   //         fontWeight: '600',
  //   //         cursor: 'pointer',
  //   //         transition: 'transform 0.1s, background 0.2s'
  //   //       }}
  //   //       onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
  //   //       onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
  //   //     >
  //   //       🖱️ Left Click
  //   //     </button>
  //   //     <button
  //   //       onClick={() => handleTouchClick('right')}
  //   //       style={{
  //   //         flex: 1,
  //   //         padding: '16px',
  //   //         backgroundColor: '#2d2d44',
  //   //         border: 'none',
  //   //         borderRadius: '12px',
  //   //         color: 'white',
  //   //         fontSize: '16px',
  //   //         fontWeight: '600',
  //   //         cursor: 'pointer',
  //   //         transition: 'transform 0.1s'
  //   //       }}
  //   //       onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
  //   //       onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
  //   //     >
  //   //       🔘 Right Click
  //   //     </button>
  //   //   </div>
  //   // </div>
  // )
  return (
    <div className="fixed inset-0 bg-black flex flex-col overflow-hidden select-none font-sans">

      {/* Tooltip */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50">
        <div className={`px-4 py-1.5 rounded-full border flex items-center gap-2 backdrop-blur-md transition-all duration-500 ${isConnected
          ? 'bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
          : 'bg-red-500/10 border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]'
          }`}>
          <div className={`w-2 h-2 rounded-full animate-pulse ${isConnected ? 'bg-emerald-500' : 'bg-red-500'}`} />
          <span className="text-xs font-medium tracking-widest uppercase text-white/80">
            {isConnected ? 'System Live' : 'Offline'}
          </span>
        </div>
      </div>

      {/* Trackpad */}
      <div
        className={`flex-1 w-full touch-none transition-colors duration-300 ${isDragging ? 'bg-white/2' : 'bg-transparent'
          }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* grid pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 1px)', backgroundSize: '30px 30px' }}
        />
      </div>

      {/* Buttons */}
      <div className="flex h-24 w-full">
        <button
          onPointerDown={() => handleTouchClick('left')}
          className="flex-1 bg-white text-black font-bold uppercase tracking-tighter active:bg-gray-200 transition-colors border-r border-black"
        >
          Left
        </button>
        <button
          onPointerDown={() => handleTouchClick('right')}
          className="flex-1 bg-white text-black font-bold uppercase tracking-tighter active:bg-gray-200 transition-colors"
        >
          Right
        </button>
      </div>
    </div>
  )
}
