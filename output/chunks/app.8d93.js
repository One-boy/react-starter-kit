(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(68))(8);

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(68))(0);

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/antd/lib/message/style/index.js
var style = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/antd/lib/message/index.js
var message = __webpack_require__(71);
var message_default = /*#__PURE__*/__webpack_require__.n(message);

// EXTERNAL MODULE: ./app/utils/ajaxUtil.js + 2 modules
var ajaxUtil = __webpack_require__(156);

// CONCATENATED MODULE: ./app/Mock/base.js


 // mock

/**
 * @param resolve 回调解决
 * @param timeout 接口超时时间
 */

function mock(resp) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return new Promise(function (resolve, reject) {
    try {
      var newResp = Object(ajaxUtil["a" /* checkResponse */])(resp);
      setTimeout(function () {
        resolve(newResp);
      }, timeout);
    } catch (error) {
      message_default.a.warning(resp.msg || resp.message || '未知错误');

      reject(new Error(resp.msg));
    }
  });
}

/* harmony default export */ var base = (mock);
// EXTERNAL MODULE: ./app/config/base.js
var config_base = __webpack_require__(31);

// CONCATENATED MODULE: ./app/Mock/checkEnable.js
/*
 * @Author: hy 
 * @Date: 2019-05-07 15:49:08 
 * @Last Modified by: hy
 * @Last Modified time: 2019-05-07 16:01:20
 */
// 检查mock是否启用
// 如果启用，则不做操作，如果未启用，则执行http逻辑


function checkEnable(target, name, descriptor) {
  if (!config_base["a" /* EnableMock */]) {
    descriptor.value = function (t, n, desc) {
      return desc;
    };
  }

  return descriptor;
}

/* harmony default export */ var Mock_checkEnable = (checkEnable);
// CONCATENATED MODULE: ./app/Mock/User/index.js
var _class;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

/*
 * @Author: hy 
 * @Date: 2019-05-06 18:28:24 
 * @Last Modified by: hy
 * @Last Modified time: 2019-05-07 15:48:52
 */
// mock数据


var User_User = (_class =
/*#__PURE__*/
function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, null, [{
    key: "login",
    value: function login(target, name, descriptor) {
      descriptor.value =
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(reqData) {
          var data;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  data = {
                    status: 1,
                    msg: '登录成功',
                    data: reqData
                  };
                  _context.next = 3;
                  return base(data);

                case 3:
                  return _context.abrupt("return", _context.sent);

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();

      return descriptor;
    }
  }, {
    key: "logout",
    value: function logout(target, name, descriptor) {
      descriptor.value =
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(reqData) {
          var data;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  data = {
                    status: 1,
                    msg: '登出成功',
                    data: reqData
                  };
                  _context2.next = 3;
                  return base(data);

                case 3:
                  return _context2.abrupt("return", _context2.sent);

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }();

      return descriptor;
    }
  }, {
    key: "register",
    value: function register(target, name, descriptor) {
      descriptor.value =
      /*#__PURE__*/
      function () {
        var _ref3 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3(reqData) {
          var data;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  data = {
                    status: 1,
                    msg: '注册成功',
                    data: _objectSpread({
                      t: '注册消息'
                    }, reqData)
                  };
                  _context3.next = 3;
                  return base(data);

                case 3:
                  return _context3.abrupt("return", _context3.sent);

                case 4:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }();

      return descriptor;
    }
  }]);

  return User;
}(), (_applyDecoratedDescriptor(_class, "login", [Mock_checkEnable], Object.getOwnPropertyDescriptor(_class, "login"), _class), _applyDecoratedDescriptor(_class, "logout", [Mock_checkEnable], Object.getOwnPropertyDescriptor(_class, "logout"), _class), _applyDecoratedDescriptor(_class, "register", [Mock_checkEnable], Object.getOwnPropertyDescriptor(_class, "register"), _class)), _class);
/* harmony default export */ var Mock_User = (User_User);
// CONCATENATED MODULE: ./app/Mock/List/index.js
var List_class;

