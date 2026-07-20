class JhUX {
}
function Olrd(n, r) {
    var s, a = n.ts[r].s0.f[n.ts[r].xs].Rs;
    if (11 == a && (Z2jw(n, 211, n.ts[r].Ss, 109, n.ts[r].group, n.ts[r].x, n.ts[r].y, n.ts[r].z, n.ts[r].Gs, n.ts[r].Os, n.ts[r].zs, n.ts[r].Ws),
    Z2jw(n, 221, n.ts[r].Ss, 81, n.ts[r].group, n.ts[r].x, n.ts[r].y - 100, n.ts[r].z, n.ts[r].Gs, n.ts[r].Os, n.ts[r].zs, n.ts[r].Ws),
    Z2jw(n, 212, n.ts[r].Ss, 100, n.ts[r].group, n.ts[r].x + 80, n.ts[r].y - 3, n.ts[r].z, n.ts[r].Gs, n.ts[r].Os, n.ts[r].zs - 7, 0),
    Z2jw(n, 212, n.ts[r].Ss, 100, n.ts[r].group, n.ts[r].x + 100, n.ts[r].y - 3, n.ts[r].z, n.ts[r].Gs, n.ts[r].Os, n.ts[r].zs, 0),
    Z2jw(n, 212, n.ts[r].Ss, 100, n.ts[r].group, n.ts[r].x + 80, n.ts[r].y - 3, n.ts[r].z, n.ts[r].Gs, n.ts[r].Os, n.ts[r].zs + 7, 0),
    Z2jw(n, 212, n.ts[r].Ss, 100, n.ts[r].group, n.ts[r].x - 80, n.ts[r].y - 3, n.ts[r].z, n.ts[r].Gs, n.ts[r].Os, n.ts[r].zs - 7, 1),
    Z2jw(n, 212, n.ts[r].Ss, 100, n.ts[r].group, n.ts[r].x - 100, n.ts[r].y - 3, n.ts[r].z, n.ts[r].Gs, n.ts[r].Os, n.ts[r].zs, 1),
    Z2jw(n, 212, n.ts[r].Ss, 100, n.ts[r].group, n.ts[r].x - 80, n.ts[r].y - 3, n.ts[r].z, n.ts[r].Gs, n.ts[r].Os, n.ts[r].zs + 7, 1),
    Z2jw(n, 211, n.ts[r].Ss, 50, n.ts[r].group, n.ts[r].x - 30, n.ts[r].y - 1, n.ts[r].z - 5, n.ts[r].Gs, n.ts[r].Os, n.ts[r].zs, 1),
    Z2jw(n, 211, n.ts[r].Ss, 50, n.ts[r].group, n.ts[r].x + 30, n.ts[r].y - 1, n.ts[r].z - 5, n.ts[r].Gs, n.ts[r].Os, n.ts[r].zs, 1),
    Z2jw(n, 211, n.ts[r].Ss, 50, n.ts[r].group, n.ts[r].x - 30, n.ts[r].y - 1, n.ts[r].z + 2, n.ts[r].Gs, n.ts[r].Os, n.ts[r].zs, 0),
    Z2jw(n, 211, n.ts[r].Ss, 50, n.ts[r].group, n.ts[r].x + 30, n.ts[r].y - 1, n.ts[r].z + 2, n.ts[r].Gs, n.ts[r].Os, n.ts[r].zs, 0),
    Z2jw(n, 211, n.ts[r].Ss, 50, n.ts[r].group, n.ts[r].x, n.ts[r].y - 1, n.ts[r].z - 9, n.ts[r].Gs, n.ts[r].Os, n.ts[r].zs, 1),
    Z2jw(n, 211, n.ts[r].Ss, 50, n.ts[r].group, n.ts[r].x, n.ts[r].y - 1, n.ts[r].z + 6, n.ts[r].Gs, n.ts[r].Os, n.ts[r].zs, 0),
    n.Ke[r] = !1),
    8 == a) {
        let t, s, e, i, o, a = t = 0;
        for (s = 0; s < n.Zs; s++)
            n.Ke[s] && 0 == n.ts[s].s0.type && n.ts[s].group != n.ts[r].group && 0 < n.ts[s].ls && (n.Ps[a] = s,
            a++);
        let h = 3;
        for (4 < a && (h = Math.floor((a - 3) / 2) + 3),
        s = 0; s < h; s++) {
            for (t++,
            e = -1,
            o = 50; o < n.Zs; o++)
                if (!n.Ke[o]) {
                    e = o;
                    break
                }
            if ((i = -1) != e)
                for (o = 0; o < T7ES._e; o++)
                    if (225 == T7ES.s0[o].id) {
                        i = o;
                        break
                    }
            -1 != e && -1 != i && (n.ts[e].hs(T7ES.s0[i], 580, -200, 300),
            n.ts[e].Ss = n.ts[r].Ss,
            n.ts[e].x = n.ts[r].x,
            n.ts[e].y = n.ts[r].y,
            n.ts[e].z = n.ts[r].z,
            n.ts[e].group = n.ts[r].group,
            n.ts[e].fs = n.ts[r].fs,
            n.ts[e].ps = n.ts[r].ps,
            n.ts[e].gs = n.ts[r].gs,
            n.ts[e].xs = 0,
            n.ts[e].Gs = n.ye(3, 21) - 11,
            n.ts[e].Os = 3 - n.ye(5, 24) / 4,
            n.ts[e].zs = 3 - n.ye(6, 24) / 4,
            n.ts[e].Ws = n.ts[r].Ws,
            0 == a ? n.ts[e].Js = r : n.ts[e].Js = n.Ps[n.ye(7, a)],
            n.Ke[e] = !0)
        }
        n.Ke[r] = !1
    } else if (13 == a) {
        let t, s, e, i, o, a = o = 0;
        for (t = 0; t < n.Zs; t++)
            n.Ke[t] && 0 == n.ts[t].s0.type && n.ts[t].group != n.ts[r].group && 0 < n.ts[t].ls && (n.Ps[a] = t,
            a++);
        for (t = 0; t < 1; t++) {
            for (o++,
            s = -1,
            i = 50; i < n.Zs; i++)
                if (!n.Ke[i]) {
                    s = i;
                    break
                }
            if ((e = -1) != s)
                for (i = 0; i < T7ES._e; i++)
                    if (228 == T7ES.s0[i].id) {
                        e = i;
                        break
                    }
            -1 != s && -1 != e && (n.ts[s].hs(T7ES.s0[e], 580, -200, 300),
            n.ts[s].Ss = n.ts[r].Ss,
            n.ts[s].x = n.ts[r].x,
            n.ts[s].y = n.ts[r].y - 3 + n.ye(8, 7),
            n.ts[s].z = n.ts[r].z,
            n.ts[s].group = n.ts[r].group,
            n.ts[s].fs = n.ts[r].fs,
            n.ts[s].ps = n.ts[r].ps,
            n.ts[s].gs = n.ts[r].gs,
            n.ts[s].xs = 0,
            n.ts[s].Gs = n.ts[r].Gs,
            n.ts[s].zs = 3 - n.ye(11, 24) / 4 + n.ts[r].zs,
            n.ts[s].Ws = n.ts[r].Ws,
            0 == a ? n.ts[s].Js = r : n.ts[s].Js = n.Ps[n.ye(12, a)],
            n.Ke[s] = !0)
        }
        n.Ke[r] = !1
    } else if (5 == a) {
        let t, s, e, i;
        for (t = 0; t < n.Zs; t++)
            if (n.Ke[t] && 0 == n.ts[t].s0.type && n.ts[t].group == n.ts[r].group && 0 < n.ts[t].ls) {
                for (s = -1,
                i = 50; i < n.Zs; i++)
                    if (!n.Ke[i]) {
                        s = i;
                        break
                    }
                if ((e = -1) != s)
                    for (i = 0; i < T7ES._e; i++)
                        if (219 == T7ES.s0[i].id) {
                            e = i;
                            break
                        }
                -1 != s && -1 != e && (n.ts[s].hs(T7ES.s0[e], 580, -200, 300),
                n.ts[s].Ss = n.ts[r].Ss,
                n.ts[s].x = n.ts[r].x,
                n.ts[s].y = n.ts[r].y,
                n.ts[s].z = n.ts[r].z,
                n.ts[s].group = n.ts[r].group,
                n.ts[s].fs = n.ts[r].fs,
                n.ts[s].ps = n.ts[r].ps,
                n.ts[s].gs = n.ts[r].gs,
                n.ts[s].xs = 0,
                n.ts[s].Gs = (n.ts[t].x - n.ts[s].x) / 50,
                n.ts[s].Os = 0,
                n.ts[s].zs = 0,
                n.ts[s].Ws = 0,
                n.ts[s].Js = t,
                n.Ke[s] = !0)
            }
        n.Ke[r] = !1
    } else if (6 == a || 9 == a) {
        let t, s, e = (t = 9 == a ? 4 : 0,
        s = 0,
        10), o = (6 == a && (e = 7),
        0);
        do {
            for (i = 0; i < n.Zs; i++)
                if (n.Ke[i] && 0 == n.ts[i].s0.type && n.ts[i].group != n.ts[r].group && 0 < n.ts[i].ls && (s < t || 0 == o)) {
                    for (s++,
                    j = -1,
                    m = 50; m < n.Zs; m++)
                        if (!n.Ke[m]) {
                            j = m;
                            break
                        }
                    if ((k = -1) != j) {
                        var h = 6 == a ? 220 : 221 + n.ye(13, 2);
                        for (m = 0; m < T7ES._e; m++)
                            if (T7ES.s0[m].id == h) {
                                k = m;
                                break
                            }
                    }
                    if (-1 != j && -1 != k && (n.ts[j].hs(T7ES.s0[k], 580, -200, 300),
                    n.ts[j].Ss = n.ts[r].Ss,
                    n.ts[j].x = n.ts[r].x,
                    n.ts[j].y = n.ts[r].y,
                    n.ts[j].z = n.ts[r].z,
                    n.ts[j].group = n.ts[r].group,
                    n.ts[j].fs = n.ts[r].fs,
                    n.ts[j].ps = n.ts[r].ps,
                    n.ts[j].gs = n.ts[r].gs,
                    n.ts[j].xs = 0,
                    6 == a ? (n.ts[j].Gs = (n.ts[i].x - n.ts[j].x) / 50,
                    n.ts[j].Os = -4 - n.ye(14, 4)) : 9 == a && (n.ts[j].Gs = n.ye(15, 21) - 11,
                    n.ts[j].Os = -2 - n.ye(16, 40) / 6),
                    n.ts[j].zs = 0,
                    n.ts[j].Ws = 0,
                    n.ts[j].Js = i,
                    n.Ke[j] = !0),
                    s >= e)
                        break
                }
        } while (o++,
        s < t && 0 != s && -1 != j && s < e);
        n.Ke[r] = !1
    } else {
        if (7 == a) {
            let t, s, e;
            for (t = -1,
            e = 50; e < n.Zs; e++)
                if (!n.Ke[e]) {
                    t = e;
                    break
                }
            if ((s = -1) != t)
                for (e = 0; e < T7ES._e; e++)
                    if (T7ES.s0[e].id == n.ts[r].s0.id) {
                        s = e;
                        break
                    }
            -1 != t && -1 != s && (n.ts[t].hs(T7ES.s0[s], 580, -200, 300),
            n.ts[t].Ss = n.ts[r].Ss,
            n.ts[t].x = n.ts[r].x,
            n.ts[t].y = n.ts[r].y,
            n.ts[t].z = n.ts[r].z,
            n.ts[t].group = n.ts[r].group,
            n.ts[t].fs = n.ts[r].fs,
            n.ts[t].ps = n.ts[r].ps,
            n.ts[t].gs = n.ts[r].gs,
            n.ts[t].xs = 40,
            n.ts[t].Gs = 0,
            n.ts[t].Os = 0,
            n.ts[t].zs = 0,
            n.ts[t].Ws = 0,
            n.Ke[t] = !0)
        }
        if (10 == a)
            n.ts[r].Gs < 0 ? n.ts[r].Gs -= 1.1 : n.ts[r].Gs += 1.1,
            30 < n.ts[r].Gs && (n.ts[r].Gs = 30),
            n.ts[r].Gs < -30 && (n.ts[r].Gs = -30),
            3 < n.ts[r].ps && (n.ts[r].ps = 3),
            0 < n.ts[r].Gs ? n.ts[r].Ws = 0 : n.ts[r].Ws = 1;
        else {
            if (n.Hs = 1e4,
            n.Qs = -1,
            0 <= n.ts[r].js && n.Ke[n.ts[r].js] && (n.Qs = n.ts[n.ts[r].js].group),
            4 != a && 5 != a && 6 != a && 7 != a && (-1 == n.ts[r].Js || !n.Ke[n.ts[r].Js] || n.ts[n.ts[r].Js].ls <= 0 || 14 == n.ts[n.ts[r].Js].s0.f[n.ts[n.ts[r].Js].xs].state || 2 < Math.abs(n.ts[n.ts[r].Js].ds) || n.ts[n.ts[r].Js].group == n.ts[r].group || n.Qs == n.ts[n.ts[r].Js].group)) {
                for (i = 0; i < n.Zs; i++)
                    i != r && n.Ke[i] && 0 == n.ts[i].s0.type && n.ts[i].group != n.ts[r].group && n.Qs != n.ts[i].group && (!(14 == n.ts[i].s0.f[n.ts[i].xs].state || 2 < Math.abs(n.ts[i].ds)) || -1 == n.ts[r].Js) && 0 < n.ts[i].ls && (n.yt = Math.abs(n.ts[i].x - n.ts[r].x) + Math.abs(n.ts[i].z - n.ts[r].z),
                    n.yt < n.Hs) && (n.ts[r].Js = i,
                    n.Hs = n.yt);
                if (-1 == n.ts[r].Js)
                    return void (n.ts[r].ls = 0)
            }
            if (s = n.ts[r].Js,
            1 == a)
                n.ts[s].x > n.ts[r].x && (n.ts[r].Gs += .85),
                n.ts[s].x < n.ts[r].x && (n.ts[r].Gs -= .85),
                n.ts[s].z > n.ts[r].z + 7 && (n.ts[r].zs += .3),
                n.ts[s].z < n.ts[r].z - 7 && (n.ts[r].zs -= .3),
                n.ts[r].Os /= 1.4,
                0 == n.ts[s].s0.type ? (n.ts[s].ps > n.ts[r].ps + 10 && (n.ts[r].ps += 1.2),
                n.ts[s].ps < n.ts[r].ps + 10 && (n.ts[r].ps -= 1.2)) : 0 < n.ts[r].ps && (n.ts[r].ps += 1),
                13 < n.ts[r].Gs && (n.ts[r].Gs = 13),
                n.ts[r].Gs < -13 && (n.ts[r].Gs = -13),
                2 < n.ts[r].zs && (n.ts[r].zs = 2),
                n.ts[r].zs < -2 && (n.ts[r].zs = -2),
                1 < n.ts[r].ps && (n.ts[r].ps = 1),
                0 < n.ts[r].Gs ? n.ts[r].Ws = 0 : n.ts[r].Ws = 1;
            else if (4 == a && 0 < n.ts[s].ls && n.ts[r].x > n.ts[s].x - 30 && n.ts[r].x < n.ts[s].x + 30 && n.ts[r].y > n.ts[s].y - 80 && n.ts[r].y < n.ts[s].y && n.ts[r].z > n.ts[s].z - 10 && n.ts[r].z < n.ts[s].z + 10)
                n.ts[r].Gs = 0,
                n.ts[r].Os = 0,
                n.ts[r].zs = 0,
                n.ts[r].xs = 60,
                n.ts[s].Ks = 100;
            else if ((14 == a || 12 == a || 2 == a || 4 == a || 7 == a) && 0 < n.ts[r].ls && n.Ke[r]) {
                n.ts[s].x > n.ts[r].x && (n.ts[r].Gs += .7),
                n.ts[s].x < n.ts[r].x && (n.ts[r].Gs -= .7),
                7 == a && (n.ts[s].x > n.ts[r].x && (n.ts[r].Gs += .7),
                n.ts[s].x < n.ts[r].x) && (n.ts[r].Gs -= .7),
                n.ts[s].z > n.ts[r].z + 5 && (n.ts[r].zs += .4),
                n.ts[s].z < n.ts[r].z - 5 && (n.ts[r].zs -= .4),
                2 == a || 4 == a || 12 == a ? (n.ts[r].Os /= 1.4,
                0 == n.ts[s].s0.type ? (n.ts[s].ps > n.ts[r].ps + 40 && (n.ts[r].ps += 1),
                n.ts[s].ps < n.ts[r].ps + 40 && --n.ts[r].ps) : 0 < n.ts[r].ps && (n.ts[r].ps += 1)) : 7 == a && (n.ts[r].Os < 4 && (n.ts[r].Os += .4),
                n.ts[r].ps += n.ts[r].Os,
                -25 < n.ts[r].y) && (n.ts[r].xs = 60,
                n.ts[r].Os = n.ts[r].Gs = n.ts[r].zs = 0),
                14 < n.ts[r].Gs && (n.ts[r].Gs = 14),
                n.ts[r].Gs < -14 && (n.ts[r].Gs = -14),
                1.4 < n.ts[r].ps && (n.ts[r].ps = 1.4),
                14 == a ? (1.5 < n.ts[r].zs && (n.ts[r].zs = 1.5),
                n.ts[r].zs < -1.5 && (n.ts[r].zs = -1.5)) : (2.2 < n.ts[r].zs && (n.ts[r].zs = 2.2),
                n.ts[r].zs < -2.2 && (n.ts[r].zs = -2.2)),
                0 < n.ts[r].Gs ? n.ts[r].Ws = 0 : n.ts[r].Ws = 1;
                let t = n.ts[r].Gs;
                t < 0 && (t = -t),
                2 == a && (14 < t ? 5 != n.ts[r].xs && 6 != n.ts[r].xs && (n.ts[r].xs = 5) : 7 < t ? 3 != n.ts[r].xs && 4 != n.ts[r].xs && (n.ts[r].xs = 3) : 1 != n.ts[r].xs && 2 != n.ts[r].xs && (n.ts[r].xs = 1)),
                14 == a && (t < 8 ? n.ts[r].xs < 10 && (n.ts[r].xs += 50) : 40 < n.ts[r].xs && (n.ts[r].xs -= 50))
            } else if (14 != a && 12 != a && 2 != a && 4 != a && 7 != a || !(n.ts[r].ls <= 0) && n.Ke[r])
                3 == a && (n.ts[s].x > n.ts[r].x && (n.ts[r].Gs += .7),
                n.ts[s].x < n.ts[r].x && (n.ts[r].Gs -= .7),
                n.ts[s].z > n.ts[r].z + 10 && (n.ts[r].zs += .17),
                n.ts[s].z < n.ts[r].z - 10 && (n.ts[r].zs -= .17),
                16 < n.ts[r].Gs && (n.ts[r].Gs = 16),
                n.ts[r].Gs < -16 && (n.ts[r].Gs = -16),
                2.4 < n.ts[r].zs && (n.ts[r].zs = 2.4),
                n.ts[r].zs < -2.4) && (n.ts[r].zs = -2.4);
            else {
                n.ts[r].Gs < 0 ? n.ts[r].Gs -= 2 : n.ts[r].Gs += 2,
                17 < n.ts[r].Gs && (n.ts[r].Gs = 17),
                n.ts[r].Gs < -17 && (n.ts[r].Gs = -17),
                2 == a || 4 == a || 14 == a || 12 == a ? 1.4 < n.ts[r].ps && (n.ts[r].ps = 1.4) : 7 == a && (n.ts[r].Os < 4 && (n.ts[r].Os += .4),
                n.ts[r].ps += n.ts[r].Os,
                -25 < n.ts[r].y) && (n.ts[r].xs = 60,
                n.ts[r].y = -25,
                n.ts[r].Os = n.ts[r].Gs = n.ts[r].zs = 0),
                0 < n.ts[r].Gs ? n.ts[r].Ws = 0 : n.ts[r].Ws = 1;
                let t = n.ts[r].Gs;
                t < 0 && (t = -t),
                2 == a && (14 < t ? 5 != n.ts[r].xs && 6 != n.ts[r].xs && (n.ts[r].xs = 5) : 7 < t ? 3 != n.ts[r].xs && 4 != n.ts[r].xs && (n.ts[r].xs = 3) : 1 != n.ts[r].xs && 2 != n.ts[r].xs && (n.ts[r].xs = 1))
            }
        }
    }
}