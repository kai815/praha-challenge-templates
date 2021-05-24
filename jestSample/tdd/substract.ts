import { checkArgs } from "./checkArgs";
import { parseArgs } from "./parseArgs";

export const substract = (...args: number[]): number | string | void => {
  if (checkArgs(...args)) {
    const result = args.reduce(
      (accumulator, currentValue): number => accumulator - currentValue
    );
    return result < 0 ? "negative number" : result;
  }
};
if (process.env.NODE_ENV !== "test") {
  const parsedArggs = parseArgs(...process.argv);
  const result = substract(...parsedArggs);
  console.log(result);
}
