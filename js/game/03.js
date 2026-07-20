const SvvK = 30
  , XCBE = 1e3 / SvvK;
function DQcu() {
    if (AfdY = !1,
    HdPx = !1,
    LK_R = !0,
    void 0 !== XELe && void 0 !== XELe.o && XELe.o(HdPx),
    void 0 !== GamePad && void 0 !== GamePad.o && GamePad.o(),
    void 0 !== AlpM && void 0 !== AlpM.o && AlpM.o(),
    void 0 !== XYSz && void 0 !== D && void 0 !== Ii9w && void 0 !== lvT9 && void 0 !== XELe && void 0 !== AlpM && void 0 !== FouV && void 0 !== Sh7E && void 0 !== DY3O && void 0 !== VEny && void 0 !== JhUX && void 0 !== Y047 && void 0 !== OWAt && void 0 !== JKW0 && void 0 !== LkUA && void 0 !== CrdD && void 0 !== Sld5 && void 0 !== TIJj && void 0 !== NEOE && void 0 !== T7ES && void 0 !== Sh7E && void 0 !== LWAh && void 0 !== K2Ri && void 0 !== ZMqv && void 0 !== CXTj && void 0 !== Fhob && void 0 !== BLg_ && void 0 !== Z9c1) {
        if (0 == XYSz.l.length && (XYSz._("mp3/001"),
        XYSz._("mp3/002"),
        XYSz._("mp3/006"),
        XYSz._("mp3/010"),
        XYSz._("mp3/011"),
        XYSz._("mp3/004"),
        XYSz._("mp3/016"),
        XYSz._("mp3/017"),
        XYSz._("mp3/020"),
        XYSz._("mp3/021"),
        XYSz._("mp3/025"),
        XYSz._("mp3/032"),
        XYSz._("mp3/033"),
        XYSz._("mp3/039"),
        XYSz._("mp3/065"),
        XYSz._("mp3/066"),
        XYSz._("mp3/068"),
        XYSz._("mp3/085"),
        XYSz._("mp3/fistGuard"),
        XYSz._("mp3/guard_fist"),
        XYSz._("mp3/guard_fist2"),
        XYSz._("mp3/guard_fist3"),
        XYSz._("mp3/hit_fist"),
        XYSz._("mp3/hit_fist2"),
        XYSz._("mp3/hit_fist3"),
        XYSz._("mp3/hit_fist4"),
        XYSz._("mp3/hit_fist5"),
        XYSz._("mp3/hit_fist6"),
        XYSz._("mp3/sword_hit"),
        XYSz._("mp3/sword_hit2")),
        LK_R) {
            if (_RB3 == XFpe) {
                var t = performance.now();
                if ((!GqLZ || !GqLz || FouV.g?.u) && t - HefM < XCBE)
                    return;
                FouV.m() && (HefM = (HefM += XCBE) < t - 3 * XCBE ? t - 3 * XCBE : HefM) > t + 3 * XCBE && (HefM = t + 3 * XCBE)
            }
        } else if (void 0 !== HhrJ && void 0 !== HhrJ.o) {
            if ((t = performance.now()) - HefM < XCBE)
                return;
            HhrJ.o({
                p: AfdY
            }),
            (HefM = (HefM += XCBE) < t - 3 * XCBE ? t - 3 * XCBE : HefM) > t + 3 * XCBE && (HefM = t + 3 * XCBE)
        }
        void 0 !== AlpM && void 0 !== AlpM.S && AlpM.S(),
        void 0 !== XELe && void 0 !== XELe.S && XELe.S(),
        void 0 !== GamePad && void 0 !== GamePad.S && GamePad.S()
    }
}
app.ticker.add(()=>DQcu());
let resizeTimer, lastResizeTime = 0;
const resizeDebounceTime = 1e3 / SvvK * 5;
function resizeApp() {
    lastResizeTime = performance.now();
    let t, s;
    resizeTimer = 0;
    var e = window.innerWidth
      , i = +window.innerHeight;
    t = e / i >= OdEy ? (s = i) * SCZ_ : (s = e / OdEy) * SCZ_,
    QDNX = Math.min(Esyj, Esyj * e / t),
    t = parseInt(t),
    s = parseInt(s),
    __appWidth = t,
    __appHeight = s,
    JXAJ = I2Gw / 40,
    I86J = parseInt(__appHeight / 40),
    __appLeft = parseInt((e - t) / 2),
    __appTop = parseInt((i - s) / 4 + 0),
    app.renderer.view.style.left = __appLeft + "px",
    app.renderer.view.style.top = __appTop + "px",
    app.renderer.view.style.width = t + "px",
    app.renderer.view.style.height = s + "px",
    document.documentElement.style.setProperty("--app-left", __appLeft + "px"),
    document.documentElement.style.setProperty("--app-top", __appTop + "px"),
    document.documentElement.style.setProperty("--app-width", __appWidth + "px"),
    document.documentElement.style.setProperty("--app-height", __appHeight + "px"),
    document.documentElement.style.setProperty("--app-line-height", parseInt(I86J) + "px"),
    document.documentElement.style.setProperty("--slider-scale", "" + __appWidth / 1467)
}
resizeApp(),
window.onresize = function(t) {
    var s = performance.now() - lastResizeTime;
    s > resizeDebounceTime ? resizeApp() : resizeTimer = resizeTimer || setTimeout(()=>{
        resizeApp()
    }
    , resizeDebounceTime - s)
}
;