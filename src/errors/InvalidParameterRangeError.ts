export class InvalidParameterRangeError extends Error {
  public static INVALID_PARAMETER_RANGE: string = 'Invalid parameter range';

  constructor(
    public parameter: string,
    public minValue: number,
    public maxValue: number,
  ) {
    super();
    this.message = `${parameter} parameter must be a value between ${minValue} and ${maxValue}`;
    this.name = 'InvalidParameterRangeError';
    this.stack = (<any>new Error()).stack;
  }
}
