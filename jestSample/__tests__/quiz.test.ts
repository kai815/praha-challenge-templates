import { greet, Users, WordUpperCase, HelloWorld } from "../quiz";
import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

//No1の解答
describe("greet", (): void => {
  it("時間が6時より遅くて12時より早い時は朝の挨拶", (): void => {
    const hour = 8;
    const name = "Hideo";
    const morningGreet = `Good morning ${name}!`;
    expect(greet(hour, name)).toBe(morningGreet);
  });

  it("時間が12時より遅い6時より早い時は日中？の挨拶", (): void => {
    const hour = 13;
    const name = "Hideo";
    const daytimieGreet = `Hello ${name}!`;
    expect(greet(hour, name)).toBe(daytimieGreet);
  });
});

//No2の解答
describe("Users", (): void => {
  it("UsersのallメソッドがAPIのレスポンスのdataを返却する", async (): Promise<
    void
  > => {
    const response = { data: "TEST" };
    mockedAxios.get.mockResolvedValue(response);
    const result = await Users.all();
    expect(result).toBe("TEST");
  });
});

//No3の解答
describe("WordUpperCase", (): void => {
  it("WordUpperCaseのfuncメソッドがwordFuncメソッドの大文字版を返す", (): void => {
    const helloWorld = new HelloWorld();
    const word = "word func";
    const upperWord = "WORD FUNC";
    helloWorld.wordFunc = jest.fn((): string => {
      return word;
    });
    const wordUpperCase = new WordUpperCase(helloWorld);
    const result = wordUpperCase.func();
    expect(result).toBe(upperWord);
  });
});

describe("HelloWorld", (): void => {
  it("wordFuncがhello worldを返す", (): void => {
    const helloWorld = new HelloWorld();
    const result = helloWorld.wordFunc();
    expect(result).toBe("hello world.");
  });
});
