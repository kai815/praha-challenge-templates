import { substract } from "../../tdd/substract";
import { twentyNineLength } from "./common";

describe("substract関数のテスト", (): void => {
  it("10,3,2 を渡すと 5 が返ってくる", (): void => {
    expect(substract(10, 3, 2)).toBe(5);
  });

  it("100 と 1 を 29 個、引数を渡すと 71 が返ってくる", (): void => {
    expect(substract(100, ...twentyNineLength)).toBe(71);
  });
});
