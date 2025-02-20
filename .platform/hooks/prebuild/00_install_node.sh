#!/bin/bash

# Detect OS and install Node.js accordingly
if [ -f /etc/debian_version ]; then
    # Debian-based system (Ubuntu, Debian)
    sudo apt-get update -y
    sudo apt-get install -y nodejs npm
elif [ -f /etc/redhat-release ]; then
    # Amazon Linux / RHEL / CentOS
    sudo yum install -y nodejs npm
else
    echo "Unsupported OS. Please install Node.js manually."
    exit 1
fi
