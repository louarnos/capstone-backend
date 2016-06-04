#!/bin/bash

curl --include --request POST http://localhost:3000/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password",
      "password_confirmation": "an example password",
      "username": "example"
    }
  }'

curl --include --request POST http://localhost:3000/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "another@example.email",
      "password": "an example password",
      "password_confirmation": "an example password",
      "username": "dogbro"
    }
  }'

  curl --include --request POST http://localhost:3000/sign-up \
    --header "Content-Type: application/json" \
    --data '{
      "credentials": {
        "email": "lou@lou.com",
        "password": "lou",
        "password_confirmation": "lou",
        "username": "atache"
      }
    }'
