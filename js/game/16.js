const tJ8m = this;
function P1oA(t) {
    return t = parseFloat(t),
    Math.round(1e5 * t) / 1e5
}
function splitContent(t) {
    return t.startsWith("<bmp") ? t.split(/\s+/g) : t.startsWith("v2") ? t.split("\n") : t.split("¶")
}
class WlEE {
    kind = 0;
    x = 0;
    y = 0;
    w = 0;
    i1 = 0;
    en = 0;
    sn = 0;
    hn = 0;
    on = 0;
    an = 0;
    nn = 0;
    rn = 0;
    ln = 0;
    cn = 0;
    effect = 0;
    dn = 0;
    _n = 0;
    un = 0;
    fn = 0;
    gn = 0;
    mn = 0
}
class _IUN {
    kind = 0;
    x = 0;
    y = 0;
    w = 0;
    i1 = 0
}
class Kahe {
    kind = 0;
    x = 0;
    y = 0;
    action = 0;
    en = 0;
    sn = 0;
    pn = 0;
    Ws = 0
}
class LFN6 {
    x = 0;
    y = 0
}
class AkRS {
    kind = 0;
    x = 0;
    y = 0;
    ln = 0;
    Sn = 0;
    bn = 130;
    En = 0;
    Fn = 0;
    Ln = 0;
    Bn = 0;
    Mn = 0;
    yn = 0;
    wn = 0;
    Dn = 0;
    Vn = 0;
    Tn = 0;
    kn = 0;
    In = 0;
    Cn = 0
}
class UNzS {
    kind = 0;
    x = 0;
    y = 0;
    An = 0;
    vn = 0;
    Sn = 0;
    en = 0;
    sn = 0;
    Xn = 0
}
class BCel {
    x = 0;
    y = 0;
    w = 0;
    i1 = 0;
    constructor(s) {
        this.x = s[0].x,
        this.y = s[0].y,
        this.w = s[0].w + s[0].x,
        this.i1 = s[0].i1 + s[0].y;
        for (let t = 1; t < s.length; t++)
            this.x > s[t].x && (this.x = s[t].x),
            this.y > s[t].y && (this.y = s[t].y),
            this.w < s[t].x + s[t].w && (this.w = s[t].x + s[t].w),
            this.i1 < s[t].y + s[t].i1 && (this.i1 = s[t].y + s[t].i1);
        this.w = this.w - this.x,
        this.i1 = this.i1 - this.y
    }
}
class GDLT {
    index = 0;
    Yn = -1;
    Nn = -1;
    Un = 0;
    state = 0;
    wait = 0;
    next = 0;
    en = 0;
    sn = 0;
    Xn = 0;
    Rn = 0;
    xn = 0;
    Gn = 0;
    Yh = 0;
    Rs = 0;
    On = 0;
    zn = 0;
    Wn = 0;
    Zn = 0;
    Pn = 0;
    Jn = 0;
    os = 0;
    Hn = 39;
    Qn = 79;
    jn = null;
    Kn = null;
    $n = null;
    qn = null;
    tr = [];
    ir = 0;
    er = [];
    sr = 0;
    hr = null;
    ar = null;
    nr = 0;
    rr = "";
    lr = null;
    cr = -1;
    constructor() {}
}
const M_r6 = 3
  , UppG = 5
  , ZYwY = 2.5
  , AGH8 = 3
  , Eght = 10
  , DIbN = 1.6
  , HEAVY_UppG = 3.7
  , HEAVY_ZYwY = 1.85
  , HEAVY_Eght = 6.2
  , HEAVY_DIbN = 1
  , MGPu = -16.3
  , TJMQ = 10
  , Ta0E = 3.75
  , KyO5 = -10
  , XGuY = 18
  , Scn2 = 5
  , MhEp = -2
  , OEbN = 5;
