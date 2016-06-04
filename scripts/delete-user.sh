TOKEN="nLoA+Ga8WVywbmVgkrvEtg=="

curl --include --request DELETE http://localhost:3000/user-delete \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "id" : "574f8add3eebb13b2feb213b"
  }'
