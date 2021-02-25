import {
  filterNumberMax,
  returnStringAfterSeconds,
  CreditCarfApiService,
} from "../task4";
import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
//1つめ
describe("filterNumberMax", (): void => {
  it("filter NumberMax input[1,10,20] output 20", (): void => {
    const numbers = [1, 10, 20];
    expect(filterNumberMax(numbers)).toBe(20);
  });

  it("filter NumberMax input[] output 0", (): void => {
    const noNumbers: number[] = [];
    expect(filterNumberMax(noNumbers)).toBe(0);
  });
});

//2つめ
describe("returnStringAfterSeconds", (): void => {
  //引数に入れた文字を引数に入れた秒後に返してくれるか
  it("return input value and input seconds after ", async (): Promise<void> => {
    //これ使わないとタイムアウトエラーになる
    jest.useFakeTimers();
    const value = "TEST";
    const seconds = 10;
    const result = returnStringAfterSeconds(value, seconds);
    jest.runAllTimers();
    //セットタイムアウトの秒数の確認
    expect(setTimeout).toHaveBeenLastCalledWith(
      expect.any(Function),
      seconds * 1000
    );
    await expect(result).resolves.toBe(value);
  });
});

describe("CreditCardService", (): void => {
  //引数に入れた文字を引数に入れた秒後に返してくれるか
  it("cardnumber less than minlength", async (): Promise<void> => {
    const minCard = "1211-122";
    const response = {
      // eslint-disable-next-line @typescript-eslint/camelcase
      data: { credit_card_number: minCard },
    };
    mockedAxios.get.mockResolvedValue(response);
    const ccas = new CreditCarfApiService(mockedAxios);
    await expect(ccas.getCardNumber()).rejects.toThrow(
      "cardNumber is too short!"
    );
  });
  it("cardnumber more than maxlength", async (): Promise<void> => {
    const maxCard = "1211-1221-1234-111111111";
    const response = {
      // eslint-disable-next-line @typescript-eslint/camelcase
      data: { credit_card_number: maxCard },
    };
    mockedAxios.get.mockResolvedValue(response);
    const ccas = new CreditCarfApiService(mockedAxios);
    await expect(ccas.getCardNumber()).rejects.toThrow(
      "cardNumber is too long!"
    );
  });
  it("cardnumber not include -", async (): Promise<void> => {
    const noHaihunCard = "121112211234220";
    const response = {
      // eslint-disable-next-line @typescript-eslint/camelcase
      data: { credit_card_number: noHaihunCard },
    };
    mockedAxios.get.mockResolvedValue(response);
    const ccas = new CreditCarfApiService(mockedAxios);
    await expect(ccas.getCardNumber()).rejects.toThrow(
      "cardNumber not including '-'!"
    );
  });

  it("noraml cardnumber", async (): Promise<void> => {
    const normalCard = "1211-1221-1234";
    const response = {
      // eslint-disable-next-line @typescript-eslint/camelcase
      data: { credit_card_number: normalCard },
    };
    mockedAxios.get.mockResolvedValue(response);
    const ccas = new CreditCarfApiService(mockedAxios);
    const result = await ccas.getCardNumber();
    expect(result).toBe(normalCard);
  });
});
