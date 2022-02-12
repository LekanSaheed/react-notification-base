"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _bs = require("react-icons/bs");

var _md = require("react-icons/md");

var _HintModule = _interopRequireDefault(require("./Hint.module.css"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _framerMotion = require("framer-motion/dist/framer-motion");

var _fi = require("react-icons/fi");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Hint = _ref => {
  let {
    iconType,
    label,
    type,
    isAnimated,
    variant,
    dismissible //   fullWidth,

  } = _ref;

  const [close, setClose] = _react.default.useState(false);

  typeof label !== "string" && new Error("Type of label must be string");
  const motionVariant = {
    hidden: {
      opacity: 0,
      x: 10
    },
    visible: {
      opacity: 1,
      x: 0
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    //   style={{ width: fullWidth && "100%" }}
    className: "".concat(variant === "contained" ? _HintModule.default.contained : _HintModule.default.outlined)
  }, /*#__PURE__*/_react.default.createElement(_framerMotion.AnimatePresence, null, !close && /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
    // style={{ width: fullWidth && "100%" }}
    initial: "hidden",
    animate: "visible",
    variants: isAnimated ? motionVariant : null,
    className: "".concat(type === "success" ? _HintModule.default.success : type === "error" ? _HintModule.default.error : type === "warning" ? _HintModule.default.warning : _HintModule.default.info, " ").concat(_HintModule.default.container),
    exit: "hidden"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: "17px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "inherit"
    }
  }, type === "success" ? iconType === "solid" ? /*#__PURE__*/_react.default.createElement(_md.MdCheckCircle, null) : /*#__PURE__*/_react.default.createElement(_fi.FiCheckCircle, null) : type === "error" ? iconType === "solid" ? /*#__PURE__*/_react.default.createElement(_md.MdError, null) : /*#__PURE__*/_react.default.createElement(_md.MdErrorOutline, null) : type === "warning" ? iconType === "solid" ? /*#__PURE__*/_react.default.createElement(_md.MdError, null) : /*#__PURE__*/_react.default.createElement(_md.MdErrorOutline, null) : iconType === "solid" ? /*#__PURE__*/_react.default.createElement(_bs.BsInfoCircleFill, null) : /*#__PURE__*/_react.default.createElement(_bs.BsInfoCircle, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: _HintModule.default.hint_text
  }, label ? label : "A Notification Component"), /*#__PURE__*/_react.default.createElement("div", null, dismissible && /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => setClose(true)
  }, /*#__PURE__*/_react.default.createElement(_md.MdClose, null))))));
};

Hint.defaultProps = {
  isAnimated: true,
  dismissible: true,
  type: "info",
  variant: "contained"
};
Hint.propTypes = {
  label: _propTypes.default.string,
  iconType: _propTypes.default.oneOf(["solid", "outlined"]),
  type: _propTypes.default.oneOf(["success", "error", "warning", "info"]),
  isAnimated: _propTypes.default.bool,
  variant: _propTypes.default.oneOf(["contained", "outlined"]),
  dismissible: _propTypes.default.bool
};
var _default = Hint;
exports.default = _default;