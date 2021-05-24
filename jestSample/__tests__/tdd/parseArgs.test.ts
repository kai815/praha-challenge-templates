import { parseArgs } from "../../tdd/parseArgs";

describe("parse関数のテスト", (): void => {
  it("['1','2','3']を渡した時に 3 のみ返ってくる", (): void => {
    expect(parseArgs("1", "2", "3")).toStrictEqual([3]);
  });

  it("['1','2','3','テスト']を渡した時に 3 のみ返ってくる", (): void => {
    expect(parseArgs("1", "2", "3", "テスト")).toStrictEqual([3]);
  });
});
