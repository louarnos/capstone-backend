
TOKEN="q4Cy6aQDyd15isbFDQw3iMz4E2MVG4q7lyCuk9vJ1tE=--+KTJEHPp5HxKc/96i0oggYe8cAYYq+B+wf/Ixa7Ot20="

curl --include --request GET http://localhost:3000/followees \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" 
