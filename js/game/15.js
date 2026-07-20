function Bcmx() {
    if (0 != Sh7E.K0) {
        let t, s;
        if (FouV.g.ge)
            return !0;
        var e = Sh7E.K0 % 100
          , i = (Sh7E.K0 - 1) % 100;
        for (s = 0; s < MiVw.length; s++) {
            var o = MiVw[s].id;
            for (t = 0; t < 4; t++) {
                var a = CrdD.C[i][o][t]
                  , h = CrdD.C[e][o][t];
                if (0 != h && 0 == (256 & a) && 0 == (512 & a) && (0 != (256 & h) || 0 != (512 & h) || 0 != (1024 & h) || 0 != (2048 & h)))
                    return !0
            }
        }
        return !1
    }
}
function FbaX(s) {
    let e, i;
    for (i = 0; i < MiVw.length; i++) {
        var o = MiVw[i].id;
        o == WEPA && (MiVw[i].controls = [Sh7E.Y[0], Sh7E.Y[11], Sh7E.Y[22], Sh7E.Y[33]]);
        let t = 0;
        for (e = 0; e < 4; e++)
            -1 != KUKH[o][e] && t++;
        for (e = 0; e < 4; e++) {
            var a = KUKH[o][e];
            -1 != a && ((GqLZ || GqLz) && MiVw[i].controls[e] == "P" + (e + 1) ? 1 == t ? s.vi[a] = MiVw[i].name : s.vi[a] = MiVw[i].name + "-P" + (e + 1) : s.vi[a] = MiVw[i].controls[e])
        }
    }
}
function EviP(i, o) {
    if (0 != Sh7E.K0) {
        let t, s, e = !1;
        var a = Sh7E.K0 % 100
          , h = (Sh7E.K0 - 1) % 100;
        for (s = 0; s < MiVw.length; s++) {
            var n = MiVw[s].id;
            for (t = 0; t < 4; t++)
                if (-1 == KUKH[n][t]) {
                    var r = CrdD.C[h][n][t]
                      , l = CrdD.C[a][n][t];
                    if (0 != l && 0 == (256 & r) && 0 == (512 & r) && (0 != (256 & l) || 0 != (512 & l))) {
                        i.ts[o].attack = 1,
                        i.ts[o].Jo = Ke94[n],
                        i.ts[o].za = n == WEPA,
                        KUKH[n][t] = o,
                        FbaX(i),
                        e = !0,
                        GqLZ && n == WEPA && _dFL.send(`CHAT
[${MiVw[s].controls[t]}] pressed Attack to join`),
                        GqLz && n == WEPA && GLOBAL_STEAM_MESSAGE.send(`CHAT
[${MiVw[s].controls[t]}] pressed Attack to join`),
                        i.Oo[o] = !1;
                        break
                    }
                    if (e)
                        break
                }
            if (e)
                break
        }
    }
}
function IAlU(t) {
    let s, e;
    if (t.de = 0,
    t.R0 = 0,
    t.left = 0,
    t.right = 0,
    t.attack = 0,
    t.fe = 0,
    (t.ah = 0) != Sh7E.K0) {
        var i = Sh7E.K0 % 100
          , o = (Sh7E.K0 - 1) % 100;
        for (e = 0; e < MiVw.length; e++) {
            var a = MiVw[e].id;
            for (s = 0; s < 4; s++) {
                var h = CrdD.C[o][a][s]
                  , n = CrdD.C[i][a][s];
                0 != n && (0 != (1 & h) || 0 != (2 & h) || 0 == (1 & n) && 0 == (2 & n) || (t.de = 1),
                0 != (4 & h) || 0 != (8 & h) || 0 == (4 & n) && 0 == (8 & n) || (t.R0 = 1),
                0 != (16 & h) || 0 != (32 & h) || 0 == (16 & n) && 0 == (32 & n) || (t.left = 1),
                0 != (64 & h) || 0 != (128 & h) || 0 == (64 & n) && 0 == (128 & n) || (t.right = 1),
                0 != (256 & h) || 0 != (512 & h) || 0 == (256 & n) && 0 == (512 & n) || (t.attack = 1),
                0 != (1024 & h) || 0 != (2048 & h) || 0 == (1024 & n) && 0 == (2048 & n) || (t.fe = 1),
                0 != (4096 & h) || 0 != (8192 & h) || 0 == (4096 & n) && 0 == (8192 & n) || (t.ah = 1))
            }
        }
    }
}
function G9p7(t) {
    let s;
    for (t.de = 0,
    t.R0 = 0,
    t.left = 0,
    t.right = 0,
    t.attack = 0,
    t.fe = 0,
    t.ah = 0,
    s = 0; s < 8; s++)
        0 < t.ts[s].de ? (t.Oo[s] || (t.de = 1),
        t.Oo[s] = !0) : 0 < t.ts[s].R0 ? (t.Oo[s] || (t.R0 = 1),
        t.Oo[s] = !0) : 0 < t.ts[s].right ? (t.Oo[s] || (t.right = 1),
        t.Oo[s] = !0) : 0 < t.ts[s].left ? (t.Oo[s] || (t.left = 1),
        t.Oo[s] = !0) : 0 < t.ts[s].attack ? (t.Oo[s] || (t.attack = 1),
        t.Oo[s] = !0) : 0 < t.ts[s].fe ? (t.Oo[s] || (t.fe = 1),
        t.Oo[s] = !0) : 0 < t.ts[s].ah ? (t.Oo[s] || (t.ah = 1),
        t.Oo[s] = !0) : t.Oo[s] = !1
}
function B1Yv(t) {
    let e;
    var s = (Sh7E.K0 + HnDC) % 100
      , i = (null == CrdD.C[s] && (CrdD.C[s] = []),
    null == CrdD.C[s][WEPA] && (CrdD.C[s][WEPA] = [0, 0, 0, 0, 0]),
    CrdD.C[s][WEPA]);
    for (i[4] = 0,
    e = 0; e < 4; e++)
        if (i[e] = 0,
        1 == Sh7E.nt[e] && -1 != Sh7E.rt[e]) {
            if ((GamePad.R0[Sh7E.lt[11 * e + 1]] || GamePad.N0[Sh7E.lt[11 * e + 1]]) && (GamePad.U0[Sh7E.lt[11 * e + 1]] ? i[e] |= 1 : i[e] |= 2),
            (GamePad.R0[Sh7E.lt[11 * e + 2]] || GamePad.N0[Sh7E.lt[11 * e + 2]]) && (GamePad.U0[Sh7E.lt[11 * e + 2]] ? i[e] |= 4 : i[e] |= 8),
            (GamePad.R0[Sh7E.lt[11 * e + 3]] || GamePad.N0[Sh7E.lt[11 * e + 3]]) && (GamePad.U0[Sh7E.lt[11 * e + 3]] ? i[e] |= 16 : i[e] |= 32),
            (GamePad.R0[Sh7E.lt[11 * e + 4]] || GamePad.N0[Sh7E.lt[11 * e + 4]]) && (GamePad.U0[Sh7E.lt[11 * e + 4]] ? i[e] |= 64 : i[e] |= 128),
            (GamePad.R0[Sh7E.lt[11 * e + 9] + "-"] || GamePad.N0[Sh7E.lt[11 * e + 9] + "-"]) && (GamePad.U0[Sh7E.lt[11 * e + 9] + "-"] ? i[e] |= 1 : i[e] |= 2),
            (GamePad.R0[Sh7E.lt[11 * e + 9] + "+"] || GamePad.N0[Sh7E.lt[11 * e + 9] + "+"]) && (GamePad.U0[Sh7E.lt[11 * e + 9] + "+"] ? i[e] |= 4 : i[e] |= 8),
            (GamePad.R0[Sh7E.lt[11 * e + 8] + "-"] || GamePad.N0[Sh7E.lt[11 * e + 8] + "-"]) && (GamePad.U0[Sh7E.lt[11 * e + 8] + "-"] ? i[e] |= 16 : i[e] |= 32),
            (GamePad.R0[Sh7E.lt[11 * e + 8] + "+"] || GamePad.N0[Sh7E.lt[11 * e + 8] + "+"]) && (GamePad.U0[Sh7E.lt[11 * e + 8] + "+"] ? i[e] |= 64 : i[e] |= 128),
            (GamePad.R0[Sh7E.lt[11 * e + 5]] || GamePad.N0[Sh7E.lt[11 * e + 5]]) && (GamePad.U0[Sh7E.lt[11 * e + 5]] ? i[e] |= 256 : i[e] |= 512),
            (GamePad.R0[Sh7E.lt[11 * e + 6]] || GamePad.N0[Sh7E.lt[11 * e + 6]]) && (GamePad.U0[Sh7E.lt[11 * e + 6]] ? i[e] |= 1024 : i[e] |= 2048),
            (GamePad.R0[Sh7E.lt[11 * e + 7]] || GamePad.N0[Sh7E.lt[11 * e + 7]]) && (GamePad.U0[Sh7E.lt[11 * e + 7]] ? i[e] |= 4096 : i[e] |= 8192),
            GamePad.N0[Sh7E.rt[e] + "·b9"]) {
                let s = !1;
                for (let t = 1; t <= 7; t++)
                    if (Sh7E.lt[11 * e + t] == Sh7E.rt[e] + "·b9") {
                        s = !0;
                        break
                    }
                s || (i[4] |= 32768)
            }
        } else
            (XELe.W0[Sh7E.Y[11 * e + 1]] || XELe.O0[Sh7E.Y[11 * e + 1]]) && (XELe.z0[Sh7E.Y[11 * e + 1]] ? i[e] |= 1 : i[e] |= 2),
            (XELe.W0[Sh7E.Y[11 * e + 2]] || XELe.O0[Sh7E.Y[11 * e + 2]]) && (XELe.z0[Sh7E.Y[11 * e + 2]] ? i[e] |= 4 : i[e] |= 8),
            (XELe.W0[Sh7E.Y[11 * e + 3]] || XELe.O0[Sh7E.Y[11 * e + 3]]) && (XELe.z0[Sh7E.Y[11 * e + 3]] ? i[e] |= 16 : i[e] |= 32),
            (XELe.W0[Sh7E.Y[11 * e + 4]] || XELe.O0[Sh7E.Y[11 * e + 4]]) && (XELe.z0[Sh7E.Y[11 * e + 4]] ? i[e] |= 64 : i[e] |= 128),
            (XELe.W0[Sh7E.Y[11 * e + 5]] || XELe.O0[Sh7E.Y[11 * e + 5]]) && (XELe.z0[Sh7E.Y[11 * e + 5]] ? i[e] |= 256 : i[e] |= 512),
            (XELe.W0[Sh7E.Y[11 * e + 6]] || XELe.O0[Sh7E.Y[11 * e + 6]]) && (XELe.z0[Sh7E.Y[11 * e + 6]] ? i[e] |= 1024 : i[e] |= 2048),
            (XELe.W0[Sh7E.Y[11 * e + 7]] || XELe.O0[Sh7E.Y[11 * e + 7]]) && (XELe.z0[Sh7E.Y[11 * e + 7]] ? i[e] |= 4096 : i[e] |= 8192);
    0 == t.H0 && 1 == t.pause && (XELe.O0.KeyH || "h" == s_bb_hit ? t.Wa = !t.Wa : XELe.O0.KeyN || "n" == s_bb_hit ? i[4] |= 2 : XELe.O0.KeyQ || "q" == s_bb_hit ? i[4] |= 8 : "esc" == s_bb_hit ? i[4] |= 32768 : AlpM.N0 && t.Wa && 100 < FouV.Ht ? t.Wa = !1 : "alt-enter" == s_bb_hit && window.electronAPI && window.electronAPI.Tf5c(),
    s_bb_hit = -1),
    window.electronAPI ? (XELe.O0.F1 && (i[4] |= 1),
    XELe.O0.F2 && (i[4] |= 2),
    XELe.O0.F3 && (i[4] |= 4),
    XELe.O0.F4 && (i[4] |= 8),
    XELe.O0.F5 && (i[4] |= 16),
    XELe.O0.F6 && (i[4] |= 32),
    XELe.O0.F7 && (i[4] |= 64),
    XELe.O0.F8 && (i[4] |= 128),
    XELe.O0.F9 && (i[4] |= 256)) : (XELe.R0["Shift-1"] || XELe.R0["Shift-2"] || XELe.R0["Shift-3"] || XELe.R0["Shift-0"]) && (XELe.N0["!-0"] && (i[4] |= 1),
    XELe.N0["@-0"] && (i[4] |= 2),
    XELe.N0["#-0"] && (i[4] |= 4),
    XELe.N0["$-0"] && (i[4] |= 8),
    XELe.N0["%-0"] && (i[4] |= 16),
    XELe.N0["^-0"] && (i[4] |= 32),
    XELe.N0["&-0"] && (i[4] |= 64),
    XELe.N0["*-0"] && (i[4] |= 128),
    XELe.N0["(-0"]) && (i[4] |= 256),
    XELe.O0.Escape && (i[4] |= 32768),
    7 == CrdD.Q0 && (CrdD.Q0 = 99,
    i[4] |= 65536),
    i[4] |= CrdD.Na;
    let o = CrdD.Na = 0;
    for (e = 0; e < t.Zs; e++)
        t.Ke[e] && (o += Math.floor(t.ts[e].x) + Math.floor(t.ts[e].z));
    i[5] = o,
    GqLZ && _dFL.send(`FRAME
${WEPA}
${Sh7E.K0 + HnDC}
${i[0]}
${i[1]}
${i[2]}
${i[3]}
${i[4]}
` + i[5]),
    GqLz && GLOBAL_STEAM_MESSAGE.send(`FRAME
${WEPA}
${Sh7E.K0 + HnDC}
${i[0]}
${i[1]}
${i[2]}
${i[3]}
${i[4]}
` + i[5]),
    s = Ke94[WEPA],
    MiVw[s].G = Sh7E.K0 + HnDC
}
function Jc6D(i) {
    let o, a, h;
    var n, r = Sh7E.K0 % 100;
    for (CrdD.Ua = 0,
    a = 0; a < MiVw.length; a++) {
        var t, s = MiVw[a].id, e = CrdD.C[r][s][4], s = (GqLZ || GqLz) && s == WEPA;
        0 != e && (t = GqLz ? GLOBAL_STEAM_MESSAGE : _dFL,
        0 != (1 & e) && (FouV.g.Za = !0,
        s) && 0 == FouV.g.H0 && t.send(`CHAT
pressed F1`),
        0 != (2 & e) && (FouV.g.Pa = !0,
        s) && 0 == FouV.g.H0 && t.send(`CHAT
pressed F2`),
        0 != (4 & e) && (FouV.g.Ja = !0,
        s) && 0 == FouV.g.H0 && t.send(`CHAT
pressed F3`),
        0 != (8 & e) && (FouV.g.Ha = !0,
        s) && 0 == FouV.g.H0 && t.send(`CHAT
pressed F4`),
        0 != (16 & e) && (FouV.g.Qa = !0,
        s) && 0 == FouV.g.H0 && t.send(`CHAT
pressed F5`),
        0 != (32 & e) && (FouV.g.ja = !0,
        s) && 0 == FouV.g.H0 && t.send(`CHAT
pressed F6`),
        0 != (64 & e) && (FouV.g.Ka = !0,
        s) && 0 == FouV.g.H0 && t.send(`CHAT
pressed F7`),
        0 != (128 & e) && (FouV.g.$a = !0,
        s) && 0 == FouV.g.H0 && t.send(`CHAT
pressed F8`),
        0 != (256 & e) && (FouV.g.qa = !0,
        s) && 0 == FouV.g.H0 && t.send(`CHAT
pressed F9`),
        0 != (32768 & e) && (FouV.g.ge = !0),
        0 != (65536 & e) && (CrdD.j0 = 300,
        CrdD.Q0 = 99,
        FouV.g.ya = !0,
        XYSz.D(3, 1),
        s) && 0 == FouV.g.H0 && t.send(`CHAT
pressed the unlock code`),
        512 <= e) && (CrdD.Ua |= e,
        s) && (0 != (512 & e) && t.send(`CHAT
clicked on 'VS mode'`),
        0 != (1024 & e) && t.send(`CHAT
clicked on 'Stage mode'`),
        0 != (2048 & e) && t.send(`CHAT
clicked on '1 on 1 Championship'`),
        0 != (4096 & e) && t.send(`CHAT
clicked on '2 on 2 Championship'`),
        0 != (8192 & e) && t.send(`CHAT
clicked on 'Battle mode'`),
        0 != (16384 & e)) && t.send(`CHAT
clicked on 'Demo'`)
    }
    if (!i.tn)
        for (o = 0; o < 8; o++) {
            i.ts[o].th = i.ts[o].de,
            i.ts[o].ih = i.ts[o].R0,
            i.ts[o].eh = i.ts[o].left,
            i.ts[o].sh = i.ts[o].right,
            i.ts[o].es = i.ts[o].attack,
            i.ts[o].hh = i.ts[o].fe,
            i.ts[o].oh = i.ts[o].ah,
            i.ts[o].de = 0,
            i.ts[o].R0 = 0,
            i.ts[o].left = 0,
            i.ts[o].right = 0,
            i.ts[o].attack = 0,
            i.ts[o].fe = 0,
            i.ts[o].ah = 0,
            i.ts[o].Qo = 0;
            let t = !1
              , s = -1
              , e = -1;
            for (a = 0; a < MiVw.length; a++) {
                for (s = MiVw[a].id,
                h = 0; h < 4; h++)
                    if (KUKH[s][h] == o) {
                        e = h,
                        t = !0;
                        break
                    }
                if (t)
                    break
            }
            t && (0 != (1 & (n = CrdD.C[r][s][e])) ? i.ts[o].de = 2 : 0 != (2 & n) && (i.ts[o].de = 1),
            0 != (4 & n) ? i.ts[o].R0 = 2 : 0 != (8 & n) && (i.ts[o].R0 = 1),
            0 != (16 & n) ? i.ts[o].left = 2 : 0 != (32 & n) && (i.ts[o].left = 1),
            0 != (64 & n) ? i.ts[o].right = 2 : 0 != (128 & n) && (i.ts[o].right = 1),
            0 != (256 & n) ? i.ts[o].attack = 2 : 0 != (512 & n) && (i.ts[o].attack = 1),
            0 != (1024 & n) ? i.ts[o].fe = 2 : 0 != (2048 & n) && (i.ts[o].fe = 1),
            0 != (4096 & n) ? i.ts[o].ah = 2 : 0 != (8192 & n) && (i.ts[o].ah = 1),
            0 != (16384 & n)) && (i.ts[o].Qo = 1)
        }
}
class Sld5 {
}