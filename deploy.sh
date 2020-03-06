#!/usr/bin/env bash

cd laapp
npm run build
cd ..

echo "Copying files to themes folder..."
cp -rf laapp/build/static themes/laapp-react/
cp laapp/build/manifest.json themes/laapp-react/
cp laapp/build/favicon.ico themes/laapp-react/
cp laapp/build/apple-touch-icon.png themes/laapp-react/ 

echo "Copying files to root folder..."
cp laapp/build/index.html .
cp laapp/build/asset-manifest.json .
cp laapp/build/service-worker.js .

echo "Done! You can now push to master!"
