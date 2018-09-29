#!/bin/sh
npm run-script build
hugo
npm run-script minhtml