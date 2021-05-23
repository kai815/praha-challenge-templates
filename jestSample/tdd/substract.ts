import { checkArgs } from "./checkArgs";

export const substract = (...args: number[]): number | void => {
  if (checkArgs(...args)) {
    return args.reduce(
      (accumulator, currentValue): number => accumulator - currentValue
    );
  }
};
