/*! For license information please see lib-router.28f1c92a.js.LICENSE.txt */
"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [98], {
        11999: (e, t, r) => {
            r.d(t, {
                HS: () => z,
                Oi: () => c,
                Rr: () => p,
                TM: () => l,
                V2: () => $,
                VV: () => V,
                aE: () => ie,
                pX: () => K,
                pb: () => O,
                rc: () => n,
                ro: () => w,
                t1: () => H,
                tH: () => W,
                ue: () => b,
                zR: () => s
            });
            var n, o = r(64709);

            function a() {
                return a = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, a.apply(this, arguments)
            }! function(e) {
                e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
            }(n || (n = {}));
            const i = "popstate";

            function s(e) {
                return void 0 === e && (e = {}), m((function(e, t) {
                    let {
                        pathname: r,
                        search: n,
                        hash: o
                    } = e.location;
                    return h("", {
                        pathname: r,
                        search: n,
                        hash: o
                    }, t.state && t.state.usr || null, t.state && t.state.key || "default")
                }), (function(e, t) {
                    return "string" == typeof t ? t : f(t)
                }), null, e)
            }

            function l(e) {
                return void 0 === e && (e = {}), m((function(e, t) {
                    let {
                        pathname: r = "/",
                        search: n = "",
                        hash: o = ""
                    } = p(e.location.hash.substr(1));
                    return r.startsWith("/") || r.startsWith(".") || (r = "/" + r), h("", {
                        pathname: r,
                        search: n,
                        hash: o
                    }, t.state && t.state.usr || null, t.state && t.state.key || "default")
                }), (function(e, t) {
                    let r = e.document.querySelector("base"),
                        n = "";
                    if (r && r.getAttribute("href")) {
                        let t = e.location.href,
                            r = t.indexOf("#");
                        n = -1 === r ? t : t.slice(0, r)
                    }
                    return n + "#" + ("string" == typeof t ? t : f(t))
                }), (function(e, t) {
                    u("/" === e.pathname.charAt(0), "relative pathnames are not supported in hash history.push(" + JSON.stringify(t) + ")")
                }), e)
            }

            function c(e, t) {
                if (!1 === e || null == e) throw new Error(t)
            }

            function u(e, t) {
                if (!e) {
                    "undefined" != typeof console && console.warn(t);
                    try {
                        throw new Error(t)
                    } catch (r) {}
                }
            }

            function d(e, t) {
                return {
                    usr: e.state,
                    key: e.key,
                    idx: t
                }
            }

            function h(e, t, r, n) {
                return void 0 === r && (r = null), a({
                    pathname: "string" == typeof e ? e : e.pathname,
                    search: "",
                    hash: ""
                }, "string" == typeof t ? p(t) : t, {
                    state: r,
                    key: t && t.key || n || Math.random().toString(36).substr(2, 8)
                })
            }

            function f(e) {
                let {
                    pathname: t = "/",
                    search: r = "",
                    hash: n = ""
                } = e;
                return r && "?" !== r && (t += "?" === r.charAt(0) ? r : "?" + r), n && "#" !== n && (t += "#" === n.charAt(0) ? n : "#" + n), t
            }

            function p(e) {
                let t = {};
                if (e) {
                    let r = e.indexOf("#");
                    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
                    let n = e.indexOf("?");
                    n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e)
                }
                return t
            }

            function m(e, t, r, o) {
                void 0 === o && (o = {});
                let {
                    window: s = document.defaultView,
                    v5Compat: l = !1
                } = o, u = s.history, p = n.Pop, m = null, v = y();

                function y() {
                    return (u.state || {
                        idx: null
                    }).idx
                }

                function g() {
                    p = n.Pop;
                    let e = y(),
                        t = null == e ? null : e - v;
                    v = e, m && m({
                        action: p,
                        location: w.location,
                        delta: t
                    })
                }

                function b(e) {
                    let t = "null" !== s.location.origin ? s.location.origin : s.location.href,
                        r = "string" == typeof e ? e : f(e);
                    return c(t, "No window.location.(origin|href) available to create URL for href: " + r), new URL(r, t)
                }
                null == v && (v = 0, u.replaceState(a({}, u.state, {
                    idx: v
                }), ""));
                let w = {
                    get action() {
                        return p
                    },
                    get location() {
                        return e(s, u)
                    },
                    listen(e) {
                        if (m) throw new Error("A history only accepts one active listener");
                        return s.addEventListener(i, g), m = e, () => {
                            s.removeEventListener(i, g), m = null
                        }
                    },
                    createHref: e => t(s, e),
                    createURL: b,
                    encodeLocation(e) {
                        let t = b(e);
                        return {
                            pathname: t.pathname,
                            search: t.search,
                            hash: t.hash
                        }
                    },
                    push: function(e, t) {
                        p = n.Push;
                        let o = h(w.location, e, t);
                        r && r(o, e), v = y() + 1;
                        let a = d(o, v),
                            i = w.createHref(o);
                        try {
                            u.pushState(a, "", i)
                        } catch (c) {
                            if (c instanceof DOMException && "DataCloneError" === c.name) throw c;
                            s.location.assign(i)
                        }
                        l && m && m({
                            action: p,
                            location: w.location,
                            delta: 1
                        })
                    },
                    replace: function(e, t) {
                        p = n.Replace;
                        let o = h(w.location, e, t);
                        r && r(o, e), v = y();
                        let a = d(o, v),
                            i = w.createHref(o);
                        u.replaceState(a, "", i), l && m && m({
                            action: p,
                            location: w.location,
                            delta: 0
                        })
                    },
                    go: e => u.go(e)
                };
                return w
            }
            var v;
            ! function(e) {
                e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
            }(v || (v = {}));
            const y = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

            function g(e, t, r, n) {
                return void 0 === r && (r = []), void 0 === n && (n = {}), e.map(((e, o) => {
                    let i = [...r, o],
                        s = "string" == typeof e.id ? e.id : i.join("-");
                    if (c(!0 !== e.index || !e.children, "Cannot specify children on an index route"), c(!n[s], 'Found a route id collision on id "' + s + "\".  Route id's must be globally unique within Data Router usages"), function(e) {
                            return !0 === e.index
                        }(e)) {
                        let r = a({}, e, t(e), {
                            id: s
                        });
                        return n[s] = r, r
                    } {
                        let r = a({}, e, t(e), {
                            id: s,
                            children: void 0
                        });
                        return n[s] = r, e.children && (r.children = g(e.children, t, i, n)), r
                    }
                }))
            }

            function b(e, t, r) {
                void 0 === r && (r = "/");
                let n = O(("string" == typeof t ? p(t) : t).pathname || "/", r);
                if (null == n) return null;
                let o = E(e);
                ! function(e) {
                    e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
                        let r = e.length === t.length && e.slice(0, -1).every(((e, r) => e === t[r]));
                        return r ? e[e.length - 1] - t[t.length - 1] : 0
                    }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
                }(o);
                let a = null;
                for (let i = 0; null == a && i < o.length; ++i) a = j(o[i], T(n));
                return a
            }

            function w(e, t) {
                let {
                    route: r,
                    pathname: n,
                    params: o
                } = e;
                return {
                    id: r.id,
                    pathname: n,
                    params: o,
                    data: t[r.id],
                    handle: r.handle
                }
            }

            function E(e, t, r, n) {
                void 0 === t && (t = []), void 0 === r && (r = []), void 0 === n && (n = "");
                let o = (e, o, a) => {
                    let i = {
                        relativePath: void 0 === a ? e.path || "" : a,
                        caseSensitive: !0 === e.caseSensitive,
                        childrenIndex: o,
                        route: e
                    };
                    i.relativePath.startsWith("/") && (c(i.relativePath.startsWith(n), 'Absolute route path "' + i.relativePath + '" nested under path "' + n + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(n.length));
                    let s = z([n, i.relativePath]),
                        l = r.concat(i);
                    e.children && e.children.length > 0 && (c(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + s + '".'), E(e.children, t, l, s)), (null != e.path || e.index) && t.push({
                        path: s,
                        score: M(s, e.index),
                        routesMeta: l
                    })
                };
                return e.forEach(((e, t) => {
                    var r;
                    if ("" !== e.path && null != (r = e.path) && r.includes("?"))
                        for (let n of D(e.path)) o(e, t, n);
                    else o(e, t)
                })), t
            }

            function D(e) {
                let t = e.split("/");
                if (0 === t.length) return [];
                let [r, ...n] = t, o = r.endsWith("?"), a = r.replace(/\?$/, "");
                if (0 === n.length) return o ? [a, ""] : [a];
                let i = D(n.join("/")),
                    s = [];
                return s.push(...i.map((e => "" === e ? a : [a, e].join("/")))), o && s.push(...i), s.map((t => e.startsWith("/") && "" === t ? "/" : t))
            }
            const x = /^:\w+$/,
                R = 3,
                S = 2,
                L = 1,
                A = 10,
                P = -2,
                k = e => "*" === e;

            function M(e, t) {
                let r = e.split("/"),
                    n = r.length;
                return r.some(k) && (n += P), t && (n += S), r.filter((e => !k(e))).reduce(((e, t) => e + (x.test(t) ? R : "" === t ? L : A)), n)
            }

            function j(e, t) {
                let {
                    routesMeta: r
                } = e, n = {}, o = "/", a = [];
                for (let i = 0; i < r.length; ++i) {
                    let e = r[i],
                        s = i === r.length - 1,
                        l = "/" === o ? t : t.slice(o.length) || "/",
                        c = C({
                            path: e.relativePath,
                            caseSensitive: e.caseSensitive,
                            end: s
                        }, l);
                    if (!c) return null;
                    Object.assign(n, c.params);
                    let u = e.route;
                    a.push({
                        params: n,
                        pathname: z([o, c.pathname]),
                        pathnameBase: I(z([o, c.pathnameBase])),
                        route: u
                    }), "/" !== c.pathnameBase && (o = z([o, c.pathnameBase]))
                }
                return a
            }

            function C(e, t) {
                "string" == typeof e && (e = {
                    path: e,
                    caseSensitive: !1,
                    end: !0
                });
                let [r, n] = function(e, t, r) {
                    void 0 === t && (t = !1);
                    void 0 === r && (r = !0);
                    u("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
                    let n = [],
                        o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, ((e, t) => (n.push(t), "/([^\\/]+)")));
                    e.endsWith("*") ? (n.push("*"), o += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? o += "\\/*$" : "" !== e && "/" !== e && (o += "(?:(?=\\/|$))");
                    let a = new RegExp(o, t ? void 0 : "i");
                    return [a, n]
                }(e.path, e.caseSensitive, e.end), o = t.match(r);
                if (!o) return null;
                let a = o[0],
                    i = a.replace(/(.)\/+$/, "$1"),
                    s = o.slice(1);
                return {
                    params: n.reduce(((e, t, r) => {
                        if ("*" === t) {
                            let e = s[r] || "";
                            i = a.slice(0, a.length - e.length).replace(/(.)\/+$/, "$1")
                        }
                        return e[t] = function(e, t) {
                            try {
                                return decodeURIComponent(e)
                            } catch (r) {
                                return u(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + r + ")."), e
                            }
                        }(s[r] || "", t), e
                    }), {}),
                    pathname: a,
                    pathnameBase: i,
                    pattern: e
                }
            }

            function T(e) {
                try {
                    return decodeURI(e)
                } catch (t) {
                    return u(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
                }
            }

            function O(e, t) {
                if ("/" === t) return e;
                if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
                let r = t.endsWith("/") ? t.length - 1 : t.length,
                    n = e.charAt(r);
                return n && "/" !== n ? null : e.slice(r) || "/"
            }

            function U(e, t, r, n) {
                return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
            }

            function _(e) {
                return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
            }

            function B(e, t, r, n) {
                let o;
                void 0 === n && (n = !1), "string" == typeof e ? o = p(e) : (o = a({}, e), c(!o.pathname || !o.pathname.includes("?"), U("?", "pathname", "search", o)), c(!o.pathname || !o.pathname.includes("#"), U("#", "pathname", "hash", o)), c(!o.search || !o.search.includes("#"), U("#", "search", "hash", o)));
                let i, s = "" === e || "" === o.pathname,
                    l = s ? "/" : o.pathname;
                if (n || null == l) i = r;
                else {
                    let e = t.length - 1;
                    if (l.startsWith("..")) {
                        let t = l.split("/");
                        for (;
                            ".." === t[0];) t.shift(), e -= 1;
                        o.pathname = t.join("/")
                    }
                    i = e >= 0 ? t[e] : "/"
                }
                let u = function(e, t) {
                        void 0 === t && (t = "/");
                        let {
                            pathname: r,
                            search: n = "",
                            hash: o = ""
                        } = "string" == typeof e ? p(e) : e, a = r ? r.startsWith("/") ? r : function(e, t) {
                            let r = t.replace(/\/+$/, "").split("/");
                            return e.split("/").forEach((e => {
                                ".." === e ? r.length > 1 && r.pop() : "." !== e && r.push(e)
                            })), r.length > 1 ? r.join("/") : "/"
                        }(r, t) : t;
                        return {
                            pathname: a,
                            search: F(n),
                            hash: N(o)
                        }
                    }(o, i),
                    d = l && "/" !== l && l.endsWith("/"),
                    h = (s || "." === l) && r.endsWith("/");
                return u.pathname.endsWith("/") || !d && !h || (u.pathname += "/"), u
            }
            const z = e => e.join("/").replace(/\/\/+/g, "/"),
                I = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
                F = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
                N = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";
            class W extends Error {}
            class H {
                constructor(e, t) {
                    let r;
                    this.pendingKeysSet = new Set, this.subscribers = new Set, this.deferredKeys = [], c(e && "object" == typeof e && !Array.isArray(e), "defer() only accepts plain objects"), this.abortPromise = new Promise(((e, t) => r = t)), this.controller = new AbortController;
                    let n = () => r(new W("Deferred data aborted"));
                    this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", n), this.controller.signal.addEventListener("abort", n), this.data = Object.entries(e).reduce(((e, t) => {
                        let [r, n] = t;
                        return Object.assign(e, {
                            [r]: this.trackPromise(r, n)
                        })
                    }), {}), this.done && this.unlistenAbortSignal(), this.init = t
                }
                trackPromise(e, t) {
                    if (!(t instanceof Promise)) return t;
                    this.deferredKeys.push(e), this.pendingKeysSet.add(e);
                    let r = Promise.race([t, this.abortPromise]).then((t => this.onSettle(r, e, void 0, t)), (t => this.onSettle(r, e, t)));
                    return r.catch((() => {})), Object.defineProperty(r, "_tracked", {
                        get: () => !0
                    }), r
                }
                onSettle(e, t, r, n) {
                    if (this.controller.signal.aborted && r instanceof W) return this.unlistenAbortSignal(), Object.defineProperty(e, "_error", {
                        get: () => r
                    }), Promise.reject(r);
                    if (this.pendingKeysSet.delete(t), this.done && this.unlistenAbortSignal(), void 0 === r && void 0 === n) {
                        let r = new Error('Deferred data for key "' + t + '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.');
                        return Object.defineProperty(e, "_error", {
                            get: () => r
                        }), this.emit(!1, t), Promise.reject(r)
                    }
                    return void 0 === n ? (Object.defineProperty(e, "_error", {
                        get: () => r
                    }), this.emit(!1, t), Promise.reject(r)) : (Object.defineProperty(e, "_data", {
                        get: () => n
                    }), this.emit(!1, t), n)
                }
                emit(e, t) {
                    this.subscribers.forEach((r => r(e, t)))
                }
                subscribe(e) {
                    return this.subscribers.add(e), () => this.subscribers.delete(e)
                }
                cancel() {
                    this.controller.abort(), this.pendingKeysSet.forEach(((e, t) => this.pendingKeysSet.delete(t))), this.emit(!0)
                }
                resolveData(e) {
                    var t = this;
                    return (0, o.A)((function*() {
                        let r = !1;
                        if (!t.done) {
                            let n = () => t.cancel();
                            e.addEventListener("abort", n), r = yield new Promise((r => {
                                t.subscribe((o => {
                                    e.removeEventListener("abort", n), (o || t.done) && r(o)
                                }))
                            }))
                        }
                        return r
                    }))()
                }
                get done() {
                    return 0 === this.pendingKeysSet.size
                }
                get unwrappedData() {
                    return c(null !== this.data && this.done, "Can only unwrap data on initialized and settled deferreds"), Object.entries(this.data).reduce(((e, t) => {
                        let [r, n] = t;
                        return Object.assign(e, {
                            [r]: q(n)
                        })
                    }), {})
                }
                get pendingKeys() {
                    return Array.from(this.pendingKeysSet)
                }
            }

            function q(e) {
                if (! function(e) {
                        return e instanceof Promise && !0 === e._tracked
                    }(e)) return e;
                if (e._error) throw e._error;
                return e._data
            }
            const $ = function(e, t) {
                void 0 === t && (t = 302);
                let r = t;
                "number" == typeof r ? r = {
                    status: r
                } : void 0 === r.status && (r.status = 302);
                let n = new Headers(r.headers);
                return n.set("Location", e), new Response(null, a({}, r, {
                    headers: n
                }))
            };
            class V {
                constructor(e, t, r, n) {
                    void 0 === n && (n = !1), this.status = e, this.statusText = t || "", this.internal = n, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
                }
            }

            function K(e) {
                return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e
            }
            const Y = ["post", "put", "patch", "delete"],
                J = new Set(Y),
                X = ["get", ...Y],
                G = new Set(X),
                Q = new Set([301, 302, 303, 307, 308]),
                Z = new Set([307, 308]),
                ee = {
                    state: "idle",
                    location: void 0,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0
                },
                te = {
                    state: "idle",
                    data: void 0,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0
                },
                re = {
                    state: "unblocked",
                    proceed: void 0,
                    reset: void 0,
                    location: void 0
                },
                ne = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                oe = e => ({
                    hasErrorBoundary: Boolean(e.hasErrorBoundary)
                }),
                ae = "remix-router-transitions";

            function ie(e) {
                const t = e.window ? e.window : "undefined" != typeof window ? window : void 0,
                    r = void 0 !== t && void 0 !== t.document && void 0 !== t.document.createElement,
                    i = !r;
                let s;
                if (c(e.routes.length > 0, "You must provide a non-empty routes array to createRouter"), e.mapRouteProperties) s = e.mapRouteProperties;
                else if (e.detectErrorBoundary) {
                    let t = e.detectErrorBoundary;
                    s = e => ({
                        hasErrorBoundary: t(e)
                    })
                } else s = oe;
                let l, d = {},
                    f = g(e.routes, s, void 0, d),
                    p = e.basename || "/",
                    m = a({
                        v7_normalizeFormMethod: !1,
                        v7_prependBasename: !1
                    }, e.future),
                    y = null,
                    E = new Set,
                    D = null,
                    x = null,
                    R = null,
                    S = null != e.hydrationData,
                    L = b(f, e.history.location, p),
                    A = null;
                if (null == L) {
                    let t = Se(404, {
                            pathname: e.history.location.pathname
                        }),
                        {
                            matches: r,
                            route: n
                        } = Re(f);
                    L = r, A = {
                        [n.id]: t
                    }
                }
                let P, k, M = !(L.some((e => e.route.lazy)) || L.some((e => e.route.loader)) && null == e.hydrationData),
                    j = {
                        historyAction: e.history.action,
                        location: e.history.location,
                        matches: L,
                        initialized: M,
                        navigation: ee,
                        restoreScrollPosition: null == e.hydrationData && null,
                        preventScrollReset: !1,
                        revalidation: "idle",
                        loaderData: e.hydrationData && e.hydrationData.loaderData || {},
                        actionData: e.hydrationData && e.hydrationData.actionData || null,
                        errors: e.hydrationData && e.hydrationData.errors || A,
                        fetchers: new Map,
                        blockers: new Map
                    },
                    C = n.Pop,
                    T = !1,
                    U = !1,
                    _ = new Map,
                    B = null,
                    z = !1,
                    I = !1,
                    F = [],
                    N = [],
                    W = new Map,
                    H = 0,
                    q = -1,
                    $ = new Map,
                    V = new Set,
                    K = new Map,
                    Y = new Map,
                    J = new Map,
                    X = !1;

                function G(e, t) {
                    j = a({}, j, e), E.forEach((e => e(j, {
                        unstable_viewTransitionOpts: t
                    })))
                }

                function Q(t, r) {
                    var o, i;
                    let s, c = null != j.actionData && null != j.navigation.formMethod && Te(j.navigation.formMethod) && "loading" === j.navigation.state && !0 !== (null == (o = t.state) ? void 0 : o._isRedirect);
                    s = r.actionData ? Object.keys(r.actionData).length > 0 ? r.actionData : null : c ? j.actionData : null;
                    let u = r.loaderData ? De(j.loaderData, r.loaderData, r.matches || [], r.errors) : j.loaderData,
                        d = j.blockers;
                    d.size > 0 && (d = new Map(d), d.forEach(((e, t) => d.set(t, re))));
                    let h, p = !0 === T || null != j.navigation.formMethod && Te(j.navigation.formMethod) && !0 !== (null == (i = t.state) ? void 0 : i._isRedirect);
                    if (l && (f = l, l = void 0), z || C === n.Pop || (C === n.Push ? e.history.push(t, t.state) : C === n.Replace && e.history.replace(t, t.state)), C === n.Pop) {
                        let e = _.get(j.location.pathname);
                        e && e.has(t.pathname) ? h = {
                            currentLocation: j.location,
                            nextLocation: t
                        } : _.has(t.pathname) && (h = {
                            currentLocation: t,
                            nextLocation: j.location
                        })
                    } else if (U) {
                        let e = _.get(j.location.pathname);
                        e ? e.add(t.pathname) : (e = new Set([t.pathname]), _.set(j.location.pathname, e)), h = {
                            currentLocation: j.location,
                            nextLocation: t
                        }
                    }
                    G(a({}, r, {
                        actionData: s,
                        loaderData: u,
                        historyAction: C,
                        location: t,
                        initialized: !0,
                        navigation: ee,
                        revalidation: "idle",
                        restoreScrollPosition: Ze(t, r.matches || j.matches),
                        preventScrollReset: p,
                        blockers: d
                    }), h), C = n.Pop, T = !1, U = !1, z = !1, I = !1, F = [], N = []
                }

                function ie(e, t) {
                    return ce.apply(this, arguments)
                }

                function ce() {
                    return (ce = (0, o.A)((function*(t, r) {
                        if ("number" == typeof t) return void e.history.go(t);
                        let o = se(j.location, j.matches, p, m.v7_prependBasename, t, null == r ? void 0 : r.fromRouteId, null == r ? void 0 : r.relative),
                            {
                                path: i,
                                submission: s,
                                error: l
                            } = le(m.v7_normalizeFormMethod, !1, o, r),
                            c = j.location,
                            u = h(j.location, i, r && r.state);
                        u = a({}, u, e.history.encodeLocation(u));
                        let d = r && null != r.replace ? r.replace : void 0,
                            f = n.Push;
                        !0 === d ? f = n.Replace : !1 === d || null != s && Te(s.formMethod) && s.formAction === j.location.pathname + j.location.search && (f = n.Replace);
                        let v = r && "preventScrollReset" in r ? !0 === r.preventScrollReset : void 0,
                            y = Xe({
                                currentLocation: c,
                                nextLocation: u,
                                historyAction: f
                            });
                        if (!y) return yield de(f, u, {
                            submission: s,
                            pendingError: l,
                            preventScrollReset: v,
                            replace: r && r.replace,
                            enableViewTransition: r && r.unstable_viewTransition
                        });
                        Je(y, {
                            state: "blocked",
                            location: u,
                            proceed() {
                                Je(y, {
                                    state: "proceeding",
                                    proceed: void 0,
                                    reset: void 0,
                                    location: u
                                }), ie(t, r)
                            },
                            reset() {
                                let e = new Map(j.blockers);
                                e.set(y, re), G({
                                    blockers: e
                                })
                            }
                        })
                    }))).apply(this, arguments)
                }

                function de(e, t, r) {
                    return he.apply(this, arguments)
                }

                function he() {
                    return he = (0, o.A)((function*(t, r, n) {
                        k && k.abort(), k = null, C = t, z = !0 === (n && n.startUninterruptedRevalidation),
                            function(e, t) {
                                if (D && R) {
                                    let r = Qe(e, t);
                                    D[r] = R()
                                }
                            }(j.location, j.matches), T = !0 === (n && n.preventScrollReset), U = !0 === (n && n.enableViewTransition);
                        let o = l || f,
                            i = n && n.overrideNavigation,
                            s = b(o, r, p);
                        if (!s) {
                            let e = Se(404, {
                                    pathname: r.pathname
                                }),
                                {
                                    matches: t,
                                    route: n
                                } = Re(o);
                            return Ge(), void Q(r, {
                                matches: t,
                                loaderData: {},
                                errors: {
                                    [n.id]: e
                                }
                            })
                        }
                        if (j.initialized && !I && function(e, t) {
                                if (e.pathname !== t.pathname || e.search !== t.search) return !1;
                                if ("" === e.hash) return "" !== t.hash;
                                if (e.hash === t.hash) return !0;
                                if ("" !== t.hash) return !0;
                                return !1
                            }(j.location, r) && !(n && n.submission && Te(n.submission.formMethod))) return void Q(r, {
                            matches: s
                        });
                        k = new AbortController;
                        let c, u, d = ye(e.history, r, k.signal, n && n.submission);
                        if (n && n.pendingError) u = {
                            [xe(s).route.id]: n.pendingError
                        };
                        else if (n && n.submission && Te(n.submission.formMethod)) {
                            let e = yield function(e, t, r, n, o) {
                                return fe.apply(this, arguments)
                            }(d, r, n.submission, s, {
                                replace: n.replace
                            });
                            if (e.shortCircuited) return;
                            c = e.pendingActionData, u = e.pendingActionError, i = Ne(r, n.submission), d = new Request(d.url, {
                                signal: d.signal
                            })
                        }
                        let {
                            shortCircuited: h,
                            loaderData: m,
                            errors: v
                        } = yield function(e, t, r, n, o, a, i, s, l) {
                            return pe.apply(this, arguments)
                        }(d, r, s, i, n && n.submission, n && n.fetcherSubmission, n && n.replace, c, u);
                        h || (k = null, Q(r, a({
                            matches: s
                        }, c ? {
                            actionData: c
                        } : {}, {
                            loaderData: m,
                            errors: v
                        })))
                    })), he.apply(this, arguments)
                }

                function fe() {
                    return (fe = (0, o.A)((function*(e, t, r, o, a) {
                        void 0 === a && (a = {}), Ue();
                        let i, l = function(e, t) {
                            let r = {
                                state: "submitting",
                                location: e,
                                formMethod: t.formMethod,
                                formAction: t.formAction,
                                formEncType: t.formEncType,
                                formData: t.formData,
                                json: t.json,
                                text: t.text
                            };
                            return r
                        }(t, r);
                        G({
                            navigation: l
                        });
                        let c = Ie(o, t);
                        if (c.route.action || c.route.lazy) {
                            if (i = yield me("action", e, c, o, d, s, p), e.signal.aborted) return {
                                shortCircuited: !0
                            }
                        } else i = {
                            type: v.error,
                            error: Se(405, {
                                method: e.method,
                                pathname: t.pathname,
                                routeId: c.route.id
                            })
                        };
                        if (Me(i)) {
                            let e;
                            return e = a && null != a.replace ? a.replace : i.location === j.location.pathname + j.location.search, yield we(j, i, {
                                submission: r,
                                replace: e
                            }), {
                                shortCircuited: !0
                            }
                        }
                        if (ke(i)) {
                            let e = xe(o, c.route.id);
                            return !0 !== (a && a.replace) && (C = n.Push), {
                                pendingActionData: {},
                                pendingActionError: {
                                    [e.route.id]: i.error
                                }
                            }
                        }
                        if (Pe(i)) throw Se(400, {
                            type: "defer-action"
                        });
                        return {
                            pendingActionData: {
                                [c.route.id]: i.data
                            }
                        }
                    }))).apply(this, arguments)
                }

                function pe() {
                    return pe = (0, o.A)((function*(t, r, n, o, i, s, c, u, d) {
                        let h = o || Ne(r, i),
                            m = i || s || Fe(h),
                            v = l || f,
                            [y, g] = ue(e.history, j, n, m, r, I, F, N, K, V, v, p, u, d);
                        if (Ge((e => !(n && n.some((t => t.route.id === e))) || y && y.some((t => t.route.id === e)))), q = ++H, 0 === y.length && 0 === g.length) {
                            let e = Ve();
                            return Q(r, a({
                                matches: n,
                                loaderData: {},
                                errors: d || null
                            }, u ? {
                                actionData: u
                            } : {}, e ? {
                                fetchers: new Map(j.fetchers)
                            } : {})), {
                                shortCircuited: !0
                            }
                        }
                        if (!z) {
                            g.forEach((e => {
                                let t = j.fetchers.get(e.key),
                                    r = We(void 0, t ? t.data : void 0);
                                j.fetchers.set(e.key, r)
                            }));
                            let e = u || j.actionData;
                            G(a({
                                navigation: h
                            }, e ? 0 === Object.keys(e).length ? {
                                actionData: null
                            } : {
                                actionData: e
                            } : {}, g.length > 0 ? {
                                fetchers: new Map(j.fetchers)
                            } : {}))
                        }
                        g.forEach((e => {
                            W.has(e.key) && qe(e.key), e.controller && W.set(e.key, e.controller)
                        }));
                        let b = () => g.forEach((e => qe(e.key)));
                        k && k.signal.addEventListener("abort", b);
                        let {
                            results: w,
                            loaderResults: E,
                            fetcherResults: D
                        } = yield je(j.matches, n, y, g, t);
                        if (t.signal.aborted) return {
                            shortCircuited: !0
                        };
                        k && k.signal.removeEventListener("abort", b), g.forEach((e => W.delete(e.key)));
                        let x = Le(w);
                        if (x) {
                            if (x.idx >= y.length) {
                                let e = g[x.idx - y.length].key;
                                V.add(e)
                            }
                            return yield we(j, x.result, {
                                replace: c
                            }), {
                                shortCircuited: !0
                            }
                        }
                        let {
                            loaderData: R,
                            errors: S
                        } = Ee(j, n, y, E, d, g, D, Y);
                        Y.forEach(((e, t) => {
                            e.subscribe((r => {
                                (r || e.done) && Y.delete(t)
                            }))
                        }));
                        let L = Ve(),
                            A = Ke(q);
                        return a({
                            loaderData: R,
                            errors: S
                        }, L || A || g.length > 0 ? {
                            fetchers: new Map(j.fetchers)
                        } : {})
                    })), pe.apply(this, arguments)
                }

                function ve(e) {
                    return j.fetchers.get(e) || te
                }

                function ge() {
                    return ge = (0, o.A)((function*(t, r, n, o, i, u) {
                        if (Ue(), K.delete(t), !o.route.action && !o.route.lazy) {
                            let e = Se(405, {
                                method: u.formMethod,
                                pathname: n,
                                routeId: r
                            });
                            return void Be(t, r, e)
                        }
                        let h = function(e, t) {
                            let r = {
                                state: "submitting",
                                formMethod: e.formMethod,
                                formAction: e.formAction,
                                formEncType: e.formEncType,
                                formData: e.formData,
                                json: e.json,
                                text: e.text,
                                data: t ? t.data : void 0
                            };
                            return r
                        }(u, j.fetchers.get(t));
                        j.fetchers.set(t, h), G({
                            fetchers: new Map(j.fetchers)
                        });
                        let m = new AbortController,
                            v = ye(e.history, n, m.signal, u);
                        W.set(t, m);
                        let y = H,
                            g = yield me("action", v, o, i, d, s, p);
                        if (v.signal.aborted) return void(W.get(t) === m && W.delete(t));
                        if (Me(g)) {
                            if (W.delete(t), q > y) {
                                let e = He(void 0);
                                return j.fetchers.set(t, e), void G({
                                    fetchers: new Map(j.fetchers)
                                })
                            } {
                                V.add(t);
                                let e = We(u);
                                return j.fetchers.set(t, e), G({
                                    fetchers: new Map(j.fetchers)
                                }), we(j, g, {
                                    fetcherSubmission: u
                                })
                            }
                        }
                        if (ke(g)) return void Be(t, r, g.error);
                        if (Pe(g)) throw Se(400, {
                            type: "defer-action"
                        });
                        let w = j.navigation.location || j.location,
                            E = ye(e.history, w, m.signal),
                            D = l || f,
                            x = "idle" !== j.navigation.state ? b(D, j.navigation.location, p) : j.matches;
                        c(x, "Didn't find any matches after fetcher action");
                        let R = ++H;
                        $.set(t, R);
                        let S = We(u, g.data);
                        j.fetchers.set(t, S);
                        let [L, A] = ue(e.history, j, x, u, w, I, F, N, K, V, D, p, {
                            [o.route.id]: g.data
                        }, void 0);
                        A.filter((e => e.key !== t)).forEach((e => {
                            let t = e.key,
                                r = j.fetchers.get(t),
                                n = We(void 0, r ? r.data : void 0);
                            j.fetchers.set(t, n), W.has(t) && qe(t), e.controller && W.set(t, e.controller)
                        })), G({
                            fetchers: new Map(j.fetchers)
                        });
                        let P = () => A.forEach((e => qe(e.key)));
                        m.signal.addEventListener("abort", P);
                        let {
                            results: M,
                            loaderResults: T,
                            fetcherResults: O
                        } = yield je(j.matches, x, L, A, E);
                        if (m.signal.aborted) return;
                        m.signal.removeEventListener("abort", P), $.delete(t), W.delete(t), A.forEach((e => W.delete(e.key)));
                        let U = Le(M);
                        if (U) {
                            if (U.idx >= L.length) {
                                let e = A[U.idx - L.length].key;
                                V.add(e)
                            }
                            return we(j, U.result)
                        }
                        let {
                            loaderData: _,
                            errors: B
                        } = Ee(j, j.matches, L, T, void 0, A, O, Y);
                        if (j.fetchers.has(t)) {
                            let e = He(g.data);
                            j.fetchers.set(t, e)
                        }
                        let z = Ke(R);
                        "loading" === j.navigation.state && R > q ? (c(C, "Expected pending action"), k && k.abort(), Q(j.navigation.location, {
                            matches: x,
                            loaderData: _,
                            errors: B,
                            fetchers: new Map(j.fetchers)
                        })) : (G(a({
                            errors: B,
                            loaderData: De(j.loaderData, _, x, B)
                        }, z || A.length > 0 ? {
                            fetchers: new Map(j.fetchers)
                        } : {})), I = !1)
                    })), ge.apply(this, arguments)
                }

                function be() {
                    return (be = (0, o.A)((function*(t, r, n, o, a, i) {
                        let l = j.fetchers.get(t),
                            u = We(i, l ? l.data : void 0);
                        j.fetchers.set(t, u), G({
                            fetchers: new Map(j.fetchers)
                        });
                        let h = new AbortController,
                            f = ye(e.history, n, h.signal);
                        W.set(t, h);
                        let m = H,
                            v = yield me("loader", f, o, a, d, s, p);
                        if (Pe(v) && (v = (yield _e(v, f.signal, !0)) || v), W.get(t) === h && W.delete(t), f.signal.aborted) return;
                        if (Me(v)) {
                            if (q > m) {
                                let e = He(void 0);
                                return j.fetchers.set(t, e), void G({
                                    fetchers: new Map(j.fetchers)
                                })
                            }
                            return V.add(t), void(yield we(j, v))
                        }
                        if (ke(v)) {
                            let e = xe(j.matches, r);
                            return j.fetchers.delete(t), void G({
                                fetchers: new Map(j.fetchers),
                                errors: {
                                    [e.route.id]: v.error
                                }
                            })
                        }
                        c(!Pe(v), "Unhandled fetcher deferred data");
                        let y = He(v.data);
                        j.fetchers.set(t, y), G({
                            fetchers: new Map(j.fetchers)
                        })
                    }))).apply(this, arguments)
                }

                function we(e, t, r) {
                    return Ae.apply(this, arguments)
                }

                function Ae() {
                    return Ae = (0, o.A)((function*(o, i, s) {
                        let {
                            submission: l,
                            fetcherSubmission: u,
                            replace: d
                        } = void 0 === s ? {} : s;
                        i.revalidate && (I = !0);
                        let f = h(o.location, i.location, {
                            _isRedirect: !0
                        });
                        if (c(f, "Expected a location on the redirect navigation"), r) {
                            let r = !1;
                            if (i.reloadDocument) r = !0;
                            else if (ne.test(i.location)) {
                                const n = e.history.createURL(i.location);
                                r = n.origin !== t.location.origin || null == O(n.pathname, p)
                            }
                            if (r) return void(d ? t.location.replace(i.location) : t.location.assign(i.location))
                        }
                        k = null;
                        let m = !0 === d ? n.Replace : n.Push,
                            {
                                formMethod: v,
                                formAction: y,
                                formEncType: g
                            } = o.navigation;
                        !l && !u && v && y && g && (l = Fe(o.navigation));
                        let b = l || u;
                        if (Z.has(i.status) && b && Te(b.formMethod)) yield de(m, f, {
                            submission: a({}, b, {
                                formAction: i.location
                            }),
                            preventScrollReset: T
                        });
                        else {
                            let e = Ne(f, l);
                            yield de(m, f, {
                                overrideNavigation: e,
                                fetcherSubmission: u,
                                preventScrollReset: T
                            })
                        }
                    })), Ae.apply(this, arguments)
                }

                function je(e, t, r, n, o) {
                    return Ce.apply(this, arguments)
                }

                function Ce() {
                    return (Ce = (0, o.A)((function*(t, r, n, o, a) {
                        let i = yield Promise.all([...n.map((e => me("loader", a, e, r, d, s, p))), ...o.map((t => {
                            if (t.matches && t.match && t.controller) return me("loader", ye(e.history, t.path, t.controller.signal), t.match, t.matches, d, s, p);
                            return {
                                type: v.error,
                                error: Se(404, {
                                    pathname: t.path
                                })
                            }
                        }))]), l = i.slice(0, n.length), c = i.slice(n.length);
                        return yield Promise.all([Oe(t, n, l, l.map((() => a.signal)), !1, j.loaderData), Oe(t, o.map((e => e.match)), c, o.map((e => e.controller ? e.controller.signal : null)), !0)]), {
                            results: i,
                            loaderResults: l,
                            fetcherResults: c
                        }
                    }))).apply(this, arguments)
                }

                function Ue() {
                    I = !0, F.push(...Ge()), K.forEach(((e, t) => {
                        W.has(t) && (N.push(t), qe(t))
                    }))
                }

                function Be(e, t, r) {
                    let n = xe(j.matches, t);
                    ze(e), G({
                        errors: {
                            [n.route.id]: r
                        },
                        fetchers: new Map(j.fetchers)
                    })
                }

                function ze(e) {
                    let t = j.fetchers.get(e);
                    !W.has(e) || t && "loading" === t.state && $.has(e) || qe(e), K.delete(e), $.delete(e), V.delete(e), j.fetchers.delete(e)
                }

                function qe(e) {
                    let t = W.get(e);
                    c(t, "Expected fetch controller: " + e), t.abort(), W.delete(e)
                }

                function $e(e) {
                    for (let t of e) {
                        let e = He(ve(t).data);
                        j.fetchers.set(t, e)
                    }
                }

                function Ve() {
                    let e = [],
                        t = !1;
                    for (let r of V) {
                        let n = j.fetchers.get(r);
                        c(n, "Expected fetcher: " + r), "loading" === n.state && (V.delete(r), e.push(r), t = !0)
                    }
                    return $e(e), t
                }

                function Ke(e) {
                    let t = [];
                    for (let [r, n] of $)
                        if (n < e) {
                            let e = j.fetchers.get(r);
                            c(e, "Expected fetcher: " + r), "loading" === e.state && (qe(r), $.delete(r), t.push(r))
                        }
                    return $e(t), t.length > 0
                }

                function Ye(e) {
                    j.blockers.delete(e), J.delete(e)
                }

                function Je(e, t) {
                    let r = j.blockers.get(e) || re;
                    c("unblocked" === r.state && "blocked" === t.state || "blocked" === r.state && "blocked" === t.state || "blocked" === r.state && "proceeding" === t.state || "blocked" === r.state && "unblocked" === t.state || "proceeding" === r.state && "unblocked" === t.state, "Invalid blocker state transition: " + r.state + " -> " + t.state);
                    let n = new Map(j.blockers);
                    n.set(e, t), G({
                        blockers: n
                    })
                }

                function Xe(e) {
                    let {
                        currentLocation: t,
                        nextLocation: r,
                        historyAction: n
                    } = e;
                    if (0 === J.size) return;
                    J.size > 1 && u(!1, "A router only supports one blocker at a time");
                    let o = Array.from(J.entries()),
                        [a, i] = o[o.length - 1],
                        s = j.blockers.get(a);
                    return s && "proceeding" === s.state ? void 0 : i({
                        currentLocation: t,
                        nextLocation: r,
                        historyAction: n
                    }) ? a : void 0
                }

                function Ge(e) {
                    let t = [];
                    return Y.forEach(((r, n) => {
                        e && !e(n) || (r.cancel(), t.push(n), Y.delete(n))
                    })), t
                }

                function Qe(e, t) {
                    if (x) {
                        return x(e, t.map((e => w(e, j.loaderData)))) || e.key
                    }
                    return e.key
                }

                function Ze(e, t) {
                    if (D) {
                        let r = Qe(e, t),
                            n = D[r];
                        if ("number" == typeof n) return n
                    }
                    return null
                }
                return P = {
                    get basename() {
                        return p
                    },
                    get state() {
                        return j
                    },
                    get routes() {
                        return f
                    },
                    get window() {
                        return t
                    },
                    initialize: function() {
                        if (y = e.history.listen((t => {
                                let {
                                    action: r,
                                    location: n,
                                    delta: o
                                } = t;
                                if (X) return void(X = !1);
                                u(0 === J.size || null != o, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                                let a = Xe({
                                    currentLocation: j.location,
                                    nextLocation: n,
                                    historyAction: r
                                });
                                return a && null != o ? (X = !0, e.history.go(-1 * o), void Je(a, {
                                    state: "blocked",
                                    location: n,
                                    proceed() {
                                        Je(a, {
                                            state: "proceeding",
                                            proceed: void 0,
                                            reset: void 0,
                                            location: n
                                        }), e.history.go(o)
                                    },
                                    reset() {
                                        let e = new Map(j.blockers);
                                        e.set(a, re), G({
                                            blockers: e
                                        })
                                    }
                                })) : de(r, n)
                            })), r) {
                            ! function(e, t) {
                                try {
                                    let r = e.sessionStorage.getItem(ae);
                                    if (r) {
                                        let e = JSON.parse(r);
                                        for (let [r, n] of Object.entries(e || {})) n && Array.isArray(n) && t.set(r, new Set(n || []))
                                    }
                                } catch (r) {}
                            }(t, _);
                            let e = () => function(e, t) {
                                if (t.size > 0) {
                                    let n = {};
                                    for (let [e, r] of t) n[e] = [...r];
                                    try {
                                        e.sessionStorage.setItem(ae, JSON.stringify(n))
                                    } catch (r) {
                                        u(!1, "Failed to save applied view transitions in sessionStorage (" + r + ").")
                                    }
                                }
                            }(t, _);
                            t.addEventListener("pagehide", e), B = () => t.removeEventListener("pagehide", e)
                        }
                        return j.initialized || de(n.Pop, j.location), P
                    },
                    subscribe: function(e) {
                        return E.add(e), () => E.delete(e)
                    },
                    enableScrollRestoration: function(e, t, r) {
                        if (D = e, R = t, x = r || null, !S && j.navigation === ee) {
                            S = !0;
                            let e = Ze(j.location, j.matches);
                            null != e && G({
                                restoreScrollPosition: e
                            })
                        }
                        return () => {
                            D = null, R = null, x = null
                        }
                    },
                    navigate: ie,
                    fetch: function(e, t, r, n) {
                        if (i) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
                        W.has(e) && qe(e);
                        let o = l || f,
                            a = se(j.location, j.matches, p, m.v7_prependBasename, r, t, null == n ? void 0 : n.relative),
                            s = b(o, a, p);
                        if (!s) return void Be(e, t, Se(404, {
                            pathname: a
                        }));
                        let {
                            path: c,
                            submission: u,
                            error: d
                        } = le(m.v7_normalizeFormMethod, !0, a, n);
                        if (d) return void Be(e, t, d);
                        let h = Ie(s, c);
                        T = !0 === (n && n.preventScrollReset), u && Te(u.formMethod) ? function(e, t, r, n, o, a) {
                            ge.apply(this, arguments)
                        }(e, t, c, h, s, u) : (K.set(e, {
                            routeId: t,
                            path: c
                        }), function(e, t, r, n, o, a) {
                            be.apply(this, arguments)
                        }(e, t, c, h, s, u))
                    },
                    revalidate: function() {
                        Ue(), G({
                            revalidation: "loading"
                        }), "submitting" !== j.navigation.state && ("idle" !== j.navigation.state ? de(C || j.historyAction, j.navigation.location, {
                            overrideNavigation: j.navigation
                        }) : de(j.historyAction, j.location, {
                            startUninterruptedRevalidation: !0
                        }))
                    },
                    createHref: t => e.history.createHref(t),
                    encodeLocation: t => e.history.encodeLocation(t),
                    getFetcher: ve,
                    deleteFetcher: ze,
                    dispose: function() {
                        y && y(), B && B(), E.clear(), k && k.abort(), j.fetchers.forEach(((e, t) => ze(t))), j.blockers.forEach(((e, t) => Ye(t)))
                    },
                    getBlocker: function(e, t) {
                        let r = j.blockers.get(e) || re;
                        return J.get(e) !== t && J.set(e, t), r
                    },
                    deleteBlocker: Ye,
                    _internalFetchControllers: W,
                    _internalActiveDeferreds: Y,
                    _internalSetRoutes: function(e) {
                        d = {}, l = g(e, s, void 0, d)
                    }
                }, P
            }
            Symbol("deferred");

            function se(e, t, r, n, o, a, i) {
                let s, l;
                if (null != a && "path" !== i) {
                    s = [];
                    for (let e of t)
                        if (s.push(e), e.route.id === a) {
                            l = e;
                            break
                        }
                } else s = t, l = t[t.length - 1];
                let c = B(o || ".", _(s).map((e => e.pathnameBase)), O(e.pathname, r) || e.pathname, "path" === i);
                return null == o && (c.search = e.search, c.hash = e.hash), null != o && "" !== o && "." !== o || !l || !l.route.index || ze(c.search) || (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), n && "/" !== r && (c.pathname = "/" === c.pathname ? r : z([r, c.pathname])), f(c)
            }

            function le(e, t, r, n) {
                if (!n || ! function(e) {
                        return null != e && ("formData" in e && null != e.formData || "body" in e && void 0 !== e.body)
                    }(n)) return {
                    path: r
                };
                if (n.formMethod && !Ce(n.formMethod)) return {
                    path: r,
                    error: Se(405, {
                        method: n.formMethod
                    })
                };
                let o, a, i = () => ({
                        path: r,
                        error: Se(400, {
                            type: "invalid-body"
                        })
                    }),
                    s = n.formMethod || "get",
                    l = e ? s.toUpperCase() : s.toLowerCase(),
                    u = Ae(r);
                if (void 0 !== n.body) {
                    if ("text/plain" === n.formEncType) {
                        if (!Te(l)) return i();
                        let e = "string" == typeof n.body ? n.body : n.body instanceof FormData || n.body instanceof URLSearchParams ? Array.from(n.body.entries()).reduce(((e, t) => {
                            let [r, n] = t;
                            return "" + e + r + "=" + n + "\n"
                        }), "") : String(n.body);
                        return {
                            path: r,
                            submission: {
                                formMethod: l,
                                formAction: u,
                                formEncType: n.formEncType,
                                formData: void 0,
                                json: void 0,
                                text: e
                            }
                        }
                    }
                    if ("application/json" === n.formEncType) {
                        if (!Te(l)) return i();
                        try {
                            let e = "string" == typeof n.body ? JSON.parse(n.body) : n.body;
                            return {
                                path: r,
                                submission: {
                                    formMethod: l,
                                    formAction: u,
                                    formEncType: n.formEncType,
                                    formData: void 0,
                                    json: e,
                                    text: void 0
                                }
                            }
                        } catch (m) {
                            return i()
                        }
                    }
                }
                if (c("function" == typeof FormData, "FormData is not available in this environment"), n.formData) o = ge(n.formData), a = n.formData;
                else if (n.body instanceof FormData) o = ge(n.body), a = n.body;
                else if (n.body instanceof URLSearchParams) o = n.body, a = be(o);
                else if (null == n.body) o = new URLSearchParams, a = new FormData;
                else try {
                    o = new URLSearchParams(n.body), a = be(o)
                } catch (m) {
                    return i()
                }
                let d = {
                    formMethod: l,
                    formAction: u,
                    formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
                    formData: a,
                    json: void 0,
                    text: void 0
                };
                if (Te(d.formMethod)) return {
                    path: r,
                    submission: d
                };
                let h = p(r);
                return t && h.search && ze(h.search) && o.append("index", ""), h.search = "?" + o, {
                    path: f(h),
                    submission: d
                }
            }

            function ce(e, t) {
                let r = e;
                if (t) {
                    let n = e.findIndex((e => e.route.id === t));
                    n >= 0 && (r = e.slice(0, n))
                }
                return r
            }

            function ue(e, t, r, n, o, i, s, l, c, u, d, h, f, p) {
                let m = p ? Object.values(p)[0] : f ? Object.values(f)[0] : void 0,
                    v = e.createURL(t.location),
                    y = e.createURL(o),
                    g = p ? Object.keys(p)[0] : void 0,
                    w = ce(r, g).filter(((e, r) => {
                        if (e.route.lazy) return !0;
                        if (null == e.route.loader) return !1;
                        if (function(e, t, r) {
                                let n = !t || r.route.id !== t.route.id,
                                    o = void 0 === e[r.route.id];
                                return n || o
                            }(t.loaderData, t.matches[r], e) || s.some((t => t === e.route.id))) return !0;
                        let o = t.matches[r],
                            l = e;
                        return he(e, a({
                            currentUrl: v,
                            currentParams: o.params,
                            nextUrl: y,
                            nextParams: l.params
                        }, n, {
                            actionResult: m,
                            defaultShouldRevalidate: i || v.pathname + v.search === y.pathname + y.search || v.search !== y.search || de(o, l)
                        }))
                    })),
                    E = [];
                return c.forEach(((e, o) => {
                    if (!r.some((t => t.route.id === e.routeId))) return;
                    let s = b(d, e.path, h);
                    if (!s) return void E.push({
                        key: o,
                        routeId: e.routeId,
                        path: e.path,
                        matches: null,
                        match: null,
                        controller: null
                    });
                    let c = t.fetchers.get(o),
                        f = Ie(s, e.path),
                        p = !1;
                    p = !u.has(o) && (!!l.includes(o) || (c && "idle" !== c.state && void 0 === c.data ? i : he(f, a({
                        currentUrl: v,
                        currentParams: t.matches[t.matches.length - 1].params,
                        nextUrl: y,
                        nextParams: r[r.length - 1].params
                    }, n, {
                        actionResult: m,
                        defaultShouldRevalidate: i
                    })))), p && E.push({
                        key: o,
                        routeId: e.routeId,
                        path: e.path,
                        matches: s,
                        match: f,
                        controller: new AbortController
                    })
                })), [w, E]
            }

            function de(e, t) {
                let r = e.route.path;
                return e.pathname !== t.pathname || null != r && r.endsWith("*") && e.params["*"] !== t.params["*"]
            }

            function he(e, t) {
                if (e.route.shouldRevalidate) {
                    let r = e.route.shouldRevalidate(t);
                    if ("boolean" == typeof r) return r
                }
                return t.defaultShouldRevalidate
            }

            function fe(e, t, r) {
                return pe.apply(this, arguments)
            }

            function pe() {
                return (pe = (0, o.A)((function*(e, t, r) {
                    if (!e.lazy) return;
                    let n = yield e.lazy();
                    if (!e.lazy) return;
                    let o = r[e.id];
                    c(o, "No route found in manifest");
                    let i = {};
                    for (let a in n) {
                        let e = void 0 !== o[a] && "hasErrorBoundary" !== a;
                        u(!e, 'Route "' + o.id + '" has a static property "' + a + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + a + '" will be ignored.'), e || y.has(a) || (i[a] = n[a])
                    }
                    Object.assign(o, i), Object.assign(o, a({}, t(o), {
                        lazy: void 0
                    }))
                }))).apply(this, arguments)
            }

            function me(e, t, r, n, o, a, i, s) {
                return ve.apply(this, arguments)
            }

            function ve() {
                return (ve = (0, o.A)((function*(e, t, r, n, o, a, i, s) {
                    let l, u, d;
                    void 0 === s && (s = {});
                    let h = e => {
                        let n, o = new Promise(((e, t) => n = t));
                        return d = () => n(), t.signal.addEventListener("abort", d), Promise.race([e({
                            request: t,
                            params: r.params,
                            context: s.requestContext
                        }), o])
                    };
                    try {
                        let n = r.route[e];
                        if (r.route.lazy)
                            if (n) {
                                let e, t = yield Promise.all([h(n).catch((t => {
                                    e = t
                                })), fe(r.route, a, o)]);
                                if (e) throw e;
                                u = t[0]
                            } else {
                                if (yield fe(r.route, a, o), n = r.route[e], !n) {
                                    if ("action" === e) {
                                        let e = new URL(t.url),
                                            n = e.pathname + e.search;
                                        throw Se(405, {
                                            method: t.method,
                                            pathname: n,
                                            routeId: r.route.id
                                        })
                                    }
                                    return {
                                        type: v.data,
                                        data: void 0
                                    }
                                }
                                u = yield h(n)
                            }
                        else {
                            if (!n) {
                                let e = new URL(t.url);
                                throw Se(404, {
                                    pathname: e.pathname + e.search
                                })
                            }
                            u = yield h(n)
                        }
                        c(void 0 !== u, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + r.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.")
                    } catch (m) {
                        l = v.error, u = m
                    } finally {
                        d && t.signal.removeEventListener("abort", d)
                    }
                    if (je(u)) {
                        let e, o = u.status;
                        if (Q.has(o)) {
                            let e = u.headers.get("Location");
                            if (c(e, "Redirects returned/thrown from loaders/actions must have a Location header"), ne.test(e)) {
                                if (!s.isStaticRequest) {
                                    let r = new URL(t.url),
                                        n = e.startsWith("//") ? new URL(r.protocol + e) : new URL(e),
                                        o = null != O(n.pathname, i);
                                    n.origin === r.origin && o && (e = n.pathname + n.search + n.hash)
                                }
                            } else e = se(new URL(t.url), n.slice(0, n.indexOf(r) + 1), i, !0, e);
                            if (s.isStaticRequest) throw u.headers.set("Location", e), u;
                            return {
                                type: v.redirect,
                                status: o,
                                location: e,
                                revalidate: null !== u.headers.get("X-Remix-Revalidate"),
                                reloadDocument: null !== u.headers.get("X-Remix-Reload-Document")
                            }
                        }
                        if (s.isRouteRequest) {
                            throw {
                                type: l === v.error ? v.error : v.data,
                                response: u
                            }
                        }
                        let a = u.headers.get("Content-Type");
                        return e = a && /\bapplication\/json\b/.test(a) ? yield u.json(): yield u.text(), l === v.error ? {
                            type: l,
                            error: new V(o, u.statusText, e),
                            headers: u.headers
                        } : {
                            type: v.data,
                            data: e,
                            statusCode: u.status,
                            headers: u.headers
                        }
                    }
                    return l === v.error ? {
                        type: l,
                        error: u
                    } : function(e) {
                        let t = e;
                        return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData
                    }(u) ? {
                        type: v.deferred,
                        deferredData: u,
                        statusCode: null == (f = u.init) ? void 0 : f.status,
                        headers: (null == (p = u.init) ? void 0 : p.headers) && new Headers(u.init.headers)
                    } : {
                        type: v.data,
                        data: u
                    };
                    var f, p
                }))).apply(this, arguments)
            }

            function ye(e, t, r, n) {
                let o = e.createURL(Ae(t)).toString(),
                    a = {
                        signal: r
                    };
                if (n && Te(n.formMethod)) {
                    let {
                        formMethod: e,
                        formEncType: t
                    } = n;
                    a.method = e.toUpperCase(), "application/json" === t ? (a.headers = new Headers({
                        "Content-Type": t
                    }), a.body = JSON.stringify(n.json)) : "text/plain" === t ? a.body = n.text : "application/x-www-form-urlencoded" === t && n.formData ? a.body = ge(n.formData) : a.body = n.formData
                }
                return new Request(o, a)
            }

            function ge(e) {
                let t = new URLSearchParams;
                for (let [r, n] of e.entries()) t.append(r, "string" == typeof n ? n : n.name);
                return t
            }

            function be(e) {
                let t = new FormData;
                for (let [r, n] of e.entries()) t.append(r, n);
                return t
            }

            function we(e, t, r, n, o) {
                let a, i = {},
                    s = null,
                    l = !1,
                    u = {};
                return r.forEach(((r, d) => {
                    let h = t[d].route.id;
                    if (c(!Me(r), "Cannot handle redirect results in processLoaderData"), ke(r)) {
                        let t = xe(e, h),
                            o = r.error;
                        n && (o = Object.values(n)[0], n = void 0), s = s || {}, null == s[t.route.id] && (s[t.route.id] = o), i[h] = void 0, l || (l = !0, a = K(r.error) ? r.error.status : 500), r.headers && (u[h] = r.headers)
                    } else Pe(r) ? (o.set(h, r.deferredData), i[h] = r.deferredData.data) : i[h] = r.data, null == r.statusCode || 200 === r.statusCode || l || (a = r.statusCode), r.headers && (u[h] = r.headers)
                })), n && (s = n, i[Object.keys(n)[0]] = void 0), {
                    loaderData: i,
                    errors: s,
                    statusCode: a || 200,
                    loaderHeaders: u
                }
            }

            function Ee(e, t, r, n, o, i, s, l) {
                let {
                    loaderData: u,
                    errors: d
                } = we(t, r, n, o, l);
                for (let h = 0; h < i.length; h++) {
                    let {
                        key: t,
                        match: r,
                        controller: n
                    } = i[h];
                    c(void 0 !== s && void 0 !== s[h], "Did not find corresponding fetcher result");
                    let o = s[h];
                    if (!n || !n.signal.aborted)
                        if (ke(o)) {
                            let n = xe(e.matches, null == r ? void 0 : r.route.id);
                            d && d[n.route.id] || (d = a({}, d, {
                                [n.route.id]: o.error
                            })), e.fetchers.delete(t)
                        } else if (Me(o)) c(!1, "Unhandled fetcher revalidation redirect");
                    else if (Pe(o)) c(!1, "Unhandled fetcher deferred data");
                    else {
                        let r = He(o.data);
                        e.fetchers.set(t, r)
                    }
                }
                return {
                    loaderData: u,
                    errors: d
                }
            }

            function De(e, t, r, n) {
                let o = a({}, t);
                for (let a of r) {
                    let r = a.route.id;
                    if (t.hasOwnProperty(r) ? void 0 !== t[r] && (o[r] = t[r]) : void 0 !== e[r] && a.route.loader && (o[r] = e[r]), n && n.hasOwnProperty(r)) break
                }
                return o
            }

            function xe(e, t) {
                return (t ? e.slice(0, e.findIndex((e => e.route.id === t)) + 1) : [...e]).reverse().find((e => !0 === e.route.hasErrorBoundary)) || e[0]
            }

            function Re(e) {
                let t = 1 === e.length ? e[0] : e.find((e => e.index || !e.path || "/" === e.path)) || {
                    id: "__shim-error-route__"
                };
                return {
                    matches: [{
                        params: {},
                        pathname: "",
                        pathnameBase: "",
                        route: t
                    }],
                    route: t
                }
            }

            function Se(e, t) {
                let {
                    pathname: r,
                    routeId: n,
                    method: o,
                    type: a
                } = void 0 === t ? {} : t, i = "Unknown Server Error", s = "Unknown @remix-run/router error";
                return 400 === e ? (i = "Bad Request", o && r && n ? s = "You made a " + o + ' request to "' + r + '" but did not provide a `loader` for route "' + n + '", so there is no way to handle the request.' : "defer-action" === a ? s = "defer() is not supported in actions" : "invalid-body" === a && (s = "Unable to encode submission body")) : 403 === e ? (i = "Forbidden", s = 'Route "' + n + '" does not match URL "' + r + '"') : 404 === e ? (i = "Not Found", s = 'No route matches URL "' + r + '"') : 405 === e && (i = "Method Not Allowed", o && r && n ? s = "You made a " + o.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + n + '", so there is no way to handle the request.' : o && (s = 'Invalid request method "' + o.toUpperCase() + '"')), new V(e || 500, i, new Error(s), !0)
            }

            function Le(e) {
                for (let t = e.length - 1; t >= 0; t--) {
                    let r = e[t];
                    if (Me(r)) return {
                        result: r,
                        idx: t
                    }
                }
            }

            function Ae(e) {
                return f(a({}, "string" == typeof e ? p(e) : e, {
                    hash: ""
                }))
            }

            function Pe(e) {
                return e.type === v.deferred
            }

            function ke(e) {
                return e.type === v.error
            }

            function Me(e) {
                return (e && e.type) === v.redirect
            }

            function je(e) {
                return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "object" == typeof e.headers && void 0 !== e.body
            }

            function Ce(e) {
                return G.has(e.toLowerCase())
            }

            function Te(e) {
                return J.has(e.toLowerCase())
            }

            function Oe(e, t, r, n, o, a) {
                return Ue.apply(this, arguments)
            }

            function Ue() {
                return (Ue = (0, o.A)((function*(e, t, r, n, o, a) {
                    for (let i = 0; i < r.length; i++) {
                        let s = r[i],
                            l = t[i];
                        if (!l) continue;
                        let u = e.find((e => e.route.id === l.route.id)),
                            d = null != u && !de(u, l) && void 0 !== (a && a[l.route.id]);
                        if (Pe(s) && (o || d)) {
                            let e = n[i];
                            c(e, "Expected an AbortSignal for revalidating fetcher deferred result"), yield _e(s, e, o).then((e => {
                                e && (r[i] = e || r[i])
                            }))
                        }
                    }
                }))).apply(this, arguments)
            }

            function _e(e, t, r) {
                return Be.apply(this, arguments)
            }

            function Be() {
                return (Be = (0, o.A)((function*(e, t, r) {
                    if (void 0 === r && (r = !1), !(yield e.deferredData.resolveData(t))) {
                        if (r) try {
                            return {
                                type: v.data,
                                data: e.deferredData.unwrappedData
                            }
                        } catch (n) {
                            return {
                                type: v.error,
                                error: n
                            }
                        }
                        return {
                            type: v.data,
                            data: e.deferredData.data
                        }
                    }
                }))).apply(this, arguments)
            }

            function ze(e) {
                return new URLSearchParams(e).getAll("index").some((e => "" === e))
            }

            function Ie(e, t) {
                let r = "string" == typeof t ? p(t).search : t.search;
                if (e[e.length - 1].route.index && ze(r || "")) return e[e.length - 1];
                let n = _(e);
                return n[n.length - 1]
            }

            function Fe(e) {
                let {
                    formMethod: t,
                    formAction: r,
                    formEncType: n,
                    text: o,
                    formData: a,
                    json: i
                } = e;
                if (t && r && n) return null != o ? {
                    formMethod: t,
                    formAction: r,
                    formEncType: n,
                    formData: void 0,
                    json: void 0,
                    text: o
                } : null != a ? {
                    formMethod: t,
                    formAction: r,
                    formEncType: n,
                    formData: a,
                    json: void 0,
                    text: void 0
                } : void 0 !== i ? {
                    formMethod: t,
                    formAction: r,
                    formEncType: n,
                    formData: void 0,
                    json: i,
                    text: void 0
                } : void 0
            }

            function Ne(e, t) {
                if (t) {
                    return {
                        state: "loading",
                        location: e,
                        formMethod: t.formMethod,
                        formAction: t.formAction,
                        formEncType: t.formEncType,
                        formData: t.formData,
                        json: t.json,
                        text: t.text
                    }
                }
                return {
                    state: "loading",
                    location: e,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0
                }
            }

            function We(e, t) {
                if (e) {
                    return {
                        state: "loading",
                        formMethod: e.formMethod,
                        formAction: e.formAction,
                        formEncType: e.formEncType,
                        formData: e.formData,
                        json: e.json,
                        text: e.text,
                        data: t
                    }
                }
                return {
                    state: "loading",
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0,
                    data: t
                }
            }

            function He(e) {
                return {
                    state: "idle",
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0,
                    data: e
                }
            }
        },
        61347: (e, t, r) => {
            var n;
            r.d(t, {
                Ge: () => u,
                Ys: () => c,
                pg: () => v
            });
            var o = r(64709),
                a = r(11855),
                i = r(89809),
                s = r(11999);

            function l() {
                return l = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, l.apply(this, arguments)
            }
            new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

            function c(e, t) {
                return (0, s.aE)({
                    basename: null == t ? void 0 : t.basename,
                    future: l({}, null == t ? void 0 : t.future, {
                        v7_prependBasename: !0
                    }),
                    history: (0, s.zR)({
                        window: null == t ? void 0 : t.window
                    }),
                    hydrationData: (null == t ? void 0 : t.hydrationData) || d(),
                    routes: e,
                    mapRouteProperties: i.wE,
                    window: null == t ? void 0 : t.window
                }).initialize()
            }

            function u(e, t) {
                return (0, s.aE)({
                    basename: null == t ? void 0 : t.basename,
                    future: l({}, null == t ? void 0 : t.future, {
                        v7_prependBasename: !0
                    }),
                    history: (0, s.TM)({
                        window: null == t ? void 0 : t.window
                    }),
                    hydrationData: (null == t ? void 0 : t.hydrationData) || d(),
                    routes: e,
                    mapRouteProperties: i.wE,
                    window: null == t ? void 0 : t.window
                }).initialize()
            }

            function d() {
                var e;
                let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
                return t && t.errors && (t = l({}, t, {
                    errors: h(t.errors)
                })), t
            }

            function h(e) {
                if (!e) return null;
                let t = Object.entries(e),
                    r = {};
                for (let [o, a] of t)
                    if (a && "RouteErrorResponse" === a.__type) r[o] = new s.VV(a.status, a.statusText, a.data, !0 === a.internal);
                    else if (a && "Error" === a.__type) {
                    if (a.__subType) {
                        let e = window[a.__subType];
                        if ("function" == typeof e) try {
                            let t = new e(a.message);
                            t.stack = "", r[o] = t
                        } catch (n) {}
                    }
                    if (null == r[o]) {
                        let e = new Error(a.message);
                        e.stack = "", r[o] = e
                    }
                } else r[o] = a;
                return r
            }
            const f = a.createContext({
                isTransitioning: !1
            });
            const p = (n || (n = r.t(a, 2))).startTransition;
            class m {
                constructor() {
                    this.status = "pending", this.promise = new Promise(((e, t) => {
                        this.resolve = t => {
                            "pending" === this.status && (this.status = "resolved", e(t))
                        }, this.reject = e => {
                            "pending" === this.status && (this.status = "rejected", t(e))
                        }
                    }))
                }
            }

            function v(e) {
                let {
                    fallbackElement: t,
                    router: r,
                    future: n
                } = e, [s, l] = a.useState(r.state), [c, u] = a.useState(), [d, h] = a.useState({
                    isTransitioning: !1
                }), [v, g] = a.useState(), [b, w] = a.useState(), [E, D] = a.useState(), {
                    v7_startTransition: x
                } = n || {}, R = a.useCallback((e => {
                    x ? function(e) {
                        p ? p(e) : e()
                    }(e) : e()
                }), [x]), S = a.useCallback(((e, t) => {
                    let {
                        unstable_viewTransitionOpts: n
                    } = t;
                    n && null != r.window && "function" == typeof r.window.document.startViewTransition ? b && v ? (v.resolve(), b.skipTransition(), D({
                        state: e,
                        currentLocation: n.currentLocation,
                        nextLocation: n.nextLocation
                    })) : (u(e), h({
                        isTransitioning: !0,
                        currentLocation: n.currentLocation,
                        nextLocation: n.nextLocation
                    })) : R((() => l(e)))
                }), [R, b, v, r.window]);
                a.useLayoutEffect((() => r.subscribe(S)), [r, S]), a.useEffect((() => {
                    d.isTransitioning && g(new m)
                }), [d.isTransitioning]), a.useEffect((() => {
                    if (v && c && r.window) {
                        let e = c,
                            t = v.promise,
                            n = r.window.document.startViewTransition((0, o.A)((function*() {
                                R((() => l(e))), yield t
                            })));
                        n.finished.finally((() => {
                            g(void 0), w(void 0), u(void 0), h({
                                isTransitioning: !1
                            })
                        })), w(n)
                    }
                }), [R, c, v, r.window]), a.useEffect((() => {
                    v && c && s.location.key === c.location.key && v.resolve()
                }), [v, b, s.location, c]), a.useEffect((() => {
                    !d.isTransitioning && E && (u(E.state), h({
                        isTransitioning: !0,
                        currentLocation: E.currentLocation,
                        nextLocation: E.nextLocation
                    }), D(void 0))
                }), [d.isTransitioning, E]);
                let L = a.useMemo((() => ({
                        createHref: r.createHref,
                        encodeLocation: r.encodeLocation,
                        go: e => r.navigate(e),
                        push: (e, t, n) => r.navigate(e, {
                            state: t,
                            preventScrollReset: null == n ? void 0 : n.preventScrollReset
                        }),
                        replace: (e, t, n) => r.navigate(e, {
                            replace: !0,
                            state: t,
                            preventScrollReset: null == n ? void 0 : n.preventScrollReset
                        })
                    })), [r]),
                    A = r.basename || "/",
                    P = a.useMemo((() => ({
                        router: r,
                        navigator: L,
                        static: !1,
                        basename: A
                    })), [r, L, A]);
                return a.createElement(a.Fragment, null, a.createElement(i.sp.Provider, {
                    value: P
                }, a.createElement(i.Rq.Provider, {
                    value: s
                }, a.createElement(f.Provider, {
                    value: d
                }, a.createElement(i.Ix, {
                    basename: A,
                    location: s.location,
                    navigationType: s.historyAction,
                    navigator: L
                }, s.initialized ? a.createElement(y, {
                    routes: r.routes,
                    state: s
                }) : t)))), null)
            }

            function y(e) {
                let {
                    routes: t,
                    state: r
                } = e;
                return (0, i.ph)(t, void 0, r)
            }
            "undefined" != typeof window && void 0 !== window.document && window.document.createElement;
            var g, b;
            (function(e) {
                e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
            })(g || (g = {})),
            function(e) {
                e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
            }(b || (b = {}))
        },
        89809: (e, t, r) => {
            var n;
            r.d(t, {
                Eu: () => M,
                FE: () => S,
                Ix: () => k,
                LG: () => L,
                Rq: () => l,
                ph: () => v,
                qh: () => P,
                sp: () => s,
                sv: () => A,
                wE: () => j,
                zy: () => p
            });
            var o = r(11855),
                a = r(11999);

            function i() {
                return i = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, i.apply(this, arguments)
            }
            const s = o.createContext(null);
            const l = o.createContext(null);
            const c = o.createContext(null);
            const u = o.createContext(null);
            const d = o.createContext({
                outlet: null,
                matches: [],
                isDataRoute: !1
            });
            const h = o.createContext(null);

            function f() {
                return null != o.useContext(u)
            }

            function p() {
                return f() || (0, a.Oi)(!1), o.useContext(u).location
            }
            const m = o.createContext(null);

            function v(e, t, r) {
                f() || (0, a.Oi)(!1);
                let {
                    navigator: n
                } = o.useContext(c), {
                    matches: s
                } = o.useContext(d), l = s[s.length - 1], h = l ? l.params : {}, m = (l && l.pathname, l ? l.pathnameBase : "/");
                l && l.route;
                let v, y = p();
                if (t) {
                    var g;
                    let e = "string" == typeof t ? (0, a.Rr)(t) : t;
                    "/" === m || (null == (g = e.pathname) ? void 0 : g.startsWith(m)) || (0, a.Oi)(!1), v = e
                } else v = y;
                let b = v.pathname || "/",
                    w = "/" === m ? b : b.slice(m.length) || "/",
                    D = (0, a.ue)(e, {
                        pathname: w
                    });
                let x = E(D && D.map((e => Object.assign({}, e, {
                    params: Object.assign({}, h, e.params),
                    pathname: (0, a.HS)([m, n.encodeLocation ? n.encodeLocation(e.pathname).pathname : e.pathname]),
                    pathnameBase: "/" === e.pathnameBase ? m : (0, a.HS)([m, n.encodeLocation ? n.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
                }))), s, r);
                return t && x ? o.createElement(u.Provider, {
                    value: {
                        location: i({
                            pathname: "/",
                            search: "",
                            hash: "",
                            state: null,
                            key: "default"
                        }, v),
                        navigationType: a.rc.Pop
                    }
                }, x) : x
            }

            function y() {
                let e = function() {
                        var e;
                        let t = o.useContext(h),
                            r = x(D.UseRouteError),
                            n = R(D.UseRouteError);
                        if (t) return t;
                        return null == (e = r.errors) ? void 0 : e[n]
                    }(),
                    t = (0, a.pX)(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
                    r = e instanceof Error ? e.stack : null,
                    n = "rgba(200,200,200, 0.5)",
                    i = {
                        padding: "0.5rem",
                        backgroundColor: n
                    };
                return o.createElement(o.Fragment, null, o.createElement("h2", null, "Unexpected Application Error!"), o.createElement("h3", {
                    style: {
                        fontStyle: "italic"
                    }
                }, t), r ? o.createElement("pre", {
                    style: i
                }, r) : null, null)
            }
            const g = o.createElement(y, null);
            class b extends o.Component {
                constructor(e) {
                    super(e), this.state = {
                        location: e.location,
                        revalidation: e.revalidation,
                        error: e.error
                    }
                }
                static getDerivedStateFromError(e) {
                    return {
                        error: e
                    }
                }
                static getDerivedStateFromProps(e, t) {
                    return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? {
                        error: e.error,
                        location: e.location,
                        revalidation: e.revalidation
                    } : {
                        error: e.error || t.error,
                        location: t.location,
                        revalidation: e.revalidation || t.revalidation
                    }
                }
                componentDidCatch(e, t) {
                    console.error("React Router caught the following error during render", e, t)
                }
                render() {
                    return this.state.error ? o.createElement(d.Provider, {
                        value: this.props.routeContext
                    }, o.createElement(h.Provider, {
                        value: this.state.error,
                        children: this.props.component
                    })) : this.props.children
                }
            }

            function w(e) {
                let {
                    routeContext: t,
                    match: r,
                    children: n
                } = e, a = o.useContext(s);
                return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), o.createElement(d.Provider, {
                    value: t
                }, n)
            }

            function E(e, t, r) {
                var n;
                if (void 0 === t && (t = []), void 0 === r && (r = null), null == e) {
                    var i;
                    if (null == (i = r) || !i.errors) return null;
                    e = r.matches
                }
                let s = e,
                    l = null == (n = r) ? void 0 : n.errors;
                if (null != l) {
                    let e = s.findIndex((e => e.route.id && (null == l ? void 0 : l[e.route.id])));
                    e >= 0 || (0, a.Oi)(!1), s = s.slice(0, Math.min(s.length, e + 1))
                }
                return s.reduceRight(((e, n, a) => {
                    let i = n.route.id ? null == l ? void 0 : l[n.route.id] : null,
                        c = null;
                    r && (c = n.route.errorElement || g);
                    let u = t.concat(s.slice(0, a + 1)),
                        d = () => {
                            let t;
                            return t = i ? c : n.route.Component ? o.createElement(n.route.Component, null) : n.route.element ? n.route.element : e, o.createElement(w, {
                                match: n,
                                routeContext: {
                                    outlet: e,
                                    matches: u,
                                    isDataRoute: null != r
                                },
                                children: t
                            })
                        };
                    return r && (n.route.ErrorBoundary || n.route.errorElement || 0 === a) ? o.createElement(b, {
                        location: r.location,
                        revalidation: r.revalidation,
                        component: c,
                        error: i,
                        children: d(),
                        routeContext: {
                            outlet: null,
                            matches: u,
                            isDataRoute: !0
                        }
                    }) : d()
                }), null)
            }
            var D = function(e) {
                return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
            }(D || {});

            function x(e) {
                let t = o.useContext(l);
                return t || (0, a.Oi)(!1), t
            }

            function R(e) {
                let t = function() {
                        let e = o.useContext(d);
                        return e || (0, a.Oi)(!1), e
                    }(),
                    r = t.matches[t.matches.length - 1];
                return r.route.id || (0, a.Oi)(!1), r.route.id
            }

            function S() {
                let {
                    matches: e,
                    loaderData: t
                } = x(D.UseMatches);
                return o.useMemo((() => e.map((e => (0, a.ro)(e, t)))), [e, t])
            }

            function L() {
                let e = x(D.UseLoaderData),
                    t = R(D.UseLoaderData);
                if (!e.errors || null == e.errors[t]) return e.loaderData[t];
                console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
            }(n || (n = r.t(o, 2))).startTransition;

            function A(e) {
                return function(e) {
                    let t = o.useContext(d).outlet;
                    return t ? o.createElement(m.Provider, {
                        value: e
                    }, t) : t
                }(e.context)
            }

            function P(e) {
                (0, a.Oi)(!1)
            }

            function k(e) {
                let {
                    basename: t = "/",
                    children: r = null,
                    location: n,
                    navigationType: i = a.rc.Pop,
                    navigator: s,
                    static: l = !1
                } = e;
                f() && (0, a.Oi)(!1);
                let d = t.replace(/^\/*/, "/"),
                    h = o.useMemo((() => ({
                        basename: d,
                        navigator: s,
                        static: l
                    })), [d, s, l]);
                "string" == typeof n && (n = (0, a.Rr)(n));
                let {
                    pathname: p = "/",
                    search: m = "",
                    hash: v = "",
                    state: y = null,
                    key: g = "default"
                } = n, b = o.useMemo((() => {
                    let e = (0, a.pb)(p, d);
                    return null == e ? null : {
                        location: {
                            pathname: e,
                            search: m,
                            hash: v,
                            state: y,
                            key: g
                        },
                        navigationType: i
                    }
                }), [d, p, m, v, y, g, i]);
                return null == b ? null : o.createElement(c.Provider, {
                    value: h
                }, o.createElement(u.Provider, {
                    children: r,
                    value: b
                }))
            }
            new Promise((() => {}));
            o.Component;

            function M(e, t) {
                void 0 === t && (t = []);
                let r = [];
                return o.Children.forEach(e, ((e, n) => {
                    if (!o.isValidElement(e)) return;
                    let i = [...t, n];
                    if (e.type === o.Fragment) return void r.push.apply(r, M(e.props.children, i));
                    e.type !== P && (0, a.Oi)(!1), e.props.index && e.props.children && (0, a.Oi)(!1);
                    let s = {
                        id: e.props.id || i.join("-"),
                        caseSensitive: e.props.caseSensitive,
                        element: e.props.element,
                        Component: e.props.Component,
                        index: e.props.index,
                        path: e.props.path,
                        loader: e.props.loader,
                        action: e.props.action,
                        errorElement: e.props.errorElement,
                        ErrorBoundary: e.props.ErrorBoundary,
                        hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement,
                        shouldRevalidate: e.props.shouldRevalidate,
                        handle: e.props.handle,
                        lazy: e.props.lazy
                    };
                    e.props.children && (s.children = M(e.props.children, i)), r.push(s)
                })), r
            }

            function j(e) {
                let t = {
                    hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement
                };
                return e.Component && Object.assign(t, {
                    element: o.createElement(e.Component),
                    Component: void 0
                }), e.ErrorBoundary && Object.assign(t, {
                    errorElement: o.createElement(e.ErrorBoundary),
                    ErrorBoundary: void 0
                }), t
            }
        }
    }
]);