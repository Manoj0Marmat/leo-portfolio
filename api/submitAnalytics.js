// api/submitAnalytics.js

const axios = require("axios");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { deviceInfo } = req.body;
      const jsonBinUrl = "https://api.jsonbin.io/v3/b"; // Your JSONBin endpoint
      const masterKey = process.env.JSONBIN_MASTER_KEY; // Access environment variable

      const headers = {
        "Content-Type": "application/json",
        "X-Master-Key": masterKey, // Use the master key securely
      };

      // Send the data to JSONBin
      const response = await axios.post(jsonBinUrl, deviceInfo, { headers });

      res
        .status(200)
        .json({ message: "Data successfully sent", data: response.data });
    } catch (error) {
      console.error("Error:", error);
      res
        .status(500)
        .json({ message: "Error sending data", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
