import { checkArgs } from "./checkArgs";

export const multiply = (...args: number[]): void | number | string => {
  if (checkArgs(...args)) {
    const result = args.reduce(
      (accumulator, currentValue): number => accumulator * currentValue
    );
    return result > 1000 ? "big big number" : result;
  }
};
