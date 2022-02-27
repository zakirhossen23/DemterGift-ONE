"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./src/modals/login/main.tsx":
/*!***********************************!*\
  !*** ./src/modals/login/main.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CreateEvents; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");







function CreateEvents() {
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  var regex = /\[(.*)\]/g;
  var str = decodeURIComponent(window.location.search);
  var m;
  var redirecting = "";

  while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    redirecting = m[1];
  }

  function web3Connect() {
    return _web3Connect.apply(this, arguments);
  }

  function _web3Connect() {
    _web3Connect = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var result, getacc;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return window.ethereum.request({
                method: 'eth_requestAccounts'
              });

            case 2:
              result = _context.sent;
              result;
              _context.prev = 4;
              _context.next = 7;
              return window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                  chainId: '0x6357D2E0'
                }]
              });

            case 7:
              getacc = _context.sent;
              getacc;
              window.location.href = redirecting;
              _context.next = 23;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](4);

              if (!(_context.t0.code === 4902)) {
                _context.next = 23;
                break;
              }

              _context.prev = 15;
              _context.next = 18;
              return window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: '0x6357D2E0',
                  chainName: 'Harmony Testnet',
                  nativeCurrency: {
                    name: 'Harmony',
                    symbol: 'ONE',
                    decimals: 18
                  },
                  rpcUrls: ['https://api.s0.b.hmny.io']
                }]
              });

            case 18:
              _context.next = 23;
              break;

            case 20:
              _context.prev = 20;
              _context.t1 = _context["catch"](15);
              // handle "add" error
              console.log(_context.t1);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 12], [15, 20]]);
    }));
    return _web3Connect.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(next_head__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("title", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("meta", {
    name: "description",
    content: "Login"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      padding: "3% 37%",
      "paddingTop": 0,
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      width: "500px",
      background: "transparent",
      padding: "19px",
      borderRadius: "4px",
      height: "100%",
      border: "white solid"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      margin: "0px 0px 53px 0px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", null, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      margin: "0px 0px 12px 0px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h4", {
    style: {
      fontSize: 24
    }
  }, "Please select one of the option to Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    onClick: web3Connect,
    style: {
      display: "flex",
      padding: 10,
      color: "white",
      borderRadius: 5,
      height: 69,
      backgroundColor: "#0d6efd",
      cursor: "pointer",
      margin: "20px 0px",
      alignItems: "center",
      alignContent: "center"
    },
    className: "btn-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("img", {
    style: {
      height: "45px",
      width: "46px"
    },
    src: "https://polis.metis.io/static/img/metamask-fox.c06f3a3e.svg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "11px",
      gap: 24
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    style: {
      fontWeight: "bolder",
      fontFamily: "sans-serif",
      lineHeight: 0
    }
  }, "Metamask"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    style: {
      fontSize: "15px",
      fontFamily: "sans-serif",
      lineHeight: 0
    }
  }, "Connect With MetaMask"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      display: "flex",
      padding: "10px",
      borderRadius: "5px",
      cursor: "pointer",
      margin: "20px 0"
    },
    className: "btn-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("img", {
    style: {
      height: "45px",
      width: "46px"
    },
    src: "https://polis.metis.io/static/img/polis-trans.9c0be85f.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "11px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    style: {
      fontWeight: "bolder",
      fontFamily: "sans-serif"
    }
  }, "Metis Polis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    style: {
      fontSize: "15px",
      fontFamily: "sans-serif"
    }
  }, "Connect With Polis account"))))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "4e06459e3b4ff72d5a06"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjkxZTllN2NlZmNiODA2NjRkZGZhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBR2UsU0FBU0ssWUFBVCxHQUF3QjtBQUNuQyxNQUFNQyxNQUFNLEdBQUdGLHNEQUFTLEVBQXhCO0FBQ0EsTUFBTUcsS0FBSyxHQUFHLFdBQWQ7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLGtCQUFrQixDQUFDQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWpCLENBQTlCO0FBQ0EsTUFBSUMsQ0FBSjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxFQUFsQjs7QUFDQSxTQUFPLENBQUNELENBQUMsR0FBR04sS0FBSyxDQUFDUSxJQUFOLENBQVdQLEdBQVgsQ0FBTCxNQUEwQixJQUFqQyxFQUF1QztBQUNuQztBQUNBLFFBQUlLLENBQUMsQ0FBQ0csS0FBRixLQUFZVCxLQUFLLENBQUNVLFNBQXRCLEVBQWlDO0FBQzdCVixNQUFBQSxLQUFLLENBQUNVLFNBQU47QUFDSDs7QUFDREgsSUFBQUEsV0FBVyxHQUFHRCxDQUFDLENBQUMsQ0FBRCxDQUFmO0FBQ0g7O0FBWmtDLFdBY3BCSyxXQWRvQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSw0TUFjbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDdUJSLE1BQU0sQ0FBQ1MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFBRUMsZ0JBQUFBLE1BQU0sRUFBRTtBQUFWLGVBQXhCLENBRHZCOztBQUFBO0FBQ1FDLGNBQUFBLE1BRFI7QUFFSUEsY0FBQUEsTUFBTTtBQUZWO0FBQUE7QUFBQSxxQkFJNkJaLE1BQU0sQ0FBQ1MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFDekNDLGdCQUFBQSxNQUFNLEVBQUUsNEJBRGlDO0FBRXpDRSxnQkFBQUEsTUFBTSxFQUFFLENBQUM7QUFBRUMsa0JBQUFBLE9BQU8sRUFBRTtBQUFYLGlCQUFE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RUFBRTtBQUFFWCxNQUFBQSxRQUFRLEVBQUUsTUFBWjtBQUFvQlcsTUFBQUEsVUFBVSxFQUFFO0FBQWhDO0FBQWIsa0NBSkosQ0FGSixDQXJCSixDQURKLENBREosQ0FQRixDQUFGLENBREo7QUFvREg7Ozs7Ozs7O1VDekhELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvbW9kYWxzL2xvZ2luL21haW4udHN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCAqIGFzIGRvdGVudiBmcm9tICdkb3RlbnYnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5kZWNsYXJlIGxldCB3aW5kb3c6IGFueTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlRXZlbnRzKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCByZWdleCA9IC9cXFsoLiopXFxdL2c7XHJcbiAgICBjb25zdCBzdHIgPSBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICBsZXQgbTtcclxuICAgIGxldCByZWRpcmVjdGluZyA9IFwiXCI7XHJcbiAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKHN0cikpICE9PSBudWxsKSB7XHJcbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgdG8gYXZvaWQgaW5maW5pdGUgbG9vcHMgd2l0aCB6ZXJvLXdpZHRoIG1hdGNoZXNcclxuICAgICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XHJcbiAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZWRpcmVjdGluZyA9IG1bMV07XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gd2ViM0Nvbm5lY3QoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XHJcbiAgICAgICAgcmVzdWx0O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdldGFjYyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3dhbGxldF9zd2l0Y2hFdGhlcmV1bUNoYWluJyxcclxuICAgICAgICAgICAgICAgIHBhcmFtczogW3sgY2hhaW5JZDogJzB4NjM1N0QyRTAnIH1dLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZ2V0YWNjO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlZGlyZWN0aW5nO1xyXG4gICAgICAgIH0gY2F0Y2ggKHN3aXRjaEVycm9yOiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBlcnJvciBjb2RlIGluZGljYXRlcyB0aGF0IHRoZSBjaGFpbiBoYXMgbm90IGJlZW4gYWRkZWQgdG8gTWV0YU1hc2suXHJcbiAgICAgICAgICAgIGlmIChzd2l0Y2hFcnJvci5jb2RlID09PSA0OTAyKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnd2FsbGV0X2FkZEV0aGVyZXVtQ2hhaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbklkOiAnMHg2MzU3RDJFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5OYW1lOiAnSGFybW9ueSBUZXN0bmV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVDdXJyZW5jeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnSGFybW9ueScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogJ09ORScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxzOiAxOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJwY1VybHM6IFsnaHR0cHM6Ly9hcGkuczAuYi5obW55LmlvJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoYWRkRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgXCJhZGRcIiBlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZEVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBoYW5kbGUgb3RoZXIgXCJzd2l0Y2hcIiBlcnJvcnNcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Pjw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkxvZ2luPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJMb2dpblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmc6IFwiMyUgMzclXCIsIFwicGFkZGluZ1RvcFwiOiAwLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI1MDBweFwiLCBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsIHBhZGRpbmc6IFwiMTlweFwiLCBib3JkZXJSYWRpdXM6IFwiNHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIGJvcmRlcjogXCJ3aGl0ZSBzb2xpZFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIwcHggMHB4IDUzcHggMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+TG9naW48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMHB4IDBweCAxMnB4IDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRTaXplOiAyNCB9fT5QbGVhc2Ugc2VsZWN0IG9uZSBvZiB0aGUgb3B0aW9uIHRvIExvZ2luPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3dlYjNDb25uZWN0fSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIixwYWRkaW5nOiAxMCxjb2xvcjogXCJ3aGl0ZVwiLGJvcmRlclJhZGl1czogNSxoZWlnaHQ6IDY5LGJhY2tncm91bmRDb2xvcjogXCIjMGQ2ZWZkXCIsY3Vyc29yOiBcInBvaW50ZXJcIixtYXJnaW46IFwiMjBweCAwcHhcIixhbGlnbkl0ZW1zOiBcImNlbnRlclwiLGFsaWduQ29udGVudDogXCJjZW50ZXJcIiB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6IFwiNDVweFwiLCB3aWR0aDogXCI0NnB4XCIgfX0gc3JjPVwiaHR0cHM6Ly9wb2xpcy5tZXRpcy5pby9zdGF0aWMvaW1nL21ldGFtYXNrLWZveC5jMDZmM2EzZS5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgbWFyZ2luTGVmdDogXCIxMXB4XCIsIGdhcDogMjQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkZXJcIiwgZm9udEZhbWlseTogXCJzYW5zLXNlcmlmXCIgLCBsaW5lSGVpZ2h0OiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZXRhbWFza1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxNXB4XCIsIGZvbnRGYW1pbHk6IFwic2Fucy1zZXJpZlwiLCBsaW5lSGVpZ2h0OiAwICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdCBXaXRoIE1ldGFNYXNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIG1hcmdpbjogXCIyMHB4IDBcIiB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6IFwiNDVweFwiLCB3aWR0aDogXCI0NnB4XCIgfX0gc3JjPVwiaHR0cHM6Ly9wb2xpcy5tZXRpcy5pby9zdGF0aWMvaW1nL3BvbGlzLXRyYW5zLjljMGJlODVmLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBtYXJnaW5MZWZ0OiBcIjExcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRlclwiLCBmb250RmFtaWx5OiBcInNhbnMtc2VyaWZcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWV0aXMgUG9saXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMTVweFwiLCBmb250RmFtaWx5OiBcInNhbnMtc2VyaWZcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdCBXaXRoIFBvbGlzIGFjY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI0ZTA2NDU5ZTNiNGZmNzJkNWEwNlwiOyB9Il0sIm5hbWVzIjpbIkhlYWQiLCJSb3ciLCJDb2wiLCJSZWFjdCIsInVzZVJvdXRlciIsIkNyZWF0ZUV2ZW50cyIsInJvdXRlciIsInJlZ2V4Iiwic3RyIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJtIiwicmVkaXJlY3RpbmciLCJleGVjIiwiaW5kZXgiLCJsYXN0SW5kZXgiLCJ3ZWIzQ29ubmVjdCIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsInJlc3VsdCIsInBhcmFtcyIsImNoYWluSWQiLCJnZXRhY2MiLCJocmVmIiwiY29kZSIsImNoYWluTmFtZSIsIm5hdGl2ZUN1cnJlbmN5IiwibmFtZSIsInN5bWJvbCIsImRlY2ltYWxzIiwicnBjVXJscyIsImNvbnNvbGUiLCJsb2ciLCJwYWRkaW5nIiwid2lkdGgiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYm9yZGVyIiwibWFyZ2luIiwiZm9udFNpemUiLCJkaXNwbGF5IiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXJzb3IiLCJhbGlnbkl0ZW1zIiwiYWxpZ25Db250ZW50IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbkxlZnQiLCJnYXAiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImxpbmVIZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9