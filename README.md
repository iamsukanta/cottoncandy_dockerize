For running project you should give two command:
1. make setup
2. make frontend-run

If make command not supported then you shuould give:
docker-compose build --no-cache
docker-compose up -d

For frontend running go to frontend bash directory:
docker exec -it cottoncandy-frontend-app bash

Then, run command:
npm run dev

-----------------------------------------------------------
Backend will running this address: http://localhost:9000
Frontend will running this address: http://localhost:8080
