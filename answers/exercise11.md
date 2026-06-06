# Redis CLI

```bash
➜  todo-backend git:(main) ✗ docker compose exec -it redis redis-cli
127.0.0.1:6379> KEYS added_todos
1) "added_todos"
127.0.0.1:6379> GET added_todos
"5"
127.0.0.1:6379> SET added_todos 9001
OK
```

- added todo using curl

```curl
➜  todo-backend git:(main) ✗ curl -X POST -H "Content-Type: application/json" -d '{"text":"testing","done":false}' http://localhost:3000/todos
{"text":"testing","done":false,"_id":"6a238b7016a4e3c0298bef45","__v":0}%

```

```bash
127.0.0.1:6379> GET added_todos
"9002"
127.0.0.1:6379> DEL added_todos
(integer) 1
```

- added todo back again

```bash
127.0.0.1:6379> GET added_todos
"1"
```
