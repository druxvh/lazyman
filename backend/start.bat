@echo off
TITLE LazyMan - PC Remote Control
color 0A

echo ========================================
echo    LAZYMAN - PC Remote Controller
echo ========================================
echo.

:: 1. Check for Node.js (Primary Recommendation)
node -v >nul 2>&1
if %errorlevel% equ 0 (
    set RUNTIME=node
    echo [v] Node.js detected.
    goto CHECK_DEPS
)

:: 2. Check for Bun (Secondary)
bun -v >nul 2>&1
if %errorlevel% equ 0 (
    set RUNTIME=bun
    echo [v] Bun detected.
    goto CHECK_DEPS
)

:: 3. If neither found - UX Friendly Error
color 0C
echo [!] RUNTIME NOT FOUND
echo ----------------------------------------
echo To run LazyMan, you need to install Node.js.
echo.
echo QUICK FIX (Copy-Paste into a NEW PowerShell):
echo winget install OpenJS.NodeJS
echo.
echo MANUAL FIX:
echo Download "LTS" from https://nodejs.org/
echo.
echo NOTE: After installing, CLOSE this window 
echo and open start.bat again.
echo ----------------------------------------
pause
exit /b 1

:CHECK_DEPS
:: Check if node_modules exists
if not exist "node_modules\" (
    echo [!] Dependencies missing. Installing...
    if "%RUNTIME%"=="node" (call npm install --quiet) else (call bun install)
    echo.
)

echo [v] Dependencies ready.
echo [→] Starting LazyMan Server via %RUNTIME%...
echo.

:: Start the server using the detected runtime
%RUNTIME% index.js

pause