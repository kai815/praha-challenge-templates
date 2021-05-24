export const parseArgs = (...processArgs: string[]): (number | undefined)[] => {
  return processArgs
    .filter(
      (arg: string, index: number): boolean =>
        index != 0 &&
        index != 1 &&
        typeof Number(arg) === "number" &&
        !isNaN(Number(arg))
    )
    .map((arg: string): number => {
      return Number(arg);
    });
};
