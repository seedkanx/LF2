class CXTj {
}
let mainMenu_avatar_opacity = 0;
function We0h(t) {
    BLg_.V && (BLg_.V = !1,
    BLg_.Ui()),
    D.JyWD(0, 0, Hhar, T0mk, FouV.St),
    null != BLg_.o1 ? (mainMenu_avatar_opacity < 1 && (mainMenu_avatar_opacity += .2),
    s = D.JjQ2(BLg_.a1),
    D.Dm9f(BLg_.o1, 0, 0, 0, 550 / s, 0, 0, 0, mainMenu_avatar_opacity)) : mainMenu_avatar_opacity = 0,
    FouV.wt = 1.5,
    FouV.Dt = FouV.wt / BLg_.Mi,
    D.Dm9f(BLg_.xi[1], (ZcYj - 480 * FouV.wt) / 2, 90, 0, FouV.Dt),
    (new Date).getFullYear();
    var s = .995 * Hhar
      , e = .99 * T0mk;
    D.C_wB('<a onclick="globalUnlockPage()" href="#">Achievements 成就 ✹ ' + FouV.It + " / " + FouV.Ct + "</a>", 15, e - 42, "OkQn", "#9aaff3"),
    D.C_wB('<a onclick="globalQuitGame()" href="#">Quit 離開</a>', s, e - 42, "KrcT", "#5A77D8"),
    CrdD.j0 < 0 ? (D.C_wB("Sorry. The unlock code has been changed. Clear Stage Mode on Difficult to reveal it.", s / 2, e - 204, "Itbg", "#FFF"),
    D.C_wB("抱歉. 解鎖碼已更改。完成「困難」的「關關模式」即可查看。", s / 2, e - 150, "Itbg", "#FFF"),
    CrdD.j0++) : 0 < CrdD.j0 && (D.C_wB("Unlock code accepted — Julian is now unlocked!", s / 2, e - 204, "Itbg", "#FFF"),
    D.C_wB("解鎖碼使用成功 ── 邪鬼已解鎖！", s / 2, e - 150, "Itbg", "#FFF"),
    CrdD.j0--),
    FouV.wt = 1.4,
    FouV.Dt = FouV.wt / BLg_.Mi,
    FouV.Kt = (ZcYj - 305 * FouV.wt) / 2,
    FouV.$t = 165 * FouV.wt,
    D.Dm9f(BLg_.e1[1], FouV.Kt, FouV.$t, 0, FouV.Dt);
    let i = -1;
    0 == (i = FouV.Jt >= FouV.Kt + 13 * FouV.wt && FouV.Jt <= FouV.Kt + 288 * FouV.wt && (FouV.Ht >= FouV.$t + -2 * FouV.wt && FouV.Ht <= FouV.$t + 21 * FouV.wt && (i = 0),
    FouV.Ht >= FouV.$t + 25 * FouV.wt && FouV.Ht <= FouV.$t + 48 * FouV.wt && (i = 1),
    FouV.Ht >= FouV.$t + 52 * FouV.wt && FouV.Ht <= FouV.$t + 75 * FouV.wt && (i = 2),
    FouV.Ht >= FouV.$t + 79 * FouV.wt && FouV.Ht <= FouV.$t + 102 * FouV.wt && (i = 3),
    FouV.Ht >= FouV.$t + 105 * FouV.wt && FouV.Ht <= FouV.$t + 128 * FouV.wt && (i = 4),
    FouV.Ht >= FouV.$t + 133 * FouV.wt) && FouV.Ht <= FouV.$t + 156 * FouV.wt ? 5 : i) ? D.Dm9f(BLg_.e1[2], FouV.Kt + 45 * FouV.wt, FouV.$t + -2 * FouV.wt, 0, FouV.Dt, 0, 0, 0, .3) : 1 == i ? D.Dm9f(BLg_.e1[3], FouV.Kt + 31 * FouV.wt, FouV.$t + 25 * FouV.wt, 0, FouV.Dt, 0, 0, 0, .3) : 2 == i ? D.Dm9f(BLg_.e1[4], FouV.Kt + 13 * FouV.wt, FouV.$t + 52 * FouV.wt, 0, FouV.Dt, 0, 0, 0, .3) : 3 == i ? D.Dm9f(BLg_.e1[5], FouV.Kt + 13 * FouV.wt, FouV.$t + 79 * FouV.wt, 0, FouV.Dt, 0, 0, 0, .3) : 4 == i ? D.Dm9f(BLg_.e1[38], FouV.Kt + 46 * FouV.wt, FouV.$t + 105 * FouV.wt, 0, FouV.Dt, 0, 0, 0, .3) : 5 == i && D.Dm9f(BLg_.e1[6], FouV.Kt + 55 * FouV.wt, FouV.$t + 133 * FouV.wt, 0, FouV.Dt, 0, 0, 0, .3),
    -1 < i && FouV.F && (FouV.F = !1,
    0 == i && (CrdD.Na = 512),
    1 == i && (CrdD.Na = 1024),
    2 == i && (CrdD.Na = 2048),
    3 == i && (CrdD.Na = 4096),
    4 == i && (CrdD.Na = 8192),
    5 == i) && (CrdD.Na = 16384),
    0 == t.$s ? D.Dm9f(BLg_.e1[2], FouV.Kt + 45 * FouV.wt, FouV.$t + -2 * FouV.wt, 0, FouV.Dt) : 1 == t.$s ? D.Dm9f(BLg_.e1[3], FouV.Kt + 31 * FouV.wt, FouV.$t + 25 * FouV.wt, 0, FouV.Dt) : 2 == t.$s ? D.Dm9f(BLg_.e1[4], FouV.Kt + 13 * FouV.wt, FouV.$t + 52 * FouV.wt, 0, FouV.Dt) : 3 == t.$s ? D.Dm9f(BLg_.e1[5], FouV.Kt + 13 * FouV.wt, FouV.$t + 79 * FouV.wt, 0, FouV.Dt) : 4 == t.$s ? D.Dm9f(BLg_.e1[38], FouV.Kt + 46 * FouV.wt, FouV.$t + 105 * FouV.wt, 0, FouV.Dt) : 5 == t.$s && D.Dm9f(BLg_.e1[6], FouV.Kt + 55 * FouV.wt, FouV.$t + 133 * FouV.wt, 0, FouV.Dt),
    IAlU(t),
    0 < t.de && (t.$s = t.$s - 1,
    t.$s < 0) && (t.$s = 5),
    0 < t.R0 && (t.$s = (t.$s + 1) % 6),
    (0 < t.attack || FouV.si || 0 != (512 & CrdD.Ua) || 0 != (1024 & CrdD.Ua) || 0 != (2048 & CrdD.Ua) || 0 != (4096 & CrdD.Ua) || 0 != (8192 & CrdD.Ua) || 0 != (16384 & CrdD.Ua)) && (t.$s < 7 && XYSz.D(1, 1),
    (0 == t.$s || FouV.si && "vs" == FouV.hi || 0 != (512 & CrdD.Ua)) && (t.$s = 0,
    t.fo = 0,
    t.H0 = 3,
    t.Ce = 100,
    t.Ie = 1,
    BLg_.se()),
    1 != t.$s && 0 == (1024 & CrdD.Ua) || (t.$s = 1,
    t.fo = 0,
    t.H0 = 3,
    t.Ce = 100,
    t.Ie = 1,
    BLg_.se()),
    2 != t.$s && 0 == (2048 & CrdD.Ua) || (-1 == t.ve && (t.ve = 0),
    t.$s = 2,
    t.H0 = 20,
    t.Ce = 0,
    t.Ie = 0,
    CrdD.j0 = 0,
    BLg_.se()),
    3 != t.$s && 0 == (4096 & CrdD.Ua) || (-1 == t.ve && (t.ve = 0),
    t.$s = 3,
    t.H0 = 120,
    t.Ce = 0,
    t.Ie = 0,
    CrdD.j0 = 0,
    BLg_.se()),
    4 != t.$s && 0 == (8192 & CrdD.Ua) || (-1 == t.ve && (t.ve = 0),
    t.$s = 4,
    t.fo = 0,
    t.H0 = 3,
    t.Ce = 100,
    t.Ie = 1,
    CrdD.j0 = 0,
    BLg_.se()),
    5 != t.$s && 0 == (16384 & CrdD.Ua) || (t.ve = 0,
    t.$s = 5,
    t.H0 = 2,
    t.rh = 1,
    CrdD.j0 = 0,
    BLg_.se()),
    t.$s)
}
class LkUA {
}
function MVtz(t) {
    let s = 0
      , e = 0
      , i = 0
      , o = -1
      , a = -1;
    for (s = 0; s < 8; s++)
        t.Ke[s] && (0 < t.ts[s].de && (t.Oo[s] || (1 == t.Id[s] && (t.Id[s] = 0,
        XYSz.D(0, 1)),
        -1 == t.Id[s] && (o = s,
        a = 0,
        XYSz.D(0, 1))),
        t.Oo[s] = !0),
        0 < t.ts[s].R0) && (t.Oo[s] || (0 == t.Id[s] && (t.Id[s] = 1,
        XYSz.D(0, 1)),
        -1 == t.Id[s] && (o = s,
        a = 1,
        XYSz.D(0, 1))),
        t.Oo[s] = !0);
    if (Sh7E.So) {
        for (e = 0,
        i = 0,
        s = 0; s < 8; s++)
            t.Ke[s] && (1 == t.Id[s] && (e = 1),
            0 == t.Id[s]) && (i = 1);
        if ((0 == e || 0 == i) && (Sh7E.So = !Sh7E.So,
        !Sh7E.So))
            for (s = 0; s < 8; s++)
                t.Id[s] = -1
    }
    if (IAlU(t),
    0 < t.left && !Sh7E.So || 0 < t.right && Sh7E.So || -1 != o)
        if ((0 < t.left && !Sh7E.So || 0 < t.right && Sh7E.So) && XYSz.D(0, 1),
        Sh7E.So = !Sh7E.So,
        Sh7E.So) {
            for (e = 0,
            s = 0; s < 8; s++)
                t.Ke[s] && -1 == t.Id[s] && (e = 1);
            if (1 == e) {
                var h = [-1, -1, -1, -1, -1];
                if (i = 0,
                -1 != o)
                    for (0 != t.ts[o].group && (h[t.ts[o].group] = a),
                    s = 0; s < 8; s++)
                        t.Ke[s] && (s == o || 0 != t.ts[s].group && t.ts[s].group == t.ts[o].group) && (t.Id[s] = a,
                        i = 1 - a);
                for (s = 0; s < 8; s++)
                    t.Ke[s] && -1 == t.Id[s] && (0 == t.ts[s].group ? i = 1 - (t.Id[s] = i) : -1 != h[t.ts[s].group] ? t.Id[s] = h[t.ts[s].group] : (t.Id[s] = i,
                    i = 1 - (h[t.ts[s].group] = i)))
            }
            for (e = 0,
            i = 0,
            s = 0; s < 8; s++)
                t.Ke[s] && (1 == t.Id[s] && (e = 1),
                0 == t.Id[s]) && (i = 1);
            if (0 == e || 0 == i)
                for (i = 0,
                -1 != o && (i = (o + a) % 2),
                s = 0; s < 8; s++)
                    t.Ke[s] && (i = 1 - (t.Id[s] = i))
        } else
            for (s = 0; s < 8; s++)
                t.Id[s] = -1;
    t.Kt = 3,
    t.$t = 3;
    let n = 0
      , r = 0
      , l = 0;
    for (1 == t.po ? (n = 117,
    r = 0) : 2 == t.po ? (n = 88,
    r = 59) : 3 == t.po ? (n = 70,
    r = 47) : 4 == t.po && (n = 67,
    r = 35),
    l = n,
    D.Dm9f(BLg_.z1, 3, 3, 0, 1 / BLg_.ie),
    D.Dm9f(BLg_.s1[5], 47, 73, 0, 1 / BLg_.ie),
    D.Dm9f(BLg_.s1[6], 151, 73, 0, 1 / BLg_.ie),
    Sh7E.So ? D.Dm9f(BLg_.s1[7], 44, 70, 0, 1 / BLg_.ie) : (D.Dm9f(BLg_.s1[8], 145, 71, 0, 1 / BLg_.ie),
    D.Sy7M(32, 129, 178, 30, 0)),
    s = 0; s < 8; s++)
        t.Ke[s] && (D.S6nY(t.vi[s], l + 3 - 40, Sh7E.So ? 132 + 41 * t.Id[s] + 3 - 20 : 135, 1 == t.ts[s].group ? "#4f9bff" : 2 == t.ts[s].group ? "#ff4f4f" : 3 == t.ts[s].group ? "#3cad0f" : 4 == t.ts[s].group ? "#ffd34c" : "#ffffff"),
        l += r);
    0 < t.attack && (t.attack = 0,
    XYSz.D(0, 1),
    203 == t.H0 ? t.H0 = 202 : t.fo = 3)
}
class Fhob {
}