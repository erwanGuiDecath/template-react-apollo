import { RESTDataSource } from 'apollo-datasource-rest';
export class BeersAPI extends RESTDataSource {
    constructor() {
        // Always call super()
        super();
        // Sets the base URL for the REST API
        this.baseURL = 'https://beers.com/';
    }
    async getBeers() {
        return this.get(`beers`);
    }
    async getBeer(id) {
        return this.get(`beers/${id}`);
    }
    async addBeer(beer) {
        return this.post('beers', beer);
    }
}
