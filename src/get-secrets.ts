const isBrowser = typeof window !== "undefined";

export function getSecrets() {
  if (isBrowser) {
    throw new Error("This function is only available on server.");
  }

  return { secret: "SECRET" };
}
