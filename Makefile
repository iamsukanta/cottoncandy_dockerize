setup:
	@make build
	@make up 
	@make composer-update
build:
	docker-compose build --no-cache --force-rm
stop:
	docker-compose stop
up:
	docker-compose up -d
composer-update:
	docker exec cottoncandy-backend-app bash -c "composer update"
data:
	docker exec cottoncandy-backend-app bash -c "php artisan migrate"
	docker exec cottoncandy-backend-app bash -c "php artisan db:seed"
frontend-run:
	docker exec cottoncandy-frontend-app bash -c "npm run dev"