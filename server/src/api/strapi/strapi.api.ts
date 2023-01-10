import { RESTDataSource } from '@apollo/datasource-rest';
import { Page, PbComponent, PbComponentVariant } from './strapi.types';

export class StrapiAPI extends RESTDataSource {
  override baseURL = 'http://127.0.0.1:1337';

  async getPages(): Promise<Page[]> {
    return this.get('/pages')
  }

  async getFloor(id: string): Promise<PbComponent> {
    return this.get(`/pb-components/${id}`)
  }

  async getVariant(id: string): Promise<PbComponentVariant> {
    return this.get(`/pb-component-variants/${id}`)
  }
}