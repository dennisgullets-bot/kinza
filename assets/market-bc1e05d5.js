import {
    j as e,
    B as X,
    d as J,
    N as Q,
    r as B,
    c as Z,
    a0 as ee,
    a1 as se,
    S as le,
    i as ae,
    a2 as c,
    a3 as k,
    a4 as te,
    a5 as ie,
    a6 as Y
} from "./index-45fe981f.js";
import {
    g as V,
    F as A,
    a as _e,
    A as oe,
    C as re,
    b as D,
    M as I,
    c as F,
    d as W,
    e as P
} from "./multiple-number-672eca0e.js";
import {
    E as ne,
    S as x
} from "./empty-2c74934d.js";
import {
    D as ce,
    C as ue
} from "./details-button-5ae4a4d5.js";
import {
    S as be
} from "./supply-button-e2dfe39d.js";
import {
    T as de
} from "./Table-f9efe72d.js";
import "./InputAddon-05dc931a.js";
const me = "_box_1qzvu_1",
    pe = "_button_1qzvu_4",
    z = {
        box: me,
        button: pe
    };
var f = (o => (o.All = "All", o.Stablecoins = "Stablecoins", o.LiquidStakedETH = "ETH", o.LiquidStakedBTC = "BTC", o))(f || {});

function ge(o) {
    const {
        onChange: a,
        value: i
    } = o;
    return e.jsx("div", {
        className: z.box,
        children: Object.values(f).map(_ => e.jsx(X, {
            className: z.button,
            type: i === _ ? "primary" : "default",
            onClick: () => a(_),
            shape: "round",
            children: _
        }, _))
    })
}
const xe = "/assets/market-banner-db05bb1f.png",
    fe = "/assets/market-banner-mobile-fe0ff443.png",
    he = "_Header_l618u_1",
    ve = "_large_l618u_23",
    ye = "_TableHeader_l618u_26",
    we = "_Row_l618u_31",
    je = "_Notification_l618u_34",
    Ne = "_Table_l618u_26",
    Se = "_BannerImage_l618u_47",
    Te = "_BannerImageMobile_l618u_51",
    Be = "_table_lp_fi_mobile_wrap_l618u_54",
    ke = "_table_single_assets_wrap_l618u_57",
    Ae = "_main_number_mobile_l618u_61",
    Ie = "_header_wrap_l618u_64",
    Ce = "_page_container_mobile_l618u_100",
    De = "_markets_page_title_l618u_111",
    Pe = "_TableHeader_single_assts_l618u_116",
    Re = "_Table_lp_fi_l618u_124",
    $e = "_table_lp_fi_mobile_item_l618u_131",
    He = "_table_lp_fi_mobile_item_title_l618u_136",
    Le = "_table_lp_fi_mobile_item_assets_l618u_140",
    Ee = "_left_l618u_146",
    Me = "_table_lp_fi_mobile_item_maxapy_l618u_154",
    qe = "_table_lp_fi_mobile_item_ltv_l618u_168",
    Ye = "_table_lp_fi_mobile_item_total_supply_l618u_182",
    Ve = "_table_lp_fi_mobile_btn_wrap_l618u_196",
    Fe = "_supply_l618u_202",
    We = "_Details_l618u_221",
    ze = "_table_single_assets_mobile_item_l618u_244",
    Oe = "_table_single_assets_mobile_item_assets_l618u_254",
    Ge = "_table_single_assets_mobile_item_supplyAPY_l618u_268",
    Ke = "_right_l618u_282",
    Ue = "_table_single_assets_mobile_item_totalSupplied_l618u_285",
    Xe = "_table_single_assets_mobile_item_borrowAPY_l618u_299",
    Je = "_table_single_assets_mobile_item_TotalBorrowed_l618u_313",
    Qe = "_table_single_assets_mobile_btn_wrap_l618u_326",
    Ze = "_supply_no_login_l618u_332",
    es = "_supply_login_wrap_l618u_350",
    l = {
        Header: he,
        Number: "_Number_l618u_17",
        large: ve,
        TableHeader: ye,
        Row: we,
        Notification: je,
        Table: Ne,
        BannerImage: Se,
        BannerImageMobile: Te,
        table_lp_fi_mobile_wrap: Be,
        table_single_assets_wrap: ke,
        main_number_mobile: Ae,
        header_wrap: Ie,
        page_container_mobile: Ce,
        markets_page_title: De,
        TableHeader_single_assts: Pe,
        Table_lp_fi: Re,
        table_lp_fi_mobile_item: $e,
        table_lp_fi_mobile_item_title: He,
        table_lp_fi_mobile_item_assets: Le,
        left: Ee,
        table_lp_fi_mobile_item_maxapy: Me,
        table_lp_fi_mobile_item_ltv: qe,
        table_lp_fi_mobile_item_total_supply: Ye,
        table_lp_fi_mobile_btn_wrap: Ve,
        supply: Fe,
        Details: We,
        table_single_assets_mobile_item: ze,
        table_single_assets_mobile_item_assets: Oe,
        table_single_assets_mobile_item_supplyAPY: Ge,
        right: Ke,
        table_single_assets_mobile_item_totalSupplied: Ue,
        table_single_assets_mobile_item_borrowAPY: Xe,
        table_single_assets_mobile_item_TotalBorrowed: Je,
        table_single_assets_mobile_btn_wrap: Qe,
        supply_no_login: Ze,
        supply_login_wrap: es
    },
    ss = o => o.pool,
    ls = o => o.global.chainId,
    as = ae(ss, ls, (o, a) => {
        const {
            all: i,
            loading: _
        } = o, {
            reserves: t
        } = i[a], u = c.sum(...t.map(k("totalATokenSupply"))), d = c.sum(...t.map(k("totalDebt"))), R = c.sum(...t.map(k("accruedToTreasury")));
        return {
            totalValueLocked: u,
            totalBorrows: d,
            totalAvailable: u.minus(d).plus(R),
            totalReserveSize: c.sum(...t.map(k("accruedToTreasury"))),
            borrowableInIsolationSymbols: te(t),
            dataSource: t.filter(({
                isProtected: n
            }) => !n).map(n => {
                var p;
                return { ...n,
                    totalPTokenSupply: (p = t.find(({
                        symbol: w
                    }) => w === `p${n.symbol}`)) == null ? void 0 : p.totalATokenSupply
                }
            }).slice().sort(_e()),
            lpAssets: t.filter(({
                symbol: n
            }) => n === ie(a)).map(n => ({ ...n,
                asset: t.find(({
                    symbol: p
                }) => p === "USDT")
            })),
            loading: _
        }
    }),
    O = o => [{
        title: "Assets",
        dataIndex: "symbol",
        width: 240,
        render: (a, {
            name: i,
            isFrozen: _,
            isPaused: t
        }) => e.jsx(oe, {
            symbol: a,
            name: i,
            isFrozen: _,
            isPaused: t
        })
    }, {
        title: e.jsx(re, {
            borrowableInIsolationSymbols: o
        }),
        dataIndex: "debtCeiling",
        render: a => e.jsx(ue, {
            debtCeiling: a
        })
    }, {
        title: "LTV",
        dataIndex: "baseLTVasCollateral",
        align: "right",
        sorter: D("baseLTVasCollateral"),
        sortIcon: x,
        sortDirections: ["descend", "ascend"],
        render: (a, {
            eMode: i
        }) => e.jsx(I, {
            type: "primary",
            mainNumber: {
                value: a,
                decimals: Y,
                ratioDigits: 2,
                suffix: "%"
            },
            subNumber: i ? {
                value: i.ltv,
                decimals: Y,
                ratioDigits: 2,
                suffix: "% in E-Mode"
            } : void 0
        })
    }, {
        title: e.jsx(F, {
            title: "Supply APY"
        }),
        dataIndex: "liquidityRate",
        align: "right",
        sorter: D("liquidityRate"),
        sortIcon: x,
        sortDirections: ["descend", "ascend"],
        render: (a, {
            kinzaTokenRate: i
        }) => e.jsx(W, {
            originalRate: a,
            tokenRate: i
        })
    }, {
        title: "Total Supplied",
        dataIndex: "totalATokenSupply",
        align: "right",
        sorter: P(a => new c(a.totalATokenSupply || 0).plus(a.totalPTokenSupply || 0)),
        sortIcon: x,
        defaultSortOrder: "descend",
        sortDirections: ["descend", "ascend"],
        render: (a, {
            totalPTokenSupply: i,
            symbol: _,
            decimals: t,
            price: {
                priceInEth: u
            }
        }) => {
            const d = new c(a || 0).plus(i || 0);
            return e.jsx(I, {
                showFull: !0,
                mainPrice: {
                    value: d,
                    price: u,
                    decimals: t
                },
                subNumber: {
                    value: d,
                    decimals: t,
                    suffix: ` ${_}`
                },
                mainClassName: l.main_number_mobile
            })
        }
    }, {
        title: e.jsx(F, {
            title: "Borrow APY",
            type: "Borrow"
        }),
        dataIndex: "variableBorrowRate",
        align: "right",
        sorter: D("variableBorrowRate"),
        sortIcon: x,
        sortDirections: ["descend", "ascend"],
        render: (a, {
            kinzaTokenRate: i
        }) => e.jsx(W, {
            type: "Borrow",
            originalRate: a,
            tokenRate: i
        })
    }, {
        title: "Total Borrowed",
        dataIndex: "totalDebt",
        align: "right",
        sorter: P(a => a.totalDebt),
        sortIcon: x,
        sortDirections: ["descend", "ascend"],
        render: (a, {
            symbol: i,
            decimals: _,
            price: {
                priceInEth: t
            }
        }) => e.jsx(I, {
            showFull: !0,
            mainPrice: {
                value: a,
                price: t,
                decimals: _
            },
            subNumber: {
                value: a,
                decimals: _,
                suffix: ` ${i}`
            },
            mainClassName: l.main_number_mobile
        })
    }, {
        title: "Available",
        dataIndex: "availableLiquidity",
        align: "right",
        sorter: P(a => a.availableLiquidity),
        sortIcon: x,
        sortDirections: ["descend", "ascend"],
        render: (a, {
            symbol: i,
            decimals: _,
            price: {
                priceInEth: t
            }
        }) => e.jsx(I, {
            showFull: !0,
            mainPrice: {
                value: a,
                price: t,
                decimals: _
            },
            subNumber: {
                value: a,
                decimals: _,
                suffix: ` ${i}`
            },
            mainClassName: l.main_number_mobile
        })
    }];

