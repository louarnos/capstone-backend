CITY='boston'
PERFORMER='Dave+Matthews+Band'
curl --include --request GET http://eventful.com/json/events?q=music&l=$CITY&performer=$performer
  --header "Content-Type: application/json"
