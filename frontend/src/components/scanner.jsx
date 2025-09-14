import { useState } from "react";
import axios from "axios";

export default function Scanner() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  async function runScan() {
    const res = await axios.post("http://localhost:5000/scan", { url });
    setResult(res.data);
  }

  return (
    <div>
      <input
        className="border p-2"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com"
      />
      <button className="ml-2 p-2 bg-blue-500 text-white" onClick={runScan}>
        Scan
      </button>

      {result && (
        <pre className="mt-4 bg-gray-100 p-2 rounded">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
