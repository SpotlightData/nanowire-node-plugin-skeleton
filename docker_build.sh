#!/bin/bash
set -e

cp ~/.ssh/id_rsa .

echo "Building version ${VERSION}"

docker build --build-arg ssh_prv_key="$(cat id_rsa)" -t "$DOCKER_USER/$DOCKER_REPO:$DOCKER_TAG" .

rm id_rsa