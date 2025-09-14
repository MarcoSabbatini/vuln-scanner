import axios from "axios";

const VULNERS_API = "https://vulners.com/api/v3/search/lucene/";

export async function lookupCVEs(cveId) {
    try {
        const response = await axios.post(VULNERS_API, {
            query: cveId,
            size: 5,
        });
        return response.data.data.search || [];
    } catch (error) {
        console.error(`Error fetching CVE data for ${cveId}:`, error.message);
        return [];

    }
}