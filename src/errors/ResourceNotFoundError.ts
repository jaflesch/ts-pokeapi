export class ResourceNotFoundError extends Error {
  public static RESOURCE_NOT_FOUND: string = 'Resource not found';

  constructor() {
    super();
    this.message = `PokéAPI resource not found (HTTP 404)`;
    this.name = 'ResourceNotFoundError';
    this.stack = (<any>new Error()).stack;
  }
}
