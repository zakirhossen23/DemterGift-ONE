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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_url_search_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/url-search-params */ "./node_modules/@babel/runtime-corejs3/core-js-stable/url-search-params.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_url_search_params__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_url_search_params__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");








function CreateEvents() {
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  function web3Connect() {
    return _web3Connect.apply(this, arguments);
  }

  function _web3Connect() {
    _web3Connect = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var result, _urlParams$get, getacc, urlParams, redirecturl;

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
              urlParams = new (_babel_runtime_corejs3_core_js_stable_url_search_params__WEBPACK_IMPORTED_MODULE_2___default())(window.location.search);
              redirecturl = (_urlParams$get = urlParams.get("url")) === null || _urlParams$get === void 0 ? void 0 : _urlParams$get.toString();
              router.push(redirecturl);
              _context.next = 25;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](4);

              if (!(_context.t0.code === 4902)) {
                _context.next = 25;
                break;
              }

              _context.prev = 17;
              _context.next = 20;
              return window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: '6357D2E0',
                  chainName: 'Harmony Testnet',
                  nativeCurrency: {
                    name: 'Harmony',
                    symbol: 'ONE',
                    decimals: 18
                  },
                  rpcUrls: ['https://api.s0.b.hmny.io']
                }]
              });

            case 20:
              _context.next = 25;
              break;

            case 22:
              _context.prev = 22;
              _context.t1 = _context["catch"](17);
              // handle "add" error
              console.log(_context.t1);

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 14], [17, 22]]);
    }));
    return _web3Connect.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(next_head__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("title", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("meta", {
    name: "description",
    content: "Login"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      padding: "3% 37%",
      "paddingTop": 0,
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      width: "500px",
      background: "transparent",
      padding: "19px",
      borderRadius: "4px",
      height: "100%",
      border: "white solid"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      margin: "0px 0px 53px 0px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h1", null, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      margin: "0px 0px 12px 0px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h4", null, "Please select one of the option to Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    onClick: web3Connect,
    style: {
      display: "flex",
      padding: "10px",
      borderRadius: "5px",
      cursor: "pointer",
      margin: "20px 0"
    },
    className: "btn-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("img", {
    style: {
      height: "45px",
      width: "46px"
    },
    src: "https://polis.metis.io/static/img/metamask-fox.c06f3a3e.svg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "11px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    style: {
      fontWeight: "bolder",
      fontFamily: "sans-serif"
    }
  }, "Metamask"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    style: {
      fontSize: "15px",
      fontFamily: "sans-serif"
    }
  }, "Connect With MetaMask"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      display: "flex",
      padding: "10px",
      borderRadius: "5px",
      cursor: "pointer",
      margin: "20px 0"
    },
    className: "btn-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("img", {
    style: {
      height: "45px",
      width: "46px"
    },
    src: "https://polis.metis.io/static/img/polis-trans.9c0be85f.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "11px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    style: {
      fontWeight: "bolder",
      fontFamily: "sans-serif"
    }
  }, "Metis Polis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
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
/******/ 	__webpack_require__.h = function() { return "3c005378575ba2e43167"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjI1YWRlN2JlODAzN2VkMmU5ODJmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBR2UsU0FBU0ssWUFBVCxHQUF3QjtBQUNuQyxNQUFNQyxNQUFNLEdBQUdGLHNEQUFTLEVBQXhCOztBQURtQyxXQUdwQkcsV0FIb0I7QUFBQTtBQUFBOztBQUFBO0FBQUEsNE1BR25DO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUN1QkMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QjtBQUFFQyxnQkFBQUEsTUFBTSxFQUFFO0FBQVYsZUFBeEIsQ0FEdkI7O0FBQUE7QUFDUUMsY0FBQUEsTUFEUjtBQUVJQSxjQUFBQSxNQUFNO0FBRlY7QUFBQTtBQUFBLHFCQUk2QkosTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QjtBQUN6Q0MsZ0JBQUFBLE1BQU0sRUFBRSw0QkFEaUM7QUFFekNFLGdCQUFBQSxNQUFNLEVBQUUsQ0FBQztBQUFFQyxrQkFBQUEsT0FBTyxFQUFFO0FBQVgsaUJBQUQ7QUFGaUMsZUFBeEIsQ0FKN0I7O0FBQUE7QUFJY0MsY0FBQUEsTUFKZDtBQVFRQSxjQUFBQSxNQUFNO0FBQ0FDLGNBQUFBLFNBVGQsR0FTMEIsSUFBSSxpR0FBZ0JSLE1BQU0sQ0FBQ1MsUUFBUCxDQUFnQkMsTUFBcEMsQ0FUMUI7QUFVWUMsY0FBQUEsV0FWWixxQkFVK0JILFNBQVMsQ0FBQ0ksR0FBVixDQUFjLEtBQWQsQ0FWL0IsbURBVStCLGVBQXNCQyxRQUF0QixFQVYvQjtBQVdRZixjQUFBQSxNQUFNLENBQUNnQixJQUFQLENBQVlILFdBQVo7QUFYUjtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQSxvQkFjWSxZQUFZSSxJQUFaLEtBQXFCLElBZGpDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxxQkFnQnNCZixNQUFN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eURLLE1BQUFBLE1BQU0sRUFBRSxTQUFqRTtBQUE0RUYsTUFBQUEsTUFBTSxFQUFFO0FBQXBGLEtBQVo7QUFBNEcsYUFBUyxFQUFDO0FBQXRILGtCQUNJO0FBQUssU0FBSyxFQUFFO0FBQUVGLE1BQUFBLE1BQU0sRUFBRSxNQUFWO0FBQWtCSCxNQUFBQSxLQUFLLEVBQUU7QUFBekIsS0FBWjtBQUErQyxPQUFHLEVBQUM7QUFBbkQsSUFESixlQUVJO0FBQUssU0FBSyxFQUFFO0FBQUVNLE1BQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CRSxNQUFBQSxhQUFhLEVBQUUsUUFBbEM7QUFBNENDLE1BQUFBLFVBQVUsRUFBRTtBQUF4RDtBQUFaLGtCQUNJO0FBQU0sU0FBSyxFQUFFO0FBQUVDLE1BQUFBLFVBQVUsRUFBRSxRQUFkO0FBQXdCQyxNQUFBQSxVQUFVLEVBQUU7QUFBcEM7QUFBYixtQkFESixlQUlJO0FBQU0sU0FBSyxFQUFFO0FBQUVDLE1BQUFBLFFBQVEsRUFBRSxNQUFaO0FBQW9CRCxNQUFBQSxVQUFVLEVBQUU7QUFBaEM7QUFBYixrQ0FKSixDQUZKLENBbEJKLENBREosQ0FESixDQVBGLENBQUYsQ0FESjtBQWlESDs7Ozs7Ozs7VUM3R0QscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9tb2RhbHMvbG9naW4vbWFpbi50c3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcclxuaW1wb3J0ICogYXMgZG90ZW52IGZyb20gJ2RvdGVudic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmRlY2xhcmUgbGV0IHdpbmRvdzogYW55O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVFdmVudHMoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiB3ZWIzQ29ubmVjdCgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcclxuICAgICAgICByZXN1bHQ7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZ2V0YWNjID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnd2FsbGV0X3N3aXRjaEV0aGVyZXVtQ2hhaW4nLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBbeyBjaGFpbklkOiAnMHg2MzU3RDJFMCcgfV0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBnZXRhY2M7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaClcclxuICAgICAgICAgICAgbGV0IHJlZGlyZWN0dXJsOiBhbnkgPSB1cmxQYXJhbXMuZ2V0KFwidXJsXCIpPy50b1N0cmluZygpO1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChyZWRpcmVjdHVybCk7XHJcbiAgICAgICAgfSBjYXRjaCAoc3dpdGNoRXJyb3I6IGFueSkge1xyXG4gICAgICAgICAgICAvLyBUaGlzIGVycm9yIGNvZGUgaW5kaWNhdGVzIHRoYXQgdGhlIGNoYWluIGhhcyBub3QgYmVlbiBhZGRlZCB0byBNZXRhTWFzay5cclxuICAgICAgICAgICAgaWYgKHN3aXRjaEVycm9yLmNvZGUgPT09IDQ5MDIpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfYWRkRXRoZXJldW1DaGFpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQ6ICc2MzU3RDJFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5OYW1lOiAnSGFybW9ueSBUZXN0bmV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVDdXJyZW5jeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnSGFybW9ueScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogJ09ORScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxzOiAxOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJwY1VybHM6IFsnaHR0cHM6Ly9hcGkuczAuYi5obW55LmlvJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoYWRkRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgXCJhZGRcIiBlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZEVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBoYW5kbGUgb3RoZXIgXCJzd2l0Y2hcIiBlcnJvcnNcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Pjw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkxvZ2luPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJMb2dpblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmc6IFwiMyUgMzclXCIsIFwicGFkZGluZ1RvcFwiOiAwLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI1MDBweFwiLCBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsIHBhZGRpbmc6IFwiMTlweFwiLCBib3JkZXJSYWRpdXM6IFwiNHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIGJvcmRlcjogXCJ3aGl0ZSBzb2xpZFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIwcHggMHB4IDUzcHggMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+TG9naW48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMHB4IDBweCAxMnB4IDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlBsZWFzZSBzZWxlY3Qgb25lIG9mIHRoZSBvcHRpb24gdG8gTG9naW48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXt3ZWIzQ29ubmVjdH0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIG1hcmdpbjogXCIyMHB4IDBcIiB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6IFwiNDVweFwiLCB3aWR0aDogXCI0NnB4XCIgfX0gc3JjPVwiaHR0cHM6Ly9wb2xpcy5tZXRpcy5pby9zdGF0aWMvaW1nL21ldGFtYXNrLWZveC5jMDZmM2EzZS5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgbWFyZ2luTGVmdDogXCIxMXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkZXJcIiwgZm9udEZhbWlseTogXCJzYW5zLXNlcmlmXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1ldGFtYXNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE1cHhcIiwgZm9udEZhbWlseTogXCJzYW5zLXNlcmlmXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3QgV2l0aCBNZXRhTWFza1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgbWFyZ2luOiBcIjIwcHggMFwiIH19IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogXCI0NXB4XCIsIHdpZHRoOiBcIjQ2cHhcIiB9fSBzcmM9XCJodHRwczovL3BvbGlzLm1ldGlzLmlvL3N0YXRpYy9pbWcvcG9saXMtdHJhbnMuOWMwYmU4NWYucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIG1hcmdpbkxlZnQ6IFwiMTFweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIsIGZvbnRGYW1pbHk6IFwic2Fucy1zZXJpZlwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZXRpcyBQb2xpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxNXB4XCIsIGZvbnRGYW1pbHk6IFwic2Fucy1zZXJpZlwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0IFdpdGggUG9saXMgYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjNjMDA1Mzc4NTc1YmEyZTQzMTY3XCI7IH0iXSwibmFtZXMiOlsiSGVhZCIsIlJvdyIsIkNvbCIsIlJlYWN0IiwidXNlUm91dGVyIiwiQ3JlYXRlRXZlbnRzIiwicm91dGVyIiwid2ViM0Nvbm5lY3QiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJyZXN1bHQiLCJwYXJhbXMiLCJjaGFpbklkIiwiZ2V0YWNjIiwidXJsUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWRpcmVjdHVybCIsImdldCIsInRvU3RyaW5nIiwicHVzaCIsImNvZGUiLCJjaGFpbk5hbWUiLCJuYXRpdmVDdXJyZW5jeSIsIm5hbWUiLCJzeW1ib2wiLCJkZWNpbWFscyIsInJwY1VybHMiLCJjb25zb2xlIiwibG9nIiwicGFkZGluZyIsIndpZHRoIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJjdXJzb3IiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luTGVmdCIsImZvbnRXZWlnaHQiLCJmb250RmFtaWx5IiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9