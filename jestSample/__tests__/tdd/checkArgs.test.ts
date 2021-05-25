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

  it("0 個の配列の場合エラーになる", (): void => {
    expect((): void => {
      checkArgs(...[]);
    }).toThrow("最低1つは数字を指定してください。");
  });

  //tsの場合は型をしっかり定義しておけばいらない
  // it("「テスト」を引数に渡すとエラーになる", (): void => {
  //   expect((): void => {
  //     checkArgs("テスト");
  //   }).toThrow("引数を指定できるのは数字です。");
  // });
});
