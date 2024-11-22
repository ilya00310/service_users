start:
	npm run start:dev
migrate_latest:
	npx sequelize-cli db:migrate
seed_run:
	npx sequelize-cli db:seed:all
