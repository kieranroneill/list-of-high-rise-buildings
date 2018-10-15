#!/usr/bin/env bash

NODE_ENV=production

# Build the api.
echo "Compiling backend files..."
rm -rf dist/api && rm -rf dist/data
mkdir -p dist/data && cp -r src/data/. dist/data
tsc --project tsconfig.api.json

## Build the web.
echo "Compiling frontend files..."
node -r babel-register node_modules/.bin/webpack --config webpack/webpack.config.js

# Start server.
echo "Starting server..."
node dist/api/index.js
