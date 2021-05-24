export const divide = (...args: number[]): number | void | string => {
  //空にする
  return args.reduce(
    (accumulator, currentValue): number => accumulator / currentValue
  );
};
