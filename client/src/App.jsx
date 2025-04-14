import "./App.css";
import { useState } from "react";
import { Response } from "./components/Response";
import { APICall } from "./components/APICall";

function App() {
  const [URL, setURL] = useState("");
  const [method, setMethod] = useState("GET");
  const [responseData, setResponseData] = useState(null);

  const API = "http://localhost:2000/test-api";

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

      setResponseData(data);
    } catch (error) {
      setResponseData(error, "Failed to fetch data");
    }
  };

  const handleURLClick = () => {
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
      <Response data={responseData} />
    </div>
  );
}

export default App;
