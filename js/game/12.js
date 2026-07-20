function TI2f(t, s) {
    let e, i, o, a, h, n, r, l, u, f, d, c, p, g, y, x, m, _, S, E, b, M, D, w, L, B, F, I;
    if (o = t.Ce,
    1 == t.$s && 1 == t.qs)
        t.ts[s].th = t.ts[s].de,
        t.ts[s].ih = t.ts[s].R0,
        t.ts[s].eh = t.ts[s].left,
        t.ts[s].sh = t.ts[s].right,
        t.ts[s].es = t.ts[s].attack,
        t.ts[s].hh = t.ts[s].fe,
        t.ts[s].oh = t.ts[s].ah,
        t.ts[s].right = 0,
        t.ts[s].left = 0,
        t.ts[s].de = 0,
        t.ts[s].R0 = 0,
        t.ts[s].attack = 0,
        t.ts[s].fe = 0,
        t.ts[s].ah = 0,
        t.ts[s].right = 1,
        t.ts[s].sh = 0,
        1 == t.ts[s].nh && (t.ts[s].es = 0,
        t.ts[s].attack = 1);
    else if (n = 3 * (h = (h = 1 == t.rh || 1 == t.$s && 5 != t.ts[s].group && (s < 20 || t.ts[s].s0.id < 30) ? 0 : t.ve) < 0 ? 0 : h),
    r = 5 * h,
    l = 6 * h,
    u = 9 * h,
    f = 20 * h,
    0 < t.ts[s].lh && t.ts[s].lh--,
    -1e3 < t.ts[s].dh)
        t.ts[s].th = t.ts[s].de,
        t.ts[s].ih = t.ts[s].R0,
        t.ts[s].eh = t.ts[s].left,
        t.ts[s].sh = t.ts[s].right,
        t.ts[s].es = t.ts[s].attack,
        t.ts[s].hh = t.ts[s].fe,
        t.ts[s].oh = t.ts[s].ah,
        t.ts[s].right = 0,
        t.ts[s].left = 0,
        t.ts[s].de = 0,
        t.ts[s].R0 = 0,
        t.ts[s].attack = 0,
        t.ts[s].fe = 0,
        t.ts[s].ah = 0,
        d = t.ts[s].s0.f[t.ts[s].xs].state,
        t.ts[s].x > t.ts[s].dh + 6 ? (t.ts[s].left = 1,
        t.ts[s].x > t.ts[s].dh + 250 && 0 == t.ye(17, 3 + n) && (t.ts[s].eh = 0),
        t.ts[s].x < t.ts[s].dh + 100 && 2 == d && 1 == t.ts[s].Ws && (t.ts[s].right = 1)) : t.ts[s].x < t.ts[s].dh - 6 && (t.ts[s].right = 1,
        t.ts[s].x < t.ts[s].dh - 250 && 0 == t.ye(18, 3 + n) && (t.ts[s].sh = 0),
        t.ts[s].x > t.ts[s].dh - 100) && 2 == d && 0 == t.ts[s].Ws && (t.ts[s].left = 1),
        t.ts[s].z < t.ts[s]._h - 3 ? t.ts[s].R0 = 1 : t.ts[s].z > t.ts[s]._h + 3 && (t.ts[s].de = 1),
        1 != t.ts[s].nh && 1 != t.ts[s].uh || (t.ts[s].es = 0,
        t.ts[s].attack = 1),
        Math.abs(t.ts[s]._h - t.ts[s].z) <= 90 && Math.abs(t.ts[s].dh - t.ts[s].x) <= 90 && (t.ts[s].dh = -1e3,
        t.ts[s]._h = -1e3);
    else {
        if (t.Hs = 1e4,
        t.fh = 1e4,
        t.gh = 1e4,
        p = -1,
        g = -1,
        y = 0,
        x = 0,
        m = 0,
        _ = 0,
        S = 0,
        E = 0,
        (1 == t.$s || 4 == t.$s) && 5 != t.ts[s].group) {
            for (m = 1,
            (t.ts[s].ls > Math.floor(4 * t.ts[s].ns / 5) || t.ts[s].ls > t.ts[s].ns - 130) && (m = 0),
            e = 0; e < t.Zs; e++)
                e != s && t.Ke[e] && 0 < t.ts[e].ls && 0 == t.ts[e].s0.type && t.ts[e].group == t.ts[s].group && (t.ts[e].ls < t.ts[s].ls && (m = 0),
                x++);
            for (_ = 0,
            (430 < t.ts[s].ls || t.ts[s].ls > t.ts[s].ns - 130) && (_ = 1),
            e = 0; e < t.Zs; e++)
                e != s && t.Ke[e] && 0 < t.ts[e].ls && 0 == t.ts[e].s0.type && t.ts[e].group == t.ts[s].group && t.ts[e].ls < t.ts[s].ls - 200 && (_ = 1);
            if (1 == t.$s) {
                for (front_line = -1,
                e = 0; e < 10; e++)
                    e != s && t.Ke[e] && 0 < t.ts[e].ls && 0 == t.ts[e].s0.type && t.ts[e].x > front_line && (front_line = t.ts[e].x,
                    front_man_z = t.ts[e].z);
                -1 < front_line && (t.ts[s].x > front_line && 200 < Math.floor(Math.abs(t.ts[s].z - front_man_z) / 2) + t.ts[s].x - front_line && (E = 1),
                t.ts[s].x > front_line + 400) && (E = 2)
            }
            0 == x && (m = 0)
        }
        for (-1 < t.ts[s].parent && (_ = 1,
        S = 1),
        250 < t.ts[s].os && (S = 1),
        1 == t.$s && 1 == t.ts[s].group && (S = 1),
        20 <= s && 4 == t.$s && (S = 1),
        e = 0; e < t.Zs; e++)
            e != s && t.Ke[e] && null != t.ts[e].s0.f[t.ts[e].xs] && (0 == t.ts[e].s0.type || 3e3 == t.ts[e].s0.f[t.ts[e].xs].state && (t.ts[e].x > t.ts[s].x && t.ts[e].Gs < 0 || t.ts[e].x < t.ts[s].x && 0 < t.ts[e].Gs)) && (t.ts[e].group != t.ts[s].group && (1 != t.$s || 5 == t.ts[s].group) || 5 == t.ts[e].group && 1 == t.$s && t.ts[e].group != t.ts[s].group) && 0 < t.ts[e].ls && !(14 == t.ts[e].s0.f[t.ts[e].xs].state || 2 < Math.abs(t.ts[e].ds)) && (a = Math.abs(t.ts[e].x - t.ts[s].x) + Math.abs(t.ts[e].z - t.ts[s].z)) < t.Hs && (p = e,
            g = e,
            t.Hs = a);
        if (0 <= p && Math.abs(t.ts[p].z - t.ts[s].z) < 15 && (y = 1),
        9 != t.ts[s].s0.f[t.ts[s].xs].state)
            for (e = 0; e < t.Zs; e++)
                e != s && t.Ke[e] && null != t.ts[e].s0.f[t.ts[e].xs] && (t.ts[e].group != t.ts[s].group && (1 != t.$s || 5 == t.ts[s].group) || 5 == t.ts[e].group && 1 == t.$s && t.ts[e].group != t.ts[s].group) && 0 < t.ts[e].ls && (14 == t.ts[e].s0.f[t.ts[e].xs].state || 2 < Math.abs(t.ts[e].ds)) && (a = Math.abs(t.ts[e].x - t.ts[s].x) + Math.abs(t.ts[e].z - t.ts[s].z)) < t.fh && Math.abs(t.ts[e].z - t.ts[s].z) < 40 && Math.abs(t.ts[e].x - t.ts[s].x) < 250 && (p = e,
                g = e,
                t.fh = a);
        -1 < t.ts[s].mh && t.ts[s].mh < t.Zs && t.Ke[t.ts[s].mh] && 0 < t.ts[t.ts[s].mh].ls && 0 < t.ye(19, 30) && 0 == t.ts[t.ts[s].mh].s0.type ? p = t.ts[s].mh : t.ts[s].mh = p,
        g = p,
        t.ts[s].ph = t.ts[s].eh,
        t.ts[s].Sh = t.ts[s].sh,
        t.ts[s].th = t.ts[s].de,
        t.ts[s].ih = t.ts[s].R0,
        t.ts[s].eh = t.ts[s].left,
        t.ts[s].sh = t.ts[s].right,
        t.ts[s].es = t.ts[s].attack,
        t.ts[s].hh = t.ts[s].fe,
        t.ts[s].oh = t.ts[s].ah,
        t.ts[s].right = 0,
        t.ts[s].left = 0,
        t.ts[s].de = 0,
        t.ts[s].R0 = 0,
        t.ts[s].attack = 0,
        t.ts[s].fe = 0,
        t.ts[s].ah = 0,
        b = 0,
        M = 0,
        D = 0,
        w = 0,
        L = 0,
        B = 0,
        F = 0;
        var C = (I = 0) < t.bh ? t.bh : T7ES.Ae[t.Ce].w;
        if (0 <= p)
            for (i = 20; i < t.Zs; i++)
                t.Ke[i] && (200 != t.ts[i].s0.id || (6 != Math.floor(t.ts[i].xs / 10) || t.ts[i].group == t.ts[s].group) && (5 != Math.floor(t.ts[i].xs / 10) || 2 != t.ts[s].s0.id && 34 != t.ts[s].s0.id || t.ts[s].ls < t.ts[s].ns - 70 && t.ts[s].ls < t.ts[s].ns - 200 || t.ts[s].ls < Math.floor(3 * t.ts[s].ns / 5) && t.ts[s].ls >= t.ts[s].ns - 200 || t.ts[i].group != t.ts[s].group) || (F = 1,
                Math.abs(t.ts[i].z - t.ts[s].z) < 25 && Math.abs(t.ts[i].x - t.ts[s].x) < 150 && (L = 1,
                Math.abs(t.ts[i].z - t.ts[s].z) < 20) && (Math.abs(t.ts[i].x - t.ts[s].x) < 180 && (t.ts[i].z > t.ts[s].z ? w = 1 : b = 1),
                t.ts[i].x > t.ts[s].x ? D = 1 : M = 1)),
                (211 == t.ts[i].s0.id && 18 == t.ts[i].s0.f[t.ts[i].xs].state || 212 == t.ts[i].s0.id && 150 <= t.ts[i].xs && t.ts[i].xs <= 170) && (Math.abs(t.ts[i].x - t.ts[s].x) < 80 && (t.ts[i].z > t.ts[s].z + 20 ? w = 1 : t.ts[i].z < t.ts[s].z - 20 && (b = 1)),
                Math.abs(t.ts[i].z - t.ts[s].z) < 20) && (t.ts[i].x > t.ts[s].x + 100 ? D = 1 : t.ts[i].x < t.ts[s].x - 100 && (M = 1)),
                0 == t.ts[s].lh && 0 == I && 0 == y && 0 == F && (a = Math.abs(t.ts[i].x - t.ts[s].x) + Math.abs(t.ts[i].z - t.ts[s].z),
                0 == t.ts[s].Eh) && a < 2 * t.Hs && a < t.gh && (!((1 == Math.floor(t.ts[i].s0.id / 100) || 213 == t.ts[i].s0.id) && 0 == t.ts[i].Eh && 0 < t.ts[i].x && t.ts[i].x < C) || 1004 != t.ts[i].s0.f[t.ts[i].xs].state && 2004 != t.ts[i].s0.f[t.ts[i].xs].state || 0 != _ && 122 == t.ts[i].s0.id || 0 != S && 123 == t.ts[i].s0.id || 1 == t.ts[s].Fh && 122 != t.ts[i].s0.id || (p = i,
                t.gh = a)),
                I <= 1 && 200 == t.ts[i].s0.id && 5 == Math.floor(t.ts[i].xs / 10) && Math.abs(t.ts[i].x - t.ts[s].x) < 300 && Math.abs(t.ts[i].z - t.ts[s].z) < 90 && t.ts[i].group == t.ts[s].group && ((t.ts[s].ls < t.ts[s].rs - 70 && t.ts[s].ls < 140 || t.ts[s].ls < Math.floor(3 * t.ts[s].rs / 5) && 140 <= t.ts[s].ls) && (p = i),
                I = 1),
                I <= 1) && 1 == m && 122 == t.ts[i].s0.id && 1004 == t.ts[i].s0.f[t.ts[i].xs].state && 0 == t.ts[s].Eh && (p = i,
                I = 1);
        if (0 <= (p = 1 == F ? g : p)) {
            if (e = p,
            c = t.ts[e].s0.f[t.ts[e].xs].state,
            d = t.ts[s].s0.f[t.ts[s].xs].state,
            0 != t.ye(20, 8 + r) || 1 != t.ts[s].Lh && 1 != t.ts[s].Bh && 1 != t.ts[s].uh && 1 != t.ts[s].nh || (t.ts[s].es = 0,
            t.ts[s].attack = 1),
            3e3 == c)
                return 7 != d && 0 == t.ye(21, u) && (t.ts[e].x > t.ts[s].x && t.ts[e].x < t.ts[s].x + 200 && t.ts[e].Gs < 0 || t.ts[e].x < t.ts[s].x && t.ts[e].x > t.ts[s].x - 200 && 0 < t.ts[e].Gs) && (t.ts[s].oh = 0,
                t.ts[s].ah = 1),
                t.ts[e].x > t.ts[s].x && 1 == t.ts[s].Ws && (t.ts[s].right = 1),
                void (t.ts[e].x < t.ts[s].x && 0 == t.ts[s].Ws && (t.ts[s].left = 1));
            if (1 == t.ts[s].Fh) {
                if (0 < t.ts[s].Eh) {
                    var T = t.ts[t.ts[s].Mh].s0.id;
                    if (122 == T || 123 == T)
                        return t.ts[s].es = 0,
                        void (t.ts[s].attack = 1)
                }
                (-1e3 == t.ts[s].dh || Math.abs(t.ts[s]._h - t.ts[s].z) <= 90 && Math.abs(t.ts[s].dh - t.ts[s].x) <= 90) && (Math.abs(t.ts[s]._h - t.ts[s].z) <= 90 && Math.abs(t.ts[s].dh - t.ts[s].x) <= 90 && (t.ts[s].dh = -1e3,
                t.ts[s]._h = -1e3),
                t.ts[e].x > t.ts[s].x && 1 == t.ts[s].Ws && (t.ts[s].right = 1),
                t.ts[e].x < t.ts[s].x && 0 == t.ts[s].Ws && (t.ts[s].left = 1),
                2 == d && 1 == t.ts[s].Ws && (t.ts[s].right = 1),
                2 == d) && 0 == t.ts[s].Ws && (t.ts[s].left = 1)
            }
            if (1004 == c || 2004 == c)
                return (0 == t.ts[s].Fh || Math.abs(t.ts[s].z - t.ts[e].z) <= 150 && Math.abs(t.ts[s].x - t.ts[e].x) <= 240 || 122 == t.ts[e].s0.id || 123 == t.ts[e].s0.id) && (t.ts[s].x > t.ts[e].x + 6 ? (t.ts[s].left = 1,
                t.ts[s].x > t.ts[e].x + 250 && 0 == t.ye(22, 3 + n) && (t.ts[s].eh = 0),
                t.ts[s].x < t.ts[e].x + 100 && 2 == d && 1 == t.ts[s].Ws && (t.ts[s].right = 1)) : t.ts[s].x < t.ts[e].x - 6 && (0 == E && (t.ts[s].right = 1),
                t.ts[s].x < t.ts[e].x - 250 && 0 == t.ye(23, 3 + n) && 0 == E && (t.ts[s].sh = 0),
                t.ts[s].x > t.ts[e].x - 100) && 2 == d && 0 == t.ts[s].Ws && (t.ts[s].left = 1),
                t.ts[s].z < t.ts[e].z - 3 ? t.ts[s].R0 = 1 : t.ts[s].z > t.ts[e].z + 3 && (t.ts[s].de = 1)),
                void (Math.abs(t.ts[e].z - t.ts[s].z) <= 3 && Math.abs(t.ts[e].x - t.ts[s].x) <= 6 && (t.ts[s].es = 0,
                t.ts[s].attack = 1));
            if (T = 14 == c || 2 < Math.abs(t.ts[e].ds) || 5 == t.ts[e].group && 300 != t.ts[e].s0.id && (0 < t.bh && t.ts[e].fs > t.bh + 40 || t.ts[e].fs < -40),
            (0 == t.ts[s].Fh || Math.abs(t.ts[s].z - t.ts[e].z) <= 150 && Math.abs(t.ts[s].x - t.ts[e].x) <= 240) && T) {
                if (t.ts[s].lh = 10,
                Math.abs(t.ts[s].x - t.ts[e].x) < 900) {
                    if (t.ts[e].x > t.yh - 130)
                        return t.ts[s].left = 1,
                        void (t.ts[s].eh = 0);
                    if (t.ts[e].x < 130)
                        return t.ts[s].right = 1,
                        void (t.ts[s].sh = 0);
                    if (45 < Math.abs(t.ts[e].z - t.ts[s].z) && 350 < Math.abs(t.ts[e].x - t.ts[s].x))
                        return;
                    t.ts[e].x > t.ts[s].x ? (t.ts[s].left = 1,
                    0 == t.ye(24, 35 + f) && (t.ts[s].eh = 0)) : (t.ts[s].right = 1,
                    0 == t.ye(25, 35 + f) && (t.ts[s].sh = 0))
                }
                return void ((t.ts[e].z < t.ts[s].z || t.ts[e].z < T7ES.Ae[o].us + 30) && t.ts[e].z <= T7ES.Ae[o]._s - 30 ? t.ts[s].R0 = 1 : t.ts[s].de = 1)
            }
            if (200 == t.ts[e].s0.id)
                return t.ts[e].x > t.ts[s].x + 7 ? t.ts[s].right = 1 : t.ts[e].x < t.ts[s].x - 7 && (t.ts[s].left = 1),
                void (t.ts[e].z > t.ts[s].z + 2 ? t.ts[s].R0 = 1 : t.ts[e].z < t.ts[s].z - 2 && (t.ts[s].de = 1));
            if (1 == Cr0f(t, e, s, d, p, c, L, y, E, 7 * h))
                return;
            if ((0 == t.ts[s].Fh || Math.abs(t.ts[s].z - t.ts[e].z) <= 150 && Math.abs(t.ts[s].x - t.ts[e].x) <= 240) && (1 != D && 1 != E || 2 != d || 0 != t.ts[s].Ws || (t.ts[s].left = 1),
            1 == M && 2 == d && 1 == t.ts[s].Ws && (t.ts[s].right = 1),
            4 == t.ts[s].s0.id || 5 == t.ts[s].s0.id || 31 == t.ts[s].s0.id || (t.ts[e].ls > 2 * t.ts[s].ls || t.ts[s].ls <= 100 && 100 < t.ts[s].ns) && 1 == t.$s && 0 == t.ts[e].s0.type && 20 <= s && 5 != t.ts[s].group ? ((t.ts[e].x > t.ts[s].x + 170 || (t.ts[e].x > t.ts[s].x + 150 || 7 == d && t.ts[e].x > t.ts[s].x) && 1 == t.ts[s].Ws) && (0 == D && 0 == E ? (t.ts[s].right = 1,
            0 == t.ye(26, 35 + f) && (t.ts[s].sh = 0)) : B = 1),
            (t.ts[e].x < t.ts[s].x - 170 || (t.ts[e].x < t.ts[s].x - 150 || 7 == d && t.ts[e].x < t.ts[s].x) && 0 == t.ts[s].Ws) && (0 == M ? (t.ts[s].left = 1,
            0 == t.ye(27, 35 + f) && (t.ts[s].eh = 0)) : B = 1)) : (19 != d && (t.ts[e].x > t.ts[s].x + 60 || t.ts[e].x > t.ts[s].x && 1 == t.ts[s].Ws) && (0 != D || 0 != E && 1 != t.ts[s].Ws ? B = 1 : (t.ts[s].right = 1,
            0 == t.ye(28, 35 + f) && (t.ts[s].sh = 0))),
            19 != d && (t.ts[e].x < t.ts[s].x - 60 || t.ts[e].x < t.ts[s].x && 0 == t.ts[s].Ws) && (0 == M ? (t.ts[s].left = 1,
            0 == t.ye(29, 35 + f) && (t.ts[s].eh = 0)) : B = 1)),
            (t.ts[e].z > t.ts[s].z + 3 && 0 == L || (1 == D || 1 == M) && 1 == b) && 0 == w && 19 != d && (t.ts[s].R0 = 1),
            t.ts[e].z < t.ts[s].z - 3 && 0 == L || (1 == D || 1 == M) && 1 == w) && 0 == b && 19 != d && (t.ts[s].de = 1),
            0 < t.ts[s].Eh && 0 == JoYQ(t, e, s, d, p, c, y, L, E, h))
                return;
            0 == t.ye(30, 10 + u) && (3 == c || 3 == Math.floor(c / 100)) && Math.abs(t.ts[e].z - t.ts[s].z) < 9 && (0 == t.ts[e].Ws && t.ts[e].x < t.ts[s].x || 1 == t.ts[e].Ws && t.ts[e].x > t.ts[s].x) && (t.ts[s].ah = 1),
            (0 == t.ts[s].Fh || Math.abs(t.ts[s].z - t.ts[e].z) <= 150 && Math.abs(t.ts[s].x - t.ts[e].x) <= 240) && t.ye(31, 20 + 10 * h) < 3 && t.ye(32, 20) < 3 && 14 != c && (t.ts[s].fe = 1),
            (4 != t.ts[s].s0.id && 5 != t.ts[s].s0.id && 31 != t.ts[s].s0.id || 16 == c) && Math.abs(t.ts[e].x - (t.ts[s].x + 2 * Math.floor(t.ts[s].Gs))) < 80 && Math.abs(t.ts[e].z - t.ts[s].z) < 5 && 0 == t.ye(33, 3 + l) && 14 != c && (t.ts[s].attack = 1),
            0 != t.ts[s].Eh || 16 != c || 4 != t.ts[s].s0.id && 5 != t.ts[s].s0.id && 31 != t.ts[s].s0.id ? 0 != t.ts[s].Eh || 16 == c || 4 != t.ts[s].s0.id && 5 != t.ts[s].s0.id && 31 != t.ts[s].s0.id && 36 != t.ts[s].s0.id ? (t.ts[e].ls > 2 * t.ts[s].ls || t.ts[s].ls <= 100 && 100 < t.ts[s].ns) && 1 == t.$s && 0 == t.ts[e].s0.type && 20 <= s && 5 != t.ts[s].group && Math.abs(t.ts[e].x - t.ts[s].x) < 100 && Math.abs(t.ts[e].z - t.ts[s].z) < 80 && 0 == t.ye(38, 2 + n) && 7 != d && ((0 == t.ts[s].Fh || Math.abs(t.ts[s].z - t.ts[e].z) <= 150 && Math.abs(t.ts[s].x - t.ts[e].x) <= 240) && ((t.ts[e].x < 250 || t.ts[e].x < t.ts[s].x) && t.ts[e].x <= t.yh - 250 ? (t.ts[s].right = 1,
            t.ts[s].sh = 0) : (t.ts[e].x > t.yh - 250 || t.ts[e].x > t.ts[s].x) && (t.ts[s].left = 1,
            t.ts[s].eh = 0)),
            0 == t.ts[s].Fh || Math.abs(t.ts[s].z - t.ts[e].z) <= 150 && Math.abs(t.ts[s].x - t.ts[e].x) <= 240) && 0 == t.ye(39, 17) && (t.ts[s].fe = 1) : Math.abs(t.ts[e].x - t.ts[s].x) < 100 && Math.abs(t.ts[e].z - t.ts[s].z) < 80 && 0 == t.ye(35, 2 + n) && 7 != d ? ((0 == t.ts[s].Fh || Math.abs(t.ts[s].z - t.ts[e].z) <= 150 && Math.abs(t.ts[s].x - t.ts[e].x) <= 240) && ((t.ts[e].x < 250 || t.ts[e].x < t.ts[s].x) && t.ts[e].x <= t.yh - 250 ? (t.ts[s].right = 1,
            t.ts[s].sh = 0) : (t.ts[e].x > t.yh - 250 || t.ts[e].x > t.ts[s].x) && (t.ts[s].left = 1,
            t.ts[s].eh = 0)),
            (0 == t.ts[s].Fh || Math.abs(t.ts[s].z - t.ts[e].z) <= 150 && Math.abs(t.ts[s].x - t.ts[e].x) <= 240) && 0 == t.ye(36, 17) && (t.ts[s].fe = 1)) : Math.abs(t.ts[e].x - (t.ts[s].x + 2 * Math.floor(t.ts[s].Gs))) < 300 && Math.abs(t.ts[e].z - t.ts[s].z) < 5 && 0 == t.ye(37, 3 + l) && 14 != c && (t.ts[e].x > t.ts[s].x && 0 == t.ts[s].Ws || t.ts[e].x <= t.ts[s].x && 1 == t.ts[s].Ws) && (t.ts[s].attack = 1) : Math.abs(t.ts[e].x - (t.ts[s].x + 2 * Math.floor(t.ts[s].Gs))) < 350 && Math.abs(t.ts[e].z - t.ts[s].z) < 5 && 0 == t.ye(34, 3 + l) && 14 != c && (t.ts[e].x > t.ts[s].x && 0 == t.ts[s].Ws || t.ts[e].x <= t.ts[s].x && 1 == t.ts[s].Ws) && (t.ts[s].attack = 1),
            UZAk(t, e, s, d, p, c, y, D, M, h)
        }
        -1 == p && (0 == t.ts[s].Fh && 1 == E && (t.ts[s].left = 1),
        7 == t.ts[s].s0.id ? 255 <= t.ts[s].xs && t.ts[s].xs <= 261 && (t.ts[s].ah = 1) : 9 == t.ts[s].s0.id ? 280 <= t.ts[s].xs && t.ts[s].xs <= 290 && (t.ts[s].ah = 1) : 32 == t.ts[s].s0.id && 240 <= t.ts[s].xs && t.ts[s].xs <= 245 && (t.ts[s].ah = 1))
    }
}
function JoYQ(t, s, e, i, o, a, h, n, r, l) {
    var u, f, d, c = t.Ce;
    let p, g, y;
    if (u = 6 * l,
    f = 9 * l,
    d = 15 * l,
    0 < t.ye(40, 1 + (l *= 3)))
        return 0;
    for (p = 0,
    g = t.ts[t.ts[e].Mh].s0.id,
    y = 0; y < 20; y++)
        y != e && t.Ke[y] && 0 != t.ts[y].group && t.ts[s].group == t.ts[e].group && 0 < t.ts[y].ls && !(14 == t.ts[y].s0.f[t.ts[y].xs].state || 2 < Math.abs(t.ts[y].ds)) && Math.abs(t.ts[y].z - t.ts[e].z) < 15 && Qyjb(t.ts[e].x, t.ts[y].x, t.ts[s].x) && (p = 1);
    if (2 == i && 0 == t.ye(41, 5 + l) && (0 == p ? t.ts[e].attack = 1 : t.ts[e].fe = 1),
    100 != g && 101 != g && 120 != g && 121 != g && 124 != g || (Math.abs(t.ts[s].x - (t.ts[e].x + 2 * Math.floor(t.ts[e].Gs))) < 115 && Math.abs(t.ts[s].z - t.ts[e].z) < 6 && 0 == t.ye(42, 3 + u) && 14 != a && (t.ts[e].attack = 1),
    124 == g && 0 == t.ye(43, 30 + d) && (t.ts[e].attack = 1),
    0 == t.ye(44, 5 + l) && (0 == t.ts[e].Fh || Math.abs(t.ts[e].z - t.ts[s].z) <= 150 && Math.abs(t.ts[e].x - t.ts[s].x) <= 240) && Math.abs(t.ts[s].x - t.ts[e].x) < 600 && Math.abs(t.ts[s].z - t.ts[e].z) < 20 && (t.ts[s].x > t.ts[e].x && 0 == r && (t.ts[e].right = 1,
    t.ts[e].sh = 0),
    t.ts[s].x < t.ts[e].x) && (t.ts[e].left = 1,
    t.ts[e].eh = 0)),
    150 != g && 151 != g || 0 == p && Math.abs(t.ts[s].x - (t.ts[e].x + 2 * Math.floor(t.ts[e].Gs))) < 300 && Math.abs(t.ts[s].z - t.ts[e].z) < 6 && 0 == t.ye(45, 7 + f) && 14 != a && (t.ts[e].attack = 1),
    0 < t.ve)
        122 != g && 123 != g || (t.ts[e].attack = 1);
    else if (122 == g || 123 == g) {
        if (t.ts[e].right = 0,
        t.ts[e].left = 0,
        t.ts[e].de = 0,
        t.ts[e].R0 = 0,
        t.ts[e].attack = 0,
        t.ts[e].fe = 0,
        t.ts[e].ah = 0,
        17 == i && 1 == h && 0 == n && 0 < t.ts[e].ds)
            t.ts[e].ah = 1;
        else if (0 == t.ts[e].Fh || Math.abs(t.ts[e].z - t.ts[s].z) <= 150 && Math.abs(t.ts[e].x - t.ts[s].x) <= 240)
            if (t.ts[s].z < T7ES.Ae[c].us + 30 || !(t.ts[s].z > T7ES.Ae[c]._s - 30 || t.ts[s].z > t.ts[e].z) ? t.ts[e].R0 = 1 : t.ts[e].de = 1,
            t.ts[s].x < 400 && t.ts[e].x < 600)
                t.ts[e].right = 1,
                0 == t.ye(46, 7 + l) && (t.ts[e].sh = 0),
                0 == t.ye(47, 5 + l) && 2 == i && (t.ts[e].fe = 1);
            else if (t.ts[s].x > t.yh - 400 && t.ts[e].x > t.yh - 600)
                t.ts[e].left = 1,
                0 == t.ye(48, 7 + l) && (t.ts[e].eh = 0),
                0 == t.ye(49, 5 + l) && 2 == i && (t.ts[e].fe = 1);
            else if (Math.abs(t.ts[s].x - t.ts[e].x) < 350 && Math.abs(t.ts[s].z - t.ts[e].z) < 70)
                t.ts[s].x > t.ts[e].x && (t.ts[e].left = 1,
                0 == t.ye(50, 4 + l)) && (t.ts[e].eh = 0),
                t.ts[s].x <= t.ts[e].x && (t.ts[e].right = 1,
                0 == t.ye(51, 4 + l)) && (t.ts[e].sh = 0);
            else if (2 == i)
                0 == t.ts[e].Ws && (t.ts[e].left = 1),
                1 == t.ts[e].Ws && (t.ts[e].right = 1);
            else if (0 == t.ye(52, 5)) {
                if (0 == n && (2 == t.ts[e].s0.id || 34 == t.ts[e].s0.id) && 150 < t.ts[e].os && 0 < t.ye(53, 3 + l))
                    return t.ts[s].x > t.ts[e].x ? t.ts[e].wh = 3 : t.ts[e].Dh = 3,
                    1;
                t.ts[e].attack = 1
            }
        return 0
    }
    return 1
}
function UZAk(t, s, e, i, o, a, h, n, r, l) {
    var u = 3 * l
      , f = 5 * l
      , l = 6 * l;
    (4 != t.ts[e].s0.id && 5 != t.ts[e].s0.id && 31 != t.ts[e].s0.id || 36 != t.ts[e].s0.id) && Math.abs(t.ts[s].x - (t.ts[e].x + 2 * Math.floor(t.ts[e].Gs))) < 80 && Math.abs(t.ts[s].z - t.ts[e].z) < 5 && 0 == t.ye(55, 3 + l) && 14 != a && (t.ts[e].attack = 1),
    (0 == n || t.ts[s].x <= t.ts[e].x) && (0 == r || t.ts[s].x >= t.ts[e].x) && 0 == t.ye(56, 1 + u) && (2 != t.ts[e].s0.id && 4 != t.ts[e].s0.id && 6 != t.ts[e].s0.id && 9 != t.ts[e].s0.id && 10 != t.ts[e].s0.id && 11 != t.ts[e].s0.id && 8 != t.ts[e].s0.id && 7 != t.ts[e].s0.id && 33 != t.ts[e].s0.id && 34 != t.ts[e].s0.id || 100 < Math.abs(t.ts[s].x + 2 * Math.floor(t.ts[s].Gs) - t.ts[e].x) && Math.abs(t.ts[s].x + 2 * Math.floor(t.ts[s].Gs) - t.ts[e].x) < 900 && Math.abs(t.ts[s].z - t.ts[e].z) < 5 && 0 == t.ye(57, 10 + u) && 14 != a && (t.ts[e].ah = 1),
    2 != t.ts[e].s0.id && 4 != t.ts[e].s0.id && 6 != t.ts[e].s0.id && 9 != t.ts[e].s0.id && 10 != t.ts[e].s0.id && 11 != t.ts[e].s0.id && 8 != t.ts[e].s0.id && 7 != t.ts[e].s0.id && 33 != t.ts[e].s0.id && 34 != t.ts[e].s0.id || 90 < Math.abs(t.ts[s].x + 2 * Math.floor(t.ts[s].Gs) - t.ts[e].x) && (0 == t.ts[e].Ws && t.ts[s].x > t.ts[e].x || 1 == t.ts[e].Ws && t.ts[s].x < t.ts[e].x) && (110 == t.ts[e].xs || 235 <= t.ts[e].xs) && Math.abs(t.ts[s].z - t.ts[e].z) < 13 && 14 != a && (t.ts[e].sh = 0,
    t.ts[e].eh = 0,
    t.ts[e].es = 0,
    t.ts[s].x > t.ts[e].x ? t.ts[e].right = 1 : t.ts[e].left = 1,
    34 == t.ts[e].s0.id && 0 == t.ye(58, 2) ? t.ts[e].fe = 1 : t.ts[e].attack = 1),
    1 == t.ts[e].s0.id && 100 < Math.abs(t.ts[s].x + 2 * Math.floor(t.ts[s].Gs) - t.ts[e].x) && Math.abs(t.ts[s].x + 2 * Math.floor(t.ts[s].Gs) - t.ts[e].x) < 300 && Math.abs(t.ts[s].z - t.ts[e].z) < 5 && 0 == t.ye(59, 10 + f) && 14 != a && (t.ts[e].ah = 1),
    1 == t.ts[e].s0.id) && 90 < Math.abs(t.ts[s].x + 2 * Math.floor(t.ts[s].Gs) - t.ts[e].x) && (0 == t.ts[e].Ws && t.ts[s].x > t.ts[e].x || 1 == t.ts[e].Ws && t.ts[s].x < t.ts[e].x) && (110 == t.ts[e].xs || 235 <= t.ts[e].xs) && Math.abs(t.ts[s].z - t.ts[e].z) < 7 && 14 != a && (t.ts[e].sh = 0,
    t.ts[e].eh = 0,
    t.ts[e].es = 0,
    t.ts[s].x > t.ts[e].x ? t.ts[e].right = 1 : t.ts[e].left = 1,
    t.ts[e].attack = 1)
}
function Cr0f(e, i, o, t, a, h, n, r, l, s) {
    if (!(0 < e.ye(60, s + 1))) {
        let t, s;
        if (2 == e.ts[o].s0.id) {
            if (0 == e.ye(61, 10) && 350 < e.ts[o].os && (e.ts[o].ls < e.ts[o].rs - 70 && e.ts[o].ls < 140 || e.ts[o].ls < Math.floor(3 * e.ts[o].rs / 5) && 140 <= e.ts[o].ls))
                return e.ts[o].Vh = 3,
                1;
            if (e.Hs < 1e4 && 0 == e.ye(62, 30) && 250 < e.ts[o].os)
                return e.ts[o].Th = 3,
                1;
            if (2 == (t = e.ts[i].s0.id) || 9 == t || 10 == t || 11 == t || 33 == t || 34 == t) {
                if (0 == e.ye(63, 15) && 100 < Math.abs(e.ts[i].x - e.ts[o].x) && Math.abs(e.ts[i].x - e.ts[o].x) < 500 && Math.abs(e.ts[i].z - e.ts[o].z) < 30 && 100 < e.ts[o].os && 220 < e.ts[i].os && 0 == n)
                    return e.ts[i].x > e.ts[o].x ? e.ts[o].wh = 3 : e.ts[o].Dh = 3,
                    1
            } else if (0 == e.ye(64, 15) && 100 < Math.abs(e.ts[i].x - e.ts[o].x) && Math.abs(e.ts[i].x - e.ts[o].x) < 250 && Math.abs(e.ts[i].z - e.ts[o].z) < 30 && 100 < e.ts[o].os && 170 < e.ts[i].os && 0 == n)
                return e.ts[i].x > e.ts[o].x ? e.ts[o].wh = 3 : e.ts[o].Dh = 3,
                1;
            if ((0 == e.ts[o].Eh || e.ts[o].xs < 9) && !(e.ts[o].ls < e.ts[o].rs - 70 && e.ts[o].ls < 140 || e.ts[o].ls < Math.floor(3 * e.ts[o].rs / 5) && 140 <= e.ts[o].ls) && 0 == r) {
                let t;
                for (t = 0; t < 20; t++)
                    if (t != o && e.Ke[t] && 0 != e.ts[t].group && e.ts[t].group == e.ts[o].group && Math.abs(e.ts[t].x - e.ts[o].x) < 250 && Math.abs(e.ts[t].z - e.ts[o].z) < 60 && 350 < e.ts[o].os && (e.ts[t].ls < e.ts[t].rs - 90 && e.ts[t].ls < 140 || e.ts[t].ls < Math.floor(3 * e.ts[t].rs / 5) && 140 <= e.ts[t].ls) && 0 < e.ts[t].ls && (s = Math.abs(e.ts[t].x - e.ts[o].x) + Math.abs(e.ts[t].z - e.ts[o].z)) < Math.floor(e.Hs / 3))
                        return e.ts[t].x > e.ts[o].x ? (e.ts[o].right = 1,
                        e.ts[o].left = 0) : (e.ts[o].right = 0,
                        e.ts[o].left = 1),
                        (e.ts[t].x > e.ts[o].x && 0 == e.ts[o].Ws || e.ts[t].x < e.ts[o].x && 1 == e.ts[o].Ws || Math.abs(e.ts[t].x - e.ts[o].x) < 5) && (e.ts[o].kh = 3),
                        1
            }
        }
        if (1 == e.ts[o].s0.id) {
            if (260 <= e.ts[o].xs && e.ts[o].xs <= 289 && Math.abs(e.ts[i].x - e.ts[o].x) < 100 && Math.abs(e.ts[i].z - e.ts[o].z) < 7)
                return 0 == e.ts[i].y && 0 == e.ts[o].y && 0 == e.ye(65, 3) || e.ts[i].y < 0 && e.ts[o].y < 0 && 0 == e.ye(66, 7) ? (e.ts[o].attack = 1,
                e.ts[o].es = 0) : (e.ts[i].y < 0 && 0 == e.ye(67, 5) || 0 == e.ye(68, 30)) && ((e.ts[i].x > e.ts[o].x && 0 == e.ts[o].Ws || e.ts[i].x < e.ts[o].x && 1 == e.ts[o].Ws) && (e.ts[o].fe = 1),
                e.ts[o].hh = 0),
                1;
            if (0 == e.ye(69, 7) && Math.abs(e.ts[i].x - e.ts[o].x) < 150 && Math.abs(e.ts[i].z - e.ts[o].z) < 8 && 150 < e.ts[o].os && (0 == e.ye(70, 10) && 3 != h || 0 < e.ye(71, 3) && (16 == h || 8 == h || 11 == h)))
                return e.ts[i].x > e.ts[o].x ? e.ts[o].wh = 3 : e.ts[o].Dh = 3,
                1;
            if (0 == e.ye(72, 7) && Math.abs(e.ts[i].x - e.ts[o].x) < 100 && Math.abs(e.ts[i].z - e.ts[o].z) < 7 && 75 < e.ts[o].os)
                return 150 < e.ts[o].os && (0 == e.ye(73, 10) && 3 != h || 0 < e.ye(74, 3) && 16 == h) ? e.ts[i].x > e.ts[o].x ? e.ts[o].wh = 3 : e.ts[o].Dh = 3 : e.ts[o].Ih = 3,
                1
        }
        if (4 == e.ts[o].s0.id) {
            if (360 < e.ts[o].os && Math.abs(e.ts[i].x - e.ts[o].x) < 100 && Math.abs(e.ts[i].z - e.ts[o].z) < 70 && 0 == e.ye(75, Math.floor(e.ts[o].ls / 5) + 10))
                return e.ts[o].kh = 3,
                1;
            if (0 == e.ye(76, 45) && 100 < Math.abs(e.ts[i].x - e.ts[o].x) && Math.abs(e.ts[i].x - e.ts[o].x) < 550 && Math.abs(e.ts[i].z - e.ts[o].z) < 20 && 170 < e.ts[o].os)
                return e.ts[i].x > e.ts[o].x ? e.ts[o].wh = 3 : e.ts[o].Dh = 3,
                1;
            if (0 == e.ye(77, 30) && 200 < e.ts[o].os && 100 < Math.abs(e.ts[i].x - e.ts[o].x) && Math.abs(e.ts[i].x - e.ts[o].x) < 160 && Math.abs(e.ts[i].z - e.ts[o].z) < 55 && (0 == e.ts[o].Ws && e.ts[o].x < e.ts[i].x || 1 == e.ts[o].Ws && e.ts[o].x > e.ts[i].x))
                return e.ts[o].Ch = 3,
                1
        }
        if (5 == e.ts[o].s0.id) {
            if (450 < e.ts[o].os && 100 < Math.abs(e.ts[i].x - e.ts[o].x) && 50 < Math.abs(e.ts[i].z - e.ts[o].z) && 0 == e.ye(78, 3))
                return 0 == e.ye(79, 2) ? e.ts[o].kh = 3 : e.ts[o].Vh = 3,
                1;
            if (70 < e.ts[o].os && 100 < Math.abs(e.ts[i].x - e.ts[o].x) && Math.abs(e.ts[i].x - e.ts[o].x) < 160 && Math.abs(e.ts[i].z - e.ts[o].z) < 8 && 0 == e.ye(80, 10))
                return e.ts[i].x > e.ts[o].x ? e.ts[o].wh = 3 : e.ts[o].Dh = 3,
                1;
            if (0 == e.ye(81, 30) && 200 < e.ts[o].os && 100 < Math.abs(e.ts[i].x - e.ts[o].x) && Math.abs(e.ts[i].x - e.ts[o].x) < 160 && Math.abs(e.ts[i].z - e.ts[o].z) < 55 && (0 == e.ts[o].Ws && e.ts[o].x < e.ts[i].x || 1 == e.ts[o].Ws && e.ts[o].x > e.ts[i].x))
                return e.ts[i].x > e.ts[o].x ? e.ts[o].Ah = 3 : e.ts[o].Xh = 3,
                1
        }
        if (6 == e.ts[o].s0.id) {
            if (100 < e.ts[o].os && 80 < Math.abs(e.ts[i].x - e.ts[o].x) && Math.abs(e.ts[i].x - e.ts[o].x) < 130 && Math.abs(e.ts[i].z - e.ts[o].z) < 30 && 0 == e.ye(82, 10))
                return e.ts[i].x > e.ts[o].x ? e.ts[o].wh = 3 : e.ts[o].Dh = 3,
                1;
            if (100 < e.ts[o].os && Math.abs(e.ts[i].x - e.ts[o].x) < 45 && Math.abs(e.ts[i].z - e.ts[o].z) < 5 && 0 == e.ye(83, 3))
                return e.ts[o].kh = 3,
                1;
            9 == e.ts[o].s0.f[e.ts[o].xs].state && 0 == e.ye(84, 8) && (e.ts[o].fe = 1,
            e.ts[o].hh = 0)
        }
        if (7 == e.ts[o].s0.id) {
            if (267 < e.ts[o].xs && e.ts[o].xs < 283 && (12 == h || 11 == h || 150 < Math.abs(e.ts[i].x - e.ts[o].x) || 25 < Math.abs(e.ts[i].z - e.ts[o].z) || 0 == e.ts[o].Ws && e.ts[o].x < e.ts[i].x || 1 == e.ts[o].Ws && e.ts[o].x > e.ts[i].x))
                return e.ts[o].ah = 1,
                e.ts[o].oh = 0,
                1;
            if (18 != h && 14 != h && 12 != h && 70 < e.ts[o].ls && 320 < e.ts[o].os && (50 < Math.abs(e.ts[i].x - e.ts[o].x) || 10 < Math.abs(e.ts[i].z - e.ts[o].z)) && Math.abs(e.ts[i].x - e.ts[o].x) < 85 && e.ts[o].ls > e.ts[i].ls && Math.abs(e.ts[i].z - e.ts[o].z) < 35 && 0 == e.ye(85, 5))
                return e.ts[o].kh = 3,
                1;
            if (18 != h && 14 != h && 12 != h && 200 < e.ts[o].os && 100 < Math.abs(e.ts[i].x - e.ts[o].x) && Math.abs(e.ts[i].x - e.ts[o].x) < 370 && Math.abs(e.ts[i].z - e.ts[o].z) < 60 && 0 == e.ye(86, 20) || 0 == e.ye(87, 100) && 240 < Math.abs(e.ts[i].x - e.ts[o].x) && Math.abs(e.ts[i].x - e.ts[o].x) < 400)
                return e.ts[i].x > e.ts[o].x ? e.ts[o].wh = 3 : e.ts[o].Dh = 3,
                1;
            if (18 != h && 14 != h && 12 != h && 200 < e.ts[o].os && 60 < Math.abs(e.ts[i].x - e.ts[o].x) && Math.abs(e.ts[i].x - e.ts[o].x) < 280 && Math.abs(e.ts[i].z - e.ts[o].z) < 60 && 0 == e.ye(88, 15) && (0 == e.ts[o].Ws && e.ts[o].x < e.ts[i].x || 1 == e.ts[o].Ws && e.ts[o].x > e.ts[i].x))
                return e.ts[o].Vh = 3,
                1;
            if (255 <= e.ts[o].xs && e.ts[o].xs <= 261) {
                if (0 == e.ts[o].Ws && (e.ts[o].x > e.ts[i].x + 120 || e.ts[o].x > e.yh - 30) || 1 == e.ts[o].Ws && (e.ts[o].x < e.ts[i].x - 120 || e.ts[o].x < 30) || 70 < Math.abs(e.ts[i].z - e.ts[o].z) || 1 == l)
                    return e.ts[o].ah = 1,
                    e.ts[o].oh = 0,
                    1;
                0 == e.ts[o].Ws && e.ts[o].x < e.ts[i].x || 1 == e.ts[o].Ws && e.ts[o].x > e.ts[i].x ? e.ts[i].z > e.ts[o].z ? e.ts[o].R0 = 1 : e.ts[o].de = 1 : e.ts[i].z < e.ts[o].z ? e.ts[o].R0 = 1 : e.ts[o].de = 1
            }
        }
        if (8 == e.ts[o].s0.id) {
            if (13 != h && 200 < e.ts[o].os && Math.abs(e.ts[i].x - e.ts[o].x) < 400 && Math.abs(e.ts[i].z - e.ts[o].z) < 170 && 0 == e.ye(89, 250))
                return e.ts[i].x > e.ts[o].x ? e.ts[o].wh = 3 : e.ts[o].Dh = 3,
                1;
            if (13 != h && 14 != h && 200 < e.ts[o].os && 60 < Math.abs(e.ts[i].x - e.ts[o].x) && Math.abs(e.ts[i].x - e.ts[o].x) < 280 && Math.abs(e.ts[i].z - e.ts[o].z) < 65 && 0 == e.ye(90, 15))
                return e.ts[i].x > e.ts[o].x ? e.ts[o].wh = 3 : e.ts[o].Dh = 3,
                1;
            if (14 != h && 320 < e.ts[o].os && (50 < Math.abs(e.ts[i].x - e.ts[o].x) || 7 < Math.abs(e.ts[i].z - e.ts[o].z) || 13 == h) && Math.abs(e.ts[i].x - e.ts[o].x) < 125 && Math.abs(e.ts[i].z - e.ts[o].z) < 25 && 0 == e.ye(91, 3) && (0 == e.ts[o].Ws && e.ts[o].x < e.ts[i].x || 1 == e.ts[o].Ws && e.ts[o].x > e.ts[i].x))
                return e.ts[o].kh = 3,
                1;
            if (0 == e.ye(92, 50) && 0 == e.ts[o].Eh && 200 < e.ts[o].os && 200 < Math.abs(e.ts[i].x - e.ts[o].x) && 50 < Math.abs(e.ts[i].z - e.ts[o].z))
                return e.ts[o].Vh = 3,
                1
        }
        if (11 == e.ts[o].s0.id) {
            if (150 < e.ts[o].os && Math.abs(e.ts[i].x - e.ts[o].x) < 280 && Math.abs(e.ts[i].z - e.ts[o].z) < 30 && 0 == e.ye(93, 10) && (0 == e.ts[o].Ws && e.ts[o].x < e.ts[i].x || 1 == e.ts[o].Ws && e.ts[o].x > e.ts[i].x))
                return e.ts[i].x > e.ts[o].x && (e.ts[o].Ih = 3),
                1;
            if (290 == e.ts[o].s0.f[e.ts[o].xs].Yh && e.ts[i].y < 0 && (e.ts[o].hh = 0,
            e.ts[o].fe = 1),
            (0 == e.ye(94, 5) || 16 == h || 8 == h) && Math.abs(e.ts[i].x - e.ts[o].x + Math.floor(e.ts[o].Gs)) < 100 && Math.abs(e.ts[i].z - e.ts[o].z) < 7 && 200 < e.ts[o].os && (0 == e.ts[o].Ws && e.ts[o].x < e.ts[i].x || 1 == e.ts[o].Ws && e.ts[o].x > e.ts[i].x))
                return e.ts[o].Th = 3,
                1
        }
        if (10 == e.ts[o].s0.id) {
            if (100 < e.ts[o].os && Math.abs(e.ts[i].x - e.ts[o].x) < 280 && Math.abs(e.ts[i].z - e.ts[o].z) < 25 && 0 == e.ye(95, 10) && (0 == e.ts[o].Ws && e.ts[o].x < e.ts[i].x || 1 == e.ts[o].Ws && e.ts[o].x > e.ts[i].x))
                return e.ts[i].x > e.ts[o].x && (e.ts[o].Ih = 3),
                1;
            if (271 == e.ts[o].xs && e.ts[i].y < 0 && 12 == h)
                return e.ts[o].Th = 3,
                1;
            if ((0 == e.ye(96, 10) || 16 == h || 8 == h) && Math.abs(e.ts[i].x - e.ts[o].x + Math.floor(e.ts[o].Gs)) < 80 && Math.abs(e.ts[i].z - e.ts[o].z) < 7 && (0 == e.ts[o].Ws && e.ts[o].x < e.ts[i].x || 1 == e.ts[o].Ws && e.ts[o].x > e.ts[i].x))
                return e.ts[o].Th = 3,
                1;
            if (200 < e.ts[o].os && 60 < Math.abs(e.ts[i].x - e.ts[o].x) && Math.abs(e.ts[i].x - e.ts[o].x) < 280 && Math.abs(e.ts[i].z - e.ts[o].z) < 65 && (0 == e.ye(97, 15) || 0 == e.ye(98, 4) && (16 == h || 8 == h || 12 == h && e.ts[i].y < -40)))
                return e.ts[i].x > e.ts[o].x ? e.ts[o].wh = 3 : e.ts[o].Dh = 3,
                1;
            if (e.ts[o].ls < 250 && e.ts[o].ls < e.ts[i].ls + 50 && 0 == e.ye(99, 20) && 75 < e.ts[o].os) {
                for (e.Nh = -1,
                k = 0; k < e.Zs; k++)
                    k != o && e.Ke[k] && 0 == e.ts[k].s0.type && e.ts[k].group == e.ts[o].group && e.ts[k].ls > e.ts[i].ls && (s = Math.abs(e.ts[k].x - e.ts[o].x) + Math.abs(e.ts[k].z - e.ts[o].z)) > e.Nh && (a = k,
                    hp2 = e.ts[k].ls,
                    e.Nh = s);
                -1 != a && 300 < e.Nh && 0 == e.ts[o].Eh && (e.ts[o].Vh = 3)
            }
            e.ts[o].ls > e.ts[i].ls && 0 == e.ye(100, 70) && 500 < e.ts[o].os && (e.ts[o].kh = 3)
        }
        if (9 == e.ts[o].s0.id) {
            if ((0 == e.ye(101, 10) || 16 == h || 8 == h) && Math.abs(e.ts[i].x - e.ts[o].x + Math.floor(e.ts[o].Gs)) < 120 && Math.abs(e.ts[i].z - e.ts[o].z) < 7 && (0 == e.ts[o].Ws && e.ts[o].x < e.ts[i].x || 1 == e.ts[o].Ws && e.ts[o].x > e.ts[i].x))
                return e.ts[o].Ih = 3,
                1;
            if (18 != h && 14 != h && 12 != h && 200 < e.ts[o].os && 75 < Math.abs(e.ts[i].x - e.ts[o].x) && Math.abs(e.ts[i].x - e.ts[o].x) < 370 && Math.abs(e.ts[i].z - e.ts[o].z) < 60 && 0 == e.ye(102, 13) || 0 == e.ye(103, 40 + Math.floor(e.ts[i].ls / 4)) && 150 < Math.abs(e.ts[i].x - e.ts[o].x) && Math.abs(e.ts[i].x - e.ts[o].x) < 400)
                return e.ts[i].x > e.ts[o].x ? e.ts[o].wh = 3 : e.ts[o].Dh = 3,
                1;
            if (e.Hs < 1e4 && 0 == e.ye(104, 30) && 150 < e.ts[o].os)
                return e.ts[o].Th = 3,
                1
        }
        if (32 == e.ts[o].s0.id) {
            if (18 != h && 14 != h && 12 != h && 200 < e.ts[o].os && Math.abs(e.ts[i].x - e.ts[o].x) < 270 && Math.abs(e.ts[i].z - e.ts[o].z) < 60 && 0 == e.ye(105, 60) || 0 == e.ye(106, 40 + Math.floor(e.ts[i].ls / 4)) && 150 < Math.abs(e.ts[i].x - e.ts[o].x) && Math.abs(e.ts[i].x - e.ts[o].x) < 400)
                return e.ts[i].x > e.ts[o].x ? e.ts[o].wh = 3 : e.ts[o].Dh = 3,
                1;
            if (Math.abs(e.ts[i].x - e.ts[o].x) < 150 && Math.abs(e.ts[i].z - e.ts[o].z) < 40 && 0 == e.ye(107, 15))
                return e.ts[i].x > e.ts[o].x ? e.ts[o].Ah = 3 : e.ts[o].Xh = 3,
                1
        }
        if (33 == e.ts[o].s0.id && (0 == e.ye(108, 5) || 16 == h || 8 == h) && Math.abs(e.ts[i].x - e.ts[o].x + Math.floor(e.ts[o].Gs)) < 60 && Math.abs(e.ts[i].z - e.ts[o].z) < 7 && 150 < e.ts[o].os && (0 == e.ts[o].Ws && e.ts[o].x < e.ts[i].x || 1 == e.ts[o].Ws && e.ts[o].x > e.ts[i].x))
            return e.ts[o].Th = 3,
            1;
        if (34 == e.ts[o].s0.id) {
            if (0 == e.ye(109, 10) && 350 < e.ts[o].os && (e.ts[o].ls < e.ts[o].rs - 70 && e.ts[o].ls < 140 || e.ts[o].ls < Math.floor(3 * e.ts[o].rs / 5) && 140 <= e.ts[o].ls))
                return e.ts[o].Vh = 3,
                1;
            if ((0 == e.ts[o].Eh || e.ts[o].xs < 9) && !(e.ts[o].ls < e.ts[o].rs - 70 && e.ts[o].ls < 140 || e.ts[o].ls < Math.floor(3 * e.ts[o].rs / 5) && 140 <= e.ts[o].ls) && 0 == r) {
                let t;
                for (t = 0; t < 20; t++)
                    if (t != o && e.Ke[t] && 0 != e.ts[t].group && e.ts[t].group == e.ts[o].group && Math.abs(e.ts[t].x - e.ts[o].x) < 250 && Math.abs(e.ts[t].z - e.ts[o].z) < 60 && 350 < e.ts[o].os && (e.ts[t].ls < e.ts[t].rs - 90 && e.ts[t].ls < 140 || e.ts[t].ls < Math.floor(3 * e.ts[t].rs / 5) && 140 <= e.ts[t].ls) && 0 < e.ts[t].ls && (s = Math.abs(e.ts[t].x - e.ts[o].x) + Math.abs(e.ts[t].z - e.ts[o].z)) < Math.floor(e.Hs / 3))
                        return e.ts[t].x,
                        e.ts[o].x,
                        e.ts[o].right = 1,
                        e.ts[o].left = 0,
                        (e.ts[t].x > e.ts[o].x && 0 == e.ts[o].Ws || e.ts[t].x < e.ts[o].x && 1 == e.ts[o].Ws || Math.abs(e.ts[t].x - e.ts[o].x) < 5) && (e.ts[o].kh = 3),
                        1
            }
        }
        if (50 == e.ts[o].s0.id) {
            if (0 == e.ye(110, 7) && Math.abs(e.ts[i].x - e.ts[o].x) < 500 && 90 < Math.abs(e.ts[i].x - e.ts[o].x) && Math.abs(e.ts[i].z - e.ts[o].z) < 4 && 150 < e.ts[o].os) {
                if (263 != e.ts[i].xs && 264 != e.ts[i].xs)
                    return e.ts[i].x > e.ts[o].x ? e.ts[o].Ah = 3 : e.ts[o].Xh = 3,
                    1;
                e.ts[o].es = 0,
                e.ts[o].attack = 1
            }
            if (0 == e.ye(111, 7) && Math.abs(e.ts[i].x - e.ts[o].x) < 100 && Math.abs(e.ts[i].z - e.ts[o].z) < 7 && 75 < e.ts[o].os)
                return e.ts[o].Ih = 3,
                1
        }
        if (35 == e.ts[o].s0.id && 0 == e.ye(112, 7) && Math.abs(e.ts[i].x - e.ts[o].x) < 650 && 40 < Math.abs(e.ts[i].x - e.ts[o].x) && Math.abs(e.ts[i].z - e.ts[o].z) < 4 && 120 < e.ts[o].os)
            return e.ts[i].x > e.ts[o].x ? e.ts[o].Ah = 3 : e.ts[o].Xh = 3,
            1;
        if (36 == e.ts[o].s0.id) {
            if (200 < e.ts[o].os && 0 == e.ye(113, 5)) {
                let t;
                for (t = 0; t < 100; t++)
                    if (e.Ke[t] && 0 == e.ts[t].s0.type && e.ts[t].group == e.ts[o].group && (e.ts[t].ls < e.ts[t].rs - 200 || e.ts[t].ls < 200 && e.ts[t].ls < e.ts[t].rs - 100)) {
                        e.ts[o].kh = 3;
                        break
                    }
                return 1
            }
            if (260 < e.ts[o].os && 0 == e.ye(114, 10) && Math.abs(e.ts[i].x - e.ts[o].x) < 650 && Math.abs(e.ts[i].x - e.ts[o].x) < 650 && Math.abs(e.ts[i].z - e.ts[o].z) < 240)
                return e.ts[o].Th = 3,
                1
        }
        if (38 == e.ts[o].s0.id) {
            if (150 < e.ts[o].os && 0 == e.ye(115, 5) && Math.abs(e.ts[i].x - e.ts[o].x) < 250 && 130 < Math.abs(e.ts[i].x - e.ts[o].x) && Math.abs(e.ts[i].z - e.ts[o].z) < 10)
                return e.ts[i].x > e.ts[o].x ? e.ts[o].wh = 3 : e.ts[o].Dh = 3,
                1;
            if (200 < e.ts[o].os && 0 == e.ye(116, 10) && Math.abs(e.ts[i].z - e.ts[o].z) < 10)
                return e.ts[i].x > e.ts[o].x ? e.ts[o].Ah = 3 : e.ts[o].Xh = 3,
                1;
            if (200 < e.ts[o].os && 0 == e.ye(117, 10) && (200 < Math.abs(e.ts[i].x - e.ts[o].x) || Math.abs(e.ts[i].z - e.ts[o].z) < 250))
                return e.ts[o].kh = 3,
                1
        }
        if (39 == e.ts[o].s0.id) {
            if (100 < e.ts[o].os && 0 == e.ye(118, 3) && Math.abs(e.ts[i].x - e.ts[o].x) < 120 && (0 == e.ts[o].Ws && e.ts[o].x < e.ts[i].x || 1 == e.ts[o].Ws && e.ts[o].x > e.ts[i].x) && Math.abs(e.ts[i].z - e.ts[o].z) < 10)
                return e.ts[o].Ih = 3,
                1;
            if (100 < e.ts[o].os && 0 == e.ye(119, 7) && Math.abs(e.ts[i].x - e.ts[o].x) < 250 && Math.abs(e.ts[i].z - e.ts[o].z) < 10)
                return e.ts[i].x > e.ts[o].x ? e.ts[o].Ah = 3 : e.ts[o].Xh = 3,
                1
        }
        if (52 == e.ts[o].s0.id) {
            if (3 == h && 125 < e.ts[o].os && 0 == e.ye(120, 10) && Math.abs(e.ts[i].x - e.ts[o].x) < 120 && Math.abs(e.ts[i].z - e.ts[o].z) < 10)
                return e.ts[i].x,
                e.ts[o].x,
                e.ts[o].Ch = 3,
                1;
            if (125 < e.ts[o].os && 0 == e.ye(123, 5) && Math.abs(e.ts[i].x - e.ts[o].x) < 100 && Math.abs(e.ts[i].z - e.ts[o].z) < 30)
                return e.ts[i].x > e.ts[o].x && (e.ts[o].kh = 3),
                1;
            if (125 < e.ts[o].os && 0 == e.ye(124, 14) && Math.abs(e.ts[i].x - e.ts[o].x) < 700 && Math.abs(e.ts[i].z - e.ts[o].z) < 150)
                return e.ts[i].x > e.ts[o].x ? e.ts[o].Ah = 3 : e.ts[o].Xh = 3,
                1;
            if (125 < e.ts[o].os && 0 == e.ye(125, 5) && Math.abs(e.ts[i].z - e.ts[o].z) < 20)
                return e.ts[i].x > e.ts[o].x ? e.ts[o].wh = 3 : e.ts[o].Dh = 3,
                1;
            if ((0 == e.ye(126, 5) || 16 == h || 8 == h) && Math.abs(e.ts[i].x - e.ts[o].x + Math.floor(e.ts[o].Gs)) < 100 && Math.abs(e.ts[i].z - e.ts[o].z) < 7 && e.ts[o].os < 100 && (0 == e.ts[o].Ws && e.ts[o].x < e.ts[i].x || 1 == e.ts[o].Ws && e.ts[o].x > e.ts[i].x))
                return e.ts[o].Th = 3,
                1
        }
        if (51 == e.ts[o].s0.id) {
            if (265 < e.ts[o].xs && e.ts[o].xs < 280 && (13 < Math.abs(e.ts[i].z - e.ts[o].z) || 0 != e.ts[i].s0.type))
                return e.ts[o].oh = 0,
                e.ts[o].ah = 1;
            if (300 < e.ts[o].os && 0 == e.ye(127, 10) && Math.abs(e.ts[i].x - e.ts[o].x) < 300 && Math.abs(e.ts[i].z - e.ts[o].z) < 200)
                return e.ts[o].kh = 3,
                1;
            if (300 < e.ts[o].os && 0 == e.ye(128, 10) && Math.abs(e.ts[i].x - e.ts[o].x) < 950)
                return e.ts[o].Th = 3,
                1;
            if (0 == e.ye(129, 5) && 250 < e.ts[o].os && Math.abs(e.ts[i].x - e.ts[o].x) < 1200 && 40 < Math.abs(e.ts[i].x - e.ts[o].x) && Math.abs(e.ts[i].z - e.ts[o].z) < 13)
                return e.ts[i].x > e.ts[o].x ? e.ts[o].wh = 3 : e.ts[o].Dh = 3,
                1
        }
    }
    return 0
}