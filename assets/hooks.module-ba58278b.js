import {
    bJ as hr,
    a7 as Ee,
    bK as ce,
    z as _r
} from "./index-45fe981f.js";
import {
    e as Qr
} from "./events-9ea16891.js";
import {
    r as Zr
} from "./___vite-browser-external_commonjs-proxy-37a39c01.js";
var nr = {
        exports: {}
    },
    en = Qr.EventEmitter,
    Vt, wr;

function zn() {
    if (wr) return Vt;
    wr = 1;

    function e(R, A) {
        var w = Object.keys(R);
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(R);
            A && (f = f.filter(function(c) {
                return Object.getOwnPropertyDescriptor(R, c).enumerable
            })), w.push.apply(w, f)
        }
        return w
    }

    function t(R) {
        for (var A = 1; A < arguments.length; A++) {
            var w = arguments[A] != null ? arguments[A] : {};
            A % 2 ? e(Object(w), !0).forEach(function(f) {
                r(R, f, w[f])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(R, Object.getOwnPropertyDescriptors(w)) : e(Object(w)).forEach(function(f) {
                Object.defineProperty(R, f, Object.getOwnPropertyDescriptor(w, f))
            })
        }
        return R
    }

    function r(R, A, w) {
        return A = _(A), A in R ? Object.defineProperty(R, A, {
            value: w,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : R[A] = w, R
    }

    function n(R, A) {
        if (!(R instanceof A)) throw new TypeError("Cannot call a class as a function")
    }

    function o(R, A) {
        for (var w = 0; w < A.length; w++) {
            var f = A[w];
            f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(R, _(f.key), f)
        }
    }

    function s(R, A, w) {
        return A && o(R.prototype, A), w && o(R, w), Object.defineProperty(R, "prototype", {
            writable: !1
        }), R
    }

    function _(R) {
        var A = p(R, "string");
        return typeof A == "symbol" ? A : String(A)
    }

    function p(R, A) {
        if (typeof R != "object" || R === null) return R;
        var w = R[Symbol.toPrimitive];
        if (w !== void 0) {
            var f = w.call(R, A || "default");
            if (typeof f != "object") return f;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (A === "string" ? String : Number)(R)
    }
    var d = hr,
        b = d.Buffer,
        S = Zr,
        h = S.inspect,
        y = h && h.custom || "inspect";

    function v(R, A, w) {
        b.prototype.copy.call(R, A, w)
    }
    return Vt = function() {
        function R() {
            n(this, R), this.head = null, this.tail = null, this.length = 0
        }
        return s(R, [{
            key: "push",
            value: function(w) {
                var f = {
                    data: w,
                    next: null
                };
                this.length > 0 ? this.tail.next = f : this.head = f, this.tail = f, ++this.length
            }
        }, {
            key: "unshift",
            value: function(w) {
                var f = {
                    data: w,
                    next: this.head
                };
                this.length === 0 && (this.tail = f), this.head = f, ++this.length
            }
        }, {
            key: "shift",
            value: function() {
                if (this.length !== 0) {
                    var w = this.head.data;
                    return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, w
                }
            }
        }, {
            key: "clear",
            value: function() {
                this.head = this.tail = null, this.length = 0
            }
        }, {
            key: "join",
            value: function(w) {
                if (this.length === 0) return "";
                for (var f = this.head, c = "" + f.data; f = f.next;) c += w + f.data;
                return c
            }
        }, {
            key: "concat",
            value: function(w) {
                if (this.length === 0) return b.alloc(0);
                for (var f = b.allocUnsafe(w >>> 0), c = this.head, x = 0; c;) v(c.data, f, x), x += c.data.length, c = c.next;
                return f
            }
        }, {
            key: "consume",
            value: function(w, f) {
                var c;
                return w < this.head.data.length ? (c = this.head.data.slice(0, w), this.head.data = this.head.data.slice(w)) : w === this.head.data.length ? c = this.shift() : c = f ? this._getString(w) : this._getBuffer(w), c
            }
        }, {
            key: "first",
            value: function() {
                return this.head.data
            }
        }, {
            key: "_getString",
            value: function(w) {
                var f = this.head,
                    c = 1,
                    x = f.data;
                for (w -= x.length; f = f.next;) {
                    var m = f.data,
                        T = w > m.length ? m.length : w;
                    if (T === m.length ? x += m : x += m.slice(0, w), w -= T, w === 0) {
                        T === m.length ? (++c, f.next ? this.head = f.next : this.head = this.tail = null) : (this.head = f, f.data = m.slice(T));
                        break
                    }++c
                }
                return this.length -= c, x
            }
        }, {
            key: "_getBuffer",
            value: function(w) {
                var f = b.allocUnsafe(w),
                    c = this.head,
                    x = 1;
                for (c.data.copy(f), w -= c.data.length; c = c.next;) {
                    var m = c.data,
                        T = w > m.length ? m.length : w;
                    if (m.copy(f, f.length - w, 0, T), w -= T, w === 0) {
                        T === m.length ? (++x, c.next ? this.head = c.next : this.head = this.tail = null) : (this.head = c, c.data = m.slice(T));
                        break
                    }++x
                }
                return this.length -= x, f
            }
        }, {
            key: y,
            value: function(w, f) {
                return h(this, t(t({}, f), {}, {
                    depth: 0,
                    customInspect: !1
                }))
            }
        }]), R
    }(), Vt
}

function Gn(e, t) {
    var r = this,
        n = this._readableState && this._readableState.destroyed,
        o = this._writableState && this._writableState.destroyed;
    return n || o ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, process.nextTick(ir, this, e)) : process.nextTick(ir, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(s) {
        !t && s ? r._writableState ? r._writableState.errorEmitted ? process.nextTick(je, r) : (r._writableState.errorEmitted = !0, process.nextTick(xr, r, s)) : process.nextTick(xr, r, s) : t ? (process.nextTick(je, r), t(s)) : process.nextTick(je, r)
    }), this)
}

function xr(e, t) {
    ir(e, t), je(e)
}

function je(e) {
    e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close")
}

function Vn() {
    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
}

function ir(e, t) {
    e.emit("error", t)
}

function Kn(e, t) {
    var r = e._readableState,
        n = e._writableState;
    r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t)
}
var tn = {
        destroy: Gn,
        undestroy: Vn,
        errorOrDestroy: Kn
    },
    be = {};

function Yn(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}
var rn = {};

function X(e, t, r) {
    r || (r = Error);

    function n(s, _, p) {
        return typeof t == "string" ? t : t(s, _, p)
    }
    var o = function(s) {
        Yn(_, s);

        function _(p, d, b) {
            return s.call(this, n(p, d, b)) || this
        }
        return _
    }(r);
    o.prototype.name = r.name, o.prototype.code = e, rn[e] = o
}

function Er(e, t) {
    if (Array.isArray(e)) {
        var r = e.length;
        return e = e.map(function(n) {
            return String(n)
        }), r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : r === 2 ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
    } else return "of ".concat(t, " ").concat(String(e))
}

function Jn(e, t, r) {
    return e.substr(!r || r < 0 ? 0 : +r, t.length) === t
}

function Xn(e, t, r) {
    return (r === void 0 || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t
}

function Qn(e, t, r) {
    return typeof r != "number" && (r = 0), r + t.length > e.length ? !1 : e.indexOf(t, r) !== -1
}
X("ERR_INVALID_OPT_VALUE", function(e, t) {
    return 'The value "' + t + '" is invalid for option "' + e + '"'
}, TypeError);
X("ERR_INVALID_ARG_TYPE", function(e, t, r) {
    var n;
    typeof t == "string" && Jn(t, "not ") ? (n = "must not be", t = t.replace(/^not /, "")) : n = "must be";
    var o;
    if (Xn(e, " argument")) o = "The ".concat(e, " ").concat(n, " ").concat(Er(t, "type"));
    else {
        var s = Qn(e, ".") ? "property" : "argument";
        o = 'The "'.concat(e, '" ').concat(s, " ").concat(n, " ").concat(Er(t, "type"))
    }
    return o += ". Received type ".concat(typeof r), o
}, TypeError);
X("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
X("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
    return "The " + e + " method is not implemented"
});
X("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
X("ERR_STREAM_DESTROYED", function(e) {
    return "Cannot call " + e + " after a stream was destroyed"
});
X("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
X("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
X("ERR_STREAM_WRITE_AFTER_END", "write after end");
X("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
X("ERR_UNKNOWN_ENCODING", function(e) {
    return "Unknown encoding: " + e
}, TypeError);
X("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
be.codes = rn;
var Zn = be.codes.ERR_INVALID_OPT_VALUE;

function ei(e, t, r) {
    return e.highWaterMark != null ? e.highWaterMark : t ? e[r] : null
}

function ti(e, t, r, n) {
    var o = ei(t, n, r);
    if (o != null) {
        if (!(isFinite(o) && Math.floor(o) === o) || o < 0) {
            var s = n ? r : "highWaterMark";
            throw new Zn(s, o)
        }
        return Math.floor(o)
    }
    return e.objectMode ? 16 : 16 * 1024
}
var nn = {
        getHighWaterMark: ti
    },
    ar = {
        exports: {}
    };
typeof Object.create == "function" ? ar.exports = function(t, r) {
    r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }))
} : ar.exports = function(t, r) {
    if (r) {
        t.super_ = r;
        var n = function() {};
        n.prototype = r.prototype, t.prototype = new n, t.prototype.constructor = t
    }
};
var Q = ar.exports,
    ri = ni;

function ni(e, t) {
    if (Kt("noDeprecation")) return e;
    var r = !1;

    function n() {
        if (!r) {
            if (Kt("throwDeprecation")) throw new Error(t);
            Kt("traceDeprecation") ? console.trace(t) : console.warn(t), r = !0
        }
        return e.apply(this, arguments)
    }
    return n
}

function Kt(e) {
    try {
        if (!Ee.localStorage) return !1
    } catch {
        return !1
    }
    var t = Ee.localStorage[e];
    return t == null ? !1 : String(t).toLowerCase() === "true"
}
var Yt, Sr;

function an() {
    if (Sr) return Yt;
    Sr = 1, Yt = D;

    function e(u) {
        var l = this;
        this.next = null, this.entry = null, this.finish = function() {
            ie(l, u)
        }
    }
    var t;
    D.WritableState = B;
    var r = {
            deprecate: ri
        },
        n = en,
        o = hr.Buffer,
        s = (typeof Ee < "u" ? Ee : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {};

    function _(u) {
        return o.from(u)
    }

    function p(u) {
        return o.isBuffer(u) || u instanceof s
    }
    var d = tn,
        b = nn,
        S = b.getHighWaterMark,
        h = be.codes,
        y = h.ERR_INVALID_ARG_TYPE,
        v = h.ERR_METHOD_NOT_IMPLEMENTED,
        R = h.ERR_MULTIPLE_CALLBACK,
        A = h.ERR_STREAM_CANNOT_PIPE,
        w = h.ERR_STREAM_DESTROYED,
        f = h.ERR_STREAM_NULL_VALUES,
        c = h.ERR_STREAM_WRITE_AFTER_END,
        x = h.ERR_UNKNOWN_ENCODING,
        m = d.errorOrDestroy;
    Q(D, n);

    function T() {}

    function B(u, l, E) {
        t = t || Se(), u = u || {}, typeof E != "boolean" && (E = l instanceof t), this.objectMode = !!u.objectMode, E && (this.objectMode = this.objectMode || !!u.writableObjectMode), this.highWaterMark = S(this, u, "writableHighWaterMark", E), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
        var M = u.decodeStrings === !1;
        this.decodeStrings = !M, this.defaultEncoding = u.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(L) {
            le(l, L)
        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = u.emitClose !== !1, this.autoDestroy = !!u.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new e(this)
    }
    B.prototype.getBuffer = function() {
            for (var l = this.bufferedRequest, E = []; l;) E.push(l), l = l.next;
            return E
        },
        function() {
            try {
                Object.defineProperty(B.prototype, "buffer", {
                    get: r.deprecate(function() {
                        return this.getBuffer()
                    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                })
            } catch {}
        }();
    var O;
    typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (O = Function.prototype[Symbol.hasInstance], Object.defineProperty(D, Symbol.hasInstance, {
        value: function(l) {
            return O.call(this, l) ? !0 : this !== D ? !1 : l && l._writableState instanceof B
        }
    })) : O = function(l) {
        return l instanceof this
    };

    function D(u) {
        t = t || Se();
        var l = this instanceof t;
        if (!l && !O.call(D, this)) return new D(u);
        this._writableState = new B(u, this, l), this.writable = !0, u && (typeof u.write == "function" && (this._write = u.write), typeof u.writev == "function" && (this._writev = u.writev), typeof u.destroy == "function" && (this._destroy = u.destroy), typeof u.final == "function" && (this._final = u.final)), n.call(this)
    }
    D.prototype.pipe = function() {
        m(this, new A)
    };

    function C(u, l) {
        var E = new c;
        m(u, E), process.nextTick(l, E)
    }

    function j(u, l, E, M) {
        var L;
        return E === null ? L = new f : typeof E != "string" && !l.objectMode && (L = new y("chunk", ["string", "Buffer"], E)), L ? (m(u, L), process.nextTick(M, L), !1) : !0
    }
    D.prototype.write = function(u, l, E) {
        var M = this._writableState,
            L = !1,
            i = !M.objectMode && p(u);
        return i && !o.isBuffer(u) && (u = _(u)), typeof l == "function" && (E = l, l = null), i ? l = "buffer" : l || (l = M.defaultEncoding), typeof E != "function" && (E = T), M.ending ? C(this, E) : (i || j(this, M, u, E)) && (M.pendingcb++, L = z(this, M, i, u, l, E)), L
    }, D.prototype.cork = function() {
        this._writableState.corked++
    }, D.prototype.uncork = function() {
        var u = this._writableState;
        u.corked && (u.corked--, !u.writing && !u.corked && !u.bufferProcessing && u.bufferedRequest && J(this, u))
    }, D.prototype.setDefaultEncoding = function(l) {
        if (typeof l == "string" && (l = l.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((l + "").toLowerCase()) > -1)) throw new x(l);
        return this._writableState.defaultEncoding = l, this
    }, Object.defineProperty(D.prototype, "writableBuffer", {
        enumerable: !1,
        get: function() {
            return this._writableState && this._writableState.getBuffer()
        }
    });

    function U(u, l, E) {
        return !u.objectMode && u.decodeStrings !== !1 && typeof l == "string" && (l = o.from(l, E)), l
    }
    Object.defineProperty(D.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    });

    function z(u, l, E, M, L, i) {
        if (!E) {
            var a = U(l, M, L);
            M !== a && (E = !0, L = "buffer", M = a)
        }
        var g = l.objectMode ? 1 : M.length;
        l.length += g;
        var k = l.length < l.highWaterMark;
        if (k || (l.needDrain = !0), l.writing || l.corked) {
            var F = l.lastBufferedRequest;
            l.lastBufferedRequest = {
                chunk: M,
                encoding: L,
                isBuf: E,
                callback: i,
                next: null
            }, F ? F.next = l.lastBufferedRequest : l.bufferedRequest = l.lastBufferedRequest, l.bufferedRequestCount += 1
        } else q(u, l, !1, g, M, L, i);
        return k
    }

    function q(u, l, E, M, L, i, a) {
        l.writelen = M, l.writecb = a, l.writing = !0, l.sync = !0, l.destroyed ? l.onwrite(new w("write")) : E ? u._writev(L, l.onwrite) : u._write(L, i, l.onwrite), l.sync = !1
    }

    function G(u, l, E, M, L) {
        --l.pendingcb, E ? (process.nextTick(L, M), process.nextTick(K, u, l), u._writableState.errorEmitted = !0, m(u, M)) : (L(M), u._writableState.errorEmitted = !0, m(u, M), K(u, l))
    }

    function V(u) {
        u.writing = !1, u.writecb = null, u.length -= u.writelen, u.writelen = 0
    }

    function le(u, l) {
        var E = u._writableState,
            M = E.sync,
            L = E.writecb;
        if (typeof L != "function") throw new R;
        if (V(E), l) G(u, E, M, l, L);
        else {
            var i = re(E) || u.destroyed;
            !i && !E.corked && !E.bufferProcessing && E.bufferedRequest && J(u, E), M ? process.nextTick(Y, u, E, i, L) : Y(u, E, i, L)
        }
    }

    function Y(u, l, E, M) {
        E || te(u, l), l.pendingcb--, M(), K(u, l)
    }

    function te(u, l) {
        l.length === 0 && l.needDrain && (l.needDrain = !1, u.emit("drain"))
    }

    function J(u, l) {
        l.bufferProcessing = !0;
        var E = l.bufferedRequest;
        if (u._writev && E && E.next) {
            var M = l.bufferedRequestCount,
                L = new Array(M),
                i = l.corkedRequestsFree;
            i.entry = E;
            for (var a = 0, g = !0; E;) L[a] = E, E.isBuf || (g = !1), E = E.next, a += 1;
            L.allBuffers = g, q(u, l, !0, l.length, L, "", i.finish), l.pendingcb++, l.lastBufferedRequest = null, i.next ? (l.corkedRequestsFree = i.next, i.next = null) : l.corkedRequestsFree = new e(l), l.bufferedRequestCount = 0
        } else {
            for (; E;) {
                var k = E.chunk,
                    F = E.encoding,
                    N = E.callback,
                    P = l.objectMode ? 1 : k.length;
                if (q(u, l, !1, P, k, F, N), E = E.next, l.bufferedRequestCount--, l.writing) break
            }
            E === null && (l.lastBufferedRequest = null)
        }
        l.bufferedRequest = E, l.bufferProcessing = !1
    }
    D.prototype._write = function(u, l, E) {
        E(new v("_write()"))
    }, D.prototype._writev = null, D.prototype.end = function(u, l, E) {
        var M = this._writableState;
        return typeof u == "function" ? (E = u, u = null, l = null) : typeof l == "function" && (E = l, l = null), u != null && this.write(u, l), M.corked && (M.corked = 1, this.uncork()), M.ending || he(this, M, E), this
    }, Object.defineProperty(D.prototype, "writableLength", {
        enumerable: !1,
        get: function() {
            return this._writableState.length
        }
    });

    function re(u) {
        return u.ending && u.length === 0 && u.bufferedRequest === null && !u.finished && !u.writing
    }

    function ue(u, l) {
        u._final(function(E) {
            l.pendingcb--, E && m(u, E), l.prefinished = !0, u.emit("prefinish"), K(u, l)
        })
    }

    function ne(u, l) {
        !l.prefinished && !l.finalCalled && (typeof u._final == "function" && !l.destroyed ? (l.pendingcb++, l.finalCalled = !0, process.nextTick(ue, u, l)) : (l.prefinished = !0, u.emit("prefinish")))
    }

    function K(u, l) {
        var E = re(l);
        if (E && (ne(u, l), l.pendingcb === 0 && (l.finished = !0, u.emit("finish"), l.autoDestroy))) {
            var M = u._readableState;
            (!M || M.autoDestroy && M.endEmitted) && u.destroy()
        }
        return E
    }

    function he(u, l, E) {
        l.ending = !0, K(u, l), E && (l.finished ? process.nextTick(E) : u.once("finish", E)), l.ended = !0, u.writable = !1
    }

    function ie(u, l, E) {
        var M = u.entry;
        for (u.entry = null; M;) {
            var L = M.callback;
            l.pendingcb--, L(E), M = M.next
        }
        l.corkedRequestsFree.next = u
    }
    return Object.defineProperty(D.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return this._writableState === void 0 ? !1 : this._writableState.destroyed
        },
        set: function(l) {
            this._writableState && (this._writableState.destroyed = l)
        }
    }), D.prototype.destroy = d.destroy, D.prototype._undestroy = d.undestroy, D.prototype._destroy = function(u, l) {
        l(u)
    }, Yt
}
var Jt, mr;

function Se() {
    if (mr) return Jt;
    mr = 1;
    var e = Object.keys || function(b) {
        var S = [];
        for (var h in b) S.push(h);
        return S
    };
    Jt = _;
    var t = sn(),
        r = an();
    Q(_, t);
    for (var n = e(r.prototype), o = 0; o < n.length; o++) {
        var s = n[o];
        _.prototype[s] || (_.prototype[s] = r.prototype[s])
    }

    function _(b) {
        if (!(this instanceof _)) return new _(b);
        t.call(this, b), r.call(this, b), this.allowHalfOpen = !0, b && (b.readable === !1 && (this.readable = !1), b.writable === !1 && (this.writable = !1), b.allowHalfOpen === !1 && (this.allowHalfOpen = !1, this.once("end", p)))
    }
    Object.defineProperty(_.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    }), Object.defineProperty(_.prototype, "writableBuffer", {
        enumerable: !1,
        get: function() {
            return this._writableState && this._writableState.getBuffer()
        }
    }), Object.defineProperty(_.prototype, "writableLength", {
        enumerable: !1,
        get: function() {
            return this._writableState.length
        }
    });

    function p() {
        this._writableState.ended || process.nextTick(d, this)
    }

    function d(b) {
        b.end()
    }
    return Object.defineProperty(_.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed
        },
        set: function(S) {
            this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = S, this._writableState.destroyed = S)
        }
    }), Jt
}
var Xt = {},
    Rr;

function Tr() {
    if (Rr) return Xt;
    Rr = 1;
    var e = ce.Buffer,
        t = e.isEncoding || function(f) {
            switch (f = "" + f, f && f.toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                case "raw":
                    return !0;
                default:
                    return !1
            }
        };

    function r(f) {
        if (!f) return "utf8";
        for (var c;;) switch (f) {
            case "utf8":
            case "utf-8":
                return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return "utf16le";
            case "latin1":
            case "binary":
                return "latin1";
            case "base64":
            case "ascii":
            case "hex":
                return f;
            default:
                if (c) return;
                f = ("" + f).toLowerCase(), c = !0
        }
    }

    function n(f) {
        var c = r(f);
        if (typeof c != "string" && (e.isEncoding === t || !t(f))) throw new Error("Unknown encoding: " + f);
        return c || f
    }
    Xt.StringDecoder = o;

    function o(f) {
        this.encoding = n(f);
        var c;
        switch (this.encoding) {
            case "utf16le":
                this.text = h, this.end = y, c = 4;
                break;
            case "utf8":
                this.fillLast = d, c = 4;
                break;
            case "base64":
                this.text = v, this.end = R, c = 3;
                break;
            default:
                this.write = A, this.end = w;
                return
        }
        this.lastNeed = 0, this.lastTotal = 0, this.lastChar = e.allocUnsafe(c)
    }
    o.prototype.write = function(f) {
        if (f.length === 0) return "";
        var c, x;
        if (this.lastNeed) {
            if (c = this.fillLast(f), c === void 0) return "";
            x = this.lastNeed, this.lastNeed = 0
        } else x = 0;
        return x < f.length ? c ? c + this.text(f, x) : this.text(f, x) : c || ""
    }, o.prototype.end = S, o.prototype.text = b, o.prototype.fillLast = function(f) {
        if (this.lastNeed <= f.length) return f.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
        f.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, f.length), this.lastNeed -= f.length
    };

    function s(f) {
        return f <= 127 ? 0 : f >> 5 === 6 ? 2 : f >> 4 === 14 ? 3 : f >> 3 === 30 ? 4 : f >> 6 === 2 ? -1 : -2
    }

    function _(f, c, x) {
        var m = c.length - 1;
        if (m < x) return 0;
        var T = s(c[m]);
        return T >= 0 ? (T > 0 && (f.lastNeed = T - 1), T) : --m < x || T === -2 ? 0 : (T = s(c[m]), T >= 0 ? (T > 0 && (f.lastNeed = T - 2), T) : --m < x || T === -2 ? 0 : (T = s(c[m]), T >= 0 ? (T > 0 && (T === 2 ? T = 0 : f.lastNeed = T - 3), T) : 0))
    }

    function p(f, c, x) {
        if ((c[0] & 192) !== 128) return f.lastNeed = 0, "�";
        if (f.lastNeed > 1 && c.length > 1) {
            if ((c[1] & 192) !== 128) return f.lastNeed = 1, "�";
            if (f.lastNeed > 2 && c.length > 2 && (c[2] & 192) !== 128) return f.lastNeed = 2, "�"
        }
    }

    function d(f) {
        var c = this.lastTotal - this.lastNeed,
            x = p(this, f);
        if (x !== void 0) return x;
        if (this.lastNeed <= f.length) return f.copy(this.lastChar, c, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
        f.copy(this.lastChar, c, 0, f.length), this.lastNeed -= f.length
    }

    function b(f, c) {
        var x = _(this, f, c);
        if (!this.lastNeed) return f.toString("utf8", c);
        this.lastTotal = x;
        var m = f.length - (x - this.lastNeed);
        return f.copy(this.lastChar, 0, m), f.toString("utf8", c, m)
    }

    function S(f) {
        var c = f && f.length ? this.write(f) : "";
        return this.lastNeed ? c + "�" : c
    }

    function h(f, c) {
        if ((f.length - c) % 2 === 0) {
            var x = f.toString("utf16le", c);
            if (x) {
                var m = x.charCodeAt(x.length - 1);
                if (m >= 55296 && m <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = f[f.length - 2], this.lastChar[1] = f[f.length - 1], x.slice(0, -1)
            }
            return x
        }
        return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = f[f.length - 1], f.toString("utf16le", c, f.length - 1)
    }

    function y(f) {
        var c = f && f.length ? this.write(f) : "";
        if (this.lastNeed) {
            var x = this.lastTotal - this.lastNeed;
            return c + this.lastChar.toString("utf16le", 0, x)
        }
        return c
    }

    function v(f, c) {
        var x = (f.length - c) % 3;
        return x === 0 ? f.toString("base64", c) : (this.lastNeed = 3 - x, this.lastTotal = 3, x === 1 ? this.lastChar[0] = f[f.length - 1] : (this.lastChar[0] = f[f.length - 2], this.lastChar[1] = f[f.length - 1]), f.toString("base64", c, f.length - x))
    }

    function R(f) {
        var c = f && f.length ? this.write(f) : "";
        return this.lastNeed ? c + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : c
    }

    function A(f) {
        return f.toString(this.encoding)
    }

    function w(f) {
        return f && f.length ? this.write(f) : ""
    }
    return Xt
}
var Ar = be.codes.ERR_STREAM_PREMATURE_CLOSE;

function ii(e) {
    var t = !1;
    return function() {
        if (!t) {
            t = !0;
            for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
            e.apply(this, n)
        }
    }
}

function ai() {}

function oi(e) {
    return e.setHeader && typeof e.abort == "function"
}

function on(e, t, r) {
    if (typeof t == "function") return on(e, null, t);
    t || (t = {}), r = ii(r || ai);
    var n = t.readable || t.readable !== !1 && e.readable,
        o = t.writable || t.writable !== !1 && e.writable,
        s = function() {
            e.writable || p()
        },
        _ = e._writableState && e._writableState.finished,
        p = function() {
            o = !1, _ = !0, n || r.call(e)
        },
        d = e._readableState && e._readableState.endEmitted,
        b = function() {
            n = !1, d = !0, o || r.call(e)
        },
        S = function(R) {
            r.call(e, R)
        },
        h = function() {
            var R;
            if (n && !d) return (!e._readableState || !e._readableState.ended) && (R = new Ar), r.call(e, R);
            if (o && !_) return (!e._writableState || !e._writableState.ended) && (R = new Ar), r.call(e, R)
        },
        y = function() {
            e.req.on("finish", p)
        };
    return oi(e) ? (e.on("complete", p), e.on("abort", h), e.req ? y() : e.on("request", y)) : o && !e._writableState && (e.on("end", s), e.on("close", s)), e.on("end", b), e.on("finish", p), t.error !== !1 && e.on("error", S), e.on("close", h),
        function() {
            e.removeListener("complete", p), e.removeListener("abort", h), e.removeListener("request", y), e.req && e.req.removeListener("finish", p), e.removeListener("end", s), e.removeListener("close", s), e.removeListener("finish", p), e.removeListener("end", b), e.removeListener("error", S), e.removeListener("close", h)
        }
}
var cr = on,
    Qt, kr;

function si() {
    if (kr) return Qt;
    kr = 1;
    var e;

    function t(x, m, T) {
        return m = r(m), m in x ? Object.defineProperty(x, m, {
            value: T,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : x[m] = T, x
    }

    function r(x) {
        var m = n(x, "string");
        return typeof m == "symbol" ? m : String(m)
    }

    function n(x, m) {
        if (typeof x != "object" || x === null) return x;
        var T = x[Symbol.toPrimitive];
        if (T !== void 0) {
            var B = T.call(x, m || "default");
            if (typeof B != "object") return B;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (m === "string" ? String : Number)(x)
    }
    var o = cr,
        s = Symbol("lastResolve"),
        _ = Symbol("lastReject"),
        p = Symbol("error"),
        d = Symbol("ended"),
        b = Symbol("lastPromise"),
        S = Symbol("handlePromise"),
        h = Symbol("stream");

    function y(x, m) {
        return {
            value: x,
            done: m
        }
    }

    function v(x) {
        var m = x[s];
        if (m !== null) {
            var T = x[h].read();
            T !== null && (x[b] = null, x[s] = null, x[_] = null, m(y(T, !1)))
        }
    }

    function R(x) {
        process.nextTick(v, x)
    }

    function A(x, m) {
        return function(T, B) {
            x.then(function() {
                if (m[d]) {
                    T(y(void 0, !0));
                    return
                }
                m[S](T, B)
            }, B)
        }
    }
    var w = Object.getPrototypeOf(function() {}),
        f = Object.setPrototypeOf((e = {
            get stream() {
                return this[h]
            },
            next: function() {
                var m = this,
                    T = this[p];
                if (T !== null) return Promise.reject(T);
                if (this[d]) return Promise.resolve(y(void 0, !0));
                if (this[h].destroyed) return new Promise(function(C, j) {
                    process.nextTick(function() {
                        m[p] ? j(m[p]) : C(y(void 0, !0))
                    })
                });
                var B = this[b],
                    O;
                if (B) O = new Promise(A(B, this));
                else {
                    var D = this[h].read();
                    if (D !== null) return Promise.resolve(y(D, !1));
                    O = new Promise(this[S])
                }
                return this[b] = O, O
            }
        }, t(e, Symbol.asyncIterator, function() {
            return this
        }), t(e, "return", function() {
            var m = this;
            return new Promise(function(T, B) {
                m[h].destroy(null, function(O) {
                    if (O) {
                        B(O);
                        return
                    }
                    T(y(void 0, !0))
                })
            })
        }), e), w),
        c = function(m) {
            var T, B = Object.create(f, (T = {}, t(T, h, {
                value: m,
                writable: !0
            }), t(T, s, {
                value: null,
                writable: !0
            }), t(T, _, {
                value: null,
                writable: !0
            }), t(T, p, {
                value: null,
                writable: !0
            }), t(T, d, {
                value: m._readableState.endEmitted,
                writable: !0
            }), t(T, S, {
                value: function(D, C) {
                    var j = B[h].read();
                    j ? (B[b] = null, B[s] = null, B[_] = null, D(y(j, !1))) : (B[s] = D, B[_] = C)
                },
                writable: !0
            }), T));
            return B[b] = null, o(m, function(O) {
                if (O && O.code !== "ERR_STREAM_PREMATURE_CLOSE") {
                    var D = B[_];
                    D !== null && (B[b] = null, B[s] = null, B[_] = null, D(O)), B[p] = O;
                    return
                }
                var C = B[s];
                C !== null && (B[b] = null, B[s] = null, B[_] = null, C(y(void 0, !0))), B[d] = !0
            }), m.on("readable", R.bind(null, B)), B
        };
    return Qt = c, Qt
}
var Zt, Cr;

function fi() {
    return Cr || (Cr = 1, Zt = function() {
        throw new Error("Readable.from is not available in the browser")
    }), Zt
}
var er, Br;

function sn() {
    if (Br) return er;
    Br = 1, er = C;
    var e;
    C.ReadableState = D, Qr.EventEmitter;
    var t = function(a, g) {
            return a.listeners(g).length
        },
        r = en,
        n = hr.Buffer,
        o = (typeof Ee < "u" ? Ee : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {};

    function s(i) {
        return n.from(i)
    }

    function _(i) {
        return n.isBuffer(i) || i instanceof o
    }
    var p = Zr,
        d;
    p && p.debuglog ? d = p.debuglog("stream") : d = function() {};
    var b = zn(),
        S = tn,
        h = nn,
        y = h.getHighWaterMark,
        v = be.codes,
        R = v.ERR_INVALID_ARG_TYPE,
        A = v.ERR_STREAM_PUSH_AFTER_EOF,
        w = v.ERR_METHOD_NOT_IMPLEMENTED,
        f = v.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,
        c, x, m;
    Q(C, r);
    var T = S.errorOrDestroy,
        B = ["error", "close", "destroy", "pause", "resume"];

    function O(i, a, g) {
        if (typeof i.prependListener == "function") return i.prependListener(a, g);
        !i._events || !i._events[a] ? i.on(a, g) : Array.isArray(i._events[a]) ? i._events[a].unshift(g) : i._events[a] = [g, i._events[a]]
    }

    function D(i, a, g) {
        e = e || Se(), i = i || {}, typeof g != "boolean" && (g = a instanceof e), this.objectMode = !!i.objectMode, g && (this.objectMode = this.objectMode || !!i.readableObjectMode), this.highWaterMark = y(this, i, "readableHighWaterMark", g), this.buffer = new b, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = i.emitClose !== !1, this.autoDestroy = !!i.autoDestroy, this.destroyed = !1, this.defaultEncoding = i.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, i.encoding && (c || (c = Tr().StringDecoder), this.decoder = new c(i.encoding), this.encoding = i.encoding)
    }

    function C(i) {
        if (e = e || Se(), !(this instanceof C)) return new C(i);
        var a = this instanceof e;
        this._readableState = new D(i, this, a), this.readable = !0, i && (typeof i.read == "function" && (this._read = i.read), typeof i.destroy == "function" && (this._destroy = i.destroy)), r.call(this)
    }
    Object.defineProperty(C.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return this._readableState === void 0 ? !1 : this._readableState.destroyed
        },
        set: function(a) {
            this._readableState && (this._readableState.destroyed = a)
        }
    }), C.prototype.destroy = S.destroy, C.prototype._undestroy = S.undestroy, C.prototype._destroy = function(i, a) {
        a(i)
    }, C.prototype.push = function(i, a) {
        var g = this._readableState,
            k;
        return g.objectMode ? k = !0 : typeof i == "string" && (a = a || g.defaultEncoding, a !== g.encoding && (i = n.from(i, a), a = ""), k = !0), j(this, i, a, !1, k)
    }, C.prototype.unshift = function(i) {
        return j(this, i, null, !0, !1)
    };

    function j(i, a, g, k, F) {
        d("readableAddChunk", a);
        var N = i._readableState;
        if (a === null) N.reading = !1, le(i, N);
        else {
            var P;
            if (F || (P = z(N, a)), P) T(i, P);
            else if (N.objectMode || a && a.length > 0)
                if (typeof a != "string" && !N.objectMode && Object.getPrototypeOf(a) !== n.prototype && (a = s(a)), k) N.endEmitted ? T(i, new f) : U(i, N, a, !0);
                else if (N.ended) T(i, new A);
            else {
                if (N.destroyed) return !1;
                N.reading = !1, N.decoder && !g ? (a = N.decoder.write(a), N.objectMode || a.length !== 0 ? U(i, N, a, !1) : J(i, N)) : U(i, N, a, !1)
            } else k || (N.reading = !1, J(i, N))
        }
        return !N.ended && (N.length < N.highWaterMark || N.length === 0)
    }

    function U(i, a, g, k) {
        a.flowing && a.length === 0 && !a.sync ? (a.awaitDrain = 0, i.emit("data", g)) : (a.length += a.objectMode ? 1 : g.length, k ? a.buffer.unshift(g) : a.buffer.push(g), a.needReadable && Y(i)), J(i, a)
    }

    function z(i, a) {
        var g;
        return !_(a) && typeof a != "string" && a !== void 0 && !i.objectMode && (g = new R("chunk", ["string", "Buffer", "Uint8Array"], a)), g
    }
    C.prototype.isPaused = function() {
        return this._readableState.flowing === !1
    }, C.prototype.setEncoding = function(i) {
        c || (c = Tr().StringDecoder);
        var a = new c(i);
        this._readableState.decoder = a, this._readableState.encoding = this._readableState.decoder.encoding;
        for (var g = this._readableState.buffer.head, k = ""; g !== null;) k += a.write(g.data), g = g.next;
        return this._readableState.buffer.clear(), k !== "" && this._readableState.buffer.push(k), this._readableState.length = k.length, this
    };
    var q = 1073741824;

    function G(i) {
        return i >= q ? i = q : (i--, i |= i >>> 1, i |= i >>> 2, i |= i >>> 4, i |= i >>> 8, i |= i >>> 16, i++), i
    }

    function V(i, a) {
        return i <= 0 || a.length === 0 && a.ended ? 0 : a.objectMode ? 1 : i !== i ? a.flowing && a.length ? a.buffer.head.data.length : a.length : (i > a.highWaterMark && (a.highWaterMark = G(i)), i <= a.length ? i : a.ended ? a.length : (a.needReadable = !0, 0))
    }
    C.prototype.read = function(i) {
        d("read", i), i = parseInt(i, 10);
        var a = this._readableState,
            g = i;
        if (i !== 0 && (a.emittedReadable = !1), i === 0 && a.needReadable && ((a.highWaterMark !== 0 ? a.length >= a.highWaterMark : a.length > 0) || a.ended)) return d("read: emitReadable", a.length, a.ended), a.length === 0 && a.ended ? E(this) : Y(this), null;
        if (i = V(i, a), i === 0 && a.ended) return a.length === 0 && E(this), null;
        var k = a.needReadable;
        d("need readable", k), (a.length === 0 || a.length - i < a.highWaterMark) && (k = !0, d("length less than watermark", k)), a.ended || a.reading ? (k = !1, d("reading or ended", k)) : k && (d("do read"), a.reading = !0, a.sync = !0, a.length === 0 && (a.needReadable = !0), this._read(a.highWaterMark), a.sync = !1, a.reading || (i = V(g, a)));
        var F;
        return i > 0 ? F = l(i, a) : F = null, F === null ? (a.needReadable = a.length <= a.highWaterMark, i = 0) : (a.length -= i, a.awaitDrain = 0), a.length === 0 && (a.ended || (a.needReadable = !0), g !== i && a.ended && E(this)), F !== null && this.emit("data", F), F
    };

    function le(i, a) {
        if (d("onEofChunk"), !a.ended) {
            if (a.decoder) {
                var g = a.decoder.end();
                g && g.length && (a.buffer.push(g), a.length += a.objectMode ? 1 : g.length)
            }
            a.ended = !0, a.sync ? Y(i) : (a.needReadable = !1, a.emittedReadable || (a.emittedReadable = !0, te(i)))
        }
    }

    function Y(i) {
        var a = i._readableState;
        d("emitReadable", a.needReadable, a.emittedReadable), a.needReadable = !1, a.emittedReadable || (d("emitReadable", a.flowing), a.emittedReadable = !0, process.nextTick(te, i))
    }

    function te(i) {
        var a = i._readableState;
        d("emitReadable_", a.destroyed, a.length, a.ended), !a.destroyed && (a.length || a.ended) && (i.emit("readable"), a.emittedReadable = !1), a.needReadable = !a.flowing && !a.ended && a.length <= a.highWaterMark, u(i)
    }

    function J(i, a) {
        a.readingMore || (a.readingMore = !0, process.nextTick(re, i, a))
    }

    function re(i, a) {
        for (; !a.reading && !a.ended && (a.length < a.highWaterMark || a.flowing && a.length === 0);) {
            var g = a.length;
            if (d("maybeReadMore read 0"), i.read(0), g === a.length) break
        }
        a.readingMore = !1
    }
    C.prototype._read = function(i) {
        T(this, new w("_read()"))
    }, C.prototype.pipe = function(i, a) {
        var g = this,
            k = this._readableState;
        switch (k.pipesCount) {
            case 0:
                k.pipes = i;
                break;
            case 1:
                k.pipes = [k.pipes, i];
                break;
            default:
                k.pipes.push(i);
                break
        }
        k.pipesCount += 1, d("pipe count=%d opts=%j", k.pipesCount, a);
        var F = (!a || a.end !== !1) && i !== process.stdout && i !== process.stderr,
            N = F ? ae : _e;
        k.endEmitted ? process.nextTick(N) : g.once("end", N), i.on("unpipe", P);

        function P(oe, Z) {
            d("onunpipe"), oe === g && Z && Z.hasUnpiped === !1 && (Z.hasUnpiped = !0, Ue())
        }

        function ae() {
            d("onend"), i.end()
        }
        var de = ue(g);
        i.on("drain", de);
        var ke = !1;

        function Ue() {
            d("cleanup"), i.removeListener("close", we), i.removeListener("finish", xe), i.removeListener("drain", de), i.removeListener("error", ye), i.removeListener("unpipe", P), g.removeListener("end", ae), g.removeListener("end", _e), g.removeListener("data", Ce), ke = !0, k.awaitDrain && (!i._writableState || i._writableState.needDrain) && de()
        }
        g.on("data", Ce);

        function Ce(oe) {
            d("ondata");
            var Z = i.write(oe);
            d("dest.write", Z), Z === !1 && ((k.pipesCount === 1 && k.pipes === i || k.pipesCount > 1 && L(k.pipes, i) !== -1) && !ke && (d("false write response, pause", k.awaitDrain), k.awaitDrain++), g.pause())
        }

        function ye(oe) {
            d("onerror", oe), _e(), i.removeListener("error", ye), t(i, "error") === 0 && T(i, oe)
        }
        O(i, "error", ye);

        function we() {
            i.removeListener("finish", xe), _e()
        }
        i.once("close", we);

        function xe() {
            d("onfinish"), i.removeListener("close", we), _e()
        }
        i.once("finish", xe);

        function _e() {
            d("unpipe"), g.unpipe(i)
        }
        return i.emit("pipe", g), k.flowing || (d("pipe resume"), g.resume()), i
    };

    function ue(i) {
        return function() {
            var g = i._readableState;
            d("pipeOnDrain", g.awaitDrain), g.awaitDrain && g.awaitDrain--, g.awaitDrain === 0 && t(i, "data") && (g.flowing = !0, u(i))
        }
    }
    C.prototype.unpipe = function(i) {
        var a = this._readableState,
            g = {
                hasUnpiped: !1
            };
        if (a.pipesCount === 0) return this;
        if (a.pipesCount === 1) return i && i !== a.pipes ? this : (i || (i = a.pipes), a.pipes = null, a.pipesCount = 0, a.flowing = !1, i && i.emit("unpipe", this, g), this);
        if (!i) {
            var k = a.pipes,
                F = a.pipesCount;
            a.pipes = null, a.pipesCount = 0, a.flowing = !1;
            for (var N = 0; N < F; N++) k[N].emit("unpipe", this, {
                hasUnpiped: !1
            });
            return this
        }
        var P = L(a.pipes, i);
        return P === -1 ? this : (a.pipes.splice(P, 1), a.pipesCount -= 1, a.pipesCount === 1 && (a.pipes = a.pipes[0]), i.emit("unpipe", this, g), this)
    }, C.prototype.on = function(i, a) {
        var g = r.prototype.on.call(this, i, a),
            k = this._readableState;
        return i === "data" ? (k.readableListening = this.listenerCount("readable") > 0, k.flowing !== !1 && this.resume()) : i === "readable" && !k.endEmitted && !k.readableListening && (k.readableListening = k.needReadable = !0, k.flowing = !1, k.emittedReadable = !1, d("on readable", k.length, k.reading), k.length ? Y(this) : k.reading || process.nextTick(K, this)), g
    }, C.prototype.addListener = C.prototype.on, C.prototype.removeListener = function(i, a) {
        var g = r.prototype.removeListener.call(this, i, a);
        return i === "readable" && process.nextTick(ne, this), g
    }, C.prototype.removeAllListeners = function(i) {
        var a = r.prototype.removeAllListeners.apply(this, arguments);
        return (i === "readable" || i === void 0) && process.nextTick(ne, this), a
    };

    function ne(i) {
        var a = i._readableState;
        a.readableListening = i.listenerCount("readable") > 0, a.resumeScheduled && !a.paused ? a.flowing = !0 : i.listenerCount("data") > 0 && i.resume()
    }

    function K(i) {
        d("readable nexttick read 0"), i.read(0)
    }
    C.prototype.resume = function() {
        var i = this._readableState;
        return i.flowing || (d("resume"), i.flowing = !i.readableListening, he(this, i)), i.paused = !1, this
    };

    function he(i, a) {
        a.resumeScheduled || (a.resumeScheduled = !0, process.nextTick(ie, i, a))
    }

    function ie(i, a) {
        d("resume", a.reading), a.reading || i.read(0), a.resumeScheduled = !1, i.emit("resume"), u(i), a.flowing && !a.reading && i.read(0)
    }
    C.prototype.pause = function() {
        return d("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (d("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
    };

    function u(i) {
        var a = i._readableState;
        for (d("flow", a.flowing); a.flowing && i.read() !== null;);
    }
    C.prototype.wrap = function(i) {
        var a = this,
            g = this._readableState,
            k = !1;
        i.on("end", function() {
            if (d("wrapped end"), g.decoder && !g.ended) {
                var P = g.decoder.end();
                P && P.length && a.push(P)
            }
            a.push(null)
        }), i.on("data", function(P) {
            if (d("wrapped data"), g.decoder && (P = g.decoder.write(P)), !(g.objectMode && P == null) && !(!g.objectMode && (!P || !P.length))) {
                var ae = a.push(P);
                ae || (k = !0, i.pause())
            }
        });
        for (var F in i) this[F] === void 0 && typeof i[F] == "function" && (this[F] = function(ae) {
            return function() {
                return i[ae].apply(i, arguments)
            }
        }(F));
        for (var N = 0; N < B.length; N++) i.on(B[N], this.emit.bind(this, B[N]));
        return this._read = function(P) {
            d("wrapped _read", P), k && (k = !1, i.resume())
        }, this
    }, typeof Symbol == "function" && (C.prototype[Symbol.asyncIterator] = function() {
        return x === void 0 && (x = si()), x(this)
    }), Object.defineProperty(C.prototype, "readableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._readableState.highWaterMark
        }
    }), Object.defineProperty(C.prototype, "readableBuffer", {
        enumerable: !1,
        get: function() {
            return this._readableState && this._readableState.buffer
        }
    }), Object.defineProperty(C.prototype, "readableFlowing", {
        enumerable: !1,
        get: function() {
            return this._readableState.flowing
        },
        set: function(a) {
            this._readableState && (this._readableState.flowing = a)
        }
    }), C._fromList = l, Object.defineProperty(C.prototype, "readableLength", {
        enumerable: !1,
        get: function() {
            return this._readableState.length
        }
    });

    function l(i, a) {
        if (a.length === 0) return null;
        var g;
        return a.objectMode ? g = a.buffer.shift() : !i || i >= a.length ? (a.decoder ? g = a.buffer.join("") : a.buffer.length === 1 ? g = a.buffer.first() : g = a.buffer.concat(a.length), a.buffer.clear()) : g = a.buffer.consume(i, a.decoder), g
    }

    function E(i) {
        var a = i._readableState;
        d("endReadable", a.endEmitted), a.endEmitted || (a.ended = !0, process.nextTick(M, a, i))
    }

    function M(i, a) {
        if (d("endReadableNT", i.endEmitted, i.length), !i.endEmitted && i.length === 0 && (i.endEmitted = !0, a.readable = !1, a.emit("end"), i.autoDestroy)) {
            var g = a._writableState;
            (!g || g.autoDestroy && g.finished) && a.destroy()
        }
    }
    typeof Symbol == "function" && (C.from = function(i, a) {
        return m === void 0 && (m = fi()), m(C, i, a)
    });

    function L(i, a) {
        for (var g = 0, k = i.length; g < k; g++)
            if (i[g] === a) return g;
        return -1
    }
    return er
}
var fn = se,
    Ve = be.codes,
    li = Ve.ERR_METHOD_NOT_IMPLEMENTED,
    ui = Ve.ERR_MULTIPLE_CALLBACK,
    hi = Ve.ERR_TRANSFORM_ALREADY_TRANSFORMING,
    _i = Ve.ERR_TRANSFORM_WITH_LENGTH_0,
    Ke = Se();
Q(se, Ke);

function ci(e, t) {
    var r = this._transformState;
    r.transforming = !1;
    var n = r.writecb;
    if (n === null) return this.emit("error", new ui);
    r.writechunk = null, r.writecb = null, t != null && this.push(t), n(e);
    var o = this._readableState;
    o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark)
}

function se(e) {
    if (!(this instanceof se)) return new se(e);
    Ke.call(this, e), this._transformState = {
        afterTransform: ci.bind(this),
        needTransform: !1,
        transforming: !1,
        writecb: null,
        writechunk: null,
        writeencoding: null
    }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && (typeof e.transform == "function" && (this._transform = e.transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", di)
}

function di() {
    var e = this;
    typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(t, r) {
        Mr(e, t, r)
    }) : Mr(this, null, null)
}
se.prototype.push = function(e, t) {
    return this._transformState.needTransform = !1, Ke.prototype.push.call(this, e, t)
};
se.prototype._transform = function(e, t, r) {
    r(new li("_transform()"))
};
se.prototype._write = function(e, t, r) {
    var n = this._transformState;
    if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
        var o = this._readableState;
        (n.needTransform || o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark)
    }
};
se.prototype._read = function(e) {
    var t = this._transformState;
    t.writechunk !== null && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
};
se.prototype._destroy = function(e, t) {
    Ke.prototype._destroy.call(this, e, function(r) {
        t(r)
    })
};

function Mr(e, t, r) {
    if (t) return e.emit("error", t);
    if (r != null && e.push(r), e._writableState.length) throw new _i;
    if (e._transformState.transforming) throw new hi;
    return e.push(null)
}
var pi = De,
    ln = fn;
Q(De, ln);

function De(e) {
    if (!(this instanceof De)) return new De(e);
    ln.call(this, e)
}
De.prototype._transform = function(e, t, r) {
    r(null, e)
};
var tr;

function bi(e) {
    var t = !1;
    return function() {
        t || (t = !0, e.apply(void 0, arguments))
    }
}
var un = be.codes,
    vi = un.ERR_MISSING_ARGS,
    gi = un.ERR_STREAM_DESTROYED;

function Dr(e) {
    if (e) throw e
}

function yi(e) {
    return e.setHeader && typeof e.abort == "function"
}

function wi(e, t, r, n) {
    n = bi(n);
    var o = !1;
    e.on("close", function() {
        o = !0
    }), tr === void 0 && (tr = cr), tr(e, {
        readable: t,
        writable: r
    }, function(_) {
        if (_) return n(_);
        o = !0, n()
    });
    var s = !1;
    return function(_) {
        if (!o && !s) {
            if (s = !0, yi(e)) return e.abort();
            if (typeof e.destroy == "function") return e.destroy();
            n(_ || new gi("pipe"))
        }
    }
}

function Nr(e) {
    e()
}

function xi(e, t) {
    return e.pipe(t)
}

function Ei(e) {
    return !e.length || typeof e[e.length - 1] != "function" ? Dr : e.pop()
}

function Si() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    var n = Ei(t);
    if (Array.isArray(t[0]) && (t = t[0]), t.length < 2) throw new vi("streams");
    var o, s = t.map(function(_, p) {
        var d = p < t.length - 1,
            b = p > 0;
        return wi(_, d, b, function(S) {
            o || (o = S), S && s.forEach(Nr), !d && (s.forEach(Nr), n(o))
        })
    });
    return t.reduce(xi)
}
var mi = Si;
(function(e, t) {
    t = e.exports = sn(), t.Stream = t, t.Readable = t, t.Writable = an(), t.Duplex = Se(), t.Transform = fn, t.PassThrough = pi, t.finished = cr, t.pipeline = mi
})(nr, nr.exports);
var hn = nr.exports;
const {
    Transform: Ri
} = hn;
var Ti = e => class _n extends Ri {
    constructor(r, n, o, s, _) {
        super(_), this._rate = r, this._capacity = n, this._delimitedSuffix = o, this._hashBitLength = s, this._options = _, this._state = new e, this._state.initialize(r, n), this._finalized = !1
    }
    _transform(r, n, o) {
        let s = null;
        try {
            this.update(r, n)
        } catch (_) {
            s = _
        }
        o(s)
    }
    _flush(r) {
        let n = null;
        try {
            this.push(this.digest())
        } catch (o) {
            n = o
        }
        r(n)
    }
    update(r, n) {
        if (!Buffer.isBuffer(r) && typeof r != "string") throw new TypeError("Data must be a string or a buffer");
        if (this._finalized) throw new Error("Digest already called");
        return Buffer.isBuffer(r) || (r = Buffer.from(r, n)), this._state.absorb(r), this
    }
    digest(r) {
        if (this._finalized) throw new Error("Digest already called");
        this._finalized = !0, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
        let n = this._state.squeeze(this._hashBitLength / 8);
        return r !== void 0 && (n = n.toString(r)), this._resetState(), n
    }
    _resetState() {
        return this._state.initialize(this._rate, this._capacity), this
    }
    _clone() {
        const r = new _n(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
        return this._state.copy(r._state), r._finalized = this._finalized, r
    }
};
const {
    Transform: Ai
} = hn;
var ki = e => class cn extends Ai {
    constructor(r, n, o, s) {
        super(s), this._rate = r, this._capacity = n, this._delimitedSuffix = o, this._options = s, this._state = new e, this._state.initialize(r, n), this._finalized = !1
    }
    _transform(r, n, o) {
        let s = null;
        try {
            this.update(r, n)
        } catch (_) {
            s = _
        }
        o(s)
    }
    _flush() {}
    _read(r) {
        this.push(this.squeeze(r))
    }
    update(r, n) {
        if (!Buffer.isBuffer(r) && typeof r != "string") throw new TypeError("Data must be a string or a buffer");
        if (this._finalized) throw new Error("Squeeze already called");
        return Buffer.isBuffer(r) || (r = Buffer.from(r, n)), this._state.absorb(r), this
    }
    squeeze(r, n) {
        this._finalized || (this._finalized = !0, this._state.absorbLastFewBits(this._delimitedSuffix));
        let o = this._state.squeeze(r);
        return n !== void 0 && (o = o.toString(n)), o
    }
    _resetState() {
        return this._state.initialize(this._rate, this._capacity), this
    }
    _clone() {
        const r = new cn(this._rate, this._capacity, this._delimitedSuffix, this._options);
        return this._state.copy(r._state), r._finalized = this._finalized, r
    }
};
const Ci = Ti,
    Bi = ki;
var Mi = function(e) {
        const t = Ci(e),
            r = Bi(e);
        return function(n, o) {
            switch (typeof n == "string" ? n.toLowerCase() : n) {
                case "keccak224":
                    return new t(1152, 448, null, 224, o);
                case "keccak256":
                    return new t(1088, 512, null, 256, o);
                case "keccak384":
                    return new t(832, 768, null, 384, o);
                case "keccak512":
                    return new t(576, 1024, null, 512, o);
                case "sha3-224":
                    return new t(1152, 448, 6, 224, o);
                case "sha3-256":
                    return new t(1088, 512, 6, 256, o);
                case "sha3-384":
                    return new t(832, 768, 6, 384, o);
                case "sha3-512":
                    return new t(576, 1024, 6, 512, o);
                case "shake128":
                    return new r(1344, 256, 31, o);
                case "shake256":
                    return new r(1088, 512, 31, o);
                default:
                    throw new Error("Invald algorithm: " + n)
            }
        }
    },
    dn = {};
const Lr = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
dn.p1600 = function(e) {
    for (let t = 0; t < 24; ++t) {
        const r = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40],
            n = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41],
            o = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42],
            s = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43],
            _ = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44],
            p = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45],
            d = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46],
            b = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47],
            S = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48],
            h = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49];
        let y = S ^ (o << 1 | s >>> 31),
            v = h ^ (s << 1 | o >>> 31);
        const R = e[0] ^ y,
            A = e[1] ^ v,
            w = e[10] ^ y,
            f = e[11] ^ v,
            c = e[20] ^ y,
            x = e[21] ^ v,
            m = e[30] ^ y,
            T = e[31] ^ v,
            B = e[40] ^ y,
            O = e[41] ^ v;
        y = r ^ (_ << 1 | p >>> 31), v = n ^ (p << 1 | _ >>> 31);
        const D = e[2] ^ y,
            C = e[3] ^ v,
            j = e[12] ^ y,
            U = e[13] ^ v,
            z = e[22] ^ y,
            q = e[23] ^ v,
            G = e[32] ^ y,
            V = e[33] ^ v,
            le = e[42] ^ y,
            Y = e[43] ^ v;
        y = o ^ (d << 1 | b >>> 31), v = s ^ (b << 1 | d >>> 31);
        const te = e[4] ^ y,
            J = e[5] ^ v,
            re = e[14] ^ y,
            ue = e[15] ^ v,
            ne = e[24] ^ y,
            K = e[25] ^ v,
            he = e[34] ^ y,
            ie = e[35] ^ v,
            u = e[44] ^ y,
            l = e[45] ^ v;
        y = _ ^ (S << 1 | h >>> 31), v = p ^ (h << 1 | S >>> 31);
        const E = e[6] ^ y,
            M = e[7] ^ v,
            L = e[16] ^ y,
            i = e[17] ^ v,
            a = e[26] ^ y,
            g = e[27] ^ v,
            k = e[36] ^ y,
            F = e[37] ^ v,
            N = e[46] ^ y,
            P = e[47] ^ v;
        y = d ^ (r << 1 | n >>> 31), v = b ^ (n << 1 | r >>> 31);
        const ae = e[8] ^ y,
            de = e[9] ^ v,
            ke = e[18] ^ y,
            Ue = e[19] ^ v,
            Ce = e[28] ^ y,
            ye = e[29] ^ v,
            we = e[38] ^ y,
            xe = e[39] ^ v,
            _e = e[48] ^ y,
            oe = e[49] ^ v,
            Z = R,
            Qe = A,
            Ze = f << 4 | w >>> 28,
            et = w << 4 | f >>> 28,
            tt = c << 3 | x >>> 29,
            rt = x << 3 | c >>> 29,
            nt = T << 9 | m >>> 23,
            it = m << 9 | T >>> 23,
            at = B << 18 | O >>> 14,
            ot = O << 18 | B >>> 14,
            st = D << 1 | C >>> 31,
            ft = C << 1 | D >>> 31,
            lt = U << 12 | j >>> 20,
            ut = j << 12 | U >>> 20,
            ht = z << 10 | q >>> 22,
            _t = q << 10 | z >>> 22,
            ct = V << 13 | G >>> 19,
            dt = G << 13 | V >>> 19,
            pt = le << 2 | Y >>> 30,
            bt = Y << 2 | le >>> 30,
            vt = J << 30 | te >>> 2,
            gt = te << 30 | J >>> 2,
            yt = re << 6 | ue >>> 26,
            wt = ue << 6 | re >>> 26,
            xt = K << 11 | ne >>> 21,
            Et = ne << 11 | K >>> 21,
            St = he << 15 | ie >>> 17,
            mt = ie << 15 | he >>> 17,
            Rt = l << 29 | u >>> 3,
            Tt = u << 29 | l >>> 3,
            At = E << 28 | M >>> 4,
            kt = M << 28 | E >>> 4,
            Ct = i << 23 | L >>> 9,
            Bt = L << 23 | i >>> 9,
            Mt = a << 25 | g >>> 7,
            Dt = g << 25 | a >>> 7,
            Nt = k << 21 | F >>> 11,
            Lt = F << 21 | k >>> 11,
            Pt = P << 24 | N >>> 8,
            Ot = N << 24 | P >>> 8,
            It = ae << 27 | de >>> 5,
            $t = de << 27 | ae >>> 5,
            Ft = ke << 20 | Ue >>> 12,
            Ht = Ue << 20 | ke >>> 12,
            Ut = ye << 7 | Ce >>> 25,
            qt = Ce << 7 | ye >>> 25,
            jt = we << 8 | xe >>> 24,
            Wt = xe << 8 | we >>> 24,
            zt = _e << 14 | oe >>> 18,
            Gt = oe << 14 | _e >>> 18;
        e[0] = Z ^ ~lt & xt, e[1] = Qe ^ ~ut & Et, e[10] = At ^ ~Ft & tt, e[11] = kt ^ ~Ht & rt, e[20] = st ^ ~yt & Mt, e[21] = ft ^ ~wt & Dt, e[30] = It ^ ~Ze & ht, e[31] = $t ^ ~et & _t, e[40] = vt ^ ~Ct & Ut, e[41] = gt ^ ~Bt & qt, e[2] = lt ^ ~xt & Nt, e[3] = ut ^ ~Et & Lt, e[12] = Ft ^ ~tt & ct, e[13] = Ht ^ ~rt & dt, e[22] = yt ^ ~Mt & jt, e[23] = wt ^ ~Dt & Wt, e[32] = Ze ^ ~ht & St, e[33] = et ^ ~_t & mt, e[42] = Ct ^ ~Ut & nt, e[43] = Bt ^ ~qt & it, e[4] = xt ^ ~Nt & zt, e[5] = Et ^ ~Lt & Gt, e[14] = tt ^ ~ct & Rt, e[15] = rt ^ ~dt & Tt, e[24] = Mt ^ ~jt & at, e[25] = Dt ^ ~Wt & ot, e[34] = ht ^ ~St & Pt, e[35] = _t ^ ~mt & Ot, e[44] = Ut ^ ~nt & pt, e[45] = qt ^ ~it & bt, e[6] = Nt ^ ~zt & Z, e[7] = Lt ^ ~Gt & Qe, e[16] = ct ^ ~Rt & At, e[17] = dt ^ ~Tt & kt, e[26] = jt ^ ~at & st, e[27] = Wt ^ ~ot & ft, e[36] = St ^ ~Pt & It, e[37] = mt ^ ~Ot & $t, e[46] = nt ^ ~pt & vt, e[47] = it ^ ~bt & gt, e[8] = zt ^ ~Z & lt, e[9] = Gt ^ ~Qe & ut, e[18] = Rt ^ ~At & Ft, e[19] = Tt ^ ~kt & Ht, e[28] = at ^ ~st & yt, e[29] = ot ^ ~ft & wt, e[38] = Pt ^ ~It & Ze, e[39] = Ot ^ ~$t & et, e[48] = pt ^ ~vt & Ct, e[49] = bt ^ ~gt & Bt, e[0] ^= Lr[t * 2], e[1] ^= Lr[t * 2 + 1]
    }
};
const ze = dn;

