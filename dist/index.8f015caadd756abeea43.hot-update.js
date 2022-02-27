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
              router.push(redirecting);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h4", null, "Please select one of the option to Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    onClick: web3Connect,
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
    src: "https://polis.metis.io/static/img/metamask-fox.c06f3a3e.svg"
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
  }, "Metamask"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    style: {
      fontSize: "15px",
      fontFamily: "sans-serif"
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
/******/ 	__webpack_require__.h = function() { return "a61f3e5440d267a942b3"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjhmMDE1Y2FhZGQ3NTZhYmVlYTQzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBR2UsU0FBU0ssWUFBVCxHQUF3QjtBQUNuQyxNQUFNQyxNQUFNLEdBQUdGLHNEQUFTLEVBQXhCO0FBQ0EsTUFBTUcsS0FBSyxHQUFHLFdBQWQ7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLGtCQUFrQixDQUFDQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWpCLENBQTlCO0FBQ0EsTUFBSUMsQ0FBSjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxFQUFsQjs7QUFDQSxTQUFPLENBQUNELENBQUMsR0FBR04sS0FBSyxDQUFDUSxJQUFOLENBQVdQLEdBQVgsQ0FBTCxNQUEwQixJQUFqQyxFQUF1QztBQUNuQztBQUNBLFFBQUlLLENBQUMsQ0FBQ0csS0FBRixLQUFZVCxLQUFLLENBQUNVLFNBQXRCLEVBQWlDO0FBQzdCVixNQUFBQSxLQUFLLENBQUNVLFNBQU47QUFDSDs7QUFDREgsSUFBQUEsV0FBVyxHQUFHRCxDQUFDLENBQUMsQ0FBRCxDQUFmO0FBQ0g7O0FBWmtDLFdBY3BCSyxXQWRvQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSw0TUFjbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDdUJSLE1BQU0sQ0FBQ1MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFBRUMsZ0JBQUFBLE1BQU0sRUFBRTtBQUFWLGVBQXhCLENBRHZCOztBQUFBO0FBQ1FDLGNBQUFBLE1BRFI7QUFFSUEsY0FBQUEsTUFBTTtBQUZWO0FBQUE7QUFBQSxxQkFJNkJaLE1BQU0sQ0FBQ1MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFDekNDLGdCQUFBQSxNQUFNLEVBQUUsNEJBRGlDO0FBRXpDRSxnQkFBQUEsTUFBTSxFQUFFLENBQUM7QUFBRUMsa0JBQUFBLE9BQU8sRUFBRTtBQUFYLGlCQUFE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SUk7QUFBTSxTQUFLLEVBQUU7QUFBRUMsTUFBQUEsUUFBUSxFQUFFLE1BQVo7QUFBb0JELE1BQUFBLFVBQVUsRUFBRTtBQUFoQztBQUFiLDZCQUpKLENBRkosQ0FQSixlQWtCSTtBQUFLLFNBQUssRUFBRTtBQUFFTCxNQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQlAsTUFBQUEsT0FBTyxFQUFFLE1BQTVCO0FBQW9DRyxNQUFBQSxZQUFZLEVBQUUsS0FBbEQ7QUFBeURLLE1BQUFBLE1BQU0sRUFBRSxTQUFqRTtBQUE0RUYsTUFBQUEsTUFBTSxFQUFFO0FBQXBGLEtBQVo7QUFBNEcsYUFBUyxFQUFDO0FBQXRILGtCQUNJO0FBQUssU0FBSyxFQUFFO0FBQUVGLE1BQUFBLE1BQU0sRUFBRSxNQUFWO0FBQWtCSCxNQUFBQSxLQUFLLEVBQUU7QUFBekIsS0FBWjtBQUErQyxPQUFHLEVBQUM7QUFBbkQsSUFESixlQUVJO0FBQUssU0FBSyxFQUFFO0FBQUVNLE1BQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CRSxNQUFBQSxhQUFhLEVBQUUsUUFBbEM7QUFBNENDLE1BQUFBLFVBQVUsRUFBRTtBQUF4RDtBQUFaLGtCQUNJO0FBQU0sU0FBSyxFQUFFO0FBQUVDLE1BQUFBLFVBQVUsRUFBRSxRQUFkO0FBQXdCQyxNQUFBQSxVQUFVLEVBQUU7QUFBcEM7QUFBYixtQkFESixlQUlJO0FBQU0sU0FBSyxFQUFFO0FBQUVDLE1BQUFBLFFBQVEsRUFBRSxNQUFaO0FBQW9CRCxNQUFBQSxVQUFVLEVBQUU7QUFBaEM7QUFBYixrQ0FKSixDQUZKLENBbEJKLENBREosQ0FESixDQVBGLENBQUYsQ0FESjtBQWlESDs7Ozs7Ozs7VUN0SEQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9tb2RhbHMvbG9naW4vbWFpbi50c3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcclxuaW1wb3J0ICogYXMgZG90ZW52IGZyb20gJ2RvdGVudic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmRlY2xhcmUgbGV0IHdpbmRvdzogYW55O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVFdmVudHMoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHJlZ2V4ID0gL1xcWyguKilcXF0vZztcclxuICAgIGNvbnN0IHN0ciA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgIGxldCBtO1xyXG4gICAgbGV0IHJlZGlyZWN0aW5nID0gXCJcIjtcclxuICAgIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcclxuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBpbmZpbml0ZSBsb29wcyB3aXRoIHplcm8td2lkdGggbWF0Y2hlc1xyXG4gICAgICAgIGlmIChtLmluZGV4ID09PSByZWdleC5sYXN0SW5kZXgpIHtcclxuICAgICAgICAgICAgcmVnZXgubGFzdEluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlZGlyZWN0aW5nID0gbVsxXTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiB3ZWIzQ29ubmVjdCgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcclxuICAgICAgICByZXN1bHQ7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZ2V0YWNjID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnd2FsbGV0X3N3aXRjaEV0aGVyZXVtQ2hhaW4nLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBbeyBjaGFpbklkOiAnMHg2MzU3RDJFMCcgfV0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBnZXRhY2M7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKHJlZGlyZWN0aW5nKTtcclxuICAgICAgICB9IGNhdGNoIChzd2l0Y2hFcnJvcjogYW55KSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgZXJyb3IgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgY2hhaW4gaGFzIG5vdCBiZWVuIGFkZGVkIHRvIE1ldGFNYXNrLlxyXG4gICAgICAgICAgICBpZiAoc3dpdGNoRXJyb3IuY29kZSA9PT0gNDkwMikge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ3dhbGxldF9hZGRFdGhlcmV1bUNoYWluJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5JZDogJzB4NjM1N0QyRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluTmFtZTogJ0hhcm1vbnkgVGVzdG5ldCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlQ3VycmVuY3k6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0hhcm1vbnknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6ICdPTkUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsczogMTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBycGNVcmxzOiBbJ2h0dHBzOi8vYXBpLnMwLmIuaG1ueS5pbyddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGFkZEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIFwiYWRkXCIgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRFcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaGFuZGxlIG90aGVyIFwic3dpdGNoXCIgZXJyb3JzXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD48PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Mb2dpbjwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTG9naW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nOiBcIjMlIDM3JVwiLCBcInBhZGRpbmdUb3BcIjogMCwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNTAwcHhcIiwgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLCBwYWRkaW5nOiBcIjE5cHhcIiwgYm9yZGVyUmFkaXVzOiBcIjRweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBib3JkZXI6IFwid2hpdGUgc29saWRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMHB4IDBweCA1M3B4IDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkxvZ2luPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjBweCAwcHggMTJweCAwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5QbGVhc2Ugc2VsZWN0IG9uZSBvZiB0aGUgb3B0aW9uIHRvIExvZ2luPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17d2ViM0Nvbm5lY3R9IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCBtYXJnaW46IFwiMjBweCAwXCIgfX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiBcIjQ1cHhcIiwgd2lkdGg6IFwiNDZweFwiIH19IHNyYz1cImh0dHBzOi8vcG9saXMubWV0aXMuaW8vc3RhdGljL2ltZy9tZXRhbWFzay1mb3guYzA2ZjNhM2Uuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIG1hcmdpbkxlZnQ6IFwiMTFweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIsIGZvbnRGYW1pbHk6IFwic2Fucy1zZXJpZlwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZXRhbWFza1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxNXB4XCIsIGZvbnRGYW1pbHk6IFwic2Fucy1zZXJpZlwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0IFdpdGggTWV0YU1hc2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIG1hcmdpbjogXCIyMHB4IDBcIiB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6IFwiNDVweFwiLCB3aWR0aDogXCI0NnB4XCIgfX0gc3JjPVwiaHR0cHM6Ly9wb2xpcy5tZXRpcy5pby9zdGF0aWMvaW1nL3BvbGlzLXRyYW5zLjljMGJlODVmLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBtYXJnaW5MZWZ0OiBcIjExcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRlclwiLCBmb250RmFtaWx5OiBcInNhbnMtc2VyaWZcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWV0aXMgUG9saXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMTVweFwiLCBmb250RmFtaWx5OiBcInNhbnMtc2VyaWZcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdCBXaXRoIFBvbGlzIGFjY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJhNjFmM2U1NDQwZDI2N2E5NDJiM1wiOyB9Il0sIm5hbWVzIjpbIkhlYWQiLCJSb3ciLCJDb2wiLCJSZWFjdCIsInVzZVJvdXRlciIsIkNyZWF0ZUV2ZW50cyIsInJvdXRlciIsInJlZ2V4Iiwic3RyIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJtIiwicmVkaXJlY3RpbmciLCJleGVjIiwiaW5kZXgiLCJsYXN0SW5kZXgiLCJ3ZWIzQ29ubmVjdCIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsInJlc3VsdCIsInBhcmFtcyIsImNoYWluSWQiLCJnZXRhY2MiLCJwdXNoIiwiY29kZSIsImNoYWluTmFtZSIsIm5hdGl2ZUN1cnJlbmN5IiwibmFtZSIsInN5bWJvbCIsImRlY2ltYWxzIiwicnBjVXJscyIsImNvbnNvbGUiLCJsb2ciLCJwYWRkaW5nIiwid2lkdGgiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsImN1cnNvciIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5MZWZ0IiwiZm9udFdlaWdodCIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=