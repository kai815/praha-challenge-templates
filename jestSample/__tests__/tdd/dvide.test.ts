import { divide } from "../../tdd/divide";

describe("divide関数のテスト", (): void => {
  it("10,5 を引数に渡すと 2 が返ってくる", (): void => {
    expect(divide(10, 5)).toBe(2);
  });
});