function Te() {
    this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.blockSize = null, this.count = 0, this.squeezing = !1
}
Te.prototype.initialize = function(e, t) {
    for (let r = 0; r < 50; ++r) this.state[r] = 0;
    this.blockSize = e / 8, this.count = 0, this.squeezing = !1
};
Te.prototype.absorb = function(e) {
    for (let t = 0; t < e.length; ++t) this.state[~~(this.count / 4)] ^= e[t] << 8 * (this.count % 4), this.count += 1, this.count === this.blockSize && (ze.p1600(this.state), this.count = 0)
};
Te.prototype.absorbLastFewBits = function(e) {
    this.state[~~(this.count / 4)] ^= e << 8 * (this.count % 4), e & 128 && this.count === this.blockSize - 1 && ze.p1600(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << 8 * ((this.blockSize - 1) % 4), ze.p1600(this.state), this.count = 0, this.squeezing = !0
};
Te.prototype.squeeze = function(e) {
    this.squeezing || this.absorbLastFewBits(1);
    const t = Buffer.alloc(e);
    for (let r = 0; r < e; ++r) t[r] = this.state[~~(this.count / 4)] >>> 8 * (this.count % 4) & 255, this.count += 1, this.count === this.blockSize && (ze.p1600(this.state), this.count = 0);
    return t
};
Te.prototype.copy = function(e) {
    for (let t = 0; t < 50; ++t) e.state[t] = this.state[t];
    e.blockSize = this.blockSize, e.count = this.count, e.squeezing = this.squeezing
};
var Di = Te,
    Ya = Mi(Di),
    pn = {
        exports: {}
    },
    bn = ce.Buffer;

function Ye(e, t) {
    this._block = bn.alloc(e), this._finalSize = t, this._blockSize = e, this._len = 0
}
Ye.prototype.update = function(e, t) {
    typeof e == "string" && (t = t || "utf8", e = bn.from(e, t));
    for (var r = this._block, n = this._blockSize, o = e.length, s = this._len, _ = 0; _ < o;) {
        for (var p = s % n, d = Math.min(o - _, n - p), b = 0; b < d; b++) r[p + b] = e[_ + b];
        s += d, _ += d, s % n === 0 && this._update(r)
    }
    return this._len += o, this
};
Ye.prototype.digest = function(e) {
    var t = this._len % this._blockSize;
    this._block[t] = 128, this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0));
    var r = this._len * 8;
    if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);
    else {
        var n = (r & 4294967295) >>> 0,
            o = (r - n) / 4294967296;
        this._block.writeUInt32BE(o, this._blockSize - 8), this._block.writeUInt32BE(n, this._blockSize - 4)
    }
    this._update(this._block);
    var s = this._hash();
    return e ? s.toString(e) : s
};
Ye.prototype._update = function() {
    throw new Error("_update must be implemented by subclass")
};
var Ae = Ye,
    Ni = Q,
    vn = Ae,
    Li = ce.Buffer,
    Pi = [1518500249, 1859775393, -1894007588, -899497514],
    Oi = new Array(80);

