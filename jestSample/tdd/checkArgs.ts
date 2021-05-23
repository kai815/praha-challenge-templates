export const checkArgs = (...args: number[]): boolean => {
  if (args.length > 30) {
    throw "引数を指定できるのは30個までです。";
  }
  return true;
};
