import { multiply } from "../../tdd/multiply";
import { thirtyLength } from "./common";

describe("add関数のテスト", (): void => {
  it("1,10,2,を引数に渡すと 20 が返ってくる", (): void => {
    expect(multiply(1, 10, 2)).toBe(20);
  });

  it("1 を 30 個、引数を渡すと 1 が返ってくる", (): void => {
    expect(multiply(...thirtyLength)).toBe(1);
  });

  it("1001,1 を引数に渡すと「big big number」", (): void => {
    expect(multiply(1001, 1)).toBe("big big number");
  });
});
