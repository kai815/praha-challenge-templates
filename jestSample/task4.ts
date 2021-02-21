import { AxiosInstance } from "axios";
// 課題4の関数
// 1つめ
export const filterNumberMax = (numbers: number[]): number => {
  // 配列が空なら即座に0を返す
  if (numbers.length <= 0) {
    return 0;
  }
  return Math.max(...numbers);
};

export const returnStringAfterSeconds = (
  value: string,
  seconds: number
): Promise<string> => {
  return new Promise((resolve): void => {
    setTimeout((): void => {
      resolve(value);
    }, seconds * 1000);
  });
};

export class CreditCarfApiService {
  private NUMBER_MIN_LENGTH = 14;
  private NUMBER_MAX_LENGTH = 16;
  private axiosClient: AxiosInstance;
  public constructor(axiosClient: AxiosInstance) {
    this.axiosClient = axiosClient;
  }

  public async getCardNumber(): Promise<string> {
    const { data } = await this.axiosClient.get(
      "https://random-data-api.com/api/business_credit_card/random_card"
    );
    const cardNumber = data.credit_card_number as string;

    if (cardNumber.length < this.NUMBER_MIN_LENGTH) {
      throw new Error("cardNumber is too short!");
    }
    if (cardNumber.length > this.NUMBER_MAX_LENGTH) {
      throw new Error("cardNumber is too short!");
    }
    if (!cardNumber.includes("-")) {
      throw new Error("cardNumber not including '-'!");
    }

    return cardNumber;
  }
}
