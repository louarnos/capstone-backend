TOKEN="/RV0YBu0NLKvY+ce8ap2PIScKWBj7UxVb7V/fn9NbGA=--qmbke71N2m0zbHJMCYSUHLQgM6j73tYd38Kx/C9oVKM="

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
