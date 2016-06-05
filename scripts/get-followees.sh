
TOKEN="Gtejqx/gFW44Tp+c3B/BSP9NoszOV0KwjrGjzRK5cfQ=--1fzWljsKAfPGou/4RXjJpfhYGl7QnMpRxsjgehT1Iu0="

curl --include --request GET http://localhost:3000/followees \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN"
