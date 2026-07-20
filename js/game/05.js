function h5bS() {
    shwSeB && (shwSeB = !1,
    document.querySelector("#setting-overlay").style.display = "none")
}
function sSb5() {
    shwSeB || (shwSeB = !0,
    document.querySelector("#setting-overlay").style.display = "block")
}
function getIntFromStorage(t, s) {
    return t = parseInt(localStorage.getItem(t), 10),
    isNaN(t) ? s : t
}
function globalQuitGame() {
    window.electronAPI && window.electronAPI.u09t()
}
function globalUnlockPage() {
    window.electronAPI && window.electronAPI.GF6E()
}
function globalUpdateLog() {
    window.electronAPI && window.electronAPI.j8Kz()
}
dwEJ(),
shwSeB = !0,
ckb1 = !1,
sT3xpd = !1,
zm19 = !0,
Tzm9 = "no";
let s_increaseBgmVol = ()=>{}
  , s_decreaseBgmVol = ()=>{}
  , s_increaseSfxVol = ()=>{}
  , s_decreaseSfxVol = ()=>{}
;
function asBs() {
    let t = !1
      , s = !1;
    XYSz.H = getIntFromStorage("bgm_vol", 40),
    XYSz.j = getIntFromStorage("sfx_vol", 60);
    var e = document.querySelector("#game-screen-overlay-wrapper")
      , i = document.createElement("div");
    i.id = "setting-overlay",
    Object.assign(i.style, {
        position: "absolute",
        top: 0,
        right: 0,
        width: "calc(var(--app-width) * 400 / 2934)",
        height: "calc(var(--app-height) * 400 / 2934)",
        pointerEvents: "auto"
    }),
    e.append(i);
    const o = document.createElement("div")
      , a = (Object.assign(o.style, {
        color: "white",
        position: "absolute",
        top: "calc(var(--app-width) * 45 / 2934)",
        right: "calc(var(--app-width) * 145/2934)",
        width: "calc(var(--app-width) * 424 / 2934)",
        height: "calc(var(--app-height) * 0.06)",
        textAlign: "center",
        lineHeight: "100%",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "calc(var(--app-line-height)*.66)",
        display: "none",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        K: "none"
    }),
    o.style.textShadow = "1px 0 3px #000",
    o.innerText = "Move List\n出招表",
    i.append(o),
    document.createElement("img"))
      , h = (a.src = "_html_assets/icon_book.png",
    Object.assign(a.style, {
        position: "absolute",
        top: 0,
        right: "calc(var(--app-width) * 62/2934)",
        opacity: "0.6",
        cursor: "pointer",
        width: "calc(var(--app-width) * 57 / 2934)",
        height: "calc(var(--app-width) * 65 / 2934)",
        pointerEvents: "auto",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        K: "none"
    }),
    i.append(a),
    document.createElement("div"))
      , n = (Object.assign(h.style, {
        color: "white",
        position: "absolute",
        top: "calc(var(--app-width) * 0.0745)",
        right: "calc(var(--app-width) * 112/2934)",
        width: "calc(var(--app-width) * 119/ 2934)",
        height: "calc(var(--app-height) * 0.03)",
        textAlign: "center",
        lineHeight: "100%",
        display: "none",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "calc(var(--app-line-height)*.66)",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        K: "none"
    }),
    h.style.textShadow = "1px 0 3px #000",
    B(),
    i.append(h),
    document.createElement("div"))
      , r = (Object.assign(n.style, {
        position: "absolute",
        top: "calc(var(--app-width) * 0.0)",
        right: "calc(var(--app-width) * 142/2934)",
        width: "calc(var(--app-width) * 59 / 2934)",
        height: "calc(var(--app-height) * 0.14)",
        pointerEvents: "auto"
    }),
    document.createElement("img"))
      , l = (r.src = "_html_assets/icon_sound.png",
    Object.assign(r.style, {
        position: "absolute",
        top: 0,
        left: 0,
        opacity: "0.6",
        cursor: "pointer",
        width: "calc(var(--app-width) * 59 / 2934)",
        height: "calc(var(--app-width) * 65 / 2934)",
        pointerEvents: "auto",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        K: "none"
    }),
    document.createElement("input"))
      , u = (l.type = "range",
    l.min = 0,
    l.max = 100,
    l.step = 5,
    l.value = XYSz.H ?? 50,
    Object.assign(l.style, {
        position: "absolute",
        top: "calc(var(--app-width) * .073)",
        left: "calc(var(--app-width) * .005)",
        width: "75px",
        transformOrigin: "0 0",
        transform: "scale(var(--slider-scale)) rotate(-90deg)",
        pointerEvents: "auto",
        display: "none"
    }),
    n.append(r, l),
    i.append(n),
    document.createElement("div"))
      , f = (Object.assign(u.style, {
        color: "white",
        position: "absolute",
        top: "calc(var(--app-width) * 0.0745)",
        right: "calc(var(--app-width) * 171/2934)",
        width: "calc(var(--app-width) * 117 / 2934)",
        height: "calc(var(--app-height) * 0.03)",
        textAlign: "center",
        lineHeight: "100%",
        display: "none",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "calc(var(--app-line-height)*.66)",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        K: "none"
    }),
    u.style.textShadow = "1px 0 3px #000",
    F(),
    i.append(u),
    document.createElement("div"))
      , d = (Object.assign(f.style, {
        position: "absolute",
        top: "calc(var(--app-width) * 0)",
        right: "calc(var(--app-width) * 201/2934)",
        width: "calc(var(--app-width) * 57 / 2934)",
        height: "calc(var(--app-height) * 0.14)",
        pointerEvents: "auto"
    }),
    document.createElement("img"))
      , c = (d.src = "_html_assets/icon_music.png",
    Object.assign(d.style, {
        position: "absolute",
        top: 0,
        left: 0,
        opacity: "0.6",
        cursor: "pointer",
        width: "calc(var(--app-width) * 57 / 2934)",
        height: "calc(var(--app-width) * 65 / 2934)",
        pointerEvents: "auto",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        K: "none"
    }),
    document.createElement("input"))
      , p = (c.type = "range",
    c.min = 0,
    c.max = 100,
    c.step = 5,
    c.value = XYSz.H ?? 50,
    Object.assign(c.style, {
        position: "absolute",
        top: "calc(var(--app-width) * .073)",
        left: "calc(var(--app-width) * .005)",
        width: "75px",
        transformOrigin: "0 0",
        transform: "scale(var(--slider-scale)) rotate(-90deg)",
        pointerEvents: "auto",
        display: "none"
    }),
    f.append(d, c),
    i.append(f),
    document.createElement("div"))
      , g = (Object.assign(p.style, {
        color: "white",
        position: "absolute",
        top: "calc(var(--app-width) * 45 / 2934)",
        right: "calc(var(--app-width) * 0/2934)",
        width: "calc(var(--app-width) * 400 / 2934)",
        height: "calc(var(--app-height) * 0.06)",
        textAlign: "center",
        lineHeight: "100%",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "calc(var(--app-line-height)*.66)",
        display: "none",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        K: "none"
    }),
    p.style.textShadow = "1px 0 3px #000",
    L(),
    i.append(p),
    document.createElement("img"))
      , y = (g.src = "_html_assets/icon_hd.png",
    Object.assign(g.style, {
        position: "absolute",
        top: 0,
        right: "calc(var(--app-width) * 139/2934)",
        opacity: "0.6",
        cursor: "pointer",
        width: "calc(var(--app-width) * 65 / 2934)",
        height: "calc(var(--app-width) * 65 / 2934)",
        pointerEvents: "auto",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        K: "none"
    }),
    i.append(g),
    document.createElement("div"))
      , x = (Object.assign(y.style, {
        color: "white",
        position: "absolute",
        top: "calc(var(--app-width) * 45 / 2934)",
        right: "calc(var(--app-width) * 10/2934)",
        width: "calc(var(--app-width) * 424 / 2934)",
        height: "calc(var(--app-height) * 0.06)",
        textAlign: "right",
        lineHeight: "100%",
        justifyContent: "right",
        alignItems: "center",
        fontSize: "calc(var(--app-line-height)*.66)",
        display: "none",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        K: "none"
    }),
    y.style.textShadow = "1px 0 3px #000",
    y.innerText = "Open Settings\n展開設定",
    i.append(y),
    document.createElement("img"))
      , m = (x.src = "_html_assets/icon_gear.png",
    Object.assign(x.style, {
        position: "absolute",
        top: 0,
        right: 0,
        opacity: "0.6",
        cursor: "pointer",
        width: "calc(var(--app-width) * 63 / 2934)",
        height: "calc(var(--app-width) * 65 / 2934)",
        pointerEvents: "auto",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        K: "none"
    }),
    i.append(x),
    x.addEventListener("mouseenter", ()=>{
        x.style.opacity = "1",
        y.style.display = "flex"
    }
    ),
    x.addEventListener("mouseleave", ()=>{
        x.style.opacity = ".6",
        y.style.display = "none"
    }
    ),
    x.addEventListener("click", t=>{
        ((sT3xpd = !sT3xpd) ? I : C)()
    }
    ),
    document.createElement("div"))
      , _ = (Object.assign(m.style, {
        color: "white",
        position: "absolute",
        top: "calc(var(--app-width) * 45 / 2934)",
        right: "calc(var(--app-width) * (-57)/2934)",
        width: "calc(var(--app-width) * 584 / 2934)",
        height: "calc(var(--app-height) * 0.06)",
        textAlign: "center",
        lineHeight: "100%",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "calc(var(--app-line-height)*.66)",
        display: "none",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        K: "none"
    }),
    m.style.textShadow = "1px 0 3px #000",
    m.innerText = "Toggle Full Screen\n切換全螢幕",
    i.append(m),
    document.createElement("img"))
      , S = (_.src = "_html_assets/icon_fullscreen.png",
    Object.assign(_.style, {
        position: "absolute",
        top: 0,
        right: "calc(var(--app-width) * 200/2934)",
        opacity: "0.6",
        cursor: "pointer",
        width: "calc(var(--app-width) * 63 / 2934)",
        height: "calc(var(--app-width) * 65 / 2934)",
        pointerEvents: "auto",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        K: "none"
    }),
    i.append(_),
    _.addEventListener("mouseenter", ()=>{
        _.style.opacity = "1",
        m.style.display = "flex"
    }
    ),
    _.addEventListener("mouseleave", ()=>{
        _.style.opacity = ".6",
        m.style.display = "none"
    }
    ),
    _.addEventListener("click", t=>{
        window.electronAPI && window.electronAPI.Tf5c()
    }
    ),
    document.createElement("div"))
      , E = (Object.assign(S.style, {
        color: "white",
        position: "absolute",
        top: "calc(var(--app-width) * 45 / 2934)",
        right: "calc(var(--app-width) * -10/2934)",
        width: "calc(var(--app-width) * 224 / 2934)",
        height: "calc(var(--app-height) * 0.06)",
        textAlign: "center",
        lineHeight: "100%",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "calc(var(--app-line-height)*.66)",
        display: "none",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        K: "none"
    }),
    S.style.textShadow = "1px 0 3px #000",
    S.innerText = "Control Setting\n控制設定",
    i.append(S),
    document.createElement("img"));
    function b() {
        l.style.display = "block",
        h.style.display = "block",
        r.style.opacity = "1",
        l.value = XYSz.j,
        B()
    }
    function M() {
        s = !1,
        l.style.display = "none",
        h.style.display = "none",
        r.style.opacity = ".6"
    }
    function D() {
        c.style.display = "block",
        u.style.display = "block",
        d.style.opacity = "1",
        c.value = XYSz.H,
        F()
    }
    function w() {
        c.style.display = "none",
        u.style.display = "none",
        d.style.opacity = ".6"
    }
    function L() {
        p.innerText = T7ES.$ ? "The background is now in HD\n背景現為高解析度" : "The background is now in LD\n背景現為低解析度"
    }
    function B() {
        h.innerText = "SFX音效\n" + XYSz.j,
        localStorage.setItem("sfx_vol", XYSz.j)
    }
    function F() {
        u.innerText = "BGM音樂\n" + XYSz.H,
        localStorage.setItem("bgm_vol", XYSz.H)
    }
    function I() {
        sT3xpd = !0,
        x.src = "_html_assets/icon_gear2.png",
        y.innerText = "Close Settings\n收起設定",
        E.style.display = "block",
        g.style.display = "block",
        d.style.display = "block",
        r.style.display = "block",
        _.style.display = Sh7E.q ? "none" : "block",
        Sh7E.q ? (a.style.right = "calc(var(--app-width) * 314/2934)",
        o.style.right = "calc(var(--app-width) * 139/2934)") : (a.style.right = "calc(var(--app-width) * 376/2934)",
        o.style.right = "calc(var(--app-width) * 195/2934)"),
        o.style.textAlign = "center",
        o.style.justifyContent = "center",
        o.style.alignItems = "center",
        Sh7E.q ? (n.style.right = "calc(var(--app-width) * 199/2934)",
        h.style.right = "calc(var(--app-width) * 169/2934)",
        f.style.right = "calc(var(--app-width) * 258/2934)",
        u.style.right = "calc(var(--app-width) * 228/2934)") : (n.style.right = "calc(var(--app-width) * 261/2934)",
        h.style.right = "calc(var(--app-width) * 231/2934)",
        f.style.right = "calc(var(--app-width) * 320/2934)",
        u.style.right = "calc(var(--app-width) * 290/2934)"),
        n.style.pointerEvents = "auto",
        f.style.pointerEvents = "auto",
        localStorage.setItem("settings_open", "1")
    }
    function C() {
        sT3xpd = !1,
        x.src = "_html_assets/icon_gear.png",
        y.innerText = "Open Settings\n展開設定",
        E.style.display = "none",
        g.style.display = "none",
        d.style.display = "none",
        r.style.display = "none",
        _.style.display = "none",
        a.style.right = "calc(var(--app-width) * 72/2934)",
        o.style.right = "calc(var(--app-width) * -110/2934)",
        o.style.textAlign = "center",
        o.style.justifyContent = "center",
        o.style.alignItems = "center",
        n.style.right = "calc(var(--app-width) * 30/2934)",
        h.style.right = "calc(var(--app-width) * 10/2934)",
        f.style.right = "calc(var(--app-width) * 30/2934)",
        u.style.right = "calc(var(--app-width) * 10/2934)",
        n.style.pointerEvents = "none",
        f.style.pointerEvents = "none",
        localStorage.setItem("settings_open", "0")
    }
    E.src = "_html_assets/icon_keyboard.png",
    Object.assign(E.style, {
        position: "absolute",
        top: 0,
        right: "calc(var(--app-width) * 56/2934)",
        opacity: "0.6",
        cursor: "pointer",
        width: "calc(var(--app-width) * 85 / 2934)",
        height: "calc(var(--app-width) * 65 / 2934)",
        pointerEvents: "auto",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        K: "none"
    }),
    i.append(E),
    n.addEventListener("mouseenter", ()=>{
        sT3xpd && (s = !0,
        b())
    }
    ),
    r.addEventListener("click", t=>{
        XYSz.j -= 10,
        -10 < XYSz.j && XYSz.j < 0 ? XYSz.j = 0 : XYSz.j <= -10 && (XYSz.j = 100),
        l.value = XYSz.j,
        B(),
        Sh7E.t0 = -1
    }
    ),
    n.addEventListener("mouseleave", ()=>{
        s = !1,
        M()
    }
    ),
    f.addEventListener("mouseenter", ()=>{
        sT3xpd && (t = !0,
        D())
    }
    ),
    d.addEventListener("click", t=>{
        XYSz.H -= 10,
        -10 < XYSz.H && XYSz.H < 0 ? XYSz.H = 0 : XYSz.H <= -10 && (XYSz.H = 100),
        c.value = XYSz.H,
        F(),
        XYSz.i0(XYSz.H),
        Sh7E.t0 = -1
    }
    ),
    f.addEventListener("mouseleave", ()=>{
        t = !1,
        w()
    }
    ),
    a.addEventListener("mouseenter", ()=>{
        a.style.opacity = "1",
        o.style.display = "flex"
    }
    ),
    a.addEventListener("mouseleave", ()=>{
        a.style.opacity = ".6",
        o.style.display = "none"
    }
    ),
    a.addEventListener("click", t=>{
        window.electronAPI ? window.electronAPI.zKJr() : window.open("https://lf2.net/control.html", "_blank")
    }
    ),
    g.addEventListener("mouseenter", ()=>{
        g.style.opacity = "1",
        p.style.display = "flex",
        L()
    }
    ),
    g.addEventListener("mouseleave", ()=>{
        g.style.opacity = ".6",
        p.style.display = "none"
    }
    ),
    g.addEventListener("click", t=>{
        T7ES.$ = !T7ES.$,
        g.src = T7ES.$ ? "_html_assets/icon_hd.png" : "_html_assets/icon_ld.png",
        L(),
        Sh7E.t0 = -1
    }
    ),
    E.addEventListener("mouseenter", ()=>{
        E.style.opacity = "1",
        S.style.display = "flex"
    }
    ),
    E.addEventListener("mouseleave", ()=>{
        E.style.opacity = ".6",
        S.style.display = "none"
    }
    ),
    E.addEventListener("click", t=>{
        Sh7E.t0 = -1,
        ckb1 = !0
    }
    ),
    l.addEventListener("input", ()=>{
        XYSz.j = Number(l.value),
        B()
    }
    ),
    c.addEventListener("input", ()=>{
        XYSz.H = Number(c.value),
        F(),
        XYSz.i0(XYSz.H)
    }
    ),
    ((sT3xpd = 0 != getIntFromStorage("settings_open", 0)) ? I : C)(),
    (e = document.createElement("style")).textContent = `
    input[type="range"]::-webkit-slider-thumb{
      -webkit-appearance:none; appearance:none;
      width:calc(var(--app-width)*0.015);
      height:calc(var(--app-width)*0.015);
      background:#fff;border-radius:50%;cursor:pointer;
    }
    input[type="range"]::-moz-range-thumb{
      width:calc(var(--app-width)*0.015);
      height:calc(var(--app-width)*0.015);
      background:#fff;border:none;border-radius:50%;cursor:pointer;
    }
  `,
    document.head.append(e),
    g.src = T7ES.$ ? "_html_assets/icon_hd.png" : "_html_assets/icon_ld.png";
    let T = 0
      , V = 0;
    s_increaseBgmVol = ()=>{
        XYSz.H += 10,
        100 < XYSz.H && (XYSz.H = 100),
        XYSz.i0(XYSz.H),
        D(),
        M(),
        0 != T && clearTimeout(T),
        T = setTimeout(()=>{
            t || w(),
            T = 0
        }
        , 500)
    }
    ,
    s_decreaseBgmVol = ()=>{
        XYSz.H -= 10,
        XYSz.H < 0 && (XYSz.H = 0),
        XYSz.i0(XYSz.H),
        D(),
        M(),
        0 != T && clearTimeout(T),
        T = setTimeout(()=>{
            t || w(),
            T = 0
        }
        , 500)
    }
    ,
    s_increaseSfxVol = ()=>{
        XYSz.j += 10,
        100 < XYSz.j && (XYSz.j = 100),
        b(),
        w(),
        0 != V && clearTimeout(V),
        V = setTimeout(()=>{
            s || M(),
            V = 0
        }
        , 500)
    }
    ,
    s_decreaseSfxVol = ()=>{
        XYSz.j -= 10,
        XYSz.j < 0 && (XYSz.j = 0),
        b(),
        w(),
        0 != V && clearTimeout(V),
        V = setTimeout(()=>{
            s || M(),
            V = 0
        }
        , 500)
    }
}
function dbl0(t) {
    window.electronAPI && window.electronAPI.Jmi0(t)
}
window.electronAPI && (window.onerror = (t,s,e,i,o)=>{
    dbl0(`Frontend Error:
` + t)
}
,
window.onunhandledrejection = t=>{
    dbl0(`Frontend Promise Rejection:
` + t.reason)
}
);
let s_hide_bb = ()=>{}
  , s_show_bb = ()=>{}
  , s_bb_hit = -1;
