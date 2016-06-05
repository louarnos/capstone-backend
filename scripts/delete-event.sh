TOKEN="Gtejqx/gFW44Tp+c3B/BSP9NoszOV0KwjrGjzRK5cfQ=--1fzWljsKAfPGou/4RXjJpfhYGl7QnMpRxsjgehT1Iu0="
ID="5753730e0f06a762139229d5"

curl --include --request DELETE http://localhost:3000/events/$ID \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN"
