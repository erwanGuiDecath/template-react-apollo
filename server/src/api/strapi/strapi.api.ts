import { RESTDataSource } from '@apollo/datasource-rest';
import { Page } from './strapi.types';

export class StrapiAPI extends RESTDataSource {
  override baseURL = 'http://127.0.0.1:1337';

  async getPages(): Promise<Page[]> {
    return this.get('/pages')
  }
}