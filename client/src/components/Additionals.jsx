import { useState } from "react";
import { Params } from "./Params";
import { Body } from "./Body";
export const Additionals = ({ jsonInput, setJsonInput }) => {
  const [view, setView] = useState("Body");
  const handleToggle = (e) => {
    const val = e.target.innerText;
    console.log(val);
    setView(val);
  };
  return (
    <>
      <div>
        <div className="payloadToggler">
          <li onClick={handleToggle}>Params</li>
          <li onClick={handleToggle}>Body</li>
        </div>
        {view === "Body" ? (
          <Body jsonInput={jsonInput} setJsonInput={setJsonInput} />
        ) : (
          <Params />
        )}
      </div>
    </>
  );
};
