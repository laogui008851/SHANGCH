#/bin/bash

echo "Docker build mall..."
docker build --no-cache -t mall -f ./Dockerfile .