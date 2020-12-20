#!/usr/bin/env bash
sudo docker build -t mynuxt .
#sudo docker rm mynuxt
docker stop mynuxt
sudo docker run --name mynuxt -d -p 3000:3000 mynuxt