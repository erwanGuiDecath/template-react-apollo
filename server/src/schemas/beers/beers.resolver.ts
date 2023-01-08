import { Beer } from "../../api";
import { AppContext, QueryBeerArgs } from "../../types/common.types";
import { addBeer } from "./beers.mapper";

export const beersResolver = {
  Query: {
    beers(parent: any, ars: any, ctx: AppContext) {
      return ctx.dataSources.beersAPI.getBeers();
    },

    beer(parent: any, args: QueryBeerArgs, ctx: AppContext) {
      return ctx.dataSources.beersAPI.getBeer(args.id);
    },
  },

  Mutation: {
    addBeer,
  },

  Beer: {
    volume(parent: Beer) {
      return parent.quantity;
    },
  },
};
