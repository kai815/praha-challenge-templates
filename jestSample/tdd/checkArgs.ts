export const checkArgs = (...args: number[]): boolean => {
  if (args.length > 30) {
    throw "引数を指定できるのは30個までです。";
  }
  if (args.length === 0) {
    throw "最低1つは数字を指定してください。";
  }
  return true;
};
