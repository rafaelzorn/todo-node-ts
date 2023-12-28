<p align="center">
  <h3 align="center">Todo Node TS</h3>
</p>

---

## Overview

This repository contains a simple API developed in Node.js to manage a to-do list. The application provides basic functionalities to create, read, update, and delete tasks from the list.

## Setup

#### Prerequisites

Before starting, make sure you have Docker installed on your machine.

```bash
$ git clone git@github.com:rafaelzorn/todo-node-ts.git
```

Rename the `.env.example` to `.env`.

```bash
$ docker-compose up -d
```

## Endpoints

```
GET http://localhost:3000/todos
```

```
POST http://localhost:3000/todos

# Payload example
{
    "description": "Test"
}
```

```
PUT http://localhost:3000/todos/1

# Payload example
{
    "description": "Test Two"
}
```

```
DELETE http://localhost:3000/todos/1
```

## Tests

To run the tests, execute the following command.

```bash
docker exec api npm test
```

## Used technologies

- [Typescript](https://www.typescriptlang.org)
- [Express](https://expressjs.com)
- [Prisma](https://www.prisma.io)
- [Mysql](https://www.mysql.com)
- [Jest](https://jestjs.io)
- [Supertest](https://github.com/ladjs/supertest)
