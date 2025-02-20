#!/bin/bash

# Detect OS and install Node.js
if [ -f /etc/debian_version ]; then
    echo "Debian-based system detected"
    sudo apt-get update -y
    sudo apt-get install -y nodejs npm
elif [ -f /etc/redhat-release ]; then
    echo "Amazon Linux or RHEL-based system detected"
    sudo yum install -y nodejs npm
else
    echo "Unsupported OS"
    exit 1
fi
