import React, { useState } from "react";
import Hint from "./lib/components/Hint";

const App = () => {
  const [type, setType] = useState("info");
  const [variant, setVariant] = useState("contained");
  const [label, setLabel] = useState("New Notifications");
  const [iconType, setIconType] = useState("outlined");
  const [isAnimated, setInanimated] = useState(true);
  const reset = () => {
    setVariant("contained");
    setType("info");
    setLabel("New Notifications");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      Mollit veniam mollit sunt excepteur velit.
      <Hint label={label} type={type} variant={variant} iconType={iconType} />
      <div>
        <div>Type</div>
        <label htmlFor="type">
          <input
            type="radio"
            name="type"
            value="info"
            checked={type === "info"}
            id="info"
            onChange={() => setType("info")}
          />
          Info
        </label>
        <label htmlFor="type">
          <input
            type="radio"
            name="type"
            value={type}
            onChange={() => setType("success")}
          />
          Success
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value={type}
            onChange={() => setType("error")}
          />
          Error
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value={type}
            onChange={() => setType("warning")}
          />
          Warning
        </label>
      </div>
      Notification type
      <label>
        {" "}
        <input
          type="radio"
          name="contained"
          value={variant}
          checked={variant === "contained"}
          onChange={() => setVariant("contained")}
        />
        Contained
      </label>
      <label>
        {" "}
        <input
          type="radio"
          name="contained"
          value={variant}
          onChange={() => setVariant("outlined")}
        />
        Outlined
      </label>
      icon type
      <label>
        <input
          type="radio"
          name="solid"
          checked={iconType === "outlined"}
          onChange={() => setIconType("outlined")}
        />
        Outlined
      </label>
      <label>
        <input
          type="radio"
          name="solid"
          onChange={() => setIconType("solid")}
          value={iconType}
        />
        Solid
      </label>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default App;
