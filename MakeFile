include .env

up: # create and start containers
	@docker-compose -f ${DOCKER_CONFIG} up -d

down: # stop and destroy containers
	@docker-compose -f ${DOCKER_CONFIG} down

down-volume: #  WARNING: stop and destroy containers with volumes
	@docker-compose -f ${DOCKER_CONFIG} down -v

build: # build containers
	@docker-compose -f ${DOCKER_CONFIG} build

ps: # show started containers and their status
	@docker-compose -f ${DOCKER_CONFIG} ps

start_api: # node command line
	@docker-compose -f ${DOCKER_CONFIG} exec -w /www/ -T api npm run dev

start_api_dev: # node command line
	@docker-compose -f ${DOCKER_CONFIG} exec -w /www/ -T api npm run demon_dev

test: # node command line
	@docker-compose -f ${DOCKER_CONFIG} exec  -w /www/ api npm run test

connect_api: # node command line
	@docker-compose -f ${DOCKER_CONFIG} exec  -w /www/ api bash

migrating: # reRun all migrations command line
	@docker-compose -f ${DOCKER_CONFIG} exec  -w /www/ -T api npx sequelize-cli db:migrate

unmigrating: # reRun all migrations command line
	@docker-compose -f ${DOCKER_CONFIG} exec  -w /www/ -T api npx sequelize-cli db:migrate:undo:all

seedind: # Seedding fake data command line
	@docker-compose -f ${DOCKER_CONFIG} exec  -w /www/ -T api npx sequelize-cli db:seed:all

# todo add fresh JWT_KEY, add volume to .env
fresh: unmigrating migrating seedind # ReFresh DB and Seedding fake data command line
	@echo 'Undo all migrations, run all migrations, seeding fake data'

connect_db: # database command line
	@docker-compose -f ${DOCKER_CONFIG} exec db bash

database-open:
	@docker-compose -f ${DOCKER_CONFIG} exec db mysql -uroot -p${DOCKER_PASSWORD} ${DOCKER_DATABASE}

database-dump: # dump database
	@docker-compose -f ${DOCKER_CONFIG} exec db bash -c "mysqldump ${DOCKER_DATABASE} -u${DOCKER_USERNAME} -p${DOCKER_PASSWORD} 2> /dev/null"

create_model: # create model name=[modelName] and Migration
	@docker-compose -f ${DOCKER_CONFIG} exec -w /www/ api npx sequelize-cli model:generate --name $(name) --attributes name:string

create_seeder: # create model name=[seederName]
	@docker-compose -f ${DOCKER_CONFIG} exec -w /www/ api npx sequelize-cli seed:generate --name $(name)