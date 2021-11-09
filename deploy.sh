#!/usr/bin/env bash

SERVER_NAME=${1:-127_0_0_1___21025}

DIR="/mnt/c/Users/Serov/AppData/Local/Screeps/scripts/${SERVER_NAME}/nadir-ai"
mkdir -p $DIR

echo "Copying the following files:"
ls src/.
cp -r src/. $DIR
echo "Finished copying $(pwd) to $DIR"