function Le() {
    this.init(), this._w = Oi, vn.call(this, 64, 56)
}
Ni(Le, vn);
Le.prototype.init = function() {
    return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
};

function Ii(e) {
    return e << 5 | e >>> 27
}

function $i(e) {
    return e << 30 | e >>> 2
}

function Fi(e, t, r, n) {
    return e === 0 ? t & r | ~t & n : e === 2 ? t & r | t & n | r & n : t ^ r ^ n
}
Le.prototype._update = function(e) {
    for (var t = this._w, r = this._a | 0, n = this._b | 0, o = this._c | 0, s = this._d | 0, _ = this._e | 0, p = 0; p < 16; ++p) t[p] = e.readInt32BE(p * 4);
    for (; p < 80; ++p) t[p] = t[p - 3] ^ t[p - 8] ^ t[p - 14] ^ t[p - 16];
    for (var d = 0; d < 80; ++d) {
        var b = ~~(d / 20),
            S = Ii(r) + Fi(b, n, o, s) + _ + t[d] + Pi[b] | 0;
        _ = s, s = o, o = $i(n), n = r, r = S
    }
    this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = _ + this._e | 0
};
Le.prototype._hash = function() {
    var e = Li.allocUnsafe(20);
    return e.writeInt32BE(this._a | 0, 0), e.writeInt32BE(this._b | 0, 4), e.writeInt32BE(this._c | 0, 8), e.writeInt32BE(this._d | 0, 12), e.writeInt32BE(this._e | 0, 16), e
};
var Hi = Le,
    Ui = Q,
    gn = Ae,
    qi = ce.Buffer,
    ji = [1518500249, 1859775393, -1894007588, -899497514],
    Wi = new Array(80);

