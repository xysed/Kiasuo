export class RESTError extends Error {
  constructor(public readonly response: { message: string }) {
    super();
  }
}