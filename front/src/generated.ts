import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Current = {
  __typename?: 'Current';
  humidity?: Maybe<Scalars['String']>;
  pressure?: Maybe<Scalars['String']>;
  sunrise?: Maybe<Scalars['String']>;
  sunset?: Maybe<Scalars['String']>;
  wind_speed?: Maybe<Scalars['String']>;
};

export type Daily = {
  __typename?: 'Daily';
  dt?: Maybe<Scalars['Float']>;
  temp?: Maybe<Temp>;
  weather?: Maybe<Weather>;
};

export type Query = {
  __typename?: 'Query';
  weatherByCity?: Maybe<Response>;
};


export type QueryWeatherByCityArgs = {
  city: Scalars['String'];
};

export type Response = {
  __typename?: 'Response';
  current?: Maybe<Current>;
  daily?: Maybe<Array<Maybe<Daily>>>;
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
  timezone?: Maybe<Scalars['String']>;
};

export type Temp = {
  __typename?: 'Temp';
  day?: Maybe<Scalars['Float']>;
  night?: Maybe<Scalars['Float']>;
};

export type Weather = {
  __typename?: 'Weather';
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  main?: Maybe<Scalars['String']>;
};

export type Wind = {
  __typename?: 'Wind';
  deg?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
};

export type WeatherByCityQueryVariables = Exact<{
  city: Scalars['String'];
}>;


export type WeatherByCityQuery = { __typename?: 'Query', weatherByCity?: { __typename?: 'Response', timezone?: string | null, lat?: number | null, lon?: number | null, current?: { __typename?: 'Current', humidity?: string | null, pressure?: string | null, sunrise?: string | null, sunset?: string | null, wind_speed?: string | null } | null, daily?: Array<{ __typename?: 'Daily', dt?: number | null, weather?: { __typename?: 'Weather', id?: string | null, main?: string | null, description?: string | null, icon?: string | null } | null, temp?: { __typename?: 'Temp', night?: number | null, day?: number | null } | null } | null> | null } | null };


export const WeatherByCityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"weatherByCity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"city"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weatherByCity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"city"},"value":{"kind":"Variable","name":{"kind":"Name","value":"city"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"humidity"}},{"kind":"Field","name":{"kind":"Name","value":"pressure"}},{"kind":"Field","name":{"kind":"Name","value":"sunrise"}},{"kind":"Field","name":{"kind":"Name","value":"sunset"}},{"kind":"Field","name":{"kind":"Name","value":"wind_speed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lon"}},{"kind":"Field","name":{"kind":"Name","value":"daily"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weather"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"main"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dt"}},{"kind":"Field","name":{"kind":"Name","value":"temp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"night"}},{"kind":"Field","name":{"kind":"Name","value":"day"}}]}}]}}]}}]}}]} as unknown as DocumentNode<WeatherByCityQuery, WeatherByCityQueryVariables>;