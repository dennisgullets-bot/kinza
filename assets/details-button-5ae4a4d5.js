import {
    j as t,
    M as r,
    N as o,
    r as i,
    B as c
} from "./index-45fe981f.js";
import {
    R as s
} from "./multiple-number-672eca0e.js";
const u = "_CollateralType_1uudi_1",
    _ = "_green_1uudi_11",
    l = {
        CollateralType: u,
        green: _
    };

function x({
    debtCeiling: e
}) {
    return t.jsx("div", {
        className: l.CollateralType,
        children: r(e) ? t.jsxs(t.Fragment, {
            children: [t.jsx(s, {}), " Isolated"]
        }) : t.jsxs(t.Fragment, {
            children: [t.jsx(s, {
                className: l.green
            }), " Open"]
        })
    })
}
const d = "_details_button_wrap_11min_1",
    p = {
        details_button_wrap: d
    };

function C({
    symbol: e
}) {
    const a = o(),
        n = i.useCallback(() => {
            a(`/details/${e}`)
        }, [a, e]);
    return t.jsx(c, {
        className: p.details_button_wrap,
        onClick: n,
        children: "details"
    })
}
export {
    x as C, C as D
};