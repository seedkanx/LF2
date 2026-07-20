function J6av(t, s) {
    let e, i, o, a, h, n, r, l, u, f, d;
    for (l = 0,
    d = 0,
    o = t.Ce,
    u = T7ES.Ae[o].us,
    f = T7ES.Ae[o]._s,
    h = T7ES.Ae[o].w,
    n = Math.floor(h),
    e = 0; e < t.Zs; e++)
        t.Ke[e] && (0 == t.ts[e].s0.type ? (t.ts[e].gs < u && (t.ts[e].gs = u),
        t.ts[e].gs > f && (t.ts[e].gs = f)) : (t.ts[e].gs < u - 1 && (t.ts[e].gs = u - 1),
        t.ts[e].gs > f + 1 && (t.ts[e].gs = f + 1)),
        t.ts[e].z = Math.floor(t.ts[e].gs),
        3 == t.ts[e].s0.type ? (t.ts[e].fs < -300 && (t.Ke[e] = !1),
        t.ts[e].fs > h + 300 && (t.Ke[e] = !1)) : 0 == t.ts[e].s0.type ? (20 <= e ? (t.ts[e].fs < -100 && (t.ts[e].fs = -100),
        t.ts[e].fs > h + 100 && (t.ts[e].fs = h + 100)) : (5 == t.ts[e].group ? t.ts[e].fs < -300 && (t.ts[e].fs = -300) : t.ts[e].fs < 0 && (t.ts[e].fs = 0),
        t.ts[e].fs > h && (t.ts[e].fs = h)),
        0 < t.bh && t.ts[e].fs > t.bh && 5 != t.ts[e].group && 0 == t.ts[e].ds && (t.ts[e].fs = t.bh)) : 0 <= t.ts[e].Eh && (122 != t.ts[e].s0.id && 123 != t.ts[e].s0.id || !(0 < t.ts[e].Mo || 1 == t.$s && 5 == Math.floor(t.da / 10)) ? (t.ts[e].fs < 0 && 0 == t.ts[e].y && (t.Ke[e] = !1),
        t.ts[e].fs > h && 0 == t.ts[e].y && (t.Ke[e] = !1)) : (t.ts[e].fs < 10 && (t.ts[e].fs = 10),
        t.ts[e].fs > h - 10 && (t.ts[e].fs = h - 10))),
        t.ts[e].x = Math.floor(t.ts[e].fs));
    for (e = 0; e < 8; e++)
        t.Ke[e] && t.ts[e].za && (!Sh7E.Fo || t.Id[e] == Sh7E.Ml) && 0 < t.ts[e].ls && (14 != t.ts[e].s0.f[t.ts[e].xs].state ? l = l + t.ts[e].x + (130 - 260 * t.ts[e].Ws) * GLOBAL_ZOOM_WIDTH / 794 : l += t.ts[e].x,
        d++);
    if (0 == d)
        for (e = 0; e < t.Zs; e++)
            if (t.Ke[e] && 0 == t.ts[e].s0.type && 0 < t.ts[e].ls) {
                if (isNaN(t.ts[e].x))
                    continue;
                l,
                t.ts[e].x,
                e,
                l += t.ts[e].x,
                d++
            }
    for (0 == d && (l = 800,
    d = 1),
    (l = l / d - GLOBAL_ZOOM_WIDTH / 2) < 0 ? l = 0 : l > n - GLOBAL_ZOOM_WIDTH && (l = n - GLOBAL_ZOOM_WIDTH),
    0 != t.Bo && l > t.Bo - GLOBAL_ZOOM_WIDTH && (l = t.Bo - GLOBAL_ZOOM_WIDTH),
    0 == t.pause && (t.Gl = (l - t.Ea[Sh7E.Ml]) / 14,
    t.Fa[Sh7E.Ml] = (t.Gl + 5.38 * t.Fa[Sh7E.Ml]) / 7,
    t.Ea[Sh7E.Ml] += t.Fa[Sh7E.Ml],
    t.Ea[Sh7E.Ml] < 0 ? t.Ea[Sh7E.Ml] = 0 : t.Ea[Sh7E.Ml] > n - GLOBAL_ZOOM_WIDTH && (t.Ea[Sh7E.Ml] = n - GLOBAL_ZOOM_WIDTH)),
    e = 0; e < T7ES.Ae[o].L2; e++) {
        var c = !T7ES.$ && !!T7ES.Ae[o].M2[e]
          , p = (c ? T7ES.Ae[o].M2 : T7ES.Ae[o].B2)[e]
          , g = c ? 1 / T7ES.Ae[o].F2 * 3 : 1 / T7ES.Ae[o].F2;
        if (null == T7ES.Ae[o].N2[e] || 0 == T7ES.Ae[o].N2[e])
            if (0 == T7ES.Ae[o].loop[e])
                a = 0,
                T7ES.Ae[o].w > GLOBAL_ZOOM_WIDTH && (a = -(T7ES.Ae[o].T2[e] - GLOBAL_ZOOM_WIDTH) * t.Ea[Sh7E.Ml] / (T7ES.Ae[o].w - GLOBAL_ZOOM_WIDTH)),
                (r = 1) == (r = 0 < T7ES.Ae[o].Y2[e] && (s && (null == T7ES.Ae[o].c[e] && (T7ES.Ae[o].c[e] = 0),
                T7ES.Ae[o].c[e] == T7ES.Ae[o].v2[e] && null != T7ES.Ae[o].O2[e] && PCo6(t, t.Ea[0] + 400, T7ES.Ae[o].O2[e]),
                0 == t.pause) && (T7ES.Ae[o].c[e] = (T7ES.Ae[o].c[e] + 1) % T7ES.Ae[o].Y2[e]),
                T7ES.Ae[o].c[e] < T7ES.Ae[o].v2[e] || T7ES.Ae[o].c[e] > T7ES.Ae[o].X2[e]) ? 0 : r) && (null != T7ES.Ae[o].U2[e] ? D.Ba6u(p, a + T7ES.Ae[o].I2[e] + T7ES.Ae[o].U2[e] * T7ES.Ae[o].c[e], T7ES.Ae[o].C2[e] + T7ES.Ae[o].R2[e] * T7ES.Ae[o].c[e], 0, g) : D.Ba6u(p, a + T7ES.Ae[o].I2[e], T7ES.Ae[o].C2[e], 0, g));
            else if ((r = 1) == (r = 0 < T7ES.Ae[o].Y2[e] && (s && (null == T7ES.Ae[o].c[e] && (T7ES.Ae[o].c[e] = 0),
            T7ES.Ae[o].c[e] == T7ES.Ae[o].v2[e] && null != T7ES.Ae[o].O2[e] && PCo6(t, t.Ea[0] + 400, T7ES.Ae[o].O2[e]),
            0 == t.pause) && (T7ES.Ae[o].c[e] = (T7ES.Ae[o].c[e] + 1) % T7ES.Ae[o].Y2[e]),
            T7ES.Ae[o].c[e] < T7ES.Ae[o].v2[e] || T7ES.Ae[o].c[e] > T7ES.Ae[o].X2[e]) ? 0 : r))
                for (i = T7ES.Ae[o].loop[e],
                a = 0,
                T7ES.Ae[o].w > GLOBAL_ZOOM_WIDTH && (a = -(T7ES.Ae[o].T2[e] - GLOBAL_ZOOM_WIDTH) * t.Ea[Sh7E.Ml] / (T7ES.Ae[o].w - GLOBAL_ZOOM_WIDTH)),
                x2 = T7ES.Ae[o].I2[e]; x2 < T7ES.Ae[o].T2[e]; x2 += i)
                    null != T7ES.Ae[o].U2[e] ? D.Ba6u(p, a + x2 + T7ES.Ae[o].U2[e] * T7ES.Ae[o].c[e], T7ES.Ae[o].C2[e] + T7ES.Ae[o].R2[e] * T7ES.Ae[o].c[e], 0, g) : D.Ba6u(p, a + x2, T7ES.Ae[o].C2[e], 0, g)
    }
}
function MMsl(t) {
    let s, e, i, o, a, h, n;
    for (t.wc = 0,
    s = 0; s < t.Zs; s++)
        t.Ke[s] && (t.Un[t.wc] = s,
        t.wc++);
    if (0 < t.wc)
        for (s = t.wc - 1; 0 <= s; s--)
            for (e = 0; e < s; e++)
                t.ts[t.Un[e]].z > t.ts[t.Un[e + 1]].z && (n = t.Un[e],
                t.Un[e] = t.Un[e + 1],
                t.Un[e + 1] = n);
    for (o = t.Ce,
    T7ES.Ae[o].us,
    T7ES.Ae[o]._s,
    T7ES.Ae[o].w,
    s = 0; s < t.wc; s++) {
        var r;
        if (e = t.Un[s],
        (n = t.ts[e].ds) < 0 && (n = -n),
        0 <= t.ts[e].Eh && 3005 != t.ts[e].s0.f[t.ts[e].xs].state && 9997 != t.ts[e].s0.f[t.ts[e].xs].state && 223 != t.ts[e].s0.id && 224 != t.ts[e].s0.id && -70 < t.ts[e].ds && n % 4 < 2 && (!T7ES.$ && T7ES.Ae[o].D2 ? D.Ba6u(T7ES.Ae[o].V2, -t.Ea[Sh7E.Ml] + t.ts[e].x + t.ts[e].Lu - T7ES.Ae[o].b2 / 2, t.ts[e].z - T7ES.Ae[o].E2 / 2, 0, 1 / T7ES.Ae[o].F2 * 3) : D.Ba6u(T7ES.Ae[o].w2, -t.Ea[Sh7E.Ml] + t.ts[e].x + t.ts[e].Lu - T7ES.Ae[o].b2 / 2, t.ts[e].z - T7ES.Ae[o].E2 / 2, 0, 1 / T7ES.Ae[o].F2)),
        n % 4 < 2 && -25 < t.ts[e].ds && t.ts[e].wf(t),
        t.wo < 100 && (1 < t.ts[e].ll && t.ts[e].x < t.bh ? (a = t.ts[e].x - t.Ea[Sh7E.Ml] + t.ts[e].Lu,
        h = t.ts[e].z + 3 + (8 - JXAJ) / 2,
        (a = a < 10 ? 10 : a) > GLOBAL_ZOOM_WIDTH - 10 && (a = GLOBAL_ZOOM_WIDTH - 10),
        D.OPYj("x" + t.ts[e].ll, a, h, "Itbg", D.FYH9[1 <= t.ts[e].group && t.ts[e].group <= 4 ? t.ts[e].group : 0])) : (e < 20 || 5 != t.ts[e].group && 0 == t.ts[e].s0.type) && -25 < t.ts[e].ds ? (a = t.ts[e].x - t.Ea[Sh7E.Ml] + t.ts[e].Lu,
        h = t.ts[e].z + 5 + (8 - JXAJ) / 2,
        (a = a < 10 ? 10 : a) > GLOBAL_ZOOM_WIDTH - 10 && (a = GLOBAL_ZOOM_WIDTH - 10),
        r = 1 <= t.ts[e].group && t.ts[e].group <= 4 ? t.ts[e].group : 0,
        D.Tetg(e < 10 ? t.vi[e] : "Com", a, h, "Itbg", D.FYH9[r], D.RXhw[r])) : 20 <= e && -25 < t.ts[e].ds && 0 == t.ts[e].s0.type && 5 == t.ts[e].group && (t.ts[e].s0.id < 30 || 50 <= t.ts[e].s0.id || 38 == t.ts[e].s0.id) && (a = t.ts[e].x - t.Ea[Sh7E.Ml] + t.ts[e].Lu,
        h = t.ts[e].z + 5 + (8 - JXAJ) / 2,
        (a = a < 10 ? 10 : a) > GLOBAL_ZOOM_WIDTH - 10 && (a = GLOBAL_ZOOM_WIDTH - 10),
        D.Tetg("Com", a, h, "Itbg", D.FYH9[5], D.RXhw[5]))),
        0 < t.ts[e].mf)
            for (i = 0; i < t.ts[e].mf; i++)
                t.ts[e].bf[i] < 5 ? (D.Ba6u(BLg_.P1[t.ts[e].bf[i]], t.ts[e].Lu - t.Ea[Sh7E.Ml] + t.ts[e].pf[i] - 51, t.ts[e].Sf[i] - 40, 0, 1 / BLg_.ie),
                0 == t.pause && t.ts[e].bf[i]++) : 10 <= t.ts[e].bf[i] && t.ts[e].bf[i] < 15 ? (D.Ba6u(BLg_.P1[t.ts[e].bf[i] - 5], t.ts[e].Lu - t.Ea[Sh7E.Ml] + t.ts[e].pf[i] - 30, t.ts[e].Sf[i] - 24, 0, 1 / BLg_.ie),
                0 == t.pause && t.ts[e].bf[i]++) : 20 <= t.ts[e].bf[i] && t.ts[e].bf[i] < 29 ? (D.Ba6u(BLg_.P1[Math.floor((t.ts[e].bf[i] - 20) / 2) + 10], t.ts[e].Lu - t.Ea[Sh7E.Ml] + t.ts[e].pf[i] - 51, t.ts[e].Sf[i] - 40, 0, 1 / BLg_.ie),
                0 == t.pause && t.ts[e].bf[i]++) : 30 <= t.ts[e].bf[i] && t.ts[e].bf[i] < 39 ? (D.Ba6u(BLg_.P1[Math.floor((t.ts[e].bf[i] - 30) / 2) + 15], t.ts[e].Lu - t.Ea[Sh7E.Ml] + t.ts[e].pf[i] - 30, t.ts[e].Sf[i] - 24, 0, 1 / BLg_.ie),
                0 == t.pause && t.ts[e].bf[i]++) : i == t.ts[e].mf - 1 && t.ts[e].mf--
    }
}