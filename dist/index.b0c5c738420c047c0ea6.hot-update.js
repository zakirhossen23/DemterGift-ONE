"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./src/components/components/modals/BidNFTModal.jsx":
/*!**********************************************************!*\
  !*** ./src/components/components/modals/BidNFTModal.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BidNFTModal; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _harmony_js_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @harmony-js/utils */ "./node_modules/@harmony-js/utils/dist/index.js");
/* harmony import */ var _harmony_js_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_harmony_js_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UseFormInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UseFormInput */ "./src/components/components/UseFormInput.jsx");










function BidNFTModal(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      contract = _ref.contract,
      senderAddress = _ref.senderAddress,
      tokenId = _ref.tokenId,
      eventId = _ref.eventId,
      type = _ref.type,
      Highestbid = _ref.Highestbid;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      Alert = _useState2[0],
      setAlert = _useState2[1];

  var _UseFormInput = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_6__["default"])({
    type: 'text',
    placeholder: 'Amount'
  }),
      _UseFormInput2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput, 2),
      Amount = _UseFormInput2[0],
      AmountInput = _UseFormInput2[1];

  function activateWarningModal() {
    var alertELM = document.getElementById("alert");
    alertELM.style = 'contents';
    setAlert("Amount cannot be under ".concat(Highestbid, " ONE"));
  }

  function bidNFT() {
    return _bidNFT.apply(this, arguments);
  }

  function _bidNFT() {
    _bidNFT = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var tokenUri, parsed, currentDate, createdObject, OneinFull, result;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(Amount < Highestbid)) {
                _context.next = 3;
                break;
              }

              activateWarningModal();
              return _context.abrupt("return");

            case 3:
              _context.next = 5;
              return contract.tokenURI(tokenId);

            case 5:
              tokenUri = _context.sent;
              _context.next = 8;
              return JSON.parse(tokenUri);

            case 8:
              parsed = _context.sent;

              if (Number(parsed['properties']['price']['description']) < Number(Amount)) {
                parsed['properties']['price']['description'] = Amount;
                parsed['properties']['higherbidadd']['description'] = senderAddress;
              }

              currentDate = new Date();
              createdObject = {
                title: 'Asset Metadata Bids',
                type: 'object',
                properties: {
                  username: {
                    type: 'string',
                    description: senderAddress
                  },
                  bid: {
                    type: 'string',
                    description: Amount
                  },
                  time: {
                    type: 'string',
                    description: currentDate
                  }
                }
              };
              OneinFull = (Number(Amount) * 1000000000000000000).toLocaleString('fullwide', {
                useGrouping: false
              });
              _context.next = 15;
              return contract.createBid(tokenId, _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(createdObject), _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(parsed), eventId, {
                from: senderAddress,
                gasPrice: 1000000000,
                value: OneinFull
              });

            case 15:
              result = _context.sent;
              console.log(result);
              window.document.getElementsByClassName("btn-close")[0].click();

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _bidNFT.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    show: show,
    onHide: onHide,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"].Header, {
    closeButton: true
  }, type == "Cryptopunk" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "Bid Cryptopunk") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "Bid NFT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"].Body, {
    className: "show-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    id: "alert",
    style: {
      display: 'none'
    },
    className: "alert alert-danger",
    role: "alert"
  }, Alert), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Label, null, "Bid Amount in ONE"), AmountInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "d-grid"
  }, type == "Cryptopunk" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "primary",
    onClick: bidNFT
  }, "Bid Cryptopunk") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "primary",
    onClick: bidNFT
  }, "Bid NFT")))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "cae493c88827ca789cbc"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmIwYzVjNzM4NDIwYzA0N2MwZWE2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU1UsV0FBVCxPQVVaO0FBQUEsTUFURkMsSUFTRSxRQVRGQSxJQVNFO0FBQUEsTUFSRkMsTUFRRSxRQVJGQSxNQVFFO0FBQUEsTUFQRkMsUUFPRSxRQVBGQSxRQU9FO0FBQUEsTUFORkMsYUFNRSxRQU5GQSxhQU1FO0FBQUEsTUFMRkMsT0FLRSxRQUxGQSxPQUtFO0FBQUEsTUFKRkMsT0FJRSxRQUpGQSxPQUlFO0FBQUEsTUFIRkMsSUFHRSxRQUhGQSxJQUdFO0FBQUEsTUFGRkMsVUFFRSxRQUZGQSxVQUVFOztBQUNGLGtCQUEwQmpCLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBO0FBQUEsTUFBT2tCLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUdBLHNCQUE4QlgseURBQVksQ0FBQztBQUMxQ1EsSUFBQUEsSUFBSSxFQUFFLE1BRG9DO0FBRTFDSSxJQUFBQSxXQUFXLEVBQUU7QUFGNkIsR0FBRCxDQUExQztBQUFBO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFdBQWY7O0FBTUEsV0FBU0Msb0JBQVQsR0FBZ0M7QUFDL0IsUUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZjtBQUNBRixJQUFBQSxRQUFRLENBQUNHLEtBQVQsR0FBaUIsVUFBakI7QUFDQVIsSUFBQUEsUUFBUSxrQ0FBMkJGLFVBQTNCLFVBQVI7QUFDQTs7QUFkQyxXQWVhVyxNQWZiO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVNQWVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNLUCxNQUFNLEdBQUdKLFVBRGQ7QUFBQTtBQUFBO0FBQUE7O0FBRUVNLGNBQUFBLG9CQUFvQjtBQUZ0Qjs7QUFBQTtBQUFBO0FBQUEscUJBS3dC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QUksRUFBQztBQUFoRixLQUNFdkMsS0FERixDQURELGVBSUMsaURBQUMsa0VBQUQ7QUFBWSxhQUFTLEVBQUMsTUFBdEI7QUFBNkIsYUFBUyxFQUFDO0FBQXZDLGtCQUNDLGlEQUFDLGtFQUFELDRCQURELEVBRUVJLFdBRkYsQ0FKRCxlQVFDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FFR04sSUFBSSxJQUFJLFlBQVQsZ0JBQ0EsaURBQUMsOERBQUQ7QUFBUSxXQUFPLEVBQUMsU0FBaEI7QUFBMEIsV0FBTyxFQUFFWTtBQUFuQyxzQkFEQSxnQkFJQSxpREFBQyw4REFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixXQUFPLEVBQUVBO0FBQW5DLGVBTkYsQ0FSRCxDQURELENBaEJELENBREQ7QUEyQ0E7Ozs7Ozs7O1VDckhELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9CaWRORlRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgeyBmcm9tV2VpLCBVbml0cywgVW5pdCB9IGZyb20gJ0BoYXJtb255LWpzL3V0aWxzJztcblxuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICcuLi9Vc2VGb3JtSW5wdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaWRORlRNb2RhbCh7XG5cdHNob3csXG5cdG9uSGlkZSxcblx0Y29udHJhY3QsXG5cdHNlbmRlckFkZHJlc3MsXG5cdHRva2VuSWQsXG5cdGV2ZW50SWQsXG5cdHR5cGUsXG5cdEhpZ2hlc3RiaWRcblxufSkge1xuXHRjb25zdCBbQWxlcnQsIHNldEFsZXJ0XSA9IHVzZVN0YXRlKCcnKTtcblxuXG5cdGNvbnN0IFtBbW91bnQsIEFtb3VudElucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnQW1vdW50Jyxcblx0fSk7XG5cblxuXHRmdW5jdGlvbiBhY3RpdmF0ZVdhcm5pbmdNb2RhbCgpIHtcblx0XHR2YXIgYWxlcnRFTE0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpO1xuXHRcdGFsZXJ0RUxNLnN0eWxlID0gJ2NvbnRlbnRzJztcblx0XHRzZXRBbGVydChgQW1vdW50IGNhbm5vdCBiZSB1bmRlciAke0hpZ2hlc3RiaWR9IE9ORWApXG5cdH1cblx0YXN5bmMgZnVuY3Rpb24gYmlkTkZUKCkge1xuXHRcdGlmIChBbW91bnQgPCBIaWdoZXN0YmlkKSB7XG5cdFx0XHRhY3RpdmF0ZVdhcm5pbmdNb2RhbCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCB0b2tlblVyaSA9IGF3YWl0IGNvbnRyYWN0LnRva2VuVVJJKHRva2VuSWQpO1xuXHRcdHZhciBwYXJzZWQgPSBhd2FpdCBKU09OLnBhcnNlKHRva2VuVXJpKTtcblx0XHRpZiAoTnVtYmVyKHBhcnNlZFsncHJvcGVydGllcyddWydwcmljZSddWydkZXNjcmlwdGlvbiddKSA8IE51bWJlcihBbW91bnQpKSB7XG5cdFx0XHRwYXJzZWRbJ3Byb3BlcnRpZXMnXVsncHJpY2UnXVsnZGVzY3JpcHRpb24nXSA9IEFtb3VudDtcblx0XHRcdHBhcnNlZFsncHJvcGVydGllcyddWydoaWdoZXJiaWRhZGQnXVsnZGVzY3JpcHRpb24nXSA9IHNlbmRlckFkZHJlc3M7XG5cblx0XHR9XG5cdFx0bGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCBjcmVhdGVkT2JqZWN0ID0ge1xuXHRcdFx0dGl0bGU6ICdBc3NldCBNZXRhZGF0YSBCaWRzJyxcblx0XHRcdHR5cGU6ICdvYmplY3QnLFxuXHRcdFx0cHJvcGVydGllczoge1xuXHRcdFx0XHR1c2VybmFtZToge1xuXHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBzZW5kZXJBZGRyZXNzXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJpZDoge1xuXHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBBbW91bnRcblx0XHRcdFx0fSxcblx0XHRcdFx0dGltZToge1xuXHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBjdXJyZW50RGF0ZVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcbmxldCBPbmVpbkZ1bGwgPSAoTnVtYmVyKEFtb3VudCkgKiAxMDAwMDAwMDAwMDAwMDAwMDAwKS50b0xvY2FsZVN0cmluZygnZnVsbHdpZGUnLCB7IHVzZUdyb3VwaW5nOiBmYWxzZSB9KTtcblxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZUJpZCh0b2tlbklkLCBKU09OLnN0cmluZ2lmeShjcmVhdGVkT2JqZWN0KSwgSlNPTi5zdHJpbmdpZnkocGFyc2VkKSwgZXZlbnRJZCx7ZnJvbTogc2VuZGVyQWRkcmVzcywgXG5cdFx0XHRcdFx0XHRcdGdhc1ByaWNlOiAxMDAwMDAwMDAwLHZhbHVlOiBPbmVpbkZ1bGx9ICk7XG5cblxuXHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdFx0d2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4tY2xvc2VcIilbMF0uY2xpY2soKTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PE1vZGFsXG5cdFx0XHRzaG93PXtzaG93fVxuXHRcdFx0b25IaWRlPXtvbkhpZGV9XG5cdFx0XHRhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXG5cdFx0XHRjZW50ZXJlZFxuXHRcdD5cblx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdHsodHlwZSA9PSBcIkNyeXB0b3B1bmtcIikgPyAoXG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHRcdEJpZCBDcnlwdG9wdW5rXG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT4pIDogKFxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG5cdFx0XHRcdFx0XHRCaWQgTkZUXG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0KX1cblx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0PE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG5cdFx0XHRcdDxGb3JtPlxuXHRcdFx0XHRcdDxkaXYgaWQ9J2FsZXJ0JyBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XG5cdFx0XHRcdFx0XHR7QWxlcnR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cE5hbWVcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkJpZCBBbW91bnQgaW4gT05FPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e0Ftb3VudElucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiPlxuXG5cdFx0XHRcdFx0XHR7KHR5cGUgPT0gXCJDcnlwdG9wdW5rXCIpID8gKFxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17YmlkTkZUfT5cblx0XHRcdFx0XHRcdFx0XHRCaWQgQ3J5cHRvcHVua1xuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj4pIDogKFxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17YmlkTkZUfT5cblx0XHRcdFx0XHRcdFx0XHRCaWQgTkZUXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXG5cdFx0PC9Nb2RhbD5cblxuXHQpO1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImNhZTQ5M2M4ODgyN2NhNzg5Y2JjXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1vZGFsIiwiRm9ybSIsIkJ1dHRvbiIsImZyb21XZWkiLCJVbml0cyIsIlVuaXQiLCJVc2VGb3JtSW5wdXQiLCJCaWRORlRNb2RhbCIsInNob3ciLCJvbkhpZGUiLCJjb250cmFjdCIsInNlbmRlckFkZHJlc3MiLCJ0b2tlbklkIiwiZXZlbnRJZCIsInR5cGUiLCJIaWdoZXN0YmlkIiwiQWxlcnQiLCJzZXRBbGVydCIsInBsYWNlaG9sZGVyIiwiQW1vdW50IiwiQW1vdW50SW5wdXQiLCJhY3RpdmF0ZVdhcm5pbmdNb2RhbCIsImFsZXJ0RUxNIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYmlkTkZUIiwidG9rZW5VUkkiLCJ0b2tlblVyaSIsIkpTT04iLCJwYXJzZSIsInBhcnNlZCIsIk51bWJlciIsImN1cnJlbnREYXRlIiwiRGF0ZSIsImNyZWF0ZWRPYmplY3QiLCJ0aXRsZSIsInByb3BlcnRpZXMiLCJ1c2VybmFtZSIsImRlc2NyaXB0aW9uIiwiYmlkIiwidGltZSIsIk9uZWluRnVsbCIsInRvTG9jYWxlU3RyaW5nIiwidXNlR3JvdXBpbmciLCJjcmVhdGVCaWQiLCJmcm9tIiwiZ2FzUHJpY2UiLCJ2YWx1ZSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xpY2siLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==