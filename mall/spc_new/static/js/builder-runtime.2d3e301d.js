(() => {
    "use strict";
    var e, r, t, o, a, n = {},
        i = {};

    function l(e) {
        var r = i[e];
        if (void 0 !== r) return r.exports;
        var t = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, l), t.loaded = !0, t.exports
    }
    l.m = n, e = [], l.O = (r, t, o, a) => {
        if (!t) {
            var n = 1 / 0;
            for (d = 0; d < e.length; d++) {
                for (var [t, o, a] = e[d], i = !0, s = 0; s < t.length; s++)(!1 & a || n >= a) && Object.keys(l.O).every((e => l.O[e](t[s]))) ? t.splice(s--, 1) : (i = !1, a < n && (n = a));
                if (i) {
                    e.splice(d--, 1);
                    var c = o();
                    void 0 !== c && (r = c)
                }
            }
            return r
        }
        a = a || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > a; d--) e[d] = e[d - 1];
        e[d] = [t, o, a]
    }, l.n = e => {
        var r = e && e.__esModule ? () => e.default : () => e;
        return l.d(r, {
            a: r
        }), r
    }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, l.t = function(e, o) {
        if (1 & o && (e = this(e)), 8 & o) return e;
        if ("object" == typeof e && e) {
            if (4 & o && e.__esModule) return e;
            if (16 & o && "function" == typeof e.then) return e
        }
        var a = Object.create(null);
        l.r(a);
        var n = {};
        r = r || [null, t({}), t([]), t(t)];
        for (var i = 2 & o && e;
            "object" == typeof i && !~r.indexOf(i); i = t(i)) Object.getOwnPropertyNames(i).forEach((r => n[r] = () => e[r]));
        return n.default = () => e, l.d(a, n), a
    }, l.d = (e, r) => {
        for (var t in r) l.o(r, t) && !l.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
        })
    }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((r, t) => (l.f[t](e, r), r)), [])), l.u = e => "static/js/async/" + ({
        131: "(region$)/privacyPolicy/page",
        152: "(region$)/seller$/page",
        264: "(region$)/partner/creator-agency/page",
        417: "(region$)/seller$/shopify/page",
        497: "(region$)/seller$/sell/page",
        515: "(region$)/blog/page",
        530: "page",
        643: "(region$)/seller$/live/page",
        770: "(region$)/blog/(title)/(id)/page",
        793: "404/page",
        827: "(region$)/seller$/promote/page",
        872: "(region$)/seller$/creators/page",
        878: "(region$)/seller$/manage/page",
        917: "(region$)/seller$/create/page",
        966: "login"
    }[e] || e) + "." + {
        131: "31bb3f98",
        152: "f8e848b7",
        208: "d1e2eedd",
        264: "b8ccf240",
        316: "8042e105",
        320: "2f19a270",
        327: "428f3671",
        416: "3ea05792",
        417: "96c18f48",
        497: "cfcb7c65",
        515: "cc2ac250",
        522: "e8bed163",
        530: "3928702e",
        643: "0f62aca0",
        720: "e90f1076",
        724: "1509b17b",
        755: "c90d0412",
        767: "d7dbc50b",
        770: "43216619",
        793: "da627712",
        827: "86460fa3",
        836: "46c65ee7",
        872: "af75585a",
        878: "2211c672",
        917: "73e5cfc5",
        927: "561d15d0",
        966: "828bb7b4"
    }[e] + ".js", l.miniCssF = e => "static/css/async/" + ({
        131: "(region$)/privacyPolicy/page",
        264: "(region$)/partner/creator-agency/page",
        417: "(region$)/seller$/shopify/page",
        497: "(region$)/seller$/sell/page",
        515: "(region$)/blog/page",
        643: "(region$)/seller$/live/page",
        770: "(region$)/blog/(title)/(id)/page",
        827: "(region$)/seller$/promote/page",
        872: "(region$)/seller$/creators/page",
        878: "(region$)/seller$/manage/page",
        917: "(region$)/seller$/create/page",
        966: "login"
    }[e] || e) + "." + {
        131: "8ee829f4",
        264: "4c91d5c7",
        320: "37ae137a",
        416: "a083a49a",
        417: "4c91d5c7",
        497: "4c91d5c7",
        515: "3101a34f",
        643: "d4fd8319",
        724: "db5cd0d8",
        767: "326f9c9e",
        770: "af28134b",
        827: "4c91d5c7",
        872: "4c91d5c7",
        878: "4c91d5c7",
        917: "4c91d5c7",
        966: "77b1583f"
    }[e] + ".css", l.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), l.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), o = {}, a = "portal:", l.l = (e, r, t, n) => {
        if (o[e]) o[e].push(r);
        else {
            var i, s;
            if (void 0 !== t)
                for (var c = document.getElementsByTagName("script"), d = 0; d < c.length; d++) {
                    var f = c[d];
                    if (f.getAttribute("src") == e || f.getAttribute("data-webpack") == a + t) {
                        i = f;
                        break
                    }
                }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, l.nc && i.setAttribute("nonce", l.nc), i.setAttribute("data-webpack", a + t), i.src = e), o[e] = [r];
            var g = (r, t) => {
                    i.onerror = i.onload = null, clearTimeout(p);
                    var a = o[e];
                    if (delete o[e], i.parentNode && i.parentNode.removeChild(i), a && a.forEach((e => e(t))), r) return r(t)
                },
                p = setTimeout(g.bind(null, void 0, {
                    type: "timeout",
                    target: i
                }), 12e4);
            i.onerror = g.bind(null, i.onerror), i.onload = g.bind(null, i.onload), s && document.head.appendChild(i)
        }
    }, l.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), l.p = "//sf16-website.neutral.ttwstatic.com/obj/tiktok_web_static/i18n/ecom/portal/", (() => {
        if ("undefined" != typeof document) {
            var e = e => new Promise(((r, t) => {
                    var o = l.miniCssF(e),
                        a = l.p + o;
                    if (((e, r) => {
                            for (var t = document.getElementsByTagName("link"), o = 0; o < t.length; o++) {
                                var a = (i = t[o]).getAttribute("data-href") || i.getAttribute("href");
                                if ("stylesheet" === i.rel && (a === e || a === r)) return i
                            }
                            var n = document.getElementsByTagName("style");
                            for (o = 0; o < n.length; o++) {
                                var i;
                                if ((a = (i = n[o]).getAttribute("data-href")) === e || a === r) return i
                            }
                        })(o, a)) return r();
                    ((e, r, t, o, a) => {
                        var n = document.createElement("link");
                        n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = t => {
                            if (n.onerror = n.onload = null, "load" === t.type) o();
                            else {
                                var i = t && t.type,
                                    l = t && t.target && t.target.href || r,
                                    s = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ": " + l + ")");
                                s.name = "ChunkLoadError", s.code = "CSS_CHUNK_LOAD_FAILED", s.type = i, s.request = l, n.parentNode && n.parentNode.removeChild(n), a(s)
                            }
                        }, n.href = r, t ? t.parentNode.insertBefore(n, t.nextSibling) : document.head.appendChild(n)
                    })(e, a, null, r, t)
                })),
                r = {
                    691: 0
                };
            l.f.miniCss = (t, o) => {
                r[t] ? o.push(r[t]) : 0 !== r[t] && {
                    131: 1,
                    264: 1,
                    320: 1,
                    416: 1,
                    417: 1,
                    497: 1,
                    515: 1,
                    643: 1,
                    724: 1,
                    767: 1,
                    770: 1,
                    827: 1,
                    872: 1,
                    878: 1,
                    917: 1,
                    966: 1
                }[t] && o.push(r[t] = e(t).then((() => {
                    r[t] = 0
                }), (e => {
                    throw delete r[t], e
                })))
            }
        }
    })(), (() => {
        var e = {
            691: 0
        };
        l.f.j = (r, t) => {
            var o = l.o(e, r) ? e[r] : void 0;
            if (0 !== o)
                if (o) t.push(o[2]);
                else if (691 != r) {
                var a = new Promise(((t, a) => o = e[r] = [t, a]));
                t.push(o[2] = a);
                var n = l.p + l.u(r),
                    i = new Error;
                l.l(n, (t => {
                    if (l.o(e, r) && (0 !== (o = e[r]) && (e[r] = void 0), o)) {
                        var a = t && ("load" === t.type ? "missing" : t.type),
                            n = t && t.target && t.target.src;
                        i.message = "Loading chunk " + r + " failed.\n(" + a + ": " + n + ")", i.name = "ChunkLoadError", i.type = a, i.request = n, o[1](i)
                    }
                }), "chunk-" + r, r)
            } else e[r] = 0
        }, l.O.j = r => 0 === e[r];
        var r = (r, t) => {
                var o, a, [n, i, s] = t,
                    c = 0;
                if (n.some((r => 0 !== e[r]))) {
                    for (o in i) l.o(i, o) && (l.m[o] = i[o]);
                    if (s) var d = s(l)
                }
                for (r && r(t); c < n.length; c++) a = n[c], l.o(e, a) && e[a] && e[a][0](), e[a] = 0;
                return l.O(d)
            },
            t = self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || [];
        t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
    })(), l.nc = void 0
})();