function Pe() {
    this.init(), this._w = Wi, gn.call(this, 64, 56)
}
Ui(Pe, gn);
Pe.prototype.init = function() {
    return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
};

function zi(e) {
    return e << 1 | e >>> 31
}

function Gi(e) {
    return e << 5 | e >>> 27
}

function Vi(e) {
    return e << 30 | e >>> 2
}

function Ki(e, t, r, n) {
    return e === 0 ? t & r | ~t & n : e === 2 ? t & r | t & n | r & n : t ^ r ^ n
}
Pe.prototype._update = function(e) {
    for (var t = this._w, r = this._a | 0, n = this._b | 0, o = this._c | 0, s = this._d | 0, _ = this._e | 0, p = 0; p < 16; ++p) t[p] = e.readInt32BE(p * 4);
    for (; p < 80; ++p) t[p] = zi(t[p - 3] ^ t[p - 8] ^ t[p - 14] ^ t[p - 16]);
    for (var d = 0; d < 80; ++d) {
        var b = ~~(d / 20),
            S = Gi(r) + Ki(b, n, o, s) + _ + t[d] + ji[b] | 0;
        _ = s, s = o, o = Vi(n), n = r, r = S
    }
    this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = _ + this._e | 0
};
Pe.prototype._hash = function() {
    var e = qi.allocUnsafe(20);
    return e.writeInt32BE(this._a | 0, 0), e.writeInt32BE(this._b | 0, 4), e.writeInt32BE(this._c | 0, 8), e.writeInt32BE(this._d | 0, 12), e.writeInt32BE(this._e | 0, 16), e
};
var Yi = Pe,
    Ji = Q,
    yn = Ae,
    Xi = ce.Buffer,
    Qi = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
    Zi = new Array(64);

