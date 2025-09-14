import axios from "axios";

async function grabBanner(url) {
  try {
    const res = await axios.get(url, { timeout: 5000 });
    return res.headers;
  } catch (err) {
    return { error: err.message };
  }
}

export { grabBanner };