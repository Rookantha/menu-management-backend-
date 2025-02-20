#!/bin/bash
# Enable Node.js 20 for the environment
. /opt/elasticbeanstalk/env.vars
sudo yum install -y gcc-c++ make
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo -E bash -
sudo yum install -y nodejs
