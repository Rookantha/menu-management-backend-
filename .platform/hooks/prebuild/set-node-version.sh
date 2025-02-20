#!/bin/bash
# Ensure script runs as executable
chmod +x .platform/hooks/prebuild/set-node-version.sh

# Install Node.js 20 on Amazon Linux 2023
echo "Installing Node.js 20..."
sudo dnf module reset nodejs -y
sudo dnf module enable nodejs:20 -y
sudo dnf install -y nodejs

echo "Node.js version after installation:"
node -v
