#!/bin/bash
TOKEN="WDToP6p7tci5K4BXA0JALBO+EmGVrvzd50VR2wKmaOs=--7fMl+SxUDsGC6B0P0usC/GjfoSwUlW7mTqd3SdRR3I8="
ID="574f8add3eebb13b2feb213b"
curl --include --request DELETE http://localhost:3000/sign-out/$ID \
  --header "Authorization: Token token=$TOKEN"
