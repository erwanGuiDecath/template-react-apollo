import { RESTDataSource } from '@apollo/datasource-rest';

export class PageBuilderAPI extends RESTDataSource {
  override baseURL = 'https://page-builder/';
}