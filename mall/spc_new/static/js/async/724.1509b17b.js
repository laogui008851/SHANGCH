"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [724], {
        35132: (e, t, s) => {
            s.d(t, {
                f: () => Un
            });
            var n = s(12697),
                a = s(72911),
                i = s(76371),
                l = s(19541),
                r = s(11855),
                c = s(91503),
                o = s(76327),
                d = s(84393),
                m = s(47324),
                u = s(95706),
                h = s(65318),
                x = s(63159);
            const p = ["children", "href", "target", "onClick", "appendTrackParams", "hash"];
            var _ = e => {
                    let {
                        children: t,
                        href: s,
                        target: i,
                        onClick: l,
                        appendTrackParams: c,
                        hash: o
                    } = e, d = (0, a.A)(e, p);
                    const {
                        context: _
                    } = (0, u.A)(), {
                        region: j
                    } = (0, h.A)(), g = _.request.query, v = (0, r.useMemo)((() => {
                        let e = s;
                        if (j) {
                            e = (e => {
                                if (!e) return e;
                                if (/^(https?:)\/\//i.test(e)) return e;
                                let t = "",
                                    s = !1;
                                if (0 === e.indexOf("./") ? (t = e.slice(1), s = !0) : 0 === e.indexOf("/") ? (t = e, s = !0) : t = e, s && g.lang) {
                                    const e = t.split("?"),
                                        s = (0, m.parse)(e[1] || "");
                                    s.lang = g.lang;
                                    const n = (0, m.stringify)(s);
                                    t = e[0] + (n ? `?${n}` : "")
                                }
                                return t
                            })(e)
                        }
                        var t;
                        e && (e = null !== (t = null == c ? void 0 : c(e)) && void 0 !== t ? t : e, e += o ? `#${o}` : "");
                        return e
                    }), [s, g, o]);
                    return (0, x.jsx)("a", (0, n.A)((0, n.A)({}, d), {}, {
                        href: v,
                        target: i,
                        style: {
                            cursor: "pointer"
                        },
                        onClick: e => {
                            null == l || l(e)
                        },
                        children: t
                    }))
                },
                j = "leadCollectionBtn-LRIdr7",
                g = s(81842),
                v = s.n(g),
                A = s(86698);
            const f = (0, d.O4)("theme-arco"),
                N = (0, c.Ay)(o.A).withConfig({
                    displayName: "LeadCollectionForm__StyledInput",
                    componentId: "sc-1a30ook-0"
                })(["text-overflow:ellipsis;&&.theme-arco-input-inner-wrapper{&&.theme-arco-input-inner-wrapper-focus{border-color:", ";}}:hover{border-color:", " !important;}:focus{border-color:", " !important;}"], f.colors.neutralLine1, f.colors.neutralLine1, f.colors.neutralLine1);
            var b = () => {
                    const e = (0, l.s)(),
                        [t, s] = (0, r.useState)(""),
                        [n, a] = (0, r.useState)(!1),
                        i = () => (0, x.jsx)("span", {
                            className: "text-body-m-regular text-function-error mt-4",
                            children: e.t("seller_onboard_us_mandatory_error_msg")
                        });
                    return (0, x.jsxs)(x.Fragment, {
                        children: [(0, x.jsxs)("div", {
                            className: "flex " + ((0, A.Fr)() ? "mt-24 flex-col items-center" : "mt-36 flex-row"),
                            children: [(0, x.jsx)(N, {
                                size: "large",
                                className: "h-48 " + ((0, A.Fr)() ? "" : "mr-12"),
                                placeholder: e.t("tts_portal_banner_signup_input"),
                                onChange: e => s(e),
                                error: n
                            }), n && (0, A.Fr)() && (0, x.jsx)(i, {}), (0, x.jsx)(_, {
                                className: v()("btn btn-primary btn-lg " + ((0, A.Fr)() ? "mt-16" : ""), j),
                                onClick: () => {
                                    0 !== t.length ? (a(!1), window.location.href = `https://seller-us-accounts.tiktok.com?channel=tts_portal_main_banner&email_phone_number=${encodeURIComponent(t)}`) : a(!0)
                                },
                                children: e.t("tts_portal_banner_signup_button")
                            })]
                        }), n && !(0, A.Fr)() && (0, x.jsx)(i, {})]
                    })
                },
                C = "imageStack-V2kQqK",
                y = "imageMiddle-JZNwZo",
                k = "imageLeft-mm40jy",
                w = "imageRight-YXdLYI",
                T = "imageStyle-HsEnKr",
                S = "smallImageStack-fIrWes";

            function E(e) {
                const {
                    size: t = "default"
                } = e, s = (0, r.useMemo)((() => [{
                    type: "img",
                    src: e.left.src,
                    alt: "Image Left",
                    className: k
                }, {
                    type: "vid",
                    src: e.middle.src,
                    placeholder: e.middle.placeholder,
                    alt: "Video Middle",
                    className: y
                }, {
                    type: "img",
                    src: e.right.src,
                    alt: "Image Right",
                    className: w
                }]), []);
                return (0, x.jsx)("div", {
                    className: "small" === t ? S : C,
                    children: s.map((e => (0, x.jsx)("div", {
                        className: e.className,
                        children: "img" === e.type ? (0, x.jsx)("img", {
                            src: e.src,
                            alt: e.alt,
                            className: T
                        }) : (0, x.jsx)("video", {
                            muted: !0,
                            loop: !0,
                            autoPlay: !0,
                            playsInline: !0,
                            className: T,
                            poster: e.placeholder,
                            children: (0, x.jsx)("source", {
                                src: e.src
                            })
                        })
                    }, e.src)))
                })
            }
            var I = s(96734),
                L = s(78140),
                P = "scroll-tips-qC3Pzb",
                R = "arrow-icon-gXnzN4";

            function B({
                classNames: e,
                onClick: t
            }) {
                const s = (0, l.s)();
                return (0, x.jsxs)("div", {
                    className: `${P} ${e}`,
                    onClick: t,
                    children: [(0, x.jsx)("div", {
                        children: s.t("TTS_Portal_HP_ATF_btn_down")
                    }), (0, x.jsx)(L.Ay, {
                        animation: {
                            y: 5,
                            yoyo: !0,
                            repeat: -1,
                            duration: 700
                        },
                        style: {
                            transform: "translateY(-5px)"
                        },
                        children: (0, x.jsx)("div", {
                            className: R
                        })
                    })]
                })
            }
            var F = s(631),
                O = "mobile-scroll-tips-t0NHOH",
                H = "mobileBtn-mBF5z6",
                V = "btn-FohEAy",
                z = "scroll-tips-JVCddp";
            const K = ({
                page_name: e,
                cta: t,
                isMobile: s
            }) => {
                const {
                    button: n,
                    action: a,
                    text: i
                } = t, {
                    context: c
                } = (0, u.A)(), o = (0, l.s)(), d = (0, r.useCallback)((() => {
                    const {
                        action: s
                    } = t;
                    F.vF.sendButtonClick({
                        page_type: "page",
                        page_name: e,
                        click_for: "banner_cta"
                    }), "url" === s.type && window.open(s.track ? (0, F.Bc)(s.url, c.request) : s.url)
                }), []);
                return "scroll" === a.type ? (0, x.jsx)(x.Fragment, {
                    children: (0, x.jsx)(I.N_, {
                        to: a.to,
                        offsetTop: 64,
                        children: n ? (0, x.jsx)(_, {
                            className: v()("btn btn-primary btn-lg", s ? H : V),
                            onClick: d,
                            children: o.t(i)
                        }) : (0, x.jsx)(B, {
                            classNames: s ? O : z
                        })
                    })
                }) : (0, x.jsx)(_, {
                    className: v()("btn btn-primary btn-lg", s ? H : V),
                    href: a.url,
                    onClick: e => {
                        e.preventDefault(), d()
                    },
                    children: o.t(i)
                })
            };
            var D = "container-auvMPC",
                M = "container-uk-jttBFu",
                W = "banner-lRuZUP",
                Q = "text-box-Z1Y2Ld",
                U = "btn-description-Al8KmO",
                Y = "mobile-btn-description-YWz_Bi";

            function G(e) {
                const t = (0, l.s)();
                return (0, x.jsx)(i.A, {
                    className: "stack" === e.type ? M : D,
                    page_name: e.page_name,
                    module_name: e.module_name,
                    children: (0, x.jsxs)("div", {
                        className: W,
                        children: [(0, x.jsxs)("div", {
                            className: Q,
                            children: [(0, x.jsx)("h1", {
                                children: Array.isArray(e.title) ? (0, x.jsxs)(x.Fragment, {
                                    children: [(0, x.jsx)("span", {
                                        children: t.t(e.title[0])
                                    }), (0, x.jsx)("span", {
                                        children: t.t(e.title[1])
                                    }), (0, x.jsx)("br", {}), t.t(e.title[2])]
                                }) : e.title
                            }), (0, x.jsx)("p", {
                                children: e.desc && t.t(e.desc)
                            }), e.showLeadCollectionForm ? (0, x.jsx)(b, {}) : (0, x.jsxs)(x.Fragment, {
                                children: [(0, x.jsx)(K, (0, n.A)((0, n.A)({}, e), {}, {
                                    isMobile: !1
                                })), (0, x.jsx)("div", {
                                    className: U,
                                    children: e.incentiveText ? t.t(e.incentiveText) : " "
                                })]
                            })]
                        }), "stack" === e.type ? (0, x.jsx)(E, (0, n.A)({}, e.resources)) : (0, x.jsx)("img", {
                            src: e.src
                        }), "stack" === e.type ? !1 === e.showLeadCollectionForm && (0, x.jsx)(K, (0, n.A)((0, n.A)({}, e), {}, {
                            isMobile: !0
                        })) : (0, x.jsx)(K, (0, n.A)((0, n.A)({}, e), {}, {
                            isMobile: !0
                        })), (0, x.jsx)("div", {
                            className: Y,
                            children: e.incentiveText ? t.t(e.incentiveText) : " "
                        })]
                    })
                })
            }
            var X = s(27652),
                q = s(19324),
                J = s(35018),
                Z = "container-idjRUV",
                $ = "textArea-2E15CV",
                ee = "textAreaTitle-wWWUjx",
                te = "textAreaSubTitle-aX0Dhq",
                se = "benefitItemsWrapper-lzNzXl",
                ne = "benefitItems-bb0LOm",
                ae = "benefitItemsIcon-KPtjMA",
                ie = "benefitItemsTitle-qaxNSe",
                le = "benefitItemsDesc-PzPPiz",
                re = "imgArea-D7dRRt",
                ce = "btn-KO9frp",
                oe = "benefitItemsLink-zbA51Z";
            const de = (e = {}) => (0, x.jsx)("svg", (0, n.A)((0, n.A)({
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), {}, {
                children: (0, x.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M5.89645 3.39645C5.70118 3.59171 5.70118 3.90829 5.89645 4.10355L9.54289 7.75L5.89645 11.3964C5.70118 11.5917 5.70118 11.9083 5.89645 12.1036C6.09171 12.2988 6.40829 12.2988 6.60355 12.1036L10.6036 8.10355C10.7988 7.90829 10.7988 7.59171 10.6036 7.39645L6.60355 3.39645C6.40829 3.20118 6.09171 3.20118 5.89645 3.39645Z",
                    fill: "currentColor"
                })
            }));

            function me(e) {
                var t, s, n, a, i;
                const r = (0, l.s)();
                return (0, x.jsxs)("div", {
                    className: Z,
                    children: [(0, x.jsxs)("div", {
                        className: $,
                        children: [e.title && (0, x.jsx)("div", {
                            className: ee,
                            children: r.t(e.title)
                        }), e.subTitle && (0, x.jsx)("div", {
                            className: te,
                            children: r.t(e.subTitle)
                        }), (0, x.jsx)("div", {
                            className: se,
                            children: e.benefits.map((e => {
                                const {
                                    newStr: t,
                                    links: s
                                } = ue(e.content);
                                return e.title ? (0, x.jsxs)("div", {
                                    className: ne,
                                    children: [(0, x.jsx)("img", {
                                        src: e.imgSrc,
                                        className: ae
                                    }), (0, x.jsx)("div", {
                                        className: ie,
                                        children: r.t(e.title)
                                    }), (0, x.jsx)("div", {
                                        className: le,
                                        children: 0 === (null == s ? void 0 : s.length) ? r.t(e.content) : (0, x.jsx)(J.k, {
                                            content: t,
                                            children: s.map(((e, t) => (0, x.jsx)(q.A, {
                                                className: oe,
                                                onClick: () => {
                                                    window.open(e.url)
                                                },
                                                children: e.text
                                            }, t)))
                                        })
                                    })]
                                }, e.title) : (0, x.jsx)(x.Fragment, {})
                            }))
                        }), (0, x.jsxs)(_, {
                            target: 0 !== (null === (t = e.ctaItems) || void 0 === t || null === (t = t.link) || void 0 === t ? void 0 : t.indexOf("/business")) ? "_blank" : void 0,
                            href: null !== (s = e.ctaItems) && void 0 !== s && s.addTrackParams ? (0, F.nr)(e.ctaItems.link) : null === (n = e.ctaItems) || void 0 === n ? void 0 : n.link,
                            onClick: () => {
                                var t, s;
                                null !== (t = e.ctaItems) && void 0 !== t && t.clickFor && F.vF.sendButtonClick({
                                    page_name: e.page_name,
                                    module_name: e.module_name,
                                    click_for: null === (s = e.ctaItems) || void 0 === s ? void 0 : s.clickFor
                                })
                            },
                            className: v()("btn btn-primary btn-lg", ce),
                            children: [(null === (a = e.ctaItems) || void 0 === a ? void 0 : a.text) && r.t(null === (i = e.ctaItems) || void 0 === i ? void 0 : i.text) || r.t("TTS_Portal_HP_2x2Multi_scene_1_btn_learn_more"), " ", (0, x.jsx)(de, {})]
                        })]
                    }), (0, x.jsx)("div", {
                        className: re,
                        style: {
                            backgroundImage: `url(${e.img})`
                        }
                    })]
                })
            }
            const ue = e => {
                const t = [];
                let s = 1;
                return {
                    newStr: null == e ? void 0 : e.replace(/\[(.+?)\]\[(.+?)\]/g, ((e, n, a) => (t.push({
                        text: n,
                        url: a
                    }), `%${s++}$s`))),
                    links: t
                }
            };
            var he = "container-RhglHM",
                xe = "bizHub-goGfC4",
                pe = "bizHubTitle-AceXdx",
                _e = "bizHubSubTitle-h1ZUsF",
                je = "bizHubSubTitleText-QxTmnb",
                ge = "bizHubSubTitleBtns-aVIk0R",
                ve = "bizHubViewport-Uzdbvr",
                Ae = "bizHubViewportItem-cD5G_V",
                fe = "hubSelected-w_Wgka",
                Ne = "hubSelectedText-tENJ4o",
                be = "hubNotSelected-Nx5eyc",
                Ce = "hubNotSelectedText-MKsIOO";

            function ye(e) {
                const [t, s] = (0, r.useState)(0), a = (0, l.s)();
                return (0, x.jsx)(I.Hg, {
                    id: e.module_name,
                    children: (0, x.jsx)(i.A, {
                        page_name: e.page_name,
                        module_name: e.module_name,
                        children: (0, x.jsx)("div", {
                            className: he,
                            children: (0, x.jsxs)("div", {
                                className: xe,
                                children: [(0, x.jsx)("div", {
                                    className: pe,
                                    children: a.t(e.title)
                                }), (0, x.jsxs)("div", {
                                    className: _e,
                                    children: [(0, x.jsx)("div", {
                                        className: je,
                                        children: a.t(e.subTitle)
                                    }), (0, x.jsx)("div", {
                                        className: ge,
                                        children: e.items.map(((n, i) => (0, x.jsx)("div", {
                                            className: v()("btn btn-primary btn-lg", i === t ? fe : be),
                                            onClick: () => {
                                                s(i), n.clickFor && F.vF.sendButtonClick({
                                                    page_name: e.page_name,
                                                    module_name: e.module_name,
                                                    click_for: n.clickFor
                                                })
                                            },
                                            children: (0, x.jsx)("div", {
                                                className: i === t ? Ne : Ce,
                                                children: a.t(n.title)
                                            })
                                        }, n.title)))
                                    })]
                                }), (0, x.jsx)("div", {
                                    className: ve,
                                    children: e.items.map(((s, a) => (0, x.jsx)("div", {
                                        className: Ae,
                                        style: {
                                            transform: `translateX(-${100*t}%)`
                                        },
                                        children: (0, x.jsx)(me, (0, n.A)({
                                            page_name: e.page_name,
                                            module_name: e.module_name
                                        }, s), a)
                                    }, a)))
                                })]
                            })
                        })
                    })
                })
            }

            function ke(e) {
                const {
                    t
                } = (0, l.s)();
                return (0, x.jsx)(i.A, {
                    page_name: e.page_name,
                    module_name: e.module_name,
                    children: (0, x.jsx)(X.I, {
                        title: t(e.title),
                        description: t(e.description),
                        maxWidth: 1200,
                        gap: "64-48",
                        children: (0, x.jsx)(me, (0, n.A)({
                            page_name: e.page_name,
                            module_name: e.module_name
                        }, e.item))
                    })
                })
            }
            var we = s(88823),
                Te = s.n(we),
                Se = s(69815),
                Ee = s(98928),
                Ie = "slideWraper-hqczd8",
                Le = "slide-nsapdQ",
                Pe = "container-XDzKyJ",
                Re = "arrowLeft-lbY988",
                Be = "arrowRight-j7rX8i",
                Fe = "disabled-SgIEKF",
                Oe = "indicator-GIyguX",
                He = "white-Hn4npJ",
                Ve = "indicator-OEKRsY",
                ze = "current-ZALidS";
            var Ke = e => {
                    const {
                        currentIndex: t,
                        count: s,
                        onChange: n,
                        className: a
                    } = e, i = Array.from({
                        length: s
                    }, (() => 0));
                    return (0, x.jsx)("div", {
                        className: v()(Ve, a),
                        children: i.map(((e, s) => (0, x.jsx)("span", {
                            className: v()({
                                [ze]: s === t
                            }),
                            onClick: () => {
                                null == n || n(s)
                            }
                        }, s)))
                    })
                },
                De = s(87972);
            var Me = ({
                    children: e,
                    slideClassName: t,
                    moveSpeed: s = 500,
                    onChange: n,
                    timingFunc: a = "cubic-bezier(0.34, 0.69, 0.1, 1)",
                    interval: i = 5e3
                }) => {
                    const l = r.Children.count(e),
                        [c, o] = (0, r.useState)("none"),
                        [d, m] = (0, r.useState)("pc"),
                        u = (0, r.useRef)(null),
                        h = (0, r.useRef)(null),
                        p = (0, r.useRef)(!1),
                        _ = (0, r.useRef)(i <= 0),
                        j = (0, r.useRef)(null),
                        [g, A] = (0, r.useState)(0),
                        f = (e = !1, t = !1, a = -1) => {
                            const i = g;
                            let r = 0;
                            r = a >= 0 ? a : i + (e ? -1 : 1), !u.current && r >= 0 && r < l && (t && h.current && (_.current = !0, window.clearInterval(h.current)), o(e ? "negative" : "positive"), A(r), null == n || n(r, i), u.current = window.setTimeout((() => {
                                o("none"), u.current = null
                            }), s))
                        };
                    let N = {};
                    "pc" === d && (N = Object.assign({
                        transitionTimingFunction: a,
                        transform: `translateX(calc(${-100*g}% - ${8*g}px))`
                    }, "none" !== c ? {
                        transitionDuration: `${s}ms`
                    } : {})), (0, r.useEffect)((() => (!_.current && i && (0, De.t3)(navigator.userAgent) && (h.current = window.setTimeout((() => {
                        0 === g && (p.current = !1), g === l - 1 && (p.current = !0), f(p.current)
                    }), i)), () => {
                        h.current && window.clearTimeout(h.current)
                    })), [i, f]), (0, r.useEffect)((() => {
                        const e = j.current,
                            t = (null == e ? void 0 : e.scrollWidth) || 0,
                            s = null == e ? void 0 : e.getBoundingClientRect(),
                            n = t / l,
                            a = Te()((() => {
                                if (e && s) {
                                    let a = Math.floor((e.scrollLeft + s.width / 2) / n);
                                    e.scrollLeft < 10 ? a = 0 : t - (e.scrollLeft + s.width) < 10 && (a = l - 1), a !== g && A(a), m("mobile")
                                }
                            }), 200),
                            i = Te()((() => {
                                window.innerWidth <= 600 ? m("mobile") : (m("pc"), null == e || e.scrollTo({
                                    left: 0
                                }))
                            }), 200);
                        return null == e || e.addEventListener("scroll", a), window.addEventListener("resize", i), () => {
                            null == e || e.removeEventListener("scroll", a), window.removeEventListener("resize", i)
                        }
                    }), [j, l, g, A, m]);
                    return (0, x.jsxs)("div", {
                        children: [(0, x.jsxs)("div", {
                            className: Ie,
                            children: [(0, x.jsx)(Se.p, {
                                className: v()(Re, {
                                    [Fe]: g <= 0
                                }),
                                onClick: () => f(!0, !0)
                            }), (0, x.jsx)("div", {
                                className: Pe,
                                ref: j,
                                children: (0, x.jsxs)("div", {
                                    className: v()(Le, t),
                                    style: N,
                                    children: [e, (0, x.jsx)("div", {
                                        className: He
                                    })]
                                })
                            }), (0, x.jsx)(Ee.m, {
                                className: v()(Be, {
                                    [Fe]: g >= l - 1
                                }),
                                onClick: () => f(!1, !0)
                            })]
                        }), l > 1 && (0, x.jsx)(Ke, {
                            count: l,
                            currentIndex: g,
                            className: Oe,
                            onChange: e => {
                                g !== e && ("mobile" === d ? (e => {
                                    const t = j.current,
                                        s = e * (((null == t ? void 0 : t.scrollWidth) || 0) / l);
                                    null == t || t.scrollTo({
                                        left: s,
                                        behavior: "smooth"
                                    })
                                })(e) : f(g > e, !0, e))
                            }
                        })]
                    })
                },
                We = "card_img-crp6Jx",
                Qe = "card_cont-J6UQRd";
            var Ue = ({
                    data: e
                }) => {
                    const {
                        t
                    } = (0, l.s)();
                    return (0, x.jsx)(Me, {
                        children: e.map(((e, s) => {
                            var n, a;
                            return (0, x.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, x.jsx)("div", {
                                    className: We,
                                    children: (0, x.jsx)("div", {
                                        children: (0, x.jsx)("img", {
                                            src: e.img
                                        })
                                    })
                                }), (0, x.jsxs)("div", {
                                    className: v()(Qe, "flex-1"),
                                    children: [(0, x.jsx)("h3", {
                                        children: t(e.title)
                                    }), null === (n = e.content) || void 0 === n ? void 0 : n.map(((e, s) => (0, x.jsx)("p", {
                                        children: t(e)
                                    }, s))), (0, x.jsx)("ul", {
                                        children: null === (a = e.tips) || void 0 === a ? void 0 : a.map(((e, s) => (0, x.jsxs)("li", {
                                            children: [(0, x.jsx)("p", {
                                                children: t(e.title)
                                            }), (0, x.jsx)("p", {
                                                children: t(e.desc)
                                            })]
                                        }, s)))
                                    })]
                                })]
                            }, s)
                        }))
                    })
                },
                Ye = "container-i65psB";

            function Ge(e) {
                const t = (0, l.s)();
                return (0, x.jsxs)(i.A, {
                    className: Ye,
                    page_name: e.page_name,
                    module_name: e.module_name,
                    children: [(0, x.jsx)(i.X, {
                        children: (0, x.jsx)("h2", {
                            children: t.t("TTS_Portal_showcase")
                        })
                    }), (0, x.jsx)(Ue, {
                        data: e.items
                    })]
                })
            }
            var Xe = "commerceSolution-XybeBy",
                qe = "commerceSolutionTitle-aoKbHC",
                Je = "commerceSolutionSubTitle-ehrOJG",
                Ze = "showCase-WvpxOS",
                $e = "showCaseContent-Rgw04n",
                et = "showCaseContentWrapper-StjkPq",
                tt = "showCaseContentTitle-k3Grvq",
                st = "showCaseContentText-GFjwyO";

            function nt(e) {
                const t = (0, l.s)(),
                    s = (0, x.jsx)(x.Fragment, {
                        children: e.items.map((e => (0, x.jsxs)("div", {
                            className: $e,
                            children: [(0, x.jsx)("video", {
                                muted: !0,
                                playsInline: !0,
                                autoPlay: !0,
                                loop: !0,
                                poster: e.imgHolderSrc,
                                children: (0, x.jsx)("source", {
                                    src: e.imgSrc
                                })
                            }), (0, x.jsx)("div", {
                                className: tt,
                                children: t.t(e.title)
                            }), (0, x.jsx)("div", {
                                className: st,
                                children: t.t(e.content)
                            })]
                        }, e.title)))
                    });
                return (0, x.jsx)(I.Hg, {
                    id: e.module_name,
                    children: (0, x.jsx)(i.A, {
                        page_name: e.page_name,
                        module_name: e.module_name,
                        children: (0, x.jsxs)("div", {
                            className: Xe,
                            children: [(0, x.jsx)("h2", {
                                children: (0, x.jsx)(J.k, {
                                    className: qe,
                                    content: t.t(e.title || ""),
                                    children: e.titleHighlight && (0, x.jsx)("span", {
                                        style: {
                                            color: "#fe2c55"
                                        },
                                        children: t.t(e.titleHighlight)
                                    })
                                })
                            }), (0, x.jsx)("div", {
                                className: Je,
                                children: t.t(e.subTitle || "")
                            }), (0, x.jsx)("div", {
                                className: Ze,
                                children: (0, x.jsx)("div", {
                                    className: et,
                                    children: s
                                })
                            })]
                        })
                    })
                })
            }
            var at = s(35084),
                it = s(86239),
                lt = "horizontal-list-MTttXk";
            var rt = function({
                    dataSource: e,
                    children: t
                }) {
                    return (0, x.jsx)("div", {
                        className: lt,
                        children: e.map(((e, s) => (0, x.jsx)("div", {
                            className: "horizontal-list-item flex-1",
                            children: t(e)
                        }, s)))
                    })
                },
                ct = s(54814);
            let ot = function(e) {
                return e.PAGE_VIEW = "page_view", e.PAGE_VIEW_3S = "page_view_3s", e.REG_CLICK = "reg_click", e.REG_DONE = "reg_done", e.LOGIN_CLICK = "login_click", e.LOGIN_DONE = "login_done", e.NAV_CLICK = "nav_click", e.NAV_LEARN_MORE = "nav_learn_more", e.LEARN_MORN_CLICK = "learn_morn_click", e.CAT_CLICK = "cat_click", e
            }({});
            ot.PAGE_VIEW, ot.PAGE_VIEW_3S, ot.REG_CLICK, ot.REG_DONE, ot.LOGIN_CLICK, ot.LOGIN_DONE, ot.NAV_CLICK, ot.NAV_LEARN_MORE, ot.LEARN_MORN_CLICK, ot.CAT_CLICK, ot.PAGE_VIEW, ot.PAGE_VIEW_3S, ot.REG_CLICK, ot.REG_DONE, ot.LOGIN_CLICK, ot.LOGIN_DONE, ot.NAV_CLICK, ot.NAV_LEARN_MORE, ot.LEARN_MORN_CLICK, ot.CAT_CLICK;
            const dt = e => {
                window.gtag && window.gtag("event", e)
            };
            var mt = "container-k7b6wg",
                ut = "bg01-epFszE",
                ht = "bg02-j8sA3x",
                xt = "content-Gekb4H",
                pt = "ruletype-card-qYMQ5c",
                _t = "ruletype-title-ujbLHV",
                jt = "btn-_zRYqe";
            const gt = ({
                data: e
            }) => (0, x.jsxs)("div", {
                className: pt,
                children: [(0, x.jsx)("img", {
                    src: e.img
                }), (0, x.jsx)("div", {
                    className: _t,
                    children: e.name
                }), (0, x.jsxs)(_, {
                    target: 0 !== e.link.indexOf("/business") ? "_blank" : void 0,
                    href: e.link,
                    className: v()("btn btn-primary btn-lg", jt),
                    onClick: () => {
                        dt(ot.CAT_CLICK), e.clickFor && F.vF.sendButtonClick({
                            click_for: e.clickFor
                        })
                    },
                    appendTrackParams: F.nr,
                    children: [e.button, " ", (0, x.jsx)(ct.Q, {})]
                })]
            });

            function vt(e) {
                const t = (0, l.s)(),
                    s = e.items.map((e => ({
                        name: t.t(e.name),
                        img: e.image,
                        button: t.t(e.button),
                        clickFor: e.cta.click_for,
                        link: e.cta.action.track ? (0, F.nr)(e.cta.action.url) : e.cta.action.url
                    })));
                return (0, x.jsx)(I.Hg, {
                    id: e.module_name,
                    children: (0, x.jsxs)(i.A, {
                        className: mt,
                        page_name: e.page_name,
                        module_name: e.module_name,
                        children: [(0, x.jsx)("div", {
                            className: ut
                        }), (0, x.jsx)("div", {
                            className: ht
                        }), (0, x.jsxs)("div", {
                            className: xt,
                            children: [(0, x.jsx)("h1", {
                                children: t.t("TTS_Portal_HP_HTJ_title")
                            }), (0, x.jsx)("p", {
                                children: t.t("TTS_Portal_HP_HTJ_desc")
                            })]
                        }), (0, x.jsx)(rt, {
                            dataSource: s,
                            children: e => (0, x.jsx)(gt, {
                                data: e
                            }, e.name)
                        })]
                    })
                })
            }
            var At = s(88366),
                ft = s(41471),
                Nt = "ContentWrapper-uY7xYj",
                bt = "title-E9YEB5",
                Ct = "contentContainer-kve4rc",
                yt = "contentItem-lyDYmG",
                kt = "anchor-mdLWCu";

            function wt(e) {
                const {
                    language: t
                } = (0, h.A)(), s = (0, l.s)();
                return (0, x.jsx)(i.A, {
                    page_name: e.page_name,
                    module_name: e.module_name,
                    children: (0, x.jsxs)("div", {
                        className: Nt,
                        children: [(0, x.jsx)("div", {
                            className: bt,
                            children: s.t(e.title)
                        }), (0, x.jsx)("div", {
                            className: Ct,
                            children: e.list.map(((e, n) => (0, x.jsxs)("div", {
                                className: yt,
                                children: [(0, x.jsx)("div", {
                                    className: bt,
                                    children: s.t(e.title)
                                }), (0, x.jsxs)("a", {
                                    href: (0, ft.FP)({
                                        lang: t
                                    }, {
                                        Url: e.link.url
                                    }),
                                    target: "_blank",
                                    className: kt,
                                    children: [s.t(e.link.text), (0, x.jsx)(At.A, {
                                        style: {
                                            marginLeft: 8,
                                            top: 10
                                        }
                                    })]
                                })]
                            }, n)))
                        })]
                    })
                })
            }
            var Tt = s.p + "static/image/play.b7c7a9bf.png",
                St = "video-player-container-BBwh7Y",
                Et = "video-player-TUumBl",
                It = "play-pause-button-QytOhi";
            var Lt = function(e) {
                    const [t, s] = (0, r.useState)(!1), [n, a] = (0, r.useState)(!0), i = (0, r.useRef)(null), l = () => {
                        var e, n;
                        t ? (null === (e = i.current) || void 0 === e || e.pause(), F.vF.sendButtonClick({
                            page_name: "portal_about_section",
                            click_for: "pause"
                        })) : (null === (n = i.current) || void 0 === n || n.play(), F.vF.sendButtonClick({
                            page_name: "portal_about_section",
                            click_for: "play"
                        }));
                        s(!t)
                    };
                    return (0, x.jsxs)("div", {
                        className: St,
                        children: [(0, x.jsx)("video", {
                            preload: "metadata",
                            className: v()(null == e ? void 0 : e.className, Et),
                            onLoadedData: () => {
                                a(!1)
                            },
                            style: {
                                backgroundColor: n ? "#000" : "transparent"
                            },
                            ref: i,
                            src: e.src,
                            controls: !1,
                            autoPlay: e.autoPlay,
                            playsInline: !0,
                            muted: !0,
                            onEnded: () => s(!1),
                            onPlay: () => s(!0),
                            onPause: () => s(!1),
                            onClick: l
                        }), !t && (0, x.jsx)("img", {
                            src: Tt,
                            className: It,
                            onClick: l
                        })]
                    })
                },
                Pt = s(51434),
                Rt = "container-_xRqXr",
                Bt = "poweredByTiktok-alcJER",
                Ft = "poweredByTiktokTitle-CQBHye",
                Ot = "poweredByTiktokSubTitle-ZrdwQU",
                Ht = "contentContainer-DHZKln",
                Vt = "left-jEz4qM",
                zt = "videoPlayer-csCHQT",
                Kt = "right-tTHABk",
                Dt = "box-MPYyWZ",
                Mt = "image-orqzQf",
                Wt = "title-in8HJw",
                Qt = "description-hm4GbL";
            const Ut = ["onContentInViewChange"];

            function Yt(e) {
                const {
                    onContentInViewChange: t
                } = e, s = (0, a.A)(e, Ut), n = (0, l.s)(), [c, o] = (0, Pt.A)();
                return (0, r.useEffect)((() => {
                    null == t || t(o)
                }), [o]), (0, x.jsx)(i.A, {
                    page_name: e.page_name,
                    module_name: e.module_name,
                    children: (0, x.jsx)(I.Hg, {
                        id: e.module_name,
                        className: Rt,
                        children: (0, x.jsxs)("div", {
                            className: Bt,
                            children: [(0, x.jsx)(J.k, {
                                className: Ft,
                                content: n.t(s.title),
                                children: (0, x.jsx)("span", {
                                    style: {
                                        color: "#fe2c55"
                                    },
                                    children: n.t(s.highlightText)
                                })
                            }), (0, x.jsx)("div", {
                                className: Ot,
                                children: n.t(s.subTitle)
                            }), (0, x.jsx)("div", {}), (0, x.jsxs)("div", {
                                className: Ht,
                                ref: c,
                                children: [(0, x.jsx)("div", {
                                    className: Vt,
                                    children: (0, x.jsx)(Lt, {
                                        autoPlay: !0,
                                        src: s.videoURL,
                                        className: zt
                                    })
                                }), (0, x.jsx)("div", {
                                    className: Kt,
                                    children: s.items.map(((e, t) => (0, x.jsxs)("div", {
                                        className: Dt,
                                        children: [(0, x.jsx)("img", {
                                            className: Mt,
                                            src: e.imgSrc
                                        }), (0, x.jsxs)("div", {
                                            children: [(0, x.jsx)("div", {
                                                className: Wt,
                                                children: e.title
                                            }), (0, x.jsx)("div", {
                                                className: Qt,
                                                children: e.subTitle
                                            })]
                                        })]
                                    }, t)))
                                })]
                            })]
                        })
                    })
                })
            }
            const Gt = e => {
                const {
                    text: t,
                    className: s,
                    style: n,
                    needTrim: a = !0
                } = e, i = a ? t.trim() : t;
                return i ? (0, x.jsx)("span", {
                    className: s,
                    style: n,
                    children: i.split(/\\n|<br\/>|\n/).map(((e, t) => (0, x.jsxs)(r.Fragment, {
                        children: [t > 0 && (0, x.jsx)("br", {}), (0, x.jsx)("span", {
                            children: e
                        })]
                    }, t)))
                }) : null
            };
            var Xt = "ContentWrapper-k2RVtT",
                qt = "title-eO1XFh",
                Jt = "anchor-pzkGce",
                Zt = "FoldAndUnfold-jy4t6E",
                $t = "item-F6AI9s",
                es = "titleContent-xXZOwP",
                ts = "button-vI8Bas",
                ss = "content-ok2JbJ",
                ns = "divider-QUrStA";

            function as(e) {
                const {
                    item: t
                } = e, s = (0, l.s)(), n = (0, r.useRef)(null), a = (0, r.useRef)(null), [i, c] = (0, r.useState)(!0);
                return (0, r.useEffect)((() => {
                    c(t.isUnfolded)
                }), []), (0, x.jsxs)("div", {
                    className: $t,
                    onClick: () => {
                        c(!i)
                    },
                    children: [(0, x.jsxs)("div", {
                        ref: a,
                        className: qt,
                        children: [(0, x.jsx)("div", {
                            className: es,
                            children: s.t(t.title)
                        }), (0, x.jsx)("img", {
                            className: ts,
                            src: i ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACWSURBVHgB7dTBDcJADETRcWiAQkI1SLlCB0AFQAWQDuCK6AYKoQEYtgJ2c2IT/XceWbIsjwQAAAAAAAAAmJQYEnbb7R3eyprrn0KvUFzicdvlo4W86E52Wq4ilo+z5/3wK9OodJi9VmXSFTe5TPGCY1V+QblXZazPNZcZVDLvdnmOaFY1lEx6mT73fwAAAAAAAACACfoCzIQmBZklHH4AAAAASUVORK5CYII=" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEGSURBVHgB7drBDYJAEAXQWWzAQrAao1ftQK1ArUDpQK9qN1IIDci4kcjBbHSI7MCQ/44TE/kBNvwFIgAAABgsR4o4nW/Z8br6Y3dy98uGIlMLyJP5gbkKV8+I96P8tqOIElLiwy0/Z/4srigytYDeWDhrlWbATiCgdQhoHQJah4DWIaB1gw/YqC7VfY7jPyR/5aiQ9klxwFCf65qkT4ov0VCf65qkT2KRefOXQ0Y9w1Sef/2m0SLzSKdH55JFHxYZf8tkkv0ctU2nMp1xaJ7k16jHgHvQOgS0DgGtQ0DrENA6BLROM2AhnLVK7w1voE9K+ty/VD9CqPskvbZAstjv5wEAAGDgnmU1Tjz9MULiAAAAAElFTkSuQmCC"
                        })]
                    }), i && (0, x.jsx)("div", {
                        ref: n,
                        children: (0, x.jsx)("div", {
                            className: ss,
                            children: t.link ? (0, x.jsx)(J.k, {
                                content: s.t(t.content),
                                children: t.link.map(((e, t) => (0, x.jsx)("span", {
                                    style: {
                                        color: "#fe2c55"
                                    },
                                    onClick: () => window.open(e.url),
                                    children: s.t(e.text)
                                }, t)))
                            }) : (0, x.jsx)(Gt, {
                                text: s.t(t.content)
                            })
                        })
                    })]
                })
            }

            function is(e) {
                const t = (0, l.s)();
                return (0, x.jsx)(i.A, {
                    page_name: e.page_name,
                    module_name: e.module_name,
                    children: (0, x.jsxs)("div", {
                        "data-scroll": !0,
                        className: Xt,
                        children: [(0, x.jsx)("div", {
                            className: qt,
                            children: t.t(e.title)
                        }), (0, x.jsx)(ls, {
                            list: e.list
                        }), (0, x.jsxs)("a", {
                            href: "https://seller-uk.tiktok.com/university/faq?content_id=6451211347920642&identity=1",
                            target: "_blank",
                            className: Jt,
                            onClick: () => {
                                F.vF.sendButtonClick({
                                    page_type: "page",
                                    page_name: "tts_portal_main_page",
                                    click_for: "portal_faq"
                                })
                            },
                            children: [t.t("TTS_Portal_faq_read_more_uk"), (0, x.jsx)(At.A, {
                                style: {
                                    marginLeft: 8
                                }
                            })]
                        })]
                    })
                })
            }

            function ls({
                list: e
            }) {
                return (0, x.jsx)("div", {
                    className: Zt,
                    children: e.map(((t, s) => (0, x.jsxs)("div", {
                        children: [(0, x.jsx)(as, {
                            item: t
                        }), s === e.length ? null : (0, x.jsx)("div", {
                            className: ns
                        })]
                    }, t.title)))
                })
            }
            const rs = (e = {}) => (0, x.jsx)("svg", (0, n.A)((0, n.A)({
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), {}, {
                children: (0, x.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M5.89645 3.39645C5.70118 3.59171 5.70118 3.90829 5.89645 4.10355L9.54289 7.75L5.89645 11.3964C5.70118 11.5917 5.70118 11.9083 5.89645 12.1036C6.09171 12.2988 6.40829 12.2988 6.60355 12.1036L10.6036 8.10355C10.7988 7.90829 10.7988 7.59171 10.6036 7.39645L6.60355 3.39645C6.40829 3.20118 6.09171 3.20118 5.89645 3.39645Z",
                    fill: "currentColor"
                })
            }));
            var cs = "section-rP7VvO",
                os = "container-oIyHNA",
                ds = "btn-V8jO0H";
            var ms = ({
                    img: e,
                    title: t,
                    desc: s,
                    link: n,
                    clickFor: a
                }) => {
                    const i = (0, l.s)();
                    return (0, x.jsx)("section", {
                        className: v()(cs),
                        children: (0, x.jsxs)("div", {
                            className: v()(os),
                            children: [(0, x.jsx)("img", {
                                src: e,
                                alt: s
                            }), (0, x.jsxs)("div", {
                                children: [(0, x.jsxs)("div", {
                                    children: [(0, x.jsx)("h3", {
                                        children: t
                                    }), (0, x.jsx)("p", {
                                        children: s
                                    })]
                                }), n && (0, x.jsxs)(_, {
                                    target: 0 !== n.indexOf("/business") ? "_blank" : void 0,
                                    href: n,
                                    className: v()("btn btn-primary btn-lg", ds),
                                    onClick: () => {
                                        dt(ot.LEARN_MORN_CLICK), a && F.vF.sendButtonClick({
                                            click_for: a
                                        })
                                    },
                                    children: [i.t("TTS_Portal_HP_2x2Multi_scene_1_btn_learn_more"), " ", (0, x.jsx)(rs, {})]
                                })]
                            })]
                        })
                    })
                },
                us = "container-ww9mcv";

            function hs(e) {
                const {
                    t
                } = (0, l.s)();
                return (0, x.jsx)(i.A, {
                    page_name: e.page_name,
                    module_name: e.module_name,
                    children: (0, x.jsx)("ul", {
                        className: v()(us, e.className),
                        children: e.items.map(((e, s) => (0, x.jsx)("li", {
                            children: (0, x.jsx)("div", {
                                children: (0, x.jsx)(ms, {
                                    img: e.img,
                                    title: t(e.title),
                                    desc: t(e.desc),
                                    link: e.link,
                                    clickFor: e.clickFor
                                })
                            })
                        }, s)))
                    })
                })
            }
            var xs = s(94250),
                ps = "container-fwZycL",
                _s = "content-n9xEyR",
                js = "childContainer-L0XkLY",
                gs = "image-YHbCWV",
                vs = "title-smRayl",
                As = "text-fYkYB4",
                fs = "button-eZDoLc";

            function Ns(e) {
                const t = (0, l.s)();
                return (0, x.jsx)(i.A, {
                    page_name: e.page_name,
                    module_name: e.module_name,
                    className: ps,
                    children: (0, x.jsx)("div", {
                        className: _s,
                        children: e.items.map(((e, s) => (0, x.jsxs)("div", {
                            className: js,
                            children: [(0, x.jsx)("img", {
                                className: gs,
                                src: e.img,
                                alt: "your-image-alt"
                            }), (0, x.jsx)("h1", {
                                className: vs,
                                children: t.t(e.title)
                            }), (0, x.jsx)("div", {
                                className: As,
                                children: t.t(e.content)
                            }), (0, x.jsxs)(xs.A, {
                                type: "outline",
                                className: fs,
                                onClick: () => {
                                    F.vF.sendButtonClick({
                                        page_name: "portal_resource_section",
                                        click_for: 0 === s ? "visit_academy" : "visit_affiliate"
                                    }), window.open(e.link.url)
                                },
                                children: [t.t(e.link.text), (0, x.jsx)(ct.Q, {})]
                            })]
                        }, s)))
                    })
                })
            }
            var bs = s(10594),
                Cs = "statisticNumber-mH3RU6",
                ys = "lightTheme-Vx3iXT",
                ks = "statisticNumberTitle-ZVsk2P",
                ws = "showCase-Dzztxg",
                Ts = "showCaseContent-oFvWea",
                Ss = "showCaseContentWrapper-AaxiSa",
                Es = "showCaseContentTitle-hrXipq",
                Is = "showCaseContentSubTitle-XDwawG",
                Ls = "showCaseContentText-iJdpg2",
                Ps = "Tips-k3JfBS";

            function Rs(e) {
                const [t, s] = (0, Pt.A)(), n = (0, r.useRef)([]);
                (0, r.useEffect)((() => {
                    s && (null == n || n.current.map((e => {
                        null == e || e.countUp()
                    })))
                }), [s]);
                const a = (0, x.jsx)(x.Fragment, {
                    children: e.items.map(((e, t) => {
                        return (0, x.jsxs)("div", {
                            className: Ts,
                            children: [(null == e ? void 0 : e.imgHolderSrc) && (null == e ? void 0 : e.imgSrc) && (0, x.jsx)("video", {
                                muted: !0,
                                autoPlay: !0,
                                playsInline: !0,
                                loop: !0,
                                poster: null == e ? void 0 : e.imgHolderSrc,
                                children: (0, x.jsx)("source", {
                                    src: null == e ? void 0 : e.imgSrc
                                })
                            }), (0, x.jsxs)("div", {
                                children: [(0, x.jsx)(bs.A, {
                                    ref: e => n.current[t] = e,
                                    className: Es,
                                    precision: (s = e.title.trim(), s && /^[+-]?\d+$/.test(s) ? 0 : 1),
                                    value: e.title.trim(),
                                    countUp: !0
                                }), (0, x.jsx)("span", {
                                    className: Is,
                                    children: e.subTitle
                                })]
                            }), (0, x.jsxs)("div", {
                                className: Ls,
                                children: [e.content, (0, x.jsx)("sub", {
                                    children: t + 1
                                })]
                            })]
                        }, e.title);
                        var s
                    }))
                });
                return (0, x.jsx)(i.A, {
                    page_name: e.page_name,
                    module_name: e.module_name,
                    children: (0, x.jsxs)("div", {
                        ref: t,
                        className: v()(Cs, "light" === e.theme ? ys : ""),
                        children: [e.title && (0, x.jsx)("h2", {
                            className: ks,
                            children: e.title
                        }), (0, x.jsx)("div", {
                            className: ws,
                            children: (0, x.jsx)("div", {
                                className: Ss,
                                children: a
                            })
                        }), (0, x.jsx)("div", {
                            className: Ps,
                            children: e.tips
                        })]
                    })
                })
            }
            var Bs = s.p + "static/image/why-left.cfd65003.png",
                Fs = "container-_wj5k0",
                Os = "banner-bg-VT8adu",
                Hs = "banner-b28s6e",
                Vs = "text-box-sdD15s";

            function zs(e) {
                const t = (0, l.s)();
                return (0, x.jsx)(I.Hg, {
                    id: e.module_name,
                    children: (0, x.jsxs)(i.A, {
                        page_name: e.page_name,
                        module_name: e.module_name,
                        className: Fs,
                        children: [(0, x.jsx)("div", {
                            className: Os
                        }), (0, x.jsxs)("div", {
                            className: Hs,
                            children: [(0, x.jsx)("img", {
                                src: Bs,
                                alt: ""
                            }), (0, x.jsxs)("div", {
                                className: Vs,
                                children: [(0, x.jsx)("h1", {
                                    children: t.t("TTS_Portal_HP_Addon_title")
                                }), (0, x.jsx)("p", {
                                    children: t.t("TTS_Portal_HP_Addon_desc")
                                })]
                            })]
                        })]
                    })
                })
            }
            var Ks = s(6029),
                Ds = s(68089),
                Ms = s(59720),
                Ws = s(59868),
                Qs = "container-lVKxBg";
            Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;

            function Us(e, t) {
                return e ? s => t.isCanceled ? s : e(s) : null
            }

            function Ys(e, t) {
                const s = {
                    then: (s, n) => Ys(e.then(Us(s, t), Us(n, t)), t),
                    catch: s => Ys(e.catch(Us(s, t)), t),
                    finally: (s, n) => (n && (t.finallyList || (t.finallyList = []), t.finallyList.push(s)), Ys(e.finally((() => (n && (t.finallyList = t.finallyList.filter((e => e !== s))), s()))), t)),
                    cancel() {
                        t.isCanceled = !0;
                        for (const e of [t.onCancelList, t.finallyList])
                            if (e)
                                for (; e.length;) {
                                    const t = e.shift();
                                    "function" == typeof t && t()
                                }
                    },
                    isCanceled: () => !0 === t.isCanceled
                };
                return {
                    then: s.then.bind(void 0),
                    catch: s.catch.bind(void 0),
                    finally: s.finally.bind(void 0),
                    cancel: s.cancel.bind(void 0),
                    isCanceled: s.isCanceled.bind(void 0)
                }
            }

            function Gs(e) {
                return Ys(e, {})
            }

            function Xs(e) {
                const t = [];
                return Ys(new Promise(((s, n) => e(s, n, (e => {
                    t.push(e)
                })))), {
                    onCancelList: t
                })
            }
            Xs.all = e => Gs(Promise.all(e)), Xs.allSettled = e => Gs(Promise.allSettled(e)), Xs.race = e => Gs(Promise.race(e)), Xs.resolve = e => Gs(Promise.resolve(e)), Xs.reject = e => Gs(Promise.reject(e));
            var qs = (e, t, s) => {};
            qs.send = () => {}, qs.predefinePageView = e => {}, qs.beconEvent = (e, t) => {}, qs.pageShow = e => {}, qs.buttonClick = e => {}, qs.pageDuration = e => {}, qs.submitResult = e => {};
            var Js = (e => (e.RequestError = "request_error", e.ServerDataError = "server_data_error", e.UserDataError = "user_data_error", e.SDKError = "sdk_error", e.BrowserError = "browser_error", e.Other = "other", e))(Js || {});

            function Zs(e) {
                const {
                    catchType: t,
                    catchEvent: s,
                    errorCode: n
                } = e
            }
            const $s = e => {
                    if (!e) return {};
                    try {
                        return JSON.parse(e)
                    } catch (t) {
                        return Zs({
                            error: t,
                            catchType: "try_catch",
                            errorType: Js.BrowserError,
                            catchEvent: "json_parse"
                        }), {}
                    }
                },
                en = e => {
                    let t = null;
                    try {
                        t = window.sessionStorage.getItem(e)
                    } catch (s) {
                        Zs({
                            error: s,
                            catchType: "try_catch",
                            errorType: Js.BrowserError,
                            catchEvent: "get_sessionStorage"
                        })
                    }
                    return t
                },
                tn = "portal_libra",
                sn = (e, t) => {
                    const s = $s(en(tn));
                    s[e] = t, ((e, t) => {
                        try {
                            window.sessionStorage.setItem(e, t)
                        } catch (s) {
                            Zs({
                                error: s,
                                catchType: "try_catch",
                                errorType: Js.BrowserError,
                                catchEvent: "set_sessionStorage"
                            })
                        }
                    })(tn, JSON.stringify(s))
                },
                nn = "show_tts_portal_lead_colletion_forms";
            var an = e => {
                    var t;
                    const {
                        region: s
                    } = (0, h.A)();
                    (0, r.useEffect)((() => {
                        if ("undefined" != typeof window) {
                            (0, F.b)({
                                page_name: e,
                                region: s
                            });
                            const t = setTimeout((() => {
                                dt(ot.PAGE_VIEW_3S)
                            }), 3e3);
                            return () => clearTimeout(t)
                        }
                    }), []);
                    const n = $s(en(tn)),
                        [a, i] = (0, r.useState)(null !== (t = null == n ? void 0 : n[nn]) && void 0 !== t && t);
                    return (0, r.useEffect)((() => {
                        var e, t, s;
                        e = nn, t = !1, s = i, F.vF.getLibraVars(e, t, (t => {
                            s(t), sn(e, t)
                        }))
                    }), []), {
                        libraShowSubscribeButton: a
                    }
                },
                ln = s.p + "static/media/background-video.f205ae34.mp4",
                rn = s.p + "static/image/placeholder.51c39b76.png",
                cn = "container-TfdhKg",
                on = "video-rlgZ9h",
                dn = "title-Zz5Ux7",
                mn = "content-QbdSHR",
                un = "ctaButton-obwTxl";

            function hn(e) {
                const {
                    t
                } = (0, l.s)(), {
                    context: s
                } = (0, u.A)(), {
                    title: n,
                    incentiveText: a,
                    cta: i
                } = e;
                return (0, x.jsxs)("div", {
                    className: cn,
                    children: [(0, x.jsx)("video", {
                        className: on,
                        src: ln,
                        poster: rn,
                        autoPlay: !0,
                        playsInline: !0,
                        muted: !0,
                        loop: !0,
                        onError: e => console.error("Video error:", e)
                    }), (0, x.jsx)("div", {
                        className: dn,
                        children: (0, x.jsx)("h2", {
                            children: t(n)
                        })
                    }), (0, x.jsx)("div", {
                        className: mn,
                        children: a ? t(a) : ""
                    }), (0, x.jsx)(_, {
                        className: un,
                        onClick: () => {
                            (0, Ms.QE)(i, {
                                context: s,
                                page_name: e.page_name,
                                module_name: e.module_name
                            })
                        },
                        children: t(i.content)
                    })]
                })
            }
            var xn = s(38386),
                pn = "container-PVdFZE",
                _n = "imageStackContainer-p137NF",
                jn = "content-Xfmq_y",
                gn = "title-EkPmhS",
                vn = "boxContainer-X37naX",
                An = "box-S3LUYv",
                fn = "image-lRDsRc",
                Nn = "itemTitle-z8nTVS",
                bn = "description-fSfefh";

            function Cn(e) {
                var t;
                const {
                    t: s
                } = (0, l.s)();
                return (0, x.jsx)(i.A, {
                    page_name: e.page_name,
                    module_name: e.module_name,
                    children: (0, x.jsxs)("div", {
                        className: pn,
                        children: [(0, x.jsx)("div", {
                            className: _n,
                            children: (0, x.jsx)(E, (0, n.A)({
                                size: "small"
                            }, e.resources))
                        }), (0, x.jsxs)("div", {
                            className: jn,
                            children: [(0, x.jsx)("h2", {
                                className: gn,
                                children: (0, x.jsx)(xn.z, {
                                    text: s(e.title),
                                    highlight: s(e.titleHighlight),
                                    highlightStyle: {
                                        color: "#FE2C55"
                                    }
                                })
                            }), (0, x.jsx)("div", {
                                className: vn,
                                children: null === (t = e.items) || void 0 === t ? void 0 : t.map(((e, t) => (0, x.jsxs)("div", {
                                    className: An,
                                    children: [(0, x.jsx)("img", {
                                        className: fn,
                                        src: e.imgSrc
                                    }), (0, x.jsxs)("div", {
                                        children: [(0, x.jsx)("div", {
                                            className: Nn,
                                            children: s(e.title)
                                        }), (0, x.jsx)("div", {
                                            className: bn,
                                            children: (0, x.jsx)("ul", {
                                                children: e.bullets.map((e => (0, x.jsx)("li", {
                                                    children: s(e)
                                                }, e)))
                                            })
                                        })]
                                    })]
                                }, t)))
                            })]
                        })]
                    })
                })
            }
            var yn = s(72796),
                kn = "storiesWrapper-uGa1ir",
                wn = "carousel-dZNp7b",
                Tn = "mobileCarousel-mhM8mW",
                Sn = "cardCarousel-Ho5POw",
                En = "header-yCAqoP",
                In = "title-TQT3tf",
                Ln = "subTitle-fL6MEh",
                Pn = "card-UKhtVN",
                Rn = "imageContainer-Hc9d9X",
                Bn = "image-Kr9ob0",
                Fn = "description-aOxKTa",
                On = "stats-T1AcA9",
                Hn = "statsCard-OrE6LZ",
                Vn = "statistic-ovEP9T";

            function zn(e) {
                var t, s;
                const a = e => {
                        var t;
                        return (0, x.jsxs)("div", {
                            className: Pn,
                            children: [(0, x.jsx)("div", {
                                className: Rn,
                                children: (0, x.jsx)("img", {
                                    className: Bn,
                                    src: e.img
                                })
                            }), (0, x.jsx)("div", {
                                className: Fn,
                                children: e.description
                            }), (0, x.jsx)("div", {
                                className: On,
                                children: null === (t = e.stats) || void 0 === t ? void 0 : t.map(((e, t) => (0, x.jsx)(l, (0, n.A)({}, e), t)))
                            })]
                        })
                    },
                    l = e => (0, x.jsxs)("div", {
                        className: Hn,
                        children: [(0, x.jsx)("div", {
                            className: Vn,
                            children: e.statistic
                        }), (0, x.jsx)("div", {
                            className: Fn,
                            children: e.description
                        })]
                    });
                return (0, x.jsxs)(i.A, {
                    page_name: e.page_name,
                    module_name: e.module_name,
                    className: kn,
                    children: [(0, x.jsxs)("div", {
                        className: En,
                        children: [(0, x.jsx)("h2", {
                            className: In,
                            children: e.title
                        }), (0, x.jsx)("div", {
                            className: Ln,
                            children: e.subtitle
                        })]
                    }), (0, x.jsx)(yn.YC, {
                        className: wn,
                        children: null === (t = e.items) || void 0 === t ? void 0 : t.map(((e, t) => (0, x.jsx)(a, (0, n.A)({}, e), t)))
                    }), (0, x.jsx)("div", {
                        className: Tn,
                        children: (0, x.jsx)(yn.YX, {
                            className: Sn,
                            hideIndex: !0,
                            autoPlay: !0,
                            children: null === (s = e.items) || void 0 === s ? void 0 : s.map(((e, t) => (0, x.jsx)(a, (0, n.A)({}, e), t)))
                        })
                    })]
                })
            }
            var Kn = "container-stLsyM";

            function Dn(e) {
                const {
                    t
                } = (0, l.s)();
                return (0, x.jsx)(i.A, {
                    page_name: e.page_name,
                    module_name: e.module_name,
                    className: "w-full bg-[#0F0F0F]",
                    children: (0, x.jsxs)("div", {
                        className: v()("flex flex-col justify-center items-center", Kn),
                        children: [(0, x.jsx)("div", {
                            className: "w-[100px] h-[100px] mb-4",
                            children: e.icon
                        }), (0, x.jsx)("h2", {
                            className: "text-center text-brand-white text-3xl font-bold max-w-[400px]",
                            children: t(e.title)
                        }), (0, x.jsx)(_, {
                            className: v()("bg-brand-red rounded-4 px-24 py-12 text-lg font-bold h-48 text-brand-white hover:bg-[#ff4a6e]", "mt-36"),
                            onClick: e.onClick,
                            children: t(e.cta)
                        })]
                    })
                })
            }
            const Mn = ["title", "incentiveText"],
                Wn = ["title"],
                Qn = Ks.O0.seller,
                Un = ({
                    getModifiedSchema: e
                }) => {
                    const {
                        context: t
                    } = (0, u.A)(), {
                        libraShowSubscribeButton: s
                    } = an("seller"), {
                        t: i
                    } = (0, l.s)(), [c, o] = (0, r.useState)(!1), [d, m] = (0, r.useState)(!1), h = (0, r.useMemo)((() => e()), []);
                    (0, r.useEffect)((() => {
                        0 !== h.filter((e => "SubscribeButton" === e.type)).length && m(s)
                    }), [s]);
                    const p = (0, r.useCallback)((() => (0, x.jsx)(x.Fragment, {
                        children: h.map(((e, s) => {
                            if ("MainBanner" === e.type) {
                                const t = e.data,
                                    {
                                        title: i,
                                        incentiveText: l
                                    } = t,
                                    r = (0, a.A)(t, Mn);
                                return (0, x.jsx)(hn, (0, n.A)({
                                    page_name: Qn,
                                    title: i,
                                    incentiveText: l
                                }, r), s)
                            }
                            if ("Banner" === e.type) {
                                const i = e.data,
                                    {
                                        title: l
                                    } = i,
                                    r = (0, a.A)(i, Wn),
                                    c = {
                                        context: t,
                                        page_name: Qn,
                                        module_name: e.data.module_name
                                    };
                                return (0, x.jsx)(G, (0, n.A)({
                                    page_name: Qn,
                                    showLeadCollectionForm: d,
                                    title: Array.isArray(l) ? l : (0, x.jsx)(Ms.hs, {
                                        schema: l,
                                        options: c
                                    })
                                }, r), s)
                            }
                            if ("SubscribeButton" === e.type) return d ? (0, x.jsx)(Ws.n, {
                                appId: parseInt(4068),
                                openSubscribeButton: c,
                                channelType: "tts_portal"
                            }, s) : null;
                            if ("PoweredByTikTok" === e.type) return (0, x.jsx)(Yt, (0, n.A)({
                                page_name: Qn,
                                onContentInViewChange: e => d && o(e)
                            }, e.data), s);
                            if ("PoweredByTikTokWithoutVideo" === e.type) {
                                const {
                                    module_name: n,
                                    title: a,
                                    description: i,
                                    items: l
                                } = e.data, r = {
                                    context: t,
                                    page_name: Qn,
                                    module_name: n
                                };
                                return (0, x.jsx)(Ds.$U, {
                                    page_name: Qn,
                                    module_name: n,
                                    title: (0, x.jsx)(Ms.hs, {
                                        schema: a,
                                        options: r
                                    }),
                                    description: (0, x.jsx)(Ms.hs, {
                                        schema: i,
                                        options: r
                                    }),
                                    items: l.map((e => ({
                                        image: e.image,
                                        title: (0, x.jsx)(Ms.hs, {
                                            schema: e.title,
                                            options: r
                                        }),
                                        description: (0, x.jsx)(Ms.hs, {
                                            schema: e.description,
                                            options: r
                                        })
                                    })))
                                }, s)
                            }
                            return "PoweredByTikTokImageStack" === e.type ? (0, x.jsx)(Cn, (0, n.A)({
                                page_name: Qn
                            }, e.data), s) : "CommerceSolution" === e.type ? (0, x.jsx)(nt, (0, n.A)({
                                page_name: Qn
                            }, e.data), s) : "BizHub" === e.type ? (0, x.jsx)(ye, {
                                page_name: Qn,
                                module_name: e.data.module_name,
                                title: e.data.title,
                                subTitle: e.data.subTitle,
                                items: e.data.list
                            }, s) : "BizHubSingle" === e.type ? (0, x.jsx)(ke, (0, n.A)({
                                page_name: Qn
                            }, e.data), s) : "StatisticNumber" === e.type ? (0, x.jsx)(Rs, (0, n.A)({
                                page_name: Qn
                            }, e.data), s) : "Stories" === e.type ? (0, x.jsx)(zn, (0, n.A)({
                                page_name: Qn
                            }, e.data), s) : "Why" === e.type ? (0, x.jsx)(zs, (0, n.A)({
                                page_name: Qn
                            }, e.data), s) : "Roles" === e.type ? (0, x.jsx)(hs, (0, n.A)({
                                page_name: Qn
                            }, e.data), s) : "Cases" === e.type ? (0, x.jsx)(Ge, (0, n.A)({
                                page_name: Qn
                            }, e.data), s) : "JoinToday" === e.type ? (0, x.jsx)(vt, (0, n.A)({
                                page_name: Qn
                            }, e.data), s) : "SiteVisitor" === e.type ? (0, x.jsx)(Ns, (0, n.A)({
                                page_name: Qn
                            }, e.data), s) : "Question" === e.type ? (0, x.jsx)(is, (0, n.A)({
                                page_name: Qn
                            }, e.data), s) : "NeedHelp" === e.type ? (0, x.jsx)(wt, (0, n.A)({
                                page_name: Qn
                            }, e.data), s) : "CTA" === e.type ? (0, x.jsx)(Dn, {
                                page_name: Qn,
                                module_name: e.data.module_name,
                                title: e.data.title,
                                icon: (0, x.jsx)("img", {
                                    className: "w-full h-full select-none",
                                    src: e.data.icon
                                }),
                                cta: e.data.cta.content,
                                onClick: () => {
                                    (0, Ms.QE)(e.data.cta, {
                                        context: t,
                                        page_name: Qn,
                                        module_name: e.data.module_name
                                    })
                                }
                            }, s) : null
                        }))
                    })), [d, c]);
                    return (0, x.jsxs)("div", {
                        className: Qs,
                        children: [(0, x.jsx)(it.Y, {
                            enableTransparent: !0
                        }), (0, x.jsx)(p, {}), (0, x.jsx)(at.w, {})]
                    })
                }
        },
        37808: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            function serialize(e) {
                if (e) return {
                    ctx: e.ctx,
                    getModifiedSchema: e.getModifiedSchema.toString()
                }
            }

            function deserialize(schema, modifier) {
                if (!modifier) return {
                    getModifiedSchema: () => schema
                };
                const {
                    ctx,
                    getModifiedSchema
                } = modifier;
                return {
                    getModifiedSchema: (...args) => eval("(" + getModifiedSchema + ")")(ctx, schema, ...args)
                }
            }
            __webpack_require__.d(__webpack_exports__, {
                i: () => deserialize
            })
        },
        38386: (e, t, s) => {
            s.d(t, {
                z: () => i
            });
            s(11855);
            var n = s(19541),
                a = s(63159);
            const i = ({
                text: e,
                highlight: t,
                caseSensitive: s = !1,
                highlightClassName: i = "highlight",
                highlightStyle: l = {
                    color: "#FE2C55"
                }
            }) => {
                const r = (0, n.s)(),
                    c = e.replace(/{(.*?)}/g, ((e, t) => r.t(t.trim())));
                if (!t || Array.isArray(t) && 0 === t.length) return (0, a.jsx)(a.Fragment, {
                    children: c
                });
                const o = (Array.isArray(t) ? t : [t]).map((e => e instanceof RegExp ? e.source : e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))),
                    d = s ? "g" : "gi",
                    m = new RegExp(`(${o.join("|")})`, d),
                    u = c.split(m);
                return (0, a.jsx)(a.Fragment, {
                    children: u.map(((e, t) => m.test(e) ? (0, a.jsx)("span", {
                        className: i,
                        style: l,
                        children: e
                    }, t) : (0, a.jsx)("span", {
                        children: e
                    }, t)))
                })
            }
        },
        86698: (e, t, s) => {
            s.d(t, {
                Fr: () => i,
                Ld: () => a
            });
            s(35167);
            var n = s(41471);
            s(69336), s(76595);

            function a() {
                setTimeout((() => {
                    const e = (0, n.xh)()._anchor || "",
                        t = document.getElementById(e);
                    if (t) {
                        const e = t.getBoundingClientRect();
                        window.scrollTo(0, e.y)
                    }
                }), 1e3)
            }
            const i = () => /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
        },
        87972: (e, t, s) => {
            s.d(t, {
                t3: () => r
            });
            const n = "android",
                a = "PC",
                i = [{
                    name: "iOS",
                    test: /iphone|ipad/gi
                }, {
                    name: n,
                    test: /android/gi
                }, {
                    name: a,
                    test: () => null
                }];

            function l(e) {
                const t = i.find((t => function(e, t) {
                    const {
                        test: s
                    } = e;
                    return "function" == typeof s ? s(t) : new RegExp(s).test(t)
                }(t, e)));
                return t ? t.name : "PC"
            }

            function r(e) {
                return l(e) === a
            }
        }
    }
]);