#!/bin/bash

# Ensure we are in the root directory
# src/test.sh

EXPECTED="Hello, Test!"

OUTPUT=$(node -e "console.log(require('./src/app')('Test'))")

# Note: Spaces are mandatory inside [ ] in Bash Muhmmed Tamer Muhmmed 
if [ "$OUTPUT" == "$EXPECTED" ]; then
    echo "✅ Test Passed!"
    exit 0
else
    echo "❌ Test failed! Expected '$EXPECTED' but got '$OUTPUT'"
    exit 1
fi