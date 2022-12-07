import { RESTDataSource } from 'apollo-datasource-rest';
import { Beer } from './beers.types';

export class BeersAPI extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = 'https://beers.com/';
  }

  async getBeers(): Promise<Beer[]> {
    return this.get(`beers`);
  }

  async getBeer(id: string): Promise<Beer> {
    return this.get(`beers/${id}`);
  }

  async addBeer(beer: Beer): Promise<Beer> {
    return this.post('beers', beer)
  }
}