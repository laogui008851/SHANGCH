(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [767], {
        4791: function(e) {
            e.exports = function() {
                "use strict";
                var e = {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
                    t = /\d\d/,
                    a = /\d\d?/,
                    n = /\d*[^-_:/,()\s\d]+/,
                    o = {},
                    i = function(e) {
                        return (e = +e) + (e > 68 ? 1900 : 2e3)
                    },
                    c = function(e) {
                        return function(r) {
                            this[e] = +r
                        }
                    },
                    l = [/[+-]\d\d:?(\d\d)?|Z/, function(e) {
                        (this.zone || (this.zone = {})).offset = function(e) {
                            if (!e) return 0;
                            if ("Z" === e) return 0;
                            var r = e.match(/([+-]|\d\d)/g),
                                t = 60 * r[1] + (+r[2] || 0);
                            return 0 === t ? 0 : "+" === r[0] ? -t : t
                        }(e)
                    }],
                    s = function(e) {
                        var r = o[e];
                        return r && (r.indexOf ? r : r.s.concat(r.f))
                    },
                    d = function(e, r) {
                        var t, a = o.meridiem;
                        if (a) {
                            for (var n = 1; n <= 24; n += 1)
                                if (e.indexOf(a(n, 0, r)) > -1) {
                                    t = n > 12;
                                    break
                                }
                        } else t = e === (r ? "pm" : "PM");
                        return t
                    },
                    u = {
                        A: [n, function(e) {
                            this.afternoon = d(e, !1)
                        }],
                        a: [n, function(e) {
                            this.afternoon = d(e, !0)
                        }],
                        S: [/\d/, function(e) {
                            this.milliseconds = 100 * +e
                        }],
                        SS: [t, function(e) {
                            this.milliseconds = 10 * +e
                        }],
                        SSS: [/\d{3}/, function(e) {
                            this.milliseconds = +e
                        }],
                        s: [a, c("seconds")],
                        ss: [a, c("seconds")],
                        m: [a, c("minutes")],
                        mm: [a, c("minutes")],
                        H: [a, c("hours")],
                        h: [a, c("hours")],
                        HH: [a, c("hours")],
                        hh: [a, c("hours")],
                        D: [a, c("day")],
                        DD: [t, c("day")],
                        Do: [n, function(e) {
                            var r = o.ordinal,
                                t = e.match(/\d+/);
                            if (this.day = t[0], r)
                                for (var a = 1; a <= 31; a += 1) r(a).replace(/\[|\]/g, "") === e && (this.day = a)
                        }],
                        M: [a, c("month")],
                        MM: [t, c("month")],
                        MMM: [n, function(e) {
                            var r = s("months"),
                                t = (s("monthsShort") || r.map((function(e) {
                                    return e.slice(0, 3)
                                }))).indexOf(e) + 1;
                            if (t < 1) throw new Error;
                            this.month = t % 12 || t
                        }],
                        MMMM: [n, function(e) {
                            var r = s("months").indexOf(e) + 1;
                            if (r < 1) throw new Error;
                            this.month = r % 12 || r
                        }],
                        Y: [/[+-]?\d+/, c("year")],
                        YY: [t, function(e) {
                            this.year = i(e)
                        }],
                        YYYY: [/\d{4}/, c("year")],
                        Z: l,
                        ZZ: l
                    };

                function f(t) {
                    var a, n;
                    a = t, n = o && o.formats;
                    for (var i = (t = a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(r, t, a) {
                            var o = a && a.toUpperCase();
                            return t || n[a] || e[a] || n[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e, r, t) {
                                return r || t.slice(1)
                            }))
                        }))).match(r), c = i.length, l = 0; l < c; l += 1) {
                        var s = i[l],
                            d = u[s],
                            f = d && d[0],
                            p = d && d[1];
                        i[l] = p ? {
                            regex: f,
                            parser: p
                        } : s.replace(/^\[|\]$/g, "")
                    }
                    return function(e) {
                        for (var r = {}, t = 0, a = 0; t < c; t += 1) {
                            var n = i[t];
                            if ("string" == typeof n) a += n.length;
                            else {
                                var o = n.regex,
                                    l = n.parser,
                                    s = e.slice(a),
                                    d = o.exec(s)[0];
                                l.call(r, d), e = e.replace(d, "")
                            }
                        }
                        return function(e) {
                            var r = e.afternoon;
                            if (void 0 !== r) {
                                var t = e.hours;
                                r ? t < 12 && (e.hours += 12) : 12 === t && (e.hours = 0), delete e.afternoon
                            }
                        }(r), r
                    }
                }
                return function(e, r, t) {
                    t.p.customParseFormat = !0, e && e.parseTwoDigitYear && (i = e.parseTwoDigitYear);
                    var a = r.prototype,
                        n = a.parse;
                    a.parse = function(e) {
                        var r = e.date,
                            a = e.utc,
                            i = e.args;
                        this.$u = a;
                        var c = i[1];
                        if ("string" == typeof c) {
                            var l = !0 === i[2],
                                s = !0 === i[3],
                                d = l || s,
                                u = i[2];
                            s && (u = i[2]), o = this.$locale(), !l && u && (o = t.Ls[u]), this.$d = function(e, r, t) {
                                try {
                                    if (["x", "X"].indexOf(r) > -1) return new Date(("X" === r ? 1e3 : 1) * e);
                                    var a = f(r)(e),
                                        n = a.year,
                                        o = a.month,
                                        i = a.day,
                                        c = a.hours,
                                        l = a.minutes,
                                        s = a.seconds,
                                        d = a.milliseconds,
                                        u = a.zone,
                                        p = new Date,
                                        b = i || (n || o ? 1 : p.getDate()),
                                        g = n || p.getFullYear(),
                                        m = 0;
                                    n && !o || (m = o > 0 ? o - 1 : p.getMonth());
                                    var h = c || 0,
                                        v = l || 0,
                                        x = s || 0,
                                        y = d || 0;
                                    return u ? new Date(Date.UTC(g, m, b, h, v, x, y + 60 * u.offset * 1e3)) : t ? new Date(Date.UTC(g, m, b, h, v, x, y)) : new Date(g, m, b, h, v, x, y)
                                } catch (e) {
                                    return new Date("")
                                }
                            }(r, c, a), this.init(), u && !0 !== u && (this.$L = this.locale(u).$L), d && r != this.format(c) && (this.$d = new Date("")), o = {}
                        } else if (c instanceof Array)
                            for (var p = c.length, b = 1; b <= p; b += 1) {
                                i[1] = c[b - 1];
                                var g = t.apply(this, i);
                                if (g.isValid()) {
                                    this.$d = g.$d, this.$L = g.$L, this.init();
                                    break
                                }
                                b === p && (this.$d = new Date(""))
                            } else n.call(this, e)
                    }
                }
            }()
        },
        10594: (e, r, t) => {
            "use strict";
            var a = t(91665).A;
            r.A = a
        },
        15680: function(e) {
            e.exports = function() {
                "use strict";
                var e = "week",
                    r = "year";
                return function(t, a, n) {
                    var o = a.prototype;
                    o.week = function(t) {
                        if (void 0 === t && (t = null), null !== t) return this.add(7 * (t - this.week()), "day");
                        var a = this.$locale().yearStart || 1;
                        if (11 === this.month() && this.date() > 25) {
                            var o = n(this).startOf(r).add(1, r).date(a),
                                i = n(this).endOf(e);
                            if (o.isBefore(i)) return 1
                        }
                        var c = n(this).startOf(r).date(a).startOf(e).subtract(1, "millisecond"),
                            l = this.diff(c, e, !0);
                        return l < 0 ? n(this).startOf("week").week() : Math.ceil(l)
                    }, o.weeks = function(e) {
                        return void 0 === e && (e = null), this.week(e)
                    }
                }
            }()
        },
        16918: function(e) {
            e.exports = function() {
                "use strict";
                var e = "month",
                    r = "quarter";
                return function(t, a) {
                    var n = a.prototype;
                    n.quarter = function(e) {
                        return this.$utils().u(e) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (e - 1))
                    };
                    var o = n.add;
                    n.add = function(t, a) {
                        return t = Number(t), this.$utils().p(a) === r ? this.add(3 * t, e) : o.bind(this)(t, a)
                    };
                    var i = n.startOf;
                    n.startOf = function(t, a) {
                        var n = this.$utils(),
                            o = !!n.u(a) || a;
                        if (n.p(t) === r) {
                            var c = this.quarter() - 1;
                            return o ? this.month(3 * c).startOf(e).startOf("day") : this.month(3 * c + 2).endOf(e).endOf("day")
                        }
                        return i.bind(this)(t, a)
                    }
                }
            }()
        },
        33761: function(e) {
            e.exports = function() {
                "use strict";
                return function(e, r) {
                    r.prototype.weekYear = function() {
                        var e = this.month(),
                            r = this.week(),
                            t = this.year();
                        return 1 === r && 11 === e ? t + 1 : 0 === e && r >= 52 ? t - 1 : t
                    }
                }
            }()
        },
        52821: function(e) {
            e.exports = function() {
                "use strict";
                return function(e, r) {
                    var t = r.prototype,
                        a = t.format;
                    t.format = function(e) {
                        var r = this,
                            t = this.$locale();
                        if (!this.isValid()) return a.bind(this)(e);
                        var n = this.$utils(),
                            o = (e || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (function(e) {
                                switch (e) {
                                    case "Q":
                                        return Math.ceil((r.$M + 1) / 3);
                                    case "Do":
                                        return t.ordinal(r.$D);
                                    case "gggg":
                                        return r.weekYear();
                                    case "GGGG":
                                        return r.isoWeekYear();
                                    case "wo":
                                        return t.ordinal(r.week(), "W");
                                    case "w":
                                    case "ww":
                                        return n.s(r.week(), "w" === e ? 1 : 2, "0");
                                    case "W":
                                    case "WW":
                                        return n.s(r.isoWeek(), "W" === e ? 1 : 2, "0");
                                    case "k":
                                    case "kk":
                                        return n.s(String(0 === r.$H ? 24 : r.$H), "k" === e ? 1 : 2, "0");
                                    case "X":
                                        return Math.floor(r.$d.getTime() / 1e3);
                                    case "x":
                                        return r.$d.getTime();
                                    case "z":
                                        return "[" + r.offsetName() + "]";
                                    case "zzz":
                                        return "[" + r.offsetName("long") + "]";
                                    default:
                                        return e
                                }
                            }));
                        return a.bind(this)(o)
                    }
                }
            }()
        },
        56970: function(e) {
            e.exports = function() {
                "use strict";
                return function(e, r, t) {
                    r.prototype.isBetween = function(e, r, a, n) {
                        var o = t(e),
                            i = t(r),
                            c = "(" === (n = n || "()")[0],
                            l = ")" === n[1];
                        return (c ? this.isAfter(o, a) : !this.isBefore(o, a)) && (l ? this.isBefore(i, a) : !this.isAfter(i, a)) || (c ? this.isBefore(o, a) : !this.isAfter(o, a)) && (l ? this.isAfter(i, a) : !this.isBefore(i, a))
                    }
                }
            }()
        },
        59868: (e, r, t) => {
            "use strict";
            t.d(r, {
                n: () => Je
            });
            var a = t(63159),
                n = t(11855),
                o = t(94250),
                i = t(65388),
                c = t(79135),
                l = t(38200),
                s = t(19265),
                d = t(76327),
                u = t(91503),
                f = t(86302),
                p = t(77163),
                b = t(5024),
                g = t(24403),
                m = t(81842),
                h = t.n(m),
                v = function() {
                    return v = Object.assign || function(e) {
                        for (var r, t = 1, a = arguments.length; t < a; t++)
                            for (var n in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                        return e
                    }, v.apply(this, arguments)
                },
                x = function(e, r) {
                    var t = {};
                    for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (t[a] = e[a]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var n = 0;
                        for (a = Object.getOwnPropertySymbols(e); n < a.length; n++) r.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (t[a[n]] = e[a[n]])
                    }
                    return t
                },
                y = (0, n.forwardRef)((function(e, r) {
                    var t, a = (0, n.useContext)(f.Ay.ConfigContext).locale,
                        i = (0, b.rP)().prefixCls,
                        c = "".concat(i, "-drawer"),
                        l = e.size,
                        s = e.title,
                        d = e.subtitle,
                        u = e.auxiliaryText,
                        m = e.width,
                        y = e.footer,
                        _ = e.cancelButtonProps,
                        w = e.okButtonProps,
                        O = e.cancelText,
                        j = void 0 === O ? a.Drawer.cancelText : O,
                        k = e.okText,
                        S = void 0 === k ? a.Drawer.okText : k,
                        A = e.confirmLoading,
                        P = void 0 !== A && A,
                        D = e.className,
                        M = e.dividerProps,
                        E = void 0 === M ? {} : M,
                        $ = e.hideDivider,
                        T = void 0 === $ || $,
                        L = x(e, ["size", "title", "subtitle", "auxiliaryText", "width", "footer", "cancelButtonProps", "okButtonProps", "cancelText", "okText", "confirmLoading", "className", "dividerProps", "hideDivider"]),
                        N = 432;
                    switch (l) {
                        case "s":
                        case "small":
                        default:
                            break;
                        case "m":
                        case "default":
                            N = 592;
                            break;
                        case "l":
                        case "large":
                            N = 752;
                            break;
                        case "xl":
                        case "xlarge":
                            N = 992
                    }
                    var C = s || d ? n.createElement("div", {
                            className: "".concat(c, "-header")
                        }, s && n.createElement("div", {
                            className: h()("".concat(c, "-header-title"), !1 === e.closable ? "".concat(c, "-header-noclose") : void 0)
                        }, s), d && n.createElement("div", {
                            className: h()("".concat(c, "-header-subtitle"), !1 === e.closable ? "".concat(c, "-header-noclose") : void 0)
                        }, d), n.createElement(g.A, v({}, E, {
                            style: v({
                                marginTop: 24,
                                display: T ? "none" : void 0
                            }, null !== (t = E.style) && void 0 !== t ? t : {})
                        }))) : null,
                        z = null === y ? null : y ? n.createElement("div", {
                            className: "".concat(c, "-footer")
                        }, y) : n.createElement("div", {
                            className: "".concat(c, "-footer")
                        }, n.createElement("div", {
                            className: "".concat(c, "-footer-auxiliary")
                        }, u), n.createElement("div", {
                            className: "".concat(c, "-footer-button-group")
                        }, n.createElement(o.A, v({
                            onClick: e.onCancel,
                            size: "large"
                        }, _), j), n.createElement(o.A, v({
                            type: "primary",
                            loading: P,
                            size: "large",
                            onClick: e.onOk
                        }, w), S)));
                    return n.createElement(p.A, v({
                        "data-tid": "m4b_drawer"
                    }, L, {
                        className: h()(c, D),
                        width: null != m ? m : N,
                        title: C,
                        footer: z,
                        ref: r
                    }))
                }));
            y.displayName = "Drawer";
            var _ = y,
                w = t(19324),
                O = t(72394);
            var j = t(19581),
                k = t.n(j),
                S = t(67918),
                A = Object.defineProperty,
                P = Object.defineProperties,
                D = Object.getOwnPropertyDescriptors,
                M = Object.getOwnPropertySymbols,
                E = Object.prototype.hasOwnProperty,
                $ = Object.prototype.propertyIsEnumerable,
                T = (e, r, t) => r in e ? A(e, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[r] = t;
            const L = ({
                    api: e,
                    code: r,
                    logId: t = ""
                }) => {
                    ! function(e, r = {}) {
                        window.slardar && window.slardar("sendEvent", {
                            name: e,
                            categories: r
                        })
                    }("api_error", {
                        api: e,
                        code: null == r ? void 0 : r.toString(),
                        logId: t
                    })
                },
                N = (e, r) => {
                    const t = (null == r ? void 0 : r.body) && (0, S.omit)(r.body, ["version"]);
                    return new Promise((a => {
                        var n, o;
                        k()(e, (n = ((e, r) => {
                            for (var t in r || (r = {})) E.call(r, t) && T(e, t, r[t]);
                            if (M)
                                for (var t of M(r)) $.call(r, t) && T(e, t, r[t]);
                            return e
                        })({}, r), o = {
                            data: t
                        }, P(n, D(o)))).then((r => {
                            var t;
                            const n = null != (t = r.code) ? t : r.err_code,
                                o = r.__META__;
                            0 !== n && L({
                                api: e,
                                code: n,
                                logId: o.logId
                            }), a(r)
                        })).catch((r => {
                            var t, n;
                            const o = null != (t = r.__META__) ? t : {
                                    url: e,
                                    httpStatus: -1,
                                    logId: -1
                                },
                                i = C(r, o);
                            L({
                                api: e,
                                code: null != (n = null == i ? void 0 : i.toString()) ? n : "unknown"
                            }), a({
                                code: null != i ? i : -1,
                                message: "catch error"
                            })
                        }))
                    }))
                };
            const C = (e, r) => {
                    if (!(e instanceof DOMException && e.code === DOMException.ABORT_ERR)) {
                        if (r.httpStatus > 300) return r.httpStatus;
                        if (e instanceof Error) {
                            if ("fetch timeout" === e.message) return 1002;
                            if ("Failed to fetch" === e.message) return 1003
                        }
                        return 1001
                    }
                },
                z = {
                    "Content-Type": "application/json"
                };
            var Y = Object.defineProperty,
                B = Object.defineProperties,
                H = Object.getOwnPropertyDescriptors,
                F = Object.getOwnPropertySymbols,
                I = Object.prototype.hasOwnProperty,
                W = Object.prototype.propertyIsEnumerable,
                R = (e, r, t) => r in e ? Y(e, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[r] = t;
            const G = 14;
            let Z = "";

            function U(e, r) {
                const t = function(e, r) {
                        const t = [];

                        function a(e, r) {
                            const n = Object.prototype.toString.call(e);
                            if ("[object Array]" === n) e.forEach(((e, t) => {
                                a(e, `${r}[${t}]`)
                            }));
                            else if ("[object Object]" === n)
                                for (const t in e) a(e[t], `${r}[${t}]`);
                            else "[object Date]" === n ? t.push(`${r}=${e.toISOString()}`) : "[object Null]" === n ? t.push(`${r}=`) : "[object Undefined]" !== n && t.push(`${r}=${encodeURIComponent(e)}`)
                        }
                        for (const o in e) a(e[o], o);
                        const n = t.join("&");
                        return n && !r ? `?${n}` : n
                    }(e),
                    a = `${Z}/api/v${e.version||1}/seller/onboard/resources/get${t}`;
                return N(a, {
                    method: "GET",
                    headers: z
                }, (n = ((e, r) => {
                    for (var t in r || (r = {})) I.call(r, t) && R(e, t, r[t]);
                    if (F)
                        for (var t of F(r)) W.call(r, t) && R(e, t, r[t]);
                    return e
                })({}, r), B(n, H({
                    GlobalCentral: !0
                }))));
                var n
            }
            const X = {
                    business: "tts_portal"
                },
                V = {
                    us: "US"
                },
                q = "page_duration";
            var K = Object.defineProperty,
                Q = Object.getOwnPropertySymbols,
                J = Object.prototype.hasOwnProperty,
                ee = Object.prototype.propertyIsEnumerable,
                re = (e, r, t) => r in e ? K(e, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[r] = t,
                te = (e, r) => {
                    for (var t in r || (r = {})) J.call(r, t) && re(e, t, r[t]);
                    if (Q)
                        for (var t of Q(r)) ee.call(r, t) && re(e, t, r[t]);
                    return e
                },
                ae = (e, r, t) => (re(e, "symbol" != typeof r ? r + "" : r, t), t);
            const ne = {
                id: "sg",
                gb: "va",
                zh: "sg",
                th: "sg",
                ph: "sg",
                vn: "sg",
                my: "sg",
                sg: "sg",
                us: "va"
            };
            class oe {
                constructor({
                    region: e,
                    page_name: r,
                    app_id: a
                }) {
                    ae(this, "tea"), ae(this, "commonParams");
                    const n = t(8806).A;
                    n.init({
                        app_id: a,
                        channel: ne[e] || "sg"
                    }), n.start(), this.tea = n, this.commonParams = {
                        EVENT_ORIGIN_FEATURE: "TEMAI",
                        region: V[e],
                        page_name: X[r]
                    }
                }
                send(e, r) {
                    this.tea(e, te(te({}, this.commonParams), r))
                }
                config(e) {
                    this.tea.config({
                        evtParams: te({}, e)
                    })
                }
            }
            var ie = t(47324);

            function ce() {
                return "undefined" != typeof window && window.location ? window.location.search : ""
            }(0, ie.parse)(ce().slice(1));
            var le = Object.defineProperty,
                se = Object.defineProperties,
                de = Object.getOwnPropertyDescriptors,
                ue = Object.getOwnPropertySymbols,
                fe = Object.prototype.hasOwnProperty,
                pe = Object.prototype.propertyIsEnumerable,
                be = (e, r, t) => r in e ? le(e, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[r] = t,
                ge = (e, r, t) => (be(e, "symbol" != typeof r ? r + "" : r, t), t);
            class me extends oe {
                constructor(e) {
                    super(e), ge(this, "source_page"), ge(this, "cur_url_pathname");
                    const {
                        source_page: r = ""
                    } = (0, ie.parse)(ce().slice(1), t);
                    var t;
                    this.source_page = r, this.cur_url_pathname = location.href
                }
                sendPageShow(e) {
                    var r, t;
                    this.send("page_show", (r = ((e, r) => {
                        for (var t in r || (r = {})) fe.call(r, t) && be(e, t, r[t]);
                        if (ue)
                            for (var t of ue(r)) pe.call(r, t) && be(e, t, r[t]);
                        return e
                    })({}, e), t = {
                        source_page: this.source_page,
                        cur_url_pathname: this.cur_url_pathname
                    }, se(r, de(t))))
                }
                sendPageStart(e) {
                    this.send(q, e)
                }
                sendPageEnd(e) {
                    this.send(q, e)
                }
                sendRdApi(e) {
                    this.send("rd_api", e)
                }
                sendPlacementShow(e) {
                    this.send("placement_show", e)
                }
                sendSubmitResult(e) {
                    this.send("submit_result", e)
                }
            }
            let he;
            var ve = Object.defineProperty,
                xe = Object.defineProperties,
                ye = Object.getOwnPropertyDescriptors,
                _e = Object.getOwnPropertySymbols,
                we = Object.prototype.hasOwnProperty,
                Oe = Object.prototype.propertyIsEnumerable,
                je = (e, r, t) => r in e ? ve(e, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[r] = t,
                ke = (e, r) => {
                    for (var t in r || (r = {})) we.call(r, t) && je(e, t, r[t]);
                    if (_e)
                        for (var t of _e(r)) Oe.call(r, t) && je(e, t, r[t]);
                    return e
                };
            const Se = {
                    title: "landing_page_title_general",
                    titleHighlightText: "landing_page_title_highlight_general",
                    description: "landing_page_detail_general",
                    buttonText: "landing_page_form_button"
                },
                Ae = () => function(e, r, t, a) {
                    const [o, i] = (0, n.useState)(), [c, l] = (0, n.useState)([]), [s, d] = (0, n.useState)(!1), [u, f] = (0, n.useState)(!1), p = () => {
                        console.log(e, "is using offline data"), f(!0)
                    };
                    return (0, n.useEffect)((() => {
                        a ? U({
                            resource_module_name: e,
                            region: "US"
                        }).then((r => {
                            0 !== r.code && he.sendRdApi({
                                api_domain: window.location.hostname,
                                api_url: "/api/v1/seller/onboard/resources/get",
                                api_code: r.code,
                                widget_name: e[0].toString()
                            }), i(r)
                        })).catch((() => {
                            p()
                        })) : p()
                    }), []), (0, n.useEffect)((() => {
                        var e;
                        if (o) {
                            l([]);
                            const r = null == (e = o.data) ? void 0 : e.sort(((e, r) => {
                                var t, a, n, o;
                                return (null == (t = null == e ? void 0 : e.resource_content_data) ? void 0 : t.priority) && (null == (a = null == r ? void 0 : r.resource_content_data) ? void 0 : a.priority) ? (null == (n = null == e ? void 0 : e.resource_content_data) ? void 0 : n.priority) - (null == (o = null == r ? void 0 : r.resource_content_data) ? void 0 : o.priority) : 0
                            })).map((e => {
                                var r, t, a, n, o;
                                return {
                                    resource_module_name: e.resource_module_name,
                                    resource_content_data: (n = ke({}, null != (r = e.resource_content_data) ? r : {}), o = {
                                        resource_content: null == (a = null == (t = e.resource_content_data) ? void 0 : t.resource_content) ? void 0 : a.filter((e => "0" === e.language || "en" === e.language))
                                    }, xe(n, ye(o)))
                                }
                            })).filter((e => {
                                var r, t;
                                return null != (t = null == (r = e.resource_content_data.resource_content) ? void 0 : r.length) && t
                            }));
                            r && r.length > 0 ? (t(r, l), d(!0)) : p()
                        }
                    }), [o]), {
                        data: u ? r : c,
                        isOnline: s
                    }
                }([G], Se, ((e, r) => {
                    var t, a, n, o, i, c, l, s;
                    const d = null == (o = null == (n = null == (a = null == (t = null == e ? void 0 : e[0]) ? void 0 : t.resource_content_data) ? void 0 : a.resource_content) ? void 0 : n[0]) ? void 0 : o.field_key_value_list;
                    he.sendPlacementShow({
                        page_name: "us_sign_up_subscribe_form_button",
                        module_name: `${G}`,
                        role_type: "visitor",
                        placement_id: `${null==(c=null==(i=null==e?void 0:e[0])?void 0:i.resource_content_data)?void 0:c.category_id}`,
                        campaign_id: `${null==(s=null==(l=null==e?void 0:e[0])?void 0:l.resource_content_data)?void 0:s.campaign_id}`
                    }), r(d ? {
                        title: d.title,
                        titleHighlightText: d.titleHighlightText,
                        description: d.description,
                        buttonText: d.buttonText
                    } : Se)
                }), !0);
            Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            const Pe = e => {
                    const {
                        text: r,
                        className: t,
                        style: o,
                        needTrim: i = !0
                    } = e, c = i ? r.trim() : r;
                    return c ? (0, a.jsx)("span", {
                        className: t,
                        style: o,
                        children: c.split(/\\n|<br\/>|\n/).map(((e, r) => (0, a.jsxs)(n.Fragment, {
                            children: [r > 0 && (0, a.jsx)("br", {}), (0, a.jsx)("span", {
                                children: e
                            })]
                        }, r)))
                    }) : null
                },
                De = e => {
                    const r = e.children && n.Children.toArray(e.children),
                        t = (0, n.useMemo)((() => {
                            let r = e.content;
                            return e.format_keys && e.format_keys.forEach(((e, t) => {
                                const a = new RegExp(`{{${e}}}`, "g");
                                r = r.replace(a, `%${t+1}$s`)
                            })), r
                        }), [e.content, e.format_keys]),
                        o = r ? t.split(/(%\d+\$[ds]|%[ds])/g).map((t => {
                            let n = /%(\d+)\$[ds]/.exec(t);
                            if (n) {
                                const e = parseInt(n[1], 10) - 1;
                                return r[e]
                            }
                            return n = /%[ds]/.exec(t), n ? r[0] : e.useTextLineFeed ? (0, a.jsx)(Pe, {
                                text: t,
                                needTrim: !1
                            }) : e.useSpanWrapper ? (0, a.jsx)("span", {
                                children: t
                            }) : t
                        })) : t;
                    return e.noWrapper ? (0, a.jsx)(a.Fragment, {
                        children: o
                    }) : (0, a.jsx)("span", {
                        className: e.className,
                        style: e.style,
                        children: o
                    })
                };
            Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            let Me = "";
            var Ee = t(84393),
                $e = Object.defineProperty,
                Te = Object.getOwnPropertySymbols,
                Le = Object.prototype.hasOwnProperty,
                Ne = Object.prototype.propertyIsEnumerable,
                Ce = (e, r, t) => r in e ? $e(e, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[r] = t,
                ze = (e, r) => {
                    for (var t in r || (r = {})) Le.call(r, t) && Ce(e, t, r[t]);
                    if (Te)
                        for (var t of Te(r)) Ne.call(r, t) && Ce(e, t, r[t]);
                    return e
                };
            const Ye = (0, Ee.O4)("theme-arco"),
                Be = u.Ay.div `
  position: fixed;
  right: 20px;
  z-index: 15;
`,
                He = (0, u.Ay)(o.A)
            `
  &&.theme-arco-btn {
    background-color: ${Ye.colors.brandBlack};
    color: ${Ye.colors.brandWhite};

    &:hover {
      background-color: ${Ye.colors.brandBlack};
      color: ${Ye.colors.brandWhite};
    }
  }
`, Fe = (0, u.Ay)(o.A)
            `
  svg:active {
    color: inherit;
  }

  &&.theme-arco-btn {
    background-color: ${Ye.colors.brandWhite};
    color: ${Ye.colors.neutralText1};

    &:hover {
      background-color: ${Ye.colors.brandRed};
      color: ${Ye.colors.neutralBg4};
      box-shadow: 0px 4px 17px 0px #00000029;
    }
  }

  box-shadow: 0px 4px 17px 0px #00000029;
`, Ie = (0, u.Ay)(o.A)
            `
  &&.theme-arco-btn {
    background-color: ${Ye.colors.brandWhite};
    color: ${Ye.colors.neutralText1};

    &:hover {
      background-color: '#e5e5e5';
      color: ${Ye.colors.neutralText1};
      box-shadow: 0px 4px 17px 0px #00000029;
    }
  }

  box-shadow: 0px 4px 17px 0px #00000029;
`, We = u.Ay.div `
  width: 440px;
  background-color: #fff;
  box-shadow: 0px 4px 17px 0px #00000029;
  padding: 32px;
  border-radius: 8px;
`, Re = (0, u.Ay)(d.A)
            `
  text-overflow: ellipsis;

  &&.theme-arco-input-inner-wrapper {
    &&.theme-arco-input-inner-wrapper-focus {
      border-color: black;
    }
  }

  :hover {
    border-color: ${Ye.colors.neutralText1} !important;
  }

  :focus {
    border-color: black !important;
  }
`, Ge = (0, u.Ay)(_)
            `
  .theme-arco-drawer {
    border-radius: 100px;
  }

  .theme-arco-drawer-content {
    padding: 36px 24px;
  }

  .theme-arco-drawer-close-icon {
    top: 12px;
    right: 12px;
  }
`, Ze = (0, u.Ay)(w.A)
            `
  &&.theme-arco-link {
    color: ${Ye.colors.neutralText1};
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    display: inline;

    :hover {
      color: ${Ye.colors.neutralText1};
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      text-decoration: underline;
    }

    span:hover:after {
      display: none;
    }
  }
`, Ue = ({
                onClick: e
            }) => (0, a.jsx)("div", {
                className: "absolute text-neutral-text4",
                style: {
                    top: 12,
                    right: 12
                },
                children: (0, a.jsx)(i.A, {
                    onClick: e,
                    className: "cursor-pointer",
                    style: {
                        fontSize: 20
                    }
                })
            }), Xe = () => {
                const e = (0, s.s)();
                return (0, a.jsxs)("div", {
                    className: "flex flex-row",
                    children: [(0, a.jsx)("div", {
                        className: "mr-8",
                        style: {
                            fontSize: 24,
                            marginTop: -4
                        },
                        children: (0, a.jsx)(c.A, {})
                    }), (0, a.jsxs)("div", {
                        children: [(0, a.jsx)("p", {
                            className: "font-bold leading-[22px] mb-8",
                            style: {
                                fontSize: 20
                            },
                            children: e.t("landing_page_form_submission_title")
                        }), (0, a.jsx)("p", {
                            className: "text-body-m-regular text-neutral-text1",
                            children: e.t("landing_page_form_submission_detail")
                        })]
                    })]
                })
            }, Ve = () => {
                const e = (0, s.s)();
                return (0, a.jsxs)("div", {
                    className: "flex flex-col items-center justify-center h-full",
                    children: [(0, a.jsx)("div", {
                        className: "h-[80px] w-[80px] mb-16",
                        style: {
                            fontSize: 70
                        },
                        children: (0, a.jsx)(c.A, {})
                    }), (0, a.jsx)("p", {
                        className: "font-bold leading-[27px] mb-16 break-words text-center",
                        style: {
                            fontSize: 24
                        },
                        children: e.t("landing_page_form_submission_title")
                    }), (0, a.jsx)("p", {
                        className: "text-body-m-regular mb-12 text-center text-neutral-text1",
                        children: e.t("landing_page_form_submission_detail")
                    })]
                })
            }, qe = ({
                handleSubmitForm: e,
                isLoading: r,
                subcribeFormDMSData: t,
                isMobile: o
            }) => {
                var i, c, l, d;
                const [u, f] = (0, n.useState)(!1), [p, b] = (0, n.useState)(""), [g, m] = (0, n.useState)(""), h = (0, s.s)();
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(De, {
                        className: "font-bold leading-[22px] text-brand-black",
                        style: {
                            fontSize: 20
                        },
                        content: h.t(null != (i = t.data.title) ? i : Se.title),
                        format_keys: ["highlight"],
                        children: (0, a.jsx)("span", {
                            className: "text-brand-red",
                            children: h.t(null != (c = t.data.titleHighlightText) ? c : Se.titleHighlightText)
                        })
                    }), (0, a.jsx)("p", {
                        className: `text-body-m-regular mb-16 ${o?"mt-16":"mt-8"} text-neutral-text1`,
                        children: h.t(null != (l = t.data.description) ? l : Se.description)
                    }), (0, a.jsx)(Re, {
                        className: "mb-4",
                        placeholder: h.t("landing_page_form_phone_email"),
                        value: p,
                        onChange: e => (e => {
                            f(!1), b(e)
                        })(e),
                        status: u ? "error" : void 0
                    }), u && (0, a.jsx)("p", {
                        className: "mb-8 text-body-m-regular text-function-error",
                        children: h.t("seller_onboard_us_mandatory_error_msg")
                    }), (0, a.jsx)(Re, {
                        className: "mb-16",
                        placeholder: h.t("landing_page_form_other_store_link"),
                        value: g,
                        onChange: e => m(e)
                    }), (0, a.jsx)(He, {
                        className: "w-full mb-16",
                        onClick: () => {
                            r || (0 !== p.trim().length ? e(p, g) : f(!0))
                        },
                        loading: r,
                        children: h.t(null != (d = t.data.buttonText) ? d : Se.buttonText)
                    }), (0, a.jsx)(De, {
                        className: "text-body-s-regular text-neutral-text3",
                        content: h.t("landing_page_form_policy_acknowladged"),
                        format_keys: ["policy_link"],
                        children: (0, a.jsx)(Ze, {
                            className: "text-body-s-regular",
                            href: "https://www.tiktok.com/legal/page/global/partner-privacy-policy/en",
                            target: "_blank",
                            children: h.t("landing_page_form_policy_name")
                        })
                    })]
                })
            }, Ke = ({
                openSubscribeButton: e,
                subcribeFormDMSData: r,
                reportSubscribeFormOpen: t,
                channelType: o,
                isMobile: i
            }) => {
                const c = (0, s.s)(),
                    d = c.t("signup_landing_page_button"),
                    [u, f] = (0, n.useState)(!1),
                    [p, b] = (0, n.useState)(!1),
                    [g, m] = (0, n.useState)(!1),
                    [h, v] = (0, n.useState)(),
                    x = (e, r) => {
                        m(!0), e = e.trim();
                        const t = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e);
                        const a = JSON.stringify(Object.fromEntries(new URLSearchParams(window.location.search)));
                        (function(e) {
                            const r = `${Me}/api/v${e.version||1}/seller/onboard/v1/local/us/raw_lead`;
                            return N(r, {
                                method: "POST",
                                headers: z,
                                body: e
                            })
                        })({
                            email: t ? e : void 0,
                            phone: t ? void 0 : e,
                            shop_link: r,
                            channel_source: o,
                            channel_detail: a
                        }).then((e => {
                            null === e.code || 0 === e.code ? (he.sendSubmitResult({
                                page_name: o,
                                widget_name: "lead_collection_form"
                            }), b(!0)) : O.A.error(c.t("landing_page_form_submission_failure"))
                        })).finally((() => {
                            m(!1)
                        }))
                    };
                (0, n.useEffect)((() => {
                    const e = setTimeout((() => {
                        u || (f(!0), t("20s_auto_open"))
                    }), 2e4);
                    v(e)
                }), []), (0, n.useEffect)((() => {
                    p && h && clearTimeout(h)
                }), [p]), (0, n.useEffect)((() => {
                    !e || p || u || (f(!0), t("scroll_auto_open"))
                }), [e]);
                const y = e => i ? (0, a.jsx)(Ie, ze({}, e)) : (0, a.jsx)(Fe, ze({}, e));
                return (0, a.jsxs)(a.Fragment, {
                    children: [!u && (0, a.jsx)(y, {
                        shape: "round",
                        type: "default",
                        className: "h-46",
                        icon: (0, a.jsx)("div", {
                            className: i ? "h-24 w-24" : "h-16 w-16 mr-4 flex items-center justify-center",
                            children: (0, a.jsx)(l.A, {
                                style: {
                                    fontSize: i ? 24 : 16
                                }
                            })
                        }),
                        size: i ? "large" : "default",
                        onClick: () => {
                            b(!1), f(!0), t("click_subcribe_button")
                        },
                        children: i ? null : (_ = d, _.length > 18 ? `${_.substring(0,18)}...` : _)
                    }), (0, a.jsx)(Ge, {
                        closable: !0,
                        visible: u && i,
                        placement: "bottom",
                        footer: null,
                        onCancel: () => f(!1),
                        className: "rounded-tl-[12px] rounded-tr-[12px] " + (p ? "!h-[338px]" : "!h-auto"),
                        children: p ? (0, a.jsx)(Ve, {}) : (0, a.jsx)(qe, {
                            handleSubmitForm: x,
                            isLoading: g,
                            subcribeFormDMSData: r,
                            isMobile: i
                        })
                    }), u && !i && (0, a.jsxs)(We, {
                        children: [(0, a.jsx)(Ue, {
                            onClick: () => f(!1)
                        }), p ? (0, a.jsx)(Xe, {}) : (0, a.jsx)(qe, {
                            handleSubmitForm: x,
                            isLoading: g,
                            subcribeFormDMSData: r,
                            isMobile: i
                        })]
                    })]
                });
                var _
            }, Qe = ({
                openSubscribeButton: e,
                appId: r,
                lang: t = "en",
                channelType: n,
                isMobile: o
            }) => {
                const i = o ? 25 : 20,
                    c = Ae();
                var l;
                l = "us", "undefined" != typeof window && (e => {
                    if ("undefined" == typeof window) return;
                    let r, t;
                    he = new me(e), he.sendPageStart({
                        start_timestamp: `${Date.now()}`
                    }), void 0 !== document.hidden ? (r = "hidden", t = "visibilitychange") : void 0 !== document.msHidden ? (r = "msHidden", t = "msvisibilitychange") : void 0 !== document.webkitHidden && (r = "webkitHidden", t = "webkitvisibilitychange"), void 0 === document.addEventListener || void 0 === r || void 0 === document[r] ? console.warn("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.") : t && document.addEventListener(t, (function() {
                        document[r] ? he.sendPageEnd({
                            end_timestamp: `${Date.now()}`
                        }) : he.sendPageStart({
                            start_timestamp: `${Date.now()}`
                        })
                    }), !1)
                })({
                    page_name: "business",
                    region: l,
                    app_id: r
                });
                return (0, a.jsx)(b.Ay, {
                    arcoConfig: {
                        prefixCls: "theme-arco"
                    },
                    prefixCls: "theme-m4b",
                    children: (0, a.jsx)(s.C, {
                        lang: t,
                        children: (0, a.jsx)(Be, {
                            style: {
                                bottom: i
                            },
                            children: (0, a.jsx)(Ke, {
                                openSubscribeButton: e,
                                subcribeFormDMSData: c,
                                reportSubscribeFormOpen: e => {
                                    he.sendPageShow({
                                        page_name: `${n}_lead_collection_button_form`,
                                        content_type: "lead_collection_form",
                                        channel_type: n,
                                        action_type: e
                                    })
                                },
                                channelType: n,
                                isMobile: o
                            })
                        })
                    })
                })
            }, Je = ({
                openSubscribeButton: e,
                appId: r,
                lang: t,
                channelType: o
            }) => {
                const [i, c] = (0, n.useState)(!0);
                return (0, n.useEffect)((() => {
                    c(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent))
                }), []), void 0 === i ? (0, a.jsx)(a.Fragment, {}) : (0, a.jsx)(Qe, {
                    openSubscribeButton: e,
                    appId: r,
                    lang: t,
                    channelType: o,
                    isMobile: i
                })
            }
        },
        72394: (e, r, t) => {
            "use strict";
            t.d(r, {
                A: () => x
            });
            var a = t(11855),
                n = t(69019),
                o = t(33173),
                i = t(5024),
                c = t(81842),
                l = t.n(c),
                s = t(79719),
                d = t(79135),
                u = t(51498),
                f = t(42764),
                p = function() {
                    return p = Object.assign || function(e) {
                        for (var r, t = 1, a = arguments.length; t < a; t++)
                            for (var n in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                        return e
                    }, p.apply(this, arguments)
                },
                b = function(e) {
                    var r = e.className,
                        t = (0, i.rP)().prefixCls,
                        o = "".concat(t, "-message");
                    return a.createElement(n.A, p({}, e, {
                        className: l()(r, o)
                    }))
                };

            function g(e) {
                var r = e.Icon,
                    t = (0, a.useContext)(o.V);
                return a.createElement(r, {
                    prefix: t.prefixCls,
                    style: {
                        stroke: "none"
                    }
                })
            }
            var m = [{
                    name: "info",
                    icon: a.createElement(g, {
                        Icon: s.A
                    })
                }, {
                    name: "success",
                    icon: a.createElement(g, {
                        Icon: d.A
                    })
                }, {
                    name: "error",
                    icon: a.createElement(g, {
                        Icon: u.A
                    })
                }, {
                    name: "warning",
                    icon: a.createElement(g, {
                        Icon: f.A
                    })
                }],
                h = (0, i.xH)().prefixCls,
                v = "".concat(h, "-message");
            m.forEach((function(e) {
                b[e.name] = function(r) {
                    var t = "object" == typeof r && null !== r ? p(p({
                        icon: e.icon
                    }, r), {
                        className: l()(r.className, v)
                    }) : {
                        icon: e.icon,
                        content: null != r ? r : "",
                        className: v
                    };
                    return n.A[e.name](t)
                }
            })), b.clear = n.A.clear, b.config = n.A.config, b.config({
                maxCount: 3
            }), b.useMessage = n.A.useMessage;
            var x = b
        },
        84393: (e, r, t) => {
            "use strict";
            t.d(r, {
                O4: () => d
            });
            var a = t(11855),
                n = t(86302),
                o = t(6222),
                i = t.n(o),
                c = function() {
                    return c = Object.assign || function(e) {
                        for (var r, t = 1, a = arguments.length; t < a; t++)
                            for (var n in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                        return e
                    }, c.apply(this, arguments)
                },
                l = function(e, r) {
                    var t = {};
                    for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (t[a] = e[a]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var n = 0;
                        for (a = Object.getOwnPropertySymbols(e); n < a.length; n++) r.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (t[a[n]] = e[a[n]])
                    }
                    return t
                },
                s = function(e) {
                    var r = e.children,
                        t = l(e, ["children"]),
                        o = (0, a.useContext)(n.Ay.ConfigContext);
                    return a.createElement(n.Ay, c({}, i()(o, t)), r)
                };
            s.displayName = "ExtendConfigProvider";
            Object.prototype.toString;

            function d(e) {
                void 0 === e && (e = ""), e && (e += "-");
                return {
                    colors: {
                        red0: "#820000",
                        red1: "#a80707",
                        red2: "#cf1313",
                        red3: "#f52222",
                        red4: "#ff4d4a",
                        red5: "#ff7570",
                        red6: "#ff9c96",
                        red7: "#ffcfcc",
                        red8: "#fff1f0",
                        vermilion0: "#801f06",
                        vermilion1: "#a63111",
                        vermilion2: "#cc471f",
                        vermilion3: "#f26130",
                        vermilion4: "#ff8559",
                        vermilion5: "#ffa480",
                        vermilion6: "#ffc1a6",
                        vermilion7: "#ffdccc",
                        vermilion8: "#fff1eb",
                        orange0: "#873b00",
                        orange1: "#ad4e00",
                        orange2: "#d46708",
                        orange3: "#fa8416",
                        orange4: "#ff9e3d",
                        orange5: "#ffb463",
                        orange6: "#ffc88a",
                        orange7: "#ffdfb8",
                        orange8: "#fff4e5",
                        yellow0: "#8c5600",
                        yellow1: "#b27100",
                        yellow2: "#d9910b",
                        yellow3: "#ffb219",
                        yellow4: "#ffc240",
                        yellow5: "#ffd166",
                        yellow6: "#ffde8c",
                        yellow7: "#ffebb2",
                        yellow8: "#fff9e5",
                        lemon0: "#8c6c00",
                        lemon1: "#b28c00",
                        lemon2: "#d9ad00",
                        lemon3: "#ffd30d",
                        lemon4: "#ffdd33",
                        lemon5: "#ffe659",
                        lemon6: "#ffee80",
                        lemon7: "#fff6b2",
                        lemon8: "#fffce5",
                        kelly0: "#4e6600",
                        kelly1: "#698c00",
                        kelly2: "#84b205",
                        kelly3: "#a0d911",
                        kelly4: "#b0e535",
                        kelly5: "#c3f25c",
                        kelly6: "#d7ff87",
                        kelly7: "#e4ffb2",
                        kelly8: "#f6ffe5",
                        green0: "#175200",
                        green1: "#267804",
                        green2: "#3b9e0d",
                        green3: "#52c41a",
                        green4: "#6fd13b",
                        green5: "#8ede5f",
                        green6: "#aeeb88",
                        green7: "#cff7b5",
                        green8: "#edffe0",
                        lake0: "#004b4f",
                        lake1: "#006a75",
                        lake2: "#08999c",
                        lake3: "#13c2c2",
                        lake4: "#34cecc",
                        lake5: "#58dbd7",
                        lake6: "#80e8e3",
                        lake7: "#abf5f0",
                        lake8: "#e5fffd",
                        cobalt0: "#08448c",
                        cobalt1: "#145eb2",
                        cobalt2: "#237bd9",
                        cobalt3: "#369afe",
                        cobalt4: "#5cb0ff",
                        cobalt5: "#82c5ff",
                        cobalt6: "#a3d6ff",
                        cobalt7: "#c2e4ff",
                        cobalt8: "#ebf6ff",
                        blue0: "#082D8C",
                        blue1: "#0D37A1",
                        blue2: "#0B4FD3",
                        blue3: "#0F61FF",
                        blue4: "#3479FF",
                        blue5: "#6196FF",
                        blue6: "#84AEFF",
                        blue7: "#B4CDFF",
                        blue8: "#E9F0FF",
                        violet0: "#1e1173",
                        violet1: "#2d1f99",
                        violet2: "#3629cc",
                        violet3: "#5245e5",
                        violet4: "#766df2",
                        violet5: "#9e99ff",
                        violet6: "#c1bfff",
                        violet7: "#e1e0ff",
                        violet8: "#f5f5ff",
                        rose0: "#4f0080",
                        rose1: "#6c08a6",
                        rose2: "#8c14cc",
                        rose3: "#b230f2",
                        rose4: "#ca59ff",
                        rose5: "#d980ff",
                        rose6: "#e6a6ff",
                        rose7: "#f1ccff",
                        rose8: "#fcf2ff",
                        pink0: "#78064a",
                        pink1: "#9e1063",
                        pink2: "#c41d7c",
                        pink3: "#eb2f96",
                        pink4: "#f757ac",
                        pink5: "#ff80c1",
                        pink6: "#ffa6d2",
                        pink7: "#ffcce5",
                        pink8: "#fff2f8",
                        gray0: "#212533",
                        gray1: "#474e66",
                        gray2: "#69718c",
                        gray3: "#8f98b2",
                        gray4: "#b3bacc",
                        gray5: "#cacfde",
                        gray6: "#dde2f0",
                        gray7: "#ebeef5",
                        gray8: "#f2f4fa",
                        grayA: "#f4f7fc",
                        grayS: "#f6f6fb",
                        white0: "#fff",
                        black0: "#000",
                        brandActive: "rgb(var(--".concat(e, "primary-7))"),
                        brandNormal: "rgb(var(--".concat(e, "primary-6))"),
                        brandHover: "rgb(var(--".concat(e, "primary-5))"),
                        brandLine: "rgb(var(--".concat(e, "primary-4))"),
                        brandDisabled: "rgb(var(--".concat(e, "primary-3))"),
                        brandPressed: "rgb(var(--".concat(e, "primary-2))"),
                        brandSelected: "rgb(var(--".concat(e, "primary-1))"),
                        brandSelectedbg: "var(--".concat(e, "color-bg-brand-selected)"),
                        primaryActive: "rgb(var(--".concat(e, "primary-7))"),
                        primaryNormal: "rgb(var(--".concat(e, "primary-6))"),
                        primaryHover: "rgb(var(--".concat(e, "primary-5))"),
                        primaryLine: "rgb(var(--".concat(e, "primary-4))"),
                        primaryDisabled: "rgb(var(--".concat(e, "primary-3))"),
                        primaryPressed: "rgb(var(--".concat(e, "primary-2))"),
                        primarySelected: "rgb(var(--".concat(e, "primary-1))"),
                        primarySelectedbg: "var(--".concat(e, "color-bg-brand-selected)"),
                        stateNormal: "var(--".concat(e, "color-border-state-normal)"),
                        stateHover: "var(--".concat(e, "color-border-state-hover)"),
                        statePressed: "var(--".concat(e, "color-border-state-pressed)"),
                        stateActive: "var(--".concat(e, "color-border-state-active)"),
                        stateDisabled: "var(--".concat(e, "color-border-state-disabled)"),
                        stateSelectedHover: "var(--".concat(e, "color-border-state-selected-hover"),
                        stateSelectedPressed: "var(--".concat(e, "color-border-state-selected-pressed"),
                        neutralText1: "var(--".concat(e, "color-text-1)"),
                        neutralText2: "var(--".concat(e, "color-text-2)"),
                        neutralText3: "var(--".concat(e, "color-text-3)"),
                        neutralText4: "var(--".concat(e, "color-text-4)"),
                        neutralText5: "var(--".concat(e, "color-text-5)"),
                        neutralLine1: "var(--".concat(e, "color-border-1)"),
                        neutralLine2: "var(--".concat(e, "color-border-2)"),
                        neutralBg1: "var(--".concat(e, "color-bg-bg1)"),
                        neutralBg2: "var(--".concat(e, "color-bg-bg2)"),
                        neutralBg3: "var(--".concat(e, "color-bg-bg3)"),
                        neutralBg4: "var(--".concat(e, "color-bg-bg4)"),
                        neutralWhite: "var(--".concat(e, "color-bg-white)"),
                        neutralBlack: "var(--".concat(e, "color-fill-black)"),
                        functionLink: "rgb(var(--".concat(e, "link-6))"),
                        functionLinkHover: "rgb(var(--".concat(e, "link-5))"),
                        functionLinkActive: "rgb(var(--".concat(e, "link-7))"),
                        functionLinkPressed: "rgb(var(--".concat(e, "link-4))"),
                        functionLinkDisabled: "rgb(var(--".concat(e, "link-3))"),
                        functionError: "rgb(var(--".concat(e, "danger-6))"),
                        functionErrorHover: "rgb(var(--".concat(e, "danger-5))"),
                        functionErrorActive: "rgb(var(--".concat(e, "danger-7))"),
                        functionErrorPressed: "rgb(var(--".concat(e, "danger-4))"),
                        functionErrorDisabled: "rgb(var(--".concat(e, "danger-1))"),
                        functionErrorLine: "rgb(var(--".concat(e, "danger-2))"),
                        functionErrorBg: "var(--".concat(e, "color-bg-function-error)"),
                        functionWarning: "rgb(var(--".concat(e, "warning-6))"),
                        functionWarningHover: "rgb(var(--".concat(e, "warning-5))"),
                        functionWarningActive: "rgb(var(--".concat(e, "warning-7))"),
                        functionWarningPressed: "rgb(var(--".concat(e, "warning-4))"),
                        functionWarningDisabled: "rgb(var(--".concat(e, "warning-1))"),
                        functionWarningLine: "rgb(var(--".concat(e, "warning-2))"),
                        functionWarningBg: "var(--".concat(e, "color-bg-function-warning)"),
                        functionSuccess: "rgb(var(--".concat(e, "success-6))"),
                        functionSuccessHover: "rgb(var(--".concat(e, "success-5))"),
                        functionSuccessActive: "rgb(var(--".concat(e, "success-7))"),
                        functionSuccessPressed: "rgb(var(--".concat(e, "success-4))"),
                        functionSuccessDisabled: "rgb(var(--".concat(e, "success-1))"),
                        functionSuccessLine: "rgb(var(--".concat(e, "success-2))"),
                        functionSuccessBg: "var(--".concat(e, "color-bg-function-success)"),
                        auxiliaryRed: "rgb(var(--".concat(e, "auxiliary-red-5))"),
                        auxiliaryRedText: "rgb(var(--".concat(e, "auxiliary-red-5))"),
                        auxiliaryRedLine: "rgb(var(--".concat(e, "auxiliary-red-7))"),
                        auxiliaryRedBg: "rgb(var(--".concat(e, "auxiliary-red-4))"),
                        auxiliaryOrange: "rgb(var(--".concat(e, "auxiliary-orange-5))"),
                        auxiliaryOrangeText: "rgb(var(--".concat(e, "auxiliary-orange-5))"),
                        auxiliaryOrangeLine: "rgb(var(--".concat(e, "auxiliary-orange-7))"),
                        auxiliaryOrangeBg: "rgb(var(--".concat(e, "auxiliary-orange-4))"),
                        auxiliaryGreen: "rgb(var(--".concat(e, "auxiliary-green-5))"),
                        auxiliaryGreenText: "rgb(var(--".concat(e, "auxiliary-green-5))"),
                        auxiliaryGreenLine: "rgb(var(--".concat(e, "auxiliary-green-7))"),
                        auxiliaryGreenBg: "rgb(var(--".concat(e, "auxiliary-green-4))"),
                        auxiliaryCobalt: "rgb(var(--".concat(e, "auxiliary-cobalt-5))"),
                        auxiliaryCobaltText: "rgb(var(--".concat(e, "auxiliary-cobalt-5))"),
                        auxiliaryCobaltLine: "rgb(var(--".concat(e, "auxiliary-cobalt-7))"),
                        auxiliaryCobaltBg: "var(--".concat(e, "color-bg-auxiliary-cobalt)"),
                        auxiliaryYellow: "rgb(var(--".concat(e, "auxiliary-yellow-5))"),
                        auxiliaryYellowText: "rgb(var(--".concat(e, "auxiliary-yellow-5))"),
                        auxiliaryYellowLine: "rgb(var(--".concat(e, "auxiliary-yellow-7))"),
                        auxiliaryYellowBg: "var(--".concat(e, "color-bg-auxiliary-yellow)"),
                        auxiliaryNeutral: "var(--".concat(e, "color-auxiliary-neutral-normal)"),
                        auxiliaryNeutralLine: "var(--".concat(e, "color-auxiliary-neutral-line)"),
                        auxiliaryNeutralBg: "var(--".concat(e, "color-auxiliary-neutral-bg)"),
                        neutralMask: "var(--".concat(e, "color-mask-neutral)"),
                        brandGreen: "var(--".concat(e, "color-brand-green)"),
                        brandRed: "var(--".concat(e, "color-brand-red)"),
                        brandWhite: "var(--".concat(e, "color-brand-white)"),
                        brandBlack: "var(--".concat(e, "color-brand-black)")
                    },
                    boxShadow: {
                        downS: "0 2px 8px rgba(0, 0, 0, 0.06)",
                        downM: "0 4px 12px rgba(0, 0, 0, 0.12)",
                        downL: "0 8px 20px rgba(0, 0, 0, 0.12)",
                        upS: "0 -2px 8px rgba(0, 0, 0, 0.06)",
                        upM: "0 -4px 12px rgba(0, 0, 0, 0.12)",
                        upL: "0 -8px 20px rgba(0, 0, 0, 0.12)",
                        leftS: "-2px 0 8px rgba(0, 0, 0, 0.06)",
                        leftM: "-4px 0 12px rgba(0, 0, 0, 0.12)",
                        leftL: "-8px 0 20px rgba(0, 0, 0, 0.12)",
                        rightS: "2px 0 8px rgba(0, 0, 0, 0.06)",
                        rightM: "4px 0 12px rgba(0, 0, 0, 0.12)",
                        rightL: "8px 0 20px rgba(0, 0, 0, 0.12)"
                    },
                    border: {
                        borderWidthS: "1px",
                        borderWidthM: "2px",
                        borderWidthL: "4px",
                        borderRadiusS: "2px",
                        borderRadiusM: "4px",
                        borderRadiusL: "8px",
                        borderRadiusHalf: "50%"
                    },
                    space: {
                        space1: "4px",
                        space2: "8px",
                        space3: "12px",
                        space4: "16px",
                        space5: "24px",
                        space6: "32px",
                        space7: "40px",
                        space8: "48px",
                        space9: "56px",
                        space10: "64px"
                    },
                    font: {
                        weightMedium: "500",
                        weightRegular: "400",
                        sizeHeadXl: "28px",
                        sizeHeadL: "20px",
                        sizeHeadM: "16px",
                        sizeHeadS: "14px",
                        sizeHeadXs: "12px",
                        sizeBodyL: "16px",
                        sizeBodyM: "14px",
                        sizeBodyS: "12px",
                        lineHeightXl: "36px",
                        lineHeightL: "28px",
                        lineHeightM: "24px",
                        lineHeightS: "20px",
                        lineHeightXs: "18px"
                    }
                }
            }
            var u = d();
            u.colors, u.boxShadow, u.border, u.space, u.font
        }
    }
]);