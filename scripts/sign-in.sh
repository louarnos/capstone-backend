#!/bin/bash
TOKEN="Gtejqx/gFW44Tp+c3B/BSP9NoszOV0KwjrGjzRK5cfQ=--1fzWljsKAfPGou/4RXjJpfhYGl7QnMpRxsjgehT1Iu0="
  curl --include --request POST http://localhost:3000/sign-in \
    --header "Content-Type: application/json" \
    --data '{
      "credentials": {
        "email": "lou@lou.com",
        "password": "lou",
        "username": "atache"
      }
    }'

    curl --include --request POST http://localhost:3000/sign-in \
      --header "Content-Type: application/json" \
      --data '{
        "credentials": {
          "email": "an@example.email",
          "password": "an example password"
        }
      }'
