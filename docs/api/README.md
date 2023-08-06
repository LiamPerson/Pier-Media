# How to interact with the API in this project

Interacting with the API is how you get data from the database.

## API Routes

`/pages/api`

API routes are located in the `pages/api` directory. These routes are automatically mapped to the `/api/*` endpoint. For example, the route in `pages/api/hello.ts` is mapped to `/api/hello`. This functionality comes from [Next](../packages/README.md#Next). You might think to add your TypeScript code there to handle the interaction with the database but that is a **no-go bad-person idea**. Instead see below for the services folder.

## Services Directory

`/services`

All API routes must have a meaningful reason to exist. We can cull out a lot of garbage by forcing you to create a service for each API route. If something doesn't feel like it fits into a service, then you probably wrote some bad code and should reconsider the architecture of what you're doing.

Handlers have a one-to-one(or none) relationship to consumers, and consumers have a one-to-one relationship with handlers. To say it again in English, each consumer **MUST HAVE** one handler, while a handler can optionally have a consumer but it doesn't care. Why can a handler not a have a consumer you might ask? Think webhooks. A third-party service might want to send us messages that we want to handle.

Services are broken down into three main components. `endpoints`, `handlers`, and `consumers`. 

### Endpoints

`/services/*/endpoints.ts`

A collection of all the endpoints for a service. You will not write string literals in this project. You will write constants that are exported from this file and used in the `consumers`.

### Handlers

`/services/*/handlers/*.ts`

Handlers are the backend Node environment code files that _handle_ requests to the API.

### Consumers

`/services/*/consumers/*.ts`

Consumers are the functions used on the frontend to send messages to the API. You will not write code that interacts with the API outside of these files.