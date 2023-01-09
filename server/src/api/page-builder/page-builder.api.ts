import { RESTDataSource } from 'apollo-datasource-rest';

export class PageBuilderAPI extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = 'https://page-builder/';
  }
}