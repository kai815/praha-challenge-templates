import { checkArgs } from "./checkArgs";

export const multiply = (...args: number[]): void | number => {
  if (checkArgs(...args)) {
    return args.reduce(
      (accumulator, currentValue): number => accumulator * currentValue
    );
  }
};
