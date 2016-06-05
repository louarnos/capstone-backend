TOKEN="Gtejqx/gFW44Tp+c3B/BSP9NoszOV0KwjrGjzRK5cfQ=--1fzWljsKAfPGou/4RXjJpfhYGl7QnMpRxsjgehT1Iu0="
curl --include --request PUT http://localhost:3000/add-followee \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "followee_id": "575357b086d33dd1084ad355"
}'

TOKEN="Gtejqx/gFW44Tp+c3B/BSP9NoszOV0KwjrGjzRK5cfQ=--1fzWljsKAfPGou/4RXjJpfhYGl7QnMpRxsjgehT1Iu0="
curl --include --request PUT http://localhost:3000/add-followee \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "followee_id": "575357b886d33dd1084ad356"
}'
