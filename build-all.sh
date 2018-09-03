#!/bin/bash

cd uaa && ./gradlew bootWar -Pprod buildDocker &
cd onlineshop && ./gradlew bootWar -Pprod buildDocker &
cd gateway && ./gradlew bootWar -Pprod buildDocker &

wait;

echo "built all!"
