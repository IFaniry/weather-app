import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

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
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Current: ResolverTypeWrapper<Current>;
  Daily: ResolverTypeWrapper<Daily>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Query: ResolverTypeWrapper<{}>;
  Response: ResolverTypeWrapper<Response>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Temp: ResolverTypeWrapper<Temp>;
  Weather: ResolverTypeWrapper<Weather>;
  Wind: ResolverTypeWrapper<Wind>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Current: Current;
  Daily: Daily;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Query: {};
  Response: Response;
  String: Scalars['String'];
  Temp: Temp;
  Weather: Weather;
  Wind: Wind;
}>;

export type CurrentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Current'] = ResolversParentTypes['Current']> = ResolversObject<{
  humidity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pressure?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sunrise?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sunset?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wind_speed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DailyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Daily'] = ResolversParentTypes['Daily']> = ResolversObject<{
  dt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temp?: Resolver<Maybe<ResolversTypes['Temp']>, ParentType, ContextType>;
  weather?: Resolver<Maybe<ResolversTypes['Weather']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  weatherByCity?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<QueryWeatherByCityArgs, 'city'>>;
}>;

export type ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Response'] = ResolversParentTypes['Response']> = ResolversObject<{
  current?: Resolver<Maybe<ResolversTypes['Current']>, ParentType, ContextType>;
  daily?: Resolver<Maybe<Array<Maybe<ResolversTypes['Daily']>>>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TempResolvers<ContextType = any, ParentType extends ResolversParentTypes['Temp'] = ResolversParentTypes['Temp']> = ResolversObject<{
  day?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  night?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WeatherResolvers<ContextType = any, ParentType extends ResolversParentTypes['Weather'] = ResolversParentTypes['Weather']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  main?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WindResolvers<ContextType = any, ParentType extends ResolversParentTypes['Wind'] = ResolversParentTypes['Wind']> = ResolversObject<{
  deg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  speed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Current?: CurrentResolvers<ContextType>;
  Daily?: DailyResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Response?: ResponseResolvers<ContextType>;
  Temp?: TempResolvers<ContextType>;
  Weather?: WeatherResolvers<ContextType>;
  Wind?: WindResolvers<ContextType>;
}>;

