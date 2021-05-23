import { checkArgs } from "./checkArgs";

export const add = (...args: number[]): number | void | string => {
  if (checkArgs(...args)) {
    const result = args.reduce(
      (accumulator, currentValue): number => accumulator + currentValue
    );
    return result > 1000 ? "too big" : result;
  }
};