class TIJj {
    Ho = 100;
    ti = 1;
    Fe = 0;
    dr = M_r6;
    _r = UppG;
    ur = ZYwY;
    gr = AGH8;
    mr = Eght;
    pr = DIbN;
    Sr = HEAVY_UppG;
    br = HEAVY_ZYwY;
    Er = HEAVY_Eght;
    Fr = HEAVY_DIbN;
    Lr = MGPu;
    Br = TJMQ;
    Mr = Ta0E;
    yr = KyO5;
    wr = XGuY;
    Dr = Scn2;
    Vr = MhEp;
    Tr = OEbN;
    kr = 0;
    Ir = 0;
    Cr = "";
    Ar = "";
    vr = "";
    Xr = -1;
    Yr = -1;
    Nr = -1;
    Ur = [];
    Rr = [];
    Gr = 0;
    Or = 0;
    zr = [];
    Wr = [];
    w = [];
    i1 = [];
    Zr = [];
    Pr = [];
    id = -1;
    type = 0;
    Jr = "none";
    qe = "";
    Hr = "none";
    Ee = "";
    static Qr = 400;
    f = [];
    name = "none";
    filename = "";
    jr = !1;
    loaded = !1;
    Ts = !1;
    A0 = [];
    Kr = [];
    $r = [];
    qr = [];
    t2 = 0;
    i2 = [];
    e2 = [];
    s2 = [];
    h2 = [];
    async o2() {
        await new Promise((t,s)=>{
            const e = ()=>{
                void 0 !== XYSz ? t() : setTimeout(e, 10)
            }
            ;
            e()
        }
        )
    }
    static a2 = !1;
    static n2 = !1;
    async d0(t, s, e=!1) {
        void 0 === XYSz && await this.o2(),
        this.filename = s,
        this.name = s;
        for (let t = this.Or = 0; t < 10; t++)
            this.Wr[t] = 0;
        var i = splitContent(t);
        let o = null
          , a = null
          , h = null
          , n = null
          , r = null
          , l = null
          , u = null
          , f = !1
          , d = 0;
        var c = [];
        for (let s = 0; s < i.length; s++) {
            if (null == o && !f) {
                if (!e && "bmp>" == i[s]) {
                    for (let t = 0; t < this.Or; t++)
                        c.push(Ii9w.b0(`_res_pngs/${this.zr[t]}.json`));
                    for (let e = 0; e < this.Or; e++) {
                        var p = this.zr[e].replace("sys/", "");
                        let s = this.Wr[e];
                        for (let t = 0; t < this.Zr[e]; t++)
                            for (let t = 0; t < this.Pr[e]; t++)
                                this.A0[s] = `${this.filename}-${p}-${s}.png`,
                                s++
                    }
                }
                if (e && i[s],
                "head" == i[s]) {
                    s++,
                    this.Jr = i[s],
                    this.qe = `_res_pngs/${this.Jr}.png`,
                    c.push(Ii9w.m0(this.qe));
                    continue
                }
                if ("small" == i[s]) {
                    s++,
                    this.Hr = i[s],
                    this.Ee = `_res_pngs/${this.Hr}.png`,
                    c.push(Ii9w.m0(this.Ee));
                    continue
                }
                if ("small_x_shift" == i[s]) {
                    s++,
                    this.Fe = P1oA(i[s]);
                    continue
                }
                if ("resized" == i[s]) {
                    s++,
                    this.ti = P1oA(i[s]);
                    continue
                }
                if ("default_centerx" == i[s]) {
                    s++,
                    this.Yn = parseInt(i[s]);
                    continue
                }
                if ("default_centery" == i[s]) {
                    s++,
                    this.Nn = parseInt(i[s]);
                    continue
                }
                if ("cost" == i[s]) {
                    s++,
                    this.Ho = parseInt(i[s]);
                    continue
                }
                if ("walking_frame_rate" == i[s]) {
                    s++,
                    this.dr = parseInt(i[s]);
                    continue
                }
                if ("walking_speed" == i[s]) {
                    s++,
                    this._r = P1oA(i[s]);
                    continue
                }
                if ("walking_speedz" == i[s]) {
                    s++,
                    this.ur = P1oA(i[s]);
                    continue
                }
                if ("running_frame_rate" == i[s]) {
                    s++,
                    this.gr = parseInt(i[s]);
                    continue
                }
                if ("running_speed" == i[s]) {
                    s++,
                    this.mr = P1oA(i[s]);
                    continue
                }
                if ("running_speedz" == i[s]) {
                    s++,
                    this.pr = P1oA(i[s]);
                    continue
                }
                if ("heavy_walking_speed" == i[s]) {
                    s++,
                    this.Sr = P1oA(i[s]);
                    continue
                }
                if ("heavy_walking_speedz" == i[s]) {
                    s++,
                    this.br = P1oA(i[s]);
                    continue
                }
                if ("heavy_running_speed" == i[s]) {
                    s++,
                    this.Er = P1oA(i[s]);
                    continue
                }
                if ("heavy_running_speedz" == i[s]) {
                    s++,
                    this.Fr = P1oA(i[s]);
                    continue
                }
                if ("jump_height" == i[s]) {
                    s++,
                    this.Lr = P1oA(i[s]);
                    continue
                }
                if ("jump_distance" == i[s]) {
                    s++,
                    this.Br = P1oA(i[s]);
                    continue
                }
                if ("jump_distancez" == i[s]) {
                    s++,
                    this.Mr = P1oA(i[s]);
                    continue
                }
                if ("dash_height" == i[s]) {
                    s++,
                    this.yr = P1oA(i[s]);
                    continue
                }
                if ("dash_distance" == i[s]) {
                    s++,
                    this.wr = P1oA(i[s]);
                    continue
                }
                if ("dash_distancez" == i[s]) {
                    s++,
                    this.Dr = P1oA(i[s]);
                    continue
                }
                if ("rowing_height" == i[s]) {
                    s++,
                    this.Vr = P1oA(i[s]);
                    continue
                }
                if ("rowing_distance" == i[s]) {
                    s++,
                    this.Tr = P1oA(i[s]);
                    continue
                }
                if ("name" == i[s]) {
                    s++,
                    this.name = i[s];
                    continue
                }
                if ("weapon_hp" == i[s]) {
                    s++,
                    this.kr = parseInt(i[s]);
                    continue
                }
                if ("weapon_drop_hurt" == i[s]) {
                    s++,
                    this.Ir = parseInt(i[s]);
                    continue
                }
                if ("weapon_hit_sound" == i[s]) {
                    s++,
                    this.Cr = i[s],
                    this.Xr = XYSz._(this.Cr);
                    continue
                }
                if ("weapon_drop_sound" == i[s]) {
                    s++,
                    this.Ar = i[s],
                    this.Yr = XYSz._(this.Ar);
                    continue
                }
                if ("weapon_broken_sound" == i[s]) {
                    s++,
                    this.vr = i[s],
                    this.Nr = XYSz._(this.vr);
                    continue
                }
                if (4 < i[s].length && "file" == i[s].substring(0, 4) && (s++,
                this.zr[this.Or] = i[s],
                0 < this.Or && (this.Wr[this.Or] = this.Wr[this.Or - 1] + this.Zr[this.Or - 1] * this.Pr[this.Or - 1]),
                this.Or++),
                "limb_head_blood_60" == i[s]) {
                    for (let t = 0; t < 60; t++) {
                        s++;
                        var g = parseInt(i[s])
                          , y = (s++,
                        parseInt(i[s]));
                        this.s2[t] = {
                            x: g,
                            y: y
                        }
                    }
                    continue
                }
                if ("limb_head_blood" == i[s]) {
                    for (let t = 0; t < 30; t++) {
                        s++;
                        var x = parseInt(i[s])
                          , m = (s++,
                        parseInt(i[s]));
                        this.s2[t] = {
                            x: x,
                            y: m
                        }
                    }
                    continue
                }
                if ("limb_hand_weapon" == i[s]) {
                    for (let t = 0; t < 60; t++) {
                        s++;
                        var _ = parseInt(i[s])
                          , S = (s++,
                        parseInt(i[s]));
                        this.h2[t] = {
                            x: _,
                            y: S
                        }
                    }
                    continue
                }
                if ("limb_hand_weapon_120" == i[s]) {
                    for (let t = 0; t < 120; t++) {
                        s++;
                        var E = parseInt(i[s])
                          , b = (s++,
                        parseInt(i[s]));
                        this.h2[t] = {
                            x: E,
                            y: b
                        }
                    }
                    continue
                }
                if (5 < i[s].length && "limb_" == i[s].substring(0, 5)) {
                    var M = i[s]
                      , D = i[++s]
                      , w = (s++,
                    parseInt(i[s]))
                      , L = (s++,
                    parseInt(i[s]))
                      , B = (s++,
                    parseInt(i[s]))
                      , F = (s++,
                    parseInt(i[s]))
                      , I = (s++,
                    parseInt(i[s]))
                      , C = (s++,
                    parseInt(i[s]))
                      , T = D.replace("sys/", "");
                    this.$r[this.t2] = {
                        name: M,
                        l2: D,
                        w: w,
                        i1: L,
                        c: B,
                        r: F,
                        start: I,
                        c2: C,
                        Un: []
                    };
                    for (let t = 0; t < C; t++) {
                        var V = I + t;
                        this.$r[this.t2].Un.push({
                            l2: D,
                            x: V % B * w + 2,
                            y: Math.floor(V / B) * L + 2,
                            w: w - 4,
                            i1: L - 4,
                            d2: `${T}-${M}-${t}.png`
                        })
                    }
                    this.qr[M] = this.t2,
                    this.t2++,
                    null == this.i2[D] && (this.i2[D] = {
                        filename: D,
                        _2: []
                    }),
                    this.i2[D]._2.push({
                        u2: M,
                        w: w,
                        i1: L,
                        c: B,
                        r: F,
                        start: I,
                        c2: C
                    })
                }
                if ("w" == i[s] && 0 < this.Or) {
                    s++,
                    this.w[this.Or - 1] = parseInt(i[s]);
                    continue
                }
                if ("h" == i[s] && 0 < this.Or) {
                    s++,
                    this.i1[this.Or - 1] = parseInt(i[s]);
                    continue
                }
                if ("col" == i[s] && 0 < this.Or) {
                    s++,
                    this.Zr[this.Or - 1] = parseInt(i[s]);
                    continue
                }
                if ("row" == i[s] && 0 < this.Or) {
                    s++,
                    this.Pr[this.Or - 1] = parseInt(i[s]);
                    continue
                }
            }
            if ("<wsl" == i[s])
                f = !0;
            else if ("<f" == i[s])
                o = new GDLT,
                s++,
                o.index = parseInt(i[s]),
                s++,
                o.rr = i[s],
                "-" == o.rr && null != this.f[o.index - 1] && (o.rr = this.f[o.index - 1].rr),
                o.Hn = this.Yn,
                o.Qn = this.Nn,
                this.f[o.index] = o;
            else if ("<o" == i[s])
                a = new Kahe,
                o.jn = a;
            else if ("<bp" == i[s])
                n = new LFN6,
                o.Kn = n;
            else if ("<c" == i[s])
                r = new AkRS,
                o.$n = r;
            else if ("<w" == i[s])
                h = new UNzS,
                o.qn = h;
            else if ("<i" == i[s])
                u = new WlEE,
                o.tr.push(u),
                o.ir++;
            else if ("<b" == i[s])
                l = new _IUN,
                o.er.push(l),
                o.sr++;
            else {
                if (null != o) {
                    if (null != a) {
                        if ("kind" == i[s]) {
                            s++,
                            a.kind = parseInt(i[s]);
                            continue
                        }
                        if ("x" == i[s]) {
                            s++,
                            a.x = parseInt(i[s]);
                            continue
                        }
                        if ("y" == i[s]) {
                            s++,
                            a.y = parseInt(i[s]);
                            continue
                        }
                        if ("action" == i[s]) {
                            s++,
                            a.action = parseInt(i[s]);
                            continue
                        }
                        if ("dvx" == i[s]) {
                            s++,
                            a.en = parseInt(i[s]);
                            continue
                        }
                        if ("dvy" == i[s]) {
                            s++,
                            a.sn = parseInt(i[s]);
                            continue
                        }
                        if ("oid" == i[s]) {
                            s++,
                            a.pn = parseInt(i[s]);
                            continue
                        }
                        if ("facing" == i[s]) {
                            s++,
                            a.Ws = parseInt(i[s]);
                            continue
                        }
                        if ("o>" != i[s])
                            continue;
                        a = null;
                        continue
                    }
                    if (null != n) {
                        if ("x" == i[s]) {
                            s++,
                            n.x = P1oA(i[s]);
                            continue
                        }
                        if ("y" == i[s]) {
                            s++,
                            n.y = P1oA(i[s]);
                            continue
                        }
                        if ("bp>" != i[s])
                            continue;
                        n = null;
                        continue
                    }
                    if (null != r) {
                        if ("kind" == i[s]) {
                            s++,
                            r.kind = parseInt(i[s]);
                            continue
                        }
                        if ("x" == i[s]) {
                            s++,
                            r.x = parseInt(i[s]);
                            continue
                        }
                        if ("y" == i[s]) {
                            s++,
                            r.y = parseInt(i[s]);
                            continue
                        }
                        if ("injury" == i[s]) {
                            s++,
                            r.ln = parseInt(i[s]);
                            continue
                        }
                        if ("cover" == i[s]) {
                            s++,
                            r.Sn = parseInt(i[s]);
                            continue
                        }
                        if ("vaction" == i[s]) {
                            s++,
                            r.bn = parseInt(i[s]);
                            continue
                        }
                        if ("aaction" == i[s]) {
                            s++,
                            r.En = parseInt(i[s]);
                            continue
                        }
                        if ("jaction" == i[s]) {
                            s++,
                            r.Fn = parseInt(i[s]);
                            continue
                        }
                        if ("taction" == i[s]) {
                            s++,
                            r.Ln = parseInt(i[s]);
                            continue
                        }
                        if ("daction" == i[s]) {
                            s++,
                            r.Bn = parseInt(i[s]);
                            continue
                        }
                        if ("throwvx" == i[s]) {
                            s++,
                            r.Mn = parseInt(i[s]),
                            r.Mn < -9e4 && (r.Mn = 0);
                            continue
                        }
                        if ("throwvy" == i[s]) {
                            s++,
                            r.yn = parseInt(i[s]),
                            r.yn < -9e4 && (r.yn = 0);
                            continue
                        }
                        if ("throwvz" == i[s]) {
                            s++,
                            r.wn = parseInt(i[s]),
                            r.wn < -9e4 && (r.wn = 0);
                            continue
                        }
                        if ("hurtable" == i[s]) {
                            s++,
                            r.Dn = parseInt(i[s]);
                            continue
                        }
                        if ("throwinjury" == i[s]) {
                            s++,
                            r.Vn = parseInt(i[s]),
                            r.Vn < -9e4 && (r.Vn = 0);
                            continue
                        }
                        if ("fronthurtact" == i[s]) {
                            s++,
                            r.Tn = parseInt(i[s]);
                            continue
                        }
                        if ("backhurtact" == i[s]) {
                            s++,
                            r.kn = parseInt(i[s]);
                            continue
                        }
                        if ("decrease" == i[s]) {
                            s++,
                            r.In = parseInt(i[s]);
                            continue
                        }
                        if ("dircontrol" == i[s]) {
                            s++,
                            r.Cn = parseInt(i[s]);
                            continue
                        }
                        if ("c>" != i[s])
                            continue;
                        r = null;
                        continue
                    }
                    if (null != h) {
                        if ("kind" == i[s]) {
                            s++,
                            h.kind = parseInt(i[s]);
                            continue
                        }
                        if ("x" == i[s]) {
                            s++,
                            h.x = P1oA(i[s]);
                            continue
                        }
                        if ("y" == i[s]) {
                            s++,
                            h.y = P1oA(i[s]);
                            continue
                        }
                        if ("weaponact" == i[s]) {
                            s++,
                            h.An = parseInt(i[s]);
                            continue
                        }
                        if ("attacking" == i[s]) {
                            s++,
                            h.vn = parseInt(i[s]);
                            continue
                        }
                        if ("cover" == i[s]) {
                            s++,
                            h.Sn = parseInt(i[s]);
                            continue
                        }
                        if ("dvx" == i[s]) {
                            s++,
                            h.en = parseInt(i[s]);
                            continue
                        }
                        if ("dvy" == i[s]) {
                            s++,
                            h.sn = parseInt(i[s]);
                            continue
                        }
                        if ("dvz" == i[s]) {
                            s++,
                            h.Xn = parseInt(i[s]);
                            continue
                        }
                        if ("w>" != i[s])
                            continue;
                        h = null;
                        continue
                    }
                    if (null != u) {
                        if ("kind" == i[s]) {
                            s++,
                            u.kind = parseInt(i[s]);
                            continue
                        }
                        if ("x" == i[s]) {
                            s++,
                            u.x = parseInt(i[s]);
                            continue
                        }
                        if ("y" == i[s]) {
                            s++,
                            u.y = parseInt(i[s]);
                            continue
                        }
                        if ("w" == i[s]) {
                            s++,
                            u.w = parseInt(i[s]);
                            continue
                        }
                        if ("h" == i[s]) {
                            s++,
                            u.i1 = parseInt(i[s]);
                            continue
                        }
                        if ("dvx" == i[s]) {
                            s++,
                            u.en = parseInt(i[s]);
                            continue
                        }
                        if ("dvy" == i[s]) {
                            s++,
                            u.sn = parseInt(i[s]);
                            continue
                        }
                        if ("fall" == i[s]) {
                            s++,
                            u.hn = parseInt(i[s]);
                            continue
                        }
                        if ("arest" == i[s]) {
                            s++,
                            u.on = parseInt(i[s]);
                            continue
                        }
                        if ("vrest" == i[s]) {
                            s++,
                            u.an = parseInt(i[s]);
                            continue
                        }
                        if ("respond" == i[s]) {
                            s++,
                            u.nn = parseInt(i[s]);
                            continue
                        }
                        if ("bdefend" == i[s]) {
                            s++,
                            u.rn = parseInt(i[s]);
                            continue
                        }
                        if ("injury" == i[s]) {
                            s++,
                            u.ln = parseInt(i[s]);
                            continue
                        }
                        if ("zwidth" == i[s]) {
                            s++,
                            u.cn = parseInt(i[s]);
                            continue
                        }
                        if ("effect" == i[s]) {
                            s++,
                            u.effect = parseInt(i[s]);
                            continue
                        }
                        if ("catchingact" == i[s]) {
                            s++,
                            u.dn = parseInt(i[s]),
                            s++,
                            u._n = parseInt(i[s]);
                            continue
                        }
                        if ("caughtact" == i[s]) {
                            s++,
                            u.un = parseInt(i[s]),
                            s++,
                            u.fn = parseInt(i[s]);
                            continue
                        }
                        if ("pickingact" == i[s]) {
                            s++,
                            u.gn = parseInt(i[s]);
                            continue
                        }
                        if ("pickedact" == i[s]) {
                            s++,
                            u.mn = parseInt(i[s]);
                            continue
                        }
                        if ("i>" != i[s])
                            continue;
                        u = null;
                        continue
                    }
                    if (null != l) {
                        if ("kind" == i[s]) {
                            s++,
                            l.kind = parseInt(i[s]);
                            continue
                        }
                        if ("x" == i[s]) {
                            s++,
                            l.x = parseInt(i[s]);
                            continue
                        }
                        if ("y" == i[s]) {
                            s++,
                            l.y = parseInt(i[s]);
                            continue
                        }
                        if ("w" == i[s]) {
                            s++,
                            l.w = parseInt(i[s]);
                            continue
                        }
                        if ("h" == i[s]) {
                            s++,
                            l.i1 = parseInt(i[s]);
                            continue
                        }
                        if ("b>" != i[s])
                            continue;
                        l = null;
                        continue
                    }
                    if ("pic" == i[s]) {
                        s++,
                        o.Un = parseInt(i[s]);
                        continue
                    }
                    if ("state" == i[s]) {
                        s++,
                        o.state = parseInt(i[s]);
                        continue
                    }
                    if ("wait" == i[s]) {
                        s++,
                        o.wait = parseInt(i[s]);
                        continue
                    }
                    if ("next" == i[s]) {
                        s++,
                        o.next = parseInt(i[s]);
                        continue
                    }
                    if ("dvx" == i[s]) {
                        s++,
                        o.en = parseInt(i[s]);
                        continue
                    }
                    if ("dvy" == i[s]) {
                        s++,
                        o.sn = parseInt(i[s]);
                        continue
                    }
                    if ("dvz" == i[s]) {
                        s++,
                        o.Xn = parseInt(i[s]);
                        continue
                    }
                    if ("centerx" == i[s]) {
                        s++,
                        o.Hn = parseInt(i[s]);
                        continue
                    }
                    if ("centery" == i[s]) {
                        s++,
                        o.Qn = parseInt(i[s]);
                        continue
                    }
                    if ("hit_a" == i[s]) {
                        s++,
                        o.xn = parseInt(i[s]);
                        continue
                    }
                    if ("hit_d" == i[s]) {
                        s++,
                        o.Gn = parseInt(i[s]);
                        continue
                    }
                    if ("hit_j" == i[s]) {
                        s++,
                        o.Yh = parseInt(i[s]);
                        continue
                    }
                    if ("hit_Fa" == i[s]) {
                        s++,
                        o.Rs = parseInt(i[s]);
                        continue
                    }
                    if ("hit_Ua" == i[s]) {
                        s++,
                        o.On = parseInt(i[s]);
                        continue
                    }
                    if ("hit_Da" == i[s]) {
                        s++,
                        o.zn = parseInt(i[s]);
                        continue
                    }
                    if ("hit_Fj" == i[s]) {
                        s++,
                        o.Wn = parseInt(i[s]);
                        continue
                    }
                    if ("hit_Uj" == i[s]) {
                        s++,
                        o.Zn = parseInt(i[s]);
                        continue
                    }
                    if ("hit_Dj" == i[s]) {
                        s++,
                        o.Pn = parseInt(i[s]);
                        continue
                    }
                    if ("hit_ja" == i[s]) {
                        s++,
                        o.Jn = parseInt(i[s]);
                        continue
                    }
                    if ("mp" == i[s]) {
                        s++,
                        o.os = parseInt(i[s]);
                        continue
                    }
                    if ("sound" == i[s]) {
                        s++,
                        o.lr = i[s],
                        o.cr = XYSz._(o.lr);
                        continue
                    }
                    if ("f>" == i[s]) {
                        0 < o.tr.length && (o.hr = new BCel(o.tr)),
                        0 < o.er.length && (o.ar = new BCel(o.er)),
                        o = null;
                        continue
                    }
                }
                f && ("entry" == i[s] ? (s++,
                d = parseInt(i[s]),
                this.Ur[d] = new WlEE,
                s++,
                this.Rr[d] = i[s]) : "dvx" == i[s] ? (s++,
                this.Ur[d].en = parseInt(i[s])) : "dvy" == i[s] ? (s++,
                this.Ur[d].sn = parseInt(i[s])) : "fall" == i[s] ? (s++,
                this.Ur[d].hn = parseInt(i[s])) : "arest" == i[s] ? (s++,
                this.Ur[d].on = parseInt(i[s])) : "vrest" == i[s] ? (s++,
                this.Ur[d].an = parseInt(i[s])) : "respond" == i[s] ? (s++,
                this.Ur[d].nn = parseInt(i[s])) : "bdefend" == i[s] ? (s++,
                this.Ur[d].rn = parseInt(i[s])) : "injury" == i[s] ? (s++,
                this.Ur[d].ln = parseInt(i[s])) : "zwidth" == i[s] ? (s++,
                this.Ur[d].cn = parseInt(i[s])) : "effect" == i[s] ? (s++,
                this.Ur[d].effect = parseInt(i[s])) : "wsl>" == i[s] && (f = !1))
            }
        }
        this.t2;
        var A = new Map
          , z = new Map;
        for (let t = 0; t < TIJj.Qr; t++) {
            var v = this.f[t];
            null != v && (A.set(v.Hn, (A.get(v.Hn) || 0) + 1),
            z.set(v.Qn, (z.get(v.Qn) || 0) + 1))
        }
        this.Yn = [...A.entries()].reduce((t,s)=>s[1] > t[1] ? s : t)[0],
        this.Nn = [...z.entries()].reduce((t,s)=>s[1] > t[1] ? s : t)[0];
        try {
            await Promise.all(c),
            this.loaded = !0
        } catch (t) {
            dbl0(`Failed to load one or more textures for ${this.name}: ` + t)
        }
        TIJj.a2 = !1
    }
    f2() {}
    g2(t) {
        if (this.f[t]) {
            var s = this.f[t].Un;
            for (let t = 0; t < this.Or; t++)
                if (s >= this.Wr[t] && s < this.Wr[t] + this.Pr[t] * this.Zr[t])
                    return this.w[t]
        }
        return 0
    }
    put(t, s, e, i=1, o=!1, a=0) {
        this.f[e] && (e = this.f[e].Un + a,
        D.Mwfo(this.A0[e], t, s, 0, i / this.ti, 0, 0, 0, 1, o))
    }
}
class NEOE {
    id = 0;
    w = 0;
    us = 0;
    _s = 0;
    m2 = 0;
    S2 = 0;
    b2 = 0;
    E2 = 0;
    F2 = 1;
    L2 = 0;
    B2 = new Array(30);
    M2 = new Array(30);
    w2 = "";
    D2 = !1;
    V2 = "";
    name = "";
    T2 = new Array(30);
    I2 = new Array(30);
    C2 = new Array(30);
    A2 = new Array(30);
    loop = new Array(30);
    v2 = new Array(30);
    X2 = new Array(30);
    Y2 = new Array(30);
    c = new Array(30);
    N2 = new Array(30);
    U2 = new Array(30);
    R2 = new Array(30);
    G2 = new Array(30);
    O2 = new Array(30);
    z2 = new Array(30);
    W2 = void 0;
    filename = "";
    loaded = !1;
    Ts = !1;
    ks = !1;
    constructor() {}
    async Is() {
        this.ks = !0;
        var t = [];
        this.w2.toLowerCase().endsWith(".png") || (this.w2 = this.w2 + ".png"),
        t.push(await Ii9w.S0(this.w2)),
        this.V2 && (this.V2.toLowerCase().endsWith(".png") || (this.V2 = this.V2 + ".png"),
        t.push(await Ii9w.S0(this.V2)),
        this.D2 = !0);
        let s = 0;
        for (s = 0; s < this.L2; s++)
            this.B2[s].toLowerCase().endsWith(".png") || (this.B2[s] = this.B2[s] + ".png"),
            t.push(await Ii9w.S0(this.B2[s])),
            this.M2[s] && (this.M2[s].toLowerCase().endsWith(".png") || (this.M2[s] = this.M2[s] + ".png"),
            t.push(await Ii9w.S0(this.M2[s])));
        await Promise.all(t),
        this.ks = !1,
        this.Ts = !0
    }
}
class T7ES {
    static s0 = new Array(100);
    static Z2 = new Array(60);
    static Ae = new Array(100);
    static P2 = new Array(30);
    static _e = 0;
    static Ue = 0;
    static P0 = 0;
    static J2 = 0;
    static H2 = 0;
    static loading = !1;
    static loaded = !1;
    static Q2 = !1;
    static j2 = !1;
    static K2 = !1;
    static q2 = !1;
    static $ = !0;
    static async tl() {
        if (void 0 !== TIJj && void 0 !== NEOE) {
            T7ES.loading = !0;
            var s, e, i = (await lvT9.F0("_res_data/_data.txt")).split(/\s+/g);
            for (let t = 0; t < i.length; t++) {
                if ("<object>" == i[t])
                    for (t++; "id:" == i[t] && (t++,
                    (s = new TIJj).id = parseInt(i[t]),
                    t++,
                    t++,
                    s.type = parseInt(i[t]),
                    t++,
                    t++,
                    s.filename = i[t],
                    T7ES.s0[T7ES._e] = s,
                    T7ES._e++),
                    "<object_end>" != i[++t]; )
                        ;
                if ("<background>" == i[t])
                    for (t++; "id:" == i[t] && (t++,
                    (e = new NEOE).id = parseInt(i[t]),
                    t++,
                    t++,
                    e.filename = i[t],
                    T7ES.Ae[T7ES.Ue] = e,
                    T7ES.Ue++),
                    "<background_end>" != i[++t]; )
                        ;
            }
            T7ES.loaded = !0,
            T7ES.loading = !1
        }
    }
    static async il() {
        T7ES.Q2 = !0;
        var s = (await lvT9.F0("_res_data/_stage.txt")).split(/\s+/g);
        let e = null
          , i = null
          , o = null;
        for (let t = 0; t < s.length; t++)
            if ("<stage>" == s[t])
                e = new K2Ri,
                i = null,
                o = null;
            else if (null == i && "id:" == s[t])
                t++,
                e.id = parseInt(s[t]),
                T7ES.Z2[e.id] = e;
            else {
                if (null != e) {
                    if ("<phase>" == s[t]) {
                        i = new JM6H,
                        e.el[e.sl] = i,
                        e.sl++,
                        o = null,
                        t++,
                        t++,
                        i.bound = parseInt(s[t]);
                        continue
                    }
                    if (null != i) {
                        if ("id:" == s[t]) {
                            o = new R2BL,
                            t++,
                            o.id = parseInt(s[t]),
                            o.x = i.bound + 80,
                            i.hl[i.ol] = o,
                            i.ol++;
                            continue
                        }
                        if ("music:" == s[t]) {
                            t++,
                            i.al = s[t];
                            continue
                        }
                        if ("when_clear_goto_phase:" == s[t]) {
                            t++,
                            i.nl = parseInt(s[t]);
                            continue
                        }
                        if (null != o) {
                            if ("x:" == s[t]) {
                                t++,
                                o.x = parseInt(s[t]);
                                continue
                            }
                            if ("hp:" == s[t]) {
                                t++,
                                o.ls = parseInt(s[t]);
                                continue
                            }
                            if ("times:" == s[t]) {
                                t++,
                                o.rl = parseInt(s[t]);
                                continue
                            }
                            if ("reserve:" == s[t]) {
                                t++,
                                o.ll = parseInt(s[t]);
                                continue
                            }
                            if ("<boss>" == s[t]) {
                                o.cl = 2;
                                continue
                            }
                            if ("join:" == s[t]) {
                                t++,
                                o.join = parseInt(s[t]);
                                continue
                            }
                            if ("<soldier>" == s[t]) {
                                o.cl = 1,
                                o.rl = 50;
                                continue
                            }
                            if ("ratio:" == s[t]) {
                                t++,
                                o.ratio = parseFloat(s[t]);
                                continue
                            }
                            if ("y:" == s[t]) {
                                t++,
                                o.y = parseInt(s[t]);
                                continue
                            }
                            if ("act:" == s[t]) {
                                t++,
                                o.xs = parseInt(s[t]);
                                continue
                            }
                        }
                        "<phase_end>" == s[t] && (i = null,
                        o = null)
                    }
                }
                "<stage_end>" == s[t] && (null != e && (i = null,
                o = null),
                e = null)
            }
        T7ES.j2 = !0,
        T7ES.Q2 = !1
    }
    static async dl() {
        let s = !(T7ES.K2 = !0);
        var e = [];
        for (let t = 0; t < T7ES.Ue; t++) {
            var i = T7ES.Ae[t]
              , o = (await lvT9.F0(i.filename + ".txt")).split(/\s+/g);
            s = !1;
            for (let t = 0; t < o.length; t++) {
                if (!s) {
                    if ("name:" == o[t]) {
                        t++,
                        i.name = o[t];
                        continue
                    }
                    if ("width:" == o[t]) {
                        t++,
                        i.w = parseInt(o[t]);
                        continue
                    }
                    if ("zboundary:" == o[t]) {
                        t++,
                        i.us = parseInt(o[t]),
                        t++,
                        i._s = parseInt(o[t]);
                        continue
                    }
                    if ("perspective:" == o[t]) {
                        t++,
                        i.m2 = parseInt(o[t]),
                        t++,
                        i.S2 = parseInt(o[t]);
                        continue
                    }
                    if ("shadow:" == o[t]) {
                        t++,
                        i.w2 = o[t],
                        o[t].endsWith("_x3") && (i.V2 = o[t].replace("_x3", "_x1")),
                        t++,
                        t++,
                        i.b2 = parseInt(o[t]),
                        t++,
                        i.E2 = parseInt(o[t]);
                        continue
                    }
                    if ("upscale:" == o[t]) {
                        t++,
                        i.F2 = parseInt(o[t]);
                        continue
                    }
                    "layer:" == o[t] && (t++,
                    i.B2[i.L2] = o[t],
                    o[t].endsWith("_x3") && (i.M2[i.L2] = o[t].replace("_x3", "_x1")),
                    s = !0,
                    i.L2++)
                }
                s && ("width:" == o[t] ? (t++,
                i.T2[i.L2 - 1] = parseInt(o[t])) : "x:" == o[t] ? (t++,
                i.I2[i.L2 - 1] = parseInt(o[t])) : "y:" == o[t] ? (t++,
                i.C2[i.L2 - 1] = parseInt(o[t])) : "height:" == o[t] ? (t++,
                i.A2[i.L2 - 1] = parseInt(o[t])) : "loop:" == o[t] ? (t++,
                i.loop[i.L2 - 1] = parseInt(o[t])) : "cc:" == o[t] ? (t++,
                i.Y2[i.L2 - 1] = parseInt(o[t])) : "c1:" == o[t] ? (t++,
                i.v2[i.L2 - 1] = parseInt(o[t])) : "c2:" == o[t] ? (t++,
                i.X2[i.L2 - 1] = parseInt(o[t])) : "csx:" == o[t] ? (t++,
                i.U2[i.L2 - 1] = parseFloat(o[t])) : "csy:" == o[t] ? (t++,
                i.R2[i.L2 - 1] = parseFloat(o[t])) : "special:" == o[t] ? (t++,
                i.G2[i.L2 - 1] = parseInt(o[t])) : "csound:" == o[t] ? (t++,
                i.O2[i.L2 - 1] = XYSz._(o[t])) : "layer_end" == o[t] && (s = !1))
            }
            e.push(i.Is())
        }
        await Promise.all(e),
        T7ES.q2 = !0,
        T7ES.K2 = !1
    }
}