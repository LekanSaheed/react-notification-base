import React, { useState } from "react";
import Hint from "./lib/components/Hint";
import { MdMenu } from "react-icons/md";
// import { Hint } from "react-notification-base";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
const App = () => {
  const [type, setType] = useState("info");
  const [variant, setVariant] = useState("contained");
  const [label, setLabel] = useState("New Notifications");
  const [iconType, setIconType] = useState("outlined");
  const [isAnimated, setIsAnimated] = useState(true);
  const [openMenu, setOpen] = useState(false);
  const reset = () => {
    setVariant("contained");
    setType("info");
    setLabel("New Notifications");
    setIsAnimated(true);
    setIconType("outlined");
  };
  const anim = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        // padding: "10px",
      }}
    >
      <div
        style={{
          height: "40px",
          padding: "10px",
          borderBottom: "solid 4px #4bc2bc",
          fontWeight: "600",
          display: "flex",
          justifyContent: "space-between",
          position: "sticky",
          top: "0",
          backgroundColor: "#fff",
          alignItems: "center",
          // backgroundColor: "#4bc2bc",
        }}
      >
        React Notification
        <div style={{ fontSize: "23px" }} onClick={() => setOpen(!openMenu)}>
          <MdMenu />
        </div>
      </div>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={anim}
            exit="hidden"
            style={{
              position: "absolute",
              top: "60px",
              right: "0",
              left: "0",
              padding: "10px",
              background: "#4bc2bc",
              color: "#fff !important",
              fontSize: "15px",
            }}
          >
            <a
              href="https://github.com/lekansaheed/react-notification-base"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#fff", fontWeight: "600" }}
            >
              Contribute
            </a>
            <br />
            <a
              href="https://github.com/lekansaheed/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#fff", fontWeight: "600" }}
            >
              Developer Profile
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <div style={{ fontSize: "14px", fontWeight: "500", padding: "5px" }}>
        A simple customizable react notification component, it is readily
        available and all you only need to get it up and working it to install
        is to install
        <br />
        <br />
        <b>
          {" "}
          To install, <i>run</i>
        </b>
        <div style={{ background: "#f5f5f5", padding: "8px" }}>
          {" "}
          <code>$ npm install react-notification-base</code>
        </div>
      </div>
      <div
        style={{
          fontSize: "12px",
          padding: "20px 10px",
          background: "#000",
          borderTop: "solid 2px orange",
          borderBottom: "solid 2px orange",
          color: "goldenrod",
          margin: "10px",
        }}
      >
        <code>
          import {Hint} from 'react-notification-base'
          <br />
          <span style={{ color: "dodgerblue" }}>
            {" "}
            const SuperbApp = (){" => "}
            {"<Hint />"}
          </span>
        </code>
      </div>
      <h2> Component at function</h2>
      <Hint
        label={label}
        type={type}
        isAnimated={isAnimated}
        variant={variant}
        iconType={iconType}
      />
      <div
        style={{
          backgroundColor: "#efefef",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "2px",
        }}
      >
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
        Animated
        <label>
          <input
            type="radio"
            name="animated"
            onChange={() => setIsAnimated(true)}
            value={isAnimated}
            checked={isAnimated}
          />
          Animation
        </label>
        <label>
          <input
            type="radio"
            name="animated"
            onChange={() => setIsAnimated(false)}
            value={isAnimated}
          />
          No-Animation
        </label>
      </div>
      <button
        style={{
          height: "60px",
          background: "#17a2b8",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
        }}
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};

export default App;