function List_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function List_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { List_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { List_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function List_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function List_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function List_createClass(Constructor, protoProps, staticProps) { if (protoProps) List_defineProperties(Constructor.prototype, protoProps); if (staticProps) List_defineProperties(Constructor, staticProps); return Constructor; }

function List_applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

/*
 * @Author: hy 
 * @Date: 2019-05-06 18:28:24 
 * @Last Modified by: hy
 * @Last Modified time: 2019-05-07 15:48:52
 */
// mock数据


var List_List = (List_class =
/*#__PURE__*/
function () {
  function List() {
    List_classCallCheck(this, List);
  }

  List_createClass(List, null, [{
    key: "list2",
    value: function list2(target, name, descriptor) {
      descriptor.value =
      /*#__PURE__*/
      function () {
        var _ref = List_asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(reqData) {
          var data;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  data = {
                    status: 1,
                    msg: '登录成功',
                    data: {
                      list: [{
                        name: '老王1',
                        age: 33,
                        idCard: '123456789987654321',
                        id: 1
                      }, {
                        name: '老王2',
                        age: 55,
                        idCard: '223456789987654321',
                        id: 2
                      }, {
                        name: '老王3',
                        age: 66,
                        idCard: '323456789987654321',
                        id: 3
                      }],
                      pageSize: reqData.pageSize,
                      pageNo: reqData.pageNo,
                      total: 3
                    }
                  };
                  _context.next = 3;
                  return base(data, 2000);

                case 3:
                  return _context.abrupt("return", _context.sent);

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();

      return descriptor;
    }
  }]);

  return List;
}(), (List_applyDecoratedDescriptor(List_class, "list2", [Mock_checkEnable], Object.getOwnPropertyDescriptor(List_class, "list2"), List_class)), List_class);
/* harmony default export */ var Mock_List = (List_List);
// CONCATENATED MODULE: ./app/Mock/index.js


/* harmony default export */ var Mock = __webpack_exports__["a"] = ({
  User: Mock_User,
  List: Mock_List
});

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrap":"app-style-login-index__wrap--3sK_Z","wrap2":"app-style-login-index__wrap2--DTcm3","content":"app-style-login-index__content--U8rj7","login-form":"app-style-login-index__login-form--1yNIs","login-form-forgot":"app-style-login-index__login-form-forgot--1jc06","login-form-button":"app-style-login-index__login-form-button--1EKat"};

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(267))(38);

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(68))(34);

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/antd/lib/message/style/index.js
var style = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/antd/lib/message/index.js
var message = __webpack_require__(71);
var message_default = /*#__PURE__*/__webpack_require__.n(message);

// CONCATENATED MODULE: ./app/config/code.js
/**
 * code定义 
 */
// 服务端返回status定义
var returnStatus = {
  // 正常返回
  NORMAL: 1,
  // 未登录或登录过期
  NOT_LOGIN: -1
};

// CONCATENATED MODULE: ./app/utils/index.js
/**
 * 公共工具
 */
// 强制去登录页面，用于不能使用react-route-dom时的跳转
// 如服务都返回未登录或过期时，拦截器里的跳转
var toLoginPage = function toLoginPage() {
  sessionStorage.clear();
  location.hash = '#/login';
};


// CONCATENATED MODULE: ./app/utils/ajaxUtil.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkResponse; });



/*
 * @Author: huyu
 * @Date: 2019-05-31 10:21:37
 * @Last Modified by: huyu
 * @Last Modified time: 2019-05-31 10:28:15
 */
// ajax一些工具



function checkResponse(resp) {
  switch (resp.status) {
    case returnStatus.NORMAL:
      return resp;

    case returnStatus.NOT_LOGIN:
      message_default.a.warn(resp.msg || '登录过期，即将跳转登录页...', 2, function () {
        //  退出登录
        toLoginPage();
      });

      break;

    default:
      throw new Error(resp.msg);
  }
}



/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/antd/lib/message/style/index.js
var style = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/antd/lib/message/index.js
var message = __webpack_require__(71);
var message_default = /*#__PURE__*/__webpack_require__.n(message);

// EXTERNAL MODULE: delegated ./node_modules/axios/index.js from dll-reference other_aa08c2be211a6528e38f
var axiosfrom_dll_reference_other_aa08c2be211a6528e38f = __webpack_require__(121);
var axiosfrom_dll_reference_other_aa08c2be211a6528e38f_default = /*#__PURE__*/__webpack_require__.n(axiosfrom_dll_reference_other_aa08c2be211a6528e38f);

// EXTERNAL MODULE: ./app/config/base.js
var base = __webpack_require__(31);

// EXTERNAL MODULE: ./app/utils/ajaxCancel.js
var ajaxCancel = __webpack_require__(90);

// EXTERNAL MODULE: ./app/utils/ajaxUtil.js + 2 modules
var ajaxUtil = __webpack_require__(156);

// CONCATENATED MODULE: ./app/utils/ajax.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




 // axios配置

var _axiosBaseConfig = {
  // baseURL: prefix,
  timeout: base["e" /* timeout */],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' // 'Content-Type': 'text/plain',
    // 'Content-Type': 'application/json'

  },
  method: 'post',
  // 跨域请求，是否带上认证信息
  withCredentials: false,
  // default
  // http返回的数据类型
  // 默认是json，可选'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json',
  // default
  // http请求返回状态码检查
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  // default
  // 请求数据预处理
  transformRequest: [function (data) {
    // 针对需要json字符串参数得请求
    // if (typeof data === 'object' && !(data instanceof FormData)) {
    //   return JSON.stringify(data)
    // }
    // 针对x-www-form-urlencoded请求
    if (_typeof(data) === 'object' && !(data instanceof FormData)) {
      var reqArray = [];
      Object.keys(data).forEach(function (key) {
        reqArray.push("".concat(key, "=").concat(encodeURIComponent(data[key])));
      });
      return reqArray.join('&');
    }

    return data;
  }],
  // 返回数据预处理
  transformResponse: [function (respData, headers) {
    // 针对ie处理一下字符串情况
    var ct = headers['content-type'];

    if (ct && ct.indexOf('application/json') !== -1) {
      if (typeof respData === 'string') {
        return JSON.parse(respData);
      }
    }

    return respData;
  }]
}; // axios 实例

var axiosInstance = axiosfrom_dll_reference_other_aa08c2be211a6528e38f_default.a.create(_axiosBaseConfig); // 拦截器

axiosInstance.interceptors.request.use(function (req) {
  return req;
}, function (error) {
  return Promise.reject(error);
});
axiosInstance.interceptors.response.use(function (resp) {
  return Object(ajaxUtil["a" /* checkResponse */])(resp.data);
}, function (error) {
  // 当返回错误时
  if (axiosfrom_dll_reference_other_aa08c2be211a6528e38f_default.a.isCancel(error)) {
    throw {
      message: '请求被取消'
    };
  }

  if ('code' in error && error.code === 'ECONNABORTED') {
    throw {
      message: '请求超时'
    };
  }

  if ('message' in error && error.message === 'Network Error') {
    throw {
      message: '网络错误'
    };
  }

  if ('response' in error) {
    throw {
      message: "\u8BF7\u6C42\u5931\u8D25\uFF0CHTTP CODE\uFF1A".concat(error.response.status)
    };
  }

  return Promise.reject(error);
});

var _axiosPost =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(url, config, reqData) {
    var CancelToken, source, resp;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            CancelToken = axiosfrom_dll_reference_other_aa08c2be211a6528e38f_default.a.CancelToken;
            source = CancelToken.source();
            Object(ajaxCancel["a" /* addCancelFunc */])(reqData, source.cancel);
            _context.next = 5;
            return axiosInstance.post(url, reqData, _objectSpread({
              cancelToken: source.token
            }, config));

          case 5:
            resp = _context.sent;
            Object(ajaxCancel["b" /* cancelRequest */])(reqData);
            return _context.abrupt("return", resp.data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function _axiosPost(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _axiosGet =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(url, config, reqData) {
    var CancelToken, source, reqArray, newUrl, resp;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            CancelToken = axiosfrom_dll_reference_other_aa08c2be211a6528e38f_default.a.CancelToken;
            source = CancelToken.source();
            Object(ajaxCancel["a" /* addCancelFunc */])(reqData, source.cancel);
            reqArray = [];
            Object.keys(reqData).forEach(function (key) {
              reqArray.push("".concat(key, "=").concat(encodeURIComponent(reqData[key])));
            });
            newUrl = "".concat(url, "?").concat(reqArray.join('&'));
            _context2.next = 8;
            return axiosInstance.get(newUrl, _objectSpread({
              cancelToken: source.token
            }, config));

          case 8:
            resp = _context2.sent;
            Object(ajaxCancel["b" /* cancelRequest */])(reqData);
            return _context2.abrupt("return", resp.data);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function _axiosGet(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}(); // create url


var ajax_createUrl = function _createUrl(target, url) {
  var newUrl;

  if (target) {
    newUrl = "".concat(target).concat(url).concat(base["d" /* suffix */]);
  } else {
    newUrl = "".concat(base["c" /* prefix */]).concat(url).concat(base["d" /* suffix */]);
  }

  return newUrl;
}; // post


var createHTTPPost = function createHTTPPost(url, reqData, target) {
  return _axiosPost(ajax_createUrl(target, url), {}, reqData);
}; // get


var createHTTPGet = function createHTTPGet(url, reqData, target) {
  return _axiosGet(ajax_createUrl(target, url), {}, reqData);
};


// CONCATENATED MODULE: ./app/api/base.js



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * @Author: hy 
 * @Date: 2019-05-07 10:02:41 
 * @Last Modified by: huyu
 * @Last Modified time: 2019-11-19 11:06:53
 */
// api父类


var base_ApiBase =
/*#__PURE__*/
function () {
  function ApiBase() {
    _classCallCheck(this, ApiBase);
  }

  _createClass(ApiBase, null, [{
    key: "ajaxPost",
    // ajaxPost
    value: function ajaxPost(url, reqData, target) {
      return ApiBase._ajax(url, reqData, target, 'post');
    } // ajaxGet

  }, {
    key: "ajaxGet",
    value: function ajaxGet(url, reqData, target) {
      return ApiBase._ajax(url, reqData, target, 'get');
    } // ajax

  }, {
    key: "_ajax",
    value: function _ajax(url, reqData, target, type) {
      var func = type === 'post' ? createHTTPPost : createHTTPGet;
      return new Promise(function (resolve, reject) {
        func(url, reqData, target).then(function (resp) {
          return resolve(resp);
        }).catch(function (err) {
          message_default.a.warning(err.msg || err.message || '未知错误');

          reject(err);
        });
      });
    }
  }]);

  return ApiBase;
}();

/* harmony default export */ var api_base = __webpack_exports__["a"] = (base_ApiBase);

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(68))(31);

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(267))(42);

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

module.exports = other_aa08c2be211a6528e38f;

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(68))(13);

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(157);
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }



var List = (_dec = _Mock__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].List.list2, (_class =
/*#__PURE__*/
function (_Base) {
  _inherits(List, _Base);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, _getPrototypeOf(List).apply(this, arguments));
  }

  _createClass(List, null, [{
    key: "list2",
    // 获取列表2
    value: function () {
      var _list = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(reqData) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.ajaxPost('/list/list2', reqData);

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function list2(_x) {
        return _list.apply(this, arguments);
      }

      return list2;
    }() // 上传文件

  }, {
    key: "upload",
    value: function () {
      var _upload = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(reqData) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.ajaxPost('/list/upload', reqData);

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function upload(_x2) {
        return _upload.apply(this, arguments);
      }

      return upload;
    }()
  }]);

  return List;
}(_base__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]), (_applyDecoratedDescriptor(_class, "list2", [_dec], Object.getOwnPropertyDescriptor(_class, "list2"), _class)), _class));
/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return suffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return timeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return menusData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnableMock; });
/**
 * 基础 配置
 */

/* eslint  no-undef:0 */
// 本地开发打开的路径以及端口
var httpUrl = 'http://127.0.0.1:8080/data'; // 启用Mock

var EnableMock = true; // 生产环境用不同的接口地址

if (true) {
  httpUrl = 'http://127.0.0.1:8080/data';
  EnableMock = false;
} // 标题


var title = '中后台管理系统'; // 请求url前缀

var prefix = httpUrl; // 请求url后缀

var suffix = '.json'; // 超时时间

var timeout = 100000; // 左侧导航配置

var menusData = [{
  navName: '列表页',
  navKey: '/list',
  navIcon: 'desk',
  children: [{
    navName: '基础列表1',
    navKey: '/list/example1',
    navIcon: 'desk'
  }, {
    navName: '基础列表2',
    navKey: '/list/example2',
    navIcon: 'module'
  }]
}, {
  navName: '独立菜单',
  navKey: '/single',
  navIcon: 'desk'
}, {
  navName: 'WebWorkers',
  navKey: '/worker',
  navIcon: 'desk'
}];


/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "workers/main.worker.3907.js");
};

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(334);
module.exports = __webpack_require__(793);


