#!/bin/sh

echo Running API specs

docker-compose run --rm films-api npm test -- $*
