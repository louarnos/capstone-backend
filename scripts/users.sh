#!/bin/bash
TOKEN="CKeJc82rFhKSLS9/GS35uP2HMOLAGVmcIICvml7jOyI=--ZRTmDHRytcUHVuO6si9/GP6Fb9NijXfMZonWUoSTdgc="
curl --include --request GET http://localhost:3000/users \
  --header "Authorization: Token token=$TOKEN"
