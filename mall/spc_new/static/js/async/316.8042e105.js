/*! For license information please see 316.8042e105.js.LICENSE.txt */
"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [316], {
        19581: function(t, e, n) {
            var r = this && this.__assign || function() {
                    return r = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }, r.apply(this, arguments)
                },
                o = this && this.__awaiter || function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                c(r.next(t))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function u(t) {
                            try {
                                c(r.throw(t))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function c(t) {
                            var e;
                            t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                t(e)
                            }))).then(a, u)
                        }
                        c((r = r.apply(t, e || [])).next())
                    }))
                },
                i = this && this.__generator || function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (u) {
                                    i = [6, u], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                a = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ContentType = e.HttpMethod = void 0;
            var u, c, s = a(n(47324));
            n(49047),
                function(t) {
                    t.get = "GET", t.post = "POST", t.put = "PUT", t.delete = "DELETE"
                }(u = e.HttpMethod || (e.HttpMethod = {})),
                function(t) {
                    t.JSON = "json", t.FormData = "formData", t.UrlEncoded = "urlEncoded"
                }(c = e.ContentType || (e.ContentType = {}));
            var f = function(t, e) {
                return o(void 0, void 0, void 0, (function() {
                    var n, o, a, u, c, s;
                    return i(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return n = {}, o = !1, (a = t.headers && t.headers.get("Content-Type")) ? a.includes("json") ? [4, t.json()] : [3, 2] : [3, 9];
                            case 1:
                                n = i.sent(), i.label = 2;
                            case 2:
                                return a.includes("text") ? [4, t.text()] : [3, 4];
                            case 3:
                                n = i.sent(), i.label = 4;
                            case 4:
                                return a.includes("form") ? [4, t.formData()] : [3, 6];
                            case 5:
                                n = i.sent(), i.label = 6;
                            case 6:
                                return a.includes("video") ? [4, t.blob()] : [3, 8];
                            case 7:
                                n = i.sent(), i.label = 8;
                            case 8:
                                return [3, 11];
                            case 9:
                                return [4, t.text()];
                            case 10:
                                n = i.sent(), i.label = 11;
                            case 11:
                                return e && (o = e(n)), t.status < 200 || t.status >= 300 || o ? (u = t.headers && t.headers.get("x-tt-logid"), c = t.status, s = t.url, [2, r(r({}, n), {
                                    logId: u,
                                    httpStatus: c,
                                    url: s,
                                    __RES__: t
                                })]) : [2, Object.assign(n, {
                                    __RES__: t
                                })]
                        }
                    }))
                }))
            };
            e.default = function(t, e) {
                var n = e.method,
                    a = void 0 === n ? u.get : n,
                    l = e.contentType,
                    p = void 0 === l ? c.JSON : l,
                    d = e.data,
                    h = e.commonParams,
                    v = e.init,
                    y = e.signal,
                    m = e.verify,
                    g = e.isRawRes,
                    b = {},
                    w = t,
                    _ = {
                        method: a,
                        signal: y
                    },
                    T = w.indexOf("?");
                if ([u.get, u.delete].includes(a)) {
                    if (-1 === T)(h || d) && (w = w + "?" + s.default.stringify(r(r({}, h), d), {
                        arrayFormat: "repeat"
                    }));
                    else {
                        var O = s.default.stringify(r(r(r({}, h), s.default.parse(w.slice(T + 1))), d), {
                            arrayFormat: "repeat"
                        });
                        w = w.slice(0, T) + "?" + O
                    }
                    b = e.headers || {}
                } else {
                    if (p === c.FormData && "undefined" != typeof FormData) {
                        var E = new FormData;
                        Object.keys(d).forEach((function(t) {
                            E.append(t, d[t])
                        })), b = r({}, e.headers), _.body = E
                    } else p === c.UrlEncoded ? (b = r(r({}, e.headers), {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }), _.body = s.default.stringify(d)) : p === c.JSON && (b = r(r({}, e.headers), {
                        "Content-Type": "application/json"
                    }), _.body = JSON.stringify(d));
                    if (-1 === T) h && (w = w + "?" + s.default.stringify(r({}, h), {
                        arrayFormat: "repeat"
                    }));
                    else {
                        O = s.default.stringify(r(r({}, h), s.default.parse(w.slice(T + 1))), {
                            arrayFormat: "repeat"
                        });
                        w = w.slice(0, T) + "?" + O
                    }
                }
                _ = r(r({}, _), {
                    headers: r({}, b),
                    credentials: null == v ? void 0 : v.credentials,
                    mode: null == v ? void 0 : v.mode
                });
                var S = o(void 0, void 0, void 0, (function() {
                        var t, e, n, o, a, u, c;
                        return i(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return t = Date.now(), [4, window.fetch(w, _)];
                                case 1:
                                    return e = i.sent(), n = Date.now(), g ? [2, Promise.resolve(e)] : [4, f(e, m)];
                                case 2:
                                    return o = i.sent(), a = null == o ? void 0 : o.__RES__, u = {
                                        url: w,
                                        begin: t,
                                        end: n,
                                        cost: n - t,
                                        httpStatus: a.status,
                                        logId: null === (c = a.headers) || void 0 === c ? void 0 : c.get("x-tt-logid")
                                    }, e.status >= 200 && e.status < 300 ? [2, Promise.resolve(r(r({}, o), {
                                        __META__: u
                                    }))] : [2, Promise.reject(r(r({}, o), {
                                        __META__: u
                                    }))]
                            }
                        }))
                    })),
                    j = new Promise((function(t, n) {
                        var r;
                        setTimeout((function() {
                            return n(new Error("fetch timeout"))
                        }), null !== (r = e.timeout) && void 0 !== r ? r : 6e4)
                    }));
                return Promise.race([S, j])
            }
        },
        29689: (t, e) => {
            var n = function(t) {
                    return function(e) {
                        return Math.pow(e, t)
                    }
                },
                r = function(t) {
                    return function(e) {
                        return 1 - Math.abs(Math.pow(e - 1, t))
                    }
                },
                o = function(t) {
                    return function(e) {
                        return e < .5 ? n(t)(2 * e) / 2 : r(t)(2 * e - 1) / 2 + .5
                    }
                },
                i = n(2),
                a = r(2),
                u = o(2),
                c = n(3),
                s = r(3),
                f = o(3),
                l = n(4),
                p = r(4),
                d = o(4),
                h = n(5),
                v = r(5),
                y = o(5),
                m = function(t) {
                    var e = 7.5625,
                        n = 2.75;
                    return t < 1 / n ? e * t * t : t < 2 / n ? e * (t -= 1.5 / n) * t + .75 : t < 2.5 / n ? e * (t -= 2.25 / n) * t + .9375 : e * (t -= 2.625 / n) * t + .984375
                },
                g = function(t) {
                    return 1 - m(1 - t)
                },
                b = Object.freeze({
                    linear: function(t) {
                        return t
                    },
                    quadIn: i,
                    quadOut: a,
                    quadInOut: u,
                    cubicIn: c,
                    cubicOut: s,
                    cubicInOut: f,
                    quartIn: l,
                    quartOut: p,
                    quartInOut: d,
                    quintIn: h,
                    quintOut: v,
                    quintInOut: y,
                    sineIn: function(t) {
                        return 1 + Math.sin(Math.PI / 2 * t - Math.PI / 2)
                    },
                    sineOut: function(t) {
                        return Math.sin(Math.PI / 2 * t)
                    },
                    sineInOut: function(t) {
                        return (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2
                    },
                    bounceOut: m,
                    bounceIn: g,
                    bounceInOut: function(t) {
                        return t < .5 ? .5 * g(2 * t) : .5 * m(2 * t - 1) + .5
                    }
                }),
                w = function(t) {
                    var e = t.from,
                        n = t.to,
                        r = t.duration,
                        o = t.delay,
                        i = t.easing,
                        a = t.onStart,
                        u = t.onUpdate,
                        c = t.onFinish;
                    for (var s in e) void 0 === n[s] && (n[s] = e[s]);
                    for (var f in n) void 0 === e[f] && (e[f] = n[f]);
                    this.from = e, this.to = n, this.duration = r || 500, this.delay = o || 0, this.easing = i || "linear", this.onStart = a, this.onUpdate = u || function() {}, this.onFinish = c, this.startTime = Date.now() + this.delay, this.started = !1, this.finished = !1, this.timer = null, this.keys = {}
                };
            w.prototype.update = function() {
                if (this.time = Date.now(), !(this.time < this.startTime || this.finished))
                    if (this.elapsed !== this.duration) {
                        for (var t in this.elapsed = this.time - this.startTime, this.elapsed = this.elapsed > this.duration ? this.duration : this.elapsed, this.to) this.keys[t] = this.from[t] + (this.to[t] - this.from[t]) * b[this.easing](this.elapsed / this.duration);
                        this.started || (this.onStart && this.onStart(this.keys), this.started = !0), this.onUpdate(this.keys)
                    } else this.finished || (this.finished = !0, this.onFinish && this.onFinish(this.keys))
            }, w.prototype.start = function() {
                var t = this;
                this.startTime = Date.now() + this.delay;
                var e = function() {
                    t.update(), t.timer = requestAnimationFrame(e), t.finished && (cancelAnimationFrame(t.timer), t.timer = null)
                };
                e()
            }, w.prototype.stop = function() {
                cancelAnimationFrame(this.timer), this.timer = null
            }, e.A = w
        },
        49047: (t, e, n) => {
            n.r(e), n.d(e, {
                DOMException: () => _,
                Headers: () => f,
                Request: () => m,
                Response: () => b,
                fetch: () => T
            });
            var r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== n.g && n.g || {},
                o = {
                    searchParams: "URLSearchParams" in r,
                    iterable: "Symbol" in r && "iterator" in Symbol,
                    blob: "FileReader" in r && "Blob" in r && function() {
                        try {
                            return new Blob, !0
                        } catch (t) {
                            return !1
                        }
                    }(),
                    formData: "FormData" in r,
                    arrayBuffer: "ArrayBuffer" in r
                };
            if (o.arrayBuffer) var i = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                a = ArrayBuffer.isView || function(t) {
                    return t && i.indexOf(Object.prototype.toString.call(t)) > -1
                };

            function u(t) {
                if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t) throw new TypeError('Invalid character in header field name: "' + t + '"');
                return t.toLowerCase()
            }

            function c(t) {
                return "string" != typeof t && (t = String(t)), t
            }

            function s(t) {
                var e = {
                    next: function() {
                        var e = t.shift();
                        return {
                            done: void 0 === e,
                            value: e
                        }
                    }
                };
                return o.iterable && (e[Symbol.iterator] = function() {
                    return e
                }), e
            }

            function f(t) {
                this.map = {}, t instanceof f ? t.forEach((function(t, e) {
                    this.append(e, t)
                }), this) : Array.isArray(t) ? t.forEach((function(t) {
                    if (2 != t.length) throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + t.length);
                    this.append(t[0], t[1])
                }), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
                    this.append(e, t[e])
                }), this)
            }

            function l(t) {
                if (!t._noBody) return t.bodyUsed ? Promise.reject(new TypeError("Already read")) : void(t.bodyUsed = !0)
            }

            function p(t) {
                return new Promise((function(e, n) {
                    t.onload = function() {
                        e(t.result)
                    }, t.onerror = function() {
                        n(t.error)
                    }
                }))
            }

            function d(t) {
                var e = new FileReader,
                    n = p(e);
                return e.readAsArrayBuffer(t), n
            }

            function h(t) {
                if (t.slice) return t.slice(0);
                var e = new Uint8Array(t.byteLength);
                return e.set(new Uint8Array(t)), e.buffer
            }

            function v() {
                return this.bodyUsed = !1, this._initBody = function(t) {
                    var e;
                    this.bodyUsed = this.bodyUsed, this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : o.blob && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : o.formData && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : o.searchParams && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : o.arrayBuffer && o.blob && ((e = t) && DataView.prototype.isPrototypeOf(e)) ? (this._bodyArrayBuffer = h(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : o.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || a(t)) ? this._bodyArrayBuffer = h(t) : this._bodyText = t = Object.prototype.toString.call(t) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : o.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, o.blob && (this.blob = function() {
                    var t = l(this);
                    if (t) return t;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }), this.arrayBuffer = function() {
                    if (this._bodyArrayBuffer) {
                        var t = l(this);
                        return t || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
                    }
                    if (o.blob) return this.blob().then(d);
                    throw new Error("could not read as ArrayBuffer")
                }, this.text = function() {
                    var t, e, n, r, o, i = l(this);
                    if (i) return i;
                    if (this._bodyBlob) return t = this._bodyBlob, e = new FileReader, n = p(e), r = /charset=([A-Za-z0-9_-]+)/.exec(t.type), o = r ? r[1] : "utf-8", e.readAsText(t, o), n;
                    if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                        for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++) n[r] = String.fromCharCode(e[r]);
                        return n.join("")
                    }(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, o.formData && (this.formData = function() {
                    return this.text().then(g)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }
            f.prototype.append = function(t, e) {
                t = u(t), e = c(e);
                var n = this.map[t];
                this.map[t] = n ? n + ", " + e : e
            }, f.prototype.delete = function(t) {
                delete this.map[u(t)]
            }, f.prototype.get = function(t) {
                return t = u(t), this.has(t) ? this.map[t] : null
            }, f.prototype.has = function(t) {
                return this.map.hasOwnProperty(u(t))
            }, f.prototype.set = function(t, e) {
                this.map[u(t)] = c(e)
            }, f.prototype.forEach = function(t, e) {
                for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
            }, f.prototype.keys = function() {
                var t = [];
                return this.forEach((function(e, n) {
                    t.push(n)
                })), s(t)
            }, f.prototype.values = function() {
                var t = [];
                return this.forEach((function(e) {
                    t.push(e)
                })), s(t)
            }, f.prototype.entries = function() {
                var t = [];
                return this.forEach((function(e, n) {
                    t.push([n, e])
                })), s(t)
            }, o.iterable && (f.prototype[Symbol.iterator] = f.prototype.entries);
            var y = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];

            function m(t, e) {
                if (!(this instanceof m)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                var n, o, i = (e = e || {}).body;
                if (t instanceof m) {
                    if (t.bodyUsed) throw new TypeError("Already read");
                    this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new f(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, i || null == t._bodyInit || (i = t._bodyInit, t.bodyUsed = !0)
                } else this.url = String(t);
                if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new f(e.headers)), this.method = (n = e.method || this.method || "GET", o = n.toUpperCase(), y.indexOf(o) > -1 ? o : n), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal || function() {
                        if ("AbortController" in r) return (new AbortController).signal
                    }(), this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
                if (this._initBody(i), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== e.cache && "no-cache" !== e.cache)) {
                    var a = /([?&])_=[^&]*/;
                    if (a.test(this.url)) this.url = this.url.replace(a, "$1_=" + (new Date).getTime());
                    else {
                        this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
                    }
                }
            }

            function g(t) {
                var e = new FormData;
                return t.trim().split("&").forEach((function(t) {
                    if (t) {
                        var n = t.split("="),
                            r = n.shift().replace(/\+/g, " "),
                            o = n.join("=").replace(/\+/g, " ");
                        e.append(decodeURIComponent(r), decodeURIComponent(o))
                    }
                })), e
            }

            function b(t, e) {
                if (!(this instanceof b)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                if (e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.status < 200 || this.status > 599) throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
                this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === e.statusText ? "" : "" + e.statusText, this.headers = new f(e.headers), this.url = e.url || "", this._initBody(t)
            }
            m.prototype.clone = function() {
                return new m(this, {
                    body: this._bodyInit
                })
            }, v.call(m.prototype), v.call(b.prototype), b.prototype.clone = function() {
                return new b(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new f(this.headers),
                    url: this.url
                })
            }, b.error = function() {
                var t = new b(null, {
                    status: 200,
                    statusText: ""
                });
                return t.ok = !1, t.status = 0, t.type = "error", t
            };
            var w = [301, 302, 303, 307, 308];
            b.redirect = function(t, e) {
                if (-1 === w.indexOf(e)) throw new RangeError("Invalid status code");
                return new b(null, {
                    status: e,
                    headers: {
                        location: t
                    }
                })
            };
            var _ = r.DOMException;
            try {
                new _
            } catch (O) {
                (_ = function(t, e) {
                    this.message = t, this.name = e;
                    var n = Error(t);
                    this.stack = n.stack
                }).prototype = Object.create(Error.prototype), _.prototype.constructor = _
            }

            function T(t, e) {
                return new Promise((function(n, i) {
                    var a = new m(t, e);
                    if (a.signal && a.signal.aborted) return i(new _("Aborted", "AbortError"));
                    var s = new XMLHttpRequest;

                    function l() {
                        s.abort()
                    }
                    if (s.onload = function() {
                            var t, e, r = {
                                statusText: s.statusText,
                                headers: (t = s.getAllResponseHeaders() || "", e = new f, t.replace(/\r?\n[\t ]+/g, " ").split("\r").map((function(t) {
                                    return 0 === t.indexOf("\n") ? t.substr(1, t.length) : t
                                })).forEach((function(t) {
                                    var n = t.split(":"),
                                        r = n.shift().trim();
                                    if (r) {
                                        var o = n.join(":").trim();
                                        try {
                                            e.append(r, o)
                                        } catch (i) {
                                            console.warn("Response " + i.message)
                                        }
                                    }
                                })), e)
                            };
                            0 === a.url.indexOf("file://") && (s.status < 200 || s.status > 599) ? r.status = 200 : r.status = s.status, r.url = "responseURL" in s ? s.responseURL : r.headers.get("X-Request-URL");
                            var o = "response" in s ? s.response : s.responseText;
                            setTimeout((function() {
                                n(new b(o, r))
                            }), 0)
                        }, s.onerror = function() {
                            setTimeout((function() {
                                i(new TypeError("Network request failed"))
                            }), 0)
                        }, s.ontimeout = function() {
                            setTimeout((function() {
                                i(new TypeError("Network request timed out"))
                            }), 0)
                        }, s.onabort = function() {
                            setTimeout((function() {
                                i(new _("Aborted", "AbortError"))
                            }), 0)
                        }, s.open(a.method, function(t) {
                            try {
                                return "" === t && r.location.href ? r.location.href : t
                            } catch (e) {
                                return t
                            }
                        }(a.url), !0), "include" === a.credentials ? s.withCredentials = !0 : "omit" === a.credentials && (s.withCredentials = !1), "responseType" in s && (o.blob ? s.responseType = "blob" : o.arrayBuffer && (s.responseType = "arraybuffer")), e && "object" == typeof e.headers && !(e.headers instanceof f || r.Headers && e.headers instanceof r.Headers)) {
                        var p = [];
                        Object.getOwnPropertyNames(e.headers).forEach((function(t) {
                            p.push(u(t)), s.setRequestHeader(t, c(e.headers[t]))
                        })), a.headers.forEach((function(t, e) {
                            -1 === p.indexOf(e) && s.setRequestHeader(e, t)
                        }))
                    } else a.headers.forEach((function(t, e) {
                        s.setRequestHeader(e, t)
                    }));
                    a.signal && (a.signal.addEventListener("abort", l), s.onreadystatechange = function() {
                        4 === s.readyState && a.signal.removeEventListener("abort", l)
                    }), s.send(void 0 === a._bodyInit ? null : a._bodyInit)
                }))
            }
            T.polyfill = !0, r.fetch || (r.fetch = T, r.Headers = f, r.Request = m, r.Response = b)
        },
        69336: (t, e, n) => {
            n.r(e), n.d(e, {
                TTVerifyCenter: () => La,
                close: () => Ca,
                config: () => Pa,
                getFp: () => Da,
                init: () => Ra,
                render: () => ka,
                transform: () => Ka
            });
            var r = function() {
                return r = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }, r.apply(this, arguments)
            };
            "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
                value: function(t, e) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    for (var n = Object(t), r = 1; r < arguments.length; r++) {
                        var o = arguments[r];
                        if (null != o)
                            for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
                    }
                    return n
                },
                writable: !0,
                configurable: !0
            });
            var o = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {};

            function i(t, e, n) {
                return t(n = {
                    path: e,
                    exports: {},
                    require: function(t, e) {
                        return function() {
                            throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                        }(null == e && n.path)
                    }
                }, n.exports), n.exports
            }
            var a, u, c = function(t) {
                    return t && t.Math == Math && t
                },
                s = c("object" == typeof globalThis && globalThis) || c("object" == typeof window && window) || c("object" == typeof self && self) || c("object" == typeof o && o) || function() {
                    return this
                }() || Function("return this")(),
                f = Function.prototype,
                l = f.apply,
                p = f.bind,
                d = f.call,
                h = "object" == typeof Reflect && Reflect.apply || (p ? d.bind(l) : function() {
                    return d.apply(l, arguments)
                }),
                v = Function.prototype,
                y = v.bind,
                m = v.call,
                g = y && y.bind(m),
                b = y ? function(t) {
                    return t && g(m, t)
                } : function(t) {
                    return t && function() {
                        return m.apply(t, arguments)
                    }
                },
                w = function(t) {
                    return "function" == typeof t
                },
                _ = function(t) {
                    try {
                        return !!t()
                    } catch (Pi) {
                        return !0
                    }
                },
                T = !_((function() {
                    return 7 != Object.defineProperty({}, 1, {
                        get: function() {
                            return 7
                        }
                    })[1]
                })),
                O = Function.prototype.call,
                E = O.bind ? O.bind(O) : function() {
                    return O.apply(O, arguments)
                },
                S = {}.propertyIsEnumerable,
                j = Object.getOwnPropertyDescriptor,
                I = {
                    f: j && !S.call({
                        1: 2
                    }, 1) ? function(t) {
                        var e = j(this, t);
                        return !!e && e.enumerable
                    } : S
                },
                A = function(t, e) {
                    return {
                        enumerable: !(1 & t),
                        configurable: !(2 & t),
                        writable: !(4 & t),
                        value: e
                    }
                },
                x = b({}.toString),
                P = b("".slice),
                R = function(t) {
                    return P(x(t), 8, -1)
                },
                k = s.Object,
                C = b("".split),
                D = _((function() {
                    return !k("z").propertyIsEnumerable(0)
                })) ? function(t) {
                    return "String" == R(t) ? C(t, "") : k(t)
                } : k,
                L = s.TypeError,
                K = function(t) {
                    if (null == t) throw L("Can't call method on " + t);
                    return t
                },
                N = function(t) {
                    return D(K(t))
                },
                M = function(t) {
                    return "object" == typeof t ? null !== t : w(t)
                },
                F = {},
                B = function(t) {
                    return w(t) ? t : void 0
                },
                U = function(t, e) {
                    return arguments.length < 2 ? B(F[t]) || B(s[t]) : F[t] && F[t][e] || s[t] && s[t][e]
                },
                G = b({}.isPrototypeOf),
                H = U("navigator", "userAgent") || "",
                q = s.process,
                z = s.Deno,
                J = q && q.versions || z && z.version,
                V = J && J.v8;
            V && (u = (a = V.split("."))[0] > 0 && a[0] < 4 ? 1 : +(a[0] + a[1])), !u && H && (!(a = H.match(/Edge\/(\d+)/)) || a[1] >= 74) && (a = H.match(/Chrome\/(\d+)/)) && (u = +a[1]);
            var W, Y = u,
                X = !!Object.getOwnPropertySymbols && !_((function() {
                    var t = Symbol();
                    return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && Y && Y < 41
                })),
                Z = X && !Symbol.sham && "symbol" == typeof Symbol.iterator,
                Q = s.Object,
                $ = Z ? function(t) {
                    return "symbol" == typeof t
                } : function(t) {
                    var e = U("Symbol");
                    return w(e) && G(e.prototype, Q(t))
                },
                tt = s.String,
                et = function(t) {
                    try {
                        return tt(t)
                    } catch (Pi) {
                        return "Object"
                    }
                },
                nt = s.TypeError,
                rt = function(t) {
                    if (w(t)) return t;
                    throw nt(et(t) + " is not a function")
                },
                ot = function(t, e) {
                    var n = t[e];
                    return null == n ? void 0 : rt(n)
                },
                it = s.TypeError,
                at = Object.defineProperty,
                ut = "__core-js_shared__",
                ct = s[ut] || function(t, e) {
                    try {
                        at(s, t, {
                            value: e,
                            configurable: !0,
                            writable: !0
                        })
                    } catch (Pi) {
                        s[t] = e
                    }
                    return e
                }(ut, {}),
                st = i((function(t) {
                    (t.exports = function(t, e) {
                        return ct[t] || (ct[t] = void 0 !== e ? e : {})
                    })("versions", []).push({
                        version: "3.20.1",
                        mode: "pure",
                        copyright: "\xa9 2021 Denis Pushkarev (zloirock.ru)"
                    })
                })),
                ft = s.Object,
                lt = function(t) {
                    return ft(K(t))
                },
                pt = b({}.hasOwnProperty),
                dt = Object.hasOwn || function(t, e) {
                    return pt(lt(t), e)
                },
                ht = 0,
                vt = Math.random(),
                yt = b(1..toString),
                mt = function(t) {
                    return "Symbol(" + (void 0 === t ? "" : t) + ")_" + yt(++ht + vt, 36)
                },
                gt = st("wks"),
                bt = s.Symbol,
                wt = bt && bt.for,
                _t = Z ? bt : bt && bt.withoutSetter || mt,
                Tt = function(t) {
                    if (!dt(gt, t) || !X && "string" != typeof gt[t]) {
                        var e = "Symbol." + t;
                        X && dt(bt, t) ? gt[t] = bt[t] : gt[t] = Z && wt ? wt(e) : _t(e)
                    }
                    return gt[t]
                },
                Ot = s.TypeError,
                Et = Tt("toPrimitive"),
                St = function(t, e) {
                    if (!M(t) || $(t)) return t;
                    var n, r = ot(t, Et);
                    if (r) {
                        if (void 0 === e && (e = "default"), n = E(r, t, e), !M(n) || $(n)) return n;
                        throw Ot("Can't convert object to primitive value")
                    }
                    return void 0 === e && (e = "number"),
                        function(t, e) {
                            var n, r;
                            if ("string" === e && w(n = t.toString) && !M(r = E(n, t))) return r;
                            if (w(n = t.valueOf) && !M(r = E(n, t))) return r;
                            if ("string" !== e && w(n = t.toString) && !M(r = E(n, t))) return r;
                            throw it("Can't convert object to primitive value")
                        }(t, e)
                },
                jt = function(t) {
                    var e = St(t, "string");
                    return $(e) ? e : e + ""
                },
                It = s.document,
                At = M(It) && M(It.createElement),
                xt = function(t) {
                    return At ? It.createElement(t) : {}
                },
                Pt = !T && !_((function() {
                    return 7 != Object.defineProperty(xt("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                })),
                Rt = Object.getOwnPropertyDescriptor,
                kt = {
                    f: T ? Rt : function(t, e) {
                        if (t = N(t), e = jt(e), Pt) try {
                            return Rt(t, e)
                        } catch (Pi) {}
                        if (dt(t, e)) return A(!E(I.f, t, e), t[e])
                    }
                },
                Ct = /#|\.prototype\./,
                Dt = function(t, e) {
                    var n = Kt[Lt(t)];
                    return n == Mt || n != Nt && (w(e) ? _(e) : !!e)
                },
                Lt = Dt.normalize = function(t) {
                    return String(t).replace(Ct, ".").toLowerCase()
                },
                Kt = Dt.data = {},
                Nt = Dt.NATIVE = "N",
                Mt = Dt.POLYFILL = "P",
                Ft = Dt,
                Bt = b(b.bind),
                Ut = function(t, e) {
                    return rt(t), void 0 === e ? t : Bt ? Bt(t, e) : function() {
                        return t.apply(e, arguments)
                    }
                },
                Gt = s.String,
                Ht = s.TypeError,
                qt = function(t) {
                    if (M(t)) return t;
                    throw Ht(Gt(t) + " is not an object")
                },
                zt = s.TypeError,
                Jt = Object.defineProperty,
                Vt = {
                    f: T ? Jt : function(t, e, n) {
                        if (qt(t), e = jt(e), qt(n), Pt) try {
                            return Jt(t, e, n)
                        } catch (Pi) {}
                        if ("get" in n || "set" in n) throw zt("Accessors not supported");
                        return "value" in n && (t[e] = n.value), t
                    }
                },
                Wt = T ? function(t, e, n) {
                    return Vt.f(t, e, A(1, n))
                } : function(t, e, n) {
                    return t[e] = n, t
                },
                Yt = kt.f,
                Xt = function(t) {
                    var e = function(n, r, o) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(n);
                                case 2:
                                    return new t(n, r)
                            }
                            return new t(n, r, o)
                        }
                        return h(t, this, arguments)
                    };
                    return e.prototype = t.prototype, e
                },
                Zt = function(t, e) {
                    var n, r, o, i, a, u, c, f, l = t.target,
                        p = t.global,
                        d = t.stat,
                        h = t.proto,
                        v = p ? s : d ? s[l] : (s[l] || {}).prototype,
                        y = p ? F : F[l] || Wt(F, l, {})[l],
                        m = y.prototype;
                    for (o in e) n = !Ft(p ? o : l + (d ? "." : "#") + o, t.forced) && v && dt(v, o), a = y[o], n && (u = t.noTargetGet ? (f = Yt(v, o)) && f.value : v[o]), i = n && u ? u : e[o], n && typeof a == typeof i || (c = t.bind && n ? Ut(i, s) : t.wrap && n ? Xt(i) : h && w(i) ? b(i) : i, (t.sham || i && i.sham || a && a.sham) && Wt(c, "sham", !0), Wt(y, o, c), h && (dt(F, r = l + "Prototype") || Wt(F, r, {}), Wt(F[r], o, i), t.real && m && !m[o] && Wt(m, o, i)))
                },
                Qt = st("keys"),
                $t = function(t) {
                    return Qt[t] || (Qt[t] = mt(t))
                },
                te = !_((function() {
                    function t() {}
                    return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
                })),
                ee = $t("IE_PROTO"),
                ne = s.Object,
                re = ne.prototype,
                oe = te ? ne.getPrototypeOf : function(t) {
                    var e = lt(t);
                    if (dt(e, ee)) return e[ee];
                    var n = e.constructor;
                    return w(n) && e instanceof n ? n.prototype : e instanceof ne ? re : null
                },
                ie = s.String,
                ae = s.TypeError,
                ue = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                    var t, e = !1,
                        n = {};
                    try {
                        (t = b(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(n, []), e = n instanceof Array
                    } catch (Pi) {}
                    return function(n, r) {
                        return qt(n),
                            function(t) {
                                if ("object" == typeof t || w(t)) return t;
                                throw ae("Can't set " + ie(t) + " as a prototype")
                            }(r), e ? t(n, r) : n.__proto__ = r, n
                    }
                }() : void 0),
                ce = Math.ceil,
                se = Math.floor,
                fe = function(t) {
                    var e = +t;
                    return e != e || 0 === e ? 0 : (e > 0 ? se : ce)(e)
                },
                le = Math.max,
                pe = Math.min,
                de = Math.min,
                he = function(t) {
                    return (e = t.length) > 0 ? de(fe(e), 9007199254740991) : 0;
                    var e
                },
                ve = function(t) {
                    return function(e, n, r) {
                        var o, i = N(e),
                            a = he(i),
                            u = function(t, e) {
                                var n = fe(t);
                                return n < 0 ? le(n + e, 0) : pe(n, e)
                            }(r, a);
                        if (t && n != n) {
                            for (; a > u;)
                                if ((o = i[u++]) != o) return !0
                        } else
                            for (; a > u; u++)
                                if ((t || u in i) && i[u] === n) return t || u || 0;
                        return !t && -1
                    }
                },
                ye = {
                    includes: ve(!0),
                    indexOf: ve(!1)
                },
                me = {},
                ge = ye.indexOf,
                be = b([].push),
                we = function(t, e) {
                    var n, r = N(t),
                        o = 0,
                        i = [];
                    for (n in r) !dt(me, n) && dt(r, n) && be(i, n);
                    for (; e.length > o;) dt(r, n = e[o++]) && (~ge(i, n) || be(i, n));
                    return i
                },
                _e = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                Te = _e.concat("length", "prototype"),
                Oe = {
                    f: Object.getOwnPropertyNames || function(t) {
                        return we(t, Te)
                    }
                },
                Ee = {
                    f: Object.getOwnPropertySymbols
                },
                Se = b([].concat),
                je = U("Reflect", "ownKeys") || function(t) {
                    var e = Oe.f(qt(t)),
                        n = Ee.f;
                    return n ? Se(e, n(t)) : e
                },
                Ie = Object.keys || function(t) {
                    return we(t, _e)
                },
                Ae = T ? Object.defineProperties : function(t, e) {
                    qt(t);
                    for (var n, r = N(e), o = Ie(e), i = o.length, a = 0; i > a;) Vt.f(t, n = o[a++], r[n]);
                    return t
                },
                xe = U("document", "documentElement"),
                Pe = "prototype",
                Re = "script",
                ke = $t("IE_PROTO"),
                Ce = function() {},
                De = function(t) {
                    return "<" + Re + ">" + t + "</" + Re + ">"
                },
                Le = function(t) {
                    t.write(De("")), t.close();
                    var e = t.parentWindow.Object;
                    return t = null, e
                },
                Ke = function() {
                    try {
                        W = new ActiveXObject("htmlfile")
                    } catch (Pi) {}
                    var t, e, n;
                    Ke = "undefined" != typeof document ? document.domain && W ? Le(W) : (e = xt("iframe"), n = "java" + Re + ":", e.style.display = "none", xe.appendChild(e), e.src = String(n), (t = e.contentWindow.document).open(), t.write(De("document.F=Object")), t.close(), t.F) : Le(W);
                    for (var r = _e.length; r--;) delete Ke[Pe][_e[r]];
                    return Ke()
                };
            me[ke] = !0;
            var Ne = Object.create || function(t, e) {
                    var n;
                    return null !== t ? (Ce[Pe] = qt(t), n = new Ce, Ce[Pe] = null, n[ke] = t) : n = Ke(), void 0 === e ? n : Ae(n, e)
                },
                Me = b("".replace),
                Fe = String(Error("zxcasd").stack),
                Be = /\n\s*at [^:]*:[^\n]*/,
                Ue = Be.test(Fe),
                Ge = {},
                He = Tt("iterator"),
                qe = Array.prototype,
                ze = {};
            ze[Tt("toStringTag")] = "z";
            var Je = "[object z]" === String(ze),
                Ve = Tt("toStringTag"),
                We = s.Object,
                Ye = "Arguments" == R(function() {
                    return arguments
                }()),
                Xe = Je ? R : function(t) {
                    var e, n, r;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
                        try {
                            return t[e]
                        } catch (Pi) {}
                    }(e = We(t), Ve)) ? n : Ye ? R(e) : "Object" == (r = R(e)) && w(e.callee) ? "Arguments" : r
                },
                Ze = Tt("iterator"),
                Qe = function(t) {
                    if (null != t) return ot(t, Ze) || ot(t, "@@iterator") || Ge[Xe(t)]
                },
                $e = s.TypeError,
                tn = function(t, e, n) {
                    var r, o;
                    qt(t);
                    try {
                        if (!(r = ot(t, "return"))) {
                            if ("throw" === e) throw n;
                            return n
                        }
                        r = E(r, t)
                    } catch (Pi) {
                        o = !0, r = Pi
                    }
                    if ("throw" === e) throw n;
                    if (o) throw r;
                    return qt(r), n
                },
                en = s.TypeError,
                nn = function(t, e) {
                    this.stopped = t, this.result = e
                },
                rn = nn.prototype,
                on = function(t, e, n) {
                    var r, o, i, a, u, c, s, f, l = n && n.that,
                        p = !(!n || !n.AS_ENTRIES),
                        d = !(!n || !n.IS_ITERATOR),
                        h = !(!n || !n.INTERRUPTED),
                        v = Ut(e, l),
                        y = function(t) {
                            return r && tn(r, "normal", t), new nn(!0, t)
                        },
                        m = function(t) {
                            return p ? (qt(t), h ? v(t[0], t[1], y) : v(t[0], t[1])) : h ? v(t, y) : v(t)
                        };
                    if (d) r = t;
                    else {
                        if (!(o = Qe(t))) throw en(et(t) + " is not iterable");
                        if (void 0 !== (f = o) && (Ge.Array === f || qe[He] === f)) {
                            for (i = 0, a = he(t); a > i; i++)
                                if ((u = m(t[i])) && G(rn, u)) return u;
                            return new nn(!1)
                        }
                        r = function(t, e) {
                            var n = arguments.length < 2 ? Qe(t) : e;
                            if (rt(n)) return qt(E(n, t));
                            throw $e(et(t) + " is not iterable")
                        }(t, o)
                    }
                    for (c = r.next; !(s = E(c, r)).done;) {
                        try {
                            u = m(s.value)
                        } catch (Pi) {
                            tn(r, "throw", Pi)
                        }
                        if ("object" == typeof u && u && G(rn, u)) return u
                    }
                    return new nn(!1)
                },
                an = s.String,
                un = function(t) {
                    if ("Symbol" === Xe(t)) throw TypeError("Cannot convert a Symbol value to a string");
                    return an(t)
                },
                cn = !_((function() {
                    var t = Error("a");
                    return !("stack" in t) || (Object.defineProperty(t, "stack", A(1, 7)), 7 !== t.stack)
                })),
                sn = Tt("toStringTag"),
                fn = s.Error,
                ln = [].push,
                pn = function(t, e) {
                    var n, r = arguments.length > 2 ? arguments[2] : void 0,
                        o = G(dn, this);
                    ue ? n = ue(new fn, o ? oe(this) : dn) : (n = o ? this : Ne(dn), Wt(n, sn, "Error")), void 0 !== e && Wt(n, "message", function(t, e) {
                            return void 0 === t ? arguments.length < 2 ? "" : e : un(t)
                        }(e)), cn && Wt(n, "stack", function(t, e) {
                            if (Ue && "string" == typeof t)
                                for (; e--;) t = Me(t, Be, "");
                            return t
                        }(n.stack, 1)),
                        function(t, e) {
                            M(e) && "cause" in e && Wt(t, "cause", e.cause)
                        }(n, r);
                    var i = [];
                    return on(t, ln, {
                        that: i
                    }), Wt(n, "errors", i), n
                };
            ue ? ue(pn, fn) : function(t, e, n) {
                for (var r = je(e), o = Vt.f, i = kt.f, a = 0; a < r.length; a++) {
                    var u = r[a];
                    dt(t, u) || n && dt(n, u) || o(t, u, i(e, u))
                }
            }(pn, fn, {
                name: !0
            });
            var dn = pn.prototype = Ne(fn.prototype, {
                constructor: A(1, pn),
                message: A(1, ""),
                name: A(1, "AggregateError")
            });
            Zt({
                global: !0
            }, {
                AggregateError: pn
            });
            var hn = b(Function.toString);
            w(ct.inspectSource) || (ct.inspectSource = function(t) {
                return hn(t)
            });
            var vn, yn, mn, gn = ct.inspectSource,
                bn = s.WeakMap,
                wn = w(bn) && /native code/.test(gn(bn)),
                _n = "Object already initialized",
                Tn = s.TypeError,
                On = s.WeakMap;
            if (wn || ct.state) {
                var En = ct.state || (ct.state = new On),
                    Sn = b(En.get),
                    jn = b(En.has),
                    In = b(En.set);
                vn = function(t, e) {
                    if (jn(En, t)) throw new Tn(_n);
                    return e.facade = t, In(En, t, e), e
                }, yn = function(t) {
                    return Sn(En, t) || {}
                }, mn = function(t) {
                    return jn(En, t)
                }
            } else {
                var An = $t("state");
                me[An] = !0, vn = function(t, e) {
                    if (dt(t, An)) throw new Tn(_n);
                    return e.facade = t, Wt(t, An, e), e
                }, yn = function(t) {
                    return dt(t, An) ? t[An] : {}
                }, mn = function(t) {
                    return dt(t, An)
                }
            }
            var xn, Pn, Rn, kn = {
                    set: vn,
                    get: yn,
                    has: mn,
                    enforce: function(t) {
                        return mn(t) ? yn(t) : vn(t, {})
                    },
                    getterFor: function(t) {
                        return function(e) {
                            var n;
                            if (!M(e) || (n = yn(e)).type !== t) throw Tn("Incompatible receiver, " + t + " required");
                            return n
                        }
                    }
                },
                Cn = Function.prototype,
                Dn = T && Object.getOwnPropertyDescriptor,
                Ln = dt(Cn, "name"),
                Kn = {
                    EXISTS: Ln,
                    PROPER: Ln && "something" === function() {}.name,
                    CONFIGURABLE: Ln && (!T || T && Dn(Cn, "name").configurable)
                },
                Nn = function(t, e, n, r) {
                    r && r.enumerable ? t[e] = n : Wt(t, e, n)
                },
                Mn = Tt("iterator"),
                Fn = !1;
            [].keys && ("next" in (Rn = [].keys()) ? (Pn = oe(oe(Rn))) !== Object.prototype && (xn = Pn) : Fn = !0);
            var Bn = null == xn || _((function() {
                var t = {};
                return xn[Mn].call(t) !== t
            }));
            xn = Bn ? {} : Ne(xn), w(xn[Mn]) || Nn(xn, Mn, (function() {
                return this
            }));
            var Un = {
                    IteratorPrototype: xn,
                    BUGGY_SAFARI_ITERATORS: Fn
                },
                Gn = Je ? {}.toString : function() {
                    return "[object " + Xe(this) + "]"
                },
                Hn = Vt.f,
                qn = Tt("toStringTag"),
                zn = function(t, e, n, r) {
                    if (t) {
                        var o = n ? t : t.prototype;
                        dt(o, qn) || Hn(o, qn, {
                            configurable: !0,
                            value: e
                        }), r && !Je && Wt(o, "toString", Gn)
                    }
                },
                Jn = Un.IteratorPrototype,
                Vn = function() {
                    return this
                },
                Wn = Kn.PROPER,
                Yn = Un.BUGGY_SAFARI_ITERATORS,
                Xn = Tt("iterator"),
                Zn = "keys",
                Qn = "values",
                $n = "entries",
                tr = function() {
                    return this
                },
                er = function(t, e, n, r, o, i, a) {
                    ! function(t, e, n, r) {
                        var o = e + " Iterator";
                        t.prototype = Ne(Jn, {
                            next: A(+!r, n)
                        }), zn(t, o, !1, !0), Ge[o] = Vn
                    }(n, e, r);
                    var u, c, s, f = function(t) {
                            if (t === o && v) return v;
                            if (!Yn && t in d) return d[t];
                            switch (t) {
                                case Zn:
                                case Qn:
                                case $n:
                                    return function() {
                                        return new n(this, t)
                                    }
                            }
                            return function() {
                                return new n(this)
                            }
                        },
                        l = e + " Iterator",
                        p = !1,
                        d = t.prototype,
                        h = d[Xn] || d["@@iterator"] || o && d[o],
                        v = !Yn && h || f(o),
                        y = "Array" == e && d.entries || h;
                    if (y && (u = oe(y.call(new t))) !== Object.prototype && u.next && (zn(u, l, !0, !0), Ge[l] = tr), Wn && o == Qn && h && h.name !== Qn && (p = !0, v = function() {
                            return E(h, this)
                        }), o)
                        if (c = {
                                values: f(Qn),
                                keys: i ? v : f(Zn),
                                entries: f($n)
                            }, a)
                            for (s in c)(Yn || p || !(s in d)) && Nn(d, s, c[s]);
                        else Zt({
                            target: e,
                            proto: !0,
                            forced: Yn || p
                        }, c);
                    return a && d[Xn] !== v && Nn(d, Xn, v, {
                        name: o
                    }), Ge[e] = v, c
                };
            Vt.f;
            var nr = "Array Iterator",
                rr = kn.set,
                or = kn.getterFor(nr);
            er(Array, "Array", (function(t, e) {
                rr(this, {
                    type: nr,
                    target: N(t),
                    index: 0,
                    kind: e
                })
            }), (function() {
                var t = or(this),
                    e = t.target,
                    n = t.kind,
                    r = t.index++;
                return !e || r >= e.length ? (t.target = void 0, {
                    value: void 0,
                    done: !0
                }) : "keys" == n ? {
                    value: r,
                    done: !1
                } : "values" == n ? {
                    value: e[r],
                    done: !1
                } : {
                    value: [r, e[r]],
                    done: !1
                }
            }), "values"), Ge.Arguments = Ge.Array;
            var ir = s.Promise,
                ar = Tt("species"),
                ur = s.TypeError,
                cr = Tt("iterator"),
                sr = !1;
            try {
                var fr = 0,
                    lr = {
                        next: function() {
                            return {
                                done: !!fr++
                            }
                        },
                        return: function() {
                            sr = !0
                        }
                    };
                lr[cr] = function() {
                    return this
                }, Array.from(lr, (function() {
                    throw 2
                }))
            } catch (Pi) {}
            var pr = function() {},
                dr = [],
                hr = U("Reflect", "construct"),
                vr = /^\s*(?:class|function)\b/,
                yr = b(vr.exec),
                mr = !vr.exec(pr),
                gr = function(t) {
                    if (!w(t)) return !1;
                    try {
                        return hr(pr, dr, t), !0
                    } catch (Pi) {
                        return !1
                    }
                },
                br = function(t) {
                    if (!w(t)) return !1;
                    switch (Xe(t)) {
                        case "AsyncFunction":
                        case "GeneratorFunction":
                        case "AsyncGeneratorFunction":
                            return !1
                    }
                    try {
                        return mr || !!yr(vr, gn(t))
                    } catch (Pi) {
                        return !0
                    }
                };
            br.sham = !0;
            var wr, _r, Tr, Or, Er = !hr || _((function() {
                    var t;
                    return gr(gr.call) || !gr(Object) || !gr((function() {
                        t = !0
                    })) || t
                })) ? br : gr,
                Sr = s.TypeError,
                jr = Tt("species"),
                Ir = function(t, e) {
                    var n, r = qt(t).constructor;
                    return void 0 === r || null == (n = qt(r)[jr]) ? e : function(t) {
                        if (Er(t)) return t;
                        throw Sr(et(t) + " is not a constructor")
                    }(n)
                },
                Ar = b([].slice),
                xr = /(?:ipad|iphone|ipod).*applewebkit/i.test(H),
                Pr = "process" == R(s.process),
                Rr = s.setImmediate,
                kr = s.clearImmediate,
                Cr = s.process,
                Dr = s.Dispatch,
                Lr = s.Function,
                Kr = s.MessageChannel,
                Nr = s.String,
                Mr = 0,
                Fr = {},
                Br = "onreadystatechange";
            try {
                wr = s.location
            } catch (Pi) {}
            var Ur = function(t) {
                    if (dt(Fr, t)) {
                        var e = Fr[t];
                        delete Fr[t], e()
                    }
                },
                Gr = function(t) {
                    return function() {
                        Ur(t)
                    }
                },
                Hr = function(t) {
                    Ur(t.data)
                },
                qr = function(t) {
                    s.postMessage(Nr(t), wr.protocol + "//" + wr.host)
                };
            Rr && kr || (Rr = function(t) {
                var e = Ar(arguments, 1);
                return Fr[++Mr] = function() {
                    h(w(t) ? t : Lr(t), void 0, e)
                }, _r(Mr), Mr
            }, kr = function(t) {
                delete Fr[t]
            }, Pr ? _r = function(t) {
                Cr.nextTick(Gr(t))
            } : Dr && Dr.now ? _r = function(t) {
                Dr.now(Gr(t))
            } : Kr && !xr ? (Or = (Tr = new Kr).port2, Tr.port1.onmessage = Hr, _r = Ut(Or.postMessage, Or)) : s.addEventListener && w(s.postMessage) && !s.importScripts && wr && "file:" !== wr.protocol && !_(qr) ? (_r = qr, s.addEventListener("message", Hr, !1)) : _r = Br in xt("script") ? function(t) {
                xe.appendChild(xt("script"))[Br] = function() {
                    xe.removeChild(this), Ur(t)
                }
            } : function(t) {
                setTimeout(Gr(t), 0)
            });
            var zr, Jr, Vr, Wr, Yr, Xr, Zr, Qr, $r = {
                    set: Rr,
                    clear: kr
                },
                to = /ipad|iphone|ipod/i.test(H) && void 0 !== s.Pebble,
                eo = /web0s(?!.*chrome)/i.test(H),
                no = kt.f,
                ro = $r.set,
                oo = s.MutationObserver || s.WebKitMutationObserver,
                io = s.document,
                ao = s.process,
                uo = s.Promise,
                co = no(s, "queueMicrotask"),
                so = co && co.value;
            so || (zr = function() {
                var t, e;
                for (Pr && (t = ao.domain) && t.exit(); Jr;) {
                    e = Jr.fn, Jr = Jr.next;
                    try {
                        e()
                    } catch (Pi) {
                        throw Jr ? Wr() : Vr = void 0, Pi
                    }
                }
                Vr = void 0, t && t.enter()
            }, xr || Pr || eo || !oo || !io ? !to && uo && uo.resolve ? ((Zr = uo.resolve(void 0)).constructor = uo, Qr = Ut(Zr.then, Zr), Wr = function() {
                Qr(zr)
            }) : Pr ? Wr = function() {
                ao.nextTick(zr)
            } : (ro = Ut(ro, s), Wr = function() {
                ro(zr)
            }) : (Yr = !0, Xr = io.createTextNode(""), new oo(zr).observe(Xr, {
                characterData: !0
            }), Wr = function() {
                Xr.data = Yr = !Yr
            }));
            var fo = so || function(t) {
                    var e = {
                        fn: t,
                        next: void 0
                    };
                    Vr && (Vr.next = e), Jr || (Jr = e, Wr()), Vr = e
                },
                lo = function(t) {
                    var e, n;
                    this.promise = new t((function(t, r) {
                        if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                        e = t, n = r
                    })), this.resolve = rt(e), this.reject = rt(n)
                },
                po = {
                    f: function(t) {
                        return new lo(t)
                    }
                },
                ho = function(t, e) {
                    if (qt(t), M(e) && e.constructor === t) return e;
                    var n = po.f(t);
                    return (0, n.resolve)(e), n.promise
                },
                vo = function(t) {
                    try {
                        return {
                            error: !1,
                            value: t()
                        }
                    } catch (Pi) {
                        return {
                            error: !0,
                            value: Pi
                        }
                    }
                },
                yo = function() {
                    this.head = null, this.tail = null
                };
            yo.prototype = {
                add: function(t) {
                    var e = {
                        item: t,
                        next: null
                    };
                    this.head ? this.tail.next = e : this.head = e, this.tail = e
                },
                get: function() {
                    var t = this.head;
                    if (t) return this.head = t.next, this.tail === t && (this.tail = null), t.item
                }
            };
            var mo, go, bo, wo = yo,
                _o = "object" == typeof window,
                To = $r.set,
                Oo = Tt("species"),
                Eo = "Promise",
                So = kn.getterFor(Eo),
                jo = kn.set,
                Io = kn.getterFor(Eo),
                Ao = ir && ir.prototype,
                xo = ir,
                Po = Ao,
                Ro = s.TypeError,
                ko = s.document,
                Co = s.process,
                Do = po.f,
                Lo = Do,
                Ko = !!(ko && ko.createEvent && s.dispatchEvent),
                No = w(s.PromiseRejectionEvent),
                Mo = "unhandledrejection",
                Fo = Ft(Eo, (function() {
                    var t = gn(xo),
                        e = t !== String(xo);
                    if (!e && 66 === Y) return !0;
                    if (!Po.finally) return !0;
                    if (Y >= 51 && /native code/.test(t)) return !1;
                    var n = new xo((function(t) {
                            t(1)
                        })),
                        r = function(t) {
                            t((function() {}), (function() {}))
                        };
                    return (n.constructor = {})[Oo] = r, !(n.then((function() {})) instanceof r) || !e && _o && !No
                })),
                Bo = Fo || ! function(t, e) {
                    if (!e && !sr) return !1;
                    var n = !1;
                    try {
                        var r = {};
                        r[cr] = function() {
                            return {
                                next: function() {
                                    return {
                                        done: n = !0
                                    }
                                }
                            }
                        }, t(r)
                    } catch (Pi) {}
                    return n
                }((function(t) {
                    xo.all(t).catch((function() {}))
                })),
                Uo = function(t) {
                    var e;
                    return !(!M(t) || !w(e = t.then)) && e
                },
                Go = function(t, e) {
                    var n, r, o, i = e.value,
                        a = 1 == e.state,
                        u = a ? t.ok : t.fail,
                        c = t.resolve,
                        s = t.reject,
                        f = t.domain;
                    try {
                        u ? (a || (2 === e.rejection && Vo(e), e.rejection = 1), !0 === u ? n = i : (f && f.enter(), n = u(i), f && (f.exit(), o = !0)), n === t.promise ? s(Ro("Promise-chain cycle")) : (r = Uo(n)) ? E(r, n, c, s) : c(n)) : s(i)
                    } catch (Pi) {
                        f && !o && f.exit(), s(Pi)
                    }
                },
                Ho = function(t, e) {
                    t.notified || (t.notified = !0, fo((function() {
                        for (var n, r = t.reactions; n = r.get();) Go(n, t);
                        t.notified = !1, e && !t.rejection && zo(t)
                    })))
                },
                qo = function(t, e, n) {
                    var r, o;
                    Ko ? ((r = ko.createEvent("Event")).promise = e, r.reason = n, r.initEvent(t, !1, !0), s.dispatchEvent(r)) : r = {
                        promise: e,
                        reason: n
                    }, !No && (o = s["on" + t]) ? o(r) : t === Mo && function(t, e) {
                        var n = s.console;
                        n && n.error && (1 == arguments.length ? n.error(t) : n.error(t, e))
                    }("Unhandled promise rejection", n)
                },
                zo = function(t) {
                    E(To, s, (function() {
                        var e, n = t.facade,
                            r = t.value;
                        if (Jo(t) && (e = vo((function() {
                                Pr ? Co.emit("unhandledRejection", r, n) : qo(Mo, n, r)
                            })), t.rejection = Pr || Jo(t) ? 2 : 1, e.error)) throw e.value
                    }))
                },
                Jo = function(t) {
                    return 1 !== t.rejection && !t.parent
                },
                Vo = function(t) {
                    E(To, s, (function() {
                        var e = t.facade;
                        Pr ? Co.emit("rejectionHandled", e) : qo("rejectionhandled", e, t.value)
                    }))
                },
                Wo = function(t, e, n) {
                    return function(r) {
                        t(e, r, n)
                    }
                },
                Yo = function(t, e, n) {
                    t.done || (t.done = !0, n && (t = n), t.value = e, t.state = 2, Ho(t, !0))
                },
                Xo = function(t, e, n) {
                    if (!t.done) {
                        t.done = !0, n && (t = n);
                        try {
                            if (t.facade === e) throw Ro("Promise can't be resolved itself");
                            var r = Uo(e);
                            r ? fo((function() {
                                var n = {
                                    done: !1
                                };
                                try {
                                    E(r, e, Wo(Xo, n, t), Wo(Yo, n, t))
                                } catch (Pi) {
                                    Yo(n, Pi, t)
                                }
                            })) : (t.value = e, t.state = 1, Ho(t, !1))
                        } catch (Pi) {
                            Yo({
                                done: !1
                            }, Pi, t)
                        }
                    }
                };
            Fo && (xo = function(t) {
                    ! function(t, e) {
                        if (G(e, t)) return t;
                        throw ur("Incorrect invocation")
                    }(this, Po), rt(t), E(mo, this);
                    var e = So(this);
                    try {
                        t(Wo(Xo, e), Wo(Yo, e))
                    } catch (Pi) {
                        Yo(e, Pi)
                    }
                }, Po = xo.prototype, (mo = function(t) {
                    jo(this, {
                        type: Eo,
                        done: !1,
                        notified: !1,
                        parent: !1,
                        reactions: new wo,
                        rejection: !1,
                        state: 0,
                        value: void 0
                    })
                }).prototype = function(t, e, n) {
                    for (var r in e) n && n.unsafe && t[r] ? t[r] = e[r] : Nn(t, r, e[r], n);
                    return t
                }(Po, {
                    then: function(t, e) {
                        var n = Io(this),
                            r = Do(Ir(this, xo));
                        return n.parent = !0, r.ok = !w(t) || t, r.fail = w(e) && e, r.domain = Pr ? Co.domain : void 0, 0 == n.state ? n.reactions.add(r) : fo((function() {
                            Go(r, n)
                        })), r.promise
                    },
                    catch: function(t) {
                        return this.then(void 0, t)
                    }
                }), go = function() {
                    var t = new mo,
                        e = So(t);
                    this.promise = t, this.resolve = Wo(Xo, e), this.reject = Wo(Yo, e)
                }, po.f = Do = function(t) {
                    return t === xo || t === bo ? new go(t) : Lo(t)
                }), Zt({
                    global: !0,
                    wrap: !0,
                    forced: Fo
                }, {
                    Promise: xo
                }), zn(xo, Eo, !1, !0),
                function(t) {
                    var e = U(t),
                        n = Vt.f;
                    T && e && !e[ar] && n(e, ar, {
                        configurable: !0,
                        get: function() {
                            return this
                        }
                    })
                }(Eo), bo = U(Eo), Zt({
                    target: Eo,
                    stat: !0,
                    forced: Fo
                }, {
                    reject: function(t) {
                        var e = Do(this);
                        return E(e.reject, void 0, t), e.promise
                    }
                }), Zt({
                    target: Eo,
                    stat: !0,
                    forced: !0
                }, {
                    resolve: function(t) {
                        return ho(this === bo ? xo : this, t)
                    }
                }), Zt({
                    target: Eo,
                    stat: !0,
                    forced: Bo
                }, {
                    all: function(t) {
                        var e = this,
                            n = Do(e),
                            r = n.resolve,
                            o = n.reject,
                            i = vo((function() {
                                var n = rt(e.resolve),
                                    i = [],
                                    a = 0,
                                    u = 1;
                                on(t, (function(t) {
                                    var c = a++,
                                        s = !1;
                                    u++, E(n, e, t).then((function(t) {
                                        s || (s = !0, i[c] = t, --u || r(i))
                                    }), o)
                                })), --u || r(i)
                            }));
                        return i.error && o(i.value), n.promise
                    },
                    race: function(t) {
                        var e = this,
                            n = Do(e),
                            r = n.reject,
                            o = vo((function() {
                                var o = rt(e.resolve);
                                on(t, (function(t) {
                                    E(o, e, t).then(n.resolve, r)
                                }))
                            }));
                        return o.error && r(o.value), n.promise
                    }
                }), Zt({
                    target: "Promise",
                    stat: !0
                }, {
                    allSettled: function(t) {
                        var e = this,
                            n = po.f(e),
                            r = n.resolve,
                            o = n.reject,
                            i = vo((function() {
                                var n = rt(e.resolve),
                                    o = [],
                                    i = 0,
                                    a = 1;
                                on(t, (function(t) {
                                    var u = i++,
                                        c = !1;
                                    a++, E(n, e, t).then((function(t) {
                                        c || (c = !0, o[u] = {
                                            status: "fulfilled",
                                            value: t
                                        }, --a || r(o))
                                    }), (function(t) {
                                        c || (c = !0, o[u] = {
                                            status: "rejected",
                                            reason: t
                                        }, --a || r(o))
                                    }))
                                })), --a || r(o)
                            }));
                        return i.error && o(i.value), n.promise
                    }
                });
            var Zo = "No one promise resolved";
            Zt({
                target: "Promise",
                stat: !0
            }, {
                any: function(t) {
                    var e = this,
                        n = U("AggregateError"),
                        r = po.f(e),
                        o = r.resolve,
                        i = r.reject,
                        a = vo((function() {
                            var r = rt(e.resolve),
                                a = [],
                                u = 0,
                                c = 1,
                                s = !1;
                            on(t, (function(t) {
                                var f = u++,
                                    l = !1;
                                c++, E(r, e, t).then((function(t) {
                                    l || s || (s = !0, o(t))
                                }), (function(t) {
                                    l || s || (l = !0, a[f] = t, --c || i(new n(a, Zo)))
                                }))
                            })), --c || i(new n(a, Zo))
                        }));
                    return a.error && i(a.value), r.promise
                }
            });
            var Qo = !!ir && _((function() {
                ir.prototype.finally.call({
                    then: function() {}
                }, (function() {}))
            }));
            Zt({
                target: "Promise",
                proto: !0,
                real: !0,
                forced: Qo
            }, {
                finally: function(t) {
                    var e = Ir(this, U("Promise")),
                        n = w(t);
                    return this.then(n ? function(n) {
                        return ho(e, t()).then((function() {
                            return n
                        }))
                    } : t, n ? function(n) {
                        return ho(e, t()).then((function() {
                            throw n
                        }))
                    } : t)
                }
            });
            var $o = b("".charAt),
                ti = b("".charCodeAt),
                ei = b("".slice),
                ni = function(t) {
                    return function(e, n) {
                        var r, o, i = un(K(e)),
                            a = fe(n),
                            u = i.length;
                        return a < 0 || a >= u ? t ? "" : void 0 : (r = ti(i, a)) < 55296 || r > 56319 || a + 1 === u || (o = ti(i, a + 1)) < 56320 || o > 57343 ? t ? $o(i, a) : r : t ? ei(i, a, a + 2) : o - 56320 + (r - 55296 << 10) + 65536
                    }
                },
                ri = {
                    codeAt: ni(!1),
                    charAt: ni(!0)
                }.charAt,
                oi = "String Iterator",
                ii = kn.set,
                ai = kn.getterFor(oi);
            er(String, "String", (function(t) {
                ii(this, {
                    type: oi,
                    string: un(t),
                    index: 0
                })
            }), (function() {
                var t, e = ai(this),
                    n = e.string,
                    r = e.index;
                return r >= n.length ? {
                    value: void 0,
                    done: !0
                } : (t = ri(n, r), e.index += t.length, {
                    value: t,
                    done: !1
                })
            }));
            var ui = F.Promise,
                ci = Tt("toStringTag");
            for (var si in {
                    CSSRuleList: 0,
                    CSSStyleDeclaration: 0,
                    CSSValueList: 0,
                    ClientRectList: 0,
                    DOMRectList: 0,
                    DOMStringList: 0,
                    DOMTokenList: 1,
                    DataTransferItemList: 0,
                    FileList: 0,
                    HTMLAllCollection: 0,
                    HTMLCollection: 0,
                    HTMLFormElement: 0,
                    HTMLSelectElement: 0,
                    MediaList: 0,
                    MimeTypeArray: 0,
                    NamedNodeMap: 0,
                    NodeList: 1,
                    PaintRequestList: 0,
                    Plugin: 0,
                    PluginArray: 0,
                    SVGLengthList: 0,
                    SVGNumberList: 0,
                    SVGPathSegList: 0,
                    SVGPointList: 0,
                    SVGStringList: 0,
                    SVGTransformList: 0,
                    SourceBufferList: 0,
                    StyleSheetList: 0,
                    TextTrackCueList: 0,
                    TextTrackList: 0,
                    TouchList: 0
                }) {
                var fi = s[si],
                    li = fi && fi.prototype;
                li && Xe(li) !== ci && Wt(li, ci, si), Ge[si] = Ge.Array
            }
            var pi = ui;

            function di(t) {
                var e, n = t.transport,
                    r = t.endpoint,
                    o = t.size,
                    i = void 0 === o ? 10 : o,
                    a = t.wait,
                    u = void 0 === a ? 1e3 : a,
                    c = [],
                    s = 0;

                function f() {
                    if (c.length) {
                        var t = this.getBatchData();
                        n.post({
                            url: r,
                            data: t,
                            fail: function(n) {
                                e && e(n, t)
                            }
                        }), c = []
                    }
                }
                return {
                    getSize: function() {
                        return i
                    },
                    getWait: function() {
                        return u
                    },
                    setSize: function(t) {
                        i = t
                    },
                    setWait: function(t) {
                        u = t
                    },
                    getEndpoint: function() {
                        return r
                    },
                    setEndpoint: function(t) {
                        r = t
                    },
                    send: function(t) {
                        c.push(t), c.length >= i && f.call(this), clearTimeout(s), s = setTimeout(f.bind(this), u)
                    },
                    flush: function() {
                        clearTimeout(s), f.call(this)
                    },
                    getBatchData: function() {
                        return c.length ? (t = c, JSON.stringify({
                            ev_type: "batch",
                            list: t
                        })) : "";
                        var t
                    },
                    clear: function() {
                        clearTimeout(s), c = []
                    },
                    fail: function(t) {
                        e = t
                    }
                }
            }
            var hi = function() {
                return hi = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }, hi.apply(this, arguments)
            };

            function vi(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (Pi) {
                    o = {
                        error: Pi
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }

            function yi(t, e, n) {
                if (n || 2 === arguments.length)
                    for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                return t.concat(r || Array.prototype.slice.call(e))
            }
            var mi = ["init", "start", "config", "beforeDestroy", "provide", "beforeReport", "report", "beforeBuild", "build", "beforeSend", "send", "beforeConfig"],
                gi = function() {
                    return {}
                };

            function bi(t) {
                return t
            }

            function wi(t) {
                return "object" == typeof t && null !== t
            }
            var _i = Object.prototype;

            function Ti(t) {
                return "[object Array]" === _i.toString.call(t)
            }

            function Oi(t) {
                return "number" == typeof t
            }

            function Ei(t) {
                return "string" == typeof t
            }

            function Si(t, e) {
                if (!Ti(t)) return !1;
                if (0 === t.length) return !1;
                for (var n = 0; n < t.length;) {
                    if (t[n] === e) return !0;
                    n++
                }
                return !1
            }
            var ji = function(t, e) {
                if (!Ti(t)) return t;
                var n = t.indexOf(e);
                if (n >= 0) {
                    var r = t.slice();
                    return r.splice(n, 1), r
                }
                return t
            };

            function Ii(t) {
                try {
                    return Ei(t) ? t : JSON.stringify(t)
                } catch (e) {
                    return "[FAILED_TO_STRINGIFY]:" + String(e)
                }
            }
            var Ai = "".padStart ? function(t, e) {
                    return void 0 === e && (e = 8), t.padStart(e, " ")
                } : function(t) {
                    return t
                },
                xi = 0,
                Pi = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    console.error.apply(console, yi(["[SDK]", Date.now(), Ai("" + xi++)], vi(t), !1))
                },
                Ri = 0,
                ki = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    console.warn.apply(console, yi(["[SDK]", Date.now(), Ai("" + Ri++)], vi(t), !1))
                },
                Ci = function(t) {
                    return Math.random() < Number(t)
                },
                Di = function(t, e) {
                    return t < Number(e)
                },
                Li = function(t) {
                    return function(e) {
                        for (var n = e, r = 0; r < t.length && n; r++) try {
                            n = t[r](n)
                        } catch (o) {
                            Pi(o)
                        }
                        return n
                    }
                };

            function Ki() {
                var t = function() {
                    for (var t = new Array(16), e = 0, n = 0; n < 16; n++) 3 & n || (e = 4294967296 * Math.random()), t[n] = e >>> ((3 & n) << 3) & 255;
                    return t
                }();
                return t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128,
                    function(t) {
                        for (var e = [], n = 0; n < 256; ++n) e[n] = (n + 256).toString(16).substr(1);
                        var r = 0,
                            o = e;
                        return [o[t[r++]], o[t[r++]], o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], o[t[r++]], o[t[r++]], o[t[r++]], o[t[r++]]].join("")
                    }(t)
            }

            function Ni(t) {
                var e, n, r = t.builder,
                    o = t.createSender,
                    i = t.createDefaultConfig,
                    a = t.createConfigManager,
                    u = t.userConfigNormalizer,
                    c = t.initConfigNormalizer,
                    s = t.validateInitConfig,
                    f = {};
                mi.forEach((function(t) {
                    return f[t] = []
                }));
                var l = !1,
                    p = !1,
                    d = !1,
                    h = [],
                    v = [],
                    y = function() {
                        var t = !1,
                            e = {},
                            n = function(t) {
                                t.length && t.forEach((function(t) {
                                    try {
                                        t()
                                    } catch (e) {}
                                })), t.length = 0
                            },
                            r = function(t) {
                                e[t] && e[t].forEach((function(t) {
                                    n(t[1])
                                })), e[t] = void 0
                            };
                        return {
                            set: function(r, o, i) {
                                e[r] ? e[r].push([o, i]) : e[r] = [
                                    [o, i]
                                ], t && n(i)
                            },
                            has: function(t) {
                                return !!e[t]
                            },
                            remove: r,
                            removeByEvType: function(t) {
                                Object.keys(e).forEach((function(r) {
                                    e[r] && e[r].forEach((function(e) {
                                        e[0] === t && n(e[1])
                                    }))
                                }))
                            },
                            clear: function() {
                                t = !0, Object.keys(e).forEach((function(t) {
                                    r(t)
                                }))
                            }
                        }
                    }(),
                    m = {
                        getBuilder: function() {
                            return r
                        },
                        getSender: function() {
                            return e
                        },
                        getPreStartQueue: function() {
                            return h
                        },
                        init: function(t) {
                            if (l) ki("already inited");
                            else {
                                if (!(t && wi(t) && s(t))) throw new Error("invalid InitConfig, init failed");
                                var r = i(t);
                                if (!r) throw new Error("defaultConfig missing");
                                var u = c(t);
                                if ((n = a(r)).setConfig(u), n.onChange((function() {
                                        g("config")
                                    })), !(e = o(n.getConfig()))) throw new Error("sender missing");
                                l = !0, g("init", !0)
                            }
                        },
                        set: function(t) {
                            l && t && wi(t) && (g("beforeConfig", !1, t), null == n || n.setConfig(t))
                        },
                        config: function(t) {
                            if (l) return t && wi(t) && (g("beforeConfig", !1, t), null == n || n.setConfig(u(t))), null == n ? void 0 : n.getConfig()
                        },
                        provide: function(t, e) {
                            Si(v, t) ? ki("cannot provide " + t + ", reserved") : (m[t] = e, g("provide", !1, t))
                        },
                        start: function() {
                            var t = this;
                            l && (p || null == n || n.onReady((function() {
                                p = !0, g("start", !0), h.forEach((function(e) {
                                    return t.build(e)
                                })), h.length = 0
                            })))
                        },
                        report: function(t) {
                            if (t) {
                                var e = Li(f.beforeReport)(t);
                                if (e) {
                                    var n = Li(f.report)(e);
                                    n && (p ? this.build(n) : h.push(n))
                                }
                            }
                        },
                        build: function(t) {
                            if (p) {
                                var e = Li(f.beforeBuild)(t);
                                if (e) {
                                    var n = r.build(e);
                                    if (n) {
                                        var o = Li(f.build)(n);
                                        o && this.send(o)
                                    }
                                }
                            }
                        },
                        send: function(t) {
                            if (p) {
                                var n = Li(f.beforeSend)(t);
                                n && (e.send(n), g("send", !1, n))
                            }
                        },
                        destroy: function() {
                            y.clear(), d = !0, h.length = 0, g("beforeDestroy", !0)
                        },
                        on: function(t, e) {
                            if ("init" === t && l || "start" === t && p || "beforeDestroy" === t && d) try {
                                e()
                            } catch (n) {} else f[t] && f[t].push(e)
                        },
                        off: function(t, e) {
                            f[t] && (f[t] = ji(f[t], e))
                        },
                        destroyAgent: y
                    };
                return v = Object.keys(m), m;

                function g(t, e) {
                    void 0 === e && (e = !1);
                    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                    f[t].forEach((function(t) {
                        try {
                            t.apply(void 0, yi([], vi(n), !1))
                        } catch (e) {}
                    })), e && (f[t].length = 0)
                }
            }
            var Mi = function(t) {
                var e = function() {
                    var t = {},
                        e = {},
                        n = {
                            set: function(r, o) {
                                return t[r] = o, e[r] = Ii(o), n
                            },
                            merge: function(r) {
                                return t = hi(hi({}, t), r), Object.keys(r).forEach((function(t) {
                                    e[t] = Ii(r[t])
                                })), n
                            },
                            delete: function(r) {
                                return delete t[r], delete e[r], n
                            },
                            clear: function() {
                                return t = {}, e = {}, n
                            },
                            get: function(t) {
                                return e[t]
                            },
                            toString: function() {
                                return hi({}, e)
                            }
                        };
                    return n
                }();
                t.provide("context", e), t.on("report", (function(t) {
                    return t.extra || (t.extra = {}), t.extra.context = e.toString(), t
                }))
            };
            var Fi = function() {
                return Date.now()
            };
            var Bi = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var n = function(t) {
                        if (t) return t.__SLARDAR_REGISTRY__ || (t.__SLARDAR_REGISTRY__ = {
                            Slardar: {
                                plugins: [],
                                errors: [],
                                subject: {}
                            }
                        }), t.__SLARDAR_REGISTRY__.Slardar
                    }(function() {
                        if ("object" == typeof window && wi(window)) return window
                    }());
                    n && (n.errors || (n.errors = []), n.errors.push(t))
                },
                Ui = "custom",
                Gi = function(t) {
                    t.provide("sendEvent", (function(e) {
                        var n = function(t) {
                            if (t && wi(t) && t.name && Ei(t.name)) {
                                var e = {
                                    name: t.name,
                                    type: "event"
                                };
                                if ("metrics" in t && wi(t.metrics)) {
                                    var n = t.metrics,
                                        r = {};
                                    for (var o in n) Oi(n[o]) && (r[o] = n[o]);
                                    e.metrics = r
                                }
                                if ("categories" in t && wi(t.categories)) {
                                    var i = t.categories,
                                        a = {};
                                    for (var o in i) a[o] = Ii(i[o]);
                                    e.categories = a
                                }
                                return e
                            }
                        }(e);
                        n && t.report({
                            ev_type: Ui,
                            payload: n,
                            extra: {
                                timestamp: Fi()
                            }
                        })
                    })), t.provide("sendLog", (function(e) {
                        var n = function(t) {
                            if (t && wi(t) && t.content && Ei(t.content)) {
                                var e = {
                                    content: Ii(t.content),
                                    type: "log",
                                    level: "info"
                                };
                                if ("level" in t && (e.level = t.level), "extra" in t && wi(t.extra)) {
                                    var n = t.extra,
                                        r = {},
                                        o = {};
                                    for (var i in n) Oi(n[i]) ? r[i] = n[i] : o[i] = Ii(n[i]);
                                    e.metrics = r, e.categories = o
                                }
                                return e
                            }
                        }(e);
                        n && t.report({
                            ev_type: Ui,
                            payload: n,
                            extra: {
                                timestamp: Fi()
                            }
                        })
                    }))
                },
                Hi = function(t, e) {
                    var n = t.common || {};
                    return n.sample_rate = e, t.common = n, t
                },
                qi = function(t, e, n, r, o) {
                    return t ? (i = o(r, e), function() {
                        return i
                    }) : function() {
                        return n(e)
                    };
                    var i
                },
                zi = function(t, e, n, r) {
                    var o = function(t, e, n) {
                        for (var r, o = vi(e.split(".")), i = o[0], a = o.slice(1); t && a.length > 0;) t = t[i], i = (r = vi(a))[0], a = r.slice(1);
                        if (t) return n(t, i)
                    }(t, e, (function(t, e) {
                        return t[e]
                    }));
                    return void 0 !== o && function(t, e, n) {
                        switch (n) {
                            case "eq":
                                return Si(e, t);
                            case "neq":
                                return !Si(e, t);
                            case "gt":
                                return t > e[0];
                            case "gte":
                                return t >= e[0];
                            case "lt":
                                return t < e[0];
                            case "lte":
                                return t <= e[0];
                            case "regex":
                                return Boolean(t.match(new RegExp(e.join("|"))));
                            case "not_regex":
                                return !t.match(new RegExp(e.join("|")));
                            default:
                                return !1
                        }
                    }(o, function(t, e) {
                        return t.map((function(t) {
                            switch (e) {
                                case "number":
                                    return Number(t);
                                case "boolean":
                                    return "1" === t;
                                default:
                                    return String(t)
                            }
                        }))
                    }(r, "boolean" == typeof o ? "bool" : Oi(o) ? "number" : "string"), n)
                },
                Ji = function(t, e) {
                    try {
                        return "rule" === e.type ? zi(t, e.field, e.op, e.values) : "and" === e.type ? e.children.every((function(e) {
                            return Ji(t, e)
                        })) : e.children.some((function(e) {
                            return Ji(t, e)
                        }))
                    } catch (n) {
                        return Bi(n), !1
                    }
                },
                Vi = function(t, e, n, r, o) {
                    if (!e) return bi;
                    var i = e.sample_rate,
                        a = e.include_users,
                        u = e.sample_granularity,
                        c = e.rules,
                        s = e.r,
                        f = void 0 === s ? Math.random() : s;
                    if (Si(a, t)) return function(t) {
                        return Hi(t, 1)
                    };
                    var l = "session" === u,
                        p = qi(l, i, n, f, r),
                        d = function(t, e, n, r, o, i) {
                            var a = {};
                            return Object.keys(t).forEach((function(u) {
                                var c = t[u],
                                    s = c.enable,
                                    f = c.sample_rate,
                                    l = c.conditional_sample_rules;
                                s ? (a[u] = {
                                    enable: s,
                                    sample_rate: f,
                                    effectiveSampleRate: f * n,
                                    hit: qi(e, f, r, o, i)
                                }, l && (a[u].conditional_hit_rules = l.map((function(t) {
                                    var a = t.sample_rate,
                                        u = t.filter;
                                    return {
                                        sample_rate: a,
                                        hit: qi(e, a, r, o, i),
                                        effectiveSampleRate: a * n,
                                        filter: u
                                    }
                                })))) : a[u] = {
                                    enable: s,
                                    hit: function() {
                                        return !1
                                    },
                                    sample_rate: 0,
                                    effectiveSampleRate: 0
                                }
                            })), a
                        }(c, l, i, n, f, r);
                    return function(t) {
                        var e;
                        if (!p()) return l && o[0](), !1;
                        if (!(t.ev_type in d)) return Hi(t, i);
                        if (!d[t.ev_type].enable) return l && o[1](t.ev_type), !1;
                        if (null === (e = t.common) || void 0 === e ? void 0 : e.sample_rate) return t;
                        var n = d[t.ev_type],
                            r = n.conditional_hit_rules;
                        if (r)
                            for (var a = 0; a < r.length; a++)
                                if (Ji(t, r[a].filter)) return !!r[a].hit() && Hi(t, r[a].effectiveSampleRate);
                        return n.hit() ? Hi(t, n.effectiveSampleRate) : ((!r || !r.length) && l && o[1](t.ev_type), !1)
                    }
                },
                Wi = {
                    build: function(t) {
                        return {
                            ev_type: t.ev_type,
                            payload: t.payload,
                            common: hi(hi({}, t.extra || {}), t.overrides || {})
                        }
                    }
                },
                Yi = function(t) {
                    var e, n = t,
                        r = {},
                        o = gi,
                        i = gi;
                    return {
                        getConfig: function() {
                            return n
                        },
                        setConfig: function(a) {
                            var u;
                            return r = hi(hi({}, r), a || {}), (u = hi(hi({}, t), r)).sample = function(t, e) {
                                if (!t || !e) return t || e;
                                var n = hi(hi({}, t), e);
                                return n.include_users = yi(yi([], vi(t.include_users || []), !1), vi(e.include_users || []), !1), n.rules = yi(yi([], vi(Object.keys(t.rules || {})), !1), vi(Object.keys(e.rules || {})), !1).reduce((function(n, r) {
                                    var o, i;
                                    return r in n || (r in (t.rules || {}) && r in (e.rules || {}) ? (n[r] = hi(hi({}, t.rules[r]), e.rules[r]), n[r].conditional_sample_rules = yi(yi([], vi(t.rules[r].conditional_sample_rules || []), !1), vi(e.rules[r].conditional_sample_rules || []), !1)) : n[r] = (null === (o = t.rules) || void 0 === o ? void 0 : o[r]) || (null === (i = e.rules) || void 0 === i ? void 0 : i[r])), n
                                }), {}), n
                            }(t.sample, r.sample), n = u, i(), e || (e = a, o()), n
                        },
                        onChange: function(t) {
                            i = t
                        },
                        onReady: function(t) {
                            o = t, e && o()
                        }
                    }
                };
            var Xi = {
                sample_rate: 1,
                include_users: [],
                sample_granularity: "session",
                rules: {}
            };

            function Zi(t) {
                return hi({}, t)
            }

            function Qi(t) {
                return wi(t) && "bid" in t && "transport" in t
            }

            function $i(t) {
                return hi({}, t)
            }
            var ta = function(t) {
                    t.on("report", (function(e) {
                        return function(t, e) {
                            var n = {
                                url: "",
                                protocol: "",
                                domain: "",
                                path: "",
                                query: "",
                                timestamp: Date.now(),
                                sdk_version: e.version || "1.4.5",
                                sdk_name: e.name || "SDK_BASE"
                            };
                            return hi(hi({}, t), {
                                extra: hi(hi({}, n), t.extra || {})
                            })
                        }(e, t.config())
                    }))
                },
                ea = function(t) {
                    t.on("beforeBuild", (function(e) {
                        return function(t, e) {
                            var n = {};
                            return n.bid = e.bid, n.pid = e.pid, n.view_id = e.viewId, n.user_id = e.userId, n.device_id = e.deviceId, n.session_id = e.sessionId, n.release = e.release, n.env = e.env, hi(hi({}, t), {
                                extra: hi(hi({}, n), t.extra || {})
                            })
                        }(e, t.config())
                    }))
                };
            var na = function(t, e) {
                    return void 0 === e && (e = "/monitor_browser/collect/batch/"), (t && t.indexOf("//") >= 0 ? "" : "https://") + t + e
                },
                ra = function(t) {
                    return {
                        bid: "",
                        pid: "",
                        viewId: (e = "_", e + "_" + Date.now()),
                        userId: Ki(),
                        deviceId: Ki(),
                        sessionId: Ki(),
                        domain: "mon-va.byteoversea.com",
                        release: "",
                        env: "production",
                        sample: Xi,
                        plugins: {},
                        transport: {
                            get: gi,
                            post: gi
                        }
                    };
                    var e
                },
                oa = function(t) {
                    var e = void 0 === t ? {} : t,
                        n = e.createSender,
                        r = void 0 === n ? function(t) {
                            return function(t) {
                                return di(t)
                            }({
                                size: 20,
                                endpoint: na(t.domain),
                                transport: t.transport
                            })
                        } : n,
                        o = e.builder,
                        i = void 0 === o ? Wi : o,
                        a = e.createDefaultConfig,
                        u = Ni({
                            validateInitConfig: Qi,
                            initConfigNormalizer: Zi,
                            userConfigNormalizer: $i,
                            createSender: r,
                            builder: i,
                            createDefaultConfig: void 0 === a ? ra : a,
                            createConfigManager: Yi
                        });
                    return Mi(u), ea(u), ta(u),
                        function(t, e) {
                            t.on("init", (function() {
                                var n = [],
                                    r = function(r) {
                                        r.forEach((function(r) {
                                            var o = r.name;
                                            Si(n, o) || (n.push(o), r.setup(t), e && e(o, r.setup), t.destroyAgent.set(o, o, [function() {
                                                n = ji(n, o), r.tearDown && r.tearDown()
                                            }]))
                                        }))
                                    };
                                t.provide("applyIntegrations", r);
                                var o = t.config();
                                o && o.integrations && r(o.integrations)
                            }))
                        }(u), u
                },
                ia = function(t) {
                    void 0 === t && (t = {});
                    var e = oa(t);
                    return function(t) {
                        t.on("start", (function() {
                            var e = t.config(),
                                n = e.userId,
                                r = e.sample,
                                o = Vi(n, r, Ci, Di, [function() {
                                    t.destroy()
                                }, function(e) {
                                    t.destroyAgent.removeByEvType(e)
                                }]);
                            t.on("build", o)
                        }))
                    }(e), Gi(e), e
                };
            ia();
            var aa, ua = "sg",
                ca = { in: "https://sgali-mcs.byteoversea.com",
                    sg: "https://sgali-mcs.byteoversea.com",
                    va: "https://maliva-mcs.byteoversea.com",
                    tcpy: "https://mcs-sg.tiktok.com",
                    tcpy_in: "https://mcs-va-useast2a.tiktokv.com",
                    ttp: "https://mcs.tiktokw.us",
                    ttp2: "https://mcs.tiktokw.us"
                },
                sa = "s_v_web_id",
                fa = "/vc/setting",
                la = function(t) {
                    return -1 !== ["ttp", "tcpy"].indexOf(t) ? "/v1/list" : "/list"
                },
                pa = function(t) {
                    return -1 !== ["ttp", "tcpy"].indexOf(t) ? "/v1/user/webid" : "/webid"
                };
            ! function(t) {
                t[t.TIKTOK_NATIVE = 1180] = "TIKTOK_NATIVE", t[t.MUSICALLY_NATIVE = 1233] = "MUSICALLY_NATIVE", t[t.TIKTOK_LOGIN_WEB = 1459] = "TIKTOK_LOGIN_WEB", t[t.TIKTOK_LITE = 1340] = "TIKTOK_LITE", t[t.TIKTOK_MUSIC = 310024] = "TIKTOK_MUSIC", t[t.TIKTOK_OPEN_PLATFORM = 2471] = "TIKTOK_OPEN_PLATFORM", t[t.TIKTOK_LIVE_BACKSTAGE = 6849] = "TIKTOK_LIVE_BACKSTAGE", t[t.TIKTOK_SAFETY_ENFORCEMENT_TOOL = 326738] = "TIKTOK_SAFETY_ENFORCEMENT_TOOL", t[t.TIKTOK_ADS = 1583] = "TIKTOK_ADS", t[t.TIKTOK_SELLER_APP = 7743] = "TIKTOK_SELLER_APP", t[t.TIKTOK_MAGELLAN = 4068] = "TIKTOK_MAGELLAN", t[t.TIKTOK_MAGELLAN2 = 6556] = "TIKTOK_MAGELLAN2", t[t.TIKTOK_WEB = 1988] = "TIKTOK_WEB", t[t.TIKTOK_BIZ_CENTER = 2239] = "TIKTOK_BIZ_CENTER"
            }(aa || (aa = {}));
            var da = function(t) {
                    return {
                        aid: t.commonOptions.aid
                    }
                },
                ha = function() {
                    function t() {
                        this.isInit = !1, this.pid = "0", this.filename = ""
                    }
                    return t.prototype.init = function(t, e) {
                        if (!this.isInit) {
                            this.isInit = !0, this.pid = String(t.aid), this.browserSlardar = ia();
                            var n = {
                                transport: {
                                    get: function() {},
                                    post: function(t) {
                                        var n = t.url,
                                            r = t.data;
                                        e(n, JSON.parse(r))
                                    }
                                },
                                bid: "verify_center_va",
                                pid: this.pid,
                                release: "3.8.21-alpha.2",
                                env: ua,
                                sample: {
                                    sample_rate: 1,
                                    include_users: [],
                                    sample_granularity: "session",
                                    rules: {
                                        pageview: {
                                            enable: !0,
                                            sample_rate: .01
                                        },
                                        js_error: {
                                            enable: !0,
                                            sample_rate: 1
                                        },
                                        resource_error: {
                                            enable: !0,
                                            sample_rate: .01
                                        },
                                        http: {
                                            enable: !0,
                                            sample_rate: .01
                                        },
                                        resource: {
                                            enable: !0,
                                            sample_rate: .01
                                        }
                                    }
                                }
                            };
                            this.browserSlardar.init(n), this.browserSlardar.context.merge({
                                belong: "hotsdk"
                            })
                        }
                    }, t.prototype.start = function() {
                        var t = this;
                        this.browserSlardar.start(), this.reportPageview(), window.addEventListener("error", (function(e) {
                            var n, r;
                            "ErrorEvent" === (r = e, Object.prototype.toString.call(r).slice(8, -1)) && t.filename && e.filename === t.filename && t.reportJsError({
                                message: null == e ? void 0 : e.message,
                                stack: null === (n = null == e ? void 0 : e.error) || void 0 === n ? void 0 : n.stack,
                                filename: null == e ? void 0 : e.filename
                            })
                        }), !0)
                    }, t.prototype.destroy = function() {
                        this.browserSlardar.destroy()
                    }, t.prototype.reportPageview = function() {
                        this.browserSlardar.report({
                            ev_type: "pageview",
                            payload: {
                                pid: this.pid,
                                source: "init"
                            }
                        })
                    }, t.prototype.reportJsError = function(t) {
                        this.browserSlardar.report({
                            ev_type: "js_error",
                            payload: {
                                error: {
                                    name: "JS ERROR",
                                    message: t.message,
                                    stack: t.stack,
                                    filename: t.filename || this.filename
                                },
                                breadcrumbs: []
                            }
                        })
                    }, t.prototype.reportHttp = function(t) {
                        this.browserSlardar.report({
                            ev_type: "http",
                            payload: {
                                api: "xhr",
                                request: {
                                    method: t.method,
                                    url: t.url
                                },
                                response: {
                                    status: t.status,
                                    is_custom_error: !1,
                                    timestamp: Date.now()
                                },
                                duration: t.duration
                            }
                        })
                    }, t.prototype.reportResourceError = function(t) {
                        this.browserSlardar.report({
                            ev_type: "resource_error",
                            payload: {
                                type: "script",
                                url: t
                            }
                        })
                    }, t.prototype.reportResource = function(t) {
                        this.browserSlardar.report({
                            ev_type: "resource",
                            payload: {
                                entryType: "resource",
                                name: t.url,
                                duration: t.duration,
                                startTime: t.startTime
                            }
                        })
                    }, t.prototype.setFileName = function(t) {
                        this.filename = t
                    }, t
                }(),
                va = new ha,
                ya = function(t) {
                    var e = t.url,
                        n = t.method,
                        r = t.data,
                        o = t.config;
                    return new pi((function(i, a) {
                        var u = new XMLHttpRequest,
                            c = Date.now(),
                            s = function() {
                                -1 !== t.url.indexOf(fa) && va.reportHttp({
                                    url: e,
                                    method: n,
                                    duration: Date.now() - c,
                                    status: u.status
                                })
                            };
                        u.onreadystatechange = function() {
                            if (u.readyState === u.DONE) {
                                if (u.status >= 200 && u.status < 300) {
                                    var t = {},
                                        e = u.response || u.responseText,
                                        n = u.getResponseHeader("Content-Type") || u.getResponseHeader("content-type");
                                    if (n && -1 !== n.indexOf("application/json")) try {
                                        t = JSON.parse(e)
                                    } catch (r) {} else t = e;
                                    setTimeout((function() {
                                        i(t)
                                    }), 0)
                                } else a(new TypeError("Network request failed, status: " + u.status));
                                s()
                            }
                        }, u.onerror = function() {
                            setTimeout((function() {
                                a(new TypeError("Network request failed, occur error"))
                            }), 0), s()
                        }, u.ontimeout = function() {
                            setTimeout((function() {
                                a(new TypeError("Network request failed, timeout"))
                            }), 0), s()
                        }, u.onabort = function() {
                            setTimeout((function() {
                                a(new DOMException("Aborted", "AbortError"))
                            }), 0), s()
                        };
                        var f = e;
                        if ((null == o ? void 0 : o.params) && (f = f + "?" + function(t) {
                                for (var e = Object.keys(t), n = "", r = 0; r < e.length; r++) {
                                    var o = e[r],
                                        i = t[o],
                                        a = encodeURIComponent(o) + "=" + encodeURIComponent(i);
                                    n = r >= 1 ? n + "&" + a : a
                                }
                                return n
                            }(o.params)), u.open(n, f, !0), (null == o ? void 0 : o.timeout) && "number" == typeof o.timeout ? u.timeout = o.timeout : u.timeout = 5e3, null == o ? void 0 : o.headers)
                            for (var l = o.headers, p = 0, d = Object.keys(l); p < d.length; p++) {
                                var h = d[p];
                                u.setRequestHeader(h, l[h])
                            }(null == o ? void 0 : o.withCredentials) && (u.withCredentials = o.withCredentials), "POST" === n.toUpperCase() && r ? u.send(JSON.stringify(r)) : u.send(null)
                    }))
                },
                ma = function(t, e, n) {
                    void 0 === n && (n = {});
                    var o = n.headers ? r({
                        "Content-Type": "application/json"
                    }, n.headers) : {
                        "Content-Type": "application/json"
                    };
                    return ya({
                        url: t,
                        method: "POST",
                        data: e,
                        config: r(r({}, n), {
                            headers: o
                        })
                    })
                },
                ga = i((function(t, e) {
                    var n;
                    n = function() {
                        function t() {
                            for (var t = 0, e = {}; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) e[r] = n[r]
                            }
                            return e
                        }

                        function e(t) {
                            return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                        }
                        return function n(r) {
                            function o() {}

                            function i(e, n, i) {
                                if ("undefined" != typeof document) {
                                    "number" == typeof(i = t({
                                        path: "/"
                                    }, o.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : "";
                                    try {
                                        var a = JSON.stringify(n);
                                        /^[\{\[]/.test(a) && (n = a)
                                    } catch (s) {}
                                    n = r.write ? r.write(n, e) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                                    var u = "";
                                    for (var c in i) i[c] && (u += "; " + c, !0 !== i[c] && (u += "=" + i[c].split(";")[0]));
                                    return document.cookie = e + "=" + n + u
                                }
                            }

                            function a(t, n) {
                                if ("undefined" != typeof document) {
                                    for (var o = {}, i = document.cookie ? document.cookie.split("; ") : [], a = 0; a < i.length; a++) {
                                        var u = i[a].split("="),
                                            c = u.slice(1).join("=");
                                        n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                                        try {
                                            var s = e(u[0]);
                                            if (c = (r.read || r)(c, s) || e(c), n) try {
                                                c = JSON.parse(c)
                                            } catch (f) {}
                                            if (o[s] = c, t === s) break
                                        } catch (f) {}
                                    }
                                    return t ? o[t] : o
                                }
                            }
                            return o.set = i, o.get = function(t) {
                                return a(t, !1)
                            }, o.getJSON = function(t) {
                                return a(t, !0)
                            }, o.remove = function(e, n) {
                                i(e, "", t(n, {
                                    expires: -1
                                }))
                            }, o.defaults = {}, o.withConverter = n, o
                        }((function() {}))
                    }, t.exports = n()
                }));

            function ba(t) {
                t = "object" == typeof t ? t : {};
                var e = function() {
                        var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                            e = t.length,
                            n = Date.now().toString(36),
                            r = [];
                        r[8] = r[13] = r[18] = r[23] = "_", r[14] = "4";
                        for (var o = 0, i = void 0; o < 36; o++) r[o] || (i = 0 | Math.random() * e, r[o] = t[19 == o ? 3 & i | 8 : i]);
                        return "verify_" + n + "_" + r.join("")
                    }(),
                    n = {
                        path: "/"
                    };
                return t.domain && /^([a-z0-9-]+)?(\.[a-z0-9-]+)+$/.test(t.domain) && (n.domain = t.domain), ga.set(sa, e, n), e
            }
            var wa = function(t) {
                    void 0 === t && (t = {});
                    var e = function(t) {
                        void 0 === t && (t = {});
                        var e = ga.get(sa);
                        return e && 0 === e.indexOf("verify_") || (e = ba(t)), e
                    }(t);
                    return e
                },
                _a = function(t, e) {
                    return ma("" + (t || "https://vcs-sg.tiktokv.com") + fa + "?aid=" + (null == e ? void 0 : e.aid), {}, {
                        headers: {
                            "X-Setting-Flag": 1
                        }
                    })
                },
                Ta = function() {
                    function t() {
                        this.fetchWebId = null, this.channelType = "", this.isInit = !1, this.conf = {
                            app_id: 0,
                            evtParams: {}
                        }
                    }
                    return t.prototype.init = function(t, e) {
                        var n;
                        (void 0 === e && (e = {}), this.isInit) || (this.isInit = !0, this.conf.app_id = "cn" === t.region ? 2018 : 2740, this.conf.evtParams = r(r({}, e), {
                            webdriver: "undefined",
                            isScheduling: "false",
                            product_host: window.location.host,
                            product_path: window.location.hostname,
                            type: 2,
                            aid: t.aid
                        }), n = t.aid, Object.values(aa).filter((function(t) {
                            return "number" == typeof t
                        })).includes(n) ? this.channelType = "tcpy" : this.channelType = ua)
                    }, t.prototype.getTeaWebId = function() {
                        return this.fetchWebId || (this.fetchWebId = function(t, e) {
                            var n = ca[e],
                                r = pa(e);
                            return ma("" + n + r, {
                                app_id: t,
                                referer: document.referrer,
                                url: window.location.href,
                                user_agent: window.navigator.userAgent,
                                user_unique_id: ""
                            }).then((function(t) {
                                return t.web_id
                            }))
                        }(this.conf.app_id, this.channelType)), this.fetchWebId
                    }, t.prototype.trackEvent = function(t, e) {
                        var n = this;
                        void 0 === e && (e = {}), this.getTeaWebId().then((function(o) {
                            var i = [{
                                events: [{
                                    event: "turing_verify_sdk",
                                    is_bav: 0,
                                    local_time_ms: Date.now(),
                                    params: JSON.stringify(r(r(r({}, n.conf.evtParams), e), {
                                        key: "h5_" + t,
                                        time: Date.now()
                                    }))
                                }],
                                local_time: Math.floor(Date.now() / 1e3),
                                header: {
                                    app_id: n.conf.app_id,
                                    referrer: document.referrer,
                                    platform: "web",
                                    sdk_lib: "js",
                                    sdk_version: "0.0.0"
                                },
                                user: {
                                    user_unique_id: o,
                                    web_id: o
                                }
                            }];
                            n.sendEvents(i)
                        })).catch((function(t) {
                            console.log("err: ", t)
                        }))
                    }, t.prototype.sendEvents = function(t) {
                        (function(t, e) {
                            var n = ca[e],
                                r = la(e);
                            return ma("" + n + r, t)
                        })(t, this.channelType).catch((function(t) {
                            console.log("report err: ", t)
                        }))
                    }, t
                }(),
                Oa = new Ta,
                Ea = {
                    back_up_js_v2: {
                        sg: []
                    },
                    js_v2: {
                        sg: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/bric-captcha-ttweb/core-captcha/sg/2.32.1/1.0.0.162/captcha.js"
                    }
                },
                Sa = {},
                ja = {
                    executor: "Function",
                    static_domain: "",
                    settingHost: ""
                },
                Ia = {
                    aid: 1e5
                },
                Aa = function(t, e, n, r) {
                    va.setFileName(t);
                    var o, i = Date.now(),
                        a = pi.resolve({});
                    return a = "script" === e ? (o = t, new pi((function(t, e) {
                        var n = document.getElementsByTagName("head")[0],
                            r = document.createElement("script");
                        r.setAttribute("crossorigin", "anonymous"), r.setAttribute("src", o), n.appendChild(r);
                        var i = setTimeout((function() {
                            e(new Error("LoadJSSDKMoreTan4000ms"))
                        }), 4e3);
                        r.onload = function() {
                            clearTimeout(i), t(0)
                        }, r.onerror = function() {
                            clearTimeout(i), e(new Error("Failed to load SDK!"))
                        }
                    }))).then((function() {
                        return window.verifySDK
                    })) : function(t, e) {
                        return void 0 === e && (e = {}), ya({
                            url: t,
                            method: "GET",
                            config: e
                        })
                    }(t, {
                        timeout: 2e4
                    }).then((function(t) {
                        if (n && r && n !== r) {
                            var e = new RegExp(n, "g");
                            t = t.replace(e, r)
                        }
                        var o = function(t) {
                            var e = {
                                    exports: {}
                                },
                                n = new Function("exports", "module", t);
                            try {
                                n(e.exports, e)
                            } catch (r) {
                                va.reportJsError({
                                    message: null == r ? void 0 : r.message,
                                    stack: null == r ? void 0 : r.stack,
                                    filename: null == r ? void 0 : r.filename
                                })
                            }
                            return e
                        }(t);
                        return o.exports
                    })), a.then((function(e) {
                        return va.reportResource({
                            url: t,
                            startTime: Date.now(),
                            duration: Date.now() - i
                        }), e
                    })).catch((function(e) {
                        return va.reportResourceError(t), pi.reject(e)
                    }))
                },
                xa = function() {
                    function t() {}
                    return t.get = function(e) {
                        return 0 !== t.status && 3 !== t.status || (t.status = 1, t.core = function(t) {
                            var e = Date.now();
                            return _a(ja.settingHost, t).catch((function() {
                                return _a(ja.settingHost, t)
                            })).then((function(t) {
                                var n, r;
                                return Oa.trackEvent("hotsdk_getsetting", {
                                    is_success: 1,
                                    duration: Date.now() - e,
                                    message: ""
                                }), (null === (r = null === (n = null == t ? void 0 : t.verify) || void 0 === n ? void 0 : n.js_v2) || void 0 === r ? void 0 : r[ua]) ? t.verify : Ea
                            })).catch((function(t) {
                                return Oa.trackEvent("hotsdk_getsetting", {
                                    is_success: 0,
                                    duration: Date.now() - e,
                                    message: null == t ? void 0 : t.message
                                }), Ea
                            }))
                        }(e).then((function(e) {
                            var n, r, o, i = null === (n = e.js_v2) || void 0 === n ? void 0 : n[ua],
                                a = (null === (r = e.back_up_js_v2) || void 0 === r ? void 0 : r[ua]) || [],
                                u = null === (o = i.match(/\/\/([\w-]+(\.[\w-]+)+)/)) || void 0 === o ? void 0 : o[1];
                            ja.static_domain = "";
                            var c = [i].concat(a);
                            return new pi((function(e, n) {
                                var r = function() {
                                    var o, i = c.shift(),
                                        a = null === (o = i.match(/\/\/([\w-]+(\.[\w-]+)+)/)) || void 0 === o ? void 0 : o[1];
                                    Aa(i, ja.executor, u, a).then((function(n) {
                                        e(n), t.status = 2, Oa.trackEvent("hotsdk_loadscript", {
                                            is_success: 1
                                        })
                                    })).catch((function(e) {
                                        c.length ? r() : (n(e), t.status = 3, Oa.trackEvent("hotsdk_loadscript", {
                                            is_success: 0
                                        }))
                                    }))
                                };
                                r()
                            }))
                        })).catch((function(t) {
                            return pi.reject(t)
                        }))), t.core
                    }, t.status = 0, t
                }(),
                Pa = function(t) {
                    t.static_domain && (ja.static_domain = t.static_domain), t.settingHost && (ja.settingHost = t.settingHost), t.executor && (ja.executor = t.executor)
                },
                Ra = function(t, e, n) {
                    void 0 === e && (e = function() {}), void 0 === n && (n = function() {});
                    var o = da(t);
                    Object.assign(Ia, o), Oa.init(r(r({}, o), {
                        region: ua
                    })), va.init(o, ma), va.start(), xa.get(o).then((function(n) {
                        var o;
                        Object.assign(Sa, r(r({}, t), {
                            captchaOptions: r(r({}, t.captchaOptions), {
                                h5_check_version: (null === (o = t.captchaOptions) || void 0 === o ? void 0 : o.closeDecisionCheck) ? "0.0.0" : "3.8.21-alpha.2"
                            })
                        })), null == n || n.initVerifyOptions(Sa), e(n)
                    })).catch((function(t) {
                        var e;
                        n({
                            type: "loadJSSDK",
                            msg: null !== (e = null == t ? void 0 : t.message) && void 0 !== e ? e : ""
                        })
                    }))
                },
                ka = function(t) {
                    xa.get(Ia).then((function(e) {
                        null == e || e.autoRender(t)
                    })).catch((function(t) {
                        console.log("err: ", t)
                    }))
                },
                Ca = function() {
                    xa.get(Ia).then((function(t) {
                        null == t || t.closeCaptcha()
                    }))
                },
                Da = function() {
                    var t, e, n = (null === (t = null == Sa ? void 0 : Sa.captchaOptions) || void 0 === t ? void 0 : t.fp) || ga.get(sa) || "" || wa(null === (e = null == Sa ? void 0 : Sa.captchaOptions) || void 0 === e ? void 0 : e.fpCookieOption);
                    return pi.resolve(n)
                },
                La = function() {
                    function t() {}
                    return t.config = function(t) {
                        Pa(t)
                    }, t.init = function(t, e, n) {
                        var o = da(t);
                        return Oa.init(r(r({}, o), {
                            region: ua
                        })), va.init(o, ma), va.start(), xa.get(o).then((function(n) {
                            var o;
                            Object.assign(Sa, r(r({}, t), {
                                captchaOptions: r(r({}, t.captchaOptions), {
                                    h5_check_version: (null === (o = t.captchaOptions) || void 0 === o ? void 0 : o.closeDecisionCheck) ? "0.0.0" : "3.8.21-alpha.2"
                                })
                            }));
                            var i = n.initVerifyCenter(Sa);
                            if (!e) return i;
                            e(i)
                        })).catch((function(t) {
                            if (!n) return pi.reject(t);
                            n(t)
                        }))
                    }, t
                }(),
                Ka = function(t) {
                    var e = {
                        code: "10000",
                        from: "",
                        type: "verify",
                        version: "1",
                        region: ua,
                        subtype: "",
                        verify_event: "",
                        fp: "",
                        detail: ""
                    };
                    return e.subtype = 3059 === t ? "text" : 3060 === t ? "3d" : 99996 === t ? "whirl" : "slide", JSON.stringify(e)
                }
        },
        76595: (t, e, n) => {
            n.r(e), n.d(e, {
                TTVerifyCenter: () => La,
                close: () => Ca,
                config: () => Pa,
                getFp: () => Da,
                init: () => Ra,
                render: () => ka,
                transform: () => Ka
            });
            var r = function() {
                return r = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }, r.apply(this, arguments)
            };
            "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
                value: function(t, e) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    for (var n = Object(t), r = 1; r < arguments.length; r++) {
                        var o = arguments[r];
                        if (null != o)
                            for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
                    }
                    return n
                },
                writable: !0,
                configurable: !0
            });
            var o = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {};

            function i(t, e, n) {
                return t(n = {
                    path: e,
                    exports: {},
                    require: function(t, e) {
                        return function() {
                            throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                        }(null == e && n.path)
                    }
                }, n.exports), n.exports
            }
            var a, u, c = function(t) {
                    return t && t.Math == Math && t
                },
                s = c("object" == typeof globalThis && globalThis) || c("object" == typeof window && window) || c("object" == typeof self && self) || c("object" == typeof o && o) || function() {
                    return this
                }() || Function("return this")(),
                f = Function.prototype,
                l = f.apply,
                p = f.bind,
                d = f.call,
                h = "object" == typeof Reflect && Reflect.apply || (p ? d.bind(l) : function() {
                    return d.apply(l, arguments)
                }),
                v = Function.prototype,
                y = v.bind,
                m = v.call,
                g = y && y.bind(m),
                b = y ? function(t) {
                    return t && g(m, t)
                } : function(t) {
                    return t && function() {
                        return m.apply(t, arguments)
                    }
                },
                w = function(t) {
                    return "function" == typeof t
                },
                _ = function(t) {
                    try {
                        return !!t()
                    } catch (Pi) {
                        return !0
                    }
                },
                T = !_((function() {
                    return 7 != Object.defineProperty({}, 1, {
                        get: function() {
                            return 7
                        }
                    })[1]
                })),
                O = Function.prototype.call,
                E = O.bind ? O.bind(O) : function() {
                    return O.apply(O, arguments)
                },
                S = {}.propertyIsEnumerable,
                j = Object.getOwnPropertyDescriptor,
                I = {
                    f: j && !S.call({
                        1: 2
                    }, 1) ? function(t) {
                        var e = j(this, t);
                        return !!e && e.enumerable
                    } : S
                },
                A = function(t, e) {
                    return {
                        enumerable: !(1 & t),
                        configurable: !(2 & t),
                        writable: !(4 & t),
                        value: e
                    }
                },
                x = b({}.toString),
                P = b("".slice),
                R = function(t) {
                    return P(x(t), 8, -1)
                },
                k = s.Object,
                C = b("".split),
                D = _((function() {
                    return !k("z").propertyIsEnumerable(0)
                })) ? function(t) {
                    return "String" == R(t) ? C(t, "") : k(t)
                } : k,
                L = s.TypeError,
                K = function(t) {
                    if (null == t) throw L("Can't call method on " + t);
                    return t
                },
                N = function(t) {
                    return D(K(t))
                },
                M = function(t) {
                    return "object" == typeof t ? null !== t : w(t)
                },
                F = {},
                B = function(t) {
                    return w(t) ? t : void 0
                },
                U = function(t, e) {
                    return arguments.length < 2 ? B(F[t]) || B(s[t]) : F[t] && F[t][e] || s[t] && s[t][e]
                },
                G = b({}.isPrototypeOf),
                H = U("navigator", "userAgent") || "",
                q = s.process,
                z = s.Deno,
                J = q && q.versions || z && z.version,
                V = J && J.v8;
            V && (u = (a = V.split("."))[0] > 0 && a[0] < 4 ? 1 : +(a[0] + a[1])), !u && H && (!(a = H.match(/Edge\/(\d+)/)) || a[1] >= 74) && (a = H.match(/Chrome\/(\d+)/)) && (u = +a[1]);
            var W, Y = u,
                X = !!Object.getOwnPropertySymbols && !_((function() {
                    var t = Symbol();
                    return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && Y && Y < 41
                })),
                Z = X && !Symbol.sham && "symbol" == typeof Symbol.iterator,
                Q = s.Object,
                $ = Z ? function(t) {
                    return "symbol" == typeof t
                } : function(t) {
                    var e = U("Symbol");
                    return w(e) && G(e.prototype, Q(t))
                },
                tt = s.String,
                et = function(t) {
                    try {
                        return tt(t)
                    } catch (Pi) {
                        return "Object"
                    }
                },
                nt = s.TypeError,
                rt = function(t) {
                    if (w(t)) return t;
                    throw nt(et(t) + " is not a function")
                },
                ot = function(t, e) {
                    var n = t[e];
                    return null == n ? void 0 : rt(n)
                },
                it = s.TypeError,
                at = Object.defineProperty,
                ut = "__core-js_shared__",
                ct = s[ut] || function(t, e) {
                    try {
                        at(s, t, {
                            value: e,
                            configurable: !0,
                            writable: !0
                        })
                    } catch (Pi) {
                        s[t] = e
                    }
                    return e
                }(ut, {}),
                st = i((function(t) {
                    (t.exports = function(t, e) {
                        return ct[t] || (ct[t] = void 0 !== e ? e : {})
                    })("versions", []).push({
                        version: "3.20.1",
                        mode: "pure",
                        copyright: "\xa9 2021 Denis Pushkarev (zloirock.ru)"
                    })
                })),
                ft = s.Object,
                lt = function(t) {
                    return ft(K(t))
                },
                pt = b({}.hasOwnProperty),
                dt = Object.hasOwn || function(t, e) {
                    return pt(lt(t), e)
                },
                ht = 0,
                vt = Math.random(),
                yt = b(1..toString),
                mt = function(t) {
                    return "Symbol(" + (void 0 === t ? "" : t) + ")_" + yt(++ht + vt, 36)
                },
                gt = st("wks"),
                bt = s.Symbol,
                wt = bt && bt.for,
                _t = Z ? bt : bt && bt.withoutSetter || mt,
                Tt = function(t) {
                    if (!dt(gt, t) || !X && "string" != typeof gt[t]) {
                        var e = "Symbol." + t;
                        X && dt(bt, t) ? gt[t] = bt[t] : gt[t] = Z && wt ? wt(e) : _t(e)
                    }
                    return gt[t]
                },
                Ot = s.TypeError,
                Et = Tt("toPrimitive"),
                St = function(t, e) {
                    if (!M(t) || $(t)) return t;
                    var n, r = ot(t, Et);
                    if (r) {
                        if (void 0 === e && (e = "default"), n = E(r, t, e), !M(n) || $(n)) return n;
                        throw Ot("Can't convert object to primitive value")
                    }
                    return void 0 === e && (e = "number"),
                        function(t, e) {
                            var n, r;
                            if ("string" === e && w(n = t.toString) && !M(r = E(n, t))) return r;
                            if (w(n = t.valueOf) && !M(r = E(n, t))) return r;
                            if ("string" !== e && w(n = t.toString) && !M(r = E(n, t))) return r;
                            throw it("Can't convert object to primitive value")
                        }(t, e)
                },
                jt = function(t) {
                    var e = St(t, "string");
                    return $(e) ? e : e + ""
                },
                It = s.document,
                At = M(It) && M(It.createElement),
                xt = function(t) {
                    return At ? It.createElement(t) : {}
                },
                Pt = !T && !_((function() {
                    return 7 != Object.defineProperty(xt("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                })),
                Rt = Object.getOwnPropertyDescriptor,
                kt = {
                    f: T ? Rt : function(t, e) {
                        if (t = N(t), e = jt(e), Pt) try {
                            return Rt(t, e)
                        } catch (Pi) {}
                        if (dt(t, e)) return A(!E(I.f, t, e), t[e])
                    }
                },
                Ct = /#|\.prototype\./,
                Dt = function(t, e) {
                    var n = Kt[Lt(t)];
                    return n == Mt || n != Nt && (w(e) ? _(e) : !!e)
                },
                Lt = Dt.normalize = function(t) {
                    return String(t).replace(Ct, ".").toLowerCase()
                },
                Kt = Dt.data = {},
                Nt = Dt.NATIVE = "N",
                Mt = Dt.POLYFILL = "P",
                Ft = Dt,
                Bt = b(b.bind),
                Ut = function(t, e) {
                    return rt(t), void 0 === e ? t : Bt ? Bt(t, e) : function() {
                        return t.apply(e, arguments)
                    }
                },
                Gt = s.String,
                Ht = s.TypeError,
                qt = function(t) {
                    if (M(t)) return t;
                    throw Ht(Gt(t) + " is not an object")
                },
                zt = s.TypeError,
                Jt = Object.defineProperty,
                Vt = {
                    f: T ? Jt : function(t, e, n) {
                        if (qt(t), e = jt(e), qt(n), Pt) try {
                            return Jt(t, e, n)
                        } catch (Pi) {}
                        if ("get" in n || "set" in n) throw zt("Accessors not supported");
                        return "value" in n && (t[e] = n.value), t
                    }
                },
                Wt = T ? function(t, e, n) {
                    return Vt.f(t, e, A(1, n))
                } : function(t, e, n) {
                    return t[e] = n, t
                },
                Yt = kt.f,
                Xt = function(t) {
                    var e = function(n, r, o) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(n);
                                case 2:
                                    return new t(n, r)
                            }
                            return new t(n, r, o)
                        }
                        return h(t, this, arguments)
                    };
                    return e.prototype = t.prototype, e
                },
                Zt = function(t, e) {
                    var n, r, o, i, a, u, c, f, l = t.target,
                        p = t.global,
                        d = t.stat,
                        h = t.proto,
                        v = p ? s : d ? s[l] : (s[l] || {}).prototype,
                        y = p ? F : F[l] || Wt(F, l, {})[l],
                        m = y.prototype;
                    for (o in e) n = !Ft(p ? o : l + (d ? "." : "#") + o, t.forced) && v && dt(v, o), a = y[o], n && (u = t.noTargetGet ? (f = Yt(v, o)) && f.value : v[o]), i = n && u ? u : e[o], n && typeof a == typeof i || (c = t.bind && n ? Ut(i, s) : t.wrap && n ? Xt(i) : h && w(i) ? b(i) : i, (t.sham || i && i.sham || a && a.sham) && Wt(c, "sham", !0), Wt(y, o, c), h && (dt(F, r = l + "Prototype") || Wt(F, r, {}), Wt(F[r], o, i), t.real && m && !m[o] && Wt(m, o, i)))
                },
                Qt = st("keys"),
                $t = function(t) {
                    return Qt[t] || (Qt[t] = mt(t))
                },
                te = !_((function() {
                    function t() {}
                    return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
                })),
                ee = $t("IE_PROTO"),
                ne = s.Object,
                re = ne.prototype,
                oe = te ? ne.getPrototypeOf : function(t) {
                    var e = lt(t);
                    if (dt(e, ee)) return e[ee];
                    var n = e.constructor;
                    return w(n) && e instanceof n ? n.prototype : e instanceof ne ? re : null
                },
                ie = s.String,
                ae = s.TypeError,
                ue = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                    var t, e = !1,
                        n = {};
                    try {
                        (t = b(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(n, []), e = n instanceof Array
                    } catch (Pi) {}
                    return function(n, r) {
                        return qt(n),
                            function(t) {
                                if ("object" == typeof t || w(t)) return t;
                                throw ae("Can't set " + ie(t) + " as a prototype")
                            }(r), e ? t(n, r) : n.__proto__ = r, n
                    }
                }() : void 0),
                ce = Math.ceil,
                se = Math.floor,
                fe = function(t) {
                    var e = +t;
                    return e != e || 0 === e ? 0 : (e > 0 ? se : ce)(e)
                },
                le = Math.max,
                pe = Math.min,
                de = Math.min,
                he = function(t) {
                    return (e = t.length) > 0 ? de(fe(e), 9007199254740991) : 0;
                    var e
                },
                ve = function(t) {
                    return function(e, n, r) {
                        var o, i = N(e),
                            a = he(i),
                            u = function(t, e) {
                                var n = fe(t);
                                return n < 0 ? le(n + e, 0) : pe(n, e)
                            }(r, a);
                        if (t && n != n) {
                            for (; a > u;)
                                if ((o = i[u++]) != o) return !0
                        } else
                            for (; a > u; u++)
                                if ((t || u in i) && i[u] === n) return t || u || 0;
                        return !t && -1
                    }
                },
                ye = {
                    includes: ve(!0),
                    indexOf: ve(!1)
                },
                me = {},
                ge = ye.indexOf,
                be = b([].push),
                we = function(t, e) {
                    var n, r = N(t),
                        o = 0,
                        i = [];
                    for (n in r) !dt(me, n) && dt(r, n) && be(i, n);
                    for (; e.length > o;) dt(r, n = e[o++]) && (~ge(i, n) || be(i, n));
                    return i
                },
                _e = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                Te = _e.concat("length", "prototype"),
                Oe = {
                    f: Object.getOwnPropertyNames || function(t) {
                        return we(t, Te)
                    }
                },
                Ee = {
                    f: Object.getOwnPropertySymbols
                },
                Se = b([].concat),
                je = U("Reflect", "ownKeys") || function(t) {
                    var e = Oe.f(qt(t)),
                        n = Ee.f;
                    return n ? Se(e, n(t)) : e
                },
                Ie = Object.keys || function(t) {
                    return we(t, _e)
                },
                Ae = T ? Object.defineProperties : function(t, e) {
                    qt(t);
                    for (var n, r = N(e), o = Ie(e), i = o.length, a = 0; i > a;) Vt.f(t, n = o[a++], r[n]);
                    return t
                },
                xe = U("document", "documentElement"),
                Pe = "prototype",
                Re = "script",
                ke = $t("IE_PROTO"),
                Ce = function() {},
                De = function(t) {
                    return "<" + Re + ">" + t + "</" + Re + ">"
                },
                Le = function(t) {
                    t.write(De("")), t.close();
                    var e = t.parentWindow.Object;
                    return t = null, e
                },
                Ke = function() {
                    try {
                        W = new ActiveXObject("htmlfile")
                    } catch (Pi) {}
                    var t, e, n;
                    Ke = "undefined" != typeof document ? document.domain && W ? Le(W) : (e = xt("iframe"), n = "java" + Re + ":", e.style.display = "none", xe.appendChild(e), e.src = String(n), (t = e.contentWindow.document).open(), t.write(De("document.F=Object")), t.close(), t.F) : Le(W);
                    for (var r = _e.length; r--;) delete Ke[Pe][_e[r]];
                    return Ke()
                };
            me[ke] = !0;
            var Ne = Object.create || function(t, e) {
                    var n;
                    return null !== t ? (Ce[Pe] = qt(t), n = new Ce, Ce[Pe] = null, n[ke] = t) : n = Ke(), void 0 === e ? n : Ae(n, e)
                },
                Me = b("".replace),
                Fe = String(Error("zxcasd").stack),
                Be = /\n\s*at [^:]*:[^\n]*/,
                Ue = Be.test(Fe),
                Ge = {},
                He = Tt("iterator"),
                qe = Array.prototype,
                ze = {};
            ze[Tt("toStringTag")] = "z";
            var Je = "[object z]" === String(ze),
                Ve = Tt("toStringTag"),
                We = s.Object,
                Ye = "Arguments" == R(function() {
                    return arguments
                }()),
                Xe = Je ? R : function(t) {
                    var e, n, r;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
                        try {
                            return t[e]
                        } catch (Pi) {}
                    }(e = We(t), Ve)) ? n : Ye ? R(e) : "Object" == (r = R(e)) && w(e.callee) ? "Arguments" : r
                },
                Ze = Tt("iterator"),
                Qe = function(t) {
                    if (null != t) return ot(t, Ze) || ot(t, "@@iterator") || Ge[Xe(t)]
                },
                $e = s.TypeError,
                tn = function(t, e, n) {
                    var r, o;
                    qt(t);
                    try {
                        if (!(r = ot(t, "return"))) {
                            if ("throw" === e) throw n;
                            return n
                        }
                        r = E(r, t)
                    } catch (Pi) {
                        o = !0, r = Pi
                    }
                    if ("throw" === e) throw n;
                    if (o) throw r;
                    return qt(r), n
                },
                en = s.TypeError,
                nn = function(t, e) {
                    this.stopped = t, this.result = e
                },
                rn = nn.prototype,
                on = function(t, e, n) {
                    var r, o, i, a, u, c, s, f, l = n && n.that,
                        p = !(!n || !n.AS_ENTRIES),
                        d = !(!n || !n.IS_ITERATOR),
                        h = !(!n || !n.INTERRUPTED),
                        v = Ut(e, l),
                        y = function(t) {
                            return r && tn(r, "normal", t), new nn(!0, t)
                        },
                        m = function(t) {
                            return p ? (qt(t), h ? v(t[0], t[1], y) : v(t[0], t[1])) : h ? v(t, y) : v(t)
                        };
                    if (d) r = t;
                    else {
                        if (!(o = Qe(t))) throw en(et(t) + " is not iterable");
                        if (void 0 !== (f = o) && (Ge.Array === f || qe[He] === f)) {
                            for (i = 0, a = he(t); a > i; i++)
                                if ((u = m(t[i])) && G(rn, u)) return u;
                            return new nn(!1)
                        }
                        r = function(t, e) {
                            var n = arguments.length < 2 ? Qe(t) : e;
                            if (rt(n)) return qt(E(n, t));
                            throw $e(et(t) + " is not iterable")
                        }(t, o)
                    }
                    for (c = r.next; !(s = E(c, r)).done;) {
                        try {
                            u = m(s.value)
                        } catch (Pi) {
                            tn(r, "throw", Pi)
                        }
                        if ("object" == typeof u && u && G(rn, u)) return u
                    }
                    return new nn(!1)
                },
                an = s.String,
                un = function(t) {
                    if ("Symbol" === Xe(t)) throw TypeError("Cannot convert a Symbol value to a string");
                    return an(t)
                },
                cn = !_((function() {
                    var t = Error("a");
                    return !("stack" in t) || (Object.defineProperty(t, "stack", A(1, 7)), 7 !== t.stack)
                })),
                sn = Tt("toStringTag"),
                fn = s.Error,
                ln = [].push,
                pn = function(t, e) {
                    var n, r = arguments.length > 2 ? arguments[2] : void 0,
                        o = G(dn, this);
                    ue ? n = ue(new fn, o ? oe(this) : dn) : (n = o ? this : Ne(dn), Wt(n, sn, "Error")), void 0 !== e && Wt(n, "message", function(t, e) {
                            return void 0 === t ? arguments.length < 2 ? "" : e : un(t)
                        }(e)), cn && Wt(n, "stack", function(t, e) {
                            if (Ue && "string" == typeof t)
                                for (; e--;) t = Me(t, Be, "");
                            return t
                        }(n.stack, 1)),
                        function(t, e) {
                            M(e) && "cause" in e && Wt(t, "cause", e.cause)
                        }(n, r);
                    var i = [];
                    return on(t, ln, {
                        that: i
                    }), Wt(n, "errors", i), n
                };
            ue ? ue(pn, fn) : function(t, e, n) {
                for (var r = je(e), o = Vt.f, i = kt.f, a = 0; a < r.length; a++) {
                    var u = r[a];
                    dt(t, u) || n && dt(n, u) || o(t, u, i(e, u))
                }
            }(pn, fn, {
                name: !0
            });
            var dn = pn.prototype = Ne(fn.prototype, {
                constructor: A(1, pn),
                message: A(1, ""),
                name: A(1, "AggregateError")
            });
            Zt({
                global: !0
            }, {
                AggregateError: pn
            });
            var hn = b(Function.toString);
            w(ct.inspectSource) || (ct.inspectSource = function(t) {
                return hn(t)
            });
            var vn, yn, mn, gn = ct.inspectSource,
                bn = s.WeakMap,
                wn = w(bn) && /native code/.test(gn(bn)),
                _n = "Object already initialized",
                Tn = s.TypeError,
                On = s.WeakMap;
            if (wn || ct.state) {
                var En = ct.state || (ct.state = new On),
                    Sn = b(En.get),
                    jn = b(En.has),
                    In = b(En.set);
                vn = function(t, e) {
                    if (jn(En, t)) throw new Tn(_n);
                    return e.facade = t, In(En, t, e), e
                }, yn = function(t) {
                    return Sn(En, t) || {}
                }, mn = function(t) {
                    return jn(En, t)
                }
            } else {
                var An = $t("state");
                me[An] = !0, vn = function(t, e) {
                    if (dt(t, An)) throw new Tn(_n);
                    return e.facade = t, Wt(t, An, e), e
                }, yn = function(t) {
                    return dt(t, An) ? t[An] : {}
                }, mn = function(t) {
                    return dt(t, An)
                }
            }
            var xn, Pn, Rn, kn = {
                    set: vn,
                    get: yn,
                    has: mn,
                    enforce: function(t) {
                        return mn(t) ? yn(t) : vn(t, {})
                    },
                    getterFor: function(t) {
                        return function(e) {
                            var n;
                            if (!M(e) || (n = yn(e)).type !== t) throw Tn("Incompatible receiver, " + t + " required");
                            return n
                        }
                    }
                },
                Cn = Function.prototype,
                Dn = T && Object.getOwnPropertyDescriptor,
                Ln = dt(Cn, "name"),
                Kn = {
                    EXISTS: Ln,
                    PROPER: Ln && "something" === function() {}.name,
                    CONFIGURABLE: Ln && (!T || T && Dn(Cn, "name").configurable)
                },
                Nn = function(t, e, n, r) {
                    r && r.enumerable ? t[e] = n : Wt(t, e, n)
                },
                Mn = Tt("iterator"),
                Fn = !1;
            [].keys && ("next" in (Rn = [].keys()) ? (Pn = oe(oe(Rn))) !== Object.prototype && (xn = Pn) : Fn = !0);
            var Bn = null == xn || _((function() {
                var t = {};
                return xn[Mn].call(t) !== t
            }));
            xn = Bn ? {} : Ne(xn), w(xn[Mn]) || Nn(xn, Mn, (function() {
                return this
            }));
            var Un = {
                    IteratorPrototype: xn,
                    BUGGY_SAFARI_ITERATORS: Fn
                },
                Gn = Je ? {}.toString : function() {
                    return "[object " + Xe(this) + "]"
                },
                Hn = Vt.f,
                qn = Tt("toStringTag"),
                zn = function(t, e, n, r) {
                    if (t) {
                        var o = n ? t : t.prototype;
                        dt(o, qn) || Hn(o, qn, {
                            configurable: !0,
                            value: e
                        }), r && !Je && Wt(o, "toString", Gn)
                    }
                },
                Jn = Un.IteratorPrototype,
                Vn = function() {
                    return this
                },
                Wn = Kn.PROPER,
                Yn = Un.BUGGY_SAFARI_ITERATORS,
                Xn = Tt("iterator"),
                Zn = "keys",
                Qn = "values",
                $n = "entries",
                tr = function() {
                    return this
                },
                er = function(t, e, n, r, o, i, a) {
                    ! function(t, e, n, r) {
                        var o = e + " Iterator";
                        t.prototype = Ne(Jn, {
                            next: A(+!r, n)
                        }), zn(t, o, !1, !0), Ge[o] = Vn
                    }(n, e, r);
                    var u, c, s, f = function(t) {
                            if (t === o && v) return v;
                            if (!Yn && t in d) return d[t];
                            switch (t) {
                                case Zn:
                                case Qn:
                                case $n:
                                    return function() {
                                        return new n(this, t)
                                    }
                            }
                            return function() {
                                return new n(this)
                            }
                        },
                        l = e + " Iterator",
                        p = !1,
                        d = t.prototype,
                        h = d[Xn] || d["@@iterator"] || o && d[o],
                        v = !Yn && h || f(o),
                        y = "Array" == e && d.entries || h;
                    if (y && (u = oe(y.call(new t))) !== Object.prototype && u.next && (zn(u, l, !0, !0), Ge[l] = tr), Wn && o == Qn && h && h.name !== Qn && (p = !0, v = function() {
                            return E(h, this)
                        }), o)
                        if (c = {
                                values: f(Qn),
                                keys: i ? v : f(Zn),
                                entries: f($n)
                            }, a)
                            for (s in c)(Yn || p || !(s in d)) && Nn(d, s, c[s]);
                        else Zt({
                            target: e,
                            proto: !0,
                            forced: Yn || p
                        }, c);
                    return a && d[Xn] !== v && Nn(d, Xn, v, {
                        name: o
                    }), Ge[e] = v, c
                };
            Vt.f;
            var nr = "Array Iterator",
                rr = kn.set,
                or = kn.getterFor(nr);
            er(Array, "Array", (function(t, e) {
                rr(this, {
                    type: nr,
                    target: N(t),
                    index: 0,
                    kind: e
                })
            }), (function() {
                var t = or(this),
                    e = t.target,
                    n = t.kind,
                    r = t.index++;
                return !e || r >= e.length ? (t.target = void 0, {
                    value: void 0,
                    done: !0
                }) : "keys" == n ? {
                    value: r,
                    done: !1
                } : "values" == n ? {
                    value: e[r],
                    done: !1
                } : {
                    value: [r, e[r]],
                    done: !1
                }
            }), "values"), Ge.Arguments = Ge.Array;
            var ir = s.Promise,
                ar = Tt("species"),
                ur = s.TypeError,
                cr = Tt("iterator"),
                sr = !1;
            try {
                var fr = 0,
                    lr = {
                        next: function() {
                            return {
                                done: !!fr++
                            }
                        },
                        return: function() {
                            sr = !0
                        }
                    };
                lr[cr] = function() {
                    return this
                }, Array.from(lr, (function() {
                    throw 2
                }))
            } catch (Pi) {}
            var pr = function() {},
                dr = [],
                hr = U("Reflect", "construct"),
                vr = /^\s*(?:class|function)\b/,
                yr = b(vr.exec),
                mr = !vr.exec(pr),
                gr = function(t) {
                    if (!w(t)) return !1;
                    try {
                        return hr(pr, dr, t), !0
                    } catch (Pi) {
                        return !1
                    }
                },
                br = function(t) {
                    if (!w(t)) return !1;
                    switch (Xe(t)) {
                        case "AsyncFunction":
                        case "GeneratorFunction":
                        case "AsyncGeneratorFunction":
                            return !1
                    }
                    try {
                        return mr || !!yr(vr, gn(t))
                    } catch (Pi) {
                        return !0
                    }
                };
            br.sham = !0;
            var wr, _r, Tr, Or, Er = !hr || _((function() {
                    var t;
                    return gr(gr.call) || !gr(Object) || !gr((function() {
                        t = !0
                    })) || t
                })) ? br : gr,
                Sr = s.TypeError,
                jr = Tt("species"),
                Ir = function(t, e) {
                    var n, r = qt(t).constructor;
                    return void 0 === r || null == (n = qt(r)[jr]) ? e : function(t) {
                        if (Er(t)) return t;
                        throw Sr(et(t) + " is not a constructor")
                    }(n)
                },
                Ar = b([].slice),
                xr = /(?:ipad|iphone|ipod).*applewebkit/i.test(H),
                Pr = "process" == R(s.process),
                Rr = s.setImmediate,
                kr = s.clearImmediate,
                Cr = s.process,
                Dr = s.Dispatch,
                Lr = s.Function,
                Kr = s.MessageChannel,
                Nr = s.String,
                Mr = 0,
                Fr = {},
                Br = "onreadystatechange";
            try {
                wr = s.location
            } catch (Pi) {}
            var Ur = function(t) {
                    if (dt(Fr, t)) {
                        var e = Fr[t];
                        delete Fr[t], e()
                    }
                },
                Gr = function(t) {
                    return function() {
                        Ur(t)
                    }
                },
                Hr = function(t) {
                    Ur(t.data)
                },
                qr = function(t) {
                    s.postMessage(Nr(t), wr.protocol + "//" + wr.host)
                };
            Rr && kr || (Rr = function(t) {
                var e = Ar(arguments, 1);
                return Fr[++Mr] = function() {
                    h(w(t) ? t : Lr(t), void 0, e)
                }, _r(Mr), Mr
            }, kr = function(t) {
                delete Fr[t]
            }, Pr ? _r = function(t) {
                Cr.nextTick(Gr(t))
            } : Dr && Dr.now ? _r = function(t) {
                Dr.now(Gr(t))
            } : Kr && !xr ? (Or = (Tr = new Kr).port2, Tr.port1.onmessage = Hr, _r = Ut(Or.postMessage, Or)) : s.addEventListener && w(s.postMessage) && !s.importScripts && wr && "file:" !== wr.protocol && !_(qr) ? (_r = qr, s.addEventListener("message", Hr, !1)) : _r = Br in xt("script") ? function(t) {
                xe.appendChild(xt("script"))[Br] = function() {
                    xe.removeChild(this), Ur(t)
                }
            } : function(t) {
                setTimeout(Gr(t), 0)
            });
            var zr, Jr, Vr, Wr, Yr, Xr, Zr, Qr, $r = {
                    set: Rr,
                    clear: kr
                },
                to = /ipad|iphone|ipod/i.test(H) && void 0 !== s.Pebble,
                eo = /web0s(?!.*chrome)/i.test(H),
                no = kt.f,
                ro = $r.set,
                oo = s.MutationObserver || s.WebKitMutationObserver,
                io = s.document,
                ao = s.process,
                uo = s.Promise,
                co = no(s, "queueMicrotask"),
                so = co && co.value;
            so || (zr = function() {
                var t, e;
                for (Pr && (t = ao.domain) && t.exit(); Jr;) {
                    e = Jr.fn, Jr = Jr.next;
                    try {
                        e()
                    } catch (Pi) {
                        throw Jr ? Wr() : Vr = void 0, Pi
                    }
                }
                Vr = void 0, t && t.enter()
            }, xr || Pr || eo || !oo || !io ? !to && uo && uo.resolve ? ((Zr = uo.resolve(void 0)).constructor = uo, Qr = Ut(Zr.then, Zr), Wr = function() {
                Qr(zr)
            }) : Pr ? Wr = function() {
                ao.nextTick(zr)
            } : (ro = Ut(ro, s), Wr = function() {
                ro(zr)
            }) : (Yr = !0, Xr = io.createTextNode(""), new oo(zr).observe(Xr, {
                characterData: !0
            }), Wr = function() {
                Xr.data = Yr = !Yr
            }));
            var fo = so || function(t) {
                    var e = {
                        fn: t,
                        next: void 0
                    };
                    Vr && (Vr.next = e), Jr || (Jr = e, Wr()), Vr = e
                },
                lo = function(t) {
                    var e, n;
                    this.promise = new t((function(t, r) {
                        if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                        e = t, n = r
                    })), this.resolve = rt(e), this.reject = rt(n)
                },
                po = {
                    f: function(t) {
                        return new lo(t)
                    }
                },
                ho = function(t, e) {
                    if (qt(t), M(e) && e.constructor === t) return e;
                    var n = po.f(t);
                    return (0, n.resolve)(e), n.promise
                },
                vo = function(t) {
                    try {
                        return {
                            error: !1,
                            value: t()
                        }
                    } catch (Pi) {
                        return {
                            error: !0,
                            value: Pi
                        }
                    }
                },
                yo = function() {
                    this.head = null, this.tail = null
                };
            yo.prototype = {
                add: function(t) {
                    var e = {
                        item: t,
                        next: null
                    };
                    this.head ? this.tail.next = e : this.head = e, this.tail = e
                },
                get: function() {
                    var t = this.head;
                    if (t) return this.head = t.next, this.tail === t && (this.tail = null), t.item
                }
            };
            var mo, go, bo, wo = yo,
                _o = "object" == typeof window,
                To = $r.set,
                Oo = Tt("species"),
                Eo = "Promise",
                So = kn.getterFor(Eo),
                jo = kn.set,
                Io = kn.getterFor(Eo),
                Ao = ir && ir.prototype,
                xo = ir,
                Po = Ao,
                Ro = s.TypeError,
                ko = s.document,
                Co = s.process,
                Do = po.f,
                Lo = Do,
                Ko = !!(ko && ko.createEvent && s.dispatchEvent),
                No = w(s.PromiseRejectionEvent),
                Mo = "unhandledrejection",
                Fo = Ft(Eo, (function() {
                    var t = gn(xo),
                        e = t !== String(xo);
                    if (!e && 66 === Y) return !0;
                    if (!Po.finally) return !0;
                    if (Y >= 51 && /native code/.test(t)) return !1;
                    var n = new xo((function(t) {
                            t(1)
                        })),
                        r = function(t) {
                            t((function() {}), (function() {}))
                        };
                    return (n.constructor = {})[Oo] = r, !(n.then((function() {})) instanceof r) || !e && _o && !No
                })),
                Bo = Fo || ! function(t, e) {
                    if (!e && !sr) return !1;
                    var n = !1;
                    try {
                        var r = {};
                        r[cr] = function() {
                            return {
                                next: function() {
                                    return {
                                        done: n = !0
                                    }
                                }
                            }
                        }, t(r)
                    } catch (Pi) {}
                    return n
                }((function(t) {
                    xo.all(t).catch((function() {}))
                })),
                Uo = function(t) {
                    var e;
                    return !(!M(t) || !w(e = t.then)) && e
                },
                Go = function(t, e) {
                    var n, r, o, i = e.value,
                        a = 1 == e.state,
                        u = a ? t.ok : t.fail,
                        c = t.resolve,
                        s = t.reject,
                        f = t.domain;
                    try {
                        u ? (a || (2 === e.rejection && Vo(e), e.rejection = 1), !0 === u ? n = i : (f && f.enter(), n = u(i), f && (f.exit(), o = !0)), n === t.promise ? s(Ro("Promise-chain cycle")) : (r = Uo(n)) ? E(r, n, c, s) : c(n)) : s(i)
                    } catch (Pi) {
                        f && !o && f.exit(), s(Pi)
                    }
                },
                Ho = function(t, e) {
                    t.notified || (t.notified = !0, fo((function() {
                        for (var n, r = t.reactions; n = r.get();) Go(n, t);
                        t.notified = !1, e && !t.rejection && zo(t)
                    })))
                },
                qo = function(t, e, n) {
                    var r, o;
                    Ko ? ((r = ko.createEvent("Event")).promise = e, r.reason = n, r.initEvent(t, !1, !0), s.dispatchEvent(r)) : r = {
                        promise: e,
                        reason: n
                    }, !No && (o = s["on" + t]) ? o(r) : t === Mo && function(t, e) {
                        var n = s.console;
                        n && n.error && (1 == arguments.length ? n.error(t) : n.error(t, e))
                    }("Unhandled promise rejection", n)
                },
                zo = function(t) {
                    E(To, s, (function() {
                        var e, n = t.facade,
                            r = t.value;
                        if (Jo(t) && (e = vo((function() {
                                Pr ? Co.emit("unhandledRejection", r, n) : qo(Mo, n, r)
                            })), t.rejection = Pr || Jo(t) ? 2 : 1, e.error)) throw e.value
                    }))
                },
                Jo = function(t) {
                    return 1 !== t.rejection && !t.parent
                },
                Vo = function(t) {
                    E(To, s, (function() {
                        var e = t.facade;
                        Pr ? Co.emit("rejectionHandled", e) : qo("rejectionhandled", e, t.value)
                    }))
                },
                Wo = function(t, e, n) {
                    return function(r) {
                        t(e, r, n)
                    }
                },
                Yo = function(t, e, n) {
                    t.done || (t.done = !0, n && (t = n), t.value = e, t.state = 2, Ho(t, !0))
                },
                Xo = function(t, e, n) {
                    if (!t.done) {
                        t.done = !0, n && (t = n);
                        try {
                            if (t.facade === e) throw Ro("Promise can't be resolved itself");
                            var r = Uo(e);
                            r ? fo((function() {
                                var n = {
                                    done: !1
                                };
                                try {
                                    E(r, e, Wo(Xo, n, t), Wo(Yo, n, t))
                                } catch (Pi) {
                                    Yo(n, Pi, t)
                                }
                            })) : (t.value = e, t.state = 1, Ho(t, !1))
                        } catch (Pi) {
                            Yo({
                                done: !1
                            }, Pi, t)
                        }
                    }
                };
            Fo && (xo = function(t) {
                    ! function(t, e) {
                        if (G(e, t)) return t;
                        throw ur("Incorrect invocation")
                    }(this, Po), rt(t), E(mo, this);
                    var e = So(this);
                    try {
                        t(Wo(Xo, e), Wo(Yo, e))
                    } catch (Pi) {
                        Yo(e, Pi)
                    }
                }, Po = xo.prototype, (mo = function(t) {
                    jo(this, {
                        type: Eo,
                        done: !1,
                        notified: !1,
                        parent: !1,
                        reactions: new wo,
                        rejection: !1,
                        state: 0,
                        value: void 0
                    })
                }).prototype = function(t, e, n) {
                    for (var r in e) n && n.unsafe && t[r] ? t[r] = e[r] : Nn(t, r, e[r], n);
                    return t
                }(Po, {
                    then: function(t, e) {
                        var n = Io(this),
                            r = Do(Ir(this, xo));
                        return n.parent = !0, r.ok = !w(t) || t, r.fail = w(e) && e, r.domain = Pr ? Co.domain : void 0, 0 == n.state ? n.reactions.add(r) : fo((function() {
                            Go(r, n)
                        })), r.promise
                    },
                    catch: function(t) {
                        return this.then(void 0, t)
                    }
                }), go = function() {
                    var t = new mo,
                        e = So(t);
                    this.promise = t, this.resolve = Wo(Xo, e), this.reject = Wo(Yo, e)
                }, po.f = Do = function(t) {
                    return t === xo || t === bo ? new go(t) : Lo(t)
                }), Zt({
                    global: !0,
                    wrap: !0,
                    forced: Fo
                }, {
                    Promise: xo
                }), zn(xo, Eo, !1, !0),
                function(t) {
                    var e = U(t),
                        n = Vt.f;
                    T && e && !e[ar] && n(e, ar, {
                        configurable: !0,
                        get: function() {
                            return this
                        }
                    })
                }(Eo), bo = U(Eo), Zt({
                    target: Eo,
                    stat: !0,
                    forced: Fo
                }, {
                    reject: function(t) {
                        var e = Do(this);
                        return E(e.reject, void 0, t), e.promise
                    }
                }), Zt({
                    target: Eo,
                    stat: !0,
                    forced: !0
                }, {
                    resolve: function(t) {
                        return ho(this === bo ? xo : this, t)
                    }
                }), Zt({
                    target: Eo,
                    stat: !0,
                    forced: Bo
                }, {
                    all: function(t) {
                        var e = this,
                            n = Do(e),
                            r = n.resolve,
                            o = n.reject,
                            i = vo((function() {
                                var n = rt(e.resolve),
                                    i = [],
                                    a = 0,
                                    u = 1;
                                on(t, (function(t) {
                                    var c = a++,
                                        s = !1;
                                    u++, E(n, e, t).then((function(t) {
                                        s || (s = !0, i[c] = t, --u || r(i))
                                    }), o)
                                })), --u || r(i)
                            }));
                        return i.error && o(i.value), n.promise
                    },
                    race: function(t) {
                        var e = this,
                            n = Do(e),
                            r = n.reject,
                            o = vo((function() {
                                var o = rt(e.resolve);
                                on(t, (function(t) {
                                    E(o, e, t).then(n.resolve, r)
                                }))
                            }));
                        return o.error && r(o.value), n.promise
                    }
                }), Zt({
                    target: "Promise",
                    stat: !0
                }, {
                    allSettled: function(t) {
                        var e = this,
                            n = po.f(e),
                            r = n.resolve,
                            o = n.reject,
                            i = vo((function() {
                                var n = rt(e.resolve),
                                    o = [],
                                    i = 0,
                                    a = 1;
                                on(t, (function(t) {
                                    var u = i++,
                                        c = !1;
                                    a++, E(n, e, t).then((function(t) {
                                        c || (c = !0, o[u] = {
                                            status: "fulfilled",
                                            value: t
                                        }, --a || r(o))
                                    }), (function(t) {
                                        c || (c = !0, o[u] = {
                                            status: "rejected",
                                            reason: t
                                        }, --a || r(o))
                                    }))
                                })), --a || r(o)
                            }));
                        return i.error && o(i.value), n.promise
                    }
                });
            var Zo = "No one promise resolved";
            Zt({
                target: "Promise",
                stat: !0
            }, {
                any: function(t) {
                    var e = this,
                        n = U("AggregateError"),
                        r = po.f(e),
                        o = r.resolve,
                        i = r.reject,
                        a = vo((function() {
                            var r = rt(e.resolve),
                                a = [],
                                u = 0,
                                c = 1,
                                s = !1;
                            on(t, (function(t) {
                                var f = u++,
                                    l = !1;
                                c++, E(r, e, t).then((function(t) {
                                    l || s || (s = !0, o(t))
                                }), (function(t) {
                                    l || s || (l = !0, a[f] = t, --c || i(new n(a, Zo)))
                                }))
                            })), --c || i(new n(a, Zo))
                        }));
                    return a.error && i(a.value), r.promise
                }
            });
            var Qo = !!ir && _((function() {
                ir.prototype.finally.call({
                    then: function() {}
                }, (function() {}))
            }));
            Zt({
                target: "Promise",
                proto: !0,
                real: !0,
                forced: Qo
            }, {
                finally: function(t) {
                    var e = Ir(this, U("Promise")),
                        n = w(t);
                    return this.then(n ? function(n) {
                        return ho(e, t()).then((function() {
                            return n
                        }))
                    } : t, n ? function(n) {
                        return ho(e, t()).then((function() {
                            throw n
                        }))
                    } : t)
                }
            });
            var $o = b("".charAt),
                ti = b("".charCodeAt),
                ei = b("".slice),
                ni = function(t) {
                    return function(e, n) {
                        var r, o, i = un(K(e)),
                            a = fe(n),
                            u = i.length;
                        return a < 0 || a >= u ? t ? "" : void 0 : (r = ti(i, a)) < 55296 || r > 56319 || a + 1 === u || (o = ti(i, a + 1)) < 56320 || o > 57343 ? t ? $o(i, a) : r : t ? ei(i, a, a + 2) : o - 56320 + (r - 55296 << 10) + 65536
                    }
                },
                ri = {
                    codeAt: ni(!1),
                    charAt: ni(!0)
                }.charAt,
                oi = "String Iterator",
                ii = kn.set,
                ai = kn.getterFor(oi);
            er(String, "String", (function(t) {
                ii(this, {
                    type: oi,
                    string: un(t),
                    index: 0
                })
            }), (function() {
                var t, e = ai(this),
                    n = e.string,
                    r = e.index;
                return r >= n.length ? {
                    value: void 0,
                    done: !0
                } : (t = ri(n, r), e.index += t.length, {
                    value: t,
                    done: !1
                })
            }));
            var ui = F.Promise,
                ci = Tt("toStringTag");
            for (var si in {
                    CSSRuleList: 0,
                    CSSStyleDeclaration: 0,
                    CSSValueList: 0,
                    ClientRectList: 0,
                    DOMRectList: 0,
                    DOMStringList: 0,
                    DOMTokenList: 1,
                    DataTransferItemList: 0,
                    FileList: 0,
                    HTMLAllCollection: 0,
                    HTMLCollection: 0,
                    HTMLFormElement: 0,
                    HTMLSelectElement: 0,
                    MediaList: 0,
                    MimeTypeArray: 0,
                    NamedNodeMap: 0,
                    NodeList: 1,
                    PaintRequestList: 0,
                    Plugin: 0,
                    PluginArray: 0,
                    SVGLengthList: 0,
                    SVGNumberList: 0,
                    SVGPathSegList: 0,
                    SVGPointList: 0,
                    SVGStringList: 0,
                    SVGTransformList: 0,
                    SourceBufferList: 0,
                    StyleSheetList: 0,
                    TextTrackCueList: 0,
                    TextTrackList: 0,
                    TouchList: 0
                }) {
                var fi = s[si],
                    li = fi && fi.prototype;
                li && Xe(li) !== ci && Wt(li, ci, si), Ge[si] = Ge.Array
            }
            var pi = ui;

            function di(t) {
                var e, n = t.transport,
                    r = t.endpoint,
                    o = t.size,
                    i = void 0 === o ? 10 : o,
                    a = t.wait,
                    u = void 0 === a ? 1e3 : a,
                    c = [],
                    s = 0;

                function f() {
                    if (c.length) {
                        var t = this.getBatchData();
                        n.post({
                            url: r,
                            data: t,
                            fail: function(n) {
                                e && e(n, t)
                            }
                        }), c = []
                    }
                }
                return {
                    getSize: function() {
                        return i
                    },
                    getWait: function() {
                        return u
                    },
                    setSize: function(t) {
                        i = t
                    },
                    setWait: function(t) {
                        u = t
                    },
                    getEndpoint: function() {
                        return r
                    },
                    setEndpoint: function(t) {
                        r = t
                    },
                    send: function(t) {
                        c.push(t), c.length >= i && f.call(this), clearTimeout(s), s = setTimeout(f.bind(this), u)
                    },
                    flush: function() {
                        clearTimeout(s), f.call(this)
                    },
                    getBatchData: function() {
                        return c.length ? (t = c, JSON.stringify({
                            ev_type: "batch",
                            list: t
                        })) : "";
                        var t
                    },
                    clear: function() {
                        clearTimeout(s), c = []
                    },
                    fail: function(t) {
                        e = t
                    }
                }
            }
            var hi = function() {
                return hi = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }, hi.apply(this, arguments)
            };

            function vi(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (Pi) {
                    o = {
                        error: Pi
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }

            function yi(t, e, n) {
                if (n || 2 === arguments.length)
                    for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                return t.concat(r || Array.prototype.slice.call(e))
            }
            var mi = ["init", "start", "config", "beforeDestroy", "provide", "beforeReport", "report", "beforeBuild", "build", "beforeSend", "send", "beforeConfig"],
                gi = function() {
                    return {}
                };

            function bi(t) {
                return t
            }

            function wi(t) {
                return "object" == typeof t && null !== t
            }
            var _i = Object.prototype;

            function Ti(t) {
                return "[object Array]" === _i.toString.call(t)
            }

            function Oi(t) {
                return "number" == typeof t
            }

            function Ei(t) {
                return "string" == typeof t
            }

            function Si(t, e) {
                if (!Ti(t)) return !1;
                if (0 === t.length) return !1;
                for (var n = 0; n < t.length;) {
                    if (t[n] === e) return !0;
                    n++
                }
                return !1
            }
            var ji = function(t, e) {
                if (!Ti(t)) return t;
                var n = t.indexOf(e);
                if (n >= 0) {
                    var r = t.slice();
                    return r.splice(n, 1), r
                }
                return t
            };

            function Ii(t) {
                try {
                    return Ei(t) ? t : JSON.stringify(t)
                } catch (e) {
                    return "[FAILED_TO_STRINGIFY]:" + String(e)
                }
            }
            var Ai = "".padStart ? function(t, e) {
                    return void 0 === e && (e = 8), t.padStart(e, " ")
                } : function(t) {
                    return t
                },
                xi = 0,
                Pi = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    console.error.apply(console, yi(["[SDK]", Date.now(), Ai("" + xi++)], vi(t), !1))
                },
                Ri = 0,
                ki = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    console.warn.apply(console, yi(["[SDK]", Date.now(), Ai("" + Ri++)], vi(t), !1))
                },
                Ci = function(t) {
                    return Math.random() < Number(t)
                },
                Di = function(t, e) {
                    return t < Number(e)
                },
                Li = function(t) {
                    return function(e) {
                        for (var n = e, r = 0; r < t.length && n; r++) try {
                            n = t[r](n)
                        } catch (o) {
                            Pi(o)
                        }
                        return n
                    }
                };

            function Ki() {
                var t = function() {
                    for (var t = new Array(16), e = 0, n = 0; n < 16; n++) 3 & n || (e = 4294967296 * Math.random()), t[n] = e >>> ((3 & n) << 3) & 255;
                    return t
                }();
                return t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128,
                    function(t) {
                        for (var e = [], n = 0; n < 256; ++n) e[n] = (n + 256).toString(16).substr(1);
                        var r = 0,
                            o = e;
                        return [o[t[r++]], o[t[r++]], o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], o[t[r++]], o[t[r++]], o[t[r++]], o[t[r++]]].join("")
                    }(t)
            }

            function Ni(t) {
                var e, n, r = t.builder,
                    o = t.createSender,
                    i = t.createDefaultConfig,
                    a = t.createConfigManager,
                    u = t.userConfigNormalizer,
                    c = t.initConfigNormalizer,
                    s = t.validateInitConfig,
                    f = {};
                mi.forEach((function(t) {
                    return f[t] = []
                }));
                var l = !1,
                    p = !1,
                    d = !1,
                    h = [],
                    v = [],
                    y = function() {
                        var t = !1,
                            e = {},
                            n = function(t) {
                                t.length && t.forEach((function(t) {
                                    try {
                                        t()
                                    } catch (e) {}
                                })), t.length = 0
                            },
                            r = function(t) {
                                e[t] && e[t].forEach((function(t) {
                                    n(t[1])
                                })), e[t] = void 0
                            };
                        return {
                            set: function(r, o, i) {
                                e[r] ? e[r].push([o, i]) : e[r] = [
                                    [o, i]
                                ], t && n(i)
                            },
                            has: function(t) {
                                return !!e[t]
                            },
                            remove: r,
                            removeByEvType: function(t) {
                                Object.keys(e).forEach((function(r) {
                                    e[r] && e[r].forEach((function(e) {
                                        e[0] === t && n(e[1])
                                    }))
                                }))
                            },
                            clear: function() {
                                t = !0, Object.keys(e).forEach((function(t) {
                                    r(t)
                                }))
                            }
                        }
                    }(),
                    m = {
                        getBuilder: function() {
                            return r
                        },
                        getSender: function() {
                            return e
                        },
                        getPreStartQueue: function() {
                            return h
                        },
                        init: function(t) {
                            if (l) ki("already inited");
                            else {
                                if (!(t && wi(t) && s(t))) throw new Error("invalid InitConfig, init failed");
                                var r = i(t);
                                if (!r) throw new Error("defaultConfig missing");
                                var u = c(t);
                                if ((n = a(r)).setConfig(u), n.onChange((function() {
                                        g("config")
                                    })), !(e = o(n.getConfig()))) throw new Error("sender missing");
                                l = !0, g("init", !0)
                            }
                        },
                        set: function(t) {
                            l && t && wi(t) && (g("beforeConfig", !1, t), null == n || n.setConfig(t))
                        },
                        config: function(t) {
                            if (l) return t && wi(t) && (g("beforeConfig", !1, t), null == n || n.setConfig(u(t))), null == n ? void 0 : n.getConfig()
                        },
                        provide: function(t, e) {
                            Si(v, t) ? ki("cannot provide " + t + ", reserved") : (m[t] = e, g("provide", !1, t))
                        },
                        start: function() {
                            var t = this;
                            l && (p || null == n || n.onReady((function() {
                                p = !0, g("start", !0), h.forEach((function(e) {
                                    return t.build(e)
                                })), h.length = 0
                            })))
                        },
                        report: function(t) {
                            if (t) {
                                var e = Li(f.beforeReport)(t);
                                if (e) {
                                    var n = Li(f.report)(e);
                                    n && (p ? this.build(n) : h.push(n))
                                }
                            }
                        },
                        build: function(t) {
                            if (p) {
                                var e = Li(f.beforeBuild)(t);
                                if (e) {
                                    var n = r.build(e);
                                    if (n) {
                                        var o = Li(f.build)(n);
                                        o && this.send(o)
                                    }
                                }
                            }
                        },
                        send: function(t) {
                            if (p) {
                                var n = Li(f.beforeSend)(t);
                                n && (e.send(n), g("send", !1, n))
                            }
                        },
                        destroy: function() {
                            y.clear(), d = !0, h.length = 0, g("beforeDestroy", !0)
                        },
                        on: function(t, e) {
                            if ("init" === t && l || "start" === t && p || "beforeDestroy" === t && d) try {
                                e()
                            } catch (n) {} else f[t] && f[t].push(e)
                        },
                        off: function(t, e) {
                            f[t] && (f[t] = ji(f[t], e))
                        },
                        destroyAgent: y
                    };
                return v = Object.keys(m), m;

                function g(t, e) {
                    void 0 === e && (e = !1);
                    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                    f[t].forEach((function(t) {
                        try {
                            t.apply(void 0, yi([], vi(n), !1))
                        } catch (e) {}
                    })), e && (f[t].length = 0)
                }
            }
            var Mi = function(t) {
                var e = function() {
                    var t = {},
                        e = {},
                        n = {
                            set: function(r, o) {
                                return t[r] = o, e[r] = Ii(o), n
                            },
                            merge: function(r) {
                                return t = hi(hi({}, t), r), Object.keys(r).forEach((function(t) {
                                    e[t] = Ii(r[t])
                                })), n
                            },
                            delete: function(r) {
                                return delete t[r], delete e[r], n
                            },
                            clear: function() {
                                return t = {}, e = {}, n
                            },
                            get: function(t) {
                                return e[t]
                            },
                            toString: function() {
                                return hi({}, e)
                            }
                        };
                    return n
                }();
                t.provide("context", e), t.on("report", (function(t) {
                    return t.extra || (t.extra = {}), t.extra.context = e.toString(), t
                }))
            };
            var Fi = function() {
                return Date.now()
            };
            var Bi = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var n = function(t) {
                        if (t) return t.__SLARDAR_REGISTRY__ || (t.__SLARDAR_REGISTRY__ = {
                            Slardar: {
                                plugins: [],
                                errors: [],
                                subject: {}
                            }
                        }), t.__SLARDAR_REGISTRY__.Slardar
                    }(function() {
                        if ("object" == typeof window && wi(window)) return window
                    }());
                    n && (n.errors || (n.errors = []), n.errors.push(t))
                },
                Ui = "custom",
                Gi = function(t) {
                    t.provide("sendEvent", (function(e) {
                        var n = function(t) {
                            if (t && wi(t) && t.name && Ei(t.name)) {
                                var e = {
                                    name: t.name,
                                    type: "event"
                                };
                                if ("metrics" in t && wi(t.metrics)) {
                                    var n = t.metrics,
                                        r = {};
                                    for (var o in n) Oi(n[o]) && (r[o] = n[o]);
                                    e.metrics = r
                                }
                                if ("categories" in t && wi(t.categories)) {
                                    var i = t.categories,
                                        a = {};
                                    for (var o in i) a[o] = Ii(i[o]);
                                    e.categories = a
                                }
                                return e
                            }
                        }(e);
                        n && t.report({
                            ev_type: Ui,
                            payload: n,
                            extra: {
                                timestamp: Fi()
                            }
                        })
                    })), t.provide("sendLog", (function(e) {
                        var n = function(t) {
                            if (t && wi(t) && t.content && Ei(t.content)) {
                                var e = {
                                    content: Ii(t.content),
                                    type: "log",
                                    level: "info"
                                };
                                if ("level" in t && (e.level = t.level), "extra" in t && wi(t.extra)) {
                                    var n = t.extra,
                                        r = {},
                                        o = {};
                                    for (var i in n) Oi(n[i]) ? r[i] = n[i] : o[i] = Ii(n[i]);
                                    e.metrics = r, e.categories = o
                                }
                                return e
                            }
                        }(e);
                        n && t.report({
                            ev_type: Ui,
                            payload: n,
                            extra: {
                                timestamp: Fi()
                            }
                        })
                    }))
                },
                Hi = function(t, e) {
                    var n = t.common || {};
                    return n.sample_rate = e, t.common = n, t
                },
                qi = function(t, e, n, r, o) {
                    return t ? (i = o(r, e), function() {
                        return i
                    }) : function() {
                        return n(e)
                    };
                    var i
                },
                zi = function(t, e, n, r) {
                    var o = function(t, e, n) {
                        for (var r, o = vi(e.split(".")), i = o[0], a = o.slice(1); t && a.length > 0;) t = t[i], i = (r = vi(a))[0], a = r.slice(1);
                        if (t) return n(t, i)
                    }(t, e, (function(t, e) {
                        return t[e]
                    }));
                    return void 0 !== o && function(t, e, n) {
                        switch (n) {
                            case "eq":
                                return Si(e, t);
                            case "neq":
                                return !Si(e, t);
                            case "gt":
                                return t > e[0];
                            case "gte":
                                return t >= e[0];
                            case "lt":
                                return t < e[0];
                            case "lte":
                                return t <= e[0];
                            case "regex":
                                return Boolean(t.match(new RegExp(e.join("|"))));
                            case "not_regex":
                                return !t.match(new RegExp(e.join("|")));
                            default:
                                return !1
                        }
                    }(o, function(t, e) {
                        return t.map((function(t) {
                            switch (e) {
                                case "number":
                                    return Number(t);
                                case "boolean":
                                    return "1" === t;
                                default:
                                    return String(t)
                            }
                        }))
                    }(r, "boolean" == typeof o ? "bool" : Oi(o) ? "number" : "string"), n)
                },
                Ji = function(t, e) {
                    try {
                        return "rule" === e.type ? zi(t, e.field, e.op, e.values) : "and" === e.type ? e.children.every((function(e) {
                            return Ji(t, e)
                        })) : e.children.some((function(e) {
                            return Ji(t, e)
                        }))
                    } catch (n) {
                        return Bi(n), !1
                    }
                },
                Vi = function(t, e, n, r, o) {
                    if (!e) return bi;
                    var i = e.sample_rate,
                        a = e.include_users,
                        u = e.sample_granularity,
                        c = e.rules,
                        s = e.r,
                        f = void 0 === s ? Math.random() : s;
                    if (Si(a, t)) return function(t) {
                        return Hi(t, 1)
                    };
                    var l = "session" === u,
                        p = qi(l, i, n, f, r),
                        d = function(t, e, n, r, o, i) {
                            var a = {};
                            return Object.keys(t).forEach((function(u) {
                                var c = t[u],
                                    s = c.enable,
                                    f = c.sample_rate,
                                    l = c.conditional_sample_rules;
                                s ? (a[u] = {
                                    enable: s,
                                    sample_rate: f,
                                    effectiveSampleRate: f * n,
                                    hit: qi(e, f, r, o, i)
                                }, l && (a[u].conditional_hit_rules = l.map((function(t) {
                                    var a = t.sample_rate,
                                        u = t.filter;
                                    return {
                                        sample_rate: a,
                                        hit: qi(e, a, r, o, i),
                                        effectiveSampleRate: a * n,
                                        filter: u
                                    }
                                })))) : a[u] = {
                                    enable: s,
                                    hit: function() {
                                        return !1
                                    },
                                    sample_rate: 0,
                                    effectiveSampleRate: 0
                                }
                            })), a
                        }(c, l, i, n, f, r);
                    return function(t) {
                        var e;
                        if (!p()) return l && o[0](), !1;
                        if (!(t.ev_type in d)) return Hi(t, i);
                        if (!d[t.ev_type].enable) return l && o[1](t.ev_type), !1;
                        if (null === (e = t.common) || void 0 === e ? void 0 : e.sample_rate) return t;
                        var n = d[t.ev_type],
                            r = n.conditional_hit_rules;
                        if (r)
                            for (var a = 0; a < r.length; a++)
                                if (Ji(t, r[a].filter)) return !!r[a].hit() && Hi(t, r[a].effectiveSampleRate);
                        return n.hit() ? Hi(t, n.effectiveSampleRate) : ((!r || !r.length) && l && o[1](t.ev_type), !1)
                    }
                },
                Wi = {
                    build: function(t) {
                        return {
                            ev_type: t.ev_type,
                            payload: t.payload,
                            common: hi(hi({}, t.extra || {}), t.overrides || {})
                        }
                    }
                },
                Yi = function(t) {
                    var e, n = t,
                        r = {},
                        o = gi,
                        i = gi;
                    return {
                        getConfig: function() {
                            return n
                        },
                        setConfig: function(a) {
                            var u;
                            return r = hi(hi({}, r), a || {}), (u = hi(hi({}, t), r)).sample = function(t, e) {
                                if (!t || !e) return t || e;
                                var n = hi(hi({}, t), e);
                                return n.include_users = yi(yi([], vi(t.include_users || []), !1), vi(e.include_users || []), !1), n.rules = yi(yi([], vi(Object.keys(t.rules || {})), !1), vi(Object.keys(e.rules || {})), !1).reduce((function(n, r) {
                                    var o, i;
                                    return r in n || (r in (t.rules || {}) && r in (e.rules || {}) ? (n[r] = hi(hi({}, t.rules[r]), e.rules[r]), n[r].conditional_sample_rules = yi(yi([], vi(t.rules[r].conditional_sample_rules || []), !1), vi(e.rules[r].conditional_sample_rules || []), !1)) : n[r] = (null === (o = t.rules) || void 0 === o ? void 0 : o[r]) || (null === (i = e.rules) || void 0 === i ? void 0 : i[r])), n
                                }), {}), n
                            }(t.sample, r.sample), n = u, i(), e || (e = a, o()), n
                        },
                        onChange: function(t) {
                            i = t
                        },
                        onReady: function(t) {
                            o = t, e && o()
                        }
                    }
                };
            var Xi = {
                sample_rate: 1,
                include_users: [],
                sample_granularity: "session",
                rules: {}
            };

            function Zi(t) {
                return hi({}, t)
            }

            function Qi(t) {
                return wi(t) && "bid" in t && "transport" in t
            }

            function $i(t) {
                return hi({}, t)
            }
            var ta = function(t) {
                    t.on("report", (function(e) {
                        return function(t, e) {
                            var n = {
                                url: "",
                                protocol: "",
                                domain: "",
                                path: "",
                                query: "",
                                timestamp: Date.now(),
                                sdk_version: e.version || "1.4.5",
                                sdk_name: e.name || "SDK_BASE"
                            };
                            return hi(hi({}, t), {
                                extra: hi(hi({}, n), t.extra || {})
                            })
                        }(e, t.config())
                    }))
                },
                ea = function(t) {
                    t.on("beforeBuild", (function(e) {
                        return function(t, e) {
                            var n = {};
                            return n.bid = e.bid, n.pid = e.pid, n.view_id = e.viewId, n.user_id = e.userId, n.device_id = e.deviceId, n.session_id = e.sessionId, n.release = e.release, n.env = e.env, hi(hi({}, t), {
                                extra: hi(hi({}, n), t.extra || {})
                            })
                        }(e, t.config())
                    }))
                };
            var na = function(t, e) {
                    return void 0 === e && (e = "/monitor_browser/collect/batch/"), (t && t.indexOf("//") >= 0 ? "" : "https://") + t + e
                },
                ra = function(t) {
                    return {
                        bid: "",
                        pid: "",
                        viewId: (e = "_", e + "_" + Date.now()),
                        userId: Ki(),
                        deviceId: Ki(),
                        sessionId: Ki(),
                        domain: "mon-va.byteoversea.com",
                        release: "",
                        env: "production",
                        sample: Xi,
                        plugins: {},
                        transport: {
                            get: gi,
                            post: gi
                        }
                    };
                    var e
                },
                oa = function(t) {
                    var e = void 0 === t ? {} : t,
                        n = e.createSender,
                        r = void 0 === n ? function(t) {
                            return function(t) {
                                return di(t)
                            }({
                                size: 20,
                                endpoint: na(t.domain),
                                transport: t.transport
                            })
                        } : n,
                        o = e.builder,
                        i = void 0 === o ? Wi : o,
                        a = e.createDefaultConfig,
                        u = Ni({
                            validateInitConfig: Qi,
                            initConfigNormalizer: Zi,
                            userConfigNormalizer: $i,
                            createSender: r,
                            builder: i,
                            createDefaultConfig: void 0 === a ? ra : a,
                            createConfigManager: Yi
                        });
                    return Mi(u), ea(u), ta(u),
                        function(t, e) {
                            t.on("init", (function() {
                                var n = [],
                                    r = function(r) {
                                        r.forEach((function(r) {
                                            var o = r.name;
                                            Si(n, o) || (n.push(o), r.setup(t), e && e(o, r.setup), t.destroyAgent.set(o, o, [function() {
                                                n = ji(n, o), r.tearDown && r.tearDown()
                                            }]))
                                        }))
                                    };
                                t.provide("applyIntegrations", r);
                                var o = t.config();
                                o && o.integrations && r(o.integrations)
                            }))
                        }(u), u
                },
                ia = function(t) {
                    void 0 === t && (t = {});
                    var e = oa(t);
                    return function(t) {
                        t.on("start", (function() {
                            var e = t.config(),
                                n = e.userId,
                                r = e.sample,
                                o = Vi(n, r, Ci, Di, [function() {
                                    t.destroy()
                                }, function(e) {
                                    t.destroyAgent.removeByEvType(e)
                                }]);
                            t.on("build", o)
                        }))
                    }(e), Gi(e), e
                };
            ia();
            var aa, ua = "va",
                ca = { in: "https://sgali-mcs.byteoversea.com",
                    ie: "https://sgali-mcs.byteoversea.com",
                    sg: "https://sgali-mcs.byteoversea.com",
                    va: "https://maliva-mcs.byteoversea.com",
                    tcpy: "https://mcs-sg.tiktok.com",
                    tcpy_in: "https://mcs-va-useast2a.tiktokv.com",
                    ttp: "https://mcs.tiktokw.us",
                    ttp2: "https://mcs.tiktokw.us"
                },
                sa = "s_v_web_id",
                fa = "/vc/setting",
                la = function(t) {
                    return -1 !== ["ttp", "tcpy"].indexOf(t) ? "/v1/list" : "/list"
                },
                pa = function(t) {
                    return -1 !== ["ttp", "tcpy"].indexOf(t) ? "/v1/user/webid" : "/webid"
                };
            ! function(t) {
                t[t.TIKTOK_NATIVE = 1180] = "TIKTOK_NATIVE", t[t.MUSICALLY_NATIVE = 1233] = "MUSICALLY_NATIVE", t[t.TIKTOK_LOGIN_WEB = 1459] = "TIKTOK_LOGIN_WEB", t[t.TIKTOK_LITE = 1340] = "TIKTOK_LITE", t[t.TIKTOK_MUSIC = 310024] = "TIKTOK_MUSIC", t[t.TIKTOK_OPEN_PLATFORM = 2471] = "TIKTOK_OPEN_PLATFORM", t[t.TIKTOK_LIVE_BACKSTAGE = 6849] = "TIKTOK_LIVE_BACKSTAGE", t[t.TIKTOK_SAFETY_ENFORCEMENT_TOOL = 326738] = "TIKTOK_SAFETY_ENFORCEMENT_TOOL", t[t.TIKTOK_ADS = 1583] = "TIKTOK_ADS", t[t.TIKTOK_SELLER_APP = 7743] = "TIKTOK_SELLER_APP", t[t.TIKTOK_MAGELLAN = 4068] = "TIKTOK_MAGELLAN", t[t.TIKTOK_MAGELLAN2 = 6556] = "TIKTOK_MAGELLAN2", t[t.TIKTOK_WEB = 1988] = "TIKTOK_WEB", t[t.TIKTOK_BIZ_CENTER = 2239] = "TIKTOK_BIZ_CENTER"
            }(aa || (aa = {}));
            var da = function(t) {
                    return {
                        aid: t.commonOptions.aid
                    }
                },
                ha = function() {
                    function t() {
                        this.isInit = !1, this.pid = "0", this.filename = ""
                    }
                    return t.prototype.init = function(t, e) {
                        if (!this.isInit) {
                            this.isInit = !0, this.pid = String(t.aid), this.browserSlardar = ia();
                            var n = {
                                transport: {
                                    get: function() {},
                                    post: function(t) {
                                        var n = t.url,
                                            r = t.data;
                                        e(n, JSON.parse(r))
                                    }
                                },
                                bid: "verify_center_va",
                                pid: this.pid,
                                release: "3.8.21-alpha.2",
                                env: ua,
                                sample: {
                                    sample_rate: 1,
                                    include_users: [],
                                    sample_granularity: "session",
                                    rules: {
                                        pageview: {
                                            enable: !0,
                                            sample_rate: .01
                                        },
                                        js_error: {
                                            enable: !0,
                                            sample_rate: 1
                                        },
                                        resource_error: {
                                            enable: !0,
                                            sample_rate: .01
                                        },
                                        http: {
                                            enable: !0,
                                            sample_rate: .01
                                        },
                                        resource: {
                                            enable: !0,
                                            sample_rate: .01
                                        }
                                    }
                                }
                            };
                            this.browserSlardar.init(n), this.browserSlardar.context.merge({
                                belong: "hotsdk"
                            })
                        }
                    }, t.prototype.start = function() {
                        var t = this;
                        this.browserSlardar.start(), this.reportPageview(), window.addEventListener("error", (function(e) {
                            var n, r;
                            "ErrorEvent" === (r = e, Object.prototype.toString.call(r).slice(8, -1)) && t.filename && e.filename === t.filename && t.reportJsError({
                                message: null == e ? void 0 : e.message,
                                stack: null === (n = null == e ? void 0 : e.error) || void 0 === n ? void 0 : n.stack,
                                filename: null == e ? void 0 : e.filename
                            })
                        }), !0)
                    }, t.prototype.destroy = function() {
                        this.browserSlardar.destroy()
                    }, t.prototype.reportPageview = function() {
                        this.browserSlardar.report({
                            ev_type: "pageview",
                            payload: {
                                pid: this.pid,
                                source: "init"
                            }
                        })
                    }, t.prototype.reportJsError = function(t) {
                        this.browserSlardar.report({
                            ev_type: "js_error",
                            payload: {
                                error: {
                                    name: "JS ERROR",
                                    message: t.message,
                                    stack: t.stack,
                                    filename: t.filename || this.filename
                                },
                                breadcrumbs: []
                            }
                        })
                    }, t.prototype.reportHttp = function(t) {
                        this.browserSlardar.report({
                            ev_type: "http",
                            payload: {
                                api: "xhr",
                                request: {
                                    method: t.method,
                                    url: t.url
                                },
                                response: {
                                    status: t.status,
                                    is_custom_error: !1,
                                    timestamp: Date.now()
                                },
                                duration: t.duration
                            }
                        })
                    }, t.prototype.reportResourceError = function(t) {
                        this.browserSlardar.report({
                            ev_type: "resource_error",
                            payload: {
                                type: "script",
                                url: t
                            }
                        })
                    }, t.prototype.reportResource = function(t) {
                        this.browserSlardar.report({
                            ev_type: "resource",
                            payload: {
                                entryType: "resource",
                                name: t.url,
                                duration: t.duration,
                                startTime: t.startTime
                            }
                        })
                    }, t.prototype.setFileName = function(t) {
                        this.filename = t
                    }, t
                }(),
                va = new ha,
                ya = function(t) {
                    var e = t.url,
                        n = t.method,
                        r = t.data,
                        o = t.config;
                    return new pi((function(i, a) {
                        var u = new XMLHttpRequest,
                            c = Date.now(),
                            s = function() {
                                -1 !== t.url.indexOf(fa) && va.reportHttp({
                                    url: e,
                                    method: n,
                                    duration: Date.now() - c,
                                    status: u.status
                                })
                            };
                        u.onreadystatechange = function() {
                            if (u.readyState === u.DONE) {
                                if (u.status >= 200 && u.status < 300) {
                                    var t = {},
                                        e = u.response || u.responseText,
                                        n = u.getResponseHeader("Content-Type") || u.getResponseHeader("content-type");
                                    if (n && -1 !== n.indexOf("application/json")) try {
                                        t = JSON.parse(e)
                                    } catch (r) {} else t = e;
                                    setTimeout((function() {
                                        i(t)
                                    }), 0)
                                } else a(new TypeError("Network request failed, status: " + u.status));
                                s()
                            }
                        }, u.onerror = function() {
                            setTimeout((function() {
                                a(new TypeError("Network request failed, occur error"))
                            }), 0), s()
                        }, u.ontimeout = function() {
                            setTimeout((function() {
                                a(new TypeError("Network request failed, timeout"))
                            }), 0), s()
                        }, u.onabort = function() {
                            setTimeout((function() {
                                a(new DOMException("Aborted", "AbortError"))
                            }), 0), s()
                        };
                        var f = e;
                        if ((null == o ? void 0 : o.params) && (f = f + "?" + function(t) {
                                for (var e = Object.keys(t), n = "", r = 0; r < e.length; r++) {
                                    var o = e[r],
                                        i = t[o],
                                        a = encodeURIComponent(o) + "=" + encodeURIComponent(i);
                                    n = r >= 1 ? n + "&" + a : a
                                }
                                return n
                            }(o.params)), u.open(n, f, !0), (null == o ? void 0 : o.timeout) && "number" == typeof o.timeout ? u.timeout = o.timeout : u.timeout = 5e3, null == o ? void 0 : o.headers)
                            for (var l = o.headers, p = 0, d = Object.keys(l); p < d.length; p++) {
                                var h = d[p];
                                u.setRequestHeader(h, l[h])
                            }(null == o ? void 0 : o.withCredentials) && (u.withCredentials = o.withCredentials), "POST" === n.toUpperCase() && r ? u.send(JSON.stringify(r)) : u.send(null)
                    }))
                },
                ma = function(t, e, n) {
                    void 0 === n && (n = {});
                    var o = n.headers ? r({
                        "Content-Type": "application/json"
                    }, n.headers) : {
                        "Content-Type": "application/json"
                    };
                    return ya({
                        url: t,
                        method: "POST",
                        data: e,
                        config: r(r({}, n), {
                            headers: o
                        })
                    })
                },
                ga = i((function(t, e) {
                    var n;
                    n = function() {
                        function t() {
                            for (var t = 0, e = {}; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) e[r] = n[r]
                            }
                            return e
                        }

                        function e(t) {
                            return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                        }
                        return function n(r) {
                            function o() {}

                            function i(e, n, i) {
                                if ("undefined" != typeof document) {
                                    "number" == typeof(i = t({
                                        path: "/"
                                    }, o.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : "";
                                    try {
                                        var a = JSON.stringify(n);
                                        /^[\{\[]/.test(a) && (n = a)
                                    } catch (s) {}
                                    n = r.write ? r.write(n, e) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                                    var u = "";
                                    for (var c in i) i[c] && (u += "; " + c, !0 !== i[c] && (u += "=" + i[c].split(";")[0]));
                                    return document.cookie = e + "=" + n + u
                                }
                            }

                            function a(t, n) {
                                if ("undefined" != typeof document) {
                                    for (var o = {}, i = document.cookie ? document.cookie.split("; ") : [], a = 0; a < i.length; a++) {
                                        var u = i[a].split("="),
                                            c = u.slice(1).join("=");
                                        n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                                        try {
                                            var s = e(u[0]);
                                            if (c = (r.read || r)(c, s) || e(c), n) try {
                                                c = JSON.parse(c)
                                            } catch (f) {}
                                            if (o[s] = c, t === s) break
                                        } catch (f) {}
                                    }
                                    return t ? o[t] : o
                                }
                            }
                            return o.set = i, o.get = function(t) {
                                return a(t, !1)
                            }, o.getJSON = function(t) {
                                return a(t, !0)
                            }, o.remove = function(e, n) {
                                i(e, "", t(n, {
                                    expires: -1
                                }))
                            }, o.defaults = {}, o.withConverter = n, o
                        }((function() {}))
                    }, t.exports = n()
                }));

            function ba(t) {
                t = "object" == typeof t ? t : {};
                var e = function() {
                        var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                            e = t.length,
                            n = Date.now().toString(36),
                            r = [];
                        r[8] = r[13] = r[18] = r[23] = "_", r[14] = "4";
                        for (var o = 0, i = void 0; o < 36; o++) r[o] || (i = 0 | Math.random() * e, r[o] = t[19 == o ? 3 & i | 8 : i]);
                        return "verify_" + n + "_" + r.join("")
                    }(),
                    n = {
                        path: "/"
                    };
                return t.domain && /^([a-z0-9-]+)?(\.[a-z0-9-]+)+$/.test(t.domain) && (n.domain = t.domain), ga.set(sa, e, n), e
            }
            var wa = function(t) {
                    void 0 === t && (t = {});
                    var e = function(t) {
                        void 0 === t && (t = {});
                        var e = ga.get(sa);
                        return e && 0 === e.indexOf("verify_") || (e = ba(t)), e
                    }(t);
                    return e
                },
                _a = function(t, e) {
                    return ma("" + (t || "https://vcs-va.tiktokv.com") + fa + "?aid=" + (null == e ? void 0 : e.aid), {}, {
                        headers: {
                            "X-Setting-Flag": 1
                        }
                    })
                },
                Ta = function() {
                    function t() {
                        this.fetchWebId = null, this.channelType = "", this.isInit = !1, this.conf = {
                            app_id: 0,
                            evtParams: {}
                        }
                    }
                    return t.prototype.init = function(t, e) {
                        var n;
                        (void 0 === e && (e = {}), this.isInit) || (this.isInit = !0, this.conf.app_id = "cn" === t.region ? 2018 : 2740, this.conf.evtParams = r(r({}, e), {
                            webdriver: "undefined",
                            isScheduling: "false",
                            product_host: window.location.host,
                            product_path: window.location.hostname,
                            type: 2,
                            aid: t.aid
                        }), n = t.aid, Object.values(aa).filter((function(t) {
                            return "number" == typeof t
                        })).includes(n) ? this.channelType = "tcpy" : this.channelType = ua)
                    }, t.prototype.getTeaWebId = function() {
                        return this.fetchWebId || (this.fetchWebId = function(t, e) {
                            var n = ca[e],
                                r = pa(e);
                            return ma("" + n + r, {
                                app_id: t,
                                referer: document.referrer,
                                url: window.location.href,
                                user_agent: window.navigator.userAgent,
                                user_unique_id: ""
                            }).then((function(t) {
                                return t.web_id
                            }))
                        }(this.conf.app_id, this.channelType)), this.fetchWebId
                    }, t.prototype.trackEvent = function(t, e) {
                        var n = this;
                        void 0 === e && (e = {}), this.getTeaWebId().then((function(o) {
                            var i = [{
                                events: [{
                                    event: "turing_verify_sdk",
                                    is_bav: 0,
                                    local_time_ms: Date.now(),
                                    params: JSON.stringify(r(r(r({}, n.conf.evtParams), e), {
                                        key: "h5_" + t,
                                        time: Date.now()
                                    }))
                                }],
                                local_time: Math.floor(Date.now() / 1e3),
                                header: {
                                    app_id: n.conf.app_id,
                                    referrer: document.referrer,
                                    platform: "web",
                                    sdk_lib: "js",
                                    sdk_version: "0.0.0"
                                },
                                user: {
                                    user_unique_id: o,
                                    web_id: o
                                }
                            }];
                            n.sendEvents(i)
                        })).catch((function(t) {
                            console.log("err: ", t)
                        }))
                    }, t.prototype.sendEvents = function(t) {
                        (function(t, e) {
                            var n = ca[e],
                                r = la(e);
                            return ma("" + n + r, t)
                        })(t, this.channelType).catch((function(t) {
                            console.log("report err: ", t)
                        }))
                    }, t
                }(),
                Oa = new Ta,
                Ea = {
                    back_up_js_v2: {
                        va: []
                    },
                    js_v2: {
                        va: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/bric-captcha-ttweb/core-captcha/va/2.32.1/1.0.0.162/captcha.js"
                    }
                },
                Sa = {},
                ja = {
                    executor: "Function",
                    static_domain: "",
                    settingHost: ""
                },
                Ia = {
                    aid: 1e5
                },
                Aa = function(t, e, n, r) {
                    va.setFileName(t);
                    var o, i = Date.now(),
                        a = pi.resolve({});
                    return a = "script" === e ? (o = t, new pi((function(t, e) {
                        var n = document.getElementsByTagName("head")[0],
                            r = document.createElement("script");
                        r.setAttribute("crossorigin", "anonymous"), r.setAttribute("src", o), n.appendChild(r);
                        var i = setTimeout((function() {
                            e(new Error("LoadJSSDKMoreTan4000ms"))
                        }), 4e3);
                        r.onload = function() {
                            clearTimeout(i), t(0)
                        }, r.onerror = function() {
                            clearTimeout(i), e(new Error("Failed to load SDK!"))
                        }
                    }))).then((function() {
                        return window.verifySDK
                    })) : function(t, e) {
                        return void 0 === e && (e = {}), ya({
                            url: t,
                            method: "GET",
                            config: e
                        })
                    }(t, {
                        timeout: 2e4
                    }).then((function(t) {
                        if (n && r && n !== r) {
                            var e = new RegExp(n, "g");
                            t = t.replace(e, r)
                        }
                        var o = function(t) {
                            var e = {
                                    exports: {}
                                },
                                n = new Function("exports", "module", t);
                            try {
                                n(e.exports, e)
                            } catch (r) {
                                va.reportJsError({
                                    message: null == r ? void 0 : r.message,
                                    stack: null == r ? void 0 : r.stack,
                                    filename: null == r ? void 0 : r.filename
                                })
                            }
                            return e
                        }(t);
                        return o.exports
                    })), a.then((function(e) {
                        return va.reportResource({
                            url: t,
                            startTime: Date.now(),
                            duration: Date.now() - i
                        }), e
                    })).catch((function(e) {
                        return va.reportResourceError(t), pi.reject(e)
                    }))
                },
                xa = function() {
                    function t() {}
                    return t.get = function(e) {
                        return 0 !== t.status && 3 !== t.status || (t.status = 1, t.core = function(t) {
                            var e = Date.now();
                            return _a(ja.settingHost, t).catch((function() {
                                return _a(ja.settingHost, t)
                            })).then((function(t) {
                                var n, r;
                                return Oa.trackEvent("hotsdk_getsetting", {
                                    is_success: 1,
                                    duration: Date.now() - e,
                                    message: ""
                                }), (null === (r = null === (n = null == t ? void 0 : t.verify) || void 0 === n ? void 0 : n.js_v2) || void 0 === r ? void 0 : r[ua]) ? t.verify : Ea
                            })).catch((function(t) {
                                return Oa.trackEvent("hotsdk_getsetting", {
                                    is_success: 0,
                                    duration: Date.now() - e,
                                    message: null == t ? void 0 : t.message
                                }), Ea
                            }))
                        }(e).then((function(e) {
                            var n, r, o, i = null === (n = e.js_v2) || void 0 === n ? void 0 : n[ua],
                                a = (null === (r = e.back_up_js_v2) || void 0 === r ? void 0 : r[ua]) || [],
                                u = null === (o = i.match(/\/\/([\w-]+(\.[\w-]+)+)/)) || void 0 === o ? void 0 : o[1];
                            ja.static_domain = "";
                            var c = [i].concat(a);
                            return new pi((function(e, n) {
                                var r = function() {
                                    var o, i = c.shift(),
                                        a = null === (o = i.match(/\/\/([\w-]+(\.[\w-]+)+)/)) || void 0 === o ? void 0 : o[1];
                                    Aa(i, ja.executor, u, a).then((function(n) {
                                        e(n), t.status = 2, Oa.trackEvent("hotsdk_loadscript", {
                                            is_success: 1
                                        })
                                    })).catch((function(e) {
                                        c.length ? r() : (n(e), t.status = 3, Oa.trackEvent("hotsdk_loadscript", {
                                            is_success: 0
                                        }))
                                    }))
                                };
                                r()
                            }))
                        })).catch((function(t) {
                            return pi.reject(t)
                        }))), t.core
                    }, t.status = 0, t
                }(),
                Pa = function(t) {
                    t.static_domain && (ja.static_domain = t.static_domain), t.settingHost && (ja.settingHost = t.settingHost), t.executor && (ja.executor = t.executor)
                },
                Ra = function(t, e, n) {
                    void 0 === e && (e = function() {}), void 0 === n && (n = function() {});
                    var o = da(t);
                    Object.assign(Ia, o), Oa.init(r(r({}, o), {
                        region: ua
                    })), va.init(o, ma), va.start(), xa.get(o).then((function(n) {
                        var o;
                        Object.assign(Sa, r(r({}, t), {
                            captchaOptions: r(r({}, t.captchaOptions), {
                                h5_check_version: (null === (o = t.captchaOptions) || void 0 === o ? void 0 : o.closeDecisionCheck) ? "0.0.0" : "3.8.21-alpha.2"
                            })
                        })), null == n || n.initVerifyOptions(Sa), e(n)
                    })).catch((function(t) {
                        var e;
                        n({
                            type: "loadJSSDK",
                            msg: null !== (e = null == t ? void 0 : t.message) && void 0 !== e ? e : ""
                        })
                    }))
                },
                ka = function(t) {
                    xa.get(Ia).then((function(e) {
                        null == e || e.autoRender(t)
                    })).catch((function(t) {
                        console.log("err: ", t)
                    }))
                },
                Ca = function() {
                    xa.get(Ia).then((function(t) {
                        null == t || t.closeCaptcha()
                    }))
                },
                Da = function() {
                    var t, e, n = (null === (t = null == Sa ? void 0 : Sa.captchaOptions) || void 0 === t ? void 0 : t.fp) || ga.get(sa) || "" || wa(null === (e = null == Sa ? void 0 : Sa.captchaOptions) || void 0 === e ? void 0 : e.fpCookieOption);
                    return pi.resolve(n)
                },
                La = function() {
                    function t() {}
                    return t.config = function(t) {
                        Pa(t)
                    }, t.init = function(t, e, n) {
                        var o = da(t);
                        return Oa.init(r(r({}, o), {
                            region: ua
                        })), va.init(o, ma), va.start(), xa.get(o).then((function(n) {
                            var o;
                            Object.assign(Sa, r(r({}, t), {
                                captchaOptions: r(r({}, t.captchaOptions), {
                                    h5_check_version: (null === (o = t.captchaOptions) || void 0 === o ? void 0 : o.closeDecisionCheck) ? "0.0.0" : "3.8.21-alpha.2"
                                })
                            }));
                            var i = n.initVerifyCenter(Sa);
                            if (!e) return i;
                            e(i)
                        })).catch((function(t) {
                            if (!n) return pi.reject(t);
                            n(t)
                        }))
                    }, t
                }(),
                Ka = function(t) {
                    var e = {
                        code: "10000",
                        from: "",
                        type: "verify",
                        version: "1",
                        region: ua,
                        subtype: "",
                        verify_event: "",
                        fp: "",
                        detail: ""
                    };
                    return e.subtype = 3059 === t ? "text" : 3060 === t ? "3d" : 99996 === t ? "whirl" : "slide", JSON.stringify(e)
                }
        }
    }
]);