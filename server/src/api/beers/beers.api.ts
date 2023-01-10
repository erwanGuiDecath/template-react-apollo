import { RESTDataSource } from '@apollo/datasource-rest';
import { beers } from '../../mocks/beers/beers.mock';
import { Beer } from './beers.types';

export class BeersAPI extends RESTDataSource {
  override baseURL = 'https://beers.com/';

  async getBeers(): Promise<Beer[]> {
    return beers;
    return this.get(`beers`);
  }

  async getBeer(id: string): Promise<Beer> {
    return this.get(`beers/${id}`);
  }

  async addBeer(beer: Beer): Promise<Beer> {
    return this.post('beers', { body: beer })
  }
}