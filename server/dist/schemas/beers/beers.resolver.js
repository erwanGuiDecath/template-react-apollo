import { addBeer } from "./beers.mapper";
export const beersResolver = {
    Query: {
        beers(parent, ars, ctx) {
            return ctx.dataSources.beersAPI.getBeers();
        },
        beer(parent, args, ctx) {
            return ctx.dataSources.beersAPI.getBeer(args.id);
        },
    },
    Mutation: {
        addBeer,
    },
    Beer: {
        volume(parent) {
            return parent.quantity;
        },
    },
};
