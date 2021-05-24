import { checkArgs } from "./checkArgs";
import { parseArgs } from "./parseArgs";

const parsedArggs = parseArgs(...process.argv);
export const divide = (...args: number[]): number | void | string => {
  if (checkArgs(...args)) {
    return args.reduce(
      (accumulator, currentValue): number =>
        Math.round((accumulator / currentValue) * 10) / 10
    );
  }
};

const result = divide(...parsedArggs);
console.log(result);
