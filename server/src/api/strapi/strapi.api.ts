import { RESTDataSource } from 'apollo-datasource-rest';
import { Page } from './strapi.types';

export class StrapiAPI extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = 'http://localhost:1337';
  }

  async getPages(): Promise<Page[]> {
    return this.get('/pages')
  }
}