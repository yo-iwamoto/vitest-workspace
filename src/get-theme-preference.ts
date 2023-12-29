const key = "_theme_preference";

export function getThemePreference() {
  return localStorage.getItem(key) ?? "light";
}
