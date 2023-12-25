export class HttpError extends Error {
  constructor(public readonly response: { status: number }) {
    super();
  }
}

export class RESTError extends Error {
  constructor(public readonly response: { message: string }) {
    super();
  }
}