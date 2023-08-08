# A complete breakdown of the package.json

# Scripts

`dev`: Used to generate [GraphQL](#graphql-codegencli) types and run the [Next](#next) server at the same time.
`build`: Used to build the [Next](#next) server.
`start`: Used to start the [Next](#next) server. _(Optionally we can change this to use `next export` to save the server as HTML)_
`lint`: Used to lint the project.
`codegen`: Used to generate codegen files.
`codegen:watch`: Used to automatically generate codegen files when files change.

# Production Packages

All packages added should have their reason added here. This project should have minimal dependencies.

It's easiest to presume `@types/*` sub-packages are for TypeScript type definitions.

## [TypeScript](https://www.typescriptlang.org/)

TypeScript is a typed variant of JavaScript that nudges developers closer to developing more terse code with its static type checking.

## [React](https://react.dev/)
### Sub-packages
- [react-dom](https://www.npmjs.com/package/react-dom) (For converting React components to HTML)
- [@types/react](https://www.npmjs.com/package/@types/react)
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom)

React is used as a common base to build the UI of the project. It was chosen as it has a strong ecosystem and community-support network.

## [Next](https://nextjs.org/)
### Sub-packages
- [@types/node](https://www.npmjs.com/package/@types/node)


NextJS is used in this project to allow easy routing with React, API routes, and integration with TypeScript. This is the main glue that allows us to develop the frontend and backend on the same repository.

## [@mui/material](https://mui.com/material-ui)
### Sub-packages
- [@emotion/react](https://emotion.sh/docs/@emotion/react) (for styling) _[Do we really need this?]_
- [@emotion/styled](https://emotion.sh/docs/introduction) (for styling)
- [@mui/icons-material](https://mui.com/material-ui/material-icons/) (for icons) _[Do we really need this?]_

Material UI is chosen as a base template to help build out the styles and functionality of components in an opinionated way across the site. When you build components for this site you should ALWAYS use Material UI components before even thinking about creating your own component. This is to prevent 1-million different implementations of a modal.

## [Prisma](https://www.prisma.io/)
### Sub-packages
- [@prisma/client](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient) (for interaction with prisma from the frontend)
### VSCode Extension Requirements
- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)
- [SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite) _(Only if you want to view the database in VSCode)_

Prisma is our interface with the database that handles the schema, migrations, queries, and connection. This will be the only way you interact with the database in this project (aside from viewing the sqlite database in a viewer while testing).

## [GraphQL](https://graphql.org/)
### VSCode Extension Requirements
- [GraphQL](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql)

The query language used to interact with our Apollo server. Heavily simplifies querying and types for a better developer experience.

## [@apollo/server](https://www.apollographql.com/docs/apollo-server/)
### Sub-packages
- [@as-integrations/next](https://github.com/apollo-server-integrations/apollo-server-integration-next) (for integration with [NextJS](#next))

Our GraphQL server that heavily simplifies querying and types.

## [@apollo/client](https://www.apollographql.com/docs/react/get-started)

A hook-based approach to interacting with the graphql API. Anywhere you need to interact with the api should use this in the form of either `useQuery` _(get something)_ or `useMutation` _(change something)_.

## [ESLint](https://eslint.org/)
### Sub-packages
- [eslint-config-next](https://www.npmjs.com/package/eslint-config-next) (for NextJS specific linting rules)
### VSCode Extension Requirements
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

To force you to develop correctly by introducing linting rules and more static tests.

## [AJV](https://ajv.js.org/)

Another JSON schema Validator used to validate JSON data in API requests and generate errors for us.

## [@tanstack/react-query](https://react-query.tanstack.com/)

A hook-based approach to handling queries that also handles, errors, state changes, and caching for us. Anywhere you need to interact with the api should use this in the form of either `useQuery` _(get something)_ or `useMutation` _(change something)_.

## [axios](https://axios-http.com/)

Basically what fetch does but with better error handling and types. We need this for use with `@tanstack/react-query`. All things you would think to do in fetch will be done in axios in this project.

## [usehooks-ts](https://usehooks-ts.com/)

A large collection of hooks you would eventually make anyway but it gets maintained for free by someone else 🤑💰💲💸.

Before introducing a new hook, check it doesn't already exist in this library.

## [deepmerge-ts](https://www.npmjs.com/package/deepmerge-ts)

Easily do deep merges of objects and arrays. Quick and easy implementation without having to upkeep it or worry about performance.

# Development Packages

## [@graphql-codegen/cli](https://github.com/dotansimha/graphql-code-generator)
### Sub-packages
- [@graphql-codegen/client-preset](https://the-guild.dev/graphql/codegen/plugins/presets/preset-client) (support for client-side code generation consumed in [@apollo/client](#apollo-client))
- [@graphql-codegen/typescript](https://the-guild.dev/graphql/codegen/plugins/typescript) (for generating types)
- [@graphql-codegen/typescript-resolvers](https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-resolvers) (for generating resolver types) 
- [@parcel/watcher](https://www.npmjs.com/package/@parcel/watcher) (for watching files for changes and re-generating codegen files)

Used to generate types for the GraphQL API interface. This is so we don't have to re-write the graphql types in TypeScript.

## [Concurrently](https://www.npmjs.com/package/concurrently)

Used to run multiple scripts at once. For example, we want to run [codegen](#graphql-codegencli) and our [Next](#next) server at the same time during development.

## [husky](https://typicode.github.io/husky/#/)

For injecting scripts before you commit to make sure you aren't committing garbage.

## [lint-staged](https://github.com/okonet/lint-staged)

To inject scripts onto specifically the staged files in git.

## [prettier](https://prettier.io/)

To format your code on commit so we don't have to worry about people conforming to a specific style. You will conform!