import "./App.css";
import { useState } from "react";
import { Response } from "./components/Response";
import { APICall } from "./components/APICall";
import { Additionals } from "./components/Additionals";

function App() {
  const [URL, setURL] = useState("");
  const [method, setMethod] = useState("GET");
  const [responseData, setResponseData] = useState(null);
  const [jsonInput, setJsonInput] = useState("");

  const API = "http://localhost:2000/test-api";

  const postData = async () => {
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: URL,
          method,
          jsonInput: method === "POST" ? JSON.parse(jsonInput) : undefined, // convert stringified JSON into object
        }),
      });
      const data = await response.json();

      setResponseData(data);
    } catch (error) {
      setResponseData({ error: error.message || "Failed to fetch data" });
    }
  };

  const handleURLClick = () => {
    if (!URL.trim()) {
      alert("Please enter a valid URL.");
      return;
    }
    postData();
  };

  return (
    <div className="hero">
      <APICall
        method={method}
        setMethod={setMethod}
        URL={URL}
        setURL={setURL}
        handleURLClick={handleURLClick}
      />
      <Additionals jsonInput={jsonInput} setJsonInput={setJsonInput} />
      <Response data={responseData} />
    </div>
  );
}

export default App;
