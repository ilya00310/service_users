# remainderGoods

Чтобы начать работать с сервисами, нужно:

1. Прописать свой .env файл, с данными локальной бд, формата:

```
PORT= 8081
DB_USER='some user'
DB_HOST="localhost"
DB_NAME="some name db"
DB_PASSWORD="some password db"
DB_PORT=some port
DB_CONNECTION_STRING = postgres://user:password@localhost:port/db name
DB_DIALECT="postgres"
```

2. Создать и наполнить таблицы:

```
make migrate_latest
make seed_run
```

3. Запустить сервис

```
make start
//
```

4. Производить соответсвующие запросы через postman или curl
