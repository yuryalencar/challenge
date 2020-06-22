up:
	@echo '*'
	@echo '*'
	@echo '************  Installing dependencies ************'
	@echo '*'
	@echo '*'
	npm i

	@echo '*'
	@echo '*'
	@echo '************  Upping Challenge Container ************'
	@echo '*'
	@echo '*'
	docker-compose up -d

test:
	@echo '*'
	@echo '*'
	@echo '************  Stopping Challenge Container ************'
	@echo '*'
	@echo '*'
	docker stop challenge_app_1

	@echo '*'
	@echo '*'
	@echo '************  Running Tests ************'
	@echo '*'
	@echo '*'
	npm t

down:
	@echo '*'
	@echo '*'
	@echo '************  Stopping Challenge Container ************'
	@echo '*'
	@echo '*'
	docker stop challenge_app_1
