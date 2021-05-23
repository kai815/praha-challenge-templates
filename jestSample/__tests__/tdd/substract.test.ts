import { substract } from "../../tdd/substract";

describe("substract関数のテスト", (): void => {
  it("10,3,2 を渡すと 5 が返ってくる", (): void => {
    expect(substract(10, 3, 2)).toBe(5);
  });
});
