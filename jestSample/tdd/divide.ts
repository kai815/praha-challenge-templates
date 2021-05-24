export const divide = (...args: number[]): number | void | string => {
  return args.reduce(
    (accumulator, currentValue): number => accumulator / currentValue
  );
};
