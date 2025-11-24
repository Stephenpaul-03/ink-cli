export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function cleanupSpaces(str: string) {
  return str.replace(/\s{2,}/g, " ").trim();
}