/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"circleShow":"app-style-base__circleShow--3zWzL"};

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(68))(21);

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ant_design_icons_lib_outline_LockOutline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(269);
/* harmony import */ var _ant_design_icons_lib_outline_LockOutline__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_outline_LockOutline__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "LockOutline", function() { return _ant_design_icons_lib_outline_LockOutline__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _ant_design_icons_lib_outline_UserOutline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(270);
/* harmony import */ var _ant_design_icons_lib_outline_UserOutline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_outline_UserOutline__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "UserOutline", function() { return _ant_design_icons_lib_outline_UserOutline__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony import */ var _ant_design_icons_lib_outline_QuestionCircleOutline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(271);
/* harmony import */ var _ant_design_icons_lib_outline_QuestionCircleOutline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_outline_QuestionCircleOutline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "QuestionCircleOutline", function() { return _ant_design_icons_lib_outline_QuestionCircleOutline__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony import */ var _ant_design_icons_lib_outline_LoadingOutline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(272);
/* harmony import */ var _ant_design_icons_lib_outline_LoadingOutline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_outline_LoadingOutline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "LoadingOutline", function() { return _ant_design_icons_lib_outline_LoadingOutline__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _ant_design_icons_lib_outline_DownOutline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(273);
/* harmony import */ var _ant_design_icons_lib_outline_DownOutline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_outline_DownOutline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "DownOutline", function() { return _ant_design_icons_lib_outline_DownOutline__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var _ant_design_icons_lib_fill_CheckCircleFill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(274);
/* harmony import */ var _ant_design_icons_lib_fill_CheckCircleFill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_fill_CheckCircleFill__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "CheckCircleFill", function() { return _ant_design_icons_lib_fill_CheckCircleFill__WEBPACK_IMPORTED_MODULE_5___default.a; });
/* harmony import */ var _ant_design_icons_lib_fill_CloseCircleFill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(275);
/* harmony import */ var _ant_design_icons_lib_fill_CloseCircleFill__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_fill_CloseCircleFill__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "CloseCircleFill", function() { return _ant_design_icons_lib_fill_CloseCircleFill__WEBPACK_IMPORTED_MODULE_6___default.a; });
/* harmony import */ var _ant_design_icons_lib_fill_InfoCircleFill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(276);
/* harmony import */ var _ant_design_icons_lib_fill_InfoCircleFill__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_fill_InfoCircleFill__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "InfoCircleFill", function() { return _ant_design_icons_lib_fill_InfoCircleFill__WEBPACK_IMPORTED_MODULE_7___default.a; });
/* harmony import */ var _ant_design_icons_lib_fill_ExclamationCircleFill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(277);
/* harmony import */ var _ant_design_icons_lib_fill_ExclamationCircleFill__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_fill_ExclamationCircleFill__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ExclamationCircleFill", function() { return _ant_design_icons_lib_fill_ExclamationCircleFill__WEBPACK_IMPORTED_MODULE_8___default.a; });
// antd icon手动引入
// 需要的icon在这里填写
// 避免全量引入icons，导致包过大（500KB）
// 锁，lock ，登录密码输入框icon
 // 用户，user   登录输入框icon

 // 提示建议性问号,question circle,Modal.confirm

 // 加载,loading，主要用于message.loading

 // down，主要用于分页器下拉

 // 检查正确，成功,check circle，主要用于message.success

 // 感叹惊叹，Close-circle 主要用于message.error

 // 提示，info-circle 主要用于message.info

 // 提示，Exclamation-circle 主要用于message.warning



/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

module.exports = react_aa08c2be211a6528e38f;

/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(68))(22);

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/antd/lib/config-provider/style/index.js
var style = __webpack_require__(510);

// EXTERNAL MODULE: ./node_modules/antd/lib/config-provider/index.js
var config_provider = __webpack_require__(11);
var config_provider_default = /*#__PURE__*/__webpack_require__.n(config_provider);

// EXTERNAL MODULE: delegated ./node_modules/react/index.js from dll-reference react_aa08c2be211a6528e38f
var reactfrom_dll_reference_react_aa08c2be211a6528e38f = __webpack_require__(1);
var reactfrom_dll_reference_react_aa08c2be211a6528e38f_default = /*#__PURE__*/__webpack_require__.n(reactfrom_dll_reference_react_aa08c2be211a6528e38f);

// EXTERNAL MODULE: delegated ./node_modules/react-dom/index.js from dll-reference react_aa08c2be211a6528e38f
var react_domfrom_dll_reference_react_aa08c2be211a6528e38f = __webpack_require__(8);
var react_domfrom_dll_reference_react_aa08c2be211a6528e38f_default = /*#__PURE__*/__webpack_require__.n(react_domfrom_dll_reference_react_aa08c2be211a6528e38f);

// EXTERNAL MODULE: ./node_modules/antd/es/locale/zh_CN.js + 3 modules
var zh_CN = __webpack_require__(330);

// EXTERNAL MODULE: delegated ./node_modules/react-router-dom/esm/react-router-dom.js from dll-reference react_aa08c2be211a6528e38f
var react_router_domfrom_dll_reference_react_aa08c2be211a6528e38f = __webpack_require__(24);

// CONCATENATED MODULE: ./app/components/store/context.js
/**
 * craete context
 */

var StoreContext = reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createContext({
  store: {},
  setStore: function setStore() {}
});
/* harmony default export */ var context = (StoreContext);
// CONCATENATED MODULE: ./app/components/store/provider.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * 全局store提供者，改变store的方法都在这里
 */

/* eslint  react/prop-types:0 */



var provider_Provider =
/*#__PURE__*/
function (_Component) {
  _inherits(Provider, _Component);

  function Provider(props) {
    var _this;

    _classCallCheck(this, Provider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Provider).call(this, props));

    _this.setStore = function (key, value) {
      var store = _this.state.store;
      store[key] = value;

      _this.setState({
        store: store
      });
    };

    _this.state = {
      store: _this.props.store || {},
      setStore: _this.setStore
    };
    return _this;
  }
  /**
   * 设置store的值
   */


  _createClass(Provider, [{
    key: "render",
    value: function render() {
      return reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(context.Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return Provider;
}(reactfrom_dll_reference_react_aa08c2be211a6528e38f["Component"]);


// CONCATENATED MODULE: ./app/components/store/connect.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * store 连接装饰器
 * 使用react context的Consumer
 * 功能：
 * 使组件和store连接起来，并赋予对应组件设置方法和对应的属性
 */



var connect_connect = function connect(mapStoreToProps) {
  return function (TargetClass) {
    return function (props) {
      return reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(context.Consumer, null, function (value) {
        return reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(TargetClass, _extends({}, props, {
          storeHandle: {
            setStore: value.setStore
          }
        }, mapStoreToProps(value.store)));
      });
    };
  };
};

/* harmony default export */ var store_connect = (connect_connect);
// CONCATENATED MODULE: ./app/components/store/index.js



// EXTERNAL MODULE: ./app/style/base.less
var base = __webpack_require__(512);

// EXTERNAL MODULE: ./node_modules/antd/lib/card/style/index.js
var card_style = __webpack_require__(253);

// EXTERNAL MODULE: ./node_modules/antd/lib/card/index.js
var card = __webpack_require__(150);
var card_default = /*#__PURE__*/__webpack_require__.n(card);

// EXTERNAL MODULE: ./node_modules/antd/lib/row/style/index.js
var row_style = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/antd/lib/row/index.js
var row = __webpack_require__(119);
var row_default = /*#__PURE__*/__webpack_require__.n(row);

// EXTERNAL MODULE: ./node_modules/antd/lib/button/style/index.js
var button_style = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/antd/lib/button/index.js
var lib_button = __webpack_require__(29);
var button_default = /*#__PURE__*/__webpack_require__.n(lib_button);

// EXTERNAL MODULE: ./node_modules/antd/lib/col/style/index.js
var col_style = __webpack_require__(188);

// EXTERNAL MODULE: ./node_modules/antd/lib/col/index.js
var col = __webpack_require__(61);
var col_default = /*#__PURE__*/__webpack_require__.n(col);

// EXTERNAL MODULE: delegated ./node_modules/prop-types/index.js from dll-reference react_aa08c2be211a6528e38f
var prop_typesfrom_dll_reference_react_aa08c2be211a6528e38f = __webpack_require__(0);
var prop_typesfrom_dll_reference_react_aa08c2be211a6528e38f_default = /*#__PURE__*/__webpack_require__.n(prop_typesfrom_dll_reference_react_aa08c2be211a6528e38f);

// CONCATENATED MODULE: ./app/components/ErrorBoundary/index.js









var _class, _class2, _temp;

function ErrorBoundary_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ErrorBoundary_typeof = function _typeof(obj) { return typeof obj; }; } else { ErrorBoundary_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ErrorBoundary_typeof(obj); }

function ErrorBoundary_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ErrorBoundary_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ErrorBoundary_createClass(Constructor, protoProps, staticProps) { if (protoProps) ErrorBoundary_defineProperties(Constructor.prototype, protoProps); if (staticProps) ErrorBoundary_defineProperties(Constructor, staticProps); return Constructor; }

function ErrorBoundary_possibleConstructorReturn(self, call) { if (call && (ErrorBoundary_typeof(call) === "object" || typeof call === "function")) { return call; } return ErrorBoundary_assertThisInitialized(self); }

function ErrorBoundary_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ErrorBoundary_getPrototypeOf(o) { ErrorBoundary_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ErrorBoundary_getPrototypeOf(o); }

function ErrorBoundary_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ErrorBoundary_setPrototypeOf(subClass, superClass); }

function ErrorBoundary_setPrototypeOf(o, p) { ErrorBoundary_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ErrorBoundary_setPrototypeOf(o, p); }

/*
 * @Author: huyu
 * @Date: 2019-05-28 10:12:29
 * @Last Modified by: huyu
 * @Last Modified time: 2019-05-29 14:12:58
 */
// 错误边界组件
// 捕获子组件的js错误，以及React.lazy+Suspense未加载成功时抛出的错误
// 官方文档：https://zh-hans.reactjs.org/docs/error-boundaries.html




var ErrorBoundary_ErrorBoundary = Object(react_router_domfrom_dll_reference_react_aa08c2be211a6528e38f["withRouter"])(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  ErrorBoundary_inherits(ErrorBoundary, _Component);

  function ErrorBoundary(props) {
    var _this;

    ErrorBoundary_classCallCheck(this, ErrorBoundary);

    _this = ErrorBoundary_possibleConstructorReturn(this, ErrorBoundary_getPrototypeOf(ErrorBoundary).call(this, props));

    _this.onClickGoBack = function () {
      _this.props.history.goBack();
    };

    _this.onClickGoHome = function () {
      _this.props.history.replace('/login');
    };

    _this.onClickReload = function () {
      location.reload();
    };

    _this.state = {
      hasError: false
    };
    return _this;
  }

  ErrorBoundary_createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      // You can also log the error to an error reporting service
      // 
      console.error(error);
    } // 去上一页

  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(card_default.a, {
          bordered: false
        }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(row_default.a, null, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(col_default.a, {
          span: 24
        }, " ", reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("p", null, "Something has error")), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(col_default.a, {
          span: 6
        }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(button_default.a, {
          onClick: this.onClickGoBack
        }, "\u56DE\u5230\u4E0A\u4E00\u9875")), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(col_default.a, {
          span: 6
        }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(button_default.a, {
          onClick: this.onClickGoHome
        }, "\u53BB\u9996\u9875")), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(col_default.a, {
          span: 6
        }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(button_default.a, {
          onClick: this.onClickReload
        }, "\u91CD\u65B0\u52A0\u8F7D"))));
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(reactfrom_dll_reference_react_aa08c2be211a6528e38f["Component"]), _class2.propTypes = {
  children: prop_typesfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.object
}, _temp)) || _class;


// EXTERNAL MODULE: ./node_modules/antd/lib/message/style/index.js
var message_style = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/antd/lib/message/index.js
var message = __webpack_require__(71);
var message_default = /*#__PURE__*/__webpack_require__.n(message);

// EXTERNAL MODULE: ./node_modules/antd/lib/modal/style/index.js
var modal_style = __webpack_require__(599);

// EXTERNAL MODULE: ./node_modules/antd/lib/modal/index.js
var modal = __webpack_require__(324);
var modal_default = /*#__PURE__*/__webpack_require__.n(modal);

// EXTERNAL MODULE: ./app/config/base.js
var config_base = __webpack_require__(31);

// EXTERNAL MODULE: ./app/Mock/index.js + 4 modules
var Mock = __webpack_require__(106);

// EXTERNAL MODULE: ./app/api/base.js + 1 modules
var api_base = __webpack_require__(157);

// CONCATENATED MODULE: ./app/api/User.js
var _dec, _dec2, _dec3, User_class;

function User_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { User_typeof = function _typeof(obj) { return typeof obj; }; } else { User_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return User_typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function User_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function User_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function User_createClass(Constructor, protoProps, staticProps) { if (protoProps) User_defineProperties(Constructor.prototype, protoProps); if (staticProps) User_defineProperties(Constructor, staticProps); return Constructor; }

function User_possibleConstructorReturn(self, call) { if (call && (User_typeof(call) === "object" || typeof call === "function")) { return call; } return User_assertThisInitialized(self); }

function User_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function User_getPrototypeOf(o) { User_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return User_getPrototypeOf(o); }

function User_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) User_setPrototypeOf(subClass, superClass); }