function Oe() {
    this.init(), this._w = Zi, yn.call(this, 64, 56)
}
Ji(Oe, yn);
Oe.prototype.init = function() {
    return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
};

function ea(e, t, r) {
    return r ^ e & (t ^ r)
}

function ta(e, t, r) {
    return e & t | r & (e | t)
}

function ra(e) {
    return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10)
}

function na(e) {
    return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7)
}

function ia(e) {
    return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3
}

function aa(e) {
    return (e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10
}
Oe.prototype._update = function(e) {
    for (var t = this._w, r = this._a | 0, n = this._b | 0, o = this._c | 0, s = this._d | 0, _ = this._e | 0, p = this._f | 0, d = this._g | 0, b = this._h | 0, S = 0; S < 16; ++S) t[S] = e.readInt32BE(S * 4);
    for (; S < 64; ++S) t[S] = aa(t[S - 2]) + t[S - 7] + ia(t[S - 15]) + t[S - 16] | 0;
    for (var h = 0; h < 64; ++h) {
        var y = b + na(_) + ea(_, p, d) + Qi[h] + t[h] | 0,
            v = ra(r) + ta(r, n, o) | 0;
        b = d, d = p, p = _, _ = s + y | 0, s = o, o = n, n = r, r = y + v | 0
    }
    this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = _ + this._e | 0, this._f = p + this._f | 0, this._g = d + this._g | 0, this._h = b + this._h | 0
};
Oe.prototype._hash = function() {
    var e = Xi.allocUnsafe(32);
    return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e
};
var wn = Oe,
    oa = Q,
    sa = wn,
    fa = Ae,
    la = ce.Buffer,
    ua = new Array(64);

function Je() {
    this.init(), this._w = ua, fa.call(this, 64, 56)
}
oa(Je, sa);
Je.prototype.init = function() {
    return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
};
Je.prototype._hash = function() {
    var e = la.allocUnsafe(28);
    return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e
};
var ha = Je,
    _a = Q,
    xn = Ae,
    ca = ce.Buffer,
    Pr = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
    da = new Array(160);

function Ie() {
    this.init(), this._w = da, xn.call(this, 128, 112)
}
_a(Ie, xn);
Ie.prototype.init = function() {
    return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
};

function Or(e, t, r) {
    return r ^ e & (t ^ r)
}

function Ir(e, t, r) {
    return e & t | r & (e | t)
}

function $r(e, t) {
    return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25)
}

