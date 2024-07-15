#!/bin/bash

# Navigate to the React app directory
cd C:\Users\sharm\OneDrive\Desktop\Summer Pep\cloud computing\assignment 4\React-App

# Install dependencies
npm install

# Build the React app
npm run build

# Navigate to the build output directory
cd dist # Vite's default output directory is `dist`

# Zip the build directory
zip -r build.zip *

# Update the Lambda function
aws lambda update-function-code --function-name CICD_Assignment4 --zip-file fileb://build.zip
