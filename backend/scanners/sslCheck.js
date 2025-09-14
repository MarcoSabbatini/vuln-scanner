import sslChecker from "ssl-checker";

export async function checkSSL(domain) {
  try {
    return await sslChecker(domain);
  } catch (err) {
    return { error: err.message };
  }
}