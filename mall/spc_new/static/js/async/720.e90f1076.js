"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [720], {
        54814: (e, t, s) => {
            s.d(t, {
                Q: () => n
            });
            var i = s(12697),
                o = s(63159);
            const n = (e = {}) => (0, o.jsx)("svg", (0, i.A)((0, i.A)({
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), {}, {
                children: (0, o.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M5.89645 3.39645C5.70118 3.59171 5.70118 3.90829 5.89645 4.10355L9.54289 7.75L5.89645 11.3964C5.70118 11.5917 5.70118 11.9083 5.89645 12.1036C6.09171 12.2988 6.40829 12.2988 6.60355 12.1036L10.6036 8.10355C10.7988 7.90829 10.7988 7.59171 10.6036 7.39645L6.60355 3.39645C6.40829 3.20118 6.09171 3.20118 5.89645 3.39645Z",
                    fill: "currentColor"
                })
            }))
        },
        59720: (e, t, s) => {
            s.d(t, {
                IC: () => I,
                hs: () => E,
                QE: () => M
            });
            var i = s(35018),
                o = s(19541),
                n = s(631),
                a = s(95706),
                c = s(11855),
                l = s(91265),
                r = s(78783),
                p = s(76371),
                m = s(54814),
                d = s(74116),
                x = s(81421),
                u = s(81842),
                h = s.n(u),
                j = {
                    container: "container-au9f6p",
                    "container-1": "container-1-V9_GOc",
                    container1: "container-1-V9_GOc",
                    "item-title": "item-title-dYsuTi",
                    itemTitle: "item-title-dYsuTi",
                    "item-arrow": "item-arrow-mZnTL1",
                    itemArrow: "item-arrow-mZnTL1",
                    "container-3": "container-3-cj1S95",
                    container3: "container-3-cj1S95",
                    "container-2": "container-2-OPWkGr",
                    container2: "container-2-OPWkGr",
                    "fade-in": "fade-in-Spg2DG",
                    fadeIn: "fadeIn-SNknR0",
                    "fade-out": "fade-out-g99iLO",
                    fadeOut: "fadeOut-JNAuDw"
                },
                f = s(63159);

            function v(e) {
                const [t, s] = (0, c.useState)(0), i = (0, c.useRef)(null);
                return (0, c.useEffect)((() => {
                    i.current && i.current.style.setProperty("--collapse-max-width", "520-x" === e.width ? "520px" : "540px")
                }), []), (0, f.jsxs)("div", {
                    ref: i,
                    className: h()("flex w-full", j.container),
                    children: [(0, f.jsxs)("div", {
                        className: j["container-1"],
                        children: [e.items.map(((i, o) => {
                            const n = t === o;
                            return (0, f.jsxs)("div", {
                                className: h()("cursor-pointer transition-all duration-200 ease-in-out", {
                                    "text-[#00000040] hover:text-neutral-text3 hover:border-brand-black": !n,
                                    "border-b border-neutral-line2 pb-24 mb-24": o !== e.items.length - 1
                                }),
                                onClick: () => s(o),
                                children: [(0, f.jsxs)("div", {
                                    className: h()("font-bold", j["item-title"]),
                                    children: [(0, f.jsx)("span", {
                                        children: i.title
                                    }), (0, f.jsx)("span", {
                                        className: j["item-arrow"],
                                        children: n ? (0, f.jsx)(x.A, {}) : (0, f.jsx)(d.A, {})
                                    })]
                                }), (0, f.jsxs)("div", {
                                    className: h()("transition-all duration-200 ease-in-out", n ? "opacity-100 mt-16" : "opacity-0 h-0"),
                                    children: [(0, f.jsx)("div", {
                                        children: i.description
                                    }), (0, f.jsx)("div", {
                                        className: j["container-3"],
                                        children: i.content
                                    })]
                                })]
                            }, o)
                        })), e.footer]
                    }), (0, f.jsx)("div", {
                        className: j["container-2"],
                        children: e.items.map(((e, s) => (0, f.jsx)("div", {
                            className: h()("w-full h-full", {
                                hidden: t !== s,
                                [j["fade-in"]]: t === s,
                                [j["fade-out"]]: t !== s
                            }),
                            children: e.content
                        }, s)))
                    })]
                })
            }
            var g = s(27652),
                y = s(99554),
                b = {
                    footer: "footer-I0MYlr"
                };

            function _(e) {
                return (0, f.jsx)(p.A, {
                    page_name: e.page_name,
                    module_name: e.module_name,
                    children: (0, f.jsx)(g.I, {
                        title: e.title,
                        description: e.description,
                        maxWidth: 1200,
                        gap: "64-48",
                        children: (0, f.jsx)(v, {
                            width: e.width,
                            items: e.items.map(((e, t) => ({
                                title: e.title,
                                description: (0, f.jsxs)(f.Fragment, {
                                    children: [(0, f.jsx)("div", {
                                        className: "text-lg",
                                        children: e.description
                                    }), e.tooltip && (0, f.jsx)("div", {
                                        className: "mt-8",
                                        children: (0, f.jsx)(y.m, {
                                            title: e.tooltip.title,
                                            content: e.tooltip.content,
                                            position: "bl"
                                        })
                                    }), e.cta && (0, f.jsx)("div", {
                                        className: "mt-24",
                                        children: (0, f.jsxs)("span", {
                                            className: "cursor-pointer font-bold text-lg inline-flex items-center hover:text-neutral-text3",
                                            onClick: e.cta.onClick,
                                            children: [e.cta.text, (0, f.jsx)(m.Q, {
                                                className: "w-20 h-20 ml-4"
                                            })]
                                        })
                                    })]
                                }),
                                content: e.image ? (0, f.jsx)("img", {
                                    className: "w-full max-w-[612px] rounded-16 object-cover",
                                    src: e.image
                                }, t) : e.video ? (0, f.jsx)("video", {
                                    className: "w-full max-w-[300px] rounded-16 object-contain",
                                    muted: !0,
                                    loop: !0,
                                    autoPlay: !0,
                                    poster: e.video.placeholder,
                                    children: (0, f.jsx)("source", {
                                        src: e.video.src
                                    })
                                }) : null
                            }))),
                            footer: e.footer && (0, f.jsx)("div", {
                                className: h()("text-lg font-semibold", b.footer),
                                children: e.footer
                            })
                        })
                    })
                })
            }
            var w = s(28842),
                N = {
                    container: "container-IA2nKi"
                };

            function C(e) {
                return (0, f.jsx)(p.A, {
                    page_name: e.page_name,
                    module_name: e.module_name,
                    className: "w-full bg-[#0F0F0F]",
                    children: (0, f.jsxs)("div", {
                        className: h()("flex flex-col justify-center items-center", N.container),
                        children: [(0, f.jsx)("div", {
                            className: "w-[100px] h-[100px] mb-16",
                            children: e.icon
                        }), (0, f.jsx)("div", {
                            className: "text-brand-white text-3xl font-bold text-center",
                            children: e.title
                        }), (0, f.jsx)(w.b, {
                            className: "mt-36",
                            text: e.cta.text,
                            onClick: e.cta.onClick
                        })]
                    })
                })
            }
            var k = s(68089),
                T = s(12697),
                A = {
                    "tabs-type-1-view-image": "tabs-type-1-view-image-xcwz0q",
                    tabsType1ViewImage: "tabs-type-1-view-image-xcwz0q",
                    "tabs-type-1-container-name": "tabs-type-1-container-name-TygVqB",
                    tabsType1ContainerName: "tabs-type-1-container-name-TygVqB",
                    "tabs-type-1-view": "tabs-type-1-view-EOceYX",
                    tabsType1View: "tabs-type-1-view-EOceYX",
                    "tabs-type-1-view-text": "tabs-type-1-view-text-d6BTZk",
                    tabsType1ViewText: "tabs-type-1-view-text-d6BTZk",
                    "tabs-type-1-view-title": "tabs-type-1-view-title-Da_fBy",
                    tabsType1ViewTitle: "tabs-type-1-view-title-Da_fBy",
                    "tabs-type-1-view-desc": "tabs-type-1-view-desc-TKG_8w",
                    tabsType1ViewDesc: "tabs-type-1-view-desc-TKG_8w"
                };

            function L(e) {
                var t;
                const [s, i] = (0, c.useState)(0);
                return (0, f.jsxs)("div", {
                    className: "w-full flex flex-col items-center",
                    children: [(0, f.jsx)("div", {
                        className: h()("flex mb-24", A["tabs-type-1-container-name"]),
                        children: null === (t = e.items) || void 0 === t ? void 0 : t.map(((e, t) => (0, f.jsx)("div", {
                            className: h()("h-[44px] px-16 py-8 flex items-center rounded-4 cursor-pointer text-20 leading-[28px]", t === s ? "bg-brand-red" : "bg-neutral-bg2"),
                            onClick: () => {
                                i(t)
                            },
                            children: (0, f.jsx)("div", {
                                className: h()("font-bold text-2xl", t === s ? "text-brand-white" : "text-brand-black"),
                                children: e.name
                            })
                        }, t)))
                    }), (0, f.jsx)("div", {
                        className: "w-full flex overflow-hidden",
                        children: e.items.map(((e, t) => (0, f.jsx)("div", {
                            className: "w-full flex-shrink-0 duration-[250ms]",
                            style: {
                                transform: `translateX(-${100*s}%)`
                            },
                            children: (0, f.jsxs)("div", {
                                className: h()("rounded-16 bg-neutral-bg2 flex w-full h-fit", A["tabs-type-1-view"]),
                                children: [(0, f.jsxs)("div", {
                                    className: A["tabs-type-1-view-text"],
                                    children: [(0, f.jsx)("div", {
                                        className: h()("font-bold", A["tabs-type-1-view-title"]),
                                        children: e.title
                                    }), (0, f.jsx)("div", {
                                        className: A["tabs-type-1-view-desc"],
                                        children: e.description
                                    })]
                                }), (0, f.jsx)("img", {
                                    className: h()("rounded-8 my-auto object-contain shrink-0 w-full", A["tabs-type-1-view-image"]),
                                    src: e.image
                                })]
                            })
                        }, t)))
                    })]
                })
            }
            var q = {
                "tabs-type-1-desc-normal": "tabs-type-1-desc-normal-n_yQGW",
                tabsType1DescNormal: "tabs-type-1-desc-normal-n_yQGW",
                "tabs-type-1-desc-quote": "tabs-type-1-desc-quote-aWtdga",
                tabsType1DescQuote: "tabs-type-1-desc-quote-aWtdga"
            };

            function B(e) {
                return (0, f.jsx)(p.A, {
                    page_name: e.page_name,
                    module_name: e.module_name,
                    children: (0, f.jsx)(g.I, {
                        title: e.title,
                        description: e.description,
                        maxWidth: 1200,
                        gap: "24-24",
                        children: "1" === e.type && (0, f.jsx)(D, (0, T.A)({}, e.tabs))
                    })
                })
            }

            function D(e) {
                return (0, f.jsx)(L, {
                    items: e.items.map((e => ({
                        name: e.name,
                        title: e.title,
                        description: "list" === e.type ? (0, f.jsx)("ul", {
                            className: h()("space-y-16 list-disc pl-20", q["tabs-type-1-desc-normal"]),
                            children: e.items.map(((e, t) => (0, f.jsx)("li", {
                                children: e
                            }, t)))
                        }) : (0, f.jsxs)("div", {
                            children: [(0, f.jsx)("div", {
                                className: h()("text-neutral-text1", q["tabs-type-1-desc-normal"]),
                                children: e.description
                            }), (0, f.jsx)("div", {
                                className: h()("text-neutral-text3 mt-24", q["tabs-type-1-desc-quote"]),
                                children: e.quote
                            }), (0, f.jsx)("div", {
                                className: h()("text-neutral-text1", q["tabs-type-1-desc-quote"]),
                                children: e.sign
                            })]
                        }),
                        image: e.image
                    })))
                })
            }
            var O = {
                container: "container-wiwfYJ",
                title: "title-ZU7nCK",
                contents: "contents-HA8AXa",
                card: "card-qYjQA3",
                textContainer: "textContainer-xYFsV6",
                value: "value-iegf2n",
                suffix: "suffix-piKi12",
                description: "description-gdlxFB"
            };

            function V(e) {
                const {
                    page_name: t,
                    module_name: s,
                    title: i,
                    items: o
                } = e;
                return (0, f.jsx)(p.A, {
                    page_name: t,
                    module_name: s,
                    children: (0, f.jsxs)("div", {
                        className: O.container,
                        children: [(0, f.jsx)("div", {
                            className: O.title,
                            children: i
                        }), (0, f.jsx)("div", {
                            className: O.contents,
                            children: o.map(((e, t) => (0, f.jsxs)("div", {
                                className: O.card,
                                children: [(0, f.jsxs)("div", {
                                    className: O.textContainer,
                                    children: [(0, f.jsx)("span", {
                                        className: O.value,
                                        children: e.value
                                    }), (0, f.jsx)("span", {
                                        className: O.suffix,
                                        children: e.suffix
                                    })]
                                }), (0, f.jsx)("div", {
                                    className: O.description,
                                    children: e.description
                                })]
                            }, t)))
                        })]
                    })
                })
            }

            function I(e) {
                const {
                    schema: t,
                    options: {
                        page_name: s
                    }
                } = e, {
                    context: i
                } = (0, a.A)(), {
                    t: n
                } = (0, o.s)();
                return (0, f.jsx)(f.Fragment, {
                    children: t.map(((e, t) => {
                        const o = {
                            context: i,
                            page_name: s,
                            module_name: e.props.module_name
                        };
                        if ("BannerModule" === e.type) {
                            const {
                                module_name: i,
                                className: a,
                                text_color: c,
                                title: r,
                                description: p,
                                resources: m,
                                cta: d
                            } = e.props;
                            return (0, f.jsx)(l.H, {
                                className: h()("mt-64", a),
                                text_color: c,
                                page_name: s,
                                module_name: i,
                                title: (0, f.jsx)(E, {
                                    schema: r,
                                    options: o
                                }),
                                description: (0, f.jsx)(E, {
                                    schema: p,
                                    options: o
                                }),
                                resources: m,
                                cta: {
                                    text: n(d.content),
                                    onClick: () => {
                                        M(d, o)
                                    },
                                    description: (0, f.jsx)(E, {
                                        schema: d.description,
                                        options: o
                                    })
                                }
                            }, t)
                        }
                        if ("ListModule" === e.type) {
                            var a, c;
                            const {
                                module_name: i,
                                title: l,
                                description: r,
                                gap: p,
                                type: m
                            } = e.props;
                            let d, x = [];
                            if ("1" === m) {
                                x = e.props.items.map((e => ({
                                    title: (0, f.jsx)(E, {
                                        schema: e.title,
                                        options: o
                                    }),
                                    description: e.description && (0, f.jsx)(E, {
                                        schema: e.description,
                                        options: o
                                    }),
                                    image: e.image,
                                    onClick: () => {
                                        M(e.cta, o)
                                    }
                                })))
                            } else if ("2" === m) {
                                x = e.props.items.map((e => ({
                                    title: (0, f.jsx)(E, {
                                        schema: e.title,
                                        options: o
                                    }),
                                    description: (0, f.jsx)(E, {
                                        schema: e.description,
                                        options: o
                                    }),
                                    image: e.image
                                })))
                            } else if ("3" === m) {
                                x = e.props.items.map((e => ({
                                    title: (0, f.jsx)(E, {
                                        schema: e.title,
                                        options: o
                                    }),
                                    description: (0, f.jsx)(E, {
                                        schema: e.description,
                                        options: o
                                    }),
                                    image: e.image,
                                    tooltip: e.tooltip ? {
                                        title: (0, f.jsx)(E, {
                                            schema: e.tooltip.title,
                                            options: o
                                        }),
                                        content: (0, f.jsx)(E, {
                                            schema: e.tooltip.content,
                                            options: o
                                        })
                                    } : void 0
                                })))
                            } else if ("4" === m) {
                                x = e.props.items.map((e => ({
                                    title: (0, f.jsx)(E, {
                                        schema: e.title,
                                        options: o
                                    }),
                                    description: (0, f.jsx)(E, {
                                        schema: e.description,
                                        options: o
                                    }),
                                    image: e.image
                                })))
                            } else if ("5" === m) {
                                x = e.props.items.map((e => ({
                                    title: (0, f.jsx)(E, {
                                        schema: e.title,
                                        options: o
                                    }),
                                    description: (0, f.jsx)(E, {
                                        schema: e.description,
                                        options: o
                                    }),
                                    image: e.image,
                                    cta: n(e.cta.content),
                                    onClick: () => {
                                        M(e.cta, o)
                                    }
                                })))
                            } else if ("6" === m) {
                                x = e.props.items.map((e => ({
                                    title: (0, f.jsx)(E, {
                                        schema: e.title,
                                        options: o
                                    }),
                                    description: (0, f.jsx)(E, {
                                        schema: e.description,
                                        options: o
                                    }),
                                    resource: e.resource,
                                    reverse: e.reverse,
                                    footer: (0, f.jsx)(E, {
                                        schema: e.footer,
                                        options: o
                                    })
                                })))
                            } else if ("7" === m) {
                                x = e.props.items.map((e => ({
                                    title: (0, f.jsx)(E, {
                                        schema: e.title,
                                        options: o
                                    }),
                                    description: (0, f.jsx)(E, {
                                        schema: e.description,
                                        options: o
                                    }),
                                    resource: e.resource,
                                    reverse: e.reverse,
                                    list: e.list ? e.list.map((e => ({
                                        title: (0, f.jsx)(E, {
                                            schema: e.title,
                                            options: o
                                        }),
                                        description: (0, f.jsx)(E, {
                                            schema: e.description,
                                            options: o
                                        })
                                    }))) : void 0,
                                    cta: {
                                        text: n(e.cta.content),
                                        onClick: () => {
                                            M(e.cta, o)
                                        }
                                    }
                                })))
                            } else if ("10" === m) {
                                x = e.props.items.map((e => ({
                                    title: (0, f.jsx)(E, {
                                        schema: e.title,
                                        options: o
                                    }),
                                    description: (0, f.jsx)(E, {
                                        schema: e.description,
                                        options: o
                                    }),
                                    image: e.image
                                })))
                            } else if ("12" === m) {
                                x = e.props.items.map((e => ({
                                    title: (0, f.jsx)(E, {
                                        schema: e.title,
                                        options: o
                                    }),
                                    description: (0, f.jsx)(E, {
                                        schema: e.description,
                                        options: o
                                    }),
                                    image: e.image,
                                    tooltip: e.tooltip ? {
                                        title: (0, f.jsx)(E, {
                                            schema: e.tooltip.title,
                                            options: o
                                        }),
                                        content: (0, f.jsx)(E, {
                                            schema: e.tooltip.content,
                                            options: o
                                        })
                                    } : void 0
                                })))
                            }
                            if ("tips" === (null === (a = e.props.footer) || void 0 === a ? void 0 : a.type)) {
                                d = {
                                    type: "tips",
                                    text: (0, f.jsx)(E, {
                                        schema: e.props.footer,
                                        options: o
                                    })
                                }
                            } else if ("cta" === (null === (c = e.props.footer) || void 0 === c ? void 0 : c.type)) {
                                const t = e.props.footer;
                                d = {
                                    type: "cta",
                                    text: n(t.content),
                                    onClick: () => {
                                        M(t, o)
                                    }
                                }
                            }
                            return (0, f.jsx)(k.HV, {
                                page_name: s,
                                module_name: i,
                                title: (0, f.jsx)(E, {
                                    schema: l,
                                    options: o
                                }),
                                description: (0, f.jsx)(E, {
                                    schema: r,
                                    options: o
                                }),
                                gap: p,
                                type: m,
                                items: x,
                                footer: e.props.footer ? d : void 0
                            }, t)
                        }
                        if ("CollapseModule" === e.type) {
                            const {
                                module_name: i,
                                width: a,
                                title: c,
                                description: l,
                                items: r,
                                footer: p
                            } = e.props;
                            return (0, f.jsx)(_, {
                                page_name: s,
                                module_name: i,
                                width: a,
                                title: (0, f.jsx)(E, {
                                    schema: c,
                                    options: o
                                }),
                                description: (0, f.jsx)(E, {
                                    schema: l,
                                    options: o
                                }),
                                items: r.map((e => ({
                                    title: (0, f.jsx)(E, {
                                        schema: e.title,
                                        options: o
                                    }),
                                    description: (0, f.jsx)(E, {
                                        schema: e.description,
                                        options: o
                                    }),
                                    image: e.image,
                                    video: e.video,
                                    tooltip: e.tooltip ? {
                                        title: (0, f.jsx)(E, {
                                            schema: e.tooltip.title,
                                            options: o
                                        }),
                                        content: (0, f.jsx)(E, {
                                            schema: e.tooltip.content,
                                            options: o
                                        })
                                    } : void 0,
                                    cta: e.cta ? {
                                        text: n(e.cta.content),
                                        onClick: () => {
                                            M(e.cta, o)
                                        }
                                    } : void 0
                                }))),
                                footer: p ? (0, f.jsx)(E, {
                                    schema: p,
                                    options: o
                                }) : void 0
                            }, t)
                        }
                        if ("CarouselModule" === e.type) {
                            const {
                                module_name: i,
                                title: n,
                                description: a,
                                type: c
                            } = e.props;
                            let l = [];
                            if ("1" === c) {
                                l = e.props.items.map((e => ({
                                    image: e.image,
                                    onClick: () => {
                                        e.cta && M(e.cta, o)
                                    }
                                })))
                            } else if ("2" === c) {
                                l = e.props.items.map((e => ({
                                    title: (0, f.jsx)(E, {
                                        schema: e.title,
                                        options: o
                                    }),
                                    description: (0, f.jsx)(E, {
                                        schema: e.description,
                                        options: o
                                    }),
                                    image: e.image
                                })))
                            } else if ("3" === c) {
                                l = e.props.items.map((e => ({
                                    title: (0, f.jsx)(E, {
                                        schema: e.title,
                                        options: o
                                    }),
                                    description: (0, f.jsx)(E, {
                                        schema: e.description,
                                        options: o
                                    }),
                                    type: e.type,
                                    src: e.src
                                })))
                            } else if ("4" === c) {
                                l = e.props.items.map((e => ({
                                    title: (0, f.jsx)(E, {
                                        schema: e.title,
                                        options: o
                                    }),
                                    description: (0, f.jsx)(E, {
                                        schema: e.description,
                                        options: o
                                    }),
                                    image: e.image,
                                    stats: e.stats.map((e => ({
                                        value: (0, f.jsx)(E, {
                                            schema: e.value,
                                            options: o
                                        }),
                                        suffix: (0, f.jsx)(E, {
                                            schema: e.suffix,
                                            options: o
                                        }),
                                        description: (0, f.jsx)(E, {
                                            schema: e.description,
                                            options: o
                                        })
                                    })))
                                })))
                            }
                            return (0, f.jsx)(r.R, {
                                page_name: s,
                                module_name: i,
                                title: (0, f.jsx)(E, {
                                    schema: n,
                                    options: o
                                }),
                                description: (0, f.jsx)(E, {
                                    schema: a,
                                    options: o
                                }),
                                type: c,
                                items: l
                            }, t)
                        }
                        if ("CTAModule" === e.type) {
                            const {
                                module_name: i,
                                icon: a,
                                title: c,
                                cta: l
                            } = e.props;
                            return (0, f.jsx)(C, {
                                page_name: s,
                                module_name: i,
                                icon: (0, f.jsx)("img", {
                                    className: "w-full h-full",
                                    src: a
                                }),
                                title: (0, f.jsx)(E, {
                                    schema: c,
                                    options: o
                                }),
                                cta: {
                                    text: n(l.content),
                                    onClick: () => {
                                        M(l, o)
                                    }
                                }
                            }, t)
                        }
                        if ("TabsModule" === e.type) {
                            const {
                                module_name: i,
                                title: n,
                                description: a,
                                type: c
                            } = e.props;
                            let l = {};
                            if ("1" === c) {
                                l = {
                                    items: e.props.tabs.items.map((e => "list" === e.type ? {
                                        name: (0, f.jsx)(E, {
                                            schema: e.name,
                                            options: o
                                        }),
                                        title: (0, f.jsx)(E, {
                                            schema: e.title,
                                            options: o
                                        }),
                                        image: e.image,
                                        type: "list",
                                        items: e.items.map(((e, t) => (0, f.jsx)(E, {
                                            schema: e,
                                            options: o
                                        }, t)))
                                    } : {
                                        name: (0, f.jsx)(E, {
                                            schema: e.name,
                                            options: o
                                        }),
                                        title: (0, f.jsx)(E, {
                                            schema: e.title,
                                            options: o
                                        }),
                                        image: e.image,
                                        type: "quote",
                                        description: (0, f.jsx)(E, {
                                            schema: e.description,
                                            options: o
                                        }),
                                        quote: (0, f.jsx)(E, {
                                            schema: e.quote,
                                            options: o
                                        }),
                                        sign: (0, f.jsx)(E, {
                                            schema: e.sign,
                                            options: o
                                        })
                                    }))
                                }
                            }
                            return (0, f.jsx)(B, {
                                page_name: s,
                                module_name: i,
                                title: (0, f.jsx)(E, {
                                    schema: n,
                                    options: o
                                }),
                                description: a && (0, f.jsx)(E, {
                                    schema: a,
                                    options: o
                                }),
                                type: c,
                                tabs: l
                            }, t)
                        }
                        if ("ListModuleType8" === e.type) {
                            const {
                                module_name: i,
                                title: n,
                                description: a,
                                image: c,
                                items: l
                            } = e.props;
                            return (0, f.jsx)(k.no, {
                                page_name: s,
                                module_name: i,
                                title: (0, f.jsx)(E, {
                                    schema: n,
                                    options: o
                                }),
                                description: a && (0, f.jsx)(E, {
                                    schema: a,
                                    options: o
                                }),
                                image: c,
                                items: l.map((e => ({
                                    type: "list",
                                    name: (0, f.jsx)(E, {
                                        schema: e.name,
                                        options: o
                                    }),
                                    icon: e.icon,
                                    list: e.items.map(((e, t) => (0, f.jsx)(E, {
                                        schema: e,
                                        options: o
                                    }, t)))
                                })))
                            }, t)
                        }
                        if ("ListModuleType9" === e.type) {
                            const {
                                module_name: i,
                                title: a,
                                description: c,
                                cta: l,
                                header: r,
                                items: p
                            } = e.props;
                            return (0, f.jsx)(k.u2, {
                                page_name: s,
                                module_name: i,
                                title: (0, f.jsx)(E, {
                                    schema: a,
                                    options: o
                                }),
                                description: c && (0, f.jsx)(E, {
                                    schema: c,
                                    options: o
                                }),
                                cta: {
                                    text: n(l.content),
                                    onClick: () => {
                                        M(l, o)
                                    }
                                },
                                header: (0, f.jsx)(E, {
                                    schema: r,
                                    options: o
                                }),
                                items: p.map(((e, t) => (0, f.jsx)(E, {
                                    schema: e,
                                    options: o
                                }, t)))
                            }, t)
                        }
                        if ("StatisticsBanner" === e.type) {
                            const {
                                module_name: i,
                                title: a,
                                items: c
                            } = e.props;
                            return (0, f.jsx)(V, {
                                page_name: s,
                                module_name: i,
                                title: (0, f.jsx)(E, {
                                    schema: a,
                                    options: o
                                }),
                                items: c.map(((e, t) => ({
                                    value: n(e.value.content),
                                    suffix: n(e.suffix.content),
                                    description: (0, f.jsx)(E, {
                                        schema: e.description,
                                        options: o
                                    })
                                })))
                            }, t)
                        }
                        return null
                    }))
                })
            }

            function M(e, t) {
                const {
                    action: s
                } = e, {
                    context: i,
                    page_name: o,
                    module_name: a
                } = t;
                if (n.vF.sendButtonClick({
                        page_name: o,
                        module_name: a,
                        click_for: e.click_for
                    }), "url" !== s.type) {
                    if ("scroll" === s.type) {
                        const e = document.getElementById(s.to);
                        if (!e) return;
                        e.scrollIntoView({
                            behavior: "smooth"
                        })
                    }
                } else window.open(s.track ? (0, n.Bc)(s.url, i.request) : s.url)
            }

            function E(e) {
                const {
                    schema: t,
                    options: s
                } = e, {
                    t: n
                } = (0, o.s)();
                return t ? t.vars ? (0, f.jsx)(i.k, {
                    content: n(t.content),
                    noWrapper: !0,
                    children: t.vars.map(((e, t) => "highlight" === e.type ? (0, f.jsx)("span", {
                        className: "text-brand-red",
                        children: n(e.content)
                    }, t) : "link" === e.type ? (0, f.jsx)("span", {
                        className: "text-auxiliary-cobalt cursor-pointer",
                        onClick: () => {
                            M(e, s)
                        },
                        children: n(e.content)
                    }, t) : "list" === e.type ? (0, f.jsx)("ul", {
                        className: "list-disc pl-20",
                        children: e.list.map(((e, t) => (0, f.jsx)("li", {
                            children: n(e.content)
                        }, t)))
                    }) : void 0))
                }) : (0, f.jsx)(f.Fragment, {
                    children: n(t.content)
                }) : null
            }
        }
    }
]);