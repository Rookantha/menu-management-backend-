#!/bin/bash

set -e  # Exit on any error

# Detect OS
if [[ -f /etc/debian_version ]]; then
    echo "Debian-based system detected. Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
    apt-get install -y nodejs

elif [[ -f /etc/os-release ]]; then
    source /etc/os-release
    if [[ "$ID" == "amzn" ]]; then
        echo "Amazon Linux detected. Installing Node.js..."

        # Amazon Linux 2
        if [[ "$VERSION_ID" == "2" ]]; then
            curl -fsSL https://rpm.nodesource.com/setup_18.x | bash -
            yum install -y nodejs
        else
            # Amazon Linux 2023 (AL2023)
            dnf install -y tar
            curl -fsSL https://raw.githubusercontent.com/tj/n/master/bin/n | bash -s 18
            export PATH="/usr/local/bin:$PATH"
        fi
    else
        echo "Unsupported OS: $ID. Please install Node.js manually."
        exit 1
    fi

else
    echo "Unsupported OS. Please install Node.js manually."
    exit 1
fi

# Verify installation
node -v
npm -v
