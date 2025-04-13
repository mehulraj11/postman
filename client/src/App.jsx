import { useState } from "react";
import "./App.css";
import { Response } from "./Response";

function App() {
  const [URL, setURL] = useState("");
  const [method, setMethod] = useState("GET");
  const [responseData, setResponseData] = useState(null);

  const API = "http://localhost:1000/test-api";

  const postData = async () => {
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: URL, method }),
      });
      const data = await response.json();
      console.log(data.data);

      setResponseData(data.data);
    } catch (error) {
      setResponseData({ error: "Failed to fetch" });
    }
  };

  const handleURLClick = () => {
    postData();
  };

  return (
    <>
      <select value={method} onChange={(e) => setMethod(e.target.value)}>
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="PATCH">PATCH</option>
        <option value="DELETE">DELETE</option>
      </select>

      <input
        type="text"
        value={URL}
        onChange={(e) => setURL(e.target.value)}
        placeholder="Enter API URL"
      />

      <button onClick={handleURLClick}>Send</button>
      <Response data={responseData} />
    </>
  );
}

export default App;
