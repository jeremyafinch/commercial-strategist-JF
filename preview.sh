#!/bin/bash
# Start local preview at http://localhost:8080/
cd "$(dirname "$0")"
echo ""
echo "  Site folder: $(pwd)"
echo "  Open in browser: http://localhost:8080/"
echo ""
echo "  Press Ctrl+C to stop."
echo ""
python3 -m http.server 8080
