#!/bin/sh

echo Running client specs

docker-compose run --rm films-client npm test -- $*
