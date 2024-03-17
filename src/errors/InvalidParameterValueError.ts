export class InvalidParameterValueError extends Error {
  public static INVALID_RANGE: string = "Invalid parameter value";

  constructor(public message: string) {
    super(message);
    this.name = "InvalidParameterValueError";
    this.stack = (<any> new Error()).stack;
  }
}
