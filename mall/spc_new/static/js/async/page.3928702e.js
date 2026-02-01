"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [530], {
        49347: (e, _, s) => {
            s.r(_);
            s(11855);
            var t = s(89809),
                i = s(35132),
                a = s(19541),
                d = s(20790),
                r = s(37808),
                c = s(63159);
            _.default = () => {
                const e = (0, t.LG)(),
                    {
                        t: _
                    } = (0, a.s)(),
                    {
                        getModifiedSchema: s
                    } = (0, r.i)(e.schema, e.modifier);
                return (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)(d.l, {
                        title: _("TTS_SEO_homepage_title") || "",
                        description: _("TTS_SEO_homepage_desc") || "",
                        keywords: _("TTS_SEO_homepage_keywords") || ""
                    }), (0, c.jsx)(i.f, {
                        schema: e.schema,
                        getModifiedSchema: s
                    })]
                })
            }
        }
    }
]);