EVENT_ID='574f928f093be96a328c0ba9'
TOKEN="jWVTCXe5UL4AWhkfBMQ+0KzEbDrDjyZ5dIq2w8C3ueM=--gRIOXzdVWYAxJwL9NO2IyFBC893XGnUoM1nK4Ycm9T4="

curl --include --request GET http://localhost:3000/events/$EVENT_ID \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN"

TOKEN"jWVTCXe5UL4AWhkfBMQ+0KzEbDrDjyZ5dIq2w8C3ueM=--gRIOXzdVWYAxJwL9NO2IyFBC893XGnUoM1nK4Ycm9T4="

  curl --include --request GET http://localhost:3000/events/ \
    --header "Content-Type: application/json" \
    --header "Authorization: Token token=$TOKEN"
