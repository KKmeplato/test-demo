import * as S from "react";
import Z, { createContext as $t, useMemo as Fe, createElement as y, useContext as jt, useCallback as ie, forwardRef as O, Children as rt, isValidElement as sr, cloneElement as xn, Fragment as Lt, useRef as k, useEffect as G, useState as X, useLayoutEffect as $n, useReducer as ma, useId as Ft } from "react";
import * as ha from "react-dom";
import ga, { flushSync as Wo, createPortal as xa } from "react-dom";
function $a(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qr = { exports: {} }, St = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var io;
function wa() {
  if (io)
    return St;
  io = 1;
  var e = Z, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, l) {
    var u, d = {}, p = null, f = null;
    l !== void 0 && (p = "" + l), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (f = c.ref);
    for (u in c)
      n.call(c, u) && !i.hasOwnProperty(u) && (d[u] = c[u]);
    if (a && a.defaultProps)
      for (u in c = a.defaultProps, c)
        d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: t, type: a, key: p, ref: f, props: d, _owner: o.current };
  }
  return St.Fragment = r, St.jsx = s, St.jsxs = s, St;
}
var Rt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var so;
function ya() {
  return so || (so = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Z, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), b = Symbol.iterator, v = "@@iterator";
    function g(h) {
      if (h === null || typeof h != "object")
        return null;
      var A = b && h[b] || h[v];
      return typeof A == "function" ? A : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(h) {
      {
        for (var A = arguments.length, j = new Array(A > 1 ? A - 1 : 0), Y = 1; Y < A; Y++)
          j[Y - 1] = arguments[Y];
        w("error", h, j);
      }
    }
    function w(h, A, j) {
      {
        var Y = x.ReactDebugCurrentFrame, oe = Y.getStackAddendum();
        oe !== "" && (A += "%s", j = j.concat([oe]));
        var ae = j.map(function(ne) {
          return String(ne);
        });
        ae.unshift("Warning: " + A), Function.prototype.apply.call(console[h], console, ae);
      }
    }
    var C = !1, P = !1, T = !1, _ = !1, R = !1, D;
    D = Symbol.for("react.module.reference");
    function U(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === n || h === i || R || h === o || h === l || h === u || _ || h === f || C || P || T || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === d || h.$$typeof === s || h.$$typeof === a || h.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === D || h.getModuleId !== void 0));
    }
    function z(h, A, j) {
      var Y = h.displayName;
      if (Y)
        return Y;
      var oe = A.displayName || A.name || "";
      return oe !== "" ? j + "(" + oe + ")" : j;
    }
    function N(h) {
      return h.displayName || "Context";
    }
    function W(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
        return h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case l:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case a:
            var A = h;
            return N(A) + ".Consumer";
          case s:
            var j = h;
            return N(j._context) + ".Provider";
          case c:
            return z(h, h.render, "ForwardRef");
          case d:
            var Y = h.displayName || null;
            return Y !== null ? Y : W(h.type) || "Memo";
          case p: {
            var oe = h, ae = oe._payload, ne = oe._init;
            try {
              return W(ne(ae));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, M = 0, F, H, V, L, te, J, le;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Ae() {
      {
        if (M === 0) {
          F = console.log, H = console.info, V = console.warn, L = console.error, te = console.group, J = console.groupCollapsed, le = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: h,
            log: h,
            warn: h,
            error: h,
            group: h,
            groupCollapsed: h,
            groupEnd: h
          });
        }
        M++;
      }
    }
    function Ne() {
      {
        if (M--, M === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: E({}, h, {
              value: F
            }),
            info: E({}, h, {
              value: H
            }),
            warn: E({}, h, {
              value: V
            }),
            error: E({}, h, {
              value: L
            }),
            group: E({}, h, {
              value: te
            }),
            groupCollapsed: E({}, h, {
              value: J
            }),
            groupEnd: E({}, h, {
              value: le
            })
          });
        }
        M < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var be = x.ReactCurrentDispatcher, Ce;
    function De(h, A, j) {
      {
        if (Ce === void 0)
          try {
            throw Error();
          } catch (oe) {
            var Y = oe.stack.trim().match(/\n( *(at )?)/);
            Ce = Y && Y[1] || "";
          }
        return `
` + Ce + h;
      }
    }
    var fe = !1, ke;
    {
      var Tr = typeof WeakMap == "function" ? WeakMap : Map;
      ke = new Tr();
    }
    function Ht(h, A) {
      if (!h || fe)
        return "";
      {
        var j = ke.get(h);
        if (j !== void 0)
          return j;
      }
      var Y;
      fe = !0;
      var oe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ae;
      ae = be.current, be.current = null, Ae();
      try {
        if (A) {
          var ne = function() {
            throw Error();
          };
          if (Object.defineProperty(ne.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ne, []);
            } catch (je) {
              Y = je;
            }
            Reflect.construct(h, [], ne);
          } else {
            try {
              ne.call();
            } catch (je) {
              Y = je;
            }
            h.call(ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (je) {
            Y = je;
          }
          h();
        }
      } catch (je) {
        if (je && Y && typeof je.stack == "string") {
          for (var re = je.stack.split(`
`), me = Y.stack.split(`
`), de = re.length - 1, ue = me.length - 1; de >= 1 && ue >= 0 && re[de] !== me[ue]; )
            ue--;
          for (; de >= 1 && ue >= 0; de--, ue--)
            if (re[de] !== me[ue]) {
              if (de !== 1 || ue !== 1)
                do
                  if (de--, ue--, ue < 0 || re[de] !== me[ue]) {
                    var Ee = `
` + re[de].replace(" at new ", " at ");
                    return h.displayName && Ee.includes("<anonymous>") && (Ee = Ee.replace("<anonymous>", h.displayName)), typeof h == "function" && ke.set(h, Ee), Ee;
                  }
                while (de >= 1 && ue >= 0);
              break;
            }
        }
      } finally {
        fe = !1, be.current = ae, Ne(), Error.prepareStackTrace = oe;
      }
      var ut = h ? h.displayName || h.name : "", oo = ut ? De(ut) : "";
      return typeof h == "function" && ke.set(h, oo), oo;
    }
    function Ar(h, A, j) {
      return Ht(h, !1);
    }
    function Or(h) {
      var A = h.prototype;
      return !!(A && A.isReactComponent);
    }
    function Oe(h, A, j) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return Ht(h, Or(h));
      if (typeof h == "string")
        return De(h);
      switch (h) {
        case l:
          return De("Suspense");
        case u:
          return De("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case c:
            return Ar(h.render);
          case d:
            return Oe(h.type, A, j);
          case p: {
            var Y = h, oe = Y._payload, ae = Y._init;
            try {
              return Oe(ae(oe), A, j);
            } catch {
            }
          }
        }
      return "";
    }
    var et = Object.prototype.hasOwnProperty, Gt = {}, Yt = x.ReactDebugCurrentFrame;
    function ct(h) {
      if (h) {
        var A = h._owner, j = Oe(h.type, h._source, A ? A.type : null);
        Yt.setExtraStackFrame(j);
      } else
        Yt.setExtraStackFrame(null);
    }
    function Ir(h, A, j, Y, oe) {
      {
        var ae = Function.call.bind(et);
        for (var ne in h)
          if (ae(h, ne)) {
            var re = void 0;
            try {
              if (typeof h[ne] != "function") {
                var me = Error((Y || "React class") + ": " + j + " type `" + ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw me.name = "Invariant Violation", me;
              }
              re = h[ne](A, ne, Y, j, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (de) {
              re = de;
            }
            re && !(re instanceof Error) && (ct(oe), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Y || "React class", j, ne, typeof re), ct(null)), re instanceof Error && !(re.message in Gt) && (Gt[re.message] = !0, ct(oe), $("Failed %s type: %s", j, re.message), ct(null));
          }
      }
    }
    var lt = Array.isArray;
    function Mr(h) {
      return lt(h);
    }
    function Js(h) {
      {
        var A = typeof Symbol == "function" && Symbol.toStringTag, j = A && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return j;
      }
    }
    function Qs(h) {
      try {
        return Yn(h), !1;
      } catch {
        return !0;
      }
    }
    function Yn(h) {
      return "" + h;
    }
    function Xn(h) {
      if (Qs(h))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Js(h)), Yn(h);
    }
    var _t = x.ReactCurrentOwner, ea = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Zn, qn, Nr;
    Nr = {};
    function ta(h) {
      if (et.call(h, "ref")) {
        var A = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function ra(h) {
      if (et.call(h, "key")) {
        var A = Object.getOwnPropertyDescriptor(h, "key").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function na(h, A) {
      if (typeof h.ref == "string" && _t.current && A && _t.current.stateNode !== A) {
        var j = W(_t.current.type);
        Nr[j] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(_t.current.type), h.ref), Nr[j] = !0);
      }
    }
    function oa(h, A) {
      {
        var j = function() {
          Zn || (Zn = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        j.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: j,
          configurable: !0
        });
      }
    }
    function ia(h, A) {
      {
        var j = function() {
          qn || (qn = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        j.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: j,
          configurable: !0
        });
      }
    }
    var sa = function(h, A, j, Y, oe, ae, ne) {
      var re = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: h,
        key: A,
        ref: j,
        props: ne,
        // Record the component responsible for creating this element.
        _owner: ae
      };
      return re._store = {}, Object.defineProperty(re._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(re, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.defineProperty(re, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: oe
      }), Object.freeze && (Object.freeze(re.props), Object.freeze(re)), re;
    };
    function aa(h, A, j, Y, oe) {
      {
        var ae, ne = {}, re = null, me = null;
        j !== void 0 && (Xn(j), re = "" + j), ra(A) && (Xn(A.key), re = "" + A.key), ta(A) && (me = A.ref, na(A, oe));
        for (ae in A)
          et.call(A, ae) && !ea.hasOwnProperty(ae) && (ne[ae] = A[ae]);
        if (h && h.defaultProps) {
          var de = h.defaultProps;
          for (ae in de)
            ne[ae] === void 0 && (ne[ae] = de[ae]);
        }
        if (re || me) {
          var ue = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          re && oa(ne, ue), me && ia(ne, ue);
        }
        return sa(h, re, me, oe, Y, _t.current, ne);
      }
    }
    var Dr = x.ReactCurrentOwner, Jn = x.ReactDebugCurrentFrame;
    function dt(h) {
      if (h) {
        var A = h._owner, j = Oe(h.type, h._source, A ? A.type : null);
        Jn.setExtraStackFrame(j);
      } else
        Jn.setExtraStackFrame(null);
    }
    var kr;
    kr = !1;
    function jr(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function Qn() {
      {
        if (Dr.current) {
          var h = W(Dr.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function ca(h) {
      {
        if (h !== void 0) {
          var A = h.fileName.replace(/^.*[\\\/]/, ""), j = h.lineNumber;
          return `

Check your code at ` + A + ":" + j + ".";
        }
        return "";
      }
    }
    var eo = {};
    function la(h) {
      {
        var A = Qn();
        if (!A) {
          var j = typeof h == "string" ? h : h.displayName || h.name;
          j && (A = `

Check the top-level render call using <` + j + ">.");
        }
        return A;
      }
    }
    function to(h, A) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var j = la(A);
        if (eo[j])
          return;
        eo[j] = !0;
        var Y = "";
        h && h._owner && h._owner !== Dr.current && (Y = " It was passed a child from " + W(h._owner.type) + "."), dt(h), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', j, Y), dt(null);
      }
    }
    function ro(h, A) {
      {
        if (typeof h != "object")
          return;
        if (Mr(h))
          for (var j = 0; j < h.length; j++) {
            var Y = h[j];
            jr(Y) && to(Y, A);
          }
        else if (jr(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var oe = g(h);
          if (typeof oe == "function" && oe !== h.entries)
            for (var ae = oe.call(h), ne; !(ne = ae.next()).done; )
              jr(ne.value) && to(ne.value, A);
        }
      }
    }
    function da(h) {
      {
        var A = h.type;
        if (A == null || typeof A == "string")
          return;
        var j;
        if (typeof A == "function")
          j = A.propTypes;
        else if (typeof A == "object" && (A.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        A.$$typeof === d))
          j = A.propTypes;
        else
          return;
        if (j) {
          var Y = W(A);
          Ir(j, h.props, "prop", Y, h);
        } else if (A.PropTypes !== void 0 && !kr) {
          kr = !0;
          var oe = W(A);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", oe || "Unknown");
        }
        typeof A.getDefaultProps == "function" && !A.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ua(h) {
      {
        for (var A = Object.keys(h.props), j = 0; j < A.length; j++) {
          var Y = A[j];
          if (Y !== "children" && Y !== "key") {
            dt(h), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Y), dt(null);
            break;
          }
        }
        h.ref !== null && (dt(h), $("Invalid attribute `ref` supplied to `React.Fragment`."), dt(null));
      }
    }
    function no(h, A, j, Y, oe, ae) {
      {
        var ne = U(h);
        if (!ne) {
          var re = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var me = ca(oe);
          me ? re += me : re += Qn();
          var de;
          h === null ? de = "null" : Mr(h) ? de = "array" : h !== void 0 && h.$$typeof === t ? (de = "<" + (W(h.type) || "Unknown") + " />", re = " Did you accidentally export a JSX literal instead of a component?") : de = typeof h, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", de, re);
        }
        var ue = aa(h, A, j, oe, ae);
        if (ue == null)
          return ue;
        if (ne) {
          var Ee = A.children;
          if (Ee !== void 0)
            if (Y)
              if (Mr(Ee)) {
                for (var ut = 0; ut < Ee.length; ut++)
                  ro(Ee[ut], h);
                Object.freeze && Object.freeze(Ee);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ro(Ee, h);
        }
        return h === n ? ua(ue) : da(ue), ue;
      }
    }
    function fa(h, A, j) {
      return no(h, A, j, !0);
    }
    function pa(h, A, j) {
      return no(h, A, j, !1);
    }
    var va = pa, ba = fa;
    Rt.Fragment = n, Rt.jsx = va, Rt.jsxs = ba;
  }()), Rt;
}
process.env.NODE_ENV === "production" ? qr.exports = wa() : qr.exports = ya();
var m = qr.exports;
function I() {
  return I = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, I.apply(this, arguments);
}
function ge(e, t = []) {
  let r = [];
  function n(i, s) {
    const a = /* @__PURE__ */ $t(s), c = r.length;
    r = [
      ...r,
      s
    ];
    function l(d) {
      const { scope: p, children: f, ...b } = d, v = (p == null ? void 0 : p[e][c]) || a, g = Fe(
        () => b,
        Object.values(b)
      );
      return /* @__PURE__ */ y(v.Provider, {
        value: g
      }, f);
    }
    function u(d, p) {
      const f = (p == null ? void 0 : p[e][c]) || a, b = jt(f);
      if (b)
        return b;
      if (s !== void 0)
        return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return l.displayName = i + "Provider", [
      l,
      u
    ];
  }
  const o = () => {
    const i = r.map((s) => /* @__PURE__ */ $t(s));
    return function(a) {
      const c = (a == null ? void 0 : a[e]) || i;
      return Fe(
        () => ({
          [`__scope${e}`]: {
            ...a,
            [e]: c
          }
        }),
        [
          a,
          c
        ]
      );
    };
  };
  return o.scopeName = e, [
    n,
    Ca(o, ...t)
  ];
}
function Ca(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const r = () => {
    const n = e.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return function(i) {
      const s = n.reduce((a, { useScope: c, scopeName: l }) => {
        const d = c(i)[`__scope${l}`];
        return {
          ...a,
          ...d
        };
      }, {});
      return Fe(
        () => ({
          [`__scope${t.scopeName}`]: s
        }),
        [
          s
        ]
      );
    };
  };
  return r.scopeName = t.scopeName, r;
}
function Ea(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function wn(...e) {
  return (t) => e.forEach(
    (r) => Ea(r, t)
  );
}
function se(...e) {
  return ie(wn(...e), e);
}
const ot = /* @__PURE__ */ O((e, t) => {
  const { children: r, ...n } = e, o = rt.toArray(r), i = o.find(_a);
  if (i) {
    const s = i.props.children, a = o.map((c) => c === i ? rt.count(s) > 1 ? rt.only(null) : /* @__PURE__ */ sr(s) ? s.props.children : null : c);
    return /* @__PURE__ */ y(Jr, I({}, n, {
      ref: t
    }), /* @__PURE__ */ sr(s) ? /* @__PURE__ */ xn(s, void 0, a) : null);
  }
  return /* @__PURE__ */ y(Jr, I({}, n, {
    ref: t
  }), r);
});
ot.displayName = "Slot";
const Jr = /* @__PURE__ */ O((e, t) => {
  const { children: r, ...n } = e;
  return /* @__PURE__ */ sr(r) ? /* @__PURE__ */ xn(r, {
    ...Sa(n, r.props),
    ref: t ? wn(t, r.ref) : r.ref
  }) : rt.count(r) > 1 ? rt.only(null) : null;
});
Jr.displayName = "SlotClone";
const Pa = ({ children: e }) => /* @__PURE__ */ y(Lt, null, e);
function _a(e) {
  return /* @__PURE__ */ sr(e) && e.type === Pa;
}
function Sa(e, t) {
  const r = {
    ...t
  };
  for (const n in t) {
    const o = e[n], i = t[n];
    /^on[A-Z]/.test(n) ? o && i ? r[n] = (...a) => {
      i(...a), o(...a);
    } : o && (r[n] = o) : n === "style" ? r[n] = {
      ...o,
      ...i
    } : n === "className" && (r[n] = [
      o,
      i
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...r
  };
}
function Vt(e) {
  const t = e + "CollectionProvider", [r, n] = ge(t), [o, i] = r(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), s = (f) => {
    const { scope: b, children: v } = f, g = Z.useRef(null), x = Z.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ Z.createElement(o, {
      scope: b,
      itemMap: x,
      collectionRef: g
    }, v);
  }, a = e + "CollectionSlot", c = /* @__PURE__ */ Z.forwardRef((f, b) => {
    const { scope: v, children: g } = f, x = i(a, v), $ = se(b, x.collectionRef);
    return /* @__PURE__ */ Z.createElement(ot, {
      ref: $
    }, g);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = /* @__PURE__ */ Z.forwardRef((f, b) => {
    const { scope: v, children: g, ...x } = f, $ = Z.useRef(null), w = se(b, $), C = i(l, v);
    return Z.useEffect(() => (C.itemMap.set($, {
      ref: $,
      ...x
    }), () => void C.itemMap.delete($))), /* @__PURE__ */ Z.createElement(ot, {
      [u]: "",
      ref: w
    }, g);
  });
  function p(f) {
    const b = i(e + "CollectionConsumer", f);
    return Z.useCallback(() => {
      const g = b.collectionRef.current;
      if (!g)
        return [];
      const x = Array.from(g.querySelectorAll(`[${u}]`));
      return Array.from(b.itemMap.values()).sort(
        (C, P) => x.indexOf(C.ref.current) - x.indexOf(P.ref.current)
      );
    }, [
      b.collectionRef,
      b.itemMap
    ]);
  }
  return [
    {
      Provider: s,
      Slot: c,
      ItemSlot: d
    },
    p,
    n
  ];
}
function K(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), r === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function $e(e) {
  const t = k(e);
  return G(() => {
    t.current = e;
  }), Fe(
    () => (...r) => {
      var n;
      return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...r);
    },
    []
  );
}
function Te({ prop: e, defaultProp: t, onChange: r = () => {
} }) {
  const [n, o] = Ra({
    defaultProp: t,
    onChange: r
  }), i = e !== void 0, s = i ? e : n, a = $e(r), c = ie((l) => {
    if (i) {
      const d = typeof l == "function" ? l(e) : l;
      d !== e && a(d);
    } else
      o(l);
  }, [
    i,
    e,
    o,
    a
  ]);
  return [
    s,
    c
  ];
}
function Ra({ defaultProp: e, onChange: t }) {
  const r = X(e), [n] = r, o = k(n), i = $e(t);
  return G(() => {
    o.current !== n && (i(n), o.current = n);
  }, [
    n,
    o,
    i
  ]), r;
}
const Ta = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], ee = Ta.reduce((e, t) => {
  const r = /* @__PURE__ */ O((n, o) => {
    const { asChild: i, ...s } = n, a = i ? ot : t;
    return G(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ y(a, I({}, s, {
      ref: o
    }));
  });
  return r.displayName = `Primitive.${t}`, {
    ...e,
    [t]: r
  };
}, {});
function yn(e, t) {
  e && Wo(
    () => e.dispatchEvent(t)
  );
}
const Ye = globalThis != null && globalThis.document ? $n : () => {
};
function Aa(e, t) {
  return ma((r, n) => {
    const o = t[r][n];
    return o ?? r;
  }, e);
}
const Se = (e) => {
  const { present: t, children: r } = e, n = Oa(t), o = typeof r == "function" ? r({
    present: n.isPresent
  }) : rt.only(r), i = se(n.ref, o.ref);
  return typeof r == "function" || n.isPresent ? /* @__PURE__ */ xn(o, {
    ref: i
  }) : null;
};
Se.displayName = "Presence";
function Oa(e) {
  const [t, r] = X(), n = k({}), o = k(e), i = k("none"), s = e ? "mounted" : "unmounted", [a, c] = Aa(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return G(() => {
    const l = Xt(n.current);
    i.current = a === "mounted" ? l : "none";
  }, [
    a
  ]), Ye(() => {
    const l = n.current, u = o.current;
    if (u !== e) {
      const p = i.current, f = Xt(l);
      e ? c("MOUNT") : f === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && p !== f ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), Ye(() => {
    if (t) {
      const l = (d) => {
        const f = Xt(n.current).includes(d.animationName);
        d.target === t && f && Wo(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (i.current = Xt(n.current));
      };
      return t.addEventListener("animationstart", u), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      c("ANIMATION_END");
  }, [
    t,
    c
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(a),
    ref: ie((l) => {
      l && (n.current = getComputedStyle(l)), r(l);
    }, [])
  };
}
function Xt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
const Ia = S["useId".toString()] || (() => {
});
let Ma = 0;
function Le(e) {
  const [t, r] = S.useState(Ia());
  return Ye(() => {
    e || r(
      (n) => n ?? String(Ma++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Ho = "Collapsible", [Na, Go] = ge(Ho), [Da, Cn] = Na(Ho), ka = /* @__PURE__ */ O((e, t) => {
  const { __scopeCollapsible: r, open: n, defaultOpen: o, disabled: i, onOpenChange: s, ...a } = e, [c = !1, l] = Te({
    prop: n,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ y(Da, {
    scope: r,
    disabled: i,
    contentId: Le(),
    open: c,
    onOpenToggle: ie(
      () => l(
        (u) => !u
      ),
      [
        l
      ]
    )
  }, /* @__PURE__ */ y(ee.div, I({
    "data-state": En(c),
    "data-disabled": i ? "" : void 0
  }, a, {
    ref: t
  })));
}), ja = "CollapsibleTrigger", La = /* @__PURE__ */ O((e, t) => {
  const { __scopeCollapsible: r, ...n } = e, o = Cn(ja, r);
  return /* @__PURE__ */ y(ee.button, I({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": En(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, n, {
    ref: t,
    onClick: K(e.onClick, o.onOpenToggle)
  }));
}), Yo = "CollapsibleContent", Fa = /* @__PURE__ */ O((e, t) => {
  const { forceMount: r, ...n } = e, o = Cn(Yo, e.__scopeCollapsible);
  return /* @__PURE__ */ y(
    Se,
    {
      present: r || o.open
    },
    ({ present: i }) => /* @__PURE__ */ y(Va, I({}, n, {
      ref: t,
      present: i
    }))
  );
}), Va = /* @__PURE__ */ O((e, t) => {
  const { __scopeCollapsible: r, present: n, children: o, ...i } = e, s = Cn(Yo, r), [a, c] = X(n), l = k(null), u = se(t, l), d = k(0), p = d.current, f = k(0), b = f.current, v = s.open || a, g = k(v), x = k();
  return G(() => {
    const $ = requestAnimationFrame(
      () => g.current = !1
    );
    return () => cancelAnimationFrame($);
  }, []), Ye(() => {
    const $ = l.current;
    if ($) {
      x.current = x.current || {
        transitionDuration: $.style.transitionDuration,
        animationName: $.style.animationName
      }, $.style.transitionDuration = "0s", $.style.animationName = "none";
      const w = $.getBoundingClientRect();
      d.current = w.height, f.current = w.width, g.current || ($.style.transitionDuration = x.current.transitionDuration, $.style.animationName = x.current.animationName), c(n);
    }
  }, [
    s.open,
    n
  ]), /* @__PURE__ */ y(ee.div, I({
    "data-state": En(s.open),
    "data-disabled": s.disabled ? "" : void 0,
    id: s.contentId,
    hidden: !v
  }, i, {
    ref: u,
    style: {
      "--radix-collapsible-content-height": p ? `${p}px` : void 0,
      "--radix-collapsible-content-width": b ? `${b}px` : void 0,
      ...e.style
    }
  }), v && o);
});
function En(e) {
  return e ? "open" : "closed";
}
const Ba = ka, Ua = La, za = Fa, Ka = /* @__PURE__ */ $t(void 0);
function Bt(e) {
  const t = jt(Ka);
  return e || t || "ltr";
}
const Qe = "Accordion", Wa = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [Pn, Ha, Ga] = Vt(Qe), [vr, Zv] = ge(Qe, [
  Ga,
  Go
]), _n = Go(), Xo = /* @__PURE__ */ Z.forwardRef((e, t) => {
  const { type: r, ...n } = e, o = n, i = n;
  return /* @__PURE__ */ Z.createElement(Pn.Provider, {
    scope: e.__scopeAccordion
  }, r === "multiple" ? /* @__PURE__ */ Z.createElement(qa, I({}, i, {
    ref: t
  })) : /* @__PURE__ */ Z.createElement(Za, I({}, o, {
    ref: t
  })));
});
Xo.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [Zo, Ya] = vr(Qe), [qo, Xa] = vr(Qe, {
  collapsible: !1
}), Za = /* @__PURE__ */ Z.forwardRef((e, t) => {
  const { value: r, defaultValue: n, onValueChange: o = () => {
  }, collapsible: i = !1, ...s } = e, [a, c] = Te({
    prop: r,
    defaultProp: n,
    onChange: o
  });
  return /* @__PURE__ */ Z.createElement(Zo, {
    scope: e.__scopeAccordion,
    value: a ? [
      a
    ] : [],
    onItemOpen: c,
    onItemClose: Z.useCallback(
      () => i && c(""),
      [
        i,
        c
      ]
    )
  }, /* @__PURE__ */ Z.createElement(qo, {
    scope: e.__scopeAccordion,
    collapsible: i
  }, /* @__PURE__ */ Z.createElement(Jo, I({}, s, {
    ref: t
  }))));
}), qa = /* @__PURE__ */ Z.forwardRef((e, t) => {
  const { value: r, defaultValue: n, onValueChange: o = () => {
  }, ...i } = e, [s = [], a] = Te({
    prop: r,
    defaultProp: n,
    onChange: o
  }), c = Z.useCallback(
    (u) => a(
      (d = []) => [
        ...d,
        u
      ]
    ),
    [
      a
    ]
  ), l = Z.useCallback(
    (u) => a(
      (d = []) => d.filter(
        (p) => p !== u
      )
    ),
    [
      a
    ]
  );
  return /* @__PURE__ */ Z.createElement(Zo, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: c,
    onItemClose: l
  }, /* @__PURE__ */ Z.createElement(qo, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ Z.createElement(Jo, I({}, i, {
    ref: t
  }))));
}), [Ja, br] = vr(Qe), Jo = /* @__PURE__ */ Z.forwardRef((e, t) => {
  const { __scopeAccordion: r, disabled: n, dir: o, orientation: i = "vertical", ...s } = e, a = Z.useRef(null), c = se(a, t), l = Ha(r), d = Bt(o) === "ltr", p = K(e.onKeyDown, (f) => {
    var b;
    if (!Wa.includes(f.key))
      return;
    const v = f.target, g = l().filter((D) => {
      var U;
      return !((U = D.ref.current) !== null && U !== void 0 && U.disabled);
    }), x = g.findIndex(
      (D) => D.ref.current === v
    ), $ = g.length;
    if (x === -1)
      return;
    f.preventDefault();
    let w = x;
    const C = 0, P = $ - 1, T = () => {
      w = x + 1, w > P && (w = C);
    }, _ = () => {
      w = x - 1, w < C && (w = P);
    };
    switch (f.key) {
      case "Home":
        w = C;
        break;
      case "End":
        w = P;
        break;
      case "ArrowRight":
        i === "horizontal" && (d ? T() : _());
        break;
      case "ArrowDown":
        i === "vertical" && T();
        break;
      case "ArrowLeft":
        i === "horizontal" && (d ? _() : T());
        break;
      case "ArrowUp":
        i === "vertical" && _();
        break;
    }
    const R = w % $;
    (b = g[R].ref.current) === null || b === void 0 || b.focus();
  });
  return /* @__PURE__ */ Z.createElement(Ja, {
    scope: r,
    disabled: n,
    direction: o,
    orientation: i
  }, /* @__PURE__ */ Z.createElement(Pn.Slot, {
    scope: r
  }, /* @__PURE__ */ Z.createElement(ee.div, I({}, s, {
    "data-orientation": i,
    ref: c,
    onKeyDown: n ? void 0 : p
  }))));
}), Qr = "AccordionItem", [Qa, Sn] = vr(Qr), ec = /* @__PURE__ */ Z.forwardRef((e, t) => {
  const { __scopeAccordion: r, value: n, ...o } = e, i = br(Qr, r), s = Ya(Qr, r), a = _n(r), c = Le(), l = n && s.value.includes(n) || !1, u = i.disabled || e.disabled;
  return /* @__PURE__ */ Z.createElement(Qa, {
    scope: r,
    open: l,
    disabled: u,
    triggerId: c
  }, /* @__PURE__ */ Z.createElement(Ba, I({
    "data-orientation": i.orientation,
    "data-state": Qo(l)
  }, a, o, {
    ref: t,
    disabled: u,
    open: l,
    onOpenChange: (d) => {
      d ? s.onItemOpen(n) : s.onItemClose(n);
    }
  })));
}), tc = "AccordionHeader", rc = /* @__PURE__ */ Z.forwardRef((e, t) => {
  const { __scopeAccordion: r, ...n } = e, o = br(Qe, r), i = Sn(tc, r);
  return /* @__PURE__ */ Z.createElement(ee.h3, I({
    "data-orientation": o.orientation,
    "data-state": Qo(i.open),
    "data-disabled": i.disabled ? "" : void 0
  }, n, {
    ref: t
  }));
}), ao = "AccordionTrigger", nc = /* @__PURE__ */ Z.forwardRef((e, t) => {
  const { __scopeAccordion: r, ...n } = e, o = br(Qe, r), i = Sn(ao, r), s = Xa(ao, r), a = _n(r);
  return /* @__PURE__ */ Z.createElement(Pn.ItemSlot, {
    scope: r
  }, /* @__PURE__ */ Z.createElement(Ua, I({
    "aria-disabled": i.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: i.triggerId
  }, a, n, {
    ref: t
  })));
}), oc = "AccordionContent", ic = /* @__PURE__ */ Z.forwardRef((e, t) => {
  const { __scopeAccordion: r, ...n } = e, o = br(Qe, r), i = Sn(oc, r), s = _n(r);
  return /* @__PURE__ */ Z.createElement(za, I({
    role: "region",
    "aria-labelledby": i.triggerId,
    "data-orientation": o.orientation
  }, s, n, {
    ref: t,
    style: {
      "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
      "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
      ...e.style
    }
  }));
});
function Qo(e) {
  return e ? "open" : "closed";
}
const sc = Xo, ac = ec, cc = rc, lc = nc, dc = ic, Q = {
  add: O((e, t) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      ...e,
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          d: "M11.198 3.21496C11.198 2.55235 10.66 2.01432 9.99735 2.01432C9.33475 2.01432 8.79671 2.55235 8.79671 3.21496L8.79936 8.79937L3.21496 8.80202C2.55235 8.80202 2.01432 9.34005 2.01432 10.0027C2.01432 10.6653 2.55235 11.2033 3.21496 11.2033L8.79936 11.2006L8.80201 16.785C8.80201 17.4476 9.34005 17.9857 10.0027 17.9857C10.6653 17.9857 11.2033 17.4476 11.2033 16.785L11.2006 11.2006L16.785 11.198C17.4476 11.198 17.9857 10.66 17.9857 9.99735C17.9857 9.33475 17.4476 8.79671 16.785 8.79671L11.2006 8.79937L11.198 3.21496Z",
          fill: "currentColor"
        }
      )
    }
  )),
  ascending: O((e, t) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      ...e,
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          d: "M10.4548 8.2592L13.0259 10.8303C13.2107 11.0151 13.2649 11.2903 13.1645 11.5314C13.0641 11.7724 12.831 11.9291 12.5699 11.9291H7.42964C7.17052 11.9291 6.9355 11.7724 6.83507 11.5314C6.73463 11.2903 6.79087 11.0151 6.97367 10.8303L9.54481 8.2592C9.7959 8.00812 10.2037 8.00812 10.4548 8.2592Z",
          fill: "currentColor"
        }
      )
    }
  )),
  chevron: O((e, t) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      ...e,
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          d: "M14.2361 10.8069C14.6824 10.3606 14.6824 9.63584 14.2361 9.18956L7.38122 2.33471C6.93495 1.88843 6.21019 1.88843 5.76391 2.33471C5.31763 2.78099 5.31763 3.50575 5.76391 3.95202L11.8119 10L5.76748 16.048C5.3212 16.4943 5.3212 17.219 5.76748 17.6653C6.21376 18.1116 6.93851 18.1116 7.38479 17.6653L14.2396 10.8104L14.2361 10.8069Z",
          fill: "currentColor"
        }
      )
    }
  )),
  close: O((e, t) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      ...e,
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          d: "M15.6449 6.04935C16.1134 5.58082 16.1134 4.81993 15.6449 4.3514C15.1763 3.88287 14.4154 3.88287 13.9469 4.3514L10 8.30205L6.04935 4.35515C5.58082 3.88662 4.81993 3.88662 4.3514 4.35515C3.88287 4.82368 3.88287 5.58457 4.3514 6.0531L8.30205 10L4.35515 13.9506C3.88662 14.4192 3.88662 15.1801 4.35515 15.6486C4.82368 16.1171 5.58457 16.1171 6.0531 15.6486L10 11.698L13.9506 15.6449C14.4192 16.1134 15.1801 16.1134 15.6486 15.6449C16.1171 15.1763 16.1171 14.4154 15.6486 13.9469L11.698 10L15.6449 6.04935Z",
          fill: "currentColor"
        }
      )
    }
  )),
  error: O((e, t) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      ...e,
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          d: "M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM10 6C10.4156 6 10.75 6.33437 10.75 6.75V10.25C10.75 10.6656 10.4156 11 10 11C9.58437 11 9.25 10.6656 9.25 10.25V6.75C9.25 6.33437 9.58437 6 10 6ZM9 13C9 12.7348 9.10536 12.4804 9.29289 12.2929C9.48043 12.1054 9.73478 12 10 12C10.2652 12 10.5196 12.1054 10.7071 12.2929C10.8946 12.4804 11 12.7348 11 13C11 13.2652 10.8946 13.5196 10.7071 13.7071C10.5196 13.8946 10.2652 14 10 14C9.73478 14 9.48043 13.8946 9.29289 13.7071C9.10536 13.5196 9 13.2652 9 13Z",
          fill: "currentColor"
        }
      )
    }
  )),
  externalLink: O((e, t) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      ...e,
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          d: "M16 5.19972C16 4.53612 15.4637 4 14.7999 4H6.39925C5.73545 4 5.19916 4.53612 5.19916 5.19972C5.19916 5.86331 5.73545 6.39944 6.39925 6.39944H11.9009L4.35159 13.9502C3.8828 14.4188 3.8828 15.1799 4.35159 15.6485C4.82038 16.1172 5.58169 16.1172 6.05047 15.6485L13.5998 8.09779V13.5977C13.5998 14.2613 14.1361 14.7975 14.7999 14.7975C15.4637 14.7975 16 14.2613 16 13.5977V5.19972Z",
          fill: "currentColor"
        }
      )
    }
  )),
  info: O((e, t) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      ...e,
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          d: "M4.28571 2C3.025 2 2 3.025 2 4.28571V15.7143C2 16.975 3.025 18 4.28571 18H15.7143C16.975 18 18 16.975 18 15.7143V4.28571C18 3.025 16.975 2 15.7143 2H4.28571ZM8.57143 12.8571H9.42857V10.5714H8.57143C8.09643 10.5714 7.71429 10.1893 7.71429 9.71429C7.71429 9.23929 8.09643 8.85714 8.57143 8.85714H10.2857C10.7607 8.85714 11.1429 9.23929 11.1429 9.71429V12.8571H11.4286C11.9036 12.8571 12.2857 13.2393 12.2857 13.7143C12.2857 14.1893 11.9036 14.5714 11.4286 14.5714H8.57143C8.09643 14.5714 7.71429 14.1893 7.71429 13.7143C7.71429 13.2393 8.09643 12.8571 8.57143 12.8571ZM10 5.42857C10.3031 5.42857 10.5938 5.54898 10.8081 5.76331C11.0224 5.97763 11.1429 6.26832 11.1429 6.57143C11.1429 6.87453 11.0224 7.16522 10.8081 7.37955C10.5938 7.59388 10.3031 7.71429 10 7.71429C9.6969 7.71429 9.40621 7.59388 9.19188 7.37955C8.97755 7.16522 8.85714 6.87453 8.85714 6.57143C8.85714 6.26832 8.97755 5.97763 9.19188 5.76331C9.40621 5.54898 9.6969 5.42857 10 5.42857Z",
          fill: "currentColor"
        }
      )
    }
  )),
  language: O((e, t) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      viewBox: "0 0 27 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      ...e,
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          d: "M0 2.66667C0 1.19583 1.19583 0 2.66667 0H10.6667H12.6667H13.3333H24C25.4708 0 26.6667 1.19583 26.6667 2.66667V13.3333C26.6667 14.8042 25.4708 16 24 16H13.3333H12.6667H10.6667H2.66667C1.19583 16 0 14.8042 0 13.3333V2.66667ZM13.3333 2.66667V13.3333H24V2.66667H13.3333ZM7.42917 4.6625C7.29583 4.3625 6.99583 4.16667 6.66667 4.16667C6.3375 4.16667 6.0375 4.3625 5.90417 4.6625L3.2375 10.6625C3.05 11.0833 3.24167 11.575 3.6625 11.7625C4.08333 11.95 4.575 11.7583 4.7625 11.3375L5.13333 10.5H8.2L8.57083 11.3375C8.75833 11.7583 9.25 11.9458 9.67083 11.7625C10.0917 11.5792 10.2792 11.0833 10.0958 10.6625L7.42917 4.6625ZM6.66667 7.05L7.45833 8.83333H5.875L6.66667 7.05ZM18.6667 4.16667C19.125 4.16667 19.5 4.54167 19.5 5V5.16667H21.3333H22C22.4583 5.16667 22.8333 5.54167 22.8333 6C22.8333 6.45833 22.4583 6.83333 22 6.83333H21.9167L21.85 7.02083C21.4792 8.0375 20.9167 8.9625 20.2 9.74583C20.2375 9.77083 20.275 9.79167 20.3125 9.8125L21.1 10.2833C21.4958 10.5208 21.6208 11.0333 21.3875 11.425C21.1542 11.8167 20.6375 11.9458 20.2458 11.7125L19.4583 11.2417C19.2708 11.1292 19.0917 11.0125 18.9125 10.8875C18.4708 11.2 18 11.4708 17.4958 11.6958L17.3458 11.7625C16.925 11.95 16.4333 11.7583 16.2458 11.3375C16.0583 10.9167 16.25 10.425 16.6708 10.2375L16.8208 10.1708C17.0875 10.05 17.3458 9.91667 17.5917 9.7625L17.0833 9.25417C16.7583 8.92917 16.7583 8.4 17.0833 8.075C17.4083 7.75 17.9375 7.75 18.2625 8.075L18.8708 8.68333L18.8917 8.70417C19.4083 8.15833 19.8292 7.525 20.1333 6.82917H18.6667H15.6667C15.2083 6.82917 14.8333 6.45417 14.8333 5.99583C14.8333 5.5375 15.2083 5.1625 15.6667 5.1625H17.8333V4.99583C17.8333 4.5375 18.2083 4.1625 18.6667 4.1625V4.16667Z",
          fill: "currentColor"
        }
      )
    }
  )),
  loading: O((e, t) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      ...e,
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          d: "M17.6835 12.228C17.2976 13.5587 16.5728 14.7664 15.5799 15.7328C14.587 16.6992 13.3602 17.3911 12.0195 17.7409C10.6789 18.0907 9.27035 18.0862 7.93192 17.7281C6.59348 17.3699 5.37102 16.6702 4.38423 15.6976C3.39745 14.725 2.68018 13.5128 2.30267 12.1797C1.92517 10.8466 1.90036 9.4383 2.23068 8.09272C2.56101 6.74714 3.23514 5.51042 4.18705 4.50367C5.13897 3.49692 6.33604 2.75465 7.66103 2.34956",
          stroke: "currentColor",
          strokeWidth: "2.5",
          strokeLinecap: "round",
          strokeLinejoin: "bevel"
        }
      )
    }
  )),
  plus: O((e, t) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      ...e,
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          d: "M11.1979 3.21496C11.1979 2.55235 10.6599 2.01432 9.99728 2.01432C9.33468 2.01432 8.79664 2.55235 8.79664 3.21496L8.79929 8.79937L3.21488 8.80202C2.55228 8.80202 2.01425 9.34005 2.01425 10.0027C2.01425 10.6653 2.55228 11.2033 3.21488 11.2033L8.79929 11.2006L8.80194 16.785C8.80194 17.4476 9.33998 17.9857 10.0026 17.9857C10.6652 17.9857 11.2032 17.4476 11.2032 16.785L11.2006 11.2006L16.785 11.198C17.4476 11.198 17.9856 10.66 17.9856 9.99735C17.9856 9.33475 17.4476 8.79671 16.785 8.79671L11.2006 8.79937L11.1979 3.21496Z",
          fill: "currentColor"
        }
      )
    }
  )),
  search: O((e, t) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      ...e,
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          d: "M15.0006 8.49876C15.0006 9.93321 14.535 11.2583 13.7506 12.3333L17.707 16.2929C18.0977 16.6835 18.0977 17.3179 17.707 17.7086C17.3164 18.0992 16.682 18.0992 16.2913 17.7086L12.3349 13.749C11.2598 14.5366 9.93476 14.9991 8.50032 14.9991C4.90952 14.9991 2 12.0896 2 8.49876C2 4.90796 4.90952 1.99844 8.50032 1.99844C12.0911 1.99844 15.0006 4.90796 15.0006 8.49876ZM8.50032 12.999C9.09129 12.999 9.67649 12.8826 10.2225 12.6564C10.7685 12.4303 11.2646 12.0988 11.6825 11.6809C12.1003 11.263 12.4318 10.7669 12.658 10.2209C12.8841 9.67493 13.0005 9.08974 13.0005 8.49876C13.0005 7.90778 12.8841 7.32259 12.658 6.7766C12.4318 6.23061 12.1003 5.73451 11.6825 5.31663C11.2646 4.89874 10.7685 4.56726 10.2225 4.3411C9.67649 4.11494 9.09129 3.99854 8.50032 3.99854C7.90934 3.99854 7.32415 4.11494 6.77816 4.3411C6.23217 4.56726 5.73607 4.89874 5.31818 5.31663C4.9003 5.73451 4.56881 6.23061 4.34266 6.7766C4.1165 7.32259 4.0001 7.90778 4.0001 8.49876C4.0001 9.08974 4.1165 9.67493 4.34266 10.2209C4.56881 10.7669 4.9003 11.263 5.31818 11.6809C5.73607 12.0988 6.23217 12.4303 6.77816 12.6564C7.32415 12.8826 7.90934 12.999 8.50032 12.999Z",
          fill: "currentColor"
        }
      )
    }
  )),
  sort: O((e, t) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      ...e,
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          d: "M9.54525 11.7408L6.97411 9.16965C6.78931 8.98485 6.73507 8.70966 6.83551 8.46862C6.93594 8.22757 7.16895 8.07089 7.43008 8.07089H12.5704C12.8295 8.07089 13.0645 8.22757 13.1649 8.46862C13.2654 8.70966 13.2091 8.98485 13.0263 9.16965L10.4552 11.7408C10.2041 11.9919 9.79634 11.9919 9.54525 11.7408Z",
          fill: "currentColor"
        }
      )
    }
  )),
  subtract: O((e, t) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      ...e,
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          d: "M18 10C18 10.6808 17.45 11.2308 16.7692 11.2308H3.23077C2.55 11.2308 2 10.6808 2 10C2 9.31923 2.55 8.76923 3.23077 8.76923H16.7692C17.45 8.76923 18 9.31923 18 10Z",
          fill: "currentColor"
        }
      )
    }
  )),
  success: O((e, t) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      ...e,
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          d: "M10 18C14.4187 18 18 14.4187 18 10C18 5.58125 14.4187 2 10 2C5.58125 2 2 5.58125 2 10C2 14.4187 5.58125 18 10 18ZM13.5312 8.53125L9.53125 12.5312C9.2375 12.825 8.7625 12.825 8.47188 12.5312L6.47188 10.5312C6.17813 10.2375 6.17813 9.7625 6.47188 9.47188C6.76562 9.18125 7.24062 9.17813 7.53125 9.47188L9 10.9406L12.4688 7.46875C12.7625 7.175 13.2375 7.175 13.5281 7.46875C13.8187 7.7625 13.8219 8.2375 13.5281 8.52812L13.5312 8.53125Z",
          fill: "currentColor"
        }
      )
    }
  )),
  tick: O((e, t) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      ...e,
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          d: "M17.6652 4.62025C18.1116 5.06662 18.1116 5.79154 17.6652 6.23792L8.52338 15.3798C8.077 15.8261 7.35208 15.8261 6.9057 15.3798L2.33478 10.8088C1.88841 10.3625 1.88841 9.63754 2.33478 9.19116C2.78116 8.74478 3.50608 8.74478 3.95246 9.19116L7.71633 12.9515L16.0511 4.62025C16.4975 4.17387 17.2224 4.17387 17.6688 4.62025H17.6652Z",
          fill: "currentColor"
        }
      )
    }
  ))
};
Q.add.displayName = "Icon.add";
Q.ascending.displayName = "Icon.ascending";
Q.chevron.displayName = "Icon.chevron";
Q.close.displayName = "Icon.close";
Q.error.displayName = "Icon.error";
Q.externalLink.displayName = "Icon.externalLink";
Q.info.displayName = "Icon.info";
Q.language.displayName = "Icon.language";
Q.loading.displayName = "Icon.loading";
Q.plus.displayName = "Icon.plus";
Q.search.displayName = "Icon.search";
Q.sort.displayName = "Icon.sort";
Q.subtract.displayName = "Icon.subtract";
Q.success.displayName = "Icon.success";
Q.tick.displayName = "Icon.tick";
function ei(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = ei(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function ti() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = ei(e)) && (n && (n += " "), n += t);
  return n;
}
const Rn = "-";
function uc(e) {
  const t = pc(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  function o(s) {
    const a = s.split(Rn);
    return a[0] === "" && a.length !== 1 && a.shift(), ri(a, t) || fc(s);
  }
  function i(s, a) {
    const c = r[s] || [];
    return a && n[s] ? [...c, ...n[s]] : c;
  }
  return {
    getClassGroupId: o,
    getConflictingClassGroupIds: i
  };
}
function ri(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? ri(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(Rn);
  return (s = t.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : s.classGroupId;
}
const co = /^\[(.+)\]$/;
function fc(e) {
  if (co.test(e)) {
    const t = co.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function pc(e) {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return bc(Object.entries(e.classGroups), r).forEach(([i, s]) => {
    en(s, n, i, t);
  }), n;
}
function en(e, t, r, n) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : lo(t, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (vc(o)) {
        en(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([i, s]) => {
      en(s, lo(t, i), r, n);
    });
  });
}
function lo(e, t) {
  let r = e;
  return t.split(Rn).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function vc(e) {
  return e.isThemeGetter;
}
function bc(e, t) {
  return t ? e.map(([r, n]) => {
    const o = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, a]) => [t + s, a])) : i);
    return [r, o];
  }) : e;
}
function mc(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function o(i, s) {
    r.set(i, s), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get(i) {
      let s = r.get(i);
      if (s !== void 0)
        return s;
      if ((s = n.get(i)) !== void 0)
        return o(i, s), s;
    },
    set(i, s) {
      r.has(i) ? r.set(i, s) : o(i, s);
    }
  };
}
const ni = "!";
function hc(e) {
  const t = e.separator, r = t.length === 1, n = t[0], o = t.length;
  return function(s) {
    const a = [];
    let c = 0, l = 0, u;
    for (let v = 0; v < s.length; v++) {
      let g = s[v];
      if (c === 0) {
        if (g === n && (r || s.slice(v, v + o) === t)) {
          a.push(s.slice(l, v)), l = v + o;
          continue;
        }
        if (g === "/") {
          u = v;
          continue;
        }
      }
      g === "[" ? c++ : g === "]" && c--;
    }
    const d = a.length === 0 ? s : s.substring(l), p = d.startsWith(ni), f = p ? d.substring(1) : d, b = u && u > l ? u - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: p,
      baseClassName: f,
      maybePostfixModifierPosition: b
    };
  };
}
function gc(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}
function xc(e) {
  return {
    cache: mc(e.cacheSize),
    splitModifiers: hc(e),
    ...uc(e)
  };
}
const $c = /\s+/;
function wc(e, t) {
  const {
    splitModifiers: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, i = /* @__PURE__ */ new Set();
  return e.trim().split($c).map((s) => {
    const {
      modifiers: a,
      hasImportantModifier: c,
      baseClassName: l,
      maybePostfixModifierPosition: u
    } = r(s);
    let d = n(u ? l.substring(0, u) : l), p = !!u;
    if (!d) {
      if (!u)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (d = n(l), !d)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      p = !1;
    }
    const f = gc(a).join(":");
    return {
      isTailwindClass: !0,
      modifierId: c ? f + ni : f,
      classGroupId: d,
      originalClassName: s,
      hasPostfixModifier: p
    };
  }).reverse().filter((s) => {
    if (!s.isTailwindClass)
      return !0;
    const {
      modifierId: a,
      classGroupId: c,
      hasPostfixModifier: l
    } = s, u = a + c;
    return i.has(u) ? !1 : (i.add(u), o(c, l).forEach((d) => i.add(a + d)), !0);
  }).reverse().map((s) => s.originalClassName).join(" ");
}
function yc() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = oi(t)) && (n && (n += " "), n += r);
  return n;
}
function oi(e) {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = oi(e[n])) && (r && (r += " "), r += t);
  return r;
}
function Cc(e, ...t) {
  let r, n, o, i = s;
  function s(c) {
    const l = t.reduce((u, d) => d(u), e());
    return r = xc(l), n = r.cache.get, o = r.cache.set, i = a, a(c);
  }
  function a(c) {
    const l = n(c);
    if (l)
      return l;
    const u = wc(c, r);
    return o(c, u), u;
  }
  return function() {
    return i(yc.apply(null, arguments));
  };
}
function ce(e) {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}
const ii = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ec = /^\d+\/\d+$/, Pc = /* @__PURE__ */ new Set(["px", "full", "screen"]), _c = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Sc = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Rc = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Tc = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Re(e) {
  return tt(e) || Pc.has(e) || Ec.test(e);
}
function ze(e) {
  return yt(e, "length", jc);
}
function tt(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Zt(e) {
  return yt(e, "number", tt);
}
function Tt(e) {
  return !!e && Number.isInteger(Number(e));
}
function Ac(e) {
  return e.endsWith("%") && tt(e.slice(0, -1));
}
function q(e) {
  return ii.test(e);
}
function Ke(e) {
  return _c.test(e);
}
const Oc = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Ic(e) {
  return yt(e, Oc, si);
}
function Mc(e) {
  return yt(e, "position", si);
}
const Nc = /* @__PURE__ */ new Set(["image", "url"]);
function Dc(e) {
  return yt(e, Nc, Fc);
}
function kc(e) {
  return yt(e, "", Lc);
}
function At() {
  return !0;
}
function yt(e, t, r) {
  const n = ii.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}
function jc(e) {
  return Sc.test(e);
}
function si() {
  return !1;
}
function Lc(e) {
  return Rc.test(e);
}
function Fc(e) {
  return Tc.test(e);
}
function Vc() {
  const e = ce("colors"), t = ce("spacing"), r = ce("blur"), n = ce("brightness"), o = ce("borderColor"), i = ce("borderRadius"), s = ce("borderSpacing"), a = ce("borderWidth"), c = ce("contrast"), l = ce("grayscale"), u = ce("hueRotate"), d = ce("invert"), p = ce("gap"), f = ce("gradientColorStops"), b = ce("gradientColorStopPositions"), v = ce("inset"), g = ce("margin"), x = ce("opacity"), $ = ce("padding"), w = ce("saturate"), C = ce("scale"), P = ce("sepia"), T = ce("skew"), _ = ce("space"), R = ce("translate"), D = () => ["auto", "contain", "none"], U = () => ["auto", "hidden", "clip", "visible", "scroll"], z = () => ["auto", q, t], N = () => [q, t], W = () => ["", Re, ze], E = () => ["auto", tt, q], M = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], F = () => ["solid", "dashed", "dotted", "double", "none"], H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], V = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], L = () => ["", "0", q], te = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], J = () => [tt, Zt], le = () => [tt, q];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [At],
      spacing: [Re, ze],
      blur: ["none", "", Ke, q],
      brightness: J(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Ke, q],
      borderSpacing: N(),
      borderWidth: W(),
      contrast: J(),
      grayscale: L(),
      hueRotate: le(),
      invert: L(),
      gap: N(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ac, ze],
      inset: z(),
      margin: z(),
      opacity: J(),
      padding: N(),
      saturate: J(),
      scale: J(),
      sepia: L(),
      skew: le(),
      space: N(),
      translate: N()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", q]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Ke]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": te()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": te()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...M(), q]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: U()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": U()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": U()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: D()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": D()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": D()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Tt, q]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: z()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: L()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: L()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Tt, q]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [At]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Tt, q]
        }, q]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": E()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": E()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [At]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Tt, q]
        }, q]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": E()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": E()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", q]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", q]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [p]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [p]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [p]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...V()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...V(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...V(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [$]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [$]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [$]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [$]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [$]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [$]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [$]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [$]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [$]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [g]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [g]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [g]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [g]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [g]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [g]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [g]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [g]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [g]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [_]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [_]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", q, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", q, Re]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Ke]
        }, Ke, q]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [q, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", Re, q]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [q, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ke, ze]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Zt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [At]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", tt, Zt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Re, q]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", q]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", q]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [x]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [x]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...F(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Re, ze]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Re, q]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: N()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", q]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", q]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [x]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...M(), Mc]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Ic]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Dc]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [b]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [b]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [f]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [f]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [x]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...F(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [a]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [x]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: F()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...F()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Re, q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Re, ze]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: W()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Re, ze]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Ke, kc]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [At]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [x]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": H()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": H()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Ke, q]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [w]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [P]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [w]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [P]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", q]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: le()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", q]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: le()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", q]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [C]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [C]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [C]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Tt, q]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [R]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [R]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [T]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [T]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", q]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", q]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": N()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": N()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": N()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": N()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": N()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": N()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": N()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": N()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": N()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": N()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": N()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": N()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": N()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": N()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": N()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": N()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": N()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": N()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", q]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Re, ze, Zt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const Bc = /* @__PURE__ */ Cc(Vc);
