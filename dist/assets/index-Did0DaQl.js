var ME = Object.defineProperty;
var OE = (r, t, i) =>
  t in r
    ? ME(r, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
    : (r[t] = i);
var z0 = (r, t, i) => OE(r, typeof t != "symbol" ? t + "" : t, i);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) s(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const c of o.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && s(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function s(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = i(l);
    fetch(l.href, o);
  }
})();
function DE(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
var Sf = { exports: {} },
  Et = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var N0;
function LE() {
  if (N0) return Et;
  N0 = 1;
  var r = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    o = Symbol.for("react.consumer"),
    c = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    d = Symbol.for("react.suspense"),
    _ = Symbol.for("react.memo"),
    m = Symbol.for("react.lazy"),
    y = Symbol.iterator;
  function v(C) {
    return C === null || typeof C != "object"
      ? null
      : ((C = (y && C[y]) || C["@@iterator"]),
        typeof C == "function" ? C : null);
  }
  var E = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    x = Object.assign,
    R = {};
  function b(C, X, U) {
    (this.props = C),
      (this.context = X),
      (this.refs = R),
      (this.updater = U || E);
  }
  (b.prototype.isReactComponent = {}),
    (b.prototype.setState = function (C, X) {
      if (typeof C != "object" && typeof C != "function" && C != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, C, X, "setState");
    }),
    (b.prototype.forceUpdate = function (C) {
      this.updater.enqueueForceUpdate(this, C, "forceUpdate");
    });
  function w() {}
  w.prototype = b.prototype;
  function M(C, X, U) {
    (this.props = C),
      (this.context = X),
      (this.refs = R),
      (this.updater = U || E);
  }
  var G = (M.prototype = new w());
  (G.constructor = M), x(G, b.prototype), (G.isPureReactComponent = !0);
  var I = Array.isArray,
    D = { H: null, A: null, T: null, S: null },
    j = Object.prototype.hasOwnProperty;
  function Q(C, X, U, tt, J, lt) {
    return (
      (U = lt.ref),
      { $$typeof: r, type: C, key: X, ref: U !== void 0 ? U : null, props: lt }
    );
  }
  function Z(C, X) {
    return Q(C.type, X, void 0, void 0, void 0, C.props);
  }
  function F(C) {
    return typeof C == "object" && C !== null && C.$$typeof === r;
  }
  function q(C) {
    var X = { "=": "=0", ":": "=2" };
    return (
      "$" +
      C.replace(/[=:]/g, function (U) {
        return X[U];
      })
    );
  }
  var rt = /\/+/g;
  function it(C, X) {
    return typeof C == "object" && C !== null && C.key != null
      ? q("" + C.key)
      : X.toString(36);
  }
  function ot() {}
  function st(C) {
    switch (C.status) {
      case "fulfilled":
        return C.value;
      case "rejected":
        throw C.reason;
      default:
        switch (
          (typeof C.status == "string"
            ? C.then(ot, ot)
            : ((C.status = "pending"),
              C.then(
                function (X) {
                  C.status === "pending" &&
                    ((C.status = "fulfilled"), (C.value = X));
                },
                function (X) {
                  C.status === "pending" &&
                    ((C.status = "rejected"), (C.reason = X));
                },
              )),
          C.status)
        ) {
          case "fulfilled":
            return C.value;
          case "rejected":
            throw C.reason;
        }
    }
    throw C;
  }
  function nt(C, X, U, tt, J) {
    var lt = typeof C;
    (lt === "undefined" || lt === "boolean") && (C = null);
    var ct = !1;
    if (C === null) ct = !0;
    else
      switch (lt) {
        case "bigint":
        case "string":
        case "number":
          ct = !0;
          break;
        case "object":
          switch (C.$$typeof) {
            case r:
            case t:
              ct = !0;
              break;
            case m:
              return (ct = C._init), nt(ct(C._payload), X, U, tt, J);
          }
      }
    if (ct)
      return (
        (J = J(C)),
        (ct = tt === "" ? "." + it(C, 0) : tt),
        I(J)
          ? ((U = ""),
            ct != null && (U = ct.replace(rt, "$&/") + "/"),
            nt(J, X, U, "", function (Ut) {
              return Ut;
            }))
          : J != null &&
            (F(J) &&
              (J = Z(
                J,
                U +
                  (J.key == null || (C && C.key === J.key)
                    ? ""
                    : ("" + J.key).replace(rt, "$&/") + "/") +
                  ct,
              )),
            X.push(J)),
        1
      );
    ct = 0;
    var Nt = tt === "" ? "." : tt + ":";
    if (I(C))
      for (var mt = 0; mt < C.length; mt++)
        (tt = C[mt]), (lt = Nt + it(tt, mt)), (ct += nt(tt, X, U, lt, J));
    else if (((mt = v(C)), typeof mt == "function"))
      for (C = mt.call(C), mt = 0; !(tt = C.next()).done; )
        (tt = tt.value), (lt = Nt + it(tt, mt++)), (ct += nt(tt, X, U, lt, J));
    else if (lt === "object") {
      if (typeof C.then == "function") return nt(st(C), X, U, tt, J);
      throw (
        ((X = String(C)),
        Error(
          "Objects are not valid as a React child (found: " +
            (X === "[object Object]"
              ? "object with keys {" + Object.keys(C).join(", ") + "}"
              : X) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    }
    return ct;
  }
  function Y(C, X, U) {
    if (C == null) return C;
    var tt = [],
      J = 0;
    return (
      nt(C, tt, "", "", function (lt) {
        return X.call(U, lt, J++);
      }),
      tt
    );
  }
  function V(C) {
    if (C._status === -1) {
      var X = C._result;
      (X = X()),
        X.then(
          function (U) {
            (C._status === 0 || C._status === -1) &&
              ((C._status = 1), (C._result = U));
          },
          function (U) {
            (C._status === 0 || C._status === -1) &&
              ((C._status = 2), (C._result = U));
          },
        ),
        C._status === -1 && ((C._status = 0), (C._result = X));
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var W =
    typeof reportError == "function"
      ? reportError
      : function (C) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var X = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof C == "object" &&
                C !== null &&
                typeof C.message == "string"
                  ? String(C.message)
                  : String(C),
              error: C,
            });
            if (!window.dispatchEvent(X)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", C);
            return;
          }
          console.error(C);
        };
  function $() {}
  return (
    (Et.Children = {
      map: Y,
      forEach: function (C, X, U) {
        Y(
          C,
          function () {
            X.apply(this, arguments);
          },
          U,
        );
      },
      count: function (C) {
        var X = 0;
        return (
          Y(C, function () {
            X++;
          }),
          X
        );
      },
      toArray: function (C) {
        return (
          Y(C, function (X) {
            return X;
          }) || []
        );
      },
      only: function (C) {
        if (!F(C))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return C;
      },
    }),
    (Et.Component = b),
    (Et.Fragment = i),
    (Et.Profiler = l),
    (Et.PureComponent = M),
    (Et.StrictMode = s),
    (Et.Suspense = d),
    (Et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D),
    (Et.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (Et.cache = function (C) {
      return function () {
        return C.apply(null, arguments);
      };
    }),
    (Et.cloneElement = function (C, X, U) {
      if (C == null)
        throw Error(
          "The argument must be a React element, but you passed " + C + ".",
        );
      var tt = x({}, C.props),
        J = C.key,
        lt = void 0;
      if (X != null)
        for (ct in (X.ref !== void 0 && (lt = void 0),
        X.key !== void 0 && (J = "" + X.key),
        X))
          !j.call(X, ct) ||
            ct === "key" ||
            ct === "__self" ||
            ct === "__source" ||
            (ct === "ref" && X.ref === void 0) ||
            (tt[ct] = X[ct]);
      var ct = arguments.length - 2;
      if (ct === 1) tt.children = U;
      else if (1 < ct) {
        for (var Nt = Array(ct), mt = 0; mt < ct; mt++)
          Nt[mt] = arguments[mt + 2];
        tt.children = Nt;
      }
      return Q(C.type, J, void 0, void 0, lt, tt);
    }),
    (Et.createContext = function (C) {
      return (
        (C = {
          $$typeof: c,
          _currentValue: C,
          _currentValue2: C,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (C.Provider = C),
        (C.Consumer = { $$typeof: o, _context: C }),
        C
      );
    }),
    (Et.createElement = function (C, X, U) {
      var tt,
        J = {},
        lt = null;
      if (X != null)
        for (tt in (X.key !== void 0 && (lt = "" + X.key), X))
          j.call(X, tt) &&
            tt !== "key" &&
            tt !== "__self" &&
            tt !== "__source" &&
            (J[tt] = X[tt]);
      var ct = arguments.length - 2;
      if (ct === 1) J.children = U;
      else if (1 < ct) {
        for (var Nt = Array(ct), mt = 0; mt < ct; mt++)
          Nt[mt] = arguments[mt + 2];
        J.children = Nt;
      }
      if (C && C.defaultProps)
        for (tt in ((ct = C.defaultProps), ct))
          J[tt] === void 0 && (J[tt] = ct[tt]);
      return Q(C, lt, void 0, void 0, null, J);
    }),
    (Et.createRef = function () {
      return { current: null };
    }),
    (Et.forwardRef = function (C) {
      return { $$typeof: h, render: C };
    }),
    (Et.isValidElement = F),
    (Et.lazy = function (C) {
      return { $$typeof: m, _payload: { _status: -1, _result: C }, _init: V };
    }),
    (Et.memo = function (C, X) {
      return { $$typeof: _, type: C, compare: X === void 0 ? null : X };
    }),
    (Et.startTransition = function (C) {
      var X = D.T,
        U = {};
      D.T = U;
      try {
        var tt = C(),
          J = D.S;
        J !== null && J(U, tt),
          typeof tt == "object" &&
            tt !== null &&
            typeof tt.then == "function" &&
            tt.then($, W);
      } catch (lt) {
        W(lt);
      } finally {
        D.T = X;
      }
    }),
    (Et.unstable_useCacheRefresh = function () {
      return D.H.useCacheRefresh();
    }),
    (Et.use = function (C) {
      return D.H.use(C);
    }),
    (Et.useActionState = function (C, X, U) {
      return D.H.useActionState(C, X, U);
    }),
    (Et.useCallback = function (C, X) {
      return D.H.useCallback(C, X);
    }),
    (Et.useContext = function (C) {
      return D.H.useContext(C);
    }),
    (Et.useDebugValue = function () {}),
    (Et.useDeferredValue = function (C, X) {
      return D.H.useDeferredValue(C, X);
    }),
    (Et.useEffect = function (C, X) {
      return D.H.useEffect(C, X);
    }),
    (Et.useId = function () {
      return D.H.useId();
    }),
    (Et.useImperativeHandle = function (C, X, U) {
      return D.H.useImperativeHandle(C, X, U);
    }),
    (Et.useInsertionEffect = function (C, X) {
      return D.H.useInsertionEffect(C, X);
    }),
    (Et.useLayoutEffect = function (C, X) {
      return D.H.useLayoutEffect(C, X);
    }),
    (Et.useMemo = function (C, X) {
      return D.H.useMemo(C, X);
    }),
    (Et.useOptimistic = function (C, X) {
      return D.H.useOptimistic(C, X);
    }),
    (Et.useReducer = function (C, X, U) {
      return D.H.useReducer(C, X, U);
    }),
    (Et.useRef = function (C) {
      return D.H.useRef(C);
    }),
    (Et.useState = function (C) {
      return D.H.useState(C);
    }),
    (Et.useSyncExternalStore = function (C, X, U) {
      return D.H.useSyncExternalStore(C, X, U);
    }),
    (Et.useTransition = function () {
      return D.H.useTransition();
    }),
    (Et.version = "19.0.0"),
    Et
  );
}
var G0;
function dd() {
  return G0 || ((G0 = 1), (Sf.exports = LE())), Sf.exports;
}
var hs = dd();
const zi = DE(hs);
var xf = { exports: {} },
  Ta = {},
  Tf = { exports: {} },
  Cf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var F0;
function IE() {
  return (
    F0 ||
      ((F0 = 1),
      (function (r) {
        function t(Y, V) {
          var W = Y.length;
          Y.push(V);
          t: for (; 0 < W; ) {
            var $ = (W - 1) >>> 1,
              C = Y[$];
            if (0 < l(C, V)) (Y[$] = V), (Y[W] = C), (W = $);
            else break t;
          }
        }
        function i(Y) {
          return Y.length === 0 ? null : Y[0];
        }
        function s(Y) {
          if (Y.length === 0) return null;
          var V = Y[0],
            W = Y.pop();
          if (W !== V) {
            Y[0] = W;
            t: for (var $ = 0, C = Y.length, X = C >>> 1; $ < X; ) {
              var U = 2 * ($ + 1) - 1,
                tt = Y[U],
                J = U + 1,
                lt = Y[J];
              if (0 > l(tt, W))
                J < C && 0 > l(lt, tt)
                  ? ((Y[$] = lt), (Y[J] = W), ($ = J))
                  : ((Y[$] = tt), (Y[U] = W), ($ = U));
              else if (J < C && 0 > l(lt, W)) (Y[$] = lt), (Y[J] = W), ($ = J);
              else break t;
            }
          }
          return V;
        }
        function l(Y, V) {
          var W = Y.sortIndex - V.sortIndex;
          return W !== 0 ? W : Y.id - V.id;
        }
        if (
          ((r.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var o = performance;
          r.unstable_now = function () {
            return o.now();
          };
        } else {
          var c = Date,
            h = c.now();
          r.unstable_now = function () {
            return c.now() - h;
          };
        }
        var d = [],
          _ = [],
          m = 1,
          y = null,
          v = 3,
          E = !1,
          x = !1,
          R = !1,
          b = typeof setTimeout == "function" ? setTimeout : null,
          w = typeof clearTimeout == "function" ? clearTimeout : null,
          M = typeof setImmediate < "u" ? setImmediate : null;
        function G(Y) {
          for (var V = i(_); V !== null; ) {
            if (V.callback === null) s(_);
            else if (V.startTime <= Y)
              s(_), (V.sortIndex = V.expirationTime), t(d, V);
            else break;
            V = i(_);
          }
        }
        function I(Y) {
          if (((R = !1), G(Y), !x))
            if (i(d) !== null) (x = !0), st();
            else {
              var V = i(_);
              V !== null && nt(I, V.startTime - Y);
            }
        }
        var D = !1,
          j = -1,
          Q = 5,
          Z = -1;
        function F() {
          return !(r.unstable_now() - Z < Q);
        }
        function q() {
          if (D) {
            var Y = r.unstable_now();
            Z = Y;
            var V = !0;
            try {
              t: {
                (x = !1), R && ((R = !1), w(j), (j = -1)), (E = !0);
                var W = v;
                try {
                  e: {
                    for (
                      G(Y), y = i(d);
                      y !== null && !(y.expirationTime > Y && F());

                    ) {
                      var $ = y.callback;
                      if (typeof $ == "function") {
                        (y.callback = null), (v = y.priorityLevel);
                        var C = $(y.expirationTime <= Y);
                        if (((Y = r.unstable_now()), typeof C == "function")) {
                          (y.callback = C), G(Y), (V = !0);
                          break e;
                        }
                        y === i(d) && s(d), G(Y);
                      } else s(d);
                      y = i(d);
                    }
                    if (y !== null) V = !0;
                    else {
                      var X = i(_);
                      X !== null && nt(I, X.startTime - Y), (V = !1);
                    }
                  }
                  break t;
                } finally {
                  (y = null), (v = W), (E = !1);
                }
                V = void 0;
              }
            } finally {
              V ? rt() : (D = !1);
            }
          }
        }
        var rt;
        if (typeof M == "function")
          rt = function () {
            M(q);
          };
        else if (typeof MessageChannel < "u") {
          var it = new MessageChannel(),
            ot = it.port2;
          (it.port1.onmessage = q),
            (rt = function () {
              ot.postMessage(null);
            });
        } else
          rt = function () {
            b(q, 0);
          };
        function st() {
          D || ((D = !0), rt());
        }
        function nt(Y, V) {
          j = b(function () {
            Y(r.unstable_now());
          }, V);
        }
        (r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (Y) {
            Y.callback = null;
          }),
          (r.unstable_continueExecution = function () {
            x || E || ((x = !0), st());
          }),
          (r.unstable_forceFrameRate = function (Y) {
            0 > Y || 125 < Y
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Q = 0 < Y ? Math.floor(1e3 / Y) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return v;
          }),
          (r.unstable_getFirstCallbackNode = function () {
            return i(d);
          }),
          (r.unstable_next = function (Y) {
            switch (v) {
              case 1:
              case 2:
              case 3:
                var V = 3;
                break;
              default:
                V = v;
            }
            var W = v;
            v = V;
            try {
              return Y();
            } finally {
              v = W;
            }
          }),
          (r.unstable_pauseExecution = function () {}),
          (r.unstable_requestPaint = function () {}),
          (r.unstable_runWithPriority = function (Y, V) {
            switch (Y) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                Y = 3;
            }
            var W = v;
            v = Y;
            try {
              return V();
            } finally {
              v = W;
            }
          }),
          (r.unstable_scheduleCallback = function (Y, V, W) {
            var $ = r.unstable_now();
            switch (
              (typeof W == "object" && W !== null
                ? ((W = W.delay),
                  (W = typeof W == "number" && 0 < W ? $ + W : $))
                : (W = $),
              Y)
            ) {
              case 1:
                var C = -1;
                break;
              case 2:
                C = 250;
                break;
              case 5:
                C = 1073741823;
                break;
              case 4:
                C = 1e4;
                break;
              default:
                C = 5e3;
            }
            return (
              (C = W + C),
              (Y = {
                id: m++,
                callback: V,
                priorityLevel: Y,
                startTime: W,
                expirationTime: C,
                sortIndex: -1,
              }),
              W > $
                ? ((Y.sortIndex = W),
                  t(_, Y),
                  i(d) === null &&
                    Y === i(_) &&
                    (R ? (w(j), (j = -1)) : (R = !0), nt(I, W - $)))
                : ((Y.sortIndex = C), t(d, Y), x || E || ((x = !0), st())),
              Y
            );
          }),
          (r.unstable_shouldYield = F),
          (r.unstable_wrapCallback = function (Y) {
            var V = v;
            return function () {
              var W = v;
              v = V;
              try {
                return Y.apply(this, arguments);
              } finally {
                v = W;
              }
            };
          });
      })(Cf)),
    Cf
  );
}
var U0;
function zE() {
  return U0 || ((U0 = 1), (Tf.exports = IE())), Tf.exports;
}
var Rf = { exports: {} },
  we = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var X0;
function NE() {
  if (X0) return we;
  X0 = 1;
  var r = dd();
  function t(d) {
    var _ = "https://react.dev/errors/" + d;
    if (1 < arguments.length) {
      _ += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var m = 2; m < arguments.length; m++)
        _ += "&args[]=" + encodeURIComponent(arguments[m]);
    }
    return (
      "Minified React error #" +
      d +
      "; visit " +
      _ +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function i() {}
  var s = {
      d: {
        f: i,
        r: function () {
          throw Error(t(522));
        },
        D: i,
        C: i,
        L: i,
        m: i,
        X: i,
        S: i,
        M: i,
      },
      p: 0,
      findDOMNode: null,
    },
    l = Symbol.for("react.portal");
  function o(d, _, m) {
    var y =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: y == null ? null : "" + y,
      children: d,
      containerInfo: _,
      implementation: m,
    };
  }
  var c = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(d, _) {
    if (d === "font") return "";
    if (typeof _ == "string") return _ === "use-credentials" ? _ : "";
  }
  return (
    (we.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (we.createPortal = function (d, _) {
      var m =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_ || (_.nodeType !== 1 && _.nodeType !== 9 && _.nodeType !== 11))
        throw Error(t(299));
      return o(d, _, null, m);
    }),
    (we.flushSync = function (d) {
      var _ = c.T,
        m = s.p;
      try {
        if (((c.T = null), (s.p = 2), d)) return d();
      } finally {
        (c.T = _), (s.p = m), s.d.f();
      }
    }),
    (we.preconnect = function (d, _) {
      typeof d == "string" &&
        (_
          ? ((_ = _.crossOrigin),
            (_ =
              typeof _ == "string"
                ? _ === "use-credentials"
                  ? _
                  : ""
                : void 0))
          : (_ = null),
        s.d.C(d, _));
    }),
    (we.prefetchDNS = function (d) {
      typeof d == "string" && s.d.D(d);
    }),
    (we.preinit = function (d, _) {
      if (typeof d == "string" && _ && typeof _.as == "string") {
        var m = _.as,
          y = h(m, _.crossOrigin),
          v = typeof _.integrity == "string" ? _.integrity : void 0,
          E = typeof _.fetchPriority == "string" ? _.fetchPriority : void 0;
        m === "style"
          ? s.d.S(d, typeof _.precedence == "string" ? _.precedence : void 0, {
              crossOrigin: y,
              integrity: v,
              fetchPriority: E,
            })
          : m === "script" &&
            s.d.X(d, {
              crossOrigin: y,
              integrity: v,
              fetchPriority: E,
              nonce: typeof _.nonce == "string" ? _.nonce : void 0,
            });
      }
    }),
    (we.preinitModule = function (d, _) {
      if (typeof d == "string")
        if (typeof _ == "object" && _ !== null) {
          if (_.as == null || _.as === "script") {
            var m = h(_.as, _.crossOrigin);
            s.d.M(d, {
              crossOrigin: m,
              integrity: typeof _.integrity == "string" ? _.integrity : void 0,
              nonce: typeof _.nonce == "string" ? _.nonce : void 0,
            });
          }
        } else _ == null && s.d.M(d);
    }),
    (we.preload = function (d, _) {
      if (
        typeof d == "string" &&
        typeof _ == "object" &&
        _ !== null &&
        typeof _.as == "string"
      ) {
        var m = _.as,
          y = h(m, _.crossOrigin);
        s.d.L(d, m, {
          crossOrigin: y,
          integrity: typeof _.integrity == "string" ? _.integrity : void 0,
          nonce: typeof _.nonce == "string" ? _.nonce : void 0,
          type: typeof _.type == "string" ? _.type : void 0,
          fetchPriority:
            typeof _.fetchPriority == "string" ? _.fetchPriority : void 0,
          referrerPolicy:
            typeof _.referrerPolicy == "string" ? _.referrerPolicy : void 0,
          imageSrcSet:
            typeof _.imageSrcSet == "string" ? _.imageSrcSet : void 0,
          imageSizes: typeof _.imageSizes == "string" ? _.imageSizes : void 0,
          media: typeof _.media == "string" ? _.media : void 0,
        });
      }
    }),
    (we.preloadModule = function (d, _) {
      if (typeof d == "string")
        if (_) {
          var m = h(_.as, _.crossOrigin);
          s.d.m(d, {
            as: typeof _.as == "string" && _.as !== "script" ? _.as : void 0,
            crossOrigin: m,
            integrity: typeof _.integrity == "string" ? _.integrity : void 0,
          });
        } else s.d.m(d);
    }),
    (we.requestFormReset = function (d) {
      s.d.r(d);
    }),
    (we.unstable_batchedUpdates = function (d, _) {
      return d(_);
    }),
    (we.useFormState = function (d, _, m) {
      return c.H.useFormState(d, _, m);
    }),
    (we.useFormStatus = function () {
      return c.H.useHostTransitionStatus();
    }),
    (we.version = "19.0.0"),
    we
  );
}
var Y0;
function GE() {
  if (Y0) return Rf.exports;
  Y0 = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (t) {
        console.error(t);
      }
  }
  return r(), (Rf.exports = NE()), Rf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var P0;
function FE() {
  if (P0) return Ta;
  P0 = 1;
  var r = zE(),
    t = dd(),
    i = GE();
  function s(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        n += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  var o = Symbol.for("react.element"),
    c = Symbol.for("react.transitional.element"),
    h = Symbol.for("react.portal"),
    d = Symbol.for("react.fragment"),
    _ = Symbol.for("react.strict_mode"),
    m = Symbol.for("react.profiler"),
    y = Symbol.for("react.provider"),
    v = Symbol.for("react.consumer"),
    E = Symbol.for("react.context"),
    x = Symbol.for("react.forward_ref"),
    R = Symbol.for("react.suspense"),
    b = Symbol.for("react.suspense_list"),
    w = Symbol.for("react.memo"),
    M = Symbol.for("react.lazy"),
    G = Symbol.for("react.offscreen"),
    I = Symbol.for("react.memo_cache_sentinel"),
    D = Symbol.iterator;
  function j(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (D && e[D]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Q = Symbol.for("react.client.reference");
  function Z(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Q ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case d:
        return "Fragment";
      case h:
        return "Portal";
      case m:
        return "Profiler";
      case _:
        return "StrictMode";
      case R:
        return "Suspense";
      case b:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case E:
          return (e.displayName || "Context") + ".Provider";
        case v:
          return (e._context.displayName || "Context") + ".Consumer";
        case x:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case w:
          return (
            (n = e.displayName || null), n !== null ? n : Z(e.type) || "Memo"
          );
        case M:
          (n = e._payload), (e = e._init);
          try {
            return Z(e(n));
          } catch {}
      }
    return null;
  }
  var F = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = Object.assign,
    rt,
    it;
  function ot(e) {
    if (rt === void 0)
      try {
        throw Error();
      } catch (a) {
        var n = a.stack.trim().match(/\n( *(at )?)/);
        (rt = (n && n[1]) || ""),
          (it =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
      }
    return (
      `
` +
      rt +
      e +
      it
    );
  }
  var st = !1;
  function nt(e, n) {
    if (!e || st) return "";
    st = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var K = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(K.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(K, []);
                } catch (P) {
                  var N = P;
                }
                Reflect.construct(e, [], K);
              } else {
                try {
                  K.call();
                } catch (P) {
                  N = P;
                }
                e.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (P) {
                N = P;
              }
              (K = e()) &&
                typeof K.catch == "function" &&
                K.catch(function () {});
            }
          } catch (P) {
            if (P && N && typeof P.stack == "string") return [P.stack, N.stack];
          }
          return [null, null];
        },
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var f = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name",
      );
      f &&
        f.configurable &&
        Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var g = u.DetermineComponentFrameRoot(),
        p = g[0],
        S = g[1];
      if (p && S) {
        var T = p.split(`
`),
          O = S.split(`
`);
        for (
          f = u = 0;
          u < T.length && !T[u].includes("DetermineComponentFrameRoot");

        )
          u++;
        for (; f < O.length && !O[f].includes("DetermineComponentFrameRoot"); )
          f++;
        if (u === T.length || f === O.length)
          for (
            u = T.length - 1, f = O.length - 1;
            1 <= u && 0 <= f && T[u] !== O[f];

          )
            f--;
        for (; 1 <= u && 0 <= f; u--, f--)
          if (T[u] !== O[f]) {
            if (u !== 1 || f !== 1)
              do
                if ((u--, f--, 0 > f || T[u] !== O[f])) {
                  var k =
                    `
` + T[u].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      k.includes("<anonymous>") &&
                      (k = k.replace("<anonymous>", e.displayName)),
                    k
                  );
                }
              while (1 <= u && 0 <= f);
            break;
          }
      }
    } finally {
      (st = !1), (Error.prepareStackTrace = a);
    }
    return (a = e ? e.displayName || e.name : "") ? ot(a) : "";
  }
  function Y(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ot(e.type);
      case 16:
        return ot("Lazy");
      case 13:
        return ot("Suspense");
      case 19:
        return ot("SuspenseList");
      case 0:
      case 15:
        return (e = nt(e.type, !1)), e;
      case 11:
        return (e = nt(e.type.render, !1)), e;
      case 1:
        return (e = nt(e.type, !0)), e;
      default:
        return "";
    }
  }
  function V(e) {
    try {
      var n = "";
      do (n += Y(e)), (e = e.return);
      while (e);
      return n;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function W(e) {
    var n = e,
      a = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do (n = e), (n.flags & 4098) !== 0 && (a = n.return), (e = n.return);
      while (e);
    }
    return n.tag === 3 ? a : null;
  }
  function $(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function C(e) {
    if (W(e) !== e) throw Error(s(188));
  }
  function X(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = W(e)), n === null)) throw Error(s(188));
      return n !== e ? null : e;
    }
    for (var a = e, u = n; ; ) {
      var f = a.return;
      if (f === null) break;
      var g = f.alternate;
      if (g === null) {
        if (((u = f.return), u !== null)) {
          a = u;
          continue;
        }
        break;
      }
      if (f.child === g.child) {
        for (g = f.child; g; ) {
          if (g === a) return C(f), e;
          if (g === u) return C(f), n;
          g = g.sibling;
        }
        throw Error(s(188));
      }
      if (a.return !== u.return) (a = f), (u = g);
      else {
        for (var p = !1, S = f.child; S; ) {
          if (S === a) {
            (p = !0), (a = f), (u = g);
            break;
          }
          if (S === u) {
            (p = !0), (u = f), (a = g);
            break;
          }
          S = S.sibling;
        }
        if (!p) {
          for (S = g.child; S; ) {
            if (S === a) {
              (p = !0), (a = g), (u = f);
              break;
            }
            if (S === u) {
              (p = !0), (u = g), (a = f);
              break;
            }
            S = S.sibling;
          }
          if (!p) throw Error(s(189));
        }
      }
      if (a.alternate !== u) throw Error(s(190));
    }
    if (a.tag !== 3) throw Error(s(188));
    return a.stateNode.current === a ? e : n;
  }
  function U(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((n = U(e)), n !== null)) return n;
      e = e.sibling;
    }
    return null;
  }
  var tt = Array.isArray,
    J = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    lt = { pending: !1, data: null, method: null, action: null },
    ct = [],
    Nt = -1;
  function mt(e) {
    return { current: e };
  }
  function Ut(e) {
    0 > Nt || ((e.current = ct[Nt]), (ct[Nt] = null), Nt--);
  }
  function vt(e, n) {
    Nt++, (ct[Nt] = e.current), (e.current = n);
  }
  var Le = mt(null),
    Xi = mt(null),
    qe = mt(null),
    We = mt(null);
  function Yi(e, n) {
    switch ((vt(qe, n), vt(Xi, e), vt(Le, null), (e = n.nodeType), e)) {
      case 9:
      case 11:
        n = (n = n.documentElement) && (n = n.namespaceURI) ? u0(n) : 0;
        break;
      default:
        if (
          ((e = e === 8 ? n.parentNode : n),
          (n = e.tagName),
          (e = e.namespaceURI))
        )
          (e = u0(e)), (n = c0(e, n));
        else
          switch (n) {
            case "svg":
              n = 1;
              break;
            case "math":
              n = 2;
              break;
            default:
              n = 0;
          }
    }
    Ut(Le), vt(Le, n);
  }
  function ye() {
    Ut(Le), Ut(Xi), Ut(qe);
  }
  function Xe(e) {
    e.memoizedState !== null && vt(We, e);
    var n = Le.current,
      a = c0(n, e.type);
    n !== a && (vt(Xi, e), vt(Le, a));
  }
  function Ri(e) {
    Xi.current === e && (Ut(Le), Ut(Xi)),
      We.current === e && (Ut(We), (pa._currentValue = lt));
  }
  var bi = Object.prototype.hasOwnProperty,
    Pi = r.unstable_scheduleCallback,
    sn = r.unstable_cancelCallback,
    wi = r.unstable_shouldYield,
    rn = r.unstable_requestPaint,
    Pt = r.unstable_now,
    bl = r.unstable_getCurrentPriorityLevel,
    Cs = r.unstable_ImmediatePriority,
    Rs = r.unstable_UserBlockingPriority,
    fr = r.unstable_NormalPriority,
    no = r.unstable_LowPriority,
    wl = r.unstable_IdlePriority,
    Al = r.log,
    gc = r.unstable_setDisableYieldValue,
    bs = null,
    xe = null;
  function so(e) {
    if (xe && typeof xe.onCommitFiberRoot == "function")
      try {
        xe.onCommitFiberRoot(bs, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function ri(e) {
    if (
      (typeof Al == "function" && gc(e),
      xe && typeof xe.setStrictMode == "function")
    )
      try {
        xe.setStrictMode(bs, e);
      } catch {}
  }
  var Te = Math.clz32 ? Math.clz32 : ws,
    _c = Math.log,
    Ml = Math.LN2;
  function ws(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((_c(e) / Ml) | 0)) | 0;
  }
  var ki = 128,
    Bi = 4194304;
  function Hi(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function As(e, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      f = e.suspendedLanes,
      g = e.pingedLanes,
      p = e.warmLanes;
    e = e.finishedLanes !== 0;
    var S = a & 134217727;
    return (
      S !== 0
        ? ((a = S & ~f),
          a !== 0
            ? (u = Hi(a))
            : ((g &= S),
              g !== 0
                ? (u = Hi(g))
                : e || ((p = S & ~p), p !== 0 && (u = Hi(p)))))
        : ((S = a & ~f),
          S !== 0
            ? (u = Hi(S))
            : g !== 0
              ? (u = Hi(g))
              : e || ((p = a & ~p), p !== 0 && (u = Hi(p)))),
      u === 0
        ? 0
        : n !== 0 &&
            n !== u &&
            (n & f) === 0 &&
            ((f = u & -u),
            (p = n & -n),
            f >= p || (f === 32 && (p & 4194176) !== 0))
          ? n
          : u
    );
  }
  function oe(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function ln(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
        return n + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ie() {
    var e = ki;
    return (ki <<= 1), (ki & 4194176) === 0 && (ki = 128), e;
  }
  function Qe() {
    var e = Bi;
    return (Bi <<= 1), (Bi & 62914560) === 0 && (Bi = 4194304), e;
  }
  function Ce(e) {
    for (var n = [], a = 0; 31 > a; a++) n.push(e);
    return n;
  }
  function ze(e, n) {
    (e.pendingLanes |= n),
      n !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Ai(e, n, a, u, f, g) {
    var p = e.pendingLanes;
    (e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0);
    var S = e.entanglements,
      T = e.expirationTimes,
      O = e.hiddenUpdates;
    for (a = p & ~a; 0 < a; ) {
      var k = 31 - Te(a),
        K = 1 << k;
      (S[k] = 0), (T[k] = -1);
      var N = O[k];
      if (N !== null)
        for (O[k] = null, k = 0; k < N.length; k++) {
          var P = N[k];
          P !== null && (P.lane &= -536870913);
        }
      a &= ~K;
    }
    u !== 0 && Zt(e, u, 0),
      g !== 0 && f === 0 && e.tag !== 0 && (e.suspendedLanes |= g & ~(p & ~n));
  }
  function Zt(e, n, a) {
    (e.pendingLanes |= n), (e.suspendedLanes &= ~n);
    var u = 31 - Te(n);
    (e.entangledLanes |= n),
      (e.entanglements[u] = e.entanglements[u] | 1073741824 | (a & 4194218));
  }
  function ue(e, n) {
    var a = (e.entangledLanes |= n);
    for (e = e.entanglements; a; ) {
      var u = 31 - Te(a),
        f = 1 << u;
      (f & n) | (e[u] & n) && (e[u] |= n), (a &= ~f);
    }
  }
  function li(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ro() {
    var e = J.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : A0(e.type));
  }
  function v1(e, n) {
    var a = J.p;
    try {
      return (J.p = e), n();
    } finally {
      J.p = a;
    }
  }
  var Un = Math.random().toString(36).slice(2),
    Re = "__reactFiber$" + Un,
    Ye = "__reactProps$" + Un,
    dr = "__reactContainer$" + Un,
    mc = "__reactEvents$" + Un,
    E1 = "__reactListeners$" + Un,
    S1 = "__reactHandles$" + Un,
    ag = "__reactResources$" + Un,
    Ol = "__reactMarker$" + Un;
  function yc(e) {
    delete e[Re], delete e[Ye], delete e[mc], delete e[E1], delete e[S1];
  }
  function Ms(e) {
    var n = e[Re];
    if (n) return n;
    for (var a = e.parentNode; a; ) {
      if ((n = a[dr] || a[Re])) {
        if (
          ((a = n.alternate),
          n.child !== null || (a !== null && a.child !== null))
        )
          for (e = d0(e); e !== null; ) {
            if ((a = e[Re])) return a;
            e = d0(e);
          }
        return n;
      }
      (e = a), (a = e.parentNode);
    }
    return null;
  }
  function gr(e) {
    if ((e = e[Re] || e[dr])) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function Dl(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(s(33));
  }
  function _r(e) {
    var n = e[ag];
    return (
      n ||
        (n = e[ag] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function ce(e) {
    e[Ol] = !0;
  }
  var og = new Set(),
    ug = {};
  function Os(e, n) {
    mr(e, n), mr(e + "Capture", n);
  }
  function mr(e, n) {
    for (ug[e] = n, e = 0; e < n.length; e++) og.add(n[e]);
  }
  var an = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    x1 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    cg = {},
    hg = {};
  function T1(e) {
    return bi.call(hg, e)
      ? !0
      : bi.call(cg, e)
        ? !1
        : x1.test(e)
          ? (hg[e] = !0)
          : ((cg[e] = !0), !1);
  }
  function lo(e, n, a) {
    if (T1(n))
      if (a === null) e.removeAttribute(n);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var u = n.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, "" + a);
      }
  }
  function ao(e, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, "" + a);
    }
  }
  function on(e, n, a, u) {
    if (u === null) e.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(n, a, "" + u);
    }
  }
  function ai(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function fg(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function C1(e) {
    var n = fg(e) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      u = "" + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var f = a.get,
        g = a.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return f.call(this);
          },
          set: function (p) {
            (u = "" + p), g.call(this, p);
          },
        }),
        Object.defineProperty(e, n, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return u;
          },
          setValue: function (p) {
            u = "" + p;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[n];
          },
        }
      );
    }
  }
  function oo(e) {
    e._valueTracker || (e._valueTracker = C1(e));
  }
  function dg(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var a = n.getValue(),
      u = "";
    return (
      e && (u = fg(e) ? (e.checked ? "true" : "false") : e.value),
      (e = u),
      e !== a ? (n.setValue(e), !0) : !1
    );
  }
  function uo(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var R1 = /[\n"\\]/g;
  function oi(e) {
    return e.replace(R1, function (n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function pc(e, n, a, u, f, g, p, S) {
    (e.name = ""),
      p != null &&
      typeof p != "function" &&
      typeof p != "symbol" &&
      typeof p != "boolean"
        ? (e.type = p)
        : e.removeAttribute("type"),
      n != null
        ? p === "number"
          ? ((n === 0 && e.value === "") || e.value != n) &&
            (e.value = "" + ai(n))
          : e.value !== "" + ai(n) && (e.value = "" + ai(n))
        : (p !== "submit" && p !== "reset") || e.removeAttribute("value"),
      n != null
        ? vc(e, p, ai(n))
        : a != null
          ? vc(e, p, ai(a))
          : u != null && e.removeAttribute("value"),
      f == null && g != null && (e.defaultChecked = !!g),
      f != null &&
        (e.checked = f && typeof f != "function" && typeof f != "symbol"),
      S != null &&
      typeof S != "function" &&
      typeof S != "symbol" &&
      typeof S != "boolean"
        ? (e.name = "" + ai(S))
        : e.removeAttribute("name");
  }
  function gg(e, n, a, u, f, g, p, S) {
    if (
      (g != null &&
        typeof g != "function" &&
        typeof g != "symbol" &&
        typeof g != "boolean" &&
        (e.type = g),
      n != null || a != null)
    ) {
      if (!((g !== "submit" && g !== "reset") || n != null)) return;
      (a = a != null ? "" + ai(a) : ""),
        (n = n != null ? "" + ai(n) : a),
        S || n === e.value || (e.value = n),
        (e.defaultValue = n);
    }
    (u = u ?? f),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (e.checked = S ? e.checked : !!u),
      (e.defaultChecked = !!u),
      p != null &&
        typeof p != "function" &&
        typeof p != "symbol" &&
        typeof p != "boolean" &&
        (e.name = p);
  }
  function vc(e, n, a) {
    (n === "number" && uo(e.ownerDocument) === e) ||
      e.defaultValue === "" + a ||
      (e.defaultValue = "" + a);
  }
  function yr(e, n, a, u) {
    if (((e = e.options), n)) {
      n = {};
      for (var f = 0; f < a.length; f++) n["$" + a[f]] = !0;
      for (a = 0; a < e.length; a++)
        (f = n.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== f && (e[a].selected = f),
          f && u && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + ai(a), n = null, f = 0; f < e.length; f++) {
        if (e[f].value === a) {
          (e[f].selected = !0), u && (e[f].defaultSelected = !0);
          return;
        }
        n !== null || e[f].disabled || (n = e[f]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function _g(e, n, a) {
    if (
      n != null &&
      ((n = "" + ai(n)), n !== e.value && (e.value = n), a == null)
    ) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = a != null ? "" + ai(a) : "";
  }
  function mg(e, n, a, u) {
    if (n == null) {
      if (u != null) {
        if (a != null) throw Error(s(92));
        if (tt(u)) {
          if (1 < u.length) throw Error(s(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), (n = a);
    }
    (a = ai(n)),
      (e.defaultValue = a),
      (u = e.textContent),
      u === a && u !== "" && u !== null && (e.value = u);
  }
  function pr(e, n) {
    if (n) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var b1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function yg(e, n, a) {
    var u = n.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? u
        ? e.setProperty(n, "")
        : n === "float"
          ? (e.cssFloat = "")
          : (e[n] = "")
      : u
        ? e.setProperty(n, a)
        : typeof a != "number" || a === 0 || b1.has(n)
          ? n === "float"
            ? (e.cssFloat = a)
            : (e[n] = ("" + a).trim())
          : (e[n] = a + "px");
  }
  function pg(e, n, a) {
    if (n != null && typeof n != "object") throw Error(s(62));
    if (((e = e.style), a != null)) {
      for (var u in a)
        !a.hasOwnProperty(u) ||
          (n != null && n.hasOwnProperty(u)) ||
          (u.indexOf("--") === 0
            ? e.setProperty(u, "")
            : u === "float"
              ? (e.cssFloat = "")
              : (e[u] = ""));
      for (var f in n)
        (u = n[f]), n.hasOwnProperty(f) && a[f] !== u && yg(e, f, u);
    } else for (var g in n) n.hasOwnProperty(g) && yg(e, g, n[g]);
  }
  function Ec(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var w1 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    A1 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function co(e) {
    return A1.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Sc = null;
  function xc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var vr = null,
    Er = null;
  function vg(e) {
    var n = gr(e);
    if (n && (e = n.stateNode)) {
      var a = e[Ye] || null;
      t: switch (((e = n.stateNode), n.type)) {
        case "input":
          if (
            (pc(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (n = a.name),
            a.type === "radio" && n != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + oi("" + n) + '"][type="radio"]',
              ),
                n = 0;
              n < a.length;
              n++
            ) {
              var u = a[n];
              if (u !== e && u.form === e.form) {
                var f = u[Ye] || null;
                if (!f) throw Error(s(90));
                pc(
                  u,
                  f.value,
                  f.defaultValue,
                  f.defaultValue,
                  f.checked,
                  f.defaultChecked,
                  f.type,
                  f.name,
                );
              }
            }
            for (n = 0; n < a.length; n++)
              (u = a[n]), u.form === e.form && dg(u);
          }
          break t;
        case "textarea":
          _g(e, a.value, a.defaultValue);
          break t;
        case "select":
          (n = a.value), n != null && yr(e, !!a.multiple, n, !1);
      }
    }
  }
  var Tc = !1;
  function Eg(e, n, a) {
    if (Tc) return e(n, a);
    Tc = !0;
    try {
      var u = e(n);
      return u;
    } finally {
      if (
        ((Tc = !1),
        (vr !== null || Er !== null) &&
          (Vo(), vr && ((n = vr), (e = Er), (Er = vr = null), vg(n), e)))
      )
        for (n = 0; n < e.length; n++) vg(e[n]);
    }
  }
  function Ll(e, n) {
    var a = e.stateNode;
    if (a === null) return null;
    var u = a[Ye] || null;
    if (u === null) return null;
    a = u[n];
    t: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) ||
          ((e = e.type),
          (u = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !u);
        break t;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(s(231, n, typeof a));
    return a;
  }
  var Cc = !1;
  if (an)
    try {
      var Il = {};
      Object.defineProperty(Il, "passive", {
        get: function () {
          Cc = !0;
        },
      }),
        window.addEventListener("test", Il, Il),
        window.removeEventListener("test", Il, Il);
    } catch {
      Cc = !1;
    }
  var Xn = null,
    Rc = null,
    ho = null;
  function Sg() {
    if (ho) return ho;
    var e,
      n = Rc,
      a = n.length,
      u,
      f = "value" in Xn ? Xn.value : Xn.textContent,
      g = f.length;
    for (e = 0; e < a && n[e] === f[e]; e++);
    var p = a - e;
    for (u = 1; u <= p && n[a - u] === f[g - u]; u++);
    return (ho = f.slice(e, 1 < u ? 1 - u : void 0));
  }
  function fo(e) {
    var n = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function go() {
    return !0;
  }
  function xg() {
    return !1;
  }
  function Pe(e) {
    function n(a, u, f, g, p) {
      (this._reactName = a),
        (this._targetInst = f),
        (this.type = u),
        (this.nativeEvent = g),
        (this.target = p),
        (this.currentTarget = null);
      for (var S in e)
        e.hasOwnProperty(S) && ((a = e[S]), (this[S] = a ? a(g) : g[S]));
      return (
        (this.isDefaultPrevented = (
          g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1
        )
          ? go
          : xg),
        (this.isPropagationStopped = xg),
        this
      );
    }
    return (
      q(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = go));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = go));
        },
        persist: function () {},
        isPersistent: go,
      }),
      n
    );
  }
  var Ds = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    _o = Pe(Ds),
    zl = q({}, Ds, { view: 0, detail: 0 }),
    M1 = Pe(zl),
    bc,
    wc,
    Nl,
    mo = q({}, zl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Mc,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Nl &&
              (Nl && e.type === "mousemove"
                ? ((bc = e.screenX - Nl.screenX), (wc = e.screenY - Nl.screenY))
                : (wc = bc = 0),
              (Nl = e)),
            bc);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : wc;
      },
    }),
    Tg = Pe(mo),
    O1 = q({}, mo, { dataTransfer: 0 }),
    D1 = Pe(O1),
    L1 = q({}, zl, { relatedTarget: 0 }),
    Ac = Pe(L1),
    I1 = q({}, Ds, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    z1 = Pe(I1),
    N1 = q({}, Ds, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    G1 = Pe(N1),
    F1 = q({}, Ds, { data: 0 }),
    Cg = Pe(F1),
    U1 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    X1 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Y1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function P1(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = Y1[e])
        ? !!n[e]
        : !1;
  }
  function Mc() {
    return P1;
  }
  var k1 = q({}, zl, {
      key: function (e) {
        if (e.key) {
          var n = U1[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
          ? ((e = fo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? X1[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Mc,
      charCode: function (e) {
        return e.type === "keypress" ? fo(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? fo(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    B1 = Pe(k1),
    H1 = q({}, mo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Rg = Pe(H1),
    j1 = q({}, zl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Mc,
    }),
    Z1 = Pe(j1),
    K1 = q({}, Ds, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    V1 = Pe(K1),
    q1 = q({}, mo, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    W1 = Pe(q1),
    Q1 = q({}, Ds, { newState: 0, oldState: 0 }),
    J1 = Pe(Q1),
    $1 = [9, 13, 27, 32],
    Oc = an && "CompositionEvent" in window,
    Gl = null;
  an && "documentMode" in document && (Gl = document.documentMode);
  var tv = an && "TextEvent" in window && !Gl,
    bg = an && (!Oc || (Gl && 8 < Gl && 11 >= Gl)),
    wg = " ",
    Ag = !1;
  function Mg(e, n) {
    switch (e) {
      case "keyup":
        return $1.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Og(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Sr = !1;
  function ev(e, n) {
    switch (e) {
      case "compositionend":
        return Og(n);
      case "keypress":
        return n.which !== 32 ? null : ((Ag = !0), wg);
      case "textInput":
        return (e = n.data), e === wg && Ag ? null : e;
      default:
        return null;
    }
  }
  function iv(e, n) {
    if (Sr)
      return e === "compositionend" || (!Oc && Mg(e, n))
        ? ((e = Sg()), (ho = Rc = Xn = null), (Sr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return bg && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var nv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Dg(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!nv[e.type] : n === "textarea";
  }
  function Lg(e, n, a, u) {
    vr ? (Er ? Er.push(u) : (Er = [u])) : (vr = u),
      (n = $o(n, "onChange")),
      0 < n.length &&
        ((a = new _o("onChange", "change", null, a, u)),
        e.push({ event: a, listeners: n }));
  }
  var Fl = null,
    Ul = null;
  function sv(e) {
    s0(e, 0);
  }
  function yo(e) {
    var n = Dl(e);
    if (dg(n)) return e;
  }
  function Ig(e, n) {
    if (e === "change") return n;
  }
  var zg = !1;
  if (an) {
    var Dc;
    if (an) {
      var Lc = "oninput" in document;
      if (!Lc) {
        var Ng = document.createElement("div");
        Ng.setAttribute("oninput", "return;"),
          (Lc = typeof Ng.oninput == "function");
      }
      Dc = Lc;
    } else Dc = !1;
    zg = Dc && (!document.documentMode || 9 < document.documentMode);
  }
  function Gg() {
    Fl && (Fl.detachEvent("onpropertychange", Fg), (Ul = Fl = null));
  }
  function Fg(e) {
    if (e.propertyName === "value" && yo(Ul)) {
      var n = [];
      Lg(n, Ul, e, xc(e)), Eg(sv, n);
    }
  }
  function rv(e, n, a) {
    e === "focusin"
      ? (Gg(), (Fl = n), (Ul = a), Fl.attachEvent("onpropertychange", Fg))
      : e === "focusout" && Gg();
  }
  function lv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return yo(Ul);
  }
  function av(e, n) {
    if (e === "click") return yo(n);
  }
  function ov(e, n) {
    if (e === "input" || e === "change") return yo(n);
  }
  function uv(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var Je = typeof Object.is == "function" ? Object.is : uv;
  function Xl(e, n) {
    if (Je(e, n)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var a = Object.keys(e),
      u = Object.keys(n);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var f = a[u];
      if (!bi.call(n, f) || !Je(e[f], n[f])) return !1;
    }
    return !0;
  }
  function Ug(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Xg(e, n) {
    var a = Ug(e);
    e = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (((u = e + a.textContent.length), e <= n && u >= n))
          return { node: a, offset: n - e };
        e = u;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Ug(a);
    }
  }
  function Yg(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? Yg(e, n.parentNode)
            : "contains" in e
              ? e.contains(n)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(n) & 16)
                : !1
      : !1;
  }
  function Pg(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var n = uo(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof n.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = n.contentWindow;
      else break;
      n = uo(e.document);
    }
    return n;
  }
  function Ic(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        n === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function cv(e, n) {
    var a = Pg(n);
    n = e.focusedElem;
    var u = e.selectionRange;
    if (
      a !== n &&
      n &&
      n.ownerDocument &&
      Yg(n.ownerDocument.documentElement, n)
    ) {
      if (u !== null && Ic(n)) {
        if (
          ((e = u.start),
          (a = u.end),
          a === void 0 && (a = e),
          "selectionStart" in n)
        )
          (n.selectionStart = e),
            (n.selectionEnd = Math.min(a, n.value.length));
        else if (
          ((a = ((e = n.ownerDocument || document) && e.defaultView) || window),
          a.getSelection)
        ) {
          a = a.getSelection();
          var f = n.textContent.length,
            g = Math.min(u.start, f);
          (u = u.end === void 0 ? g : Math.min(u.end, f)),
            !a.extend && g > u && ((f = u), (u = g), (g = f)),
            (f = Xg(n, g));
          var p = Xg(n, u);
          f &&
            p &&
            (a.rangeCount !== 1 ||
              a.anchorNode !== f.node ||
              a.anchorOffset !== f.offset ||
              a.focusNode !== p.node ||
              a.focusOffset !== p.offset) &&
            ((e = e.createRange()),
            e.setStart(f.node, f.offset),
            a.removeAllRanges(),
            g > u
              ? (a.addRange(e), a.extend(p.node, p.offset))
              : (e.setEnd(p.node, p.offset), a.addRange(e)));
        }
      }
      for (e = [], a = n; (a = a.parentNode); )
        a.nodeType === 1 &&
          e.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
        (a = e[n]),
          (a.element.scrollLeft = a.left),
          (a.element.scrollTop = a.top);
    }
  }
  var hv = an && "documentMode" in document && 11 >= document.documentMode,
    xr = null,
    zc = null,
    Yl = null,
    Nc = !1;
  function kg(e, n, a) {
    var u =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Nc ||
      xr == null ||
      xr !== uo(u) ||
      ((u = xr),
      "selectionStart" in u && Ic(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (Yl && Xl(Yl, u)) ||
        ((Yl = u),
        (u = $o(zc, "onSelect")),
        0 < u.length &&
          ((n = new _o("onSelect", "select", null, n, a)),
          e.push({ event: n, listeners: u }),
          (n.target = xr))));
  }
  function Ls(e, n) {
    var a = {};
    return (
      (a[e.toLowerCase()] = n.toLowerCase()),
      (a["Webkit" + e] = "webkit" + n),
      (a["Moz" + e] = "moz" + n),
      a
    );
  }
  var Tr = {
      animationend: Ls("Animation", "AnimationEnd"),
      animationiteration: Ls("Animation", "AnimationIteration"),
      animationstart: Ls("Animation", "AnimationStart"),
      transitionrun: Ls("Transition", "TransitionRun"),
      transitionstart: Ls("Transition", "TransitionStart"),
      transitioncancel: Ls("Transition", "TransitionCancel"),
      transitionend: Ls("Transition", "TransitionEnd"),
    },
    Gc = {},
    Bg = {};
  an &&
    ((Bg = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Tr.animationend.animation,
      delete Tr.animationiteration.animation,
      delete Tr.animationstart.animation),
    "TransitionEvent" in window || delete Tr.transitionend.transition);
  function Is(e) {
    if (Gc[e]) return Gc[e];
    if (!Tr[e]) return e;
    var n = Tr[e],
      a;
    for (a in n) if (n.hasOwnProperty(a) && a in Bg) return (Gc[e] = n[a]);
    return e;
  }
  var Hg = Is("animationend"),
    jg = Is("animationiteration"),
    Zg = Is("animationstart"),
    fv = Is("transitionrun"),
    dv = Is("transitionstart"),
    gv = Is("transitioncancel"),
    Kg = Is("transitionend"),
    Vg = new Map(),
    qg =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " ",
      );
  function Mi(e, n) {
    Vg.set(e, n), Os(n, [e]);
  }
  var ui = [],
    Cr = 0,
    Fc = 0;
  function po() {
    for (var e = Cr, n = (Fc = Cr = 0); n < e; ) {
      var a = ui[n];
      ui[n++] = null;
      var u = ui[n];
      ui[n++] = null;
      var f = ui[n];
      ui[n++] = null;
      var g = ui[n];
      if (((ui[n++] = null), u !== null && f !== null)) {
        var p = u.pending;
        p === null ? (f.next = f) : ((f.next = p.next), (p.next = f)),
          (u.pending = f);
      }
      g !== 0 && Wg(a, f, g);
    }
  }
  function vo(e, n, a, u) {
    (ui[Cr++] = e),
      (ui[Cr++] = n),
      (ui[Cr++] = a),
      (ui[Cr++] = u),
      (Fc |= u),
      (e.lanes |= u),
      (e = e.alternate),
      e !== null && (e.lanes |= u);
  }
  function Uc(e, n, a, u) {
    return vo(e, n, a, u), Eo(e);
  }
  function Yn(e, n) {
    return vo(e, null, null, n), Eo(e);
  }
  function Wg(e, n, a) {
    e.lanes |= a;
    var u = e.alternate;
    u !== null && (u.lanes |= a);
    for (var f = !1, g = e.return; g !== null; )
      (g.childLanes |= a),
        (u = g.alternate),
        u !== null && (u.childLanes |= a),
        g.tag === 22 &&
          ((e = g.stateNode), e === null || e._visibility & 1 || (f = !0)),
        (e = g),
        (g = g.return);
    f &&
      n !== null &&
      e.tag === 3 &&
      ((g = e.stateNode),
      (f = 31 - Te(a)),
      (g = g.hiddenUpdates),
      (e = g[f]),
      e === null ? (g[f] = [n]) : e.push(n),
      (n.lane = a | 536870912));
  }
  function Eo(e) {
    if (50 < ha) throw ((ha = 0), (Hh = null), Error(s(185)));
    for (var n = e.return; n !== null; ) (e = n), (n = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Rr = {},
    Qg = new WeakMap();
  function ci(e, n) {
    if (typeof e == "object" && e !== null) {
      var a = Qg.get(e);
      return a !== void 0
        ? a
        : ((n = { value: e, source: n, stack: V(n) }), Qg.set(e, n), n);
    }
    return { value: e, source: n, stack: V(n) };
  }
  var br = [],
    wr = 0,
    So = null,
    xo = 0,
    hi = [],
    fi = 0,
    zs = null,
    un = 1,
    cn = "";
  function Ns(e, n) {
    (br[wr++] = xo), (br[wr++] = So), (So = e), (xo = n);
  }
  function Jg(e, n, a) {
    (hi[fi++] = un), (hi[fi++] = cn), (hi[fi++] = zs), (zs = e);
    var u = un;
    e = cn;
    var f = 32 - Te(u) - 1;
    (u &= ~(1 << f)), (a += 1);
    var g = 32 - Te(n) + f;
    if (30 < g) {
      var p = f - (f % 5);
      (g = (u & ((1 << p) - 1)).toString(32)),
        (u >>= p),
        (f -= p),
        (un = (1 << (32 - Te(n) + f)) | (a << f) | u),
        (cn = g + e);
    } else (un = (1 << g) | (a << f) | u), (cn = e);
  }
  function Xc(e) {
    e.return !== null && (Ns(e, 1), Jg(e, 1, 0));
  }
  function Yc(e) {
    for (; e === So; )
      (So = br[--wr]), (br[wr] = null), (xo = br[--wr]), (br[wr] = null);
    for (; e === zs; )
      (zs = hi[--fi]),
        (hi[fi] = null),
        (cn = hi[--fi]),
        (hi[fi] = null),
        (un = hi[--fi]),
        (hi[fi] = null);
  }
  var Ne = null,
    pe = null,
    Ot = !1,
    Oi = null,
    ji = !1,
    Pc = Error(s(519));
  function Gs(e) {
    var n = Error(s(418, ""));
    throw (Bl(ci(n, e)), Pc);
  }
  function $g(e) {
    var n = e.stateNode,
      a = e.type,
      u = e.memoizedProps;
    switch (((n[Re] = e), (n[Ye] = u), a)) {
      case "dialog":
        bt("cancel", n), bt("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        bt("load", n);
        break;
      case "video":
      case "audio":
        for (a = 0; a < da.length; a++) bt(da[a], n);
        break;
      case "source":
        bt("error", n);
        break;
      case "img":
      case "image":
      case "link":
        bt("error", n), bt("load", n);
        break;
      case "details":
        bt("toggle", n);
        break;
      case "input":
        bt("invalid", n),
          gg(
            n,
            u.value,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name,
            !0,
          ),
          oo(n);
        break;
      case "select":
        bt("invalid", n);
        break;
      case "textarea":
        bt("invalid", n), mg(n, u.value, u.defaultValue, u.children), oo(n);
    }
    (a = u.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      n.textContent === "" + a ||
      u.suppressHydrationWarning === !0 ||
      o0(n.textContent, a)
        ? (u.popover != null && (bt("beforetoggle", n), bt("toggle", n)),
          u.onScroll != null && bt("scroll", n),
          u.onScrollEnd != null && bt("scrollend", n),
          u.onClick != null && (n.onclick = tu),
          (n = !0))
        : (n = !1),
      n || Gs(e);
  }
  function t_(e) {
    for (Ne = e.return; Ne; )
      switch (Ne.tag) {
        case 3:
        case 27:
          ji = !0;
          return;
        case 5:
        case 13:
          ji = !1;
          return;
        default:
          Ne = Ne.return;
      }
  }
  function Pl(e) {
    if (e !== Ne) return !1;
    if (!Ot) return t_(e), (Ot = !0), !1;
    var n = !1,
      a;
    if (
      ((a = e.tag !== 3 && e.tag !== 27) &&
        ((a = e.tag === 5) &&
          ((a = e.type),
          (a =
            !(a !== "form" && a !== "button") || of(e.type, e.memoizedProps))),
        (a = !a)),
      a && (n = !0),
      n && pe && Gs(e),
      t_(e),
      e.tag === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      t: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (((a = e.data), a === "/$")) {
              if (n === 0) {
                pe = Li(e.nextSibling);
                break t;
              }
              n--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || n++;
          e = e.nextSibling;
        }
        pe = null;
      }
    } else pe = Ne ? Li(e.stateNode.nextSibling) : null;
    return !0;
  }
  function kl() {
    (pe = Ne = null), (Ot = !1);
  }
  function Bl(e) {
    Oi === null ? (Oi = [e]) : Oi.push(e);
  }
  var Hl = Error(s(460)),
    e_ = Error(s(474)),
    kc = { then: function () {} };
  function i_(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function To() {}
  function n_(e, n, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(n) : a !== n && (n.then(To, To), (n = a)),
      n.status)
    ) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw ((e = n.reason), e === Hl ? Error(s(483)) : e);
      default:
        if (typeof n.status == "string") n.then(To, To);
        else {
          if (((e = Bt), e !== null && 100 < e.shellSuspendCounter))
            throw Error(s(482));
          (e = n),
            (e.status = "pending"),
            e.then(
              function (u) {
                if (n.status === "pending") {
                  var f = n;
                  (f.status = "fulfilled"), (f.value = u);
                }
              },
              function (u) {
                if (n.status === "pending") {
                  var f = n;
                  (f.status = "rejected"), (f.reason = u);
                }
              },
            );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw ((e = n.reason), e === Hl ? Error(s(483)) : e);
        }
        throw ((jl = n), Hl);
    }
  }
  var jl = null;
  function s_() {
    if (jl === null) throw Error(s(459));
    var e = jl;
    return (jl = null), e;
  }
  var Ar = null,
    Zl = 0;
  function Co(e) {
    var n = Zl;
    return (Zl += 1), Ar === null && (Ar = []), n_(Ar, e, n);
  }
  function Kl(e, n) {
    (n = n.props.ref), (e.ref = n !== void 0 ? n : null);
  }
  function Ro(e, n) {
    throw n.$$typeof === o
      ? Error(s(525))
      : ((e = Object.prototype.toString.call(n)),
        Error(
          s(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : e,
          ),
        ));
  }
  function r_(e) {
    var n = e._init;
    return n(e._payload);
  }
  function l_(e) {
    function n(L, A) {
      if (e) {
        var z = L.deletions;
        z === null ? ((L.deletions = [A]), (L.flags |= 16)) : z.push(A);
      }
    }
    function a(L, A) {
      if (!e) return null;
      for (; A !== null; ) n(L, A), (A = A.sibling);
      return null;
    }
    function u(L) {
      for (var A = new Map(); L !== null; )
        L.key !== null ? A.set(L.key, L) : A.set(L.index, L), (L = L.sibling);
      return A;
    }
    function f(L, A) {
      return (L = Jn(L, A)), (L.index = 0), (L.sibling = null), L;
    }
    function g(L, A, z) {
      return (
        (L.index = z),
        e
          ? ((z = L.alternate),
            z !== null
              ? ((z = z.index), z < A ? ((L.flags |= 33554434), A) : z)
              : ((L.flags |= 33554434), A))
          : ((L.flags |= 1048576), A)
      );
    }
    function p(L) {
      return e && L.alternate === null && (L.flags |= 33554434), L;
    }
    function S(L, A, z, H) {
      return A === null || A.tag !== 6
        ? ((A = Gh(z, L.mode, H)), (A.return = L), A)
        : ((A = f(A, z)), (A.return = L), A);
    }
    function T(L, A, z, H) {
      var et = z.type;
      return et === d
        ? k(L, A, z.props.children, H, z.key)
        : A !== null &&
            (A.elementType === et ||
              (typeof et == "object" &&
                et !== null &&
                et.$$typeof === M &&
                r_(et) === A.type))
          ? ((A = f(A, z.props)), Kl(A, z), (A.return = L), A)
          : ((A = Bo(z.type, z.key, z.props, null, L.mode, H)),
            Kl(A, z),
            (A.return = L),
            A);
    }
    function O(L, A, z, H) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== z.containerInfo ||
        A.stateNode.implementation !== z.implementation
        ? ((A = Fh(z, L.mode, H)), (A.return = L), A)
        : ((A = f(A, z.children || [])), (A.return = L), A);
    }
    function k(L, A, z, H, et) {
      return A === null || A.tag !== 7
        ? ((A = Zs(z, L.mode, H, et)), (A.return = L), A)
        : ((A = f(A, z)), (A.return = L), A);
    }
    function K(L, A, z) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return (A = Gh("" + A, L.mode, z)), (A.return = L), A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case c:
            return (
              (z = Bo(A.type, A.key, A.props, null, L.mode, z)),
              Kl(z, A),
              (z.return = L),
              z
            );
          case h:
            return (A = Fh(A, L.mode, z)), (A.return = L), A;
          case M:
            var H = A._init;
            return (A = H(A._payload)), K(L, A, z);
        }
        if (tt(A) || j(A))
          return (A = Zs(A, L.mode, z, null)), (A.return = L), A;
        if (typeof A.then == "function") return K(L, Co(A), z);
        if (A.$$typeof === E) return K(L, Yo(L, A), z);
        Ro(L, A);
      }
      return null;
    }
    function N(L, A, z, H) {
      var et = A !== null ? A.key : null;
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return et !== null ? null : S(L, A, "" + z, H);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case c:
            return z.key === et ? T(L, A, z, H) : null;
          case h:
            return z.key === et ? O(L, A, z, H) : null;
          case M:
            return (et = z._init), (z = et(z._payload)), N(L, A, z, H);
        }
        if (tt(z) || j(z)) return et !== null ? null : k(L, A, z, H, null);
        if (typeof z.then == "function") return N(L, A, Co(z), H);
        if (z.$$typeof === E) return N(L, A, Yo(L, z), H);
        Ro(L, z);
      }
      return null;
    }
    function P(L, A, z, H, et) {
      if (
        (typeof H == "string" && H !== "") ||
        typeof H == "number" ||
        typeof H == "bigint"
      )
        return (L = L.get(z) || null), S(A, L, "" + H, et);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case c:
            return (
              (L = L.get(H.key === null ? z : H.key) || null), T(A, L, H, et)
            );
          case h:
            return (
              (L = L.get(H.key === null ? z : H.key) || null), O(A, L, H, et)
            );
          case M:
            var Ct = H._init;
            return (H = Ct(H._payload)), P(L, A, z, H, et);
        }
        if (tt(H) || j(H)) return (L = L.get(z) || null), k(A, L, H, et, null);
        if (typeof H.then == "function") return P(L, A, z, Co(H), et);
        if (H.$$typeof === E) return P(L, A, z, Yo(A, H), et);
        Ro(A, H);
      }
      return null;
    }
    function at(L, A, z, H) {
      for (
        var et = null, Ct = null, ut = A, dt = (A = 0), de = null;
        ut !== null && dt < z.length;
        dt++
      ) {
        ut.index > dt ? ((de = ut), (ut = null)) : (de = ut.sibling);
        var Dt = N(L, ut, z[dt], H);
        if (Dt === null) {
          ut === null && (ut = de);
          break;
        }
        e && ut && Dt.alternate === null && n(L, ut),
          (A = g(Dt, A, dt)),
          Ct === null ? (et = Dt) : (Ct.sibling = Dt),
          (Ct = Dt),
          (ut = de);
      }
      if (dt === z.length) return a(L, ut), Ot && Ns(L, dt), et;
      if (ut === null) {
        for (; dt < z.length; dt++)
          (ut = K(L, z[dt], H)),
            ut !== null &&
              ((A = g(ut, A, dt)),
              Ct === null ? (et = ut) : (Ct.sibling = ut),
              (Ct = ut));
        return Ot && Ns(L, dt), et;
      }
      for (ut = u(ut); dt < z.length; dt++)
        (de = P(ut, L, dt, z[dt], H)),
          de !== null &&
            (e &&
              de.alternate !== null &&
              ut.delete(de.key === null ? dt : de.key),
            (A = g(de, A, dt)),
            Ct === null ? (et = de) : (Ct.sibling = de),
            (Ct = de));
      return (
        e &&
          ut.forEach(function (rs) {
            return n(L, rs);
          }),
        Ot && Ns(L, dt),
        et
      );
    }
    function yt(L, A, z, H) {
      if (z == null) throw Error(s(151));
      for (
        var et = null,
          Ct = null,
          ut = A,
          dt = (A = 0),
          de = null,
          Dt = z.next();
        ut !== null && !Dt.done;
        dt++, Dt = z.next()
      ) {
        ut.index > dt ? ((de = ut), (ut = null)) : (de = ut.sibling);
        var rs = N(L, ut, Dt.value, H);
        if (rs === null) {
          ut === null && (ut = de);
          break;
        }
        e && ut && rs.alternate === null && n(L, ut),
          (A = g(rs, A, dt)),
          Ct === null ? (et = rs) : (Ct.sibling = rs),
          (Ct = rs),
          (ut = de);
      }
      if (Dt.done) return a(L, ut), Ot && Ns(L, dt), et;
      if (ut === null) {
        for (; !Dt.done; dt++, Dt = z.next())
          (Dt = K(L, Dt.value, H)),
            Dt !== null &&
              ((A = g(Dt, A, dt)),
              Ct === null ? (et = Dt) : (Ct.sibling = Dt),
              (Ct = Dt));
        return Ot && Ns(L, dt), et;
      }
      for (ut = u(ut); !Dt.done; dt++, Dt = z.next())
        (Dt = P(ut, L, dt, Dt.value, H)),
          Dt !== null &&
            (e &&
              Dt.alternate !== null &&
              ut.delete(Dt.key === null ? dt : Dt.key),
            (A = g(Dt, A, dt)),
            Ct === null ? (et = Dt) : (Ct.sibling = Dt),
            (Ct = Dt));
      return (
        e &&
          ut.forEach(function (AE) {
            return n(L, AE);
          }),
        Ot && Ns(L, dt),
        et
      );
    }
    function Jt(L, A, z, H) {
      if (
        (typeof z == "object" &&
          z !== null &&
          z.type === d &&
          z.key === null &&
          (z = z.props.children),
        typeof z == "object" && z !== null)
      ) {
        switch (z.$$typeof) {
          case c:
            t: {
              for (var et = z.key; A !== null; ) {
                if (A.key === et) {
                  if (((et = z.type), et === d)) {
                    if (A.tag === 7) {
                      a(L, A.sibling),
                        (H = f(A, z.props.children)),
                        (H.return = L),
                        (L = H);
                      break t;
                    }
                  } else if (
                    A.elementType === et ||
                    (typeof et == "object" &&
                      et !== null &&
                      et.$$typeof === M &&
                      r_(et) === A.type)
                  ) {
                    a(L, A.sibling),
                      (H = f(A, z.props)),
                      Kl(H, z),
                      (H.return = L),
                      (L = H);
                    break t;
                  }
                  a(L, A);
                  break;
                } else n(L, A);
                A = A.sibling;
              }
              z.type === d
                ? ((H = Zs(z.props.children, L.mode, H, z.key)),
                  (H.return = L),
                  (L = H))
                : ((H = Bo(z.type, z.key, z.props, null, L.mode, H)),
                  Kl(H, z),
                  (H.return = L),
                  (L = H));
            }
            return p(L);
          case h:
            t: {
              for (et = z.key; A !== null; ) {
                if (A.key === et)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === z.containerInfo &&
                    A.stateNode.implementation === z.implementation
                  ) {
                    a(L, A.sibling),
                      (H = f(A, z.children || [])),
                      (H.return = L),
                      (L = H);
                    break t;
                  } else {
                    a(L, A);
                    break;
                  }
                else n(L, A);
                A = A.sibling;
              }
              (H = Fh(z, L.mode, H)), (H.return = L), (L = H);
            }
            return p(L);
          case M:
            return (et = z._init), (z = et(z._payload)), Jt(L, A, z, H);
        }
        if (tt(z)) return at(L, A, z, H);
        if (j(z)) {
          if (((et = j(z)), typeof et != "function")) throw Error(s(150));
          return (z = et.call(z)), yt(L, A, z, H);
        }
        if (typeof z.then == "function") return Jt(L, A, Co(z), H);
        if (z.$$typeof === E) return Jt(L, A, Yo(L, z), H);
        Ro(L, z);
      }
      return (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
        ? ((z = "" + z),
          A !== null && A.tag === 6
            ? (a(L, A.sibling), (H = f(A, z)), (H.return = L), (L = H))
            : (a(L, A), (H = Gh(z, L.mode, H)), (H.return = L), (L = H)),
          p(L))
        : a(L, A);
    }
    return function (L, A, z, H) {
      try {
        Zl = 0;
        var et = Jt(L, A, z, H);
        return (Ar = null), et;
      } catch (ut) {
        if (ut === Hl) throw ut;
        var Ct = mi(29, ut, null, L.mode);
        return (Ct.lanes = H), (Ct.return = L), Ct;
      } finally {
      }
    };
  }
  var Fs = l_(!0),
    a_ = l_(!1),
    Mr = mt(null),
    bo = mt(0);
  function o_(e, n) {
    (e = Sn), vt(bo, e), vt(Mr, n), (Sn = e | n.baseLanes);
  }
  function Bc() {
    vt(bo, Sn), vt(Mr, Mr.current);
  }
  function Hc() {
    (Sn = bo.current), Ut(Mr), Ut(bo);
  }
  var di = mt(null),
    Zi = null;
  function Pn(e) {
    var n = e.alternate;
    vt(re, re.current & 1),
      vt(di, e),
      Zi === null &&
        (n === null || Mr.current !== null || n.memoizedState !== null) &&
        (Zi = e);
  }
  function u_(e) {
    if (e.tag === 22) {
      if ((vt(re, re.current), vt(di, e), Zi === null)) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Zi = e);
      }
    } else kn();
  }
  function kn() {
    vt(re, re.current), vt(di, di.current);
  }
  function hn(e) {
    Ut(di), Zi === e && (Zi = null), Ut(re);
  }
  var re = mt(0);
  function wo(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var a = n.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || a.data === "$!")
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var _v =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (a, u) {
                  e.push(u);
                },
              });
            this.abort = function () {
              (n.aborted = !0),
                e.forEach(function (a) {
                  return a();
                });
            };
          },
    mv = r.unstable_scheduleCallback,
    yv = r.unstable_NormalPriority,
    le = {
      $$typeof: E,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function jc() {
    return { controller: new _v(), data: new Map(), refCount: 0 };
  }
  function Vl(e) {
    e.refCount--,
      e.refCount === 0 &&
        mv(yv, function () {
          e.controller.abort();
        });
  }
  var ql = null,
    Zc = 0,
    Or = 0,
    Dr = null;
  function pv(e, n) {
    if (ql === null) {
      var a = (ql = []);
      (Zc = 0),
        (Or = Jh()),
        (Dr = {
          status: "pending",
          value: void 0,
          then: function (u) {
            a.push(u);
          },
        });
    }
    return Zc++, n.then(c_, c_), n;
  }
  function c_() {
    if (--Zc === 0 && ql !== null) {
      Dr !== null && (Dr.status = "fulfilled");
      var e = ql;
      (ql = null), (Or = 0), (Dr = null);
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function vv(e, n) {
    var a = [],
      u = {
        status: "pending",
        value: null,
        reason: null,
        then: function (f) {
          a.push(f);
        },
      };
    return (
      e.then(
        function () {
          (u.status = "fulfilled"), (u.value = n);
          for (var f = 0; f < a.length; f++) (0, a[f])(n);
        },
        function (f) {
          for (u.status = "rejected", u.reason = f, f = 0; f < a.length; f++)
            (0, a[f])(void 0);
        },
      ),
      u
    );
  }
  var h_ = F.S;
  F.S = function (e, n) {
    typeof n == "object" &&
      n !== null &&
      typeof n.then == "function" &&
      pv(e, n),
      h_ !== null && h_(e, n);
  };
  var Us = mt(null);
  function Kc() {
    var e = Us.current;
    return e !== null ? e : Bt.pooledCache;
  }
  function Ao(e, n) {
    n === null ? vt(Us, Us.current) : vt(Us, n.pool);
  }
  function f_() {
    var e = Kc();
    return e === null ? null : { parent: le._currentValue, pool: e };
  }
  var Bn = 0,
    Tt = null,
    Xt = null,
    ee = null,
    Mo = !1,
    Lr = !1,
    Xs = !1,
    Oo = 0,
    Wl = 0,
    Ir = null,
    Ev = 0;
  function te() {
    throw Error(s(321));
  }
  function Vc(e, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < e.length; a++)
      if (!Je(e[a], n[a])) return !1;
    return !0;
  }
  function qc(e, n, a, u, f, g) {
    return (
      (Bn = g),
      (Tt = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (F.H = e === null || e.memoizedState === null ? Ys : Hn),
      (Xs = !1),
      (g = a(u, f)),
      (Xs = !1),
      Lr && (g = g_(n, a, u, f)),
      d_(e),
      g
    );
  }
  function d_(e) {
    F.H = Ki;
    var n = Xt !== null && Xt.next !== null;
    if (((Bn = 0), (ee = Xt = Tt = null), (Mo = !1), (Wl = 0), (Ir = null), n))
      throw Error(s(300));
    e === null ||
      he ||
      ((e = e.dependencies), e !== null && Xo(e) && (he = !0));
  }
  function g_(e, n, a, u) {
    Tt = e;
    var f = 0;
    do {
      if ((Lr && (Ir = null), (Wl = 0), (Lr = !1), 25 <= f))
        throw Error(s(301));
      if (((f += 1), (ee = Xt = null), e.updateQueue != null)) {
        var g = e.updateQueue;
        (g.lastEffect = null),
          (g.events = null),
          (g.stores = null),
          g.memoCache != null && (g.memoCache.index = 0);
      }
      (F.H = Ps), (g = n(a, u));
    } while (Lr);
    return g;
  }
  function Sv() {
    var e = F.H,
      n = e.useState()[0];
    return (
      (n = typeof n.then == "function" ? Ql(n) : n),
      (e = e.useState()[0]),
      (Xt !== null ? Xt.memoizedState : null) !== e && (Tt.flags |= 1024),
      n
    );
  }
  function Wc() {
    var e = Oo !== 0;
    return (Oo = 0), e;
  }
  function Qc(e, n, a) {
    (n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~a);
  }
  function Jc(e) {
    if (Mo) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), (e = e.next);
      }
      Mo = !1;
    }
    (Bn = 0), (ee = Xt = Tt = null), (Lr = !1), (Wl = Oo = 0), (Ir = null);
  }
  function ke() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ee === null ? (Tt.memoizedState = ee = e) : (ee = ee.next = e), ee;
  }
  function ie() {
    if (Xt === null) {
      var e = Tt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Xt.next;
    var n = ee === null ? Tt.memoizedState : ee.next;
    if (n !== null) (ee = n), (Xt = e);
    else {
      if (e === null)
        throw Tt.alternate === null ? Error(s(467)) : Error(s(310));
      (Xt = e),
        (e = {
          memoizedState: Xt.memoizedState,
          baseState: Xt.baseState,
          baseQueue: Xt.baseQueue,
          queue: Xt.queue,
          next: null,
        }),
        ee === null ? (Tt.memoizedState = ee = e) : (ee = ee.next = e);
    }
    return ee;
  }
  var Do;
  Do = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Ql(e) {
    var n = Wl;
    return (
      (Wl += 1),
      Ir === null && (Ir = []),
      (e = n_(Ir, e, n)),
      (n = Tt),
      (ee === null ? n.memoizedState : ee.next) === null &&
        ((n = n.alternate),
        (F.H = n === null || n.memoizedState === null ? Ys : Hn)),
      e
    );
  }
  function Lo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ql(e);
      if (e.$$typeof === E) return be(e);
    }
    throw Error(s(438, String(e)));
  }
  function $c(e) {
    var n = null,
      a = Tt.updateQueue;
    if ((a !== null && (n = a.memoCache), n == null)) {
      var u = Tt.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (n = {
              data: u.data.map(function (f) {
                return f.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      a === null && ((a = Do()), (Tt.updateQueue = a)),
      (a.memoCache = n),
      (a = n.data[n.index]),
      a === void 0)
    )
      for (a = n.data[n.index] = Array(e), u = 0; u < e; u++) a[u] = I;
    return n.index++, a;
  }
  function fn(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Io(e) {
    var n = ie();
    return th(n, Xt, e);
  }
  function th(e, n, a) {
    var u = e.queue;
    if (u === null) throw Error(s(311));
    u.lastRenderedReducer = a;
    var f = e.baseQueue,
      g = u.pending;
    if (g !== null) {
      if (f !== null) {
        var p = f.next;
        (f.next = g.next), (g.next = p);
      }
      (n.baseQueue = f = g), (u.pending = null);
    }
    if (((g = e.baseState), f === null)) e.memoizedState = g;
    else {
      n = f.next;
      var S = (p = null),
        T = null,
        O = n,
        k = !1;
      do {
        var K = O.lane & -536870913;
        if (K !== O.lane ? (At & K) === K : (Bn & K) === K) {
          var N = O.revertLane;
          if (N === 0)
            T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: O.action,
                  hasEagerState: O.hasEagerState,
                  eagerState: O.eagerState,
                  next: null,
                }),
              K === Or && (k = !0);
          else if ((Bn & N) === N) {
            (O = O.next), N === Or && (k = !0);
            continue;
          } else
            (K = {
              lane: 0,
              revertLane: O.revertLane,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null,
            }),
              T === null ? ((S = T = K), (p = g)) : (T = T.next = K),
              (Tt.lanes |= N),
              ($n |= N);
          (K = O.action),
            Xs && a(g, K),
            (g = O.hasEagerState ? O.eagerState : a(g, K));
        } else
          (N = {
            lane: K,
            revertLane: O.revertLane,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null,
          }),
            T === null ? ((S = T = N), (p = g)) : (T = T.next = N),
            (Tt.lanes |= K),
            ($n |= K);
        O = O.next;
      } while (O !== null && O !== n);
      if (
        (T === null ? (p = g) : (T.next = S),
        !Je(g, e.memoizedState) && ((he = !0), k && ((a = Dr), a !== null)))
      )
        throw a;
      (e.memoizedState = g),
        (e.baseState = p),
        (e.baseQueue = T),
        (u.lastRenderedState = g);
    }
    return f === null && (u.lanes = 0), [e.memoizedState, u.dispatch];
  }
  function eh(e) {
    var n = ie(),
      a = n.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var u = a.dispatch,
      f = a.pending,
      g = n.memoizedState;
    if (f !== null) {
      a.pending = null;
      var p = (f = f.next);
      do (g = e(g, p.action)), (p = p.next);
      while (p !== f);
      Je(g, n.memoizedState) || (he = !0),
        (n.memoizedState = g),
        n.baseQueue === null && (n.baseState = g),
        (a.lastRenderedState = g);
    }
    return [g, u];
  }
  function __(e, n, a) {
    var u = Tt,
      f = ie(),
      g = Ot;
    if (g) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = n();
    var p = !Je((Xt || f).memoizedState, a);
    if (
      (p && ((f.memoizedState = a), (he = !0)),
      (f = f.queue),
      sh(p_.bind(null, u, f, e), [e]),
      f.getSnapshot !== n || p || (ee !== null && ee.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        zr(9, y_.bind(null, u, f, a, n), { destroy: void 0 }, null),
        Bt === null)
      )
        throw Error(s(349));
      g || (Bn & 60) !== 0 || m_(u, n, a);
    }
    return a;
  }
  function m_(e, n, a) {
    (e.flags |= 16384),
      (e = { getSnapshot: n, value: a }),
      (n = Tt.updateQueue),
      n === null
        ? ((n = Do()), (Tt.updateQueue = n), (n.stores = [e]))
        : ((a = n.stores), a === null ? (n.stores = [e]) : a.push(e));
  }
  function y_(e, n, a, u) {
    (n.value = a), (n.getSnapshot = u), v_(n) && E_(e);
  }
  function p_(e, n, a) {
    return a(function () {
      v_(n) && E_(e);
    });
  }
  function v_(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var a = n();
      return !Je(e, a);
    } catch {
      return !0;
    }
  }
  function E_(e) {
    var n = Yn(e, 2);
    n !== null && Ge(n, e, 2);
  }
  function ih(e) {
    var n = ke();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), Xs)) {
        ri(!0);
        try {
          a();
        } finally {
          ri(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = e),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fn,
        lastRenderedState: e,
      }),
      n
    );
  }
  function S_(e, n, a, u) {
    return (e.baseState = a), th(e, Xt, typeof u == "function" ? u : fn);
  }
  function xv(e, n, a, u, f) {
    if (Go(e)) throw Error(s(485));
    if (((e = n.action), e !== null)) {
      var g = {
        payload: f,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (p) {
          g.listeners.push(p);
        },
      };
      F.T !== null ? a(!0) : (g.isTransition = !1),
        u(g),
        (a = n.pending),
        a === null
          ? ((g.next = n.pending = g), x_(n, g))
          : ((g.next = a.next), (n.pending = a.next = g));
    }
  }
  function x_(e, n) {
    var a = n.action,
      u = n.payload,
      f = e.state;
    if (n.isTransition) {
      var g = F.T,
        p = {};
      F.T = p;
      try {
        var S = a(f, u),
          T = F.S;
        T !== null && T(p, S), T_(e, n, S);
      } catch (O) {
        nh(e, n, O);
      } finally {
        F.T = g;
      }
    } else
      try {
        (g = a(f, u)), T_(e, n, g);
      } catch (O) {
        nh(e, n, O);
      }
  }
  function T_(e, n, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (u) {
            C_(e, n, u);
          },
          function (u) {
            return nh(e, n, u);
          },
        )
      : C_(e, n, a);
  }
  function C_(e, n, a) {
    (n.status = "fulfilled"),
      (n.value = a),
      R_(n),
      (e.state = a),
      (n = e.pending),
      n !== null &&
        ((a = n.next),
        a === n ? (e.pending = null) : ((a = a.next), (n.next = a), x_(e, a)));
  }
  function nh(e, n, a) {
    var u = e.pending;
    if (((e.pending = null), u !== null)) {
      u = u.next;
      do (n.status = "rejected"), (n.reason = a), R_(n), (n = n.next);
      while (n !== u);
    }
    e.action = null;
  }
  function R_(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function b_(e, n) {
    return n;
  }
  function w_(e, n) {
    if (Ot) {
      var a = Bt.formState;
      if (a !== null) {
        t: {
          var u = Tt;
          if (Ot) {
            if (pe) {
              e: {
                for (var f = pe, g = ji; f.nodeType !== 8; ) {
                  if (!g) {
                    f = null;
                    break e;
                  }
                  if (((f = Li(f.nextSibling)), f === null)) {
                    f = null;
                    break e;
                  }
                }
                (g = f.data), (f = g === "F!" || g === "F" ? f : null);
              }
              if (f) {
                (pe = Li(f.nextSibling)), (u = f.data === "F!");
                break t;
              }
            }
            Gs(u);
          }
          u = !1;
        }
        u && (n = a[0]);
      }
    }
    return (
      (a = ke()),
      (a.memoizedState = a.baseState = n),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: b_,
        lastRenderedState: n,
      }),
      (a.queue = u),
      (a = j_.bind(null, Tt, u)),
      (u.dispatch = a),
      (u = ih(!1)),
      (g = uh.bind(null, Tt, !1, u.queue)),
      (u = ke()),
      (f = { state: n, dispatch: null, action: e, pending: null }),
      (u.queue = f),
      (a = xv.bind(null, Tt, f, g, a)),
      (f.dispatch = a),
      (u.memoizedState = e),
      [n, a, !1]
    );
  }
  function A_(e) {
    var n = ie();
    return M_(n, Xt, e);
  }
  function M_(e, n, a) {
    (n = th(e, n, b_)[0]),
      (e = Io(fn)[0]),
      (n =
        typeof n == "object" && n !== null && typeof n.then == "function"
          ? Ql(n)
          : n);
    var u = ie(),
      f = u.queue,
      g = f.dispatch;
    return (
      a !== u.memoizedState &&
        ((Tt.flags |= 2048),
        zr(9, Tv.bind(null, f, a), { destroy: void 0 }, null)),
      [n, g, e]
    );
  }
  function Tv(e, n) {
    e.action = n;
  }
  function O_(e) {
    var n = ie(),
      a = Xt;
    if (a !== null) return M_(n, a, e);
    ie(), (n = n.memoizedState), (a = ie());
    var u = a.queue.dispatch;
    return (a.memoizedState = e), [n, u, !1];
  }
  function zr(e, n, a, u) {
    return (
      (e = { tag: e, create: n, inst: a, deps: u, next: null }),
      (n = Tt.updateQueue),
      n === null && ((n = Do()), (Tt.updateQueue = n)),
      (a = n.lastEffect),
      a === null
        ? (n.lastEffect = e.next = e)
        : ((u = a.next), (a.next = e), (e.next = u), (n.lastEffect = e)),
      e
    );
  }
  function D_() {
    return ie().memoizedState;
  }
  function zo(e, n, a, u) {
    var f = ke();
    (Tt.flags |= e),
      (f.memoizedState = zr(
        1 | n,
        a,
        { destroy: void 0 },
        u === void 0 ? null : u,
      ));
  }
  function No(e, n, a, u) {
    var f = ie();
    u = u === void 0 ? null : u;
    var g = f.memoizedState.inst;
    Xt !== null && u !== null && Vc(u, Xt.memoizedState.deps)
      ? (f.memoizedState = zr(n, a, g, u))
      : ((Tt.flags |= e), (f.memoizedState = zr(1 | n, a, g, u)));
  }
  function L_(e, n) {
    zo(8390656, 8, e, n);
  }
  function sh(e, n) {
    No(2048, 8, e, n);
  }
  function I_(e, n) {
    return No(4, 2, e, n);
  }
  function z_(e, n) {
    return No(4, 4, e, n);
  }
  function N_(e, n) {
    if (typeof n == "function") {
      e = e();
      var a = n(e);
      return function () {
        typeof a == "function" ? a() : n(null);
      };
    }
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function G_(e, n, a) {
    (a = a != null ? a.concat([e]) : null), No(4, 4, N_.bind(null, n, e), a);
  }
  function rh() {}
  function F_(e, n) {
    var a = ie();
    n = n === void 0 ? null : n;
    var u = a.memoizedState;
    return n !== null && Vc(n, u[1]) ? u[0] : ((a.memoizedState = [e, n]), e);
  }
  function U_(e, n) {
    var a = ie();
    n = n === void 0 ? null : n;
    var u = a.memoizedState;
    if (n !== null && Vc(n, u[1])) return u[0];
    if (((u = e()), Xs)) {
      ri(!0);
      try {
        e();
      } finally {
        ri(!1);
      }
    }
    return (a.memoizedState = [u, n]), u;
  }
  function lh(e, n, a) {
    return a === void 0 || (Bn & 1073741824) !== 0
      ? (e.memoizedState = n)
      : ((e.memoizedState = a), (e = Ym()), (Tt.lanes |= e), ($n |= e), a);
  }
  function X_(e, n, a, u) {
    return Je(a, n)
      ? a
      : Mr.current !== null
        ? ((e = lh(e, a, u)), Je(e, n) || (he = !0), e)
        : (Bn & 42) === 0
          ? ((he = !0), (e.memoizedState = a))
          : ((e = Ym()), (Tt.lanes |= e), ($n |= e), n);
  }
  function Y_(e, n, a, u, f) {
    var g = J.p;
    J.p = g !== 0 && 8 > g ? g : 8;
    var p = F.T,
      S = {};
    (F.T = S), uh(e, !1, n, a);
    try {
      var T = f(),
        O = F.S;
      if (
        (O !== null && O(S, T),
        T !== null && typeof T == "object" && typeof T.then == "function")
      ) {
        var k = vv(T, u);
        Jl(e, n, k, ii(e));
      } else Jl(e, n, u, ii(e));
    } catch (K) {
      Jl(e, n, { then: function () {}, status: "rejected", reason: K }, ii());
    } finally {
      (J.p = g), (F.T = p);
    }
  }
  function Cv() {}
  function ah(e, n, a, u) {
    if (e.tag !== 5) throw Error(s(476));
    var f = P_(e).queue;
    Y_(
      e,
      f,
      n,
      lt,
      a === null
        ? Cv
        : function () {
            return k_(e), a(u);
          },
    );
  }
  function P_(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: lt,
      baseState: lt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fn,
        lastRenderedState: lt,
      },
      next: null,
    };
    var a = {};
    return (
      (n.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: fn,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = n),
      (e = e.alternate),
      e !== null && (e.memoizedState = n),
      n
    );
  }
  function k_(e) {
    var n = P_(e).next.queue;
    Jl(e, n, {}, ii());
  }
  function oh() {
    return be(pa);
  }
  function B_() {
    return ie().memoizedState;
  }
  function H_() {
    return ie().memoizedState;
  }
  function Rv(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = ii();
          e = Kn(a);
          var u = Vn(n, e, a);
          u !== null && (Ge(u, n, a), ea(u, n, a)),
            (n = { cache: jc() }),
            (e.payload = n);
          return;
      }
      n = n.return;
    }
  }
  function bv(e, n, a) {
    var u = ii();
    (a = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Go(e)
        ? Z_(n, a)
        : ((a = Uc(e, n, a, u)), a !== null && (Ge(a, e, u), K_(a, n, u)));
  }
  function j_(e, n, a) {
    var u = ii();
    Jl(e, n, a, u);
  }
  function Jl(e, n, a, u) {
    var f = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Go(e)) Z_(n, f);
    else {
      var g = e.alternate;
      if (
        e.lanes === 0 &&
        (g === null || g.lanes === 0) &&
        ((g = n.lastRenderedReducer), g !== null)
      )
        try {
          var p = n.lastRenderedState,
            S = g(p, a);
          if (((f.hasEagerState = !0), (f.eagerState = S), Je(S, p)))
            return vo(e, n, f, 0), Bt === null && po(), !1;
        } catch {
        } finally {
        }
      if (((a = Uc(e, n, f, u)), a !== null))
        return Ge(a, e, u), K_(a, n, u), !0;
    }
    return !1;
  }
  function uh(e, n, a, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: Jh(),
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Go(e))
    ) {
      if (n) throw Error(s(479));
    } else (n = Uc(e, a, u, 2)), n !== null && Ge(n, e, 2);
  }
  function Go(e) {
    var n = e.alternate;
    return e === Tt || (n !== null && n === Tt);
  }
  function Z_(e, n) {
    Lr = Mo = !0;
    var a = e.pending;
    a === null ? (n.next = n) : ((n.next = a.next), (a.next = n)),
      (e.pending = n);
  }
  function K_(e, n, a) {
    if ((a & 4194176) !== 0) {
      var u = n.lanes;
      (u &= e.pendingLanes), (a |= u), (n.lanes = a), ue(e, a);
    }
  }
  var Ki = {
    readContext: be,
    use: Lo,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useLayoutEffect: te,
    useInsertionEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useSyncExternalStore: te,
    useId: te,
  };
  (Ki.useCacheRefresh = te),
    (Ki.useMemoCache = te),
    (Ki.useHostTransitionStatus = te),
    (Ki.useFormState = te),
    (Ki.useActionState = te),
    (Ki.useOptimistic = te);
  var Ys = {
    readContext: be,
    use: Lo,
    useCallback: function (e, n) {
      return (ke().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: be,
    useEffect: L_,
    useImperativeHandle: function (e, n, a) {
      (a = a != null ? a.concat([e]) : null),
        zo(4194308, 4, N_.bind(null, n, e), a);
    },
    useLayoutEffect: function (e, n) {
      return zo(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      zo(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var a = ke();
      n = n === void 0 ? null : n;
      var u = e();
      if (Xs) {
        ri(!0);
        try {
          e();
        } finally {
          ri(!1);
        }
      }
      return (a.memoizedState = [u, n]), u;
    },
    useReducer: function (e, n, a) {
      var u = ke();
      if (a !== void 0) {
        var f = a(n);
        if (Xs) {
          ri(!0);
          try {
            a(n);
          } finally {
            ri(!1);
          }
        }
      } else f = n;
      return (
        (u.memoizedState = u.baseState = f),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: f,
        }),
        (u.queue = e),
        (e = e.dispatch = bv.bind(null, Tt, e)),
        [u.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = ke();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: function (e) {
      e = ih(e);
      var n = e.queue,
        a = j_.bind(null, Tt, n);
      return (n.dispatch = a), [e.memoizedState, a];
    },
    useDebugValue: rh,
    useDeferredValue: function (e, n) {
      var a = ke();
      return lh(a, e, n);
    },
    useTransition: function () {
      var e = ih(!1);
      return (
        (e = Y_.bind(null, Tt, e.queue, !0, !1)),
        (ke().memoizedState = e),
        [!1, e]
      );
    },
    useSyncExternalStore: function (e, n, a) {
      var u = Tt,
        f = ke();
      if (Ot) {
        if (a === void 0) throw Error(s(407));
        a = a();
      } else {
        if (((a = n()), Bt === null)) throw Error(s(349));
        (At & 60) !== 0 || m_(u, n, a);
      }
      f.memoizedState = a;
      var g = { value: a, getSnapshot: n };
      return (
        (f.queue = g),
        L_(p_.bind(null, u, g, e), [e]),
        (u.flags |= 2048),
        zr(9, y_.bind(null, u, g, a, n), { destroy: void 0 }, null),
        a
      );
    },
    useId: function () {
      var e = ke(),
        n = Bt.identifierPrefix;
      if (Ot) {
        var a = cn,
          u = un;
        (a = (u & ~(1 << (32 - Te(u) - 1))).toString(32) + a),
          (n = ":" + n + "R" + a),
          (a = Oo++),
          0 < a && (n += "H" + a.toString(32)),
          (n += ":");
      } else (a = Ev++), (n = ":" + n + "r" + a.toString(32) + ":");
      return (e.memoizedState = n);
    },
    useCacheRefresh: function () {
      return (ke().memoizedState = Rv.bind(null, Tt));
    },
  };
  (Ys.useMemoCache = $c),
    (Ys.useHostTransitionStatus = oh),
    (Ys.useFormState = w_),
    (Ys.useActionState = w_),
    (Ys.useOptimistic = function (e) {
      var n = ke();
      n.memoizedState = n.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (n.queue = a), (n = uh.bind(null, Tt, !0, a)), (a.dispatch = n), [e, n]
      );
    });
  var Hn = {
    readContext: be,
    use: Lo,
    useCallback: F_,
    useContext: be,
    useEffect: sh,
    useImperativeHandle: G_,
    useInsertionEffect: I_,
    useLayoutEffect: z_,
    useMemo: U_,
    useReducer: Io,
    useRef: D_,
    useState: function () {
      return Io(fn);
    },
    useDebugValue: rh,
    useDeferredValue: function (e, n) {
      var a = ie();
      return X_(a, Xt.memoizedState, e, n);
    },
    useTransition: function () {
      var e = Io(fn)[0],
        n = ie().memoizedState;
      return [typeof e == "boolean" ? e : Ql(e), n];
    },
    useSyncExternalStore: __,
    useId: B_,
  };
  (Hn.useCacheRefresh = H_),
    (Hn.useMemoCache = $c),
    (Hn.useHostTransitionStatus = oh),
    (Hn.useFormState = A_),
    (Hn.useActionState = A_),
    (Hn.useOptimistic = function (e, n) {
      var a = ie();
      return S_(a, Xt, e, n);
    });
  var Ps = {
    readContext: be,
    use: Lo,
    useCallback: F_,
    useContext: be,
    useEffect: sh,
    useImperativeHandle: G_,
    useInsertionEffect: I_,
    useLayoutEffect: z_,
    useMemo: U_,
    useReducer: eh,
    useRef: D_,
    useState: function () {
      return eh(fn);
    },
    useDebugValue: rh,
    useDeferredValue: function (e, n) {
      var a = ie();
      return Xt === null ? lh(a, e, n) : X_(a, Xt.memoizedState, e, n);
    },
    useTransition: function () {
      var e = eh(fn)[0],
        n = ie().memoizedState;
      return [typeof e == "boolean" ? e : Ql(e), n];
    },
    useSyncExternalStore: __,
    useId: B_,
  };
  (Ps.useCacheRefresh = H_),
    (Ps.useMemoCache = $c),
    (Ps.useHostTransitionStatus = oh),
    (Ps.useFormState = O_),
    (Ps.useActionState = O_),
    (Ps.useOptimistic = function (e, n) {
      var a = ie();
      return Xt !== null
        ? S_(a, Xt, e, n)
        : ((a.baseState = e), [e, a.queue.dispatch]);
    });
  function ch(e, n, a, u) {
    (n = e.memoizedState),
      (a = a(u, n)),
      (a = a == null ? n : q({}, n, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var hh = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? W(e) === e : !1;
    },
    enqueueSetState: function (e, n, a) {
      e = e._reactInternals;
      var u = ii(),
        f = Kn(u);
      (f.payload = n),
        a != null && (f.callback = a),
        (n = Vn(e, f, u)),
        n !== null && (Ge(n, e, u), ea(n, e, u));
    },
    enqueueReplaceState: function (e, n, a) {
      e = e._reactInternals;
      var u = ii(),
        f = Kn(u);
      (f.tag = 1),
        (f.payload = n),
        a != null && (f.callback = a),
        (n = Vn(e, f, u)),
        n !== null && (Ge(n, e, u), ea(n, e, u));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var a = ii(),
        u = Kn(a);
      (u.tag = 2),
        n != null && (u.callback = n),
        (n = Vn(e, u, a)),
        n !== null && (Ge(n, e, a), ea(n, e, a));
    },
  };
  function V_(e, n, a, u, f, g, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(u, g, p)
        : n.prototype && n.prototype.isPureReactComponent
          ? !Xl(a, u) || !Xl(f, g)
          : !0
    );
  }
  function q_(e, n, a, u) {
    (e = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(a, u),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(a, u),
      n.state !== e && hh.enqueueReplaceState(n, n.state, null);
  }
  function ks(e, n) {
    var a = n;
    if ("ref" in n) {
      a = {};
      for (var u in n) u !== "ref" && (a[u] = n[u]);
    }
    if ((e = e.defaultProps)) {
      a === n && (a = q({}, a));
      for (var f in e) a[f] === void 0 && (a[f] = e[f]);
    }
    return a;
  }
  var Fo =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var n = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(n)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function W_(e) {
    Fo(e);
  }
  function Q_(e) {
    console.error(e);
  }
  function J_(e) {
    Fo(e);
  }
  function Uo(e, n) {
    try {
      var a = e.onUncaughtError;
      a(n.value, { componentStack: n.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function $_(e, n, a) {
    try {
      var u = e.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (f) {
      setTimeout(function () {
        throw f;
      });
    }
  }
  function fh(e, n, a) {
    return (
      (a = Kn(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        Uo(e, n);
      }),
      a
    );
  }
  function tm(e) {
    return (e = Kn(e)), (e.tag = 3), e;
  }
  function em(e, n, a, u) {
    var f = a.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var g = u.value;
      (e.payload = function () {
        return f(g);
      }),
        (e.callback = function () {
          $_(n, a, u);
        });
    }
    var p = a.stateNode;
    p !== null &&
      typeof p.componentDidCatch == "function" &&
      (e.callback = function () {
        $_(n, a, u),
          typeof f != "function" &&
            (ts === null ? (ts = new Set([this])) : ts.add(this));
        var S = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: S !== null ? S : "",
        });
      });
  }
  function wv(e, n, a, u, f) {
    if (
      ((a.flags |= 32768),
      u !== null && typeof u == "object" && typeof u.then == "function")
    ) {
      if (
        ((n = a.alternate),
        n !== null && ta(n, a, f, !0),
        (a = di.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              Zi === null ? Kh() : a.alternate === null && Qt === 0 && (Qt = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = f),
              u === kc
                ? (a.flags |= 16384)
                : ((n = a.updateQueue),
                  n === null ? (a.updateQueue = new Set([u])) : n.add(u),
                  qh(e, u, f)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              u === kc
                ? (a.flags |= 16384)
                : ((n = a.updateQueue),
                  n === null
                    ? ((n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u]),
                      }),
                      (a.updateQueue = n))
                    : ((a = n.retryQueue),
                      a === null ? (n.retryQueue = new Set([u])) : a.add(u)),
                  qh(e, u, f)),
              !1
            );
        }
        throw Error(s(435, a.tag));
      }
      return qh(e, u, f), Kh(), !1;
    }
    if (Ot)
      return (
        (n = di.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = f),
            u !== Pc && ((e = Error(s(422), { cause: u })), Bl(ci(e, a))))
          : (u !== Pc && ((n = Error(s(423), { cause: u })), Bl(ci(n, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (f &= -f),
            (e.lanes |= f),
            (u = ci(u, a)),
            (f = fh(e.stateNode, u, f)),
            wh(e, f),
            Qt !== 4 && (Qt = 2)),
        !1
      );
    var g = Error(s(520), { cause: u });
    if (
      ((g = ci(g, a)),
      ua === null ? (ua = [g]) : ua.push(g),
      Qt !== 4 && (Qt = 2),
      n === null)
    )
      return !0;
    (u = ci(u, a)), (a = n);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = f & -f),
            (a.lanes |= e),
            (e = fh(a.stateNode, u, e)),
            wh(a, e),
            !1
          );
        case 1:
          if (
            ((n = a.type),
            (g = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == "function" ||
                (g !== null &&
                  typeof g.componentDidCatch == "function" &&
                  (ts === null || !ts.has(g)))))
          )
            return (
              (a.flags |= 65536),
              (f &= -f),
              (a.lanes |= f),
              (f = tm(f)),
              em(f, e, a, u),
              wh(a, f),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var im = Error(s(461)),
    he = !1;
  function ve(e, n, a, u) {
    n.child = e === null ? a_(n, null, a, u) : Fs(n, e.child, a, u);
  }
  function nm(e, n, a, u, f) {
    a = a.render;
    var g = n.ref;
    if ("ref" in u) {
      var p = {};
      for (var S in u) S !== "ref" && (p[S] = u[S]);
    } else p = u;
    return (
      Hs(n),
      (u = qc(e, n, a, p, g, f)),
      (S = Wc()),
      e !== null && !he
        ? (Qc(e, n, f), dn(e, n, f))
        : (Ot && S && Xc(n), (n.flags |= 1), ve(e, n, u, f), n.child)
    );
  }
  function sm(e, n, a, u, f) {
    if (e === null) {
      var g = a.type;
      return typeof g == "function" &&
        !Nh(g) &&
        g.defaultProps === void 0 &&
        a.compare === null
        ? ((n.tag = 15), (n.type = g), rm(e, n, g, u, f))
        : ((e = Bo(a.type, null, u, n, n.mode, f)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((g = e.child), !Sh(e, f))) {
      var p = g.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Xl), a(p, u) && e.ref === n.ref)
      )
        return dn(e, n, f);
    }
    return (
      (n.flags |= 1),
      (e = Jn(g, u)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function rm(e, n, a, u, f) {
    if (e !== null) {
      var g = e.memoizedProps;
      if (Xl(g, u) && e.ref === n.ref)
        if (((he = !1), (n.pendingProps = u = g), Sh(e, f)))
          (e.flags & 131072) !== 0 && (he = !0);
        else return (n.lanes = e.lanes), dn(e, n, f);
    }
    return dh(e, n, a, u, f);
  }
  function lm(e, n, a) {
    var u = n.pendingProps,
      f = u.children,
      g = (n.stateNode._pendingVisibility & 2) !== 0,
      p = e !== null ? e.memoizedState : null;
    if (($l(e, n), u.mode === "hidden" || g)) {
      if ((n.flags & 128) !== 0) {
        if (((u = p !== null ? p.baseLanes | a : a), e !== null)) {
          for (f = n.child = e.child, g = 0; f !== null; )
            (g = g | f.lanes | f.childLanes), (f = f.sibling);
          n.childLanes = g & ~u;
        } else (n.childLanes = 0), (n.child = null);
        return am(e, n, u, a);
      }
      if ((a & 536870912) !== 0)
        (n.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Ao(n, p !== null ? p.cachePool : null),
          p !== null ? o_(n, p) : Bc(),
          u_(n);
      else
        return (
          (n.lanes = n.childLanes = 536870912),
          am(e, n, p !== null ? p.baseLanes | a : a, a)
        );
    } else
      p !== null
        ? (Ao(n, p.cachePool), o_(n, p), kn(), (n.memoizedState = null))
        : (e !== null && Ao(n, null), Bc(), kn());
    return ve(e, n, f, a), n.child;
  }
  function am(e, n, a, u) {
    var f = Kc();
    return (
      (f = f === null ? null : { parent: le._currentValue, pool: f }),
      (n.memoizedState = { baseLanes: a, cachePool: f }),
      e !== null && Ao(n, null),
      Bc(),
      u_(n),
      e !== null && ta(e, n, u, !0),
      null
    );
  }
  function $l(e, n) {
    var a = n.ref;
    if (a === null) e !== null && e.ref !== null && (n.flags |= 2097664);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(s(284));
      (e === null || e.ref !== a) && (n.flags |= 2097664);
    }
  }
  function dh(e, n, a, u, f) {
    return (
      Hs(n),
      (a = qc(e, n, a, u, void 0, f)),
      (u = Wc()),
      e !== null && !he
        ? (Qc(e, n, f), dn(e, n, f))
        : (Ot && u && Xc(n), (n.flags |= 1), ve(e, n, a, f), n.child)
    );
  }
  function om(e, n, a, u, f, g) {
    return (
      Hs(n),
      (n.updateQueue = null),
      (a = g_(n, u, a, f)),
      d_(e),
      (u = Wc()),
      e !== null && !he
        ? (Qc(e, n, g), dn(e, n, g))
        : (Ot && u && Xc(n), (n.flags |= 1), ve(e, n, a, g), n.child)
    );
  }
  function um(e, n, a, u, f) {
    if ((Hs(n), n.stateNode === null)) {
      var g = Rr,
        p = a.contextType;
      typeof p == "object" && p !== null && (g = be(p)),
        (g = new a(u, g)),
        (n.memoizedState =
          g.state !== null && g.state !== void 0 ? g.state : null),
        (g.updater = hh),
        (n.stateNode = g),
        (g._reactInternals = n),
        (g = n.stateNode),
        (g.props = u),
        (g.state = n.memoizedState),
        (g.refs = {}),
        Rh(n),
        (p = a.contextType),
        (g.context = typeof p == "object" && p !== null ? be(p) : Rr),
        (g.state = n.memoizedState),
        (p = a.getDerivedStateFromProps),
        typeof p == "function" && (ch(n, a, p, u), (g.state = n.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof g.getSnapshotBeforeUpdate == "function" ||
          (typeof g.UNSAFE_componentWillMount != "function" &&
            typeof g.componentWillMount != "function") ||
          ((p = g.state),
          typeof g.componentWillMount == "function" && g.componentWillMount(),
          typeof g.UNSAFE_componentWillMount == "function" &&
            g.UNSAFE_componentWillMount(),
          p !== g.state && hh.enqueueReplaceState(g, g.state, null),
          na(n, u, g, f),
          ia(),
          (g.state = n.memoizedState)),
        typeof g.componentDidMount == "function" && (n.flags |= 4194308),
        (u = !0);
    } else if (e === null) {
      g = n.stateNode;
      var S = n.memoizedProps,
        T = ks(a, S);
      g.props = T;
      var O = g.context,
        k = a.contextType;
      (p = Rr), typeof k == "object" && k !== null && (p = be(k));
      var K = a.getDerivedStateFromProps;
      (k =
        typeof K == "function" ||
        typeof g.getSnapshotBeforeUpdate == "function"),
        (S = n.pendingProps !== S),
        k ||
          (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
            typeof g.componentWillReceiveProps != "function") ||
          ((S || O !== p) && q_(n, g, u, p)),
        (Zn = !1);
      var N = n.memoizedState;
      (g.state = N),
        na(n, u, g, f),
        ia(),
        (O = n.memoizedState),
        S || N !== O || Zn
          ? (typeof K == "function" && (ch(n, a, K, u), (O = n.memoizedState)),
            (T = Zn || V_(n, a, T, u, N, O, p))
              ? (k ||
                  (typeof g.UNSAFE_componentWillMount != "function" &&
                    typeof g.componentWillMount != "function") ||
                  (typeof g.componentWillMount == "function" &&
                    g.componentWillMount(),
                  typeof g.UNSAFE_componentWillMount == "function" &&
                    g.UNSAFE_componentWillMount()),
                typeof g.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof g.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = u),
                (n.memoizedState = O)),
            (g.props = u),
            (g.state = O),
            (g.context = p),
            (u = T))
          : (typeof g.componentDidMount == "function" && (n.flags |= 4194308),
            (u = !1));
    } else {
      (g = n.stateNode),
        bh(e, n),
        (p = n.memoizedProps),
        (k = ks(a, p)),
        (g.props = k),
        (K = n.pendingProps),
        (N = g.context),
        (O = a.contextType),
        (T = Rr),
        typeof O == "object" && O !== null && (T = be(O)),
        (S = a.getDerivedStateFromProps),
        (O =
          typeof S == "function" ||
          typeof g.getSnapshotBeforeUpdate == "function") ||
          (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
            typeof g.componentWillReceiveProps != "function") ||
          ((p !== K || N !== T) && q_(n, g, u, T)),
        (Zn = !1),
        (N = n.memoizedState),
        (g.state = N),
        na(n, u, g, f),
        ia();
      var P = n.memoizedState;
      p !== K ||
      N !== P ||
      Zn ||
      (e !== null && e.dependencies !== null && Xo(e.dependencies))
        ? (typeof S == "function" && (ch(n, a, S, u), (P = n.memoizedState)),
          (k =
            Zn ||
            V_(n, a, k, u, N, P, T) ||
            (e !== null && e.dependencies !== null && Xo(e.dependencies)))
            ? (O ||
                (typeof g.UNSAFE_componentWillUpdate != "function" &&
                  typeof g.componentWillUpdate != "function") ||
                (typeof g.componentWillUpdate == "function" &&
                  g.componentWillUpdate(u, P, T),
                typeof g.UNSAFE_componentWillUpdate == "function" &&
                  g.UNSAFE_componentWillUpdate(u, P, T)),
              typeof g.componentDidUpdate == "function" && (n.flags |= 4),
              typeof g.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof g.componentDidUpdate != "function" ||
                (p === e.memoizedProps && N === e.memoizedState) ||
                (n.flags |= 4),
              typeof g.getSnapshotBeforeUpdate != "function" ||
                (p === e.memoizedProps && N === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = u),
              (n.memoizedState = P)),
          (g.props = u),
          (g.state = P),
          (g.context = T),
          (u = k))
        : (typeof g.componentDidUpdate != "function" ||
            (p === e.memoizedProps && N === e.memoizedState) ||
            (n.flags |= 4),
          typeof g.getSnapshotBeforeUpdate != "function" ||
            (p === e.memoizedProps && N === e.memoizedState) ||
            (n.flags |= 1024),
          (u = !1));
    }
    return (
      (g = u),
      $l(e, n),
      (u = (n.flags & 128) !== 0),
      g || u
        ? ((g = n.stateNode),
          (a =
            u && typeof a.getDerivedStateFromError != "function"
              ? null
              : g.render()),
          (n.flags |= 1),
          e !== null && u
            ? ((n.child = Fs(n, e.child, null, f)),
              (n.child = Fs(n, null, a, f)))
            : ve(e, n, a, f),
          (n.memoizedState = g.state),
          (e = n.child))
        : (e = dn(e, n, f)),
      e
    );
  }
  function cm(e, n, a, u) {
    return kl(), (n.flags |= 256), ve(e, n, a, u), n.child;
  }
  var gh = { dehydrated: null, treeContext: null, retryLane: 0 };
  function _h(e) {
    return { baseLanes: e, cachePool: f_() };
  }
  function mh(e, n, a) {
    return (e = e !== null ? e.childLanes & ~a : 0), n && (e |= yi), e;
  }
  function hm(e, n, a) {
    var u = n.pendingProps,
      f = !1,
      g = (n.flags & 128) !== 0,
      p;
    if (
      ((p = g) ||
        (p =
          e !== null && e.memoizedState === null ? !1 : (re.current & 2) !== 0),
      p && ((f = !0), (n.flags &= -129)),
      (p = (n.flags & 32) !== 0),
      (n.flags &= -33),
      e === null)
    ) {
      if (Ot) {
        if ((f ? Pn(n) : kn(), Ot)) {
          var S = pe,
            T;
          if ((T = S)) {
            t: {
              for (T = S, S = ji; T.nodeType !== 8; ) {
                if (!S) {
                  S = null;
                  break t;
                }
                if (((T = Li(T.nextSibling)), T === null)) {
                  S = null;
                  break t;
                }
              }
              S = T;
            }
            S !== null
              ? ((n.memoizedState = {
                  dehydrated: S,
                  treeContext: zs !== null ? { id: un, overflow: cn } : null,
                  retryLane: 536870912,
                }),
                (T = mi(18, null, null, 0)),
                (T.stateNode = S),
                (T.return = n),
                (n.child = T),
                (Ne = n),
                (pe = null),
                (T = !0))
              : (T = !1);
          }
          T || Gs(n);
        }
        if (
          ((S = n.memoizedState),
          S !== null && ((S = S.dehydrated), S !== null))
        )
          return S.data === "$!" ? (n.lanes = 16) : (n.lanes = 536870912), null;
        hn(n);
      }
      return (
        (S = u.children),
        (u = u.fallback),
        f
          ? (kn(),
            (f = n.mode),
            (S = ph({ mode: "hidden", children: S }, f)),
            (u = Zs(u, f, a, null)),
            (S.return = n),
            (u.return = n),
            (S.sibling = u),
            (n.child = S),
            (f = n.child),
            (f.memoizedState = _h(a)),
            (f.childLanes = mh(e, p, a)),
            (n.memoizedState = gh),
            u)
          : (Pn(n), yh(n, S))
      );
    }
    if (
      ((T = e.memoizedState), T !== null && ((S = T.dehydrated), S !== null))
    ) {
      if (g)
        n.flags & 256
          ? (Pn(n), (n.flags &= -257), (n = vh(e, n, a)))
          : n.memoizedState !== null
            ? (kn(), (n.child = e.child), (n.flags |= 128), (n = null))
            : (kn(),
              (f = u.fallback),
              (S = n.mode),
              (u = ph({ mode: "visible", children: u.children }, S)),
              (f = Zs(f, S, a, null)),
              (f.flags |= 2),
              (u.return = n),
              (f.return = n),
              (u.sibling = f),
              (n.child = u),
              Fs(n, e.child, null, a),
              (u = n.child),
              (u.memoizedState = _h(a)),
              (u.childLanes = mh(e, p, a)),
              (n.memoizedState = gh),
              (n = f));
      else if ((Pn(n), S.data === "$!")) {
        if (((p = S.nextSibling && S.nextSibling.dataset), p)) var O = p.dgst;
        (p = O),
          (u = Error(s(419))),
          (u.stack = ""),
          (u.digest = p),
          Bl({ value: u, source: null, stack: null }),
          (n = vh(e, n, a));
      } else if (
        (he || ta(e, n, a, !1), (p = (a & e.childLanes) !== 0), he || p)
      ) {
        if (((p = Bt), p !== null)) {
          if (((u = a & -a), (u & 42) !== 0)) u = 1;
          else
            switch (u) {
              case 2:
                u = 1;
                break;
              case 8:
                u = 4;
                break;
              case 32:
                u = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                u = 64;
                break;
              case 268435456:
                u = 134217728;
                break;
              default:
                u = 0;
            }
          if (
            ((u = (u & (p.suspendedLanes | a)) !== 0 ? 0 : u),
            u !== 0 && u !== T.retryLane)
          )
            throw ((T.retryLane = u), Yn(e, u), Ge(p, e, u), im);
        }
        S.data === "$?" || Kh(), (n = vh(e, n, a));
      } else
        S.data === "$?"
          ? ((n.flags |= 128),
            (n.child = e.child),
            (n = kv.bind(null, e)),
            (S._reactRetry = n),
            (n = null))
          : ((e = T.treeContext),
            (pe = Li(S.nextSibling)),
            (Ne = n),
            (Ot = !0),
            (Oi = null),
            (ji = !1),
            e !== null &&
              ((hi[fi++] = un),
              (hi[fi++] = cn),
              (hi[fi++] = zs),
              (un = e.id),
              (cn = e.overflow),
              (zs = n)),
            (n = yh(n, u.children)),
            (n.flags |= 4096));
      return n;
    }
    return f
      ? (kn(),
        (f = u.fallback),
        (S = n.mode),
        (T = e.child),
        (O = T.sibling),
        (u = Jn(T, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = T.subtreeFlags & 31457280),
        O !== null ? (f = Jn(O, f)) : ((f = Zs(f, S, a, null)), (f.flags |= 2)),
        (f.return = n),
        (u.return = n),
        (u.sibling = f),
        (n.child = u),
        (u = f),
        (f = n.child),
        (S = e.child.memoizedState),
        S === null
          ? (S = _h(a))
          : ((T = S.cachePool),
            T !== null
              ? ((O = le._currentValue),
                (T = T.parent !== O ? { parent: O, pool: O } : T))
              : (T = f_()),
            (S = { baseLanes: S.baseLanes | a, cachePool: T })),
        (f.memoizedState = S),
        (f.childLanes = mh(e, p, a)),
        (n.memoizedState = gh),
        u)
      : (Pn(n),
        (a = e.child),
        (e = a.sibling),
        (a = Jn(a, { mode: "visible", children: u.children })),
        (a.return = n),
        (a.sibling = null),
        e !== null &&
          ((p = n.deletions),
          p === null ? ((n.deletions = [e]), (n.flags |= 16)) : p.push(e)),
        (n.child = a),
        (n.memoizedState = null),
        a);
  }
  function yh(e, n) {
    return (
      (n = ph({ mode: "visible", children: n }, e.mode)),
      (n.return = e),
      (e.child = n)
    );
  }
  function ph(e, n) {
    return Fm(e, n, 0, null);
  }
  function vh(e, n, a) {
    return (
      Fs(n, e.child, null, a),
      (e = yh(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function fm(e, n, a) {
    e.lanes |= n;
    var u = e.alternate;
    u !== null && (u.lanes |= n), Th(e.return, n, a);
  }
  function Eh(e, n, a, u, f) {
    var g = e.memoizedState;
    g === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: a,
          tailMode: f,
        })
      : ((g.isBackwards = n),
        (g.rendering = null),
        (g.renderingStartTime = 0),
        (g.last = u),
        (g.tail = a),
        (g.tailMode = f));
  }
  function dm(e, n, a) {
    var u = n.pendingProps,
      f = u.revealOrder,
      g = u.tail;
    if ((ve(e, n, u.children, a), (u = re.current), (u & 2) !== 0))
      (u = (u & 1) | 2), (n.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        t: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && fm(e, a, n);
          else if (e.tag === 19) fm(e, a, n);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === n) break t;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break t;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      u &= 1;
    }
    switch ((vt(re, u), f)) {
      case "forwards":
        for (a = n.child, f = null; a !== null; )
          (e = a.alternate),
            e !== null && wo(e) === null && (f = a),
            (a = a.sibling);
        (a = f),
          a === null
            ? ((f = n.child), (n.child = null))
            : ((f = a.sibling), (a.sibling = null)),
          Eh(n, !1, f, a, g);
        break;
      case "backwards":
        for (a = null, f = n.child, n.child = null; f !== null; ) {
          if (((e = f.alternate), e !== null && wo(e) === null)) {
            n.child = f;
            break;
          }
          (e = f.sibling), (f.sibling = a), (a = f), (f = e);
        }
        Eh(n, !0, a, null, g);
        break;
      case "together":
        Eh(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function dn(e, n, a) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      ($n |= n.lanes),
      (a & n.childLanes) === 0)
    )
      if (e !== null) {
        if ((ta(e, n, a, !1), (a & n.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && n.child !== e.child) throw Error(s(153));
    if (n.child !== null) {
      for (
        e = n.child, a = Jn(e, e.pendingProps), n.child = a, a.return = n;
        e.sibling !== null;

      )
        (e = e.sibling),
          (a = a.sibling = Jn(e, e.pendingProps)),
          (a.return = n);
      a.sibling = null;
    }
    return n.child;
  }
  function Sh(e, n) {
    return (e.lanes & n) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Xo(e)));
  }
  function Av(e, n, a) {
    switch (n.tag) {
      case 3:
        Yi(n, n.stateNode.containerInfo),
          jn(n, le, e.memoizedState.cache),
          kl();
        break;
      case 27:
      case 5:
        Xe(n);
        break;
      case 4:
        Yi(n, n.stateNode.containerInfo);
        break;
      case 10:
        jn(n, n.type, n.memoizedProps.value);
        break;
      case 13:
        var u = n.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (Pn(n), (n.flags |= 128), null)
            : (a & n.child.childLanes) !== 0
              ? hm(e, n, a)
              : (Pn(n), (e = dn(e, n, a)), e !== null ? e.sibling : null);
        Pn(n);
        break;
      case 19:
        var f = (e.flags & 128) !== 0;
        if (
          ((u = (a & n.childLanes) !== 0),
          u || (ta(e, n, a, !1), (u = (a & n.childLanes) !== 0)),
          f)
        ) {
          if (u) return dm(e, n, a);
          n.flags |= 128;
        }
        if (
          ((f = n.memoizedState),
          f !== null &&
            ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
          vt(re, re.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), lm(e, n, a);
      case 24:
        jn(n, le, e.memoizedState.cache);
    }
    return dn(e, n, a);
  }
  function gm(e, n, a) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps) he = !0;
      else {
        if (!Sh(e, a) && (n.flags & 128) === 0) return (he = !1), Av(e, n, a);
        he = (e.flags & 131072) !== 0;
      }
    else (he = !1), Ot && (n.flags & 1048576) !== 0 && Jg(n, xo, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        t: {
          e = n.pendingProps;
          var u = n.elementType,
            f = u._init;
          if (((u = f(u._payload)), (n.type = u), typeof u == "function"))
            Nh(u)
              ? ((e = ks(u, e)), (n.tag = 1), (n = um(null, n, u, e, a)))
              : ((n.tag = 0), (n = dh(null, n, u, e, a)));
          else {
            if (u != null) {
              if (((f = u.$$typeof), f === x)) {
                (n.tag = 11), (n = nm(null, n, u, e, a));
                break t;
              } else if (f === w) {
                (n.tag = 14), (n = sm(null, n, u, e, a));
                break t;
              }
            }
            throw ((n = Z(u) || u), Error(s(306, n, "")));
          }
        }
        return n;
      case 0:
        return dh(e, n, n.type, n.pendingProps, a);
      case 1:
        return (u = n.type), (f = ks(u, n.pendingProps)), um(e, n, u, f, a);
      case 3:
        t: {
          if ((Yi(n, n.stateNode.containerInfo), e === null))
            throw Error(s(387));
          var g = n.pendingProps;
          (f = n.memoizedState), (u = f.element), bh(e, n), na(n, g, null, a);
          var p = n.memoizedState;
          if (
            ((g = p.cache),
            jn(n, le, g),
            g !== f.cache && Ch(n, [le], a, !0),
            ia(),
            (g = p.element),
            f.isDehydrated)
          )
            if (
              ((f = { element: g, isDehydrated: !1, cache: p.cache }),
              (n.updateQueue.baseState = f),
              (n.memoizedState = f),
              n.flags & 256)
            ) {
              n = cm(e, n, g, a);
              break t;
            } else if (g !== u) {
              (u = ci(Error(s(424)), n)), Bl(u), (n = cm(e, n, g, a));
              break t;
            } else
              for (
                pe = Li(n.stateNode.containerInfo.firstChild),
                  Ne = n,
                  Ot = !0,
                  Oi = null,
                  ji = !0,
                  a = a_(n, null, g, a),
                  n.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
          else {
            if ((kl(), g === u)) {
              n = dn(e, n, a);
              break t;
            }
            ve(e, n, g, a);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          $l(e, n),
          e === null
            ? (a = y0(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = a)
              : Ot ||
                ((a = n.type),
                (e = n.pendingProps),
                (u = eu(qe.current).createElement(a)),
                (u[Re] = n),
                (u[Ye] = e),
                Ee(u, a, e),
                ce(u),
                (n.stateNode = u))
            : (n.memoizedState = y0(
                n.type,
                e.memoizedProps,
                n.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Xe(n),
          e === null &&
            Ot &&
            ((u = n.stateNode = g0(n.type, n.pendingProps, qe.current)),
            (Ne = n),
            (ji = !0),
            (pe = Li(u.firstChild))),
          (u = n.pendingProps.children),
          e !== null || Ot ? ve(e, n, u, a) : (n.child = Fs(n, null, u, a)),
          $l(e, n),
          n.child
        );
      case 5:
        return (
          e === null &&
            Ot &&
            ((f = u = pe) &&
              ((u = sE(u, n.type, n.pendingProps, ji)),
              u !== null
                ? ((n.stateNode = u),
                  (Ne = n),
                  (pe = Li(u.firstChild)),
                  (ji = !1),
                  (f = !0))
                : (f = !1)),
            f || Gs(n)),
          Xe(n),
          (f = n.type),
          (g = n.pendingProps),
          (p = e !== null ? e.memoizedProps : null),
          (u = g.children),
          of(f, g) ? (u = null) : p !== null && of(f, p) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((f = qc(e, n, Sv, null, null, a)), (pa._currentValue = f)),
          $l(e, n),
          ve(e, n, u, a),
          n.child
        );
      case 6:
        return (
          e === null &&
            Ot &&
            ((e = a = pe) &&
              ((a = rE(a, n.pendingProps, ji)),
              a !== null
                ? ((n.stateNode = a), (Ne = n), (pe = null), (e = !0))
                : (e = !1)),
            e || Gs(n)),
          null
        );
      case 13:
        return hm(e, n, a);
      case 4:
        return (
          Yi(n, n.stateNode.containerInfo),
          (u = n.pendingProps),
          e === null ? (n.child = Fs(n, null, u, a)) : ve(e, n, u, a),
          n.child
        );
      case 11:
        return nm(e, n, n.type, n.pendingProps, a);
      case 7:
        return ve(e, n, n.pendingProps, a), n.child;
      case 8:
        return ve(e, n, n.pendingProps.children, a), n.child;
      case 12:
        return ve(e, n, n.pendingProps.children, a), n.child;
      case 10:
        return (
          (u = n.pendingProps),
          jn(n, n.type, u.value),
          ve(e, n, u.children, a),
          n.child
        );
      case 9:
        return (
          (f = n.type._context),
          (u = n.pendingProps.children),
          Hs(n),
          (f = be(f)),
          (u = u(f)),
          (n.flags |= 1),
          ve(e, n, u, a),
          n.child
        );
      case 14:
        return sm(e, n, n.type, n.pendingProps, a);
      case 15:
        return rm(e, n, n.type, n.pendingProps, a);
      case 19:
        return dm(e, n, a);
      case 22:
        return lm(e, n, a);
      case 24:
        return (
          Hs(n),
          (u = be(le)),
          e === null
            ? ((f = Kc()),
              f === null &&
                ((f = Bt),
                (g = jc()),
                (f.pooledCache = g),
                g.refCount++,
                g !== null && (f.pooledCacheLanes |= a),
                (f = g)),
              (n.memoizedState = { parent: u, cache: f }),
              Rh(n),
              jn(n, le, f))
            : ((e.lanes & a) !== 0 && (bh(e, n), na(n, null, null, a), ia()),
              (f = e.memoizedState),
              (g = n.memoizedState),
              f.parent !== u
                ? ((f = { parent: u, cache: u }),
                  (n.memoizedState = f),
                  n.lanes === 0 &&
                    (n.memoizedState = n.updateQueue.baseState = f),
                  jn(n, le, u))
                : ((u = g.cache),
                  jn(n, le, u),
                  u !== f.cache && Ch(n, [le], a, !0))),
          ve(e, n, n.pendingProps.children, a),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(s(156, n.tag));
  }
  var xh = mt(null),
    Bs = null,
    gn = null;
  function jn(e, n, a) {
    vt(xh, n._currentValue), (n._currentValue = a);
  }
  function _n(e) {
    (e._currentValue = xh.current), Ut(xh);
  }
  function Th(e, n, a) {
    for (; e !== null; ) {
      var u = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), u !== null && (u.childLanes |= n))
          : u !== null && (u.childLanes & n) !== n && (u.childLanes |= n),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function Ch(e, n, a, u) {
    var f = e.child;
    for (f !== null && (f.return = e); f !== null; ) {
      var g = f.dependencies;
      if (g !== null) {
        var p = f.child;
        g = g.firstContext;
        t: for (; g !== null; ) {
          var S = g;
          g = f;
          for (var T = 0; T < n.length; T++)
            if (S.context === n[T]) {
              (g.lanes |= a),
                (S = g.alternate),
                S !== null && (S.lanes |= a),
                Th(g.return, a, e),
                u || (p = null);
              break t;
            }
          g = S.next;
        }
      } else if (f.tag === 18) {
        if (((p = f.return), p === null)) throw Error(s(341));
        (p.lanes |= a),
          (g = p.alternate),
          g !== null && (g.lanes |= a),
          Th(p, a, e),
          (p = null);
      } else p = f.child;
      if (p !== null) p.return = f;
      else
        for (p = f; p !== null; ) {
          if (p === e) {
            p = null;
            break;
          }
          if (((f = p.sibling), f !== null)) {
            (f.return = p.return), (p = f);
            break;
          }
          p = p.return;
        }
      f = p;
    }
  }
  function ta(e, n, a, u) {
    e = null;
    for (var f = n, g = !1; f !== null; ) {
      if (!g) {
        if ((f.flags & 524288) !== 0) g = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var p = f.alternate;
        if (p === null) throw Error(s(387));
        if (((p = p.memoizedProps), p !== null)) {
          var S = f.type;
          Je(f.pendingProps.value, p.value) ||
            (e !== null ? e.push(S) : (e = [S]));
        }
      } else if (f === We.current) {
        if (((p = f.alternate), p === null)) throw Error(s(387));
        p.memoizedState.memoizedState !== f.memoizedState.memoizedState &&
          (e !== null ? e.push(pa) : (e = [pa]));
      }
      f = f.return;
    }
    e !== null && Ch(n, e, a, u), (n.flags |= 262144);
  }
  function Xo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Je(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Hs(e) {
    (Bs = e),
      (gn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function be(e) {
    return _m(Bs, e);
  }
  function Yo(e, n) {
    return Bs === null && Hs(e), _m(e, n);
  }
  function _m(e, n) {
    var a = n._currentValue;
    if (((n = { context: n, memoizedValue: a, next: null }), gn === null)) {
      if (e === null) throw Error(s(308));
      (gn = n),
        (e.dependencies = { lanes: 0, firstContext: n }),
        (e.flags |= 524288);
    } else gn = gn.next = n;
    return a;
  }
  var Zn = !1;
  function Rh(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function bh(e, n) {
    (e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function Kn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Vn(e, n, a) {
    var u = e.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (qt & 2) !== 0)) {
      var f = u.pending;
      return (
        f === null ? (n.next = n) : ((n.next = f.next), (f.next = n)),
        (u.pending = n),
        (n = Eo(e)),
        Wg(e, null, a),
        n
      );
    }
    return vo(e, u, n, a), Eo(e);
  }
  function ea(e, n, a) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (a & 4194176) !== 0))
    ) {
      var u = n.lanes;
      (u &= e.pendingLanes), (a |= u), (n.lanes = a), ue(e, a);
    }
  }
  function wh(e, n) {
    var a = e.updateQueue,
      u = e.alternate;
    if (u !== null && ((u = u.updateQueue), a === u)) {
      var f = null,
        g = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var p = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          g === null ? (f = g = p) : (g = g.next = p), (a = a.next);
        } while (a !== null);
        g === null ? (f = g = n) : (g = g.next = n);
      } else f = g = n;
      (a = {
        baseState: u.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: g,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (e.updateQueue = a);
      return;
    }
    (e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = n) : (e.next = n),
      (a.lastBaseUpdate = n);
  }
  var Ah = !1;
  function ia() {
    if (Ah) {
      var e = Dr;
      if (e !== null) throw e;
    }
  }
  function na(e, n, a, u) {
    Ah = !1;
    var f = e.updateQueue;
    Zn = !1;
    var g = f.firstBaseUpdate,
      p = f.lastBaseUpdate,
      S = f.shared.pending;
    if (S !== null) {
      f.shared.pending = null;
      var T = S,
        O = T.next;
      (T.next = null), p === null ? (g = O) : (p.next = O), (p = T);
      var k = e.alternate;
      k !== null &&
        ((k = k.updateQueue),
        (S = k.lastBaseUpdate),
        S !== p &&
          (S === null ? (k.firstBaseUpdate = O) : (S.next = O),
          (k.lastBaseUpdate = T)));
    }
    if (g !== null) {
      var K = f.baseState;
      (p = 0), (k = O = T = null), (S = g);
      do {
        var N = S.lane & -536870913,
          P = N !== S.lane;
        if (P ? (At & N) === N : (u & N) === N) {
          N !== 0 && N === Or && (Ah = !0),
            k !== null &&
              (k = k.next =
                {
                  lane: 0,
                  tag: S.tag,
                  payload: S.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var at = e,
              yt = S;
            N = n;
            var Jt = a;
            switch (yt.tag) {
              case 1:
                if (((at = yt.payload), typeof at == "function")) {
                  K = at.call(Jt, K, N);
                  break t;
                }
                K = at;
                break t;
              case 3:
                at.flags = (at.flags & -65537) | 128;
              case 0:
                if (
                  ((at = yt.payload),
                  (N = typeof at == "function" ? at.call(Jt, K, N) : at),
                  N == null)
                )
                  break t;
                K = q({}, K, N);
                break t;
              case 2:
                Zn = !0;
            }
          }
          (N = S.callback),
            N !== null &&
              ((e.flags |= 64),
              P && (e.flags |= 8192),
              (P = f.callbacks),
              P === null ? (f.callbacks = [N]) : P.push(N));
        } else
          (P = {
            lane: N,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null,
          }),
            k === null ? ((O = k = P), (T = K)) : (k = k.next = P),
            (p |= N);
        if (((S = S.next), S === null)) {
          if (((S = f.shared.pending), S === null)) break;
          (P = S),
            (S = P.next),
            (P.next = null),
            (f.lastBaseUpdate = P),
            (f.shared.pending = null);
        }
      } while (!0);
      k === null && (T = K),
        (f.baseState = T),
        (f.firstBaseUpdate = O),
        (f.lastBaseUpdate = k),
        g === null && (f.shared.lanes = 0),
        ($n |= p),
        (e.lanes = p),
        (e.memoizedState = K);
    }
  }
  function mm(e, n) {
    if (typeof e != "function") throw Error(s(191, e));
    e.call(n);
  }
  function ym(e, n) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) mm(a[e], n);
  }
  function sa(e, n) {
    try {
      var a = n.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var f = u.next;
        a = f;
        do {
          if ((a.tag & e) === e) {
            u = void 0;
            var g = a.create,
              p = a.inst;
            (u = g()), (p.destroy = u);
          }
          a = a.next;
        } while (a !== f);
      }
    } catch (S) {
      kt(n, n.return, S);
    }
  }
  function qn(e, n, a) {
    try {
      var u = n.updateQueue,
        f = u !== null ? u.lastEffect : null;
      if (f !== null) {
        var g = f.next;
        u = g;
        do {
          if ((u.tag & e) === e) {
            var p = u.inst,
              S = p.destroy;
            if (S !== void 0) {
              (p.destroy = void 0), (f = n);
              var T = a;
              try {
                S();
              } catch (O) {
                kt(f, T, O);
              }
            }
          }
          u = u.next;
        } while (u !== g);
      }
    } catch (O) {
      kt(n, n.return, O);
    }
  }
  function pm(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var a = e.stateNode;
      try {
        ym(n, a);
      } catch (u) {
        kt(e, e.return, u);
      }
    }
  }
  function vm(e, n, a) {
    (a.props = ks(e.type, e.memoizedProps)), (a.state = e.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (u) {
      kt(e, n, u);
    }
  }
  function js(e, n) {
    try {
      var a = e.ref;
      if (a !== null) {
        var u = e.stateNode;
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var f = u;
            break;
          default:
            f = u;
        }
        typeof a == "function" ? (e.refCleanup = a(f)) : (a.current = f);
      }
    } catch (g) {
      kt(e, n, g);
    }
  }
  function $e(e, n) {
    var a = e.ref,
      u = e.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (f) {
          kt(e, n, f);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (f) {
          kt(e, n, f);
        }
      else a.current = null;
  }
  function Em(e) {
    var n = e.type,
      a = e.memoizedProps,
      u = e.stateNode;
    try {
      t: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break t;
        case "img":
          a.src ? (u.src = a.src) : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (f) {
      kt(e, e.return, f);
    }
  }
  function Sm(e, n, a) {
    try {
      var u = e.stateNode;
      $v(u, e.type, a, n), (u[Ye] = n);
    } catch (f) {
      kt(e, e.return, f);
    }
  }
  function xm(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
    );
  }
  function Mh(e) {
    t: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || xm(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue t;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Oh(e, n, a) {
    var u = e.tag;
    if (u === 5 || u === 6)
      (e = e.stateNode),
        n
          ? a.nodeType === 8
            ? a.parentNode.insertBefore(e, n)
            : a.insertBefore(e, n)
          : (a.nodeType === 8
              ? ((n = a.parentNode), n.insertBefore(e, a))
              : ((n = a), n.appendChild(e)),
            (a = a._reactRootContainer),
            a != null || n.onclick !== null || (n.onclick = tu));
    else if (u !== 4 && u !== 27 && ((e = e.child), e !== null))
      for (Oh(e, n, a), e = e.sibling; e !== null; )
        Oh(e, n, a), (e = e.sibling);
  }
  function Po(e, n, a) {
    var u = e.tag;
    if (u === 5 || u === 6)
      (e = e.stateNode), n ? a.insertBefore(e, n) : a.appendChild(e);
    else if (u !== 4 && u !== 27 && ((e = e.child), e !== null))
      for (Po(e, n, a), e = e.sibling; e !== null; )
        Po(e, n, a), (e = e.sibling);
  }
  var mn = !1,
    Wt = !1,
    Dh = !1,
    Tm = typeof WeakSet == "function" ? WeakSet : Set,
    fe = null,
    Cm = !1;
  function Mv(e, n) {
    if (((e = e.containerInfo), (lf = au), (e = Pg(e)), Ic(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        t: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var f = u.anchorOffset,
              g = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, g.nodeType;
            } catch {
              a = null;
              break t;
            }
            var p = 0,
              S = -1,
              T = -1,
              O = 0,
              k = 0,
              K = e,
              N = null;
            e: for (;;) {
              for (
                var P;
                K !== a || (f !== 0 && K.nodeType !== 3) || (S = p + f),
                  K !== g || (u !== 0 && K.nodeType !== 3) || (T = p + u),
                  K.nodeType === 3 && (p += K.nodeValue.length),
                  (P = K.firstChild) !== null;

              )
                (N = K), (K = P);
              for (;;) {
                if (K === e) break e;
                if (
                  (N === a && ++O === f && (S = p),
                  N === g && ++k === u && (T = p),
                  (P = K.nextSibling) !== null)
                )
                  break;
                (K = N), (N = K.parentNode);
              }
              K = P;
            }
            a = S === -1 || T === -1 ? null : { start: S, end: T };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      af = { focusedElem: e, selectionRange: a }, au = !1, fe = n;
      fe !== null;

    )
      if (
        ((n = fe), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = n), (fe = e);
      else
        for (; fe !== null; ) {
          switch (((n = fe), (g = n.alternate), (e = n.flags), n.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && g !== null) {
                (e = void 0),
                  (a = n),
                  (f = g.memoizedProps),
                  (g = g.memoizedState),
                  (u = a.stateNode);
                try {
                  var at = ks(a.type, f, a.elementType === a.type);
                  (e = u.getSnapshotBeforeUpdate(at, g)),
                    (u.__reactInternalSnapshotBeforeUpdate = e);
                } catch (yt) {
                  kt(a, a.return, yt);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = n.stateNode.containerInfo), (a = e.nodeType), a === 9)
                )
                  hf(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      hf(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (((e = n.sibling), e !== null)) {
            (e.return = n.return), (fe = e);
            break;
          }
          fe = n.return;
        }
    return (at = Cm), (Cm = !1), at;
  }
  function Rm(e, n, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        pn(e, a), u & 4 && sa(5, a);
        break;
      case 1:
        if ((pn(e, a), u & 4))
          if (((e = a.stateNode), n === null))
            try {
              e.componentDidMount();
            } catch (S) {
              kt(a, a.return, S);
            }
          else {
            var f = ks(a.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              e.componentDidUpdate(f, n, e.__reactInternalSnapshotBeforeUpdate);
            } catch (S) {
              kt(a, a.return, S);
            }
          }
        u & 64 && pm(a), u & 512 && js(a, a.return);
        break;
      case 3:
        if ((pn(e, a), u & 64 && ((u = a.updateQueue), u !== null))) {
          if (((e = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            ym(u, e);
          } catch (S) {
            kt(a, a.return, S);
          }
        }
        break;
      case 26:
        pn(e, a), u & 512 && js(a, a.return);
        break;
      case 27:
      case 5:
        pn(e, a), n === null && u & 4 && Em(a), u & 512 && js(a, a.return);
        break;
      case 12:
        pn(e, a);
        break;
      case 13:
        pn(e, a), u & 4 && Am(e, a);
        break;
      case 22:
        if (((f = a.memoizedState !== null || mn), !f)) {
          n = (n !== null && n.memoizedState !== null) || Wt;
          var g = mn,
            p = Wt;
          (mn = f),
            (Wt = n) && !p ? Wn(e, a, (a.subtreeFlags & 8772) !== 0) : pn(e, a),
            (mn = g),
            (Wt = p);
        }
        u & 512 &&
          (a.memoizedProps.mode === "manual"
            ? js(a, a.return)
            : $e(a, a.return));
        break;
      default:
        pn(e, a);
    }
  }
  function bm(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), bm(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((n = e.stateNode), n !== null && yc(n)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var ne = null,
    ti = !1;
  function yn(e, n, a) {
    for (a = a.child; a !== null; ) wm(e, n, a), (a = a.sibling);
  }
  function wm(e, n, a) {
    if (xe && typeof xe.onCommitFiberUnmount == "function")
      try {
        xe.onCommitFiberUnmount(bs, a);
      } catch {}
    switch (a.tag) {
      case 26:
        Wt || $e(a, n),
          yn(e, n, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        Wt || $e(a, n);
        var u = ne,
          f = ti;
        for (
          ne = a.stateNode, yn(e, n, a), a = a.stateNode, n = a.attributes;
          n.length;

        )
          a.removeAttributeNode(n[0]);
        yc(a), (ne = u), (ti = f);
        break;
      case 5:
        Wt || $e(a, n);
      case 6:
        f = ne;
        var g = ti;
        if (((ne = null), yn(e, n, a), (ne = f), (ti = g), ne !== null))
          if (ti)
            try {
              (e = ne),
                (u = a.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(u)
                  : e.removeChild(u);
            } catch (p) {
              kt(a, n, p);
            }
          else
            try {
              ne.removeChild(a.stateNode);
            } catch (p) {
              kt(a, n, p);
            }
        break;
      case 18:
        ne !== null &&
          (ti
            ? ((n = ne),
              (a = a.stateNode),
              n.nodeType === 8
                ? cf(n.parentNode, a)
                : n.nodeType === 1 && cf(n, a),
              xa(n))
            : cf(ne, a.stateNode));
        break;
      case 4:
        (u = ne),
          (f = ti),
          (ne = a.stateNode.containerInfo),
          (ti = !0),
          yn(e, n, a),
          (ne = u),
          (ti = f);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Wt || qn(2, a, n), Wt || qn(4, a, n), yn(e, n, a);
        break;
      case 1:
        Wt ||
          ($e(a, n),
          (u = a.stateNode),
          typeof u.componentWillUnmount == "function" && vm(a, n, u)),
          yn(e, n, a);
        break;
      case 21:
        yn(e, n, a);
        break;
      case 22:
        Wt || $e(a, n),
          (Wt = (u = Wt) || a.memoizedState !== null),
          yn(e, n, a),
          (Wt = u);
        break;
      default:
        yn(e, n, a);
    }
  }
  function Am(e, n) {
    if (
      n.memoizedState === null &&
      ((e = n.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        xa(e);
      } catch (a) {
        kt(n, n.return, a);
      }
  }
  function Ov(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Tm()), n;
      case 22:
        return (
          (e = e.stateNode),
          (n = e._retryCache),
          n === null && (n = e._retryCache = new Tm()),
          n
        );
      default:
        throw Error(s(435, e.tag));
    }
  }
  function Lh(e, n) {
    var a = Ov(e);
    n.forEach(function (u) {
      var f = Bv.bind(null, e, u);
      a.has(u) || (a.add(u), u.then(f, f));
    });
  }
  function gi(e, n) {
    var a = n.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var f = a[u],
          g = e,
          p = n,
          S = p;
        t: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
            case 5:
              (ne = S.stateNode), (ti = !1);
              break t;
            case 3:
              (ne = S.stateNode.containerInfo), (ti = !0);
              break t;
            case 4:
              (ne = S.stateNode.containerInfo), (ti = !0);
              break t;
          }
          S = S.return;
        }
        if (ne === null) throw Error(s(160));
        wm(g, p, f),
          (ne = null),
          (ti = !1),
          (g = f.alternate),
          g !== null && (g.return = null),
          (f.return = null);
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; ) Mm(n, e), (n = n.sibling);
  }
  var Di = null;
  function Mm(e, n) {
    var a = e.alternate,
      u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        gi(n, e),
          _i(e),
          u & 4 && (qn(3, e, e.return), sa(3, e), qn(5, e, e.return));
        break;
      case 1:
        gi(n, e),
          _i(e),
          u & 512 && (Wt || a === null || $e(a, a.return)),
          u & 64 &&
            mn &&
            ((e = e.updateQueue),
            e !== null &&
              ((u = e.callbacks),
              u !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? u : a.concat(u)))));
        break;
      case 26:
        var f = Di;
        if (
          (gi(n, e),
          _i(e),
          u & 512 && (Wt || a === null || $e(a, a.return)),
          u & 4)
        ) {
          var g = a !== null ? a.memoizedState : null;
          if (((u = e.memoizedState), a === null))
            if (u === null)
              if (e.stateNode === null) {
                t: {
                  (u = e.type),
                    (a = e.memoizedProps),
                    (f = f.ownerDocument || f);
                  e: switch (u) {
                    case "title":
                      (g = f.getElementsByTagName("title")[0]),
                        (!g ||
                          g[Ol] ||
                          g[Re] ||
                          g.namespaceURI === "http://www.w3.org/2000/svg" ||
                          g.hasAttribute("itemprop")) &&
                          ((g = f.createElement(u)),
                          f.head.insertBefore(
                            g,
                            f.querySelector("head > title"),
                          )),
                        Ee(g, u, a),
                        (g[Re] = e),
                        ce(g),
                        (u = g);
                      break t;
                    case "link":
                      var p = E0("link", "href", f).get(u + (a.href || ""));
                      if (p) {
                        for (var S = 0; S < p.length; S++)
                          if (
                            ((g = p[S]),
                            g.getAttribute("href") ===
                              (a.href == null ? null : a.href) &&
                              g.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              g.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              g.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            p.splice(S, 1);
                            break e;
                          }
                      }
                      (g = f.createElement(u)),
                        Ee(g, u, a),
                        f.head.appendChild(g);
                      break;
                    case "meta":
                      if (
                        (p = E0("meta", "content", f).get(
                          u + (a.content || ""),
                        ))
                      ) {
                        for (S = 0; S < p.length; S++)
                          if (
                            ((g = p[S]),
                            g.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              g.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              g.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              g.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              g.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            p.splice(S, 1);
                            break e;
                          }
                      }
                      (g = f.createElement(u)),
                        Ee(g, u, a),
                        f.head.appendChild(g);
                      break;
                    default:
                      throw Error(s(468, u));
                  }
                  (g[Re] = e), ce(g), (u = g);
                }
                e.stateNode = u;
              } else S0(f, e.type, e.stateNode);
            else e.stateNode = v0(f, u, e.memoizedProps);
          else
            g !== u
              ? (g === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : g.count--,
                u === null
                  ? S0(f, e.type, e.stateNode)
                  : v0(f, u, e.memoizedProps))
              : u === null &&
                e.stateNode !== null &&
                Sm(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        if (u & 4 && e.alternate === null) {
          (f = e.stateNode), (g = e.memoizedProps);
          try {
            for (var T = f.firstChild; T; ) {
              var O = T.nextSibling,
                k = T.nodeName;
              T[Ol] ||
                k === "HEAD" ||
                k === "BODY" ||
                k === "SCRIPT" ||
                k === "STYLE" ||
                (k === "LINK" && T.rel.toLowerCase() === "stylesheet") ||
                f.removeChild(T),
                (T = O);
            }
            for (var K = e.type, N = f.attributes; N.length; )
              f.removeAttributeNode(N[0]);
            Ee(f, K, g), (f[Re] = e), (f[Ye] = g);
          } catch (at) {
            kt(e, e.return, at);
          }
        }
      case 5:
        if (
          (gi(n, e),
          _i(e),
          u & 512 && (Wt || a === null || $e(a, a.return)),
          e.flags & 32)
        ) {
          f = e.stateNode;
          try {
            pr(f, "");
          } catch (at) {
            kt(e, e.return, at);
          }
        }
        u & 4 &&
          e.stateNode != null &&
          ((f = e.memoizedProps), Sm(e, f, a !== null ? a.memoizedProps : f)),
          u & 1024 && (Dh = !0);
        break;
      case 6:
        if ((gi(n, e), _i(e), u & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (u = e.memoizedProps), (a = e.stateNode);
          try {
            a.nodeValue = u;
          } catch (at) {
            kt(e, e.return, at);
          }
        }
        break;
      case 3:
        if (
          ((su = null),
          (f = Di),
          (Di = iu(n.containerInfo)),
          gi(n, e),
          (Di = f),
          _i(e),
          u & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            xa(n.containerInfo);
          } catch (at) {
            kt(e, e.return, at);
          }
        Dh && ((Dh = !1), Om(e));
        break;
      case 4:
        (u = Di),
          (Di = iu(e.stateNode.containerInfo)),
          gi(n, e),
          _i(e),
          (Di = u);
        break;
      case 12:
        gi(n, e), _i(e);
        break;
      case 13:
        gi(n, e),
          _i(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Ph = Pt()),
          u & 4 &&
            ((u = e.updateQueue),
            u !== null && ((e.updateQueue = null), Lh(e, u)));
        break;
      case 22:
        if (
          (u & 512 && (Wt || a === null || $e(a, a.return)),
          (T = e.memoizedState !== null),
          (O = a !== null && a.memoizedState !== null),
          (k = mn),
          (K = Wt),
          (mn = k || T),
          (Wt = K || O),
          gi(n, e),
          (Wt = K),
          (mn = k),
          _i(e),
          (n = e.stateNode),
          (n._current = e),
          (n._visibility &= -3),
          (n._visibility |= n._pendingVisibility & 2),
          u & 8192 &&
            ((n._visibility = T ? n._visibility & -2 : n._visibility | 1),
            T && ((n = mn || Wt), a === null || O || n || Nr(e)),
            e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
        )
          t: for (a = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26 || n.tag === 27) {
              if (a === null) {
                O = a = n;
                try {
                  if (((f = O.stateNode), T))
                    (g = f.style),
                      typeof g.setProperty == "function"
                        ? g.setProperty("display", "none", "important")
                        : (g.display = "none");
                  else {
                    (p = O.stateNode), (S = O.memoizedProps.style);
                    var P =
                      S != null && S.hasOwnProperty("display")
                        ? S.display
                        : null;
                    p.style.display =
                      P == null || typeof P == "boolean" ? "" : ("" + P).trim();
                  }
                } catch (at) {
                  kt(O, O.return, at);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                O = n;
                try {
                  O.stateNode.nodeValue = T ? "" : O.memoizedProps;
                } catch (at) {
                  kt(O, O.return, at);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) ||
                n.memoizedState === null ||
                n === e) &&
              n.child !== null
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break t;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break t;
              a === n && (a = null), (n = n.return);
            }
            a === n && (a = null),
              (n.sibling.return = n.return),
              (n = n.sibling);
          }
        u & 4 &&
          ((u = e.updateQueue),
          u !== null &&
            ((a = u.retryQueue),
            a !== null && ((u.retryQueue = null), Lh(e, a))));
        break;
      case 19:
        gi(n, e),
          _i(e),
          u & 4 &&
            ((u = e.updateQueue),
            u !== null && ((e.updateQueue = null), Lh(e, u)));
        break;
      case 21:
        break;
      default:
        gi(n, e), _i(e);
    }
  }
  function _i(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        if (e.tag !== 27) {
          t: {
            for (var a = e.return; a !== null; ) {
              if (xm(a)) {
                var u = a;
                break t;
              }
              a = a.return;
            }
            throw Error(s(160));
          }
          switch (u.tag) {
            case 27:
              var f = u.stateNode,
                g = Mh(e);
              Po(e, g, f);
              break;
            case 5:
              var p = u.stateNode;
              u.flags & 32 && (pr(p, ""), (u.flags &= -33));
              var S = Mh(e);
              Po(e, S, p);
              break;
            case 3:
            case 4:
              var T = u.stateNode.containerInfo,
                O = Mh(e);
              Oh(e, O, T);
              break;
            default:
              throw Error(s(161));
          }
        }
      } catch (k) {
        kt(e, e.return, k);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Om(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Om(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function pn(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) Rm(e, n.alternate, n), (n = n.sibling);
  }
  function Nr(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          qn(4, n, n.return), Nr(n);
          break;
        case 1:
          $e(n, n.return);
          var a = n.stateNode;
          typeof a.componentWillUnmount == "function" && vm(n, n.return, a),
            Nr(n);
          break;
        case 26:
        case 27:
        case 5:
          $e(n, n.return), Nr(n);
          break;
        case 22:
          $e(n, n.return), n.memoizedState === null && Nr(n);
          break;
        default:
          Nr(n);
      }
      e = e.sibling;
    }
  }
  function Wn(e, n, a) {
    for (a = a && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var u = n.alternate,
        f = e,
        g = n,
        p = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          Wn(f, g, a), sa(4, g);
          break;
        case 1:
          if (
            (Wn(f, g, a),
            (u = g),
            (f = u.stateNode),
            typeof f.componentDidMount == "function")
          )
            try {
              f.componentDidMount();
            } catch (O) {
              kt(u, u.return, O);
            }
          if (((u = g), (f = u.updateQueue), f !== null)) {
            var S = u.stateNode;
            try {
              var T = f.shared.hiddenCallbacks;
              if (T !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < T.length; f++)
                  mm(T[f], S);
            } catch (O) {
              kt(u, u.return, O);
            }
          }
          a && p & 64 && pm(g), js(g, g.return);
          break;
        case 26:
        case 27:
        case 5:
          Wn(f, g, a), a && u === null && p & 4 && Em(g), js(g, g.return);
          break;
        case 12:
          Wn(f, g, a);
          break;
        case 13:
          Wn(f, g, a), a && p & 4 && Am(f, g);
          break;
        case 22:
          g.memoizedState === null && Wn(f, g, a), js(g, g.return);
          break;
        default:
          Wn(f, g, a);
      }
      n = n.sibling;
    }
  }
  function Ih(e, n) {
    var a = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (e = n.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && Vl(a));
  }
  function zh(e, n) {
    (e = null),
      n.alternate !== null && (e = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== e && (n.refCount++, e != null && Vl(e));
  }
  function Qn(e, n, a, u) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) Dm(e, n, a, u), (n = n.sibling);
  }
  function Dm(e, n, a, u) {
    var f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Qn(e, n, a, u), f & 2048 && sa(9, n);
        break;
      case 3:
        Qn(e, n, a, u),
          f & 2048 &&
            ((e = null),
            n.alternate !== null && (e = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== e && (n.refCount++, e != null && Vl(e)));
        break;
      case 12:
        if (f & 2048) {
          Qn(e, n, a, u), (e = n.stateNode);
          try {
            var g = n.memoizedProps,
              p = g.id,
              S = g.onPostCommit;
            typeof S == "function" &&
              S(
                p,
                n.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (T) {
            kt(n, n.return, T);
          }
        } else Qn(e, n, a, u);
        break;
      case 23:
        break;
      case 22:
        (g = n.stateNode),
          n.memoizedState !== null
            ? g._visibility & 4
              ? Qn(e, n, a, u)
              : ra(e, n)
            : g._visibility & 4
              ? Qn(e, n, a, u)
              : ((g._visibility |= 4),
                Gr(e, n, a, u, (n.subtreeFlags & 10256) !== 0)),
          f & 2048 && Ih(n.alternate, n);
        break;
      case 24:
        Qn(e, n, a, u), f & 2048 && zh(n.alternate, n);
        break;
      default:
        Qn(e, n, a, u);
    }
  }
  function Gr(e, n, a, u, f) {
    for (f = f && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var g = e,
        p = n,
        S = a,
        T = u,
        O = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          Gr(g, p, S, T, f), sa(8, p);
          break;
        case 23:
          break;
        case 22:
          var k = p.stateNode;
          p.memoizedState !== null
            ? k._visibility & 4
              ? Gr(g, p, S, T, f)
              : ra(g, p)
            : ((k._visibility |= 4), Gr(g, p, S, T, f)),
            f && O & 2048 && Ih(p.alternate, p);
          break;
        case 24:
          Gr(g, p, S, T, f), f && O & 2048 && zh(p.alternate, p);
          break;
        default:
          Gr(g, p, S, T, f);
      }
      n = n.sibling;
    }
  }
  function ra(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var a = e,
          u = n,
          f = u.flags;
        switch (u.tag) {
          case 22:
            ra(a, u), f & 2048 && Ih(u.alternate, u);
            break;
          case 24:
            ra(a, u), f & 2048 && zh(u.alternate, u);
            break;
          default:
            ra(a, u);
        }
        n = n.sibling;
      }
  }
  var la = 8192;
  function Fr(e) {
    if (e.subtreeFlags & la)
      for (e = e.child; e !== null; ) Lm(e), (e = e.sibling);
  }
  function Lm(e) {
    switch (e.tag) {
      case 26:
        Fr(e),
          e.flags & la &&
            e.memoizedState !== null &&
            pE(Di, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Fr(e);
        break;
      case 3:
      case 4:
        var n = Di;
        (Di = iu(e.stateNode.containerInfo)), Fr(e), (Di = n);
        break;
      case 22:
        e.memoizedState === null &&
          ((n = e.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = la), (la = 16777216), Fr(e), (la = n))
            : Fr(e));
        break;
      default:
        Fr(e);
    }
  }
  function Im(e) {
    var n = e.alternate;
    if (n !== null && ((e = n.child), e !== null)) {
      n.child = null;
      do (n = e.sibling), (e.sibling = null), (e = n);
      while (e !== null);
    }
  }
  function aa(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var u = n[a];
          (fe = u), Nm(u, e);
        }
      Im(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) zm(e), (e = e.sibling);
  }
  function zm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        aa(e), e.flags & 2048 && qn(9, e, e.return);
        break;
      case 3:
        aa(e);
        break;
      case 12:
        aa(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null &&
        n._visibility & 4 &&
        (e.return === null || e.return.tag !== 13)
          ? ((n._visibility &= -5), ko(e))
          : aa(e);
        break;
      default:
        aa(e);
    }
  }
  function ko(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var u = n[a];
          (fe = u), Nm(u, e);
        }
      Im(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((n = e), n.tag)) {
        case 0:
        case 11:
        case 15:
          qn(8, n, n.return), ko(n);
          break;
        case 22:
          (a = n.stateNode),
            a._visibility & 4 && ((a._visibility &= -5), ko(n));
          break;
        default:
          ko(n);
      }
      e = e.sibling;
    }
  }
  function Nm(e, n) {
    for (; fe !== null; ) {
      var a = fe;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          qn(8, a, n);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Vl(a.memoizedState.cache);
      }
      if (((u = a.child), u !== null)) (u.return = a), (fe = u);
      else
        t: for (a = e; fe !== null; ) {
          u = fe;
          var f = u.sibling,
            g = u.return;
          if ((bm(u), u === a)) {
            fe = null;
            break t;
          }
          if (f !== null) {
            (f.return = g), (fe = f);
            break t;
          }
          fe = g;
        }
    }
  }
  function Dv(e, n, a, u) {
    (this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function mi(e, n, a, u) {
    return new Dv(e, n, a, u);
  }
  function Nh(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Jn(e, n) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = mi(e.tag, n, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = n),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 31457280),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (a.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function Gm(e, n) {
    e.flags &= 31457282;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = n),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (n = a.dependencies),
          (e.dependencies =
            n === null
              ? null
              : { lanes: n.lanes, firstContext: n.firstContext })),
      e
    );
  }
  function Bo(e, n, a, u, f, g) {
    var p = 0;
    if (((u = e), typeof e == "function")) Nh(e) && (p = 1);
    else if (typeof e == "string")
      p = mE(e, a, Le.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      t: switch (e) {
        case d:
          return Zs(a.children, f, g, n);
        case _:
          (p = 8), (f |= 24);
          break;
        case m:
          return (
            (e = mi(12, a, n, f | 2)), (e.elementType = m), (e.lanes = g), e
          );
        case R:
          return (e = mi(13, a, n, f)), (e.elementType = R), (e.lanes = g), e;
        case b:
          return (e = mi(19, a, n, f)), (e.elementType = b), (e.lanes = g), e;
        case G:
          return Fm(a, f, g, n);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case y:
              case E:
                p = 10;
                break t;
              case v:
                p = 9;
                break t;
              case x:
                p = 11;
                break t;
              case w:
                p = 14;
                break t;
              case M:
                (p = 16), (u = null);
                break t;
            }
          (p = 29),
            (a = Error(s(130, e === null ? "null" : typeof e, ""))),
            (u = null);
      }
    return (
      (n = mi(p, a, n, f)), (n.elementType = e), (n.type = u), (n.lanes = g), n
    );
  }
  function Zs(e, n, a, u) {
    return (e = mi(7, e, u, n)), (e.lanes = a), e;
  }
  function Fm(e, n, a, u) {
    (e = mi(22, e, u, n)), (e.elementType = G), (e.lanes = a);
    var f = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var g = f._current;
        if (g === null) throw Error(s(456));
        if ((f._pendingVisibility & 2) === 0) {
          var p = Yn(g, 2);
          p !== null && ((f._pendingVisibility |= 2), Ge(p, g, 2));
        }
      },
      attach: function () {
        var g = f._current;
        if (g === null) throw Error(s(456));
        if ((f._pendingVisibility & 2) !== 0) {
          var p = Yn(g, 2);
          p !== null && ((f._pendingVisibility &= -3), Ge(p, g, 2));
        }
      },
    };
    return (e.stateNode = f), e;
  }
  function Gh(e, n, a) {
    return (e = mi(6, e, null, n)), (e.lanes = a), e;
  }
  function Fh(e, n, a) {
    return (
      (n = mi(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = a),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  function vn(e) {
    e.flags |= 4;
  }
  function Um(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !x0(n))) {
      if (
        ((n = di.current),
        n !== null &&
          ((At & 4194176) === At
            ? Zi !== null
            : ((At & 62914560) !== At && (At & 536870912) === 0) || n !== Zi))
      )
        throw ((jl = kc), e_);
      e.flags |= 8192;
    }
  }
  function Ho(e, n) {
    n !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((n = e.tag !== 22 ? Qe() : 536870912), (e.lanes |= n), (Xr |= n));
  }
  function oa(e, n) {
    if (!Ot)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), (n = n.sibling);
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), (a = a.sibling);
          u === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function Vt(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      u = 0;
    if (n)
      for (var f = e.child; f !== null; )
        (a |= f.lanes | f.childLanes),
          (u |= f.subtreeFlags & 31457280),
          (u |= f.flags & 31457280),
          (f.return = e),
          (f = f.sibling);
    else
      for (f = e.child; f !== null; )
        (a |= f.lanes | f.childLanes),
          (u |= f.subtreeFlags),
          (u |= f.flags),
          (f.return = e),
          (f = f.sibling);
    return (e.subtreeFlags |= u), (e.childLanes = a), n;
  }
  function Lv(e, n, a) {
    var u = n.pendingProps;
    switch ((Yc(n), n.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Vt(n), null;
      case 1:
        return Vt(n), null;
      case 3:
        return (
          (a = n.stateNode),
          (u = null),
          e !== null && (u = e.memoizedState.cache),
          n.memoizedState.cache !== u && (n.flags |= 2048),
          _n(le),
          ye(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (Pl(n)
              ? vn(n)
              : e === null ||
                (e.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), Oi !== null && (jh(Oi), (Oi = null)))),
          Vt(n),
          null
        );
      case 26:
        return (
          (a = n.memoizedState),
          e === null
            ? (vn(n),
              a !== null ? (Vt(n), Um(n, a)) : (Vt(n), (n.flags &= -16777217)))
            : a
              ? a !== e.memoizedState
                ? (vn(n), Vt(n), Um(n, a))
                : (Vt(n), (n.flags &= -16777217))
              : (e.memoizedProps !== u && vn(n), Vt(n), (n.flags &= -16777217)),
          null
        );
      case 27:
        Ri(n), (a = qe.current);
        var f = n.type;
        if (e !== null && n.stateNode != null) e.memoizedProps !== u && vn(n);
        else {
          if (!u) {
            if (n.stateNode === null) throw Error(s(166));
            return Vt(n), null;
          }
          (e = Le.current),
            Pl(n) ? $g(n) : ((e = g0(f, u, a)), (n.stateNode = e), vn(n));
        }
        return Vt(n), null;
      case 5:
        if ((Ri(n), (a = n.type), e !== null && n.stateNode != null))
          e.memoizedProps !== u && vn(n);
        else {
          if (!u) {
            if (n.stateNode === null) throw Error(s(166));
            return Vt(n), null;
          }
          if (((e = Le.current), Pl(n))) $g(n);
          else {
            switch (((f = eu(qe.current)), e)) {
              case 1:
                e = f.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                e = f.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    e = f.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    e = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a,
                    );
                    break;
                  case "script":
                    (e = f.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof u.is == "string"
                        ? f.createElement("select", { is: u.is })
                        : f.createElement("select")),
                      u.multiple
                        ? (e.multiple = !0)
                        : u.size && (e.size = u.size);
                    break;
                  default:
                    e =
                      typeof u.is == "string"
                        ? f.createElement(a, { is: u.is })
                        : f.createElement(a);
                }
            }
            (e[Re] = n), (e[Ye] = u);
            t: for (f = n.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) e.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                (f.child.return = f), (f = f.child);
                continue;
              }
              if (f === n) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === n) break t;
                f = f.return;
              }
              (f.sibling.return = f.return), (f = f.sibling);
            }
            n.stateNode = e;
            t: switch ((Ee(e, a, u), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!u.autoFocus;
                break t;
              case "img":
                e = !0;
                break t;
              default:
                e = !1;
            }
            e && vn(n);
          }
        }
        return Vt(n), (n.flags &= -16777217), null;
      case 6:
        if (e && n.stateNode != null) e.memoizedProps !== u && vn(n);
        else {
          if (typeof u != "string" && n.stateNode === null) throw Error(s(166));
          if (((e = qe.current), Pl(n))) {
            if (
              ((e = n.stateNode),
              (a = n.memoizedProps),
              (u = null),
              (f = Ne),
              f !== null)
            )
              switch (f.tag) {
                case 27:
                case 5:
                  u = f.memoizedProps;
              }
            (e[Re] = n),
              (e = !!(
                e.nodeValue === a ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                o0(e.nodeValue, a)
              )),
              e || Gs(n);
          } else (e = eu(e).createTextNode(u)), (e[Re] = n), (n.stateNode = e);
        }
        return Vt(n), null;
      case 13:
        if (
          ((u = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((f = Pl(n)), u !== null && u.dehydrated !== null)) {
            if (e === null) {
              if (!f) throw Error(s(318));
              if (
                ((f = n.memoizedState),
                (f = f !== null ? f.dehydrated : null),
                !f)
              )
                throw Error(s(317));
              f[Re] = n;
            } else
              kl(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4);
            Vt(n), (f = !1);
          } else Oi !== null && (jh(Oi), (Oi = null)), (f = !0);
          if (!f) return n.flags & 256 ? (hn(n), n) : (hn(n), null);
        }
        if ((hn(n), (n.flags & 128) !== 0)) return (n.lanes = a), n;
        if (
          ((a = u !== null), (e = e !== null && e.memoizedState !== null), a)
        ) {
          (u = n.child),
            (f = null),
            u.alternate !== null &&
              u.alternate.memoizedState !== null &&
              u.alternate.memoizedState.cachePool !== null &&
              (f = u.alternate.memoizedState.cachePool.pool);
          var g = null;
          u.memoizedState !== null &&
            u.memoizedState.cachePool !== null &&
            (g = u.memoizedState.cachePool.pool),
            g !== f && (u.flags |= 2048);
        }
        return (
          a !== e && a && (n.child.flags |= 8192),
          Ho(n, n.updateQueue),
          Vt(n),
          null
        );
      case 4:
        return ye(), e === null && nf(n.stateNode.containerInfo), Vt(n), null;
      case 10:
        return _n(n.type), Vt(n), null;
      case 19:
        if ((Ut(re), (f = n.memoizedState), f === null)) return Vt(n), null;
        if (((u = (n.flags & 128) !== 0), (g = f.rendering), g === null))
          if (u) oa(f, !1);
          else {
            if (Qt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = n.child; e !== null; ) {
                if (((g = wo(e)), g !== null)) {
                  for (
                    n.flags |= 128,
                      oa(f, !1),
                      e = g.updateQueue,
                      n.updateQueue = e,
                      Ho(n, e),
                      n.subtreeFlags = 0,
                      e = a,
                      a = n.child;
                    a !== null;

                  )
                    Gm(a, e), (a = a.sibling);
                  return vt(re, (re.current & 1) | 2), n.child;
                }
                e = e.sibling;
              }
            f.tail !== null &&
              Pt() > jo &&
              ((n.flags |= 128), (u = !0), oa(f, !1), (n.lanes = 4194304));
          }
        else {
          if (!u)
            if (((e = wo(g)), e !== null)) {
              if (
                ((n.flags |= 128),
                (u = !0),
                (e = e.updateQueue),
                (n.updateQueue = e),
                Ho(n, e),
                oa(f, !0),
                f.tail === null &&
                  f.tailMode === "hidden" &&
                  !g.alternate &&
                  !Ot)
              )
                return Vt(n), null;
            } else
              2 * Pt() - f.renderingStartTime > jo &&
                a !== 536870912 &&
                ((n.flags |= 128), (u = !0), oa(f, !1), (n.lanes = 4194304));
          f.isBackwards
            ? ((g.sibling = n.child), (n.child = g))
            : ((e = f.last),
              e !== null ? (e.sibling = g) : (n.child = g),
              (f.last = g));
        }
        return f.tail !== null
          ? ((n = f.tail),
            (f.rendering = n),
            (f.tail = n.sibling),
            (f.renderingStartTime = Pt()),
            (n.sibling = null),
            (e = re.current),
            vt(re, u ? (e & 1) | 2 : e & 1),
            n)
          : (Vt(n), null);
      case 22:
      case 23:
        return (
          hn(n),
          Hc(),
          (u = n.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== u && (n.flags |= 8192)
            : u && (n.flags |= 8192),
          u
            ? (a & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              (Vt(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : Vt(n),
          (a = n.updateQueue),
          a !== null && Ho(n, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (u = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (u = n.memoizedState.cachePool.pool),
          u !== a && (n.flags |= 2048),
          e !== null && Ut(Us),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          n.memoizedState.cache !== a && (n.flags |= 2048),
          _n(le),
          Vt(n),
          null
        );
      case 25:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function Iv(e, n) {
    switch ((Yc(n), n.tag)) {
      case 1:
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          _n(le),
          ye(),
          (e = n.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((n.flags = (e & -65537) | 128), n)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Ri(n), null;
      case 13:
        if (
          (hn(n), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(s(340));
          kl();
        }
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return Ut(re), null;
      case 4:
        return ye(), null;
      case 10:
        return _n(n.type), null;
      case 22:
      case 23:
        return (
          hn(n),
          Hc(),
          e !== null && Ut(Us),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 24:
        return _n(le), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Xm(e, n) {
    switch ((Yc(n), n.tag)) {
      case 3:
        _n(le), ye();
        break;
      case 26:
      case 27:
      case 5:
        Ri(n);
        break;
      case 4:
        ye();
        break;
      case 13:
        hn(n);
        break;
      case 19:
        Ut(re);
        break;
      case 10:
        _n(n.type);
        break;
      case 22:
      case 23:
        hn(n), Hc(), e !== null && Ut(Us);
        break;
      case 24:
        _n(le);
    }
  }
  var zv = {
      getCacheForType: function (e) {
        var n = be(le),
          a = n.data.get(e);
        return a === void 0 && ((a = e()), n.data.set(e, a)), a;
      },
    },
    Nv = typeof WeakMap == "function" ? WeakMap : Map,
    qt = 0,
    Bt = null,
    Rt = null,
    At = 0,
    Ht = 0,
    ei = null,
    En = !1,
    Ur = !1,
    Uh = !1,
    Sn = 0,
    Qt = 0,
    $n = 0,
    Ks = 0,
    Xh = 0,
    yi = 0,
    Xr = 0,
    ua = null,
    Vi = null,
    Yh = !1,
    Ph = 0,
    jo = 1 / 0,
    Zo = null,
    ts = null,
    Ko = !1,
    Vs = null,
    ca = 0,
    kh = 0,
    Bh = null,
    ha = 0,
    Hh = null;
  function ii() {
    if ((qt & 2) !== 0 && At !== 0) return At & -At;
    if (F.T !== null) {
      var e = Or;
      return e !== 0 ? e : Jh();
    }
    return ro();
  }
  function Ym() {
    yi === 0 && (yi = (At & 536870912) === 0 || Ot ? Ie() : 536870912);
    var e = di.current;
    return e !== null && (e.flags |= 32), yi;
  }
  function Ge(e, n, a) {
    ((e === Bt && Ht === 2) || e.cancelPendingCommit !== null) &&
      (Yr(e, 0), xn(e, At, yi, !1)),
      ze(e, a),
      ((qt & 2) === 0 || e !== Bt) &&
        (e === Bt &&
          ((qt & 2) === 0 && (Ks |= a), Qt === 4 && xn(e, At, yi, !1)),
        qi(e));
  }
  function Pm(e, n, a) {
    if ((qt & 6) !== 0) throw Error(s(327));
    var u = (!a && (n & 60) === 0 && (n & e.expiredLanes) === 0) || oe(e, n),
      f = u ? Uv(e, n) : Vh(e, n, !0),
      g = u;
    do {
      if (f === 0) {
        Ur && !u && xn(e, n, 0, !1);
        break;
      } else if (f === 6) xn(e, n, 0, !En);
      else {
        if (((a = e.current.alternate), g && !Gv(a))) {
          (f = Vh(e, n, !1)), (g = !1);
          continue;
        }
        if (f === 2) {
          if (((g = n), e.errorRecoveryDisabledLanes & g)) var p = 0;
          else
            (p = e.pendingLanes & -536870913),
              (p = p !== 0 ? p : p & 536870912 ? 536870912 : 0);
          if (p !== 0) {
            n = p;
            t: {
              var S = e;
              f = ua;
              var T = S.current.memoizedState.isDehydrated;
              if ((T && (Yr(S, p).flags |= 256), (p = Vh(S, p, !1)), p !== 2)) {
                if (Uh && !T) {
                  (S.errorRecoveryDisabledLanes |= g), (Ks |= g), (f = 4);
                  break t;
                }
                (g = Vi), (Vi = f), g !== null && jh(g);
              }
              f = p;
            }
            if (((g = !1), f !== 2)) continue;
          }
        }
        if (f === 1) {
          Yr(e, 0), xn(e, n, 0, !0);
          break;
        }
        t: {
          switch (((u = e), f)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((n & 4194176) === n) {
                xn(u, n, yi, !En);
                break t;
              }
              break;
            case 2:
              Vi = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if (
            ((u.finishedWork = a),
            (u.finishedLanes = n),
            (n & 62914560) === n && ((g = Ph + 300 - Pt()), 10 < g))
          ) {
            if ((xn(u, n, yi, !En), As(u, 0) !== 0)) break t;
            u.timeoutHandle = h0(
              km.bind(null, u, a, Vi, Zo, Yh, n, yi, Ks, Xr, En, 2, -0, 0),
              g,
            );
            break t;
          }
          km(u, a, Vi, Zo, Yh, n, yi, Ks, Xr, En, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    qi(e);
  }
  function jh(e) {
    Vi === null ? (Vi = e) : Vi.push.apply(Vi, e);
  }
  function km(e, n, a, u, f, g, p, S, T, O, k, K, N) {
    var P = n.subtreeFlags;
    if (
      (P & 8192 || (P & 16785408) === 16785408) &&
      ((ya = { stylesheets: null, count: 0, unsuspend: yE }),
      Lm(n),
      (n = vE()),
      n !== null)
    ) {
      (e.cancelPendingCommit = n(qm.bind(null, e, a, u, f, p, S, T, 1, K, N))),
        xn(e, g, p, !O);
      return;
    }
    qm(e, a, u, f, p, S, T, k, K, N);
  }
  function Gv(e) {
    for (var n = e; ; ) {
      var a = n.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        n.flags & 16384 &&
        ((a = n.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var u = 0; u < a.length; u++) {
          var f = a[u],
            g = f.getSnapshot;
          f = f.value;
          try {
            if (!Je(g(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = n.child), n.subtreeFlags & 16384 && a !== null))
        (a.return = n), (n = a);
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function xn(e, n, a, u) {
    (n &= ~Xh),
      (n &= ~Ks),
      (e.suspendedLanes |= n),
      (e.pingedLanes &= ~n),
      u && (e.warmLanes |= n),
      (u = e.expirationTimes);
    for (var f = n; 0 < f; ) {
      var g = 31 - Te(f),
        p = 1 << g;
      (u[g] = -1), (f &= ~p);
    }
    a !== 0 && Zt(e, a, n);
  }
  function Vo() {
    return (qt & 6) === 0 ? (fa(0), !1) : !0;
  }
  function Zh() {
    if (Rt !== null) {
      if (Ht === 0) var e = Rt.return;
      else (e = Rt), (gn = Bs = null), Jc(e), (Ar = null), (Zl = 0), (e = Rt);
      for (; e !== null; ) Xm(e.alternate, e), (e = e.return);
      Rt = null;
    }
  }
  function Yr(e, n) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var a = e.timeoutHandle;
    a !== -1 && ((e.timeoutHandle = -1), eE(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      Zh(),
      (Bt = e),
      (Rt = a = Jn(e.current, null)),
      (At = n),
      (Ht = 0),
      (ei = null),
      (En = !1),
      (Ur = oe(e, n)),
      (Uh = !1),
      (Xr = yi = Xh = Ks = $n = Qt = 0),
      (Vi = ua = null),
      (Yh = !1),
      (n & 8) !== 0 && (n |= n & 32);
    var u = e.entangledLanes;
    if (u !== 0)
      for (e = e.entanglements, u &= n; 0 < u; ) {
        var f = 31 - Te(u),
          g = 1 << f;
        (n |= e[f]), (u &= ~g);
      }
    return (Sn = n), po(), a;
  }
  function Bm(e, n) {
    (Tt = null),
      (F.H = Ki),
      n === Hl
        ? ((n = s_()), (Ht = 3))
        : n === e_
          ? ((n = s_()), (Ht = 4))
          : (Ht =
              n === im
                ? 8
                : n !== null &&
                    typeof n == "object" &&
                    typeof n.then == "function"
                  ? 6
                  : 1),
      (ei = n),
      Rt === null && ((Qt = 1), Uo(e, ci(n, e.current)));
  }
  function Hm() {
    var e = F.H;
    return (F.H = Ki), e === null ? Ki : e;
  }
  function jm() {
    var e = F.A;
    return (F.A = zv), e;
  }
  function Kh() {
    (Qt = 4),
      En || ((At & 4194176) !== At && di.current !== null) || (Ur = !0),
      (($n & 134217727) === 0 && (Ks & 134217727) === 0) ||
        Bt === null ||
        xn(Bt, At, yi, !1);
  }
  function Vh(e, n, a) {
    var u = qt;
    qt |= 2;
    var f = Hm(),
      g = jm();
    (Bt !== e || At !== n) && ((Zo = null), Yr(e, n)), (n = !1);
    var p = Qt;
    t: do
      try {
        if (Ht !== 0 && Rt !== null) {
          var S = Rt,
            T = ei;
          switch (Ht) {
            case 8:
              Zh(), (p = 6);
              break t;
            case 3:
            case 2:
            case 6:
              di.current === null && (n = !0);
              var O = Ht;
              if (((Ht = 0), (ei = null), Pr(e, S, T, O), a && Ur)) {
                p = 0;
                break t;
              }
              break;
            default:
              (O = Ht), (Ht = 0), (ei = null), Pr(e, S, T, O);
          }
        }
        Fv(), (p = Qt);
        break;
      } catch (k) {
        Bm(e, k);
      }
    while (!0);
    return (
      n && e.shellSuspendCounter++,
      (gn = Bs = null),
      (qt = u),
      (F.H = f),
      (F.A = g),
      Rt === null && ((Bt = null), (At = 0), po()),
      p
    );
  }
  function Fv() {
    for (; Rt !== null; ) Zm(Rt);
  }
  function Uv(e, n) {
    var a = qt;
    qt |= 2;
    var u = Hm(),
      f = jm();
    Bt !== e || At !== n
      ? ((Zo = null), (jo = Pt() + 500), Yr(e, n))
      : (Ur = oe(e, n));
    t: do
      try {
        if (Ht !== 0 && Rt !== null) {
          n = Rt;
          var g = ei;
          e: switch (Ht) {
            case 1:
              (Ht = 0), (ei = null), Pr(e, n, g, 1);
              break;
            case 2:
              if (i_(g)) {
                (Ht = 0), (ei = null), Km(n);
                break;
              }
              (n = function () {
                Ht === 2 && Bt === e && (Ht = 7), qi(e);
              }),
                g.then(n, n);
              break t;
            case 3:
              Ht = 7;
              break t;
            case 4:
              Ht = 5;
              break t;
            case 7:
              i_(g)
                ? ((Ht = 0), (ei = null), Km(n))
                : ((Ht = 0), (ei = null), Pr(e, n, g, 7));
              break;
            case 5:
              var p = null;
              switch (Rt.tag) {
                case 26:
                  p = Rt.memoizedState;
                case 5:
                case 27:
                  var S = Rt;
                  if (!p || x0(p)) {
                    (Ht = 0), (ei = null);
                    var T = S.sibling;
                    if (T !== null) Rt = T;
                    else {
                      var O = S.return;
                      O !== null ? ((Rt = O), qo(O)) : (Rt = null);
                    }
                    break e;
                  }
              }
              (Ht = 0), (ei = null), Pr(e, n, g, 5);
              break;
            case 6:
              (Ht = 0), (ei = null), Pr(e, n, g, 6);
              break;
            case 8:
              Zh(), (Qt = 6);
              break t;
            default:
              throw Error(s(462));
          }
        }
        Xv();
        break;
      } catch (k) {
        Bm(e, k);
      }
    while (!0);
    return (
      (gn = Bs = null),
      (F.H = u),
      (F.A = f),
      (qt = a),
      Rt !== null ? 0 : ((Bt = null), (At = 0), po(), Qt)
    );
  }
  function Xv() {
    for (; Rt !== null && !wi(); ) Zm(Rt);
  }
  function Zm(e) {
    var n = gm(e.alternate, e, Sn);
    (e.memoizedProps = e.pendingProps), n === null ? qo(e) : (Rt = n);
  }
  function Km(e) {
    var n = e,
      a = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = om(a, n, n.pendingProps, n.type, void 0, At);
        break;
      case 11:
        n = om(a, n, n.pendingProps, n.type.render, n.ref, At);
        break;
      case 5:
        Jc(n);
      default:
        Xm(a, n), (n = Rt = Gm(n, Sn)), (n = gm(a, n, Sn));
    }
    (e.memoizedProps = e.pendingProps), n === null ? qo(e) : (Rt = n);
  }
  function Pr(e, n, a, u) {
    (gn = Bs = null), Jc(n), (Ar = null), (Zl = 0);
    var f = n.return;
    try {
      if (wv(e, f, n, a, At)) {
        (Qt = 1), Uo(e, ci(a, e.current)), (Rt = null);
        return;
      }
    } catch (g) {
      if (f !== null) throw ((Rt = f), g);
      (Qt = 1), Uo(e, ci(a, e.current)), (Rt = null);
      return;
    }
    n.flags & 32768
      ? (Ot || u === 1
          ? (e = !0)
          : Ur || (At & 536870912) !== 0
            ? (e = !1)
            : ((En = e = !0),
              (u === 2 || u === 3 || u === 6) &&
                ((u = di.current),
                u !== null && u.tag === 13 && (u.flags |= 16384))),
        Vm(n, e))
      : qo(n);
  }
  function qo(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        Vm(n, En);
        return;
      }
      e = n.return;
      var a = Lv(n.alternate, n, Sn);
      if (a !== null) {
        Rt = a;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        Rt = n;
        return;
      }
      Rt = n = e;
    } while (n !== null);
    Qt === 0 && (Qt = 5);
  }
  function Vm(e, n) {
    do {
      var a = Iv(e.alternate, e);
      if (a !== null) {
        (a.flags &= 32767), (Rt = a);
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !n && ((e = e.sibling), e !== null))
      ) {
        Rt = e;
        return;
      }
      Rt = e = a;
    } while (e !== null);
    (Qt = 6), (Rt = null);
  }
  function qm(e, n, a, u, f, g, p, S, T, O) {
    var k = F.T,
      K = J.p;
    try {
      (J.p = 2), (F.T = null), Yv(e, n, a, u, K, f, g, p, S, T, O);
    } finally {
      (F.T = k), (J.p = K);
    }
  }
  function Yv(e, n, a, u, f, g, p, S) {
    do kr();
    while (Vs !== null);
    if ((qt & 6) !== 0) throw Error(s(327));
    var T = e.finishedWork;
    if (((u = e.finishedLanes), T === null)) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), T === e.current))
      throw Error(s(177));
    (e.callbackNode = null),
      (e.callbackPriority = 0),
      (e.cancelPendingCommit = null);
    var O = T.lanes | T.childLanes;
    if (
      ((O |= Fc),
      Ai(e, u, O, g, p, S),
      e === Bt && ((Rt = Bt = null), (At = 0)),
      ((T.subtreeFlags & 10256) === 0 && (T.flags & 10256) === 0) ||
        Ko ||
        ((Ko = !0),
        (kh = O),
        (Bh = a),
        Hv(fr, function () {
          return kr(), null;
        })),
      (a = (T.flags & 15990) !== 0),
      (T.subtreeFlags & 15990) !== 0 || a
        ? ((a = F.T),
          (F.T = null),
          (g = J.p),
          (J.p = 2),
          (p = qt),
          (qt |= 4),
          Mv(e, T),
          Mm(T, e),
          cv(af, e.containerInfo),
          (au = !!lf),
          (af = lf = null),
          (e.current = T),
          Rm(e, T.alternate, T),
          rn(),
          (qt = p),
          (J.p = g),
          (F.T = a))
        : (e.current = T),
      Ko ? ((Ko = !1), (Vs = e), (ca = u)) : Wm(e, O),
      (O = e.pendingLanes),
      O === 0 && (ts = null),
      so(T.stateNode),
      qi(e),
      n !== null)
    )
      for (f = e.onRecoverableError, T = 0; T < n.length; T++)
        (O = n[T]), f(O.value, { componentStack: O.stack });
    return (
      (ca & 3) !== 0 && kr(),
      (O = e.pendingLanes),
      (u & 4194218) !== 0 && (O & 42) !== 0
        ? e === Hh
          ? ha++
          : ((ha = 0), (Hh = e))
        : (ha = 0),
      fa(0),
      null
    );
  }
  function Wm(e, n) {
    (e.pooledCacheLanes &= n) === 0 &&
      ((n = e.pooledCache), n != null && ((e.pooledCache = null), Vl(n)));
  }
  function kr() {
    if (Vs !== null) {
      var e = Vs,
        n = kh;
      kh = 0;
      var a = li(ca),
        u = F.T,
        f = J.p;
      try {
        if (((J.p = 32 > a ? 32 : a), (F.T = null), Vs === null)) var g = !1;
        else {
          (a = Bh), (Bh = null);
          var p = Vs,
            S = ca;
          if (((Vs = null), (ca = 0), (qt & 6) !== 0)) throw Error(s(331));
          var T = qt;
          if (
            ((qt |= 4),
            zm(p.current),
            Dm(p, p.current, S, a),
            (qt = T),
            fa(0, !1),
            xe && typeof xe.onPostCommitFiberRoot == "function")
          )
            try {
              xe.onPostCommitFiberRoot(bs, p);
            } catch {}
          g = !0;
        }
        return g;
      } finally {
        (J.p = f), (F.T = u), Wm(e, n);
      }
    }
    return !1;
  }
  function Qm(e, n, a) {
    (n = ci(a, n)),
      (n = fh(e.stateNode, n, 2)),
      (e = Vn(e, n, 2)),
      e !== null && (ze(e, 2), qi(e));
  }
  function kt(e, n, a) {
    if (e.tag === 3) Qm(e, e, a);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Qm(n, e, a);
          break;
        } else if (n.tag === 1) {
          var u = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (ts === null || !ts.has(u)))
          ) {
            (e = ci(a, e)),
              (a = tm(2)),
              (u = Vn(n, a, 2)),
              u !== null && (em(a, u, n, e), ze(u, 2), qi(u));
            break;
          }
        }
        n = n.return;
      }
  }
  function qh(e, n, a) {
    var u = e.pingCache;
    if (u === null) {
      u = e.pingCache = new Nv();
      var f = new Set();
      u.set(n, f);
    } else (f = u.get(n)), f === void 0 && ((f = new Set()), u.set(n, f));
    f.has(a) ||
      ((Uh = !0), f.add(a), (e = Pv.bind(null, e, n, a)), n.then(e, e));
  }
  function Pv(e, n, a) {
    var u = e.pingCache;
    u !== null && u.delete(n),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      Bt === e &&
        (At & a) === a &&
        (Qt === 4 || (Qt === 3 && (At & 62914560) === At && 300 > Pt() - Ph)
          ? (qt & 2) === 0 && Yr(e, 0)
          : (Xh |= a),
        Xr === At && (Xr = 0)),
      qi(e);
  }
  function Jm(e, n) {
    n === 0 && (n = Qe()), (e = Yn(e, n)), e !== null && (ze(e, n), qi(e));
  }
  function kv(e) {
    var n = e.memoizedState,
      a = 0;
    n !== null && (a = n.retryLane), Jm(e, a);
  }
  function Bv(e, n) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var u = e.stateNode,
          f = e.memoizedState;
        f !== null && (a = f.retryLane);
        break;
      case 19:
        u = e.stateNode;
        break;
      case 22:
        u = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    u !== null && u.delete(n), Jm(e, a);
  }
  function Hv(e, n) {
    return Pi(e, n);
  }
  var Wo = null,
    Br = null,
    Wh = !1,
    Qo = !1,
    Qh = !1,
    qs = 0;
  function qi(e) {
    e !== Br &&
      e.next === null &&
      (Br === null ? (Wo = Br = e) : (Br = Br.next = e)),
      (Qo = !0),
      Wh || ((Wh = !0), Zv(jv));
  }
  function fa(e, n) {
    if (!Qh && Qo) {
      Qh = !0;
      do
        for (var a = !1, u = Wo; u !== null; ) {
          if (e !== 0) {
            var f = u.pendingLanes;
            if (f === 0) var g = 0;
            else {
              var p = u.suspendedLanes,
                S = u.pingedLanes;
              (g = (1 << (31 - Te(42 | e) + 1)) - 1),
                (g &= f & ~(p & ~S)),
                (g = g & 201326677 ? (g & 201326677) | 1 : g ? g | 2 : 0);
            }
            g !== 0 && ((a = !0), e0(u, g));
          } else
            (g = At),
              (g = As(u, u === Bt ? g : 0)),
              (g & 3) === 0 || oe(u, g) || ((a = !0), e0(u, g));
          u = u.next;
        }
      while (a);
      Qh = !1;
    }
  }
  function jv() {
    Qo = Wh = !1;
    var e = 0;
    qs !== 0 && (tE() && (e = qs), (qs = 0));
    for (var n = Pt(), a = null, u = Wo; u !== null; ) {
      var f = u.next,
        g = $m(u, n);
      g === 0
        ? ((u.next = null),
          a === null ? (Wo = f) : (a.next = f),
          f === null && (Br = a))
        : ((a = u), (e !== 0 || (g & 3) !== 0) && (Qo = !0)),
        (u = f);
    }
    fa(e);
  }
  function $m(e, n) {
    for (
      var a = e.suspendedLanes,
        u = e.pingedLanes,
        f = e.expirationTimes,
        g = e.pendingLanes & -62914561;
      0 < g;

    ) {
      var p = 31 - Te(g),
        S = 1 << p,
        T = f[p];
      T === -1
        ? ((S & a) === 0 || (S & u) !== 0) && (f[p] = ln(S, n))
        : T <= n && (e.expiredLanes |= S),
        (g &= ~S);
    }
    if (
      ((n = Bt),
      (a = At),
      (a = As(e, e === n ? a : 0)),
      (u = e.callbackNode),
      a === 0 || (e === n && Ht === 2) || e.cancelPendingCommit !== null)
    )
      return (
        u !== null && u !== null && sn(u),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((a & 3) === 0 || oe(e, a)) {
      if (((n = a & -a), n === e.callbackPriority)) return n;
      switch ((u !== null && sn(u), li(a))) {
        case 2:
        case 8:
          a = Rs;
          break;
        case 32:
          a = fr;
          break;
        case 268435456:
          a = wl;
          break;
        default:
          a = fr;
      }
      return (
        (u = t0.bind(null, e)),
        (a = Pi(a, u)),
        (e.callbackPriority = n),
        (e.callbackNode = a),
        n
      );
    }
    return (
      u !== null && u !== null && sn(u),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function t0(e, n) {
    var a = e.callbackNode;
    if (kr() && e.callbackNode !== a) return null;
    var u = At;
    return (
      (u = As(e, e === Bt ? u : 0)),
      u === 0
        ? null
        : (Pm(e, u, n),
          $m(e, Pt()),
          e.callbackNode != null && e.callbackNode === a
            ? t0.bind(null, e)
            : null)
    );
  }
  function e0(e, n) {
    if (kr()) return null;
    Pm(e, n, !0);
  }
  function Zv(e) {
    iE(function () {
      (qt & 6) !== 0 ? Pi(Cs, e) : e();
    });
  }
  function Jh() {
    return qs === 0 && (qs = Ie()), qs;
  }
  function i0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : co("" + e);
  }
  function n0(e, n) {
    var a = n.ownerDocument.createElement("input");
    return (
      (a.name = n.name),
      (a.value = n.value),
      e.id && a.setAttribute("form", e.id),
      n.parentNode.insertBefore(a, n),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function Kv(e, n, a, u, f) {
    if (n === "submit" && a && a.stateNode === f) {
      var g = i0((f[Ye] || null).action),
        p = u.submitter;
      p &&
        ((n = (n = p[Ye] || null)
          ? i0(n.formAction)
          : p.getAttribute("formAction")),
        n !== null && ((g = n), (p = null)));
      var S = new _o("action", "action", null, u, f);
      e.push({
        event: S,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (qs !== 0) {
                  var T = p ? n0(f, p) : new FormData(f);
                  ah(
                    a,
                    { pending: !0, data: T, method: f.method, action: g },
                    null,
                    T,
                  );
                }
              } else
                typeof g == "function" &&
                  (S.preventDefault(),
                  (T = p ? n0(f, p) : new FormData(f)),
                  ah(
                    a,
                    { pending: !0, data: T, method: f.method, action: g },
                    g,
                    T,
                  ));
            },
            currentTarget: f,
          },
        ],
      });
    }
  }
  for (var $h = 0; $h < qg.length; $h++) {
    var tf = qg[$h],
      Vv = tf.toLowerCase(),
      qv = tf[0].toUpperCase() + tf.slice(1);
    Mi(Vv, "on" + qv);
  }
  Mi(Hg, "onAnimationEnd"),
    Mi(jg, "onAnimationIteration"),
    Mi(Zg, "onAnimationStart"),
    Mi("dblclick", "onDoubleClick"),
    Mi("focusin", "onFocus"),
    Mi("focusout", "onBlur"),
    Mi(fv, "onTransitionRun"),
    Mi(dv, "onTransitionStart"),
    Mi(gv, "onTransitionCancel"),
    Mi(Kg, "onTransitionEnd"),
    mr("onMouseEnter", ["mouseout", "mouseover"]),
    mr("onMouseLeave", ["mouseout", "mouseover"]),
    mr("onPointerEnter", ["pointerout", "pointerover"]),
    mr("onPointerLeave", ["pointerout", "pointerover"]),
    Os(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Os(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Os("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Os(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Os(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Os(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var da =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Wv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(da),
    );
  function s0(e, n) {
    n = (n & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var u = e[a],
        f = u.event;
      u = u.listeners;
      t: {
        var g = void 0;
        if (n)
          for (var p = u.length - 1; 0 <= p; p--) {
            var S = u[p],
              T = S.instance,
              O = S.currentTarget;
            if (((S = S.listener), T !== g && f.isPropagationStopped()))
              break t;
            (g = S), (f.currentTarget = O);
            try {
              g(f);
            } catch (k) {
              Fo(k);
            }
            (f.currentTarget = null), (g = T);
          }
        else
          for (p = 0; p < u.length; p++) {
            if (
              ((S = u[p]),
              (T = S.instance),
              (O = S.currentTarget),
              (S = S.listener),
              T !== g && f.isPropagationStopped())
            )
              break t;
            (g = S), (f.currentTarget = O);
            try {
              g(f);
            } catch (k) {
              Fo(k);
            }
            (f.currentTarget = null), (g = T);
          }
      }
    }
  }
  function bt(e, n) {
    var a = n[mc];
    a === void 0 && (a = n[mc] = new Set());
    var u = e + "__bubble";
    a.has(u) || (r0(n, e, 2, !1), a.add(u));
  }
  function ef(e, n, a) {
    var u = 0;
    n && (u |= 4), r0(a, e, u, n);
  }
  var Jo = "_reactListening" + Math.random().toString(36).slice(2);
  function nf(e) {
    if (!e[Jo]) {
      (e[Jo] = !0),
        og.forEach(function (a) {
          a !== "selectionchange" && (Wv.has(a) || ef(a, !1, e), ef(a, !0, e));
        });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Jo] || ((n[Jo] = !0), ef("selectionchange", !1, n));
    }
  }
  function r0(e, n, a, u) {
    switch (A0(n)) {
      case 2:
        var f = xE;
        break;
      case 8:
        f = TE;
        break;
      default:
        f = mf;
    }
    (a = f.bind(null, n, a, e)),
      (f = void 0),
      !Cc ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (f = !0),
      u
        ? f !== void 0
          ? e.addEventListener(n, a, { capture: !0, passive: f })
          : e.addEventListener(n, a, !0)
        : f !== void 0
          ? e.addEventListener(n, a, { passive: f })
          : e.addEventListener(n, a, !1);
  }
  function sf(e, n, a, u, f) {
    var g = u;
    if ((n & 1) === 0 && (n & 2) === 0 && u !== null)
      t: for (;;) {
        if (u === null) return;
        var p = u.tag;
        if (p === 3 || p === 4) {
          var S = u.stateNode.containerInfo;
          if (S === f || (S.nodeType === 8 && S.parentNode === f)) break;
          if (p === 4)
            for (p = u.return; p !== null; ) {
              var T = p.tag;
              if (
                (T === 3 || T === 4) &&
                ((T = p.stateNode.containerInfo),
                T === f || (T.nodeType === 8 && T.parentNode === f))
              )
                return;
              p = p.return;
            }
          for (; S !== null; ) {
            if (((p = Ms(S)), p === null)) return;
            if (((T = p.tag), T === 5 || T === 6 || T === 26 || T === 27)) {
              u = g = p;
              continue t;
            }
            S = S.parentNode;
          }
        }
        u = u.return;
      }
    Eg(function () {
      var O = g,
        k = xc(a),
        K = [];
      t: {
        var N = Vg.get(e);
        if (N !== void 0) {
          var P = _o,
            at = e;
          switch (e) {
            case "keypress":
              if (fo(a) === 0) break t;
            case "keydown":
            case "keyup":
              P = B1;
              break;
            case "focusin":
              (at = "focus"), (P = Ac);
              break;
            case "focusout":
              (at = "blur"), (P = Ac);
              break;
            case "beforeblur":
            case "afterblur":
              P = Ac;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              P = Tg;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              P = D1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              P = Z1;
              break;
            case Hg:
            case jg:
            case Zg:
              P = z1;
              break;
            case Kg:
              P = V1;
              break;
            case "scroll":
            case "scrollend":
              P = M1;
              break;
            case "wheel":
              P = W1;
              break;
            case "copy":
            case "cut":
            case "paste":
              P = G1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              P = Rg;
              break;
            case "toggle":
            case "beforetoggle":
              P = J1;
          }
          var yt = (n & 4) !== 0,
            Jt = !yt && (e === "scroll" || e === "scrollend"),
            L = yt ? (N !== null ? N + "Capture" : null) : N;
          yt = [];
          for (var A = O, z; A !== null; ) {
            var H = A;
            if (
              ((z = H.stateNode),
              (H = H.tag),
              (H !== 5 && H !== 26 && H !== 27) ||
                z === null ||
                L === null ||
                ((H = Ll(A, L)), H != null && yt.push(ga(A, H, z))),
              Jt)
            )
              break;
            A = A.return;
          }
          0 < yt.length &&
            ((N = new P(N, at, null, a, k)),
            K.push({ event: N, listeners: yt }));
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (
            ((N = e === "mouseover" || e === "pointerover"),
            (P = e === "mouseout" || e === "pointerout"),
            N &&
              a !== Sc &&
              (at = a.relatedTarget || a.fromElement) &&
              (Ms(at) || at[dr]))
          )
            break t;
          if (
            (P || N) &&
            ((N =
              k.window === k
                ? k
                : (N = k.ownerDocument)
                  ? N.defaultView || N.parentWindow
                  : window),
            P
              ? ((at = a.relatedTarget || a.toElement),
                (P = O),
                (at = at ? Ms(at) : null),
                at !== null &&
                  ((Jt = W(at)),
                  (yt = at.tag),
                  at !== Jt || (yt !== 5 && yt !== 27 && yt !== 6)) &&
                  (at = null))
              : ((P = null), (at = O)),
            P !== at)
          ) {
            if (
              ((yt = Tg),
              (H = "onMouseLeave"),
              (L = "onMouseEnter"),
              (A = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((yt = Rg),
                (H = "onPointerLeave"),
                (L = "onPointerEnter"),
                (A = "pointer")),
              (Jt = P == null ? N : Dl(P)),
              (z = at == null ? N : Dl(at)),
              (N = new yt(H, A + "leave", P, a, k)),
              (N.target = Jt),
              (N.relatedTarget = z),
              (H = null),
              Ms(k) === O &&
                ((yt = new yt(L, A + "enter", at, a, k)),
                (yt.target = z),
                (yt.relatedTarget = Jt),
                (H = yt)),
              (Jt = H),
              P && at)
            )
              e: {
                for (yt = P, L = at, A = 0, z = yt; z; z = Hr(z)) A++;
                for (z = 0, H = L; H; H = Hr(H)) z++;
                for (; 0 < A - z; ) (yt = Hr(yt)), A--;
                for (; 0 < z - A; ) (L = Hr(L)), z--;
                for (; A--; ) {
                  if (yt === L || (L !== null && yt === L.alternate)) break e;
                  (yt = Hr(yt)), (L = Hr(L));
                }
                yt = null;
              }
            else yt = null;
            P !== null && l0(K, N, P, yt, !1),
              at !== null && Jt !== null && l0(K, Jt, at, yt, !0);
          }
        }
        t: {
          if (
            ((N = O ? Dl(O) : window),
            (P = N.nodeName && N.nodeName.toLowerCase()),
            P === "select" || (P === "input" && N.type === "file"))
          )
            var et = Ig;
          else if (Dg(N))
            if (zg) et = ov;
            else {
              et = lv;
              var Ct = rv;
            }
          else
            (P = N.nodeName),
              !P ||
              P.toLowerCase() !== "input" ||
              (N.type !== "checkbox" && N.type !== "radio")
                ? O && Ec(O.elementType) && (et = Ig)
                : (et = av);
          if (et && (et = et(e, O))) {
            Lg(K, et, a, k);
            break t;
          }
          Ct && Ct(e, N, O),
            e === "focusout" &&
              O &&
              N.type === "number" &&
              O.memoizedProps.value != null &&
              vc(N, "number", N.value);
        }
        switch (((Ct = O ? Dl(O) : window), e)) {
          case "focusin":
            (Dg(Ct) || Ct.contentEditable === "true") &&
              ((xr = Ct), (zc = O), (Yl = null));
            break;
          case "focusout":
            Yl = zc = xr = null;
            break;
          case "mousedown":
            Nc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Nc = !1), kg(K, a, k);
            break;
          case "selectionchange":
            if (hv) break;
          case "keydown":
          case "keyup":
            kg(K, a, k);
        }
        var ut;
        if (Oc)
          t: {
            switch (e) {
              case "compositionstart":
                var dt = "onCompositionStart";
                break t;
              case "compositionend":
                dt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                dt = "onCompositionUpdate";
                break t;
            }
            dt = void 0;
          }
        else
          Sr
            ? Mg(e, a) && (dt = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              (dt = "onCompositionStart");
        dt &&
          (bg &&
            a.locale !== "ko" &&
            (Sr || dt !== "onCompositionStart"
              ? dt === "onCompositionEnd" && Sr && (ut = Sg())
              : ((Xn = k),
                (Rc = "value" in Xn ? Xn.value : Xn.textContent),
                (Sr = !0))),
          (Ct = $o(O, dt)),
          0 < Ct.length &&
            ((dt = new Cg(dt, e, null, a, k)),
            K.push({ event: dt, listeners: Ct }),
            ut
              ? (dt.data = ut)
              : ((ut = Og(a)), ut !== null && (dt.data = ut)))),
          (ut = tv ? ev(e, a) : iv(e, a)) &&
            ((dt = $o(O, "onBeforeInput")),
            0 < dt.length &&
              ((Ct = new Cg("onBeforeInput", "beforeinput", null, a, k)),
              K.push({ event: Ct, listeners: dt }),
              (Ct.data = ut))),
          Kv(K, e, O, a, k);
      }
      s0(K, n);
    });
  }
  function ga(e, n, a) {
    return { instance: e, listener: n, currentTarget: a };
  }
  function $o(e, n) {
    for (var a = n + "Capture", u = []; e !== null; ) {
      var f = e,
        g = f.stateNode;
      (f = f.tag),
        (f !== 5 && f !== 26 && f !== 27) ||
          g === null ||
          ((f = Ll(e, a)),
          f != null && u.unshift(ga(e, f, g)),
          (f = Ll(e, n)),
          f != null && u.push(ga(e, f, g))),
        (e = e.return);
    }
    return u;
  }
  function Hr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function l0(e, n, a, u, f) {
    for (var g = n._reactName, p = []; a !== null && a !== u; ) {
      var S = a,
        T = S.alternate,
        O = S.stateNode;
      if (((S = S.tag), T !== null && T === u)) break;
      (S !== 5 && S !== 26 && S !== 27) ||
        O === null ||
        ((T = O),
        f
          ? ((O = Ll(a, g)), O != null && p.unshift(ga(a, O, T)))
          : f || ((O = Ll(a, g)), O != null && p.push(ga(a, O, T)))),
        (a = a.return);
    }
    p.length !== 0 && e.push({ event: n, listeners: p });
  }
  var Qv = /\r\n?/g,
    Jv = /\u0000|\uFFFD/g;
  function a0(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Qv,
        `
`,
      )
      .replace(Jv, "");
  }
  function o0(e, n) {
    return (n = a0(n)), a0(e) === n;
  }
  function tu() {}
  function Yt(e, n, a, u, f, g) {
    switch (a) {
      case "children":
        typeof u == "string"
          ? n === "body" || (n === "textarea" && u === "") || pr(e, u)
          : (typeof u == "number" || typeof u == "bigint") &&
            n !== "body" &&
            pr(e, "" + u);
        break;
      case "className":
        ao(e, "class", u);
        break;
      case "tabIndex":
        ao(e, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ao(e, a, u);
        break;
      case "style":
        pg(e, u, g);
        break;
      case "data":
        if (n !== "object") {
          ao(e, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (n !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "symbol" ||
          typeof u == "boolean"
        ) {
          e.removeAttribute(a);
          break;
        }
        (u = co("" + u)), e.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof g == "function" &&
            (a === "formAction"
              ? (n !== "input" && Yt(e, n, "name", f.name, f, null),
                Yt(e, n, "formEncType", f.formEncType, f, null),
                Yt(e, n, "formMethod", f.formMethod, f, null),
                Yt(e, n, "formTarget", f.formTarget, f, null))
              : (Yt(e, n, "encType", f.encType, f, null),
                Yt(e, n, "method", f.method, f, null),
                Yt(e, n, "target", f.target, f, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          e.removeAttribute(a);
          break;
        }
        (u = co("" + u)), e.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (e.onclick = tu);
        break;
      case "onScroll":
        u != null && bt("scroll", e);
        break;
      case "onScrollEnd":
        u != null && bt("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(s(61));
          if (((a = u.__html), a != null)) {
            if (f.children != null) throw Error(s(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        e.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "boolean" ||
          typeof u == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (a = co("" + u)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol"
          ? e.setAttribute(a, "" + u)
          : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol"
          ? e.setAttribute(a, "")
          : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0
          ? e.setAttribute(a, "")
          : u !== !1 &&
              u != null &&
              typeof u != "function" &&
              typeof u != "symbol"
            ? e.setAttribute(a, u)
            : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        !isNaN(u) &&
        1 <= u
          ? e.setAttribute(a, u)
          : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u)
          ? e.removeAttribute(a)
          : e.setAttribute(a, u);
        break;
      case "popover":
        bt("beforetoggle", e), bt("toggle", e), lo(e, "popover", u);
        break;
      case "xlinkActuate":
        on(e, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        on(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        on(e, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        on(e, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        on(e, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        on(e, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        on(e, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        on(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        on(e, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        lo(e, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = w1.get(a) || a), lo(e, a, u));
    }
  }
  function rf(e, n, a, u, f, g) {
    switch (a) {
      case "style":
        pg(e, u, g);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(s(61));
          if (((a = u.__html), a != null)) {
            if (f.children != null) throw Error(s(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string"
          ? pr(e, u)
          : (typeof u == "number" || typeof u == "bigint") && pr(e, "" + u);
        break;
      case "onScroll":
        u != null && bt("scroll", e);
        break;
      case "onScrollEnd":
        u != null && bt("scrollend", e);
        break;
      case "onClick":
        u != null && (e.onclick = tu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ug.hasOwnProperty(a))
          t: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((f = a.endsWith("Capture")),
              (n = a.slice(2, f ? a.length - 7 : void 0)),
              (g = e[Ye] || null),
              (g = g != null ? g[a] : null),
              typeof g == "function" && e.removeEventListener(n, g, f),
              typeof u == "function")
            ) {
              typeof g != "function" &&
                g !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(n, u, f);
              break t;
            }
            a in e
              ? (e[a] = u)
              : u === !0
                ? e.setAttribute(a, "")
                : lo(e, a, u);
          }
    }
  }
  function Ee(e, n, a) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        bt("error", e), bt("load", e);
        var u = !1,
          f = !1,
          g;
        for (g in a)
          if (a.hasOwnProperty(g)) {
            var p = a[g];
            if (p != null)
              switch (g) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  f = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, n));
                default:
                  Yt(e, n, g, p, a, null);
              }
          }
        f && Yt(e, n, "srcSet", a.srcSet, a, null),
          u && Yt(e, n, "src", a.src, a, null);
        return;
      case "input":
        bt("invalid", e);
        var S = (g = p = f = null),
          T = null,
          O = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var k = a[u];
            if (k != null)
              switch (u) {
                case "name":
                  f = k;
                  break;
                case "type":
                  p = k;
                  break;
                case "checked":
                  T = k;
                  break;
                case "defaultChecked":
                  O = k;
                  break;
                case "value":
                  g = k;
                  break;
                case "defaultValue":
                  S = k;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (k != null) throw Error(s(137, n));
                  break;
                default:
                  Yt(e, n, u, k, a, null);
              }
          }
        gg(e, g, S, T, O, p, f, !1), oo(e);
        return;
      case "select":
        bt("invalid", e), (u = p = g = null);
        for (f in a)
          if (a.hasOwnProperty(f) && ((S = a[f]), S != null))
            switch (f) {
              case "value":
                g = S;
                break;
              case "defaultValue":
                p = S;
                break;
              case "multiple":
                u = S;
              default:
                Yt(e, n, f, S, a, null);
            }
        (n = g),
          (a = p),
          (e.multiple = !!u),
          n != null ? yr(e, !!u, n, !1) : a != null && yr(e, !!u, a, !0);
        return;
      case "textarea":
        bt("invalid", e), (g = f = u = null);
        for (p in a)
          if (a.hasOwnProperty(p) && ((S = a[p]), S != null))
            switch (p) {
              case "value":
                u = S;
                break;
              case "defaultValue":
                f = S;
                break;
              case "children":
                g = S;
                break;
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(s(91));
                break;
              default:
                Yt(e, n, p, S, a, null);
            }
        mg(e, u, f, g), oo(e);
        return;
      case "option":
        for (T in a)
          if (a.hasOwnProperty(T) && ((u = a[T]), u != null))
            switch (T) {
              case "selected":
                e.selected =
                  u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                Yt(e, n, T, u, a, null);
            }
        return;
      case "dialog":
        bt("cancel", e), bt("close", e);
        break;
      case "iframe":
      case "object":
        bt("load", e);
        break;
      case "video":
      case "audio":
        for (u = 0; u < da.length; u++) bt(da[u], e);
        break;
      case "image":
        bt("error", e), bt("load", e);
        break;
      case "details":
        bt("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        bt("error", e), bt("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (O in a)
          if (a.hasOwnProperty(O) && ((u = a[O]), u != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, n));
              default:
                Yt(e, n, O, u, a, null);
            }
        return;
      default:
        if (Ec(n)) {
          for (k in a)
            a.hasOwnProperty(k) &&
              ((u = a[k]), u !== void 0 && rf(e, n, k, u, a, void 0));
          return;
        }
    }
    for (S in a)
      a.hasOwnProperty(S) && ((u = a[S]), u != null && Yt(e, n, S, u, a, null));
  }
  function $v(e, n, a, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var f = null,
          g = null,
          p = null,
          S = null,
          T = null,
          O = null,
          k = null;
        for (P in a) {
          var K = a[P];
          if (a.hasOwnProperty(P) && K != null)
            switch (P) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = K;
              default:
                u.hasOwnProperty(P) || Yt(e, n, P, null, u, K);
            }
        }
        for (var N in u) {
          var P = u[N];
          if (((K = a[N]), u.hasOwnProperty(N) && (P != null || K != null)))
            switch (N) {
              case "type":
                g = P;
                break;
              case "name":
                f = P;
                break;
              case "checked":
                O = P;
                break;
              case "defaultChecked":
                k = P;
                break;
              case "value":
                p = P;
                break;
              case "defaultValue":
                S = P;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (P != null) throw Error(s(137, n));
                break;
              default:
                P !== K && Yt(e, n, N, P, u, K);
            }
        }
        pc(e, p, S, T, O, k, g, f);
        return;
      case "select":
        P = p = S = N = null;
        for (g in a)
          if (((T = a[g]), a.hasOwnProperty(g) && T != null))
            switch (g) {
              case "value":
                break;
              case "multiple":
                P = T;
              default:
                u.hasOwnProperty(g) || Yt(e, n, g, null, u, T);
            }
        for (f in u)
          if (
            ((g = u[f]),
            (T = a[f]),
            u.hasOwnProperty(f) && (g != null || T != null))
          )
            switch (f) {
              case "value":
                N = g;
                break;
              case "defaultValue":
                S = g;
                break;
              case "multiple":
                p = g;
              default:
                g !== T && Yt(e, n, f, g, u, T);
            }
        (n = S),
          (a = p),
          (u = P),
          N != null
            ? yr(e, !!a, N, !1)
            : !!u != !!a &&
              (n != null ? yr(e, !!a, n, !0) : yr(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        P = N = null;
        for (S in a)
          if (
            ((f = a[S]),
            a.hasOwnProperty(S) && f != null && !u.hasOwnProperty(S))
          )
            switch (S) {
              case "value":
                break;
              case "children":
                break;
              default:
                Yt(e, n, S, null, u, f);
            }
        for (p in u)
          if (
            ((f = u[p]),
            (g = a[p]),
            u.hasOwnProperty(p) && (f != null || g != null))
          )
            switch (p) {
              case "value":
                N = f;
                break;
              case "defaultValue":
                P = f;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(s(91));
                break;
              default:
                f !== g && Yt(e, n, p, f, u, g);
            }
        _g(e, N, P);
        return;
      case "option":
        for (var at in a)
          if (
            ((N = a[at]),
            a.hasOwnProperty(at) && N != null && !u.hasOwnProperty(at))
          )
            switch (at) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Yt(e, n, at, null, u, N);
            }
        for (T in u)
          if (
            ((N = u[T]),
            (P = a[T]),
            u.hasOwnProperty(T) && N !== P && (N != null || P != null))
          )
            switch (T) {
              case "selected":
                e.selected =
                  N && typeof N != "function" && typeof N != "symbol";
                break;
              default:
                Yt(e, n, T, N, u, P);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var yt in a)
          (N = a[yt]),
            a.hasOwnProperty(yt) &&
              N != null &&
              !u.hasOwnProperty(yt) &&
              Yt(e, n, yt, null, u, N);
        for (O in u)
          if (
            ((N = u[O]),
            (P = a[O]),
            u.hasOwnProperty(O) && N !== P && (N != null || P != null))
          )
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(s(137, n));
                break;
              default:
                Yt(e, n, O, N, u, P);
            }
        return;
      default:
        if (Ec(n)) {
          for (var Jt in a)
            (N = a[Jt]),
              a.hasOwnProperty(Jt) &&
                N !== void 0 &&
                !u.hasOwnProperty(Jt) &&
                rf(e, n, Jt, void 0, u, N);
          for (k in u)
            (N = u[k]),
              (P = a[k]),
              !u.hasOwnProperty(k) ||
                N === P ||
                (N === void 0 && P === void 0) ||
                rf(e, n, k, N, u, P);
          return;
        }
    }
    for (var L in a)
      (N = a[L]),
        a.hasOwnProperty(L) &&
          N != null &&
          !u.hasOwnProperty(L) &&
          Yt(e, n, L, null, u, N);
    for (K in u)
      (N = u[K]),
        (P = a[K]),
        !u.hasOwnProperty(K) ||
          N === P ||
          (N == null && P == null) ||
          Yt(e, n, K, N, u, P);
  }
  var lf = null,
    af = null;
  function eu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function u0(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function c0(e, n) {
    if (e === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function of(e, n) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      typeof n.children == "bigint" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var uf = null;
  function tE() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === uf
        ? !1
        : ((uf = e), !0)
      : ((uf = null), !1);
  }
  var h0 = typeof setTimeout == "function" ? setTimeout : void 0,
    eE = typeof clearTimeout == "function" ? clearTimeout : void 0,
    f0 = typeof Promise == "function" ? Promise : void 0,
    iE =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof f0 < "u"
          ? function (e) {
              return f0.resolve(null).then(e).catch(nE);
            }
          : h0;
  function nE(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function cf(e, n) {
    var a = n,
      u = 0;
    do {
      var f = a.nextSibling;
      if ((e.removeChild(a), f && f.nodeType === 8))
        if (((a = f.data), a === "/$")) {
          if (u === 0) {
            e.removeChild(f), xa(n);
            return;
          }
          u--;
        } else (a !== "$" && a !== "$?" && a !== "$!") || u++;
      a = f;
    } while (a);
    xa(n);
  }
  function hf(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var a = n;
      switch (((n = n.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          hf(a), yc(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function sE(e, n, a, u) {
    for (; e.nodeType === 1; ) {
      var f = a;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!u && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (u) {
        if (!e[Ol])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((g = e.getAttribute("rel")),
                g === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                g !== f.rel ||
                e.getAttribute("href") !== (f.href == null ? null : f.href) ||
                e.getAttribute("crossorigin") !==
                  (f.crossOrigin == null ? null : f.crossOrigin) ||
                e.getAttribute("title") !== (f.title == null ? null : f.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((g = e.getAttribute("src")),
                (g !== (f.src == null ? null : f.src) ||
                  e.getAttribute("type") !== (f.type == null ? null : f.type) ||
                  e.getAttribute("crossorigin") !==
                    (f.crossOrigin == null ? null : f.crossOrigin)) &&
                  g &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var g = f.name == null ? null : "" + f.name;
        if (f.type === "hidden" && e.getAttribute("name") === g) return e;
      } else return e;
      if (((e = Li(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function rE(e, n, a) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = Li(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Li(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (
          ((n = e.data),
          n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
        )
          break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function d0(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (n === 0) return e;
          n--;
        } else a === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function g0(e, n, a) {
    switch (((n = eu(a)), e)) {
      case "html":
        if (((e = n.documentElement), !e)) throw Error(s(452));
        return e;
      case "head":
        if (((e = n.head), !e)) throw Error(s(453));
        return e;
      case "body":
        if (((e = n.body), !e)) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  var pi = new Map(),
    _0 = new Set();
  function iu(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.ownerDocument;
  }
  var Tn = J.d;
  J.d = { f: lE, r: aE, D: oE, C: uE, L: cE, m: hE, X: dE, S: fE, M: gE };
  function lE() {
    var e = Tn.f(),
      n = Vo();
    return e || n;
  }
  function aE(e) {
    var n = gr(e);
    n !== null && n.tag === 5 && n.type === "form" ? k_(n) : Tn.r(e);
  }
  var jr = typeof document > "u" ? null : document;
  function m0(e, n, a) {
    var u = jr;
    if (u && typeof n == "string" && n) {
      var f = oi(n);
      (f = 'link[rel="' + e + '"][href="' + f + '"]'),
        typeof a == "string" && (f += '[crossorigin="' + a + '"]'),
        _0.has(f) ||
          (_0.add(f),
          (e = { rel: e, crossOrigin: a, href: n }),
          u.querySelector(f) === null &&
            ((n = u.createElement("link")),
            Ee(n, "link", e),
            ce(n),
            u.head.appendChild(n)));
    }
  }
  function oE(e) {
    Tn.D(e), m0("dns-prefetch", e, null);
  }
  function uE(e, n) {
    Tn.C(e, n), m0("preconnect", e, n);
  }
  function cE(e, n, a) {
    Tn.L(e, n, a);
    var u = jr;
    if (u && e && n) {
      var f = 'link[rel="preload"][as="' + oi(n) + '"]';
      n === "image" && a && a.imageSrcSet
        ? ((f += '[imagesrcset="' + oi(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (f += '[imagesizes="' + oi(a.imageSizes) + '"]'))
        : (f += '[href="' + oi(e) + '"]');
      var g = f;
      switch (n) {
        case "style":
          g = Zr(e);
          break;
        case "script":
          g = Kr(e);
      }
      pi.has(g) ||
        ((e = q(
          {
            rel: "preload",
            href: n === "image" && a && a.imageSrcSet ? void 0 : e,
            as: n,
          },
          a,
        )),
        pi.set(g, e),
        u.querySelector(f) !== null ||
          (n === "style" && u.querySelector(_a(g))) ||
          (n === "script" && u.querySelector(ma(g))) ||
          ((n = u.createElement("link")),
          Ee(n, "link", e),
          ce(n),
          u.head.appendChild(n)));
    }
  }
  function hE(e, n) {
    Tn.m(e, n);
    var a = jr;
    if (a && e) {
      var u = n && typeof n.as == "string" ? n.as : "script",
        f =
          'link[rel="modulepreload"][as="' + oi(u) + '"][href="' + oi(e) + '"]',
        g = f;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          g = Kr(e);
      }
      if (
        !pi.has(g) &&
        ((e = q({ rel: "modulepreload", href: e }, n)),
        pi.set(g, e),
        a.querySelector(f) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ma(g))) return;
        }
        (u = a.createElement("link")),
          Ee(u, "link", e),
          ce(u),
          a.head.appendChild(u);
      }
    }
  }
  function fE(e, n, a) {
    Tn.S(e, n, a);
    var u = jr;
    if (u && e) {
      var f = _r(u).hoistableStyles,
        g = Zr(e);
      n = n || "default";
      var p = f.get(g);
      if (!p) {
        var S = { loading: 0, preload: null };
        if ((p = u.querySelector(_a(g)))) S.loading = 5;
        else {
          (e = q({ rel: "stylesheet", href: e, "data-precedence": n }, a)),
            (a = pi.get(g)) && ff(e, a);
          var T = (p = u.createElement("link"));
          ce(T),
            Ee(T, "link", e),
            (T._p = new Promise(function (O, k) {
              (T.onload = O), (T.onerror = k);
            })),
            T.addEventListener("load", function () {
              S.loading |= 1;
            }),
            T.addEventListener("error", function () {
              S.loading |= 2;
            }),
            (S.loading |= 4),
            nu(p, n, u);
        }
        (p = { type: "stylesheet", instance: p, count: 1, state: S }),
          f.set(g, p);
      }
    }
  }
  function dE(e, n) {
    Tn.X(e, n);
    var a = jr;
    if (a && e) {
      var u = _r(a).hoistableScripts,
        f = Kr(e),
        g = u.get(f);
      g ||
        ((g = a.querySelector(ma(f))),
        g ||
          ((e = q({ src: e, async: !0 }, n)),
          (n = pi.get(f)) && df(e, n),
          (g = a.createElement("script")),
          ce(g),
          Ee(g, "link", e),
          a.head.appendChild(g)),
        (g = { type: "script", instance: g, count: 1, state: null }),
        u.set(f, g));
    }
  }
  function gE(e, n) {
    Tn.M(e, n);
    var a = jr;
    if (a && e) {
      var u = _r(a).hoistableScripts,
        f = Kr(e),
        g = u.get(f);
      g ||
        ((g = a.querySelector(ma(f))),
        g ||
          ((e = q({ src: e, async: !0, type: "module" }, n)),
          (n = pi.get(f)) && df(e, n),
          (g = a.createElement("script")),
          ce(g),
          Ee(g, "link", e),
          a.head.appendChild(g)),
        (g = { type: "script", instance: g, count: 1, state: null }),
        u.set(f, g));
    }
  }
  function y0(e, n, a, u) {
    var f = (f = qe.current) ? iu(f) : null;
    if (!f) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((n = Zr(a.href)),
            (a = _r(f).hoistableStyles),
            (u = a.get(n)),
            u ||
              ((u = { type: "style", instance: null, count: 0, state: null }),
              a.set(n, u)),
            u)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = Zr(a.href);
          var g = _r(f).hoistableStyles,
            p = g.get(e);
          if (
            (p ||
              ((f = f.ownerDocument || f),
              (p = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              g.set(e, p),
              (g = f.querySelector(_a(e))) &&
                !g._p &&
                ((p.instance = g), (p.state.loading = 5)),
              pi.has(e) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                pi.set(e, a),
                g || _E(f, e, a, p.state))),
            n && u === null)
          )
            throw Error(s(528, ""));
          return p;
        }
        if (n && u !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (n = a.async),
          (a = a.src),
          typeof a == "string" &&
          n &&
          typeof n != "function" &&
          typeof n != "symbol"
            ? ((n = Kr(a)),
              (a = _r(f).hoistableScripts),
              (u = a.get(n)),
              u ||
                ((u = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(n, u)),
              u)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, e));
    }
  }
  function Zr(e) {
    return 'href="' + oi(e) + '"';
  }
  function _a(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function p0(e) {
    return q({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function _E(e, n, a, u) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]")
      ? (u.loading = 1)
      : ((n = e.createElement("link")),
        (u.preload = n),
        n.addEventListener("load", function () {
          return (u.loading |= 1);
        }),
        n.addEventListener("error", function () {
          return (u.loading |= 2);
        }),
        Ee(n, "link", a),
        ce(n),
        e.head.appendChild(n));
  }
  function Kr(e) {
    return '[src="' + oi(e) + '"]';
  }
  function ma(e) {
    return "script[async]" + e;
  }
  function v0(e, n, a) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case "style":
          var u = e.querySelector('style[data-href~="' + oi(a.href) + '"]');
          if (u) return (n.instance = u), ce(u), u;
          var f = q({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (e.ownerDocument || e).createElement("style")),
            ce(u),
            Ee(u, "style", f),
            nu(u, a.precedence, e),
            (n.instance = u)
          );
        case "stylesheet":
          f = Zr(a.href);
          var g = e.querySelector(_a(f));
          if (g) return (n.state.loading |= 4), (n.instance = g), ce(g), g;
          (u = p0(a)),
            (f = pi.get(f)) && ff(u, f),
            (g = (e.ownerDocument || e).createElement("link")),
            ce(g);
          var p = g;
          return (
            (p._p = new Promise(function (S, T) {
              (p.onload = S), (p.onerror = T);
            })),
            Ee(g, "link", u),
            (n.state.loading |= 4),
            nu(g, a.precedence, e),
            (n.instance = g)
          );
        case "script":
          return (
            (g = Kr(a.src)),
            (f = e.querySelector(ma(g)))
              ? ((n.instance = f), ce(f), f)
              : ((u = a),
                (f = pi.get(g)) && ((u = q({}, a)), df(u, f)),
                (e = e.ownerDocument || e),
                (f = e.createElement("script")),
                ce(f),
                Ee(f, "link", u),
                e.head.appendChild(f),
                (n.instance = f))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, n.type));
      }
    else
      n.type === "stylesheet" &&
        (n.state.loading & 4) === 0 &&
        ((u = n.instance), (n.state.loading |= 4), nu(u, a.precedence, e));
    return n.instance;
  }
  function nu(e, n, a) {
    for (
      var u = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        f = u.length ? u[u.length - 1] : null,
        g = f,
        p = 0;
      p < u.length;
      p++
    ) {
      var S = u[p];
      if (S.dataset.precedence === n) g = S;
      else if (g !== f) break;
    }
    g
      ? g.parentNode.insertBefore(e, g.nextSibling)
      : ((n = a.nodeType === 9 ? a.head : a), n.insertBefore(e, n.firstChild));
  }
  function ff(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.title == null && (e.title = n.title);
  }
  function df(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.integrity == null && (e.integrity = n.integrity);
  }
  var su = null;
  function E0(e, n, a) {
    if (su === null) {
      var u = new Map(),
        f = (su = new Map());
      f.set(a, u);
    } else (f = su), (u = f.get(a)), u || ((u = new Map()), f.set(a, u));
    if (u.has(e)) return u;
    for (
      u.set(e, null), a = a.getElementsByTagName(e), f = 0;
      f < a.length;
      f++
    ) {
      var g = a[f];
      if (
        !(
          g[Ol] ||
          g[Re] ||
          (e === "link" && g.getAttribute("rel") === "stylesheet")
        ) &&
        g.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var p = g.getAttribute(n) || "";
        p = e + p;
        var S = u.get(p);
        S ? S.push(g) : u.set(p, [g]);
      }
    }
    return u;
  }
  function S0(e, n, a) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        n === "title" ? e.querySelector("head > title") : null,
      );
  }
  function mE(e, n, a) {
    if (a === 1 || n.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof n.precedence != "string" ||
          typeof n.href != "string" ||
          n.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof n.rel != "string" ||
          typeof n.href != "string" ||
          n.href === "" ||
          n.onLoad ||
          n.onError
        )
          break;
        switch (n.rel) {
          case "stylesheet":
            return (
              (e = n.disabled), typeof n.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          n.async &&
          typeof n.async != "function" &&
          typeof n.async != "symbol" &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function x0(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var ya = null;
  function yE() {}
  function pE(e, n, a) {
    if (ya === null) throw Error(s(475));
    var u = ya;
    if (
      n.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var f = Zr(a.href),
          g = e.querySelector(_a(f));
        if (g) {
          (e = g._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (u.count++, (u = ru.bind(u)), e.then(u, u)),
            (n.state.loading |= 4),
            (n.instance = g),
            ce(g);
          return;
        }
        (g = e.ownerDocument || e),
          (a = p0(a)),
          (f = pi.get(f)) && ff(a, f),
          (g = g.createElement("link")),
          ce(g);
        var p = g;
        (p._p = new Promise(function (S, T) {
          (p.onload = S), (p.onerror = T);
        })),
          Ee(g, "link", a),
          (n.instance = g);
      }
      u.stylesheets === null && (u.stylesheets = new Map()),
        u.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (u.count++,
          (n = ru.bind(u)),
          e.addEventListener("load", n),
          e.addEventListener("error", n));
    }
  }
  function vE() {
    if (ya === null) throw Error(s(475));
    var e = ya;
    return (
      e.stylesheets && e.count === 0 && gf(e, e.stylesheets),
      0 < e.count
        ? function (n) {
            var a = setTimeout(function () {
              if ((e.stylesheets && gf(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                (e.unsuspend = null), u();
              }
            }, 6e4);
            return (
              (e.unsuspend = n),
              function () {
                (e.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function ru() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) gf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var lu = null;
  function gf(e, n) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (lu = new Map()),
        n.forEach(EE, e),
        (lu = null),
        ru.call(e));
  }
  function EE(e, n) {
    if (!(n.state.loading & 4)) {
      var a = lu.get(e);
      if (a) var u = a.get(null);
      else {
        (a = new Map()), lu.set(e, a);
        for (
          var f = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            g = 0;
          g < f.length;
          g++
        ) {
          var p = f[g];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") &&
            (a.set(p.dataset.precedence, p), (u = p));
        }
        u && a.set(null, u);
      }
      (f = n.instance),
        (p = f.getAttribute("data-precedence")),
        (g = a.get(p) || u),
        g === u && a.set(null, f),
        a.set(p, f),
        this.count++,
        (u = ru.bind(this)),
        f.addEventListener("load", u),
        f.addEventListener("error", u),
        g
          ? g.parentNode.insertBefore(f, g.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(f, e.firstChild)),
        (n.state.loading |= 4);
    }
  }
  var pa = {
    $$typeof: E,
    Provider: null,
    Consumer: null,
    _currentValue: lt,
    _currentValue2: lt,
    _threadCount: 0,
  };
  function SE(e, n, a, u, f, g, p, S) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ce(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ce(0)),
      (this.hiddenUpdates = Ce(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = f),
      (this.onCaughtError = g),
      (this.onRecoverableError = p),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = S),
      (this.incompleteTransitions = new Map());
  }
  function T0(e, n, a, u, f, g, p, S, T, O, k, K) {
    return (
      (e = new SE(e, n, a, p, S, T, O, K)),
      (n = 1),
      g === !0 && (n |= 24),
      (g = mi(3, null, null, n)),
      (e.current = g),
      (g.stateNode = e),
      (n = jc()),
      n.refCount++,
      (e.pooledCache = n),
      n.refCount++,
      (g.memoizedState = { element: u, isDehydrated: a, cache: n }),
      Rh(g),
      e
    );
  }
  function C0(e) {
    return e ? ((e = Rr), e) : Rr;
  }
  function R0(e, n, a, u, f, g) {
    (f = C0(f)),
      u.context === null ? (u.context = f) : (u.pendingContext = f),
      (u = Kn(n)),
      (u.payload = { element: a }),
      (g = g === void 0 ? null : g),
      g !== null && (u.callback = g),
      (a = Vn(e, u, n)),
      a !== null && (Ge(a, e, n), ea(a, e, n));
  }
  function b0(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function _f(e, n) {
    b0(e, n), (e = e.alternate) && b0(e, n);
  }
  function w0(e) {
    if (e.tag === 13) {
      var n = Yn(e, 67108864);
      n !== null && Ge(n, e, 67108864), _f(e, 67108864);
    }
  }
  var au = !0;
  function xE(e, n, a, u) {
    var f = F.T;
    F.T = null;
    var g = J.p;
    try {
      (J.p = 2), mf(e, n, a, u);
    } finally {
      (J.p = g), (F.T = f);
    }
  }
  function TE(e, n, a, u) {
    var f = F.T;
    F.T = null;
    var g = J.p;
    try {
      (J.p = 8), mf(e, n, a, u);
    } finally {
      (J.p = g), (F.T = f);
    }
  }
  function mf(e, n, a, u) {
    if (au) {
      var f = yf(u);
      if (f === null) sf(e, n, u, ou, a), M0(e, u);
      else if (RE(f, e, n, a, u)) u.stopPropagation();
      else if ((M0(e, u), n & 4 && -1 < CE.indexOf(e))) {
        for (; f !== null; ) {
          var g = gr(f);
          if (g !== null)
            switch (g.tag) {
              case 3:
                if (((g = g.stateNode), g.current.memoizedState.isDehydrated)) {
                  var p = Hi(g.pendingLanes);
                  if (p !== 0) {
                    var S = g;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; p; ) {
                      var T = 1 << (31 - Te(p));
                      (S.entanglements[1] |= T), (p &= ~T);
                    }
                    qi(g), (qt & 6) === 0 && ((jo = Pt() + 500), fa(0));
                  }
                }
                break;
              case 13:
                (S = Yn(g, 2)), S !== null && Ge(S, g, 2), Vo(), _f(g, 2);
            }
          if (((g = yf(u)), g === null && sf(e, n, u, ou, a), g === f)) break;
          f = g;
        }
        f !== null && u.stopPropagation();
      } else sf(e, n, u, null, a);
    }
  }
  function yf(e) {
    return (e = xc(e)), pf(e);
  }
  var ou = null;
  function pf(e) {
    if (((ou = null), (e = Ms(e)), e !== null)) {
      var n = W(e);
      if (n === null) e = null;
      else {
        var a = n.tag;
        if (a === 13) {
          if (((e = $(n)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return (ou = e), null;
  }
  function A0(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (bl()) {
          case Cs:
            return 2;
          case Rs:
            return 8;
          case fr:
          case no:
            return 32;
          case wl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var vf = !1,
    es = null,
    is = null,
    ns = null,
    va = new Map(),
    Ea = new Map(),
    ss = [],
    CE =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function M0(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        es = null;
        break;
      case "dragenter":
      case "dragleave":
        is = null;
        break;
      case "mouseover":
      case "mouseout":
        ns = null;
        break;
      case "pointerover":
      case "pointerout":
        va.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ea.delete(n.pointerId);
    }
  }
  function Sa(e, n, a, u, f, g) {
    return e === null || e.nativeEvent !== g
      ? ((e = {
          blockedOn: n,
          domEventName: a,
          eventSystemFlags: u,
          nativeEvent: g,
          targetContainers: [f],
        }),
        n !== null && ((n = gr(n)), n !== null && w0(n)),
        e)
      : ((e.eventSystemFlags |= u),
        (n = e.targetContainers),
        f !== null && n.indexOf(f) === -1 && n.push(f),
        e);
  }
  function RE(e, n, a, u, f) {
    switch (n) {
      case "focusin":
        return (es = Sa(es, e, n, a, u, f)), !0;
      case "dragenter":
        return (is = Sa(is, e, n, a, u, f)), !0;
      case "mouseover":
        return (ns = Sa(ns, e, n, a, u, f)), !0;
      case "pointerover":
        var g = f.pointerId;
        return va.set(g, Sa(va.get(g) || null, e, n, a, u, f)), !0;
      case "gotpointercapture":
        return (
          (g = f.pointerId), Ea.set(g, Sa(Ea.get(g) || null, e, n, a, u, f)), !0
        );
    }
    return !1;
  }
  function O0(e) {
    var n = Ms(e.target);
    if (n !== null) {
      var a = W(n);
      if (a !== null) {
        if (((n = a.tag), n === 13)) {
          if (((n = $(a)), n !== null)) {
            (e.blockedOn = n),
              v1(e.priority, function () {
                if (a.tag === 13) {
                  var u = ii(),
                    f = Yn(a, u);
                  f !== null && Ge(f, a, u), _f(a, u);
                }
              });
            return;
          }
        } else if (n === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function uu(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var a = yf(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var u = new a.constructor(a.type, a);
        (Sc = u), a.target.dispatchEvent(u), (Sc = null);
      } else return (n = gr(a)), n !== null && w0(n), (e.blockedOn = a), !1;
      n.shift();
    }
    return !0;
  }
  function D0(e, n, a) {
    uu(e) && a.delete(n);
  }
  function bE() {
    (vf = !1),
      es !== null && uu(es) && (es = null),
      is !== null && uu(is) && (is = null),
      ns !== null && uu(ns) && (ns = null),
      va.forEach(D0),
      Ea.forEach(D0);
  }
  function cu(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      vf ||
        ((vf = !0),
        r.unstable_scheduleCallback(r.unstable_NormalPriority, bE)));
  }
  var hu = null;
  function L0(e) {
    hu !== e &&
      ((hu = e),
      r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
        hu === e && (hu = null);
        for (var n = 0; n < e.length; n += 3) {
          var a = e[n],
            u = e[n + 1],
            f = e[n + 2];
          if (typeof u != "function") {
            if (pf(u || a) === null) continue;
            break;
          }
          var g = gr(a);
          g !== null &&
            (e.splice(n, 3),
            (n -= 3),
            ah(g, { pending: !0, data: f, method: a.method, action: u }, u, f));
        }
      }));
  }
  function xa(e) {
    function n(T) {
      return cu(T, e);
    }
    es !== null && cu(es, e),
      is !== null && cu(is, e),
      ns !== null && cu(ns, e),
      va.forEach(n),
      Ea.forEach(n);
    for (var a = 0; a < ss.length; a++) {
      var u = ss[a];
      u.blockedOn === e && (u.blockedOn = null);
    }
    for (; 0 < ss.length && ((a = ss[0]), a.blockedOn === null); )
      O0(a), a.blockedOn === null && ss.shift();
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (u = 0; u < a.length; u += 3) {
        var f = a[u],
          g = a[u + 1],
          p = f[Ye] || null;
        if (typeof g == "function") p || L0(a);
        else if (p) {
          var S = null;
          if (g && g.hasAttribute("formAction")) {
            if (((f = g), (p = g[Ye] || null))) S = p.formAction;
            else if (pf(f) !== null) continue;
          } else S = p.action;
          typeof S == "function" ? (a[u + 1] = S) : (a.splice(u, 3), (u -= 3)),
            L0(a);
        }
      }
  }
  function Ef(e) {
    this._internalRoot = e;
  }
  (fu.prototype.render = Ef.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(s(409));
      var a = n.current,
        u = ii();
      R0(a, u, e, n, null, null);
    }),
    (fu.prototype.unmount = Ef.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          e.tag === 0 && kr(),
            R0(e.current, 2, null, e, null, null),
            Vo(),
            (n[dr] = null);
        }
      });
  function fu(e) {
    this._internalRoot = e;
  }
  fu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = ro();
      e = { blockedOn: null, target: e, priority: n };
      for (var a = 0; a < ss.length && n !== 0 && n < ss[a].priority; a++);
      ss.splice(a, 0, e), a === 0 && O0(e);
    }
  };
  var I0 = t.version;
  if (I0 !== "19.0.0") throw Error(s(527, I0, "19.0.0"));
  J.findDOMNode = function (e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function"
        ? Error(s(188))
        : ((e = Object.keys(e).join(",")), Error(s(268, e)));
    return (
      (e = X(n)),
      (e = e !== null ? U(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var wE = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: F,
    findFiberByHostInstance: Ms,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var du = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!du.isDisabled && du.supportsFiber)
      try {
        (bs = du.inject(wE)), (xe = du);
      } catch {}
  }
  return (
    (Ta.createRoot = function (e, n) {
      if (!l(e)) throw Error(s(299));
      var a = !1,
        u = "",
        f = W_,
        g = Q_,
        p = J_,
        S = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (f = n.onUncaughtError),
          n.onCaughtError !== void 0 && (g = n.onCaughtError),
          n.onRecoverableError !== void 0 && (p = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (S = n.unstable_transitionCallbacks)),
        (n = T0(e, 1, !1, null, null, a, u, f, g, p, S, null)),
        (e[dr] = n.current),
        nf(e.nodeType === 8 ? e.parentNode : e),
        new Ef(n)
      );
    }),
    (Ta.hydrateRoot = function (e, n, a) {
      if (!l(e)) throw Error(s(299));
      var u = !1,
        f = "",
        g = W_,
        p = Q_,
        S = J_,
        T = null,
        O = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (u = !0),
          a.identifierPrefix !== void 0 && (f = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (g = a.onUncaughtError),
          a.onCaughtError !== void 0 && (p = a.onCaughtError),
          a.onRecoverableError !== void 0 && (S = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (T = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (O = a.formState)),
        (n = T0(e, 1, !0, n, a ?? null, u, f, g, p, S, T, O)),
        (n.context = C0(null)),
        (a = n.current),
        (u = ii()),
        (f = Kn(u)),
        (f.callback = null),
        Vn(a, f, u),
        (n.current.lanes = u),
        ze(n, u),
        qi(n),
        (e[dr] = n.current),
        nf(e),
        new fu(n)
      );
    }),
    (Ta.version = "19.0.0"),
    Ta
  );
}
var k0;
function UE() {
  if (k0) return xf.exports;
  k0 = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (t) {
        console.error(t);
      }
  }
  return r(), (xf.exports = FE()), xf.exports;
}
var XE = UE();
const Be = { ADD: "add", REMOVE: "remove" },
  fl = { PROPERTYCHANGE: "propertychange" },
  pt = {
    CHANGE: "change",
    ERROR: "error",
    CONTEXTMENU: "contextmenu",
    CLICK: "click",
    DBLCLICK: "dblclick",
    KEYDOWN: "keydown",
    KEYPRESS: "keypress",
    LOAD: "load",
    TOUCHMOVE: "touchmove",
    WHEEL: "wheel",
  };
class Zu {
  constructor() {
    this.disposed = !1;
  }
  dispose() {
    this.disposed || ((this.disposed = !0), this.disposeInternal());
  }
  disposeInternal() {}
}
function YE(r, t, i) {
  let s, l;
  i = i || On;
  let o = 0,
    c = r.length,
    h = !1;
  for (; o < c; )
    (s = o + ((c - o) >> 1)),
      (l = +i(r[s], t)),
      l < 0 ? (o = s + 1) : ((c = s), (h = !l));
  return h ? o : ~o;
}
function On(r, t) {
  return r > t ? 1 : r < t ? -1 : 0;
}
function PE(r, t) {
  return r < t ? 1 : r > t ? -1 : 0;
}
function gd(r, t, i) {
  if (r[0] <= t) return 0;
  const s = r.length;
  if (t <= r[s - 1]) return s - 1;
  if (typeof i == "function") {
    for (let l = 1; l < s; ++l) {
      const o = r[l];
      if (o === t) return l;
      if (o < t) return i(t, r[l - 1], o) > 0 ? l - 1 : l;
    }
    return s - 1;
  }
  if (i > 0) {
    for (let l = 1; l < s; ++l) if (r[l] < t) return l - 1;
    return s - 1;
  }
  if (i < 0) {
    for (let l = 1; l < s; ++l) if (r[l] <= t) return l;
    return s - 1;
  }
  for (let l = 1; l < s; ++l) {
    if (r[l] == t) return l;
    if (r[l] < t) return r[l - 1] - t < t - r[l] ? l - 1 : l;
  }
  return s - 1;
}
function kE(r, t, i) {
  for (; t < i; ) {
    const s = r[t];
    (r[t] = r[i]), (r[i] = s), ++t, --i;
  }
}
function en(r, t) {
  const i = Array.isArray(t) ? t : [t],
    s = i.length;
  for (let l = 0; l < s; l++) r[r.length] = i[l];
}
function Ts(r, t) {
  const i = r.length;
  if (i !== t.length) return !1;
  for (let s = 0; s < i; s++) if (r[s] !== t[s]) return !1;
  return !0;
}
function BE(r, t, i) {
  const s = t || On;
  return r.every(function (l, o) {
    if (o === 0) return !0;
    const c = s(r[o - 1], l);
    return !(c > 0 || c === 0);
  });
}
function Na() {
  return !0;
}
function Ku() {
  return !1;
}
function dl() {}
function Ky(r) {
  let t, i, s;
  return function () {
    const l = Array.prototype.slice.call(arguments);
    return (
      (!i || this !== s || !Ts(l, i)) &&
        ((s = this), (i = l), (t = r.apply(this, arguments))),
      t
    );
  };
}
function HE(r) {
  function t() {
    let i;
    try {
      i = r();
    } catch (s) {
      return Promise.reject(s);
    }
    return i instanceof Promise ? i : Promise.resolve(i);
  }
  return t();
}
function Ka(r) {
  for (const t in r) delete r[t];
}
function rr(r) {
  let t;
  for (t in r) return !1;
  return !t;
}
class Gn {
  constructor(t) {
    this.propagationStopped,
      this.defaultPrevented,
      (this.type = t),
      (this.target = null);
  }
  preventDefault() {
    this.defaultPrevented = !0;
  }
  stopPropagation() {
    this.propagationStopped = !0;
  }
}
class Vu extends Zu {
  constructor(t) {
    super(),
      (this.eventTarget_ = t),
      (this.pendingRemovals_ = null),
      (this.dispatching_ = null),
      (this.listeners_ = null);
  }
  addEventListener(t, i) {
    if (!t || !i) return;
    const s = this.listeners_ || (this.listeners_ = {}),
      l = s[t] || (s[t] = []);
    l.includes(i) || l.push(i);
  }
  dispatchEvent(t) {
    const i = typeof t == "string",
      s = i ? t : t.type,
      l = this.listeners_ && this.listeners_[s];
    if (!l) return;
    const o = i ? new Gn(t) : t;
    o.target || (o.target = this.eventTarget_ || this);
    const c = this.dispatching_ || (this.dispatching_ = {}),
      h = this.pendingRemovals_ || (this.pendingRemovals_ = {});
    s in c || ((c[s] = 0), (h[s] = 0)), ++c[s];
    let d;
    for (let _ = 0, m = l.length; _ < m; ++_)
      if (
        ("handleEvent" in l[_]
          ? (d = l[_].handleEvent(o))
          : (d = l[_].call(this, o)),
        d === !1 || o.propagationStopped)
      ) {
        d = !1;
        break;
      }
    if (--c[s] === 0) {
      let _ = h[s];
      for (delete h[s]; _--; ) this.removeEventListener(s, dl);
      delete c[s];
    }
    return d;
  }
  disposeInternal() {
    this.listeners_ && Ka(this.listeners_);
  }
  getListeners(t) {
    return (this.listeners_ && this.listeners_[t]) || void 0;
  }
  hasListener(t) {
    return this.listeners_
      ? t
        ? t in this.listeners_
        : Object.keys(this.listeners_).length > 0
      : !1;
  }
  removeEventListener(t, i) {
    if (!this.listeners_) return;
    const s = this.listeners_[t];
    if (!s) return;
    const l = s.indexOf(i);
    l !== -1 &&
      (this.pendingRemovals_ && t in this.pendingRemovals_
        ? ((s[l] = dl), ++this.pendingRemovals_[t])
        : (s.splice(l, 1), s.length === 0 && delete this.listeners_[t]));
  }
}
function Mt(r, t, i, s, l) {
  if (l) {
    const c = i;
    i = function (h) {
      return r.removeEventListener(t, i), c.call(s ?? this, h);
    };
  } else s && s !== r && (i = i.bind(s));
  const o = { target: r, type: t, listener: i };
  return r.addEventListener(t, i), o;
}
function wu(r, t, i, s) {
  return Mt(r, t, i, s, !0);
}
function jt(r) {
  r && r.target && (r.target.removeEventListener(r.type, r.listener), Ka(r));
}
class Va extends Vu {
  constructor() {
    super(),
      (this.on = this.onInternal),
      (this.once = this.onceInternal),
      (this.un = this.unInternal),
      (this.revision_ = 0);
  }
  changed() {
    ++this.revision_, this.dispatchEvent(pt.CHANGE);
  }
  getRevision() {
    return this.revision_;
  }
  onInternal(t, i) {
    if (Array.isArray(t)) {
      const s = t.length,
        l = new Array(s);
      for (let o = 0; o < s; ++o) l[o] = Mt(this, t[o], i);
      return l;
    }
    return Mt(this, t, i);
  }
  onceInternal(t, i) {
    let s;
    if (Array.isArray(t)) {
      const l = t.length;
      s = new Array(l);
      for (let o = 0; o < l; ++o) s[o] = wu(this, t[o], i);
    } else s = wu(this, t, i);
    return (i.ol_key = s), s;
  }
  unInternal(t, i) {
    const s = i.ol_key;
    if (s) jE(s);
    else if (Array.isArray(t))
      for (let l = 0, o = t.length; l < o; ++l)
        this.removeEventListener(t[l], i);
    else this.removeEventListener(t, i);
  }
}
Va.prototype.on;
Va.prototype.once;
Va.prototype.un;
function jE(r) {
  if (Array.isArray(r)) for (let t = 0, i = r.length; t < i; ++t) jt(r[t]);
  else jt(r);
}
function _t() {
  throw new Error("Unimplemented abstract method.");
}
let ZE = 0;
function zt(r) {
  return r.ol_uid || (r.ol_uid = String(++ZE));
}
class B0 extends Gn {
  constructor(t, i, s) {
    super(t), (this.key = i), (this.oldValue = s);
  }
}
class Ui extends Va {
  constructor(t) {
    super(),
      this.on,
      this.once,
      this.un,
      zt(this),
      (this.values_ = null),
      t !== void 0 && this.setProperties(t);
  }
  get(t) {
    let i;
    return (
      this.values_ && this.values_.hasOwnProperty(t) && (i = this.values_[t]), i
    );
  }
  getKeys() {
    return (this.values_ && Object.keys(this.values_)) || [];
  }
  getProperties() {
    return (this.values_ && Object.assign({}, this.values_)) || {};
  }
  getPropertiesInternal() {
    return this.values_;
  }
  hasProperties() {
    return !!this.values_;
  }
  notify(t, i) {
    let s;
    (s = `change:${t}`),
      this.hasListener(s) && this.dispatchEvent(new B0(s, t, i)),
      (s = fl.PROPERTYCHANGE),
      this.hasListener(s) && this.dispatchEvent(new B0(s, t, i));
  }
  addChangeListener(t, i) {
    this.addEventListener(`change:${t}`, i);
  }
  removeChangeListener(t, i) {
    this.removeEventListener(`change:${t}`, i);
  }
  set(t, i, s) {
    const l = this.values_ || (this.values_ = {});
    if (s) l[t] = i;
    else {
      const o = l[t];
      (l[t] = i), o !== i && this.notify(t, o);
    }
  }
  setProperties(t, i) {
    for (const s in t) this.set(s, t[s], i);
  }
  applyProperties(t) {
    t.values_ && Object.assign(this.values_ || (this.values_ = {}), t.values_);
  }
  unset(t, i) {
    if (this.values_ && t in this.values_) {
      const s = this.values_[t];
      delete this.values_[t],
        rr(this.values_) && (this.values_ = null),
        i || this.notify(t, s);
    }
  }
}
const H0 = { LENGTH: "length" };
class gu extends Gn {
  constructor(t, i, s) {
    super(t), (this.element = i), (this.index = s);
  }
}
class $i extends Ui {
  constructor(t, i) {
    if (
      (super(),
      this.on,
      this.once,
      this.un,
      (i = i || {}),
      (this.unique_ = !!i.unique),
      (this.array_ = t || []),
      this.unique_)
    )
      for (let s = 0, l = this.array_.length; s < l; ++s)
        this.assertUnique_(this.array_[s], s);
    this.updateLength_();
  }
  clear() {
    for (; this.getLength() > 0; ) this.pop();
  }
  extend(t) {
    for (let i = 0, s = t.length; i < s; ++i) this.push(t[i]);
    return this;
  }
  forEach(t) {
    const i = this.array_;
    for (let s = 0, l = i.length; s < l; ++s) t(i[s], s, i);
  }
  getArray() {
    return this.array_;
  }
  item(t) {
    return this.array_[t];
  }
  getLength() {
    return this.get(H0.LENGTH);
  }
  insertAt(t, i) {
    if (t < 0 || t > this.getLength())
      throw new Error("Index out of bounds: " + t);
    this.unique_ && this.assertUnique_(i),
      this.array_.splice(t, 0, i),
      this.updateLength_(),
      this.dispatchEvent(new gu(Be.ADD, i, t));
  }
  pop() {
    return this.removeAt(this.getLength() - 1);
  }
  push(t) {
    this.unique_ && this.assertUnique_(t);
    const i = this.getLength();
    return this.insertAt(i, t), this.getLength();
  }
  remove(t) {
    const i = this.array_;
    for (let s = 0, l = i.length; s < l; ++s)
      if (i[s] === t) return this.removeAt(s);
  }
  removeAt(t) {
    if (t < 0 || t >= this.getLength()) return;
    const i = this.array_[t];
    return (
      this.array_.splice(t, 1),
      this.updateLength_(),
      this.dispatchEvent(new gu(Be.REMOVE, i, t)),
      i
    );
  }
  setAt(t, i) {
    const s = this.getLength();
    if (t >= s) {
      this.insertAt(t, i);
      return;
    }
    if (t < 0) throw new Error("Index out of bounds: " + t);
    this.unique_ && this.assertUnique_(i, t);
    const l = this.array_[t];
    (this.array_[t] = i),
      this.dispatchEvent(new gu(Be.REMOVE, l, t)),
      this.dispatchEvent(new gu(Be.ADD, i, t));
  }
  updateLength_() {
    this.set(H0.LENGTH, this.array_.length);
  }
  assertUnique_(t, i) {
    for (let s = 0, l = this.array_.length; s < l; ++s)
      if (this.array_[s] === t && s !== i)
        throw new Error("Duplicate item added to a unique collection");
  }
}
function Lt(r, t) {
  if (!r) throw new Error(t);
}
class qu extends Ui {
  constructor(t) {
    if (
      (super(),
      this.on,
      this.once,
      this.un,
      (this.id_ = void 0),
      (this.geometryName_ = "geometry"),
      (this.style_ = null),
      (this.styleFunction_ = void 0),
      (this.geometryChangeKey_ = null),
      this.addChangeListener(this.geometryName_, this.handleGeometryChanged_),
      t)
    )
      if (typeof t.getSimplifiedGeometry == "function") {
        const i = t;
        this.setGeometry(i);
      } else {
        const i = t;
        this.setProperties(i);
      }
  }
  clone() {
    const t = new qu(this.hasProperties() ? this.getProperties() : null);
    t.setGeometryName(this.getGeometryName());
    const i = this.getGeometry();
    i && t.setGeometry(i.clone());
    const s = this.getStyle();
    return s && t.setStyle(s), t;
  }
  getGeometry() {
    return this.get(this.geometryName_);
  }
  getId() {
    return this.id_;
  }
  getGeometryName() {
    return this.geometryName_;
  }
  getStyle() {
    return this.style_;
  }
  getStyleFunction() {
    return this.styleFunction_;
  }
  handleGeometryChange_() {
    this.changed();
  }
  handleGeometryChanged_() {
    this.geometryChangeKey_ &&
      (jt(this.geometryChangeKey_), (this.geometryChangeKey_ = null));
    const t = this.getGeometry();
    t &&
      (this.geometryChangeKey_ = Mt(
        t,
        pt.CHANGE,
        this.handleGeometryChange_,
        this,
      )),
      this.changed();
  }
  setGeometry(t) {
    this.set(this.geometryName_, t);
  }
  setStyle(t) {
    (this.style_ = t),
      (this.styleFunction_ = t ? KE(t) : void 0),
      this.changed();
  }
  setId(t) {
    (this.id_ = t), this.changed();
  }
  setGeometryName(t) {
    this.removeChangeListener(this.geometryName_, this.handleGeometryChanged_),
      (this.geometryName_ = t),
      this.addChangeListener(this.geometryName_, this.handleGeometryChanged_),
      this.handleGeometryChanged_();
  }
}
function KE(r) {
  if (typeof r == "function") return r;
  let t;
  return (
    Array.isArray(r)
      ? (t = r)
      : (Lt(
          typeof r.getZIndex == "function",
          "Expected an `ol/style/Style` or an array of `ol/style/Style.js`",
        ),
        (t = [r])),
    function () {
      return t;
    }
  );
}
const ge = {
  UNKNOWN: 0,
  INTERSECTING: 1,
  ABOVE: 2,
  RIGHT: 4,
  BELOW: 8,
  LEFT: 16,
};
function j0(r) {
  const t = Ti();
  for (let i = 0, s = r.length; i < s; ++i) za(t, r[i]);
  return t;
}
function VE(r, t, i) {
  const s = Math.min.apply(null, r),
    l = Math.min.apply(null, t),
    o = Math.max.apply(null, r),
    c = Math.max.apply(null, t);
  return In(s, l, o, c, i);
}
function _d(r, t, i) {
  return i
    ? ((i[0] = r[0] - t),
      (i[1] = r[1] - t),
      (i[2] = r[2] + t),
      (i[3] = r[3] + t),
      i)
    : [r[0] - t, r[1] - t, r[2] + t, r[3] + t];
}
function Vy(r, t) {
  return t
    ? ((t[0] = r[0]), (t[1] = r[1]), (t[2] = r[2]), (t[3] = r[3]), t)
    : r.slice();
}
function ar(r, t, i) {
  let s, l;
  return (
    t < r[0] ? (s = r[0] - t) : r[2] < t ? (s = t - r[2]) : (s = 0),
    i < r[1] ? (l = r[1] - i) : r[3] < i ? (l = i - r[3]) : (l = 0),
    s * s + l * l
  );
}
function gl(r, t) {
  return md(r, t[0], t[1]);
}
function rl(r, t) {
  return r[0] <= t[0] && t[2] <= r[2] && r[1] <= t[1] && t[3] <= r[3];
}
function md(r, t, i) {
  return r[0] <= t && t <= r[2] && r[1] <= i && i <= r[3];
}
function Vf(r, t) {
  const i = r[0],
    s = r[1],
    l = r[2],
    o = r[3],
    c = t[0],
    h = t[1];
  let d = ge.UNKNOWN;
  return (
    c < i ? (d = d | ge.LEFT) : c > l && (d = d | ge.RIGHT),
    h < s ? (d = d | ge.BELOW) : h > o && (d = d | ge.ABOVE),
    d === ge.UNKNOWN && (d = ge.INTERSECTING),
    d
  );
}
function Ti() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
}
function In(r, t, i, s, l) {
  return l ? ((l[0] = r), (l[1] = t), (l[2] = i), (l[3] = s), l) : [r, t, i, s];
}
function xl(r) {
  return In(1 / 0, 1 / 0, -1 / 0, -1 / 0, r);
}
function qy(r, t) {
  const i = r[0],
    s = r[1];
  return In(i, s, i, s, t);
}
function yd(r, t, i, s, l) {
  const o = xl(l);
  return Qy(o, r, t, i, s);
}
function Ga(r, t) {
  return r[0] == t[0] && r[2] == t[2] && r[1] == t[1] && r[3] == t[3];
}
function Wy(r, t) {
  return (
    t[0] < r[0] && (r[0] = t[0]),
    t[2] > r[2] && (r[2] = t[2]),
    t[1] < r[1] && (r[1] = t[1]),
    t[3] > r[3] && (r[3] = t[3]),
    r
  );
}
function za(r, t) {
  t[0] < r[0] && (r[0] = t[0]),
    t[0] > r[2] && (r[2] = t[0]),
    t[1] < r[1] && (r[1] = t[1]),
    t[1] > r[3] && (r[3] = t[1]);
}
function Qy(r, t, i, s, l) {
  for (; i < s; i += l) qE(r, t[i], t[i + 1]);
  return r;
}
function qE(r, t, i) {
  (r[0] = Math.min(r[0], t)),
    (r[1] = Math.min(r[1], i)),
    (r[2] = Math.max(r[2], t)),
    (r[3] = Math.max(r[3], i));
}
function Jy(r, t) {
  let i;
  return (
    (i = t(Wu(r))),
    i || ((i = t(Qu(r))), i) || ((i = t(Ju(r))), i) || ((i = t(or(r))), i)
      ? i
      : !1
  );
}
function qf(r) {
  let t = 0;
  return qa(r) || (t = Ft(r) * Ue(r)), t;
}
function Wu(r) {
  return [r[0], r[1]];
}
function Qu(r) {
  return [r[2], r[1]];
}
function vs(r) {
  return [(r[0] + r[2]) / 2, (r[1] + r[3]) / 2];
}
function WE(r, t) {
  let i;
  if (t === "bottom-left") i = Wu(r);
  else if (t === "bottom-right") i = Qu(r);
  else if (t === "top-left") i = or(r);
  else if (t === "top-right") i = Ju(r);
  else throw new Error("Invalid corner");
  return i;
}
function Wf(r, t, i, s, l) {
  const [o, c, h, d, _, m, y, v] = $y(r, t, i, s);
  return In(
    Math.min(o, h, _, y),
    Math.min(c, d, m, v),
    Math.max(o, h, _, y),
    Math.max(c, d, m, v),
    l,
  );
}
function $y(r, t, i, s) {
  const l = (t * s[0]) / 2,
    o = (t * s[1]) / 2,
    c = Math.cos(i),
    h = Math.sin(i),
    d = l * c,
    _ = l * h,
    m = o * c,
    y = o * h,
    v = r[0],
    E = r[1];
  return [
    v - d + y,
    E - _ - m,
    v - d - y,
    E - _ + m,
    v + d - y,
    E + _ + m,
    v + d + y,
    E + _ - m,
    v - d + y,
    E - _ - m,
  ];
}
function Ue(r) {
  return r[3] - r[1];
}
function nr(r, t, i) {
  const s = i || Ti();
  return (
    Ze(r, t)
      ? (r[0] > t[0] ? (s[0] = r[0]) : (s[0] = t[0]),
        r[1] > t[1] ? (s[1] = r[1]) : (s[1] = t[1]),
        r[2] < t[2] ? (s[2] = r[2]) : (s[2] = t[2]),
        r[3] < t[3] ? (s[3] = r[3]) : (s[3] = t[3]))
      : xl(s),
    s
  );
}
function or(r) {
  return [r[0], r[3]];
}
function Ju(r) {
  return [r[2], r[3]];
}
function Ft(r) {
  return r[2] - r[0];
}
function Ze(r, t) {
  return r[0] <= t[2] && r[2] >= t[0] && r[1] <= t[3] && r[3] >= t[1];
}
function qa(r) {
  return r[2] < r[0] || r[3] < r[1];
}
function QE(r, t) {
  return t
    ? ((t[0] = r[0]), (t[1] = r[1]), (t[2] = r[2]), (t[3] = r[3]), t)
    : r;
}
function JE(r, t, i) {
  let s = !1;
  const l = Vf(r, t),
    o = Vf(r, i);
  if (l === ge.INTERSECTING || o === ge.INTERSECTING) s = !0;
  else {
    const c = r[0],
      h = r[1],
      d = r[2],
      _ = r[3],
      m = t[0],
      y = t[1],
      v = i[0],
      E = i[1],
      x = (E - y) / (v - m);
    let R, b;
    o & ge.ABOVE &&
      !(l & ge.ABOVE) &&
      ((R = v - (E - _) / x), (s = R >= c && R <= d)),
      !s &&
        o & ge.RIGHT &&
        !(l & ge.RIGHT) &&
        ((b = E - (v - d) * x), (s = b >= h && b <= _)),
      !s &&
        o & ge.BELOW &&
        !(l & ge.BELOW) &&
        ((R = v - (E - h) / x), (s = R >= c && R <= d)),
      !s &&
        o & ge.LEFT &&
        !(l & ge.LEFT) &&
        ((b = E - (v - c) * x), (s = b >= h && b <= _));
  }
  return s;
}
function $E(r, t, i, s) {
  if (qa(r)) return xl(i);
  let l = [];
  (l = [r[0], r[1], r[2], r[1], r[2], r[3], r[0], r[3]]), t(l, l, 2);
  const o = [],
    c = [];
  for (let h = 0, d = l.length; h < d; h += 2) o.push(l[h]), c.push(l[h + 1]);
  return VE(o, c, i);
}
function tp(r, t) {
  const i = t.getExtent(),
    s = vs(r);
  if (t.canWrapX() && (s[0] < i[0] || s[0] >= i[2])) {
    const l = Ft(i),
      c = Math.floor((s[0] - i[0]) / l) * l;
    (r[0] -= c), (r[2] -= c);
  }
  return r;
}
function ep(r, t, i) {
  if (t.canWrapX()) {
    const s = t.getExtent();
    if (!isFinite(r[0]) || !isFinite(r[2])) return [[s[0], r[1], s[2], r[3]]];
    tp(r, t);
    const l = Ft(s);
    if (Ft(r) > l && !i) return [[s[0], r[1], s[2], r[3]]];
    if (r[0] < s[0])
      return [
        [r[0] + l, r[1], s[2], r[3]],
        [s[0], r[1], r[2], r[3]],
      ];
    if (r[2] > s[2])
      return [
        [r[0], r[1], s[2], r[3]],
        [s[0], r[1], r[2] - l, r[3]],
      ];
  }
  return [r];
}
function se(r, t, i) {
  return Math.min(Math.max(r, t), i);
}
function tS(r, t, i, s, l, o) {
  const c = l - i,
    h = o - s;
  if (c !== 0 || h !== 0) {
    const d = ((r - i) * c + (t - s) * h) / (c * c + h * h);
    d > 1 ? ((i = l), (s = o)) : d > 0 && ((i += c * d), (s += h * d));
  }
  return sr(r, t, i, s);
}
function sr(r, t, i, s) {
  const l = i - r,
    o = s - t;
  return l * l + o * o;
}
function eS(r) {
  const t = r.length;
  for (let s = 0; s < t; s++) {
    let l = s,
      o = Math.abs(r[s][s]);
    for (let h = s + 1; h < t; h++) {
      const d = Math.abs(r[h][s]);
      d > o && ((o = d), (l = h));
    }
    if (o === 0) return null;
    const c = r[l];
    (r[l] = r[s]), (r[s] = c);
    for (let h = s + 1; h < t; h++) {
      const d = -r[h][s] / r[s][s];
      for (let _ = s; _ < t + 1; _++)
        s == _ ? (r[h][_] = 0) : (r[h][_] += d * r[s][_]);
    }
  }
  const i = new Array(t);
  for (let s = t - 1; s >= 0; s--) {
    i[s] = r[s][t] / r[s][s];
    for (let l = s - 1; l >= 0; l--) r[l][t] -= r[l][s] * i[s];
  }
  return i;
}
function Z0(r) {
  return (r * 180) / Math.PI;
}
function ys(r) {
  return (r * Math.PI) / 180;
}
function ol(r, t) {
  const i = r % t;
  return i * t < 0 ? i + t : i;
}
function ni(r, t, i) {
  return r + i * (t - r);
}
function pd(r, t) {
  const i = Math.pow(10, t);
  return Math.round(r * i) / i;
}
function _u(r, t) {
  return Math.floor(pd(r, t));
}
function mu(r, t) {
  return Math.ceil(pd(r, t));
}
function Qf(r, t, i) {
  if (r >= t && r < i) return r;
  const s = i - t;
  return ((((r - t) % s) + s) % s) + t;
}
const iS = 63710088e-1;
function K0(r, t, i) {
  i = i || iS;
  const s = ys(r[1]),
    l = ys(t[1]),
    o = (l - s) / 2,
    c = ys(t[0] - r[0]) / 2,
    h =
      Math.sin(o) * Math.sin(o) +
      Math.sin(c) * Math.sin(c) * Math.cos(s) * Math.cos(l);
  return 2 * i * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}
function ip(...r) {
  console.warn(...r);
}
function nS(r, t) {
  return (r[0] += +t[0]), (r[1] += +t[1]), r;
}
function Au(r, t) {
  let i = !0;
  for (let s = r.length - 1; s >= 0; --s)
    if (r[s] != t[s]) {
      i = !1;
      break;
    }
  return i;
}
function vd(r, t) {
  const i = Math.cos(t),
    s = Math.sin(t),
    l = r[0] * i - r[1] * s,
    o = r[1] * i + r[0] * s;
  return (r[0] = l), (r[1] = o), r;
}
function sS(r, t) {
  return (r[0] *= t), (r[1] *= t), r;
}
function np(r, t) {
  if (t.canWrapX()) {
    const i = Ft(t.getExtent()),
      s = rS(r, t, i);
    s && (r[0] -= s * i);
  }
  return r;
}
function rS(r, t, i) {
  const s = t.getExtent();
  let l = 0;
  return (
    t.canWrapX() &&
      (r[0] < s[0] || r[0] > s[2]) &&
      ((i = i || Ft(s)), (l = Math.floor((r[0] - s[0]) / i))),
    l
  );
}
const Ed = {
  radians: 6370997 / (2 * Math.PI),
  degrees: (2 * Math.PI * 6370997) / 360,
  ft: 0.3048,
  m: 1,
  "us-ft": 1200 / 3937,
};
class Sd {
  constructor(t) {
    (this.code_ = t.code),
      (this.units_ = t.units),
      (this.extent_ = t.extent !== void 0 ? t.extent : null),
      (this.worldExtent_ = t.worldExtent !== void 0 ? t.worldExtent : null),
      (this.axisOrientation_ =
        t.axisOrientation !== void 0 ? t.axisOrientation : "enu"),
      (this.global_ = t.global !== void 0 ? t.global : !1),
      (this.canWrapX_ = !!(this.global_ && this.extent_)),
      (this.getPointResolutionFunc_ = t.getPointResolution),
      (this.defaultTileGrid_ = null),
      (this.metersPerUnit_ = t.metersPerUnit);
  }
  canWrapX() {
    return this.canWrapX_;
  }
  getCode() {
    return this.code_;
  }
  getExtent() {
    return this.extent_;
  }
  getUnits() {
    return this.units_;
  }
  getMetersPerUnit() {
    return this.metersPerUnit_ || Ed[this.units_];
  }
  getWorldExtent() {
    return this.worldExtent_;
  }
  getAxisOrientation() {
    return this.axisOrientation_;
  }
  isGlobal() {
    return this.global_;
  }
  setGlobal(t) {
    (this.global_ = t), (this.canWrapX_ = !!(t && this.extent_));
  }
  getDefaultTileGrid() {
    return this.defaultTileGrid_;
  }
  setDefaultTileGrid(t) {
    this.defaultTileGrid_ = t;
  }
  setExtent(t) {
    (this.extent_ = t), (this.canWrapX_ = !!(this.global_ && t));
  }
  setWorldExtent(t) {
    this.worldExtent_ = t;
  }
  setGetPointResolution(t) {
    this.getPointResolutionFunc_ = t;
  }
  getPointResolutionFunc() {
    return this.getPointResolutionFunc_;
  }
}
const Wa = 6378137,
  ll = Math.PI * Wa,
  lS = [-ll, -ll, ll, ll],
  aS = [-180, -85, 180, 85],
  yu = Wa * Math.log(Math.tan(Math.PI / 2));
class Vr extends Sd {
  constructor(t) {
    super({
      code: t,
      units: "m",
      extent: lS,
      global: !0,
      worldExtent: aS,
      getPointResolution: function (i, s) {
        return i / Math.cosh(s[1] / Wa);
      },
    });
  }
}
const V0 = [
  new Vr("EPSG:3857"),
  new Vr("EPSG:102100"),
  new Vr("EPSG:102113"),
  new Vr("EPSG:900913"),
  new Vr("http://www.opengis.net/def/crs/EPSG/0/3857"),
  new Vr("http://www.opengis.net/gml/srs/epsg.xml#3857"),
];
function oS(r, t, i, s) {
  const l = r.length;
  (i = i > 1 ? i : 2),
    (s = s ?? i),
    t === void 0 && (i > 2 ? (t = r.slice()) : (t = new Array(l)));
  for (let o = 0; o < l; o += s) {
    t[o] = (ll * r[o]) / 180;
    let c = Wa * Math.log(Math.tan((Math.PI * (+r[o + 1] + 90)) / 360));
    c > yu ? (c = yu) : c < -yu && (c = -yu), (t[o + 1] = c);
  }
  return t;
}
function uS(r, t, i, s) {
  const l = r.length;
  (i = i > 1 ? i : 2),
    (s = s ?? i),
    t === void 0 && (i > 2 ? (t = r.slice()) : (t = new Array(l)));
  for (let o = 0; o < l; o += s)
    (t[o] = (180 * r[o]) / ll),
      (t[o + 1] = (360 * Math.atan(Math.exp(r[o + 1] / Wa))) / Math.PI - 90);
  return t;
}
const cS = 6378137,
  q0 = [-180, -90, 180, 90],
  hS = (Math.PI * cS) / 180;
class Ws extends Sd {
  constructor(t, i) {
    super({
      code: t,
      units: "degrees",
      extent: q0,
      axisOrientation: i,
      global: !0,
      metersPerUnit: hS,
      worldExtent: q0,
    });
  }
}
const W0 = [
  new Ws("CRS:84"),
  new Ws("EPSG:4326", "neu"),
  new Ws("urn:ogc:def:crs:OGC:1.3:CRS84"),
  new Ws("urn:ogc:def:crs:OGC:2:84"),
  new Ws("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),
  new Ws("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"),
  new Ws("http://www.opengis.net/def/crs/EPSG/0/4326", "neu"),
];
let Jf = {};
function fS(r) {
  return (
    Jf[r] ||
    Jf[r.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, "EPSG:$3")] ||
    null
  );
}
function dS(r, t) {
  Jf[r] = t;
}
let ul = {};
function Fa(r, t, i) {
  const s = r.getCode(),
    l = t.getCode();
  s in ul || (ul[s] = {}), (ul[s][l] = i);
}
function bf(r, t) {
  return r in ul && t in ul[r] ? ul[r][t] : null;
}
const Mu = 0.9996,
  xi = 0.00669438,
  $u = xi * xi,
  tc = $u * xi,
  $s = xi / (1 - xi),
  Q0 = Math.sqrt(1 - xi),
  _l = (1 - Q0) / (1 + Q0),
  sp = _l * _l,
  xd = sp * _l,
  Td = xd * _l,
  rp = Td * _l,
  lp = 1 - xi / 4 - (3 * $u) / 64 - (5 * tc) / 256,
  gS = (3 * xi) / 8 + (3 * $u) / 32 + (45 * tc) / 1024,
  _S = (15 * $u) / 256 + (45 * tc) / 1024,
  mS = (35 * tc) / 3072,
  yS = (3 / 2) * _l - (27 / 32) * xd + (269 / 512) * rp,
  pS = (21 / 16) * sp - (55 / 32) * Td,
  vS = (151 / 96) * xd - (417 / 128) * rp,
  ES = (1097 / 512) * Td,
  Ou = 6378137;
function SS(r, t, i) {
  const s = r - 5e5,
    c = (i.north ? t : t - 1e7) / Mu / (Ou * lp),
    h =
      c +
      yS * Math.sin(2 * c) +
      pS * Math.sin(4 * c) +
      vS * Math.sin(6 * c) +
      ES * Math.sin(8 * c),
    d = Math.sin(h),
    _ = d * d,
    m = Math.cos(h),
    y = d / m,
    v = y * y,
    E = v * v,
    x = 1 - xi * _,
    R = Math.sqrt(1 - xi * _),
    b = Ou / R,
    w = (1 - xi) / x,
    M = $s * m ** 2,
    G = M * M,
    I = s / (b * Mu),
    D = I * I,
    j = D * I,
    Q = j * I,
    Z = Q * I,
    F = Z * I,
    q =
      h -
      (y / w) * (D / 2 - (Q / 24) * (5 + 3 * v + 10 * M - 4 * G - 9 * $s)) +
      (F / 720) * (61 + 90 * v + 298 * M + 45 * E - 252 * $s - 3 * G);
  let rt =
    (I -
      (j / 6) * (1 + 2 * v + M) +
      (Z / 120) * (5 - 2 * M + 28 * v - 3 * G + 8 * $s + 24 * E)) /
    m;
  return (rt = Qf(rt + ys(ap(i.number)), -Math.PI, Math.PI)), [Z0(rt), Z0(q)];
}
const J0 = -80,
  $0 = 84,
  xS = -180,
  TS = 180;
function CS(r, t, i) {
  (r = Qf(r, xS, TS)), t < J0 ? (t = J0) : t > $0 && (t = $0);
  const s = ys(t),
    l = Math.sin(s),
    o = Math.cos(s),
    c = l / o,
    h = c * c,
    d = h * h,
    _ = ys(r),
    m = ap(i.number),
    y = ys(m),
    v = Ou / Math.sqrt(1 - xi * l ** 2),
    E = $s * o ** 2,
    x = o * Qf(_ - y, -Math.PI, Math.PI),
    R = x * x,
    b = R * x,
    w = b * x,
    M = w * x,
    G = M * x,
    I =
      Ou *
      (lp * s -
        gS * Math.sin(2 * s) +
        _S * Math.sin(4 * s) -
        mS * Math.sin(6 * s)),
    D =
      Mu *
        v *
        (x +
          (b / 6) * (1 - h + E) +
          (M / 120) * (5 - 18 * h + d + 72 * E - 58 * $s)) +
      5e5;
  let j =
    Mu *
    (I +
      v *
        c *
        (R / 2 +
          (w / 24) * (5 - h + 9 * E + 4 * E ** 2) +
          (G / 720) * (61 - 58 * h + d + 600 * E - 330 * $s)));
  return i.north || (j += 1e7), [D, j];
}
function ap(r) {
  return (r - 1) * 6 - 180 + 3;
}
const RS = [
  /^EPSG:(\d+)$/,
  /^urn:ogc:def:crs:EPSG::(\d+)$/,
  /^http:\/\/www\.opengis\.net\/def\/crs\/EPSG\/0\/(\d+)$/,
];
function op(r) {
  let t = 0;
  for (const l of RS) {
    const o = r.match(l);
    if (o) {
      t = parseInt(o[1]);
      break;
    }
  }
  if (!t) return null;
  let i = 0,
    s = !1;
  return (
    t > 32700 && t < 32761
      ? (i = t - 32700)
      : t > 32600 && t < 32661 && ((s = !0), (i = t - 32600)),
    i ? { number: i, north: s } : null
  );
}
function ty(r, t) {
  return function (i, s, l, o) {
    const c = i.length;
    (l = l > 1 ? l : 2),
      (o = o ?? l),
      s || (l > 2 ? (s = i.slice()) : (s = new Array(c)));
    for (let h = 0; h < c; h += o) {
      const d = i[h],
        _ = i[h + 1],
        m = r(d, _, t);
      (s[h] = m[0]), (s[h + 1] = m[1]);
    }
    return s;
  };
}
function bS(r) {
  return op(r) ? new Sd({ code: r, units: "m" }) : null;
}
function wS(r) {
  const t = op(r.getCode());
  return t ? { forward: ty(CS, t), inverse: ty(SS, t) } : null;
}
const AS = [wS],
  MS = [bS];
let $f = !0;
function OS(r) {
  $f = !1;
}
function Cd(r, t) {
  if (t !== void 0) {
    for (let i = 0, s = r.length; i < s; ++i) t[i] = r[i];
    t = t;
  } else t = r.slice();
  return t;
}
function td(r) {
  dS(r.getCode(), r), Fa(r, r, Cd);
}
function DS(r) {
  r.forEach(td);
}
function Kt(r) {
  if (typeof r != "string") return r;
  const t = fS(r);
  if (t) return t;
  for (const i of MS) {
    const s = i(r);
    if (s) return s;
  }
  return null;
}
function ey(r, t, i, s) {
  r = Kt(r);
  let l;
  const o = r.getPointResolutionFunc();
  if (o) l = o(t, i);
  else {
    const c = r.getUnits();
    if (c == "degrees" || s == "degrees") l = t;
    else {
      const h = Qa(r, Kt("EPSG:4326"));
      if (!h && c !== "degrees") l = t * r.getMetersPerUnit();
      else {
        let _ = [
          i[0] - t / 2,
          i[1],
          i[0] + t / 2,
          i[1],
          i[0],
          i[1] - t / 2,
          i[0],
          i[1] + t / 2,
        ];
        _ = h(_, _, 2);
        const m = K0(_.slice(0, 2), _.slice(2, 4)),
          y = K0(_.slice(4, 6), _.slice(6, 8));
        l = (m + y) / 2;
      }
      const d = r.getMetersPerUnit();
      d !== void 0 && (l /= d);
    }
  }
  return l;
}
function iy(r) {
  DS(r),
    r.forEach(function (t) {
      r.forEach(function (i) {
        t !== i && Fa(t, i, Cd);
      });
    });
}
function LS(r, t, i, s) {
  r.forEach(function (l) {
    t.forEach(function (o) {
      Fa(l, o, i), Fa(o, l, s);
    });
  });
}
function Rd(r, t) {
  return r ? (typeof r == "string" ? Kt(r) : r) : Kt(t);
}
function IS(r) {
  return function (t, i, s, l) {
    const o = t.length;
    (s = s !== void 0 ? s : 2),
      (l = l ?? s),
      (i = i !== void 0 ? i : new Array(o));
    for (let c = 0; c < o; c += l) {
      const h = r(t.slice(c, c + s)),
        d = h.length;
      for (let _ = 0, m = l; _ < m; ++_) i[c + _] = _ >= d ? t[c + _] : h[_];
    }
    return i;
  };
}
function bu(r, t) {
  if (r === t) return !0;
  const i = r.getUnits() === t.getUnits();
  return (r.getCode() === t.getCode() || Qa(r, t) === Cd) && i;
}
function Qa(r, t) {
  const i = r.getCode(),
    s = t.getCode();
  let l = bf(i, s);
  if (l) return l;
  let o = null,
    c = null;
  for (const d of AS) o || (o = d(r)), c || (c = d(t));
  if (!o && !c) return null;
  const h = "EPSG:4326";
  if (c)
    if (o) l = wf(o.inverse, c.forward);
    else {
      const d = bf(i, h);
      d && (l = wf(d, c.forward));
    }
  else {
    const d = bf(h, s);
    d && (l = wf(o.inverse, d));
  }
  return l && (td(r), td(t), Fa(r, t, l)), l;
}
function wf(r, t) {
  return function (i, s, l, o) {
    return (s = r(i, s, l, o)), t(s, s, l, o);
  };
}
function ml(r, t) {
  const i = Kt(r),
    s = Kt(t);
  return Qa(i, s);
}
function ec(r, t, i) {
  const s = ml(t, i);
  if (!s) {
    const l = Kt(t).getCode(),
      o = Kt(i).getCode();
    throw new Error(`No transform available between ${l} and ${o}`);
  }
  return s(r, void 0, r.length);
}
function up(r, t, i, s) {
  const l = ml(t, i);
  return $E(r, l, void 0);
}
let Ci = null;
function zS(r) {
  Ci = Kt(r);
}
function Du() {
  return Ci;
}
function NS() {
  zS("EPSG:4326");
}
function ed(r, t) {
  return Ci ? ec(r, t, Ci) : r;
}
function bn(r, t) {
  return Ci
    ? ec(r, Ci, t)
    : ($f &&
        !Au(r, [0, 0]) &&
        r[0] >= -180 &&
        r[0] <= 180 &&
        r[1] >= -90 &&
        r[1] <= 90 &&
        (($f = !1),
        ip(
          "Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.",
        )),
      r);
}
function Lu(r, t) {
  return Ci ? up(r, t, Ci) : r;
}
function gs(r, t) {
  return Ci ? up(r, Ci, t) : r;
}
function GS(r, t) {
  if (!Ci) return r;
  const i = Kt(t).getMetersPerUnit(),
    s = Ci.getMetersPerUnit();
  return i && s ? (r * i) / s : r;
}
function FS() {
  iy(V0), iy(W0), LS(W0, V0, oS, uS);
}
FS();
new Array(6);
function Gi() {
  return [1, 0, 0, 1, 0, 0];
}
function US(r, t) {
  return (
    (r[0] = t[0]),
    (r[1] = t[1]),
    (r[2] = t[2]),
    (r[3] = t[3]),
    (r[4] = t[4]),
    (r[5] = t[5]),
    r
  );
}
function _e(r, t) {
  const i = t[0],
    s = t[1];
  return (
    (t[0] = r[0] * i + r[2] * s + r[4]), (t[1] = r[1] * i + r[3] * s + r[5]), t
  );
}
function zn(r, t, i, s, l, o, c, h) {
  const d = Math.sin(o),
    _ = Math.cos(o);
  return (
    (r[0] = s * _),
    (r[1] = l * d),
    (r[2] = -s * d),
    (r[3] = l * _),
    (r[4] = c * s * _ - h * s * d + t),
    (r[5] = c * l * d + h * l * _ + i),
    r
  );
}
function cp(r, t) {
  const i = XS(t);
  Lt(i !== 0, "Transformation matrix cannot be inverted");
  const s = t[0],
    l = t[1],
    o = t[2],
    c = t[3],
    h = t[4],
    d = t[5];
  return (
    (r[0] = c / i),
    (r[1] = -l / i),
    (r[2] = -o / i),
    (r[3] = s / i),
    (r[4] = (o * d - c * h) / i),
    (r[5] = -(s * d - l * h) / i),
    r
  );
}
function XS(r) {
  return r[0] * r[3] - r[1] * r[2];
}
const ny = [1e6, 1e6, 1e6, 1e6, 2, 2];
function YS(r) {
  return (
    "matrix(" + r.map((i, s) => Math.round(i * ny[s]) / ny[s]).join(", ") + ")"
  );
}
function ps(r, t, i, s, l, o, c) {
  (o = o || []), (c = c || 2);
  let h = 0;
  for (let d = t; d < i; d += s) {
    const _ = r[d],
      m = r[d + 1];
    (o[h++] = l[0] * _ + l[2] * m + l[4]),
      (o[h++] = l[1] * _ + l[3] * m + l[5]);
    for (let y = 2; y < c; y++) o[h++] = r[d + y];
  }
  return o && o.length != h && (o.length = h), o;
}
function hp(r, t, i, s, l, o, c) {
  c = c || [];
  const h = Math.cos(l),
    d = Math.sin(l),
    _ = o[0],
    m = o[1];
  let y = 0;
  for (let v = t; v < i; v += s) {
    const E = r[v] - _,
      x = r[v + 1] - m;
    (c[y++] = _ + E * h - x * d), (c[y++] = m + E * d + x * h);
    for (let R = v + 2; R < v + s; ++R) c[y++] = r[R];
  }
  return c && c.length != y && (c.length = y), c;
}
function PS(r, t, i, s, l, o, c, h) {
  h = h || [];
  const d = c[0],
    _ = c[1];
  let m = 0;
  for (let y = t; y < i; y += s) {
    const v = r[y] - d,
      E = r[y + 1] - _;
    (h[m++] = d + l * v), (h[m++] = _ + o * E);
    for (let x = y + 2; x < y + s; ++x) h[m++] = r[x];
  }
  return h && h.length != m && (h.length = m), h;
}
function kS(r, t, i, s, l, o, c) {
  c = c || [];
  let h = 0;
  for (let d = t; d < i; d += s) {
    (c[h++] = r[d] + l), (c[h++] = r[d + 1] + o);
    for (let _ = d + 2; _ < d + s; ++_) c[h++] = r[_];
  }
  return c && c.length != h && (c.length = h), c;
}
const sy = Gi(),
  BS = [NaN, NaN];
class fp extends Ui {
  constructor() {
    super(),
      (this.extent_ = Ti()),
      (this.extentRevision_ = -1),
      (this.simplifiedGeometryMaxMinSquaredTolerance = 0),
      (this.simplifiedGeometryRevision = 0),
      (this.simplifyTransformedInternal = Ky((t, i, s) => {
        if (!s) return this.getSimplifiedGeometry(i);
        const l = this.clone();
        return l.applyTransform(s), l.getSimplifiedGeometry(i);
      }));
  }
  simplifyTransformed(t, i) {
    return this.simplifyTransformedInternal(this.getRevision(), t, i);
  }
  clone() {
    return _t();
  }
  closestPointXY(t, i, s, l) {
    return _t();
  }
  containsXY(t, i) {
    return this.closestPointXY(t, i, BS, Number.MIN_VALUE) === 0;
  }
  getClosestPoint(t, i) {
    return (i = i || [NaN, NaN]), this.closestPointXY(t[0], t[1], i, 1 / 0), i;
  }
  intersectsCoordinate(t) {
    return this.containsXY(t[0], t[1]);
  }
  computeExtent(t) {
    return _t();
  }
  getExtent(t) {
    if (this.extentRevision_ != this.getRevision()) {
      const i = this.computeExtent(this.extent_);
      (isNaN(i[0]) || isNaN(i[1])) && xl(i),
        (this.extentRevision_ = this.getRevision());
    }
    return QE(this.extent_, t);
  }
  rotate(t, i) {
    _t();
  }
  scale(t, i, s) {
    _t();
  }
  simplify(t) {
    return this.getSimplifiedGeometry(t * t);
  }
  getSimplifiedGeometry(t) {
    return _t();
  }
  getType() {
    return _t();
  }
  applyTransform(t) {
    _t();
  }
  intersectsExtent(t) {
    return _t();
  }
  translate(t, i) {
    _t();
  }
  transform(t, i) {
    const s = Kt(t),
      l =
        s.getUnits() == "tile-pixels"
          ? function (o, c, h) {
              const d = s.getExtent(),
                _ = s.getWorldExtent(),
                m = Ue(_) / Ue(d);
              zn(sy, _[0], _[3], m, -m, 0, 0, 0);
              const y = ps(o, 0, o.length, h, sy, c),
                v = ml(s, i);
              return v ? v(y, y, h) : y;
            }
          : ml(s, i);
    return this.applyTransform(l), this;
  }
}
class ur extends fp {
  constructor() {
    super(), (this.layout = "XY"), (this.stride = 2), this.flatCoordinates;
  }
  computeExtent(t) {
    return yd(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
    );
  }
  getCoordinates() {
    return _t();
  }
  getFirstCoordinate() {
    return this.flatCoordinates.slice(0, this.stride);
  }
  getFlatCoordinates() {
    return this.flatCoordinates;
  }
  getLastCoordinate() {
    return this.flatCoordinates.slice(
      this.flatCoordinates.length - this.stride,
    );
  }
  getLayout() {
    return this.layout;
  }
  getSimplifiedGeometry(t) {
    if (
      (this.simplifiedGeometryRevision !== this.getRevision() &&
        ((this.simplifiedGeometryMaxMinSquaredTolerance = 0),
        (this.simplifiedGeometryRevision = this.getRevision())),
      t < 0 ||
        (this.simplifiedGeometryMaxMinSquaredTolerance !== 0 &&
          t <= this.simplifiedGeometryMaxMinSquaredTolerance))
    )
      return this;
    const i = this.getSimplifiedGeometryInternal(t);
    return i.getFlatCoordinates().length < this.flatCoordinates.length
      ? i
      : ((this.simplifiedGeometryMaxMinSquaredTolerance = t), this);
  }
  getSimplifiedGeometryInternal(t) {
    return this;
  }
  getStride() {
    return this.stride;
  }
  setFlatCoordinates(t, i) {
    (this.stride = ry(t)), (this.layout = t), (this.flatCoordinates = i);
  }
  setCoordinates(t, i) {
    _t();
  }
  setLayout(t, i, s) {
    let l;
    if (t) l = ry(t);
    else {
      for (let o = 0; o < s; ++o) {
        if (i.length === 0) {
          (this.layout = "XY"), (this.stride = 2);
          return;
        }
        i = i[0];
      }
      (l = i.length), (t = cr(l));
    }
    (this.layout = t), (this.stride = l);
  }
  applyTransform(t) {
    this.flatCoordinates &&
      (t(
        this.flatCoordinates,
        this.flatCoordinates,
        this.layout.startsWith("XYZ") ? 3 : 2,
        this.stride,
      ),
      this.changed());
  }
  rotate(t, i) {
    const s = this.getFlatCoordinates();
    if (s) {
      const l = this.getStride();
      hp(s, 0, s.length, l, t, i, s), this.changed();
    }
  }
  scale(t, i, s) {
    i === void 0 && (i = t), s || (s = vs(this.getExtent()));
    const l = this.getFlatCoordinates();
    if (l) {
      const o = this.getStride();
      PS(l, 0, l.length, o, t, i, s, l), this.changed();
    }
  }
  translate(t, i) {
    const s = this.getFlatCoordinates();
    if (s) {
      const l = this.getStride();
      kS(s, 0, s.length, l, t, i, s), this.changed();
    }
  }
}
function cr(r) {
  let t;
  return r == 2 ? (t = "XY") : r == 3 ? (t = "XYZ") : r == 4 && (t = "XYZM"), t;
}
function ry(r) {
  let t;
  return (
    r == "XY"
      ? (t = 2)
      : r == "XYZ" || r == "XYM"
        ? (t = 3)
        : r == "XYZM" && (t = 4),
    t
  );
}
function HS(r, t, i) {
  const s = r.getFlatCoordinates();
  if (!s) return null;
  const l = r.getStride();
  return ps(s, 0, s.length, l, t, i);
}
function dp(r, t, i, s) {
  let l = 0;
  const o = r[i - s],
    c = r[i - s + 1];
  let h = 0,
    d = 0;
  for (; t < i; t += s) {
    const _ = r[t] - o,
      m = r[t + 1] - c;
    (l += d * _ - h * m), (h = _), (d = m);
  }
  return l / 2;
}
function gp(r, t, i, s) {
  let l = 0;
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o];
    (l += dp(r, t, h, s)), (t = h);
  }
  return l;
}
function jS(r, t, i, s) {
  let l = 0;
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o];
    (l += gp(r, t, h, s)), (t = h[h.length - 1]);
  }
  return l;
}
function ly(r, t, i, s, l, o, c) {
  const h = r[t],
    d = r[t + 1],
    _ = r[i] - h,
    m = r[i + 1] - d;
  let y;
  if (_ === 0 && m === 0) y = t;
  else {
    const v = ((l - h) * _ + (o - d) * m) / (_ * _ + m * m);
    if (v > 1) y = i;
    else if (v > 0) {
      for (let E = 0; E < s; ++E) c[E] = ni(r[t + E], r[i + E], v);
      c.length = s;
      return;
    } else y = t;
  }
  for (let v = 0; v < s; ++v) c[v] = r[y + v];
  c.length = s;
}
function bd(r, t, i, s, l) {
  let o = r[t],
    c = r[t + 1];
  for (t += s; t < i; t += s) {
    const h = r[t],
      d = r[t + 1],
      _ = sr(o, c, h, d);
    _ > l && (l = _), (o = h), (c = d);
  }
  return l;
}
function wd(r, t, i, s, l) {
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o];
    (l = bd(r, t, h, s, l)), (t = h);
  }
  return l;
}
function ZS(r, t, i, s, l) {
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o];
    (l = wd(r, t, h, s, l)), (t = h[h.length - 1]);
  }
  return l;
}
function Ad(r, t, i, s, l, o, c, h, d, _, m) {
  if (t == i) return _;
  let y, v;
  if (l === 0) {
    if (((v = sr(c, h, r[t], r[t + 1])), v < _)) {
      for (y = 0; y < s; ++y) d[y] = r[t + y];
      return (d.length = s), v;
    }
    return _;
  }
  m = m || [NaN, NaN];
  let E = t + s;
  for (; E < i; )
    if ((ly(r, E - s, E, s, c, h, m), (v = sr(c, h, m[0], m[1])), v < _)) {
      for (_ = v, y = 0; y < s; ++y) d[y] = m[y];
      (d.length = s), (E += s);
    } else E += s * Math.max(((Math.sqrt(v) - Math.sqrt(_)) / l) | 0, 1);
  if (o && (ly(r, i - s, t, s, c, h, m), (v = sr(c, h, m[0], m[1])), v < _)) {
    for (_ = v, y = 0; y < s; ++y) d[y] = m[y];
    d.length = s;
  }
  return _;
}
function Md(r, t, i, s, l, o, c, h, d, _, m) {
  m = m || [NaN, NaN];
  for (let y = 0, v = i.length; y < v; ++y) {
    const E = i[y];
    (_ = Ad(r, t, E, s, l, o, c, h, d, _, m)), (t = E);
  }
  return _;
}
function KS(r, t, i, s, l, o, c, h, d, _, m) {
  m = m || [NaN, NaN];
  for (let y = 0, v = i.length; y < v; ++y) {
    const E = i[y];
    (_ = Md(r, t, E, s, l, o, c, h, d, _, m)), (t = E[E.length - 1]);
  }
  return _;
}
function VS(r, t, i, s) {
  for (let l = 0, o = i.length; l < o; ++l) r[t++] = i[l];
  return t;
}
function ic(r, t, i, s) {
  for (let l = 0, o = i.length; l < o; ++l) {
    const c = i[l];
    for (let h = 0; h < s; ++h) r[t++] = c[h];
  }
  return t;
}
function Ja(r, t, i, s, l) {
  l = l || [];
  let o = 0;
  for (let c = 0, h = i.length; c < h; ++c) {
    const d = ic(r, t, i[c], s);
    (l[o++] = d), (t = d);
  }
  return (l.length = o), l;
}
function _p(r, t, i, s, l) {
  l = l || [];
  let o = 0;
  for (let c = 0, h = i.length; c < h; ++c) {
    const d = Ja(r, t, i[c], s, l[o]);
    d.length === 0 && (d[0] = t), (l[o++] = d), (t = d[d.length - 1]);
  }
  return (l.length = o), l;
}
function _s(r, t, i, s, l) {
  l = l !== void 0 ? l : [];
  let o = 0;
  for (let c = t; c < i; c += s) l[o++] = r.slice(c, c + s);
  return (l.length = o), l;
}
function Ua(r, t, i, s, l) {
  l = l !== void 0 ? l : [];
  let o = 0;
  for (let c = 0, h = i.length; c < h; ++c) {
    const d = i[c];
    (l[o++] = _s(r, t, d, s, l[o])), (t = d);
  }
  return (l.length = o), l;
}
function id(r, t, i, s, l) {
  l = l !== void 0 ? l : [];
  let o = 0;
  for (let c = 0, h = i.length; c < h; ++c) {
    const d = i[c];
    (l[o++] = d.length === 1 && d[0] === t ? [] : Ua(r, t, d, s, l[o])),
      (t = d[d.length - 1]);
  }
  return (l.length = o), l;
}
function nc(r, t, i, s, l, o, c) {
  const h = (i - t) / s;
  if (h < 3) {
    for (; t < i; t += s) (o[c++] = r[t]), (o[c++] = r[t + 1]);
    return c;
  }
  const d = new Array(h);
  (d[0] = 1), (d[h - 1] = 1);
  const _ = [t, i - s];
  let m = 0;
  for (; _.length > 0; ) {
    const y = _.pop(),
      v = _.pop();
    let E = 0;
    const x = r[v],
      R = r[v + 1],
      b = r[y],
      w = r[y + 1];
    for (let M = v + s; M < y; M += s) {
      const G = r[M],
        I = r[M + 1],
        D = tS(G, I, x, R, b, w);
      D > E && ((m = M), (E = D));
    }
    E > l &&
      ((d[(m - t) / s] = 1),
      v + s < m && _.push(v, m),
      m + s < y && _.push(m, y));
  }
  for (let y = 0; y < h; ++y)
    d[y] && ((o[c++] = r[t + y * s]), (o[c++] = r[t + y * s + 1]));
  return c;
}
function mp(r, t, i, s, l, o, c, h) {
  for (let d = 0, _ = i.length; d < _; ++d) {
    const m = i[d];
    (c = nc(r, t, m, s, l, o, c)), h.push(c), (t = m);
  }
  return c;
}
function Js(r, t) {
  return t * Math.round(r / t);
}
function qS(r, t, i, s, l, o, c) {
  if (t == i) return c;
  let h = Js(r[t], l),
    d = Js(r[t + 1], l);
  (t += s), (o[c++] = h), (o[c++] = d);
  let _, m;
  do
    if (((_ = Js(r[t], l)), (m = Js(r[t + 1], l)), (t += s), t == i))
      return (o[c++] = _), (o[c++] = m), c;
  while (_ == h && m == d);
  for (; t < i; ) {
    const y = Js(r[t], l),
      v = Js(r[t + 1], l);
    if (((t += s), y == _ && v == m)) continue;
    const E = _ - h,
      x = m - d,
      R = y - h,
      b = v - d;
    if (
      E * b == x * R &&
      ((E < 0 && R < E) || E == R || (E > 0 && R > E)) &&
      ((x < 0 && b < x) || x == b || (x > 0 && b > x))
    ) {
      (_ = y), (m = v);
      continue;
    }
    (o[c++] = _), (o[c++] = m), (h = _), (d = m), (_ = y), (m = v);
  }
  return (o[c++] = _), (o[c++] = m), c;
}
function Od(r, t, i, s, l, o, c, h) {
  for (let d = 0, _ = i.length; d < _; ++d) {
    const m = i[d];
    (c = qS(r, t, m, s, l, o, c)), h.push(c), (t = m);
  }
  return c;
}
function WS(r, t, i, s, l, o, c, h) {
  for (let d = 0, _ = i.length; d < _; ++d) {
    const m = i[d],
      y = [];
    (c = Od(r, t, m, s, l, o, c, y)), h.push(y), (t = m[m.length - 1]);
  }
  return c;
}
class Xa extends ur {
  constructor(t, i) {
    super(),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      i !== void 0 && !Array.isArray(t[0])
        ? this.setFlatCoordinates(i, t)
        : this.setCoordinates(t, i);
  }
  clone() {
    return new Xa(this.flatCoordinates.slice(), this.layout);
  }
  closestPointXY(t, i, s, l) {
    return l < ar(this.getExtent(), t, i)
      ? l
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            bd(
              this.flatCoordinates,
              0,
              this.flatCoordinates.length,
              this.stride,
              0,
            ),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        Ad(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          this.maxDelta_,
          !0,
          t,
          i,
          s,
          l,
        ));
  }
  getArea() {
    return dp(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getCoordinates() {
    return _s(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getSimplifiedGeometryInternal(t) {
    const i = [];
    return (
      (i.length = nc(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        t,
        i,
        0,
      )),
      new Xa(i, "XY")
    );
  }
  getType() {
    return "LinearRing";
  }
  intersectsExtent(t) {
    return !1;
  }
  setCoordinates(t, i) {
    this.setLayout(i, t, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = ic(
        this.flatCoordinates,
        0,
        t,
        this.stride,
      )),
      this.changed();
  }
}
class yl extends ur {
  constructor(t, i) {
    super(), this.setCoordinates(t, i);
  }
  clone() {
    const t = new yl(this.flatCoordinates.slice(), this.layout);
    return t.applyProperties(this), t;
  }
  closestPointXY(t, i, s, l) {
    const o = this.flatCoordinates,
      c = sr(t, i, o[0], o[1]);
    if (c < l) {
      const h = this.stride;
      for (let d = 0; d < h; ++d) s[d] = o[d];
      return (s.length = h), c;
    }
    return l;
  }
  getCoordinates() {
    return this.flatCoordinates.slice();
  }
  computeExtent(t) {
    return qy(this.flatCoordinates, t);
  }
  getType() {
    return "Point";
  }
  intersectsExtent(t) {
    return md(t, this.flatCoordinates[0], this.flatCoordinates[1]);
  }
  setCoordinates(t, i) {
    this.setLayout(i, t, 0),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = VS(
        this.flatCoordinates,
        0,
        t,
        this.stride,
      )),
      this.changed();
  }
}
function QS(r, t, i, s, l) {
  return !Jy(l, function (c) {
    return !tr(r, t, i, s, c[0], c[1]);
  });
}
function tr(r, t, i, s, l, o) {
  let c = 0,
    h = r[i - s],
    d = r[i - s + 1];
  for (; t < i; t += s) {
    const _ = r[t],
      m = r[t + 1];
    d <= o
      ? m > o && (_ - h) * (o - d) - (l - h) * (m - d) > 0 && c++
      : m <= o && (_ - h) * (o - d) - (l - h) * (m - d) < 0 && c--,
      (h = _),
      (d = m);
  }
  return c !== 0;
}
function Dd(r, t, i, s, l, o) {
  if (i.length === 0 || !tr(r, t, i[0], s, l, o)) return !1;
  for (let c = 1, h = i.length; c < h; ++c)
    if (tr(r, i[c - 1], i[c], s, l, o)) return !1;
  return !0;
}
function JS(r, t, i, s, l, o) {
  if (i.length === 0) return !1;
  for (let c = 0, h = i.length; c < h; ++c) {
    const d = i[c];
    if (Dd(r, t, d, s, l, o)) return !0;
    t = d[d.length - 1];
  }
  return !1;
}
function Ld(r, t, i, s, l, o, c) {
  let h, d, _, m, y, v, E;
  const x = l[o + 1],
    R = [];
  for (let M = 0, G = i.length; M < G; ++M) {
    const I = i[M];
    for (m = r[I - s], v = r[I - s + 1], h = t; h < I; h += s)
      (y = r[h]),
        (E = r[h + 1]),
        ((x <= v && E <= x) || (v <= x && x <= E)) &&
          ((_ = ((x - v) / (E - v)) * (y - m) + m), R.push(_)),
        (m = y),
        (v = E);
  }
  let b = NaN,
    w = -1 / 0;
  for (R.sort(On), m = R[0], h = 1, d = R.length; h < d; ++h) {
    y = R[h];
    const M = Math.abs(y - m);
    M > w && ((_ = (m + y) / 2), Dd(r, t, i, s, _, x) && ((b = _), (w = M))),
      (m = y);
  }
  return isNaN(b) && (b = l[o]), c ? (c.push(b, x, w), c) : [b, x, w];
}
function yp(r, t, i, s, l) {
  let o = [];
  for (let c = 0, h = i.length; c < h; ++c) {
    const d = i[c];
    (o = Ld(r, t, d, s, l, 2 * c, o)), (t = d[d.length - 1]);
  }
  return o;
}
function pp(r, t, i, s, l) {
  let o;
  for (t += s; t < i; t += s)
    if (((o = l(r.slice(t - s, t), r.slice(t, t + s))), o)) return o;
  return !1;
}
function sc(r, t, i, s, l, o) {
  return (
    (o = o ?? Qy(Ti(), r, t, i, s)),
    Ze(l, o)
      ? (o[0] >= l[0] && o[2] <= l[2]) || (o[1] >= l[1] && o[3] <= l[3])
        ? !0
        : pp(r, t, i, s, function (c, h) {
            return JE(l, c, h);
          })
      : !1
  );
}
function $S(r, t, i, s, l) {
  for (let o = 0, c = i.length; o < c; ++o) {
    if (sc(r, t, i[o], s, l)) return !0;
    t = i[o];
  }
  return !1;
}
function vp(r, t, i, s, l) {
  return !!(
    sc(r, t, i, s, l) ||
    tr(r, t, i, s, l[0], l[1]) ||
    tr(r, t, i, s, l[0], l[3]) ||
    tr(r, t, i, s, l[2], l[1]) ||
    tr(r, t, i, s, l[2], l[3])
  );
}
function Ep(r, t, i, s, l) {
  if (!vp(r, t, i[0], s, l)) return !1;
  if (i.length === 1) return !0;
  for (let o = 1, c = i.length; o < c; ++o)
    if (QS(r, i[o - 1], i[o], s, l) && !sc(r, i[o - 1], i[o], s, l)) return !1;
  return !0;
}
function tx(r, t, i, s, l) {
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o];
    if (Ep(r, t, h, s, l)) return !0;
    t = h[h.length - 1];
  }
  return !1;
}
function ex(r, t, i, s) {
  for (; t < i - s; ) {
    for (let l = 0; l < s; ++l) {
      const o = r[t + l];
      (r[t + l] = r[i - s + l]), (r[i - s + l] = o);
    }
    (t += s), (i -= s);
  }
}
function Id(r, t, i, s) {
  let l = 0,
    o = r[i - s],
    c = r[i - s + 1];
  for (; t < i; t += s) {
    const h = r[t],
      d = r[t + 1];
    (l += (h - o) * (d + c)), (o = h), (c = d);
  }
  return l === 0 ? void 0 : l > 0;
}
function zd(r, t, i, s, l) {
  l = l !== void 0 ? l : !1;
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o],
      d = Id(r, t, h, s);
    if (o === 0) {
      if ((l && d) || (!l && !d)) return !1;
    } else if ((l && !d) || (!l && d)) return !1;
    t = h;
  }
  return !0;
}
function Sp(r, t, i, s, l) {
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o];
    if (!zd(r, t, h, s, l)) return !1;
    h.length && (t = h[h.length - 1]);
  }
  return !0;
}
function Iu(r, t, i, s, l) {
  l = l !== void 0 ? l : !1;
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o],
      d = Id(r, t, h, s);
    (o === 0 ? (l && d) || (!l && !d) : (l && !d) || (!l && d)) &&
      ex(r, t, h, s),
      (t = h);
  }
  return t;
}
function nd(r, t, i, s, l) {
  for (let o = 0, c = i.length; o < c; ++o) t = Iu(r, t, i[o], s, l);
  return t;
}
function ix(r, t) {
  const i = [];
  let s = 0,
    l = 0,
    o;
  for (let c = 0, h = t.length; c < h; ++c) {
    const d = t[c],
      _ = Id(r, s, d, 2);
    if ((o === void 0 && (o = _), _ === o)) i.push(t.slice(l, c + 1));
    else {
      if (i.length === 0) continue;
      i[i.length - 1].push(t[l]);
    }
    (l = c + 1), (s = d);
  }
  return i;
}
class Es extends ur {
  constructor(t, i, s) {
    super(),
      (this.ends_ = []),
      (this.flatInteriorPointRevision_ = -1),
      (this.flatInteriorPoint_ = null),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      (this.orientedRevision_ = -1),
      (this.orientedFlatCoordinates_ = null),
      i !== void 0 && s
        ? (this.setFlatCoordinates(i, t), (this.ends_ = s))
        : this.setCoordinates(t, i);
  }
  appendLinearRing(t) {
    this.flatCoordinates
      ? en(this.flatCoordinates, t.getFlatCoordinates())
      : (this.flatCoordinates = t.getFlatCoordinates().slice()),
      this.ends_.push(this.flatCoordinates.length),
      this.changed();
  }
  clone() {
    const t = new Es(
      this.flatCoordinates.slice(),
      this.layout,
      this.ends_.slice(),
    );
    return t.applyProperties(this), t;
  }
  closestPointXY(t, i, s, l) {
    return l < ar(this.getExtent(), t, i)
      ? l
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            wd(this.flatCoordinates, 0, this.ends_, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        Md(
          this.flatCoordinates,
          0,
          this.ends_,
          this.stride,
          this.maxDelta_,
          !0,
          t,
          i,
          s,
          l,
        ));
  }
  containsXY(t, i) {
    return Dd(
      this.getOrientedFlatCoordinates(),
      0,
      this.ends_,
      this.stride,
      t,
      i,
    );
  }
  getArea() {
    return gp(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride);
  }
  getCoordinates(t) {
    let i;
    return (
      t !== void 0
        ? ((i = this.getOrientedFlatCoordinates().slice()),
          Iu(i, 0, this.ends_, this.stride, t))
        : (i = this.flatCoordinates),
      Ua(i, 0, this.ends_, this.stride)
    );
  }
  getEnds() {
    return this.ends_;
  }
  getFlatInteriorPoint() {
    if (this.flatInteriorPointRevision_ != this.getRevision()) {
      const t = vs(this.getExtent());
      (this.flatInteriorPoint_ = Ld(
        this.getOrientedFlatCoordinates(),
        0,
        this.ends_,
        this.stride,
        t,
        0,
      )),
        (this.flatInteriorPointRevision_ = this.getRevision());
    }
    return this.flatInteriorPoint_;
  }
  getInteriorPoint() {
    return new yl(this.getFlatInteriorPoint(), "XYM");
  }
  getLinearRingCount() {
    return this.ends_.length;
  }
  getLinearRing(t) {
    return t < 0 || this.ends_.length <= t
      ? null
      : new Xa(
          this.flatCoordinates.slice(
            t === 0 ? 0 : this.ends_[t - 1],
            this.ends_[t],
          ),
          this.layout,
        );
  }
  getLinearRings() {
    const t = this.layout,
      i = this.flatCoordinates,
      s = this.ends_,
      l = [];
    let o = 0;
    for (let c = 0, h = s.length; c < h; ++c) {
      const d = s[c],
        _ = new Xa(i.slice(o, d), t);
      l.push(_), (o = d);
    }
    return l;
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates;
      zd(t, 0, this.ends_, this.stride)
        ? (this.orientedFlatCoordinates_ = t)
        : ((this.orientedFlatCoordinates_ = t.slice()),
          (this.orientedFlatCoordinates_.length = Iu(
            this.orientedFlatCoordinates_,
            0,
            this.ends_,
            this.stride,
          ))),
        (this.orientedRevision_ = this.getRevision());
    }
    return this.orientedFlatCoordinates_;
  }
  getSimplifiedGeometryInternal(t) {
    const i = [],
      s = [];
    return (
      (i.length = Od(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        Math.sqrt(t),
        i,
        0,
        s,
      )),
      new Es(i, "XY", s)
    );
  }
  getType() {
    return "Polygon";
  }
  intersectsExtent(t) {
    return Ep(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t);
  }
  setCoordinates(t, i) {
    this.setLayout(i, t, 2),
      this.flatCoordinates || (this.flatCoordinates = []);
    const s = Ja(this.flatCoordinates, 0, t, this.stride, this.ends_);
    (this.flatCoordinates.length = s.length === 0 ? 0 : s[s.length - 1]),
      this.changed();
  }
}
function ay(r) {
  if (qa(r)) throw new Error("Cannot create polygon from empty extent");
  const t = r[0],
    i = r[1],
    s = r[2],
    l = r[3],
    o = [t, i, t, l, s, l, s, i, t, i];
  return new Es(o, "XY", [o.length]);
}
function zu(r, t, i, s, l, o, c) {
  let h, d;
  const _ = (i - t) / s;
  if (_ === 1) h = t;
  else if (_ === 2) (h = t), (d = l);
  else if (_ !== 0) {
    let m = r[t],
      y = r[t + 1],
      v = 0;
    const E = [0];
    for (let b = t + s; b < i; b += s) {
      const w = r[b],
        M = r[b + 1];
      (v += Math.sqrt((w - m) * (w - m) + (M - y) * (M - y))),
        E.push(v),
        (m = w),
        (y = M);
    }
    const x = l * v,
      R = YE(E, x);
    R < 0
      ? ((d = (x - E[-R - 2]) / (E[-R - 1] - E[-R - 2])),
        (h = t + (-R - 2) * s))
      : (h = t + R * s);
  }
  (c = c > 1 ? c : 2), (o = o || new Array(c));
  for (let m = 0; m < c; ++m)
    o[m] =
      h === void 0
        ? NaN
        : d === void 0
          ? r[h + m]
          : ni(r[h + m], r[h + s + m], d);
  return o;
}
function sd(r, t, i, s, l, o) {
  if (i == t) return null;
  let c;
  if (l < r[t + s - 1])
    return o ? ((c = r.slice(t, t + s)), (c[s - 1] = l), c) : null;
  if (r[i - 1] < l)
    return o ? ((c = r.slice(i - s, i)), (c[s - 1] = l), c) : null;
  if (l == r[t + s - 1]) return r.slice(t, t + s);
  let h = t / s,
    d = i / s;
  for (; h < d; ) {
    const v = (h + d) >> 1;
    l < r[(v + 1) * s - 1] ? (d = v) : (h = v + 1);
  }
  const _ = r[h * s - 1];
  if (l == _) return r.slice((h - 1) * s, (h - 1) * s + s);
  const m = r[(h + 1) * s - 1],
    y = (l - _) / (m - _);
  c = [];
  for (let v = 0; v < s - 1; ++v)
    c.push(ni(r[(h - 1) * s + v], r[h * s + v], y));
  return c.push(l), c;
}
function nx(r, t, i, s, l, o, c) {
  if (c) return sd(r, t, i[i.length - 1], s, l, o);
  let h;
  if (l < r[s - 1]) return o ? ((h = r.slice(0, s)), (h[s - 1] = l), h) : null;
  if (r[r.length - 1] < l)
    return o ? ((h = r.slice(r.length - s)), (h[s - 1] = l), h) : null;
  for (let d = 0, _ = i.length; d < _; ++d) {
    const m = i[d];
    if (t != m) {
      if (l < r[t + s - 1]) return null;
      if (l <= r[m - 1]) return sd(r, t, m, s, l, !1);
      t = m;
    }
  }
  return null;
}
function xp(r, t, i, s) {
  let l = r[t],
    o = r[t + 1],
    c = 0;
  for (let h = t + s; h < i; h += s) {
    const d = r[h],
      _ = r[h + 1];
    (c += Math.sqrt((d - l) * (d - l) + (_ - o) * (_ - o))), (l = d), (o = _);
  }
  return c;
}
class pl extends ur {
  constructor(t, i) {
    super(),
      (this.flatMidpoint_ = null),
      (this.flatMidpointRevision_ = -1),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      i !== void 0 && !Array.isArray(t[0])
        ? this.setFlatCoordinates(i, t)
        : this.setCoordinates(t, i);
  }
  appendCoordinate(t) {
    en(this.flatCoordinates, t), this.changed();
  }
  clone() {
    const t = new pl(this.flatCoordinates.slice(), this.layout);
    return t.applyProperties(this), t;
  }
  closestPointXY(t, i, s, l) {
    return l < ar(this.getExtent(), t, i)
      ? l
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            bd(
              this.flatCoordinates,
              0,
              this.flatCoordinates.length,
              this.stride,
              0,
            ),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        Ad(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          this.maxDelta_,
          !1,
          t,
          i,
          s,
          l,
        ));
  }
  forEachSegment(t) {
    return pp(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
    );
  }
  getCoordinateAtM(t, i) {
    return this.layout != "XYM" && this.layout != "XYZM"
      ? null
      : ((i = i !== void 0 ? i : !1),
        sd(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          t,
          i,
        ));
  }
  getCoordinates() {
    return _s(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getCoordinateAt(t, i) {
    return zu(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
      i,
      this.stride,
    );
  }
  getLength() {
    return xp(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getFlatMidpoint() {
    return (
      this.flatMidpointRevision_ != this.getRevision() &&
        ((this.flatMidpoint_ = this.getCoordinateAt(
          0.5,
          this.flatMidpoint_ ?? void 0,
        )),
        (this.flatMidpointRevision_ = this.getRevision())),
      this.flatMidpoint_
    );
  }
  getSimplifiedGeometryInternal(t) {
    const i = [];
    return (
      (i.length = nc(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        t,
        i,
        0,
      )),
      new pl(i, "XY")
    );
  }
  getType() {
    return "LineString";
  }
  intersectsExtent(t) {
    return sc(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
      this.getExtent(),
    );
  }
  setCoordinates(t, i) {
    this.setLayout(i, t, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = ic(
        this.flatCoordinates,
        0,
        t,
        this.stride,
      )),
      this.changed();
  }
}
const Ei = {
    PRERENDER: "prerender",
    POSTRENDER: "postrender",
    PRECOMPOSE: "precompose",
    POSTCOMPOSE: "postcompose",
    RENDERCOMPLETE: "rendercomplete",
  },
  Ss =
    typeof navigator < "u" && typeof navigator.userAgent < "u"
      ? navigator.userAgent.toLowerCase()
      : "",
  sx = Ss.includes("firefox"),
  rx = Ss.includes("safari") && !Ss.includes("chrom");
rx &&
  (Ss.includes("version/15.4") ||
    /cpu (os|iphone os) 15_4 like mac os x/.test(Ss));
const lx = Ss.includes("webkit") && !Ss.includes("edge"),
  Tp = Ss.includes("macintosh"),
  Cp = typeof devicePixelRatio < "u" ? devicePixelRatio : 1,
  Rp =
    typeof WorkerGlobalScope < "u" &&
    typeof OffscreenCanvas < "u" &&
    self instanceof WorkerGlobalScope,
  bp = typeof Image < "u" && Image.prototype.decode,
  wp = (function () {
    let r = !1;
    try {
      const t = Object.defineProperty({}, "passive", {
        get: function () {
          r = !0;
        },
      });
      window.addEventListener("_", null, t),
        window.removeEventListener("_", null, t);
    } catch {}
    return r;
  })(),
  xt = { IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3 },
  oy = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50],
  };
var uy = {
  red: 0,
  orange: 60,
  yellow: 120,
  green: 180,
  blue: 240,
  purple: 300,
};
function ax(r) {
  var m, y;
  var t,
    i = [],
    s = 1,
    l;
  if (typeof r == "number")
    return {
      space: "rgb",
      values: [r >>> 16, (r & 65280) >>> 8, r & 255],
      alpha: 1,
    };
  if (typeof r == "number")
    return {
      space: "rgb",
      values: [r >>> 16, (r & 65280) >>> 8, r & 255],
      alpha: 1,
    };
  if (((r = String(r).toLowerCase()), oy[r])) (i = oy[r].slice()), (l = "rgb");
  else if (r === "transparent") (s = 0), (l = "rgb"), (i = [0, 0, 0]);
  else if (r[0] === "#") {
    var o = r.slice(1),
      c = o.length,
      h = c <= 4;
    (s = 1),
      h
        ? ((i = [
            parseInt(o[0] + o[0], 16),
            parseInt(o[1] + o[1], 16),
            parseInt(o[2] + o[2], 16),
          ]),
          c === 4 && (s = parseInt(o[3] + o[3], 16) / 255))
        : ((i = [
            parseInt(o[0] + o[1], 16),
            parseInt(o[2] + o[3], 16),
            parseInt(o[4] + o[5], 16),
          ]),
          c === 8 && (s = parseInt(o[6] + o[7], 16) / 255)),
      i[0] || (i[0] = 0),
      i[1] || (i[1] = 0),
      i[2] || (i[2] = 0),
      (l = "rgb");
  } else if (
    (t =
      /^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(
        r,
      ))
  ) {
    var d = t[1];
    l = d.replace(/a$/, "");
    var _ = l === "cmyk" ? 4 : l === "gray" ? 1 : 3;
    (i = t[2].trim().split(/\s*[,\/]\s*|\s+/)),
      l === "color" && (l = i.shift()),
      (i = i.map(function (v, E) {
        if (v[v.length - 1] === "%")
          return (
            (v = parseFloat(v) / 100),
            E === 3
              ? v
              : l === "rgb"
                ? v * 255
                : l[0] === "h" || (l[0] === "l" && !E)
                  ? v * 100
                  : l === "lab"
                    ? v * 125
                    : l === "lch"
                      ? E < 2
                        ? v * 150
                        : v * 360
                      : l[0] === "o" && !E
                        ? v
                        : l === "oklab"
                          ? v * 0.4
                          : l === "oklch"
                            ? E < 2
                              ? v * 0.4
                              : v * 360
                            : v
          );
        if (l[E] === "h" || (E === 2 && l[l.length - 1] === "h")) {
          if (uy[v] !== void 0) return uy[v];
          if (v.endsWith("deg")) return parseFloat(v);
          if (v.endsWith("turn")) return parseFloat(v) * 360;
          if (v.endsWith("grad")) return (parseFloat(v) * 360) / 400;
          if (v.endsWith("rad")) return (parseFloat(v) * 180) / Math.PI;
        }
        return v === "none" ? 0 : parseFloat(v);
      })),
      (s = i.length > _ ? i.pop() : 1);
  } else
    /[0-9](?:\s|\/|,)/.test(r) &&
      ((i = r.match(/([0-9]+)/g).map(function (v) {
        return parseFloat(v);
      })),
      (l =
        ((y = (m = r.match(/([a-z])/gi)) == null ? void 0 : m.join("")) == null
          ? void 0
          : y.toLowerCase()) || "rgb"));
  return { space: l, values: i, alpha: s };
}
const Ya = {
  name: "rgb",
  min: [0, 0, 0],
  max: [255, 255, 255],
  channel: ["red", "green", "blue"],
  alias: ["RGB"],
};
var Af = {
  name: "hsl",
  min: [0, 0, 0],
  max: [360, 100, 100],
  channel: ["hue", "saturation", "lightness"],
  alias: ["HSL"],
  rgb: function (r) {
    var t = r[0] / 360,
      i = r[1] / 100,
      s = r[2] / 100,
      l,
      o,
      c,
      h,
      d,
      _ = 0;
    if (i === 0) return (d = s * 255), [d, d, d];
    for (
      o = s < 0.5 ? s * (1 + i) : s + i - s * i, l = 2 * s - o, h = [0, 0, 0];
      _ < 3;

    )
      (c = t + (1 / 3) * -(_ - 1)),
        c < 0 ? c++ : c > 1 && c--,
        (d =
          6 * c < 1
            ? l + (o - l) * 6 * c
            : 2 * c < 1
              ? o
              : 3 * c < 2
                ? l + (o - l) * (2 / 3 - c) * 6
                : l),
        (h[_++] = d * 255);
    return h;
  },
};
Ya.hsl = function (r) {
  var t = r[0] / 255,
    i = r[1] / 255,
    s = r[2] / 255,
    l = Math.min(t, i, s),
    o = Math.max(t, i, s),
    c = o - l,
    h,
    d,
    _;
  return (
    o === l
      ? (h = 0)
      : t === o
        ? (h = (i - s) / c)
        : i === o
          ? (h = 2 + (s - t) / c)
          : s === o && (h = 4 + (t - i) / c),
    (h = Math.min(h * 60, 360)),
    h < 0 && (h += 360),
    (_ = (l + o) / 2),
    o === l ? (d = 0) : _ <= 0.5 ? (d = c / (o + l)) : (d = c / (2 - o - l)),
    [h, d * 100, _ * 100]
  );
};
function ox(r) {
  Array.isArray(r) && r.raw && (r = String.raw(...arguments)),
    r instanceof Number && (r = +r);
  var t,
    i = ax(r);
  if (!i.space) return [];
  const s = i.space[0] === "h" ? Af.min : Ya.min,
    l = i.space[0] === "h" ? Af.max : Ya.max;
  return (
    (t = Array(3)),
    (t[0] = Math.min(Math.max(i.values[0], s[0]), l[0])),
    (t[1] = Math.min(Math.max(i.values[1], s[1]), l[1])),
    (t[2] = Math.min(Math.max(i.values[2], s[2]), l[2])),
    i.space[0] === "h" && (t = Af.rgb(t)),
    t.push(Math.min(Math.max(i.alpha, 0), 1)),
    t
  );
}
const De = {
  name: "xyz",
  min: [0, 0, 0],
  channel: ["X", "Y", "Z"],
  alias: ["XYZ", "ciexyz", "cie1931"],
  whitepoint: {
    2: {
      A: [109.85, 100, 35.585],
      C: [98.074, 100, 118.232],
      D50: [96.422, 100, 82.521],
      D55: [95.682, 100, 92.149],
      D65: [95.045592705167, 100, 108.9057750759878],
      D75: [94.972, 100, 122.638],
      F2: [99.187, 100, 67.395],
      F7: [95.044, 100, 108.755],
      F11: [100.966, 100, 64.37],
      E: [100, 100, 100],
    },
    10: {
      A: [111.144, 100, 35.2],
      C: [97.285, 100, 116.145],
      D50: [96.72, 100, 81.427],
      D55: [95.799, 100, 90.926],
      D65: [94.811, 100, 107.304],
      D75: [94.416, 100, 120.641],
      F2: [103.28, 100, 69.026],
      F7: [95.792, 100, 107.687],
      F11: [103.866, 100, 65.627],
      E: [100, 100, 100],
    },
  },
};
De.max = De.whitepoint[2].D65;
De.rgb = function (r, t) {
  t = t || De.whitepoint[2].E;
  var i = r[0] / t[0],
    s = r[1] / t[1],
    l = r[2] / t[2],
    o,
    c,
    h;
  return (
    (o = i * 3.240969941904521 + s * -1.537383177570093 + l * -0.498610760293),
    (c = i * -0.96924363628087 + s * 1.87596750150772 + l * 0.041555057407175),
    (h = i * 0.055630079696993 + s * -0.20397695888897 + l * 1.056971514242878),
    (o =
      o > 0.0031308 ? 1.055 * Math.pow(o, 1 / 2.4) - 0.055 : (o = o * 12.92)),
    (c =
      c > 0.0031308 ? 1.055 * Math.pow(c, 1 / 2.4) - 0.055 : (c = c * 12.92)),
    (h =
      h > 0.0031308 ? 1.055 * Math.pow(h, 1 / 2.4) - 0.055 : (h = h * 12.92)),
    (o = Math.min(Math.max(0, o), 1)),
    (c = Math.min(Math.max(0, c), 1)),
    (h = Math.min(Math.max(0, h), 1)),
    [o * 255, c * 255, h * 255]
  );
};
Ya.xyz = function (r, t) {
  var i = r[0] / 255,
    s = r[1] / 255,
    l = r[2] / 255;
  (i = i > 0.04045 ? Math.pow((i + 0.055) / 1.055, 2.4) : i / 12.92),
    (s = s > 0.04045 ? Math.pow((s + 0.055) / 1.055, 2.4) : s / 12.92),
    (l = l > 0.04045 ? Math.pow((l + 0.055) / 1.055, 2.4) : l / 12.92);
  var o = i * 0.41239079926595 + s * 0.35758433938387 + l * 0.18048078840183,
    c = i * 0.21263900587151 + s * 0.71516867876775 + l * 0.072192315360733,
    h = i * 0.019330818715591 + s * 0.11919477979462 + l * 0.95053215224966;
  return (t = t || De.whitepoint[2].E), [o * t[0], c * t[1], h * t[2]];
};
var Nd = {
  name: "luv",
  min: [0, -134, -140],
  max: [100, 224, 122],
  channel: ["lightness", "u", "v"],
  alias: ["LUV", "cieluv", "cie1976"],
  xyz: function (r, t, i) {
    var s, l, o, c, h, d, _, m, y, v, E, x, R;
    if (((o = r[0]), (c = r[1]), (h = r[2]), o === 0)) return [0, 0, 0];
    var b = 0.0011070564598794539;
    return (
      (t = t || "D65"),
      (i = i || 2),
      (y = De.whitepoint[i][t][0]),
      (v = De.whitepoint[i][t][1]),
      (E = De.whitepoint[i][t][2]),
      (x = (4 * y) / (y + 15 * v + 3 * E)),
      (R = (9 * v) / (y + 15 * v + 3 * E)),
      (s = c / (13 * o) + x || 0),
      (l = h / (13 * o) + R || 0),
      (_ = o > 8 ? v * Math.pow((o + 16) / 116, 3) : v * o * b),
      (d = (_ * 9 * s) / (4 * l) || 0),
      (m = (_ * (12 - 3 * s - 20 * l)) / (4 * l) || 0),
      [d, _, m]
    );
  },
};
De.luv = function (r, t, i) {
  var s,
    l,
    o,
    c,
    h,
    d,
    _,
    m,
    y,
    v,
    E,
    x,
    R,
    b = 0.008856451679035631,
    w = 903.2962962962961;
  (t = t || "D65"),
    (i = i || 2),
    (y = De.whitepoint[i][t][0]),
    (v = De.whitepoint[i][t][1]),
    (E = De.whitepoint[i][t][2]),
    (x = (4 * y) / (y + 15 * v + 3 * E)),
    (R = (9 * v) / (y + 15 * v + 3 * E)),
    (d = r[0]),
    (_ = r[1]),
    (m = r[2]),
    (s = (4 * d) / (d + 15 * _ + 3 * m) || 0),
    (l = (9 * _) / (d + 15 * _ + 3 * m) || 0);
  var M = _ / v;
  return (
    (o = M <= b ? w * M : 116 * Math.pow(M, 1 / 3) - 16),
    (c = 13 * o * (s - x)),
    (h = 13 * o * (l - R)),
    [o, c, h]
  );
};
var Ap = {
  name: "lchuv",
  channel: ["lightness", "chroma", "hue"],
  alias: ["LCHuv", "cielchuv"],
  min: [0, 0, 0],
  max: [100, 100, 360],
  luv: function (r) {
    var t = r[0],
      i = r[1],
      s = r[2],
      l,
      o,
      c;
    return (
      (c = (s / 360) * 2 * Math.PI),
      (l = i * Math.cos(c)),
      (o = i * Math.sin(c)),
      [t, l, o]
    );
  },
  xyz: function (r) {
    return Nd.xyz(Ap.luv(r));
  },
};
Nd.lchuv = function (r) {
  var t = r[0],
    i = r[1],
    s = r[2],
    l = Math.sqrt(i * i + s * s),
    o = Math.atan2(s, i),
    c = (o * 360) / 2 / Math.PI;
  return c < 0 && (c += 360), [t, l, c];
};
De.lchuv = function (r) {
  return Nd.lchuv(De.luv(r));
};
const Gd = [NaN, NaN, NaN, 0];
function ux(r) {
  return typeof r == "string" ? r : Ud(r);
}
const cx = 1024,
  Ca = {};
let Mf = 0;
function hx(r) {
  if (r.length === 4) return r;
  const t = r.slice();
  return (t[3] = 1), t;
}
function cy(r) {
  const t = De.lchuv(Ya.xyz(r));
  return (t[3] = r[3]), t;
}
function fx(r) {
  const t = De.rgb(Ap.xyz(r));
  return (t[3] = r[3]), t;
}
function Fd(r) {
  if (r === "none") return Gd;
  if (Ca.hasOwnProperty(r)) return Ca[r];
  if (Mf >= cx) {
    let i = 0;
    for (const s in Ca) (i++ & 3) === 0 && (delete Ca[s], --Mf);
  }
  const t = ox(r);
  if (t.length !== 4) throw new Error('failed to parse "' + r + '" as color');
  for (const i of t)
    if (isNaN(i)) throw new Error('failed to parse "' + r + '" as color');
  return Mp(t), (Ca[r] = t), ++Mf, t;
}
function vl(r) {
  return Array.isArray(r) ? r : Fd(r);
}
function Mp(r) {
  return (
    (r[0] = se((r[0] + 0.5) | 0, 0, 255)),
    (r[1] = se((r[1] + 0.5) | 0, 0, 255)),
    (r[2] = se((r[2] + 0.5) | 0, 0, 255)),
    (r[3] = se(r[3], 0, 1)),
    r
  );
}
function Ud(r) {
  let t = r[0];
  t != (t | 0) && (t = (t + 0.5) | 0);
  let i = r[1];
  i != (i | 0) && (i = (i + 0.5) | 0);
  let s = r[2];
  s != (s | 0) && (s = (s + 0.5) | 0);
  const l = r[3] === void 0 ? 1 : Math.round(r[3] * 1e3) / 1e3;
  return "rgba(" + t + "," + i + "," + s + "," + l + ")";
}
function me(r, t, i, s) {
  let l;
  return (
    i && i.length
      ? (l = i.shift())
      : Rp
        ? (l = new OffscreenCanvas(r || 300, t || 300))
        : (l = document.createElement("canvas")),
    r && (l.width = r),
    t && (l.height = t),
    l.getContext("2d", s)
  );
}
let Of;
function Nu() {
  return Of || (Of = me(1, 1)), Of;
}
function rc(r) {
  const t = r.canvas;
  (t.width = 1), (t.height = 1), r.clearRect(0, 0, 1, 1);
}
function dx(r) {
  let t = r.offsetWidth;
  const i = getComputedStyle(r);
  return (t += parseInt(i.marginLeft, 10) + parseInt(i.marginRight, 10)), t;
}
function gx(r) {
  let t = r.offsetHeight;
  const i = getComputedStyle(r);
  return (t += parseInt(i.marginTop, 10) + parseInt(i.marginBottom, 10)), t;
}
function hy(r, t) {
  const i = t.parentNode;
  i && i.replaceChild(r, t);
}
function Op(r) {
  for (; r.lastChild; ) r.lastChild.remove();
}
function _x(r, t) {
  const i = r.childNodes;
  for (let s = 0; ; ++s) {
    const l = i[s],
      o = t[s];
    if (!l && !o) break;
    if (l !== o) {
      if (!l) {
        r.appendChild(o);
        continue;
      }
      if (!o) {
        r.removeChild(l), --s;
        continue;
      }
      r.insertBefore(o, l);
    }
  }
}
function mx(r, t, i) {
  const s = r;
  let l = !0,
    o = !1,
    c = !1;
  const h = [
    wu(s, pt.LOAD, function () {
      (c = !0), o || t();
    }),
  ];
  return (
    s.src && bp
      ? ((o = !0),
        s
          .decode()
          .then(function () {
            l && t();
          })
          .catch(function (d) {
            l && (c ? t() : i());
          }))
      : h.push(wu(s, pt.ERROR, i)),
    function () {
      (l = !1), h.forEach(jt);
    }
  );
}
function yx(r, t) {
  return new Promise((i, s) => {
    function l() {
      c(), i(r);
    }
    function o() {
      c(), s(new Error("Image load error"));
    }
    function c() {
      r.removeEventListener("load", l), r.removeEventListener("error", o);
    }
    r.addEventListener("load", l), r.addEventListener("error", o);
  });
}
function px(r, t) {
  return (
    t && (r.src = t),
    r.src && bp
      ? new Promise((i, s) =>
          r
            .decode()
            .then(() => i(r))
            .catch((l) => (r.complete && r.width ? i(r) : s(l))),
        )
      : yx(r)
  );
}
class vx {
  constructor() {
    (this.cache_ = {}),
      (this.patternCache_ = {}),
      (this.cacheSize_ = 0),
      (this.maxCacheSize_ = 1024);
  }
  clear() {
    (this.cache_ = {}), (this.patternCache_ = {}), (this.cacheSize_ = 0);
  }
  canExpireCache() {
    return this.cacheSize_ > this.maxCacheSize_;
  }
  expire() {
    if (this.canExpireCache()) {
      let t = 0;
      for (const i in this.cache_) {
        const s = this.cache_[i];
        (t++ & 3) === 0 &&
          !s.hasListener() &&
          (delete this.cache_[i],
          delete this.patternCache_[i],
          --this.cacheSize_);
      }
    }
  }
  get(t, i, s) {
    const l = Df(t, i, s);
    return l in this.cache_ ? this.cache_[l] : null;
  }
  getPattern(t, i, s) {
    const l = Df(t, i, s);
    return l in this.patternCache_ ? this.patternCache_[l] : null;
  }
  set(t, i, s, l, o) {
    const c = Df(t, i, s),
      h = c in this.cache_;
    (this.cache_[c] = l),
      o &&
        (l.getImageState() === xt.IDLE && l.load(),
        l.getImageState() === xt.LOADING
          ? l.ready().then(() => {
              this.patternCache_[c] = Nu().createPattern(
                l.getImage(1),
                "repeat",
              );
            })
          : (this.patternCache_[c] = Nu().createPattern(
              l.getImage(1),
              "repeat",
            ))),
      h || ++this.cacheSize_;
  }
  setSize(t) {
    (this.maxCacheSize_ = t), this.expire();
  }
}
function Df(r, t, i) {
  const s = i ? vl(i) : "null";
  return t + ":" + r + ":" + s;
}
const Si = new vx();
let Ra = null;
class Dp extends Vu {
  constructor(t, i, s, l, o) {
    super(),
      (this.hitDetectionImage_ = null),
      (this.image_ = t),
      (this.crossOrigin_ = s),
      (this.canvas_ = {}),
      (this.color_ = o),
      (this.imageState_ = l === void 0 ? xt.IDLE : l),
      (this.size_ = t && t.width && t.height ? [t.width, t.height] : null),
      (this.src_ = i),
      this.tainted_,
      (this.ready_ = null);
  }
  initializeImage_() {
    (this.image_ = new Image()),
      this.crossOrigin_ !== null &&
        (this.image_.crossOrigin = this.crossOrigin_);
  }
  isTainted_() {
    if (this.tainted_ === void 0 && this.imageState_ === xt.LOADED) {
      Ra || (Ra = me(1, 1, void 0, { willReadFrequently: !0 })),
        Ra.drawImage(this.image_, 0, 0);
      try {
        Ra.getImageData(0, 0, 1, 1), (this.tainted_ = !1);
      } catch {
        (Ra = null), (this.tainted_ = !0);
      }
    }
    return this.tainted_ === !0;
  }
  dispatchChangeEvent_() {
    this.dispatchEvent(pt.CHANGE);
  }
  handleImageError_() {
    (this.imageState_ = xt.ERROR), this.dispatchChangeEvent_();
  }
  handleImageLoad_() {
    (this.imageState_ = xt.LOADED),
      (this.size_ = [this.image_.width, this.image_.height]),
      this.dispatchChangeEvent_();
  }
  getImage(t) {
    return (
      this.image_ || this.initializeImage_(),
      this.replaceColor_(t),
      this.canvas_[t] ? this.canvas_[t] : this.image_
    );
  }
  getPixelRatio(t) {
    return this.replaceColor_(t), this.canvas_[t] ? t : 1;
  }
  getImageState() {
    return this.imageState_;
  }
  getHitDetectionImage() {
    if ((this.image_ || this.initializeImage_(), !this.hitDetectionImage_))
      if (this.isTainted_()) {
        const t = this.size_[0],
          i = this.size_[1],
          s = me(t, i);
        s.fillRect(0, 0, t, i), (this.hitDetectionImage_ = s.canvas);
      } else this.hitDetectionImage_ = this.image_;
    return this.hitDetectionImage_;
  }
  getSize() {
    return this.size_;
  }
  getSrc() {
    return this.src_;
  }
  load() {
    if (this.imageState_ === xt.IDLE) {
      this.image_ || this.initializeImage_(), (this.imageState_ = xt.LOADING);
      try {
        this.src_ !== void 0 && (this.image_.src = this.src_);
      } catch {
        this.handleImageError_();
      }
      this.image_ instanceof HTMLImageElement &&
        px(this.image_, this.src_)
          .then((t) => {
            (this.image_ = t), this.handleImageLoad_();
          })
          .catch(this.handleImageError_.bind(this));
    }
  }
  replaceColor_(t) {
    if (!this.color_ || this.canvas_[t] || this.imageState_ !== xt.LOADED)
      return;
    const i = this.image_,
      s = me(Math.ceil(i.width * t), Math.ceil(i.height * t)),
      l = s.canvas;
    s.scale(t, t),
      s.drawImage(i, 0, 0),
      (s.globalCompositeOperation = "multiply"),
      (s.fillStyle = ux(this.color_)),
      s.fillRect(0, 0, l.width / t, l.height / t),
      (s.globalCompositeOperation = "destination-in"),
      s.drawImage(i, 0, 0),
      (this.canvas_[t] = l);
  }
  ready() {
    return (
      this.ready_ ||
        (this.ready_ = new Promise((t) => {
          if (this.imageState_ === xt.LOADED || this.imageState_ === xt.ERROR)
            t();
          else {
            const i = () => {
              (this.imageState_ === xt.LOADED ||
                this.imageState_ === xt.ERROR) &&
                (this.removeEventListener(pt.CHANGE, i), t());
            };
            this.addEventListener(pt.CHANGE, i);
          }
        })),
      this.ready_
    );
  }
}
function Xd(r, t, i, s, l, o) {
  let c = t === void 0 ? void 0 : Si.get(t, i, l);
  return (
    c ||
      ((c = new Dp(r, r && "src" in r ? r.src || void 0 : t, i, s, l)),
      Si.set(t, i, l, c, o)),
    o && c && !Si.getPattern(t, i, l) && Si.set(t, i, l, c, o),
    c
  );
}
function tn(r) {
  return r
    ? Array.isArray(r)
      ? Ud(r)
      : typeof r == "object" && "src" in r
        ? Ex(r)
        : r
    : null;
}
function Ex(r) {
  if (!r.offset || !r.size) return Si.getPattern(r.src, "anonymous", r.color);
  const t = r.src + ":" + r.offset,
    i = Si.getPattern(t, void 0, r.color);
  if (i) return i;
  const s = Si.get(r.src, "anonymous", null);
  if (s.getImageState() !== xt.LOADED) return null;
  const l = me(r.size[0], r.size[1]);
  return (
    l.drawImage(
      s.getImage(1),
      r.offset[0],
      r.offset[1],
      r.size[0],
      r.size[1],
      0,
      0,
      r.size[0],
      r.size[1],
    ),
    Xd(l.canvas, t, void 0, xt.LOADED, r.color, !0),
    Si.getPattern(t, void 0, r.color)
  );
}
class Lp {
  drawCustom(t, i, s, l, o) {}
  drawGeometry(t) {}
  setStyle(t) {}
  drawCircle(t, i, s) {}
  drawFeature(t, i, s) {}
  drawGeometryCollection(t, i, s) {}
  drawLineString(t, i, s) {}
  drawMultiLineString(t, i, s) {}
  drawMultiPoint(t, i, s) {}
  drawMultiPolygon(t, i, s) {}
  drawPoint(t, i, s) {}
  drawPolygon(t, i, s) {}
  drawText(t, i, s) {}
  setFillStrokeStyle(t, i) {}
  setImageStyle(t, i) {}
  setTextStyle(t, i) {}
}
const pu = "ol-hidden",
  Sx = "ol-selectable",
  lc = "ol-unselectable",
  Yd = "ol-control",
  fy = "ol-collapsed",
  xx = new RegExp(
    [
      "^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)",
      "(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)",
      "(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)",
      "(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?",
      "(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))",
      "(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",
      `?\\s*([-,\\"\\'\\sa-z]+?)\\s*$`,
    ].join(""),
    "i",
  ),
  dy = ["style", "variant", "weight", "size", "lineHeight", "family"],
  Ip = function (r) {
    const t = r.match(xx);
    if (!t) return null;
    const i = {
      lineHeight: "normal",
      size: "1.2em",
      style: "normal",
      weight: "normal",
      variant: "normal",
    };
    for (let s = 0, l = dy.length; s < l; ++s) {
      const o = t[s + 1];
      o !== void 0 && (i[dy[s]] = o);
    }
    return (i.families = i.family.split(/,\s?/)), i;
  },
  zp = "10px sans-serif",
  He = "#000",
  El = "round",
  Dn = [],
  Ln = 0,
  Sl = "round",
  Pa = 10,
  ka = "#000",
  Ba = "center",
  Gu = "middle",
  er = [0, 0, 0, 0],
  Ha = 1,
  wn = new Ui();
let el = null,
  rd;
const ld = {},
  Tx = (function () {
    const t = "32px ",
      i = ["monospace", "serif"],
      s = i.length,
      l = "wmytzilWMYTZIL@#/&?$%10";
    let o, c;
    function h(_, m, y) {
      let v = !0;
      for (let E = 0; E < s; ++E) {
        const x = i[E];
        if (((c = Fu(_ + " " + m + " " + t + x, l)), y != x)) {
          const R = Fu(_ + " " + m + " " + t + y + "," + x, l);
          v = v && R != c;
        }
      }
      return !!v;
    }
    function d() {
      let _ = !0;
      const m = wn.getKeys();
      for (let y = 0, v = m.length; y < v; ++y) {
        const E = m[y];
        if (wn.get(E) < 100) {
          const [x, R, b] = E.split(`
`);
          h(x, R, b)
            ? (Ka(ld), (el = null), (rd = void 0), wn.set(E, 100))
            : (wn.set(E, wn.get(E) + 1, !0), (_ = !1));
        }
      }
      _ && (clearInterval(o), (o = void 0));
    }
    return function (_) {
      const m = Ip(_);
      if (!m) return;
      const y = m.families;
      for (let v = 0, E = y.length; v < E; ++v) {
        const x = y[v],
          R =
            m.style +
            `
` +
            m.weight +
            `
` +
            x;
        wn.get(R) === void 0 &&
          (wn.set(R, 100, !0),
          h(m.style, m.weight, x) ||
            (wn.set(R, 0, !0), o === void 0 && (o = setInterval(d, 32))));
      }
    };
  })(),
  Cx = (function () {
    let r;
    return function (t) {
      let i = ld[t];
      if (i == null) {
        if (Rp) {
          const s = Ip(t),
            l = Np(t, "Žg");
          i =
            (isNaN(Number(s.lineHeight)) ? 1.2 : Number(s.lineHeight)) *
            (l.actualBoundingBoxAscent + l.actualBoundingBoxDescent);
        } else
          r ||
            ((r = document.createElement("div")),
            (r.innerHTML = "M"),
            (r.style.minHeight = "0"),
            (r.style.maxHeight = "none"),
            (r.style.height = "auto"),
            (r.style.padding = "0"),
            (r.style.border = "none"),
            (r.style.position = "absolute"),
            (r.style.display = "block"),
            (r.style.left = "-99999px")),
            (r.style.font = t),
            document.body.appendChild(r),
            (i = r.offsetHeight),
            document.body.removeChild(r);
        ld[t] = i;
      }
      return i;
    };
  })();
function Np(r, t) {
  return (
    el || (el = me(1, 1)),
    r != rd && ((el.font = r), (rd = el.font)),
    el.measureText(t)
  );
}
function Fu(r, t) {
  return Np(r, t).width;
}
function gy(r, t, i) {
  if (t in i) return i[t];
  const s = t
    .split(
      `
`,
    )
    .reduce((l, o) => Math.max(l, Fu(r, o)), 0);
  return (i[t] = s), s;
}
function Rx(r, t) {
  const i = [],
    s = [],
    l = [];
  let o = 0,
    c = 0,
    h = 0,
    d = 0;
  for (let _ = 0, m = t.length; _ <= m; _ += 2) {
    const y = t[_];
    if (
      y ===
        `
` ||
      _ === m
    ) {
      (o = Math.max(o, c)), l.push(c), (c = 0), (h += d), (d = 0);
      continue;
    }
    const v = t[_ + 1] || r.font,
      E = Fu(v, y);
    i.push(E), (c += E);
    const x = Cx(v);
    s.push(x), (d = Math.max(d, x));
  }
  return { width: o, height: h, widths: i, heights: s, lineWidths: l };
}
function bx(r, t, i, s, l, o, c, h, d, _, m) {
  r.save(),
    i !== 1 &&
      (r.globalAlpha === void 0
        ? (r.globalAlpha = (y) => (y.globalAlpha *= i))
        : (r.globalAlpha *= i)),
    t && r.transform.apply(r, t),
    s.contextInstructions
      ? (r.translate(d, _), r.scale(m[0], m[1]), wx(s, r))
      : m[0] < 0 || m[1] < 0
        ? (r.translate(d, _),
          r.scale(m[0], m[1]),
          r.drawImage(s, l, o, c, h, 0, 0, c, h))
        : r.drawImage(s, l, o, c, h, d, _, c * m[0], h * m[1]),
    r.restore();
}
function wx(r, t) {
  const i = r.contextInstructions;
  for (let s = 0, l = i.length; s < l; s += 2)
    Array.isArray(i[s + 1]) ? t[i[s]].apply(t, i[s + 1]) : (t[i[s]] = i[s + 1]);
}
class Ax extends Lp {
  constructor(t, i, s, l, o, c, h) {
    super(),
      (this.context_ = t),
      (this.pixelRatio_ = i),
      (this.extent_ = s),
      (this.transform_ = l),
      (this.transformRotation_ = l ? pd(Math.atan2(l[1], l[0]), 10) : 0),
      (this.viewRotation_ = o),
      (this.squaredTolerance_ = c),
      (this.userTransform_ = h),
      (this.contextFillState_ = null),
      (this.contextStrokeState_ = null),
      (this.contextTextState_ = null),
      (this.fillState_ = null),
      (this.strokeState_ = null),
      (this.image_ = null),
      (this.imageAnchorX_ = 0),
      (this.imageAnchorY_ = 0),
      (this.imageHeight_ = 0),
      (this.imageOpacity_ = 0),
      (this.imageOriginX_ = 0),
      (this.imageOriginY_ = 0),
      (this.imageRotateWithView_ = !1),
      (this.imageRotation_ = 0),
      (this.imageScale_ = [0, 0]),
      (this.imageWidth_ = 0),
      (this.text_ = ""),
      (this.textOffsetX_ = 0),
      (this.textOffsetY_ = 0),
      (this.textRotateWithView_ = !1),
      (this.textRotation_ = 0),
      (this.textScale_ = [0, 0]),
      (this.textFillState_ = null),
      (this.textStrokeState_ = null),
      (this.textState_ = null),
      (this.pixelCoordinates_ = []),
      (this.tmpLocalTransform_ = Gi());
  }
  drawImages_(t, i, s, l) {
    if (!this.image_) return;
    const o = ps(t, i, s, l, this.transform_, this.pixelCoordinates_),
      c = this.context_,
      h = this.tmpLocalTransform_,
      d = c.globalAlpha;
    this.imageOpacity_ != 1 && (c.globalAlpha = d * this.imageOpacity_);
    let _ = this.imageRotation_;
    this.transformRotation_ === 0 && (_ -= this.viewRotation_),
      this.imageRotateWithView_ && (_ += this.viewRotation_);
    for (let m = 0, y = o.length; m < y; m += 2) {
      const v = o[m] - this.imageAnchorX_,
        E = o[m + 1] - this.imageAnchorY_;
      if (_ !== 0 || this.imageScale_[0] != 1 || this.imageScale_[1] != 1) {
        const x = v + this.imageAnchorX_,
          R = E + this.imageAnchorY_;
        zn(h, x, R, 1, 1, _, -x, -R),
          c.save(),
          c.transform.apply(c, h),
          c.translate(x, R),
          c.scale(this.imageScale_[0], this.imageScale_[1]),
          c.drawImage(
            this.image_,
            this.imageOriginX_,
            this.imageOriginY_,
            this.imageWidth_,
            this.imageHeight_,
            -this.imageAnchorX_,
            -this.imageAnchorY_,
            this.imageWidth_,
            this.imageHeight_,
          ),
          c.restore();
      } else
        c.drawImage(
          this.image_,
          this.imageOriginX_,
          this.imageOriginY_,
          this.imageWidth_,
          this.imageHeight_,
          v,
          E,
          this.imageWidth_,
          this.imageHeight_,
        );
    }
    this.imageOpacity_ != 1 && (c.globalAlpha = d);
  }
  drawText_(t, i, s, l) {
    if (!this.textState_ || this.text_ === "") return;
    this.textFillState_ && this.setContextFillState_(this.textFillState_),
      this.textStrokeState_ &&
        this.setContextStrokeState_(this.textStrokeState_),
      this.setContextTextState_(this.textState_);
    const o = ps(t, i, s, l, this.transform_, this.pixelCoordinates_),
      c = this.context_;
    let h = this.textRotation_;
    for (
      this.transformRotation_ === 0 && (h -= this.viewRotation_),
        this.textRotateWithView_ && (h += this.viewRotation_);
      i < s;
      i += l
    ) {
      const d = o[i] + this.textOffsetX_,
        _ = o[i + 1] + this.textOffsetY_;
      h !== 0 || this.textScale_[0] != 1 || this.textScale_[1] != 1
        ? (c.save(),
          c.translate(d - this.textOffsetX_, _ - this.textOffsetY_),
          c.rotate(h),
          c.translate(this.textOffsetX_, this.textOffsetY_),
          c.scale(this.textScale_[0], this.textScale_[1]),
          this.textStrokeState_ && c.strokeText(this.text_, 0, 0),
          this.textFillState_ && c.fillText(this.text_, 0, 0),
          c.restore())
        : (this.textStrokeState_ && c.strokeText(this.text_, d, _),
          this.textFillState_ && c.fillText(this.text_, d, _));
    }
  }
  moveToLineTo_(t, i, s, l, o) {
    const c = this.context_,
      h = ps(t, i, s, l, this.transform_, this.pixelCoordinates_);
    c.moveTo(h[0], h[1]);
    let d = h.length;
    o && (d -= 2);
    for (let _ = 2; _ < d; _ += 2) c.lineTo(h[_], h[_ + 1]);
    return o && c.closePath(), s;
  }
  drawRings_(t, i, s, l) {
    for (let o = 0, c = s.length; o < c; ++o)
      i = this.moveToLineTo_(t, i, s[o], l, !0);
    return i;
  }
  drawCircle(t) {
    if (
      (this.squaredTolerance_ &&
        (t = t.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!Ze(this.extent_, t.getExtent()))
    ) {
      if (this.fillState_ || this.strokeState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const i = HS(t, this.transform_, this.pixelCoordinates_),
          s = i[2] - i[0],
          l = i[3] - i[1],
          o = Math.sqrt(s * s + l * l),
          c = this.context_;
        c.beginPath(),
          c.arc(i[0], i[1], o, 0, 2 * Math.PI),
          this.fillState_ && c.fill(),
          this.strokeState_ && c.stroke();
      }
      this.text_ !== "" && this.drawText_(t.getCenter(), 0, 2, 2);
    }
  }
  setStyle(t) {
    this.setFillStrokeStyle(t.getFill(), t.getStroke()),
      this.setImageStyle(t.getImage()),
      this.setTextStyle(t.getText());
  }
  setTransform(t) {
    this.transform_ = t;
  }
  drawGeometry(t) {
    switch (t.getType()) {
      case "Point":
        this.drawPoint(t);
        break;
      case "LineString":
        this.drawLineString(t);
        break;
      case "Polygon":
        this.drawPolygon(t);
        break;
      case "MultiPoint":
        this.drawMultiPoint(t);
        break;
      case "MultiLineString":
        this.drawMultiLineString(t);
        break;
      case "MultiPolygon":
        this.drawMultiPolygon(t);
        break;
      case "GeometryCollection":
        this.drawGeometryCollection(t);
        break;
      case "Circle":
        this.drawCircle(t);
        break;
    }
  }
  drawFeature(t, i) {
    const s = i.getGeometryFunction()(t);
    s && (this.setStyle(i), this.drawGeometry(s));
  }
  drawGeometryCollection(t) {
    const i = t.getGeometriesArray();
    for (let s = 0, l = i.length; s < l; ++s) this.drawGeometry(i[s]);
  }
  drawPoint(t) {
    this.squaredTolerance_ &&
      (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
    const i = t.getFlatCoordinates(),
      s = t.getStride();
    this.image_ && this.drawImages_(i, 0, i.length, s),
      this.text_ !== "" && this.drawText_(i, 0, i.length, s);
  }
  drawMultiPoint(t) {
    this.squaredTolerance_ &&
      (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
    const i = t.getFlatCoordinates(),
      s = t.getStride();
    this.image_ && this.drawImages_(i, 0, i.length, s),
      this.text_ !== "" && this.drawText_(i, 0, i.length, s);
  }
  drawLineString(t) {
    if (
      (this.squaredTolerance_ &&
        (t = t.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!Ze(this.extent_, t.getExtent()))
    ) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        const i = this.context_,
          s = t.getFlatCoordinates();
        i.beginPath(),
          this.moveToLineTo_(s, 0, s.length, t.getStride(), !1),
          i.stroke();
      }
      if (this.text_ !== "") {
        const i = t.getFlatMidpoint();
        this.drawText_(i, 0, 2, 2);
      }
    }
  }
  drawMultiLineString(t) {
    this.squaredTolerance_ &&
      (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
    const i = t.getExtent();
    if (Ze(this.extent_, i)) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        const s = this.context_,
          l = t.getFlatCoordinates();
        let o = 0;
        const c = t.getEnds(),
          h = t.getStride();
        s.beginPath();
        for (let d = 0, _ = c.length; d < _; ++d)
          o = this.moveToLineTo_(l, o, c[d], h, !1);
        s.stroke();
      }
      if (this.text_ !== "") {
        const s = t.getFlatMidpoints();
        this.drawText_(s, 0, s.length, 2);
      }
    }
  }
  drawPolygon(t) {
    if (
      (this.squaredTolerance_ &&
        (t = t.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!Ze(this.extent_, t.getExtent()))
    ) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const i = this.context_;
        i.beginPath(),
          this.drawRings_(
            t.getOrientedFlatCoordinates(),
            0,
            t.getEnds(),
            t.getStride(),
          ),
          this.fillState_ && i.fill(),
          this.strokeState_ && i.stroke();
      }
      if (this.text_ !== "") {
        const i = t.getFlatInteriorPoint();
        this.drawText_(i, 0, 2, 2);
      }
    }
  }
  drawMultiPolygon(t) {
    if (
      (this.squaredTolerance_ &&
        (t = t.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!Ze(this.extent_, t.getExtent()))
    ) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const i = this.context_,
          s = t.getOrientedFlatCoordinates();
        let l = 0;
        const o = t.getEndss(),
          c = t.getStride();
        i.beginPath();
        for (let h = 0, d = o.length; h < d; ++h) {
          const _ = o[h];
          l = this.drawRings_(s, l, _, c);
        }
        this.fillState_ && i.fill(), this.strokeState_ && i.stroke();
      }
      if (this.text_ !== "") {
        const i = t.getFlatInteriorPoints();
        this.drawText_(i, 0, i.length, 2);
      }
    }
  }
  setContextFillState_(t) {
    const i = this.context_,
      s = this.contextFillState_;
    s
      ? s.fillStyle != t.fillStyle &&
        ((s.fillStyle = t.fillStyle), (i.fillStyle = t.fillStyle))
      : ((i.fillStyle = t.fillStyle),
        (this.contextFillState_ = { fillStyle: t.fillStyle }));
  }
  setContextStrokeState_(t) {
    const i = this.context_,
      s = this.contextStrokeState_;
    s
      ? (s.lineCap != t.lineCap &&
          ((s.lineCap = t.lineCap), (i.lineCap = t.lineCap)),
        Ts(s.lineDash, t.lineDash) || i.setLineDash((s.lineDash = t.lineDash)),
        s.lineDashOffset != t.lineDashOffset &&
          ((s.lineDashOffset = t.lineDashOffset),
          (i.lineDashOffset = t.lineDashOffset)),
        s.lineJoin != t.lineJoin &&
          ((s.lineJoin = t.lineJoin), (i.lineJoin = t.lineJoin)),
        s.lineWidth != t.lineWidth &&
          ((s.lineWidth = t.lineWidth), (i.lineWidth = t.lineWidth)),
        s.miterLimit != t.miterLimit &&
          ((s.miterLimit = t.miterLimit), (i.miterLimit = t.miterLimit)),
        s.strokeStyle != t.strokeStyle &&
          ((s.strokeStyle = t.strokeStyle), (i.strokeStyle = t.strokeStyle)))
      : ((i.lineCap = t.lineCap),
        i.setLineDash(t.lineDash),
        (i.lineDashOffset = t.lineDashOffset),
        (i.lineJoin = t.lineJoin),
        (i.lineWidth = t.lineWidth),
        (i.miterLimit = t.miterLimit),
        (i.strokeStyle = t.strokeStyle),
        (this.contextStrokeState_ = {
          lineCap: t.lineCap,
          lineDash: t.lineDash,
          lineDashOffset: t.lineDashOffset,
          lineJoin: t.lineJoin,
          lineWidth: t.lineWidth,
          miterLimit: t.miterLimit,
          strokeStyle: t.strokeStyle,
        }));
  }
  setContextTextState_(t) {
    const i = this.context_,
      s = this.contextTextState_,
      l = t.textAlign ? t.textAlign : Ba;
    s
      ? (s.font != t.font && ((s.font = t.font), (i.font = t.font)),
        s.textAlign != l && ((s.textAlign = l), (i.textAlign = l)),
        s.textBaseline != t.textBaseline &&
          ((s.textBaseline = t.textBaseline),
          (i.textBaseline = t.textBaseline)))
      : ((i.font = t.font),
        (i.textAlign = l),
        (i.textBaseline = t.textBaseline),
        (this.contextTextState_ = {
          font: t.font,
          textAlign: l,
          textBaseline: t.textBaseline,
        }));
  }
  setFillStrokeStyle(t, i) {
    if (!t) this.fillState_ = null;
    else {
      const s = t.getColor();
      this.fillState_ = { fillStyle: tn(s || He) };
    }
    if (!i) this.strokeState_ = null;
    else {
      const s = i.getColor(),
        l = i.getLineCap(),
        o = i.getLineDash(),
        c = i.getLineDashOffset(),
        h = i.getLineJoin(),
        d = i.getWidth(),
        _ = i.getMiterLimit(),
        m = o || Dn;
      this.strokeState_ = {
        lineCap: l !== void 0 ? l : El,
        lineDash:
          this.pixelRatio_ === 1 ? m : m.map((y) => y * this.pixelRatio_),
        lineDashOffset: (c || Ln) * this.pixelRatio_,
        lineJoin: h !== void 0 ? h : Sl,
        lineWidth: (d !== void 0 ? d : Ha) * this.pixelRatio_,
        miterLimit: _ !== void 0 ? _ : Pa,
        strokeStyle: tn(s || ka),
      };
    }
  }
  setImageStyle(t) {
    let i;
    if (!t || !(i = t.getSize())) {
      this.image_ = null;
      return;
    }
    const s = t.getPixelRatio(this.pixelRatio_),
      l = t.getAnchor(),
      o = t.getOrigin();
    (this.image_ = t.getImage(this.pixelRatio_)),
      (this.imageAnchorX_ = l[0] * s),
      (this.imageAnchorY_ = l[1] * s),
      (this.imageHeight_ = i[1] * s),
      (this.imageOpacity_ = t.getOpacity()),
      (this.imageOriginX_ = o[0]),
      (this.imageOriginY_ = o[1]),
      (this.imageRotateWithView_ = t.getRotateWithView()),
      (this.imageRotation_ = t.getRotation());
    const c = t.getScaleArray();
    (this.imageScale_ = [
      (c[0] * this.pixelRatio_) / s,
      (c[1] * this.pixelRatio_) / s,
    ]),
      (this.imageWidth_ = i[0] * s);
  }
  setTextStyle(t) {
    if (!t) this.text_ = "";
    else {
      const i = t.getFill();
      if (!i) this.textFillState_ = null;
      else {
        const E = i.getColor();
        this.textFillState_ = { fillStyle: tn(E || He) };
      }
      const s = t.getStroke();
      if (!s) this.textStrokeState_ = null;
      else {
        const E = s.getColor(),
          x = s.getLineCap(),
          R = s.getLineDash(),
          b = s.getLineDashOffset(),
          w = s.getLineJoin(),
          M = s.getWidth(),
          G = s.getMiterLimit();
        this.textStrokeState_ = {
          lineCap: x !== void 0 ? x : El,
          lineDash: R || Dn,
          lineDashOffset: b || Ln,
          lineJoin: w !== void 0 ? w : Sl,
          lineWidth: M !== void 0 ? M : Ha,
          miterLimit: G !== void 0 ? G : Pa,
          strokeStyle: tn(E || ka),
        };
      }
      const l = t.getFont(),
        o = t.getOffsetX(),
        c = t.getOffsetY(),
        h = t.getRotateWithView(),
        d = t.getRotation(),
        _ = t.getScaleArray(),
        m = t.getText(),
        y = t.getTextAlign(),
        v = t.getTextBaseline();
      (this.textState_ = {
        font: l !== void 0 ? l : zp,
        textAlign: y !== void 0 ? y : Ba,
        textBaseline: v !== void 0 ? v : Gu,
      }),
        (this.text_ =
          m !== void 0
            ? Array.isArray(m)
              ? m.reduce((E, x, R) => (E += R % 2 ? " " : x), "")
              : m
            : ""),
        (this.textOffsetX_ = o !== void 0 ? this.pixelRatio_ * o : 0),
        (this.textOffsetY_ = c !== void 0 ? this.pixelRatio_ * c : 0),
        (this.textRotateWithView_ = h !== void 0 ? h : !1),
        (this.textRotation_ = d !== void 0 ? d : 0),
        (this.textScale_ = [this.pixelRatio_ * _[0], this.pixelRatio_ * _[1]]);
    }
  }
}
const Mx = 0.5,
  Gp = {
    Point: Fx,
    LineString: zx,
    Polygon: Xx,
    MultiPoint: Ux,
    MultiLineString: Nx,
    MultiPolygon: Gx,
    GeometryCollection: Ix,
    Circle: Dx,
  };
function Ox(r, t) {
  return parseInt(zt(r), 10) - parseInt(zt(t), 10);
}
function _y(r, t) {
  const i = Fp(r, t);
  return i * i;
}
function Fp(r, t) {
  return (Mx * r) / t;
}
function Dx(r, t, i, s, l) {
  const o = i.getFill(),
    c = i.getStroke();
  if (o || c) {
    const d = r.getBuilder(i.getZIndex(), "Circle");
    d.setFillStrokeStyle(o, c), d.drawCircle(t, s, l);
  }
  const h = i.getText();
  if (h && h.getText()) {
    const d = r.getBuilder(i.getZIndex(), "Text");
    d.setTextStyle(h), d.drawText(t, s);
  }
}
function my(r, t, i, s, l, o, c, h) {
  const d = [],
    _ = i.getImage();
  if (_) {
    let v = !0;
    const E = _.getImageState();
    E == xt.LOADED || E == xt.ERROR ? (v = !1) : E == xt.IDLE && _.load(),
      v && d.push(_.ready());
  }
  const m = i.getFill();
  m && m.loading() && d.push(m.ready());
  const y = d.length > 0;
  return y && Promise.all(d).then(() => l(null)), Lx(r, t, i, s, o, c, h), y;
}
function Lx(r, t, i, s, l, o, c) {
  const h = i.getGeometryFunction()(t);
  if (!h) return;
  const d = h.simplifyTransformed(s, l);
  if (i.getRenderer()) Up(r, d, i, t, c);
  else {
    const m = Gp[d.getType()];
    m(r, d, i, t, c, o);
  }
}
function Up(r, t, i, s, l) {
  if (t.getType() == "GeometryCollection") {
    const c = t.getGeometries();
    for (let h = 0, d = c.length; h < d; ++h) Up(r, c[h], i, s, l);
    return;
  }
  r.getBuilder(i.getZIndex(), "Default").drawCustom(
    t,
    s,
    i.getRenderer(),
    i.getHitDetectionRenderer(),
    l,
  );
}
function Ix(r, t, i, s, l, o) {
  const c = t.getGeometriesArray();
  let h, d;
  for (h = 0, d = c.length; h < d; ++h) {
    const _ = Gp[c[h].getType()];
    _(r, c[h], i, s, l, o);
  }
}
function zx(r, t, i, s, l) {
  const o = i.getStroke();
  if (o) {
    const h = r.getBuilder(i.getZIndex(), "LineString");
    h.setFillStrokeStyle(null, o), h.drawLineString(t, s, l);
  }
  const c = i.getText();
  if (c && c.getText()) {
    const h = r.getBuilder(i.getZIndex(), "Text");
    h.setTextStyle(c), h.drawText(t, s, l);
  }
}
function Nx(r, t, i, s, l) {
  const o = i.getStroke();
  if (o) {
    const h = r.getBuilder(i.getZIndex(), "LineString");
    h.setFillStrokeStyle(null, o), h.drawMultiLineString(t, s, l);
  }
  const c = i.getText();
  if (c && c.getText()) {
    const h = r.getBuilder(i.getZIndex(), "Text");
    h.setTextStyle(c), h.drawText(t, s, l);
  }
}
function Gx(r, t, i, s, l) {
  const o = i.getFill(),
    c = i.getStroke();
  if (c || o) {
    const d = r.getBuilder(i.getZIndex(), "Polygon");
    d.setFillStrokeStyle(o, c), d.drawMultiPolygon(t, s, l);
  }
  const h = i.getText();
  if (h && h.getText()) {
    const d = r.getBuilder(i.getZIndex(), "Text");
    d.setTextStyle(h), d.drawText(t, s, l);
  }
}
function Fx(r, t, i, s, l, o) {
  const c = i.getImage(),
    h = i.getText(),
    d = h && h.getText(),
    _ = o && c && d ? {} : void 0;
  if (c) {
    if (c.getImageState() != xt.LOADED) return;
    const m = r.getBuilder(i.getZIndex(), "Image");
    m.setImageStyle(c, _), m.drawPoint(t, s, l);
  }
  if (d) {
    const m = r.getBuilder(i.getZIndex(), "Text");
    m.setTextStyle(h, _), m.drawText(t, s, l);
  }
}
function Ux(r, t, i, s, l, o) {
  const c = i.getImage(),
    h = c && c.getOpacity() !== 0,
    d = i.getText(),
    _ = d && d.getText(),
    m = o && h && _ ? {} : void 0;
  if (h) {
    if (c.getImageState() != xt.LOADED) return;
    const y = r.getBuilder(i.getZIndex(), "Image");
    y.setImageStyle(c, m), y.drawMultiPoint(t, s, l);
  }
  if (_) {
    const y = r.getBuilder(i.getZIndex(), "Text");
    y.setTextStyle(d, m), y.drawText(t, s, l);
  }
}
function Xx(r, t, i, s, l) {
  const o = i.getFill(),
    c = i.getStroke();
  if (o || c) {
    const d = r.getBuilder(i.getZIndex(), "Polygon");
    d.setFillStrokeStyle(o, c), d.drawPolygon(t, s, l);
  }
  const h = i.getText();
  if (h && h.getText()) {
    const d = r.getBuilder(i.getZIndex(), "Text");
    d.setTextStyle(h), d.drawText(t, s, l);
  }
}
let Yx = !1;
function Px(r, t, i, s, l, o, c) {
  const h = new XMLHttpRequest();
  h.open("GET", typeof r == "function" ? r(i, s, l) : r, !0),
    t.getType() == "arraybuffer" && (h.responseType = "arraybuffer"),
    (h.withCredentials = Yx),
    (h.onload = function (d) {
      if (!h.status || (h.status >= 200 && h.status < 300)) {
        const _ = t.getType();
        try {
          let m;
          _ == "text" || _ == "json"
            ? (m = h.responseText)
            : _ == "xml"
              ? (m = h.responseXML || h.responseText)
              : _ == "arraybuffer" && (m = h.response),
            m
              ? o(
                  t.readFeatures(m, { extent: i, featureProjection: l }),
                  t.readProjection(m),
                )
              : c();
        } catch {
          c();
        }
      } else c();
    }),
    (h.onerror = c),
    h.send();
}
function yy(r, t) {
  return function (i, s, l, o, c) {
    Px(
      r,
      t,
      i,
      s,
      l,
      (h, d) => {
        this.addFeatures(h), o !== void 0 && o(h);
      },
      c || dl,
    );
  };
}
function kx(r, t) {
  return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]];
}
function Xp(r, t, i, s) {
  const l = [];
  let o = Ti();
  for (let c = 0, h = i.length; c < h; ++c) {
    const d = i[c];
    (o = yd(r, t, d[0], s)),
      l.push((o[0] + o[2]) / 2, (o[1] + o[3]) / 2),
      (t = d[d.length - 1]);
  }
  return l;
}
class Uu extends fp {
  constructor(t) {
    super(),
      (this.geometries_ = t),
      (this.changeEventsKeys_ = []),
      this.listenGeometriesChange_();
  }
  unlistenGeometriesChange_() {
    this.changeEventsKeys_.forEach(jt), (this.changeEventsKeys_.length = 0);
  }
  listenGeometriesChange_() {
    const t = this.geometries_;
    for (let i = 0, s = t.length; i < s; ++i)
      this.changeEventsKeys_.push(Mt(t[i], pt.CHANGE, this.changed, this));
  }
  clone() {
    const t = new Uu(Lf(this.geometries_));
    return t.applyProperties(this), t;
  }
  closestPointXY(t, i, s, l) {
    if (l < ar(this.getExtent(), t, i)) return l;
    const o = this.geometries_;
    for (let c = 0, h = o.length; c < h; ++c)
      l = o[c].closestPointXY(t, i, s, l);
    return l;
  }
  containsXY(t, i) {
    const s = this.geometries_;
    for (let l = 0, o = s.length; l < o; ++l)
      if (s[l].containsXY(t, i)) return !0;
    return !1;
  }
  computeExtent(t) {
    xl(t);
    const i = this.geometries_;
    for (let s = 0, l = i.length; s < l; ++s) Wy(t, i[s].getExtent());
    return t;
  }
  getGeometries() {
    return Lf(this.geometries_);
  }
  getGeometriesArray() {
    return this.geometries_;
  }
  getGeometriesArrayRecursive() {
    let t = [];
    const i = this.geometries_;
    for (let s = 0, l = i.length; s < l; ++s)
      i[s].getType() === this.getType()
        ? (t = t.concat(i[s].getGeometriesArrayRecursive()))
        : t.push(i[s]);
    return t;
  }
  getSimplifiedGeometry(t) {
    if (
      (this.simplifiedGeometryRevision !== this.getRevision() &&
        ((this.simplifiedGeometryMaxMinSquaredTolerance = 0),
        (this.simplifiedGeometryRevision = this.getRevision())),
      t < 0 ||
        (this.simplifiedGeometryMaxMinSquaredTolerance !== 0 &&
          t < this.simplifiedGeometryMaxMinSquaredTolerance))
    )
      return this;
    const i = [],
      s = this.geometries_;
    let l = !1;
    for (let o = 0, c = s.length; o < c; ++o) {
      const h = s[o],
        d = h.getSimplifiedGeometry(t);
      i.push(d), d !== h && (l = !0);
    }
    return l
      ? new Uu(i)
      : ((this.simplifiedGeometryMaxMinSquaredTolerance = t), this);
  }
  getType() {
    return "GeometryCollection";
  }
  intersectsExtent(t) {
    const i = this.geometries_;
    for (let s = 0, l = i.length; s < l; ++s)
      if (i[s].intersectsExtent(t)) return !0;
    return !1;
  }
  isEmpty() {
    return this.geometries_.length === 0;
  }
  rotate(t, i) {
    const s = this.geometries_;
    for (let l = 0, o = s.length; l < o; ++l) s[l].rotate(t, i);
    this.changed();
  }
  scale(t, i, s) {
    s || (s = vs(this.getExtent()));
    const l = this.geometries_;
    for (let o = 0, c = l.length; o < c; ++o) l[o].scale(t, i, s);
    this.changed();
  }
  setGeometries(t) {
    this.setGeometriesArray(Lf(t));
  }
  setGeometriesArray(t) {
    this.unlistenGeometriesChange_(),
      (this.geometries_ = t),
      this.listenGeometriesChange_(),
      this.changed();
  }
  applyTransform(t) {
    const i = this.geometries_;
    for (let s = 0, l = i.length; s < l; ++s) i[s].applyTransform(t);
    this.changed();
  }
  translate(t, i) {
    const s = this.geometries_;
    for (let l = 0, o = s.length; l < o; ++l) s[l].translate(t, i);
    this.changed();
  }
  disposeInternal() {
    this.unlistenGeometriesChange_(), super.disposeInternal();
  }
}
function Lf(r) {
  return r.map((t) => t.clone());
}
class Xu extends ur {
  constructor(t, i, s) {
    if (
      (super(),
      (this.ends_ = []),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      Array.isArray(t[0]))
    )
      this.setCoordinates(t, i);
    else if (i !== void 0 && s) this.setFlatCoordinates(i, t), (this.ends_ = s);
    else {
      const l = t,
        o = [],
        c = [];
      for (let d = 0, _ = l.length; d < _; ++d) {
        const m = l[d];
        en(o, m.getFlatCoordinates()), c.push(o.length);
      }
      const h = l.length === 0 ? this.getLayout() : l[0].getLayout();
      this.setFlatCoordinates(h, o), (this.ends_ = c);
    }
  }
  appendLineString(t) {
    en(this.flatCoordinates, t.getFlatCoordinates().slice()),
      this.ends_.push(this.flatCoordinates.length),
      this.changed();
  }
  clone() {
    const t = new Xu(
      this.flatCoordinates.slice(),
      this.layout,
      this.ends_.slice(),
    );
    return t.applyProperties(this), t;
  }
  closestPointXY(t, i, s, l) {
    return l < ar(this.getExtent(), t, i)
      ? l
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            wd(this.flatCoordinates, 0, this.ends_, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        Md(
          this.flatCoordinates,
          0,
          this.ends_,
          this.stride,
          this.maxDelta_,
          !1,
          t,
          i,
          s,
          l,
        ));
  }
  getCoordinateAtM(t, i, s) {
    return (this.layout != "XYM" && this.layout != "XYZM") ||
      this.flatCoordinates.length === 0
      ? null
      : ((i = i !== void 0 ? i : !1),
        (s = s !== void 0 ? s : !1),
        nx(this.flatCoordinates, 0, this.ends_, this.stride, t, i, s));
  }
  getCoordinates() {
    return Ua(this.flatCoordinates, 0, this.ends_, this.stride);
  }
  getEnds() {
    return this.ends_;
  }
  getLineString(t) {
    return t < 0 || this.ends_.length <= t
      ? null
      : new pl(
          this.flatCoordinates.slice(
            t === 0 ? 0 : this.ends_[t - 1],
            this.ends_[t],
          ),
          this.layout,
        );
  }
  getLineStrings() {
    const t = this.flatCoordinates,
      i = this.ends_,
      s = this.layout,
      l = [];
    let o = 0;
    for (let c = 0, h = i.length; c < h; ++c) {
      const d = i[c],
        _ = new pl(t.slice(o, d), s);
      l.push(_), (o = d);
    }
    return l;
  }
  getFlatMidpoints() {
    const t = [],
      i = this.flatCoordinates;
    let s = 0;
    const l = this.ends_,
      o = this.stride;
    for (let c = 0, h = l.length; c < h; ++c) {
      const d = l[c],
        _ = zu(i, s, d, o, 0.5);
      en(t, _), (s = d);
    }
    return t;
  }
  getSimplifiedGeometryInternal(t) {
    const i = [],
      s = [];
    return (
      (i.length = mp(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        t,
        i,
        0,
        s,
      )),
      new Xu(i, "XY", s)
    );
  }
  getType() {
    return "MultiLineString";
  }
  intersectsExtent(t) {
    return $S(this.flatCoordinates, 0, this.ends_, this.stride, t);
  }
  setCoordinates(t, i) {
    this.setLayout(i, t, 2),
      this.flatCoordinates || (this.flatCoordinates = []);
    const s = Ja(this.flatCoordinates, 0, t, this.stride, this.ends_);
    (this.flatCoordinates.length = s.length === 0 ? 0 : s[s.length - 1]),
      this.changed();
  }
}
class ac extends ur {
  constructor(t, i) {
    super(),
      i && !Array.isArray(t[0])
        ? this.setFlatCoordinates(i, t)
        : this.setCoordinates(t, i);
  }
  appendPoint(t) {
    en(this.flatCoordinates, t.getFlatCoordinates()), this.changed();
  }
  clone() {
    const t = new ac(this.flatCoordinates.slice(), this.layout);
    return t.applyProperties(this), t;
  }
  closestPointXY(t, i, s, l) {
    if (l < ar(this.getExtent(), t, i)) return l;
    const o = this.flatCoordinates,
      c = this.stride;
    for (let h = 0, d = o.length; h < d; h += c) {
      const _ = sr(t, i, o[h], o[h + 1]);
      if (_ < l) {
        l = _;
        for (let m = 0; m < c; ++m) s[m] = o[h + m];
        s.length = c;
      }
    }
    return l;
  }
  getCoordinates() {
    return _s(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getPoint(t) {
    const i = this.flatCoordinates.length / this.stride;
    return t < 0 || i <= t
      ? null
      : new yl(
          this.flatCoordinates.slice(t * this.stride, (t + 1) * this.stride),
          this.layout,
        );
  }
  getPoints() {
    const t = this.flatCoordinates,
      i = this.layout,
      s = this.stride,
      l = [];
    for (let o = 0, c = t.length; o < c; o += s) {
      const h = new yl(t.slice(o, o + s), i);
      l.push(h);
    }
    return l;
  }
  getType() {
    return "MultiPoint";
  }
  intersectsExtent(t) {
    const i = this.flatCoordinates,
      s = this.stride;
    for (let l = 0, o = i.length; l < o; l += s) {
      const c = i[l],
        h = i[l + 1];
      if (md(t, c, h)) return !0;
    }
    return !1;
  }
  setCoordinates(t, i) {
    this.setLayout(i, t, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = ic(
        this.flatCoordinates,
        0,
        t,
        this.stride,
      )),
      this.changed();
  }
}
class Yu extends ur {
  constructor(t, i, s) {
    if (
      (super(),
      (this.endss_ = []),
      (this.flatInteriorPointsRevision_ = -1),
      (this.flatInteriorPoints_ = null),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      (this.orientedRevision_ = -1),
      (this.orientedFlatCoordinates_ = null),
      !s && !Array.isArray(t[0]))
    ) {
      const l = t,
        o = [],
        c = [];
      for (let h = 0, d = l.length; h < d; ++h) {
        const _ = l[h],
          m = o.length,
          y = _.getEnds();
        for (let v = 0, E = y.length; v < E; ++v) y[v] += m;
        en(o, _.getFlatCoordinates()), c.push(y);
      }
      (i = l.length === 0 ? this.getLayout() : l[0].getLayout()),
        (t = o),
        (s = c);
    }
    i !== void 0 && s
      ? (this.setFlatCoordinates(i, t), (this.endss_ = s))
      : this.setCoordinates(t, i);
  }
  appendPolygon(t) {
    let i;
    if (!this.flatCoordinates)
      (this.flatCoordinates = t.getFlatCoordinates().slice()),
        (i = t.getEnds().slice()),
        this.endss_.push();
    else {
      const s = this.flatCoordinates.length;
      en(this.flatCoordinates, t.getFlatCoordinates()),
        (i = t.getEnds().slice());
      for (let l = 0, o = i.length; l < o; ++l) i[l] += s;
    }
    this.endss_.push(i), this.changed();
  }
  clone() {
    const t = this.endss_.length,
      i = new Array(t);
    for (let l = 0; l < t; ++l) i[l] = this.endss_[l].slice();
    const s = new Yu(this.flatCoordinates.slice(), this.layout, i);
    return s.applyProperties(this), s;
  }
  closestPointXY(t, i, s, l) {
    return l < ar(this.getExtent(), t, i)
      ? l
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            ZS(this.flatCoordinates, 0, this.endss_, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        KS(
          this.getOrientedFlatCoordinates(),
          0,
          this.endss_,
          this.stride,
          this.maxDelta_,
          !0,
          t,
          i,
          s,
          l,
        ));
  }
  containsXY(t, i) {
    return JS(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride,
      t,
      i,
    );
  }
  getArea() {
    return jS(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride);
  }
  getCoordinates(t) {
    let i;
    return (
      t !== void 0
        ? ((i = this.getOrientedFlatCoordinates().slice()),
          nd(i, 0, this.endss_, this.stride, t))
        : (i = this.flatCoordinates),
      id(i, 0, this.endss_, this.stride)
    );
  }
  getEndss() {
    return this.endss_;
  }
  getFlatInteriorPoints() {
    if (this.flatInteriorPointsRevision_ != this.getRevision()) {
      const t = Xp(this.flatCoordinates, 0, this.endss_, this.stride);
      (this.flatInteriorPoints_ = yp(
        this.getOrientedFlatCoordinates(),
        0,
        this.endss_,
        this.stride,
        t,
      )),
        (this.flatInteriorPointsRevision_ = this.getRevision());
    }
    return this.flatInteriorPoints_;
  }
  getInteriorPoints() {
    return new ac(this.getFlatInteriorPoints().slice(), "XYM");
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates;
      Sp(t, 0, this.endss_, this.stride)
        ? (this.orientedFlatCoordinates_ = t)
        : ((this.orientedFlatCoordinates_ = t.slice()),
          (this.orientedFlatCoordinates_.length = nd(
            this.orientedFlatCoordinates_,
            0,
            this.endss_,
            this.stride,
          ))),
        (this.orientedRevision_ = this.getRevision());
    }
    return this.orientedFlatCoordinates_;
  }
  getSimplifiedGeometryInternal(t) {
    const i = [],
      s = [];
    return (
      (i.length = WS(
        this.flatCoordinates,
        0,
        this.endss_,
        this.stride,
        Math.sqrt(t),
        i,
        0,
        s,
      )),
      new Yu(i, "XY", s)
    );
  }
  getPolygon(t) {
    if (t < 0 || this.endss_.length <= t) return null;
    let i;
    if (t === 0) i = 0;
    else {
      const o = this.endss_[t - 1];
      i = o[o.length - 1];
    }
    const s = this.endss_[t].slice(),
      l = s[s.length - 1];
    if (i !== 0) for (let o = 0, c = s.length; o < c; ++o) s[o] -= i;
    return new Es(this.flatCoordinates.slice(i, l), this.layout, s);
  }
  getPolygons() {
    const t = this.layout,
      i = this.flatCoordinates,
      s = this.endss_,
      l = [];
    let o = 0;
    for (let c = 0, h = s.length; c < h; ++c) {
      const d = s[c].slice(),
        _ = d[d.length - 1];
      if (o !== 0) for (let y = 0, v = d.length; y < v; ++y) d[y] -= o;
      const m = new Es(i.slice(o, _), t, d);
      l.push(m), (o = _);
    }
    return l;
  }
  getType() {
    return "MultiPolygon";
  }
  intersectsExtent(t) {
    return tx(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride,
      t,
    );
  }
  setCoordinates(t, i) {
    this.setLayout(i, t, 3),
      this.flatCoordinates || (this.flatCoordinates = []);
    const s = _p(this.flatCoordinates, 0, t, this.stride, this.endss_);
    if (s.length === 0) this.flatCoordinates.length = 0;
    else {
      const l = s[s.length - 1];
      this.flatCoordinates.length = l.length === 0 ? 0 : l[l.length - 1];
    }
    this.changed();
  }
}
const py = Gi();
class si {
  constructor(t, i, s, l, o, c) {
    this.styleFunction,
      this.extent_,
      (this.id_ = c),
      (this.type_ = t),
      (this.flatCoordinates_ = i),
      (this.flatInteriorPoints_ = null),
      (this.flatMidpoints_ = null),
      (this.ends_ = s || null),
      (this.properties_ = o),
      this.squaredTolerance_,
      (this.stride_ = l),
      this.simplifiedGeometry_;
  }
  get(t) {
    return this.properties_[t];
  }
  getExtent() {
    return (
      this.extent_ ||
        (this.extent_ =
          this.type_ === "Point"
            ? qy(this.flatCoordinates_)
            : yd(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2)),
      this.extent_
    );
  }
  getFlatInteriorPoint() {
    if (!this.flatInteriorPoints_) {
      const t = vs(this.getExtent());
      this.flatInteriorPoints_ = Ld(
        this.flatCoordinates_,
        0,
        this.ends_,
        2,
        t,
        0,
      );
    }
    return this.flatInteriorPoints_;
  }
  getFlatInteriorPoints() {
    if (!this.flatInteriorPoints_) {
      const t = ix(this.flatCoordinates_, this.ends_),
        i = Xp(this.flatCoordinates_, 0, t, 2);
      this.flatInteriorPoints_ = yp(this.flatCoordinates_, 0, t, 2, i);
    }
    return this.flatInteriorPoints_;
  }
  getFlatMidpoint() {
    return (
      this.flatMidpoints_ ||
        (this.flatMidpoints_ = zu(
          this.flatCoordinates_,
          0,
          this.flatCoordinates_.length,
          2,
          0.5,
        )),
      this.flatMidpoints_
    );
  }
  getFlatMidpoints() {
    if (!this.flatMidpoints_) {
      this.flatMidpoints_ = [];
      const t = this.flatCoordinates_;
      let i = 0;
      const s = this.ends_;
      for (let l = 0, o = s.length; l < o; ++l) {
        const c = s[l],
          h = zu(t, i, c, 2, 0.5);
        en(this.flatMidpoints_, h), (i = c);
      }
    }
    return this.flatMidpoints_;
  }
  getId() {
    return this.id_;
  }
  getOrientedFlatCoordinates() {
    return this.flatCoordinates_;
  }
  getGeometry() {
    return this;
  }
  getSimplifiedGeometry(t) {
    return this;
  }
  simplifyTransformed(t, i) {
    return this;
  }
  getProperties() {
    return this.properties_;
  }
  getPropertiesInternal() {
    return this.properties_;
  }
  getStride() {
    return this.stride_;
  }
  getStyleFunction() {
    return this.styleFunction;
  }
  getType() {
    return this.type_;
  }
  transform(t) {
    t = Kt(t);
    const i = t.getExtent(),
      s = t.getWorldExtent();
    if (i && s) {
      const l = Ue(s) / Ue(i);
      zn(py, s[0], s[3], l, -l, 0, 0, 0),
        ps(
          this.flatCoordinates_,
          0,
          this.flatCoordinates_.length,
          2,
          py,
          this.flatCoordinates_,
        );
    }
  }
  applyTransform(t) {
    t(this.flatCoordinates_, this.flatCoordinates_, this.stride_);
  }
  clone() {
    var t;
    return new si(
      this.type_,
      this.flatCoordinates_.slice(),
      (t = this.ends_) == null ? void 0 : t.slice(),
      this.stride_,
      Object.assign({}, this.properties_),
      this.id_,
    );
  }
  getEnds() {
    return this.ends_;
  }
  enableSimplifyTransformed() {
    return (
      (this.simplifyTransformed = Ky((t, i) => {
        if (t === this.squaredTolerance_) return this.simplifiedGeometry_;
        (this.simplifiedGeometry_ = this.clone()),
          i && this.simplifiedGeometry_.applyTransform(i);
        const s = this.simplifiedGeometry_.getFlatCoordinates();
        let l;
        switch (this.type_) {
          case "LineString":
            (s.length = nc(
              s,
              0,
              this.simplifiedGeometry_.flatCoordinates_.length,
              this.simplifiedGeometry_.stride_,
              t,
              s,
              0,
            )),
              (l = [s.length]);
            break;
          case "MultiLineString":
            (l = []),
              (s.length = mp(
                s,
                0,
                this.simplifiedGeometry_.ends_,
                this.simplifiedGeometry_.stride_,
                t,
                s,
                0,
                l,
              ));
            break;
          case "Polygon":
            (l = []),
              (s.length = Od(
                s,
                0,
                this.simplifiedGeometry_.ends_,
                this.simplifiedGeometry_.stride_,
                Math.sqrt(t),
                s,
                0,
                l,
              ));
            break;
        }
        return (
          l &&
            (this.simplifiedGeometry_ = new si(
              this.type_,
              s,
              l,
              2,
              this.properties_,
              this.id_,
            )),
          (this.squaredTolerance_ = t),
          this.simplifiedGeometry_
        );
      })),
      this
    );
  }
}
si.prototype.getFlatCoordinates = si.prototype.getOrientedFlatCoordinates;
function Yp(r, t, i = 0, s = r.length - 1, l = Bx) {
  for (; s > i; ) {
    if (s - i > 600) {
      const d = s - i + 1,
        _ = t - i + 1,
        m = Math.log(d),
        y = 0.5 * Math.exp((2 * m) / 3),
        v = 0.5 * Math.sqrt((m * y * (d - y)) / d) * (_ - d / 2 < 0 ? -1 : 1),
        E = Math.max(i, Math.floor(t - (_ * y) / d + v)),
        x = Math.min(s, Math.floor(t + ((d - _) * y) / d + v));
      Yp(r, t, E, x, l);
    }
    const o = r[t];
    let c = i,
      h = s;
    for (ba(r, i, t), l(r[s], o) > 0 && ba(r, i, s); c < h; ) {
      for (ba(r, c, h), c++, h--; l(r[c], o) < 0; ) c++;
      for (; l(r[h], o) > 0; ) h--;
    }
    l(r[i], o) === 0 ? ba(r, i, h) : (h++, ba(r, h, s)),
      h <= t && (i = h + 1),
      t <= h && (s = h - 1);
  }
}
function ba(r, t, i) {
  const s = r[t];
  (r[t] = r[i]), (r[i] = s);
}
function Bx(r, t) {
  return r < t ? -1 : r > t ? 1 : 0;
}
let Pp = class {
  constructor(t = 9) {
    (this._maxEntries = Math.max(4, t)),
      (this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4))),
      this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(t) {
    let i = this.data;
    const s = [];
    if (!Eu(t, i)) return s;
    const l = this.toBBox,
      o = [];
    for (; i; ) {
      for (let c = 0; c < i.children.length; c++) {
        const h = i.children[c],
          d = i.leaf ? l(h) : h;
        Eu(t, d) &&
          (i.leaf ? s.push(h) : zf(t, d) ? this._all(h, s) : o.push(h));
      }
      i = o.pop();
    }
    return s;
  }
  collides(t) {
    let i = this.data;
    if (!Eu(t, i)) return !1;
    const s = [];
    for (; i; ) {
      for (let l = 0; l < i.children.length; l++) {
        const o = i.children[l],
          c = i.leaf ? this.toBBox(o) : o;
        if (Eu(t, c)) {
          if (i.leaf || zf(t, c)) return !0;
          s.push(o);
        }
      }
      i = s.pop();
    }
    return !1;
  }
  load(t) {
    if (!(t && t.length)) return this;
    if (t.length < this._minEntries) {
      for (let s = 0; s < t.length; s++) this.insert(t[s]);
      return this;
    }
    let i = this._build(t.slice(), 0, t.length - 1, 0);
    if (!this.data.children.length) this.data = i;
    else if (this.data.height === i.height) this._splitRoot(this.data, i);
    else {
      if (this.data.height < i.height) {
        const s = this.data;
        (this.data = i), (i = s);
      }
      this._insert(i, this.data.height - i.height - 1, !0);
    }
    return this;
  }
  insert(t) {
    return t && this._insert(t, this.data.height - 1), this;
  }
  clear() {
    return (this.data = il([])), this;
  }
  remove(t, i) {
    if (!t) return this;
    let s = this.data;
    const l = this.toBBox(t),
      o = [],
      c = [];
    let h, d, _;
    for (; s || o.length; ) {
      if (
        (s || ((s = o.pop()), (d = o[o.length - 1]), (h = c.pop()), (_ = !0)),
        s.leaf)
      ) {
        const m = Hx(t, s.children, i);
        if (m !== -1)
          return s.children.splice(m, 1), o.push(s), this._condense(o), this;
      }
      !_ && !s.leaf && zf(s, l)
        ? (o.push(s), c.push(h), (h = 0), (d = s), (s = s.children[0]))
        : d
          ? (h++, (s = d.children[h]), (_ = !1))
          : (s = null);
    }
    return this;
  }
  toBBox(t) {
    return t;
  }
  compareMinX(t, i) {
    return t.minX - i.minX;
  }
  compareMinY(t, i) {
    return t.minY - i.minY;
  }
  toJSON() {
    return this.data;
  }
  fromJSON(t) {
    return (this.data = t), this;
  }
  _all(t, i) {
    const s = [];
    for (; t; )
      t.leaf ? i.push(...t.children) : s.push(...t.children), (t = s.pop());
    return i;
  }
  _build(t, i, s, l) {
    const o = s - i + 1;
    let c = this._maxEntries,
      h;
    if (o <= c) return (h = il(t.slice(i, s + 1))), qr(h, this.toBBox), h;
    l ||
      ((l = Math.ceil(Math.log(o) / Math.log(c))),
      (c = Math.ceil(o / Math.pow(c, l - 1)))),
      (h = il([])),
      (h.leaf = !1),
      (h.height = l);
    const d = Math.ceil(o / c),
      _ = d * Math.ceil(Math.sqrt(c));
    vy(t, i, s, _, this.compareMinX);
    for (let m = i; m <= s; m += _) {
      const y = Math.min(m + _ - 1, s);
      vy(t, m, y, d, this.compareMinY);
      for (let v = m; v <= y; v += d) {
        const E = Math.min(v + d - 1, y);
        h.children.push(this._build(t, v, E, l - 1));
      }
    }
    return qr(h, this.toBBox), h;
  }
  _chooseSubtree(t, i, s, l) {
    for (; l.push(i), !(i.leaf || l.length - 1 === s); ) {
      let o = 1 / 0,
        c = 1 / 0,
        h;
      for (let d = 0; d < i.children.length; d++) {
        const _ = i.children[d],
          m = If(_),
          y = Kx(t, _) - m;
        y < c
          ? ((c = y), (o = m < o ? m : o), (h = _))
          : y === c && m < o && ((o = m), (h = _));
      }
      i = h || i.children[0];
    }
    return i;
  }
  _insert(t, i, s) {
    const l = s ? t : this.toBBox(t),
      o = [],
      c = this._chooseSubtree(l, this.data, i, o);
    for (
      c.children.push(t), Ma(c, l);
      i >= 0 && o[i].children.length > this._maxEntries;

    )
      this._split(o, i), i--;
    this._adjustParentBBoxes(l, o, i);
  }
  _split(t, i) {
    const s = t[i],
      l = s.children.length,
      o = this._minEntries;
    this._chooseSplitAxis(s, o, l);
    const c = this._chooseSplitIndex(s, o, l),
      h = il(s.children.splice(c, s.children.length - c));
    (h.height = s.height),
      (h.leaf = s.leaf),
      qr(s, this.toBBox),
      qr(h, this.toBBox),
      i ? t[i - 1].children.push(h) : this._splitRoot(s, h);
  }
  _splitRoot(t, i) {
    (this.data = il([t, i])),
      (this.data.height = t.height + 1),
      (this.data.leaf = !1),
      qr(this.data, this.toBBox);
  }
  _chooseSplitIndex(t, i, s) {
    let l,
      o = 1 / 0,
      c = 1 / 0;
    for (let h = i; h <= s - i; h++) {
      const d = Aa(t, 0, h, this.toBBox),
        _ = Aa(t, h, s, this.toBBox),
        m = Vx(d, _),
        y = If(d) + If(_);
      m < o
        ? ((o = m), (l = h), (c = y < c ? y : c))
        : m === o && y < c && ((c = y), (l = h));
    }
    return l || s - i;
  }
  _chooseSplitAxis(t, i, s) {
    const l = t.leaf ? this.compareMinX : jx,
      o = t.leaf ? this.compareMinY : Zx,
      c = this._allDistMargin(t, i, s, l),
      h = this._allDistMargin(t, i, s, o);
    c < h && t.children.sort(l);
  }
  _allDistMargin(t, i, s, l) {
    t.children.sort(l);
    const o = this.toBBox,
      c = Aa(t, 0, i, o),
      h = Aa(t, s - i, s, o);
    let d = vu(c) + vu(h);
    for (let _ = i; _ < s - i; _++) {
      const m = t.children[_];
      Ma(c, t.leaf ? o(m) : m), (d += vu(c));
    }
    for (let _ = s - i - 1; _ >= i; _--) {
      const m = t.children[_];
      Ma(h, t.leaf ? o(m) : m), (d += vu(h));
    }
    return d;
  }
  _adjustParentBBoxes(t, i, s) {
    for (let l = s; l >= 0; l--) Ma(i[l], t);
  }
  _condense(t) {
    for (let i = t.length - 1, s; i >= 0; i--)
      t[i].children.length === 0
        ? i > 0
          ? ((s = t[i - 1].children), s.splice(s.indexOf(t[i]), 1))
          : this.clear()
        : qr(t[i], this.toBBox);
  }
};
function Hx(r, t, i) {
  if (!i) return t.indexOf(r);
  for (let s = 0; s < t.length; s++) if (i(r, t[s])) return s;
  return -1;
}
function qr(r, t) {
  Aa(r, 0, r.children.length, t, r);
}
function Aa(r, t, i, s, l) {
  l || (l = il(null)),
    (l.minX = 1 / 0),
    (l.minY = 1 / 0),
    (l.maxX = -1 / 0),
    (l.maxY = -1 / 0);
  for (let o = t; o < i; o++) {
    const c = r.children[o];
    Ma(l, r.leaf ? s(c) : c);
  }
  return l;
}
function Ma(r, t) {
  return (
    (r.minX = Math.min(r.minX, t.minX)),
    (r.minY = Math.min(r.minY, t.minY)),
    (r.maxX = Math.max(r.maxX, t.maxX)),
    (r.maxY = Math.max(r.maxY, t.maxY)),
    r
  );
}
function jx(r, t) {
  return r.minX - t.minX;
}
function Zx(r, t) {
  return r.minY - t.minY;
}
function If(r) {
  return (r.maxX - r.minX) * (r.maxY - r.minY);
}
function vu(r) {
  return r.maxX - r.minX + (r.maxY - r.minY);
}
function Kx(r, t) {
  return (
    (Math.max(t.maxX, r.maxX) - Math.min(t.minX, r.minX)) *
    (Math.max(t.maxY, r.maxY) - Math.min(t.minY, r.minY))
  );
}
function Vx(r, t) {
  const i = Math.max(r.minX, t.minX),
    s = Math.max(r.minY, t.minY),
    l = Math.min(r.maxX, t.maxX),
    o = Math.min(r.maxY, t.maxY);
  return Math.max(0, l - i) * Math.max(0, o - s);
}
function zf(r, t) {
  return (
    r.minX <= t.minX && r.minY <= t.minY && t.maxX <= r.maxX && t.maxY <= r.maxY
  );
}
function Eu(r, t) {
  return (
    t.minX <= r.maxX && t.minY <= r.maxY && t.maxX >= r.minX && t.maxY >= r.minY
  );
}
function il(r) {
  return {
    children: r,
    height: 1,
    leaf: !0,
    minX: 1 / 0,
    minY: 1 / 0,
    maxX: -1 / 0,
    maxY: -1 / 0,
  };
}
function vy(r, t, i, s, l) {
  const o = [t, i];
  for (; o.length; ) {
    if (((i = o.pop()), (t = o.pop()), i - t <= s)) continue;
    const c = t + Math.ceil((i - t) / s / 2) * s;
    Yp(r, c, t, i, l), o.push(t, c, c, i);
  }
}
class Ey {
  constructor(t) {
    (this.rbush_ = new Pp(t)), (this.items_ = {});
  }
  insert(t, i) {
    const s = { minX: t[0], minY: t[1], maxX: t[2], maxY: t[3], value: i };
    this.rbush_.insert(s), (this.items_[zt(i)] = s);
  }
  load(t, i) {
    const s = new Array(i.length);
    for (let l = 0, o = i.length; l < o; l++) {
      const c = t[l],
        h = i[l],
        d = { minX: c[0], minY: c[1], maxX: c[2], maxY: c[3], value: h };
      (s[l] = d), (this.items_[zt(h)] = d);
    }
    this.rbush_.load(s);
  }
  remove(t) {
    const i = zt(t),
      s = this.items_[i];
    return delete this.items_[i], this.rbush_.remove(s) !== null;
  }
  update(t, i) {
    const s = this.items_[zt(i)],
      l = [s.minX, s.minY, s.maxX, s.maxY];
    Ga(l, t) || (this.remove(i), this.insert(t, i));
  }
  getAll() {
    return this.rbush_.all().map(function (i) {
      return i.value;
    });
  }
  getInExtent(t) {
    const i = { minX: t[0], minY: t[1], maxX: t[2], maxY: t[3] };
    return this.rbush_.search(i).map(function (l) {
      return l.value;
    });
  }
  forEach(t) {
    return this.forEach_(this.getAll(), t);
  }
  forEachInExtent(t, i) {
    return this.forEach_(this.getInExtent(t), i);
  }
  forEach_(t, i) {
    let s;
    for (let l = 0, o = t.length; l < o; l++) if (((s = i(t[l])), s)) return s;
    return s;
  }
  isEmpty() {
    return rr(this.items_);
  }
  clear() {
    this.rbush_.clear(), (this.items_ = {});
  }
  getExtent(t) {
    const i = this.rbush_.toJSON();
    return In(i.minX, i.minY, i.maxX, i.maxY, t);
  }
  concat(t) {
    this.rbush_.load(t.rbush_.all());
    for (const i in t.items_) this.items_[i] = t.items_[i];
  }
}
class kp extends Ui {
  constructor(t) {
    super(),
      (this.projection = Kt(t.projection)),
      (this.attributions_ = Sy(t.attributions)),
      (this.attributionsCollapsible_ = t.attributionsCollapsible ?? !0),
      (this.loading = !1),
      (this.state_ = t.state !== void 0 ? t.state : "ready"),
      (this.wrapX_ = t.wrapX !== void 0 ? t.wrapX : !1),
      (this.interpolate_ = !!t.interpolate),
      (this.viewResolver = null),
      (this.viewRejector = null);
    const i = this;
    this.viewPromise_ = new Promise(function (s, l) {
      (i.viewResolver = s), (i.viewRejector = l);
    });
  }
  getAttributions() {
    return this.attributions_;
  }
  getAttributionsCollapsible() {
    return this.attributionsCollapsible_;
  }
  getProjection() {
    return this.projection;
  }
  getResolutions(t) {
    return null;
  }
  getView() {
    return this.viewPromise_;
  }
  getState() {
    return this.state_;
  }
  getWrapX() {
    return this.wrapX_;
  }
  getInterpolate() {
    return this.interpolate_;
  }
  refresh() {
    this.changed();
  }
  setAttributions(t) {
    (this.attributions_ = Sy(t)), this.changed();
  }
  setState(t) {
    (this.state_ = t), this.changed();
  }
}
function Sy(r) {
  return r
    ? typeof r == "function"
      ? r
      : (Array.isArray(r) || (r = [r]), (t) => r)
    : null;
}
const vi = {
  ADDFEATURE: "addfeature",
  CHANGEFEATURE: "changefeature",
  CLEAR: "clear",
  REMOVEFEATURE: "removefeature",
  FEATURESLOADSTART: "featuresloadstart",
  FEATURESLOADEND: "featuresloadend",
  FEATURESLOADERROR: "featuresloaderror",
};
class ls extends Gn {
  constructor(t, i, s) {
    super(t), (this.feature = i), (this.features = s);
  }
}
class Pd extends kp {
  constructor(t) {
    (t = t || {}),
      super({
        attributions: t.attributions,
        interpolate: !0,
        projection: void 0,
        state: "ready",
        wrapX: t.wrapX !== void 0 ? t.wrapX : !0,
      }),
      this.on,
      this.once,
      this.un,
      (this.loader_ = dl),
      (this.format_ = t.format || null),
      (this.overlaps_ = t.overlaps === void 0 ? !0 : t.overlaps),
      (this.url_ = t.url),
      t.loader !== void 0
        ? (this.loader_ = t.loader)
        : this.url_ !== void 0 &&
          (Lt(this.format_, "`format` must be set when `url` is set"),
          (this.loader_ = yy(this.url_, this.format_))),
      (this.strategy_ = t.strategy !== void 0 ? t.strategy : kx);
    const i = t.useSpatialIndex !== void 0 ? t.useSpatialIndex : !0;
    (this.featuresRtree_ = i ? new Ey() : null),
      (this.loadedExtentsRtree_ = new Ey()),
      (this.loadingExtentsCount_ = 0),
      (this.nullGeometryFeatures_ = {}),
      (this.idIndex_ = {}),
      (this.uidIndex_ = {}),
      (this.featureChangeKeys_ = {}),
      (this.featuresCollection_ = null);
    let s, l;
    Array.isArray(t.features)
      ? (l = t.features)
      : t.features && ((s = t.features), (l = s.getArray())),
      !i && s === void 0 && (s = new $i(l)),
      l !== void 0 && this.addFeaturesInternal(l),
      s !== void 0 && this.bindFeaturesCollection_(s);
  }
  addFeature(t) {
    this.addFeatureInternal(t), this.changed();
  }
  addFeatureInternal(t) {
    const i = zt(t);
    if (!this.addToIndex_(i, t)) {
      this.featuresCollection_ && this.featuresCollection_.remove(t);
      return;
    }
    this.setupChangeEvents_(i, t);
    const s = t.getGeometry();
    if (s) {
      const l = s.getExtent();
      this.featuresRtree_ && this.featuresRtree_.insert(l, t);
    } else this.nullGeometryFeatures_[i] = t;
    this.dispatchEvent(new ls(vi.ADDFEATURE, t));
  }
  setupChangeEvents_(t, i) {
    i instanceof si ||
      (this.featureChangeKeys_[t] = [
        Mt(i, pt.CHANGE, this.handleFeatureChange_, this),
        Mt(i, fl.PROPERTYCHANGE, this.handleFeatureChange_, this),
      ]);
  }
  addToIndex_(t, i) {
    let s = !0;
    if (i.getId() !== void 0) {
      const l = String(i.getId());
      if (!(l in this.idIndex_)) this.idIndex_[l] = i;
      else if (i instanceof si) {
        const o = this.idIndex_[l];
        o instanceof si
          ? Array.isArray(o)
            ? o.push(i)
            : (this.idIndex_[l] = [o, i])
          : (s = !1);
      } else s = !1;
    }
    return (
      s &&
        (Lt(
          !(t in this.uidIndex_),
          "The passed `feature` was already added to the source",
        ),
        (this.uidIndex_[t] = i)),
      s
    );
  }
  addFeatures(t) {
    this.addFeaturesInternal(t), this.changed();
  }
  addFeaturesInternal(t) {
    const i = [],
      s = [],
      l = [];
    for (let o = 0, c = t.length; o < c; o++) {
      const h = t[o],
        d = zt(h);
      this.addToIndex_(d, h) && s.push(h);
    }
    for (let o = 0, c = s.length; o < c; o++) {
      const h = s[o],
        d = zt(h);
      this.setupChangeEvents_(d, h);
      const _ = h.getGeometry();
      if (_) {
        const m = _.getExtent();
        i.push(m), l.push(h);
      } else this.nullGeometryFeatures_[d] = h;
    }
    if (
      (this.featuresRtree_ && this.featuresRtree_.load(i, l),
      this.hasListener(vi.ADDFEATURE))
    )
      for (let o = 0, c = s.length; o < c; o++)
        this.dispatchEvent(new ls(vi.ADDFEATURE, s[o]));
  }
  bindFeaturesCollection_(t) {
    let i = !1;
    this.addEventListener(vi.ADDFEATURE, function (s) {
      i || ((i = !0), t.push(s.feature), (i = !1));
    }),
      this.addEventListener(vi.REMOVEFEATURE, function (s) {
        i || ((i = !0), t.remove(s.feature), (i = !1));
      }),
      t.addEventListener(Be.ADD, (s) => {
        i || ((i = !0), this.addFeature(s.element), (i = !1));
      }),
      t.addEventListener(Be.REMOVE, (s) => {
        i || ((i = !0), this.removeFeature(s.element), (i = !1));
      }),
      (this.featuresCollection_ = t);
  }
  clear(t) {
    if (t) {
      for (const s in this.featureChangeKeys_)
        this.featureChangeKeys_[s].forEach(jt);
      this.featuresCollection_ ||
        ((this.featureChangeKeys_ = {}),
        (this.idIndex_ = {}),
        (this.uidIndex_ = {}));
    } else if (this.featuresRtree_) {
      this.featuresRtree_.forEach((s) => {
        this.removeFeatureInternal(s);
      });
      for (const s in this.nullGeometryFeatures_)
        this.removeFeatureInternal(this.nullGeometryFeatures_[s]);
    }
    this.featuresCollection_ && this.featuresCollection_.clear(),
      this.featuresRtree_ && this.featuresRtree_.clear(),
      (this.nullGeometryFeatures_ = {});
    const i = new ls(vi.CLEAR);
    this.dispatchEvent(i), this.changed();
  }
  forEachFeature(t) {
    if (this.featuresRtree_) return this.featuresRtree_.forEach(t);
    this.featuresCollection_ && this.featuresCollection_.forEach(t);
  }
  forEachFeatureAtCoordinateDirect(t, i) {
    const s = [t[0], t[1], t[0], t[1]];
    return this.forEachFeatureInExtent(s, function (l) {
      const o = l.getGeometry();
      if (o instanceof si || o.intersectsCoordinate(t)) return i(l);
    });
  }
  forEachFeatureInExtent(t, i) {
    if (this.featuresRtree_) return this.featuresRtree_.forEachInExtent(t, i);
    this.featuresCollection_ && this.featuresCollection_.forEach(i);
  }
  forEachFeatureIntersectingExtent(t, i) {
    return this.forEachFeatureInExtent(t, function (s) {
      const l = s.getGeometry();
      if (l instanceof si || l.intersectsExtent(t)) {
        const o = i(s);
        if (o) return o;
      }
    });
  }
  getFeaturesCollection() {
    return this.featuresCollection_;
  }
  getFeatures() {
    let t;
    return (
      this.featuresCollection_
        ? (t = this.featuresCollection_.getArray().slice(0))
        : this.featuresRtree_ &&
          ((t = this.featuresRtree_.getAll()),
          rr(this.nullGeometryFeatures_) ||
            en(t, Object.values(this.nullGeometryFeatures_))),
      t
    );
  }
  getFeaturesAtCoordinate(t) {
    const i = [];
    return (
      this.forEachFeatureAtCoordinateDirect(t, function (s) {
        i.push(s);
      }),
      i
    );
  }
  getFeaturesInExtent(t, i) {
    if (this.featuresRtree_) {
      if (!(i && i.canWrapX() && this.getWrapX()))
        return this.featuresRtree_.getInExtent(t);
      const l = ep(t, i);
      return [].concat(...l.map((o) => this.featuresRtree_.getInExtent(o)));
    }
    return this.featuresCollection_
      ? this.featuresCollection_.getArray().slice(0)
      : [];
  }
  getClosestFeatureToCoordinate(t, i) {
    const s = t[0],
      l = t[1];
    let o = null;
    const c = [NaN, NaN];
    let h = 1 / 0;
    const d = [-1 / 0, -1 / 0, 1 / 0, 1 / 0];
    return (
      (i = i || Na),
      this.featuresRtree_.forEachInExtent(d, function (_) {
        if (i(_)) {
          const m = _.getGeometry(),
            y = h;
          if (
            ((h = m instanceof si ? 0 : m.closestPointXY(s, l, c, h)), h < y)
          ) {
            o = _;
            const v = Math.sqrt(h);
            (d[0] = s - v), (d[1] = l - v), (d[2] = s + v), (d[3] = l + v);
          }
        }
      }),
      o
    );
  }
  getExtent(t) {
    return this.featuresRtree_.getExtent(t);
  }
  getFeatureById(t) {
    const i = this.idIndex_[t.toString()];
    return i !== void 0 ? i : null;
  }
  getFeatureByUid(t) {
    const i = this.uidIndex_[t];
    return i !== void 0 ? i : null;
  }
  getFormat() {
    return this.format_;
  }
  getOverlaps() {
    return this.overlaps_;
  }
  getUrl() {
    return this.url_;
  }
  handleFeatureChange_(t) {
    const i = t.target,
      s = zt(i),
      l = i.getGeometry();
    if (!l)
      s in this.nullGeometryFeatures_ ||
        (this.featuresRtree_ && this.featuresRtree_.remove(i),
        (this.nullGeometryFeatures_[s] = i));
    else {
      const c = l.getExtent();
      s in this.nullGeometryFeatures_
        ? (delete this.nullGeometryFeatures_[s],
          this.featuresRtree_ && this.featuresRtree_.insert(c, i))
        : this.featuresRtree_ && this.featuresRtree_.update(c, i);
    }
    const o = i.getId();
    if (o !== void 0) {
      const c = o.toString();
      this.idIndex_[c] !== i &&
        (this.removeFromIdIndex_(i), (this.idIndex_[c] = i));
    } else this.removeFromIdIndex_(i), (this.uidIndex_[s] = i);
    this.changed(), this.dispatchEvent(new ls(vi.CHANGEFEATURE, i));
  }
  hasFeature(t) {
    const i = t.getId();
    return i !== void 0 ? i in this.idIndex_ : zt(t) in this.uidIndex_;
  }
  isEmpty() {
    return this.featuresRtree_
      ? this.featuresRtree_.isEmpty() && rr(this.nullGeometryFeatures_)
      : this.featuresCollection_
        ? this.featuresCollection_.getLength() === 0
        : !0;
  }
  loadFeatures(t, i, s) {
    const l = this.loadedExtentsRtree_,
      o = this.strategy_(t, i, s);
    for (let c = 0, h = o.length; c < h; ++c) {
      const d = o[c];
      l.forEachInExtent(d, function (m) {
        return rl(m.extent, d);
      }) ||
        (++this.loadingExtentsCount_,
        this.dispatchEvent(new ls(vi.FEATURESLOADSTART)),
        this.loader_.call(
          this,
          d,
          i,
          s,
          (m) => {
            --this.loadingExtentsCount_,
              this.dispatchEvent(new ls(vi.FEATURESLOADEND, void 0, m));
          },
          () => {
            --this.loadingExtentsCount_,
              this.dispatchEvent(new ls(vi.FEATURESLOADERROR));
          },
        ),
        l.insert(d, { extent: d.slice() }));
    }
    this.loading = this.loader_.length < 4 ? !1 : this.loadingExtentsCount_ > 0;
  }
  refresh() {
    this.clear(!0), this.loadedExtentsRtree_.clear(), super.refresh();
  }
  removeLoadedExtent(t) {
    const i = this.loadedExtentsRtree_,
      s = i.forEachInExtent(t, function (l) {
        if (Ga(l.extent, t)) return l;
      });
    s && i.remove(s);
  }
  removeFeatures(t) {
    let i = !1;
    for (let s = 0, l = t.length; s < l; ++s)
      i = this.removeFeatureInternal(t[s]) || i;
    i && this.changed();
  }
  removeFeature(t) {
    if (!t) return;
    this.removeFeatureInternal(t) && this.changed();
  }
  removeFeatureInternal(t) {
    const i = zt(t);
    if (!(i in this.uidIndex_)) return !1;
    i in this.nullGeometryFeatures_
      ? delete this.nullGeometryFeatures_[i]
      : this.featuresRtree_ && this.featuresRtree_.remove(t);
    const s = this.featureChangeKeys_[i];
    s == null || s.forEach(jt), delete this.featureChangeKeys_[i];
    const l = t.getId();
    if (l !== void 0) {
      const o = l.toString(),
        c = this.idIndex_[o];
      c === t
        ? delete this.idIndex_[o]
        : Array.isArray(c) &&
          (c.splice(c.indexOf(t), 1),
          c.length === 1 && (this.idIndex_[o] = c[0]));
    }
    return (
      delete this.uidIndex_[i],
      this.hasListener(vi.REMOVEFEATURE) &&
        this.dispatchEvent(new ls(vi.REMOVEFEATURE, t)),
      !0
    );
  }
  removeFromIdIndex_(t) {
    for (const i in this.idIndex_)
      if (this.idIndex_[i] === t) {
        delete this.idIndex_[i];
        break;
      }
  }
  setLoader(t) {
    this.loader_ = t;
  }
  setUrl(t) {
    Lt(this.format_, "`format` must be set when `url` is set"),
      (this.url_ = t),
      this.setLoader(yy(t, this.format_));
  }
  setOverlaps(t) {
    (this.overlaps_ = t), this.changed();
  }
}
class Nn {
  constructor(t) {
    (t = t || {}),
      (this.patternImage_ = null),
      (this.color_ = null),
      t.color !== void 0 && this.setColor(t.color);
  }
  clone() {
    const t = this.getColor();
    return new Nn({ color: Array.isArray(t) ? t.slice() : t || void 0 });
  }
  getColor() {
    return this.color_;
  }
  setColor(t) {
    if (t !== null && typeof t == "object" && "src" in t) {
      const i = Xd(
        null,
        t.src,
        "anonymous",
        void 0,
        t.offset ? null : t.color ? t.color : null,
        !(t.offset && t.size),
      );
      i.ready().then(() => {
        this.patternImage_ = null;
      }),
        i.getImageState() === xt.IDLE && i.load(),
        i.getImageState() === xt.LOADING && (this.patternImage_ = i);
    }
    this.color_ = t;
  }
  getKey() {
    const t = this.getColor();
    return t
      ? t instanceof CanvasPattern || t instanceof CanvasGradient
        ? zt(t)
        : typeof t == "object" && "src" in t
          ? t.src + ":" + t.offset
          : vl(t).toString()
      : "";
  }
  loading() {
    return !!this.patternImage_;
  }
  ready() {
    return this.patternImage_ ? this.patternImage_.ready() : Promise.resolve();
  }
}
class xs {
  constructor(t) {
    (t = t || {}),
      (this.color_ = t.color !== void 0 ? t.color : null),
      (this.lineCap_ = t.lineCap),
      (this.lineDash_ = t.lineDash !== void 0 ? t.lineDash : null),
      (this.lineDashOffset_ = t.lineDashOffset),
      (this.lineJoin_ = t.lineJoin),
      (this.miterLimit_ = t.miterLimit),
      (this.width_ = t.width);
  }
  clone() {
    const t = this.getColor();
    return new xs({
      color: Array.isArray(t) ? t.slice() : t || void 0,
      lineCap: this.getLineCap(),
      lineDash: this.getLineDash() ? this.getLineDash().slice() : void 0,
      lineDashOffset: this.getLineDashOffset(),
      lineJoin: this.getLineJoin(),
      miterLimit: this.getMiterLimit(),
      width: this.getWidth(),
    });
  }
  getColor() {
    return this.color_;
  }
  getLineCap() {
    return this.lineCap_;
  }
  getLineDash() {
    return this.lineDash_;
  }
  getLineDashOffset() {
    return this.lineDashOffset_;
  }
  getLineJoin() {
    return this.lineJoin_;
  }
  getMiterLimit() {
    return this.miterLimit_;
  }
  getWidth() {
    return this.width_;
  }
  setColor(t) {
    this.color_ = t;
  }
  setLineCap(t) {
    this.lineCap_ = t;
  }
  setLineDash(t) {
    this.lineDash_ = t;
  }
  setLineDashOffset(t) {
    this.lineDashOffset_ = t;
  }
  setLineJoin(t) {
    this.lineJoin_ = t;
  }
  setMiterLimit(t) {
    this.miterLimit_ = t;
  }
  setWidth(t) {
    this.width_ = t;
  }
}
function xy(r) {
  return r[0] > 0 && r[1] > 0;
}
function qx(r, t, i) {
  return (
    i === void 0 && (i = [0, 0]),
    (i[0] = (r[0] * t + 0.5) | 0),
    (i[1] = (r[1] * t + 0.5) | 0),
    i
  );
}
function Ve(r, t) {
  return Array.isArray(r)
    ? r
    : (t === void 0 ? (t = [r, r]) : ((t[0] = r), (t[1] = r)), t);
}
class oc {
  constructor(t) {
    (this.opacity_ = t.opacity),
      (this.rotateWithView_ = t.rotateWithView),
      (this.rotation_ = t.rotation),
      (this.scale_ = t.scale),
      (this.scaleArray_ = Ve(t.scale)),
      (this.displacement_ = t.displacement),
      (this.declutterMode_ = t.declutterMode);
  }
  clone() {
    const t = this.getScale();
    return new oc({
      opacity: this.getOpacity(),
      scale: Array.isArray(t) ? t.slice() : t,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode(),
    });
  }
  getOpacity() {
    return this.opacity_;
  }
  getRotateWithView() {
    return this.rotateWithView_;
  }
  getRotation() {
    return this.rotation_;
  }
  getScale() {
    return this.scale_;
  }
  getScaleArray() {
    return this.scaleArray_;
  }
  getDisplacement() {
    return this.displacement_;
  }
  getDeclutterMode() {
    return this.declutterMode_;
  }
  getAnchor() {
    return _t();
  }
  getImage(t) {
    return _t();
  }
  getHitDetectionImage() {
    return _t();
  }
  getPixelRatio(t) {
    return 1;
  }
  getImageState() {
    return _t();
  }
  getImageSize() {
    return _t();
  }
  getOrigin() {
    return _t();
  }
  getSize() {
    return _t();
  }
  setDisplacement(t) {
    this.displacement_ = t;
  }
  setOpacity(t) {
    this.opacity_ = t;
  }
  setRotateWithView(t) {
    this.rotateWithView_ = t;
  }
  setRotation(t) {
    this.rotation_ = t;
  }
  setScale(t) {
    (this.scale_ = t), (this.scaleArray_ = Ve(t));
  }
  listenImageChange(t) {
    _t();
  }
  load() {
    _t();
  }
  unlistenImageChange(t) {
    _t();
  }
  ready() {
    return Promise.resolve();
  }
}
class uc extends oc {
  constructor(t) {
    super({
      opacity: 1,
      rotateWithView: t.rotateWithView !== void 0 ? t.rotateWithView : !1,
      rotation: t.rotation !== void 0 ? t.rotation : 0,
      scale: t.scale !== void 0 ? t.scale : 1,
      displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
      declutterMode: t.declutterMode,
    }),
      (this.hitDetectionCanvas_ = null),
      (this.fill_ = t.fill !== void 0 ? t.fill : null),
      (this.origin_ = [0, 0]),
      (this.points_ = t.points),
      (this.radius = t.radius),
      (this.radius2_ = t.radius2),
      (this.angle_ = t.angle !== void 0 ? t.angle : 0),
      (this.stroke_ = t.stroke !== void 0 ? t.stroke : null),
      this.size_,
      this.renderOptions_,
      (this.imageState_ =
        this.fill_ && this.fill_.loading() ? xt.LOADING : xt.LOADED),
      this.imageState_ === xt.LOADING &&
        this.ready().then(() => (this.imageState_ = xt.LOADED)),
      this.render();
  }
  clone() {
    const t = this.getScale(),
      i = new uc({
        fill: this.getFill() ? this.getFill().clone() : void 0,
        points: this.getPoints(),
        radius: this.getRadius(),
        radius2: this.getRadius2(),
        angle: this.getAngle(),
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        scale: Array.isArray(t) ? t.slice() : t,
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode(),
      });
    return i.setOpacity(this.getOpacity()), i;
  }
  getAnchor() {
    const t = this.size_,
      i = this.getDisplacement(),
      s = this.getScaleArray();
    return [t[0] / 2 - i[0] / s[0], t[1] / 2 + i[1] / s[1]];
  }
  getAngle() {
    return this.angle_;
  }
  getFill() {
    return this.fill_;
  }
  setFill(t) {
    (this.fill_ = t), this.render();
  }
  getHitDetectionImage() {
    return (
      this.hitDetectionCanvas_ ||
        (this.hitDetectionCanvas_ = this.createHitDetectionCanvas_(
          this.renderOptions_,
        )),
      this.hitDetectionCanvas_
    );
  }
  getImage(t) {
    var o, c;
    const i = (o = this.fill_) == null ? void 0 : o.getKey(),
      s =
        `${t},${this.angle_},${this.radius},${this.radius2_},${this.points_},${i}` +
        Object.values(this.renderOptions_).join(",");
    let l = (c = Si.get(s, null, null)) == null ? void 0 : c.getImage(1);
    if (!l) {
      const h = this.renderOptions_,
        d = Math.ceil(h.size * t),
        _ = me(d, d);
      this.draw_(h, _, t),
        (l = _.canvas),
        Si.set(s, null, null, new Dp(l, void 0, null, xt.LOADED, null));
    }
    return l;
  }
  getPixelRatio(t) {
    return t;
  }
  getImageSize() {
    return this.size_;
  }
  getImageState() {
    return this.imageState_;
  }
  getOrigin() {
    return this.origin_;
  }
  getPoints() {
    return this.points_;
  }
  getRadius() {
    return this.radius;
  }
  getRadius2() {
    return this.radius2_;
  }
  getSize() {
    return this.size_;
  }
  getStroke() {
    return this.stroke_;
  }
  setStroke(t) {
    (this.stroke_ = t), this.render();
  }
  listenImageChange(t) {}
  load() {}
  unlistenImageChange(t) {}
  calculateLineJoinSize_(t, i, s) {
    if (i === 0 || this.points_ === 1 / 0 || (t !== "bevel" && t !== "miter"))
      return i;
    let l = this.radius,
      o = this.radius2_ === void 0 ? l : this.radius2_;
    if (l < o) {
      const j = l;
      (l = o), (o = j);
    }
    const c = this.radius2_ === void 0 ? this.points_ : this.points_ * 2,
      h = (2 * Math.PI) / c,
      d = o * Math.sin(h),
      _ = Math.sqrt(o * o - d * d),
      m = l - _,
      y = Math.sqrt(d * d + m * m),
      v = y / d;
    if (t === "miter" && v <= s) return v * i;
    const E = i / 2 / v,
      x = (i / 2) * (m / y),
      b = Math.sqrt((l + E) * (l + E) + x * x) - l;
    if (this.radius2_ === void 0 || t === "bevel") return b * 2;
    const w = l * Math.sin(h),
      M = Math.sqrt(l * l - w * w),
      G = o - M,
      D = Math.sqrt(w * w + G * G) / w;
    if (D <= s) {
      const j = (D * i) / 2 - o - l;
      return 2 * Math.max(b, j);
    }
    return b * 2;
  }
  createRenderOptions() {
    let t = El,
      i = Sl,
      s = 0,
      l = null,
      o = 0,
      c,
      h = 0;
    this.stroke_ &&
      ((c = tn(this.stroke_.getColor() ?? ka)),
      (h = this.stroke_.getWidth() ?? Ha),
      (l = this.stroke_.getLineDash()),
      (o = this.stroke_.getLineDashOffset() ?? 0),
      (i = this.stroke_.getLineJoin() ?? Sl),
      (t = this.stroke_.getLineCap() ?? El),
      (s = this.stroke_.getMiterLimit() ?? Pa));
    const d = this.calculateLineJoinSize_(i, h, s),
      _ = Math.max(this.radius, this.radius2_ || 0),
      m = Math.ceil(2 * _ + d);
    return {
      strokeStyle: c,
      strokeWidth: h,
      size: m,
      lineCap: t,
      lineDash: l,
      lineDashOffset: o,
      lineJoin: i,
      miterLimit: s,
    };
  }
  render() {
    this.renderOptions_ = this.createRenderOptions();
    const t = this.renderOptions_.size;
    (this.hitDetectionCanvas_ = null), (this.size_ = [t, t]);
  }
  draw_(t, i, s) {
    if (
      (i.scale(s, s),
      i.translate(t.size / 2, t.size / 2),
      this.createPath_(i),
      this.fill_)
    ) {
      let l = this.fill_.getColor();
      l === null && (l = He), (i.fillStyle = tn(l)), i.fill();
    }
    t.strokeStyle &&
      ((i.strokeStyle = t.strokeStyle),
      (i.lineWidth = t.strokeWidth),
      t.lineDash &&
        (i.setLineDash(t.lineDash), (i.lineDashOffset = t.lineDashOffset)),
      (i.lineCap = t.lineCap),
      (i.lineJoin = t.lineJoin),
      (i.miterLimit = t.miterLimit),
      i.stroke());
  }
  createHitDetectionCanvas_(t) {
    let i;
    if (this.fill_) {
      let s = this.fill_.getColor(),
        l = 0;
      typeof s == "string" && (s = vl(s)),
        s === null
          ? (l = 1)
          : Array.isArray(s) && (l = s.length === 4 ? s[3] : 1),
        l === 0 &&
          ((i = me(t.size, t.size)), this.drawHitDetectionCanvas_(t, i));
    }
    return i ? i.canvas : this.getImage(1);
  }
  createPath_(t) {
    let i = this.points_;
    const s = this.radius;
    if (i === 1 / 0) t.arc(0, 0, s, 0, 2 * Math.PI);
    else {
      const l = this.radius2_ === void 0 ? s : this.radius2_;
      this.radius2_ !== void 0 && (i *= 2);
      const o = this.angle_ - Math.PI / 2,
        c = (2 * Math.PI) / i;
      for (let h = 0; h < i; h++) {
        const d = o + h * c,
          _ = h % 2 === 0 ? s : l;
        t.lineTo(_ * Math.cos(d), _ * Math.sin(d));
      }
      t.closePath();
    }
  }
  drawHitDetectionCanvas_(t, i) {
    i.translate(t.size / 2, t.size / 2),
      this.createPath_(i),
      (i.fillStyle = He),
      i.fill(),
      t.strokeStyle &&
        ((i.strokeStyle = t.strokeStyle),
        (i.lineWidth = t.strokeWidth),
        t.lineDash &&
          (i.setLineDash(t.lineDash), (i.lineDashOffset = t.lineDashOffset)),
        (i.lineJoin = t.lineJoin),
        (i.miterLimit = t.miterLimit),
        i.stroke());
  }
  ready() {
    return this.fill_ ? this.fill_.ready() : Promise.resolve();
  }
}
class Tl extends uc {
  constructor(t) {
    (t = t || { radius: 5 }),
      super({
        points: 1 / 0,
        fill: t.fill,
        radius: t.radius,
        stroke: t.stroke,
        scale: t.scale !== void 0 ? t.scale : 1,
        rotation: t.rotation !== void 0 ? t.rotation : 0,
        rotateWithView: t.rotateWithView !== void 0 ? t.rotateWithView : !1,
        displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
        declutterMode: t.declutterMode,
      });
  }
  clone() {
    const t = this.getScale(),
      i = new Tl({
        fill: this.getFill() ? this.getFill().clone() : void 0,
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        radius: this.getRadius(),
        scale: Array.isArray(t) ? t.slice() : t,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode(),
      });
    return i.setOpacity(this.getOpacity()), i;
  }
  setRadius(t) {
    (this.radius = t), this.render();
  }
}
class nn {
  constructor(t) {
    (t = t || {}),
      (this.geometry_ = null),
      (this.geometryFunction_ = Ty),
      t.geometry !== void 0 && this.setGeometry(t.geometry),
      (this.fill_ = t.fill !== void 0 ? t.fill : null),
      (this.image_ = t.image !== void 0 ? t.image : null),
      (this.renderer_ = t.renderer !== void 0 ? t.renderer : null),
      (this.hitDetectionRenderer_ =
        t.hitDetectionRenderer !== void 0 ? t.hitDetectionRenderer : null),
      (this.stroke_ = t.stroke !== void 0 ? t.stroke : null),
      (this.text_ = t.text !== void 0 ? t.text : null),
      (this.zIndex_ = t.zIndex);
  }
  clone() {
    let t = this.getGeometry();
    return (
      t && typeof t == "object" && (t = t.clone()),
      new nn({
        geometry: t ?? void 0,
        fill: this.getFill() ? this.getFill().clone() : void 0,
        image: this.getImage() ? this.getImage().clone() : void 0,
        renderer: this.getRenderer() ?? void 0,
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        text: this.getText() ? this.getText().clone() : void 0,
        zIndex: this.getZIndex(),
      })
    );
  }
  getRenderer() {
    return this.renderer_;
  }
  setRenderer(t) {
    this.renderer_ = t;
  }
  setHitDetectionRenderer(t) {
    this.hitDetectionRenderer_ = t;
  }
  getHitDetectionRenderer() {
    return this.hitDetectionRenderer_;
  }
  getGeometry() {
    return this.geometry_;
  }
  getGeometryFunction() {
    return this.geometryFunction_;
  }
  getFill() {
    return this.fill_;
  }
  setFill(t) {
    this.fill_ = t;
  }
  getImage() {
    return this.image_;
  }
  setImage(t) {
    this.image_ = t;
  }
  getStroke() {
    return this.stroke_;
  }
  setStroke(t) {
    this.stroke_ = t;
  }
  getText() {
    return this.text_;
  }
  setText(t) {
    this.text_ = t;
  }
  getZIndex() {
    return this.zIndex_;
  }
  setGeometry(t) {
    typeof t == "function"
      ? (this.geometryFunction_ = t)
      : typeof t == "string"
        ? (this.geometryFunction_ = function (i) {
            return i.get(t);
          })
        : t
          ? t !== void 0 &&
            (this.geometryFunction_ = function () {
              return t;
            })
          : (this.geometryFunction_ = Ty),
      (this.geometry_ = t);
  }
  setZIndex(t) {
    this.zIndex_ = t;
  }
}
function Wx(r) {
  let t;
  if (typeof r == "function") t = r;
  else {
    let i;
    Array.isArray(r)
      ? (i = r)
      : (Lt(
          typeof r.getZIndex == "function",
          "Expected an `Style` or an array of `Style`",
        ),
        (i = [r])),
      (t = function () {
        return i;
      });
  }
  return t;
}
let Nf = null;
function Bp(r, t) {
  if (!Nf) {
    const i = new Nn({ color: "rgba(255,255,255,0.4)" }),
      s = new xs({ color: "#3399CC", width: 1.25 });
    Nf = [
      new nn({
        image: new Tl({ fill: i, stroke: s, radius: 5 }),
        fill: i,
        stroke: s,
      }),
    ];
  }
  return Nf;
}
function Ty(r) {
  return r.getGeometry();
}
const Qx = "#333";
class kd {
  constructor(t) {
    (t = t || {}),
      (this.font_ = t.font),
      (this.rotation_ = t.rotation),
      (this.rotateWithView_ = t.rotateWithView),
      (this.keepUpright_ = t.keepUpright),
      (this.scale_ = t.scale),
      (this.scaleArray_ = Ve(t.scale !== void 0 ? t.scale : 1)),
      (this.text_ = t.text),
      (this.textAlign_ = t.textAlign),
      (this.justify_ = t.justify),
      (this.repeat_ = t.repeat),
      (this.textBaseline_ = t.textBaseline),
      (this.fill_ = t.fill !== void 0 ? t.fill : new Nn({ color: Qx })),
      (this.maxAngle_ = t.maxAngle !== void 0 ? t.maxAngle : Math.PI / 4),
      (this.placement_ = t.placement !== void 0 ? t.placement : "point"),
      (this.overflow_ = !!t.overflow),
      (this.stroke_ = t.stroke !== void 0 ? t.stroke : null),
      (this.offsetX_ = t.offsetX !== void 0 ? t.offsetX : 0),
      (this.offsetY_ = t.offsetY !== void 0 ? t.offsetY : 0),
      (this.backgroundFill_ = t.backgroundFill ? t.backgroundFill : null),
      (this.backgroundStroke_ = t.backgroundStroke ? t.backgroundStroke : null),
      (this.padding_ = t.padding === void 0 ? null : t.padding),
      (this.declutterMode_ = t.declutterMode);
  }
  clone() {
    const t = this.getScale();
    return new kd({
      font: this.getFont(),
      placement: this.getPlacement(),
      repeat: this.getRepeat(),
      maxAngle: this.getMaxAngle(),
      overflow: this.getOverflow(),
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      keepUpright: this.getKeepUpright(),
      scale: Array.isArray(t) ? t.slice() : t,
      text: this.getText(),
      textAlign: this.getTextAlign(),
      justify: this.getJustify(),
      textBaseline: this.getTextBaseline(),
      fill: this.getFill() ? this.getFill().clone() : void 0,
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      offsetX: this.getOffsetX(),
      offsetY: this.getOffsetY(),
      backgroundFill: this.getBackgroundFill()
        ? this.getBackgroundFill().clone()
        : void 0,
      backgroundStroke: this.getBackgroundStroke()
        ? this.getBackgroundStroke().clone()
        : void 0,
      padding: this.getPadding() || void 0,
      declutterMode: this.getDeclutterMode(),
    });
  }
  getOverflow() {
    return this.overflow_;
  }
  getFont() {
    return this.font_;
  }
  getMaxAngle() {
    return this.maxAngle_;
  }
  getPlacement() {
    return this.placement_;
  }
  getRepeat() {
    return this.repeat_;
  }
  getOffsetX() {
    return this.offsetX_;
  }
  getOffsetY() {
    return this.offsetY_;
  }
  getFill() {
    return this.fill_;
  }
  getRotateWithView() {
    return this.rotateWithView_;
  }
  getKeepUpright() {
    return this.keepUpright_;
  }
  getRotation() {
    return this.rotation_;
  }
  getScale() {
    return this.scale_;
  }
  getScaleArray() {
    return this.scaleArray_;
  }
  getStroke() {
    return this.stroke_;
  }
  getText() {
    return this.text_;
  }
  getTextAlign() {
    return this.textAlign_;
  }
  getJustify() {
    return this.justify_;
  }
  getTextBaseline() {
    return this.textBaseline_;
  }
  getBackgroundFill() {
    return this.backgroundFill_;
  }
  getBackgroundStroke() {
    return this.backgroundStroke_;
  }
  getPadding() {
    return this.padding_;
  }
  getDeclutterMode() {
    return this.declutterMode_;
  }
  setOverflow(t) {
    this.overflow_ = t;
  }
  setFont(t) {
    this.font_ = t;
  }
  setMaxAngle(t) {
    this.maxAngle_ = t;
  }
  setOffsetX(t) {
    this.offsetX_ = t;
  }
  setOffsetY(t) {
    this.offsetY_ = t;
  }
  setPlacement(t) {
    this.placement_ = t;
  }
  setRepeat(t) {
    this.repeat_ = t;
  }
  setRotateWithView(t) {
    this.rotateWithView_ = t;
  }
  setKeepUpright(t) {
    this.keepUpright_ = t;
  }
  setFill(t) {
    this.fill_ = t;
  }
  setRotation(t) {
    this.rotation_ = t;
  }
  setScale(t) {
    (this.scale_ = t), (this.scaleArray_ = Ve(t !== void 0 ? t : 1));
  }
  setStroke(t) {
    this.stroke_ = t;
  }
  setText(t) {
    this.text_ = t;
  }
  setTextAlign(t) {
    this.textAlign_ = t;
  }
  setJustify(t) {
    this.justify_ = t;
  }
  setTextBaseline(t) {
    this.textBaseline_ = t;
  }
  setBackgroundFill(t) {
    this.backgroundFill_ = t;
  }
  setBackgroundStroke(t) {
    this.backgroundStroke_ = t;
  }
  setPadding(t) {
    this.padding_ = t;
  }
}
const Oe = { ANIMATING: 0, INTERACTING: 1 },
  ht = {
    BEGIN_GEOMETRY: 0,
    BEGIN_PATH: 1,
    CIRCLE: 2,
    CLOSE_PATH: 3,
    CUSTOM: 4,
    DRAW_CHARS: 5,
    DRAW_IMAGE: 6,
    END_GEOMETRY: 7,
    FILL: 8,
    MOVE_TO_LINE_TO: 9,
    SET_FILL_STYLE: 10,
    SET_STROKE_STYLE: 11,
    STROKE: 12,
  },
  Su = [ht.FILL],
  ms = [ht.STROKE],
  ir = [ht.BEGIN_PATH],
  Cy = [ht.CLOSE_PATH];
class $a extends Lp {
  constructor(t, i, s, l) {
    super(),
      (this.tolerance = t),
      (this.maxExtent = i),
      (this.pixelRatio = l),
      (this.maxLineWidth = 0),
      (this.resolution = s),
      (this.beginGeometryInstruction1_ = null),
      (this.beginGeometryInstruction2_ = null),
      (this.bufferedMaxExtent_ = null),
      (this.instructions = []),
      (this.coordinates = []),
      (this.tmpCoordinate_ = []),
      (this.hitDetectionInstructions = []),
      (this.state = {});
  }
  applyPixelRatio(t) {
    const i = this.pixelRatio;
    return i == 1
      ? t
      : t.map(function (s) {
          return s * i;
        });
  }
  appendFlatPointCoordinates(t, i) {
    const s = this.getBufferedMaxExtent(),
      l = this.tmpCoordinate_,
      o = this.coordinates;
    let c = o.length;
    for (let h = 0, d = t.length; h < d; h += i)
      (l[0] = t[h]),
        (l[1] = t[h + 1]),
        gl(s, l) && ((o[c++] = l[0]), (o[c++] = l[1]));
    return c;
  }
  appendFlatLineCoordinates(t, i, s, l, o, c) {
    const h = this.coordinates;
    let d = h.length;
    const _ = this.getBufferedMaxExtent();
    c && (i += l);
    let m = t[i],
      y = t[i + 1];
    const v = this.tmpCoordinate_;
    let E = !0,
      x,
      R,
      b;
    for (x = i + l; x < s; x += l)
      (v[0] = t[x]),
        (v[1] = t[x + 1]),
        (b = Vf(_, v)),
        b !== R
          ? (E && ((h[d++] = m), (h[d++] = y), (E = !1)),
            (h[d++] = v[0]),
            (h[d++] = v[1]))
          : b === ge.INTERSECTING
            ? ((h[d++] = v[0]), (h[d++] = v[1]), (E = !1))
            : (E = !0),
        (m = v[0]),
        (y = v[1]),
        (R = b);
    return ((o && E) || x === i + l) && ((h[d++] = m), (h[d++] = y)), d;
  }
  drawCustomCoordinates_(t, i, s, l, o) {
    for (let c = 0, h = s.length; c < h; ++c) {
      const d = s[c],
        _ = this.appendFlatLineCoordinates(t, i, d, l, !1, !1);
      o.push(_), (i = d);
    }
    return i;
  }
  drawCustom(t, i, s, l, o) {
    this.beginGeometry(t, i, o);
    const c = t.getType(),
      h = t.getStride(),
      d = this.coordinates.length;
    let _, m, y, v, E;
    switch (c) {
      case "MultiPolygon":
        (_ = t.getOrientedFlatCoordinates()), (v = []);
        const x = t.getEndss();
        E = 0;
        for (let R = 0, b = x.length; R < b; ++R) {
          const w = [];
          (E = this.drawCustomCoordinates_(_, E, x[R], h, w)), v.push(w);
        }
        this.instructions.push([ht.CUSTOM, d, v, t, s, id, o]),
          this.hitDetectionInstructions.push([
            ht.CUSTOM,
            d,
            v,
            t,
            l || s,
            id,
            o,
          ]);
        break;
      case "Polygon":
      case "MultiLineString":
        (y = []),
          (_ =
            c == "Polygon"
              ? t.getOrientedFlatCoordinates()
              : t.getFlatCoordinates()),
          (E = this.drawCustomCoordinates_(_, 0, t.getEnds(), h, y)),
          this.instructions.push([ht.CUSTOM, d, y, t, s, Ua, o]),
          this.hitDetectionInstructions.push([
            ht.CUSTOM,
            d,
            y,
            t,
            l || s,
            Ua,
            o,
          ]);
        break;
      case "LineString":
      case "Circle":
        (_ = t.getFlatCoordinates()),
          (m = this.appendFlatLineCoordinates(_, 0, _.length, h, !1, !1)),
          this.instructions.push([ht.CUSTOM, d, m, t, s, _s, o]),
          this.hitDetectionInstructions.push([
            ht.CUSTOM,
            d,
            m,
            t,
            l || s,
            _s,
            o,
          ]);
        break;
      case "MultiPoint":
        (_ = t.getFlatCoordinates()),
          (m = this.appendFlatPointCoordinates(_, h)),
          m > d &&
            (this.instructions.push([ht.CUSTOM, d, m, t, s, _s, o]),
            this.hitDetectionInstructions.push([
              ht.CUSTOM,
              d,
              m,
              t,
              l || s,
              _s,
              o,
            ]));
        break;
      case "Point":
        (_ = t.getFlatCoordinates()),
          this.coordinates.push(_[0], _[1]),
          (m = this.coordinates.length),
          this.instructions.push([ht.CUSTOM, d, m, t, s, void 0, o]),
          this.hitDetectionInstructions.push([
            ht.CUSTOM,
            d,
            m,
            t,
            l || s,
            void 0,
            o,
          ]);
        break;
    }
    this.endGeometry(i);
  }
  beginGeometry(t, i, s) {
    (this.beginGeometryInstruction1_ = [ht.BEGIN_GEOMETRY, i, 0, t, s]),
      this.instructions.push(this.beginGeometryInstruction1_),
      (this.beginGeometryInstruction2_ = [ht.BEGIN_GEOMETRY, i, 0, t, s]),
      this.hitDetectionInstructions.push(this.beginGeometryInstruction2_);
  }
  finish() {
    return {
      instructions: this.instructions,
      hitDetectionInstructions: this.hitDetectionInstructions,
      coordinates: this.coordinates,
    };
  }
  reverseHitDetectionInstructions() {
    const t = this.hitDetectionInstructions;
    t.reverse();
    let i;
    const s = t.length;
    let l,
      o,
      c = -1;
    for (i = 0; i < s; ++i)
      (l = t[i]),
        (o = l[0]),
        o == ht.END_GEOMETRY
          ? (c = i)
          : o == ht.BEGIN_GEOMETRY &&
            ((l[2] = i), kE(this.hitDetectionInstructions, c, i), (c = -1));
  }
  fillStyleToState(t, i = {}) {
    if (t) {
      const s = t.getColor();
      (i.fillPatternScale =
        s && typeof s == "object" && "src" in s ? this.pixelRatio : 1),
        (i.fillStyle = tn(s || He));
    } else i.fillStyle = void 0;
    return i;
  }
  strokeStyleToState(t, i = {}) {
    if (t) {
      const s = t.getColor();
      i.strokeStyle = tn(s || ka);
      const l = t.getLineCap();
      i.lineCap = l !== void 0 ? l : El;
      const o = t.getLineDash();
      i.lineDash = o ? o.slice() : Dn;
      const c = t.getLineDashOffset();
      i.lineDashOffset = c || Ln;
      const h = t.getLineJoin();
      i.lineJoin = h !== void 0 ? h : Sl;
      const d = t.getWidth();
      i.lineWidth = d !== void 0 ? d : Ha;
      const _ = t.getMiterLimit();
      (i.miterLimit = _ !== void 0 ? _ : Pa),
        i.lineWidth > this.maxLineWidth &&
          ((this.maxLineWidth = i.lineWidth), (this.bufferedMaxExtent_ = null));
    } else
      (i.strokeStyle = void 0),
        (i.lineCap = void 0),
        (i.lineDash = null),
        (i.lineDashOffset = void 0),
        (i.lineJoin = void 0),
        (i.lineWidth = void 0),
        (i.miterLimit = void 0);
    return i;
  }
  setFillStrokeStyle(t, i) {
    const s = this.state;
    this.fillStyleToState(t, s), this.strokeStyleToState(i, s);
  }
  createFill(t) {
    const i = t.fillStyle,
      s = [ht.SET_FILL_STYLE, i];
    return typeof i != "string" && s.push(t.fillPatternScale), s;
  }
  applyStroke(t) {
    this.instructions.push(this.createStroke(t));
  }
  createStroke(t) {
    return [
      ht.SET_STROKE_STYLE,
      t.strokeStyle,
      t.lineWidth * this.pixelRatio,
      t.lineCap,
      t.lineJoin,
      t.miterLimit,
      t.lineDash ? this.applyPixelRatio(t.lineDash) : null,
      t.lineDashOffset * this.pixelRatio,
    ];
  }
  updateFillStyle(t, i) {
    const s = t.fillStyle;
    (typeof s != "string" || t.currentFillStyle != s) &&
      (s !== void 0 && this.instructions.push(i.call(this, t)),
      (t.currentFillStyle = s));
  }
  updateStrokeStyle(t, i) {
    const s = t.strokeStyle,
      l = t.lineCap,
      o = t.lineDash,
      c = t.lineDashOffset,
      h = t.lineJoin,
      d = t.lineWidth,
      _ = t.miterLimit;
    (t.currentStrokeStyle != s ||
      t.currentLineCap != l ||
      (o != t.currentLineDash && !Ts(t.currentLineDash, o)) ||
      t.currentLineDashOffset != c ||
      t.currentLineJoin != h ||
      t.currentLineWidth != d ||
      t.currentMiterLimit != _) &&
      (s !== void 0 && i.call(this, t),
      (t.currentStrokeStyle = s),
      (t.currentLineCap = l),
      (t.currentLineDash = o),
      (t.currentLineDashOffset = c),
      (t.currentLineJoin = h),
      (t.currentLineWidth = d),
      (t.currentMiterLimit = _));
  }
  endGeometry(t) {
    (this.beginGeometryInstruction1_[2] = this.instructions.length),
      (this.beginGeometryInstruction1_ = null),
      (this.beginGeometryInstruction2_[2] =
        this.hitDetectionInstructions.length),
      (this.beginGeometryInstruction2_ = null);
    const i = [ht.END_GEOMETRY, t];
    this.instructions.push(i), this.hitDetectionInstructions.push(i);
  }
  getBufferedMaxExtent() {
    if (
      !this.bufferedMaxExtent_ &&
      ((this.bufferedMaxExtent_ = Vy(this.maxExtent)), this.maxLineWidth > 0)
    ) {
      const t = (this.resolution * (this.maxLineWidth + 1)) / 2;
      _d(this.bufferedMaxExtent_, t, this.bufferedMaxExtent_);
    }
    return this.bufferedMaxExtent_;
  }
}
class Jx extends $a {
  constructor(t, i, s, l) {
    super(t, i, s, l),
      (this.hitDetectionImage_ = null),
      (this.image_ = null),
      (this.imagePixelRatio_ = void 0),
      (this.anchorX_ = void 0),
      (this.anchorY_ = void 0),
      (this.height_ = void 0),
      (this.opacity_ = void 0),
      (this.originX_ = void 0),
      (this.originY_ = void 0),
      (this.rotateWithView_ = void 0),
      (this.rotation_ = void 0),
      (this.scale_ = void 0),
      (this.width_ = void 0),
      (this.declutterMode_ = void 0),
      (this.declutterImageWithText_ = void 0);
  }
  drawPoint(t, i, s) {
    if (
      !this.image_ ||
      (this.maxExtent && !gl(this.maxExtent, t.getFlatCoordinates()))
    )
      return;
    this.beginGeometry(t, i, s);
    const l = t.getFlatCoordinates(),
      o = t.getStride(),
      c = this.coordinates.length,
      h = this.appendFlatPointCoordinates(l, o);
    this.instructions.push([
      ht.DRAW_IMAGE,
      c,
      h,
      this.image_,
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        (this.scale_[0] * this.pixelRatio) / this.imagePixelRatio_,
        (this.scale_[1] * this.pixelRatio) / this.imagePixelRatio_,
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_,
    ]),
      this.hitDetectionInstructions.push([
        ht.DRAW_IMAGE,
        c,
        h,
        this.hitDetectionImage_,
        this.anchorX_,
        this.anchorY_,
        this.height_,
        1,
        this.originX_,
        this.originY_,
        this.rotateWithView_,
        this.rotation_,
        this.scale_,
        this.width_,
        this.declutterMode_,
        this.declutterImageWithText_,
      ]),
      this.endGeometry(i);
  }
  drawMultiPoint(t, i, s) {
    if (!this.image_) return;
    this.beginGeometry(t, i, s);
    const l = t.getFlatCoordinates(),
      o = [];
    for (let d = 0, _ = l.length; d < _; d += t.getStride())
      (!this.maxExtent || gl(this.maxExtent, l.slice(d, d + 2))) &&
        o.push(l[d], l[d + 1]);
    const c = this.coordinates.length,
      h = this.appendFlatPointCoordinates(o, 2);
    this.instructions.push([
      ht.DRAW_IMAGE,
      c,
      h,
      this.image_,
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        (this.scale_[0] * this.pixelRatio) / this.imagePixelRatio_,
        (this.scale_[1] * this.pixelRatio) / this.imagePixelRatio_,
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_,
    ]),
      this.hitDetectionInstructions.push([
        ht.DRAW_IMAGE,
        c,
        h,
        this.hitDetectionImage_,
        this.anchorX_,
        this.anchorY_,
        this.height_,
        1,
        this.originX_,
        this.originY_,
        this.rotateWithView_,
        this.rotation_,
        this.scale_,
        this.width_,
        this.declutterMode_,
        this.declutterImageWithText_,
      ]),
      this.endGeometry(i);
  }
  finish() {
    return (
      this.reverseHitDetectionInstructions(),
      (this.anchorX_ = void 0),
      (this.anchorY_ = void 0),
      (this.hitDetectionImage_ = null),
      (this.image_ = null),
      (this.imagePixelRatio_ = void 0),
      (this.height_ = void 0),
      (this.scale_ = void 0),
      (this.opacity_ = void 0),
      (this.originX_ = void 0),
      (this.originY_ = void 0),
      (this.rotateWithView_ = void 0),
      (this.rotation_ = void 0),
      (this.width_ = void 0),
      super.finish()
    );
  }
  setImageStyle(t, i) {
    const s = t.getAnchor(),
      l = t.getSize(),
      o = t.getOrigin();
    (this.imagePixelRatio_ = t.getPixelRatio(this.pixelRatio)),
      (this.anchorX_ = s[0]),
      (this.anchorY_ = s[1]),
      (this.hitDetectionImage_ = t.getHitDetectionImage()),
      (this.image_ = t.getImage(this.pixelRatio)),
      (this.height_ = l[1]),
      (this.opacity_ = t.getOpacity()),
      (this.originX_ = o[0]),
      (this.originY_ = o[1]),
      (this.rotateWithView_ = t.getRotateWithView()),
      (this.rotation_ = t.getRotation()),
      (this.scale_ = t.getScaleArray()),
      (this.width_ = l[0]),
      (this.declutterMode_ = t.getDeclutterMode()),
      (this.declutterImageWithText_ = i);
  }
}
class $x extends $a {
  constructor(t, i, s, l) {
    super(t, i, s, l);
  }
  drawFlatCoordinates_(t, i, s, l) {
    const o = this.coordinates.length,
      c = this.appendFlatLineCoordinates(t, i, s, l, !1, !1),
      h = [ht.MOVE_TO_LINE_TO, o, c];
    return this.instructions.push(h), this.hitDetectionInstructions.push(h), s;
  }
  drawLineString(t, i, s) {
    const l = this.state,
      o = l.strokeStyle,
      c = l.lineWidth;
    if (o === void 0 || c === void 0) return;
    this.updateStrokeStyle(l, this.applyStroke),
      this.beginGeometry(t, i, s),
      this.hitDetectionInstructions.push(
        [
          ht.SET_STROKE_STYLE,
          l.strokeStyle,
          l.lineWidth,
          l.lineCap,
          l.lineJoin,
          l.miterLimit,
          Dn,
          Ln,
        ],
        ir,
      );
    const h = t.getFlatCoordinates(),
      d = t.getStride();
    this.drawFlatCoordinates_(h, 0, h.length, d),
      this.hitDetectionInstructions.push(ms),
      this.endGeometry(i);
  }
  drawMultiLineString(t, i, s) {
    const l = this.state,
      o = l.strokeStyle,
      c = l.lineWidth;
    if (o === void 0 || c === void 0) return;
    this.updateStrokeStyle(l, this.applyStroke),
      this.beginGeometry(t, i, s),
      this.hitDetectionInstructions.push(
        [
          ht.SET_STROKE_STYLE,
          l.strokeStyle,
          l.lineWidth,
          l.lineCap,
          l.lineJoin,
          l.miterLimit,
          Dn,
          Ln,
        ],
        ir,
      );
    const h = t.getEnds(),
      d = t.getFlatCoordinates(),
      _ = t.getStride();
    let m = 0;
    for (let y = 0, v = h.length; y < v; ++y)
      m = this.drawFlatCoordinates_(d, m, h[y], _);
    this.hitDetectionInstructions.push(ms), this.endGeometry(i);
  }
  finish() {
    const t = this.state;
    return (
      t.lastStroke != null &&
        t.lastStroke != this.coordinates.length &&
        this.instructions.push(ms),
      this.reverseHitDetectionInstructions(),
      (this.state = null),
      super.finish()
    );
  }
  applyStroke(t) {
    t.lastStroke != null &&
      t.lastStroke != this.coordinates.length &&
      (this.instructions.push(ms), (t.lastStroke = this.coordinates.length)),
      (t.lastStroke = 0),
      super.applyStroke(t),
      this.instructions.push(ir);
  }
}
class Ry extends $a {
  constructor(t, i, s, l) {
    super(t, i, s, l);
  }
  drawFlatCoordinatess_(t, i, s, l) {
    const o = this.state,
      c = o.fillStyle !== void 0,
      h = o.strokeStyle !== void 0,
      d = s.length;
    this.instructions.push(ir), this.hitDetectionInstructions.push(ir);
    for (let _ = 0; _ < d; ++_) {
      const m = s[_],
        y = this.coordinates.length,
        v = this.appendFlatLineCoordinates(t, i, m, l, !0, !h),
        E = [ht.MOVE_TO_LINE_TO, y, v];
      this.instructions.push(E),
        this.hitDetectionInstructions.push(E),
        h &&
          (this.instructions.push(Cy), this.hitDetectionInstructions.push(Cy)),
        (i = m);
    }
    return (
      c && (this.instructions.push(Su), this.hitDetectionInstructions.push(Su)),
      h && (this.instructions.push(ms), this.hitDetectionInstructions.push(ms)),
      i
    );
  }
  drawCircle(t, i, s) {
    const l = this.state,
      o = l.fillStyle,
      c = l.strokeStyle;
    if (o === void 0 && c === void 0) return;
    this.setFillStrokeStyles_(),
      this.beginGeometry(t, i, s),
      l.fillStyle !== void 0 &&
        this.hitDetectionInstructions.push([ht.SET_FILL_STYLE, He]),
      l.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          ht.SET_STROKE_STYLE,
          l.strokeStyle,
          l.lineWidth,
          l.lineCap,
          l.lineJoin,
          l.miterLimit,
          Dn,
          Ln,
        ]);
    const h = t.getFlatCoordinates(),
      d = t.getStride(),
      _ = this.coordinates.length;
    this.appendFlatLineCoordinates(h, 0, h.length, d, !1, !1);
    const m = [ht.CIRCLE, _];
    this.instructions.push(ir, m),
      this.hitDetectionInstructions.push(ir, m),
      l.fillStyle !== void 0 &&
        (this.instructions.push(Su), this.hitDetectionInstructions.push(Su)),
      l.strokeStyle !== void 0 &&
        (this.instructions.push(ms), this.hitDetectionInstructions.push(ms)),
      this.endGeometry(i);
  }
  drawPolygon(t, i, s) {
    const l = this.state,
      o = l.fillStyle,
      c = l.strokeStyle;
    if (o === void 0 && c === void 0) return;
    this.setFillStrokeStyles_(),
      this.beginGeometry(t, i, s),
      l.fillStyle !== void 0 &&
        this.hitDetectionInstructions.push([ht.SET_FILL_STYLE, He]),
      l.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          ht.SET_STROKE_STYLE,
          l.strokeStyle,
          l.lineWidth,
          l.lineCap,
          l.lineJoin,
          l.miterLimit,
          Dn,
          Ln,
        ]);
    const h = t.getEnds(),
      d = t.getOrientedFlatCoordinates(),
      _ = t.getStride();
    this.drawFlatCoordinatess_(d, 0, h, _), this.endGeometry(i);
  }
  drawMultiPolygon(t, i, s) {
    const l = this.state,
      o = l.fillStyle,
      c = l.strokeStyle;
    if (o === void 0 && c === void 0) return;
    this.setFillStrokeStyles_(),
      this.beginGeometry(t, i, s),
      l.fillStyle !== void 0 &&
        this.hitDetectionInstructions.push([ht.SET_FILL_STYLE, He]),
      l.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          ht.SET_STROKE_STYLE,
          l.strokeStyle,
          l.lineWidth,
          l.lineCap,
          l.lineJoin,
          l.miterLimit,
          Dn,
          Ln,
        ]);
    const h = t.getEndss(),
      d = t.getOrientedFlatCoordinates(),
      _ = t.getStride();
    let m = 0;
    for (let y = 0, v = h.length; y < v; ++y)
      m = this.drawFlatCoordinatess_(d, m, h[y], _);
    this.endGeometry(i);
  }
  finish() {
    this.reverseHitDetectionInstructions(), (this.state = null);
    const t = this.tolerance;
    if (t !== 0) {
      const i = this.coordinates;
      for (let s = 0, l = i.length; s < l; ++s) i[s] = Js(i[s], t);
    }
    return super.finish();
  }
  setFillStrokeStyles_() {
    const t = this.state;
    t.fillStyle !== void 0 && this.updateFillStyle(t, this.createFill),
      t.strokeStyle !== void 0 && this.updateStrokeStyle(t, this.applyStroke);
  }
}
function t2(r, t, i, s, l) {
  const o = [];
  let c = i,
    h = 0,
    d = t.slice(i, 2);
  for (; h < r && c + l < s; ) {
    const [_, m] = d.slice(-2),
      y = t[c + l],
      v = t[c + l + 1],
      E = Math.sqrt((y - _) * (y - _) + (v - m) * (v - m));
    if (((h += E), h >= r)) {
      const x = (r - h + E) / E,
        R = ni(_, y, x),
        b = ni(m, v, x);
      d.push(R, b), o.push(d), (d = [R, b]), h == r && (c += l), (h = 0);
    } else if (h < r) d.push(t[c + l], t[c + l + 1]), (c += l);
    else {
      const x = E - h,
        R = ni(_, y, x / E),
        b = ni(m, v, x / E);
      d.push(R, b), o.push(d), (d = [R, b]), (h = 0), (c += l);
    }
  }
  return h > 0 && o.push(d), o;
}
function e2(r, t, i, s, l) {
  let o = i,
    c = i,
    h = 0,
    d = 0,
    _ = i,
    m,
    y,
    v,
    E,
    x,
    R,
    b,
    w,
    M,
    G;
  for (y = i; y < s; y += l) {
    const I = t[y],
      D = t[y + 1];
    x !== void 0 &&
      ((M = I - x),
      (G = D - R),
      (E = Math.sqrt(M * M + G * G)),
      b !== void 0 &&
        ((d += v),
        (m = Math.acos((b * M + w * G) / (v * E))),
        m > r && (d > h && ((h = d), (o = _), (c = y)), (d = 0), (_ = y - l))),
      (v = E),
      (b = M),
      (w = G)),
      (x = I),
      (R = D);
  }
  return (d += E), d > h ? [_, y] : [o, c];
}
const Pu = {
  left: 0,
  center: 0.5,
  right: 1,
  top: 0,
  middle: 0.5,
  hanging: 0.2,
  alphabetic: 0.8,
  ideographic: 0.8,
  bottom: 1,
};
class i2 extends $a {
  constructor(t, i, s, l) {
    super(t, i, s, l),
      (this.labels_ = null),
      (this.text_ = ""),
      (this.textOffsetX_ = 0),
      (this.textOffsetY_ = 0),
      (this.textRotateWithView_ = void 0),
      (this.textKeepUpright_ = void 0),
      (this.textRotation_ = 0),
      (this.textFillState_ = null),
      (this.fillStates = {}),
      (this.fillStates[He] = { fillStyle: He }),
      (this.textStrokeState_ = null),
      (this.strokeStates = {}),
      (this.textState_ = {}),
      (this.textStates = {}),
      (this.textKey_ = ""),
      (this.fillKey_ = ""),
      (this.strokeKey_ = ""),
      (this.declutterMode_ = void 0),
      (this.declutterImageWithText_ = void 0);
  }
  finish() {
    const t = super.finish();
    return (
      (t.textStates = this.textStates),
      (t.fillStates = this.fillStates),
      (t.strokeStates = this.strokeStates),
      t
    );
  }
  drawText(t, i, s) {
    const l = this.textFillState_,
      o = this.textStrokeState_,
      c = this.textState_;
    if (this.text_ === "" || !c || (!l && !o)) return;
    const h = this.coordinates;
    let d = h.length;
    const _ = t.getType();
    let m = null,
      y = t.getStride();
    if (
      c.placement === "line" &&
      (_ == "LineString" ||
        _ == "MultiLineString" ||
        _ == "Polygon" ||
        _ == "MultiPolygon")
    ) {
      if (!Ze(this.maxExtent, t.getExtent())) return;
      let v;
      if (((m = t.getFlatCoordinates()), _ == "LineString")) v = [m.length];
      else if (_ == "MultiLineString") v = t.getEnds();
      else if (_ == "Polygon") v = t.getEnds().slice(0, 1);
      else if (_ == "MultiPolygon") {
        const b = t.getEndss();
        v = [];
        for (let w = 0, M = b.length; w < M; ++w) v.push(b[w][0]);
      }
      this.beginGeometry(t, i, s);
      const E = c.repeat,
        x = E ? void 0 : c.textAlign;
      let R = 0;
      for (let b = 0, w = v.length; b < w; ++b) {
        let M;
        E
          ? (M = t2(E * this.resolution, m, R, v[b], y))
          : (M = [m.slice(R, v[b])]);
        for (let G = 0, I = M.length; G < I; ++G) {
          const D = M[G];
          let j = 0,
            Q = D.length;
          if (x == null) {
            const F = e2(c.maxAngle, D, 0, D.length, 2);
            (j = F[0]), (Q = F[1]);
          }
          for (let F = j; F < Q; F += y) h.push(D[F], D[F + 1]);
          const Z = h.length;
          (R = v[b]), this.drawChars_(d, Z), (d = Z);
        }
      }
      this.endGeometry(i);
    } else {
      let v = c.overflow ? null : [];
      switch (_) {
        case "Point":
        case "MultiPoint":
          m = t.getFlatCoordinates();
          break;
        case "LineString":
          m = t.getFlatMidpoint();
          break;
        case "Circle":
          m = t.getCenter();
          break;
        case "MultiLineString":
          (m = t.getFlatMidpoints()), (y = 2);
          break;
        case "Polygon":
          (m = t.getFlatInteriorPoint()),
            c.overflow || v.push(m[2] / this.resolution),
            (y = 3);
          break;
        case "MultiPolygon":
          const I = t.getFlatInteriorPoints();
          m = [];
          for (let D = 0, j = I.length; D < j; D += 3)
            c.overflow || v.push(I[D + 2] / this.resolution),
              m.push(I[D], I[D + 1]);
          if (m.length === 0) return;
          y = 2;
          break;
      }
      const E = this.appendFlatPointCoordinates(m, y);
      if (E === d) return;
      if (v && (E - d) / 2 !== m.length / y) {
        let I = d / 2;
        v = v.filter((D, j) => {
          const Q =
            h[(I + j) * 2] === m[j * y] && h[(I + j) * 2 + 1] === m[j * y + 1];
          return Q || --I, Q;
        });
      }
      this.saveTextStates_();
      const x = c.backgroundFill
          ? this.createFill(this.fillStyleToState(c.backgroundFill))
          : null,
        R = c.backgroundStroke
          ? this.createStroke(this.strokeStyleToState(c.backgroundStroke))
          : null;
      this.beginGeometry(t, i, s);
      let b = c.padding;
      if (b != er && (c.scale[0] < 0 || c.scale[1] < 0)) {
        let I = c.padding[0],
          D = c.padding[1],
          j = c.padding[2],
          Q = c.padding[3];
        c.scale[0] < 0 && ((D = -D), (Q = -Q)),
          c.scale[1] < 0 && ((I = -I), (j = -j)),
          (b = [I, D, j, Q]);
      }
      const w = this.pixelRatio;
      this.instructions.push([
        ht.DRAW_IMAGE,
        d,
        E,
        null,
        NaN,
        NaN,
        NaN,
        1,
        0,
        0,
        this.textRotateWithView_,
        this.textRotation_,
        [1, 1],
        NaN,
        this.declutterMode_,
        this.declutterImageWithText_,
        b == er
          ? er
          : b.map(function (I) {
              return I * w;
            }),
        x,
        R,
        this.text_,
        this.textKey_,
        this.strokeKey_,
        this.fillKey_,
        this.textOffsetX_,
        this.textOffsetY_,
        v,
      ]);
      const M = 1 / w,
        G = x ? x.slice(0) : null;
      G && (G[1] = He),
        this.hitDetectionInstructions.push([
          ht.DRAW_IMAGE,
          d,
          E,
          null,
          NaN,
          NaN,
          NaN,
          1,
          0,
          0,
          this.textRotateWithView_,
          this.textRotation_,
          [M, M],
          NaN,
          this.declutterMode_,
          this.declutterImageWithText_,
          b,
          G,
          R,
          this.text_,
          this.textKey_,
          this.strokeKey_,
          this.fillKey_ ? He : this.fillKey_,
          this.textOffsetX_,
          this.textOffsetY_,
          v,
        ]),
        this.endGeometry(i);
    }
  }
  saveTextStates_() {
    const t = this.textStrokeState_,
      i = this.textState_,
      s = this.textFillState_,
      l = this.strokeKey_;
    t &&
      (l in this.strokeStates ||
        (this.strokeStates[l] = {
          strokeStyle: t.strokeStyle,
          lineCap: t.lineCap,
          lineDashOffset: t.lineDashOffset,
          lineWidth: t.lineWidth,
          lineJoin: t.lineJoin,
          miterLimit: t.miterLimit,
          lineDash: t.lineDash,
        }));
    const o = this.textKey_;
    o in this.textStates ||
      (this.textStates[o] = {
        font: i.font,
        textAlign: i.textAlign || Ba,
        justify: i.justify,
        textBaseline: i.textBaseline || Gu,
        scale: i.scale,
      });
    const c = this.fillKey_;
    s &&
      (c in this.fillStates ||
        (this.fillStates[c] = { fillStyle: s.fillStyle }));
  }
  drawChars_(t, i) {
    const s = this.textStrokeState_,
      l = this.textState_,
      o = this.strokeKey_,
      c = this.textKey_,
      h = this.fillKey_;
    this.saveTextStates_();
    const d = this.pixelRatio,
      _ = Pu[l.textBaseline],
      m = this.textOffsetY_ * d,
      y = this.text_,
      v = s ? (s.lineWidth * Math.abs(l.scale[0])) / 2 : 0;
    this.instructions.push([
      ht.DRAW_CHARS,
      t,
      i,
      _,
      l.overflow,
      h,
      l.maxAngle,
      d,
      m,
      o,
      v * d,
      y,
      c,
      1,
      this.declutterMode_,
      this.textKeepUpright_,
    ]),
      this.hitDetectionInstructions.push([
        ht.DRAW_CHARS,
        t,
        i,
        _,
        l.overflow,
        h && He,
        l.maxAngle,
        d,
        m,
        o,
        v * d,
        y,
        c,
        1 / d,
        this.declutterMode_,
        this.textKeepUpright_,
      ]);
  }
  setTextStyle(t, i) {
    let s, l, o;
    if (!t) this.text_ = "";
    else {
      const c = t.getFill();
      c
        ? ((l = this.textFillState_),
          l || ((l = {}), (this.textFillState_ = l)),
          (l.fillStyle = tn(c.getColor() || He)))
        : ((l = null), (this.textFillState_ = l));
      const h = t.getStroke();
      if (!h) (o = null), (this.textStrokeState_ = o);
      else {
        (o = this.textStrokeState_),
          o || ((o = {}), (this.textStrokeState_ = o));
        const R = h.getLineDash(),
          b = h.getLineDashOffset(),
          w = h.getWidth(),
          M = h.getMiterLimit();
        (o.lineCap = h.getLineCap() || El),
          (o.lineDash = R ? R.slice() : Dn),
          (o.lineDashOffset = b === void 0 ? Ln : b),
          (o.lineJoin = h.getLineJoin() || Sl),
          (o.lineWidth = w === void 0 ? Ha : w),
          (o.miterLimit = M === void 0 ? Pa : M),
          (o.strokeStyle = tn(h.getColor() || ka));
      }
      s = this.textState_;
      const d = t.getFont() || zp;
      Tx(d);
      const _ = t.getScaleArray();
      (s.overflow = t.getOverflow()),
        (s.font = d),
        (s.maxAngle = t.getMaxAngle()),
        (s.placement = t.getPlacement()),
        (s.textAlign = t.getTextAlign()),
        (s.repeat = t.getRepeat()),
        (s.justify = t.getJustify()),
        (s.textBaseline = t.getTextBaseline() || Gu),
        (s.backgroundFill = t.getBackgroundFill()),
        (s.backgroundStroke = t.getBackgroundStroke()),
        (s.padding = t.getPadding() || er),
        (s.scale = _ === void 0 ? [1, 1] : _);
      const m = t.getOffsetX(),
        y = t.getOffsetY(),
        v = t.getRotateWithView(),
        E = t.getKeepUpright(),
        x = t.getRotation();
      (this.text_ = t.getText() || ""),
        (this.textOffsetX_ = m === void 0 ? 0 : m),
        (this.textOffsetY_ = y === void 0 ? 0 : y),
        (this.textRotateWithView_ = v === void 0 ? !1 : v),
        (this.textKeepUpright_ = E === void 0 ? !0 : E),
        (this.textRotation_ = x === void 0 ? 0 : x),
        (this.strokeKey_ = o
          ? (typeof o.strokeStyle == "string"
              ? o.strokeStyle
              : zt(o.strokeStyle)) +
            o.lineCap +
            o.lineDashOffset +
            "|" +
            o.lineWidth +
            o.lineJoin +
            o.miterLimit +
            "[" +
            o.lineDash.join() +
            "]"
          : ""),
        (this.textKey_ =
          s.font +
          s.scale +
          (s.textAlign || "?") +
          (s.repeat || "?") +
          (s.justify || "?") +
          (s.textBaseline || "?")),
        (this.fillKey_ =
          l && l.fillStyle
            ? typeof l.fillStyle == "string"
              ? l.fillStyle
              : "|" + zt(l.fillStyle)
            : "");
    }
    (this.declutterMode_ = t.getDeclutterMode()),
      (this.declutterImageWithText_ = i);
  }
}
const n2 = {
  Circle: Ry,
  Default: $a,
  Image: Jx,
  LineString: $x,
  Polygon: Ry,
  Text: i2,
};
class s2 {
  constructor(t, i, s, l) {
    (this.tolerance_ = t),
      (this.maxExtent_ = i),
      (this.pixelRatio_ = l),
      (this.resolution_ = s),
      (this.buildersByZIndex_ = {});
  }
  finish() {
    const t = {};
    for (const i in this.buildersByZIndex_) {
      t[i] = t[i] || {};
      const s = this.buildersByZIndex_[i];
      for (const l in s) {
        const o = s[l].finish();
        t[i][l] = o;
      }
    }
    return t;
  }
  getBuilder(t, i) {
    const s = t !== void 0 ? t.toString() : "0";
    let l = this.buildersByZIndex_[s];
    l === void 0 && ((l = {}), (this.buildersByZIndex_[s] = l));
    let o = l[i];
    if (o === void 0) {
      const c = n2[i];
      (o = new c(
        this.tolerance_,
        this.maxExtent_,
        this.resolution_,
        this.pixelRatio_,
      )),
        (l[i] = o);
    }
    return o;
  }
}
function r2(r, t, i, s, l, o, c, h, d, _, m, y, v = !0) {
  let E = r[t],
    x = r[t + 1],
    R = 0,
    b = 0,
    w = 0,
    M = 0;
  function G() {
    (R = E),
      (b = x),
      (t += s),
      (E = r[t]),
      (x = r[t + 1]),
      (M += w),
      (w = Math.sqrt((E - R) * (E - R) + (x - b) * (x - b)));
  }
  do G();
  while (t < i - s && M + w < o);
  let I = w === 0 ? 0 : (o - M) / w;
  const D = ni(R, E, I),
    j = ni(b, x, I),
    Q = t - s,
    Z = M,
    F = o + h * d(_, l, m);
  for (; t < i - s && M + w < F; ) G();
  I = w === 0 ? 0 : (F - M) / w;
  const q = ni(R, E, I),
    rt = ni(b, x, I);
  let it = !1;
  if (v)
    if (y) {
      const V = [D, j, q, rt];
      hp(V, 0, 4, 2, y, V, V), (it = V[0] > V[2]);
    } else it = D > q;
  const ot = Math.PI,
    st = [],
    nt = Q + s === t;
  (t = Q), (w = 0), (M = Z), (E = r[t]), (x = r[t + 1]);
  let Y;
  if (nt) {
    G(), (Y = Math.atan2(x - b, E - R)), it && (Y += Y > 0 ? -ot : ot);
    const V = (q + D) / 2,
      W = (rt + j) / 2;
    return (st[0] = [V, W, (F - o) / 2, Y, l]), st;
  }
  l = l.replace(/\n/g, " ");
  for (let V = 0, W = l.length; V < W; ) {
    G();
    let $ = Math.atan2(x - b, E - R);
    if ((it && ($ += $ > 0 ? -ot : ot), Y !== void 0)) {
      let lt = $ - Y;
      if (((lt += lt > ot ? -2 * ot : lt < -ot ? 2 * ot : 0), Math.abs(lt) > c))
        return null;
    }
    Y = $;
    const C = V;
    let X = 0;
    for (; V < W; ++V) {
      const lt = it ? W - V - 1 : V,
        ct = h * d(_, l[lt], m);
      if (t + s < i && M + w < o + X + ct / 2) break;
      X += ct;
    }
    if (V === C) continue;
    const U = it ? l.substring(W - C, W - V) : l.substring(C, V);
    I = w === 0 ? 0 : (o + X / 2 - M) / w;
    const tt = ni(R, E, I),
      J = ni(b, x, I);
    st.push([tt, J, X / 2, $, U]), (o += X);
  }
  return st;
}
class Hp {
  constructor() {
    z0(
      this,
      "pushMethodArgs_",
      (...t) => (this.instructions_[this.zIndex + this.offset_].push(t), this),
    );
    (this.instructions_ = []),
      (this.zIndex = 0),
      (this.offset_ = 0),
      (this.context_ = new Proxy(Nu(), {
        get: (t, i) => {
          if (typeof Nu()[i] == "function")
            return (
              this.instructions_[this.zIndex + this.offset_] ||
                (this.instructions_[this.zIndex + this.offset_] = []),
              this.instructions_[this.zIndex + this.offset_].push(i),
              this.pushMethodArgs_
            );
        },
        set: (t, i, s) => (
          this.instructions_[this.zIndex + this.offset_] ||
            (this.instructions_[this.zIndex + this.offset_] = []),
          this.instructions_[this.zIndex + this.offset_].push(i, s),
          !0
        ),
      }));
  }
  pushFunction(t) {
    this.instructions_[this.zIndex + this.offset_].push(t);
  }
  getContext() {
    return this.context_;
  }
  draw(t) {
    this.instructions_.forEach((i) => {
      for (let s = 0, l = i.length; s < l; ++s) {
        const o = i[s];
        if (typeof o == "function") {
          o(t);
          continue;
        }
        const c = i[++s];
        if (typeof t[o] == "function") t[o](...c);
        else {
          if (typeof c == "function") {
            t[o] = c(t);
            continue;
          }
          t[o] = c;
        }
      }
    });
  }
  clear() {
    (this.instructions_.length = 0), (this.zIndex = 0), (this.offset_ = 0);
  }
  offset() {
    (this.offset_ = this.instructions_.length), (this.zIndex = 0);
  }
}
const Wr = Ti(),
  as = [],
  Cn = [],
  Rn = [],
  os = [];
function by(r) {
  return r[3].declutterBox;
}
const wy = new RegExp("[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]");
function Gf(r, t) {
  return (
    t === "start"
      ? (t = wy.test(r) ? "right" : "left")
      : t === "end" && (t = wy.test(r) ? "left" : "right"),
    Pu[t]
  );
}
function l2(r, t, i) {
  return (
    i > 0 &&
      r.push(
        `
`,
        "",
      ),
    r.push(t, ""),
    r
  );
}
class a2 {
  constructor(t, i, s, l, o) {
    (this.overlaps = s),
      (this.pixelRatio = i),
      (this.resolution = t),
      this.alignAndScaleFill_,
      (this.instructions = l.instructions),
      (this.coordinates = l.coordinates),
      (this.coordinateCache_ = {}),
      (this.renderedTransform_ = Gi()),
      (this.hitDetectionInstructions = l.hitDetectionInstructions),
      (this.pixelCoordinates_ = null),
      (this.viewRotation_ = 0),
      (this.fillStates = l.fillStates || {}),
      (this.strokeStates = l.strokeStates || {}),
      (this.textStates = l.textStates || {}),
      (this.widths_ = {}),
      (this.labels_ = {}),
      (this.zIndexContext_ = o ? new Hp() : null);
  }
  getZIndexContext() {
    return this.zIndexContext_;
  }
  createLabel(t, i, s, l) {
    const o = t + i + s + l;
    if (this.labels_[o]) return this.labels_[o];
    const c = l ? this.strokeStates[l] : null,
      h = s ? this.fillStates[s] : null,
      d = this.textStates[i],
      _ = this.pixelRatio,
      m = [d.scale[0] * _, d.scale[1] * _],
      y = d.justify
        ? Pu[d.justify]
        : Gf(Array.isArray(t) ? t[0] : t, d.textAlign || Ba),
      v = l && c.lineWidth ? c.lineWidth : 0,
      E = Array.isArray(t)
        ? t
        : String(t)
            .split(
              `
`,
            )
            .reduce(l2, []),
      { width: x, height: R, widths: b, heights: w, lineWidths: M } = Rx(d, E),
      G = x + v,
      I = [],
      D = (G + 2) * m[0],
      j = (R + v) * m[1],
      Q = {
        width: D < 0 ? Math.floor(D) : Math.ceil(D),
        height: j < 0 ? Math.floor(j) : Math.ceil(j),
        contextInstructions: I,
      };
    (m[0] != 1 || m[1] != 1) && I.push("scale", m),
      l &&
        (I.push("strokeStyle", c.strokeStyle),
        I.push("lineWidth", v),
        I.push("lineCap", c.lineCap),
        I.push("lineJoin", c.lineJoin),
        I.push("miterLimit", c.miterLimit),
        I.push("setLineDash", [c.lineDash]),
        I.push("lineDashOffset", c.lineDashOffset)),
      s && I.push("fillStyle", h.fillStyle),
      I.push("textBaseline", "middle"),
      I.push("textAlign", "center");
    const Z = 0.5 - y;
    let F = y * G + Z * v;
    const q = [],
      rt = [];
    let it = 0,
      ot = 0,
      st = 0,
      nt = 0,
      Y;
    for (let V = 0, W = E.length; V < W; V += 2) {
      const $ = E[V];
      if (
        $ ===
        `
`
      ) {
        (ot += it), (it = 0), (F = y * G + Z * v), ++nt;
        continue;
      }
      const C = E[V + 1] || d.font;
      C !== Y && (l && q.push("font", C), s && rt.push("font", C), (Y = C)),
        (it = Math.max(it, w[st]));
      const X = [$, F + Z * b[st] + y * (b[st] - M[nt]), 0.5 * (v + it) + ot];
      (F += b[st]),
        l && q.push("strokeText", X),
        s && rt.push("fillText", X),
        ++st;
    }
    return (
      Array.prototype.push.apply(I, q),
      Array.prototype.push.apply(I, rt),
      (this.labels_[o] = Q),
      Q
    );
  }
  replayTextBackground_(t, i, s, l, o, c, h) {
    t.beginPath(),
      t.moveTo.apply(t, i),
      t.lineTo.apply(t, s),
      t.lineTo.apply(t, l),
      t.lineTo.apply(t, o),
      t.lineTo.apply(t, i),
      c &&
        ((this.alignAndScaleFill_ = c[2]), (t.fillStyle = c[1]), this.fill_(t)),
      h && (this.setStrokeStyle_(t, h), t.stroke());
  }
  calculateImageOrLabelDimensions_(
    t,
    i,
    s,
    l,
    o,
    c,
    h,
    d,
    _,
    m,
    y,
    v,
    E,
    x,
    R,
    b,
  ) {
    (h *= v[0]), (d *= v[1]);
    let w = s - h,
      M = l - d;
    const G = o + _ > t ? t - _ : o,
      I = c + m > i ? i - m : c,
      D = x[3] + G * v[0] + x[1],
      j = x[0] + I * v[1] + x[2],
      Q = w - x[3],
      Z = M - x[0];
    (R || y !== 0) &&
      ((as[0] = Q),
      (os[0] = Q),
      (as[1] = Z),
      (Cn[1] = Z),
      (Cn[0] = Q + D),
      (Rn[0] = Cn[0]),
      (Rn[1] = Z + j),
      (os[1] = Rn[1]));
    let F;
    return (
      y !== 0
        ? ((F = zn(Gi(), s, l, 1, 1, y, -s, -l)),
          _e(F, as),
          _e(F, Cn),
          _e(F, Rn),
          _e(F, os),
          In(
            Math.min(as[0], Cn[0], Rn[0], os[0]),
            Math.min(as[1], Cn[1], Rn[1], os[1]),
            Math.max(as[0], Cn[0], Rn[0], os[0]),
            Math.max(as[1], Cn[1], Rn[1], os[1]),
            Wr,
          ))
        : In(
            Math.min(Q, Q + D),
            Math.min(Z, Z + j),
            Math.max(Q, Q + D),
            Math.max(Z, Z + j),
            Wr,
          ),
      E && ((w = Math.round(w)), (M = Math.round(M))),
      {
        drawImageX: w,
        drawImageY: M,
        drawImageW: G,
        drawImageH: I,
        originX: _,
        originY: m,
        declutterBox: {
          minX: Wr[0],
          minY: Wr[1],
          maxX: Wr[2],
          maxY: Wr[3],
          value: b,
        },
        canvasTransform: F,
        scale: v,
      }
    );
  }
  replayImageOrLabel_(t, i, s, l, o, c, h) {
    const d = !!(c || h),
      _ = l.declutterBox,
      m = h ? (h[2] * l.scale[0]) / 2 : 0;
    return (
      _.minX - m <= i[0] &&
        _.maxX + m >= 0 &&
        _.minY - m <= i[1] &&
        _.maxY + m >= 0 &&
        (d && this.replayTextBackground_(t, as, Cn, Rn, os, c, h),
        bx(
          t,
          l.canvasTransform,
          o,
          s,
          l.originX,
          l.originY,
          l.drawImageW,
          l.drawImageH,
          l.drawImageX,
          l.drawImageY,
          l.scale,
        )),
      !0
    );
  }
  fill_(t) {
    const i = this.alignAndScaleFill_;
    if (i) {
      const s = _e(this.renderedTransform_, [0, 0]),
        l = 512 * this.pixelRatio;
      t.save(),
        t.translate(s[0] % l, s[1] % l),
        i !== 1 && t.scale(i, i),
        t.rotate(this.viewRotation_);
    }
    t.fill(), i && t.restore();
  }
  setStrokeStyle_(t, i) {
    (t.strokeStyle = i[1]),
      (t.lineWidth = i[2]),
      (t.lineCap = i[3]),
      (t.lineJoin = i[4]),
      (t.miterLimit = i[5]),
      (t.lineDashOffset = i[7]),
      t.setLineDash(i[6]);
  }
  drawLabelWithPointPlacement_(t, i, s, l) {
    const o = this.textStates[i],
      c = this.createLabel(t, i, l, s),
      h = this.strokeStates[s],
      d = this.pixelRatio,
      _ = Gf(Array.isArray(t) ? t[0] : t, o.textAlign || Ba),
      m = Pu[o.textBaseline || Gu],
      y = h && h.lineWidth ? h.lineWidth : 0,
      v = c.width / d - 2 * o.scale[0],
      E = _ * v + 2 * (0.5 - _) * y,
      x = (m * c.height) / d + 2 * (0.5 - m) * y;
    return { label: c, anchorX: E, anchorY: x };
  }
  execute_(t, i, s, l, o, c, h, d) {
    const _ = this.zIndexContext_;
    let m;
    this.pixelCoordinates_ && Ts(s, this.renderedTransform_)
      ? (m = this.pixelCoordinates_)
      : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []),
        (m = ps(
          this.coordinates,
          0,
          this.coordinates.length,
          2,
          s,
          this.pixelCoordinates_,
        )),
        US(this.renderedTransform_, s));
    let y = 0;
    const v = l.length;
    let E = 0,
      x,
      R,
      b,
      w,
      M,
      G,
      I,
      D,
      j,
      Q,
      Z,
      F,
      q,
      rt = 0,
      it = 0;
    const ot = this.coordinateCache_,
      st = this.viewRotation_,
      nt = Math.round(Math.atan2(-s[1], s[0]) * 1e12) / 1e12,
      Y = {
        context: t,
        pixelRatio: this.pixelRatio,
        resolution: this.resolution,
        rotation: st,
      },
      V = this.instructions != l || this.overlaps ? 0 : 200;
    let W, $, C, X;
    for (; y < v; ) {
      const U = l[y];
      switch (U[0]) {
        case ht.BEGIN_GEOMETRY:
          (W = U[1]),
            (X = U[3]),
            W.getGeometry()
              ? h !== void 0 && !Ze(h, X.getExtent())
                ? (y = U[2] + 1)
                : ++y
              : (y = U[2]),
            _ && (_.zIndex = U[4]);
          break;
        case ht.BEGIN_PATH:
          rt > V && (this.fill_(t), (rt = 0)),
            it > V && (t.stroke(), (it = 0)),
            !rt && !it && (t.beginPath(), (M = NaN), (G = NaN)),
            ++y;
          break;
        case ht.CIRCLE:
          E = U[1];
          const J = m[E],
            lt = m[E + 1],
            ct = m[E + 2],
            Nt = m[E + 3],
            mt = ct - J,
            Ut = Nt - lt,
            vt = Math.sqrt(mt * mt + Ut * Ut);
          t.moveTo(J + vt, lt), t.arc(J, lt, vt, 0, 2 * Math.PI, !0), ++y;
          break;
        case ht.CLOSE_PATH:
          t.closePath(), ++y;
          break;
        case ht.CUSTOM:
          (E = U[1]), (x = U[2]);
          const Le = U[3],
            Xi = U[4],
            qe = U[5];
          (Y.geometry = Le), (Y.feature = W), y in ot || (ot[y] = []);
          const We = ot[y];
          qe
            ? qe(m, E, x, 2, We)
            : ((We[0] = m[E]), (We[1] = m[E + 1]), (We.length = 2)),
            _ && (_.zIndex = U[6]),
            Xi(We, Y),
            ++y;
          break;
        case ht.DRAW_IMAGE:
          (E = U[1]), (x = U[2]), (j = U[3]), (R = U[4]), (b = U[5]);
          let Yi = U[6];
          const ye = U[7],
            Xe = U[8],
            Ri = U[9],
            bi = U[10];
          let Pi = U[11];
          const sn = U[12];
          let wi = U[13];
          w = U[14] || "declutter";
          const rn = U[15];
          if (!j && U.length >= 20) {
            (Q = U[19]), (Z = U[20]), (F = U[21]), (q = U[22]);
            const oe = this.drawLabelWithPointPlacement_(Q, Z, F, q);
            (j = oe.label), (U[3] = j);
            const ln = U[23];
            (R = (oe.anchorX - ln) * this.pixelRatio), (U[4] = R);
            const Ie = U[24];
            (b = (oe.anchorY - Ie) * this.pixelRatio),
              (U[5] = b),
              (Yi = j.height),
              (U[6] = Yi),
              (wi = j.width),
              (U[13] = wi);
          }
          let Pt;
          U.length > 25 && (Pt = U[25]);
          let bl, Cs, Rs;
          U.length > 17
            ? ((bl = U[16]), (Cs = U[17]), (Rs = U[18]))
            : ((bl = er), (Cs = null), (Rs = null)),
            bi && nt ? (Pi += st) : !bi && !nt && (Pi -= st);
          let fr = 0;
          for (; E < x; E += 2) {
            if (Pt && Pt[fr++] < wi / this.pixelRatio) continue;
            const oe = this.calculateImageOrLabelDimensions_(
                j.width,
                j.height,
                m[E],
                m[E + 1],
                wi,
                Yi,
                R,
                b,
                Xe,
                Ri,
                Pi,
                sn,
                o,
                bl,
                !!Cs || !!Rs,
                W,
              ),
              ln = [t, i, j, oe, ye, Cs, Rs];
            if (d) {
              let Ie, Qe, Ce;
              if (rn) {
                const Zt = x - E;
                if (!rn[Zt]) {
                  rn[Zt] = { args: ln, declutterMode: w };
                  continue;
                }
                const ue = rn[Zt];
                (Ie = ue.args),
                  (Qe = ue.declutterMode),
                  delete rn[Zt],
                  (Ce = by(Ie));
              }
              let ze, Ai;
              if (
                (Ie && (Qe !== "declutter" || !d.collides(Ce)) && (ze = !0),
                (w !== "declutter" || !d.collides(oe.declutterBox)) &&
                  (Ai = !0),
                Qe === "declutter" && w === "declutter")
              ) {
                const Zt = ze && Ai;
                (ze = Zt), (Ai = Zt);
              }
              ze &&
                (Qe !== "none" && d.insert(Ce),
                this.replayImageOrLabel_.apply(this, Ie)),
                Ai &&
                  (w !== "none" && d.insert(oe.declutterBox),
                  this.replayImageOrLabel_.apply(this, ln));
            } else this.replayImageOrLabel_.apply(this, ln);
          }
          ++y;
          break;
        case ht.DRAW_CHARS:
          const no = U[1],
            wl = U[2],
            Al = U[3],
            gc = U[4];
          q = U[5];
          const bs = U[6],
            xe = U[7],
            so = U[8];
          F = U[9];
          const ri = U[10];
          (Q = U[11]), (Z = U[12]);
          const Te = [U[13], U[13]];
          w = U[14] || "declutter";
          const _c = U[15],
            Ml = this.textStates[Z],
            ws = Ml.font,
            ki = [Ml.scale[0] * xe, Ml.scale[1] * xe];
          let Bi;
          ws in this.widths_
            ? (Bi = this.widths_[ws])
            : ((Bi = {}), (this.widths_[ws] = Bi));
          const Hi = xp(m, no, wl, 2),
            As = Math.abs(ki[0]) * gy(ws, Q, Bi);
          if (gc || As <= Hi) {
            const oe = this.textStates[Z].textAlign,
              ln = (Hi - As) * Gf(Q, oe),
              Ie = r2(
                m,
                no,
                wl,
                2,
                Q,
                ln,
                bs,
                Math.abs(ki[0]),
                gy,
                ws,
                Bi,
                nt ? 0 : this.viewRotation_,
                _c,
              );
            t: if (Ie) {
              const Qe = [];
              let Ce, ze, Ai, Zt, ue;
              if (F)
                for (Ce = 0, ze = Ie.length; Ce < ze; ++Ce) {
                  (ue = Ie[Ce]),
                    (Ai = ue[4]),
                    (Zt = this.createLabel(Ai, Z, "", F)),
                    (R = ue[2] + (ki[0] < 0 ? -ri : ri)),
                    (b =
                      Al * Zt.height +
                      ((0.5 - Al) * 2 * ri * ki[1]) / ki[0] -
                      so);
                  const li = this.calculateImageOrLabelDimensions_(
                    Zt.width,
                    Zt.height,
                    ue[0],
                    ue[1],
                    Zt.width,
                    Zt.height,
                    R,
                    b,
                    0,
                    0,
                    ue[3],
                    Te,
                    !1,
                    er,
                    !1,
                    W,
                  );
                  if (d && w === "declutter" && d.collides(li.declutterBox))
                    break t;
                  Qe.push([t, i, Zt, li, 1, null, null]);
                }
              if (q)
                for (Ce = 0, ze = Ie.length; Ce < ze; ++Ce) {
                  (ue = Ie[Ce]),
                    (Ai = ue[4]),
                    (Zt = this.createLabel(Ai, Z, q, "")),
                    (R = ue[2]),
                    (b = Al * Zt.height - so);
                  const li = this.calculateImageOrLabelDimensions_(
                    Zt.width,
                    Zt.height,
                    ue[0],
                    ue[1],
                    Zt.width,
                    Zt.height,
                    R,
                    b,
                    0,
                    0,
                    ue[3],
                    Te,
                    !1,
                    er,
                    !1,
                    W,
                  );
                  if (d && w === "declutter" && d.collides(li.declutterBox))
                    break t;
                  Qe.push([t, i, Zt, li, 1, null, null]);
                }
              d && w !== "none" && d.load(Qe.map(by));
              for (let li = 0, ro = Qe.length; li < ro; ++li)
                this.replayImageOrLabel_.apply(this, Qe[li]);
            }
          }
          ++y;
          break;
        case ht.END_GEOMETRY:
          if (c !== void 0) {
            W = U[1];
            const oe = c(W, X, w);
            if (oe) return oe;
          }
          ++y;
          break;
        case ht.FILL:
          V ? rt++ : this.fill_(t), ++y;
          break;
        case ht.MOVE_TO_LINE_TO:
          for (
            E = U[1],
              x = U[2],
              $ = m[E],
              C = m[E + 1],
              t.moveTo($, C),
              M = ($ + 0.5) | 0,
              G = (C + 0.5) | 0,
              E += 2;
            E < x;
            E += 2
          )
            ($ = m[E]),
              (C = m[E + 1]),
              (I = ($ + 0.5) | 0),
              (D = (C + 0.5) | 0),
              (E == x - 2 || I !== M || D !== G) &&
                (t.lineTo($, C), (M = I), (G = D));
          ++y;
          break;
        case ht.SET_FILL_STYLE:
          (this.alignAndScaleFill_ = U[2]),
            rt && (this.fill_(t), (rt = 0), it && (t.stroke(), (it = 0))),
            (t.fillStyle = U[1]),
            ++y;
          break;
        case ht.SET_STROKE_STYLE:
          it && (t.stroke(), (it = 0)), this.setStrokeStyle_(t, U), ++y;
          break;
        case ht.STROKE:
          V ? it++ : t.stroke(), ++y;
          break;
        default:
          ++y;
          break;
      }
    }
    rt && this.fill_(t), it && t.stroke();
  }
  execute(t, i, s, l, o, c) {
    (this.viewRotation_ = l),
      this.execute_(t, i, s, this.instructions, o, void 0, void 0, c);
  }
  executeHitDetection(t, i, s, l, o) {
    return (
      (this.viewRotation_ = s),
      this.execute_(
        t,
        [t.canvas.width, t.canvas.height],
        i,
        this.hitDetectionInstructions,
        !0,
        l,
        o,
      )
    );
  }
}
const al = ["Polygon", "Circle", "LineString", "Image", "Text", "Default"],
  jp = ["Image", "Text"],
  o2 = al.filter((r) => !jp.includes(r));
class u2 {
  constructor(t, i, s, l, o, c, h) {
    (this.maxExtent_ = t),
      (this.overlaps_ = l),
      (this.pixelRatio_ = s),
      (this.resolution_ = i),
      (this.renderBuffer_ = c),
      (this.executorsByZIndex_ = {}),
      (this.hitDetectionContext_ = null),
      (this.hitDetectionTransform_ = Gi()),
      (this.renderedContext_ = null),
      (this.deferredZIndexContexts_ = {}),
      this.createExecutors_(o, h);
  }
  clip(t, i) {
    const s = this.getClipCoords(i);
    t.beginPath(),
      t.moveTo(s[0], s[1]),
      t.lineTo(s[2], s[3]),
      t.lineTo(s[4], s[5]),
      t.lineTo(s[6], s[7]),
      t.clip();
  }
  createExecutors_(t, i) {
    for (const s in t) {
      let l = this.executorsByZIndex_[s];
      l === void 0 && ((l = {}), (this.executorsByZIndex_[s] = l));
      const o = t[s];
      for (const c in o) {
        const h = o[c];
        l[c] = new a2(this.resolution_, this.pixelRatio_, this.overlaps_, h, i);
      }
    }
  }
  hasExecutors(t) {
    for (const i in this.executorsByZIndex_) {
      const s = this.executorsByZIndex_[i];
      for (let l = 0, o = t.length; l < o; ++l) if (t[l] in s) return !0;
    }
    return !1;
  }
  forEachFeatureAtCoordinate(t, i, s, l, o, c) {
    l = Math.round(l);
    const h = l * 2 + 1,
      d = zn(
        this.hitDetectionTransform_,
        l + 0.5,
        l + 0.5,
        1 / i,
        -1 / i,
        -s,
        -t[0],
        -t[1],
      ),
      _ = !this.hitDetectionContext_;
    _ &&
      (this.hitDetectionContext_ = me(h, h, void 0, {
        willReadFrequently: !0,
      }));
    const m = this.hitDetectionContext_;
    m.canvas.width !== h || m.canvas.height !== h
      ? ((m.canvas.width = h), (m.canvas.height = h))
      : _ || m.clearRect(0, 0, h, h);
    let y;
    this.renderBuffer_ !== void 0 &&
      ((y = Ti()), za(y, t), _d(y, i * (this.renderBuffer_ + l), y));
    const v = c2(l);
    let E;
    function x(D, j, Q) {
      const Z = m.getImageData(0, 0, h, h).data;
      for (let F = 0, q = v.length; F < q; F++)
        if (Z[v[F]] > 0) {
          if (
            !c ||
            Q === "none" ||
            (E !== "Image" && E !== "Text") ||
            c.includes(D)
          ) {
            const rt = (v[F] - 3) / 4,
              it = l - (rt % h),
              ot = l - ((rt / h) | 0),
              st = o(D, j, it * it + ot * ot);
            if (st) return st;
          }
          m.clearRect(0, 0, h, h);
          break;
        }
    }
    const R = Object.keys(this.executorsByZIndex_).map(Number);
    R.sort(On);
    let b, w, M, G, I;
    for (b = R.length - 1; b >= 0; --b) {
      const D = R[b].toString();
      for (M = this.executorsByZIndex_[D], w = al.length - 1; w >= 0; --w)
        if (
          ((E = al[w]),
          (G = M[E]),
          G !== void 0 && ((I = G.executeHitDetection(m, d, s, x, y)), I))
        )
          return I;
    }
  }
  getClipCoords(t) {
    const i = this.maxExtent_;
    if (!i) return null;
    const s = i[0],
      l = i[1],
      o = i[2],
      c = i[3],
      h = [s, l, s, c, o, c, o, l];
    return ps(h, 0, 8, 2, t, h), h;
  }
  isEmpty() {
    return rr(this.executorsByZIndex_);
  }
  execute(t, i, s, l, o, c, h) {
    const d = Object.keys(this.executorsByZIndex_).map(Number);
    d.sort(h ? PE : On), (c = c || al);
    const _ = al.length;
    for (let m = 0, y = d.length; m < y; ++m) {
      const v = d[m].toString(),
        E = this.executorsByZIndex_[v];
      for (let x = 0, R = c.length; x < R; ++x) {
        const b = c[x],
          w = E[b];
        if (w !== void 0) {
          const M = h === null ? void 0 : w.getZIndexContext(),
            G = M ? M.getContext() : t,
            I = this.maxExtent_ && b !== "Image" && b !== "Text";
          if (
            (I && (G.save(), this.clip(G, s)),
            !M || b === "Text" || b === "Image"
              ? w.execute(G, i, s, l, o, h)
              : M.pushFunction((D) => w.execute(D, i, s, l, o, h)),
            I && G.restore(),
            M)
          ) {
            M.offset();
            const D = d[m] * _ + x;
            this.deferredZIndexContexts_[D] ||
              (this.deferredZIndexContexts_[D] = []),
              this.deferredZIndexContexts_[D].push(M);
          }
        }
      }
    }
    this.renderedContext_ = t;
  }
  getDeferredZIndexContexts() {
    return this.deferredZIndexContexts_;
  }
  getRenderedContext() {
    return this.renderedContext_;
  }
  renderDeferred() {
    const t = this.deferredZIndexContexts_,
      i = Object.keys(t).map(Number).sort(On);
    for (let s = 0, l = i.length; s < l; ++s)
      t[i[s]].forEach((o) => {
        o.draw(this.renderedContext_), o.clear();
      }),
        (t[i[s]].length = 0);
  }
}
const Ff = {};
function c2(r) {
  if (Ff[r] !== void 0) return Ff[r];
  const t = r * 2 + 1,
    i = r * r,
    s = new Array(i + 1);
  for (let o = 0; o <= r; ++o)
    for (let c = 0; c <= r; ++c) {
      const h = o * o + c * c;
      if (h > i) break;
      let d = s[h];
      d || ((d = []), (s[h] = d)),
        d.push(((r + o) * t + (r + c)) * 4 + 3),
        o > 0 && d.push(((r - o) * t + (r + c)) * 4 + 3),
        c > 0 &&
          (d.push(((r + o) * t + (r - c)) * 4 + 3),
          o > 0 && d.push(((r - o) * t + (r - c)) * 4 + 3));
    }
  const l = [];
  for (let o = 0, c = s.length; o < c; ++o) s[o] && l.push(...s[o]);
  return (Ff[r] = l), l;
}
function Ay(r, t, i, s) {
  return i !== void 0 && s !== void 0
    ? [i / r, s / t]
    : i !== void 0
      ? i / r
      : s !== void 0
        ? s / t
        : 1;
}
class cc extends oc {
  constructor(t) {
    t = t || {};
    const i = t.opacity !== void 0 ? t.opacity : 1,
      s = t.rotation !== void 0 ? t.rotation : 0,
      l = t.scale !== void 0 ? t.scale : 1,
      o = t.rotateWithView !== void 0 ? t.rotateWithView : !1;
    super({
      opacity: i,
      rotation: s,
      scale: l,
      displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
      rotateWithView: o,
      declutterMode: t.declutterMode,
    }),
      (this.anchor_ = t.anchor !== void 0 ? t.anchor : [0.5, 0.5]),
      (this.normalizedAnchor_ = null),
      (this.anchorOrigin_ =
        t.anchorOrigin !== void 0 ? t.anchorOrigin : "top-left"),
      (this.anchorXUnits_ =
        t.anchorXUnits !== void 0 ? t.anchorXUnits : "fraction"),
      (this.anchorYUnits_ =
        t.anchorYUnits !== void 0 ? t.anchorYUnits : "fraction"),
      (this.crossOrigin_ = t.crossOrigin !== void 0 ? t.crossOrigin : null);
    const c = t.img !== void 0 ? t.img : null;
    let h = t.src;
    Lt(
      !(h !== void 0 && c),
      "`image` and `src` cannot be provided at the same time",
    ),
      (h === void 0 || h.length === 0) && c && (h = c.src || zt(c)),
      Lt(
        h !== void 0 && h.length > 0,
        "A defined and non-empty `src` or `image` must be provided",
      ),
      Lt(
        !((t.width !== void 0 || t.height !== void 0) && t.scale !== void 0),
        "`width` or `height` cannot be provided together with `scale`",
      );
    let d;
    if (
      (t.src !== void 0
        ? (d = xt.IDLE)
        : c !== void 0 &&
          ("complete" in c
            ? c.complete
              ? (d = c.src ? xt.LOADED : xt.IDLE)
              : (d = xt.LOADING)
            : (d = xt.LOADED)),
      (this.color_ = t.color !== void 0 ? vl(t.color) : null),
      (this.iconImage_ = Xd(c, h, this.crossOrigin_, d, this.color_)),
      (this.offset_ = t.offset !== void 0 ? t.offset : [0, 0]),
      (this.offsetOrigin_ =
        t.offsetOrigin !== void 0 ? t.offsetOrigin : "top-left"),
      (this.origin_ = null),
      (this.size_ = t.size !== void 0 ? t.size : null),
      this.initialOptions_,
      t.width !== void 0 || t.height !== void 0)
    ) {
      let _, m;
      if (t.size) [_, m] = t.size;
      else {
        const y = this.getImage(1);
        if (y.width && y.height) (_ = y.width), (m = y.height);
        else if (y instanceof HTMLImageElement) {
          this.initialOptions_ = t;
          const v = () => {
            if ((this.unlistenImageChange(v), !this.initialOptions_)) return;
            const E = this.iconImage_.getSize();
            this.setScale(Ay(E[0], E[1], t.width, t.height));
          };
          this.listenImageChange(v);
          return;
        }
      }
      _ !== void 0 && this.setScale(Ay(_, m, t.width, t.height));
    }
  }
  clone() {
    let t, i, s;
    return (
      this.initialOptions_
        ? ((i = this.initialOptions_.width), (s = this.initialOptions_.height))
        : ((t = this.getScale()), (t = Array.isArray(t) ? t.slice() : t)),
      new cc({
        anchor: this.anchor_.slice(),
        anchorOrigin: this.anchorOrigin_,
        anchorXUnits: this.anchorXUnits_,
        anchorYUnits: this.anchorYUnits_,
        color:
          this.color_ && this.color_.slice
            ? this.color_.slice()
            : this.color_ || void 0,
        crossOrigin: this.crossOrigin_,
        offset: this.offset_.slice(),
        offsetOrigin: this.offsetOrigin_,
        opacity: this.getOpacity(),
        rotateWithView: this.getRotateWithView(),
        rotation: this.getRotation(),
        scale: t,
        width: i,
        height: s,
        size: this.size_ !== null ? this.size_.slice() : void 0,
        src: this.getSrc(),
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode(),
      })
    );
  }
  getAnchor() {
    let t = this.normalizedAnchor_;
    if (!t) {
      t = this.anchor_;
      const l = this.getSize();
      if (
        this.anchorXUnits_ == "fraction" ||
        this.anchorYUnits_ == "fraction"
      ) {
        if (!l) return null;
        (t = this.anchor_.slice()),
          this.anchorXUnits_ == "fraction" && (t[0] *= l[0]),
          this.anchorYUnits_ == "fraction" && (t[1] *= l[1]);
      }
      if (this.anchorOrigin_ != "top-left") {
        if (!l) return null;
        t === this.anchor_ && (t = this.anchor_.slice()),
          (this.anchorOrigin_ == "top-right" ||
            this.anchorOrigin_ == "bottom-right") &&
            (t[0] = -t[0] + l[0]),
          (this.anchorOrigin_ == "bottom-left" ||
            this.anchorOrigin_ == "bottom-right") &&
            (t[1] = -t[1] + l[1]);
      }
      this.normalizedAnchor_ = t;
    }
    const i = this.getDisplacement(),
      s = this.getScaleArray();
    return [t[0] - i[0] / s[0], t[1] + i[1] / s[1]];
  }
  setAnchor(t) {
    (this.anchor_ = t), (this.normalizedAnchor_ = null);
  }
  getColor() {
    return this.color_;
  }
  getImage(t) {
    return this.iconImage_.getImage(t);
  }
  getPixelRatio(t) {
    return this.iconImage_.getPixelRatio(t);
  }
  getImageSize() {
    return this.iconImage_.getSize();
  }
  getImageState() {
    return this.iconImage_.getImageState();
  }
  getHitDetectionImage() {
    return this.iconImage_.getHitDetectionImage();
  }
  getOrigin() {
    if (this.origin_) return this.origin_;
    let t = this.offset_;
    if (this.offsetOrigin_ != "top-left") {
      const i = this.getSize(),
        s = this.iconImage_.getSize();
      if (!i || !s) return null;
      (t = t.slice()),
        (this.offsetOrigin_ == "top-right" ||
          this.offsetOrigin_ == "bottom-right") &&
          (t[0] = s[0] - i[0] - t[0]),
        (this.offsetOrigin_ == "bottom-left" ||
          this.offsetOrigin_ == "bottom-right") &&
          (t[1] = s[1] - i[1] - t[1]);
    }
    return (this.origin_ = t), this.origin_;
  }
  getSrc() {
    return this.iconImage_.getSrc();
  }
  getSize() {
    return this.size_ ? this.size_ : this.iconImage_.getSize();
  }
  getWidth() {
    const t = this.getScaleArray();
    if (this.size_) return this.size_[0] * t[0];
    if (this.iconImage_.getImageState() == xt.LOADED)
      return this.iconImage_.getSize()[0] * t[0];
  }
  getHeight() {
    const t = this.getScaleArray();
    if (this.size_) return this.size_[1] * t[1];
    if (this.iconImage_.getImageState() == xt.LOADED)
      return this.iconImage_.getSize()[1] * t[1];
  }
  setScale(t) {
    delete this.initialOptions_, super.setScale(t);
  }
  listenImageChange(t) {
    this.iconImage_.addEventListener(pt.CHANGE, t);
  }
  load() {
    this.iconImage_.load();
  }
  unlistenImageChange(t) {
    this.iconImage_.removeEventListener(pt.CHANGE, t);
  }
  ready() {
    return this.iconImage_.ready();
  }
}
const Qi = 0.5;
function h2(r, t, i, s, l, o, c, h, d) {
  const _ = d ? Lu(l, d) : l,
    m = r[0] * Qi,
    y = r[1] * Qi,
    v = me(m, y);
  v.imageSmoothingEnabled = !1;
  const E = v.canvas,
    x = new Ax(v, Qi, l, null, c, h, d ? Qa(Du(), d) : null),
    R = i.length,
    b = Math.floor((256 * 256 * 256 - 1) / R),
    w = {};
  for (let G = 1; G <= R; ++G) {
    const I = i[G - 1],
      D = I.getStyleFunction() || s;
    if (!D) continue;
    let j = D(I, o);
    if (!j) continue;
    Array.isArray(j) || (j = [j]);
    const Z = (G * b).toString(16).padStart(7, "#00000");
    for (let F = 0, q = j.length; F < q; ++F) {
      const rt = j[F],
        it = rt.getGeometryFunction()(I);
      if (!it || !Ze(_, it.getExtent())) continue;
      const ot = rt.clone(),
        st = ot.getFill();
      st && st.setColor(Z);
      const nt = ot.getStroke();
      nt && (nt.setColor(Z), nt.setLineDash(null)), ot.setText(void 0);
      const Y = rt.getImage();
      if (Y) {
        const C = Y.getImageSize();
        if (!C) continue;
        const X = me(C[0], C[1], void 0, { alpha: !1 }),
          U = X.canvas;
        (X.fillStyle = Z),
          X.fillRect(0, 0, U.width, U.height),
          ot.setImage(
            new cc({
              img: U,
              anchor: Y.getAnchor(),
              anchorXUnits: "pixels",
              anchorYUnits: "pixels",
              offset: Y.getOrigin(),
              opacity: 1,
              size: Y.getSize(),
              scale: Y.getScale(),
              rotation: Y.getRotation(),
              rotateWithView: Y.getRotateWithView(),
            }),
          );
      }
      const V = ot.getZIndex() || 0;
      let W = w[V];
      W ||
        ((W = {}),
        (w[V] = W),
        (W.Polygon = []),
        (W.Circle = []),
        (W.LineString = []),
        (W.Point = []));
      const $ = it.getType();
      if ($ === "GeometryCollection") {
        const C = it.getGeometriesArrayRecursive();
        for (let X = 0, U = C.length; X < U; ++X) {
          const tt = C[X];
          W[tt.getType().replace("Multi", "")].push(tt, ot);
        }
      } else W[$.replace("Multi", "")].push(it, ot);
    }
  }
  const M = Object.keys(w).map(Number).sort(On);
  for (let G = 0, I = M.length; G < I; ++G) {
    const D = w[M[G]];
    for (const j in D) {
      const Q = D[j];
      for (let Z = 0, F = Q.length; Z < F; Z += 2) {
        x.setStyle(Q[Z + 1]);
        for (let q = 0, rt = t.length; q < rt; ++q)
          x.setTransform(t[q]), x.drawGeometry(Q[Z]);
      }
    }
  }
  return v.getImageData(0, 0, E.width, E.height);
}
function f2(r, t, i) {
  const s = [];
  if (i) {
    const l = Math.floor(Math.round(r[0]) * Qi),
      o = Math.floor(Math.round(r[1]) * Qi),
      c = (se(l, 0, i.width - 1) + se(o, 0, i.height - 1) * i.width) * 4,
      h = i.data[c],
      d = i.data[c + 1],
      m = i.data[c + 2] + 256 * (d + 256 * h),
      y = Math.floor((256 * 256 * 256 - 1) / t.length);
    m && m % y === 0 && s.push(t[m / y - 1]);
  }
  return s;
}
class Zp extends Gn {
  constructor(t, i, s, l) {
    super(t),
      (this.inversePixelTransform = i),
      (this.frameState = s),
      (this.context = l);
  }
}
const d2 = 5;
class g2 extends Va {
  constructor(t) {
    super(),
      (this.ready = !0),
      (this.boundHandleImageChange_ = this.handleImageChange_.bind(this)),
      (this.layer_ = t),
      (this.staleKeys_ = new Array()),
      (this.maxStaleKeys = d2);
  }
  getStaleKeys() {
    return this.staleKeys_;
  }
  prependStaleKey(t) {
    this.staleKeys_.unshift(t),
      this.staleKeys_.length > this.maxStaleKeys &&
        (this.staleKeys_.length = this.maxStaleKeys);
  }
  getFeatures(t) {
    return _t();
  }
  getData(t) {
    return null;
  }
  prepareFrame(t) {
    return _t();
  }
  renderFrame(t, i) {
    return _t();
  }
  forEachFeatureAtCoordinate(t, i, s, l, o) {}
  getLayer() {
    return this.layer_;
  }
  handleFontsChanged() {}
  handleImageChange_(t) {
    const i = t.target;
    (i.getState() === xt.LOADED || i.getState() === xt.ERROR) &&
      this.renderIfReadyAndVisible();
  }
  loadImage(t) {
    let i = t.getState();
    return (
      i != xt.LOADED &&
        i != xt.ERROR &&
        t.addEventListener(pt.CHANGE, this.boundHandleImageChange_),
      i == xt.IDLE && (t.load(), (i = t.getState())),
      i == xt.LOADED
    );
  }
  renderIfReadyAndVisible() {
    const t = this.getLayer();
    t && t.getVisible() && t.getSourceState() === "ready" && t.changed();
  }
  renderDeferred(t) {}
  disposeInternal() {
    delete this.layer_, super.disposeInternal();
  }
}
const My = [];
let nl = null;
function _2() {
  nl = me(1, 1, void 0, { willReadFrequently: !0 });
}
class Kp extends g2 {
  constructor(t) {
    super(t),
      (this.container = null),
      this.renderedResolution,
      (this.tempTransform = Gi()),
      (this.pixelTransform = Gi()),
      (this.inversePixelTransform = Gi()),
      (this.context = null),
      (this.deferredContext_ = null),
      (this.containerReused = !1),
      (this.frameState = null);
  }
  getImageData(t, i, s) {
    nl || _2(), nl.clearRect(0, 0, 1, 1);
    let l;
    try {
      nl.drawImage(t, i, s, 1, 1, 0, 0, 1, 1),
        (l = nl.getImageData(0, 0, 1, 1).data);
    } catch {
      return (nl = null), null;
    }
    return l;
  }
  getBackground(t) {
    let s = this.getLayer().getBackground();
    return (
      typeof s == "function" && (s = s(t.viewState.resolution)), s || void 0
    );
  }
  useContainer(t, i, s) {
    const l = this.getLayer().getClassName();
    let o, c;
    if (
      t &&
      t.className === l &&
      (!s ||
        (t &&
          t.style.backgroundColor &&
          Ts(vl(t.style.backgroundColor), vl(s))))
    ) {
      const h = t.firstElementChild;
      h instanceof HTMLCanvasElement && (c = h.getContext("2d"));
    }
    if (
      (c && c.canvas.style.transform === i
        ? ((this.container = t),
          (this.context = c),
          (this.containerReused = !0))
        : this.containerReused
          ? ((this.container = null),
            (this.context = null),
            (this.containerReused = !1))
          : this.container && (this.container.style.backgroundColor = null),
      !this.container)
    ) {
      (o = document.createElement("div")), (o.className = l);
      let h = o.style;
      (h.position = "absolute"),
        (h.width = "100%"),
        (h.height = "100%"),
        (c = me());
      const d = c.canvas;
      o.appendChild(d),
        (h = d.style),
        (h.position = "absolute"),
        (h.left = "0"),
        (h.transformOrigin = "top left"),
        (this.container = o),
        (this.context = c);
    }
    !this.containerReused &&
      s &&
      !this.container.style.backgroundColor &&
      (this.container.style.backgroundColor = s);
  }
  clipUnrotated(t, i, s) {
    const l = or(s),
      o = Ju(s),
      c = Qu(s),
      h = Wu(s);
    _e(i.coordinateToPixelTransform, l),
      _e(i.coordinateToPixelTransform, o),
      _e(i.coordinateToPixelTransform, c),
      _e(i.coordinateToPixelTransform, h);
    const d = this.inversePixelTransform;
    _e(d, l),
      _e(d, o),
      _e(d, c),
      _e(d, h),
      t.save(),
      t.beginPath(),
      t.moveTo(Math.round(l[0]), Math.round(l[1])),
      t.lineTo(Math.round(o[0]), Math.round(o[1])),
      t.lineTo(Math.round(c[0]), Math.round(c[1])),
      t.lineTo(Math.round(h[0]), Math.round(h[1])),
      t.clip();
  }
  prepareContainer(t, i) {
    const s = t.extent,
      l = t.viewState.resolution,
      o = t.viewState.rotation,
      c = t.pixelRatio,
      h = Math.round((Ft(s) / l) * c),
      d = Math.round((Ue(s) / l) * c);
    zn(
      this.pixelTransform,
      t.size[0] / 2,
      t.size[1] / 2,
      1 / c,
      1 / c,
      o,
      -h / 2,
      -d / 2,
    ),
      cp(this.inversePixelTransform, this.pixelTransform);
    const _ = YS(this.pixelTransform);
    if (
      (this.useContainer(i, _, this.getBackground(t)), !this.containerReused)
    ) {
      const m = this.context.canvas;
      m.width != h || m.height != d
        ? ((m.width = h), (m.height = d))
        : this.context.clearRect(0, 0, h, d),
        _ !== m.style.transform && (m.style.transform = _);
    }
  }
  dispatchRenderEvent_(t, i, s) {
    const l = this.getLayer();
    if (l.hasListener(t)) {
      const o = new Zp(t, this.inversePixelTransform, s, i);
      l.dispatchEvent(o);
    }
  }
  preRender(t, i) {
    (this.frameState = i),
      !i.declutter && this.dispatchRenderEvent_(Ei.PRERENDER, t, i);
  }
  postRender(t, i) {
    i.declutter || this.dispatchRenderEvent_(Ei.POSTRENDER, t, i);
  }
  renderDeferredInternal(t) {}
  getRenderContext(t) {
    return (
      t.declutter &&
        !this.deferredContext_ &&
        (this.deferredContext_ = new Hp()),
      t.declutter ? this.deferredContext_.getContext() : this.context
    );
  }
  renderDeferred(t) {
    t.declutter &&
      (this.dispatchRenderEvent_(Ei.PRERENDER, this.context, t),
      t.declutter &&
        this.deferredContext_ &&
        (this.deferredContext_.draw(this.context),
        this.deferredContext_.clear()),
      this.renderDeferredInternal(t),
      this.dispatchRenderEvent_(Ei.POSTRENDER, this.context, t));
  }
  getRenderTransform(t, i, s, l, o, c, h) {
    const d = o / 2,
      _ = c / 2,
      m = l / i,
      y = -m,
      v = -t[0] + h,
      E = -t[1];
    return zn(this.tempTransform, d, _, m, y, -s, v, E);
  }
  disposeInternal() {
    delete this.frameState, super.disposeInternal();
  }
}
class m2 extends Kp {
  constructor(t) {
    super(t),
      (this.boundHandleStyleImageChange_ =
        this.handleStyleImageChange_.bind(this)),
      this.animatingOrInteracting_,
      (this.hitDetectionImageData_ = null),
      (this.clipped_ = !1),
      (this.renderedFeatures_ = null),
      (this.renderedRevision_ = -1),
      (this.renderedResolution_ = NaN),
      (this.renderedExtent_ = Ti()),
      (this.wrappedRenderedExtent_ = Ti()),
      this.renderedRotation_,
      (this.renderedCenter_ = null),
      (this.renderedProjection_ = null),
      (this.renderedPixelRatio_ = 1),
      (this.renderedRenderOrder_ = null),
      this.renderedFrameDeclutter_,
      (this.replayGroup_ = null),
      (this.replayGroupChanged = !0),
      (this.clipping = !0),
      (this.targetContext_ = null),
      (this.opacity_ = 1);
  }
  renderWorlds(t, i, s) {
    const l = i.extent,
      o = i.viewState,
      c = o.center,
      h = o.resolution,
      d = o.projection,
      _ = o.rotation,
      m = d.getExtent(),
      y = this.getLayer().getSource(),
      v = this.getLayer().getDeclutter(),
      E = i.pixelRatio,
      x = i.viewHints,
      R = !(x[Oe.ANIMATING] || x[Oe.INTERACTING]),
      b = this.context,
      w = Math.round((Ft(l) / h) * E),
      M = Math.round((Ue(l) / h) * E),
      G = y.getWrapX() && d.canWrapX(),
      I = G ? Ft(m) : null,
      D = G ? Math.ceil((l[2] - m[2]) / I) + 1 : 1;
    let j = G ? Math.floor((l[0] - m[0]) / I) : 0;
    do {
      let Q = this.getRenderTransform(c, h, 0, E, w, M, j * I);
      i.declutter && (Q = Q.slice(0)),
        t.execute(
          b,
          [b.canvas.width, b.canvas.height],
          Q,
          _,
          R,
          s === void 0 ? al : s ? jp : o2,
          s ? v && i.declutter[v] : void 0,
        );
    } while (++j < D);
  }
  setDrawContext_() {
    this.opacity_ !== 1 &&
      ((this.targetContext_ = this.context),
      (this.context = me(
        this.context.canvas.width,
        this.context.canvas.height,
        My,
      )));
  }
  resetDrawContext_() {
    if (this.opacity_ !== 1) {
      const t = this.targetContext_.globalAlpha;
      (this.targetContext_.globalAlpha = this.opacity_),
        this.targetContext_.drawImage(this.context.canvas, 0, 0),
        (this.targetContext_.globalAlpha = t),
        rc(this.context),
        My.push(this.context.canvas),
        (this.context = this.targetContext_),
        (this.targetContext_ = null);
    }
  }
  renderDeclutter(t) {
    !this.replayGroup_ ||
      !this.getLayer().getDeclutter() ||
      this.renderWorlds(this.replayGroup_, t, !0);
  }
  renderDeferredInternal(t) {
    this.replayGroup_ &&
      (this.replayGroup_.renderDeferred(),
      this.clipped_ && this.context.restore(),
      this.resetDrawContext_());
  }
  renderFrame(t, i) {
    const s = t.layerStatesArray[t.layerIndex];
    this.opacity_ = s.opacity;
    const l = t.viewState;
    this.prepareContainer(t, i);
    const o = this.context,
      c = this.replayGroup_;
    let h = c && !c.isEmpty();
    if (
      !h &&
      !(
        this.getLayer().hasListener(Ei.PRERENDER) ||
        this.getLayer().hasListener(Ei.POSTRENDER)
      )
    )
      return null;
    this.setDrawContext_(), this.preRender(o, t);
    const d = l.projection;
    if (((this.clipped_ = !1), h && s.extent && this.clipping)) {
      const _ = gs(s.extent, d);
      (h = Ze(_, t.extent)),
        (this.clipped_ = h && !rl(_, t.extent)),
        this.clipped_ && this.clipUnrotated(o, t, _);
    }
    return (
      h &&
        this.renderWorlds(c, t, this.getLayer().getDeclutter() ? !1 : void 0),
      !t.declutter && this.clipped_ && o.restore(),
      this.postRender(o, t),
      this.renderedRotation_ !== l.rotation &&
        ((this.renderedRotation_ = l.rotation),
        (this.hitDetectionImageData_ = null)),
      t.declutter || this.resetDrawContext_(),
      this.container
    );
  }
  getFeatures(t) {
    return new Promise((i) => {
      if (
        this.frameState &&
        !this.hitDetectionImageData_ &&
        !this.animatingOrInteracting_
      ) {
        const s = this.frameState.size.slice(),
          l = this.renderedCenter_,
          o = this.renderedResolution_,
          c = this.renderedRotation_,
          h = this.renderedProjection_,
          d = this.wrappedRenderedExtent_,
          _ = this.getLayer(),
          m = [],
          y = s[0] * Qi,
          v = s[1] * Qi;
        m.push(this.getRenderTransform(l, o, c, Qi, y, v, 0).slice());
        const E = _.getSource(),
          x = h.getExtent();
        if (E.getWrapX() && h.canWrapX() && !rl(x, d)) {
          let b = d[0];
          const w = Ft(x);
          let M = 0,
            G;
          for (; b < x[0]; )
            --M,
              (G = w * M),
              m.push(this.getRenderTransform(l, o, c, Qi, y, v, G).slice()),
              (b += w);
          for (M = 0, b = d[2]; b > x[2]; )
            ++M,
              (G = w * M),
              m.push(this.getRenderTransform(l, o, c, Qi, y, v, G).slice()),
              (b -= w);
        }
        const R = Du();
        this.hitDetectionImageData_ = h2(
          s,
          m,
          this.renderedFeatures_,
          _.getStyleFunction(),
          d,
          o,
          c,
          _y(o, this.renderedPixelRatio_),
          R ? h : null,
        );
      }
      i(f2(t, this.renderedFeatures_, this.hitDetectionImageData_));
    });
  }
  forEachFeatureAtCoordinate(t, i, s, l, o) {
    var v, E;
    if (!this.replayGroup_) return;
    const c = i.viewState.resolution,
      h = i.viewState.rotation,
      d = this.getLayer(),
      _ = {},
      m = function (x, R, b) {
        const w = zt(x),
          M = _[w];
        if (M) {
          if (M !== !0 && b < M.distanceSq) {
            if (b === 0)
              return (_[w] = !0), o.splice(o.lastIndexOf(M), 1), l(x, d, R);
            (M.geometry = R), (M.distanceSq = b);
          }
        } else {
          if (b === 0) return (_[w] = !0), l(x, d, R);
          o.push(
            (_[w] = {
              feature: x,
              layer: d,
              geometry: R,
              distanceSq: b,
              callback: l,
            }),
          );
        }
      },
      y = this.getLayer().getDeclutter();
    return this.replayGroup_.forEachFeatureAtCoordinate(
      t,
      c,
      h,
      s,
      m,
      y
        ? (E = (v = i.declutter) == null ? void 0 : v[y]) == null
          ? void 0
          : E.all().map((x) => x.value)
        : null,
    );
  }
  handleFontsChanged() {
    const t = this.getLayer();
    t.getVisible() && this.replayGroup_ && t.changed();
  }
  handleStyleImageChange_(t) {
    this.renderIfReadyAndVisible();
  }
  prepareFrame(t) {
    const i = this.getLayer(),
      s = i.getSource();
    if (!s) return !1;
    const l = t.viewHints[Oe.ANIMATING],
      o = t.viewHints[Oe.INTERACTING],
      c = i.getUpdateWhileAnimating(),
      h = i.getUpdateWhileInteracting();
    if ((this.ready && !c && l) || (!h && o))
      return (this.animatingOrInteracting_ = !0), !0;
    this.animatingOrInteracting_ = !1;
    const d = t.extent,
      _ = t.viewState,
      m = _.projection,
      y = _.resolution,
      v = t.pixelRatio,
      E = i.getRevision(),
      x = i.getRenderBuffer();
    let R = i.getRenderOrder();
    R === void 0 && (R = Ox);
    const b = _.center.slice(),
      w = _d(d, x * y),
      M = w.slice(),
      G = [w.slice()],
      I = m.getExtent();
    if (s.getWrapX() && m.canWrapX() && !rl(I, t.extent)) {
      const nt = Ft(I),
        Y = Math.max(Ft(w) / 2, nt);
      (w[0] = I[0] - Y), (w[2] = I[2] + Y), np(b, m);
      const V = tp(G[0], m);
      V[0] < I[0] && V[2] < I[2]
        ? G.push([V[0] + nt, V[1], V[2] + nt, V[3]])
        : V[0] > I[0] &&
          V[2] > I[2] &&
          G.push([V[0] - nt, V[1], V[2] - nt, V[3]]);
    }
    if (
      this.ready &&
      this.renderedResolution_ == y &&
      this.renderedRevision_ == E &&
      this.renderedRenderOrder_ == R &&
      this.renderedFrameDeclutter_ === !!t.declutter &&
      rl(this.wrappedRenderedExtent_, w)
    )
      return (
        Ts(this.renderedExtent_, M) ||
          ((this.hitDetectionImageData_ = null), (this.renderedExtent_ = M)),
        (this.renderedCenter_ = b),
        (this.replayGroupChanged = !1),
        !0
      );
    this.replayGroup_ = null;
    const D = new s2(Fp(y, v), w, y, v),
      j = Du();
    let Q;
    if (j) {
      for (let nt = 0, Y = G.length; nt < Y; ++nt) {
        const V = G[nt],
          W = Lu(V, m);
        s.loadFeatures(W, GS(y, m), j);
      }
      Q = Qa(j, m);
    } else
      for (let nt = 0, Y = G.length; nt < Y; ++nt) s.loadFeatures(G[nt], y, m);
    const Z = _y(y, v);
    let F = !0;
    const q = (nt, Y) => {
        let V;
        const W = nt.getStyleFunction() || i.getStyleFunction();
        if ((W && (V = W(nt, y)), V)) {
          const $ = this.renderFeature(
            nt,
            Z,
            V,
            D,
            Q,
            this.getLayer().getDeclutter(),
            Y,
          );
          F = F && !$;
        }
      },
      rt = Lu(w, m),
      it = s.getFeaturesInExtent(rt);
    R && it.sort(R);
    for (let nt = 0, Y = it.length; nt < Y; ++nt) q(it[nt], nt);
    (this.renderedFeatures_ = it), (this.ready = F);
    const ot = D.finish(),
      st = new u2(
        w,
        y,
        v,
        s.getOverlaps(),
        ot,
        i.getRenderBuffer(),
        !!t.declutter,
      );
    return (
      (this.renderedResolution_ = y),
      (this.renderedRevision_ = E),
      (this.renderedRenderOrder_ = R),
      (this.renderedFrameDeclutter_ = !!t.declutter),
      (this.renderedExtent_ = M),
      (this.wrappedRenderedExtent_ = w),
      (this.renderedCenter_ = b),
      (this.renderedProjection_ = m),
      (this.renderedPixelRatio_ = v),
      (this.replayGroup_ = st),
      (this.hitDetectionImageData_ = null),
      (this.replayGroupChanged = !0),
      !0
    );
  }
  renderFeature(t, i, s, l, o, c, h) {
    if (!s) return !1;
    let d = !1;
    if (Array.isArray(s))
      for (let _ = 0, m = s.length; _ < m; ++_)
        d = my(l, t, s[_], i, this.boundHandleStyleImageChange_, o, c, h) || d;
    else d = my(l, t, s, i, this.boundHandleStyleImageChange_, o, c, h);
    return d;
  }
}
let hr = 0;
const Fe = 1 << hr++,
  wt = 1 << hr++,
  je = 1 << hr++,
  Ni = 1 << hr++,
  lr = 1 << hr++,
  Oa = 1 << hr++,
  xu = Math.pow(2, hr) - 1,
  Bd = {
    [Fe]: "boolean",
    [wt]: "number",
    [je]: "string",
    [Ni]: "color",
    [lr]: "number[]",
    [Oa]: "size",
  },
  y2 = Object.keys(Bd).map(Number).sort(On);
function p2(r) {
  return r in Bd;
}
function Da(r) {
  const t = [];
  for (const i of y2) La(r, i) && t.push(Bd[i]);
  return t.length === 0
    ? "untyped"
    : t.length < 3
      ? t.join(" or ")
      : t.slice(0, -1).join(", ") + ", or " + t[t.length - 1];
}
function La(r, t) {
  return (r & t) === t;
}
function us(r, t) {
  return r === t;
}
class ae {
  constructor(t, i) {
    if (!p2(t))
      throw new Error(
        `literal expressions must have a specific type, got ${Da(t)}`,
      );
    (this.type = t), (this.value = i);
  }
}
class v2 {
  constructor(t, i, ...s) {
    (this.type = t), (this.operator = i), (this.args = s);
  }
}
function Vp() {
  return {
    variables: new Set(),
    properties: new Set(),
    featureId: !1,
    geometryType: !1,
    mapState: !1,
  };
}
function Se(r, t, i) {
  switch (typeof r) {
    case "boolean": {
      if (us(t, je)) return new ae(je, r ? "true" : "false");
      if (!La(t, Fe)) throw new Error(`got a boolean, but expected ${Da(t)}`);
      return new ae(Fe, r);
    }
    case "number": {
      if (us(t, Oa)) return new ae(Oa, Ve(r));
      if (us(t, Fe)) return new ae(Fe, !!r);
      if (us(t, je)) return new ae(je, r.toString());
      if (!La(t, wt)) throw new Error(`got a number, but expected ${Da(t)}`);
      return new ae(wt, r);
    }
    case "string": {
      if (us(t, Ni)) return new ae(Ni, Fd(r));
      if (us(t, Fe)) return new ae(Fe, !!r);
      if (!La(t, je)) throw new Error(`got a string, but expected ${Da(t)}`);
      return new ae(je, r);
    }
  }
  if (!Array.isArray(r))
    throw new Error("expression must be an array or a primitive value");
  if (r.length === 0) throw new Error("empty expression");
  if (typeof r[0] == "string") return O2(r, t, i);
  for (const s of r)
    if (typeof s != "number") throw new Error("expected an array of numbers");
  if (us(t, Oa)) {
    if (r.length !== 2)
      throw new Error(
        `expected an array of two values for a size, got ${r.length}`,
      );
    return new ae(Oa, r);
  }
  if (us(t, Ni)) {
    if (r.length === 3) return new ae(Ni, [...r, 1]);
    if (r.length === 4) return new ae(Ni, r);
    throw new Error(
      `expected an array of 3 or 4 values for a color, got ${r.length}`,
    );
  }
  if (!La(t, lr))
    throw new Error(`got an array of numbers, but expected ${Da(t)}`);
  return new ae(lr, r);
}
const B = {
    Get: "get",
    Var: "var",
    Concat: "concat",
    GeometryType: "geometry-type",
    LineMetric: "line-metric",
    Any: "any",
    All: "all",
    Not: "!",
    Resolution: "resolution",
    Zoom: "zoom",
    Time: "time",
    Equal: "==",
    NotEqual: "!=",
    GreaterThan: ">",
    GreaterThanOrEqualTo: ">=",
    LessThan: "<",
    LessThanOrEqualTo: "<=",
    Multiply: "*",
    Divide: "/",
    Add: "+",
    Subtract: "-",
    Clamp: "clamp",
    Mod: "%",
    Pow: "^",
    Abs: "abs",
    Floor: "floor",
    Ceil: "ceil",
    Round: "round",
    Sin: "sin",
    Cos: "cos",
    Atan: "atan",
    Sqrt: "sqrt",
    Match: "match",
    Between: "between",
    Interpolate: "interpolate",
    Coalesce: "coalesce",
    Case: "case",
    In: "in",
    Number: "number",
    String: "string",
    Array: "array",
    Color: "color",
    Id: "id",
    Band: "band",
    Palette: "palette",
    ToString: "to-string",
    Has: "has",
  },
  E2 = {
    [B.Get]: gt(St(1, 1 / 0), Oy),
    [B.Var]: gt(St(1, 1), S2),
    [B.Has]: gt(St(1, 1 / 0), Oy),
    [B.Id]: gt(x2, Qr),
    [B.Concat]: gt(St(2, 1 / 0), It(je)),
    [B.GeometryType]: gt(T2, Qr),
    [B.LineMetric]: gt(Qr),
    [B.Resolution]: gt(Uf, Qr),
    [B.Zoom]: gt(Uf, Qr),
    [B.Time]: gt(Uf, Qr),
    [B.Any]: gt(St(2, 1 / 0), It(Fe)),
    [B.All]: gt(St(2, 1 / 0), It(Fe)),
    [B.Not]: gt(St(1, 1), It(Fe)),
    [B.Equal]: gt(St(2, 2), It(xu)),
    [B.NotEqual]: gt(St(2, 2), It(xu)),
    [B.GreaterThan]: gt(St(2, 2), It(wt)),
    [B.GreaterThanOrEqualTo]: gt(St(2, 2), It(wt)),
    [B.LessThan]: gt(St(2, 2), It(wt)),
    [B.LessThanOrEqualTo]: gt(St(2, 2), It(wt)),
    [B.Multiply]: gt(St(2, 1 / 0), Dy),
    [B.Coalesce]: gt(St(2, 1 / 0), Dy),
    [B.Divide]: gt(St(2, 2), It(wt)),
    [B.Add]: gt(St(2, 1 / 0), It(wt)),
    [B.Subtract]: gt(St(2, 2), It(wt)),
    [B.Clamp]: gt(St(3, 3), It(wt)),
    [B.Mod]: gt(St(2, 2), It(wt)),
    [B.Pow]: gt(St(2, 2), It(wt)),
    [B.Abs]: gt(St(1, 1), It(wt)),
    [B.Floor]: gt(St(1, 1), It(wt)),
    [B.Ceil]: gt(St(1, 1), It(wt)),
    [B.Round]: gt(St(1, 1), It(wt)),
    [B.Sin]: gt(St(1, 1), It(wt)),
    [B.Cos]: gt(St(1, 1), It(wt)),
    [B.Atan]: gt(St(1, 2), It(wt)),
    [B.Sqrt]: gt(St(1, 1), It(wt)),
    [B.Match]: gt(St(4, 1 / 0), Ly, R2),
    [B.Between]: gt(St(3, 3), It(wt)),
    [B.Interpolate]: gt(St(6, 1 / 0), Ly, b2),
    [B.Case]: gt(St(3, 1 / 0), C2, w2),
    [B.In]: gt(St(2, 2), A2),
    [B.Number]: gt(St(1, 1 / 0), It(xu)),
    [B.String]: gt(St(1, 1 / 0), It(xu)),
    [B.Array]: gt(St(1, 1 / 0), It(wt)),
    [B.Color]: gt(St(1, 4), It(wt)),
    [B.Band]: gt(St(1, 3), It(wt)),
    [B.Palette]: gt(St(2, 2), M2),
    [B.ToString]: gt(St(1, 1), It(Fe | wt | je | Ni)),
  };
function Oy(r, t, i) {
  const s = r.length - 1,
    l = new Array(s);
  for (let o = 0; o < s; ++o) {
    const c = r[o + 1];
    switch (typeof c) {
      case "number": {
        l[o] = new ae(wt, c);
        break;
      }
      case "string": {
        l[o] = new ae(je, c);
        break;
      }
      default:
        throw new Error(
          `expected a string key or numeric array index for a get operation, got ${c}`,
        );
    }
    o === 0 && i.properties.add(String(c));
  }
  return l;
}
function S2(r, t, i) {
  const s = r[1];
  if (typeof s != "string")
    throw new Error("expected a string argument for var operation");
  return i.variables.add(s), [new ae(je, s)];
}
function x2(r, t, i) {
  i.featureId = !0;
}
function T2(r, t, i) {
  i.geometryType = !0;
}
function Uf(r, t, i) {
  i.mapState = !0;
}
function Qr(r, t, i) {
  const s = r[0];
  if (r.length !== 1)
    throw new Error(`expected no arguments for ${s} operation`);
  return [];
}
function St(r, t) {
  return function (i, s, l) {
    const o = i[0],
      c = i.length - 1;
    if (r === t) {
      if (c !== r) {
        const h = r === 1 ? "" : "s";
        throw new Error(`expected ${r} argument${h} for ${o}, got ${c}`);
      }
    } else if (c < r || c > t) {
      const h = t === 1 / 0 ? `${r} or more` : `${r} to ${t}`;
      throw new Error(`expected ${h} arguments for ${o}, got ${c}`);
    }
  };
}
function Dy(r, t, i) {
  const s = r.length - 1,
    l = new Array(s);
  for (let o = 0; o < s; ++o) {
    const c = Se(r[o + 1], t, i);
    l[o] = c;
  }
  return l;
}
function It(r) {
  return function (t, i, s) {
    const l = t.length - 1,
      o = new Array(l);
    for (let c = 0; c < l; ++c) {
      const h = Se(t[c + 1], r, s);
      o[c] = h;
    }
    return o;
  };
}
function C2(r, t, i) {
  const s = r[0],
    l = r.length - 1;
  if (l % 2 === 0)
    throw new Error(
      `expected an odd number of arguments for ${s}, got ${l} instead`,
    );
}
function Ly(r, t, i) {
  const s = r[0],
    l = r.length - 1;
  if (l % 2 === 1)
    throw new Error(
      `expected an even number of arguments for operation ${s}, got ${l} instead`,
    );
}
function R2(r, t, i) {
  const s = r.length - 1,
    l = je | wt | Fe,
    o = Se(r[1], l, i),
    c = Se(r[r.length - 1], t, i),
    h = new Array(s - 2);
  for (let d = 0; d < s - 2; d += 2) {
    try {
      const _ = Se(r[d + 2], o.type, i);
      h[d] = _;
    } catch (_) {
      throw new Error(
        `failed to parse argument ${d + 1} of match expression: ${_.message}`,
      );
    }
    try {
      const _ = Se(r[d + 3], c.type, i);
      h[d + 1] = _;
    } catch (_) {
      throw new Error(
        `failed to parse argument ${d + 2} of match expression: ${_.message}`,
      );
    }
  }
  return [o, ...h, c];
}
function b2(r, t, i) {
  const s = r[1];
  let l;
  switch (s[0]) {
    case "linear":
      l = 1;
      break;
    case "exponential":
      const d = s[1];
      if (typeof d != "number" || d <= 0)
        throw new Error(
          `expected a number base for exponential interpolation, got ${JSON.stringify(d)} instead`,
        );
      l = d;
      break;
    default:
      throw new Error(`invalid interpolation type: ${JSON.stringify(s)}`);
  }
  const o = new ae(wt, l);
  let c;
  try {
    c = Se(r[2], wt, i);
  } catch (d) {
    throw new Error(
      `failed to parse argument 1 in interpolate expression: ${d.message}`,
    );
  }
  const h = new Array(r.length - 3);
  for (let d = 0; d < h.length; d += 2) {
    try {
      const _ = Se(r[d + 3], wt, i);
      h[d] = _;
    } catch (_) {
      throw new Error(
        `failed to parse argument ${d + 2} for interpolate expression: ${_.message}`,
      );
    }
    try {
      const _ = Se(r[d + 4], t, i);
      h[d + 1] = _;
    } catch (_) {
      throw new Error(
        `failed to parse argument ${d + 3} for interpolate expression: ${_.message}`,
      );
    }
  }
  return [o, c, ...h];
}
function w2(r, t, i) {
  const s = Se(r[r.length - 1], t, i),
    l = new Array(r.length - 1);
  for (let o = 0; o < l.length - 1; o += 2) {
    try {
      const c = Se(r[o + 1], Fe, i);
      l[o] = c;
    } catch (c) {
      throw new Error(
        `failed to parse argument ${o} of case expression: ${c.message}`,
      );
    }
    try {
      const c = Se(r[o + 2], s.type, i);
      l[o + 1] = c;
    } catch (c) {
      throw new Error(
        `failed to parse argument ${o + 1} of case expression: ${c.message}`,
      );
    }
  }
  return (l[l.length - 1] = s), l;
}
function A2(r, t, i) {
  let s = r[2];
  if (!Array.isArray(s))
    throw new Error(
      'the second argument for the "in" operator must be an array',
    );
  let l;
  if (typeof s[0] == "string") {
    if (s[0] !== "literal")
      throw new Error(
        'for the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions',
      );
    if (!Array.isArray(s[1]))
      throw new Error(
        'failed to parse "in" expression: the literal operator must be followed by an array',
      );
    (s = s[1]), (l = je);
  } else l = wt;
  const o = new Array(s.length);
  for (let h = 0; h < o.length; h++)
    try {
      const d = Se(s[h], l, i);
      o[h] = d;
    } catch (d) {
      throw new Error(
        `failed to parse haystack item ${h} for "in" expression: ${d.message}`,
      );
    }
  return [Se(r[1], l, i), ...o];
}
function M2(r, t, i) {
  let s;
  try {
    s = Se(r[1], wt, i);
  } catch (c) {
    throw new Error(
      `failed to parse first argument in palette expression: ${c.message}`,
    );
  }
  const l = r[2];
  if (!Array.isArray(l))
    throw new Error("the second argument of palette must be an array");
  const o = new Array(l.length);
  for (let c = 0; c < o.length; c++) {
    let h;
    try {
      h = Se(l[c], Ni, i);
    } catch (d) {
      throw new Error(
        `failed to parse color at index ${c} in palette expression: ${d.message}`,
      );
    }
    if (!(h instanceof ae))
      throw new Error(
        `the palette color at index ${c} must be a literal value`,
      );
    o[c] = h;
  }
  return [s, ...o];
}
function gt(...r) {
  return function (t, i, s) {
    const l = t[0];
    let o;
    for (let c = 0; c < r.length; c++) {
      const h = r[c](t, i, s);
      if (c == r.length - 1) {
        if (!h)
          throw new Error(
            "expected last argument validator to return the parsed args",
          );
        o = h;
      }
    }
    return new v2(i, l, ...o);
  };
}
function O2(r, t, i) {
  const s = r[0],
    l = E2[s];
  if (!l) throw new Error(`unknown operator: ${s}`);
  return l(r, t, i);
}
function qp(r) {
  if (!r) return "";
  const t = r.getType();
  switch (t) {
    case "Point":
    case "LineString":
    case "Polygon":
      return t;
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
      return t.substring(5);
    case "Circle":
      return "Polygon";
    case "GeometryCollection":
      return qp(r.getGeometries()[0]);
    default:
      return "";
  }
}
function Wp() {
  return {
    variables: {},
    properties: {},
    resolution: NaN,
    featureId: null,
    geometryType: "",
  };
}
function Fn(r, t, i) {
  const s = Se(r, t, i);
  return Fi(s);
}
function Fi(r, t) {
  if (r instanceof ae) {
    if (r.type === Ni && typeof r.value == "string") {
      const s = Fd(r.value);
      return function () {
        return s;
      };
    }
    return function () {
      return r.value;
    };
  }
  const i = r.operator;
  switch (i) {
    case B.Number:
    case B.String:
    case B.Coalesce:
      return D2(r);
    case B.Get:
    case B.Var:
    case B.Has:
      return L2(r);
    case B.Id:
      return (s) => s.featureId;
    case B.GeometryType:
      return (s) => s.geometryType;
    case B.Concat: {
      const s = r.args.map((l) => Fi(l));
      return (l) => "".concat(...s.map((o) => o(l).toString()));
    }
    case B.Resolution:
      return (s) => s.resolution;
    case B.Any:
    case B.All:
    case B.Between:
    case B.In:
    case B.Not:
      return z2(r);
    case B.Equal:
    case B.NotEqual:
    case B.LessThan:
    case B.LessThanOrEqualTo:
    case B.GreaterThan:
    case B.GreaterThanOrEqualTo:
      return I2(r);
    case B.Multiply:
    case B.Divide:
    case B.Add:
    case B.Subtract:
    case B.Clamp:
    case B.Mod:
    case B.Pow:
    case B.Abs:
    case B.Floor:
    case B.Ceil:
    case B.Round:
    case B.Sin:
    case B.Cos:
    case B.Atan:
    case B.Sqrt:
      return N2(r);
    case B.Case:
      return G2(r);
    case B.Match:
      return F2(r);
    case B.Interpolate:
      return U2(r);
    case B.ToString:
      return X2(r);
    default:
      throw new Error(`Unsupported operator ${i}`);
  }
}
function D2(r, t) {
  const i = r.operator,
    s = r.args.length,
    l = new Array(s);
  for (let o = 0; o < s; ++o) l[o] = Fi(r.args[o]);
  switch (i) {
    case B.Coalesce:
      return (o) => {
        for (let c = 0; c < s; ++c) {
          const h = l[c](o);
          if (typeof h < "u" && h !== null) return h;
        }
        throw new Error("Expected one of the values to be non-null");
      };
    case B.Number:
    case B.String:
      return (o) => {
        for (let c = 0; c < s; ++c) {
          const h = l[c](o);
          if (typeof h === i) return h;
        }
        throw new Error(`Expected one of the values to be a ${i}`);
      };
    default:
      throw new Error(`Unsupported assertion operator ${i}`);
  }
}
function L2(r, t) {
  const s = r.args[0].value;
  switch (r.operator) {
    case B.Get:
      return (l) => {
        const o = r.args;
        let c = l.properties[s];
        for (let h = 1, d = o.length; h < d; ++h) {
          const m = o[h].value;
          c = c[m];
        }
        return c;
      };
    case B.Var:
      return (l) => l.variables[s];
    case B.Has:
      return (l) => {
        const o = r.args;
        if (!(s in l.properties)) return !1;
        let c = l.properties[s];
        for (let h = 1, d = o.length; h < d; ++h) {
          const m = o[h].value;
          if (!c || !Object.hasOwn(c, m)) return !1;
          c = c[m];
        }
        return !0;
      };
    default:
      throw new Error(`Unsupported accessor operator ${r.operator}`);
  }
}
function I2(r, t) {
  const i = r.operator,
    s = Fi(r.args[0]),
    l = Fi(r.args[1]);
  switch (i) {
    case B.Equal:
      return (o) => s(o) === l(o);
    case B.NotEqual:
      return (o) => s(o) !== l(o);
    case B.LessThan:
      return (o) => s(o) < l(o);
    case B.LessThanOrEqualTo:
      return (o) => s(o) <= l(o);
    case B.GreaterThan:
      return (o) => s(o) > l(o);
    case B.GreaterThanOrEqualTo:
      return (o) => s(o) >= l(o);
    default:
      throw new Error(`Unsupported comparison operator ${i}`);
  }
}
function z2(r, t) {
  const i = r.operator,
    s = r.args.length,
    l = new Array(s);
  for (let o = 0; o < s; ++o) l[o] = Fi(r.args[o]);
  switch (i) {
    case B.Any:
      return (o) => {
        for (let c = 0; c < s; ++c) if (l[c](o)) return !0;
        return !1;
      };
    case B.All:
      return (o) => {
        for (let c = 0; c < s; ++c) if (!l[c](o)) return !1;
        return !0;
      };
    case B.Between:
      return (o) => {
        const c = l[0](o),
          h = l[1](o),
          d = l[2](o);
        return c >= h && c <= d;
      };
    case B.In:
      return (o) => {
        const c = l[0](o);
        for (let h = 1; h < s; ++h) if (c === l[h](o)) return !0;
        return !1;
      };
    case B.Not:
      return (o) => !l[0](o);
    default:
      throw new Error(`Unsupported logical operator ${i}`);
  }
}
function N2(r, t) {
  const i = r.operator,
    s = r.args.length,
    l = new Array(s);
  for (let o = 0; o < s; ++o) l[o] = Fi(r.args[o]);
  switch (i) {
    case B.Multiply:
      return (o) => {
        let c = 1;
        for (let h = 0; h < s; ++h) c *= l[h](o);
        return c;
      };
    case B.Divide:
      return (o) => l[0](o) / l[1](o);
    case B.Add:
      return (o) => {
        let c = 0;
        for (let h = 0; h < s; ++h) c += l[h](o);
        return c;
      };
    case B.Subtract:
      return (o) => l[0](o) - l[1](o);
    case B.Clamp:
      return (o) => {
        const c = l[0](o),
          h = l[1](o);
        if (c < h) return h;
        const d = l[2](o);
        return c > d ? d : c;
      };
    case B.Mod:
      return (o) => l[0](o) % l[1](o);
    case B.Pow:
      return (o) => Math.pow(l[0](o), l[1](o));
    case B.Abs:
      return (o) => Math.abs(l[0](o));
    case B.Floor:
      return (o) => Math.floor(l[0](o));
    case B.Ceil:
      return (o) => Math.ceil(l[0](o));
    case B.Round:
      return (o) => Math.round(l[0](o));
    case B.Sin:
      return (o) => Math.sin(l[0](o));
    case B.Cos:
      return (o) => Math.cos(l[0](o));
    case B.Atan:
      return s === 2
        ? (o) => Math.atan2(l[0](o), l[1](o))
        : (o) => Math.atan(l[0](o));
    case B.Sqrt:
      return (o) => Math.sqrt(l[0](o));
    default:
      throw new Error(`Unsupported numeric operator ${i}`);
  }
}
function G2(r, t) {
  const i = r.args.length,
    s = new Array(i);
  for (let l = 0; l < i; ++l) s[l] = Fi(r.args[l]);
  return (l) => {
    for (let o = 0; o < i - 1; o += 2) if (s[o](l)) return s[o + 1](l);
    return s[i - 1](l);
  };
}
function F2(r, t) {
  const i = r.args.length,
    s = new Array(i);
  for (let l = 0; l < i; ++l) s[l] = Fi(r.args[l]);
  return (l) => {
    const o = s[0](l);
    for (let c = 1; c < i; c += 2) if (o === s[c](l)) return s[c + 1](l);
    return s[i - 1](l);
  };
}
function U2(r, t) {
  const i = r.args.length,
    s = new Array(i);
  for (let l = 0; l < i; ++l) s[l] = Fi(r.args[l]);
  return (l) => {
    const o = s[0](l),
      c = s[1](l);
    let h, d;
    for (let _ = 2; _ < i; _ += 2) {
      const m = s[_](l);
      let y = s[_ + 1](l);
      const v = Array.isArray(y);
      if ((v && (y = hx(y)), m >= c))
        return _ === 2 ? y : v ? Y2(o, c, h, d, m, y) : Ia(o, c, h, d, m, y);
      (h = m), (d = y);
    }
    return d;
  };
}
function X2(r, t) {
  const i = r.operator,
    s = r.args.length,
    l = new Array(s);
  for (let o = 0; o < s; ++o) l[o] = Fi(r.args[o]);
  switch (i) {
    case B.ToString:
      return (o) => {
        const c = l[0](o);
        return r.args[0].type === Ni ? Ud(c) : c.toString();
      };
    default:
      throw new Error(`Unsupported convert operator ${i}`);
  }
}
function Ia(r, t, i, s, l, o) {
  const c = l - i;
  if (c === 0) return s;
  const h = t - i,
    d = r === 1 ? h / c : (Math.pow(r, h) - 1) / (Math.pow(r, c) - 1);
  return s + d * (o - s);
}
function Y2(r, t, i, s, l, o) {
  if (l - i === 0) return s;
  const h = cy(s),
    d = cy(o);
  let _ = d[2] - h[2];
  _ > 180 ? (_ -= 360) : _ < -180 && (_ += 360);
  const m = [
    Ia(r, t, i, h[0], l, d[0]),
    Ia(r, t, i, h[1], l, d[1]),
    h[2] + Ia(r, t, i, 0, l, _),
    Ia(r, t, i, s[3], l, o[3]),
  ];
  return Mp(fx(m));
}
function P2(r) {
  return !0;
}
function k2(r) {
  const t = Vp(),
    i = B2(r, t),
    s = Wp();
  return function (l, o) {
    if (
      ((s.properties = l.getPropertiesInternal()),
      (s.resolution = o),
      t.featureId)
    ) {
      const c = l.getId();
      c !== void 0 ? (s.featureId = c) : (s.featureId = null);
    }
    return t.geometryType && (s.geometryType = qp(l.getGeometry())), i(s);
  };
}
function Iy(r) {
  const t = Vp(),
    i = r.length,
    s = new Array(i);
  for (let c = 0; c < i; ++c) s[c] = ad(r[c], t);
  const l = Wp(),
    o = new Array(i);
  return function (c, h) {
    if (
      ((l.properties = c.getPropertiesInternal()),
      (l.resolution = h),
      t.featureId)
    ) {
      const _ = c.getId();
      _ !== void 0 ? (l.featureId = _) : (l.featureId = null);
    }
    let d = 0;
    for (let _ = 0; _ < i; ++_) {
      const m = s[_](l);
      m && ((o[d] = m), (d += 1));
    }
    return (o.length = d), o;
  };
}
function B2(r, t) {
  const i = r.length,
    s = new Array(i);
  for (let l = 0; l < i; ++l) {
    const o = r[l],
      c = "filter" in o ? Fn(o.filter, Fe, t) : P2;
    let h;
    if (Array.isArray(o.style)) {
      const d = o.style.length;
      h = new Array(d);
      for (let _ = 0; _ < d; ++_) h[_] = ad(o.style[_], t);
    } else h = [ad(o.style, t)];
    s[l] = { filter: c, styles: h };
  }
  return function (l) {
    const o = [];
    let c = !1;
    for (let h = 0; h < i; ++h) {
      const d = s[h].filter;
      if (d(l) && !(r[h].else && c)) {
        c = !0;
        for (const _ of s[h].styles) {
          const m = _(l);
          m && o.push(m);
        }
      }
    }
    return o;
  };
}
function ad(r, t) {
  const i = ja(r, "", t),
    s = Za(r, "", t),
    l = H2(r, t),
    o = j2(r, t),
    c = Ke(r, "z-index", t);
  if (!i && !s && !l && !o && !rr(r))
    throw new Error(
      "No fill, stroke, point, or text symbolizer properties in style: " +
        JSON.stringify(r),
    );
  const h = new nn();
  return function (d) {
    let _ = !0;
    if (i) {
      const m = i(d);
      m && (_ = !1), h.setFill(m);
    }
    if (s) {
      const m = s(d);
      m && (_ = !1), h.setStroke(m);
    }
    if (l) {
      const m = l(d);
      m && (_ = !1), h.setText(m);
    }
    if (o) {
      const m = o(d);
      m && (_ = !1), h.setImage(m);
    }
    return c && h.setZIndex(c(d)), _ ? null : h;
  };
}
function ja(r, t, i) {
  let s;
  if (t + "fill-pattern-src" in r) s = q2(r, t + "fill-", i);
  else {
    if (r[t + "fill-color"] === "none") return (o) => null;
    s = Hd(r, t + "fill-color", i);
  }
  if (!s) return null;
  const l = new Nn();
  return function (o) {
    const c = s(o);
    return c === Gd ? null : (l.setColor(c), l);
  };
}
function Za(r, t, i) {
  const s = Ke(r, t + "stroke-width", i),
    l = Hd(r, t + "stroke-color", i);
  if (!s && !l) return null;
  const o = Mn(r, t + "stroke-line-cap", i),
    c = Mn(r, t + "stroke-line-join", i),
    h = Qp(r, t + "stroke-line-dash", i),
    d = Ke(r, t + "stroke-line-dash-offset", i),
    _ = Ke(r, t + "stroke-miter-limit", i),
    m = new xs();
  return function (y) {
    if (l) {
      const v = l(y);
      if (v === Gd) return null;
      m.setColor(v);
    }
    if ((s && m.setWidth(s(y)), o)) {
      const v = o(y);
      if (v !== "butt" && v !== "round" && v !== "square")
        throw new Error("Expected butt, round, or square line cap");
      m.setLineCap(v);
    }
    if (c) {
      const v = c(y);
      if (v !== "bevel" && v !== "round" && v !== "miter")
        throw new Error("Expected bevel, round, or miter line join");
      m.setLineJoin(v);
    }
    return (
      h && m.setLineDash(h(y)),
      d && m.setLineDashOffset(d(y)),
      _ && m.setMiterLimit(_(y)),
      m
    );
  };
}
function H2(r, t) {
  const i = "text-",
    s = Mn(r, i + "value", t);
  if (!s) return null;
  const l = ja(r, i, t),
    o = ja(r, i + "background-", t),
    c = Za(r, i, t),
    h = Za(r, i + "background-", t),
    d = Mn(r, i + "font", t),
    _ = Ke(r, i + "max-angle", t),
    m = Ke(r, i + "offset-x", t),
    y = Ke(r, i + "offset-y", t),
    v = cl(r, i + "overflow", t),
    E = Mn(r, i + "placement", t),
    x = Ke(r, i + "repeat", t),
    R = hc(r, i + "scale", t),
    b = cl(r, i + "rotate-with-view", t),
    w = Ke(r, i + "rotation", t),
    M = Mn(r, i + "align", t),
    G = Mn(r, i + "justify", t),
    I = Mn(r, i + "baseline", t),
    D = cl(r, i + "keep-upright", t),
    j = Qp(r, i + "padding", t),
    Q = fc(r, i + "declutter-mode"),
    Z = new kd({ declutterMode: Q });
  return function (F) {
    if (
      (Z.setText(s(F)),
      l && Z.setFill(l(F)),
      o && Z.setBackgroundFill(o(F)),
      c && Z.setStroke(c(F)),
      h && Z.setBackgroundStroke(h(F)),
      d && Z.setFont(d(F)),
      _ && Z.setMaxAngle(_(F)),
      m && Z.setOffsetX(m(F)),
      y && Z.setOffsetY(y(F)),
      v && Z.setOverflow(v(F)),
      E)
    ) {
      const q = E(F);
      if (q !== "point" && q !== "line")
        throw new Error("Expected point or line for text-placement");
      Z.setPlacement(q);
    }
    if (
      (x && Z.setRepeat(x(F)),
      R && Z.setScale(R(F)),
      b && Z.setRotateWithView(b(F)),
      w && Z.setRotation(w(F)),
      M)
    ) {
      const q = M(F);
      if (
        q !== "left" &&
        q !== "center" &&
        q !== "right" &&
        q !== "end" &&
        q !== "start"
      )
        throw new Error(
          "Expected left, right, center, start, or end for text-align",
        );
      Z.setTextAlign(q);
    }
    if (G) {
      const q = G(F);
      if (q !== "left" && q !== "right" && q !== "center")
        throw new Error("Expected left, right, or center for text-justify");
      Z.setJustify(q);
    }
    if (I) {
      const q = I(F);
      if (
        q !== "bottom" &&
        q !== "top" &&
        q !== "middle" &&
        q !== "alphabetic" &&
        q !== "hanging"
      )
        throw new Error(
          "Expected bottom, top, middle, alphabetic, or hanging for text-baseline",
        );
      Z.setTextBaseline(q);
    }
    return j && Z.setPadding(j(F)), D && Z.setKeepUpright(D(F)), Z;
  };
}
function j2(r, t) {
  return "icon-src" in r
    ? Z2(r, t)
    : "shape-points" in r
      ? K2(r, t)
      : "circle-radius" in r
        ? V2(r, t)
        : null;
}
function Z2(r, t) {
  const i = "icon-",
    s = i + "src",
    l = Jp(r[s], s),
    o = ku(r, i + "anchor", t),
    c = hc(r, i + "scale", t),
    h = Ke(r, i + "opacity", t),
    d = ku(r, i + "displacement", t),
    _ = Ke(r, i + "rotation", t),
    m = cl(r, i + "rotate-with-view", t),
    y = Ny(r, i + "anchor-origin"),
    v = Gy(r, i + "anchor-x-units"),
    E = Gy(r, i + "anchor-y-units"),
    x = $2(r, i + "color"),
    R = Q2(r, i + "cross-origin"),
    b = J2(r, i + "offset"),
    w = Ny(r, i + "offset-origin"),
    M = Bu(r, i + "width"),
    G = Bu(r, i + "height"),
    I = W2(r, i + "size"),
    D = fc(r, i + "declutter-mode"),
    j = new cc({
      src: l,
      anchorOrigin: y,
      anchorXUnits: v,
      anchorYUnits: E,
      color: x,
      crossOrigin: R,
      offset: b,
      offsetOrigin: w,
      height: G,
      width: M,
      size: I,
      declutterMode: D,
    });
  return function (Q) {
    return (
      h && j.setOpacity(h(Q)),
      d && j.setDisplacement(d(Q)),
      _ && j.setRotation(_(Q)),
      m && j.setRotateWithView(m(Q)),
      c && j.setScale(c(Q)),
      o && j.setAnchor(o(Q)),
      j
    );
  };
}
function K2(r, t) {
  const i = "shape-",
    s = i + "points",
    l = i + "radius",
    o = od(r[s], s),
    c = od(r[l], l),
    h = ja(r, i, t),
    d = Za(r, i, t),
    _ = hc(r, i + "scale", t),
    m = ku(r, i + "displacement", t),
    y = Ke(r, i + "rotation", t),
    v = cl(r, i + "rotate-with-view", t),
    E = Bu(r, i + "radius2"),
    x = Bu(r, i + "angle"),
    R = fc(r, i + "declutter-mode"),
    b = new uc({
      points: o,
      radius: c,
      radius2: E,
      angle: x,
      declutterMode: R,
    });
  return function (w) {
    return (
      h && b.setFill(h(w)),
      d && b.setStroke(d(w)),
      m && b.setDisplacement(m(w)),
      y && b.setRotation(y(w)),
      v && b.setRotateWithView(v(w)),
      _ && b.setScale(_(w)),
      b
    );
  };
}
function V2(r, t) {
  const i = "circle-",
    s = ja(r, i, t),
    l = Za(r, i, t),
    o = Ke(r, i + "radius", t),
    c = hc(r, i + "scale", t),
    h = ku(r, i + "displacement", t),
    d = Ke(r, i + "rotation", t),
    _ = cl(r, i + "rotate-with-view", t),
    m = fc(r, i + "declutter-mode"),
    y = new Tl({ radius: 5, declutterMode: m });
  return function (v) {
    return (
      o && y.setRadius(o(v)),
      s && y.setFill(s(v)),
      l && y.setStroke(l(v)),
      h && y.setDisplacement(h(v)),
      d && y.setRotation(d(v)),
      _ && y.setRotateWithView(_(v)),
      c && y.setScale(c(v)),
      y
    );
  };
}
function Ke(r, t, i) {
  if (!(t in r)) return;
  const s = Fn(r[t], wt, i);
  return function (l) {
    return od(s(l), t);
  };
}
function Mn(r, t, i) {
  if (!(t in r)) return null;
  const s = Fn(r[t], je, i);
  return function (l) {
    return Jp(s(l), t);
  };
}
function q2(r, t, i) {
  const s = Mn(r, t + "pattern-src", i),
    l = zy(r, t + "pattern-offset", i),
    o = zy(r, t + "pattern-size", i),
    c = Hd(r, t + "color", i);
  return function (h) {
    return { src: s(h), offset: l && l(h), size: o && o(h), color: c && c(h) };
  };
}
function cl(r, t, i) {
  if (!(t in r)) return null;
  const s = Fn(r[t], Fe, i);
  return function (l) {
    const o = s(l);
    if (typeof o != "boolean") throw new Error(`Expected a boolean for ${t}`);
    return o;
  };
}
function Hd(r, t, i) {
  if (!(t in r)) return null;
  const s = Fn(r[t], Ni, i);
  return function (l) {
    return $p(s(l), t);
  };
}
function Qp(r, t, i) {
  if (!(t in r)) return null;
  const s = Fn(r[t], lr, i);
  return function (l) {
    return to(s(l), t);
  };
}
function ku(r, t, i) {
  if (!(t in r)) return null;
  const s = Fn(r[t], lr, i);
  return function (l) {
    const o = to(s(l), t);
    if (o.length !== 2) throw new Error(`Expected two numbers for ${t}`);
    return o;
  };
}
function zy(r, t, i) {
  if (!(t in r)) return null;
  const s = Fn(r[t], lr, i);
  return function (l) {
    return t1(s(l), t);
  };
}
function hc(r, t, i) {
  if (!(t in r)) return null;
  const s = Fn(r[t], lr | wt, i);
  return function (l) {
    return tT(s(l), t);
  };
}
function Bu(r, t) {
  const i = r[t];
  if (i !== void 0) {
    if (typeof i != "number") throw new Error(`Expected a number for ${t}`);
    return i;
  }
}
function W2(r, t) {
  const i = r[t];
  if (i !== void 0) {
    if (typeof i == "number") return Ve(i);
    if (!Array.isArray(i))
      throw new Error(`Expected a number or size array for ${t}`);
    if (i.length !== 2 || typeof i[0] != "number" || typeof i[1] != "number")
      throw new Error(`Expected a number or size array for ${t}`);
    return i;
  }
}
function Q2(r, t) {
  const i = r[t];
  if (i !== void 0) {
    if (typeof i != "string") throw new Error(`Expected a string for ${t}`);
    return i;
  }
}
function Ny(r, t) {
  const i = r[t];
  if (i !== void 0) {
    if (
      i !== "bottom-left" &&
      i !== "bottom-right" &&
      i !== "top-left" &&
      i !== "top-right"
    )
      throw new Error(
        `Expected bottom-left, bottom-right, top-left, or top-right for ${t}`,
      );
    return i;
  }
}
function Gy(r, t) {
  const i = r[t];
  if (i !== void 0) {
    if (i !== "pixels" && i !== "fraction")
      throw new Error(`Expected pixels or fraction for ${t}`);
    return i;
  }
}
function J2(r, t) {
  const i = r[t];
  if (i !== void 0) return to(i, t);
}
function fc(r, t) {
  const i = r[t];
  if (i !== void 0) {
    if (typeof i != "string") throw new Error(`Expected a string for ${t}`);
    if (i !== "declutter" && i !== "obstacle" && i !== "none")
      throw new Error(`Expected declutter, obstacle, or none for ${t}`);
    return i;
  }
}
function $2(r, t) {
  const i = r[t];
  if (i !== void 0) return $p(i, t);
}
function to(r, t) {
  if (!Array.isArray(r)) throw new Error(`Expected an array for ${t}`);
  const i = r.length;
  for (let s = 0; s < i; ++s)
    if (typeof r[s] != "number")
      throw new Error(`Expected an array of numbers for ${t}`);
  return r;
}
function Jp(r, t) {
  if (typeof r != "string") throw new Error(`Expected a string for ${t}`);
  return r;
}
function od(r, t) {
  if (typeof r != "number") throw new Error(`Expected a number for ${t}`);
  return r;
}
function $p(r, t) {
  if (typeof r == "string") return r;
  const i = to(r, t),
    s = i.length;
  if (s < 3 || s > 4)
    throw new Error(`Expected a color with 3 or 4 values for ${t}`);
  return i;
}
function t1(r, t) {
  const i = to(r, t);
  if (i.length !== 2)
    throw new Error(`Expected an array of two numbers for ${t}`);
  return i;
}
function tT(r, t) {
  return typeof r == "number" ? r : t1(r, t);
}
const Ii = { CENTER: "center", RESOLUTION: "resolution", ROTATION: "rotation" };
function Fy(r, t, i) {
  return function (s, l, o, c, h) {
    if (!s) return;
    if (!l && !t) return s;
    const d = t ? 0 : o[0] * l,
      _ = t ? 0 : o[1] * l,
      m = h ? h[0] : 0,
      y = h ? h[1] : 0;
    let v = r[0] + d / 2 + m,
      E = r[2] - d / 2 + m,
      x = r[1] + _ / 2 + y,
      R = r[3] - _ / 2 + y;
    v > E && ((v = (E + v) / 2), (E = v)),
      x > R && ((x = (R + x) / 2), (R = x));
    let b = se(s[0], v, E),
      w = se(s[1], x, R);
    if (c && i && l) {
      const M = 30 * l;
      (b +=
        -M * Math.log(1 + Math.max(0, v - s[0]) / M) +
        M * Math.log(1 + Math.max(0, s[0] - E) / M)),
        (w +=
          -M * Math.log(1 + Math.max(0, x - s[1]) / M) +
          M * Math.log(1 + Math.max(0, s[1] - R) / M));
    }
    return [b, w];
  };
}
function eT(r) {
  return r;
}
function e1(r) {
  return Math.pow(r, 3);
}
function Cl(r) {
  return 1 - e1(1 - r);
}
function iT(r) {
  return 3 * r * r - 2 * r * r * r;
}
function nT(r) {
  return r;
}
function jd(r, t, i, s) {
  const l = Ft(t) / i[0],
    o = Ue(t) / i[1];
  return s ? Math.min(r, Math.max(l, o)) : Math.min(r, Math.min(l, o));
}
function Zd(r, t, i) {
  let s = Math.min(r, t);
  const l = 50;
  return (
    (s *= Math.log(1 + l * Math.max(0, r / t - 1)) / l + 1),
    i &&
      ((s = Math.max(s, i)),
      (s /= Math.log(1 + l * Math.max(0, i / r - 1)) / l + 1)),
    se(s, i / 2, t * 2)
  );
}
function sT(r, t, i, s) {
  return (
    (t = t !== void 0 ? t : !0),
    function (l, o, c, h) {
      if (l !== void 0) {
        const d = r[0],
          _ = r[r.length - 1],
          m = i ? jd(d, i, c, s) : d;
        if (h) return t ? Zd(l, m, _) : se(l, _, m);
        const y = Math.min(m, l),
          v = Math.floor(gd(r, y, o));
        return r[v] > m && v < r.length - 1 ? r[v + 1] : r[v];
      }
    }
  );
}
function rT(r, t, i, s, l, o) {
  return (
    (s = s !== void 0 ? s : !0),
    (i = i !== void 0 ? i : 0),
    function (c, h, d, _) {
      if (c !== void 0) {
        const m = l ? jd(t, l, d, o) : t;
        if (_) return s ? Zd(c, m, i) : se(c, i, m);
        const y = 1e-9,
          v = Math.ceil(Math.log(t / m) / Math.log(r) - y),
          E = -h * (0.5 - y) + 0.5,
          x = Math.min(m, c),
          R = Math.floor(Math.log(t / x) / Math.log(r) + E),
          b = Math.max(v, R),
          w = t / Math.pow(r, b);
        return se(w, i, m);
      }
    }
  );
}
function Uy(r, t, i, s, l) {
  return (
    (i = i !== void 0 ? i : !0),
    function (o, c, h, d) {
      if (o !== void 0) {
        const _ = s ? jd(r, s, h, l) : r;
        return !i || !d ? se(o, t, _) : Zd(o, _, t);
      }
    }
  );
}
function Kd(r) {
  if (r !== void 0) return 0;
}
function Xy(r) {
  if (r !== void 0) return r;
}
function lT(r) {
  const t = (2 * Math.PI) / r;
  return function (i, s) {
    if (s) return i;
    if (i !== void 0) return (i = Math.floor(i / t + 0.5) * t), i;
  };
}
function aT(r) {
  const t = ys(5);
  return function (i, s) {
    return s || i === void 0 ? i : Math.abs(i) <= t ? 0 : i;
  };
}
const oT = 42,
  Vd = 256,
  Xf = 0;
class Ji extends Ui {
  constructor(t) {
    super(),
      this.on,
      this.once,
      this.un,
      (t = Object.assign({}, t)),
      (this.hints_ = [0, 0]),
      (this.animations_ = []),
      this.updateAnimationKey_,
      (this.projection_ = Rd(t.projection, "EPSG:3857")),
      (this.viewportSize_ = [100, 100]),
      (this.targetCenter_ = null),
      this.targetResolution_,
      this.targetRotation_,
      (this.nextCenter_ = null),
      this.nextResolution_,
      this.nextRotation_,
      (this.cancelAnchor_ = void 0),
      t.projection && OS(),
      t.center && (t.center = bn(t.center, this.projection_)),
      t.extent && (t.extent = gs(t.extent, this.projection_)),
      this.applyOptions_(t);
  }
  applyOptions_(t) {
    const i = Object.assign({}, t);
    for (const h in Ii) delete i[h];
    this.setProperties(i, !0);
    const s = cT(t);
    (this.maxResolution_ = s.maxResolution),
      (this.minResolution_ = s.minResolution),
      (this.zoomFactor_ = s.zoomFactor),
      (this.resolutions_ = t.resolutions),
      (this.padding_ = t.padding),
      (this.minZoom_ = s.minZoom);
    const l = uT(t),
      o = s.constraint,
      c = hT(t);
    (this.constraints_ = { center: l, resolution: o, rotation: c }),
      this.setRotation(t.rotation !== void 0 ? t.rotation : 0),
      this.setCenterInternal(t.center !== void 0 ? t.center : null),
      t.resolution !== void 0
        ? this.setResolution(t.resolution)
        : t.zoom !== void 0 && this.setZoom(t.zoom);
  }
  get padding() {
    return this.padding_;
  }
  set padding(t) {
    let i = this.padding_;
    this.padding_ = t;
    const s = this.getCenterInternal();
    if (s) {
      const l = t || [0, 0, 0, 0];
      i = i || [0, 0, 0, 0];
      const o = this.getResolution(),
        c = (o / 2) * (l[3] - i[3] + i[1] - l[1]),
        h = (o / 2) * (l[0] - i[0] + i[2] - l[2]);
      this.setCenterInternal([s[0] + c, s[1] - h]);
    }
  }
  getUpdatedOptions_(t) {
    const i = this.getProperties();
    return (
      i.resolution !== void 0
        ? (i.resolution = this.getResolution())
        : (i.zoom = this.getZoom()),
      (i.center = this.getCenterInternal()),
      (i.rotation = this.getRotation()),
      Object.assign({}, i, t)
    );
  }
  animate(t) {
    this.isDef() && !this.getAnimating() && this.resolveConstraints(0);
    const i = new Array(arguments.length);
    for (let s = 0; s < i.length; ++s) {
      let l = arguments[s];
      l.center &&
        ((l = Object.assign({}, l)),
        (l.center = bn(l.center, this.getProjection()))),
        l.anchor &&
          ((l = Object.assign({}, l)),
          (l.anchor = bn(l.anchor, this.getProjection()))),
        (i[s] = l);
    }
    this.animateInternal.apply(this, i);
  }
  animateInternal(t) {
    let i = arguments.length,
      s;
    i > 1 &&
      typeof arguments[i - 1] == "function" &&
      ((s = arguments[i - 1]), --i);
    let l = 0;
    for (; l < i && !this.isDef(); ++l) {
      const m = arguments[l];
      m.center && this.setCenterInternal(m.center),
        m.zoom !== void 0
          ? this.setZoom(m.zoom)
          : m.resolution && this.setResolution(m.resolution),
        m.rotation !== void 0 && this.setRotation(m.rotation);
    }
    if (l === i) {
      s && Tu(s, !0);
      return;
    }
    let o = Date.now(),
      c = this.targetCenter_.slice(),
      h = this.targetResolution_,
      d = this.targetRotation_;
    const _ = [];
    for (; l < i; ++l) {
      const m = arguments[l],
        y = {
          start: o,
          complete: !1,
          anchor: m.anchor,
          duration: m.duration !== void 0 ? m.duration : 1e3,
          easing: m.easing || iT,
          callback: s,
        };
      if (
        (m.center &&
          ((y.sourceCenter = c),
          (y.targetCenter = m.center.slice()),
          (c = y.targetCenter)),
        m.zoom !== void 0
          ? ((y.sourceResolution = h),
            (y.targetResolution = this.getResolutionForZoom(m.zoom)),
            (h = y.targetResolution))
          : m.resolution &&
            ((y.sourceResolution = h),
            (y.targetResolution = m.resolution),
            (h = y.targetResolution)),
        m.rotation !== void 0)
      ) {
        y.sourceRotation = d;
        const v = ol(m.rotation - d + Math.PI, 2 * Math.PI) - Math.PI;
        (y.targetRotation = d + v), (d = y.targetRotation);
      }
      fT(y) ? (y.complete = !0) : (o += y.duration), _.push(y);
    }
    this.animations_.push(_),
      this.setHint(Oe.ANIMATING, 1),
      this.updateAnimations_();
  }
  getAnimating() {
    return this.hints_[Oe.ANIMATING] > 0;
  }
  getInteracting() {
    return this.hints_[Oe.INTERACTING] > 0;
  }
  cancelAnimations() {
    this.setHint(Oe.ANIMATING, -this.hints_[Oe.ANIMATING]);
    let t;
    for (let i = 0, s = this.animations_.length; i < s; ++i) {
      const l = this.animations_[i];
      if ((l[0].callback && Tu(l[0].callback, !1), !t))
        for (let o = 0, c = l.length; o < c; ++o) {
          const h = l[o];
          if (!h.complete) {
            t = h.anchor;
            break;
          }
        }
    }
    (this.animations_.length = 0),
      (this.cancelAnchor_ = t),
      (this.nextCenter_ = null),
      (this.nextResolution_ = NaN),
      (this.nextRotation_ = NaN);
  }
  updateAnimations_() {
    if (
      (this.updateAnimationKey_ !== void 0 &&
        (cancelAnimationFrame(this.updateAnimationKey_),
        (this.updateAnimationKey_ = void 0)),
      !this.getAnimating())
    )
      return;
    const t = Date.now();
    let i = !1;
    for (let s = this.animations_.length - 1; s >= 0; --s) {
      const l = this.animations_[s];
      let o = !0;
      for (let c = 0, h = l.length; c < h; ++c) {
        const d = l[c];
        if (d.complete) continue;
        const _ = t - d.start;
        let m = d.duration > 0 ? _ / d.duration : 1;
        m >= 1 ? ((d.complete = !0), (m = 1)) : (o = !1);
        const y = d.easing(m);
        if (d.sourceCenter) {
          const v = d.sourceCenter[0],
            E = d.sourceCenter[1],
            x = d.targetCenter[0],
            R = d.targetCenter[1];
          this.nextCenter_ = d.targetCenter;
          const b = v + y * (x - v),
            w = E + y * (R - E);
          this.targetCenter_ = [b, w];
        }
        if (d.sourceResolution && d.targetResolution) {
          const v =
            y === 1
              ? d.targetResolution
              : d.sourceResolution +
                y * (d.targetResolution - d.sourceResolution);
          if (d.anchor) {
            const E = this.getViewportSize_(this.getRotation()),
              x = this.constraints_.resolution(v, 0, E, !0);
            this.targetCenter_ = this.calculateCenterZoom(x, d.anchor);
          }
          (this.nextResolution_ = d.targetResolution),
            (this.targetResolution_ = v),
            this.applyTargetState_(!0);
        }
        if (d.sourceRotation !== void 0 && d.targetRotation !== void 0) {
          const v =
            y === 1
              ? ol(d.targetRotation + Math.PI, 2 * Math.PI) - Math.PI
              : d.sourceRotation + y * (d.targetRotation - d.sourceRotation);
          if (d.anchor) {
            const E = this.constraints_.rotation(v, !0);
            this.targetCenter_ = this.calculateCenterRotate(E, d.anchor);
          }
          (this.nextRotation_ = d.targetRotation), (this.targetRotation_ = v);
        }
        if ((this.applyTargetState_(!0), (i = !0), !d.complete)) break;
      }
      if (o) {
        (this.animations_[s] = null),
          this.setHint(Oe.ANIMATING, -1),
          (this.nextCenter_ = null),
          (this.nextResolution_ = NaN),
          (this.nextRotation_ = NaN);
        const c = l[0].callback;
        c && Tu(c, !0);
      }
    }
    (this.animations_ = this.animations_.filter(Boolean)),
      i &&
        this.updateAnimationKey_ === void 0 &&
        (this.updateAnimationKey_ = requestAnimationFrame(
          this.updateAnimations_.bind(this),
        ));
  }
  calculateCenterRotate(t, i) {
    let s;
    const l = this.getCenterInternal();
    return (
      l !== void 0 &&
        ((s = [l[0] - i[0], l[1] - i[1]]),
        vd(s, t - this.getRotation()),
        nS(s, i)),
      s
    );
  }
  calculateCenterZoom(t, i) {
    let s;
    const l = this.getCenterInternal(),
      o = this.getResolution();
    if (l !== void 0 && o !== void 0) {
      const c = i[0] - (t * (i[0] - l[0])) / o,
        h = i[1] - (t * (i[1] - l[1])) / o;
      s = [c, h];
    }
    return s;
  }
  getViewportSize_(t) {
    const i = this.viewportSize_;
    if (t) {
      const s = i[0],
        l = i[1];
      return [
        Math.abs(s * Math.cos(t)) + Math.abs(l * Math.sin(t)),
        Math.abs(s * Math.sin(t)) + Math.abs(l * Math.cos(t)),
      ];
    }
    return i;
  }
  setViewportSize(t) {
    (this.viewportSize_ = Array.isArray(t) ? t.slice() : [100, 100]),
      this.getAnimating() || this.resolveConstraints(0);
  }
  getCenter() {
    const t = this.getCenterInternal();
    return t && ed(t, this.getProjection());
  }
  getCenterInternal() {
    return this.get(Ii.CENTER);
  }
  getConstraints() {
    return this.constraints_;
  }
  getConstrainResolution() {
    return this.get("constrainResolution");
  }
  getHints(t) {
    return t !== void 0
      ? ((t[0] = this.hints_[0]), (t[1] = this.hints_[1]), t)
      : this.hints_.slice();
  }
  calculateExtent(t) {
    const i = this.calculateExtentInternal(t);
    return Lu(i, this.getProjection());
  }
  calculateExtentInternal(t) {
    t = t || this.getViewportSizeMinusPadding_();
    const i = this.getCenterInternal();
    Lt(i, "The view center is not defined");
    const s = this.getResolution();
    Lt(s !== void 0, "The view resolution is not defined");
    const l = this.getRotation();
    return Lt(l !== void 0, "The view rotation is not defined"), Wf(i, s, l, t);
  }
  getMaxResolution() {
    return this.maxResolution_;
  }
  getMinResolution() {
    return this.minResolution_;
  }
  getMaxZoom() {
    return this.getZoomForResolution(this.minResolution_);
  }
  setMaxZoom(t) {
    this.applyOptions_(this.getUpdatedOptions_({ maxZoom: t }));
  }
  getMinZoom() {
    return this.getZoomForResolution(this.maxResolution_);
  }
  setMinZoom(t) {
    this.applyOptions_(this.getUpdatedOptions_({ minZoom: t }));
  }
  setConstrainResolution(t) {
    this.applyOptions_(this.getUpdatedOptions_({ constrainResolution: t }));
  }
  getProjection() {
    return this.projection_;
  }
  getResolution() {
    return this.get(Ii.RESOLUTION);
  }
  getResolutions() {
    return this.resolutions_;
  }
  getResolutionForExtent(t, i) {
    return this.getResolutionForExtentInternal(gs(t, this.getProjection()), i);
  }
  getResolutionForExtentInternal(t, i) {
    i = i || this.getViewportSizeMinusPadding_();
    const s = Ft(t) / i[0],
      l = Ue(t) / i[1];
    return Math.max(s, l);
  }
  getResolutionForValueFunction(t) {
    t = t || 2;
    const i = this.getConstrainedResolution(this.maxResolution_),
      s = this.minResolution_,
      l = Math.log(i / s) / Math.log(t);
    return function (o) {
      return i / Math.pow(t, o * l);
    };
  }
  getRotation() {
    return this.get(Ii.ROTATION);
  }
  getValueForResolutionFunction(t) {
    const i = Math.log(t || 2),
      s = this.getConstrainedResolution(this.maxResolution_),
      l = this.minResolution_,
      o = Math.log(s / l) / i;
    return function (c) {
      return Math.log(s / c) / i / o;
    };
  }
  getViewportSizeMinusPadding_(t) {
    let i = this.getViewportSize_(t);
    const s = this.padding_;
    return s && (i = [i[0] - s[1] - s[3], i[1] - s[0] - s[2]]), i;
  }
  getState() {
    const t = this.getProjection(),
      i = this.getResolution(),
      s = this.getRotation();
    let l = this.getCenterInternal();
    const o = this.padding_;
    if (o) {
      const c = this.getViewportSizeMinusPadding_();
      l = Yf(
        l,
        this.getViewportSize_(),
        [c[0] / 2 + o[3], c[1] / 2 + o[0]],
        i,
        s,
      );
    }
    return {
      center: l.slice(0),
      projection: t !== void 0 ? t : null,
      resolution: i,
      nextCenter: this.nextCenter_,
      nextResolution: this.nextResolution_,
      nextRotation: this.nextRotation_,
      rotation: s,
      zoom: this.getZoom(),
    };
  }
  getViewStateAndExtent() {
    return { viewState: this.getState(), extent: this.calculateExtent() };
  }
  getZoom() {
    let t;
    const i = this.getResolution();
    return i !== void 0 && (t = this.getZoomForResolution(i)), t;
  }
  getZoomForResolution(t) {
    let i = this.minZoom_ || 0,
      s,
      l;
    if (this.resolutions_) {
      const o = gd(this.resolutions_, t, 1);
      (i = o),
        (s = this.resolutions_[o]),
        o == this.resolutions_.length - 1
          ? (l = 2)
          : (l = s / this.resolutions_[o + 1]);
    } else (s = this.maxResolution_), (l = this.zoomFactor_);
    return i + Math.log(s / t) / Math.log(l);
  }
  getResolutionForZoom(t) {
    var i;
    if ((i = this.resolutions_) != null && i.length) {
      if (this.resolutions_.length === 1) return this.resolutions_[0];
      const s = se(Math.floor(t), 0, this.resolutions_.length - 2),
        l = this.resolutions_[s] / this.resolutions_[s + 1];
      return this.resolutions_[s] / Math.pow(l, se(t - s, 0, 1));
    }
    return this.maxResolution_ / Math.pow(this.zoomFactor_, t - this.minZoom_);
  }
  fit(t, i) {
    let s;
    if (
      (Lt(
        Array.isArray(t) || typeof t.getSimplifiedGeometry == "function",
        "Invalid extent or geometry provided as `geometry`",
      ),
      Array.isArray(t))
    ) {
      Lt(!qa(t), "Cannot fit empty extent provided as `geometry`");
      const l = gs(t, this.getProjection());
      s = ay(l);
    } else if (t.getType() === "Circle") {
      const l = gs(t.getExtent(), this.getProjection());
      (s = ay(l)), s.rotate(this.getRotation(), vs(l));
    } else {
      const l = Du();
      l ? (s = t.clone().transform(l, this.getProjection())) : (s = t);
    }
    this.fitInternal(s, i);
  }
  rotatedExtentForGeometry(t) {
    const i = this.getRotation(),
      s = Math.cos(i),
      l = Math.sin(-i),
      o = t.getFlatCoordinates(),
      c = t.getStride();
    let h = 1 / 0,
      d = 1 / 0,
      _ = -1 / 0,
      m = -1 / 0;
    for (let y = 0, v = o.length; y < v; y += c) {
      const E = o[y] * s - o[y + 1] * l,
        x = o[y] * l + o[y + 1] * s;
      (h = Math.min(h, E)),
        (d = Math.min(d, x)),
        (_ = Math.max(_, E)),
        (m = Math.max(m, x));
    }
    return [h, d, _, m];
  }
  fitInternal(t, i) {
    i = i || {};
    let s = i.size;
    s || (s = this.getViewportSizeMinusPadding_());
    const l = i.padding !== void 0 ? i.padding : [0, 0, 0, 0],
      o = i.nearest !== void 0 ? i.nearest : !1;
    let c;
    i.minResolution !== void 0
      ? (c = i.minResolution)
      : i.maxZoom !== void 0
        ? (c = this.getResolutionForZoom(i.maxZoom))
        : (c = 0);
    const h = this.rotatedExtentForGeometry(t);
    let d = this.getResolutionForExtentInternal(h, [
      s[0] - l[1] - l[3],
      s[1] - l[0] - l[2],
    ]);
    (d = isNaN(d) ? c : Math.max(d, c)),
      (d = this.getConstrainedResolution(d, o ? 0 : 1));
    const _ = this.getRotation(),
      m = Math.sin(_),
      y = Math.cos(_),
      v = vs(h);
    (v[0] += ((l[1] - l[3]) / 2) * d), (v[1] += ((l[0] - l[2]) / 2) * d);
    const E = v[0] * y - v[1] * m,
      x = v[1] * y + v[0] * m,
      R = this.getConstrainedCenter([E, x], d),
      b = i.callback ? i.callback : dl;
    i.duration !== void 0
      ? this.animateInternal(
          { resolution: d, center: R, duration: i.duration, easing: i.easing },
          b,
        )
      : ((this.targetResolution_ = d),
        (this.targetCenter_ = R),
        this.applyTargetState_(!1, !0),
        Tu(b, !0));
  }
  centerOn(t, i, s) {
    this.centerOnInternal(bn(t, this.getProjection()), i, s);
  }
  centerOnInternal(t, i, s) {
    this.setCenterInternal(
      Yf(t, i, s, this.getResolution(), this.getRotation()),
    );
  }
  calculateCenterShift(t, i, s, l) {
    let o;
    const c = this.padding_;
    if (c && t) {
      const h = this.getViewportSizeMinusPadding_(-s),
        d = Yf(t, l, [h[0] / 2 + c[3], h[1] / 2 + c[0]], i, s);
      o = [t[0] - d[0], t[1] - d[1]];
    }
    return o;
  }
  isDef() {
    return !!this.getCenterInternal() && this.getResolution() !== void 0;
  }
  adjustCenter(t) {
    const i = ed(this.targetCenter_, this.getProjection());
    this.setCenter([i[0] + t[0], i[1] + t[1]]);
  }
  adjustCenterInternal(t) {
    const i = this.targetCenter_;
    this.setCenterInternal([i[0] + t[0], i[1] + t[1]]);
  }
  adjustResolution(t, i) {
    (i = i && bn(i, this.getProjection())), this.adjustResolutionInternal(t, i);
  }
  adjustResolutionInternal(t, i) {
    const s = this.getAnimating() || this.getInteracting(),
      l = this.getViewportSize_(this.getRotation()),
      o = this.constraints_.resolution(this.targetResolution_ * t, 0, l, s);
    i && (this.targetCenter_ = this.calculateCenterZoom(o, i)),
      (this.targetResolution_ *= t),
      this.applyTargetState_();
  }
  adjustZoom(t, i) {
    this.adjustResolution(Math.pow(this.zoomFactor_, -t), i);
  }
  adjustRotation(t, i) {
    i && (i = bn(i, this.getProjection())), this.adjustRotationInternal(t, i);
  }
  adjustRotationInternal(t, i) {
    const s = this.getAnimating() || this.getInteracting(),
      l = this.constraints_.rotation(this.targetRotation_ + t, s);
    i && (this.targetCenter_ = this.calculateCenterRotate(l, i)),
      (this.targetRotation_ += t),
      this.applyTargetState_();
  }
  setCenter(t) {
    this.setCenterInternal(t && bn(t, this.getProjection()));
  }
  setCenterInternal(t) {
    (this.targetCenter_ = t), this.applyTargetState_();
  }
  setHint(t, i) {
    return (this.hints_[t] += i), this.changed(), this.hints_[t];
  }
  setResolution(t) {
    (this.targetResolution_ = t), this.applyTargetState_();
  }
  setRotation(t) {
    (this.targetRotation_ = t), this.applyTargetState_();
  }
  setZoom(t) {
    this.setResolution(this.getResolutionForZoom(t));
  }
  applyTargetState_(t, i) {
    const s = this.getAnimating() || this.getInteracting() || i,
      l = this.constraints_.rotation(this.targetRotation_, s),
      o = this.getViewportSize_(l),
      c = this.constraints_.resolution(this.targetResolution_, 0, o, s),
      h = this.constraints_.center(
        this.targetCenter_,
        c,
        o,
        s,
        this.calculateCenterShift(this.targetCenter_, c, l, o),
      );
    this.get(Ii.ROTATION) !== l && this.set(Ii.ROTATION, l),
      this.get(Ii.RESOLUTION) !== c &&
        (this.set(Ii.RESOLUTION, c), this.set("zoom", this.getZoom(), !0)),
      (!h || !this.get(Ii.CENTER) || !Au(this.get(Ii.CENTER), h)) &&
        this.set(Ii.CENTER, h),
      this.getAnimating() && !t && this.cancelAnimations(),
      (this.cancelAnchor_ = void 0);
  }
  resolveConstraints(t, i, s) {
    t = t !== void 0 ? t : 200;
    const l = i || 0,
      o = this.constraints_.rotation(this.targetRotation_),
      c = this.getViewportSize_(o),
      h = this.constraints_.resolution(this.targetResolution_, l, c),
      d = this.constraints_.center(
        this.targetCenter_,
        h,
        c,
        !1,
        this.calculateCenterShift(this.targetCenter_, h, o, c),
      );
    if (t === 0 && !this.cancelAnchor_) {
      (this.targetResolution_ = h),
        (this.targetRotation_ = o),
        (this.targetCenter_ = d),
        this.applyTargetState_();
      return;
    }
    (s = s || (t === 0 ? this.cancelAnchor_ : void 0)),
      (this.cancelAnchor_ = void 0),
      (this.getResolution() !== h ||
        this.getRotation() !== o ||
        !this.getCenterInternal() ||
        !Au(this.getCenterInternal(), d)) &&
        (this.getAnimating() && this.cancelAnimations(),
        this.animateInternal({
          rotation: o,
          center: d,
          resolution: h,
          duration: t,
          easing: Cl,
          anchor: s,
        }));
  }
  beginInteraction() {
    this.resolveConstraints(0), this.setHint(Oe.INTERACTING, 1);
  }
  endInteraction(t, i, s) {
    (s = s && bn(s, this.getProjection())),
      this.endInteractionInternal(t, i, s);
  }
  endInteractionInternal(t, i, s) {
    this.getInteracting() &&
      (this.setHint(Oe.INTERACTING, -1), this.resolveConstraints(t, i, s));
  }
  getConstrainedCenter(t, i) {
    const s = this.getViewportSize_(this.getRotation());
    return this.constraints_.center(t, i || this.getResolution(), s);
  }
  getConstrainedZoom(t, i) {
    const s = this.getResolutionForZoom(t);
    return this.getZoomForResolution(this.getConstrainedResolution(s, i));
  }
  getConstrainedResolution(t, i) {
    i = i || 0;
    const s = this.getViewportSize_(this.getRotation());
    return this.constraints_.resolution(t, i, s);
  }
}
function Tu(r, t) {
  setTimeout(function () {
    r(t);
  }, 0);
}
function uT(r) {
  if (r.extent !== void 0) {
    const i =
      r.smoothExtentConstraint !== void 0 ? r.smoothExtentConstraint : !0;
    return Fy(r.extent, r.constrainOnlyCenter, i);
  }
  const t = Rd(r.projection, "EPSG:3857");
  if (r.multiWorld !== !0 && t.isGlobal()) {
    const i = t.getExtent().slice();
    return (i[0] = -1 / 0), (i[2] = 1 / 0), Fy(i, !1, !1);
  }
  return eT;
}
function cT(r) {
  let t,
    i,
    s,
    c = r.minZoom !== void 0 ? r.minZoom : Xf,
    h = r.maxZoom !== void 0 ? r.maxZoom : 28;
  const d = r.zoomFactor !== void 0 ? r.zoomFactor : 2,
    _ = r.multiWorld !== void 0 ? r.multiWorld : !1,
    m =
      r.smoothResolutionConstraint !== void 0
        ? r.smoothResolutionConstraint
        : !0,
    y = r.showFullExtent !== void 0 ? r.showFullExtent : !1,
    v = Rd(r.projection, "EPSG:3857"),
    E = v.getExtent();
  let x = r.constrainOnlyCenter,
    R = r.extent;
  if (
    (!_ && !R && v.isGlobal() && ((x = !1), (R = E)), r.resolutions !== void 0)
  ) {
    const b = r.resolutions;
    (i = b[c]),
      (s = b[h] !== void 0 ? b[h] : b[b.length - 1]),
      r.constrainResolution
        ? (t = sT(b, m, !x && R, y))
        : (t = Uy(i, s, m, !x && R, y));
  } else {
    const w =
        (E
          ? Math.max(Ft(E), Ue(E))
          : (360 * Ed.degrees) / v.getMetersPerUnit()) /
        Vd /
        Math.pow(2, Xf),
      M = w / Math.pow(2, 28 - Xf);
    (i = r.maxResolution),
      i !== void 0 ? (c = 0) : (i = w / Math.pow(d, c)),
      (s = r.minResolution),
      s === void 0 &&
        (r.maxZoom !== void 0
          ? r.maxResolution !== void 0
            ? (s = i / Math.pow(d, h))
            : (s = w / Math.pow(d, h))
          : (s = M)),
      (h = c + Math.floor(Math.log(i / s) / Math.log(d))),
      (s = i / Math.pow(d, h - c)),
      r.constrainResolution
        ? (t = rT(d, i, s, m, !x && R, y))
        : (t = Uy(i, s, m, !x && R, y));
  }
  return {
    constraint: t,
    maxResolution: i,
    minResolution: s,
    minZoom: c,
    zoomFactor: d,
  };
}
function hT(r) {
  if (r.enableRotation !== void 0 ? r.enableRotation : !0) {
    const i = r.constrainRotation;
    return i === void 0 || i === !0
      ? aT()
      : i === !1
        ? Xy
        : typeof i == "number"
          ? lT(i)
          : Xy;
  }
  return Kd;
}
function fT(r) {
  return !(
    (r.sourceCenter && r.targetCenter && !Au(r.sourceCenter, r.targetCenter)) ||
    r.sourceResolution !== r.targetResolution ||
    r.sourceRotation !== r.targetRotation
  );
}
function Yf(r, t, i, s, l) {
  const o = Math.cos(-l);
  let c = Math.sin(-l),
    h = r[0] * o - r[1] * c,
    d = r[1] * o + r[0] * c;
  (h += (t[0] / 2 - i[0]) * s), (d += (i[1] - t[1] / 2) * s), (c = -c);
  const _ = h * o - d * c,
    m = d * o + h * c;
  return [_, m];
}
const Gt = {
  OPACITY: "opacity",
  VISIBLE: "visible",
  EXTENT: "extent",
  Z_INDEX: "zIndex",
  MAX_RESOLUTION: "maxResolution",
  MIN_RESOLUTION: "minResolution",
  MAX_ZOOM: "maxZoom",
  MIN_ZOOM: "minZoom",
  SOURCE: "source",
  MAP: "map",
};
class i1 extends Ui {
  constructor(t) {
    super(), this.on, this.once, this.un, (this.background_ = t.background);
    const i = Object.assign({}, t);
    typeof t.properties == "object" &&
      (delete i.properties, Object.assign(i, t.properties)),
      (i[Gt.OPACITY] = t.opacity !== void 0 ? t.opacity : 1),
      Lt(typeof i[Gt.OPACITY] == "number", "Layer opacity must be a number"),
      (i[Gt.VISIBLE] = t.visible !== void 0 ? t.visible : !0),
      (i[Gt.Z_INDEX] = t.zIndex),
      (i[Gt.MAX_RESOLUTION] =
        t.maxResolution !== void 0 ? t.maxResolution : 1 / 0),
      (i[Gt.MIN_RESOLUTION] = t.minResolution !== void 0 ? t.minResolution : 0),
      (i[Gt.MIN_ZOOM] = t.minZoom !== void 0 ? t.minZoom : -1 / 0),
      (i[Gt.MAX_ZOOM] = t.maxZoom !== void 0 ? t.maxZoom : 1 / 0),
      (this.className_ = i.className !== void 0 ? i.className : "ol-layer"),
      delete i.className,
      this.setProperties(i),
      (this.state_ = null);
  }
  getBackground() {
    return this.background_;
  }
  getClassName() {
    return this.className_;
  }
  getLayerState(t) {
    const i = this.state_ || { layer: this, managed: t === void 0 ? !0 : t },
      s = this.getZIndex();
    return (
      (i.opacity = se(Math.round(this.getOpacity() * 100) / 100, 0, 1)),
      (i.visible = this.getVisible()),
      (i.extent = this.getExtent()),
      (i.zIndex = s === void 0 && !i.managed ? 1 / 0 : s),
      (i.maxResolution = this.getMaxResolution()),
      (i.minResolution = Math.max(this.getMinResolution(), 0)),
      (i.minZoom = this.getMinZoom()),
      (i.maxZoom = this.getMaxZoom()),
      (this.state_ = i),
      i
    );
  }
  getLayersArray(t) {
    return _t();
  }
  getLayerStatesArray(t) {
    return _t();
  }
  getExtent() {
    return this.get(Gt.EXTENT);
  }
  getMaxResolution() {
    return this.get(Gt.MAX_RESOLUTION);
  }
  getMinResolution() {
    return this.get(Gt.MIN_RESOLUTION);
  }
  getMinZoom() {
    return this.get(Gt.MIN_ZOOM);
  }
  getMaxZoom() {
    return this.get(Gt.MAX_ZOOM);
  }
  getOpacity() {
    return this.get(Gt.OPACITY);
  }
  getSourceState() {
    return _t();
  }
  getVisible() {
    return this.get(Gt.VISIBLE);
  }
  getZIndex() {
    return this.get(Gt.Z_INDEX);
  }
  setBackground(t) {
    (this.background_ = t), this.changed();
  }
  setExtent(t) {
    this.set(Gt.EXTENT, t);
  }
  setMaxResolution(t) {
    this.set(Gt.MAX_RESOLUTION, t);
  }
  setMinResolution(t) {
    this.set(Gt.MIN_RESOLUTION, t);
  }
  setMaxZoom(t) {
    this.set(Gt.MAX_ZOOM, t);
  }
  setMinZoom(t) {
    this.set(Gt.MIN_ZOOM, t);
  }
  setOpacity(t) {
    Lt(typeof t == "number", "Layer opacity must be a number"),
      this.set(Gt.OPACITY, t);
  }
  setVisible(t) {
    this.set(Gt.VISIBLE, t);
  }
  setZIndex(t) {
    this.set(Gt.Z_INDEX, t);
  }
  disposeInternal() {
    this.state_ && ((this.state_.layer = null), (this.state_ = null)),
      super.disposeInternal();
  }
}
class dc extends i1 {
  constructor(t) {
    const i = Object.assign({}, t);
    delete i.source,
      super(i),
      this.on,
      this.once,
      this.un,
      (this.mapPrecomposeKey_ = null),
      (this.mapRenderKey_ = null),
      (this.sourceChangeKey_ = null),
      (this.renderer_ = null),
      (this.sourceReady_ = !1),
      (this.rendered = !1),
      t.render && (this.render = t.render),
      t.map && this.setMap(t.map),
      this.addChangeListener(Gt.SOURCE, this.handleSourcePropertyChange_);
    const s = t.source ? t.source : null;
    this.setSource(s);
  }
  getLayersArray(t) {
    return (t = t || []), t.push(this), t;
  }
  getLayerStatesArray(t) {
    return (t = t || []), t.push(this.getLayerState()), t;
  }
  getSource() {
    return this.get(Gt.SOURCE) || null;
  }
  getRenderSource() {
    return this.getSource();
  }
  getSourceState() {
    const t = this.getSource();
    return t ? t.getState() : "undefined";
  }
  handleSourceChange_() {
    this.changed(),
      !(this.sourceReady_ || this.getSource().getState() !== "ready") &&
        ((this.sourceReady_ = !0), this.dispatchEvent("sourceready"));
  }
  handleSourcePropertyChange_() {
    this.sourceChangeKey_ &&
      (jt(this.sourceChangeKey_), (this.sourceChangeKey_ = null)),
      (this.sourceReady_ = !1);
    const t = this.getSource();
    t &&
      ((this.sourceChangeKey_ = Mt(
        t,
        pt.CHANGE,
        this.handleSourceChange_,
        this,
      )),
      t.getState() === "ready" &&
        ((this.sourceReady_ = !0),
        setTimeout(() => {
          this.dispatchEvent("sourceready");
        }, 0)),
      this.clearRenderer()),
      this.changed();
  }
  getFeatures(t) {
    return this.renderer_ ? this.renderer_.getFeatures(t) : Promise.resolve([]);
  }
  getData(t) {
    return !this.renderer_ || !this.rendered ? null : this.renderer_.getData(t);
  }
  isVisible(t) {
    let i;
    const s = this.getMapInternal();
    !t && s && (t = s.getView()),
      t instanceof Ji
        ? (i = { viewState: t.getState(), extent: t.calculateExtent() })
        : (i = t),
      !i.layerStatesArray &&
        s &&
        (i.layerStatesArray = s.getLayerGroup().getLayerStatesArray());
    let l;
    if (i.layerStatesArray) {
      if (((l = i.layerStatesArray.find((c) => c.layer === this)), !l))
        return !1;
    } else l = this.getLayerState();
    const o = this.getExtent();
    return qd(l, i.viewState) && (!o || Ze(o, i.extent));
  }
  getAttributions(t) {
    var o;
    if (!this.isVisible(t)) return [];
    const i = (o = this.getSource()) == null ? void 0 : o.getAttributions();
    if (!i) return [];
    const s = t instanceof Ji ? t.getViewStateAndExtent() : t;
    let l = i(s);
    return Array.isArray(l) || (l = [l]), l;
  }
  render(t, i) {
    const s = this.getRenderer();
    return s.prepareFrame(t)
      ? ((this.rendered = !0), s.renderFrame(t, i))
      : null;
  }
  unrender() {
    this.rendered = !1;
  }
  getDeclutter() {}
  renderDeclutter(t, i) {}
  renderDeferred(t) {
    const i = this.getRenderer();
    i && i.renderDeferred(t);
  }
  setMapInternal(t) {
    t || this.unrender(), this.set(Gt.MAP, t);
  }
  getMapInternal() {
    return this.get(Gt.MAP);
  }
  setMap(t) {
    this.mapPrecomposeKey_ &&
      (jt(this.mapPrecomposeKey_), (this.mapPrecomposeKey_ = null)),
      t || this.changed(),
      this.mapRenderKey_ &&
        (jt(this.mapRenderKey_), (this.mapRenderKey_ = null)),
      t &&
        ((this.mapPrecomposeKey_ = Mt(
          t,
          Ei.PRECOMPOSE,
          this.handlePrecompose_,
          this,
        )),
        (this.mapRenderKey_ = Mt(this, pt.CHANGE, t.render, t)),
        this.changed());
  }
  handlePrecompose_(t) {
    const i = t.frameState.layerStatesArray,
      s = this.getLayerState(!1);
    Lt(
      !i.some((l) => l.layer === s.layer),
      "A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both.",
    ),
      i.push(s);
  }
  setSource(t) {
    this.set(Gt.SOURCE, t);
  }
  getRenderer() {
    return (
      this.renderer_ || (this.renderer_ = this.createRenderer()), this.renderer_
    );
  }
  hasRenderer() {
    return !!this.renderer_;
  }
  createRenderer() {
    return null;
  }
  clearRenderer() {
    this.renderer_ && (this.renderer_.dispose(), delete this.renderer_);
  }
  disposeInternal() {
    this.clearRenderer(), this.setSource(null), super.disposeInternal();
  }
}
function qd(r, t) {
  if (!r.visible) return !1;
  const i = t.resolution;
  if (i < r.minResolution || i >= r.maxResolution) return !1;
  const s = t.zoom;
  return s > r.minZoom && s <= r.maxZoom;
}
const Yy = { RENDER_ORDER: "renderOrder" };
class n1 extends dc {
  constructor(t) {
    t = t || {};
    const i = Object.assign({}, t);
    delete i.style,
      delete i.renderBuffer,
      delete i.updateWhileAnimating,
      delete i.updateWhileInteracting,
      super(i),
      (this.declutter_ = t.declutter ? String(t.declutter) : void 0),
      (this.renderBuffer_ = t.renderBuffer !== void 0 ? t.renderBuffer : 100),
      (this.style_ = null),
      (this.styleFunction_ = void 0),
      this.setStyle(t.style),
      (this.updateWhileAnimating_ =
        t.updateWhileAnimating !== void 0 ? t.updateWhileAnimating : !1),
      (this.updateWhileInteracting_ =
        t.updateWhileInteracting !== void 0 ? t.updateWhileInteracting : !1);
  }
  getDeclutter() {
    return this.declutter_;
  }
  getFeatures(t) {
    return super.getFeatures(t);
  }
  getRenderBuffer() {
    return this.renderBuffer_;
  }
  getRenderOrder() {
    return this.get(Yy.RENDER_ORDER);
  }
  getStyle() {
    return this.style_;
  }
  getStyleFunction() {
    return this.styleFunction_;
  }
  getUpdateWhileAnimating() {
    return this.updateWhileAnimating_;
  }
  getUpdateWhileInteracting() {
    return this.updateWhileInteracting_;
  }
  renderDeclutter(t, i) {
    const s = this.getDeclutter();
    s in t.declutter || (t.declutter[s] = new Pp(9)),
      this.getRenderer().renderDeclutter(t, i);
  }
  setRenderOrder(t) {
    this.set(Yy.RENDER_ORDER, t);
  }
  setStyle(t) {
    this.style_ = t === void 0 ? Bp : t;
    const i = dT(t);
    (this.styleFunction_ = t === null ? void 0 : Wx(i)), this.changed();
  }
  setDeclutter(t) {
    (this.declutter_ = t ? String(t) : void 0), this.changed();
  }
}
function dT(r) {
  if (r === void 0) return Bp;
  if (!r) return null;
  if (typeof r == "function" || r instanceof nn) return r;
  if (!Array.isArray(r)) return Iy([r]);
  if (r.length === 0) return [];
  const t = r.length,
    i = r[0];
  if (i instanceof nn) {
    const l = new Array(t);
    for (let o = 0; o < t; ++o) {
      const c = r[o];
      if (!(c instanceof nn))
        throw new Error("Expected a list of style instances");
      l[o] = c;
    }
    return l;
  }
  if ("style" in i) {
    const l = new Array(t);
    for (let o = 0; o < t; ++o) {
      const c = r[o];
      if (!("style" in c))
        throw new Error("Expected a list of rules with a style property");
      l[o] = c;
    }
    return k2(l);
  }
  return Iy(r);
}
class Wd extends n1 {
  constructor(t) {
    super(t);
  }
  createRenderer() {
    return new m2(this);
  }
}
const ft = { IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3, EMPTY: 4 };
class Qd extends Vu {
  constructor(t, i, s) {
    super(),
      (s = s || {}),
      (this.tileCoord = t),
      (this.state = i),
      (this.key = ""),
      (this.transition_ = s.transition === void 0 ? 250 : s.transition),
      (this.transitionStarts_ = {}),
      (this.interpolate = !!s.interpolate);
  }
  changed() {
    this.dispatchEvent(pt.CHANGE);
  }
  release() {
    this.setState(ft.EMPTY);
  }
  getKey() {
    return this.key + "/" + this.tileCoord;
  }
  getTileCoord() {
    return this.tileCoord;
  }
  getState() {
    return this.state;
  }
  setState(t) {
    if (this.state !== ft.EMPTY) {
      if (this.state !== ft.ERROR && this.state > t)
        throw new Error("Tile load sequence violation");
      (this.state = t), this.changed();
    }
  }
  load() {
    _t();
  }
  getAlpha(t, i) {
    if (!this.transition_) return 1;
    let s = this.transitionStarts_[t];
    if (!s) (s = i), (this.transitionStarts_[t] = s);
    else if (s === -1) return 1;
    const l = i - s + 1e3 / 60;
    return l >= this.transition_ ? 1 : e1(l / this.transition_);
  }
  inTransition(t) {
    return this.transition_ ? this.transitionStarts_[t] !== -1 : !1;
  }
  endTransition(t) {
    this.transition_ && (this.transitionStarts_[t] = -1);
  }
  disposeInternal() {
    this.release(), super.disposeInternal();
  }
}
class s1 extends Qd {
  constructor(t, i, s, l, o, c) {
    super(t, i, c),
      (this.crossOrigin_ = l),
      (this.src_ = s),
      (this.key = s),
      (this.image_ = new Image()),
      l !== null && (this.image_.crossOrigin = l),
      (this.unlisten_ = null),
      (this.tileLoadFunction_ = o);
  }
  getImage() {
    return this.image_;
  }
  setImage(t) {
    (this.image_ = t),
      (this.state = ft.LOADED),
      this.unlistenImage_(),
      this.changed();
  }
  handleImageError_() {
    (this.state = ft.ERROR),
      this.unlistenImage_(),
      (this.image_ = gT()),
      this.changed();
  }
  handleImageLoad_() {
    const t = this.image_;
    t.naturalWidth && t.naturalHeight
      ? (this.state = ft.LOADED)
      : (this.state = ft.EMPTY),
      this.unlistenImage_(),
      this.changed();
  }
  load() {
    this.state == ft.ERROR &&
      ((this.state = ft.IDLE),
      (this.image_ = new Image()),
      this.crossOrigin_ !== null &&
        (this.image_.crossOrigin = this.crossOrigin_)),
      this.state == ft.IDLE &&
        ((this.state = ft.LOADING),
        this.changed(),
        this.tileLoadFunction_(this, this.src_),
        (this.unlisten_ = mx(
          this.image_,
          this.handleImageLoad_.bind(this),
          this.handleImageError_.bind(this),
        )));
  }
  unlistenImage_() {
    this.unlisten_ && (this.unlisten_(), (this.unlisten_ = null));
  }
  disposeInternal() {
    this.unlistenImage_(), (this.image_ = null), super.disposeInternal();
  }
}
function gT() {
  const r = me(1, 1);
  return (r.fillStyle = "rgba(0,0,0,0)"), r.fillRect(0, 0, 1, 1), r.canvas;
}
class _T {
  constructor(t, i, s) {
    (this.decay_ = t),
      (this.minVelocity_ = i),
      (this.delay_ = s),
      (this.points_ = []),
      (this.angle_ = 0),
      (this.initialVelocity_ = 0);
  }
  begin() {
    (this.points_.length = 0), (this.angle_ = 0), (this.initialVelocity_ = 0);
  }
  update(t, i) {
    this.points_.push(t, i, Date.now());
  }
  end() {
    if (this.points_.length < 6) return !1;
    const t = Date.now() - this.delay_,
      i = this.points_.length - 3;
    if (this.points_[i + 2] < t) return !1;
    let s = i - 3;
    for (; s > 0 && this.points_[s + 2] > t; ) s -= 3;
    const l = this.points_[i + 2] - this.points_[s + 2];
    if (l < 1e3 / 60) return !1;
    const o = this.points_[i] - this.points_[s],
      c = this.points_[i + 1] - this.points_[s + 1];
    return (
      (this.angle_ = Math.atan2(c, o)),
      (this.initialVelocity_ = Math.sqrt(o * o + c * c) / l),
      this.initialVelocity_ > this.minVelocity_
    );
  }
  getDistance() {
    return (this.minVelocity_ - this.initialVelocity_) / this.decay_;
  }
  getAngle() {
    return this.angle_;
  }
}
class sl extends Gn {
  constructor(t, i, s) {
    super(t), (this.map = i), (this.frameState = s !== void 0 ? s : null);
  }
}
class fs extends sl {
  constructor(t, i, s, l, o, c) {
    super(t, i, o),
      (this.originalEvent = s),
      (this.pixel_ = null),
      (this.coordinate_ = null),
      (this.dragging = l !== void 0 ? l : !1),
      (this.activePointers = c);
  }
  get pixel() {
    return (
      this.pixel_ || (this.pixel_ = this.map.getEventPixel(this.originalEvent)),
      this.pixel_
    );
  }
  set pixel(t) {
    this.pixel_ = t;
  }
  get coordinate() {
    return (
      this.coordinate_ ||
        (this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel)),
      this.coordinate_
    );
  }
  set coordinate(t) {
    this.coordinate_ = t;
  }
  preventDefault() {
    super.preventDefault(),
      "preventDefault" in this.originalEvent &&
        this.originalEvent.preventDefault();
  }
  stopPropagation() {
    super.stopPropagation(),
      "stopPropagation" in this.originalEvent &&
        this.originalEvent.stopPropagation();
  }
}
const $t = {
    SINGLECLICK: "singleclick",
    CLICK: pt.CLICK,
    DBLCLICK: pt.DBLCLICK,
    POINTERDRAG: "pointerdrag",
    POINTERMOVE: "pointermove",
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    POINTERCANCEL: "pointercancel",
  },
  ud = { POINTERMOVE: "pointermove", POINTERDOWN: "pointerdown" };
class mT extends Vu {
  constructor(t, i) {
    super(t),
      (this.map_ = t),
      this.clickTimeoutId_,
      (this.emulateClicks_ = !1),
      (this.dragging_ = !1),
      (this.dragListenerKeys_ = []),
      (this.moveTolerance_ = i === void 0 ? 1 : i),
      (this.down_ = null);
    const s = this.map_.getViewport();
    (this.activePointers_ = []),
      (this.trackedTouches_ = {}),
      (this.element_ = s),
      (this.pointerdownListenerKey_ = Mt(
        s,
        ud.POINTERDOWN,
        this.handlePointerDown_,
        this,
      )),
      this.originalPointerMoveEvent_,
      (this.relayedListenerKey_ = Mt(
        s,
        ud.POINTERMOVE,
        this.relayMoveEvent_,
        this,
      )),
      (this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this)),
      this.element_.addEventListener(
        pt.TOUCHMOVE,
        this.boundHandleTouchMove_,
        wp ? { passive: !1 } : !1,
      );
  }
  emulateClick_(t) {
    let i = new fs($t.CLICK, this.map_, t);
    this.dispatchEvent(i),
      this.clickTimeoutId_ !== void 0
        ? (clearTimeout(this.clickTimeoutId_),
          (this.clickTimeoutId_ = void 0),
          (i = new fs($t.DBLCLICK, this.map_, t)),
          this.dispatchEvent(i))
        : (this.clickTimeoutId_ = setTimeout(() => {
            this.clickTimeoutId_ = void 0;
            const s = new fs($t.SINGLECLICK, this.map_, t);
            this.dispatchEvent(s);
          }, 250));
  }
  updateActivePointers_(t) {
    const i = t,
      s = i.pointerId;
    if (i.type == $t.POINTERUP || i.type == $t.POINTERCANCEL) {
      delete this.trackedTouches_[s];
      for (const l in this.trackedTouches_)
        if (this.trackedTouches_[l].target !== i.target) {
          delete this.trackedTouches_[l];
          break;
        }
    } else
      (i.type == $t.POINTERDOWN || i.type == $t.POINTERMOVE) &&
        (this.trackedTouches_[s] = i);
    this.activePointers_ = Object.values(this.trackedTouches_);
  }
  handlePointerUp_(t) {
    this.updateActivePointers_(t);
    const i = new fs(
      $t.POINTERUP,
      this.map_,
      t,
      void 0,
      void 0,
      this.activePointers_,
    );
    this.dispatchEvent(i),
      this.emulateClicks_ &&
        !i.defaultPrevented &&
        !this.dragging_ &&
        this.isMouseActionButton_(t) &&
        this.emulateClick_(this.down_),
      this.activePointers_.length === 0 &&
        (this.dragListenerKeys_.forEach(jt),
        (this.dragListenerKeys_.length = 0),
        (this.dragging_ = !1),
        (this.down_ = null));
  }
  isMouseActionButton_(t) {
    return t.button === 0;
  }
  handlePointerDown_(t) {
    (this.emulateClicks_ = this.activePointers_.length === 0),
      this.updateActivePointers_(t);
    const i = new fs(
      $t.POINTERDOWN,
      this.map_,
      t,
      void 0,
      void 0,
      this.activePointers_,
    );
    if (
      (this.dispatchEvent(i),
      (this.down_ = new PointerEvent(t.type, t)),
      Object.defineProperty(this.down_, "target", {
        writable: !1,
        value: t.target,
      }),
      this.dragListenerKeys_.length === 0)
    ) {
      const s = this.map_.getOwnerDocument();
      this.dragListenerKeys_.push(
        Mt(s, $t.POINTERMOVE, this.handlePointerMove_, this),
        Mt(s, $t.POINTERUP, this.handlePointerUp_, this),
        Mt(this.element_, $t.POINTERCANCEL, this.handlePointerUp_, this),
      ),
        this.element_.getRootNode &&
          this.element_.getRootNode() !== s &&
          this.dragListenerKeys_.push(
            Mt(
              this.element_.getRootNode(),
              $t.POINTERUP,
              this.handlePointerUp_,
              this,
            ),
          );
    }
  }
  handlePointerMove_(t) {
    if (this.isMoving_(t)) {
      this.updateActivePointers_(t), (this.dragging_ = !0);
      const i = new fs(
        $t.POINTERDRAG,
        this.map_,
        t,
        this.dragging_,
        void 0,
        this.activePointers_,
      );
      this.dispatchEvent(i);
    }
  }
  relayMoveEvent_(t) {
    this.originalPointerMoveEvent_ = t;
    const i = !!(this.down_ && this.isMoving_(t));
    this.dispatchEvent(new fs($t.POINTERMOVE, this.map_, t, i));
  }
  handleTouchMove_(t) {
    const i = this.originalPointerMoveEvent_;
    (!i || i.defaultPrevented) &&
      (typeof t.cancelable != "boolean" || t.cancelable === !0) &&
      t.preventDefault();
  }
  isMoving_(t) {
    return (
      this.dragging_ ||
      Math.abs(t.clientX - this.down_.clientX) > this.moveTolerance_ ||
      Math.abs(t.clientY - this.down_.clientY) > this.moveTolerance_
    );
  }
  disposeInternal() {
    this.relayedListenerKey_ &&
      (jt(this.relayedListenerKey_), (this.relayedListenerKey_ = null)),
      this.element_.removeEventListener(
        pt.TOUCHMOVE,
        this.boundHandleTouchMove_,
      ),
      this.pointerdownListenerKey_ &&
        (jt(this.pointerdownListenerKey_),
        (this.pointerdownListenerKey_ = null)),
      this.dragListenerKeys_.forEach(jt),
      (this.dragListenerKeys_.length = 0),
      (this.element_ = null),
      super.disposeInternal();
  }
}
const An = {
    POSTRENDER: "postrender",
    MOVESTART: "movestart",
    MOVEEND: "moveend",
    LOADSTART: "loadstart",
    LOADEND: "loadend",
  },
  Me = {
    LAYERGROUP: "layergroup",
    SIZE: "size",
    TARGET: "target",
    VIEW: "view",
  },
  Hu = 1 / 0;
class yT {
  constructor(t, i) {
    (this.priorityFunction_ = t),
      (this.keyFunction_ = i),
      (this.elements_ = []),
      (this.priorities_ = []),
      (this.queuedElements_ = {});
  }
  clear() {
    (this.elements_.length = 0),
      (this.priorities_.length = 0),
      Ka(this.queuedElements_);
  }
  dequeue() {
    const t = this.elements_,
      i = this.priorities_,
      s = t[0];
    t.length == 1
      ? ((t.length = 0), (i.length = 0))
      : ((t[0] = t.pop()), (i[0] = i.pop()), this.siftUp_(0));
    const l = this.keyFunction_(s);
    return delete this.queuedElements_[l], s;
  }
  enqueue(t) {
    Lt(
      !(this.keyFunction_(t) in this.queuedElements_),
      "Tried to enqueue an `element` that was already added to the queue",
    );
    const i = this.priorityFunction_(t);
    return i != Hu
      ? (this.elements_.push(t),
        this.priorities_.push(i),
        (this.queuedElements_[this.keyFunction_(t)] = !0),
        this.siftDown_(0, this.elements_.length - 1),
        !0)
      : !1;
  }
  getCount() {
    return this.elements_.length;
  }
  getLeftChildIndex_(t) {
    return t * 2 + 1;
  }
  getRightChildIndex_(t) {
    return t * 2 + 2;
  }
  getParentIndex_(t) {
    return (t - 1) >> 1;
  }
  heapify_() {
    let t;
    for (t = (this.elements_.length >> 1) - 1; t >= 0; t--) this.siftUp_(t);
  }
  isEmpty() {
    return this.elements_.length === 0;
  }
  isKeyQueued(t) {
    return t in this.queuedElements_;
  }
  isQueued(t) {
    return this.isKeyQueued(this.keyFunction_(t));
  }
  siftUp_(t) {
    const i = this.elements_,
      s = this.priorities_,
      l = i.length,
      o = i[t],
      c = s[t],
      h = t;
    for (; t < l >> 1; ) {
      const d = this.getLeftChildIndex_(t),
        _ = this.getRightChildIndex_(t),
        m = _ < l && s[_] < s[d] ? _ : d;
      (i[t] = i[m]), (s[t] = s[m]), (t = m);
    }
    (i[t] = o), (s[t] = c), this.siftDown_(h, t);
  }
  siftDown_(t, i) {
    const s = this.elements_,
      l = this.priorities_,
      o = s[i],
      c = l[i];
    for (; i > t; ) {
      const h = this.getParentIndex_(i);
      if (l[h] > c) (s[i] = s[h]), (l[i] = l[h]), (i = h);
      else break;
    }
    (s[i] = o), (l[i] = c);
  }
  reprioritize() {
    const t = this.priorityFunction_,
      i = this.elements_,
      s = this.priorities_;
    let l = 0;
    const o = i.length;
    let c, h, d;
    for (h = 0; h < o; ++h)
      (c = i[h]),
        (d = t(c)),
        d == Hu
          ? delete this.queuedElements_[this.keyFunction_(c)]
          : ((s[l] = d), (i[l++] = c));
    (i.length = l), (s.length = l), this.heapify_();
  }
}
class pT extends yT {
  constructor(t, i) {
    super(
      (s) => t.apply(null, s),
      (s) => s[0].getKey(),
    ),
      (this.boundHandleTileChange_ = this.handleTileChange.bind(this)),
      (this.tileChangeCallback_ = i),
      (this.tilesLoading_ = 0),
      (this.tilesLoadingKeys_ = {});
  }
  enqueue(t) {
    const i = super.enqueue(t);
    return (
      i && t[0].addEventListener(pt.CHANGE, this.boundHandleTileChange_), i
    );
  }
  getTilesLoading() {
    return this.tilesLoading_;
  }
  handleTileChange(t) {
    const i = t.target,
      s = i.getState();
    if (s === ft.LOADED || s === ft.ERROR || s === ft.EMPTY) {
      s !== ft.ERROR &&
        i.removeEventListener(pt.CHANGE, this.boundHandleTileChange_);
      const l = i.getKey();
      l in this.tilesLoadingKeys_ &&
        (delete this.tilesLoadingKeys_[l], --this.tilesLoading_),
        this.tileChangeCallback_();
    }
  }
  loadMoreTiles(t, i) {
    let s = 0;
    for (; this.tilesLoading_ < t && s < i && this.getCount() > 0; ) {
      const l = this.dequeue()[0],
        o = l.getKey();
      l.getState() === ft.IDLE &&
        !(o in this.tilesLoadingKeys_) &&
        ((this.tilesLoadingKeys_[o] = !0), ++this.tilesLoading_, ++s, l.load());
    }
  }
}
function vT(r, t, i, s, l) {
  if (!r || !(i in r.wantedTiles) || !r.wantedTiles[i][t.getKey()]) return Hu;
  const o = r.viewState.center,
    c = s[0] - o[0],
    h = s[1] - o[1];
  return 65536 * Math.log(l) + Math.sqrt(c * c + h * h) / l;
}
class Jd extends Ui {
  constructor(t) {
    super();
    const i = t.element;
    i &&
      !t.target &&
      !i.style.pointerEvents &&
      (i.style.pointerEvents = "auto"),
      (this.element = i || null),
      (this.target_ = null),
      (this.map_ = null),
      (this.listenerKeys = []),
      t.render && (this.render = t.render),
      t.target && this.setTarget(t.target);
  }
  disposeInternal() {
    var t;
    (t = this.element) == null || t.remove(), super.disposeInternal();
  }
  getMap() {
    return this.map_;
  }
  setMap(t) {
    var i;
    this.map_ && ((i = this.element) == null || i.remove());
    for (let s = 0, l = this.listenerKeys.length; s < l; ++s)
      jt(this.listenerKeys[s]);
    if (((this.listenerKeys.length = 0), (this.map_ = t), t)) {
      const s = this.target_ ?? t.getOverlayContainerStopEvent();
      this.element && s.appendChild(this.element),
        this.render !== dl &&
          this.listenerKeys.push(Mt(t, An.POSTRENDER, this.render, this)),
        t.render();
    }
  }
  render(t) {}
  setTarget(t) {
    this.target_ = typeof t == "string" ? document.getElementById(t) : t;
  }
}
class ET extends Jd {
  constructor(t) {
    (t = t || {}),
      super({
        element: document.createElement("div"),
        render: t.render,
        target: t.target,
      }),
      (this.ulElement_ = document.createElement("ul")),
      (this.collapsed_ = t.collapsed !== void 0 ? t.collapsed : !0),
      (this.userCollapsed_ = this.collapsed_),
      (this.overrideCollapsible_ = t.collapsible !== void 0),
      (this.collapsible_ = t.collapsible !== void 0 ? t.collapsible : !0),
      this.collapsible_ || (this.collapsed_ = !1),
      (this.attributions_ = t.attributions);
    const i = t.className !== void 0 ? t.className : "ol-attribution",
      s = t.tipLabel !== void 0 ? t.tipLabel : "Attributions",
      l = t.expandClassName !== void 0 ? t.expandClassName : i + "-expand",
      o = t.collapseLabel !== void 0 ? t.collapseLabel : "›",
      c =
        t.collapseClassName !== void 0 ? t.collapseClassName : i + "-collapse";
    typeof o == "string"
      ? ((this.collapseLabel_ = document.createElement("span")),
        (this.collapseLabel_.textContent = o),
        (this.collapseLabel_.className = c))
      : (this.collapseLabel_ = o);
    const h = t.label !== void 0 ? t.label : "i";
    typeof h == "string"
      ? ((this.label_ = document.createElement("span")),
        (this.label_.textContent = h),
        (this.label_.className = l))
      : (this.label_ = h);
    const d =
      this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_;
    (this.toggleButton_ = document.createElement("button")),
      this.toggleButton_.setAttribute("type", "button"),
      this.toggleButton_.setAttribute(
        "aria-expanded",
        String(!this.collapsed_),
      ),
      (this.toggleButton_.title = s),
      this.toggleButton_.appendChild(d),
      this.toggleButton_.addEventListener(
        pt.CLICK,
        this.handleClick_.bind(this),
        !1,
      );
    const _ =
        i +
        " " +
        lc +
        " " +
        Yd +
        (this.collapsed_ && this.collapsible_ ? " " + fy : "") +
        (this.collapsible_ ? "" : " ol-uncollapsible"),
      m = this.element;
    (m.className = _),
      m.appendChild(this.toggleButton_),
      m.appendChild(this.ulElement_),
      (this.renderedAttributions_ = []),
      (this.renderedVisible_ = !0);
  }
  collectSourceAttributions_(t) {
    const i = this.getMap().getAllLayers(),
      s = new Set(i.flatMap((l) => l.getAttributions(t)));
    if (
      (this.attributions_ !== void 0 &&
        (Array.isArray(this.attributions_)
          ? this.attributions_.forEach((l) => s.add(l))
          : s.add(this.attributions_)),
      !this.overrideCollapsible_)
    ) {
      const l = !i.some((o) => {
        var c;
        return (
          ((c = o.getSource()) == null
            ? void 0
            : c.getAttributionsCollapsible()) === !1
        );
      });
      this.setCollapsible(l);
    }
    return Array.from(s);
  }
  async updateElement_(t) {
    if (!t) {
      this.renderedVisible_ &&
        ((this.element.style.display = "none"), (this.renderedVisible_ = !1));
      return;
    }
    const i = await Promise.all(
        this.collectSourceAttributions_(t).map((l) => HE(() => l)),
      ),
      s = i.length > 0;
    if (
      (this.renderedVisible_ != s &&
        ((this.element.style.display = s ? "" : "none"),
        (this.renderedVisible_ = s)),
      !Ts(i, this.renderedAttributions_))
    ) {
      Op(this.ulElement_);
      for (let l = 0, o = i.length; l < o; ++l) {
        const c = document.createElement("li");
        (c.innerHTML = i[l]), this.ulElement_.appendChild(c);
      }
      this.renderedAttributions_ = i;
    }
  }
  handleClick_(t) {
    t.preventDefault(),
      this.handleToggle_(),
      (this.userCollapsed_ = this.collapsed_);
  }
  handleToggle_() {
    this.element.classList.toggle(fy),
      this.collapsed_
        ? hy(this.collapseLabel_, this.label_)
        : hy(this.label_, this.collapseLabel_),
      (this.collapsed_ = !this.collapsed_),
      this.toggleButton_.setAttribute(
        "aria-expanded",
        String(!this.collapsed_),
      );
  }
  getCollapsible() {
    return this.collapsible_;
  }
  setCollapsible(t) {
    this.collapsible_ !== t &&
      ((this.collapsible_ = t),
      this.element.classList.toggle("ol-uncollapsible"),
      this.userCollapsed_ && this.handleToggle_());
  }
  setCollapsed(t) {
    (this.userCollapsed_ = t),
      !(!this.collapsible_ || this.collapsed_ === t) && this.handleToggle_();
  }
  getCollapsed() {
    return this.collapsed_;
  }
  render(t) {
    this.updateElement_(t.frameState);
  }
}
class ST extends Jd {
  constructor(t) {
    (t = t || {}),
      super({
        element: document.createElement("div"),
        render: t.render,
        target: t.target,
      });
    const i = t.className !== void 0 ? t.className : "ol-rotate",
      s = t.label !== void 0 ? t.label : "⇧",
      l = t.compassClassName !== void 0 ? t.compassClassName : "ol-compass";
    (this.label_ = null),
      typeof s == "string"
        ? ((this.label_ = document.createElement("span")),
          (this.label_.className = l),
          (this.label_.textContent = s))
        : ((this.label_ = s), this.label_.classList.add(l));
    const o = t.tipLabel ? t.tipLabel : "Reset rotation",
      c = document.createElement("button");
    (c.className = i + "-reset"),
      c.setAttribute("type", "button"),
      (c.title = o),
      c.appendChild(this.label_),
      c.addEventListener(pt.CLICK, this.handleClick_.bind(this), !1);
    const h = i + " " + lc + " " + Yd,
      d = this.element;
    (d.className = h),
      d.appendChild(c),
      (this.callResetNorth_ = t.resetNorth ? t.resetNorth : void 0),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250),
      (this.autoHide_ = t.autoHide !== void 0 ? t.autoHide : !0),
      (this.rotation_ = void 0),
      this.autoHide_ && this.element.classList.add(pu);
  }
  handleClick_(t) {
    t.preventDefault(),
      this.callResetNorth_ !== void 0
        ? this.callResetNorth_()
        : this.resetNorth_();
  }
  resetNorth_() {
    const i = this.getMap().getView();
    if (!i) return;
    const s = i.getRotation();
    s !== void 0 &&
      (this.duration_ > 0 && s % (2 * Math.PI) !== 0
        ? i.animate({ rotation: 0, duration: this.duration_, easing: Cl })
        : i.setRotation(0));
  }
  render(t) {
    const i = t.frameState;
    if (!i) return;
    const s = i.viewState.rotation;
    if (s != this.rotation_) {
      const l = "rotate(" + s + "rad)";
      if (this.autoHide_) {
        const o = this.element.classList.contains(pu);
        !o && s === 0
          ? this.element.classList.add(pu)
          : o && s !== 0 && this.element.classList.remove(pu);
      }
      this.label_.style.transform = l;
    }
    this.rotation_ = s;
  }
}
class xT extends Jd {
  constructor(t) {
    (t = t || {}),
      super({ element: document.createElement("div"), target: t.target });
    const i = t.className !== void 0 ? t.className : "ol-zoom",
      s = t.delta !== void 0 ? t.delta : 1,
      l = t.zoomInClassName !== void 0 ? t.zoomInClassName : i + "-in",
      o = t.zoomOutClassName !== void 0 ? t.zoomOutClassName : i + "-out",
      c = t.zoomInLabel !== void 0 ? t.zoomInLabel : "+",
      h = t.zoomOutLabel !== void 0 ? t.zoomOutLabel : "–",
      d = t.zoomInTipLabel !== void 0 ? t.zoomInTipLabel : "Zoom in",
      _ = t.zoomOutTipLabel !== void 0 ? t.zoomOutTipLabel : "Zoom out",
      m = document.createElement("button");
    (m.className = l),
      m.setAttribute("type", "button"),
      (m.title = d),
      m.appendChild(typeof c == "string" ? document.createTextNode(c) : c),
      m.addEventListener(pt.CLICK, this.handleClick_.bind(this, s), !1);
    const y = document.createElement("button");
    (y.className = o),
      y.setAttribute("type", "button"),
      (y.title = _),
      y.appendChild(typeof h == "string" ? document.createTextNode(h) : h),
      y.addEventListener(pt.CLICK, this.handleClick_.bind(this, -s), !1);
    const v = i + " " + lc + " " + Yd,
      E = this.element;
    (E.className = v),
      E.appendChild(m),
      E.appendChild(y),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250);
  }
  handleClick_(t, i) {
    i.preventDefault(), this.zoomByDelta_(t);
  }
  zoomByDelta_(t) {
    const s = this.getMap().getView();
    if (!s) return;
    const l = s.getZoom();
    if (l !== void 0) {
      const o = s.getConstrainedZoom(l + t);
      this.duration_ > 0
        ? (s.getAnimating() && s.cancelAnimations(),
          s.animate({ zoom: o, duration: this.duration_, easing: Cl }))
        : s.setZoom(o);
    }
  }
}
function TT(r) {
  r = r || {};
  const t = new $i();
  return (
    (r.zoom !== void 0 ? r.zoom : !0) && t.push(new xT(r.zoomOptions)),
    (r.rotate !== void 0 ? r.rotate : !0) && t.push(new ST(r.rotateOptions)),
    (r.attribution !== void 0 ? r.attribution : !0) &&
      t.push(new ET(r.attributionOptions)),
    t
  );
}
const Py = { ACTIVE: "active" };
class eo extends Ui {
  constructor(t) {
    super(),
      this.on,
      this.once,
      this.un,
      t && t.handleEvent && (this.handleEvent = t.handleEvent),
      (this.map_ = null),
      this.setActive(!0);
  }
  getActive() {
    return this.get(Py.ACTIVE);
  }
  getMap() {
    return this.map_;
  }
  handleEvent(t) {
    return !0;
  }
  setActive(t) {
    this.set(Py.ACTIVE, t);
  }
  setMap(t) {
    this.map_ = t;
  }
}
function CT(r, t, i) {
  const s = r.getCenterInternal();
  if (s) {
    const l = [s[0] + t[0], s[1] + t[1]];
    r.animateInternal({
      duration: i !== void 0 ? i : 250,
      easing: nT,
      center: r.getConstrainedCenter(l),
    });
  }
}
function $d(r, t, i, s) {
  const l = r.getZoom();
  if (l === void 0) return;
  const o = r.getConstrainedZoom(l + t),
    c = r.getResolutionForZoom(o);
  r.getAnimating() && r.cancelAnimations(),
    r.animate({
      resolution: c,
      anchor: i,
      duration: s !== void 0 ? s : 250,
      easing: Cl,
    });
}
class RT extends eo {
  constructor(t) {
    super(),
      (t = t || {}),
      (this.delta_ = t.delta ? t.delta : 1),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250);
  }
  handleEvent(t) {
    let i = !1;
    if (t.type == $t.DBLCLICK) {
      const s = t.originalEvent,
        l = t.map,
        o = t.coordinate,
        c = s.shiftKey ? -this.delta_ : this.delta_,
        h = l.getView();
      $d(h, c, o, this.duration_), s.preventDefault(), (i = !0);
    }
    return !i;
  }
}
function cd(r) {
  const t = arguments;
  return function (i) {
    let s = !0;
    for (let l = 0, o = t.length; l < o && ((s = s && t[l](i)), !!s); ++l);
    return s;
  };
}
const bT = function (r) {
    const t = r.originalEvent;
    return t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey;
  },
  wT = function (r) {
    const t = r.map.getTargetElement(),
      i = t.getRootNode(),
      s = r.map.getOwnerDocument().activeElement;
    return i instanceof ShadowRoot ? i.host.contains(s) : t.contains(s);
  },
  r1 = function (r) {
    const t = r.map.getTargetElement(),
      i = t.getRootNode();
    return (i instanceof ShadowRoot ? i.host : t).hasAttribute("tabindex")
      ? wT(r)
      : !0;
  },
  AT = Na,
  l1 = function (r) {
    const t = r.originalEvent;
    return t.button == 0 && !(lx && Tp && t.ctrlKey);
  },
  a1 = function (r) {
    const t = r.originalEvent;
    return !t.altKey && !(t.metaKey || t.ctrlKey) && !t.shiftKey;
  },
  MT = function (r) {
    const t = r.originalEvent;
    return Tp ? t.metaKey : t.ctrlKey;
  },
  OT = function (r) {
    const t = r.originalEvent;
    return !t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey;
  },
  o1 = function (r) {
    const t = r.originalEvent,
      i = t.target.tagName;
    return (
      i !== "INPUT" &&
      i !== "SELECT" &&
      i !== "TEXTAREA" &&
      !t.target.isContentEditable
    );
  },
  Pf = function (r) {
    const t = r.originalEvent;
    return (
      Lt(t !== void 0, "mapBrowserEvent must originate from a pointer event"),
      t.pointerType == "mouse"
    );
  },
  DT = function (r) {
    const t = r.originalEvent;
    return (
      Lt(t !== void 0, "mapBrowserEvent must originate from a pointer event"),
      t.isPrimary && t.button === 0
    );
  };
class io extends eo {
  constructor(t) {
    (t = t || {}),
      super(t),
      t.handleDownEvent && (this.handleDownEvent = t.handleDownEvent),
      t.handleDragEvent && (this.handleDragEvent = t.handleDragEvent),
      t.handleMoveEvent && (this.handleMoveEvent = t.handleMoveEvent),
      t.handleUpEvent && (this.handleUpEvent = t.handleUpEvent),
      t.stopDown && (this.stopDown = t.stopDown),
      (this.handlingDownUpSequence = !1),
      (this.targetPointers = []);
  }
  getPointerCount() {
    return this.targetPointers.length;
  }
  handleDownEvent(t) {
    return !1;
  }
  handleDragEvent(t) {}
  handleEvent(t) {
    if (!t.originalEvent) return !0;
    let i = !1;
    if ((this.updateTrackedPointers_(t), this.handlingDownUpSequence)) {
      if (t.type == $t.POINTERDRAG)
        this.handleDragEvent(t), t.originalEvent.preventDefault();
      else if (t.type == $t.POINTERUP) {
        const s = this.handleUpEvent(t);
        this.handlingDownUpSequence = s && this.targetPointers.length > 0;
      }
    } else if (t.type == $t.POINTERDOWN) {
      const s = this.handleDownEvent(t);
      (this.handlingDownUpSequence = s), (i = this.stopDown(s));
    } else t.type == $t.POINTERMOVE && this.handleMoveEvent(t);
    return !i;
  }
  handleMoveEvent(t) {}
  handleUpEvent(t) {
    return !1;
  }
  stopDown(t) {
    return t;
  }
  updateTrackedPointers_(t) {
    t.activePointers && (this.targetPointers = t.activePointers);
  }
}
function tg(r) {
  const t = r.length;
  let i = 0,
    s = 0;
  for (let l = 0; l < t; l++) (i += r[l].clientX), (s += r[l].clientY);
  return { clientX: i / t, clientY: s / t };
}
class LT extends io {
  constructor(t) {
    super({ stopDown: Ku }),
      (t = t || {}),
      (this.kinetic_ = t.kinetic),
      (this.lastCentroid = null),
      this.lastPointersCount_,
      (this.panning_ = !1);
    const i = t.condition ? t.condition : cd(a1, DT);
    (this.condition_ = t.onFocusOnly ? cd(r1, i) : i), (this.noKinetic_ = !1);
  }
  handleDragEvent(t) {
    const i = t.map;
    this.panning_ || ((this.panning_ = !0), i.getView().beginInteraction());
    const s = this.targetPointers,
      l = i.getEventPixel(tg(s));
    if (s.length == this.lastPointersCount_) {
      if (
        (this.kinetic_ && this.kinetic_.update(l[0], l[1]), this.lastCentroid)
      ) {
        const o = [this.lastCentroid[0] - l[0], l[1] - this.lastCentroid[1]],
          h = t.map.getView();
        sS(o, h.getResolution()),
          vd(o, h.getRotation()),
          h.adjustCenterInternal(o);
      }
    } else this.kinetic_ && this.kinetic_.begin();
    (this.lastCentroid = l),
      (this.lastPointersCount_ = s.length),
      t.originalEvent.preventDefault();
  }
  handleUpEvent(t) {
    const i = t.map,
      s = i.getView();
    if (this.targetPointers.length === 0) {
      if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
        const l = this.kinetic_.getDistance(),
          o = this.kinetic_.getAngle(),
          c = s.getCenterInternal(),
          h = i.getPixelFromCoordinateInternal(c),
          d = i.getCoordinateFromPixelInternal([
            h[0] - l * Math.cos(o),
            h[1] - l * Math.sin(o),
          ]);
        s.animateInternal({
          center: s.getConstrainedCenter(d),
          duration: 500,
          easing: Cl,
        });
      }
      return this.panning_ && ((this.panning_ = !1), s.endInteraction()), !1;
    }
    return (
      this.kinetic_ && this.kinetic_.begin(), (this.lastCentroid = null), !0
    );
  }
  handleDownEvent(t) {
    if (this.targetPointers.length > 0 && this.condition_(t)) {
      const s = t.map.getView();
      return (
        (this.lastCentroid = null),
        s.getAnimating() && s.cancelAnimations(),
        this.kinetic_ && this.kinetic_.begin(),
        (this.noKinetic_ = this.targetPointers.length > 1),
        !0
      );
    }
    return !1;
  }
}
class IT extends io {
  constructor(t) {
    (t = t || {}),
      super({ stopDown: Ku }),
      (this.condition_ = t.condition ? t.condition : bT),
      (this.lastAngle_ = void 0),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250);
  }
  handleDragEvent(t) {
    if (!Pf(t)) return;
    const i = t.map,
      s = i.getView();
    if (s.getConstraints().rotation === Kd) return;
    const l = i.getSize(),
      o = t.pixel,
      c = Math.atan2(l[1] / 2 - o[1], o[0] - l[0] / 2);
    if (this.lastAngle_ !== void 0) {
      const h = c - this.lastAngle_;
      s.adjustRotationInternal(-h);
    }
    this.lastAngle_ = c;
  }
  handleUpEvent(t) {
    return Pf(t) ? (t.map.getView().endInteraction(this.duration_), !1) : !0;
  }
  handleDownEvent(t) {
    return Pf(t) && l1(t) && this.condition_(t)
      ? (t.map.getView().beginInteraction(), (this.lastAngle_ = void 0), !0)
      : !1;
  }
}
class zT extends Zu {
  constructor(t) {
    super(),
      (this.geometry_ = null),
      (this.element_ = document.createElement("div")),
      (this.element_.style.position = "absolute"),
      (this.element_.style.pointerEvents = "auto"),
      (this.element_.className = "ol-box " + t),
      (this.map_ = null),
      (this.startPixel_ = null),
      (this.endPixel_ = null);
  }
  disposeInternal() {
    this.setMap(null);
  }
  render_() {
    const t = this.startPixel_,
      i = this.endPixel_,
      s = "px",
      l = this.element_.style;
    (l.left = Math.min(t[0], i[0]) + s),
      (l.top = Math.min(t[1], i[1]) + s),
      (l.width = Math.abs(i[0] - t[0]) + s),
      (l.height = Math.abs(i[1] - t[1]) + s);
  }
  setMap(t) {
    if (this.map_) {
      this.map_.getOverlayContainer().removeChild(this.element_);
      const i = this.element_.style;
      (i.left = "inherit"),
        (i.top = "inherit"),
        (i.width = "inherit"),
        (i.height = "inherit");
    }
    (this.map_ = t),
      this.map_ && this.map_.getOverlayContainer().appendChild(this.element_);
  }
  setPixels(t, i) {
    (this.startPixel_ = t),
      (this.endPixel_ = i),
      this.createOrUpdateGeometry(),
      this.render_();
  }
  createOrUpdateGeometry() {
    if (!this.map_) return;
    const t = this.startPixel_,
      i = this.endPixel_,
      l = [t, [t[0], i[1]], i, [i[0], t[1]]].map(
        this.map_.getCoordinateFromPixelInternal,
        this.map_,
      );
    (l[4] = l[0].slice()),
      this.geometry_
        ? this.geometry_.setCoordinates([l])
        : (this.geometry_ = new Es([l]));
  }
  getGeometry() {
    return this.geometry_;
  }
}
const Jr = {
  BOXSTART: "boxstart",
  BOXDRAG: "boxdrag",
  BOXEND: "boxend",
  BOXCANCEL: "boxcancel",
};
class wa extends Gn {
  constructor(t, i, s) {
    super(t), (this.coordinate = i), (this.mapBrowserEvent = s);
  }
}
class NT extends io {
  constructor(t) {
    super(),
      this.on,
      this.once,
      this.un,
      (t = t ?? {}),
      (this.box_ = new zT(t.className || "ol-dragbox")),
      (this.minArea_ = t.minArea ?? 64),
      t.onBoxEnd && (this.onBoxEnd = t.onBoxEnd),
      (this.startPixel_ = null),
      (this.condition_ = t.condition ?? l1),
      (this.boxEndCondition_ =
        t.boxEndCondition ?? this.defaultBoxEndCondition);
  }
  defaultBoxEndCondition(t, i, s) {
    const l = s[0] - i[0],
      o = s[1] - i[1];
    return l * l + o * o >= this.minArea_;
  }
  getGeometry() {
    return this.box_.getGeometry();
  }
  handleDragEvent(t) {
    this.startPixel_ &&
      (this.box_.setPixels(this.startPixel_, t.pixel),
      this.dispatchEvent(new wa(Jr.BOXDRAG, t.coordinate, t)));
  }
  handleUpEvent(t) {
    if (!this.startPixel_) return !1;
    const i = this.boxEndCondition_(t, this.startPixel_, t.pixel);
    return (
      i && this.onBoxEnd(t),
      this.dispatchEvent(new wa(i ? Jr.BOXEND : Jr.BOXCANCEL, t.coordinate, t)),
      this.box_.setMap(null),
      (this.startPixel_ = null),
      !1
    );
  }
  handleDownEvent(t) {
    return this.condition_(t)
      ? ((this.startPixel_ = t.pixel),
        this.box_.setMap(t.map),
        this.box_.setPixels(this.startPixel_, this.startPixel_),
        this.dispatchEvent(new wa(Jr.BOXSTART, t.coordinate, t)),
        !0)
      : !1;
  }
  onBoxEnd(t) {}
  setActive(t) {
    t ||
      (this.box_.setMap(null),
      this.startPixel_ &&
        (this.dispatchEvent(new wa(Jr.BOXCANCEL, this.startPixel_, null)),
        (this.startPixel_ = null))),
      super.setActive(t);
  }
  setMap(t) {
    this.getMap() &&
      (this.box_.setMap(null),
      this.startPixel_ &&
        (this.dispatchEvent(new wa(Jr.BOXCANCEL, this.startPixel_, null)),
        (this.startPixel_ = null))),
      super.setMap(t);
  }
}
class GT extends NT {
  constructor(t) {
    t = t || {};
    const i = t.condition ? t.condition : OT;
    super({
      condition: i,
      className: t.className || "ol-dragzoom",
      minArea: t.minArea,
    }),
      (this.duration_ = t.duration !== void 0 ? t.duration : 200),
      (this.out_ = t.out !== void 0 ? t.out : !1);
  }
  onBoxEnd(t) {
    const s = this.getMap().getView();
    let l = this.getGeometry();
    if (this.out_) {
      const o = s.rotatedExtentForGeometry(l),
        c = s.getResolutionForExtentInternal(o),
        h = s.getResolution() / c;
      (l = l.clone()), l.scale(h * h);
    }
    s.fitInternal(l, { duration: this.duration_, easing: Cl });
  }
}
const Qs = {
  LEFT: "ArrowLeft",
  UP: "ArrowUp",
  RIGHT: "ArrowRight",
  DOWN: "ArrowDown",
};
class FT extends eo {
  constructor(t) {
    super(),
      (t = t || {}),
      (this.defaultCondition_ = function (i) {
        return a1(i) && o1(i);
      }),
      (this.condition_ =
        t.condition !== void 0 ? t.condition : this.defaultCondition_),
      (this.duration_ = t.duration !== void 0 ? t.duration : 100),
      (this.pixelDelta_ = t.pixelDelta !== void 0 ? t.pixelDelta : 128);
  }
  handleEvent(t) {
    let i = !1;
    if (t.type == pt.KEYDOWN) {
      const s = t.originalEvent,
        l = s.key;
      if (
        this.condition_(t) &&
        (l == Qs.DOWN || l == Qs.LEFT || l == Qs.RIGHT || l == Qs.UP)
      ) {
        const c = t.map.getView(),
          h = c.getResolution() * this.pixelDelta_;
        let d = 0,
          _ = 0;
        l == Qs.DOWN
          ? (_ = -h)
          : l == Qs.LEFT
            ? (d = -h)
            : l == Qs.RIGHT
              ? (d = h)
              : (_ = h);
        const m = [d, _];
        vd(m, c.getRotation()),
          CT(c, m, this.duration_),
          s.preventDefault(),
          (i = !0);
      }
    }
    return !i;
  }
}
class UT extends eo {
  constructor(t) {
    super(),
      (t = t || {}),
      (this.condition_ = t.condition
        ? t.condition
        : function (i) {
            return !MT(i) && o1(i);
          }),
      (this.delta_ = t.delta ? t.delta : 1),
      (this.duration_ = t.duration !== void 0 ? t.duration : 100);
  }
  handleEvent(t) {
    let i = !1;
    if (t.type == pt.KEYDOWN || t.type == pt.KEYPRESS) {
      const s = t.originalEvent,
        l = s.key;
      if (this.condition_(t) && (l === "+" || l === "-")) {
        const o = t.map,
          c = l === "+" ? this.delta_ : -this.delta_,
          h = o.getView();
        $d(h, c, void 0, this.duration_), s.preventDefault(), (i = !0);
      }
    }
    return !i;
  }
}
class XT extends eo {
  constructor(t) {
    (t = t || {}),
      super(t),
      (this.totalDelta_ = 0),
      (this.lastDelta_ = 0),
      (this.maxDelta_ = t.maxDelta !== void 0 ? t.maxDelta : 1),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250),
      (this.timeout_ = t.timeout !== void 0 ? t.timeout : 80),
      (this.useAnchor_ = t.useAnchor !== void 0 ? t.useAnchor : !0),
      (this.constrainResolution_ =
        t.constrainResolution !== void 0 ? t.constrainResolution : !1);
    const i = t.condition ? t.condition : AT;
    (this.condition_ = t.onFocusOnly ? cd(r1, i) : i),
      (this.lastAnchor_ = null),
      (this.startTime_ = void 0),
      this.timeoutId_,
      (this.mode_ = void 0),
      (this.trackpadEventGap_ = 400),
      this.trackpadTimeoutId_,
      (this.deltaPerZoom_ = 300);
  }
  endInteraction_() {
    this.trackpadTimeoutId_ = void 0;
    const t = this.getMap();
    if (!t) return;
    t.getView().endInteraction(
      void 0,
      this.lastDelta_ ? (this.lastDelta_ > 0 ? 1 : -1) : 0,
      this.lastAnchor_ ? t.getCoordinateFromPixel(this.lastAnchor_) : null,
    );
  }
  handleEvent(t) {
    if (!this.condition_(t) || t.type !== pt.WHEEL) return !0;
    const s = t.map,
      l = t.originalEvent;
    l.preventDefault(), this.useAnchor_ && (this.lastAnchor_ = t.pixel);
    let o;
    if (
      (t.type == pt.WHEEL &&
        ((o = l.deltaY),
        sx && l.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (o /= Cp),
        l.deltaMode === WheelEvent.DOM_DELTA_LINE && (o *= 40)),
      o === 0)
    )
      return !1;
    this.lastDelta_ = o;
    const c = Date.now();
    this.startTime_ === void 0 && (this.startTime_ = c),
      (!this.mode_ || c - this.startTime_ > this.trackpadEventGap_) &&
        (this.mode_ = Math.abs(o) < 4 ? "trackpad" : "wheel");
    const h = s.getView();
    if (
      this.mode_ === "trackpad" &&
      !(h.getConstrainResolution() || this.constrainResolution_)
    )
      return (
        this.trackpadTimeoutId_
          ? clearTimeout(this.trackpadTimeoutId_)
          : (h.getAnimating() && h.cancelAnimations(), h.beginInteraction()),
        (this.trackpadTimeoutId_ = setTimeout(
          this.endInteraction_.bind(this),
          this.timeout_,
        )),
        h.adjustZoom(
          -o / this.deltaPerZoom_,
          this.lastAnchor_ ? s.getCoordinateFromPixel(this.lastAnchor_) : null,
        ),
        (this.startTime_ = c),
        !1
      );
    this.totalDelta_ += o;
    const d = Math.max(this.timeout_ - (c - this.startTime_), 0);
    return (
      clearTimeout(this.timeoutId_),
      (this.timeoutId_ = setTimeout(this.handleWheelZoom_.bind(this, s), d)),
      !1
    );
  }
  handleWheelZoom_(t) {
    const i = t.getView();
    i.getAnimating() && i.cancelAnimations();
    let s =
      -se(
        this.totalDelta_,
        -this.maxDelta_ * this.deltaPerZoom_,
        this.maxDelta_ * this.deltaPerZoom_,
      ) / this.deltaPerZoom_;
    (i.getConstrainResolution() || this.constrainResolution_) &&
      (s = s ? (s > 0 ? 1 : -1) : 0),
      $d(
        i,
        s,
        this.lastAnchor_ ? t.getCoordinateFromPixel(this.lastAnchor_) : null,
        this.duration_,
      ),
      (this.mode_ = void 0),
      (this.totalDelta_ = 0),
      (this.lastAnchor_ = null),
      (this.startTime_ = void 0),
      (this.timeoutId_ = void 0);
  }
  setMouseAnchor(t) {
    (this.useAnchor_ = t), t || (this.lastAnchor_ = null);
  }
}
class YT extends io {
  constructor(t) {
    t = t || {};
    const i = t;
    i.stopDown || (i.stopDown = Ku),
      super(i),
      (this.anchor_ = null),
      (this.lastAngle_ = void 0),
      (this.rotating_ = !1),
      (this.rotationDelta_ = 0),
      (this.threshold_ = t.threshold !== void 0 ? t.threshold : 0.3),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250);
  }
  handleDragEvent(t) {
    let i = 0;
    const s = this.targetPointers[0],
      l = this.targetPointers[1],
      o = Math.atan2(l.clientY - s.clientY, l.clientX - s.clientX);
    if (this.lastAngle_ !== void 0) {
      const d = o - this.lastAngle_;
      (this.rotationDelta_ += d),
        !this.rotating_ &&
          Math.abs(this.rotationDelta_) > this.threshold_ &&
          (this.rotating_ = !0),
        (i = d);
    }
    this.lastAngle_ = o;
    const c = t.map,
      h = c.getView();
    h.getConstraints().rotation !== Kd &&
      ((this.anchor_ = c.getCoordinateFromPixelInternal(
        c.getEventPixel(tg(this.targetPointers)),
      )),
      this.rotating_ &&
        (c.render(), h.adjustRotationInternal(i, this.anchor_)));
  }
  handleUpEvent(t) {
    return this.targetPointers.length < 2
      ? (t.map.getView().endInteraction(this.duration_), !1)
      : !0;
  }
  handleDownEvent(t) {
    if (this.targetPointers.length >= 2) {
      const i = t.map;
      return (
        (this.anchor_ = null),
        (this.lastAngle_ = void 0),
        (this.rotating_ = !1),
        (this.rotationDelta_ = 0),
        this.handlingDownUpSequence || i.getView().beginInteraction(),
        !0
      );
    }
    return !1;
  }
}
class PT extends io {
  constructor(t) {
    t = t || {};
    const i = t;
    i.stopDown || (i.stopDown = Ku),
      super(i),
      (this.anchor_ = null),
      (this.duration_ = t.duration !== void 0 ? t.duration : 400),
      (this.lastDistance_ = void 0),
      (this.lastScaleDelta_ = 1);
  }
  handleDragEvent(t) {
    let i = 1;
    const s = this.targetPointers[0],
      l = this.targetPointers[1],
      o = s.clientX - l.clientX,
      c = s.clientY - l.clientY,
      h = Math.sqrt(o * o + c * c);
    this.lastDistance_ !== void 0 && (i = this.lastDistance_ / h),
      (this.lastDistance_ = h);
    const d = t.map,
      _ = d.getView();
    i != 1 && (this.lastScaleDelta_ = i),
      (this.anchor_ = d.getCoordinateFromPixelInternal(
        d.getEventPixel(tg(this.targetPointers)),
      )),
      d.render(),
      _.adjustResolutionInternal(i, this.anchor_);
  }
  handleUpEvent(t) {
    if (this.targetPointers.length < 2) {
      const s = t.map.getView(),
        l = this.lastScaleDelta_ > 1 ? 1 : -1;
      return s.endInteraction(this.duration_, l), !1;
    }
    return !0;
  }
  handleDownEvent(t) {
    if (this.targetPointers.length >= 2) {
      const i = t.map;
      return (
        (this.anchor_ = null),
        (this.lastDistance_ = void 0),
        (this.lastScaleDelta_ = 1),
        this.handlingDownUpSequence || i.getView().beginInteraction(),
        !0
      );
    }
    return !1;
  }
}
function kT(r) {
  r = r || {};
  const t = new $i(),
    i = new _T(-0.005, 0.05, 100);
  return (
    (r.altShiftDragRotate !== void 0 ? r.altShiftDragRotate : !0) &&
      t.push(new IT()),
    (r.doubleClickZoom !== void 0 ? r.doubleClickZoom : !0) &&
      t.push(new RT({ delta: r.zoomDelta, duration: r.zoomDuration })),
    (r.dragPan !== void 0 ? r.dragPan : !0) &&
      t.push(new LT({ onFocusOnly: r.onFocusOnly, kinetic: i })),
    (r.pinchRotate !== void 0 ? r.pinchRotate : !0) && t.push(new YT()),
    (r.pinchZoom !== void 0 ? r.pinchZoom : !0) &&
      t.push(new PT({ duration: r.zoomDuration })),
    (r.keyboard !== void 0 ? r.keyboard : !0) &&
      (t.push(new FT()),
      t.push(new UT({ delta: r.zoomDelta, duration: r.zoomDuration }))),
    (r.mouseWheelZoom !== void 0 ? r.mouseWheelZoom : !0) &&
      t.push(new XT({ onFocusOnly: r.onFocusOnly, duration: r.zoomDuration })),
    (r.shiftDragZoom !== void 0 ? r.shiftDragZoom : !0) &&
      t.push(new GT({ duration: r.zoomDuration })),
    t
  );
}
class ds extends Gn {
  constructor(t, i) {
    super(t), (this.layer = i);
  }
}
const kf = { LAYERS: "layers" };
class Rl extends i1 {
  constructor(t) {
    t = t || {};
    const i = Object.assign({}, t);
    delete i.layers;
    let s = t.layers;
    super(i),
      this.on,
      this.once,
      this.un,
      (this.layersListenerKeys_ = []),
      (this.listenerKeys_ = {}),
      this.addChangeListener(kf.LAYERS, this.handleLayersChanged_),
      s
        ? Array.isArray(s)
          ? (s = new $i(s.slice(), { unique: !0 }))
          : Lt(
              typeof s.getArray == "function",
              "Expected `layers` to be an array or a `Collection`",
            )
        : (s = new $i(void 0, { unique: !0 })),
      this.setLayers(s);
  }
  handleLayerChange_() {
    this.changed();
  }
  handleLayersChanged_() {
    this.layersListenerKeys_.forEach(jt), (this.layersListenerKeys_.length = 0);
    const t = this.getLayers();
    this.layersListenerKeys_.push(
      Mt(t, Be.ADD, this.handleLayersAdd_, this),
      Mt(t, Be.REMOVE, this.handleLayersRemove_, this),
    );
    for (const s in this.listenerKeys_) this.listenerKeys_[s].forEach(jt);
    Ka(this.listenerKeys_);
    const i = t.getArray();
    for (let s = 0, l = i.length; s < l; s++) {
      const o = i[s];
      this.registerLayerListeners_(o),
        this.dispatchEvent(new ds("addlayer", o));
    }
    this.changed();
  }
  registerLayerListeners_(t) {
    const i = [
      Mt(t, fl.PROPERTYCHANGE, this.handleLayerChange_, this),
      Mt(t, pt.CHANGE, this.handleLayerChange_, this),
    ];
    t instanceof Rl &&
      i.push(
        Mt(t, "addlayer", this.handleLayerGroupAdd_, this),
        Mt(t, "removelayer", this.handleLayerGroupRemove_, this),
      ),
      (this.listenerKeys_[zt(t)] = i);
  }
  handleLayerGroupAdd_(t) {
    this.dispatchEvent(new ds("addlayer", t.layer));
  }
  handleLayerGroupRemove_(t) {
    this.dispatchEvent(new ds("removelayer", t.layer));
  }
  handleLayersAdd_(t) {
    const i = t.element;
    this.registerLayerListeners_(i),
      this.dispatchEvent(new ds("addlayer", i)),
      this.changed();
  }
  handleLayersRemove_(t) {
    const i = t.element,
      s = zt(i);
    this.listenerKeys_[s].forEach(jt),
      delete this.listenerKeys_[s],
      this.dispatchEvent(new ds("removelayer", i)),
      this.changed();
  }
  getLayers() {
    return this.get(kf.LAYERS);
  }
  setLayers(t) {
    const i = this.getLayers();
    if (i) {
      const s = i.getArray();
      for (let l = 0, o = s.length; l < o; ++l)
        this.dispatchEvent(new ds("removelayer", s[l]));
    }
    this.set(kf.LAYERS, t);
  }
  getLayersArray(t) {
    return (
      (t = t !== void 0 ? t : []),
      this.getLayers().forEach(function (i) {
        i.getLayersArray(t);
      }),
      t
    );
  }
  getLayerStatesArray(t) {
    const i = t !== void 0 ? t : [],
      s = i.length;
    this.getLayers().forEach(function (c) {
      c.getLayerStatesArray(i);
    });
    const l = this.getLayerState();
    let o = l.zIndex;
    !t && l.zIndex === void 0 && (o = 0);
    for (let c = s, h = i.length; c < h; c++) {
      const d = i[c];
      (d.opacity *= l.opacity),
        (d.visible = d.visible && l.visible),
        (d.maxResolution = Math.min(d.maxResolution, l.maxResolution)),
        (d.minResolution = Math.max(d.minResolution, l.minResolution)),
        (d.minZoom = Math.max(d.minZoom, l.minZoom)),
        (d.maxZoom = Math.min(d.maxZoom, l.maxZoom)),
        l.extent !== void 0 &&
          (d.extent !== void 0
            ? (d.extent = nr(d.extent, l.extent))
            : (d.extent = l.extent)),
        d.zIndex === void 0 && (d.zIndex = o);
    }
    return i;
  }
  getSourceState() {
    return "ready";
  }
}
class BT extends Zu {
  constructor(t) {
    super(), (this.map_ = t);
  }
  dispatchRenderEvent(t, i) {
    _t();
  }
  calculateMatrices2D(t) {
    const i = t.viewState,
      s = t.coordinateToPixelTransform,
      l = t.pixelToCoordinateTransform;
    zn(
      s,
      t.size[0] / 2,
      t.size[1] / 2,
      1 / i.resolution,
      -1 / i.resolution,
      -i.rotation,
      -i.center[0],
      -i.center[1],
    ),
      cp(l, s);
  }
  forEachFeatureAtCoordinate(t, i, s, l, o, c, h, d) {
    let _;
    const m = i.viewState;
    function y(I, D, j, Q) {
      return o.call(c, D, I ? j : null, Q);
    }
    const v = m.projection,
      E = np(t.slice(), v),
      x = [[0, 0]];
    if (v.canWrapX() && l) {
      const I = v.getExtent(),
        D = Ft(I);
      x.push([-D, 0], [D, 0]);
    }
    const R = i.layerStatesArray,
      b = R.length,
      w = [],
      M = [];
    for (let I = 0; I < x.length; I++)
      for (let D = b - 1; D >= 0; --D) {
        const j = R[D],
          Q = j.layer;
        if (Q.hasRenderer() && qd(j, m) && h.call(d, Q)) {
          const Z = Q.getRenderer(),
            F = Q.getSource();
          if (Z && F) {
            const q = F.getWrapX() ? E : t,
              rt = y.bind(null, j.managed);
            (M[0] = q[0] + x[I][0]),
              (M[1] = q[1] + x[I][1]),
              (_ = Z.forEachFeatureAtCoordinate(M, i, s, rt, w));
          }
          if (_) return _;
        }
      }
    if (w.length === 0) return;
    const G = 1 / w.length;
    return (
      w.forEach((I, D) => (I.distanceSq += D * G)),
      w.sort((I, D) => I.distanceSq - D.distanceSq),
      w.some((I) => (_ = I.callback(I.feature, I.layer, I.geometry))),
      _
    );
  }
  hasFeatureAtCoordinate(t, i, s, l, o, c) {
    return (
      this.forEachFeatureAtCoordinate(t, i, s, l, Na, this, o, c) !== void 0
    );
  }
  getMap() {
    return this.map_;
  }
  renderFrame(t) {
    _t();
  }
  scheduleExpireIconCache(t) {
    Si.canExpireCache() && t.postRenderFunctions.push(HT);
  }
}
function HT(r, t) {
  Si.expire();
}
class jT extends BT {
  constructor(t) {
    super(t),
      (this.fontChangeListenerKey_ = Mt(
        wn,
        fl.PROPERTYCHANGE,
        t.redrawText,
        t,
      )),
      (this.element_ = document.createElement("div"));
    const i = this.element_.style;
    (i.position = "absolute"),
      (i.width = "100%"),
      (i.height = "100%"),
      (i.zIndex = "0"),
      (this.element_.className = lc + " ol-layers");
    const s = t.getViewport();
    s.insertBefore(this.element_, s.firstChild || null),
      (this.children_ = []),
      (this.renderedVisible_ = !0);
  }
  dispatchRenderEvent(t, i) {
    const s = this.getMap();
    if (s.hasListener(t)) {
      const l = new Zp(t, void 0, i);
      s.dispatchEvent(l);
    }
  }
  disposeInternal() {
    jt(this.fontChangeListenerKey_),
      this.element_.remove(),
      super.disposeInternal();
  }
  renderFrame(t) {
    if (!t) {
      this.renderedVisible_ &&
        ((this.element_.style.display = "none"), (this.renderedVisible_ = !1));
      return;
    }
    this.calculateMatrices2D(t), this.dispatchRenderEvent(Ei.PRECOMPOSE, t);
    const i = t.layerStatesArray.sort((h, d) => h.zIndex - d.zIndex);
    i.some((h) => h.layer instanceof n1 && h.layer.getDeclutter()) &&
      (t.declutter = {});
    const l = t.viewState;
    this.children_.length = 0;
    const o = [];
    let c = null;
    for (let h = 0, d = i.length; h < d; ++h) {
      const _ = i[h];
      t.layerIndex = h;
      const m = _.layer,
        y = m.getSourceState();
      if (!qd(_, l) || (y != "ready" && y != "undefined")) {
        m.unrender();
        continue;
      }
      const v = m.render(t, c);
      v && (v !== c && (this.children_.push(v), (c = v)), o.push(_));
    }
    this.declutter(t, o),
      _x(this.element_, this.children_),
      this.dispatchRenderEvent(Ei.POSTCOMPOSE, t),
      this.renderedVisible_ ||
        ((this.element_.style.display = ""), (this.renderedVisible_ = !0)),
      this.scheduleExpireIconCache(t);
  }
  declutter(t, i) {
    if (t.declutter) {
      for (let s = i.length - 1; s >= 0; --s) {
        const l = i[s],
          o = l.layer;
        o.getDeclutter() && o.renderDeclutter(t, l);
      }
      i.forEach((s) => s.layer.renderDeferred(t));
    }
  }
}
function u1(r) {
  if (r instanceof dc) {
    r.setMapInternal(null);
    return;
  }
  r instanceof Rl && r.getLayers().forEach(u1);
}
function c1(r, t) {
  if (r instanceof dc) {
    r.setMapInternal(t);
    return;
  }
  if (r instanceof Rl) {
    const i = r.getLayers().getArray();
    for (let s = 0, l = i.length; s < l; ++s) c1(i[s], t);
  }
}
let ZT = class extends Ui {
  constructor(t) {
    super(), (t = t || {}), this.on, this.once, this.un;
    const i = KT(t);
    (this.renderComplete_ = !1),
      (this.loaded_ = !0),
      (this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this)),
      (this.maxTilesLoading_ =
        t.maxTilesLoading !== void 0 ? t.maxTilesLoading : 16),
      (this.pixelRatio_ = t.pixelRatio !== void 0 ? t.pixelRatio : Cp),
      this.postRenderTimeoutHandle_,
      this.animationDelayKey_,
      (this.animationDelay_ = this.animationDelay_.bind(this)),
      (this.coordinateToPixelTransform_ = Gi()),
      (this.pixelToCoordinateTransform_ = Gi()),
      (this.frameIndex_ = 0),
      (this.frameState_ = null),
      (this.previousExtent_ = null),
      (this.viewPropertyListenerKey_ = null),
      (this.viewChangeListenerKey_ = null),
      (this.layerGroupPropertyListenerKeys_ = null),
      (this.viewport_ = document.createElement("div")),
      (this.viewport_.className =
        "ol-viewport" + ("ontouchstart" in window ? " ol-touch" : "")),
      (this.viewport_.style.position = "relative"),
      (this.viewport_.style.overflow = "hidden"),
      (this.viewport_.style.width = "100%"),
      (this.viewport_.style.height = "100%"),
      (this.overlayContainer_ = document.createElement("div")),
      (this.overlayContainer_.style.position = "absolute"),
      (this.overlayContainer_.style.zIndex = "0"),
      (this.overlayContainer_.style.width = "100%"),
      (this.overlayContainer_.style.height = "100%"),
      (this.overlayContainer_.style.pointerEvents = "none"),
      (this.overlayContainer_.className = "ol-overlaycontainer"),
      this.viewport_.appendChild(this.overlayContainer_),
      (this.overlayContainerStopEvent_ = document.createElement("div")),
      (this.overlayContainerStopEvent_.style.position = "absolute"),
      (this.overlayContainerStopEvent_.style.zIndex = "0"),
      (this.overlayContainerStopEvent_.style.width = "100%"),
      (this.overlayContainerStopEvent_.style.height = "100%"),
      (this.overlayContainerStopEvent_.style.pointerEvents = "none"),
      (this.overlayContainerStopEvent_.className =
        "ol-overlaycontainer-stopevent"),
      this.viewport_.appendChild(this.overlayContainerStopEvent_),
      (this.mapBrowserEventHandler_ = null),
      (this.moveTolerance_ = t.moveTolerance),
      (this.keyboardEventTarget_ = i.keyboardEventTarget),
      (this.targetChangeHandlerKeys_ = null),
      (this.targetElement_ = null),
      (this.resizeObserver_ = new ResizeObserver(() => this.updateSize())),
      (this.controls = i.controls || TT()),
      (this.interactions = i.interactions || kT({ onFocusOnly: !0 })),
      (this.overlays_ = i.overlays),
      (this.overlayIdIndex_ = {}),
      (this.renderer_ = null),
      (this.postRenderFunctions_ = []),
      (this.tileQueue_ = new pT(
        this.getTilePriority.bind(this),
        this.handleTileChange_.bind(this),
      )),
      this.addChangeListener(Me.LAYERGROUP, this.handleLayerGroupChanged_),
      this.addChangeListener(Me.VIEW, this.handleViewChanged_),
      this.addChangeListener(Me.SIZE, this.handleSizeChanged_),
      this.addChangeListener(Me.TARGET, this.handleTargetChanged_),
      this.setProperties(i.values);
    const s = this;
    t.view &&
      !(t.view instanceof Ji) &&
      t.view.then(function (l) {
        s.setView(new Ji(l));
      }),
      this.controls.addEventListener(Be.ADD, (l) => {
        l.element.setMap(this);
      }),
      this.controls.addEventListener(Be.REMOVE, (l) => {
        l.element.setMap(null);
      }),
      this.interactions.addEventListener(Be.ADD, (l) => {
        l.element.setMap(this);
      }),
      this.interactions.addEventListener(Be.REMOVE, (l) => {
        l.element.setMap(null);
      }),
      this.overlays_.addEventListener(Be.ADD, (l) => {
        this.addOverlayInternal_(l.element);
      }),
      this.overlays_.addEventListener(Be.REMOVE, (l) => {
        const o = l.element.getId();
        o !== void 0 && delete this.overlayIdIndex_[o.toString()],
          l.element.setMap(null);
      }),
      this.controls.forEach((l) => {
        l.setMap(this);
      }),
      this.interactions.forEach((l) => {
        l.setMap(this);
      }),
      this.overlays_.forEach(this.addOverlayInternal_.bind(this));
  }
  addControl(t) {
    this.getControls().push(t);
  }
  addInteraction(t) {
    this.getInteractions().push(t);
  }
  addLayer(t) {
    this.getLayerGroup().getLayers().push(t);
  }
  handleLayerAdd_(t) {
    c1(t.layer, this);
  }
  addOverlay(t) {
    this.getOverlays().push(t);
  }
  addOverlayInternal_(t) {
    const i = t.getId();
    i !== void 0 && (this.overlayIdIndex_[i.toString()] = t), t.setMap(this);
  }
  disposeInternal() {
    this.controls.clear(),
      this.interactions.clear(),
      this.overlays_.clear(),
      this.resizeObserver_.disconnect(),
      this.setTarget(null),
      super.disposeInternal();
  }
  forEachFeatureAtPixel(t, i, s) {
    if (!this.frameState_ || !this.renderer_) return;
    const l = this.getCoordinateFromPixelInternal(t);
    s = s !== void 0 ? s : {};
    const o = s.hitTolerance !== void 0 ? s.hitTolerance : 0,
      c = s.layerFilter !== void 0 ? s.layerFilter : Na,
      h = s.checkWrapped !== !1;
    return this.renderer_.forEachFeatureAtCoordinate(
      l,
      this.frameState_,
      o,
      h,
      i,
      null,
      c,
      null,
    );
  }
  getFeaturesAtPixel(t, i) {
    const s = [];
    return (
      this.forEachFeatureAtPixel(
        t,
        function (l) {
          s.push(l);
        },
        i,
      ),
      s
    );
  }
  getAllLayers() {
    const t = [];
    function i(s) {
      s.forEach(function (l) {
        l instanceof Rl ? i(l.getLayers()) : t.push(l);
      });
    }
    return i(this.getLayers()), t;
  }
  hasFeatureAtPixel(t, i) {
    if (!this.frameState_ || !this.renderer_) return !1;
    const s = this.getCoordinateFromPixelInternal(t);
    i = i !== void 0 ? i : {};
    const l = i.layerFilter !== void 0 ? i.layerFilter : Na,
      o = i.hitTolerance !== void 0 ? i.hitTolerance : 0,
      c = i.checkWrapped !== !1;
    return this.renderer_.hasFeatureAtCoordinate(
      s,
      this.frameState_,
      o,
      c,
      l,
      null,
    );
  }
  getEventCoordinate(t) {
    return this.getCoordinateFromPixel(this.getEventPixel(t));
  }
  getEventCoordinateInternal(t) {
    return this.getCoordinateFromPixelInternal(this.getEventPixel(t));
  }
  getEventPixel(t) {
    const s = this.viewport_.getBoundingClientRect(),
      l = this.getSize(),
      o = s.width / l[0],
      c = s.height / l[1],
      h = "changedTouches" in t ? t.changedTouches[0] : t;
    return [(h.clientX - s.left) / o, (h.clientY - s.top) / c];
  }
  getTarget() {
    return this.get(Me.TARGET);
  }
  getTargetElement() {
    return this.targetElement_;
  }
  getCoordinateFromPixel(t) {
    return ed(
      this.getCoordinateFromPixelInternal(t),
      this.getView().getProjection(),
    );
  }
  getCoordinateFromPixelInternal(t) {
    const i = this.frameState_;
    return i ? _e(i.pixelToCoordinateTransform, t.slice()) : null;
  }
  getControls() {
    return this.controls;
  }
  getOverlays() {
    return this.overlays_;
  }
  getOverlayById(t) {
    const i = this.overlayIdIndex_[t.toString()];
    return i !== void 0 ? i : null;
  }
  getInteractions() {
    return this.interactions;
  }
  getLayerGroup() {
    return this.get(Me.LAYERGROUP);
  }
  setLayers(t) {
    const i = this.getLayerGroup();
    if (t instanceof $i) {
      i.setLayers(t);
      return;
    }
    const s = i.getLayers();
    s.clear(), s.extend(t);
  }
  getLayers() {
    return this.getLayerGroup().getLayers();
  }
  getLoadingOrNotReady() {
    const t = this.getLayerGroup().getLayerStatesArray();
    for (let i = 0, s = t.length; i < s; ++i) {
      const l = t[i];
      if (!l.visible) continue;
      const o = l.layer.getRenderer();
      if (o && !o.ready) return !0;
      const c = l.layer.getSource();
      if (c && c.loading) return !0;
    }
    return !1;
  }
  getPixelFromCoordinate(t) {
    const i = bn(t, this.getView().getProjection());
    return this.getPixelFromCoordinateInternal(i);
  }
  getPixelFromCoordinateInternal(t) {
    const i = this.frameState_;
    return i ? _e(i.coordinateToPixelTransform, t.slice(0, 2)) : null;
  }
  getRenderer() {
    return this.renderer_;
  }
  getSize() {
    return this.get(Me.SIZE);
  }
  getView() {
    return this.get(Me.VIEW);
  }
  getViewport() {
    return this.viewport_;
  }
  getOverlayContainer() {
    return this.overlayContainer_;
  }
  getOverlayContainerStopEvent() {
    return this.overlayContainerStopEvent_;
  }
  getOwnerDocument() {
    const t = this.getTargetElement();
    return t ? t.ownerDocument : document;
  }
  getTilePriority(t, i, s, l) {
    return vT(this.frameState_, t, i, s, l);
  }
  handleBrowserEvent(t, i) {
    i = i || t.type;
    const s = new fs(i, this, t);
    this.handleMapBrowserEvent(s);
  }
  handleMapBrowserEvent(t) {
    if (!this.frameState_) return;
    const i = t.originalEvent,
      s = i.type;
    if (s === ud.POINTERDOWN || s === pt.WHEEL || s === pt.KEYDOWN) {
      const l = this.getOwnerDocument(),
        o = this.viewport_.getRootNode ? this.viewport_.getRootNode() : l,
        c = i.target,
        h =
          o instanceof ShadowRoot
            ? o.host === c
              ? o.host.ownerDocument
              : o
            : o === l
              ? l.documentElement
              : o;
      if (this.overlayContainerStopEvent_.contains(c) || !h.contains(c)) return;
    }
    if (((t.frameState = this.frameState_), this.dispatchEvent(t) !== !1)) {
      const l = this.getInteractions().getArray().slice();
      for (let o = l.length - 1; o >= 0; o--) {
        const c = l[o];
        if (c.getMap() !== this || !c.getActive() || !this.getTargetElement())
          continue;
        if (!c.handleEvent(t) || t.propagationStopped) break;
      }
    }
  }
  handlePostRender() {
    const t = this.frameState_,
      i = this.tileQueue_;
    if (!i.isEmpty()) {
      let l = this.maxTilesLoading_,
        o = l;
      if (t) {
        const c = t.viewHints;
        if (c[Oe.ANIMATING] || c[Oe.INTERACTING]) {
          const h = Date.now() - t.time > 8;
          (l = h ? 0 : 8), (o = h ? 0 : 2);
        }
      }
      i.getTilesLoading() < l && (i.reprioritize(), i.loadMoreTiles(l, o));
    }
    t &&
      this.renderer_ &&
      !t.animate &&
      (this.renderComplete_
        ? (this.hasListener(Ei.RENDERCOMPLETE) &&
            this.renderer_.dispatchRenderEvent(Ei.RENDERCOMPLETE, t),
          this.loaded_ === !1 &&
            ((this.loaded_ = !0),
            this.dispatchEvent(new sl(An.LOADEND, this, t))))
        : this.loaded_ === !0 &&
          ((this.loaded_ = !1),
          this.dispatchEvent(new sl(An.LOADSTART, this, t))));
    const s = this.postRenderFunctions_;
    if (t) for (let l = 0, o = s.length; l < o; ++l) s[l](this, t);
    s.length = 0;
  }
  handleSizeChanged_() {
    this.getView() &&
      !this.getView().getAnimating() &&
      this.getView().resolveConstraints(0),
      this.render();
  }
  handleTargetChanged_() {
    if (this.mapBrowserEventHandler_) {
      for (let s = 0, l = this.targetChangeHandlerKeys_.length; s < l; ++s)
        jt(this.targetChangeHandlerKeys_[s]);
      (this.targetChangeHandlerKeys_ = null),
        this.viewport_.removeEventListener(
          pt.CONTEXTMENU,
          this.boundHandleBrowserEvent_,
        ),
        this.viewport_.removeEventListener(
          pt.WHEEL,
          this.boundHandleBrowserEvent_,
        ),
        this.mapBrowserEventHandler_.dispose(),
        (this.mapBrowserEventHandler_ = null),
        this.viewport_.remove();
    }
    if (this.targetElement_) {
      this.resizeObserver_.unobserve(this.targetElement_);
      const s = this.targetElement_.getRootNode();
      s instanceof ShadowRoot && this.resizeObserver_.unobserve(s.host),
        this.setSize(void 0);
    }
    const t = this.getTarget(),
      i = typeof t == "string" ? document.getElementById(t) : t;
    if (((this.targetElement_ = i), !i))
      this.renderer_ &&
        (clearTimeout(this.postRenderTimeoutHandle_),
        (this.postRenderTimeoutHandle_ = void 0),
        (this.postRenderFunctions_.length = 0),
        this.renderer_.dispose(),
        (this.renderer_ = null)),
        this.animationDelayKey_ &&
          (cancelAnimationFrame(this.animationDelayKey_),
          (this.animationDelayKey_ = void 0));
    else {
      i.appendChild(this.viewport_),
        this.renderer_ || (this.renderer_ = new jT(this)),
        (this.mapBrowserEventHandler_ = new mT(this, this.moveTolerance_));
      for (const o in $t)
        this.mapBrowserEventHandler_.addEventListener(
          $t[o],
          this.handleMapBrowserEvent.bind(this),
        );
      this.viewport_.addEventListener(
        pt.CONTEXTMENU,
        this.boundHandleBrowserEvent_,
        !1,
      ),
        this.viewport_.addEventListener(
          pt.WHEEL,
          this.boundHandleBrowserEvent_,
          wp ? { passive: !1 } : !1,
        );
      let s;
      if (this.keyboardEventTarget_) s = this.keyboardEventTarget_;
      else {
        const o = i.getRootNode();
        s = o instanceof ShadowRoot ? o.host : i;
      }
      this.targetChangeHandlerKeys_ = [
        Mt(s, pt.KEYDOWN, this.handleBrowserEvent, this),
        Mt(s, pt.KEYPRESS, this.handleBrowserEvent, this),
      ];
      const l = i.getRootNode();
      l instanceof ShadowRoot && this.resizeObserver_.observe(l.host),
        this.resizeObserver_.observe(i);
    }
    this.updateSize();
  }
  handleTileChange_() {
    this.render();
  }
  handleViewPropertyChanged_() {
    this.render();
  }
  handleViewChanged_() {
    this.viewPropertyListenerKey_ &&
      (jt(this.viewPropertyListenerKey_),
      (this.viewPropertyListenerKey_ = null)),
      this.viewChangeListenerKey_ &&
        (jt(this.viewChangeListenerKey_), (this.viewChangeListenerKey_ = null));
    const t = this.getView();
    t &&
      (this.updateViewportSize_(this.getSize()),
      (this.viewPropertyListenerKey_ = Mt(
        t,
        fl.PROPERTYCHANGE,
        this.handleViewPropertyChanged_,
        this,
      )),
      (this.viewChangeListenerKey_ = Mt(
        t,
        pt.CHANGE,
        this.handleViewPropertyChanged_,
        this,
      )),
      t.resolveConstraints(0)),
      this.render();
  }
  handleLayerGroupChanged_() {
    this.layerGroupPropertyListenerKeys_ &&
      (this.layerGroupPropertyListenerKeys_.forEach(jt),
      (this.layerGroupPropertyListenerKeys_ = null));
    const t = this.getLayerGroup();
    t &&
      (this.handleLayerAdd_(new ds("addlayer", t)),
      (this.layerGroupPropertyListenerKeys_ = [
        Mt(t, fl.PROPERTYCHANGE, this.render, this),
        Mt(t, pt.CHANGE, this.render, this),
        Mt(t, "addlayer", this.handleLayerAdd_, this),
        Mt(t, "removelayer", this.handleLayerRemove_, this),
      ])),
      this.render();
  }
  isRendered() {
    return !!this.frameState_;
  }
  animationDelay_() {
    (this.animationDelayKey_ = void 0), this.renderFrame_(Date.now());
  }
  renderSync() {
    this.animationDelayKey_ && cancelAnimationFrame(this.animationDelayKey_),
      this.animationDelay_();
  }
  redrawText() {
    const t = this.getLayerGroup().getLayerStatesArray();
    for (let i = 0, s = t.length; i < s; ++i) {
      const l = t[i].layer;
      l.hasRenderer() && l.getRenderer().handleFontsChanged();
    }
  }
  render() {
    this.renderer_ &&
      this.animationDelayKey_ === void 0 &&
      (this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_));
  }
  removeControl(t) {
    return this.getControls().remove(t);
  }
  removeInteraction(t) {
    return this.getInteractions().remove(t);
  }
  removeLayer(t) {
    return this.getLayerGroup().getLayers().remove(t);
  }
  handleLayerRemove_(t) {
    u1(t.layer);
  }
  removeOverlay(t) {
    return this.getOverlays().remove(t);
  }
  renderFrame_(t) {
    const i = this.getSize(),
      s = this.getView(),
      l = this.frameState_;
    let o = null;
    if (i !== void 0 && xy(i) && s && s.isDef()) {
      const c = s.getHints(
          this.frameState_ ? this.frameState_.viewHints : void 0,
        ),
        h = s.getState();
      if (
        ((o = {
          animate: !1,
          coordinateToPixelTransform: this.coordinateToPixelTransform_,
          declutter: null,
          extent: Wf(h.center, h.resolution, h.rotation, i),
          index: this.frameIndex_++,
          layerIndex: 0,
          layerStatesArray: this.getLayerGroup().getLayerStatesArray(),
          pixelRatio: this.pixelRatio_,
          pixelToCoordinateTransform: this.pixelToCoordinateTransform_,
          postRenderFunctions: [],
          size: i,
          tileQueue: this.tileQueue_,
          time: t,
          usedTiles: {},
          viewState: h,
          viewHints: c,
          wantedTiles: {},
          mapId: zt(this),
          renderTargets: {},
        }),
        h.nextCenter && h.nextResolution)
      ) {
        const d = isNaN(h.nextRotation) ? h.rotation : h.nextRotation;
        o.nextExtent = Wf(h.nextCenter, h.nextResolution, d, i);
      }
    }
    (this.frameState_ = o),
      this.renderer_.renderFrame(o),
      o &&
        (o.animate && this.render(),
        Array.prototype.push.apply(
          this.postRenderFunctions_,
          o.postRenderFunctions,
        ),
        l &&
          (!this.previousExtent_ ||
            (!qa(this.previousExtent_) &&
              !Ga(o.extent, this.previousExtent_))) &&
          (this.dispatchEvent(new sl(An.MOVESTART, this, l)),
          (this.previousExtent_ = xl(this.previousExtent_))),
        this.previousExtent_ &&
          !o.viewHints[Oe.ANIMATING] &&
          !o.viewHints[Oe.INTERACTING] &&
          !Ga(o.extent, this.previousExtent_) &&
          (this.dispatchEvent(new sl(An.MOVEEND, this, o)),
          Vy(o.extent, this.previousExtent_))),
      this.dispatchEvent(new sl(An.POSTRENDER, this, o)),
      (this.renderComplete_ =
        (this.hasListener(An.LOADSTART) ||
          this.hasListener(An.LOADEND) ||
          this.hasListener(Ei.RENDERCOMPLETE)) &&
        !this.tileQueue_.getTilesLoading() &&
        !this.tileQueue_.getCount() &&
        !this.getLoadingOrNotReady()),
      this.postRenderTimeoutHandle_ ||
        (this.postRenderTimeoutHandle_ = setTimeout(() => {
          (this.postRenderTimeoutHandle_ = void 0), this.handlePostRender();
        }, 0));
  }
  setLayerGroup(t) {
    const i = this.getLayerGroup();
    i && this.handleLayerRemove_(new ds("removelayer", i)),
      this.set(Me.LAYERGROUP, t);
  }
  setSize(t) {
    this.set(Me.SIZE, t);
  }
  setTarget(t) {
    this.set(Me.TARGET, t);
  }
  setView(t) {
    if (!t || t instanceof Ji) {
      this.set(Me.VIEW, t);
      return;
    }
    this.set(Me.VIEW, new Ji());
    const i = this;
    t.then(function (s) {
      i.setView(new Ji(s));
    });
  }
  updateSize() {
    const t = this.getTargetElement();
    let i;
    if (t) {
      const l = getComputedStyle(t),
        o =
          t.offsetWidth -
          parseFloat(l.borderLeftWidth) -
          parseFloat(l.paddingLeft) -
          parseFloat(l.paddingRight) -
          parseFloat(l.borderRightWidth),
        c =
          t.offsetHeight -
          parseFloat(l.borderTopWidth) -
          parseFloat(l.paddingTop) -
          parseFloat(l.paddingBottom) -
          parseFloat(l.borderBottomWidth);
      !isNaN(o) &&
        !isNaN(c) &&
        ((i = [Math.max(0, o), Math.max(0, c)]),
        !xy(i) &&
          (t.offsetWidth || t.offsetHeight || t.getClientRects().length) &&
          ip(
            "No map visible because the map container's width or height are 0.",
          ));
    }
    const s = this.getSize();
    i && (!s || !Ts(i, s)) && (this.setSize(i), this.updateViewportSize_(i));
  }
  updateViewportSize_(t) {
    const i = this.getView();
    i && i.setViewportSize(t);
  }
};
function KT(r) {
  let t = null;
  r.keyboardEventTarget !== void 0 &&
    (t =
      typeof r.keyboardEventTarget == "string"
        ? document.getElementById(r.keyboardEventTarget)
        : r.keyboardEventTarget);
  const i = {},
    s =
      r.layers && typeof r.layers.getLayers == "function"
        ? r.layers
        : new Rl({ layers: r.layers });
  (i[Me.LAYERGROUP] = s),
    (i[Me.TARGET] = r.target),
    (i[Me.VIEW] = r.view instanceof Ji ? r.view : new Ji());
  let l;
  r.controls !== void 0 &&
    (Array.isArray(r.controls)
      ? (l = new $i(r.controls.slice()))
      : (Lt(
          typeof r.controls.getArray == "function",
          "Expected `controls` to be an array or an `ol/Collection.js`",
        ),
        (l = r.controls)));
  let o;
  r.interactions !== void 0 &&
    (Array.isArray(r.interactions)
      ? (o = new $i(r.interactions.slice()))
      : (Lt(
          typeof r.interactions.getArray == "function",
          "Expected `interactions` to be an array or an `ol/Collection.js`",
        ),
        (o = r.interactions)));
  let c;
  return (
    r.overlays !== void 0
      ? Array.isArray(r.overlays)
        ? (c = new $i(r.overlays.slice()))
        : (Lt(
            typeof r.overlays.getArray == "function",
            "Expected `overlays` to be an array or an `ol/Collection.js`",
          ),
          (c = r.overlays))
      : (c = new $i()),
    {
      controls: l,
      interactions: o,
      keyboardEventTarget: t,
      overlays: c,
      values: i,
    }
  );
}
const Ae = {
  ELEMENT: "element",
  MAP: "map",
  OFFSET: "offset",
  POSITION: "position",
  POSITIONING: "positioning",
};
class VT extends Ui {
  constructor(t) {
    super(),
      this.on,
      this.once,
      this.un,
      (this.options = t),
      (this.id = t.id),
      (this.insertFirst = t.insertFirst !== void 0 ? t.insertFirst : !0),
      (this.stopEvent = t.stopEvent !== void 0 ? t.stopEvent : !0),
      (this.element = document.createElement("div")),
      (this.element.className =
        t.className !== void 0 ? t.className : "ol-overlay-container " + Sx),
      (this.element.style.position = "absolute"),
      (this.element.style.pointerEvents = "auto"),
      (this.autoPan = t.autoPan === !0 ? {} : t.autoPan || void 0),
      (this.rendered = { transform_: "", visible: !0 }),
      (this.mapPostrenderListenerKey = null),
      this.addChangeListener(Ae.ELEMENT, this.handleElementChanged),
      this.addChangeListener(Ae.MAP, this.handleMapChanged),
      this.addChangeListener(Ae.OFFSET, this.handleOffsetChanged),
      this.addChangeListener(Ae.POSITION, this.handlePositionChanged),
      this.addChangeListener(Ae.POSITIONING, this.handlePositioningChanged),
      t.element !== void 0 && this.setElement(t.element),
      this.setOffset(t.offset !== void 0 ? t.offset : [0, 0]),
      this.setPositioning(t.positioning || "top-left"),
      t.position !== void 0 && this.setPosition(t.position);
  }
  getElement() {
    return this.get(Ae.ELEMENT);
  }
  getId() {
    return this.id;
  }
  getMap() {
    return this.get(Ae.MAP) || null;
  }
  getOffset() {
    return this.get(Ae.OFFSET);
  }
  getPosition() {
    return this.get(Ae.POSITION);
  }
  getPositioning() {
    return this.get(Ae.POSITIONING);
  }
  handleElementChanged() {
    Op(this.element);
    const t = this.getElement();
    t && this.element.appendChild(t);
  }
  handleMapChanged() {
    var i;
    this.mapPostrenderListenerKey &&
      ((i = this.element) == null || i.remove(),
      jt(this.mapPostrenderListenerKey),
      (this.mapPostrenderListenerKey = null));
    const t = this.getMap();
    if (t) {
      (this.mapPostrenderListenerKey = Mt(t, An.POSTRENDER, this.render, this)),
        this.updatePixelPosition();
      const s = this.stopEvent
        ? t.getOverlayContainerStopEvent()
        : t.getOverlayContainer();
      this.insertFirst
        ? s.insertBefore(this.element, s.childNodes[0] || null)
        : s.appendChild(this.element),
        this.performAutoPan();
    }
  }
  render() {
    this.updatePixelPosition();
  }
  handleOffsetChanged() {
    this.updatePixelPosition();
  }
  handlePositionChanged() {
    this.updatePixelPosition(), this.performAutoPan();
  }
  handlePositioningChanged() {
    this.updatePixelPosition();
  }
  setElement(t) {
    this.set(Ae.ELEMENT, t);
  }
  setMap(t) {
    this.set(Ae.MAP, t);
  }
  setOffset(t) {
    this.set(Ae.OFFSET, t);
  }
  setPosition(t) {
    this.set(Ae.POSITION, t);
  }
  performAutoPan() {
    this.autoPan && this.panIntoView(this.autoPan);
  }
  panIntoView(t) {
    const i = this.getMap();
    if (!i || !i.getTargetElement() || !this.get(Ae.POSITION)) return;
    const s = this.getRect(i.getTargetElement(), i.getSize()),
      l = this.getElement(),
      o = this.getRect(l, [dx(l), gx(l)]);
    t = t || {};
    const c = t.margin === void 0 ? 20 : t.margin;
    if (!rl(s, o)) {
      const h = o[0] - s[0],
        d = s[2] - o[2],
        _ = o[1] - s[1],
        m = s[3] - o[3],
        y = [0, 0];
      if (
        (h < 0 ? (y[0] = h - c) : d < 0 && (y[0] = Math.abs(d) + c),
        _ < 0 ? (y[1] = _ - c) : m < 0 && (y[1] = Math.abs(m) + c),
        y[0] !== 0 || y[1] !== 0)
      ) {
        const v = i.getView().getCenterInternal(),
          E = i.getPixelFromCoordinateInternal(v);
        if (!E) return;
        const x = [E[0] + y[0], E[1] + y[1]],
          R = t.animation || {};
        i.getView().animateInternal({
          center: i.getCoordinateFromPixelInternal(x),
          duration: R.duration,
          easing: R.easing,
        });
      }
    }
  }
  getRect(t, i) {
    const s = t.getBoundingClientRect(),
      l = s.left + window.pageXOffset,
      o = s.top + window.pageYOffset;
    return [l, o, l + i[0], o + i[1]];
  }
  setPositioning(t) {
    this.set(Ae.POSITIONING, t);
  }
  setVisible(t) {
    this.rendered.visible !== t &&
      ((this.element.style.display = t ? "" : "none"),
      (this.rendered.visible = t));
  }
  updatePixelPosition() {
    const t = this.getMap(),
      i = this.getPosition();
    if (!t || !t.isRendered() || !i) {
      this.setVisible(!1);
      return;
    }
    const s = t.getPixelFromCoordinate(i),
      l = t.getSize();
    this.updateRenderedPosition(s, l);
  }
  updateRenderedPosition(t, i) {
    const s = this.element.style,
      l = this.getOffset(),
      o = this.getPositioning();
    this.setVisible(!0);
    const c = Math.round(t[0] + l[0]) + "px",
      h = Math.round(t[1] + l[1]) + "px";
    let d = "0%",
      _ = "0%";
    o == "bottom-right" || o == "center-right" || o == "top-right"
      ? (d = "-100%")
      : (o == "bottom-center" || o == "center-center" || o == "top-center") &&
        (d = "-50%"),
      o == "bottom-left" || o == "bottom-center" || o == "bottom-right"
        ? (_ = "-100%")
        : (o == "center-left" || o == "center-center" || o == "center-right") &&
          (_ = "-50%");
    const m = `translate(${d}, ${_}) translate(${c}, ${h})`;
    this.rendered.transform_ != m &&
      ((this.rendered.transform_ = m), (s.transform = m));
  }
  getOptions() {
    return this.options;
  }
}
class eg {
  constructor(t, i, s, l) {
    (this.minX = t), (this.maxX = i), (this.minY = s), (this.maxY = l);
  }
  contains(t) {
    return this.containsXY(t[1], t[2]);
  }
  containsTileRange(t) {
    return (
      this.minX <= t.minX &&
      t.maxX <= this.maxX &&
      this.minY <= t.minY &&
      t.maxY <= this.maxY
    );
  }
  containsXY(t, i) {
    return this.minX <= t && t <= this.maxX && this.minY <= i && i <= this.maxY;
  }
  equals(t) {
    return (
      this.minX == t.minX &&
      this.minY == t.minY &&
      this.maxX == t.maxX &&
      this.maxY == t.maxY
    );
  }
  extend(t) {
    t.minX < this.minX && (this.minX = t.minX),
      t.maxX > this.maxX && (this.maxX = t.maxX),
      t.minY < this.minY && (this.minY = t.minY),
      t.maxY > this.maxY && (this.maxY = t.maxY);
  }
  getHeight() {
    return this.maxY - this.minY + 1;
  }
  getSize() {
    return [this.getWidth(), this.getHeight()];
  }
  getWidth() {
    return this.maxX - this.minX + 1;
  }
  intersects(t) {
    return (
      this.minX <= t.maxX &&
      this.maxX >= t.minX &&
      this.minY <= t.maxY &&
      this.maxY >= t.minY
    );
  }
}
function $r(r, t, i, s, l) {
  return l !== void 0
    ? ((l.minX = r), (l.maxX = t), (l.minY = i), (l.maxY = s), l)
    : new eg(r, t, i, s);
}
function hd(r) {
  return r instanceof Image ||
    r instanceof HTMLCanvasElement ||
    r instanceof HTMLVideoElement ||
    r instanceof ImageBitmap
    ? r
    : null;
}
const qT = new Error("disposed"),
  WT = [256, 256];
class ky extends Qd {
  constructor(t) {
    const i = ft.IDLE;
    super(t.tileCoord, i, {
      transition: t.transition,
      interpolate: t.interpolate,
    }),
      (this.loader_ = t.loader),
      (this.data_ = null),
      (this.error_ = null),
      (this.size_ = t.size || null),
      (this.controller_ = t.controller || null);
  }
  getSize() {
    if (this.size_) return this.size_;
    const t = hd(this.data_);
    return t ? [t.width, t.height] : WT;
  }
  getData() {
    return this.data_;
  }
  getError() {
    return this.error_;
  }
  load() {
    if (this.state !== ft.IDLE && this.state !== ft.ERROR) return;
    (this.state = ft.LOADING), this.changed();
    const t = this;
    this.loader_()
      .then(function (i) {
        (t.data_ = i), (t.state = ft.LOADED), t.changed();
      })
      .catch(function (i) {
        (t.error_ = i), (t.state = ft.ERROR), t.changed();
      });
  }
  disposeInternal() {
    this.controller_ && (this.controller_.abort(qT), (this.controller_ = null)),
      super.disposeInternal();
  }
}
let Bf;
const hl = [];
function By(r, t, i, s, l) {
  r.beginPath(),
    r.moveTo(0, 0),
    r.lineTo(t, i),
    r.lineTo(s, l),
    r.closePath(),
    r.save(),
    r.clip(),
    r.fillRect(0, 0, Math.max(t, s) + 1, Math.max(i, l)),
    r.restore();
}
function Hf(r, t) {
  return (
    Math.abs(r[t * 4] - 210) > 2 || Math.abs(r[t * 4 + 3] - 0.75 * 255) > 2
  );
}
function QT() {
  if (Bf === void 0) {
    const r = me(6, 6, hl);
    (r.globalCompositeOperation = "lighter"),
      (r.fillStyle = "rgba(210, 0, 0, 0.75)"),
      By(r, 4, 5, 4, 0),
      By(r, 4, 5, 0, 5);
    const t = r.getImageData(0, 0, 3, 3).data;
    (Bf = Hf(t, 0) || Hf(t, 4) || Hf(t, 8)), rc(r), hl.push(r.canvas);
  }
  return Bf;
}
function Hy(r, t, i, s) {
  const l = ec(i, t, r);
  let o = ey(t, s, i);
  const c = t.getMetersPerUnit();
  c !== void 0 && (o *= c);
  const h = r.getMetersPerUnit();
  h !== void 0 && (o /= h);
  const d = r.getExtent();
  if (!d || gl(d, l)) {
    const _ = ey(r, o, l) / o;
    isFinite(_) && _ > 0 && (o /= _);
  }
  return o;
}
function JT(r, t, i, s) {
  const l = vs(i);
  let o = Hy(r, t, l, s);
  return (
    (!isFinite(o) || o <= 0) &&
      Jy(i, function (c) {
        return (o = Hy(r, t, c, s)), isFinite(o) && o > 0;
      }),
    o
  );
}
function $T(r, t, i, s, l, o, c, h, d, _, m, y, v, E) {
  const x = me(Math.round(i * r), Math.round(i * t), hl);
  if ((y || (x.imageSmoothingEnabled = !1), d.length === 0)) return x.canvas;
  x.scale(i, i);
  function R(D) {
    return Math.round(D * i) / i;
  }
  x.globalCompositeOperation = "lighter";
  const b = Ti();
  d.forEach(function (D, j, Q) {
    Wy(b, D.extent);
  });
  let w;
  const M = i / s,
    G = (y ? 1 : 1 + Math.pow(2, -24)) / M;
  (w = me(Math.round(Ft(b) * M), Math.round(Ue(b) * M), hl)),
    y || (w.imageSmoothingEnabled = !1),
    d.forEach(function (D, j, Q) {
      if (D.image.width > 0 && D.image.height > 0) {
        if (D.clipExtent) {
          w.save();
          const it = (D.clipExtent[0] - b[0]) * M,
            ot = -(D.clipExtent[3] - b[3]) * M,
            st = Ft(D.clipExtent) * M,
            nt = Ue(D.clipExtent) * M;
          w.rect(
            y ? it : Math.round(it),
            y ? ot : Math.round(ot),
            y ? st : Math.round(it + st) - Math.round(it),
            y ? nt : Math.round(ot + nt) - Math.round(ot),
          ),
            w.clip();
        }
        const Z = (D.extent[0] - b[0]) * M,
          F = -(D.extent[3] - b[3]) * M,
          q = Ft(D.extent) * M,
          rt = Ue(D.extent) * M;
        w.drawImage(
          D.image,
          _,
          _,
          D.image.width - 2 * _,
          D.image.height - 2 * _,
          y ? Z : Math.round(Z),
          y ? F : Math.round(F),
          y ? q : Math.round(Z + q) - Math.round(Z),
          y ? rt : Math.round(F + rt) - Math.round(F),
        ),
          D.clipExtent && w.restore();
      }
    });
  const I = or(c);
  return (
    h.getTriangles().forEach(function (D, j, Q) {
      const Z = D.source,
        F = D.target;
      let q = Z[0][0],
        rt = Z[0][1],
        it = Z[1][0],
        ot = Z[1][1],
        st = Z[2][0],
        nt = Z[2][1];
      const Y = R((F[0][0] - I[0]) / o),
        V = R(-(F[0][1] - I[1]) / o),
        W = R((F[1][0] - I[0]) / o),
        $ = R(-(F[1][1] - I[1]) / o),
        C = R((F[2][0] - I[0]) / o),
        X = R(-(F[2][1] - I[1]) / o),
        U = q,
        tt = rt;
      (q = 0), (rt = 0), (it -= U), (ot -= tt), (st -= U), (nt -= tt);
      const J = [
          [it, ot, 0, 0, W - Y],
          [st, nt, 0, 0, C - Y],
          [0, 0, it, ot, $ - V],
          [0, 0, st, nt, X - V],
        ],
        lt = eS(J);
      if (!lt) return;
      if ((x.save(), x.beginPath(), QT() || !y)) {
        x.moveTo(W, $);
        const Nt = 4,
          mt = Y - W,
          Ut = V - $;
        for (let vt = 0; vt < Nt; vt++)
          x.lineTo(W + R(((vt + 1) * mt) / Nt), $ + R((vt * Ut) / (Nt - 1))),
            vt != Nt - 1 &&
              x.lineTo(
                W + R(((vt + 1) * mt) / Nt),
                $ + R(((vt + 1) * Ut) / (Nt - 1)),
              );
        x.lineTo(C, X);
      } else x.moveTo(W, $), x.lineTo(Y, V), x.lineTo(C, X);
      x.clip(),
        x.transform(lt[0], lt[2], lt[1], lt[3], Y, V),
        x.translate(b[0] - U, b[3] - tt);
      let ct;
      if (w) (ct = w.canvas), x.scale(G, -G);
      else {
        const Nt = d[0],
          mt = Nt.extent;
        (ct = Nt.image), x.scale(Ft(mt) / ct.width, -Ue(mt) / ct.height);
      }
      x.drawImage(ct, 0, 0), x.restore();
    }),
    w && (rc(w), hl.push(w.canvas)),
    m &&
      (x.save(),
      (x.globalCompositeOperation = "source-over"),
      (x.strokeStyle = "black"),
      (x.lineWidth = 1),
      h.getTriangles().forEach(function (D, j, Q) {
        const Z = D.target,
          F = (Z[0][0] - I[0]) / o,
          q = -(Z[0][1] - I[1]) / o,
          rt = (Z[1][0] - I[0]) / o,
          it = -(Z[1][1] - I[1]) / o,
          ot = (Z[2][0] - I[0]) / o,
          st = -(Z[2][1] - I[1]) / o;
        x.beginPath(),
          x.moveTo(rt, it),
          x.lineTo(F, q),
          x.lineTo(ot, st),
          x.closePath(),
          x.stroke();
      }),
      x.restore()),
    x.canvas
  );
}
const tC = 10,
  jy = 0.25;
class eC {
  constructor(t, i, s, l, o, c, h) {
    (this.sourceProj_ = t), (this.targetProj_ = i);
    let d = {};
    const _ = h
      ? IS((G) => _e(h, ec(G, this.targetProj_, this.sourceProj_)))
      : ml(this.targetProj_, this.sourceProj_);
    (this.transformInv_ = function (G) {
      const I = G[0] + "/" + G[1];
      return d[I] || (d[I] = _(G)), d[I];
    }),
      (this.maxSourceExtent_ = l),
      (this.errorThresholdSquared_ = o * o),
      (this.triangles_ = []),
      (this.wrapsXInSource_ = !1),
      (this.canWrapXInSource_ =
        this.sourceProj_.canWrapX() &&
        !!l &&
        !!this.sourceProj_.getExtent() &&
        Ft(l) >= Ft(this.sourceProj_.getExtent())),
      (this.sourceWorldWidth_ = this.sourceProj_.getExtent()
        ? Ft(this.sourceProj_.getExtent())
        : null),
      (this.targetWorldWidth_ = this.targetProj_.getExtent()
        ? Ft(this.targetProj_.getExtent())
        : null);
    const m = or(s),
      y = Ju(s),
      v = Qu(s),
      E = Wu(s),
      x = this.transformInv_(m),
      R = this.transformInv_(y),
      b = this.transformInv_(v),
      w = this.transformInv_(E),
      M =
        tC +
        (c
          ? Math.max(0, Math.ceil(Math.log2(qf(s) / (c * c * 256 * 256))))
          : 0);
    if ((this.addQuad_(m, y, v, E, x, R, b, w, M), this.wrapsXInSource_)) {
      let G = 1 / 0;
      this.triangles_.forEach(function (I, D, j) {
        G = Math.min(G, I.source[0][0], I.source[1][0], I.source[2][0]);
      }),
        this.triangles_.forEach((I) => {
          if (
            Math.max(I.source[0][0], I.source[1][0], I.source[2][0]) - G >
            this.sourceWorldWidth_ / 2
          ) {
            const D = [
              [I.source[0][0], I.source[0][1]],
              [I.source[1][0], I.source[1][1]],
              [I.source[2][0], I.source[2][1]],
            ];
            D[0][0] - G > this.sourceWorldWidth_ / 2 &&
              (D[0][0] -= this.sourceWorldWidth_),
              D[1][0] - G > this.sourceWorldWidth_ / 2 &&
                (D[1][0] -= this.sourceWorldWidth_),
              D[2][0] - G > this.sourceWorldWidth_ / 2 &&
                (D[2][0] -= this.sourceWorldWidth_);
            const j = Math.min(D[0][0], D[1][0], D[2][0]);
            Math.max(D[0][0], D[1][0], D[2][0]) - j <
              this.sourceWorldWidth_ / 2 && (I.source = D);
          }
        });
    }
    d = {};
  }
  addTriangle_(t, i, s, l, o, c) {
    this.triangles_.push({ source: [l, o, c], target: [t, i, s] });
  }
  addQuad_(t, i, s, l, o, c, h, d, _) {
    const m = j0([o, c, h, d]),
      y = this.sourceWorldWidth_ ? Ft(m) / this.sourceWorldWidth_ : null,
      v = this.sourceWorldWidth_,
      E = this.sourceProj_.canWrapX() && y > 0.5 && y < 1;
    let x = !1;
    if (_ > 0) {
      if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
        const b = j0([t, i, s, l]);
        x = Ft(b) / this.targetWorldWidth_ > jy || x;
      }
      !E && this.sourceProj_.isGlobal() && y && (x = y > jy || x);
    }
    if (
      !x &&
      this.maxSourceExtent_ &&
      isFinite(m[0]) &&
      isFinite(m[1]) &&
      isFinite(m[2]) &&
      isFinite(m[3]) &&
      !Ze(m, this.maxSourceExtent_)
    )
      return;
    let R = 0;
    if (
      !x &&
      (!isFinite(o[0]) ||
        !isFinite(o[1]) ||
        !isFinite(c[0]) ||
        !isFinite(c[1]) ||
        !isFinite(h[0]) ||
        !isFinite(h[1]) ||
        !isFinite(d[0]) ||
        !isFinite(d[1]))
    ) {
      if (_ > 0) x = !0;
      else if (
        ((R =
          (!isFinite(o[0]) || !isFinite(o[1]) ? 8 : 0) +
          (!isFinite(c[0]) || !isFinite(c[1]) ? 4 : 0) +
          (!isFinite(h[0]) || !isFinite(h[1]) ? 2 : 0) +
          (!isFinite(d[0]) || !isFinite(d[1]) ? 1 : 0)),
        R != 1 && R != 2 && R != 4 && R != 8)
      )
        return;
    }
    if (_ > 0) {
      if (!x) {
        const b = [(t[0] + s[0]) / 2, (t[1] + s[1]) / 2],
          w = this.transformInv_(b);
        let M;
        E
          ? (M = (ol(o[0], v) + ol(h[0], v)) / 2 - ol(w[0], v))
          : (M = (o[0] + h[0]) / 2 - w[0]);
        const G = (o[1] + h[1]) / 2 - w[1];
        x = M * M + G * G > this.errorThresholdSquared_;
      }
      if (x) {
        if (Math.abs(t[0] - s[0]) <= Math.abs(t[1] - s[1])) {
          const b = [(i[0] + s[0]) / 2, (i[1] + s[1]) / 2],
            w = this.transformInv_(b),
            M = [(l[0] + t[0]) / 2, (l[1] + t[1]) / 2],
            G = this.transformInv_(M);
          this.addQuad_(t, i, b, M, o, c, w, G, _ - 1),
            this.addQuad_(M, b, s, l, G, w, h, d, _ - 1);
        } else {
          const b = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2],
            w = this.transformInv_(b),
            M = [(s[0] + l[0]) / 2, (s[1] + l[1]) / 2],
            G = this.transformInv_(M);
          this.addQuad_(t, b, M, l, o, w, G, d, _ - 1),
            this.addQuad_(b, i, s, M, w, c, h, G, _ - 1);
        }
        return;
      }
    }
    if (E) {
      if (!this.canWrapXInSource_) return;
      this.wrapsXInSource_ = !0;
    }
    (R & 11) == 0 && this.addTriangle_(t, s, l, o, h, d),
      (R & 14) == 0 && this.addTriangle_(t, s, i, o, h, c),
      R &&
        ((R & 13) == 0 && this.addTriangle_(i, l, t, c, d, o),
        (R & 7) == 0 && this.addTriangle_(i, l, s, c, d, h));
  }
  calculateSourceExtent() {
    const t = Ti();
    return (
      this.triangles_.forEach(function (i, s, l) {
        const o = i.source;
        za(t, o[0]), za(t, o[1]), za(t, o[2]);
      }),
      t
    );
  }
  getTriangles() {
    return this.triangles_;
  }
}
const iC = 0.5;
class h1 extends Qd {
  constructor(t, i, s, l, o, c, h, d, _, m, y, v) {
    super(o, ft.IDLE, v),
      (this.renderEdges_ = y !== void 0 ? y : !1),
      (this.pixelRatio_ = h),
      (this.gutter_ = d),
      (this.canvas_ = null),
      (this.sourceTileGrid_ = i),
      (this.targetTileGrid_ = l),
      (this.wrappedTileCoord_ = c || o),
      (this.sourceTiles_ = []),
      (this.sourcesListenerKeys_ = null),
      (this.sourceZ_ = 0),
      (this.clipExtent_ = t.canWrapX() ? t.getExtent() : void 0);
    const E = l.getTileCoordExtent(this.wrappedTileCoord_),
      x = this.targetTileGrid_.getExtent();
    let R = this.sourceTileGrid_.getExtent();
    const b = x ? nr(E, x) : E;
    if (qf(b) === 0) {
      this.state = ft.EMPTY;
      return;
    }
    const w = t.getExtent();
    w && (R ? (R = nr(R, w)) : (R = w));
    const M = l.getResolution(this.wrappedTileCoord_[0]),
      G = JT(t, s, b, M);
    if (!isFinite(G) || G <= 0) {
      this.state = ft.EMPTY;
      return;
    }
    const I = m !== void 0 ? m : iC;
    if (
      ((this.triangulation_ = new eC(t, s, b, R, G * I, M)),
      this.triangulation_.getTriangles().length === 0)
    ) {
      this.state = ft.EMPTY;
      return;
    }
    this.sourceZ_ = i.getZForResolution(G);
    let D = this.triangulation_.calculateSourceExtent();
    if (
      (R &&
        (t.canWrapX()
          ? ((D[1] = se(D[1], R[1], R[3])), (D[3] = se(D[3], R[1], R[3])))
          : (D = nr(D, R))),
      !qf(D))
    )
      this.state = ft.EMPTY;
    else {
      let j = 0,
        Q = 0;
      t.canWrapX() && ((j = Ft(w)), (Q = Math.floor((D[0] - w[0]) / j))),
        ep(D.slice(), t, !0).forEach((F) => {
          const q = i.getTileRangeForExtentAndZ(F, this.sourceZ_);
          for (let rt = q.minX; rt <= q.maxX; rt++)
            for (let it = q.minY; it <= q.maxY; it++) {
              const ot = _(this.sourceZ_, rt, it, h);
              if (ot) {
                const st = Q * j;
                this.sourceTiles_.push({ tile: ot, offset: st });
              }
            }
          ++Q;
        }),
        this.sourceTiles_.length === 0 && (this.state = ft.EMPTY);
    }
  }
  getImage() {
    return this.canvas_;
  }
  reproject_() {
    const t = [];
    if (
      (this.sourceTiles_.forEach((i) => {
        var l;
        const s = i.tile;
        if (s && s.getState() == ft.LOADED) {
          const o = this.sourceTileGrid_.getTileCoordExtent(s.tileCoord);
          (o[0] += i.offset), (o[2] += i.offset);
          const c = (l = this.clipExtent_) == null ? void 0 : l.slice();
          c && ((c[0] += i.offset), (c[2] += i.offset)),
            t.push({ extent: o, clipExtent: c, image: s.getImage() });
        }
      }),
      (this.sourceTiles_.length = 0),
      t.length === 0)
    )
      this.state = ft.ERROR;
    else {
      const i = this.wrappedTileCoord_[0],
        s = this.targetTileGrid_.getTileSize(i),
        l = typeof s == "number" ? s : s[0],
        o = typeof s == "number" ? s : s[1],
        c = this.targetTileGrid_.getResolution(i),
        h = this.sourceTileGrid_.getResolution(this.sourceZ_),
        d = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);
      (this.canvas_ = $T(
        l,
        o,
        this.pixelRatio_,
        h,
        this.sourceTileGrid_.getExtent(),
        c,
        d,
        this.triangulation_,
        t,
        this.gutter_,
        this.renderEdges_,
        this.interpolate,
      )),
        (this.state = ft.LOADED);
    }
    this.changed();
  }
  load() {
    if (this.state == ft.IDLE) {
      (this.state = ft.LOADING), this.changed();
      let t = 0;
      (this.sourcesListenerKeys_ = []),
        this.sourceTiles_.forEach(({ tile: i }) => {
          const s = i.getState();
          if (s == ft.IDLE || s == ft.LOADING) {
            t++;
            const l = Mt(i, pt.CHANGE, (o) => {
              const c = i.getState();
              (c == ft.LOADED || c == ft.ERROR || c == ft.EMPTY) &&
                (jt(l),
                t--,
                t === 0 && (this.unlistenSources_(), this.reproject_()));
            });
            this.sourcesListenerKeys_.push(l);
          }
        }),
        t === 0
          ? setTimeout(this.reproject_.bind(this), 0)
          : this.sourceTiles_.forEach(function ({ tile: i }, s, l) {
              i.getState() == ft.IDLE && i.load();
            });
    }
  }
  unlistenSources_() {
    this.sourcesListenerKeys_.forEach(jt), (this.sourcesListenerKeys_ = null);
  }
  release() {
    this.canvas_ &&
      (rc(this.canvas_.getContext("2d")),
      hl.push(this.canvas_),
      (this.canvas_ = null)),
      super.release();
  }
}
class nC {
  constructor(t) {
    (this.highWaterMark = t !== void 0 ? t : 2048),
      (this.count_ = 0),
      (this.entries_ = {}),
      (this.oldest_ = null),
      (this.newest_ = null);
  }
  deleteOldest() {
    const t = this.pop();
    t instanceof Zu && t.dispose();
  }
  canExpireCache() {
    return this.highWaterMark > 0 && this.getCount() > this.highWaterMark;
  }
  expireCache(t) {
    for (; this.canExpireCache(); ) this.deleteOldest();
  }
  clear() {
    for (; this.oldest_; ) this.deleteOldest();
  }
  containsKey(t) {
    return this.entries_.hasOwnProperty(t);
  }
  forEach(t) {
    let i = this.oldest_;
    for (; i; ) t(i.value_, i.key_, this), (i = i.newer);
  }
  get(t, i) {
    const s = this.entries_[t];
    return (
      Lt(
        s !== void 0,
        "Tried to get a value for a key that does not exist in the cache",
      ),
      s === this.newest_ ||
        (s === this.oldest_
          ? ((this.oldest_ = this.oldest_.newer), (this.oldest_.older = null))
          : ((s.newer.older = s.older), (s.older.newer = s.newer)),
        (s.newer = null),
        (s.older = this.newest_),
        (this.newest_.newer = s),
        (this.newest_ = s)),
      s.value_
    );
  }
  remove(t) {
    const i = this.entries_[t];
    return (
      Lt(
        i !== void 0,
        "Tried to get a value for a key that does not exist in the cache",
      ),
      i === this.newest_
        ? ((this.newest_ = i.older),
          this.newest_ && (this.newest_.newer = null))
        : i === this.oldest_
          ? ((this.oldest_ = i.newer),
            this.oldest_ && (this.oldest_.older = null))
          : ((i.newer.older = i.older), (i.older.newer = i.newer)),
      delete this.entries_[t],
      --this.count_,
      i.value_
    );
  }
  getCount() {
    return this.count_;
  }
  getKeys() {
    const t = new Array(this.count_);
    let i = 0,
      s;
    for (s = this.newest_; s; s = s.older) t[i++] = s.key_;
    return t;
  }
  getValues() {
    const t = new Array(this.count_);
    let i = 0,
      s;
    for (s = this.newest_; s; s = s.older) t[i++] = s.value_;
    return t;
  }
  peekLast() {
    return this.oldest_.value_;
  }
  peekLastKey() {
    return this.oldest_.key_;
  }
  peekFirstKey() {
    return this.newest_.key_;
  }
  peek(t) {
    var i;
    return (i = this.entries_[t]) == null ? void 0 : i.value_;
  }
  pop() {
    const t = this.oldest_;
    return (
      delete this.entries_[t.key_],
      t.newer && (t.newer.older = null),
      (this.oldest_ = t.newer),
      this.oldest_ || (this.newest_ = null),
      --this.count_,
      t.value_
    );
  }
  replace(t, i) {
    this.get(t), (this.entries_[t].value_ = i);
  }
  set(t, i) {
    Lt(
      !(t in this.entries_),
      "Tried to set a value for a key that is used already",
    );
    const s = { key_: t, newer: null, older: this.newest_, value_: i };
    this.newest_ ? (this.newest_.newer = s) : (this.oldest_ = s),
      (this.newest_ = s),
      (this.entries_[t] = s),
      ++this.count_;
  }
  setSize(t) {
    this.highWaterMark = t;
  }
}
function ju(r, t, i, s) {
  return s !== void 0 ? ((s[0] = r), (s[1] = t), (s[2] = i), s) : [r, t, i];
}
function sC(r, t, i) {
  return r + "/" + t + "/" + i;
}
function rC(r) {
  return lC(r[0], r[1], r[2]);
}
function lC(r, t, i) {
  return (t << r) + i;
}
function aC(r, t) {
  const i = r[0],
    s = r[1],
    l = r[2];
  if (t.getMinZoom() > i || i > t.getMaxZoom()) return !1;
  const o = t.getFullTileRange(i);
  return o ? o.containsXY(s, l) : !0;
}
function jf(r, t, i, s) {
  return `${r},${sC(t, i, s)}`;
}
function Zf(r, t, i) {
  if (!(i in r)) return (r[i] = new Set([t])), !0;
  const s = r[i],
    l = s.has(t);
  return l || s.add(t), !l;
}
function oC(r, t, i) {
  const s = r[i];
  return s ? s.delete(t) : !1;
}
function Zy(r, t) {
  const i = r.layerStatesArray[r.layerIndex];
  i.extent && (t = nr(t, gs(i.extent, r.viewState.projection)));
  const s = i.layer.getRenderSource();
  if (!s.getWrapX()) {
    const l = s.getTileGridForProjection(r.viewState.projection).getExtent();
    l && (t = nr(t, l));
  }
  return t;
}
class uC extends Kp {
  constructor(t, i) {
    super(t),
      (i = i || {}),
      (this.extentChanged = !0),
      (this.renderComplete = !1),
      (this.renderedExtent_ = null),
      this.renderedPixelRatio,
      (this.renderedProjection = null),
      this.renderedRevision_,
      (this.renderedTiles = []),
      this.renderedSourceKey_,
      this.renderedSourceRevision_,
      (this.tempExtent = Ti()),
      (this.tempTileRange_ = new eg(0, 0, 0, 0)),
      (this.tempTileCoord_ = ju(0, 0, 0));
    const s = i.cacheSize !== void 0 ? i.cacheSize : 512;
    (this.tileCache_ = new nC(s)), (this.maxStaleKeys = s * 0.5);
  }
  getTileCache() {
    return this.tileCache_;
  }
  getOrCreateTile(t, i, s, l) {
    const o = this.tileCache_,
      h = this.getLayer().getSource(),
      d = jf(h.getKey(), t, i, s);
    let _;
    if (o.containsKey(d)) _ = o.get(d);
    else {
      if (((_ = h.getTile(t, i, s, l.pixelRatio, l.viewState.projection)), !_))
        return null;
      o.set(d, _);
    }
    return _;
  }
  getTile(t, i, s, l) {
    const o = this.getOrCreateTile(t, i, s, l);
    return o || null;
  }
  getData(t) {
    const i = this.frameState;
    if (!i) return null;
    const s = this.getLayer(),
      l = _e(i.pixelToCoordinateTransform, t.slice()),
      o = s.getExtent();
    if (o && !gl(o, l)) return null;
    const c = i.viewState,
      h = s.getRenderSource(),
      d = h.getTileGridForProjection(c.projection),
      _ = h.getTilePixelRatio(i.pixelRatio);
    for (let m = d.getZForResolution(c.resolution); m >= d.getMinZoom(); --m) {
      const y = d.getTileCoordForCoordAndZ(l, m),
        v = this.getTile(m, y[1], y[2], i);
      if (!v || v.getState() !== ft.LOADED) continue;
      const E = d.getOrigin(m),
        x = Ve(d.getTileSize(m)),
        R = d.getResolution(m);
      let b;
      if (v instanceof s1 || v instanceof h1) b = v.getImage();
      else if (v instanceof ky) {
        if (((b = hd(v.getData())), !b)) continue;
      } else continue;
      const w = Math.floor(_ * ((l[0] - E[0]) / R - y[1] * x[0])),
        M = Math.floor(_ * ((E[1] - l[1]) / R - y[2] * x[1])),
        G = Math.round(_ * h.getGutterForProjection(c.projection));
      return this.getImageData(b, w + G, M + G);
    }
    return null;
  }
  prepareFrame(t) {
    this.renderedProjection
      ? t.viewState.projection !== this.renderedProjection &&
        (this.tileCache_.clear(),
        (this.renderedProjection = t.viewState.projection))
      : (this.renderedProjection = t.viewState.projection);
    const i = this.getLayer().getSource();
    if (!i) return !1;
    const s = i.getRevision();
    return (
      this.renderedRevision_
        ? this.renderedRevision_ !== s &&
          ((this.renderedRevision_ = s),
          this.renderedSourceKey_ === i.getKey() && this.tileCache_.clear())
        : (this.renderedRevision_ = s),
      !0
    );
  }
  enqueueTiles(t, i, s, l, o) {
    const c = t.viewState,
      h = this.getLayer(),
      d = h.getRenderSource(),
      _ = d.getTileGridForProjection(c.projection),
      m = zt(d);
    m in t.wantedTiles || (t.wantedTiles[m] = {});
    const y = t.wantedTiles[m],
      v = h.getMapInternal(),
      E = Math.max(
        s - o,
        _.getMinZoom(),
        _.getZForResolution(
          Math.min(
            h.getMaxResolution(),
            v
              ? v.getView().getResolutionForZoom(Math.max(h.getMinZoom(), 0))
              : _.getResolution(0),
          ),
          d.zDirection,
        ),
      ),
      x = c.rotation,
      R = x ? $y(c.center, c.resolution, x, t.size) : void 0;
    for (let b = s; b >= E; --b) {
      const w = _.getTileRangeForExtentAndZ(i, b, this.tempTileRange_),
        M = _.getResolution(b);
      for (let G = w.minX; G <= w.maxX; ++G)
        for (let I = w.minY; I <= w.maxY; ++I) {
          if (x && !_.tileCoordIntersectsViewport([b, G, I], R)) continue;
          const D = this.getTile(b, G, I, t);
          if (!D || !Zf(l, D, b)) continue;
          const Q = D.getKey();
          if (
            ((y[Q] = !0),
            D.getState() === ft.IDLE && !t.tileQueue.isKeyQueued(Q))
          ) {
            const Z = ju(b, G, I, this.tempTileCoord_);
            t.tileQueue.enqueue([D, m, _.getTileCoordCenter(Z), M]);
          }
        }
    }
  }
  findStaleTile_(t, i) {
    const s = this.tileCache_,
      l = t[0],
      o = t[1],
      c = t[2],
      h = this.getStaleKeys();
    for (let d = 0; d < h.length; ++d) {
      const _ = jf(h[d], l, o, c);
      if (s.containsKey(_)) {
        const m = s.peek(_);
        if (m.getState() === ft.LOADED)
          return m.endTransition(zt(this)), Zf(i, m, l), !0;
      }
    }
    return !1;
  }
  findAltTiles_(t, i, s, l) {
    const o = t.getTileRangeForTileCoordAndZ(i, s, this.tempTileRange_);
    if (!o) return !1;
    let c = !0;
    const h = this.tileCache_,
      _ = this.getLayer().getRenderSource().getKey();
    for (let m = o.minX; m <= o.maxX; ++m)
      for (let y = o.minY; y <= o.maxY; ++y) {
        const v = jf(_, s, m, y);
        let E = !1;
        if (h.containsKey(v)) {
          const x = h.peek(v);
          x.getState() === ft.LOADED && (Zf(l, x, s), (E = !0));
        }
        E || (c = !1);
      }
    return c;
  }
  renderFrame(t, i) {
    let s = !0;
    this.renderComplete = !0;
    const l = t.layerStatesArray[t.layerIndex],
      o = t.viewState,
      c = o.projection,
      h = o.resolution,
      d = o.center,
      _ = t.pixelRatio,
      m = this.getLayer(),
      y = m.getSource(),
      v = y.getTileGridForProjection(c),
      E = v.getZForResolution(h, y.zDirection),
      x = v.getResolution(E),
      R = y.getKey();
    this.renderedSourceKey_
      ? this.renderedSourceKey_ !== R &&
        (this.prependStaleKey(this.renderedSourceKey_),
        (this.renderedSourceKey_ = R))
      : (this.renderedSourceKey_ = R);
    let b = t.extent;
    const w = y.getTilePixelRatio(_);
    this.prepareContainer(t, i);
    const M = this.context.canvas.width,
      G = this.context.canvas.height,
      I = l.extent && gs(l.extent, c);
    I && (b = nr(b, gs(l.extent, c)));
    const D = (x * M) / 2 / w,
      j = (x * G) / 2 / w,
      Q = [d[0] - D, d[1] - j, d[0] + D, d[1] + j],
      Z = {};
    this.renderedTiles.length = 0;
    const F = m.getPreload();
    if (t.nextExtent) {
      const $ = v.getZForResolution(o.nextResolution, y.zDirection),
        C = Zy(t, t.nextExtent);
      this.enqueueTiles(t, C, $, Z, F);
    }
    const q = Zy(t, b);
    if (
      (this.enqueueTiles(t, q, E, Z, 0),
      F > 0 &&
        setTimeout(() => {
          this.enqueueTiles(t, q, E - 1, Z, F - 1);
        }, 0),
      !(E in Z))
    )
      return this.container;
    const rt = zt(this),
      it = t.time;
    for (const $ of Z[E]) {
      const C = $.getState();
      if (C === ft.EMPTY) continue;
      const X = $.tileCoord;
      if (C === ft.LOADED && $.getAlpha(rt, it) === 1) {
        $.endTransition(rt);
        continue;
      }
      if (
        (C !== ft.IDLE && (s = !1),
        C !== ft.ERROR && (this.renderComplete = !1),
        this.findStaleTile_(X, Z))
      ) {
        oC(Z, $, E), (t.animate = !0);
        continue;
      }
      if (this.findAltTiles_(v, X, E + 1, Z)) continue;
      const J = v.getMinZoom();
      for (let lt = E - 1; lt >= J && !this.findAltTiles_(v, X, lt, Z); --lt);
    }
    const ot = ((x / h) * _) / w,
      st = this.getRenderContext(t);
    zn(this.tempTransform, M / 2, G / 2, ot, ot, 0, -M / 2, -G / 2),
      l.extent && this.clipUnrotated(st, t, I),
      y.getInterpolate() || (st.imageSmoothingEnabled = !1),
      this.preRender(st, t);
    const nt = Object.keys(Z).map(Number);
    nt.sort(On);
    let Y;
    const V = [],
      W = [];
    for (let $ = nt.length - 1; $ >= 0; --$) {
      const C = nt[$],
        X = y.getTilePixelSize(C, _, c),
        tt = v.getResolution(C) / x,
        J = X[0] * tt * ot,
        lt = X[1] * tt * ot,
        ct = v.getTileCoordForCoordAndZ(or(Q), C),
        Nt = v.getTileCoordExtent(ct),
        mt = _e(this.tempTransform, [
          (w * (Nt[0] - Q[0])) / x,
          (w * (Q[3] - Nt[3])) / x,
        ]),
        Ut = w * y.getGutterForProjection(c);
      for (const vt of Z[C]) {
        if (vt.getState() !== ft.LOADED) continue;
        const Le = vt.tileCoord,
          Xi = ct[1] - Le[1],
          qe = Math.round(mt[0] - (Xi - 1) * J),
          We = ct[2] - Le[2],
          Yi = Math.round(mt[1] - (We - 1) * lt),
          ye = Math.round(mt[0] - Xi * J),
          Xe = Math.round(mt[1] - We * lt),
          Ri = qe - ye,
          bi = Yi - Xe,
          Pi = nt.length === 1;
        let sn = !1;
        Y = [ye, Xe, ye + Ri, Xe, ye + Ri, Xe + bi, ye, Xe + bi];
        for (let wi = 0, rn = V.length; wi < rn; ++wi)
          if (!Pi && C < W[wi]) {
            const Pt = V[wi];
            Ze([ye, Xe, ye + Ri, Xe + bi], [Pt[0], Pt[3], Pt[4], Pt[7]]) &&
              (sn || (st.save(), (sn = !0)),
              st.beginPath(),
              st.moveTo(Y[0], Y[1]),
              st.lineTo(Y[2], Y[3]),
              st.lineTo(Y[4], Y[5]),
              st.lineTo(Y[6], Y[7]),
              st.moveTo(Pt[6], Pt[7]),
              st.lineTo(Pt[4], Pt[5]),
              st.lineTo(Pt[2], Pt[3]),
              st.lineTo(Pt[0], Pt[1]),
              st.clip());
          }
        V.push(Y),
          W.push(C),
          this.drawTile(vt, t, ye, Xe, Ri, bi, Ut, Pi),
          sn && st.restore(),
          this.renderedTiles.unshift(vt),
          this.updateUsedTiles(t.usedTiles, y, vt);
      }
    }
    if (
      ((this.renderedResolution = x),
      (this.extentChanged =
        !this.renderedExtent_ || !Ga(this.renderedExtent_, Q)),
      (this.renderedExtent_ = Q),
      (this.renderedPixelRatio = _),
      this.postRender(this.context, t),
      l.extent && st.restore(),
      (st.imageSmoothingEnabled = !0),
      this.renderComplete)
    ) {
      const $ = (C, X) => {
        const U = zt(y),
          tt = X.wantedTiles[U],
          J = tt ? Object.keys(tt).length : 0;
        this.updateCacheSize(J), this.tileCache_.expireCache();
      };
      t.postRenderFunctions.push($);
    }
    return !this.renderComplete && !s && (t.animate = !0), this.container;
  }
  updateCacheSize(t) {
    this.tileCache_.highWaterMark = Math.max(
      this.tileCache_.highWaterMark,
      t * 2,
    );
  }
  drawTile(t, i, s, l, o, c, h, d) {
    let _;
    if (t instanceof ky) {
      if (((_ = hd(t.getData())), !_))
        throw new Error("Rendering array data is not yet supported");
    } else _ = this.getTileImage(t);
    if (!_) return;
    const m = this.getRenderContext(i),
      y = zt(this),
      v = i.layerStatesArray[i.layerIndex],
      E = v.opacity * (d ? t.getAlpha(y, i.time) : 1),
      x = E !== m.globalAlpha;
    x && (m.save(), (m.globalAlpha = E)),
      m.drawImage(_, h, h, _.width - 2 * h, _.height - 2 * h, s, l, o, c),
      x && m.restore(),
      E !== v.opacity ? (i.animate = !0) : d && t.endTransition(y);
  }
  getImage() {
    const t = this.context;
    return t ? t.canvas : null;
  }
  getTileImage(t) {
    return t.getImage();
  }
  updateUsedTiles(t, i, s) {
    const l = zt(i);
    l in t || (t[l] = {}), (t[l][s.getKey()] = !0);
  }
}
const Cu = {
  PRELOAD: "preload",
  USE_INTERIM_TILES_ON_ERROR: "useInterimTilesOnError",
};
class cC extends dc {
  constructor(t) {
    t = t || {};
    const i = Object.assign({}, t),
      s = t.cacheSize;
    delete t.cacheSize,
      delete i.preload,
      delete i.useInterimTilesOnError,
      super(i),
      this.on,
      this.once,
      this.un,
      (this.cacheSize_ = s),
      this.setPreload(t.preload !== void 0 ? t.preload : 0),
      this.setUseInterimTilesOnError(
        t.useInterimTilesOnError !== void 0 ? t.useInterimTilesOnError : !0,
      );
  }
  getCacheSize() {
    return this.cacheSize_;
  }
  getPreload() {
    return this.get(Cu.PRELOAD);
  }
  setPreload(t) {
    this.set(Cu.PRELOAD, t);
  }
  getUseInterimTilesOnError() {
    return this.get(Cu.USE_INTERIM_TILES_ON_ERROR);
  }
  setUseInterimTilesOnError(t) {
    this.set(Cu.USE_INTERIM_TILES_ON_ERROR, t);
  }
  getData(t) {
    return super.getData(t);
  }
}
class hC extends cC {
  constructor(t) {
    super(t);
  }
  createRenderer() {
    return new uC(this, { cacheSize: this.getCacheSize() });
  }
}
const tl = [0, 0, 0],
  cs = 5;
class f1 {
  constructor(t) {
    (this.minZoom = t.minZoom !== void 0 ? t.minZoom : 0),
      (this.resolutions_ = t.resolutions),
      Lt(
        BE(this.resolutions_, (l, o) => o - l),
        "`resolutions` must be sorted in descending order",
      );
    let i;
    if (!t.origins) {
      for (let l = 0, o = this.resolutions_.length - 1; l < o; ++l)
        if (!i) i = this.resolutions_[l] / this.resolutions_[l + 1];
        else if (this.resolutions_[l] / this.resolutions_[l + 1] !== i) {
          i = void 0;
          break;
        }
    }
    (this.zoomFactor_ = i),
      (this.maxZoom = this.resolutions_.length - 1),
      (this.origin_ = t.origin !== void 0 ? t.origin : null),
      (this.origins_ = null),
      t.origins !== void 0 &&
        ((this.origins_ = t.origins),
        Lt(
          this.origins_.length == this.resolutions_.length,
          "Number of `origins` and `resolutions` must be equal",
        ));
    const s = t.extent;
    s !== void 0 && !this.origin_ && !this.origins_ && (this.origin_ = or(s)),
      Lt(
        (!this.origin_ && this.origins_) || (this.origin_ && !this.origins_),
        "Either `origin` or `origins` must be configured, never both",
      ),
      (this.tileSizes_ = null),
      t.tileSizes !== void 0 &&
        ((this.tileSizes_ = t.tileSizes),
        Lt(
          this.tileSizes_.length == this.resolutions_.length,
          "Number of `tileSizes` and `resolutions` must be equal",
        )),
      (this.tileSize_ =
        t.tileSize !== void 0 ? t.tileSize : this.tileSizes_ ? null : Vd),
      Lt(
        (!this.tileSize_ && this.tileSizes_) ||
          (this.tileSize_ && !this.tileSizes_),
        "Either `tileSize` or `tileSizes` must be configured, never both",
      ),
      (this.extent_ = s !== void 0 ? s : null),
      (this.fullTileRanges_ = null),
      (this.tmpSize_ = [0, 0]),
      (this.tmpExtent_ = [0, 0, 0, 0]),
      t.sizes !== void 0
        ? (this.fullTileRanges_ = t.sizes.map((l, o) => {
            const c = new eg(
              Math.min(0, l[0]),
              Math.max(l[0] - 1, -1),
              Math.min(0, l[1]),
              Math.max(l[1] - 1, -1),
            );
            if (s) {
              const h = this.getTileRangeForExtentAndZ(s, o);
              (c.minX = Math.max(h.minX, c.minX)),
                (c.maxX = Math.min(h.maxX, c.maxX)),
                (c.minY = Math.max(h.minY, c.minY)),
                (c.maxY = Math.min(h.maxY, c.maxY));
            }
            return c;
          }))
        : s && this.calculateTileRanges_(s);
  }
  forEachTileCoord(t, i, s) {
    const l = this.getTileRangeForExtentAndZ(t, i);
    for (let o = l.minX, c = l.maxX; o <= c; ++o)
      for (let h = l.minY, d = l.maxY; h <= d; ++h) s([i, o, h]);
  }
  forEachTileCoordParentTileRange(t, i, s, l) {
    let o,
      c,
      h,
      d = null,
      _ = t[0] - 1;
    for (
      this.zoomFactor_ === 2
        ? ((c = t[1]), (h = t[2]))
        : (d = this.getTileCoordExtent(t, l));
      _ >= this.minZoom;

    ) {
      if (
        (c !== void 0 && h !== void 0
          ? ((c = Math.floor(c / 2)),
            (h = Math.floor(h / 2)),
            (o = $r(c, c, h, h, s)))
          : (o = this.getTileRangeForExtentAndZ(d, _, s)),
        i(_, o))
      )
        return !0;
      --_;
    }
    return !1;
  }
  getExtent() {
    return this.extent_;
  }
  getMaxZoom() {
    return this.maxZoom;
  }
  getMinZoom() {
    return this.minZoom;
  }
  getOrigin(t) {
    return this.origin_ ? this.origin_ : this.origins_[t];
  }
  getResolution(t) {
    return this.resolutions_[t];
  }
  getResolutions() {
    return this.resolutions_;
  }
  getTileCoordChildTileRange(t, i, s) {
    if (t[0] < this.maxZoom) {
      if (this.zoomFactor_ === 2) {
        const o = t[1] * 2,
          c = t[2] * 2;
        return $r(o, o + 1, c, c + 1, i);
      }
      const l = this.getTileCoordExtent(t, s || this.tmpExtent_);
      return this.getTileRangeForExtentAndZ(l, t[0] + 1, i);
    }
    return null;
  }
  getTileRangeForTileCoordAndZ(t, i, s) {
    if (i > this.maxZoom || i < this.minZoom) return null;
    const l = t[0],
      o = t[1],
      c = t[2];
    if (i === l) return $r(o, c, o, c, s);
    if (this.zoomFactor_) {
      const d = Math.pow(this.zoomFactor_, i - l),
        _ = Math.floor(o * d),
        m = Math.floor(c * d);
      if (i < l) return $r(_, _, m, m, s);
      const y = Math.floor(d * (o + 1)) - 1,
        v = Math.floor(d * (c + 1)) - 1;
      return $r(_, y, m, v, s);
    }
    const h = this.getTileCoordExtent(t, this.tmpExtent_);
    return this.getTileRangeForExtentAndZ(h, i, s);
  }
  getTileRangeForExtentAndZ(t, i, s) {
    this.getTileCoordForXYAndZ_(t[0], t[3], i, !1, tl);
    const l = tl[1],
      o = tl[2];
    this.getTileCoordForXYAndZ_(t[2], t[1], i, !0, tl);
    const c = tl[1],
      h = tl[2];
    return $r(l, c, o, h, s);
  }
  getTileCoordCenter(t) {
    const i = this.getOrigin(t[0]),
      s = this.getResolution(t[0]),
      l = Ve(this.getTileSize(t[0]), this.tmpSize_);
    return [i[0] + (t[1] + 0.5) * l[0] * s, i[1] - (t[2] + 0.5) * l[1] * s];
  }
  getTileCoordExtent(t, i) {
    const s = this.getOrigin(t[0]),
      l = this.getResolution(t[0]),
      o = Ve(this.getTileSize(t[0]), this.tmpSize_),
      c = s[0] + t[1] * o[0] * l,
      h = s[1] - (t[2] + 1) * o[1] * l,
      d = c + o[0] * l,
      _ = h + o[1] * l;
    return In(c, h, d, _, i);
  }
  getTileCoordForCoordAndResolution(t, i, s) {
    return this.getTileCoordForXYAndResolution_(t[0], t[1], i, !1, s);
  }
  getTileCoordForXYAndResolution_(t, i, s, l, o) {
    const c = this.getZForResolution(s),
      h = s / this.getResolution(c),
      d = this.getOrigin(c),
      _ = Ve(this.getTileSize(c), this.tmpSize_);
    let m = (h * (t - d[0])) / s / _[0],
      y = (h * (d[1] - i)) / s / _[1];
    return (
      l
        ? ((m = mu(m, cs) - 1), (y = mu(y, cs) - 1))
        : ((m = _u(m, cs)), (y = _u(y, cs))),
      ju(c, m, y, o)
    );
  }
  getTileCoordForXYAndZ_(t, i, s, l, o) {
    const c = this.getOrigin(s),
      h = this.getResolution(s),
      d = Ve(this.getTileSize(s), this.tmpSize_);
    let _ = (t - c[0]) / h / d[0],
      m = (c[1] - i) / h / d[1];
    return (
      l
        ? ((_ = mu(_, cs) - 1), (m = mu(m, cs) - 1))
        : ((_ = _u(_, cs)), (m = _u(m, cs))),
      ju(s, _, m, o)
    );
  }
  getTileCoordForCoordAndZ(t, i, s) {
    return this.getTileCoordForXYAndZ_(t[0], t[1], i, !1, s);
  }
  getTileCoordResolution(t) {
    return this.resolutions_[t[0]];
  }
  getTileSize(t) {
    return this.tileSize_ ? this.tileSize_ : this.tileSizes_[t];
  }
  getFullTileRange(t) {
    return this.fullTileRanges_
      ? this.fullTileRanges_[t]
      : this.extent_
        ? this.getTileRangeForExtentAndZ(this.extent_, t)
        : null;
  }
  getZForResolution(t, i) {
    const s = gd(this.resolutions_, t, i || 0);
    return se(s, this.minZoom, this.maxZoom);
  }
  tileCoordIntersectsViewport(t, i) {
    return vp(i, 0, i.length, 2, this.getTileCoordExtent(t));
  }
  calculateTileRanges_(t) {
    const i = this.resolutions_.length,
      s = new Array(i);
    for (let l = this.minZoom; l < i; ++l)
      s[l] = this.getTileRangeForExtentAndZ(t, l);
    this.fullTileRanges_ = s;
  }
}
function d1(r) {
  let t = r.getDefaultTileGrid();
  return t || ((t = _C(r)), r.setDefaultTileGrid(t)), t;
}
function fC(r, t, i) {
  const s = t[0],
    l = r.getTileCoordCenter(t),
    o = ig(i);
  if (!gl(o, l)) {
    const c = Ft(o),
      h = Math.ceil((o[0] - l[0]) / c);
    return (l[0] += c * h), r.getTileCoordForCoordAndZ(l, s);
  }
  return t;
}
function dC(r, t, i, s) {
  s = s !== void 0 ? s : "top-left";
  const l = g1(r, t, i);
  return new f1({ extent: r, origin: WE(r, s), resolutions: l, tileSize: i });
}
function gC(r) {
  const t = r || {},
    i = t.extent || Kt("EPSG:3857").getExtent(),
    s = {
      extent: i,
      minZoom: t.minZoom,
      tileSize: t.tileSize,
      resolutions: g1(i, t.maxZoom, t.tileSize, t.maxResolution),
    };
  return new f1(s);
}
function g1(r, t, i, s) {
  (t = t !== void 0 ? t : oT), (i = Ve(i !== void 0 ? i : Vd));
  const l = Ue(r),
    o = Ft(r);
  s = s > 0 ? s : Math.max(o / i[0], l / i[1]);
  const c = t + 1,
    h = new Array(c);
  for (let d = 0; d < c; ++d) h[d] = s / Math.pow(2, d);
  return h;
}
function _C(r, t, i, s) {
  const l = ig(r);
  return dC(l, t, i, s);
}
function ig(r) {
  r = Kt(r);
  let t = r.getExtent();
  if (!t) {
    const i = (180 * Ed.degrees) / r.getMetersPerUnit();
    t = In(-i, -i, i, i);
  }
  return t;
}
const mC = /\{z\}/g,
  yC = /\{x\}/g,
  pC = /\{y\}/g,
  vC = /\{-y\}/g;
function EC(r, t, i, s, l) {
  return r
    .replace(mC, t.toString())
    .replace(yC, i.toString())
    .replace(pC, s.toString())
    .replace(vC, function () {
      if (l === void 0)
        throw new Error(
          "If the URL template has a {-y} placeholder, the grid extent must be known",
        );
      return (l - s).toString();
    });
}
function SC(r) {
  const t = [];
  let i = /\{([a-z])-([a-z])\}/.exec(r);
  if (i) {
    const s = i[1].charCodeAt(0),
      l = i[2].charCodeAt(0);
    let o;
    for (o = s; o <= l; ++o) t.push(r.replace(i[0], String.fromCharCode(o)));
    return t;
  }
  if (((i = /\{(\d+)-(\d+)\}/.exec(r)), i)) {
    const s = parseInt(i[2], 10);
    for (let l = parseInt(i[1], 10); l <= s; l++)
      t.push(r.replace(i[0], l.toString()));
    return t;
  }
  return t.push(r), t;
}
function xC(r, t) {
  return function (i, s, l) {
    if (!i) return;
    let o;
    const c = i[0];
    if (t) {
      const h = t.getFullTileRange(c);
      h && (o = h.getHeight() - 1);
    }
    return EC(r, c, i[1], i[2], o);
  };
}
function TC(r, t) {
  const i = r.length,
    s = new Array(i);
  for (let l = 0; l < i; ++l) s[l] = xC(r[l], t);
  return CC(s);
}
function CC(r) {
  return r.length === 1
    ? r[0]
    : function (t, i, s) {
        if (!t) return;
        const l = rC(t),
          o = ol(l, r.length);
        return r[o](t, i, s);
      };
}
class RC extends kp {
  constructor(t) {
    super({
      attributions: t.attributions,
      attributionsCollapsible: t.attributionsCollapsible,
      projection: t.projection,
      state: t.state,
      wrapX: t.wrapX,
      interpolate: t.interpolate,
    }),
      this.on,
      this.once,
      this.un,
      (this.tilePixelRatio_ =
        t.tilePixelRatio !== void 0 ? t.tilePixelRatio : 1),
      (this.tileGrid = t.tileGrid !== void 0 ? t.tileGrid : null);
    const i = [256, 256];
    this.tileGrid &&
      Ve(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), i),
      (this.tmpSize = [0, 0]),
      (this.key_ = t.key || zt(this)),
      (this.tileOptions = {
        transition: t.transition,
        interpolate: t.interpolate,
      }),
      (this.zDirection = t.zDirection ? t.zDirection : 0);
  }
  getGutterForProjection(t) {
    return 0;
  }
  getKey() {
    return this.key_;
  }
  setKey(t) {
    this.key_ !== t && ((this.key_ = t), this.changed());
  }
  getResolutions(t) {
    const i = t ? this.getTileGridForProjection(t) : this.tileGrid;
    return i ? i.getResolutions() : null;
  }
  getTile(t, i, s, l, o) {
    return _t();
  }
  getTileGrid() {
    return this.tileGrid;
  }
  getTileGridForProjection(t) {
    return this.tileGrid ? this.tileGrid : d1(t);
  }
  getTilePixelRatio(t) {
    return this.tilePixelRatio_;
  }
  getTilePixelSize(t, i, s) {
    const l = this.getTileGridForProjection(s),
      o = this.getTilePixelRatio(i),
      c = Ve(l.getTileSize(t), this.tmpSize);
    return o == 1 ? c : qx(c, o, this.tmpSize);
  }
  getTileCoordForTileUrlFunction(t, i) {
    const s = i !== void 0 ? i : this.getProjection(),
      l =
        i !== void 0
          ? this.getTileGridForProjection(s)
          : this.tileGrid || this.getTileGridForProjection(s);
    return (
      this.getWrapX() && s.isGlobal() && (t = fC(l, t, s)), aC(t, l) ? t : null
    );
  }
  clear() {}
  refresh() {
    this.clear(), super.refresh();
  }
}
class bC extends Gn {
  constructor(t, i) {
    super(t), (this.tile = i);
  }
}
const Kf = {
  TILELOADSTART: "tileloadstart",
  TILELOADEND: "tileloadend",
  TILELOADERROR: "tileloaderror",
};
class ng extends RC {
  constructor(t) {
    super({
      attributions: t.attributions,
      cacheSize: t.cacheSize,
      projection: t.projection,
      state: t.state,
      tileGrid: t.tileGrid,
      tilePixelRatio: t.tilePixelRatio,
      wrapX: t.wrapX,
      transition: t.transition,
      interpolate: t.interpolate,
      key: t.key,
      attributionsCollapsible: t.attributionsCollapsible,
      zDirection: t.zDirection,
    }),
      (this.generateTileUrlFunction_ =
        this.tileUrlFunction === ng.prototype.tileUrlFunction),
      (this.tileLoadFunction = t.tileLoadFunction),
      t.tileUrlFunction && (this.tileUrlFunction = t.tileUrlFunction),
      (this.urls = null),
      t.urls ? this.setUrls(t.urls) : t.url && this.setUrl(t.url),
      (this.tileLoadingKeys_ = {});
  }
  getTileLoadFunction() {
    return this.tileLoadFunction;
  }
  getTileUrlFunction() {
    return Object.getPrototypeOf(this).tileUrlFunction === this.tileUrlFunction
      ? this.tileUrlFunction.bind(this)
      : this.tileUrlFunction;
  }
  getUrls() {
    return this.urls;
  }
  handleTileChange(t) {
    const i = t.target,
      s = zt(i),
      l = i.getState();
    let o;
    l == ft.LOADING
      ? ((this.tileLoadingKeys_[s] = !0), (o = Kf.TILELOADSTART))
      : s in this.tileLoadingKeys_ &&
        (delete this.tileLoadingKeys_[s],
        (o =
          l == ft.ERROR
            ? Kf.TILELOADERROR
            : l == ft.LOADED
              ? Kf.TILELOADEND
              : void 0)),
      o != null && this.dispatchEvent(new bC(o, i));
  }
  setTileLoadFunction(t) {
    (this.tileLoadFunction = t), this.changed();
  }
  setTileUrlFunction(t, i) {
    (this.tileUrlFunction = t),
      typeof i < "u" ? this.setKey(i) : this.changed();
  }
  setUrl(t) {
    const i = SC(t);
    (this.urls = i), this.setUrls(i);
  }
  setUrls(t) {
    this.urls = t;
    const i = t.join(`
`);
    this.generateTileUrlFunction_
      ? this.setTileUrlFunction(TC(t, this.tileGrid), i)
      : this.setKey(i);
  }
  tileUrlFunction(t, i, s) {}
}
class wC extends ng {
  constructor(t) {
    super({
      attributions: t.attributions,
      cacheSize: t.cacheSize,
      projection: t.projection,
      state: t.state,
      tileGrid: t.tileGrid,
      tileLoadFunction: t.tileLoadFunction ? t.tileLoadFunction : AC,
      tilePixelRatio: t.tilePixelRatio,
      tileUrlFunction: t.tileUrlFunction,
      url: t.url,
      urls: t.urls,
      wrapX: t.wrapX,
      transition: t.transition,
      interpolate: t.interpolate !== void 0 ? t.interpolate : !0,
      key: t.key,
      attributionsCollapsible: t.attributionsCollapsible,
      zDirection: t.zDirection,
    }),
      (this.crossOrigin = t.crossOrigin !== void 0 ? t.crossOrigin : null),
      (this.tileClass = t.tileClass !== void 0 ? t.tileClass : s1),
      (this.tileGridForProjection = {}),
      (this.reprojectionErrorThreshold_ = t.reprojectionErrorThreshold),
      (this.renderReprojectionEdges_ = !1);
  }
  getGutterForProjection(t) {
    return this.getProjection() && t && !bu(this.getProjection(), t)
      ? 0
      : this.getGutter();
  }
  getGutter() {
    return 0;
  }
  getKey() {
    let t = super.getKey();
    return this.getInterpolate() || (t += ":disable-interpolation"), t;
  }
  getTileGridForProjection(t) {
    const i = this.getProjection();
    if (this.tileGrid && (!i || bu(i, t))) return this.tileGrid;
    const s = zt(t);
    return (
      s in this.tileGridForProjection ||
        (this.tileGridForProjection[s] = d1(t)),
      this.tileGridForProjection[s]
    );
  }
  createTile_(t, i, s, l, o, c) {
    const h = [t, i, s],
      d = this.getTileCoordForTileUrlFunction(h, o),
      _ = d ? this.tileUrlFunction(d, l, o) : void 0,
      m = new this.tileClass(
        h,
        _ !== void 0 ? ft.IDLE : ft.EMPTY,
        _ !== void 0 ? _ : "",
        this.crossOrigin,
        this.tileLoadFunction,
        this.tileOptions,
      );
    return (
      (m.key = c),
      m.addEventListener(pt.CHANGE, this.handleTileChange.bind(this)),
      m
    );
  }
  getTile(t, i, s, l, o) {
    const c = this.getProjection();
    if (!c || !o || bu(c, o)) return this.getTileInternal(t, i, s, l, c || o);
    const h = [t, i, s],
      d = this.getKey(),
      _ = this.getTileGridForProjection(c),
      m = this.getTileGridForProjection(o),
      y = this.getTileCoordForTileUrlFunction(h, o),
      v = new h1(
        c,
        _,
        o,
        m,
        h,
        y,
        this.getTilePixelRatio(l),
        this.getGutter(),
        (E, x, R, b) => this.getTileInternal(E, x, R, b, c),
        this.reprojectionErrorThreshold_,
        this.renderReprojectionEdges_,
        this.tileOptions,
      );
    return (v.key = d), v;
  }
  getTileInternal(t, i, s, l, o) {
    const c = this.getKey();
    return this.createTile_(t, i, s, l, o, c);
  }
  setRenderReprojectionEdges(t) {
    this.renderReprojectionEdges_ != t &&
      ((this.renderReprojectionEdges_ = t), this.changed());
  }
  setTileGridForProjection(t, i) {
    const s = Kt(t);
    if (s) {
      const l = zt(s);
      l in this.tileGridForProjection || (this.tileGridForProjection[l] = i);
    }
  }
}
function AC(r, t) {
  r.getImage().src = t;
}
class MC extends wC {
  constructor(t) {
    t = t || {};
    const i = t.projection !== void 0 ? t.projection : "EPSG:3857",
      s =
        t.tileGrid !== void 0
          ? t.tileGrid
          : gC({
              extent: ig(i),
              maxResolution: t.maxResolution,
              maxZoom: t.maxZoom,
              minZoom: t.minZoom,
              tileSize: t.tileSize,
            });
    super({
      attributions: t.attributions,
      cacheSize: t.cacheSize,
      crossOrigin: t.crossOrigin,
      interpolate: t.interpolate,
      projection: i,
      reprojectionErrorThreshold: t.reprojectionErrorThreshold,
      tileGrid: s,
      tileLoadFunction: t.tileLoadFunction,
      tilePixelRatio: t.tilePixelRatio,
      tileUrlFunction: t.tileUrlFunction,
      url: t.url,
      urls: t.urls,
      wrapX: t.wrapX !== void 0 ? t.wrapX : !0,
      transition: t.transition,
      attributionsCollapsible: t.attributionsCollapsible,
      zDirection: t.zDirection,
    }),
      (this.gutter_ = t.gutter !== void 0 ? t.gutter : 0);
  }
  getGutter() {
    return this.gutter_;
  }
}
const OC =
  '&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.';
class DC extends MC {
  constructor(t) {
    t = t || {};
    let i;
    t.attributions !== void 0 ? (i = t.attributions) : (i = [OC]);
    const s = t.crossOrigin !== void 0 ? t.crossOrigin : "anonymous",
      l =
        t.url !== void 0
          ? t.url
          : "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
    super({
      attributions: i,
      attributionsCollapsible: !1,
      cacheSize: t.cacheSize,
      crossOrigin: s,
      interpolate: t.interpolate,
      maxZoom: t.maxZoom !== void 0 ? t.maxZoom : 19,
      reprojectionErrorThreshold: t.reprojectionErrorThreshold,
      tileLoadFunction: t.tileLoadFunction,
      transition: t.transition,
      url: l,
      wrapX: t.wrapX,
      zDirection: t.zDirection,
    });
  }
}
class LC {
  constructor() {
    (this.dataProjection = void 0),
      (this.defaultFeatureProjection = void 0),
      (this.featureClass = qu),
      (this.supportedMediaTypes = null);
  }
  getReadOptions(t, i) {
    if (i) {
      let s = i.dataProjection ? Kt(i.dataProjection) : this.readProjection(t);
      i.extent &&
        s &&
        s.getUnits() === "tile-pixels" &&
        ((s = Kt(s)), s.setWorldExtent(i.extent)),
        (i = { dataProjection: s, featureProjection: i.featureProjection });
    }
    return this.adaptOptions(i);
  }
  adaptOptions(t) {
    return Object.assign(
      {
        dataProjection: this.dataProjection,
        featureProjection: this.defaultFeatureProjection,
        featureClass: this.featureClass,
      },
      t,
    );
  }
  getType() {
    return _t();
  }
  readFeature(t, i) {
    return _t();
  }
  readFeatures(t, i) {
    return _t();
  }
  readGeometry(t, i) {
    return _t();
  }
  readProjection(t) {
    return _t();
  }
  writeFeature(t, i) {
    return _t();
  }
  writeFeatures(t, i) {
    return _t();
  }
  writeGeometry(t, i) {
    return _t();
  }
}
function sg(r, t, i) {
  const s = i ? Kt(i.featureProjection) : null,
    l = i ? Kt(i.dataProjection) : null;
  let o = r;
  if (s && l && !bu(s, l)) {
    t && (o = r.clone());
    const c = t ? s : l,
      h = t ? l : s;
    c.getUnits() === "tile-pixels"
      ? o.transform(c, h)
      : o.applyTransform(ml(c, h));
  }
  if (t && i && i.decimals !== void 0) {
    const c = Math.pow(10, i.decimals),
      h = function (d) {
        for (let _ = 0, m = d.length; _ < m; ++_)
          d[_] = Math.round(d[_] * c) / c;
        return d;
      };
    o === r && (o = r.clone()), o.applyTransform(h);
  }
  return o;
}
const IC = {
  Point: yl,
  LineString: pl,
  Polygon: Es,
  MultiPoint: ac,
  MultiLineString: Xu,
  MultiPolygon: Yu,
};
function zC(r, t, i) {
  return Array.isArray(t[0])
    ? (Sp(r, 0, t, i) || ((r = r.slice()), nd(r, 0, t, i)), r)
    : (zd(r, 0, t, i) || ((r = r.slice()), Iu(r, 0, t, i)), r);
}
function _1(r, t) {
  var o;
  const i = r.geometry;
  if (!i) return [];
  if (Array.isArray(i)) return i.map((c) => _1({ ...r, geometry: c })).flat();
  const s = i.type === "MultiPolygon" ? "Polygon" : i.type;
  if (s === "GeometryCollection" || s === "Circle")
    throw new Error("Unsupported geometry type: " + s);
  const l = i.layout.length;
  return sg(
    new si(
      s,
      s === "Polygon" ? zC(i.flatCoordinates, i.ends, l) : i.flatCoordinates,
      (o = i.ends) == null ? void 0 : o.flat(),
      l,
      r.properties || {},
      r.id,
    ).enableSimplifyTransformed(),
    !1,
    t,
  );
}
function rg(r, t) {
  if (!r) return null;
  if (Array.isArray(r)) {
    const s = r.map((l) => rg(l, t));
    return new Uu(s);
  }
  const i = IC[r.type];
  return sg(new i(r.flatCoordinates, r.layout || "XY", r.ends), !1, t);
}
class NC extends LC {
  constructor() {
    super();
  }
  getType() {
    return "json";
  }
  readFeature(t, i) {
    return this.readFeatureFromObject(Ru(t), this.getReadOptions(t, i));
  }
  readFeatures(t, i) {
    return this.readFeaturesFromObject(Ru(t), this.getReadOptions(t, i));
  }
  readFeatureFromObject(t, i) {
    return _t();
  }
  readFeaturesFromObject(t, i) {
    return _t();
  }
  readGeometry(t, i) {
    return this.readGeometryFromObject(Ru(t), this.getReadOptions(t, i));
  }
  readGeometryFromObject(t, i) {
    return _t();
  }
  readProjection(t) {
    return this.readProjectionFromObject(Ru(t));
  }
  readProjectionFromObject(t) {
    return _t();
  }
  writeFeature(t, i) {
    return JSON.stringify(this.writeFeatureObject(t, i));
  }
  writeFeatureObject(t, i) {
    return _t();
  }
  writeFeatures(t, i) {
    return JSON.stringify(this.writeFeaturesObject(t, i));
  }
  writeFeaturesObject(t, i) {
    return _t();
  }
  writeGeometry(t, i) {
    return JSON.stringify(this.writeGeometryObject(t, i));
  }
  writeGeometryObject(t, i) {
    return _t();
  }
}
function Ru(r) {
  if (typeof r == "string") {
    const t = JSON.parse(r);
    return t || null;
  }
  return r !== null ? r : null;
}
class m1 extends NC {
  constructor(t) {
    (t = t || {}),
      super(),
      (this.dataProjection = Kt(
        t.dataProjection ? t.dataProjection : "EPSG:4326",
      )),
      t.featureProjection &&
        (this.defaultFeatureProjection = Kt(t.featureProjection)),
      t.featureClass && (this.featureClass = t.featureClass),
      (this.geometryName_ = t.geometryName),
      (this.extractGeometryName_ = t.extractGeometryName),
      (this.supportedMediaTypes = [
        "application/geo+json",
        "application/vnd.geo+json",
      ]);
  }
  readFeatureFromObject(t, i) {
    let s = null;
    t.type === "Feature"
      ? (s = t)
      : (s = { type: "Feature", geometry: t, properties: null });
    const l = lg(s.geometry);
    if (this.featureClass === si)
      return _1({ geometry: l, id: s.id, properties: s.properties }, i);
    const o = new qu();
    return (
      this.geometryName_
        ? o.setGeometryName(this.geometryName_)
        : this.extractGeometryName_ &&
          s.geometry_name &&
          o.setGeometryName(s.geometry_name),
      o.setGeometry(rg(l, i)),
      "id" in s && o.setId(s.id),
      s.properties && o.setProperties(s.properties, !0),
      o
    );
  }
  readFeaturesFromObject(t, i) {
    const s = t;
    let l = null;
    if (s.type === "FeatureCollection") {
      const o = t;
      l = [];
      const c = o.features;
      for (let h = 0, d = c.length; h < d; ++h) {
        const _ = this.readFeatureFromObject(c[h], i);
        _ && l.push(_);
      }
    } else l = [this.readFeatureFromObject(t, i)];
    return l.flat();
  }
  readGeometryFromObject(t, i) {
    return GC(t, i);
  }
  readProjectionFromObject(t) {
    const i = t.crs;
    let s;
    if (i)
      if (i.type == "name") s = Kt(i.properties.name);
      else if (i.type === "EPSG") s = Kt("EPSG:" + i.properties.code);
      else throw new Error("Unknown SRS type");
    else s = this.dataProjection;
    return s;
  }
  writeFeatureObject(t, i) {
    i = this.adaptOptions(i);
    const s = { type: "Feature", geometry: null, properties: null },
      l = t.getId();
    if ((l !== void 0 && (s.id = l), !t.hasProperties())) return s;
    const o = t.getProperties(),
      c = t.getGeometry();
    return (
      c && ((s.geometry = fd(c, i)), delete o[t.getGeometryName()]),
      rr(o) || (s.properties = o),
      s
    );
  }
  writeFeaturesObject(t, i) {
    i = this.adaptOptions(i);
    const s = [];
    for (let l = 0, o = t.length; l < o; ++l)
      s.push(this.writeFeatureObject(t[l], i));
    return { type: "FeatureCollection", features: s };
  }
  writeGeometryObject(t, i) {
    return fd(t, this.adaptOptions(i));
  }
}
function lg(r, t) {
  if (!r) return null;
  let i;
  switch (r.type) {
    case "Point": {
      i = UC(r);
      break;
    }
    case "LineString": {
      i = XC(r);
      break;
    }
    case "Polygon": {
      i = BC(r);
      break;
    }
    case "MultiPoint": {
      i = PC(r);
      break;
    }
    case "MultiLineString": {
      i = YC(r);
      break;
    }
    case "MultiPolygon": {
      i = kC(r);
      break;
    }
    case "GeometryCollection": {
      i = FC(r);
      break;
    }
    default:
      throw new Error("Unsupported GeoJSON type: " + r.type);
  }
  return i;
}
function GC(r, t) {
  const i = lg(r);
  return rg(i, t);
}
function FC(r, t) {
  return r.geometries.map(function (s) {
    return lg(s);
  });
}
function UC(r) {
  const t = r.coordinates;
  return { type: "Point", flatCoordinates: t, layout: cr(t.length) };
}
function XC(r) {
  var s;
  const t = r.coordinates,
    i = t.flat();
  return {
    type: "LineString",
    flatCoordinates: i,
    ends: [i.length],
    layout: cr(((s = t[0]) == null ? void 0 : s.length) || 2),
  };
}
function YC(r) {
  var o, c;
  const t = r.coordinates,
    i =
      ((c = (o = t[0]) == null ? void 0 : o[0]) == null ? void 0 : c.length) ||
      2,
    s = [],
    l = Ja(s, 0, t, i);
  return {
    type: "MultiLineString",
    flatCoordinates: s,
    ends: l,
    layout: cr(i),
  };
}
function PC(r) {
  var i;
  const t = r.coordinates;
  return {
    type: "MultiPoint",
    flatCoordinates: t.flat(),
    layout: cr(((i = t[0]) == null ? void 0 : i.length) || 2),
  };
}
function kC(r) {
  var o, c;
  const t = r.coordinates,
    i = [],
    s =
      ((c = (o = t[0]) == null ? void 0 : o[0]) == null
        ? void 0
        : c[0].length) || 2,
    l = _p(i, 0, t, s);
  return { type: "MultiPolygon", flatCoordinates: i, ends: l, layout: cr(s) };
}
function BC(r) {
  var o, c;
  const t = r.coordinates,
    i = [],
    s = (c = (o = t[0]) == null ? void 0 : o[0]) == null ? void 0 : c.length,
    l = Ja(i, 0, t, s);
  return { type: "Polygon", flatCoordinates: i, ends: l, layout: cr(s) };
}
function fd(r, t) {
  r = sg(r, !0, t);
  const i = r.getType();
  let s;
  switch (i) {
    case "Point": {
      s = qC(r);
      break;
    }
    case "LineString": {
      s = jC(r);
      break;
    }
    case "Polygon": {
      s = WC(r, t);
      break;
    }
    case "MultiPoint": {
      s = KC(r);
      break;
    }
    case "MultiLineString": {
      s = ZC(r);
      break;
    }
    case "MultiPolygon": {
      s = VC(r, t);
      break;
    }
    case "GeometryCollection": {
      s = HC(r, t);
      break;
    }
    case "Circle": {
      s = { type: "GeometryCollection", geometries: [] };
      break;
    }
    default:
      throw new Error("Unsupported geometry type: " + i);
  }
  return s;
}
function HC(r, t) {
  return (
    (t = Object.assign({}, t)),
    delete t.featureProjection,
    {
      type: "GeometryCollection",
      geometries: r.getGeometriesArray().map(function (s) {
        return fd(s, t);
      }),
    }
  );
}
function jC(r, t) {
  return { type: "LineString", coordinates: r.getCoordinates() };
}
function ZC(r, t) {
  return { type: "MultiLineString", coordinates: r.getCoordinates() };
}
function KC(r, t) {
  return { type: "MultiPoint", coordinates: r.getCoordinates() };
}
function VC(r, t) {
  let i;
  return (
    t && (i = t.rightHanded),
    { type: "MultiPolygon", coordinates: r.getCoordinates(i) }
  );
}
function qC(r, t) {
  return { type: "Point", coordinates: r.getCoordinates() };
}
function WC(r, t) {
  let i;
  return (
    t && (i = t.rightHanded),
    { type: "Polygon", coordinates: r.getCoordinates(i) }
  );
}
NS();
const QC = new nn({
    fill: new Nn({ color: "rgba(173, 216, 230, 0.4)" }),
    stroke: new xs({ color: "#87CEFA", width: 2 }),
  }),
  JC = new nn({
    image: new Tl({
      radius: 7,
      fill: new Nn({ color: "rgba(173, 216, 230, 0.6)" }),
      stroke: new xs({ color: "#4682B4", width: 2 }),
    }),
  }),
  $C = new nn({
    fill: new Nn({ color: "rgb(100,174,241)" }),
    stroke: new xs({ color: "rgb(100,174,241)", width: 3 }),
    image: new Tl({
      radius: 9,
      fill: new Nn({ color: "rgb(100,174,241)" }),
      stroke: new xs({ color: "rgba(106,162,178,0.8)", width: 3 }),
    }),
  }),
  tR = new hC({ source: new DC() }),
  y1 = new Wd({
    source: new Pd({
      url: "public/geojson/Sivilforsvarsdistrikter.geojson",
      format: new m1(),
    }),
    style: QC,
  }),
  p1 = new Wd({
    source: new Pd({
      url: "public/geojson/Offentligetilfluktsrom.geojson",
      format: new m1(),
    }),
    style: JC,
  }),
  Wi = new ZT({
    view: new Ji({ center: [10.8, 59.9], zoom: 9 }),
    layers: [tR, y1, p1],
  });
function eR() {
  const r = hs.useRef(null),
    t = hs.useRef(null),
    [i, s] = hs.useState(""),
    [l, o] = hs.useState(""),
    [c, h] = hs.useState(!0),
    [d, _] = hs.useState(!0);
  hs.useEffect(() => {
    if ((Wi.setTarget(r.current), t.current)) {
      const v = new VT({
        element: t.current,
        positioning: "bottom-left",
        offset: [10, -10],
      });
      Wi.addOverlay(v),
        Wi.on("click", (x) => {
          const R = Wi.forEachFeatureAtPixel(x.pixel, (b) => b);
          if (R) {
            if (R.getGeometry().getType() === "Polygon") {
              const w = R.get("navn") || "Unknown Name";
              o(`Region Name: ${w}`), s("");
            } else {
              const w = R.get("romnr") || "Unknown Room Number",
                M = R.get("plasser") || "Unknown Capacity",
                G = R.get("adresse") || "Unknown Address";
              s(`
                            Room Number: ${w}<br/>
                            Capacity: ${M}<br/>
                            Address: ${G}
                        `),
                o("");
            }
            v.setPosition(x.coordinate);
          }
        });
      const E = new Wd({ source: new Pd(), style: $C });
      Wi.addLayer(E),
        Wi.on("pointermove", (x) => {
          var b, w, M;
          const R = Wi.forEachFeatureAtPixel(x.pixel, (G) => G);
          R
            ? ((b = E.getSource()) == null || b.clear(),
              (w = E.getSource()) == null || w.addFeature(R))
            : (M = E.getSource()) == null || M.clear();
        });
    }
    return () => {
      Wi.setTarget(void 0);
    };
  }, []);
  const m = (v) => {
      v === "defence"
        ? (h(!c), y1.setVisible(!c))
        : v === "shelter" && (_(!d), p1.setVisible(!d));
    },
    y = () => {
      navigator.geolocation
        ? navigator.geolocation.getCurrentPosition(
            (v) => {
              const { latitude: E, longitude: x } = v.coords;
              Wi.getView().setCenter([x, E]), Wi.getView().setZoom(14);
            },
            (v) => {
              console.error("Error getting location", v),
                alert("Unable to retrieve your location.");
            },
          )
        : alert("Geolocation is not supported by your browser.");
    };
  return zi.createElement(
    "div",
    {
      style: {
        display: "flex",
        height: "100vh",
        width: "100%",
        position: "relative",
      },
    },
    zi.createElement("div", {
      ref: r,
      style: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      },
    }),
    zi.createElement(
      "div",
      {
        style: {
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: 10,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          padding: "10px",
          borderRadius: "5px",
        },
      },
      zi.createElement(
        "label",
        { style: { display: "block", marginBottom: "10px" } },
        zi.createElement("input", {
          type: "checkbox",
          checked: c,
          onChange: () => m("defence"),
          style: { transform: "scale(0.8)", marginRight: "10px" },
        }),
        "Show Civil Defence Regions",
      ),
      zi.createElement(
        "label",
        { style: { display: "block", marginBottom: "10px" } },
        zi.createElement("input", {
          type: "checkbox",
          checked: d,
          onChange: () => m("shelter"),
          style: { transform: "scale(0.8)", marginRight: "10px" },
        }),
        "Show Emergency Shelters",
      ),
      zi.createElement("br", null),
      zi.createElement(
        "button",
        {
          onClick: y,
          style: {
            backgroundColor: "#ADD8E6",
            border: "2px solid #4682B4",
            color: "#4682B4",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          },
        },
        "My Location",
      ),
    ),
    zi.createElement("div", {
      ref: t,
      id: "info-overlay",
      dangerouslySetInnerHTML: { __html: i || l },
      style: {
        width: "400px",
        height: "150px",
        padding: "10px",
        borderLeft: "2px solid #ccc",
        boxSizing: "border-box",
        overflowY: "hidden",
        whiteSpace: "normal",
        wordWrap: "break-word",
        position: "absolute",
        bottom: "10px",
        left: "10px",
        zIndex: 10,
      },
    }),
  );
}
XE.createRoot(document.getElementById("root")).render(
  zi.createElement(eR, null),
);
