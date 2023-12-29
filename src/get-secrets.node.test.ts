import { getSecrets } from "./get-secrets";

describe("getSecrets", () => {
  it("secret が取得されること", () => {
    const res = getSecrets();

    expect(res).toHaveProperty("secret");
  });
});
