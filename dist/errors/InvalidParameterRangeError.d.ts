export declare class InvalidParameterRangeError extends Error {
    parameter: string;
    minValue: number;
    maxValue: number;
    static INVALID_PARAMETER_RANGE: string;
    constructor(parameter: string, minValue: number, maxValue: number);
}
