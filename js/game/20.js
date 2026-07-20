function Y3W6(t, s, e) {
    let i = -1, o, a;
    if (1 == e) {
        for (t.Hs = 1e4,
        o = 0; o < t.Zs; o++)
            o != s && t.Ke[o] && 0 == t.ts[o].s0.type && t.ts[o].group != t.ts[s].group && 0 < t.ts[o].ls && (a = Math.abs(t.ts[o].x - t.ts[s].x) + Math.abs(t.ts[o].z - t.ts[s].z)) < t.Hs && (i = o,
            t.Hs = a);
        -1 == i ? (t.ts[s].y = 0,
        t.ts[s].ps = t.ts[s].y) : (t.ts[s].y = 0,
        t.ts[s].z = t.ts[i].z + 1,
        0 == t.ts[s].Ws ? t.ts[s].x = t.ts[i].x - 120 : t.ts[s].x = t.ts[i].x + 120,
        t.ts[s].fs = t.ts[s].x,
        t.ts[s].ps = t.ts[s].y,
        t.ts[s].gs = t.ts[s].z),
        t.ts[s].Gs = 0,
        t.ts[s].Os = 0,
        t.ts[s].zs = 0
    } else if (2 == e) {
        for (t.Nh = -1,
        o = 0; o < t.Zs; o++)
            o != s && t.Ke[o] && 0 == t.ts[o].s0.type && t.ts[o].group == t.ts[s].group && 0 < t.ts[o].ls && (a = Math.abs(t.ts[o].x - t.ts[s].x) + Math.abs(t.ts[o].z - t.ts[s].z)) > t.Nh && (i = o,
            t.Nh = a);
        -1 == i ? (t.ts[s].y = 0,
        t.ts[s].ps = t.ts[s].y) : (t.ts[s].y = 0,
        t.ts[s].z = t.ts[i].z + 1,
        0 == t.ts[s].Ws ? t.ts[s].x = t.ts[i].x - 60 : t.ts[s].x = t.ts[i].x + 60,
        t.ts[s].fs = t.ts[s].x,
        t.ts[s].ps = t.ts[s].y,
        t.ts[s].gs = t.ts[s].z),
        t.ts[s].Gs = 0,
        t.ts[s].Os = 0,
        t.ts[s].zs = 0
    }
}