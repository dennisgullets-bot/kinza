import {
    bo as Tt,
    bb as jo,
    r as i,
    cm as xt,
    bL as rt,
    ai as de,
    aA as We,
    bn as yn,
    a9 as Y,
    cn as Pn,
    ax as ot,
    az as ve,
    W as F,
    co as ai,
    ah as K,
    ac as tn,
    aa as nn,
    ae as rn,
    cp as ii,
    cq as li,
    cr as si,
    cs as ci,
    ct as di,
    aB as or,
    ab as W,
    bV as Ur,
    cu as Gr,
    cv as ui,
    cw as fi,
    cx as pi,
    aD as tt,
    cy as Dn,
    bX as bn,
    a8 as zn,
    c0 as Yt,
    ay as jt,
    bj as yt,
    cz as mi,
    cA as vi,
    be as xn,
    cB as gi,
    cC as hi,
    cD as Ao,
    cE as Ho,
    ag as vt,
    bk as $e,
    aj as X,
    bl as Pt,
    bU as xr,
    cF as Jt,
    bf as yi,
    cG as Cr,
    aF as on,
    aE as Fo,
    cH as Vo,
    cI as ar,
    cJ as Sr,
    bZ as Zt,
    B as gn,
    cK as Wo,
    bP as Mn,
    cL as bi,
    cM as xi,
    bY as Ci,
    cN as Yr,
    cO as Bn,
    cP as ir,
    cQ as Si,
    cR as wi,
    cS as $i,
    bd as wr,
    bm as hn,
    cT as Ei,
    cU as Xo,
    cV as $r,
    cW as Jr,
    cX as Zr,
    cY as Ni,
    cZ as Qr,
    c_ as qo,
    c$ as Uo,
    d0 as Go,
    d1 as Yo,
    d2 as Z,
    d3 as Jo,
    d4 as Tn,
    d5 as Oi,
    cc as Zo,
    bR as Ri,
    d6 as Ii,
    b_ as Pi,
    aH as Ti,
    c1 as ki,
    cg as eo,
    V as to,
    bW as Ki,
    af as Di,
    aC as fn,
    d7 as zi,
    d8 as Mi
} from "./index-45fe981f.js";
import {
    u as Bi,
    B as Qo,
    t as Li,
    r as kn,
    a as Er,
    g as no,
    i as ea,
    b as ta,
    c as _i,
    d as ji,
    e as Ai,
    f as Hi
} from "./InputAddon-05dc931a.js";
const Fi = e => ({
    color: e.colorLink,
    textDecoration: "none",
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "&:focus, &:hover": {
        color: e.colorLinkHover
    },
    "&:active": {
        color: e.colorLinkActive
    }
});

function lr(e) {
    return e != null && e === e.window
}
const Vi = e => {
        var t, r;
        if (typeof window > "u") return 0;
        let n = 0;
        return lr(e) ? n = e.pageYOffset : e instanceof Document ? n = e.documentElement.scrollTop : (e instanceof HTMLElement || e) && (n = e.scrollTop), e && !lr(e) && typeof n != "number" && (n = (r = ((t = e.ownerDocument) !== null && t !== void 0 ? t : e).documentElement) === null || r === void 0 ? void 0 : r.scrollTop), n
    },
    Wi = Vi;

function Xi(e, t, r, n) {
    const o = r - t;
    return e /= n / 2, e < 1 ? o / 2 * e * e * e + t : o / 2 * ((e -= 2) * e * e + 2) + t
}

function qi(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {
        getContainer: r = () => window,
        callback: n,
        duration: o = 450
    } = t, l = r(), c = Wi(l), a = Date.now(), s = () => {
        const f = Date.now() - a,
            u = Xi(f > o ? o : f, c, e, o);
        lr(l) ? l.scrollTo(window.pageXOffset, u) : l instanceof Document || l.constructor.name === "HTMLDocument" ? l.documentElement.scrollTop = u : l.scrollTop = u, f < o ? Tt(s) : typeof n == "function" && n()
    };
    Tt(s)
}
var na = function(t) {
        if (jo() && window.document.documentElement) {
            var r = Array.isArray(t) ? t : [t],
                n = window.document.documentElement;
            return r.some(function(o) {
                return o in n.style
            })
        }
        return !1
    },
    Ui = function(t, r) {
        if (!na(t)) return !1;
        var n = document.createElement("div"),
            o = n.style[t];
        return n.style[t] = r, n.style[t] !== o
    };

function Gi(e, t) {
    return !Array.isArray(e) && t !== void 0 ? Ui(e, t) : na(e)
}

function ra() {
    const [, e] = i.useReducer(t => t + 1, 0);
    return e
}

function oa() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    const t = i.useRef({}),
        r = ra(),
        n = Bi();
    return xt(() => {
        const o = n.subscribe(l => {
            t.current = l, e && r()
        });
        return () => n.unsubscribe(o)
    }, []), t.current
}
var Yi = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "64 64 896 896",
            focusable: "false"
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
            }
        }]
    },
    name: "right",
    theme: "outlined"
};
const Ji = Yi;
var Zi = function(t, r) {
        return i.createElement(rt, de({}, t, {
            ref: r,
            icon: Ji
        }))
    },
    Qi = i.forwardRef(Zi);
const sr = Qi;
var el = We.ESC,
    tl = We.TAB;

function nl(e) {
    var t = e.visible,
        r = e.triggerRef,
        n = e.onVisibleChange,
        o = e.autoFocus,
        l = e.overlayRef,
        c = i.useRef(!1),
        a = function() {
            if (t) {
                var u, p;
                (u = r.current) === null || u === void 0 || (p = u.focus) === null || p === void 0 || p.call(u), n == null || n(!1)
            }
        },
        s = function() {
            var u;
            return (u = l.current) !== null && u !== void 0 && u.focus ? (l.current.focus(), c.current = !0, !0) : !1
        },
        d = function(u) {
            switch (u.keyCode) {
                case el:
                    a();
                    break;
                case tl:
                    {
                        var p = !1;c.current || (p = s()),
                        p ? u.preventDefault() : a();
                        break
                    }
            }
        };
    i.useEffect(function() {
        return t ? (window.addEventListener("keydown", d), o && Tt(s, 3), function() {
            window.removeEventListener("keydown", d), c.current = !1
        }) : function() {
            c.current = !1
        }
    }, [t])
}
var rl = i.forwardRef(function(e, t) {
        var r = e.overlay,
            n = e.arrow,
            o = e.prefixCls,
            l = i.useMemo(function() {
                var a;
                return typeof r == "function" ? a = r() : a = r, a
            }, [r]),
            c = yn(t, l == null ? void 0 : l.ref);
        return Y.createElement(Y.Fragment, null, n && Y.createElement("div", {
            className: "".concat(o, "-arrow")
        }), Y.cloneElement(l, {
            ref: Pn(l) ? c : void 0
        }))
    }),
    Xt = {
        adjustX: 1,
        adjustY: 1
    },
    qt = [0, 0],
    ol = {
        topLeft: {
            points: ["bl", "tl"],
            overflow: Xt,
            offset: [0, -4],
            targetOffset: qt
        },
        top: {
            points: ["bc", "tc"],
            overflow: Xt,
            offset: [0, -4],
            targetOffset: qt
        },
        topRight: {
            points: ["br", "tr"],
            overflow: Xt,
            offset: [0, -4],
            targetOffset: qt
        },
        bottomLeft: {
            points: ["tl", "bl"],
            overflow: Xt,
            offset: [0, 4],
            targetOffset: qt
        },
        bottom: {
            points: ["tc", "bc"],
            overflow: Xt,
            offset: [0, 4],
            targetOffset: qt
        },
        bottomRight: {
            points: ["tr", "br"],
            overflow: Xt,
            offset: [0, 4],
            targetOffset: qt
        }
    },
    al = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus", "overlay", "children", "onVisibleChange"];

function il(e, t) {
    var r, n = e.arrow,
        o = n === void 0 ? !1 : n,
        l = e.prefixCls,
        c = l === void 0 ? "rc-dropdown" : l,
        a = e.transitionName,
        s = e.animation,
        d = e.align,
        f = e.placement,
        u = f === void 0 ? "bottomLeft" : f,
        p = e.placements,
        m = p === void 0 ? ol : p,
        v = e.getPopupContainer,
        h = e.showAction,
        g = e.hideAction,
        b = e.overlayClassName,
        x = e.overlayStyle,
        y = e.visible,
        w = e.trigger,
        S = w === void 0 ? ["hover"] : w,
        R = e.autoFocus,
        O = e.overlay,
        N = e.children,
        C = e.onVisibleChange,
        P = ot(e, al),
        M = Y.useState(),
        E = ve(M, 2),
        I = E[0],
        $ = E[1],
        D = "visible" in e ? y : I,
        B = Y.useRef(null),
        T = Y.useRef(null),
        L = Y.useRef(null);
    Y.useImperativeHandle(t, function() {
        return B.current
    });
    var _ = function(se) {
        $(se), C == null || C(se)
    };
    nl({
        visible: D,
        triggerRef: L,
        onVisibleChange: _,
        autoFocus: R,
        overlayRef: T
    });
    var z = function(se) {
            var le = e.onOverlayClick;
            $(!1), le && le(se)
        },
        k = function() {
            return Y.createElement(rl, {
                ref: T,
                overlay: O,
                prefixCls: c,
                arrow: o
            })
        },
        A = function() {
            return typeof O == "function" ? k : k()
        },
        j = function() {
            var se = e.minOverlayWidthMatchTrigger,
                le = e.alignPoint;
            return "minOverlayWidthMatchTrigger" in e ? se : !le
        },
        ae = function() {
            var se = e.openClassName;
            return se !== void 0 ? se : "".concat(c, "-open")
        },
        Q = Y.cloneElement(N, {
            className: F((r = N.props) === null || r === void 0 ? void 0 : r.className, D && ae()),
            ref: Pn(N) ? yn(L, N.ref) : void 0
        }),
        re = g;
    return !re && S.indexOf("contextMenu") !== -1 && (re = ["click"]), Y.createElement(ai, de({
        builtinPlacements: m
    }, P, {
        prefixCls: c,
        ref: B,
        popupClassName: F(b, K({}, "".concat(c, "-show-arrow"), o)),
        popupStyle: x,
        action: S,
        showAction: h,
        hideAction: re,
        popupPlacement: u,
        popupAlign: d,
        popupTransitionName: a,
        popupAnimation: s,
        popupVisible: D,
        stretch: j() ? "minWidth" : "",
        popup: A(),
        onPopupVisibleChange: _,
        onPopupClick: z,
        getPopupContainer: v
    }), Q)
}
const ll = Y.forwardRef(il);
var sl = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "64 64 896 896",
            focusable: "false"
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
            }
        }]
    },
    name: "left",
    theme: "outlined"
};
const cl = sl;
var dl = function(t, r) {
        return i.createElement(rt, de({}, t, {
            ref: r,
            icon: cl
        }))
    },
    ul = i.forwardRef(dl);
const ro = ul,
    fl = e => {
        const {
            componentCls: t,
            menuCls: r,
            colorError: n,
            colorTextLightSolid: o
        } = e, l = `${r}-item`;
        return {
            [`${t}, ${t}-menu-submenu`]: {
                [`${r} ${l}`]: {
                    [`&${l}-danger:not(${l}-disabled)`]: {
                        color: n,
                        "&:hover": {
                            color: o,
                            backgroundColor: n
                        }
                    }
                }
            }
        }
    },
    pl = fl,
    ml = e => {
        const {
            componentCls: t,
            menuCls: r,
            zIndexPopup: n,
            dropdownArrowDistance: o,
            sizePopupArrow: l,
            antCls: c,
            iconCls: a,
            motionDurationMid: s,
            paddingBlock: d,
            fontSize: f,
            dropdownEdgeChildPadding: u,
            colorTextDisabled: p,
            fontSizeIcon: m,
            controlPaddingHorizontal: v,
            colorBgElevated: h
        } = e;
        return [{
                [t]: Object.assign(Object.assign({}, rn(e)), {
                    position: "absolute",
                    top: -9999,
                    left: {
                        _skip_check_: !0,
                        value: -9999
                    },
                    zIndex: n,
                    display: "block",
                    "&::before": {
                        position: "absolute",
                        insetBlock: e.calc(l).div(2).sub(o).equal(),
                        zIndex: -9999,
                        opacity: 1e-4,
                        content: '""'
                    },
                    [`&-trigger${c}-btn`]: {
                        [`& > ${a}-down, & > ${c}-btn-icon > ${a}-down`]: {
                            fontSize: m
                        }
                    },
                    [`${t}-wrap`]: {
                        position: "relative",
                        [`${c}-btn > ${a}-down`]: {
                            fontSize: m
                        },
                        [`${a}-down::before`]: {
                            transition: `transform ${s}`
                        }
                    },
                    [`${t}-wrap-open`]: {
                        [`${a}-down::before`]: {
                            transform: "rotate(180deg)"
                        }
                    },
                    "\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ": {
                        display: "none"
                    },
                    [`&${c}-slide-down-enter${c}-slide-down-enter-active${t}-placement-bottomLeft,
          &${c}-slide-down-appear${c}-slide-down-appear-active${t}-placement-bottomLeft,
          &${c}-slide-down-enter${c}-slide-down-enter-active${t}-placement-bottom,
          &${c}-slide-down-appear${c}-slide-down-appear-active${t}-placement-bottom,
          &${c}-slide-down-enter${c}-slide-down-enter-active${t}-placement-bottomRight,
          &${c}-slide-down-appear${c}-slide-down-appear-active${t}-placement-bottomRight`]: {
                        animationName: ii
                    },
                    [`&${c}-slide-up-enter${c}-slide-up-enter-active${t}-placement-topLeft,
          &${c}-slide-up-appear${c}-slide-up-appear-active${t}-placement-topLeft,
          &${c}-slide-up-enter${c}-slide-up-enter-active${t}-placement-top,
          &${c}-slide-up-appear${c}-slide-up-appear-active${t}-placement-top,
          &${c}-slide-up-enter${c}-slide-up-enter-active${t}-placement-topRight,
          &${c}-slide-up-appear${c}-slide-up-appear-active${t}-placement-topRight`]: {
                        animationName: li
                    },
                    [`&${c}-slide-down-leave${c}-slide-down-leave-active${t}-placement-bottomLeft,
          &${c}-slide-down-leave${c}-slide-down-leave-active${t}-placement-bottom,
          &${c}-slide-down-leave${c}-slide-down-leave-active${t}-placement-bottomRight`]: {
                        animationName: si
                    },
                    [`&${c}-slide-up-leave${c}-slide-up-leave-active${t}-placement-topLeft,
          &${c}-slide-up-leave${c}-slide-up-leave-active${t}-placement-top,
          &${c}-slide-up-leave${c}-slide-up-leave-active${t}-placement-topRight`]: {
                        animationName: ci
                    }
                })
            }, di(e, h, {
                arrowPlacement: {
                    top: !0,
                    bottom: !0
                }
            }), {
                [`${t} ${r}`]: {
                    position: "relative",
                    margin: 0
                },
                [`${r}-submenu-popup`]: {
                    position: "absolute",
                    zIndex: n,
                    background: "transparent",
                    boxShadow: "none",
                    transformOrigin: "0 0",
                    "ul, li": {
                        listStyle: "none",
                        margin: 0
                    }
                },
                [`${t}, ${t}-menu-submenu`]: {
                    [r]: Object.assign(Object.assign({
                        padding: u,
                        listStyleType: "none",
                        backgroundColor: h,
                        backgroundClip: "padding-box",
                        borderRadius: e.borderRadiusLG,
                        outline: "none",
                        boxShadow: e.boxShadowSecondary
                    }, or(e)), {
                        "&:empty": {
                            padding: 0,
                            boxShadow: "none"
                        },
                        [`${r}-item-group-title`]: {
                            padding: `${W(d)} ${W(v)}`,
                            color: e.colorTextDescription,
                            transition: `all ${s}`
                        },
                        [`${r}-item`]: {
                            position: "relative",
                            display: "flex",
                            alignItems: "center"
                        },
                        [`${r}-item-icon`]: {
                            minWidth: f,
                            marginInlineEnd: e.marginXS,
                            fontSize: e.fontSizeSM
                        },
                        [`${r}-title-content`]: {
                            flex: "auto",
                            "> a": {
                                color: "inherit",
                                transition: `all ${s}`,
                                "&:hover": {
                                    color: "inherit"
                                },
                                "&::after": {
                                    position: "absolute",
                                    inset: 0,
                                    content: '""'
                                }
                            }
                        },
                        [`${r}-item, ${r}-submenu-title`]: Object.assign(Object.assign({
                            clear: "both",
                            margin: 0,
                            padding: `${W(d)} ${W(v)}`,
                            color: e.colorText,
                            fontWeight: "normal",
                            fontSize: f,
                            lineHeight: e.lineHeight,
                            cursor: "pointer",
                            transition: `all ${s}`,
                            borderRadius: e.borderRadiusSM,
                            "&:hover, &-active": {
                                backgroundColor: e.controlItemBgHover
                            }
                        }, or(e)), {
                            "&-selected": {
                                color: e.colorPrimary,
                                backgroundColor: e.controlItemBgActive,
                                "&:hover, &-active": {
                                    backgroundColor: e.controlItemBgActiveHover
                                }
                            },
                            "&-disabled": {
                                color: p,
                                cursor: "not-allowed",
                                "&:hover": {
                                    color: p,
                                    backgroundColor: h,
                                    cursor: "not-allowed"
                                },
                                a: {
                                    pointerEvents: "none"
                                }
                            },
                            "&-divider": {
                                height: 1,
                                margin: `${W(e.marginXXS)} 0`,
                                overflow: "hidden",
                                lineHeight: 0,
                                backgroundColor: e.colorSplit
                            },
                            [`${t}-menu-submenu-expand-icon`]: {
                                position: "absolute",
                                insetInlineEnd: e.paddingXS,
                                [`${t}-menu-submenu-arrow-icon`]: {
                                    marginInlineEnd: "0 !important",
                                    color: e.colorTextDescription,
                                    fontSize: m,
                                    fontStyle: "normal"
                                }
                            }
                        }),
                        [`${r}-item-group-list`]: {
                            margin: `0 ${W(e.marginXS)}`,
                            padding: 0,
                            listStyle: "none"
                        },
                        [`${r}-submenu-title`]: {
                            paddingInlineEnd: e.calc(v).add(e.fontSizeSM).equal()
                        },
                        [`${r}-submenu-vertical`]: {
                            position: "relative"
                        },
                        [`${r}-submenu${r}-submenu-disabled ${t}-menu-submenu-title`]: {
                            [`&, ${t}-menu-submenu-arrow-icon`]: {
                                color: p,
                                backgroundColor: h,
                                cursor: "not-allowed"
                            }
                        },
                        [`${r}-submenu-selected ${t}-menu-submenu-title`]: {
                            color: e.colorPrimary
                        }
                    })
                }
            },
            [Ur(e, "slide-up"), Ur(e, "slide-down"), Gr(e, "move-up"), Gr(e, "move-down"), ui(e, "zoom-big")]
        ]
    },
    vl = e => Object.assign(Object.assign({
        zIndexPopup: e.zIndexPopupBase + 50,
        paddingBlock: (e.controlHeight - e.fontSize * e.lineHeight) / 2
    }, fi({
        contentRadius: e.borderRadiusLG,
        limitVerticalRadius: !0
    })), pi(e)),
    gl = tn("Dropdown", e => {
        const {
            marginXXS: t,
            sizePopupArrow: r,
            paddingXXS: n,
            componentCls: o
        } = e, l = nn(e, {
            menuCls: `${o}-menu`,
            dropdownArrowDistance: e.calc(r).div(2).add(t).equal(),
            dropdownEdgeChildPadding: n
        });
        return [ml(l), pl(l)]
    }, vl, {
        resetStyle: !1
    }),
    Nr = e => {
        const {
            menu: t,
            arrow: r,
            prefixCls: n,
            children: o,
            trigger: l,
            disabled: c,
            dropdownRender: a,
            getPopupContainer: s,
            overlayClassName: d,
            rootClassName: f,
            overlayStyle: u,
            open: p,
            onOpenChange: m,
            visible: v,
            onVisibleChange: h,
            mouseEnterDelay: g = .15,
            mouseLeaveDelay: b = .1,
            autoAdjustOverflow: x = !0,
            placement: y = "",
            overlay: w,
            transitionName: S
        } = e, {
            getPopupContainer: R,
            getPrefixCls: O,
            direction: N,
            dropdown: C
        } = i.useContext(tt);
        Dn();
        const P = i.useMemo(() => {
                const q = O();
                return S !== void 0 ? S : y.includes("top") ? `${q}-slide-down` : `${q}-slide-up`
            }, [O, y, S]),
            M = i.useMemo(() => y ? y.includes("Center") ? y.slice(0, y.indexOf("Center")) : y : N === "rtl" ? "bottomRight" : "bottomLeft", [y, N]),
            E = O("dropdown", n),
            I = bn(E),
            [$, D, B] = gl(E, I),
            [, T] = zn(),
            L = i.Children.only(o),
            _ = Yt(L, {
                className: F(`${E}-trigger`, {
                    [`${E}-rtl`]: N === "rtl"
                }, L.props.className),
                disabled: c
            }),
            z = c ? [] : l;
        let k;
        z && z.includes("contextMenu") && (k = !0);
        const [A, j] = jt(!1, {
            value: p ? ? v
        }), ae = yt(q => {
            m == null || m(q, {
                source: "trigger"
            }), h == null || h(q), j(q)
        }), Q = F(d, f, D, B, I, C == null ? void 0 : C.className, {
            [`${E}-rtl`]: N === "rtl"
        }), re = mi({
            arrowPointAtCenter: typeof r == "object" && r.pointAtCenter,
            autoAdjustOverflow: x,
            offset: T.marginXXS,
            arrowWidth: r ? T.sizePopupArrow : 0,
            borderRadius: T.borderRadius
        }), te = i.useCallback(() => {
            t != null && t.selectable && (t != null && t.multiple) || (m == null || m(!1, {
                source: "menu"
            }), j(!1))
        }, [t == null ? void 0 : t.selectable, t == null ? void 0 : t.multiple]), se = () => {
            let q;
            return t != null && t.items ? q = i.createElement(Ao, Object.assign({}, t)) : typeof w == "function" ? q = w() : q = w, a && (q = a(q)), q = i.Children.only(typeof q == "string" ? i.createElement("span", null, q) : q), i.createElement(Ho, {
                prefixCls: `${E}-menu`,
                rootClassName: F(B, I),
                expandIcon: i.createElement("span", {
                    className: `${E}-menu-submenu-arrow`
                }, i.createElement(sr, {
                    className: `${E}-menu-submenu-arrow-icon`
                })),
                mode: "vertical",
                selectable: !1,
                onClick: te,
                validator: U => {}
            }, q)
        }, [le, fe] = vi("Dropdown", u == null ? void 0 : u.zIndex);
        let ne = i.createElement(ll, Object.assign({
            alignPoint: k
        }, xn(e, ["rootClassName"]), {
            mouseEnterDelay: g,
            mouseLeaveDelay: b,
            visible: A,
            builtinPlacements: re,
            arrow: !!r,
            overlayClassName: Q,
            prefixCls: E,
            getPopupContainer: s || R,
            transitionName: P,
            trigger: z,
            overlay: se,
            placement: M,
            onVisibleChange: ae,
            overlayStyle: Object.assign(Object.assign(Object.assign({}, C == null ? void 0 : C.style), u), {
                zIndex: le
            })
        }), _);
        return le && (ne = i.createElement(gi.Provider, {
            value: fe
        }, ne)), $(ne)
    };

function hl(e) {
    return Object.assign(Object.assign({}, e), {
        align: {
            overflow: {
                adjustX: !1,
                adjustY: !1
            }
        }
    })
}
const yl = hi(Nr, "dropdown", e => e, hl),
    bl = e => i.createElement(yl, Object.assign({}, e), i.createElement("span", null));
Nr._InternalPanelDoNotUseOrYouWillBeFired = bl;
const aa = Nr;

function xl(e, t, r) {
    var n = r || {},
        o = n.noTrailing,
        l = o === void 0 ? !1 : o,
        c = n.noLeading,
        a = c === void 0 ? !1 : c,
        s = n.debounceMode,
        d = s === void 0 ? void 0 : s,
        f, u = !1,
        p = 0;

    function m() {
        f && clearTimeout(f)
    }

    function v(g) {
        var b = g || {},
            x = b.upcomingOnly,
            y = x === void 0 ? !1 : x;
        m(), u = !y
    }

    function h() {
        for (var g = arguments.length, b = new Array(g), x = 0; x < g; x++) b[x] = arguments[x];
        var y = this,
            w = Date.now() - p;
        if (u) return;

        function S() {
            p = Date.now(), t.apply(y, b)
        }

        function R() {
            f = void 0
        }!a && d && !f && S(), m(), d === void 0 && w > e ? a ? (p = Date.now(), l || (f = setTimeout(d ? R : S, e))) : S() : l !== !0 && (f = setTimeout(d ? R : S, d === void 0 ? e - w : e))
    }
    return h.cancel = v, h
}

function Cl(e, t, r) {
    var n = r || {},
        o = n.atBegin,
        l = o === void 0 ? !1 : o;
    return xl(e, t, {
        debounceMode: l !== !1
    })
}

function lt(e, t) {
    return e[t]
}
var Sl = ["children"];

function ia(e, t) {
    return "".concat(e, "-").concat(t)
}

function wl(e) {
    return e && e.type && e.type.isTreeNode
}

function Cn(e, t) {
    return e ? ? t
}

function Qt(e) {
    var t = e || {},
        r = t.title,
        n = t._title,
        o = t.key,
        l = t.children,
        c = r || "title";
    return {
        title: c,
        _title: n || [c],
        key: o || "key",
        children: l || "children"
    }
}

function la(e) {
    function t(r) {
        var n = xr(r);
        return n.map(function(o) {
            if (!wl(o)) return Pt(!o, "Tree/TreeNode can only accept TreeNode as children."), null;
            var l = o.key,
                c = o.props,
                a = c.children,
                s = ot(c, Sl),
                d = X({
                    key: l
                }, s),
                f = t(a);
            return f.length && (d.children = f), d
        }).filter(function(o) {
            return o
        })
    }
    return t(e)
}

function Un(e, t, r) {
    var n = Qt(r),
        o = n._title,
        l = n.key,
        c = n.children,
        a = new Set(t === !0 ? [] : t),
        s = [];

    function d(f) {
        var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        return f.map(function(p, m) {
            for (var v = ia(u ? u.pos : "0", m), h = Cn(p[l], v), g, b = 0; b < o.length; b += 1) {
                var x = o[b];
                if (p[x] !== void 0) {
                    g = p[x];
                    break
                }
            }
            var y = Object.assign(xn(p, [].concat($e(o), [l, c])), {
                title: g,
                key: h,
                parent: u,
                pos: v,
                children: null,
                data: p,
                isStart: [].concat($e(u ? u.isStart : []), [m === 0]),
                isEnd: [].concat($e(u ? u.isEnd : []), [m === f.length - 1])
            });
            return s.push(y), t === !0 || a.has(h) ? y.children = d(p[c] || [], y) : y.children = [], y
        })
    }
    return d(e), s
}

function $l(e, t, r) {
    var n = {};
    vt(r) === "object" ? n = r : n = {
        externalGetKey: r
    }, n = n || {};
    var o = n,
        l = o.childrenPropName,
        c = o.externalGetKey,
        a = o.fieldNames,
        s = Qt(a),
        d = s.key,
        f = s.children,
        u = l || f,
        p;
    c ? typeof c == "string" ? p = function(h) {
        return h[c]
    } : typeof c == "function" && (p = function(h) {
        return c(h)
    }) : p = function(h, g) {
        return Cn(h[d], g)
    };

    function m(v, h, g, b) {
        var x = v ? v[u] : e,
            y = v ? ia(g.pos, h) : "0",
            w = v ? [].concat($e(b), [v]) : [];
        if (v) {
            var S = p(v, y),
                R = {
                    node: v,
                    index: h,
                    pos: y,
                    key: S,
                    parentPos: g.node ? g.pos : null,
                    level: g.level + 1,
                    nodes: w
                };
            t(R)
        }
        x && x.forEach(function(O, N) {
            m(O, N, {
                node: v,
                pos: y,
                level: g ? g.level + 1 : -1
            }, w)
        })
    }
    m(null)
}

function Or(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = t.initWrapper,
        n = t.processEntity,
        o = t.onProcessFinished,
        l = t.externalGetKey,
        c = t.childrenPropName,
        a = t.fieldNames,
        s = arguments.length > 2 ? arguments[2] : void 0,
        d = l || s,
        f = {},
        u = {},
        p = {
            posEntities: f,
            keyEntities: u
        };
    return r && (p = r(p) || p), $l(e, function(m) {
        var v = m.node,
            h = m.index,
            g = m.pos,
            b = m.key,
            x = m.parentPos,
            y = m.level,
            w = m.nodes,
            S = {
                node: v,
                nodes: w,
                index: h,
                key: b,
                pos: g,
                level: y
            },
            R = Cn(b, g);
        f[g] = S, u[R] = S, S.parent = f[x], S.parent && (S.parent.children = S.parent.children || [], S.parent.children.push(S)), n && n(S, p)
    }, {
        externalGetKey: d,
        childrenPropName: c,
        fieldNames: a
    }), o && o(p), p
}

function mn(e, t) {
    var r = t.expandedKeys,
        n = t.selectedKeys,
        o = t.loadedKeys,
        l = t.loadingKeys,
        c = t.checkedKeys,
        a = t.halfCheckedKeys,
        s = t.dragOverNodeKey,
        d = t.dropPosition,
        f = t.keyEntities,
        u = lt(f, e),
        p = {
            eventKey: e,
            expanded: r.indexOf(e) !== -1,
            selected: n.indexOf(e) !== -1,
            loaded: o.indexOf(e) !== -1,
            loading: l.indexOf(e) !== -1,
            checked: c.indexOf(e) !== -1,
            halfChecked: a.indexOf(e) !== -1,
            pos: String(u ? u.pos : ""),
            dragOver: s === e && d === 0,
            dragOverGapTop: s === e && d === -1,
            dragOverGapBottom: s === e && d === 1
        };
    return p
}

function He(e) {
    var t = e.data,
        r = e.expanded,
        n = e.selected,
        o = e.checked,
        l = e.loaded,
        c = e.loading,
        a = e.halfChecked,
        s = e.dragOver,
        d = e.dragOverGapTop,
        f = e.dragOverGapBottom,
        u = e.pos,
        p = e.active,
        m = e.eventKey,
        v = X(X({}, t), {}, {
            expanded: r,
            selected: n,
            checked: o,
            loaded: l,
            loading: c,
            halfChecked: a,
            dragOver: s,
            dragOverGapTop: d,
            dragOverGapBottom: f,
            pos: u,
            active: p,
            key: m
        });
    return "props" in v || Object.defineProperty(v, "props", {
        get: function() {
            return Pt(!1, "Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."), e
        }
    }), v
}

function sa(e, t) {
    var r = new Set;
    return e.forEach(function(n) {
        t.has(n) || r.add(n)
    }), r
}

function El(e) {
    var t = e || {},
        r = t.disabled,
        n = t.disableCheckbox,
        o = t.checkable;
    return !!(r || n) || o === !1
}

function Nl(e, t, r, n) {
    for (var o = new Set(e), l = new Set, c = 0; c <= r; c += 1) {
        var a = t.get(c) || new Set;
        a.forEach(function(u) {
            var p = u.key,
                m = u.node,
                v = u.children,
                h = v === void 0 ? [] : v;
            o.has(p) && !n(m) && h.filter(function(g) {
                return !n(g.node)
            }).forEach(function(g) {
                o.add(g.key)
            })
        })
    }
    for (var s = new Set, d = r; d >= 0; d -= 1) {
        var f = t.get(d) || new Set;
        f.forEach(function(u) {
            var p = u.parent,
                m = u.node;
            if (!(n(m) || !u.parent || s.has(u.parent.key))) {
                if (n(u.parent.node)) {
                    s.add(p.key);
                    return
                }
                var v = !0,
                    h = !1;
                (p.children || []).filter(function(g) {
                    return !n(g.node)
                }).forEach(function(g) {
                    var b = g.key,
                        x = o.has(b);
                    v && !x && (v = !1), !h && (x || l.has(b)) && (h = !0)
                }), v && o.add(p.key), h && l.add(p.key), s.add(p.key)
            }
        })
    }
    return {
        checkedKeys: Array.from(o),
        halfCheckedKeys: Array.from(sa(l, o))
    }
}

function Ol(e, t, r, n, o) {
    for (var l = new Set(e), c = new Set(t), a = 0; a <= n; a += 1) {
        var s = r.get(a) || new Set;
        s.forEach(function(p) {
            var m = p.key,
                v = p.node,
                h = p.children,
                g = h === void 0 ? [] : h;
            !l.has(m) && !c.has(m) && !o(v) && g.filter(function(b) {
                return !o(b.node)
            }).forEach(function(b) {
                l.delete(b.key)
            })
        })
    }
    c = new Set;
    for (var d = new Set, f = n; f >= 0; f -= 1) {
        var u = r.get(f) || new Set;
        u.forEach(function(p) {
            var m = p.parent,
                v = p.node;
            if (!(o(v) || !p.parent || d.has(p.parent.key))) {
                if (o(p.parent.node)) {
                    d.add(m.key);
                    return
                }
                var h = !0,
                    g = !1;
                (m.children || []).filter(function(b) {
                    return !o(b.node)
                }).forEach(function(b) {
                    var x = b.key,
                        y = l.has(x);
                    h && !y && (h = !1), !g && (y || c.has(x)) && (g = !0)
                }), h || l.delete(m.key), g && c.add(m.key), d.add(m.key)
            }
        })
    }
    return {
        checkedKeys: Array.from(l),
        halfCheckedKeys: Array.from(sa(c, l))
    }
}

function Ut(e, t, r, n) {
    var o = [],
        l;
    n ? l = n : l = El;
    var c = new Set(e.filter(function(f) {
            var u = !!lt(r, f);
            return u || o.push(f), u
        })),
        a = new Map,
        s = 0;
    Object.keys(r).forEach(function(f) {
        var u = r[f],
            p = u.level,
            m = a.get(p);
        m || (m = new Set, a.set(p, m)), m.add(u), s = Math.max(s, p)
    }), Pt(!o.length, "Tree missing follow keys: ".concat(o.slice(0, 100).map(function(f) {
        return "'".concat(f, "'")
    }).join(", ")));
    var d;
    return t === !0 ? d = Nl(c, a, s, l) : d = Ol(c, t.halfCheckedKeys, a, s, l), d
}
var Rl = ["show"];

function ca(e, t) {
    return i.useMemo(function() {
        var r = {};
        t && (r.show = vt(t) === "object" && t.formatter ? t.formatter : !!t), r = X(X({}, r), e);
        var n = r,
            o = n.show,
            l = ot(n, Rl);
        return X(X({}, l), {}, {
            show: !!o,
            showFormatter: typeof o == "function" ? o : void 0,
            strategy: l.strategy || function(c) {
                return c.length
            }
        })
    }, [e, t])
}
var Il = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"],
    Pl = i.forwardRef(function(e, t) {
        var r = e.autoComplete,
            n = e.onChange,
            o = e.onFocus,
            l = e.onBlur,
            c = e.onPressEnter,
            a = e.onKeyDown,
            s = e.prefixCls,
            d = s === void 0 ? "rc-input" : s,
            f = e.disabled,
            u = e.htmlSize,
            p = e.className,
            m = e.maxLength,
            v = e.suffix,
            h = e.showCount,
            g = e.count,
            b = e.type,
            x = b === void 0 ? "text" : b,
            y = e.classes,
            w = e.classNames,
            S = e.styles,
            R = e.onCompositionStart,
            O = e.onCompositionEnd,
            N = ot(e, Il),
            C = i.useState(!1),
            P = ve(C, 2),
            M = P[0],
            E = P[1],
            I = i.useRef(!1),
            $ = i.useRef(null),
            D = i.useRef(null),
            B = function(ie) {
                $.current && Li($.current, ie)
            },
            T = jt(e.defaultValue, {
                value: e.value
            }),
            L = ve(T, 2),
            _ = L[0],
            z = L[1],
            k = _ == null ? "" : String(_),
            A = i.useState(null),
            j = ve(A, 2),
            ae = j[0],
            Q = j[1],
            re = ca(g, h),
            te = re.max || m,
            se = re.strategy(k),
            le = !!te && se > te;
        i.useImperativeHandle(t, function() {
            var ee;
            return {
                focus: B,
                blur: function() {
                    var pe;
                    (pe = $.current) === null || pe === void 0 || pe.blur()
                },
                setSelectionRange: function(pe, oe, xe) {
                    var Ee;
                    (Ee = $.current) === null || Ee === void 0 || Ee.setSelectionRange(pe, oe, xe)
                },
                select: function() {
                    var pe;
                    (pe = $.current) === null || pe === void 0 || pe.select()
                },
                input: $.current,
                nativeElement: ((ee = D.current) === null || ee === void 0 ? void 0 : ee.nativeElement) || $.current
            }
        }), i.useEffect(function() {
            E(function(ee) {
                return ee && f ? !1 : ee
            })
        }, [f]);
        var fe = function(ie, pe, oe) {
            var xe = pe;
            if (!I.current && re.exceedFormatter && re.max && re.strategy(pe) > re.max) {
                if (xe = re.exceedFormatter(pe, {
                        max: re.max
                    }), pe !== xe) {
                    var Ee, ye;
                    Q([((Ee = $.current) === null || Ee === void 0 ? void 0 : Ee.selectionStart) || 0, ((ye = $.current) === null || ye === void 0 ? void 0 : ye.selectionEnd) || 0])
                }
            } else if (oe.source === "compositionEnd") return;
            z(xe), $.current && kn($.current, ie, n, xe)
        };
        i.useEffect(function() {
            if (ae) {
                var ee;
                (ee = $.current) === null || ee === void 0 || ee.setSelectionRange.apply(ee, $e(ae))
            }
        }, [ae]);
        var ne = function(ie) {
                fe(ie, ie.target.value, {
                    source: "change"
                })
            },
            q = function(ie) {
                I.current = !1, fe(ie, ie.currentTarget.value, {
                    source: "compositionEnd"
                }), O == null || O(ie)
            },
            U = function(ie) {
                c && ie.key === "Enter" && c(ie), a == null || a(ie)
            },
            G = function(ie) {
                E(!0), o == null || o(ie)
            },
            H = function(ie) {
                E(!1), l == null || l(ie)
            },
            ge = function(ie) {
                z(""), B(), $.current && kn($.current, ie, n)
            },
            V = le && "".concat(d, "-out-of-range"),
            ce = function() {
                var ie = xn(e, ["prefixCls", "onPressEnter", "addonBefore", "addonAfter", "prefix", "suffix", "allowClear", "defaultValue", "showCount", "count", "classes", "htmlSize", "styles", "classNames"]);
                return Y.createElement("input", de({
                    autoComplete: r
                }, ie, {
                    onChange: ne,
                    onFocus: G,
                    onBlur: H,
                    onKeyDown: U,
                    className: F(d, K({}, "".concat(d, "-disabled"), f), w == null ? void 0 : w.input),
                    style: S == null ? void 0 : S.input,
                    ref: $,
                    size: u,
                    type: x,
                    onCompositionStart: function(oe) {
                        I.current = !0, R == null || R(oe)
                    },
                    onCompositionEnd: q
                }))
            },
            Ce = function() {
                var ie = Number(te) > 0;
                if (v || re.show) {
                    var pe = re.showFormatter ? re.showFormatter({
                        value: k,
                        count: se,
                        maxLength: te
                    }) : "".concat(se).concat(ie ? " / ".concat(te) : "");
                    return Y.createElement(Y.Fragment, null, re.show && Y.createElement("span", {
                        className: F("".concat(d, "-show-count-suffix"), K({}, "".concat(d, "-show-count-has-suffix"), !!v), w == null ? void 0 : w.count),
                        style: X({}, S == null ? void 0 : S.count)
                    }, pe), v)
                }
                return null
            };
        return Y.createElement(Qo, de({}, N, {
            prefixCls: d,
            className: F(p, V),
            handleReset: ge,
            value: k,
            focused: M,
            triggerFocus: B,
            suffix: Ce(),
            disabled: f,
            classes: y,
            classNames: w,
            styles: S
        }), ce())
    });
const Tl = e => {
        const {
            getPrefixCls: t,
            direction: r
        } = i.useContext(tt), {
            prefixCls: n,
            className: o
        } = e, l = t("input-group", n), c = t("input"), [a, s] = Er(c), d = F(l, {
            [`${l}-lg`]: e.size === "large",
            [`${l}-sm`]: e.size === "small",
            [`${l}-compact`]: e.compact,
            [`${l}-rtl`]: r === "rtl"
        }, s, o), f = i.useContext(Jt), u = i.useMemo(() => Object.assign(Object.assign({}, f), {
            isFormItemInput: !1
        }), [f]);
        return a(i.createElement("span", {
            className: d,
            style: e.style,
            onMouseEnter: e.onMouseEnter,
            onMouseLeave: e.onMouseLeave,
            onFocus: e.onFocus,
            onBlur: e.onBlur
        }, i.createElement(Jt.Provider, {
            value: u
        }, e.children)))
    },
    kl = Tl,
    Kl = e => {
        let t;
        return typeof e == "object" && (e != null && e.clearIcon) ? t = e : e && (t = {
            clearIcon: Y.createElement(yi, null)
        }), t
    },
    da = Kl;

function ua(e, t) {
    const r = i.useRef([]),
        n = () => {
            r.current.push(setTimeout(() => {
                var o, l, c, a;
                !((o = e.current) === null || o === void 0) && o.input && ((l = e.current) === null || l === void 0 ? void 0 : l.input.getAttribute("type")) === "password" && (!((c = e.current) === null || c === void 0) && c.input.hasAttribute("value")) && ((a = e.current) === null || a === void 0 || a.input.removeAttribute("value"))
            }))
        };
    return i.useEffect(() => (t && n(), () => r.current.forEach(o => {
        o && clearTimeout(o)
    })), []), n
}

function Dl(e) {
    return !!(e.prefix || e.suffix || e.allowClear || e.showCount)
}
var zl = globalThis && globalThis.__rest || function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
};

function Ml(e, t) {
    if (!e) return;
    e.focus(t);
    const {
        cursor: r
    } = t || {};
    if (r) {
        const n = e.value.length;
        switch (r) {
            case "start":
                e.setSelectionRange(0, 0);
                break;
            case "end":
                e.setSelectionRange(n, n);
                break;
            default:
                e.setSelectionRange(0, n)
        }
    }
}
const Bl = i.forwardRef((e, t) => {
        var r;
        const {
            prefixCls: n,
            bordered: o = !0,
            status: l,
            size: c,
            disabled: a,
            onBlur: s,
            onFocus: d,
            suffix: f,
            allowClear: u,
            addonAfter: p,
            addonBefore: m,
            className: v,
            style: h,
            styles: g,
            rootClassName: b,
            onChange: x,
            classNames: y,
            variant: w
        } = e, S = zl(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames", "variant"]), {
            getPrefixCls: R,
            direction: O,
            input: N
        } = Y.useContext(tt), C = R("input", n), P = i.useRef(null), M = bn(C), [E, I, $] = Er(C, M), {
            compactSize: D,
            compactItemClassnames: B
        } = Cr(C, O), T = on(U => {
            var G;
            return (G = c ? ? D) !== null && G !== void 0 ? G : U
        }), L = Y.useContext(Fo), _ = a ? ? L, {
            status: z,
            hasFeedback: k,
            feedbackIcon: A
        } = i.useContext(Jt), j = Sr(z, l), ae = Dl(e) || !!k;
        i.useRef(ae);
        const Q = ua(P, !0),
            re = U => {
                Q(), s == null || s(U)
            },
            te = U => {
                Q(), d == null || d(U)
            },
            se = U => {
                Q(), x == null || x(U)
            },
            le = (k || f) && Y.createElement(Y.Fragment, null, f, k && A),
            fe = da(u ? ? (N == null ? void 0 : N.allowClear)),
            [ne, q] = Vo(w, o);
        return E(Y.createElement(Pl, Object.assign({
            ref: yn(t, P),
            prefixCls: C,
            autoComplete: N == null ? void 0 : N.autoComplete
        }, S, {
            disabled: _,
            onBlur: re,
            onFocus: te,
            style: Object.assign(Object.assign({}, N == null ? void 0 : N.style), h),
            styles: Object.assign(Object.assign({}, N == null ? void 0 : N.styles), g),
            suffix: le,
            allowClear: fe,
            className: F(v, b, $, M, B, N == null ? void 0 : N.className),
            onChange: se,
            addonBefore: no(m),
            addonAfter: no(p),
            classNames: Object.assign(Object.assign(Object.assign({}, y), N == null ? void 0 : N.classNames), {
                input: F({
                    [`${C}-sm`]: T === "small",
                    [`${C}-lg`]: T === "large",
                    [`${C}-rtl`]: O === "rtl"
                }, y == null ? void 0 : y.input, (r = N == null ? void 0 : N.classNames) === null || r === void 0 ? void 0 : r.input, I),
                variant: F({
                    [`${C}-${ne}`]: q
                }, ar(C, j)),
                affixWrapper: F({
                    [`${C}-affix-wrapper-sm`]: T === "small",
                    [`${C}-affix-wrapper-lg`]: T === "large",
                    [`${C}-affix-wrapper-rtl`]: O === "rtl"
                }, I),
                wrapper: F({
                    [`${C}-group-rtl`]: O === "rtl"
                }, I),
                groupWrapper: F({
                    [`${C}-group-wrapper-sm`]: T === "small",
                    [`${C}-group-wrapper-lg`]: T === "large",
                    [`${C}-group-wrapper-rtl`]: O === "rtl",
                    [`${C}-group-wrapper-${ne}`]: q
                }, ar(`${C}-group-wrapper`, j, k), I)
            })
        })))
    }),
    Ln = Bl,
    Ll = e => {
        const {
            componentCls: t,
            paddingXS: r
        } = e;
        return {
            [`${t}`]: {
                display: "inline-flex",
                alignItems: "center",
                flexWrap: "nowrap",
                columnGap: r,
                "&-rtl": {
                    direction: "rtl"
                },
                [`${t}-input`]: {
                    textAlign: "center",
                    paddingInline: e.paddingXXS
                },
                [`&${t}-sm ${t}-input`]: {
                    paddingInline: e.calc(e.paddingXXS).div(2).equal()
                },
                [`&${t}-lg ${t}-input`]: {
                    paddingInline: e.paddingXS
                }
            }
        }
    },
    _l = tn(["Input", "OTP"], e => {
        const t = nn(e, ea(e));
        return [Ll(t)]
    }, ta);
var jl = globalThis && globalThis.__rest || function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
};
const Al = i.forwardRef((e, t) => {
        const {
            value: r,
            onChange: n,
            onActiveChange: o,
            index: l,
            mask: c
        } = e, a = jl(e, ["value", "onChange", "onActiveChange", "index", "mask"]), s = r && typeof c == "string" ? c : r, d = v => {
            n(l, v.target.value)
        }, f = i.useRef(null);
        i.useImperativeHandle(t, () => f.current);
        const u = () => {
                Tt(() => {
                    var v;
                    const h = (v = f.current) === null || v === void 0 ? void 0 : v.input;
                    document.activeElement === h && h && h.select()
                })
            },
            p = v => {
                let {
                    key: h
                } = v;
                h === "ArrowLeft" ? o(l - 1) : h === "ArrowRight" && o(l + 1), u()
            },
            m = v => {
                v.key === "Backspace" && !r && o(l - 1), u()
            };
        return i.createElement(Ln, Object.assign({}, a, {
            ref: f,
            value: s,
            onInput: d,
            onFocus: u,
            onKeyDown: p,
            onKeyUp: m,
            onMouseDown: u,
            onMouseUp: u,
            type: c === !0 ? "password" : "text"
        }))
    }),
    Hl = Al;
var Fl = globalThis && globalThis.__rest || function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
};

function Nn(e) {
    return (e || "").split("")
}
const Vl = i.forwardRef((e, t) => {
        const {
            prefixCls: r,
            length: n = 6,
            size: o,
            defaultValue: l,
            value: c,
            onChange: a,
            formatter: s,
            variant: d,
            disabled: f,
            status: u,
            autoFocus: p,
            mask: m
        } = e, v = Fl(e, ["prefixCls", "length", "size", "defaultValue", "value", "onChange", "formatter", "variant", "disabled", "status", "autoFocus", "mask"]), {
            getPrefixCls: h,
            direction: g
        } = i.useContext(tt), b = h("otp", r), x = Zt(v, {
            aria: !0,
            data: !0,
            attr: !0
        }), y = bn(b), [w, S, R] = _l(b, y), O = on(k => o ? ? k), N = i.useContext(Jt), C = Sr(N.status, u), P = i.useMemo(() => Object.assign(Object.assign({}, N), {
            status: C,
            hasFeedback: !1,
            feedbackIcon: null
        }), [N, C]), M = i.useRef(null), E = i.useRef({});
        i.useImperativeHandle(t, () => ({
            focus: () => {
                var k;
                (k = E.current[0]) === null || k === void 0 || k.focus()
            },
            blur: () => {
                var k;
                for (let A = 0; A < n; A += 1)(k = E.current[A]) === null || k === void 0 || k.blur()
            },
            nativeElement: M.current
        }));
        const I = k => s ? s(k) : k,
            [$, D] = i.useState(Nn(I(l || "")));
        i.useEffect(() => {
            c !== void 0 && D(Nn(c))
        }, [c]);
        const B = yt(k => {
                D(k), a && k.length === n && k.every(A => A) && k.some((A, j) => $[j] !== A) && a(k.join(""))
            }),
            T = yt((k, A) => {
                let j = $e($);
                for (let Q = 0; Q < k; Q += 1) j[Q] || (j[Q] = "");
                A.length <= 1 ? j[k] = A : j = j.slice(0, k).concat(Nn(A)), j = j.slice(0, n);
                for (let Q = j.length - 1; Q >= 0 && !j[Q]; Q -= 1) j.pop();
                const ae = I(j.map(Q => Q || " ").join(""));
                return j = Nn(ae).map((Q, re) => Q === " " && !j[re] ? j[re] : Q), j
            }),
            L = (k, A) => {
                var j;
                const ae = T(k, A),
                    Q = Math.min(k + A.length, n - 1);
                Q !== k && ((j = E.current[Q]) === null || j === void 0 || j.focus()), B(ae)
            },
            _ = k => {
                var A;
                (A = E.current[k]) === null || A === void 0 || A.focus()
            },
            z = {
                variant: d,
                disabled: f,
                status: C,
                mask: m
            };
        return w(i.createElement("div", Object.assign({}, x, {
            ref: M,
            className: F(b, {
                [`${b}-sm`]: O === "small",
                [`${b}-lg`]: O === "large",
                [`${b}-rtl`]: g === "rtl"
            }, R, S)
        }), i.createElement(Jt.Provider, {
            value: P
        }, Array.from({
            length: n
        }).map((k, A) => {
            const j = `otp-${A}`,
                ae = $[A] || "";
            return i.createElement(Hl, Object.assign({
                ref: Q => {
                    E.current[A] = Q
                },
                key: j,
                index: A,
                size: O,
                htmlSize: 1,
                className: `${b}-input`,
                onChange: L,
                value: ae,
                onActiveChange: _,
                autoFocus: A === 0 && p
            }, z))
        }))))
    }),
    Wl = Vl;
var Xl = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "64 64 896 896",
            focusable: "false"
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"
            }
        }, {
            tag: "path",
            attrs: {
                d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"
            }
        }]
    },
    name: "eye-invisible",
    theme: "outlined"
};
const ql = Xl;
var Ul = function(t, r) {
        return i.createElement(rt, de({}, t, {
            ref: r,
            icon: ql
        }))
    },
    Gl = i.forwardRef(Ul);
const Yl = Gl;
var Jl = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "64 64 896 896",
            focusable: "false"
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
            }
        }]
    },
    name: "eye",
    theme: "outlined"
};
const Zl = Jl;
var Ql = function(t, r) {
        return i.createElement(rt, de({}, t, {
            ref: r,
            icon: Zl
        }))
    },
    es = i.forwardRef(Ql);
const ts = es;
var ns = globalThis && globalThis.__rest || function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
};
const rs = e => e ? i.createElement(ts, null) : i.createElement(Yl, null),
    os = {
        click: "onClick",
        hover: "onMouseOver"
    },
    as = i.forwardRef((e, t) => {
        const {
            disabled: r,
            action: n = "click",
            visibilityToggle: o = !0,
            iconRender: l = rs
        } = e, c = typeof o == "object" && o.visible !== void 0, [a, s] = i.useState(() => c ? o.visible : !1), d = i.useRef(null);
        i.useEffect(() => {
            c && s(o.visible)
        }, [c, o]);
        const f = ua(d),
            u = () => {
                r || (a && f(), s(N => {
                    var C;
                    const P = !N;
                    return typeof o == "object" && ((C = o.onVisibleChange) === null || C === void 0 || C.call(o, P)), P
                }))
            },
            p = N => {
                const C = os[n] || "",
                    P = l(a),
                    M = {
                        [C]: u,
                        className: `${N}-icon`,
                        key: "passwordIcon",
                        onMouseDown: E => {
                            E.preventDefault()
                        },
                        onMouseUp: E => {
                            E.preventDefault()
                        }
                    };
                return i.cloneElement(i.isValidElement(P) ? P : i.createElement("span", null, P), M)
            },
            {
                className: m,
                prefixCls: v,
                inputPrefixCls: h,
                size: g
            } = e,
            b = ns(e, ["className", "prefixCls", "inputPrefixCls", "size"]),
            {
                getPrefixCls: x
            } = i.useContext(tt),
            y = x("input", h),
            w = x("input-password", v),
            S = o && p(w),
            R = F(w, m, {
                [`${w}-${g}`]: !!g
            }),
            O = Object.assign(Object.assign({}, xn(b, ["suffix", "iconRender", "visibilityToggle"])), {
                type: a ? "text" : "password",
                className: R,
                prefixCls: y,
                suffix: S
            });
        return g && (O.size = g), i.createElement(Ln, Object.assign({
            ref: yn(t, d)
        }, O))
    }),
    is = as;
var ls = globalThis && globalThis.__rest || function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
};
const ss = i.forwardRef((e, t) => {
        const {
            prefixCls: r,
            inputPrefixCls: n,
            className: o,
            size: l,
            suffix: c,
            enterButton: a = !1,
            addonAfter: s,
            loading: d,
            disabled: f,
            onSearch: u,
            onChange: p,
            onCompositionStart: m,
            onCompositionEnd: v
        } = e, h = ls(e, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd"]), {
            getPrefixCls: g,
            direction: b
        } = i.useContext(tt), x = i.useRef(!1), y = g("input-search", r), w = g("input", n), {
            compactSize: S
        } = Cr(y, b), R = on(z => {
            var k;
            return (k = l ? ? S) !== null && k !== void 0 ? k : z
        }), O = i.useRef(null), N = z => {
            z && z.target && z.type === "click" && u && u(z.target.value, z, {
                source: "clear"
            }), p && p(z)
        }, C = z => {
            var k;
            document.activeElement === ((k = O.current) === null || k === void 0 ? void 0 : k.input) && z.preventDefault()
        }, P = z => {
            var k, A;
            u && u((A = (k = O.current) === null || k === void 0 ? void 0 : k.input) === null || A === void 0 ? void 0 : A.value, z, {
                source: "input"
            })
        }, M = z => {
            x.current || d || P(z)
        }, E = typeof a == "boolean" ? i.createElement(Wo, null) : null, I = `${y}-button`;
        let $;
        const D = a || {},
            B = D.type && D.type.__ANT_BUTTON === !0;
        B || D.type === "button" ? $ = Yt(D, Object.assign({
            onMouseDown: C,
            onClick: z => {
                var k, A;
                (A = (k = D == null ? void 0 : D.props) === null || k === void 0 ? void 0 : k.onClick) === null || A === void 0 || A.call(k, z), P(z)
            },
            key: "enterButton"
        }, B ? {
            className: I,
            size: R
        } : {})) : $ = i.createElement(gn, {
            className: I,
            type: a ? "primary" : void 0,
            size: R,
            disabled: f,
            key: "enterButton",
            onMouseDown: C,
            onClick: P,
            loading: d,
            icon: E
        }, a), s && ($ = [$, Yt(s, {
            key: "addonAfter"
        })]);
        const T = F(y, {
                [`${y}-rtl`]: b === "rtl",
                [`${y}-${R}`]: !!R,
                [`${y}-with-button`]: !!a
            }, o),
            L = z => {
                x.current = !0, m == null || m(z)
            },
            _ = z => {
                x.current = !1, v == null || v(z)
            };
        return i.createElement(Ln, Object.assign({
            ref: yn(O, t),
            onPressEnter: M
        }, h, {
            size: R,
            onCompositionStart: L,
            onCompositionEnd: _,
            prefixCls: w,
            addonAfter: $,
            suffix: c,
            onChange: N,
            className: T,
            disabled: f
        }))
    }),
    cs = ss;
var ds = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,
    us = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"],
    Gn = {},
    mt;

function fs(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        r = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
    if (t && Gn[r]) return Gn[r];
    var n = window.getComputedStyle(e),
        o = n.getPropertyValue("box-sizing") || n.getPropertyValue("-moz-box-sizing") || n.getPropertyValue("-webkit-box-sizing"),
        l = parseFloat(n.getPropertyValue("padding-bottom")) + parseFloat(n.getPropertyValue("padding-top")),
        c = parseFloat(n.getPropertyValue("border-bottom-width")) + parseFloat(n.getPropertyValue("border-top-width")),
        a = us.map(function(d) {
            return "".concat(d, ":").concat(n.getPropertyValue(d))
        }).join(";"),
        s = {
            sizingStyle: a,
            paddingSize: l,
            borderSize: c,
            boxSizing: o
        };
    return t && r && (Gn[r] = s), s
}

function ps(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null,
        n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    mt || (mt = document.createElement("textarea"), mt.setAttribute("tab-index", "-1"), mt.setAttribute("aria-hidden", "true"), document.body.appendChild(mt)), e.getAttribute("wrap") ? mt.setAttribute("wrap", e.getAttribute("wrap")) : mt.removeAttribute("wrap");
    var o = fs(e, t),
        l = o.paddingSize,
        c = o.borderSize,
        a = o.boxSizing,
        s = o.sizingStyle;
    mt.setAttribute("style", "".concat(s, ";").concat(ds)), mt.value = e.value || e.placeholder || "";
    var d = void 0,
        f = void 0,
        u, p = mt.scrollHeight;
    if (a === "border-box" ? p += c : a === "content-box" && (p -= l), r !== null || n !== null) {
        mt.value = " ";
        var m = mt.scrollHeight - l;
        r !== null && (d = m * r, a === "border-box" && (d = d + l + c), p = Math.max(d, p)), n !== null && (f = m * n, a === "border-box" && (f = f + l + c), u = p > f ? "" : "hidden", p = Math.min(f, p))
    }
    var v = {
        height: p,
        overflowY: u,
        resize: "none"
    };
    return d && (v.minHeight = d), f && (v.maxHeight = f), v
}
var ms = ["prefixCls", "onPressEnter", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"],
    Yn = 0,
    Jn = 1,
    Zn = 2,
    vs = i.forwardRef(function(e, t) {
        var r = e,
            n = r.prefixCls;
        r.onPressEnter;
        var o = r.defaultValue,
            l = r.value,
            c = r.autoSize,
            a = r.onResize,
            s = r.className,
            d = r.style,
            f = r.disabled,
            u = r.onChange;
        r.onInternalAutoSize;
        var p = ot(r, ms),
            m = jt(o, {
                value: l,
                postState: function(ae) {
                    return ae ? ? ""
                }
            }),
            v = ve(m, 2),
            h = v[0],
            g = v[1],
            b = function(ae) {
                g(ae.target.value), u == null || u(ae)
            },
            x = i.useRef();
        i.useImperativeHandle(t, function() {
            return {
                textArea: x.current
            }
        });
        var y = i.useMemo(function() {
                return c && vt(c) === "object" ? [c.minRows, c.maxRows] : []
            }, [c]),
            w = ve(y, 2),
            S = w[0],
            R = w[1],
            O = !!c,
            N = function() {
                try {
                    if (document.activeElement === x.current) {
                        var ae = x.current,
                            Q = ae.selectionStart,
                            re = ae.selectionEnd,
                            te = ae.scrollTop;
                        x.current.setSelectionRange(Q, re), x.current.scrollTop = te
                    }
                } catch {}
            },
            C = i.useState(Zn),
            P = ve(C, 2),
            M = P[0],
            E = P[1],
            I = i.useState(),
            $ = ve(I, 2),
            D = $[0],
            B = $[1],
            T = function() {
                E(Yn)
            };
        xt(function() {
            O && T()
        }, [l, S, R, O]), xt(function() {
            if (M === Yn) E(Jn);
            else if (M === Jn) {
                var j = ps(x.current, !1, S, R);
                E(Zn), B(j)
            } else N()
        }, [M]);
        var L = i.useRef(),
            _ = function() {
                Tt.cancel(L.current)
            },
            z = function(ae) {
                M === Zn && (a == null || a(ae), c && (_(), L.current = Tt(function() {
                    T()
                })))
            };
        i.useEffect(function() {
            return _
        }, []);
        var k = O ? D : null,
            A = X(X({}, d), k);
        return (M === Yn || M === Jn) && (A.overflowY = "hidden", A.overflowX = "hidden"), i.createElement(Mn, {
            onResize: z,
            disabled: !(c || a)
        }, i.createElement("textarea", de({}, p, {
            ref: x,
            style: A,
            className: F(n, s, K({}, "".concat(n, "-disabled"), f)),
            disabled: f,
            value: h,
            onChange: b
        })))
    }),
    gs = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize", "readOnly"],
    hs = Y.forwardRef(function(e, t) {
        var r, n = e.defaultValue,
            o = e.value,
            l = e.onFocus,
            c = e.onBlur,
            a = e.onChange,
            s = e.allowClear,
            d = e.maxLength,
            f = e.onCompositionStart,
            u = e.onCompositionEnd,
            p = e.suffix,
            m = e.prefixCls,
            v = m === void 0 ? "rc-textarea" : m,
            h = e.showCount,
            g = e.count,
            b = e.className,
            x = e.style,
            y = e.disabled,
            w = e.hidden,
            S = e.classNames,
            R = e.styles,
            O = e.onResize,
            N = e.readOnly,
            C = ot(e, gs),
            P = jt(n, {
                value: o,
                defaultValue: n
            }),
            M = ve(P, 2),
            E = M[0],
            I = M[1],
            $ = E == null ? "" : String(E),
            D = Y.useState(!1),
            B = ve(D, 2),
            T = B[0],
            L = B[1],
            _ = Y.useRef(!1),
            z = Y.useState(null),
            k = ve(z, 2),
            A = k[0],
            j = k[1],
            ae = i.useRef(null),
            Q = i.useRef(null),
            re = function() {
                var J;
                return (J = Q.current) === null || J === void 0 ? void 0 : J.textArea
            },
            te = function() {
                re().focus()
            };
        i.useImperativeHandle(t, function() {
            var Ie;
            return {
                resizableTextArea: Q.current,
                focus: te,
                blur: function() {
                    re().blur()
                },
                nativeElement: ((Ie = ae.current) === null || Ie === void 0 ? void 0 : Ie.nativeElement) || re()
            }
        }), i.useEffect(function() {
            L(function(Ie) {
                return !y && Ie
            })
        }, [y]);
        var se = Y.useState(null),
            le = ve(se, 2),
            fe = le[0],
            ne = le[1];
        Y.useEffect(function() {
            if (fe) {
                var Ie;
                (Ie = re()).setSelectionRange.apply(Ie, $e(fe))
            }
        }, [fe]);
        var q = ca(g, h),
            U = (r = q.max) !== null && r !== void 0 ? r : d,
            G = Number(U) > 0,
            H = q.strategy($),
            ge = !!U && H > U,
            V = function(J, ue) {
                var be = ue;
                !_.current && q.exceedFormatter && q.max && q.strategy(ue) > q.max && (be = q.exceedFormatter(ue, {
                    max: q.max
                }), ue !== be && ne([re().selectionStart || 0, re().selectionEnd || 0])), I(be), kn(J.currentTarget, J, a, be)
            },
            ce = function(J) {
                _.current = !0, f == null || f(J)
            },
            Ce = function(J) {
                _.current = !1, V(J, J.currentTarget.value), u == null || u(J)
            },
            ee = function(J) {
                V(J, J.target.value)
            },
            ie = function(J) {
                var ue = C.onPressEnter,
                    be = C.onKeyDown;
                J.key === "Enter" && ue && ue(J), be == null || be(J)
            },
            pe = function(J) {
                L(!0), l == null || l(J)
            },
            oe = function(J) {
                L(!1), c == null || c(J)
            },
            xe = function(J) {
                I(""), te(), kn(re(), J, a)
            },
            Ee = p,
            ye;
        q.show && (q.showFormatter ? ye = q.showFormatter({
            value: $,
            count: H,
            maxLength: U
        }) : ye = "".concat(H).concat(G ? " / ".concat(U) : ""), Ee = Y.createElement(Y.Fragment, null, Ee, Y.createElement("span", {
            className: F("".concat(v, "-data-count"), S == null ? void 0 : S.count),
            style: R == null ? void 0 : R.count
        }, ye)));
        var Xe = function(J) {
                var ue;
                O == null || O(J), (ue = re()) !== null && ue !== void 0 && ue.style.height && j(!0)
            },
            _e = !C.autoSize && !h && !s;
        return Y.createElement(Qo, {
            ref: ae,
            value: $,
            allowClear: s,
            handleReset: xe,
            suffix: Ee,
            prefixCls: v,
            classNames: X(X({}, S), {}, {
                affixWrapper: F(S == null ? void 0 : S.affixWrapper, K(K({}, "".concat(v, "-show-count"), h), "".concat(v, "-textarea-allow-clear"), s))
            }),
            disabled: y,
            focused: T,
            className: F(b, ge && "".concat(v, "-out-of-range")),
            style: X(X({}, x), A && !_e ? {
                height: "auto"
            } : {}),
            dataAttrs: {
                affixWrapper: {
                    "data-count": typeof ye == "string" ? ye : void 0
                }
            },
            hidden: w,
            readOnly: N
        }, Y.createElement(vs, de({}, C, {
            maxLength: d,
            onKeyDown: ie,
            onChange: ee,
            onFocus: pe,
            onBlur: oe,
            onCompositionStart: ce,
            onCompositionEnd: Ce,
            className: F(S == null ? void 0 : S.textarea),
            style: X(X({}, R == null ? void 0 : R.textarea), {}, {
                resize: x == null ? void 0 : x.resize
            }),
            disabled: y,
            prefixCls: v,
            onResize: Xe,
            ref: Q,
            readOnly: N
        })))
    }),
    ys = globalThis && globalThis.__rest || function(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
        return r
    };
const bs = i.forwardRef((e, t) => {
        var r, n;
        const {
            prefixCls: o,
            bordered: l = !0,
            size: c,
            disabled: a,
            status: s,
            allowClear: d,
            classNames: f,
            rootClassName: u,
            className: p,
            style: m,
            styles: v,
            variant: h
        } = e, g = ys(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className", "style", "styles", "variant"]), {
            getPrefixCls: b,
            direction: x,
            textArea: y
        } = i.useContext(tt), w = on(c), S = i.useContext(Fo), R = a ? ? S, {
            status: O,
            hasFeedback: N,
            feedbackIcon: C
        } = i.useContext(Jt), P = Sr(O, s), M = i.useRef(null);
        i.useImperativeHandle(t, () => {
            var z;
            return {
                resizableTextArea: (z = M.current) === null || z === void 0 ? void 0 : z.resizableTextArea,
                focus: k => {
                    var A, j;
                    Ml((j = (A = M.current) === null || A === void 0 ? void 0 : A.resizableTextArea) === null || j === void 0 ? void 0 : j.textArea, k)
                },
                blur: () => {
                    var k;
                    return (k = M.current) === null || k === void 0 ? void 0 : k.blur()
                }
            }
        });
        const E = b("input", o),
            I = bn(E),
            [$, D, B] = Er(E, I),
            [T, L] = Vo(h, l),
            _ = da(d ? ? (y == null ? void 0 : y.allowClear));
        return $(i.createElement(hs, Object.assign({
            autoComplete: y == null ? void 0 : y.autoComplete
        }, g, {
            style: Object.assign(Object.assign({}, y == null ? void 0 : y.style), m),
            styles: Object.assign(Object.assign({}, y == null ? void 0 : y.styles), v),
            disabled: R,
            allowClear: _,
            className: F(B, I, p, u, y == null ? void 0 : y.className),
            classNames: Object.assign(Object.assign(Object.assign({}, f), y == null ? void 0 : y.classNames), {
                textarea: F({
                    [`${E}-sm`]: w === "small",
                    [`${E}-lg`]: w === "large"
                }, D, f == null ? void 0 : f.textarea, (r = y == null ? void 0 : y.classNames) === null || r === void 0 ? void 0 : r.textarea),
                variant: F({
                    [`${E}-${T}`]: L
                }, ar(E, P)),
                affixWrapper: F(`${E}-textarea-affix-wrapper`, {
                    [`${E}-affix-wrapper-rtl`]: x === "rtl",
                    [`${E}-affix-wrapper-sm`]: w === "small",
                    [`${E}-affix-wrapper-lg`]: w === "large",
                    [`${E}-textarea-show-count`]: e.showCount || ((n = e.count) === null || n === void 0 ? void 0 : n.show)
                }, D)
            }),
            prefixCls: E,
            suffix: N && i.createElement("span", {
                className: `${E}-textarea-suffix`
            }, C),
            ref: M
        })))
    }),
    xs = bs,
    an = Ln;
an.Group = kl;
an.Search = cs;
an.TextArea = xs;
an.Password = is;
an.OTP = Wl;
const Cs = an;

function oo(e) {
    return ["small", "middle", "large"].includes(e)
}

function ao(e) {
    return e ? typeof e == "number" && !Number.isNaN(e) : !1
}
const fa = Y.createContext({
        latestIndex: 0
    }),
    Ss = fa.Provider,
    ws = e => {
        let {
            className: t,
            index: r,
            children: n,
            split: o,
            style: l
        } = e;
        const {
            latestIndex: c
        } = i.useContext(fa);
        return n == null ? null : i.createElement(i.Fragment, null, i.createElement("div", {
            className: t,
            style: l
        }, n), r < c && o && i.createElement("span", {
            className: `${t}-split`
        }, o))
    },
    $s = ws;
var Es = globalThis && globalThis.__rest || function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
};
const Ns = i.forwardRef((e, t) => {
        var r, n, o;
        const {
            getPrefixCls: l,
            space: c,
            direction: a
        } = i.useContext(tt), {
            size: s = (r = c == null ? void 0 : c.size) !== null && r !== void 0 ? r : "small",
            align: d,
            className: f,
            rootClassName: u,
            children: p,
            direction: m = "horizontal",
            prefixCls: v,
            split: h,
            style: g,
            wrap: b = !1,
            classNames: x,
            styles: y
        } = e, w = Es(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]), [S, R] = Array.isArray(s) ? s : [s, s], O = oo(R), N = oo(S), C = ao(R), P = ao(S), M = xr(p, {
            keepEmpty: !0
        }), E = d === void 0 && m === "horizontal" ? "center" : d, I = l("space", v), [$, D, B] = xi(I), T = F(I, c == null ? void 0 : c.className, D, `${I}-${m}`, {
            [`${I}-rtl`]: a === "rtl",
            [`${I}-align-${E}`]: E,
            [`${I}-gap-row-${R}`]: O,
            [`${I}-gap-col-${S}`]: N
        }, f, u, B), L = F(`${I}-item`, (n = x == null ? void 0 : x.item) !== null && n !== void 0 ? n : (o = c == null ? void 0 : c.classNames) === null || o === void 0 ? void 0 : o.item);
        let _ = 0;
        const z = M.map((j, ae) => {
                var Q, re;
                j != null && (_ = ae);
                const te = j && j.key || `${L}-${ae}`;
                return i.createElement($s, {
                    className: L,
                    key: te,
                    index: ae,
                    split: h,
                    style: (Q = y == null ? void 0 : y.item) !== null && Q !== void 0 ? Q : (re = c == null ? void 0 : c.styles) === null || re === void 0 ? void 0 : re.item
                }, j)
            }),
            k = i.useMemo(() => ({
                latestIndex: _
            }), [_]);
        if (M.length === 0) return null;
        const A = {};
        return b && (A.flexWrap = "wrap"), !N && P && (A.columnGap = S), !O && C && (A.rowGap = R), $(i.createElement("div", Object.assign({
            ref: t,
            className: T,
            style: Object.assign(Object.assign(Object.assign({}, A), c == null ? void 0 : c.style), g)
        }, w), i.createElement(Ss, {
            value: k
        }, z)))
    }),
    pa = Ns;
pa.Compact = bi;
const Os = pa;
var Rs = globalThis && globalThis.__rest || function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
};
const ma = e => {
    const {
        getPopupContainer: t,
        getPrefixCls: r,
        direction: n
    } = i.useContext(tt), {
        prefixCls: o,
        type: l = "default",
        danger: c,
        disabled: a,
        loading: s,
        onClick: d,
        htmlType: f,
        children: u,
        className: p,
        menu: m,
        arrow: v,
        autoFocus: h,
        overlay: g,
        trigger: b,
        align: x,
        open: y,
        onOpenChange: w,
        placement: S,
        getPopupContainer: R,
        href: O,
        icon: N = i.createElement(Ci, null),
        title: C,
        buttonsRender: P = se => se,
        mouseEnterDelay: M,
        mouseLeaveDelay: E,
        overlayClassName: I,
        overlayStyle: $,
        destroyPopupOnHide: D,
        dropdownRender: B
    } = e, T = Rs(e, ["prefixCls", "type", "danger", "disabled", "loading", "onClick", "htmlType", "children", "className", "menu", "arrow", "autoFocus", "overlay", "trigger", "align", "open", "onOpenChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide", "dropdownRender"]), L = r("dropdown", o), _ = `${L}-button`, z = {
        menu: m,
        arrow: v,
        autoFocus: h,
        align: x,
        disabled: a,
        trigger: a ? [] : b,
        onOpenChange: w,
        getPopupContainer: R || t,
        mouseEnterDelay: M,
        mouseLeaveDelay: E,
        overlayClassName: I,
        overlayStyle: $,
        destroyPopupOnHide: D,
        dropdownRender: B
    }, {
        compactSize: k,
        compactItemClassnames: A
    } = Cr(L, n), j = F(_, A, p);
    "overlay" in e && (z.overlay = g), "open" in e && (z.open = y), "placement" in e ? z.placement = S : z.placement = n === "rtl" ? "bottomLeft" : "bottomRight";
    const ae = i.createElement(gn, {
            type: l,
            danger: c,
            disabled: a,
            loading: s,
            onClick: d,
            htmlType: f,
            href: O,
            title: C
        }, u),
        Q = i.createElement(gn, {
            type: l,
            danger: c,
            icon: N
        }),
        [re, te] = P([ae, Q]);
    return i.createElement(Os.Compact, Object.assign({
        className: j,
        size: k,
        block: !0
    }, T), re, i.createElement(aa, Object.assign({}, z), te))
};
ma.__ANT_BUTTON = !0;
const Is = ma,
    va = aa;
va.Button = Is;
const ga = va;

function io(e) {
    var t = e.getBoundingClientRect(),
        r = document.documentElement;
    return {
        left: t.left + (window.pageXOffset || r.scrollLeft) - (r.clientLeft || document.body.clientLeft || 0),
        top: t.top + (window.pageYOffset || r.scrollTop) - (r.clientTop || document.body.clientTop || 0)
    }
}

function On(e, t, r, n) {
    var o = Yr.unstable_batchedUpdates ? function(c) {
        Yr.unstable_batchedUpdates(r, c)
    } : r;
    return e != null && e.addEventListener && e.addEventListener(t, o, n), {
        remove: function() {
            e != null && e.removeEventListener && e.removeEventListener(t, o, n)
        }
    }
}
const Ps = function() {
        const e = Object.assign({}, arguments.length <= 0 ? void 0 : arguments[0]);
        for (let t = 1; t < arguments.length; t++) {
            const r = t < 0 || arguments.length <= t ? void 0 : arguments[t];
            r && Object.keys(r).forEach(n => {
                const o = r[n];
                o !== void 0 && (e[n] = o)
            })
        }
        return e
    },
    Ts = Ps;
var ks = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "64 64 896 896",
            focusable: "false"
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"
            }
        }]
    },
    name: "double-left",
    theme: "outlined"
};
const Ks = ks;
var Ds = function(t, r) {
        return i.createElement(rt, de({}, t, {
            ref: r,
            icon: Ks
        }))
    },
    zs = i.forwardRef(Ds);
const lo = zs;
var Ms = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "64 64 896 896",
            focusable: "false"
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"
            }
        }]
    },
    name: "double-right",
    theme: "outlined"
};
const Bs = Ms;
var Ls = function(t, r) {
        return i.createElement(rt, de({}, t, {
            ref: r,
            icon: Bs
        }))
    },
    _s = i.forwardRef(Ls);
const so = _s;
var js = {
        items_per_page: "条/页",
        jump_to: "跳至",
        jump_to_confirm: "确定",
        page: "页",
        prev_page: "上一页",
        next_page: "下一页",
        prev_5: "向前 5 页",
        next_5: "向后 5 页",
        prev_3: "向前 3 页",
        next_3: "向后 3 页",
        page_size: "页码"
    },
    As = ["10", "20", "50", "100"],
    Hs = function(t) {
        var r = t.pageSizeOptions,
            n = r === void 0 ? As : r,
            o = t.locale,
            l = t.changeSize,
            c = t.pageSize,
            a = t.goButton,
            s = t.quickGo,
            d = t.rootPrefixCls,
            f = t.selectComponentClass,
            u = t.selectPrefixCls,
            p = t.disabled,
            m = t.buildOptionText,
            v = Y.useState(""),
            h = ve(v, 2),
            g = h[0],
            b = h[1],
            x = function() {
                return !g || Number.isNaN(g) ? void 0 : Number(g)
            },
            y = typeof m == "function" ? m : function($) {
                return "".concat($, " ").concat(o.items_per_page)
            },
            w = function(D) {
                l == null || l(Number(D))
            },
            S = function(D) {
                b(D.target.value)
            },
            R = function(D) {
                a || g === "" || (b(""), !(D.relatedTarget && (D.relatedTarget.className.indexOf("".concat(d, "-item-link")) >= 0 || D.relatedTarget.className.indexOf("".concat(d, "-item")) >= 0)) && (s == null || s(x())))
            },
            O = function(D) {
                g !== "" && (D.keyCode === We.ENTER || D.type === "click") && (b(""), s == null || s(x()))
            },
            N = function() {
                return n.some(function(D) {
                    return D.toString() === c.toString()
                }) ? n : n.concat([c.toString()]).sort(function(D, B) {
                    var T = Number.isNaN(Number(D)) ? 0 : Number(D),
                        L = Number.isNaN(Number(B)) ? 0 : Number(B);
                    return T - L
                })
            },
            C = "".concat(d, "-options");
        if (!l && !s) return null;
        var P = null,
            M = null,
            E = null;
        if (l && f) {
            var I = N().map(function($, D) {
                return Y.createElement(f.Option, {
                    key: D,
                    value: $.toString()
                }, y($))
            });
            P = Y.createElement(f, {
                disabled: p,
                prefixCls: u,
                showSearch: !1,
                className: "".concat(C, "-size-changer"),
                optionLabelProp: "children",
                popupMatchSelectWidth: !1,
                value: (c || n[0]).toString(),
                onChange: w,
                getPopupContainer: function(D) {
                    return D.parentNode
                },
                "aria-label": o.page_size,
                defaultOpen: !1
            }, I)
        }
        return s && (a && (E = typeof a == "boolean" ? Y.createElement("button", {
            type: "button",
            onClick: O,
            onKeyUp: O,
            disabled: p,
            className: "".concat(C, "-quick-jumper-button")
        }, o.jump_to_confirm) : Y.createElement("span", {
            onClick: O,
            onKeyUp: O
        }, a)), M = Y.createElement("div", {
            className: "".concat(C, "-quick-jumper")
        }, o.jump_to, Y.createElement("input", {
            disabled: p,
            type: "text",
            value: g,
            onChange: S,
            onKeyUp: O,
            onBlur: R,
            "aria-label": o.page
        }), o.page, E)), Y.createElement("li", {
            className: C
        }, P, M)
    },
    pn = function(t) {
        var r, n = t.rootPrefixCls,
            o = t.page,
            l = t.active,
            c = t.className,
            a = t.showTitle,
            s = t.onClick,
            d = t.onKeyPress,
            f = t.itemRender,
            u = "".concat(n, "-item"),
            p = F(u, "".concat(u, "-").concat(o), (r = {}, K(r, "".concat(u, "-active"), l), K(r, "".concat(u, "-disabled"), !o), r), c),
            m = function() {
                s(o)
            },
            v = function(b) {
                d(b, s, o)
            },
            h = f(o, "page", Y.createElement("a", {
                rel: "nofollow"
            }, o));
        return h ? Y.createElement("li", {
            title: a ? String(o) : null,
            className: p,
            onClick: m,
            onKeyDown: v,
            tabIndex: 0
        }, h) : null
    },
    Fs = function(t, r, n) {
        return n
    };

function co() {}

function uo(e) {
    var t = Number(e);
    return typeof t == "number" && !Number.isNaN(t) && isFinite(t) && Math.floor(t) === t
}

function _t(e, t, r) {
    var n = typeof e > "u" ? t : e;
    return Math.floor((r - 1) / n) + 1
}
var Vs = function(t) {
    var r, n = t.prefixCls,
        o = n === void 0 ? "rc-pagination" : n,
        l = t.selectPrefixCls,
        c = l === void 0 ? "rc-select" : l,
        a = t.className,
        s = t.selectComponentClass,
        d = t.current,
        f = t.defaultCurrent,
        u = f === void 0 ? 1 : f,
        p = t.total,
        m = p === void 0 ? 0 : p,
        v = t.pageSize,
        h = t.defaultPageSize,
        g = h === void 0 ? 10 : h,
        b = t.onChange,
        x = b === void 0 ? co : b,
        y = t.hideOnSinglePage,
        w = t.showPrevNextJumpers,
        S = w === void 0 ? !0 : w,
        R = t.showQuickJumper,
        O = t.showLessItems,
        N = t.showTitle,
        C = N === void 0 ? !0 : N,
        P = t.onShowSizeChange,
        M = P === void 0 ? co : P,
        E = t.locale,
        I = E === void 0 ? js : E,
        $ = t.style,
        D = t.totalBoundaryShowSizeChanger,
        B = D === void 0 ? 50 : D,
        T = t.disabled,
        L = t.simple,
        _ = t.showTotal,
        z = t.showSizeChanger,
        k = t.pageSizeOptions,
        A = t.itemRender,
        j = A === void 0 ? Fs : A,
        ae = t.jumpPrevIcon,
        Q = t.jumpNextIcon,
        re = t.prevIcon,
        te = t.nextIcon,
        se = Y.useRef(null),
        le = jt(10, {
            value: v,
            defaultValue: g
        }),
        fe = ve(le, 2),
        ne = fe[0],
        q = fe[1],
        U = jt(1, {
            value: d,
            defaultValue: u,
            postState: function(Oe) {
                return Math.max(1, Math.min(Oe, _t(void 0, ne, m)))
            }
        }),
        G = ve(U, 2),
        H = G[0],
        ge = G[1],
        V = Y.useState(H),
        ce = ve(V, 2),
        Ce = ce[0],
        ee = ce[1];
    i.useEffect(function() {
        ee(H)
    }, [H]);
    var ie = Math.max(1, H - (O ? 3 : 5)),
        pe = Math.min(_t(void 0, ne, m), H + (O ? 3 : 5));

    function oe(me, Oe) {
        var Me = me || Y.createElement("button", {
            type: "button",
            "aria-label": Oe,
            className: "".concat(o, "-item-link")
        });
        return typeof me == "function" && (Me = Y.createElement(me, X({}, t))), Me
    }

    function xe(me) {
        var Oe = me.target.value,
            Me = _t(void 0, ne, m),
            dt;
        return Oe === "" ? dt = Oe : Number.isNaN(Number(Oe)) ? dt = Ce : Oe >= Me ? dt = Me : dt = Number(Oe), dt
    }

    function Ee(me) {
        return uo(me) && me !== H && uo(m) && m > 0
    }
    var ye = m > ne ? R : !1;

    function Xe(me) {
        (me.keyCode === We.UP || me.keyCode === We.DOWN) && me.preventDefault()
    }

    function _e(me) {
        var Oe = xe(me);
        switch (Oe !== Ce && ee(Oe), me.keyCode) {
            case We.ENTER:
                ue(Oe);
                break;
            case We.UP:
                ue(Oe - 1);
                break;
            case We.DOWN:
                ue(Oe + 1);
                break
        }
    }

    function Ie(me) {
        ue(xe(me))
    }

    function J(me) {
        var Oe = _t(me, ne, m),
            Me = H > Oe && Oe !== 0 ? Oe : H;
        q(me), ee(Me), M == null || M(H, me), ge(Me), x == null || x(Me, me)
    }

    function ue(me) {
        if (Ee(me) && !T) {
            var Oe = _t(void 0, ne, m),
                Me = me;
            return me > Oe ? Me = Oe : me < 1 && (Me = 1), Me !== Ce && ee(Me), ge(Me), x == null || x(Me, ne), Me
        }
        return H
    }
    var be = H > 1,
        De = H < _t(void 0, ne, m),
        ze = z ? ? m > B;

    function Pe() {
        be && ue(H - 1)
    }

    function Be() {
        De && ue(H + 1)
    }

    function Ae() {
        ue(ie)
    }

    function ke() {
        ue(pe)
    }

    function at(me, Oe) {
        if (me.key === "Enter" || me.charCode === We.ENTER || me.keyCode === We.ENTER) {
            for (var Me = arguments.length, dt = new Array(Me > 2 ? Me - 2 : 0), Mt = 2; Mt < Me; Mt++) dt[Mt - 2] = arguments[Mt];
            Oe.apply(void 0, dt)
        }
    }

    function Ze(me) {
        at(me, Pe)
    }

    function kt(me) {
        at(me, Be)
    }

    function Ke(me) {
        at(me, Ae)
    }

    function Kt(me) {
        at(me, ke)
    }

    function Qe(me) {
        var Oe = j(me, "prev", oe(re, "prev page"));
        return Y.isValidElement(Oe) ? Y.cloneElement(Oe, {
            disabled: !be
        }) : Oe
    }

    function ct(me) {
        var Oe = j(me, "next", oe(te, "next page"));
        return Y.isValidElement(Oe) ? Y.cloneElement(Oe, {
            disabled: !De
        }) : Oe
    }

    function et(me) {
        (me.type === "click" || me.keyCode === We.ENTER) && ue(Ce)
    }
    var Ct = null,
        gt = Zt(t, {
            aria: !0,
            data: !0
        }),
        Fe = _ && Y.createElement("li", {
            className: "".concat(o, "-total-text")
        }, _(m, [m === 0 ? 0 : (H - 1) * ne + 1, H * ne > m ? m : H * ne])),
        qe = null,
        Te = _t(void 0, ne, m);
    if (y && m <= ne) return null;
    var je = [],
        it = {
            rootPrefixCls: o,
            onClick: ue,
            onKeyPress: at,
            showTitle: C,
            itemRender: j,
            page: -1
        },
        ut = H - 1 > 0 ? H - 1 : 0,
        cn = H + 1 < Te ? H + 1 : Te,
        St = R && R.goButton,
        wt = St,
        he = null;
    L && (St && (typeof St == "boolean" ? wt = Y.createElement("button", {
        type: "button",
        onClick: et,
        onKeyUp: et
    }, I.jump_to_confirm) : wt = Y.createElement("span", {
        onClick: et,
        onKeyUp: et
    }, St), wt = Y.createElement("li", {
        title: C ? "".concat(I.jump_to).concat(H, "/").concat(Te) : null,
        className: "".concat(o, "-simple-pager")
    }, wt)), he = Y.createElement("li", {
        title: C ? "".concat(H, "/").concat(Te) : null,
        className: "".concat(o, "-simple-pager")
    }, Y.createElement("input", {
        type: "text",
        value: Ce,
        disabled: T,
        onKeyDown: Xe,
        onKeyUp: _e,
        onChange: _e,
        onBlur: Ie,
        size: 3
    }), Y.createElement("span", {
        className: "".concat(o, "-slash")
    }, "/"), Te));
    var Se = O ? 1 : 2;
    if (Te <= 3 + Se * 2) {
        Te || je.push(Y.createElement(pn, de({}, it, {
            key: "noPager",
            page: 1,
            className: "".concat(o, "-item-disabled")
        })));
        for (var Ne = 1; Ne <= Te; Ne += 1) je.push(Y.createElement(pn, de({}, it, {
            key: Ne,
            page: Ne,
            active: H === Ne
        })))
    } else {
        var Le = O ? I.prev_3 : I.prev_5,
            Ue = O ? I.next_3 : I.next_5,
            Ve = j(ie, "jump-prev", oe(ae, "prev page")),
            Ge = j(pe, "jump-next", oe(Q, "next page"));
        S && (Ct = Ve ? Y.createElement("li", {
            title: C ? Le : null,
            key: "prev",
            onClick: Ae,
            tabIndex: 0,
            onKeyDown: Ke,
            className: F("".concat(o, "-jump-prev"), K({}, "".concat(o, "-jump-prev-custom-icon"), !!ae))
        }, Ve) : null, qe = Ge ? Y.createElement("li", {
            title: C ? Ue : null,
            key: "next",
            onClick: ke,
            tabIndex: 0,
            onKeyDown: Kt,
            className: F("".concat(o, "-jump-next"), K({}, "".concat(o, "-jump-next-custom-icon"), !!Q))
        }, Ge) : null);
        var ft = Math.max(1, H - Se),
            dn = Math.min(H + Se, Te);
        H - 1 <= Se && (dn = 1 + Se * 2), Te - H <= Se && (ft = Te - Se * 2);
        for (var Nt = ft; Nt <= dn; Nt += 1) je.push(Y.createElement(pn, de({}, it, {
            key: Nt,
            page: Nt,
            active: H === Nt
        })));
        if (H - 1 >= Se * 2 && H !== 1 + 2 && (je[0] = Y.cloneElement(je[0], {
                className: F("".concat(o, "-item-after-jump-prev"), je[0].props.className)
            }), je.unshift(Ct)), Te - H >= Se * 2 && H !== Te - 2) {
            var $n = je[je.length - 1];
            je[je.length - 1] = Y.cloneElement($n, {
                className: F("".concat(o, "-item-before-jump-next"), $n.props.className)
            }), je.push(qe)
        }
        ft !== 1 && je.unshift(Y.createElement(pn, de({}, it, {
            key: 1,
            page: 1
        }))), dn !== Te && je.push(Y.createElement(pn, de({}, it, {
            key: Te,
            page: Te
        })))
    }
    var Dt = Qe(ut);
    if (Dt) {
        var Ot = !be || !Te;
        Dt = Y.createElement("li", {
            title: C ? I.prev_page : null,
            onClick: Pe,
            tabIndex: Ot ? null : 0,
            onKeyDown: Ze,
            className: F("".concat(o, "-prev"), K({}, "".concat(o, "-disabled"), Ot)),
            "aria-disabled": Ot
        }, Dt)
    }
    var ht = ct(cn);
    if (ht) {
        var zt, Vt;
        L ? (zt = !De, Vt = be ? 0 : null) : (zt = !De || !Te, Vt = zt ? null : 0), ht = Y.createElement("li", {
            title: C ? I.next_page : null,
            onClick: Be,
            tabIndex: Vt,
            onKeyDown: kt,
            className: F("".concat(o, "-next"), K({}, "".concat(o, "-disabled"), zt)),
            "aria-disabled": zt
        }, ht)
    }
    var Hn = F(o, a, (r = {}, K(r, "".concat(o, "-simple"), L), K(r, "".concat(o, "-disabled"), T), r));
    return Y.createElement("ul", de({
        className: Hn,
        style: $,
        ref: se
    }, gt), Fe, Dt, L ? he : je, ht, Y.createElement(Hs, {
        locale: I,
        rootPrefixCls: o,
        disabled: T,
        selectComponentClass: s,
        selectPrefixCls: c,
        changeSize: ze ? J : null,
        pageSize: ne,
        pageSizeOptions: k,
        quickGo: ye ? ue : null,
        goButton: wt
    }))
};
const ha = e => i.createElement(Bn, Object.assign({}, e, {
        showSearch: !0,
        size: "small"
    })),
    ya = e => i.createElement(Bn, Object.assign({}, e, {
        showSearch: !0,
        size: "middle"
    }));
ha.Option = Bn.Option;
ya.Option = Bn.Option;
const Ws = e => {
        const {
            componentCls: t
        } = e;
        return {
            [`${t}-disabled`]: {
                "&, &:hover": {
                    cursor: "not-allowed",
                    [`${t}-item-link`]: {
                        color: e.colorTextDisabled,
                        cursor: "not-allowed"
                    }
                },
                "&:focus-visible": {
                    cursor: "not-allowed",
                    [`${t}-item-link`]: {
                        color: e.colorTextDisabled,
                        cursor: "not-allowed"
                    }
                }
            },
            [`&${t}-disabled`]: {
                cursor: "not-allowed",
                [`${t}-item`]: {
                    cursor: "not-allowed",
                    "&:hover, &:active": {
                        backgroundColor: "transparent"
                    },
                    a: {
                        color: e.colorTextDisabled,
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "not-allowed"
                    },
                    "&-active": {
                        borderColor: e.colorBorder,
                        backgroundColor: e.itemActiveBgDisabled,
                        "&:hover, &:active": {
                            backgroundColor: e.itemActiveBgDisabled
                        },
                        a: {
                            color: e.itemActiveColorDisabled
                        }
                    }
                },
                [`${t}-item-link`]: {
                    color: e.colorTextDisabled,
                    cursor: "not-allowed",
                    "&:hover, &:active": {
                        backgroundColor: "transparent"
                    },
                    [`${t}-simple&`]: {
                        backgroundColor: "transparent",
                        "&:hover, &:active": {
                            backgroundColor: "transparent"
                        }
                    }
                },
                [`${t}-simple-pager`]: {
                    color: e.colorTextDisabled
                },
                [`${t}-jump-prev, ${t}-jump-next`]: {
                    [`${t}-item-link-icon`]: {
                        opacity: 0
                    },
                    [`${t}-item-ellipsis`]: {
                        opacity: 1
                    }
                }
            },
            [`&${t}-simple`]: {
                [`${t}-prev, ${t}-next`]: {
                    [`&${t}-disabled ${t}-item-link`]: {
                        "&:hover, &:active": {
                            backgroundColor: "transparent"
                        }
                    }
                }
            }
        }
    },
    Xs = e => {
        const {
            componentCls: t
        } = e;
        return {
            [`&${t}-mini ${t}-total-text, &${t}-mini ${t}-simple-pager`]: {
                height: e.itemSizeSM,
                lineHeight: W(e.itemSizeSM)
            },
            [`&${t}-mini ${t}-item`]: {
                minWidth: e.itemSizeSM,
                height: e.itemSizeSM,
                margin: 0,
                lineHeight: W(e.calc(e.itemSizeSM).sub(2).equal())
            },
            [`&${t}-mini:not(${t}-disabled) ${t}-item:not(${t}-item-active)`]: {
                backgroundColor: "transparent",
                borderColor: "transparent",
                "&:hover": {
                    backgroundColor: e.colorBgTextHover
                },
                "&:active": {
                    backgroundColor: e.colorBgTextActive
                }
            },
            [`&${t}-mini ${t}-prev, &${t}-mini ${t}-next`]: {
                minWidth: e.itemSizeSM,
                height: e.itemSizeSM,
                margin: 0,
                lineHeight: W(e.itemSizeSM)
            },
            [`&${t}-mini:not(${t}-disabled)`]: {
                [`${t}-prev, ${t}-next`]: {
                    [`&:hover ${t}-item-link`]: {
                        backgroundColor: e.colorBgTextHover
                    },
                    [`&:active ${t}-item-link`]: {
                        backgroundColor: e.colorBgTextActive
                    },
                    [`&${t}-disabled:hover ${t}-item-link`]: {
                        backgroundColor: "transparent"
                    }
                }
            },
            [`
    &${t}-mini ${t}-prev ${t}-item-link,
    &${t}-mini ${t}-next ${t}-item-link
    `]: {
                backgroundColor: "transparent",
                borderColor: "transparent",
                "&::after": {
                    height: e.itemSizeSM,
                    lineHeight: W(e.itemSizeSM)
                }
            },
            [`&${t}-mini ${t}-jump-prev, &${t}-mini ${t}-jump-next`]: {
                height: e.itemSizeSM,
                marginInlineEnd: 0,
                lineHeight: W(e.itemSizeSM)
            },
            [`&${t}-mini ${t}-options`]: {
                marginInlineStart: e.paginationMiniOptionsMarginInlineStart,
                "&-size-changer": {
                    top: e.miniOptionsSizeChangerTop
                },
                "&-quick-jumper": {
                    height: e.itemSizeSM,
                    lineHeight: W(e.itemSizeSM),
                    input: Object.assign(Object.assign({}, _i(e)), {
                        width: e.paginationMiniQuickJumperInputWidth,
                        height: e.controlHeightSM
                    })
                }
            }
        }
    },
    qs = e => {
        const {
            componentCls: t
        } = e;
        return {
            [`
    &${t}-simple ${t}-prev,
    &${t}-simple ${t}-next
    `]: {
                height: e.itemSizeSM,
                lineHeight: W(e.itemSizeSM),
                verticalAlign: "top",
                [`${t}-item-link`]: {
                    height: e.itemSizeSM,
                    backgroundColor: "transparent",
                    border: 0,
                    "&:hover": {
                        backgroundColor: e.colorBgTextHover
                    },
                    "&:active": {
                        backgroundColor: e.colorBgTextActive
                    },
                    "&::after": {
                        height: e.itemSizeSM,
                        lineHeight: W(e.itemSizeSM)
                    }
                }
            },
            [`&${t}-simple ${t}-simple-pager`]: {
                display: "inline-block",
                height: e.itemSizeSM,
                marginInlineEnd: e.marginXS,
                input: {
                    boxSizing: "border-box",
                    height: "100%",
                    marginInlineEnd: e.marginXS,
                    padding: `0 ${W(e.paginationItemPaddingInline)}`,
                    textAlign: "center",
                    backgroundColor: e.itemInputBg,
                    border: `${W(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
                    borderRadius: e.borderRadius,
                    outline: "none",
                    transition: `border-color ${e.motionDurationMid}`,
                    color: "inherit",
                    "&:hover": {
                        borderColor: e.colorPrimary
                    },
                    "&:focus": {
                        borderColor: e.colorPrimaryHover,
                        boxShadow: `${W(e.inputOutlineOffset)} 0 ${W(e.controlOutlineWidth)} ${e.controlOutline}`
                    },
                    "&[disabled]": {
                        color: e.colorTextDisabled,
                        backgroundColor: e.colorBgContainerDisabled,
                        borderColor: e.colorBorder,
                        cursor: "not-allowed"
                    }
                }
            }
        }
    },
    Us = e => {
        const {
            componentCls: t,
            antCls: r
        } = e;
        return {
            [`${t}-jump-prev, ${t}-jump-next`]: {
                outline: 0,
                [`${t}-item-container`]: {
                    position: "relative",
                    [`${t}-item-link-icon`]: {
                        color: e.colorPrimary,
                        fontSize: e.fontSizeSM,
                        opacity: 0,
                        transition: `all ${e.motionDurationMid}`,
                        "&-svg": {
                            top: 0,
                            insetInlineEnd: 0,
                            bottom: 0,
                            insetInlineStart: 0,
                            margin: "auto"
                        }
                    },
                    [`${t}-item-ellipsis`]: {
                        position: "absolute",
                        top: 0,
                        insetInlineEnd: 0,
                        bottom: 0,
                        insetInlineStart: 0,
                        display: "block",
                        margin: "auto",
                        color: e.colorTextDisabled,
                        fontFamily: "Arial, Helvetica, sans-serif",
                        letterSpacing: e.paginationEllipsisLetterSpacing,
                        textAlign: "center",
                        textIndent: e.paginationEllipsisTextIndent,
                        opacity: 1,
                        transition: `all ${e.motionDurationMid}`
                    }
                },
                "&:hover": {
                    [`${t}-item-link-icon`]: {
                        opacity: 1
                    },
                    [`${t}-item-ellipsis`]: {
                        opacity: 0
                    }
                }
            },
            [`
    ${t}-prev,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: {
                marginInlineEnd: e.marginXS
            },
            [`
    ${t}-prev,
    ${t}-next,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: {
                display: "inline-block",
                minWidth: e.itemSize,
                height: e.itemSize,
                color: e.colorText,
                fontFamily: e.fontFamily,
                lineHeight: `${W(e.itemSize)}`,
                textAlign: "center",
                verticalAlign: "middle",
                listStyle: "none",
                borderRadius: e.borderRadius,
                cursor: "pointer",
                transition: `all ${e.motionDurationMid}`
            },
            [`${t}-prev, ${t}-next`]: {
                fontFamily: "Arial, Helvetica, sans-serif",
                outline: 0,
                button: {
                    color: e.colorText,
                    cursor: "pointer",
                    userSelect: "none"
                },
                [`${t}-item-link`]: {
                    display: "block",
                    width: "100%",
                    height: "100%",
                    padding: 0,
                    fontSize: e.fontSizeSM,
                    textAlign: "center",
                    backgroundColor: "transparent",
                    border: `${W(e.lineWidth)} ${e.lineType} transparent`,
                    borderRadius: e.borderRadius,
                    outline: "none",
                    transition: `all ${e.motionDurationMid}`
                },
                [`&:hover ${t}-item-link`]: {
                    backgroundColor: e.colorBgTextHover
                },
                [`&:active ${t}-item-link`]: {
                    backgroundColor: e.colorBgTextActive
                },
                [`&${t}-disabled:hover`]: {
                    [`${t}-item-link`]: {
                        backgroundColor: "transparent"
                    }
                }
            },
            [`${t}-slash`]: {
                marginInlineEnd: e.paginationSlashMarginInlineEnd,
                marginInlineStart: e.paginationSlashMarginInlineStart
            },
            [`${t}-options`]: {
                display: "inline-block",
                marginInlineStart: e.margin,
                verticalAlign: "middle",
                "&-size-changer": {
                    display: "inline-block",
                    width: "auto",
                    [`${r}-select-arrow:not(:last-child)`]: {
                        opacity: 1
                    }
                },
                "&-quick-jumper": {
                    display: "inline-block",
                    height: e.controlHeight,
                    marginInlineStart: e.marginXS,
                    lineHeight: W(e.controlHeight),
                    verticalAlign: "top",
                    input: Object.assign(Object.assign(Object.assign({}, ji(e)), Ai(e, {
                        borderColor: e.colorBorder,
                        hoverBorderColor: e.colorPrimaryHover,
                        activeBorderColor: e.colorPrimary,
                        activeShadow: e.activeShadow
                    })), {
                        "&[disabled]": Object.assign({}, Hi(e)),
                        width: e.calc(e.controlHeightLG).mul(1.25).equal(),
                        height: e.controlHeight,
                        boxSizing: "border-box",
                        margin: 0,
                        marginInlineStart: e.marginXS,
                        marginInlineEnd: e.marginXS
                    })
                }
            }
        }
    },
    Gs = e => {
        const {
            componentCls: t
        } = e;
        return {
            [`${t}-item`]: {
                display: "inline-block",
                minWidth: e.itemSize,
                height: e.itemSize,
                marginInlineEnd: e.marginXS,
                fontFamily: e.fontFamily,
                lineHeight: W(e.calc(e.itemSize).sub(2).equal()),
                textAlign: "center",
                verticalAlign: "middle",
                listStyle: "none",
                backgroundColor: "transparent",
                border: `${W(e.lineWidth)} ${e.lineType} transparent`,
                borderRadius: e.borderRadius,
                outline: 0,
                cursor: "pointer",
                userSelect: "none",
                a: {
                    display: "block",
                    padding: `0 ${W(e.paginationItemPaddingInline)}`,
                    color: e.colorText,
                    "&:hover": {
                        textDecoration: "none"
                    }
                },
                [`&:not(${t}-item-active)`]: {
                    "&:hover": {
                        transition: `all ${e.motionDurationMid}`,
                        backgroundColor: e.colorBgTextHover
                    },
                    "&:active": {
                        backgroundColor: e.colorBgTextActive
                    }
                },
                "&-active": {
                    fontWeight: e.fontWeightStrong,
                    backgroundColor: e.itemActiveBg,
                    borderColor: e.colorPrimary,
                    a: {
                        color: e.colorPrimary
                    },
                    "&:hover": {
                        borderColor: e.colorPrimaryHover
                    },
                    "&:hover a": {
                        color: e.colorPrimaryHover
                    }
                }
            }
        }
    },
    Ys = e => {
        const {
            componentCls: t
        } = e;
        return {
            [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, rn(e)), {
                "ul, ol": {
                    margin: 0,
                    padding: 0,
                    listStyle: "none"
                },
                "&::after": {
                    display: "block",
                    clear: "both",
                    height: 0,
                    overflow: "hidden",
                    visibility: "hidden",
                    content: '""'
                },
                [`${t}-total-text`]: {
                    display: "inline-block",
                    height: e.itemSize,
                    marginInlineEnd: e.marginXS,
                    lineHeight: W(e.calc(e.itemSize).sub(2).equal()),
                    verticalAlign: "middle"
                }
            }), Gs(e)), Us(e)), qs(e)), Xs(e)), Ws(e)), {
                [`@media only screen and (max-width: ${e.screenLG}px)`]: {
                    [`${t}-item`]: {
                        "&-after-jump-prev, &-before-jump-next": {
                            display: "none"
                        }
                    }
                },
                [`@media only screen and (max-width: ${e.screenSM}px)`]: {
                    [`${t}-options`]: {
                        display: "none"
                    }
                }
            }),
            [`&${e.componentCls}-rtl`]: {
                direction: "rtl"
            }
        }
    },
    Js = e => {
        const {
            componentCls: t
        } = e;
        return {
            [`${t}:not(${t}-disabled)`]: {
                [`${t}-item`]: Object.assign({}, or(e)),
                [`${t}-jump-prev, ${t}-jump-next`]: {
                    "&:focus-visible": Object.assign({
                        [`${t}-item-link-icon`]: {
                            opacity: 1
                        },
                        [`${t}-item-ellipsis`]: {
                            opacity: 0
                        }
                    }, ir(e))
                },
                [`${t}-prev, ${t}-next`]: {
                    [`&:focus-visible ${t}-item-link`]: Object.assign({}, ir(e))
                }
            }
        }
    },
    ba = e => Object.assign({
        itemBg: e.colorBgContainer,
        itemSize: e.controlHeight,
        itemSizeSM: e.controlHeightSM,
        itemActiveBg: e.colorBgContainer,
        itemLinkBg: e.colorBgContainer,
        itemActiveColorDisabled: e.colorTextDisabled,
        itemActiveBgDisabled: e.controlItemBgActiveDisabled,
        itemInputBg: e.colorBgContainer,
        miniOptionsSizeChangerTop: 0
    }, ta(e)),
    xa = e => nn(e, {
        inputOutlineOffset: 0,
        paginationMiniOptionsMarginInlineStart: e.calc(e.marginXXS).div(2).equal(),
        paginationMiniQuickJumperInputWidth: e.calc(e.controlHeightLG).mul(1.1).equal(),
        paginationItemPaddingInline: e.calc(e.marginXXS).mul(1.5).equal(),
        paginationEllipsisLetterSpacing: e.calc(e.marginXXS).div(2).equal(),
        paginationSlashMarginInlineStart: e.marginXXS,
        paginationSlashMarginInlineEnd: e.marginSM,
        paginationEllipsisTextIndent: "0.13em"
    }, ea(e)),
    Zs = tn("Pagination", e => {
        const t = xa(e);
        return [Ys(t), Js(t)]
    }, ba),
    Qs = e => {
        const {
            componentCls: t
        } = e;
        return {
            [`${t}${t}-bordered${t}-disabled:not(${t}-mini)`]: {
                "&, &:hover": {
                    [`${t}-item-link`]: {
                        borderColor: e.colorBorder
                    }
                },
                "&:focus-visible": {
                    [`${t}-item-link`]: {
                        borderColor: e.colorBorder
                    }
                },
                [`${t}-item, ${t}-item-link`]: {
                    backgroundColor: e.colorBgContainerDisabled,
                    borderColor: e.colorBorder,
                    [`&:hover:not(${t}-item-active)`]: {
                        backgroundColor: e.colorBgContainerDisabled,
                        borderColor: e.colorBorder,
                        a: {
                            color: e.colorTextDisabled
                        }
                    },
                    [`&${t}-item-active`]: {
                        backgroundColor: e.itemActiveBgDisabled
                    }
                },
                [`${t}-prev, ${t}-next`]: {
                    "&:hover button": {
                        backgroundColor: e.colorBgContainerDisabled,
                        borderColor: e.colorBorder,
                        color: e.colorTextDisabled
                    },
                    [`${t}-item-link`]: {
                        backgroundColor: e.colorBgContainerDisabled,
                        borderColor: e.colorBorder
                    }
                }
            },
            [`${t}${t}-bordered:not(${t}-mini)`]: {
                [`${t}-prev, ${t}-next`]: {
                    "&:hover button": {
                        borderColor: e.colorPrimaryHover,
                        backgroundColor: e.itemBg
                    },
                    [`${t}-item-link`]: {
                        backgroundColor: e.itemLinkBg,
                        borderColor: e.colorBorder
                    },
                    [`&:hover ${t}-item-link`]: {
                        borderColor: e.colorPrimary,
                        backgroundColor: e.itemBg,
                        color: e.colorPrimary
                    },
                    [`&${t}-disabled`]: {
                        [`${t}-item-link`]: {
                            borderColor: e.colorBorder,
                            color: e.colorTextDisabled
                        }
                    }
                },
                [`${t}-item`]: {
                    backgroundColor: e.itemBg,
                    border: `${W(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
                    [`&:hover:not(${t}-item-active)`]: {
                        borderColor: e.colorPrimary,
                        backgroundColor: e.itemBg,
                        a: {
                            color: e.colorPrimary
                        }
                    },
                    "&-active": {
                        borderColor: e.colorPrimary
                    }
                }
            }
        }
    },
    ec = Si(["Pagination", "bordered"], e => {
        const t = xa(e);
        return [Qs(t)]
    }, ba);
var tc = globalThis && globalThis.__rest || function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
};
const nc = e => {
        const {
            prefixCls: t,
            selectPrefixCls: r,
            className: n,
            rootClassName: o,
            style: l,
            size: c,
            locale: a,
            selectComponentClass: s,
            responsive: d,
            showSizeChanger: f
        } = e, u = tc(e, ["prefixCls", "selectPrefixCls", "className", "rootClassName", "style", "size", "locale", "selectComponentClass", "responsive", "showSizeChanger"]), {
            xs: p
        } = oa(d), [, m] = zn(), {
            getPrefixCls: v,
            direction: h,
            pagination: g = {}
        } = i.useContext(tt), b = v("pagination", t), [x, y, w] = Zs(b), S = f ? ? g.showSizeChanger, R = i.useMemo(() => {
            const $ = i.createElement("span", {
                    className: `${b}-item-ellipsis`
                }, "•••"),
                D = i.createElement("button", {
                    className: `${b}-item-link`,
                    type: "button",
                    tabIndex: -1
                }, h === "rtl" ? i.createElement(sr, null) : i.createElement(ro, null)),
                B = i.createElement("button", {
                    className: `${b}-item-link`,
                    type: "button",
                    tabIndex: -1
                }, h === "rtl" ? i.createElement(ro, null) : i.createElement(sr, null)),
                T = i.createElement("a", {
                    className: `${b}-item-link`
                }, i.createElement("div", {
                    className: `${b}-item-container`
                }, h === "rtl" ? i.createElement(so, {
                    className: `${b}-item-link-icon`
                }) : i.createElement(lo, {
                    className: `${b}-item-link-icon`
                }), $)),
                L = i.createElement("a", {
                    className: `${b}-item-link`
                }, i.createElement("div", {
                    className: `${b}-item-container`
                }, h === "rtl" ? i.createElement(lo, {
                    className: `${b}-item-link-icon`
                }) : i.createElement(so, {
                    className: `${b}-item-link-icon`
                }), $));
            return {
                prevIcon: D,
                nextIcon: B,
                jumpPrevIcon: T,
                jumpNextIcon: L
            }
        }, [h, b]), [O] = wi("Pagination", $i), N = Object.assign(Object.assign({}, O), a), C = on(c), P = C === "small" || !!(p && !C && d), M = v("select", r), E = F({
            [`${b}-mini`]: P,
            [`${b}-rtl`]: h === "rtl",
            [`${b}-bordered`]: m.wireframe
        }, g == null ? void 0 : g.className, n, o, y, w), I = Object.assign(Object.assign({}, g == null ? void 0 : g.style), l);
        return x(i.createElement(i.Fragment, null, m.wireframe && i.createElement(ec, {
            prefixCls: b
        }), i.createElement(Vs, Object.assign({}, R, u, {
            style: I,
            prefixCls: b,
            selectPrefixCls: M,
            className: E,
            selectComponentClass: s || (P ? ha : ya),
            locale: N,
            showSizeChanger: S
        }))))
    },
    rc = nc;

function oc(e) {
    let {
        percent: t,
        prefixCls: r
    } = e;
    const n = `${r}-dot`,
        o = `${n}-holder`,
        l = `${o}-hidden`,
        [c, a] = i.useState(!1);
    xt(() => {
        t !== 0 && a(!0)
    }, [t !== 0]);
    const s = Math.max(Math.min(t, 100), 0),
        d = 100,
        f = d / 5,
        u = d / 2 - f / 2,
        p = u * 2 * Math.PI,
        m = (v, h) => i.createElement("circle", {
            className: F(v, `${n}-circle`),
            r: u,
            cx: "50",
            cy: "50",
            strokeWidth: f,
            style: h
        });
    return c ? i.createElement("span", {
        className: F(o, `${n}-progress`, s <= 0 && l)
    }, i.createElement("svg", {
        viewBox: `0 0 ${d} ${d}`,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": s
    }, m(`${n}-circle-bg`), m("", {
        strokeDasharray: `${p*s/100} ${p*(100-s)/100}`,
        strokeDashoffset: `${p/4}`
    }))) : null
}

function ac(e) {
    const {
        prefixCls: t,
        percent: r = 0
    } = e, n = `${t}-dot`, o = `${n}-holder`, l = `${o}-hidden`;
    return i.createElement(i.Fragment, null, i.createElement("span", {
        className: F(o, r > 0 && l)
    }, i.createElement("span", {
        className: F(n, `${t}-dot-spin`)
    }, [1, 2, 3, 4].map(c => i.createElement("i", {
        className: `${t}-dot-item`,
        key: c
    })))), i.createElement(oc, {
        prefixCls: t,
        percent: r
    }))
}

function ic(e) {
    const {
        prefixCls: t,
        indicator: r,
        percent: n
    } = e, o = `${t}-dot`;
    return r && i.isValidElement(r) ? Yt(r, {
        className: F(r.props.className, o),
        percent: n
    }) : i.createElement(ac, {
        prefixCls: t,
        percent: n
    })
}
const lc = new wr("antSpinMove", {
        to: {
            opacity: 1
        }
    }),
    sc = new wr("antRotate", {
        to: {
            transform: "rotate(405deg)"
        }
    }),
    cc = e => {
        const {
            componentCls: t,
            calc: r
        } = e;
        return {
            [`${t}`]: Object.assign(Object.assign({}, rn(e)), {
                position: "absolute",
                display: "none",
                color: e.colorPrimary,
                fontSize: 0,
                textAlign: "center",
                verticalAlign: "middle",
                opacity: 0,
                transition: `transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,
                "&-spinning": {
                    position: "relative",
                    display: "inline-block",
                    opacity: 1
                },
                [`${t}-text`]: {
                    fontSize: e.fontSize,
                    paddingTop: r(r(e.dotSize).sub(e.fontSize)).div(2).add(2).equal()
                },
                "&-fullscreen": {
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: e.colorBgMask,
                    zIndex: e.zIndexPopupBase,
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                    opacity: 0,
                    visibility: "hidden",
                    transition: `all ${e.motionDurationMid}`,
                    "&-show": {
                        opacity: 1,
                        visibility: "visible"
                    },
                    [t]: {
                        [`${t}-dot-holder`]: {
                            color: e.colorWhite
                        },
                        [`${t}-text`]: {
                            color: e.colorTextLightSolid
                        }
                    }
                },
                "&-nested-loading": {
                    position: "relative",
                    [`> div > ${t}`]: {
                        position: "absolute",
                        top: 0,
                        insetInlineStart: 0,
                        zIndex: 4,
                        display: "block",
                        width: "100%",
                        height: "100%",
                        maxHeight: e.contentHeight,
                        [`${t}-dot`]: {
                            position: "absolute",
                            top: "50%",
                            insetInlineStart: "50%",
                            margin: r(e.dotSize).mul(-1).div(2).equal()
                        },
                        [`${t}-text`]: {
                            position: "absolute",
                            top: "50%",
                            width: "100%",
                            textShadow: `0 1px 2px ${e.colorBgContainer}`
                        },
                        [`&${t}-show-text ${t}-dot`]: {
                            marginTop: r(e.dotSize).div(2).mul(-1).sub(10).equal()
                        },
                        "&-sm": {
                            [`${t}-dot`]: {
                                margin: r(e.dotSizeSM).mul(-1).div(2).equal()
                            },
                            [`${t}-text`]: {
                                paddingTop: r(r(e.dotSizeSM).sub(e.fontSize)).div(2).add(2).equal()
                            },
                            [`&${t}-show-text ${t}-dot`]: {
                                marginTop: r(e.dotSizeSM).div(2).mul(-1).sub(10).equal()
                            }
                        },
                        "&-lg": {
                            [`${t}-dot`]: {
                                margin: r(e.dotSizeLG).mul(-1).div(2).equal()
                            },
                            [`${t}-text`]: {
                                paddingTop: r(r(e.dotSizeLG).sub(e.fontSize)).div(2).add(2).equal()
                            },
                            [`&${t}-show-text ${t}-dot`]: {
                                marginTop: r(e.dotSizeLG).div(2).mul(-1).sub(10).equal()
                            }
                        }
                    },
                    [`${t}-container`]: {
                        position: "relative",
                        transition: `opacity ${e.motionDurationSlow}`,
                        "&::after": {
                            position: "absolute",
                            top: 0,
                            insetInlineEnd: 0,
                            bottom: 0,
                            insetInlineStart: 0,
                            zIndex: 10,
                            width: "100%",
                            height: "100%",
                            background: e.colorBgContainer,
                            opacity: 0,
                            transition: `all ${e.motionDurationSlow}`,
                            content: '""',
                            pointerEvents: "none"
                        }
                    },
                    [`${t}-blur`]: {
                        clear: "both",
                        opacity: .5,
                        userSelect: "none",
                        pointerEvents: "none",
                        "&::after": {
                            opacity: .4,
                            pointerEvents: "auto"
                        }
                    }
                },
                "&-tip": {
                    color: e.spinDotDefault
                },
                [`${t}-dot-progress`]: {
                    position: "absolute",
                    top: 0,
                    insetInlineStart: 0
                },
                [`${t}-dot-holder`]: {
                    width: "1em",
                    height: "1em",
                    fontSize: e.dotSize,
                    display: "inline-block",
                    transition: `transform ${e.motionDurationSlow} ease, opacity ${e.motionDurationSlow} ease`,
                    transformOrigin: "50% 50%",
                    lineHeight: 1,
                    color: e.colorPrimary,
                    "&-hidden": {
                        transform: "scale(0.3)",
                        opacity: 0
                    }
                },
                [`${t}-dot-progress`]: {
                    position: "absolute",
                    top: 0,
                    insetInlineStart: 0
                },
                [`${t}-dot`]: {
                    position: "relative",
                    display: "inline-block",
                    fontSize: e.dotSize,
                    width: "1em",
                    height: "1em",
                    "&-item": {
                        position: "absolute",
                        display: "block",
                        width: r(e.dotSize).sub(r(e.marginXXS).div(2)).div(2).equal(),
                        height: r(e.dotSize).sub(r(e.marginXXS).div(2)).div(2).equal(),
                        background: "currentColor",
                        borderRadius: "100%",
                        transform: "scale(0.75)",
                        transformOrigin: "50% 50%",
                        opacity: .3,
                        animationName: lc,
                        animationDuration: "1s",
                        animationIterationCount: "infinite",
                        animationTimingFunction: "linear",
                        animationDirection: "alternate",
                        "&:nth-child(1)": {
                            top: 0,
                            insetInlineStart: 0,
                            animationDelay: "0s"
                        },
                        "&:nth-child(2)": {
                            top: 0,
                            insetInlineEnd: 0,
                            animationDelay: "0.4s"
                        },
                        "&:nth-child(3)": {
                            insetInlineEnd: 0,
                            bottom: 0,
                            animationDelay: "0.8s"
                        },
                        "&:nth-child(4)": {
                            bottom: 0,
                            insetInlineStart: 0,
                            animationDelay: "1.2s"
                        }
                    },
                    "&-spin": {
                        transform: "rotate(45deg)",
                        animationName: sc,
                        animationDuration: "1.2s",
                        animationIterationCount: "infinite",
                        animationTimingFunction: "linear"
                    },
                    "&-circle": {
                        strokeLinecap: "round",
                        transition: ["stroke-dashoffset", "stroke-dasharray", "stroke", "stroke-width", "opacity"].map(n => `${n} ${e.motionDurationSlow} ease`).join(","),
                        fillOpacity: 0,
                        stroke: "currentcolor"
                    },
                    "&-circle-bg": {
                        stroke: e.colorFillSecondary
                    }
                },
                [`&-sm ${t}-dot`]: {
                    fontSize: e.dotSizeSM
                },
                [`&-sm ${t}-dot-holder`]: {
                    i: {
                        width: r(r(e.dotSizeSM).sub(r(e.marginXXS).div(2))).div(2).equal(),
                        height: r(r(e.dotSizeSM).sub(r(e.marginXXS).div(2))).div(2).equal()
                    }
                },
                [`&-lg ${t}-dot`]: {
                    fontSize: e.dotSizeLG
                },
                [`&-lg ${t}-dot-holder`]: {
                    i: {
                        width: r(r(e.dotSizeLG).sub(e.marginXXS)).div(2).equal(),
                        height: r(r(e.dotSizeLG).sub(e.marginXXS)).div(2).equal()
                    }
                },
                [`&${t}-show-text ${t}-text`]: {
                    display: "block"
                }
            })
        }
    },
    dc = e => {
        const {
            controlHeightLG: t,
            controlHeight: r
        } = e;
        return {
            contentHeight: 400,
            dotSize: t / 2,
            dotSizeSM: t * .35,
            dotSizeLG: r
        }
    },
    uc = tn("Spin", e => {
        const t = nn(e, {
            spinDotDefault: e.colorTextDescription
        });
        return [cc(t)]
    }, dc),
    fc = 200,
    fo = [
        [30, .05],
        [70, .03],
        [96, .01]
    ];

function pc(e, t) {
    const [r, n] = i.useState(0), o = i.useRef(), l = t === "auto";
    return i.useEffect(() => (l && e && (n(0), o.current = setInterval(() => {
        n(c => {
            const a = 100 - c;
            for (let s = 0; s < fo.length; s += 1) {
                const [d, f] = fo[s];
                if (c <= d) return c + a * f
            }
            return c
        })
    }, fc)), () => {
        clearInterval(o.current)
    }), [l, e]), l ? r : t
}
var mc = globalThis && globalThis.__rest || function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
};
let Ca;

function vc(e, t) {
    return !!e && !!t && !isNaN(Number(t))
}
const Sa = e => {
    const {
        prefixCls: t,
        spinning: r = !0,
        delay: n = 0,
        className: o,
        rootClassName: l,
        size: c = "default",
        tip: a,
        wrapperClassName: s,
        style: d,
        children: f,
        fullscreen: u = !1,
        indicator: p,
        percent: m
    } = e, v = mc(e, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
        getPrefixCls: h
    } = i.useContext(tt), g = h("spin", t), [b, x, y] = uc(g), [w, S] = i.useState(() => r && !vc(r, n)), R = pc(w, m);
    i.useEffect(() => {
        if (r) {
            const $ = Cl(n, () => {
                S(!0)
            });
            return $(), () => {
                var D;
                (D = $ == null ? void 0 : $.cancel) === null || D === void 0 || D.call($)
            }
        }
        S(!1)
    }, [n, r]);
    const O = i.useMemo(() => typeof f < "u" && !u, [f, u]),
        {
            direction: N,
            spin: C
        } = i.useContext(tt),
        P = F(g, C == null ? void 0 : C.className, {
            [`${g}-sm`]: c === "small",
            [`${g}-lg`]: c === "large",
            [`${g}-spinning`]: w,
            [`${g}-show-text`]: !!a,
            [`${g}-rtl`]: N === "rtl"
        }, o, !u && l, x, y),
        M = F(`${g}-container`, {
            [`${g}-blur`]: w
        }),
        E = Object.assign(Object.assign({}, C == null ? void 0 : C.style), d),
        I = i.createElement("div", Object.assign({}, v, {
            style: E,
            className: P,
            "aria-live": "polite",
            "aria-busy": w
        }), i.createElement(ic, {
            prefixCls: g,
            indicator: p ? ? Ca,
            percent: R
        }), a && (O || u) ? i.createElement("div", {
            className: `${g}-text`
        }, a) : null);
    return b(O ? i.createElement("div", Object.assign({}, v, {
        className: F(`${g}-nested-loading`, s, x, y)
    }), w && i.createElement("div", {
        key: "loading"
    }, I), i.createElement("div", {
        className: M,
        key: "container"
    }, f)) : u ? i.createElement("div", {
        className: F(`${g}-fullscreen`, {
            [`${g}-fullscreen-show`]: w
        }, l, x, y)
    }, I) : I)
};
Sa.setDefaultIndicator = e => {
    Ca = e
};
const gc = Sa;
var It = {},
    Sn = "rc-table-internal-hook";

function Rr(e) {
    var t = i.createContext(void 0),
        r = function(o) {
            var l = o.value,
                c = o.children,
                a = i.useRef(l);
            a.current = l;
            var s = i.useState(function() {
                    return {
                        getValue: function() {
                            return a.current
                        },
                        listeners: new Set
                    }
                }),
                d = ve(s, 1),
                f = d[0];
            return xt(function() {
                Ei.unstable_batchedUpdates(function() {
                    f.listeners.forEach(function(u) {
                        u(l)
                    })
                })
            }, [l]), i.createElement(t.Provider, {
                value: f
            }, c)
        };
    return {
        Context: t,
        Provider: r,
        defaultValue: e
    }
}

function nt(e, t) {
    var r = yt(typeof t == "function" ? t : function(u) {
            if (t === void 0) return u;
            if (!Array.isArray(t)) return u[t];
            var p = {};
            return t.forEach(function(m) {
                p[m] = u[m]
            }), p
        }),
        n = i.useContext(e == null ? void 0 : e.Context),
        o = n || {},
        l = o.listeners,
        c = o.getValue,
        a = i.useRef();
    a.current = r(n ? c() : e == null ? void 0 : e.defaultValue);
    var s = i.useState({}),
        d = ve(s, 2),
        f = d[1];
    return xt(function() {
        if (!n) return;

        function u(p) {
            var m = r(p);
            hn(a.current, m, !0) || f({})
        }
        return l.add(u),
            function() {
                l.delete(u)
            }
    }, [n]), a.current
}

function hc() {
    var e = i.createContext(null);

    function t() {
        return i.useContext(e)
    }

    function r(o, l) {
        var c = Pn(o),
            a = function(d, f) {
                var u = c ? {
                        ref: f
                    } : {},
                    p = i.useRef(0),
                    m = i.useRef(d),
                    v = t();
                return v !== null ? i.createElement(o, de({}, d, u)) : ((!l || l(m.current, d)) && (p.current += 1), m.current = d, i.createElement(e.Provider, {
                    value: p.current
                }, i.createElement(o, de({}, d, u))))
            };
        return c ? i.forwardRef(a) : a
    }

    function n(o, l) {
        var c = Pn(o),
            a = function(d, f) {
                var u = c ? {
                    ref: f
                } : {};
                return t(), i.createElement(o, de({}, d, u))
            };
        return c ? i.memo(i.forwardRef(a), l) : i.memo(a, l)
    }
    return {
        makeImmutable: r,
        responseImmutable: n,
        useImmutableMark: t
    }
}
var Ir = hc(),
    wa = Ir.makeImmutable,
    ln = Ir.responseImmutable,
    yc = Ir.useImmutableMark,
    st = Rr(),
    $a = i.createContext({
        renderWithProps: !1
    }),
    bc = "RC_TABLE_KEY";

function xc(e) {
    return e == null ? [] : Array.isArray(e) ? e : [e]
}

function _n(e) {
    var t = [],
        r = {};
    return e.forEach(function(n) {
        for (var o = n || {}, l = o.key, c = o.dataIndex, a = l || xc(c).join("-") || bc; r[a];) a = "".concat(a, "_next");
        r[a] = !0, t.push(a)
    }), t
}

function cr(e) {
    return e != null
}

function Cc(e) {
    return e && vt(e) === "object" && !Array.isArray(e) && !i.isValidElement(e)
}

function Sc(e, t, r, n, o, l) {
    var c = i.useContext($a),
        a = yc(),
        s = Xo(function() {
            if (cr(n)) return [n];
            var d = t == null || t === "" ? [] : Array.isArray(t) ? t : [t],
                f = $r(e, d),
                u = f,
                p = void 0;
            if (o) {
                var m = o(f, e, r);
                Cc(m) ? (u = m.children, p = m.props, c.renderWithProps = !0) : u = m
            }
            return [u, p]
        }, [a, e, n, t, o, r], function(d, f) {
            if (l) {
                var u = ve(d, 2),
                    p = u[1],
                    m = ve(f, 2),
                    v = m[1];
                return l(v, p)
            }
            return c.renderWithProps ? !0 : !hn(d, f, !0)
        });
    return s
}

function wc(e, t, r, n) {
    var o = e + t - 1;
    return e <= n && o >= r
}

function $c(e, t) {
    return nt(st, function(r) {
        var n = wc(e, t || 1, r.hoverStartRow, r.hoverEndRow);
        return [n, r.onHover]
    })
}
var Ec = function(t) {
    var r = t.ellipsis,
        n = t.rowType,
        o = t.children,
        l, c = r === !0 ? {
            showTitle: !0
        } : r;
    return c && (c.showTitle || n === "header") && (typeof o == "string" || typeof o == "number" ? l = o.toString() : i.isValidElement(o) && typeof o.props.children == "string" && (l = o.props.children)), l
};

function Nc(e) {
    var t, r, n, o, l, c, a, s, d = e.component,
        f = e.children,
        u = e.ellipsis,
        p = e.scope,
        m = e.prefixCls,
        v = e.className,
        h = e.align,
        g = e.record,
        b = e.render,
        x = e.dataIndex,
        y = e.renderIndex,
        w = e.shouldCellUpdate,
        S = e.index,
        R = e.rowType,
        O = e.colSpan,
        N = e.rowSpan,
        C = e.fixLeft,
        P = e.fixRight,
        M = e.firstFixLeft,
        E = e.lastFixLeft,
        I = e.firstFixRight,
        $ = e.lastFixRight,
        D = e.appendNode,
        B = e.additionalProps,
        T = B === void 0 ? {} : B,
        L = e.isSticky,
        _ = "".concat(m, "-cell"),
        z = nt(st, ["supportSticky", "allColumnsFixedLeft", "rowHoverable"]),
        k = z.supportSticky,
        A = z.allColumnsFixedLeft,
        j = z.rowHoverable,
        ae = Sc(g, x, y, f, b, w),
        Q = ve(ae, 2),
        re = Q[0],
        te = Q[1],
        se = {},
        le = typeof C == "number" && k,
        fe = typeof P == "number" && k;
    le && (se.position = "sticky", se.left = C), fe && (se.position = "sticky", se.right = P);
    var ne = (t = (r = (n = te == null ? void 0 : te.colSpan) !== null && n !== void 0 ? n : T.colSpan) !== null && r !== void 0 ? r : O) !== null && t !== void 0 ? t : 1,
        q = (o = (l = (c = te == null ? void 0 : te.rowSpan) !== null && c !== void 0 ? c : T.rowSpan) !== null && l !== void 0 ? l : N) !== null && o !== void 0 ? o : 1,
        U = $c(S, q),
        G = ve(U, 2),
        H = G[0],
        ge = G[1],
        V = yt(function(xe) {
            var Ee;
            g && ge(S, S + q - 1), T == null || (Ee = T.onMouseEnter) === null || Ee === void 0 || Ee.call(T, xe)
        }),
        ce = yt(function(xe) {
            var Ee;
            g && ge(-1, -1), T == null || (Ee = T.onMouseLeave) === null || Ee === void 0 || Ee.call(T, xe)
        });
    if (ne === 0 || q === 0) return null;
    var Ce = (a = T.title) !== null && a !== void 0 ? a : Ec({
            rowType: R,
            ellipsis: u,
            children: re
        }),
        ee = F(_, v, (s = {}, K(s, "".concat(_, "-fix-left"), le && k), K(s, "".concat(_, "-fix-left-first"), M && k), K(s, "".concat(_, "-fix-left-last"), E && k), K(s, "".concat(_, "-fix-left-all"), E && A && k), K(s, "".concat(_, "-fix-right"), fe && k), K(s, "".concat(_, "-fix-right-first"), I && k), K(s, "".concat(_, "-fix-right-last"), $ && k), K(s, "".concat(_, "-ellipsis"), u), K(s, "".concat(_, "-with-append"), D), K(s, "".concat(_, "-fix-sticky"), (le || fe) && L && k), K(s, "".concat(_, "-row-hover"), !te && H), s), T.className, te == null ? void 0 : te.className),
        ie = {};
    h && (ie.textAlign = h);
    var pe = X(X(X(X({}, se), T.style), ie), te == null ? void 0 : te.style),
        oe = re;
    return vt(oe) === "object" && !Array.isArray(oe) && !i.isValidElement(oe) && (oe = null), u && (E || I) && (oe = i.createElement("span", {
        className: "".concat(_, "-content")
    }, oe)), i.createElement(d, de({}, te, T, {
        className: ee,
        style: pe,
        title: Ce,
        scope: p,
        onMouseEnter: j ? V : void 0,
        onMouseLeave: j ? ce : void 0,
        colSpan: ne !== 1 ? ne : null,
        rowSpan: q !== 1 ? q : null
    }), D, oe)
}
const Ft = i.memo(Nc);

function Pr(e, t, r, n, o) {
    var l = r[e] || {},
        c = r[t] || {},
        a, s;
    l.fixed === "left" ? a = n.left[o === "rtl" ? t : e] : c.fixed === "right" && (s = n.right[o === "rtl" ? e : t]);
    var d = !1,
        f = !1,
        u = !1,
        p = !1,
        m = r[t + 1],
        v = r[e - 1],
        h = m && !m.fixed || v && !v.fixed || r.every(function(w) {
            return w.fixed === "left"
        });
    if (o === "rtl") {
        if (a !== void 0) {
            var g = v && v.fixed === "left";
            p = !g && h
        } else if (s !== void 0) {
            var b = m && m.fixed === "right";
            u = !b && h
        }
    } else if (a !== void 0) {
        var x = m && m.fixed === "left";
        d = !x && h
    } else if (s !== void 0) {
        var y = v && v.fixed === "right";
        f = !y && h
    }
    return {
        fixLeft: a,
        fixRight: s,
        lastFixLeft: d,
        firstFixRight: f,
        lastFixRight: u,
        firstFixLeft: p,
        isSticky: n.isSticky
    }
}
var Ea = i.createContext({});

function Oc(e) {
    var t = e.className,
        r = e.index,
        n = e.children,
        o = e.colSpan,
        l = o === void 0 ? 1 : o,
        c = e.rowSpan,
        a = e.align,
        s = nt(st, ["prefixCls", "direction"]),
        d = s.prefixCls,
        f = s.direction,
        u = i.useContext(Ea),
        p = u.scrollColumnIndex,
        m = u.stickyOffsets,
        v = u.flattenColumns,
        h = r + l - 1,
        g = h + 1 === p ? l + 1 : l,
        b = Pr(r, r + g - 1, v, m, f);
    return i.createElement(Ft, de({
        className: t,
        index: r,
        component: "td",
        prefixCls: d,
        record: null,
        dataIndex: null,
        align: a,
        colSpan: g,
        rowSpan: c,
        render: function() {
            return n
        }
    }, b))
}
var Rc = ["children"];

function Ic(e) {
    var t = e.children,
        r = ot(e, Rc);
    return i.createElement("tr", r, t)
}

function jn(e) {
    var t = e.children;
    return t
}
jn.Row = Ic;
jn.Cell = Oc;

function Pc(e) {
    var t = e.children,
        r = e.stickyOffsets,
        n = e.flattenColumns,
        o = nt(st, "prefixCls"),
        l = n.length - 1,
        c = n[l],
        a = i.useMemo(function() {
            return {
                stickyOffsets: r,
                flattenColumns: n,
                scrollColumnIndex: c != null && c.scrollbar ? l : null
            }
        }, [c, n, l, r]);
    return i.createElement(Ea.Provider, {
        value: a
    }, i.createElement("tfoot", {
        className: "".concat(o, "-summary")
    }, t))
}
const Rn = ln(Pc);
var Na = jn;

function Tc(e) {
    return null
}

function kc(e) {
    return null
}

function Oa(e, t, r, n, o, l, c) {
    e.push({
        record: t,
        indent: r,
        index: c
    });
    var a = l(t),
        s = o == null ? void 0 : o.has(a);
    if (t && Array.isArray(t[n]) && s)
        for (var d = 0; d < t[n].length; d += 1) Oa(e, t[n][d], r + 1, n, o, l, d)
}

function Ra(e, t, r, n) {
    var o = i.useMemo(function() {
        if (r != null && r.size) {
            for (var l = [], c = 0; c < (e == null ? void 0 : e.length); c += 1) {
                var a = e[c];
                Oa(l, a, 0, t, r, n, c)
            }
            return l
        }
        return e == null ? void 0 : e.map(function(s, d) {
            return {
                record: s,
                indent: 0,
                index: d
            }
        })
    }, [e, t, r, n]);
    return o
}

function Ia(e, t, r, n) {
    var o = nt(st, ["prefixCls", "fixedInfoList", "flattenColumns", "expandableType", "expandRowByClick", "onTriggerExpand", "rowClassName", "expandedRowClassName", "indentSize", "expandIcon", "expandedRowRender", "expandIconColumnIndex", "expandedKeys", "childrenColumnName", "rowExpandable", "onRow"]),
        l = o.flattenColumns,
        c = o.expandableType,
        a = o.expandedKeys,
        s = o.childrenColumnName,
        d = o.onTriggerExpand,
        f = o.rowExpandable,
        u = o.onRow,
        p = o.expandRowByClick,
        m = o.rowClassName,
        v = c === "nest",
        h = c === "row" && (!f || f(e)),
        g = h || v,
        b = a && a.has(t),
        x = s && e && e[s],
        y = yt(d),
        w = u == null ? void 0 : u(e, r),
        S = w == null ? void 0 : w.onClick,
        R = function(P) {
            p && g && d(e, P);
            for (var M = arguments.length, E = new Array(M > 1 ? M - 1 : 0), I = 1; I < M; I++) E[I - 1] = arguments[I];
            S == null || S.apply(void 0, [P].concat(E))
        },
        O;
    typeof m == "string" ? O = m : typeof m == "function" && (O = m(e, r, n));
    var N = _n(l);
    return X(X({}, o), {}, {
        columnsKey: N,
        nestExpandable: v,
        expanded: b,
        hasNestChildren: x,
        record: e,
        onTriggerExpand: y,
        rowSupportExpand: h,
        expandable: g,
        rowProps: X(X({}, w), {}, {
            className: F(O, w == null ? void 0 : w.className),
            onClick: R
        })
    })
}

function Pa(e) {
    var t = e.prefixCls,
        r = e.children,
        n = e.component,
        o = e.cellComponent,
        l = e.className,
        c = e.expanded,
        a = e.colSpan,
        s = e.isEmpty,
        d = nt(st, ["scrollbarSize", "fixHeader", "fixColumn", "componentWidth", "horizonScroll"]),
        f = d.scrollbarSize,
        u = d.fixHeader,
        p = d.fixColumn,
        m = d.componentWidth,
        v = d.horizonScroll,
        h = r;
    return (s ? v && m : p) && (h = i.createElement("div", {
        style: {
            width: m - (u ? f : 0),
            position: "sticky",
            left: 0,
            overflow: "hidden"
        },
        className: "".concat(t, "-expanded-row-fixed")
    }, h)), i.createElement(n, {
        className: l,
        style: {
            display: c ? null : "none"
        }
    }, i.createElement(Ft, {
        component: o,
        prefixCls: t,
        colSpan: a
    }, h))
}

function Ta(e, t, r, n, o) {
    var l = e.record,
        c = e.prefixCls,
        a = e.columnsKey,
        s = e.fixedInfoList,
        d = e.expandIconColumnIndex,
        f = e.nestExpandable,
        u = e.indentSize,
        p = e.expandIcon,
        m = e.expanded,
        v = e.hasNestChildren,
        h = e.onTriggerExpand,
        g = a[r],
        b = s[r],
        x;
    r === (d || 0) && f && (x = i.createElement(i.Fragment, null, i.createElement("span", {
        style: {
            paddingLeft: "".concat(u * n, "px")
        },
        className: "".concat(c, "-row-indent indent-level-").concat(n)
    }), p({
        prefixCls: c,
        expanded: m,
        expandable: v,
        record: l,
        onExpand: h
    })));
    var y;
    return t.onCell && (y = t.onCell(l, o)), {
        key: g,
        fixedInfo: b,
        appendCellNode: x,
        additionalCellProps: y || {}
    }
}

function Kc(e) {
    var t = e.className,
        r = e.style,
        n = e.record,
        o = e.index,
        l = e.renderIndex,
        c = e.rowKey,
        a = e.indent,
        s = a === void 0 ? 0 : a,
        d = e.rowComponent,
        f = e.cellComponent,
        u = e.scopeCellComponent,
        p = Ia(n, c, o, s),
        m = p.prefixCls,
        v = p.flattenColumns,
        h = p.expandedRowClassName,
        g = p.expandedRowRender,
        b = p.rowProps,
        x = p.expanded,
        y = p.rowSupportExpand,
        w = i.useRef(!1);
    w.current || (w.current = x);
    var S = h && h(n, o, s),
        R = i.createElement(d, de({}, b, {
            "data-row-key": c,
            className: F(t, "".concat(m, "-row"), "".concat(m, "-row-level-").concat(s), b == null ? void 0 : b.className, s >= 1 ? S : ""),
            style: X(X({}, r), b == null ? void 0 : b.style)
        }), v.map(function(C, P) {
            var M = C.render,
                E = C.dataIndex,
                I = C.className,
                $ = Ta(p, C, P, s, o),
                D = $.key,
                B = $.fixedInfo,
                T = $.appendCellNode,
                L = $.additionalCellProps;
            return i.createElement(Ft, de({
                className: I,
                ellipsis: C.ellipsis,
                align: C.align,
                scope: C.rowScope,
                component: C.rowScope ? u : f,
                prefixCls: m,
                key: D,
                record: n,
                index: o,
                renderIndex: l,
                dataIndex: E,
                render: M,
                shouldCellUpdate: C.shouldCellUpdate
            }, B, {
                appendNode: T,
                additionalProps: L
            }))
        })),
        O;
    if (y && (w.current || x)) {
        var N = g(n, o, s + 1, x);
        O = i.createElement(Pa, {
            expanded: x,
            className: F("".concat(m, "-expanded-row"), "".concat(m, "-expanded-row-level-").concat(s + 1), S),
            prefixCls: m,
            component: d,
            cellComponent: f,
            colSpan: v.length,
            isEmpty: !1
        }, N)
    }
    return i.createElement(i.Fragment, null, R, O)
}
const Dc = ln(Kc);

function zc(e) {
    var t = e.columnKey,
        r = e.onColumnResize,
        n = i.useRef();
    return i.useEffect(function() {
        n.current && r(t, n.current.offsetWidth)
    }, []), i.createElement(Mn, {
        data: t
    }, i.createElement("td", {
        ref: n,
        style: {
            padding: 0,
            border: 0,
            height: 0
        }
    }, i.createElement("div", {
        style: {
            height: 0,
            overflow: "hidden"
        }
    }, " ")))
}

function Mc(e) {
    var t = e.prefixCls,
        r = e.columnsKey,
        n = e.onColumnResize;
    return i.createElement("tr", {
        "aria-hidden": "true",
        className: "".concat(t, "-measure-row"),
        style: {
            height: 0,
            fontSize: 0
        }
    }, i.createElement(Mn.Collection, {
        onBatchResize: function(l) {
            l.forEach(function(c) {
                var a = c.data,
                    s = c.size;
                n(a, s.offsetWidth)
            })
        }
    }, r.map(function(o) {
        return i.createElement(zc, {
            key: o,
            columnKey: o,
            onColumnResize: n
        })
    })))
}

function Bc(e) {
    var t = e.data,
        r = e.measureColumnWidth,
        n = nt(st, ["prefixCls", "getComponent", "onColumnResize", "flattenColumns", "getRowKey", "expandedKeys", "childrenColumnName", "emptyNode"]),
        o = n.prefixCls,
        l = n.getComponent,
        c = n.onColumnResize,
        a = n.flattenColumns,
        s = n.getRowKey,
        d = n.expandedKeys,
        f = n.childrenColumnName,
        u = n.emptyNode,
        p = Ra(t, f, d, s),
        m = i.useRef({
            renderWithProps: !1
        }),
        v = l(["body", "wrapper"], "tbody"),
        h = l(["body", "row"], "tr"),
        g = l(["body", "cell"], "td"),
        b = l(["body", "cell"], "th"),
        x;
    t.length ? x = p.map(function(w, S) {
        var R = w.record,
            O = w.indent,
            N = w.index,
            C = s(R, S);
        return i.createElement(Dc, {
            key: C,
            rowKey: C,
            record: R,
            index: S,
            renderIndex: N,
            rowComponent: h,
            cellComponent: g,
            scopeCellComponent: b,
            getRowKey: s,
            indent: O
        })
    }) : x = i.createElement(Pa, {
        expanded: !0,
        className: "".concat(o, "-placeholder"),
        prefixCls: o,
        component: h,
        cellComponent: g,
        colSpan: a.length,
        isEmpty: !0
    }, u);
    var y = _n(a);
    return i.createElement($a.Provider, {
        value: m.current
    }, i.createElement(v, {
        className: "".concat(o, "-tbody")
    }, r && i.createElement(Mc, {
        prefixCls: o,
        columnsKey: y,
        onColumnResize: c
    }), x))
}
const Lc = ln(Bc);
var _c = ["expandable"],
    vn = "RC_TABLE_INTERNAL_COL_DEFINE";

function jc(e) {
    var t = e.expandable,
        r = ot(e, _c),
        n;
    return "expandable" in e ? n = X(X({}, r), t) : n = r, n.showExpandColumn === !1 && (n.expandIconColumnIndex = -1), n
}
var Ac = ["columnType"];

function ka(e) {
    for (var t = e.colWidths, r = e.columns, n = e.columCount, o = [], l = n || r.length, c = !1, a = l - 1; a >= 0; a -= 1) {
        var s = t[a],
            d = r && r[a],
            f = d && d[vn];
        if (s || f || c) {
            var u = f || {};
            u.columnType;
            var p = ot(u, Ac);
            o.unshift(i.createElement("col", de({
                key: a,
                style: {
                    width: s
                }
            }, p))), c = !0
        }
    }
    return i.createElement("colgroup", null, o)
}
var Hc = ["className", "noData", "columns", "flattenColumns", "colWidths", "columCount", "stickyOffsets", "direction", "fixHeader", "stickyTopOffset", "stickyBottomOffset", "stickyClassName", "onScroll", "maxContentScroll", "children"];

function Fc(e, t) {
    return i.useMemo(function() {
        for (var r = [], n = 0; n < t; n += 1) {
            var o = e[n];
            if (o !== void 0) r[n] = o;
            else return null
        }
        return r
    }, [e.join("_"), t])
}
var Vc = i.forwardRef(function(e, t) {
    var r = e.className,
        n = e.noData,
        o = e.columns,
        l = e.flattenColumns,
        c = e.colWidths,
        a = e.columCount,
        s = e.stickyOffsets,
        d = e.direction,
        f = e.fixHeader,
        u = e.stickyTopOffset,
        p = e.stickyBottomOffset,
        m = e.stickyClassName,
        v = e.onScroll,
        h = e.maxContentScroll,
        g = e.children,
        b = ot(e, Hc),
        x = nt(st, ["prefixCls", "scrollbarSize", "isSticky", "getComponent"]),
        y = x.prefixCls,
        w = x.scrollbarSize,
        S = x.isSticky,
        R = x.getComponent,
        O = R(["header", "table"], "table"),
        N = S && !f ? 0 : w,
        C = i.useRef(null),
        P = i.useCallback(function(L) {
            Jr(t, L), Jr(C, L)
        }, []);
    i.useEffect(function() {
        var L;

        function _(z) {
            var k = z,
                A = k.currentTarget,
                j = k.deltaX;
            j && (v({
                currentTarget: A,
                scrollLeft: A.scrollLeft + j
            }), z.preventDefault())
        }
        return (L = C.current) === null || L === void 0 || L.addEventListener("wheel", _, {
                passive: !1
            }),
            function() {
                var z;
                (z = C.current) === null || z === void 0 || z.removeEventListener("wheel", _)
            }
    }, []);
    var M = i.useMemo(function() {
            return l.every(function(L) {
                return L.width
            })
        }, [l]),
        E = l[l.length - 1],
        I = {
            fixed: E ? E.fixed : null,
            scrollbar: !0,
            onHeaderCell: function() {
                return {
                    className: "".concat(y, "-cell-scrollbar")
                }
            }
        },
        $ = i.useMemo(function() {
            return N ? [].concat($e(o), [I]) : o
        }, [N, o]),
        D = i.useMemo(function() {
            return N ? [].concat($e(l), [I]) : l
        }, [N, l]),
        B = i.useMemo(function() {
            var L = s.right,
                _ = s.left;
            return X(X({}, s), {}, {
                left: d === "rtl" ? [].concat($e(_.map(function(z) {
                    return z + N
                })), [0]) : _,
                right: d === "rtl" ? L : [].concat($e(L.map(function(z) {
                    return z + N
                })), [0]),
                isSticky: S
            })
        }, [N, s, S]),
        T = Fc(c, a);
    return i.createElement("div", {
        style: X({
            overflow: "hidden"
        }, S ? {
            top: u,
            bottom: p
        } : {}),
        ref: P,
        className: F(r, K({}, m, !!m))
    }, i.createElement(O, {
        style: {
            tableLayout: "fixed",
            visibility: n || T ? null : "hidden"
        }
    }, (!n || !h || M) && i.createElement(ka, {
        colWidths: T ? [].concat($e(T), [N]) : [],
        columCount: a + 1,
        columns: D
    }), g(X(X({}, b), {}, {
        stickyOffsets: B,
        columns: $,
        flattenColumns: D
    }))))
});
const po = i.memo(Vc);
var Wc = function(t) {
    var r = t.cells,
        n = t.stickyOffsets,
        o = t.flattenColumns,
        l = t.rowComponent,
        c = t.cellComponent,
        a = t.onHeaderRow,
        s = t.index,
        d = nt(st, ["prefixCls", "direction"]),
        f = d.prefixCls,
        u = d.direction,
        p;
    a && (p = a(r.map(function(v) {
        return v.column
    }), s));
    var m = _n(r.map(function(v) {
        return v.column
    }));
    return i.createElement(l, p, r.map(function(v, h) {
        var g = v.column,
            b = Pr(v.colStart, v.colEnd, o, n, u),
            x;
        return g && g.onHeaderCell && (x = v.column.onHeaderCell(g)), i.createElement(Ft, de({}, v, {
            scope: g.title ? v.colSpan > 1 ? "colgroup" : "col" : null,
            ellipsis: g.ellipsis,
            align: g.align,
            component: c,
            prefixCls: f,
            key: m[h]
        }, b, {
            additionalProps: x,
            rowType: "header"
        }))
    }))
};

function Xc(e) {
    var t = [];

    function r(c, a) {
        var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        t[s] = t[s] || [];
        var d = a,
            f = c.filter(Boolean).map(function(u) {
                var p = {
                        key: u.key,
                        className: u.className || "",
                        children: u.title,
                        column: u,
                        colStart: d
                    },
                    m = 1,
                    v = u.children;
                return v && v.length > 0 && (m = r(v, d, s + 1).reduce(function(h, g) {
                    return h + g
                }, 0), p.hasSubColumns = !0), "colSpan" in u && (m = u.colSpan), "rowSpan" in u && (p.rowSpan = u.rowSpan), p.colSpan = m, p.colEnd = p.colStart + m - 1, t[s].push(p), d += m, m
            });
        return f
    }
    r(e, 0);
    for (var n = t.length, o = function(a) {
            t[a].forEach(function(s) {
                !("rowSpan" in s) && !s.hasSubColumns && (s.rowSpan = n - a)
            })
        }, l = 0; l < n; l += 1) o(l);
    return t
}
var qc = function(t) {
    var r = t.stickyOffsets,
        n = t.columns,
        o = t.flattenColumns,
        l = t.onHeaderRow,
        c = nt(st, ["prefixCls", "getComponent"]),
        a = c.prefixCls,
        s = c.getComponent,
        d = i.useMemo(function() {
            return Xc(n)
        }, [n]),
        f = s(["header", "wrapper"], "thead"),
        u = s(["header", "row"], "tr"),
        p = s(["header", "cell"], "th");
    return i.createElement(f, {
        className: "".concat(a, "-thead")
    }, d.map(function(m, v) {
        var h = i.createElement(Wc, {
            key: v,
            flattenColumns: o,
            cells: m,
            stickyOffsets: r,
            rowComponent: u,
            cellComponent: p,
            onHeaderRow: l,
            index: v
        });
        return h
    }))
};
const mo = ln(qc);

function vo(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return typeof t == "number" ? t : t.endsWith("%") ? e * parseFloat(t) / 100 : null
}

function Uc(e, t, r) {
    return i.useMemo(function() {
        if (t && t > 0) {
            var n = 0,
                o = 0;
            e.forEach(function(p) {
                var m = vo(t, p.width);
                m ? n += m : o += 1
            });
            var l = Math.max(t, r),
                c = Math.max(l - n, o),
                a = o,
                s = c / o,
                d = 0,
                f = e.map(function(p) {
                    var m = X({}, p),
                        v = vo(t, m.width);
                    if (v) m.width = v;
                    else {
                        var h = Math.floor(s);
                        m.width = a === 1 ? c : h, c -= h, a -= 1
                    }
                    return d += m.width, m
                });
            if (d < l) {
                var u = l / d;
                c = l, f.forEach(function(p, m) {
                    var v = Math.floor(p.width * u);
                    p.width = m === f.length - 1 ? c : v, c -= v
                })
            }
            return [f, Math.max(d, l)]
        }
        return [e, t]
    }, [e, t, r])
}
var Gc = ["children"],
    Yc = ["fixed"];

function Tr(e) {
    return xr(e).filter(function(t) {
        return i.isValidElement(t)
    }).map(function(t) {
        var r = t.key,
            n = t.props,
            o = n.children,
            l = ot(n, Gc),
            c = X({
                key: r
            }, l);
        return o && (c.children = Tr(o)), c
    })
}

function Ka(e) {
    return e.filter(function(t) {
        return t && vt(t) === "object" && !t.hidden
    }).map(function(t) {
        var r = t.children;
        return r && r.length > 0 ? X(X({}, t), {}, {
            children: Ka(r)
        }) : t
    })
}

function dr(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "key";
    return e.filter(function(r) {
        return r && vt(r) === "object"
    }).reduce(function(r, n, o) {
        var l = n.fixed,
            c = l === !0 ? "left" : l,
            a = "".concat(t, "-").concat(o),
            s = n.children;
        return s && s.length > 0 ? [].concat($e(r), $e(dr(s, a).map(function(d) {
            return X({
                fixed: c
            }, d)
        }))) : [].concat($e(r), [X(X({
            key: a
        }, n), {}, {
            fixed: c
        })])
    }, [])
}

function Jc(e) {
    return e.map(function(t) {
        var r = t.fixed,
            n = ot(t, Yc),
            o = r;
        return r === "left" ? o = "right" : r === "right" && (o = "left"), X({
            fixed: o
        }, n)
    })
}

function Zc(e, t) {
    var r = e.prefixCls,
        n = e.columns,
        o = e.children,
        l = e.expandable,
        c = e.expandedKeys,
        a = e.columnTitle,
        s = e.getRowKey,
        d = e.onTriggerExpand,
        f = e.expandIcon,
        u = e.rowExpandable,
        p = e.expandIconColumnIndex,
        m = e.direction,
        v = e.expandRowByClick,
        h = e.columnWidth,
        g = e.fixed,
        b = e.scrollWidth,
        x = e.clientWidth,
        y = i.useMemo(function() {
            var E = n || Tr(o) || [];
            return Ka(E.slice())
        }, [n, o]),
        w = i.useMemo(function() {
            if (l) {
                var E, I = y.slice();
                if (!I.includes(It)) {
                    var $ = p || 0;
                    $ >= 0 && I.splice($, 0, It)
                }
                var D = I.indexOf(It);
                I = I.filter(function(_, z) {
                    return _ !== It || z === D
                });
                var B = y[D],
                    T;
                (g === "left" || g) && !p ? T = "left" : (g === "right" || g) && p === y.length ? T = "right" : T = B ? B.fixed : null;
                var L = (E = {}, K(E, vn, {
                    className: "".concat(r, "-expand-icon-col"),
                    columnType: "EXPAND_COLUMN"
                }), K(E, "title", a), K(E, "fixed", T), K(E, "className", "".concat(r, "-row-expand-icon-cell")), K(E, "width", h), K(E, "render", function(z, k, A) {
                    var j = s(k, A),
                        ae = c.has(j),
                        Q = u ? u(k) : !0,
                        re = f({
                            prefixCls: r,
                            expanded: ae,
                            expandable: Q,
                            record: k,
                            onExpand: d
                        });
                    return v ? i.createElement("span", {
                        onClick: function(se) {
                            return se.stopPropagation()
                        }
                    }, re) : re
                }), E);
                return I.map(function(_) {
                    return _ === It ? L : _
                })
            }
            return y.filter(function(_) {
                return _ !== It
            })
        }, [l, y, s, c, f, m]),
        S = i.useMemo(function() {
            var E = w;
            return t && (E = t(E)), E.length || (E = [{
                render: function() {
                    return null
                }
            }]), E
        }, [t, w, m]),
        R = i.useMemo(function() {
            return m === "rtl" ? Jc(dr(S)) : dr(S)
        }, [S, m, b]),
        O = i.useMemo(function() {
            for (var E = -1, I = R.length - 1; I >= 0; I -= 1) {
                var $ = R[I].fixed;
                if ($ === "left" || $ === !0) {
                    E = I;
                    break
                }
            }
            if (E >= 0)
                for (var D = 0; D <= E; D += 1) {
                    var B = R[D].fixed;
                    if (B !== "left" && B !== !0) return !0
                }
            var T = R.findIndex(function(z) {
                var k = z.fixed;
                return k === "right"
            });
            if (T >= 0)
                for (var L = T; L < R.length; L += 1) {
                    var _ = R[L].fixed;
                    if (_ !== "right") return !0
                }
            return !1
        }, [R]),
        N = Uc(R, b, x),
        C = ve(N, 2),
        P = C[0],
        M = C[1];
    return [S, P, M, O]
}

function Qc(e) {
    var t, r = e.prefixCls,
        n = e.record,
        o = e.onExpand,
        l = e.expanded,
        c = e.expandable,
        a = "".concat(r, "-row-expand-icon");
    if (!c) return i.createElement("span", {
        className: F(a, "".concat(r, "-row-spaced"))
    });
    var s = function(f) {
        o(n, f), f.stopPropagation()
    };
    return i.createElement("span", {
        className: F(a, (t = {}, K(t, "".concat(r, "-row-expanded"), l), K(t, "".concat(r, "-row-collapsed"), !l), t)),
        onClick: s
    })
}

function ed(e, t, r) {
    var n = [];

    function o(l) {
        (l || []).forEach(function(c, a) {
            n.push(t(c, a)), o(c[r])
        })
    }
    return o(e), n
}

function td(e, t, r) {
    var n = jc(e),
        o = n.expandIcon,
        l = n.expandedRowKeys,
        c = n.defaultExpandedRowKeys,
        a = n.defaultExpandAllRows,
        s = n.expandedRowRender,
        d = n.onExpand,
        f = n.onExpandedRowsChange,
        u = n.childrenColumnName,
        p = o || Qc,
        m = u || "children",
        v = i.useMemo(function() {
            return s ? "row" : e.expandable && e.internalHooks === Sn && e.expandable.__PARENT_RENDER_ICON__ || t.some(function(S) {
                return S && vt(S) === "object" && S[m]
            }) ? "nest" : !1
        }, [!!s, t]),
        h = i.useState(function() {
            return c || (a ? ed(t, r, m) : [])
        }),
        g = ve(h, 2),
        b = g[0],
        x = g[1],
        y = i.useMemo(function() {
            return new Set(l || b || [])
        }, [l, b]),
        w = i.useCallback(function(S) {
            var R = r(S, t.indexOf(S)),
                O, N = y.has(R);
            N ? (y.delete(R), O = $e(y)) : O = [].concat($e(y), [R]), x(O), d && d(!N, S), f && f(O)
        }, [r, y, t, d, f]);
    return [n, v, y, p, m, w]
}

function nd(e, t, r) {
    var n = e.map(function(o, l) {
        return Pr(l, l, e, t, r)
    });
    return Xo(function() {
        return n
    }, [n], function(o, l) {
        return !hn(o, l)
    })
}

function Da(e) {
    var t = i.useRef(e),
        r = i.useState({}),
        n = ve(r, 2),
        o = n[1],
        l = i.useRef(null),
        c = i.useRef([]);

    function a(s) {
        c.current.push(s);
        var d = Promise.resolve();
        l.current = d, d.then(function() {
            if (l.current === d) {
                var f = c.current,
                    u = t.current;
                c.current = [], f.forEach(function(p) {
                    t.current = p(t.current)
                }), l.current = null, u !== t.current && o({})
            }
        })
    }
    return i.useEffect(function() {
        return function() {
            l.current = null
        }
    }, []), [t.current, a]
}

function rd(e) {
    var t = i.useRef(e || null),
        r = i.useRef();

    function n() {
        window.clearTimeout(r.current)
    }

    function o(c) {
        t.current = c, n(), r.current = window.setTimeout(function() {
            t.current = null, r.current = void 0
        }, 100)
    }

    function l() {
        return t.current
    }
    return i.useEffect(function() {
        return n
    }, []), [o, l]
}

function od() {
    var e = i.useState(-1),
        t = ve(e, 2),
        r = t[0],
        n = t[1],
        o = i.useState(-1),
        l = ve(o, 2),
        c = l[0],
        a = l[1],
        s = i.useCallback(function(d, f) {
            n(d), a(f)
        }, []);
    return [r, c, s]
}
var go = jo() ? window : null;

function ad(e, t) {
    var r = vt(e) === "object" ? e : {},
        n = r.offsetHeader,
        o = n === void 0 ? 0 : n,
        l = r.offsetSummary,
        c = l === void 0 ? 0 : l,
        a = r.offsetScroll,
        s = a === void 0 ? 0 : a,
        d = r.getContainer,
        f = d === void 0 ? function() {
            return go
        } : d,
        u = f() || go;
    return i.useMemo(function() {
        var p = !!e;
        return {
            isSticky: p,
            stickyClassName: p ? "".concat(t, "-sticky-holder") : "",
            offsetHeader: o,
            offsetSummary: c,
            offsetScroll: s,
            container: u
        }
    }, [s, o, c, t, u])
}

function id(e, t, r) {
    var n = i.useMemo(function() {
        var o = t.length,
            l = function(d, f, u) {
                for (var p = [], m = 0, v = d; v !== f; v += u) p.push(m), t[v].fixed && (m += e[v] || 0);
                return p
            },
            c = l(0, o, 1),
            a = l(o - 1, -1, -1).reverse();
        return r === "rtl" ? {
            left: a,
            right: c
        } : {
            left: c,
            right: a
        }
    }, [e, t, r]);
    return n
}

function ho(e) {
    var t = e.className,
        r = e.children;
    return i.createElement("div", {
        className: t
    }, r)
}
var ld = function(t, r) {
    var n, o, l = t.scrollBodyRef,
        c = t.onScroll,
        a = t.offsetScroll,
        s = t.container,
        d = nt(st, "prefixCls"),
        f = ((n = l.current) === null || n === void 0 ? void 0 : n.scrollWidth) || 0,
        u = ((o = l.current) === null || o === void 0 ? void 0 : o.clientWidth) || 0,
        p = f && u * (u / f),
        m = i.useRef(),
        v = Da({
            scrollLeft: 0,
            isHiddenScrollBar: !1
        }),
        h = ve(v, 2),
        g = h[0],
        b = h[1],
        x = i.useRef({
            delta: 0,
            x: 0
        }),
        y = i.useState(!1),
        w = ve(y, 2),
        S = w[0],
        R = w[1],
        O = i.useRef(null);
    i.useEffect(function() {
        return function() {
            Tt.cancel(O.current)
        }
    }, []);
    var N = function() {
            R(!1)
        },
        C = function($) {
            $.persist(), x.current.delta = $.pageX - g.scrollLeft, x.current.x = 0, R(!0), $.preventDefault()
        },
        P = function($) {
            var D, B = $ || ((D = window) === null || D === void 0 ? void 0 : D.event),
                T = B.buttons;
            if (!S || T === 0) {
                S && R(!1);
                return
            }
            var L = x.current.x + $.pageX - x.current.x - x.current.delta;
            L <= 0 && (L = 0), L + p >= u && (L = u - p), c({
                scrollLeft: L / u * (f + 2)
            }), x.current.x = $.pageX
        },
        M = function() {
            O.current = Tt(function() {
                if (l.current) {
                    var $ = io(l.current).top,
                        D = $ + l.current.offsetHeight,
                        B = s === window ? document.documentElement.scrollTop + window.innerHeight : io(s).top + s.clientHeight;
                    D - Zr() <= B || $ >= B - a ? b(function(T) {
                        return X(X({}, T), {}, {
                            isHiddenScrollBar: !0
                        })
                    }) : b(function(T) {
                        return X(X({}, T), {}, {
                            isHiddenScrollBar: !1
                        })
                    })
                }
            })
        },
        E = function($) {
            b(function(D) {
                return X(X({}, D), {}, {
                    scrollLeft: $ / f * u || 0
                })
            })
        };
    return i.useImperativeHandle(r, function() {
        return {
            setScrollLeft: E,
            checkScrollBarVisible: M
        }
    }), i.useEffect(function() {
        var I = On(document.body, "mouseup", N, !1),
            $ = On(document.body, "mousemove", P, !1);
        return M(),
            function() {
                I.remove(), $.remove()
            }
    }, [p, S]), i.useEffect(function() {
        var I = On(s, "scroll", M, !1),
            $ = On(window, "resize", M, !1);
        return function() {
            I.remove(), $.remove()
        }
    }, [s]), i.useEffect(function() {
        g.isHiddenScrollBar || b(function(I) {
            var $ = l.current;
            return $ ? X(X({}, I), {}, {
                scrollLeft: $.scrollLeft / $.scrollWidth * $.clientWidth
            }) : I
        })
    }, [g.isHiddenScrollBar]), f <= u || !p || g.isHiddenScrollBar ? null : i.createElement("div", {
        style: {
            height: Zr(),
            width: u,
            bottom: a
        },
        className: "".concat(d, "-sticky-scroll")
    }, i.createElement("div", {
        onMouseDown: C,
        ref: m,
        className: F("".concat(d, "-sticky-scroll-bar"), K({}, "".concat(d, "-sticky-scroll-bar-active"), S)),
        style: {
            width: "".concat(p, "px"),
            transform: "translate3d(".concat(g.scrollLeft, "px, 0, 0)")
        }
    }))
};
const sd = i.forwardRef(ld);
var za = "rc-table",
    cd = [],
    dd = {};

function ud() {
    return "No Data"
}

function fd(e, t) {
    var r, n = X({
            rowKey: "key",
            prefixCls: za,
            emptyText: ud
        }, e),
        o = n.prefixCls,
        l = n.className,
        c = n.rowClassName,
        a = n.style,
        s = n.data,
        d = n.rowKey,
        f = n.scroll,
        u = n.tableLayout,
        p = n.direction,
        m = n.title,
        v = n.footer,
        h = n.summary,
        g = n.caption,
        b = n.id,
        x = n.showHeader,
        y = n.components,
        w = n.emptyText,
        S = n.onRow,
        R = n.onHeaderRow,
        O = n.onScroll,
        N = n.internalHooks,
        C = n.transformColumns,
        P = n.internalRefs,
        M = n.tailor,
        E = n.getContainerWidth,
        I = n.sticky,
        $ = n.rowHoverable,
        D = $ === void 0 ? !0 : $,
        B = s || cd,
        T = !!B.length,
        L = N === Sn,
        _ = i.useCallback(function(we, Re) {
            return $r(y, we) || Re
        }, [y]),
        z = i.useMemo(function() {
            return typeof d == "function" ? d : function(we) {
                var Re = we && we[d];
                return Re
            }
        }, [d]),
        k = _(["body"]),
        A = od(),
        j = ve(A, 3),
        ae = j[0],
        Q = j[1],
        re = j[2],
        te = td(n, B, z),
        se = ve(te, 6),
        le = se[0],
        fe = se[1],
        ne = se[2],
        q = se[3],
        U = se[4],
        G = se[5],
        H = f == null ? void 0 : f.x,
        ge = i.useState(0),
        V = ve(ge, 2),
        ce = V[0],
        Ce = V[1],
        ee = Zc(X(X(X({}, n), le), {}, {
            expandable: !!le.expandedRowRender,
            columnTitle: le.columnTitle,
            expandedKeys: ne,
            getRowKey: z,
            onTriggerExpand: G,
            expandIcon: q,
            expandIconColumnIndex: le.expandIconColumnIndex,
            direction: p,
            scrollWidth: L && M && typeof H == "number" ? H : null,
            clientWidth: ce
        }), L ? C : null),
        ie = ve(ee, 4),
        pe = ie[0],
        oe = ie[1],
        xe = ie[2],
        Ee = ie[3],
        ye = xe ? ? H,
        Xe = i.useMemo(function() {
            return {
                columns: pe,
                flattenColumns: oe
            }
        }, [pe, oe]),
        _e = i.useRef(),
        Ie = i.useRef(),
        J = i.useRef(),
        ue = i.useRef();
    i.useImperativeHandle(t, function() {
        return {
            nativeElement: _e.current,
            scrollTo: function(Re) {
                var Ye;
                if (J.current instanceof HTMLElement) {
                    var pt = Re.index,
                        Je = Re.top,
                        Wt = Re.key;
                    if (Je) {
                        var Bt;
                        (Bt = J.current) === null || Bt === void 0 || Bt.scrollTo({
                            top: Je
                        })
                    } else {
                        var Lt, un = Wt ? ? z(B[pt]);
                        (Lt = J.current.querySelector('[data-row-key="'.concat(un, '"]'))) === null || Lt === void 0 || Lt.scrollIntoView()
                    }
                } else(Ye = J.current) !== null && Ye !== void 0 && Ye.scrollTo && J.current.scrollTo(Re)
            }
        }
    });
    var be = i.useRef(),
        De = i.useState(!1),
        ze = ve(De, 2),
        Pe = ze[0],
        Be = ze[1],
        Ae = i.useState(!1),
        ke = ve(Ae, 2),
        at = ke[0],
        Ze = ke[1],
        kt = Da(new Map),
        Ke = ve(kt, 2),
        Kt = Ke[0],
        Qe = Ke[1],
        ct = _n(oe),
        et = ct.map(function(we) {
            return Kt.get(we)
        }),
        Ct = i.useMemo(function() {
            return et
        }, [et.join("_")]),
        gt = id(Ct, oe, p),
        Fe = f && cr(f.y),
        qe = f && cr(ye) || !!le.fixed,
        Te = qe && oe.some(function(we) {
            var Re = we.fixed;
            return Re
        }),
        je = i.useRef(),
        it = ad(I, o),
        ut = it.isSticky,
        cn = it.offsetHeader,
        St = it.offsetSummary,
        wt = it.offsetScroll,
        he = it.stickyClassName,
        Se = it.container,
        Ne = i.useMemo(function() {
            return h == null ? void 0 : h(B)
        }, [h, B]),
        Le = (Fe || ut) && i.isValidElement(Ne) && Ne.type === jn && Ne.props.fixed,
        Ue, Ve, Ge;
    Fe && (Ve = {
        overflowY: "scroll",
        maxHeight: f.y
    }), qe && (Ue = {
        overflowX: "auto"
    }, Fe || (Ve = {
        overflowY: "hidden"
    }), Ge = {
        width: ye === !0 ? "auto" : ye,
        minWidth: "100%"
    });
    var ft = i.useCallback(function(we, Re) {
            Ni(_e.current) && Qe(function(Ye) {
                if (Ye.get(we) !== Re) {
                    var pt = new Map(Ye);
                    return pt.set(we, Re), pt
                }
                return Ye
            })
        }, []),
        dn = rd(null),
        Nt = ve(dn, 2),
        $n = Nt[0],
        Dt = Nt[1];

    function Ot(we, Re) {
        Re && (typeof Re == "function" ? Re(we) : Re.scrollLeft !== we && (Re.scrollLeft = we, Re.scrollLeft !== we && setTimeout(function() {
            Re.scrollLeft = we
        }, 0)))
    }
    var ht = yt(function(we) {
            var Re = we.currentTarget,
                Ye = we.scrollLeft,
                pt = p === "rtl",
                Je = typeof Ye == "number" ? Ye : Re.scrollLeft,
                Wt = Re || dd;
            if (!Dt() || Dt() === Wt) {
                var Bt;
                $n(Wt), Ot(Je, Ie.current), Ot(Je, J.current), Ot(Je, be.current), Ot(Je, (Bt = je.current) === null || Bt === void 0 ? void 0 : Bt.setScrollLeft)
            }
            var Lt = Re || Ie.current;
            if (Lt) {
                var un = Lt.scrollWidth,
                    qn = Lt.clientWidth;
                if (un === qn) {
                    Be(!1), Ze(!1);
                    return
                }
                pt ? (Be(-Je < un - qn), Ze(-Je > 0)) : (Be(Je > 0), Ze(Je < un - qn))
            }
        }),
        zt = yt(function(we) {
            ht(we), O == null || O(we)
        }),
        Vt = function() {
            qe && J.current ? ht({
                currentTarget: J.current
            }) : (Be(!1), Ze(!1))
        },
        Hn = function(Re) {
            var Ye, pt = Re.width;
            (Ye = je.current) === null || Ye === void 0 || Ye.checkScrollBarVisible();
            var Je = _e.current ? _e.current.offsetWidth : pt;
            L && E && _e.current && (Je = E(_e.current, Je) || Je), Je !== ce && (Vt(), Ce(Je))
        },
        me = i.useRef(!1);
    i.useEffect(function() {
        me.current && Vt()
    }, [qe, s, pe.length]), i.useEffect(function() {
        me.current = !0
    }, []);
    var Oe = i.useState(0),
        Me = ve(Oe, 2),
        dt = Me[0],
        Mt = Me[1],
        Qa = i.useState(!0),
        Lr = ve(Qa, 2),
        _r = Lr[0],
        ei = Lr[1];
    i.useEffect(function() {
        (!M || !L) && (J.current instanceof Element ? Mt(Qr(J.current).width) : Mt(Qr(ue.current).width)), ei(Gi("position", "sticky"))
    }, []), i.useEffect(function() {
        L && P && (P.body.current = J.current)
    });
    var ti = i.useCallback(function(we) {
            return i.createElement(i.Fragment, null, i.createElement(mo, we), Le === "top" && i.createElement(Rn, we, Ne))
        }, [Le, Ne]),
        ni = i.useCallback(function(we) {
            return i.createElement(Rn, we, Ne)
        }, [Ne]),
        jr = _(["table"], "table"),
        En = i.useMemo(function() {
            return u || (Te ? ye === "max-content" ? "auto" : "fixed" : Fe || ut || oe.some(function(we) {
                var Re = we.ellipsis;
                return Re
            }) ? "fixed" : "auto")
        }, [Fe, Te, oe, u, ut]),
        Fn, Vn = {
            colWidths: Ct,
            columCount: oe.length,
            stickyOffsets: gt,
            onHeaderRow: R,
            fixHeader: Fe,
            scroll: f
        },
        Ar = i.useMemo(function() {
            return T ? null : typeof w == "function" ? w() : w
        }, [T, w]),
        Hr = i.createElement(Lc, {
            data: B,
            measureColumnWidth: Fe || qe || ut
        }),
        Fr = i.createElement(ka, {
            colWidths: oe.map(function(we) {
                var Re = we.width;
                return Re
            }),
            columns: oe
        }),
        Vr = g != null ? i.createElement("caption", {
            className: "".concat(o, "-caption")
        }, g) : void 0,
        ri = Zt(n, {
            data: !0
        }),
        Wr = Zt(n, {
            aria: !0
        });
    if (Fe || ut) {
        var Wn;
        typeof k == "function" ? (Wn = k(B, {
            scrollbarSize: dt,
            ref: J,
            onScroll: ht
        }), Vn.colWidths = oe.map(function(we, Re) {
            var Ye = we.width,
                pt = Re === oe.length - 1 ? Ye - dt : Ye;
            return typeof pt == "number" && !Number.isNaN(pt) ? pt : 0
        })) : Wn = i.createElement("div", {
            style: X(X({}, Ue), Ve),
            onScroll: zt,
            ref: J,
            className: F("".concat(o, "-body"))
        }, i.createElement(jr, de({
            style: X(X({}, Ge), {}, {
                tableLayout: En
            })
        }, Wr), Vr, Fr, Hr, !Le && Ne && i.createElement(Rn, {
            stickyOffsets: gt,
            flattenColumns: oe
        }, Ne)));
        var Xr = X(X(X({
            noData: !B.length,
            maxContentScroll: qe && ye === "max-content"
        }, Vn), Xe), {}, {
            direction: p,
            stickyClassName: he,
            onScroll: ht
        });
        Fn = i.createElement(i.Fragment, null, x !== !1 && i.createElement(po, de({}, Xr, {
            stickyTopOffset: cn,
            className: "".concat(o, "-header"),
            ref: Ie
        }), ti), Wn, Le && Le !== "top" && i.createElement(po, de({}, Xr, {
            stickyBottomOffset: St,
            className: "".concat(o, "-summary"),
            ref: be
        }), ni), ut && J.current && J.current instanceof Element && i.createElement(sd, {
            ref: je,
            offsetScroll: wt,
            scrollBodyRef: J,
            onScroll: ht,
            container: Se
        }))
    } else Fn = i.createElement("div", {
        style: X(X({}, Ue), Ve),
        className: F("".concat(o, "-content")),
        onScroll: ht,
        ref: J
    }, i.createElement(jr, de({
        style: X(X({}, Ge), {}, {
            tableLayout: En
        })
    }, Wr), Vr, Fr, x !== !1 && i.createElement(mo, de({}, Vn, Xe)), Hr, Ne && i.createElement(Rn, {
        stickyOffsets: gt,
        flattenColumns: oe
    }, Ne)));
    var Xn = i.createElement("div", de({
        className: F(o, l, (r = {}, K(r, "".concat(o, "-rtl"), p === "rtl"), K(r, "".concat(o, "-ping-left"), Pe), K(r, "".concat(o, "-ping-right"), at), K(r, "".concat(o, "-layout-fixed"), u === "fixed"), K(r, "".concat(o, "-fixed-header"), Fe), K(r, "".concat(o, "-fixed-column"), Te), K(r, "".concat(o, "-fixed-column-gapped"), Te && Ee), K(r, "".concat(o, "-scroll-horizontal"), qe), K(r, "".concat(o, "-has-fix-left"), oe[0] && oe[0].fixed), K(r, "".concat(o, "-has-fix-right"), oe[oe.length - 1] && oe[oe.length - 1].fixed === "right"), r)),
        style: a,
        id: b,
        ref: _e
    }, ri), m && i.createElement(ho, {
        className: "".concat(o, "-title")
    }, m(B)), i.createElement("div", {
        ref: ue,
        className: "".concat(o, "-container")
    }, Fn), v && i.createElement(ho, {
        className: "".concat(o, "-footer")
    }, v(B)));
    qe && (Xn = i.createElement(Mn, {
        onResize: Hn
    }, Xn));
    var qr = nd(oe, gt, p),
        oi = i.useMemo(function() {
            return {
                scrollX: ye,
                prefixCls: o,
                getComponent: _,
                scrollbarSize: dt,
                direction: p,
                fixedInfoList: qr,
                isSticky: ut,
                supportSticky: _r,
                componentWidth: ce,
                fixHeader: Fe,
                fixColumn: Te,
                horizonScroll: qe,
                tableLayout: En,
                rowClassName: c,
                expandedRowClassName: le.expandedRowClassName,
                expandIcon: q,
                expandableType: fe,
                expandRowByClick: le.expandRowByClick,
                expandedRowRender: le.expandedRowRender,
                onTriggerExpand: G,
                expandIconColumnIndex: le.expandIconColumnIndex,
                indentSize: le.indentSize,
                allColumnsFixedLeft: oe.every(function(we) {
                    return we.fixed === "left"
                }),
                emptyNode: Ar,
                columns: pe,
                flattenColumns: oe,
                onColumnResize: ft,
                hoverStartRow: ae,
                hoverEndRow: Q,
                onHover: re,
                rowExpandable: le.rowExpandable,
                onRow: S,
                getRowKey: z,
                expandedKeys: ne,
                childrenColumnName: U,
                rowHoverable: D
            }
        }, [ye, o, _, dt, p, qr, ut, _r, ce, Fe, Te, qe, En, c, le.expandedRowClassName, q, fe, le.expandRowByClick, le.expandedRowRender, G, le.expandIconColumnIndex, le.indentSize, Ar, pe, oe, ft, ae, Q, re, le.rowExpandable, S, z, ne, U, D]);
    return i.createElement(st.Provider, {
        value: oi
    }, Xn)
}
var pd = i.forwardRef(fd);

function Ma(e) {
    return wa(pd, e)
}
var sn = Ma();
sn.EXPAND_COLUMN = It;
sn.INTERNAL_HOOKS = Sn;
sn.Column = Tc;
sn.ColumnGroup = kc;
sn.Summary = Na;
var kr = Rr(null),
    Ba = Rr(null);

function md(e, t, r) {
    var n = t || 1;
    return r[e + n] - (r[e] || 0)
}

function vd(e) {
    var t = e.rowInfo,
        r = e.column,
        n = e.colIndex,
        o = e.indent,
        l = e.index,
        c = e.component,
        a = e.renderIndex,
        s = e.record,
        d = e.style,
        f = e.className,
        u = e.inverse,
        p = e.getHeight,
        m = r.render,
        v = r.dataIndex,
        h = r.className,
        g = r.width,
        b = nt(Ba, ["columnsOffset"]),
        x = b.columnsOffset,
        y = Ta(t, r, n, o, l),
        w = y.key,
        S = y.fixedInfo,
        R = y.appendCellNode,
        O = y.additionalCellProps,
        N = O.style,
        C = O.colSpan,
        P = C === void 0 ? 1 : C,
        M = O.rowSpan,
        E = M === void 0 ? 1 : M,
        I = n - 1,
        $ = md(I, P, x),
        D = P > 1 ? g - $ : 0,
        B = X(X(X({}, N), d), {}, {
            flex: "0 0 ".concat($, "px"),
            width: "".concat($, "px"),
            marginRight: D,
            pointerEvents: "auto"
        }),
        T = i.useMemo(function() {
            return u ? E <= 1 : P === 0 || E === 0 || E > 1
        }, [E, P, u]);
    T ? B.visibility = "hidden" : u && (B.height = p == null ? void 0 : p(E));
    var L = T ? function() {
            return null
        } : m,
        _ = {};
    return (E === 0 || P === 0) && (_.rowSpan = 1, _.colSpan = 1), i.createElement(Ft, de({
        className: F(h, f),
        ellipsis: r.ellipsis,
        align: r.align,
        scope: r.rowScope,
        component: c,
        prefixCls: t.prefixCls,
        key: w,
        record: s,
        index: l,
        renderIndex: a,
        dataIndex: v,
        render: L,
        shouldCellUpdate: r.shouldCellUpdate
    }, S, {
        appendNode: R,
        additionalProps: X(X({}, O), {}, {
            style: B
        }, _)
    }))
}
var gd = ["data", "index", "className", "rowKey", "style", "extra", "getHeight"],
    hd = i.forwardRef(function(e, t) {
        var r = e.data,
            n = e.index,
            o = e.className,
            l = e.rowKey,
            c = e.style,
            a = e.extra,
            s = e.getHeight,
            d = ot(e, gd),
            f = r.record,
            u = r.indent,
            p = r.index,
            m = nt(st, ["prefixCls", "flattenColumns", "fixColumn", "componentWidth", "scrollX"]),
            v = m.scrollX,
            h = m.flattenColumns,
            g = m.prefixCls,
            b = m.fixColumn,
            x = m.componentWidth,
            y = nt(kr, ["getComponent"]),
            w = y.getComponent,
            S = Ia(f, l, n, u),
            R = w(["body", "row"], "div"),
            O = w(["body", "cell"], "div"),
            N = S.rowSupportExpand,
            C = S.expanded,
            P = S.rowProps,
            M = S.expandedRowRender,
            E = S.expandedRowClassName,
            I;
        if (N && C) {
            var $ = M(f, n, u + 1, C),
                D = E == null ? void 0 : E(f, n, u),
                B = {};
            b && (B = {
                style: K({}, "--virtual-width", "".concat(x, "px"))
            });
            var T = "".concat(g, "-expanded-row-cell");
            I = i.createElement(R, {
                className: F("".concat(g, "-expanded-row"), "".concat(g, "-expanded-row-level-").concat(u + 1), D)
            }, i.createElement(Ft, {
                component: O,
                prefixCls: g,
                className: F(T, K({}, "".concat(T, "-fixed"), b)),
                additionalProps: B
            }, $))
        }
        var L = X(X({}, c), {}, {
            width: v
        });
        a && (L.position = "absolute", L.pointerEvents = "none");
        var _ = i.createElement(R, de({}, P, d, {
            "data-row-key": l,
            ref: N ? null : t,
            className: F(o, "".concat(g, "-row"), P == null ? void 0 : P.className, K({}, "".concat(g, "-row-extra"), a)),
            style: X(X({}, L), P == null ? void 0 : P.style)
        }), h.map(function(z, k) {
            return i.createElement(vd, {
                key: k,
                component: O,
                rowInfo: S,
                column: z,
                colIndex: k,
                indent: u,
                index: n,
                renderIndex: p,
                record: f,
                inverse: a,
                getHeight: s
            })
        }));
        return N ? i.createElement("div", {
            ref: t
        }, _, I) : _
    }),
    yo = ln(hd),
    yd = i.forwardRef(function(e, t) {
        var r = e.data,
            n = e.onScroll,
            o = nt(st, ["flattenColumns", "onColumnResize", "getRowKey", "prefixCls", "expandedKeys", "childrenColumnName", "emptyNode", "scrollX"]),
            l = o.flattenColumns,
            c = o.onColumnResize,
            a = o.getRowKey,
            s = o.expandedKeys,
            d = o.prefixCls,
            f = o.childrenColumnName,
            u = o.emptyNode,
            p = o.scrollX,
            m = nt(kr),
            v = m.sticky,
            h = m.scrollY,
            g = m.listItemHeight,
            b = m.getComponent,
            x = m.onScroll,
            y = i.useRef(),
            w = Ra(r, f, s, a),
            S = i.useMemo(function() {
                var B = 0;
                return l.map(function(T) {
                    var L = T.width,
                        _ = T.key;
                    return B += L, [_, L, B]
                })
            }, [l]),
            R = i.useMemo(function() {
                return S.map(function(B) {
                    return B[2]
                })
            }, [S]);
        i.useEffect(function() {
            S.forEach(function(B) {
                var T = ve(B, 2),
                    L = T[0],
                    _ = T[1];
                c(L, _)
            })
        }, [S]), i.useImperativeHandle(t, function() {
            var B = {
                scrollTo: function(L) {
                    var _;
                    (_ = y.current) === null || _ === void 0 || _.scrollTo(L)
                }
            };
            return Object.defineProperty(B, "scrollLeft", {
                get: function() {
                    var L;
                    return ((L = y.current) === null || L === void 0 ? void 0 : L.getScrollInfo().x) || 0
                },
                set: function(L) {
                    var _;
                    (_ = y.current) === null || _ === void 0 || _.scrollTo({
                        left: L
                    })
                }
            }), B
        });
        var O = function(T, L) {
                var _, z = (_ = w[L]) === null || _ === void 0 ? void 0 : _.record,
                    k = T.onCell;
                if (k) {
                    var A, j = k(z, L);
                    return (A = j == null ? void 0 : j.rowSpan) !== null && A !== void 0 ? A : 1
                }
                return 1
            },
            N = function(T) {
                var L = T.start,
                    _ = T.end,
                    z = T.getSize,
                    k = T.offsetY;
                if (_ < 0) return null;
                for (var A = l.filter(function(G) {
                        return O(G, L) === 0
                    }), j = L, ae = function(H) {
                        if (A = A.filter(function(ge) {
                                return O(ge, H) === 0
                            }), !A.length) return j = H, 1
                    }, Q = L; Q >= 0 && !ae(Q); Q -= 1);
                for (var re = l.filter(function(G) {
                        return O(G, _) !== 1
                    }), te = _, se = function(H) {
                        if (re = re.filter(function(ge) {
                                return O(ge, H) !== 1
                            }), !re.length) return te = Math.max(H - 1, _), 1
                    }, le = _; le < w.length && !se(le); le += 1);
                for (var fe = [], ne = function(H) {
                        var ge = w[H];
                        if (!ge) return 1;
                        l.some(function(V) {
                            return O(V, H) > 1
                        }) && fe.push(H)
                    }, q = j; q <= te; q += 1) ne(q);
                var U = fe.map(function(G) {
                    var H = w[G],
                        ge = a(H.record, G),
                        V = function(ee) {
                            var ie = G + ee - 1,
                                pe = a(w[ie].record, ie),
                                oe = z(ge, pe);
                            return oe.bottom - oe.top
                        },
                        ce = z(ge);
                    return i.createElement(yo, {
                        key: G,
                        data: H,
                        rowKey: ge,
                        index: G,
                        style: {
                            top: -k + ce.top
                        },
                        extra: !0,
                        getHeight: V
                    })
                });
                return U
            },
            C = i.useMemo(function() {
                return {
                    columnsOffset: R
                }
            }, [R]),
            P = "".concat(d, "-tbody"),
            M = b(["body", "wrapper"]),
            E = b(["body", "row"], "div"),
            I = b(["body", "cell"], "div"),
            $;
        if (w.length) {
            var D = {};
            v && (D.position = "sticky", D.bottom = 0, vt(v) === "object" && v.offsetScroll && (D.bottom = v.offsetScroll)), $ = i.createElement(qo, {
                fullHeight: !1,
                ref: y,
                prefixCls: "".concat(P, "-virtual"),
                styles: {
                    horizontalScrollBar: D
                },
                className: P,
                height: h,
                itemHeight: g || 24,
                data: w,
                itemKey: function(T) {
                    return a(T.record)
                },
                component: M,
                scrollWidth: p,
                onVirtualScroll: function(T) {
                    var L = T.x;
                    n({
                        scrollLeft: L
                    })
                },
                onScroll: x,
                extraRender: N
            }, function(B, T, L) {
                var _ = a(B.record, T);
                return i.createElement(yo, {
                    data: B,
                    rowKey: _,
                    index: T,
                    style: L.style
                })
            })
        } else $ = i.createElement(E, {
            className: F("".concat(d, "-placeholder"))
        }, i.createElement(Ft, {
            component: I,
            prefixCls: d
        }, u));
        return i.createElement(Ba.Provider, {
            value: C
        }, $)
    }),
    bd = ln(yd),
    xd = function(t, r) {
        var n = r.ref,
            o = r.onScroll;
        return i.createElement(bd, {
            ref: n,
            data: t,
            onScroll: o
        })
    };

function Cd(e, t) {
    var r = e.columns,
        n = e.scroll,
        o = e.sticky,
        l = e.prefixCls,
        c = l === void 0 ? za : l,
        a = e.className,
        s = e.listItemHeight,
        d = e.components,
        f = e.onScroll,
        u = n || {},
        p = u.x,
        m = u.y;
    typeof p != "number" && (p = 1), typeof m != "number" && (m = 500);
    var v = yt(function(b, x) {
            return $r(d, b) || x
        }),
        h = yt(f),
        g = i.useMemo(function() {
            return {
                sticky: o,
                scrollY: m,
                listItemHeight: s,
                getComponent: v,
                onScroll: h
            }
        }, [o, m, s, v, h]);
    return i.createElement(kr.Provider, {
        value: g
    }, i.createElement(sn, de({}, e, {
        className: F(a, "".concat(c, "-virtual")),
        scroll: X(X({}, n), {}, {
            x: p
        }),
        components: X(X({}, d), {}, {
            body: xd
        }),
        columns: r,
        internalHooks: Sn,
        tailor: !0,
        ref: t
    })))
}
var Sd = i.forwardRef(Cd);

function La(e) {
    return wa(Sd, e)
}
La();

function wd(e) {
    return null
}

function $d(e) {
    return null
}
var Kr = i.createContext(null),
    Ed = function(t) {
        for (var r = t.prefixCls, n = t.level, o = t.isStart, l = t.isEnd, c = "".concat(r, "-indent-unit"), a = [], s = 0; s < n; s += 1) a.push(i.createElement("span", {
            key: s,
            className: F(c, K(K({}, "".concat(c, "-start"), o[s]), "".concat(c, "-end"), l[s]))
        }));
        return i.createElement("span", {
            "aria-hidden": "true",
            className: "".concat(r, "-indent")
        }, a)
    };
const Nd = i.memo(Ed);
var Od = ["eventKey", "className", "style", "dragOver", "dragOverGapTop", "dragOverGapBottom", "isLeaf", "isStart", "isEnd", "expanded", "selected", "checked", "halfChecked", "loading", "domRef", "active", "data", "onMouseMove", "selectable"],
    bo = "open",
    xo = "close",
    Rd = "---",
    Id = function(e) {
        Uo(r, e);
        var t = Go(r);

        function r() {
            var n;
            Yo(this, r);
            for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++) l[c] = arguments[c];
            return n = t.call.apply(t, [this].concat(l)), K(Z(n), "state", {
                dragNodeHighlight: !1
            }), K(Z(n), "selectHandle", void 0), K(Z(n), "cacheIndent", void 0), K(Z(n), "onSelectorClick", function(a) {
                var s = n.props.context.onNodeClick;
                s(a, He(n.props)), n.isSelectable() ? n.onSelect(a) : n.onCheck(a)
            }), K(Z(n), "onSelectorDoubleClick", function(a) {
                var s = n.props.context.onNodeDoubleClick;
                s(a, He(n.props))
            }), K(Z(n), "onSelect", function(a) {
                if (!n.isDisabled()) {
                    var s = n.props.context.onNodeSelect;
                    s(a, He(n.props))
                }
            }), K(Z(n), "onCheck", function(a) {
                if (!n.isDisabled()) {
                    var s = n.props,
                        d = s.disableCheckbox,
                        f = s.checked,
                        u = n.props.context.onNodeCheck;
                    if (!(!n.isCheckable() || d)) {
                        var p = !f;
                        u(a, He(n.props), p)
                    }
                }
            }), K(Z(n), "onMouseEnter", function(a) {
                var s = n.props.context.onNodeMouseEnter;
                s(a, He(n.props))
            }), K(Z(n), "onMouseLeave", function(a) {
                var s = n.props.context.onNodeMouseLeave;
                s(a, He(n.props))
            }), K(Z(n), "onContextMenu", function(a) {
                var s = n.props.context.onNodeContextMenu;
                s(a, He(n.props))
            }), K(Z(n), "onDragStart", function(a) {
                var s = n.props.context.onNodeDragStart;
                a.stopPropagation(), n.setState({
                    dragNodeHighlight: !0
                }), s(a, Z(n));
                try {
                    a.dataTransfer.setData("text/plain", "")
                } catch {}
            }), K(Z(n), "onDragEnter", function(a) {
                var s = n.props.context.onNodeDragEnter;
                a.preventDefault(), a.stopPropagation(), s(a, Z(n))
            }), K(Z(n), "onDragOver", function(a) {
                var s = n.props.context.onNodeDragOver;
                a.preventDefault(), a.stopPropagation(), s(a, Z(n))
            }), K(Z(n), "onDragLeave", function(a) {
                var s = n.props.context.onNodeDragLeave;
                a.stopPropagation(), s(a, Z(n))
            }), K(Z(n), "onDragEnd", function(a) {
                var s = n.props.context.onNodeDragEnd;
                a.stopPropagation(), n.setState({
                    dragNodeHighlight: !1
                }), s(a, Z(n))
            }), K(Z(n), "onDrop", function(a) {
                var s = n.props.context.onNodeDrop;
                a.preventDefault(), a.stopPropagation(), n.setState({
                    dragNodeHighlight: !1
                }), s(a, Z(n))
            }), K(Z(n), "onExpand", function(a) {
                var s = n.props,
                    d = s.loading,
                    f = s.context.onNodeExpand;
                d || f(a, He(n.props))
            }), K(Z(n), "setSelectHandle", function(a) {
                n.selectHandle = a
            }), K(Z(n), "getNodeState", function() {
                var a = n.props.expanded;
                return n.isLeaf() ? null : a ? bo : xo
            }), K(Z(n), "hasChildren", function() {
                var a = n.props.eventKey,
                    s = n.props.context.keyEntities,
                    d = lt(s, a) || {},
                    f = d.children;
                return !!(f || []).length
            }), K(Z(n), "isLeaf", function() {
                var a = n.props,
                    s = a.isLeaf,
                    d = a.loaded,
                    f = n.props.context.loadData,
                    u = n.hasChildren();
                return s === !1 ? !1 : s || !f && !u || f && d && !u
            }), K(Z(n), "isDisabled", function() {
                var a = n.props.disabled,
                    s = n.props.context.disabled;
                return !!(s || a)
            }), K(Z(n), "isCheckable", function() {
                var a = n.props.checkable,
                    s = n.props.context.checkable;
                return !s || a === !1 ? !1 : s
            }), K(Z(n), "syncLoadData", function(a) {
                var s = a.expanded,
                    d = a.loading,
                    f = a.loaded,
                    u = n.props.context,
                    p = u.loadData,
                    m = u.onNodeLoad;
                d || p && s && !n.isLeaf() && !f && m(He(n.props))
            }), K(Z(n), "isDraggable", function() {
                var a = n.props,
                    s = a.data,
                    d = a.context.draggable;
                return !!(d && (!d.nodeDraggable || d.nodeDraggable(s)))
            }), K(Z(n), "renderDragHandler", function() {
                var a = n.props.context,
                    s = a.draggable,
                    d = a.prefixCls;
                return s != null && s.icon ? i.createElement("span", {
                    className: "".concat(d, "-draggable-icon")
                }, s.icon) : null
            }), K(Z(n), "renderSwitcherIconDom", function(a) {
                var s = n.props.switcherIcon,
                    d = n.props.context.switcherIcon,
                    f = s || d;
                return typeof f == "function" ? f(X(X({}, n.props), {}, {
                    isLeaf: a
                })) : f
            }), K(Z(n), "renderSwitcher", function() {
                var a = n.props.expanded,
                    s = n.props.context.prefixCls;
                if (n.isLeaf()) {
                    var d = n.renderSwitcherIconDom(!0);
                    return d !== !1 ? i.createElement("span", {
                        className: F("".concat(s, "-switcher"), "".concat(s, "-switcher-noop"))
                    }, d) : null
                }
                var f = F("".concat(s, "-switcher"), "".concat(s, "-switcher_").concat(a ? bo : xo)),
                    u = n.renderSwitcherIconDom(!1);
                return u !== !1 ? i.createElement("span", {
                    onClick: n.onExpand,
                    className: f
                }, u) : null
            }), K(Z(n), "renderCheckbox", function() {
                var a = n.props,
                    s = a.checked,
                    d = a.halfChecked,
                    f = a.disableCheckbox,
                    u = n.props.context.prefixCls,
                    p = n.isDisabled(),
                    m = n.isCheckable();
                if (!m) return null;
                var v = typeof m != "boolean" ? m : null;
                return i.createElement("span", {
                    className: F("".concat(u, "-checkbox"), s && "".concat(u, "-checkbox-checked"), !s && d && "".concat(u, "-checkbox-indeterminate"), (p || f) && "".concat(u, "-checkbox-disabled")),
                    onClick: n.onCheck
                }, v)
            }), K(Z(n), "renderIcon", function() {
                var a = n.props.loading,
                    s = n.props.context.prefixCls;
                return i.createElement("span", {
                    className: F("".concat(s, "-iconEle"), "".concat(s, "-icon__").concat(n.getNodeState() || "docu"), a && "".concat(s, "-icon_loading"))
                })
            }), K(Z(n), "renderSelector", function() {
                var a = n.state.dragNodeHighlight,
                    s = n.props,
                    d = s.title,
                    f = d === void 0 ? Rd : d,
                    u = s.selected,
                    p = s.icon,
                    m = s.loading,
                    v = s.data,
                    h = n.props.context,
                    g = h.prefixCls,
                    b = h.showIcon,
                    x = h.icon,
                    y = h.loadData,
                    w = h.titleRender,
                    S = n.isDisabled(),
                    R = "".concat(g, "-node-content-wrapper"),
                    O;
                if (b) {
                    var N = p || x;
                    O = N ? i.createElement("span", {
                        className: F("".concat(g, "-iconEle"), "".concat(g, "-icon__customize"))
                    }, typeof N == "function" ? N(n.props) : N) : n.renderIcon()
                } else y && m && (O = n.renderIcon());
                var C;
                typeof f == "function" ? C = f(v) : w ? C = w(v) : C = f;
                var P = i.createElement("span", {
                    className: "".concat(g, "-title")
                }, C);
                return i.createElement("span", {
                    ref: n.setSelectHandle,
                    title: typeof f == "string" ? f : "",
                    className: F("".concat(R), "".concat(R, "-").concat(n.getNodeState() || "normal"), !S && (u || a) && "".concat(g, "-node-selected")),
                    onMouseEnter: n.onMouseEnter,
                    onMouseLeave: n.onMouseLeave,
                    onContextMenu: n.onContextMenu,
                    onClick: n.onSelectorClick,
                    onDoubleClick: n.onSelectorDoubleClick
                }, O, P, n.renderDropIndicator())
            }), K(Z(n), "renderDropIndicator", function() {
                var a = n.props,
                    s = a.disabled,
                    d = a.eventKey,
                    f = n.props.context,
                    u = f.draggable,
                    p = f.dropLevelOffset,
                    m = f.dropPosition,
                    v = f.prefixCls,
                    h = f.indent,
                    g = f.dropIndicatorRender,
                    b = f.dragOverNodeKey,
                    x = f.direction,
                    y = !!u,
                    w = !s && y && b === d,
                    S = h ? ? n.cacheIndent;
                return n.cacheIndent = h, w ? g({
                    dropPosition: m,
                    dropLevelOffset: p,
                    indent: S,
                    prefixCls: v,
                    direction: x
                }) : null
            }), n
        }
        return Jo(r, [{
            key: "componentDidMount",
            value: function() {
                this.syncLoadData(this.props)
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.syncLoadData(this.props)
            }
        }, {
            key: "isSelectable",
            value: function() {
                var o = this.props.selectable,
                    l = this.props.context.selectable;
                return typeof o == "boolean" ? o : l
            }
        }, {
            key: "render",
            value: function() {
                var o, l = this.props,
                    c = l.eventKey,
                    a = l.className,
                    s = l.style,
                    d = l.dragOver,
                    f = l.dragOverGapTop,
                    u = l.dragOverGapBottom,
                    p = l.isLeaf,
                    m = l.isStart,
                    v = l.isEnd,
                    h = l.expanded,
                    g = l.selected,
                    b = l.checked,
                    x = l.halfChecked,
                    y = l.loading,
                    w = l.domRef,
                    S = l.active;
                l.data;
                var R = l.onMouseMove,
                    O = l.selectable,
                    N = ot(l, Od),
                    C = this.props.context,
                    P = C.prefixCls,
                    M = C.filterTreeNode,
                    E = C.keyEntities,
                    I = C.dropContainerKey,
                    $ = C.dropTargetKey,
                    D = C.draggingNodeKey,
                    B = this.isDisabled(),
                    T = Zt(N, {
                        aria: !0,
                        data: !0
                    }),
                    L = lt(E, c) || {},
                    _ = L.level,
                    z = v[v.length - 1],
                    k = this.isDraggable(),
                    A = !B && k,
                    j = D === c,
                    ae = O !== void 0 ? {
                        "aria-selected": !!O
                    } : void 0;
                return i.createElement("div", de({
                    ref: w,
                    className: F(a, "".concat(P, "-treenode"), (o = {}, K(K(K(K(K(K(K(K(K(K(o, "".concat(P, "-treenode-disabled"), B), "".concat(P, "-treenode-switcher-").concat(h ? "open" : "close"), !p), "".concat(P, "-treenode-checkbox-checked"), b), "".concat(P, "-treenode-checkbox-indeterminate"), x), "".concat(P, "-treenode-selected"), g), "".concat(P, "-treenode-loading"), y), "".concat(P, "-treenode-active"), S), "".concat(P, "-treenode-leaf-last"), z), "".concat(P, "-treenode-draggable"), k), "dragging", j), K(K(K(K(K(K(o, "drop-target", $ === c), "drop-container", I === c), "drag-over", !B && d), "drag-over-gap-top", !B && f), "drag-over-gap-bottom", !B && u), "filter-node", M && M(He(this.props))))),
                    style: s,
                    draggable: A,
                    "aria-grabbed": j,
                    onDragStart: A ? this.onDragStart : void 0,
                    onDragEnter: k ? this.onDragEnter : void 0,
                    onDragOver: k ? this.onDragOver : void 0,
                    onDragLeave: k ? this.onDragLeave : void 0,
                    onDrop: k ? this.onDrop : void 0,
                    onDragEnd: k ? this.onDragEnd : void 0,
                    onMouseMove: R
                }, ae, T), i.createElement(Nd, {
                    prefixCls: P,
                    level: _,
                    isStart: m,
                    isEnd: v
                }), this.renderDragHandler(), this.renderSwitcher(), this.renderCheckbox(), this.renderSelector())
            }
        }]), r
    }(i.Component),
    en = function(t) {
        return i.createElement(Kr.Consumer, null, function(r) {
            return i.createElement(Id, de({}, t, {
                context: r
            }))
        })
    };
en.displayName = "TreeNode";
en.isTreeNode = 1;

function bt(e, t) {
    if (!e) return [];
    var r = e.slice(),
        n = r.indexOf(t);
    return n >= 0 && r.splice(n, 1), r
}

function $t(e, t) {
    var r = (e || []).slice();
    return r.indexOf(t) === -1 && r.push(t), r
}

function Dr(e) {
    return e.split("-")
}

function Pd(e, t) {
    var r = [],
        n = lt(t, e);

    function o() {
        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        l.forEach(function(c) {
            var a = c.key,
                s = c.children;
            r.push(a), o(s)
        })
    }
    return o(n.children), r
}

function Td(e) {
    if (e.parent) {
        var t = Dr(e.pos);
        return Number(t[t.length - 1]) === e.parent.children.length - 1
    }
    return !1
}

function kd(e) {
    var t = Dr(e.pos);
    return Number(t[t.length - 1]) === 0
}

function Co(e, t, r, n, o, l, c, a, s, d) {
    var f, u = e.clientX,
        p = e.clientY,
        m = e.target.getBoundingClientRect(),
        v = m.top,
        h = m.height,
        g = (d === "rtl" ? -1 : 1) * (((o == null ? void 0 : o.x) || 0) - u),
        b = (g - 12) / n,
        x = s.filter(function(B) {
            var T;
            return (T = a[B]) === null || T === void 0 || (T = T.children) === null || T === void 0 ? void 0 : T.length
        }),
        y = lt(a, r.props.eventKey);
    if (p < v + h / 2) {
        var w = c.findIndex(function(B) {
                return B.key === y.key
            }),
            S = w <= 0 ? 0 : w - 1,
            R = c[S].key;
        y = lt(a, R)
    }
    var O = y.key,
        N = y,
        C = y.key,
        P = 0,
        M = 0;
    if (!x.includes(O))
        for (var E = 0; E < b && Td(y); E += 1) y = y.parent, M += 1;
    var I = t.props.data,
        $ = y.node,
        D = !0;
    return kd(y) && y.level === 0 && p < v + h / 2 && l({
        dragNode: I,
        dropNode: $,
        dropPosition: -1
    }) && y.key === r.props.eventKey ? P = -1 : (N.children || []).length && x.includes(C) ? l({
        dragNode: I,
        dropNode: $,
        dropPosition: 0
    }) ? P = 0 : D = !1 : M === 0 ? b > -1.5 ? l({
        dragNode: I,
        dropNode: $,
        dropPosition: 1
    }) ? P = 1 : D = !1 : l({
        dragNode: I,
        dropNode: $,
        dropPosition: 0
    }) ? P = 0 : l({
        dragNode: I,
        dropNode: $,
        dropPosition: 1
    }) ? P = 1 : D = !1 : l({
        dragNode: I,
        dropNode: $,
        dropPosition: 1
    }) ? P = 1 : D = !1, {
        dropPosition: P,
        dropLevelOffset: M,
        dropTargetKey: y.key,
        dropTargetPos: y.pos,
        dragOverNodeKey: C,
        dropContainerKey: P === 0 ? null : ((f = y.parent) === null || f === void 0 ? void 0 : f.key) || null,
        dropAllowed: D
    }
}

function So(e, t) {
    if (e) {
        var r = t.multiple;
        return r ? e.slice() : e.length ? [e[0]] : e
    }
}

function Qn(e) {
    if (!e) return null;
    var t;
    if (Array.isArray(e)) t = {
        checkedKeys: e,
        halfCheckedKeys: void 0
    };
    else if (vt(e) === "object") t = {
        checkedKeys: e.checked || void 0,
        halfCheckedKeys: e.halfChecked || void 0
    };
    else return Pt(!1, "`checkedKeys` is not an array or an object"), null;
    return t
}

function ur(e, t) {
    var r = new Set;

    function n(o) {
        if (!r.has(o)) {
            var l = lt(t, o);
            if (l) {
                r.add(o);
                var c = l.parent,
                    a = l.node;
                a.disabled || c && n(c.key)
            }
        }
    }
    return (e || []).forEach(function(o) {
        n(o)
    }), $e(r)
}

function Kd(e) {
    const [t, r] = i.useState(null);
    return [i.useCallback((l, c, a) => {
        const s = t ? ? l,
            d = Math.min(s || 0, l),
            f = Math.max(s || 0, l),
            u = c.slice(d, f + 1).map(v => e(v)),
            p = u.some(v => !a.has(v)),
            m = [];
        return u.forEach(v => {
            p ? (a.has(v) || m.push(v), a.add(v)) : (a.delete(v), m.push(v))
        }), r(p ? f : null), m
    }, [t]), l => {
        r(l)
    }]
}
const Rt = {},
    fr = "SELECT_ALL",
    pr = "SELECT_INVERT",
    mr = "SELECT_NONE",
    wo = [],
    _a = (e, t) => {
        let r = [];
        return (t || []).forEach(n => {
            r.push(n), n && typeof n == "object" && e in n && (r = [].concat($e(r), $e(_a(e, n[e]))))
        }), r
    },
    Dd = (e, t) => {
        const {
            preserveSelectedRowKeys: r,
            selectedRowKeys: n,
            defaultSelectedRowKeys: o,
            getCheckboxProps: l,
            onChange: c,
            onSelect: a,
            onSelectAll: s,
            onSelectInvert: d,
            onSelectNone: f,
            onSelectMultiple: u,
            columnWidth: p,
            type: m,
            selections: v,
            fixed: h,
            renderCell: g,
            hideSelectAll: b,
            checkStrictly: x = !0
        } = t || {}, {
            prefixCls: y,
            data: w,
            pageData: S,
            getRecordByKey: R,
            getRowKey: O,
            expandType: N,
            childrenColumnName: C,
            locale: P,
            getPopupContainer: M
        } = e, E = Dn(), [I, $] = Kd(ne => ne), [D, B] = jt(n || o || wo, {
            value: n
        }), T = i.useRef(new Map), L = i.useCallback(ne => {
            if (r) {
                const q = new Map;
                ne.forEach(U => {
                    let G = R(U);
                    !G && T.current.has(U) && (G = T.current.get(U)), q.set(U, G)
                }), T.current = q
            }
        }, [R, r]);
        i.useEffect(() => {
            L(D)
        }, [D]);
        const {
            keyEntities: _
        } = i.useMemo(() => {
            if (x) return {
                keyEntities: null
            };
            let ne = w;
            if (r) {
                const q = new Set(w.map((G, H) => O(G, H))),
                    U = Array.from(T.current).reduce((G, H) => {
                        let [ge, V] = H;
                        return q.has(ge) ? G : G.concat(V)
                    }, []);
                ne = [].concat($e(ne), $e(U))
            }
            return Or(ne, {
                externalGetKey: O,
                childrenPropName: C
            })
        }, [w, O, x, C, r]), z = i.useMemo(() => _a(C, S), [C, S]), k = i.useMemo(() => {
            const ne = new Map;
            return z.forEach((q, U) => {
                const G = O(q, U),
                    H = (l ? l(q) : null) || {};
                ne.set(G, H)
            }), ne
        }, [z, O, l]), A = i.useCallback(ne => {
            var q;
            return !!(!((q = k.get(O(ne))) === null || q === void 0) && q.disabled)
        }, [k, O]), [j, ae] = i.useMemo(() => {
            if (x) return [D || [],
                []
            ];
            const {
                checkedKeys: ne,
                halfCheckedKeys: q
            } = Ut(D, !0, _, A);
            return [ne || [], q]
        }, [D, x, _, A]), Q = i.useMemo(() => {
            const ne = m === "radio" ? j.slice(0, 1) : j;
            return new Set(ne)
        }, [j, m]), re = i.useMemo(() => m === "radio" ? new Set : new Set(ae), [ae, m]);
        i.useEffect(() => {
            t || B(wo)
        }, [!!t]);
        const te = i.useCallback((ne, q) => {
                let U, G;
                L(ne), r ? (U = ne, G = ne.map(H => T.current.get(H))) : (U = [], G = [], ne.forEach(H => {
                    const ge = R(H);
                    ge !== void 0 && (U.push(H), G.push(ge))
                })), B(U), c == null || c(U, G, {
                    type: q
                })
            }, [B, R, c, r]),
            se = i.useCallback((ne, q, U, G) => {
                if (a) {
                    const H = U.map(ge => R(ge));
                    a(R(ne), q, H, G)
                }
                te(U, "single")
            }, [a, R, te]),
            le = i.useMemo(() => !v || b ? null : (v === !0 ? [fr, pr, mr] : v).map(q => q === fr ? {
                key: "all",
                text: P.selectionAll,
                onSelect() {
                    te(w.map((U, G) => O(U, G)).filter(U => {
                        const G = k.get(U);
                        return !(G != null && G.disabled) || Q.has(U)
                    }), "all")
                }
            } : q === pr ? {
                key: "invert",
                text: P.selectInvert,
                onSelect() {
                    const U = new Set(Q);
                    S.forEach((H, ge) => {
                        const V = O(H, ge),
                            ce = k.get(V);
                        ce != null && ce.disabled || (U.has(V) ? U.delete(V) : U.add(V))
                    });
                    const G = Array.from(U);
                    d && (E.deprecated(!1, "onSelectInvert", "onChange"), d(G)), te(G, "invert")
                }
            } : q === mr ? {
                key: "none",
                text: P.selectNone,
                onSelect() {
                    f == null || f(), te(Array.from(Q).filter(U => {
                        const G = k.get(U);
                        return G == null ? void 0 : G.disabled
                    }), "none")
                }
            } : q).map(q => Object.assign(Object.assign({}, q), {
                onSelect: function() {
                    for (var U, G, H = arguments.length, ge = new Array(H), V = 0; V < H; V++) ge[V] = arguments[V];
                    (G = q.onSelect) === null || G === void 0 || (U = G).call.apply(U, [q].concat(ge)), $(null)
                }
            })), [v, Q, S, O, d, te]);
        return [i.useCallback(ne => {
            var q;
            if (!t) return ne.filter(J => J !== Rt);
            let U = $e(ne);
            const G = new Set(Q),
                H = z.map(O).filter(J => !k.get(J).disabled),
                ge = H.every(J => G.has(J)),
                V = H.some(J => G.has(J)),
                ce = () => {
                    const J = [];
                    ge ? H.forEach(be => {
                        G.delete(be), J.push(be)
                    }) : H.forEach(be => {
                        G.has(be) || (G.add(be), J.push(be))
                    });
                    const ue = Array.from(G);
                    s == null || s(!ge, ue.map(be => R(be)), J.map(be => R(be))), te(ue, "all"), $(null)
                };
            let Ce, ee;
            if (m !== "radio") {
                let J;
                if (le) {
                    const Pe = {
                        getPopupContainer: M,
                        items: le.map((Be, Ae) => {
                            const {
                                key: ke,
                                text: at,
                                onSelect: Ze
                            } = Be;
                            return {
                                key: ke ? ? Ae,
                                onClick: () => {
                                    Ze == null || Ze(H)
                                },
                                label: at
                            }
                        })
                    };
                    J = i.createElement("div", {
                        className: `${y}-selection-extra`
                    }, i.createElement(ga, {
                        menu: Pe,
                        getPopupContainer: M
                    }, i.createElement("span", null, i.createElement(Oi, null))))
                }
                const ue = z.map((Pe, Be) => {
                        const Ae = O(Pe, Be),
                            ke = k.get(Ae) || {};
                        return Object.assign({
                            checked: G.has(Ae)
                        }, ke)
                    }).filter(Pe => {
                        let {
                            disabled: Be
                        } = Pe;
                        return Be
                    }),
                    be = !!ue.length && ue.length === z.length,
                    De = be && ue.every(Pe => {
                        let {
                            checked: Be
                        } = Pe;
                        return Be
                    }),
                    ze = be && ue.some(Pe => {
                        let {
                            checked: Be
                        } = Pe;
                        return Be
                    });
                ee = i.createElement(Tn, {
                    checked: be ? De : !!z.length && ge,
                    indeterminate: be ? !De && ze : !ge && V,
                    onChange: ce,
                    disabled: z.length === 0 || be,
                    "aria-label": J ? "Custom selection" : "Select all",
                    skipGroup: !0
                }), Ce = !b && i.createElement("div", {
                    className: `${y}-selection`
                }, ee, J)
            }
            let ie;
            m === "radio" ? ie = (J, ue, be) => {
                const De = O(ue, be),
                    ze = G.has(De);
                return {
                    node: i.createElement(Zo, Object.assign({}, k.get(De), {
                        checked: ze,
                        onClick: Pe => Pe.stopPropagation(),
                        onChange: Pe => {
                            G.has(De) || se(De, !0, [De], Pe.nativeEvent)
                        }
                    })),
                    checked: ze
                }
            } : ie = (J, ue, be) => {
                var De;
                const ze = O(ue, be),
                    Pe = G.has(ze),
                    Be = re.has(ze),
                    Ae = k.get(ze);
                let ke;
                return N === "nest" ? ke = Be : ke = (De = Ae == null ? void 0 : Ae.indeterminate) !== null && De !== void 0 ? De : Be, {
                    node: i.createElement(Tn, Object.assign({}, Ae, {
                        indeterminate: ke,
                        checked: Pe,
                        skipGroup: !0,
                        onClick: at => at.stopPropagation(),
                        onChange: at => {
                            let {
                                nativeEvent: Ze
                            } = at;
                            const {
                                shiftKey: kt
                            } = Ze, Ke = H.findIndex(Qe => Qe === ze), Kt = j.some(Qe => H.includes(Qe));
                            if (kt && x && Kt) {
                                const Qe = I(Ke, H, G),
                                    ct = Array.from(G);
                                u == null || u(!Pe, ct.map(et => R(et)), Qe.map(et => R(et))), te(ct, "multiple")
                            } else {
                                const Qe = j;
                                if (x) {
                                    const ct = Pe ? bt(Qe, ze) : $t(Qe, ze);
                                    se(ze, !Pe, ct, Ze)
                                } else {
                                    const ct = Ut([].concat($e(Qe), [ze]), !0, _, A),
                                        {
                                            checkedKeys: et,
                                            halfCheckedKeys: Ct
                                        } = ct;
                                    let gt = et;
                                    if (Pe) {
                                        const Fe = new Set(et);
                                        Fe.delete(ze), gt = Ut(Array.from(Fe), {
                                            checked: !1,
                                            halfCheckedKeys: Ct
                                        }, _, A).checkedKeys
                                    }
                                    se(ze, !Pe, gt, Ze)
                                }
                            }
                            $(Pe ? null : Ke)
                        }
                    })),
                    checked: Pe
                }
            };
            const pe = (J, ue, be) => {
                const {
                    node: De,
                    checked: ze
                } = ie(J, ue, be);
                return g ? g(ze, ue, be, De) : De
            };
            if (!U.includes(Rt))
                if (U.findIndex(J => {
                        var ue;
                        return ((ue = J[vn]) === null || ue === void 0 ? void 0 : ue.columnType) === "EXPAND_COLUMN"
                    }) === 0) {
                    const [J, ...ue] = U;
                    U = [J, Rt].concat($e(ue))
                } else U = [Rt].concat($e(U));
            const oe = U.indexOf(Rt);
            U = U.filter((J, ue) => J !== Rt || ue === oe);
            const xe = U[oe - 1],
                Ee = U[oe + 1];
            let ye = h;
            ye === void 0 && ((Ee == null ? void 0 : Ee.fixed) !== void 0 ? ye = Ee.fixed : (xe == null ? void 0 : xe.fixed) !== void 0 && (ye = xe.fixed)), ye && xe && ((q = xe[vn]) === null || q === void 0 ? void 0 : q.columnType) === "EXPAND_COLUMN" && xe.fixed === void 0 && (xe.fixed = ye);
            const Xe = F(`${y}-selection-col`, {
                    [`${y}-selection-col-with-dropdown`]: v && m === "checkbox"
                }),
                _e = () => t != null && t.columnTitle ? typeof t.columnTitle == "function" ? t.columnTitle(ee) : t.columnTitle : Ce,
                Ie = {
                    fixed: ye,
                    width: p,
                    className: `${y}-selection-column`,
                    title: _e(),
                    render: pe,
                    onCell: t.onCell,
                    [vn]: {
                        className: Xe
                    }
                };
            return U.map(J => J === Rt ? Ie : J)
        }, [O, z, t, j, Q, re, p, le, N, k, u, se, A]), Q]
    };

function zd(e, t) {
    return e._antProxy = e._antProxy || {}, Object.keys(t).forEach(r => {
        if (!(r in e._antProxy)) {
            const n = e[r];
            e._antProxy[r] = n, e[r] = t[r]
        }
    }), e
}

function Md(e, t) {
    return i.useImperativeHandle(e, () => {
        const r = t(),
            {
                nativeElement: n
            } = r;
        return typeof Proxy < "u" ? new Proxy(n, {
            get(o, l) {
                return r[l] ? r[l] : Reflect.get(o, l)
            }
        }) : zd(n, r)
    })
}

function Bd(e) {
    return function(r) {
        let {
            prefixCls: n,
            onExpand: o,
            record: l,
            expanded: c,
            expandable: a
        } = r;
        const s = `${n}-row-expand-icon`;
        return i.createElement("button", {
            type: "button",
            onClick: d => {
                o(l, d), d.stopPropagation()
            },
            className: F(s, {
                [`${s}-spaced`]: !a,
                [`${s}-expanded`]: a && c,
                [`${s}-collapsed`]: a && !c
            }),
            "aria-label": c ? e.collapse : e.expand,
            "aria-expanded": c
        })
    }
}

function Ld(e) {
    return (r, n) => {
        const o = r.querySelector(`.${e}-container`);
        let l = n;
        if (o) {
            const c = getComputedStyle(o),
                a = parseInt(c.borderLeftWidth, 10),
                s = parseInt(c.borderRightWidth, 10);
            l = n - a - s
        }
        return l
    }
}

function At(e, t) {
    return "key" in e && e.key !== void 0 && e.key !== null ? e.key : e.dataIndex ? Array.isArray(e.dataIndex) ? e.dataIndex.join(".") : e.dataIndex : t
}

function wn(e, t) {
    return t ? `${t}-${e}` : `${e}`
}

function An(e, t) {
    return typeof e == "function" ? e(t) : e
}

function _d(e, t) {
    const r = An(e, t);
    return Object.prototype.toString.call(r) === "[object Object]" ? "" : r
}
var jd = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "64 64 896 896",
            focusable: "false"
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z"
            }
        }]
    },
    name: "filter",
    theme: "filled"
};
const Ad = jd;
var Hd = function(t, r) {
        return i.createElement(rt, de({}, t, {
            ref: r,
            icon: Ad
        }))
    },
    Fd = i.forwardRef(Hd);
const Vd = Fd;

function Wd(e) {
    const t = i.useRef(e),
        r = ra();
    return [() => t.current, n => {
        t.current = n, r()
    }]
}

function Xd(e) {
    var t = e.dropPosition,
        r = e.dropLevelOffset,
        n = e.indent,
        o = {
            pointerEvents: "none",
            position: "absolute",
            right: 0,
            backgroundColor: "red",
            height: 2
        };
    switch (t) {
        case -1:
            o.top = 0, o.left = -r * n;
            break;
        case 1:
            o.bottom = 0, o.left = -r * n;
            break;
        case 0:
            o.bottom = 0, o.left = n;
            break
    }
    return i.createElement("div", {
        style: o
    })
}

function ja(e) {
    if (e == null) throw new TypeError("Cannot destructure " + e)
}

function qd(e, t) {
    var r = i.useState(!1),
        n = ve(r, 2),
        o = n[0],
        l = n[1];
    xt(function() {
        if (o) return e(),
            function() {
                t()
            }
    }, [o]), xt(function() {
        return l(!0),
            function() {
                l(!1)
            }
    }, [])
}
var Ud = ["className", "style", "motion", "motionNodes", "motionType", "onMotionStart", "onMotionEnd", "active", "treeNodeRequiredProps"],
    Aa = function(t, r) {
        var n = t.className,
            o = t.style,
            l = t.motion,
            c = t.motionNodes,
            a = t.motionType,
            s = t.onMotionStart,
            d = t.onMotionEnd,
            f = t.active,
            u = t.treeNodeRequiredProps,
            p = ot(t, Ud),
            m = i.useState(!0),
            v = ve(m, 2),
            h = v[0],
            g = v[1],
            b = i.useContext(Kr),
            x = b.prefixCls,
            y = c && a !== "hide";
        xt(function() {
            c && y !== h && g(y)
        }, [c]);
        var w = function() {
                c && s()
            },
            S = i.useRef(!1),
            R = function() {
                c && !S.current && (S.current = !0, d())
            };
        qd(w, R);
        var O = function(C) {
            y === C && R()
        };
        return c ? i.createElement(Ri, de({
            ref: r,
            visible: h
        }, l, {
            motionAppear: a === "show",
            onVisibleChanged: O
        }), function(N, C) {
            var P = N.className,
                M = N.style;
            return i.createElement("div", {
                ref: C,
                className: F("".concat(x, "-treenode-motion"), P),
                style: M
            }, c.map(function(E) {
                var I = Object.assign({}, (ja(E.data), E.data)),
                    $ = E.title,
                    D = E.key,
                    B = E.isStart,
                    T = E.isEnd;
                delete I.children;
                var L = mn(D, u);
                return i.createElement(en, de({}, I, L, {
                    title: $,
                    active: f,
                    data: E.data,
                    key: D,
                    isStart: B,
                    isEnd: T
                }))
            }))
        }) : i.createElement(en, de({
            domRef: r,
            className: n,
            style: o
        }, p, {
            active: f
        }))
    };
Aa.displayName = "MotionTreeNode";
var Gd = i.forwardRef(Aa);

function Yd() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
        r = e.length,
        n = t.length;
    if (Math.abs(r - n) !== 1) return {
        add: !1,
        key: null
    };

    function o(l, c) {
        var a = new Map;
        l.forEach(function(d) {
            a.set(d, !0)
        });
        var s = c.filter(function(d) {
            return !a.has(d)
        });
        return s.length === 1 ? s[0] : null
    }
    return r < n ? {
        add: !0,
        key: o(e, t)
    } : {
        add: !1,
        key: o(t, e)
    }
}

function $o(e, t, r) {
    var n = e.findIndex(function(a) {
            return a.key === r
        }),
        o = e[n + 1],
        l = t.findIndex(function(a) {
            return a.key === r
        });
    if (o) {
        var c = t.findIndex(function(a) {
            return a.key === o.key
        });
        return t.slice(l + 1, c)
    }
    return t.slice(l + 1)
}
var Jd = ["prefixCls", "data", "selectable", "checkable", "expandedKeys", "selectedKeys", "checkedKeys", "loadedKeys", "loadingKeys", "halfCheckedKeys", "keyEntities", "disabled", "dragging", "dragOverNodeKey", "dropPosition", "motion", "height", "itemHeight", "virtual", "focusable", "activeItem", "focused", "tabIndex", "onKeyDown", "onFocus", "onBlur", "onActiveChange", "onListChangeStart", "onListChangeEnd"],
    Eo = {
        width: 0,
        height: 0,
        display: "flex",
        overflow: "hidden",
        opacity: 0,
        border: 0,
        padding: 0,
        margin: 0
    },
    Zd = function() {},
    Ht = "RC_TREE_MOTION_".concat(Math.random()),
    vr = {
        key: Ht
    },
    Ha = {
        key: Ht,
        level: 0,
        index: 0,
        pos: "0",
        node: vr,
        nodes: [vr]
    },
    No = {
        parent: null,
        children: [],
        pos: Ha.pos,
        data: vr,
        title: null,
        key: Ht,
        isStart: [],
        isEnd: []
    };

function Oo(e, t, r, n) {
    return t === !1 || !r ? e : e.slice(0, Math.ceil(r / n) + 1)
}

function Ro(e) {
    var t = e.key,
        r = e.pos;
    return Cn(t, r)
}

function Qd(e) {
    for (var t = String(e.data.key), r = e; r.parent;) r = r.parent, t = "".concat(r.data.key, " > ").concat(t);
    return t
}
var Fa = i.forwardRef(function(e, t) {
    var r = e.prefixCls,
        n = e.data;
    e.selectable, e.checkable;
    var o = e.expandedKeys,
        l = e.selectedKeys,
        c = e.checkedKeys,
        a = e.loadedKeys,
        s = e.loadingKeys,
        d = e.halfCheckedKeys,
        f = e.keyEntities,
        u = e.disabled,
        p = e.dragging,
        m = e.dragOverNodeKey,
        v = e.dropPosition,
        h = e.motion,
        g = e.height,
        b = e.itemHeight,
        x = e.virtual,
        y = e.focusable,
        w = e.activeItem,
        S = e.focused,
        R = e.tabIndex,
        O = e.onKeyDown,
        N = e.onFocus,
        C = e.onBlur,
        P = e.onActiveChange,
        M = e.onListChangeStart,
        E = e.onListChangeEnd,
        I = ot(e, Jd),
        $ = i.useRef(null),
        D = i.useRef(null);
    i.useImperativeHandle(t, function() {
        return {
            scrollTo: function(ie) {
                $.current.scrollTo(ie)
            },
            getIndentWidth: function() {
                return D.current.offsetWidth
            }
        }
    });
    var B = i.useState(o),
        T = ve(B, 2),
        L = T[0],
        _ = T[1],
        z = i.useState(n),
        k = ve(z, 2),
        A = k[0],
        j = k[1],
        ae = i.useState(n),
        Q = ve(ae, 2),
        re = Q[0],
        te = Q[1],
        se = i.useState([]),
        le = ve(se, 2),
        fe = le[0],
        ne = le[1],
        q = i.useState(null),
        U = ve(q, 2),
        G = U[0],
        H = U[1],
        ge = i.useRef(n);
    ge.current = n;

    function V() {
        var ee = ge.current;
        j(ee), te(ee), ne([]), H(null), E()
    }
    xt(function() {
        _(o);
        var ee = Yd(L, o);
        if (ee.key !== null)
            if (ee.add) {
                var ie = A.findIndex(function(Xe) {
                        var _e = Xe.key;
                        return _e === ee.key
                    }),
                    pe = Oo($o(A, n, ee.key), x, g, b),
                    oe = A.slice();
                oe.splice(ie + 1, 0, No), te(oe), ne(pe), H("show")
            } else {
                var xe = n.findIndex(function(Xe) {
                        var _e = Xe.key;
                        return _e === ee.key
                    }),
                    Ee = Oo($o(n, A, ee.key), x, g, b),
                    ye = n.slice();
                ye.splice(xe + 1, 0, No), te(ye), ne(Ee), H("hide")
            }
        else A !== n && (j(n), te(n))
    }, [o, n]), i.useEffect(function() {
        p || V()
    }, [p]);
    var ce = h ? re : n,
        Ce = {
            expandedKeys: o,
            selectedKeys: l,
            loadedKeys: a,
            loadingKeys: s,
            checkedKeys: c,
            halfCheckedKeys: d,
            dragOverNodeKey: m,
            dropPosition: v,
            keyEntities: f
        };
    return i.createElement(i.Fragment, null, S && w && i.createElement("span", {
        style: Eo,
        "aria-live": "assertive"
    }, Qd(w)), i.createElement("div", null, i.createElement("input", {
        style: Eo,
        disabled: y === !1 || u,
        tabIndex: y !== !1 ? R : null,
        onKeyDown: O,
        onFocus: N,
        onBlur: C,
        value: "",
        onChange: Zd,
        "aria-label": "for screen reader"
    })), i.createElement("div", {
        className: "".concat(r, "-treenode"),
        "aria-hidden": !0,
        style: {
            position: "absolute",
            pointerEvents: "none",
            visibility: "hidden",
            height: 0,
            overflow: "hidden",
            border: 0,
            padding: 0
        }
    }, i.createElement("div", {
        className: "".concat(r, "-indent")
    }, i.createElement("div", {
        ref: D,
        className: "".concat(r, "-indent-unit")
    }))), i.createElement(qo, de({}, I, {
        data: ce,
        itemKey: Ro,
        height: g,
        fullHeight: !1,
        virtual: x,
        itemHeight: b,
        prefixCls: "".concat(r, "-list"),
        ref: $,
        onVisibleChange: function(ie, pe) {
            var oe = new Set(ie),
                xe = pe.filter(function(Ee) {
                    return !oe.has(Ee)
                });
            xe.some(function(Ee) {
                return Ro(Ee) === Ht
            }) && V()
        }
    }), function(ee) {
        var ie = ee.pos,
            pe = Object.assign({}, (ja(ee.data), ee.data)),
            oe = ee.title,
            xe = ee.key,
            Ee = ee.isStart,
            ye = ee.isEnd,
            Xe = Cn(xe, ie);
        delete pe.key, delete pe.children;
        var _e = mn(Xe, Ce);
        return i.createElement(Gd, de({}, pe, _e, {
            title: oe,
            active: !!w && xe === w.key,
            pos: ie,
            data: ee.data,
            isStart: Ee,
            isEnd: ye,
            motion: h,
            motionNodes: xe === Ht ? fe : null,
            motionType: G,
            onMotionStart: M,
            onMotionEnd: V,
            treeNodeRequiredProps: Ce,
            onMouseMove: function() {
                P(null)
            }
        }))
    }))
});
Fa.displayName = "NodeList";
var eu = 10,
    zr = function(e) {
        Uo(r, e);
        var t = Go(r);

        function r() {
            var n;
            Yo(this, r);
            for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++) l[c] = arguments[c];
            return n = t.call.apply(t, [this].concat(l)), K(Z(n), "destroyed", !1), K(Z(n), "delayedDragEnterLogic", void 0), K(Z(n), "loadingRetryTimes", {}), K(Z(n), "state", {
                keyEntities: {},
                indent: null,
                selectedKeys: [],
                checkedKeys: [],
                halfCheckedKeys: [],
                loadedKeys: [],
                loadingKeys: [],
                expandedKeys: [],
                draggingNodeKey: null,
                dragChildrenKeys: [],
                dropTargetKey: null,
                dropPosition: null,
                dropContainerKey: null,
                dropLevelOffset: null,
                dropTargetPos: null,
                dropAllowed: !0,
                dragOverNodeKey: null,
                treeData: [],
                flattenNodes: [],
                focused: !1,
                activeKey: null,
                listChanging: !1,
                prevProps: null,
                fieldNames: Qt()
            }), K(Z(n), "dragStartMousePosition", null), K(Z(n), "dragNode", void 0), K(Z(n), "currentMouseOverDroppableNodeKey", null), K(Z(n), "listRef", i.createRef()), K(Z(n), "onNodeDragStart", function(a, s) {
                var d = n.state,
                    f = d.expandedKeys,
                    u = d.keyEntities,
                    p = n.props.onDragStart,
                    m = s.props.eventKey;
                n.dragNode = s, n.dragStartMousePosition = {
                    x: a.clientX,
                    y: a.clientY
                };
                var v = bt(f, m);
                n.setState({
                    draggingNodeKey: m,
                    dragChildrenKeys: Pd(m, u),
                    indent: n.listRef.current.getIndentWidth()
                }), n.setExpandedKeys(v), window.addEventListener("dragend", n.onWindowDragEnd), p == null || p({
                    event: a,
                    node: He(s.props)
                })
            }), K(Z(n), "onNodeDragEnter", function(a, s) {
                var d = n.state,
                    f = d.expandedKeys,
                    u = d.keyEntities,
                    p = d.dragChildrenKeys,
                    m = d.flattenNodes,
                    v = d.indent,
                    h = n.props,
                    g = h.onDragEnter,
                    b = h.onExpand,
                    x = h.allowDrop,
                    y = h.direction,
                    w = s.props,
                    S = w.pos,
                    R = w.eventKey,
                    O = Z(n),
                    N = O.dragNode;
                if (n.currentMouseOverDroppableNodeKey !== R && (n.currentMouseOverDroppableNodeKey = R), !N) {
                    n.resetDragState();
                    return
                }
                var C = Co(a, N, s, v, n.dragStartMousePosition, x, m, u, f, y),
                    P = C.dropPosition,
                    M = C.dropLevelOffset,
                    E = C.dropTargetKey,
                    I = C.dropContainerKey,
                    $ = C.dropTargetPos,
                    D = C.dropAllowed,
                    B = C.dragOverNodeKey;
                if (p.indexOf(E) !== -1 || !D) {
                    n.resetDragState();
                    return
                }
                if (n.delayedDragEnterLogic || (n.delayedDragEnterLogic = {}), Object.keys(n.delayedDragEnterLogic).forEach(function(T) {
                        clearTimeout(n.delayedDragEnterLogic[T])
                    }), N.props.eventKey !== s.props.eventKey && (a.persist(), n.delayedDragEnterLogic[S] = window.setTimeout(function() {
                        if (n.state.draggingNodeKey !== null) {
                            var T = $e(f),
                                L = lt(u, s.props.eventKey);
                            L && (L.children || []).length && (T = $t(f, s.props.eventKey)), "expandedKeys" in n.props || n.setExpandedKeys(T), b == null || b(T, {
                                node: He(s.props),
                                expanded: !0,
                                nativeEvent: a.nativeEvent
                            })
                        }
                    }, 800)), N.props.eventKey === E && M === 0) {
                    n.resetDragState();
                    return
                }
                n.setState({
                    dragOverNodeKey: B,
                    dropPosition: P,
                    dropLevelOffset: M,
                    dropTargetKey: E,
                    dropContainerKey: I,
                    dropTargetPos: $,
                    dropAllowed: D
                }), g == null || g({
                    event: a,
                    node: He(s.props),
                    expandedKeys: f
                })
            }), K(Z(n), "onNodeDragOver", function(a, s) {
                var d = n.state,
                    f = d.dragChildrenKeys,
                    u = d.flattenNodes,
                    p = d.keyEntities,
                    m = d.expandedKeys,
                    v = d.indent,
                    h = n.props,
                    g = h.onDragOver,
                    b = h.allowDrop,
                    x = h.direction,
                    y = Z(n),
                    w = y.dragNode;
                if (w) {
                    var S = Co(a, w, s, v, n.dragStartMousePosition, b, u, p, m, x),
                        R = S.dropPosition,
                        O = S.dropLevelOffset,
                        N = S.dropTargetKey,
                        C = S.dropContainerKey,
                        P = S.dropAllowed,
                        M = S.dropTargetPos,
                        E = S.dragOverNodeKey;
                    f.indexOf(N) !== -1 || !P || (w.props.eventKey === N && O === 0 ? n.state.dropPosition === null && n.state.dropLevelOffset === null && n.state.dropTargetKey === null && n.state.dropContainerKey === null && n.state.dropTargetPos === null && n.state.dropAllowed === !1 && n.state.dragOverNodeKey === null || n.resetDragState() : R === n.state.dropPosition && O === n.state.dropLevelOffset && N === n.state.dropTargetKey && C === n.state.dropContainerKey && M === n.state.dropTargetPos && P === n.state.dropAllowed && E === n.state.dragOverNodeKey || n.setState({
                        dropPosition: R,
                        dropLevelOffset: O,
                        dropTargetKey: N,
                        dropContainerKey: C,
                        dropTargetPos: M,
                        dropAllowed: P,
                        dragOverNodeKey: E
                    }), g == null || g({
                        event: a,
                        node: He(s.props)
                    }))
                }
            }), K(Z(n), "onNodeDragLeave", function(a, s) {
                n.currentMouseOverDroppableNodeKey === s.props.eventKey && !a.currentTarget.contains(a.relatedTarget) && (n.resetDragState(), n.currentMouseOverDroppableNodeKey = null);
                var d = n.props.onDragLeave;
                d == null || d({
                    event: a,
                    node: He(s.props)
                })
            }), K(Z(n), "onWindowDragEnd", function(a) {
                n.onNodeDragEnd(a, null, !0), window.removeEventListener("dragend", n.onWindowDragEnd)
            }), K(Z(n), "onNodeDragEnd", function(a, s) {
                var d = n.props.onDragEnd;
                n.setState({
                    dragOverNodeKey: null
                }), n.cleanDragState(), d == null || d({
                    event: a,
                    node: He(s.props)
                }), n.dragNode = null, window.removeEventListener("dragend", n.onWindowDragEnd)
            }), K(Z(n), "onNodeDrop", function(a, s) {
                var d, f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
                    u = n.state,
                    p = u.dragChildrenKeys,
                    m = u.dropPosition,
                    v = u.dropTargetKey,
                    h = u.dropTargetPos,
                    g = u.dropAllowed;
                if (g) {
                    var b = n.props.onDrop;
                    if (n.setState({
                            dragOverNodeKey: null
                        }), n.cleanDragState(), v !== null) {
                        var x = X(X({}, mn(v, n.getTreeNodeRequiredProps())), {}, {
                                active: ((d = n.getActiveItem()) === null || d === void 0 ? void 0 : d.key) === v,
                                data: lt(n.state.keyEntities, v).node
                            }),
                            y = p.indexOf(v) !== -1;
                        Pt(!y, "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");
                        var w = Dr(h),
                            S = {
                                event: a,
                                node: He(x),
                                dragNode: n.dragNode ? He(n.dragNode.props) : null,
                                dragNodesKeys: [n.dragNode.props.eventKey].concat(p),
                                dropToGap: m !== 0,
                                dropPosition: m + Number(w[w.length - 1])
                            };
                        f || b == null || b(S), n.dragNode = null
                    }
                }
            }), K(Z(n), "cleanDragState", function() {
                var a = n.state.draggingNodeKey;
                a !== null && n.setState({
                    draggingNodeKey: null,
                    dropPosition: null,
                    dropContainerKey: null,
                    dropTargetKey: null,
                    dropLevelOffset: null,
                    dropAllowed: !0,
                    dragOverNodeKey: null
                }), n.dragStartMousePosition = null, n.currentMouseOverDroppableNodeKey = null
            }), K(Z(n), "triggerExpandActionExpand", function(a, s) {
                var d = n.state,
                    f = d.expandedKeys,
                    u = d.flattenNodes,
                    p = s.expanded,
                    m = s.key,
                    v = s.isLeaf;
                if (!(v || a.shiftKey || a.metaKey || a.ctrlKey)) {
                    var h = u.filter(function(b) {
                            return b.key === m
                        })[0],
                        g = He(X(X({}, mn(m, n.getTreeNodeRequiredProps())), {}, {
                            data: h.data
                        }));
                    n.setExpandedKeys(p ? bt(f, m) : $t(f, m)), n.onNodeExpand(a, g)
                }
            }), K(Z(n), "onNodeClick", function(a, s) {
                var d = n.props,
                    f = d.onClick,
                    u = d.expandAction;
                u === "click" && n.triggerExpandActionExpand(a, s), f == null || f(a, s)
            }), K(Z(n), "onNodeDoubleClick", function(a, s) {
                var d = n.props,
                    f = d.onDoubleClick,
                    u = d.expandAction;
                u === "doubleClick" && n.triggerExpandActionExpand(a, s), f == null || f(a, s)
            }), K(Z(n), "onNodeSelect", function(a, s) {
                var d = n.state.selectedKeys,
                    f = n.state,
                    u = f.keyEntities,
                    p = f.fieldNames,
                    m = n.props,
                    v = m.onSelect,
                    h = m.multiple,
                    g = s.selected,
                    b = s[p.key],
                    x = !g;
                x ? h ? d = $t(d, b) : d = [b] : d = bt(d, b);
                var y = d.map(function(w) {
                    var S = lt(u, w);
                    return S ? S.node : null
                }).filter(function(w) {
                    return w
                });
                n.setUncontrolledState({
                    selectedKeys: d
                }), v == null || v(d, {
                    event: "select",
                    selected: x,
                    node: s,
                    selectedNodes: y,
                    nativeEvent: a.nativeEvent
                })
            }), K(Z(n), "onNodeCheck", function(a, s, d) {
                var f = n.state,
                    u = f.keyEntities,
                    p = f.checkedKeys,
                    m = f.halfCheckedKeys,
                    v = n.props,
                    h = v.checkStrictly,
                    g = v.onCheck,
                    b = s.key,
                    x, y = {
                        event: "check",
                        node: s,
                        checked: d,
                        nativeEvent: a.nativeEvent
                    };
                if (h) {
                    var w = d ? $t(p, b) : bt(p, b),
                        S = bt(m, b);
                    x = {
                        checked: w,
                        halfChecked: S
                    }, y.checkedNodes = w.map(function(M) {
                        return lt(u, M)
                    }).filter(function(M) {
                        return M
                    }).map(function(M) {
                        return M.node
                    }), n.setUncontrolledState({
                        checkedKeys: w
                    })
                } else {
                    var R = Ut([].concat($e(p), [b]), !0, u),
                        O = R.checkedKeys,
                        N = R.halfCheckedKeys;
                    if (!d) {
                        var C = new Set(O);
                        C.delete(b);
                        var P = Ut(Array.from(C), {
                            checked: !1,
                            halfCheckedKeys: N
                        }, u);
                        O = P.checkedKeys, N = P.halfCheckedKeys
                    }
                    x = O, y.checkedNodes = [], y.checkedNodesPositions = [], y.halfCheckedKeys = N, O.forEach(function(M) {
                        var E = lt(u, M);
                        if (E) {
                            var I = E.node,
                                $ = E.pos;
                            y.checkedNodes.push(I), y.checkedNodesPositions.push({
                                node: I,
                                pos: $
                            })
                        }
                    }), n.setUncontrolledState({
                        checkedKeys: O
                    }, !1, {
                        halfCheckedKeys: N
                    })
                }
                g == null || g(x, y)
            }), K(Z(n), "onNodeLoad", function(a) {
                var s, d = a.key,
                    f = n.state.keyEntities,
                    u = lt(f, d);
                if (!(u != null && (s = u.children) !== null && s !== void 0 && s.length)) {
                    var p = new Promise(function(m, v) {
                        n.setState(function(h) {
                            var g = h.loadedKeys,
                                b = g === void 0 ? [] : g,
                                x = h.loadingKeys,
                                y = x === void 0 ? [] : x,
                                w = n.props,
                                S = w.loadData,
                                R = w.onLoad;
                            if (!S || b.indexOf(d) !== -1 || y.indexOf(d) !== -1) return null;
                            var O = S(a);
                            return O.then(function() {
                                var N = n.state.loadedKeys,
                                    C = $t(N, d);
                                R == null || R(C, {
                                    event: "load",
                                    node: a
                                }), n.setUncontrolledState({
                                    loadedKeys: C
                                }), n.setState(function(P) {
                                    return {
                                        loadingKeys: bt(P.loadingKeys, d)
                                    }
                                }), m()
                            }).catch(function(N) {
                                if (n.setState(function(P) {
                                        return {
                                            loadingKeys: bt(P.loadingKeys, d)
                                        }
                                    }), n.loadingRetryTimes[d] = (n.loadingRetryTimes[d] || 0) + 1, n.loadingRetryTimes[d] >= eu) {
                                    var C = n.state.loadedKeys;
                                    Pt(!1, "Retry for `loadData` many times but still failed. No more retry."), n.setUncontrolledState({
                                        loadedKeys: $t(C, d)
                                    }), m()
                                }
                                v(N)
                            }), {
                                loadingKeys: $t(y, d)
                            }
                        })
                    });
                    return p.catch(function() {}), p
                }
            }), K(Z(n), "onNodeMouseEnter", function(a, s) {
                var d = n.props.onMouseEnter;
                d == null || d({
                    event: a,
                    node: s
                })
            }), K(Z(n), "onNodeMouseLeave", function(a, s) {
                var d = n.props.onMouseLeave;
                d == null || d({
                    event: a,
                    node: s
                })
            }), K(Z(n), "onNodeContextMenu", function(a, s) {
                var d = n.props.onRightClick;
                d && (a.preventDefault(), d({
                    event: a,
                    node: s
                }))
            }), K(Z(n), "onFocus", function() {
                var a = n.props.onFocus;
                n.setState({
                    focused: !0
                });
                for (var s = arguments.length, d = new Array(s), f = 0; f < s; f++) d[f] = arguments[f];
                a == null || a.apply(void 0, d)
            }), K(Z(n), "onBlur", function() {
                var a = n.props.onBlur;
                n.setState({
                    focused: !1
                }), n.onActiveChange(null);
                for (var s = arguments.length, d = new Array(s), f = 0; f < s; f++) d[f] = arguments[f];
                a == null || a.apply(void 0, d)
            }), K(Z(n), "getTreeNodeRequiredProps", function() {
                var a = n.state,
                    s = a.expandedKeys,
                    d = a.selectedKeys,
                    f = a.loadedKeys,
                    u = a.loadingKeys,
                    p = a.checkedKeys,
                    m = a.halfCheckedKeys,
                    v = a.dragOverNodeKey,
                    h = a.dropPosition,
                    g = a.keyEntities;
                return {
                    expandedKeys: s || [],
                    selectedKeys: d || [],
                    loadedKeys: f || [],
                    loadingKeys: u || [],
                    checkedKeys: p || [],
                    halfCheckedKeys: m || [],
                    dragOverNodeKey: v,
                    dropPosition: h,
                    keyEntities: g
                }
            }), K(Z(n), "setExpandedKeys", function(a) {
                var s = n.state,
                    d = s.treeData,
                    f = s.fieldNames,
                    u = Un(d, a, f);
                n.setUncontrolledState({
                    expandedKeys: a,
                    flattenNodes: u
                }, !0)
            }), K(Z(n), "onNodeExpand", function(a, s) {
                var d = n.state.expandedKeys,
                    f = n.state,
                    u = f.listChanging,
                    p = f.fieldNames,
                    m = n.props,
                    v = m.onExpand,
                    h = m.loadData,
                    g = s.expanded,
                    b = s[p.key];
                if (!u) {
                    var x = d.indexOf(b),
                        y = !g;
                    if (Pt(g && x !== -1 || !g && x === -1, "Expand state not sync with index check"), y ? d = $t(d, b) : d = bt(d, b), n.setExpandedKeys(d), v == null || v(d, {
                            node: s,
                            expanded: y,
                            nativeEvent: a.nativeEvent
                        }), y && h) {
                        var w = n.onNodeLoad(s);
                        w && w.then(function() {
                            var S = Un(n.state.treeData, d, p);
                            n.setUncontrolledState({
                                flattenNodes: S
                            })
                        }).catch(function() {
                            var S = n.state.expandedKeys,
                                R = bt(S, b);
                            n.setExpandedKeys(R)
                        })
                    }
                }
            }), K(Z(n), "onListChangeStart", function() {
                n.setUncontrolledState({
                    listChanging: !0
                })
            }), K(Z(n), "onListChangeEnd", function() {
                setTimeout(function() {
                    n.setUncontrolledState({
                        listChanging: !1
                    })
                })
            }), K(Z(n), "onActiveChange", function(a) {
                var s = n.state.activeKey,
                    d = n.props,
                    f = d.onActiveChange,
                    u = d.itemScrollOffset,
                    p = u === void 0 ? 0 : u;
                s !== a && (n.setState({
                    activeKey: a
                }), a !== null && n.scrollTo({
                    key: a,
                    offset: p
                }), f == null || f(a))
            }), K(Z(n), "getActiveItem", function() {
                var a = n.state,
                    s = a.activeKey,
                    d = a.flattenNodes;
                return s === null ? null : d.find(function(f) {
                    var u = f.key;
                    return u === s
                }) || null
            }), K(Z(n), "offsetActiveKey", function(a) {
                var s = n.state,
                    d = s.flattenNodes,
                    f = s.activeKey,
                    u = d.findIndex(function(v) {
                        var h = v.key;
                        return h === f
                    });
                u === -1 && a < 0 && (u = d.length), u = (u + a + d.length) % d.length;
                var p = d[u];
                if (p) {
                    var m = p.key;
                    n.onActiveChange(m)
                } else n.onActiveChange(null)
            }), K(Z(n), "onKeyDown", function(a) {
                var s = n.state,
                    d = s.activeKey,
                    f = s.expandedKeys,
                    u = s.checkedKeys,
                    p = s.fieldNames,
                    m = n.props,
                    v = m.onKeyDown,
                    h = m.checkable,
                    g = m.selectable;
                switch (a.which) {
                    case We.UP:
                        {
                            n.offsetActiveKey(-1),
                            a.preventDefault();
                            break
                        }
                    case We.DOWN:
                        {
                            n.offsetActiveKey(1),
                            a.preventDefault();
                            break
                        }
                }
                var b = n.getActiveItem();
                if (b && b.data) {
                    var x = n.getTreeNodeRequiredProps(),
                        y = b.data.isLeaf === !1 || !!(b.data[p.children] || []).length,
                        w = He(X(X({}, mn(d, x)), {}, {
                            data: b.data,
                            active: !0
                        }));
                    switch (a.which) {
                        case We.LEFT:
                            {
                                y && f.includes(d) ? n.onNodeExpand({}, w) : b.parent && n.onActiveChange(b.parent.key),
                                a.preventDefault();
                                break
                            }
                        case We.RIGHT:
                            {
                                y && !f.includes(d) ? n.onNodeExpand({}, w) : b.children && b.children.length && n.onActiveChange(b.children[0].key),
                                a.preventDefault();
                                break
                            }
                        case We.ENTER:
                        case We.SPACE:
                            {
                                h && !w.disabled && w.checkable !== !1 && !w.disableCheckbox ? n.onNodeCheck({}, w, !u.includes(d)) : !h && g && !w.disabled && w.selectable !== !1 && n.onNodeSelect({}, w);
                                break
                            }
                    }
                }
                v == null || v(a)
            }), K(Z(n), "setUncontrolledState", function(a) {
                var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                    d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                if (!n.destroyed) {
                    var f = !1,
                        u = !0,
                        p = {};
                    Object.keys(a).forEach(function(m) {
                        if (m in n.props) {
                            u = !1;
                            return
                        }
                        f = !0, p[m] = a[m]
                    }), f && (!s || u) && n.setState(X(X({}, p), d))
                }
            }), K(Z(n), "scrollTo", function(a) {
                n.listRef.current.scrollTo(a)
            }), n
        }
        return Jo(r, [{
            key: "componentDidMount",
            value: function() {
                this.destroyed = !1, this.onUpdated()
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.onUpdated()
            }
        }, {
            key: "onUpdated",
            value: function() {
                var o = this.props,
                    l = o.activeKey,
                    c = o.itemScrollOffset,
                    a = c === void 0 ? 0 : c;
                l !== void 0 && l !== this.state.activeKey && (this.setState({
                    activeKey: l
                }), l !== null && this.scrollTo({
                    key: l,
                    offset: a
                }))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                window.removeEventListener("dragend", this.onWindowDragEnd), this.destroyed = !0
            }
        }, {
            key: "resetDragState",
            value: function() {
                this.setState({
                    dragOverNodeKey: null,
                    dropPosition: null,
                    dropLevelOffset: null,
                    dropTargetKey: null,
                    dropContainerKey: null,
                    dropTargetPos: null,
                    dropAllowed: !1
                })
            }
        }, {
            key: "render",
            value: function() {
                var o = this.state,
                    l = o.focused,
                    c = o.flattenNodes,
                    a = o.keyEntities,
                    s = o.draggingNodeKey,
                    d = o.activeKey,
                    f = o.dropLevelOffset,
                    u = o.dropContainerKey,
                    p = o.dropTargetKey,
                    m = o.dropPosition,
                    v = o.dragOverNodeKey,
                    h = o.indent,
                    g = this.props,
                    b = g.prefixCls,
                    x = g.className,
                    y = g.style,
                    w = g.showLine,
                    S = g.focusable,
                    R = g.tabIndex,
                    O = R === void 0 ? 0 : R,
                    N = g.selectable,
                    C = g.showIcon,
                    P = g.icon,
                    M = g.switcherIcon,
                    E = g.draggable,
                    I = g.checkable,
                    $ = g.checkStrictly,
                    D = g.disabled,
                    B = g.motion,
                    T = g.loadData,
                    L = g.filterTreeNode,
                    _ = g.height,
                    z = g.itemHeight,
                    k = g.virtual,
                    A = g.titleRender,
                    j = g.dropIndicatorRender,
                    ae = g.onContextMenu,
                    Q = g.onScroll,
                    re = g.direction,
                    te = g.rootClassName,
                    se = g.rootStyle,
                    le = Zt(this.props, {
                        aria: !0,
                        data: !0
                    }),
                    fe;
                return E && (vt(E) === "object" ? fe = E : typeof E == "function" ? fe = {
                    nodeDraggable: E
                } : fe = {}), i.createElement(Kr.Provider, {
                    value: {
                        prefixCls: b,
                        selectable: N,
                        showIcon: C,
                        icon: P,
                        switcherIcon: M,
                        draggable: fe,
                        draggingNodeKey: s,
                        checkable: I,
                        checkStrictly: $,
                        disabled: D,
                        keyEntities: a,
                        dropLevelOffset: f,
                        dropContainerKey: u,
                        dropTargetKey: p,
                        dropPosition: m,
                        dragOverNodeKey: v,
                        indent: h,
                        direction: re,
                        dropIndicatorRender: j,
                        loadData: T,
                        filterTreeNode: L,
                        titleRender: A,
                        onNodeClick: this.onNodeClick,
                        onNodeDoubleClick: this.onNodeDoubleClick,
                        onNodeExpand: this.onNodeExpand,
                        onNodeSelect: this.onNodeSelect,
                        onNodeCheck: this.onNodeCheck,
                        onNodeLoad: this.onNodeLoad,
                        onNodeMouseEnter: this.onNodeMouseEnter,
                        onNodeMouseLeave: this.onNodeMouseLeave,
                        onNodeContextMenu: this.onNodeContextMenu,
                        onNodeDragStart: this.onNodeDragStart,
                        onNodeDragEnter: this.onNodeDragEnter,
                        onNodeDragOver: this.onNodeDragOver,
                        onNodeDragLeave: this.onNodeDragLeave,
                        onNodeDragEnd: this.onNodeDragEnd,
                        onNodeDrop: this.onNodeDrop
                    }
                }, i.createElement("div", {
                    role: "tree",
                    className: F(b, x, te, K(K(K({}, "".concat(b, "-show-line"), w), "".concat(b, "-focused"), l), "".concat(b, "-active-focused"), d !== null)),
                    style: se
                }, i.createElement(Fa, de({
                    ref: this.listRef,
                    prefixCls: b,
                    style: y,
                    data: c,
                    disabled: D,
                    selectable: N,
                    checkable: !!I,
                    motion: B,
                    dragging: s !== null,
                    height: _,
                    itemHeight: z,
                    virtual: k,
                    focusable: S,
                    focused: l,
                    tabIndex: O,
                    activeItem: this.getActiveItem(),
                    onFocus: this.onFocus,
                    onBlur: this.onBlur,
                    onKeyDown: this.onKeyDown,
                    onActiveChange: this.onActiveChange,
                    onListChangeStart: this.onListChangeStart,
                    onListChangeEnd: this.onListChangeEnd,
                    onContextMenu: ae,
                    onScroll: Q
                }, this.getTreeNodeRequiredProps(), le))))
            }
        }], [{
            key: "getDerivedStateFromProps",
            value: function(o, l) {
                var c = l.prevProps,
                    a = {
                        prevProps: o
                    };

                function s(R) {
                    return !c && R in o || c && c[R] !== o[R]
                }
                var d, f = l.fieldNames;
                if (s("fieldNames") && (f = Qt(o.fieldNames), a.fieldNames = f), s("treeData") ? d = o.treeData : s("children") && (Pt(!1, "`children` of Tree is deprecated. Please use `treeData` instead."), d = la(o.children)), d) {
                    a.treeData = d;
                    var u = Or(d, {
                        fieldNames: f
                    });
                    a.keyEntities = X(K({}, Ht, Ha), u.keyEntities)
                }
                var p = a.keyEntities || l.keyEntities;
                if (s("expandedKeys") || c && s("autoExpandParent")) a.expandedKeys = o.autoExpandParent || !c && o.defaultExpandParent ? ur(o.expandedKeys, p) : o.expandedKeys;
                else if (!c && o.defaultExpandAll) {
                    var m = X({}, p);
                    delete m[Ht], a.expandedKeys = Object.keys(m).map(function(R) {
                        return m[R].key
                    })
                } else !c && o.defaultExpandedKeys && (a.expandedKeys = o.autoExpandParent || o.defaultExpandParent ? ur(o.defaultExpandedKeys, p) : o.defaultExpandedKeys);
                if (a.expandedKeys || delete a.expandedKeys, d || a.expandedKeys) {
                    var v = Un(d || l.treeData, a.expandedKeys || l.expandedKeys, f);
                    a.flattenNodes = v
                }
                if (o.selectable && (s("selectedKeys") ? a.selectedKeys = So(o.selectedKeys, o) : !c && o.defaultSelectedKeys && (a.selectedKeys = So(o.defaultSelectedKeys, o))), o.checkable) {
                    var h;
                    if (s("checkedKeys") ? h = Qn(o.checkedKeys) || {} : !c && o.defaultCheckedKeys ? h = Qn(o.defaultCheckedKeys) || {} : d && (h = Qn(o.checkedKeys) || {
                            checkedKeys: l.checkedKeys,
                            halfCheckedKeys: l.halfCheckedKeys
                        }), h) {
                        var g = h,
                            b = g.checkedKeys,
                            x = b === void 0 ? [] : b,
                            y = g.halfCheckedKeys,
                            w = y === void 0 ? [] : y;
                        if (!o.checkStrictly) {
                            var S = Ut(x, !0, p);
                            x = S.checkedKeys, w = S.halfCheckedKeys
                        }
                        a.checkedKeys = x, a.halfCheckedKeys = w
                    }
                }
                return s("loadedKeys") && (a.loadedKeys = o.loadedKeys), a
            }
        }]), r
    }(i.Component);
K(zr, "defaultProps", {
    prefixCls: "rc-tree",
    showLine: !1,
    showIcon: !0,
    selectable: !0,
    multiple: !1,
    checkable: !1,
    disabled: !1,
    checkStrictly: !1,
    draggable: !1,
    defaultExpandParent: !0,
    autoExpandParent: !1,
    defaultExpandAll: !1,
    defaultExpandedKeys: [],
    defaultCheckedKeys: [],
    defaultSelectedKeys: [],
    dropIndicatorRender: Xd,
    allowDrop: function() {
        return !0
    },
    expandAction: !1
});
K(zr, "TreeNode", en);
var tu = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "64 64 896 896",
            focusable: "false"
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"
            }
        }]
    },
    name: "file",
    theme: "outlined"
};
const nu = tu;
var ru = function(t, r) {
        return i.createElement(rt, de({}, t, {
            ref: r,
            icon: nu
        }))
    },
    ou = i.forwardRef(ru);
const Va = ou;
var au = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "64 64 896 896",
            focusable: "false"
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"
            }
        }]
    },
    name: "folder-open",
    theme: "outlined"
};
const iu = au;
var lu = function(t, r) {
        return i.createElement(rt, de({}, t, {
            ref: r,
            icon: iu
        }))
    },
    su = i.forwardRef(lu);
const cu = su;
var du = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "64 64 896 896",
            focusable: "false"
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"
            }
        }]
    },
    name: "folder",
    theme: "outlined"
};
const uu = du;
var fu = function(t, r) {
        return i.createElement(rt, de({}, t, {
            ref: r,
            icon: uu
        }))
    },
    pu = i.forwardRef(fu);
const mu = pu;
var vu = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "64 64 896 896",
            focusable: "false"
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z"
            }
        }]
    },
    name: "holder",
    theme: "outlined"
};
const gu = vu;
var hu = function(t, r) {
        return i.createElement(rt, de({}, t, {
            ref: r,
            icon: gu
        }))
    },
    yu = i.forwardRef(hu);
const bu = yu,
    xu = new wr("ant-tree-node-fx-do-not-use", {
        "0%": {
            opacity: 0
        },
        "100%": {
            opacity: 1
        }
    }),
    Cu = (e, t) => ({
        [`.${e}-switcher-icon`]: {
            display: "inline-block",
            fontSize: 10,
            verticalAlign: "baseline",
            svg: {
                transition: `transform ${t.motionDurationSlow}`
            }
        }
    }),
    Su = (e, t) => ({
        [`.${e}-drop-indicator`]: {
            position: "absolute",
            zIndex: 1,
            height: 2,
            backgroundColor: t.colorPrimary,
            borderRadius: 1,
            pointerEvents: "none",
            "&:after": {
                position: "absolute",
                top: -3,
                insetInlineStart: -6,
                width: 8,
                height: 8,
                backgroundColor: "transparent",
                border: `${W(t.lineWidthBold)} solid ${t.colorPrimary}`,
                borderRadius: "50%",
                content: '""'
            }
        }
    }),
    wu = (e, t) => {
        const {
            treeCls: r,
            treeNodeCls: n,
            treeNodePadding: o,
            titleHeight: l,
            nodeSelectedBg: c,
            nodeHoverBg: a
        } = t, s = t.paddingXS;
        return {
            [r]: Object.assign(Object.assign({}, rn(t)), {
                background: t.colorBgContainer,
                borderRadius: t.borderRadius,
                transition: `background-color ${t.motionDurationSlow}`,
                [`&${r}-rtl`]: {
                    [`${r}-switcher`]: {
                        "&_close": {
                            [`${r}-switcher-icon`]: {
                                svg: {
                                    transform: "rotate(90deg)"
                                }
                            }
                        }
                    }
                },
                [`&-focused:not(:hover):not(${r}-active-focused)`]: Object.assign({}, ir(t)),
                [`${r}-list-holder-inner`]: {
                    alignItems: "flex-start"
                },
                [`&${r}-block-node`]: {
                    [`${r}-list-holder-inner`]: {
                        alignItems: "stretch",
                        [`${r}-node-content-wrapper`]: {
                            flex: "auto"
                        },
                        [`${n}.dragging`]: {
                            position: "relative",
                            "&:after": {
                                position: "absolute",
                                top: 0,
                                insetInlineEnd: 0,
                                bottom: o,
                                insetInlineStart: 0,
                                border: `1px solid ${t.colorPrimary}`,
                                opacity: 0,
                                animationName: xu,
                                animationDuration: t.motionDurationSlow,
                                animationPlayState: "running",
                                animationFillMode: "forwards",
                                content: '""',
                                pointerEvents: "none"
                            }
                        }
                    }
                },
                [`${n}`]: {
                    display: "flex",
                    alignItems: "flex-start",
                    padding: `0 0 ${W(o)} 0`,
                    outline: "none",
                    "&-rtl": {
                        direction: "rtl"
                    },
                    "&-disabled": {
                        [`${r}-node-content-wrapper`]: {
                            color: t.colorTextDisabled,
                            cursor: "not-allowed",
                            "&:hover": {
                                background: "transparent"
                            }
                        }
                    },
                    [`&-active ${r}-node-content-wrapper`]: {
                        background: t.controlItemBgHover
                    },
                    [`&:not(${n}-disabled).filter-node ${r}-title`]: {
                        color: "inherit",
                        fontWeight: 500
                    },
                    "&-draggable": {
                        cursor: "grab",
                        [`${r}-draggable-icon`]: {
                            flexShrink: 0,
                            width: l,
                            lineHeight: `${W(l)}`,
                            textAlign: "center",
                            visibility: "visible",
                            opacity: .2,
                            transition: `opacity ${t.motionDurationSlow}`,
                            [`${n}:hover &`]: {
                                opacity: .45
                            }
                        },
                        [`&${n}-disabled`]: {
                            [`${r}-draggable-icon`]: {
                                visibility: "hidden"
                            }
                        }
                    }
                },
                [`${r}-indent`]: {
                    alignSelf: "stretch",
                    whiteSpace: "nowrap",
                    userSelect: "none",
                    "&-unit": {
                        display: "inline-block",
                        width: l
                    }
                },
                [`${r}-draggable-icon`]: {
                    visibility: "hidden"
                },
                [`${r}-switcher`]: Object.assign(Object.assign({}, Cu(e, t)), {
                    position: "relative",
                    flex: "none",
                    alignSelf: "stretch",
                    width: l,
                    margin: 0,
                    lineHeight: `${W(l)}`,
                    textAlign: "center",
                    cursor: "pointer",
                    userSelect: "none",
                    transition: `all ${t.motionDurationSlow}`,
                    borderRadius: t.borderRadius,
                    "&-noop": {
                        cursor: "unset"
                    },
                    [`&:not(${r}-switcher-noop):hover`]: {
                        backgroundColor: t.colorBgTextHover
                    },
                    "&_close": {
                        [`${r}-switcher-icon`]: {
                            svg: {
                                transform: "rotate(-90deg)"
                            }
                        }
                    },
                    "&-loading-icon": {
                        color: t.colorPrimary
                    },
                    "&-leaf-line": {
                        position: "relative",
                        zIndex: 1,
                        display: "inline-block",
                        width: "100%",
                        height: "100%",
                        "&:before": {
                            position: "absolute",
                            top: 0,
                            insetInlineEnd: t.calc(l).div(2).equal(),
                            bottom: t.calc(o).mul(-1).equal(),
                            marginInlineStart: -1,
                            borderInlineEnd: `1px solid ${t.colorBorder}`,
                            content: '""'
                        },
                        "&:after": {
                            position: "absolute",
                            width: t.calc(t.calc(l).div(2).equal()).mul(.8).equal(),
                            height: t.calc(l).div(2).equal(),
                            borderBottom: `1px solid ${t.colorBorder}`,
                            content: '""'
                        }
                    }
                }),
                [`${r}-checkbox`]: {
                    top: "initial",
                    marginInlineEnd: s,
                    alignSelf: "flex-start",
                    marginTop: t.marginXXS
                },
                [`${r}-node-content-wrapper, ${r}-checkbox + span`]: {
                    position: "relative",
                    zIndex: "auto",
                    minHeight: l,
                    margin: 0,
                    padding: `0 ${W(t.calc(t.paddingXS).div(2).equal())}`,
                    color: "inherit",
                    lineHeight: `${W(l)}`,
                    background: "transparent",
                    borderRadius: t.borderRadius,
                    cursor: "pointer",
                    transition: `all ${t.motionDurationMid}, border 0s, line-height 0s, box-shadow 0s`,
                    "&:hover": {
                        backgroundColor: a
                    },
                    [`&${r}-node-selected`]: {
                        backgroundColor: c
                    },
                    [`${r}-iconEle`]: {
                        display: "inline-block",
                        width: l,
                        height: l,
                        lineHeight: `${W(l)}`,
                        textAlign: "center",
                        verticalAlign: "top",
                        "&:empty": {
                            display: "none"
                        }
                    }
                },
                [`${r}-unselectable ${r}-node-content-wrapper:hover`]: {
                    backgroundColor: "transparent"
                },
                [`${r}-node-content-wrapper`]: Object.assign({
                    lineHeight: `${W(l)}`,
                    userSelect: "none"
                }, Su(e, t)),
                [`${n}.drop-container`]: {
                    "> [draggable]": {
                        boxShadow: `0 0 0 2px ${t.colorPrimary}`
                    }
                },
                "&-show-line": {
                    [`${r}-indent`]: {
                        "&-unit": {
                            position: "relative",
                            height: "100%",
                            "&:before": {
                                position: "absolute",
                                top: 0,
                                insetInlineEnd: t.calc(l).div(2).equal(),
                                bottom: t.calc(o).mul(-1).equal(),
                                borderInlineEnd: `1px solid ${t.colorBorder}`,
                                content: '""'
                            },
                            "&-end": {
                                "&:before": {
                                    display: "none"
                                }
                            }
                        }
                    },
                    [`${r}-switcher`]: {
                        background: "transparent",
                        "&-line-icon": {
                            verticalAlign: "-0.15em"
                        }
                    }
                },
                [`${n}-leaf-last`]: {
                    [`${r}-switcher`]: {
                        "&-leaf-line": {
                            "&:before": {
                                top: "auto !important",
                                bottom: "auto !important",
                                height: `${W(t.calc(l).div(2).equal())} !important`
                            }
                        }
                    }
                }
            })
        }
    },
    $u = e => {
        const {
            treeCls: t,
            treeNodeCls: r,
            treeNodePadding: n,
            directoryNodeSelectedBg: o,
            directoryNodeSelectedColor: l
        } = e;
        return {
            [`${t}${t}-directory`]: {
                [r]: {
                    position: "relative",
                    "&:before": {
                        position: "absolute",
                        top: 0,
                        insetInlineEnd: 0,
                        bottom: n,
                        insetInlineStart: 0,
                        transition: `background-color ${e.motionDurationMid}`,
                        content: '""',
                        pointerEvents: "none"
                    },
                    "&:hover": {
                        "&:before": {
                            background: e.controlItemBgHover
                        }
                    },
                    "> *": {
                        zIndex: 1
                    },
                    [`${t}-switcher`]: {
                        transition: `color ${e.motionDurationMid}`
                    },
                    [`${t}-node-content-wrapper`]: {
                        borderRadius: 0,
                        userSelect: "none",
                        "&:hover": {
                            background: "transparent"
                        },
                        [`&${t}-node-selected`]: {
                            color: l,
                            background: "transparent"
                        }
                    },
                    "&-selected": {
                        "\n            &:hover::before,\n            &::before\n          ": {
                            background: o
                        },
                        [`${t}-switcher`]: {
                            color: l
                        },
                        [`${t}-node-content-wrapper`]: {
                            color: l,
                            background: "transparent"
                        }
                    }
                }
            }
        }
    },
    Eu = (e, t) => {
        const r = `.${e}`,
            n = `${r}-treenode`,
            o = t.calc(t.paddingXS).div(2).equal(),
            l = nn(t, {
                treeCls: r,
                treeNodeCls: n,
                treeNodePadding: o
            });
        return [wu(e, l), $u(l)]
    },
    Nu = e => {
        const {
            controlHeightSM: t
        } = e;
        return {
            titleHeight: t,
            nodeHoverBg: e.controlItemBgHover,
            nodeSelectedBg: e.controlItemBgActive
        }
    },
    Ou = e => {
        const {
            colorTextLightSolid: t,
            colorPrimary: r
        } = e;
        return Object.assign(Object.assign({}, Nu(e)), {
            directoryNodeSelectedColor: t,
            directoryNodeSelectedBg: r
        })
    },
    Ru = tn("Tree", (e, t) => {
        let {
            prefixCls: r
        } = t;
        return [{
            [e.componentCls]: Ii(`${r}-checkbox`, e)
        }, Eu(r, e), Pi(e)]
    }, Ou),
    Io = 4;

function Iu(e) {
    const {
        dropPosition: t,
        dropLevelOffset: r,
        prefixCls: n,
        indent: o,
        direction: l = "ltr"
    } = e, c = l === "ltr" ? "left" : "right", a = l === "ltr" ? "right" : "left", s = {
        [c]: -r * o + Io,
        [a]: 0
    };
    switch (t) {
        case -1:
            s.top = -3;
            break;
        case 1:
            s.bottom = -3;
            break;
        default:
            s.bottom = -3, s[c] = o + Io;
            break
    }
    return Y.createElement("div", {
        style: s,
        className: `${n}-drop-indicator`
    })
}
var Pu = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "0 0 1024 1024",
            focusable: "false"
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
            }
        }]
    },
    name: "caret-down",
    theme: "filled"
};
const Tu = Pu;
var ku = function(t, r) {
        return i.createElement(rt, de({}, t, {
            ref: r,
            icon: Tu
        }))
    },
    Ku = i.forwardRef(ku);
const Du = Ku;
var zu = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "64 64 896 896",
            focusable: "false"
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"
            }
        }, {
            tag: "path",
            attrs: {
                d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"
            }
        }]
    },
    name: "minus-square",
    theme: "outlined"
};
const Mu = zu;
var Bu = function(t, r) {
        return i.createElement(rt, de({}, t, {
            ref: r,
            icon: Mu
        }))
    },
    Lu = i.forwardRef(Bu);
const _u = Lu;
var ju = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "64 64 896 896",
            focusable: "false"
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"
            }
        }, {
            tag: "path",
            attrs: {
                d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"
            }
        }]
    },
    name: "plus-square",
    theme: "outlined"
};
const Au = ju;
var Hu = function(t, r) {
        return i.createElement(rt, de({}, t, {
            ref: r,
            icon: Au
        }))
    },
    Fu = i.forwardRef(Hu);
const Vu = Fu,
    Wu = e => {
        const {
            prefixCls: t,
            switcherIcon: r,
            treeNodeProps: n,
            showLine: o
        } = e, {
            isLeaf: l,
            expanded: c,
            loading: a
        } = n;
        if (a) return i.createElement(Ti, {
            className: `${t}-switcher-loading-icon`
        });
        let s;
        if (o && typeof o == "object" && (s = o.showLeafIcon), l) {
            if (!o) return null;
            if (typeof s != "boolean" && s) {
                const u = typeof s == "function" ? s(n) : s,
                    p = `${t}-switcher-line-custom-icon`;
                return i.isValidElement(u) ? Yt(u, {
                    className: F(u.props.className || "", p)
                }) : u
            }
            return s ? i.createElement(Va, {
                className: `${t}-switcher-line-icon`
            }) : i.createElement("span", {
                className: `${t}-switcher-leaf-line`
            })
        }
        const d = `${t}-switcher-icon`,
            f = typeof r == "function" ? r(n) : r;
        return i.isValidElement(f) ? Yt(f, {
            className: F(f.props.className || "", d)
        }) : f !== void 0 ? f : o ? c ? i.createElement(_u, {
            className: `${t}-switcher-line-icon`
        }) : i.createElement(Vu, {
            className: `${t}-switcher-line-icon`
        }) : i.createElement(Du, {
            className: d
        })
    },
    Xu = Wu,
    qu = Y.forwardRef((e, t) => {
        var r;
        const {
            getPrefixCls: n,
            direction: o,
            virtual: l,
            tree: c
        } = Y.useContext(tt), {
            prefixCls: a,
            className: s,
            showIcon: d = !1,
            showLine: f,
            switcherIcon: u,
            blockNode: p = !1,
            children: m,
            checkable: v = !1,
            selectable: h = !0,
            draggable: g,
            motion: b,
            style: x
        } = e, y = n("tree", a), w = n(), S = b ? ? Object.assign(Object.assign({}, ki(w)), {
            motionAppear: !1
        }), R = Object.assign(Object.assign({}, e), {
            checkable: v,
            selectable: h,
            showIcon: d,
            motion: S,
            blockNode: p,
            showLine: !!f,
            dropIndicatorRender: Iu
        }), [O, N, C] = Ru(y), [, P] = zn(), M = P.paddingXS / 2 + (((r = P.Tree) === null || r === void 0 ? void 0 : r.titleHeight) || P.controlHeightSM), E = Y.useMemo(() => {
            if (!g) return !1;
            let $ = {};
            switch (typeof g) {
                case "function":
                    $.nodeDraggable = g;
                    break;
                case "object":
                    $ = Object.assign({}, g);
                    break
            }
            return $.icon !== !1 && ($.icon = $.icon || Y.createElement(bu, null)), $
        }, [g]), I = $ => Y.createElement(Xu, {
            prefixCls: y,
            switcherIcon: u,
            treeNodeProps: $,
            showLine: f
        });
        return O(Y.createElement(zr, Object.assign({
            itemHeight: M,
            ref: t,
            virtual: l
        }, R, {
            style: Object.assign(Object.assign({}, c == null ? void 0 : c.style), x),
            prefixCls: y,
            className: F({
                [`${y}-icon-hide`]: !d,
                [`${y}-block-node`]: p,
                [`${y}-unselectable`]: !h,
                [`${y}-rtl`]: o === "rtl"
            }, c == null ? void 0 : c.className, s, N, C),
            direction: o,
            checkable: v && Y.createElement("span", {
                className: `${y}-checkbox-inner`
            }),
            selectable: h,
            switcherIcon: I,
            draggable: E
        }), m))
    }),
    Wa = qu,
    Po = 0,
    er = 1,
    To = 2;

function Mr(e, t, r) {
    const {
        key: n,
        children: o
    } = r;

    function l(c) {
        const a = c[n],
            s = c[o];
        t(a, c) !== !1 && Mr(s || [], t, r)
    }
    e.forEach(l)
}

function Uu(e) {
    let {
        treeData: t,
        expandedKeys: r,
        startKey: n,
        endKey: o,
        fieldNames: l
    } = e;
    const c = [];
    let a = Po;
    if (n && n === o) return [n];
    if (!n || !o) return [];

    function s(d) {
        return d === n || d === o
    }
    return Mr(t, d => {
        if (a === To) return !1;
        if (s(d)) {
            if (c.push(d), a === Po) a = er;
            else if (a === er) return a = To, !1
        } else a === er && c.push(d);
        return r.includes(d)
    }, Qt(l)), c
}

function tr(e, t, r) {
    const n = $e(t),
        o = [];
    return Mr(e, (l, c) => {
        const a = n.indexOf(l);
        return a !== -1 && (o.push(c), n.splice(a, 1)), !!n.length
    }, Qt(r)), o
}
var ko = globalThis && globalThis.__rest || function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
};

function Gu(e) {
    const {
        isLeaf: t,
        expanded: r
    } = e;
    return t ? i.createElement(Va, null) : r ? i.createElement(cu, null) : i.createElement(mu, null)
}

function Ko(e) {
    let {
        treeData: t,
        children: r
    } = e;
    return t || la(r)
}
const Yu = (e, t) => {
        var {
            defaultExpandAll: r,
            defaultExpandParent: n,
            defaultExpandedKeys: o
        } = e, l = ko(e, ["defaultExpandAll", "defaultExpandParent", "defaultExpandedKeys"]);
        const c = i.useRef(),
            a = i.useRef(),
            s = () => {
                const {
                    keyEntities: N
                } = Or(Ko(l));
                let C;
                return r ? C = Object.keys(N) : n ? C = ur(l.expandedKeys || o || [], N) : C = l.expandedKeys || o || [], C
            },
            [d, f] = i.useState(l.selectedKeys || l.defaultSelectedKeys || []),
            [u, p] = i.useState(() => s());
        i.useEffect(() => {
            "selectedKeys" in l && f(l.selectedKeys)
        }, [l.selectedKeys]), i.useEffect(() => {
            "expandedKeys" in l && p(l.expandedKeys)
        }, [l.expandedKeys]);
        const m = (N, C) => {
                var P;
                return "expandedKeys" in l || p(N), (P = l.onExpand) === null || P === void 0 ? void 0 : P.call(l, N, C)
            },
            v = (N, C) => {
                var P;
                const {
                    multiple: M,
                    fieldNames: E
                } = l, {
                    node: I,
                    nativeEvent: $
                } = C, {
                    key: D = ""
                } = I, B = Ko(l), T = Object.assign(Object.assign({}, C), {
                    selected: !0
                }), L = ($ == null ? void 0 : $.ctrlKey) || ($ == null ? void 0 : $.metaKey), _ = $ == null ? void 0 : $.shiftKey;
                let z;
                M && L ? (z = N, c.current = D, a.current = z, T.selectedNodes = tr(B, z, E)) : M && _ ? (z = Array.from(new Set([].concat($e(a.current || []), $e(Uu({
                    treeData: B,
                    expandedKeys: u,
                    startKey: D,
                    endKey: c.current,
                    fieldNames: E
                }))))), T.selectedNodes = tr(B, z, E)) : (z = [D], c.current = D, a.current = z, T.selectedNodes = tr(B, z, E)), (P = l.onSelect) === null || P === void 0 || P.call(l, z, T), "selectedKeys" in l || f(z)
            },
            {
                getPrefixCls: h,
                direction: g
            } = i.useContext(tt),
            {
                prefixCls: b,
                className: x,
                showIcon: y = !0,
                expandAction: w = "click"
            } = l,
            S = ko(l, ["prefixCls", "className", "showIcon", "expandAction"]),
            R = h("tree", b),
            O = F(`${R}-directory`, {
                [`${R}-directory-rtl`]: g === "rtl"
            }, x);
        return i.createElement(Wa, Object.assign({
            icon: Gu,
            ref: t,
            blockNode: !0
        }, S, {
            showIcon: y,
            expandAction: w,
            prefixCls: R,
            className: O,
            expandedKeys: u,
            selectedKeys: d,
            onSelect: v,
            onExpand: m
        }))
    },
    Ju = i.forwardRef(Yu),
    Zu = Ju,
    Br = Wa;
Br.DirectoryTree = Zu;
Br.TreeNode = en;
const Qu = Br;

function Do(e) {
    let {
        value: t,
        onChange: r,
        filterSearch: n,
        tablePrefixCls: o,
        locale: l
    } = e;
    return n ? i.createElement("div", {
        className: `${o}-filter-dropdown-search`
    }, i.createElement(Cs, {
        prefix: i.createElement(Wo, null),
        placeholder: l.filterSearchPlaceholder,
        onChange: r,
        value: t,
        htmlSize: 1,
        className: `${o}-filter-dropdown-search-input`
    })) : null
}
const ef = e => {
        const {
            keyCode: t
        } = e;
        t === We.ENTER && e.stopPropagation()
    },
    tf = i.forwardRef((e, t) => i.createElement("div", {
        className: e.className,
        onClick: r => r.stopPropagation(),
        onKeyDown: ef,
        ref: t
    }, e.children)),
    nf = tf;

function Gt(e) {
    let t = [];
    return (e || []).forEach(r => {
        let {
            value: n,
            children: o
        } = r;
        t.push(n), o && (t = [].concat($e(t), $e(Gt(o))))
    }), t
}

function rf(e) {
    return e.some(t => {
        let {
            children: r
        } = t;
        return r
    })
}

function Xa(e, t) {
    return typeof t == "string" || typeof t == "number" ? t == null ? void 0 : t.toString().toLowerCase().includes(e.trim().toLowerCase()) : !1
}

function qa(e) {
    let {
        filters: t,
        prefixCls: r,
        filteredKeys: n,
        filterMultiple: o,
        searchValue: l,
        filterSearch: c
    } = e;
    return t.map((a, s) => {
        const d = String(a.value);
        if (a.children) return {
            key: d || s,
            label: a.text,
            popupClassName: `${r}-dropdown-submenu`,
            children: qa({
                filters: a.children,
                prefixCls: r,
                filteredKeys: n,
                filterMultiple: o,
                searchValue: l,
                filterSearch: c
            })
        };
        const f = o ? Tn : Zo,
            u = {
                key: a.value !== void 0 ? d : s,
                label: i.createElement(i.Fragment, null, i.createElement(f, {
                    checked: n.includes(d)
                }), i.createElement("span", null, a.text))
            };
        return l.trim() ? typeof c == "function" ? c(l, a) ? u : null : Xa(l, a.text) ? u : null : u
    })
}

function nr(e) {
    return e || []
}

function of (e) {
    var t, r;
    const {
        tablePrefixCls: n,
        prefixCls: o,
        column: l,
        dropdownPrefixCls: c,
        columnKey: a,
        filterOnClose: s,
        filterMultiple: d,
        filterMode: f = "menu",
        filterSearch: u = !1,
        filterState: p,
        triggerFilter: m,
        locale: v,
        children: h,
        getPopupContainer: g,
        rootClassName: b
    } = e, {
        filterDropdownOpen: x,
        onFilterDropdownOpenChange: y,
        filterResetToDefaultFilteredValue: w,
        defaultFilteredValue: S,
        filterDropdownVisible: R,
        onFilterDropdownVisibleChange: O
    } = l, [N, C] = i.useState(!1), P = !!(p && (!((t = p.filteredKeys) === null || t === void 0) && t.length || p.forceFiltered)), M = V => {
        C(V), y == null || y(V), O == null || O(V)
    }, E = (r = x ? ? R) !== null && r !== void 0 ? r : N, I = p == null ? void 0 : p.filteredKeys, [$, D] = Wd(nr(I)), B = V => {
        let {
            selectedKeys: ce
        } = V;
        D(ce)
    }, T = (V, ce) => {
        let {
            node: Ce,
            checked: ee
        } = ce;
        B(d ? {
            selectedKeys: V
        } : {
            selectedKeys: ee && Ce.key ? [Ce.key] : []
        })
    };
    i.useEffect(() => {
        N && B({
            selectedKeys: nr(I)
        })
    }, [I]);
    const [L, _] = i.useState([]), z = V => {
        _(V)
    }, [k, A] = i.useState(""), j = V => {
        const {
            value: ce
        } = V.target;
        A(ce)
    };
    i.useEffect(() => {
        N || A("")
    }, [N]);
    const ae = V => {
            const ce = V && V.length ? V : null;
            if (ce === null && (!p || !p.filteredKeys) || hn(ce, p == null ? void 0 : p.filteredKeys, !0)) return null;
            m({
                column: l,
                key: a,
                filteredKeys: ce
            })
        },
        Q = () => {
            M(!1), ae($())
        },
        re = function() {
            let {
                confirm: V,
                closeDropdown: ce
            } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                confirm: !1,
                closeDropdown: !1
            };
            V && ae([]), ce && M(!1), A(""), D(w ? (S || []).map(Ce => String(Ce)) : [])
        },
        te = function() {
            let {
                closeDropdown: V
            } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                closeDropdown: !0
            };
            V && M(!1), ae($())
        },
        se = (V, ce) => {
            ce.source === "trigger" && (V && I !== void 0 && D(nr(I)), M(V), !V && !l.filterDropdown && s && Q())
        },
        le = F({
            [`${c}-menu-without-submenu`]: !rf(l.filters || [])
        }),
        fe = V => {
            if (V.target.checked) {
                const ce = Gt(l == null ? void 0 : l.filters).map(Ce => String(Ce));
                D(ce)
            } else D([])
        },
        ne = V => {
            let {
                filters: ce
            } = V;
            return (ce || []).map((Ce, ee) => {
                const ie = String(Ce.value),
                    pe = {
                        title: Ce.text,
                        key: Ce.value !== void 0 ? ie : String(ee)
                    };
                return Ce.children && (pe.children = ne({
                    filters: Ce.children
                })), pe
            })
        },
        q = V => {
            var ce;
            return Object.assign(Object.assign({}, V), {
                text: V.title,
                value: V.key,
                children: ((ce = V.children) === null || ce === void 0 ? void 0 : ce.map(Ce => q(Ce))) || []
            })
        };
    let U;
    if (typeof l.filterDropdown == "function") U = l.filterDropdown({
        prefixCls: `${c}-custom`,
        setSelectedKeys: V => B({
            selectedKeys: V
        }),
        selectedKeys: $(),
        confirm: te,
        clearFilters: re,
        filters: l.filters,
        visible: E,
        close: () => {
            M(!1)
        }
    });
    else if (l.filterDropdown) U = l.filterDropdown;
    else {
        const V = $() || [],
            ce = () => {
                const ee = i.createElement(eo, {
                    image: eo.PRESENTED_IMAGE_SIMPLE,
                    description: v.filterEmptyText,
                    imageStyle: {
                        height: 24
                    },
                    style: {
                        margin: 0,
                        padding: "16px 0"
                    }
                });
                if ((l.filters || []).length === 0) return ee;
                if (f === "tree") return i.createElement(i.Fragment, null, i.createElement(Do, {
                    filterSearch: u,
                    value: k,
                    onChange: j,
                    tablePrefixCls: n,
                    locale: v
                }), i.createElement("div", {
                    className: `${n}-filter-dropdown-tree`
                }, d ? i.createElement(Tn, {
                    checked: V.length === Gt(l.filters).length,
                    indeterminate: V.length > 0 && V.length < Gt(l.filters).length,
                    className: `${n}-filter-dropdown-checkall`,
                    onChange: fe
                }, v.filterCheckall) : null, i.createElement(Qu, {
                    checkable: !0,
                    selectable: !1,
                    blockNode: !0,
                    multiple: d,
                    checkStrictly: !d,
                    className: `${c}-menu`,
                    onCheck: T,
                    checkedKeys: V,
                    selectedKeys: V,
                    showIcon: !1,
                    treeData: ne({
                        filters: l.filters
                    }),
                    autoExpandParent: !0,
                    defaultExpandAll: !0,
                    filterTreeNode: k.trim() ? oe => typeof u == "function" ? u(k, q(oe)) : Xa(k, oe.title) : void 0
                })));
                const ie = qa({
                        filters: l.filters || [],
                        filterSearch: u,
                        prefixCls: o,
                        filteredKeys: $(),
                        filterMultiple: d,
                        searchValue: k
                    }),
                    pe = ie.every(oe => oe === null);
                return i.createElement(i.Fragment, null, i.createElement(Do, {
                    filterSearch: u,
                    value: k,
                    onChange: j,
                    tablePrefixCls: n,
                    locale: v
                }), pe ? ee : i.createElement(Ao, {
                    selectable: !0,
                    multiple: d,
                    prefixCls: `${c}-menu`,
                    className: le,
                    onSelect: B,
                    onDeselect: B,
                    selectedKeys: V,
                    getPopupContainer: g,
                    openKeys: L,
                    onOpenChange: z,
                    items: ie
                }))
            },
            Ce = () => w ? hn((S || []).map(ee => String(ee)), V, !0) : V.length === 0;
        U = i.createElement(i.Fragment, null, ce(), i.createElement("div", {
            className: `${o}-dropdown-btns`
        }, i.createElement(gn, {
            type: "link",
            size: "small",
            disabled: Ce(),
            onClick: () => re()
        }, v.filterReset), i.createElement(gn, {
            type: "primary",
            size: "small",
            onClick: Q
        }, v.filterConfirm)))
    }
    l.filterDropdown && (U = i.createElement(Ho, {
        selectable: void 0
    }, U));
    const G = () => i.createElement(nf, {
        className: `${o}-dropdown`
    }, U);
    let H;
    typeof l.filterIcon == "function" ? H = l.filterIcon(P) : l.filterIcon ? H = l.filterIcon : H = i.createElement(Vd, null);
    const {
        direction: ge
    } = i.useContext(tt);
    return i.createElement("div", {
        className: `${o}-column`
    }, i.createElement("span", {
        className: `${n}-column-title`
    }, h), i.createElement(ga, {
        dropdownRender: G,
        trigger: ["click"],
        open: E,
        onOpenChange: se,
        getPopupContainer: g,
        placement: ge === "rtl" ? "bottomLeft" : "bottomRight",
        rootClassName: b
    }, i.createElement("span", {
        role: "button",
        tabIndex: -1,
        className: F(`${o}-trigger`, {
            active: P
        }),
        onClick: V => {
            V.stopPropagation()
        }
    }, H)))
}

function gr(e, t, r) {
    let n = [];
    return (e || []).forEach((o, l) => {
        var c;
        const a = wn(l, r);
        if (o.filters || "filterDropdown" in o || "onFilter" in o)
            if ("filteredValue" in o) {
                let s = o.filteredValue;
                "filterDropdown" in o || (s = (c = s == null ? void 0 : s.map(String)) !== null && c !== void 0 ? c : s), n.push({
                    column: o,
                    key: At(o, a),
                    filteredKeys: s,
                    forceFiltered: o.filtered
                })
            } else n.push({
                column: o,
                key: At(o, a),
                filteredKeys: t && o.defaultFilteredValue ? o.defaultFilteredValue : void 0,
                forceFiltered: o.filtered
            });
        "children" in o && (n = [].concat($e(n), $e(gr(o.children, t, a))))
    }), n
}

function Ua(e, t, r, n, o, l, c, a, s) {
    return r.map((d, f) => {
        const u = wn(f, a),
            {
                filterOnClose: p = !0,
                filterMultiple: m = !0,
                filterMode: v,
                filterSearch: h
            } = d;
        let g = d;
        if (g.filters || g.filterDropdown) {
            const b = At(g, u),
                x = n.find(y => {
                    let {
                        key: w
                    } = y;
                    return b === w
                });
            g = Object.assign(Object.assign({}, g), {
                title: y => i.createElement( of , {
                    tablePrefixCls: e,
                    prefixCls: `${e}-filter`,
                    dropdownPrefixCls: t,
                    column: g,
                    columnKey: b,
                    filterState: x,
                    filterOnClose: p,
                    filterMultiple: m,
                    filterMode: v,
                    filterSearch: h,
                    triggerFilter: l,
                    locale: o,
                    getPopupContainer: c,
                    rootClassName: s
                }, An(d.title, y))
            })
        }
        return "children" in g && (g = Object.assign(Object.assign({}, g), {
            children: Ua(e, t, g.children, n, o, l, c, u, s)
        })), g
    })
}

function zo(e) {
    const t = {};
    return e.forEach(r => {
        let {
            key: n,
            filteredKeys: o,
            column: l
        } = r;
        const c = n,
            {
                filters: a,
                filterDropdown: s
            } = l;
        if (s) t[c] = o || null;
        else if (Array.isArray(o)) {
            const d = Gt(a);
            t[c] = d.filter(f => o.includes(String(f)))
        } else t[c] = null
    }), t
}

function hr(e, t, r) {
    return t.reduce((n, o) => {
        const {
            column: {
                onFilter: l,
                filters: c
            },
            filteredKeys: a
        } = o;
        return l && a && a.length ? n.map(s => Object.assign({}, s)).filter(s => a.some(d => {
            const f = Gt(c),
                u = f.findIndex(m => String(m) === String(d)),
                p = u !== -1 ? f[u] : d;
            return s[r] && (s[r] = hr(s[r], t, r)), l(p, s)
        })) : n
    }, e)
}
const Ga = e => e.flatMap(t => "children" in t ? [t].concat($e(Ga(t.children || []))) : [t]);

function af(e) {
    let {
        prefixCls: t,
        dropdownPrefixCls: r,
        mergedColumns: n,
        onFilterChange: o,
        getPopupContainer: l,
        locale: c,
        rootClassName: a
    } = e;
    Dn();
    const s = i.useMemo(() => Ga(n || []), [n]),
        [d, f] = i.useState(() => gr(s, !0)),
        u = i.useMemo(() => {
            const h = gr(s, !1);
            if (h.length === 0) return h;
            let g = !0;
            if (h.forEach(b => {
                    let {
                        filteredKeys: x
                    } = b;
                    x !== void 0 && (g = !1)
                }), g) {
                const b = (s || []).map((x, y) => At(x, wn(y)));
                return d.filter(x => {
                    let {
                        key: y
                    } = x;
                    return b.includes(y)
                }).map(x => {
                    const y = s[b.findIndex(w => w === x.key)];
                    return Object.assign(Object.assign({}, x), {
                        column: Object.assign(Object.assign({}, x.column), y),
                        forceFiltered: y.filtered
                    })
                })
            }
            return h
        }, [s, d]),
        p = i.useMemo(() => zo(u), [u]),
        m = h => {
            const g = u.filter(b => {
                let {
                    key: x
                } = b;
                return x !== h.key
            });
            g.push(h), f(g), o(zo(g), g)
        };
    return [h => Ua(t, r, h, u, c, m, l, void 0, a), u, p]
}

function lf(e, t, r) {
    const n = i.useRef({});

    function o(l) {
        if (!n.current || n.current.data !== e || n.current.childrenColumnName !== t || n.current.getRowKey !== r) {
            let a = function(s) {
                s.forEach((d, f) => {
                    const u = r(d, f);
                    c.set(u, d), d && typeof d == "object" && t in d && a(d[t] || [])
                })
            };
            const c = new Map;
            a(e), n.current = {
                data: e,
                childrenColumnName: t,
                kvMap: c,
                getRowKey: r
            }
        }
        return n.current.kvMap.get(l)
    }
    return [o]
}
var sf = globalThis && globalThis.__rest || function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
};
const Ya = 10;

function cf(e, t) {
    const r = {
        current: e.current,
        pageSize: e.pageSize
    };
    return Object.keys(t && typeof t == "object" ? t : {}).forEach(o => {
        const l = e[o];
        typeof l != "function" && (r[o] = l)
    }), r
}

function df(e, t, r) {
    const n = r && typeof r == "object" ? r : {},
        {
            total: o = 0
        } = n,
        l = sf(n, ["total"]),
        [c, a] = i.useState(() => ({
            current: "defaultCurrent" in l ? l.defaultCurrent : 1,
            pageSize: "defaultPageSize" in l ? l.defaultPageSize : Ya
        })),
        s = Ts(c, l, {
            total: o > 0 ? o : e
        }),
        d = Math.ceil((o || e) / s.pageSize);
    s.current > d && (s.current = d || 1);
    const f = (p, m) => {
            a({
                current: p ? ? 1,
                pageSize: m || s.pageSize
            })
        },
        u = (p, m) => {
            var v;
            r && ((v = r.onChange) === null || v === void 0 || v.call(r, p, m)), f(p, m), t(p, m || (s == null ? void 0 : s.pageSize))
        };
    return r === !1 ? [{}, () => {}] : [Object.assign(Object.assign({}, s), {
        onChange: u
    }), f]
}
var uf = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "0 0 1024 1024",
            focusable: "false"
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
            }
        }]
    },
    name: "caret-down",
    theme: "outlined"
};
const ff = uf;
var pf = function(t, r) {
        return i.createElement(rt, de({}, t, {
            ref: r,
            icon: ff
        }))
    },
    mf = i.forwardRef(pf);
const vf = mf;
var gf = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "0 0 1024 1024",
            focusable: "false"
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"
            }
        }]
    },
    name: "caret-up",
    theme: "outlined"
};
const hf = gf;
var yf = function(t, r) {
        return i.createElement(rt, de({}, t, {
            ref: r,
            icon: hf
        }))
    },
    bf = i.forwardRef(yf);
const xf = bf,
    In = "ascend",
    rr = "descend";

function Kn(e) {
    return typeof e.sorter == "object" && typeof e.sorter.multiple == "number" ? e.sorter.multiple : !1
}

function Mo(e) {
    return typeof e == "function" ? e : e && typeof e == "object" && e.compare ? e.compare : !1
}

function Cf(e, t) {
    return t ? e[e.indexOf(t) + 1] : e[0]
}

function yr(e, t, r) {
    let n = [];

    function o(l, c) {
        n.push({
            column: l,
            key: At(l, c),
            multiplePriority: Kn(l),
            sortOrder: l.sortOrder
        })
    }
    return (e || []).forEach((l, c) => {
        const a = wn(c, r);
        l.children ? ("sortOrder" in l && o(l, a), n = [].concat($e(n), $e(yr(l.children, t, a)))) : l.sorter && ("sortOrder" in l ? o(l, a) : t && l.defaultSortOrder && n.push({
            column: l,
            key: At(l, a),
            multiplePriority: Kn(l),
            sortOrder: l.defaultSortOrder
        }))
    }), n
}

function Ja(e, t, r, n, o, l, c, a) {
    return (t || []).map((s, d) => {
        const f = wn(d, a);
        let u = s;
        if (u.sorter) {
            const p = u.sortDirections || o,
                m = u.showSorterTooltip === void 0 ? c : u.showSorterTooltip,
                v = At(u, f),
                h = r.find(N => {
                    let {
                        key: C
                    } = N;
                    return C === v
                }),
                g = h ? h.sortOrder : null,
                b = Cf(p, g);
            let x;
            if (s.sortIcon) x = s.sortIcon({
                sortOrder: g
            });
            else {
                const N = p.includes(In) && i.createElement(xf, {
                        className: F(`${e}-column-sorter-up`, {
                            active: g === In
                        })
                    }),
                    C = p.includes(rr) && i.createElement(vf, {
                        className: F(`${e}-column-sorter-down`, {
                            active: g === rr
                        })
                    });
                x = i.createElement("span", {
                    className: F(`${e}-column-sorter`, {
                        [`${e}-column-sorter-full`]: !!(N && C)
                    })
                }, i.createElement("span", {
                    className: `${e}-column-sorter-inner`,
                    "aria-hidden": "true"
                }, N, C))
            }
            const {
                cancelSort: y,
                triggerAsc: w,
                triggerDesc: S
            } = l || {};
            let R = y;
            b === rr ? R = S : b === In && (R = w);
            const O = typeof m == "object" ? Object.assign({
                title: R
            }, m) : {
                title: R
            };
            u = Object.assign(Object.assign({}, u), {
                className: F(u.className, {
                    [`${e}-column-sort`]: g
                }),
                title: N => {
                    const C = `${e}-column-sorters`,
                        P = i.createElement("span", {
                            className: `${e}-column-title`
                        }, An(s.title, N)),
                        M = i.createElement("div", {
                            className: C
                        }, P, x);
                    return m ? typeof m != "boolean" && (m == null ? void 0 : m.target) === "sorter-icon" ? i.createElement("div", {
                        className: `${C} ${e}-column-sorters-tooltip-target-sorter`
                    }, P, i.createElement(to, Object.assign({}, O), x)) : i.createElement(to, Object.assign({}, O), M) : M
                },
                onHeaderCell: N => {
                    const C = s.onHeaderCell && s.onHeaderCell(N) || {},
                        P = C.onClick,
                        M = C.onKeyDown;
                    C.onClick = $ => {
                        n({
                            column: s,
                            key: v,
                            sortOrder: b,
                            multiplePriority: Kn(s)
                        }), P == null || P($)
                    }, C.onKeyDown = $ => {
                        $.keyCode === We.ENTER && (n({
                            column: s,
                            key: v,
                            sortOrder: b,
                            multiplePriority: Kn(s)
                        }), M == null || M($))
                    };
                    const E = _d(s.title, {}),
                        I = E == null ? void 0 : E.toString();
                    return g ? C["aria-sort"] = g === "ascend" ? "ascending" : "descending" : C["aria-label"] = I || "", C.className = F(C.className, `${e}-column-has-sorters`), C.tabIndex = 0, s.ellipsis && (C.title = (E ? ? "").toString()), C
                }
            })
        }
        return "children" in u && (u = Object.assign(Object.assign({}, u), {
            children: Ja(e, u.children, r, n, o, l, c, f)
        })), u
    })
}
const Bo = e => {
        const {
            column: t,
            sortOrder: r
        } = e;
        return {
            column: t,
            order: r,
            field: t.dataIndex,
            columnKey: t.key
        }
    },
    Lo = e => {
        const t = e.filter(r => {
            let {
                sortOrder: n
            } = r;
            return n
        }).map(Bo);
        if (t.length === 0 && e.length) {
            const r = e.length - 1;
            return Object.assign(Object.assign({}, Bo(e[r])), {
                column: void 0
            })
        }
        return t.length <= 1 ? t[0] || {} : t
    };

function br(e, t, r) {
    const n = t.slice().sort((c, a) => a.multiplePriority - c.multiplePriority),
        o = e.slice(),
        l = n.filter(c => {
            let {
                column: {
                    sorter: a
                },
                sortOrder: s
            } = c;
            return Mo(a) && s
        });
    return l.length ? o.sort((c, a) => {
        for (let s = 0; s < l.length; s += 1) {
            const d = l[s],
                {
                    column: {
                        sorter: f
                    },
                    sortOrder: u
                } = d,
                p = Mo(f);
            if (p && u) {
                const m = p(c, a, u);
                if (m !== 0) return u === In ? m : -m
            }
        }
        return 0
    }).map(c => {
        const a = c[r];
        return a ? Object.assign(Object.assign({}, c), {
            [r]: br(a, t, r)
        }) : c
    }) : o
}

function Sf(e) {
    let {
        prefixCls: t,
        mergedColumns: r,
        onSorterChange: n,
        sortDirections: o,
        tableLocale: l,
        showSorterTooltip: c
    } = e;
    const [a, s] = i.useState(yr(r, !0)), d = i.useMemo(() => {
        let v = !0;
        const h = yr(r, !1);
        if (!h.length) return a;
        const g = [];

        function b(y) {
            v ? g.push(y) : g.push(Object.assign(Object.assign({}, y), {
                sortOrder: null
            }))
        }
        let x = null;
        return h.forEach(y => {
            x === null ? (b(y), y.sortOrder && (y.multiplePriority === !1 ? v = !1 : x = !0)) : (x && y.multiplePriority !== !1 || (v = !1), b(y))
        }), g
    }, [r, a]), f = i.useMemo(() => {
        const v = d.map(h => {
            let {
                column: g,
                sortOrder: b
            } = h;
            return {
                column: g,
                order: b
            }
        });
        return {
            sortColumns: v,
            sortColumn: v[0] && v[0].column,
            sortOrder: v[0] && v[0].order
        }
    }, [d]), u = v => {
        let h;
        v.multiplePriority === !1 || !d.length || d[0].multiplePriority === !1 ? h = [v] : h = [].concat($e(d.filter(g => {
            let {
                key: b
            } = g;
            return b !== v.key
        })), [v]), s(h), n(Lo(h), h)
    };
    return [v => Ja(t, v, d, u, o, l, c), d, f, () => Lo(d)]
}

function Za(e, t) {
    return e.map(r => {
        const n = Object.assign({}, r);
        return n.title = An(r.title, t), "children" in n && (n.children = Za(n.children, t)), n
    })
}

function wf(e) {
    return [i.useCallback(r => Za(r, e), [e])]
}
const $f = Ma((e, t) => {
        const {
            _renderTimes: r
        } = e, {
            _renderTimes: n
        } = t;
        return r !== n
    }),
    Ef = La((e, t) => {
        const {
            _renderTimes: r
        } = e, {
            _renderTimes: n
        } = t;
        return r !== n
    }),
    Nf = e => {
        const {
            componentCls: t,
            lineWidth: r,
            lineType: n,
            tableBorderColor: o,
            tableHeaderBg: l,
            tablePaddingVertical: c,
            tablePaddingHorizontal: a,
            calc: s
        } = e, d = `${W(r)} ${n} ${o}`, f = (u, p, m) => ({
            [`&${t}-${u}`]: {
                [`> ${t}-container`]: {
                    [`> ${t}-content, > ${t}-body`]: {
                        "\n            > table > tbody > tr > th,\n            > table > tbody > tr > td\n          ": {
                            [`> ${t}-expanded-row-fixed`]: {
                                margin: `${W(s(p).mul(-1).equal())}
              ${W(s(s(m).add(r)).mul(-1).equal())}`
                            }
                        }
                    }
                }
            }
        });
        return {
            [`${t}-wrapper`]: {
                [`${t}${t}-bordered`]: Object.assign(Object.assign(Object.assign({
                    [`> ${t}-title`]: {
                        border: d,
                        borderBottom: 0
                    },
                    [`> ${t}-container`]: {
                        borderInlineStart: d,
                        borderTop: d,
                        [`
            > ${t}-content,
            > ${t}-header,
            > ${t}-body,
            > ${t}-summary
          `]: {
                            "> table": {
                                "\n                > thead > tr > th,\n                > thead > tr > td,\n                > tbody > tr > th,\n                > tbody > tr > td,\n                > tfoot > tr > th,\n                > tfoot > tr > td\n              ": {
                                    borderInlineEnd: d
                                },
                                "> thead": {
                                    "> tr:not(:last-child) > th": {
                                        borderBottom: d
                                    },
                                    "> tr > th::before": {
                                        backgroundColor: "transparent !important"
                                    }
                                },
                                "\n                > thead > tr,\n                > tbody > tr,\n                > tfoot > tr\n              ": {
                                    [`> ${t}-cell-fix-right-first::after`]: {
                                        borderInlineEnd: d
                                    }
                                },
                                "\n                > tbody > tr > th,\n                > tbody > tr > td\n              ": {
                                    [`> ${t}-expanded-row-fixed`]: {
                                        margin: `${W(s(c).mul(-1).equal())} ${W(s(s(a).add(r)).mul(-1).equal())}`,
                                        "&::after": {
                                            position: "absolute",
                                            top: 0,
                                            insetInlineEnd: r,
                                            bottom: 0,
                                            borderInlineEnd: d,
                                            content: '""'
                                        }
                                    }
                                }
                            }
                        }
                    },
                    [`&${t}-scroll-horizontal`]: {
                        [`> ${t}-container > ${t}-body`]: {
                            "> table > tbody": {
                                [`
                > tr${t}-expanded-row,
                > tr${t}-placeholder
              `]: {
                                    "> th, > td": {
                                        borderInlineEnd: 0
                                    }
                                }
                            }
                        }
                    }
                }, f("middle", e.tablePaddingVerticalMiddle, e.tablePaddingHorizontalMiddle)), f("small", e.tablePaddingVerticalSmall, e.tablePaddingHorizontalSmall)), {
                    [`> ${t}-footer`]: {
                        border: d,
                        borderTop: 0
                    }
                }),
                [`${t}-cell`]: {
                    [`${t}-container:first-child`]: {
                        borderTop: 0
                    },
                    "&-scrollbar:not([rowspan])": {
                        boxShadow: `0 ${W(r)} 0 ${W(r)} ${l}`
                    }
                },
                [`${t}-bordered ${t}-cell-scrollbar`]: {
                    borderInlineEnd: d
                }
            }
        }
    },
    Of = Nf,
    Rf = e => {
        const {
            componentCls: t
        } = e;
        return {
            [`${t}-wrapper`]: {
                [`${t}-cell-ellipsis`]: Object.assign(Object.assign({}, Ki), {
                    wordBreak: "keep-all",
                    [`
          &${t}-cell-fix-left-last,
          &${t}-cell-fix-right-first
        `]: {
                        overflow: "visible",
                        [`${t}-cell-content`]: {
                            display: "block",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }
                    },
                    [`${t}-column-title`]: {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        wordBreak: "keep-all"
                    }
                })
            }
        }
    },
    If = Rf,
    Pf = e => {
        const {
            componentCls: t
        } = e;
        return {
            [`${t}-wrapper`]: {
                [`${t}-tbody > tr${t}-placeholder`]: {
                    textAlign: "center",
                    color: e.colorTextDisabled,
                    "\n          &:hover > th,\n          &:hover > td,\n        ": {
                        background: e.colorBgContainer
                    }
                }
            }
        }
    },
    Tf = Pf,
    kf = e => {
        const {
            componentCls: t,
            antCls: r,
            motionDurationSlow: n,
            lineWidth: o,
            paddingXS: l,
            lineType: c,
            tableBorderColor: a,
            tableExpandIconBg: s,
            tableExpandColumnWidth: d,
            borderRadius: f,
            tablePaddingVertical: u,
            tablePaddingHorizontal: p,
            tableExpandedRowBg: m,
            paddingXXS: v,
            expandIconMarginTop: h,
            expandIconSize: g,
            expandIconHalfInner: b,
            expandIconScale: x,
            calc: y
        } = e, w = `${W(o)} ${c} ${a}`, S = y(v).sub(o).equal();
        return {
            [`${t}-wrapper`]: {
                [`${t}-expand-icon-col`]: {
                    width: d
                },
                [`${t}-row-expand-icon-cell`]: {
                    textAlign: "center",
                    [`${t}-row-expand-icon`]: {
                        display: "inline-flex",
                        float: "none",
                        verticalAlign: "sub"
                    }
                },
                [`${t}-row-indent`]: {
                    height: 1,
                    float: "left"
                },
                [`${t}-row-expand-icon`]: Object.assign(Object.assign({}, Fi(e)), {
                    position: "relative",
                    float: "left",
                    boxSizing: "border-box",
                    width: g,
                    height: g,
                    padding: 0,
                    color: "inherit",
                    lineHeight: W(g),
                    background: s,
                    border: w,
                    borderRadius: f,
                    transform: `scale(${x})`,
                    transition: `all ${n}`,
                    userSelect: "none",
                    "&:focus, &:hover, &:active": {
                        borderColor: "currentcolor"
                    },
                    "&::before, &::after": {
                        position: "absolute",
                        background: "currentcolor",
                        transition: `transform ${n} ease-out`,
                        content: '""'
                    },
                    "&::before": {
                        top: b,
                        insetInlineEnd: S,
                        insetInlineStart: S,
                        height: o
                    },
                    "&::after": {
                        top: S,
                        bottom: S,
                        insetInlineStart: b,
                        width: o,
                        transform: "rotate(90deg)"
                    },
                    "&-collapsed::before": {
                        transform: "rotate(-180deg)"
                    },
                    "&-collapsed::after": {
                        transform: "rotate(0deg)"
                    },
                    "&-spaced": {
                        "&::before, &::after": {
                            display: "none",
                            content: "none"
                        },
                        background: "transparent",
                        border: 0,
                        visibility: "hidden"
                    }
                }),
                [`${t}-row-indent + ${t}-row-expand-icon`]: {
                    marginTop: h,
                    marginInlineEnd: l
                },
                [`tr${t}-expanded-row`]: {
                    "&, &:hover": {
                        "> th, > td": {
                            background: m
                        }
                    },
                    [`${r}-descriptions-view`]: {
                        display: "flex",
                        table: {
                            flex: "auto",
                            width: "auto"
                        }
                    }
                },
                [`${t}-expanded-row-fixed`]: {
                    position: "relative",
                    margin: `${W(y(u).mul(-1).equal())} ${W(y(p).mul(-1).equal())}`,
                    padding: `${W(u)} ${W(p)}`
                }
            }
        }
    },
    Kf = kf,
    Df = e => {
        const {
            componentCls: t,
            antCls: r,
            iconCls: n,
            tableFilterDropdownWidth: o,
            tableFilterDropdownSearchWidth: l,
            paddingXXS: c,
            paddingXS: a,
            colorText: s,
            lineWidth: d,
            lineType: f,
            tableBorderColor: u,
            headerIconColor: p,
            fontSizeSM: m,
            tablePaddingHorizontal: v,
            borderRadius: h,
            motionDurationSlow: g,
            colorTextDescription: b,
            colorPrimary: x,
            tableHeaderFilterActiveBg: y,
            colorTextDisabled: w,
            tableFilterDropdownBg: S,
            tableFilterDropdownHeight: R,
            controlItemBgHover: O,
            controlItemBgActive: N,
            boxShadowSecondary: C,
            filterDropdownMenuBg: P,
            calc: M
        } = e, E = `${r}-dropdown`, I = `${t}-filter-dropdown`, $ = `${r}-tree`, D = `${W(d)} ${f} ${u}`;
        return [{
            [`${t}-wrapper`]: {
                [`${t}-filter-column`]: {
                    display: "flex",
                    justifyContent: "space-between"
                },
                [`${t}-filter-trigger`]: {
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    marginBlock: M(c).mul(-1).equal(),
                    marginInline: `${W(c)} ${W(M(v).div(2).mul(-1).equal())}`,
                    padding: `0 ${W(c)}`,
                    color: p,
                    fontSize: m,
                    borderRadius: h,
                    cursor: "pointer",
                    transition: `all ${g}`,
                    "&:hover": {
                        color: b,
                        background: y
                    },
                    "&.active": {
                        color: x
                    }
                }
            }
        }, {
            [`${r}-dropdown`]: {
                [I]: Object.assign(Object.assign({}, rn(e)), {
                    minWidth: o,
                    backgroundColor: S,
                    borderRadius: h,
                    boxShadow: C,
                    overflow: "hidden",
                    [`${E}-menu`]: {
                        maxHeight: R,
                        overflowX: "hidden",
                        border: 0,
                        boxShadow: "none",
                        borderRadius: "unset",
                        backgroundColor: P,
                        "&:empty::after": {
                            display: "block",
                            padding: `${W(a)} 0`,
                            color: w,
                            fontSize: m,
                            textAlign: "center",
                            content: '"Not Found"'
                        }
                    },
                    [`${I}-tree`]: {
                        paddingBlock: `${W(a)} 0`,
                        paddingInline: a,
                        [$]: {
                            padding: 0
                        },
                        [`${$}-treenode ${$}-node-content-wrapper:hover`]: {
                            backgroundColor: O
                        },
                        [`${$}-treenode-checkbox-checked ${$}-node-content-wrapper`]: {
                            "&, &:hover": {
                                backgroundColor: N
                            }
                        }
                    },
                    [`${I}-search`]: {
                        padding: a,
                        borderBottom: D,
                        "&-input": {
                            input: {
                                minWidth: l
                            },
                            [n]: {
                                color: w
                            }
                        }
                    },
                    [`${I}-checkall`]: {
                        width: "100%",
                        marginBottom: c,
                        marginInlineStart: c
                    },
                    [`${I}-btns`]: {
                        display: "flex",
                        justifyContent: "space-between",
                        padding: `${W(M(a).sub(d).equal())} ${W(a)}`,
                        overflow: "hidden",
                        borderTop: D
                    }
                })
            }
        }, {
            [`${r}-dropdown ${I}, ${I}-submenu`]: {
                [`${r}-checkbox-wrapper + span`]: {
                    paddingInlineStart: a,
                    color: s
                },
                "> ul": {
                    maxHeight: "calc(100vh - 130px)",
                    overflowX: "hidden",
                    overflowY: "auto"
                }
            }
        }]
    },
    zf = Df,
    Mf = e => {
        const {
            componentCls: t,
            lineWidth: r,
            colorSplit: n,
            motionDurationSlow: o,
            zIndexTableFixed: l,
            tableBg: c,
            zIndexTableSticky: a,
            calc: s
        } = e, d = n;
        return {
            [`${t}-wrapper`]: {
                [`
        ${t}-cell-fix-left,
        ${t}-cell-fix-right
      `]: {
                    position: "sticky !important",
                    zIndex: l,
                    background: c
                },
                [`
        ${t}-cell-fix-left-first::after,
        ${t}-cell-fix-left-last::after
      `]: {
                    position: "absolute",
                    top: 0,
                    right: {
                        _skip_check_: !0,
                        value: 0
                    },
                    bottom: s(r).mul(-1).equal(),
                    width: 30,
                    transform: "translateX(100%)",
                    transition: `box-shadow ${o}`,
                    content: '""',
                    pointerEvents: "none"
                },
                [`${t}-cell-fix-left-all::after`]: {
                    display: "none"
                },
                [`
        ${t}-cell-fix-right-first::after,
        ${t}-cell-fix-right-last::after
      `]: {
                    position: "absolute",
                    top: 0,
                    bottom: s(r).mul(-1).equal(),
                    left: {
                        _skip_check_: !0,
                        value: 0
                    },
                    width: 30,
                    transform: "translateX(-100%)",
                    transition: `box-shadow ${o}`,
                    content: '""',
                    pointerEvents: "none"
                },
                [`${t}-container`]: {
                    position: "relative",
                    "&::before, &::after": {
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        zIndex: s(a).add(1).equal({
                            unit: !1
                        }),
                        width: 30,
                        transition: `box-shadow ${o}`,
                        content: '""',
                        pointerEvents: "none"
                    },
                    "&::before": {
                        insetInlineStart: 0
                    },
                    "&::after": {
                        insetInlineEnd: 0
                    }
                },
                [`${t}-ping-left`]: {
                    [`&:not(${t}-has-fix-left) ${t}-container::before`]: {
                        boxShadow: `inset 10px 0 8px -8px ${d}`
                    },
                    [`
          ${t}-cell-fix-left-first::after,
          ${t}-cell-fix-left-last::after
        `]: {
                        boxShadow: `inset 10px 0 8px -8px ${d}`
                    },
                    [`${t}-cell-fix-left-last::before`]: {
                        backgroundColor: "transparent !important"
                    }
                },
                [`${t}-ping-right`]: {
                    [`&:not(${t}-has-fix-right) ${t}-container::after`]: {
                        boxShadow: `inset -10px 0 8px -8px ${d}`
                    },
                    [`
          ${t}-cell-fix-right-first::after,
          ${t}-cell-fix-right-last::after
        `]: {
                        boxShadow: `inset -10px 0 8px -8px ${d}`
                    }
                },
                [`${t}-fixed-column-gapped`]: {
                    [`
        ${t}-cell-fix-left-first::after,
        ${t}-cell-fix-left-last::after,
        ${t}-cell-fix-right-first::after,
        ${t}-cell-fix-right-last::after
      `]: {
                        boxShadow: "none"
                    }
                }
            }
        }
    },
    Bf = Mf,
    Lf = e => {
        const {
            componentCls: t,
            antCls: r,
            margin: n
        } = e;
        return {
            [`${t}-wrapper`]: {
                [`${t}-pagination${r}-pagination`]: {
                    margin: `${W(n)} 0`
                },
                [`${t}-pagination`]: {
                    display: "flex",
                    flexWrap: "wrap",
                    rowGap: e.paddingXS,
                    "> *": {
                        flex: "none"
                    },
                    "&-left": {
                        justifyContent: "flex-start"
                    },
                    "&-center": {
                        justifyContent: "center"
                    },
                    "&-right": {
                        justifyContent: "flex-end"
                    }
                }
            }
        }
    },
    _f = Lf,
    jf = e => {
        const {
            componentCls: t,
            tableRadius: r
        } = e;
        return {
            [`${t}-wrapper`]: {
                [t]: {
                    [`${t}-title, ${t}-header`]: {
                        borderRadius: `${W(r)} ${W(r)} 0 0`
                    },
                    [`${t}-title + ${t}-container`]: {
                        borderStartStartRadius: 0,
                        borderStartEndRadius: 0,
                        [`${t}-header, table`]: {
                            borderRadius: 0
                        },
                        "table > thead > tr:first-child": {
                            "th:first-child, th:last-child, td:first-child, td:last-child": {
                                borderRadius: 0
                            }
                        }
                    },
                    "&-container": {
                        borderStartStartRadius: r,
                        borderStartEndRadius: r,
                        "table > thead > tr:first-child": {
                            "> *:first-child": {
                                borderStartStartRadius: r
                            },
                            "> *:last-child": {
                                borderStartEndRadius: r
                            }
                        }
                    },
                    "&-footer": {
                        borderRadius: `0 0 ${W(r)} ${W(r)}`
                    }
                }
            }
        }
    },
    Af = jf,
    Hf = e => {
        const {
            componentCls: t
        } = e;
        return {
            [`${t}-wrapper-rtl`]: {
                direction: "rtl",
                table: {
                    direction: "rtl"
                },
                [`${t}-pagination-left`]: {
                    justifyContent: "flex-end"
                },
                [`${t}-pagination-right`]: {
                    justifyContent: "flex-start"
                },
                [`${t}-row-expand-icon`]: {
                    float: "right",
                    "&::after": {
                        transform: "rotate(-90deg)"
                    },
                    "&-collapsed::before": {
                        transform: "rotate(180deg)"
                    },
                    "&-collapsed::after": {
                        transform: "rotate(0deg)"
                    }
                },
                [`${t}-container`]: {
                    "&::before": {
                        insetInlineStart: "unset",
                        insetInlineEnd: 0
                    },
                    "&::after": {
                        insetInlineStart: 0,
                        insetInlineEnd: "unset"
                    },
                    [`${t}-row-indent`]: {
                        float: "right"
                    }
                }
            }
        }
    },
    Ff = Hf,
    Vf = e => {
        const {
            componentCls: t,
            antCls: r,
            iconCls: n,
            fontSizeIcon: o,
            padding: l,
            paddingXS: c,
            headerIconColor: a,
            headerIconHoverColor: s,
            tableSelectionColumnWidth: d,
            tableSelectedRowBg: f,
            tableSelectedRowHoverBg: u,
            tableRowHoverBg: p,
            tablePaddingHorizontal: m,
            calc: v
        } = e;
        return {
            [`${t}-wrapper`]: {
                [`${t}-selection-col`]: {
                    width: d,
                    [`&${t}-selection-col-with-dropdown`]: {
                        width: v(d).add(o).add(v(l).div(4)).equal()
                    }
                },
                [`${t}-bordered ${t}-selection-col`]: {
                    width: v(d).add(v(c).mul(2)).equal(),
                    [`&${t}-selection-col-with-dropdown`]: {
                        width: v(d).add(o).add(v(l).div(4)).add(v(c).mul(2)).equal()
                    }
                },
                [`
        table tr th${t}-selection-column,
        table tr td${t}-selection-column,
        ${t}-selection-column
      `]: {
                    paddingInlineEnd: e.paddingXS,
                    paddingInlineStart: e.paddingXS,
                    textAlign: "center",
                    [`${r}-radio-wrapper`]: {
                        marginInlineEnd: 0
                    }
                },
                [`table tr th${t}-selection-column${t}-cell-fix-left`]: {
                    zIndex: e.zIndexTableFixed + 1
                },
                [`table tr th${t}-selection-column::after`]: {
                    backgroundColor: "transparent !important"
                },
                [`${t}-selection`]: {
                    position: "relative",
                    display: "inline-flex",
                    flexDirection: "column"
                },
                [`${t}-selection-extra`]: {
                    position: "absolute",
                    top: 0,
                    zIndex: 1,
                    cursor: "pointer",
                    transition: `all ${e.motionDurationSlow}`,
                    marginInlineStart: "100%",
                    paddingInlineStart: W(v(m).div(4).equal()),
                    [n]: {
                        color: a,
                        fontSize: o,
                        verticalAlign: "baseline",
                        "&:hover": {
                            color: s
                        }
                    }
                },
                [`${t}-tbody`]: {
                    [`${t}-row`]: {
                        [`&${t}-row-selected`]: {
                            [`> ${t}-cell`]: {
                                background: f,
                                "&-row-hover": {
                                    background: u
                                }
                            }
                        },
                        [`> ${t}-cell-row-hover`]: {
                            background: p
                        }
                    }
                }
            }
        }
    },
    Wf = Vf,
    Xf = e => {
        const {
            componentCls: t,
            tableExpandColumnWidth: r,
            calc: n
        } = e, o = (l, c, a, s) => ({
            [`${t}${t}-${l}`]: {
                fontSize: s,
                [`
        ${t}-title,
        ${t}-footer,
        ${t}-cell,
        ${t}-thead > tr > th,
        ${t}-tbody > tr > th,
        ${t}-tbody > tr > td,
        tfoot > tr > th,
        tfoot > tr > td
      `]: {
                    padding: `${W(c)} ${W(a)}`
                },
                [`${t}-filter-trigger`]: {
                    marginInlineEnd: W(n(a).div(2).mul(-1).equal())
                },
                [`${t}-expanded-row-fixed`]: {
                    margin: `${W(n(c).mul(-1).equal())} ${W(n(a).mul(-1).equal())}`
                },
                [`${t}-tbody`]: {
                    [`${t}-wrapper:only-child ${t}`]: {
                        marginBlock: W(n(c).mul(-1).equal()),
                        marginInline: `${W(n(r).sub(a).equal())} ${W(n(a).mul(-1).equal())}`
                    }
                },
                [`${t}-selection-extra`]: {
                    paddingInlineStart: W(n(a).div(4).equal())
                }
            }
        });
        return {
            [`${t}-wrapper`]: Object.assign(Object.assign({}, o("middle", e.tablePaddingVerticalMiddle, e.tablePaddingHorizontalMiddle, e.tableFontSizeMiddle)), o("small", e.tablePaddingVerticalSmall, e.tablePaddingHorizontalSmall, e.tableFontSizeSmall))
        }
    },
    qf = Xf,
    Uf = e => {
        const {
            componentCls: t,
            marginXXS: r,
            fontSizeIcon: n,
            headerIconColor: o,
            headerIconHoverColor: l
        } = e;
        return {
            [`${t}-wrapper`]: {
                [`${t}-thead th${t}-column-has-sorters`]: {
                    outline: "none",
                    cursor: "pointer",
                    transition: `all ${e.motionDurationSlow}`,
                    "&:hover": {
                        background: e.tableHeaderSortHoverBg,
                        "&::before": {
                            backgroundColor: "transparent !important"
                        }
                    },
                    "&:focus-visible": {
                        color: e.colorPrimary
                    },
                    [`
          &${t}-cell-fix-left:hover,
          &${t}-cell-fix-right:hover
        `]: {
                        background: e.tableFixedHeaderSortActiveBg
                    }
                },
                [`${t}-thead th${t}-column-sort`]: {
                    background: e.tableHeaderSortBg,
                    "&::before": {
                        backgroundColor: "transparent !important"
                    }
                },
                [`td${t}-column-sort`]: {
                    background: e.tableBodySortBg
                },
                [`${t}-column-title`]: {
                    position: "relative",
                    zIndex: 1,
                    flex: 1
                },
                [`${t}-column-sorters`]: {
                    display: "flex",
                    flex: "auto",
                    alignItems: "center",
                    justifyContent: "space-between",
                    "&::after": {
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        content: '""'
                    }
                },
                [`${t}-column-sorters-tooltip-target-sorter`]: {
                    "&::after": {
                        content: "none"
                    }
                },
                [`${t}-column-sorter`]: {
                    marginInlineStart: r,
                    color: o,
                    fontSize: 0,
                    transition: `color ${e.motionDurationSlow}`,
                    "&-inner": {
                        display: "inline-flex",
                        flexDirection: "column",
                        alignItems: "center"
                    },
                    "&-up, &-down": {
                        fontSize: n,
                        "&.active": {
                            color: e.colorPrimary
                        }
                    },
                    [`${t}-column-sorter-up + ${t}-column-sorter-down`]: {
                        marginTop: "-0.3em"
                    }
                },
                [`${t}-column-sorters:hover ${t}-column-sorter`]: {
                    color: l
                }
            }
        }
    },
    Gf = Uf,
    Yf = e => {
        const {
            componentCls: t,
            opacityLoading: r,
            tableScrollThumbBg: n,
            tableScrollThumbBgHover: o,
            tableScrollThumbSize: l,
            tableScrollBg: c,
            zIndexTableSticky: a,
            stickyScrollBarBorderRadius: s,
            lineWidth: d,
            lineType: f,
            tableBorderColor: u
        } = e, p = `${W(d)} ${f} ${u}`;
        return {
            [`${t}-wrapper`]: {
                [`${t}-sticky`]: {
                    "&-holder": {
                        position: "sticky",
                        zIndex: a,
                        background: e.colorBgContainer
                    },
                    "&-scroll": {
                        position: "sticky",
                        bottom: 0,
                        height: `${W(l)} !important`,
                        zIndex: a,
                        display: "flex",
                        alignItems: "center",
                        background: c,
                        borderTop: p,
                        opacity: r,
                        "&:hover": {
                            transformOrigin: "center bottom"
                        },
                        "&-bar": {
                            height: l,
                            backgroundColor: n,
                            borderRadius: s,
                            transition: `all ${e.motionDurationSlow}, transform none`,
                            position: "absolute",
                            bottom: 0,
                            "&:hover, &-active": {
                                backgroundColor: o
                            }
                        }
                    }
                }
            }
        }
    },
    Jf = Yf,
    Zf = e => {
        const {
            componentCls: t,
            lineWidth: r,
            tableBorderColor: n,
            calc: o
        } = e, l = `${W(r)} ${e.lineType} ${n}`;
        return {
            [`${t}-wrapper`]: {
                [`${t}-summary`]: {
                    position: "relative",
                    zIndex: e.zIndexTableFixed,
                    background: e.tableBg,
                    "> tr": {
                        "> th, > td": {
                            borderBottom: l
                        }
                    }
                },
                [`div${t}-summary`]: {
                    boxShadow: `0 ${W(o(r).mul(-1).equal())} 0 ${n}`
                }
            }
        }
    },
    _o = Zf,
    Qf = e => {
        const {
            componentCls: t,
            motionDurationMid: r,
            lineWidth: n,
            lineType: o,
            tableBorderColor: l,
            calc: c
        } = e, a = `${W(n)} ${o} ${l}`, s = `${t}-expanded-row-cell`;
        return {
            [`${t}-wrapper`]: {
                [`${t}-tbody-virtual`]: {
                    [`${t}-row:not(tr)`]: {
                        display: "flex",
                        boxSizing: "border-box",
                        width: "100%"
                    },
                    [`${t}-cell`]: {
                        borderBottom: a,
                        transition: `background ${r}`
                    },
                    [`${t}-expanded-row`]: {
                        [`${s}${s}-fixed`]: {
                            position: "sticky",
                            insetInlineStart: 0,
                            overflow: "hidden",
                            width: `calc(var(--virtual-width) - ${W(n)})`,
                            borderInlineEnd: "none"
                        }
                    }
                },
                [`${t}-bordered`]: {
                    [`${t}-tbody-virtual`]: {
                        "&:after": {
                            content: '""',
                            insetInline: 0,
                            bottom: 0,
                            borderBottom: a,
                            position: "absolute"
                        },
                        [`${t}-cell`]: {
                            borderInlineEnd: a,
                            [`&${t}-cell-fix-right-first:before`]: {
                                content: '""',
                                position: "absolute",
                                insetBlock: 0,
                                insetInlineStart: c(n).mul(-1).equal(),
                                borderInlineStart: a
                            }
                        }
                    },
                    [`&${t}-virtual`]: {
                        [`${t}-placeholder ${t}-cell`]: {
                            borderInlineEnd: a,
                            borderBottom: a
                        }
                    }
                }
            }
        }
    },
    ep = Qf,
    tp = e => {
        const {
            componentCls: t,
            fontWeightStrong: r,
            tablePaddingVertical: n,
            tablePaddingHorizontal: o,
            tableExpandColumnWidth: l,
            lineWidth: c,
            lineType: a,
            tableBorderColor: s,
            tableFontSize: d,
            tableBg: f,
            tableRadius: u,
            tableHeaderTextColor: p,
            motionDurationMid: m,
            tableHeaderBg: v,
            tableHeaderCellSplitColor: h,
            tableFooterTextColor: g,
            tableFooterBg: b,
            calc: x
        } = e, y = `${W(c)} ${a} ${s}`;
        return {
            [`${t}-wrapper`]: Object.assign(Object.assign({
                clear: "both",
                maxWidth: "100%"
            }, Di()), {
                [t]: Object.assign(Object.assign({}, rn(e)), {
                    fontSize: d,
                    background: f,
                    borderRadius: `${W(u)} ${W(u)} 0 0`,
                    scrollbarColor: `${e.tableScrollThumbBg} ${e.tableScrollBg}`
                }),
                table: {
                    width: "100%",
                    textAlign: "start",
                    borderRadius: `${W(u)} ${W(u)} 0 0`,
                    borderCollapse: "separate",
                    borderSpacing: 0
                },
                [`
          ${t}-cell,
          ${t}-thead > tr > th,
          ${t}-tbody > tr > th,
          ${t}-tbody > tr > td,
          tfoot > tr > th,
          tfoot > tr > td
        `]: {
                    position: "relative",
                    padding: `${W(n)} ${W(o)}`,
                    overflowWrap: "break-word"
                },
                [`${t}-title`]: {
                    padding: `${W(n)} ${W(o)}`
                },
                [`${t}-thead`]: {
                    "\n          > tr > th,\n          > tr > td\n        ": {
                        position: "relative",
                        color: p,
                        fontWeight: r,
                        textAlign: "start",
                        background: v,
                        borderBottom: y,
                        transition: `background ${m} ease`,
                        "&[colspan]:not([colspan='1'])": {
                            textAlign: "center"
                        },
                        [`&:not(:last-child):not(${t}-selection-column):not(${t}-row-expand-icon-cell):not([colspan])::before`]: {
                            position: "absolute",
                            top: "50%",
                            insetInlineEnd: 0,
                            width: 1,
                            height: "1.6em",
                            backgroundColor: h,
                            transform: "translateY(-50%)",
                            transition: `background-color ${m}`,
                            content: '""'
                        }
                    },
                    "> tr:not(:last-child) > th[colspan]": {
                        borderBottom: 0
                    }
                },
                [`${t}-tbody`]: {
                    "> tr": {
                        "> th, > td": {
                            transition: `background ${m}, border-color ${m}`,
                            borderBottom: y,
                            [`
              > ${t}-wrapper:only-child,
              > ${t}-expanded-row-fixed > ${t}-wrapper:only-child
            `]: {
                                [t]: {
                                    marginBlock: W(x(n).mul(-1).equal()),
                                    marginInline: `${W(x(l).sub(o).equal())}
                ${W(x(o).mul(-1).equal())}`,
                                    [`${t}-tbody > tr:last-child > td`]: {
                                        borderBottom: 0,
                                        "&:first-child, &:last-child": {
                                            borderRadius: 0
                                        }
                                    }
                                }
                            }
                        },
                        "> th": {
                            position: "relative",
                            color: p,
                            fontWeight: r,
                            textAlign: "start",
                            background: v,
                            borderBottom: y,
                            transition: `background ${m} ease`
                        }
                    }
                },
                [`${t}-footer`]: {
                    padding: `${W(n)} ${W(o)}`,
                    color: g,
                    background: b
                }
            })
        }
    },
    np = e => {
        const {
            colorFillAlter: t,
            colorBgContainer: r,
            colorTextHeading: n,
            colorFillSecondary: o,
            colorFillContent: l,
            controlItemBgActive: c,
            controlItemBgActiveHover: a,
            padding: s,
            paddingSM: d,
            paddingXS: f,
            colorBorderSecondary: u,
            borderRadiusLG: p,
            controlHeight: m,
            colorTextPlaceholder: v,
            fontSize: h,
            fontSizeSM: g,
            lineHeight: b,
            lineWidth: x,
            colorIcon: y,
            colorIconHover: w,
            opacityLoading: S,
            controlInteractiveSize: R
        } = e, O = new fn(o).onBackground(r).toHexShortString(), N = new fn(l).onBackground(r).toHexShortString(), C = new fn(t).onBackground(r).toHexShortString(), P = new fn(y), M = new fn(w), E = R / 2 - x, I = E * 2 + x * 3;
        return {
            headerBg: C,
            headerColor: n,
            headerSortActiveBg: O,
            headerSortHoverBg: N,
            bodySortBg: C,
            rowHoverBg: C,
            rowSelectedBg: c,
            rowSelectedHoverBg: a,
            rowExpandedBg: t,
            cellPaddingBlock: s,
            cellPaddingInline: s,
            cellPaddingBlockMD: d,
            cellPaddingInlineMD: f,
            cellPaddingBlockSM: f,
            cellPaddingInlineSM: f,
            borderColor: u,
            headerBorderRadius: p,
            footerBg: C,
            footerColor: n,
            cellFontSize: h,
            cellFontSizeMD: h,
            cellFontSizeSM: h,
            headerSplitColor: u,
            fixedHeaderSortActiveBg: O,
            headerFilterHoverBg: l,
            filterDropdownMenuBg: r,
            filterDropdownBg: r,
            expandIconBg: r,
            selectionColumnWidth: m,
            stickyScrollBarBg: v,
            stickyScrollBarBorderRadius: 100,
            expandIconMarginTop: (h * b - x * 3) / 2 - Math.ceil((g * 1.4 - x * 3) / 2),
            headerIconColor: P.clone().setAlpha(P.getAlpha() * S).toRgbString(),
            headerIconHoverColor: M.clone().setAlpha(M.getAlpha() * S).toRgbString(),
            expandIconHalfInner: E,
            expandIconSize: I,
            expandIconScale: R / I
        }
    },
    rp = tn("Table", e => {
        const {
            colorTextHeading: t,
            colorSplit: r,
            colorBgContainer: n,
            controlInteractiveSize: o,
            headerBg: l,
            headerColor: c,
            headerSortActiveBg: a,
            headerSortHoverBg: s,
            bodySortBg: d,
            rowHoverBg: f,
            rowSelectedBg: u,
            rowSelectedHoverBg: p,
            rowExpandedBg: m,
            cellPaddingBlock: v,
            cellPaddingInline: h,
            cellPaddingBlockMD: g,
            cellPaddingInlineMD: b,
            cellPaddingBlockSM: x,
            cellPaddingInlineSM: y,
            borderColor: w,
            footerBg: S,
            footerColor: R,
            headerBorderRadius: O,
            cellFontSize: N,
            cellFontSizeMD: C,
            cellFontSizeSM: P,
            headerSplitColor: M,
            fixedHeaderSortActiveBg: E,
            headerFilterHoverBg: I,
            filterDropdownBg: $,
            expandIconBg: D,
            selectionColumnWidth: B,
            stickyScrollBarBg: T,
            calc: L
        } = e, _ = 2, z = nn(e, {
            tableFontSize: N,
            tableBg: n,
            tableRadius: O,
            tablePaddingVertical: v,
            tablePaddingHorizontal: h,
            tablePaddingVerticalMiddle: g,
            tablePaddingHorizontalMiddle: b,
            tablePaddingVerticalSmall: x,
            tablePaddingHorizontalSmall: y,
            tableBorderColor: w,
            tableHeaderTextColor: c,
            tableHeaderBg: l,
            tableFooterTextColor: R,
            tableFooterBg: S,
            tableHeaderCellSplitColor: M,
            tableHeaderSortBg: a,
            tableHeaderSortHoverBg: s,
            tableBodySortBg: d,
            tableFixedHeaderSortActiveBg: E,
            tableHeaderFilterActiveBg: I,
            tableFilterDropdownBg: $,
            tableRowHoverBg: f,
            tableSelectedRowBg: u,
            tableSelectedRowHoverBg: p,
            zIndexTableFixed: _,
            zIndexTableSticky: _ + 1,
            tableFontSizeMiddle: C,
            tableFontSizeSmall: P,
            tableSelectionColumnWidth: B,
            tableExpandIconBg: D,
            tableExpandColumnWidth: L(o).add(L(e.padding).mul(2)).equal(),
            tableExpandedRowBg: m,
            tableFilterDropdownWidth: 120,
            tableFilterDropdownHeight: 264,
            tableFilterDropdownSearchWidth: 140,
            tableScrollThumbSize: 8,
            tableScrollThumbBg: T,
            tableScrollThumbBgHover: t,
            tableScrollBg: r
        });
        return [tp(z), _f(z), _o(z), Gf(z), zf(z), Of(z), Af(z), Kf(z), _o(z), Tf(z), Wf(z), Bf(z), Jf(z), If(z), qf(z), Ff(z), ep(z)]
    }, np, {
        unitless: {
            expandIconScale: !0
        }
    }),
    op = [],
    ap = (e, t) => {
        var r, n;
        const {
            prefixCls: o,
            className: l,
            rootClassName: c,
            style: a,
            size: s,
            bordered: d,
            dropdownPrefixCls: f,
            dataSource: u,
            pagination: p,
            rowSelection: m,
            rowKey: v = "key",
            rowClassName: h,
            columns: g,
            children: b,
            childrenColumnName: x,
            onChange: y,
            getPopupContainer: w,
            loading: S,
            expandIcon: R,
            expandable: O,
            expandedRowRender: N,
            expandIconColumnIndex: C,
            indentSize: P,
            scroll: M,
            sortDirections: E,
            locale: I,
            showSorterTooltip: $ = {
                target: "full-header"
            },
            virtual: D
        } = e;
        Dn();
        const B = i.useMemo(() => g || Tr(b), [g, b]),
            T = i.useMemo(() => B.some(he => he.responsive), [B]),
            L = oa(T),
            _ = i.useMemo(() => {
                const he = new Set(Object.keys(L).filter(Se => L[Se]));
                return B.filter(Se => !Se.responsive || Se.responsive.some(Ne => he.has(Ne)))
            }, [B, L]),
            z = xn(e, ["className", "style", "columns"]),
            {
                locale: k = Mi,
                direction: A,
                table: j,
                renderEmpty: ae,
                getPrefixCls: Q,
                getPopupContainer: re
            } = i.useContext(tt),
            te = on(s),
            se = Object.assign(Object.assign({}, k.Table), I),
            le = u || op,
            fe = Q("table", o),
            ne = Q("dropdown", f),
            [, q] = zn(),
            U = bn(fe),
            [G, H, ge] = rp(fe, U),
            V = Object.assign(Object.assign({
                childrenColumnName: x,
                expandIconColumnIndex: C
            }, O), {
                expandIcon: (r = O == null ? void 0 : O.expandIcon) !== null && r !== void 0 ? r : (n = j == null ? void 0 : j.expandable) === null || n === void 0 ? void 0 : n.expandIcon
            }),
            {
                childrenColumnName: ce = "children"
            } = V,
            Ce = i.useMemo(() => le.some(he => he == null ? void 0 : he[ce]) ? "nest" : N || O && O.expandedRowRender ? "row" : null, [le]),
            ee = {
                body: i.useRef()
            },
            ie = Ld(fe),
            pe = i.useRef(null),
            oe = i.useRef(null);
        Md(t, () => Object.assign(Object.assign({}, oe.current), {
            nativeElement: pe.current
        }));
        const xe = i.useMemo(() => typeof v == "function" ? v : he => he == null ? void 0 : he[v], [v]),
            [Ee] = lf(le, ce, xe),
            ye = {},
            Xe = function(he, Se) {
                let Ne = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                var Le, Ue, Ve;
                const Ge = Object.assign(Object.assign({}, ye), he);
                Ne && ((Le = ye.resetPagination) === null || Le === void 0 || Le.call(ye), !((Ue = Ge.pagination) === null || Ue === void 0) && Ue.current && (Ge.pagination.current = 1), p && p.onChange && p.onChange(1, (Ve = Ge.pagination) === null || Ve === void 0 ? void 0 : Ve.pageSize)), M && M.scrollToFirstRowOnChange !== !1 && ee.body.current && qi(0, {
                    getContainer: () => ee.body.current
                }), y == null || y(Ge.pagination, Ge.filters, Ge.sorter, {
                    currentDataSource: hr(br(le, Ge.sorterStates, ce), Ge.filterStates, ce),
                    action: Se
                })
            },
            _e = (he, Se) => {
                Xe({
                    sorter: he,
                    sorterStates: Se
                }, "sort", !1)
            },
            [Ie, J, ue, be] = Sf({
                prefixCls: fe,
                mergedColumns: _,
                onSorterChange: _e,
                sortDirections: E || ["ascend", "descend"],
                tableLocale: se,
                showSorterTooltip: $
            }),
            De = i.useMemo(() => br(le, J, ce), [le, J]);
        ye.sorter = be(), ye.sorterStates = J;
        const ze = (he, Se) => {
                Xe({
                    filters: he,
                    filterStates: Se
                }, "filter", !0)
            },
            [Pe, Be, Ae] = af({
                prefixCls: fe,
                locale: se,
                dropdownPrefixCls: ne,
                mergedColumns: _,
                onFilterChange: ze,
                getPopupContainer: w || re,
                rootClassName: F(c, U)
            }),
            ke = hr(De, Be, ce);
        ye.filters = Ae, ye.filterStates = Be;
        const at = i.useMemo(() => {
                const he = {};
                return Object.keys(Ae).forEach(Se => {
                    Ae[Se] !== null && (he[Se] = Ae[Se])
                }), Object.assign(Object.assign({}, ue), {
                    filters: he
                })
            }, [ue, Ae]),
            [Ze] = wf(at),
            kt = (he, Se) => {
                Xe({
                    pagination: Object.assign(Object.assign({}, ye.pagination), {
                        current: he,
                        pageSize: Se
                    })
                }, "paginate")
            },
            [Ke, Kt] = df(ke.length, kt, p);
        ye.pagination = p === !1 ? {} : cf(Ke, p), ye.resetPagination = Kt;
        const Qe = i.useMemo(() => {
                if (p === !1 || !Ke.pageSize) return ke;
                const {
                    current: he = 1,
                    total: Se,
                    pageSize: Ne = Ya
                } = Ke;
                return ke.length < Se ? ke.length > Ne ? ke.slice((he - 1) * Ne, he * Ne) : ke : ke.slice((he - 1) * Ne, he * Ne)
            }, [!!p, ke, Ke && Ke.current, Ke && Ke.pageSize, Ke && Ke.total]),
            [ct, et] = Dd({
                prefixCls: fe,
                data: ke,
                pageData: Qe,
                getRowKey: xe,
                getRecordByKey: Ee,
                expandType: Ce,
                childrenColumnName: ce,
                locale: se,
                getPopupContainer: w || re
            }, m),
            Ct = (he, Se, Ne) => {
                let Le;
                return typeof h == "function" ? Le = F(h(he, Se, Ne)) : Le = F(h), F({
                    [`${fe}-row-selected`]: et.has(xe(he, Se))
                }, Le)
            };
        V.__PARENT_RENDER_ICON__ = V.expandIcon, V.expandIcon = V.expandIcon || R || Bd(se), Ce === "nest" && V.expandIconColumnIndex === void 0 ? V.expandIconColumnIndex = m ? 1 : 0 : V.expandIconColumnIndex > 0 && m && (V.expandIconColumnIndex -= 1), typeof V.indentSize != "number" && (V.indentSize = typeof P == "number" ? P : 15);
        const gt = i.useCallback(he => Ze(ct(Pe(Ie(he)))), [Ie, Pe, ct]);
        let Fe, qe;
        if (p !== !1 && (Ke != null && Ke.total)) {
            let he;
            Ke.size ? he = Ke.size : he = te === "small" || te === "middle" ? "small" : void 0;
            const Se = Ue => i.createElement(rc, Object.assign({}, Ke, {
                    className: F(`${fe}-pagination ${fe}-pagination-${Ue}`, Ke.className),
                    size: he
                })),
                Ne = A === "rtl" ? "left" : "right",
                {
                    position: Le
                } = Ke;
            if (Le !== null && Array.isArray(Le)) {
                const Ue = Le.find(ft => ft.includes("top")),
                    Ve = Le.find(ft => ft.includes("bottom")),
                    Ge = Le.every(ft => `${ft}` == "none");
                !Ue && !Ve && !Ge && (qe = Se(Ne)), Ue && (Fe = Se(Ue.toLowerCase().replace("top", ""))), Ve && (qe = Se(Ve.toLowerCase().replace("bottom", "")))
            } else qe = Se(Ne)
        }
        let Te;
        typeof S == "boolean" ? Te = {
            spinning: S
        } : typeof S == "object" && (Te = Object.assign({
            spinning: !0
        }, S));
        const je = F(ge, U, `${fe}-wrapper`, j == null ? void 0 : j.className, {
                [`${fe}-wrapper-rtl`]: A === "rtl"
            }, l, c, H),
            it = Object.assign(Object.assign({}, j == null ? void 0 : j.style), a),
            ut = I && I.emptyText || (ae == null ? void 0 : ae("Table")) || i.createElement(zi, {
                componentName: "Table"
            }),
            cn = D ? Ef : $f,
            St = {},
            wt = i.useMemo(() => {
                const {
                    fontSize: he,
                    lineHeight: Se,
                    padding: Ne,
                    paddingXS: Le,
                    paddingSM: Ue
                } = q, Ve = Math.floor(he * Se);
                switch (te) {
                    case "large":
                        return Ne * 2 + Ve;
                    case "small":
                        return Le * 2 + Ve;
                    default:
                        return Ue * 2 + Ve
                }
            }, [q, te]);
        return D && (St.listItemHeight = wt), G(i.createElement("div", {
            ref: pe,
            className: je,
            style: it
        }, i.createElement(gc, Object.assign({
            spinning: !1
        }, Te), Fe, i.createElement(cn, Object.assign({}, St, z, {
            ref: oe,
            columns: _,
            direction: A,
            expandable: V,
            prefixCls: fe,
            className: F({
                [`${fe}-middle`]: te === "middle",
                [`${fe}-small`]: te === "small",
                [`${fe}-bordered`]: d,
                [`${fe}-empty`]: le.length === 0
            }, ge, U, H),
            data: Qe,
            rowKey: xe,
            rowClassName: Ct,
            emptyText: ut,
            internalHooks: Sn,
            internalRefs: ee,
            transformColumns: gt,
            getContainerWidth: ie
        })), qe)))
    },
    ip = i.forwardRef(ap),
    lp = (e, t) => {
        const r = i.useRef(0);
        return r.current += 1, i.createElement(ip, Object.assign({}, e, {
            ref: t,
            _renderTimes: r.current
        }))
    },
    Et = i.forwardRef(lp);
Et.SELECTION_COLUMN = Rt;
Et.EXPAND_COLUMN = It;
Et.SELECTION_ALL = fr;
Et.SELECTION_INVERT = pr;
Et.SELECTION_NONE = mr;
Et.Column = wd;
Et.ColumnGroup = $d;
Et.Summary = Na;
const dp = Et;
export {
    ll as D, Cs as I, sr as R, gc as S, dp as T
};