function Fr(e, t) {
    return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23)
}

function pa(e, t) {
    return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7
}

function ba(e, t) {
    return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25)
}

function va(e, t) {
    return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6
}

function ga(e, t) {
    return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26)
}

function W(e, t) {
    return e >>> 0 < t >>> 0 ? 1 : 0
}
Ie.prototype._update = function(e) {
    for (var t = this._w, r = this._ah | 0, n = this._bh | 0, o = this._ch | 0, s = this._dh | 0, _ = this._eh | 0, p = this._fh | 0, d = this._gh | 0, b = this._hh | 0, S = this._al | 0, h = this._bl | 0, y = this._cl | 0, v = this._dl | 0, R = this._el | 0, A = this._fl | 0, w = this._gl | 0, f = this._hl | 0, c = 0; c < 32; c += 2) t[c] = e.readInt32BE(c * 4), t[c + 1] = e.readInt32BE(c * 4 + 4);
    for (; c < 160; c += 2) {
        var x = t[c - 30],
            m = t[c - 15 * 2 + 1],
            T = pa(x, m),
            B = ba(m, x);
        x = t[c - 2 * 2], m = t[c - 2 * 2 + 1];
        var O = va(x, m),
            D = ga(m, x),
            C = t[c - 7 * 2],
            j = t[c - 7 * 2 + 1],
            U = t[c - 16 * 2],
            z = t[c - 16 * 2 + 1],
            q = B + j | 0,
            G = T + C + W(q, B) | 0;
        q = q + D | 0, G = G + O + W(q, D) | 0, q = q + z | 0, G = G + U + W(q, z) | 0, t[c] = G, t[c + 1] = q
    }
    for (var V = 0; V < 160; V += 2) {
        G = t[V], q = t[V + 1];
        var le = Ir(r, n, o),
            Y = Ir(S, h, y),
            te = $r(r, S),
            J = $r(S, r),
            re = Fr(_, R),
            ue = Fr(R, _),
            ne = Pr[V],
            K = Pr[V + 1],
            he = Or(_, p, d),
            ie = Or(R, A, w),
            u = f + ue | 0,
            l = b + re + W(u, f) | 0;
        u = u + ie | 0, l = l + he + W(u, ie) | 0, u = u + K | 0, l = l + ne + W(u, K) | 0, u = u + q | 0, l = l + G + W(u, q) | 0;
        var E = J + Y | 0,
            M = te + le + W(E, J) | 0;
        b = d, f = w, d = p, w = A, p = _, A = R, R = v + u | 0, _ = s + l + W(R, v) | 0, s = o, v = y, o = n, y = h, n = r, h = S, S = u + E | 0, r = l + M + W(S, u) | 0
    }
    this._al = this._al + S | 0, this._bl = this._bl + h | 0, this._cl = this._cl + y | 0, this._dl = this._dl + v | 0, this._el = this._el + R | 0, this._fl = this._fl + A | 0, this._gl = this._gl + w | 0, this._hl = this._hl + f | 0, this._ah = this._ah + r + W(this._al, S) | 0, this._bh = this._bh + n + W(this._bl, h) | 0, this._ch = this._ch + o + W(this._cl, y) | 0, this._dh = this._dh + s + W(this._dl, v) | 0, this._eh = this._eh + _ + W(this._el, R) | 0, this._fh = this._fh + p + W(this._fl, A) | 0, this._gh = this._gh + d + W(this._gl, w) | 0, this._hh = this._hh + b + W(this._hl, f) | 0
};
Ie.prototype._hash = function() {
    var e = ca.allocUnsafe(64);

    function t(r, n, o) {
        e.writeInt32BE(r, o), e.writeInt32BE(n, o + 4)
    }
    return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), t(this._gh, this._gl, 48), t(this._hh, this._hl, 56), e
};
var En = Ie,
    ya = Q,
    wa = En,
    xa = Ae,
    Ea = ce.Buffer,
    Sa = new Array(160);

function Xe() {
    this.init(), this._w = Sa, xa.call(this, 128, 112)
}
ya(Xe, wa);
Xe.prototype.init = function() {
    return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
};
Xe.prototype._hash = function() {
    var e = Ea.allocUnsafe(48);

    function t(r, n, o) {
        e.writeInt32BE(r, o), e.writeInt32BE(n, o + 4)
    }
    return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), e
};
var ma = Xe,
    ve = pn.exports = function(t) {
        t = t.toLowerCase();
        var r = ve[t];
        if (!r) throw new Error(t + " is not supported (we accept pull requests)");
        return new r
    };
