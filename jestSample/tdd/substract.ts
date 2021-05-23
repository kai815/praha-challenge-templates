import { checkArgs } from "./checkArgs";

export const substract = (...args: number[]): number | string | void => {
  if (checkArgs(...args)) {
    const result = args.reduce(
      (accumulator, currentValue): number => accumulator - currentValue
    );
    return result < 0 ? "negative number" : result;
  }
};
