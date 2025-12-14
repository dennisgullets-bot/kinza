import {
    u as d,
    b as e,
    c as h,
    r as u,
    d as S,
    o as f,
    f as p,
    g as r,
    h as B,
    j as C,
    B as P,
    i as x
} from "./index-45fe981f.js";

function M({
    symbol: t,
    openModalAction: o
}) {
    const a = d(),
        {
            openChainModal: n
        } = e(),
        {
            chain: c
        } = h(),
        s = c === void 0;
    return u.useCallback(i => {
        if (i.stopPropagation(), s && n) {
            n();
            return
        }
        t && a(o(t))
    }, [a, t, o, n, s])
}
const g = t => t.pool.all[t.global.chainId],
    k = (t, o) => o,
    A = x([g, k], (t, o) => ({
        reserve: t.reserves.find(a => a.symbol === o)
    }));

function N({
    symbol: t,
    type: o = "primary"
}) {
    const {
        reserve: a
    } = S(i => A(i, t)), n = M({
        symbol: t,
        openModalAction: f
    }), c = p(r({
        symbol: t,
        isProtected: a == null ? void 0 : a.isProtected
    })), s = p(`W${t}`), l = u.useMemo(() => !B({
        wrappedBalance: s,
        walletBalance: c,
        isNative: a == null ? void 0 : a.isNative
    }) || t === void 0 || (a == null ? void 0 : a.isPaused) || (a == null ? void 0 : a.isFrozen), [a == null ? void 0 : a.isFrozen, a == null ? void 0 : a.isNative, a == null ? void 0 : a.isPaused, t, c, s]);
    return C.jsx(P, {
        disabled: l,
        onClick: n,
        type: o,
        children: "Supply"
    })
}
export {
    N as S, M as u
};