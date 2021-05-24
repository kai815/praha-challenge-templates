import { divide } from "../../tdd/divide";

describe("divide関数のテスト", (): void => {
  it("10,5 を引数に渡すと 2 が返ってくる", (): void => {
    expect(divide(10, 5)).toBe(2);
  });

  it("10,3,3 を引数に渡すと 1.1 が返ってくる", (): void => {
    expect(divide(10, 3, 3)).toBe(1.1);
  });

  it("1,4 を引数に渡すと、0.3 が返ってくる", (): void => {
    expect(divide(1, 4)).toBe(0.3);
  });
});
