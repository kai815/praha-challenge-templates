import { add } from "../../tdd/add";
import { thirtyLength } from "./common";

describe("add関数のテスト", (): void => {
  it("3と10と3を引数に渡すと16が返ってくる", (): void => {
    expect(add(3, 10, 3)).toBe(16);
  });

  it("1を30個渡す30が返ってくる", (): void => {
    expect(add(...thirtyLength)).toBe(30);
  });
});
