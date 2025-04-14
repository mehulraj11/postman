import "./styles/responseStyle.css";
import { Payload } from "./Payload";
export const Response = ({ data }) => {
  return (
    <>
      <div className="heroResponse">
        {data ? (
          <Payload data={data} />
        ) : (
          <>
            <div className="heroResponseFirstChild">
              {/* Under construction-  will get history of methods and api call which i save on db but after closing the session it will delete it or can use array for simplicity */}
              <select className="responseButton">
                <option value="">History</option>
              </select>
              <p style={{ borderLeft: "1px solid gray", paddingLeft: "10px" }}>
                Response
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>Enter API URL and click on send button !</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};
