For running project you should give two command:
1. make setup
2. make frontend-run

If make command not supported then you shuould give:
1. docker-compose build --no-cache
2. docker-compose up -d

For frontend running go to frontend bash directory:
1. docker exec -it cottoncandy-frontend-app bash

Then, run command:
1. npm run dev

-----------------------------------------------------------
# Backend will running this address: http://localhost:9000

# Frontend will running this address: http://localhost:8080
