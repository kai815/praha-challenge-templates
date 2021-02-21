import {
  sumOfArray,
  asyncSumOfArray,
  asyncSumOfArraySometimesZero,
  getFirstNameThrowIfLong,
} from "../functions";
import { DatabaseMock } from "../util";
import { NameApiService } from "../nameApiService";
import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("sumOfArray", (): void => {
  // normal number
  it("input [1,1] output 2", (): void => {
    expect(sumOfArray([1, 1])).toBe(2);
  });

  // including -
  it("input [1,2,3,4,5,-6] output 21", (): void => {
    expect(sumOfArray([1, 2, 3, 4, 5, -6])).toBe(9);
  });

  // including decimal
  it("input [1,2,3,4,5,0.5] output 15.5", (): void => {
    expect(sumOfArray([1, 2, 3, 4, 5, 0.5])).toBe(15.5);
  });

  // exception
  it("input [] throw Exception", (): void => {
    expect((): void => {
      sumOfArray([]);
    }).toThrow();
  });
});

describe("asyncSumOfArray", (): void => {
  // normal number
  it("input [1,1] output 2", async (): Promise<void> => {
    expect.assertions(1);
    const data = await asyncSumOfArray([1, 1]);
    expect(data).toBe(2);
  });

  // inucluding -
  it("input [1,2,3,4,5,-6] output 9", async (): Promise<void> => {
    expect.assertions(1);
    const data = await asyncSumOfArray([1, 2, 3, 4, 5, -6]);
    expect(data).toBe(9);
  });

  // including decimal
  it("input [1,2,3,4,5,0.5] output 15.5", async (): Promise<void> => {
    expect.assertions(1);
    const data = await asyncSumOfArray([1, 2, 3, 4, 5, 0.5]);
    expect(data).toBe(15.5);
  });
  // exception
  it("input [] throw Exception", (): void => {
    expect.assertions(1);
    expect(asyncSumOfArray([])).rejects.toThrow();
  });
  // exception
});

describe("asyncSumOfArraySometimesZero", (): void => {
  describe("DatabaseMockSaveMethod Normal", (): void => {
    const databaseNormal = new DatabaseMock();
    databaseNormal.save = jest.fn();
    // normal number
    it("input [1,1] output 2", async (): Promise<void> => {
      expect.assertions(1);
      const data = await asyncSumOfArraySometimesZero(databaseNormal, [1, 1]);
      expect(data).toBe(2);
    });
    // inucluding -
    it("input [1,2,3,4,5,-6] output 9", async (): Promise<void> => {
      expect.assertions(1);
      const data = await asyncSumOfArraySometimesZero(databaseNormal, [
        1,
        2,
        3,
        4,
        5,
        -6,
      ]);
      expect(data).toBe(9);
    });

    // including decimal
    it("input [1,2,3,4,5,0.5] output 15.5", async (): Promise<void> => {
      expect.assertions(1);
      const data = await asyncSumOfArraySometimesZero(databaseNormal, [
        1,
        2,
        3,
        4,
        5,
        0.5,
      ]);
      expect(data).toBe(15.5);
    });
  });

  describe("DatabaseMockSaveMethod throw Error", (): void => {
    const databaseNormal = new DatabaseMock();
    databaseNormal.save = jest.fn((): void => {
      throw new Error("fail!");
    });
    // normal number
    it("input [1,1] output 0", async (): Promise<void> => {
      expect.assertions(1);
      const data = await asyncSumOfArraySometimesZero(databaseNormal, [1, 1]);
      expect(data).toBe(0);
    });
    // inucluding -
    it("input [1,2,3,4,5,-6] output 0", async (): Promise<void> => {
      expect.assertions(1);
      const data = await asyncSumOfArraySometimesZero(databaseNormal, [
        1,
        2,
        3,
        4,
        5,
        -6,
      ]);
      expect(data).toBe(0);
    });

    // including decimal
    it("input [1,2,3,4,5,0.5] output 0", async (): Promise<void> => {
      expect.assertions(1);
      const data = await asyncSumOfArraySometimesZero(databaseNormal, [
        1,
        2,
        3,
        4,
        5,
        0.5,
      ]);
      expect(data).toBe(0);
    });
  });
});

describe("getFirstNameThrowIfLong", (): void => {
  //ここはapiのレスポンスに合わせて
  // eslint-disable-next-line @typescript-eslint/camelcase
  const response = { data: { first_name: "HIDE" } };
  mockedAxios.get.mockResolvedValue(response);
  const nameApiService = new NameApiService(mockedAxios);
  nameApiService.getFirstName = jest.fn(
    (): Promise<string> => {
      return new Promise((resolve): void => {
        resolve("HIDE");
      });
    }
  );

  it("if maxNameLength more than firstNameLength return 'HIDE'", async (): Promise<
    void
  > => {
    expect.assertions(1);
    const data = await getFirstNameThrowIfLong(nameApiService, 5);
    expect(data).toBe("HIDE");
  });

  it("if maxNameLength less than firstNameLength throw error", async (): Promise<
    void
  > => {
    expect.assertions(1);
    expect(
      async (): Promise<void> => {
        await getFirstNameThrowIfLong(nameApiService, 2);
      }
    ).rejects.toThrow("first_name too long");
  });
});
