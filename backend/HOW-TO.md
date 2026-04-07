# 📖 Lazyman Setup Guide
**Everything you need to get your remote controller running in 60 seconds.**

Lazyman relies on a direct link between your phone and your PC. Because this app controls your actual hardware (mouse/keyboard), there are a few system-specific permissions you need to be aware of.

---

## 📋 Prerequisites

1.  **Bun Runtime (Required)**: Lazyman is optimized for Bun. 
    * **Install it here**: [bun.sh](https://bun.sh)
    * *Note: While Node.js works, Bun is highly recommended for the best experience.*
2.  **Local Network**: Your phone and PC **must** be on the same Wi-Fi network.

---

## 🚀 How to Start

###  Windows
1.  Open the `backend` folder.
2.  Double-click `start.bat`.
3.  **First Run?** A "Windows Firewall" popup will appear. **You must check "Private Networks" and click "Allow Access"** or your phone won't be able to find your PC.

###  macOS/Linux
1.  Open your terminal in the `backend` folder.
2.  Run the command: `chmod +x start.sh`
3.  Execute it: `./start.sh`

---

## 🛡️ OS Permissions (Crucial)

Since Lazyman moves your physical mouse, the Operating System needs to know you trust this app.

### **Windows**
* If the mouse doesn't move, try right-clicking `start.bat` and selecting **"Run as Administrator"**.

### **macOS**
* Go to **System Settings > Privacy & Security > Accessibility**.
* Click the **+** and add your Terminal (or the Lazyman binary if compiled).
* *Without this, the app will connect, but the mouse will stay still.*

### **Linux (Ubuntu/Debian)**
* Lazyman requires an **X11** session. If you are on **Wayland** (default in newer Ubuntu), the mouse may not move. 
* **Fix**: On the login screen, click the gear icon and select "Ubuntu on Xorg" before logging in.

---

## 📱 Connecting Your Phone

1.  Once the server starts, you will see a **QR Code** in your terminal.
2.  Open your phone's camera or QR scanner.
3.  Scan the code and open the link (e.g., `http://192.168.1.5:6006`).
4.  **Enjoy!**

---

## ⌨️ Using the Keyboard Feature
1.  On your phone, tap the **Keyboard Icon**.
2.  A text input will appear. Type whatever you need (URLs, search terms, etc.).
3.  Press **Enter** on your mobile keyboard. 
4.  The text is sent as a single "burst" to your PC, preventing typos and lag.

---

## 🛠️ Troubleshooting

| Issue | Solution |
| :--- | :--- |
| **Phone won't connect** | Double-check that your phone is on the same Wi-Fi. Check if Windows Firewall is blocking Port 6006. |
| **Mouse is jittery** | Ensure you are using `setPosition` in the logic (standard in v1.0). Check your Wi-Fi signal strength. |
| **QR Code doesn't appear** | Ensure you ran `bun install` inside the backend folder first. |
| **"Permission Denied"** | On Linux/Mac, run `chmod +x start.sh` in the terminal. |

---

**Need more help?** Reach out to [drx on X](https://x.com/druxvh).