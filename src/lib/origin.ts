/** Marketing metadata must never inherit a request/preview hostname. */
export function validateOrigin(value: string | undefined, fallback: string): string {
  const input = value || fallback;
  let url: URL;
  try { url = new URL(input); } catch { throw new Error(`Invalid public origin; expected ${fallback}`); }
  const expected = new URL(fallback);
  if (url.origin !== expected.origin || url.username || url.password || url.pathname !== "/" || url.search || url.hash) {
    throw new Error(`Public origin must be ${fallback}, without a path, query, or credentials`);
  }
  return url.origin;
}
