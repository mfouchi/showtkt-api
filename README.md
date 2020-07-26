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

### Retrieve all events on or after a given date sorted by date

```graphql
{
  eventsAfterDate(
    skip: 0
    take: 10
    orderBy: { dateTime: asc }
    filter: "2020-03-08T00:00:00.000Z"
  ) {
    id
    name
    dateTime
    maxAdmission

    production {
      id
      name
    }
    venue {
      id
      name
    }
  }
}
```

## Evolving the app

Evolving the application typically requires four subsequent steps:

### Schema-First (preferred, but experimental)

1. Update the SDL [`./prisma/schema.prisma`](./prisma/schema.prisma)
2. Update the database by migrating the SDL with

   `prisma migrate save --experimental`  
   `prisma migrate up --experimental`

3. Generate Prisma Client to match the new database schema with `prisma generate`
4. Use the updated Prisma Client in your application code

### Database-First:

This method will overwrite changes to the schema (like making list objects plural (ie: events or productions))

1. Migrate the database schema using SQL
2. Update your Prisma schema by introspecting the database with `prisma introspect`
3. Generate Prisma Client to match the new database schema with `prisma generate`
4. Use the updated Prisma Client in your application code

## Seeding the database

Edit data in [`./prisma/seed.ts`](./prisma/seed.ts)

Then run:

`ts-node ./prisma/seed'
