# 🕹️ Lazyman
### Turn your smartphone into a high-performance, low-latency remote controller.

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/druxvh/lazyman)
[![License](https://img.shields.io/badge/license-ISC-green.svg)](LICENSE)
[![Built With Bun](https://img.shields.io/badge/Built%20With-Bun-f9f9f9?logo=bun&logoColor=black)](https://bun.sh)

**Lazyman** is a lightweight, cross-platform remote control suite. It bridges the gap between your mobile device and your desktop, allowing you to control your mouse and keyboard over your local network with zero-latency "warp" movement. 

Whether you're presenting a slide deck, watching movies from bed, or just being a bit lazy—**Lazyman has your back.**

---

## ✨ Features

* **⚡ Warp-Speed Control**: Unlike other remote apps, Lazyman uses direct coordinate warping for jitter-free, instantaneous cursor response.
* **🖱️ Full Mouse Suite**: Left-click, right-click, and dedicated vertical scrolling.
* **⌨️ Native Mobile Typing**: Open your phone's keyboard, see what you're typing, and send the full string to your PC in one go.
* **🎯 Smart Boundaries**: The cursor respects your monitor's edges—no more "losing" the mouse off-screen.
* **🔄 Instant Reset**: A dedicated "Center" button to recover your cursor position instantly.
* **📱 QR Connection**: No more typing cryptic IP addresses; just scan and go.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Runtime** | [Bun](https://bun.sh) (High-performance JS Runtime) |
| **Frontend** | React + Vite + TypeScript |
| **Backend** | Node.js + Socket.io |
| **Styling** | Tailwind CSS + Lucide Icons |
| **Automation** | @nut-tree/nut-js (Native OS Control) |

---

## 🚀 Quick Start

1.  **Requirement**: Ensure [Bun](https://bun.sh) is installed on your computer.
2.  **Download**: Clone or download the Lazyman folder.
3.  **Run**: Navigate to the `backend` folder and run `start.bat` (Windows) or `start.sh` (Mac/Linux).
4.  **Connect**: Scan the QR code in your terminal with your phone.

> **Port Note**: Lazyman operates on port **6006**. Ensure your firewall allows local traffic on this port.

---

## 📖 Detailed Guides

* [How to Setup & Use (Server)](/backend/HOW-TO.md) — Step-by-step for all OS types.

---

## 👤 Author
**Built by [drx](https://x.com/druxvh)**.
