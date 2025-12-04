import { __commonJS } from "./chunk-Ye9CTm_R.js";
import { require_react } from "./react-BqPUdaMv.js";

//#region node_modules/react-lazy-load-image-component/build/index.js
var require_build = /* @__PURE__ */ __commonJS({ "node_modules/react-lazy-load-image-component/build/index.js": ((exports, module) => {
	(() => {
		var e = {
			296: (e$1, t$1, r$1) => {
				var o$1 = /^\s+|\s+$/g, n = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, c = /^0o[0-7]+$/i, u = parseInt, s = "object" == typeof r$1.g && r$1.g && r$1.g.Object === Object && r$1.g, l = "object" == typeof self && self && self.Object === Object && self, a = s || l || Function("return this")(), f = Object.prototype.toString, p = Math.max, y = Math.min, b = function() {
					return a.Date.now();
				};
				function d(e$2) {
					var t$2 = typeof e$2;
					return !!e$2 && ("object" == t$2 || "function" == t$2);
				}
				function h(e$2) {
					if ("number" == typeof e$2) return e$2;
					if (function(e$3) {
						return "symbol" == typeof e$3 || function(e$4) {
							return !!e$4 && "object" == typeof e$4;
						}(e$3) && "[object Symbol]" == f.call(e$3);
					}(e$2)) return NaN;
					if (d(e$2)) {
						var t$2 = "function" == typeof e$2.valueOf ? e$2.valueOf() : e$2;
						e$2 = d(t$2) ? t$2 + "" : t$2;
					}
					if ("string" != typeof e$2) return 0 === e$2 ? e$2 : +e$2;
					e$2 = e$2.replace(o$1, "");
					var r$2 = i.test(e$2);
					return r$2 || c.test(e$2) ? u(e$2.slice(2), r$2 ? 2 : 8) : n.test(e$2) ? NaN : +e$2;
				}
				e$1.exports = function(e$2, t$2, r$2) {
					var o$2, n$1, i$1, c$1, u$1, s$1, l$1 = 0, a$1 = !1, f$1 = !1, v = !0;
					if ("function" != typeof e$2) throw new TypeError("Expected a function");
					function m(t$3) {
						var r$3 = o$2, i$2 = n$1;
						return o$2 = n$1 = void 0, l$1 = t$3, c$1 = e$2.apply(i$2, r$3);
					}
					function O(e$3) {
						var r$3 = e$3 - s$1;
						return void 0 === s$1 || r$3 >= t$2 || r$3 < 0 || f$1 && e$3 - l$1 >= i$1;
					}
					function w() {
						var e$3 = b();
						if (O(e$3)) return g(e$3);
						u$1 = setTimeout(w, function(e$4) {
							var r$3 = t$2 - (e$4 - s$1);
							return f$1 ? y(r$3, i$1 - (e$4 - l$1)) : r$3;
						}(e$3));
					}
					function g(e$3) {
						return u$1 = void 0, v && o$2 ? m(e$3) : (o$2 = n$1 = void 0, c$1);
					}
					function P() {
						var e$3 = b(), r$3 = O(e$3);
						if (o$2 = arguments, n$1 = this, s$1 = e$3, r$3) {
							if (void 0 === u$1) return function(e$4) {
								return l$1 = e$4, u$1 = setTimeout(w, t$2), a$1 ? m(e$4) : c$1;
							}(s$1);
							if (f$1) return u$1 = setTimeout(w, t$2), m(s$1);
						}
						return void 0 === u$1 && (u$1 = setTimeout(w, t$2)), c$1;
					}
					return t$2 = h(t$2) || 0, d(r$2) && (a$1 = !!r$2.leading, i$1 = (f$1 = "maxWait" in r$2) ? p(h(r$2.maxWait) || 0, t$2) : i$1, v = "trailing" in r$2 ? !!r$2.trailing : v), P.cancel = function() {
						void 0 !== u$1 && clearTimeout(u$1), l$1 = 0, o$2 = s$1 = n$1 = u$1 = void 0;
					}, P.flush = function() {
						return void 0 === u$1 ? c$1 : g(b());
					}, P;
				};
			},
			96: (e$1, t$1, r$1) => {
				var o$1 = "Expected a function", n = NaN, i = "[object Symbol]", c = /^\s+|\s+$/g, u = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, l = /^0o[0-7]+$/i, a = parseInt, f = "object" == typeof r$1.g && r$1.g && r$1.g.Object === Object && r$1.g, p = "object" == typeof self && self && self.Object === Object && self, y = f || p || Function("return this")(), b = Object.prototype.toString, d = Math.max, h = Math.min, v = function() {
					return y.Date.now();
				};
				function m(e$2) {
					var t$2 = typeof e$2;
					return !!e$2 && ("object" == t$2 || "function" == t$2);
				}
				function O(e$2) {
					if ("number" == typeof e$2) return e$2;
					if (function(e$3) {
						return "symbol" == typeof e$3 || function(e$4) {
							return !!e$4 && "object" == typeof e$4;
						}(e$3) && b.call(e$3) == i;
					}(e$2)) return n;
					if (m(e$2)) {
						var t$2 = "function" == typeof e$2.valueOf ? e$2.valueOf() : e$2;
						e$2 = m(t$2) ? t$2 + "" : t$2;
					}
					if ("string" != typeof e$2) return 0 === e$2 ? e$2 : +e$2;
					e$2 = e$2.replace(c, "");
					var r$2 = s.test(e$2);
					return r$2 || l.test(e$2) ? a(e$2.slice(2), r$2 ? 2 : 8) : u.test(e$2) ? n : +e$2;
				}
				e$1.exports = function(e$2, t$2, r$2) {
					var n$1 = !0, i$1 = !0;
					if ("function" != typeof e$2) throw new TypeError(o$1);
					return m(r$2) && (n$1 = "leading" in r$2 ? !!r$2.leading : n$1, i$1 = "trailing" in r$2 ? !!r$2.trailing : i$1), function(e$3, t$3, r$3) {
						var n$2, i$2, c$1, u$1, s$1, l$1, a$1 = 0, f$1 = !1, p$1 = !1, y$1 = !0;
						if ("function" != typeof e$3) throw new TypeError(o$1);
						function b$1(t$4) {
							var r$4 = n$2, o$2 = i$2;
							return n$2 = i$2 = void 0, a$1 = t$4, u$1 = e$3.apply(o$2, r$4);
						}
						function w(e$4) {
							var r$4 = e$4 - l$1;
							return void 0 === l$1 || r$4 >= t$3 || r$4 < 0 || p$1 && e$4 - a$1 >= c$1;
						}
						function g() {
							var e$4 = v();
							if (w(e$4)) return P(e$4);
							s$1 = setTimeout(g, function(e$5) {
								var r$4 = t$3 - (e$5 - l$1);
								return p$1 ? h(r$4, c$1 - (e$5 - a$1)) : r$4;
							}(e$4));
						}
						function P(e$4) {
							return s$1 = void 0, y$1 && n$2 ? b$1(e$4) : (n$2 = i$2 = void 0, u$1);
						}
						function j() {
							var e$4 = v(), r$4 = w(e$4);
							if (n$2 = arguments, i$2 = this, l$1 = e$4, r$4) {
								if (void 0 === s$1) return function(e$5) {
									return a$1 = e$5, s$1 = setTimeout(g, t$3), f$1 ? b$1(e$5) : u$1;
								}(l$1);
								if (p$1) return s$1 = setTimeout(g, t$3), b$1(l$1);
							}
							return void 0 === s$1 && (s$1 = setTimeout(g, t$3)), u$1;
						}
						return t$3 = O(t$3) || 0, m(r$3) && (f$1 = !!r$3.leading, c$1 = (p$1 = "maxWait" in r$3) ? d(O(r$3.maxWait) || 0, t$3) : c$1, y$1 = "trailing" in r$3 ? !!r$3.trailing : y$1), j.cancel = function() {
							void 0 !== s$1 && clearTimeout(s$1), a$1 = 0, n$2 = l$1 = i$2 = s$1 = void 0;
						}, j.flush = function() {
							return void 0 === s$1 ? u$1 : P(v());
						}, j;
					}(e$2, t$2, {
						leading: n$1,
						maxWait: t$2,
						trailing: i$1
					});
				};
			},
			703: (e$1, t$1, r$1) => {
				var o$1 = r$1(414);
				function n() {}
				function i() {}
				i.resetWarningCache = n, e$1.exports = function() {
					function e$2(e$3, t$3, r$3, n$1, i$1, c) {
						if (c !== o$1) {
							var u = /* @__PURE__ */ new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
							throw u.name = "Invariant Violation", u;
						}
					}
					function t$2() {
						return e$2;
					}
					e$2.isRequired = e$2;
					var r$2 = {
						array: e$2,
						bigint: e$2,
						bool: e$2,
						func: e$2,
						number: e$2,
						object: e$2,
						string: e$2,
						symbol: e$2,
						any: e$2,
						arrayOf: t$2,
						element: e$2,
						elementType: e$2,
						instanceOf: t$2,
						node: e$2,
						objectOf: t$2,
						oneOf: t$2,
						oneOfType: t$2,
						shape: t$2,
						exact: t$2,
						checkPropTypes: i,
						resetWarningCache: n
					};
					return r$2.PropTypes = r$2, r$2;
				};
			},
			697: (e$1, t$1, r$1) => {
				e$1.exports = r$1(703)();
			},
			414: (e$1) => {
				e$1.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
			}
		}, t = {};
		function r(o$1) {
			var n = t[o$1];
			if (void 0 !== n) return n.exports;
			var i = t[o$1] = { exports: {} };
			return e[o$1](i, i.exports, r), i.exports;
		}
		r.n = (e$1) => {
			var t$1 = e$1 && e$1.__esModule ? () => e$1.default : () => e$1;
			return r.d(t$1, { a: t$1 }), t$1;
		}, r.d = (e$1, t$1) => {
			for (var o$1 in t$1) r.o(t$1, o$1) && !r.o(e$1, o$1) && Object.defineProperty(e$1, o$1, {
				enumerable: !0,
				get: t$1[o$1]
			});
		}, r.g = function() {
			if ("object" == typeof globalThis) return globalThis;
			try {
				return this || new Function("return this")();
			} catch (e$1) {
				if ("object" == typeof window) return window;
			}
		}(), r.o = (e$1, t$1) => Object.prototype.hasOwnProperty.call(e$1, t$1), r.r = (e$1) => {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e$1, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e$1, "__esModule", { value: !0 });
		};
		var o = {};
		(() => {
			r.r(o), r.d(o, {
				LazyLoadComponent: () => Y,
				LazyLoadImage: () => ne,
				trackWindowScroll: () => D
			});
			const e$1 = require_react();
			var t$1 = r.n(e$1), n = r(697);
			function i() {
				return "undefined" != typeof window && "IntersectionObserver" in window && "isIntersecting" in window.IntersectionObserverEntry.prototype;
			}
			function c(e$2) {
				return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e$3) {
					return typeof e$3;
				} : function(e$3) {
					return e$3 && "function" == typeof Symbol && e$3.constructor === Symbol && e$3 !== Symbol.prototype ? "symbol" : typeof e$3;
				}, c(e$2);
			}
			function u(e$2, t$2) {
				var r$1 = Object.keys(e$2);
				if (Object.getOwnPropertySymbols) {
					var o$1 = Object.getOwnPropertySymbols(e$2);
					t$2 && (o$1 = o$1.filter((function(t$3) {
						return Object.getOwnPropertyDescriptor(e$2, t$3).enumerable;
					}))), r$1.push.apply(r$1, o$1);
				}
				return r$1;
			}
			function s(e$2, t$2, r$1) {
				return (t$2 = a(t$2)) in e$2 ? Object.defineProperty(e$2, t$2, {
					value: r$1,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e$2[t$2] = r$1, e$2;
			}
			function l(e$2, t$2) {
				for (var r$1 = 0; r$1 < t$2.length; r$1++) {
					var o$1 = t$2[r$1];
					o$1.enumerable = o$1.enumerable || !1, o$1.configurable = !0, "value" in o$1 && (o$1.writable = !0), Object.defineProperty(e$2, a(o$1.key), o$1);
				}
			}
			function a(e$2) {
				var t$2 = function(e$3, t$3) {
					if ("object" !== c(e$3) || null === e$3) return e$3;
					var r$1 = e$3[Symbol.toPrimitive];
					if (void 0 !== r$1) {
						var o$1 = r$1.call(e$3, "string");
						if ("object" !== c(o$1)) return o$1;
						throw new TypeError("@@toPrimitive must return a primitive value.");
					}
					return String(e$3);
				}(e$2);
				return "symbol" === c(t$2) ? t$2 : String(t$2);
			}
			function f(e$2, t$2) {
				return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e$3, t$3) {
					return e$3.__proto__ = t$3, e$3;
				}, f(e$2, t$2);
			}
			function p(e$2) {
				return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e$3) {
					return e$3.__proto__ || Object.getPrototypeOf(e$3);
				}, p(e$2);
			}
			var y = function(e$2) {
				e$2.forEach((function(e$3) {
					e$3.isIntersecting && e$3.target.onVisible();
				}));
			}, b = {}, d = function(e$2) {
				(function(e$3, t$2) {
					if ("function" != typeof t$2 && null !== t$2) throw new TypeError("Super expression must either be null or a function");
					e$3.prototype = Object.create(t$2 && t$2.prototype, { constructor: {
						value: e$3,
						writable: !0,
						configurable: !0
					} }), Object.defineProperty(e$3, "prototype", { writable: !1 }), t$2 && f(e$3, t$2);
				})(h$1, e$2);
				var r$1, o$1, n$1, a$1, d$1 = (n$1 = h$1, a$1 = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
					} catch (e$3) {
						return !1;
					}
				}(), function() {
					var e$3, t$2 = p(n$1);
					if (a$1) {
						var r$2 = p(this).constructor;
						e$3 = Reflect.construct(t$2, arguments, r$2);
					} else e$3 = t$2.apply(this, arguments);
					return function(e$4, t$3) {
						if (t$3 && ("object" === c(t$3) || "function" == typeof t$3)) return t$3;
						if (void 0 !== t$3) throw new TypeError("Derived constructors may only return object or undefined");
						return function(e$5) {
							if (void 0 === e$5) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return e$5;
						}(e$4);
					}(this, e$3);
				});
				function h$1(e$3) {
					var t$2;
					if (function(e$4, t$3) {
						if (!(e$4 instanceof t$3)) throw new TypeError("Cannot call a class as a function");
					}(this, h$1), (t$2 = d$1.call(this, e$3)).supportsObserver = !e$3.scrollPosition && e$3.useIntersectionObserver && i(), t$2.supportsObserver) t$2.observer = function(e$4) {
						return b[e$4] = b[e$4] || new IntersectionObserver(y, { rootMargin: e$4 + "px" }), b[e$4];
					}(e$3.threshold);
					return t$2;
				}
				return r$1 = h$1, o$1 = [
					{
						key: "componentDidMount",
						value: function() {
							this.placeholder && this.observer && (this.placeholder.onVisible = this.props.onVisible, this.observer.observe(this.placeholder)), this.supportsObserver || this.updateVisibility();
						}
					},
					{
						key: "componentWillUnmount",
						value: function() {
							this.observer && this.placeholder && this.observer.unobserve(this.placeholder);
						}
					},
					{
						key: "componentDidUpdate",
						value: function() {
							this.supportsObserver || this.updateVisibility();
						}
					},
					{
						key: "getPlaceholderBoundingBox",
						value: function() {
							var e$3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.scrollPosition, t$2 = this.placeholder.getBoundingClientRect(), r$2 = this.placeholder.style, o$2 = parseInt(r$2.getPropertyValue("margin-left"), 10) || 0, n$2 = parseInt(r$2.getPropertyValue("margin-top"), 10) || 0;
							return {
								bottom: e$3.y + t$2.bottom + n$2,
								left: e$3.x + t$2.left + o$2,
								right: e$3.x + t$2.right + o$2,
								top: e$3.y + t$2.top + n$2
							};
						}
					},
					{
						key: "isPlaceholderInViewport",
						value: function() {
							if ("undefined" == typeof window || !this.placeholder) return !1;
							var e$3 = this.props, t$2 = e$3.scrollPosition, r$2 = e$3.threshold, o$2 = this.getPlaceholderBoundingBox(t$2), n$2 = t$2.y + window.innerHeight, i$1 = t$2.x, c$1 = t$2.x + window.innerWidth, u$1 = t$2.y;
							return Boolean(u$1 - r$2 <= o$2.bottom && n$2 + r$2 >= o$2.top && i$1 - r$2 <= o$2.right && c$1 + r$2 >= o$2.left);
						}
					},
					{
						key: "updateVisibility",
						value: function() {
							this.isPlaceholderInViewport() && this.props.onVisible();
						}
					},
					{
						key: "render",
						value: function() {
							var e$3 = this, r$2 = this.props, o$2 = r$2.className, n$2 = r$2.height, i$1 = r$2.placeholder, c$1 = r$2.style, l$1 = r$2.width;
							if (i$1 && "function" != typeof i$1.type) return t$1().cloneElement(i$1, { ref: function(t$2) {
								return e$3.placeholder = t$2;
							} });
							var a$2 = function(e$4) {
								for (var t$2 = 1; t$2 < arguments.length; t$2++) {
									var r$3 = null != arguments[t$2] ? arguments[t$2] : {};
									t$2 % 2 ? u(Object(r$3), !0).forEach((function(t$3) {
										s(e$4, t$3, r$3[t$3]);
									})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e$4, Object.getOwnPropertyDescriptors(r$3)) : u(Object(r$3)).forEach((function(t$3) {
										Object.defineProperty(e$4, t$3, Object.getOwnPropertyDescriptor(r$3, t$3));
									}));
								}
								return e$4;
							}({ display: "inline-block" }, c$1);
							return void 0 !== l$1 && (a$2.width = l$1), void 0 !== n$2 && (a$2.height = n$2), t$1().createElement("span", {
								className: o$2,
								ref: function(t$2) {
									return e$3.placeholder = t$2;
								},
								style: a$2
							}, i$1);
						}
					}
				], o$1 && l(r$1.prototype, o$1), Object.defineProperty(r$1, "prototype", { writable: !1 }), h$1;
			}(t$1().Component);
			d.propTypes = {
				onVisible: n.PropTypes.func.isRequired,
				className: n.PropTypes.string,
				height: n.PropTypes.oneOfType([n.PropTypes.number, n.PropTypes.string]),
				placeholder: n.PropTypes.element,
				threshold: n.PropTypes.number,
				useIntersectionObserver: n.PropTypes.bool,
				scrollPosition: n.PropTypes.shape({
					x: n.PropTypes.number.isRequired,
					y: n.PropTypes.number.isRequired
				}),
				width: n.PropTypes.oneOfType([n.PropTypes.number, n.PropTypes.string])
			}, d.defaultProps = {
				className: "",
				placeholder: null,
				threshold: 100,
				useIntersectionObserver: !0
			};
			const h = d;
			var v = r(296), m = r.n(v), O = r(96), w = r.n(O), g = function(e$2) {
				var t$2 = getComputedStyle(e$2, null);
				return t$2.getPropertyValue("overflow") + t$2.getPropertyValue("overflow-y") + t$2.getPropertyValue("overflow-x");
			};
			const P = function(e$2) {
				if (!(e$2 instanceof HTMLElement)) return window;
				for (var t$2 = e$2; t$2 && t$2 instanceof HTMLElement;) {
					if (/(scroll|auto)/.test(g(t$2))) return t$2;
					t$2 = t$2.parentNode;
				}
				return window;
			};
			function j(e$2) {
				return j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e$3) {
					return typeof e$3;
				} : function(e$3) {
					return e$3 && "function" == typeof Symbol && e$3.constructor === Symbol && e$3 !== Symbol.prototype ? "symbol" : typeof e$3;
				}, j(e$2);
			}
			var T = ["delayMethod", "delayTime"];
			function S() {
				return S = Object.assign ? Object.assign.bind() : function(e$2) {
					for (var t$2 = 1; t$2 < arguments.length; t$2++) {
						var r$1 = arguments[t$2];
						for (var o$1 in r$1) Object.prototype.hasOwnProperty.call(r$1, o$1) && (e$2[o$1] = r$1[o$1]);
					}
					return e$2;
				}, S.apply(this, arguments);
			}
			function E(e$2, t$2) {
				for (var r$1 = 0; r$1 < t$2.length; r$1++) {
					var o$1 = t$2[r$1];
					o$1.enumerable = o$1.enumerable || !1, o$1.configurable = !0, "value" in o$1 && (o$1.writable = !0), Object.defineProperty(e$2, (n$1 = function(e$3, t$3) {
						if ("object" !== j(e$3) || null === e$3) return e$3;
						var r$2 = e$3[Symbol.toPrimitive];
						if (void 0 !== r$2) {
							var o$2 = r$2.call(e$3, "string");
							if ("object" !== j(o$2)) return o$2;
							throw new TypeError("@@toPrimitive must return a primitive value.");
						}
						return String(e$3);
					}(o$1.key), "symbol" === j(n$1) ? n$1 : String(n$1)), o$1);
				}
				var n$1;
			}
			function L(e$2, t$2) {
				return L = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e$3, t$3) {
					return e$3.__proto__ = t$3, e$3;
				}, L(e$2, t$2);
			}
			function _(e$2, t$2) {
				if (t$2 && ("object" === j(t$2) || "function" == typeof t$2)) return t$2;
				if (void 0 !== t$2) throw new TypeError("Derived constructors may only return object or undefined");
				return I(e$2);
			}
			function I(e$2) {
				if (void 0 === e$2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e$2;
			}
			function x(e$2) {
				return x = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e$3) {
					return e$3.__proto__ || Object.getPrototypeOf(e$3);
				}, x(e$2);
			}
			var R = function() {
				return "undefined" == typeof window ? 0 : window.scrollX || window.pageXOffset;
			}, k = function() {
				return "undefined" == typeof window ? 0 : window.scrollY || window.pageYOffset;
			};
			const D = function(e$2) {
				var r$1 = function(r$2) {
					(function(e$3, t$2) {
						if ("function" != typeof t$2 && null !== t$2) throw new TypeError("Super expression must either be null or a function");
						e$3.prototype = Object.create(t$2 && t$2.prototype, { constructor: {
							value: e$3,
							writable: !0,
							configurable: !0
						} }), Object.defineProperty(e$3, "prototype", { writable: !1 }), t$2 && L(e$3, t$2);
					})(l$1, r$2);
					var o$1, n$1, c$1, u$1, s$1 = (c$1 = l$1, u$1 = function() {
						if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
						if (Reflect.construct.sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
						} catch (e$3) {
							return !1;
						}
					}(), function() {
						var e$3, t$2 = x(c$1);
						if (u$1) {
							var r$3 = x(this).constructor;
							e$3 = Reflect.construct(t$2, arguments, r$3);
						} else e$3 = t$2.apply(this, arguments);
						return _(this, e$3);
					});
					function l$1(e$3) {
						var r$3;
						if (function(e$4, t$2) {
							if (!(e$4 instanceof t$2)) throw new TypeError("Cannot call a class as a function");
						}(this, l$1), (r$3 = s$1.call(this, e$3)).useIntersectionObserver = e$3.useIntersectionObserver && i(), r$3.useIntersectionObserver) return _(r$3);
						var o$2 = r$3.onChangeScroll.bind(I(r$3));
						return "debounce" === e$3.delayMethod ? r$3.delayedScroll = m()(o$2, e$3.delayTime) : "throttle" === e$3.delayMethod && (r$3.delayedScroll = w()(o$2, e$3.delayTime)), r$3.state = { scrollPosition: {
							x: R(),
							y: k()
						} }, r$3.baseComponentRef = t$1().createRef(), r$3;
					}
					return o$1 = l$1, (n$1 = [
						{
							key: "componentDidMount",
							value: function() {
								this.addListeners();
							}
						},
						{
							key: "componentWillUnmount",
							value: function() {
								this.removeListeners();
							}
						},
						{
							key: "componentDidUpdate",
							value: function() {
								"undefined" == typeof window || this.useIntersectionObserver || P(this.baseComponentRef.current) !== this.scrollElement && (this.removeListeners(), this.addListeners());
							}
						},
						{
							key: "addListeners",
							value: function() {
								"undefined" == typeof window || this.useIntersectionObserver || (this.scrollElement = P(this.baseComponentRef.current), this.scrollElement.addEventListener("scroll", this.delayedScroll, { passive: !0 }), window.addEventListener("resize", this.delayedScroll, { passive: !0 }), this.scrollElement !== window && window.addEventListener("scroll", this.delayedScroll, { passive: !0 }));
							}
						},
						{
							key: "removeListeners",
							value: function() {
								"undefined" == typeof window || this.useIntersectionObserver || (this.scrollElement.removeEventListener("scroll", this.delayedScroll), window.removeEventListener("resize", this.delayedScroll), this.scrollElement !== window && window.removeEventListener("scroll", this.delayedScroll));
							}
						},
						{
							key: "onChangeScroll",
							value: function() {
								this.useIntersectionObserver || this.setState({ scrollPosition: {
									x: R(),
									y: k()
								} });
							}
						},
						{
							key: "render",
							value: function() {
								var r$3 = this.props, o$2 = (r$3.delayMethod, r$3.delayTime, function(e$3, t$2) {
									if (null == e$3) return {};
									var r$4, o$3, n$3 = function(e$4, t$3) {
										if (null == e$4) return {};
										var r$5, o$4, n$4 = {}, i$2 = Object.keys(e$4);
										for (o$4 = 0; o$4 < i$2.length; o$4++) r$5 = i$2[o$4], t$3.indexOf(r$5) >= 0 || (n$4[r$5] = e$4[r$5]);
										return n$4;
									}(e$3, t$2);
									if (Object.getOwnPropertySymbols) {
										var i$1 = Object.getOwnPropertySymbols(e$3);
										for (o$3 = 0; o$3 < i$1.length; o$3++) r$4 = i$1[o$3], t$2.indexOf(r$4) >= 0 || Object.prototype.propertyIsEnumerable.call(e$3, r$4) && (n$3[r$4] = e$3[r$4]);
									}
									return n$3;
								}(r$3, T)), n$2 = this.useIntersectionObserver ? null : this.state.scrollPosition;
								return t$1().createElement(e$2, S({
									forwardRef: this.baseComponentRef,
									scrollPosition: n$2
								}, o$2));
							}
						}
					]) && E(o$1.prototype, n$1), Object.defineProperty(o$1, "prototype", { writable: !1 }), l$1;
				}(t$1().Component);
				return r$1.propTypes = {
					delayMethod: n.PropTypes.oneOf(["debounce", "throttle"]),
					delayTime: n.PropTypes.number,
					useIntersectionObserver: n.PropTypes.bool
				}, r$1.defaultProps = {
					delayMethod: "throttle",
					delayTime: 300,
					useIntersectionObserver: !0
				}, r$1;
			};
			function C(e$2) {
				return C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e$3) {
					return typeof e$3;
				} : function(e$3) {
					return e$3 && "function" == typeof Symbol && e$3.constructor === Symbol && e$3 !== Symbol.prototype ? "symbol" : typeof e$3;
				}, C(e$2);
			}
			function B(e$2, t$2) {
				for (var r$1 = 0; r$1 < t$2.length; r$1++) {
					var o$1 = t$2[r$1];
					o$1.enumerable = o$1.enumerable || !1, o$1.configurable = !0, "value" in o$1 && (o$1.writable = !0), Object.defineProperty(e$2, (n$1 = function(e$3, t$3) {
						if ("object" !== C(e$3) || null === e$3) return e$3;
						var r$2 = e$3[Symbol.toPrimitive];
						if (void 0 !== r$2) {
							var o$2 = r$2.call(e$3, "string");
							if ("object" !== C(o$2)) return o$2;
							throw new TypeError("@@toPrimitive must return a primitive value.");
						}
						return String(e$3);
					}(o$1.key), "symbol" === C(n$1) ? n$1 : String(n$1)), o$1);
				}
				var n$1;
			}
			function M(e$2, t$2) {
				return M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e$3, t$3) {
					return e$3.__proto__ = t$3, e$3;
				}, M(e$2, t$2);
			}
			function N(e$2) {
				return N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e$3) {
					return e$3.__proto__ || Object.getPrototypeOf(e$3);
				}, N(e$2);
			}
			var V = function(e$2) {
				(function(e$3, t$2) {
					if ("function" != typeof t$2 && null !== t$2) throw new TypeError("Super expression must either be null or a function");
					e$3.prototype = Object.create(t$2 && t$2.prototype, { constructor: {
						value: e$3,
						writable: !0,
						configurable: !0
					} }), Object.defineProperty(e$3, "prototype", { writable: !1 }), t$2 && M(e$3, t$2);
				})(u$1, e$2);
				var r$1, o$1, n$1, i$1, c$1 = (n$1 = u$1, i$1 = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
					} catch (e$3) {
						return !1;
					}
				}(), function() {
					var e$3, t$2 = N(n$1);
					if (i$1) {
						var r$2 = N(this).constructor;
						e$3 = Reflect.construct(t$2, arguments, r$2);
					} else e$3 = t$2.apply(this, arguments);
					return function(e$4, t$3) {
						if (t$3 && ("object" === C(t$3) || "function" == typeof t$3)) return t$3;
						if (void 0 !== t$3) throw new TypeError("Derived constructors may only return object or undefined");
						return function(e$5) {
							if (void 0 === e$5) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return e$5;
						}(e$4);
					}(this, e$3);
				});
				function u$1(e$3) {
					return function(e$4, t$2) {
						if (!(e$4 instanceof t$2)) throw new TypeError("Cannot call a class as a function");
					}(this, u$1), c$1.call(this, e$3);
				}
				return r$1 = u$1, (o$1 = [{
					key: "render",
					value: function() {
						return t$1().createElement(h, this.props);
					}
				}]) && B(r$1.prototype, o$1), Object.defineProperty(r$1, "prototype", { writable: !1 }), u$1;
			}(t$1().Component);
			const W = D(V);
			function z(e$2) {
				return z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e$3) {
					return typeof e$3;
				} : function(e$3) {
					return e$3 && "function" == typeof Symbol && e$3.constructor === Symbol && e$3 !== Symbol.prototype ? "symbol" : typeof e$3;
				}, z(e$2);
			}
			function $(e$2, t$2) {
				for (var r$1 = 0; r$1 < t$2.length; r$1++) {
					var o$1 = t$2[r$1];
					o$1.enumerable = o$1.enumerable || !1, o$1.configurable = !0, "value" in o$1 && (o$1.writable = !0), Object.defineProperty(e$2, (n$1 = function(e$3, t$3) {
						if ("object" !== z(e$3) || null === e$3) return e$3;
						var r$2 = e$3[Symbol.toPrimitive];
						if (void 0 !== r$2) {
							var o$2 = r$2.call(e$3, "string");
							if ("object" !== z(o$2)) return o$2;
							throw new TypeError("@@toPrimitive must return a primitive value.");
						}
						return String(e$3);
					}(o$1.key), "symbol" === z(n$1) ? n$1 : String(n$1)), o$1);
				}
				var n$1;
			}
			function U(e$2, t$2) {
				return U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e$3, t$3) {
					return e$3.__proto__ = t$3, e$3;
				}, U(e$2, t$2);
			}
			function F(e$2) {
				if (void 0 === e$2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e$2;
			}
			function q(e$2) {
				return q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e$3) {
					return e$3.__proto__ || Object.getPrototypeOf(e$3);
				}, q(e$2);
			}
			var H = function(e$2) {
				(function(e$3, t$2) {
					if ("function" != typeof t$2 && null !== t$2) throw new TypeError("Super expression must either be null or a function");
					e$3.prototype = Object.create(t$2 && t$2.prototype, { constructor: {
						value: e$3,
						writable: !0,
						configurable: !0
					} }), Object.defineProperty(e$3, "prototype", { writable: !1 }), t$2 && U(e$3, t$2);
				})(s$1, e$2);
				var r$1, o$1, n$1, c$1, u$1 = (n$1 = s$1, c$1 = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
					} catch (e$3) {
						return !1;
					}
				}(), function() {
					var e$3, t$2 = q(n$1);
					if (c$1) {
						var r$2 = q(this).constructor;
						e$3 = Reflect.construct(t$2, arguments, r$2);
					} else e$3 = t$2.apply(this, arguments);
					return function(e$4, t$3) {
						if (t$3 && ("object" === z(t$3) || "function" == typeof t$3)) return t$3;
						if (void 0 !== t$3) throw new TypeError("Derived constructors may only return object or undefined");
						return F(e$4);
					}(this, e$3);
				});
				function s$1(e$3) {
					var t$2;
					(function(e$4, t$3) {
						if (!(e$4 instanceof t$3)) throw new TypeError("Cannot call a class as a function");
					})(this, s$1), t$2 = u$1.call(this, e$3);
					var r$2 = e$3.afterLoad, o$2 = e$3.beforeLoad, n$2 = e$3.scrollPosition, i$1 = e$3.visibleByDefault;
					return t$2.state = { visible: i$1 }, i$1 && (o$2(), r$2()), t$2.onVisible = t$2.onVisible.bind(F(t$2)), t$2.isScrollTracked = Boolean(n$2 && Number.isFinite(n$2.x) && n$2.x >= 0 && Number.isFinite(n$2.y) && n$2.y >= 0), t$2;
				}
				return r$1 = s$1, (o$1 = [
					{
						key: "componentDidUpdate",
						value: function(e$3, t$2) {
							t$2.visible !== this.state.visible && this.props.afterLoad();
						}
					},
					{
						key: "onVisible",
						value: function() {
							this.props.beforeLoad(), this.setState({ visible: !0 });
						}
					},
					{
						key: "render",
						value: function() {
							if (this.state.visible) return this.props.children;
							var e$3 = this.props, r$2 = e$3.className, o$2 = e$3.delayMethod, n$2 = e$3.delayTime, c$2 = e$3.height, u$2 = e$3.placeholder, s$2 = e$3.scrollPosition, l$1 = e$3.style, a$1 = e$3.threshold, f$1 = e$3.useIntersectionObserver, p$1 = e$3.width;
							return this.isScrollTracked || f$1 && i() ? t$1().createElement(h, {
								className: r$2,
								height: c$2,
								onVisible: this.onVisible,
								placeholder: u$2,
								scrollPosition: s$2,
								style: l$1,
								threshold: a$1,
								useIntersectionObserver: f$1,
								width: p$1
							}) : t$1().createElement(W, {
								className: r$2,
								delayMethod: o$2,
								delayTime: n$2,
								height: c$2,
								onVisible: this.onVisible,
								placeholder: u$2,
								style: l$1,
								threshold: a$1,
								width: p$1
							});
						}
					}
				]) && $(r$1.prototype, o$1), Object.defineProperty(r$1, "prototype", { writable: !1 }), s$1;
			}(t$1().Component);
			H.propTypes = {
				afterLoad: n.PropTypes.func,
				beforeLoad: n.PropTypes.func,
				useIntersectionObserver: n.PropTypes.bool,
				visibleByDefault: n.PropTypes.bool
			}, H.defaultProps = {
				afterLoad: function() {
					return {};
				},
				beforeLoad: function() {
					return {};
				},
				useIntersectionObserver: !0,
				visibleByDefault: !1
			};
			const Y = H;
			function X(e$2) {
				return X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e$3) {
					return typeof e$3;
				} : function(e$3) {
					return e$3 && "function" == typeof Symbol && e$3.constructor === Symbol && e$3 !== Symbol.prototype ? "symbol" : typeof e$3;
				}, X(e$2);
			}
			var A = [
				"afterLoad",
				"beforeLoad",
				"delayMethod",
				"delayTime",
				"effect",
				"placeholder",
				"placeholderSrc",
				"scrollPosition",
				"threshold",
				"useIntersectionObserver",
				"visibleByDefault",
				"wrapperClassName",
				"wrapperProps"
			];
			function G(e$2, t$2) {
				var r$1 = Object.keys(e$2);
				if (Object.getOwnPropertySymbols) {
					var o$1 = Object.getOwnPropertySymbols(e$2);
					t$2 && (o$1 = o$1.filter((function(t$3) {
						return Object.getOwnPropertyDescriptor(e$2, t$3).enumerable;
					}))), r$1.push.apply(r$1, o$1);
				}
				return r$1;
			}
			function J(e$2) {
				for (var t$2 = 1; t$2 < arguments.length; t$2++) {
					var r$1 = null != arguments[t$2] ? arguments[t$2] : {};
					t$2 % 2 ? G(Object(r$1), !0).forEach((function(t$3) {
						K(e$2, t$3, r$1[t$3]);
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e$2, Object.getOwnPropertyDescriptors(r$1)) : G(Object(r$1)).forEach((function(t$3) {
						Object.defineProperty(e$2, t$3, Object.getOwnPropertyDescriptor(r$1, t$3));
					}));
				}
				return e$2;
			}
			function K(e$2, t$2, r$1) {
				return (t$2 = ee(t$2)) in e$2 ? Object.defineProperty(e$2, t$2, {
					value: r$1,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e$2[t$2] = r$1, e$2;
			}
			function Q() {
				return Q = Object.assign ? Object.assign.bind() : function(e$2) {
					for (var t$2 = 1; t$2 < arguments.length; t$2++) {
						var r$1 = arguments[t$2];
						for (var o$1 in r$1) Object.prototype.hasOwnProperty.call(r$1, o$1) && (e$2[o$1] = r$1[o$1]);
					}
					return e$2;
				}, Q.apply(this, arguments);
			}
			function Z(e$2, t$2) {
				for (var r$1 = 0; r$1 < t$2.length; r$1++) {
					var o$1 = t$2[r$1];
					o$1.enumerable = o$1.enumerable || !1, o$1.configurable = !0, "value" in o$1 && (o$1.writable = !0), Object.defineProperty(e$2, ee(o$1.key), o$1);
				}
			}
			function ee(e$2) {
				var t$2 = function(e$3, t$3) {
					if ("object" !== X(e$3) || null === e$3) return e$3;
					var r$1 = e$3[Symbol.toPrimitive];
					if (void 0 !== r$1) {
						var o$1 = r$1.call(e$3, "string");
						if ("object" !== X(o$1)) return o$1;
						throw new TypeError("@@toPrimitive must return a primitive value.");
					}
					return String(e$3);
				}(e$2);
				return "symbol" === X(t$2) ? t$2 : String(t$2);
			}
			function te(e$2, t$2) {
				return te = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e$3, t$3) {
					return e$3.__proto__ = t$3, e$3;
				}, te(e$2, t$2);
			}
			function re(e$2) {
				return re = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e$3) {
					return e$3.__proto__ || Object.getPrototypeOf(e$3);
				}, re(e$2);
			}
			var oe = function(e$2) {
				(function(e$3, t$2) {
					if ("function" != typeof t$2 && null !== t$2) throw new TypeError("Super expression must either be null or a function");
					e$3.prototype = Object.create(t$2 && t$2.prototype, { constructor: {
						value: e$3,
						writable: !0,
						configurable: !0
					} }), Object.defineProperty(e$3, "prototype", { writable: !1 }), t$2 && te(e$3, t$2);
				})(u$1, e$2);
				var r$1, o$1, n$1, i$1, c$1 = (n$1 = u$1, i$1 = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
					} catch (e$3) {
						return !1;
					}
				}(), function() {
					var e$3, t$2 = re(n$1);
					if (i$1) {
						var r$2 = re(this).constructor;
						e$3 = Reflect.construct(t$2, arguments, r$2);
					} else e$3 = t$2.apply(this, arguments);
					return function(e$4, t$3) {
						if (t$3 && ("object" === X(t$3) || "function" == typeof t$3)) return t$3;
						if (void 0 !== t$3) throw new TypeError("Derived constructors may only return object or undefined");
						return function(e$5) {
							if (void 0 === e$5) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return e$5;
						}(e$4);
					}(this, e$3);
				});
				function u$1(e$3) {
					var t$2;
					return function(e$4, t$3) {
						if (!(e$4 instanceof t$3)) throw new TypeError("Cannot call a class as a function");
					}(this, u$1), (t$2 = c$1.call(this, e$3)).state = { loaded: !1 }, t$2;
				}
				return r$1 = u$1, (o$1 = [
					{
						key: "onImageLoad",
						value: function() {
							var e$3 = this;
							return this.state.loaded ? null : function(t$2) {
								e$3.props.onLoad(t$2), e$3.props.afterLoad(), e$3.setState({ loaded: !0 });
							};
						}
					},
					{
						key: "getImg",
						value: function() {
							var e$3 = this.props, r$2 = (e$3.afterLoad, e$3.beforeLoad, e$3.delayMethod, e$3.delayTime, e$3.effect, e$3.placeholder, e$3.placeholderSrc, e$3.scrollPosition, e$3.threshold, e$3.useIntersectionObserver, e$3.visibleByDefault, e$3.wrapperClassName, e$3.wrapperProps, function(e$4, t$2) {
								if (null == e$4) return {};
								var r$3, o$2, n$2 = function(e$5, t$3) {
									if (null == e$5) return {};
									var r$4, o$3, n$3 = {}, i$3 = Object.keys(e$5);
									for (o$3 = 0; o$3 < i$3.length; o$3++) r$4 = i$3[o$3], t$3.indexOf(r$4) >= 0 || (n$3[r$4] = e$5[r$4]);
									return n$3;
								}(e$4, t$2);
								if (Object.getOwnPropertySymbols) {
									var i$2 = Object.getOwnPropertySymbols(e$4);
									for (o$2 = 0; o$2 < i$2.length; o$2++) r$3 = i$2[o$2], t$2.indexOf(r$3) >= 0 || Object.prototype.propertyIsEnumerable.call(e$4, r$3) && (n$2[r$3] = e$4[r$3]);
								}
								return n$2;
							}(e$3, A));
							return t$1().createElement("img", Q({}, r$2, { onLoad: this.onImageLoad() }));
						}
					},
					{
						key: "getLazyLoadImage",
						value: function() {
							var e$3 = this.props, r$2 = e$3.beforeLoad, o$2 = e$3.className, n$2 = e$3.delayMethod, i$2 = e$3.delayTime, c$2 = e$3.height, u$2 = e$3.placeholder, s$1 = e$3.scrollPosition, l$1 = e$3.style, a$1 = e$3.threshold, f$1 = e$3.useIntersectionObserver, p$1 = e$3.visibleByDefault, y$1 = e$3.width;
							return t$1().createElement(Y, {
								beforeLoad: r$2,
								className: o$2,
								delayMethod: n$2,
								delayTime: i$2,
								height: c$2,
								placeholder: u$2,
								scrollPosition: s$1,
								style: l$1,
								threshold: a$1,
								useIntersectionObserver: f$1,
								visibleByDefault: p$1,
								width: y$1
							}, this.getImg());
						}
					},
					{
						key: "getWrappedLazyLoadImage",
						value: function(e$3) {
							var r$2 = this.props, o$2 = r$2.effect, n$2 = r$2.height, i$2 = r$2.placeholderSrc, c$2 = r$2.width, u$2 = r$2.wrapperClassName, s$1 = r$2.wrapperProps, l$1 = this.state.loaded, a$1 = l$1 ? " lazy-load-image-loaded" : "", f$1 = l$1 || !i$2 ? {} : {
								backgroundImage: "url(".concat(i$2, ")"),
								backgroundSize: "100% 100%"
							};
							return t$1().createElement("span", Q({
								className: u$2 + " lazy-load-image-background " + o$2 + a$1,
								style: J(J({}, f$1), {}, {
									color: "transparent",
									display: "inline-block",
									height: n$2,
									width: c$2
								})
							}, s$1), e$3);
						}
					},
					{
						key: "render",
						value: function() {
							var e$3 = this.props, t$2 = e$3.effect, r$2 = e$3.placeholderSrc, o$2 = e$3.visibleByDefault, n$2 = e$3.wrapperClassName, i$2 = e$3.wrapperProps, c$2 = this.getLazyLoadImage();
							return (t$2 || r$2) && !o$2 || n$2 || i$2 ? this.getWrappedLazyLoadImage(c$2) : c$2;
						}
					}
				]) && Z(r$1.prototype, o$1), Object.defineProperty(r$1, "prototype", { writable: !1 }), u$1;
			}(t$1().Component);
			oe.propTypes = {
				onLoad: n.PropTypes.func,
				afterLoad: n.PropTypes.func,
				beforeLoad: n.PropTypes.func,
				delayMethod: n.PropTypes.string,
				delayTime: n.PropTypes.number,
				effect: n.PropTypes.string,
				placeholderSrc: n.PropTypes.string,
				threshold: n.PropTypes.number,
				useIntersectionObserver: n.PropTypes.bool,
				visibleByDefault: n.PropTypes.bool,
				wrapperClassName: n.PropTypes.string,
				wrapperProps: n.PropTypes.object
			}, oe.defaultProps = {
				onLoad: function() {},
				afterLoad: function() {
					return {};
				},
				beforeLoad: function() {
					return {};
				},
				delayMethod: "throttle",
				delayTime: 300,
				effect: "",
				placeholderSrc: null,
				threshold: 100,
				useIntersectionObserver: !0,
				visibleByDefault: !1,
				wrapperClassName: ""
			};
			const ne = oe;
		})(), module.exports = o;
	})();
}) });

//#endregion
export default require_build();

//# sourceMappingURL=react-lazy-load-image-component.js.map