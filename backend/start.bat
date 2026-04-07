@REM Script to launch everything on Windows

@echo off
title LazyMan - PC Remote Control
color 0A

echo ========================================
echo    LAZYMAN - PC Remote Controller
echo ========================================
echo.

:: Check if Bun is installed
where bun >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Bun is not installed!
    echo.
    echo Please install Bun first:
    echo https://bun.sh/docs/installation
    echo.
    pause
    exit /b 1
)

echo [✓] Bun found

:: Check if node_modules exists
if not exist "node_modules\" (
    echo [⚠] Dependencies not found, installing...
    call bun install
    echo.
)

echo [✓] Dependencies ready
echo.
echo [→] Starting LazyMan Server...
echo.

:: Start the server
bun index.js

pause