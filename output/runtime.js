(function (modules) {
  // webpackBootstrap
  // install a JSONP callback for chunk loading
  // 一个chunk加载完成后会执行该方法
  function webpackJsonpCallback(data) {
    var chunkIds = data[0];
    var moreModules = data[1];
    var executeModules = data[2];

    // add "moreModules" to the modules object,
    // then flag all "chunkIds" as loaded and fire callback
    var moduleId,
      chunkId,
      i = 0,
      resolves = [];
    // 遍历所有的chunkId
    for (; i < chunkIds.length; i++) {
      chunkId = chunkIds[i];
      if (
        Object.prototype.hasOwnProperty.call(installedChunks, chunkId) &&
        installedChunks[chunkId]
      ) {
        // 如果installedChunks[chunkId]值为true，其实就是requireEnsure函数内插入的[resolve,reject]值
        // 加载完成后需要调用对应的resolve方法，下面把它收集起来后面调用
        resolves.push(installedChunks[chunkId][0]);
      }
      // 对应的chunkId值置为0，表示已加载该模块
      installedChunks[chunkId] = 0;
    }

    // 遍历所有的模块，存放在modules中
    for (moduleId in moreModules) {
      if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
        modules[moduleId] = moreModules[moduleId];
      }
    }
    // webpackJsonpCallback是webpackJsonp.push方法的拦截
    // 所以最终还是需要放进webpackJsonp数组中
    // parentJsonpFunction就是原始的webpackJsonp.push方法
    if (parentJsonpFunction) parentJsonpFunction(data);

    // 依次调用resolve方法，解决对应的promise
    while (resolves.length) {
      resolves.shift()();
    }

    // add entry modules from loaded chunk to deferred list
    deferredModules.push.apply(deferredModules, executeModules || []);

    // run deferred modules when all chunks ready
    return checkDeferredModules();
  }

  // 检查依赖的函数，因为一个模块可能会依赖0到多个chunk，此函数就是检查moduleId依赖的系列chunkId是否加载
  function checkDeferredModules() {
    var result;
    for (var i = 0; i < deferredModules.length; i++) {
      var deferredModule = deferredModules[i];
      var fulfilled = true;
      for (var j = 1; j < deferredModule.length; j++) {
        // 这里j是从1开始的
        var depId = deferredModule[j];
        if (installedChunks[depId] !== 0) fulfilled = false; // 该chunk未安装
      }
      // 该moduleId(即deferredModule[0])依赖的chunkId都已加载，则执行该模块
      if (fulfilled) {
        deferredModules.splice(i--, 1);
        result = __webpack_require__(
          (__webpack_require__.s = deferredModule[0])
        );
      }
    }

    return result;
  }

  // The module cache
  var installedModules = {};

  // object to store loaded and loading chunks
  // undefined = chunk not loaded, null = chunk preloaded/prefetched
  // Promise = chunk loading, 0 = chunk loaded
  var installedChunks = {
    5: 0,
  };

  var deferredModules = [];

  // script path function
  function jsonpScriptSrc(chunkId) {
    return (
      __webpack_require__.p +
      "chunks/" +
      ({}[chunkId] || chunkId) +
      "." +
      "8d93" +
      ".js"
    );
  }

  // The require function
  // require的实现
  // 执行一个模块，返回模块执行后的导出内容
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    // 模块已缓存直接返回缓存
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    // Create a new module (and put it into the cache)
    // 为该模块创建缓存
    // 其中exports为模块导出内容
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false, // 是否已执行
      exports: {},
    });

    // Execute the module function
    // 执行模块
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );

    // Flag the module as loaded
    module.l = true;

    // Return the exports of the module
    return module.exports;
  }

  // This file contains only the entry chunk.
  // The chunk loading function for additional chunks
  __webpack_require__.e = function requireEnsure(chunkId) {
    var promises = [];

    // JSONP chunk loading for javascript

    var installedChunkData = installedChunks[chunkId];
    if (installedChunkData !== 0) {
      // 0 means "already installed".

      // a Promise means "currently loading".
      if (installedChunkData) {
        promises.push(installedChunkData[2]); // 正在loading中直接push对应的promise值
      } else {
        // setup Promise in chunk cache
        var promise = new Promise(function (resolve, reject) {
          installedChunkData = installedChunks[chunkId] = [resolve, reject];
        });
        promises.push((installedChunkData[2] = promise)); // 这里存入promise，和上面呼应

        // 开始创建script标签加载chunk
        // start chunk loading
        var script = document.createElement("script");
        var onScriptComplete;

        script.charset = "utf-8";
        script.timeout = 120;
        if (__webpack_require__.nc) {
          script.setAttribute("nonce", __webpack_require__.nc);
        }
        script.src = jsonpScriptSrc(chunkId);

        // create error before stack unwound to get useful stacktrace later
        var error = new Error();
        onScriptComplete = function (event) {
          // avoid mem leaks in IE.
          script.onerror = script.onload = null;
          clearTimeout(timeout);
          // 一个chunk文件加载成功并执行后,installedChunks[chunkId]一定是0
          // 因为chunk加载后会执行webpackJsonpCallback方法
          // 不为0则是加载失败
          var chunk = installedChunks[chunkId];
          if (chunk !== 0) {
            if (chunk) {
              var errorType =
                event && (event.type === "load" ? "missing" : event.type);
              var realSrc = event && event.target && event.target.src;
              error.message =
                "Loading chunk " +
                chunkId +
                " failed.\n(" +
                errorType +
                ": " +
                realSrc +
                ")";
              error.name = "ChunkLoadError";
              error.type = errorType;
              error.request = realSrc;
              chunk[1](error); // 调用reject方法，[resolve,reject]
            }
            installedChunks[chunkId] = undefined;
          }
        };
        // 超时设置
        var timeout = setTimeout(function () {
          onScriptComplete({ type: "timeout", target: script });
        }, 120000);
        // 加载失败或加载完毕都会执行onScriptComplete方法
        script.onerror = script.onload = onScriptComplete;
        document.head.appendChild(script);
      }
    }
    return Promise.all(promises);
  };

  // expose the modules object (__webpack_modules__)
  __webpack_require__.m = modules;

  // expose the module cache
  __webpack_require__.c = installedModules;

  // define getter function for harmony exports
  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };

  // define __esModule on exports
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    }
    Object.defineProperty(exports, "__esModule", { value: true });
  };

  // create a fake namespace object
  // mode & 1: value is a module id, require it
  // mode & 2: merge all properties of value into the ns
  // mode & 4: return value when already ns object
  // mode & 8|1: behave like require
  __webpack_require__.t = function (value, mode) {
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if (mode & 4 && typeof value === "object" && value && value.__esModule)
      return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, "default", { enumerable: true, value: value });
    if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    return ns;
  };

  // getDefaultExport function for compatibility with non-harmony modules
  __webpack_require__.n = function (module) {
    var getter =
      module && module.__esModule
        ? function getDefault() {
            return module["default"];
          }
        : function getModuleExports() {
            return module;
          };
    __webpack_require__.d(getter, "a", getter);
    return getter;
  };

  // Object.prototype.hasOwnProperty.call
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };

  // __webpack_public_path__
  __webpack_require__.p = "";

  // on error function for async loading
  __webpack_require__.oe = function (err) {
    console.error(err);
    throw err;
  };

  var jsonpArray = (window["webpackJsonp"] = window["webpackJsonp"] || []);
  var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
  jsonpArray.push = webpackJsonpCallback;
  jsonpArray = jsonpArray.slice();
  for (var i = 0; i < jsonpArray.length; i++)
    webpackJsonpCallback(jsonpArray[i]);
  var parentJsonpFunction = oldJsonpFunction;

  // run deferred modules from other chunks
  checkDeferredModules();
})([]);
