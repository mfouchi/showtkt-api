# ShowTkt GraphQL API using Apollo Server and Prisma

## How to use

### 1. Download repo & install dependencies

Clone this repository:

```
git clone git@github.com:mfouchi/showtkt-api.git
```

Install npm dependencies:

```
cd showtkt-api
npm install
```

Note that this also generates Prisma Client JS into `node_modules/@prisma/client` via a `postinstall` hook of the `@prisma/client` package from your `package.json`.

### 2. Start the GraphQL server

Launch your GraphQL server with this command:

```
npm run dev
```

Navigate to [http://localhost:4000](http://localhost:4000) in your browser to explore the API in a GraphQL Playground.

## Using the GraphQL API

The schema that specifies the API operations of the GraphQL server is defined in [`./src/schema/schema.graphql`](./src/schema/schema.graphql). Below are a number of operations that you can send to the API using the GraphQL Playground.

Feel free to adjust any operation by adding or removing fields. The GraphQL Playground helps you with its auto-completion and query validation features.

### Retrieve all current productions and their event dates

```graphql
query {
  productions {
    id
    name
    ticketProvider {
      name
    }
    events {
      id
      name
      datetime
      ticketProvider {
        name
      }
    }
  }
}
```

## Evolving the app

Evolving the application typically requires four subsequent steps:

1. Migrating the database schema using SQL
2. Updating your Prisma schema by introspecting the database with `prisma introspect`
3. Generating Prisma Client to match the new database schema with `prisma generate`
4. Use the updated Prisma Client in your application code