function User_setPrototypeOf(o, p) { User_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return User_setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }



var User = (_dec = Mock["a" /* default */].User.login, _dec2 = Mock["a" /* default */].User.register, _dec3 = Mock["a" /* default */].User.logout, (User_class =
/*#__PURE__*/
function (_Base) {
  User_inherits(User, _Base);

  function User() {
    User_classCallCheck(this, User);

    return User_possibleConstructorReturn(this, User_getPrototypeOf(User).apply(this, arguments));
  }

  User_createClass(User, null, [{
    key: "login",
    // 登录
    value: function () {
      var _login = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(reqData) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.ajaxPost('/usercenter/login', reqData);

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login(_x) {
        return _login.apply(this, arguments);
      }

      return login;
    }() // 注册

  }, {
    key: "register",
    value: function () {
      var _register = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(reqData) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.ajaxPost('/usercenter/register', reqData);

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function register(_x2) {
        return _register.apply(this, arguments);
      }

      return register;
    }() // 登出

  }, {
    key: "logout",
    value: function () {
      var _logout = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(reqData) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.ajaxPost('/usercenter/logout', reqData);

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function logout(_x3) {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
  }]);

  return User;
}(api_base["a" /* default */]), (_applyDecoratedDescriptor(User_class, "login", [_dec], Object.getOwnPropertyDescriptor(User_class, "login"), User_class), _applyDecoratedDescriptor(User_class, "register", [_dec2], Object.getOwnPropertyDescriptor(User_class, "register"), User_class), _applyDecoratedDescriptor(User_class, "logout", [_dec3], Object.getOwnPropertyDescriptor(User_class, "logout"), User_class)), User_class));
/* harmony default export */ var api_User = (User);
// EXTERNAL MODULE: ./app/style/header/index.less
var header = __webpack_require__(91);
var header_default = /*#__PURE__*/__webpack_require__.n(header);

// CONCATENATED MODULE: ./app/pages/base/header.js





var header_class, header_temp;

function header_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { header_typeof = function _typeof(obj) { return typeof obj; }; } else { header_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return header_typeof(obj); }

function header_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function header_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { header_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { header_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function header_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function header_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function header_createClass(Constructor, protoProps, staticProps) { if (protoProps) header_defineProperties(Constructor.prototype, protoProps); if (staticProps) header_defineProperties(Constructor, staticProps); return Constructor; }

function header_possibleConstructorReturn(self, call) { if (call && (header_typeof(call) === "object" || typeof call === "function")) { return call; } return header_assertThisInitialized(self); }

function header_getPrototypeOf(o) { header_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return header_getPrototypeOf(o); }

function header_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function header_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) header_setPrototypeOf(subClass, superClass); }

function header_setPrototypeOf(o, p) { header_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return header_setPrototypeOf(o, p); }

/*
 * @Author: hy 
 * @Date: 2019-05-05 17:47:14 
 * @Last Modified by: hy
 * @Last Modified time: 2019-05-07 14:00:27
 */
// 公共头部






var header_Header = Object(react_router_domfrom_dll_reference_react_aa08c2be211a6528e38f["withRouter"])(header_class = (header_temp =
/*#__PURE__*/
function (_Component) {
  header_inherits(Header, _Component);

  function Header(props) {
    var _this;

    header_classCallCheck(this, Header);

    _this = header_possibleConstructorReturn(this, header_getPrototypeOf(Header).call(this, props));

    _this.onLogout = function () {
      var _self = header_assertThisInitialized(_this);

      modal_default.a.confirm({
        title: '提示',
        content: '确认退出登录吗？',
        onOk: function () {
          var _onOk = header_asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var reqData, data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // 退出请求
                    reqData = {};
                    _context.next = 3;
                    return api_User.logout(reqData);

                  case 3:
                    data = _context.sent;

                    message_default.a.success(data.msg || '退出成功');

                    _self.props.history.push('/login');

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function onOk() {
            return _onOk.apply(this, arguments);
          }

          return onOk;
        }()
      });
    };

    _this.state = {};
    return _this;
  }
  /**
   * @description 点击退出
   * @memberof home
   */


  header_createClass(Header, [{
    key: "render",
    value: function render() {
      var userInfo = {
        name: 'admin'
      };
      return reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("header", {
        className: header_default.a.header
      }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(react_router_domfrom_dll_reference_react_aa08c2be211a6528e38f["Link"], {
        to: "/",
        className: header_default.a.brand
      }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("span", {
        className: header_default.a.logo
      }), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("span", {
        className: header_default.a.text
      }, config_base["f" /* title */])), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("div", {
        className: header_default.a.user
      }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("span", null, userInfo.name), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("a", {
        onClick: this.onLogout,
        title: "\u9000\u51FA\u7CFB\u7EDF",
        className: header_default.a.userLogout
      }, "\u9000\u51FA")));
    }
  }]);

  return Header;
}(reactfrom_dll_reference_react_aa08c2be211a6528e38f["Component"]), header_temp)) || header_class;

/* harmony default export */ var base_header = (header_Header);
// EXTERNAL MODULE: ./node_modules/antd/lib/menu/style/index.js
var menu_style = __webpack_require__(606);

// EXTERNAL MODULE: ./node_modules/antd/lib/menu/index.js
var menu = __webpack_require__(105);
var menu_default = /*#__PURE__*/__webpack_require__.n(menu);

// EXTERNAL MODULE: ./app/style/menu/index.less
var style_menu = __webpack_require__(610);

// CONCATENATED MODULE: ./app/pages/base/navUtils.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// 菜单工具
// 根据当前路由，获取打开的key
function getOpenKeys(props, menuData) {
  var pathname = props.location.pathname;
  var urlList = getMenuKeys(menuData);
  urlList = urlList.filter(function (d) {
    if (d && pathname.indexOf(d) === 0) {
      return true;
    }

    return false;
  });
  return [urlList[0]];
} // 菜单生成数组


function getMenuKeys(menuData) {
  var keys = [];
  menuData.forEach(function (d) {
    if (d.navKey) {
      keys.push(d.navKey);

      if (d.children) {
        keys = [].concat(_toConsumableArray(keys), _toConsumableArray(getMenuKeys(d.children)));
      }
    }
  });
  return keys;
} // 根据当前路由，获取选中的key


function getSelectKeys(props, menuData) {
  var pathname = props.location.pathname;
  var urlList = getMenuKeys(menuData);
  urlList = urlList.filter(function (d) {
    if (d && pathname.indexOf(d) === 0) {
      return true;
    }

    return false;
  });
  return [urlList[urlList.length - 1]];
}


// CONCATENATED MODULE: ./app/pages/base/nav.js



var nav_class, nav_class2, nav_temp;

function nav_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { nav_typeof = function _typeof(obj) { return typeof obj; }; } else { nav_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return nav_typeof(obj); }

function nav_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function nav_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function nav_createClass(Constructor, protoProps, staticProps) { if (protoProps) nav_defineProperties(Constructor.prototype, protoProps); if (staticProps) nav_defineProperties(Constructor, staticProps); return Constructor; }

function nav_possibleConstructorReturn(self, call) { if (call && (nav_typeof(call) === "object" || typeof call === "function")) { return call; } return nav_assertThisInitialized(self); }

function nav_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function nav_getPrototypeOf(o) { nav_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return nav_getPrototypeOf(o); }

function nav_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) nav_setPrototypeOf(subClass, superClass); }

