import { divide } from "../../tdd/divide";
import { thirtyLength } from "./common";

describe("divide関数のテスト", (): void => {
  it("10,5 を引数に渡すと 2 が返ってくる", (): void => {
    expect(divide(10, 5)).toBe(2);
  });

  it("10,3,3 を引数に渡すと 1.1 が返ってくる", (): void => {
    expect(divide(10, 3, 3)).toBe(1.1);
  });

  it("1 を 30 個、引数を渡すと 1 が返ってくる", (): void => {
    expect(divide(...thirtyLength)).toBe(1);
  });
});
