export const divide = (...args: number[]): number | void | string => {
  return args.reduce(
    (accumulator, currentValue): number =>
      Math.round((accumulator / currentValue) * 10) / 10
  );
};
