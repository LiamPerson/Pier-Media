import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AffectedRows = {
  __typename?: 'AffectedRows';
  affected_rows: Scalars['Int']['output'];
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  provider: Provider;
};

export type AuthorInput = {
  _where: WithId;
  name?: InputMaybe<Scalars['String']['input']>;
  providerId?: InputMaybe<Scalars['Int']['input']>;
};

export type DownloadSettings = {
  __typename?: 'DownloadSettings';
  audioPath: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imagePath: Scalars['String']['output'];
  metadataPath: Scalars['String']['output'];
  path: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  videoPath: Scalars['String']['output'];
};

export type DownloadSettingsInput = {
  audioPath?: InputMaybe<Scalars['String']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  metadataPath?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  videoPath?: InputMaybe<Scalars['String']['input']>;
};

export type File = {
  __typename?: 'File';
  id: Scalars['Int']['output'];
  location: Scalars['String']['output'];
};

export type GenericDownloadInput = {
  overrideOnCollision?: InputMaybe<Scalars['Boolean']['input']>;
  url: Scalars['String']['input'];
};

export type Genre = {
  __typename?: 'Genre';
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type GenreInput = {
  _where: WithId;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type GenreWhereInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type Image = {
  __typename?: 'Image';
  file: File;
  height: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};

export type InitializeGenresInput = {
  overrideExisting?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  download_audio: Track;
  initialize_genres: Scalars['Boolean']['output'];
  update_audio: AffectedRows;
  update_settings: Settings;
};


export type MutationDownload_AudioArgs = {
  input: GenericDownloadInput;
};


export type MutationInitialize_GenresArgs = {
  input?: InputMaybe<InitializeGenresInput>;
};


export type MutationUpdate_AudioArgs = {
  input?: InputMaybe<TrackInput>;
};


export type MutationUpdate_SettingsArgs = {
  input?: InputMaybe<SettingsInput>;
};

export type Provider = {
  __typename?: 'Provider';
  domain: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type ProviderInput = {
  _where: WithId;
  domain?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  genres: Array<Maybe<Genre>>;
  settings: Settings;
  tracks: Array<Maybe<Track>>;
};


export type QueryTracksArgs = {
  where?: InputMaybe<TrackWhereInput>;
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

export type Track = {
  __typename?: 'Track';
  author: Author;
  bitrate: Scalars['Int']['output'];
  contributors?: Maybe<Array<Maybe<Author>>>;
  duration: Scalars['Int']['output'];
  file: File;
  genre?: Maybe<Genre>;
  id: Scalars['Int']['output'];
  originalUrl: Scalars['String']['output'];
  thumbnail: Image;
  title: Scalars['String']['output'];
};

export type TrackInput = {
  _where: WithId;
  authorId?: InputMaybe<Scalars['Int']['input']>;
  genreId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TrackWhereInput = {
  genre?: InputMaybe<GenreWhereInput>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type WithId = {
  id: Scalars['Int']['input'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AffectedRows: ResolverTypeWrapper<AffectedRows>;
  Author: ResolverTypeWrapper<Author>;
  AuthorInput: AuthorInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  DownloadSettings: ResolverTypeWrapper<DownloadSettings>;
  DownloadSettingsInput: DownloadSettingsInput;
  File: ResolverTypeWrapper<File>;
  GenericDownloadInput: GenericDownloadInput;
  Genre: ResolverTypeWrapper<Genre>;
  GenreInput: GenreInput;
  GenreWhereInput: GenreWhereInput;
  Image: ResolverTypeWrapper<Image>;
  InitializeGenresInput: InitializeGenresInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Provider: ResolverTypeWrapper<Provider>;
  ProviderInput: ProviderInput;
  Query: ResolverTypeWrapper<{}>;
  Settings: ResolverTypeWrapper<Settings>;
  SettingsInput: SettingsInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Track: ResolverTypeWrapper<Track>;
  TrackInput: TrackInput;
  TrackWhereInput: TrackWhereInput;
  WithId: WithId;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AffectedRows: AffectedRows;
  Author: Author;
  AuthorInput: AuthorInput;
  Boolean: Scalars['Boolean']['output'];
  DownloadSettings: DownloadSettings;
  DownloadSettingsInput: DownloadSettingsInput;
  File: File;
  GenericDownloadInput: GenericDownloadInput;
  Genre: Genre;
  GenreInput: GenreInput;
  GenreWhereInput: GenreWhereInput;
  Image: Image;
  InitializeGenresInput: InitializeGenresInput;
  Int: Scalars['Int']['output'];
  Mutation: {};
  Provider: Provider;
  ProviderInput: ProviderInput;
  Query: {};
  Settings: Settings;
  SettingsInput: SettingsInput;
  String: Scalars['String']['output'];
  Track: Track;
  TrackInput: TrackInput;
  TrackWhereInput: TrackWhereInput;
  WithId: WithId;
};

export type AffectedRowsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AffectedRows'] = ResolversParentTypes['AffectedRows']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['Provider'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DownloadSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['DownloadSettings'] = ResolversParentTypes['DownloadSettings']> = {
  audioPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  imagePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metadataPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  videoPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Genre'] = ResolversParentTypes['Genre']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  file?: Resolver<ResolversTypes['File'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  download_audio?: Resolver<ResolversTypes['Track'], ParentType, ContextType, RequireFields<MutationDownload_AudioArgs, 'input'>>;
  initialize_genres?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<MutationInitialize_GenresArgs>>;
  update_audio?: Resolver<ResolversTypes['AffectedRows'], ParentType, ContextType, Partial<MutationUpdate_AudioArgs>>;
  update_settings?: Resolver<ResolversTypes['Settings'], ParentType, ContextType, Partial<MutationUpdate_SettingsArgs>>;
};

export type ProviderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Provider'] = ResolversParentTypes['Provider']> = {
  domain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  genres?: Resolver<Array<Maybe<ResolversTypes['Genre']>>, ParentType, ContextType>;
  settings?: Resolver<ResolversTypes['Settings'], ParentType, ContextType>;
  tracks?: Resolver<Array<Maybe<ResolversTypes['Track']>>, ParentType, ContextType, Partial<QueryTracksArgs>>;
};

export type SettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Settings'] = ResolversParentTypes['Settings']> = {
  downloadSettingsId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  downloads?: Resolver<ResolversTypes['DownloadSettings'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrackResolvers<ContextType = any, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  author?: Resolver<ResolversTypes['Author'], ParentType, ContextType>;
  bitrate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Author']>>>, ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  file?: Resolver<ResolversTypes['File'], ParentType, ContextType>;
  genre?: Resolver<Maybe<ResolversTypes['Genre']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  originalUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AffectedRows?: AffectedRowsResolvers<ContextType>;
  Author?: AuthorResolvers<ContextType>;
  DownloadSettings?: DownloadSettingsResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  Genre?: GenreResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Provider?: ProviderResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Settings?: SettingsResolvers<ContextType>;
  Track?: TrackResolvers<ContextType>;
};