function B(...e) {
  return Bc(ti(e));
}
const uo = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, fo = ti, ye = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null)
    return fo(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map((l) => {
    const u = r == null ? void 0 : r[l], d = i == null ? void 0 : i[l];
    if (u === null)
      return null;
    const p = uo(u) || uo(d);
    return o[l][p];
  }), a = r && Object.entries(r).reduce((l, u) => {
    let [d, p] = u;
    return p === void 0 || (l[d] = p), l;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((l, u) => {
    let { class: d, className: p, ...f } = u;
    return Object.entries(f).every((b) => {
      let [v, g] = b;
      return Array.isArray(g) ? g.includes({
        ...i,
        ...a
      }[v]) : {
        ...i,
        ...a
      }[v] === g;
    }) ? [
      ...l,
      d,
      p
    ] : l;
  }, []);
  return fo(e, s, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, Uc = ye(
  "rounded-interactive-elements-default justify-center items-center gap-1 inline-flex text-sm font-medium leading-tight enabled:focus-visible:outline-focus enabled:focus-visible:outline-1 enabled:focus-visible:outline enabled:focus-visible:ring-focus enabled:focus-visible:ring-1 enabled:focus-visible:ring-offset-1",
  {
    variants: {
      variant: {
        basic: "border border-default hover:border-hovered active:border-pressed text disabled:text-disabled bg-interactive-plain hover:bg-interactive-plain-hovered active:bg-interactive-plain-pressed disabled:bg-interactive-disabled disabled:border-disabled",
        primary: "bg-primary text-on-interactive hover:bg-interactive-primary-hovered active:bg-interactive-primary-pressed disabled:text-disabled disabled:bg-interactive-disabled",
        critical: "bg-interactive-critical text-on-interactive hover:bg-interactive-critical-hovered active:bg-interactive-critical-pressed disabled:text-disabled disabled:bg-interactive-disabled",
        success: "bg-interactive-success text-on-interactive hover:bg-interactive-success-hovered active:bg-interactive-success-pressed disabled:text-disabled disabled:bg-interactive-disabled",
        outline: "",
        warning: "",
        highlight: ""
      },
      size: {
        small: "h-7 px-3 py-1",
        medium: "h-9 px-4 py-2",
        large: "h-11 px-6 py-3"
      }
    },
    defaultVariants: {
      variant: "basic",
      size: "medium"
    }
  }
), zc = ye(
  "rounded-interactive-elements-default justify-center items-center gap-1 inline-flex leading-5 font-medium enabled:focus-visible:outline-focus enabled:focus-visible:outline-1 enabled:focus-visible:outline enabled:focus-visible:ring-focus enabled:focus-visible:ring-1 enabled:focus-visible:ring-offset-1",
  {
    variants: {
      variant: {
        basic: "text disabled:text-disabled hover:bg-surface-neutral-hovered active:bg-surface-neutral-pressed disabled:hover:bg-inherit",
        primary: "text-interactive-primary hover:text-interactive-primary-hovered active:text-interactive-primary-pressed disabled:text-disabled hover:bg-surface-selected-hovered active:bg-surface-selected-pressed disabled:hover:bg-inherit",
        critical: "text-interactive-critical hover:text-interactive-critical-hovered active:text-interactive-critical-pressed disabled:text-disabled hover:bg-surface-critical-hovered active:bg-surface-critical-pressed disabled:hover:bg-inherit",
        success: "text-interactive-success hover:text-interactive-success-hovered active:text-interactive-success-pressed disabled:text-disabled hover:bg-surface-success-hovered active:bg-surface-success-pressed disabled:hover:bg-inherit",
        warning: "text-interactive-warning hover:text-interactive-warning-hovered active:text-interactive-warning-pressed disabled:text-disabled hover:bg-surface-warning-hovered active:bg-surface-warning-pressed disabled:hover:bg-inherit",
        highlight: "text-interactive-highlight hover:text-interactive-highlight-hovered active:text-interactive-highlight-pressed disabled:text-disabled hover:bg-surface-highlight-hovered active:bg-surface-highlight-pressed disabled:hover:bg-inherit"
      },
      size: {
        small: "px-2 py-0.5 text-sm",
        medium: "px-2 py-0.5 text-sm",
        large: "px-2 py-0.5 text-base"
      }
    },
    defaultVariants: {
      variant: "basic",
      size: "small"
    }
  }
), Kc = ye(
  "border rounded-interactive-elements-default justify-center items-center gap-1 inline-flex text-sm leading-5 font-medium enabled:focus-visible:outline-focus enabled:focus-visible:outline-1 enabled:focus-visible:outline enabled:focus-visible:ring-focus enabled:focus-visible:ring-1 enabled:focus-visible:ring-offset-1",
  {
    variants: {
      variant: {
        basic: "border-default text hover:border-hovered active:border-pressed disabled:text-disabled",
        primary: "text-interactive-primary border-interactive-primary hover:border-interactive-primary-hovered active:border-interactive-primary-pressed hover:text-interactive-primary-hovered active:text-interactive-primary-pressed disabled:border-disabled disabled:text-disabled",
        critical: "text-interactive-critical border-interactive-critical hover:border-interactive-critical-hovered active:border-interactive-critical-pressed hover:text-interactive-critical-hovered active:text-interactive-critical-pressed disabled:border-disabled disabled:text-disabled",
        success: "text-interactive-success border-interactive-success hover:border-interactive-success-hovered active:border-interactive-success-pressed hover:text-interactive-success-hovered active:text-interactive-success-pressed disabled:border-disabled disabled:text-disabled",
        warning: "text-interactive-warning border-interactive-warning hover:border-interactive-warning-hovered active:border-interactive-warning-pressed hover:text-interactive-warning-hovered active:text-interactive-warning-pressed disabled:border-disabled disabled:text-disabled",
        highlight: "text-interactive-highlight border-interactive-highlight hover:border-interactive-highlight-hovered active:border-interactive-highlight-pressed hover:text-interactive-highlight-hovered active:text-interactive-highlight-pressed disabled:border-disabled disabled:text-disabled"
      },
      size: {
        small: "py-1 px-3",
        medium: "py-1 px-3",
        large: "py-3 px-6"
      }
    },
    defaultVariants: {
      variant: "basic",
      size: "medium"
    }
  }
), He = O(
  ({
    children: e,
    variant: t = "basic",
    plain: r = !1,
    outline: n = !1,
    size: o = "medium",
    disabled: i,
    className: s,
    icon: a,
    disclosure: c,
    loading: l = !1,
    accessibilityLabel: u,
    onClick: d,
    ...p
  }, f) => {
    let b = "";
    return r ? b = zc({ variant: t, size: o, className: s }) : n ? b = Kc({ variant: t, size: o, className: s }) : b = Uc({ variant: t, size: o, className: s }), /* @__PURE__ */ m.jsxs(
      "button",
      {
        "data-size": o,
        "data-variant": t,
        "data-plain": r,
        "data-outline": n,
        className: B(
          b,
          {
            "disabled:text-transparent": l
          },
          {
            "pr-2": c && o === "small" && !r,
            "pr-3": c && o === "medium" && !r,
            "pr-5": c && o === "large" && !r
          },
          {
            "pl-2": a && o === "small" && !r,
            "pl-3": a && o === "medium" && !r,
            "pl-5": a && o === "large" && !r
          },
          s
        ),
        ref: f,
        disabled: i || l,
        onClick: d,
        "aria-busy": l || void 0,
        "aria-disabled": l || i,
        ...p,
        children: [
          l && /* @__PURE__ */ m.jsx(
            Q.loading,
            {
              className: "absolute inline-flex h-5 w-5 animate-spin flex-col items-center justify-center rounded-sm text-interactive-highlight"
            }
          ),
          /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
            a && /* @__PURE__ */ m.jsx(
              "span",
              {
                className: B(
                  "inline-flex h-5 w-5 flex-col items-center justify-center rounded-sm",
                  {
                    "text-icon-disabled": i,
                    "text-transparent": l
                  }
                ),
                children: a
              }
            ),
            e,
            c && /* @__PURE__ */ m.jsx(
              Q.sort,
              {
                className: B(
                  "inline-flex h-5 w-5 flex-col items-center justify-center rounded-sm p-0.5",
                  {
                    "rotate-180": c === "up"
                  }
                )
              }
            ),
            !e && u && /* @__PURE__ */ m.jsx("span", { className: "sr-only", children: u })
          ] })
        ]
      }
    );
  }
);
He.displayName = "Button";
const ai = O(
  ({ actionText: e, children: t, disabled: r, id: n, header: o, onActionClick: i, ...s }, a) => {
    const c = Ft(), l = n || c;
    return /* @__PURE__ */ m.jsxs(
      ac,
      {
        className: B(
          "w-full rounded-level-2 hover:bg-surface-hovered focus:outline-none",
          "radix-disabled:bg-surface-disabled radix-disabled:hover:bg-surface-disabled radix-disabled:active:bg-surface-disabled",
          "[&:has([data-radix-collection-item]:active:not([data-disabled]))]:bg-surface-pressed "
        ),
        disabled: r,
        id: l,
        ref: a,
        ...s,
        children: [
          /* @__PURE__ */ m.jsxs(
            cc,
            {
              className: B(
                "inline-flex w-full items-start justify-start gap-2",
                "radix-state-closed:rounded-level-2 radix-state-open:rounded-t-lg"
              ),
              children: [
                /* @__PURE__ */ m.jsxs(lc, { className: "group inline-flex shrink grow basis-0 gap-2 p-2 text-left focus:outline-none", children: [
                  /* @__PURE__ */ m.jsx(
                    Q.chevron,
                    {
                      className: B(
                        "h-5 w-5 shrink-0 p-0.5 text-icon ease-in-out motion-reduce:transition-none",
                        "group-radix-state-closed:duration-300 group-radix-state-open:rotate-90 group-radix-state-open:duration-300",
                        "group-focus-within:rounded group-focus-within:outline group-focus-within:outline-1 group-focus-within:outline-focus group-focus-within:ring-1 group-focus-within:ring-focus group-focus-within:ring-offset-1"
                      )
                    }
                  ),
                  /* @__PURE__ */ m.jsx("span", { className: "inline-flex shrink grow basis-0 flex-col items-start justify-center gap-2.5 rounded py-1 text-xs leading-none", children: o })
                ] }),
                e && !r && /* @__PURE__ */ m.jsx("div", { className: "flex items-center justify-center rounded p-2", children: /* @__PURE__ */ m.jsx(
                  He,
                  {
                    disabled: r,
                    plain: !0,
                    variant: "primary",
                    size: "small",
                    onClick: i,
                    children: e
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ m.jsx(dc, { className: "rounded-b-lg p-2 pl-4 text-xs text radix-state-closed:animate-accordion-close radix-state-open:animate-accordion-open motion-reduce:transition-none", children: t })
        ]
      }
    );
  }
);
ai.displayName = "AccordionItem";
const Wc = ({ items: e, onChange: t, ...r }) => {
  const n = {
    ...r,
    collapsible: !0,
    onValueChange: t
  };
  return /* @__PURE__ */ m.jsx(sc, { className: "flex flex-col gap-2", ...n, children: e.map((o, i) => /* @__PURE__ */ m.jsx(ai, { ...o }, i)) });
};
Wc.displayName = "Accordion";
function Hc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = $e(e);
  G(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n), () => t.removeEventListener("keydown", n);
  }, [
    r,
    t
  ]);
}
const tn = "dismissableLayer.update", Gc = "dismissableLayer.pointerDownOutside", Yc = "dismissableLayer.focusOutside";
let po;
const ci = /* @__PURE__ */ $t({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), mr = /* @__PURE__ */ O((e, t) => {
  var r;
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: o, onPointerDownOutside: i, onFocusOutside: s, onInteractOutside: a, onDismiss: c, ...l } = e, u = jt(ci), [d, p] = X(null), f = (r = d == null ? void 0 : d.ownerDocument) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.document, [, b] = X({}), v = se(
    t,
    (R) => p(R)
  ), g = Array.from(u.layers), [x] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), $ = g.indexOf(x), w = d ? g.indexOf(d) : -1, C = u.layersWithOutsidePointerEventsDisabled.size > 0, P = w >= $, T = Zc((R) => {
    const D = R.target, U = [
      ...u.branches
    ].some(
      (z) => z.contains(D)
    );
    !P || U || (i == null || i(R), a == null || a(R), R.defaultPrevented || c == null || c());
  }, f), _ = qc((R) => {
    const D = R.target;
    [
      ...u.branches
    ].some(
      (z) => z.contains(D)
    ) || (s == null || s(R), a == null || a(R), R.defaultPrevented || c == null || c());
  }, f);
  return Hc((R) => {
    w === u.layers.size - 1 && (o == null || o(R), !R.defaultPrevented && c && (R.preventDefault(), c()));
  }, f), G(() => {
    if (d)
      return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (po = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), vo(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = po);
      };
  }, [
    d,
    f,
    n,
    u
  ]), G(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), vo());
  }, [
    d,
    u
  ]), G(() => {
    const R = () => b({});
    return document.addEventListener(tn, R), () => document.removeEventListener(tn, R);
  }, []), /* @__PURE__ */ y(ee.div, I({}, l, {
    ref: v,
    style: {
      pointerEvents: C ? P ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: K(e.onFocusCapture, _.onFocusCapture),
    onBlurCapture: K(e.onBlurCapture, _.onBlurCapture),
    onPointerDownCapture: K(e.onPointerDownCapture, T.onPointerDownCapture)
  }));
}), Xc = /* @__PURE__ */ O((e, t) => {
  const r = jt(ci), n = k(null), o = se(t, n);
  return G(() => {
    const i = n.current;
    if (i)
      return r.branches.add(i), () => {
        r.branches.delete(i);
      };
  }, [
    r.branches
  ]), /* @__PURE__ */ y(ee.div, I({}, e, {
    ref: o
  }));
});
function Zc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = $e(e), n = k(!1), o = k(() => {
  });
  return G(() => {
    const i = (a) => {
      if (a.target && !n.current) {
        let l = function() {
          li(Gc, r, c, {
            discrete: !0
          });
        };
        const c = {
          originalEvent: a
        };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, {
          once: !0
        })) : l();
      } else
        t.removeEventListener("click", o.current);
      n.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [
    t,
    r
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function qc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = $e(e), n = k(!1);
  return G(() => {
    const o = (i) => {
      i.target && !n.current && li(Yc, r, {
        originalEvent: i
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [
    t,
    r
  ]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function vo() {
  const e = new CustomEvent(tn);
  document.dispatchEvent(e);
}
function li(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: r
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), n ? yn(o, i) : o.dispatchEvent(i);
}
const Jc = mr, Qc = Xc;
let Lr = 0;
function Tn() {
  G(() => {
    var e, t;
    const r = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = r[0]) !== null && e !== void 0 ? e : bo()), document.body.insertAdjacentElement("beforeend", (t = r[1]) !== null && t !== void 0 ? t : bo()), Lr++, () => {
      Lr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (n) => n.remove()
      ), Lr--;
    };
  }, []);
}
function bo() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const Fr = "focusScope.autoFocusOnMount", Vr = "focusScope.autoFocusOnUnmount", mo = {
  bubbles: !1,
  cancelable: !0
}, An = /* @__PURE__ */ O((e, t) => {
  const { loop: r = !1, trapped: n = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...s } = e, [a, c] = X(null), l = $e(o), u = $e(i), d = k(null), p = se(
    t,
    (v) => c(v)
  ), f = k({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  G(() => {
    if (n) {
      let v = function(w) {
        if (f.paused || !a)
          return;
        const C = w.target;
        a.contains(C) ? d.current = C : We(d.current, {
          select: !0
        });
      }, g = function(w) {
        if (f.paused || !a)
          return;
        const C = w.relatedTarget;
        C !== null && (a.contains(C) || We(d.current, {
          select: !0
        }));
      }, x = function(w) {
        if (document.activeElement === document.body)
          for (const P of w)
            P.removedNodes.length > 0 && We(a);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const $ = new MutationObserver(x);
      return a && $.observe(a, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), $.disconnect();
      };
    }
  }, [
    n,
    a,
    f.paused
  ]), G(() => {
    if (a) {
      go.add(f);
      const v = document.activeElement;
      if (!a.contains(v)) {
        const x = new CustomEvent(Fr, mo);
        a.addEventListener(Fr, l), a.dispatchEvent(x), x.defaultPrevented || (el(il(di(a)), {
          select: !0
        }), document.activeElement === v && We(a));
      }
      return () => {
        a.removeEventListener(Fr, l), setTimeout(() => {
          const x = new CustomEvent(Vr, mo);
          a.addEventListener(Vr, u), a.dispatchEvent(x), x.defaultPrevented || We(v ?? document.body, {
            select: !0
          }), a.removeEventListener(Vr, u), go.remove(f);
        }, 0);
      };
    }
  }, [
    a,
    l,
    u,
    f
  ]);
  const b = ie((v) => {
    if (!r && !n || f.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, x = document.activeElement;
    if (g && x) {
      const $ = v.currentTarget, [w, C] = tl($);
      w && C ? !v.shiftKey && x === C ? (v.preventDefault(), r && We(w, {
        select: !0
      })) : v.shiftKey && x === w && (v.preventDefault(), r && We(C, {
        select: !0
      })) : x === $ && v.preventDefault();
    }
  }, [
    r,
    n,
    f.paused
  ]);
  return /* @__PURE__ */ y(ee.div, I({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: b
  }));
});
function el(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (We(n, {
      select: t
    }), document.activeElement !== r)
      return;
}
function tl(e) {
  const t = di(e), r = ho(t, e), n = ho(t.reverse(), e);
  return [
    r,
    n
  ];
}
function di(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); )
    t.push(r.currentNode);
  return t;
}
function ho(e, t) {
  for (const r of e)
    if (!rl(r, {
      upTo: t
    }))
      return r;
}
function rl(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function nl(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function We(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== r && nl(e) && t && e.select();
  }
}
const go = ol();
function ol() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = xo(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = xo(e, t), (r = e[0]) === null || r === void 0 || r.resume();
    }
  };
}
function xo(e, t) {
  const r = [
    ...e
  ], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function il(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const sl = ["top", "right", "bottom", "left"], Xe = Math.min, we = Math.max, ar = Math.round, qt = Math.floor, Ze = (e) => ({
  x: e,
  y: e
}), al = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, cl = {
  start: "end",
  end: "start"
};
function rn(e, t, r) {
  return we(e, Xe(t, r));
}
function Ve(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Be(e) {
  return e.split("-")[0];
}
function Ct(e) {
  return e.split("-")[1];
}
function On(e) {
  return e === "x" ? "y" : "x";
}
function In(e) {
  return e === "y" ? "height" : "width";
}
function Et(e) {
  return ["top", "bottom"].includes(Be(e)) ? "y" : "x";
}
function Mn(e) {
  return On(Et(e));
}
function ll(e, t, r) {
  r === void 0 && (r = !1);
  const n = Ct(e), o = Mn(e), i = In(o);
  let s = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = cr(s)), [s, cr(s)];
}
function dl(e) {
  const t = cr(e);
  return [nn(e), t, nn(t)];
}
function nn(e) {
  return e.replace(/start|end/g, (t) => cl[t]);
}
function ul(e, t, r) {
  const n = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? o : n : t ? n : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function fl(e, t, r, n) {
  const o = Ct(e);
  let i = ul(Be(e), r === "start", n);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(nn)))), i;
}
function cr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => al[t]);
}
function pl(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ui(e) {
  return typeof e != "number" ? pl(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function lr(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function $o(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const i = Et(t), s = Mn(t), a = In(s), c = Be(t), l = i === "y", u = n.x + n.width / 2 - o.width / 2, d = n.y + n.height / 2 - o.height / 2, p = n[a] / 2 - o[a] / 2;
  let f;
  switch (c) {
    case "top":
      f = {
        x: u,
        y: n.y - o.height
      };
      break;
    case "bottom":
      f = {
        x: u,
        y: n.y + n.height
      };
      break;
    case "right":
      f = {
        x: n.x + n.width,
        y: d
      };
      break;
    case "left":
      f = {
        x: n.x - o.width,
        y: d
      };
      break;
    default:
      f = {
        x: n.x,
        y: n.y
      };
  }
  switch (Ct(t)) {
    case "start":
      f[s] -= p * (r && l ? -1 : 1);
      break;
    case "end":
      f[s] += p * (r && l ? -1 : 1);
      break;
  }
  return f;
}
const vl = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = r, a = i.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = $o(l, n, c), p = n, f = {}, b = 0;
  for (let v = 0; v < a.length; v++) {
    const {
      name: g,
      fn: x
    } = a[v], {
      x: $,
      y: w,
      data: C,
      reset: P
    } = await x({
      x: u,
      y: d,
      initialPlacement: n,
      placement: p,
      strategy: o,
      middlewareData: f,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (u = $ ?? u, d = w ?? d, f = {
      ...f,
      [g]: {
        ...f[g],
        ...C
      }
    }, P && b <= 50) {
      b++, typeof P == "object" && (P.placement && (p = P.placement), P.rects && (l = P.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : P.rects), {
        x: u,
        y: d
      } = $o(l, p, c)), v = -1;
      continue;
    }
  }
  return {
    x: u,
    y: d,
    placement: p,
    strategy: o,
    middlewareData: f
  };
};
async function It(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: f = 0
  } = Ve(t, e), b = ui(f), g = a[p ? d === "floating" ? "reference" : "floating" : d], x = lr(await i.getClippingRect({
    element: (r = await (i.isElement == null ? void 0 : i.isElement(g))) == null || r ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), $ = d === "floating" ? {
    ...s.floating,
    x: n,
    y: o
  } : s.reference, w = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), C = await (i.isElement == null ? void 0 : i.isElement(w)) ? await (i.getScale == null ? void 0 : i.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = lr(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: $,
    offsetParent: w,
    strategy: c
  }) : $);
  return {
    top: (x.top - P.top + b.top) / C.y,
    bottom: (P.bottom - x.bottom + b.bottom) / C.y,
    left: (x.left - P.left + b.left) / C.x,
    right: (P.right - x.right + b.right) / C.x
  };
}
const wo = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: c
    } = t, {
      element: l,
      padding: u = 0
    } = Ve(e, t) || {};
    if (l == null)
      return {};
    const d = ui(u), p = {
      x: r,
      y: n
    }, f = Mn(o), b = In(f), v = await s.getDimensions(l), g = f === "y", x = g ? "top" : "left", $ = g ? "bottom" : "right", w = g ? "clientHeight" : "clientWidth", C = i.reference[b] + i.reference[f] - p[f] - i.floating[b], P = p[f] - i.reference[f], T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let _ = T ? T[w] : 0;
    (!_ || !await (s.isElement == null ? void 0 : s.isElement(T))) && (_ = a.floating[w] || i.floating[b]);
    const R = C / 2 - P / 2, D = _ / 2 - v[b] / 2 - 1, U = Xe(d[x], D), z = Xe(d[$], D), N = U, W = _ - v[b] - z, E = _ / 2 - v[b] / 2 + R, M = rn(N, E, W), F = !c.arrow && Ct(o) != null && E != M && i.reference[b] / 2 - (E < N ? U : z) - v[b] / 2 < 0, H = F ? E < N ? E - N : E - W : 0;
    return {
      [f]: p[f] + H,
      data: {
        [f]: M,
        centerOffset: E - M - H,
        ...F && {
          alignmentOffset: H
        }
      },
      reset: F
    };
  }
}), fi = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: c,
        elements: l
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: p,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: v = !0,
        ...g
      } = Ve(e, t);
      if ((r = i.arrow) != null && r.alignmentOffset)
        return {};
      const x = Be(o), $ = Be(a) === a, w = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), C = p || ($ || !v ? [cr(a)] : dl(a));
      !p && b !== "none" && C.push(...fl(a, v, b, w));
      const P = [a, ...C], T = await It(t, g), _ = [];
      let R = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (u && _.push(T[x]), d) {
        const N = ll(o, s, w);
        _.push(T[N[0]], T[N[1]]);
      }
      if (R = [...R, {
        placement: o,
        overflows: _
      }], !_.every((N) => N <= 0)) {
        var D, U;
        const N = (((D = i.flip) == null ? void 0 : D.index) || 0) + 1, W = P[N];
        if (W)
          return {
            data: {
              index: N,
              overflows: R
            },
            reset: {
              placement: W
            }
          };
        let E = (U = R.filter((M) => M.overflows[0] <= 0).sort((M, F) => M.overflows[1] - F.overflows[1])[0]) == null ? void 0 : U.placement;
        if (!E)
          switch (f) {
            case "bestFit": {
              var z;
              const M = (z = R.map((F) => [F.placement, F.overflows.filter((H) => H > 0).reduce((H, V) => H + V, 0)]).sort((F, H) => F[1] - H[1])[0]) == null ? void 0 : z[0];
              M && (E = M);
              break;
            }
            case "initialPlacement":
              E = a;
              break;
          }
        if (o !== E)
          return {
            reset: {
              placement: E
            }
          };
      }
      return {};
    }
  };
};
function yo(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Co(e) {
  return sl.some((t) => e[t] >= 0);
}
const bl = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = Ve(e, t);
      switch (n) {
        case "referenceHidden": {
          const i = await It(t, {
            ...o,
            elementContext: "reference"
          }), s = yo(i, r.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Co(s)
            }
          };
        }
        case "escaped": {
          const i = await It(t, {
            ...o,
            altBoundary: !0
          }), s = yo(i, r.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Co(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function ml(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, i = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), s = Be(r), a = Ct(r), c = Et(r) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = i && c ? -1 : 1, d = Ve(t, e);
  let {
    mainAxis: p,
    crossAxis: f,
    alignmentAxis: b
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return a && typeof b == "number" && (f = a === "end" ? b * -1 : b), c ? {
    x: f * u,
    y: p * l
  } : {
    x: p * l,
    y: f * u
  };
}
const pi = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n
      } = t, o = await ml(t, e);
      return {
        x: r + o.x,
        y: n + o.y,
        data: o
      };
    }
  };
}, hl = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (g) => {
            let {
              x,
              y: $
            } = g;
            return {
              x,
              y: $
            };
          }
        },
        ...c
      } = Ve(e, t), l = {
        x: r,
        y: n
      }, u = await It(t, c), d = Et(Be(o)), p = On(d);
      let f = l[p], b = l[d];
      if (i) {
        const g = p === "y" ? "top" : "left", x = p === "y" ? "bottom" : "right", $ = f + u[g], w = f - u[x];
        f = rn($, f, w);
      }
      if (s) {
        const g = d === "y" ? "top" : "left", x = d === "y" ? "bottom" : "right", $ = b + u[g], w = b - u[x];
        b = rn($, b, w);
      }
      const v = a.fn({
        ...t,
        [p]: f,
        [d]: b
      });
      return {
        ...v,
        data: {
          x: v.x - r,
          y: v.y - n
        }
      };
    }
  };
}, gl = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: n,
        placement: o,
        rects: i,
        middlewareData: s
      } = t, {
        offset: a = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = Ve(e, t), u = {
        x: r,
        y: n
      }, d = Et(o), p = On(d);
      let f = u[p], b = u[d];
      const v = Ve(a, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (c) {
        const w = p === "y" ? "height" : "width", C = i.reference[p] - i.floating[w] + g.mainAxis, P = i.reference[p] + i.reference[w] - g.mainAxis;
        f < C ? f = C : f > P && (f = P);
      }
      if (l) {
        var x, $;
        const w = p === "y" ? "width" : "height", C = ["top", "left"].includes(Be(o)), P = i.reference[d] - i.floating[w] + (C && ((x = s.offset) == null ? void 0 : x[d]) || 0) + (C ? 0 : g.crossAxis), T = i.reference[d] + i.reference[w] + (C ? 0 : (($ = s.offset) == null ? void 0 : $[d]) || 0) - (C ? g.crossAxis : 0);
        b < P ? b = P : b > T && (b = T);
      }
      return {
        [p]: f,
        [d]: b
      };
    }
  };
}, xl = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: r,
        rects: n,
        platform: o,
        elements: i
      } = t, {
        apply: s = () => {
        },
        ...a
      } = Ve(e, t), c = await It(t, a), l = Be(r), u = Ct(r), d = Et(r) === "y", {
        width: p,
        height: f
      } = n.floating;
      let b, v;
      l === "top" || l === "bottom" ? (b = l, v = u === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (v = l, b = u === "end" ? "top" : "bottom");
      const g = f - c[b], x = p - c[v], $ = !t.middlewareData.shift;
      let w = g, C = x;
      if (d) {
        const T = p - c.left - c.right;
        C = u || $ ? Xe(x, T) : T;
      } else {
        const T = f - c.top - c.bottom;
        w = u || $ ? Xe(g, T) : T;
      }
      if ($ && !u) {
        const T = we(c.left, 0), _ = we(c.right, 0), R = we(c.top, 0), D = we(c.bottom, 0);
        d ? C = p - 2 * (T !== 0 || _ !== 0 ? T + _ : we(c.left, c.right)) : w = f - 2 * (R !== 0 || D !== 0 ? R + D : we(c.top, c.bottom));
      }
      await s({
        ...t,
        availableWidth: C,
        availableHeight: w
      });
      const P = await o.getDimensions(i.floating);
      return p !== P.width || f !== P.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function qe(e) {
  return vi(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function xe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ue(e) {
  var t;
  return (t = (vi(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function vi(e) {
  return e instanceof Node || e instanceof xe(e).Node;
}
function pe(e) {
  return e instanceof Element || e instanceof xe(e).Element;
}
function Pe(e) {
  return e instanceof HTMLElement || e instanceof xe(e).HTMLElement;
}
function on(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof xe(e).ShadowRoot;
}
function Ut(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = _e(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o);
}
function $l(e) {
  return ["table", "td", "th"].includes(qe(e));
}
function Nn(e) {
  const t = Dn(), r = _e(e);
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function wl(e) {
  let t = wt(e);
  for (; Pe(t) && !hr(t); ) {
    if (Nn(t))
      return t;
    t = wt(t);
  }
  return null;
}
function Dn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function hr(e) {
  return ["html", "body", "#document"].includes(qe(e));
}
function _e(e) {
  return xe(e).getComputedStyle(e);
}
function gr(e) {
  return pe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function wt(e) {
  if (qe(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    on(e) && e.host || // Fallback.
    Ue(e)
  );
  return on(t) ? t.host : t;
}
function bi(e) {
  const t = wt(e);
  return hr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Pe(t) && Ut(t) ? t : bi(t);
}
function Mt(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = bi(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = xe(o);
  return i ? t.concat(s, s.visualViewport || [], Ut(o) ? o : [], s.frameElement && r ? Mt(s.frameElement) : []) : t.concat(o, Mt(o, [], r));
}
function mi(e) {
  const t = _e(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = Pe(e), i = o ? e.offsetWidth : r, s = o ? e.offsetHeight : n, a = ar(r) !== i || ar(n) !== s;
  return a && (r = i, n = s), {
    width: r,
    height: n,
    $: a
  };
}
function kn(e) {
  return pe(e) ? e : e.contextElement;
}
function gt(e) {
  const t = kn(e);
  if (!Pe(t))
    return Ze(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: i
  } = mi(t);
  let s = (i ? ar(r.width) : r.width) / n, a = (i ? ar(r.height) : r.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const yl = /* @__PURE__ */ Ze(0);
function hi(e) {
  const t = xe(e);
  return !Dn() || !t.visualViewport ? yl : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Cl(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== xe(e) ? !1 : t;
}
function it(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), i = kn(e);
  let s = Ze(1);
  t && (n ? pe(n) && (s = gt(n)) : s = gt(e));
  const a = Cl(i, r, n) ? hi(i) : Ze(0);
  let c = (o.left + a.x) / s.x, l = (o.top + a.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (i) {
    const p = xe(i), f = n && pe(n) ? xe(n) : n;
    let b = p.frameElement;
    for (; b && n && f !== p; ) {
      const v = gt(b), g = b.getBoundingClientRect(), x = _e(b), $ = g.left + (b.clientLeft + parseFloat(x.paddingLeft)) * v.x, w = g.top + (b.clientTop + parseFloat(x.paddingTop)) * v.y;
      c *= v.x, l *= v.y, u *= v.x, d *= v.y, c += $, l += w, b = xe(b).frameElement;
    }
  }
  return lr({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function El(e) {
  let {
    rect: t,
    offsetParent: r,
    strategy: n
  } = e;
  const o = Pe(r), i = Ue(r);
  if (r === i)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Ze(1);
  const c = Ze(0);
  if ((o || !o && n !== "fixed") && ((qe(r) !== "body" || Ut(i)) && (s = gr(r)), Pe(r))) {
    const l = it(r);
    a = gt(r), c.x = l.x + r.clientLeft, c.y = l.y + r.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - s.scrollLeft * a.x + c.x,
    y: t.y * a.y - s.scrollTop * a.y + c.y
  };
}
function Pl(e) {
  return Array.from(e.getClientRects());
}
function gi(e) {
  return it(Ue(e)).left + gr(e).scrollLeft;
}
function _l(e) {
  const t = Ue(e), r = gr(e), n = e.ownerDocument.body, o = we(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), i = we(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -r.scrollLeft + gi(e);
  const a = -r.scrollTop;
  return _e(n).direction === "rtl" && (s += we(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function Sl(e, t) {
  const r = xe(e), n = Ue(e), o = r.visualViewport;
  let i = n.clientWidth, s = n.clientHeight, a = 0, c = 0;
  if (o) {
    i = o.width, s = o.height;
    const l = Dn();
    (!l || l && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: c
  };
}
function Rl(e, t) {
  const r = it(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, i = Pe(e) ? gt(e) : Ze(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, c = o * i.x, l = n * i.y;
  return {
    width: s,
    height: a,
    x: c,
    y: l
  };
}
function Eo(e, t, r) {
  let n;
  if (t === "viewport")
    n = Sl(e, r);
  else if (t === "document")
    n = _l(Ue(e));
  else if (pe(t))
    n = Rl(t, r);
  else {
    const o = hi(e);
    n = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return lr(n);
}
function xi(e, t) {
  const r = wt(e);
  return r === t || !pe(r) || hr(r) ? !1 : _e(r).position === "fixed" || xi(r, t);
}
function Tl(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = Mt(e, [], !1).filter((a) => pe(a) && qe(a) !== "body"), o = null;
  const i = _e(e).position === "fixed";
  let s = i ? wt(e) : e;
  for (; pe(s) && !hr(s); ) {
    const a = _e(s), c = Nn(s);
    !c && a.position === "fixed" && (o = null), (i ? !c && !o : !c && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Ut(s) && !c && xi(e, s)) ? n = n.filter((u) => u !== s) : o = a, s = wt(s);
  }
  return t.set(e, n), n;
}
function Al(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const s = [...r === "clippingAncestors" ? Tl(t, this._c) : [].concat(r), n], a = s[0], c = s.reduce((l, u) => {
    const d = Eo(t, u, o);
    return l.top = we(d.top, l.top), l.right = Xe(d.right, l.right), l.bottom = Xe(d.bottom, l.bottom), l.left = we(d.left, l.left), l;
  }, Eo(t, a, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Ol(e) {
  return mi(e);
}
function Il(e, t, r) {
  const n = Pe(t), o = Ue(t), i = r === "fixed", s = it(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Ze(0);
  if (n || !n && !i)
    if ((qe(t) !== "body" || Ut(o)) && (a = gr(t)), n) {
      const l = it(t, !0, i, t);
      c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
    } else
      o && (c.x = gi(o));
  return {
    x: s.left + a.scrollLeft - c.x,
    y: s.top + a.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function Po(e, t) {
  return !Pe(e) || _e(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function $i(e, t) {
  const r = xe(e);
  if (!Pe(e))
    return r;
  let n = Po(e, t);
  for (; n && $l(n) && _e(n).position === "static"; )
    n = Po(n, t);
  return n && (qe(n) === "html" || qe(n) === "body" && _e(n).position === "static" && !Nn(n)) ? r : n || wl(e) || r;
}
const Ml = async function(e) {
  let {
    reference: t,
    floating: r,
    strategy: n
  } = e;
  const o = this.getOffsetParent || $i, i = this.getDimensions;
  return {
    reference: Il(t, await o(r), n),
    floating: {
      x: 0,
      y: 0,
      ...await i(r)
    }
  };
};
function Nl(e) {
  return _e(e).direction === "rtl";
}
const Dl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: El,
  getDocumentElement: Ue,
  getClippingRect: Al,
  getOffsetParent: $i,
  getElementRects: Ml,
  getClientRects: Pl,
  getDimensions: Ol,
  getScale: gt,
  isElement: pe,
  isRTL: Nl
};
function kl(e, t) {
  let r = null, n;
  const o = Ue(e);
  function i() {
    clearTimeout(n), r && r.disconnect(), r = null;
  }
  function s(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), i();
    const {
      left: l,
      top: u,
      width: d,
      height: p
    } = e.getBoundingClientRect();
    if (a || t(), !d || !p)
      return;
    const f = qt(u), b = qt(o.clientWidth - (l + d)), v = qt(o.clientHeight - (u + p)), g = qt(l), $ = {
      rootMargin: -f + "px " + -b + "px " + -v + "px " + -g + "px",
      threshold: we(0, Xe(1, c)) || 1
    };
    let w = !0;
    function C(P) {
      const T = P[0].intersectionRatio;
      if (T !== c) {
        if (!w)
          return s();
        T ? s(!1, T) : n = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      w = !1;
    }
    try {
      r = new IntersectionObserver(C, {
        ...$,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(C, $);
    }
    r.observe(e);
  }
  return s(!0), i;
}
function wi(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, l = kn(e), u = o || i ? [...l ? Mt(l) : [], ...Mt(t)] : [];
  u.forEach((x) => {
    o && x.addEventListener("scroll", r, {
      passive: !0
    }), i && x.addEventListener("resize", r);
  });
  const d = l && a ? kl(l, r) : null;
  let p = -1, f = null;
  s && (f = new ResizeObserver((x) => {
    let [$] = x;
    $ && $.target === l && f && (f.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      f && f.observe(t);
    })), r();
  }), l && !c && f.observe(l), f.observe(t));
  let b, v = c ? it(e) : null;
  c && g();
  function g() {
    const x = it(e);
    v && (x.x !== v.x || x.y !== v.y || x.width !== v.width || x.height !== v.height) && r(), v = x, b = requestAnimationFrame(g);
  }
  return r(), () => {
    u.forEach((x) => {
      o && x.removeEventListener("scroll", r), i && x.removeEventListener("resize", r);
    }), d && d(), f && f.disconnect(), f = null, c && cancelAnimationFrame(b);
  };
}
const jl = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: Dl,
    ...r
  }, i = {
    ...o.platform,
    _c: n
  };
  return vl(e, t, {
    ...o,
    platform: i
  });
}, Ll = (e) => {
  function t(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const {
        element: n,
        padding: o
      } = typeof e == "function" ? e(r) : e;
      return n && t(n) ? n.current != null ? wo({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? wo({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
};
var nr = typeof document < "u" ? $n : G;
function dr(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, n, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (!dr(e[n], t[n]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const i = o[n];
      if (!(i === "_owner" && e.$$typeof) && !dr(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function yi(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function _o(e, t) {
  const r = yi(e);
  return Math.round(t * r) / r;
}
function So(e) {
  const t = S.useRef(e);
  return nr(() => {
    t.current = e;
  }), t;
}
function Ci(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = !0,
    whileElementsMounted: c,
    open: l
  } = e, [u, d] = S.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, f] = S.useState(n);
  dr(p, n) || f(n);
  const [b, v] = S.useState(null), [g, x] = S.useState(null), $ = S.useCallback((F) => {
    F != T.current && (T.current = F, v(F));
  }, [v]), w = S.useCallback((F) => {
    F !== _.current && (_.current = F, x(F));
  }, [x]), C = i || b, P = s || g, T = S.useRef(null), _ = S.useRef(null), R = S.useRef(u), D = So(c), U = So(o), z = S.useCallback(() => {
    if (!T.current || !_.current)
      return;
    const F = {
      placement: t,
      strategy: r,
      middleware: p
    };
    U.current && (F.platform = U.current), jl(T.current, _.current, F).then((H) => {
      const V = {
        ...H,
        isPositioned: !0
      };
      N.current && !dr(R.current, V) && (R.current = V, ha.flushSync(() => {
        d(V);
      }));
    });
  }, [p, t, r, U]);
  nr(() => {
    l === !1 && R.current.isPositioned && (R.current.isPositioned = !1, d((F) => ({
      ...F,
      isPositioned: !1
    })));
  }, [l]);
  const N = S.useRef(!1);
  nr(() => (N.current = !0, () => {
    N.current = !1;
  }), []), nr(() => {
    if (C && (T.current = C), P && (_.current = P), C && P) {
      if (D.current)
        return D.current(C, P, z);
      z();
    }
  }, [C, P, z, D]);
  const W = S.useMemo(() => ({
    reference: T,
    floating: _,
    setReference: $,
    setFloating: w
  }), [$, w]), E = S.useMemo(() => ({
    reference: C,
    floating: P
  }), [C, P]), M = S.useMemo(() => {
    const F = {
      position: r,
      left: 0,
      top: 0
    };
    if (!E.floating)
      return F;
    const H = _o(E.floating, u.x), V = _o(E.floating, u.y);
    return a ? {
      ...F,
      transform: "translate(" + H + "px, " + V + "px)",
      ...yi(E.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: H,
      top: V
    };
  }, [r, a, E.floating, u.x, u.y]);
  return S.useMemo(() => ({
    ...u,
    update: z,
    refs: W,
    elements: E,
    floatingStyles: M
  }), [u, z, W, E, M]);
}
function xr(e) {
  const [t, r] = X(void 0);
  return Ye(() => {
    if (e) {
      r({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const n = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          s = l.inlineSize, a = l.blockSize;
        } else
          s = e.offsetWidth, a = e.offsetHeight;
        r({
          width: s,
          height: a
        });
      });
      return n.observe(e, {
        box: "border-box"
      }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [
    e
  ]), t;
}
const Ei = "Popper", [Pi, $r] = ge(Ei), [Fl, _i] = Pi(Ei), Vl = (e) => {
  const { __scopePopper: t, children: r } = e, [n, o] = X(null);
  return /* @__PURE__ */ y(Fl, {
    scope: t,
    anchor: n,
    onAnchorChange: o
  }, r);
}, Bl = "PopperAnchor", Ul = /* @__PURE__ */ O((e, t) => {
  const { __scopePopper: r, virtualRef: n, ...o } = e, i = _i(Bl, r), s = k(null), a = se(t, s);
  return G(() => {
    i.onAnchorChange((n == null ? void 0 : n.current) || s.current);
  }), n ? null : /* @__PURE__ */ y(ee.div, I({}, o, {
    ref: a
  }));
}), Si = "PopperContent", [zl, qv] = Pi(Si), Kl = /* @__PURE__ */ O((e, t) => {
  var r, n, o, i, s, a, c, l;
  const { __scopePopper: u, side: d = "bottom", sideOffset: p = 0, align: f = "center", alignOffset: b = 0, arrowPadding: v = 0, avoidCollisions: g = !0, collisionBoundary: x = [], collisionPadding: $ = 0, sticky: w = "partial", hideWhenDetached: C = !1, updatePositionStrategy: P = "optimized", onPlaced: T, ..._ } = e, R = _i(Si, u), [D, U] = X(null), z = se(
    t,
    (Oe) => U(Oe)
  ), [N, W] = X(null), E = xr(N), M = (r = E == null ? void 0 : E.width) !== null && r !== void 0 ? r : 0, F = (n = E == null ? void 0 : E.height) !== null && n !== void 0 ? n : 0, H = d + (f !== "center" ? "-" + f : ""), V = typeof $ == "number" ? $ : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...$
  }, L = Array.isArray(x) ? x : [
    x
  ], te = L.length > 0, J = {
    padding: V,
    boundary: L.filter(Wl),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: te
  }, { refs: le, floatingStyles: ve, placement: Ae, isPositioned: Ne, middlewareData: be } = Ci({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: H,
    whileElementsMounted: (...Oe) => wi(...Oe, {
      animationFrame: P === "always"
    }),
    elements: {
      reference: R.anchor
    },
    middleware: [
      pi({
        mainAxis: p + F,
        alignmentAxis: b
      }),
      g && hl({
        mainAxis: !0,
        crossAxis: !1,
        limiter: w === "partial" ? gl() : void 0,
        ...J
      }),
      g && fi({
        ...J
      }),
      xl({
        ...J,
        apply: ({ elements: Oe, rects: et, availableWidth: Gt, availableHeight: Yt }) => {
          const { width: ct, height: Ir } = et.reference, lt = Oe.floating.style;
          lt.setProperty("--radix-popper-available-width", `${Gt}px`), lt.setProperty("--radix-popper-available-height", `${Yt}px`), lt.setProperty("--radix-popper-anchor-width", `${ct}px`), lt.setProperty("--radix-popper-anchor-height", `${Ir}px`);
        }
      }),
      N && Ll({
        element: N,
        padding: v
      }),
      Hl({
        arrowWidth: M,
        arrowHeight: F
      }),
      C && bl({
        strategy: "referenceHidden",
        ...J
      })
    ]
  }), [Ce, De] = Ri(Ae), fe = $e(T);
  Ye(() => {
    Ne && (fe == null || fe());
  }, [
    Ne,
    fe
  ]);
  const ke = (o = be.arrow) === null || o === void 0 ? void 0 : o.x, Tr = (i = be.arrow) === null || i === void 0 ? void 0 : i.y, Ht = ((s = be.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [Ar, Or] = X();
  return Ye(() => {
    D && Or(window.getComputedStyle(D).zIndex);
  }, [
    D
  ]), /* @__PURE__ */ y("div", {
    ref: le.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...ve,
      transform: Ne ? ve.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: Ar,
      "--radix-popper-transform-origin": [
        (a = be.transformOrigin) === null || a === void 0 ? void 0 : a.x,
        (c = be.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ y(zl, {
    scope: u,
    placedSide: Ce,
    onArrowChange: W,
    arrowX: ke,
    arrowY: Tr,
    shouldHideArrow: Ht
  }, /* @__PURE__ */ y(ee.div, I({
    "data-side": Ce,
    "data-align": De
  }, _, {
    ref: z,
    style: {
      ..._.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: Ne ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = be.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function Wl(e) {
  return e !== null;
}
const Hl = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var r, n, o, i, s;
    const { placement: a, rects: c, middlewareData: l } = t, d = ((r = l.arrow) === null || r === void 0 ? void 0 : r.centerOffset) !== 0, p = d ? 0 : e.arrowWidth, f = d ? 0 : e.arrowHeight, [b, v] = Ri(a), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[v], x = ((n = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null && n !== void 0 ? n : 0) + p / 2, $ = ((i = (s = l.arrow) === null || s === void 0 ? void 0 : s.y) !== null && i !== void 0 ? i : 0) + f / 2;
    let w = "", C = "";
    return b === "bottom" ? (w = d ? g : `${x}px`, C = `${-f}px`) : b === "top" ? (w = d ? g : `${x}px`, C = `${c.floating.height + f}px`) : b === "right" ? (w = `${-f}px`, C = d ? g : `${$}px`) : b === "left" && (w = `${c.floating.width + f}px`, C = d ? g : `${$}px`), {
      data: {
        x: w,
        y: C
      }
    };
  }
});
function Ri(e) {
  const [t, r = "center"] = e.split("-");
  return [
    t,
    r
  ];
}
const Ti = Vl, Ai = Ul, Oi = Kl, wr = /* @__PURE__ */ O((e, t) => {
  var r;
  const { container: n = globalThis == null || (r = globalThis.document) === null || r === void 0 ? void 0 : r.body, ...o } = e;
  return n ? /* @__PURE__ */ ga.createPortal(/* @__PURE__ */ y(ee.div, I({}, o, {
    ref: t
  })), n) : null;
}), Br = "rovingFocusGroup.onEntryFocus", Gl = {
  bubbles: !1,
  cancelable: !0
}, jn = "RovingFocusGroup", [sn, Ii, Yl] = Vt(jn), [Xl, yr] = ge(jn, [
  Yl
]), [Zl, ql] = Xl(jn), Jl = /* @__PURE__ */ O((e, t) => /* @__PURE__ */ y(sn.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ y(sn.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ y(Ql, I({}, e, {
  ref: t
}))))), Ql = /* @__PURE__ */ O((e, t) => {
  const { __scopeRovingFocusGroup: r, orientation: n, loop: o = !1, dir: i, currentTabStopId: s, defaultCurrentTabStopId: a, onCurrentTabStopIdChange: c, onEntryFocus: l, ...u } = e, d = k(null), p = se(t, d), f = Bt(i), [b = null, v] = Te({
    prop: s,
    defaultProp: a,
    onChange: c
  }), [g, x] = X(!1), $ = $e(l), w = Ii(r), C = k(!1), [P, T] = X(0);
  return G(() => {
    const _ = d.current;
    if (_)
      return _.addEventListener(Br, $), () => _.removeEventListener(Br, $);
  }, [
    $
  ]), /* @__PURE__ */ y(Zl, {
    scope: r,
    orientation: n,
    dir: f,
    loop: o,
    currentTabStopId: b,
    onItemFocus: ie(
      (_) => v(_),
      [
        v
      ]
    ),
    onItemShiftTab: ie(
      () => x(!0),
      []
    ),
    onFocusableItemAdd: ie(
      () => T(
        (_) => _ + 1
      ),
      []
    ),
    onFocusableItemRemove: ie(
      () => T(
        (_) => _ - 1
      ),
      []
    )
  }, /* @__PURE__ */ y(ee.div, I({
    tabIndex: g || P === 0 ? -1 : 0,
    "data-orientation": n
  }, u, {
    ref: p,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: K(e.onMouseDown, () => {
      C.current = !0;
    }),
    onFocus: K(e.onFocus, (_) => {
      const R = !C.current;
      if (_.target === _.currentTarget && R && !g) {
        const D = new CustomEvent(Br, Gl);
        if (_.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
          const U = w().filter(
            (M) => M.focusable
          ), z = U.find(
            (M) => M.active
          ), N = U.find(
            (M) => M.id === b
          ), E = [
            z,
            N,
            ...U
          ].filter(Boolean).map(
            (M) => M.ref.current
          );
          Mi(E);
        }
      }
      C.current = !1;
    }),
    onBlur: K(
      e.onBlur,
      () => x(!1)
    )
  })));
}), ed = "RovingFocusGroupItem", td = /* @__PURE__ */ O((e, t) => {
  const { __scopeRovingFocusGroup: r, focusable: n = !0, active: o = !1, tabStopId: i, ...s } = e, a = Le(), c = i || a, l = ql(ed, r), u = l.currentTabStopId === c, d = Ii(r), { onFocusableItemAdd: p, onFocusableItemRemove: f } = l;
  return G(() => {
    if (n)
      return p(), () => f();
  }, [
    n,
    p,
    f
  ]), /* @__PURE__ */ y(sn.ItemSlot, {
    scope: r,
    id: c,
    focusable: n,
    active: o
  }, /* @__PURE__ */ y(ee.span, I({
    tabIndex: u ? 0 : -1,
    "data-orientation": l.orientation
  }, s, {
    ref: t,
    onMouseDown: K(e.onMouseDown, (b) => {
      n ? l.onItemFocus(c) : b.preventDefault();
    }),
    onFocus: K(
      e.onFocus,
      () => l.onItemFocus(c)
    ),
    onKeyDown: K(e.onKeyDown, (b) => {
      if (b.key === "Tab" && b.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (b.target !== b.currentTarget)
        return;
      const v = od(b, l.orientation, l.dir);
      if (v !== void 0) {
        b.preventDefault();
        let x = d().filter(
          ($) => $.focusable
        ).map(
          ($) => $.ref.current
        );
        if (v === "last")
          x.reverse();
        else if (v === "prev" || v === "next") {
          v === "prev" && x.reverse();
          const $ = x.indexOf(b.currentTarget);
          x = l.loop ? id(x, $ + 1) : x.slice($ + 1);
        }
        setTimeout(
          () => Mi(x)
        );
      }
    })
  })));
}), rd = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function nd(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function od(e, t, r) {
  const n = nd(e.key, r);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(n)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(n)))
    return rd[n];
}
function Mi(e) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus(), document.activeElement !== t))
      return;
}
function id(e, t) {
  return e.map(
    (r, n) => e[(t + n) % e.length]
  );
}
const Ni = Jl, Di = td;
var sd = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ft = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap(), Qt = {}, Ur = 0, ki = function(e) {
  return e && (e.host || ki(e.parentNode));
}, ad = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = ki(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, cd = function(e, t, r, n) {
  var o = ad(t, Array.isArray(e) ? e : [e]);
  Qt[r] || (Qt[r] = /* @__PURE__ */ new WeakMap());
  var i = Qt[r], s = [], a = /* @__PURE__ */ new Set(), c = new Set(o), l = function(d) {
    !d || a.has(d) || (a.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (a.has(p))
        u(p);
      else {
        var f = p.getAttribute(n), b = f !== null && f !== "false", v = (ft.get(p) || 0) + 1, g = (i.get(p) || 0) + 1;
        ft.set(p, v), i.set(p, g), s.push(p), v === 1 && b && Jt.set(p, !0), g === 1 && p.setAttribute(r, "true"), b || p.setAttribute(n, "true");
      }
    });
  };
  return u(t), a.clear(), Ur++, function() {
    s.forEach(function(d) {
      var p = ft.get(d) - 1, f = i.get(d) - 1;
      ft.set(d, p), i.set(d, f), p || (Jt.has(d) || d.removeAttribute(n), Jt.delete(d)), f || d.removeAttribute(r);
    }), Ur--, Ur || (ft = /* @__PURE__ */ new WeakMap(), ft = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap(), Qt = {});
  };
}, Ln = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = t || sd(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), cd(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, Ie = function() {
  return Ie = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, Ie.apply(this, arguments);
};
function ji(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function ld(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var or = "right-scroll-bar-position", ir = "width-before-scroll-bar", dd = "with-scroll-bars-hidden", ud = "--removed-body-scroll-bar-size";
function fd(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function pd(e, t) {
  var r = X(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && (r.value = n, r.callback(n, o));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
function vd(e, t) {
  return pd(t || null, function(r) {
    return e.forEach(function(n) {
      return fd(n, r);
    });
  });
}
function bd(e) {
  return e;
}
function md(e, t) {
  t === void 0 && (t = bd);
  var r = [], n = !1, o = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(i) {
      var s = t(i, n);
      return r.push(s), function() {
        r = r.filter(function(a) {
          return a !== s;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (n = !0; r.length; ) {
        var s = r;
        r = [], s.forEach(i);
      }
      r = {
        push: function(a) {
          return i(a);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(i) {
      n = !0;
      var s = [];
      if (r.length) {
        var a = r;
        r = [], a.forEach(i), s = r;
      }
      var c = function() {
        var u = s;
        s = [], u.forEach(i);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), r = {
        push: function(u) {
          s.push(u), l();
        },
        filter: function(u) {
          return s = s.filter(u), r;
        }
      };
    }
  };
  return o;
}
function hd(e) {
  e === void 0 && (e = {});
  var t = md(null);
  return t.options = Ie({ async: !0, ssr: !1 }, e), t;
}
var Li = function(e) {
  var t = e.sideCar, r = ji(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return S.createElement(n, Ie({}, r));
};
Li.isSideCarExport = !0;
function gd(e, t) {
  return e.useMedium(t), Li;
}
var Fi = hd(), zr = function() {
}, Cr = S.forwardRef(function(e, t) {
  var r = S.useRef(null), n = S.useState({
    onScrollCapture: zr,
    onWheelCapture: zr,
    onTouchMoveCapture: zr
  }), o = n[0], i = n[1], s = e.forwardProps, a = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, f = e.noIsolation, b = e.inert, v = e.allowPinchZoom, g = e.as, x = g === void 0 ? "div" : g, $ = ji(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), w = p, C = vd([r, t]), P = Ie(Ie({}, $), o);
  return S.createElement(
    S.Fragment,
    null,
    u && S.createElement(w, { sideCar: Fi, removeScrollBar: l, shards: d, noIsolation: f, inert: b, setCallbacks: i, allowPinchZoom: !!v, lockRef: r }),
    s ? S.cloneElement(S.Children.only(a), Ie(Ie({}, P), { ref: C })) : S.createElement(x, Ie({}, P, { className: c, ref: C }), a)
  );
});
Cr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Cr.classNames = {
  fullWidth: ir,
  zeroRight: or
};
var Ro, xd = function() {
  if (Ro)
    return Ro;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function $d() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = xd();
  return t && e.setAttribute("nonce", t), e;
}
function wd(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function yd(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Cd = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = $d()) && (wd(t, r), yd(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Ed = function() {
  var e = Cd();
  return function(t, r) {
    S.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Vi = function() {
  var e = Ed(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, Pd = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Kr = function(e) {
  return parseInt(e || "", 10) || 0;
}, _d = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Kr(r), Kr(n), Kr(o)];
}, Sd = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Pd;
  var t = _d(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, Rd = Vi(), Td = function(e, t, r, n) {
  var o = e.left, i = e.top, s = e.right, a = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(dd, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(a, "px ").concat(n, `;
  }
  body {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(a, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(or, ` {
    right: `).concat(a, "px ").concat(n, `;
  }
  
  .`).concat(ir, ` {
    margin-right: `).concat(a, "px ").concat(n, `;
  }
  
  .`).concat(or, " .").concat(or, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(ir, " .").concat(ir, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body {
    `).concat(ud, ": ").concat(a, `px;
  }
`);
}, Ad = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n, i = S.useMemo(function() {
    return Sd(o);
  }, [o]);
  return S.createElement(Rd, { styles: Td(i, !t, o, r ? "" : "!important") });
}, an = !1;
if (typeof window < "u")
  try {
    var er = Object.defineProperty({}, "passive", {
      get: function() {
        return an = !0, !0;
      }
    });
    window.addEventListener("test", er, er), window.removeEventListener("test", er, er);
  } catch {
    an = !1;
  }
var pt = an ? { passive: !1 } : !1, Od = function(e) {
  return e.tagName === "TEXTAREA";
}, Bi = function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !Od(e) && r[t] === "visible")
  );
}, Id = function(e) {
  return Bi(e, "overflowY");
}, Md = function(e) {
  return Bi(e, "overflowX");
}, To = function(e, t) {
  var r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var n = Ui(e, r);
    if (n) {
      var o = zi(e, r), i = o[1], s = o[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== document.body);
  return !1;
}, Nd = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, Dd = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, Ui = function(e, t) {
  return e === "v" ? Id(t) : Md(t);
}, zi = function(e, t) {
  return e === "v" ? Nd(t) : Dd(t);
}, kd = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, jd = function(e, t, r, n, o) {
  var i = kd(e, window.getComputedStyle(t).direction), s = i * n, a = r.target, c = t.contains(a), l = !1, u = s > 0, d = 0, p = 0;
  do {
    var f = zi(e, a), b = f[0], v = f[1], g = f[2], x = v - g - i * b;
    (b || x) && Ui(e, a) && (d += x, p += b), a = a.parentNode;
  } while (
    // portaled content
    !c && a !== document.body || // self content
    c && (t.contains(a) || t === a)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && p === 0 || !o && -s > p)) && (l = !0), l;
}, tr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ao = function(e) {
  return [e.deltaX, e.deltaY];
}, Oo = function(e) {
  return e && "current" in e ? e.current : e;
}, Ld = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Fd = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Vd = 0, vt = [];
function Bd(e) {
  var t = S.useRef([]), r = S.useRef([0, 0]), n = S.useRef(), o = S.useState(Vd++)[0], i = S.useState(function() {
    return Vi();
  })[0], s = S.useRef(e);
  S.useEffect(function() {
    s.current = e;
  }, [e]), S.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = ld([e.lockRef.current], (e.shards || []).map(Oo), !0).filter(Boolean);
      return v.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = S.useCallback(function(v, g) {
    if ("touches" in v && v.touches.length === 2)
      return !s.current.allowPinchZoom;
    var x = tr(v), $ = r.current, w = "deltaX" in v ? v.deltaX : $[0] - x[0], C = "deltaY" in v ? v.deltaY : $[1] - x[1], P, T = v.target, _ = Math.abs(w) > Math.abs(C) ? "h" : "v";
    if ("touches" in v && _ === "h" && T.type === "range")
      return !1;
    var R = To(_, T);
    if (!R)
      return !0;
    if (R ? P = _ : (P = _ === "v" ? "h" : "v", R = To(_, T)), !R)
      return !1;
    if (!n.current && "changedTouches" in v && (w || C) && (n.current = P), !P)
      return !0;
    var D = n.current || P;
    return jd(D, g, v, D === "h" ? w : C, !0);
  }, []), c = S.useCallback(function(v) {
    var g = v;
    if (!(!vt.length || vt[vt.length - 1] !== i)) {
      var x = "deltaY" in g ? Ao(g) : tr(g), $ = t.current.filter(function(P) {
        return P.name === g.type && P.target === g.target && Ld(P.delta, x);
      })[0];
      if ($ && $.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!$) {
        var w = (s.current.shards || []).map(Oo).filter(Boolean).filter(function(P) {
          return P.contains(g.target);
        }), C = w.length > 0 ? a(g, w[0]) : !s.current.noIsolation;
        C && g.cancelable && g.preventDefault();
      }
    }
  }, []), l = S.useCallback(function(v, g, x, $) {
    var w = { name: v, delta: g, target: x, should: $ };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== w;
      });
    }, 1);
  }, []), u = S.useCallback(function(v) {
    r.current = tr(v), n.current = void 0;
  }, []), d = S.useCallback(function(v) {
    l(v.type, Ao(v), v.target, a(v, e.lockRef.current));
  }, []), p = S.useCallback(function(v) {
    l(v.type, tr(v), v.target, a(v, e.lockRef.current));
  }, []);
  S.useEffect(function() {
    return vt.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, pt), document.addEventListener("touchmove", c, pt), document.addEventListener("touchstart", u, pt), function() {
      vt = vt.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", c, pt), document.removeEventListener("touchmove", c, pt), document.removeEventListener("touchstart", u, pt);
    };
  }, []);
  var f = e.removeScrollBar, b = e.inert;
  return S.createElement(
    S.Fragment,
    null,
    b ? S.createElement(i, { styles: Fd(o) }) : null,
    f ? S.createElement(Ad, { gapMode: "margin" }) : null
  );
}
const Ud = gd(Fi, Bd);
var Ki = S.forwardRef(function(e, t) {
  return S.createElement(Cr, Ie({}, e, { ref: t, sideCar: Ud }));
});
Ki.classNames = Cr.classNames;
const Fn = Ki, zd = [
  "Enter",
  " "
], Kd = [
  "ArrowDown",
  "PageUp",
  "Home"
], Wi = [
  "ArrowUp",
  "PageDown",
  "End"
], Wd = [
  ...Kd,
  ...Wi
], Er = "Menu", [cn, Hd, Gd] = Vt(Er), [at, Hi] = ge(Er, [
  Gd,
  $r,
  yr
]), Vn = $r(), Gi = yr(), [Yd, zt] = at(Er), [Xd, Bn] = at(Er), Zd = (e) => {
  const { __scopeMenu: t, open: r = !1, children: n, dir: o, onOpenChange: i, modal: s = !0 } = e, a = Vn(t), [c, l] = X(null), u = k(!1), d = $e(i), p = Bt(o);
  return G(() => {
    const f = () => {
      u.current = !0, document.addEventListener("pointerdown", b, {
        capture: !0,
        once: !0
      }), document.addEventListener("pointermove", b, {
        capture: !0,
        once: !0
      });
    }, b = () => u.current = !1;
    return document.addEventListener("keydown", f, {
      capture: !0
    }), () => {
      document.removeEventListener("keydown", f, {
        capture: !0
      }), document.removeEventListener("pointerdown", b, {
        capture: !0
      }), document.removeEventListener("pointermove", b, {
        capture: !0
      });
    };
  }, []), /* @__PURE__ */ y(Ti, a, /* @__PURE__ */ y(Yd, {
    scope: t,
    open: r,
    onOpenChange: d,
    content: c,
    onContentChange: l
  }, /* @__PURE__ */ y(Xd, {
    scope: t,
    onClose: ie(
      () => d(!1),
      [
        d
      ]
    ),
    isUsingKeyboardRef: u,
    dir: p,
    modal: s
  }, n)));
}, qd = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenu: r, ...n } = e, o = Vn(r);
  return /* @__PURE__ */ y(Ai, I({}, o, n, {
    ref: t
  }));
}), Yi = "MenuPortal", [Jd, Qd] = at(Yi, {
  forceMount: void 0
}), eu = (e) => {
  const { __scopeMenu: t, forceMount: r, children: n, container: o } = e, i = zt(Yi, t);
  return /* @__PURE__ */ y(Jd, {
    scope: t,
    forceMount: r
  }, /* @__PURE__ */ y(Se, {
    present: r || i.open
  }, /* @__PURE__ */ y(wr, {
    asChild: !0,
    container: o
  }, n)));
}, Ge = "MenuContent", [tu, Xi] = at(Ge), ru = /* @__PURE__ */ O((e, t) => {
  const r = Qd(Ge, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, i = zt(Ge, e.__scopeMenu), s = Bn(Ge, e.__scopeMenu);
  return /* @__PURE__ */ y(cn.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ y(Se, {
    present: n || i.open
  }, /* @__PURE__ */ y(cn.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ y(nu, I({}, o, {
    ref: t
  })) : /* @__PURE__ */ y(ou, I({}, o, {
    ref: t
  })))));
}), nu = /* @__PURE__ */ O((e, t) => {
  const r = zt(Ge, e.__scopeMenu), n = k(null), o = se(t, n);
  return G(() => {
    const i = n.current;
    if (i)
      return Ln(i);
  }, []), /* @__PURE__ */ y(Zi, I({}, e, {
    ref: o,
    trapFocus: r.open,
    disableOutsidePointerEvents: r.open,
    disableOutsideScroll: !0,
    onFocusOutside: K(
      e.onFocusOutside,
      (i) => i.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => r.onOpenChange(!1)
  }));
}), ou = /* @__PURE__ */ O((e, t) => {
  const r = zt(Ge, e.__scopeMenu);
  return /* @__PURE__ */ y(Zi, I({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => r.onOpenChange(!1)
  }));
}), Zi = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenu: r, loop: n = !1, trapFocus: o, onOpenAutoFocus: i, onCloseAutoFocus: s, disableOutsidePointerEvents: a, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: p, onDismiss: f, disableOutsideScroll: b, ...v } = e, g = zt(Ge, r), x = Bn(Ge, r), $ = Vn(r), w = Gi(r), C = Hd(r), [P, T] = X(null), _ = k(null), R = se(t, _, g.onContentChange), D = k(0), U = k(""), z = k(0), N = k(null), W = k("right"), E = k(0), M = b ? Fn : Lt, F = b ? {
    as: ot,
    allowPinchZoom: !0
  } : void 0, H = (L) => {
    var te, J;
    const le = U.current + L, ve = C().filter(
      (fe) => !fe.disabled
    ), Ae = document.activeElement, Ne = (te = ve.find(
      (fe) => fe.ref.current === Ae
    )) === null || te === void 0 ? void 0 : te.textValue, be = ve.map(
      (fe) => fe.textValue
    ), Ce = pu(be, le, Ne), De = (J = ve.find(
      (fe) => fe.textValue === Ce
    )) === null || J === void 0 ? void 0 : J.ref.current;
    (function fe(ke) {
      U.current = ke, window.clearTimeout(D.current), ke !== "" && (D.current = window.setTimeout(
        () => fe(""),
        1e3
      ));
    })(le), De && setTimeout(
      () => De.focus()
    );
  };
  G(() => () => window.clearTimeout(D.current), []), Tn();
  const V = ie((L) => {
    var te, J;
    return W.current === ((te = N.current) === null || te === void 0 ? void 0 : te.side) && bu(L, (J = N.current) === null || J === void 0 ? void 0 : J.area);
  }, []);
  return /* @__PURE__ */ y(tu, {
    scope: r,
    searchRef: U,
    onItemEnter: ie((L) => {
      V(L) && L.preventDefault();
    }, [
      V
    ]),
    onItemLeave: ie((L) => {
      var te;
      V(L) || ((te = _.current) === null || te === void 0 || te.focus(), T(null));
    }, [
      V
    ]),
    onTriggerLeave: ie((L) => {
      V(L) && L.preventDefault();
    }, [
      V
    ]),
    pointerGraceTimerRef: z,
    onPointerGraceIntentChange: ie((L) => {
      N.current = L;
    }, [])
  }, /* @__PURE__ */ y(M, F, /* @__PURE__ */ y(An, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: K(i, (L) => {
      var te;
      L.preventDefault(), (te = _.current) === null || te === void 0 || te.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ y(mr, {
    asChild: !0,
    disableOutsidePointerEvents: a,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: d,
    onInteractOutside: p,
    onDismiss: f
  }, /* @__PURE__ */ y(Ni, I({
    asChild: !0
  }, w, {
    dir: x.dir,
    orientation: "vertical",
    loop: n,
    currentTabStopId: P,
    onCurrentTabStopIdChange: T,
    onEntryFocus: K(c, (L) => {
      x.isUsingKeyboardRef.current || L.preventDefault();
    })
  }), /* @__PURE__ */ y(Oi, I({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": du(g.open),
    "data-radix-menu-content": "",
    dir: x.dir
  }, $, v, {
    ref: R,
    style: {
      outline: "none",
      ...v.style
    },
    onKeyDown: K(v.onKeyDown, (L) => {
      const J = L.target.closest("[data-radix-menu-content]") === L.currentTarget, le = L.ctrlKey || L.altKey || L.metaKey, ve = L.key.length === 1;
      J && (L.key === "Tab" && L.preventDefault(), !le && ve && H(L.key));
      const Ae = _.current;
      if (L.target !== Ae || !Wd.includes(L.key))
        return;
      L.preventDefault();
      const be = C().filter(
        (Ce) => !Ce.disabled
      ).map(
        (Ce) => Ce.ref.current
      );
      Wi.includes(L.key) && be.reverse(), uu(be);
    }),
    onBlur: K(e.onBlur, (L) => {
      L.currentTarget.contains(L.target) || (window.clearTimeout(D.current), U.current = "");
    }),
    onPointerMove: K(e.onPointerMove, dn((L) => {
      const te = L.target, J = E.current !== L.clientX;
      if (L.currentTarget.contains(te) && J) {
        const le = L.clientX > E.current ? "right" : "left";
        W.current = le, E.current = L.clientX;
      }
    }))
  })))))));
}), ln = "MenuItem", Io = "menu.itemSelect", iu = /* @__PURE__ */ O((e, t) => {
  const { disabled: r = !1, onSelect: n, ...o } = e, i = k(null), s = Bn(ln, e.__scopeMenu), a = Xi(ln, e.__scopeMenu), c = se(t, i), l = k(!1), u = () => {
    const d = i.current;
    if (!r && d) {
      const p = new CustomEvent(Io, {
        bubbles: !0,
        cancelable: !0
      });
      d.addEventListener(
        Io,
        (f) => n == null ? void 0 : n(f),
        {
          once: !0
        }
      ), yn(d, p), p.defaultPrevented ? l.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ y(su, I({}, o, {
    ref: c,
    disabled: r,
    onClick: K(e.onClick, u),
    onPointerDown: (d) => {
      var p;
      (p = e.onPointerDown) === null || p === void 0 || p.call(e, d), l.current = !0;
    },
    onPointerUp: K(e.onPointerUp, (d) => {
      var p;
      l.current || (p = d.currentTarget) === null || p === void 0 || p.click();
    }),
    onKeyDown: K(e.onKeyDown, (d) => {
      const p = a.searchRef.current !== "";
      r || p && d.key === " " || zd.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
    })
  }));
}), su = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenu: r, disabled: n = !1, textValue: o, ...i } = e, s = Xi(ln, r), a = Gi(r), c = k(null), l = se(t, c), [u, d] = X(!1), [p, f] = X("");
  return G(() => {
    const b = c.current;
    if (b) {
      var v;
      f(((v = b.textContent) !== null && v !== void 0 ? v : "").trim());
    }
  }, [
    i.children
  ]), /* @__PURE__ */ y(cn.ItemSlot, {
    scope: r,
    disabled: n,
    textValue: o ?? p
  }, /* @__PURE__ */ y(Di, I({
    asChild: !0
  }, a, {
    focusable: !n
  }), /* @__PURE__ */ y(ee.div, I({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": n || void 0,
    "data-disabled": n ? "" : void 0
  }, i, {
    ref: l,
    onPointerMove: K(e.onPointerMove, dn((b) => {
      n ? s.onItemLeave(b) : (s.onItemEnter(b), b.defaultPrevented || b.currentTarget.focus());
    })),
    onPointerLeave: K(e.onPointerLeave, dn(
      (b) => s.onItemLeave(b)
    )),
    onFocus: K(
      e.onFocus,
      () => d(!0)
    ),
    onBlur: K(
      e.onBlur,
      () => d(!1)
    )
  }))));
}), au = "MenuRadioGroup";
at(au, {
  value: void 0,
  onValueChange: () => {
  }
});
const cu = "MenuItemIndicator";
at(cu, {
  checked: !1
});
const lu = "MenuSub";
at(lu);
function du(e) {
  return e ? "open" : "closed";
}
function uu(e) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus(), document.activeElement !== t))
      return;
}
function fu(e, t) {
  return e.map(
    (r, n) => e[(t + n) % e.length]
  );
}
function pu(e, t, r) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, i = r ? e.indexOf(r) : -1;
  let s = fu(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== r
  ));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function vu(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x, c = t[i].y, l = t[s].x, u = t[s].y;
    c > n != u > n && r < (l - a) * (n - c) / (u - c) + a && (o = !o);
  }
  return o;
}
function bu(e, t) {
  if (!t)
    return !1;
  const r = {
    x: e.clientX,
    y: e.clientY
  };
  return vu(r, t);
}
function dn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const mu = Zd, hu = qd, gu = eu, xu = ru, $u = iu, qi = "DropdownMenu", [wu, Jv] = ge(qi, [
  Hi
]), Kt = Hi(), [yu, Ji] = wu(qi), Cu = (e) => {
  const { __scopeDropdownMenu: t, children: r, dir: n, open: o, defaultOpen: i, onOpenChange: s, modal: a = !0 } = e, c = Kt(t), l = k(null), [u = !1, d] = Te({
    prop: o,
    defaultProp: i,
    onChange: s
  });
  return /* @__PURE__ */ y(yu, {
    scope: t,
    triggerId: Le(),
    triggerRef: l,
    contentId: Le(),
    open: u,
    onOpenChange: d,
    onOpenToggle: ie(
      () => d(
        (p) => !p
      ),
      [
        d
      ]
    ),
    modal: a
  }, /* @__PURE__ */ y(mu, I({}, c, {
    open: u,
    onOpenChange: d,
    dir: n,
    modal: a
  }), r));
}, Eu = "DropdownMenuTrigger", Pu = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: r, disabled: n = !1, ...o } = e, i = Ji(Eu, r), s = Kt(r);
  return /* @__PURE__ */ y(hu, I({
    asChild: !0
  }, s), /* @__PURE__ */ y(ee.button, I({
    type: "button",
    id: i.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": i.open,
    "aria-controls": i.open ? i.contentId : void 0,
    "data-state": i.open ? "open" : "closed",
    "data-disabled": n ? "" : void 0,
    disabled: n
  }, o, {
    ref: wn(t, i.triggerRef),
    onPointerDown: K(e.onPointerDown, (a) => {
      !n && a.button === 0 && a.ctrlKey === !1 && (i.onOpenToggle(), i.open || a.preventDefault());
    }),
    onKeyDown: K(e.onKeyDown, (a) => {
      n || ([
        "Enter",
        " "
      ].includes(a.key) && i.onOpenToggle(), a.key === "ArrowDown" && i.onOpenChange(!0), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(a.key) && a.preventDefault());
    })
  })));
}), _u = (e) => {
  const { __scopeDropdownMenu: t, ...r } = e, n = Kt(t);
  return /* @__PURE__ */ y(gu, I({}, n, r));
}, Su = "DropdownMenuContent", Ru = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = Ji(Su, r), i = Kt(r), s = k(!1);
  return /* @__PURE__ */ y(xu, I({
    id: o.contentId,
    "aria-labelledby": o.triggerId
  }, i, n, {
    ref: t,
    onCloseAutoFocus: K(e.onCloseAutoFocus, (a) => {
      var c;
      s.current || (c = o.triggerRef.current) === null || c === void 0 || c.focus(), s.current = !1, a.preventDefault();
    }),
    onInteractOutside: K(e.onInteractOutside, (a) => {
      const c = a.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, u = c.button === 2 || l;
      (!o.modal || u) && (s.current = !0);
    }),
    style: {
      ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), Tu = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = Kt(r);
  return /* @__PURE__ */ y($u, I({}, o, n, {
    ref: t
  }));
}), Au = Cu, Ou = Pu, Iu = _u, Mu = Ru, Nu = Tu, Du = ye(
  "flex group w-full items-start gap-4 rounded-lg px-2 py-2.5 focus-visible:outline focus-visible:outline-1 focus-visible:outline-focus focus-visible:ring-1 focus-visible:ring-focus focus-visible:ring-offset-1 disabled:text-disabled justify-between relative focus-visible:z-10 hover:z-10",
  {
    variants: {
      variant: {
        default: "text",
        critical: "text-critical enabled:hover:bg-surface-critical-hovered enabled:active:bg-surface-critical-pressed"
      },
      active: { true: "", false: "" }
    },
    compoundVariants: [
      {
        variant: "default",
        active: !0,
        className: "enabled:bg-surface-selected enabled:hover:bg-surface-selected-hovered enabled:active:bg-surface-selected-pressed"
      },
      {
        variant: "default",
        active: !1,
        className: "enabled:hover:bg-surface-hovered enabled:active:bg-surface-pressed"
      }
    ],
    defaultVariants: {
      variant: "default",
      active: !1
    }
  }
), Mo = ye(
  "w-5 h-5 flex-shrink-0 group-disabled:text-icon-disabled",
  {
    variants: {
      variant: {
        default: "text-icon",
        critical: "text-icon-critical"
      },
      active: { true: "", false: "" }
    },
    compoundVariants: [
      {
        variant: "default",
        active: !0,
        className: "group-enabled:text-interactive-primary group-enabled:group-hover:text-interactive-primary-hovered"
      }
    ],
    defaultVariants: {
      variant: "default",
      active: !1
    }
  }
), un = Z.forwardRef(
  ({
    children: e,
    prefixIcon: t,
    suffixIcon: r,
    active: n,
    variant: o,
    sideHelpText: i,
    bottomHelpText: s,
    ...a
  }, c) => /* @__PURE__ */ m.jsxs("div", { className: "relative px-2", children: [
    n && !o && /* @__PURE__ */ m.jsx("div", { className: "absolute left-0 h-full w-[3px] rounded bg-interactive-primary" }),
    /* @__PURE__ */ m.jsxs(
      "button",
      {
        className: B(Du({ variant: o, active: n }), {
          "items-center": !s
        }),
        ref: c,
        ...a,
        children: [
          /* @__PURE__ */ m.jsxs("span", { className: "flex gap-4", children: [
            t && /* @__PURE__ */ m.jsx("div", { className: Mo({ variant: o, active: n }), children: t }),
            i && /* @__PURE__ */ m.jsx("span", { className: "text-sm text-subdued", children: i }),
            /* @__PURE__ */ m.jsxs("span", { className: "flex flex-col items-start text-sm font-normal", children: [
              e,
              s && /* @__PURE__ */ m.jsx("span", { className: "text-subdued", children: s })
            ] })
          ] }),
          r && /* @__PURE__ */ m.jsx("span", { className: Mo({ variant: o, active: n }), children: r })
        ]
      }
    )
  ] })
);
un.displayName = "ActionItem";
const Qi = ({
  items: e,
  sections: t,
  activator: r,
  onOpenChange: n
}) => {
  const [, o] = X(!1), i = !!r, s = (d) => d == null ? void 0 : d.map(
    ({ onClick: p, ...f }, b) => i ? /* @__PURE__ */ m.jsx(Nu, { asChild: !0, onSelect: p, children: /* @__PURE__ */ m.jsx(un, { ...f }) }, (f == null ? void 0 : f.id) || b) : /* @__PURE__ */ m.jsx(un, { ...f, onClick: p }, f.id || b)
  ), a = e != null && e.length ? s(e) : null, c = t != null && t.length ? /* @__PURE__ */ m.jsx("div", { className: "group divide-y", children: t.map((d, p) => /* @__PURE__ */ m.jsxs(
    "div",
    {
      className: "group/section-item [&:not(:first-child)]:mt-1",
      children: [
        d.title && /* @__PURE__ */ m.jsx("p", { className: "mx-4 mt-1 pb-2 pt-4 text-xs font-semibold group-first/section-item:pt-1", children: d.title }),
        s(d.items)
      ]
    },
    p
  )) }) : null, l = "flex flex-col overflow-hidden rounded-level-1 bg-surface py-2 shadow-md data-[state=closed]:animate-dropdown-close data-[state=open]:animate-dropdown-open max-w-max", u = (d) => {
    o(d), n == null || n(d);
  };
  return i ? /* @__PURE__ */ m.jsxs(Au, { onOpenChange: u, modal: !1, children: [
    /* @__PURE__ */ m.jsx(Ou, { asChild: !0, children: r }),
    /* @__PURE__ */ m.jsx(Iu, { container: document.getElementById("uikit-theme"), children: /* @__PURE__ */ m.jsx(
      Mu,
      {
        side: "bottom",
        className: B(l, "z-dropdown mt-1"),
        align: "start",
        children: a || c
      }
    ) })
  ] }) : /* @__PURE__ */ m.jsx("div", { className: l, children: a || c });
};
Qi.displayName = "ActionList";
const xt = {
  empty: O((e, t) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 8 8",
      fill: "none",
      ref: t,
      ...e,
      children: /* @__PURE__ */ m.jsx("circle", { cx: "4", cy: "4", r: "3", stroke: "currentColor", strokeWidth: "2" })
    }
  )),
  full: O((e, t) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 8 8",
      fill: "none",
      ref: t,
      ...e,
      children: /* @__PURE__ */ m.jsx("circle", { cx: "4", cy: "4", r: "4", fill: "currentColor" })
    }
  )),
  partial: O((e, t) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 8 8",
      fill: "none",
      ref: t,
      ...e,
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4ZM2 4H6C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4Z",
          fill: "currentColor"
        }
      )
    }
  ))
};
xt.empty.displayName = "BadgeIcon.empty";
xt.full.displayName = "BadgeIcon.full";
xt.partial.displayName = "BadgeIcon.partial";
const ku = ye("", {
  variants: {
    variant: {
      attention: "text-icon-attention bg-surface-attention-subdued",
      critical: "text-icon-critical bg-surface-critical-subdued",
      default: "text-icon bg-surface-neutral-subdued",
      info: "text-icon-highlight bg-surface-highlight-subdued",
      success: "text-icon-success bg-surface-success-subdued",
      warning: "text-icon-warning bg-surface-warning-subdued"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), Wr = ({
  className: e,
  progress: t,
  variant: r = "default",
  ...n
}) => {
  let o = /* @__PURE__ */ m.jsx(m.Fragment, {});
  switch (t) {
    case "partial":
      o = /* @__PURE__ */ m.jsx(xt.partial, { className: "h-2 w-2" });
      break;
    case "incomplete":
      o = /* @__PURE__ */ m.jsx(xt.empty, { className: "h-2 w-2" });
      break;
    default:
      o = /* @__PURE__ */ m.jsx(xt.full, { className: "h-2 w-2" });
      break;
  }
  return /* @__PURE__ */ m.jsx(
    "span",
    {
      className: B(
        "inline-flex items-center rounded-level-0 p-0.5",
        ku({ variant: r }),
        e
      ),
      ...n,
      children: o
    }
  );
}, No = ye("", {
  variants: {
    variant: {
      attention: "text-icon-attention bg-surface-attention-subdued border-interactive-attention",
      critical: "text-icon-critical bg-surface-critical-subdued border-interactive-critical",
      default: "text-icon bg-surface-neutral-subdued border-icon",
      info: "text-icon-highlight bg-surface-highlight-subdued border-interactive-highlight",
      success: "text-icon-success bg-surface-success-subdued border-interactive-success",
      warning: "text-icon-warning bg-surface-warning-subdued border-interactive-warning"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), Qv = ({
  as: e,
  children: t,
  className: r,
  progress: n,
  variant: o,
  prefixIcon: i,
  ...s
}) => {
  if (e === "dot")
    return /* @__PURE__ */ m.jsx(
      Wr,
      {
        progress: n,
        variant: o,
        className: r,
        ...s
      }
    );
  if (e === "notification")
    return /* @__PURE__ */ m.jsxs(
      "span",
      {
        className: B(
          "flex min-w-[1.3125rem] items-center justify-center gap-1 rounded-level-0 border border-solid px-1 py-0.5",
          No({ variant: o }),
          r
        ),
        ...s,
        children: [
          n && /* @__PURE__ */ m.jsx(
            Wr,
            {
              progress: n,
              variant: o,
              className: "p-0 !text"
            }
          ),
          /* @__PURE__ */ m.jsx(
            "span",
            {
              className: B(
                "truncate text-[0.625rem] font-bold leading-[0.875rem] tracking-[0.03125rem] text [&>*]:truncate"
              ),
              children: t
            }
          )
        ]
      }
    );
  let a = i;
  return !a && n && (a = /* @__PURE__ */ m.jsx(
    Wr,
    {
      progress: n,
      variant: o,
      className: "shrink-0 p-0 !text"
    }
  )), /* @__PURE__ */ m.jsxs(
    "span",
    {
      className: B(
        "flex min-w-[1.875rem] items-center gap-1 rounded-level-0 border border-solid px-2 py-0.5",
        No({ variant: o }),
        i && "min-w-[3.0625rem] gap-0.5 py-0 pl-[0.3125rem] pr-2",
        r
      ),
      ...s,
      children: [
        a,
        /* @__PURE__ */ m.jsx("span", { className: "truncate text-xs font-semibold text [&>*]:truncate", children: t })
      ]
    }
  );
};
function Un(e) {
  const t = k({
    value: e,
    previous: e
  });
  return Fe(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const es = "Checkbox", [ju, e0] = ge(es), [Lu, Fu] = ju(es), Vu = /* @__PURE__ */ O((e, t) => {
  const { __scopeCheckbox: r, name: n, checked: o, defaultChecked: i, required: s, disabled: a, value: c = "on", onCheckedChange: l, ...u } = e, [d, p] = X(null), f = se(
    t,
    (w) => p(w)
  ), b = k(!1), v = d ? !!d.closest("form") : !0, [g = !1, x] = Te({
    prop: o,
    defaultProp: i,
    onChange: l
  }), $ = k(g);
  return G(() => {
    const w = d == null ? void 0 : d.form;
    if (w) {
      const C = () => x($.current);
      return w.addEventListener("reset", C), () => w.removeEventListener("reset", C);
    }
  }, [
    d,
    x
  ]), /* @__PURE__ */ y(Lu, {
    scope: r,
    state: g,
    disabled: a
  }, /* @__PURE__ */ y(ee.button, I({
    type: "button",
    role: "checkbox",
    "aria-checked": nt(g) ? "mixed" : g,
    "aria-required": s,
    "data-state": ts(g),
    "data-disabled": a ? "" : void 0,
    disabled: a,
    value: c
  }, u, {
    ref: f,
    onKeyDown: K(e.onKeyDown, (w) => {
      w.key === "Enter" && w.preventDefault();
    }),
    onClick: K(e.onClick, (w) => {
      x(
        (C) => nt(C) ? !0 : !C
      ), v && (b.current = w.isPropagationStopped(), b.current || w.stopPropagation());
    })
  })), v && /* @__PURE__ */ y(zu, {
    control: d,
    bubbles: !b.current,
    name: n,
    value: c,
    checked: g,
    required: s,
    disabled: a,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), Bu = "CheckboxIndicator", Uu = /* @__PURE__ */ O((e, t) => {
  const { __scopeCheckbox: r, forceMount: n, ...o } = e, i = Fu(Bu, r);
  return /* @__PURE__ */ y(Se, {
    present: n || nt(i.state) || i.state === !0
  }, /* @__PURE__ */ y(ee.span, I({
    "data-state": ts(i.state),
    "data-disabled": i.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), zu = (e) => {
  const { control: t, checked: r, bubbles: n = !0, ...o } = e, i = k(null), s = Un(r), a = xr(t);
  return G(() => {
    const c = i.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== r && d) {
      const p = new Event("click", {
        bubbles: n
      });
      c.indeterminate = nt(r), d.call(c, nt(r) ? !1 : r), c.dispatchEvent(p);
    }
  }, [
    s,
    r,
    n
  ]), /* @__PURE__ */ y("input", I({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: nt(r) ? !1 : r
  }, o, {
    tabIndex: -1,
    ref: i,
    style: {
      ...e.style,
      ...a,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function nt(e) {
  return e === "indeterminate";
}
function ts(e) {
  return nt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Ku = Vu, Wu = Uu, ur = {
  checked: O((e, t) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "10",
      height: "8",
      viewBox: "0 0 10 8",
      fill: "none",
      ref: t,
      ...e,
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M9.72318 0.237414C10.0707 0.574491 10.0942 1.14584 9.77561 1.51356L4.40976 7.70711C4.25243 7.88871 4.03181 7.99443 3.79903 7.99979C3.56625 8.00514 3.3415 7.90965 3.17686 7.73545L0.250031 4.63868C-0.0833435 4.28595 -0.0833435 3.71406 0.250031 3.36133C0.583405 3.00859 1.12391 3.00859 1.45729 3.36133L3.75367 5.79105L8.51706 0.292899C8.83564 -0.0748211 9.37564 -0.0996624 9.72318 0.237414Z",
          fill: "currentColor"
        }
      )
    }
  )),
  indeterminate: Q.subtract
};
ur.checked.displayName = "Icon.checked";
ur.indeterminate.displayName = "Icon.indeterminate";
const Hu = ({
  id: e,
  checked: t,
  className: r,
  disabled: n,
  error: o,
  hint: i,
  label: s,
  onChange: a,
  ...c
}) => {
  const l = Ft(), u = e || l, d = t === "indeterminate", p = t && !d, f = !p && !d;
  return /* @__PURE__ */ m.jsxs("div", { className: "inline-flex flex-col items-start", children: [
    /* @__PURE__ */ m.jsxs(
      Ku,
      {
        ...c,
        id: u,
        checked: t,
        disabled: n,
        ...o && { "aria-invalid": !0, "data-error": !0 },
        onCheckedChange: a,
        className: B(
          "group flex items-start gap-2 py-1 focus-visible:outline-none focus-visible:ring-0",
          r
        ),
        children: [
          /* @__PURE__ */ m.jsx(
            Wu,
            {
              className: B(
                "relative m-[1px] h-[18px] min-w-[18px] rounded-level-3 border-2 border-default bg-interactive-plain",
                "group-focus-visible:outline group-focus-visible:outline-1 group-focus-visible:outline-focus group-focus-visible:ring-1 group-focus-visible:ring-focus group-focus-visible:ring-offset-1",
                !n && "group-hover:shadow-sm group-hover:shadow-[rgb(0,0,0,0.08)]",
                d && "group-hover:border-hovered group-hover:bg-interactive-plain-hovered",
                d && !n && "border-interactive-primary bg-interactive-primary group-hover:border-interactive-primary-hovered group-hover:bg-interactive-primary-hovered",
                p && "border-0 group-hover:border-hovered",
                p && !n && "border-interactive-primary bg-interactive-primary group-hover:border-interactive-primary-hovered group-hover:bg-interactive-primary-hovered",
                n && "border-disabled bg-surface-disabled",
                n && p && "border-interactive-disabled bg-interactive-disabled",
                n && d && "border-interactive-disabled group-hover:border-interactive-disabled group-hover:bg-interactive-disabled",
                !n && o && "border-critical bg-surface-critical group-hover:bg-surface-critical-hovered",
                !n && o && d && "border-interactive-critical group-hover:border-interactive-critical-hovered group-hover:bg-interactive-critical-hovered",
                !n && o && p && "bg-interactive-critical group-hover:bg-interactive-critical-hovered"
              ),
              forceMount: !0,
              children: d ? /* @__PURE__ */ m.jsx(
                ur.indeterminate,
                {
                  "aria-hidden": !0,
                  className: B(
                    "bg-interactive-primary text-icon-on-interactive",
                    !n && "group-hover:bg-interactive-primary-hovered",
                    n && "bg-interactive-disabled text-icon-disabled",
                    !n && o && "bg-interactive-critical group-hover:bg-interactive-critical-hovered"
                  )
                }
              ) : /* @__PURE__ */ m.jsx(
                ur.checked,
                {
                  "aria-hidden": !0,
                  className: B(
                    "absolute left-[4px] top-[5px] hidden text-icon-on-interactive",
                    p && "block",
                    f && "group-hover:left-[2px] group-hover:top-[3px]",
                    !n && "group-hover:block group-hover:text-interactive-plain-hovered",
                    n && "text-icon-disabled"
                  )
                }
              )
            }
          ),
          s && /* @__PURE__ */ m.jsx(
            "label",
            {
              htmlFor: u,
              className: B(
                "text-left text-sm text",
                !n && "group-hover:cursor-pointer",
                n && "text-disabled"
              ),
              "aria-disabled": n,
              children: s
            }
          )
        ]
      }
    ),
    i && /* @__PURE__ */ m.jsx(
      "p",
      {
        className: B(
          "flex items-start ps-7 text-sm text-subdued",
          n && "text-disabled"
        ),
        children: i
      }
    )
  ] });
};
Hu.displayName = "Checkbox";
const Gu = ye(
  "rounded enabled:focus-visible:outline-focus enabled:focus-visible:outline-1 enabled:focus-visible:outline enabled:focus-visible:ring-focus enabled:focus-visible:ring-1 enabled:focus-visible:ring-offset-1",
  {
    variants: {
      variant: {
        default: "enabled:hover:bg-surface-neutral-hovered enabled:active:bg-surface-neutral-pressed",
        critical: "enabled:hover:bg-interactive-critical-hovered enabled:active:bg-interactive-critical-pressed",
        highlight: "",
        success: ""
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), st = O(
  ({
    accessibilityLabel: e,
    active: t,
    children: r,
    className: n,
    variant: o = "default",
    ...i
  }, s) => /* @__PURE__ */ m.jsxs(
    "button",
    {
      ref: s,
      className: B(
        Gu({ variant: o }),
        t && "bg-surface-neutral-pressed",
        n
      ),
      ...i,
      children: [
        r,
        /* @__PURE__ */ m.jsx("span", { className: "sr-only", children: e })
      ]
    }
  )
);
st.displayName = "IconButton";
const rs = ({
  min: e = 0,
  max: t = 1 / 0,
  value: r,
  onChange: n
}) => {
  const o = () => {
    if (typeof r < "u") {
      if (r >= t)
        return;
      if (r < e)
        return n == null ? void 0 : n(e);
      n == null || n(r + 1);
      return;
    }
    n == null || n(1);
  }, i = () => {
    if (typeof r < "u")
      return r <= e ? void 0 : r > t ? n == null ? void 0 : n(t) : n == null ? void 0 : n(r - 1);
    n == null || n(0);
  }, s = typeof r < "u" && r >= t, a = typeof r < "u" && r <= e;
  return {
    increment: o,
    decrement: i,
    isIncrementDisabled: s,
    isDecrementDisabled: a
  };
};
var Yu = typeof window < "u", Xu = function(e, t) {
  return t !== void 0 ? t : Yu ? window.matchMedia(e).matches : (process.env.NODE_ENV !== "production" && console.warn("`useMedia` When server side rendering, defaultState should be defined to prevent a hydration mismatches."), !1);
}, Zu = function(e, t) {
  var r = X(Xu(e, t)), n = r[0], o = r[1];
  return G(function() {
    var i = !0, s = window.matchMedia(e), a = function() {
      i && o(!!s.matches);
    };
    return s.addListener(a), o(s.matches), function() {
      i = !1, s.removeListener(a);
    };
  }, [e]), n;
};
const bt = Zu, he = {
  sm: 560,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
}, qu = () => {
  const e = bt(`(max-width: ${he.sm - 1}px)`), t = bt(
    `(min-width: ${he.sm}px) and (max-width: ${he.md - 1}px)`
  ), r = bt(
    `(min-width: ${he.md}px) and (max-width: ${he.lg - 1}px)`
  ), n = bt(
    `(min-width: ${he.lg}px) and (max-width: ${he.xl - 1}px)`
  ), o = bt(
    `(min-width: ${he.xl}px) and (max-width: ${he["2xl"] - 1}px)`
  ), i = bt(`(min-width: ${he["2xl"]}px)`);
  return { isXs: e, isSm: t, isMd: r, isLg: n, isXl: o, is2Xl: i };
}, fr = {
  caretDownMinor: O((e, t) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      viewBox: "0 0 18 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      ...e,
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          d: "M12.0983 5L5.90169 5C5.15069 5 4.73001 5.75351 5.19399 6.2676L8.29231 9.70055C8.65265 10.0998 9.34735 10.0998 9.70769 9.70055L12.806 6.2676C13.27 5.75351 12.8493 5 12.0983 5Z",
          fill: "currentColor"
        }
      )
    }
  )),
  caretUpMinor: O((e, t) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      viewBox: "0 0 18 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      ...e,
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          d: "M5.90169 9H12.0983C12.8493 9 13.27 8.24649 12.806 7.7324L9.70769 4.29945C9.34735 3.90018 8.65265 3.90018 8.29231 4.29945L5.19399 7.7324C4.73001 8.24649 5.15069 9 5.90169 9Z",
          fill: "currentColor"
        }
      )
    }
  ))
};
fr.caretDownMinor.displayName = "StepperIcon.caretDownMinor";
fr.caretUpMinor.displayName = "StepperIcon.caretUpMinor";
const Ju = ({
  min: e,
  max: t,
  disabled: r,
  value: n,
  onChange: o
}) => {
  const { increment: i, decrement: s, isIncrementDisabled: a, isDecrementDisabled: c } = rs({
    min: e,
    max: t,
    value: n,
    onChange: o
  }), l = B(
    "h-[14px] w-[18px] cursor-pointer rounded-level-3 bg-surface-neutral text-icon select-none",
    r && "bg-transparent"
  );
  return /* @__PURE__ */ m.jsxs("div", { className: "relative left-[6px] flex flex-col gap-0.5", children: [
    /* @__PURE__ */ m.jsx(
      "div",
      {
        className: B(
          l,
          a || r ? "pointer-events-none text-icon-disabled" : "group-hover:bg-surface-neutral-hovered group-hover:text-icon-hovered"
        ),
        role: "button",
        tabIndex: -1,
        "aria-disabled": r || a,
        "data-testid": "increment",
        onClick: i,
        children: /* @__PURE__ */ m.jsx(
          fr.caretUpMinor,
          {
            className: B(
              "rounded-level-3",
              !a && "active:bg-surface-neutral-pressed"
            )
          }
        )
      }
    ),
    /* @__PURE__ */ m.jsx(
      "div",
      {
        className: B(
          l,
          c || r ? "pointer-events-none text-icon-disabled" : "group-hover:bg-surface-neutral-hovered group-hover:text-icon-hovered"
        ),
        role: "button",
        tabIndex: -1,
        "aria-disabled": r || c,
        "data-testid": "decrement",
        onClick: s,
        children: /* @__PURE__ */ m.jsx(
          fr.caretDownMinor,
          {
            className: B(
              "rounded-level-3",
              !c && "active:bg-surface-neutral-pressed"
            )
          }
        )
      }
    )
  ] });
}, ns = O(
  ({
    className: e,
    disabled: t,
    error: r,
    hint: n,
    id: o,
    label: i,
    maxLength: s,
    multiline: a,
    prefix: c,
    prefixIcon: l,
    preview: u,
    showCharacterCount: d,
    showHintIcon: p,
    success: f,
    suffix: b,
    suffixIcon: v,
    value: g = "",
    type: x,
    onChange: $,
    ...w
  }, C) => {
    const P = k(), T = C || P, _ = !t && !u, R = f || r, D = Ft(), U = o || D, z = y(a ? "textarea" : "input", {
      "aria-disabled": t || u,
      className: B(
        "w-full bg-interactive-plain rounded font-normal leading-tight appearance-none text uikit-hide-number-spin-controls",
        a ? "rounded-level-2 px-3 py-2 justify-start items-center gap-1 inline-flex" : "focus:outline-none text-base bg-transparent",
        {
          "text-success": f,
          "text-critical": r,
          "bg-transparent text-default group-hover:bg-transparent hover:bg-transparent group-hover:disabled:bg-transparent": u,
          "bg-surface-disabled text-disabled": t && !u
        }
      ),
      disabled: t || u,
      id: o,
      maxLength: s,
      value: g,
      ref: T,
      onChange: (H) => {
        if (x === "number") {
          const V = parseInt(H.target.value);
          return $ == null ? void 0 : $(isNaN(V) ? void 0 : V);
        }
        return $ == null ? void 0 : $(H.target.value);
      },
      type: x,
      ...w
    }), N = i ? /* @__PURE__ */ m.jsx(
      "label",
      {
        htmlFor: U,
        className: B("w-full text-sm font-medium leading-tight text", {
          "text-disabled": t && !u
        }),
        children: i
      }
    ) : null, W = d && s && !u ? /* @__PURE__ */ m.jsx(
      "span",
      {
        className: B(
          "text-right text-sm font-normal leading-tight text-subdued",
          {
            "text-disabled": t
          }
        ),
        children: `${(g == null ? void 0 : g.toString().length) || 0}/${s}`
      }
    ) : null, E = n && !u && (!R || t) ? /* @__PURE__ */ m.jsxs("div", { className: "inline-flex gap-1", children: [
      p && /* @__PURE__ */ m.jsx(
        Q.info,
        {
          className: B("h-5 w-5 rounded-level-2 text-icon", {
            "text-icon-disabled": t
          })
        }
      ),
      /* @__PURE__ */ m.jsx(
        "p",
        {
          className: B(
            "shrink grow basis-0 text-sm font-normal leading-5 text-subdued",
            {
              "text-disabled": t
            }
          ),
          children: n
        }
      )
    ] }) : null, M = R && _ ? /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: B("inline-flex gap-2", {
          "text-success": f,
          "text-critical": r
        }),
        children: [
          /* @__PURE__ */ m.jsx("div", { className: "inline-flex h-5 w-5 justify-center", children: f ? /* @__PURE__ */ m.jsx(Q.success, {}) : /* @__PURE__ */ m.jsx(Q.error, {}) }),
          /* @__PURE__ */ m.jsx(
            "div",
            {
              className: B("text-sm font-normal", {
                "text-success": f,
                "text-critical": r
              }),
              children: f || r
            }
          )
        ]
      }
    ) : null, F = x === "number" && !u && /* @__PURE__ */ m.jsx(
      Ju,
      {
        min: w == null ? void 0 : w.min,
        max: w.max,
        value: isNaN(parseInt(String(g))) ? void 0 : Number(g),
        disabled: t,
        onChange: (H) => {
          var V;
          typeof T != "function" && ((V = T.current) == null || V.focus()), $ == null || $(H);
        }
      }
    );
    return /* @__PURE__ */ m.jsx(m.Fragment, { children: a ? /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: B(
          "w-full flex-col items-start justify-start gap-1",
          e
        ),
        children: [
          /* @__PURE__ */ m.jsxs("div", { className: "inline-flex h-5 w-full items-center justify-center gap-1 pr-1", children: [
            N,
            W
          ] }),
          z,
          E,
          M
        ]
      }
    ) : /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: B(
          "inline-flex w-full flex-col items-start justify-start gap-1",
          e
        ),
        children: [
          N,
          /* @__PURE__ */ m.jsxs(
            "div",
            {
              className: B(
                "group inline-flex h-9 w-full items-center justify-start gap-1 rounded-level-2 border border-solid border-default bg-interactive-plain py-2 pl-3 pr-2 focus-within:border-focus focus-within:ring-1 focus-within:ring-focus hover:border-hovered hover:bg-interactive-plain-hovered hover:focus-within:border-focus hover:focus-within:bg-interactive-plain",
                {
                  "border-disabled bg-surface-disabled text-disabled hover:border-disabled hover:bg-surface-disabled": t && !u,
                  "border-interactive-success focus-within:border-interactive-success focus-within:ring-1 focus-within:ring-interactive-success hover:border-interactive-success-hovered hover:focus-within:border-interactive-success": f && _,
                  "border-critical focus-within:border-critical focus-within:ring-1 focus-within:ring-critical hover:border-interactive-critical-hovered hover:focus-within:border-critical": r && _,
                  "border-none bg-transparent px-0 py-2 text-disabled hover:bg-transparent": u
                }
              ),
              children: [
                c && /* @__PURE__ */ m.jsx(
                  "span",
                  {
                    className: B(
                      "min-w-[20px] flex-shrink-0 whitespace-nowrap text-base font-normal leading-tight text-subdued",
                      {
                        "text-success": f && _,
                        "text-critical": r && _,
                        "text-disabled": t && !u
                      }
                    ),
                    children: c
                  }
                ),
                l && /* @__PURE__ */ m.jsx(
                  "div",
                  {
                    className: B(
                      "flex h-5 w-5 flex-shrink-0 items-center justify-center text-icon",
                      {
                        "text-icon-disabled": t && !u,
                        "text-success": f && _,
                        "text-critical": r && _
                      }
                    ),
                    children: l
                  }
                ),
                z,
                b && /* @__PURE__ */ m.jsx(
                  "span",
                  {
                    className: B(
                      "min-w-[20px] flex-shrink-0 whitespace-nowrap text-base font-normal leading-tight text-subdued",
                      {
                        "text-success": f && _,
                        "text-critical": r && _,
                        "text-disabled": t && !u
                      }
                    ),
                    children: b
                  }
                ),
                W,
                v && /* @__PURE__ */ m.jsx(
                  "div",
                  {
                    className: B(
                      "flex h-5 w-5 flex-shrink-0 items-center justify-center text-icon",
                      {
                        "text-icon-disabled": t && !u,
                        "text-success": f && _,
                        "text-critical": r && _
                      }
                    ),
                    children: v
                  }
                ),
                F
              ]
            }
          ),
          E,
          M
        ]
      }
    ) });
  }
);
ns.displayName = "InputField";
const Do = ye(
  "rounded-level-3 items-center inline-flex underline",
  {
    variants: {
      disabled: {
        false: "cursor-pointer",
        true: "cursor-default"
      },
      monochrome: {
        false: "",
        true: ""
      },
      size: {
        small: "text-[0.625rem] leading-[0.875rem] font-medium tracking-wide",
        large: "text-sm"
      },
      variant: {
        default: "",
        critical: "",
        success: ""
      }
    },
    compoundVariants: [
      {
        disabled: !0,
        monochrome: [!1, !0],
        variant: ["default", "success", "critical"],
        className: "text-interactive-disabled hover:text-interactive-disabled active:text-interactive-disabled pointer-events-none"
      },
      {
        monochrome: !0,
        disabled: !1,
        variant: ["default", "success", "critical"],
        className: "text hover:text active:text"
      },
      {
        disabled: !1,
        monochrome: !1,
        variant: "success",
        className: "text-interactive-success hover:text-interactive-success-hovered active:text-interactive-success-pressed"
      },
      {
        disabled: !1,
        monochrome: !1,
        variant: "critical",
        className: "text-interactive-critical hover:text-interactive-critical-hovered active:text-interactive-critical-pressed"
      },
      {
        disabled: !1,
        monochrome: !1,
        variant: "default",
        className: "text-interactive-primary hover:text-interactive-primary-hovered active:text-interactive-primary-pressed"
      }
    ],
    defaultVariants: {
      disabled: !1,
      monochrome: !1,
      size: "large",
      variant: "default"
    }
  }
), os = O(
  (e, t) => {
    const { children: r, className: n, disabled: o, external: i, size: s } = e;
    if (e.as === "button") {
      const c = {
        ...e,
        "aria-disabled": o || void 0,
        as: void 0,
        className: B(
          Do(e),
          "focus-visible:outline focus-visible:outline-1 focus-visible:outline-focus focus-visible:ring-1 focus-visible:ring-focus focus-visible:ring-offset-1",
          n
        ),
        disabled: o,
        variant: void 0,
        external: void 0,
        size: void 0,
        monochrome: void 0
      };
      return /* @__PURE__ */ m.jsxs(
        "button",
        {
          type: "button",
          ref: t,
          ...c,
          children: [
            r,
            i && /* @__PURE__ */ m.jsx(
              "div",
              {
                className: B(
                  "h-5 w-5",
                  s === "small" && "h-[0.875rem] w-[0.875rem]"
                ),
                children: /* @__PURE__ */ m.jsx(Q.externalLink, {})
              }
            )
          ]
        }
      );
    }
    const a = {
      ...e,
      "aria-disabled": o || void 0,
      as: void 0,
      className: B(
        Do(e),
        "focus-visible:outline focus-visible:outline-1 focus-visible:outline-focus-link focus-visible:ring-1 focus-visible:ring-focus-link",
        n
      ),
      rel: i ? "noopener noreferrer" : void 0,
      target: i ? "_blank" : void 0,
      variant: void 0,
      external: void 0,
      size: void 0,
      monochrome: void 0
    };
    return /* @__PURE__ */ m.jsxs("a", { ref: t, ...a, children: [
      r,
      i && /* @__PURE__ */ m.jsx(
        "div",
        {
          className: B(
            "h-5 w-5",
            s === "small" && "h-[0.875rem] w-[0.875rem]"
          ),
          children: /* @__PURE__ */ m.jsx(Q.externalLink, {})
        }
      )
    ] });
  }
);
os.displayName = "Link";
const is = "Dialog", [ss, t0] = ge(is), [Qu, Me] = ss(is), ef = (e) => {
  const { __scopeDialog: t, children: r, open: n, defaultOpen: o, onOpenChange: i, modal: s = !0 } = e, a = k(null), c = k(null), [l = !1, u] = Te({
    prop: n,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ y(Qu, {
    scope: t,
    triggerRef: a,
    contentRef: c,
    contentId: Le(),
    titleId: Le(),
    descriptionId: Le(),
    open: l,
    onOpenChange: u,
    onOpenToggle: ie(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: s
  }, r);
}, tf = "DialogTrigger", rf = /* @__PURE__ */ O((e, t) => {
  const { __scopeDialog: r, ...n } = e, o = Me(tf, r), i = se(t, o.triggerRef);
  return /* @__PURE__ */ y(ee.button, I({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": zn(o.open)
  }, n, {
    ref: i,
    onClick: K(e.onClick, o.onOpenToggle)
  }));
}), as = "DialogPortal", [nf, cs] = ss(as, {
  forceMount: void 0
}), of = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: o } = e, i = Me(as, t);
  return /* @__PURE__ */ y(nf, {
    scope: t,
    forceMount: r
  }, rt.map(
    n,
    (s) => /* @__PURE__ */ y(Se, {
      present: r || i.open
    }, /* @__PURE__ */ y(wr, {
      asChild: !0,
      container: o
    }, s))
  ));
}, fn = "DialogOverlay", sf = /* @__PURE__ */ O((e, t) => {
  const r = cs(fn, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, i = Me(fn, e.__scopeDialog);
  return i.modal ? /* @__PURE__ */ y(Se, {
    present: n || i.open
  }, /* @__PURE__ */ y(af, I({}, o, {
    ref: t
  }))) : null;
}), af = /* @__PURE__ */ O((e, t) => {
  const { __scopeDialog: r, ...n } = e, o = Me(fn, r);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ y(Fn, {
      as: ot,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ y(ee.div, I({
      "data-state": zn(o.open)
    }, n, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...n.style
      }
    })))
  );
}), Nt = "DialogContent", cf = /* @__PURE__ */ O((e, t) => {
  const r = cs(Nt, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, i = Me(Nt, e.__scopeDialog);
  return /* @__PURE__ */ y(Se, {
    present: n || i.open
  }, i.modal ? /* @__PURE__ */ y(lf, I({}, o, {
    ref: t
  })) : /* @__PURE__ */ y(df, I({}, o, {
    ref: t
  })));
}), lf = /* @__PURE__ */ O((e, t) => {
  const r = Me(Nt, e.__scopeDialog), n = k(null), o = se(t, r.contentRef, n);
  return G(() => {
    const i = n.current;
    if (i)
      return Ln(i);
  }, []), /* @__PURE__ */ y(ls, I({}, e, {
    ref: o,
    trapFocus: r.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: K(e.onCloseAutoFocus, (i) => {
      var s;
      i.preventDefault(), (s = r.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: K(e.onPointerDownOutside, (i) => {
      const s = i.detail.originalEvent, a = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || a) && i.preventDefault();
    }),
    onFocusOutside: K(
      e.onFocusOutside,
      (i) => i.preventDefault()
    )
  }));
}), df = /* @__PURE__ */ O((e, t) => {
  const r = Me(Nt, e.__scopeDialog), n = k(!1), o = k(!1);
  return /* @__PURE__ */ y(ls, I({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (i) => {
      var s;
      if ((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, i), !i.defaultPrevented) {
        var a;
        n.current || (a = r.triggerRef.current) === null || a === void 0 || a.focus(), i.preventDefault();
      }
      n.current = !1, o.current = !1;
    },
    onInteractOutside: (i) => {
      var s, a;
      (s = e.onInteractOutside) === null || s === void 0 || s.call(e, i), i.defaultPrevented || (n.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
      const c = i.target;
      ((a = r.triggerRef.current) === null || a === void 0 ? void 0 : a.contains(c)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
    }
  }));
}), ls = /* @__PURE__ */ O((e, t) => {
  const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: i, ...s } = e, a = Me(Nt, r), c = k(null), l = se(t, c);
  return Tn(), /* @__PURE__ */ y(Lt, null, /* @__PURE__ */ y(An, {
    asChild: !0,
    loop: !0,
    trapped: n,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ y(mr, I({
    role: "dialog",
    id: a.contentId,
    "aria-describedby": a.descriptionId,
    "aria-labelledby": a.titleId,
    "data-state": zn(a.open)
  }, s, {
    ref: l,
    onDismiss: () => a.onOpenChange(!1)
  }))), !1);
}), uf = "DialogTitle", ff = /* @__PURE__ */ O((e, t) => {
  const { __scopeDialog: r, ...n } = e, o = Me(uf, r);
  return /* @__PURE__ */ y(ee.h2, I({
    id: o.titleId
  }, n, {
    ref: t
  }));
}), pf = "DialogClose", vf = /* @__PURE__ */ O((e, t) => {
  const { __scopeDialog: r, ...n } = e, o = Me(pf, r);
  return /* @__PURE__ */ y(ee.button, I({
    type: "button"
  }, n, {
    ref: t,
    onClick: K(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function zn(e) {
  return e ? "open" : "closed";
}
const bf = ef, mf = rf, hf = of, gf = sf, xf = cf, $f = ff, ko = vf, r0 = ({
  activator: e,
  children: t,
  className: r,
  open: n,
  primaryAction: o,
  secondaryActions: i,
  tertiaryAction: s,
  title: a,
  onClose: c,
  ...l
}) => {
  const { isXs: u } = qu(), d = s && !u, p = i && i.length > 0, f = d || p || o;
  return /* @__PURE__ */ m.jsxs(bf, { open: n, modal: !0, children: [
    /* @__PURE__ */ m.jsx(mf, { asChild: !0, children: e }),
    /* @__PURE__ */ m.jsxs(hf, { container: document.getElementById("uikit-theme"), children: [
      /* @__PURE__ */ m.jsx(gf, { className: "fixed inset-0 z-modalOverlay bg-overlay-modal opacity-20 radix-state-closed:animate-[modalOutOverlay_0.3s_cubic-bezier(0.26,0.25,0.41,0.67)] radix-state-open:animate-[modalInOverlay_0.3s_cubic-bezier(0.26,0.25,0.25,0.63)]" }),
      /* @__PURE__ */ m.jsx(
        xf,
        {
          onEscapeKeyDown: c,
          onPointerDownOutside: (b) => b.preventDefault(),
          onInteractOutside: (b) => b.preventDefault(),
          className: B(
            "fixed inset-0 z-modal flex items-center justify-center radix-state-closed:animate-[modalOut_0.3s_cubic-bezier(0.26,0.25,0.41,0.67)] radix-state-open:animate-[modalIn_0.3s_cubic-bezier(0.26,0.25,0.25,0.63)]",
            r
          ),
          ...l,
          children: /* @__PURE__ */ m.jsxs("div", { className: "relative flex w-[20rem] max-w-[20rem] flex-col items-start rounded-level-1 border-t border-default bg-surface shadow-2xl sm:w-[38.75rem] sm:min-w-[23.75rem] sm:max-w-[61.25rem]", children: [
            /* @__PURE__ */ m.jsx($f, { asChild: !0, children: /* @__PURE__ */ m.jsx("div", { className: "flex items-center self-stretch border-b border-default p-4 pr-9", children: /* @__PURE__ */ m.jsx("h2", { className: "flex-1 text-base font-semibold text sm:text-xl sm:leading-6", children: a }) }) }),
            /* @__PURE__ */ m.jsx("div", { className: "flex w-full items-start self-stretch px-4 py-2", children: t }),
            f && /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-end gap-4 self-stretch border-t border-default p-4 sm:justify-normal", children: [
              d && /* @__PURE__ */ m.jsx(ko, { asChild: !0, children: /* @__PURE__ */ m.jsx(
                He,
                {
                  plain: !0,
                  variant: "primary",
                  className: "hidden sm:block",
                  loading: s.loading,
                  onClick: s.onClick,
                  children: s.label
                }
              ) }),
              (p || o) && /* @__PURE__ */ m.jsxs("div", { className: "flex items-start gap-2 sm:flex-1 sm:items-center sm:justify-end", children: [
                p && i.map(
                  ({ label: b, onClick: v, loading: g }, x) => /* @__PURE__ */ m.jsx(
                    He,
                    {
                      size: u ? "small" : "medium",
                      loading: g,
                      onClick: v,
                      children: b
                    },
                    x
                  )
                ),
                o && /* @__PURE__ */ m.jsx(
                  He,
                  {
                    size: u ? "small" : "medium",
                    variant: "primary",
                    loading: o.loading,
                    onClick: o.onClick,
                    children: o.label
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ m.jsx(ko, { asChild: !0, children: /* @__PURE__ */ m.jsx(
              st,
              {
                accessibilityLabel: "close modal",
                className: "absolute right-4 top-4",
                onClick: c,
                children: /* @__PURE__ */ m.jsx(Q.close, { className: "h-5 w-5 text-icon" })
              }
            ) })
          ] })
        }
      )
    ] })
  ] });
}, ds = /* @__PURE__ */ O((e, t) => /* @__PURE__ */ y(ee.span, I({}, e, {
  ref: t,
  style: {
    // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    ...e.style
  }
}))), us = "ToastProvider", [Kn, wf, yf] = Vt("Toast"), [fs, n0] = ge("Toast", [
  yf
]), [Cf, Pr] = fs(us), ps = (e) => {
  const { __scopeToast: t, label: r = "Notification", duration: n = 5e3, swipeDirection: o = "right", swipeThreshold: i = 50, children: s } = e, [a, c] = X(null), [l, u] = X(0), d = k(!1), p = k(!1);
  return /* @__PURE__ */ y(Kn.Provider, {
    scope: t
  }, /* @__PURE__ */ y(Cf, {
    scope: t,
    label: r,
    duration: n,
    swipeDirection: o,
    swipeThreshold: i,
    toastCount: l,
    viewport: a,
    onViewportChange: c,
    onToastAdd: ie(
      () => u(
        (f) => f + 1
      ),
      []
    ),
    onToastRemove: ie(
      () => u(
        (f) => f - 1
      ),
      []
    ),
    isFocusedToastEscapeKeyDownRef: d,
    isClosePausedRef: p
  }, s));
};
ps.propTypes = {
  label(e) {
    if (e.label && typeof e.label == "string" && !e.label.trim()) {
      const t = `Invalid prop \`label\` supplied to \`${us}\`. Expected non-empty \`string\`.`;
      return new Error(t);
    }
    return null;
  }
};
const Ef = "ToastViewport", Pf = [
  "F8"
], pn = "toast.viewportPause", vn = "toast.viewportResume", _f = /* @__PURE__ */ O((e, t) => {
  const { __scopeToast: r, hotkey: n = Pf, label: o = "Notifications ({hotkey})", ...i } = e, s = Pr(Ef, r), a = wf(r), c = k(null), l = k(null), u = k(null), d = k(null), p = se(t, d, s.onViewportChange), f = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), b = s.toastCount > 0;
  G(() => {
    const g = (x) => {
      var $;
      n.every(
        (C) => x[C] || x.code === C
      ) && (($ = d.current) === null || $ === void 0 || $.focus());
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [
    n
  ]), G(() => {
    const g = c.current, x = d.current;
    if (b && g && x) {
      const $ = () => {
        if (!s.isClosePausedRef.current) {
          const T = new CustomEvent(pn);
          x.dispatchEvent(T), s.isClosePausedRef.current = !0;
        }
      }, w = () => {
        if (s.isClosePausedRef.current) {
          const T = new CustomEvent(vn);
          x.dispatchEvent(T), s.isClosePausedRef.current = !1;
        }
      }, C = (T) => {
        !g.contains(T.relatedTarget) && w();
      }, P = () => {
        g.contains(document.activeElement) || w();
      };
      return g.addEventListener("focusin", $), g.addEventListener("focusout", C), g.addEventListener("pointermove", $), g.addEventListener("pointerleave", P), window.addEventListener("blur", $), window.addEventListener("focus", w), () => {
        g.removeEventListener("focusin", $), g.removeEventListener("focusout", C), g.removeEventListener("pointermove", $), g.removeEventListener("pointerleave", P), window.removeEventListener("blur", $), window.removeEventListener("focus", w);
      };
    }
  }, [
    b,
    s.isClosePausedRef
  ]);
  const v = ie(({ tabbingDirection: g }) => {
    const $ = a().map((w) => {
      const C = w.ref.current, P = [
        C,
        ...zf(C)
      ];
      return g === "forwards" ? P : P.reverse();
    });
    return (g === "forwards" ? $.reverse() : $).flat();
  }, [
    a
  ]);
  return G(() => {
    const g = d.current;
    if (g) {
      const x = ($) => {
        const w = $.altKey || $.ctrlKey || $.metaKey;
        if ($.key === "Tab" && !w) {
          const R = document.activeElement, D = $.shiftKey;
          if ($.target === g && D) {
            var P;
            (P = l.current) === null || P === void 0 || P.focus();
            return;
          }
          const N = v({
            tabbingDirection: D ? "backwards" : "forwards"
          }), W = N.findIndex(
            (E) => E === R
          );
          if (Hr(N.slice(W + 1)))
            $.preventDefault();
          else {
            var T, _;
            D ? (T = l.current) === null || T === void 0 || T.focus() : (_ = u.current) === null || _ === void 0 || _.focus();
          }
        }
      };
      return g.addEventListener("keydown", x), () => g.removeEventListener("keydown", x);
    }
  }, [
    a,
    v
  ]), /* @__PURE__ */ y(Qc, {
    ref: c,
    role: "region",
    "aria-label": o.replace("{hotkey}", f),
    tabIndex: -1,
    style: {
      pointerEvents: b ? void 0 : "none"
    }
  }, b && /* @__PURE__ */ y(jo, {
    ref: l,
    onFocusFromOutsideViewport: () => {
      const g = v({
        tabbingDirection: "forwards"
      });
      Hr(g);
    }
  }), /* @__PURE__ */ y(Kn.Slot, {
    scope: r
  }, /* @__PURE__ */ y(ee.ol, I({
    tabIndex: -1
  }, i, {
    ref: p
  }))), b && /* @__PURE__ */ y(jo, {
    ref: u,
    onFocusFromOutsideViewport: () => {
      const g = v({
        tabbingDirection: "backwards"
      });
      Hr(g);
    }
  }));
}), Sf = "ToastFocusProxy", jo = /* @__PURE__ */ O((e, t) => {
  const { __scopeToast: r, onFocusFromOutsideViewport: n, ...o } = e, i = Pr(Sf, r);
  return /* @__PURE__ */ y(ds, I({
    "aria-hidden": !0,
    tabIndex: 0
  }, o, {
    ref: t,
    style: {
      position: "fixed"
    },
    onFocus: (s) => {
      var a;
      const c = s.relatedTarget;
      !((a = i.viewport) !== null && a !== void 0 && a.contains(c)) && n();
    }
  }));
}), _r = "Toast", Rf = "toast.swipeStart", Tf = "toast.swipeMove", Af = "toast.swipeCancel", Of = "toast.swipeEnd", If = /* @__PURE__ */ O((e, t) => {
  const { forceMount: r, open: n, defaultOpen: o, onOpenChange: i, ...s } = e, [a = !0, c] = Te({
    prop: n,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ y(Se, {
    present: r || a
  }, /* @__PURE__ */ y(vs, I({
    open: a
  }, s, {
    ref: t,
    onClose: () => c(!1),
    onPause: $e(e.onPause),
    onResume: $e(e.onResume),
    onSwipeStart: K(e.onSwipeStart, (l) => {
      l.currentTarget.setAttribute("data-swipe", "start");
    }),
    onSwipeMove: K(e.onSwipeMove, (l) => {
      const { x: u, y: d } = l.detail.delta;
      l.currentTarget.setAttribute("data-swipe", "move"), l.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${u}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`);
    }),
    onSwipeCancel: K(e.onSwipeCancel, (l) => {
      l.currentTarget.setAttribute("data-swipe", "cancel"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
    }),
    onSwipeEnd: K(e.onSwipeEnd, (l) => {
      const { x: u, y: d } = l.detail.delta;
      l.currentTarget.setAttribute("data-swipe", "end"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${u}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`), c(!1);
    })
  })));
}), [Mf, Nf] = fs(_r, {
  onClose() {
  }
}), vs = /* @__PURE__ */ O((e, t) => {
  const { __scopeToast: r, type: n = "foreground", duration: o, open: i, onClose: s, onEscapeKeyDown: a, onPause: c, onResume: l, onSwipeStart: u, onSwipeMove: d, onSwipeCancel: p, onSwipeEnd: f, ...b } = e, v = Pr(_r, r), [g, x] = X(null), $ = se(
    t,
    (E) => x(E)
  ), w = k(null), C = k(null), P = o || v.duration, T = k(0), _ = k(P), R = k(0), { onToastAdd: D, onToastRemove: U } = v, z = $e(() => {
    var E;
    (g == null ? void 0 : g.contains(document.activeElement)) && ((E = v.viewport) === null || E === void 0 || E.focus()), s();
  }), N = ie((E) => {
    !E || E === 1 / 0 || (window.clearTimeout(R.current), T.current = (/* @__PURE__ */ new Date()).getTime(), R.current = window.setTimeout(z, E));
  }, [
    z
  ]);
  G(() => {
    const E = v.viewport;
    if (E) {
      const M = () => {
        N(_.current), l == null || l();
      }, F = () => {
        const H = (/* @__PURE__ */ new Date()).getTime() - T.current;
        _.current = _.current - H, window.clearTimeout(R.current), c == null || c();
      };
      return E.addEventListener(pn, F), E.addEventListener(vn, M), () => {
        E.removeEventListener(pn, F), E.removeEventListener(vn, M);
      };
    }
  }, [
    v.viewport,
    P,
    c,
    l,
    N
  ]), G(() => {
    i && !v.isClosePausedRef.current && N(P);
  }, [
    i,
    P,
    v.isClosePausedRef,
    N
  ]), G(() => (D(), () => U()), [
    D,
    U
  ]);
  const W = Fe(() => g ? ms(g) : null, [
    g
  ]);
  return v.viewport ? /* @__PURE__ */ y(Lt, null, W && /* @__PURE__ */ y(Df, {
    __scopeToast: r,
    role: "status",
    "aria-live": n === "foreground" ? "assertive" : "polite",
    "aria-atomic": !0
  }, W), /* @__PURE__ */ y(Mf, {
    scope: r,
    onClose: z
  }, /* @__PURE__ */ xa(/* @__PURE__ */ y(Kn.ItemSlot, {
    scope: r
  }, /* @__PURE__ */ y(Jc, {
    asChild: !0,
    onEscapeKeyDown: K(a, () => {
      v.isFocusedToastEscapeKeyDownRef.current || z(), v.isFocusedToastEscapeKeyDownRef.current = !1;
    })
  }, /* @__PURE__ */ y(ee.li, I({
    // Ensure toasts are announced as status list or status when focused
    role: "status",
    "aria-live": "off",
    "aria-atomic": !0,
    tabIndex: 0,
    "data-state": i ? "open" : "closed",
    "data-swipe-direction": v.swipeDirection
  }, b, {
    ref: $,
    style: {
      userSelect: "none",
      touchAction: "none",
      ...e.style
    },
    onKeyDown: K(e.onKeyDown, (E) => {
      E.key === "Escape" && (a == null || a(E.nativeEvent), E.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0, z()));
    }),
    onPointerDown: K(e.onPointerDown, (E) => {
      E.button === 0 && (w.current = {
        x: E.clientX,
        y: E.clientY
      });
    }),
    onPointerMove: K(e.onPointerMove, (E) => {
      if (!w.current)
        return;
      const M = E.clientX - w.current.x, F = E.clientY - w.current.y, H = !!C.current, V = [
        "left",
        "right"
      ].includes(v.swipeDirection), L = [
        "left",
        "up"
      ].includes(v.swipeDirection) ? Math.min : Math.max, te = V ? L(0, M) : 0, J = V ? 0 : L(0, F), le = E.pointerType === "touch" ? 10 : 2, ve = {
        x: te,
        y: J
      }, Ae = {
        originalEvent: E,
        delta: ve
      };
      H ? (C.current = ve, rr(Tf, d, Ae, {
        discrete: !1
      })) : Lo(ve, v.swipeDirection, le) ? (C.current = ve, rr(Rf, u, Ae, {
        discrete: !1
      }), E.target.setPointerCapture(E.pointerId)) : (Math.abs(M) > le || Math.abs(F) > le) && (w.current = null);
    }),
    onPointerUp: K(e.onPointerUp, (E) => {
      const M = C.current, F = E.target;
      if (F.hasPointerCapture(E.pointerId) && F.releasePointerCapture(E.pointerId), C.current = null, w.current = null, M) {
        const H = E.currentTarget, V = {
          originalEvent: E,
          delta: M
        };
        Lo(M, v.swipeDirection, v.swipeThreshold) ? rr(Of, f, V, {
          discrete: !0
        }) : rr(Af, p, V, {
          discrete: !0
        }), H.addEventListener(
          "click",
          (L) => L.preventDefault(),
          {
            once: !0
          }
        );
      }
    })
  })))), v.viewport))) : null;
});
vs.propTypes = {
  type(e) {
    if (e.type && ![
      "foreground",
      "background"
    ].includes(e.type)) {
      const t = `Invalid prop \`type\` supplied to \`${_r}\`. Expected \`foreground | background\`.`;
      return new Error(t);
    }
    return null;
  }
};
const Df = (e) => {
  const { __scopeToast: t, children: r, ...n } = e, o = Pr(_r, t), [i, s] = X(!1), [a, c] = X(!1);
  return Bf(
    () => s(!0)
  ), G(() => {
    const l = window.setTimeout(
      () => c(!0),
      1e3
    );
    return () => window.clearTimeout(l);
  }, []), a ? null : /* @__PURE__ */ y(wr, {
    asChild: !0
  }, /* @__PURE__ */ y(ds, n, i && /* @__PURE__ */ y(Lt, null, o.label, " ", r)));
}, kf = /* @__PURE__ */ O((e, t) => {
  const { __scopeToast: r, ...n } = e;
  return /* @__PURE__ */ y(ee.div, I({}, n, {
    ref: t
  }));
}), jf = "ToastAction", Lf = /* @__PURE__ */ O((e, t) => {
  const { altText: r, ...n } = e;
  return r ? /* @__PURE__ */ y(bs, {
    altText: r,
    asChild: !0
  }, /* @__PURE__ */ y(Vf, I({}, n, {
    ref: t
  }))) : null;
});
Lf.propTypes = {
  altText(e) {
    return e.altText ? null : new Error(`Missing prop \`altText\` expected on \`${jf}\``);
  }
};
const Ff = "ToastClose", Vf = /* @__PURE__ */ O((e, t) => {
  const { __scopeToast: r, ...n } = e, o = Nf(Ff, r);
  return /* @__PURE__ */ y(bs, {
    asChild: !0
  }, /* @__PURE__ */ y(ee.button, I({
    type: "button"
  }, n, {
    ref: t,
    onClick: K(e.onClick, o.onClose)
  })));
}), bs = /* @__PURE__ */ O((e, t) => {
  const { __scopeToast: r, altText: n, ...o } = e;
  return /* @__PURE__ */ y(ee.div, I({
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": n || void 0
  }, o, {
    ref: t
  }));
});
function ms(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Uf(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", i = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (i) {
          const s = n.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...ms(n));
    }
  }), t;
}
function rr(e, t, r, { discrete: n }) {
  const o = r.originalEvent.currentTarget, i = new CustomEvent(e, {
    bubbles: !0,
    cancelable: !0,
    detail: r
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), n ? yn(o, i) : o.dispatchEvent(i);
}
const Lo = (e, t, r = 0) => {
  const n = Math.abs(e.x), o = Math.abs(e.y), i = n > o;
  return t === "left" || t === "right" ? i && n > r : !i && o > r;
};
function Bf(e = () => {
}) {
  const t = $e(e);
  Ye(() => {
    let r = 0, n = 0;
    return r = window.requestAnimationFrame(
      () => n = window.requestAnimationFrame(t)
    ), () => {
      window.cancelAnimationFrame(r), window.cancelAnimationFrame(n);
    };
  }, [
    t
  ]);
}
function Uf(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function zf(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); )
    t.push(r.currentNode);
  return t;
}
function Hr(e) {
  const t = document.activeElement;
  return e.some((r) => r === t ? !0 : (r.focus(), document.activeElement !== t));
}
const Kf = ps, Wf = _f, Hf = If, Gf = kf, hs = "Progress", Sr = 100, [Yf, o0] = ge(hs), [Xf, Zf] = Yf(hs), gs = /* @__PURE__ */ O((e, t) => {
  const { __scopeProgress: r, value: n, max: o, getValueLabel: i = Qf, ...s } = e, a = bn(o) ? o : Sr, c = $s(n, a) ? n : null, l = pr(c) ? i(c, a) : void 0;
  return /* @__PURE__ */ y(Xf, {
    scope: r,
    value: c,
    max: a
  }, /* @__PURE__ */ y(ee.div, I({
    "aria-valuemax": a,
    "aria-valuemin": 0,
    "aria-valuenow": pr(c) ? c : void 0,
    "aria-valuetext": l,
    role: "progressbar",
    "data-state": xs(c, a),
    "data-value": c ?? void 0,
    "data-max": a
  }, s, {
    ref: t
  })));
});
gs.propTypes = {
  max(e, t, r) {
    const n = e[t], o = String(n);
    return n && !bn(n) ? new Error(ep(o, r)) : null;
  },
  value(e, t, r) {
    const n = e[t], o = String(n), i = bn(e.max) ? e.max : Sr;
    return n != null && !$s(n, i) ? new Error(tp(o, r)) : null;
  }
};
const qf = "ProgressIndicator", Jf = /* @__PURE__ */ O((e, t) => {
  var r;
  const { __scopeProgress: n, ...o } = e, i = Zf(qf, n);
  return /* @__PURE__ */ y(ee.div, I({
    "data-state": xs(i.value, i.max),
    "data-value": (r = i.value) !== null && r !== void 0 ? r : void 0,
    "data-max": i.max
  }, o, {
    ref: t
  }));
});
function Qf(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function xs(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function pr(e) {
  return typeof e == "number";
}
function bn(e) {
  return pr(e) && !isNaN(e) && e > 0;
}
function $s(e, t) {
  return pr(e) && !isNaN(e) && e <= t && e >= 0;
}
function ep(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Sr}\`.`;
}
function tp(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Sr} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const rp = gs, np = Jf, op = ye(
  "bg-interactive-plain rounded-level-2 overflow-hidden shadow-xs",
  {
    variants: {
      size: {
        small: "h-2",
        medium: "h-4",
        large: "h-8"
      }
    },
    defaultVariants: {
      size: "medium"
    }
  }
), ip = ye("h-full w-full", {
  variants: {
    noAnimation: {
      false: "ease-[cubic-bezier(0.65,0,0.35,1)] transition-transform duration-[660ms] motion-reduce:transition-none",
      true: "transition-none"
    },
    variant: {
      highlight: "bg-interactive-highlight",
      primary: "bg-interactive-primary",
      success: "bg-interactive-success",
      critical: "bg-interactive-critical"
    }
  },
  defaultVariants: {
    variant: "highlight",
    noAnimation: !1
  }
}), ws = ({
  variant: e = "highlight",
  size: t = "medium",
  accessibilityLabel: r,
  value: n,
  max: o,
  className: i,
  noAnimation: s,
  ...a
}) => {
  const c = op({ size: t }), l = ip({
    variant: e,
    noAnimation: s
  }), u = 100 - n / o * 100;
  return /* @__PURE__ */ m.jsx(
    rp,
    {
      max: o,
      className: B(c, i),
      style: {
        // Recommended by radix-ui example
        // https://www.radix-ui.com/primitives/docs/components/progress
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: "translateZ(0)"
      },
      value: n,
      "aria-label": r,
      ...a,
      children: /* @__PURE__ */ m.jsx(
        np,
        {
          className: B(l),
          style: { transform: `translateX(-${u}%)` }
        }
      )
    }
  );
};
ws.displayName = "ProgressBar";
const sp = ({
  action: e,
  className: t,
  critical: r,
  duration: n = 3e3,
  message: o,
  onAction: i,
  onClose: s,
  ...a
}) => {
  const [c, l] = X(!1), [u, d] = X(!1), [p, f] = X(0), [b, v] = X(!0), g = k(0), x = k(0), $ = k(), w = 1e3 / 60, C = 1 / 0, P = ie(() => {
    const z = (/* @__PURE__ */ new Date()).getTime() - x.current;
    f((N) => N + z), x.current = (/* @__PURE__ */ new Date()).getTime();
  }, []), T = ie((z) => {
    window.clearInterval(g.current), $.current = z, d(!0), v(!1);
  }, []), _ = ie(() => {
    window.clearInterval(g.current);
    const z = (/* @__PURE__ */ new Date()).getTime() - x.current;
    z <= w && f((N) => N + z);
  }, [w]), R = ie(() => {
    x.current = (/* @__PURE__ */ new Date()).getTime(), g.current = window.setInterval(P, w);
  }, [P, w]), D = ie(() => {
    T(i);
  }, [i, T]), U = ie(
    (z) => {
      z || T(s);
    },
    [s, T]
  );
  return G(() => {
    const z = window.setTimeout(() => l(!0), 600);
    return () => window.clearTimeout(z);
  }, []), G(() => {
    if (!u)
      return;
    const z = window.setTimeout(() => {
      var N;
      return (N = $.current) == null ? void 0 : N.call($);
    }, 600);
    return () => window.clearTimeout(z);
  }, [u]), G(() => {
    if (c)
      return x.current = (/* @__PURE__ */ new Date()).getTime(), g.current = window.setInterval(P, w), () => window.clearInterval(g.current);
  }, [P, c, w]), G(() => {
    p >= n && !u && T(s);
  }, [n, p, u, s, T]), /* @__PURE__ */ m.jsx(
    Hf,
    {
      className: B(
        "relative rounded-level-2 bg-surface shadow-2xl focus-visible:outline focus-visible:outline-1 focus-visible:outline-focus focus-visible:ring-1 focus-visible:ring-focus focus-visible:ring-offset-1",
        r && "bg-interactive-critical",
        "data-[state=closed]:animate-[toastOut_0.6s_cubic-bezier(1,-0.01,0.41,1.39)] data-[state=open]:animate-[toastIn_0.6s_cubic-bezier(0.86,0.13,0.29,1.34)]",
        t
      ),
      duration: C,
      onOpenChange: U,
      onPause: _,
      onResume: R,
      open: b,
      ...a,
      children: /* @__PURE__ */ m.jsxs(Gf, { className: "flex items-center gap-2 px-3 py-2 md:gap-4 md:px-4 md:py-3", children: [
        r && /* @__PURE__ */ m.jsx(Q.error, { className: "h-5 w-5 text-on-interactive" }),
        /* @__PURE__ */ m.jsx("span", { className: B("text-sm text", r && "text-on-interactive"), children: o }),
        e && /* @__PURE__ */ m.jsx(
          os,
          {
            variant: r ? "critical" : "default",
            className: B(
              "underline-offset-2",
              r && "text-on-interactive hover:text-on-interactive active:text-on-interactive"
            ),
            onClick: D,
            style: { textUnderlinePosition: "from-font" },
            as: "button",
            children: e
          }
        ),
        s && /* @__PURE__ */ m.jsx(
          st,
          {
            variant: r ? "critical" : "default",
            accessibilityLabel: "Close toast",
            onClick: () => U(!1),
            children: /* @__PURE__ */ m.jsx(
              Q.close,
              {
                className: B(
                  "h-5 w-5 text-icon",
                  r && "text-on-interactive"
                )
              }
            )
          }
        ),
        /* @__PURE__ */ m.jsx(
          ws,
          {
            accessibilityLabel: "close automatically",
            max: n,
            value: p < n ? p : n,
            className: "absolute bottom-0 left-0 h-1 w-full rounded-t-none",
            size: "small",
            variant: r ? "critical" : "primary",
            noAnimation: !0
          }
        )
      ] })
    }
  );
}, ap = ye(
  "inline-flex justify-center rounded-interactive-elements-default bg-surface-neutral items-center gap-1",
  {
    variants: {
      size: {
        small: "",
        medium: ""
      }
    },
    defaultVariants: {
      size: "medium"
    }
  }
), cp = ye(
  "uikit-hide-number-spin-controls rounded-interactive-elements-default inline-flex justify-center items-center border border-solid border-default bg-interactive-plain text-xs font-semibold font-display text text-center hover:border-hovered hover:bg-interactive-plain-hovered active:border-pressed active:bg-interactive-plain-pressed disabled:border-disabled disabled:bg-surface-disabled disabled:text-disabled enabled:focus-visible:outline-focus focus-visible:outline-1 enabled:focus-visible:outline enabled:focus-visible:ring-focus enabled:focus-visible:ring-1 enabled:focus-visible:ring-offset-1",
  {
    variants: {
      size: {
        small: "py-0.5 px-[3px] h-5 w-10",
        medium: "py-1 px-[7px] h-5 w-12"
      }
    },
    defaultVariants: {
      size: "medium"
    }
  }
), ys = O(
  ({ className: e, size: t = "medium", onChange: r, ...n }, o) => {
    const i = (s) => {
      const a = Number.parseInt(s.target.value);
      a < n.min || a > n.max || r == null || r(a);
    };
    return /* @__PURE__ */ m.jsx(
      "input",
      {
        type: "number",
        ref: o,
        className: B(cp({ size: t }), e),
        onChange: i,
        ...n
      }
    );
  }
);
ys.displayName = "StepperInput";
const lp = O(
  ({
    className: e,
    disabled: t,
    max: r = 9999,
    min: n = 0,
    size: o = "medium",
    value: i,
    onChange: s,
    ...a
  }, c) => {
    const { increment: l, decrement: u, isIncrementDisabled: d, isDecrementDisabled: p } = rs({
      value: i,
      min: n,
      max: r,
      onChange: s
    }), f = d || t, b = p || t;
    return /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: B(ap({ size: o }), e),
        ref: c,
        ...a,
        children: [
          /* @__PURE__ */ m.jsx(
            He,
            {
              id: "stepper-subtract",
              variant: "primary",
              size: o,
              icon: /* @__PURE__ */ m.jsx(Q.subtract, {}),
              disabled: b,
              ...b && { "aria-disabled": !0 },
              className: B(
                "min-w-0",
                o === "small" && "p-1",
                o === "medium" && "p-2"
              ),
              accessibilityLabel: "Decrement value",
              onClick: u
            }
          ),
          /* @__PURE__ */ m.jsx(
            ys,
            {
              id: "stepper-input",
              value: i,
              max: r,
              min: n,
              size: o,
              disabled: t,
              ...t && { "aria-disabled": !0 },
              onChange: s
            }
          ),
          /* @__PURE__ */ m.jsx(
            He,
            {
              id: "stepper-add",
              variant: "primary",
              size: o,
              icon: /* @__PURE__ */ m.jsx(Q.add, {}),
              disabled: f,
              ...f && { "aria-disabled": !0 },
              className: B(
                "min-w-0",
                o === "small" && "p-1",
                o === "medium" && "p-2"
              ),
              accessibilityLabel: "Increment value",
              onClick: l
            }
          )
        ]
      }
    );
  }
);
lp.displayName = "Stepper";
const Cs = "Radio", [dp, Es] = ge(Cs), [up, fp] = dp(Cs), pp = /* @__PURE__ */ O((e, t) => {
  const { __scopeRadio: r, name: n, checked: o = !1, required: i, disabled: s, value: a = "on", onCheck: c, ...l } = e, [u, d] = X(null), p = se(
    t,
    (v) => d(v)
  ), f = k(!1), b = u ? !!u.closest("form") : !0;
  return /* @__PURE__ */ y(up, {
    scope: r,
    checked: o,
    disabled: s
  }, /* @__PURE__ */ y(ee.button, I({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": Ps(o),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: a
  }, l, {
    ref: p,
    onClick: K(e.onClick, (v) => {
      o || c == null || c(), b && (f.current = v.isPropagationStopped(), f.current || v.stopPropagation());
    })
  })), b && /* @__PURE__ */ y(mp, {
    control: u,
    bubbles: !f.current,
    name: n,
    value: a,
    checked: o,
    required: i,
    disabled: s,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), vp = "RadioIndicator", bp = /* @__PURE__ */ O((e, t) => {
  const { __scopeRadio: r, forceMount: n, ...o } = e, i = fp(vp, r);
  return /* @__PURE__ */ y(Se, {
    present: n || i.checked
  }, /* @__PURE__ */ y(ee.span, I({
    "data-state": Ps(i.checked),
    "data-disabled": i.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), mp = (e) => {
  const { control: t, checked: r, bubbles: n = !0, ...o } = e, i = k(null), s = Un(r), a = xr(t);
  return G(() => {
    const c = i.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== r && d) {
      const p = new Event("click", {
        bubbles: n
      });
      d.call(c, r), c.dispatchEvent(p);
    }
  }, [
    s,
    r,
    n
  ]), /* @__PURE__ */ y("input", I({
    type: "radio",
    "aria-hidden": !0,
    defaultChecked: r
  }, o, {
    tabIndex: -1,
    ref: i,
    style: {
      ...e.style,
      ...a,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function Ps(e) {
  return e ? "checked" : "unchecked";
}
const hp = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], _s = "RadioGroup", [gp, i0] = ge(_s, [
  yr,
  Es
]), Ss = yr(), Rs = Es(), [xp, $p] = gp(_s), wp = /* @__PURE__ */ O((e, t) => {
  const { __scopeRadioGroup: r, name: n, defaultValue: o, value: i, required: s = !1, disabled: a = !1, orientation: c, dir: l, loop: u = !0, onValueChange: d, ...p } = e, f = Ss(r), b = Bt(l), [v, g] = Te({
    prop: i,
    defaultProp: o,
    onChange: d
  });
  return /* @__PURE__ */ y(xp, {
    scope: r,
    name: n,
    required: s,
    disabled: a,
    value: v,
    onValueChange: g
  }, /* @__PURE__ */ y(Ni, I({
    asChild: !0
  }, f, {
    orientation: c,
    dir: b,
    loop: u
  }), /* @__PURE__ */ y(ee.div, I({
    role: "radiogroup",
    "aria-required": s,
    "aria-orientation": c,
    "data-disabled": a ? "" : void 0,
    dir: b
  }, p, {
    ref: t
  }))));
}), yp = "RadioGroupItem", Cp = /* @__PURE__ */ O((e, t) => {
  const { __scopeRadioGroup: r, disabled: n, ...o } = e, i = $p(yp, r), s = i.disabled || n, a = Ss(r), c = Rs(r), l = k(null), u = se(t, l), d = i.value === o.value, p = k(!1);
  return G(() => {
    const f = (v) => {
      hp.includes(v.key) && (p.current = !0);
    }, b = () => p.current = !1;
    return document.addEventListener("keydown", f), document.addEventListener("keyup", b), () => {
      document.removeEventListener("keydown", f), document.removeEventListener("keyup", b);
    };
  }, []), /* @__PURE__ */ y(Di, I({
    asChild: !0
  }, a, {
    focusable: !s,
    active: d
  }), /* @__PURE__ */ y(pp, I({
    disabled: s,
    required: i.required,
    checked: d
  }, c, o, {
    name: i.name,
    ref: u,
    onCheck: () => i.onValueChange(o.value),
    onKeyDown: K((f) => {
      f.key === "Enter" && f.preventDefault();
    }),
    onFocus: K(o.onFocus, () => {
      var f;
      p.current && ((f = l.current) === null || f === void 0 || f.click());
    })
  })));
}), Ep = /* @__PURE__ */ O((e, t) => {
  const { __scopeRadioGroup: r, ...n } = e, o = Rs(r);
  return /* @__PURE__ */ y(bp, I({}, o, n, {
    ref: t
  }));
}), Pp = wp, _p = Cp, Sp = Ep, Ts = ({
  id: e,
  disabled: t,
  hint: r,
  label: n,
  ...o
}) => {
  const i = Ft(), s = e || i;
  return /* @__PURE__ */ m.jsxs("div", { className: "inline-flex flex-col items-start", children: [
    /* @__PURE__ */ m.jsxs(
      _p,
      {
        id: s,
        className: "group peer inline-flex items-center gap-2 py-1 focus-visible:outline-none focus-visible:ring-0",
        disabled: t,
        "aria-disabled": t,
        ...o,
        children: [
          /* @__PURE__ */ m.jsx(
            Sp,
            {
              className: "flex h-5 w-5 items-center justify-center rounded-full border-2 border-default bg-interactive-plain after:block after:h-[10px] after:w-[10px] after:rounded-full after:content-[''] group-hover:border-hovered group-hover:bg-interactive-plain-hovered group-focus-visible:outline group-focus-visible:outline-1 group-focus-visible:outline-focus group-focus-visible:ring-1 group-focus-visible:ring-focus group-focus-visible:ring-offset-1 group-disabled:border-disabled group-disabled:bg-surface-disabled data-[state=checked]:border-interactive-primary data-[state=checked]:after:bg-interactive-primary group-hover:data-[state=checked]:after:bg-interactive-primary-hovered group-enabled:group-hover:data-[state=checked]:border-interactive-primary-hovered group-disabled:data-[state=checked]:border-[5px] group-disabled:data-[state=checked]:after:hidden md:m-[1px] md:h-[18px] md:w-[18px] md:after:h-[8px] md:after:w-[8px]",
              forceMount: !0
            }
          ),
          /* @__PURE__ */ m.jsx(
            "label",
            {
              htmlFor: s,
              className: "text-sm text group-enabled:cursor-pointer group-disabled:text-disabled",
              "aria-disabled": t,
              children: n
            }
          )
        ]
      }
    ),
    r && /* @__PURE__ */ m.jsx(
      "p",
      {
        className: "flex items-start ps-7 text-sm text-subdued peer-disabled:text-disabled",
        "aria-disabled": t,
        children: r
      }
    )
  ] });
};
Ts.displayName = "RadioGroupItem";
const Rp = ({
  className: e,
  items: t,
  orientation: r = "vertical",
  onChange: n,
  ...o
}) => /* @__PURE__ */ m.jsx(
  Pp,
  {
    orientation: r,
    onValueChange: n,
    ...o,
    className: B(
      "flex flex-col",
      r && r === "horizontal" && "flex-row gap-6",
      e
    ),
    children: t == null ? void 0 : t.map((i, s) => /* @__PURE__ */ m.jsx(Ts, { ...i }, s))
  }
);
Rp.displayName = "RadioGroup";
function s0({ selected: e, locales: t, onSelect: r }) {
  const n = new Intl.Locale(e), [o, i] = X(!1), s = /* @__PURE__ */ m.jsx(st, { accessibilityLabel: "", active: o, children: /* @__PURE__ */ m.jsxs("span", { className: "flex items-center justify-center gap-2 pl-0.5 pr-1", children: [
    /* @__PURE__ */ m.jsx(Q.language, { className: "h-5 py-0.5" }),
    /* @__PURE__ */ m.jsx("span", { className: "font-mono text-sm font-medium uppercase", children: n.language })
  ] }) }), a = Fe(() => {
    const c = new Intl.DisplayNames([e], {
      type: "language"
    });
    return t.map((l) => {
      const { language: u } = new Intl.Locale(l), d = e === l;
      return {
        active: d,
        sideHelpText: /* @__PURE__ */ m.jsx("span", { className: "uppercase", children: u }),
        bottomHelpText: !d && new Intl.DisplayNames([l], {
          type: "language"
        }).of(l),
        suffixIcon: d && /* @__PURE__ */ m.jsx(Q.tick, { className: "text-interactive-primary" }),
        children: /* @__PURE__ */ m.jsx("span", { children: c.of(l) }),
        onClick: () => r == null ? void 0 : r(l)
      };
    });
  }, [e, t, r]);
  return /* @__PURE__ */ m.jsx(Qi, { activator: s, items: a, onOpenChange: i });
}
function As(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
const Os = [
  "PageUp",
  "PageDown"
], Is = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Ms = {
  "from-left": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowLeft"
  ],
  "from-right": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowRight"
  ],
  "from-bottom": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowLeft"
  ],
  "from-top": [
    "Home",
    "PageDown",
    "ArrowUp",
    "ArrowLeft"
  ]
}, Wt = "Slider", [mn, Tp, Ap] = Vt(Wt), [Ns, a0] = ge(Wt, [
  Ap
]), [Op, Rr] = Ns(Wt), Ip = /* @__PURE__ */ O((e, t) => {
  const { name: r, min: n = 0, max: o = 100, step: i = 1, orientation: s = "horizontal", disabled: a = !1, minStepsBetweenThumbs: c = 0, defaultValue: l = [
    n
  ], value: u, onValueChange: d = () => {
  }, onValueCommit: p = () => {
  }, inverted: f = !1, ...b } = e, [v, g] = X(null), x = se(
    t,
    (E) => g(E)
  ), $ = k(/* @__PURE__ */ new Set()), w = k(0), C = s === "horizontal", P = v ? !!v.closest("form") : !0, T = C ? Mp : Np, [_ = [], R] = Te({
    prop: u,
    defaultProp: l,
    onChange: (E) => {
      var M;
      (M = [
        ...$.current
      ][w.current]) === null || M === void 0 || M.focus(), d(E);
    }
  }), D = k(_);
  function U(E) {
    const M = zp(_, E);
    W(E, M);
  }
  function z(E) {
    W(E, w.current);
  }
  function N() {
    const E = D.current[w.current];
    _[w.current] !== E && p(_);
  }
  function W(E, M, { commit: F } = {
    commit: !1
  }) {
    const H = Gp(i), V = Yp(Math.round((E - n) / i) * i + n, H), L = As(V, [
      n,
      o
    ]);
    R((te = []) => {
      const J = Bp(te, L, M);
      if (Hp(J, c * i)) {
        w.current = J.indexOf(L);
        const le = String(J) !== String(te);
        return le && F && p(J), le ? J : te;
      } else
        return te;
    });
  }
  return /* @__PURE__ */ y(Op, {
    scope: e.__scopeSlider,
    disabled: a,
    min: n,
    max: o,
    valueIndexToChangeRef: w,
    thumbs: $.current,
    values: _,
    orientation: s
  }, /* @__PURE__ */ y(mn.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ y(mn.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ y(T, I({
    "aria-disabled": a,
    "data-disabled": a ? "" : void 0
  }, b, {
    ref: x,
    onPointerDown: K(b.onPointerDown, () => {
      a || (D.current = _);
    }),
    min: n,
    max: o,
    inverted: f,
    onSlideStart: a ? void 0 : U,
    onSlideMove: a ? void 0 : z,
    onSlideEnd: a ? void 0 : N,
    onHomeKeyDown: () => !a && W(n, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !a && W(o, _.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: E, direction: M }) => {
      if (!a) {
        const V = Os.includes(E.key) || E.shiftKey && Is.includes(E.key) ? 10 : 1, L = w.current, te = _[L], J = i * V * M;
        W(te + J, L, {
          commit: !0
        });
      }
    }
  })))), P && _.map(
    (E, M) => /* @__PURE__ */ y(Vp, {
      key: M,
      name: r ? r + (_.length > 1 ? "[]" : "") : void 0,
      value: E
    })
  ));
}), [Ds, ks] = Ns(Wt, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), Mp = /* @__PURE__ */ O((e, t) => {
  const { min: r, max: n, dir: o, inverted: i, onSlideStart: s, onSlideMove: a, onSlideEnd: c, onStepKeyDown: l, ...u } = e, [d, p] = X(null), f = se(
    t,
    (w) => p(w)
  ), b = k(), v = Bt(o), g = v === "ltr", x = g && !i || !g && i;
  function $(w) {
    const C = b.current || d.getBoundingClientRect(), P = [
      0,
      C.width
    ], _ = Wn(P, x ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return b.current = C, _(w - C.left);
  }
  return /* @__PURE__ */ y(Ds, {
    scope: e.__scopeSlider,
    startEdge: x ? "left" : "right",
    endEdge: x ? "right" : "left",
    direction: x ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ y(js, I({
    dir: v,
    "data-orientation": "horizontal"
  }, u, {
    ref: f,
    style: {
      ...u.style,
      "--radix-slider-thumb-transform": "translateX(-50%)"
    },
    onSlideStart: (w) => {
      const C = $(w.clientX);
      s == null || s(C);
    },
    onSlideMove: (w) => {
      const C = $(w.clientX);
      a == null || a(C);
    },
    onSlideEnd: () => {
      b.current = void 0, c == null || c();
    },
    onStepKeyDown: (w) => {
      const P = Ms[x ? "from-left" : "from-right"].includes(w.key);
      l == null || l({
        event: w,
        direction: P ? -1 : 1
      });
    }
  })));
}), Np = /* @__PURE__ */ O((e, t) => {
  const { min: r, max: n, inverted: o, onSlideStart: i, onSlideMove: s, onSlideEnd: a, onStepKeyDown: c, ...l } = e, u = k(null), d = se(t, u), p = k(), f = !o;
  function b(v) {
    const g = p.current || u.current.getBoundingClientRect(), x = [
      0,
      g.height
    ], w = Wn(x, f ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return p.current = g, w(v - g.top);
  }
  return /* @__PURE__ */ y(Ds, {
    scope: e.__scopeSlider,
    startEdge: f ? "bottom" : "top",
    endEdge: f ? "top" : "bottom",
    size: "height",
    direction: f ? 1 : -1
  }, /* @__PURE__ */ y(js, I({
    "data-orientation": "vertical"
  }, l, {
    ref: d,
    style: {
      ...l.style,
      "--radix-slider-thumb-transform": "translateY(50%)"
    },
    onSlideStart: (v) => {
      const g = b(v.clientY);
      i == null || i(g);
    },
    onSlideMove: (v) => {
      const g = b(v.clientY);
      s == null || s(g);
    },
    onSlideEnd: () => {
      p.current = void 0, a == null || a();
    },
    onStepKeyDown: (v) => {
      const x = Ms[f ? "from-bottom" : "from-top"].includes(v.key);
      c == null || c({
        event: v,
        direction: x ? -1 : 1
      });
    }
  })));
}), js = /* @__PURE__ */ O((e, t) => {
  const { __scopeSlider: r, onSlideStart: n, onSlideMove: o, onSlideEnd: i, onHomeKeyDown: s, onEndKeyDown: a, onStepKeyDown: c, ...l } = e, u = Rr(Wt, r);
  return /* @__PURE__ */ y(ee.span, I({}, l, {
    ref: t,
    onKeyDown: K(e.onKeyDown, (d) => {
      d.key === "Home" ? (s(d), d.preventDefault()) : d.key === "End" ? (a(d), d.preventDefault()) : Os.concat(Is).includes(d.key) && (c(d), d.preventDefault());
    }),
    onPointerDown: K(e.onPointerDown, (d) => {
      const p = d.target;
      p.setPointerCapture(d.pointerId), d.preventDefault(), u.thumbs.has(p) ? p.focus() : n(d);
    }),
    onPointerMove: K(e.onPointerMove, (d) => {
      d.target.hasPointerCapture(d.pointerId) && o(d);
    }),
    onPointerUp: K(e.onPointerUp, (d) => {
      const p = d.target;
      p.hasPointerCapture(d.pointerId) && (p.releasePointerCapture(d.pointerId), i(d));
    })
  }));
}), Dp = "SliderTrack", kp = /* @__PURE__ */ O((e, t) => {
  const { __scopeSlider: r, ...n } = e, o = Rr(Dp, r);
  return /* @__PURE__ */ y(ee.span, I({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, n, {
    ref: t
  }));
}), Fo = "SliderRange", jp = /* @__PURE__ */ O((e, t) => {
  const { __scopeSlider: r, ...n } = e, o = Rr(Fo, r), i = ks(Fo, r), s = k(null), a = se(t, s), c = o.values.length, l = o.values.map(
    (p) => Ls(p, o.min, o.max)
  ), u = c > 1 ? Math.min(...l) : 0, d = 100 - Math.max(...l);
  return /* @__PURE__ */ y(ee.span, I({
    "data-orientation": o.orientation,
    "data-disabled": o.disabled ? "" : void 0
  }, n, {
    ref: a,
    style: {
      ...e.style,
      [i.startEdge]: u + "%",
      [i.endEdge]: d + "%"
    }
  }));
}), Vo = "SliderThumb", Lp = /* @__PURE__ */ O((e, t) => {
  const r = Tp(e.__scopeSlider), [n, o] = X(null), i = se(
    t,
    (a) => o(a)
  ), s = Fe(
    () => n ? r().findIndex(
      (a) => a.ref.current === n
    ) : -1,
    [
      r,
      n
    ]
  );
  return /* @__PURE__ */ y(Fp, I({}, e, {
    ref: i,
    index: s
  }));
}), Fp = /* @__PURE__ */ O((e, t) => {
  const { __scopeSlider: r, index: n, ...o } = e, i = Rr(Vo, r), s = ks(Vo, r), [a, c] = X(null), l = se(
    t,
    (g) => c(g)
  ), u = xr(a), d = i.values[n], p = d === void 0 ? 0 : Ls(d, i.min, i.max), f = Up(n, i.values.length), b = u == null ? void 0 : u[s.size], v = b ? Kp(b, p, s.direction) : 0;
  return G(() => {
    if (a)
      return i.thumbs.add(a), () => {
        i.thumbs.delete(a);
      };
  }, [
    a,
    i.thumbs
  ]), /* @__PURE__ */ y("span", {
    style: {
      transform: "var(--radix-slider-thumb-transform)",
      position: "absolute",
      [s.startEdge]: `calc(${p}% + ${v}px)`
    }
  }, /* @__PURE__ */ y(mn.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ y(ee.span, I({
    role: "slider",
    "aria-label": e["aria-label"] || f,
    "aria-valuemin": i.min,
    "aria-valuenow": d,
    "aria-valuemax": i.max,
    "aria-orientation": i.orientation,
    "data-orientation": i.orientation,
    "data-disabled": i.disabled ? "" : void 0,
    tabIndex: i.disabled ? void 0 : 0
  }, o, {
    ref: l,
    style: d === void 0 ? {
      display: "none"
    } : e.style,
    onFocus: K(e.onFocus, () => {
      i.valueIndexToChangeRef.current = n;
    })
  }))));
}), Vp = (e) => {
  const { value: t, ...r } = e, n = k(null), o = Un(t);
  return G(() => {
    const i = n.current, s = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(s, "value").set;
    if (o !== t && c) {
      const l = new Event("input", {
        bubbles: !0
      });
      c.call(i, t), i.dispatchEvent(l);
    }
  }, [
    o,
    t
  ]), /* @__PURE__ */ y("input", I({
    style: {
      display: "none"
    }
  }, r, {
    ref: n,
    defaultValue: t
  }));
};
function Bp(e = [], t, r) {
  const n = [
    ...e
  ];
  return n[r] = t, n.sort(
    (o, i) => o - i
  );
}
function Ls(e, t, r) {
  const i = 100 / (r - t) * (e - t);
  return As(i, [
    0,
    100
  ]);
}
function Up(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function zp(e, t) {
  if (e.length === 1)
    return 0;
  const r = e.map(
    (o) => Math.abs(o - t)
  ), n = Math.min(...r);
  return r.indexOf(n);
}
function Kp(e, t, r) {
  const n = e / 2, i = Wn([
    0,
    50
  ], [
    0,
    n
  ]);
  return (n - i(t) * r) * r;
}
function Wp(e) {
  return e.slice(0, -1).map(
    (t, r) => e[r + 1] - t
  );
}
function Hp(e, t) {
  if (t > 0) {
    const r = Wp(e);
    return Math.min(...r) >= t;
  }
  return !0;
}
function Wn(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function Gp(e) {
  return (String(e).split(".")[1] || "").length;
}
function Yp(e, t) {
  const r = Math.pow(10, t);
  return Math.round(e * r) / r;
}
const Xp = Ip, Zp = kp, qp = jp, Jp = Lp;
function Bo(e) {
  let t = e.activeElement;
  for (; ((r = t) == null || (r = r.shadowRoot) == null ? void 0 : r.activeElement) != null; ) {
    var r;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function hn(e, t) {
  if (!e || !t)
    return !1;
  const r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && on(r)) {
    let n = t;
    for (; n; ) {
      if (e === n)
        return !0;
      n = n.parentNode || n.host;
    }
  }
  return !1;
}
function Fs() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function Qp() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: r,
      version: n
    } = t;
    return r + "/" + n;
  }).join(" ") : navigator.userAgent;
}
function ev(e) {
  return !rv() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0;
}
function tv() {
  return /apple/i.test(navigator.vendor);
}
function rv() {
  const e = /android/i;
  return e.test(Fs()) || e.test(Qp());
}
function nv() {
  return Fs().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function Vs(e, t) {
  const r = ["mouse", "pen"];
  return t || r.push("", void 0), r.includes(e);
}
function Ot(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function ov(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const iv = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function sv(e) {
  return Pe(e) && e.matches(iv);
}
const av = S[/* @__PURE__ */ "useInsertionEffect".toString()], cv = av || ((e) => e());
function lv(e) {
  const t = S.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return cv(() => {
    t.current = e;
  }), S.useCallback(function() {
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...n);
  }, []);
}
var Je = typeof document < "u" ? $n : G;
let Gr = !1, dv = 0;
const Uo = () => "floating-ui-" + dv++;
function uv() {
  const [e, t] = S.useState(() => Gr ? Uo() : void 0);
  return Je(() => {
    e == null && t(Uo());
  }, []), S.useEffect(() => {
    Gr || (Gr = !0);
  }, []), e;
}
const fv = S[/* @__PURE__ */ "useId".toString()], pv = fv || uv;
function vv() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, r) {
      var n;
      (n = e.get(t)) == null || n.forEach((o) => o(r));
    },
    on(t, r) {
      e.set(t, [...e.get(t) || [], r]);
    },
    off(t, r) {
      var n;
      e.set(t, ((n = e.get(t)) == null ? void 0 : n.filter((o) => o !== r)) || []);
    }
  };
}
const bv = /* @__PURE__ */ S.createContext(null), mv = /* @__PURE__ */ S.createContext(null), Bs = () => {
  var e;
  return ((e = S.useContext(bv)) == null ? void 0 : e.id) || null;
}, Us = () => S.useContext(mv);
function zs(e) {
  return "data-floating-ui-" + e;
}
function ht(e) {
  const t = k(e);
  return Je(() => {
    t.current = e;
  }), t;
}
const zo = /* @__PURE__ */ zs("safe-polygon");
function Yr(e, t, r) {
  return r && !Vs(r) ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t];
}
function hv(e, t) {
  t === void 0 && (t = {});
  const {
    open: r,
    onOpenChange: n,
    dataRef: o,
    events: i,
    elements: {
      domReference: s,
      floating: a
    },
    refs: c
  } = e, {
    enabled: l = !0,
    delay: u = 0,
    handleClose: d = null,
    mouseOnly: p = !1,
    restMs: f = 0,
    move: b = !0
  } = t, v = Us(), g = Bs(), x = ht(d), $ = ht(u), w = S.useRef(), C = S.useRef(), P = S.useRef(), T = S.useRef(), _ = S.useRef(!0), R = S.useRef(!1), D = S.useRef(() => {
  }), U = S.useCallback(() => {
    var E;
    const M = (E = o.current.openEvent) == null ? void 0 : E.type;
    return (M == null ? void 0 : M.includes("mouse")) && M !== "mousedown";
  }, [o]);
  S.useEffect(() => {
    if (!l)
      return;
    function E(M) {
      let {
        open: F
      } = M;
      F || (clearTimeout(C.current), clearTimeout(T.current), _.current = !0);
    }
    return i.on("openchange", E), () => {
      i.off("openchange", E);
    };
  }, [l, i]), S.useEffect(() => {
    if (!l || !x.current || !r)
      return;
    function E(F) {
      U() && n(!1, F, "hover");
    }
    const M = Ot(a).documentElement;
    return M.addEventListener("mouseleave", E), () => {
      M.removeEventListener("mouseleave", E);
    };
  }, [a, r, n, l, x, o, U]);
  const z = S.useCallback(function(E, M, F) {
    M === void 0 && (M = !0), F === void 0 && (F = "hover");
    const H = Yr($.current, "close", w.current);
    H && !P.current ? (clearTimeout(C.current), C.current = setTimeout(() => n(!1, E, F), H)) : M && (clearTimeout(C.current), n(!1, E, F));
  }, [$, n]), N = S.useCallback(() => {
    D.current(), P.current = void 0;
  }, []), W = S.useCallback(() => {
    if (R.current) {
      const E = Ot(c.floating.current).body;
      E.style.pointerEvents = "", E.removeAttribute(zo), R.current = !1;
    }
  }, [c]);
  return S.useEffect(() => {
    if (!l)
      return;
    function E() {
      return o.current.openEvent ? ["click", "mousedown"].includes(o.current.openEvent.type) : !1;
    }
    function M(V) {
      if (clearTimeout(C.current), _.current = !1, p && !Vs(w.current) || f > 0 && Yr($.current, "open") === 0)
        return;
      const L = Yr($.current, "open", w.current);
      L ? C.current = setTimeout(() => {
        n(!0, V, "hover");
      }, L) : n(!0, V, "hover");
    }
    function F(V) {
      if (E())
        return;
      D.current();
      const L = Ot(a);
      if (clearTimeout(T.current), x.current) {
        r || clearTimeout(C.current), P.current = x.current({
          ...e,
          tree: v,
          x: V.clientX,
          y: V.clientY,
          onClose() {
            W(), N(), z(V, !0, "safe-polygon");
          }
        });
        const J = P.current;
        L.addEventListener("mousemove", J), D.current = () => {
          L.removeEventListener("mousemove", J);
        };
        return;
      }
      (w.current === "touch" ? !hn(a, V.relatedTarget) : !0) && z(V);
    }
    function H(V) {
      E() || x.current == null || x.current({
        ...e,
        tree: v,
        x: V.clientX,
        y: V.clientY,
        onClose() {
          W(), N(), z(V);
        }
      })(V);
    }
    if (pe(s)) {
      const V = s;
      return r && V.addEventListener("mouseleave", H), a == null || a.addEventListener("mouseleave", H), b && V.addEventListener("mousemove", M, {
        once: !0
      }), V.addEventListener("mouseenter", M), V.addEventListener("mouseleave", F), () => {
        r && V.removeEventListener("mouseleave", H), a == null || a.removeEventListener("mouseleave", H), b && V.removeEventListener("mousemove", M), V.removeEventListener("mouseenter", M), V.removeEventListener("mouseleave", F);
      };
    }
  }, [s, a, l, e, p, f, b, z, N, W, n, r, v, $, x, o]), Je(() => {
    var E;
    if (l && r && (E = x.current) != null && E.__options.blockPointerEvents && U()) {
      const F = Ot(a).body;
      if (F.setAttribute(zo, ""), F.style.pointerEvents = "none", R.current = !0, pe(s) && a) {
        var M;
        const H = s, V = v == null || (M = v.nodesRef.current.find((L) => L.id === g)) == null || (M = M.context) == null ? void 0 : M.elements.floating;
        return V && (V.style.pointerEvents = ""), H.style.pointerEvents = "auto", a.style.pointerEvents = "auto", () => {
          H.style.pointerEvents = "", a.style.pointerEvents = "";
        };
      }
    }
  }, [l, r, g, a, s, v, x, o, U]), Je(() => {
    r || (w.current = void 0, N(), W());
  }, [r, N, W]), S.useEffect(() => () => {
    N(), clearTimeout(C.current), clearTimeout(T.current), W();
  }, [l, s, N, W]), S.useMemo(() => {
    if (!l)
      return {};
    function E(M) {
      w.current = M.pointerType;
    }
    return {
      reference: {
        onPointerDown: E,
        onPointerEnter: E,
        onMouseMove(M) {
          r || f === 0 || (clearTimeout(T.current), T.current = setTimeout(() => {
            _.current || n(!0, M.nativeEvent, "hover");
          }, f));
        }
      },
      floating: {
        onMouseEnter() {
          clearTimeout(C.current);
        },
        onMouseLeave(M) {
          z(M.nativeEvent, !1);
        }
      }
    };
  }, [l, f, r, n, z]);
}
let gn;
process.env.NODE_ENV !== "production" && (gn = /* @__PURE__ */ new Set());
function gv(e) {
  var t;
  e === void 0 && (e = {});
  const {
    open: r = !1,
    onOpenChange: n,
    nodeId: o
  } = e;
  if (process.env.NODE_ENV !== "production") {
    var i;
    const R = "Floating UI: Cannot pass a virtual element to the `elements.reference` option, as it must be a real DOM element. Use `refs.setPositionReference` instead.";
    if ((i = e.elements) != null && i.reference && !pe(e.elements.reference)) {
      var s;
      if (!((s = gn) != null && s.has(R))) {
        var a;
        (a = gn) == null || a.add(R), console.error(R);
      }
    }
  }
  const [c, l] = S.useState(null), u = ((t = e.elements) == null ? void 0 : t.reference) || c, d = Ci(e), p = Us(), f = Bs() != null, b = lv((R, D, U) => {
    R && (g.current.openEvent = D), x.emit("openchange", {
      open: R,
      event: D,
      reason: U,
      nested: f
    }), n == null || n(R, D, U);
  }), v = S.useRef(null), g = S.useRef({}), x = S.useState(() => vv())[0], $ = pv(), w = S.useCallback((R) => {
    const D = pe(R) ? {
      getBoundingClientRect: () => R.getBoundingClientRect(),
      contextElement: R
    } : R;
    d.refs.setReference(D);
  }, [d.refs]), C = S.useCallback((R) => {
    (pe(R) || R === null) && (v.current = R, l(R)), (pe(d.refs.reference.current) || d.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    R !== null && !pe(R)) && d.refs.setReference(R);
  }, [d.refs]), P = S.useMemo(() => ({
    ...d.refs,
    setReference: C,
    setPositionReference: w,
    domReference: v
  }), [d.refs, C, w]), T = S.useMemo(() => ({
    ...d.elements,
    domReference: u
  }), [d.elements, u]), _ = S.useMemo(() => ({
    ...d,
    refs: P,
    elements: T,
    dataRef: g,
    nodeId: o,
    floatingId: $,
    events: x,
    open: r,
    onOpenChange: b
  }), [d, o, $, x, r, b, P, T]);
  return Je(() => {
    const R = p == null ? void 0 : p.nodesRef.current.find((D) => D.id === o);
    R && (R.context = _);
  }), S.useMemo(() => ({
    ...d,
    context: _,
    refs: P,
    elements: T
  }), [d, P, T, _]);
}
function xv(e, t) {
  t === void 0 && (t = {});
  const {
    open: r,
    onOpenChange: n,
    events: o,
    refs: i,
    elements: {
      floating: s,
      domReference: a
    }
  } = e, {
    enabled: c = !0,
    visibleOnly: l = !0
  } = t, u = S.useRef(!1), d = S.useRef(), p = S.useRef(!0);
  return S.useEffect(() => {
    if (!c)
      return;
    const f = xe(a);
    function b() {
      !r && Pe(a) && a === Bo(Ot(a)) && (u.current = !0);
    }
    function v() {
      p.current = !0;
    }
    return f.addEventListener("blur", b), f.addEventListener("keydown", v, !0), () => {
      f.removeEventListener("blur", b), f.removeEventListener("keydown", v, !0);
    };
  }, [s, a, r, c]), S.useEffect(() => {
    if (!c)
      return;
    function f(b) {
      let {
        reason: v
      } = b;
      (v === "reference-press" || v === "escape-key") && (u.current = !0);
    }
    return o.on("openchange", f), () => {
      o.off("openchange", f);
    };
  }, [o, c]), S.useEffect(() => () => {
    clearTimeout(d.current);
  }, []), S.useMemo(() => c ? {
    reference: {
      onPointerDown(f) {
        ev(f.nativeEvent) || (p.current = !1);
      },
      onMouseLeave() {
        u.current = !1;
      },
      onFocus(f) {
        if (u.current)
          return;
        const b = ov(f.nativeEvent);
        if (l && pe(b))
          try {
            if (tv() && nv())
              throw Error();
            if (!b.matches(":focus-visible"))
              return;
          } catch {
            if (!p.current && !sv(b))
              return;
          }
        n(!0, f.nativeEvent, "focus");
      },
      onBlur(f) {
        u.current = !1;
        const b = f.relatedTarget, v = pe(b) && b.hasAttribute(zs("focus-guard")) && b.getAttribute("data-type") === "outside";
        d.current = window.setTimeout(() => {
          const g = Bo(a ? a.ownerDocument : document);
          !b && g === a || hn(i.floating.current, b) || hn(a, b) || v || n(!1, f.nativeEvent, "focus");
        });
      }
    }
  } : {}, [c, l, a, i, n]);
}
function Xr(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  return {
    ...r === "floating" && {
      tabIndex: -1
    },
    ...e,
    ...t.map((o) => o ? o[r] : null).concat(e).reduce((o, i) => (i && Object.entries(i).forEach((s) => {
      let [a, c] = s;
      if (a.indexOf("on") === 0) {
        if (n.has(a) || n.set(a, []), typeof c == "function") {
          var l;
          (l = n.get(a)) == null || l.push(c), o[a] = function() {
            for (var u, d = arguments.length, p = new Array(d), f = 0; f < d; f++)
              p[f] = arguments[f];
            return (u = n.get(a)) == null ? void 0 : u.map((b) => b(...p)).find((b) => b !== void 0);
          };
        }
      } else
        o[a] = c;
    }), o), {})
  };
}
function $v(e) {
  e === void 0 && (e = []);
  const t = e, r = S.useCallback(
    (i) => Xr(i, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), n = S.useCallback(
    (i) => Xr(i, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), o = S.useCallback(
    (i) => Xr(i, e, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((i) => i == null ? void 0 : i.item)
  );
  return S.useMemo(() => ({
    getReferenceProps: r,
    getFloatingProps: n,
    getItemProps: o
  }), [r, n, o]);
}
const Ko = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (t, r) => (r ? "-" : "") + t.toLowerCase());
function mt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function wv(e, t) {
  const [r, n] = S.useState(e);
  return e && !r && n(!0), S.useEffect(() => {
    if (!e) {
      const o = setTimeout(() => n(!1), t);
      return () => clearTimeout(o);
    }
  }, [e, t]), r;
}
function yv(e, t) {
  t === void 0 && (t = {});
  const {
    open: r,
    elements: {
      floating: n
    }
  } = e, {
    duration: o = 250
  } = t, s = (typeof o == "number" ? o : o.close) || 0, [a, c] = S.useState(!1), [l, u] = S.useState("unmounted"), d = wv(r, s);
  return Je(() => {
    a && !d && u("unmounted");
  }, [a, d]), Je(() => {
    if (n)
      if (r) {
        u("initial");
        const p = requestAnimationFrame(() => {
          u("open");
        });
        return () => {
          cancelAnimationFrame(p);
        };
      } else
        c(!0), u("close");
  }, [r, n]), {
    isMounted: d,
    status: l
  };
}
function Cv(e, t) {
  t === void 0 && (t = {});
  const {
    initial: r = {
      opacity: 0
    },
    open: n,
    close: o,
    common: i,
    duration: s = 250
  } = t, a = e.placement, c = a.split("-")[0], l = S.useMemo(() => ({
    side: c,
    placement: a
  }), [c, a]), u = typeof s == "number", d = (u ? s : s.open) || 0, p = (u ? s : s.close) || 0, [f, b] = S.useState(() => ({
    ...mt(i, l),
    ...mt(r, l)
  })), {
    isMounted: v,
    status: g
  } = yv(e, {
    duration: s
  }), x = ht(r), $ = ht(n), w = ht(o), C = ht(i);
  return Je(() => {
    const P = mt(x.current, l), T = mt(w.current, l), _ = mt(C.current, l), R = mt($.current, l) || Object.keys(P).reduce((D, U) => (D[U] = "", D), {});
    if (g === "initial" && b((D) => ({
      transitionProperty: D.transitionProperty,
      ..._,
      ...P
    })), g === "open" && b({
      transitionProperty: Object.keys(R).map(Ko).join(","),
      transitionDuration: d + "ms",
      ..._,
      ...R
    }), g === "close") {
      const D = T || P;
      b({
        transitionProperty: Object.keys(D).map(Ko).join(","),
        transitionDuration: p + "ms",
        ..._,
        ...D
      });
    }
  }, [p, w, x, $, C, d, g, l]), {
    isMounted: v,
    styles: f
  };
}
const Ev = ({
  value: e,
  forceTooltipOpen: t,
  onOpenChange: r,
  ...n
}) => {
  const [o, i] = X(!1), [s, a] = X(!1), { refs: c, floatingStyles: l, context: u } = gv({
    transform: !1,
    onOpenChange: i,
    open: !0,
    placement: "top",
    middleware: [fi(), pi(s ? 10 : 6)],
    whileElementsMounted: wi
  }), d = hv(u, {
    delay: 0
  }), p = xv(u), { getReferenceProps: f, getFloatingProps: b } = $v([
    d,
    p
  ]);
  G(() => r(!!(o || s)), [o, s, r]);
  const { isMounted: v, styles: g } = Cv(u, {
    duration: 150,
    common: {
      transformOrigin: "center",
      transitionProperty: "opacity, top, bottom",
      animationTimingFunction: "ease-in-out"
    }
  });
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsx(
      Jp,
      {
        ref: c.setReference,
        ...f({
          onFocus: () => a(!0),
          onBlur: () => a(!1)
        }),
        className: "block h-4 w-4 rounded-[10px] bg-interactive-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-focus focus-visible:ring-1 focus-visible:ring-focus focus-visible:ring-offset-1 group-active:focus-visible:scale-[1.35] data-[disabled]:bg-interactive-disabled group-hover:[&:not([data-disabled])]:bg-interactive-primary-hovered group-active:[&:not([data-disabled])]:bg-interactive-primary",
        ...n
      }
    ),
    v && (o || t || s) && /* @__PURE__ */ m.jsx(
      "span",
      {
        role: "tooltip",
        className: B(
          "rounded-level-2 bg-surface px-2 py-1 text-sm text shadow-md"
        ),
        ref: c.setFloating,
        style: { ...l, ...g },
        ...b(),
        children: e
      }
    )
  ] });
}, Pv = Z.forwardRef(
  ({
    value: e,
    prefix: t,
    suffix: r,
    label: n,
    id: o,
    className: i,
    disabled: s,
    accessibilityLabel: a,
    onChange: c,
    onChangeCommit: l,
    defaultValue: u,
    ...d
  }, p) => {
    var P, T;
    const f = "text-sm", b = Ft(), [v, g] = X(!1), x = o || b, [$, w] = X(
      ((P = e || u) == null ? void 0 : P.map(() => ({
        tooltipOpen: !1
      }))) || []
    ), C = Fe(() => {
      var _;
      return !!((_ = $.filter(({ tooltipOpen: R }) => !!R)) != null && _.length);
    }, [$]);
    return /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: B("group flex flex-col gap-1", {
          "text-disabled": s
        }),
        children: [
          n && /* @__PURE__ */ m.jsx("label", { className: "text-sm", id: x, children: n }),
          /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2", children: [
            t && /* @__PURE__ */ m.jsx("span", { className: f, children: t }),
            /* @__PURE__ */ m.jsxs(
              Xp,
              {
                ...d,
                orientation: "horizontal",
                defaultValue: u,
                disabled: s,
                ref: p,
                className: B(
                  "relative flex w-full touch-none select-none items-center py-3",
                  { "pointer-events-none": s },
                  i
                ),
                onValueCommit: l,
                onValueChange: c,
                value: e,
                onMouseEnter: () => {
                  g(!0);
                },
                onMouseLeave: () => {
                  g(!1);
                },
                children: [
                  /* @__PURE__ */ m.jsx(Zp, { className: "relative grow rounded-full border-[2px] border-dashed border-surface-disabled data-[disabled]:border-solid", children: /* @__PURE__ */ m.jsx(qp, { className: "absolute ml-[-2px] mt-[-2px] h-full rounded-full border-[2px] border-interactive-primary data-[disabled]:border-disabled group-hover:[&:not([data-disabled])]:border-interactive-primary-hovered group-active:[&:not([data-disabled])]:border-interactive-primary" }) }),
                  (T = e || u) == null ? void 0 : T.map((_, R) => /* @__PURE__ */ m.jsx(
                    Ev,
                    {
                      "aria-labelledby": n && x || void 0,
                      "aria-label": a,
                      forceTooltipOpen: C || v,
                      onOpenChange: (D) => {
                        const U = [...$];
                        U != null && U[R] && U[R].tooltipOpen !== D && (U[R] = {
                          ...U[R],
                          tooltipOpen: D
                        }, w(U));
                      },
                      value: _
                    },
                    R
                  ))
                ]
              }
            ),
            r && /* @__PURE__ */ m.jsx("span", { className: f, children: r })
          ] })
        ]
      }
    );
  }
);
Pv.displayName = "Slider";
const _v = {
  theme: "meplato",
  mode: "light"
}, Sv = $t(_v), Rv = ({
  theme: e,
  mode: t,
  className: r,
  children: n
}) => {
  const [o, i] = X({
    theme: e,
    mode: t
  });
  return G(() => {
    i({ theme: e, mode: t });
  }, [e, t]), n ? /* @__PURE__ */ m.jsx(Sv.Provider, { value: o, children: /* @__PURE__ */ m.jsx(
    "div",
    {
      "data-theme": e,
      "data-mode": t,
      id: "uikit-theme",
      className: B("bg font-sans text", r),
      children: n
    }
  ) }) : null;
}, Hn = $t(void 0);
Hn.displayName = "uikit.Toast";
const Tv = ({ children: e }) => {
  const [t, r] = X({ message: "" }), [n, o] = X(!1), s = {
    create: ie(
      ({ action: a, onAction: c, onClose: l, ...u }) => {
        const d = () => {
          o(!1), c == null || c();
        }, p = () => {
          o(!1), l == null || l();
        };
        let f;
        a ? f = {
          ...u,
          onClose: p,
          action: a,
          onAction: d
        } : f = {
          ...u,
          onClose: p
        }, r(f), o(!0);
      },
      []
    )
  };
  return /* @__PURE__ */ m.jsxs(Kf, { children: [
    /* @__PURE__ */ m.jsxs(Hn.Provider, { value: s, children: [
      e,
      n && /* @__PURE__ */ m.jsx(sp, { ...t })
    ] }),
    /* @__PURE__ */ m.jsx(Wf, { className: "fixed bottom-[3.75rem] left-0 right-0 flex justify-center focus-visible:outline focus-visible:outline-1 focus-visible:outline-focus focus-visible:ring-1 focus-visible:ring-focus focus-visible:ring-offset-1" })
  ] });
}, c0 = ({ children: e, ...t }) => /* @__PURE__ */ m.jsx(Rv, { ...t, children: /* @__PURE__ */ m.jsx(Tv, { children: e }) }), Av = (e, t) => {
  if (e) {
    if (e === "add")
      return Q.plus;
    if (e === "remove")
      return Q.close;
    if (e === "disclosure") {
      if (t === "down")
        return Q.sort;
      if (t === "up")
        return Q.ascending;
    }
  }
}, Dt = O(
  ({ type: e, active: t, direction: r, disabled: n, onClick: o, children: i, ...s }, a) => {
    const c = Av(
      e,
      e === "disclosure" ? r : void 0
    );
    return e === "toggle" ? /* @__PURE__ */ m.jsx(
      "button",
      {
        className: B(
          "inline-flex items-start justify-start gap-1 rounded-level-negative-2 border border-default bg-surface px-4 py-1 hover:border-hovered hover:bg-surface-hovered active:border-pressed active:bg-surface-pressed disabled:border-disabled disabled:bg-surface-disabled disabled:text-disabled sm:px-2 sm:py-0.5",
          "text-sm font-medium leading-tight text",
          "enabled:focus-visible:outline enabled:focus-visible:outline-1 enabled:focus-visible:outline-focus enabled:focus-visible:ring-1 enabled:focus-visible:ring-focus enabled:focus-visible:ring-offset-1",
          {
            "bg-interactive-primary text-on-interactive hover:border-subdued hover:bg-interactive-primary-hovered focus-visible:bg-interactive-primary-pressed active:border-pressed active:bg-interactive-primary-pressed": t
          }
        ),
        disabled: n,
        onClick: o,
        ref: a,
        ...s,
        children: i
      }
    ) : /* @__PURE__ */ m.jsx("div", { className: "relative inline-flex items-center justify-center", children: /* @__PURE__ */ m.jsx("div", { className: "inline-flex items-center justify-start rounded-level-negative-2 bg-surface", children: /* @__PURE__ */ m.jsx(
      "div",
      {
        className: B(
          "z-0 inline-flex items-center justify-start gap-1 rounded-level-negative-2 outline-dashed outline-1  outline-offset-0 outline-outline-default",
          {
            "hover:outline-outline-hovered active:outline-outline-pressed [&:has(button:first-child:focus-visible)]:[&:first-child]:outline-outline-pressed": e !== "remove"
          },
          {
            "cursor-default py-1 pl-3 pr-2 sm:py-0.5 sm:pl-2 sm:pr-1": e === "remove"
          }
        ),
        children: e === "remove" ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
          /* @__PURE__ */ m.jsx("span", { className: "text-sm font-medium leading-tight text", children: i }),
          /* @__PURE__ */ m.jsx("span", { className: "z-20 inline-flex items-center", children: /* @__PURE__ */ m.jsx(
            st,
            {
              accessibilityLabel: "remove icon",
              disabled: n,
              onClick: o,
              children: c && /* @__PURE__ */ m.jsx(c, { className: "h-5 w-5 text-icon" })
            }
          ) })
        ] }) : /* @__PURE__ */ m.jsxs(
          "button",
          {
            className: B(
              "inline-flex items-center justify-start gap-1 text-sm font-medium leading-tight text focus:outline-none",
              "rounded-level-negative-2 hover:bg-surface-hovered  active:bg-surface-pressed",
              c ? "py-1 pl-3 pr-2 sm:py-0.5 sm:pl-2 sm:pr-1" : "h-6 px-2",
              "enabled:focus-visible:outline enabled:focus-visible:outline-2 enabled:focus-visible:outline-offset-0  enabled:focus-visible:outline-focus enabled:focus-visible:ring-2 enabled:focus-visible:ring-focus enabled:focus-visible:ring-offset-1"
            ),
            onClick: o,
            ref: a,
            ...s,
            children: [
              i,
              c && /* @__PURE__ */ m.jsx(c, { className: "h-5 w-5 text-icon" })
            ]
          }
        )
      }
    ) }) });
  }
);
Dt.displayName = "FilterBadge";
const Ks = "Popover", [Ws, l0] = ge(Ks, [
  $r
]), Gn = $r(), [Ov, Pt] = Ws(Ks), Iv = (e) => {
  const { __scopePopover: t, children: r, open: n, defaultOpen: o, onOpenChange: i, modal: s = !1 } = e, a = Gn(t), c = k(null), [l, u] = X(!1), [d = !1, p] = Te({
    prop: n,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ y(Ti, a, /* @__PURE__ */ y(Ov, {
    scope: t,
    contentId: Le(),
    triggerRef: c,
    open: d,
    onOpenChange: p,
    onOpenToggle: ie(
      () => p(
        (f) => !f
      ),
      [
        p
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: ie(
      () => u(!0),
      []
    ),
    onCustomAnchorRemove: ie(
      () => u(!1),
      []
    ),
    modal: s
  }, r));
}, Mv = "PopoverTrigger", Nv = /* @__PURE__ */ O((e, t) => {
  const { __scopePopover: r, ...n } = e, o = Pt(Mv, r), i = Gn(r), s = se(t, o.triggerRef), a = /* @__PURE__ */ y(ee.button, I({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Ys(o.open)
  }, n, {
    ref: s,
    onClick: K(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? a : /* @__PURE__ */ y(Ai, I({
    asChild: !0
  }, i), a);
}), Hs = "PopoverPortal", [Dv, kv] = Ws(Hs, {
  forceMount: void 0
}), jv = (e) => {
  const { __scopePopover: t, forceMount: r, children: n, container: o } = e, i = Pt(Hs, t);
  return /* @__PURE__ */ y(Dv, {
    scope: t,
    forceMount: r
  }, /* @__PURE__ */ y(Se, {
    present: r || i.open
  }, /* @__PURE__ */ y(wr, {
    asChild: !0,
    container: o
  }, n)));
}, kt = "PopoverContent", Lv = /* @__PURE__ */ O((e, t) => {
  const r = kv(kt, e.__scopePopover), { forceMount: n = r.forceMount, ...o } = e, i = Pt(kt, e.__scopePopover);
  return /* @__PURE__ */ y(Se, {
    present: n || i.open
  }, i.modal ? /* @__PURE__ */ y(Fv, I({}, o, {
    ref: t
  })) : /* @__PURE__ */ y(Vv, I({}, o, {
    ref: t
  })));
}), Fv = /* @__PURE__ */ O((e, t) => {
  const r = Pt(kt, e.__scopePopover), n = k(null), o = se(t, n), i = k(!1);
  return G(() => {
    const s = n.current;
    if (s)
      return Ln(s);
  }, []), /* @__PURE__ */ y(Fn, {
    as: ot,
    allowPinchZoom: !0
  }, /* @__PURE__ */ y(Gs, I({}, e, {
    ref: o,
    trapFocus: r.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: K(e.onCloseAutoFocus, (s) => {
      var a;
      s.preventDefault(), i.current || (a = r.triggerRef.current) === null || a === void 0 || a.focus();
    }),
    onPointerDownOutside: K(e.onPointerDownOutside, (s) => {
      const a = s.detail.originalEvent, c = a.button === 0 && a.ctrlKey === !0, l = a.button === 2 || c;
      i.current = l;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: K(
      e.onFocusOutside,
      (s) => s.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), Vv = /* @__PURE__ */ O((e, t) => {
  const r = Pt(kt, e.__scopePopover), n = k(!1), o = k(!1);
  return /* @__PURE__ */ y(Gs, I({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (i) => {
      var s;
      if ((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, i), !i.defaultPrevented) {
        var a;
        n.current || (a = r.triggerRef.current) === null || a === void 0 || a.focus(), i.preventDefault();
      }
      n.current = !1, o.current = !1;
    },
    onInteractOutside: (i) => {
      var s, a;
      (s = e.onInteractOutside) === null || s === void 0 || s.call(e, i), i.defaultPrevented || (n.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
      const c = i.target;
      ((a = r.triggerRef.current) === null || a === void 0 ? void 0 : a.contains(c)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
    }
  }));
}), Gs = /* @__PURE__ */ O((e, t) => {
  const { __scopePopover: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: i, disableOutsidePointerEvents: s, onEscapeKeyDown: a, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, p = Pt(kt, r), f = Gn(r);
  return Tn(), /* @__PURE__ */ y(An, {
    asChild: !0,
    loop: !0,
    trapped: n,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ y(mr, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: u,
    onEscapeKeyDown: a,
    onPointerDownOutside: c,
    onFocusOutside: l,
    onDismiss: () => p.onOpenChange(!1)
  }, /* @__PURE__ */ y(Oi, I({
    "data-state": Ys(p.open),
    role: "dialog",
    id: p.contentId
  }, f, d, {
    ref: t,
    style: {
      ...d.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }))));
});
function Ys(e) {
  return e ? "open" : "closed";
}
const Bv = Iv, Uv = Nv, zv = jv, Kv = Lv, Xs = ({ addFilterButtonText: e }) => /* @__PURE__ */ m.jsxs(Bv, { children: [
  /* @__PURE__ */ m.jsx(Uv, { asChild: !0, children: /* @__PURE__ */ m.jsx(Dt, { type: "add", children: e }) }),
  /* @__PURE__ */ m.jsx(zv, { container: document.getElementById("uikit-theme"), children: /* @__PURE__ */ m.jsx(
    Kv,
    {
      className: "w-[260px] rounded bg-white p-5 shadow-sm will-change-[transform,opacity] focus:shadow-sm",
      sideOffset: 5,
      children: /* @__PURE__ */ m.jsx("div", { className: "flex flex-col gap-2.5", children: "Coming soon!" })
    }
  ) })
] });
Xs.displayName = "TableFilterPopover";
const d0 = ({
  togglableFilters: e,
  appliedFilters: t,
  onClearAll: r,
  onSearchQueryChange: n,
  addFilterButtonText: o,
  clearAllButtonText: i,
  searchPlaceholderText: s,
  filterOptions: a
}) => {
  const [c, l] = X(!1), [u, d] = X(""), p = k(null), f = () => {
    var b;
    u !== "" ? d("") : l(!1), (b = p.current) == null || b.focus();
  };
  return G(() => {
    n == null || n(u);
  }, [n, u]), /* @__PURE__ */ m.jsxs("div", { className: " flex w-full shrink grow basis-0 items-start justify-between gap-4 border-b border-default p-4 pr-5 md:pr-4", children: [
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: B(
          "flex w-full gap-4",
          e != null && e.length ? "flex-col" : "flex-col gap-0 md:flex-row-reverse md:gap-4"
        ),
        children: [
          /* @__PURE__ */ m.jsxs(
            "div",
            {
              className: B(
                "flex flex-col-reverse justify-between gap-6 md:gap-4",
                c ? "flex-col-reverse" : "flex-row",
                e != null && e.length ? "w-full md:flex-row" : "md:flex-row-reverse"
              ),
              children: [
                e && /* @__PURE__ */ m.jsx("div", { className: "flex flex-auto flex-wrap items-start justify-start gap-2 self-stretch", children: e == null ? void 0 : e.map((b) => /* @__PURE__ */ y(
                  Dt,
                  {
                    type: "toggle",
                    onClick: b.onToggle,
                    ...b,
                    key: `fixed-${b.id}`
                  },
                  b.children
                )) }),
                c && /* @__PURE__ */ m.jsx(
                  "div",
                  {
                    className: B(
                      "-mr-1 -mt-2 flex h-auto md:h-5",
                      e != null && e.length ? "mb-0" : "mb-4 md:mb-0"
                    ),
                    children: /* @__PURE__ */ m.jsx("div", { className: "w-full md:w-80", children: /* @__PURE__ */ m.jsx(
                      ns,
                      {
                        ref: p,
                        prefixIcon: /* @__PURE__ */ m.jsx(Q.search, {}),
                        placeholder: s,
                        type: "text",
                        onChange: d,
                        value: u,
                        suffixIcon: /* @__PURE__ */ m.jsx(
                          st,
                          {
                            accessibilityLabel: "clear search",
                            onClick: f,
                            children: /* @__PURE__ */ m.jsx(Q.close, { className: "h-5 w-5", "aria-label": "Close" })
                          }
                        ),
                        autoFocus: !0
                      }
                    ) })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ m.jsxs("div", { className: "flex w-full flex-wrap items-start justify-start gap-2", children: [
            t == null ? void 0 : t.map((b) => /* @__PURE__ */ y(
              Dt,
              {
                type: "remove",
                onClick: b.onRemove,
                ...b,
                key: `dynamic-${b.id}`
              },
              b.children
            )),
            o && /* @__PURE__ */ m.jsx(
              Xs,
              {
                filterOptions: a,
                addFilterButtonText: o
              }
            ),
            !!(t != null && t.length) && /* @__PURE__ */ m.jsx(
              He,
              {
                variant: "primary",
                plain: !0,
                accessibilityLabel: "Clear all",
                onClick: r,
                children: i
              }
            )
          ] })
        ]
      }
    ),
    !c && /* @__PURE__ */ m.jsx(
      st,
      {
        accessibilityLabel: "Search Icon",
        onClick: () => l(!0),
        children: /* @__PURE__ */ m.jsx(Q.search, { className: "h-5 w-5 text-icon" })
      }
    )
  ] });
};
Dt.displayName = "FilterBadge";
var Zs = {}, qs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  function t(n, o) {
    return {
      handler: n,
      config: o
    };
  }
  t.withOptions = function(n, o = () => ({})) {
    const i = function(s) {
      return {
        __options: s,
        handler: n(s),
        config: o(s)
      };
    };
    return i.__isOptionsFunction = !0, i.__pluginFunction = n, i.__configFunction = o, i;
  };
  const r = t;
})(qs);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const t = /* @__PURE__ */ r(qs);
  function r(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  const n = t.default;
})(Zs);
let Zr = Zs;
var Wv = (Zr.__esModule ? Zr : { default: Zr }).default;
const Hv = /* @__PURE__ */ $a(Wv), Gv = Hv(
  // Add CSS variables definition to the base layer
  function({ addBase: e }) {
    e({
      ":root": {
        "--color-base-attention": "61, 88%, 50%",
        "--color-base-critical": "0, 85%, 45%",
        "--color-base-highlight": "190, 44%, 48%",
        "--color-base-primary": "209, 100%, 22%",
        "--color-base-success": "90, 70%, 45%",
        "--color-base-warning": "38, 100%, 55%",
        "--color-border-default": "0, 0%, 87%",
        "--color-border-disabled": "0, 0%, 70%",
        "--color-border-hovered": "0, 0%, 78%",
        "--color-border-pressed": "0, 0%, 74%",
        "--color-border-subdued": "0, 0%, 82%",
        "--color-icon-default": "0 0% 33%",
        "--color-icon-disabled": "0 0% 53%",
        "--color-icon-hovered": "0 0% 30%",
        "--color-icon-on-interactive": "0 0% 97%",
        "--color-interactive-disabled": "0, 0%, 70%",
        "--color-interactive-attention-default": "58, 80%, 46%",
        "--color-interactive-attention-hovered": "59, 81%, 41%",
        "--color-interactive-attention-pressed": "58, 82%, 37%",
        "--color-interactive-critical-default": "0 80% 46%",
        "--color-interactive-critical-hovered": "0 80% 37%",
        "--color-interactive-critical-pressed": "0 80% 29%",
        "--color-interactive-highlight-default": "189 82% 33%",
        "--color-interactive-highlight-hovered": "189, 83%, 29%",
        "--color-interactive-highlight-pressed": "189, 84%, 26%",
        "--color-interactive-plain-default": "0, 0%, 100%",
        "--color-interactive-plain-hovered": "0, 0%, 95%",
        "--color-interactive-plain-pressed": "0, 0%, 89%",
        "--color-interactive-primary-default": "209 100% 22%",
        "--color-interactive-primary-hovered": "209, 100%, 17%",
        "--color-interactive-primary-pressed": "209, 100%, 14%",
        "--color-interactive-success-default": "106, 81%, 29%",
        "--color-interactive-success-hovered": "106, 81%, 23%",
        "--color-interactive-success-pressed": "106, 83%, 18%",
        "--color-interactive-warning-default": "23, 100%, 39%",
        "--color-interactive-warning-hovered": "23, 100%, 35%",
        "--color-interactive-warning-pressed": "23, 100%, 35%",
        "--color-focus": "209, 100%, 59%",
        "--color-outline": "209, 100%, 85%",
        "--color-overlay-modal": "0, 0%, 18%",
        "--color-surface-default": "0 0% 97%",
        "--color-surface-critical-default": "0, 80%, 94%",
        "--color-surface-critical-hovered": "0, 75%, 89%",
        "--color-surface-critical-pressed": "0, 74%, 87%",
        "--color-surface-critical-subdued": "0, 77%, 92%",
        "--color-surface-highlight-default": "191, 73%, 87%",
        "--color-surface-highlight-hovered": "192, 71%, 70%",
        "--color-surface-highlight-pressed": "192, 71%, 63%",
        "--color-surface-highlight-subdued": "191, 71%, 78%",
        "--color-surface-neutral-default": "0 0% 97%",
        "--color-surface-neutral-hovered": "0 0% 87%",
        "--color-surface-neutral-pressed": "0 0% 85%",
        "--color-surface-selected-default": "209, 61%, 86%",
        "--color-surface-selected-hovered": "210, 66%, 78%",
        "--color-surface-selected-pressed": "209, 69%, 72%",
        "--color-surface-success-default": "89, 68%, 89%",
        "--color-surface-success-hovered": "89, 67%, 72%",
        "--color-surface-success-pressed": "89, 66%, 64%",
        "--color-surface-success-subdued": "89, 67%, 80%",
        "--color-surface-warning-default": "38, 95%, 93%",
        "--color-surface-warning-hovered": "38, 92%, 75%",
        "--color-surface-warning-pressed": "38, 92%, 67%",
        "--color-surface-warning-subdued": "38, 93%, 83%",
        "--color-text-attention": "63, 100%, 31%",
        "--color-text-critical": "0, 97%, 40%",
        "--color-text-default": "0 0% 18%",
        "--color-text-disabled": "0 0% 53%",
        "--color-text-highlight": "201, 100%, 25%",
        "--color-text-on-interactive": "0 0% 97%",
        "--color-text-subdued": "0, 0%, 51%",
        "--color-text-success": "120, 100%, 22%",
        "--color-text-warning": "23, 100%, 39%",
        "--radius-interactive-elements-default": "4px",
        "--radius-interactive-elements-small": "2px",
        "--radius-level-0": "32px",
        "--radius-level-1": "8px",
        "--radius-level-2": "4px",
        "--radius-level-3": "2px",
        "--radius-level-negative-2": "32px",
        "-moz-osx-font-smoothing": "grayscale",
        "-webkit-font-smoothing": "antialiased",
        // Custom styling for the number input, because we need to hide the browser's default appearance
        "input[type='number'].uikit-hide-number-spin-controls::-webkit-inner-spin-button, input.stepper-input::-webkit-outer-spin-button": {
          "-webkit-appearance": "none",
          appearance: "none"
        },
        "input[type='number'].uikit-hide-number-spin-controls": {
          "-moz-appearance": "textfield"
        }
      }
    }), e({
      "[data-theme='meplato']": {
        "--color-background-default": "0 0% 94%",
        "--color-base-attention": "61, 88%, 50%",
        "--color-base-critical": "0, 85%, 45%",
        "--color-base-highlight": "190, 44%, 48%",
        "--color-base-primary": "209, 100%, 22%",
        "--color-base-success": "90, 70%, 45%",
        "--color-base-warning": "38, 100%, 55%",
        "--color-border-default": "0, 0%, 87%",
        "--color-border-disabled": "0, 0%, 70%",
        "--color-border-hovered": "0, 0%, 78%",
        "--color-border-pressed": "0, 0%, 74%",
        "--color-border-subdued": "0, 0%, 82%",
        "--color-icon-attention": "58, 100%, 44%",
        "--color-icon-critical": "0 57% 78%",
        "--color-icon-default": "0 0% 33%",
        "--color-icon-disabled": "0 0% 53%",
        "--color-icon-highlight": "197 32% 38%",
        "--color-icon-hovered": "0 0% 30%",
        "--color-icon-on-interactive": "0 0% 97%",
        "--color-icon-success": "72 96% 22%",
        "--color-icon-warning": "38 99% 34%",
        "--color-interactive-disabled": "0, 0%, 70%",
        "--color-interactive-attention-default": "58, 80%, 46%",
        "--color-interactive-attention-hovered": "59, 81%, 41%",
        "--color-interactive-attention-pressed": "58, 82%, 37%",
        "--color-interactive-critical-default": "0 80% 46%",
        "--color-interactive-critical-hovered": "0 80% 37%",
        "--color-interactive-critical-pressed": "0 80% 29%",
        "--color-interactive-highlight-default": "189 82% 33%",
        "--color-interactive-highlight-hovered": "189, 83%, 29%",
        "--color-interactive-highlight-pressed": "189, 84%, 26%",
        "--color-interactive-plain-default": "0, 0%, 100%",
        "--color-interactive-plain-hovered": "0, 0%, 95%",
        "--color-interactive-plain-pressed": "0, 0%, 89%",
        "--color-interactive-primary-default": "209 100% 22%",
        "--color-interactive-primary-hovered": "209, 100%, 17%",
        "--color-interactive-primary-pressed": "209, 100%, 14%",
        "--color-interactive-success-default": "106, 81%, 29%",
        "--color-interactive-success-hovered": "106, 81%, 23%",
        "--color-interactive-success-pressed": "106, 83%, 18%",
        "--color-interactive-warning-default": "23, 100%, 39%",
        "--color-interactive-warning-hovered": "23, 100%, 35%",
        "--color-interactive-warning-pressed": "23, 100%, 35%",
        "--color-focus": "209, 100%, 59%",
        "--color-outline": "209, 100%, 85%",
        "--color-surface-default": "0 0% 97%",
        "--color-surface-disabled": "0 0% 76%",
        "--color-surface-hovered": "0 0% 87%",
        "--color-surface-pressed": "0 0% 82%",
        "--color-surface-attention-default": "60, 76%, 88%",
        "--color-surface-attention-hovered": "60, 73%, 84%",
        "--color-surface-attention-pressed": "60, 73%, 81%",
        "--color-surface-attention-subdued": "60, 60%, 86%",
        "--color-surface-critical-default": "0, 80%, 94%",
        "--color-surface-critical-hovered": "0, 75%, 89%",
        "--color-surface-critical-pressed": "0, 74%, 87%",
        "--color-surface-critical-subdued": "0, 90%, 96%",
        "--color-surface-highlight-default": "191, 73%, 87%",
        "--color-surface-highlight-hovered": "192, 71%, 70%",
        "--color-surface-highlight-pressed": "192, 71%, 63%",
        "--color-surface-highlight-subdued": "197, 43%, 92%",
        "--color-surface-neutral-default": "0 0% 92%",
        "--color-surface-neutral-hovered": "0 0% 87%",
        "--color-surface-neutral-pressed": "0 0% 85%",
        "--color-surface-neutral-subdued": "0 0% 96%",
        "--color-surface-selected-default": "209, 61%, 86%",
        "--color-surface-selected-hovered": "210, 66%, 78%",
        "--color-surface-selected-pressed": "209, 69%, 72%",
        "--color-surface-success-default": "89, 68%, 89%",
        "--color-surface-success-hovered": "89, 67%, 72%",
        "--color-surface-success-pressed": "89, 66%, 64%",
        "--color-surface-success-subdued": "77, 39%, 91%",
        "--color-surface-warning-default": "38, 95%, 93%",
        "--color-surface-warning-hovered": "38, 92%, 75%",
        "--color-surface-warning-pressed": "38, 92%, 67%",
        "--color-surface-warning-subdued": "39, 92%, 95%",
        "--color-text-attention": "63, 100%, 31%",
        "--color-text-critical": "0, 97%, 40%",
        "--color-text-default": "0 0% 18%",
        "--color-text-disabled": "0 0% 53%",
        "--color-text-highlight": "201, 100%, 25%",
        "--color-text-on-interactive": "0 0% 97%",
        "--color-text-subdued": "0, 0%, 51%",
        "--color-text-success": "120, 100%, 22%",
        "--color-text-warning": "23, 100%, 39%",
        "--interactive-elements-default": "4px",
        "--interactive-elements-small": "2px",
        "--radius-interactive-elements-default": "4px",
        "--radius-interactive-elements-small": "2px",
        "--radius-level-1": "8px",
        "--radius-level-2": "4px",
        "--radius-level-3": "2px",
        "--radius-level-negative-2": "32px"
      },
      "[data-theme='webridge']": {
        "--color-background-default": "0 0% 94%",
        "--color-base-attention": "58, 100%, 44%",
        "--color-base-critical": "0, 57%, 51%",
        "--color-base-primary": "106, 82%, 26%",
        "--color-base-highlight": "198, 32%, 48%",
        "--color-base-success": "72, 96%, 22%",
        "--color-base-warning": "38, 98%, 38%",
        "--color-border-default": "0, 0%, 89%",
        "--color-border-disabled": "0, 0%, 72%",
        "--color-border-hovered": "0, 0%, 85%",
        "--color-border-pressed": "0, 0%, 80%",
        "--color-border-subdued": "0, 0%, 87%",
        "--color-icon-attention": "58 100% 44%",
        "--color-icon-critical": "0 57% 78%",
        "--color-icon-default": "0 0% 33%",
        "--color-icon-disabled": "0 0% 53%",
        "--color-icon-highlight": "197 32% 38%",
        "--color-icon-hovered": "0 0% 29%",
        "--color-icon-on-interactive": "0 0% 97%",
        "--color-icon-success": "72 96% 22%",
        "--color-icon-warning": "38 99% 34%",
        "--color-interactive-disabled": "0, 0%, 64%",
        "--color-interactive-attention-default": "58, 100%, 44%",
        "--color-interactive-attention-hovered": "58, 100%, 41%",
        "--color-interactive-attention-pressed": "58, 100%, 39%",
        "--color-interactive-critical-default": "0 57% 51%",
        "--color-interactive-critical-hovered": "0 58% 46%",
        "--color-interactive-critical-pressed": "0 58% 41%",
        "--color-interactive-highlight-default": "198 32% 48%",
        "--color-interactive-highlight-hovered": "197, 32%, 45%",
        "--color-interactive-highlight-pressed": "197, 32%, 43%",
        "--color-interactive-plain-default": "0, 0%, 100%",
        "--color-interactive-plain-hovered": "0, 0%, 95%",
        "--color-interactive-plain-pressed": "0, 0%, 89%",
        "--color-interactive-primary-default": "106 82% 26%",
        "--color-interactive-primary-hovered": "106 83% 24%",
        "--color-interactive-primary-pressed": "105 85% 21%",
        "--color-interactive-success-default": "72, 96%, 22%",
        "--color-interactive-success-hovered": "72, 98%, 19%",
        "--color-interactive-success-pressed": "72 100% 17%",
        "--color-interactive-warning-default": "25, 82%, 74%",
        "--color-interactive-warning-hovered": "25, 81%, 67%",
        "--color-interactive-warning-pressed": "25, 80%, 60%",
        "--color-focus": "209, 100%, 59%",
        "--color-outline": "209, 100%, 85%",
        "--color-surface-default": "0 0% 99%",
        "--color-surface-disabled": "0 0% 76%",
        "--color-surface-hovered": "0 0% 87%",
        "--color-surface-pressed": "0 0% 82%",
        "--color-surface-attention-default": "60, 61%, 91%",
        "--color-surface-attention-hovered": "60, 59%, 82%",
        "--color-surface-attention-pressed": "60, 58%, 77%",
        "--color-surface-attention-subdued": "60, 60%, 86%",
        "--color-surface-critical-default": "0, 100%, 98%",
        "--color-surface-critical-hovered": "0, 94%, 94%",
        "--color-surface-critical-pressed": "0, 91%, 91%",
        "--color-surface-critical-subdued": "0, 90%, 96%",
        "--color-surface-highlight-default": "195, 43%, 95%",
        "--color-surface-highlight-hovered": "196, 39%, 89%",
        "--color-surface-highlight-pressed": "196, 39%, 86%",
        "--color-surface-highlight-subdued": "197, 43%, 92%",
        "--color-surface-neutral-default": "0 0% 95%",
        "--color-surface-neutral-hovered": "0 0% 93%",
        "--color-surface-neutral-pressed": "0 0% 90%",
        "--color-surface-neutral-subdued": "0 0% 96%",
        "--color-surface-selected-default": "0, 0%, 89%",
        "--color-surface-selected-hovered": "0, 0%, 89%",
        "--color-surface-selected-pressed": "105, 27%, 88%",
        "--color-surface-success-default": "70, 38%, 94%",
        "--color-surface-success-hovered": "75, 40%, 88%",
        "--color-surface-success-pressed": "74, 40%, 86%",
        "--color-surface-success-subdued": "77, 39%, 91%",
        "--color-surface-warning-default": "38, 100%, 98%",
        "--color-surface-warning-hovered": "37, 94%, 93%",
        "--color-surface-warning-pressed": "38, 92%, 91%",
        "--color-surface-warning-subdued": "39, 92%, 95%",
        "--color-text-attention": "63, 28%, 45%",
        "--color-text-critical": "0, 58%, 46%",
        "--color-text-default": "0 0% 18%",
        "--color-text-disabled": "0 0% 45%",
        "--color-text-highlight": "197, 32%, 38%",
        "--color-text-on-interactive": "0 0% 97%",
        "--color-text-subdued": "0, 0%, 51%",
        "--color-text-success": "72, 96%, 22%",
        "--color-text-warning": "38, 99%, 34%",
        "--interactive-elements-default": "32px",
        "--interactive-elements-small": "16px",
        "--radius-interactive-elements-default": "32px",
        "--radius-interactive-elements-small": "16px",
        "--radius-level-1": "16px",
        "--radius-level-2": "8px",
        "--radius-level-3": "4px",
        "--radius-level-negative-2": "64px"
      },
      "[data-theme='meplato'][data-mode='dark']": {
        "--color-background-default": "0 0% 16%",
        "--color-base-attention": "61, 100%, 44%",
        "--color-base-critical": "0, 85%, 55%",
        "--color-base-highlight": "187, 70%, 60%",
        "--color-base-primary": "209, 98%, 76%",
        "--color-base-success": "90, 70%, 60%",
        "--color-base-warning": "38, 100%, 65%",
        "--color-border-default": "0, 0%, 36%",
        "--color-border-disabled": "0, 0%, 32%",
        "--color-border-hovered": "0, 0%, 33%",
        "--color-border-pressed": "0, 0%, 31%",
        "--color-border-subdued": "0, 0%, 35%",
        "--color-icon-attention": "57 71% 57%",
        "--color-icon-critical": "0 57% 78%",
        "--color-icon-default": "0 0% 79%",
        "--color-icon-disabled": "0 0% 32%",
        "--color-icon-highlight": "198 32% 75%",
        "--color-icon-hovered": "0 0% 73%",
        "--color-icon-on-interactive": "0 0% 18%",
        "--color-icon-success": "75 58% 75%",
        "--color-icon-warning": "38 79% 74%",
        "--color-interactive-disabled": "0, 0%, 49%",
        "--color-interactive-attention-default": "61, 100%, 82%",
        "--color-interactive-attention-hovered": "61, 100%, 74%",
        "--color-interactive-attention-pressed": "61, 100%, 66%",
        "--color-interactive-critical-default": "0 100% 82%",
        "--color-interactive-critical-hovered": "0 100% 74%",
        "--color-interactive-critical-pressed": "0 100% 66%",
        "--color-interactive-highlight-default": "192 100% 82%",
        "--color-interactive-highlight-hovered": "192, 100%, 74%",
        "--color-interactive-highlight-pressed": "192, 100%, 66%",
        "--color-interactive-plain-default": "0, 0%, 26%",
        "--color-interactive-plain-hovered": "0, 0%, 23%",
        "--color-interactive-plain-pressed": "0, 0%, 21%",
        "--color-interactive-primary-default": "209 100% 75%",
        "--color-interactive-primary-hovered": "209, 100%, 60%",
        "--color-interactive-primary-pressed": "209, 100%, 48%",
        "--color-interactive-success-default": "96, 83%, 72%",
        "--color-interactive-success-hovered": "96, 83%, 57%",
        "--color-interactive-success-pressed": "97, 83%, 45%",
        "--color-interactive-warning-default": "25, 82%, 74%",
        "--color-interactive-warning-hovered": "25, 81%, 67%",
        "--color-interactive-warning-pressed": "25, 80%, 60%",
        "--color-focus": "209, 100%, 59%",
        "--color-outline": "209, 100%, 85%",
        "--color-surface-default": "0 0% 30%",
        "--color-surface-disabled": "0 0% 39%",
        "--color-surface-hovered": "0 0% 24%",
        "--color-surface-pressed": "0 0% 19%",
        "--color-surface-attention-default": "61, 48%, 35%",
        "--color-surface-attention-hovered": "61, 49%, 32%",
        "--color-surface-attention-pressed": "61, 49%, 31%",
        "--color-surface-attention-subdued": "57, 67%, 33%",
        "--color-surface-critical-default": "0, 37%, 42%",
        "--color-surface-critical-hovered": "0, 38%, 40%",
        "--color-surface-critical-pressed": "0, 38%, 38%",
        "--color-surface-critical-subdued": "350, 39%, 26%",
        "--color-surface-highlight-default": "197, 43%, 32%",
        "--color-surface-highlight-hovered": "198, 45%, 30%",
        "--color-surface-highlight-pressed": "198, 46%, 29%",
        "--color-surface-highlight-subdued": "198, 38%, 25%",
        "--color-surface-neutral-default": "0 0% 31%",
        "--color-surface-neutral-hovered": "0 0% 29%",
        "--color-surface-neutral-pressed": "0 0% 28%",
        "--color-surface-neutral-subdued": "0 0% 19%",
        "--color-surface-selected-default": "214, 38%, 42%",
        "--color-surface-selected-hovered": "214, 39%, 33%",
        "--color-surface-selected-pressed": "214, 39%, 26%",
        "--color-surface-success-default": "110, 38%, 32%",
        "--color-surface-success-hovered": "110, 39%, 30%",
        "--color-surface-success-pressed": "110, 40%, 29%",
        "--color-surface-success-subdued": "72, 31%, 25%",
        "--color-surface-warning-default": "38, 100%, 28%",
        "--color-surface-warning-hovered": "38, 100%, 22%",
        "--color-surface-warning-pressed": "38, 100%, 20%",
        "--color-surface-warning-subdued": "35, 71%, 22%",
        "--color-text-attention": "60, 100%, 74%",
        "--color-text-critical": "0, 100%, 82%",
        "--color-text-default": "0 0% 94%",
        "--color-text-disabled": "0, 0%, 32%",
        "--color-text-highlight": "185, 82%, 65%",
        "--color-text-on-interactive": "0 0% 18%",
        "--color-text-subdued": "0, 0%, 75%",
        "--color-text-success": "96, 83%, 72%",
        "--color-text-warning": "47, 100%, 50%",
        "--interactive-elements-default": "4px",
        "--interactive-elements-small": "2px"
      },
      "[data-theme='webridge'][data-mode='dark']": {
        "--color-background-default": "0 0% 18%",
        "--color-base-attention": "58, 95%, 63%",
        "--color-base-critical": "0, 57%, 70%",
        "--color-base-highlight": "197, 56%, 62%",
        "--color-base-primary": "106, 81%, 41%",
        "--color-base-success": "72, 54%, 62%",
        "--color-base-warning": "38, 84%, 68%",
        "--color-border-default": "0, 0%, 43%",
        "--color-border-disabled": "0, 0%, 42%",
        "--color-border-hovered": "0, 0%, 40%",
        "--color-border-pressed": "0, 0%, 38%",
        "--color-border-subdued": "0, 0%, 41%",
        "--color-icon-attention": "57 71% 57%",
        "--color-icon-critical": "0 57% 78%",
        "--color-icon-default": "0 0% 79%",
        "--color-icon-disabled": "0 0% 32%",
        "--color-icon-highlight": "198 32% 75%",
        "--color-icon-hovered": "0 0% 83%",
        "--color-icon-on-interactive": "0 0% 18%",
        "--color-icon-success": "75 58% 75%",
        "--color-icon-warning": "38 79% 74%",
        "--color-interactive-disabled": "0, 0%, 54%",
        "--color-interactive-attention-default": "58, 95%, 63%",
        "--color-interactive-attention-hovered": "58, 94%, 60%",
        "--color-interactive-attention-pressed": "58, 95%, 63%",
        "--color-interactive-critical-default": "0 57% 70%",
        "--color-interactive-critical-hovered": "0 57% 63%",
        "--color-interactive-critical-pressed": "0 57% 56%",
        "--color-interactive-highlight-default": "197 56% 62%",
        "--color-interactive-highlight-hovered": "197, 56%, 58%",
        "--color-interactive-highlight-pressed": "197, 55%, 55%",
        "--color-interactive-plain-default": "0, 0%, 26%",
        "--color-interactive-plain-hovered": "0, 0%, 23%",
        "--color-interactive-plain-pressed": "0, 0%, 21%",
        "--color-interactive-primary-default": "106 81% 41%",
        "--color-interactive-primary-hovered": "106, 82%, 37%",
        "--color-interactive-primary-pressed": "106, 82%, 33%",
        "--color-interactive-success-default": "72, 54%, 62%",
        "--color-interactive-success-disabled": "0 0% 39%",
        "--color-interactive-success-hovered": "72 54% 55%",
        "--color-interactive-success-pressed": "71 54% 49%",
        "--color-interactive-warning-default": "38, 84%, 68%",
        "--color-interactive-warning-hovered": "38, 84%, 64%",
        "--color-interactive-warning-pressed": "38, 83%, 61%",
        "--color-focus": "209, 100%, 59%",
        "--color-outline": "209, 100%, 85%",
        "--color-surface-default": "0 0% 30%",
        "--color-surface-disabled": "0 0% 39%",
        "--color-surface-hovered": "0 0% 24%",
        "--color-surface-pressed": "0 0% 19%",
        "--color-surface-attention-default": "57, 67%, 35%",
        "--color-surface-attention-hovered": "57, 68%, 31%",
        "--color-surface-attention-pressed": "57, 68%, 30%",
        "--color-surface-attention-subdued": "57, 67%, 33%",
        "--color-surface-critical-default": "350, 38%, 28%",
        "--color-surface-critical-hovered": "350, 39%, 25%",
        "--color-surface-critical-pressed": "351, 38%, 24%",
        "--color-surface-critical-subdued": "350, 39%, 26%",
        "--color-surface-highlight-default": "197, 37%, 26%",
        "--color-surface-highlight-hovered": "198, 37%, 23%",
        "--color-surface-highlight-pressed": "197, 37%, 22%",
        "--color-surface-highlight-subdued": "198, 38%, 25%",
        "--color-surface-neutral-default": "0 0% 20%",
        "--color-surface-neutral-hovered": "0 0% 17%",
        "--color-surface-neutral-pressed": "0 0% 16%",
        "--color-surface-neutral-subdued": "0 0% 19%",
        "--color-surface-selected-default": "110, 11%, 22%",
        "--color-surface-selected-hovered": "109, 10%, 21%",
        "--color-surface-selected-pressed": "109, 12%, 18%",
        "--color-surface-success-default": "71, 32%, 26%",
        "--color-surface-success-hovered": "71, 32%, 24%",
        "--color-surface-success-pressed": "72, 32%, 22%",
        "--color-surface-success-subdued": "72, 31%, 25%",
        "--color-surface-warning-default": "36, 71%, 23%",
        "--color-surface-warning-hovered": "35, 71%, 20%,",
        "--color-surface-warning-pressed": "35, 73%, 19%",
        "--color-surface-warning-subdued": "35, 71%, 22%",
        "--color-text-attention": "63, 59%, 75%",
        "--color-text-critical": "0, 57%, 78%",
        "--color-text-default": "0 0% 99%",
        "--color-text-disabled": "0 0% 75%",
        "--color-text-highlight": "198, 32%, 75%",
        "--color-text-on-interactive": "0 0% 18%",
        "--color-text-subdued": "0, 0%, 77%",
        "--color-text-success": "75, 58%, 75%",
        "--color-text-warning": "38, 79%, 74%",
        "--interactive-elements-default": "32px",
        "--interactive-elements-small": "16px"
      }
    });
  },
  // Extend the Tailwind theme
  {
    theme: {
      extend: {
        animation: {
          "dropdown-open": "revealInFromTop 0.2s ease-in-out",
          "dropdown-close": "revealOutFromBottom 0.2s ease-in-out",
          "accordion-open": "slideDown 300ms ease-out",
          "accordion-close": "slideUp 100ms ease-out"
        },
        borderColor: {
          default: "hsl(var(--color-border-default))",
          disabled: "hsl(var(--color-border-disabled))",
          focus: "hsl(var(--color-focus))",
          hovered: "hsl(var(--color-border-hovered))",
          pressed: "hsl(var(--color-border-pressed))",
          subdued: "hsl(var(--color-border-subdued))"
        },
        backgroundColor: {
          DEFAULT: "hsl(var(--color-background-default))"
        },
        borderRadius: {
          "interactive-elements-default": "var(--radius-interactive-elements-default)",
          "interactive-elements-small": "var(--radius-interactive-elements-small)",
          "level-0": "var(--radius-level-0)",
          "level-1": "var(--radius-level-1)",
          "level-2": "var(--radius-level-2)",
          "level-3": "var(--radius-level-3)",
          "level-negative-2": "var(--radius-level-negative-2)"
        },
        boxShadow: {
          "interactive-light": "0px 16px 48px 0px rgba(0, 0, 0, 0.20), 0px 0px 2px 0.5px rgba(0, 0, 0, 0.20), 0px 0px 4px 0px rgba(255, 255, 255, 0.50) inset",
          "interactive-dark": "0px 16px 48px 0px rgba(0, 0, 0, 0.20), 0px 0px 2px 0.5px rgba(0, 0, 0, 0.20), 0px 0px 4px 0px rgba(255, 255, 255, 0.50) inset",
          md: "0px 0px 2px 0.5px rgba(0, 0, 0, 0.20), 0px 2.66667px 8px 0px rgba(0, 0, 0, 0.13), 0px 0px 3px 0px rgba(255, 255, 255, 0.50) inset",
          xs: "0px 0px 2px 0.5px rgba(0, 0, 0, 0.20), 0px 0.66667px 2px 0px rgba(0, 0, 0, 0.13), 0px 0px 3px 0px rgba(255, 255, 255, 0.50) inset",
          "2xl": "0px 16px 48px 0px rgba(0, 0, 0, 0.20), 0px 0px 2px 0.5px rgba(0, 0, 0, 0.20), 0px 0px 4px 0px rgba(255, 255, 255, 0.50) inset"
        },
        colors: {
          attention: "hsl(var(--color-base-attention))",
          critical: "hsl(var(--color-base-critical))",
          highlight: "hsl(var(--color-base-highlight))",
          primary: "hsl(var(--color-base-primary))",
          success: "hsl(var(--color-base-success))",
          warning: "hsl(var(--color-base-warning))",
          surface: {
            DEFAULT: "hsl(var(--color-surface-default))",
            disabled: "hsl(var(--color-surface-disabled))",
            hovered: "hsl(var(--color-surface-hovered))",
            pressed: "hsl(var(--color-surface-pressed))",
            attention: {
              DEFAULT: "hsl(var(--color-surface-attention-default))",
              hovered: "hsl(var(--color-surface-attention-hovered))",
              pressed: "hsl(var(--color-surface-attention-pressed))",
              subdued: "hsl(var(--color-surface-attention-subdued))"
            },
            critical: {
              DEFAULT: "hsl(var(--color-surface-critical-default))",
              hovered: "hsl(var(--color-surface-critical-hovered))",
              pressed: "hsl(var(--color-surface-critical-pressed))",
              subdued: "hsl(var(--color-surface-critical-subdued))"
            },
            highlight: {
              DEFAULT: "hsl(var(--color-surface-highlight-default))",
              hovered: "hsl(var(--color-surface-highlight-hovered))",
              pressed: "hsl(var(--color-surface-highlight-pressed))",
              subdued: "hsl(var(--color-surface-highlight-subdued))"
            },
            neutral: {
              DEFAULT: "hsl(var(--color-surface-neutral-default))",
              hovered: "hsl(var(--color-surface-neutral-hovered))",
              pressed: "hsl(var(--color-surface-neutral-pressed))",
              subdued: "hsl(var(--color-surface-neutral-subdued))"
            },
            selected: {
              DEFAULT: "hsl(var(--color-surface-selected-default))",
              hovered: "hsl(var(--color-surface-selected-hovered))",
              pressed: "hsl(var(--color-surface-selected-pressed))"
            },
            success: {
              DEFAULT: "hsl(var(--color-surface-success-default))",
              hovered: "hsl(var(--color-surface-success-hovered))",
              pressed: "hsl(var(--color-surface-success-pressed))",
              subdued: "hsl(var(--color-surface-success-subdued))"
            },
            warning: {
              DEFAULT: "hsl(var(--color-surface-warning-default))",
              hovered: "hsl(var(--color-surface-warning-hovered))",
              pressed: "hsl(var(--color-surface-warning-pressed))",
              subdued: "hsl(var(--color-surface-warning-subdued))"
            }
          },
          icon: {
            attention: "hsl(var(--color-icon-attention))",
            critical: "hsl(var(--color-icon-critical))",
            DEFAULT: "hsl(var(--color-icon-default))",
            disabled: "hsl(var(--color-icon-disabled))",
            highlight: "hsl(var(--color-icon-highlight))",
            hovered: "hsl(var(--color-icon-hovered))",
            "on-interactive": "hsl(var(--color-icon-on-interactive))",
            success: "hsl(var(--color-icon-success))",
            warning: "hsl(var(--color-icon-warning))"
          },
          interactive: {
            disabled: "hsl(var(--color-interactive-disabled))",
            attention: {
              DEFAULT: "hsl(var(--color-interactive-attention-default))",
              hovered: "hsl(var(--color-interactive-attention-hovered))",
              pressed: "hsl(var(--color-interactive-attention-pressed))"
            },
            critical: {
              DEFAULT: "hsl(var(--color-interactive-critical-default))",
              hovered: "hsl(var(--color-interactive-critical-hovered))",
              pressed: "hsl(var(--color-interactive-critical-pressed))"
            },
            highlight: {
              DEFAULT: "hsl(var(--color-interactive-highlight-default))",
              hovered: "hsl(var(--color-interactive-highlight-hovered))",
              pressed: "hsl(var(--color-interactive-highlight-pressed))"
            },
            plain: {
              DEFAULT: "hsl(var(--color-interactive-plain-default))",
              hovered: "hsl(var(--color-interactive-plain-hovered))",
              pressed: "hsl(var(--color-interactive-plain-pressed))"
            },
            primary: {
              DEFAULT: "hsl(var(--color-interactive-primary-default))",
              hovered: "hsl(var(--color-interactive-primary-hovered))",
              pressed: "hsl(var(--color-interactive-primary-pressed))"
            },
            success: {
              DEFAULT: "hsl(var(--color-interactive-success-default))",
              hovered: "hsl(var(--color-interactive-success-hovered))",
              pressed: "hsl(var(--color-interactive-success-pressed))"
            },
            warning: {
              DEFAULT: "hsl(var(--color-interactive-warning-default))",
              hovered: "hsl(var(--color-interactive-warning-hovered))",
              pressed: "hsl(var(--color-interactive-warning-pressed))"
            }
          },
          outline: {
            default: "hsl(var(--color-border-default))",
            hovered: "hsl(var(--color-border-hovered))",
            pressed: "hsl(var(--color-border-pressed))",
            subdued: "hsl(var(--color-border-subdued))"
          },
          overlay: {
            modal: "hsl(var(--color-overlay-modal))"
          }
        },
        fontFamily: {
          sans: ["Inter Variable", "sans-serif"],
          mono: ["Roboto Mono", "sans-serif"]
        },
        fontSmoothing: {
          antialiased: "antialiased"
        },
        keyframes: {
          modalIn: {
            from: { transform: "translateY(50px)", opacity: "0" },
            to: { transform: "translateY(0)", opacity: "1" }
          },
          modalInOverlay: {
            from: { opacity: "0" },
            to: { opacity: "0.2" }
          },
          modalOut: {
            from: { transform: "translateY(0)", opacity: "1" },
            to: { transform: "translateY(50px)", opacity: "0" }
          },
          modalOutOverlay: {
            from: { opacity: "0.2" },
            to: { opacity: "0" }
          },
          revealInFromTop: {
            "0%": {
              transform: "translateY(-5%)",
              opacity: "0",
              pointerEvents: "none"
            },
            "100%": {
              transform: "translateY(0%)",
              opacity: "1",
              pointerEvents: "auto"
            }
          },
          revealOutFromBottom: {
            "0%": {
              transform: "translateY(0%)",
              opacity: "1",
              pointerEvents: "none"
            },
            "100%": {
              transform: "translateY(-5%)",
              opacity: "0",
              pointerEvents: "none"
            }
          },
          slideDown: {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" }
          },
          slideUp: {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" }
          },
          toastIn: {
            from: {
              /**
               * 100%: should aproximately be the height of the toast
               * 3.75rem: The bottom position of the RadixToast.Viewport in the toast context
               * 1.25rem: The starting position of the toast from Figma
               */
              transform: "translateY(calc(100% + 3.75rem + 1.25rem))"
            },
            to: {
              transform: "translateY(0)"
            }
          },
          toastOut: {
            from: {
              transform: "translateY(0)"
            },
            to: {
              /**
               * 100%: should aproximately be the height of the toast
               * 3.75rem: The bottom position of the RadixToast.Viewport in the toast context
               * 1.25rem: The starting position of the toast from Figma
               */
              transform: "translateY(calc(100% + 3.75rem + 1.25rem))"
            }
          }
        },
        outlineColor: {
          focus: "hsl(var(--color-outline))",
          "focus-link": "hsl(var(--color-focus))"
        },
        ringColor: {
          focus: "hsl(var(--color-focus))",
          "focus-link": "hsl(var(--color-outline))"
        },
        textColor: {
          attention: "hsl(var(--color-text-attention))",
          critical: "hsl(var(--color-text-critical))",
          DEFAULT: "hsl(var(--color-text-default))",
          disabled: "hsl(var(--color-text-disabled))",
          highlight: "hsl(var(--color-text-highlight))",
          "on-interactive": "hsl(var(--color-text-on-interactive))",
          subdued: "hsl(var(--color-text-subdued))",
          success: "hsl(var(--color-text-success))",
          warning: "hsl(var(--color-text-warning))"
        },
        zIndex: {
          dropdown: "1200",
          modal: "1501",
          modalOverlay: "1500"
        }
      },
      screens: {
        sm: `${he.sm}px`,
        md: `${he.md}px`,
        lg: `${he.lg}px`,
        xl: `${he.xl}px`,
        "2xl": `${he["2xl"]}px`
      }
    }
  }
), u0 = {
  content: [],
  plugins: [Gv]
}, f0 = () => jt(Hn);
export {
  Wc as Accordion,
  Qi as ActionList,
  Qv as Badge,
  He as Button,
  Hu as Checkbox,
  Dt as FilterBadge,
  Q as Icon,
  st as IconButton,
  ns as InputField,
  s0 as LanguagePicker,
  os as Link,
  r0 as Modal,
  ws as ProgressBar,
  Rp as RadioGroup,
  Pv as Slider,
  lp as Stepper,
  d0 as TableFilterHeader,
  sp as Toast,
  c0 as UikitProvider,
  Gv as uiKitPlugin,
  u0 as uiKitPreset,
  qu as useBreakpoints,
  rs as useStepperControl,
  f0 as useToast
};
//# sourceMappingURL=ui-kit.es.js.map
