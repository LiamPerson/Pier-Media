/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type DownloadSettings = {
  __typename?: 'DownloadSettings';
  audioPath: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imagePath: Scalars['String']['output'];
  path: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  videoPath: Scalars['String']['output'];
};

export type DownloadSettingsInput = {
  audioPath?: InputMaybe<Scalars['String']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  videoPath?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  update_settings: Settings;
};


export type MutationUpdate_SettingsArgs = {
  input?: InputMaybe<SettingsInput>;
};

export type Query = {
  __typename?: 'Query';
  settings: Settings;
};

export type Settings = {
  __typename?: 'Settings';
  downloadSettingsId: Scalars['Int']['output'];
  downloads: DownloadSettings;
  id: Scalars['Int']['output'];
};

export type SettingsInput = {
  downloads?: InputMaybe<DownloadSettingsInput>;
};

export type UpdateSettingsMutationVariables = Exact<{
  input?: InputMaybe<SettingsInput>;
}>;


export type UpdateSettingsMutation = { __typename?: 'Mutation', update_settings: { __typename?: 'Settings', id: number, downloads: { __typename?: 'DownloadSettings', id: number, updatedAt: string } } };

export type GetSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSettingsQuery = { __typename?: 'Query', settings: { __typename?: 'Settings', id: number, downloads: { __typename?: 'DownloadSettings', id: number, updatedAt: string, audioPath: string } } };


export const UpdateSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SettingsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_settings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"downloads"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateSettingsMutation, UpdateSettingsMutationVariables>;
export const GetSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"settings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"downloads"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"audioPath"}}]}}]}}]}}]} as unknown as DocumentNode<GetSettingsQuery, GetSettingsQueryVariables>;