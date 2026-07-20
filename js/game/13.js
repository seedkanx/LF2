function Qyjb(t, s, e) {
    return t < s && s < e || e < s && s < t
}
function Z2jw(t, s, e, i, o, a, h, n, r, l, u, f) {
    let d, c, p;
    for (d = -1,
    p = 50; p < t.Zs; p++)
        if (!t.Ke[p]) {
            d = p;
            break
        }
    if ((c = -1) != d)
        for (p = 0; p < T7ES._e; p++)
            if (T7ES.s0[p].id == s) {
                c = p;
                break
            }
    -1 != d && -1 != c && (t.ts[d].hs(T7ES.s0[c], 580, -200, 300),
    t.ts[d].Ss = e,
    t.ts[d].x = a,
    t.ts[d].y = h,
    t.ts[d].z = n,
    t.ts[d].group = o,
    t.ts[d].fs = a,
    t.ts[d].ps = h,
    t.ts[d].gs = n,
    t.ts[d].xs = i,
    t.ts[d].Gs = r,
    t.ts[d].Os = l,
    t.ts[d].zs = u,
    t.ts[d].Ws = f,
    t.Ke[d] = !0)
}
class Y047 {
}
function GENs(s) {
    let e, i, o, a, h, n;
    var t, r, l;
    let u, f, d, c, p, g, y, x;
    if (203 != s.H0 && IAlU(s),
    s.Uh) {
        for (a = 1,
        i = 0; i <= s.Rh; i += s.Rh)
            for (e = 0; e < s.Rh; e++)
                n = Math.floor(s.xh[e] * a / 3),
                (h = Math.floor(s.Gh[e] * a / 3)) < 1 && 0 < n && (h = 1),
                s.Oh[e + i] = h,
                s.zh[e + i] = n - h,
                s.zh[e + i] < 0 && (s.zh[e + i] = 0);
        for (e = 0; e < s.Rh; e++)
            for (h = 0; h < T7ES._e; h++)
                T7ES.s0[h].id == s.Wh[e] && (s.Zh[e] = T7ES.s0[h]);
        s.Ph = 6,
        s.Jh = 2,
        s.Hh = 0,
        s.Uh = !1
    }
    for (u = 45 + s.Qh + (ZcYj - 794) / 2,
    s.jh[0] = s.jh[1] = 0,
    s.Kh[0] = s.Kh[1] = 0,
    200 < s.H0 && s.H0 < 210 ? (s.$h < 67 && (s.$h += 30),
    67 < s.$h && (s.$h = 67),
    f = 33 + s.$h,
    D.Dm9f(BLg_.H1[0], u, f, 0, 1 / BLg_.Mi),
    D.Dm9f(BLg_.H1[1], u, f + 400, 0, 1 / BLg_.Mi)) : (210 <= s.H0 && s.H0,
    0 < s.$h && (s.$h -= 30),
    s.$h < 0 && (s.$h = 0),
    f = 33 + s.$h,
    D.Dm9f(BLg_.H1[2], u, f, 0, 1 / BLg_.Mi)),
    s.qh[0] = u + 179,
    s.qh[1] = u + 179 + 347,
    e = 0; e < 8; e++)
        3 != s.join[e] && 13 != s.join[e] || 0 < s.ts[e].group && s.ts[e].group < 3 && (s.qh[s.ts[e].group - 1] -= 20);
    for (e = 0; e < 8; e++)
        3 != s.join[e] && 13 != s.join[e] || (x = f + 86,
        0 < s.ts[e].group && s.ts[e].group < 3 && (y = s.qh[s.ts[e].group - 1],
        s.Kt = y,
        s.qh[s.ts[e].group - 1] += 40),
        0 != s.io[e] && 1 == s.be || !(0 == s.io[e] || 200 < s.H0 && s.H0 < 210) ? D.Dm9f(BLg_.s1[1], y, x, 0, 1 / BLg_.Mi) : (r = T7ES.s0[s.eo[e]],
        D.Dm9f(r.Ee, y + r.Fe, x, 0, 1 / r.ti)),
        D.S6nY(3 == s.join[e] ? s.Le[1 + e] : s.Le[0], y + 15 - 54 + 60, x + 45 - 2 + (19 - JXAJ) / 2, "Itbg", 1 == s.ts[e].group ? D.OuCn[1] : D.OuCn[2]));
    for (e = 0; e < 2; e++)
        g = "x " + Math.floor(s.so[e] / 100) + "." + Math.floor(s.so[e] % 100 / 10),
        D.S6nY(g, u + 231 + 347 * e + 24, f + 154 + (16 - JXAJ) / 2, "Itbg", D.OuCn[0]);
    for (s.qh[0] = u + 179 - 120 - 20,
    s.qh[1] = u + 179 + 347 - 120 - 20,
    i = 0; i < 2; i++) {
        for (e = 0; e < s.Rh; e++)
            x = e < 6 ? (y = s.qh[i] + 48 * e,
            f + 215) : (y = s.qh[i] + 48 * (e - 6) + 24,
            f + 306),
            s.Kt = y,
            s.$t = x,
            e == s.Rh - 1 ? D.Dm9f(BLg_.s1[22], y, x, 0, 1 / BLg_.Mi) : e == s.Rh - 2 ? D.Dm9f(BLg_.s1[23], y, x, 0, 1 / BLg_.Mi) : (l = s.Zh[e],
            D.Dm9f(l.Ee, y + l.Fe, x, 0, 1 / l.ti)),
            D.Dm9f(BLg_.H1[3], y + 3, x + 46, 0, 1 / BLg_.Mi),
            D.Dm9f(BLg_.H1[3], y + 3, x + 64, 0, 1 / BLg_.Mi),
            0 == s.Oh[e + i * s.Rh] ? (g = "" + s.Oh[e + i * s.Rh],
            D.S6nY(g, y + 3 + 17, x + 46 + (16 - JXAJ) / 2, "Itbg", D.OuCn[1]),
            D.S6nY("--", y + 3 + 17, x + 64 + (16 - JXAJ) / 2, "Itbg", D.OuCn[1])) : (g = "" + s.Oh[e + i * s.Rh],
            D.S6nY(g, y + 3 + 17, x + 46 + (16 - JXAJ) / 2, "Itbg", D.OuCn[0]),
            g = "" + s.zh[e + i * s.Rh],
            D.S6nY(g, y + 3 + 17, x + 64 + (16 - JXAJ) / 2, "Itbg", D.OuCn[0 != s.zh[e + i * s.Rh] ? 0 : 1]));
        -1 != s.ho[i] && (0 == s.ho[i] || 6 == s.ho[i] ? (o = D.E9px(BLg_.xi[s.ho[i] + 18]) / BLg_.Mi,
        D.Dm9f(BLg_.xi[s.ho[i] + 18], u + 345 + 347 * i - o, f + 192, 0, 1 / BLg_.Mi)) : (o = D.E9px(BLg_.xi[s.ho[i] + 18]) / BLg_.Mi,
        a = D.E9px(BLg_.xi[s.oo[i] + 15]) / BLg_.Mi,
        D.Dm9f(BLg_.xi[s.ho[i] + 18], u + 345 + 347 * i - o - a, f + 192, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.xi[s.oo[i] + 15], u + 345 + 347 * i - a, f + 192, 0, 1 / BLg_.Mi)))
    }
    if (200 == s.H0) {
        if (0 < s.de ? s.Ph-- : 0 < s.R0 && s.Ph++,
        6 < s.Ph && (s.Ph = 0),
        s.Ph < 0 && (s.Ph = 6),
        0 == s.Ph && (UH3n(s, u + 80 + 347 * s.Hh, f + 150, 208, 25),
        (s.right || s.left) && (s.Hh = 1 - s.Hh),
        0 < s.attack && (s.so[s.Hh] += 50,
        300 < s.so[s.Hh]) && (s.so[s.Hh] = 100),
        0 < s.fe) && (s.so[s.Hh] -= 50,
        s.so[s.Hh] < 100) && (s.so[s.Hh] = 300),
        0 < s.Ph && s.Ph < 5 && (i = 2 < s.Ph ? 4 : 5,
        0 < s.right && (s.Jh++,
        s.Jh > i) && (s.Jh = 0,
        s.Hh = 1 - s.Hh),
        0 < s.left && (s.Jh > i && (s.Jh = i),
        s.Jh--,
        s.Jh < 0) && (s.Jh = i,
        s.Hh = 1 - s.Hh),
        (0 < s.attack || 0 < s.fe || 0 < s.ah) && (s.ho[s.Hh] = -1,
        s.oo[s.Hh] = -1,
        lim0 = 0,
        c = -1,
        p = -1,
        1 == s.Ph && (c = s.Jh + s.Hh * s.Rh,
        lim = 10),
        2 == s.Ph && (p = s.Jh + s.Hh * s.Rh,
        lim = 30),
        3 == s.Ph && (c = s.Jh < 4 ? s.Jh + 6 + s.Hh * s.Rh : 10 + s.Hh * s.Rh,
        lim = 10),
        4 == s.Ph && (p = s.Jh + 6 + s.Hh * s.Rh,
        p = s.Jh < 4 ? s.Jh + 6 + s.Hh * s.Rh : 10 + s.Hh * s.Rh,
        lim = 30),
        0 < s.attack && 0 <= c && s.Oh[c]++,
        0 < s.attack && 0 <= p && s.zh[p]++,
        0 < s.ah && (0 <= c && (s.Oh[c] += 5),
        s.Oh[c] > lim && s.Oh[c] < lim + 5 && (s.Oh[c] = lim),
        0 <= p && (s.zh[p] += 5),
        s.zh[p] > lim) && s.zh[p] < lim + 5 && (s.zh[p] = lim),
        s.fe && 0 <= c && s.Oh[c]--,
        s.fe && 0 <= p && s.zh[p]--,
        0 <= c ? (s.Oh[c] < lim0 && (s.Oh[c] = lim),
        s.Oh[c] > lim && (s.Oh[c] = lim0)) : (s.zh[p] < lim0 && (s.zh[p] = lim),
        s.zh[p] > lim && (s.zh[p] = lim0))),
        (e = s.Jh) > i && (e = i),
        s.Ph < 3 ? (y = u + 347 * s.Hh + 48 * e + 39,
        x = f + 215,
        s.Kt = y,
        s.$t = x,
        UH3n(s, y + 3, x + 46 + 18 * (s.Ph - 1), 34, 16)) : (y = u + 347 * s.Hh + 48 * e + 24 + 39,
        x = f + 306,
        s.Kt = y,
        s.$t = x,
        UH3n(s, y + 3, x + 46 + 18 * (s.Ph - 3), 34, 16))),
        5 == s.Ph && (UH3n(s, u + 43 + 347 * s.Hh, f + 396, 272, 25),
        (s.right || s.left) && (s.Hh = 1 - s.Hh),
        0 < s.attack)) {
            for (XYSz.D(0, 1),
            s.H0 = 210,
            s.ao = 10,
            s.attack = 0,
            e = 0; e < 2 * s.Rh; e++)
                s.no[e] = s.Oh[e],
                s.ro[e] = s.zh[e];
            s.lo = s.co[s.Hh],
            s.do = s._o[s.Hh]
        }
        6 == s.Ph && (UH3n(s, u + 301, f + 441, 106, 24),
        0 < s.attack && (s.H0 = 202,
        s.uo = 2,
        s.attack = 0,
        XYSz.D(0, 1)),
        0 < s.left ? (s.Ph--,
        s.Hh = 0) : 0 < s.right && (s.Ph--,
        s.Hh = 1),
        0 < s.fe) && (s.H0 = 3,
        s.fo = 0)
    }
    if (201 == s.H0) {
        for (2 == s.be && (s.be = 1),
        o = 0; o < 8; o++)
            if (1 == s.io[o]) {
                for (s.we = 0,
                a = 1; a < T7ES._e; a++) {
                    for (s.De = 0,
                    zz = 0; zz < 8; zz++)
                        s.eo[zz] == a && (s.De = 1);
                    0 == T7ES.s0[a].type && 0 == s.De && T7ES.s0[a].id < 30 && (s.Ve[s.we] = a,
                    s.we++)
                }
                s.eo[o] = s.Ve[s.ye(290, s.we)],
                s.ts[o].s0 = T7ES.s0[s.eo[o]]
            }
        s.H0 = 202,
        s.uo = 2
    }
    if (210 <= s.H0 && s.H0 < 220) {
        let t = 226 - (ZcYj - 794) / 2;
        if (t < 0 && (t = 0),
        y = 0 == s.Hh ? (s.Qh < t && (s.Qh += s.mo),
        s.Qh > t && (s.Qh = t),
        s.Qh - 216 + (ZcYj - 794) / 2) : (s.Qh > -t && (s.Qh -= s.mo),
        s.Qh < -t && (s.Qh = -t),
        s.Qh + 759 + (ZcYj - 794) / 2),
        s.Kt = y,
        x = 65,
        s.$t = x,
        D.Dm9f(BLg_.Q1, y, x, 0, 1 / BLg_.Mi),
        s.fe) {
            for (e = 0; e < 2 * s.Rh; e++)
                s.Oh[e] = s.no[e],
                s.zh[e] = s.ro[e];
            s.co[s.Hh] = s.lo,
            s._o[s.Hh] = s.do,
            s.H0 = 200
        }
        if (-1 != s.co[s.Hh] && UH3n2(s, y + 44 + 2, 2 + x + 79 + 22 * s.co[s.Hh] + 22, 161, 19),
        -1 != s._o[s.Hh] && UH3n2(s, 2 + y + 44, 2 + x + 237 + 22 * s._o[s.Hh], 161, 19),
        0 <= s.ao && s.ao < 10) {
            if (0 <= s.ao && s.ao < 5) {
                if (UH3n(s, y + 44, x + 79 + 22 * s.ao, 165, 23),
                0 < s.attack) {
                    if (0 < s.ao && s.ao < 4) {
                        for (s.co[s.Hh] = s.ao - 1,
                        -1 == s._o[s.Hh] && (s._o[s.Hh] = 0),
                        a = s.co[s.Hh] + 1,
                        i = s.Hh * s.Rh,
                        o = s._o[s.Hh] * s.Rh,
                        e = 0; e < s.Rh; e++)
                            n = Math.floor(s.xh[e + o] * a / 3),
                            (h = Math.floor(s.Gh[e + o] * a / 3)) < 1 && 0 < n && (h = 1),
                            s.Oh[e + i] = h,
                            s.zh[e + i] = n - h,
                            s.zh[e + i] < 0 && (s.zh[e + i] = 0);
                        s.oo[s.Hh] = s.ao - 1,
                        s.ho[s.Hh] = s._o[s.Hh] + 1
                    }
                    if (0 == s.ao) {
                        for (s.co[s.Hh] = -1,
                        s._o[s.Hh] = -1,
                        i = s.Hh * s.Rh,
                        e = 0; e < s.Rh; e++)
                            s.Oh[e + i] = 0,
                            s.zh[e + i] = 0;
                        s.ho[s.Hh] = 0
                    }
                    if (4 == s.ao) {
                        for (s.co[s.Hh] = -1,
                        s._o[s.Hh] = -1,
                        i = s.Hh * s.Rh,
                        e = 0; e < s.Rh; e++)
                            s.Oh[e + i] = 2,
                            s.zh[e + i] = 30;
                        s.Oh[7 + i] = 1,
                        s.zh[7 + i] = 15,
                        s.Oh[9 + i] = 3,
                        s.Oh[10 + i] = 3,
                        s.ho[s.Hh] = 6
                    }
                }
            } else if (5 <= s.ao && s.ao < 10 && (UH3n(s, y + 44, x + 237 + 22 * (s.ao - 5), 165, 23),
            0 < s.attack))
                for (-1 == s.co[s.Hh] && (s.co[s.Hh] = 0),
                s.ho[s.Hh] = s.ao - 4,
                s.oo[s.Hh] = s.co[s.Hh],
                s._o[s.Hh] = s.ao - 5,
                a = s.co[s.Hh] + 1,
                i = s.Hh * s.Rh,
                o = s._o[s.Hh] * s.Rh,
                e = 0; e < s.Rh; e++)
                    n = Math.floor(s.xh[e + o] * a / 3),
                    (h = Math.floor(s.Gh[e + o] * a / 3)) < 1 && 0 < n && (h = 1),
                    s.Oh[e + i] = h,
                    s.zh[e + i] = n - h,
                    s.zh[e + i] < 0 && (s.zh[e + i] = 0);
            0 < s.de && s.ao--,
            0 < s.R0 && s.ao++,
            s.ao < 0 && (s.ao = 10)
        } else if (10 == s.ao)
            UH3n(s, y + 22, x + 368, 83, 24),
            0 < s.right && s.ao++,
            0 < s.de && s.ao--,
            0 < s.R0 && (s.ao = 0),
            0 < s.attack && (s.H0 = 200);
        else if (11 == s.ao && (UH3n(s, y + 122, x + 368, 106, 24),
        0 < s.de && (s.ao -= 2),
        0 < s.R0 && (s.ao = 0),
        0 < s.left && s.ao--,
        0 < s.attack)) {
            for (e = 0; e < 2 * s.Rh; e++)
                s.Oh[e] = s.no[e],
                s.zh[e] = s.ro[e];
            s.H0 = 200,
            s.attack = 0,
            XYSz.D(2, 1)
        }
    } else
        0 < s.Qh ? (s.Qh -= s.mo,
        s.Qh < 0 && (s.Qh = 0)) : s.Qh < 0 && (s.Qh += s.mo,
        0 < s.Qh) && (s.Qh = 0);
    if (203 == s.H0 && FouV.di && SplitScreenMenu(),
    202 == s.H0)
        if (s.Te(),
        y = 3,
        x = 3,
        s.Kt = y,
        s.$t = x,
        1 < s.po && FouV.di ? D.Dm9f(BLg_.W1, y, x, 0, 1 / BLg_.ie) : (D.Dm9f(BLg_.e1[8], y, x, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.e1[15], y, x + 156, 0, 1 / BLg_.Mi)),
        0 == s.uo && D.Dm9f(BLg_.e1[9], y + 89, x + 13, 0, 1 / BLg_.Mi),
        1 == s.uo && D.Dm9f(BLg_.e1[10], y + 61, x + 36, 0, 1 / BLg_.Mi),
        2 == s.uo && D.Dm9f(BLg_.e1[11], y + 71 / 3, x + 61, 0, 1 / BLg_.Mi),
        0 < s.be && D.Dm9f(BLg_.e1[52], y + 776 / 3, x + 60, 0, 1 / BLg_.Mi),
        3 == s.uo && D.Dm9f(BLg_.e1[12], y + 12, x + 84, 0, 1 / BLg_.Mi),
        4 == s.uo && D.Dm9f(BLg_.e1[13], y + 34, x + 108, 0, 1 / BLg_.Mi),
        5 == s.uo && D.Dm9f(BLg_.e1[14], y + 98, x + 134, 0, 1 / BLg_.Mi),
        1 < s.po && FouV.di ? (5 == s.uo && D.Dm9f(BLg_.Z1, y + 10, x + 132, 0, 1 / BLg_.Mi),
        6 == s.uo && D.Dm9f(BLg_.e1[14], y + 98, x + 158, 0, 1 / BLg_.Mi),
        D.S6nY(Sh7E.So ? "Yes" : "No", y + 183 + 54, x + 136 + (16 - JXAJ) / 2, "Itbg", D.OuCn[0])) : 5 == s.uo && D.Dm9f(BLg_.e1[14], y + 98, x + 134, 0, 1 / BLg_.Mi),
        1 == s.Ie && (s.Ce = 100),
        D.S6nY(100 == s.Ce ? "Random" : T7ES.Ae[s.Ce].name.replaceAll("_", " "), y + 167 + 61, x + 88 + (16 - JXAJ) / 2, "Itbg", D.OuCn[0]),
        D.S6nY(2 == s.ve ? "Easy" : 1 == s.ve ? "Normal" : (s.ve,
        "Difficult"), y + 167 + 45, x + 112 + (16 - JXAJ) / 2, "Itbg", D.OuCn[0]),
        0 < s.de && (s.uo--,
        s.uo < 0) && (s.uo = 1 < s.po && FouV.di ? 6 : 5),
        0 < s.R0 && (s.uo = (s.uo + 1) % (1 < s.po && FouV.di ? 7 : 6)),
        -1 == s.ve && (s.ve = 0),
        3 == s.uo && (0 < s.attack || 0 < s.right ? (s.Ie = 0,
        s.attack = 0,
        s.right = 0,
        100 == s.Ce ? s.Ce = 0 : (s.Ce++,
        s.Ce == T7ES.Ue && (s.Ce = 100,
        s.Ie = 1))) : 0 < s.left && (s.Ie = 0,
        s.left = 0,
        100 == s.Ce ? s.Ce = T7ES.Ue - 1 : (s.Ce--,
        -1 == s.Ce && (s.Ce = 100,
        s.Ie = 1)))),
        4 == s.uo && ((0 < s.attack || 0 < s.right) && (s.attack = 0,
        s.right = 0,
        s.ve--,
        s.ve < 0) && (s.ve = 2),
        0 < s.left) && (s.left = 0,
        s.ve++,
        2 < s.ve) && (s.ve = 0),
        2 == s.uo && (0 < s.right ? (s.right = 0) < s.be ? s.be = 0 : s.be = 1 : 0 < s.left && ((s.left = 0) < s.be ? s.be = 0 : s.be = 1)),
        0 < s.fe)
            s.H0 = 200;
        else if (0 < s.attack) {
            for (e = 0; e < 2 * s.Rh; e++)
                0 < s.Oh[e] ? s.bo[e] = s.Oh[e] + s.zh[e] : s.bo[e] = 0,
                s.Eo[e] = s.Oh[e];
            if (s.attack = 0,
            XYSz.D(1, 1),
            0 == s.uo) {
                for (1 == s.be && (s.be = 2),
                Sh7E.Fo = 1 < s.po && FouV.di && Sh7E.So,
                s.Lo(),
                s.Bo = 0,
                s.bh = 0,
                s.H0 = 0,
                o = 0; o < 400; o++)
                    s.Ke[o] = !1;
                for (1 == s.Ie && (s.Ce = s.ye(291, T7ES.Ue)),
                t = s.Ce,
                o = 0; o < 400; o++)
                    s.Ke[o] && 0 == s.ts[o].group && (s.ts[o].group = o + 10);
                for (s.bs = 0,
                s.Es = 0,
                s.Fs = 0,
                s.Ls = 0,
                s.Bs = 0,
                s.Ms = 0,
                s.ys = 0,
                s.ws = 0,
                s.Ds = 0,
                s.Vs = 0,
                T7ES.Ae[s.Ce].Ts || T7ES.Ae[s.Ce].ks || T7ES.Ae[s.Ce].Is(),
                o = 0; o < 8; o++)
                    10 < s.join[o] ? (d = s.ts[o].group,
                    s.ts[10 + o].hs(s.ts[o].s0, 350, 0, 300),
                    s.ts[10 + o].group = d,
                    s.ts[10 + o].Mo = d,
                    s.Ke[10 + o] = !0,
                    s.ts[10 + o].ds = 75,
                    1 == s.ts[10 + o].group ? s.ts[10 + o].x = 100 : s.ts[10 + o].x = T7ES.Ae[t].w - 100,
                    s.ts[10 + o].z = s.ye(293, T7ES.Ae[t]._s - T7ES.Ae[t].us) + T7ES.Ae[t].us,
                    s.ts[10 + o].fs = s.ts[10 + o].x,
                    s.ts[10 + o].gs = s.ts[10 + o].z,
                    s.ts[10 + o].os = 200,
                    1 == s.$s && (s.ts[10 + o].os = 500),
                    s.ts[10 + o].Ss = 10 + o,
                    s.ts[10 + o].yo = s.so[s.ts[10 + o].group - 1]) : 0 < s.join[o] && (d = s.ts[o].group,
                    s.ts[o].hs(s.ts[o].s0, 400, -50, 300),
                    s.ts[o].group = d,
                    s.ts[o].Mo = d,
                    s.Ke[o] = !0,
                    s.ts[o].ds = 75,
                    1 == s.ts[o].group ? s.ts[o].x = 100 : s.ts[o].x = T7ES.Ae[t].w - 100,
                    s.ts[o].z = s.ye(295, T7ES.Ae[t]._s - T7ES.Ae[t].us) + T7ES.Ae[t].us,
                    s.ts[o].y = 0,
                    s.ts[o].fs = s.ts[o].x,
                    s.ts[o].gs = s.ts[o].z,
                    s.ts[o].ps = 0,
                    s.ts[o].os = 200,
                    1 == s.$s && (s.ts[o].os = 500),
                    s.ts[o].Ss = o,
                    s.ts[o].yo = s.so[s.ts[o].group - 1]);
                for (s.Cs = 1,
                s.As = 0,
                s.wo = 0,
                s.Ti(),
                o = 20; o < 400; o++)
                    s.Ke[o] || s.ts[o].vs();
                QAAV(s)
            } else
                1 == s.uo ? (s.fo = 0,
                s.H0 = 3,
                s.Ce = 100,
                s.Ie = 1) : 2 == s.uo ? s.H0 = 201 : 1 < s.po && FouV.di && 5 == s.uo ? (s.H0 = 203,
                XYSz.D(1, 1)) : s.uo == (1 < s.po && FouV.di ? 6 : 5) && (s.H0 = 10,
                QAAV(s),
                FouV.F = 0)
        }
    (0 < s.attack || 0 < s.ah) && XYSz.D(0, 1),
    0 < s.fe && XYSz.D(2, 1)
}
function UH3n(t, s, e, i, o) {
    UH3n2(t, s, e, i, o, t.Qe % 10 < 5 ? 16777215 : 5217279)
}
function UH3n2(t, s, e, i, o, a=16777215) {
    D.VfDU(s, e, i, o, a, 2)
}
class OWAt {
}
function QBes(t) {
    let s, e, i, o, a, h, n;
    for (s = 0; s < 22; s++)
        t.Do[s] = 0;
    for (s = 0; s < 2; s++)
        t.Vo[s] = 0,
        t.To[s] = 0,
        t.ko[s] = 0;
    for (s = 0; s < 400; s++)
        if (t.Ke[s]) {
            if (0 < t.ts[s].Mo && t.ts[s].Mo < 3 && 20 <= s && (i = t.ts[s].Mo - 1,
            30 <= (e = t.ts[s].s0.id) && e < 40 && 38 != e || 122 == e || 123 == e))
                for (o = 0; o < t.Rh; o++)
                    t.Wh[o] == e && t.Do[o + t.Rh * i]++;
            0 == t.ts[s].s0.type && 0 < t.ts[s].ls && (1 == t.ts[s].group ? (t.Vo[0]++,
            t.To[0] += t.ts[s].ls) : (t.Vo[1]++,
            t.To[1] += t.ts[s].ls))
        }
    for (i = 0; i <= t.Rh; i += t.Rh)
        for (o = 0; o < t.Rh; o++)
            if (0 < t.bo[o + i] && t.Eo[o + i] > t.Do[o + i])
                for (s = 20; s < 400; s++)
                    if (!t.Ke[s]) {
                        for (e = 0; e < T7ES._e; e++)
                            if (T7ES.s0[e].id == t.Wh[o]) {
                                t.Ke[s] = !0,
                                t.ts[s].hs(T7ES.s0[e], 350, 0, 300),
                                t.ts[s].z = t.ye(296, T7ES.Ae[t.Ce]._s - T7ES.Ae[t.Ce].us) + T7ES.Ae[t.Ce].us,
                                0 == i ? 0 == t.ts[s].s0.type ? t.ts[s].x = -100 : t.ts[s].x = 50 : 0 == t.ts[s].s0.type ? t.ts[s].x = T7ES.Ae[t.Ce].w + 100 : t.ts[s].x = T7ES.Ae[t.Ce].w - 50,
                                t.ts[s].fs = t.ts[s].x,
                                t.ts[s].gs = t.ts[s].z,
                                h = 500,
                                a = t.Wh[o],
                                0 == i && 0 == t.ts[s].s0.type && (t.ts[s].Io = 140,
                                37 == a) && (t.ts[s].Io = 84),
                                36 == a && (h = 250),
                                37 != a && 35 != a && 32 != a || (h = 200),
                                39 != a && 33 != a || (h = 150),
                                34 == a && (h = 100),
                                31 != a && 30 != a || (h = 50),
                                122 == a && (h = 200),
                                t.ts[s].os = 500,
                                t.ts[s].ns = t.ts[s].ls = t.ts[s].rs = h,
                                t.ts[s].Ss = s,
                                0 == t.ts[s].s0.type || 5 == t.ts[s].s0.type ? (t.ts[s].ds = 20,
                                t.ts[s].x > Math.floor(T7ES.Ae[t.Ce].w / 2) ? t.ts[s].Ws = 1 : t.ts[s].Ws = 0,
                                t.ts[s].group = Math.floor(i / t.Rh) + 1,
                                t.ts[s].Mo = Math.floor(i / t.Rh) + 1,
                                t.ts[s].y = -300,
                                t.ts[s].ps = t.ts[s].y,
                                t.ts[s].Os = 0) : (t.ts[s].ds = 0,
                                t.ts[s].group = 0,
                                t.ts[s].Mo = Math.floor(i / t.Rh) + 1,
                                t.ts[s].y = -300,
                                t.ts[s].ps = t.ts[s].y),
                                t.bo[o + i]--;
                                break
                            }
                        break
                    }
    for (s = 0,
    i = 0; i < 2; i++) {
        for (o = 0; o < t.Rh - 2; o++)
            t.ko[i] += t.bo[o + s];
        s += t.Rh
    }
    t.Co = 1,
    0 < t.ko[0] && 0 < t.ko[1] && (t.Co = 0),
    0 < t.Vo[0] && 0 < t.Vo[1] && (t.Co = 0),
    n = `Man: ${t.Vo[0]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HP: ${t.To[0]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reserve: ${t.ko[0]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Die: ` + t.jh[0],
    D.VLeA(n, 5, 531 + (19 - JXAJ) / 2, "OkQn", "#AFAFFF"),
    n = `Man: ${t.Vo[1]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HP: ${t.To[1]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reserve: ${t.ko[1]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Die: ` + t.jh[1],
    D.VLeA(n, ZcYj - 5, 531 + (19 - JXAJ) / 2, "KrcT", "#FFAAAA"),
    n = "",
    (e = 0) == t.ho[e] ? n = "Zero" : 1 == t.ho[e] ? n = "Balanced" : 2 == t.ho[e] ? n = "Inferior" : 3 == t.ho[e] ? n = "Ranged attack" : 4 == t.ho[e] ? n = "Melee attack" : 5 == t.ho[e] ? n = "Giant" : 6 == t.ho[e] && (n = "Full"),
    0 < t.ho[e] && t.ho[e] < 6 && (0 == t.oo[e] && (n += "(S)"),
    1 == t.oo[e] && (n += "(M)"),
    2 == t.oo[e]) && (n += "(L)"),
    100 != t.so[e] && (-1 != t.ho[e] && (n += "    "),
    n += "Defense: " + Math.floor(t.so[e] / 100) + "." + Math.floor(t.so[e] % 100 / 10)),
    D.VLeA(n, 5, 514 + (19 - JXAJ) / 2, "OkQn", "#AFAFFF"),
    n = "",
    e = 1,
    0 == t.ho[e] ? n = "Zero" : 1 == t.ho[e] ? n = "Balanced" : 2 == t.ho[e] ? n = "Inferior" : 3 == t.ho[e] ? n = "Ranged attack" : 4 == t.ho[e] ? n = "Melee attack" : 5 == t.ho[e] ? n = "Giant" : 6 == t.ho[e] && (n = "Full"),
    0 < t.ho[e] && t.ho[e] < 6 && (0 == t.oo[e] && (n += "(S)"),
    1 == t.oo[e] && (n += "(M)"),
    2 == t.oo[e]) && (n += "(L)"),
    100 != t.so[e] && (-1 != t.ho[e] && (n += "    "),
    n += "Defense: " + Math.floor(t.so[e] / 100) + "." + Math.floor(t.so[e] % 100 / 10)),
    D.VLeA(n, ZcYj - 5, 514 + (19 - JXAJ) / 2, "KrcT", "#FFAAAA")
}
class JKW0 {
}
function ChAz(e) {
    let i, o, a, h, t, n;
    for (i = 0; i < 5; i++)
        e.Ao[i] = 0;
    if (e.vo = -1,
    e.Xo = 0,
    e.Yo = 0,
    e.No = 0,
    e.Uo = 0,
    e.Ro = 0,
    e.xo = 0,
    e.Go = e.fo,
    3 == e.H0) {
        for (NcPr(),
        i = 0; i < 8; i++)
            e.join[i] = 0,
            e.Oo[i] = !1,
            e.eo[i] = -1,
            e.Oo[i] = !0;
        if (1 == e.$s)
            for (i = 0; i < 20; i++)
                e.ts[i].group = 1;
        if (4 == e.$s) {
            for (i = 0; i < 4; i++)
                e.ts[i].group = e.ts[i + 10].group = 1;
            for (i = 4; i < 8; i++)
                e.ts[i].group = e.ts[i + 10].group = 2
        }
        e.Go = 0,
        e.fo = 0,
        e.H0 = 1
    } else if (2 == e.H0)
        e.Go = 0,
        e.fo = 3,
        e.H0 = 1,
        2 == e.be && CHARMENU_reset_random(e);
    else {
        for (i = 0; i < e.Zs; i++)
            (e.ts[i].group < 0 || 4 < e.ts[i].group) && (e.ts[i].group = 0);
        if (e.px = (ZcYj - 705) / 2,
        e.Yo = 33,
        D.Dm9f(BLg_.U1, e.px, e.Yo, 0, 1 / BLg_.Mi),
        0 == e.fo)
            for (i = 0; i < 8; i++)
                0 == e.join[i] && e.xo++;
        else
            e.xo = -1;
        for (i = 0; i < 8; i++)
            0 == e.join[i] && e.No++;
        for (i = 0; i < 8; i++) {
            var r = Math.floor(i / 4)
              , l = FouV.si && (3 == FouV.ai && (0 == i || 1 == i || 3 == i) || 2 == FouV.ai && (0 == i || 1 == i) || 1 == FouV.ai && 0 == i);
            if (0 < e.join[i] ? e.join[i] < 11 ? ZX3_(e, i, e.vi[i], "#FFFFFF") : ZX3_(e, i, "Computer", "#FF9B9B") : 0 == e.fo ? 8 == e.No && !e.zo && i % 4 < 3 || ZX3_(e, i, "Join?", D.Vfm2(25 + e.Wo % 6 * 30, 70 + e.Wo % 6 * 30, 255)) : ZX3_(e, i, "----", "#FFFFFF"),
            0 == e.join[i] && 0 == e.fo)
                if (EviP(e, i),
                IAlU(e),
                45 == e.Zo ? e.Qe % 5 < 3 ? D.Dm9f(BLg_.R1, 107 + i % 4 * 153 + e.px, 61 + 212 * r + 26 + e.Yo, 0, 1 / BLg_.ie) : D.Dm9f(BLg_.G1, 107 + i % 4 * 153 + e.px, 61 + 212 * r + 26 + e.Yo, 0, 1 / BLg_.ie) : 0 <= e.Zo && D.Dm9f(BLg_.cm[Math.floor(e.Zo / 15)], 141 + i % 4 * 153 + e.px, 61 + 212 * r + 31 + e.Yo, 0, 1 / BLg_.ie),
                0 < e.ts[i].attack || l)
                    e.Oo[i] && !l || 0 != e.Po || (e.join[i] = 1,
                    XYSz.D(0, 1)),
                    e.Oo[i] = !0;
                else {
                    if ((e.fe || e.ge) && 8 == e.xo) {
                        XYSz.D(2, 1),
                        e.H0 = 10,
                        QAAV(e);
                        break
                    }
                    e.Oo[i] = !1
                }
            if (1 == e.join[i]) {
                if (0 <= e.eo[i] && !e.ue(e.eo[i], e.ts[i].Jo) && (e.eo[i] = -1),
                0 <= e.eo[i] ? (Jsh0(e, i, e.ts[i].s0.qe),
                Y2UB(e, i, e.ts[i].s0.name, e.me(), e.ts[i].s0.Ho)) : (D.Dm9f(BLg_.N1, 107 + i % 4 * 153 + e.px, 61 + 212 * r + e.Yo, 0, 1 / BLg_.ie),
                Y2UB(e, i, "Random", e.me(), 100)),
                0 < e.ts[i].right) {
                    if (!e.Oo[i])
                        for (; e.eo[i]++,
                        e.eo[i] >= T7ES._e && (e.eo[i] = -1),
                        -1 != e.eo[i]; )
                            if (e.ue(e.eo[i], e.ts[i].Jo)) {
                                e.ts[i].s0 = T7ES.s0[e.eo[i]];
                                break
                            }
                    e.Oo[i] = !0
                } else if (0 < e.ts[i].left) {
                    if (!e.Oo[i])
                        for (; e.eo[i]--,
                        -1 != e.eo[i]; )
                            if (e.eo[i] < -1 && (e.eo[i] = T7ES._e - 1),
                            e.ue(e.eo[i], e.ts[i].Jo)) {
                                e.ts[i].s0 = T7ES.s0[e.eo[i]];
                                break
                            }
                    e.Oo[i] = !0
                } else
                    0 < e.ts[i].de ? (e.Oo[i] || (e.eo[i] = -1),
                    e.Oo[i] = !0) : 0 < e.ts[i].attack || l ? (e.Oo[i] && !l || (XYSz.D(0, 1),
                    1 == e.$s ? e.join[i] = 3 : e.join[i] = 2),
                    e.Oo[i] = !0) : 0 < e.ts[i].fe || 0 < e.ts[i].Qo ? ((!e.Oo[i] || 0 < e.ts[i].Qo) && (XYSz.D(2, 1),
                    e.join[i] = 0,
                    OHwl(i)),
                    e.Oo[i] = !0) : e.Oo[i] = !1;
                e.eo[i] < 0 ? e.io[i] = 1 : e.io[i] = 0
            }
            if (2 == e.join[i]) {
                let t = e.jo = 0, s;
                for (s = 0; s < 8; s++)
                    3 == e.join[s] && t++;
                if (7 == t && (e.jo = 1),
                e.vo = -1,
                1 == e.jo && (0 == e.$s || 4 == e.$s))
                    for (o = 0; o < 8; o++)
                        e.join[o] % 10 == 3 && o != i && (0 == e.ts[o].group ? e.vo = -2 : -1 == e.vo ? e.vo = e.ts[o].group : 0 <= e.vo && e.ts[o].group != e.vo && (e.vo = -2));
                for (0 <= e.eo[i] ? (Jsh0(e, i, e.ts[i].s0.qe),
                Y2UB(e, i, e.ts[i].s0.name, "#FFFFFF", e.ts[i].s0.Ho)) : (D.Dm9f(BLg_.N1, 107 + i % 4 * 153 + e.px, 61 + 212 * r + e.Yo, 0, 1 / BLg_.ie),
                Y2UB(e, i, "Random", "#FFFFFF", 100)); e.ts[i].group == e.vo || 4 == e.$s && (0 == e.ts[i].group || 2 < e.ts[i].group); )
                    e.ts[i].group = (e.ts[i].group + 1) % 5;
                if (SEnK(e, i, e.me()),
                0 < e.ts[i].de)
                    e.Oo[i] || (e.ts[i].group = 0),
                    e.Oo[i] = !0;
                else if (0 < e.ts[i].right) {
                    if (!e.Oo[i])
                        for (e.ts[i].group = (e.ts[i].group + 1) % 5; e.ts[i].group == e.vo || 4 == e.$s && (0 == e.ts[i].group || 2 < e.ts[i].group); )
                            e.ts[i].group = (e.ts[i].group + 1) % 5;
                    e.Oo[i] = !0
                } else if (0 < e.ts[i].left) {
                    if (!e.Oo[i])
                        for (e.ts[i].group--,
                        e.ts[i].group < 0 && (e.ts[i].group = 4); e.ts[i].group == e.vo || 4 == e.$s && (0 == e.ts[i].group || 2 < e.ts[i].group); )
                            e.ts[i].group--,
                            e.ts[i].group < 0 && (e.ts[i].group = 4);
                    e.Oo[i] = !0
                } else
                    0 < e.ts[i].attack || l ? (l && "vs" == FouV.hi && (e.ts[i].group = 0),
                    e.Oo[i] && !l || (XYSz.D(0, 1),
                    e.join[i] = 3),
                    e.Oo[i] = !0) : 0 < e.ts[i].fe || 0 < e.ts[i].Qo ? ((!e.Oo[i] || 0 < e.ts[i].Qo) && (e.join[i] = 1,
                    XYSz.D(2, 1)),
                    e.Oo[i] = !0) : e.Oo[i] = !1
            }
            3 == e.join[i] && (0 <= e.eo[i] ? (Jsh0(e, i, e.ts[i].s0.qe),
            Y2UB(e, i, e.ts[i].s0.name, "#FFFFFF", e.ts[i].s0.Ho)) : (Jsh0(e, i, BLg_.N1),
            Y2UB(e, i, "Random", "#FFFFFF", 100)),
            SEnK(e, i, "#FFFFFF"),
            0 == e.fo) && (0 < e.ts[i].fe && 0 == e.fo && 45 == e.Zo ? (e.Oo[i] || (1 == e.$s ? e.join[i] = 1 : e.join[i] = 2,
            XYSz.D(2, 1)),
            e.Oo[i] = !0) : 0 < e.ts[i].fe && e.Zo < 150 ? (e.Oo[i] || (e.Xo = 1),
            e.Oo[i] = !0) : e.Oo[i] = !1),
            3 == e.join[i] ? (e.Ke[i] = !0,
            e.Ro++) : e.Ke[i] = !1,
            0 != e.join[i] && 3 != e.join[i] || e.Uo++
        }
        if (0 < e.Ro && 8 == e.Uo ? (e.Zo--,
        (0 < e.Xo || FouV.si) && (e.Zo -= 25),
        8 == e.Ro && (e.Zo = 0)) : e.Zo = 45,
        8 != e.No || e.zo ? e.zo = !0 : ("en" == e.Ko ? D.Dm9f(BLg_.Gi[14], 842 / 3, 190, 0, 1 / BLg_.Mi) : D.Dm9f(BLg_.Gi[13], 842 / 3, 190, 0, 1 / BLg_.Mi),
        0 < e.left && (e.Ko = "en"),
        0 < e.right && (e.Ko = "ch")),
        e.Po = e.fo,
        4 == e.fo && FouV.di && MVtz(e),
        1 == e.fo) {
            e.$o = 0;
            var u = 218 + (ZcYj - 794) / 2;
            for (D.Dm9f(BLg_.O1, u, 10, 0, 1 / BLg_.ie),
            i = 0; i < 5; i++)
                e.qo[i] = 0;
            for (e.ta = 0,
            i = 0; i < 8; i++)
                e.Ke[i] ? 0 != e.ts[i].group && 0 != e.qo[e.ts[i].group] || e.qo[e.ts[i].group]++ : e.ta++;
            0 == e.ta && (e.fo = 3),
            e.qo[0] + (e.qo[1] + e.qo[2] + e.qo[3] + e.qo[4]) < 2 && 1 != e.$s ? e.ia = 1 : e.ia = 0,
            (-100 == e.ea || e.ea < e.ia || e.ea > e.ta) && (e.ea = e.ia);
            let t = 0
              , s = 0;
            for (i = 0; i < 8; i++)
                if (e.Ke[i])
                    if (e.ts[i].right || FouV.si && FouV.ni > e.ea)
                        0 != t || e.Oo[i] || 1 != e.Go || (e.ea++,
                        e.ea > e.ta && (e.ea = e.ia)),
                        e.Oo[i] = !0,
                        t = 1;
                    else if (0 == s && (e.ts[i].left || FouV.si && FouV.ni < e.ea))
                        e.Oo[i] || 1 != e.Go || (e.ea--,
                        e.ea < e.ia && (e.ea = e.ta)),
                        e.Oo[i] = !0,
                        s = 1;
                    else if (e.ts[i].attack || 2 == e.$s || 3 == e.$s || FouV.si && e.ea == FouV.ni) {
                        if (2 != e.$s && 3 != e.$s || (e.ea = e.ta,
                        e.Oo[i] = !1),
                        !e.Oo[i] && 1 == e.Go) {
                            if (2 != e.$s && 3 != e.$s && XYSz.D(1, 1),
                            e.fo = 2e3,
                            0 == e.ea) {
                                for (e.fo = 3,
                                e.sa = 0,
                                e.ha = 3,
                                2 == e.be && (e.be = 1),
                                a = 0; a < 8; a++)
                                    e.eo[a] < 0 ? e.io[a] = 1 : e.io[a] = 0;
                                for (h = 0; h < 500; h++)
                                    e.Ve[h] = 0;
                                for (a = 0; a < 8; a++)
                                    if (0 < e.io[a]) {
                                        for (e.we = 0,
                                        h = 1; h < T7ES._e; h++) {
                                            for (e.De = 0,
                                            n = 0; n < 8; n++)
                                                e.eo[n] == h && (e.De = 1);
                                            0 == T7ES.s0[h].type && 0 == e.De && T7ES.s0[h].id < 30 && (e.Ve[e.we] = h,
                                            e.we++)
                                        }
                                        e.eo[a] = e.Ve[e.ye(215, e.we)],
                                        e.ts[a].s0 = T7ES.s0[e.eo[a]]
                                    }
                                break
                            }
                            for (e.oa = e.ea,
                            o = 0; o < 8; o++)
                                !e.Ke[o] && 0 < e.oa && (e.oa--,
                                e.aa[e.ea - e.oa - 1] = o,
                                e.join[o] = 11);
                            e.na = 0,
                            e.Oo[i] = !0;
                            break
                        }
                        e.Oo[i] = !0
                    } else
                        e.Oo[i] = !1;
            for (o = 0; o <= 7; o++)
                D.S6nY("" + o, 43 + u + 35 * o + 15, 77 + (30 - JXAJ) / 2, "Itbg", o >= e.ia && o <= e.ta ? "#FFFFFF" : "#4f9bff"),
                e.ea == o && D.Dm9f(BLg_.J1, 43 + u + 35 * o, 77, 0, 1 / BLg_.ie)
        }
        if (2e3 == e.fo)
            e.fo = 2;
        else if (2 == e.fo || 3 == e.fo || 4 == e.fo) {
            for (2 == e.fo && IAlU(e),
            o = 0; o < e.ea; o++)
                i = e.aa[o],
                11 < e.join[i] && (0 <= e.eo[i] ? (Jsh0(e, i, e.ts[i].s0.qe),
                Y2UB(e, i, e.ts[i].s0.name, "#FF9B9B", e.ts[i].s0.Ho)) : (Jsh0(e, i, BLg_.N1),
                Y2UB(e, i, "Random", "#FF9B9B", 100))),
                12 < e.join[i] && SEnK(e, i, "#FF9B9B");
            if (11 == e.join[e.aa[e.na]]) {
                if (i = e.aa[e.na],
                0 <= e.eo[i] ? (Jsh0(e, i, e.ts[i].s0.qe),
                Y2UB(e, i, e.ts[i].s0.name, e.me(), e.ts[i].s0.Ho)) : (Jsh0(e, i, BLg_.N1),
                Y2UB(e, i, "Random", e.me(), 100)),
                0 < e.right)
                    for (; e.eo[i]++,
                    e.eo[i] >= T7ES._e && (e.eo[i] = -1),
                    -1 != e.eo[i]; )
                        if (e.ue(e.eo[i], -1)) {
                            e.ts[i].s0 = T7ES.s0[e.eo[i]];
                            break
                        }
                if (0 < e.left)
                    for (; e.eo[i]--,
                    -1 != e.eo[i]; )
                        if (e.eo[i] < -1 && (e.eo[i] = T7ES._e - 1),
                        e.ue(e.eo[i], -1)) {
                            e.ts[i].s0 = T7ES.s0[e.eo[i]];
                            break
                        }
                if (e.eo[i] < 0 ? e.io[i] = 1 : e.io[i] = 0,
                0 < e.de && (e.eo[i] = -1),
                1 == e.$o && (e.eo[i] = -1,
                2 != e.$s && (e.join[i] = 11),
                1 == e.$s && (e.join[i] = 11),
                e.$o = 0),
                0 < e.attack && (XYSz.D(0, 1),
                e.join[i] = 12,
                e.attack = 0,
                1 == e.$s))
                    if (e.join[i] = 13,
                    e.$o = 0,
                    e.eo[e.aa[e.na]] < 0 && (e.$o = 1),
                    e.na++,
                    e.na >= e.ea) {
                        for (e.fe = 0,
                        2 == e.be && (e.be = 1),
                        a = 0; a < 8; a++)
                            e.eo[a] < 0 ? e.io[a] = 1 : e.io[a] = 0;
                        for (h = 0; h < 500; h++)
                            e.Ve[h] = 0;
                        for (a = 0; a < 8; a++)
                            if (0 < e.io[a]) {
                                for (e.we = 0,
                                h = 1; h < T7ES._e; h++) {
                                    for (e.De = 0,
                                    n = 0; n < 8; n++)
                                        e.eo[n] == h && (e.De = 1);
                                    0 == T7ES.s0[h].type && 0 == e.De && T7ES.s0[h].id < 30 && (e.Ve[e.we] = h,
                                    e.we++)
                                }
                                e.eo[a] = e.Ve[e.ye(216, e.we)],
                                e.ts[a].s0 = T7ES.s0[e.eo[a]]
                            }
                        e.sa = 0,
                        e.ha = 3,
                        e.fo = 3
                    } else
                        e.join[e.aa[e.na]] = 11;
                if (0 < e.fe)
                    if (XYSz.D(2, 1),
                    (e.fe = 0) == e.na)
                        for (Jbbc(e),
                        o = 0; o < 8; o++)
                            11 == e.join[o] && (e.join[o] = 0);
                    else
                        e.na--,
                        e.join[e.aa[e.na]] = 12,
                        1 == e.$s && (e.join[e.aa[e.na]] = 11),
                        2 == e.$s && (e.join[e.aa[e.na]] = 11)
            }
            if (12 == e.join[e.aa[e.na]]) {
                if (not_allow_group = -1,
                e.na == e.ea - 1 && (0 == e.$s || 4 == e.$s))
                    for (i = 0; i < 8; i++)
                        e.join[i] % 10 == 3 && i != e.aa[e.na] && (0 == e.ts[i].group ? not_allow_group = -2 : -1 == not_allow_group ? not_allow_group = e.ts[i].group : 0 <= not_allow_group && e.ts[i].group != not_allow_group && (not_allow_group = -2));
                for (i = e.aa[e.na]; e.ts[i].group == not_allow_group || 4 == e.$s && (0 == e.ts[i].group || 2 < e.ts[i].group); )
                    e.ts[i].group = (e.ts[i].group + 1) % 5;
                if (SEnK(e, i, e.me()),
                0 < e.de)
                    e.ts[i].group = 0;
                else if (0 < e.right)
                    for (e.ts[i].group = (e.ts[i].group + 1) % 5; e.ts[i].group == not_allow_group || 4 == e.$s && (0 == e.ts[i].group || 2 < e.ts[i].group); )
                        e.ts[i].group = (e.ts[i].group + 1) % 5;
                if (0 < e.left)
                    for (e.ts[i].group--,
                    e.ts[i].group < 0 && (e.ts[i].group = 4); e.ts[i].group == not_allow_group || 4 == e.$s && (0 == e.ts[i].group || 2 < e.ts[i].group); )
                        e.ts[i].group--,
                        e.ts[i].group < 0 && (e.ts[i].group = 4);
                if (2 == e.$s && (e.ts[i].group = 0,
                e.attack = 1),
                0 < e.attack)
                    if (XYSz.D(0, 1),
                    e.attack = 0,
                    e.join[i] = 13,
                    e.$o = 0,
                    e.eo[e.aa[e.na]] < 0 && (e.$o = 1),
                    e.na++,
                    e.na >= e.ea) {
                        for (e.fe = 0,
                        2 == e.be && (e.be = 1),
                        a = 0; a < 8; a++)
                            e.eo[a] < 0 ? e.io[a] = 1 : e.io[a] = 0;
                        for (h = 0; h < 500; h++)
                            e.Ve[h] = 0;
                        for (a = 0; a < 8; a++)
                            if (0 < e.io[a]) {
                                for (e.we = 0,
                                h = 1; h < T7ES._e; h++) {
                                    for (e.De = 0,
                                    n = 0; n < 8; n++)
                                        e.eo[n] == h && (e.De = 1);
                                    0 == T7ES.s0[h].type && 0 == e.De && T7ES.s0[h].id < 30 && (e.Ve[e.we] = h,
                                    e.we++)
                                }
                                e.eo[a] = e.Ve[e.ye(217, e.we)],
                                e.ts[a].s0 = T7ES.s0[e.eo[a]]
                            }
                        e.sa = 0,
                        e.ha = 3,
                        e.fo = 3
                    } else
                        e.join[e.aa[e.na]] = 11;
                0 < e.fe && (XYSz.D(2, 1),
                e.fe = 0,
                e.join[i] = 11,
                e.$o = 0)
            }
        }
        if (3 == e.fo && 4 != e.$s) {
            let s = !1;
            for (let t = 0; t < 8; t++)
                if (0 < e.join[t] && 0 <= e.eo[t] && 1 == e.io[t]) {
                    s = !0;
                    break
                }
            var f;
            if (e.Kt = 3,
            e.$t = 3,
            D.Dm9f(BLg_.e1[8], 3, 3, 0, 1 / BLg_.Mi * .9),
            D.Dm9f(BLg_.e1[15], 3, 143.4, 0, 1 / BLg_.Mi * .9),
            0 != e.sa && 6 != e.sa || (e.ra ? D.S6nY("Press ← → to adjust Team Cost", ZcYj / 2, 18 + (19 - JXAJ) / 2, "Itbg", D.OuCn[1]) : D.S6nY("Press ← → to toggle the Cost-based setting", ZcYj / 2, 18 + (19 - JXAJ) / 2, "Itbg", D.OuCn[1])),
            0 == e.sa && D.Dm9f(BLg_.e1[9], 3 + 89 * .9, 3 + 13 * .9, 0, 1 / BLg_.Mi * .9),
            1 == e.sa && D.Dm9f(BLg_.e1[10], 57.9, 35.4, 0, 1 / BLg_.Mi * .9),
            2 == e.sa && (D.Dm9f(BLg_.e1[11], 24.3, 57.9, 0, 1 / BLg_.Mi * .9),
            D.S6nY("Press ← → to hide/reveal Random Character(s)", ZcYj / 2, 18 + (19 - JXAJ) / 2, "Itbg", D.OuCn[1])),
            0 < e.be && D.Dm9f(BLg_.e1[52], 235.8, 57, 0, 1 / BLg_.Mi * .9),
            3 == e.sa && D.Dm9f(BLg_.e1[12], 13.8, 3 + 84 * .9, 0, 1 / BLg_.Mi * .9),
            4 == e.sa && D.Dm9f(BLg_.e1[13], 33.6, 100.2, 0, 1 / BLg_.Mi * .9),
            1 == e.$s)
                5 == e.sa && D.Dm9f(BLg_.e1[14], 91.2, 3 + 134 * .9, 0, 1 / BLg_.Mi * .9);
            else {
                if (D.Dm9f(BLg_.Gi[3], 3, 3 + 131.33 * .9, 0, 1 / BLg_.Mi * .9),
                D.Dm9f(BLg_.Gi[4], 3, 142.194, 0, 1 / BLg_.Mi * .9),
                D.Dm9f(BLg_.Gi[5], 3, 164.1, 0, 1 / BLg_.Mi * .9),
                D.S6nY(`<span style="font-size:90%;">${e.la}s</span>`, e.Kt + 190.8, e.$t + 121.5 + (16 - JXAJ) / 2, "Itbg", "#ffffff"),
                D.S6nY(e.ra ? `<span style="font-size:90%;">₡${e.ca}</span>` : '<span style="font-size:90%;">----</span>', e.Kt + 232.047, e.$t + 143.1 + (16 - JXAJ) / 2, "Itbg", "#ffffff"),
                5 == e.sa)
                    D.Dm9f(BLg_.Gi[6], 24.9, 121.8, 0, 1 / BLg_.Mi * .9),
                    (0 < e.right || 0 < e.left || 0 < e.attack) && (c = 0 < e.right || 0 < e.attack ? 1 : -1,
                    d = (f = [60, 90, 120, 180, 300, 600]).indexOf(e.la),
                    e.la = f[-1 === d ? 0 < c ? 0 : f.length - 1 : (d + c + f.length) % f.length]);
                else if (6 == e.sa || 0 == e.sa) {
                    if (6 == e.sa && (D.Dm9f(BLg_.Gi[7], 14.4, 143.4, 0, 1 / BLg_.Mi * .9),
                    0 < e.attack) && (e.ra = !e.ra),
                    0 < e.right || 0 < e.left) {
                        var d = [300, 400, 500, 600, 700, 800, 1e3, 9999]
                          , c = 0 < e.right ? 1 : -1;
                        let t = d.indexOf(e.ca)
                          , s = (-1 == t ? 0 : t) + c;
                        s < 0 ? (e.ra ? (s = 0,
                        e.ra = !1) : (s = d.length - 1,
                        e.ra = !0),
                        e.ca = d[s]) : s >= d.length ? (e.ra ? (s = d.length - 1,
                        e.ra = !1) : (s = 0,
                        e.ra = !0),
                        e.ca = d[s]) : e.ra ? e.ca = d[s] : e.ra = !0
                    }
                } else
                    7 == e.sa ? (D.Dm9f(BLg_.Gi[8], 14.4, 165, 0, 1 / BLg_.Mi * .9),
                    0 < e.attack && (e.Xe = !e.Xe)) : 8 == e.sa ? (D.Dm9f(BLg_.Gi[9], 3 + 287 / 3 * .9, 165, 0, 1 / BLg_.Mi * .9),
                    0 < e.attack && (e.Ye = !e.Ye)) : 9 == e.sa ? (D.Dm9f(BLg_.Gi[10], 169.5, 165, 0, 1 / BLg_.Mi * .9),
                    0 < e.attack && (e.Ne = !e.Ne)) : 10 == e.sa && (D.Dm9f(BLg_.e1[14], 91.2, 188.4, 0, 1 / BLg_.Mi * .9),
                    0 < e.attack) && (XYSz.D(1, 1),
                    e.H0 = 10);
                e.ra && D.Dm9f(BLg_.Gi[11], 3 + 506 / 3 * .9, 147.9, 0, 1 / BLg_.Mi * .9),
                e.Xe && D.Dm9f(BLg_.Gi[11], 67.2, 169.5, 0, 1 / BLg_.Mi * .9),
                e.Ye && D.Dm9f(BLg_.Gi[11], 144, 169.5, 0, 1 / BLg_.Mi * .9),
                e.Ne && D.Dm9f(BLg_.Gi[11], 250.5, 169.5, 0, 1 / BLg_.Mi * .9),
                s && e.ra || D.Dm9f(BLg_.Gi[12], 169.5, 165, 0, 1 / BLg_.Mi * .9)
            }
            1 == e.Ie && (e.Ce = 100),
            1 != e.$s ? Y29U(e, 100 == e.Ce ? "Random" : T7ES.Ae[e.Ce].name, .9) : (e.da % 10 != 0 && (e.da = 10 * Math.floor(e.da / 10)),
            D.Dm9f(BLg_.e1[23], 13.8, 3 + 84 * .9, 0, 1 / BLg_.Mi * .9),
            3 == e.sa && D.Dm9f(BLg_.e1[22], 13.8, 3 + 84 * .9, 0, 1 / BLg_.Mi * .9),
            e.da / 10 < 5 ? FrDQ(e, "" + (Math.floor(e.da / 10) + 1), .9) : FrDQ(e, "Survival", .9));
            {
                function p(s) {
                    for (let t = 0; t < MiVw.length; t++)
                        if (!(MiVw[t].R <= Sh7E.K0 || MiVw[t].X[s]))
                            return;
                    return 1
                }
                1 == e.$s && (f = atob("U1RBR0Vf"),
                c = 2 == e.ve ? atob("X0VBU1k=") : 1 == e.ve ? atob("X05PUk1BTA==") : 0 == e.ve ? atob("X0RJRkZJQ1VMVA==") : atob("X0NSQVpZ"),
                50 != e.da || p(f + 3 + c) || (e.da = 20),
                40 != e.da || p(f + 4 + c) || (e.da = 30),
                30 != e.da || p(f + 3 + c) || (e.da = 20),
                20 != e.da || p(f + 2 + c) || (e.da = 10),
                10 != e.da || p(f + 1 + c) || (e.da = 0))
            }
            if (2 == e.ve ? ZIEt(e, "Easy", .9) : 1 == e.ve ? ZIEt(e, "Normal", .9) : 0 == e.ve ? ZIEt(e, "Difficult", .9) : -1 == e.ve && ZIEt(e, "CRAZY!", .9),
            IAlU(e),
            7 <= e.sa && e.sa <= 9 && (0 < e.left ? 7 == e.sa ? s && e.ra ? e.sa = 9 : e.sa = 8 : e.sa-- : 0 < e.right && (9 != e.sa && (e.sa++,
            s && e.ra || 9 != e.sa) || (e.sa = 7))),
            (0 < e.de || FouV.si && 0 < e.sa) && (1 == e.$s ? (e.sa--,
            e.sa < 0 && (e.sa = 5)) : 10 == e.sa ? e.sa = 8 : 7 <= e.sa && e.sa <= 9 ? e.sa = 6 : (e.sa--,
            e.sa < 0 && (e.sa = 10))),
            0 < e.R0 && (1 == e.$s ? e.sa = (e.sa + 1) % 6 : 6 == e.sa ? e.sa = 8 : 7 <= e.sa && e.sa <= 9 ? e.sa = 10 : e.sa = (e.sa + 1) % 11),
            e.Te(),
            0 < e.ha)
                e.ha--;
            else if (e._a || 0 < e.attack && 0 == e.sa || FouV.si && !FouV.ci && 0 == e.sa) {
                if (1 == e.be && (e.be = 2),
                Sh7E.Fo = 1 < e.po && FouV.di && Sh7E.So,
                e.Lo(),
                e.Bo = 0,
                e.bh = 0,
                e.ss = -1,
                0 == e.$s && (e.ss = e.la * SvvK + SvvK - 1),
                1 == e.$s)
                    for (e.ua = 70,
                    e.fa = 0,
                    e.qs = 0,
                    e.ga = 0,
                    (e.Ie = 0) == e.da ? e.Ce = 1 : 10 == e.da ? e.Ce = 2 : 20 == e.da ? e.Ce = 3 : 30 == e.da ? e.Ce = 4 : 40 == e.da ? e.Ce = 5 : 50 == e.da && (e.Ce = 6),
                    e.ma = -1,
                    e.pa = 0,
                    e.Sa = -1,
                    i = 0; i < e.ba; i++)
                        e.Ea[i] = e.Fa[i] = 0;
                for (e.H0 = 0,
                e._a ? (D.Sy7M(0, 0, ZcYj, I2Gw, 0),
                D.QZUl(),
                e._a = !1) : XYSz.D(1, 1),
                a = 10; a < e.Zs; a++)
                    e.Ke[a] = !1;
                if (1 == e.Ie && (e.Ce = e.ye(218, T7ES.Ue)),
                FouV.si && 0 <= FouV.oi)
                    for (a = 0; a < T7ES.Ue; a++)
                        if (T7ES.Ae[a].id == FouV.oi) {
                            e.Ce = a;
                            break
                        }
                for (e.La = 0,
                e.Ba = 0,
                e.pause = 0,
                s_hide_bb(),
                e.u = 1,
                t = e.Ce,
                a = 0; a < 8; a++)
                    10 < e.join[a] ? (tempi = e.ts[a].group,
                    e.ts[10 + a].hs(e.ts[a].s0, 350, 0, 300),
                    e.ts[10 + a].group = tempi,
                    e.Ke[10 + a] = !0,
                    e.ts[10 + a].ds = 75,
                    e.ts[10 + a].x = e.ye(219, T7ES.Ae[t].w / 2) + T7ES.Ae[t].w / 4,
                    e.ts[10 + a].z = e.ye(220, T7ES.Ae[t]._s - T7ES.Ae[t].us) + T7ES.Ae[t].us,
                    e.ts[10 + a].y = 0,
                    e.ts[10 + a].fs = e.ts[10 + a].x,
                    e.ts[10 + a].gs = e.ts[10 + a].z,
                    e.ts[10 + a].ps = 0,
                    e.ts[10 + a].os = 200,
                    1 == e.$s && (e.ts[10 + a].os = 500),
                    e.ts[10 + a].Ss = 10 + a,
                    0 == e.$s && e.Ne && e.ra && 1 == e.io[a] && (e.ts[10 + a].Ma = !0)) : 0 < e.join[a] && (tempi = e.ts[a].group,
                    e.ts[a].hs(e.ts[a].s0, 400, -50, 300),
                    e.ts[a].group = tempi,
                    e.Ke[a] = !0,
                    e.ts[a].ds = 75,
                    e.ts[a].x = e.ye(221, T7ES.Ae[t].w / 2) + T7ES.Ae[t].w / 4,
                    e.ts[a].z = e.ye(222, T7ES.Ae[t]._s - T7ES.Ae[t].us) + T7ES.Ae[t].us,
                    e.ts[a].y = 0,
                    e.ts[a].fs = e.ts[a].x,
                    e.ts[a].gs = e.ts[a].z,
                    e.ts[a].ps = 0,
                    e.ts[a].os = 200,
                    1 == e.$s && (e.ts[a].os = 500),
                    e.ts[a].Ss = a,
                    0 == e.$s) && e.Ne && e.ra && 1 == e.io[a] && (e.ts[a].Ma = !0);
                for (a = 0; a < e.Zs; a++)
                    e.Ke[a] && 0 == e.ts[a].group && (e.ts[a].group = a + 10);
                if (CHARMENU_setup_cost_based_vs_mode(e),
                e.bs = 0,
                e.Es = 0,
                e.Fs = 0,
                e.Ls = 0,
                e.Bs = 0,
                e.Ms = 0,
                e.ys = 0,
                e.ws = 0,
                e.Ds = 0,
                e.Vs = 0,
                T7ES.Ae[e.Ce].Ts || T7ES.Ae[e.Ce].ks || T7ES.Ae[e.Ce].Is(),
                e.Cs = 1,
                e.As = 0,
                e.wo = 0,
                1 == e.$s)
                    for (a = 0; a < e.Zs; a++)
                        e.Ke[a] && 0 == e.ts[a].s0.type && (e.ts[a].x = 50 + e.ye(223, 30),
                        e.ts[a].fs = e.ts[a].x);
                for (0 == e.$s && e.Ti(),
                a = 20; a < e.Zs; a++)
                    e.Ke[a] || e.ts[a].vs();
                QAAV(e),
                YroN(e)
            }
            if (4 == e.sa) {
                let t = 0;
                1 != e.$s && 0 != e.$s || 1 != e.ya || (t = -1),
                (0 < e.attack || 0 < e.right) && (e.attack = 0,
                e.right = 0,
                e.ve--,
                e.ve < t) && (e.ve = 2),
                0 < e.left && (e.left = 0,
                e.ve++,
                2 < e.ve) && (e.ve = t)
            }
            if ((FouV.di && 0 < e.attack && 1 < e.po && 5 == e.sa || FouV.ci) && (FouV.ci && (FouV.ci = !1,
            FouV.si = !1),
            e.fo = 4,
            XYSz.D(1, 1)),
            (e.ge || 1 == e.$s && 0 < e.attack && e.sa == (1 < e.po && FouV.di ? 6 : 5)) && (XYSz.D(1, 1),
            e.H0 = 10),
            1 == e.rh) {
                for (e.wa(),
                e.H0 = 0,
                a = 0; a < e.Zs; a++)
                    e.Ke[a] = !1;
                for (e.Ie = 1,
                e.Ce = e.ye(224, T7ES.Ue),
                h = 0; h < 500; h++)
                    e.Ve[h] = 0;
                for (a = 0; a < 8; a++) {
                    for (e.we = 0,
                    h = 1; h < T7ES._e; h++) {
                        for (e.De = 0,
                        n = 0; n < 8; n++)
                            e.eo[n] == h && (e.De = 1);
                        0 == T7ES.s0[h].type && 0 == e.De && T7ES.s0[h].id < 30 && (e.Ve[e.we] = h,
                        e.we++)
                    }
                    e.eo[a] = e.Ve[e.ye(225, e.we)],
                    e.ts[a].s0 = T7ES.s0[e.eo[a]]
                }
                for (e.rh = 1,
                t = e.Ce,
                a = 0; a < 8; a++)
                    e.ts[10 + a].hs(e.ts[a].s0, 350, 0, 300),
                    e.ts[10 + a].ds = 75,
                    e.ts[10 + a].x = e.ye(226, T7ES.Ae[t].w / 2) + T7ES.Ae[t].w / 4,
                    e.ts[10 + a].z = e.ye(227, T7ES.Ae[t]._s - T7ES.Ae[t].us) + T7ES.Ae[t].us,
                    e.ts[10 + a].fs = e.ts[10 + a].x,
                    e.ts[10 + a].gs = e.ts[10 + a].z,
                    e.ts[10 + a].os = 200,
                    e.ts[10 + a].Ss = 10 + a;
                if ((n = e.ye(228, 30)) < 7)
                    for (e.Ke[10] = !0,
                    e.ts[10].group = 0,
                    a = 1; a < 8; a++)
                        e.ts[10 + a].group = e.ye(229, 5),
                        e.Ke[10 + a] = !0;
                else if (n < 18) {
                    for (a = 0; a < 4; a++)
                        e.ts[10 + a].group = 1;
                    for (a = 4; a < 8; a++)
                        e.ts[10 + a].group = 2;
                    for (a = 0; a < 8; a++)
                        e.Ke[10 + a] = !0;
                    0 == e.ye(230, 3) && (e.Ke[13] = e.Ke[17] = !1),
                    0 == e.ye(231, 6) && (e.ts[13].group = e.ts[17].group = 3)
                } else if (n < 25) {
                    for (a = 0; a < 2; a++)
                        e.ts[10 + a].group = 1;
                    for (a = 2; a < 4; a++)
                        e.ts[10 + a].group = 2;
                    for (a = 4; a < 6; a++)
                        e.ts[10 + a].group = 3;
                    for (a = 6; a < 8; a++)
                        e.ts[10 + a].group = 4;
                    var g = e.ye(232, 3);
                    for (a = 0; a < 4 + 2 * g; a++)
                        e.Ke[10 + a] = !0
                } else {
                    for (a = 0; a < 4; a++)
                        e.ts[10 + a].group = 0;
                    var y = e.ye(233, 3);
                    for (a = 0; a < 2 + y; a++)
                        e.Ke[10 + a] = !0
                }
                for (a = 0; a < e.Zs; a++)
                    e.Ke[a] && 0 == e.ts[a].group && (e.ts[a].group = a + 10);
                CHARMENU_setup_cost_based_vs_mode(e),
                e.bs = 0,
                e.Es = 0,
                e.Fs = 0,
                e.Ls = 0,
                e.Bs = 0,
                e.Ms = 0,
                e.ys = 0,
                e.ws = 0,
                e.Ds = 0,
                e.Vs = 0,
                T7ES.Ae[e.Ce].Ts || T7ES.Ae[e.Ce].ks || T7ES.Ae[e.Ce].Is(),
                e.Cs = 1,
                e.As = 0,
                e.wo = 0
            }
            if (-1 == e.ve && 1 != e.$s && 0 != e.$s && (e.ve = 0),
            0 < e.attack && 1 == e.sa) {
                for (XYSz.D(1, 1),
                i = 0; i < 8; i++)
                    e.join[i] = 0,
                    e.Oo[i] = !0,
                    1 == e.io[i] && (e.eo[i] = -1);
                e.Zo = 45,
                e.fo = 0,
                NcPr()
            }
            {
                function p(s) {
                    for (let t = 0; t < MiVw.length; t++)
                        if (!(MiVw[t].R <= Sh7E.K0 || MiVw[t].X[s]))
                            return;
                    return 1
                }
                3 == e.sa && 1 == e.$s && (0 < e.attack || 0 < e.right || 0 < e.left) && (d = atob("U1RBR0Vf"),
                f = 2 == e.ve ? atob("X0VBU1k=") : 1 == e.ve ? atob("X05PUk1BTA==") : 0 == e.ve ? atob("X0RJRkZJQ1VMVA==") : atob("X0NSQVpZ"),
                0 < e.attack || 0 < e.right ? (e.attack = 0,
                e.right = 0,
                (Sh7E.Da = 0) == e.da ? p(d + 1 + f) ? e.da = 10 : (Sh7E.Da = 440,
                XYSz.D(2, 1)) : 10 == e.da ? p(d + 2 + f) ? e.da = 20 : e.da = 0 : 20 == e.da ? p(d + 3 + f) ? e.da = 30 : e.da = 0 : 30 == e.da ? p(d + 4 + f) ? e.da = 40 : e.da = 50 : 40 == e.da ? e.da = 50 : 50 == e.da && (e.da = 0)) : 0 < e.left && (e.left = 0,
                (Sh7E.Da = 0) == e.da ? p(d + 3 + f) ? e.da = 50 : p(d + 2 + f) ? e.da = 20 : p(d + 1 + f) ? e.da = 10 : (Sh7E.Da = 440,
                XYSz.D(2, 1)) : 10 == e.da ? e.da = 0 : 20 == e.da ? e.da = 10 : 30 == e.da ? e.da = 20 : 40 == e.da ? e.da = 30 : 50 == e.da && (p(d + 4 + f) ? e.da = 40 : e.da = 30)))
            }
            3 == e.sa && 1 != e.$s && (0 < e.attack || 0 < e.right ? (e.Ie = 0,
            e.attack = 0,
            e.right = 0,
            100 == e.Ce ? e.Ce = 0 : (e.Ce++,
            e.Ce == T7ES.Ue && (e.Ce = 100,
            e.Ie = 1))) : 0 < e.left && (e.Ie = 0,
            e.left = 0,
            100 == e.Ce ? e.Ce = T7ES.Ue - 1 : (e.Ce--,
            -1 == e.Ce && (e.Ce = 100,
            e.Ie = 1)))),
            2 == e.sa && (0 < e.right ? (XYSz.D(2, 1),
            (e.right = 0) < e.be ? e.be = 0 : e.be = 1) : 0 < e.left && (XYSz.D(2, 1),
            (e.left = 0) < e.be ? e.be = 0 : e.be = 1)),
            (0 < e.attack && 2 == e.sa || FouV.si && 0 == e.sa) && (XYSz.D(1, 1),
            CHARMENU_reset_random(e))
        }
        e.Zo <= 0 && 0 == e.fo && Jbbc(e),
        1 == e.rh && (D.Sy7M(0, 0, ZcYj, I2Gw, 0),
        D.QZUl())
    }
}
function CHARMENU_reset_random(s) {
    for (let t = 0; t < 500; t++)
        s.Ve[t] = 0;
    for (2 == s.be && (s.be = 1),
    k = 0; k < 8; k++)
        0 < s.io[k] && (s.eo[k] = 0);
    for (k = 0; k < 8; k++)
        if (0 < s.io[k]) {
            for (s.we = 0,
            l = 1; l < T7ES._e; l++) {
                for (s.De = 0,
                zz = 0; zz < 8; zz++)
                    s.eo[zz] == l && (s.De = 1);
                0 == T7ES.s0[l].type && 0 == s.De && T7ES.s0[l].id < 30 && (s.Ve[s.we] = l,
                s.we++)
            }
            s.eo[k] = s.Ve[s.ye(234, s.we)],
            s.ts[k].s0 = T7ES.s0[s.eo[k]]
        }
}
function CHARMENU_setup_cost_based_vs_mode(s) {
    if (0 == s.$s && s.ra) {
        for (s.Va = new Map,
        s.Ta = new Map,
        s.ka = new Map,
        s.Ia = new Map,
        s.Ca = 0,
        k = 0; k < s.Zs; k++)
            s.Ke[k] && 0 == s.ts[k].s0.type && !s.Va.has(s.ts[k].group) && (s.Ca++,
            s.Va.set(s.ts[k].group, s.ca),
            10 <= s.ts[k].group ? s.Ta.set(s.ts[k].group, k < 10 ? s.vi[k] : s.Ne ? "Com" : s.ts[k].s0.name) : s.Ta.set(s.ts[k].group, "Team " + s.ts[k].group),
            s.ka.set(s.ts[k].group, 0));
        if (2 == s.Ca) {
            var t = (e = Array.from(s.Va.keys()))[0]
              , e = e[1];
            s.Aa.set(t, "OkQn"),
            s.Aa.set(e, "KrcT"),
            s.Ia.set(t, 15),
            s.Ia.set(e, ZcYj - 15)
        } else if (s.Ca < 5) {
            var i = Array.from(s.Va.keys())
              , t = i[0]
              , e = i[i.length - 1];
            s.Aa.set(t, "OkQn"),
            s.Ia.set(t, 15);
            for (let t = 1; t < i.length - 1; t++) {
                var o = (ZcYj - 30) / (s.Ca - 1) * t + 15;
                s.Ia.set(i[t], o),
                s.Aa.set(i[t], "Itbg")
            }
            s.Aa.set(e, "KrcT"),
            s.Ia.set(e, ZcYj - 15)
        } else {
            var a = Array.from(s.Va.keys())
              , t = a[0]
              , e = a[a.length - 1];
            s.Aa.set(t, "OkQn"),
            s.Ia.set(t, 5);
            for (let t = 1; t < a.length - 1; t++) {
                var h = (ZcYj - 60) / (s.Ca - 1) * t + 30;
                s.Ia.set(a[t], h),
                s.Aa.set(a[t], "Itbg")
            }
            s.Aa.set(e, "KrcT"),
            s.Ia.set(e, ZcYj - 5)
        }
    }
}
function YroN(t) {
    for (t.po = 0,
    t.va = 0,
    i = 0; i < 8; i++)
        t.Ke[i] && t.po++;
    for (i = 0; i < 20; i++)
        t.Ke[i] && t.va++;
    ORUW_dragged || (t.va < 4 ? ORUW.style.top = "3.9%" : t.va < 7 ? ORUW.style.top = 1 == t.$s ? "13%" : "12%" : ORUW.style.top = 1 == t.$s ? "23%" : "22%")
}
function Jbbc(t) {
    t.attack = 0,
    YroN(t),
    t.fo = 1
}
function Jsh0(t, s, e) {
    var i = Math.floor(s / 4);
    1 == t.io[s] && 1 == t.be ? D.Dm9f(BLg_.N1, 107 + s % 4 * 153 + t.px, 61 + 212 * i + t.Yo, 0, 120 / D.E9px(e)) : D.Dm9f(e, 107 + s % 4 * 153 + t.px, 61 + 212 * i + t.Yo, 0, 120 / D.E9px(e))
}
function ZX3_(t, s, e, i) {
    var o = Math.floor(s / 4);
    D.S6nY(e, t.px + 107 + s % 4 * 153 + 60, t.Yo + 185 + 212 * o + (19 - JXAJ) / 2, "Itbg", i)
}
function SEnK(t, s, e) {
    var i = Math.floor(s / 4)
      , o = 1 == t.$s ? "----" : 0 == t.ts[s].group ? "Independent" : "Team " + t.ts[s].group;
    D.S6nY(o, t.px + 107 + s % 4 * 153 + 60, t.Yo + 229 + 212 * i + (19 - JXAJ) / 2, "Itbg", e)
}
function Y2UB(t, s, e, i, o) {
    var a = Math.floor(s / 4);
    1 == t.io[s] && 1 == t.be ? D.S6nY("Random", t.px + 107 + s % 4 * 153 + 60, t.Yo + 207 + 212 * a + (19 - JXAJ) / 2, "Itbg", i) : D.S6nY(e, t.px + 107 + s % 4 * 153 + 60, t.Yo + 207 + 212 * a + (19 - JXAJ) / 2, "Itbg", i),
    1 == t.fo && s < 3 || 0 != t.$s || 3 == t.fo && !t.ra || D.S6nY(`<span style="font-size:80%;">Cost: ₡${o}</span>`, t.px + 107 + s % 4 * 153 + 120, t.Yo + 207 - 163 + 212 * a + (19 - JXAJ) / 2, "KrcT", t.ra ? "#6785ff" : "#3f56b0")
}
function ZIEt(t, s, e=1) {
    D.S6nY(`<span style="font-size:90%;">${s}</span>`, t.Kt + 212 * e, t.$t + 111 * e + (16 - JXAJ) / 2, "Itbg", "#ffffff")
}
function Y29U(t, s, e=1) {
    D.S6nY(`<span style="font-size:90%;">${s.replaceAll("_", " ")}</span>`, t.Kt + 228 * e, t.$t + 87 * e + (16 - JXAJ) / 2, "Itbg", "#ffffff")
}
function FrDQ(t, s, e=1) {
    D.S6nY(`<span style="font-size:90%;">${s}</span>`, t.Kt + 212 * e, t.$t + 87 * e + (16 - JXAJ) / 2, "Itbg", "#ffffff")
}