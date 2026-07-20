class XELe {
    static v0 = !1;
    static X0 = [];
    static Y0 = [];
    static N0 = [];
    static U0 = [];
    static R0 = [];
    static x0 = [];
    static G0 = [];
    static O0 = [];
    static z0 = [];
    static W0 = [];
    static Z0 = !0;
    static P0 = 0;
    static o(t) {
        function s() {
            XELe.R0 = [],
            XELe.J0 = []
        }
        XELe.Z0 = t,
        XELe.v0 || (window.addEventListener("keydown", t=>{
            var s = t.key + "-" + t.location;
            let e = t.code;
            16 == t.which && "ShiftLeft" != e && "ShiftRight" != e && (0 == t.location ? e = "ShiftRight" : 1 == t.location ? e = "ShiftLeft" : 2 == t.location && (e = "ShiftRight")),
            2 == FouV.T && (10 == FouV.g.H0 || 1 == FouV.g.H0 || 2 == FouV.g.H0 || 3 == FouV.g.H0) && CrdD.Q0 < 99 && "Shift" != t.key && (CrdD.Q0 <= 0 ? "KeyH" == e ? CrdD.Q0 = 1 : 0 == CrdD.Q0 ? "KeyL" == e ? CrdD.Q0 = -1 : CrdD.Q0 = 0 : -1 == CrdD.Q0 ? "KeyF" == e ? CrdD.Q0 = -2 : CrdD.Q0 = 0 : -2 == CrdD.Q0 ? "Digit2" == e || "Numpad2" == e ? CrdD.Q0 = -3 : CrdD.Q0 = 0 : -3 == CrdD.Q0 ? CrdD.Q0 = -4 : -4 == CrdD.Q0 ? "KeyN" == e ? CrdD.Q0 = -5 : CrdD.Q0 = 0 : -5 == CrdD.Q0 ? "KeyE" == e ? CrdD.Q0 = -6 : CrdD.Q0 = 0 : -6 == CrdD.Q0 && ("KeyT" == e ? (CrdD.Q0 = 0,
            CrdD.j0 = -300,
            XYSz.D(2, 1)) : CrdD.Q0 = 0) : 1 == CrdD.Q0 ? "KeyF" == e ? CrdD.Q0 = 2 : CrdD.Q0 = 0 : 2 == CrdD.Q0 ? "Digit2" == e || "Numpad2" == e ? CrdD.Q0 = 3 : CrdD.Q0 = 0 : 3 == CrdD.Q0 ? CrdD.Q0 = 4 : 4 == CrdD.Q0 ? "KeyN" == e ? CrdD.Q0 = 5 : CrdD.Q0 = 0 : 5 == CrdD.Q0 ? "KeyE" == e ? CrdD.Q0 = 6 : CrdD.Q0 = 0 : 6 == CrdD.Q0 && ("KeyT" == e ? CrdD.Q0 = 7 : CrdD.Q0 = 0)),
            null != XELe.X0[s] && XELe.X0[s] > Sh7E.K0 - 2 && XELe.X0[s] <= XELe.Y0[s] && XELe.Y0[s] > Sh7E.K0 - 2 && (XELe.U0[s] = !0),
            XELe.X0[s] = Sh7E.K0,
            XELe.N0[s] = !0,
            XELe.R0[s] = !0,
            null != XELe.x0[e] && XELe.x0[e] > Sh7E.K0 - 2 && XELe.x0[e] <= XELe.G0[e] && XELe.G0[e] > Sh7E.K0 - 2 && (XELe.z0[e] = !0),
            XELe.x0[e] = Sh7E.K0,
            XELe.O0[e] = !0,
            XELe.W0[e] = !0,
            "Tab" === t.key && _RB3 == XFpe && t.preventDefault()
        }
        ),
        window.addEventListener("keyup", t=>{
            var s = t.key + "-" + t.location
              , s = (XELe.R0[s] = !1,
            XELe.Y0[s] = Sh7E.K0,
            t.code);
            XELe.W0[s] = !1,
            XELe.G0[s] = Sh7E.K0
        }
        ),
        window.addEventListener("blur", s),
        document.addEventListener("visibilitychange", ()=>{
            document.hidden && s()
        }
        ),
        XELe.v0 = !0)
    }
    static $0(t) {
        return !!XELe.R0[t] && !(XELe.R0[t] = !1)
    }
    static q0(t) {
        return !!XELe.W0[t] && !(XELe.W0[t] = !1)
    }
    static S() {
        XELe.N0 = [],
        XELe.U0 = [],
        XELe.O0 = [],
        XELe.z0 = []
    }
}
class GamePad {
    static v0 = !1;
    static tt = !1;
    static gamepad = [];
    static X0 = [];
    static Y0 = [];
    static N0 = [];
    static U0 = [];
    static R0 = [];
    static P0 = 0;
    static init() {
        window.addEventListener("gamepadconnected", t=>{
            GamePad.it(t.gamepad)
        }
        ),
        window.addEventListener("gamepaddisconnected", t=>{
            GamePad.et(t.gamepad)
        }
        ),
        GamePad.v0 = !0
    }
    static o() {
        GamePad.v0 || GamePad.init()
    }
    static it(e) {
        Sh7E.st[e.index] = e.id,
        Sh7E.ht[e.index] = GamePad.ot(e.id);
        let t = 0;
        for (let s = 0; s < 4; s++)
            if (1 == Sh7E.nt[s] && -1 == Sh7E.rt[s] && Sh7E.lt[11 * s + 0] == e.id) {
                Sh7E.rt[s] = e.index;
                for (let t = 11 * s + 1; t <= 11 * s + 9; t++)
                    "" != Sh7E.lt[t] && (Sh7E.lt[t] = e.index + "·" + Sh7E.lt[t].split("·")[1]);
                t = 1;
                break
            }
        if (!t)
            for (let s = 0; s < 4; s++)
                if (-1 == Sh7E.rt[s] && Sh7E.lt[11 * s + 0] == e.id) {
                    Sh7E.rt[s] = e.index;
                    for (let t = 11 * s + 1; t <= 11 * s + 9; t++)
                        "" != Sh7E.lt[t] && (Sh7E.lt[t] = e.index + "·" + Sh7E.lt[t].split("·")[1]);
                    t = 1;
                    break
                }
        Sh7E.ct++,
        GamePad.tt || (requestAnimationFrame(GamePad.dt),
        GamePad.tt = !0)
    }
    static ot(t) {
        if (t.includes("Vendor:")) {
            var s = t.match(/Vendor:\s*([0-9a-fA-F]+)\s*Product:\s*([0-9a-fA-F]+)/);
            if (s)
                return "054c" == (s = s[1]) ? "sony" : "045e" == s ? "xbox" : "057e" == s ? "switch" : t.toLowerCase().includes("dualsense") || t.toLowerCase().includes("dualshock") ? "sony" : t.toLowerCase().includes("xbox") ? "xbox" : void 0
        }
    }
    static et(s) {
        Sh7E.ct--,
        Sh7E.st[s.index] = void 0;
        for (let t = 0; t < 4; t++)
            Sh7E.rt[t] == s.index && (Sh7E.rt[t] = -1)
    }
    static dt() {
        for (const a of navigator.getGamepads())
            if (a) {
                for (var [t,s] of a.buttons.entries())
                    t = a.index + "·b" + t,
                    s.pressed ? GamePad.R0[t] || (null != GamePad.X0[t] && GamePad.X0[t] > Sh7E.K0 - 2 && GamePad.X0[t] <= GamePad.Y0[t] && GamePad.Y0[t] > Sh7E.K0 - 2 && (GamePad.U0[t] = !0),
                    GamePad.X0[t] = Sh7E.K0,
                    GamePad.N0[t] = !0,
                    GamePad.R0[t] = !0) : GamePad.R0[t] && (GamePad.R0[t] = !1,
                    GamePad.Y0[t] = Sh7E.K0);
                for (var [e,i] of a.axes.entries()) {
                    var o = a.index + `·a${e}+`;
                    .5 < i ? GamePad.R0[o] || (null != GamePad.X0[o] && GamePad.X0[o] > Sh7E.K0 - 2 && GamePad.X0[o] <= GamePad.Y0[o] && GamePad.Y0[o] > Sh7E.K0 - 2 && (GamePad.U0[o] = !0),
                    GamePad.X0[o] = Sh7E.K0,
                    GamePad.N0[o] = !0,
                    GamePad.R0[o] = !0) : GamePad.R0[o] && (GamePad.R0[o] = !1,
                    GamePad.Y0[o] = Sh7E.K0),
                    o = a.index + `·a${e}-`,
                    i < -.5 ? GamePad.R0[o] || (null != GamePad.X0[o] && GamePad.X0[o] > Sh7E.K0 - 2 && GamePad.X0[o] <= GamePad.Y0[o] && GamePad.Y0[o] > Sh7E.K0 - 2 && (GamePad.U0[o] = !0),
                    GamePad.X0[o] = Sh7E.K0,
                    GamePad.N0[o] = !0,
                    GamePad.R0[o] = !0) : GamePad.R0[o] && (GamePad.R0[o] = !1,
                    GamePad.Y0[o] = Sh7E.K0)
                }
            }
        requestAnimationFrame(GamePad.dt)
    }
    static S() {
        GamePad.N0 = [],
        GamePad.U0 = []
    }
}
class AlpM {
    static v0 = !1;
    static _t = 0;
    static b = 0;
    static ut = 0;
    static ft = 0;
    static x = 0;
    static y = 0;
    static dx = 0;
    static dy = 0;
    static N0 = !1;
    static gt = !1;
    static v0 = !1;
    static count = 0;
    static o() {
        AlpM.v0 || (AlpM.v0 = !0,
        document.addEventListener("mousedown", t=>{
            var s = t.clientX
              , e = t.clientY;
            AlpM.x = parseInt((s - __appLeft) / __appWidth * Esyj),
            AlpM.y = parseInt((e - __appTop) / __appHeight * PQ4Z),
            AlpM.dx = AlpM.x,
            AlpM.dy = AlpM.y,
            0 == t.button ? (0 == AlpM._t && (AlpM.N0 = !0),
            AlpM.b = 1) : (0 == AlpM.ut && (AlpM.gt = !0),
            AlpM.ft = 1)
        }
        ),
        document.addEventListener("mousemove", t=>{
            var s = t.clientX
              , t = t.clientY;
            AlpM.x = parseInt((s - __appLeft) / __appWidth * Esyj),
            AlpM.y = parseInt((t - __appTop) / __appHeight * PQ4Z)
        }
        ),
        document.addEventListener("mouseup", t=>{
            var s = t.clientX
              , e = t.clientY;
            AlpM.x = parseInt((s - __appLeft) / __appWidth * Esyj),
            AlpM.y = parseInt((e - __appTop) / __appHeight * PQ4Z),
            0 == t.button ? AlpM.b = 0 : AlpM.ft = 0
        }
        ))
    }
    static S() {
        AlpM.N0 = !1,
        AlpM.gt = !1,
        AlpM._t = AlpM.b,
        AlpM.ut = AlpM.ft
    }
}