function nav_setPrototypeOf(o, p) { nav_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return nav_setPrototypeOf(o, p); }

/*
 * @Author: hy 
 * @Date: 2019-05-05 17:47:31 
 * @Last Modified by: huyu
 * @Last Modified time: 2019-05-29 16:27:01
 */
// 左侧导航






var SubMenu = menu_default.a.SubMenu;

var nav_Nav = Object(react_router_domfrom_dll_reference_react_aa08c2be211a6528e38f["withRouter"])(nav_class = (nav_temp = nav_class2 =
/*#__PURE__*/
function (_Component) {
  nav_inherits(Nav, _Component);

  function Nav(props) {
    var _this;

    nav_classCallCheck(this, Nav);

    _this = nav_possibleConstructorReturn(this, nav_getPrototypeOf(Nav).call(this, props));

    _this.navMini = function () {
      _this.setState(function (state) {
        return {
          isMini: !state.isMini
        };
      });
    };

    _this.renderMenu = function () {
      var children = config_base["b" /* menusData */];
      return children.map(function (item) {
        if (!item.children || item.children.length === 0) {
          return reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(menu_default.a.Item, {
            key: item.navKey ? item.navKey : item.id,
            name: item.navName,
            style: {
              paddingLeft: 0
            }
          }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("i", {
            className: "anticon qqbicon qqbicon-".concat(item.navIcon),
            title: item.navName
          }), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("span", {
            className: "menu-name"
          }, item.navName));
        }

        return reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(SubMenu, {
          key: item.navKey,
          title: reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("span", null, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("i", {
            className: "anticon qqbicon qqbicon-".concat(item.navIcon),
            title: item.navName
          }), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("span", {
            className: "menu-name"
          }, item.navName))
        }, item.children.map(function (child) {
          return reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(menu_default.a.Item, {
            key: child.navKey ? child.navKey : child.id,
            name: child.navName,
            title: child.navName
          }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("i", {
            className: "anticon qqbicon qqbicon-".concat(child.navIcon),
            title: child.navName
          }), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("span", {
            className: "menu-name"
          }, child.navName));
        }));
      });
    };

    _this._handleToggle = function (openKeys) {
      // 保留一个
      if (openKeys.length > 1) {
        openKeys = [openKeys[openKeys.length - 1]];
      }

      console.log(openKeys);

      _this.setState({
        openKeys: openKeys
      });
    };

    _this._handleClick = function (e) {
      _this.props.history.push(e.key);
    };

    console.log(config_base["b" /* menusData */]);
    _this.state = {
      // 是否迷你模式
      isMini: false,
      // 当前展开的submenu菜单项key数组
      openKeys: getOpenKeys(props, config_base["b" /* menusData */])
    };
    return _this;
  }

  nav_createClass(Nav, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isMini = _this$state.isMini,
          openKeys = _this$state.openKeys;
      return reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("div", {
        className: isMini ? 'main-body-nav nav-mini' : 'main-body-nav'
      }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("div", {
        className: "nav-control",
        onClick: this.navMini
      }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("i", {
        className: "qqbicon qqbicon-navcontrol"
      })), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(menu_default.a, {
        mode: "inline",
        theme: "dark",
        inlineIndent: "16",
        inlineCollapsed: isMini,
        selectedKeys: getSelectKeys(this.props, config_base["b" /* menusData */]),
        openKeys: openKeys,
        onOpenChange: this._handleToggle,
        onClick: this._handleClick
      }, this.renderMenu()));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var pathname = state.pathname;

      if (props.location.pathname !== pathname) {
        return {
          pathname: props.location.pathname,
          openKeys: getOpenKeys(props, config_base["b" /* menusData */])
        };
      }

      return null;
    }
    /**
     * @description 点击收缩按钮
     * @memberof Nav
     */

  }]);

  return Nav;
}(reactfrom_dll_reference_react_aa08c2be211a6528e38f["Component"]), nav_class2.propTypes = {
  location: prop_typesfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.object,
  history: prop_typesfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.object
}, nav_temp)) || nav_class;

/* harmony default export */ var nav = (nav_Nav);
// CONCATENATED MODULE: ./app/pages/base/notfound.js
function notfound_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { notfound_typeof = function _typeof(obj) { return typeof obj; }; } else { notfound_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return notfound_typeof(obj); }

function notfound_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function notfound_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function notfound_createClass(Constructor, protoProps, staticProps) { if (protoProps) notfound_defineProperties(Constructor.prototype, protoProps); if (staticProps) notfound_defineProperties(Constructor, staticProps); return Constructor; }

function notfound_possibleConstructorReturn(self, call) { if (call && (notfound_typeof(call) === "object" || typeof call === "function")) { return call; } return notfound_assertThisInitialized(self); }

function notfound_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function notfound_getPrototypeOf(o) { notfound_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return notfound_getPrototypeOf(o); }

function notfound_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) notfound_setPrototypeOf(subClass, superClass); }

function notfound_setPrototypeOf(o, p) { notfound_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return notfound_setPrototypeOf(o, p); }

/*
 * @Author: hy 
 * @Date: 2019-05-05 17:47:40 
 * @Last Modified by:   hy 
 * @Last Modified time: 2019-05-05 17:47:40 
 */
//未找到路由页


var notfound_home =
/*#__PURE__*/
function (_Component) {
  notfound_inherits(home, _Component);

  function home(props) {
    var _this;

    notfound_classCallCheck(this, home);

    _this = notfound_possibleConstructorReturn(this, notfound_getPrototypeOf(home).call(this, props));
    _this.state = {};
    return _this;
  }

  notfound_createClass(home, [{
    key: "render",
    value: function render() {
      return reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("div", {
        className: "nofound-wrap"
      }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("h2", null, "404"));
    }
  }]);

  return home;
}(reactfrom_dll_reference_react_aa08c2be211a6528e38f["Component"]);


