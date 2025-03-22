"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../../node_modules/json5/dist/index.js
  var require_dist = __commonJS({
    "../../node_modules/json5/dist/index.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.JSON5 = factory();
      })(exports, function() {
        "use strict";
        function createCommonjsModule(fn, module2) {
          return module2 = { exports: {} }, fn(module2, module2.exports), module2.exports;
        }
        var _global = createCommonjsModule(function(module2) {
          var global = module2.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
          if (typeof __g == "number") {
            __g = global;
          }
        });
        var _core = createCommonjsModule(function(module2) {
          var core = module2.exports = { version: "2.6.5" };
          if (typeof __e == "number") {
            __e = core;
          }
        });
        var _core_1 = _core.version;
        var _isObject = function(it) {
          return typeof it === "object" ? it !== null : typeof it === "function";
        };
        var _anObject = function(it) {
          if (!_isObject(it)) {
            throw TypeError(it + " is not an object!");
          }
          return it;
        };
        var _fails = function(exec) {
          try {
            return !!exec();
          } catch (e) {
            return true;
          }
        };
        var _descriptors = !_fails(function() {
          return Object.defineProperty({}, "a", { get: function() {
            return 7;
          } }).a != 7;
        });
        var document2 = _global.document;
        var is = _isObject(document2) && _isObject(document2.createElement);
        var _domCreate = function(it) {
          return is ? document2.createElement(it) : {};
        };
        var _ie8DomDefine = !_descriptors && !_fails(function() {
          return Object.defineProperty(_domCreate("div"), "a", { get: function() {
            return 7;
          } }).a != 7;
        });
        var _toPrimitive = function(it, S) {
          if (!_isObject(it)) {
            return it;
          }
          var fn, val;
          if (S && typeof (fn = it.toString) == "function" && !_isObject(val = fn.call(it))) {
            return val;
          }
          if (typeof (fn = it.valueOf) == "function" && !_isObject(val = fn.call(it))) {
            return val;
          }
          if (!S && typeof (fn = it.toString) == "function" && !_isObject(val = fn.call(it))) {
            return val;
          }
          throw TypeError("Can't convert object to primitive value");
        };
        var dP = Object.defineProperty;
        var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
          _anObject(O);
          P = _toPrimitive(P, true);
          _anObject(Attributes);
          if (_ie8DomDefine) {
            try {
              return dP(O, P, Attributes);
            } catch (e) {
            }
          }
          if ("get" in Attributes || "set" in Attributes) {
            throw TypeError("Accessors not supported!");
          }
          if ("value" in Attributes) {
            O[P] = Attributes.value;
          }
          return O;
        };
        var _objectDp = {
          f
        };
        var _propertyDesc = function(bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value
          };
        };
        var _hide = _descriptors ? function(object, key2, value) {
          return _objectDp.f(object, key2, _propertyDesc(1, value));
        } : function(object, key2, value) {
          object[key2] = value;
          return object;
        };
        var hasOwnProperty = {}.hasOwnProperty;
        var _has = function(it, key2) {
          return hasOwnProperty.call(it, key2);
        };
        var id = 0;
        var px = Math.random();
        var _uid = function(key2) {
          return "Symbol(".concat(key2 === void 0 ? "" : key2, ")_", (++id + px).toString(36));
        };
        var _library = false;
        var _shared = createCommonjsModule(function(module2) {
          var SHARED = "__core-js_shared__";
          var store = _global[SHARED] || (_global[SHARED] = {});
          (module2.exports = function(key2, value) {
            return store[key2] || (store[key2] = value !== void 0 ? value : {});
          })("versions", []).push({
            version: _core.version,
            mode: _library ? "pure" : "global",
            copyright: "\xA9 2019 Denis Pushkarev (zloirock.ru)"
          });
        });
        var _functionToString = _shared("native-function-to-string", Function.toString);
        var _redefine = createCommonjsModule(function(module2) {
          var SRC = _uid("src");
          var TO_STRING = "toString";
          var TPL = ("" + _functionToString).split(TO_STRING);
          _core.inspectSource = function(it) {
            return _functionToString.call(it);
          };
          (module2.exports = function(O, key2, val, safe) {
            var isFunction = typeof val == "function";
            if (isFunction) {
              _has(val, "name") || _hide(val, "name", key2);
            }
            if (O[key2] === val) {
              return;
            }
            if (isFunction) {
              _has(val, SRC) || _hide(val, SRC, O[key2] ? "" + O[key2] : TPL.join(String(key2)));
            }
            if (O === _global) {
              O[key2] = val;
            } else if (!safe) {
              delete O[key2];
              _hide(O, key2, val);
            } else if (O[key2]) {
              O[key2] = val;
            } else {
              _hide(O, key2, val);
            }
          })(Function.prototype, TO_STRING, function toString() {
            return typeof this == "function" && this[SRC] || _functionToString.call(this);
          });
        });
        var _aFunction = function(it) {
          if (typeof it != "function") {
            throw TypeError(it + " is not a function!");
          }
          return it;
        };
        var _ctx = function(fn, that, length) {
          _aFunction(fn);
          if (that === void 0) {
            return fn;
          }
          switch (length) {
            case 1:
              return function(a) {
                return fn.call(that, a);
              };
            case 2:
              return function(a, b) {
                return fn.call(that, a, b);
              };
            case 3:
              return function(a, b, c2) {
                return fn.call(that, a, b, c2);
              };
          }
          return function() {
            return fn.apply(that, arguments);
          };
        };
        var PROTOTYPE = "prototype";
        var $export = function(type, name, source2) {
          var IS_FORCED = type & $export.F;
          var IS_GLOBAL = type & $export.G;
          var IS_STATIC = type & $export.S;
          var IS_PROTO = type & $export.P;
          var IS_BIND = type & $export.B;
          var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
          var exports2 = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
          var expProto = exports2[PROTOTYPE] || (exports2[PROTOTYPE] = {});
          var key2, own, out, exp;
          if (IS_GLOBAL) {
            source2 = name;
          }
          for (key2 in source2) {
            own = !IS_FORCED && target && target[key2] !== void 0;
            out = (own ? target : source2)[key2];
            exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == "function" ? _ctx(Function.call, out) : out;
            if (target) {
              _redefine(target, key2, out, type & $export.U);
            }
            if (exports2[key2] != out) {
              _hide(exports2, key2, exp);
            }
            if (IS_PROTO && expProto[key2] != out) {
              expProto[key2] = out;
            }
          }
        };
        _global.core = _core;
        $export.F = 1;
        $export.G = 2;
        $export.S = 4;
        $export.P = 8;
        $export.B = 16;
        $export.W = 32;
        $export.U = 64;
        $export.R = 128;
        var _export = $export;
        var ceil = Math.ceil;
        var floor = Math.floor;
        var _toInteger = function(it) {
          return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };
        var _defined = function(it) {
          if (it == void 0) {
            throw TypeError("Can't call method on  " + it);
          }
          return it;
        };
        var _stringAt = function(TO_STRING) {
          return function(that, pos2) {
            var s2 = String(_defined(that));
            var i2 = _toInteger(pos2);
            var l = s2.length;
            var a, b;
            if (i2 < 0 || i2 >= l) {
              return TO_STRING ? "" : void 0;
            }
            a = s2.charCodeAt(i2);
            return a < 55296 || a > 56319 || i2 + 1 === l || (b = s2.charCodeAt(i2 + 1)) < 56320 || b > 57343 ? TO_STRING ? s2.charAt(i2) : a : TO_STRING ? s2.slice(i2, i2 + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
          };
        };
        var $at = _stringAt(false);
        _export(_export.P, "String", {
          // 21.1.3.3 String.prototype.codePointAt(pos)
          codePointAt: function codePointAt2(pos2) {
            return $at(this, pos2);
          }
        });
        var codePointAt = _core.String.codePointAt;
        var max = Math.max;
        var min = Math.min;
        var _toAbsoluteIndex = function(index, length) {
          index = _toInteger(index);
          return index < 0 ? max(index + length, 0) : min(index, length);
        };
        var fromCharCode = String.fromCharCode;
        var $fromCodePoint = String.fromCodePoint;
        _export(_export.S + _export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), "String", {
          // 21.1.2.2 String.fromCodePoint(...codePoints)
          fromCodePoint: function fromCodePoint2(x) {
            var arguments$1 = arguments;
            var res = [];
            var aLen = arguments.length;
            var i2 = 0;
            var code;
            while (aLen > i2) {
              code = +arguments$1[i2++];
              if (_toAbsoluteIndex(code, 1114111) !== code) {
                throw RangeError(code + " is not a valid code point");
              }
              res.push(
                code < 65536 ? fromCharCode(code) : fromCharCode(((code -= 65536) >> 10) + 55296, code % 1024 + 56320)
              );
            }
            return res.join("");
          }
        });
        var fromCodePoint = _core.String.fromCodePoint;
        var Space_Separator = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/;
        var ID_Start = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/;
        var ID_Continue = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;
        var unicode = {
          Space_Separator,
          ID_Start,
          ID_Continue
        };
        var util = {
          isSpaceSeparator: function isSpaceSeparator(c2) {
            return typeof c2 === "string" && unicode.Space_Separator.test(c2);
          },
          isIdStartChar: function isIdStartChar(c2) {
            return typeof c2 === "string" && (c2 >= "a" && c2 <= "z" || c2 >= "A" && c2 <= "Z" || c2 === "$" || c2 === "_" || unicode.ID_Start.test(c2));
          },
          isIdContinueChar: function isIdContinueChar(c2) {
            return typeof c2 === "string" && (c2 >= "a" && c2 <= "z" || c2 >= "A" && c2 <= "Z" || c2 >= "0" && c2 <= "9" || c2 === "$" || c2 === "_" || c2 === "\u200C" || c2 === "\u200D" || unicode.ID_Continue.test(c2));
          },
          isDigit: function isDigit(c2) {
            return typeof c2 === "string" && /[0-9]/.test(c2);
          },
          isHexDigit: function isHexDigit(c2) {
            return typeof c2 === "string" && /[0-9A-Fa-f]/.test(c2);
          }
        };
        var source;
        var parseState;
        var stack;
        var pos;
        var line;
        var column;
        var token;
        var key;
        var root;
        var parse = function parse2(text, reviver) {
          source = String(text);
          parseState = "start";
          stack = [];
          pos = 0;
          line = 1;
          column = 0;
          token = void 0;
          key = void 0;
          root = void 0;
          do {
            token = lex();
            parseStates[parseState]();
          } while (token.type !== "eof");
          if (typeof reviver === "function") {
            return internalize({ "": root }, "", reviver);
          }
          return root;
        };
        function internalize(holder, name, reviver) {
          var value = holder[name];
          if (value != null && typeof value === "object") {
            if (Array.isArray(value)) {
              for (var i2 = 0; i2 < value.length; i2++) {
                var key2 = String(i2);
                var replacement = internalize(value, key2, reviver);
                if (replacement === void 0) {
                  delete value[key2];
                } else {
                  Object.defineProperty(value, key2, {
                    value: replacement,
                    writable: true,
                    enumerable: true,
                    configurable: true
                  });
                }
              }
            } else {
              for (var key$1 in value) {
                var replacement$1 = internalize(value, key$1, reviver);
                if (replacement$1 === void 0) {
                  delete value[key$1];
                } else {
                  Object.defineProperty(value, key$1, {
                    value: replacement$1,
                    writable: true,
                    enumerable: true,
                    configurable: true
                  });
                }
              }
            }
          }
          return reviver.call(holder, name, value);
        }
        var lexState;
        var buffer;
        var doubleQuote;
        var sign;
        var c;
        function lex() {
          lexState = "default";
          buffer = "";
          doubleQuote = false;
          sign = 1;
          for (; ; ) {
            c = peek();
            var token2 = lexStates[lexState]();
            if (token2) {
              return token2;
            }
          }
        }
        function peek() {
          if (source[pos]) {
            return String.fromCodePoint(source.codePointAt(pos));
          }
        }
        function read() {
          var c2 = peek();
          if (c2 === "\n") {
            line++;
            column = 0;
          } else if (c2) {
            column += c2.length;
          } else {
            column++;
          }
          if (c2) {
            pos += c2.length;
          }
          return c2;
        }
        var lexStates = {
          default: function default$1() {
            switch (c) {
              case "	":
              case "\v":
              case "\f":
              case " ":
              case "\xA0":
              case "\uFEFF":
              case "\n":
              case "\r":
              case "\u2028":
              case "\u2029":
                read();
                return;
              case "/":
                read();
                lexState = "comment";
                return;
              case void 0:
                read();
                return newToken("eof");
            }
            if (util.isSpaceSeparator(c)) {
              read();
              return;
            }
            return lexStates[parseState]();
          },
          comment: function comment() {
            switch (c) {
              case "*":
                read();
                lexState = "multiLineComment";
                return;
              case "/":
                read();
                lexState = "singleLineComment";
                return;
            }
            throw invalidChar(read());
          },
          multiLineComment: function multiLineComment() {
            switch (c) {
              case "*":
                read();
                lexState = "multiLineCommentAsterisk";
                return;
              case void 0:
                throw invalidChar(read());
            }
            read();
          },
          multiLineCommentAsterisk: function multiLineCommentAsterisk() {
            switch (c) {
              case "*":
                read();
                return;
              case "/":
                read();
                lexState = "default";
                return;
              case void 0:
                throw invalidChar(read());
            }
            read();
            lexState = "multiLineComment";
          },
          singleLineComment: function singleLineComment() {
            switch (c) {
              case "\n":
              case "\r":
              case "\u2028":
              case "\u2029":
                read();
                lexState = "default";
                return;
              case void 0:
                read();
                return newToken("eof");
            }
            read();
          },
          value: function value() {
            switch (c) {
              case "{":
              case "[":
                return newToken("punctuator", read());
              case "n":
                read();
                literal("ull");
                return newToken("null", null);
              case "t":
                read();
                literal("rue");
                return newToken("boolean", true);
              case "f":
                read();
                literal("alse");
                return newToken("boolean", false);
              case "-":
              case "+":
                if (read() === "-") {
                  sign = -1;
                }
                lexState = "sign";
                return;
              case ".":
                buffer = read();
                lexState = "decimalPointLeading";
                return;
              case "0":
                buffer = read();
                lexState = "zero";
                return;
              case "1":
              case "2":
              case "3":
              case "4":
              case "5":
              case "6":
              case "7":
              case "8":
              case "9":
                buffer = read();
                lexState = "decimalInteger";
                return;
              case "I":
                read();
                literal("nfinity");
                return newToken("numeric", Infinity);
              case "N":
                read();
                literal("aN");
                return newToken("numeric", NaN);
              case '"':
              case "'":
                doubleQuote = read() === '"';
                buffer = "";
                lexState = "string";
                return;
            }
            throw invalidChar(read());
          },
          identifierNameStartEscape: function identifierNameStartEscape() {
            if (c !== "u") {
              throw invalidChar(read());
            }
            read();
            var u = unicodeEscape();
            switch (u) {
              case "$":
              case "_":
                break;
              default:
                if (!util.isIdStartChar(u)) {
                  throw invalidIdentifier();
                }
                break;
            }
            buffer += u;
            lexState = "identifierName";
          },
          identifierName: function identifierName() {
            switch (c) {
              case "$":
              case "_":
              case "\u200C":
              case "\u200D":
                buffer += read();
                return;
              case "\\":
                read();
                lexState = "identifierNameEscape";
                return;
            }
            if (util.isIdContinueChar(c)) {
              buffer += read();
              return;
            }
            return newToken("identifier", buffer);
          },
          identifierNameEscape: function identifierNameEscape() {
            if (c !== "u") {
              throw invalidChar(read());
            }
            read();
            var u = unicodeEscape();
            switch (u) {
              case "$":
              case "_":
              case "\u200C":
              case "\u200D":
                break;
              default:
                if (!util.isIdContinueChar(u)) {
                  throw invalidIdentifier();
                }
                break;
            }
            buffer += u;
            lexState = "identifierName";
          },
          sign: function sign$1() {
            switch (c) {
              case ".":
                buffer = read();
                lexState = "decimalPointLeading";
                return;
              case "0":
                buffer = read();
                lexState = "zero";
                return;
              case "1":
              case "2":
              case "3":
              case "4":
              case "5":
              case "6":
              case "7":
              case "8":
              case "9":
                buffer = read();
                lexState = "decimalInteger";
                return;
              case "I":
                read();
                literal("nfinity");
                return newToken("numeric", sign * Infinity);
              case "N":
                read();
                literal("aN");
                return newToken("numeric", NaN);
            }
            throw invalidChar(read());
          },
          zero: function zero() {
            switch (c) {
              case ".":
                buffer += read();
                lexState = "decimalPoint";
                return;
              case "e":
              case "E":
                buffer += read();
                lexState = "decimalExponent";
                return;
              case "x":
              case "X":
                buffer += read();
                lexState = "hexadecimal";
                return;
            }
            return newToken("numeric", sign * 0);
          },
          decimalInteger: function decimalInteger() {
            switch (c) {
              case ".":
                buffer += read();
                lexState = "decimalPoint";
                return;
              case "e":
              case "E":
                buffer += read();
                lexState = "decimalExponent";
                return;
            }
            if (util.isDigit(c)) {
              buffer += read();
              return;
            }
            return newToken("numeric", sign * Number(buffer));
          },
          decimalPointLeading: function decimalPointLeading() {
            if (util.isDigit(c)) {
              buffer += read();
              lexState = "decimalFraction";
              return;
            }
            throw invalidChar(read());
          },
          decimalPoint: function decimalPoint() {
            switch (c) {
              case "e":
              case "E":
                buffer += read();
                lexState = "decimalExponent";
                return;
            }
            if (util.isDigit(c)) {
              buffer += read();
              lexState = "decimalFraction";
              return;
            }
            return newToken("numeric", sign * Number(buffer));
          },
          decimalFraction: function decimalFraction() {
            switch (c) {
              case "e":
              case "E":
                buffer += read();
                lexState = "decimalExponent";
                return;
            }
            if (util.isDigit(c)) {
              buffer += read();
              return;
            }
            return newToken("numeric", sign * Number(buffer));
          },
          decimalExponent: function decimalExponent() {
            switch (c) {
              case "+":
              case "-":
                buffer += read();
                lexState = "decimalExponentSign";
                return;
            }
            if (util.isDigit(c)) {
              buffer += read();
              lexState = "decimalExponentInteger";
              return;
            }
            throw invalidChar(read());
          },
          decimalExponentSign: function decimalExponentSign() {
            if (util.isDigit(c)) {
              buffer += read();
              lexState = "decimalExponentInteger";
              return;
            }
            throw invalidChar(read());
          },
          decimalExponentInteger: function decimalExponentInteger() {
            if (util.isDigit(c)) {
              buffer += read();
              return;
            }
            return newToken("numeric", sign * Number(buffer));
          },
          hexadecimal: function hexadecimal() {
            if (util.isHexDigit(c)) {
              buffer += read();
              lexState = "hexadecimalInteger";
              return;
            }
            throw invalidChar(read());
          },
          hexadecimalInteger: function hexadecimalInteger() {
            if (util.isHexDigit(c)) {
              buffer += read();
              return;
            }
            return newToken("numeric", sign * Number(buffer));
          },
          string: function string() {
            switch (c) {
              case "\\":
                read();
                buffer += escape();
                return;
              case '"':
                if (doubleQuote) {
                  read();
                  return newToken("string", buffer);
                }
                buffer += read();
                return;
              case "'":
                if (!doubleQuote) {
                  read();
                  return newToken("string", buffer);
                }
                buffer += read();
                return;
              case "\n":
              case "\r":
                throw invalidChar(read());
              case "\u2028":
              case "\u2029":
                separatorChar(c);
                break;
              case void 0:
                throw invalidChar(read());
            }
            buffer += read();
          },
          start: function start() {
            switch (c) {
              case "{":
              case "[":
                return newToken("punctuator", read());
            }
            lexState = "value";
          },
          beforePropertyName: function beforePropertyName() {
            switch (c) {
              case "$":
              case "_":
                buffer = read();
                lexState = "identifierName";
                return;
              case "\\":
                read();
                lexState = "identifierNameStartEscape";
                return;
              case "}":
                return newToken("punctuator", read());
              case '"':
              case "'":
                doubleQuote = read() === '"';
                lexState = "string";
                return;
            }
            if (util.isIdStartChar(c)) {
              buffer += read();
              lexState = "identifierName";
              return;
            }
            throw invalidChar(read());
          },
          afterPropertyName: function afterPropertyName() {
            if (c === ":") {
              return newToken("punctuator", read());
            }
            throw invalidChar(read());
          },
          beforePropertyValue: function beforePropertyValue() {
            lexState = "value";
          },
          afterPropertyValue: function afterPropertyValue() {
            switch (c) {
              case ",":
              case "}":
                return newToken("punctuator", read());
            }
            throw invalidChar(read());
          },
          beforeArrayValue: function beforeArrayValue() {
            if (c === "]") {
              return newToken("punctuator", read());
            }
            lexState = "value";
          },
          afterArrayValue: function afterArrayValue() {
            switch (c) {
              case ",":
              case "]":
                return newToken("punctuator", read());
            }
            throw invalidChar(read());
          },
          end: function end() {
            throw invalidChar(read());
          }
        };
        function newToken(type, value) {
          return {
            type,
            value,
            line,
            column
          };
        }
        function literal(s2) {
          for (var i2 = 0, list = s2; i2 < list.length; i2 += 1) {
            var c2 = list[i2];
            var p = peek();
            if (p !== c2) {
              throw invalidChar(read());
            }
            read();
          }
        }
        function escape() {
          var c2 = peek();
          switch (c2) {
            case "b":
              read();
              return "\b";
            case "f":
              read();
              return "\f";
            case "n":
              read();
              return "\n";
            case "r":
              read();
              return "\r";
            case "t":
              read();
              return "	";
            case "v":
              read();
              return "\v";
            case "0":
              read();
              if (util.isDigit(peek())) {
                throw invalidChar(read());
              }
              return "\0";
            case "x":
              read();
              return hexEscape();
            case "u":
              read();
              return unicodeEscape();
            case "\n":
            case "\u2028":
            case "\u2029":
              read();
              return "";
            case "\r":
              read();
              if (peek() === "\n") {
                read();
              }
              return "";
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              throw invalidChar(read());
            case void 0:
              throw invalidChar(read());
          }
          return read();
        }
        function hexEscape() {
          var buffer2 = "";
          var c2 = peek();
          if (!util.isHexDigit(c2)) {
            throw invalidChar(read());
          }
          buffer2 += read();
          c2 = peek();
          if (!util.isHexDigit(c2)) {
            throw invalidChar(read());
          }
          buffer2 += read();
          return String.fromCodePoint(parseInt(buffer2, 16));
        }
        function unicodeEscape() {
          var buffer2 = "";
          var count = 4;
          while (count-- > 0) {
            var c2 = peek();
            if (!util.isHexDigit(c2)) {
              throw invalidChar(read());
            }
            buffer2 += read();
          }
          return String.fromCodePoint(parseInt(buffer2, 16));
        }
        var parseStates = {
          start: function start() {
            if (token.type === "eof") {
              throw invalidEOF();
            }
            push();
          },
          beforePropertyName: function beforePropertyName() {
            switch (token.type) {
              case "identifier":
              case "string":
                key = token.value;
                parseState = "afterPropertyName";
                return;
              case "punctuator":
                pop();
                return;
              case "eof":
                throw invalidEOF();
            }
          },
          afterPropertyName: function afterPropertyName() {
            if (token.type === "eof") {
              throw invalidEOF();
            }
            parseState = "beforePropertyValue";
          },
          beforePropertyValue: function beforePropertyValue() {
            if (token.type === "eof") {
              throw invalidEOF();
            }
            push();
          },
          beforeArrayValue: function beforeArrayValue() {
            if (token.type === "eof") {
              throw invalidEOF();
            }
            if (token.type === "punctuator" && token.value === "]") {
              pop();
              return;
            }
            push();
          },
          afterPropertyValue: function afterPropertyValue() {
            if (token.type === "eof") {
              throw invalidEOF();
            }
            switch (token.value) {
              case ",":
                parseState = "beforePropertyName";
                return;
              case "}":
                pop();
            }
          },
          afterArrayValue: function afterArrayValue() {
            if (token.type === "eof") {
              throw invalidEOF();
            }
            switch (token.value) {
              case ",":
                parseState = "beforeArrayValue";
                return;
              case "]":
                pop();
            }
          },
          end: function end() {
          }
        };
        function push() {
          var value;
          switch (token.type) {
            case "punctuator":
              switch (token.value) {
                case "{":
                  value = {};
                  break;
                case "[":
                  value = [];
                  break;
              }
              break;
            case "null":
            case "boolean":
            case "numeric":
            case "string":
              value = token.value;
              break;
          }
          if (root === void 0) {
            root = value;
          } else {
            var parent = stack[stack.length - 1];
            if (Array.isArray(parent)) {
              parent.push(value);
            } else {
              Object.defineProperty(parent, key, {
                value,
                writable: true,
                enumerable: true,
                configurable: true
              });
            }
          }
          if (value !== null && typeof value === "object") {
            stack.push(value);
            if (Array.isArray(value)) {
              parseState = "beforeArrayValue";
            } else {
              parseState = "beforePropertyName";
            }
          } else {
            var current = stack[stack.length - 1];
            if (current == null) {
              parseState = "end";
            } else if (Array.isArray(current)) {
              parseState = "afterArrayValue";
            } else {
              parseState = "afterPropertyValue";
            }
          }
        }
        function pop() {
          stack.pop();
          var current = stack[stack.length - 1];
          if (current == null) {
            parseState = "end";
          } else if (Array.isArray(current)) {
            parseState = "afterArrayValue";
          } else {
            parseState = "afterPropertyValue";
          }
        }
        function invalidChar(c2) {
          if (c2 === void 0) {
            return syntaxError("JSON5: invalid end of input at " + line + ":" + column);
          }
          return syntaxError("JSON5: invalid character '" + formatChar(c2) + "' at " + line + ":" + column);
        }
        function invalidEOF() {
          return syntaxError("JSON5: invalid end of input at " + line + ":" + column);
        }
        function invalidIdentifier() {
          column -= 5;
          return syntaxError("JSON5: invalid identifier character at " + line + ":" + column);
        }
        function separatorChar(c2) {
          console.warn("JSON5: '" + formatChar(c2) + "' in strings is not valid ECMAScript; consider escaping");
        }
        function formatChar(c2) {
          var replacements = {
            "'": "\\'",
            '"': '\\"',
            "\\": "\\\\",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "	": "\\t",
            "\v": "\\v",
            "\0": "\\0",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029"
          };
          if (replacements[c2]) {
            return replacements[c2];
          }
          if (c2 < " ") {
            var hexString = c2.charCodeAt(0).toString(16);
            return "\\x" + ("00" + hexString).substring(hexString.length);
          }
          return c2;
        }
        function syntaxError(message) {
          var err = new SyntaxError(message);
          err.lineNumber = line;
          err.columnNumber = column;
          return err;
        }
        var stringify = function stringify2(value, replacer, space) {
          var stack2 = [];
          var indent = "";
          var propertyList;
          var replacerFunc;
          var gap = "";
          var quote;
          if (replacer != null && typeof replacer === "object" && !Array.isArray(replacer)) {
            space = replacer.space;
            quote = replacer.quote;
            replacer = replacer.replacer;
          }
          if (typeof replacer === "function") {
            replacerFunc = replacer;
          } else if (Array.isArray(replacer)) {
            propertyList = [];
            for (var i2 = 0, list = replacer; i2 < list.length; i2 += 1) {
              var v = list[i2];
              var item = void 0;
              if (typeof v === "string") {
                item = v;
              } else if (typeof v === "number" || v instanceof String || v instanceof Number) {
                item = String(v);
              }
              if (item !== void 0 && propertyList.indexOf(item) < 0) {
                propertyList.push(item);
              }
            }
          }
          if (space instanceof Number) {
            space = Number(space);
          } else if (space instanceof String) {
            space = String(space);
          }
          if (typeof space === "number") {
            if (space > 0) {
              space = Math.min(10, Math.floor(space));
              gap = "          ".substr(0, space);
            }
          } else if (typeof space === "string") {
            gap = space.substr(0, 10);
          }
          return serializeProperty("", { "": value });
          function serializeProperty(key2, holder) {
            var value2 = holder[key2];
            if (value2 != null) {
              if (typeof value2.toJSON5 === "function") {
                value2 = value2.toJSON5(key2);
              } else if (typeof value2.toJSON === "function") {
                value2 = value2.toJSON(key2);
              }
            }
            if (replacerFunc) {
              value2 = replacerFunc.call(holder, key2, value2);
            }
            if (value2 instanceof Number) {
              value2 = Number(value2);
            } else if (value2 instanceof String) {
              value2 = String(value2);
            } else if (value2 instanceof Boolean) {
              value2 = value2.valueOf();
            }
            switch (value2) {
              case null:
                return "null";
              case true:
                return "true";
              case false:
                return "false";
            }
            if (typeof value2 === "string") {
              return quoteString(value2, false);
            }
            if (typeof value2 === "number") {
              return String(value2);
            }
            if (typeof value2 === "object") {
              return Array.isArray(value2) ? serializeArray(value2) : serializeObject(value2);
            }
            return void 0;
          }
          function quoteString(value2) {
            var quotes = {
              "'": 0.1,
              '"': 0.2
            };
            var replacements = {
              "'": "\\'",
              '"': '\\"',
              "\\": "\\\\",
              "\b": "\\b",
              "\f": "\\f",
              "\n": "\\n",
              "\r": "\\r",
              "	": "\\t",
              "\v": "\\v",
              "\0": "\\0",
              "\u2028": "\\u2028",
              "\u2029": "\\u2029"
            };
            var product = "";
            for (var i3 = 0; i3 < value2.length; i3++) {
              var c2 = value2[i3];
              switch (c2) {
                case "'":
                case '"':
                  quotes[c2]++;
                  product += c2;
                  continue;
                case "\0":
                  if (util.isDigit(value2[i3 + 1])) {
                    product += "\\x00";
                    continue;
                  }
              }
              if (replacements[c2]) {
                product += replacements[c2];
                continue;
              }
              if (c2 < " ") {
                var hexString = c2.charCodeAt(0).toString(16);
                product += "\\x" + ("00" + hexString).substring(hexString.length);
                continue;
              }
              product += c2;
            }
            var quoteChar = quote || Object.keys(quotes).reduce(function(a, b) {
              return quotes[a] < quotes[b] ? a : b;
            });
            product = product.replace(new RegExp(quoteChar, "g"), replacements[quoteChar]);
            return quoteChar + product + quoteChar;
          }
          function serializeObject(value2) {
            if (stack2.indexOf(value2) >= 0) {
              throw TypeError("Converting circular structure to JSON5");
            }
            stack2.push(value2);
            var stepback = indent;
            indent = indent + gap;
            var keys = propertyList || Object.keys(value2);
            var partial = [];
            for (var i3 = 0, list2 = keys; i3 < list2.length; i3 += 1) {
              var key2 = list2[i3];
              var propertyString = serializeProperty(key2, value2);
              if (propertyString !== void 0) {
                var member = serializeKey(key2) + ":";
                if (gap !== "") {
                  member += " ";
                }
                member += propertyString;
                partial.push(member);
              }
            }
            var final;
            if (partial.length === 0) {
              final = "{}";
            } else {
              var properties;
              if (gap === "") {
                properties = partial.join(",");
                final = "{" + properties + "}";
              } else {
                var separator = ",\n" + indent;
                properties = partial.join(separator);
                final = "{\n" + indent + properties + ",\n" + stepback + "}";
              }
            }
            stack2.pop();
            indent = stepback;
            return final;
          }
          function serializeKey(key2) {
            if (key2.length === 0) {
              return quoteString(key2, true);
            }
            var firstChar = String.fromCodePoint(key2.codePointAt(0));
            if (!util.isIdStartChar(firstChar)) {
              return quoteString(key2, true);
            }
            for (var i3 = firstChar.length; i3 < key2.length; i3++) {
              if (!util.isIdContinueChar(String.fromCodePoint(key2.codePointAt(i3)))) {
                return quoteString(key2, true);
              }
            }
            return key2;
          }
          function serializeArray(value2) {
            if (stack2.indexOf(value2) >= 0) {
              throw TypeError("Converting circular structure to JSON5");
            }
            stack2.push(value2);
            var stepback = indent;
            indent = indent + gap;
            var partial = [];
            for (var i3 = 0; i3 < value2.length; i3++) {
              var propertyString = serializeProperty(String(i3), value2);
              partial.push(propertyString !== void 0 ? propertyString : "null");
            }
            var final;
            if (partial.length === 0) {
              final = "[]";
            } else {
              if (gap === "") {
                var properties = partial.join(",");
                final = "[" + properties + "]";
              } else {
                var separator = ",\n" + indent;
                var properties$1 = partial.join(separator);
                final = "[\n" + indent + properties$1 + ",\n" + stepback + "]";
              }
            }
            stack2.pop();
            indent = stepback;
            return final;
          }
        };
        var JSON5 = {
          parse,
          stringify
        };
        var lib = JSON5;
        var es5 = lib;
        return es5;
      });
    }
  });

  // ../../node_modules/diff-match-patch/index.js
  var require_diff_match_patch = __commonJS({
    "../../node_modules/diff-match-patch/index.js"(exports, module) {
      var diff_match_patch = function() {
        this.Diff_Timeout = 1;
        this.Diff_EditCost = 4;
        this.Match_Threshold = 0.5;
        this.Match_Distance = 1e3;
        this.Patch_DeleteThreshold = 0.5;
        this.Patch_Margin = 4;
        this.Match_MaxBits = 32;
      };
      var DIFF_DELETE = -1;
      var DIFF_INSERT = 1;
      var DIFF_EQUAL = 0;
      diff_match_patch.Diff = function(op, text) {
        return [op, text];
      };
      diff_match_patch.prototype.diff_main = function(text1, text2, opt_checklines, opt_deadline) {
        if (typeof opt_deadline == "undefined") {
          if (this.Diff_Timeout <= 0) {
            opt_deadline = Number.MAX_VALUE;
          } else {
            opt_deadline = (/* @__PURE__ */ new Date()).getTime() + this.Diff_Timeout * 1e3;
          }
        }
        var deadline = opt_deadline;
        if (text1 == null || text2 == null) {
          throw new Error("Null input. (diff_main)");
        }
        if (text1 == text2) {
          if (text1) {
            return [new diff_match_patch.Diff(DIFF_EQUAL, text1)];
          }
          return [];
        }
        if (typeof opt_checklines == "undefined") {
          opt_checklines = true;
        }
        var checklines = opt_checklines;
        var commonlength = this.diff_commonPrefix(text1, text2);
        var commonprefix = text1.substring(0, commonlength);
        text1 = text1.substring(commonlength);
        text2 = text2.substring(commonlength);
        commonlength = this.diff_commonSuffix(text1, text2);
        var commonsuffix = text1.substring(text1.length - commonlength);
        text1 = text1.substring(0, text1.length - commonlength);
        text2 = text2.substring(0, text2.length - commonlength);
        var diffs = this.diff_compute_(text1, text2, checklines, deadline);
        if (commonprefix) {
          diffs.unshift(new diff_match_patch.Diff(DIFF_EQUAL, commonprefix));
        }
        if (commonsuffix) {
          diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, commonsuffix));
        }
        this.diff_cleanupMerge(diffs);
        return diffs;
      };
      diff_match_patch.prototype.diff_compute_ = function(text1, text2, checklines, deadline) {
        var diffs;
        if (!text1) {
          return [new diff_match_patch.Diff(DIFF_INSERT, text2)];
        }
        if (!text2) {
          return [new diff_match_patch.Diff(DIFF_DELETE, text1)];
        }
        var longtext = text1.length > text2.length ? text1 : text2;
        var shorttext = text1.length > text2.length ? text2 : text1;
        var i2 = longtext.indexOf(shorttext);
        if (i2 != -1) {
          diffs = [
            new diff_match_patch.Diff(DIFF_INSERT, longtext.substring(0, i2)),
            new diff_match_patch.Diff(DIFF_EQUAL, shorttext),
            new diff_match_patch.Diff(
              DIFF_INSERT,
              longtext.substring(i2 + shorttext.length)
            )
          ];
          if (text1.length > text2.length) {
            diffs[0][0] = diffs[2][0] = DIFF_DELETE;
          }
          return diffs;
        }
        if (shorttext.length == 1) {
          return [
            new diff_match_patch.Diff(DIFF_DELETE, text1),
            new diff_match_patch.Diff(DIFF_INSERT, text2)
          ];
        }
        var hm = this.diff_halfMatch_(text1, text2);
        if (hm) {
          var text1_a = hm[0];
          var text1_b = hm[1];
          var text2_a = hm[2];
          var text2_b = hm[3];
          var mid_common = hm[4];
          var diffs_a = this.diff_main(text1_a, text2_a, checklines, deadline);
          var diffs_b = this.diff_main(text1_b, text2_b, checklines, deadline);
          return diffs_a.concat(
            [new diff_match_patch.Diff(DIFF_EQUAL, mid_common)],
            diffs_b
          );
        }
        if (checklines && text1.length > 100 && text2.length > 100) {
          return this.diff_lineMode_(text1, text2, deadline);
        }
        return this.diff_bisect_(text1, text2, deadline);
      };
      diff_match_patch.prototype.diff_lineMode_ = function(text1, text2, deadline) {
        var a = this.diff_linesToChars_(text1, text2);
        text1 = a.chars1;
        text2 = a.chars2;
        var linearray = a.lineArray;
        var diffs = this.diff_main(text1, text2, false, deadline);
        this.diff_charsToLines_(diffs, linearray);
        this.diff_cleanupSemantic(diffs);
        diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, ""));
        var pointer = 0;
        var count_delete = 0;
        var count_insert = 0;
        var text_delete = "";
        var text_insert = "";
        while (pointer < diffs.length) {
          switch (diffs[pointer][0]) {
            case DIFF_INSERT:
              count_insert++;
              text_insert += diffs[pointer][1];
              break;
            case DIFF_DELETE:
              count_delete++;
              text_delete += diffs[pointer][1];
              break;
            case DIFF_EQUAL:
              if (count_delete >= 1 && count_insert >= 1) {
                diffs.splice(
                  pointer - count_delete - count_insert,
                  count_delete + count_insert
                );
                pointer = pointer - count_delete - count_insert;
                var subDiff = this.diff_main(text_delete, text_insert, false, deadline);
                for (var j = subDiff.length - 1; j >= 0; j--) {
                  diffs.splice(pointer, 0, subDiff[j]);
                }
                pointer = pointer + subDiff.length;
              }
              count_insert = 0;
              count_delete = 0;
              text_delete = "";
              text_insert = "";
              break;
          }
          pointer++;
        }
        diffs.pop();
        return diffs;
      };
      diff_match_patch.prototype.diff_bisect_ = function(text1, text2, deadline) {
        var text1_length = text1.length;
        var text2_length = text2.length;
        var max_d = Math.ceil((text1_length + text2_length) / 2);
        var v_offset = max_d;
        var v_length = 2 * max_d;
        var v1 = new Array(v_length);
        var v2 = new Array(v_length);
        for (var x = 0; x < v_length; x++) {
          v1[x] = -1;
          v2[x] = -1;
        }
        v1[v_offset + 1] = 0;
        v2[v_offset + 1] = 0;
        var delta = text1_length - text2_length;
        var front = delta % 2 != 0;
        var k1start = 0;
        var k1end = 0;
        var k2start = 0;
        var k2end = 0;
        for (var d = 0; d < max_d; d++) {
          if ((/* @__PURE__ */ new Date()).getTime() > deadline) {
            break;
          }
          for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
            var k1_offset = v_offset + k1;
            var x1;
            if (k1 == -d || k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1]) {
              x1 = v1[k1_offset + 1];
            } else {
              x1 = v1[k1_offset - 1] + 1;
            }
            var y1 = x1 - k1;
            while (x1 < text1_length && y1 < text2_length && text1.charAt(x1) == text2.charAt(y1)) {
              x1++;
              y1++;
            }
            v1[k1_offset] = x1;
            if (x1 > text1_length) {
              k1end += 2;
            } else if (y1 > text2_length) {
              k1start += 2;
            } else if (front) {
              var k2_offset = v_offset + delta - k1;
              if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
                var x2 = text1_length - v2[k2_offset];
                if (x1 >= x2) {
                  return this.diff_bisectSplit_(text1, text2, x1, y1, deadline);
                }
              }
            }
          }
          for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
            var k2_offset = v_offset + k2;
            var x2;
            if (k2 == -d || k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1]) {
              x2 = v2[k2_offset + 1];
            } else {
              x2 = v2[k2_offset - 1] + 1;
            }
            var y2 = x2 - k2;
            while (x2 < text1_length && y2 < text2_length && text1.charAt(text1_length - x2 - 1) == text2.charAt(text2_length - y2 - 1)) {
              x2++;
              y2++;
            }
            v2[k2_offset] = x2;
            if (x2 > text1_length) {
              k2end += 2;
            } else if (y2 > text2_length) {
              k2start += 2;
            } else if (!front) {
              var k1_offset = v_offset + delta - k2;
              if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
                var x1 = v1[k1_offset];
                var y1 = v_offset + x1 - k1_offset;
                x2 = text1_length - x2;
                if (x1 >= x2) {
                  return this.diff_bisectSplit_(text1, text2, x1, y1, deadline);
                }
              }
            }
          }
        }
        return [
          new diff_match_patch.Diff(DIFF_DELETE, text1),
          new diff_match_patch.Diff(DIFF_INSERT, text2)
        ];
      };
      diff_match_patch.prototype.diff_bisectSplit_ = function(text1, text2, x, y, deadline) {
        var text1a = text1.substring(0, x);
        var text2a = text2.substring(0, y);
        var text1b = text1.substring(x);
        var text2b = text2.substring(y);
        var diffs = this.diff_main(text1a, text2a, false, deadline);
        var diffsb = this.diff_main(text1b, text2b, false, deadline);
        return diffs.concat(diffsb);
      };
      diff_match_patch.prototype.diff_linesToChars_ = function(text1, text2) {
        var lineArray = [];
        var lineHash = {};
        lineArray[0] = "";
        function diff_linesToCharsMunge_(text) {
          var chars = "";
          var lineStart = 0;
          var lineEnd = -1;
          var lineArrayLength = lineArray.length;
          while (lineEnd < text.length - 1) {
            lineEnd = text.indexOf("\n", lineStart);
            if (lineEnd == -1) {
              lineEnd = text.length - 1;
            }
            var line = text.substring(lineStart, lineEnd + 1);
            if (lineHash.hasOwnProperty ? lineHash.hasOwnProperty(line) : lineHash[line] !== void 0) {
              chars += String.fromCharCode(lineHash[line]);
            } else {
              if (lineArrayLength == maxLines) {
                line = text.substring(lineStart);
                lineEnd = text.length;
              }
              chars += String.fromCharCode(lineArrayLength);
              lineHash[line] = lineArrayLength;
              lineArray[lineArrayLength++] = line;
            }
            lineStart = lineEnd + 1;
          }
          return chars;
        }
        var maxLines = 4e4;
        var chars1 = diff_linesToCharsMunge_(text1);
        maxLines = 65535;
        var chars2 = diff_linesToCharsMunge_(text2);
        return { chars1, chars2, lineArray };
      };
      diff_match_patch.prototype.diff_charsToLines_ = function(diffs, lineArray) {
        for (var i2 = 0; i2 < diffs.length; i2++) {
          var chars = diffs[i2][1];
          var text = [];
          for (var j = 0; j < chars.length; j++) {
            text[j] = lineArray[chars.charCodeAt(j)];
          }
          diffs[i2][1] = text.join("");
        }
      };
      diff_match_patch.prototype.diff_commonPrefix = function(text1, text2) {
        if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
          return 0;
        }
        var pointermin = 0;
        var pointermax = Math.min(text1.length, text2.length);
        var pointermid = pointermax;
        var pointerstart = 0;
        while (pointermin < pointermid) {
          if (text1.substring(pointerstart, pointermid) == text2.substring(pointerstart, pointermid)) {
            pointermin = pointermid;
            pointerstart = pointermin;
          } else {
            pointermax = pointermid;
          }
          pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
        }
        return pointermid;
      };
      diff_match_patch.prototype.diff_commonSuffix = function(text1, text2) {
        if (!text1 || !text2 || text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
          return 0;
        }
        var pointermin = 0;
        var pointermax = Math.min(text1.length, text2.length);
        var pointermid = pointermax;
        var pointerend = 0;
        while (pointermin < pointermid) {
          if (text1.substring(text1.length - pointermid, text1.length - pointerend) == text2.substring(text2.length - pointermid, text2.length - pointerend)) {
            pointermin = pointermid;
            pointerend = pointermin;
          } else {
            pointermax = pointermid;
          }
          pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
        }
        return pointermid;
      };
      diff_match_patch.prototype.diff_commonOverlap_ = function(text1, text2) {
        var text1_length = text1.length;
        var text2_length = text2.length;
        if (text1_length == 0 || text2_length == 0) {
          return 0;
        }
        if (text1_length > text2_length) {
          text1 = text1.substring(text1_length - text2_length);
        } else if (text1_length < text2_length) {
          text2 = text2.substring(0, text1_length);
        }
        var text_length = Math.min(text1_length, text2_length);
        if (text1 == text2) {
          return text_length;
        }
        var best = 0;
        var length = 1;
        while (true) {
          var pattern = text1.substring(text_length - length);
          var found = text2.indexOf(pattern);
          if (found == -1) {
            return best;
          }
          length += found;
          if (found == 0 || text1.substring(text_length - length) == text2.substring(0, length)) {
            best = length;
            length++;
          }
        }
      };
      diff_match_patch.prototype.diff_halfMatch_ = function(text1, text2) {
        if (this.Diff_Timeout <= 0) {
          return null;
        }
        var longtext = text1.length > text2.length ? text1 : text2;
        var shorttext = text1.length > text2.length ? text2 : text1;
        if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
          return null;
        }
        var dmp = this;
        function diff_halfMatchI_(longtext2, shorttext2, i2) {
          var seed = longtext2.substring(i2, i2 + Math.floor(longtext2.length / 4));
          var j = -1;
          var best_common = "";
          var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
          while ((j = shorttext2.indexOf(seed, j + 1)) != -1) {
            var prefixLength = dmp.diff_commonPrefix(
              longtext2.substring(i2),
              shorttext2.substring(j)
            );
            var suffixLength = dmp.diff_commonSuffix(
              longtext2.substring(0, i2),
              shorttext2.substring(0, j)
            );
            if (best_common.length < suffixLength + prefixLength) {
              best_common = shorttext2.substring(j - suffixLength, j) + shorttext2.substring(j, j + prefixLength);
              best_longtext_a = longtext2.substring(0, i2 - suffixLength);
              best_longtext_b = longtext2.substring(i2 + prefixLength);
              best_shorttext_a = shorttext2.substring(0, j - suffixLength);
              best_shorttext_b = shorttext2.substring(j + prefixLength);
            }
          }
          if (best_common.length * 2 >= longtext2.length) {
            return [
              best_longtext_a,
              best_longtext_b,
              best_shorttext_a,
              best_shorttext_b,
              best_common
            ];
          } else {
            return null;
          }
        }
        var hm1 = diff_halfMatchI_(
          longtext,
          shorttext,
          Math.ceil(longtext.length / 4)
        );
        var hm2 = diff_halfMatchI_(
          longtext,
          shorttext,
          Math.ceil(longtext.length / 2)
        );
        var hm;
        if (!hm1 && !hm2) {
          return null;
        } else if (!hm2) {
          hm = hm1;
        } else if (!hm1) {
          hm = hm2;
        } else {
          hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
        }
        var text1_a, text1_b, text2_a, text2_b;
        if (text1.length > text2.length) {
          text1_a = hm[0];
          text1_b = hm[1];
          text2_a = hm[2];
          text2_b = hm[3];
        } else {
          text2_a = hm[0];
          text2_b = hm[1];
          text1_a = hm[2];
          text1_b = hm[3];
        }
        var mid_common = hm[4];
        return [text1_a, text1_b, text2_a, text2_b, mid_common];
      };
      diff_match_patch.prototype.diff_cleanupSemantic = function(diffs) {
        var changes = false;
        var equalities = [];
        var equalitiesLength = 0;
        var lastEquality = null;
        var pointer = 0;
        var length_insertions1 = 0;
        var length_deletions1 = 0;
        var length_insertions2 = 0;
        var length_deletions2 = 0;
        while (pointer < diffs.length) {
          if (diffs[pointer][0] == DIFF_EQUAL) {
            equalities[equalitiesLength++] = pointer;
            length_insertions1 = length_insertions2;
            length_deletions1 = length_deletions2;
            length_insertions2 = 0;
            length_deletions2 = 0;
            lastEquality = diffs[pointer][1];
          } else {
            if (diffs[pointer][0] == DIFF_INSERT) {
              length_insertions2 += diffs[pointer][1].length;
            } else {
              length_deletions2 += diffs[pointer][1].length;
            }
            if (lastEquality && lastEquality.length <= Math.max(length_insertions1, length_deletions1) && lastEquality.length <= Math.max(
              length_insertions2,
              length_deletions2
            )) {
              diffs.splice(
                equalities[equalitiesLength - 1],
                0,
                new diff_match_patch.Diff(DIFF_DELETE, lastEquality)
              );
              diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
              equalitiesLength--;
              equalitiesLength--;
              pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
              length_insertions1 = 0;
              length_deletions1 = 0;
              length_insertions2 = 0;
              length_deletions2 = 0;
              lastEquality = null;
              changes = true;
            }
          }
          pointer++;
        }
        if (changes) {
          this.diff_cleanupMerge(diffs);
        }
        this.diff_cleanupSemanticLossless(diffs);
        pointer = 1;
        while (pointer < diffs.length) {
          if (diffs[pointer - 1][0] == DIFF_DELETE && diffs[pointer][0] == DIFF_INSERT) {
            var deletion = diffs[pointer - 1][1];
            var insertion = diffs[pointer][1];
            var overlap_length1 = this.diff_commonOverlap_(deletion, insertion);
            var overlap_length2 = this.diff_commonOverlap_(insertion, deletion);
            if (overlap_length1 >= overlap_length2) {
              if (overlap_length1 >= deletion.length / 2 || overlap_length1 >= insertion.length / 2) {
                diffs.splice(pointer, 0, new diff_match_patch.Diff(
                  DIFF_EQUAL,
                  insertion.substring(0, overlap_length1)
                ));
                diffs[pointer - 1][1] = deletion.substring(0, deletion.length - overlap_length1);
                diffs[pointer + 1][1] = insertion.substring(overlap_length1);
                pointer++;
              }
            } else {
              if (overlap_length2 >= deletion.length / 2 || overlap_length2 >= insertion.length / 2) {
                diffs.splice(pointer, 0, new diff_match_patch.Diff(
                  DIFF_EQUAL,
                  deletion.substring(0, overlap_length2)
                ));
                diffs[pointer - 1][0] = DIFF_INSERT;
                diffs[pointer - 1][1] = insertion.substring(0, insertion.length - overlap_length2);
                diffs[pointer + 1][0] = DIFF_DELETE;
                diffs[pointer + 1][1] = deletion.substring(overlap_length2);
                pointer++;
              }
            }
            pointer++;
          }
          pointer++;
        }
      };
      diff_match_patch.prototype.diff_cleanupSemanticLossless = function(diffs) {
        function diff_cleanupSemanticScore_(one, two) {
          if (!one || !two) {
            return 6;
          }
          var char1 = one.charAt(one.length - 1);
          var char2 = two.charAt(0);
          var nonAlphaNumeric1 = char1.match(diff_match_patch.nonAlphaNumericRegex_);
          var nonAlphaNumeric2 = char2.match(diff_match_patch.nonAlphaNumericRegex_);
          var whitespace1 = nonAlphaNumeric1 && char1.match(diff_match_patch.whitespaceRegex_);
          var whitespace2 = nonAlphaNumeric2 && char2.match(diff_match_patch.whitespaceRegex_);
          var lineBreak1 = whitespace1 && char1.match(diff_match_patch.linebreakRegex_);
          var lineBreak2 = whitespace2 && char2.match(diff_match_patch.linebreakRegex_);
          var blankLine1 = lineBreak1 && one.match(diff_match_patch.blanklineEndRegex_);
          var blankLine2 = lineBreak2 && two.match(diff_match_patch.blanklineStartRegex_);
          if (blankLine1 || blankLine2) {
            return 5;
          } else if (lineBreak1 || lineBreak2) {
            return 4;
          } else if (nonAlphaNumeric1 && !whitespace1 && whitespace2) {
            return 3;
          } else if (whitespace1 || whitespace2) {
            return 2;
          } else if (nonAlphaNumeric1 || nonAlphaNumeric2) {
            return 1;
          }
          return 0;
        }
        var pointer = 1;
        while (pointer < diffs.length - 1) {
          if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
            var equality1 = diffs[pointer - 1][1];
            var edit = diffs[pointer][1];
            var equality2 = diffs[pointer + 1][1];
            var commonOffset = this.diff_commonSuffix(equality1, edit);
            if (commonOffset) {
              var commonString = edit.substring(edit.length - commonOffset);
              equality1 = equality1.substring(0, equality1.length - commonOffset);
              edit = commonString + edit.substring(0, edit.length - commonOffset);
              equality2 = commonString + equality2;
            }
            var bestEquality1 = equality1;
            var bestEdit = edit;
            var bestEquality2 = equality2;
            var bestScore = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
            while (edit.charAt(0) === equality2.charAt(0)) {
              equality1 += edit.charAt(0);
              edit = edit.substring(1) + equality2.charAt(0);
              equality2 = equality2.substring(1);
              var score = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
              if (score >= bestScore) {
                bestScore = score;
                bestEquality1 = equality1;
                bestEdit = edit;
                bestEquality2 = equality2;
              }
            }
            if (diffs[pointer - 1][1] != bestEquality1) {
              if (bestEquality1) {
                diffs[pointer - 1][1] = bestEquality1;
              } else {
                diffs.splice(pointer - 1, 1);
                pointer--;
              }
              diffs[pointer][1] = bestEdit;
              if (bestEquality2) {
                diffs[pointer + 1][1] = bestEquality2;
              } else {
                diffs.splice(pointer + 1, 1);
                pointer--;
              }
            }
          }
          pointer++;
        }
      };
      diff_match_patch.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
      diff_match_patch.whitespaceRegex_ = /\s/;
      diff_match_patch.linebreakRegex_ = /[\r\n]/;
      diff_match_patch.blanklineEndRegex_ = /\n\r?\n$/;
      diff_match_patch.blanklineStartRegex_ = /^\r?\n\r?\n/;
      diff_match_patch.prototype.diff_cleanupEfficiency = function(diffs) {
        var changes = false;
        var equalities = [];
        var equalitiesLength = 0;
        var lastEquality = null;
        var pointer = 0;
        var pre_ins = false;
        var pre_del = false;
        var post_ins = false;
        var post_del = false;
        while (pointer < diffs.length) {
          if (diffs[pointer][0] == DIFF_EQUAL) {
            if (diffs[pointer][1].length < this.Diff_EditCost && (post_ins || post_del)) {
              equalities[equalitiesLength++] = pointer;
              pre_ins = post_ins;
              pre_del = post_del;
              lastEquality = diffs[pointer][1];
            } else {
              equalitiesLength = 0;
              lastEquality = null;
            }
            post_ins = post_del = false;
          } else {
            if (diffs[pointer][0] == DIFF_DELETE) {
              post_del = true;
            } else {
              post_ins = true;
            }
            if (lastEquality && (pre_ins && pre_del && post_ins && post_del || lastEquality.length < this.Diff_EditCost / 2 && pre_ins + pre_del + post_ins + post_del == 3)) {
              diffs.splice(
                equalities[equalitiesLength - 1],
                0,
                new diff_match_patch.Diff(DIFF_DELETE, lastEquality)
              );
              diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
              equalitiesLength--;
              lastEquality = null;
              if (pre_ins && pre_del) {
                post_ins = post_del = true;
                equalitiesLength = 0;
              } else {
                equalitiesLength--;
                pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
                post_ins = post_del = false;
              }
              changes = true;
            }
          }
          pointer++;
        }
        if (changes) {
          this.diff_cleanupMerge(diffs);
        }
      };
      diff_match_patch.prototype.diff_cleanupMerge = function(diffs) {
        diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, ""));
        var pointer = 0;
        var count_delete = 0;
        var count_insert = 0;
        var text_delete = "";
        var text_insert = "";
        var commonlength;
        while (pointer < diffs.length) {
          switch (diffs[pointer][0]) {
            case DIFF_INSERT:
              count_insert++;
              text_insert += diffs[pointer][1];
              pointer++;
              break;
            case DIFF_DELETE:
              count_delete++;
              text_delete += diffs[pointer][1];
              pointer++;
              break;
            case DIFF_EQUAL:
              if (count_delete + count_insert > 1) {
                if (count_delete !== 0 && count_insert !== 0) {
                  commonlength = this.diff_commonPrefix(text_insert, text_delete);
                  if (commonlength !== 0) {
                    if (pointer - count_delete - count_insert > 0 && diffs[pointer - count_delete - count_insert - 1][0] == DIFF_EQUAL) {
                      diffs[pointer - count_delete - count_insert - 1][1] += text_insert.substring(0, commonlength);
                    } else {
                      diffs.splice(0, 0, new diff_match_patch.Diff(
                        DIFF_EQUAL,
                        text_insert.substring(0, commonlength)
                      ));
                      pointer++;
                    }
                    text_insert = text_insert.substring(commonlength);
                    text_delete = text_delete.substring(commonlength);
                  }
                  commonlength = this.diff_commonSuffix(text_insert, text_delete);
                  if (commonlength !== 0) {
                    diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
                    text_insert = text_insert.substring(0, text_insert.length - commonlength);
                    text_delete = text_delete.substring(0, text_delete.length - commonlength);
                  }
                }
                pointer -= count_delete + count_insert;
                diffs.splice(pointer, count_delete + count_insert);
                if (text_delete.length) {
                  diffs.splice(
                    pointer,
                    0,
                    new diff_match_patch.Diff(DIFF_DELETE, text_delete)
                  );
                  pointer++;
                }
                if (text_insert.length) {
                  diffs.splice(
                    pointer,
                    0,
                    new diff_match_patch.Diff(DIFF_INSERT, text_insert)
                  );
                  pointer++;
                }
                pointer++;
              } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
                diffs[pointer - 1][1] += diffs[pointer][1];
                diffs.splice(pointer, 1);
              } else {
                pointer++;
              }
              count_insert = 0;
              count_delete = 0;
              text_delete = "";
              text_insert = "";
              break;
          }
        }
        if (diffs[diffs.length - 1][1] === "") {
          diffs.pop();
        }
        var changes = false;
        pointer = 1;
        while (pointer < diffs.length - 1) {
          if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
            if (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
              diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
              diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
              diffs.splice(pointer - 1, 1);
              changes = true;
            } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) == diffs[pointer + 1][1]) {
              diffs[pointer - 1][1] += diffs[pointer + 1][1];
              diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
              diffs.splice(pointer + 1, 1);
              changes = true;
            }
          }
          pointer++;
        }
        if (changes) {
          this.diff_cleanupMerge(diffs);
        }
      };
      diff_match_patch.prototype.diff_xIndex = function(diffs, loc) {
        var chars1 = 0;
        var chars2 = 0;
        var last_chars1 = 0;
        var last_chars2 = 0;
        var x;
        for (x = 0; x < diffs.length; x++) {
          if (diffs[x][0] !== DIFF_INSERT) {
            chars1 += diffs[x][1].length;
          }
          if (diffs[x][0] !== DIFF_DELETE) {
            chars2 += diffs[x][1].length;
          }
          if (chars1 > loc) {
            break;
          }
          last_chars1 = chars1;
          last_chars2 = chars2;
        }
        if (diffs.length != x && diffs[x][0] === DIFF_DELETE) {
          return last_chars2;
        }
        return last_chars2 + (loc - last_chars1);
      };
      diff_match_patch.prototype.diff_prettyHtml = function(diffs) {
        var html = [];
        var pattern_amp = /&/g;
        var pattern_lt = /</g;
        var pattern_gt = />/g;
        var pattern_para = /\n/g;
        for (var x = 0; x < diffs.length; x++) {
          var op = diffs[x][0];
          var data = diffs[x][1];
          var text = data.replace(pattern_amp, "&amp;").replace(pattern_lt, "&lt;").replace(pattern_gt, "&gt;").replace(pattern_para, "&para;<br>");
          switch (op) {
            case DIFF_INSERT:
              html[x] = '<ins style="background:#e6ffe6;">' + text + "</ins>";
              break;
            case DIFF_DELETE:
              html[x] = '<del style="background:#ffe6e6;">' + text + "</del>";
              break;
            case DIFF_EQUAL:
              html[x] = "<span>" + text + "</span>";
              break;
          }
        }
        return html.join("");
      };
      diff_match_patch.prototype.diff_text1 = function(diffs) {
        var text = [];
        for (var x = 0; x < diffs.length; x++) {
          if (diffs[x][0] !== DIFF_INSERT) {
            text[x] = diffs[x][1];
          }
        }
        return text.join("");
      };
      diff_match_patch.prototype.diff_text2 = function(diffs) {
        var text = [];
        for (var x = 0; x < diffs.length; x++) {
          if (diffs[x][0] !== DIFF_DELETE) {
            text[x] = diffs[x][1];
          }
        }
        return text.join("");
      };
      diff_match_patch.prototype.diff_levenshtein = function(diffs) {
        var levenshtein = 0;
        var insertions = 0;
        var deletions = 0;
        for (var x = 0; x < diffs.length; x++) {
          var op = diffs[x][0];
          var data = diffs[x][1];
          switch (op) {
            case DIFF_INSERT:
              insertions += data.length;
              break;
            case DIFF_DELETE:
              deletions += data.length;
              break;
            case DIFF_EQUAL:
              levenshtein += Math.max(insertions, deletions);
              insertions = 0;
              deletions = 0;
              break;
          }
        }
        levenshtein += Math.max(insertions, deletions);
        return levenshtein;
      };
      diff_match_patch.prototype.diff_toDelta = function(diffs) {
        var text = [];
        for (var x = 0; x < diffs.length; x++) {
          switch (diffs[x][0]) {
            case DIFF_INSERT:
              text[x] = "+" + encodeURI(diffs[x][1]);
              break;
            case DIFF_DELETE:
              text[x] = "-" + diffs[x][1].length;
              break;
            case DIFF_EQUAL:
              text[x] = "=" + diffs[x][1].length;
              break;
          }
        }
        return text.join("	").replace(/%20/g, " ");
      };
      diff_match_patch.prototype.diff_fromDelta = function(text1, delta) {
        var diffs = [];
        var diffsLength = 0;
        var pointer = 0;
        var tokens = delta.split(/\t/g);
        for (var x = 0; x < tokens.length; x++) {
          var param = tokens[x].substring(1);
          switch (tokens[x].charAt(0)) {
            case "+":
              try {
                diffs[diffsLength++] = new diff_match_patch.Diff(DIFF_INSERT, decodeURI(param));
              } catch (ex) {
                throw new Error("Illegal escape in diff_fromDelta: " + param);
              }
              break;
            case "-":
            case "=":
              var n = parseInt(param, 10);
              if (isNaN(n) || n < 0) {
                throw new Error("Invalid number in diff_fromDelta: " + param);
              }
              var text = text1.substring(pointer, pointer += n);
              if (tokens[x].charAt(0) == "=") {
                diffs[diffsLength++] = new diff_match_patch.Diff(DIFF_EQUAL, text);
              } else {
                diffs[diffsLength++] = new diff_match_patch.Diff(DIFF_DELETE, text);
              }
              break;
            default:
              if (tokens[x]) {
                throw new Error("Invalid diff operation in diff_fromDelta: " + tokens[x]);
              }
          }
        }
        if (pointer != text1.length) {
          throw new Error("Delta length (" + pointer + ") does not equal source text length (" + text1.length + ").");
        }
        return diffs;
      };
      diff_match_patch.prototype.match_main = function(text, pattern, loc) {
        if (text == null || pattern == null || loc == null) {
          throw new Error("Null input. (match_main)");
        }
        loc = Math.max(0, Math.min(loc, text.length));
        if (text == pattern) {
          return 0;
        } else if (!text.length) {
          return -1;
        } else if (text.substring(loc, loc + pattern.length) == pattern) {
          return loc;
        } else {
          return this.match_bitap_(text, pattern, loc);
        }
      };
      diff_match_patch.prototype.match_bitap_ = function(text, pattern, loc) {
        if (pattern.length > this.Match_MaxBits) {
          throw new Error("Pattern too long for this browser.");
        }
        var s2 = this.match_alphabet_(pattern);
        var dmp = this;
        function match_bitapScore_(e, x) {
          var accuracy = e / pattern.length;
          var proximity = Math.abs(loc - x);
          if (!dmp.Match_Distance) {
            return proximity ? 1 : accuracy;
          }
          return accuracy + proximity / dmp.Match_Distance;
        }
        var score_threshold = this.Match_Threshold;
        var best_loc = text.indexOf(pattern, loc);
        if (best_loc != -1) {
          score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
          best_loc = text.lastIndexOf(pattern, loc + pattern.length);
          if (best_loc != -1) {
            score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
          }
        }
        var matchmask = 1 << pattern.length - 1;
        best_loc = -1;
        var bin_min, bin_mid;
        var bin_max = pattern.length + text.length;
        var last_rd;
        for (var d = 0; d < pattern.length; d++) {
          bin_min = 0;
          bin_mid = bin_max;
          while (bin_min < bin_mid) {
            if (match_bitapScore_(d, loc + bin_mid) <= score_threshold) {
              bin_min = bin_mid;
            } else {
              bin_max = bin_mid;
            }
            bin_mid = Math.floor((bin_max - bin_min) / 2 + bin_min);
          }
          bin_max = bin_mid;
          var start = Math.max(1, loc - bin_mid + 1);
          var finish = Math.min(loc + bin_mid, text.length) + pattern.length;
          var rd = Array(finish + 2);
          rd[finish + 1] = (1 << d) - 1;
          for (var j = finish; j >= start; j--) {
            var charMatch = s2[text.charAt(j - 1)];
            if (d === 0) {
              rd[j] = (rd[j + 1] << 1 | 1) & charMatch;
            } else {
              rd[j] = (rd[j + 1] << 1 | 1) & charMatch | ((last_rd[j + 1] | last_rd[j]) << 1 | 1) | last_rd[j + 1];
            }
            if (rd[j] & matchmask) {
              var score = match_bitapScore_(d, j - 1);
              if (score <= score_threshold) {
                score_threshold = score;
                best_loc = j - 1;
                if (best_loc > loc) {
                  start = Math.max(1, 2 * loc - best_loc);
                } else {
                  break;
                }
              }
            }
          }
          if (match_bitapScore_(d + 1, loc) > score_threshold) {
            break;
          }
          last_rd = rd;
        }
        return best_loc;
      };
      diff_match_patch.prototype.match_alphabet_ = function(pattern) {
        var s2 = {};
        for (var i2 = 0; i2 < pattern.length; i2++) {
          s2[pattern.charAt(i2)] = 0;
        }
        for (var i2 = 0; i2 < pattern.length; i2++) {
          s2[pattern.charAt(i2)] |= 1 << pattern.length - i2 - 1;
        }
        return s2;
      };
      diff_match_patch.prototype.patch_addContext_ = function(patch, text) {
        if (text.length == 0) {
          return;
        }
        if (patch.start2 === null) {
          throw Error("patch not initialized");
        }
        var pattern = text.substring(patch.start2, patch.start2 + patch.length1);
        var padding = 0;
        while (text.indexOf(pattern) != text.lastIndexOf(pattern) && pattern.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin) {
          padding += this.Patch_Margin;
          pattern = text.substring(
            patch.start2 - padding,
            patch.start2 + patch.length1 + padding
          );
        }
        padding += this.Patch_Margin;
        var prefix = text.substring(patch.start2 - padding, patch.start2);
        if (prefix) {
          patch.diffs.unshift(new diff_match_patch.Diff(DIFF_EQUAL, prefix));
        }
        var suffix = text.substring(
          patch.start2 + patch.length1,
          patch.start2 + patch.length1 + padding
        );
        if (suffix) {
          patch.diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, suffix));
        }
        patch.start1 -= prefix.length;
        patch.start2 -= prefix.length;
        patch.length1 += prefix.length + suffix.length;
        patch.length2 += prefix.length + suffix.length;
      };
      diff_match_patch.prototype.patch_make = function(a, opt_b, opt_c) {
        var text1, diffs;
        if (typeof a == "string" && typeof opt_b == "string" && typeof opt_c == "undefined") {
          text1 = /** @type {string} */
          a;
          diffs = this.diff_main(
            text1,
            /** @type {string} */
            opt_b,
            true
          );
          if (diffs.length > 2) {
            this.diff_cleanupSemantic(diffs);
            this.diff_cleanupEfficiency(diffs);
          }
        } else if (a && typeof a == "object" && typeof opt_b == "undefined" && typeof opt_c == "undefined") {
          diffs = /** @type {!Array.<!diff_match_patch.Diff>} */
          a;
          text1 = this.diff_text1(diffs);
        } else if (typeof a == "string" && opt_b && typeof opt_b == "object" && typeof opt_c == "undefined") {
          text1 = /** @type {string} */
          a;
          diffs = /** @type {!Array.<!diff_match_patch.Diff>} */
          opt_b;
        } else if (typeof a == "string" && typeof opt_b == "string" && opt_c && typeof opt_c == "object") {
          text1 = /** @type {string} */
          a;
          diffs = /** @type {!Array.<!diff_match_patch.Diff>} */
          opt_c;
        } else {
          throw new Error("Unknown call format to patch_make.");
        }
        if (diffs.length === 0) {
          return [];
        }
        var patches = [];
        var patch = new diff_match_patch.patch_obj();
        var patchDiffLength = 0;
        var char_count1 = 0;
        var char_count2 = 0;
        var prepatch_text = text1;
        var postpatch_text = text1;
        for (var x = 0; x < diffs.length; x++) {
          var diff_type = diffs[x][0];
          var diff_text = diffs[x][1];
          if (!patchDiffLength && diff_type !== DIFF_EQUAL) {
            patch.start1 = char_count1;
            patch.start2 = char_count2;
          }
          switch (diff_type) {
            case DIFF_INSERT:
              patch.diffs[patchDiffLength++] = diffs[x];
              patch.length2 += diff_text.length;
              postpatch_text = postpatch_text.substring(0, char_count2) + diff_text + postpatch_text.substring(char_count2);
              break;
            case DIFF_DELETE:
              patch.length1 += diff_text.length;
              patch.diffs[patchDiffLength++] = diffs[x];
              postpatch_text = postpatch_text.substring(0, char_count2) + postpatch_text.substring(char_count2 + diff_text.length);
              break;
            case DIFF_EQUAL:
              if (diff_text.length <= 2 * this.Patch_Margin && patchDiffLength && diffs.length != x + 1) {
                patch.diffs[patchDiffLength++] = diffs[x];
                patch.length1 += diff_text.length;
                patch.length2 += diff_text.length;
              } else if (diff_text.length >= 2 * this.Patch_Margin) {
                if (patchDiffLength) {
                  this.patch_addContext_(patch, prepatch_text);
                  patches.push(patch);
                  patch = new diff_match_patch.patch_obj();
                  patchDiffLength = 0;
                  prepatch_text = postpatch_text;
                  char_count1 = char_count2;
                }
              }
              break;
          }
          if (diff_type !== DIFF_INSERT) {
            char_count1 += diff_text.length;
          }
          if (diff_type !== DIFF_DELETE) {
            char_count2 += diff_text.length;
          }
        }
        if (patchDiffLength) {
          this.patch_addContext_(patch, prepatch_text);
          patches.push(patch);
        }
        return patches;
      };
      diff_match_patch.prototype.patch_deepCopy = function(patches) {
        var patchesCopy = [];
        for (var x = 0; x < patches.length; x++) {
          var patch = patches[x];
          var patchCopy = new diff_match_patch.patch_obj();
          patchCopy.diffs = [];
          for (var y = 0; y < patch.diffs.length; y++) {
            patchCopy.diffs[y] = new diff_match_patch.Diff(patch.diffs[y][0], patch.diffs[y][1]);
          }
          patchCopy.start1 = patch.start1;
          patchCopy.start2 = patch.start2;
          patchCopy.length1 = patch.length1;
          patchCopy.length2 = patch.length2;
          patchesCopy[x] = patchCopy;
        }
        return patchesCopy;
      };
      diff_match_patch.prototype.patch_apply = function(patches, text) {
        if (patches.length == 0) {
          return [text, []];
        }
        patches = this.patch_deepCopy(patches);
        var nullPadding = this.patch_addPadding(patches);
        text = nullPadding + text + nullPadding;
        this.patch_splitMax(patches);
        var delta = 0;
        var results = [];
        for (var x = 0; x < patches.length; x++) {
          var expected_loc = patches[x].start2 + delta;
          var text1 = this.diff_text1(patches[x].diffs);
          var start_loc;
          var end_loc = -1;
          if (text1.length > this.Match_MaxBits) {
            start_loc = this.match_main(
              text,
              text1.substring(0, this.Match_MaxBits),
              expected_loc
            );
            if (start_loc != -1) {
              end_loc = this.match_main(
                text,
                text1.substring(text1.length - this.Match_MaxBits),
                expected_loc + text1.length - this.Match_MaxBits
              );
              if (end_loc == -1 || start_loc >= end_loc) {
                start_loc = -1;
              }
            }
          } else {
            start_loc = this.match_main(text, text1, expected_loc);
          }
          if (start_loc == -1) {
            results[x] = false;
            delta -= patches[x].length2 - patches[x].length1;
          } else {
            results[x] = true;
            delta = start_loc - expected_loc;
            var text2;
            if (end_loc == -1) {
              text2 = text.substring(start_loc, start_loc + text1.length);
            } else {
              text2 = text.substring(start_loc, end_loc + this.Match_MaxBits);
            }
            if (text1 == text2) {
              text = text.substring(0, start_loc) + this.diff_text2(patches[x].diffs) + text.substring(start_loc + text1.length);
            } else {
              var diffs = this.diff_main(text1, text2, false);
              if (text1.length > this.Match_MaxBits && this.diff_levenshtein(diffs) / text1.length > this.Patch_DeleteThreshold) {
                results[x] = false;
              } else {
                this.diff_cleanupSemanticLossless(diffs);
                var index1 = 0;
                var index2;
                for (var y = 0; y < patches[x].diffs.length; y++) {
                  var mod = patches[x].diffs[y];
                  if (mod[0] !== DIFF_EQUAL) {
                    index2 = this.diff_xIndex(diffs, index1);
                  }
                  if (mod[0] === DIFF_INSERT) {
                    text = text.substring(0, start_loc + index2) + mod[1] + text.substring(start_loc + index2);
                  } else if (mod[0] === DIFF_DELETE) {
                    text = text.substring(0, start_loc + index2) + text.substring(start_loc + this.diff_xIndex(
                      diffs,
                      index1 + mod[1].length
                    ));
                  }
                  if (mod[0] !== DIFF_DELETE) {
                    index1 += mod[1].length;
                  }
                }
              }
            }
          }
        }
        text = text.substring(nullPadding.length, text.length - nullPadding.length);
        return [text, results];
      };
      diff_match_patch.prototype.patch_addPadding = function(patches) {
        var paddingLength = this.Patch_Margin;
        var nullPadding = "";
        for (var x = 1; x <= paddingLength; x++) {
          nullPadding += String.fromCharCode(x);
        }
        for (var x = 0; x < patches.length; x++) {
          patches[x].start1 += paddingLength;
          patches[x].start2 += paddingLength;
        }
        var patch = patches[0];
        var diffs = patch.diffs;
        if (diffs.length == 0 || diffs[0][0] != DIFF_EQUAL) {
          diffs.unshift(new diff_match_patch.Diff(DIFF_EQUAL, nullPadding));
          patch.start1 -= paddingLength;
          patch.start2 -= paddingLength;
          patch.length1 += paddingLength;
          patch.length2 += paddingLength;
        } else if (paddingLength > diffs[0][1].length) {
          var extraLength = paddingLength - diffs[0][1].length;
          diffs[0][1] = nullPadding.substring(diffs[0][1].length) + diffs[0][1];
          patch.start1 -= extraLength;
          patch.start2 -= extraLength;
          patch.length1 += extraLength;
          patch.length2 += extraLength;
        }
        patch = patches[patches.length - 1];
        diffs = patch.diffs;
        if (diffs.length == 0 || diffs[diffs.length - 1][0] != DIFF_EQUAL) {
          diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, nullPadding));
          patch.length1 += paddingLength;
          patch.length2 += paddingLength;
        } else if (paddingLength > diffs[diffs.length - 1][1].length) {
          var extraLength = paddingLength - diffs[diffs.length - 1][1].length;
          diffs[diffs.length - 1][1] += nullPadding.substring(0, extraLength);
          patch.length1 += extraLength;
          patch.length2 += extraLength;
        }
        return nullPadding;
      };
      diff_match_patch.prototype.patch_splitMax = function(patches) {
        var patch_size = this.Match_MaxBits;
        for (var x = 0; x < patches.length; x++) {
          if (patches[x].length1 <= patch_size) {
            continue;
          }
          var bigpatch = patches[x];
          patches.splice(x--, 1);
          var start1 = bigpatch.start1;
          var start2 = bigpatch.start2;
          var precontext = "";
          while (bigpatch.diffs.length !== 0) {
            var patch = new diff_match_patch.patch_obj();
            var empty = true;
            patch.start1 = start1 - precontext.length;
            patch.start2 = start2 - precontext.length;
            if (precontext !== "") {
              patch.length1 = patch.length2 = precontext.length;
              patch.diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, precontext));
            }
            while (bigpatch.diffs.length !== 0 && patch.length1 < patch_size - this.Patch_Margin) {
              var diff_type = bigpatch.diffs[0][0];
              var diff_text = bigpatch.diffs[0][1];
              if (diff_type === DIFF_INSERT) {
                patch.length2 += diff_text.length;
                start2 += diff_text.length;
                patch.diffs.push(bigpatch.diffs.shift());
                empty = false;
              } else if (diff_type === DIFF_DELETE && patch.diffs.length == 1 && patch.diffs[0][0] == DIFF_EQUAL && diff_text.length > 2 * patch_size) {
                patch.length1 += diff_text.length;
                start1 += diff_text.length;
                empty = false;
                patch.diffs.push(new diff_match_patch.Diff(diff_type, diff_text));
                bigpatch.diffs.shift();
              } else {
                diff_text = diff_text.substring(
                  0,
                  patch_size - patch.length1 - this.Patch_Margin
                );
                patch.length1 += diff_text.length;
                start1 += diff_text.length;
                if (diff_type === DIFF_EQUAL) {
                  patch.length2 += diff_text.length;
                  start2 += diff_text.length;
                } else {
                  empty = false;
                }
                patch.diffs.push(new diff_match_patch.Diff(diff_type, diff_text));
                if (diff_text == bigpatch.diffs[0][1]) {
                  bigpatch.diffs.shift();
                } else {
                  bigpatch.diffs[0][1] = bigpatch.diffs[0][1].substring(diff_text.length);
                }
              }
            }
            precontext = this.diff_text2(patch.diffs);
            precontext = precontext.substring(precontext.length - this.Patch_Margin);
            var postcontext = this.diff_text1(bigpatch.diffs).substring(0, this.Patch_Margin);
            if (postcontext !== "") {
              patch.length1 += postcontext.length;
              patch.length2 += postcontext.length;
              if (patch.diffs.length !== 0 && patch.diffs[patch.diffs.length - 1][0] === DIFF_EQUAL) {
                patch.diffs[patch.diffs.length - 1][1] += postcontext;
              } else {
                patch.diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, postcontext));
              }
            }
            if (!empty) {
              patches.splice(++x, 0, patch);
            }
          }
        }
      };
      diff_match_patch.prototype.patch_toText = function(patches) {
        var text = [];
        for (var x = 0; x < patches.length; x++) {
          text[x] = patches[x];
        }
        return text.join("");
      };
      diff_match_patch.prototype.patch_fromText = function(textline) {
        var patches = [];
        if (!textline) {
          return patches;
        }
        var text = textline.split("\n");
        var textPointer = 0;
        var patchHeader = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;
        while (textPointer < text.length) {
          var m = text[textPointer].match(patchHeader);
          if (!m) {
            throw new Error("Invalid patch string: " + text[textPointer]);
          }
          var patch = new diff_match_patch.patch_obj();
          patches.push(patch);
          patch.start1 = parseInt(m[1], 10);
          if (m[2] === "") {
            patch.start1--;
            patch.length1 = 1;
          } else if (m[2] == "0") {
            patch.length1 = 0;
          } else {
            patch.start1--;
            patch.length1 = parseInt(m[2], 10);
          }
          patch.start2 = parseInt(m[3], 10);
          if (m[4] === "") {
            patch.start2--;
            patch.length2 = 1;
          } else if (m[4] == "0") {
            patch.length2 = 0;
          } else {
            patch.start2--;
            patch.length2 = parseInt(m[4], 10);
          }
          textPointer++;
          while (textPointer < text.length) {
            var sign = text[textPointer].charAt(0);
            try {
              var line = decodeURI(text[textPointer].substring(1));
            } catch (ex) {
              throw new Error("Illegal escape in patch_fromText: " + line);
            }
            if (sign == "-") {
              patch.diffs.push(new diff_match_patch.Diff(DIFF_DELETE, line));
            } else if (sign == "+") {
              patch.diffs.push(new diff_match_patch.Diff(DIFF_INSERT, line));
            } else if (sign == " ") {
              patch.diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, line));
            } else if (sign == "@") {
              break;
            } else if (sign === "") {
            } else {
              throw new Error('Invalid patch mode "' + sign + '" in: ' + line);
            }
            textPointer++;
          }
        }
        return patches;
      };
      diff_match_patch.patch_obj = function() {
        this.diffs = [];
        this.start1 = null;
        this.start2 = null;
        this.length1 = 0;
        this.length2 = 0;
      };
      diff_match_patch.patch_obj.prototype.toString = function() {
        var coords1, coords2;
        if (this.length1 === 0) {
          coords1 = this.start1 + ",0";
        } else if (this.length1 == 1) {
          coords1 = this.start1 + 1;
        } else {
          coords1 = this.start1 + 1 + "," + this.length1;
        }
        if (this.length2 === 0) {
          coords2 = this.start2 + ",0";
        } else if (this.length2 == 1) {
          coords2 = this.start2 + 1;
        } else {
          coords2 = this.start2 + 1 + "," + this.length2;
        }
        var text = ["@@ -" + coords1 + " +" + coords2 + " @@\n"];
        var op;
        for (var x = 0; x < this.diffs.length; x++) {
          switch (this.diffs[x][0]) {
            case DIFF_INSERT:
              op = "+";
              break;
            case DIFF_DELETE:
              op = "-";
              break;
            case DIFF_EQUAL:
              op = " ";
              break;
          }
          text[x + 1] = op + encodeURI(this.diffs[x][1]) + "\n";
        }
        return text.join("").replace(/%20/g, " ");
      };
      module.exports = diff_match_patch;
      module.exports["diff_match_patch"] = diff_match_patch;
      module.exports["DIFF_DELETE"] = DIFF_DELETE;
      module.exports["DIFF_INSERT"] = DIFF_INSERT;
      module.exports["DIFF_EQUAL"] = DIFF_EQUAL;
    }
  });

  // demo.ts
  var import_json5 = __toESM(require_dist(), 1);

  // ../../packages/jsondiffpatch/lib/formatters/base.js
  var trimUnderscore = (str) => {
    if (str.substring(0, 1) === "_") {
      return str.slice(1);
    }
    return str;
  };
  var arrayKeyToSortNumber = (key) => {
    if (key === "_t") {
      return -1;
    } else {
      if (key.substring(0, 1) === "_") {
        return parseInt(key.slice(1), 10);
      } else {
        return parseInt(key, 10) + 0.1;
      }
    }
  };
  var arrayKeyComparer = (key1, key2) => arrayKeyToSortNumber(key1) - arrayKeyToSortNumber(key2);
  var BaseFormatter = class {
    format(delta, left) {
      const context = {};
      this.prepareContext(context);
      const preparedContext = context;
      this.recurse(preparedContext, delta, left);
      return this.finalize(preparedContext);
    }
    prepareContext(context) {
      context.buffer = [];
      context.out = function(...args) {
        this.buffer.push(...args);
      };
    }
    typeFormattterNotFound(context, deltaType) {
      throw new Error(`cannot format delta type: ${deltaType}`);
    }
    /* eslint-disable @typescript-eslint/no-unused-vars */
    typeFormattterErrorFormatter(context, err, delta, leftValue, key, leftKey, movedFrom) {
    }
    /* eslint-enable @typescript-eslint/no-unused-vars */
    finalize({ buffer }) {
      if (Array.isArray(buffer)) {
        return buffer.join("");
      }
    }
    recurse(context, delta, left, key, leftKey, movedFrom, isLast) {
      const useMoveOriginHere = delta && movedFrom;
      const leftValue = useMoveOriginHere ? movedFrom.value : left;
      if (typeof delta === "undefined" && typeof key === "undefined") {
        return void 0;
      }
      const type = this.getDeltaType(delta, movedFrom);
      const nodeType = type === "node" ? delta._t === "a" ? "array" : "object" : "";
      if (typeof key !== "undefined") {
        this.nodeBegin(context, key, leftKey, type, nodeType, isLast);
      } else {
        this.rootBegin(context, type, nodeType);
      }
      let typeFormattter;
      try {
        typeFormattter = type !== "unknown" ? this[`format_${type}`] : this.typeFormattterNotFound(context, type);
        typeFormattter.call(this, context, delta, leftValue, key, leftKey, movedFrom);
      } catch (err) {
        this.typeFormattterErrorFormatter(context, err, delta, leftValue, key, leftKey, movedFrom);
        if (typeof console !== "undefined" && console.error) {
          console.error(err.stack);
        }
      }
      if (typeof key !== "undefined") {
        this.nodeEnd(context, key, leftKey, type, nodeType, isLast);
      } else {
        this.rootEnd(context, type, nodeType);
      }
    }
    formatDeltaChildren(context, delta, left) {
      this.forEachDeltaKey(delta, left, (key, leftKey, movedFrom, isLast) => {
        this.recurse(context, delta[key], left ? left[leftKey] : void 0, key, leftKey, movedFrom, isLast);
      });
    }
    forEachDeltaKey(delta, left, fn) {
      const keys = Object.keys(delta);
      const arrayKeys = delta._t === "a";
      const moveDestinations = {};
      let name;
      if (typeof left !== "undefined") {
        for (name in left) {
          if (Object.prototype.hasOwnProperty.call(left, name)) {
            if (typeof delta[name] === "undefined" && (!arrayKeys || typeof delta[`_${name}`] === "undefined")) {
              keys.push(name);
            }
          }
        }
      }
      for (name in delta) {
        if (Object.prototype.hasOwnProperty.call(delta, name)) {
          const value = delta[name];
          if (Array.isArray(value) && value[2] === 3) {
            const movedDelta = value;
            moveDestinations[`${movedDelta[1]}`] = {
              key: name,
              value: left && left[parseInt(name.substring(1), 10)]
            };
            if (this.includeMoveDestinations !== false) {
              if (typeof left === "undefined" && typeof delta[movedDelta[1]] === "undefined") {
                keys.push(movedDelta[1].toString());
              }
            }
          }
        }
      }
      if (arrayKeys) {
        keys.sort(arrayKeyComparer);
      } else {
        keys.sort();
      }
      for (let index = 0, length = keys.length; index < length; index++) {
        const key = keys[index];
        if (arrayKeys && key === "_t") {
          continue;
        }
        const leftKey = arrayKeys ? parseInt(trimUnderscore(key), 10) : key;
        const isLast = index === length - 1;
        fn(key, leftKey, moveDestinations[leftKey], isLast);
      }
    }
    getDeltaType(delta, movedFrom) {
      if (typeof delta === "undefined") {
        if (typeof movedFrom !== "undefined") {
          return "movedestination";
        }
        return "unchanged";
      }
      if (Array.isArray(delta)) {
        if (delta.length === 1) {
          return "added";
        }
        if (delta.length === 2) {
          return "modified";
        }
        if (delta.length === 3 && delta[2] === 0) {
          return "deleted";
        }
        if (delta.length === 3 && delta[2] === 2) {
          return "textdiff";
        }
        if (delta.length === 3 && delta[2] === 3) {
          return "moved";
        }
      } else if (typeof delta === "object") {
        return "node";
      }
      return "unknown";
    }
    parseTextDiff(value) {
      const output = [];
      const lines = value.split("\n@@ ");
      for (let i2 = 0, l = lines.length; i2 < l; i2++) {
        const line = lines[i2];
        const lineOutput = {
          pieces: []
        };
        const location = /^(?:@@ )?[-+]?(\d+),(\d+)/.exec(line).slice(1);
        lineOutput.location = {
          line: location[0],
          chr: location[1]
        };
        const pieces = line.split("\n").slice(1);
        for (let pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
          const piece = pieces[pieceIndex];
          if (!piece.length) {
            continue;
          }
          const pieceOutput = {
            type: "context"
          };
          if (piece.substring(0, 1) === "+") {
            pieceOutput.type = "added";
          } else if (piece.substring(0, 1) === "-") {
            pieceOutput.type = "deleted";
          }
          pieceOutput.text = piece.slice(1);
          lineOutput.pieces.push(pieceOutput);
        }
        output.push(lineOutput);
      }
      return output;
    }
  };
  var base_default = BaseFormatter;

  // ../../packages/jsondiffpatch/lib/formatters/annotated.js
  var AnnotatedFormatter = class extends base_default {
    constructor() {
      super();
      this.includeMoveDestinations = false;
    }
    prepareContext(context) {
      super.prepareContext(context);
      context.indent = function(levels) {
        this.indentLevel = (this.indentLevel || 0) + (typeof levels === "undefined" ? 1 : levels);
        this.indentPad = new Array(this.indentLevel + 1).join("&nbsp;&nbsp;");
      };
      context.row = (json, htmlNote) => {
        context.out('<tr><td style="white-space: nowrap;"><pre class="jsondiffpatch-annotated-indent" style="display: inline-block">');
        if (context.indentPad != null)
          context.out(context.indentPad);
        context.out('</pre><pre style="display: inline-block">');
        context.out(json);
        context.out('</pre></td><td class="jsondiffpatch-delta-note"><div>');
        if (htmlNote != null)
          context.out(htmlNote);
        context.out("</div></td></tr>");
      };
    }
    typeFormattterErrorFormatter(context, err) {
      context.row("", `<pre class="jsondiffpatch-error">${err}</pre>`);
    }
    formatTextDiffString(context, value) {
      const lines = this.parseTextDiff(value);
      context.out('<ul class="jsondiffpatch-textdiff">');
      for (let i2 = 0, l = lines.length; i2 < l; i2++) {
        const line = lines[i2];
        context.out(`<li><div class="jsondiffpatch-textdiff-location"><span class="jsondiffpatch-textdiff-line-number">${line.location.line}</span><span class="jsondiffpatch-textdiff-char">${line.location.chr}</span></div><div class="jsondiffpatch-textdiff-line">`);
        const pieces = line.pieces;
        for (let pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
          const piece = pieces[pieceIndex];
          context.out(`<span class="jsondiffpatch-textdiff-${piece.type}">${piece.text}</span>`);
        }
        context.out("</div></li>");
      }
      context.out("</ul>");
    }
    rootBegin(context, type, nodeType) {
      context.out('<table class="jsondiffpatch-annotated-delta">');
      if (type === "node") {
        context.row("{");
        context.indent();
      }
      if (nodeType === "array") {
        context.row('"_t": "a",', "Array delta (member names indicate array indices)");
      }
    }
    rootEnd(context, type) {
      if (type === "node") {
        context.indent(-1);
        context.row("}");
      }
      context.out("</table>");
    }
    nodeBegin(context, key, leftKey, type, nodeType) {
      context.row(`&quot;${key}&quot;: {`);
      if (type === "node") {
        context.indent();
      }
      if (nodeType === "array") {
        context.row('"_t": "a",', "Array delta (member names indicate array indices)");
      }
    }
    nodeEnd(context, key, leftKey, type, nodeType, isLast) {
      if (type === "node") {
        context.indent(-1);
      }
      context.row(`}${isLast ? "" : ","}`);
    }
    format_unchanged() {
    }
    format_movedestination() {
    }
    format_node(context, delta, left) {
      this.formatDeltaChildren(context, delta, left);
    }
    format_added(context, delta, left, key, leftKey) {
      formatAnyChange.call(this, context, delta, left, key, leftKey);
    }
    format_modified(context, delta, left, key, leftKey) {
      formatAnyChange.call(this, context, delta, left, key, leftKey);
    }
    format_deleted(context, delta, left, key, leftKey) {
      formatAnyChange.call(this, context, delta, left, key, leftKey);
    }
    format_moved(context, delta, left, key, leftKey) {
      formatAnyChange.call(this, context, delta, left, key, leftKey);
    }
    format_textdiff(context, delta, left, key, leftKey) {
      formatAnyChange.call(this, context, delta, left, key, leftKey);
    }
  };
  var wrapPropertyName = (name) => `<pre style="display:inline-block">&quot;${name}&quot;</pre>`;
  var deltaAnnotations = {
    added(delta, left, key, leftKey) {
      const formatLegend = " <pre>([newValue])</pre>";
      if (typeof leftKey === "undefined") {
        return `new value${formatLegend}`;
      }
      if (typeof leftKey === "number") {
        return `insert at index ${leftKey}${formatLegend}`;
      }
      return `add property ${wrapPropertyName(leftKey)}${formatLegend}`;
    },
    modified(delta, left, key, leftKey) {
      const formatLegend = " <pre>([previousValue, newValue])</pre>";
      if (typeof leftKey === "undefined") {
        return `modify value${formatLegend}`;
      }
      if (typeof leftKey === "number") {
        return `modify at index ${leftKey}${formatLegend}`;
      }
      return `modify property ${wrapPropertyName(leftKey)}${formatLegend}`;
    },
    deleted(delta, left, key, leftKey) {
      const formatLegend = " <pre>([previousValue, 0, 0])</pre>";
      if (typeof leftKey === "undefined") {
        return `delete value${formatLegend}`;
      }
      if (typeof leftKey === "number") {
        return `remove index ${leftKey}${formatLegend}`;
      }
      return `delete property ${wrapPropertyName(leftKey)}${formatLegend}`;
    },
    moved(delta, left, key, leftKey) {
      return `move from <span title="(position to remove at original state)">index ${leftKey}</span> to <span title="(position to insert at final state)">index ${delta[1]}</span>`;
    },
    textdiff(delta, left, key, leftKey) {
      const location = typeof leftKey === "undefined" ? "" : typeof leftKey === "number" ? ` at index ${leftKey}` : ` at property ${wrapPropertyName(leftKey)}`;
      return `text diff${location}, format is <a href="https://code.google.com/p/google-diff-match-patch/wiki/Unidiff">a variation of Unidiff</a>`;
    }
  };
  var formatAnyChange = function(context, delta, left, key, leftKey) {
    const deltaType = this.getDeltaType(delta);
    const annotator = deltaAnnotations[deltaType];
    const htmlNote = annotator && annotator(delta, left, key, leftKey);
    let json = JSON.stringify(delta, null, 2);
    if (deltaType === "textdiff") {
      json = json.split("\\n").join('\\n"+\n   "');
    }
    context.indent();
    context.row(json, htmlNote);
    context.indent(-1);
  };
  var defaultInstance;
  function format(delta, left) {
    if (!defaultInstance) {
      defaultInstance = new AnnotatedFormatter();
    }
    return defaultInstance.format(delta, left);
  }

  // ../../packages/jsondiffpatch/lib/formatters/html.js
  var HtmlFormatter = class extends base_default {
    typeFormattterErrorFormatter(context, err) {
      context.out(`<pre class="jsondiffpatch-error">${err}</pre>`);
    }
    formatValue(context, value) {
      context.out(`<pre>${htmlEscape(JSON.stringify(value, null, 2))}</pre>`);
    }
    formatTextDiffString(context, value) {
      const lines = this.parseTextDiff(value);
      context.out('<ul class="jsondiffpatch-textdiff">');
      for (let i2 = 0, l = lines.length; i2 < l; i2++) {
        const line = lines[i2];
        context.out(`<li><div class="jsondiffpatch-textdiff-location"><span class="jsondiffpatch-textdiff-line-number">${line.location.line}</span><span class="jsondiffpatch-textdiff-char">${line.location.chr}</span></div><div class="jsondiffpatch-textdiff-line">`);
        const pieces = line.pieces;
        for (let pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
          const piece = pieces[pieceIndex];
          context.out(`<span class="jsondiffpatch-textdiff-${piece.type}">${htmlEscape(decodeURI(piece.text))}</span>`);
        }
        context.out("</div></li>");
      }
      context.out("</ul>");
    }
    rootBegin(context, type, nodeType) {
      const nodeClass = `jsondiffpatch-${type}${nodeType ? ` jsondiffpatch-child-node-type-${nodeType}` : ""}`;
      context.out(`<div class="jsondiffpatch-delta ${nodeClass}">`);
    }
    rootEnd(context) {
      context.out(`</div>${context.hasArrows ? `<script type="text/javascript">setTimeout(${adjustArrows.toString()},10);<\/script>` : ""}`);
    }
    nodeBegin(context, key, leftKey, type, nodeType) {
      const nodeClass = `jsondiffpatch-${type}${nodeType ? ` jsondiffpatch-child-node-type-${nodeType}` : ""}`;
      context.out(`<li class="${nodeClass}" data-key="${leftKey}"><div class="jsondiffpatch-property-name">${leftKey}</div>`);
    }
    nodeEnd(context) {
      context.out("</li>");
    }
    format_unchanged(context, delta, left) {
      if (typeof left === "undefined") {
        return;
      }
      context.out('<div class="jsondiffpatch-value">');
      this.formatValue(context, left);
      context.out("</div>");
    }
    format_movedestination(context, delta, left) {
      if (typeof left === "undefined") {
        return;
      }
      context.out('<div class="jsondiffpatch-value">');
      this.formatValue(context, left);
      context.out("</div>");
    }
    format_node(context, delta, left) {
      const nodeType = delta._t === "a" ? "array" : "object";
      context.out(`<ul class="jsondiffpatch-node jsondiffpatch-node-type-${nodeType}">`);
      this.formatDeltaChildren(context, delta, left);
      context.out("</ul>");
    }
    format_added(context, delta) {
      context.out('<div class="jsondiffpatch-value">');
      this.formatValue(context, delta[0]);
      context.out("</div>");
    }
    format_modified(context, delta) {
      context.out('<div class="jsondiffpatch-value jsondiffpatch-left-value">');
      this.formatValue(context, delta[0]);
      context.out('</div><div class="jsondiffpatch-value jsondiffpatch-right-value">');
      this.formatValue(context, delta[1]);
      context.out("</div>");
    }
    format_deleted(context, delta) {
      context.out('<div class="jsondiffpatch-value">');
      this.formatValue(context, delta[0]);
      context.out("</div>");
    }
    format_moved(context, delta) {
      context.out('<div class="jsondiffpatch-value">');
      this.formatValue(context, delta[0]);
      context.out(`</div><div class="jsondiffpatch-moved-destination">${delta[1]}</div>`);
      context.out(
        /* jshint multistr: true */
        `<div class="jsondiffpatch-arrow" style="position: relative; left: -34px;">
          <svg width="30" height="60" style="position: absolute; display: none;">
          <defs>
              <marker id="markerArrow" markerWidth="8" markerHeight="8"
                 refx="2" refy="4" stroke="#88f"
                     orient="auto" markerUnits="userSpaceOnUse">
                  <path d="M1,1 L1,7 L7,4 L1,1" style="fill: #339;" />
              </marker>
          </defs>
          <path d="M30,0 Q-10,25 26,50"
            style="stroke: #88f; stroke-width: 2px; fill: none; stroke-opacity: 0.5; marker-end: url(#markerArrow);"
          ></path>
          </svg>
      </div>`
      );
      context.hasArrows = true;
    }
    format_textdiff(context, delta) {
      context.out('<div class="jsondiffpatch-value">');
      this.formatTextDiffString(context, delta[0]);
      context.out("</div>");
    }
  };
  function htmlEscape(text) {
    let html = text;
    const replacements = [
      [/&/g, "&amp;"],
      [/</g, "&lt;"],
      [/>/g, "&gt;"],
      [/'/g, "&apos;"],
      [/"/g, "&quot;"]
    ];
    for (let i2 = 0; i2 < replacements.length; i2++) {
      html = html.replace(replacements[i2][0], replacements[i2][1]);
    }
    return html;
  }
  var adjustArrows = function jsondiffpatchHtmlFormatterAdjustArrows(nodeArg) {
    const node = nodeArg || document;
    const getElementText = ({ textContent, innerText }) => textContent || innerText;
    const eachByQuery = (el2, query, fn) => {
      const elems = el2.querySelectorAll(query);
      for (let i2 = 0, l = elems.length; i2 < l; i2++) {
        fn(elems[i2]);
      }
    };
    const eachChildren = ({ children }, fn) => {
      for (let i2 = 0, l = children.length; i2 < l; i2++) {
        fn(children[i2], i2);
      }
    };
    eachByQuery(node, ".jsondiffpatch-arrow", ({ parentNode, children, style }) => {
      const arrowParent = parentNode;
      const svg = children[0];
      const path = svg.children[1];
      svg.style.display = "none";
      const destination = getElementText(arrowParent.querySelector(".jsondiffpatch-moved-destination"));
      const container = arrowParent.parentNode;
      let destinationElem;
      eachChildren(container, (child) => {
        if (child.getAttribute("data-key") === destination) {
          destinationElem = child;
        }
      });
      if (!destinationElem) {
        return;
      }
      try {
        const distance = destinationElem.offsetTop - arrowParent.offsetTop;
        svg.setAttribute("height", `${Math.abs(distance) + 6}`);
        style.top = `${-8 + (distance > 0 ? 0 : distance)}px`;
        const curve = distance > 0 ? `M30,0 Q-10,${Math.round(distance / 2)} 26,${distance - 4}` : `M30,${-distance} Q-10,${Math.round(-distance / 2)} 26,4`;
        path.setAttribute("d", curve);
        svg.style.display = "";
      } catch (err) {
      }
    });
  };
  var showUnchanged = (show, node, delay) => {
    const el2 = node || document.body;
    const prefix = "jsondiffpatch-unchanged-";
    const classes = {
      showing: `${prefix}showing`,
      hiding: `${prefix}hiding`,
      visible: `${prefix}visible`,
      hidden: `${prefix}hidden`
    };
    const list = el2.classList;
    if (!list) {
      return;
    }
    if (!delay) {
      list.remove(classes.showing);
      list.remove(classes.hiding);
      list.remove(classes.visible);
      list.remove(classes.hidden);
      if (show === false) {
        list.add(classes.hidden);
      }
      return;
    }
    if (show === false) {
      list.remove(classes.showing);
      list.add(classes.visible);
      setTimeout(() => {
        list.add(classes.hiding);
      }, 10);
    } else {
      list.remove(classes.hiding);
      list.add(classes.showing);
      list.remove(classes.hidden);
    }
    const intervalId = setInterval(() => {
      adjustArrows(el2);
    }, 100);
    setTimeout(() => {
      list.remove(classes.showing);
      list.remove(classes.hiding);
      if (show === false) {
        list.add(classes.hidden);
        list.remove(classes.visible);
      } else {
        list.add(classes.visible);
        list.remove(classes.hidden);
      }
      setTimeout(() => {
        list.remove(classes.visible);
        clearInterval(intervalId);
      }, delay + 400);
    }, delay);
  };
  var hideUnchanged = (node, delay) => showUnchanged(false, node, delay);
  var defaultInstance2;
  function format2(delta, left) {
    if (!defaultInstance2) {
      defaultInstance2 = new HtmlFormatter();
    }
    return defaultInstance2.format(delta, left);
  }

  // ../../packages/jsondiffpatch/lib/with-text-diffs.js
  var import_diff_match_patch = __toESM(require_diff_match_patch(), 1);

  // ../../packages/jsondiffpatch/lib/processor.js
  var Processor = class {
    constructor(options) {
      this.selfOptions = options || {};
      this.pipes = {};
    }
    options(options) {
      if (options) {
        this.selfOptions = options;
      }
      return this.selfOptions;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pipe(name, pipeArg) {
      let pipe = pipeArg;
      if (typeof name === "string") {
        if (typeof pipe === "undefined") {
          return this.pipes[name];
        } else {
          this.pipes[name] = pipe;
        }
      }
      if (name && name.name) {
        pipe = name;
        if (pipe.processor === this) {
          return pipe;
        }
        this.pipes[pipe.name] = pipe;
      }
      pipe.processor = this;
      return pipe;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    process(input, pipe) {
      let context = input;
      context.options = this.options();
      let nextPipe = pipe || input.pipe || "default";
      let lastPipe;
      while (nextPipe) {
        if (typeof context.nextAfterChildren !== "undefined") {
          context.next = context.nextAfterChildren;
          context.nextAfterChildren = null;
        }
        if (typeof nextPipe === "string") {
          nextPipe = this.pipe(nextPipe);
        }
        nextPipe.process(context);
        lastPipe = nextPipe;
        nextPipe = null;
        if (context) {
          if (context.next) {
            context = context.next;
            nextPipe = context.pipe || lastPipe;
          }
        }
      }
      return context.hasResult ? context.result : void 0;
    }
  };
  var processor_default = Processor;

  // ../../packages/jsondiffpatch/lib/pipe.js
  var Pipe = class {
    constructor(name) {
      this.name = name;
      this.filters = [];
    }
    process(input) {
      if (!this.processor) {
        throw new Error("add this pipe to a processor before using it");
      }
      const debug = this.debug;
      const length = this.filters.length;
      const context = input;
      for (let index = 0; index < length; index++) {
        const filter = this.filters[index];
        if (debug) {
          this.log(`filter: ${filter.filterName}`);
        }
        filter(context);
        if (typeof context === "object" && context.exiting) {
          context.exiting = false;
          break;
        }
      }
      if (!context.next && this.resultCheck) {
        this.resultCheck(context);
      }
    }
    log(msg) {
      console.log(`[jsondiffpatch] ${this.name} pipe, ${msg}`);
    }
    append(...args) {
      this.filters.push(...args);
      return this;
    }
    prepend(...args) {
      this.filters.unshift(...args);
      return this;
    }
    indexOf(filterName) {
      if (!filterName) {
        throw new Error("a filter name is required");
      }
      for (let index = 0; index < this.filters.length; index++) {
        const filter = this.filters[index];
        if (filter.filterName === filterName) {
          return index;
        }
      }
      throw new Error(`filter not found: ${filterName}`);
    }
    list() {
      return this.filters.map((f) => f.filterName);
    }
    after(filterName, ...params) {
      const index = this.indexOf(filterName);
      this.filters.splice(index + 1, 0, ...params);
      return this;
    }
    before(filterName, ...params) {
      const index = this.indexOf(filterName);
      this.filters.splice(index, 0, ...params);
      return this;
    }
    replace(filterName, ...params) {
      const index = this.indexOf(filterName);
      this.filters.splice(index, 1, ...params);
      return this;
    }
    remove(filterName) {
      const index = this.indexOf(filterName);
      this.filters.splice(index, 1);
      return this;
    }
    clear() {
      this.filters.length = 0;
      return this;
    }
    shouldHaveResult(should) {
      if (should === false) {
        this.resultCheck = null;
        return;
      }
      if (this.resultCheck) {
        return;
      }
      this.resultCheck = (context) => {
        if (!context.hasResult) {
          console.log(context);
          const error = new Error(`${this.name} failed`);
          error.noResult = true;
          throw error;
        }
      };
      return this;
    }
  };
  var pipe_default = Pipe;

  // ../../packages/jsondiffpatch/lib/contexts/context.js
  var Context = class {
    setResult(result) {
      this.result = result;
      this.hasResult = true;
      return this;
    }
    exit() {
      this.exiting = true;
      return this;
    }
    push(child, name) {
      child.parent = this;
      if (typeof name !== "undefined") {
        child.childName = name;
      }
      child.root = this.root || this;
      child.options = child.options || this.options;
      if (!this.children) {
        this.children = [child];
        this.nextAfterChildren = this.next || null;
        this.next = child;
      } else {
        this.children[this.children.length - 1].next = child;
        this.children.push(child);
      }
      child.next = this;
      return this;
    }
  };

  // ../../packages/jsondiffpatch/lib/clone.js
  function cloneRegExp(re) {
    const regexMatch = /^\/(.*)\/([gimyu]*)$/.exec(re.toString());
    return new RegExp(regexMatch[1], regexMatch[2]);
  }
  function clone(arg) {
    if (typeof arg !== "object") {
      return arg;
    }
    if (arg === null) {
      return null;
    }
    if (Array.isArray(arg)) {
      return arg.map(clone);
    }
    if (arg instanceof Date) {
      return new Date(arg.getTime());
    }
    if (arg instanceof RegExp) {
      return cloneRegExp(arg);
    }
    const cloned = {};
    for (const name in arg) {
      if (Object.prototype.hasOwnProperty.call(arg, name)) {
        cloned[name] = clone(arg[name]);
      }
    }
    return cloned;
  }

  // ../../packages/jsondiffpatch/lib/contexts/diff.js
  var DiffContext = class extends Context {
    constructor(left, right) {
      super();
      this.left = left;
      this.right = right;
      this.pipe = "diff";
    }
    setResult(result) {
      if (this.options.cloneDiffValues && typeof result === "object") {
        const clone2 = typeof this.options.cloneDiffValues === "function" ? this.options.cloneDiffValues : clone;
        if (typeof result[0] === "object") {
          result[0] = clone2(result[0]);
        }
        if (typeof result[1] === "object") {
          result[1] = clone2(result[1]);
        }
      }
      return super.setResult(result);
    }
  };
  var diff_default = DiffContext;

  // ../../packages/jsondiffpatch/lib/contexts/patch.js
  var PatchContext = class extends Context {
    constructor(left, delta) {
      super();
      this.left = left;
      this.delta = delta;
      this.pipe = "patch";
    }
  };
  var patch_default = PatchContext;

  // ../../packages/jsondiffpatch/lib/contexts/reverse.js
  var ReverseContext = class extends Context {
    constructor(delta) {
      super();
      this.delta = delta;
      this.pipe = "reverse";
    }
  };
  var reverse_default = ReverseContext;

  // ../../packages/jsondiffpatch/lib/filters/trivial.js
  var diffFilter = function trivialMatchesDiffFilter(context) {
    if (context.left === context.right) {
      context.setResult(void 0).exit();
      return;
    }
    if (typeof context.left === "undefined") {
      if (typeof context.right === "function") {
        throw new Error("functions are not supported");
      }
      context.setResult([context.right]).exit();
      return;
    }
    if (typeof context.right === "undefined") {
      context.setResult([context.left, 0, 0]).exit();
      return;
    }
    if (typeof context.left === "function" || typeof context.right === "function") {
      throw new Error("functions are not supported");
    }
    context.leftType = context.left === null ? "null" : typeof context.left;
    context.rightType = context.right === null ? "null" : typeof context.right;
    if (context.leftType !== context.rightType) {
      context.setResult([context.left, context.right]).exit();
      return;
    }
    if (context.leftType === "boolean" || context.leftType === "number") {
      context.setResult([context.left, context.right]).exit();
      return;
    }
    if (context.leftType === "object") {
      context.leftIsArray = Array.isArray(context.left);
    }
    if (context.rightType === "object") {
      context.rightIsArray = Array.isArray(context.right);
    }
    if (context.leftIsArray !== context.rightIsArray) {
      context.setResult([context.left, context.right]).exit();
      return;
    }
    if (context.left instanceof RegExp) {
      if (context.right instanceof RegExp) {
        context.setResult([context.left.toString(), context.right.toString()]).exit();
      } else {
        context.setResult([context.left, context.right]).exit();
      }
    }
  };
  diffFilter.filterName = "trivial";
  var patchFilter = function trivialMatchesPatchFilter(context) {
    if (typeof context.delta === "undefined") {
      context.setResult(context.left).exit();
      return;
    }
    context.nested = !Array.isArray(context.delta);
    if (context.nested) {
      return;
    }
    const nonNestedDelta = context.delta;
    if (nonNestedDelta.length === 1) {
      context.setResult(nonNestedDelta[0]).exit();
      return;
    }
    if (nonNestedDelta.length === 2) {
      if (context.left instanceof RegExp) {
        const regexArgs = /^\/(.*)\/([gimyu]+)$/.exec(nonNestedDelta[1]);
        if (regexArgs) {
          context.setResult(new RegExp(regexArgs[1], regexArgs[2])).exit();
          return;
        }
      }
      context.setResult(nonNestedDelta[1]).exit();
      return;
    }
    if (nonNestedDelta.length === 3 && nonNestedDelta[2] === 0) {
      context.setResult(void 0).exit();
    }
  };
  patchFilter.filterName = "trivial";
  var reverseFilter = function trivialReferseFilter(context) {
    if (typeof context.delta === "undefined") {
      context.setResult(context.delta).exit();
      return;
    }
    context.nested = !Array.isArray(context.delta);
    if (context.nested) {
      return;
    }
    const nonNestedDelta = context.delta;
    if (nonNestedDelta.length === 1) {
      context.setResult([nonNestedDelta[0], 0, 0]).exit();
      return;
    }
    if (nonNestedDelta.length === 2) {
      context.setResult([nonNestedDelta[1], nonNestedDelta[0]]).exit();
      return;
    }
    if (nonNestedDelta.length === 3 && nonNestedDelta[2] === 0) {
      context.setResult([nonNestedDelta[0]]).exit();
    }
  };
  reverseFilter.filterName = "trivial";

  // ../../packages/jsondiffpatch/lib/filters/nested.js
  var collectChildrenDiffFilter = (context) => {
    if (!context || !context.children) {
      return;
    }
    const length = context.children.length;
    let child;
    let result = context.result;
    for (let index = 0; index < length; index++) {
      child = context.children[index];
      if (typeof child.result === "undefined") {
        continue;
      }
      result = result || {};
      result[child.childName] = child.result;
    }
    if (result && context.leftIsArray) {
      result._t = "a";
    }
    context.setResult(result).exit();
  };
  collectChildrenDiffFilter.filterName = "collectChildren";
  var objectsDiffFilter = (context) => {
    if (context.leftIsArray || context.leftType !== "object") {
      return;
    }
    const left = context.left;
    const right = context.right;
    let name;
    let child;
    const propertyFilter = context.options.propertyFilter;
    for (name in left) {
      if (!Object.prototype.hasOwnProperty.call(left, name)) {
        continue;
      }
      if (propertyFilter && !propertyFilter(name, context)) {
        continue;
      }
      child = new diff_default(left[name], right[name]);
      context.push(child, name);
    }
    for (name in right) {
      if (!Object.prototype.hasOwnProperty.call(right, name)) {
        continue;
      }
      if (propertyFilter && !propertyFilter(name, context)) {
        continue;
      }
      if (typeof left[name] === "undefined") {
        child = new diff_default(void 0, right[name]);
        context.push(child, name);
      }
    }
    if (!context.children || context.children.length === 0) {
      context.setResult(void 0).exit();
      return;
    }
    context.exit();
  };
  objectsDiffFilter.filterName = "objects";
  var patchFilter2 = function nestedPatchFilter(context) {
    if (!context.nested) {
      return;
    }
    const nestedDelta = context.delta;
    if (nestedDelta._t) {
      return;
    }
    const objectDelta = nestedDelta;
    let name;
    let child;
    for (name in objectDelta) {
      child = new patch_default(context.left[name], objectDelta[name]);
      context.push(child, name);
    }
    context.exit();
  };
  patchFilter2.filterName = "objects";
  var collectChildrenPatchFilter = function collectChildrenPatchFilter2(context) {
    if (!context || !context.children) {
      return;
    }
    const deltaWithChildren = context.delta;
    if (deltaWithChildren._t) {
      return;
    }
    const object = context.left;
    const length = context.children.length;
    let child;
    for (let index = 0; index < length; index++) {
      child = context.children[index];
      const property = child.childName;
      if (Object.prototype.hasOwnProperty.call(context.left, property) && child.result === void 0) {
        delete object[property];
      } else if (object[property] !== child.result) {
        object[property] = child.result;
      }
    }
    context.setResult(object).exit();
  };
  collectChildrenPatchFilter.filterName = "collectChildren";
  var reverseFilter2 = function nestedReverseFilter(context) {
    if (!context.nested) {
      return;
    }
    const nestedDelta = context.delta;
    if (nestedDelta._t) {
      return;
    }
    const objectDelta = context.delta;
    let name;
    let child;
    for (name in objectDelta) {
      child = new reverse_default(objectDelta[name]);
      context.push(child, name);
    }
    context.exit();
  };
  reverseFilter2.filterName = "objects";
  var collectChildrenReverseFilter = (context) => {
    if (!context || !context.children) {
      return;
    }
    const deltaWithChildren = context.delta;
    if (deltaWithChildren._t) {
      return;
    }
    const length = context.children.length;
    let child;
    const delta = {};
    for (let index = 0; index < length; index++) {
      child = context.children[index];
      const property = child.childName;
      if (delta[property] !== child.result) {
        delta[property] = child.result;
      }
    }
    context.setResult(delta).exit();
  };
  collectChildrenReverseFilter.filterName = "collectChildren";

  // ../../packages/jsondiffpatch/lib/filters/lcs.js
  var defaultMatch = function(array1, array2, index1, index2) {
    return array1[index1] === array2[index2];
  };
  var lengthMatrix = function(array1, array2, match, context) {
    const len1 = array1.length;
    const len2 = array2.length;
    let x, y;
    const matrix = new Array(len1 + 1);
    for (x = 0; x < len1 + 1; x++) {
      matrix[x] = new Array(len2 + 1);
      for (y = 0; y < len2 + 1; y++) {
        matrix[x][y] = 0;
      }
    }
    matrix.match = match;
    for (x = 1; x < len1 + 1; x++) {
      for (y = 1; y < len2 + 1; y++) {
        if (match(array1, array2, x - 1, y - 1, context)) {
          matrix[x][y] = matrix[x - 1][y - 1] + 1;
        } else {
          matrix[x][y] = Math.max(matrix[x - 1][y], matrix[x][y - 1]);
        }
      }
    }
    return matrix;
  };
  var backtrack = function(matrix, array1, array2, context) {
    let index1 = array1.length;
    let index2 = array2.length;
    const subsequence = {
      sequence: [],
      indices1: [],
      indices2: []
    };
    while (index1 !== 0 && index2 !== 0) {
      const sameLetter = matrix.match(array1, array2, index1 - 1, index2 - 1, context);
      if (sameLetter) {
        subsequence.sequence.unshift(array1[index1 - 1]);
        subsequence.indices1.unshift(index1 - 1);
        subsequence.indices2.unshift(index2 - 1);
        --index1;
        --index2;
      } else {
        const valueAtMatrixAbove = matrix[index1][index2 - 1];
        const valueAtMatrixLeft = matrix[index1 - 1][index2];
        if (valueAtMatrixAbove > valueAtMatrixLeft) {
          --index2;
        } else {
          --index1;
        }
      }
    }
    return subsequence;
  };
  var get = function(array1, array2, match, context) {
    const innerContext = context || {};
    const matrix = lengthMatrix(array1, array2, match || defaultMatch, innerContext);
    return backtrack(matrix, array1, array2, innerContext);
  };
  var lcs_default = {
    get
  };

  // ../../packages/jsondiffpatch/lib/filters/arrays.js
  var ARRAY_MOVE = 3;
  function arraysHaveMatchByRef(array1, array2, len1, len2) {
    for (let index1 = 0; index1 < len1; index1++) {
      const val1 = array1[index1];
      for (let index2 = 0; index2 < len2; index2++) {
        const val2 = array2[index2];
        if (index1 !== index2 && val1 === val2) {
          return true;
        }
      }
    }
  }
  function matchItems(array1, array2, index1, index2, context) {
    const value1 = array1[index1];
    const value2 = array2[index2];
    if (value1 === value2) {
      return true;
    }
    if (typeof value1 !== "object" || typeof value2 !== "object") {
      return false;
    }
    const objectHash = context.objectHash;
    if (!objectHash) {
      return context.matchByPosition && index1 === index2;
    }
    context.hashCache1 = context.hashCache1 || [];
    let hash1 = context.hashCache1[index1];
    if (typeof hash1 === "undefined") {
      context.hashCache1[index1] = hash1 = objectHash(value1, index1);
    }
    if (typeof hash1 === "undefined") {
      return false;
    }
    context.hashCache2 = context.hashCache2 || [];
    let hash2 = context.hashCache2[index2];
    if (typeof hash2 === "undefined") {
      context.hashCache2[index2] = hash2 = objectHash(value2, index2);
    }
    if (typeof hash2 === "undefined") {
      return false;
    }
    return hash1 === hash2;
  }
  var diffFilter2 = function arraysDiffFilter(context) {
    if (!context.leftIsArray) {
      return;
    }
    const matchContext = {
      objectHash: context.options && context.options.objectHash,
      matchByPosition: context.options && context.options.matchByPosition
    };
    let commonHead = 0;
    let commonTail = 0;
    let index;
    let index1;
    let index2;
    const array1 = context.left;
    const array2 = context.right;
    const len1 = array1.length;
    const len2 = array2.length;
    let child;
    if (len1 > 0 && len2 > 0 && !matchContext.objectHash && typeof matchContext.matchByPosition !== "boolean") {
      matchContext.matchByPosition = !arraysHaveMatchByRef(array1, array2, len1, len2);
    }
    while (commonHead < len1 && commonHead < len2 && matchItems(array1, array2, commonHead, commonHead, matchContext)) {
      index = commonHead;
      child = new diff_default(array1[index], array2[index]);
      context.push(child, index);
      commonHead++;
    }
    while (commonTail + commonHead < len1 && commonTail + commonHead < len2 && matchItems(array1, array2, len1 - 1 - commonTail, len2 - 1 - commonTail, matchContext)) {
      index1 = len1 - 1 - commonTail;
      index2 = len2 - 1 - commonTail;
      child = new diff_default(array1[index1], array2[index2]);
      context.push(child, index2);
      commonTail++;
    }
    let result;
    if (commonHead + commonTail === len1) {
      if (len1 === len2) {
        context.setResult(void 0).exit();
        return;
      }
      result = result || {
        _t: "a"
      };
      for (index = commonHead; index < len2 - commonTail; index++) {
        result[index] = [array2[index]];
      }
      context.setResult(result).exit();
      return;
    }
    if (commonHead + commonTail === len2) {
      result = result || {
        _t: "a"
      };
      for (index = commonHead; index < len1 - commonTail; index++) {
        result[`_${index}`] = [array1[index], 0, 0];
      }
      context.setResult(result).exit();
      return;
    }
    delete matchContext.hashCache1;
    delete matchContext.hashCache2;
    const trimmed1 = array1.slice(commonHead, len1 - commonTail);
    const trimmed2 = array2.slice(commonHead, len2 - commonTail);
    const seq = lcs_default.get(trimmed1, trimmed2, matchItems, matchContext);
    const removedItems = [];
    result = result || {
      _t: "a"
    };
    for (index = commonHead; index < len1 - commonTail; index++) {
      if (seq.indices1.indexOf(index - commonHead) < 0) {
        result[`_${index}`] = [array1[index], 0, 0];
        removedItems.push(index);
      }
    }
    let detectMove = true;
    if (context.options && context.options.arrays && context.options.arrays.detectMove === false) {
      detectMove = false;
    }
    let includeValueOnMove = false;
    if (context.options && context.options.arrays && context.options.arrays.includeValueOnMove) {
      includeValueOnMove = true;
    }
    const removedItemsLength = removedItems.length;
    for (index = commonHead; index < len2 - commonTail; index++) {
      const indexOnArray2 = seq.indices2.indexOf(index - commonHead);
      if (indexOnArray2 < 0) {
        let isMove = false;
        if (detectMove && removedItemsLength > 0) {
          for (let removeItemIndex1 = 0; removeItemIndex1 < removedItemsLength; removeItemIndex1++) {
            index1 = removedItems[removeItemIndex1];
            if (matchItems(trimmed1, trimmed2, index1 - commonHead, index - commonHead, matchContext)) {
              result[`_${index1}`].splice(1, 2, index, ARRAY_MOVE);
              if (!includeValueOnMove) {
                result[`_${index1}`][0] = "";
              }
              index2 = index;
              child = new diff_default(array1[index1], array2[index2]);
              context.push(child, index2);
              removedItems.splice(removeItemIndex1, 1);
              isMove = true;
              break;
            }
          }
        }
        if (!isMove) {
          result[index] = [array2[index]];
        }
      } else {
        index1 = seq.indices1[indexOnArray2] + commonHead;
        index2 = seq.indices2[indexOnArray2] + commonHead;
        child = new diff_default(array1[index1], array2[index2]);
        context.push(child, index2);
      }
    }
    context.setResult(result).exit();
  };
  diffFilter2.filterName = "arrays";
  var compare = {
    numerically(a, b) {
      return a - b;
    },
    numericallyBy(name) {
      return (a, b) => a[name] - b[name];
    }
  };
  var patchFilter3 = function nestedPatchFilter2(context) {
    if (!context.nested) {
      return;
    }
    const nestedDelta = context.delta;
    if (nestedDelta._t !== "a") {
      return;
    }
    let index;
    let index1;
    const delta = nestedDelta;
    const array = context.left;
    let toRemove = [];
    let toInsert = [];
    const toModify = [];
    for (index in delta) {
      if (index !== "_t") {
        if (index[0] === "_") {
          const removedOrMovedIndex = index;
          if (delta[removedOrMovedIndex][2] === 0 || delta[removedOrMovedIndex][2] === ARRAY_MOVE) {
            toRemove.push(parseInt(index.slice(1), 10));
          } else {
            throw new Error(`only removal or move can be applied at original array indices, invalid diff type: ${delta[removedOrMovedIndex][2]}`);
          }
        } else {
          const numberIndex = index;
          if (delta[numberIndex].length === 1) {
            toInsert.push({
              index: parseInt(numberIndex, 10),
              value: delta[numberIndex][0]
            });
          } else {
            toModify.push({
              index: parseInt(numberIndex, 10),
              delta: delta[numberIndex]
            });
          }
        }
      }
    }
    toRemove = toRemove.sort(compare.numerically);
    for (index = toRemove.length - 1; index >= 0; index--) {
      index1 = toRemove[index];
      const indexDiff = delta[`_${index1}`];
      const removedValue = array.splice(index1, 1)[0];
      if (indexDiff[2] === ARRAY_MOVE) {
        toInsert.push({
          index: indexDiff[1],
          value: removedValue
        });
      }
    }
    toInsert = toInsert.sort(compare.numericallyBy("index"));
    const toInsertLength = toInsert.length;
    for (index = 0; index < toInsertLength; index++) {
      const insertion = toInsert[index];
      array.splice(insertion.index, 0, insertion.value);
    }
    const toModifyLength = toModify.length;
    let child;
    if (toModifyLength > 0) {
      for (index = 0; index < toModifyLength; index++) {
        const modification = toModify[index];
        child = new patch_default(array[modification.index], modification.delta);
        context.push(child, modification.index);
      }
    }
    if (!context.children) {
      context.setResult(array).exit();
      return;
    }
    context.exit();
  };
  patchFilter3.filterName = "arrays";
  var collectChildrenPatchFilter3 = function collectChildrenPatchFilter4(context) {
    if (!context || !context.children) {
      return;
    }
    const deltaWithChildren = context.delta;
    if (deltaWithChildren._t !== "a") {
      return;
    }
    const array = context.left;
    const length = context.children.length;
    let child;
    for (let index = 0; index < length; index++) {
      child = context.children[index];
      const arrayIndex = child.childName;
      array[arrayIndex] = child.result;
    }
    context.setResult(array).exit();
  };
  collectChildrenPatchFilter3.filterName = "arraysCollectChildren";
  var reverseFilter3 = function arraysReverseFilter(context) {
    if (!context.nested) {
      const nonNestedDelta = context.delta;
      if (nonNestedDelta[2] === ARRAY_MOVE) {
        const arrayMoveDelta = nonNestedDelta;
        context.newName = `_${arrayMoveDelta[1]}`;
        context.setResult([
          arrayMoveDelta[0],
          parseInt(context.childName.substring(1), 10),
          ARRAY_MOVE
        ]).exit();
      }
      return;
    }
    const nestedDelta = context.delta;
    if (nestedDelta._t !== "a") {
      return;
    }
    const arrayDelta = nestedDelta;
    let name;
    let child;
    for (name in arrayDelta) {
      if (name === "_t") {
        continue;
      }
      child = new reverse_default(arrayDelta[name]);
      context.push(child, name);
    }
    context.exit();
  };
  reverseFilter3.filterName = "arrays";
  var reverseArrayDeltaIndex = (delta, index, itemDelta) => {
    if (typeof index === "string" && index[0] === "_") {
      return parseInt(index.substring(1), 10);
    } else if (Array.isArray(itemDelta) && itemDelta[2] === 0) {
      return `_${index}`;
    }
    let reverseIndex = +index;
    for (const deltaIndex in delta) {
      const deltaItem = delta[deltaIndex];
      if (Array.isArray(deltaItem)) {
        if (deltaItem[2] === ARRAY_MOVE) {
          const moveFromIndex = parseInt(deltaIndex.substring(1), 10);
          const moveToIndex = deltaItem[1];
          if (moveToIndex === +index) {
            return moveFromIndex;
          }
          if (moveFromIndex <= reverseIndex && moveToIndex > reverseIndex) {
            reverseIndex++;
          } else if (moveFromIndex >= reverseIndex && moveToIndex < reverseIndex) {
            reverseIndex--;
          }
        } else if (deltaItem[2] === 0) {
          const deleteIndex = parseInt(deltaIndex.substring(1), 10);
          if (deleteIndex <= reverseIndex) {
            reverseIndex++;
          }
        } else if (deltaItem.length === 1 && parseInt(deltaIndex, 10) <= reverseIndex) {
          reverseIndex--;
        }
      }
    }
    return reverseIndex;
  };
  var collectChildrenReverseFilter2 = (context) => {
    if (!context || !context.children) {
      return;
    }
    const deltaWithChildren = context.delta;
    if (deltaWithChildren._t !== "a") {
      return;
    }
    const arrayDelta = deltaWithChildren;
    const length = context.children.length;
    let child;
    const delta = {
      _t: "a"
    };
    for (let index = 0; index < length; index++) {
      child = context.children[index];
      let name = child.newName;
      if (typeof name === "undefined") {
        name = reverseArrayDeltaIndex(arrayDelta, child.childName, child.result);
      }
      if (delta[name] !== child.result) {
        delta[name] = child.result;
      }
    }
    context.setResult(delta).exit();
  };
  collectChildrenReverseFilter2.filterName = "arraysCollectChildren";

  // ../../packages/jsondiffpatch/lib/filters/dates.js
  var diffFilter3 = function datesDiffFilter(context) {
    if (context.left instanceof Date) {
      if (context.right instanceof Date) {
        if (context.left.getTime() !== context.right.getTime()) {
          context.setResult([context.left, context.right]);
        } else {
          context.setResult(void 0);
        }
      } else {
        context.setResult([context.left, context.right]);
      }
      context.exit();
    } else if (context.right instanceof Date) {
      context.setResult([context.left, context.right]).exit();
    }
  };
  diffFilter3.filterName = "dates";

  // ../../packages/jsondiffpatch/lib/filters/texts.js
  var TEXT_DIFF = 2;
  var DEFAULT_MIN_LENGTH = 60;
  var cachedDiffPatch = null;
  function getDiffMatchPatch(options, required) {
    var _a;
    if (!cachedDiffPatch) {
      let instance2;
      if ((_a = options === null || options === void 0 ? void 0 : options.textDiff) === null || _a === void 0 ? void 0 : _a.diffMatchPatch) {
        instance2 = new options.textDiff.diffMatchPatch();
      } else {
        if (!required) {
          return null;
        }
        const error = new Error("The diff-match-patch library was not provided. Pass the library in through the options or use the `jsondiffpatch/with-text-diffs` entry-point.");
        error.diff_match_patch_not_found = true;
        throw error;
      }
      cachedDiffPatch = {
        diff: function(txt1, txt2) {
          return instance2.patch_toText(instance2.patch_make(txt1, txt2));
        },
        patch: function(txt1, patch) {
          const results = instance2.patch_apply(instance2.patch_fromText(patch), txt1);
          for (let i2 = 0; i2 < results[1].length; i2++) {
            if (!results[1][i2]) {
              const error = new Error("text patch failed");
              error.textPatchFailed = true;
            }
          }
          return results[0];
        }
      };
    }
    return cachedDiffPatch;
  }
  var diffFilter4 = function textsDiffFilter(context) {
    if (context.leftType !== "string") {
      return;
    }
    const left = context.left;
    const right = context.right;
    const minLength = context.options && context.options.textDiff && context.options.textDiff.minLength || DEFAULT_MIN_LENGTH;
    if (left.length < minLength || right.length < minLength) {
      context.setResult([left, right]).exit();
      return;
    }
    const diffMatchPatch = getDiffMatchPatch(context.options);
    if (!diffMatchPatch) {
      context.setResult([left, right]).exit();
      return;
    }
    const diff = diffMatchPatch.diff;
    context.setResult([diff(left, right), 0, TEXT_DIFF]).exit();
  };
  diffFilter4.filterName = "texts";
  var patchFilter4 = function textsPatchFilter(context) {
    if (context.nested) {
      return;
    }
    const nonNestedDelta = context.delta;
    if (nonNestedDelta[2] !== TEXT_DIFF) {
      return;
    }
    const textDiffDelta = nonNestedDelta;
    const patch = getDiffMatchPatch(context.options, true).patch;
    context.setResult(patch(context.left, textDiffDelta[0])).exit();
  };
  patchFilter4.filterName = "texts";
  var textDeltaReverse = function(delta) {
    let i2;
    let l;
    let line;
    let lineTmp;
    let header = null;
    const headerRegex = /^@@ +-(\d+),(\d+) +\+(\d+),(\d+) +@@$/;
    let lineHeader;
    const lines = delta.split("\n");
    for (i2 = 0, l = lines.length; i2 < l; i2++) {
      line = lines[i2];
      const lineStart = line.slice(0, 1);
      if (lineStart === "@") {
        header = headerRegex.exec(line);
        lineHeader = i2;
        lines[lineHeader] = "@@ -" + header[3] + "," + header[4] + " +" + header[1] + "," + header[2] + " @@";
      } else if (lineStart === "+") {
        lines[i2] = "-" + lines[i2].slice(1);
        if (lines[i2 - 1].slice(0, 1) === "+") {
          lineTmp = lines[i2];
          lines[i2] = lines[i2 - 1];
          lines[i2 - 1] = lineTmp;
        }
      } else if (lineStart === "-") {
        lines[i2] = "+" + lines[i2].slice(1);
      }
    }
    return lines.join("\n");
  };
  var reverseFilter4 = function textsReverseFilter(context) {
    if (context.nested) {
      return;
    }
    const nonNestedDelta = context.delta;
    if (nonNestedDelta[2] !== TEXT_DIFF) {
      return;
    }
    const textDiffDelta = nonNestedDelta;
    context.setResult([textDeltaReverse(textDiffDelta[0]), 0, TEXT_DIFF]).exit();
  };
  reverseFilter4.filterName = "texts";

  // ../../packages/jsondiffpatch/lib/diffpatcher.js
  var DiffPatcher = class {
    constructor(options) {
      this.processor = new processor_default(options);
      this.processor.pipe(new pipe_default("diff").append(collectChildrenDiffFilter, diffFilter, diffFilter3, diffFilter4, objectsDiffFilter, diffFilter2).shouldHaveResult());
      this.processor.pipe(new pipe_default("patch").append(collectChildrenPatchFilter, collectChildrenPatchFilter3, patchFilter, patchFilter4, patchFilter2, patchFilter3).shouldHaveResult());
      this.processor.pipe(new pipe_default("reverse").append(collectChildrenReverseFilter, collectChildrenReverseFilter2, reverseFilter, reverseFilter4, reverseFilter2, reverseFilter3).shouldHaveResult());
    }
    options(options) {
      return this.processor.options(options);
    }
    diff(left, right) {
      return this.processor.process(new diff_default(left, right));
    }
    patch(left, delta) {
      return this.processor.process(new patch_default(left, delta));
    }
    reverse(delta) {
      return this.processor.process(new reverse_default(delta));
    }
    unpatch(right, delta) {
      return this.patch(right, this.reverse(delta));
    }
    clone(value) {
      return clone(value);
    }
  };
  var diffpatcher_default = DiffPatcher;

  // ../../packages/jsondiffpatch/lib/date-reviver.js
  function dateReviver(key, value) {
    let parts;
    if (typeof value === "string") {
      parts = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d*))?(Z|([+-])(\d{2}):(\d{2}))$/.exec(value);
      if (parts) {
        return new Date(Date.UTC(+parts[1], +parts[2] - 1, +parts[3], +parts[4], +parts[5], +parts[6], +(parts[7] || 0)));
      }
    }
    return value;
  }

  // ../../packages/jsondiffpatch/lib/with-text-diffs.js
  function create(options) {
    return new diffpatcher_default(Object.assign(Object.assign({}, options), { textDiff: Object.assign(Object.assign({}, options === null || options === void 0 ? void 0 : options.textDiff), { diffMatchPatch: import_diff_match_patch.default }) }));
  }

  // demo.ts
  var colorSchemeIsDark = () => {
    const colorSchemaMeta = (document.querySelector('meta[name="color-scheme"]') || null).content || "default";
    return colorSchemaMeta === "only dark" || colorSchemaMeta !== "only light" && window.matchMedia("(prefers-color-scheme: dark)").matches;
  };
  var onColorSchemeChange = (handler) => {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      handler(colorSchemeIsDark());
    });
    const colorSchemaMeta = document.querySelector('meta[name="color-scheme"]');
    if (colorSchemaMeta) {
      const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === "attributes" && mutation.attributeName === "content") {
            handler(colorSchemeIsDark());
          }
        }
      });
      observer.observe(colorSchemaMeta, { attributes: true });
    }
  };
  document.body.setAttribute("data-color-scheme", colorSchemeIsDark() ? "dark" : "light");
  onColorSchemeChange((dark) => {
    document.body.setAttribute("data-color-scheme", dark ? "dark" : "light");
  });
  var parseJson = (text) => {
    try {
      return JSON.parse(text, dateReviver);
    } catch {
      return (0, import_json5.parse)(text, dateReviver);
    }
  };
  var getExampleJson = function() {
    const data = {
      name: "South America",
      summary: "South America (Spanish: Am\xE9rica del Sur, Sudam\xE9rica or  \nSuram\xE9rica; Portuguese: Am\xE9rica do Sul; Quechua and Aymara:  \nUrin Awya Yala; Guarani: \xD1embyam\xE9rika; Dutch: Zuid-Amerika;  \nFrench: Am\xE9rique du Sud) is a continent situated in the  \nWestern Hemisphere, mostly in the Southern Hemisphere, with  \na relatively small portion in the Northern Hemisphere.  \nThe continent is also considered a subcontinent of the  \nAmericas.[2][3] It is bordered on the west by the Pacific  \nOcean and on the north and east by the Atlantic Ocean;  \nNorth America and the Caribbean Sea lie to the northwest.  \nIt includes twelve countries: Argentina, Bolivia, Brazil,  \nChile, Colombia, Ecuador, Guyana, Paraguay, Peru, Suriname,  \nUruguay, and Venezuela. The South American nations that  \nborder the Caribbean Sea\u2014including Colombia, Venezuela,  \nGuyana, Suriname, as well as French Guiana, which is an  \noverseas region of France\u2014are also known as Caribbean South  \nAmerica. South America has an area of 17,840,000 square  \nkilometers (6,890,000 sq mi). Its population as of 2005  \nhas been estimated at more than 371,090,000. South America  \nranks fourth in area (after Asia, Africa, and North America)  \nand fifth in population (after Asia, Africa, Europe, and  \nNorth America). The word America was coined in 1507 by  \ncartographers Martin Waldseem\xFCller and Matthias Ringmann,  \nafter Amerigo Vespucci, who was the first European to  \nsuggest that the lands newly discovered by Europeans were  \nnot India, but a New World unknown to Europeans.",
      surface: 1784e4,
      timezone: [-4, -2],
      demographics: {
        population: 385742554,
        largestCities: [
          "S\xE3o Paulo",
          "Buenos Aires",
          "Rio de Janeiro",
          "Lima",
          "Bogot\xE1"
        ]
      },
      languages: [
        "spanish",
        "portuguese",
        "english",
        "dutch",
        "french",
        "quechua",
        "guaran\xED",
        "aimara",
        "mapudungun"
      ],
      countries: [
        {
          name: "Argentina",
          capital: "Buenos Aires",
          independence: new Date(1816, 6, 9),
          unasur: true
        },
        {
          name: "Bolivia",
          capital: "La Paz",
          independence: new Date(1825, 7, 6),
          unasur: true
        },
        {
          name: "Brazil",
          capital: "Brasilia",
          independence: new Date(1822, 8, 7),
          unasur: true
        },
        {
          name: "Chile",
          capital: "Santiago",
          independence: new Date(1818, 1, 12),
          unasur: true
        },
        {
          name: "Colombia",
          capital: "Bogot\xE1",
          independence: new Date(1810, 6, 20),
          unasur: true
        },
        {
          name: "Ecuador",
          capital: "Quito",
          independence: new Date(1809, 7, 10),
          unasur: true
        },
        {
          name: "Guyana",
          capital: "Georgetown",
          independence: new Date(1966, 4, 26),
          unasur: true
        },
        {
          name: "Paraguay",
          capital: "Asunci\xF3n",
          independence: new Date(1811, 4, 14),
          unasur: true
        },
        {
          name: "Peru",
          capital: "Lima",
          independence: new Date(1821, 6, 28),
          unasur: true
        },
        {
          name: "Suriname",
          capital: "Paramaribo",
          independence: new Date(1975, 10, 25),
          unasur: true
        },
        {
          name: "Uruguay",
          capital: "Montevideo",
          independence: new Date(1825, 7, 25),
          unasur: true
        },
        {
          name: "Venezuela",
          capital: "Caracas",
          independence: new Date(1811, 6, 5),
          unasur: true
        }
      ]
    };
    const json = [JSON.stringify(data, null, 2)];
    data.summary = data.summary.replace("Brazil", "Brasil").replace("also known as", "a.k.a.");
    data.languages[2] = "ingl\xE9s";
    data.countries.pop();
    data.countries.pop();
    data.countries[0].capital = "Rawson";
    data.countries.push({
      name: "Ant\xE1rtida",
      unasur: false
    });
    data.countries[4].population = 42888594;
    data.countries.splice(11, 0, data.countries.splice(4, 1)[0]);
    data.countries.splice(2, 0, data.countries.splice(7, 1)[0]);
    delete data.surface;
    data.spanishName = "Sudam\xE9rica";
    data.demographics.population += 2342;
    json.push(JSON.stringify(data, null, 2));
    return json;
  };
  var instance = create({
    objectHash: function(obj, index) {
      const objRecord = obj;
      if (typeof objRecord._id !== "undefined") {
        return objRecord._id;
      }
      if (typeof objRecord.id !== "undefined") {
        return objRecord.id;
      }
      if (typeof objRecord.name !== "undefined") {
        return objRecord.name;
      }
      return "$$index:" + index;
    }
  });
  var dom = {
    addClass: function(el2, className) {
      if (el2.classList) {
        el2.classList.add(className);
      } else {
        el2.className += " " + className;
      }
    },
    removeClass: function(el2, className) {
      if (el2.classList) {
        el2.classList.remove(className);
      } else {
        el2.className = el2.className.replace(
          new RegExp(
            "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
            "gi"
          ),
          " "
        );
      }
    },
    text: function(el2, text) {
      if (typeof el2.textContent !== "undefined") {
        if (typeof text === "undefined") {
          return el2.textContent;
        }
        el2.textContent = text;
      } else {
        if (typeof text === "undefined") {
          return el2.innerText;
        }
        el2.innerText = text;
      }
    },
    getJson: function(url, callback) {
      if (!url.startsWith("https://api.github.com/gists")) {
        return callback(null, "invalid url, for security reasons only gists are allowed");
      }
      let request = new XMLHttpRequest();
      request.open("GET", url, true);
      request.onreadystatechange = function() {
        if (this.readyState === 4) {
          let data;
          try {
            data = parseJson(this.responseText);
          } catch (parseError) {
            return callback("parse error: " + parseError);
          }
          if (this.status >= 200 && this.status < 400) {
            callback(null, data);
          } else {
            callback(new Error("request failed"), data);
          }
        }
      };
      request.send();
      request = null;
    },
    runScriptTags: function(el) {
      const scripts = el.querySelectorAll("script");
      for (let i = 0; i < scripts.length; i++) {
        const s = scripts[i];
        eval(s.innerHTML);
      }
    }
  };
  var trim = function(str) {
    return str.replace(/^\s+|\s+$/g, "");
  };
  var JsonArea = class {
    constructor(element) {
      this.error = (err) => {
        const errorElement = this.container.querySelector(".error-message");
        if (!err) {
          dom.removeClass(this.container, "json-error");
          errorElement.innerHTML = "";
          return;
        }
        errorElement.innerHTML = err + "";
        dom.addClass(this.container, "json-error");
      };
      this.getValue = () => {
        if (!this.editor) {
          return this.element.value;
        }
        return this.editor.getValue();
      };
      this.parse = () => {
        const txt = trim(this.getValue());
        try {
          this.error(false);
          if (/^\d+(.\d+)?(e[+-]?\d+)?$/i.test(txt) || /^(true|false)$/.test(txt) || /^["].*["]$/.test(txt) || /^[{[](.|\n)*[}\]]$/.test(txt)) {
            return parseJson(txt);
          }
          return this.getValue();
        } catch (err) {
          this.error(err);
          throw err;
        }
      };
      this.setValue = (value) => {
        if (!this.editor) {
          this.element.value = value;
          return;
        }
        this.editor.setValue(value);
      };
      this.prettyfy = () => {
        const value = this.parse();
        const prettyJson = typeof value === "string" ? value : JSON.stringify(value, null, 2);
        this.setValue(prettyJson);
      };
      /* global CodeMirror */
      this.makeEditor = (readOnly) => {
        if (typeof CodeMirror === "undefined") {
          return;
        }
        const getTheme = () => colorSchemeIsDark() ? "monokai" : "default";
        const editor = CodeMirror.fromTextArea(this.element, {
          mode: "javascript",
          json: true,
          readOnly,
          theme: getTheme()
        });
        this.editor = editor;
        onColorSchemeChange(() => {
          editor.setOption("theme", getTheme());
        });
        if (!readOnly) {
          this.editor.on("change", compare2);
        }
      };
      this.element = element;
      this.container = element.parentNode;
      const self2 = this;
      const prettifyButton = this.container.querySelector(
        ".prettyfy"
      );
      if (prettifyButton) {
        prettifyButton.addEventListener("click", function() {
          self2.prettyfy();
        });
      }
    }
  };
  var areas = {
    left: new JsonArea(
      document.getElementById("json-input-left")
    ),
    right: new JsonArea(
      document.getElementById("json-input-right")
    ),
    delta: new JsonArea(
      document.getElementById("json-delta")
    )
  };
  var compare2 = function() {
    let left, right, error;
    document.getElementById("results").style.display = "none";
    try {
      left = areas.left.parse();
    } catch (err) {
      error = err;
    }
    try {
      right = areas.right.parse();
    } catch (err) {
      error = err;
    }
    areas.delta.error(false);
    if (error) {
      areas.delta.setValue("");
      return;
    }
    const selectedType = getSelectedDeltaType();
    const visualdiff = document.getElementById("visualdiff");
    const annotateddiff = document.getElementById("annotateddiff");
    const jsondifflength = document.getElementById("jsondifflength");
    try {
      const delta = instance.diff(left, right);
      if (typeof delta === "undefined") {
        switch (selectedType) {
          case "visual":
            visualdiff.innerHTML = "no diff";
            break;
          case "annotated":
            annotateddiff.innerHTML = "no diff";
            break;
          case "json":
            areas.delta.setValue("no diff");
            jsondifflength.innerHTML = "0";
            break;
        }
      } else {
        switch (selectedType) {
          case "visual":
            visualdiff.innerHTML = format2(delta, left);
            if (!document.getElementById("showunchanged").checked) {
              hideUnchanged();
            }
            dom.runScriptTags(visualdiff);
            break;
          case "annotated":
            annotateddiff.innerHTML = format(delta);
            break;
          case "json":
            areas.delta.setValue(JSON.stringify(delta, null, 2));
            jsondifflength.innerHTML = Math.round(JSON.stringify(delta).length / 102.4) / 10 + "";
            break;
        }
      }
    } catch (err) {
      jsondifflength.innerHTML = "0";
      visualdiff.innerHTML = "";
      annotateddiff.innerHTML = "";
      areas.delta.setValue("");
      areas.delta.error(err);
      if (typeof console !== "undefined" && console.error) {
        console.error(err);
        console.error(err.stack);
      }
    }
    document.getElementById("results").style.display = "";
  };
  areas.left.makeEditor();
  areas.right.makeEditor();
  areas.delta.makeEditor(true);
  areas.left.element.addEventListener("change", compare2);
  areas.right.element.addEventListener("change", compare2);
  areas.left.element.addEventListener("keyup", compare2);
  areas.right.element.addEventListener("keyup", compare2);
  var getSelectedDeltaType = function() {
    if (document.getElementById("show-delta-type-visual").checked) {
      return "visual";
    }
    if (document.getElementById("show-delta-type-annotated").checked) {
      return "annotated";
    }
    if (document.getElementById("show-delta-type-json").checked) {
      return "json";
    }
  };
  var showSelectedDeltaType = function() {
    const type = getSelectedDeltaType();
    document.getElementById("delta-panel-visual").style.display = type === "visual" ? "" : "none";
    document.getElementById("delta-panel-annotated").style.display = type === "annotated" ? "" : "none";
    document.getElementById("delta-panel-json").style.display = type === "json" ? "" : "none";
    compare2();
    if (type === "json") {
      areas.delta.editor.refresh();
    }
  };
  document.getElementById("show-delta-type-visual").addEventListener("click", showSelectedDeltaType);
  document.getElementById("show-delta-type-annotated").addEventListener("click", showSelectedDeltaType);
  document.getElementById("show-delta-type-json").addEventListener("click", showSelectedDeltaType);
  document.getElementById("swap").addEventListener("click", function() {
    const leftValue = areas.left.getValue();
    areas.left.setValue(areas.right.getValue());
    areas.right.setValue(leftValue);
    compare2();
  });
  document.getElementById("clear").addEventListener("click", function() {
    areas.left.setValue("");
    areas.right.setValue("");
    compare2();
  });
  document.getElementById("showunchanged").addEventListener("change", function() {
    showUnchanged(
      document.getElementById("showunchanged").checked,
      null,
      800
    );
  });
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(compare2);
  });
  var load = {
    data: function(dataArg) {
      const data = dataArg || {};
      dom.text(document.getElementById("description"), data.description || "");
      if (data.url && trim(data.url).substring(0, 10) !== "javascript") {
        document.getElementById("external-link").setAttribute("href", data.url);
        document.getElementById("external-link").style.display = "";
      } else {
        document.getElementById("external-link").style.display = "none";
      }
      const leftValue = data.left ? data.left.content || data.left : "";
      areas.left.setValue(leftValue);
      const rightValue = data.right ? data.right.content || data.right : "";
      areas.right.setValue(rightValue);
      dom.text(
        document.getElementById("json-panel-left").querySelector("h2"),
        data.left && data.left.name || "left.json"
      );
      dom.text(
        document.getElementById("json-panel-right").querySelector("h2"),
        data.right && data.right.name || "right.json"
      );
      document.getElementById("json-panel-left").querySelector("h2").setAttribute(
        "title",
        data.left && data.left.fullname || ""
      );
      document.getElementById("json-panel-right").querySelector("h2").setAttribute(
        "title",
        data.right && data.right.fullname || ""
      );
      if (data.error) {
        areas.left.setValue("ERROR LOADING: " + data.error);
        areas.right.setValue("");
      }
    },
    gist: function(id) {
      dom.getJson("https://api.github.com/gists/" + id, function(error, data) {
        if (error) {
          const gistError = data;
          const message = error + (gistError && gistError.message ? gistError.message : "");
          load.data({
            error: message
          });
          return;
        }
        const gistData = data;
        const filenames = [];
        for (const filename in gistData.files) {
          const file = gistData.files[filename];
          if (file.language === "JSON") {
            filenames.push(filename);
          }
        }
        filenames.sort();
        const files = [
          gistData.files[filenames[0]],
          gistData.files[filenames[1]]
        ];
        load.data({
          url: gistData.html_url,
          description: gistData.description,
          left: {
            name: files[0].filename,
            content: files[0].content
          },
          right: {
            name: files[1].filename,
            content: files[1].content
          }
        });
      });
    },
    leftright: function(descriptionArg, leftValueArg, rightValueArg) {
      try {
        const description = decodeURIComponent(descriptionArg || "");
        const leftValue = decodeURIComponent(leftValueArg);
        const rightValue = decodeURIComponent(rightValueArg);
        const urlmatch = /https?:\/\/.*\/([^/]+\.json)(?:[?#].*)?/;
        const dataLoaded = {
          description,
          left: {},
          right: {}
        };
        const loadIfReady = function() {
          if (typeof dataLoaded.left.content !== "undefined" && typeof dataLoaded.right.content !== "undefined") {
            load.data(dataLoaded);
          }
        };
        if (urlmatch.test(leftValue)) {
          dataLoaded.left.name = urlmatch.exec(leftValue)[1];
          dataLoaded.left.fullname = leftValue;
          dom.getJson(leftValue, function(error, data) {
            if (error) {
              dataLoaded.left.content = error + (data && data.message ? data.message : "");
            } else {
              dataLoaded.left.content = JSON.stringify(data, null, 2);
            }
            loadIfReady();
          });
        } else {
          dataLoaded.left.content = leftValue;
        }
        if (urlmatch.test(rightValue)) {
          dataLoaded.right.name = urlmatch.exec(rightValue)[1];
          dataLoaded.right.fullname = rightValue;
          dom.getJson(rightValue, function(error, data) {
            if (error) {
              dataLoaded.right.content = error + (data && data.message ? data.message : "");
            } else {
              dataLoaded.right.content = JSON.stringify(data, null, 2);
            }
            loadIfReady();
          });
        } else {
          dataLoaded.right.content = rightValue;
        }
        loadIfReady();
      } catch (err) {
        load.data({
          error: err
        });
      }
    },
    key: function(key) {
      const matchers = {
        gist: /^(?:https?:\/\/)?(?:gist\.github\.com\/)?(?:[\w0-9\-a-f]+\/)?([0-9a-f]+)$/i,
        leftright: /^(?:desc=(.*)?&)?left=(.*)&right=(.*)&?$/i
      };
      for (const loader in matchers) {
        const match = matchers[loader].exec(key);
        if (match) {
          return load[loader].apply(load, match.slice(1));
        }
      }
      load.data({
        error: "unsupported source: " + key
      });
    }
  };
  var urlQuery = /^[^?]*\?([^#]+)/.exec(document.location.href);
  if (urlQuery) {
    load.key(urlQuery[1]);
  } else {
    const exampleJson = getExampleJson();
    load.data({
      left: exampleJson[0],
      right: exampleJson[1]
    });
  }
  document.getElementById("examples").addEventListener(
    "change",
    function() {
      const example = trim(this.value);
      switch (example) {
        case "text": {
          const exampleJson = getExampleJson();
          load.data({
            left: {
              name: "left.txt",
              content: JSON.parse(exampleJson[0]).summary
            },
            right: {
              name: "right.txt",
              content: JSON.parse(exampleJson[1]).summary
            }
          });
          break;
        }
        case "gist":
          document.location = "?benjamine/9188826";
          break;
        case "moving":
          document.location = "?desc=moving%20around&left=" + encodeURIComponent(
            JSON.stringify([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
          ) + "&right=" + encodeURIComponent(
            JSON.stringify([10, 0, 1, 7, 2, 4, 5, 6, 88, 9, 3])
          );
          break;
        case "query":
          document.location = "?desc=encoded%20in%20url&left=" + /* jshint quotmark: false */
          encodeURIComponent(
            JSON.stringify({
              "don't": "abuse",
              with: ["large", "urls"]
            })
          ) + "&right=" + encodeURIComponent(
            JSON.stringify({
              "don't": "use",
              with: [">", 2, "KB urls"]
            })
          );
          break;
        default:
          document.location = "?";
          break;
      }
    }
  );
})();