ve.sha = Hi;
ve.sha1 = Yi;
ve.sha224 = ha;
ve.sha256 = wn;
ve.sha384 = ma;
ve.sha512 = En;
var Ja = pn.exports;

function Sn(e) {
    var t, r, n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++) e[t] && (r = Sn(e[t])) && (n && (n += " "), n += r);
        else
            for (t in e) e[t] && (n && (n += " "), n += t);
    return n
}

function Hr() {
    for (var e, t, r = 0, n = ""; r < arguments.length;)(e = arguments[r++]) && (t = Sn(e)) && (n && (n += " "), n += t);
    return n
}
const Ra = Object.freeze(Object.defineProperty({
        __proto__: null,
        clsx: Hr,
        default: Hr
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Xa = _r(Ra);
var $e, $, mn, Rn, pe, Ur, Tn, An, kn, dr, or, sr, Cn, Ne = {},
    Bn = [],
    Ta = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    Fe = Array.isArray;

function ee(e, t) {
    for (var r in t) e[r] = t[r];
    return e
}

function pr(e) {
    e && e.parentNode && e.parentNode.removeChild(e)
}

function fr(e, t, r) {
    var n, o, s, _ = {};
    for (s in t) s == "key" ? n = t[s] : s == "ref" ? o = t[s] : _[s] = t[s];
    if (arguments.length > 2 && (_.children = arguments.length > 3 ? $e.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null)
        for (s in e.defaultProps) _[s] === void 0 && (_[s] = e.defaultProps[s]);
    return Be(e, _, n, o, null)
}

function Be(e, t, r, n, o) {
    var s = {
        type: e,
        props: t,
        key: r,
        ref: n,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: o ? ? ++mn,
        __i: -1,
        __u: 0
    };
    return o == null && $.vnode != null && $.vnode(s), s
}

function Aa() {
    return {
        current: null
    }
}

function He(e) {
    return e.children
}

function Me(e, t) {
    this.props = e, this.context = t
}

function me(e, t) {
    if (t == null) return e.__ ? me(e.__, e.__i + 1) : null;
    for (var r; t < e.__k.length; t++)
        if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
    return typeof e.type == "function" ? me(e) : null
}

function Mn(e) {
    var t, r;
    if ((e = e.__) != null && e.__c != null) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
            if ((r = e.__k[t]) != null && r.__e != null) {
                e.__e = e.__c.base = r.__e;
                break
            }
        return Mn(e)
    }
}

function lr(e) {
    (!e.__d && (e.__d = !0) && pe.push(e) && !Ge.__r++ || Ur !== $.debounceRendering) && ((Ur = $.debounceRendering) || Tn)(Ge)
}

function Ge() {
    for (var e, t, r, n, o, s, _, p = 1; pe.length;) pe.length > p && pe.sort(An), e = pe.shift(), p = pe.length, e.__d && (r = void 0, o = (n = (t = e).__v).__e, s = [], _ = [], t.__P && ((r = ee({}, n)).__v = n.__v + 1, $.vnode && $.vnode(r), br(t.__P, r, n, t.__n, t.__P.namespaceURI, 32 & n.__u ? [o] : null, s, o ? ? me(n), !!(32 & n.__u), _), r.__v = n.__v, r.__.__k[r.__i] = r, Pn(s, r, _), r.__e != o && Mn(r)));
    Ge.__r = 0
}

function Dn(e, t, r, n, o, s, _, p, d, b, S) {
    var h, y, v, R, A, w, f = n && n.__k || Bn,
        c = t.length;
    for (d = ka(r, t, f, d, c), h = 0; h < c; h++)(v = r.__k[h]) != null && (y = v.__i === -1 ? Ne : f[v.__i] || Ne, v.__i = h, w = br(e, v, y, o, s, _, p, d, b, S), R = v.__e, v.ref && y.ref != v.ref && (y.ref && vr(y.ref, null, v), S.push(v.ref, v.__c || R, v)), A == null && R != null && (A = R), 4 & v.__u || y.__k === v.__k ? d = Nn(v, d, e) : typeof v.type == "function" && w !== void 0 ? d = w : R && (d = R.nextSibling), v.__u &= -7);
    return r.__e = A, d
}

function ka(e, t, r, n, o) {
    var s, _, p, d, b, S = r.length,
        h = S,
        y = 0;
    for (e.__k = new Array(o), s = 0; s < o; s++)(_ = t[s]) != null && typeof _ != "boolean" && typeof _ != "function" ? (d = s + y, (_ = e.__k[s] = typeof _ == "string" || typeof _ == "number" || typeof _ == "bigint" || _.constructor == String ? Be(null, _, null, null, null) : Fe(_) ? Be(He, {
        children: _
    }, null, null, null) : _.constructor === void 0 && _.__b > 0 ? Be(_.type, _.props, _.key, _.ref ? _.ref : null, _.__v) : _).__ = e, _.__b = e.__b + 1, p = null, (b = _.__i = Ca(_, r, d, h)) !== -1 && (h--, (p = r[b]) && (p.__u |= 2)), p == null || p.__v === null ? (b == -1 && (o > S ? y-- : o < S && y++), typeof _.type != "function" && (_.__u |= 4)) : b != d && (b == d - 1 ? y-- : b == d + 1 ? y++ : (b > d ? y-- : y++, _.__u |= 4))) : e.__k[s] = null;
    if (h)
        for (s = 0; s < S; s++)(p = r[s]) != null && !(2 & p.__u) && (p.__e == n && (n = me(p)), In(p, p));
    return n
}

function Nn(e, t, r) {
    var n, o;
    if (typeof e.type == "function") {
        for (n = e.__k, o = 0; n && o < n.length; o++) n[o] && (n[o].__ = e, t = Nn(n[o], t, r));
        return t
    }
    e.__e != t && (t && e.type && !r.contains(t) && (t = me(e)), r.insertBefore(e.__e, t || null), t = e.__e);
    do t = t && t.nextSibling; while (t != null && t.nodeType == 8);
    return t
}

function Ln(e, t) {
    return t = t || [], e == null || typeof e == "boolean" || (Fe(e) ? e.some(function(r) {
        Ln(r, t)
    }) : t.push(e)), t
}

function Ca(e, t, r, n) {
    var o, s, _ = e.key,
        p = e.type,
        d = t[r];
    if (d === null && e.key == null || d && _ == d.key && p === d.type && !(2 & d.__u)) return r;
    if (n > (d != null && !(2 & d.__u) ? 1 : 0))
        for (o = r - 1, s = r + 1; o >= 0 || s < t.length;) {
            if (o >= 0) {
                if ((d = t[o]) && !(2 & d.__u) && _ == d.key && p === d.type) return o;
                o--
            }
            if (s < t.length) {
                if ((d = t[s]) && !(2 & d.__u) && _ == d.key && p === d.type) return s;
                s++
            }
        }
    return -1
}

function qr(e, t, r) {
    t[0] == "-" ? e.setProperty(t, r ? ? "") : e[t] = r == null ? "" : typeof r != "number" || Ta.test(t) ? r : r + "px"
}

function qe(e, t, r, n, o) {
    var s;
    e: if (t == "style")
        if (typeof r == "string") e.style.cssText = r;
        else {
            if (typeof n == "string" && (e.style.cssText = n = ""), n)
                for (t in n) r && t in r || qr(e.style, t, "");
            if (r)
                for (t in r) n && r[t] === n[t] || qr(e.style, t, r[t])
        }
    else if (t[0] == "o" && t[1] == "n") s = t != (t = t.replace(kn, "$1")), t = t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + s] = r, r ? n ? r.t = n.t : (r.t = dr, e.addEventListener(t, s ? sr : or, s)) : e.removeEventListener(t, s ? sr : or, s);
    else {
        if (o == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
            e[t] = r ? ? "";
            break e
        } catch {}
        typeof r == "function" || (r == null || r === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && r == 1 ? "" : r))
    }
}

function jr(e) {
    return function(t) {
        if (this.l) {
            var r = this.l[t.type + e];
            if (t.u == null) t.u = dr++;
            else if (t.u < r.t) return;
            return r($.event ? $.event(t) : t)
        }
    }
}

function br(e, t, r, n, o, s, _, p, d, b) {
    var S, h, y, v, R, A, w, f, c, x, m, T, B, O, D, C, j, U = t.type;
    if (t.constructor !== void 0) return null;
    128 & r.__u && (d = !!(32 & r.__u), s = [p = t.__e = r.__e]), (S = $.__b) && S(t);
    e: if (typeof U == "function") try {
        if (f = t.props, c = "prototype" in U && U.prototype.render, x = (S = U.contextType) && n[S.__c], m = S ? x ? x.props.value : S.__ : n, r.__c ? w = (h = t.__c = r.__c).__ = h.__E : (c ? t.__c = h = new U(f, m) : (t.__c = h = new Me(f, m), h.constructor = U, h.render = Ma), x && x.sub(h), h.props = f, h.state || (h.state = {}), h.context = m, h.__n = n, y = h.__d = !0, h.__h = [], h._sb = []), c && h.__s == null && (h.__s = h.state), c && U.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = ee({}, h.__s)), ee(h.__s, U.getDerivedStateFromProps(f, h.__s))), v = h.props, R = h.state, h.__v = t, y) c && U.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), c && h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
            if (c && U.getDerivedStateFromProps == null && f !== v && h.componentWillReceiveProps != null && h.componentWillReceiveProps(f, m), !h.__e && (h.shouldComponentUpdate != null && h.shouldComponentUpdate(f, h.__s, m) === !1 || t.__v == r.__v)) {
                for (t.__v != r.__v && (h.props = f, h.state = h.__s, h.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(z) {
                        z && (z.__ = t)
                    }), T = 0; T < h._sb.length; T++) h.__h.push(h._sb[T]);
                h._sb = [], h.__h.length && _.push(h);
                break e
            }
            h.componentWillUpdate != null && h.componentWillUpdate(f, h.__s, m), c && h.componentDidUpdate != null && h.__h.push(function() {
                h.componentDidUpdate(v, R, A)
            })
        }
        if (h.context = m, h.props = f, h.__P = e, h.__e = !1, B = $.__r, O = 0, c) {
            for (h.state = h.__s, h.__d = !1, B && B(t), S = h.render(h.props, h.state, h.context), D = 0; D < h._sb.length; D++) h.__h.push(h._sb[D]);
            h._sb = []
        } else
            do h.__d = !1, B && B(t), S = h.render(h.props, h.state, h.context), h.state = h.__s; while (h.__d && ++O < 25);
        h.state = h.__s, h.getChildContext != null && (n = ee(ee({}, n), h.getChildContext())), c && !y && h.getSnapshotBeforeUpdate != null && (A = h.getSnapshotBeforeUpdate(v, R)), C = S, S != null && S.type === He && S.key == null && (C = On(S.props.children)), p = Dn(e, Fe(C) ? C : [C], t, r, n, o, s, _, p, d, b), h.base = t.__e, t.__u &= -161, h.__h.length && _.push(h), w && (h.__E = h.__ = null)
    } catch (z) {
        if (t.__v = null, d || s != null)
            if (z.then) {
                for (t.__u |= d ? 160 : 128; p && p.nodeType == 8 && p.nextSibling;) p = p.nextSibling;
                s[s.indexOf(p)] = null, t.__e = p
            } else
                for (j = s.length; j--;) pr(s[j]);
        else t.__e = r.__e, t.__k = r.__k;
        $.__e(z, t, r)
    } else s == null && t.__v == r.__v ? (t.__k = r.__k, t.__e = r.__e) : p = t.__e = Ba(r.__e, t, r, n, o, s, _, d, b);
    return (S = $.diffed) && S(t), 128 & t.__u ? void 0 : p
}

function Pn(e, t, r) {
    for (var n = 0; n < r.length; n++) vr(r[n], r[++n], r[++n]);
    $.__c && $.__c(t, e), e.some(function(o) {
        try {
            e = o.__h, o.__h = [], e.some(function(s) {
                s.call(o)
            })
        } catch (s) {
            $.__e(s, o.__v)
        }
    })
}

function On(e) {
    return typeof e != "object" || e == null ? e : Fe(e) ? e.map(On) : ee({}, e)
}

