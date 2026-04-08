import {
  useEffect,
  useRef,
  useState,
  type SyntheticEvent,
  type TouchEvent,
} from "react";
import socket from "./socket";
import { ArrowUpRight, Keyboard, RefreshCcw } from "lucide-react";

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [isDragging, setIsDragging] = useState(false);
  const lastTouchPos = useRef({ x: 0, y: 0 });

  // A simple True/False switch to know if we are currently sending data
  const isSending = useRef(false);

  // A bucket to collect small movements before we send them
  const accumulatedDelta = useRef({ x: 0, y: 0 });

  // Scroll tracking
  const lastScrollPos = useRef(0);
  const isScrolling = useRef(false);

  // Keyboard
  const [isTypingActive, setIsTypingActive] = useState(false);
  const [typedText, setTypedText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onConnect = () => setIsConnected(true);
    const onDisconnect = () => setIsConnected(false);

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  const handleTouchStart = (event: TouchEvent) => {
    setIsDragging(true);

    lastTouchPos.current = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (!isDragging) return;

    const currentX = event.touches[0].clientX;
    const currentY = event.touches[0].clientY;

    const dx = currentX - lastTouchPos.current.x;
    const dy = currentY - lastTouchPos.current.y;

    accumulatedDelta.current.x += dx;
    accumulatedDelta.current.y += dy;

    lastTouchPos.current = {
      x: currentX,
      y: currentY,
    };

    if (!isSending.current) {
      isSending.current = true;

      requestAnimationFrame(() => {
        // sends data to the server
        socket.emit("mouse-move", {
          deltaX: accumulatedDelta.current.x,
          deltaY: accumulatedDelta.current.y,
        });

        accumulatedDelta.current = { x: 0, y: 0 };

        isSending.current = false;
      });
    }
  };

  const handleTouchClick = (button: "left" | "right") =>
    socket.emit("mouse-click", { button });

  const handleTouchEnd = () => setIsDragging(false);

  const handleScrollStart = (event: TouchEvent) => {
    isScrolling.current = true;
    lastScrollPos.current = event.touches[0].clientY;
  };
  const handleScrollMove = (event: TouchEvent) => {
    if (!isScrolling.current) return;

    const currentY = event.touches[0].clientY;
    const dy = currentY - lastScrollPos.current;

    if (Math.abs(dy) > 5) {
      const direction = dy < 0 ? "up" : "down";
      socket.emit("mouse-scroll", { direction });
      lastScrollPos.current = currentY;
    }
  };

  const handleScrollEnd = () => {
    isScrolling.current = false;
  };

  const handleReset = () => socket.emit("mouse-reset");

  // Keyboard fns
  const openKeyboard = () => {
    setIsTypingActive(true);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleKeyboardKey = (key: "Esc" | "Enter") => {
    socket.emit("keyboard-key", { key });
  };

  const handleKeyboardSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (typedText.trim() !== "") {
      socket.emit("keyboard-type", { text: typedText });
      setTypedText("");
    }

    setIsTypingActive(false);

    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const disconnect = () => socket.disconnect();
  const connect = () => socket.connect();

  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden bg-black font-sans select-none">
      {/* Tooltip */}
      <div className="absolute top-6 left-1/2 z-50 flex -translate-x-1/2 gap-4">
        <div
          className={`flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-md transition-all duration-500 ${
            isConnected
              ? "border-emerald-500/50 bg-emerald-500/10"
              : "border-red-500/50 bg-red-500/10"
          }`}
        >
          <div
            className={`h-2 w-2 animate-pulse rounded-full ${isConnected ? "bg-emerald-500" : "bg-red-500"}`}
          />
          <span className="text-xs font-medium tracking-widest text-white/80 uppercase">
            {isConnected ? "Live" : "Offline"}
          </span>
        </div>
        <button
          className={`cursor-pointer rounded-full border px-6 py-1.5 transition-all duration-500 ${
            isConnected
              ? "border-red-500/50 bg-red-500/10"
              : "border-emerald-500/50 bg-emerald-500/10"
          }`}
          onClick={isConnected ? disconnect : connect}
        >
          <span className="text-xs font-medium tracking-widest text-white/80 uppercase">
            {isConnected ? "Disconnect" : "Connect"}
          </span>
        </button>
        <button
          disabled={!isConnected}
          onClick={openKeyboard}
          className="cursor-pointer rounded-md border border-white/30 bg-white/5 px-2.5 text-white/80 transition-colors active:bg-white active:text-black"
        >
          <Keyboard className="size-4" />
        </button>
        <button
          disabled={!isConnected}
          onPointerDown={handleReset}
          className="cursor-pointer rounded-md border border-white/30 bg-white/5 px-2.5 text-white/80 transition-colors active:bg-white active:text-black"
        >
          <RefreshCcw className="size-4" />
        </button>
      </div>

      {/* Invisible Form Keyboard */}
      {isTypingActive && (
        <div className="absolute inset-0 z-40 flex flex-col items-center justify-start bg-black/80 px-4 py-40 backdrop-blur-sm">
          <form
            onSubmit={handleKeyboardSubmit}
            className="flex w-full max-w-md flex-col gap-4"
          >
            <label className="font-mono text-xs tracking-wider text-white/60 uppercase">
              Type to PC + Press Enter
            </label>
            <input
              ref={inputRef}
              type="text"
              value={typedText}
              onChange={(e) => setTypedText(e.target.value)}
              className="w-full border-b-2 border-white/50 bg-transparent py-2 font-mono text-lg text-white transition-colors outline-none focus:border-white"
              autoComplete="off"
              autoCapitalize="off"
            />
            <div className="mb-4 flex gap-2">
              <button
                onClick={() => handleKeyboardKey("Esc")}
                className="flex-1 cursor-pointer border border-white/20 bg-white/5 py-2 font-mono text-xs text-white uppercase transition-all"
              >
                Esc
              </button>
              <button
                onClick={() => handleKeyboardKey("Enter")}
                className="flex-1 cursor-pointer border border-white/20 bg-white/5 py-2 font-mono text-xs text-white uppercase transition-all"
              >
                Enter
              </button>
            </div>
            <div className="flex justify-end font-mono text-xs text-white/40">
              <span
                onClick={() => setIsTypingActive(false)}
                className="cursor-pointer hover:text-white"
              >
                [Close]
              </span>
            </div>
          </form>
        </div>
      )}

      {/* Trackpad */}
      <div
        className={`w-full flex-1 touch-none transition-colors duration-300 ${
          isDragging ? "bg-white/2" : "bg-transparent"
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#ffffff 2px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex h-20 w-full justify-center gap-4">
        <button
          onPointerDown={() => handleTouchClick("left")}
          disabled={!isConnected}
          className="z-10 w-full max-w-xl border border-white/50 bg-black font-mono font-semibold text-white uppercase"
        >
          Left
        </button>

        {/* Scrollbar */}
        <div
          onTouchStart={handleScrollStart}
          onTouchMove={handleScrollMove}
          onTouchEnd={handleScrollEnd}
          className="z-10 flex w-16 cursor-ns-resize touch-none flex-col items-center justify-between border border-white/50 bg-black py-2 font-mono text-xs text-white/60 transition-colors active:border-white active:text-white"
        >
          <span>▲</span>
          <span className="text-[10px] tracking-tighter">SCL</span>
          <span>▼</span>
        </div>

        <button
          disabled={!isConnected}
          onPointerDown={() => handleTouchClick("right")}
          className="z-10 w-full max-w-xl border border-white/50 bg-black font-mono font-semibold text-white uppercase"
        >
          Right
        </button>
      </div>

      <footer className="flex h-16 w-full items-center justify-center">
        <div className="flex font-mono text-xs text-white">
          <p>built by</p>
          <a
            href="https://www.x.com/druxvh"
            target="_blank"
            className="ml-1.5 flex font-semibold italic hover:underline"
          >
            <span>drx</span>
            <ArrowUpRight className="size-3" />
          </a>
        </div>
      </footer>
    </div>
  );
}
