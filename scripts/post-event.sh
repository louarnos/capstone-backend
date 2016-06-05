TOKEN="Gtejqx/gFW44Tp+c3B/BSP9NoszOV0KwjrGjzRK5cfQ=--1fzWljsKAfPGou/4RXjJpfhYGl7QnMpRxsjgehT1Iu0="

curl --include --request POST http://localhost:3000/events \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "event": {
      "artist": "Radiohead",
      "location": {
        "venue": {
          "name": "House of Blues",
          "city": "Boston",
          "region": "MA"
        }
      },
      "date": {
        "month": "Nov",
        "day": {
          "name": "Sunday",
          "num_of_day":  "3"
        }
      }
    }
  }'
