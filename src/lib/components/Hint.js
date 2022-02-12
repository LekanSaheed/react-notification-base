import React from "react";
import { BsInfoCircle, BsInfoCircleFill } from "react-icons/bs";
import {
  MdCheckCircle,
  MdClose,
  MdError,
  MdErrorOutline,
} from "react-icons/md";
import classes from "./Hint.module.css";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import { FiCheckCircle } from "react-icons/fi";
const Hint = ({
  iconType,
  label,
  type,
  isAnimated,
  variant,
  dismissible,
  //   fullWidth,
}) => {
  const [close, setClose] = React.useState(false);
  typeof label !== "string" && new Error("Type of label must be string");
  const motionVariant = {
    hidden: {
      opacity: 0,
      x: 10,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div
      //   style={{ width: fullWidth && "100%" }}
      className={`${
        variant === "contained" ? classes.contained : classes.outlined
      }`}
    >
      <AnimatePresence>
        {!close && (
          <motion.div
            // style={{ width: fullWidth && "100%" }}
            initial="hidden"
            animate="visible"
            variants={isAnimated ? motionVariant : null}
            className={`${
              type === "success"
                ? classes.success
                : type === "error"
                ? classes.error
                : type === "warning"
                ? classes.warning
                : classes.info
            } ${classes.container}`}
            exit="hidden"
          >
            <div
              style={{
                fontSize: "17px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "inherit",
              }}
            >
              {type === "success" ? (
                iconType === "solid" ? (
                  <MdCheckCircle />
                ) : (
                  <FiCheckCircle />
                )
              ) : type === "error" ? (
                iconType === "solid" ? (
                  <MdError />
                ) : (
                  <MdErrorOutline />
                )
              ) : type === "warning" ? (
                iconType === "solid" ? (
                  <MdError />
                ) : (
                  <MdErrorOutline />
                )
              ) : iconType === "solid" ? (
                <BsInfoCircleFill />
              ) : (
                <BsInfoCircle />
              )}
            </div>
            <div className={classes.hint_text}>
              {label ? label : "A Notification Component"}
            </div>
            <div>
              {dismissible && (
                <div onClick={() => setClose(true)}>
                  <MdClose />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
Hint.defaultProps = {
  isAnimated: true,
  dismissible: true,
  type: "info",
  variant: "contained",
};
Hint.propTypes = {
  label: PropTypes.string,
  iconType: PropTypes.oneOf(["solid", "outlined"]),
  type: PropTypes.oneOf(["success", "error", "warning", "info"]),
  isAnimated: PropTypes.bool,
  variant: PropTypes.oneOf(["contained", "outlined"]),
  dismissible: PropTypes.bool,
};

export default Hint;
