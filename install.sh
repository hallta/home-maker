#!/bin/bash

if [ -f package.json ]; then npm install; fi
if [ ! -d log        ]; then mkdir log;   fi
