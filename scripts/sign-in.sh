#!/bin/bash
TOKEN="q4Cy6aQDyd15isbFDQw3iMz4E2MVG4q7lyCuk9vJ1tE=--+KTJEHPp5HxKc/96i0oggYe8cAYYq+B+wf/Ixa7Ot20="
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
