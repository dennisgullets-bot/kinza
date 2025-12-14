import {
    a8 as mr,
    a9 as u,
    aa as L,
    ab as s,
    ac as vr,
    ad as Sr,
    ae as rr,
    af as xr,
    r as F,
    W as f,
    ag as Cr,
    ah as m,
    ai as wr,
    aj as J,
    ak as Er,
    al as yr
} from "./index-45fe981f.js";
const Rr = ["xxl", "xl", "lg", "md", "sm", "xs"],
    Br = r => ({
        xs: `(max-width: ${r.screenXSMax}px)`,
        sm: `(min-width: ${r.screenSM}px)`,
        md: `(min-width: ${r.screenMD}px)`,
        lg: `(min-width: ${r.screenLG}px)`,
        xl: `(min-width: ${r.screenXL}px)`,
        xxl: `(min-width: ${r.screenXXL}px)`
    }),
    Ir = r => {
        const e = r,
            o = [].concat(Rr).reverse();
        return o.forEach((i, a) => {
            const n = i.toUpperCase(),
                t = `screen${n}Min`,
                l = `screen${n}`;
            if (!(e[t] <= e[l])) throw new Error(`${t}<=${l} fails : !(${e[t]}<=${e[l]})`);
            if (a < o.length - 1) {
                const c = `screen${n}Max`;
                if (!(e[l] <= e[c])) throw new Error(`${l}<=${c} fails : !(${e[l]}<=${e[c]})`);
                const g = `screen${o[a+1].toUpperCase()}Min`;
                if (!(e[c] <= e[g])) throw new Error(`${c}<=${g} fails : !(${e[c]}<=${e[g]})`)
            }
        }), r
    };

function Yr() {
    const [, r] = mr(), e = Br(Ir(r));
    return u.useMemo(() => {
        const o = new Map;
        let i = -1,
            a = {};
        return {
            matchHandlers: {},
            dispatch(n) {
                return a = n, o.forEach(t => t(a)), o.size >= 1
            },
            subscribe(n) {
                return o.size || this.register(), i += 1, o.set(i, n), n(a), i
            },
            unsubscribe(n) {
                o.delete(n), o.size || this.unregister()
            },
            unregister() {
                Object.keys(e).forEach(n => {
                    const t = e[n],
                        l = this.matchHandlers[t];
                    l == null || l.mql.removeListener(l == null ? void 0 : l.listener)
                }), o.clear()
            },
            register() {
                Object.keys(e).forEach(n => {
                    const t = e[n],
                        l = v => {
                            let {
                                matches: g
                            } = v;
                            this.dispatch(Object.assign(Object.assign({}, a), {
                                [n]: g
                            }))
                        },
                        c = window.matchMedia(t);
                    c.addListener(l), this.matchHandlers[t] = {
                        mql: c,
                        listener: l
                    }, l(c)
                })
            },
            responsiveMap: e
        }
    }, [r])
}

