import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
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
  JSON: any;
};

export type Beer = {
  __typename?: 'Beer';
  brands?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['Float']>;
};

export type BeerInput = {
  brands?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  volume?: InputMaybe<Scalars['Float']>;
};

export type Component = {
  __typename?: 'Component';
  id: Scalars['ID'];
  jsonSchema?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  type: Scalars['String'];
  values?: Maybe<Scalars['JSON']>;
};

export type Container = {
  contexts: Array<Context>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<TypeContainerEnum>;
};

export type ContainerComponents = Container & {
  __typename?: 'ContainerComponents';
  components: Array<Component>;
  contexts: Array<Context>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<TypeContainerEnum>;
};

export type ContainerLayout = Container & {
  __typename?: 'ContainerLayout';
  containers: Array<Container>;
  contexts: Array<Context>;
  flexDirection?: Maybe<FlexDirectionEnum>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<TypeContainerEnum>;
};

export type ContainerTemplate = Container & {
  __typename?: 'ContainerTemplate';
  containers: Array<Container>;
  contexts: Array<Context>;
  description?: Maybe<Scalars['String']>;
  flexDirection?: Maybe<FlexDirectionEnum>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  scope?: Maybe<ScopeContainerEnum>;
  type?: Maybe<TypeContainerEnum>;
};

export type Context = {
  __typename?: 'Context';
  id: Scalars['ID'];
  subType: Scalars['String'];
  type: Scalars['String'];
  value?: Maybe<Scalars['JSON']>;
};

export enum FlexDirectionEnum {
  Column = 'column',
  Row = 'row'
}

export type Mutation = {
  __typename?: 'Mutation';
  addBeer: Array<Beer>;
};


export type MutationAddBeerArgs = {
  beer: BeerInput;
};

export type Page = {
  __typename?: 'Page';
  id: Scalars['ID'];
  name: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<TypePageEnum>;
  url?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  beer?: Maybe<Beer>;
  beers: Array<Beer>;
  pages: Array<Page>;
};


export type QueryBeerArgs = {
  id: Scalars['ID'];
};


export type QueryPagesArgs = {
  type: TypePageEnum;
};

export enum ScopeContainerEnum {
  Default = 'DEFAULT',
  Landing = 'LANDING',
  Listing = 'LISTING'
}

export enum TypeContainerEnum {
  Components = 'COMPONENTS',
  Layout = 'LAYOUT',
  Template = 'TEMPLATE'
}

export enum TypePageEnum {
  Home = 'HOME',
  Landing = 'LANDING'
}



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
  Beer: ResolverTypeWrapper<Beer>;
  BeerInput: BeerInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Component: ResolverTypeWrapper<Component>;
  Container: ResolversTypes['ContainerComponents'] | ResolversTypes['ContainerLayout'] | ResolversTypes['ContainerTemplate'];
  ContainerComponents: ResolverTypeWrapper<ContainerComponents>;
  ContainerLayout: ResolverTypeWrapper<ContainerLayout>;
  ContainerTemplate: ResolverTypeWrapper<ContainerTemplate>;
  Context: ResolverTypeWrapper<Context>;
  FlexDirectionEnum: FlexDirectionEnum;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Mutation: ResolverTypeWrapper<{}>;
  Page: ResolverTypeWrapper<Page>;
  Query: ResolverTypeWrapper<{}>;
  ScopeContainerEnum: ScopeContainerEnum;
  String: ResolverTypeWrapper<Scalars['String']>;
  TypeContainerEnum: TypeContainerEnum;
  TypePageEnum: TypePageEnum;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Beer: Beer;
  BeerInput: BeerInput;
  Boolean: Scalars['Boolean'];
  Component: Component;
  Container: ResolversParentTypes['ContainerComponents'] | ResolversParentTypes['ContainerLayout'] | ResolversParentTypes['ContainerTemplate'];
  ContainerComponents: ContainerComponents;
  ContainerLayout: ContainerLayout;
  ContainerTemplate: ContainerTemplate;
  Context: Context;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  JSON: Scalars['JSON'];
  Mutation: {};
  Page: Page;
  Query: {};
  String: Scalars['String'];
};

export type BeerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Beer'] = ResolversParentTypes['Beer']> = {
  brands?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Component'] = ResolversParentTypes['Component']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  jsonSchema?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContainerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Container'] = ResolversParentTypes['Container']> = {
  __resolveType: TypeResolveFn<'ContainerComponents' | 'ContainerLayout' | 'ContainerTemplate', ParentType, ContextType>;
  contexts?: Resolver<Array<ResolversTypes['Context']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['TypeContainerEnum']>, ParentType, ContextType>;
};

export type ContainerComponentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContainerComponents'] = ResolversParentTypes['ContainerComponents']> = {
  components?: Resolver<Array<ResolversTypes['Component']>, ParentType, ContextType>;
  contexts?: Resolver<Array<ResolversTypes['Context']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['TypeContainerEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContainerLayoutResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContainerLayout'] = ResolversParentTypes['ContainerLayout']> = {
  containers?: Resolver<Array<ResolversTypes['Container']>, ParentType, ContextType>;
  contexts?: Resolver<Array<ResolversTypes['Context']>, ParentType, ContextType>;
  flexDirection?: Resolver<Maybe<ResolversTypes['FlexDirectionEnum']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['TypeContainerEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContainerTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContainerTemplate'] = ResolversParentTypes['ContainerTemplate']> = {
  containers?: Resolver<Array<ResolversTypes['Container']>, ParentType, ContextType>;
  contexts?: Resolver<Array<ResolversTypes['Context']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flexDirection?: Resolver<Maybe<ResolversTypes['FlexDirectionEnum']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['ScopeContainerEnum']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['TypeContainerEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContextResolvers<ContextType = any, ParentType extends ResolversParentTypes['Context'] = ResolversParentTypes['Context']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  subType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addBeer?: Resolver<Array<ResolversTypes['Beer']>, ParentType, ContextType, RequireFields<MutationAddBeerArgs, 'beer'>>;
};

export type PageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['TypePageEnum']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  beer?: Resolver<Maybe<ResolversTypes['Beer']>, ParentType, ContextType, RequireFields<QueryBeerArgs, 'id'>>;
  beers?: Resolver<Array<ResolversTypes['Beer']>, ParentType, ContextType>;
  pages?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<QueryPagesArgs, 'type'>>;
};

export type Resolvers<ContextType = any> = {
  Beer?: BeerResolvers<ContextType>;
  Component?: ComponentResolvers<ContextType>;
  Container?: ContainerResolvers<ContextType>;
  ContainerComponents?: ContainerComponentsResolvers<ContextType>;
  ContainerLayout?: ContainerLayoutResolvers<ContextType>;
  ContainerTemplate?: ContainerTemplateResolvers<ContextType>;
  Context?: ContextResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Page?: PageResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