// EXTERNAL MODULE: ./node_modules/antd/lib/pagination/style/index.js
var pagination_style = __webpack_require__(288);

// EXTERNAL MODULE: ./node_modules/antd/lib/pagination/index.js
var pagination = __webpack_require__(218);
var pagination_default = /*#__PURE__*/__webpack_require__.n(pagination);

// EXTERNAL MODULE: ./node_modules/antd/lib/table/style/index.js
var table_style = __webpack_require__(631);

// EXTERNAL MODULE: ./node_modules/antd/lib/table/index.js
var table = __webpack_require__(325);
var table_default = /*#__PURE__*/__webpack_require__.n(table);

// EXTERNAL MODULE: ./node_modules/antd/lib/input/style/index.js
var input_style = __webpack_require__(205);

// EXTERNAL MODULE: ./node_modules/antd/lib/input/index.js
var input = __webpack_require__(62);
var input_default = /*#__PURE__*/__webpack_require__.n(input);

// EXTERNAL MODULE: ./node_modules/antd/lib/icon/style/index.js
var icon_style = __webpack_require__(291);

// EXTERNAL MODULE: ./node_modules/antd/lib/icon/index.js
var icon = __webpack_require__(18);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon);

// EXTERNAL MODULE: ./node_modules/antd/lib/form/style/index.js
var form_style = __webpack_require__(292);

// EXTERNAL MODULE: ./node_modules/antd/lib/form/index.js
var lib_form = __webpack_require__(44);
var form_default = /*#__PURE__*/__webpack_require__.n(lib_form);

// EXTERNAL MODULE: ./app/api/List.js
var List = __webpack_require__(293);

// EXTERNAL MODULE: ./app/utils/ajaxCancel.js
var ajaxCancel = __webpack_require__(90);

// CONCATENATED MODULE: ./app/pages/list/example2/index.js















var example2_dec, example2_class, example2_class2, example2_temp;

function example2_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { example2_typeof = function _typeof(obj) { return typeof obj; }; } else { example2_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return example2_typeof(obj); }

function example2_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function example2_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { example2_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { example2_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function example2_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function example2_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function example2_createClass(Constructor, protoProps, staticProps) { if (protoProps) example2_defineProperties(Constructor.prototype, protoProps); if (staticProps) example2_defineProperties(Constructor, staticProps); return Constructor; }

function example2_possibleConstructorReturn(self, call) { if (call && (example2_typeof(call) === "object" || typeof call === "function")) { return call; } return example2_assertThisInitialized(self); }

function example2_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function example2_getPrototypeOf(o) { example2_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return example2_getPrototypeOf(o); }

function example2_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) example2_setPrototypeOf(subClass, superClass); }

function example2_setPrototypeOf(o, p) { example2_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return example2_setPrototypeOf(o, p); }

/*
 * @Author: hy 
 * @Date: 2019-05-05 17:48:17 
 * @Last Modified by: huyu
 * @Last Modified time: 2020-05-03 11:23:21
 */
// 测试页




var example2_test1 = (example2_dec = form_default.a.create({}), example2_dec(example2_class = (example2_temp = example2_class2 =
/*#__PURE__*/
function (_Component) {
  example2_inherits(test1, _Component);

  function test1(props) {
    var _this;

    example2_classCallCheck(this, test1);

    _this = example2_possibleConstructorReturn(this, example2_getPrototypeOf(test1).call(this, props));
    _this.getList =
    /*#__PURE__*/
    example2_asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                tableLoading: true
              });

              _context.next = 3;
              return List["a" /* default */].list2(_this.requestBody).catch(function () {
                _this.setState({
                  tableLoading: false
                });
              });

            case 3:
              res = _context.sent;

              if (res) {
                _this.setState({
                  tableData: res.data,
                  tableLoading: false
                });
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.handleSubmit = function (e) {
      e.preventDefault();

      _this.props.form.validateFields(function (err, values) {
        if (err) {
          return;
        }

        console.log('表单数据: ', values);

        _this.getList();
      });
    };

    _this.onClickReset = function () {
      _this.props.form.resetFields();
    };

    _this.onClickDetail = function (item) {
      console.log(item);
    };

    _this.onShowSizeChange = function (page, pageSize) {
      _this.requestBody.pageSize = pageSize;

      _this.getList();
    };

    _this.onChangePageNo = function (current) {
      _this.requestBody.pageNo = current;

      _this.getList();
    };

    _this.onClickCancel = function () {
      Object(ajaxCancel["b" /* cancelRequest */])(_this.CANCEL_TOKEN);
    };

    _this.getColums = function () {
      return [{
        title: '序号',
        width: '10%',
        key: 'index',
        render: function render(record, text, index) {
          return reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("span", {
            key: index
          }, index + 1);
        }
      }, {
        title: '姓名',
        width: '10%',
        dataIndex: 'name',
        key: 'name'
      }, {
        title: '身份证号',
        width: '10%',
        dataIndex: 'idCard',
        key: 'idCard'
      }, {
        title: '年龄',
        width: '10%',
        dataIndex: 'age',
        key: 'age'
      }, {
        title: '操作',
        width: '10%',
        key: 'handler',
        render: function render(record) {
          return reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("p", null, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("a", {
            onClick: function onClick() {
              return _this.onClickDetail(record);
            }
          }, "\u8BE6\u60C5"));
        }
      }];
    };

    _this.state = {
      // 表格数据
      tableData: {
        list: [],
        pageSize: 10,
        pageNo: 1,
        total: 0
      },
      // 表格loading
      tableLoading: false
    };
    _this.style = {
      height: '100%'
    }; // canceltoken

    _this.CANCEL_TOKEN = 'list/list2'; // 请求字段

    _this.requestBody = {
      pageSize: 10,
      pageNo: 1,
      name: '',
      idCard: '',
      AJAX_CANCEL_TOKEN: _this.CANCEL_TOKEN
    };
    return _this;
  }

  example2_createClass(test1, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getList();
    } // 获取列表

  }, {
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var _this$state = this.state,
          tableData = _this$state.tableData,
          tableLoading = _this$state.tableLoading;
      return reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("div", {
        style: this.style,
        className: "transform-show"
      }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(card_default.a, {
        bordered: false
      }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(form_default.a, {
        layout: "inline",
        onSubmit: this.handleSubmit
      }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(form_default.a.Item, null, getFieldDecorator('name', {
        rules: [{
          required: true,
          message: '请输入用户名'
        }]
      })(reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(input_default.a, {
        prefix: reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(icon_default.a, {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "\u7528\u6237\u540D"
      }))), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(form_default.a.Item, null, getFieldDecorator('idCard', {
        rules: [{
          required: true,
          message: '请输入身份证号'
        }]
      })(reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(input_default.a, {
        prefix: reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(icon_default.a, {
          type: "lock",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "\u8EAB\u4EFD\u8BC1\u53F7"
      }))), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(form_default.a.Item, null, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(button_default.a, {
        type: "primary",
        htmlType: "submit"
      }, "\u67E5\u8BE2")), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(form_default.a.Item, null, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(button_default.a, {
        onClick: this.onClickReset
      }, "\u91CD\u7F6E")), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(form_default.a.Item, null, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(button_default.a, {
        onClick: this.onClickCancel
      }, "\u53D6\u6D88\u8BF7\u6C42"))), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("div", {
        style: {
          marginTop: 12
        }
      }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(table_default.a, {
        bordered: true,
        pagination: false,
        loading: {
          tip: '正在加载数据',
          spinning: tableLoading
        },
        columns: this.getColums(),
        dataSource: tableData.list
      }), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(pagination_default.a, {
        showSizeChanger: true,
        pageSize: tableData.pageSize,
        style: {
          marginTop: 12,
          textAlign: 'right'
        },
        total: tableData.total,
        showTotal: function showTotal(total) {
          return "\u5171 ".concat(total, " \u6761");
        },
        current: tableData.pageNo,
        onShowSizeChange: this.onShowSizeChange,
        onChange: this.onChangePageNo
      }))));
    }
  }]);

  return test1;
}(reactfrom_dll_reference_react_aa08c2be211a6528e38f["Component"]), example2_class2.propTypes = {
  location: prop_typesfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.object.isRequired,
  history: prop_typesfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.object.isRequired,
  match: prop_typesfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.object.isRequired,
  form: prop_typesfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.object.isRequired
}, example2_temp)) || example2_class);
/* harmony default export */ var example2 = (example2_test1);
// CONCATENATED MODULE: ./app/pages/single/index.js
function single_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { single_typeof = function _typeof(obj) { return typeof obj; }; } else { single_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return single_typeof(obj); }