function Ba(e, t, r, n, o, s, _, p, d) {
    var b, S, h, y, v, R, A, w = r.props,
        f = t.props,
        c = t.type;
    if (c == "svg" ? o = "http://www.w3.org/2000/svg" : c == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), s != null) {
        for (b = 0; b < s.length; b++)
            if ((v = s[b]) && "setAttribute" in v == !!c && (c ? v.localName == c : v.nodeType == 3)) {
                e = v, s[b] = null;
                break
            }
    }
    if (e == null) {
        if (c == null) return document.createTextNode(f);
        e = document.createElementNS(o, c, f.is && f), p && ($.__m && $.__m(t, s), p = !1), s = null
    }
    if (c === null) w === f || p && e.data === f || (e.data = f);
    else {
        if (s = s && $e.call(e.childNodes), w = r.props || Ne, !p && s != null)
            for (w = {}, b = 0; b < e.attributes.length; b++) w[(v = e.attributes[b]).name] = v.value;
        for (b in w)
            if (v = w[b], b != "children") {
                if (b == "dangerouslySetInnerHTML") h = v;
                else if (!(b in f)) {
                    if (b == "value" && "defaultValue" in f || b == "checked" && "defaultChecked" in f) continue;
                    qe(e, b, null, v, o)
                }
            }
        for (b in f) v = f[b], b == "children" ? y = v : b == "dangerouslySetInnerHTML" ? S = v : b == "value" ? R = v : b == "checked" ? A = v : p && typeof v != "function" || w[b] === v || qe(e, b, v, w[b], o);
        if (S) p || h && (S.__html === h.__html || S.__html === e.innerHTML) || (e.innerHTML = S.__html), t.__k = [];
        else if (h && (e.innerHTML = ""), Dn(t.type === "template" ? e.content : e, Fe(y) ? y : [y], t, r, n, c == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, s, _, s ? s[0] : r.__k && me(r, 0), p, d), s != null)
            for (b = s.length; b--;) pr(s[b]);
        p || (b = "value", c == "progress" && R == null ? e.removeAttribute("value") : R !== void 0 && (R !== e[b] || c == "progress" && !R || c == "option" && R !== w[b]) && qe(e, b, R, w[b], o), b = "checked", A !== void 0 && A !== e[b] && qe(e, b, A, w[b], o))
    }
    return e
}

function vr(e, t, r) {
    try {
        if (typeof e == "function") {
            var n = typeof e.__u == "function";
            n && e.__u(), n && t == null || (e.__u = e(t))
        } else e.current = t
    } catch (o) {
        $.__e(o, r)
    }
}

function In(e, t, r) {
    var n, o;
    if ($.unmount && $.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || vr(n, null, t)), (n = e.__c) != null) {
        if (n.componentWillUnmount) try {
            n.componentWillUnmount()
        } catch (s) {
            $.__e(s, t)
        }
        n.base = n.__P = null
    }
    if (n = e.__k)
        for (o = 0; o < n.length; o++) n[o] && In(n[o], t, r || typeof e.type != "function");
    r || pr(e.__e), e.__c = e.__ = e.__e = void 0
}

function Ma(e, t, r) {
    return this.constructor(e, r)
}

function $n(e, t, r) {
    var n, o, s, _;
    t == document && (t = document.documentElement), $.__ && $.__(e, t), o = (n = typeof r == "function") ? null : r && r.__k || t.__k, s = [], _ = [], br(t, e = (!n && r || t).__k = fr(He, null, [e]), o || Ne, Ne, t.namespaceURI, !n && r ? [r] : o ? null : t.firstChild ? $e.call(t.childNodes) : null, s, !n && r ? r : o ? o.__e : t.firstChild, n, _), Pn(s, e, _)
}

function Fn(e, t) {
    $n(e, t, Fn)
}

function Da(e, t, r) {
    var n, o, s, _, p = ee({}, e.props);
    for (s in e.type && e.type.defaultProps && (_ = e.type.defaultProps), t) s == "key" ? n = t[s] : s == "ref" ? o = t[s] : p[s] = t[s] === void 0 && _ !== void 0 ? _[s] : t[s];
    return arguments.length > 2 && (p.children = arguments.length > 3 ? $e.call(arguments, 2) : r), Be(e.type, p, n || e.key, o || e.ref, null)
}

function Na(e) {
    function t(r) {
        var n, o;
        return this.getChildContext || (n = new Set, (o = {})[t.__c] = this, this.getChildContext = function() {
            return o
        }, this.componentWillUnmount = function() {
            n = null
        }, this.shouldComponentUpdate = function(s) {
            this.props.value !== s.value && n.forEach(function(_) {
                _.__e = !0, lr(_)
            })
        }, this.sub = function(s) {
            n.add(s);
            var _ = s.componentWillUnmount;
            s.componentWillUnmount = function() {
                n && n.delete(s), _ && _.call(s)
            }
        }), r.children
    }
    return t.__c = "__cC" + Cn++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(r, n) {
        return r.children(n)
    }).contextType = t, t
}
$e = Bn.slice, $ = {
    __e: function(e, t, r, n) {
        for (var o, s, _; t = t.__;)
            if ((o = t.__c) && !o.__) try {
                if ((s = o.constructor) && s.getDerivedStateFromError != null && (o.setState(s.getDerivedStateFromError(e)), _ = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, n || {}), _ = o.__d), _) return o.__E = o
            } catch (p) {
                e = p
            }
        throw e
    }
}, mn = 0, Rn = function(e) {
    return e != null && e.constructor == null
}, Me.prototype.setState = function(e, t) {
    var r;
    r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ee({}, this.state), typeof e == "function" && (e = e(ee({}, r), this.props)), e && ee(r, e), e != null && this.__v && (t && this._sb.push(t), lr(this))
}, Me.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), lr(this))
}, Me.prototype.render = He, pe = [], Tn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, An = function(e, t) {
    return e.__v.__b - t.__v.__b
}, Ge.__r = 0, kn = /(PointerCapture)$|Capture$/i, dr = 0, or = jr(!1), sr = jr(!0), Cn = 0;
const La = Object.freeze(Object.defineProperty({
        __proto__: null,
        Component: Me,
        Fragment: He,
        cloneElement: Da,
        createContext: Na,
        createElement: fr,
        createRef: Aa,
        h: fr,
        hydrate: Fn,
        get isValidElement() {
            return Rn
        },
        get options() {
            return $
        },
        render: $n,
        toChildArray: Ln
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Qa = _r(La);
var fe, I, rr, Wr, Re = 0,
    Hn = [],
    H = $,
    zr = H.__b,
    Gr = H.__r,
    Vr = H.diffed,
    Kr = H.__c,
    Yr = H.unmount,
    Jr = H.__;

function ge(e, t) {
    H.__h && H.__h(I, e, Re || t), Re = 0;
    var r = I.__H || (I.__H = {
        __: [],
        __h: []
    });
    return e >= r.__.length && r.__.push({}), r.__[e]
}

function Un(e) {
    return Re = 1, qn(Wn, e)
}

function qn(e, t, r) {
    var n = ge(fe++, 2);
    if (n.t = e, !n.__c && (n.__ = [r ? r(t) : Wn(void 0, t), function(p) {
            var d = n.__N ? n.__N[0] : n.__[0],
                b = n.t(d, p);
            d !== b && (n.__N = [b, n.__[1]], n.__c.setState({}))
        }], n.__c = I, !I.__f)) {
        var o = function(p, d, b) {
            if (!n.__c.__H) return !0;
            var S = n.__c.__H.__.filter(function(y) {
                return !!y.__c
            });
            if (S.every(function(y) {
                    return !y.__N
                })) return !s || s.call(this, p, d, b);
            var h = n.__c.props !== p;
            return S.forEach(function(y) {
                if (y.__N) {
                    var v = y.__[0];
                    y.__ = y.__N, y.__N = void 0, v !== y.__[0] && (h = !0)
                }
            }), s && s.call(this, p, d, b) || h
        };
        I.__f = !0;
        var s = I.shouldComponentUpdate,
            _ = I.componentWillUpdate;
        I.componentWillUpdate = function(p, d, b) {
            if (this.__e) {
                var S = s;
                s = void 0, o(p, d, b), s = S
            }
            _ && _.call(this, p, d, b)
        }, I.shouldComponentUpdate = o
    }
    return n.__N || n.__
}

function Pa(e, t) {
    var r = ge(fe++, 3);
    !H.__s && yr(r.__H, t) && (r.__ = e, r.u = t, I.__H.__h.push(r))
}

function jn(e, t) {
    var r = ge(fe++, 4);
    !H.__s && yr(r.__H, t) && (r.__ = e, r.u = t, I.__h.push(r))
}

function Oa(e) {
    return Re = 5, gr(function() {
        return {
            current: e
        }
    }, [])
}

function Ia(e, t, r) {
    Re = 6, jn(function() {
        if (typeof e == "function") {
            var n = e(t());
            return function() {
                e(null), n && typeof n == "function" && n()
            }
        }
        if (e) return e.current = t(),
            function() {
                return e.current = null
            }
    }, r == null ? r : r.concat(e))
}

function gr(e, t) {
    var r = ge(fe++, 7);
    return yr(r.__H, t) && (r.__ = e(), r.__H = t, r.__h = e), r.__
}

function $a(e, t) {
    return Re = 8, gr(function() {
        return e
    }, t)
}

function Fa(e) {
    var t = I.context[e.__c],
        r = ge(fe++, 9);
    return r.c = e, t ? (r.__ == null && (r.__ = !0, t.sub(I)), t.props.value) : e.__
}

function Ha(e, t) {
    H.useDebugValue && H.useDebugValue(t ? t(e) : e)
}

function Ua(e) {
    var t = ge(fe++, 10),
        r = Un();
    return t.__ = e, I.componentDidCatch || (I.componentDidCatch = function(n, o) {
        t.__ && t.__(n, o), r[1](n)
    }), [r[0], function() {
        r[1](void 0)
    }]
}

function qa() {
    var e = ge(fe++, 11);
    if (!e.__) {
        for (var t = I.__v; t !== null && !t.__m && t.__ !== null;) t = t.__;
        var r = t.__m || (t.__m = [0, 0]);
        e.__ = "P" + r[0] + "-" + r[1]++
    }
    return e.__
}

function ja() {
    for (var e; e = Hn.shift();)
        if (e.__P && e.__H) try {
            e.__H.__h.forEach(We), e.__H.__h.forEach(ur), e.__H.__h = []
        } catch (t) {
            e.__H.__h = [], H.__e(t, e.__v)
        }
}
H.__b = function(e) {
    I = null, zr && zr(e)
}, H.__ = function(e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Jr && Jr(e, t)
}, H.__r = function(e) {
    Gr && Gr(e), fe = 0;
    var t = (I = e.__c).__H;
    t && (rr === I ? (t.__h = [], I.__h = [], t.__.forEach(function(r) {
        r.__N && (r.__ = r.__N), r.u = r.__N = void 0
    })) : (t.__h.forEach(We), t.__h.forEach(ur), t.__h = [], fe = 0)), rr = I
}, H.diffed = function(e) {
    Vr && Vr(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (Hn.push(t) !== 1 && Wr === H.requestAnimationFrame || ((Wr = H.requestAnimationFrame) || Wa)(ja)), t.__H.__.forEach(function(r) {
        r.u && (r.__H = r.u), r.u = void 0
    })), rr = I = null
}, H.__c = function(e, t) {
    t.some(function(r) {
        try {
            r.__h.forEach(We), r.__h = r.__h.filter(function(n) {
                return !n.__ || ur(n)
            })
        } catch (n) {
            t.some(function(o) {
                o.__h && (o.__h = [])
            }), t = [], H.__e(n, r.__v)
        }
    }), Kr && Kr(e, t)
}, H.unmount = function(e) {
    Yr && Yr(e);
    var t, r = e.__c;
    r && r.__H && (r.__H.__.forEach(function(n) {
        try {
            We(n)
        } catch (o) {
            t = o
        }
    }), r.__H = void 0, t && H.__e(t, r.__v))
};
var Xr = typeof requestAnimationFrame == "function";

function Wa(e) {
    var t, r = function() {
            clearTimeout(n), Xr && cancelAnimationFrame(t), setTimeout(e)
        },
        n = setTimeout(r, 100);
    Xr && (t = requestAnimationFrame(r))
}

function We(e) {
    var t = I,
        r = e.__c;
    typeof r == "function" && (e.__c = void 0, r()), I = t
}

function ur(e) {
    var t = I;
    e.__c = e.__(), I = t
}

function yr(e, t) {
    return !e || e.length !== t.length || t.some(function(r, n) {
        return r !== e[n]
    })
}

function Wn(e, t) {
    return typeof t == "function" ? t(e) : t
}
const za = Object.freeze(Object.defineProperty({
        __proto__: null,
        useCallback: $a,
        useContext: Fa,
        useDebugValue: Ha,
        useEffect: Pa,
        useErrorBoundary: Ua,
        useId: qa,
        useImperativeHandle: Ia,
        useLayoutEffect: jn,
        useMemo: gr,
        useReducer: qn,
        useRef: Oa,
        useState: Un
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Za = _r(za);
export {
    Qa as a, Za as b, Ya as j, Xa as r, Ja as s
};