function Or(r) {
    return L(r, {
        inputAffixPadding: r.paddingXXS
    })
}
const jr = r => {
        const {
            controlHeight: e,
            fontSize: o,
            lineHeight: i,
            lineWidth: a,
            controlHeightSM: n,
            controlHeightLG: t,
            fontSizeLG: l,
            lineHeightLG: c,
            paddingSM: v,
            controlPaddingHorizontalSM: g,
            controlPaddingHorizontal: j,
            colorFillAlter: W,
            colorPrimaryHover: C,
            colorPrimary: B,
            controlOutlineWidth: w,
            controlOutline: E,
            colorErrorOutline: b,
            colorWarningOutline: y,
            colorBgContainer: I
        } = r;
        return {
            paddingBlock: Math.max(Math.round((e - o * i) / 2 * 10) / 10 - a, 0),
            paddingBlockSM: Math.max(Math.round((n - o * i) / 2 * 10) / 10 - a, 0),
            paddingBlockLG: Math.ceil((t - l * c) / 2 * 10) / 10 - a,
            paddingInline: v - a,
            paddingInlineSM: g - a,
            paddingInlineLG: j - a,
            addonBg: W,
            activeBorderColor: B,
            hoverBorderColor: C,
            activeShadow: `0 0 0 ${w}px ${E}`,
            errorActiveShadow: `0 0 0 ${w}px ${b}`,
            warningActiveShadow: `0 0 0 ${w}px ${y}`,
            hoverBg: I,
            activeBg: I,
            inputFontSize: o,
            inputFontSizeLG: l,
            inputFontSizeSM: o
        }
    },
    Wr = r => ({
        borderColor: r.hoverBorderColor,
        backgroundColor: r.hoverBg
    }),
    D = r => ({
        color: r.colorTextDisabled,
        backgroundColor: r.colorBgContainerDisabled,
        borderColor: r.colorBorder,
        boxShadow: "none",
        cursor: "not-allowed",
        opacity: 1,
        "input[disabled], textarea[disabled]": {
            cursor: "not-allowed"
        },
        "&:hover:not([disabled])": Object.assign({}, Wr(L(r, {
            hoverBorderColor: r.colorBorder,
            hoverBg: r.colorBgContainerDisabled
        })))
    }),
    er = (r, e) => ({
        background: r.colorBgContainer,
        borderWidth: r.lineWidth,
        borderStyle: r.lineType,
        borderColor: e.borderColor,
        "&:hover": {
            borderColor: e.hoverBorderColor,
            backgroundColor: r.hoverBg
        },
        "&:focus, &:focus-within": {
            borderColor: e.activeBorderColor,
            boxShadow: e.activeShadow,
            outline: 0,
            backgroundColor: r.activeBg
        }
    }),
    K = (r, e) => ({
        [`&${r.componentCls}-status-${e.status}:not(${r.componentCls}-disabled)`]: Object.assign(Object.assign({}, er(r, e)), {
            [`${r.componentCls}-prefix, ${r.componentCls}-suffix`]: {
                color: e.affixColor
            }
        }),
        [`&${r.componentCls}-status-${e.status}${r.componentCls}-disabled`]: {
            borderColor: e.borderColor
        }
    }),
    Tr = (r, e) => ({
        "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, er(r, {
            borderColor: r.colorBorder,
            hoverBorderColor: r.hoverBorderColor,
            activeBorderColor: r.activeBorderColor,
            activeShadow: r.activeShadow
        })), {
            [`&${r.componentCls}-disabled, &[disabled]`]: Object.assign({}, D(r))
        }), K(r, {
            status: "error",
            borderColor: r.colorError,
            hoverBorderColor: r.colorErrorBorderHover,
            activeBorderColor: r.colorError,
            activeShadow: r.errorActiveShadow,
            affixColor: r.colorError
        })), K(r, {
            status: "warning",
            borderColor: r.colorWarning,
            hoverBorderColor: r.colorWarningBorderHover,
            activeBorderColor: r.colorWarning,
            activeShadow: r.warningActiveShadow,
            affixColor: r.colorWarning
        })), e)
    }),
    Y = (r, e) => ({
        [`&${r.componentCls}-group-wrapper-status-${e.status}`]: {
            [`${r.componentCls}-group-addon`]: {
                borderColor: e.addonBorderColor,
                color: e.addonColor
            }
        }
    }),
    Hr = r => ({
        "&-outlined": Object.assign(Object.assign(Object.assign({
            [`${r.componentCls}-group`]: {
                "&-addon": {
                    background: r.addonBg,
                    border: `${s(r.lineWidth)} ${r.lineType} ${r.colorBorder}`
                },
                "&-addon:first-child": {
                    borderInlineEnd: 0
                },
                "&-addon:last-child": {
                    borderInlineStart: 0
                }
            }
        }, Y(r, {
            status: "error",
            addonBorderColor: r.colorError,
            addonColor: r.colorErrorText
        })), Y(r, {
            status: "warning",
            addonBorderColor: r.colorWarning,
            addonColor: r.colorWarningText
        })), {
            [`&${r.componentCls}-group-wrapper-disabled`]: {
                [`${r.componentCls}-group-addon`]: Object.assign({}, D(r))
            }
        })
    }),
    zr = (r, e) => ({
        "&-borderless": Object.assign({
            background: "transparent",
            border: "none",
            "&:focus, &:focus-within": {
                outline: "none"
            },
            [`&${r.componentCls}-disabled, &[disabled]`]: {
                color: r.colorTextDisabled
            }
        }, e)
    }),
    or = (r, e) => ({
        background: e.bg,
        borderWidth: r.lineWidth,
        borderStyle: r.lineType,
        borderColor: "transparent",
        "input&, & input, textarea&, & textarea": {
            color: e == null ? void 0 : e.inputColor
        },
        "&:hover": {
            background: e.hoverBg
        },
        "&:focus, &:focus-within": {
            outline: 0,
            borderColor: e.activeBorderColor,
            backgroundColor: r.activeBg
        }
    }),
    Z = (r, e) => ({
        [`&${r.componentCls}-status-${e.status}:not(${r.componentCls}-disabled)`]: Object.assign(Object.assign({}, or(r, e)), {
            [`${r.componentCls}-prefix, ${r.componentCls}-suffix`]: {
                color: e.affixColor
            }
        })
    }),
    Mr = (r, e) => ({
        "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, or(r, {
            bg: r.colorFillTertiary,
            hoverBg: r.colorFillSecondary,
            activeBorderColor: r.colorPrimary
        })), {
            [`&${r.componentCls}-disabled, &[disabled]`]: Object.assign({}, D(r))
        }), Z(r, {
            status: "error",
            bg: r.colorErrorBg,
            hoverBg: r.colorErrorBgHover,
            activeBorderColor: r.colorError,
            inputColor: r.colorErrorText,
            affixColor: r.colorError
        })), Z(r, {
            status: "warning",
            bg: r.colorWarningBg,
            hoverBg: r.colorWarningBgHover,
            activeBorderColor: r.colorWarning,
            inputColor: r.colorWarningText,
            affixColor: r.colorWarning
        })), e)
    }),
    V = (r, e) => ({
        [`&${r.componentCls}-group-wrapper-status-${e.status}`]: {
            [`${r.componentCls}-group-addon`]: {
                background: e.addonBg,
                color: e.addonColor
            }
        }
    }),
    Ar = r => ({
        "&-filled": Object.assign(Object.assign(Object.assign({
            [`${r.componentCls}-group`]: {
                "&-addon": {
                    background: r.colorFillTertiary
                },
                [`${r.componentCls}-filled:not(:focus):not(:focus-within)`]: {
                    "&:not(:first-child)": {
                        borderInlineStart: `${s(r.lineWidth)} ${r.lineType} ${r.colorSplit}`
                    },
                    "&:not(:last-child)": {
                        borderInlineEnd: `${s(r.lineWidth)} ${r.lineType} ${r.colorSplit}`
                    }
                }
            }
        }, V(r, {
            status: "error",
            addonBg: r.colorErrorBg,
            addonColor: r.colorErrorText
        })), V(r, {
            status: "warning",
            addonBg: r.colorWarningBg,
            addonColor: r.colorWarningText
        })), {
            [`&${r.componentCls}-group-wrapper-disabled`]: {
                [`${r.componentCls}-group`]: {
                    "&-addon": {
                        background: r.colorFillTertiary,
                        color: r.colorTextDisabled
                    },
                    "&-addon:first-child": {
                        borderInlineStart: `${s(r.lineWidth)} ${r.lineType} ${r.colorBorder}`,
                        borderTop: `${s(r.lineWidth)} ${r.lineType} ${r.colorBorder}`,
                        borderBottom: `${s(r.lineWidth)} ${r.lineType} ${r.colorBorder}`
                    },
                    "&-addon:last-child": {
                        borderInlineEnd: `${s(r.lineWidth)} ${r.lineType} ${r.colorBorder}`,
                        borderTop: `${s(r.lineWidth)} ${r.lineType} ${r.colorBorder}`,
                        borderBottom: `${s(r.lineWidth)} ${r.lineType} ${r.colorBorder}`
                    }
                }
            }
        })
    }),
    Gr = r => ({
        "&::-moz-placeholder": {
            opacity: 1
        },
        "&::placeholder": {
            color: r,
            userSelect: "none"
        },
        "&:placeholder-shown": {
            textOverflow: "ellipsis"
        }
    }),
    ir = r => {
        const {
            paddingBlockLG: e,
            lineHeightLG: o,
            borderRadiusLG: i,
            paddingInlineLG: a
        } = r;
        return {
            padding: `${s(e)} ${s(a)}`,
            fontSize: r.inputFontSizeLG,
            lineHeight: o,
            borderRadius: i
        }
    },
    ar = r => ({
        padding: `${s(r.paddingBlockSM)} ${s(r.paddingInlineSM)}`,
        fontSize: r.inputFontSizeSM,
        borderRadius: r.borderRadiusSM
    }),
    nr = r => Object.assign(Object.assign({
        position: "relative",
        display: "inline-block",
        width: "100%",
        minWidth: 0,
        padding: `${s(r.paddingBlock)} ${s(r.paddingInline)}`,
        color: r.colorText,
        fontSize: r.inputFontSize,
        lineHeight: r.lineHeight,
        borderRadius: r.borderRadius,
        transition: `all ${r.motionDurationMid}`
    }, Gr(r.colorTextPlaceholder)), {
        "textarea&": {
            maxWidth: "100%",
            height: "auto",
            minHeight: r.controlHeight,
            lineHeight: r.lineHeight,
            verticalAlign: "bottom",
            transition: `all ${r.motionDurationSlow}, height 0s`,
            resize: "vertical"
        },
        "&-lg": Object.assign({}, ir(r)),
        "&-sm": Object.assign({}, ar(r)),
        "&-rtl, &-textarea-rtl": {
            direction: "rtl"
        }
    }),
    Fr = r => {
        const {
            componentCls: e,
            antCls: o
        } = r;
        return {
            position: "relative",
            display: "table",
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0,
            "&[class*='col-']": {
                paddingInlineEnd: r.paddingXS,
                "&:last-child": {
                    paddingInlineEnd: 0
                }
            },
            [`&-lg ${e}, &-lg > ${e}-group-addon`]: Object.assign({}, ir(r)),
            [`&-sm ${e}, &-sm > ${e}-group-addon`]: Object.assign({}, ar(r)),
            [`&-lg ${o}-select-single ${o}-select-selector`]: {
                height: r.controlHeightLG
            },
            [`&-sm ${o}-select-single ${o}-select-selector`]: {
                height: r.controlHeightSM
            },
            [`> ${e}`]: {
                display: "table-cell",
                "&:not(:first-child):not(:last-child)": {
                    borderRadius: 0
                }
            },
            [`${e}-group`]: {
                "&-addon, &-wrap": {
                    display: "table-cell",
                    width: 1,
                    whiteSpace: "nowrap",
                    verticalAlign: "middle",
                    "&:not(:first-child):not(:last-child)": {
                        borderRadius: 0
                    }
                },
                "&-wrap > *": {
                    display: "block !important"
                },
                "&-addon": {
                    position: "relative",
                    padding: `0 ${s(r.paddingInline)}`,
                    color: r.colorText,
                    fontWeight: "normal",
                    fontSize: r.inputFontSize,
                    textAlign: "center",
                    borderRadius: r.borderRadius,
                    transition: `all ${r.motionDurationSlow}`,
                    lineHeight: 1,
                    [`${o}-select`]: {
                        margin: `${s(r.calc(r.paddingBlock).add(1).mul(-1).equal())} ${s(r.calc(r.paddingInline).mul(-1).equal())}`,
                        [`&${o}-select-single:not(${o}-select-customize-input):not(${o}-pagination-size-changer)`]: {
                            [`${o}-select-selector`]: {
                                backgroundColor: "inherit",
                                border: `${s(r.lineWidth)} ${r.lineType} transparent`,
                                boxShadow: "none"
                            }
                        },
                        "&-open, &-focused": {
                            [`${o}-select-selector`]: {
                                color: r.colorPrimary
                            }
                        }
                    },
                    [`${o}-cascader-picker`]: {
                        margin: `-9px ${s(r.calc(r.paddingInline).mul(-1).equal())}`,
                        backgroundColor: "transparent",
                        [`${o}-cascader-input`]: {
                            textAlign: "start",
                            border: 0,
                            boxShadow: "none"
                        }
                    }
                }
            },
            [`${e}`]: {
                width: "100%",
                marginBottom: 0,
                textAlign: "inherit",
                "&:focus": {
                    zIndex: 1,
                    borderInlineEndWidth: 1
                },
                "&:hover": {
                    zIndex: 1,
                    borderInlineEndWidth: 1,
                    [`${e}-search-with-button &`]: {
                        zIndex: 0
                    }
                }
            },
            [`> ${e}:first-child, ${e}-group-addon:first-child`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
                [`${o}-select ${o}-select-selector`]: {
                    borderStartEndRadius: 0,
                    borderEndEndRadius: 0
                }
            },
            [`> ${e}-affix-wrapper`]: {
                [`&:not(:first-child) ${e}`]: {
                    borderStartStartRadius: 0,
                    borderEndStartRadius: 0
                },
                [`&:not(:last-child) ${e}`]: {
                    borderStartEndRadius: 0,
                    borderEndEndRadius: 0
                }
            },
            [`> ${e}:last-child, ${e}-group-addon:last-child`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0,
                [`${o}-select ${o}-select-selector`]: {
                    borderStartStartRadius: 0,
                    borderEndStartRadius: 0
                }
            },
            [`${e}-affix-wrapper`]: {
                "&:not(:last-child)": {
                    borderStartEndRadius: 0,
                    borderEndEndRadius: 0,
                    [`${e}-search &`]: {
                        borderStartStartRadius: r.borderRadius,
                        borderEndStartRadius: r.borderRadius
                    }
                },
                [`&:not(:first-child), ${e}-search &:not(:first-child)`]: {
                    borderStartStartRadius: 0,
                    borderEndStartRadius: 0
                }
            },
            [`&${e}-group-compact`]: Object.assign(Object.assign({
                display: "block"
            }, xr()), {
                [`${e}-group-addon, ${e}-group-wrap, > ${e}`]: {
                    "&:not(:first-child):not(:last-child)": {
                        borderInlineEndWidth: r.lineWidth,
                        "&:hover, &:focus": {
                            zIndex: 1
                        }
                    }
                },
                "& > *": {
                    display: "inline-flex",
                    float: "none",
                    verticalAlign: "top",
                    borderRadius: 0
                },
                [`
        & > ${e}-affix-wrapper,
        & > ${e}-number-affix-wrapper,
        & > ${o}-picker-range
      `]: {
                    display: "inline-flex"
                },
                "& > *:not(:last-child)": {
                    marginInlineEnd: r.calc(r.lineWidth).mul(-1).equal(),
                    borderInlineEndWidth: r.lineWidth
                },
                [`${e}`]: {
                    float: "none"
                },
                [`& > ${o}-select > ${o}-select-selector,
      & > ${o}-select-auto-complete ${e},
      & > ${o}-cascader-picker ${e},
      & > ${e}-group-wrapper ${e}`]: {
                    borderInlineEndWidth: r.lineWidth,
                    borderRadius: 0,
                    "&:hover, &:focus": {
                        zIndex: 1
                    }
                },
                [`& > ${o}-select-focused`]: {
                    zIndex: 1
                },
                [`& > ${o}-select > ${o}-select-arrow`]: {
                    zIndex: 1
                },
                [`& > *:first-child,
      & > ${o}-select:first-child > ${o}-select-selector,
      & > ${o}-select-auto-complete:first-child ${e},
      & > ${o}-cascader-picker:first-child ${e}`]: {
                    borderStartStartRadius: r.borderRadius,
                    borderEndStartRadius: r.borderRadius
                },
                [`& > *:last-child,
      & > ${o}-select:last-child > ${o}-select-selector,
      & > ${o}-cascader-picker:last-child ${e},
      & > ${o}-cascader-picker-focused:last-child ${e}`]: {
                    borderInlineEndWidth: r.lineWidth,
                    borderStartEndRadius: r.borderRadius,
                    borderEndEndRadius: r.borderRadius
                },
                [`& > ${o}-select-auto-complete ${e}`]: {
                    verticalAlign: "top"
                },
                [`${e}-group-wrapper + ${e}-group-wrapper`]: {
                    marginInlineStart: r.calc(r.lineWidth).mul(-1).equal(),
                    [`${e}-affix-wrapper`]: {
                        borderRadius: 0
                    }
                },
                [`${e}-group-wrapper:not(:last-child)`]: {
                    [`&${e}-search > ${e}-group`]: {
                        [`& > ${e}-group-addon > ${e}-search-button`]: {
                            borderRadius: 0
                        },
                        [`& > ${e}`]: {
                            borderStartStartRadius: r.borderRadius,
                            borderStartEndRadius: 0,
                            borderEndEndRadius: 0,
                            borderEndStartRadius: r.borderRadius
                        }
                    }
                }
            })
        }
    },
    Lr = r => {
        const {
            componentCls: e,
            controlHeightSM: o,
            lineWidth: i,
            calc: a
        } = r, n = 16, t = a(o).sub(a(i).mul(2)).sub(n).div(2).equal();
        return {
            [e]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, rr(r)), nr(r)), Tr(r)), Mr(r)), zr(r)), {
                '&[type="color"]': {
                    height: r.controlHeight,
                    [`&${e}-lg`]: {
                        height: r.controlHeightLG
                    },
                    [`&${e}-sm`]: {
                        height: o,
                        paddingTop: t,
                        paddingBottom: t
                    }
                },
                '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
                    "-webkit-appearance": "none"
                }
            })
        }
    },
    Dr = r => {
        const {
            componentCls: e
        } = r;
        return {
            [`${e}-clear-icon`]: {
                margin: 0,
                color: r.colorTextQuaternary,
                fontSize: r.fontSizeIcon,
                verticalAlign: -1,
                cursor: "pointer",
                transition: `color ${r.motionDurationSlow}`,
                "&:hover": {
                    color: r.colorTextTertiary
                },
                "&:active": {
                    color: r.colorText
                },
                "&-hidden": {
                    visibility: "hidden"
                },
                "&-has-suffix": {
                    margin: `0 ${s(r.inputAffixPadding)}`
                }
            }
        }
    },
    Nr = r => {
        const {
            componentCls: e,
            inputAffixPadding: o,
            colorTextDescription: i,
            motionDurationSlow: a,
            colorIcon: n,
            colorIconHover: t,
            iconCls: l
        } = r;
        return {
            [`${e}-affix-wrapper`]: Object.assign(Object.assign(Object.assign(Object.assign({}, nr(r)), {
                display: "inline-flex",
                [`&:not(${e}-disabled):hover`]: {
                    zIndex: 1,
                    [`${e}-search-with-button &`]: {
                        zIndex: 0
                    }
                },
                "&-focused, &:focus": {
                    zIndex: 1
                },
                [`> input${e}`]: {
                    padding: 0
                },
                [`> input${e}, > textarea${e}`]: {
                    fontSize: "inherit",
                    border: "none",
                    borderRadius: 0,
                    outline: "none",
                    background: "transparent",
                    color: "inherit",
                    "&::-ms-reveal": {
                        display: "none"
                    },
                    "&:focus": {
                        boxShadow: "none !important"
                    }
                },
                "&::before": {
                    display: "inline-block",
                    width: 0,
                    visibility: "hidden",
                    content: '"\\a0"'
                },
                [`${e}`]: {
                    "&-prefix, &-suffix": {
                        display: "flex",
                        flex: "none",
                        alignItems: "center",
                        "> *:not(:last-child)": {
                            marginInlineEnd: r.paddingXS
                        }
                    },
                    "&-show-count-suffix": {
                        color: i
                    },
                    "&-show-count-has-suffix": {
                        marginInlineEnd: r.paddingXXS
                    },
                    "&-prefix": {
                        marginInlineEnd: o
                    },
                    "&-suffix": {
                        marginInlineStart: o
                    }
                }
            }), Dr(r)), {
                [`${l}${e}-password-icon`]: {
                    color: n,
                    cursor: "pointer",
                    transition: `all ${a}`,
                    "&:hover": {
                        color: t
                    }
                }
            })
        }
    },
    Pr = r => {
        const {
            componentCls: e,
            borderRadiusLG: o,
            borderRadiusSM: i
        } = r;
        return {
            [`${e}-group`]: Object.assign(Object.assign(Object.assign({}, rr(r)), Fr(r)), {
                "&-rtl": {
                    direction: "rtl"
                },
                "&-wrapper": Object.assign(Object.assign(Object.assign({
                    display: "inline-block",
                    width: "100%",
                    textAlign: "start",
                    verticalAlign: "top",
                    "&-rtl": {
                        direction: "rtl"
                    },
                    "&-lg": {
                        [`${e}-group-addon`]: {
                            borderRadius: o,
                            fontSize: r.inputFontSizeLG
                        }
                    },
                    "&-sm": {
                        [`${e}-group-addon`]: {
                            borderRadius: i
                        }
                    }
                }, Hr(r)), Ar(r)), {
                    [`&:not(${e}-compact-first-item):not(${e}-compact-last-item)${e}-compact-item`]: {
                        [`${e}, ${e}-group-addon`]: {
                            borderRadius: 0
                        }
                    },
                    [`&:not(${e}-compact-last-item)${e}-compact-first-item`]: {
                        [`${e}, ${e}-group-addon`]: {
                            borderStartEndRadius: 0,
                            borderEndEndRadius: 0
                        }
                    },
                    [`&:not(${e}-compact-first-item)${e}-compact-last-item`]: {
                        [`${e}, ${e}-group-addon`]: {
                            borderStartStartRadius: 0,
                            borderEndStartRadius: 0
                        }
                    },
                    [`&:not(${e}-compact-last-item)${e}-compact-item`]: {
                        [`${e}-affix-wrapper`]: {
                            borderStartEndRadius: 0,
                            borderEndEndRadius: 0
                        }
                    }
                })
            })
        }
    },
    Xr = r => {
        const {
            componentCls: e,
            antCls: o
        } = r, i = `${e}-search`;
        return {
            [i]: {
                [`${e}`]: {
                    "&:hover, &:focus": {
                        borderColor: r.colorPrimaryHover,
                        [`+ ${e}-group-addon ${i}-button:not(${o}-btn-primary)`]: {
                            borderInlineStartColor: r.colorPrimaryHover
                        }
                    }
                },
                [`${e}-affix-wrapper`]: {
                    borderRadius: 0
                },
                [`${e}-lg`]: {
                    lineHeight: r.calc(r.lineHeightLG).sub(2e-4).equal()
                },
                [`> ${e}-group`]: {
                    [`> ${e}-group-addon:last-child`]: {
                        insetInlineStart: -1,
                        padding: 0,
                        border: 0,
                        [`${i}-button`]: {
                            marginInlineEnd: -1,
                            paddingTop: 0,
                            paddingBottom: 0,
                            borderStartStartRadius: 0,
                            borderStartEndRadius: r.borderRadius,
                            borderEndEndRadius: r.borderRadius,
                            borderEndStartRadius: 0,
                            boxShadow: "none"
                        },
                        [`${i}-button:not(${o}-btn-primary)`]: {
                            color: r.colorTextDescription,
                            "&:hover": {
                                color: r.colorPrimaryHover
                            },
                            "&:active": {
                                color: r.colorPrimaryActive
                            },
                            [`&${o}-btn-loading::before`]: {
                                insetInlineStart: 0,
                                insetInlineEnd: 0,
                                insetBlockStart: 0,
                                insetBlockEnd: 0
                            }
                        }
                    }
                },
                [`${i}-button`]: {
                    height: r.controlHeight,
                    "&:hover, &:focus": {
                        zIndex: 1
                    }
                },
                [`&-large ${i}-button`]: {
                    height: r.controlHeightLG
                },
                [`&-small ${i}-button`]: {
                    height: r.controlHeightSM
                },
                "&-rtl": {
                    direction: "rtl"
                },
                [`&${e}-compact-item`]: {
                    [`&:not(${e}-compact-last-item)`]: {
                        [`${e}-group-addon`]: {
                            [`${e}-search-button`]: {
                                marginInlineEnd: r.calc(r.lineWidth).mul(-1).equal(),
                                borderRadius: 0
                            }
                        }
                    },
                    [`&:not(${e}-compact-first-item)`]: {
                        [`${e},${e}-affix-wrapper`]: {
                            borderRadius: 0
                        }
                    },
                    [`> ${e}-group-addon ${e}-search-button,
        > ${e},
        ${e}-affix-wrapper`]: {
                        "&:hover, &:focus, &:active": {
                            zIndex: 2
                        }
                    },
                    [`> ${e}-affix-wrapper-focused`]: {
                        zIndex: 2
                    }
                }
            }
        }
    },
    qr = r => {
        const {
            componentCls: e,
            paddingLG: o
        } = r, i = `${e}-textarea`;
        return {
            [i]: {
                position: "relative",
                "&-show-count": {
                    [`> ${e}`]: {
                        height: "100%"
                    },
                    [`${e}-data-count`]: {
                        position: "absolute",
                        bottom: r.calc(r.fontSize).mul(r.lineHeight).mul(-1).equal(),
                        insetInlineEnd: 0,
                        color: r.colorTextDescription,
                        whiteSpace: "nowrap",
                        pointerEvents: "none"
                    }
                },
                [`
        &-allow-clear > ${e},
        &-affix-wrapper${i}-has-feedback ${e}
      `]: {
                    paddingInlineEnd: o
                },
                [`&-affix-wrapper${e}-affix-wrapper`]: {
                    padding: 0,
                    [`> textarea${e}`]: {
                        fontSize: "inherit",
                        border: "none",
                        outline: "none",
                        background: "transparent",
                        "&:focus": {
                            boxShadow: "none !important"
                        }
                    },
                    [`${e}-suffix`]: {
                        margin: 0,
                        "> *:not(:last-child)": {
                            marginInline: 0
                        },
                        [`${e}-clear-icon`]: {
                            position: "absolute",
                            insetInlineEnd: r.paddingXS,
                            insetBlockStart: r.paddingXS
                        },
                        [`${i}-suffix`]: {
                            position: "absolute",
                            top: 0,
                            insetInlineEnd: r.paddingInline,
                            bottom: 0,
                            zIndex: 1,
                            display: "inline-flex",
                            alignItems: "center",
                            margin: "auto",
                            pointerEvents: "none"
                        }
                    }
                }
            }
        }
    },
    Ur = r => {
        const {
            componentCls: e
        } = r;
        return {
            [`${e}-out-of-range`]: {
                [`&, & input, & textarea, ${e}-show-count-suffix, ${e}-data-count`]: {
                    color: r.colorError
                }
            }
        }
    },
    Zr = vr("Input", r => {
        const e = L(r, Or(r));
        return [Lr(e), qr(e), Nr(e), Pr(e), Xr(e), Ur(e), Sr(e)]
    }, jr, {
        resetFont: !1
    });

