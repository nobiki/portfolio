#!/bin/bash

git pull
git log -n 1
./bin/npm run --prefix app build
