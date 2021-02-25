import axios from "axios";
import { NameApiService } from "../nameApiService";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("NameApiService", (): void => {
  it("if getFirstName less than MAXLENGTH, return firstName", async (): Promise<
    void
  > => {
    // 「first_name」はapiのレスポンスに合わせてcamelじゃない
    // eslint-disable-next-line @typescript-eslint/camelcase
    const response = { data: { first_name: "HIDE" } };
    mockedAxios.get.mockResolvedValue(response);
    const nameApiService = new NameApiService(mockedAxios);
    await expect(nameApiService.getFirstName()).resolves.toBe("HIDE");
  });
  it("if getFirstName more than MAXLENGTH, throw Error", async (): Promise<
    void
  > => {
    // 「first_name」はapiのレスポンスに合わせてcamelじゃない
    // eslint-disable-next-line @typescript-eslint/camelcase
    const response = { data: { first_name: "HIDEOOOOOOO" } };
    mockedAxios.get.mockResolvedValue(response);
    const nameApiService = new NameApiService(mockedAxios);
    expect(
      async (): Promise<void> => {
        await nameApiService.getFirstName();
      }
    ).rejects.toThrow("firstName is too long!");
  });
});