function Qr(r) {
    return !!(r.addonBefore || r.addonAfter)
}

function _r(r) {
    return !!(r.prefix || r.suffix || r.allowClear)
}

function k(r, e, o) {
    var i = e.cloneNode(!0),
        a = Object.create(r, {
            target: {
                value: i
            },
            currentTarget: {
                value: i
            }
        });
    return i.value = o, typeof e.selectionStart == "number" && typeof e.selectionEnd == "number" && (i.selectionStart = e.selectionStart, i.selectionEnd = e.selectionEnd), i.setSelectionRange = function() {
        e.setSelectionRange.apply(e, arguments)
    }, a
}

function Vr(r, e, o, i) {
    if (o) {
        var a = e;
        if (e.type === "click") {
            a = k(e, r, ""), o(a);
            return
        }
        if (r.type !== "file" && i !== void 0) {
            a = k(e, r, i), o(a);
            return
        }
        o(a)
    }
}

function kr(r, e) {
    if (r) {
        r.focus(e);
        var o = e || {},
            i = o.cursor;
        if (i) {
            var a = r.value.length;
            switch (i) {
                case "start":
                    r.setSelectionRange(0, 0);
                    break;
                case "end":
                    r.setSelectionRange(a, a);
                    break;
                default:
                    r.setSelectionRange(0, a)
            }
        }
    }
}
var re = u.forwardRef(function(r, e) {
    var o, i, a = r.inputElement,
        n = r.children,
        t = r.prefixCls,
        l = r.prefix,
        c = r.suffix,
        v = r.addonBefore,
        g = r.addonAfter,
        j = r.className,
        W = r.style,
        C = r.disabled,
        B = r.readOnly,
        w = r.focused,
        E = r.triggerFocus,
        b = r.allowClear,
        y = r.value,
        I = r.handleReset,
        tr = r.hidden,
        h = r.classes,
        d = r.classNames,
        T = r.dataAttrs,
        $ = r.styles,
        p = r.components,
        N = n ? ? a,
        lr = (p == null ? void 0 : p.affixWrapper) || "span",
        dr = (p == null ? void 0 : p.groupWrapper) || "span",
        sr = (p == null ? void 0 : p.wrapper) || "span",
        P = (p == null ? void 0 : p.groupAddon) || "span",
        H = F.useRef(null),
        cr = function(A) {
            var G;
            (G = H.current) !== null && G !== void 0 && G.contains(A.target) && (E == null || E())
        },
        X = _r(r),
        S = F.cloneElement(N, {
            value: y,
            className: f(N.props.className, !X && (d == null ? void 0 : d.variant)) || null
        }),
        q = F.useRef(null);
    if (u.useImperativeHandle(e, function() {
            return {
                nativeElement: q.current || H.current
            }
        }), X) {
        var x, U = null;
        if (b) {
            var O, ur = !C && !B && y,
                z = "".concat(t, "-clear-icon"),
                pr = Cr(b) === "object" && b !== null && b !== void 0 && b.clearIcon ? b.clearIcon : "✖";
            U = u.createElement("span", {
                onClick: I,
                onMouseDown: function(A) {
                    return A.preventDefault()
                },
                className: f(z, (O = {}, m(O, "".concat(z, "-hidden"), !ur), m(O, "".concat(z, "-has-suffix"), !!c), O)),
                role: "button",
                tabIndex: -1
            }, pr)
        }
        var R = "".concat(t, "-affix-wrapper"),
            gr = f(R, (x = {}, m(x, "".concat(t, "-disabled"), C), m(x, "".concat(R, "-disabled"), C), m(x, "".concat(R, "-focused"), w), m(x, "".concat(R, "-readonly"), B), m(x, "".concat(R, "-input-with-clear-btn"), c && b && y), x), h == null ? void 0 : h.affixWrapper, d == null ? void 0 : d.affixWrapper, d == null ? void 0 : d.variant),
            br = (c || b) && u.createElement("span", {
                className: f("".concat(t, "-suffix"), d == null ? void 0 : d.suffix),
                style: $ == null ? void 0 : $.suffix
            }, U, c);
        S = u.createElement(lr, wr({
            className: gr,
            style: $ == null ? void 0 : $.affixWrapper,
            onClick: cr
        }, T == null ? void 0 : T.affixWrapper, {
            ref: H
        }), l && u.createElement("span", {
            className: f("".concat(t, "-prefix"), d == null ? void 0 : d.prefix),
            style: $ == null ? void 0 : $.prefix
        }, l), S, br)
    }
    if (Qr(r)) {
        var M = "".concat(t, "-group"),
            Q = "".concat(M, "-addon"),
            _ = "".concat(M, "-wrapper"),
            hr = f("".concat(t, "-wrapper"), M, h == null ? void 0 : h.wrapper, d == null ? void 0 : d.wrapper),
            $r = f(_, m({}, "".concat(_, "-disabled"), C), h == null ? void 0 : h.group, d == null ? void 0 : d.groupWrapper);
        S = u.createElement(dr, {
            className: $r,
            ref: q
        }, u.createElement(sr, {
            className: hr
        }, v && u.createElement(P, {
            className: Q
        }, v), S, g && u.createElement(P, {
            className: Q
        }, g)))
    }
    return u.cloneElement(S, {
        className: f((o = S.props) === null || o === void 0 ? void 0 : o.className, j) || null,
        style: J(J({}, (i = S.props) === null || i === void 0 ? void 0 : i.style), W),
        hidden: tr
    })
});
const Jr = r => r ? u.createElement(Er, null, u.createElement(yr, {
        override: !0,
        status: !0
    }, r)) : null,
    ee = Jr;
export {
    re as B, Zr as a, jr as b, ar as c, nr as d, er as e, D as f, ee as g, Rr as h, Or as i, Tr as j, Mr as k, zr as l, Fr as m, Hr as n, Ar as o, Gr as p, Vr as r, kr as t, Yr as u
};