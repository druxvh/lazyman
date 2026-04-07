#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

clear
echo "========================================"
echo "   LAZYMAN - PC Remote Controller"
echo "========================================"
echo ""

# Check if Bun is installed
if ! command -v bun &> /dev/null; then
    echo -e "${RED}[ERROR] Bun is not installed!${NC}"
    echo ""
    echo "Please install Bun first:"
    echo "https://bun.sh/docs/installation"
    echo ""
    echo "Or run: curl -fsSL https://bun.sh/install | bash"
    echo ""
    read -p "Press Enter to exit..."
    exit 1
fi

echo -e "${GREEN}[✓] Bun found${NC}"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}[⚠] Dependencies not found, installing...${NC}"
    bun install
    echo ""
fi

echo -e "${GREEN}[✓] Dependencies ready${NC}"
echo ""
echo -e "${YELLOW}[→] Starting LazyMan Server...${NC}"
echo ""

# Start the server
bun index.js

read -p "Press Enter to exit..."