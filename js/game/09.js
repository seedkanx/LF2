class BLg_ {
    static xi = new Array;
    static zi = new Array;
    static e1 = new Array;
    static s1 = new Array;
    static Gi = new Array;
    static h1 = new Array;
    static o1 = null;
    static a1 = null;
    static V = !0;
    static n1 = null;
    static Bi = null;
    static l1 = null;
    static Ri = null;
    static c1 = new Array;
    static d1 = new Array;
    static _1 = null;
    static u1 = null;
    static f1 = null;
    static g1 = null;
    static m1 = null;
    static S1 = null;
    static frame = null;
    static b1 = null;
    static E1 = null;
    static F1 = null;
    static L1 = null;
    static B1 = null;
    static M1 = null;
    static w1 = null;
    static D1 = null;
    static V1 = null;
    static T1 = null;
    static I1 = null;
    static C1 = null;
    static A1 = null;
    static v1 = null;
    static X1 = null;
    static Y1 = null;
    static N1 = null;
    static U1 = null;
    static cm = new Array;
    static R1 = null;
    static G1 = null;
    static O1 = null;
    static z1 = null;
    static W1 = null;
    static Z1 = null;
    static P1 = new Array;
    static J1 = null;
    static H1 = new Array;
    static Q1 = null;
    static j1 = 446;
    static K1 = ZcYj;
    static q1 = ZcYj;
    static te = parseInt(BLg_.K1);
    static Xi = !1;
    static Ni = !1;
    static Mi = 3;
    static ie = 3;
    static ee = "_x3";
    static async Yi() {
        if (!BLg_.Xi) {
            BLg_.Xi = !0;
            let s;
            var t = [];
            performance.now();
            s = "_res_pngs/global/menu_clip" + BLg_.ee,
            t.push(Ii9w.b0(s + ".json")),
            BLg_.n1 = "_res_pngs/global/menu_back.png",
            t.push(Ii9w.m0(BLg_.n1)),
            s = "_res_pngs/global/ending" + BLg_.ee,
            t.push(Ii9w.b0(s + ".json")),
            s = "_res_pngs/global/menu_clip2" + BLg_.ee,
            t.push(Ii9w.b0(s + ".json")),
            s = "_res_pngs/global/menu_clip3" + BLg_.ee,
            t.push(Ii9w.b0(s + ".json")),
            s = "_res_pngs/global/menu_clip4" + BLg_.ee,
            t.push(Ii9w.b0(s + ".json")),
            s = "_res_pngs/global/menu_clip5" + BLg_.ee,
            t.push(Ii9w.b0(s + ".json")),
            s = "_res_pngs/global/menu_clip6" + BLg_.ee,
            t.push(Ii9w.b0(s + ".json")),
            s = "_res_pngs/global/packed" + BLg_.ee,
            t.push(Ii9w.b0(s + ".json")),
            BLg_.Bi = "_res_pngs/global/menu_wait" + BLg_.ee + ".png",
            t.push(Ii9w.m0(BLg_.Bi)),
            BLg_.Ri = "_res_pngs/global/title_screen_bg.png",
            t.push(Ii9w.m0(BLg_.Ri)),
            BLg_.l1 = "_res_pngs/global/black_back.png",
            t.push(Ii9w.m0(BLg_.l1)),
            BLg_.U1 = "_res_pngs/global/charselect" + BLg_.ee + ".png",
            t.push(Ii9w.m0(BLg_.U1)),
            s = "_res_pngs/global/battlemode" + BLg_.ee,
            t.push(Ii9w.b0(s + ".json")),
            BLg_.Q1 = "_res_pngs/global/battletroops" + BLg_.ee + ".png",
            t.push(Ii9w.m0(BLg_.Q1)),
            await Promise.all(t),
            s = "_res_pngs/global/menu_clip";
            for (let t = 0; t < 25; t++)
                BLg_.xi[t] = `${s}-${t}.png`;
            s = "_res_pngs/global/ending";
            for (let t = 0; t < 6; t++)
                BLg_.c1[t] = `${s}-${t}.png`;
            s = "_res_pngs/global/menu_clip2";
            for (let t = 0; t < 47; t++)
                BLg_.zi[t] = `${s}-${t}.png`;
            s = "_res_pngs/global/menu_clip3";
            for (let t = 0; t < 53; t++)
                BLg_.e1[t] = `${s}-${t}.png`;
            s = "_res_pngs/global/menu_clip4";
            for (let t = 0; t < 28; t++)
                BLg_.s1[t] = `${s}-${t}.png`;
            s = "_res_pngs/global/menu_clip5";
            for (let t = 0; t < 15; t++)
                BLg_.Gi[t] = `${s}-${t}.png`;
            s = "_res_pngs/global/menu_clip6";
            for (let t = 0; t < 8; t++)
                BLg_.h1[t] = `${s}-${t}.png`;
            s = "_res_pngs/global/packed",
            BLg_._1 = s + "-0.png",
            BLg_.R1 = s + "-1.png",
            BLg_.G1 = s + "-2.png",
            BLg_.N1 = s + "-3.png",
            BLg_.O1 = s + "-4.png",
            BLg_.u1 = s + "-5.png",
            BLg_.f1 = s + "-6.png",
            BLg_.g1 = s + "-7.png",
            BLg_.m1 = s + "-8.png",
            BLg_.S1 = s + "-9.png",
            BLg_.J1 = s + "-10.png",
            BLg_.frame = s + "-11.png",
            BLg_.D1 = s + "-12.png",
            BLg_.V1 = s + "-13.png",
            BLg_.T1 = s + "-14.png",
            BLg_.I1 = s + "-15.png",
            BLg_.C1 = s + "-16.png",
            BLg_.A1 = s + "-17.png",
            BLg_.X1 = s + "-18.png",
            BLg_.v1 = s + "-19.png",
            BLg_.Y1 = s + "-20.png",
            BLg_.z1 = s + "-21.png",
            BLg_.W1 = s + "-22.png",
            BLg_.Z1 = s + "-23.png";
            for (let t = 0; t < 5; t++)
                BLg_.cm[t] = `${s}-${24 + t}.png`;
            for (let t = 0; t < 7; t++)
                BLg_.d1[t] = `${s}-${29 + t}.png`;
            for (let t = 0; t < 20; t++)
                BLg_.P1[t] = `${s}-${36 + t}.png`;
            BLg_.b1 = s + "-56.png",
            BLg_.E1 = s + "-57.png",
            BLg_.F1 = s + "-58.png",
            BLg_.L1 = s + "-59.png",
            BLg_.B1 = s + "-60.png",
            BLg_.M1 = s + "-61.png",
            BLg_.w1 = s + "-62.png",
            s = "_res_pngs/global/battlemode";
            for (let t = 0; t < 4; t++)
                BLg_.H1[t] = `${s}-${t}.png`;
            performance.now(),
            BLg_.Ni = !0
        }
    }
    static async se() {
        BLg_.V = !0
    }
    static async Ui() {
        let t = "";
        var s;
        null != BLg_.o1 && (t = BLg_.o1,
        BLg_.o1 = null,
        await Ii9w.p0(t)),
        (t = "") == BLg_.ee ? 0 == (s = Math.floor(13 * Math.random())) ? t = "_res_pngs/global/bg_bat" + BLg_.ee + ".png" : 1 == s ? t = "_res_pngs/global/bg_davis" + BLg_.ee + ".png" : 2 == s ? t = "_res_pngs/global/bg_deep" + BLg_.ee + ".png" : 3 == s ? t = "_res_pngs/global/bg_dennis" + BLg_.ee + ".png" : 4 == s ? t = "_res_pngs/global/bg_firen" + BLg_.ee + ".png" : 5 == s ? t = "_res_pngs/global/bg_firzen" + BLg_.ee + ".png" : 6 == s ? t = "_res_pngs/global/bg_freeze" + BLg_.ee + ".png" : 7 == s ? t = "_res_pngs/global/bg_henry" + BLg_.ee + ".png" : 8 == s ? t = "_res_pngs/global/bg_john" + BLg_.ee + ".png" : 9 == s ? t = "_res_pngs/global/bg_julian" + BLg_.ee + ".png" : 10 == s ? t = "_res_pngs/global/bg_louis" + BLg_.ee + ".png" : 11 == s ? t = "_res_pngs/global/bg_rudolf" + BLg_.ee + ".png" : 12 == s ? t = "_res_pngs/global/bg_woody" + BLg_.ee + ".png" : 13 == s && (t = "_res_pngs/global/bg_jan" + BLg_.ee + ".png") : 0 == (s = Math.floor(15 * Math.random())) ? t = "_res_pngs/global/bg_bat" + BLg_.ee + ".png" : 1 == s ? t = "_res_pngs/global/bg_davis" + BLg_.ee + ".png" : 2 == s ? t = "_res_pngs/global/bg_deep" + BLg_.ee + ".png" : 3 == s ? t = "_res_pngs/global/bg_dennis" + BLg_.ee + ".png" : 4 == s ? t = "_res_pngs/global/bg_firen" + BLg_.ee + ".png" : 5 == s ? t = "_res_pngs/global/bg_mark" + BLg_.ee + ".png" : 6 == s ? t = "_res_pngs/global/bg_freeze" + BLg_.ee + ".png" : 7 == s ? t = "_res_pngs/global/bg_henry" + BLg_.ee + ".png" : 8 == s ? t = "_res_pngs/global/bg_john" + BLg_.ee + ".png" : 9 == s ? t = "_res_pngs/global/bg_jack" + BLg_.ee + ".png" : 10 == s ? t = "_res_pngs/global/bg_louis" + BLg_.ee + ".png" : 11 == s ? t = "_res_pngs/global/bg_rudolf" + BLg_.ee + ".png" : 12 == s ? t = "_res_pngs/global/bg_woody" + BLg_.ee + ".png" : 13 == s ? t = "_res_pngs/global/bg_jan" + BLg_.ee + ".png" : 14 == s && (t = "_res_pngs/global/bg_bandit" + BLg_.ee + ".png"),
        BLg_.a1 = t,
        await Ii9w.m0(t),
        BLg_.o1 = t
    }
    static he() {}
    static he() {}
}