import { checkArgs } from "./checkArgs";

export const add = (...args: number[]): number | void => {
  // 空の関数
  if (checkArgs(...args)) {
    return args.reduce(
      (accumulator, currentValue): number => accumulator + currentValue
    );
  }
};
