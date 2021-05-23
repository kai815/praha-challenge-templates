import { checkArgs } from "../../tdd/checkArgs";
import { thirtyOneLength } from "./common";

describe("checkArgs関数のテスト", (): void => {
  it("1と2を引数に渡すとtrueが返ってくる", (): void => {
    expect(checkArgs(1, 2)).toBe(true);
  });

  it("1と31個を引数に渡すとエラーになる", (): void => {
    expect((): void => {
      checkArgs(...thirtyOneLength);
    }).toThrow("引数を指定できるのは30個までです。");
  });
});
