import { checkArgs } from "./checkArgs";
import { parseArgs } from "./parseArgs";

export const add = (...args: number[]): number | void | string => {
  if (checkArgs(...args)) {
    const result = args.reduce(
      (accumulator, currentValue): number => accumulator + currentValue
    );
    return result > 1000 ? "too big" : result;
  }
};

if (process.env.NODE_ENV !== "test") {
  const parsedArggs = parseArgs(...process.argv);
  const result = add(...parsedArggs);
  console.log(result);
}
