"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(globalThis["webpackChunkreact_template_components"] = globalThis["webpackChunkreact_template_components"] || []).push([["src_Components_Authentication_SignUpWithFirebase_index_tsx"],{

/***/ "./src/Components/Authentication/SignUpWithFirebase/index.tsx":
/*!********************************************************************!*\
  !*** ./src/Components/Authentication/SignUpWithFirebase/index.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SignUp)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Alert.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var _Redux_Users_user_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Redux/Users/user.action */ \"./src/Redux/Users/user.action.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"/Users/clinto.abraham/Projects/js/branch-code-split/react-template-components/src/Components/Authentication/SignUpWithFirebase/index.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\nconst defaultFormFields = {\n  displayName: \"\",\n  email: \"\",\n  password: \"\",\n  confirmPassword: \"\"\n};\nfunction SignUp() {\n  _s();\n\n  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();\n  const [formFields, setFormFields] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultFormFields);\n  const {\n    displayName,\n    email,\n    password,\n    confirmPassword\n  } = formFields;\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n\n  const resetFormFields = () => {\n    setFormFields(defaultFormFields);\n  };\n\n  const handleSubmit = async event => {\n    event.preventDefault();\n\n    if (password !== confirmPassword) {\n      setError(\"passwords do not match\");\n      return;\n    }\n\n    try {\n      dispatch((0,_Redux_Users_user_action__WEBPACK_IMPORTED_MODULE_3__.signUpStart)(email, password, displayName));\n      resetFormFields();\n    } catch (error) {\n      if (error.code === firebase_auth__WEBPACK_IMPORTED_MODULE_1__.AuthErrorCodes.EMAIL_EXISTS) {\n        alert(\"Cannot create user, email already in use\");\n      } else {\n        console.log(\"user creation encountered an error\", error);\n      }\n    }\n  };\n\n  const handleChange = event => {\n    const {\n      name,\n      value\n    } = event.target;\n    setFormFields({ ...formFields,\n      [name]: value\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Body, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h2\", {\n          className: \"text-center mb-4\",\n          children: \"Sign Up\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          variant: \"danger\",\n          children: error\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          onSubmit: handleSubmit,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Group, {\n            id: \"displayName\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Label, {\n              children: \"Display Name\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Control, {\n              type: \"displayName\",\n              onChange: handleChange,\n              name: \"displayName\",\n              value: displayName,\n              required: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Group, {\n            id: \"email\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Label, {\n              children: \"Email\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Control, {\n              type: \"email\",\n              onChange: handleChange,\n              name: \"email\",\n              value: email,\n              required: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Group, {\n            id: \"password\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Label, {\n              children: \"Password\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Control, {\n              type: \"password\",\n              onChange: handleChange,\n              name: \"password\",\n              value: password,\n              required: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Group, {\n            id: \"password-confirm\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Label, {\n              children: \"Password Confirmation\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 91,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Control, {\n              type: \"password\",\n              onChange: handleChange,\n              name: \"confirmPassword\",\n              value: confirmPassword,\n              required: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            disabled: loading,\n            className: \"w-100\",\n            type: \"submit\",\n            children: \"Sign Up\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"w-100 text-center mt-2\",\n      children: [\"Already have an account? \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {\n        to: \"/authenticate/login\",\n        children: \"Log In\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 34\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(SignUp, \"vH7CVxT8GJQi1nMhka73FTFYMK0=\", false, function () {\n  return [react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate, react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch];\n});\n\n_c = SignUp;\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"SignUp\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (false) {}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=Users/clinto.abraham/Projects/js/branch-code-split/react-template-components/src/Components/Authentication/SignUpWithFirebase/index.tsx");

/***/ })

}]);