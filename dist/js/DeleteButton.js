"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DeleteButton;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
var _Button = _interopRequireDefault(require("react-bootstrap/Button"));
var _Modal = _interopRequireDefault(require("react-bootstrap/Modal"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// Delete button with confirmation modal
function DeleteButton(props) {
  const {
    enabled,
    deletePath,
    entityName
  } = props;
  // Id to delete
  const [show, setShow] = (0, _react.useState)(false);
  const handleShowModal = () => setShow(true);
  const handleHideModal = () => setShow(false);

  // Modal for delete confirmation
  let modal = '';
  if (enabled) {
    modal = /*#__PURE__*/_react.default.createElement(_Modal.default, {
      show: show,
      onHide: () => handleHideModal()
    }, /*#__PURE__*/_react.default.createElement(_Modal.default.Header, {
      closeButton: true
    }, /*#__PURE__*/_react.default.createElement(_Modal.default.Title, null, "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F")), /*#__PURE__*/_react.default.createElement(_Modal.default.Body, null, "\u0412\u0438 \u0434\u0456\u0439\u0441\u043D\u043E \u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 ".concat(entityName, "?")), /*#__PURE__*/_react.default.createElement(_Modal.default.Footer, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
      as: _reactRouterDom.Link,
      variant: "danger",
      to: deletePath,
      onClick: () => handleHideModal()
    }, "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"), /*#__PURE__*/_react.default.createElement(_Button.default, {
      variant: "secondary",
      onClick: () => handleHideModal()
    }, "\u0417\u0430\u043A\u0440\u0438\u0442\u0438")));
  }

  // Component
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "m-2",
    variant: "danger",
    disabled: !enabled,
    onClick: () => handleShowModal()
  }, "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"), modal);
}

// prop types
DeleteButton.propTypes = {
  enabled: _propTypes.default.bool,
  deletePath: _propTypes.default.string.isRequired,
  entityName: _propTypes.default.string.isRequired
};

// default values
DeleteButton.defaultProps = {
  enabled: true
};