import "./styles/apiCallStyle.css";
export const APICall = ({ method, setMethod, URL, setURL, handleURLClick }) => {
  return (
    <div>
      <select
        className="apiSelect"
        value={method}
        onChange={(e) => setMethod(e.target.value)}
      >
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="PATCH">PATCH</option>
        <option value="DELETE">DELETE</option>
      </select>

      <input
        className="apiInput"
        type="text"
        value={URL}
        onChange={(e) => setURL(e.target.value)}
        placeholder="Enter API URL"
      />

      <button className="apiButton" onClick={handleURLClick}>
        Send
      </button>
    </div>
  );
};
