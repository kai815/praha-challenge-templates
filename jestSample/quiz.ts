import axios from "axios";
// No.1
export const greet = (name: string): string => {
  const hour = new Date().getHours();
  const greetMessage = hour >= 6 && hour < 12 ? "Good morning" : "Hello";
  return `${greetMessage} ${name}!`;
};

// No.2(※実際には DI した方が良さそうだが、今回は外部モジュールをモック化するテストを行いたいので、このままテストを書いてください。)
export class Users {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  static async all(): Promise<void> {
    const resp = await axios.get("/users.json");
    return resp.data;
  }
}

// No.3
export class WordUpperCase {
  private helloWorld: HelloWorld;
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  constructor(helloWorld: HelloWorld) {
    this.helloWorld = helloWorld;
  }

  public func(): string {
    return this.helloWorld.wordFunc().toUpperCase();
  }
}
export class HelloWorld {
  public wordFunc(): string {
    return "hello world.";
  }
}