function single_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function single_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function single_createClass(Constructor, protoProps, staticProps) { if (protoProps) single_defineProperties(Constructor.prototype, protoProps); if (staticProps) single_defineProperties(Constructor, staticProps); return Constructor; }

function single_possibleConstructorReturn(self, call) { if (call && (single_typeof(call) === "object" || typeof call === "function")) { return call; } return single_assertThisInitialized(self); }

function single_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function single_getPrototypeOf(o) { single_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return single_getPrototypeOf(o); }

function single_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) single_setPrototypeOf(subClass, superClass); }

function single_setPrototypeOf(o, p) { single_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return single_setPrototypeOf(o, p); }

/*
 * @Author: hy 
 * @Date: 2019-05-05 17:48:17 
 * @Last Modified by: huyu
 * @Last Modified time: 2020-05-03 11:22:08
 */
// 独立页



var single_Single1 =
/*#__PURE__*/
function (_Component) {
  single_inherits(Single1, _Component);

  function Single1(props) {
    var _this;

    single_classCallCheck(this, Single1);

    _this = single_possibleConstructorReturn(this, single_getPrototypeOf(Single1).call(this, props));
    _this.state = {};
    _this.style = {
      height: '100%'
    };
    return _this;
  }

  single_createClass(Single1, [{
    key: "render",
    value: function render() {
      return reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("div", {
        style: this.style
      }, "\u72EC\u7ACB\u9875");
    }
  }]);

  return Single1;
}(reactfrom_dll_reference_react_aa08c2be211a6528e38f["Component"]);

single_Single1.propTypes = {
  location: prop_typesfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.object.isRequired,
  history: prop_typesfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.object.isRequired,
  match: prop_typesfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.object.isRequired
};

// EXTERNAL MODULE: ./app/pages/worker/main.worker.js
var main_worker = __webpack_require__(328);
var main_worker_default = /*#__PURE__*/__webpack_require__.n(main_worker);

// CONCATENATED MODULE: ./app/pages/worker/index.js









function worker_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { worker_typeof = function _typeof(obj) { return typeof obj; }; } else { worker_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return worker_typeof(obj); }

function worker_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function worker_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function worker_createClass(Constructor, protoProps, staticProps) { if (protoProps) worker_defineProperties(Constructor.prototype, protoProps); if (staticProps) worker_defineProperties(Constructor, staticProps); return Constructor; }

function worker_possibleConstructorReturn(self, call) { if (call && (worker_typeof(call) === "object" || typeof call === "function")) { return call; } return worker_assertThisInitialized(self); }

function worker_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function worker_getPrototypeOf(o) { worker_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return worker_getPrototypeOf(o); }

function worker_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) worker_setPrototypeOf(subClass, superClass); }

function worker_setPrototypeOf(o, p) { worker_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return worker_setPrototypeOf(o, p); }

/*
 * @Author: hy 
 * @Date: 2019-05-05 17:48:17 
 * @Last Modified by: huyu
 * @Last Modified time: 2020-05-03 11:21:58
 */
// web workers示例



var worker_Worker =
/*#__PURE__*/
function (_Component) {
  worker_inherits(Worker, _Component);

  function Worker(props) {
    var _this;

    worker_classCallCheck(this, Worker);

    _this = worker_possibleConstructorReturn(this, worker_getPrototypeOf(Worker).call(this, props));

    _this.onChange = function (e) {
      _this.setState({
        value: e.target.value
      });
    };

    _this.onMessage = function (e) {
      _this.setState({
        text: e.data
      });
    };

    _this.onClickSend = function () {
      var value = _this.state.value;
      console.log(value, _this.worker);
      _this.worker && _this.worker.postMessage(value);
    };

    _this.state = {
      // input value
      value: '',
      // 收到的消息
      text: ''
    };
    _this.style = {
      height: '100%'
    };
    return _this;
  }

  worker_createClass(Worker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.worker = new main_worker_default.a();
      this.worker.onmessage = this.onMessage.bind(this);

      this.worker.onerror = function (err) {
        console.error(err);
      };
    } // onChange

  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          text = _this$state.text,
          value = _this$state.value;
      return reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("div", {
        style: this.style
      }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("h3", null, "Web Workers \u793A\u4F8B\uFF1A"), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(row_default.a, {
        gutter: 16
      }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(col_default.a, {
        span: 8
      }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(input_default.a, {
        placeholder: "\u8BF7\u8F93\u5165\u6D88\u606F",
        value: value,
        onChange: this.onChange
      })), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(col_default.a, {
        span: 8
      }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(button_default.a, {
        onClick: this.onClickSend
      }, "\u53D1\u9001\u6D88\u606F"))), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("h5", null, "\u6536\u5230\u6765\u81EAWorker\u7684\u6D88\u606F\uFF1A"), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("p", null, text));
    }
  }]);

  return Worker;
}(reactfrom_dll_reference_react_aa08c2be211a6528e38f["Component"]);


// CONCATENATED MODULE: ./app/pages/base/index.js
function base_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { base_typeof = function _typeof(obj) { return typeof obj; }; } else { base_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return base_typeof(obj); }

function base_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function base_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function base_createClass(Constructor, protoProps, staticProps) { if (protoProps) base_defineProperties(Constructor.prototype, protoProps); if (staticProps) base_defineProperties(Constructor, staticProps); return Constructor; }

function base_possibleConstructorReturn(self, call) { if (call && (base_typeof(call) === "object" || typeof call === "function")) { return call; } return base_assertThisInitialized(self); }

function base_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function base_getPrototypeOf(o) { base_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return base_getPrototypeOf(o); }

function base_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) base_setPrototypeOf(subClass, superClass); }

function base_setPrototypeOf(o, p) { base_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return base_setPrototypeOf(o, p); }

/**
 * 公共包裹，登录后的页面，都有一个公共的头部和左侧导航栏
 */

/* eslint  react/prop-types:0 */





 // import example1 from '@/pages/list/example1'



 // 动态导入

var example1 = reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.lazy(function () {
  return __webpack_require__.e(/* import() */ 6).then(__webpack_require__.bind(null, 802));
});

var base_home =
/*#__PURE__*/
function (_Component) {
  base_inherits(home, _Component);

  function home(props) {
    var _this;

    base_classCallCheck(this, home);

    _this = base_possibleConstructorReturn(this, base_getPrototypeOf(home).call(this, props));
    _this.state = {};
    return _this;
  }

  base_createClass(home, [{
    key: "render",
    value: function render() {
      return reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("div", {
        className: "main-wrap"
      }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(base_header, null), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("div", {
        className: "main-body"
      }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(nav, null), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("div", {
        className: "main-body-content"
      }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(ErrorBoundary_ErrorBoundary, null, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(reactfrom_dll_reference_react_aa08c2be211a6528e38f["Suspense"], {
        fallback: reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("div", null, "Loading....")
      }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(react_router_domfrom_dll_reference_react_aa08c2be211a6528e38f["Switch"], null, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(react_router_domfrom_dll_reference_react_aa08c2be211a6528e38f["Route"], {
        path: "/list/example1",
        component: example1
      }), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(react_router_domfrom_dll_reference_react_aa08c2be211a6528e38f["Route"], {
        path: "/list/example2",
        component: example2
      }), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(react_router_domfrom_dll_reference_react_aa08c2be211a6528e38f["Route"], {
        path: "/single",
        component: single_Single1
      }), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(react_router_domfrom_dll_reference_react_aa08c2be211a6528e38f["Route"], {
        path: "/worker",
        component: worker_Worker
      }), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(react_router_domfrom_dll_reference_react_aa08c2be211a6528e38f["Redirect"], {
        from: "/",
        to: "/list/example1"
      }), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(react_router_domfrom_dll_reference_react_aa08c2be211a6528e38f["Route"], {
        component: notfound_home
      })))))));
    }
  }]);

  return home;
}(reactfrom_dll_reference_react_aa08c2be211a6528e38f["Component"]);


// EXTERNAL MODULE: ./node_modules/antd/lib/checkbox/style/index.js
var checkbox_style = __webpack_require__(290);

// EXTERNAL MODULE: ./node_modules/antd/lib/checkbox/index.js
var lib_checkbox = __webpack_require__(118);
var checkbox_default = /*#__PURE__*/__webpack_require__.n(lib_checkbox);

// EXTERNAL MODULE: ./app/style/login/index.less
var login = __webpack_require__(107);
var login_default = /*#__PURE__*/__webpack_require__.n(login);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./app/pages/login/index.js











var login_dec, login_class, login_temp;

function login_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { login_typeof = function _typeof(obj) { return typeof obj; }; } else { login_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return login_typeof(obj); }

