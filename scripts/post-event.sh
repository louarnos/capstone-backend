TOKEN="wHpU7Nh30yX1I4qsrb3rpxuezoeXh6+L1rWQpvXalUo=--NJeeFQlZVB9KPdhjWkhsEZNsWE8XRaQ4+4FsM8WtggY="

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
