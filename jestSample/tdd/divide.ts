import { checkArgs } from "./checkArgs";
import { parseArgs } from "./parseArgs";

export const divide = (...args: number[]): number | void | string => {
  if (checkArgs(...args)) {
    return args.reduce(
      (accumulator, currentValue): number =>
        Math.round((accumulator / currentValue) * 10) / 10
    );
  }
};
if (process.env.NODE_ENV !== "test") {
  const parsedArggs = parseArgs(...process.argv);
  const result = divide(...parsedArggs);
  console.log(result);
}
