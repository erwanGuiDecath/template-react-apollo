export async function addBeer(parent, beer, ctx) {
    const mappedBeer = {
        ...beer,
        quantity: beer.volume,
    };
    await ctx.dataSources.beersAPI.addBeer(mappedBeer);
    return ctx.dataSources.beersAPI.getBeers();
}
