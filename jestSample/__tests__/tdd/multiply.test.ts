import { multiply } from "../../tdd/multiply";

describe("add関数のテスト", (): void => {
  it("1,10,2,を引数に渡すと 20 が返ってくる", (): void => {
    expect(multiply(1, 10, 2)).toBe(20);
  });
});
