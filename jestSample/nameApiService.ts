import { AxiosInstance } from "axios";

export class NameApiService {
  private MAX_LENGTH = 4;
  private axiosClient: AxiosInstance;
  public constructor(axiosClient: AxiosInstance) {
    this.axiosClient = axiosClient;
  }

  public async getFirstName(): Promise<string> {
    const { data } = await this.axiosClient.get(
      "https://random-data-api.com/api/name/random_name"
    );
    const firstName = data.first_name as string;

    if (firstName.length > this.MAX_LENGTH) {
      throw new Error("firstName is too long!");
    }

    return firstName;
  }
}
