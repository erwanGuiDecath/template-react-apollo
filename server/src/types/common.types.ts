import { GraphQLResolveInfo, GraphQLScalarType } from "graphql";
import { BeersAPI } from "../api";
import { PageBuilderAPI } from "../api/page-builder";
import { StrapiAPI } from "../api/strapi";

interface DataSources {
  beersAPI: BeersAPI;
  pageBuilderAPI: PageBuilderAPI;
  strapiAPI: StrapiAPI;
}

export type AppContext = {
  dataSources: DataSources;
};

export type QueryBeerArgs = {
  id: string;
};

export type Resolver = (
  parent: any,
  args: any,
  context: AppContext,
  info: GraphQLResolveInfo
) => any;

export interface ObjectResolvers {
  [key: string]: Resolver;
}

export interface Resolvers {
  [key: string]: ObjectResolvers | GraphQLScalarType;
}

export type Beer = {
  id: string;
  title: string;
  brands: string;
  volume: number;
};

export type Container = {
  type: 'LAYOUT' | 'COMPONENTS' | 'TEMPLATE'
}
