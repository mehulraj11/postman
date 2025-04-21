import { useState } from "react";
import "./styles/payloadStyle.css";

export const Payload = ({ data }) => {
  if (!data) return null; // <--- Fixes the crash if data is undefined

  const slicedObject = Object.entries(data).slice(2);
  const payload = Object.fromEntries(slicedObject);

  const [togglerButton, setTogglerButton] = useState(true);

  const filteredEntries = Object.entries(data).filter(
    ([key]) => key === "headers"
  );

  const headerPayload = Object.fromEntries(filteredEntries);
  const headerEntries = Object.entries(headerPayload.headers || {}); // Safe fallback

  const render = headerEntries.map(([key, value], index) => {
    return (
      <div className="headerTable" key={index}>
        <div>{key}</div>
        <div>{value}</div>
      </div>
    );
  });

  const handleToggle = () => {
    setTogglerButton((prevState) => !prevState);
  };

  return (
    <>
      <div className="payloadToggler">
        <li onClick={handleToggle}>Body</li>
        <li onClick={handleToggle}>Header</li>
      </div>
      {togglerButton ? <pre>{JSON.stringify(payload, null, 2)}</pre> : render}
    </>
  );
};
