TOKEN="q4Cy6aQDyd15isbFDQw3iMz4E2MVG4q7lyCuk9vJ1tE=--+KTJEHPp5HxKc/96i0oggYe8cAYYq+B+wf/Ixa7Ot20="

curl --include --request PATCH http://localhost:3000/add-followee \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "followee_id": "575311daed611ca382bdf31d"
}'
