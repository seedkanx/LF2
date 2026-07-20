class LWAh {
    fu = 1;
    gu = 1.7;
    mu;
    index;
    pu;
    Su;
    ds;
    bu;
    Eu = [];
    Ma = !1;
    Fu;
    x;
    y;
    z;
    Lu;
    Bu;
    Mu;
    yu;
    wu;
    Gs;
    Os;
    zs;
    fs;
    ps;
    gs;
    xs;
    iu;
    eu;
    Du;
    Ws;
    next;
    waiting;
    Vu;
    Tu;
    ku;
    Eh;
    Mh;
    Iu;
    hn;
    Cu;
    Au;
    vu;
    Xu;
    Yu;
    Nu;
    Uu;
    Ru;
    xu;
    Gu;
    Ou;
    zu;
    Wu;
    th;
    ih;
    eh;
    sh;
    es;
    hh;
    oh;
    Sh;
    ph;
    K_;
    de;
    R0;
    left;
    right;
    attack;
    fe;
    ah;
    Qo;
    za = !1;
    Jo = 0;
    Ah;
    Xh;
    Th;
    Ih;
    wh;
    Dh;
    kh;
    Vh;
    Ch;
    Zu;
    Pu;
    Ks;
    Ju;
    Hu;
    Qu;
    ju;
    Ku;
    $u = [];
    qu = [];
    tf = [];
    if;
    ef;
    sf;
    hf;
    parent;
    js;
    ls;
    rs;
    ns;
    os;
    af;
    nf;
    join;
    Io;
    rf;
    lf;
    tu;
    su;
    hu;
    au;
    nu;
    ou;
    cs;
    yo;
    Mo;
    cf;
    df;
    _f;
    Ss;
    uf;
    ff;
    gf;
    mh;
    group;
    s0;
    mf;
    pf = [];
    Sf = [];
    bf = [];
    Lh;
    Bh;
    uh;
    nh;
    Js;
    lh;
    dh;
    _h;
    Fh;
    Ef = [];
    P0;
    Ff;
    Lf;
    Bf;
    x2;
    px;
    kc;
    f;
    Mf;
    vs() {
        this.Js = -1,
        this.lh = 0,
        this.Lu = this.ds = this.group = this.Mh = this.Iu = this.ju = this.Fu = this.x = this.y = this.z = this.xs = this.Du = this.iu = this.eu = this.Ws = this.next = this.waiting = this.ku = this.Eh = this.hn = this.vu = this.pu = this.Su = 0,
        this.bu = 0,
        this.Eu = [],
        this.Ma = !1,
        this.Vu = this.Tu = -1,
        this.de = this.R0 = this.left = this.right = this.attack = this.fe = this.ah = 0,
        this.th = this.ih = this.eh = this.sh = this.es = this.hh = this.oh = 0,
        this.Sh = 0,
        this.ph = 0,
        this.K_ = 0,
        this.Yu = 0,
        this.Nu = this.Uu = this.Ru = this.xu = 0,
        this.Gu = this.zu = this.Ou = this.Wu = 0,
        this.Zu = !1,
        this.Ah = this.Xh = this.Th = this.Ih = this.wh = this.Dh = this.kh = this.Vh = this.Ch = 0,
        this.Pu = 0,
        this.Ks = 0,
        this.Mu = this.yu = this.wu = this.Gs = this.Os = this.zs = .1,
        this.fs = this.ps = this.gs = 0,
        this.Cu = this.Au = 0,
        this.Ju = this.Hu = this.Qu = 0,
        this.Bu = this.lf = this.Ku = this.ef = 0,
        this.parent = -1,
        this.js = -1,
        this.ls = 500,
        this.ns = 500,
        this.Io = 0,
        this.rs = 500,
        this.os = 500,
        this.join = 0,
        this.nf = 0,
        this.ll = 0,
        this.cf = 0,
        this.df = 0,
        this._f = 0,
        this.uf = 0,
        this.ff = 0,
        this.gf = 0,
        this.Ss = 99,
        this.mh = -1,
        this.Lh = this.Bh = this.uh = this.nh = 0,
        this.tu = -1,
        this.su = -1,
        this.hu = -1,
        this.ou = 0,
        this.au = 0,
        this.nu = 0,
        this.cs = -1;
        let t = this.mf = 0;
        for (t = 0; t < Sh7E.Zs; t++)
            this.$u[t] = 0;
        for (t = 0; t < 20; t++)
            this.qu[t] = this.tf[t] = 0;
        for (this.yf(),
        this.dh = this._h = -1e3,
        this.Fh = 0,
        t = 0; t < 5; t++)
            this.Ef[t] = 0;
        this.yo = 0,
        this.Mo = 0
    }
    yf() {
        this.ef = 1e3,
        this.sf = 1e3,
        this.hf = 1e3,
        this.if = 0,
        this.ju = 0
    }
    constructor(t, s, e, i, o, a) {
        this.mu = o,
        this.hs(t, s, e, i),
        this.index = a
    }
    hs(t, s, e, i) {
        this.vs(),
        this.s0 = t,
        this.rf = this.s0.kr,
        this.fs = s,
        this.ps = e,
        this.gs = i
    }
    wf(t) {
        t = t.Ea[Sh7E.Ml],
        this.s0.f[this.xs] && (this.f = this.s0.f[this.xs].Un + this.Io,
        this.x2 = 0,
        this.Cu < 0 && (this.x2 = 6 * this.mu.Wo - 3),
        9997 == this.s0.f[this.xs].state ? 0 == this.Ws && (this.px = this.Lu + -t + this.x2 + this.x - this.s0.f[this.xs].Hn,
        this.px < 0 ? D.Ba6u(this.s0.A0[this.f], 0, this.z + this.y - this.s0.f[this.xs].Qn, 0, 1 / this.s0.ti) : this.px > GLOBAL_ZOOM_WIDTH - 80 ? D.Ba6u(this.s0.A0[this.f], GLOBAL_ZOOM_WIDTH - 80, this.z + this.y - this.s0.f[this.xs].Qn, 0, 1 / this.s0.ti) : D.Ba6u(this.s0.A0[this.f], this.px, this.z + this.y - this.s0.f[this.xs].Qn, 0, 1 / this.s0.ti)) : (this.s0.A0.length > this.f && (0 == this.Ws && D.Ba6u(this.s0.A0[this.f], this.Lu + -t + this.x2 + this.x - this.s0.f[this.xs].Hn, this.z + this.y - this.s0.f[this.xs].Qn, 0, 1 / this.s0.ti),
        1 == this.Ws) && D.Ba6u(this.s0.A0[this.f], this.Lu + -t + this.x2 + this.x + this.s0.f[this.xs].Hn, this.z + this.y - this.s0.f[this.xs].Qn, 1, 1 / this.s0.ti),
        this.ls < .3 * this.ns && null != this.s0.f[this.xs].Kn && (0 == this.Ws ? D.Ba6u(BLg_.M1, this.Lu + -t + this.x2 + this.x - this.s0.f[this.xs].Hn + this.s0.f[this.xs].Kn.x, this.z + this.y - this.s0.f[this.xs].Qn + this.s0.f[this.xs].Kn.y, 0, 1 / 3) : D.Ba6u(BLg_.M1, this.Lu + -t + this.x2 + this.x + this.s0.f[this.xs].Hn - this.s0.f[this.xs].Kn.x - 1, this.z + this.y - this.s0.f[this.xs].Qn + this.s0.f[this.xs].Kn.y, 0, 1 / 3))))
    }
    Df(e, i) {
        if ((0 == this.Cu || 3 == this.s0.type) && (0 < this.Ku && this.Ku--,
        !(this.Eh < 0)) && this.s0.f[this.xs] && (!this.s0.f[this.xs].$n || 2 != this.s0.f[this.xs].$n.kind)) {
            if (3 == this.s0.type && 0 < this.s0.f[this.xs].xn && (this.ls = this.ls - this.s0.f[this.xs].xn,
            this.ls <= 0) && (this.ls = 0,
            this.xs = this.s0.f[this.xs].Gn),
            0 < this.bu && this.bu--,
            0 < this.ds && this.ds--,
            this.ds < 0 && this.ds++,
            0 < this.hn && this.hn--,
            0 < this.Au && this.Au--,
            0 < this.Qu && this.Qu--,
            this.xs != this.iu && (0 <= this.s0.f[this.xs].cr && PCo6(e, this.x, this.s0.f[this.xs].cr),
            this.waiting = 0),
            this.waiting++,
            0 <= this.s0.type && 0 == this.s0.f[this.xs].state && this.y < 0 && (this.xs = 212),
            1001 != this.s0.f[this.xs].state || 0 != this.Eh || 1 != this.s0.type && 4 != this.s0.type && 6 != this.s0.type || (0 == this.Os && (this.Os = -1),
            this.xs = 0),
            2 == this.s0.type && 2e3 == this.s0.f[this.xs].state && 0 == this.y && this.Gs < .1 && -.1 < this.Gs && (this.xs = 20),
            14 == this.s0.f[this.xs].state && this.ls <= 0) {
                if (-1 < this.tu)
                    for (let t = 0; t < T7ES._e; t++)
                        if (T7ES.s0[t].id == this.tu) {
                            this.s0 = T7ES.s0[t],
                            this.tu = -1;
                            break
                        }
                if (0 <= this.parent || 5 == this.group || 20 <= this.index)
                    this.ds <= 0 && (this.ds = 30);
                else if (0 == this.mu.$s && this.mu.ra && 0 < this.mu.ss) {
                    var o = 0 == this.group ? this.group + 10 : this.group;
                    let s = this.mu.Va.get(o);
                    if (null != s && 0 < s)
                        if (0 == this.bu) {
                            if ((s -= this.s0.Ho) <= 0)
                                for (let t = s = 0; t < this.mu.Zs; t++)
                                    this.mu.Ke[t] && this.mu.ts[t].group == o && 0 < this.mu.ts[t].ls && 0 == this.mu.ts[t].s0.type && 300 != this.mu.ts[t].s0.id && (this.mu.ts[t].ls = 0,
                                    this.mu.ts[t].os = 0);
                            this.mu.Va.set(o, s),
                            this.mu.ka.set(o, 60),
                            0 < s && (this.ds = 61,
                            this.bu = 46)
                        } else if (1 == this.bu) {
                            if (this.Eu.push(this.s0),
                            this.gf < this.Eu.length && (this.gf = this.Eu.length),
                            this.Ma) {
                                var a = []
                                  , h = [];
                                for (let s = 0; s < 20; s++)
                                    if (s != i && this.mu.Ke[s]) {
                                        for (let t = 0; t < this.mu.ts[s].Eu.length; t++)
                                            a.includes(this.mu.ts[s].Eu[t]) || a.push(this.mu.ts[s].Eu[t]);
                                        a.includes(this.mu.ts[s].s0) || a.push(this.mu.ts[s].s0)
                                    }
                                for (let t = a.length - 1; 0 < t; t--) {
                                    var n = e.ye(453, t + 1)
                                      , r = a[t];
                                    a[t] = a[n],
                                    a[n] = r
                                }
                                h.push(this.s0);
                                for (let t = this.Eu.length - 1; 0 <= t; t--)
                                    h.includes(this.Eu[t]) || h.push(this.Eu[t]);
                                var l = [];
                                for (let t = 1; t < T7ES._e; t++)
                                    0 == T7ES.s0[t].type && 0 == e.De && T7ES.s0[t].id < 30 && l.push(T7ES.s0[t]);
                                var u = new Set(a)
                                  , f = new Set(h);
                                let t = 0
                                  , s = !1;
                                for (; !s && 0 < l.length; ) {
                                    for (; t < 200; ) {
                                        var d = l[Math.floor(e.ye(444, l.length))];
                                        if (!u.has(d) && !f.has(d)) {
                                            this.s0 = d,
                                            s = !0;
                                            break
                                        }
                                        t++
                                    }
                                    if (s)
                                        break;
                                    if (0 < a.length)
                                        for (let t = 0; t < 4 && 0 < a.length; t++)
                                            u.delete(a.pop());
                                    else
                                        0 < h.length ? f.delete(h.pop()) : (this.s0 = l[Math.floor(e.ye(444, l.length))],
                                        s = !0);
                                    t = 0
                                }
                            }
                            var c = this.s0.Ho;
                            let t = 100 * this.mu.Va.get(o) / c;
                            100 < t && (t = 100),
                            this.ns = Math.floor(500 * t / 100),
                            this.rs = Math.floor(500 * t / 100),
                            this.ls = Math.floor(500 * t / 100),
                            this.os = Math.floor(200 * t / 100),
                            this.bu = 0
                        }
                }
                this.waiting = 0
            }
            if (2e3 == this.s0.f[this.xs].state && (0 < this.Gs ? this.Ws = 0 : this.Ws = 1),
            this.waiting > this.s0.f[this.xs].wait && (this.waiting = 0) != this.s0.f[this.xs].next) {
                if (this.xs = this.s0.f[this.xs].next,
                this.xs < 0 && (this.Ws = 1 - this.Ws,
                this.xs = -this.xs),
                this.Mf = 0,
                999 == this.xs && (0 == this.y || 0 != this.s0.type ? this.xs = 0 : (this.Mf = 1,
                this.xs = 212)),
                this.xs < 0 || this.xs >= TIJj.Qr)
                    return;
                14 == this.s0.f[this.iu].state && 13 != this.s0.f[this.xs].state && this.mu && (5 != this.group && 0 == this.Mo || 2 != this.mu.ve) && (1 != this.mu.$s && 4 != this.mu.$s || 5 != this.group && 0 == this.Mo || 3 != parseInt(this.s0.id / 10) || 38 == this.s0.id || i < 18) && (this.ds = 15),
                212 == this.xs && 0 == this.Mf && (this.Os = this.s0.Lr,
                0 < this.right && 0 == this.left ? this.Gs = this.s0.Br : 0 < this.left && 0 == this.right && (this.Gs = -this.s0.Br),
                0 < this.de && 0 == this.R0 ? this.zs = -this.s0.Mr : 0 == this.de && 0 < this.R0 && (this.zs = this.s0.Mr)),
                this.xs < TIJj.Qr && 0 <= this.s0.f[this.xs].cr && PCo6(e, this.x, this.s0.f[this.xs].cr),
                0 <= this.xs && this.xs < TIJj.Qr && this.s0.f[this.xs].os < 0 && 0 != e.Cs && (this.os >= -this.s0.f[this.xs].os || 0 == this.s0.f[this.xs].Gn ? this.os > -this.s0.f[this.xs].os ? (this.os += this.s0.f[this.xs].os,
                this._f -= this.s0.f[this.xs].os) : (this.os += this.s0.f[this.xs].os,
                this.os = 0) : this.xs = this.s0.f[this.xs].Gn,
                0 < this.s0.f[this.xs].Gn) && (0 < this.left && 0 == this.right && 0 == this.y && 0 == this.Ws && (this.xs = this.s0.f[this.xs].Gn),
                0 == this.left) && 0 < this.right && 0 == this.y && 1 == this.Ws && (this.xs = this.s0.f[this.xs].Gn)
            }
            110 != this.xs && 114 != this.xs || (this.xu = 3),
            202 == this.xs && (this.ds = 20),
            this.iu = this.xs
        }
    }
    Vf(t) {
        if (0 != this.Cu)
            0 < this.Cu && this.Cu--,
            this.Cu < 0 && this.Cu++;
        else if (!(this.Eh < 0 || this.s0.f[this.xs].$n && 2 == this.s0.f[this.xs].$n.kind)) {
            if (0 < this.Gs && 1 == this.nh || this.Gs < 0 && 1 == this.uh || (this.fs += this.Gs),
            4 != this.s0.type && 120 != this.s0.id || (this.fs += .2 * this.Gs),
            101 == this.s0.id && (this.fs -= .2 * this.Gs),
            0 < this.zs && 1 == this.Bh || this.zs < 0 && 1 == this.Lh || (this.gs += this.zs),
            this.nh = 0,
            this.uh = 0,
            this.Lh = 0,
            this.Bh = 0,
            3 == this.s0.type && 0 < this.s0.f[this.xs].Yh && (this.gs += this.s0.f[this.xs].Yh - 50),
            0 <= this.y && (1e-4 < this.Gs && (this.Gs -= this.fu,
            this.Gs < 1e-4) && (this.Gs = 0),
            this.Gs < -1e-4 && (this.Gs += this.fu,
            1e-4 < this.Gs) && (this.Gs = 0),
            1e-4 < this.zs && (this.zs -= this.fu,
            this.zs < 1e-4) && (this.zs = 0),
            this.zs < -1e-4) && (this.zs += this.fu,
            1e-4 < this.zs) && (this.zs = 0),
            4 != this.s0.type && 6 != this.s0.type || 1e3 != this.s0.f[this.xs].state || !(9 < this.Gs || this.Gs < -9) || (this.xs = 40),
            0 <= this.y && 0 == this.Os && 0 == this.s0.type && 0 == this.s0.f[this.xs].next && (4 == this.s0.f[this.xs].state || 5 == this.s0.f[this.xs].state) && (this.xs = 215),
            this.ps += this.Os,
            this.ps < -1e-4)
                3 != this.s0.type && (6 == this.s0.type ? this.Os += this.gu / 1.5 : 4 == this.s0.type ? this.Os += this.gu / 2 : 1002 == this.s0.f[this.xs].state && 124 == this.s0.id ? this.Os += this.gu / 10 : 1002 == this.s0.f[this.xs].state && 120 == this.s0.id ? this.Os += this.gu / 4 : 1002 == this.s0.f[this.xs].state && 101 == this.s0.id ? this.Os += this.gu / 1.5 : 1002 == this.s0.f[this.xs].state ? this.Os += this.gu / 3 : this.Os += this.gu),
                0 == this.s0.type && (12 == this.s0.f[this.xs].state && (this.xs < 185 ? (this.Os < -8 ? this.xs = 180 : this.Os < 1 ? this.xs = 181 : this.Os < 8 ? this.xs = 182 : this.xs = 183,
                this.lf < 0 && (12 <= this.Os || t.Zl < 6 ? this.xs = 181 : this.xs = 182)) : this.xs < 191 && 185 < this.xs && (this.Os < -8 ? this.xs = 186 : this.Os < 1 ? this.xs = 187 : this.Os < 8 ? this.xs = 188 : this.xs = 189)),
                18 == this.s0.f[this.xs].state) && this.xs < 205 && 1 < this.Os && (this.xs = 205);
            else if (null == this.s0.f[this.xs].$n || 2 != this.s0.f[this.xs].$n.kind)
                if (0 == this.s0.type) {
                    if (1e-4 < this.ps && 1e-4 < this.Os && 13 == this.s0.f[this.xs].state && (17 < this.Os || 9 < this.Gs || this.Gs < -9 ? (0 == t.wo && (0 == this.yo ? this.ls = this.ls - 10 : this.ls = this.ls - 1e3 / this.yo),
                    this.ps = 0,
                    this.Os = -3.5,
                    7 < this.Gs && (this.Gs = 7),
                    this.Gs < -7 && (this.Gs = -7),
                    this.xs = 185) : (this.ps = 0,
                    this.Os = 0,
                    this.Gs /= 3)),
                    0 < this.ps && 0 == this.Os && 212 == this.xs || 1e-4 < this.ps && 1e-4 < this.Os && 12 != this.s0.f[this.xs].state && 18 != this.s0.f[this.xs].state)
                        this.ps = 0,
                        this.Os = 0,
                        this.Gs /= 3,
                        100 == this.s0.f[this.xs].state ? this.xs = 94 : 212 == this.xs || 6 == this.s0.f[this.xs].state ? this.xs = 215 : this.xs = 219,
                        this.waiting = 0;
                    else if (1e-4 < this.ps && 1e-4 < this.Os && (12 == this.s0.f[this.xs].state || 18 == this.s0.f[this.xs].state)) {
                        if (PCo6(t, this.x, 6),
                        0 != this.lf) {
                            if (0 == t.wo) {
                                this.lf < 0 && (this.lf = -this.lf);
                                let t = this.lf;
                                0 < this.yo && (t = 100 * t / this.yo),
                                this.ls = this.ls - t,
                                this.rs = this.rs - t,
                                this.df += this.lf
                            }
                            this.lf = 0
                        }
                        11 < this.Os || 9 < this.Gs || this.Gs < -9 || 18 == this.s0.f[this.xs].state ? (this.ps = 0,
                        this.Os = -3.5,
                        7 < this.Gs && (this.Gs = 7),
                        this.Gs < -7 && (this.Gs = -7),
                        this.xs < 186 || 18 == this.s0.f[this.xs].state ? this.xs = 185 : this.xs = 191) : (this.ps = 0,
                        this.Os = 0,
                        this.Gs /= 3,
                        this.xs < 186 ? this.xs = 230 : this.xs = 231,
                        this.waiting = 0)
                    }
                } else
                    1 == this.s0.type ? 1e-4 < this.ps && 1e-4 < this.Os && (this.rf = this.rf - this.s0.Ir,
                    this.ps = 0,
                    9.9 < this.Os && 1002 == this.s0.f[this.xs].state ? (this.xs = 7,
                    this.Ws = 1 - this.Ws,
                    this.Os = -8,
                    this.Gs /= 2,
                    -1 < this.s0.Yr && PCo6(t, this.x, this.s0.Yr)) : (1002 == this.s0.f[this.xs].state ? (this.Os = 0,
                    this.xs = 70) : (this.Os = 0,
                    this.xs = 60),
                    this.waiting = 0,
                    this.Gs /= 2)) : 4 == this.s0.type || 6 == this.s0.type ? 1e-4 < this.ps && 1e-4 < this.Os && (this.rf = this.rf - this.s0.Ir,
                    6 == this.s0.type && this.ls <= 0 && (this.rf = -1),
                    this.ps = 0,
                    !(8.5 < this.Os || this.Gs < -10 || 10 < this.Gs) || 1002 != this.s0.f[this.xs].state && 1e3 != this.s0.f[this.xs].state ? (1002 == this.s0.f[this.xs].state ? (this.Os = 0,
                    this.xs = 70) : (this.Os = 0,
                    this.xs = 60),
                    this.waiting = 0,
                    this.Gs *= .7) : (this.xs = 0,
                    this.Os *= -.7,
                    this.Os < -10 && (this.Os = -10),
                    this.Gs *= .7,
                    -1 < this.s0.Yr && PCo6(t, this.x, this.s0.Yr))) : 2 == this.s0.type ? 1e-4 < this.ps && (this.rf = this.rf - 1,
                    this.ps = 0,
                    9 < this.Os ? (-1 < this.s0.Yr && PCo6(t, this.x, this.s0.Yr),
                    this.Ws = 1 - this.Ws,
                    this.Os = -5) : (this.rf = this.rf - this.s0.Ir,
                    this.rf < 0 && (this.rf = 0),
                    this.Os = 0,
                    this.xs = 20,
                    this.waiting = 0),
                    this.Gs /= 2) : 999 == this.s0.id && -1e-4 < this.ps && (this.ps = 0,
                    this.Os = 0,
                    this.Gs = 0,
                    this.xs = 101,
                    this.waiting = 0);
            this.x = Math.trunc(this.fs),
            this.y = Math.trunc(this.ps),
            this.z = Math.trunc(this.gs),
            12 != this.s0.f[this.xs].state && (this.lf = 0)
        }
    }
    Tf(t) {
        this.Zu = !1,
        0 < this.Gu && this.Gu--,
        0 < this.Ou && this.Ou--,
        0 < this.zu && this.zu--,
        0 < this.Wu && this.Wu--,
        0 < this.Uu && this.Uu--,
        0 < this.Yu && this.Yu--,
        0 < this.Nu && this.Nu--,
        0 < this.Ru && this.Ru--,
        0 < this.xu && this.xu--,
        0 == this.sh && 0 < this.right && (this.Gu = 5,
        this.kf(6)),
        0 == this.eh && 0 < this.left && (this.Ou = 5,
        this.kf(4)),
        0 == this.th && 0 < this.de && (this.zu = 5,
        this.kf(8)),
        0 == this.ih && 0 < this.R0 && (this.Wu = 5,
        this.kf(2)),
        0 == this.oh && 0 < this.ah && (this.Ru = 5,
        this.kf(9)),
        0 == this.hh && 0 < this.fe && (this.Uu = 5,
        this.Yu = 5,
        this.kf(0)),
        0 == this.es && 0 < this.attack && (this.Nu = 5,
        this.kf(5)),
        this.If(t),
        this.Cf(t),
        this.Af(t),
        this.vf(t),
        this.Xf(t),
        this.Yf(t),
        this.Nf(t),
        this.Uf(t),
        this.Rf(t),
        null != this.s0.f[this.xs] && (0 != this.s0.f[this.xs].xn && this.Nu > this.Ru && this.Nu > this.Uu ? (this.xf(t, this.s0.f[this.xs].xn),
        this.Nu = 0) : 0 != this.s0.f[this.xs].Gn && this.Ru > this.Nu && this.Ru > this.Uu ? (this.xf(t, this.s0.f[this.xs].Gn),
        this.Ru = 0) : 0 != this.s0.f[this.xs].Yh && this.Uu > this.Nu && this.Uu > this.Ru && (this.xf(t, this.s0.f[this.xs].Yh),
        this.Uu = 0),
        110 == this.xs && 0 < this.right && (this.Ws = 0),
        110 == this.xs && 0 < this.left && (this.Ws = 1),
        301 == this.s0.f[this.xs].state ? (0 < this.de && 0 == this.R0 && 0 == this.y && (this.zs = -this.s0.pr),
        0 < this.R0 && 0 == this.de && 0 == this.y && (this.zs = this.s0.pr)) : 19 == this.s0.f[this.xs].state && (0 < this.de && 0 == this.R0 && 0 == this.y && (this.zs = -this.s0.pr),
        0 < this.R0) && 0 == this.de && 0 == this.y && (this.zs = this.s0.pr),
        2 == this.Eh || 0 != this.s0.f[this.xs].state && 1 != this.s0.f[this.xs].state || (0 < this.Su && this.Su--,
        this.Su < 0 && this.Su++,
        0 < this.right && 0 == this.left && 0 == this.y && (1 == this.Ws && (this.Su = 0),
        this.Ws = 0,
        this.pu = (this.pu + 1) % (6 * this.s0.dr),
        this.pu < 4 * this.s0.dr ? this.xs = Math.floor(this.pu / this.s0.dr) + 5 : this.xs = 11 - Math.floor(this.pu / this.s0.dr),
        this.Gs = +this.s0._r,
        !this.Zu) && (this.sh || (this.Su += 10),
        11 <= this.Su || 2 == this.right) && (this.xs = 9,
        this.pu = 0,
        this.Su = 0),
        0 == this.right && 0 < this.left && 0 == this.y && (0 == this.Ws && (this.Su = 0),
        this.Ws = 1,
        this.pu = (this.pu + 1) % (6 * this.s0.dr),
        this.pu < 4 * this.s0.dr ? this.xs = Math.floor(this.pu / this.s0.dr) + 5 : this.xs = 11 - Math.floor(this.pu / this.s0.dr),
        this.Gs = -this.s0._r,
        !this.Zu) && (0 == this.eh && (this.Su -= 10),
        this.Su <= -11 || 2 == this.left) && (this.xs = 9,
        this.pu = 0,
        this.Su = 0),
        0 < this.de && 0 == this.R0 && 0 == this.y && ((0 == this.left && 0 == this.right || 0 < this.left && 0 < this.right) && (this.pu = (this.pu + 1) % (6 * this.s0.dr),
        this.pu < 4 * this.s0.dr ? this.xs = Math.floor(this.pu / this.s0.dr) + 5 : this.xs = 11 - Math.floor(this.pu / this.s0.dr)),
        this.zs = -this.s0.ur,
        this.Gs /= 1.4),
        0 < this.R0 && 0 == this.de && 0 == this.y && ((0 == this.left && 0 == this.right || 0 < this.left && 0 < this.right) && (this.pu = (this.pu + 1) % (6 * this.s0.dr),
        this.pu < 4 * this.s0.dr ? this.xs = Math.floor(this.pu / this.s0.dr) + 5 : this.xs = 11 - Math.floor(this.pu / this.s0.dr)),
        this.zs = +this.s0.ur,
        this.Gs /= 1.4),
        0 < this.fe && 0 < this.Uu && !this.Zu && (9 == this.xs ? (PCo6(t, this.x, 7),
        this.Su = 0,
        this.xs = 213,
        this.Zu = !0,
        this.Uu = 0,
        this.Gs = this.s0.wr * (-2 * this.Ws + 1),
        this.Os = this.s0.yr,
        0 < this.de && 0 == this.R0 ? this.zs = -this.s0.Dr : 0 == this.de && 0 < this.R0 && (this.zs = this.s0.Dr)) : (this.Su = 0,
        this.waiting = 0,
        this.Su = 0,
        this.xs = 210,
        this.Zu = !0,
        this.Uu = 0)),
        0 < this.attack && 0 < this.Nu && !this.Zu && (9 == this.xs ? 0 == this.Eh ? (0 != t.Cs && 0 < this.s0.f[85].os && (this.os = this.os - this.s0.f[85].os,
        this._f += this.s0.f[85].os,
        this.os <= 0) && (this.os = 0),
        this.xs = 85,
        this.Zu = !0,
        this.Nu = 0) : this.Eh % 100 == 1 ? (0 < this.left || 0 < this.right || 0 < this.de || 0 < this.R0 ? this.xs = 45 : this.xs = 35,
        this.Zu = !0,
        this.Nu = 0) : 4 == this.Eh ? (this.xs = 45,
        this.Zu = !0,
        this.Nu = 0) : 6 == this.Eh && (0 < this.left || 0 < this.right || 0 < this.de || 0 < this.R0 ? this.xs = 45 : this.xs = 55,
        this.Zu = !0,
        this.Nu = 0) : (this.Su = 0,
        (this.waiting = 0) == this.Eh ? 0 < this.Qu ? (this.xs = 70,
        this.Zu = !0,
        this.Nu = 0) : (this.Ff = 5 * t.ye(130, 2) + 60,
        this.xs = this.Ff,
        this.Zu = !0,
        (this.Nu = 0) != t.Cs && 0 < this.s0.f[this.Ff].os && (this.os > this.s0.f[this.Ff].os ? (this.os = this.os - this.s0.f[this.Ff].os,
        this._f += this.s0.f[this.Ff].os) : (this._f += this.os,
        this.os = 0))) : this.Eh % 100 == 1 ? (101 == this.Eh ? 0 == this.right && 0 == this.left && 0 == this.de && 0 == this.R0 ? this.xs = 5 * t.ye(131, 2) + 20 : this.xs = 45 : this.xs = 5 * t.ye(132, 2) + 20,
        this.Zu = !0,
        this.Nu = 0) : 4 == this.Eh ? (this.xs = 45,
        this.Zu = !0,
        this.Nu = 0) : 6 == this.Eh && (this.xs = 55,
        this.Zu = !0,
        this.Nu = 0))),
        0 < this.ah && 0 == this.xu && 0 < this.Ru && !this.Zu && (9 == this.xs ? this.xs = 102 : (this.Su = 0,
        this.waiting = 0,
        this.xs = 110),
        this.Zu = !0)),
        2 != this.Eh || 0 != this.s0.f[this.xs].state && 1 != this.s0.f[this.xs].state || (0 < this.Su && this.Su--,
        this.Su < 0 && this.Su++,
        this.xs < 12 && (this.xs = 12),
        0 < this.right && 0 == this.left && 0 == this.y && (1 == this.Ws && (this.Su = 0),
        this.Ws = 0,
        this.pu = (this.pu + 1) % (6 * this.s0.dr),
        this.pu < 4 * this.s0.dr ? this.xs = Math.floor(this.pu / this.s0.dr) + 5 + 7 : this.xs = 11 - Math.floor(this.pu / this.s0.dr) + 7,
        this.Gs = +this.s0.Sr,
        this.sh || (this.Su += 10),
        11 <= this.Su || 2 == this.right) && (this.xs = 16,
        this.pu = 0,
        this.Su = 0),
        0 == this.right && 0 < this.left && 0 == this.y && (0 == this.Ws && (this.Su = 0),
        this.Ws = 1,
        this.pu = (this.pu + 1) % (6 * this.s0.dr),
        this.pu < 4 * this.s0.dr ? this.xs = Math.floor(this.pu / this.s0.dr) + 5 + 7 : this.xs = 11 - Math.floor(this.pu / this.s0.dr) + 7,
        this.Gs = -this.s0.Sr,
        0 == this.eh && (this.Su -= 10),
        this.Su <= -11 || 2 == this.left) && (this.xs = 16,
        this.pu = 0,
        this.Su = 0),
        0 < this.de && 0 == this.R0 && 0 == this.y && ((0 == this.left && 0 == this.right || 0 < this.left && 0 < this.right) && (this.pu = (this.pu + 1) % (6 * this.s0.dr),
        this.pu < 4 * this.s0.dr ? this.xs = Math.floor(this.pu / this.s0.dr) + 5 + 7 : this.xs = 11 - Math.floor(this.pu / this.s0.dr) + 7),
        this.zs = -this.s0.br,
        this.Gs /= 1.4),
        0 < this.R0 && 0 == this.de && 0 == this.y && ((0 == this.left && 0 == this.right || 0 < this.left && 0 < this.right) && (this.pu = (this.pu + 1) % (6 * this.s0.dr),
        this.pu < 4 * this.s0.dr ? this.xs = Math.floor(this.pu / this.s0.dr) + 5 + 7 : this.xs = 11 - Math.floor(this.pu / this.s0.dr) + 7),
        this.zs = +this.s0.br,
        this.Gs /= 1.4),
        0 < this.attack && 0 < this.Nu && (this.Su = 0,
        this.waiting = 0,
        this.xs = 50,
        this.Nu = 0)),
        4 == this.s0.f[this.xs].state && this.y < 0 && (0 < this.right && 0 == this.left && (this.Ws = 0),
        0 < this.left && 0 == this.right && (this.Ws = 1),
        0 < this.attack) && (0 == this.Eh ? (this.waiting = 0,
        this.xs = 80,
        0 != t.Cs && 0 < this.s0.f[80].os && (this.os > this.s0.f[80].os ? (this.os = this.os - this.s0.f[80].os,
        this._f += this.s0.f[80].os) : (this._f += this.os,
        this.os = 0))) : this.Eh % 100 == 1 ? (this.waiting = 0) < this.left || 0 < this.right || 0 < this.de || 0 < this.R0 ? this.xs = 52 : this.xs = 30 : 4 != this.Eh && 6 != this.Eh || (this.xs = 52)),
        2 == this.s0.f[this.xs].state && 2 != this.Eh && (this.waiting = 0,
        this.pu = (this.pu + 1) % (4 * this.s0.gr),
        this.pu < 3 * this.s0.gr ? this.xs = Math.floor(this.pu / this.s0.gr) + 9 : this.xs = 10,
        0 == this.Ws && (this.Gs = this.s0.mr,
        0 < this.left) && (this.xs = 218),
        1 == this.Ws && (this.Gs = -this.s0.mr,
        0 < this.right) && (this.xs = 218),
        0 < this.de && 0 == this.R0 && 0 == this.y && (this.zs = -this.s0.pr,
        this.Gs /= 1.2),
        0 == this.de && 0 < this.R0 && 0 == this.y && (this.zs = +this.s0.pr,
        this.Gs /= 1.2),
        0 < this.fe && 0 < this.Uu && !this.Zu && (PCo6(t, this.x, 7),
        this.Su = 0,
        this.xs = 213,
        this.Gs = this.s0.wr * (-2 * this.Ws + 1),
        this.Os = this.s0.yr,
        0 < this.de && 0 == this.R0 ? this.zs = -this.s0.Dr : 0 == this.de && 0 < this.R0 && (this.zs = this.s0.Dr),
        this.Zu = !0,
        this.Uu = 0),
        0 < this.attack && 0 < this.Nu && !this.Zu && (0 == this.Eh ? (0 != t.Cs && 0 < this.s0.f[85].os && (this.os = this.os - this.s0.f[85].os,
        this._f += this.s0.f[85].os,
        this.os <= 0) && (this.os = 0),
        this.xs = 85,
        this.Zu = !0,
        this.Nu = 0) : this.Eh % 100 == 1 ? 0 < this.left || 0 < this.right || 0 < this.de || 0 < this.R0 ? this.xs = 45 : this.xs = 35 : 4 == this.Eh ? this.xs = 45 : 6 == this.Eh && (0 < this.left || 0 < this.right || 0 < this.de || 0 < this.R0 ? this.xs = 45 : this.xs = 55),
        this.Zu = !0,
        this.Nu = 0),
        0 < this.ah) && 0 < this.Ru && !this.Zu && (this.xs = 102,
        this.Zu = !0),
        2 == this.s0.f[this.xs].state && 2 == this.Eh && (this.waiting = 0,
        this.pu = (this.pu + 1) % (4 * this.s0.gr),
        this.pu < 3 * this.s0.gr ? this.xs = Math.floor(this.pu / this.s0.gr) + 16 : this.xs = 17,
        0 == this.Ws && (this.Gs = this.s0.Er,
        0 < this.left) && (this.xs = 19),
        1 == this.Ws && (this.Gs = -this.s0.Er,
        0 < this.right) && (this.xs = 19),
        0 < this.de && 0 == this.R0 && 0 == this.y && (this.zs = -this.s0.Fr,
        this.Gs /= 1.2),
        0 == this.de && 0 < this.R0 && 0 == this.y && (this.zs = +this.s0.Fr,
        this.Gs /= 1.2),
        0 < this.attack) && 0 < this.Nu && (this.xs = 50),
        215 == this.xs && (0 < this.ah && 0 < this.Ru ? this.xs = 102 : (0 < this.fe && (0 < this.right || .001 < this.Gs) && 0 < this.Uu && (PCo6(t, this.x, 7),
        this.Su = 0,
        this.xs = 213 + this.Ws,
        this.Gs = this.s0.wr,
        this.Os = this.s0.yr),
        0 < this.fe && (0 < this.left || this.Gs < -.001) && 0 < this.Uu && (PCo6(t, this.x, 7),
        this.Su = 0,
        this.xs = 214 - this.Ws,
        this.Gs = -this.s0.wr,
        this.Os = this.s0.yr)),
        0 < this.de && 0 == this.R0 ? this.zs = -this.s0.Dr : 0 == this.de && 0 < this.R0 && (this.zs = this.s0.Dr)),
        (182 == this.xs || 188 == this.xs) && 0 <= this.lf && 0 < this.fe && 0 < this.Uu && 0 < this.ls && (0 == this.Ws && this.Gs <= 0 || 1 == this.Ws && 0 <= this.Gs ? this.xs = 100 : this.xs = 108,
        this.waiting = 0,
        this.Os > this.s0.Vr && (this.Os = this.s0.Vr),
        this.Gs < 1 && -1 < this.Gs ? 1 == this.Ws ? this.Gs = this.s0.Tr : this.Gs = -this.s0.Tr : 0 < this.Gs ? this.Gs = this.s0.Tr : this.Gs = -this.s0.Tr),
        5 == this.s0.f[this.xs].state && (0 < this.right && 0 == this.left && (this.Ws = 0),
        0 == this.Ws && 217 != this.xs && this.Gs < 0 && (this.xs = 214),
        0 == this.Ws && 216 != this.xs && 0 < this.Gs && (this.xs = 213),
        0 < this.left && 0 == this.right && (this.Ws = 1),
        1 == this.Ws && 217 != this.xs && 0 < this.Gs && (this.xs = 214),
        1 == this.Ws && 216 != this.xs && this.Gs < 0 && (this.xs = 213),
        0 < this.Gs && 0 == this.Ws || this.Gs < 0 && 1 == this.Ws) && 0 < this.attack && (0 == this.Eh ? (0 != t.Cs && 0 < this.s0.f[90].os && (this.os = this.os - this.s0.f[90].os,
        this._f += this.s0.f[90].os,
        this.os <= 0) && (this.os = 0),
        this.xs = 90) : this.Eh % 100 != 1 && (4 != this.Eh && 6 != this.Eh || !(0 < this.left || 0 < this.right || 0 < this.de || 0 < this.R0)) || (4 == this.Eh || 6 == this.Eh ? this.xs = 52 : this.xs = 40,
        --this.Os,
        this.waiting = 0)),
        500 < this.s0.f[this.xs].en ? this.Gs = this.s0.f[this.xs].en - 550 : (0 < this.s0.f[this.xs].en && this.s0.f[this.xs].en > this.Gs && 0 == this.Ws && (this.Gs = this.s0.f[this.xs].en),
        0 < this.s0.f[this.xs].en && this.s0.f[this.xs].en > -this.Gs && 1 == this.Ws && (this.Gs = -this.s0.f[this.xs].en),
        this.s0.f[this.xs].en < 0 && this.s0.f[this.xs].en < this.Gs && 0 == this.Ws && (this.Gs = this.s0.f[this.xs].en),
        this.s0.f[this.xs].en < 0 && this.s0.f[this.xs].en < -this.Gs && 1 == this.Ws && (this.Gs = -this.s0.f[this.xs].en)),
        0 != this.s0.f[this.xs].sn && 0 == this.Cu && (500 < this.s0.f[this.xs].sn ? this.Os = this.s0.f[this.xs].sn - 550 : this.Os += this.s0.f[this.xs].sn),
        0 != this.s0.f[this.xs].Xn) && (500 < this.s0.f[this.xs].Xn ? this.zs = this.s0.f[this.xs].Xn - 550 : (0 < this.de && this.zu >= this.Wu && (this.zs = -this.s0.f[this.xs].Xn),
        0 < this.R0 && this.zu <= this.Wu && (this.zs = this.s0.f[this.xs].Xn)))
    }
    Gf(t, s) {
        if (0 == s) {
            if (5 == this.Nu || 5 == this.Uu || 5 == this.Ru || 5 == this.Ou || 5 == this.zu || 5 == this.Wu || 5 == this.Gu)
                return !0
        } else if (1 == s)
            if ("U" == t) {
                if (5 == this.Nu || 5 == this.Uu || 5 == this.Ru || 5 == this.Ou || 5 == this.Wu || 5 == this.Gu)
                    return !0
            } else if ("D" == t) {
                if (5 == this.Nu || 5 == this.Uu || 5 == this.Ru || 5 == this.Ou || 5 == this.zu || 5 == this.Gu)
                    return !0
            } else if ("L" == t) {
                if (5 == this.Nu || 5 == this.Uu || 5 == this.Ru || 5 == this.zu || 5 == this.Wu || 5 == this.Gu)
                    return !0
            } else if ("R" == t) {
                if (5 == this.Nu || 5 == this.Uu || 5 == this.Ru || 5 == this.Ou || 5 == this.zu || 5 == this.Wu)
                    return !0
            } else if ("d" == t) {
                if (5 == this.Nu || 5 == this.Uu || 5 == this.Ou || 5 == this.zu || 5 == this.Wu || 5 == this.Gu)
                    return !0
            } else if ("j" == t) {
                if (5 == this.Nu || 5 == this.Ru || 5 == this.Ou || 5 == this.zu || 5 == this.Wu || 5 == this.Gu)
                    return !0
            } else if ("a" == t && (5 == this.Uu || 5 == this.Ru || 5 == this.Ou || 5 == this.zu || 5 == this.Wu || 5 == this.Gu))
                return !0;
        return !1
    }
    Of(t) {
        if (this.Nu > t || this.Uu > t || this.Ru > t || this.zu > t || this.Wu > t || this.Ou > t || this.Gu > t)
            return !0
    }
    If(t) {
        let s = 0;
        0 == this.Ah && 5 == this.Ru && (this.Ah = 1,
        s = 1),
        1 == this.Ah && (5 == this.Gu && this.Ou < 5 ? (this.Ah = 2,
        s = 2) : this.Of(this.Ru) && (this.Ah = 0)),
        2 == this.Ah && (2 == this.right || 5 == this.Gu && 2 != s ? this.Ah = 0 : 5 == this.Nu && this.Uu < 5 ? (this.Ah = 3,
        s = 3) : this.Of(this.Gu) && (this.Ah = 0)),
        3 == this.Ah && (0 != this.s0.f[this.xs].Rs && 2 != this.Eh ? (this.xf(t, this.s0.f[this.xs].Rs),
        this.Ws = 0,
        this.Ah = 0,
        this.Ah = 0,
        this.Xh = 0,
        this.Th = 0,
        this.Ih = 0,
        this.wh = 0,
        this.Dh = 0,
        this.kh = 0,
        this.Vh = 0,
        this.Ch = 0) : this.Of(this.Nu) && (this.Ah = 0))
    }
    Cf(t) {
        let s = 0;
        0 == this.Xh && 5 == this.Ru && (this.Xh = 1,
        s = 1),
        1 == this.Xh && (5 == this.Ou && this.Gu < 5 ? (this.Xh = 2,
        s = 2) : this.Of(this.Ru) && (this.Xh = 0)),
        2 == this.Xh && (2 == this.left || 5 == this.Ou && 2 != s ? this.Xh = 0 : 5 == this.Nu && this.Uu < 5 ? (this.Xh = 3,
        s = 3) : this.Of(this.Ou) && (this.Xh = 0)),
        3 == this.Xh && (0 != this.s0.f[this.xs].Rs && 2 != this.Eh ? (this.xf(t, this.s0.f[this.xs].Rs),
        this.Ws = 1,
        this.Xh = 0,
        this.Ah = 0,
        this.Xh = 0,
        this.Th = 0,
        this.Ih = 0,
        this.wh = 0,
        this.Dh = 0,
        this.kh = 0,
        this.Vh = 0,
        this.Ch = 0) : this.Of(this.Nu) && (this.Xh = 0))
    }
    Af(t) {
        let s = 0;
        0 == this.Th && 5 == this.Ru && (this.Th = 1,
        s = 1),
        1 == this.Th && (5 == this.zu && this.Wu < 5 ? (this.Th = 2,
        s = 2) : this.Of(this.Ru) && (this.Th = 0)),
        2 == this.Th && (2 == this.de || 5 == this.zu && 2 != s ? this.Th = 0 : 5 == this.Nu && this.Uu < 5 ? (this.Th = 3,
        s = 3) : this.Of(this.zu) && (this.Th = 0)),
        3 == this.Th && (0 != this.s0.f[this.xs].On && 2 != this.Eh ? (this.xf(t, this.s0.f[this.xs].On),
        this.Th = 0,
        this.Ah = 0,
        this.Xh = 0,
        this.Th = 0,
        this.Ih = 0,
        this.wh = 0,
        this.Dh = 0,
        this.kh = 0,
        this.Vh = 0,
        this.Ch = 0) : this.Of(this.Nu) && (this.Th = 0))
    }
    vf(t) {
        let s = 0;
        0 == this.Ih && 5 == this.Ru && (this.Ih = 1,
        s = 1),
        1 == this.Ih && (5 == this.Wu && this.zu < 5 ? (this.Ih = 2,
        s = 2) : this.Of(this.Ru) && (this.Ih = 0)),
        2 == this.Ih && (2 == this.R0 || 5 == this.Wu && 2 != s ? this.Ih = 0 : 5 == this.Nu && this.Uu < 5 ? (this.Ih = 3,
        s = 3) : this.Of(this.Wu) && (this.Ih = 0)),
        3 == this.Ih && (0 != this.s0.f[this.xs].zn && 2 != this.Eh ? (this.xf(t, this.s0.f[this.xs].zn),
        this.Ih = 0,
        this.Ah = 0,
        this.Xh = 0,
        this.Th = 0,
        this.Ih = 0,
        this.wh = 0,
        this.Dh = 0,
        this.kh = 0,
        this.Vh = 0,
        this.Ch = 0) : this.Of(this.Nu) && (this.Ih = 0))
    }
    Xf(t) {
        let s = 0;
        0 == this.wh && 5 == this.Ru && (this.wh = 1,
        s = 1),
        1 == this.wh && (5 == this.Gu && this.Ou < 5 ? (this.wh = 2,
        s = 2) : this.Of(this.Ru) && (this.wh = 0)),
        2 == this.wh && (2 == this.right || 5 == this.Gu && 2 != s ? this.wh = 0 : 5 == this.Uu && this.Nu < 5 ? (this.wh = 3,
        s = 3) : this.Of(this.Gu) && (this.wh = 0)),
        3 == this.wh && (0 != this.s0.f[this.xs].Wn && 2 != this.Eh ? (this.xf(t, this.s0.f[this.xs].Wn),
        this.Ws = 0,
        this.wh = 0,
        this.Ah = 0,
        this.Xh = 0,
        this.Th = 0,
        this.Ih = 0,
        this.wh = 0,
        this.Dh = 0,
        this.kh = 0,
        this.Vh = 0,
        this.Ch = 0) : this.Of(this.Uu) && (this.wh = 0))
    }
    Yf(t) {
        let s = 0;
        0 == this.Dh && 5 == this.Ru && (this.Dh = 1,
        s = 1),
        1 == this.Dh && (5 == this.Ou && this.Gu < 5 ? (this.Dh = 2,
        s = 2) : this.Of(this.Ru) && (this.Dh = 0)),
        2 == this.Dh && (2 == this.left || 5 == this.Ou && 2 != s ? this.Dh = 0 : 5 == this.Uu && this.Nu < 5 ? (this.Dh = 3,
        s = 3) : this.Of(this.Ou) && (this.Dh = 0)),
        3 == this.Dh && (0 != this.s0.f[this.xs].Wn && 2 != this.Eh ? (this.xf(t, this.s0.f[this.xs].Wn),
        this.Ws = 1,
        this.Dh = 0,
        this.Ah = 0,
        this.Xh = 0,
        this.Th = 0,
        this.Ih = 0,
        this.wh = 0,
        this.Dh = 0,
        this.kh = 0,
        this.Vh = 0,
        this.Ch = 0) : this.Of(this.Uu) && (this.Dh = 0))
    }
    Nf(t) {
        let s = 0;
        0 == this.kh && 5 == this.Ru && (this.kh = 1,
        s = 1),
        1 == this.kh && (5 == this.zu && this.Wu < 5 ? (this.kh = 2,
        s = 2) : this.Of(this.Ru) && (this.kh = 0)),
        2 == this.kh && (2 == this.de || 5 == this.zu && 2 != s ? this.kh = 0 : 5 == this.Uu && this.Nu < 5 ? (this.kh = 3,
        s = 3) : this.Of(this.zu) && (this.kh = 0)),
        3 == this.kh && (0 != this.s0.f[this.xs].Zn && 2 != this.Eh ? (this.xf(t, this.s0.f[this.xs].Zn),
        this.kh = 0,
        this.Ah = 0,
        this.Xh = 0,
        this.Th = 0,
        this.Ih = 0,
        this.wh = 0,
        this.Dh = 0,
        this.kh = 0,
        this.Vh = 0,
        this.Ch = 0) : this.Of(this.Uu) && (this.kh = 0))
    }
    Uf(t) {
        let s = 0;
        0 == this.Vh && 5 == this.Ru && (this.Vh = 1,
        s = 1),
        1 == this.Vh && (5 == this.Wu && this.zu < 5 ? (this.Vh = 2,
        s = 2) : this.Of(this.Ru) && (this.Vh = 0)),
        2 == this.Vh && (2 == this.R0 || 5 == this.Wu && 2 != s ? this.Vh = 0 : 5 == this.Uu && this.Nu < 5 ? (this.Vh = 3,
        s = 3) : this.Of(this.Wu) && (this.Vh = 0)),
        3 == this.Vh && (0 != this.s0.f[this.xs].Pn && 2 != this.Eh ? (this.xf(t, this.s0.f[this.xs].Pn),
        this.Vh = 0,
        this.Ah = 0,
        this.Xh = 0,
        this.Th = 0,
        this.Ih = 0,
        this.wh = 0,
        this.Dh = 0,
        this.kh = 0,
        this.Vh = 0,
        this.Ch = 0) : this.Of(this.Uu) && (this.Vh = 0))
    }
    Rf(t) {
        let s = 0;
        if (0 == this.Ch && 5 == this.Ru && (this.Ch = 1,
        s = 1),
        1 == this.Ch && (5 == this.Yu && this.zu < 5 && this.Wu < 5 && this.Ou < 5 && this.Gu < 5 ? (this.Ch = 2,
        s = 2) : this.Of(this.Ru) && (this.Ch = 0)),
        2 == this.Ch && (2 == this.fe || 5 == this.Yu && 2 != s ? this.Ch = 0 : 5 == this.Nu && this.zu < 5 && this.Wu < 5 && this.Ou < 5 && this.Gu < 5 ? (this.Ch = 3,
        s = 3) : this.Of(this.Yu) && (this.Ch = 0)),
        3 == this.Ch) {
            if (6 == this.s0.id && 300 == this.s0.f[this.xs].Jn) {
                if (150 <= this.ls)
                    return;
                if ((0 == t.$s || 2 == t.$s || 3 == t.$s) && !t.Ye)
                    return
            }
            0 != this.s0.f[this.xs].Jn && -1 == this.tu && 2 != this.Eh ? (this.xf(t, this.s0.f[this.xs].Jn),
            this.Ch = 0,
            this.Ah = 0,
            this.Xh = 0,
            this.Th = 0,
            this.Ih = 0,
            this.wh = 0,
            this.Dh = 0,
            this.kh = 0,
            this.Vh = 0,
            this.Ch = 0) : 1 == this.su ? (this.ou = 0,
            this.Ah = 0,
            this.Xh = 0,
            this.Th = 0,
            this.Ih = 0,
            this.wh = 0,
            this.Dh = 0,
            this.kh = 0,
            this.Vh = 0,
            this.Ch = 0) : this.Of(this.Nu) && (this.Ch = 0)
        }
    }
    xf(t, s) {
        var e;
        this.Zu || (this.Zu = !0,
        s < (this.Bf = 0) && (s = -s,
        this.Bf = 1),
        999 == s && (s = 0),
        e = Math.abs(this.s0.f[s].os),
        null != this.s0.f[s] && (0 == t.Cs ? (this.xs = s,
        this.Gu = 0,
        this.Ou = 0,
        this.zu = 0,
        this.Wu = 0,
        this.Ru = 0,
        this.Nu = 0,
        this.Uu = 0,
        this.Yu = 0) : (this.os >= e % 1e3 || this.s0.f[s].os < 0) && this.ls > 10 * Math.floor(e / 1e3) && (this.ls = this.ls - 10 * Math.floor(e / 1e3),
        this.os = this.os - e % 1e3,
        this.os < 0 && (this.os = 0),
        this.df += 10 * Math.floor(e / 1e3),
        this._f += e % 1e3,
        this.xs = s,
        1 == this.Bf && (this.Ws = 1 - this.Ws),
        this.Gu = 0,
        this.Ou = 0,
        this.zu = 0,
        this.Wu = 0,
        this.Ru = 0,
        this.Nu = 0,
        this.Uu = 0,
        this.Yu = 0)))
    }
    kf(t) {
        this.Ef[0] = this.Ef[1],
        this.Ef[1] = this.Ef[2],
        this.Ef[2] = this.Ef[3],
        this.Ef[3] = this.Ef[4],
        this.Ef[4] = t
    }
}