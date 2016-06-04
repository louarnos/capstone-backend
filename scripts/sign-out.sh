#!/bin/bash
TOKEN="nLoA+Ga8WVywbmVgkrvEtg=="
ID="574f8add3eebb13b2feb213b"
curl --include --request DELETE http://localhost:3000/sign-out/$ID \
  --header "Authorization: Token token=$TOKEN"
