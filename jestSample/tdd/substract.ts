import { checkArgs } from "./checkArgs";
import { parseArgs } from "./parseArgs";

const parsedArggs = parseArgs(...process.argv);
export const substract = (...args: number[]): number | string | void => {
  if (checkArgs(...args)) {
    const result = args.reduce(
      (accumulator, currentValue): number => accumulator - currentValue
    );
    return result < 0 ? "negative number" : result;
  }
};

const result = substract(...parsedArggs);
console.log(result);