function login_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function login_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { login_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { login_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function login_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function login_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function login_createClass(Constructor, protoProps, staticProps) { if (protoProps) login_defineProperties(Constructor.prototype, protoProps); if (staticProps) login_defineProperties(Constructor, staticProps); return Constructor; }

function login_possibleConstructorReturn(self, call) { if (call && (login_typeof(call) === "object" || typeof call === "function")) { return call; } return login_assertThisInitialized(self); }

function login_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function login_getPrototypeOf(o) { login_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return login_getPrototypeOf(o); }

function login_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) login_setPrototypeOf(subClass, superClass); }

function login_setPrototypeOf(o, p) { login_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return login_setPrototypeOf(o, p); }

/*
 * @Author: hy 
 * @Date: 2019-05-05 17:48:01 
 * @Last Modified by: huyu
 * @Last Modified time: 2020-05-03 11:22:23
 */
// 登录

/* eslint  react/prop-types:0 */




var FormItem = form_default.a.Item;
var login_Login = (login_dec = form_default.a.create(), login_dec(login_class = (login_temp =
/*#__PURE__*/
function (_Component) {
  login_inherits(Login, _Component);

  function Login(props) {
    var _this;

    login_classCallCheck(this, Login);

    _this = login_possibleConstructorReturn(this, login_getPrototypeOf(Login).call(this, props));

    _this.handleSubmit = function (e) {
      e.preventDefault();

      _this.props.form.validateFields(
      /*#__PURE__*/
      function () {
        var _ref = login_asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(err, values) {
          var reqData, data, _data;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!err) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  reqData = values;

                  _this.setState({
                    btnLoading: true
                  });

                  if (!_this.state.isRegister) {
                    _context.next = 12;
                    break;
                  }

                  _context.next = 7;
                  return api_User.register(reqData);

                case 7:
                  data = _context.sent;
                  console.log('返回注册数据', data);
                  _this.props.history && _this.props.history.push('/');
                  _context.next = 24;
                  break;

                case 12:
                  _context.prev = 12;
                  _context.next = 15;
                  return api_User.login(reqData);

                case 15:
                  _data = _context.sent;
                  console.log('返回登录数据', _data);
                  _this.props.history && _this.props.history.push('/');
                  _context.next = 24;
                  break;

                case 20:
                  _context.prev = 20;
                  _context.t0 = _context["catch"](12);
                  console.log('返回错误', _context.t0);

                  _this.setState({
                    btnLoading: false
                  });

                case 24:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[12, 20]]);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    };

    _this.chanageRegister = function () {
      var isRegister = _this.state.isRegister;

      if (isRegister) {
        _this.setState({
          isRegister: false,
          registerText: '注册'
        });
      } else {
        _this.setState({
          isRegister: true,
          registerText: '登录'
        });
      }
    };

    _this.state = {
      // 是否注册 
      isRegister: false,
      // 按钮加载
      btnLoading: false,
      // 切换按钮文字
      registerText: '注册'
    };
    return _this;
  }
  /**
   * 表单登录
   */


  login_createClass(Login, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var _this$state = this.state,
          isRegister = _this$state.isRegister,
          btnLoading = _this$state.btnLoading,
          registerText = _this$state.registerText;
      return reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("div", {
        className: classnames_default()(login_default.a.wrap, login_default.a.wrap2, 'wrap3')
      }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("div", {
        className: login_default.a.content
      }, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("h2", null, "\u767B\u5F55"), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(form_default.a, {
        onSubmit: this.handleSubmit,
        className: login_default.a['login-form']
      }, isRegister ? reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(FormItem, null, getFieldDecorator('nickName', {
        rules: [{
          required: true,
          message: '请输入昵称'
        }]
      })(reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(input_default.a, {
        prefix: reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(icon_default.a, {
          type: "lock",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        type: "nickName",
        placeholder: "\u6635\u79F0"
      }))) : null, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(FormItem, null, getFieldDecorator('username', {
        rules: [{
          required: true,
          message: '请输入用户名'
        }]
      })(reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(input_default.a, {
        prefix: reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(icon_default.a, {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "\u7528\u6237\u540D"
      }))), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(FormItem, null, getFieldDecorator('password', {
        rules: [{
          required: true,
          message: '请输入密码'
        }]
      })(reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(input_default.a, {
        prefix: reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(icon_default.a, {
          type: "lock",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        type: "password",
        placeholder: "\u5BC6\u7801"
      }))), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(FormItem, null, getFieldDecorator('remember', {
        valuePropName: 'checked',
        initialValue: true
      })(reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(checkbox_default.a, null, "\u8BB0\u4F4F\u6211")), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(button_default.a, {
        type: "primary",
        htmlType: "submit",
        className: login_default.a['login-form-button'],
        loading: btnLoading
      }, registerText === '登录' ? '注册' : '登录'), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement("a", {
        onClick: this.chanageRegister
      }, registerText)))));
    }
  }]);

  return Login;
}(reactfrom_dll_reference_react_aa08c2be211a6528e38f["Component"]), login_temp)) || login_class);
/* harmony default export */ var pages_login = (login_Login);
// CONCATENATED MODULE: ./app/pages/index.js
function pages_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_typeof = function _typeof(obj) { return typeof obj; }; } else { pages_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_typeof(obj); }

function pages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_defineProperties(Constructor, staticProps); return Constructor; }

function pages_possibleConstructorReturn(self, call) { if (call && (pages_typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assertThisInitialized(self); }

function pages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages_getPrototypeOf(o) { pages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pages_getPrototypeOf(o); }

function pages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pages_setPrototypeOf(subClass, superClass); }

function pages_setPrototypeOf(o, p) { pages_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pages_setPrototypeOf(o, p); }

/*
 * @Author: hy 
 * @Date: 2019-05-05 17:23:01 
 * @Last Modified by: huyu
 * @Last Modified time: 2020-05-03 11:11:44
 */
// 应用入口





var pages_Index =
/*#__PURE__*/
function (_Component) {
  pages_inherits(Index, _Component);

  function Index(props) {
    pages_classCallCheck(this, Index);

    return pages_possibleConstructorReturn(this, pages_getPrototypeOf(Index).call(this, props));
  }

  pages_createClass(Index, [{
    key: "render",
    value: function render() {
      return reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(react_router_domfrom_dll_reference_react_aa08c2be211a6528e38f["Switch"], null, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(react_router_domfrom_dll_reference_react_aa08c2be211a6528e38f["Route"], {
        exact: true,
        path: "/login",
        component: pages_login
      }), reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(react_router_domfrom_dll_reference_react_aa08c2be211a6528e38f["Route"], {
        path: "/",
        component: base_home
      }));
    }
  }]);

  return Index;
}(reactfrom_dll_reference_react_aa08c2be211a6528e38f["Component"]);


// CONCATENATED MODULE: ./app/client.js







 // 引入全局样式

 // 全局store初始值

var store = {};

if (!window.Blob) {
  window.Blob = {};
}

react_domfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.render(reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(provider_Provider, {
  store: store
}, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(config_provider_default.a, {
  locale: zh_CN["a" /* default */]
}, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(react_router_domfrom_dll_reference_react_aa08c2be211a6528e38f["HashRouter"], null, reactfrom_dll_reference_react_aa08c2be211a6528e38f_default.a.createElement(pages_Index, null)))), document.getElementById('root'));

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(68))(27);

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addCancelFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cancelRequest; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * @Author: huyu 
 * @Date: 2019-05-30 17:56:37 
 * @Last Modified by: huyu
 * @Last Modified time: 2019-05-31 10:15:06
 */
// 用于取消请求
// 根据AJAX_CANCEL_TOKEN保存取消方法
var CANCEL_FUNCS = new Map(); // 增加取消方法

function addCancelFunc(req, cancelFunc) {
  if (req.AJAX_CANCEL_TOKEN && typeof cancelFunc === 'function') {
    CANCEL_FUNCS.set(req.AJAX_CANCEL_TOKEN, cancelFunc);
    delete req.AJAX_CANCEL_TOKEN;
  }
} // 取消一个请求


function cancelRequest(tokens) {
  if (Array.isArray(tokens)) {
    tokens.forEach(function (token) {
      cancelToken(token);
    });
  } else if (_typeof(tokens) === 'object') {
    cancelToken(tokens.AJAX_CANCEL_TOKEN);
  } else {
    cancelToken(tokens);
  }
} // cancel toekn


function cancelToken(token) {
  if (CANCEL_FUNCS.has(token)) {
    CANCEL_FUNCS.get(token)();
    CANCEL_FUNCS.delete(token);
  }
}



/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"app-style-header-index__header--1_C0t","brand":"app-style-header-index__brand--3ViEA","logo":"app-style-header-index__logo--3TsJs","text":"app-style-header-index__text--8aJOC","user":"app-style-header-index__user--3mbFh","userLogout":"app-style-header-index__userLogout--f5qgx"};

/***/ })

},[[333,5,3,4,0,2]]]);