function ab7m() {
    var t = document.querySelector("#game-screen-overlay-wrapper");
    const s = document.createElement("div");
    s.id = "bottom-overlay",
    Object.assign(s.style, {
        position: "absolute",
        display: "none",
        bottom: 0,
        left: 0,
        width: "calc(var(--app-width) * 2934 / 2934)",
        height: "calc(var(--app-width) * 81 / 2934)",
        pointerEvents: "auto"
    }),
    t.append(s),
    s_hide_bb = ()=>{
        s.style.display = "none"
    }
    ,
    s_show_bb = ()=>{
        s.style.display = "block"
    }
    ;
    var e = [{
        f: "bb1.png",
        w: 368,
        e0: "esc"
    }, {
        f: "bb2.png",
        w: 277,
        e0: "n"
    }, {
        f: "bb5.png",
        w: 595,
        e0: "h"
    }, {
        f: "bb6.png",
        w: 519,
        e0: "alt-enter"
    }, {
        f: "bb3.png",
        w: 389,
        e0: "q"
    }];
    let i = 0;
    for (let t = 0; t < e.length; t++)
        if ("alt-enter" != e[t].e0 || !Sh7E.q) {
            var o = document.createElement("img");
            o.src = "_html_assets/" + e[t].f,
            Object.assign(o.style, {
                position: "absolute",
                top: 0,
                left: `calc(var(--app-width) * ${i}/2934)`,
                cursor: "pointer",
                width: `calc(var(--app-width) * ${e[t].w} / 2934)`,
                height: "calc(var(--app-width) * 81 / 2934)",
                pointerEvents: "auto",
                userSelect: "none",
                WebkitUserSelect: "none",
                MozUserSelect: "none",
                K: "none"
            }),
            i += e[t].w;
            const a = e[t].e0;
            o.addEventListener("click", t=>{
                s_bb_hit = a
            }
            ),
            s.append(o)
        }
}
let textarea_debuglog;
{
    (textarea_debuglog = document.createElement("textarea")).value = "",
    textarea_debuglog.readOnly = !0,
    textarea_debuglog.wrap = "off",
    textarea_debuglog.wrap = "soft",
    textarea_debuglog.setAttribute("wrap", "soft"),
    Object.assign(textarea_debuglog.style, {
        position: "absolute",
        top: "calc(var(--app-width) * 70 / 2934)",
        right: "calc(var(--app-width) * 30 / 2934)",
        left: "calc(var(--app-width) * 30 / 2934)",
        bottom: "calc(var(--app-width) * 20 / 2934)",
        background: "#ffffff",
        color: "#000000",
        fontSize: "calc(var(--app-line-height) * .55)",
        fontFamily: "monospace",
        lineHeight: "1.1",
        padding: "8px",
        opacity: ".85",
        border: "1px solid #ccc",
        borderRadius: "6px",
        boxSizing: "border-box",
        resize: "none",
        overflow: "auto",
        display: "none",
        pointerEvents: "auto",
        zIndex: "999999"
    });
    const k3 = document.querySelector("#game-screen-overlay-wrapper");
    k3.append(textarea_debuglog),
    textarea_debuglog.addEventListener("click", async t=>{
        t.stopPropagation(),
        t = textarea_debuglog.value;
        let s = !1;
        try {
            navigator.clipboard?.writeText && (await navigator.clipboard.writeText(t),
            s = !0)
        } catch (t) {}
        if (!s) {
            var t = textarea_debuglog.selectionStart
              , e = textarea_debuglog.selectionEnd;
            textarea_debuglog.focus(),
            textarea_debuglog.select();
            try {
                document.execCommand("copy"),
                s = !0
            } catch (t) {}
            textarea_debuglog.setSelectionRange(t, e)
        }
        textarea_debuglog.value += (textarea_debuglog.value.endsWith("\n") ? "" : "\n") + "[user clicked and content copied to clipboard]\n",
        textarea_debuglog.selectionStart = textarea_debuglog.selectionEnd = textarea_debuglog.value.length,
        textarea_debuglog.scrollTop = textarea_debuglog.scrollHeight;
        const i = textarea_debuglog.style.background;
        textarea_debuglog.style.background = "#eef6ff",
        setTimeout(()=>textarea_debuglog.style.background = i, 120)
    }
    )
}