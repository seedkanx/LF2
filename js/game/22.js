function DH8U(u) {
    if (!(100 < u.wo && u.wo <= 350 || 1 == u.$s && 3 == u.fa)) {
        let e, i, o, a, h, n, r, l;
        var f = zm19 ? 40 : 1 == u.$s && 2 < u.va ? 22 : 15;
        for (n = 0,
        e = 0; e < 18; e++)
            if (-1 != (i = u.Ke[e] ? e : -1)) {
                o = 28.5 + n % 4 * 238,
                a = f + 57 * Math.floor(n / 4),
                D.Dm9f(BLg_.b1, o, a, 0, .5 / BLg_.ie);
                var d = 1 <= u.ts[i].group && u.ts[i].group <= 4 ? u.ts[i].group : 0;
                let t = ""
                  , s = (u.ts[e].Ma && (t = ' <span style="font-size:70%;">⚄ </span>'),
                "");
                0 < u.ts[e].gf && (s = ` <span style="font-size:70%;">✟${u.ts[e].gf}</span>`),
                D.VLeA(i < 10 ? "" + t + u.vi[i] + s : t + "Com" + s, 45 + o, 3 + a + (14 - JXAJ) / 2, "OkQn", D.FYH9[d], D.RXhw[d]),
                d = D.E9px(u.ts[i].s0.qe),
                D.Dm9f(u.ts[i].s0.qe, 1.5 + o, 1.5 + a, 0, 39 / d, 39 / d),
                0 < u.ts[i].ls && 0 < u.ts[i].rs && (u.ts[i].ls > u.ts[i].rs / 2 ? (160 < (h = u.ts[i].rs / 500 * 160) && (h = 160),
                D.KuNe(BLg_.E1, 43.5 + o, 20.5 + a, 0, h / 160 / 2 / BLg_.ie, .5 / BLg_.ie),
                160 < (h = u.ts[i].ls / 500 * 160) && (h = 160),
                D.KuNe(BLg_.L1, 43.5 + o, 20.5 + a, 0, h / 160 / 2 / BLg_.ie, .5 / BLg_.ie),
                (1 == Math.floor(u.ts[i].Pu / 1e3) || 0 < u.ts[i].Ks) && (l = (Math.sin(u.Pl / 8 * Math.PI * 2) + 1) / 2,
                D.KuNe(BLg_.w1, 43.5 + o, 20.5 + a, 0, h / 160 / 2 / BLg_.ie, .5 / BLg_.ie, 0, 0, 0, l))) : (160 < (r = u.ts[i].rs / 500 * 160) && (r = 160),
                D.KuNe(BLg_.L1, 43.5 + o, 20.5 + a, 0, r / 160 / 2 / BLg_.ie, .5 / BLg_.ie),
                (1 == Math.floor(u.ts[i].Pu / 1e3) || 0 < u.ts[i].Ks) && (l = (Math.sin(u.Pl / 8 * Math.PI * 2) + 1) / 2,
                D.KuNe(BLg_.w1, 43.5 + o, 20.5 + a, 0, r / 160 / 2 / BLg_.ie, .5 / BLg_.ie, 0, 0, 0, l)),
                160 < (h = (u.ts[i].rs - u.ts[i].ls) / 500 * 160) && (h = 160),
                D.KuNe(BLg_.E1, 43.5 + o + (r - h), 20.5 + a, 0, h / 160 / 2 / BLg_.ie, .5 / BLg_.ie)),
                0 < u.ts[i].ls) && (0 == u.ts[i].os ? D.KuNe(BLg_.F1, 43.5 + o, 32 + a, 0, .5 / BLg_.ie, .5 / BLg_.ie) : u.ts[i].os < 250 ? (D.KuNe(BLg_.B1, 43.5 + o, 32 + a, 0, .5 / BLg_.ie, .5 / BLg_.ie),
                160 < (h = (500 - u.ts[i].os) / 500 * 160) && (h = 160),
                D.KuNe(BLg_.F1, 43.5 + o + (160 - h), 32 + a, 0, h / 160 / 2 / BLg_.ie, .5 / BLg_.ie)) : (D.KuNe(BLg_.F1, 43.5 + o, 32 + a, 0, .5 / BLg_.ie, .5 / BLg_.ie),
                160 < (h = u.ts[i].os / 500 * 160) && (h = 160),
                D.KuNe(BLg_.B1, 43.5 + o, 32 + a, 0, h / 160 / 2 / BLg_.ie, .5 / BLg_.ie))),
                n++
            }
    }
}