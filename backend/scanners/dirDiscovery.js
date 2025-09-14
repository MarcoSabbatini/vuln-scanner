import axios from "axios";

const wordlist = [
  "/admin",
  "/login",
  "/dashboard",
  "/config",
  "/setup",
  "/test",
  "/backup",
  "/old",
  "/new",
  "/dev",
  "/staging",
  "/api",
  "/assets",
  "/images",
  "/css",
  "/js",
];

export async function dirDiscovery(url) {
  const foundDirs = [];
  for (const dir of wordlist) {
    try {
      const res = await axios.get(url + dir, { validateStatus: () => true });
      if ([200, 401, 403].includes(res.status)) {
        foundDirs.push({ dir, status: res.status });
      }
    } catch (error) {
      console.error(`Error accessing ${url + dir}:`, error.message);
    }
  }
  return foundDirs;
}
