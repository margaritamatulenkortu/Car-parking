#!/bin/sh
cat \
    docker-compose.yml \
    docker-compose-networks.yml \
    docker-compose-volumes.yml \
    docker-compose-app-*.yml \
    docker-compose-il-*.yml \
    docker-compose-services.yml \
    > deploy.yml;
docker-compose -f deploy.yml config > deploy-result.yml;
cat deploy-result.yml