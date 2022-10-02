#!/usr/bin/env bash
# Installs all necessary packages for Node Pier

EXECUTION_LOCATION=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
echo -e "Attempting to install all dependencies for Node Pier"
npm install
cd "$EXECUTION_LOCATION/server"
npm install
cd "$EXECUTION_LOCATION/client"
npm install
echo -e "\n\n\nAll processes complete!\nExiting...\n"