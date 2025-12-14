import {
    r as t,
    j as n
} from "./index-45fe981f.js";
const o = e => t.createElement("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 12 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, t.createElement("g", {
        id: "ç¼ç» 13"
    }, t.createElement("path", {
        id: "ä¸è§å½¢",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.6963 0.354319C5.85594 0.168075 6.14406 0.168075 6.3037 0.35432L11.434 6.33968C11.6564 6.59915 11.4721 7 11.1303 7H0.869688C0.527947 7 0.343583 6.59915 0.565986 6.33968L5.6963 0.354319Z",
        fill: "white"
    }), t.createElement("path", {
        id: "ä¸è§å½¢å¤ä»½",
        opacity: .40153,
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.6963 16.6457C5.85594 16.8319 6.14406 16.8319 6.3037 16.6457L11.434 10.6603C11.6564 10.4008 11.4721 10 11.1303 10H0.869688C0.527947 10 0.343583 10.4008 0.565986 10.6603L5.6963 16.6457Z",
        fill: "white"
    }))),
    i = o,
    c = "_descend_1tyjy_1",
    l = "_none_1tyjy_4",
    x = {
        descend: c,
        none: l
    };

function m({
    sortOrder: e
}) {
    return n.jsx(i, {
        className: e ? x[e] : x.none
    })
}
const r = "_Empty_obg2g_1",
    d = "_Description_obg2g_5",
    s = {
        Empty: r,
        Description: d
    };

function p({
    description: e = "No Data."
}) {
    return n.jsxs("div", {
        className: s.Empty,
        children: [n.jsx("img", {
            alt: "empty",
            srcSet: "/images/empty.png 2x"
        }), n.jsx("div", {
            className: s.Description,
            children: e
        })]
    })
}
export {
    p as E, m as S
};