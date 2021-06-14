#!/bin/bash

cd C:\Users\AlexFeelter\Documents\feelter-signup-component-upd\build_keycloak

docker rm keycloak-testing-container || true

docker build . -t feelter-signup-component-upd/keycloak-hot-reload

docker run \
	-p 8080:8080 \
	--name keycloak-testing-container \
	-e KEYCLOAK_USER=admin \
	-e KEYCLOAK_PASSWORD=admin \
	-v C:\Users\AlexFeelter\Documents\feelter-signup-component-upd\build_keycloak\src\main\resources\theme\feelter-signup-component-upd:/opt/jboss/keycloak/themes/feelter-signup-component-upd:rw \
	-it feelter-signup-component-upd/keycloak-hot-reload:latest
