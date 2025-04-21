import { useState } from "react";

export const Body = ({ jsonInput, setJsonInput }) => {
  const [error, setError] = useState("");

  const handleFormatClick = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      const formatted = JSON.stringify(parsed, null, 2);
      setJsonInput(formatted);
      setError(""); 
    } catch (err) {
      setError(err, "Invalid JSON format. Please fix it before formatting.");
    }
  };

  return (
    <div>
      <textarea
        cols={100}
        rows={15}
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder={
          'Enter JSON data only!\n\nExample:\nYour Input: {"name": "mehul","age": 20}\nClick "Format" to format it:\n{\n  "name": "mehul",\n  "age": 20\n}'
        }
      />
      <br />
      <button onClick={handleFormatClick}>Format JSON</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
