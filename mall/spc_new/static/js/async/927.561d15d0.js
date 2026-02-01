(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [927], {
        631: (e, t, s) => {
            "use strict";
            s.d(t, {
                nr: () => m,
                Bc: () => u,
                b: () => p,
                vF: () => d
            });
            var i = s(12697),
                a = s(53813),
                r = s(6029);
            const l = {
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
            class n {
                constructor({
                    region: e,
                    page_name: t
                }) {
                    (0, a.A)(this, "tea", void 0), (0, a.A)(this, "commonParams", void 0);
                    const i = s(8806).A;
                    i.init({
                        app_id: parseInt(4068),
                        channel: l[e] || "sg",
                        enable_ab_test: !0,
                        ab_channel_domain: "https://libraweb-va.tiktok.com"
                    }), i.start(), this.tea = i, this.commonParams = {
                        EVENT_ORIGIN_FEATURE: "TEMAI",
                        region: r.Vc[e],
                        page_name: r.O0[t]
                    }
                }
                send(e, t) {
                    this.tea(e, (0, i.A)((0, i.A)({}, this.commonParams), t))
                }
                config(e) {
                    this.tea.config({
                        evtParams: (0, i.A)({}, e)
                    })
                }
                getLibraVars(e, t, s) {
                    this.tea.getVar(e, t, s)
                }
            }
            var c = s(41471);
            class o extends n {
                constructor(e) {
                    super(e), (0, a.A)(this, "source_page", void 0), (0, a.A)(this, "cur_url_pathname", void 0), (0, a.A)(this, "pageStartTime", void 0);
                    const {
                        source_page: t = ""
                    } = (0, c.xh)();
                    this.source_page = t, this.cur_url_pathname = location.href, this.pageStartTime = Date.now()
                }
                sendPageShow(e) {
                    this.send(r.JW, (0, i.A)((0, i.A)({}, e), {}, {
                        source_page: this.source_page,
                        cur_url_pathname: this.cur_url_pathname
                    }))
                }
                sendButtonClick(e) {
                    this.send(r.Tx, e)
                }
                sendModuleDuration(e) {
                    this.send(r.NG, e)
                }
                sendPageDuration(e) {
                    this.send(r.KE, e)
                }
            }
            let d;
            const p = e => {
                    if ("undefined" == typeof window) return;
                    let t, s;
                    d = new o(e), d.sendPageShow({
                        type: "page",
                        page_type: "page",
                        page_name: r.O0[e.page_name]
                    }), void 0 !== document.hidden ? (t = "hidden", s = "visibilitychange") : void 0 !== document.msHidden ? (t = "msHidden", s = "msvisibilitychange") : void 0 !== document.webkitHidden && (t = "webkitHidden", s = "webkitvisibilitychange"), void 0 === document.addEventListener || void 0 === t || void 0 === document[t] ? console.warn("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.") : s && document.addEventListener(s, (function() {
                        const e = Date.now();
                        document[t] ? d.sendPageDuration({
                            duration: "" + (e - d.pageStartTime)
                        }) : d.pageStartTime = e
                    }), !1)
                },
                m = e => {
                    var t;
                    return (0, c.FP)({
                        chain: (0, c.FP)({
                            referrer: "undefined" == typeof window ? "" : document.referrer || ""
                        }, {
                            Url: "undefined" == typeof window ? "" : location.href
                        }),
                        prev_page_name: (null === (t = d) || void 0 === t || null === (t = t.commonParams) || void 0 === t ? void 0 : t.page_name) || ""
                    }, {
                        Url: e
                    })
                };

            function u(e, t) {
                var s, i, a;
                const {
                    query: r = {},
                    referer: l
                } = t, n = (0, c.FP)(l ? {
                    referrer: l
                } : {}, {
                    Url: t.url
                }), o = null === (s = d) || void 0 === s || null === (s = s.commonParams) || void 0 === s ? void 0 : s.page_name, p = null !== (i = r.channel) && void 0 !== i ? i : r.register_channel, m = null !== (a = r.register_referrer) && void 0 !== a ? a : l, u = (x = {
                    chain: n,
                    prev_page_name: o,
                    channel: p,
                    register_referrer: m
                }, Object.keys(x).filter((e => void 0 !== x[e] && "" !== x[e])).reduce(((e, t) => (e[t] = x[t], e)), {}));
                var x;
                return (0, c.FP)(u, {
                    Url: e
                })
            }
        },
        6029: (e, t, s) => {
            "use strict";
            s.d(t, {
                JW: () => r,
                KE: () => n,
                NG: () => c,
                O0: () => i,
                Tx: () => l,
                Vc: () => a
            });
            const i = {
                    merchant: "tts_merchants_main_page",
                    business: "tts_portal",
                    seller: "tts_portal_seller_page",
                    affiliate: "tts_portal_affiliate_page",
                    creator: "tts_portal_creators_page",
                    partner: "tts_portal_partners_page",
                    "outstanding-partners": "tts_portal_outstanding_partners",
                    "privacy-policy": "tts_portal_privacy_policy_page",
                    newsroom_page: "tts_portal_blog",
                    newsroom_detail_page: "tts_portal_blog_content",
                    partner_creator_agency: "tts_portal_partner_creator_agency",
                    create_shop: "tts_portal_create_shop",
                    manage_shop: "tts_portal_manage_shop",
                    partner_with_creator: "tts_portal_partner_with_creator",
                    start_selling: "tts_portal_start_selling",
                    promote_products: "tts_portal_promote_products",
                    live: "tts_portal_live",
                    shopify: "tts_portal_shopify"
                },
                a = {
                    zh: "CHINA",
                    id: "ID",
                    en: "GB",
                    th: "TH",
                    my: "MY",
                    ph: "PH",
                    vn: "VN",
                    sg: "SG",
                    us: "US"
                },
                r = "page_show",
                l = "button_click",
                n = "page_duration",
                c = "module_duration"
        },
        14058: () => {},
        19541: (e, t, s) => {
            "use strict";
            s.d(t, {
                s: () => r
            });
            var i = s(4255),
                a = s(65318);
            const r = () => {
                const {
                    t: e,
                    i18n: t
                } = (0, i.B)(), {
                    region: s
                } = (0, a.A)(), r = "id" === s;
                return {
                    t: t => {
                        if (!t) return "";
                        let s = e(t) || t;
                        if (r) {
                            const i = `${t}_ID`,
                                a = e(i);
                            a !== i && (s = a)
                        }
                        return s
                    }
                }
            }
        },
        20790: (e, t, s) => {
            "use strict";
            s.d(t, {
                l: () => r
            });
            s(11855);
            var i = s(69428),
                a = s(63159);
            const r = e => {
                const {
                    title: t,
                    description: s,
                    keywords: r
                } = e;
                return (0, a.jsxs)(i.m, {
                    children: [t && (0, a.jsx)("title", {
                        children: t
                    }), s && (0, a.jsx)("meta", {
                        name: "description",
                        content: s
                    }), r && (0, a.jsx)("meta", {
                        name: "keywords",
                        content: r
                    })]
                })
            }
        },
        27652: (e, t, s) => {
            "use strict";
            s.d(t, {
                I: () => d
            });
            var i = s(81842),
                a = s.n(i),
                r = s(11855),
                l = {
                    container: "container-UrOhVk",
                    "gap-1": "gap-1-fGAxIx",
                    gap1: "gap-1-fGAxIx",
                    "gap-3": "gap-3-S2WOLO",
                    gap3: "gap-3-S2WOLO",
                    "gap-2": "gap-2-uXbRGU",
                    gap2: "gap-2-uXbRGU"
                },
                n = {
                    title: "title-cNW2lt",
                    description: "description-qRd9XJ"
                },
                c = s(63159);

            function o(e) {
                return (0, c.jsxs)("div", {
                    className: e.className,
                    children: [(0, c.jsx)("div", {
                        className: a()("font-bold text-center", n.title),
                        children: e.title
                    }), e.description && (0, c.jsx)("div", {
                        className: a()("text-center mt-24", n.description),
                        children: e.description
                    })]
                })
            }

            function d(e) {
                const t = (0, r.useRef)(null);
                return (0, r.useEffect)((() => {
                    t.current && t.current.style.setProperty("--container-max-width", void 0 !== e.maxWidth ? e.maxWidth + "px" : "1280px")
                }), []), (0, c.jsx)("div", {
                    ref: t,
                    className: "flex flex-col items-center w-full",
                    children: (0, c.jsxs)("div", {
                        className: a()("flex flex-col items-center", l.container, "48-48" === e.gap ? l["gap-1"] : "64-48" === e.gap ? l["gap-2"] : l["gap-3"]),
                        children: [(0, c.jsx)(o, {
                            className: l.title,
                            title: e.title,
                            description: e.description
                        }), e.children]
                    })
                })
            }
        },
        28842: (e, t, s) => {
            "use strict";
            s.d(t, {
                b: () => l
            });
            var i = s(81842),
                a = s.n(i),
                r = (s(11855), s(63159));

            function l(e) {
                const {
                    type: t = "1"
                } = e;
                return (0, r.jsx)("div", {
                    className: a()("1" === t ? "h-48 px-24 py-12 flex items-center rounded-4 cursor-pointer bg-brand-red w-fit text-brand-white text-lg font-bold hover:bg-[#ff4a6e]" : "h-36 px-16 py-8 w-fit flex items-center rounded-4 cursor-pointer border-[1.5px] hover:bg-[#ff4a6e] border-brand-red hover:border-[#ff4a6e] text-brand-red hover:text-brand-white text-base font-semibold", e.className),
                    onClick: e.onClick,
                    children: e.text
                })
            }
        },
        35018: (e, t, s) => {
            "use strict";
            s.d(t, {
                k: () => r
            });
            var i = s(11855),
                a = s(63159);
            const r = e => {
                const t = e.convertPlaceholders ? function(e) {
                        let t = 0;
                        return e.replace(/{{(.*?)}}/g, (() => (t += 1, `%${t}$s`)))
                    }(e.content) : e.content,
                    s = e.children && i.Children.toArray(e.children),
                    r = s ? null == t ? void 0 : t.split(/(%\d+\$[ds]|%[ds])/g).map((e => {
                        let t = /%(\d+)\$[ds]/.exec(e);
                        if (t) {
                            const e = parseInt(t[1], 10) - 1;
                            return s[e]
                        }
                        return t = /%[ds]/.exec(e), t ? s[0] : /\\n|<br\/>|\n/.test(e) ? e.split(/\\n|<br\/>|\n/).map(((e, t) => (0, a.jsxs)(i.Fragment, {
                            children: [t > 0 && (0, a.jsx)("div", {
                                children: (0, a.jsx)("br", {})
                            }), e]
                        }, t))) : e
                    })) : t;
                return e.noWrapper ? (0, a.jsx)(a.Fragment, {
                    children: r
                }) : (0, a.jsx)("span", {
                    className: e.className,
                    style: e.style,
                    children: r
                })
            }
        },
        35084: (e, t, s) => {
            "use strict";
            s.d(t, {
                w: () => o
            });
            var i = s(12697),
                a = s(65318),
                r = s(53302),
                l = s(50259),
                n = s(20244),
                c = (s(11855), s(63159));

            function o() {
                const {
                    region: e,
                    language: t
                } = (0, a.A)();
                return (0, c.jsx)("footer", {
                    children: (0, c.jsx)(r.C, {
                        region: e,
                        config: (0, i.A)((0, i.A)({}, l.t[e]), {}, {
                            switchSite: null
                        }),
                        lang: t,
                        globalVars: {
                            [n.j.SellerChannel]: "portal_footer"
                        }
                    })
                })
            }
        },
        41471: (e, t, s) => {
            "use strict";
            s.d(t, {
                FP: () => l,
                xh: () => r
            });
            var i = s(47324);

            function a() {
                return "undefined" != typeof window && window.location ? window.location.search : ""
            }(0, i.parse)(a().slice(1));
            const r = e => (0, i.parse)(a().slice(1), e),
                l = (e, t) => {
                    var s;
                    const a = (null !== (s = null == t ? void 0 : t.Url) && void 0 !== s ? s : "").split("?"),
                        r = a[0],
                        l = a[1],
                        n = JSON.parse(JSON.stringify(e)),
                        c = Object.keys(n);
                    if (0 !== c.length && c.forEach((e => {
                            if (n[e]) {
                                "[object Object]" === Object.prototype.toString.call(n[e]) && (n[e] = JSON.stringify(n[e]))
                            }
                        })), l) {
                        const e = null != l ? l : "";
                        Object.assign(n, (0, i.parse)(e, {
                            ignoreQueryPrefix: !0
                        }))
                    }
                    return `${null!=r?r:""}${(0,i.stringify)(n,{addQueryPrefix:!0})}`
                }
        },
        68089: (e, t, s) => {
            "use strict";
            s.d(t, {
                HV: () => y,
                $U: () => v,
                no: () => g,
                u2: () => f
            });
            var i = s(12697),
                a = s(76371),
                r = s(28842),
                l = s(27652),
                n = s(81842),
                c = s.n(n),
                o = (s(11855), {
                    "gap-1": "gap-1-ku25SO",
                    gap1: "gap-1-ku25SO",
                    list: "list-mPre6B",
                    "gap-2": "gap-2-EDQcHM",
                    gap2: "gap-2-EDQcHM",
                    "gap-3": "gap-3-_r4_BZ",
                    gap3: "gap-3-_r4_BZ"
                }),
                d = s(63159);

            function p(e) {
                return (0, d.jsx)("div", {
                    className: c()(o.list, "48-48" === e.gap ? o["gap-1"] : "64-48" === e.gap ? o["gap-2"] : o["gap-3"], e.className),
                    children: e.children
                })
            }
            var m = s(99554),
                u = {
                    "item-type-1-title": "item-type-1-title-BzXg7c",
                    itemType1Title: "item-type-1-title-BzXg7c",
                    "item-type-1-image": "item-type-1-image-fFmmD0",
                    itemType1Image: "item-type-1-image-fFmmD0",
                    "item-type-1-container": "item-type-1-container-gK_uFk",
                    itemType1Container: "item-type-1-container-gK_uFk",
                    "item-type-2-image": "item-type-2-image-wXbcZU",
                    itemType2Image: "item-type-2-image-wXbcZU",
                    "item-type-3-image": "item-type-3-image-QMt4dx",
                    itemType3Image: "item-type-3-image-QMt4dx",
                    "item-type-3-tooltip": "item-type-3-tooltip-ZAl1_y",
                    itemType3Tooltip: "item-type-3-tooltip-ZAl1_y",
                    "item-type-4-image-2": "item-type-4-image-2-unBoaf",
                    itemType4Image2: "item-type-4-image-2-unBoaf",
                    "item-type-4-title": "item-type-4-title-vkxViE",
                    itemType4Title: "item-type-4-title-vkxViE",
                    "item-type-4-image-1": "item-type-4-image-1-JMMIo4",
                    itemType4Image1: "item-type-4-image-1-JMMIo4",
                    "item-type-5-title": "item-type-5-title-BfbbqO",
                    itemType5Title: "item-type-5-title-BfbbqO",
                    "item-type-5-image": "item-type-5-image-Re6fKX",
                    itemType5Image: "item-type-5-image-Re6fKX",
                    "item-type-a-resource": "item-type-a-resource-EjJFVQ",
                    itemTypeAResource: "item-type-a-resource-EjJFVQ",
                    "item-type-a-container": "item-type-a-container-n7v9jq",
                    itemTypeAContainer: "item-type-a-container-n7v9jq",
                    "item-type-a-reverse": "item-type-a-reverse-UFkffl",
                    itemTypeAReverse: "item-type-a-reverse-UFkffl",
                    "item-type-a-container-1": "item-type-a-container-1-KdWt0E",
                    itemTypeAContainer1: "item-type-a-container-1-KdWt0E",
                    "item-type-a-title": "item-type-a-title-TDG_mG",
                    itemTypeATitle: "item-type-a-title-TDG_mG",
                    "item-type-a-container-2": "item-type-a-container-2-S7qfgT",
                    itemTypeAContainer2: "item-type-a-container-2-S7qfgT",
                    "item-type-6-footer": "item-type-6-footer-Jaierv",
                    itemType6Footer: "item-type-6-footer-Jaierv",
                    "type-8-content": "type-8-content-D6uaIZ",
                    type8Content: "type-8-content-D6uaIZ",
                    "type-8-icon": "type-8-icon-QEg1AY",
                    type8Icon: "type-8-icon-QEg1AY",
                    "type-8-image": "type-8-image-dYnwwo",
                    type8Image: "type-8-image-dYnwwo",
                    "type-8-item": "type-8-item-NBpeCD",
                    type8Item: "type-8-item-NBpeCD",
                    "type-8-name": "type-8-name-iXqIWC",
                    type8Name: "type-8-name-iXqIWC",
                    "type-9-container": "type-9-container-hxnfch",
                    type9Container: "type-9-container-hxnfch",
                    "type-9-container-1": "type-9-container-1-XBTpOq",
                    type9Container1: "type-9-container-1-XBTpOq",
                    "type-9-title": "type-9-title-LJL9Qy",
                    type9Title: "type-9-title-LJL9Qy",
                    "type-9-list": "type-9-list-L1BlNu",
                    type9List: "type-9-list-L1BlNu",
                    "type-9-cta": "type-9-cta-A1JgJa",
                    type9Cta: "type-9-cta-A1JgJa",
                    "type-9-description": "type-9-description-fuekBs",
                    type9Description: "type-9-description-fuekBs",
                    "type-11-container": "type-11-container-IJ690m",
                    type11Container: "type-11-container-IJ690m"
                };
            const x = {
                1: function(e) {
                    return (0, d.jsx)("div", {
                        className: c()("flex-1 cursor-pointer", u["item-type-1-container"]),
                        onClick: e.onClick,
                        children: (0, d.jsxs)("figure", {
                            className: "table",
                            children: [(0, d.jsx)("img", {
                                className: c()("rounded-8 mb-24 object-contain", u["item-type-1-image"]),
                                src: e.image
                            }), (0, d.jsx)("figcaption", {
                                className: c()("font-bold table-caption caption-bottom", u["item-type-1-title"]),
                                children: e.title
                            })]
                        })
                    })
                },
                2: function(e) {
                    return (0, d.jsxs)("div", {
                        className: "flex-1 flex flex-col",
                        children: [(0, d.jsx)("div", {
                            className: "font-bold text-2xl mb-8",
                            children: e.title
                        }), (0, d.jsx)("div", {
                            className: "text-base mb-16",
                            children: e.description
                        }), (0, d.jsx)("img", {
                            className: c()("rounded-[12px]", u["item-type-2-image"]),
                            src: e.image
                        })]
                    })
                },
                3: function(e) {
                    return (0, d.jsxs)("div", {
                        className: "flex-1 flex flex-col items-center space-y-16",
                        children: [(0, d.jsx)("img", {
                            className: c()("rounded-8", u["item-type-3-image"]),
                            src: e.image
                        }), (0, d.jsx)("div", {
                            className: "font-bold text-2xl text-center",
                            children: e.title
                        }), (0, d.jsx)("div", {
                            className: "text-base text-center",
                            children: e.description
                        }), e.tooltip && (0, d.jsx)(m.m, {
                            title: e.tooltip.title,
                            content: e.tooltip.content,
                            position: "bottom"
                        })]
                    })
                },
                4: function(e) {
                    const t = e.image.type;
                    return (0, d.jsxs)("div", {
                        className: "flex-1 p-24 rounded-16 border border-neutral-line2 hover:bg-brand-black hover:text-brand-white transition-all",
                        children: [(0, d.jsx)("div", {
                            className: c()("rounded-8 w-full flex justify-center mb-24", {
                                "bg-brand-black": "1" === t
                            }),
                            children: (0, d.jsx)("img", {
                                className: c()("rounded-8 object-contain", "1" === t ? u["item-type-4-image-1"] : u["item-type-4-image-2"]),
                                src: e.image.src
                            })
                        }), (0, d.jsx)("div", {
                            className: c()("font-bold", u["item-type-4-title"]),
                            children: e.title
                        }), e.description && (0, d.jsx)("div", {
                            className: "mt-8 text-lg",
                            children: e.description
                        })]
                    })
                },
                5: function(e) {
                    return (0, d.jsxs)("div", {
                        className: "flex-1",
                        children: [(0, d.jsx)("img", {
                            className: c()("rounded-8 mx-auto mb-24 object-contain", u["item-type-5-image"]),
                            src: e.image
                        }), (0, d.jsx)("div", {
                            className: c()("font-bold", u["item-type-5-title"]),
                            children: e.title
                        }), (0, d.jsx)("div", {
                            className: "my-16 text-base",
                            children: e.description
                        }), (0, d.jsx)("div", {
                            className: "h-36 rounded-4 border-[1.5px] border-brand-red text-brand-red font-bold text-base px-16 py-8 cursor-pointer w-fit hover:bg-brand-red hover:text-brand-white flex items-center",
                            onClick: e.onClick,
                            children: e.cta
                        })]
                    })
                },
                6: function(e) {
                    return (0, d.jsx)(h, {
                        title: e.title,
                        description: (0, d.jsxs)("div", {
                            className: "space-y-16",
                            children: [(0, d.jsx)("div", {
                                className: "text-lg",
                                children: e.description
                            }), (0, d.jsx)("div", {
                                className: c()("text-neutral-text3", u["item-type-6-footer"]),
                                children: e.footer
                            })]
                        }),
                        resource: e.resource,
                        reverse: e.reverse
                    })
                },
                7: function(e) {
                    return (0, d.jsx)(h, {
                        title: e.title,
                        description: (0, d.jsxs)("div", {
                            className: "space-y-16",
                            children: [(0, d.jsx)("div", {
                                className: "text-lg",
                                children: e.description
                            }), e.list && e.list.map(((e, t) => (0, d.jsxs)("div", {
                                children: [(0, d.jsx)("div", {
                                    className: "text-lg font-semibold",
                                    children: e.title
                                }), (0, d.jsx)("div", {
                                    className: "text-base text-neutral-text3",
                                    children: e.description
                                })]
                            }, t))), (0, d.jsx)(r.b, {
                                type: "2",
                                text: e.cta.text,
                                onClick: e.cta.onClick
                            })]
                        }),
                        resource: e.resource,
                        reverse: e.reverse
                    })
                },
                10: function(e) {
                    return (0, d.jsxs)("div", {
                        className: "flex-1 flex flex-col",
                        children: [(0, d.jsx)("img", {
                            className: "rounded-8",
                            src: e.image
                        }), (0, d.jsx)("div", {
                            className: "font-bold text-3xl mt-24 mb-16",
                            children: e.title
                        }), (0, d.jsx)("div", {
                            className: "text-base",
                            children: e.description
                        })]
                    })
                },
                12: function(e) {
                    return (0, d.jsxs)("div", {
                        className: "flex-1 flex flex-col items-start p-24 space-y-16 border border-neutral-line2 rounded-16",
                        children: [(0, d.jsx)("img", {
                            className: c()("rounded-8", u["item-type-12-image"]),
                            src: e.image
                        }), (0, d.jsx)("div", {
                            className: "font-bold text-2xl text-start",
                            children: e.title
                        }), (0, d.jsx)("div", {
                            className: "text-base text-start",
                            children: e.description
                        }), e.tooltip && (0, d.jsx)(m.m, {
                            title: e.tooltip.title,
                            content: e.tooltip.content,
                            position: "bottom"
                        })]
                    })
                }
            };

            function y(e) {
                var t, s;
                const n = x[e.type];
                return (0, d.jsx)(a.A, {
                    page_name: e.page_name,
                    module_name: e.module_name,
                    children: (0, d.jsxs)(l.I, {
                        title: e.title,
                        description: e.description,
                        maxWidth: ["1", "5"].includes(e.type) ? 1280 : 1200,
                        gap: e.gap.container,
                        children: [(0, d.jsx)(p, {
                            className: c()("w-full", {
                                "flex-col": ["6", "7"].includes(e.type)
                            }),
                            gap: e.gap.list,
                            children: e.items.map(((e, t) => (0, d.jsx)(n, (0, i.A)({}, e), t)))
                        }), "tips" === (null === (t = e.footer) || void 0 === t ? void 0 : t.type) && (0, d.jsx)("div", {
                            className: "p-12 rounded-8 bg-neutral-bg2 text-center text-base text-neutral-text3",
                            children: e.footer.text
                        }), "cta" === (null === (s = e.footer) || void 0 === s ? void 0 : s.type) && (0, d.jsx)(r.b, {
                            text: e.footer.text,
                            onClick: e.footer.onClick
                        })]
                    })
                })
            }

            function h(e) {
                return (0, d.jsxs)("div", {
                    className: c()("flex-1 flex justify-between gap-16", u["item-type-a-container"], {
                        [u["item-type-a-reverse"]]: e.reverse
                    }),
                    children: [(0, d.jsxs)("div", {
                        className: u["item-type-a-container-1"],
                        children: [(0, d.jsx)("div", {
                            className: c()("font-bold mb-16", u["item-type-a-title"]),
                            children: e.title
                        }), e.description]
                    }), (0, d.jsxs)("div", {
                        className: c()("flex items-center", u["item-type-a-container-2"]),
                        children: ["image" === e.resource.type && (0, d.jsx)("img", {
                            className: c()("w-full object-contain rounded-8", u["item-type-a-resource"]),
                            src: e.resource.src
                        }), "video" === e.resource.type && (0, d.jsx)("video", {
                            muted: !0,
                            autoPlay: !0,
                            loop: !0,
                            className: c()("w-full object-contain rounded-8", u["item-type-a-resource"]),
                            children: (0, d.jsx)("source", {
                                src: e.resource.src
                            })
                        })]
                    })]
                })
            }

            function g(e) {
                return (0, d.jsx)(a.A, {
                    page_name: e.page_name,
                    module_name: e.module_name,
                    children: (0, d.jsx)(l.I, {
                        title: e.title,
                        description: e.description,
                        maxWidth: 1200,
                        gap: "64-48",
                        children: (0, d.jsxs)("div", {
                            className: u["type-8-content"],
                            children: [(0, d.jsx)("div", {
                                className: "flex flex-col gap-32",
                                children: e.items.map(((e, t) => (0, d.jsxs)("div", {
                                    className: c()("flex items-center", u["type-8-item"]),
                                    children: [(0, d.jsx)("img", {
                                        className: c()("w-[64px] h-[64px]", u["type-8-icon"]),
                                        src: e.icon
                                    }), (0, d.jsxs)("div", {
                                        children: [(0, d.jsx)("div", {
                                            className: c()("font-bold text-2xl mb-8", u["type-8-name"]),
                                            children: e.name
                                        }), (0, d.jsx)("div", {
                                            children: "list" === e.type ? (0, d.jsx)("ul", {
                                                className: c()("space-y-8 list-disc pl-20"),
                                                children: e.list.map(((e, t) => (0, d.jsx)("li", {
                                                    children: e
                                                }, t)))
                                            }) : null
                                        })]
                                    })]
                                }, t)))
                            }), (0, d.jsx)("img", {
                                className: c()("object-contain", u["type-8-image"]),
                                src: e.image
                            })]
                        })
                    })
                })
            }

            function f(e) {
                return (0, d.jsx)(a.A, {
                    page_name: e.page_name,
                    module_name: e.module_name,
                    children: (0, d.jsx)("div", {
                        className: "flex flex-col items-center w-full bg-[#FAEDF0]",
                        children: (0, d.jsxs)("div", {
                            className: c()("flex flex-col items-center w-full", u["type-9-container"]),
                            children: [(0, d.jsxs)("div", {
                                className: c()("flex flex-col", u["type-9-container-1"]),
                                children: [(0, d.jsx)("div", {
                                    className: c()("font-bold", u["type-9-title"]),
                                    children: e.title
                                }), (0, d.jsx)("div", {
                                    className: c()("text-lg text-neutral-black mt-24 mb-40", u["type-9-description"]),
                                    children: e.description
                                }), (0, d.jsx)(r.b, {
                                    className: u["type-9-cta"],
                                    text: e.cta.text,
                                    onClick: e.cta.onClick
                                })]
                            }), (0, d.jsxs)("div", {
                                className: c()("p-24 rounded-8 bg-brand-white", u["type-9-list"]),
                                children: [(0, d.jsx)("div", {
                                    className: "text-lg text-neutral-text3 mb-8",
                                    children: e.header
                                }), (0, d.jsx)("ul", {
                                    className: "py-16 pl-20 list-disc",
                                    children: e.items.map(((t, s) => (0, d.jsxs)("li", {
                                        className: "font-semibold text-lg",
                                        children: [t, s !== e.items.length - 1 && (0, d.jsx)("div", {
                                            className: "my-16 border-b border-neutral-line1"
                                        })]
                                    }, s)))
                                })]
                            })]
                        })
                    })
                })
            }

            function v(e) {
                return (0, d.jsx)(a.A, {
                    page_name: e.page_name,
                    module_name: e.module_name,
                    children: (0, d.jsx)(l.I, {
                        title: e.title,
                        description: e.description,
                        maxWidth: 1200,
                        gap: "64-48",
                        children: (0, d.jsx)("div", {
                            className: u["type-11-container"],
                            children: e.items.map(((e, t) => (0, d.jsxs)("div", {
                                className: "flex flex-col items-center max-w-[490px]",
                                children: [(0, d.jsx)("img", {
                                    className: c()("w-[96px] h-[96px]"),
                                    src: e.image
                                }), (0, d.jsx)("div", {
                                    className: "text-3xl font-bold text-center",
                                    children: e.title
                                }), (0, d.jsx)("div", {
                                    className: "text-lg text-center",
                                    children: e.description
                                })]
                            }, t)))
                        })
                    })
                })
            }
        },
        69815: (e, t, s) => {
            "use strict";
            s.d(t, {
                p: () => r
            });
            var i = s(12697),
                a = (s(11855), s(63159));
            const r = e => (0, a.jsxs)("svg", (0, i.A)((0, i.A)({}, e), {}, {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, a.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M22.1038 15.8962C22.2991 16.0915 22.2991 16.408 22.1038 16.6033L18.4574 20.2498L22.1038 23.8962C22.2991 24.0915 22.2991 24.408 22.1038 24.6033C21.9085 24.7986 21.592 24.7986 21.3967 24.6033L17.3967 20.6033C17.2014 20.408 17.2014 20.0915 17.3967 19.8962L21.3967 15.8962C21.592 15.7009 21.9085 15.7009 22.1038 15.8962Z",
                    fill: "currentColor"
                }), (0, a.jsx)("rect", {
                    x: "0.5",
                    y: "0.499756",
                    width: "39",
                    height: "39",
                    rx: "19.5",
                    stroke: "currentColor"
                })]
            }))
        },
        72796: (e, t, s) => {
            "use strict";
            s.d(t, {
                YC: () => u,
                Rj: () => x,
                YX: () => y
            });
            var i = s(69815),
                a = s(98928),
                r = s(81842),
                l = s.n(r),
                n = s(69647),
                c = s(32725),
                o = s(11855),
                d = {
                    "carousel-type-1": "carousel-type-1-oOfJjh",
                    carouselType1: "carousel-type-1-oOfJjh",
                    "carousel-type-1-list": "carousel-type-1-list-rCpaex",
                    carouselType1List: "carousel-type-1-list-rCpaex",
                    "infinite-horizontal-scroll": "infinite-horizontal-scroll-oDukX5",
                    infiniteHorizontalScroll: "infinite-horizontal-scroll-oDukX5",
                    "carousel-embla": "carousel-embla-XYY3PU",
                    carouselEmbla: "carousel-embla-XYY3PU",
                    "carousel-embla-viewport": "carousel-embla-viewport-BkiE4k",
                    carouselEmblaViewport: "carousel-embla-viewport-BkiE4k",
                    "carousel-embla-container": "carousel-embla-container-Qwsgr8",
                    carouselEmblaContainer: "carousel-embla-container-Qwsgr8",
                    "carousel-embla-item": "carousel-embla-item-DQ6s4w",
                    carouselEmblaItem: "carousel-embla-item-DQ6s4w",
                    "carousel-type-2": "carousel-type-2-AuL8jP",
                    carouselType2: "carousel-type-2-AuL8jP",
                    "carousel-type-2-footer": "carousel-type-2-footer-mHQLW1",
                    carouselType2Footer: "carousel-type-2-footer-mHQLW1"
                };

            function p(e, t) {
                const [s, i] = (0, o.useState)(0), [a, r] = (0, o.useState)(!0), [l, n] = (0, o.useState)(!0), c = (0, o.useCallback)((() => {
                    var s;
                    e && (null === (s = e.plugins()) || void 0 === s || null === (s = s.autoplay) || void 0 === s || s.reset(), e.scrollPrev(), null != t && t.onPrevButtonClick && t.onPrevButtonClick())
                }), [e, t]), d = (0, o.useCallback)((() => {
                    var s;
                    e && (null === (s = e.plugins()) || void 0 === s || null === (s = s.autoplay) || void 0 === s || s.reset(), e.scrollNext(), null != t && t.onNextButtonClick && t.onNextButtonClick())
                }), [e, t]), p = (0, o.useCallback)((e => {
                    i(e.selectedScrollSnap()), r(!e.canScrollPrev()), n(!e.canScrollNext())
                }), []);
                return (0, o.useEffect)((() => {
                    e && (p(e), e.on("reInit", p).on("select", p))
                }), [e, p]), {
                    selectedIndex: s,
                    isPrevButtonDisabled: a,
                    isNextButtonDisabled: l,
                    onClickPrevButton: c,
                    onClickNextButton: d
                }
            }
            var m = s(63159);

            function u(e) {
                const t = (0, o.useRef)(null);
                return (0, o.useEffect)((() => {
                    t.current && t.current.style.setProperty("--item-length", `${e.children.length}`)
                }), []), (0, m.jsxs)("div", {
                    ref: t,
                    className: l()(d["carousel-type-1"], d["carousel-type-1-list"], e.className),
                    children: [e.children.map(((e, t) => (0, m.jsx)("div", {
                        className: "w-fit h-fit shrink-0",
                        children: e
                    }, "1_" + t))), e.children.map(((e, t) => (0, m.jsx)("div", {
                        className: "w-fit h-fit shrink-0",
                        children: e
                    }, "2_" + t))), e.children.map(((e, t) => (0, m.jsx)("div", {
                        className: "w-fit h-fit shrink-0",
                        children: e
                    }, "3_" + t)))]
                })
            }

            function x(e) {
                var t;
                const [s, r] = (0, c.A)({
                    loop: !0
                }, [(0, n.A)({
                    playOnInit: !0,
                    delay: 5e3
                })]), {
                    selectedIndex: u,
                    onClickPrevButton: x,
                    onClickNextButton: y,
                    isPrevButtonDisabled: h,
                    isNextButtonDisabled: g
                } = p(r), f = (0, o.useRef)([]), v = (0, o.useCallback)((e => {
                    f.current = e.slideNodes().map((e => {
                        const t = e.childNodes[0];
                        return t.style.transitionProperty = "transform", t.style.transitionTimingFunction = "cubic-bezier(0.4, 0, 0.2, 1)", t.style.transitionDuration = "200ms", t
                    }))
                }), []), j = (0, o.useCallback)(((e, t) => {
                    const s = e.internalEngine(),
                        i = e.slidesInView(),
                        a = "scroll" === t,
                        r = e.selectedScrollSnap();
                    e.scrollSnapList().forEach(((e, t) => {
                        s.slideRegistry[t].forEach((e => {
                            if (a && !i.includes(e)) return;
                            const s = f.current[e];
                            s.style.transform = t === r ? "scale(1)" : "scale(0.85)"
                        }))
                    }))
                }), []);
                return (0, o.useEffect)((() => {
                    r && (v(r), j(r), r.on("reInit", v).on("reInit", j).on("scroll", j))
                }), [r, j]), (0, m.jsxs)("div", {
                    className: "w-full",
                    children: [(0, m.jsx)("div", {
                        ref: s,
                        className: l()(d["carousel-embla"], d["carousel-embla-viewport"], e.className),
                        children: (0, m.jsx)("div", {
                            className: d["carousel-embla-container"],
                            children: e.children.map(((e, t) => (0, m.jsx)("div", {
                                className: d["carousel-embla-item"],
                                children: e
                            }, t)))
                        })
                    }), e.footer && (0, m.jsx)("div", {
                        className: l()("mt-16 mx-auto", d["carousel-type-2-footer"]),
                        children: null === (t = e.footer) || void 0 === t ? void 0 : t.call(e, u)
                    }), (0, m.jsxs)("div", {
                        className: "mt-16 flex space-x-16 justify-center",
                        children: [(0, m.jsx)(i.p, {
                            className: l()("cursor-pointer", {
                                "text-neutral-text5 cursor-not-allowed": h
                            }),
                            onClick: x
                        }), (0, m.jsx)(a.m, {
                            className: l()("cursor-pointer", {
                                "text-neutral-text5 cursor-not-allowed": g
                            }),
                            onClick: y
                        })]
                    })]
                })
            }

            function y(e) {
                var t;
                const [s, r] = (0, c.A)({
                    loop: !1
                }, [(0, n.A)({
                    playOnInit: null !== (t = e.autoPlay) && void 0 !== t && t,
                    delay: 5e3,
                    stopOnMouseEnter: !0,
                    stopOnInteraction: !1
                })]), {
                    selectedIndex: o,
                    onClickPrevButton: u,
                    onClickNextButton: x,
                    isPrevButtonDisabled: y,
                    isNextButtonDisabled: h
                } = p(r, e.options);
                return (0, m.jsxs)("div", {
                    className: "w-full",
                    children: [(0, m.jsx)("div", {
                        ref: s,
                        className: l()(d["carousel-embla"], d["carousel-embla-viewport"], e.className),
                        children: (0, m.jsx)("div", {
                            className: d["carousel-embla-container"],
                            children: e.children.map(((e, t) => (0, m.jsx)("div", {
                                className: d["carousel-embla-item"],
                                children: e
                            }, t)))
                        })
                    }), (0, m.jsxs)("div", {
                        className: "mt-24 flex space-x-40 justify-center items-center",
                        children: [(0, m.jsx)(i.p, {
                            className: l()("cursor-pointer", {
                                "text-neutral-text5 cursor-not-allowed": y
                            }),
                            onClick: u
                        }), !e.hideIndex && (0, m.jsxs)("div", {
                            className: "text-2xl",
                            children: [o + 1, " / ", e.children.length]
                        }), (0, m.jsx)(a.m, {
                            className: l()("cursor-pointer", {
                                "text-neutral-text5 cursor-not-allowed": h
                            }),
                            onClick: x
                        })]
                    })]
                })
            }
        },
        76371: (e, t, s) => {
            "use strict";
            s.d(t, {
                X: () => p,
                A: () => m
            });
            var i = s(11855),
                a = s(81842),
                r = s.n(a),
                l = s(51434),
                n = s(631),
                c = "container-Iytwze",
                o = "header-z6BDml",
                d = s(63159);
            const p = ({
                className: e,
                children: t
            }) => (0, d.jsx)("div", {
                className: r()(o, e),
                children: t
            });
            var m = ({
                className: e,
                before: t,
                children: s,
                name: a = "",
                page_name: o = "",
                module_name: p = ""
            }) => {
                const [m, u] = (0, l.A)(), [x, y] = (0, i.useState)(!1), [h, g] = (0, i.useState)(0);
                return (0, i.useEffect)((() => {
                    if (!x && u && (n.vF.sendPageShow({
                            type: "module",
                            page_name: o,
                            section_name: a || p
                        }), y(!0)), u) g(Date.now());
                    else {
                        if (0 !== h) {
                            const e = Date.now() - h;
                            p && n.vF.sendModuleDuration({
                                page_name: o,
                                module_name: p,
                                duration: e
                            })
                        }
                        g(0)
                    }
                }), [u, x]), (0, d.jsx)("section", {
                    ref: m,
                    children: (0, d.jsxs)("div", {
                        "data-scroll": !0,
                        className: r()(c, e),
                        children: [t, (0, d.jsx)("div", {
                            children: s
                        })]
                    })
                })
            }
        },
        78783: (e, t, s) => {
            "use strict";
            s.d(t, {
                R: () => u
            });
            var i = s(76371),
                a = s(72796),
                r = s(27652),
                l = s(81842),
                n = s.n(l),
                c = s(11855),
                o = {
                    "carousel-type-1": "carousel-type-1-kJcF4B",
                    carouselType1: "carousel-type-1-kJcF4B",
                    "carousel-type-1-item": "carousel-type-1-item-CcCzMU",
                    carouselType1Item: "carousel-type-1-item-CcCzMU",
                    "carousel-type-2": "carousel-type-2-tjZJTE",
                    carouselType2: "carousel-type-2-tjZJTE",
                    "carousel-type-2-title": "carousel-type-2-title-eDs6XD",
                    carouselType2Title: "carousel-type-2-title-eDs6XD",
                    "carousel-type-3": "carousel-type-3-sjj7zz",
                    carouselType3: "carousel-type-3-sjj7zz",
                    "carousel-type-3-container": "carousel-type-3-container-eWS8_l",
                    carouselType3Container: "carousel-type-3-container-eWS8_l",
                    "carousel-type-3-title": "carousel-type-3-title-NHuNPe",
                    carouselType3Title: "carousel-type-3-title-NHuNPe",
                    "carousel-type-3-description": "carousel-type-3-description-k2_D_s",
                    carouselType3Description: "carousel-type-3-description-k2_D_s",
                    "carousel-type-3-image": "carousel-type-3-image-So4XH1",
                    carouselType3Image: "carousel-type-3-image-So4XH1",
                    "carousel-type-3-video": "carousel-type-3-video-lq5Pls",
                    carouselType3Video: "carousel-type-3-video-lq5Pls",
                    "carousel-type-4": "carousel-type-4-rZP3a3",
                    carouselType4: "carousel-type-4-rZP3a3",
                    "carousel-type-4-container": "carousel-type-4-container-AkFqHZ",
                    carouselType4Container: "carousel-type-4-container-AkFqHZ",
                    "carousel-type-4-title": "carousel-type-4-title-pdbqY4",
                    carouselType4Title: "carousel-type-4-title-pdbqY4",
                    "carousel-type-4-image-1": "carousel-type-4-image-1-yPonDo",
                    carouselType4Image1: "carousel-type-4-image-1-yPonDo",
                    "carousel-type-4-image-2": "carousel-type-4-image-2-mAvpuf",
                    carouselType4Image2: "carousel-type-4-image-2-mAvpuf",
                    "carousel-type-4-highlight-container": "carousel-type-4-highlight-container-yrpY0P",
                    carouselType4HighlightContainer: "carousel-type-4-highlight-container-yrpY0P",
                    "carousel-type-4-highlight-title": "carousel-type-4-highlight-title-EJj4JC",
                    carouselType4HighlightTitle: "carousel-type-4-highlight-title-EJj4JC",
                    "carousel-type-4-stat-value": "carousel-type-4-stat-value-g5L1h1",
                    carouselType4StatValue: "carousel-type-4-stat-value-g5L1h1",
                    "carousel-type-4-stat-suffix": "carousel-type-4-stat-suffix-pX_xUv",
                    carouselType4StatSuffix: "carousel-type-4-stat-suffix-pX_xUv",
                    "carousel-type-4-stat-description": "carousel-type-4-stat-description-cq2BqT",
                    carouselType4StatDescription: "carousel-type-4-stat-description-cq2BqT",
                    "fade-in": "fade-in-EgjYKi",
                    fadeIn: "fadeIn-lB4lxi"
                },
                d = s(631),
                p = s(63159);
            const m = {
                1: function(e) {
                    return (0, p.jsx)(a.YC, {
                        className: o["carousel-type-1"],
                        children: e.items.map(((e, t) => (0, p.jsx)("div", {
                            className: n()("bg-neutral-bg2 shrink-0 cursor-pointer flex items-center justify-center", o["carousel-type-1-item"]),
                            onClick: e.onClick,
                            children: (0, p.jsx)("img", {
                                src: e.image,
                                className: "object-contain shrink-0 w-full h-full"
                            })
                        }, t)))
                    })
                },
                2: function(e) {
                    return (0, p.jsx)(a.Rj, {
                        className: o["carousel-type-2"],
                        footer: t => (0, p.jsx)(y, {
                            currentIndex: t,
                            items: e.items
                        }),
                        children: e.items.map(((e, t) => (0, p.jsx)("img", {
                            className: "w-full rounded-16 object-contain",
                            src: e.image
                        }, t)))
                    })
                },
                3: function(e) {
                    return (0, p.jsx)(a.YX, {
                        className: o["carousel-type-3"],
                        options: e.options,
                        children: e.items.map(((e, t) => {
                            var s, i;
                            return (0, p.jsxs)("div", {
                                className: n()("flex rounded-16 bg-neutral-bg2", o["carousel-type-3-container"]),
                                children: ["video" === e.type && (0, p.jsx)("video", {
                                    playsInline: !0,
                                    muted: !0,
                                    autoPlay: null === (s = e.autoPlay) || void 0 === s || s,
                                    loop: !0,
                                    controls: null !== (i = e.controls) && void 0 !== i && i,
                                    className: n()("rounded-8", o["carousel-type-3-video"]),
                                    onPlay: () => {
                                        if (e.videoTeaParam) {
                                            const {
                                                click_for: t,
                                                section_name: s,
                                                content: i
                                            } = e.videoTeaParam;
                                            null === d.vF || void 0 === d.vF || d.vF.sendButtonClick({
                                                click_for: t,
                                                section_name: s,
                                                content: i
                                            })
                                        }
                                    },
                                    children: (0, p.jsx)("source", {
                                        src: e.src
                                    })
                                }), "image" === e.type && (0, p.jsx)("img", {
                                    className: n()("rounded-8 object-contain", o["carousel-type-3-video"]),
                                    src: e.src
                                }), (0, p.jsxs)("div", {
                                    children: [(0, p.jsx)("div", {
                                        className: n()("font-bold", o["carousel-type-3-title"]),
                                        children: e.title
                                    }), (0, p.jsx)("div", {
                                        className: o["carousel-type-3-description"],
                                        children: e.description
                                    })]
                                })]
                            }, t)
                        }))
                    })
                },
                4: function(e) {
                    return (0, p.jsx)(a.YX, {
                        className: o["carousel-type-4"],
                        children: e.items.map(((e, t) => (0, p.jsxs)("div", {
                            className: n()("flex rounded-16 bg-neutral-bg2", o["carousel-type-4-container"]),
                            children: [(0, p.jsx)("img", {
                                className: n()("rounded-8 object-contain", o["carousel-type-4-image-1"]),
                                src: e.image
                            }), (0, p.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, p.jsx)("img", {
                                    className: n()("rounded-8 object-contain", o["carousel-type-4-image-2"]),
                                    src: e.image
                                }), (0, p.jsxs)("div", {
                                    className: n()("rounded-8 bg-brand-white flex flex-col gap-16", o["carousel-type-4-highlight-container"]),
                                    children: [(0, p.jsx)("div", {
                                        className: n()("font-bold", o["carousel-type-4-highlight-title"]),
                                        children: e.title
                                    }), (0, p.jsx)("div", {
                                        className: "text-lg",
                                        children: e.description
                                    })]
                                }), (0, p.jsx)("div", {
                                    className: n()("flex gap-16", o["carousel-type-4-stat-container"]),
                                    children: e.stats.map(((e, t) => (0, p.jsxs)("div", {
                                        className: "flex-1",
                                        children: [(0, p.jsxs)("div", {
                                            className: "mb-4",
                                            children: [(0, p.jsx)("span", {
                                                className: n()("font-bold", o["carousel-type-4-stat-value"]),
                                                children: e.value
                                            }), (0, p.jsx)("span", {
                                                className: n()("font-bold", o["carousel-type-4-stat-suffix"]),
                                                children: e.suffix
                                            })]
                                        }), (0, p.jsx)("span", {
                                            className: o["carousel-type-4-stat-description"],
                                            children: e.description
                                        })]
                                    }, t)))
                                })]
                            })]
                        }, t)))
                    })
                }
            };

            function u(e) {
                const t = m[e.type];
                return (0, p.jsx)(i.A, {
                    page_name: e.page_name,
                    module_name: e.module_name,
                    children: (0, p.jsx)(r.I, {
                        title: e.title,
                        description: e.description,
                        maxWidth: 1200,
                        gap: "64-48",
                        children: (0, p.jsx)(t, {
                            items: e.items,
                            options: e.options
                        })
                    })
                })
            }

            function x(e) {
                return (0, p.jsxs)("div", {
                    className: n()("w-full flex-shrink-0", e.className),
                    children: [(0, p.jsx)("div", {
                        className: n()("mt-16 font-bold", o["carousel-type-2-title"]),
                        children: e.title
                    }), (0, p.jsx)("div", {
                        className: "text-lg mt-8",
                        children: e.description
                    })]
                })
            }

            function y(e) {
                const {
                    currentIndex: t,
                    items: s
                } = e, [i, a] = (0, c.useState)(!1);
                return (0, c.useEffect)((() => (a(!0), () => {
                    setTimeout((() => {
                        a(!1)
                    }), 500)
                })), [t]), (0, p.jsxs)("div", {
                    className: "flex overflow-hidden",
                    children: [(0, p.jsx)(x, {
                        className: i ? o["fade-in"] : "",
                        title: s[t].title,
                        description: s[t].description
                    }), s.map(((e, t) => (0, p.jsx)(x, {
                        title: e.title,
                        description: e.description
                    }, t)))]
                })
            }
        },
        86239: (e, t, s) => {
            "use strict";
            s.d(t, {
                Y: () => y
            });
            var i = s(12697),
                a = (s(11855), s(2679)),
                r = s(21243),
                l = s(18244),
                n = s(20244),
                c = s(65318),
                o = s(47324),
                d = s.n(o),
                p = "Header-j4Tjmc",
                m = s(95706),
                u = s(81271),
                x = s(63159);
            const y = e => {
                var t;
                const {
                    currentTab: s,
                    enableTransparent: o
                } = e, {
                    region: y,
                    language: h,
                    paths: g,
                    ipRegion: f
                } = (0, c.A)(), {
                    context: v
                } = (0, m.A)();
                if ("0" === (null === (t = v.request.query) || void 0 === t ? void 0 : t.show_navbar)) return null;
                const j = a.b.flatMap((e => {
                        var t, s;
                        return null !== (t = null === (s = e.children) || void 0 === s ? void 0 : s.map((e => e.value))) && void 0 !== t ? t : []
                    })),
                    b = !!f && j.includes(f);
                return (0, x.jsx)("div", {
                    className: p,
                    children: (0, x.jsx)(r.R, {
                        region: y,
                        config: (0, i.A)((0, i.A)({}, l.y[y]), {}, {
                            switchSite: (0, i.A)((0, i.A)({}, l.y[y].switchSite), {}, {
                                useAllRegions: !0,
                                desiredDestination: "portal",
                                defaultShowDropdown: b
                            })
                        }),
                        lang: h,
                        currentTab: s,
                        onLanguageChange: e => {
                            const t = d().parse(location.search.slice(1));
                            t.lang = e, window.location.search = d().stringify(t)
                        },
                        onClickLogo: () => {
                            const e = (0, u.f6)(y);
                            g[0] && (window.location.href = `https://${v.request.host}${e?`/${e}`:""}`)
                        },
                        globalVars: {
                            [n.j.SellerChannel]: "portal_header"
                        },
                        enableTransparent: o
                    })
                })
            }
        },
        91265: (e, t, s) => {
            "use strict";
            s.d(t, {
                H: () => d
            });
            var i = s(76371),
                a = s(81842),
                r = s.n(a),
                l = (s(11855), s(28842)),
                n = {
                    container: "container-vijxlV",
                    "container-1": "container-1-NtxAJG",
                    container1: "container-1-NtxAJG",
                    title: "title-yaQ1Z3",
                    description: "description-Un7D5j",
                    "container-2": "container-2-xTZQGZ",
                    container2: "container-2-xTZQGZ",
                    "statistics-container": "statistics-container-Lm7NUR",
                    statisticsContainer: "statistics-container-Lm7NUR",
                    "statistics-text": "statistics-text-w0CcLY",
                    statisticsText: "statistics-text-w0CcLY",
                    "statistics-description": "statistics-description-TxmstN",
                    statisticsDescription: "statistics-description-TxmstN"
                },
                c = s(63159);

            function o(e) {
                var t;
                return (0, c.jsx)("div", {
                    className: r()("flex flex-col items-center w-full bg-brand-black", e.className),
                    children: (0, c.jsxs)("div", {
                        className: r()("flex flex-col items-center w-full", n.container),
                        children: [(0, c.jsxs)("div", {
                            className: r()("flex flex-col", n["container-1"]),
                            children: [(0, c.jsx)("div", {
                                className: r()("font-bold", e.text_color, n.title),
                                children: e.title
                            }), (0, c.jsx)("div", {
                                className: r()("mt-24", e.text_color, n.description),
                                children: e.description
                            }), (null === (t = e.statistics) || void 0 === t ? void 0 : t.length) && (0, c.jsx)("div", {
                                className: "flex justify-between mt-36 w-full",
                                children: e.statistics.map(((t, s) => (0, c.jsxs)("div", {
                                    className: r()("flex flex-col items-start", n["statistics-container"]),
                                    children: [(0, c.jsx)("div", {
                                        className: r()("font-bold text-brand-green", n["statistics-text"]),
                                        children: t.text
                                    }), t.description && (0, c.jsx)("div", {
                                        className: r()("opacity-60", e.text_color, n["statistics-description"]),
                                        children: t.description
                                    })]
                                }, s)))
                            }), (0, c.jsx)(l.b, {
                                className: "mt-36",
                                text: e.cta.text,
                                onClick: e.cta.onClick
                            }), e.cta.description && (0, c.jsx)("div", {
                                className: r()("text-base opacity-60", e.text_color, "mt-16"),
                                children: e.cta.description
                            })]
                        }), (0, c.jsx)("div", {
                            className: n["container-2"],
                            children: e.stack
                        })]
                    })
                })
            }

            function d(e) {
                const {
                    left: t,
                    middle: s,
                    right: a
                } = e.resources;
                return (0, c.jsx)(i.A, {
                    page_name: e.page_name,
                    module_name: e.module_name,
                    children: (0, c.jsx)(o, {
                        className: e.className,
                        title: e.title,
                        text_color: e.text_color || "text-brand-white",
                        description: e.description,
                        cta: e.cta,
                        statistics: e.statistics,
                        stack: (0, c.jsxs)("div", {
                            className: "w-full h-full relative flex-shrink-0 aspect-square",
                            children: [(0, c.jsx)("img", {
                                className: "rounded-12 absolute",
                                style: t.style,
                                src: t.src,
                                alt: t.alt
                            }), (0, c.jsx)("video", {
                                className: "rounded-16 absolute",
                                style: s.style,
                                muted: !0,
                                loop: !0,
                                autoPlay: !0,
                                poster: s.placeholder,
                                playsInline: !0,
                                children: (0, c.jsx)("source", {
                                    src: s.src
                                })
                            }), (0, c.jsx)("img", {
                                className: "rounded-12 absolute",
                                style: a.style,
                                src: a.src,
                                alt: a.alt
                            })]
                        })
                    })
                })
            }
        },
        98928: (e, t, s) => {
            "use strict";
            s.d(t, {
                m: () => r
            });
            var i = s(12697),
                a = (s(11855), s(63159));
            const r = e => (0, a.jsxs)("svg", (0, i.A)((0, i.A)({
                width: "40",
                height: "40",
                viewBox: "0 0 40 40",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), {}, {
                children: [(0, a.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M17.8964 15.3962C17.7012 15.5915 17.7012 15.908 17.8964 16.1033L21.5429 19.7498L17.8964 23.3962C17.7012 23.5915 17.7012 23.908 17.8964 24.1033C18.0917 24.2986 18.4083 24.2986 18.6036 24.1033L22.6036 20.1033C22.7988 19.908 22.7988 19.5915 22.6036 19.3962L18.6036 15.3962C18.4083 15.2009 18.0917 15.2009 17.8964 15.3962Z",
                    fill: "currentColor"
                }), (0, a.jsx)("rect", {
                    x: "0.5",
                    y: "0.499756",
                    width: "39",
                    height: "39",
                    rx: "19.5",
                    stroke: "currentColor"
                })]
            }))
        },
        99554: (e, t, s) => {
            "use strict";
            s.d(t, {
                m: () => o
            });
            var i = s(71939),
                a = s(31256),
                r = s(81842),
                l = s.n(r),
                n = (s(11855), {
                    tooltip: "tooltip-zMFQ5O"
                }),
                c = s(63159);

            function o(e) {
                var t;
                return (0, c.jsx)(i.A, {
                    style: {
                        maxWidth: "358px"
                    },
                    className: n.tooltip,
                    position: null !== (t = e.position) && void 0 !== t ? t : "bottom",
                    color: e.color,
                    content: (0, c.jsx)("span", {
                        className: "text-neutral-text1 text-sm",
                        children: e.content
                    }),
                    children: (0, c.jsxs)("span", {
                        className: l()("text-neutral-text3 text-base cursor-pointer", e.className),
                        children: [(0, c.jsx)("span", {
                            className: "mr-4",
                            children: e.title
                        }), (0, c.jsx)(a.A, {})]
                    })
                })
            }
        }
    }
]);