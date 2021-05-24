import { checkArgs } from "./checkArgs";
import { parseArgs } from "./parseArgs";

const parsedArggs = parseArgs(...process.argv);
export const multiply = (...args: number[]): void | number | string => {
  if (checkArgs(...args)) {
    const result = args.reduce(
      (accumulator, currentValue): number => accumulator * currentValue
    );
    return result > 1000 ? "big big number" : result;
  }
};

const result = multiply(...parsedArggs);
console.log(result);