function bs() {
    const {
        totalValueLocked: o,
        totalBorrows: a,
        totalAvailable: i,
        totalReserveSize: _,
        borrowableInIsolationSymbols: t,
        dataSource: u,
        loading: d,
        lpAssets: R
    } = J(as), n = Q(), p = B.useCallback(s => ({
        onClick: () => {
            n(`/details/${s.symbol}`)
        }
    }), [n]), {
        address: w
    } = Z(), $ = ee(), G = B.useCallback(s => w ? e.jsx("div", {
        className: l.supply_login_wrap,
        children: e.jsx(be, {
            symbol: s
        })
    }) : e.jsx("div", {
        className: l.supply_no_login,
        onClick: $,
        children: "Supply"
    }), [w, $]), [h, K] = B.useState(f.All), C = B.useMemo(() => u.filter(s => h === f.Stablecoins ? s.symbol.includes("USD") : h === f.LiquidStakedETH ? s.symbol.includes("ETH") || s.name.includes("Ether") : h === f.LiquidStakedBTC ? s.symbol.includes("BTC") : !0), [u, h]), U = u.slice().sort((s, r) => {
        const j = (b, m) => {
                const N = new c(b.totalATokenSupply || 0).plus(b.totalPTokenSupply || 0),
                    g = new c(m.totalATokenSupply || 0).plus(m.totalPTokenSupply || 0);
                return new c(N).multipliedBy(b.price.priceInEth).shiftedBy(-b.decimals).minus(new c(g).multipliedBy(m.price.priceInEth).shiftedBy(-m.decimals)).toNumber()
            },
            v = V(s),
            y = V(r);
        return v === y ? j(r, s) : v - y
    });
    return e.jsxs("div", {
        children: [e.jsx("div", {
            className: `header-background ${l.header_wrap}`,
            children: e.jsxs("div", {
                className: l.Header,
                children: [e.jsxs("div", {
                    className: l.large,
                    children: [e.jsx("div", {
                        className: l.Number,
                        children: e.jsx(A, {
                            showFull: !0,
                            prefix: "$",
                            value: o
                        })
                    }), e.jsx("div", {
                        children: "Total Value Locked"
                    })]
                }), e.jsxs("div", {
                    children: [e.jsx("div", {
                        className: l.Number,
                        children: e.jsx(A, {
                            showFull: !0,
                            prefix: "$",
                            value: a
                        })
                    }), e.jsx("div", {
                        children: "Total Borrows"
                    })]
                }), e.jsxs("div", {
                    children: [e.jsx("div", {
                        className: l.Number,
                        children: e.jsx(A, {
                            showFull: !0,
                            prefix: "$",
                            value: i
                        })
                    }), e.jsx("div", {
                        children: "Total Available"
                    })]
                }), e.jsxs("div", {
                    style: {
                        display: "none"
                    },
                    children: [e.jsx("div", {
                        className: l.Number,
                        children: e.jsx(A, {
                            showFull: !0,
                            prefix: "$",
                            value: _
                        })
                    }), e.jsx("div", {
                        children: "Reserves"
                    })]
                })]
            })
        }), e.jsxs("div", {
            className: `page-container ${l.page_container_mobile}`,
            children: [e.jsxs(se, {
                to: "referral",
                children: [e.jsx("img", {
                    className: l.BannerImage,
                    src: xe,
                    alt: "Airdrop"
                }), e.jsx("img", {
                    className: l.BannerImageMobile,
                    src: fe,
                    alt: "Airdrop"
                })]
            }), e.jsx("div", {
                className: `page-title ${l.markets_page_title}`,
                children: "Markets"
            }), e.jsx(ge, {
                value: h,
                onChange: s => K(s)
            }), e.jsx("div", {
                className: l.table_single_assets_wrap,
                children: u && U.map(s => {
                    var j, v, y, b, m, N, g, H, L, S, E, M, T, q;
                    const r = O(t);
                    return e.jsxs("div", {
                        className: l.table_single_assets_mobile_item,
                        children: [e.jsx("div", {
                            className: l.table_single_assets_mobile_item_assets,
                            children: (v = (j = r[0]).render) == null ? void 0 : v.call(j, s == null ? void 0 : s.symbol, s)
                        }), e.jsxs("div", {
                            className: l.table_single_assets_mobile_item_supplyAPY,
                            children: [e.jsx("div", {
                                className: l.left,
                                children: (y = r[3]) == null ? void 0 : y.title
                            }), e.jsx("div", {
                                className: l.right,
                                children: (m = (b = r[3]) == null ? void 0 : b.render) == null ? void 0 : m.call(b, s == null ? void 0 : s.liquidityRate, s)
                            })]
                        }), e.jsxs("div", {
                            className: l.table_single_assets_mobile_item_totalSupplied,
                            children: [e.jsx("div", {
                                className: l.left,
                                children: (N = r[4]) == null ? void 0 : N.title
                            }), e.jsx("div", {
                                className: l.right,
                                children: (H = (g = r[4]) == null ? void 0 : g.render) == null ? void 0 : H.call(g, s == null ? void 0 : s.totalATokenSupply, s)
                            })]
                        }), e.jsxs("div", {
                            className: l.table_single_assets_mobile_item_borrowAPY,
                            children: [e.jsx("div", {
                                className: l.left,
                                children: (L = r[5]) == null ? void 0 : L.title
                            }), e.jsx("div", {
                                className: l.right,
                                children: (E = (S = r[5]) == null ? void 0 : S.render) == null ? void 0 : E.call(S, s == null ? void 0 : s.variableBorrowRate, s)
                            })]
                        }), e.jsxs("div", {
                            className: l.table_single_assets_mobile_item_TotalBorrowed,
                            children: [e.jsx("div", {
                                className: l.left,
                                children: (M = r[6]) == null ? void 0 : M.title
                            }), e.jsx("div", {
                                className: l.right,
                                children: (q = (T = r[6]) == null ? void 0 : T.render) == null ? void 0 : q.call(T, s == null ? void 0 : s.totalDebt, s)
                            })]
                        }), e.jsxs("div", {
                            className: l.table_single_assets_mobile_btn_wrap,
                            children: [G(s == null ? void 0 : s.symbol), e.jsx(ce, {
                                symbol: s == null ? void 0 : s.symbol
                            })]
                        })]
                    }, s.id)
                })
            }), e.jsx(de, {
                dataSource: C,
                columns: O(t),
                pagination: !1,
                rowKey: "id",
                showSorterTooltip: !1,
                onRow: p,
                rowClassName: l.Row,
                className: l.Table
            }), C.length === 0 && !d && e.jsx(ne, {
                description: "There are no data to display."
            }), C.length === 0 && d && e.jsx(le, {
                avatar: !0,
                active: !0,
                paragraph: {
                    rows: 2
                }
            })]
        })]
    })
}
export {
    bs as
    default
};