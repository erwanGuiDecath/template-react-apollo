import { AppContext, Beer } from "../../types/common.types";
import { Beer as BeerApi } from "../../api";

export async function addBeer(parent: any, beer: Beer, ctx: AppContext) {
    const mappedBeer: BeerApi = {
        ...beer,
        quantity: beer.volume,
    }

    await ctx.dataSources.beersAPI.addBeer(mappedBeer);
    return ctx.dataSources.beersAPI.getBeers();
}