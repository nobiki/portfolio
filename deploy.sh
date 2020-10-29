#!/bin/bash

git pull
./bin/npm run --prefix app build
git log -n 1
