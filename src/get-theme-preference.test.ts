import { getThemePreference } from "./get-theme-preference";

describe("getThemePreference", () => {
  it("設定値がない時、light を返すこと", () => {
    const result = getThemePreference();

    expect(result).toBe("light");
  });
});
