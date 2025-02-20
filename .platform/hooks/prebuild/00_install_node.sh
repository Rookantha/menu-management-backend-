#!/bin/bash

# Detect OS
if [[ -f /etc/debian_version ]]; then
    echo "Debian-based system detected. Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
    apt-get install -y nodejs
elif [[ -f /etc/redhat-release ]]; then
    echo "Amazon Linux / RHEL-based system detected. Installing Node.js..."
    curl -fsSL https://rpm.nodesource.com/setup_18.x | bash -
    yum install -y nodejs
else
    echo "Unsupported OS. Please install Node.js manually."
    exit 1
fi
