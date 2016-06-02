
curl --include --request POST http://localhost:3000/eventful \
  --header "Content-Type: application/json" \
  --data '{
    "keywords": "chvrches",
    "location": "boston"
  }'

  curl --include --request POST http://localhost:3000/eventful \
    --header "Content-Type: application/json" \
    --data '{
      "keywords": "radiohead"
    }'

curl --include --request POST http://localhost:3000/eventful \
  --header "Content-Type: application/json" \
  --data '{
    "keywords": "kanye+west"
  }'
