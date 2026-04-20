#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' 

clear
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}   LAZYMAN - PC Remote Controller       ${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

# Check for Node.js first
if command -v node &> /dev/null; then
    RUNTIME="node"
    echo -e "${GREEN}[✓] Node.js found${NC}"
# Then check for Bun
elif command -v bun &> /dev/null; then
    RUNTIME="bun"
    echo -e "${GREEN}[✓] Bun found${NC}"
else
    # UX Friendly Error for Mac/Linux
    echo -e "${RED}[!] Runtime Not Found${NC}"
    echo -e "----------------------------------------"
    echo -e "LazyMan needs Node.js to run."
    echo -e ""
    echo -e "RECOMMENDED FIX:"
    echo -e "1. Visit https://nodejs.org/"
    echo -e "2. Install the 'LTS' version."
    echo -e "3. Restart your Terminal and run this file again."
    echo -e "----------------------------------------"
    read -p "Press Enter to exit..."
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}[⚠] Dependencies missing. Installing...${NC}"
    if [ "$RUNTIME" == "node" ]; then
        npm install --quiet
    else
        bun install
    fi
    echo ""
fi

echo -e "${GREEN}[✓] Dependencies ready${NC}"
echo ""
echo -e "${YELLOW}[→] Starting LazyMan Server via $RUNTIME...${NC}"
echo ""

# Start the server
$RUNTIME index.js

read -p "Press Enter to exit..."