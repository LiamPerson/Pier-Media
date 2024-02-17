/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation UpdateSettings($input: SettingsInput) {\n  update_settings(input: $input) {\n    id\n    downloads {\n      id\n      updatedAt\n    }\n  }\n}": types.UpdateSettingsDocument,
    "query GetGenres {\n  genres {\n    id\n    name\n    description\n  }\n}": types.GetGenresDocument,
    "query GetSettings {\n  settings {\n    id\n    downloads {\n      id\n      updatedAt\n      audioPath\n      videoPath\n      imagePath\n      metadataPath\n      path\n    }\n  }\n}": types.GetSettingsDocument,
    "query GetTracks($where: TrackWhereInput) {\n  tracks(where: $where) {\n    id\n    title\n    genre {\n      id\n      name\n      description\n    }\n    bitrate\n    originalUrl\n    author {\n      id\n      name\n      provider {\n        id\n        name\n        domain\n      }\n    }\n    file {\n      id\n      location\n    }\n    contributors {\n      id\n      name\n    }\n    duration\n    thumbnail {\n      width\n      height\n      id\n      file {\n        id\n        location\n      }\n    }\n  }\n}": types.GetTracksDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateSettings($input: SettingsInput) {\n  update_settings(input: $input) {\n    id\n    downloads {\n      id\n      updatedAt\n    }\n  }\n}"): (typeof documents)["mutation UpdateSettings($input: SettingsInput) {\n  update_settings(input: $input) {\n    id\n    downloads {\n      id\n      updatedAt\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetGenres {\n  genres {\n    id\n    name\n    description\n  }\n}"): (typeof documents)["query GetGenres {\n  genres {\n    id\n    name\n    description\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetSettings {\n  settings {\n    id\n    downloads {\n      id\n      updatedAt\n      audioPath\n      videoPath\n      imagePath\n      metadataPath\n      path\n    }\n  }\n}"): (typeof documents)["query GetSettings {\n  settings {\n    id\n    downloads {\n      id\n      updatedAt\n      audioPath\n      videoPath\n      imagePath\n      metadataPath\n      path\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetTracks($where: TrackWhereInput) {\n  tracks(where: $where) {\n    id\n    title\n    genre {\n      id\n      name\n      description\n    }\n    bitrate\n    originalUrl\n    author {\n      id\n      name\n      provider {\n        id\n        name\n        domain\n      }\n    }\n    file {\n      id\n      location\n    }\n    contributors {\n      id\n      name\n    }\n    duration\n    thumbnail {\n      width\n      height\n      id\n      file {\n        id\n        location\n      }\n    }\n  }\n}"): (typeof documents)["query GetTracks($where: TrackWhereInput) {\n  tracks(where: $where) {\n    id\n    title\n    genre {\n      id\n      name\n      description\n    }\n    bitrate\n    originalUrl\n    author {\n      id\n      name\n      provider {\n        id\n        name\n        domain\n      }\n    }\n    file {\n      id\n      location\n    }\n    contributors {\n      id\n      name\n    }\n    duration\n    thumbnail {\n      width\n      height\n      id\n      file {\n        id\n        location\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;