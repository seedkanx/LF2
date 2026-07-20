class Z9c1 {
}
class DY3O {
}
function L7ce(t) {
    let s, e, i, o;
    var a, h, n;
    let r, l, u;
    if (IAlU(t),
    20 == t.H0) {
        for (t.oe = 0,
        t.ae = 0,
        t.H0 = 21,
        s = 0; s < 8; s++)
            t.ne[s] = 1,
            t.re[s] = -1,
            t.le[s] = 0,
            t.ce[s] = s;
        NcPr()
    }
    if (21 <= t.H0) {
        if (t.H0 <= 23 ? (l = (ZcYj - 740) / 2,
        u = 106,
        t.Kt = l,
        t.$t = u,
        D.Dm9f(BLg_.s1[0], l, u, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[24], l + 20, u + 278, 0, 1 / BLg_.Mi)) : (l = (ZcYj - 794) / 2 - 51,
        u = 126,
        t.Kt = l,
        t.$t = u,
        D.Dm9f(BLg_.s1[9], l + 170, u, 0, 1 / BLg_.Mi)),
        t.oe < 8) {
            if (0 == t.ae) {
                if (0 < t.de && (t.re[t.oe] = -1,
                t.ne[t.oe] = 1),
                0 < t.right)
                    for (; ; ) {
                        if (t.re[t.oe]++,
                        t.ne[t.oe] = 0,
                        t.re[t.oe] >= T7ES._e) {
                            t.re[t.oe] = -1,
                            t.ne[t.oe] = 1;
                            break
                        }
                        if (t.ue(t.re[t.oe], -1))
                            break
                    }
                if (t.left)
                    for (; ; ) {
                        if (t.re[t.oe]--,
                        t.ne[t.oe] = 0,
                        -1 == t.re[t.oe]) {
                            t.ne[t.oe] = 1;
                            break
                        }
                        if (t.re[t.oe] < -1 && (t.re[t.oe] = T7ES._e - 1),
                        t.ue(t.re[t.oe], -1))
                            break
                    }
                t.attack ? (t.attack = !1,
                XYSz.D(0, 1),
                t.ae = 1) : (0 < t.fe || t.ge) && (t.fe = 0,
                t.ge = !1,
                XYSz.D(2, 1),
                0 < t.oe ? (t.oe--,
                t.ae = 1) : (t.H0 = 10,
                QAAV(t),
                FouV.F = 0))
            }
            t.re[t.oe] < 0 ? (FZDd(t, "Random"),
            RPCs(t, "Random", 0 != t.ae ? "#FFFFFF" : t.me())) : (FZDd(t),
            RPCs(t, "", 0 != t.ae ? "#FFFFFF" : t.me())),
            1 == t.ae && ((t.right || t.left) && (0 < t.le[t.oe] ? t.le[t.oe] = 0 : t.le[t.oe] = 1),
            t.attack ? (t.attack = !1,
            XYSz.D(0, 1),
            t.ae = 0,
            t.oe++,
            8 == t.oe && (t.H0 = 22,
            t.pe = 0)) : (0 < t.fe || t.ge) && (t.fe = 0,
            t.ge = !1,
            XYSz.D(2, 1),
            t.ae--)),
            1 <= t.ae && (0 == t.le[t.oe] ? UPjx(t, "Computer") : UPjx(t, "Human"))
        }
        for (t.Se = 0,
        s = 0; s < 8; s++)
            0 < t.le[s] && (t.Se++,
            t.le[s] = t.Se);
        for (s = 0; s < t.oe; s++)
            e = t.ce[s],
            (1 != t.ne[e] || 1 != t.be) && 0 <= t.re[e] ? (h = T7ES.s0[t.re[e]],
            D.Dm9f(h.Ee, l + 216 + 60 * s + h.Fe, u + 260, 0, 1 / h.ti)) : D.Dm9f(BLg_.s1[1], l + 216 + 60 * s, u + 260, 0, 1 / BLg_.Mi),
            D.S6nY(t.Le[t.le[e]], l + 216 + 60 * s + 13 - 54 + 60, u + 307 - 2 + (19 - JXAJ) / 2, "Itbg", 0 == t.le[e] ? D.OuCn[2] : D.OuCn[1]);
        t.oe < 8 && (e = t.ce[t.oe],
        (1 != t.ne[t.oe] || 1 != t.be) && 0 <= t.re[t.oe] ? (d = T7ES.s0[t.re[t.oe]],
        D.Dm9f(d.Ee, l + 216 + 60 * t.oe + d.Fe, u + 260, 0, 1 / d.ti)) : D.Dm9f(BLg_.s1[1], l + 216 + 60 * t.oe, u + 260, 0, 1 / BLg_.Mi),
        0 == t.ae && D.VfDU(l + 216 + 60 * t.oe, u + 260, 40, 45, t.Be()),
        1 == t.ae && D.VfDU(l + 216 + 60 * t.oe + 13 - 54 + 45, u + 307 - 2, 30, 19, t.Be()),
        1 <= t.ae) && D.S6nY(t.Le[t.le[e]], l + 216 + 60 * t.oe + 13 - 54 + 60, u + 307 - 2 + (19 - JXAJ) / 2, "Itbg", 0 == t.le[e] ? D.OuCn[2] : D.OuCn[1])
    }
    if (22 == t.H0)
        if (l = (ZcYj - 238) / 2,
        u = 162,
        t.Kt = l,
        t.$t = u,
        D.Dm9f(BLg_.s1[2], l, u, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[3], l + 36, u + 17, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[5], l + 44, u + 70, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[6], l + 148, u + 70, 0, 1 / BLg_.Mi),
        0 == t.pe ? D.Dm9f(BLg_.s1[7], l + 41, u + 67, 0, 1 / BLg_.Mi) : D.Dm9f(BLg_.s1[8], l + 142, u + 68, 0, 1 / BLg_.Mi),
        (t.left || t.right) && (t.pe = 1 - t.pe),
        t.attack)
            t.attack = !1,
            XYSz.D(0, 1),
            0 == t.pe ? (t.H0 = 23,
            t.Me = 0) : (t.pe = 0,
            t.H0 = 24);
        else if (0 < t.fe || t.ge)
            for (XYSz.D(2, 1),
            t.fe = 0,
            t.ge = !1,
            t.H0 = 21,
            t.ae = 1,
            t.oe = 7,
            s = 0; s < 8; s++)
                t.ce[s] = s;
    if (23 == t.H0) {
        for (s = 0; s < 50; s++)
            e = t.ye(247, 8),
            i = t.ye(248, 8),
            o = t.ce[e],
            t.ce[e] = t.ce[i],
            t.ce[i] = o;
        t.Me++,
        t.Me % 5 == 0 && XYSz.D(1, 1),
        10 < t.Me && (t.H0 = 22,
        t.pe = 0)
    }
    if (24 == t.H0) {
        for (2 == t.be && (t.be = 1),
        i = 0; i < 8; i++)
            if (1 == t.ne[i]) {
                for (t.we = 0,
                o = 1; o < T7ES._e; o++) {
                    for (t.De = 0,
                    zz = 0; zz < 8; zz++)
                        t.re[zz] == o && (t.De = 1);
                    0 == T7ES.s0[o].type && 0 == t.De && T7ES.s0[o].id < 30 && (t.Ve[t.we] = o,
                    t.we++)
                }
                t.re[i] = t.Ve[t.ye(249, t.we)]
            }
        t.H0 = 25,
        t.pe = 0
    }
    if (25 == t.H0)
        if (l = 3,
        u = 3,
        t.Kt = l,
        t.$t = u,
        t.Te(),
        D.Dm9f(BLg_.e1[8], l, u, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.e1[15], l, u + 156, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.Gi[3], l, u + 131.33, 0, 1 / BLg_.Mi * 1),
        D.Dm9f(BLg_.Gi[5], l, u + 179 - 24, 0, 1 / BLg_.Mi * 1),
        D.S6nY(`<span style="font-size:100%;">${t.ke}s</span>`, t.Kt + 212, t.$t + 135 + (16 - JXAJ) / 2, "Itbg", "#ffffff"),
        0 == t.pe && D.Dm9f(BLg_.e1[9], l + 89, u + 13, 0, 1 / BLg_.Mi),
        1 == t.pe && D.Dm9f(BLg_.e1[10], l + 61, u + 36, 0, 1 / BLg_.Mi),
        2 == t.pe && D.Dm9f(BLg_.e1[11], l + 71 / 3, u + 61, 0, 1 / BLg_.Mi),
        0 < t.be && D.Dm9f(BLg_.e1[52], l + 776 / 3, u + 60, 0, 1 / BLg_.Mi),
        3 == t.pe && D.Dm9f(BLg_.e1[12], l + 12, u + 84, 0, 1 / BLg_.Mi),
        4 == t.pe && D.Dm9f(BLg_.e1[13], l + 34, u + 108, 0, 1 / BLg_.Mi),
        1 == t.Ie && (t.Ce = 100),
        D.S6nY(100 == t.Ce ? "Random" : T7ES.Ae[t.Ce].name.replaceAll("_", " "), l + 167 + 61, u + 88 + (16 - JXAJ) / 2, "Itbg", D.OuCn[0]),
        D.S6nY(2 == t.ve ? "Easy" : 1 == t.ve ? "Normal" : (t.ve,
        "Difficult"), l + 167 + 45, u + 112 + (16 - JXAJ) / 2, "Itbg", D.OuCn[0]),
        5 == t.pe ? (D.Dm9f(BLg_.Gi[6], l + 73 / 3 * 1, u + 132, 0, 1 / BLg_.Mi * 1),
        (0 < t.right || 0 < t.left || 0 < t.attack) && (d = 0 < t.right || 0 < t.attack ? 1 : -1,
        f = (n = [60, 90, 120, 180, 300, 600]).indexOf(t.ke),
        t.ke = n[-1 === f ? 0 < d ? 0 : n.length - 1 : (f + d + n.length) % n.length])) : 7 == t.pe ? (D.Dm9f(BLg_.Gi[8], l + 38 / 3 * 1, u + 156, 0, 1 / BLg_.Mi * 1),
        0 < t.attack && (t.Xe = !t.Xe)) : 8 == t.pe ? (D.Dm9f(BLg_.Gi[9], l + 287 / 3 * 1, u + 156, 0, 1 / BLg_.Mi * 1),
        0 < t.attack && (t.Ye = !t.Ye)) : 9 == t.pe ? (D.Dm9f(BLg_.Gi[10], l + 185, u + 156, 0, 1 / BLg_.Mi * 1),
        0 < t.attack && (t.Ne = !t.Ne)) : 10 == t.pe && (D.Dm9f(BLg_.e1[14], l + 98, u + 182, 0, 1 / BLg_.Mi * 1),
        0 < t.attack) && (XYSz.D(1, 1),
        t.H0 = 10),
        t.Xe && D.Dm9f(BLg_.Gi[11], l + 214 / 3 * 1, u + 161, 0, 1 / BLg_.Mi * 1),
        t.Ye && D.Dm9f(BLg_.Gi[11], l + 470 / 3 * 1, u + 161, 0, 1 / BLg_.Mi * 1),
        t.Ne && D.Dm9f(BLg_.Gi[11], l + 275, u + 161, 0, 1 / BLg_.Mi * 1),
        D.Dm9f(BLg_.Gi[12], l + 185, u + 156, 0, 1 / BLg_.Mi * 1),
        0 < t.de && (10 == t.pe ? t.pe = 8 : 7 <= t.pe && t.pe <= 9 ? t.pe = 5 : (t.pe--,
        t.pe < 0 && (t.pe = 10))),
        0 < t.R0 && (5 == t.pe ? t.pe = 8 : 7 <= t.pe && t.pe <= 9 ? t.pe = 10 : t.pe = (t.pe + 1) % 11),
        7 <= t.pe && t.pe <= 9 && (0 < t.left ? 7 == t.pe ? t.pe = 8 : t.pe-- : 0 < t.right && (9 == t.pe || (t.pe++,
        9 == t.pe)) && (t.pe = 7)),
        -1 == t.ve && (t.ve = 0),
        3 == t.pe && (0 < t.attack || 0 < t.right ? (t.Ie = 0,
        t.attack = 0,
        t.right = 0,
        100 == t.Ce ? t.Ce = 0 : (t.Ce++,
        t.Ce == T7ES.Ue && (t.Ce = 100,
        t.Ie = 1))) : 0 < t.left && (t.Ie = 0,
        t.left = 0,
        100 == t.Ce ? t.Ce = T7ES.Ue - 1 : (t.Ce--,
        -1 == t.Ce && (t.Ce = 100,
        t.Ie = 1)))),
        4 == t.pe && ((0 < t.attack || 0 < t.right) && (t.attack = 0,
        t.right = 0,
        t.ve--,
        t.ve < 0) && (t.ve = 2),
        0 < t.left) && (t.left = 0,
        t.ve++,
        2 < t.ve) && (t.ve = 0),
        2 == t.pe && (0 < t.right ? (t.right = 0) < t.be ? t.be = 0 : t.be = 1 : 0 < t.left && ((t.left = 0) < t.be ? t.be = 0 : t.be = 1)),
        0 < t.attack) {
            if (t.attack = 0,
            XYSz.D(1, 1),
            0 == t.pe) {
                for (1 == t.be && (t.be = 2),
                t.H0 = 26,
                s = 0; s < 8; s++)
                    t.Re[s] = 500,
                    t.xe[s] = -1,
                    t.Ge[s] = 0;
                t.Me = 25,
                t.Oe = 0,
                t.Ti()
            }
            1 == t.pe ? t.H0 = 20 : 2 == t.pe ? t.H0 = 24 : 10 == t.pe && (t.H0 = 10,
            QAAV(t),
            FouV.F = 0)
        } else if (0 < t.fe || t.ge)
            for (t.fe = 0,
            t.ge = !1,
            XYSz.D(2, 1),
            t.H0 = 22,
            t.pe = 0,
            s = 0; s < 8; s++)
                1 == t.ne[s] && (t.re[s] = -1);
    if (26 <= t.H0)
        for (l = (ZcYj - 794) / 2 - 51,
        u = 126,
        t.Kt = l,
        t.$t = u,
        e = 0; e < 8; e++)
            for (t.ze = t.Ge[e],
            7 < t.ze && (t.ze = 7),
            7 == t.ze && t.H0 < 29 && (t.H0 = 29,
            t.We = e,
            t.Me = 0),
            s = 0; s < t.ze; s++)
                D.Sy7M(l + t.Ze[2 * s + 14 * e], u + t.Ze[2 * s + 1 + 14 * e], t.Pe[2 * s], t.Pe[2 * s + 1], t.ze < 7 && t.ze % 2 == 1 ? 1058912 : 16777215);
    if (26 == t.H0) {
        for (l = (ZcYj - 794) / 2 - 51,
        u = 126,
        t.Kt = l,
        t.$t = u,
        t.Je = 0,
        s = 0; s < 8 && (t.Ge[s] != t.Oe || (t.He[t.Je] = s,
        t.Je++,
        2 != t.Je)); s++)
            ;
        if (0 == t.Je && t.Oe < 6 && (t.Oe += 2),
        2 == t.Je) {
            if (30 < t.Me)
                for (e = t.Qe % 10 < 5 ? t.He[0] : t.He[1],
                t.ze = t.Ge[e] + 2,
                7 < t.ze && (t.ze = 7),
                s = 0; s < t.ze; s++)
                    D.Sy7M(l + t.Ze[2 * s + 14 * e], u + t.Ze[2 * s + 1 + 14 * e], t.Pe[2 * s], t.Pe[2 * s + 1], 16752800);
            if (t.Me++,
            (0 < t.fe || t.ge) && (t.Me = 80),
            80 == t.Me)
                if (0 == t.le[t.ce[t.He[0]]] && 0 == t.le[t.ce[t.He[1]]])
                    XYSz.D(0, 1),
                    t.Me = 0,
                    i = t.je(0) || t.je(1) ? t.je(0) && !t.je(1) ? 0 : !t.je(0) && t.je(1) ? 1 : t.ye(251, 2) : t.ye(250, 2),
                    t.Ge[t.He[i]] = t.Ge[t.He[i]] + 2,
                    t.Ge[t.He[1 - i]] = t.Ge[t.He[1 - i]] + 1,
                    6 == t.Ge[t.He[i]] && (t.Ge[t.He[i]] = 7),
                    (r = t.ve) < -1 && (r = 0),
                    t.Re[t.He[i]] = t.Re[t.He[i]] * (t.ye(252, 15 + 12 * r) + 61 + 12 * (2 - r)) / 100;
                else {
                    for (t.H0 = 27,
                    t.Me = 0,
                    s = 0; s < 400; s++)
                        t.Ke[s] = !1;
                    for (s = 0; s < 20; s++)
                        t.$e[s] = -1;
                    t.Ge[t.He[0]] = t.Ge[t.He[0]] + 1,
                    t.Ge[t.He[1]] = t.Ge[t.He[1]] + 1
                }
        }
    }
    if (27 == t.H0) {
        if (t.Me < 2) {
            if (l = (ZcYj - 794) / 2 - 51,
            u = 126,
            t.Kt = l,
            t.$t = u,
            i = t.He[t.Me],
            t.Qe % 10 < 5)
                for (t.ze = t.Ge[i] + 1,
                7 < t.ze && (t.ze = 7),
                s = 0; s < t.ze; s++)
                    D.Sy7M(l + t.Ze[2 * s + 14 * i], u + t.Ze[2 * s + 1 + 14 * i], t.Pe[2 * s], t.Pe[2 * s + 1], 16752800);
            if (0 < t.le[t.ce[i]]) {
                l = 10,
                u = 10,
                t.Kt = l,
                t.$t = u,
                D.Dm9f(BLg_.s1[10], l, u, 0, 1 / BLg_.Mi),
                D.Dm9f(BLg_.s1[10 + t.le[t.ce[i]]], l + 159, u + 14, 0, 1 / BLg_.Mi);
                var f = T7ES.s0[t.re[t.ce[i]]].qe
                  , d = D.E9px(f);
                for (D.Dm9f(f, l + 80, u + 39, 0, 120 / d),
                s = 0; s < 8; s++)
                    if (t.Ke[s] || EviP(t, s),
                    t.ts[s].attack && !t.ts[s].es) {
                        if (!t.Ke[s]) {
                            t.attack = !1,
                            t.ts[s].es = 1,
                            XYSz.D(0, 1),
                            t.$e[s] = i,
                            t.Ke[s] = !0,
                            t.ts[s].s0 = T7ES.s0[t.re[t.ce[i]]],
                            t.Me++;
                            break
                        }
                        XYSz.D(2, 1)
                    }
            } else
                t.Me++,
                t.pe = 1
        }
        if (2 == t.Me && (l = 278 + (ZcYj - 794) / 2,
        u = 162,
        t.Kt = l,
        t.$t = u,
        D.Dm9f(BLg_.s1[2], l, u, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[4], l + 36, u + 17, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[5], l + 44, u + 70, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[6], l + 148, u + 70, 0, 1 / BLg_.Mi),
        0 == t.pe ? D.Dm9f(BLg_.s1[7], l + 41, u + 67, 0, 1 / BLg_.Mi) : D.Dm9f(BLg_.s1[8], l + 142, u + 68, 0, 1 / BLg_.Mi),
        (t.left || t.right) && (t.pe = 1 - t.pe),
        t.attack))
            if (t.attack = !1,
            XYSz.D(0, 1),
            0 == t.pe)
                t.attack = !1,
                t.Me = 3;
            else {
                for (t.attack = !1,
                t.Me = 0,
                s = 0; s < 400; s++)
                    t.Ke[s] = !1;
                for (s = 0; s < 20; s++)
                    t.$e[s] = -1;
                NcPr()
            }
        if (3 == t.Me) {
            for (e = 0; e < 2; e++)
                if (0 == t.le[t.ce[t.He[e]]])
                    for (s = 0; s < 8; s++)
                        if (!t.Ke[s]) {
                            XYSz.D(0, 1),
                            t.$e[s + 10] = t.He[e],
                            t.Ke[s + 10] = !0,
                            t.ts[s + 10].s0 = T7ES.s0[t.re[t.ce[t.He[e]]]];
                            break
                        }
            for (t.H0 = 0,
            t.ss = t.ke * SvvK + SvvK - 1,
            1 == t.Ie && (t.Ce = t.ye(253, T7ES.Ue)),
            a = t.Ce,
            i = 0; i < 20; i++)
                t.Ke[i] && (t.ts[i].hs(t.ts[i].s0, 350, 0, 300),
                t.ts[i].os = 500,
                t.ts[i].ns = t.ts[i].rs = t.ts[i].ls = t.Re[t.$e[i]],
                t.ts[i].cs = t.xe[t.$e[i]],
                t.ts[i].group = t.$e[i] + 10,
                t.ts[i].ds = 75,
                t.ts[i].x = t.ye(254, T7ES.Ae[a].w / 2) + T7ES.Ae[a].w / 4,
                t.ts[i].z = t.ye(255, T7ES.Ae[a]._s - T7ES.Ae[a].us) + T7ES.Ae[a].us,
                t.ts[i].y = 0,
                t.ts[i].fs = t.ts[i].x,
                t.ts[i].gs = t.ts[i].z,
                t.ts[i].ps = 0,
                t.ts[i].Ss = i);
            for (t.bs = 0,
            t.Es = 0,
            t.Fs = 0,
            t.Ls = 0,
            t.Bs = 0,
            t.Ms = 0,
            t.ys = 0,
            t.ws = 0,
            t.Ds = 0,
            t.Vs = 0,
            T7ES.Ae[t.Ce].Ts || T7ES.Ae[t.Ce].ks || T7ES.Ae[t.Ce].Is(),
            t.Cs = 1,
            t.As = 0,
            i = 20; i < 400; i++)
                t.Ke[i] || t.ts[i].vs();
            QAAV(t)
        }
    }
    if (28 == t.H0) {
        for (s = 0; s < 20; s++)
            -1 < t.$e[s] && (t.Re[t.$e[s]] = t.ts[s].rs,
            t.xe[t.$e[s]] = t.ts[s].cs);
        for (10 <= t.Xs ? (t.Ge[t.Xs - 10] = t.Ge[t.Xs - 10] + 1,
        6 == t.Ge[t.Xs - 10] && (t.Ge[t.Xs - 10] = 7)) : (i = t.ye(256, 2),
        t.Ge[t.He[i]] = t.Ge[t.He[i]] + 1,
        6 == t.Ge[t.He[i]] && (t.Ge[t.He[i]] = 7)),
        t.H0 = 26,
        s = 0; s < 400; s++)
            t.Ke[s] = !1;
        for (s = 0; s < 20; s++)
            t.$e[s] = -1;
        NcPr()
    }
    29 == t.H0 && (t.Me < 50 && t.Me++,
    20 < t.Me) && (21 == t.Me && (XYSz.Ys(),
    XYSz.D(3, 1),
    FouV.Yt) && FouV.gi(atob("TU9ERV8xX09OXzFfQ0hBTVA=")),
    l = 10,
    u = 10,
    t.Kt = l,
    t.$t = u,
    D.Dm9f(BLg_.s1[10], l, u, 0, 1 / BLg_.Mi),
    0 == t.le[t.ce[t.We]] ? D.Dm9f(BLg_.s1[20], l + 83, u + 12, 0, 1 / BLg_.Mi) : D.Dm9f(BLg_.s1[10 + t.le[t.ce[t.We]]], l + 159, u + 14, 0, 1 / BLg_.Mi),
    n = T7ES.s0[t.re[t.ce[t.We]]].qe,
    f = D.E9px(n),
    D.Dm9f(n, l + 80, u + 39, 0, 120 / f),
    D.Dm9f(BLg_.s1[19], l + 13, u + 165, 0, 1 / BLg_.Mi),
    t.attack) && 50 == t.Me && (t.H0 = 10,
    QAAV(t),
    FouV.F = 0)
}
function RPCs(t, s, e) {
    D.S6nY("Random" == s ? "Random" : T7ES.s0[t.re[t.oe]].name, t.Kt + 59 - 35 + 60, t.$t + 206 - 2 + (19 - JXAJ) / 2, "Itbg", e)
}
function FZDd(t, s="") {
    var s = "Random" == s ? BLg_.N1 : T7ES.s0[t.re[t.oe]].qe
      , e = D.E9px(s);
    D.Dm9f(s, t.Kt + 25, t.$t + 53, 0, 120 / e)
}
function UPjx(t, s) {
    D.S6nY(s, t.Kt + 59 - 35 + 60, t.$t + 253 - 2 + (19 - JXAJ) / 2, "Itbg", 1 != t.ae ? "#FFFFFF" : t.me())
}
class VEny {
}
function IV0O(t) {
    let s, e, i, o;
    var a, h, n;
    let r, l, u;
    if (IAlU(t),
    120 == t.H0) {
        for (t.oe = 0,
        t.ae = 0,
        t.H0 = 121,
        s = 0; s < 8; s++)
            t.ne[s] = 1,
            t.re[s] = -1,
            t.le[s] = 0,
            t.Ns[s] = Math.floor(s / 2) + 1,
            t.ce[s] = s;
        NcPr()
    }
    if (121 <= t.H0) {
        for (t.H0 <= 123 ? (l = 27 + (ZcYj - 794) / 2,
        u = 106,
        t.Kt = l,
        t.$t = u,
        D.Dm9f(BLg_.s1[0], l, u, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[24], l + 20, u + 278, 0, 1 / BLg_.Mi)) : (l = (ZcYj - 794) / 2 - 51,
        u = 126,
        t.Kt = l,
        t.$t = u,
        D.Dm9f(BLg_.s1[9], l + 170, u, 0, 1 / BLg_.Mi)),
        D.Dm9f(BLg_.e1[21], l + 132 + 177, u + 23, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.e1[16], l + 55 + 177 + .5, u + 215 - .5, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.e1[16], l + 55 + 177, u + 215, 0, 1 / BLg_.Mi),
        s = 0; s < 4; s++)
            D.Sy7M(l + 55 + 177 + 120 * s + 1, u + 221, 73, 36, 3296666),
            D.Sy7M(l + 55 + 177 + 120 * s, u + 221, 73, 36, 3296666),
            D.Dm9f(BLg_.e1[16 + t.Ns[2 * s]], l + 60 + 177 + 120 * s, u + 223, 0, 1 / BLg_.Mi);
        if (t.oe < 8) {
            if (0 == t.ae) {
                if (0 < t.de && (t.re[t.oe] = -1,
                t.ne[t.oe] = 1),
                0 < t.right)
                    for (; ; ) {
                        if (t.re[t.oe]++,
                        t.ne[t.oe] = 0,
                        t.re[t.oe] >= T7ES._e) {
                            t.re[t.oe] = -1,
                            t.ne[t.oe] = 1;
                            break
                        }
                        if (t.ue(t.re[t.oe], -1))
                            break
                    }
                if (0 < t.left)
                    for (; ; ) {
                        if (t.re[t.oe]--,
                        t.ne[t.oe] = 0,
                        -1 == t.re[t.oe]) {
                            t.ne[t.oe] = 1;
                            break
                        }
                        if (t.re[t.oe] < -1 && (t.re[t.oe] = T7ES._e - 1),
                        t.ue(t.re[t.oe], -1))
                            break
                    }
                0 < t.attack ? (t.attack = 0,
                XYSz.D(0, 1),
                t.ae = 1) : (0 < t.fe || t.ge) && (t.fe = 0,
                t.ge = !1,
                XYSz.D(2, 1),
                0 < t.oe ? (t.oe--,
                t.ae = 1) : (t.H0 = 10,
                QAAV(t),
                FouV.F = 0))
            }
            t.re[t.oe] < 0 ? (FZDd(t, "Random"),
            RPCs(t, "Random", 0 != t.ae ? "#FFFFFF" : t.me())) : (FZDd(t),
            RPCs(t, "", 0 != t.ae ? "#FFFFFF" : t.me())),
            1 == t.ae && ((t.right || t.left) && (0 < t.le[t.oe] ? t.le[t.oe] = 0 : t.le[t.oe] = 1),
            t.attack ? (t.attack = !1,
            XYSz.D(0, 1),
            t.ae = 0,
            t.oe++,
            8 == t.oe && (t.H0 = 122,
            t.pe = 0)) : (0 < t.fe || t.ge) && (t.fe = 0,
            t.ge = !1,
            XYSz.D(2, 1),
            t.ae--)),
            1 <= t.ae && (0 == t.le[t.oe] ? UPjx(t, "Computer") : UPjx(t, "Human"))
        }
        for (t.Se = 0,
        s = 0; s < 8; s++)
            0 < t.le[s] && (t.Se++,
            t.le[s] = t.Se);
        for (s = 0; s < t.oe; s++)
            r = s % 2 == 0 ? 10 : -10,
            e = t.ce[s],
            (1 != t.ne[e] || 1 != t.be) && 0 <= t.re[e] ? (h = T7ES.s0[t.re[e]],
            D.Dm9f(h.Ee, r + l + 216 + 60 * s + h.Fe, u + 252, 0, 1 / h.ti)) : D.Dm9f(BLg_.s1[1], r + l + 216 + 60 * s, u + 252, 0, 1 / BLg_.Mi),
            D.S6nY(t.Le[t.le[e]], r + l + 216 + 60 * s + 13 - 54 + 60, u + 299 - 2 + (19 - JXAJ) / 2, "Itbg", 0 == t.le[e] ? D.OuCn[2] : D.OuCn[1]);
        t.oe < 8 && (r = t.oe % 2 == 0 ? 10 : -10,
        e = t.ce[t.oe],
        (1 != t.ne[t.oe] || 1 != t.be) && 0 <= t.re[t.oe] ? (d = T7ES.s0[t.re[t.oe]],
        D.Dm9f(d.Ee, r + l + 216 + 60 * t.oe + d.Fe, u + 252, 0, 1 / d.ti)) : D.Dm9f(BLg_.s1[1], r + l + 216 + 60 * t.oe, u + 252, 0, 1 / BLg_.Mi),
        0 == t.ae && D.VfDU(r + l + 216 + 60 * s, u + 252, 40, 45, t.Be()),
        1 == t.ae && D.VfDU(r + l + 216 + 60 * t.oe + 13 - 54 + 45, u + 299 - 2, 30, 19, t.Be()),
        1 <= t.ae) && D.S6nY(t.Le[t.le[e]], r + l + 216 + 60 * t.oe + 13 - 54 + 60, u + 299 - 2 + (19 - JXAJ) / 2, "Itbg", 0 == t.le[e] ? D.OuCn[2] : D.OuCn[1])
    }
    if (122 == t.H0)
        if (l = (ZcYj - 238) / 2,
        u = 162,
        t.Kt = l,
        t.$t = u,
        D.Dm9f(BLg_.s1[2], l, u, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[3], l + 36, u + 17, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[5], l + 44, u + 70, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[6], l + 148, u + 70, 0, 1 / BLg_.Mi),
        0 == t.pe ? D.Dm9f(BLg_.s1[7], l + 41, u + 67, 0, 1 / BLg_.Mi) : D.Dm9f(BLg_.s1[8], l + 142, u + 68, 0, 1 / BLg_.Mi),
        (t.left || t.right) && (t.pe = 1 - t.pe),
        t.attack)
            t.attack = !1,
            XYSz.D(0, 1),
            0 == t.pe ? (t.H0 = 123,
            t.Me = 0) : (t.pe = 0,
            t.H0 = 124);
        else if (0 < t.fe || t.ge)
            for (XYSz.D(2, 1),
            t.fe = 0,
            t.ge = !1,
            t.H0 = 121,
            t.ae = 1,
            t.oe = 7,
            s = 0; s < 8; s++)
                t.ce[s] = s,
                t.Ns[s] = Math.floor(s / 2) + 1;
    if (123 == t.H0) {
        for (s = 0; s < 50; s++)
            e = t.ye(257, 4),
            i = t.ye(258, 4),
            o = t.ce[2 * e],
            t.ce[2 * e] = t.ce[2 * i],
            t.ce[2 * i] = o,
            o = t.ce[2 * e + 1],
            t.ce[2 * e + 1] = t.ce[2 * i + 1],
            t.ce[2 * i + 1] = o,
            o = t.Ns[2 * e],
            t.Ns[2 * e] = t.Ns[2 * i],
            t.Ns[2 * i] = o,
            o = t.Ns[2 * e + 1],
            t.Ns[2 * e + 1] = t.Ns[2 * i + 1],
            t.Ns[2 * i + 1] = o;
        t.Me++,
        t.Me % 5 == 0 && XYSz.D(1, 1),
        10 < t.Me && (t.H0 = 122,
        t.pe = 0)
    }
    if (124 == t.H0) {
        for (2 == t.be && (t.be = 1),
        i = 0; i < 8; i++)
            if (1 == t.ne[i]) {
                for (t.we = 0,
                o = 1; o < T7ES._e; o++) {
                    for (t.De = 0,
                    zz = 0; zz < 8; zz++)
                        t.re[zz] == o && (t.De = 1);
                    0 == T7ES.s0[o].type && 0 == t.De && T7ES.s0[o].id < 30 && (t.Ve[t.we] = o,
                    t.we++)
                }
                t.re[i] = t.Ve[t.ye(259, t.we)]
            }
        t.H0 = 125,
        t.pe = 0
    }
    if (125 == t.H0)
        if (l = 3,
        u = 3,
        t.Kt = l,
        t.$t = u,
        t.Te(),
        D.Dm9f(BLg_.e1[8], l, u, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.e1[15], l, u + 156, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.Gi[3], l, u + 131.33, 0, 1 / BLg_.Mi * 1),
        D.Dm9f(BLg_.Gi[5], l, u + 179 - 24, 0, 1 / BLg_.Mi * 1),
        D.S6nY(`<span style="font-size:100%;">${t.Us}s</span>`, t.Kt + 212, t.$t + 135 + (16 - JXAJ) / 2, "Itbg", "#ffffff"),
        0 == t.pe && D.Dm9f(BLg_.e1[9], l + 89, u + 13, 0, 1 / BLg_.Mi),
        1 == t.pe && D.Dm9f(BLg_.e1[10], l + 61, u + 36, 0, 1 / BLg_.Mi),
        2 == t.pe && D.Dm9f(BLg_.e1[11], l + 71 / 3, u + 61, 0, 1 / BLg_.Mi),
        0 < t.be && D.Dm9f(BLg_.e1[52], l + 776 / 3, u + 60, 0, 1 / BLg_.Mi),
        3 == t.pe && D.Dm9f(BLg_.e1[12], l + 12, u + 84, 0, 1 / BLg_.Mi),
        4 == t.pe && D.Dm9f(BLg_.e1[13], l + 34, u + 108, 0, 1 / BLg_.Mi),
        1 == t.Ie && (t.Ce = 100),
        D.S6nY(100 == t.Ce ? "Random" : T7ES.Ae[t.Ce].name.replaceAll("_", " "), l + 167 + 61, u + 88 + (16 - JXAJ) / 2, "Itbg", D.OuCn[0]),
        D.S6nY(2 == t.ve ? "Easy" : 1 == t.ve ? "Normal" : (t.ve,
        "Difficult"), l + 167 + 45, u + 112 + (16 - JXAJ) / 2, "Itbg", D.OuCn[0]),
        5 == t.pe ? (D.Dm9f(BLg_.Gi[6], l + 73 / 3 * 1, u + 132, 0, 1 / BLg_.Mi * 1),
        (0 < t.right || 0 < t.left || 0 < t.attack) && (d = 0 < t.right || 0 < t.attack ? 1 : -1,
        f = (n = [60, 90, 120, 180, 300, 600]).indexOf(t.Us),
        t.Us = n[-1 === f ? 0 < d ? 0 : n.length - 1 : (f + d + n.length) % n.length])) : 7 == t.pe ? (D.Dm9f(BLg_.Gi[8], l + 38 / 3 * 1, u + 156, 0, 1 / BLg_.Mi * 1),
        0 < t.attack && (t.Xe = !t.Xe)) : 8 == t.pe ? (D.Dm9f(BLg_.Gi[9], l + 287 / 3 * 1, u + 156, 0, 1 / BLg_.Mi * 1),
        0 < t.attack && (t.Ye = !t.Ye)) : 9 == t.pe ? (D.Dm9f(BLg_.Gi[10], l + 185, u + 156, 0, 1 / BLg_.Mi * 1),
        0 < t.attack && (t.Ne = !t.Ne)) : 10 == t.pe && (D.Dm9f(BLg_.e1[14], l + 98, u + 182, 0, 1 / BLg_.Mi * 1),
        0 < t.attack) && (XYSz.D(1, 1),
        t.H0 = 10),
        t.Xe && D.Dm9f(BLg_.Gi[11], l + 214 / 3 * 1, u + 161, 0, 1 / BLg_.Mi * 1),
        t.Ye && D.Dm9f(BLg_.Gi[11], l + 470 / 3 * 1, u + 161, 0, 1 / BLg_.Mi * 1),
        t.Ne && D.Dm9f(BLg_.Gi[11], l + 275, u + 161, 0, 1 / BLg_.Mi * 1),
        D.Dm9f(BLg_.Gi[12], l + 185, u + 156, 0, 1 / BLg_.Mi * 1),
        0 < t.de && (10 == t.pe ? t.pe = 8 : 7 <= t.pe && t.pe <= 9 ? t.pe = 5 : (t.pe--,
        t.pe < 0 && (t.pe = 10))),
        0 < t.R0 && (5 == t.pe ? t.pe = 8 : 7 <= t.pe && t.pe <= 9 ? t.pe = 10 : t.pe = (t.pe + 1) % 11),
        7 <= t.pe && t.pe <= 9 && (0 < t.left ? 7 == t.pe ? t.pe = 8 : t.pe-- : 0 < t.right && (9 == t.pe || (t.pe++,
        9 == t.pe)) && (t.pe = 7)),
        -1 == t.ve && (t.ve = 0),
        3 == t.pe && (0 < t.attack || 0 < t.right ? (t.Ie = 0,
        t.attack = 0,
        t.right = 0,
        100 == t.Ce ? t.Ce = 0 : (t.Ce++,
        t.Ce == T7ES.Ue && (t.Ce = 100,
        t.Ie = 1))) : 0 < t.left && (t.Ie = 0,
        t.left = 0,
        100 == t.Ce ? t.Ce = T7ES.Ue - 1 : (t.Ce--,
        -1 == t.Ce && (t.Ce = 100,
        t.Ie = 1)))),
        4 == t.pe && ((0 < t.attack || 0 < t.right) && (t.attack = 0,
        t.right = 0,
        t.ve--,
        t.ve < 0) && (t.ve = 2),
        0 < t.left) && (t.left = 0,
        t.ve++,
        2 < t.ve) && (t.ve = 0),
        2 == t.pe && (0 < t.right ? (t.right = 0) < t.be ? t.be = 0 : t.be = 1 : 0 < t.left && ((t.left = 0) < t.be ? t.be = 0 : t.be = 1)),
        0 < t.attack) {
            if (t.attack = 0,
            XYSz.D(1, 1),
            0 == t.pe) {
                for (1 == t.be && (t.be = 2),
                t.H0 = 126,
                s = 0; s < 8; s++)
                    t.Re[s] = 500,
                    t.xe[s] = -1,
                    t.Ge[s] = 2;
                t.Me = 25,
                t.Oe = 0,
                t.Ti()
            }
            1 == t.pe ? t.H0 = 120 : 2 == t.pe ? t.H0 = 124 : 10 == t.pe && (t.H0 = 10,
            QAAV(t),
            FouV.F = 0)
        } else if (0 < t.fe || t.ge)
            for (t.fe = 0,
            t.ge = !1,
            XYSz.D(2, 1),
            t.H0 = 122,
            t.pe = 0,
            s = 0; s < 8; s++)
                1 == t.ne[s] && (t.re[s] = -1);
    if (126 <= t.H0)
        for (l = (ZcYj - 794) / 2 - 51,
        u = 126,
        t.Kt = l,
        t.$t = u,
        e = 0; e < 8; e += 2)
            for (t.ze = t.Ge[e],
            7 < t.ze && (t.ze = 7),
            7 == t.ze && t.H0 < 129 && (t.H0 = 129,
            t.We = e,
            t.Me = 0),
            s = 2; s < t.ze; s++)
                D.Sy7M(l + t.Ze[2 * s + 14 * e], u + t.Ze[2 * s + 1 + 14 * e], t.Pe[2 * s], t.Pe[2 * s + 1], t.ze < 7 && t.ze % 2 == 1 ? 1058912 : 16777215);
    if (126 == t.H0) {
        for (l = (ZcYj - 794) / 2 - 51,
        u = 126,
        t.Kt = l,
        t.$t = u,
        t.Je = 0,
        s = 0; s < 8 && (t.Ge[s] != t.Oe || (t.He[t.Je] = s,
        t.He[t.Je + 1] = s + 1,
        t.Je += 2,
        4 != t.Je)); s += 2)
            ;
        if (0 == t.Je && t.Oe < 6 && (t.Oe += 2),
        4 == t.Je) {
            if (30 < t.Me)
                for (e = t.Qe % 10 < 5 ? t.He[0] : t.He[2],
                t.ze = t.Ge[e] + 2,
                7 < t.ze && (t.ze = 7),
                s = 2; s < t.ze; s++)
                    D.Sy7M(l + t.Ze[2 * s + 14 * e], u + t.Ze[2 * s + 1 + 14 * e], t.Pe[2 * s], t.Pe[2 * s + 1], 16752800);
            if (t.Me++,
            (0 < t.fe || t.ge) && (t.Me = 80),
            80 == t.Me)
                if (0 == t.le[t.ce[t.He[0]]] && 0 == t.le[t.ce[t.He[1]]] && 0 == t.le[t.ce[t.He[2]]] && 0 == t.le[t.ce[t.He[3]]])
                    XYSz.D(0, 1),
                    t.Me = 0,
                    i = t.je(0) || t.je(1) || t.je(2) || t.je(3) ? !t.je(0) && !t.je(1) || t.je(2) || t.je(3) ? t.je(0) || t.je(1) || !t.je(2) && t.je(3) ? 2 * t.ye(262, 2) : 2 : 0 : 2 * t.ye(261, 2),
                    t.Ge[t.He[i]] = t.Ge[t.He[i]] + 2,
                    t.Ge[t.He[i + 1]] = t.Ge[t.He[i + 1]] + 2,
                    t.Ge[t.He[2 - i]] = t.Ge[t.He[2 - i]] + 1,
                    t.Ge[t.He[2 - i + 1]] = t.Ge[t.He[2 - i + 1]] + 1,
                    6 == t.Ge[t.He[i]] && (t.Ge[t.He[i]] = 7),
                    6 == t.Ge[t.He[i + 1]] && (t.Ge[t.He[i + 1]] = 7),
                    (r = t.ve) < -1 && (r = 0),
                    t.Re[t.He[i]] = Math.floor(t.Re[t.He[i]] * (t.ye(263, 15 + 18 * t.ve) + 49 + 18 * (2 - t.ve)) / 100),
                    t.Re[t.He[i + 1]] = Math.floor(t.Re[t.He[i + 1]] * (t.ye(264, 15 + 18 * t.ve) + 49 + 18 * (2 - t.ve)) / 100);
                else {
                    for (t.H0 = 127,
                    t.Me = 0,
                    s = 0; s < 400; s++)
                        t.Ke[s] = !1;
                    for (s = 0; s < 20; s++)
                        t.$e[s] = -1;
                    t.Ge[t.He[0]] = t.Ge[t.He[0]] + 1,
                    t.Ge[t.He[1]] = t.Ge[t.He[1]] + 1,
                    t.Ge[t.He[2]] = t.Ge[t.He[2]] + 1,
                    t.Ge[t.He[3]] = t.Ge[t.He[3]] + 1
                }
        }
    }
    if (127 == t.H0) {
        if (t.Me < 4) {
            if (l = (ZcYj - 794) / 2 - 51,
            u = 126,
            t.Kt = l,
            t.$t = u,
            i = t.He[t.Me],
            t.Qe % 10 < 5)
                for (t.ze = t.Ge[i] + 1,
                7 < t.ze && (t.ze = 7),
                s = 2; s < t.ze; s++)
                    D.Sy7M(l + t.Ze[2 * s + 14 * i], u + t.Ze[2 * s + 1 + 14 * i], t.Pe[2 * s], t.Pe[2 * s + 1], 16752800);
            if (0 < t.le[t.ce[i]]) {
                l = 10,
                u = 10,
                t.Kt = l,
                t.$t = u,
                D.Dm9f(BLg_.s1[10], l, u, 0, 1 / BLg_.Mi),
                D.Dm9f(BLg_.s1[10 + t.le[t.ce[i]]], l + 159, u + 14, 0, 1 / BLg_.Mi);
                var f = T7ES.s0[t.re[t.ce[i]]].qe
                  , d = D.E9px(f);
                for (D.Dm9f(f, l + 80, u + 39, 0, 120 / d),
                s = 0; s < 8; s++)
                    if (t.Ke[s] || EviP(t, s),
                    0 < t.ts[s].attack && 0 == t.ts[s].es) {
                        if (!t.Ke[s]) {
                            t.attack = !1,
                            t.ts[s].es = 1,
                            XYSz.D(0, 1),
                            t.$e[s] = i,
                            t.Ke[s] = !0,
                            t.ts[s].s0 = T7ES.s0[t.re[t.ce[i]]],
                            t.Me++;
                            break
                        }
                        XYSz.D(2, 1)
                    }
            } else
                t.Me++,
                t.pe = 1
        }
        if (4 == t.Me && (l = 278 + (ZcYj - 794) / 2,
        u = 162,
        t.Kt = l,
        t.$t = u,
        D.Dm9f(BLg_.s1[2], l, u, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[4], l + 36, u + 17, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[5], l + 44, u + 70, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[6], l + 148, u + 70, 0, 1 / BLg_.Mi),
        0 == t.pe ? D.Dm9f(BLg_.s1[7], l + 41, u + 67, 0, 1 / BLg_.Mi) : D.Dm9f(BLg_.s1[8], l + 142, u + 68, 0, 1 / BLg_.Mi),
        (t.left || t.right) && (t.pe = 1 - t.pe),
        t.attack))
            if (t.attack = !1,
            XYSz.D(0, 1),
            0 == t.pe)
                t.attack = !1,
                t.Me = 5;
            else {
                for (t.attack = !1,
                t.Me = 0,
                s = 0; s < 400; s++)
                    t.Ke[s] = !1;
                for (s = 0; s < 20; s++)
                    t.$e[s] = -1;
                NcPr()
            }
        if (5 == t.Me) {
            for (e = 0; e < 4; e++)
                if (0 == t.le[t.ce[t.He[e]]])
                    for (s = 0; s < 8; s++)
                        if (0 == t.Ke[s] && 0 == t.Ke[s + 10]) {
                            XYSz.D(0, 1),
                            t.$e[s + 10] = t.He[e],
                            t.Ke[s + 10] = !0,
                            t.ts[s + 10].s0 = T7ES.s0[t.re[t.ce[t.He[e]]]];
                            break
                        }
            for (t.H0 = 0,
            t.ss = t.Us * SvvK + SvvK - 1,
            1 == t.Ie && (t.Ce = t.ye(265, T7ES.Ue)),
            a = t.Ce,
            i = 0; i < 20; i++)
                t.Ke[i] && (t.ts[i].hs(t.ts[i].s0, 350, 0, 300),
                t.ts[i].os = 500,
                t.ts[i].ns = t.ts[i].rs = t.ts[i].ls = t.Re[t.$e[i]],
                t.ts[i].cs = t.xe[t.$e[i]],
                t.ts[i].group = t.Ns[t.$e[i]],
                t.ts[i].ds = 75,
                t.ts[i].x = Math.floor(t.ye(266, T7ES.Ae[a].w / 2) + T7ES.Ae[a].w / 4),
                t.ts[i].z = Math.floor(t.ye(267, T7ES.Ae[a]._s - T7ES.Ae[a].us) + T7ES.Ae[a].us),
                t.ts[i].y = 0,
                t.ts[i].fs = t.ts[i].x,
                t.ts[i].gs = t.ts[i].z,
                t.ts[i].ps = 0,
                t.ts[i].Ss = i);
            for (t.bs = 0,
            t.Es = 0,
            t.Fs = 0,
            t.Ls = 0,
            t.Bs = 0,
            t.Ms = 0,
            t.ys = 0,
            t.ws = 0,
            t.Ds = 0,
            t.Vs = 0,
            T7ES.Ae[t.Ce].Ts || T7ES.Ae[t.Ce].ks || T7ES.Ae[t.Ce].Is(),
            t.Cs = 1,
            t.As = 0,
            i = 20; i < 400; i++)
                t.Ke[i] || t.ts[i].vs();
            QAAV(t)
        }
    }
    if (128 == t.H0) {
        for (s = 0; s < 20; s++)
            -1 < t.$e[s] && (t.ts[s].ls <= 0 && (t.ts[s].rs = Math.floor(t.ts[s].rs / 2)),
            t.Re[t.$e[s]] = t.ts[s].rs,
            t.xe[t.$e[s]] = t.ts[s].cs,
            t.ts[s].group == t.Xs) && (t.Ge[t.$e[s]]++,
            6 == t.Ge[t.$e[s]]) && (t.Ge[t.$e[s]] = 7);
        for (-1 == t.Xs && (i = 2 * t.ye(268, 2),
        t.Ge[t.He[i]] = t.Ge[t.He[i]] + 1,
        t.Ge[t.He[i + 1]] = t.Ge[t.He[i + 1]] + 1,
        6 == t.Ge[t.He[i]] && (t.Ge[t.He[i]] = 7),
        6 == t.Ge[t.He[i + 1]]) && (t.Ge[t.He[i + 1]] = 7),
        t.H0 = 126,
        s = 0; s < 400; s++)
            t.Ke[s] = !1;
        for (s = 0; s < 20; s++)
            t.$e[s] = -1;
        NcPr()
    }
    129 == t.H0 && (t.Me < 50 && t.Me++,
    20 < t.Me) && (21 == t.Me && (XYSz.Ys(),
    XYSz.D(3, 1),
    FouV.Nt) && FouV.gi(atob("TU9ERV8yX09OXzJfQ0hBTVA=")),
    l = 10,
    u = 10,
    t.Kt = l,
    t.$t = u,
    D.Dm9f(BLg_.s1[10], l, u, 0, 1 / BLg_.Mi),
    D.Dm9f(BLg_.s1[21], l + 99, u + 12, 0, 1 / BLg_.Mi),
    D.Dm9f(BLg_.s1[10 + t.Ns[t.We]], l + 159, u + 14, 0, 1 / BLg_.Mi),
    n = T7ES.s0[t.re[t.ce[t.We]]].qe,
    f = D.E9px(n),
    D.Dm9f(n, l + 20, u + 39, 0, 120 / f),
    d = T7ES.s0[t.re[t.ce[t.We] + 1]].qe,
    n = D.E9px(d),
    D.Dm9f(d, l + 140, u + 39, 0, 120 / n),
    D.Dm9f(BLg_.s1[19], l + 13, u + 165, 0, 1 / BLg_.Mi),
    t.attack) && 50 == t.Me && (t.H0 = 10,
    QAAV(t),
    FouV.F = 0)
}