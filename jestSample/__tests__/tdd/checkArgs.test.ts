import { checkArgs } from "../../tdd/checkArgs";

describe("checkArgs関数のテスト", (): void => {
  it("1と2を引数に渡すとtrueが返ってくる", (): void => {
    expect(checkArgs(1, 2)).toBe(true);
  });
});
