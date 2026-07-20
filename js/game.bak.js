class HJUP {
    path = "";
    sprite = void 0;
    x = 0;
    y = 0;
    facing = 0;
    scale = 1;
    px = 0;
    py = 0;
    rotation = 0;
    constructor(t, s, e, i=0, o=1, a=1, h=0, n=0, r=0, l=1, u=!1) {
        this.path = t,
        "__RECT__" != this.path ? this.sprite = new PIXI.Sprite(PIXI.Texture.from(this.path)) : this.sprite = new PIXI.Sprite(PIXI.Texture.WHITE),
        pixiGameScene.addChild(this.sprite),
        "__RECT__" != this.path && this.B4N1(t, s, e, i, o, a, h, n, r, l, u)
    }
    ANUF(t, s, e, i=0, o=1, a=0, h=0, n=0, r=1, l=!1) {
        this.path != t && (this.path = t,
        this.sprite.texture = PIXI.Texture.from(t)),
        this.sprite.x = s,
        this.sprite.y = e,
        l ? (this.sprite.scale = 0 == i ? new PIXI.Point(-o,o) : new PIXI.Point(o,o),
        this.sprite.pivot.x = this.sprite.texture.width - a) : (this.sprite.scale = 0 == i ? new PIXI.Point(o,o) : new PIXI.Point(-o,o),
        this.sprite.pivot.x = a),
        this.sprite.pivot.y = h,
        this.sprite.rotation = n,
        this.sprite.visible = !0,
        this.sprite.tint = 16777215,
        this.sprite.alpha = r
    }
    B4N1(t, s, e, i=0, o=1, a=1, h=0, n=0, r=0, l=1, u=!1) {
        this.path != t && (this.path = t,
        this.sprite.texture = PIXI.Texture.from(t)),
        this.sprite.x = s,
        this.sprite.y = e,
        u ? (this.sprite.scale = 0 == i ? new PIXI.Point(-o,a) : new PIXI.Point(o,a),
        this.sprite.pivot.x = this.sprite.texture.width - h) : (this.sprite.scale = 0 == i ? new PIXI.Point(o,a) : new PIXI.Point(-o,a),
        this.sprite.pivot.x = h),
        this.sprite.pivot.y = n,
        this.sprite.rotation = r,
        this.sprite.visible = !0,
        this.sprite.tint = 16777215,
        this.sprite.alpha = l
    }
    VamI(t, s, e, i, o, a) {
        "__RECT__" != this.path && (this.path = "__RECT__",
        this.sprite.texture = PIXI.Texture.WHITE),
        this.sprite.x = t,
        this.sprite.y = s,
        this.sprite.scale = new PIXI.Point(1,1),
        this.sprite.width = e,
        this.sprite.height = i,
        this.sprite.pivot.x = 0,
        this.sprite.pivot.y = 0,
        this.sprite.rotation = 0,
        this.sprite.visible = !0,
        this.sprite.tint = o,
        this.sprite.alpha = a
    }
}
class D {
    static get max() {
        return 2e3
    }
    static pic = [];
    static p = 0;
    static last_p = 0;
    static temp = 0;
    static texts = [];
    static t = 0;
    static OuCn = ["#ffffff", "#5077D0", "#FF9B9B", "#aaf5aa", "#f0f0aa", "#ff4cec"];
    static FYH9 = ["#ffffff", "#4f9bff", "#ff4f4f", "#3cad0f", "#ffd34c", "#ff4cec"];
    static GROUP_COST_C = ["#AAAAAA", "#AFAFFF", "#FFAAAA", "#AAF5AA", "#F0F0AA", "#ff9ff5"];
    static GROUP_COST_C2 = ["#FFFFFF", "#4f9bff", "#ff4f4f", "#3cad0f", "#ffd34c", "#ff4cec"];
    static RXhw = ["#444", "#226", "#622", "#262", "#542", "#524"];
    static IfA7 = [16777215, 5217279, 16731983, 3976463, 16765772, 16731372];
    static Dm9f(t, s, e, i=0, o=1, a=0, h=0, n=0, r=1, l=!1) {
        D.Mwfo(t, s * Lzbd, e * Lzbd, i, o * Lzbd, a, h, n, r, l)
    }
    static Ba6u(t, s, e, i=0, o=1, a=0, h=0, n=0, r=1, l=!1) {
        D.Mwfo(t, s * g20M, (e - gB75s) * g20M, i, o * g20M, a, h, n, r, l)
    }
    static Mwfo(t, s, e, i=0, o=1, a=0, h=0, n=0, r=1, l=!1) {
        D.p >= D.max || (null == D.pic[D.p] ? D.pic[D.p] = new HJUP(t,s,e,i,o,o,a,h,n,r,l) : D.pic[D.p].ANUF(t, s, e, i, o, a, h, n, r, l),
        D.p++)
    }
    static KuNe(t, s, e, i=0, o=1, a=1, h=0, n=0, r=0, l=1, u=!1) {
        D.YtYH(t, s * Lzbd, e * Lzbd, i, o * Lzbd, a * Lzbd, h, n, r, l, u)
    }
    static YtYH(t, s, e, i=0, o=1, a=1, h=0, n=0, r=0, l=1, u=!1) {
        D.p >= D.max || (null == D.pic[D.p] ? D.pic[D.p] = new HJUP(t,s,e,i,o,a,h,n,r,l,u) : D.pic[D.p].B4N1(t, s, e, i, o, a, h, n, r, l, u),
        D.p++)
    }
    static Sy7M(t, s, e, i, o, a=1) {
        D.JyWD(t * Lzbd, s * Lzbd, e * Lzbd, i * Lzbd, o, a)
    }
    static VfDU(t, s, e, i, o, a=2) {
        D.Sy7M(t, s, a, i, o),
        D.Sy7M(t, s, e, a, o),
        D.Sy7M(t + e - a, s, a, i, o),
        D.Sy7M(t, s + i - a, e, a, o)
    }
    static JyWD(t, s, e, i, o, a=1) {
        D.p >= D.max || (null == D.pic[D.p] && (D.pic[D.p] = new HJUP("__RECT__",0,0)),
        D.pic[D.p].VamI(t, s, e, i, o, a),
        D.p++)
    }
    static ZyDD(t, s, e, i, o, a=1) {
        D.JyWD(t * g20M, (s - gB75s) * g20M, e * g20M, i * g20M, o, a)
    }
    static VLeA(t, s, e, i, o="#aaa", a="#222") {
        D.S6nY(`<span style="text-shadow: ${a} 1px 0 3px;">${t}</span>`, s, e, i, o)
    }
    static S6nY(t, s, e, i, o="#aaa") {
        D.C_wB(t, s * Lzbd, e * Lzbd, i, o)
    }
    static Tetg(t, s, e, i, o="#aaa", a="#222") {
        D.OPYj(`<span style="text-shadow: ${a} 1px 0 3px;">${t}</span>`, s, e, i, o)
    }
    static OPYj(t, s, e, i, o="#aaa") {
        D.C_wB(t, s * g20M, (e - gB75s) * g20M, i, o)
    }
    static C_wB(t, s, e, i, o="#aaa") {
        null == D.texts[D.t] && (D.texts[D.t] = {}),
        D.texts[D.t].text = t,
        D.texts[D.t].x = s,
        D.texts[D.t].y = e,
        D.texts[D.t].style = i,
        D.texts[D.t].shouldDraw = !0,
        D.texts[D.t].c = o,
        D.t++
    }
    static W63c() {
        for (D.temp = D.p; D.p < D.last_p; D.p++)
            D.pic[D.p].sprite.visible = !1;
        D.last_p = D.temp,
        D.p = 0;
        for (const s of D.texts) {
            s.div || (s.div = document.createElement("div"),
            (t = s.div).style.setProperty("position", "absolute"),
            t.style.setProperty("user-select", "none"),
            t.style.setProperty("overflow", "hidden"),
            t.style.setProperty("white-space", "nowrap"),
            document.body.appendChild(t));
            var t = s.div;
            s.shouldDraw ? (t.innerHTML != s.text && (t.innerHTML = s.text),
            t.style.setProperty("display", "block"),
            t.style.setProperty("font-size", parseInt(I86J) + "px"),
            t.style.setProperty("top", parseInt(__appTop + s.y / PQ4Z * __appHeight) + "px"),
            t.style.setProperty("left", parseInt(__appLeft + s.x / Esyj * __appWidth) + "px"),
            "Itbg" == s.style ? t.style.setProperty("transform", "translateX(-50%)") : "KrcT" == s.style ? t.style.setProperty("transform", "translateX(-100%)") : t.style.setProperty("transform", ""),
            t.style.setProperty("color", s.c),
            s.shouldDraw = !1) : t.style.setProperty("display", "none")
        }
        D.t = 0
    }
    static Vfm2(t, s, e) {
        return t = Math.max(0, Math.min(255, t)),
        s = Math.max(0, Math.min(255, s)),
        e = Math.max(0, Math.min(255, e)),
        "#" + t.toString(16).padStart(2, "0") + s.toString(16).padStart(2, "0") + e.toString(16).padStart(2, "0")
    }
    static E9px(t) {
        return PIXI.Texture.from(t).width
    }
    static JjQ2(t) {
        return PIXI.Texture.from(t).height
    }
    static QZUl() {
        for (const t of D.texts)
            t.text = ""
    }
}
let cursorTimeoutId;
function resetCursorTimer() {
    cursorTimeoutId && clearTimeout(cursorTimeoutId),
    document.body.classList.remove("hide-cursor"),
    cursorTimeoutId = setTimeout(()=>{
        document.body.classList.add("hide-cursor")
    }
    , 5e3)
}
document.addEventListener("mousemove", resetCursorTimer),
resetCursorTimer();
let DEBUG = !1;
function LOG(t) {
    DEBUG && console.log(t)
}
PIXI.settings.t = PIXI.SCALE_MODES.LINEAR;
let W4HY = 3;
const GAME_VERSION = 2160;
let SERVER_PORT = 8080;
const unsafePorts = new Set([1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115, 117, 119, 123, 135, 137, 139, 143, 161, 179, 389, 427, 465, 512, 513, 514, 515, 526, 530, 531, 532, 540, 548, 554, 556, 563, 587, 601, 636, 993, 995, 1719, 1720, 1723, 2049, 3659, 4045, 5060, 5061, 6e3, 6566, 6665, 6666, 6667, 6668, 6669, 6697, 10080]);
let OYHD = 794
  , ZcYj = 978
  , I2Gw = 550
  , Hhar = ZcYj * W4HY
  , T0mk = I2Gw * W4HY
  , Lzbd = Hhar / ZcYj
  , GLOBAL_ZOOM_WIDTH = 794
  , g20M = 978 / GLOBAL_ZOOM_WIDTH * Lzbd
  , gB75s = 128 - (550 - 391200 / GLOBAL_ZOOM_WIDTH) / 2.7
  , gB75r = 128 - (550 - 391200 / GLOBAL_ZOOM_WIDTH)
  , gB75h = 550 - 391200 / GLOBAL_ZOOM_WIDTH
  , GLOBAL_MM_COUNTRY_CODE = "--"
  , GLOBAL_MM_USER_NAME = "----"
  , GLOBAL_MM_USER_ID = "0"
  , GLOBAL_MM_LOBBY_CREATED = !1
  , GLOBAL_MM_LOBBY_NAME = ""
  , GLOBAL_MM_LOBBY_PW = ""
  , GLOBAL_MM_LOBBY_JOINED = !1
  , GLOBAL_MM_TEMP_PLAYER_LIST = []
  , Esyj = Hhar
  , MGy5 = Hhar
  , PQ4Z = T0mk;
var JfP8 = 1
  , BRKS = 1;
const XFpe = 0
  , UI_STATE_NETWORK_MODE_PRIVATE_SERVER = 8
  , UI_STATE_NETWORK_MODE_MENU_PAGE = 9
  , UI_STATE_NETWORK_MODE_MATCHMAKING = 10
  , Zto2 = 1
  , OZsE = 2
  , DP_H = 3
  , ZzG5 = 4
  , XAn2 = 5
  , E3KY = 6
  , Krlb = 7
  , UI_STATE_MM_LOBBY = 11
  , UI_STATE_MM_LIST_LOBBY = 12
  , UI_STATE_MM_CREATING_LOBBY = 13
  , UI_STATE_MM_ERROR_CREATING_LOBBY = 14
  , UI_STATE_MM_JOINING_LOBBY = 15
  , UI_STATE_MM_ERROR_JOINING_LOBBY = 16;
var GqLZ = !1
  , GqLz = !1
  , _RB3 = XFpe
  , IUCG = ""
  , LKNI = ""
  , WuQJ = 0
  , WEPA = 0
  , YTCb = -1
  , _d4B = ""
  , Ke94 = []
  , _dFL = null
  , ZpMS = !1
  , NqTZ = !1
  , OAdq = []
  , TDxF = !1
  , Ihla = !1
  , MiVw = []
  , TbWH = "";
let GqLZ_DEFAULT_DELAY = 1
  , HnDC = 0
  , KUKH = []
  , QDNX = Esyj
  , app = new PIXI.Application({
    width: Esyj,
    height: PQ4Z,
    antialias: !0,
    i: !1,
    h: 1,
    backgroundColor: 0
})
  , SCZ_ = Esyj / PQ4Z
  , OdEy = MGy5 / PQ4Z
  , pixiGameScene = (LOG("OdEy", OdEy),
INDEX_AddAppToBody(app))
  , PHaa = 0
  , HefM = 0
  , AfdY = !1
  , HdPx = !1
  , LK_R = !1;
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
function XFoB(t, s, e, i) {
    document.getElementById("control-setting-name-inputs").style.display = "flex",
    document.getElementById("control-name-0").value = t,
    document.getElementById("control-name-1").value = s,
    document.getElementById("control-name-2").value = e,
    document.getElementById("control-name-3").value = i
}
function GmLV() {
    return [document.getElementById("control-name-0").value, document.getElementById("control-name-1").value, document.getElementById("control-name-2").value, document.getElementById("control-name-3").value]
}
function D5ru() {
    document.getElementById("control-setting-name-inputs").style.display = "none"
}
function FzMO(t, s, e, i) {
    var o = document.getElementById("network-mode-matchmaking-0")
      , a = document.getElementById("network-mode-menu-page-1")
      , h = document.getElementById("network-mode-menu-page-0")
      , n = document.getElementById("network-mode-room-ip-input-page")
      , r = document.getElementById("network-mode-connecting-page")
      , l = document.getElementById("network-mode-room-error-page")
      , u = document.getElementById("network-mode-room-list")
      , f = document.getElementById("network-mode-room-lobby-page")
      , d = document.getElementById("network-mode-mm-list-lobby")
      , c = document.getElementById("network-mode-mm-lobby")
      , p = document.getElementById("room-server-error-message")
      , g = document.getElementById("room-server-error-header");
    switch (a.style.display = "none",
    h.style.display = "none",
    n.style.display = "none",
    r.style.display = "none",
    l.style.display = "none",
    u.style.display = "none",
    f.style.display = "none",
    _LYv(),
    hideNetworkModeMoreInfo(),
    _RB3 = t) {
    case XFpe:
        FouV.F = !1,
        FouV.L = 5,
        c.style.display = "none",
        d.style.display = "none",
        o.style.display = "none";
        break;
    case UI_STATE_NETWORK_MODE_MENU_PAGE:
        h.style.display = "flex",
        o.style.display = "none";
        break;
    case UI_STATE_NETWORK_MODE_MATCHMAKING:
        o.style.display = "flex",
        d.style.display = "none",
        c.style.display = "none";
        break;
    case UI_STATE_NETWORK_MODE_PRIVATE_SERVER:
        n.style.display = "none",
        a.style.display = "flex",
        document.getElementById("menu-start-private-server-button").disabled = !1,
        document.getElementById("start-server-port").disabled = !1;
        break;
    case Zto2:
        Isnm.innerHTML = "",
        n.style.display = "flex",
        document.getElementById("room-server-ip-address").value = localStorage.getItem("H&egPDS+") || "",
        document.getElementById("room-server-port").value = localStorage.getItem("ZB2AwNu%") || "8080";
        var y = localStorage.getItem("wyMjVO*@") || "";
        (y ? (_d4B = y,
        document.getElementById("network-name").value = y,
        document.getElementById("room-server-ip-address")) : (_d4B = "",
        document.getElementById("network-name").value = "",
        document.getElementById("network-name"))).focus(),
        onEnterRoomIpFunc = function(t) {
            _RB3 == Zto2 && "Enter" === t.key && (t.preventDefault(),
            FouV.B && (document.getElementById("network-name").value = "hahaha",
            document.getElementById("room-server-ip-address").value = "localhost"),
            GGSt())
        }
        ,
        I6Ax || (n.addEventListener("keypress", onEnterRoomIpFunc),
        I6Ax = !0),
        FouV.B && onEnterRoomIpFunc({
            key: "Enter",
            preventDefault: ()=>{}
        });
        break;
    case OZsE:
        r.style.display = "flex",
        document.getElementById("connecting-header").innerHTML = "Connect to the room server 接通房間伺服器",
        document.getElementById("connecting-text").innerHTML = "Please wait while connecting...<br>請稍候，正在連接中...";
        break;
    case DP_H:
        g.innerHTML = s,
        p.innerHTML = e,
        l.style.display = "flex",
        document.getElementById("error-okay-button").focus(),
        i && (document.getElementById("error-okay-button").style.display = "none");
        break;
    case ZzG5:
        u.style.display = "flex",
        document.getElementById("server-ip-address").innerHTML = `\`${IUCG}:${LKNI}\``,
        CXMh(),
        FouV.B && XyET(1);
        break;
    case UI_STATE_MM_LIST_LOBBY:
        document.getElementById("mm-join-lobby-pw-input").value = localStorage.getItem("mm-join-lobby-pw-input") || "",
        d.style.display = "flex",
        c.style.display = "none",
        generateLobbyListTable();
        break;
    case UI_STATE_MM_LOBBY:
        d.style.display = "none",
        c.style.display = "flex",
        document.querySelector("#network-mode-mm-lobby #room-lobby-header").innerHTML = "Lobby大廳 " + GLOBAL_MM_LOBBY_NAME + ("" != GLOBAL_MM_LOBBY_PW ? `&nbsp; <span style="font-size:50%;">(Password 密碼: ${GLOBAL_MM_LOBBY_PW})</span>` : ""),
        document.querySelector("#network-mode-mm-lobby #lobby-start-game-button").disabled = !0,
        document.querySelector("#network-mode-mm-lobby #latency-input").disabled = !GLOBAL_MM_LOBBY_CREATED,
        document.querySelector("#network-mode-mm-lobby #latency-input").value = ~~HnDC,
        resetMMPlayerListTable(),
        generateMMPlayerListTable();
        break;
    case XAn2:
    case E3KY:
        r.style.display = "flex",
        document.getElementById("connecting-header").innerHTML = `Joining Room${WuQJ} 加入房間` + WuQJ,
        document.getElementById("connecting-text").innerHTML = "Please wait while joining...<br>請稍候，正在加入中...";
        break;
    case UI_STATE_MM_CREATING_LOBBY:
        r.style.display = "flex",
        document.getElementById("connecting-header").innerHTML = "Creating Lobby 建立大廳",
        document.getElementById("connecting-text").innerHTML = "Please wait...<br>請稍候...";
        break;
    case UI_STATE_MM_JOINING_LOBBY:
        d.style.display = "none",
        r.style.display = "flex",
        document.getElementById("connecting-header").innerHTML = "Joining Lobby 加入大廳",
        document.getElementById("connecting-text").innerHTML = "Please wait...<br>請稍候...";
        break;
    case UI_STATE_MM_ERROR_CREATING_LOBBY:
        d.style.display = "none",
        g.innerHTML = s,
        p.innerHTML = e,
        l.style.display = "flex",
        document.getElementById("error-okay-button").focus(),
        i && (document.getElementById("error-okay-button").style.display = "none");
        break;
    case UI_STATE_MM_ERROR_JOINING_LOBBY:
        g.innerHTML = s,
        p.innerHTML = e,
        c.style.display = "none",
        l.style.display = "flex",
        document.getElementById("error-okay-button").focus(),
        i && (document.getElementById("error-okay-button").style.display = "none");
        break;
    case Krlb:
        f.style.display = "flex",
        document.querySelector("#network-mode-room-lobby-page #room-lobby-header").innerHTML = `\`${IUCG}:${LKNI}\` Room${WuQJ} 房間` + WuQJ,
        (y = document.getElementById("lobby-chat-input")).focus(),
        CCrB || (CCrB = !0,
        y.addEventListener("keypress", WUKO)),
        KAIt();
        break;
    default:
        throw new Error("Invalid UI_STATE")
    }
}
let Isnm = document.getElementById("room-server-ip-input-box-alert-message");
function Ycp6(t) {
    return "" == t.value || /^[A-Za-z0-9_\-]{0,10}$/.test(t.value) ? !(Isnm.innerHTML = "") : (Isnm.innerHTML = "Name must be 10 characters or less, consisting of letters, numbers, dashes, or underscores.<br/>名稱必須是10個字符或以下，由英文字母、數字、破折號或下劃線組成。",
    t.value = t.value.replace(/[^A-Za-z0-9\-_]/g, ""),
    !1)
}
function BA_M(t) {
    return t.value = t.value.replace("¶", "?"),
    t.value = t.value.replace("©", "?"),
    !0
}
function IuXY(t) {
    return !("localhost" != t.toLowerCase() && !t.match(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/) && (Isnm.innerHTML = "Please enter a valid IP address (e.g. 123.45.67.89 or localhost)<br/>請輸入一個有效的 IP 地址 (例如: 123.45.67.89 或者 localhost)"))
}
function D1Im() {
    FzMO(UI_STATE_NETWORK_MODE_PRIVATE_SERVER)
}
function GGSt() {
    var t = document.getElementById("network-name");
    _d4B = t.value,
    IUCG = document.getElementById("room-server-ip-address").value,
    LKNI = document.getElementById("room-server-port").value,
    (Isnm.innerHTML = "") == _d4B ? Isnm.innerHTML = "Please enter your name 請輸入你的名稱" : Ycp6(t) && (localStorage.setItem("wyMjVO*@", _d4B),
    IuXY(IUCG)) && (FzMO(OZsE),
    CciS(IUCG, LKNI))
}
class GLOBAL_STEAM_MESSAGE {
    static send(t) {
        window.electronAPI?.mmSendToHost && window.electronAPI.mmSendToHost(t)
    }
}
let gettingUnreadMessages = !1;
async function GetUnhandledSteamNetworkModeMessages() {
    if (window.electronAPI?.mmGetUnreadMessages) {
        gettingUnreadMessages = !0;
        try {
            for (const t of await window.electronAPI.mmGetUnreadMessages())
                handleSteamNetworkModeMessage(t)
        } catch (t) {
            console.error("GetUnhandledSteamNetworkModeMessages failed:", t)
        } finally {
            gettingUnreadMessages = !1
        }
    }
}
function handleSteamNetworkModeMessage(t) {
    if (t.startsWith("FRAME\n"))
        Boex(t);
    else if (t.startsWith("PLAYER_LIST\n"))
        Xv3_Steam(t);
    else if (t.startsWith("CHAT\n")) {
        var s = t.split("\n");
        Jml3(~~s[1], s[2], s[3])
    } else if (t.startsWith("AWAY\n"))
        Usm2(~~(s = t.split("\n"))[1], s[2]);
    else if (t.startsWith("UPDATE_CONTROL_NAMES\n"))
        SCLo(~~(s = t.split("\n"))[1], s[2], s[3], s[4], s[5]);
    else if (t.startsWith("UPDATE_ACHIEVEMENTS\n"))
        Py6j(~~(s = t.split("\n"))[1], s[2]);
    else if (t.startsWith("START_GAME\n")) {
        s = t.split("\n"),
        Ii9w.M = !1,
        GqLz = Ihla = !0,
        FzMO(XFpe),
        V_Ws.style.display = "block",
        C1dx(),
        Ycpn.addEventListener("keypress", _dnq),
        FouV.F = !1,
        XYSz.D(0, 1),
        BLg_.V = !0,
        Ii9w.M = !1,
        FouV.page = 0,
        FouV.T = 1 + FouV.k,
        FouV.g.I(Number(s[2])),
        NcPr();
        for (let t = 0; t < 100; t++)
            CrdD.C[t] = [];
        IakF(),
        s = FouV.A(),
        GLOBAL_STEAM_MESSAGE.send(`UPDATE_ACHIEVEMENTS
${WEPA}
` + s.v.join(",")),
        MiVw[YTCb].v = s.v,
        MiVw[YTCb].X = s.X,
        GLOBAL_STEAM_MESSAGE.send(`UPDATE_CONTROL_NAMES
${WEPA}
${Sh7E.Y[0]}
${Sh7E.Y[11]}
${Sh7E.Y[22]}
` + Sh7E.Y[33])
    } else
        t.startsWith("DISCONNECTED\n") && _RB3 != DP_H && (TDxF = !1,
        FzMO(DP_H, "Network connection error 網路連線錯誤", "Sorry, the connection to the lobby creator has been lost.<br>The game cannot continue. Please restart the game.<br>很抱歉，與廳主的連線已經中斷。<br>遊戲無法繼續。請重新啟動遊戲。", !0))
}
function Xv3_Steam(t) {
    var s = (t = t.split("\n¶\n"))[0].split("\n")
      , e = (s[2],
    HnDC = ~~s[3],
    t.shift(),
    t.map(t=>{
        var t = t.split("\n")
          , s = Number(t[0])
          , e = t[1]
          , i = t[2]
          , o = [t[3], t[4], t[5], t[6]]
          , t = FouV.N(t[7]);
        return {
            id: s,
            U: e,
            name: i,
            R: Number.MAX_SAFE_INTEGER,
            G: -1,
            controls: o,
            O: void 0,
            v: t.v,
            X: t.X
        }
    }
    ));
    if (Ihla) {
        let t;
        for (t = 0; t < MiVw.length; t++) {
            player_id = MiVw[t].id;
            let s = !1;
            for (let t = 0; t < e.length; t++)
                if (e[t].id == player_id) {
                    s = !0;
                    break
                }
            s || MiVw[t].R == Number.MAX_SAFE_INTEGER && (MiVw[t].R = MiVw[t].G + 1)
        }
    } else {
        Ke94 = [],
        MiVw = e;
        for (let t = 0; t < e.length; t++)
            e[Ke94[e[t].id] = t].U == GLOBAL_MM_USER_ID && (WEPA = e[t].id,
            YTCb = t)
    }
}
function CciS(t, s, e="ws") {
    _dFL && (_dFL.onerror = _dFL.onopen = _dFL.onclose = _dFL.onmessage = null,
    _dFL.close()),
    wsUrl = e + `://${t}:` + s,
    _dFL = new WebSocket(wsUrl),
    ZpMS = !0;
    const i = setTimeout(()=>{
        _dFL.close()
    }
    , 5e3);
    _dFL.onopen = ()=>{
        localStorage.setItem("H&egPDS+", IUCG),
        localStorage.setItem("ZB2AwNu%", LKNI),
        clearTimeout(i),
        _dFL.send("LIST"),
        TDxF = !0
    }
    ,
    _dFL.onmessage = function(t) {
        if ((t = t.data).startsWith("FRAME\n") ? Boex(t) : t.startsWith("LIST\n") ? (TDdm(t),
        _RB3 != OZsE && _RB3 != ZzG5 || FzMO(ZzG5)) : t.startsWith("UNABLE_TO_JOIN\n") ? (s = t.split("\n"),
        Number(s[1]) == WuQJ && FzMO(DP_H, `Failed to join the room${WuQJ} 未能加入房間` + WuQJ, "NOT_EXIST" == s[2] ? "Reason: The room doesn't exist<br>原因: 房間不存在" : "INVALID_STATUS" == s[2] ? "Reason: The game in the room has started<br>原因: 房間內的遊戲已開始" : "ROOM_FULL" == s[2] ? "Reason: The room is full<br>原因: 房間已滿" : "Unknown reason 未知原因")) : t.startsWith("PLAYER_LIST\n") ? (s = t.split("\n"),
        Number(s[1]) != WuQJ ? (FzMO(DP_H, "Error 錯誤", "Attempting to join a room that was not requested<br>嘗試加入一個未被請求的房間", !0),
        _dFL.close()) : (Xv3_(t),
        Ihla || _RB3 != XAn2 && _RB3 != Krlb || FzMO(Krlb))) : t.startsWith("CHAT\n") ? Jml3(~~(s = t.split("\n"))[1], s[2], s[3]) : t.startsWith("AWAY\n") ? Usm2(~~(s = t.split("\n"))[1], s[2]) : t.startsWith("UPDATE_CONTROL_NAMES\n") ? SCLo(~~(s = t.split("\n"))[1], s[2], s[3], s[4], s[5]) : t.startsWith("UPDATE_ACHIEVEMENTS\n") && Py6j(~~(s = t.split("\n"))[1], s[2]),
        t.startsWith("LEFT_ROOM\n")) {
            var s = t.split("\n");
            WuQJ == ~~s[1] && (_RB3 == Krlb ? (FzMO(ZzG5),
            REYr()) : _dFL.close())
        } else if (t.startsWith("ROOM_NOW_STARTED\n")) {
            s = t.split("\n");
            if (WuQJ == ~~s[1])
                if (_RB3 == Krlb) {
                    Ii9w.M = !1,
                    GqLZ = Ihla = !0,
                    FzMO(XFpe),
                    V_Ws.style.display = "block",
                    C1dx(),
                    Ycpn.addEventListener("keypress", _dnq),
                    FouV.F = !1,
                    XYSz.D(0, 1),
                    BLg_.V = !0,
                    Ii9w.M = !1,
                    FouV.page = 0,
                    FouV.T = 1 + FouV.k,
                    FouV.g.I(Number(s[2])),
                    NcPr();
                    for (let t = 0; t < 100; t++)
                        CrdD.C[t] = [];
                    IakF()
                } else
                    _dFL.close();
            else
                _dFL.close()
        } else
            t.startsWith("YOUR_ID\n") && (s = t.split("\n"),
            WEPA = Number(s[1]),
            t = Number(s[2]),
            GAME_VERSION != t) && (_dFL.close(),
            FzMO(DP_H, "Error 錯誤", "Server version and game client version do not match<br>伺服器版本與遊戲版本不一致"))
    }
    ,
    _dFL.onclose = function() {
        _RB3 != DP_H && null !== _dFL && (_dFL = null,
        Ihla ? (TDxF = !1,
        FzMO(DP_H, "Network connection error 網路連線錯誤", "Sorry, the connection to the room server has been lost.<br>The game cannot continue. Please restart the game.<br>很抱歉，與房間服務器的連線已經中斷。<br>遊戲無法繼續。請重新啟動遊戲。", !0)) : TDxF ? (TDxF = !1,
        FzMO(DP_H, "Connection lost 連線中斷", "The connection to the room server is lost.<br>與房間伺服器的連線已中斷了。")) : "ws" === e ? CciS(t, s, "wss") : (NqTZ = !(ZpMS = !1),
        FzMO(DP_H, "Network connection error 網路連線錯誤", `Sorry, unable to connect to the room server<br />with the IP address ${IUCG} and port ${LKNI}.<br>抱歉，無法連接到房間伺服器 IP:     ${IUCG} 端口:${LKNI}。`)))
    }
    ,
    _dFL.onerror = function() {
        console.log("Unable to connect to " + wsUrl),
        _dFL.close()
    }
}
function REYr() {
    const t = document.getElementById("room-list-refresh-button")
      , s = (t.disabled = !0,
    setTimeout(()=>{
        t.disabled = !1
    }
    , 1e3),
    document.querySelector("#network-mode-room-list #room-list-table-wrapper"))
      , e = document.querySelector("#network-mode-room-list #room-loader");
    s.style.opacity = "50%",
    e.style.opacity = "100%",
    setTimeout(()=>{
        s.style.opacity = "100%",
        e.style.opacity = "0%"
    }
    , 1e3),
    _dFL.send("LIST")
}
function ZasT() {
    _dFL.close()
}
function leaveLobbyList() {
    _RB3 == UI_STATE_MM_LIST_LOBBY && FzMO(UI_STATE_NETWORK_MODE_MATCHMAKING)
}
function AlvF() {
    const t = document.getElementById("leave-room-button");
    t.disabled = !0,
    setTimeout(()=>{
        t.disabled = !1
    }
    , 1e3),
    _dFL.send(`LEAVE
` + WuQJ)
}
function leaveLobby() {
    var t = GLOBAL_MM_LOBBY_CREATED;
    window.electronAPI.mmLeaveLobby(),
    GLOBAL_MM_LOBBY_CREATED = !1,
    GLOBAL_MM_LOBBY_JOINED = !1,
    GLOBAL_MM_TEMP_PLAYER_LIST = [],
    t ? FzMO(UI_STATE_NETWORK_MODE_MATCHMAKING) : _RB3 == UI_STATE_MM_LOBBY && FzMO(UI_STATE_MM_LIST_LOBBY)
}
function Glx3() {
    _RB3 == E3KY ? FzMO(ZzG5) : _RB3 == UI_STATE_MM_ERROR_CREATING_LOBBY ? FzMO(UI_STATE_NETWORK_MODE_MATCHMAKING) : _RB3 == UI_STATE_MM_ERROR_JOINING_LOBBY ? FzMO(UI_STATE_MM_LIST_LOBBY) : FzMO(UI_STATE_NETWORK_MODE_PRIVATE_SERVER)
}
function clickSteamErrorButton() {
    window.electronAPI.u09t()
}
function Boex(t) {
    var s = ~~(t = t.split("\n"))[1]
      , e = ~~t[2]
      , i = ~~t[3]
      , o = ~~t[4]
      , a = ~~t[5]
      , h = ~~t[6]
      , n = ~~t[7]
      , t = ~~t[8]
      , r = e % 100
      , r = (CrdD.C[r][s] = [i, o, a, h, n, t],
    Ke94[s]);
    MiVw[r].G = e
}
function TDdm(t) {
    OAdq = [],
    (t = t.split("\n¶\n")).shift(),
    t = t.map(t=>({
        id: (t = t.split("\n"))[1],
        status: t[2],
        W: t[3],
        Z: parseInt(t[4], 10),
        P: Number(parseInt(t[5], 10)),
        J: t[6]
    })),
    OAdq = t
}
function onMMLatencyInputChange() {
    30 < (HnDC = (HnDC = ~~document.querySelector("#network-mode-mm-lobby #latency-input").value) < 1 ? 1 : HnDC) && (HnDC = 15),
    localStorage.setItem("mm-input-delay", "" + HnDC),
    window.electronAPI.mmSetLatency(HnDC)
}
function UGiF() {
    30 < (HnDC = (HnDC = ~~document.querySelector("#network-mode-room-lobby-page #latency-input").value) < 1 ? 1 : HnDC) && (HnDC = 30),
    _dFL.send(`CHANGE_LATENCY
` + HnDC)
}
function Xv3_(t) {
    var s = (t = t.split("\n¶\n"))[0].split("\n")
      , e = (HnDC = ~~s[2],
    document.querySelector("#network-mode-room-lobby-page #latency-input").value = HnDC,
    t.shift(),
    t.map(t=>{
        var t = t.split("\n")
          , s = Number(t[0])
          , e = t[1]
          , i = [t[2], t[3], t[4], t[5]]
          , t = FouV.N(t[6]);
        return {
            id: s,
            name: e,
            R: Number.MAX_SAFE_INTEGER,
            G: -1,
            controls: i,
            O: void 0,
            v: t.v,
            X: t.X
        }
    }
    ));
    if (Ihla) {
        let t;
        for (t = 0; t < MiVw.length; t++) {
            player_id = MiVw[t].id;
            let s = !1;
            for (let t = 0; t < e.length; t++)
                if (e[t].id == player_id) {
                    s = !0;
                    break
                }
            s || MiVw[t].R == Number.MAX_SAFE_INTEGER && (MiVw[t].R = MiVw[t].G + 1)
        }
    } else {
        Ke94 = [],
        MiVw = e;
        for (let t = 0; t < e.length; t++)
            e[Ke94[e[t].id] = t].id == WEPA && (YTCb = t);
        1 < e.length ? document.querySelector("#network-mode-room-lobby-page #lobby-start-game-button").disabled = !1 : document.querySelector("#network-mode-room-lobby-page #lobby-start-game-button").disabled = !0
    }
}
function sWbi(t, s=2) {
    return JSON.stringify(t, (t,s)=>"bigint" == typeof s ? "!@" + s.toString() : s, s)
}
window.electronAPI && setInterval(()=>{
    gettingUnreadMessages || GetUnhandledSteamNetworkModeMessages()
}
, 16);
let generateLobbyListTableWaitingSession = 0;
async function generateLobbyListTable() {
    refreshLobbyList();
    const t = generateLobbyListTableWaitingSession;
    setTimeout(()=>{
        generateLobbyListTableWaitingSession == t && FzMO(UI_STATE_MM_ERROR_CREATING_LOBBY, "Error 錯誤", "Sorry, unable list the lobbies. This may be due to network or Steam connection issues. Steam issues often occur after a force-quit restart, multiple Steam instances, or waking from sleep. Restarting the game may help.<br />抱歉，無法載入大廳清單。可能是網路問題或 Steam 連線問題。Steam 連線問題通常在強制關閉後重啟、同時開啟多個 Steam 實例，或電腦剛從睡眠喚醒發生，重新啟動遊戲可能會有幫助。")
    }
    , 2e4)
}
let refreshLobbyListSession = 0;
function refreshLobbyList() {
    const t = document.querySelector("#network-mode-mm-list-lobby #room-list-refresh-button");
    t.disabled = !0,
    setTimeout(()=>{
        t.disabled = !1
    }
    , 5e3);
    let a = ++refreshLobbyListSession;
    const h = document.querySelector("#network-mode-mm-list-lobby #room-list-table-wrapper")
      , l = document.querySelector("#network-mode-mm-list-lobby #room-loader");
    h.style.opacity = "50%",
    l.style.opacity = "100%",
    setTimeout(()=>{
        a == refreshLobbyListSession && (h.style.opacity = "100%",
        l.style.opacity = "0%",
        refreshLobbyListSession++)
    }
    , 6e4),
    window.electronAPI.mmListLobby().then(s=>{
        if (generateLobbyListTableWaitingSession++,
        a == refreshLobbyListSession) {
            for (; h.firstChild; )
                h.removeChild(h.firstChild);
            var e = document.createElement("table");
            e.id = "room-list-table";
            const r = document.createElement("tbody");
            r.id = "room-list-table-body";
            var i, o = document.createElement("thead");
            o.innerHTML = `
            <tr>
                <th class="mm-name-col">Name 名稱</th>
                <th class="mm-latency-col">Latency 延遲</th>
                <th class="mm-location-col">Location 位置</th>
                <th class="mm-players-col">Players 玩家</th>
                <th class="mm-password-col">Need Password?<br>需要密碼?</th>
                <th class="mm-join-button-col"></th>
            </tr>
            `;
            let n = 0
              , t = (s.sort((t,s)=>{
                var e = GLOBAL_MM_COUNTRY_CODE
                  , i = t.country === e
                  , e = s.country === e;
                return i && !e ? -1 : !i && e ? 1 : t.country < s.country ? -1 : t.country > s.country ? 1 : 0
            }
            ),
            0);
            s.forEach(e=>{
                if (e || t++,
                e && e.creator != GLOBAL_MM_USER_ID) {
                    n++;
                    var i = document.createElement("tr");
                    let t = document.createElement("td")
                      , s = (t.innerHTML = e.name,
                    i.appendChild(t),
                    e = JSON.parse(JSON.stringify(e)),
                    "-");
                    for (const h of Reflect.ownKeys(e)) {
                        var o = String(h)
                          , a = e[h];
                        let t;
                        try {
                            t = null !== a && "object" == typeof a ? JSON.stringify(a) : String(a)
                        } catch {
                            t = String(a)
                        }
                        "latency" == o && (s = t)
                    }
                    (t = document.createElement("td")).innerHTML = s,
                    i.appendChild(t),
                    (t = document.createElement("td")).innerHTML = e.country,
                    i.appendChild(t),
                    (t = document.createElement("td")).innerHTML = e.num_members + "/" + e.max_members,
                    i.appendChild(t),
                    (t = document.createElement("td")).style = `font-size: 80%; color:${null != e.password ? "orange" : "green"};`,
                    t.innerHTML = null != e.password ? "Has Password 有密碼" : "No Password 沒密碼",
                    i.appendChild(t),
                    t = document.createElement("td"),
                    e.version != GAME_VERSION ? (t.style = "font-size: 80%; color: red;",
                    t.innerHTML = e.version > GAME_VERSION ? "Their version newer" : "Their version older") : t.append(createJoinLobbyButton(e.id, e.name)),
                    i.appendChild(t),
                    r.appendChild(i)
                }
            }
            ),
            0 == n && (s = document.createElement("tr"),
            (i = document.createElement("td")).colSpan = 6,
            i.style = "text-align: center; color: gray; padding: 8px;",
            i.innerHTML = "No Joinable Lobbies 沒有可加入的大廳",
            s.appendChild(i),
            r.appendChild(s)),
            0 < t && (i = document.createElement("tr"),
            (s = document.createElement("td")).colSpan = 6,
            s.style = "text-align: center; color: gray; padding: 8px;",
            s.innerHTML = `Besides the above, there are currently ${t} lobbies that have already started the game.<br>除了以上，目前還有 ${t} 個房間已經開始了遊戲。`,
            i.appendChild(s),
            r.appendChild(i)),
            e.appendChild(o),
            e.appendChild(r),
            h.appendChild(e),
            h.style.opacity = "100%",
            l.style.opacity = "0%",
            refreshLobbyListSession++
        }
    }
    )
}
function createJoinLobbyButton(t, s) {
    var e = document.createElement("button");
    return e.textContent = "Join 加入",
    e.className = "join-button",
    e.id = "join-button",
    e.onclick = function() {
        onClickLobbyJoin(t, s)
    }
    ,
    e
}
function onClickLobbyJoin(t, s) {
    var e;
    _RB3 == UI_STATE_MM_LIST_LOBBY && (e = document.getElementById("mm-join-lobby-pw-input").value,
    localStorage.setItem("mm-join-lobby-pw-input", e),
    window.electronAPI ? (FzMO(UI_STATE_MM_JOINING_LOBBY),
    window.electronAPI.mmJoinLobby(t, e).then(t=>{
        "-1" != t && "-2" != t ? (GLOBAL_MM_LOBBY_JOINED = !0,
        GLOBAL_MM_LOBBY_NAME = s,
        GLOBAL_MM_LOBBY_PW = "",
        HnDC = ~~t,
        FzMO(UI_STATE_MM_LOBBY)) : "-2" == t ? (GLOBAL_MM_LOBBY_JOINED = !1,
        GLOBAL_MM_TEMP_PLAYER_LIST = [],
        FzMO(UI_STATE_MM_ERROR_JOINING_LOBBY, "Error 錯誤", "Incorrect password. Please enter the correct password at the bottom of the screen before clicking Join again.<br />密碼錯誤。請在畫面底部輸入正確密碼後，再按「加入」重新嘗試。")) : "-3" == t ? (GLOBAL_MM_LOBBY_JOINED = !1,
        GLOBAL_MM_TEMP_PLAYER_LIST = [],
        FzMO(UI_STATE_MM_ERROR_JOINING_LOBBY, "Error 錯誤", "Unable to join the lobby. The host is using a different version of the game.<br />無法加入大廳，廳主使用了不同版本的遊戲。")) : (GLOBAL_MM_LOBBY_JOINED = !1,
        GLOBAL_MM_TEMP_PLAYER_LIST = [],
        FzMO(UI_STATE_MM_ERROR_JOINING_LOBBY, "Error 錯誤", "Sorry, unable to join the lobby. It may have already closed or encountered an error. It could also be caused by network or Steam connection issues. In the latter case, restarting the game may help.<br />抱歉，無法加入大廳。大廳房間可能已經關閉，或發生錯誤。也有可能是網路或 Steam 連線問題所致。若是後者，重新啟動遊戲可能會有幫助。"))
    }
    )) : (GLOBAL_MM_LOBBY_JOINED = !0,
    GLOBAL_MM_LOBBY_NAME = s,
    GLOBAL_MM_LOBBY_PW = "",
    FzMO(UI_STATE_MM_LOBBY)))
}
function CXMh() {
    for (var t = document.querySelector("#network-mode-room-list #room-list-table-wrapper"); t.firstChild; )
        t.removeChild(t.firstChild);
    var s = document.createElement("table");
    s.id = "room-list-table";
    const i = document.createElement("tbody");
    i.id = "room-list-table-body";
    var e = document.createElement("thead");
    e.innerHTML = `
<tr>
    <th class="room-id-col">Room ID 房號</th>
    <th class="room-status-col">Room Status 房間狀態</th>
    <th class="players-col">Player(s) 玩家清單</th>
    <th class="join-button-col"></th>
</tr>
`,
    OAdq.forEach(t=>{
        var s = document.createElement("tr");
        (e = document.createElement("td")).innerHTML = t.id,
        s.appendChild(e),
        (e = document.createElement("td")).innerHTML = "VACANT" == t.status ? "Vacant 空置" : "LOBBY" == t.status ? "Pending 等待" : "STARTED" == t.status ? "Game Started 遊戲已開始" : "UNKNOWN 未知",
        s.appendChild(e);
        (e = document.createElement("td")).innerHTML = "VACANT" == t.status ? "---" : t.J,
        s.appendChild(e);
        var e = document.createElement("td");
        "VACANT" == t.status || "LOBBY" == t.status ? 8 <= t.P ? e.innerHTML = "Full 已滿" : e.append(LF5M(t.id)) : "STARTED" == t.status && (e.innerHTML = "Unable to join 無法加入"),
        s.appendChild(e),
        i.appendChild(s)
    }
    ),
    s.appendChild(e),
    s.appendChild(i),
    t.appendChild(s)
}
function createKickButton(t) {
    var s = document.createElement("button");
    return s.textContent = "Kick 踢出",
    s.className = "join-button",
    s.id = "kick-button-" + t,
    s.onclick = function() {
        onKick(t)
    }
    ,
    s
}
function onKick(t) {
    window.electronAPI.mmKickPlayer(t)
}
let keepRefreshingPlayerList = !1;
function resetMMPlayerListTable() {
    var t = document.querySelector("#network-mode-mm-lobby #lobby-player-list-wrapper");
    if (t) {
        for (; t.firstChild; )
            t.removeChild(t.firstChild);
        var s = document.createElement("table")
          , e = (s.id = "lobby-player-list-table",
        document.createElement("thead"))
          , i = (e.innerHTML = `
<tr>
  <th class="mm-player-list-id-col">ID</th>
  <th class="mm-player-list-name-col">Player Name 玩家名稱</th>
  <th class="mm-player-list-name-col">Location 位置</th>
  <th class="mm-join-button-col"></th>
</tr>`,
        document.createElement("tbody"))
          , o = (i.id = "lobby-player-list-table-body",
        document.createElement("tr"));
        const a = document.createElement("td");
        a.colSpan = 4,
        a.style.textAlign = "center",
        a.style.color = "gray",
        a.style.padding = "8px",
        a.innerHTML = "Loading...",
        setTimeout(()=>{
            "Loading..." === a.innerHTML && (a.style.color = "red",
            a.innerHTML += "<br><br>Sorry, it seems to be taking too long. It may be caused by network or Steam connection issues. Steam connection problems often occur if the game was force-quit less than 1 minute ago and restarted, if the same Steam account is running multiple instances of the game, or if the game continued running while the computer went to sleep and then woke up. Restarting the game may help.<br><br>抱歉，似乎花費太久時間了。這可能是網路或 Steam 連線問題所致。Steam 連線問題通常在以下情況發生：若是在 少於 1 分鐘前強制關閉並重新啟動遊戲、同一 Steam 帳號同時執行多個遊戲，或遊戲運行時電腦進入睡眠然後喚醒。重新啟動遊戲通常能解決問題。")
        }
        , 7e3),
        o.appendChild(a),
        i.appendChild(o),
        s.appendChild(e),
        s.appendChild(i),
        t.appendChild(s)
    }
}
function generateMMPlayerListTable() {
    if (keepRefreshingPlayerList = !1,
    _RB3 == UI_STATE_MM_LOBBY && document.querySelector("#network-mode-mm-lobby #lobby-player-list-wrapper")) {
        const u = (t,s,e,i)=>{
            var o = document.createElement("tr");
            (a = document.createElement("td")).textContent = 0 < t ? "" + t : "",
            o.appendChild(a),
            (a = document.createElement("td")).textContent = e ?? "",
            o.appendChild(a);
            (e = document.createElement("td")).textContent = i ?? "",
            o.appendChild(e);
            var a = document.createElement("td");
            return GLOBAL_MM_LOBBY_CREATED && 0 < t && s != GLOBAL_MM_USER_ID ? a.append(createKickButton(s)) : a.textContent = "---",
            o.appendChild(a),
            o
        }
        ;
        (async()=>{
            try {
                await new Promise(t=>setTimeout(t, 100));
                let t = 0;
                GLOBAL_MM_LOBBY_JOINED && 0 < (t = await window.electronAPI.mmGetLobbyLatency()) && (document.querySelector("#network-mode-mm-lobby #latency-input").value = t);
                var s, e, o = await window.electronAPI.mmGetPlayerNameList(), a = (GLOBAL_MM_LOBBY_JOINED && (0 < (t = await window.electronAPI.mmGetLobbyLatency()) && (document.querySelector("#network-mode-mm-lobby #latency-input").value = t),
                document.querySelector("#network-mode-mm-lobby #latency-input").value = await window.electronAPI.mmGetLobbyLatency()),
                document.querySelector("#network-mode-mm-lobby #lobby-player-list-table-body"));
                if (t < 0)
                    GLOBAL_MM_LOBBY_CREATED = !1,
                    GLOBAL_MM_LOBBY_JOINED = !1,
                    GLOBAL_MM_TEMP_PLAYER_LIST = [],
                    a.innerHTML = "",
                    r = document.createElement("tr"),
                    (n = document.createElement("td")).colSpan = 4,
                    n.style.textAlign = "center",
                    n.style.color = "crimson",
                    n.style.padding = "8px",
                    n.textContent = "Lobby is full, error or removed, or you’ve been kicked out 大廳已滿、錯誤或已被移除，或你已被踢出",
                    r.appendChild(n),
                    a.appendChild(r),
                    FzMO(UI_STATE_MM_ERROR_JOINING_LOBBY, "Error 錯誤", "Lobby is full, error or removed, or you’ve been kicked out<br>大廳已滿、錯誤或已被移除，或你已被踢出");
                else if (i = JSON.stringify(o) != JSON.stringify(GLOBAL_MM_TEMP_PLAYER_LIST))
                    if (GLOBAL_MM_TEMP_PLAYER_LIST = JSON.parse(JSON.stringify(o)),
                    1 < o.length && GLOBAL_MM_LOBBY_CREATED ? document.querySelector("#network-mode-mm-lobby #lobby-start-game-button").disabled = !1 : document.querySelector("#network-mode-mm-lobby #lobby-start-game-button").disabled = !0,
                    0 == o.length)
                        GLOBAL_MM_LOBBY_CREATED = !1,
                        GLOBAL_MM_LOBBY_JOINED = !1,
                        GLOBAL_MM_TEMP_PLAYER_LIST = [],
                        a.innerHTML = "",
                        s = document.createElement("tr"),
                        (e = document.createElement("td")).colSpan = 4,
                        e.style.textAlign = "center",
                        e.style.color = "crimson",
                        e.style.padding = "8px",
                        e.textContent = "Lobby is full, error or removed, or you’ve been kicked out 大廳已滿、錯誤或已被移除，或你已被踢出",
                        s.appendChild(e),
                        a.appendChild(s),
                        FzMO(UI_STATE_MM_ERROR_JOINING_LOBBY, "Error 錯誤", "Lobby is full, error or removed, or you’ve been kicked out<br>大廳已滿、錯誤或已被移除，或你已被踢出");
                    else {
                        var h = Array.isArray(o) ? o : [];
                        a.innerHTML = "";
                        let i = 0;
                        const l = document.createDocumentFragment();
                        for (h.forEach(t=>{
                            var s = t && void 0 !== t.id ? String(t.id) : ""
                              , e = t && "string" == typeof t.name ? t.name : "UNKNOWN"
                              , t = t && "string" == typeof t.countryCode ? t.countryCode : "UNKNOWN";
                            l.appendChild(u(i + 1, s, e, t)),
                            i++
                        }
                        ); i < 8; )
                            l.appendChild(u(0, "", "----", "----")),
                            i++;
                        a.appendChild(l),
                        setTimeout(generateMMPlayerListTable, 300),
                        keepRefreshingPlayerList = !0
                    }
                else
                    setTimeout(generateMMPlayerListTable, 300),
                    keepRefreshingPlayerList = !0
            } catch (t) {
                var i, n = document.querySelector("#network-mode-mm-lobby #lobby-player-list-table-body"), r = (n.innerHTML = "",
                document.createElement("tr"));
                (i = document.createElement("td")).colSpan = 4,
                i.style.textAlign = "center",
                i.style.color = "crimson",
                i.style.padding = "8px",
                i.textContent = "Failed to load players: " + t,
                r.appendChild(i),
                n.appendChild(r),
                GLOBAL_MM_LOBBY_JOINED = !1,
                GLOBAL_MM_LOBBY_CREATED = !1,
                GLOBAL_MM_TEMP_PLAYER_LIST = [],
                FzMO(UI_STATE_MM_ERROR_JOINING_LOBBY, "Error 錯誤", "Lobby error or removed, or you’ve been kicked out<br>大廳錯誤或已被移除，或你已被踢出")
            }
        }
        )()
    }
}
function onGamePrefTextChanged(t) {
    console.log("onGamePrefTextChanged: " + t)
}
function KAIt() {
    for (var t = document.querySelector("#network-mode-room-lobby-page #lobby-player-list-wrapper"); t.firstChild; )
        t.removeChild(t.firstChild);
    var s = document.createElement("table");
    s.id = "lobby-player-list-table";
    const i = document.createElement("tbody");
    i.id = "lobby-player-list-table-body";
    var e = document.createElement("thead");
    e.innerHTML = `
<tr>
    <th class="player-list-id-col">ID</th>
    <th class="player-list-name-col">Player Name 玩家名稱</th>
</tr>
`;
    let o = 0;
    for (MiVw.forEach(t=>{
        var s = document.createElement("tr")
          , e = document.createElement("td");
        e.innerHTML = t.id,
        s.appendChild(e),
        (e = document.createElement("td")).innerHTML = t.name,
        s.appendChild(e),
        i.appendChild(s),
        o++
    }
    ); o < 8; o++) {
        var a = document.createElement("tr")
          , h = document.createElement("td");
        a.appendChild(h),
        (h = document.createElement("td")).innerHTML = "----",
        a.appendChild(h),
        i.appendChild(a)
    }
    s.appendChild(e),
    s.appendChild(i),
    t.appendChild(s)
}
function XyET(t) {
    if (document.getElementById("lobby-chat-input").value = "",
    document.getElementById("lobby-chat-text-area").value = "",
    document.getElementById("network-chat-input").value = "",
    document.getElementById("network-chat-text-area").value = "",
    _RB3 == ZzG5) {
        if (WuQJ = Number(t),
        FzMO(XAn2),
        null == _dFL)
            throw new Error("WS is null");
        t = FouV.A(),
        _dFL.send(`JOIN
${WuQJ}
${_d4B}
${Sh7E.Y[0]}
${Sh7E.Y[11]}
${Sh7E.Y[22]}
${Sh7E.Y[33]}
` + t.v.join(","))
    }
}
function LF5M(t) {
    var s = document.createElement("button");
    return s.textContent = "Join 加入 " + t,
    s.className = "join-button",
    s.id = "join-button-" + t,
    s.onclick = function() {
        XyET(t)
    }
    ,
    s
}
const lobbyChatInput = document.getElementById("lobby-chat-input");
function WUKO(s) {
    if (_RB3 == Krlb && "Enter" === s.key) {
        s.preventDefault();
        let t = lobbyChatInput.value;
        (t = 100 < (t = t.replace(/[\n¶]/g, "")).length ? t.slice(0, 100) : t) && _dFL.send(`CHAT
` + t),
        lobbyChatInput.value = ""
    }
}
const Ycpn = document.getElementById("network-chat-input");
function _dnq(s) {
    if (_RB3 == XFpe && "Enter" === s.key) {
        s.preventDefault();
        let t = Ycpn.value;
        (t = 100 < (t = t.replace(/[\n¶]/g, "")).length ? t.slice(0, 100) : t) && _dFL.send(`CHAT
` + t),
        Ycpn.value = "",
        Ycpn.blur()
    }
    C1dx()
}
const N23U = document.getElementById("lobby-chat-text-area");
let PJeK = 0;
N23U?.addEventListener("scroll", ()=>{
    PJeK = Date.now()
}
);
const USB7 = document.getElementById("network-chat-text-area");
let Khe3 = 0;
function OM9M() {
    var t = new Date;
    return t.getHours().toString().padStart(2, "0") + `:${t.getMinutes().toString().padStart(2, "0")}:` + t.getSeconds().toString().padStart(2, "0")
}
function SCLo(t, s, e, i, o) {
    t != WEPA && (t = Ke94[t],
    MiVw[t].controls = [s, e, i, o],
    FbaX(FouV.g))
}
function Py6j(t, s) {
    s = FouV.N(s),
    t = Ke94[t],
    MiVw[t].v = s.v,
    MiVw[t].X = s.X
}
function Usm2(t, s) {
    t = Ke94[t],
    MiVw[t].O = "resume" == s ? void 0 : s
}
function Jml3(t, s, e) {
    _RB3 == Krlb && (o = N23U.scrollHeight - N23U.clientHeight <= N23U.scrollTop + 1,
    N23U.value += (N23U.value ? "\n" : "") + s + ": " + e,
    o || 1e4 < Date.now() - PJeK) && (50 < (i = N23U.value.split("\n")).length && (i = i.slice(-50),
    N23U.value = i.join("\n")),
    N23U.scrollTop = N23U.scrollHeight);
    var i, o = USB7.scrollHeight - USB7.clientHeight <= USB7.scrollTop + 1;
    0 == F0qv && (USB7.value = ""),
    USB7.value += (USB7.value ? "\n" : "") + OM9M() + `: ${s} ` + e,
    (o || 1e4 < Date.now() - Khe3) && (50 < (i = USB7.value.split("\n")).length && (i = i.slice(-50),
    USB7.value = i.join("\n")),
    C1dx(),
    USB7.scrollTop = USB7.scrollHeight)
}
USB7?.addEventListener("scroll", ()=>{
    Khe3 = Date.now()
}
);
let F0qv = 0;
function C1dx(t=1e4) {
    ORUW.style.opacity = "100%",
    0 != F0qv && clearTimeout(F0qv),
    F0qv = setTimeout(()=>{
        document.activeElement == Ycpn ? C1dx(1e3) : (F0qv = 0,
        ORUW.style.opacity = "0")
    }
    , t)
}
const ORUW = document.getElementById("network-chatroom");
let ORUW_dragged = !1;
const V_Ws = document.getElementById("network-chatroom-wrapper")
  , DN5L = [document.getElementById("control-name-0"), document.getElementById("control-name-1"), document.getElementById("control-name-2"), document.getElementById("control-name-3")];
ORUW.onmousedown = function(t) {}
,
ORUW.ondragstart = function() {
    return !1
}
;
let Huf7 = "dummy";
function startMMGameInLobby() {
    window.electronAPI && window.electronAPI.mmStartGameInLobby()
}
function Waga() {
    _dFL.send("START"),
    _dFL.send(`CHAT
clicked 'Start Game'`)
}
function _d6l() {
    document.querySelector("#network-mode-room-lobby-page #latency-help").style.display = "flex"
}
function _LYv() {
    document.querySelector("#network-mode-room-lobby-page #latency-help").style.display = "none"
}
function showMMLatencyHelp() {
    document.querySelector("#network-mode-mm-lobby #latency-help").style.display = "flex"
}
function hideMMLatencyHelp() {
    document.querySelector("#network-mode-mm-lobby #latency-help").style.display = "none"
}
function showNetworkModeMoreInfo() {
    document.getElementById("network-mode-more-info").style.display = "flex",
    document.getElementById("leave-network-mode-button").style.display = "none"
}
function hideNetworkModeMoreInfo() {
    document.getElementById("network-mode-more-info").style.display = "none",
    document.getElementById("leave-network-mode-button").style.display = "block"
}
function leaveNetworkModePrivateRoom() {
    FzMO(UI_STATE_NETWORK_MODE_MENU_PAGE)
}
function leaveNetworkModeMenu() {
    FzMO(XFpe)
}
function leaveNetworkModeMatchmaking0() {
    FzMO(UI_STATE_NETWORK_MODE_MENU_PAGE)
}
function clickNetworkMethod1() {
    document.getElementById("mm-room-name-input").value = localStorage.getItem("mm-room-name") || GLOBAL_MM_USER_NAME,
    document.getElementById("mm-room-pw-input").value = localStorage.getItem("mm-room-pw") || "",
    FzMO(UI_STATE_NETWORK_MODE_MATCHMAKING)
}
function clickNetworkMethod2() {
    FzMO(UI_STATE_NETWORK_MODE_PRIVATE_SERVER)
}
function clickmmCreateLobby() {
    var t = document.getElementById("mm-room-name-input")
      , s = document.getElementById("mm-room-pw-input");
    let e = t.value
      , i = ("Unnamed" == (e = "" == e ? "Unnamed" : e) ? localStorage.setItem("mm-room-name", "") : localStorage.setItem("mm-room-name", e),
    s.value);
    localStorage.setItem("mm-room-pw", i),
    HnDC = localStorage.getItem("mm-input-delay") || 3,
    window.electronAPI ? (FzMO(UI_STATE_MM_CREATING_LOBBY),
    window.electronAPI.mmCreateLobby(e, i, HnDC, GLOBAL_MM_COUNTRY_CODE, GLOBAL_MM_USER_ID, 4, Sh7E.Y[0], Sh7E.Y[11], Sh7E.Y[22], Sh7E.Y[33]).then(t=>{
        1 == t ? (GLOBAL_MM_LOBBY_CREATED = !0,
        GLOBAL_MM_LOBBY_NAME = e,
        GLOBAL_MM_LOBBY_PW = i,
        FzMO(UI_STATE_MM_LOBBY)) : (GLOBAL_MM_LOBBY_CREATED = !1,
        GLOBAL_MM_TEMP_PLAYER_LIST = [],
        FzMO(UI_STATE_MM_ERROR_CREATING_LOBBY, "Error 錯誤", "Sorry, unable to create the lobby. This may be due to network or Steam connection issues. Steam issues often occur after a force-quit restart, multiple Steam instances, or waking from sleep. Restarting the game may help.<br />抱歉，無法建立大廳。可能是網路問題或 Steam 連線問題。Steam 連線問題通常在強制關閉後重啟、同時開啟多個 Steam 實例，或電腦剛從睡眠喚醒發生，重新啟動遊戲可能會有幫助。"))
    }
    )) : (GLOBAL_MM_LOBBY_CREATED = !0,
    FzMO(UI_STATE_MM_LOBBY))
}
function clickMMJoinRoom() {
    FzMO(UI_STATE_MM_LIST_LOBBY)
}
function clickStartPrivateServerButton() {
    document.getElementById("menu-start-private-server-button").disabled = !0;
    var t = document.getElementById("start-server-port")
      , s = Number(t.value);
    if (unsafePorts.has(s))
        FzMO(DP_H, "Error 錯誤", "This port is considered unsafe. Please choose a different one<br>此通端口被視為不安全，請選擇其他端口數值");
    else {
        SERVER_PORT = s,
        localStorage.setItem("H&egPDS+", "localhost"),
        localStorage.setItem("ZB2AwNu%", SERVER_PORT),
        t.disabled = !0,
        window.electronAPI.YwNh(SERVER_PORT);
        const e = document.getElementById("room-loader2");
        e.style.opacity = "100%",
        e.style.zIndex = 999,
        setTimeout(()=>{
            e.style.opacity = "0%",
            e.style.zIndex = -1
        }
        , 2e3)
    }
}
function clickJoinPrivateServerButton() {
    FzMO(Zto2)
}
async function dwEJ() {
    console.log("[補丁] 已跳過檔案完整性與反作弊檢查");
    return true; 
}
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
class Ii9w {
    s0 = null;
    h0 = null;
    o0 = null;
    a0 = null;
    n0 = null;
    r0 = null;
    static async l0() {
        for (let e of ["bandit", "bat", "bat_ball", "bat_chase", "broken_weapon", "criminal", "davis", "davis_ball", "deep", "deep_ball", "dennis", "dennis_ball", "dennis_chase", "etc", "firen", "firen_ball", "firen_flame", "firzen", "firzen_ball", "firzen_chasef", "firzen_chasei", "freeze", "freeze_ball", "freeze_column", "henry", "henry_arrow1", "henry_arrow2", "henry_wind", "hunter", "jack", "jack_ball", "jan", "jan_chase", "jan_chaseh", "john", "john_ball", "john_biscuit", "julian", "julian_ball", "julian_ball2", "justin", "justin_ball", "knight", "louis", "louisEX", "mark", "monk", "rudolf", "rudolf_weapon", "sorcerer", "template", "weapon0", "weapon1", "weapon10", "weapon11", "weapon2", "weapon3", "weapon4", "weapon5", "weapon6", "weapon7", "weapon8", "weapon9", "woody", "woody_ball"]) {
            let s = new TIJj;
            s.filename = e,
            lvT9.c0(`_res_data/${e}.txt`, t=>s.d0(t, e))
        }
    }
    static _0 = [];
    static u0 = !1;
    static f0 = !1;
    static M = !0;
    static g0 = 0;
    static async m0(t) {
        let e = 1;
        for (; ; )
            try {
                await PIXI.Assets.load(t);
                break
            } catch (t) {
                dbl0("code 55: " + t);
                let s = Math.min(500 * Math.pow(2, e - 1), 6e3) + 2e3 * Math.random();
                await new Promise(t=>setTimeout(t, s)),
                e++
            }
    }
    static async p0(t) {
        await PIXI.Assets.unload(t)
    }
    static async S0(t) {
        let e = 1;
        for (; ; )
            try {
                await PIXI.Texture.fromURL(t);
                break
            } catch (t) {
                dbl0("code 85: " + t);
                let s = Math.min(500 * Math.pow(2, e - 1), 6e3) + 2e3 * Math.random();
                await new Promise(t=>setTimeout(t, s)),
                e++
            }
    }
    static async b0(e) {
        Ii9w.g0++;
        let i = 1;
        for (; ; )
            try {
                await PIXI.Assets.load(e),
                console.log(`Attempt: ${i} - ${e} Texture loaded successfully`);
                break
            } catch (t) {
                var o = `Attempt: ${i} - Error loading ${e}: ` + t;
                console.error(o),
                dbl0(o);
                let s = Math.min(500 * Math.pow(2, i - 1), 6e3) + 2e3 * Math.random();
                await new Promise(t=>setTimeout(t, s)),
                i++
            }
        Ii9w.g0--
    }
}
class lvT9 {
    static c0(t, s) {
        this.E0(t, s)
    }
    static async F0(t) {
        return this.L0(t)
    }
    static E0(s, e, i=1) {
        fetch(s).then(t=>t.text()).then(t=>e(t)).catch(t=>{
            t.message.includes("Failed to fetch") && (t = this.B0(i),
            setTimeout(()=>this.E0(s, e, i + 1), t))
        }
        )
    }
    static async L0(t, s=1) {
        try {
            var e = await fetch(t);
            if (e.ok)
                return await e.text();
            throw new Error("" + t)
        } catch (e) {
            if (s < 5 && e.message.includes("Failed to fetch")) {
                const i = this.B0(s);
                return await new Promise(t=>setTimeout(t, i)),
                this.L0(t, s + 1)
            }
            throw e
        }
    }
    static B0(t) {
        return t = 300 * Math.pow(1.5, t - 1),
        t = Math.random() * (.5 * t) + t,
        Math.min(t, 5e3)
    }
    static M0() {
        var t = new Date;
        return "" + t.getFullYear() + String(t.getMonth() + 1).padStart(2, "0") + String(t.getDate()).padStart(2, "0") + "_" + String(t.getHours()).padStart(2, "0") + String(t.getMinutes()).padStart(2, "0") + String(t.getSeconds()).padStart(2, "0")
    }
    static async y0(t, s) {
        await i9Ee.setItem(t, s)
    }
}
class hz3e {
    constructor(t="hz3eDB", s="Storage") {
        this.w0 = t,
        this.D0 = s,
        this.db = null,
        this.V0()
    }
    V0() {
        var t = indexedDB.open(this.w0, 1);
        t.onupgradeneeded = t=>{
            (t = t.target.result).objectStoreNames.contains(this.D0) || t.createObjectStore(this.D0)
        }
        ,
        t.onsuccess = t=>{
            this.db = t.target.result
        }
        ,
        t.onerror = ()=>{}
    }
    async setItem(t, s) {
        s = String(s),
        await this.ready,
        await this.T0(t, s),
        localStorage.getItem(t) && localStorage.removeItem(t)
    }
    async getItem(t) {
        try {
            var s = localStorage.getItem(t);
            if (null !== s)
                return s
        } catch (t) {}
        try {
            return await this.ready,
            await this.k0(t)
        } catch (t) {
            return null
        }
    }
    T0(i, o) {
        return new Promise((t,s)=>{
            var e = this.db.transaction([this.D0], "readwrite").objectStore(this.D0).put(o, i);
            e.onsuccess = ()=>{
                t()
            }
            ,
            e.onerror = ()=>{
                s()
            }
        }
        )
    }
    k0(i) {
        return new Promise((s,t)=>{
            var e = this.db.transaction([this.D0], "readonly").objectStore(this.D0).get(i);
            e.onsuccess = t=>{
                s(t.target.result)
            }
            ,
            e.onerror = ()=>{
                t()
            }
        }
        )
    }
}
let i9Ee = new hz3e;
class HhrJ {
    static I0 = !1;
    static C0() {
        if (Ii9w.s0 && Ii9w.s0.loaded) {
            if (!Ii9w.h0 && !Ii9w.u0) {
                let s = "weapon0";
                Ii9w.h0 = new TIJj,
                Ii9w.h0.filename = s,
                lvT9.c0(`_res_data/${s}.txt`, t=>Ii9w.h0.d0(t, s))
            }
            if (!Ii9w.o0 && !Ii9w.u0) {
                let s = "weapon1";
                Ii9w.o0 = new TIJj,
                Ii9w.o0.filename = s,
                lvT9.c0(`_res_data/${s}.txt`, t=>Ii9w.o0.d0(t, s))
            }
            if (!Ii9w.a0 && !Ii9w.u0) {
                let s = "weapon6";
                Ii9w.a0 = new TIJj,
                Ii9w.a0.filename = s,
                lvT9.c0(`_res_data/${s}.txt`, t=>Ii9w.a0.d0(t, s))
            }
            if (!Ii9w.n0 && !Ii9w.u0) {
                let s = "weapon8";
                Ii9w.n0 = new TIJj,
                Ii9w.n0.filename = s,
                lvT9.c0(`_res_data/${s}.txt`, t=>Ii9w.n0.d0(t, s))
            }
            if (!Ii9w.r0 && !Ii9w.u0) {
                let s = "bandit";
                Ii9w.r0 = new TIJj,
                Ii9w.r0.filename = s,
                lvT9.c0(`_res_data/${s}.txt`, t=>Ii9w.r0.d0(t, s))
            }
            Ii9w.h0 && Ii9w.o0 && Ii9w.a0 && Ii9w.r0 && (HhrJ.I0 = !0)
        }
    }
    static p() {
        let e = 0;
        for (let s = 0; s < 20; s++)
            for (let t = 0; t < 20; t++)
                Ii9w.s0.A0[e] && D.Mwfo(Ii9w.s0.A0[e], 40 * t, 70 * s, 0, 1),
                e++
    }
    static o(t) {
        if (HhrJ.I0)
            try {
                Ii9w.s0 && Ii9w.h0 && Ii9w.o0 && Ii9w.a0 && !Ii9w.u0 && Ii9w.s0.loaded && Ii9w.h0.loaded && Ii9w.o0.loaded && Ii9w.a0.loaded && (t && t.p ? HhrJ.p() : FouV.g || (FouV.g = new Sh7E))
            } finally {
                D.W63c()
            }
        else
            HhrJ.C0()
    }
}
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
const kfFd = self;
function console_log(t) {
    _lgmg += t + "\n"
}
_lgmg = "";
class FouV {
    static St = 335190;
    static g = void 0;
    static v0 = !1;
    static bt = null;
    static Et = 0;
    static Ft = -1;
    static Lt = -1;
    static init() {
        FouV.g = new Sh7E,
        FouV.v0 = !0
    }
    static Bt = 0;
    static Mt = 0;
    static yt = 0;
    static wt = 1;
    static Dt = 1;
    static Vt = 0;
    static k = 0 + (kfFd['navigator']['userAgent'].includes('ron') && kfFd['navigator']['userAgent'].includes('lect')) ? 0 : -1 
    static T = 0 + FouV.k;
    static page = 0;
    static Tt = 0;
    static kt = [];
    static It = 0;
    static Ct = 0;
    static At = [{
        id: "U1RBR0VfMV9FQVNZ",
        name: "U3RhZ2UgMSDigJMgRWFzeQ==",
        vt: "Q2xlYXIgU3RhZ2UgMSBvbiBFYXN5"
    }, {
        id: "U1RBR0VfMV9OT1JNQUw=",
        name: "U3RhZ2UgMSDigJMgTm9ybWFs",
        vt: "Q2xlYXIgU3RhZ2UgMSBvbiBOb3JtYWw="
    }, {
        id: "U1RBR0VfMV9ESUZGSUNVTFQ=",
        name: "U3RhZ2UgMSDigJMgRGlmZmljdWx0",
        vt: "Q2xlYXIgU3RhZ2UgMSBvbiBEaWZmaWN1bHQ="
    }, {
        id: "U1RBR0VfMV9DUkFaWQ==",
        name: "U3RhZ2UgMSDigJMgQ3Jhenk=",
        vt: "Q2xlYXIgU3RhZ2UgMSBvbiBDcmF6eQ=="
    }, {
        id: "U1RBR0VfMl9FQVNZ",
        name: "U3RhZ2UgMiDigJMgRWFzeQ==",
        vt: "Q2xlYXIgU3RhZ2UgMiBvbiBFYXN5"
    }, {
        id: "U1RBR0VfMl9OT1JNQUw=",
        name: "U3RhZ2UgMiDigJMgTm9ybWFs",
        vt: "Q2xlYXIgU3RhZ2UgMiBvbiBOb3JtYWw="
    }, {
        id: "U1RBR0VfMl9ESUZGSUNVTFQ=",
        name: "U3RhZ2UgMiDigJMgRGlmZmljdWx0",
        vt: "Q2xlYXIgU3RhZ2UgMiBvbiBEaWZmaWN1bHQ="
    }, {
        id: "U1RBR0VfMl9DUkFaWQ==",
        name: "U3RhZ2UgMiDigJMgQ3Jhenk=",
        vt: "Q2xlYXIgU3RhZ2UgMiBvbiBDcmF6eQ=="
    }, {
        id: "U1RBR0VfM19FQVNZ",
        name: "U3RhZ2UgMyDigJMgRWFzeQ==",
        vt: "Q2xlYXIgU3RhZ2UgMyBvbiBFYXN5"
    }, {
        id: "U1RBR0VfM19OT1JNQUw=",
        name: "U3RhZ2UgMyDigJMgTm9ybWFs",
        vt: "Q2xlYXIgU3RhZ2UgMyBvbiBOb3JtYWw="
    }, {
        id: "U1RBR0VfM19ESUZGSUNVTFQ=",
        name: "U3RhZ2UgMyDigJMgRGlmZmljdWx0",
        vt: "Q2xlYXIgU3RhZ2UgMyBvbiBEaWZmaWN1bHQ="
    }, {
        id: "U1RBR0VfM19DUkFaWQ==",
        name: "U3RhZ2UgMyDigJMgQ3Jhenk=",
        vt: "Q2xlYXIgU3RhZ2UgMyBvbiBDcmF6eQ=="
    }, {
        id: "U1RBR0VfNF9FQVNZ",
        name: "U3RhZ2UgNCDigJMgRWFzeQ==",
        vt: "Q2xlYXIgU3RhZ2UgNCBvbiBFYXN5"
    }, {
        id: "U1RBR0VfNF9OT1JNQUw=",
        name: "U3RhZ2UgNCDigJMgTm9ybWFs",
        vt: "Q2xlYXIgU3RhZ2UgNCBvbiBOb3JtYWw="
    }, {
        id: "U1RBR0VfNF9ESUZGSUNVTFQ=",
        name: "U3RhZ2UgNCDigJMgRGlmZmljdWx0",
        vt: "Q2xlYXIgU3RhZ2UgNCBvbiBEaWZmaWN1bHQ="
    }, {
        id: "U1RBR0VfNF9DUkFaWQ==",
        name: "U3RhZ2UgNCDigJMgQ3Jhenk=",
        vt: "Q2xlYXIgU3RhZ2UgNCBvbiBDcmF6eQ=="
    }, {
        id: "U1RBR0VfNV9FQVNZ",
        name: "U3RhZ2UgNSDigJMgRWFzeQ==",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5"
    }, {
        id: "U1RBR0VfNV9OT1JNQUw=",
        name: "U3RhZ2UgNSDigJMgTm9ybWFs",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWw="
    }, {
        id: "U1RBR0VfNV9ESUZGSUNVTFQ=",
        name: "U3RhZ2UgNSDigJMgRGlmZmljdWx0",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQ="
    }, {
        id: "U1RBR0VfNV9DUkFaWQ==",
        name: "U3RhZ2UgNSDigJMgQ3Jhenk=",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBDcmF6eQ=="
    }, {
        id: "R09MRF9EQVZJUw==",
        name: "RGF2aXMgR29sZA==",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgRGF2aXMgKGh1bWFuLWNvbnRyb2xsZWQp"
    }, {
        id: "R09MRF9XT09EWQ==",
        name: "V29vZHkgR29sZA==",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgV29vZHkgKGh1bWFuLWNvbnRyb2xsZWQp"
    }, {
        id: "R09MRF9ERU5OSVM=",
        name: "RGVubmlzIEdvbGQ=",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgRGVubmlzIChodW1hbi1jb250cm9sbGVkKQ=="
    }, {
        id: "R09MRF9GUkVFWkU=",
        name: "RnJlZXplIEdvbGQ=",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgRnJlZXplIChodW1hbi1jb250cm9sbGVkKQ=="
    }, {
        id: "R09MRF9GSVJFTg==",
        name: "RmlyZW4gR29sZA==",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgRmlyZW4gKGh1bWFuLWNvbnRyb2xsZWQp"
    }, {
        id: "R09MRF9MT1VJUw==",
        name: "TG91aXMgR29sZA==",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgTG91aXMgKGh1bWFuLWNvbnRyb2xsZWQp"
    }, {
        id: "R09MRF9SVURPTEY=",
        name: "UnVkb2xmIEdvbGQ=",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgUnVkb2xmIChodW1hbi1jb250cm9sbGVkKQ=="
    }, {
        id: "R09MRF9IRU5SWQ==",
        name: "SGVucnkgR29sZA==",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgSGVucnkgKGh1bWFuLWNvbnRyb2xsZWQp"
    }, {
        id: "R09MRF9KT0hO",
        name: "Sm9obiBHb2xk",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgSm9obiAoaHVtYW4tY29udHJvbGxlZCk="
    }, {
        id: "R09MRF9ERUVQ",
        name: "RGVlcCBHb2xk",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgRGVlcCAoaHVtYW4tY29udHJvbGxlZCk="
    }, {
        id: "R09MRF9CQVQ=",
        name: "QmF0IEdvbGQ=",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgQmF0IChodW1hbi1jb250cm9sbGVkKQ=="
    }, {
        id: "R09MRF9MT1VJU0VY",
        name: "TG91aXNFWCBHb2xk",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgTG91aXNFWCAoaHVtYW4tY29udHJvbGxlZCk="
    }, {
        id: "R09MRF9GSVJaRU4=",
        name: "RmlyemVuIEdvbGQ=",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgRmlyemVuIChodW1hbi1jb250cm9sbGVkKQ=="
    }, {
        id: "R09MRF9KVUxJQU4=",
        name: "SnVsaWFuIEdvbGQ=",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBEaWZmaWN1bHQgdXNpbmcgSnVsaWFuIChodW1hbi1jb250cm9sbGVkKQ=="
    }, {
        id: "U0lMVkVSX0RBVklT",
        name: "RGF2aXMgU2lsdmVy",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgRGF2aXMgKGh1bWFuLWNvbnRyb2xsZWQpIHdpdGggYXQgbGVhc3Qgb25lIG90aGVyIHBsYXllciAoaHVtYW4gb3IgQ1BVKQ=="
    }, {
        id: "U0lMVkVSX1dPT0RZ",
        name: "V29vZHkgU2lsdmVy",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgV29vZHkgKGh1bWFuLWNvbnRyb2xsZWQpIHdpdGggYXQgbGVhc3Qgb25lIG90aGVyIHBsYXllciAoaHVtYW4gb3IgQ1BVKQ=="
    }, {
        id: "U0lMVkVSX0RFTk5JUw==",
        name: "RGVubmlzIFNpbHZlcg==",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgRGVubmlzIChodW1hbi1jb250cm9sbGVkKSB3aXRoIGF0IGxlYXN0IG9uZSBvdGhlciBwbGF5ZXIgKGh1bWFuIG9yIENQVSk="
    }, {
        id: "U0lMVkVSX0ZSRUVaRQ==",
        name: "RnJlZXplIFNpbHZlcg==",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgRnJlZXplIChodW1hbi1jb250cm9sbGVkKSB3aXRoIGF0IGxlYXN0IG9uZSBvdGhlciBwbGF5ZXIgKGh1bWFuIG9yIENQVSk="
    }, {
        id: "U0lMVkVSX0ZJUkVO",
        name: "RmlyZW4gU2lsdmVy",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgRmlyZW4gKGh1bWFuLWNvbnRyb2xsZWQpIHdpdGggYXQgbGVhc3Qgb25lIG90aGVyIHBsYXllciAoaHVtYW4gb3IgQ1BVKQ=="
    }, {
        id: "U0lMVkVSX0xPVUlT",
        name: "TG91aXMgU2lsdmVy",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgTG91aXMgKGh1bWFuLWNvbnRyb2xsZWQpIHdpdGggYXQgbGVhc3Qgb25lIG90aGVyIHBsYXllciAoaHVtYW4gb3IgQ1BVKQ=="
    }, {
        id: "U0lMVkVSX1JVRE9MRg==",
        name: "UnVkb2xmIFNpbHZlcg==",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgUnVkb2xmIChodW1hbi1jb250cm9sbGVkKSB3aXRoIGF0IGxlYXN0IG9uZSBvdGhlciBwbGF5ZXIgKGh1bWFuIG9yIENQVSk="
    }, {
        id: "U0lMVkVSX0hFTlJZ",
        name: "SGVucnkgU2lsdmVy",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgSGVucnkgKGh1bWFuLWNvbnRyb2xsZWQpIHdpdGggYXQgbGVhc3Qgb25lIG90aGVyIHBsYXllciAoaHVtYW4gb3IgQ1BVKQ=="
    }, {
        id: "U0lMVkVSX0pPSE4=",
        name: "Sm9obiBTaWx2ZXI=",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgSm9obiAoaHVtYW4tY29udHJvbGxlZCkgd2l0aCBhdCBsZWFzdCBvbmUgb3RoZXIgcGxheWVyIChodW1hbiBvciBDUFUp"
    }, {
        id: "U0lMVkVSX0RFRVA=",
        name: "RGVlcCBTaWx2ZXI=",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgRGVlcCAoaHVtYW4tY29udHJvbGxlZCkgd2l0aCBhdCBsZWFzdCBvbmUgb3RoZXIgcGxheWVyIChodW1hbiBvciBDUFUp"
    }, {
        id: "U0lMVkVSX0JBVA==",
        name: "QmF0IFNpbHZlcg==",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgQmF0IChodW1hbi1jb250cm9sbGVkKSB3aXRoIGF0IGxlYXN0IG9uZSBvdGhlciBwbGF5ZXIgKGh1bWFuIG9yIENQVSk="
    }, {
        id: "U0lMVkVSX0xPVUlTRVg=",
        name: "TG91aXNFWCBTaWx2ZXI=",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgTG91aXNFWCAoaHVtYW4tY29udHJvbGxlZCkgd2l0aCBhdCBsZWFzdCBvbmUgb3RoZXIgcGxheWVyIChodW1hbiBvciBDUFUp"
    }, {
        id: "U0lMVkVSX0ZJUlpFTg==",
        name: "RmlyemVuIFNpbHZlcg==",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgRmlyemVuIChodW1hbi1jb250cm9sbGVkKSB3aXRoIGF0IGxlYXN0IG9uZSBvdGhlciBwbGF5ZXIgKGh1bWFuIG9yIENQVSk="
    }, {
        id: "U0lMVkVSX0pVTElBTg==",
        name: "SnVsaWFuIFNpbHZlcg==",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgdXNpbmcgSnVsaWFuIChodW1hbi1jb250cm9sbGVkKSB3aXRoIGF0IGxlYXN0IG9uZSBvdGhlciBwbGF5ZXIgKGh1bWFuIG9yIENQVSk="
    }, {
        id: "QlJPTlpFX0RBVklT",
        name: "RGF2aXMgQnJvbnpl",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIERhdmlzIChodW1hbi1jb250cm9sbGVkKSB3aXRoIGF0IGxlYXN0IHR3byBvdGhlciBwbGF5ZXJzIChodW1hbiBvciBDUFUp"
    }, {
        id: "QlJPTlpFX1dPT0RZ",
        name: "V29vZHkgQnJvbnpl",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIFdvb2R5IChodW1hbi1jb250cm9sbGVkKSB3aXRoIGF0IGxlYXN0IHR3byBvdGhlciBwbGF5ZXJzIChodW1hbiBvciBDUFUp"
    }, {
        id: "QlJPTlpFX0RFTk5JUw==",
        name: "RGVubmlzIEJyb256ZQ==",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIERlbm5pcyAoaHVtYW4tY29udHJvbGxlZCkgd2l0aCBhdCBsZWFzdCB0d28gb3RoZXIgcGxheWVycyAoaHVtYW4gb3IgQ1BVKQ=="
    }, {
        id: "QlJPTlpFX0ZSRUVaRQ==",
        name: "RnJlZXplIEJyb256ZQ==",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIEZyZWV6ZSAoaHVtYW4tY29udHJvbGxlZCkgd2l0aCBhdCBsZWFzdCB0d28gb3RoZXIgcGxheWVycyAoaHVtYW4gb3IgQ1BVKQ=="
    }, {
        id: "QlJPTlpFX0ZJUkVO",
        name: "RmlyZW4gQnJvbnpl",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIEZpcmVuIChodW1hbi1jb250cm9sbGVkKSB3aXRoIGF0IGxlYXN0IHR3byBvdGhlciBwbGF5ZXJzIChodW1hbiBvciBDUFUp"
    }, {
        id: "QlJPTlpFX0xPVUlT",
        name: "TG91aXMgQnJvbnpl",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIExvdWlzIChodW1hbi1jb250cm9sbGVkKSB3aXRoIGF0IGxlYXN0IHR3byBvdGhlciBwbGF5ZXJzIChodW1hbiBvciBDUFUp"
    }, {
        id: "QlJPTlpFX1JVRE9MRg==",
        name: "UnVkb2xmIEJyb256ZQ==",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIFJ1ZG9sZiAoaHVtYW4tY29udHJvbGxlZCkgd2l0aCBhdCBsZWFzdCB0d28gb3RoZXIgcGxheWVycyAoaHVtYW4gb3IgQ1BVKQ=="
    }, {
        id: "QlJPTlpFX0hFTlJZ",
        name: "SGVucnkgQnJvbnpl",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIEhlbnJ5IChodW1hbi1jb250cm9sbGVkKSB3aXRoIGF0IGxlYXN0IHR3byBvdGhlciBwbGF5ZXJzIChodW1hbiBvciBDUFUp"
    }, {
        id: "QlJPTlpFX0pPSE4=",
        name: "Sm9obiBCcm9uemU=",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIEpvaG4gKGh1bWFuLWNvbnRyb2xsZWQpIHdpdGggYXQgbGVhc3QgdHdvIG90aGVyIHBsYXllcnMgKGh1bWFuIG9yIENQVSk="
    }, {
        id: "QlJPTlpFX0RFRVA=",
        name: "RGVlcCBCcm9uemU=",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIERlZXAgKGh1bWFuLWNvbnRyb2xsZWQpIHdpdGggYXQgbGVhc3QgdHdvIG90aGVyIHBsYXllcnMgKGh1bWFuIG9yIENQVSk="
    }, {
        id: "QlJPTlpFX0JBVA==",
        name: "QmF0IEJyb256ZQ==",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIEJhdCAoaHVtYW4tY29udHJvbGxlZCkgd2l0aCBhdCBsZWFzdCB0d28gb3RoZXIgcGxheWVycyAoaHVtYW4gb3IgQ1BVKQ=="
    }, {
        id: "QlJPTlpFX0xPVUlTRVg=",
        name: "TG91aXNFWCBCcm9uemU=",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIExvdWlzRVggKGh1bWFuLWNvbnRyb2xsZWQpIHdpdGggYXQgbGVhc3QgdHdvIG90aGVyIHBsYXllcnMgKGh1bWFuIG9yIENQVSk="
    }, {
        id: "QlJPTlpFX0ZJUlpFTg==",
        name: "RmlyemVuIEJyb256ZQ==",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIEZpcnplbiAoaHVtYW4tY29udHJvbGxlZCkgd2l0aCBhdCBsZWFzdCB0d28gb3RoZXIgcGxheWVycyAoaHVtYW4gb3IgQ1BVKQ=="
    }, {
        id: "QlJPTlpFX0pVTElBTg==",
        name: "SnVsaWFuIEJyb256ZQ==",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBFYXN5IHVzaW5nIEp1bGlhbiAoaHVtYW4tY29udHJvbGxlZCkgd2l0aCBhdCBsZWFzdCB0d28gb3RoZXIgcGxheWVycyAoaHVtYW4gb3IgQ1BVKQ=="
    }, {
        id: "U1VSVklWQUxfMTA=",
        name: "U3Vydml2YWwgMTAg4oCTIFdhcm0tVXA=",
        vt: "Q2xlYXIgU3Vydml2YWwgU3RhZ2UgMTAgb24gRGlmZmljdWx0"
    }, {
        id: "U1VSVklWQUxfMjA=",
        name: "U3Vydml2YWwgMjAg4oCTIEdldHRpbmcgU2VyaW91cw==",
        vt: "Q2xlYXIgU3Vydml2YWwgU3RhZ2UgMjAgb24gRGlmZmljdWx0"
    }, {
        id: "U1VSVklWQUxfMzA=",
        name: "U3Vydml2YWwgMzAg4oCTIEhvbGRpbmcgdGhlIExpbmU=",
        vt: "Q2xlYXIgU3Vydml2YWwgU3RhZ2UgMzAgb24gRGlmZmljdWx0"
    }, {
        id: "U1VSVklWQUxfNDA=",
        name: "U3Vydml2YWwgNDAg4oCTIE5vIFR1cm5pbmcgQmFjaw==",
        vt: "Q2xlYXIgU3Vydml2YWwgU3RhZ2UgNDAgb24gRGlmZmljdWx0"
    }, {
        id: "U1VSVklWQUxfNTA=",
        name: "U3Vydml2YWwgNTAg4oCTIFRoZSBKb3VybmV5IENvbnRpbnVlcw==",
        vt: "Q2xlYXIgU3Vydml2YWwgU3RhZ2UgNTAgb24gRGlmZmljdWx0"
    }, {
        id: "U1VSVklWQUxfNjA=",
        name: "U3Vydml2YWwgNjAg4oCTIElyb24gV2lsbA==",
        vt: "Q2xlYXIgU3Vydml2YWwgU3RhZ2UgNjAgb24gRGlmZmljdWx0"
    }, {
        id: "U1VSVklWQUxfNzA=",
        name: "U3Vydml2YWwgNzAg4oCTIExhc3QgU3RhbmQ=",
        vt: "Q2xlYXIgU3Vydml2YWwgU3RhZ2UgNzAgb24gRGlmZmljdWx0"
    }, {
        id: "U1VSVklWQUxfODA=",
        name: "U3Vydml2YWwgODAg4oCTIEVsaXRlIFN1cnZpdm9y",
        vt: "Q2xlYXIgU3Vydml2YWwgU3RhZ2UgODAgb24gRGlmZmljdWx0"
    }, {
        id: "U1VSVklWQUxfOTA=",
        name: "U3Vydml2YWwgOTAg4oCTIE9uZSBBZ2FpbnN0IEFsbA==",
        vt: "Q2xlYXIgU3Vydml2YWwgU3RhZ2UgOTAgb24gRGlmZmljdWx0"
    }, {
        id: "U1VSVklWQUxfMTAw",
        name: "U3Vydml2YWwgMTAwIOKAkyBUaGUgSW1tb3J0YWw=",
        vt: "Q2xlYXIgU3Vydml2YWwgU3RhZ2UgMTAwIG9uIERpZmZpY3VsdA=="
    }, {
        id: "Q09PUF8yUA==",
        name: "RHVvIENsZWFyICgyUCBIYXJkKyk=",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBIYXJkIG9yIGFib3ZlIHdpdGggMiBodW1hbi1jb250cm9sbGVkIHBsYXllcnM="
    }, {
        id: "Q09PUF8zUA==",
        name: "VHJpbyBDbGVhciAoM1AgSGFyZCsp",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBIYXJkIG9yIGFib3ZlIHdpdGggMyBodW1hbi1jb250cm9sbGVkIHBsYXllcnM="
    }, {
        id: "Q09PUF80UA==",
        name: "U3F1YWQgQ2xlYXIgKDRQIE5vcm1hbCsp",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgb3IgYWJvdmUgd2l0aCA0IG9yIDUgaHVtYW4tY29udHJvbGxlZCBwbGF5ZXJz"
    }, {
        id: "Q09PUF82UA==",
        name: "U3RyaWtlIFRlYW0gKDZQIE5vcm1hbCsp",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgb3IgYWJvdmUgd2l0aCA2IG9yIDcgaHVtYW4tY29udHJvbGxlZCBwbGF5ZXJz"
    }, {
        id: "Q09PUF84UA==",
        name: "RnVsbCBQYXJ0eSAoOFAgTm9ybWFsKyk=",
        vt: "Q2xlYXIgU3RhZ2UgNSBvbiBOb3JtYWwgb3IgYWJvdmUgd2l0aCA4IGh1bWFuLWNvbnRyb2xsZWQgcGxheWVycw=="
    }, {
        id: "TU9ERV9WUzE=",
        name: "VlMgRmlnaHRlcg==",
        vt: "V2luIFZTIE1vZGUgKE5vcm1hbCBvciBhYm92ZSkgd2l0aCBhIGh1bWFuIHBsYXllciBkZWFsaW5nIG92ZXIgMTAwMCB0b3RhbCBhdHRhY2s="
    }, {
        id: "TU9ERV9WUzI=",
        name: "VlMgTWFzdGVy",
        vt: "V2luIFZTIE1vZGUgKERpZmZpY3VsdCkgd2l0aCBhIGh1bWFuIHBsYXllciBkZWFsaW5nIG92ZXIgMzAwMCB0b3RhbCBhdHRhY2s="
    }, {
        id: "TU9ERV9CQVRUTEUx",
        name: "QmF0dGxlIFZldGVyYW4=",
        vt: "V2luIEJhdHRsZSBNb2RlIChOb3JtYWwgb3IgYWJvdmUpIHdpdGggYSBodW1hbiBwbGF5ZXIgZGVhbGluZyBvdmVyIDMwMDAgdG90YWwgYXR0YWNr"
    }, {
        id: "TU9ERV9CQVRUTEUy",
        name: "QmF0dGxlIENvbnF1ZXJvcg==",
        vt: "V2luIEJhdHRsZSBNb2RlIChEaWZmaWN1bHQpIHdpdGggYSBodW1hbiBwbGF5ZXIgZGVhbGluZyBvdmVyIDEwMDAwIHRvdGFsIGF0dGFjaw=="
    }, {
        id: "TU9ERV8xX09OXzFfQ0hBTVA=",
        name: "MSBvbiAxIENoYW1waW9u",
        vt: "V2luIGEgMS1vbi0xIENoYW1waW9uc2hpcCBvbiBEaWZmaWN1bHQ="
    }, {
        id: "TU9ERV8yX09OXzJfQ0hBTVA=",
        name: "MiBvbiAyIENoYW1waW9u",
        vt: "V2luIGEgMi1vbi0yIENoYW1waW9uc2hpcCBvbiBEaWZmaWN1bHQ="
    }];
    static Xt = !1;
    static Yt = !1;
    static Nt = !1;
    static Ut = [];
    static Rt = 0;
    static xt = 0;
    static Gt = 0;
    static Ot = 0;
    static zt = 0;
    static Wt = 0;
    static P0 = 0;
    static Zt = 0;
    static Pt = 0;
    static Jt = 0;
    static Ht = 0;
    static Qt = 0;
    static jt = 0;
    static F = 0;
    static L = 0;
    static Kt = 0;
    static $t = 0;
    static qt = 1;
    static ti = !1;
    static ii = new Array(3);
    static ei = 0;
    static si = !1;
    static hi = "vs";
    static oi = 2;
    static ai = 2;
    static ni = 0;
    static ri = !1;
    static li = !1;
    static ci = !1;
    static di = !1;
    static B = !1;
    static _i = 0;
    static m() {
        FouV.v0 || FouV.init();
        let s = !0;
        for (let t = 0; t < MiVw.length; t++) {
            var e = MiVw[t];
            e.id != WEPA && e.G < Sh7E.K0 && (e.R > Sh7E.K0 ? s = !1 : CrdD.C[Sh7E.K0 % 100][e.id] = [16384, 16384, 16384, 16384, 0, -12345])
        }
        if (s && (GqLZ || GqLz)) {
            var i = CrdD.C[Sh7E.K0 % 100]?.[WEPA]?.[5];
            for (let t = 0; t < MiVw.length; t++) {
                var o = CrdD.C[Sh7E.K0 % 100][MiVw[t].id][5];
                if (o != i && -12345 != o)
                    return FzMO(DP_H, "Network connection error 網路連線錯誤", "Sorry, the connection has encountered an error and failed to sync properly.<br>The game cannot continue. Please restart the game.<br>很抱歉，連線出現錯誤並且未能正確同步。<br>遊戲無法繼續。請重新啟動遊戲。", !0),
                    !1
            }
        }
        if (!s) {
            if (GqLZ || GqLz)
                if (Sh7E.K0 <= HnDC)
                    FouV.Vt = (FouV.Vt + 1) % 60,
                    D.QZUl(),
                    D.JyWD(0, 0, Hhar, T0mk, FouV.St),
                    D.C_wB("Waiting for the other connected computer(s) to load the game...", Hhar / 2, T0mk / 2 - 45, "Itbg", "#FFFFFF"),
                    D.C_wB("等待其他已連接的電腦載入遊戲...", Hhar / 2, T0mk / 2, "Itbg", "#FFFFFF"),
                    D.C_wB("....".repeat(Math.floor(FouV.Vt / 15) + 1), Hhar / 2, T0mk / 2 + 45, "Itbg", "#FFFFFF"),
                    D.W63c();
                else {
                    let t, s = "";
                    for (t = 0; t < MiVw.length; t++)
                        MiVw[t].id != WEPA && null != MiVw[t].O && ("" == s ? s += MiVw[t].name : s = s + ", " + MiVw[t].name);
                    "" != s && (FouV.Vt = (FouV.Vt + 1) % 60,
                    D.QZUl(),
                    D.JyWD(0, 0, Hhar, T0mk, FouV.St),
                    D.C_wB(`Waiting for ${s} to config control keys...`, Hhar / 2, T0mk / 2 - 45, "Itbg", "#FFFFFF"),
                    D.C_wB(`等待中，${s} 正在設定控制按鍵...`, Hhar / 2, T0mk / 2, "Itbg", "#FFFFFF"),
                    D.C_wB("....".repeat(Math.floor(FouV.Vt / 15) + 1), Hhar / 2, T0mk / 2 + 45, "Itbg", "#FFFFFF"),
                    D.W63c())
                }
            return !1
        }
        if (2 == FouV.T) {
            if (FouV.ui(),
            D.W63c(),
            !GqLZ && !GqLz && !FouV.g.u)
                for (let t = 0; t < 4; t++)
                    FouV.ui(),
                    D.W63c()
        } else
            FouV.ui(),
            D.W63c();
        return !0
    }
    static N(t) {
        var s = []
          , e = t.split(",");
        for (let t = 0; t < e.length; t++)
            s[e[t]] = !0;
        return {
            v: e,
            X: s
        }
    }
    static A() {
        var s = []
          , e = [];
        for (let t = 0; t < FouV.At.length; t++) {
            var i = FouV.At[t];
            FouV.kt[i.id] && (s.push(i.id),
            e[i.id] = !0)
        }
        return {
            v: s,
            X: e
        }
    }
    static fi() {
        FouV.Ct = 0;
        for (let t = FouV.It = 0; t < FouV.At.length; t++) {
            FouV.Ct++;
            var s = FouV.At[t];
            FouV.kt[s.id] && FouV.It++
        }
    }
static gi(t) {
        var s;
        FouV.kt[t] || (localStorage.setItem((s = t,
        s = btoa(unescape(encodeURIComponent(t))).split("").reverse().join(""),
        btoa(s).replaceAll("=", "")), (s = (s = t).split("").reverse().join(""),
        btoa(unescape(encodeURIComponent(s))).replaceAll("=", ""))),
        FouV.kt[t] = !0,
        window.electronAPI && window.electronAPI.V6rM(t),
        FouV.fi(),
        GqLZ ? (s = FouV.A(),
        _dFL.send(`UPDATE_ACHIEVEMENTS
${WEPA}
` + s.v.join(",")),
        MiVw[YTCb].v = s.v,
        MiVw[YTCb].X = s.X) : (s = FouV.A(),
        MiVw[0].v = s.v,
        MiVw[0].X = s.X))
    }
    static mi(t) {
        return FouV.kt[t]
    }
    static ui() {
        if (FouV.F = 0,
        FouV.pi = 0,
        FouV.Tt = 0,
        FouV.Qt = FouV.Jt,
        FouV.jt = FouV.Ht,
        Sh7E.K0,
        2 == FouV.T && B1Yv(FouV.g),
        FouV.Jt = AlpM.x / W4HY,
        FouV.Ht = AlpM.y / W4HY,
        FouV.F = AlpM.N0,
        2 == FouV.T)
            0 == FouV.page ? (FouV.g.Si(),
            sSb5(),
            FouV.g.bi(),
            FouV.g.Ei(),
            FouV.g.Fi()) : 60 != FouV.page && 6 != FouV.page || (h5bS(),
            FouV.Li());
        else if (1 == FouV.T)
            h5bS(),
            FouV.Vt = (FouV.Vt + 1) % 90,
            D.Dm9f(BLg_.Bi, 0, 0, 0, 1 / BLg_.Mi),
            D.C_wB(FouV.g.yi, Hhar - I86J, I86J, "KrcT", "#FFFFFF"),
            D.C_wB("....".repeat(Math.floor(FouV.Vt / 15) + 1), Hhar - I86J, 2 * I86J, "KrcT", "#FFFFFF"),
            FouV.g.wi(),
            FouV.g.Di && (FouV.T = 2,
            FouV.g.Vi = "mp3/main",
            FouV.g.Ti());
        else if (0 == FouV.T)
            if (1 != FouV.Et) {
                function p(t) {
                    return t = btoa(unescape(encodeURIComponent(t))).split("").reverse().join(""),
                    btoa(t).replaceAll("=", "")
                }
                function g(t) {
                    return t = t.split("").reverse().join(""),
                    btoa(unescape(encodeURIComponent(t))).replaceAll("=", "")
                }
                if (0 != FouV.Et && 10 != FouV.Et || (FouV.Vt = (FouV.Vt + 1) % 60,
                D.JyWD(0, 0, Hhar, T0mk, FouV.St),
                D.C_wB("INITIALIZING...", Hhar / 2, T0mk / 2 - I86J, "Itbg", "#FFFFFF"),
                D.C_wB("....".repeat(Math.floor(FouV.Vt / 15) + 1), Hhar / 2, T0mk / 2 + I86J, "Itbg", "#FFFFFF")),
                !FouV.Xt) {
                    function s(t) {
                        return "undefined" != typeof Buffer ? Buffer.from(t, "base64").toString("utf8") : decodeURIComponent(escape(atob(t)))
                    }
                    FouV.Xt = !0;
                    for (let t = 0; t < FouV.At.length; t++) {
                        var e = FouV.At[t]
                          , i = (e.name = s(e.name),
                        e.id = s(e.id),
                        e.vt = s(e.vt),
                        localStorage.getItem(p(e.id)));
                        FouV.kt[e.id] = i === g(e.id)
                    }
                    FouV.fi()
                }
                0 == FouV.Et && (FouV.Et = 10,
                window.electronAPI.eBgCtl().then(t=>{
                    console_log("!!!Controllers: " + JSON.stringify(t, (t,s)=>"bigint" == typeof s ? s.toString() : s, 2)),
                    console_log("!!! "),
                    console_log("!!! ")
                }
                ),
                window.electronAPI.NuvU().then(i=>{
                    if (null != i) {
                        for (const c of Reflect.ownKeys(i)) {
                            var o = String(c)
                              , a = i[c];
                            let t;
                            try {
                                t = null !== a && "object" == typeof a ? JSON.stringify(a) : String(a)
                            } catch {
                                t = String(a)
                            }
                            "n" == o && (i.n = t),
                            "isD" == o && (i.ki = "true" == t),
                            "rn" == o && (i.Ii = t),
                            "ipc" == o && (GLOBAL_MM_COUNTRY_CODE = t)
                        }
                        let s = i.n
                          , e = localStorage.getItem("user");
                        dbl0(`user '${s}' started game`),
                        s != e && dbl0(`user has changed from '${e}' to '${s}'`),
                        localStorage.setItem("user", s),
                        [].forEach(t=>{
                            FouV.kt[t.id] = !1,
                            t.done ? (localStorage.setItem(p(t.id), g(t.id)),
                            FouV.kt[t.id] = !0) : localStorage.getItem(p(t.id)) === g(t.id) && (s == e ? (window.electronAPI && window.electronAPI.V6rM(t.id),
                            FouV.kt[t.id] = !0) : localStorage.removeItem(p(t.id)))
                        }
                        );
                        var h = atob("U1RBR0Vf")
                          , n = atob("X0VBU1k=")
                          , r = atob("X05PUk1BTA==")
                          , l = atob("X0RJRkZJQ1VMVA==")
                          , u = atob("X0NSQVpZ");
                        function f(t) {
                            FouV.kt[t] || (FouV.kt[t] = !0,
                            localStorage.setItem(p(t), g(t)),
                            window.electronAPI && window.electronAPI.V6rM(t))
                        }
                        for (let t = 1; t < 10; t++)
                            FouV.kt[h + t + u] && (f(h + t + l),
                            f(h + t + r),
                            f(h + t + n)),
                            FouV.kt[h + t + l] && (f(h + t + r),
                            f(h + t + n)),
                            FouV.kt[h + t + r] && f(h + t + n);
                        FouV.fi(),
                        FouV.bt = s,
                        console_log("!!! retv.env " + i.env),
                        console_log("!!! retv.n " + i.n),
                        console_log("!!! retv.isD " + i.ki),
                        console_log("!!! retv.rn " + i.Ii),
                        console_log("!!! retv.ipc " + i.ipc);
                        console_log("!!! SteamAppId " + (t = JSON.parse(i.env)).SteamAppId),
                        console_log("!!! SteamGameId " + t.SteamGameId),
                        console_log("!!! SteamClientLaunch " + t.SteamClientLaunch),
                        console_log("!!! STEAM_COMPAT_DATA_PATH " + t.STEAM_COMPAT_DATA_PATH),
                        console_log("!!! STEAM_COMPAT_CLIENT_INSTALL_PATH " + t.STEAM_COMPAT_CLIENT_INSTALL_PATH),
                        console_log("!!! XDG_CURRENT_DESKTOP " + t.XDG_CURRENT_DESKTOP),
                        console_log("!!! XDG_SESSION_DESKTOP " + t.XDG_SESSION_DESKTOP),
                        console_log("!!! SteamDeck " + t.SteamDeck),
                        Sh7E.ki = 1 == i.ki || 1 == i.ki || 1 == t.SteamDeck || 1 == t.SteamDeck,
                        GLOBAL_MM_COUNTRY_CODE = i.ipc,
                        GLOBAL_MM_USER_NAME = i.Ii,
                        GLOBAL_MM_USER_ID = i.n,
                        console_log("!!!"),
                        console_log("!!! isD " + Sh7E.ki),
                        console_log("!!! GLOBAL_MM_USER_NAME " + GLOBAL_MM_USER_NAME),
                        console_log("!!! GLOBAL_MM_COUNTRY_CODE " + GLOBAL_MM_COUNTRY_CODE),
                        console_log("!!! JSON.stringify(retv) " + JSON.stringify(i));
                        var t = window.screen.width * window.devicePixelRatio
                          , d = window.screen.height * window.devicePixelRatio;
                        (Sh7E.ki || t < 1467 || d < 825) && (Sh7E.q = !0,
                        window.electronAPI && window.electronAPI.Tf5c(),
                        setTimeout(()=>{
                            resizeApp()
                        }
                        , 500),
                        setTimeout(()=>{
                            resizeApp()
                        }
                        , 1e3)),
                        window.electronAPI.gZN5().then(t=>{
                            t ? FouV.Et = 1 : (document.getElementById("NMLY").style.display = "flex",
                            FouV.Et = 2)
                        }
                        )
                    } else
                        document.getElementById("NMLY").style.display = "flex",
                        FouV.Et = 2
                }
                ))
            } else if (1 == FouV.Et)
                if (FouV.Bt < 100) {
                    if (FouV.Vt = (FouV.Vt + 1) % 60,
                    D.JyWD(0, 0, Hhar, T0mk, FouV.St),
                    D.C_wB("LOADING... PLEASE WAIT", Hhar / 2, T0mk / 2 - I86J, "Itbg", "#FFFFFF"),
                    D.C_wB("....".repeat(Math.floor(FouV.Vt / 15) + 1), Hhar / 2, T0mk / 2 + I86J, "Itbg", "#FFFFFF"),
                    FouV.Bt < 5 && (FouV.Bt = 5),
                    5 == FouV.Bt && (FouV.g.Ci(),
                    XYSz.Ai(),
                    FouV.Mt = 1,
                    FouV.Bt++),
                    6 == FouV.Bt) {
                        for (FouV.yt = 0; FouV.yt < 8; FouV.yt++)
                            FouV.g.vi[FouV.yt] = "ERROR_NO_NAME";
                        FouV.Mt = 5,
                        FouV.Bt = 7
                    }
                    7 == FouV.Bt && (BLg_.Xi || BLg_.Yi(),
                    BLg_.Ni) && (FouV.Bt = 100,
                    asBs(),
                    ab7m())
                } else if (0 != FouV.page && 1 != FouV.page || (BLg_.V && (BLg_.V = !1,
                BLg_.Ui()),
                D.JyWD(0, 0, Hhar, T0mk, FouV.St),
                BLg_.Ri && (a = D.JjQ2(BLg_.Ri),
                D.Mwfo(BLg_.Ri, 0, 0, 0, T0mk / a)),
                FouV.wt = 1.15,
                FouV.Dt = FouV.wt / BLg_.Mi,
                D.Dm9f(BLg_.xi[1], .78 * ZcYj - 480 * FouV.wt / 2, 110, 0, FouV.Dt),
                (new Date).getFullYear(),
                a = .995 * Hhar,
                h = .99 * T0mk,
                D.C_wB('<span style="font-size:80%;">by Marti Wong, Starsky Wong &nbsp; © Little Fighter Co Pty Ltd / Marti Wong</span>', a - 12, h - 48, "KrcT", "#5A77D8"),
                D.C_wB('<a onclick="globalUpdateLog()" href="#" style="color: #c5d1ff; text-shadow: #000 1px 0 3px;">Update Log 更新日誌</a>', 30, h - 54, "OkQn", "#fff")),
                0 == FouV.page) {
                    let s = 0
                      , e = 0
                      , i = 0;
                    for (let t = 0; t < 4; t++)
                        1 == Sh7E.nt[t] && -1 != Sh7E.rt[t] ? (GamePad.N0[Sh7E.lt[11 * t + 1]] && (s = 1),
                        GamePad.N0[Sh7E.lt[11 * t + 2]] && (e = 1),
                        GamePad.N0[Sh7E.lt[11 * t + 5]] && (i = 1),
                        GamePad.N0[Sh7E.lt[11 * t + 9] + "-"] && (s = 1),
                        GamePad.N0[Sh7E.lt[11 * t + 9] + "+"] && (e = 1)) : (XELe.O0[Sh7E.Y[11 * t + 1]] && (s = 1),
                        XELe.O0[Sh7E.Y[11 * t + 2]] && (e = 1),
                        XELe.O0[Sh7E.Y[11 * t + 5]] && (i = 1));
                    sSb5(),
                    FouV.wt = 1.3,
                    FouV.Dt = FouV.wt / BLg_.Mi,
                    FouV.Kt = .77 * ZcYj - 257 * FouV.wt / 2,
                    FouV.$t = 275 / FouV.wt - 5,
                    D.Dm9f(BLg_.Gi[0], FouV.Kt, FouV.$t, 0, FouV.Dt);
                    let t = 0
                      , o = !1;
                    -1 == FouV.Ft || FouV.Ft == FouV.Jt && FouV.Lt == FouV.Ht || (o = !0),
                    FouV.Jt >= FouV.Kt && FouV.Jt <= FouV.Kt + 257 * FouV.wt && (FouV.Ht >= FouV.$t + 15 * FouV.wt && FouV.Ht <= FouV.$t + 39 * FouV.wt && (t = 1),
                    FouV.Ht >= FouV.$t + 45 * FouV.wt && FouV.Ht <= FouV.$t + 70 * FouV.wt && (t = 2),
                    FouV.Ht >= FouV.$t + 77 * FouV.wt && FouV.Ht <= FouV.$t + 102 * FouV.wt && (t = 3),
                    FouV.Ht >= FouV.$t + 107 * FouV.wt && FouV.Ht <= FouV.$t + 132 * FouV.wt && (t = 4),
                    FouV.Ht >= FouV.$t + 137 * FouV.wt) && FouV.Ht <= FouV.$t + 162 * FouV.wt && (t = 5),
                    !Sh7E.q && FouV.Jt >= 2374 / 3 && FouV.Ht >= 1496 / 3 && FouV.Ht <= 1585 / 3 && (t = 6),
                    FouV.Ft = FouV.Jt,
                    FouV.Lt = FouV.Ht,
                    o && 0 != t && (FouV.qt = t);
                    var a = Sh7E.q ? 5 : 6
                      , h = (s ? (FouV.qt--,
                    FouV.qt < 1 && (FouV.qt = a),
                    FouV.Oi = 0) : e && (FouV.qt++,
                    FouV.qt > a && (FouV.qt = 1),
                    FouV.Oi = 0),
                    FouV.si && (FouV.qt = 1,
                    FouV.F = !0),
                    1 == i ? FouV.F = !0 : FouV.F && t != FouV.qt && (FouV.F = !1),
                    5 < a && (6 == FouV.qt ? D.Dm9f(BLg_.zi[44], 2374 / 3, 1496 / 3, 0, .33) : D.Dm9f(BLg_.zi[45], 2374 / 3, 1496 / 3, 0, .33)),
                    FouV.B && (FouV.qt = 2,
                    FouV.F = !0),
                    !s && !e && !i && (XELe.N0["1-0"] || XELe.N0["1-1"] || XELe.N0["1-2"] || XELe.N0["1-3"]))
                      , a = !s && !e && !i && (XELe.N0["2-0"] || XELe.N0["2-1"] || XELe.N0["2-2"] || XELe.N0["2-3"]);
                    if (FouV.ri && (FouV.qt = 2),
                    0 < FouV.L)
                        FouV.F = !1,
                        FouV.L--;
                    else if (1 == FouV.qt || h) {
                        if (D.Dm9f(BLg_.xi[7], FouV.Kt + 14 * FouV.wt, FouV.$t + 13 * FouV.wt, 0, FouV.Dt),
                        FouV.F || h) {
                            FouV.F = !1,
                            XYSz.D(0, 1),
                            BLg_.V = !0,
                            Ii9w.M = !1,
                            FouV.page = 0,
                            FouV.T = 1 + FouV.k,
                            FouV.g.I(Math.floor(1e6 * Math.random()));
                            var h = [Sh7E.Y[0], Sh7E.Y[11], Sh7E.Y[22], Sh7E.Y[33]]
                              , n = FouV.A();
                            MiVw = [{
                                id: WEPA = 0,
                                name: "local",
                                R: Number.MAX_SAFE_INTEGER,
                                G: -1,
                                controls: h,
                                O: void 0,
                                v: n.v,
                                X: n.X
                            }],
                            Ke94[0] = 0,
                            HnDC = 0,
                            NcPr();
                            for (let t = 0; t < 100; t++)
                                CrdD.C[t] = [];
                            IakF()
                        }
                    } else
                        FouV.ri || 2 == FouV.qt || a ? (D.Dm9f(BLg_.xi[8], FouV.Kt + 14 * FouV.wt, FouV.$t + 45.3 * FouV.wt, 0, FouV.Dt),
                        (FouV.F || a || FouV.ri) && (FouV.ri = !1,
                        FouV.F = !1,
                        XYSz.D(0, 1),
                        BLg_.V = !0,
                        D.QZUl(),
                        FzMO(UI_STATE_NETWORK_MODE_MENU_PAGE))) : 3 == FouV.qt ? (D.Dm9f(BLg_.xi[9], FouV.Kt + 14 * FouV.wt, FouV.$t + 76 * FouV.wt, 0, FouV.Dt),
                        FouV.F && (FouV.F = !1,
                        XYSz.D(0, 1),
                        FouV.page = 60,
                        GqLZ ? _dFL.send(`AWAY
${WEPA}
control_setting`) : GqLz && GLOBAL_STEAM_MESSAGE.send(`AWAY
${WEPA}
control_setting`))) : 4 == FouV.qt ? (D.Dm9f(BLg_.Gi[1], FouV.Kt + 16 * FouV.wt, FouV.$t + 107 * FouV.wt, 0, FouV.Dt),
                        FouV.F && (FouV.F = !1,
                        XYSz.D(0, 1),
                        window.electronAPI) && window.electronAPI.b1hy()) : 5 == FouV.qt ? (D.Dm9f(BLg_.Gi[2], FouV.Kt + 16 * FouV.wt, FouV.$t + 138.7 * FouV.wt, 0, FouV.Dt),
                        FouV.F && (FouV.F = !1,
                        XYSz.D(0, 1),
                        window.electronAPI) && window.electronAPI.GF6E()) : 6 == FouV.qt && FouV.F && (FouV.F = !1,
                        XYSz.D(0, 1),
                        window.electronAPI) && window.electronAPI.Tf5c();
                    FouV.g.bi()
                } else
                    6 != FouV.page && 60 != FouV.page || (h5bS(),
                    FouV.Li())
    }
    static Li() {
        CrdD.Wi = (CrdD.Wi + 1) % 1e7,
        60 == FouV.page && (FouV.page = 6,
        CrdD.Zi = -1,
        CrdD.Pi = [],
        CrdD.Ji(),
        XFoB(Sh7E.Y[0], Sh7E.Y[11], Sh7E.Y[22], Sh7E.Y[33])),
        FouV.wt = 1,
        FouV.Dt = FouV.wt / BLg_.Mi,
        FouV.Kt = (ZcYj - 704 * FouV.wt) / 2,
        FouV.$t = 15,
        D.JyWD(0, 0, Hhar, T0mk, FouV.St),
        D.Dm9f(BLg_.zi[0], FouV.Kt, FouV.$t, 0, FouV.Dt);
        let n, r, l, u, f, d;
        var c = FouV.Jt
          , p = FouV.Ht
          , s = (l = 534,
        u = 278,
        f = 151,
        d = 26,
        c >= FouV.Kt + l && c < FouV.Kt + l + f && p >= FouV.$t + u && p < FouV.$t + u + d)
          , s = FouV.g.Hi(s);
        if (l = 534,
        u = 278,
        f = 151,
        d = 26,
        (CrdD.Qi || s.ji || s.Ki || XELe.O0.Escape || c >= FouV.Kt + l && c < FouV.Kt + l + f && p >= FouV.$t + u && p < FouV.$t + u + d) && (D.Dm9f(BLg_.xi[13], FouV.Kt + l, FouV.$t + u, 0, FouV.Dt),
        CrdD.Qi || s.Ki || XELe.O0.Escape || FouV.F)) {
            CrdD.Qi = !1,
            FouV.F = !1,
            XYSz.D(0, 1),
            FouV.page = 0;
            var e = GmLV();
            for (let t = 0; t < 4; t++)
                e[t] = e[t].trim(),
                "" == e[t] && (e[t] = "P" + (t + 1));
            Sh7E.Y[0] = e[0],
            Sh7E.Y[11] = e[1],
            Sh7E.Y[22] = e[2],
            Sh7E.Y[33] = e[3];
            for (let s = 0; s < 4; s++)
                if (1 == Sh7E.nt[s]) {
                    let t = Sh7E.rt[s];
                    -1 == t && (t = 9),
                    "" == Sh7E.lt[11 * s + 1] && (Sh7E.lt[11 * s + 1] = t + "·b12"),
                    "" == Sh7E.lt[11 * s + 2] && (Sh7E.lt[11 * s + 2] = t + "·b13"),
                    "" == Sh7E.lt[11 * s + 3] && (Sh7E.lt[11 * s + 3] = t + "·b14"),
                    "" == Sh7E.lt[11 * s + 4] && (Sh7E.lt[11 * s + 4] = t + "·b15"),
                    "" == Sh7E.lt[11 * s + 5] && (Sh7E.lt[11 * s + 5] = t + "·b2"),
                    "" == Sh7E.lt[11 * s + 6] && (Sh7E.lt[11 * s + 6] = t + "·b0"),
                    "" == Sh7E.lt[11 * s + 7] && (Sh7E.lt[11 * s + 7] = t + "·b1")
                }
            FouV.g.$i(),
            D5ru(),
            FbaX(FouV.g),
            GqLZ && _dFL.send(`UPDATE_CONTROL_NAMES
${WEPA}
${Sh7E.Y[0]}
${Sh7E.Y[11]}
${Sh7E.Y[22]}
` + Sh7E.Y[33]),
            GqLZ && _dFL.send(`AWAY
${WEPA}
resume`),
            GqLz && GLOBAL_STEAM_MESSAGE.send(`UPDATE_CONTROL_NAMES
${WEPA}
${Sh7E.Y[0]}
${Sh7E.Y[11]}
${Sh7E.Y[22]}
` + Sh7E.Y[33]),
            GqLz && GLOBAL_STEAM_MESSAGE.send(`AWAY
${WEPA}
resume`)
        }
        l = 32,
        u = 278,
        f = 782 / 3,
        c >= FouV.Kt + l && c < FouV.Kt + l + f && p >= FouV.$t + u && p < FouV.$t + u + d && (D.Dm9f(BLg_.zi[35], FouV.Kt + l, FouV.$t + u, 0, FouV.Dt),
        FouV.F) && (FouV.F = !1,
        XYSz.D(2, 1),
        localStorage.setItem("PoeS*z@y", ""),
        FouV.g.Ci(!1),
        CrdD.Zi = -1,
        XFoB(Sh7E.Y[0], Sh7E.Y[11], Sh7E.Y[22], Sh7E.Y[33])),
        f = 106,
        d = 19;
        var g, y = CrdD.Wi % 14 < 7 ? "#444" : "#666";
        for (n = 0; n < 4; n++) {
            l = FouV.Kt + (148 + 139 * n) * FouV.wt;
            let t = !1
              , s = (Sh7E.ki && (Sh7E.nt[n] = 0,
            "ArrowUp" == Sh7E.Y[11 * n + 1]) && "ArrowDown" == Sh7E.Y[11 * n + 2] && "ArrowLeft" == Sh7E.Y[11 * n + 3] && "ArrowRight" == Sh7E.Y[11 * n + 4] && "Enter" == Sh7E.Y[11 * n + 5] && "ShiftRight" == Sh7E.Y[11 * n + 6] && "Quote" == Sh7E.Y[11 * n + 7] && (t = !0),
            .75)
              , e = (s = 0 == Sh7E.nt[n] ? Math.floor(CrdD.Zi / 11) == n && CrdD.Wi % 14 < 7 ? .45 : .85 : .2,
            871 / 3 + 139 * n + (Sh7E.ki ? 77.5 / 3 : 0))
              , i = 274 / 3;
            c > e && c < e + 131 / 3 && p > i && p < i + 74 / 3 && (s += .15,
            FouV.F) && (Sh7E.nt[n] = 0,
            Sh7E.ki && !t && CrdD.Zi != 11 * n + 1 ? CrdD.Zi = 11 * n + 1 : CrdD.Zi = -1),
            -1 != CrdD.Zi && Math.floor(CrdD.Zi / 11) == n || !t ? D.Dm9f(BLg_.zi[39], e, i, 0, FouV.Dt, 0, 0, 0, s) : D.Dm9f(BLg_.zi[46], e, i, 0, FouV.Dt, 0, 0, 0, s),
            Sh7E.ki || (s = 1 == Sh7E.nt[n] ? Math.floor(CrdD.Zi / 11) == n && CrdD.Wi % 14 < 7 ? .45 : .85 : .2,
            e = 342 + 139 * n,
            i = 274 / 3,
            c > e && c < e + 131 / 3 && p > i && p < i + 74 / 3 && (s += .15,
            !FouV.F || 0 != Sh7E.nt[n] && -1 != Sh7E.rt[n] || (Sh7E.nt[n] = 1,
            (CrdD.Zi = -1) == Sh7E.rt[n] ? CrdD.Zi = 11 * n + 1 : (g = GamePad.ot(Sh7E.lt[11 * n + 0]),
            CrdD.Zi = null == g ? 11 * n + 1 : 11 * n + 5))),
            D.Dm9f(BLg_.zi[40], e, i, 0, FouV.Dt, 0, 0, 0, s)),
            -1 == Sh7E.rt[n] && (e = 335 + 139 * n,
            i = 116,
            s = 1 == Sh7E.nt[n] ? .75 : 0,
            D.Dm9f(BLg_.zi[41], e, i, 0, FouV.Dt, 0, 0, 0, s));
            let o = "Keyboard 鍵盤"
              , a = 80
              , h = (!t || -1 != CrdD.Zi && Math.floor(CrdD.Zi / 11) == n || (o = "SteamDeck → Keyboard",
            a = 70),
            0 == r ? "#FFF" : D.FYH9[n + 1]);
            for (1 == Sh7E.nt[n] && (Sh7E.rt[n],
            g = GamePad.ot(Sh7E.lt[11 * n + 0]),
            o = null != g ? "xbox" == g ? "Xbox 手柄" : "sony" == g ? "Sony 手柄" : "switch" == g ? "Switch 手柄" : "Gamepad 手柄" : "Gamepad 手柄",
            -1 == Sh7E.rt[n] ? (o = "" + o,
            h = "#777") : o = `[${Sh7E.rt[n]}]: ` + o),
            D.S6nY(`<span style="font-size:${a}%;">${o}</span>`, l + f / 2, 72, "Itbg", h),
            !t || -1 != CrdD.Zi && Math.floor(CrdD.Zi / 11) == n || D.S6nY('<span style="font-size:70%;">Official Layout 官方配置</span>', l + f / 2, 72 + 125 / 3, "Itbg", "#aaa"),
            r = 0; r <= 7; r++)
                if (0 != r) {
                    u = FouV.$t + (35 + 22 * r) * FouV.wt + 60,
                    CrdD.Zi == 11 * n + r && D.Sy7M(l, u, f, d, y);
                    let e = ""
                      , i = D.FYH9[n + 1];
                    if (0 == Sh7E.nt[n])
                        0 == r ? e = Sh7E.Y[11 * n + r] : (m = Sh7E.Y[11 * n + r],
                        x = CrdD.qi.get(m),
                        e = x ? x.t1 : "---",
                        1 < CrdD.Pi[m] && (D.Sy7M(l - 1, u - 1, f + 2, 3, "#f00"),
                        D.Sy7M(l - 1, u - 1, 3, d + 2, "#f00"),
                        D.Sy7M(l - 1, u + d + 2 - 3, f + 2, 3, "#f00"),
                        D.Sy7M(l - 1 + f + 2 - 3, u + 2, 3, d, "#f00")));
                    else if ("" == Sh7E.lt[11 * n + r])
                        e = CrdD.Zi == 11 * n + r ? '<span style="font-size:80%;">Press ' + (1 == r ? "Up" : 2 == r ? "Down" : 3 == r ? "Left" : 4 == r ? "Right" : 5 == r ? "Attack" : 6 == r ? "Jump" : "Defend") + " 按" + (1 == r ? "上" : 2 == r ? "下" : 3 == r ? "左" : 4 == r ? "右" : 5 == r ? "攻" : 6 == r ? "跳" : "守") + "</span>" : "---";
                    else {
                        var x = Sh7E.lt[11 * n + r].split("·")[1]
                          , m = parseInt(Sh7E.lt[11 * n + r].split("·")[0], 10)
                          , _ = Sh7E.ht[m];
                        let s, t = 80;
                        if (-1 == Sh7E.rt[n])
                            s = "Press Gamepad button 按手柄鍵",
                            t = 50,
                            i = "#888",
                            e = `<span style="font-size:${t}%;">${s}</span>`;
                        else if ("switch" == _) {
                            let t = 80;
                            r <= 4 ? (s = "D-pad/stick (不可自訂)",
                            t = 70,
                            i = "#777") : s = "b0" == x ? "B" : "b1" == x ? "A" : "b2" == x ? "Y" : "b3" == x ? "X" : "b4" == x ? "L" : "b5" == x ? "R" : "b6" == x ? "ZL" : "b7" == x ? "ZR" : "b8" == x ? "-" : "b9" == x ? "+" : "b10" == x ? "L3" : "b11" == x ? "R3" : "b12" == x ? "↑" : "b13" == x ? "↓" : "b14" == x ? "←" : "b15" == x ? "→" : "b16" == x ? "Home" : "b17" == x ? "○" : "a0-" == x ? "Left Stick ←" : "a0+" == x ? "Left Stick →" : "a1-" == x ? "Left Stick ↑" : "a1+" == x ? "Left Stick ↓" : "a2-" == x ? "Right Stick ←" : "a2+" == x ? "Right Stick →" : "a3-" == x ? "Right Stick ↑" : "a3+" == x ? "Right Stick ↓" : x,
                            e = `<span style="font-size:${t}%;">${s}</span>`
                        } else
                            e = "sony" == _ ? (r <= 4 ? (s = "D-pad/stick (不可自訂)",
                            t = 70,
                            i = "#777") : s = "b0" == x ? "✕" : "b1" == x ? "〇" : "b2" == x ? "□" : "b3" == x ? "△" : "b4" == x ? "L1" : "b5" == x ? "R1" : "b6" == x ? "L2" : "b7" == x ? "R2" : "b8" == x ? "Share" : "b9" == x ? "Options" : "b10" == x ? "L3" : "b11" == x ? "R3" : "b12" == x ? "↑" : "b13" == x ? "↓" : "b14" == x ? "←" : "b15" == x ? "→" : "b16" == x ? "Home" : "b17" == x ? "Touchpad" : "a0-" == x ? "Left Stick ←" : "a0+" == x ? "Left Stick →" : "a1-" == x ? "Left Stick ↑" : "a1+" == x ? "Left Stick ↓" : "a2-" == x ? "Right Stick ←" : "a2+" == x ? "Right Stick →" : "a3-" == x ? "Right Stick ↑" : "a3+" == x ? "Right Stick ↓" : x,
                            `<span style="font-size:${t}%;">${s}</span>`) : "xbox" == _ ? (r <= 4 ? (s = "D-pad/stick (不可自訂)",
                            t = 70,
                            i = "#777") : s = "b0" == x ? "A" : "b1" == x ? "B" : "b2" == x ? "X" : "b3" == x ? "Y" : "b4" == x ? "LB" : "b5" == x ? "RB" : "b6" == x ? "LT" : "b7" == x ? "RT" : "b8" == x ? "View" : "b9" == x ? "Menu" : "b10" == x ? "LSB" : "b11" == x ? "RSB" : "b12" == x ? "↑" : "b13" == x ? "↓" : "b14" == x ? "←" : "b15" == x ? "→" : "b16" == x ? "Xbox" : "b17" == x ? "Share" : "a0-" == x ? "Left Stick ←" : "a0+" == x ? "Left Stick →" : "a1-" == x ? "Left Stick ↑" : "a1+" == x ? "Left Stick ↓" : "a2-" == x ? "Right Stick ←" : "a2+" == x ? "Right Stick →" : "a3-" == x ? "Right Stick ↑" : "a3+" == x ? "Right Stick ↓" : x,
                            `<span style="font-size:${t}%;">${s}</span>`) : `<span style="font-size:${t}%;">${Sh7E.lt[11 * n + r].split("·")[1]}</span>`
                    }
                    D.S6nY("" + e, l + f / 2, u + (d * FouV.wt - JXAJ) / 2, "Itbg", 0 == r ? "#FFF" : i),
                    c >= l - 2 && c < l + f + 4 && p >= u && p < u + d + 3 && (_ = GamePad.ot(Sh7E.lt[11 * n + 0]),
                    1 == Sh7E.nt[n] && null != _ && r <= 4 && -1 != Sh7E.rt[n] || (D.Sy7M(l, u, f, 3, "#aaa"),
                    D.Sy7M(l, u, 3, d, "#aaa"),
                    D.Sy7M(l, u + d - 3, f, 3, "#aaa"),
                    D.Sy7M(l + f - 3, u, 3, d, "#aaa"),
                    FouV.F && (FouV.F = !1,
                    0 < r && CrdD.Zi != 11 * n + r ? CrdD.Zi = 11 * n + r : CrdD.Zi = -1)))
                }
        }
        FouV.Kt = (ZcYj - 722 * FouV.wt) / 2,
        FouV.$t = 280 + 20 / 3,
        D.Dm9f(BLg_.zi[34], FouV.Kt, FouV.$t + 139 / 3, 0, FouV.Dt);
        var t, i = CrdD.Wi % 14 < 7 ? "#444" : "#fff", o = "#444", a = [], h = Math.floor(CrdD.Wi / 8);
        for (let s = 0; s < 4; s++)
            for (let t = 1; t <= 7; t++) {
                var S = Sh7E.Y[11 * s + t]
                  , E = CrdD.qi.get(S);
                E && (l = FouV.Kt + E.x * FouV.wt,
                u = FouV.$t + E.y * FouV.wt,
                f = E.w * FouV.wt,
                d = E.i1 * FouV.wt,
                E = a[S] ? (a[S]++,
                a[S]) : a[S] = 1,
                CrdD.Zi != 11 * s + t && ((h - 1 + E) % CrdD.Pi[S] != 0 || -1 != CrdD.Zi && Sh7E.Y[CrdD.Zi] == S) || (D.Sy7M(l, u, f, d, D.FYH9[s + 1], 0 == Sh7E.nt[s] ? .35 : .2),
                D.Dm9f(BLg_.zi[6 + 7 * s + t - 1], l + f - 14, u + d - 18, 0, FouV.Dt, 0, 0, 0, 0 == Sh7E.nt[s] ? 1 : 0)),
                -1 == CrdD.Zi && c >= l && c < l + f && p >= u && p < u + d && (D.Sy7M(l - 2, u - 2, f + 4, 3, o),
                D.Sy7M(l - 2, u - 2, 3, d + 4, o),
                D.Sy7M(l - 2, u - 2 + d + 4 - 3, f + 4, 3, o),
                D.Sy7M(l - 2 + f + 4 - 3, u - 2, 3, d + 4, o),
                FouV.F) && (FouV.F = !1,
                CrdD.Zi = 11 * s + t),
                1 < CrdD.Pi[S]) && (D.Sy7M(l - 1, u - 1, f + 2, 3, "#f00"),
                D.Sy7M(l - 1, u - 1, 3, d + 2, "#f00"),
                D.Sy7M(l - 1, u + d + 2 - 3, f + 2, 3, "#f00"),
                D.Sy7M(l - 1 + f + 2 - 3, u + 2, 3, d, "#f00"))
            }
        if (0 == Sh7E.nt[Math.floor(CrdD.Zi / 11)]) {
            for (const I of CrdD.qi.keys())
                XELe.O0[I] && -1 != CrdD.Zi && 0 == Sh7E.nt[Math.floor(CrdD.Zi / 11)] && (Sh7E.Y[CrdD.Zi] = I,
                CrdD.Zi % 11 < 7 ? CrdD.Zi++ : CrdD.Zi = -1,
                CrdD.Ji()),
                -1 != CrdD.Zi && (t = CrdD.qi.get(I),
                l = FouV.Kt + t.x * FouV.wt,
                u = FouV.$t + t.y * FouV.wt,
                f = t.w * FouV.wt,
                d = t.i1 * FouV.wt,
                Sh7E.Y[CrdD.Zi] == I && 0 == Sh7E.nt[Math.floor(CrdD.Zi / 11)] && D.Sy7M(l, u, f, d, i, .35),
                c >= l) && c < l + f && p >= u && p < u + d && (D.Sy7M(l - 2, u - 2, f + 4, 3, o),
                D.Sy7M(l - 2, u - 2, 3, d + 4, o),
                D.Sy7M(l - 2, u - 2 + d + 4 - 3, f + 4, 3, o),
                D.Sy7M(l - 2 + f + 4 - 3, u - 2, 3, d + 4, o),
                FouV.F) && (FouV.F = !1,
                Sh7E.Y[CrdD.Zi] = I,
                CrdD.Zi = -1,
                CrdD.Ji());
            -1 != CrdD.Zi && (s = Sh7E.Y[CrdD.Zi],
            (s = CrdD.qi.get(s)) && (l = FouV.Kt + s.x * FouV.wt,
            u = FouV.$t + s.y * FouV.wt,
            f = s.w * FouV.wt,
            d = s.i1 * FouV.wt),
            c >= FouV.Kt) && c < FouV.Kt + 722 && p >= FouV.$t + 48 && p < FouV.$t + 220 && (n = Math.floor(CrdD.Zi / 11),
            r = CrdD.Zi % 11,
            D.Sy7M(c - 7, p - 16, 15, 16, D.FYH9[n + 1]),
            D.Sy7M(c - 6, p - 15, 13, 14, "#fff"),
            D.Sy7M(c - 6, p - 15, 13, 14, D.FYH9[n + 1], .35),
            D.Dm9f(BLg_.zi[6 + 7 * n + r - 1], c - 4, p - 13, 0, FouV.Dt))
        } else if (-1 != CrdD.Zi) {
            var b = Math.floor(CrdD.Zi / 11);
            let t = CrdD.Zi % 11;
            var M, s = GamePad.ot(Sh7E.lt[11 * b + 0]);
            for (M in -1 != Sh7E.rt[b] && null != s && t <= 4 && (CrdD.Zi = 11 * b + 5,
            t = 5),
            GamePad.N0) {
                var w = parseInt(M.split("·")[0], 10)
                  , L = M.split("·")[1];
                if (-1 == Sh7E.rt[b] || Sh7E.rt[b] != w) {
                    for (let t = 0; t < 4; t++)
                        t != b && Sh7E.rt[t] == w && (Sh7E.rt[t] = -1,
                        Sh7E.nt[t] = 0);
                    if (Sh7E.rt[b] = w,
                    console.log("Sh7E.gamepadMap " + Sh7E.rt),
                    Sh7E.lt[11 * b + 0] != Sh7E.st[w]) {
                        Sh7E.lt[11 * b + 0] = Sh7E.st[w];
                        for (let t = 11 * b + 1; t <= 11 * b + 9; t++)
                            t != CrdD.Zi && (Sh7E.lt[t] = "")
                    } else
                        for (let t = 11 * b + 1; t <= 11 * b + 9; t++)
                            "" != Sh7E.lt[t] && (Sh7E.lt[t] = w + "·" + Sh7E.lt[t].split("·")[1]);
                    "xbox" != Sh7E.ht[w] && "switch" != Sh7E.ht[w] && "sony" != Sh7E.ht[w] || (Sh7E.lt[11 * b + 1] = w + "·b12",
                    Sh7E.lt[11 * b + 2] = w + "·b13",
                    Sh7E.lt[11 * b + 3] = w + "·b14",
                    Sh7E.lt[11 * b + 4] = w + "·b15",
                    Sh7E.lt[11 * b + 8] = w + "·a0",
                    Sh7E.lt[11 * b + 9] = w + "·a1")
                }
                "xbox" == Sh7E.ht[w] || "switch" == Sh7E.ht[w] || "sony" == Sh7E.ht[w] ? "b12" == L || "b13" == L || "b14" == L || "b15" == L || "b16" == L || "b9" == L || L.startsWith("a") || (4 < t && (Sh7E.lt[CrdD.Zi] = M),
                t <= 4 ? CrdD.Zi = 11 * b + 5 : t < 7 ? CrdD.Zi++ : CrdD.Zi = -1) : (Sh7E.lt[CrdD.Zi] = M,
                t < 7 ? CrdD.Zi++ : CrdD.Zi = -1)
            }
        } else
            for (var B in GamePad.N0) {
                var F = parseInt(B.split("·")[0], 10)
                  , B = B.split("·")[1];
                -1 != CrdD.Zi || "xbox" != Sh7E.ht[F] && "switch" != Sh7E.ht[F] && "sony" != Sh7E.ht[F] || "b9" != B || (CrdD.Qi = !0)
            }
    }
}
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
class Z9c1 {
}
class DY3O {
}
function L7ce(t) {
    let s, e, i, o;
    var a, h, n;
    let r, l, u;
    if (IAlU(t),
    20 == t.H0) {
        for (t.oe = 0,
        t.ae = 0,
        t.H0 = 21,
        s = 0; s < 8; s++)
            t.ne[s] = 1,
            t.re[s] = -1,
            t.le[s] = 0,
            t.ce[s] = s;
        NcPr()
    }
    if (21 <= t.H0) {
        if (t.H0 <= 23 ? (l = (ZcYj - 740) / 2,
        u = 106,
        t.Kt = l,
        t.$t = u,
        D.Dm9f(BLg_.s1[0], l, u, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[24], l + 20, u + 278, 0, 1 / BLg_.Mi)) : (l = (ZcYj - 794) / 2 - 51,
        u = 126,
        t.Kt = l,
        t.$t = u,
        D.Dm9f(BLg_.s1[9], l + 170, u, 0, 1 / BLg_.Mi)),
        t.oe < 8) {
            if (0 == t.ae) {
                if (0 < t.de && (t.re[t.oe] = -1,
                t.ne[t.oe] = 1),
                0 < t.right)
                    for (; ; ) {
                        if (t.re[t.oe]++,
                        t.ne[t.oe] = 0,
                        t.re[t.oe] >= T7ES._e) {
                            t.re[t.oe] = -1,
                            t.ne[t.oe] = 1;
                            break
                        }
                        if (t.ue(t.re[t.oe], -1))
                            break
                    }
                if (t.left)
                    for (; ; ) {
                        if (t.re[t.oe]--,
                        t.ne[t.oe] = 0,
                        -1 == t.re[t.oe]) {
                            t.ne[t.oe] = 1;
                            break
                        }
                        if (t.re[t.oe] < -1 && (t.re[t.oe] = T7ES._e - 1),
                        t.ue(t.re[t.oe], -1))
                            break
                    }
                t.attack ? (t.attack = !1,
                XYSz.D(0, 1),
                t.ae = 1) : (0 < t.fe || t.ge) && (t.fe = 0,
                t.ge = !1,
                XYSz.D(2, 1),
                0 < t.oe ? (t.oe--,
                t.ae = 1) : (t.H0 = 10,
                QAAV(t),
                FouV.F = 0))
            }
            t.re[t.oe] < 0 ? (FZDd(t, "Random"),
            RPCs(t, "Random", 0 != t.ae ? "#FFFFFF" : t.me())) : (FZDd(t),
            RPCs(t, "", 0 != t.ae ? "#FFFFFF" : t.me())),
            1 == t.ae && ((t.right || t.left) && (0 < t.le[t.oe] ? t.le[t.oe] = 0 : t.le[t.oe] = 1),
            t.attack ? (t.attack = !1,
            XYSz.D(0, 1),
            t.ae = 0,
            t.oe++,
            8 == t.oe && (t.H0 = 22,
            t.pe = 0)) : (0 < t.fe || t.ge) && (t.fe = 0,
            t.ge = !1,
            XYSz.D(2, 1),
            t.ae--)),
            1 <= t.ae && (0 == t.le[t.oe] ? UPjx(t, "Computer") : UPjx(t, "Human"))
        }
        for (t.Se = 0,
        s = 0; s < 8; s++)
            0 < t.le[s] && (t.Se++,
            t.le[s] = t.Se);
        for (s = 0; s < t.oe; s++)
            e = t.ce[s],
            (1 != t.ne[e] || 1 != t.be) && 0 <= t.re[e] ? (h = T7ES.s0[t.re[e]],
            D.Dm9f(h.Ee, l + 216 + 60 * s + h.Fe, u + 260, 0, 1 / h.ti)) : D.Dm9f(BLg_.s1[1], l + 216 + 60 * s, u + 260, 0, 1 / BLg_.Mi),
            D.S6nY(t.Le[t.le[e]], l + 216 + 60 * s + 13 - 54 + 60, u + 307 - 2 + (19 - JXAJ) / 2, "Itbg", 0 == t.le[e] ? D.OuCn[2] : D.OuCn[1]);
        t.oe < 8 && (e = t.ce[t.oe],
        (1 != t.ne[t.oe] || 1 != t.be) && 0 <= t.re[t.oe] ? (d = T7ES.s0[t.re[t.oe]],
        D.Dm9f(d.Ee, l + 216 + 60 * t.oe + d.Fe, u + 260, 0, 1 / d.ti)) : D.Dm9f(BLg_.s1[1], l + 216 + 60 * t.oe, u + 260, 0, 1 / BLg_.Mi),
        0 == t.ae && D.VfDU(l + 216 + 60 * t.oe, u + 260, 40, 45, t.Be()),
        1 == t.ae && D.VfDU(l + 216 + 60 * t.oe + 13 - 54 + 45, u + 307 - 2, 30, 19, t.Be()),
        1 <= t.ae) && D.S6nY(t.Le[t.le[e]], l + 216 + 60 * t.oe + 13 - 54 + 60, u + 307 - 2 + (19 - JXAJ) / 2, "Itbg", 0 == t.le[e] ? D.OuCn[2] : D.OuCn[1])
    }
    if (22 == t.H0)
        if (l = (ZcYj - 238) / 2,
        u = 162,
        t.Kt = l,
        t.$t = u,
        D.Dm9f(BLg_.s1[2], l, u, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[3], l + 36, u + 17, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[5], l + 44, u + 70, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[6], l + 148, u + 70, 0, 1 / BLg_.Mi),
        0 == t.pe ? D.Dm9f(BLg_.s1[7], l + 41, u + 67, 0, 1 / BLg_.Mi) : D.Dm9f(BLg_.s1[8], l + 142, u + 68, 0, 1 / BLg_.Mi),
        (t.left || t.right) && (t.pe = 1 - t.pe),
        t.attack)
            t.attack = !1,
            XYSz.D(0, 1),
            0 == t.pe ? (t.H0 = 23,
            t.Me = 0) : (t.pe = 0,
            t.H0 = 24);
        else if (0 < t.fe || t.ge)
            for (XYSz.D(2, 1),
            t.fe = 0,
            t.ge = !1,
            t.H0 = 21,
            t.ae = 1,
            t.oe = 7,
            s = 0; s < 8; s++)
                t.ce[s] = s;
    if (23 == t.H0) {
        for (s = 0; s < 50; s++)
            e = t.ye(247, 8),
            i = t.ye(248, 8),
            o = t.ce[e],
            t.ce[e] = t.ce[i],
            t.ce[i] = o;
        t.Me++,
        t.Me % 5 == 0 && XYSz.D(1, 1),
        10 < t.Me && (t.H0 = 22,
        t.pe = 0)
    }
    if (24 == t.H0) {
        for (2 == t.be && (t.be = 1),
        i = 0; i < 8; i++)
            if (1 == t.ne[i]) {
                for (t.we = 0,
                o = 1; o < T7ES._e; o++) {
                    for (t.De = 0,
                    zz = 0; zz < 8; zz++)
                        t.re[zz] == o && (t.De = 1);
                    0 == T7ES.s0[o].type && 0 == t.De && T7ES.s0[o].id < 30 && (t.Ve[t.we] = o,
                    t.we++)
                }
                t.re[i] = t.Ve[t.ye(249, t.we)]
            }
        t.H0 = 25,
        t.pe = 0
    }
    if (25 == t.H0)
        if (l = 3,
        u = 3,
        t.Kt = l,
        t.$t = u,
        t.Te(),
        D.Dm9f(BLg_.e1[8], l, u, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.e1[15], l, u + 156, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.Gi[3], l, u + 131.33, 0, 1 / BLg_.Mi * 1),
        D.Dm9f(BLg_.Gi[5], l, u + 179 - 24, 0, 1 / BLg_.Mi * 1),
        D.S6nY(`<span style="font-size:100%;">${t.ke}s</span>`, t.Kt + 212, t.$t + 135 + (16 - JXAJ) / 2, "Itbg", "#ffffff"),
        0 == t.pe && D.Dm9f(BLg_.e1[9], l + 89, u + 13, 0, 1 / BLg_.Mi),
        1 == t.pe && D.Dm9f(BLg_.e1[10], l + 61, u + 36, 0, 1 / BLg_.Mi),
        2 == t.pe && D.Dm9f(BLg_.e1[11], l + 71 / 3, u + 61, 0, 1 / BLg_.Mi),
        0 < t.be && D.Dm9f(BLg_.e1[52], l + 776 / 3, u + 60, 0, 1 / BLg_.Mi),
        3 == t.pe && D.Dm9f(BLg_.e1[12], l + 12, u + 84, 0, 1 / BLg_.Mi),
        4 == t.pe && D.Dm9f(BLg_.e1[13], l + 34, u + 108, 0, 1 / BLg_.Mi),
        1 == t.Ie && (t.Ce = 100),
        D.S6nY(100 == t.Ce ? "Random" : T7ES.Ae[t.Ce].name.replaceAll("_", " "), l + 167 + 61, u + 88 + (16 - JXAJ) / 2, "Itbg", D.OuCn[0]),
        D.S6nY(2 == t.ve ? "Easy" : 1 == t.ve ? "Normal" : (t.ve,
        "Difficult"), l + 167 + 45, u + 112 + (16 - JXAJ) / 2, "Itbg", D.OuCn[0]),
        5 == t.pe ? (D.Dm9f(BLg_.Gi[6], l + 73 / 3 * 1, u + 132, 0, 1 / BLg_.Mi * 1),
        (0 < t.right || 0 < t.left || 0 < t.attack) && (d = 0 < t.right || 0 < t.attack ? 1 : -1,
        f = (n = [60, 90, 120, 180, 300, 600]).indexOf(t.ke),
        t.ke = n[-1 === f ? 0 < d ? 0 : n.length - 1 : (f + d + n.length) % n.length])) : 7 == t.pe ? (D.Dm9f(BLg_.Gi[8], l + 38 / 3 * 1, u + 156, 0, 1 / BLg_.Mi * 1),
        0 < t.attack && (t.Xe = !t.Xe)) : 8 == t.pe ? (D.Dm9f(BLg_.Gi[9], l + 287 / 3 * 1, u + 156, 0, 1 / BLg_.Mi * 1),
        0 < t.attack && (t.Ye = !t.Ye)) : 9 == t.pe ? (D.Dm9f(BLg_.Gi[10], l + 185, u + 156, 0, 1 / BLg_.Mi * 1),
        0 < t.attack && (t.Ne = !t.Ne)) : 10 == t.pe && (D.Dm9f(BLg_.e1[14], l + 98, u + 182, 0, 1 / BLg_.Mi * 1),
        0 < t.attack) && (XYSz.D(1, 1),
        t.H0 = 10),
        t.Xe && D.Dm9f(BLg_.Gi[11], l + 214 / 3 * 1, u + 161, 0, 1 / BLg_.Mi * 1),
        t.Ye && D.Dm9f(BLg_.Gi[11], l + 470 / 3 * 1, u + 161, 0, 1 / BLg_.Mi * 1),
        t.Ne && D.Dm9f(BLg_.Gi[11], l + 275, u + 161, 0, 1 / BLg_.Mi * 1),
        D.Dm9f(BLg_.Gi[12], l + 185, u + 156, 0, 1 / BLg_.Mi * 1),
        0 < t.de && (10 == t.pe ? t.pe = 8 : 7 <= t.pe && t.pe <= 9 ? t.pe = 5 : (t.pe--,
        t.pe < 0 && (t.pe = 10))),
        0 < t.R0 && (5 == t.pe ? t.pe = 8 : 7 <= t.pe && t.pe <= 9 ? t.pe = 10 : t.pe = (t.pe + 1) % 11),
        7 <= t.pe && t.pe <= 9 && (0 < t.left ? 7 == t.pe ? t.pe = 8 : t.pe-- : 0 < t.right && (9 == t.pe || (t.pe++,
        9 == t.pe)) && (t.pe = 7)),
        -1 == t.ve && (t.ve = 0),
        3 == t.pe && (0 < t.attack || 0 < t.right ? (t.Ie = 0,
        t.attack = 0,
        t.right = 0,
        100 == t.Ce ? t.Ce = 0 : (t.Ce++,
        t.Ce == T7ES.Ue && (t.Ce = 100,
        t.Ie = 1))) : 0 < t.left && (t.Ie = 0,
        t.left = 0,
        100 == t.Ce ? t.Ce = T7ES.Ue - 1 : (t.Ce--,
        -1 == t.Ce && (t.Ce = 100,
        t.Ie = 1)))),
        4 == t.pe && ((0 < t.attack || 0 < t.right) && (t.attack = 0,
        t.right = 0,
        t.ve--,
        t.ve < 0) && (t.ve = 2),
        0 < t.left) && (t.left = 0,
        t.ve++,
        2 < t.ve) && (t.ve = 0),
        2 == t.pe && (0 < t.right ? (t.right = 0) < t.be ? t.be = 0 : t.be = 1 : 0 < t.left && ((t.left = 0) < t.be ? t.be = 0 : t.be = 1)),
        0 < t.attack) {
            if (t.attack = 0,
            XYSz.D(1, 1),
            0 == t.pe) {
                for (1 == t.be && (t.be = 2),
                t.H0 = 26,
                s = 0; s < 8; s++)
                    t.Re[s] = 500,
                    t.xe[s] = -1,
                    t.Ge[s] = 0;
                t.Me = 25,
                t.Oe = 0,
                t.Ti()
            }
            1 == t.pe ? t.H0 = 20 : 2 == t.pe ? t.H0 = 24 : 10 == t.pe && (t.H0 = 10,
            QAAV(t),
            FouV.F = 0)
        } else if (0 < t.fe || t.ge)
            for (t.fe = 0,
            t.ge = !1,
            XYSz.D(2, 1),
            t.H0 = 22,
            t.pe = 0,
            s = 0; s < 8; s++)
                1 == t.ne[s] && (t.re[s] = -1);
    if (26 <= t.H0)
        for (l = (ZcYj - 794) / 2 - 51,
        u = 126,
        t.Kt = l,
        t.$t = u,
        e = 0; e < 8; e++)
            for (t.ze = t.Ge[e],
            7 < t.ze && (t.ze = 7),
            7 == t.ze && t.H0 < 29 && (t.H0 = 29,
            t.We = e,
            t.Me = 0),
            s = 0; s < t.ze; s++)
                D.Sy7M(l + t.Ze[2 * s + 14 * e], u + t.Ze[2 * s + 1 + 14 * e], t.Pe[2 * s], t.Pe[2 * s + 1], t.ze < 7 && t.ze % 2 == 1 ? 1058912 : 16777215);
    if (26 == t.H0) {
        for (l = (ZcYj - 794) / 2 - 51,
        u = 126,
        t.Kt = l,
        t.$t = u,
        t.Je = 0,
        s = 0; s < 8 && (t.Ge[s] != t.Oe || (t.He[t.Je] = s,
        t.Je++,
        2 != t.Je)); s++)
            ;
        if (0 == t.Je && t.Oe < 6 && (t.Oe += 2),
        2 == t.Je) {
            if (30 < t.Me)
                for (e = t.Qe % 10 < 5 ? t.He[0] : t.He[1],
                t.ze = t.Ge[e] + 2,
                7 < t.ze && (t.ze = 7),
                s = 0; s < t.ze; s++)
                    D.Sy7M(l + t.Ze[2 * s + 14 * e], u + t.Ze[2 * s + 1 + 14 * e], t.Pe[2 * s], t.Pe[2 * s + 1], 16752800);
            if (t.Me++,
            (0 < t.fe || t.ge) && (t.Me = 80),
            80 == t.Me)
                if (0 == t.le[t.ce[t.He[0]]] && 0 == t.le[t.ce[t.He[1]]])
                    XYSz.D(0, 1),
                    t.Me = 0,
                    i = t.je(0) || t.je(1) ? t.je(0) && !t.je(1) ? 0 : !t.je(0) && t.je(1) ? 1 : t.ye(251, 2) : t.ye(250, 2),
                    t.Ge[t.He[i]] = t.Ge[t.He[i]] + 2,
                    t.Ge[t.He[1 - i]] = t.Ge[t.He[1 - i]] + 1,
                    6 == t.Ge[t.He[i]] && (t.Ge[t.He[i]] = 7),
                    (r = t.ve) < -1 && (r = 0),
                    t.Re[t.He[i]] = t.Re[t.He[i]] * (t.ye(252, 15 + 12 * r) + 61 + 12 * (2 - r)) / 100;
                else {
                    for (t.H0 = 27,
                    t.Me = 0,
                    s = 0; s < 400; s++)
                        t.Ke[s] = !1;
                    for (s = 0; s < 20; s++)
                        t.$e[s] = -1;
                    t.Ge[t.He[0]] = t.Ge[t.He[0]] + 1,
                    t.Ge[t.He[1]] = t.Ge[t.He[1]] + 1
                }
        }
    }
    if (27 == t.H0) {
        if (t.Me < 2) {
            if (l = (ZcYj - 794) / 2 - 51,
            u = 126,
            t.Kt = l,
            t.$t = u,
            i = t.He[t.Me],
            t.Qe % 10 < 5)
                for (t.ze = t.Ge[i] + 1,
                7 < t.ze && (t.ze = 7),
                s = 0; s < t.ze; s++)
                    D.Sy7M(l + t.Ze[2 * s + 14 * i], u + t.Ze[2 * s + 1 + 14 * i], t.Pe[2 * s], t.Pe[2 * s + 1], 16752800);
            if (0 < t.le[t.ce[i]]) {
                l = 10,
                u = 10,
                t.Kt = l,
                t.$t = u,
                D.Dm9f(BLg_.s1[10], l, u, 0, 1 / BLg_.Mi),
                D.Dm9f(BLg_.s1[10 + t.le[t.ce[i]]], l + 159, u + 14, 0, 1 / BLg_.Mi);
                var f = T7ES.s0[t.re[t.ce[i]]].qe
                  , d = D.E9px(f);
                for (D.Dm9f(f, l + 80, u + 39, 0, 120 / d),
                s = 0; s < 8; s++)
                    if (t.Ke[s] || EviP(t, s),
                    t.ts[s].attack && !t.ts[s].es) {
                        if (!t.Ke[s]) {
                            t.attack = !1,
                            t.ts[s].es = 1,
                            XYSz.D(0, 1),
                            t.$e[s] = i,
                            t.Ke[s] = !0,
                            t.ts[s].s0 = T7ES.s0[t.re[t.ce[i]]],
                            t.Me++;
                            break
                        }
                        XYSz.D(2, 1)
                    }
            } else
                t.Me++,
                t.pe = 1
        }
        if (2 == t.Me && (l = 278 + (ZcYj - 794) / 2,
        u = 162,
        t.Kt = l,
        t.$t = u,
        D.Dm9f(BLg_.s1[2], l, u, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[4], l + 36, u + 17, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[5], l + 44, u + 70, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[6], l + 148, u + 70, 0, 1 / BLg_.Mi),
        0 == t.pe ? D.Dm9f(BLg_.s1[7], l + 41, u + 67, 0, 1 / BLg_.Mi) : D.Dm9f(BLg_.s1[8], l + 142, u + 68, 0, 1 / BLg_.Mi),
        (t.left || t.right) && (t.pe = 1 - t.pe),
        t.attack))
            if (t.attack = !1,
            XYSz.D(0, 1),
            0 == t.pe)
                t.attack = !1,
                t.Me = 3;
            else {
                for (t.attack = !1,
                t.Me = 0,
                s = 0; s < 400; s++)
                    t.Ke[s] = !1;
                for (s = 0; s < 20; s++)
                    t.$e[s] = -1;
                NcPr()
            }
        if (3 == t.Me) {
            for (e = 0; e < 2; e++)
                if (0 == t.le[t.ce[t.He[e]]])
                    for (s = 0; s < 8; s++)
                        if (!t.Ke[s]) {
                            XYSz.D(0, 1),
                            t.$e[s + 10] = t.He[e],
                            t.Ke[s + 10] = !0,
                            t.ts[s + 10].s0 = T7ES.s0[t.re[t.ce[t.He[e]]]];
                            break
                        }
            for (t.H0 = 0,
            t.ss = t.ke * SvvK + SvvK - 1,
            1 == t.Ie && (t.Ce = t.ye(253, T7ES.Ue)),
            a = t.Ce,
            i = 0; i < 20; i++)
                t.Ke[i] && (t.ts[i].hs(t.ts[i].s0, 350, 0, 300),
                t.ts[i].os = 500,
                t.ts[i].ns = t.ts[i].rs = t.ts[i].ls = t.Re[t.$e[i]],
                t.ts[i].cs = t.xe[t.$e[i]],
                t.ts[i].group = t.$e[i] + 10,
                t.ts[i].ds = 75,
                t.ts[i].x = t.ye(254, T7ES.Ae[a].w / 2) + T7ES.Ae[a].w / 4,
                t.ts[i].z = t.ye(255, T7ES.Ae[a]._s - T7ES.Ae[a].us) + T7ES.Ae[a].us,
                t.ts[i].y = 0,
                t.ts[i].fs = t.ts[i].x,
                t.ts[i].gs = t.ts[i].z,
                t.ts[i].ps = 0,
                t.ts[i].Ss = i);
            for (t.bs = 0,
            t.Es = 0,
            t.Fs = 0,
            t.Ls = 0,
            t.Bs = 0,
            t.Ms = 0,
            t.ys = 0,
            t.ws = 0,
            t.Ds = 0,
            t.Vs = 0,
            T7ES.Ae[t.Ce].Ts || T7ES.Ae[t.Ce].ks || T7ES.Ae[t.Ce].Is(),
            t.Cs = 1,
            t.As = 0,
            i = 20; i < 400; i++)
                t.Ke[i] || t.ts[i].vs();
            QAAV(t)
        }
    }
    if (28 == t.H0) {
        for (s = 0; s < 20; s++)
            -1 < t.$e[s] && (t.Re[t.$e[s]] = t.ts[s].rs,
            t.xe[t.$e[s]] = t.ts[s].cs);
        for (10 <= t.Xs ? (t.Ge[t.Xs - 10] = t.Ge[t.Xs - 10] + 1,
        6 == t.Ge[t.Xs - 10] && (t.Ge[t.Xs - 10] = 7)) : (i = t.ye(256, 2),
        t.Ge[t.He[i]] = t.Ge[t.He[i]] + 1,
        6 == t.Ge[t.He[i]] && (t.Ge[t.He[i]] = 7)),
        t.H0 = 26,
        s = 0; s < 400; s++)
            t.Ke[s] = !1;
        for (s = 0; s < 20; s++)
            t.$e[s] = -1;
        NcPr()
    }
    29 == t.H0 && (t.Me < 50 && t.Me++,
    20 < t.Me) && (21 == t.Me && (XYSz.Ys(),
    XYSz.D(3, 1),
    FouV.Yt) && FouV.gi(atob("TU9ERV8xX09OXzFfQ0hBTVA=")),
    l = 10,
    u = 10,
    t.Kt = l,
    t.$t = u,
    D.Dm9f(BLg_.s1[10], l, u, 0, 1 / BLg_.Mi),
    0 == t.le[t.ce[t.We]] ? D.Dm9f(BLg_.s1[20], l + 83, u + 12, 0, 1 / BLg_.Mi) : D.Dm9f(BLg_.s1[10 + t.le[t.ce[t.We]]], l + 159, u + 14, 0, 1 / BLg_.Mi),
    n = T7ES.s0[t.re[t.ce[t.We]]].qe,
    f = D.E9px(n),
    D.Dm9f(n, l + 80, u + 39, 0, 120 / f),
    D.Dm9f(BLg_.s1[19], l + 13, u + 165, 0, 1 / BLg_.Mi),
    t.attack) && 50 == t.Me && (t.H0 = 10,
    QAAV(t),
    FouV.F = 0)
}
function RPCs(t, s, e) {
    D.S6nY("Random" == s ? "Random" : T7ES.s0[t.re[t.oe]].name, t.Kt + 59 - 35 + 60, t.$t + 206 - 2 + (19 - JXAJ) / 2, "Itbg", e)
}
function FZDd(t, s="") {
    var s = "Random" == s ? BLg_.N1 : T7ES.s0[t.re[t.oe]].qe
      , e = D.E9px(s);
    D.Dm9f(s, t.Kt + 25, t.$t + 53, 0, 120 / e)
}
function UPjx(t, s) {
    D.S6nY(s, t.Kt + 59 - 35 + 60, t.$t + 253 - 2 + (19 - JXAJ) / 2, "Itbg", 1 != t.ae ? "#FFFFFF" : t.me())
}
class VEny {
}
function IV0O(t) {
    let s, e, i, o;
    var a, h, n;
    let r, l, u;
    if (IAlU(t),
    120 == t.H0) {
        for (t.oe = 0,
        t.ae = 0,
        t.H0 = 121,
        s = 0; s < 8; s++)
            t.ne[s] = 1,
            t.re[s] = -1,
            t.le[s] = 0,
            t.Ns[s] = Math.floor(s / 2) + 1,
            t.ce[s] = s;
        NcPr()
    }
    if (121 <= t.H0) {
        for (t.H0 <= 123 ? (l = 27 + (ZcYj - 794) / 2,
        u = 106,
        t.Kt = l,
        t.$t = u,
        D.Dm9f(BLg_.s1[0], l, u, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[24], l + 20, u + 278, 0, 1 / BLg_.Mi)) : (l = (ZcYj - 794) / 2 - 51,
        u = 126,
        t.Kt = l,
        t.$t = u,
        D.Dm9f(BLg_.s1[9], l + 170, u, 0, 1 / BLg_.Mi)),
        D.Dm9f(BLg_.e1[21], l + 132 + 177, u + 23, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.e1[16], l + 55 + 177 + .5, u + 215 - .5, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.e1[16], l + 55 + 177, u + 215, 0, 1 / BLg_.Mi),
        s = 0; s < 4; s++)
            D.Sy7M(l + 55 + 177 + 120 * s + 1, u + 221, 73, 36, 3296666),
            D.Sy7M(l + 55 + 177 + 120 * s, u + 221, 73, 36, 3296666),
            D.Dm9f(BLg_.e1[16 + t.Ns[2 * s]], l + 60 + 177 + 120 * s, u + 223, 0, 1 / BLg_.Mi);
        if (t.oe < 8) {
            if (0 == t.ae) {
                if (0 < t.de && (t.re[t.oe] = -1,
                t.ne[t.oe] = 1),
                0 < t.right)
                    for (; ; ) {
                        if (t.re[t.oe]++,
                        t.ne[t.oe] = 0,
                        t.re[t.oe] >= T7ES._e) {
                            t.re[t.oe] = -1,
                            t.ne[t.oe] = 1;
                            break
                        }
                        if (t.ue(t.re[t.oe], -1))
                            break
                    }
                if (0 < t.left)
                    for (; ; ) {
                        if (t.re[t.oe]--,
                        t.ne[t.oe] = 0,
                        -1 == t.re[t.oe]) {
                            t.ne[t.oe] = 1;
                            break
                        }
                        if (t.re[t.oe] < -1 && (t.re[t.oe] = T7ES._e - 1),
                        t.ue(t.re[t.oe], -1))
                            break
                    }
                0 < t.attack ? (t.attack = 0,
                XYSz.D(0, 1),
                t.ae = 1) : (0 < t.fe || t.ge) && (t.fe = 0,
                t.ge = !1,
                XYSz.D(2, 1),
                0 < t.oe ? (t.oe--,
                t.ae = 1) : (t.H0 = 10,
                QAAV(t),
                FouV.F = 0))
            }
            t.re[t.oe] < 0 ? (FZDd(t, "Random"),
            RPCs(t, "Random", 0 != t.ae ? "#FFFFFF" : t.me())) : (FZDd(t),
            RPCs(t, "", 0 != t.ae ? "#FFFFFF" : t.me())),
            1 == t.ae && ((t.right || t.left) && (0 < t.le[t.oe] ? t.le[t.oe] = 0 : t.le[t.oe] = 1),
            t.attack ? (t.attack = !1,
            XYSz.D(0, 1),
            t.ae = 0,
            t.oe++,
            8 == t.oe && (t.H0 = 122,
            t.pe = 0)) : (0 < t.fe || t.ge) && (t.fe = 0,
            t.ge = !1,
            XYSz.D(2, 1),
            t.ae--)),
            1 <= t.ae && (0 == t.le[t.oe] ? UPjx(t, "Computer") : UPjx(t, "Human"))
        }
        for (t.Se = 0,
        s = 0; s < 8; s++)
            0 < t.le[s] && (t.Se++,
            t.le[s] = t.Se);
        for (s = 0; s < t.oe; s++)
            r = s % 2 == 0 ? 10 : -10,
            e = t.ce[s],
            (1 != t.ne[e] || 1 != t.be) && 0 <= t.re[e] ? (h = T7ES.s0[t.re[e]],
            D.Dm9f(h.Ee, r + l + 216 + 60 * s + h.Fe, u + 252, 0, 1 / h.ti)) : D.Dm9f(BLg_.s1[1], r + l + 216 + 60 * s, u + 252, 0, 1 / BLg_.Mi),
            D.S6nY(t.Le[t.le[e]], r + l + 216 + 60 * s + 13 - 54 + 60, u + 299 - 2 + (19 - JXAJ) / 2, "Itbg", 0 == t.le[e] ? D.OuCn[2] : D.OuCn[1]);
        t.oe < 8 && (r = t.oe % 2 == 0 ? 10 : -10,
        e = t.ce[t.oe],
        (1 != t.ne[t.oe] || 1 != t.be) && 0 <= t.re[t.oe] ? (d = T7ES.s0[t.re[t.oe]],
        D.Dm9f(d.Ee, r + l + 216 + 60 * t.oe + d.Fe, u + 252, 0, 1 / d.ti)) : D.Dm9f(BLg_.s1[1], r + l + 216 + 60 * t.oe, u + 252, 0, 1 / BLg_.Mi),
        0 == t.ae && D.VfDU(r + l + 216 + 60 * s, u + 252, 40, 45, t.Be()),
        1 == t.ae && D.VfDU(r + l + 216 + 60 * t.oe + 13 - 54 + 45, u + 299 - 2, 30, 19, t.Be()),
        1 <= t.ae) && D.S6nY(t.Le[t.le[e]], r + l + 216 + 60 * t.oe + 13 - 54 + 60, u + 299 - 2 + (19 - JXAJ) / 2, "Itbg", 0 == t.le[e] ? D.OuCn[2] : D.OuCn[1])
    }
    if (122 == t.H0)
        if (l = (ZcYj - 238) / 2,
        u = 162,
        t.Kt = l,
        t.$t = u,
        D.Dm9f(BLg_.s1[2], l, u, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[3], l + 36, u + 17, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[5], l + 44, u + 70, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[6], l + 148, u + 70, 0, 1 / BLg_.Mi),
        0 == t.pe ? D.Dm9f(BLg_.s1[7], l + 41, u + 67, 0, 1 / BLg_.Mi) : D.Dm9f(BLg_.s1[8], l + 142, u + 68, 0, 1 / BLg_.Mi),
        (t.left || t.right) && (t.pe = 1 - t.pe),
        t.attack)
            t.attack = !1,
            XYSz.D(0, 1),
            0 == t.pe ? (t.H0 = 123,
            t.Me = 0) : (t.pe = 0,
            t.H0 = 124);
        else if (0 < t.fe || t.ge)
            for (XYSz.D(2, 1),
            t.fe = 0,
            t.ge = !1,
            t.H0 = 121,
            t.ae = 1,
            t.oe = 7,
            s = 0; s < 8; s++)
                t.ce[s] = s,
                t.Ns[s] = Math.floor(s / 2) + 1;
    if (123 == t.H0) {
        for (s = 0; s < 50; s++)
            e = t.ye(257, 4),
            i = t.ye(258, 4),
            o = t.ce[2 * e],
            t.ce[2 * e] = t.ce[2 * i],
            t.ce[2 * i] = o,
            o = t.ce[2 * e + 1],
            t.ce[2 * e + 1] = t.ce[2 * i + 1],
            t.ce[2 * i + 1] = o,
            o = t.Ns[2 * e],
            t.Ns[2 * e] = t.Ns[2 * i],
            t.Ns[2 * i] = o,
            o = t.Ns[2 * e + 1],
            t.Ns[2 * e + 1] = t.Ns[2 * i + 1],
            t.Ns[2 * i + 1] = o;
        t.Me++,
        t.Me % 5 == 0 && XYSz.D(1, 1),
        10 < t.Me && (t.H0 = 122,
        t.pe = 0)
    }
    if (124 == t.H0) {
        for (2 == t.be && (t.be = 1),
        i = 0; i < 8; i++)
            if (1 == t.ne[i]) {
                for (t.we = 0,
                o = 1; o < T7ES._e; o++) {
                    for (t.De = 0,
                    zz = 0; zz < 8; zz++)
                        t.re[zz] == o && (t.De = 1);
                    0 == T7ES.s0[o].type && 0 == t.De && T7ES.s0[o].id < 30 && (t.Ve[t.we] = o,
                    t.we++)
                }
                t.re[i] = t.Ve[t.ye(259, t.we)]
            }
        t.H0 = 125,
        t.pe = 0
    }
    if (125 == t.H0)
        if (l = 3,
        u = 3,
        t.Kt = l,
        t.$t = u,
        t.Te(),
        D.Dm9f(BLg_.e1[8], l, u, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.e1[15], l, u + 156, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.Gi[3], l, u + 131.33, 0, 1 / BLg_.Mi * 1),
        D.Dm9f(BLg_.Gi[5], l, u + 179 - 24, 0, 1 / BLg_.Mi * 1),
        D.S6nY(`<span style="font-size:100%;">${t.Us}s</span>`, t.Kt + 212, t.$t + 135 + (16 - JXAJ) / 2, "Itbg", "#ffffff"),
        0 == t.pe && D.Dm9f(BLg_.e1[9], l + 89, u + 13, 0, 1 / BLg_.Mi),
        1 == t.pe && D.Dm9f(BLg_.e1[10], l + 61, u + 36, 0, 1 / BLg_.Mi),
        2 == t.pe && D.Dm9f(BLg_.e1[11], l + 71 / 3, u + 61, 0, 1 / BLg_.Mi),
        0 < t.be && D.Dm9f(BLg_.e1[52], l + 776 / 3, u + 60, 0, 1 / BLg_.Mi),
        3 == t.pe && D.Dm9f(BLg_.e1[12], l + 12, u + 84, 0, 1 / BLg_.Mi),
        4 == t.pe && D.Dm9f(BLg_.e1[13], l + 34, u + 108, 0, 1 / BLg_.Mi),
        1 == t.Ie && (t.Ce = 100),
        D.S6nY(100 == t.Ce ? "Random" : T7ES.Ae[t.Ce].name.replaceAll("_", " "), l + 167 + 61, u + 88 + (16 - JXAJ) / 2, "Itbg", D.OuCn[0]),
        D.S6nY(2 == t.ve ? "Easy" : 1 == t.ve ? "Normal" : (t.ve,
        "Difficult"), l + 167 + 45, u + 112 + (16 - JXAJ) / 2, "Itbg", D.OuCn[0]),
        5 == t.pe ? (D.Dm9f(BLg_.Gi[6], l + 73 / 3 * 1, u + 132, 0, 1 / BLg_.Mi * 1),
        (0 < t.right || 0 < t.left || 0 < t.attack) && (d = 0 < t.right || 0 < t.attack ? 1 : -1,
        f = (n = [60, 90, 120, 180, 300, 600]).indexOf(t.Us),
        t.Us = n[-1 === f ? 0 < d ? 0 : n.length - 1 : (f + d + n.length) % n.length])) : 7 == t.pe ? (D.Dm9f(BLg_.Gi[8], l + 38 / 3 * 1, u + 156, 0, 1 / BLg_.Mi * 1),
        0 < t.attack && (t.Xe = !t.Xe)) : 8 == t.pe ? (D.Dm9f(BLg_.Gi[9], l + 287 / 3 * 1, u + 156, 0, 1 / BLg_.Mi * 1),
        0 < t.attack && (t.Ye = !t.Ye)) : 9 == t.pe ? (D.Dm9f(BLg_.Gi[10], l + 185, u + 156, 0, 1 / BLg_.Mi * 1),
        0 < t.attack && (t.Ne = !t.Ne)) : 10 == t.pe && (D.Dm9f(BLg_.e1[14], l + 98, u + 182, 0, 1 / BLg_.Mi * 1),
        0 < t.attack) && (XYSz.D(1, 1),
        t.H0 = 10),
        t.Xe && D.Dm9f(BLg_.Gi[11], l + 214 / 3 * 1, u + 161, 0, 1 / BLg_.Mi * 1),
        t.Ye && D.Dm9f(BLg_.Gi[11], l + 470 / 3 * 1, u + 161, 0, 1 / BLg_.Mi * 1),
        t.Ne && D.Dm9f(BLg_.Gi[11], l + 275, u + 161, 0, 1 / BLg_.Mi * 1),
        D.Dm9f(BLg_.Gi[12], l + 185, u + 156, 0, 1 / BLg_.Mi * 1),
        0 < t.de && (10 == t.pe ? t.pe = 8 : 7 <= t.pe && t.pe <= 9 ? t.pe = 5 : (t.pe--,
        t.pe < 0 && (t.pe = 10))),
        0 < t.R0 && (5 == t.pe ? t.pe = 8 : 7 <= t.pe && t.pe <= 9 ? t.pe = 10 : t.pe = (t.pe + 1) % 11),
        7 <= t.pe && t.pe <= 9 && (0 < t.left ? 7 == t.pe ? t.pe = 8 : t.pe-- : 0 < t.right && (9 == t.pe || (t.pe++,
        9 == t.pe)) && (t.pe = 7)),
        -1 == t.ve && (t.ve = 0),
        3 == t.pe && (0 < t.attack || 0 < t.right ? (t.Ie = 0,
        t.attack = 0,
        t.right = 0,
        100 == t.Ce ? t.Ce = 0 : (t.Ce++,
        t.Ce == T7ES.Ue && (t.Ce = 100,
        t.Ie = 1))) : 0 < t.left && (t.Ie = 0,
        t.left = 0,
        100 == t.Ce ? t.Ce = T7ES.Ue - 1 : (t.Ce--,
        -1 == t.Ce && (t.Ce = 100,
        t.Ie = 1)))),
        4 == t.pe && ((0 < t.attack || 0 < t.right) && (t.attack = 0,
        t.right = 0,
        t.ve--,
        t.ve < 0) && (t.ve = 2),
        0 < t.left) && (t.left = 0,
        t.ve++,
        2 < t.ve) && (t.ve = 0),
        2 == t.pe && (0 < t.right ? (t.right = 0) < t.be ? t.be = 0 : t.be = 1 : 0 < t.left && ((t.left = 0) < t.be ? t.be = 0 : t.be = 1)),
        0 < t.attack) {
            if (t.attack = 0,
            XYSz.D(1, 1),
            0 == t.pe) {
                for (1 == t.be && (t.be = 2),
                t.H0 = 126,
                s = 0; s < 8; s++)
                    t.Re[s] = 500,
                    t.xe[s] = -1,
                    t.Ge[s] = 2;
                t.Me = 25,
                t.Oe = 0,
                t.Ti()
            }
            1 == t.pe ? t.H0 = 120 : 2 == t.pe ? t.H0 = 124 : 10 == t.pe && (t.H0 = 10,
            QAAV(t),
            FouV.F = 0)
        } else if (0 < t.fe || t.ge)
            for (t.fe = 0,
            t.ge = !1,
            XYSz.D(2, 1),
            t.H0 = 122,
            t.pe = 0,
            s = 0; s < 8; s++)
                1 == t.ne[s] && (t.re[s] = -1);
    if (126 <= t.H0)
        for (l = (ZcYj - 794) / 2 - 51,
        u = 126,
        t.Kt = l,
        t.$t = u,
        e = 0; e < 8; e += 2)
            for (t.ze = t.Ge[e],
            7 < t.ze && (t.ze = 7),
            7 == t.ze && t.H0 < 129 && (t.H0 = 129,
            t.We = e,
            t.Me = 0),
            s = 2; s < t.ze; s++)
                D.Sy7M(l + t.Ze[2 * s + 14 * e], u + t.Ze[2 * s + 1 + 14 * e], t.Pe[2 * s], t.Pe[2 * s + 1], t.ze < 7 && t.ze % 2 == 1 ? 1058912 : 16777215);
    if (126 == t.H0) {
        for (l = (ZcYj - 794) / 2 - 51,
        u = 126,
        t.Kt = l,
        t.$t = u,
        t.Je = 0,
        s = 0; s < 8 && (t.Ge[s] != t.Oe || (t.He[t.Je] = s,
        t.He[t.Je + 1] = s + 1,
        t.Je += 2,
        4 != t.Je)); s += 2)
            ;
        if (0 == t.Je && t.Oe < 6 && (t.Oe += 2),
        4 == t.Je) {
            if (30 < t.Me)
                for (e = t.Qe % 10 < 5 ? t.He[0] : t.He[2],
                t.ze = t.Ge[e] + 2,
                7 < t.ze && (t.ze = 7),
                s = 2; s < t.ze; s++)
                    D.Sy7M(l + t.Ze[2 * s + 14 * e], u + t.Ze[2 * s + 1 + 14 * e], t.Pe[2 * s], t.Pe[2 * s + 1], 16752800);
            if (t.Me++,
            (0 < t.fe || t.ge) && (t.Me = 80),
            80 == t.Me)
                if (0 == t.le[t.ce[t.He[0]]] && 0 == t.le[t.ce[t.He[1]]] && 0 == t.le[t.ce[t.He[2]]] && 0 == t.le[t.ce[t.He[3]]])
                    XYSz.D(0, 1),
                    t.Me = 0,
                    i = t.je(0) || t.je(1) || t.je(2) || t.je(3) ? !t.je(0) && !t.je(1) || t.je(2) || t.je(3) ? t.je(0) || t.je(1) || !t.je(2) && t.je(3) ? 2 * t.ye(262, 2) : 2 : 0 : 2 * t.ye(261, 2),
                    t.Ge[t.He[i]] = t.Ge[t.He[i]] + 2,
                    t.Ge[t.He[i + 1]] = t.Ge[t.He[i + 1]] + 2,
                    t.Ge[t.He[2 - i]] = t.Ge[t.He[2 - i]] + 1,
                    t.Ge[t.He[2 - i + 1]] = t.Ge[t.He[2 - i + 1]] + 1,
                    6 == t.Ge[t.He[i]] && (t.Ge[t.He[i]] = 7),
                    6 == t.Ge[t.He[i + 1]] && (t.Ge[t.He[i + 1]] = 7),
                    (r = t.ve) < -1 && (r = 0),
                    t.Re[t.He[i]] = Math.floor(t.Re[t.He[i]] * (t.ye(263, 15 + 18 * t.ve) + 49 + 18 * (2 - t.ve)) / 100),
                    t.Re[t.He[i + 1]] = Math.floor(t.Re[t.He[i + 1]] * (t.ye(264, 15 + 18 * t.ve) + 49 + 18 * (2 - t.ve)) / 100);
                else {
                    for (t.H0 = 127,
                    t.Me = 0,
                    s = 0; s < 400; s++)
                        t.Ke[s] = !1;
                    for (s = 0; s < 20; s++)
                        t.$e[s] = -1;
                    t.Ge[t.He[0]] = t.Ge[t.He[0]] + 1,
                    t.Ge[t.He[1]] = t.Ge[t.He[1]] + 1,
                    t.Ge[t.He[2]] = t.Ge[t.He[2]] + 1,
                    t.Ge[t.He[3]] = t.Ge[t.He[3]] + 1
                }
        }
    }
    if (127 == t.H0) {
        if (t.Me < 4) {
            if (l = (ZcYj - 794) / 2 - 51,
            u = 126,
            t.Kt = l,
            t.$t = u,
            i = t.He[t.Me],
            t.Qe % 10 < 5)
                for (t.ze = t.Ge[i] + 1,
                7 < t.ze && (t.ze = 7),
                s = 2; s < t.ze; s++)
                    D.Sy7M(l + t.Ze[2 * s + 14 * i], u + t.Ze[2 * s + 1 + 14 * i], t.Pe[2 * s], t.Pe[2 * s + 1], 16752800);
            if (0 < t.le[t.ce[i]]) {
                l = 10,
                u = 10,
                t.Kt = l,
                t.$t = u,
                D.Dm9f(BLg_.s1[10], l, u, 0, 1 / BLg_.Mi),
                D.Dm9f(BLg_.s1[10 + t.le[t.ce[i]]], l + 159, u + 14, 0, 1 / BLg_.Mi);
                var f = T7ES.s0[t.re[t.ce[i]]].qe
                  , d = D.E9px(f);
                for (D.Dm9f(f, l + 80, u + 39, 0, 120 / d),
                s = 0; s < 8; s++)
                    if (t.Ke[s] || EviP(t, s),
                    0 < t.ts[s].attack && 0 == t.ts[s].es) {
                        if (!t.Ke[s]) {
                            t.attack = !1,
                            t.ts[s].es = 1,
                            XYSz.D(0, 1),
                            t.$e[s] = i,
                            t.Ke[s] = !0,
                            t.ts[s].s0 = T7ES.s0[t.re[t.ce[i]]],
                            t.Me++;
                            break
                        }
                        XYSz.D(2, 1)
                    }
            } else
                t.Me++,
                t.pe = 1
        }
        if (4 == t.Me && (l = 278 + (ZcYj - 794) / 2,
        u = 162,
        t.Kt = l,
        t.$t = u,
        D.Dm9f(BLg_.s1[2], l, u, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[4], l + 36, u + 17, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[5], l + 44, u + 70, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.s1[6], l + 148, u + 70, 0, 1 / BLg_.Mi),
        0 == t.pe ? D.Dm9f(BLg_.s1[7], l + 41, u + 67, 0, 1 / BLg_.Mi) : D.Dm9f(BLg_.s1[8], l + 142, u + 68, 0, 1 / BLg_.Mi),
        (t.left || t.right) && (t.pe = 1 - t.pe),
        t.attack))
            if (t.attack = !1,
            XYSz.D(0, 1),
            0 == t.pe)
                t.attack = !1,
                t.Me = 5;
            else {
                for (t.attack = !1,
                t.Me = 0,
                s = 0; s < 400; s++)
                    t.Ke[s] = !1;
                for (s = 0; s < 20; s++)
                    t.$e[s] = -1;
                NcPr()
            }
        if (5 == t.Me) {
            for (e = 0; e < 4; e++)
                if (0 == t.le[t.ce[t.He[e]]])
                    for (s = 0; s < 8; s++)
                        if (0 == t.Ke[s] && 0 == t.Ke[s + 10]) {
                            XYSz.D(0, 1),
                            t.$e[s + 10] = t.He[e],
                            t.Ke[s + 10] = !0,
                            t.ts[s + 10].s0 = T7ES.s0[t.re[t.ce[t.He[e]]]];
                            break
                        }
            for (t.H0 = 0,
            t.ss = t.Us * SvvK + SvvK - 1,
            1 == t.Ie && (t.Ce = t.ye(265, T7ES.Ue)),
            a = t.Ce,
            i = 0; i < 20; i++)
                t.Ke[i] && (t.ts[i].hs(t.ts[i].s0, 350, 0, 300),
                t.ts[i].os = 500,
                t.ts[i].ns = t.ts[i].rs = t.ts[i].ls = t.Re[t.$e[i]],
                t.ts[i].cs = t.xe[t.$e[i]],
                t.ts[i].group = t.Ns[t.$e[i]],
                t.ts[i].ds = 75,
                t.ts[i].x = Math.floor(t.ye(266, T7ES.Ae[a].w / 2) + T7ES.Ae[a].w / 4),
                t.ts[i].z = Math.floor(t.ye(267, T7ES.Ae[a]._s - T7ES.Ae[a].us) + T7ES.Ae[a].us),
                t.ts[i].y = 0,
                t.ts[i].fs = t.ts[i].x,
                t.ts[i].gs = t.ts[i].z,
                t.ts[i].ps = 0,
                t.ts[i].Ss = i);
            for (t.bs = 0,
            t.Es = 0,
            t.Fs = 0,
            t.Ls = 0,
            t.Bs = 0,
            t.Ms = 0,
            t.ys = 0,
            t.ws = 0,
            t.Ds = 0,
            t.Vs = 0,
            T7ES.Ae[t.Ce].Ts || T7ES.Ae[t.Ce].ks || T7ES.Ae[t.Ce].Is(),
            t.Cs = 1,
            t.As = 0,
            i = 20; i < 400; i++)
                t.Ke[i] || t.ts[i].vs();
            QAAV(t)
        }
    }
    if (128 == t.H0) {
        for (s = 0; s < 20; s++)
            -1 < t.$e[s] && (t.ts[s].ls <= 0 && (t.ts[s].rs = Math.floor(t.ts[s].rs / 2)),
            t.Re[t.$e[s]] = t.ts[s].rs,
            t.xe[t.$e[s]] = t.ts[s].cs,
            t.ts[s].group == t.Xs) && (t.Ge[t.$e[s]]++,
            6 == t.Ge[t.$e[s]]) && (t.Ge[t.$e[s]] = 7);
        for (-1 == t.Xs && (i = 2 * t.ye(268, 2),
        t.Ge[t.He[i]] = t.Ge[t.He[i]] + 1,
        t.Ge[t.He[i + 1]] = t.Ge[t.He[i + 1]] + 1,
        6 == t.Ge[t.He[i]] && (t.Ge[t.He[i]] = 7),
        6 == t.Ge[t.He[i + 1]]) && (t.Ge[t.He[i + 1]] = 7),
        t.H0 = 126,
        s = 0; s < 400; s++)
            t.Ke[s] = !1;
        for (s = 0; s < 20; s++)
            t.$e[s] = -1;
        NcPr()
    }
    129 == t.H0 && (t.Me < 50 && t.Me++,
    20 < t.Me) && (21 == t.Me && (XYSz.Ys(),
    XYSz.D(3, 1),
    FouV.Nt) && FouV.gi(atob("TU9ERV8yX09OXzJfQ0hBTVA=")),
    l = 10,
    u = 10,
    t.Kt = l,
    t.$t = u,
    D.Dm9f(BLg_.s1[10], l, u, 0, 1 / BLg_.Mi),
    D.Dm9f(BLg_.s1[21], l + 99, u + 12, 0, 1 / BLg_.Mi),
    D.Dm9f(BLg_.s1[10 + t.Ns[t.We]], l + 159, u + 14, 0, 1 / BLg_.Mi),
    n = T7ES.s0[t.re[t.ce[t.We]]].qe,
    f = D.E9px(n),
    D.Dm9f(n, l + 20, u + 39, 0, 120 / f),
    d = T7ES.s0[t.re[t.ce[t.We] + 1]].qe,
    n = D.E9px(d),
    D.Dm9f(d, l + 140, u + 39, 0, 120 / n),
    D.Dm9f(BLg_.s1[19], l + 13, u + 165, 0, 1 / BLg_.Mi),
    t.attack) && 50 == t.Me && (t.H0 = 10,
    QAAV(t),
    FouV.F = 0)
}
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
function Qyjb(t, s, e) {
    return t < s && s < e || e < s && s < t
}
function Z2jw(t, s, e, i, o, a, h, n, r, l, u, f) {
    let d, c, p;
    for (d = -1,
    p = 50; p < t.Zs; p++)
        if (!t.Ke[p]) {
            d = p;
            break
        }
    if ((c = -1) != d)
        for (p = 0; p < T7ES._e; p++)
            if (T7ES.s0[p].id == s) {
                c = p;
                break
            }
    -1 != d && -1 != c && (t.ts[d].hs(T7ES.s0[c], 580, -200, 300),
    t.ts[d].Ss = e,
    t.ts[d].x = a,
    t.ts[d].y = h,
    t.ts[d].z = n,
    t.ts[d].group = o,
    t.ts[d].fs = a,
    t.ts[d].ps = h,
    t.ts[d].gs = n,
    t.ts[d].xs = i,
    t.ts[d].Gs = r,
    t.ts[d].Os = l,
    t.ts[d].zs = u,
    t.ts[d].Ws = f,
    t.Ke[d] = !0)
}
class Y047 {
}
function GENs(s) {
    let e, i, o, a, h, n;
    var t, r, l;
    let u, f, d, c, p, g, y, x;
    if (203 != s.H0 && IAlU(s),
    s.Uh) {
        for (a = 1,
        i = 0; i <= s.Rh; i += s.Rh)
            for (e = 0; e < s.Rh; e++)
                n = Math.floor(s.xh[e] * a / 3),
                (h = Math.floor(s.Gh[e] * a / 3)) < 1 && 0 < n && (h = 1),
                s.Oh[e + i] = h,
                s.zh[e + i] = n - h,
                s.zh[e + i] < 0 && (s.zh[e + i] = 0);
        for (e = 0; e < s.Rh; e++)
            for (h = 0; h < T7ES._e; h++)
                T7ES.s0[h].id == s.Wh[e] && (s.Zh[e] = T7ES.s0[h]);
        s.Ph = 6,
        s.Jh = 2,
        s.Hh = 0,
        s.Uh = !1
    }
    for (u = 45 + s.Qh + (ZcYj - 794) / 2,
    s.jh[0] = s.jh[1] = 0,
    s.Kh[0] = s.Kh[1] = 0,
    200 < s.H0 && s.H0 < 210 ? (s.$h < 67 && (s.$h += 30),
    67 < s.$h && (s.$h = 67),
    f = 33 + s.$h,
    D.Dm9f(BLg_.H1[0], u, f, 0, 1 / BLg_.Mi),
    D.Dm9f(BLg_.H1[1], u, f + 400, 0, 1 / BLg_.Mi)) : (210 <= s.H0 && s.H0,
    0 < s.$h && (s.$h -= 30),
    s.$h < 0 && (s.$h = 0),
    f = 33 + s.$h,
    D.Dm9f(BLg_.H1[2], u, f, 0, 1 / BLg_.Mi)),
    s.qh[0] = u + 179,
    s.qh[1] = u + 179 + 347,
    e = 0; e < 8; e++)
        3 != s.join[e] && 13 != s.join[e] || 0 < s.ts[e].group && s.ts[e].group < 3 && (s.qh[s.ts[e].group - 1] -= 20);
    for (e = 0; e < 8; e++)
        3 != s.join[e] && 13 != s.join[e] || (x = f + 86,
        0 < s.ts[e].group && s.ts[e].group < 3 && (y = s.qh[s.ts[e].group - 1],
        s.Kt = y,
        s.qh[s.ts[e].group - 1] += 40),
        0 != s.io[e] && 1 == s.be || !(0 == s.io[e] || 200 < s.H0 && s.H0 < 210) ? D.Dm9f(BLg_.s1[1], y, x, 0, 1 / BLg_.Mi) : (r = T7ES.s0[s.eo[e]],
        D.Dm9f(r.Ee, y + r.Fe, x, 0, 1 / r.ti)),
        D.S6nY(3 == s.join[e] ? s.Le[1 + e] : s.Le[0], y + 15 - 54 + 60, x + 45 - 2 + (19 - JXAJ) / 2, "Itbg", 1 == s.ts[e].group ? D.OuCn[1] : D.OuCn[2]));
    for (e = 0; e < 2; e++)
        g = "x " + Math.floor(s.so[e] / 100) + "." + Math.floor(s.so[e] % 100 / 10),
        D.S6nY(g, u + 231 + 347 * e + 24, f + 154 + (16 - JXAJ) / 2, "Itbg", D.OuCn[0]);
    for (s.qh[0] = u + 179 - 120 - 20,
    s.qh[1] = u + 179 + 347 - 120 - 20,
    i = 0; i < 2; i++) {
        for (e = 0; e < s.Rh; e++)
            x = e < 6 ? (y = s.qh[i] + 48 * e,
            f + 215) : (y = s.qh[i] + 48 * (e - 6) + 24,
            f + 306),
            s.Kt = y,
            s.$t = x,
            e == s.Rh - 1 ? D.Dm9f(BLg_.s1[22], y, x, 0, 1 / BLg_.Mi) : e == s.Rh - 2 ? D.Dm9f(BLg_.s1[23], y, x, 0, 1 / BLg_.Mi) : (l = s.Zh[e],
            D.Dm9f(l.Ee, y + l.Fe, x, 0, 1 / l.ti)),
            D.Dm9f(BLg_.H1[3], y + 3, x + 46, 0, 1 / BLg_.Mi),
            D.Dm9f(BLg_.H1[3], y + 3, x + 64, 0, 1 / BLg_.Mi),
            0 == s.Oh[e + i * s.Rh] ? (g = "" + s.Oh[e + i * s.Rh],
            D.S6nY(g, y + 3 + 17, x + 46 + (16 - JXAJ) / 2, "Itbg", D.OuCn[1]),
            D.S6nY("--", y + 3 + 17, x + 64 + (16 - JXAJ) / 2, "Itbg", D.OuCn[1])) : (g = "" + s.Oh[e + i * s.Rh],
            D.S6nY(g, y + 3 + 17, x + 46 + (16 - JXAJ) / 2, "Itbg", D.OuCn[0]),
            g = "" + s.zh[e + i * s.Rh],
            D.S6nY(g, y + 3 + 17, x + 64 + (16 - JXAJ) / 2, "Itbg", D.OuCn[0 != s.zh[e + i * s.Rh] ? 0 : 1]));
        -1 != s.ho[i] && (0 == s.ho[i] || 6 == s.ho[i] ? (o = D.E9px(BLg_.xi[s.ho[i] + 18]) / BLg_.Mi,
        D.Dm9f(BLg_.xi[s.ho[i] + 18], u + 345 + 347 * i - o, f + 192, 0, 1 / BLg_.Mi)) : (o = D.E9px(BLg_.xi[s.ho[i] + 18]) / BLg_.Mi,
        a = D.E9px(BLg_.xi[s.oo[i] + 15]) / BLg_.Mi,
        D.Dm9f(BLg_.xi[s.ho[i] + 18], u + 345 + 347 * i - o - a, f + 192, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.xi[s.oo[i] + 15], u + 345 + 347 * i - a, f + 192, 0, 1 / BLg_.Mi)))
    }
    if (200 == s.H0) {
        if (0 < s.de ? s.Ph-- : 0 < s.R0 && s.Ph++,
        6 < s.Ph && (s.Ph = 0),
        s.Ph < 0 && (s.Ph = 6),
        0 == s.Ph && (UH3n(s, u + 80 + 347 * s.Hh, f + 150, 208, 25),
        (s.right || s.left) && (s.Hh = 1 - s.Hh),
        0 < s.attack && (s.so[s.Hh] += 50,
        300 < s.so[s.Hh]) && (s.so[s.Hh] = 100),
        0 < s.fe) && (s.so[s.Hh] -= 50,
        s.so[s.Hh] < 100) && (s.so[s.Hh] = 300),
        0 < s.Ph && s.Ph < 5 && (i = 2 < s.Ph ? 4 : 5,
        0 < s.right && (s.Jh++,
        s.Jh > i) && (s.Jh = 0,
        s.Hh = 1 - s.Hh),
        0 < s.left && (s.Jh > i && (s.Jh = i),
        s.Jh--,
        s.Jh < 0) && (s.Jh = i,
        s.Hh = 1 - s.Hh),
        (0 < s.attack || 0 < s.fe || 0 < s.ah) && (s.ho[s.Hh] = -1,
        s.oo[s.Hh] = -1,
        lim0 = 0,
        c = -1,
        p = -1,
        1 == s.Ph && (c = s.Jh + s.Hh * s.Rh,
        lim = 10),
        2 == s.Ph && (p = s.Jh + s.Hh * s.Rh,
        lim = 30),
        3 == s.Ph && (c = s.Jh < 4 ? s.Jh + 6 + s.Hh * s.Rh : 10 + s.Hh * s.Rh,
        lim = 10),
        4 == s.Ph && (p = s.Jh + 6 + s.Hh * s.Rh,
        p = s.Jh < 4 ? s.Jh + 6 + s.Hh * s.Rh : 10 + s.Hh * s.Rh,
        lim = 30),
        0 < s.attack && 0 <= c && s.Oh[c]++,
        0 < s.attack && 0 <= p && s.zh[p]++,
        0 < s.ah && (0 <= c && (s.Oh[c] += 5),
        s.Oh[c] > lim && s.Oh[c] < lim + 5 && (s.Oh[c] = lim),
        0 <= p && (s.zh[p] += 5),
        s.zh[p] > lim) && s.zh[p] < lim + 5 && (s.zh[p] = lim),
        s.fe && 0 <= c && s.Oh[c]--,
        s.fe && 0 <= p && s.zh[p]--,
        0 <= c ? (s.Oh[c] < lim0 && (s.Oh[c] = lim),
        s.Oh[c] > lim && (s.Oh[c] = lim0)) : (s.zh[p] < lim0 && (s.zh[p] = lim),
        s.zh[p] > lim && (s.zh[p] = lim0))),
        (e = s.Jh) > i && (e = i),
        s.Ph < 3 ? (y = u + 347 * s.Hh + 48 * e + 39,
        x = f + 215,
        s.Kt = y,
        s.$t = x,
        UH3n(s, y + 3, x + 46 + 18 * (s.Ph - 1), 34, 16)) : (y = u + 347 * s.Hh + 48 * e + 24 + 39,
        x = f + 306,
        s.Kt = y,
        s.$t = x,
        UH3n(s, y + 3, x + 46 + 18 * (s.Ph - 3), 34, 16))),
        5 == s.Ph && (UH3n(s, u + 43 + 347 * s.Hh, f + 396, 272, 25),
        (s.right || s.left) && (s.Hh = 1 - s.Hh),
        0 < s.attack)) {
            for (XYSz.D(0, 1),
            s.H0 = 210,
            s.ao = 10,
            s.attack = 0,
            e = 0; e < 2 * s.Rh; e++)
                s.no[e] = s.Oh[e],
                s.ro[e] = s.zh[e];
            s.lo = s.co[s.Hh],
            s.do = s._o[s.Hh]
        }
        6 == s.Ph && (UH3n(s, u + 301, f + 441, 106, 24),
        0 < s.attack && (s.H0 = 202,
        s.uo = 2,
        s.attack = 0,
        XYSz.D(0, 1)),
        0 < s.left ? (s.Ph--,
        s.Hh = 0) : 0 < s.right && (s.Ph--,
        s.Hh = 1),
        0 < s.fe) && (s.H0 = 3,
        s.fo = 0)
    }
    if (201 == s.H0) {
        for (2 == s.be && (s.be = 1),
        o = 0; o < 8; o++)
            if (1 == s.io[o]) {
                for (s.we = 0,
                a = 1; a < T7ES._e; a++) {
                    for (s.De = 0,
                    zz = 0; zz < 8; zz++)
                        s.eo[zz] == a && (s.De = 1);
                    0 == T7ES.s0[a].type && 0 == s.De && T7ES.s0[a].id < 30 && (s.Ve[s.we] = a,
                    s.we++)
                }
                s.eo[o] = s.Ve[s.ye(290, s.we)],
                s.ts[o].s0 = T7ES.s0[s.eo[o]]
            }
        s.H0 = 202,
        s.uo = 2
    }
    if (210 <= s.H0 && s.H0 < 220) {
        let t = 226 - (ZcYj - 794) / 2;
        if (t < 0 && (t = 0),
        y = 0 == s.Hh ? (s.Qh < t && (s.Qh += s.mo),
        s.Qh > t && (s.Qh = t),
        s.Qh - 216 + (ZcYj - 794) / 2) : (s.Qh > -t && (s.Qh -= s.mo),
        s.Qh < -t && (s.Qh = -t),
        s.Qh + 759 + (ZcYj - 794) / 2),
        s.Kt = y,
        x = 65,
        s.$t = x,
        D.Dm9f(BLg_.Q1, y, x, 0, 1 / BLg_.Mi),
        s.fe) {
            for (e = 0; e < 2 * s.Rh; e++)
                s.Oh[e] = s.no[e],
                s.zh[e] = s.ro[e];
            s.co[s.Hh] = s.lo,
            s._o[s.Hh] = s.do,
            s.H0 = 200
        }
        if (-1 != s.co[s.Hh] && UH3n2(s, y + 44 + 2, 2 + x + 79 + 22 * s.co[s.Hh] + 22, 161, 19),
        -1 != s._o[s.Hh] && UH3n2(s, 2 + y + 44, 2 + x + 237 + 22 * s._o[s.Hh], 161, 19),
        0 <= s.ao && s.ao < 10) {
            if (0 <= s.ao && s.ao < 5) {
                if (UH3n(s, y + 44, x + 79 + 22 * s.ao, 165, 23),
                0 < s.attack) {
                    if (0 < s.ao && s.ao < 4) {
                        for (s.co[s.Hh] = s.ao - 1,
                        -1 == s._o[s.Hh] && (s._o[s.Hh] = 0),
                        a = s.co[s.Hh] + 1,
                        i = s.Hh * s.Rh,
                        o = s._o[s.Hh] * s.Rh,
                        e = 0; e < s.Rh; e++)
                            n = Math.floor(s.xh[e + o] * a / 3),
                            (h = Math.floor(s.Gh[e + o] * a / 3)) < 1 && 0 < n && (h = 1),
                            s.Oh[e + i] = h,
                            s.zh[e + i] = n - h,
                            s.zh[e + i] < 0 && (s.zh[e + i] = 0);
                        s.oo[s.Hh] = s.ao - 1,
                        s.ho[s.Hh] = s._o[s.Hh] + 1
                    }
                    if (0 == s.ao) {
                        for (s.co[s.Hh] = -1,
                        s._o[s.Hh] = -1,
                        i = s.Hh * s.Rh,
                        e = 0; e < s.Rh; e++)
                            s.Oh[e + i] = 0,
                            s.zh[e + i] = 0;
                        s.ho[s.Hh] = 0
                    }
                    if (4 == s.ao) {
                        for (s.co[s.Hh] = -1,
                        s._o[s.Hh] = -1,
                        i = s.Hh * s.Rh,
                        e = 0; e < s.Rh; e++)
                            s.Oh[e + i] = 2,
                            s.zh[e + i] = 30;
                        s.Oh[7 + i] = 1,
                        s.zh[7 + i] = 15,
                        s.Oh[9 + i] = 3,
                        s.Oh[10 + i] = 3,
                        s.ho[s.Hh] = 6
                    }
                }
            } else if (5 <= s.ao && s.ao < 10 && (UH3n(s, y + 44, x + 237 + 22 * (s.ao - 5), 165, 23),
            0 < s.attack))
                for (-1 == s.co[s.Hh] && (s.co[s.Hh] = 0),
                s.ho[s.Hh] = s.ao - 4,
                s.oo[s.Hh] = s.co[s.Hh],
                s._o[s.Hh] = s.ao - 5,
                a = s.co[s.Hh] + 1,
                i = s.Hh * s.Rh,
                o = s._o[s.Hh] * s.Rh,
                e = 0; e < s.Rh; e++)
                    n = Math.floor(s.xh[e + o] * a / 3),
                    (h = Math.floor(s.Gh[e + o] * a / 3)) < 1 && 0 < n && (h = 1),
                    s.Oh[e + i] = h,
                    s.zh[e + i] = n - h,
                    s.zh[e + i] < 0 && (s.zh[e + i] = 0);
            0 < s.de && s.ao--,
            0 < s.R0 && s.ao++,
            s.ao < 0 && (s.ao = 10)
        } else if (10 == s.ao)
            UH3n(s, y + 22, x + 368, 83, 24),
            0 < s.right && s.ao++,
            0 < s.de && s.ao--,
            0 < s.R0 && (s.ao = 0),
            0 < s.attack && (s.H0 = 200);
        else if (11 == s.ao && (UH3n(s, y + 122, x + 368, 106, 24),
        0 < s.de && (s.ao -= 2),
        0 < s.R0 && (s.ao = 0),
        0 < s.left && s.ao--,
        0 < s.attack)) {
            for (e = 0; e < 2 * s.Rh; e++)
                s.Oh[e] = s.no[e],
                s.zh[e] = s.ro[e];
            s.H0 = 200,
            s.attack = 0,
            XYSz.D(2, 1)
        }
    } else
        0 < s.Qh ? (s.Qh -= s.mo,
        s.Qh < 0 && (s.Qh = 0)) : s.Qh < 0 && (s.Qh += s.mo,
        0 < s.Qh) && (s.Qh = 0);
    if (203 == s.H0 && FouV.di && SplitScreenMenu(),
    202 == s.H0)
        if (s.Te(),
        y = 3,
        x = 3,
        s.Kt = y,
        s.$t = x,
        1 < s.po && FouV.di ? D.Dm9f(BLg_.W1, y, x, 0, 1 / BLg_.ie) : (D.Dm9f(BLg_.e1[8], y, x, 0, 1 / BLg_.Mi),
        D.Dm9f(BLg_.e1[15], y, x + 156, 0, 1 / BLg_.Mi)),
        0 == s.uo && D.Dm9f(BLg_.e1[9], y + 89, x + 13, 0, 1 / BLg_.Mi),
        1 == s.uo && D.Dm9f(BLg_.e1[10], y + 61, x + 36, 0, 1 / BLg_.Mi),
        2 == s.uo && D.Dm9f(BLg_.e1[11], y + 71 / 3, x + 61, 0, 1 / BLg_.Mi),
        0 < s.be && D.Dm9f(BLg_.e1[52], y + 776 / 3, x + 60, 0, 1 / BLg_.Mi),
        3 == s.uo && D.Dm9f(BLg_.e1[12], y + 12, x + 84, 0, 1 / BLg_.Mi),
        4 == s.uo && D.Dm9f(BLg_.e1[13], y + 34, x + 108, 0, 1 / BLg_.Mi),
        5 == s.uo && D.Dm9f(BLg_.e1[14], y + 98, x + 134, 0, 1 / BLg_.Mi),
        1 < s.po && FouV.di ? (5 == s.uo && D.Dm9f(BLg_.Z1, y + 10, x + 132, 0, 1 / BLg_.Mi),
        6 == s.uo && D.Dm9f(BLg_.e1[14], y + 98, x + 158, 0, 1 / BLg_.Mi),
        D.S6nY(Sh7E.So ? "Yes" : "No", y + 183 + 54, x + 136 + (16 - JXAJ) / 2, "Itbg", D.OuCn[0])) : 5 == s.uo && D.Dm9f(BLg_.e1[14], y + 98, x + 134, 0, 1 / BLg_.Mi),
        1 == s.Ie && (s.Ce = 100),
        D.S6nY(100 == s.Ce ? "Random" : T7ES.Ae[s.Ce].name.replaceAll("_", " "), y + 167 + 61, x + 88 + (16 - JXAJ) / 2, "Itbg", D.OuCn[0]),
        D.S6nY(2 == s.ve ? "Easy" : 1 == s.ve ? "Normal" : (s.ve,
        "Difficult"), y + 167 + 45, x + 112 + (16 - JXAJ) / 2, "Itbg", D.OuCn[0]),
        0 < s.de && (s.uo--,
        s.uo < 0) && (s.uo = 1 < s.po && FouV.di ? 6 : 5),
        0 < s.R0 && (s.uo = (s.uo + 1) % (1 < s.po && FouV.di ? 7 : 6)),
        -1 == s.ve && (s.ve = 0),
        3 == s.uo && (0 < s.attack || 0 < s.right ? (s.Ie = 0,
        s.attack = 0,
        s.right = 0,
        100 == s.Ce ? s.Ce = 0 : (s.Ce++,
        s.Ce == T7ES.Ue && (s.Ce = 100,
        s.Ie = 1))) : 0 < s.left && (s.Ie = 0,
        s.left = 0,
        100 == s.Ce ? s.Ce = T7ES.Ue - 1 : (s.Ce--,
        -1 == s.Ce && (s.Ce = 100,
        s.Ie = 1)))),
        4 == s.uo && ((0 < s.attack || 0 < s.right) && (s.attack = 0,
        s.right = 0,
        s.ve--,
        s.ve < 0) && (s.ve = 2),
        0 < s.left) && (s.left = 0,
        s.ve++,
        2 < s.ve) && (s.ve = 0),
        2 == s.uo && (0 < s.right ? (s.right = 0) < s.be ? s.be = 0 : s.be = 1 : 0 < s.left && ((s.left = 0) < s.be ? s.be = 0 : s.be = 1)),
        0 < s.fe)
            s.H0 = 200;
        else if (0 < s.attack) {
            for (e = 0; e < 2 * s.Rh; e++)
                0 < s.Oh[e] ? s.bo[e] = s.Oh[e] + s.zh[e] : s.bo[e] = 0,
                s.Eo[e] = s.Oh[e];
            if (s.attack = 0,
            XYSz.D(1, 1),
            0 == s.uo) {
                for (1 == s.be && (s.be = 2),
                Sh7E.Fo = 1 < s.po && FouV.di && Sh7E.So,
                s.Lo(),
                s.Bo = 0,
                s.bh = 0,
                s.H0 = 0,
                o = 0; o < 400; o++)
                    s.Ke[o] = !1;
                for (1 == s.Ie && (s.Ce = s.ye(291, T7ES.Ue)),
                t = s.Ce,
                o = 0; o < 400; o++)
                    s.Ke[o] && 0 == s.ts[o].group && (s.ts[o].group = o + 10);
                for (s.bs = 0,
                s.Es = 0,
                s.Fs = 0,
                s.Ls = 0,
                s.Bs = 0,
                s.Ms = 0,
                s.ys = 0,
                s.ws = 0,
                s.Ds = 0,
                s.Vs = 0,
                T7ES.Ae[s.Ce].Ts || T7ES.Ae[s.Ce].ks || T7ES.Ae[s.Ce].Is(),
                o = 0; o < 8; o++)
                    10 < s.join[o] ? (d = s.ts[o].group,
                    s.ts[10 + o].hs(s.ts[o].s0, 350, 0, 300),
                    s.ts[10 + o].group = d,
                    s.ts[10 + o].Mo = d,
                    s.Ke[10 + o] = !0,
                    s.ts[10 + o].ds = 75,
                    1 == s.ts[10 + o].group ? s.ts[10 + o].x = 100 : s.ts[10 + o].x = T7ES.Ae[t].w - 100,
                    s.ts[10 + o].z = s.ye(293, T7ES.Ae[t]._s - T7ES.Ae[t].us) + T7ES.Ae[t].us,
                    s.ts[10 + o].fs = s.ts[10 + o].x,
                    s.ts[10 + o].gs = s.ts[10 + o].z,
                    s.ts[10 + o].os = 200,
                    1 == s.$s && (s.ts[10 + o].os = 500),
                    s.ts[10 + o].Ss = 10 + o,
                    s.ts[10 + o].yo = s.so[s.ts[10 + o].group - 1]) : 0 < s.join[o] && (d = s.ts[o].group,
                    s.ts[o].hs(s.ts[o].s0, 400, -50, 300),
                    s.ts[o].group = d,
                    s.ts[o].Mo = d,
                    s.Ke[o] = !0,
                    s.ts[o].ds = 75,
                    1 == s.ts[o].group ? s.ts[o].x = 100 : s.ts[o].x = T7ES.Ae[t].w - 100,
                    s.ts[o].z = s.ye(295, T7ES.Ae[t]._s - T7ES.Ae[t].us) + T7ES.Ae[t].us,
                    s.ts[o].y = 0,
                    s.ts[o].fs = s.ts[o].x,
                    s.ts[o].gs = s.ts[o].z,
                    s.ts[o].ps = 0,
                    s.ts[o].os = 200,
                    1 == s.$s && (s.ts[o].os = 500),
                    s.ts[o].Ss = o,
                    s.ts[o].yo = s.so[s.ts[o].group - 1]);
                for (s.Cs = 1,
                s.As = 0,
                s.wo = 0,
                s.Ti(),
                o = 20; o < 400; o++)
                    s.Ke[o] || s.ts[o].vs();
                QAAV(s)
            } else
                1 == s.uo ? (s.fo = 0,
                s.H0 = 3,
                s.Ce = 100,
                s.Ie = 1) : 2 == s.uo ? s.H0 = 201 : 1 < s.po && FouV.di && 5 == s.uo ? (s.H0 = 203,
                XYSz.D(1, 1)) : s.uo == (1 < s.po && FouV.di ? 6 : 5) && (s.H0 = 10,
                QAAV(s),
                FouV.F = 0)
        }
    (0 < s.attack || 0 < s.ah) && XYSz.D(0, 1),
    0 < s.fe && XYSz.D(2, 1)
}
function UH3n(t, s, e, i, o) {
    UH3n2(t, s, e, i, o, t.Qe % 10 < 5 ? 16777215 : 5217279)
}
function UH3n2(t, s, e, i, o, a=16777215) {
    D.VfDU(s, e, i, o, a, 2)
}
class OWAt {
}
function QBes(t) {
    let s, e, i, o, a, h, n;
    for (s = 0; s < 22; s++)
        t.Do[s] = 0;
    for (s = 0; s < 2; s++)
        t.Vo[s] = 0,
        t.To[s] = 0,
        t.ko[s] = 0;
    for (s = 0; s < 400; s++)
        if (t.Ke[s]) {
            if (0 < t.ts[s].Mo && t.ts[s].Mo < 3 && 20 <= s && (i = t.ts[s].Mo - 1,
            30 <= (e = t.ts[s].s0.id) && e < 40 && 38 != e || 122 == e || 123 == e))
                for (o = 0; o < t.Rh; o++)
                    t.Wh[o] == e && t.Do[o + t.Rh * i]++;
            0 == t.ts[s].s0.type && 0 < t.ts[s].ls && (1 == t.ts[s].group ? (t.Vo[0]++,
            t.To[0] += t.ts[s].ls) : (t.Vo[1]++,
            t.To[1] += t.ts[s].ls))
        }
    for (i = 0; i <= t.Rh; i += t.Rh)
        for (o = 0; o < t.Rh; o++)
            if (0 < t.bo[o + i] && t.Eo[o + i] > t.Do[o + i])
                for (s = 20; s < 400; s++)
                    if (!t.Ke[s]) {
                        for (e = 0; e < T7ES._e; e++)
                            if (T7ES.s0[e].id == t.Wh[o]) {
                                t.Ke[s] = !0,
                                t.ts[s].hs(T7ES.s0[e], 350, 0, 300),
                                t.ts[s].z = t.ye(296, T7ES.Ae[t.Ce]._s - T7ES.Ae[t.Ce].us) + T7ES.Ae[t.Ce].us,
                                0 == i ? 0 == t.ts[s].s0.type ? t.ts[s].x = -100 : t.ts[s].x = 50 : 0 == t.ts[s].s0.type ? t.ts[s].x = T7ES.Ae[t.Ce].w + 100 : t.ts[s].x = T7ES.Ae[t.Ce].w - 50,
                                t.ts[s].fs = t.ts[s].x,
                                t.ts[s].gs = t.ts[s].z,
                                h = 500,
                                a = t.Wh[o],
                                0 == i && 0 == t.ts[s].s0.type && (t.ts[s].Io = 140,
                                37 == a) && (t.ts[s].Io = 84),
                                36 == a && (h = 250),
                                37 != a && 35 != a && 32 != a || (h = 200),
                                39 != a && 33 != a || (h = 150),
                                34 == a && (h = 100),
                                31 != a && 30 != a || (h = 50),
                                122 == a && (h = 200),
                                t.ts[s].os = 500,
                                t.ts[s].ns = t.ts[s].ls = t.ts[s].rs = h,
                                t.ts[s].Ss = s,
                                0 == t.ts[s].s0.type || 5 == t.ts[s].s0.type ? (t.ts[s].ds = 20,
                                t.ts[s].x > Math.floor(T7ES.Ae[t.Ce].w / 2) ? t.ts[s].Ws = 1 : t.ts[s].Ws = 0,
                                t.ts[s].group = Math.floor(i / t.Rh) + 1,
                                t.ts[s].Mo = Math.floor(i / t.Rh) + 1,
                                t.ts[s].y = -300,
                                t.ts[s].ps = t.ts[s].y,
                                t.ts[s].Os = 0) : (t.ts[s].ds = 0,
                                t.ts[s].group = 0,
                                t.ts[s].Mo = Math.floor(i / t.Rh) + 1,
                                t.ts[s].y = -300,
                                t.ts[s].ps = t.ts[s].y),
                                t.bo[o + i]--;
                                break
                            }
                        break
                    }
    for (s = 0,
    i = 0; i < 2; i++) {
        for (o = 0; o < t.Rh - 2; o++)
            t.ko[i] += t.bo[o + s];
        s += t.Rh
    }
    t.Co = 1,
    0 < t.ko[0] && 0 < t.ko[1] && (t.Co = 0),
    0 < t.Vo[0] && 0 < t.Vo[1] && (t.Co = 0),
    n = `Man: ${t.Vo[0]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HP: ${t.To[0]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reserve: ${t.ko[0]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Die: ` + t.jh[0],
    D.VLeA(n, 5, 531 + (19 - JXAJ) / 2, "OkQn", "#AFAFFF"),
    n = `Man: ${t.Vo[1]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HP: ${t.To[1]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reserve: ${t.ko[1]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Die: ` + t.jh[1],
    D.VLeA(n, ZcYj - 5, 531 + (19 - JXAJ) / 2, "KrcT", "#FFAAAA"),
    n = "",
    (e = 0) == t.ho[e] ? n = "Zero" : 1 == t.ho[e] ? n = "Balanced" : 2 == t.ho[e] ? n = "Inferior" : 3 == t.ho[e] ? n = "Ranged attack" : 4 == t.ho[e] ? n = "Melee attack" : 5 == t.ho[e] ? n = "Giant" : 6 == t.ho[e] && (n = "Full"),
    0 < t.ho[e] && t.ho[e] < 6 && (0 == t.oo[e] && (n += "(S)"),
    1 == t.oo[e] && (n += "(M)"),
    2 == t.oo[e]) && (n += "(L)"),
    100 != t.so[e] && (-1 != t.ho[e] && (n += "    "),
    n += "Defense: " + Math.floor(t.so[e] / 100) + "." + Math.floor(t.so[e] % 100 / 10)),
    D.VLeA(n, 5, 514 + (19 - JXAJ) / 2, "OkQn", "#AFAFFF"),
    n = "",
    e = 1,
    0 == t.ho[e] ? n = "Zero" : 1 == t.ho[e] ? n = "Balanced" : 2 == t.ho[e] ? n = "Inferior" : 3 == t.ho[e] ? n = "Ranged attack" : 4 == t.ho[e] ? n = "Melee attack" : 5 == t.ho[e] ? n = "Giant" : 6 == t.ho[e] && (n = "Full"),
    0 < t.ho[e] && t.ho[e] < 6 && (0 == t.oo[e] && (n += "(S)"),
    1 == t.oo[e] && (n += "(M)"),
    2 == t.oo[e]) && (n += "(L)"),
    100 != t.so[e] && (-1 != t.ho[e] && (n += "    "),
    n += "Defense: " + Math.floor(t.so[e] / 100) + "." + Math.floor(t.so[e] % 100 / 10)),
    D.VLeA(n, ZcYj - 5, 514 + (19 - JXAJ) / 2, "KrcT", "#FFAAAA")
}
class JKW0 {
}
function ChAz(e) {
    let i, o, a, h, t, n;
    for (i = 0; i < 5; i++)
        e.Ao[i] = 0;
    if (e.vo = -1,
    e.Xo = 0,
    e.Yo = 0,
    e.No = 0,
    e.Uo = 0,
    e.Ro = 0,
    e.xo = 0,
    e.Go = e.fo,
    3 == e.H0) {
        for (NcPr(),
        i = 0; i < 8; i++)
            e.join[i] = 0,
            e.Oo[i] = !1,
            e.eo[i] = -1,
            e.Oo[i] = !0;
        if (1 == e.$s)
            for (i = 0; i < 20; i++)
                e.ts[i].group = 1;
        if (4 == e.$s) {
            for (i = 0; i < 4; i++)
                e.ts[i].group = e.ts[i + 10].group = 1;
            for (i = 4; i < 8; i++)
                e.ts[i].group = e.ts[i + 10].group = 2
        }
        e.Go = 0,
        e.fo = 0,
        e.H0 = 1
    } else if (2 == e.H0)
        e.Go = 0,
        e.fo = 3,
        e.H0 = 1,
        2 == e.be && CHARMENU_reset_random(e);
    else {
        for (i = 0; i < e.Zs; i++)
            (e.ts[i].group < 0 || 4 < e.ts[i].group) && (e.ts[i].group = 0);
        if (e.px = (ZcYj - 705) / 2,
        e.Yo = 33,
        D.Dm9f(BLg_.U1, e.px, e.Yo, 0, 1 / BLg_.Mi),
        0 == e.fo)
            for (i = 0; i < 8; i++)
                0 == e.join[i] && e.xo++;
        else
            e.xo = -1;
        for (i = 0; i < 8; i++)
            0 == e.join[i] && e.No++;
        for (i = 0; i < 8; i++) {
            var r = Math.floor(i / 4)
              , l = FouV.si && (3 == FouV.ai && (0 == i || 1 == i || 3 == i) || 2 == FouV.ai && (0 == i || 1 == i) || 1 == FouV.ai && 0 == i);
            if (0 < e.join[i] ? e.join[i] < 11 ? ZX3_(e, i, e.vi[i], "#FFFFFF") : ZX3_(e, i, "Computer", "#FF9B9B") : 0 == e.fo ? 8 == e.No && !e.zo && i % 4 < 3 || ZX3_(e, i, "Join?", D.Vfm2(25 + e.Wo % 6 * 30, 70 + e.Wo % 6 * 30, 255)) : ZX3_(e, i, "----", "#FFFFFF"),
            0 == e.join[i] && 0 == e.fo)
                if (EviP(e, i),
                IAlU(e),
                45 == e.Zo ? e.Qe % 5 < 3 ? D.Dm9f(BLg_.R1, 107 + i % 4 * 153 + e.px, 61 + 212 * r + 26 + e.Yo, 0, 1 / BLg_.ie) : D.Dm9f(BLg_.G1, 107 + i % 4 * 153 + e.px, 61 + 212 * r + 26 + e.Yo, 0, 1 / BLg_.ie) : 0 <= e.Zo && D.Dm9f(BLg_.cm[Math.floor(e.Zo / 15)], 141 + i % 4 * 153 + e.px, 61 + 212 * r + 31 + e.Yo, 0, 1 / BLg_.ie),
                0 < e.ts[i].attack || l)
                    e.Oo[i] && !l || 0 != e.Po || (e.join[i] = 1,
                    XYSz.D(0, 1)),
                    e.Oo[i] = !0;
                else {
                    if ((e.fe || e.ge) && 8 == e.xo) {
                        XYSz.D(2, 1),
                        e.H0 = 10,
                        QAAV(e);
                        break
                    }
                    e.Oo[i] = !1
                }
            if (1 == e.join[i]) {
                if (0 <= e.eo[i] && !e.ue(e.eo[i], e.ts[i].Jo) && (e.eo[i] = -1),
                0 <= e.eo[i] ? (Jsh0(e, i, e.ts[i].s0.qe),
                Y2UB(e, i, e.ts[i].s0.name, e.me(), e.ts[i].s0.Ho)) : (D.Dm9f(BLg_.N1, 107 + i % 4 * 153 + e.px, 61 + 212 * r + e.Yo, 0, 1 / BLg_.ie),
                Y2UB(e, i, "Random", e.me(), 100)),
                0 < e.ts[i].right) {
                    if (!e.Oo[i])
                        for (; e.eo[i]++,
                        e.eo[i] >= T7ES._e && (e.eo[i] = -1),
                        -1 != e.eo[i]; )
                            if (e.ue(e.eo[i], e.ts[i].Jo)) {
                                e.ts[i].s0 = T7ES.s0[e.eo[i]];
                                break
                            }
                    e.Oo[i] = !0
                } else if (0 < e.ts[i].left) {
                    if (!e.Oo[i])
                        for (; e.eo[i]--,
                        -1 != e.eo[i]; )
                            if (e.eo[i] < -1 && (e.eo[i] = T7ES._e - 1),
                            e.ue(e.eo[i], e.ts[i].Jo)) {
                                e.ts[i].s0 = T7ES.s0[e.eo[i]];
                                break
                            }
                    e.Oo[i] = !0
                } else
                    0 < e.ts[i].de ? (e.Oo[i] || (e.eo[i] = -1),
                    e.Oo[i] = !0) : 0 < e.ts[i].attack || l ? (e.Oo[i] && !l || (XYSz.D(0, 1),
                    1 == e.$s ? e.join[i] = 3 : e.join[i] = 2),
                    e.Oo[i] = !0) : 0 < e.ts[i].fe || 0 < e.ts[i].Qo ? ((!e.Oo[i] || 0 < e.ts[i].Qo) && (XYSz.D(2, 1),
                    e.join[i] = 0,
                    OHwl(i)),
                    e.Oo[i] = !0) : e.Oo[i] = !1;
                e.eo[i] < 0 ? e.io[i] = 1 : e.io[i] = 0
            }
            if (2 == e.join[i]) {
                let t = e.jo = 0, s;
                for (s = 0; s < 8; s++)
                    3 == e.join[s] && t++;
                if (7 == t && (e.jo = 1),
                e.vo = -1,
                1 == e.jo && (0 == e.$s || 4 == e.$s))
                    for (o = 0; o < 8; o++)
                        e.join[o] % 10 == 3 && o != i && (0 == e.ts[o].group ? e.vo = -2 : -1 == e.vo ? e.vo = e.ts[o].group : 0 <= e.vo && e.ts[o].group != e.vo && (e.vo = -2));
                for (0 <= e.eo[i] ? (Jsh0(e, i, e.ts[i].s0.qe),
                Y2UB(e, i, e.ts[i].s0.name, "#FFFFFF", e.ts[i].s0.Ho)) : (D.Dm9f(BLg_.N1, 107 + i % 4 * 153 + e.px, 61 + 212 * r + e.Yo, 0, 1 / BLg_.ie),
                Y2UB(e, i, "Random", "#FFFFFF", 100)); e.ts[i].group == e.vo || 4 == e.$s && (0 == e.ts[i].group || 2 < e.ts[i].group); )
                    e.ts[i].group = (e.ts[i].group + 1) % 5;
                if (SEnK(e, i, e.me()),
                0 < e.ts[i].de)
                    e.Oo[i] || (e.ts[i].group = 0),
                    e.Oo[i] = !0;
                else if (0 < e.ts[i].right) {
                    if (!e.Oo[i])
                        for (e.ts[i].group = (e.ts[i].group + 1) % 5; e.ts[i].group == e.vo || 4 == e.$s && (0 == e.ts[i].group || 2 < e.ts[i].group); )
                            e.ts[i].group = (e.ts[i].group + 1) % 5;
                    e.Oo[i] = !0
                } else if (0 < e.ts[i].left) {
                    if (!e.Oo[i])
                        for (e.ts[i].group--,
                        e.ts[i].group < 0 && (e.ts[i].group = 4); e.ts[i].group == e.vo || 4 == e.$s && (0 == e.ts[i].group || 2 < e.ts[i].group); )
                            e.ts[i].group--,
                            e.ts[i].group < 0 && (e.ts[i].group = 4);
                    e.Oo[i] = !0
                } else
                    0 < e.ts[i].attack || l ? (l && "vs" == FouV.hi && (e.ts[i].group = 0),
                    e.Oo[i] && !l || (XYSz.D(0, 1),
                    e.join[i] = 3),
                    e.Oo[i] = !0) : 0 < e.ts[i].fe || 0 < e.ts[i].Qo ? ((!e.Oo[i] || 0 < e.ts[i].Qo) && (e.join[i] = 1,
                    XYSz.D(2, 1)),
                    e.Oo[i] = !0) : e.Oo[i] = !1
            }
            3 == e.join[i] && (0 <= e.eo[i] ? (Jsh0(e, i, e.ts[i].s0.qe),
            Y2UB(e, i, e.ts[i].s0.name, "#FFFFFF", e.ts[i].s0.Ho)) : (Jsh0(e, i, BLg_.N1),
            Y2UB(e, i, "Random", "#FFFFFF", 100)),
            SEnK(e, i, "#FFFFFF"),
            0 == e.fo) && (0 < e.ts[i].fe && 0 == e.fo && 45 == e.Zo ? (e.Oo[i] || (1 == e.$s ? e.join[i] = 1 : e.join[i] = 2,
            XYSz.D(2, 1)),
            e.Oo[i] = !0) : 0 < e.ts[i].fe && e.Zo < 150 ? (e.Oo[i] || (e.Xo = 1),
            e.Oo[i] = !0) : e.Oo[i] = !1),
            3 == e.join[i] ? (e.Ke[i] = !0,
            e.Ro++) : e.Ke[i] = !1,
            0 != e.join[i] && 3 != e.join[i] || e.Uo++
        }
        if (0 < e.Ro && 8 == e.Uo ? (e.Zo--,
        (0 < e.Xo || FouV.si) && (e.Zo -= 25),
        8 == e.Ro && (e.Zo = 0)) : e.Zo = 45,
        8 != e.No || e.zo ? e.zo = !0 : ("en" == e.Ko ? D.Dm9f(BLg_.Gi[14], 842 / 3, 190, 0, 1 / BLg_.Mi) : D.Dm9f(BLg_.Gi[13], 842 / 3, 190, 0, 1 / BLg_.Mi),
        0 < e.left && (e.Ko = "en"),
        0 < e.right && (e.Ko = "ch")),
        e.Po = e.fo,
        4 == e.fo && FouV.di && MVtz(e),
        1 == e.fo) {
            e.$o = 0;
            var u = 218 + (ZcYj - 794) / 2;
            for (D.Dm9f(BLg_.O1, u, 10, 0, 1 / BLg_.ie),
            i = 0; i < 5; i++)
                e.qo[i] = 0;
            for (e.ta = 0,
            i = 0; i < 8; i++)
                e.Ke[i] ? 0 != e.ts[i].group && 0 != e.qo[e.ts[i].group] || e.qo[e.ts[i].group]++ : e.ta++;
            0 == e.ta && (e.fo = 3),
            e.qo[0] + (e.qo[1] + e.qo[2] + e.qo[3] + e.qo[4]) < 2 && 1 != e.$s ? e.ia = 1 : e.ia = 0,
            (-100 == e.ea || e.ea < e.ia || e.ea > e.ta) && (e.ea = e.ia);
            let t = 0
              , s = 0;
            for (i = 0; i < 8; i++)
                if (e.Ke[i])
                    if (e.ts[i].right || FouV.si && FouV.ni > e.ea)
                        0 != t || e.Oo[i] || 1 != e.Go || (e.ea++,
                        e.ea > e.ta && (e.ea = e.ia)),
                        e.Oo[i] = !0,
                        t = 1;
                    else if (0 == s && (e.ts[i].left || FouV.si && FouV.ni < e.ea))
                        e.Oo[i] || 1 != e.Go || (e.ea--,
                        e.ea < e.ia && (e.ea = e.ta)),
                        e.Oo[i] = !0,
                        s = 1;
                    else if (e.ts[i].attack || 2 == e.$s || 3 == e.$s || FouV.si && e.ea == FouV.ni) {
                        if (2 != e.$s && 3 != e.$s || (e.ea = e.ta,
                        e.Oo[i] = !1),
                        !e.Oo[i] && 1 == e.Go) {
                            if (2 != e.$s && 3 != e.$s && XYSz.D(1, 1),
                            e.fo = 2e3,
                            0 == e.ea) {
                                for (e.fo = 3,
                                e.sa = 0,
                                e.ha = 3,
                                2 == e.be && (e.be = 1),
                                a = 0; a < 8; a++)
                                    e.eo[a] < 0 ? e.io[a] = 1 : e.io[a] = 0;
                                for (h = 0; h < 500; h++)
                                    e.Ve[h] = 0;
                                for (a = 0; a < 8; a++)
                                    if (0 < e.io[a]) {
                                        for (e.we = 0,
                                        h = 1; h < T7ES._e; h++) {
                                            for (e.De = 0,
                                            n = 0; n < 8; n++)
                                                e.eo[n] == h && (e.De = 1);
                                            0 == T7ES.s0[h].type && 0 == e.De && T7ES.s0[h].id < 30 && (e.Ve[e.we] = h,
                                            e.we++)
                                        }
                                        e.eo[a] = e.Ve[e.ye(215, e.we)],
                                        e.ts[a].s0 = T7ES.s0[e.eo[a]]
                                    }
                                break
                            }
                            for (e.oa = e.ea,
                            o = 0; o < 8; o++)
                                !e.Ke[o] && 0 < e.oa && (e.oa--,
                                e.aa[e.ea - e.oa - 1] = o,
                                e.join[o] = 11);
                            e.na = 0,
                            e.Oo[i] = !0;
                            break
                        }
                        e.Oo[i] = !0
                    } else
                        e.Oo[i] = !1;
            for (o = 0; o <= 7; o++)
                D.S6nY("" + o, 43 + u + 35 * o + 15, 77 + (30 - JXAJ) / 2, "Itbg", o >= e.ia && o <= e.ta ? "#FFFFFF" : "#4f9bff"),
                e.ea == o && D.Dm9f(BLg_.J1, 43 + u + 35 * o, 77, 0, 1 / BLg_.ie)
        }
        if (2e3 == e.fo)
            e.fo = 2;
        else if (2 == e.fo || 3 == e.fo || 4 == e.fo) {
            for (2 == e.fo && IAlU(e),
            o = 0; o < e.ea; o++)
                i = e.aa[o],
                11 < e.join[i] && (0 <= e.eo[i] ? (Jsh0(e, i, e.ts[i].s0.qe),
                Y2UB(e, i, e.ts[i].s0.name, "#FF9B9B", e.ts[i].s0.Ho)) : (Jsh0(e, i, BLg_.N1),
                Y2UB(e, i, "Random", "#FF9B9B", 100))),
                12 < e.join[i] && SEnK(e, i, "#FF9B9B");
            if (11 == e.join[e.aa[e.na]]) {
                if (i = e.aa[e.na],
                0 <= e.eo[i] ? (Jsh0(e, i, e.ts[i].s0.qe),
                Y2UB(e, i, e.ts[i].s0.name, e.me(), e.ts[i].s0.Ho)) : (Jsh0(e, i, BLg_.N1),
                Y2UB(e, i, "Random", e.me(), 100)),
                0 < e.right)
                    for (; e.eo[i]++,
                    e.eo[i] >= T7ES._e && (e.eo[i] = -1),
                    -1 != e.eo[i]; )
                        if (e.ue(e.eo[i], -1)) {
                            e.ts[i].s0 = T7ES.s0[e.eo[i]];
                            break
                        }
                if (0 < e.left)
                    for (; e.eo[i]--,
                    -1 != e.eo[i]; )
                        if (e.eo[i] < -1 && (e.eo[i] = T7ES._e - 1),
                        e.ue(e.eo[i], -1)) {
                            e.ts[i].s0 = T7ES.s0[e.eo[i]];
                            break
                        }
                if (e.eo[i] < 0 ? e.io[i] = 1 : e.io[i] = 0,
                0 < e.de && (e.eo[i] = -1),
                1 == e.$o && (e.eo[i] = -1,
                2 != e.$s && (e.join[i] = 11),
                1 == e.$s && (e.join[i] = 11),
                e.$o = 0),
                0 < e.attack && (XYSz.D(0, 1),
                e.join[i] = 12,
                e.attack = 0,
                1 == e.$s))
                    if (e.join[i] = 13,
                    e.$o = 0,
                    e.eo[e.aa[e.na]] < 0 && (e.$o = 1),
                    e.na++,
                    e.na >= e.ea) {
                        for (e.fe = 0,
                        2 == e.be && (e.be = 1),
                        a = 0; a < 8; a++)
                            e.eo[a] < 0 ? e.io[a] = 1 : e.io[a] = 0;
                        for (h = 0; h < 500; h++)
                            e.Ve[h] = 0;
                        for (a = 0; a < 8; a++)
                            if (0 < e.io[a]) {
                                for (e.we = 0,
                                h = 1; h < T7ES._e; h++) {
                                    for (e.De = 0,
                                    n = 0; n < 8; n++)
                                        e.eo[n] == h && (e.De = 1);
                                    0 == T7ES.s0[h].type && 0 == e.De && T7ES.s0[h].id < 30 && (e.Ve[e.we] = h,
                                    e.we++)
                                }
                                e.eo[a] = e.Ve[e.ye(216, e.we)],
                                e.ts[a].s0 = T7ES.s0[e.eo[a]]
                            }
                        e.sa = 0,
                        e.ha = 3,
                        e.fo = 3
                    } else
                        e.join[e.aa[e.na]] = 11;
                if (0 < e.fe)
                    if (XYSz.D(2, 1),
                    (e.fe = 0) == e.na)
                        for (Jbbc(e),
                        o = 0; o < 8; o++)
                            11 == e.join[o] && (e.join[o] = 0);
                    else
                        e.na--,
                        e.join[e.aa[e.na]] = 12,
                        1 == e.$s && (e.join[e.aa[e.na]] = 11),
                        2 == e.$s && (e.join[e.aa[e.na]] = 11)
            }
            if (12 == e.join[e.aa[e.na]]) {
                if (not_allow_group = -1,
                e.na == e.ea - 1 && (0 == e.$s || 4 == e.$s))
                    for (i = 0; i < 8; i++)
                        e.join[i] % 10 == 3 && i != e.aa[e.na] && (0 == e.ts[i].group ? not_allow_group = -2 : -1 == not_allow_group ? not_allow_group = e.ts[i].group : 0 <= not_allow_group && e.ts[i].group != not_allow_group && (not_allow_group = -2));
                for (i = e.aa[e.na]; e.ts[i].group == not_allow_group || 4 == e.$s && (0 == e.ts[i].group || 2 < e.ts[i].group); )
                    e.ts[i].group = (e.ts[i].group + 1) % 5;
                if (SEnK(e, i, e.me()),
                0 < e.de)
                    e.ts[i].group = 0;
                else if (0 < e.right)
                    for (e.ts[i].group = (e.ts[i].group + 1) % 5; e.ts[i].group == not_allow_group || 4 == e.$s && (0 == e.ts[i].group || 2 < e.ts[i].group); )
                        e.ts[i].group = (e.ts[i].group + 1) % 5;
                if (0 < e.left)
                    for (e.ts[i].group--,
                    e.ts[i].group < 0 && (e.ts[i].group = 4); e.ts[i].group == not_allow_group || 4 == e.$s && (0 == e.ts[i].group || 2 < e.ts[i].group); )
                        e.ts[i].group--,
                        e.ts[i].group < 0 && (e.ts[i].group = 4);
                if (2 == e.$s && (e.ts[i].group = 0,
                e.attack = 1),
                0 < e.attack)
                    if (XYSz.D(0, 1),
                    e.attack = 0,
                    e.join[i] = 13,
                    e.$o = 0,
                    e.eo[e.aa[e.na]] < 0 && (e.$o = 1),
                    e.na++,
                    e.na >= e.ea) {
                        for (e.fe = 0,
                        2 == e.be && (e.be = 1),
                        a = 0; a < 8; a++)
                            e.eo[a] < 0 ? e.io[a] = 1 : e.io[a] = 0;
                        for (h = 0; h < 500; h++)
                            e.Ve[h] = 0;
                        for (a = 0; a < 8; a++)
                            if (0 < e.io[a]) {
                                for (e.we = 0,
                                h = 1; h < T7ES._e; h++) {
                                    for (e.De = 0,
                                    n = 0; n < 8; n++)
                                        e.eo[n] == h && (e.De = 1);
                                    0 == T7ES.s0[h].type && 0 == e.De && T7ES.s0[h].id < 30 && (e.Ve[e.we] = h,
                                    e.we++)
                                }
                                e.eo[a] = e.Ve[e.ye(217, e.we)],
                                e.ts[a].s0 = T7ES.s0[e.eo[a]]
                            }
                        e.sa = 0,
                        e.ha = 3,
                        e.fo = 3
                    } else
                        e.join[e.aa[e.na]] = 11;
                0 < e.fe && (XYSz.D(2, 1),
                e.fe = 0,
                e.join[i] = 11,
                e.$o = 0)
            }
        }
        if (3 == e.fo && 4 != e.$s) {
            let s = !1;
            for (let t = 0; t < 8; t++)
                if (0 < e.join[t] && 0 <= e.eo[t] && 1 == e.io[t]) {
                    s = !0;
                    break
                }
            var f;
            if (e.Kt = 3,
            e.$t = 3,
            D.Dm9f(BLg_.e1[8], 3, 3, 0, 1 / BLg_.Mi * .9),
            D.Dm9f(BLg_.e1[15], 3, 143.4, 0, 1 / BLg_.Mi * .9),
            0 != e.sa && 6 != e.sa || (e.ra ? D.S6nY("Press ← → to adjust Team Cost", ZcYj / 2, 18 + (19 - JXAJ) / 2, "Itbg", D.OuCn[1]) : D.S6nY("Press ← → to toggle the Cost-based setting", ZcYj / 2, 18 + (19 - JXAJ) / 2, "Itbg", D.OuCn[1])),
            0 == e.sa && D.Dm9f(BLg_.e1[9], 3 + 89 * .9, 3 + 13 * .9, 0, 1 / BLg_.Mi * .9),
            1 == e.sa && D.Dm9f(BLg_.e1[10], 57.9, 35.4, 0, 1 / BLg_.Mi * .9),
            2 == e.sa && (D.Dm9f(BLg_.e1[11], 24.3, 57.9, 0, 1 / BLg_.Mi * .9),
            D.S6nY("Press ← → to hide/reveal Random Character(s)", ZcYj / 2, 18 + (19 - JXAJ) / 2, "Itbg", D.OuCn[1])),
            0 < e.be && D.Dm9f(BLg_.e1[52], 235.8, 57, 0, 1 / BLg_.Mi * .9),
            3 == e.sa && D.Dm9f(BLg_.e1[12], 13.8, 3 + 84 * .9, 0, 1 / BLg_.Mi * .9),
            4 == e.sa && D.Dm9f(BLg_.e1[13], 33.6, 100.2, 0, 1 / BLg_.Mi * .9),
            1 == e.$s)
                5 == e.sa && D.Dm9f(BLg_.e1[14], 91.2, 3 + 134 * .9, 0, 1 / BLg_.Mi * .9);
            else {
                if (D.Dm9f(BLg_.Gi[3], 3, 3 + 131.33 * .9, 0, 1 / BLg_.Mi * .9),
                D.Dm9f(BLg_.Gi[4], 3, 142.194, 0, 1 / BLg_.Mi * .9),
                D.Dm9f(BLg_.Gi[5], 3, 164.1, 0, 1 / BLg_.Mi * .9),
                D.S6nY(`<span style="font-size:90%;">${e.la}s</span>`, e.Kt + 190.8, e.$t + 121.5 + (16 - JXAJ) / 2, "Itbg", "#ffffff"),
                D.S6nY(e.ra ? `<span style="font-size:90%;">₡${e.ca}</span>` : '<span style="font-size:90%;">----</span>', e.Kt + 232.047, e.$t + 143.1 + (16 - JXAJ) / 2, "Itbg", "#ffffff"),
                5 == e.sa)
                    D.Dm9f(BLg_.Gi[6], 24.9, 121.8, 0, 1 / BLg_.Mi * .9),
                    (0 < e.right || 0 < e.left || 0 < e.attack) && (c = 0 < e.right || 0 < e.attack ? 1 : -1,
                    d = (f = [60, 90, 120, 180, 300, 600]).indexOf(e.la),
                    e.la = f[-1 === d ? 0 < c ? 0 : f.length - 1 : (d + c + f.length) % f.length]);
                else if (6 == e.sa || 0 == e.sa) {
                    if (6 == e.sa && (D.Dm9f(BLg_.Gi[7], 14.4, 143.4, 0, 1 / BLg_.Mi * .9),
                    0 < e.attack) && (e.ra = !e.ra),
                    0 < e.right || 0 < e.left) {
                        var d = [300, 400, 500, 600, 700, 800, 1e3, 9999]
                          , c = 0 < e.right ? 1 : -1;
                        let t = d.indexOf(e.ca)
                          , s = (-1 == t ? 0 : t) + c;
                        s < 0 ? (e.ra ? (s = 0,
                        e.ra = !1) : (s = d.length - 1,
                        e.ra = !0),
                        e.ca = d[s]) : s >= d.length ? (e.ra ? (s = d.length - 1,
                        e.ra = !1) : (s = 0,
                        e.ra = !0),
                        e.ca = d[s]) : e.ra ? e.ca = d[s] : e.ra = !0
                    }
                } else
                    7 == e.sa ? (D.Dm9f(BLg_.Gi[8], 14.4, 165, 0, 1 / BLg_.Mi * .9),
                    0 < e.attack && (e.Xe = !e.Xe)) : 8 == e.sa ? (D.Dm9f(BLg_.Gi[9], 3 + 287 / 3 * .9, 165, 0, 1 / BLg_.Mi * .9),
                    0 < e.attack && (e.Ye = !e.Ye)) : 9 == e.sa ? (D.Dm9f(BLg_.Gi[10], 169.5, 165, 0, 1 / BLg_.Mi * .9),
                    0 < e.attack && (e.Ne = !e.Ne)) : 10 == e.sa && (D.Dm9f(BLg_.e1[14], 91.2, 188.4, 0, 1 / BLg_.Mi * .9),
                    0 < e.attack) && (XYSz.D(1, 1),
                    e.H0 = 10);
                e.ra && D.Dm9f(BLg_.Gi[11], 3 + 506 / 3 * .9, 147.9, 0, 1 / BLg_.Mi * .9),
                e.Xe && D.Dm9f(BLg_.Gi[11], 67.2, 169.5, 0, 1 / BLg_.Mi * .9),
                e.Ye && D.Dm9f(BLg_.Gi[11], 144, 169.5, 0, 1 / BLg_.Mi * .9),
                e.Ne && D.Dm9f(BLg_.Gi[11], 250.5, 169.5, 0, 1 / BLg_.Mi * .9),
                s && e.ra || D.Dm9f(BLg_.Gi[12], 169.5, 165, 0, 1 / BLg_.Mi * .9)
            }
            1 == e.Ie && (e.Ce = 100),
            1 != e.$s ? Y29U(e, 100 == e.Ce ? "Random" : T7ES.Ae[e.Ce].name, .9) : (e.da % 10 != 0 && (e.da = 10 * Math.floor(e.da / 10)),
            D.Dm9f(BLg_.e1[23], 13.8, 3 + 84 * .9, 0, 1 / BLg_.Mi * .9),
            3 == e.sa && D.Dm9f(BLg_.e1[22], 13.8, 3 + 84 * .9, 0, 1 / BLg_.Mi * .9),
            e.da / 10 < 5 ? FrDQ(e, "" + (Math.floor(e.da / 10) + 1), .9) : FrDQ(e, "Survival", .9));
            {
                function p(s) {
                    for (let t = 0; t < MiVw.length; t++)
                        if (!(MiVw[t].R <= Sh7E.K0 || MiVw[t].X[s]))
                            return;
                    return 1
                }
                1 == e.$s && (f = atob("U1RBR0Vf"),
                c = 2 == e.ve ? atob("X0VBU1k=") : 1 == e.ve ? atob("X05PUk1BTA==") : 0 == e.ve ? atob("X0RJRkZJQ1VMVA==") : atob("X0NSQVpZ"),
                50 != e.da || p(f + 3 + c) || (e.da = 20),
                40 != e.da || p(f + 4 + c) || (e.da = 30),
                30 != e.da || p(f + 3 + c) || (e.da = 20),
                20 != e.da || p(f + 2 + c) || (e.da = 10),
                10 != e.da || p(f + 1 + c) || (e.da = 0))
            }
            if (2 == e.ve ? ZIEt(e, "Easy", .9) : 1 == e.ve ? ZIEt(e, "Normal", .9) : 0 == e.ve ? ZIEt(e, "Difficult", .9) : -1 == e.ve && ZIEt(e, "CRAZY!", .9),
            IAlU(e),
            7 <= e.sa && e.sa <= 9 && (0 < e.left ? 7 == e.sa ? s && e.ra ? e.sa = 9 : e.sa = 8 : e.sa-- : 0 < e.right && (9 != e.sa && (e.sa++,
            s && e.ra || 9 != e.sa) || (e.sa = 7))),
            (0 < e.de || FouV.si && 0 < e.sa) && (1 == e.$s ? (e.sa--,
            e.sa < 0 && (e.sa = 5)) : 10 == e.sa ? e.sa = 8 : 7 <= e.sa && e.sa <= 9 ? e.sa = 6 : (e.sa--,
            e.sa < 0 && (e.sa = 10))),
            0 < e.R0 && (1 == e.$s ? e.sa = (e.sa + 1) % 6 : 6 == e.sa ? e.sa = 8 : 7 <= e.sa && e.sa <= 9 ? e.sa = 10 : e.sa = (e.sa + 1) % 11),
            e.Te(),
            0 < e.ha)
                e.ha--;
            else if (e._a || 0 < e.attack && 0 == e.sa || FouV.si && !FouV.ci && 0 == e.sa) {
                if (1 == e.be && (e.be = 2),
                Sh7E.Fo = 1 < e.po && FouV.di && Sh7E.So,
                e.Lo(),
                e.Bo = 0,
                e.bh = 0,
                e.ss = -1,
                0 == e.$s && (e.ss = e.la * SvvK + SvvK - 1),
                1 == e.$s)
                    for (e.ua = 70,
                    e.fa = 0,
                    e.qs = 0,
                    e.ga = 0,
                    (e.Ie = 0) == e.da ? e.Ce = 1 : 10 == e.da ? e.Ce = 2 : 20 == e.da ? e.Ce = 3 : 30 == e.da ? e.Ce = 4 : 40 == e.da ? e.Ce = 5 : 50 == e.da && (e.Ce = 6),
                    e.ma = -1,
                    e.pa = 0,
                    e.Sa = -1,
                    i = 0; i < e.ba; i++)
                        e.Ea[i] = e.Fa[i] = 0;
                for (e.H0 = 0,
                e._a ? (D.Sy7M(0, 0, ZcYj, I2Gw, 0),
                D.QZUl(),
                e._a = !1) : XYSz.D(1, 1),
                a = 10; a < e.Zs; a++)
                    e.Ke[a] = !1;
                if (1 == e.Ie && (e.Ce = e.ye(218, T7ES.Ue)),
                FouV.si && 0 <= FouV.oi)
                    for (a = 0; a < T7ES.Ue; a++)
                        if (T7ES.Ae[a].id == FouV.oi) {
                            e.Ce = a;
                            break
                        }
                for (e.La = 0,
                e.Ba = 0,
                e.pause = 0,
                s_hide_bb(),
                e.u = 1,
                t = e.Ce,
                a = 0; a < 8; a++)
                    10 < e.join[a] ? (tempi = e.ts[a].group,
                    e.ts[10 + a].hs(e.ts[a].s0, 350, 0, 300),
                    e.ts[10 + a].group = tempi,
                    e.Ke[10 + a] = !0,
                    e.ts[10 + a].ds = 75,
                    e.ts[10 + a].x = e.ye(219, T7ES.Ae[t].w / 2) + T7ES.Ae[t].w / 4,
                    e.ts[10 + a].z = e.ye(220, T7ES.Ae[t]._s - T7ES.Ae[t].us) + T7ES.Ae[t].us,
                    e.ts[10 + a].y = 0,
                    e.ts[10 + a].fs = e.ts[10 + a].x,
                    e.ts[10 + a].gs = e.ts[10 + a].z,
                    e.ts[10 + a].ps = 0,
                    e.ts[10 + a].os = 200,
                    1 == e.$s && (e.ts[10 + a].os = 500),
                    e.ts[10 + a].Ss = 10 + a,
                    0 == e.$s && e.Ne && e.ra && 1 == e.io[a] && (e.ts[10 + a].Ma = !0)) : 0 < e.join[a] && (tempi = e.ts[a].group,
                    e.ts[a].hs(e.ts[a].s0, 400, -50, 300),
                    e.ts[a].group = tempi,
                    e.Ke[a] = !0,
                    e.ts[a].ds = 75,
                    e.ts[a].x = e.ye(221, T7ES.Ae[t].w / 2) + T7ES.Ae[t].w / 4,
                    e.ts[a].z = e.ye(222, T7ES.Ae[t]._s - T7ES.Ae[t].us) + T7ES.Ae[t].us,
                    e.ts[a].y = 0,
                    e.ts[a].fs = e.ts[a].x,
                    e.ts[a].gs = e.ts[a].z,
                    e.ts[a].ps = 0,
                    e.ts[a].os = 200,
                    1 == e.$s && (e.ts[a].os = 500),
                    e.ts[a].Ss = a,
                    0 == e.$s) && e.Ne && e.ra && 1 == e.io[a] && (e.ts[a].Ma = !0);
                for (a = 0; a < e.Zs; a++)
                    e.Ke[a] && 0 == e.ts[a].group && (e.ts[a].group = a + 10);
                if (CHARMENU_setup_cost_based_vs_mode(e),
                e.bs = 0,
                e.Es = 0,
                e.Fs = 0,
                e.Ls = 0,
                e.Bs = 0,
                e.Ms = 0,
                e.ys = 0,
                e.ws = 0,
                e.Ds = 0,
                e.Vs = 0,
                T7ES.Ae[e.Ce].Ts || T7ES.Ae[e.Ce].ks || T7ES.Ae[e.Ce].Is(),
                e.Cs = 1,
                e.As = 0,
                e.wo = 0,
                1 == e.$s)
                    for (a = 0; a < e.Zs; a++)
                        e.Ke[a] && 0 == e.ts[a].s0.type && (e.ts[a].x = 50 + e.ye(223, 30),
                        e.ts[a].fs = e.ts[a].x);
                for (0 == e.$s && e.Ti(),
                a = 20; a < e.Zs; a++)
                    e.Ke[a] || e.ts[a].vs();
                QAAV(e),
                YroN(e)
            }
            if (4 == e.sa) {
                let t = 0;
                1 != e.$s && 0 != e.$s || 1 != e.ya || (t = -1),
                (0 < e.attack || 0 < e.right) && (e.attack = 0,
                e.right = 0,
                e.ve--,
                e.ve < t) && (e.ve = 2),
                0 < e.left && (e.left = 0,
                e.ve++,
                2 < e.ve) && (e.ve = t)
            }
            if ((FouV.di && 0 < e.attack && 1 < e.po && 5 == e.sa || FouV.ci) && (FouV.ci && (FouV.ci = !1,
            FouV.si = !1),
            e.fo = 4,
            XYSz.D(1, 1)),
            (e.ge || 1 == e.$s && 0 < e.attack && e.sa == (1 < e.po && FouV.di ? 6 : 5)) && (XYSz.D(1, 1),
            e.H0 = 10),
            1 == e.rh) {
                for (e.wa(),
                e.H0 = 0,
                a = 0; a < e.Zs; a++)
                    e.Ke[a] = !1;
                for (e.Ie = 1,
                e.Ce = e.ye(224, T7ES.Ue),
                h = 0; h < 500; h++)
                    e.Ve[h] = 0;
                for (a = 0; a < 8; a++) {
                    for (e.we = 0,
                    h = 1; h < T7ES._e; h++) {
                        for (e.De = 0,
                        n = 0; n < 8; n++)
                            e.eo[n] == h && (e.De = 1);
                        0 == T7ES.s0[h].type && 0 == e.De && T7ES.s0[h].id < 30 && (e.Ve[e.we] = h,
                        e.we++)
                    }
                    e.eo[a] = e.Ve[e.ye(225, e.we)],
                    e.ts[a].s0 = T7ES.s0[e.eo[a]]
                }
                for (e.rh = 1,
                t = e.Ce,
                a = 0; a < 8; a++)
                    e.ts[10 + a].hs(e.ts[a].s0, 350, 0, 300),
                    e.ts[10 + a].ds = 75,
                    e.ts[10 + a].x = e.ye(226, T7ES.Ae[t].w / 2) + T7ES.Ae[t].w / 4,
                    e.ts[10 + a].z = e.ye(227, T7ES.Ae[t]._s - T7ES.Ae[t].us) + T7ES.Ae[t].us,
                    e.ts[10 + a].fs = e.ts[10 + a].x,
                    e.ts[10 + a].gs = e.ts[10 + a].z,
                    e.ts[10 + a].os = 200,
                    e.ts[10 + a].Ss = 10 + a;
                if ((n = e.ye(228, 30)) < 7)
                    for (e.Ke[10] = !0,
                    e.ts[10].group = 0,
                    a = 1; a < 8; a++)
                        e.ts[10 + a].group = e.ye(229, 5),
                        e.Ke[10 + a] = !0;
                else if (n < 18) {
                    for (a = 0; a < 4; a++)
                        e.ts[10 + a].group = 1;
                    for (a = 4; a < 8; a++)
                        e.ts[10 + a].group = 2;
                    for (a = 0; a < 8; a++)
                        e.Ke[10 + a] = !0;
                    0 == e.ye(230, 3) && (e.Ke[13] = e.Ke[17] = !1),
                    0 == e.ye(231, 6) && (e.ts[13].group = e.ts[17].group = 3)
                } else if (n < 25) {
                    for (a = 0; a < 2; a++)
                        e.ts[10 + a].group = 1;
                    for (a = 2; a < 4; a++)
                        e.ts[10 + a].group = 2;
                    for (a = 4; a < 6; a++)
                        e.ts[10 + a].group = 3;
                    for (a = 6; a < 8; a++)
                        e.ts[10 + a].group = 4;
                    var g = e.ye(232, 3);
                    for (a = 0; a < 4 + 2 * g; a++)
                        e.Ke[10 + a] = !0
                } else {
                    for (a = 0; a < 4; a++)
                        e.ts[10 + a].group = 0;
                    var y = e.ye(233, 3);
                    for (a = 0; a < 2 + y; a++)
                        e.Ke[10 + a] = !0
                }
                for (a = 0; a < e.Zs; a++)
                    e.Ke[a] && 0 == e.ts[a].group && (e.ts[a].group = a + 10);
                CHARMENU_setup_cost_based_vs_mode(e),
                e.bs = 0,
                e.Es = 0,
                e.Fs = 0,
                e.Ls = 0,
                e.Bs = 0,
                e.Ms = 0,
                e.ys = 0,
                e.ws = 0,
                e.Ds = 0,
                e.Vs = 0,
                T7ES.Ae[e.Ce].Ts || T7ES.Ae[e.Ce].ks || T7ES.Ae[e.Ce].Is(),
                e.Cs = 1,
                e.As = 0,
                e.wo = 0
            }
            if (-1 == e.ve && 1 != e.$s && 0 != e.$s && (e.ve = 0),
            0 < e.attack && 1 == e.sa) {
                for (XYSz.D(1, 1),
                i = 0; i < 8; i++)
                    e.join[i] = 0,
                    e.Oo[i] = !0,
                    1 == e.io[i] && (e.eo[i] = -1);
                e.Zo = 45,
                e.fo = 0,
                NcPr()
            }
            {
                function p(s) {
                    for (let t = 0; t < MiVw.length; t++)
                        if (!(MiVw[t].R <= Sh7E.K0 || MiVw[t].X[s]))
                            return;
                    return 1
                }
                3 == e.sa && 1 == e.$s && (0 < e.attack || 0 < e.right || 0 < e.left) && (d = atob("U1RBR0Vf"),
                f = 2 == e.ve ? atob("X0VBU1k=") : 1 == e.ve ? atob("X05PUk1BTA==") : 0 == e.ve ? atob("X0RJRkZJQ1VMVA==") : atob("X0NSQVpZ"),
                0 < e.attack || 0 < e.right ? (e.attack = 0,
                e.right = 0,
                (Sh7E.Da = 0) == e.da ? p(d + 1 + f) ? e.da = 10 : (Sh7E.Da = 440,
                XYSz.D(2, 1)) : 10 == e.da ? p(d + 2 + f) ? e.da = 20 : e.da = 0 : 20 == e.da ? p(d + 3 + f) ? e.da = 30 : e.da = 0 : 30 == e.da ? p(d + 4 + f) ? e.da = 40 : e.da = 50 : 40 == e.da ? e.da = 50 : 50 == e.da && (e.da = 0)) : 0 < e.left && (e.left = 0,
                (Sh7E.Da = 0) == e.da ? p(d + 3 + f) ? e.da = 50 : p(d + 2 + f) ? e.da = 20 : p(d + 1 + f) ? e.da = 10 : (Sh7E.Da = 440,
                XYSz.D(2, 1)) : 10 == e.da ? e.da = 0 : 20 == e.da ? e.da = 10 : 30 == e.da ? e.da = 20 : 40 == e.da ? e.da = 30 : 50 == e.da && (p(d + 4 + f) ? e.da = 40 : e.da = 30)))
            }
            3 == e.sa && 1 != e.$s && (0 < e.attack || 0 < e.right ? (e.Ie = 0,
            e.attack = 0,
            e.right = 0,
            100 == e.Ce ? e.Ce = 0 : (e.Ce++,
            e.Ce == T7ES.Ue && (e.Ce = 100,
            e.Ie = 1))) : 0 < e.left && (e.Ie = 0,
            e.left = 0,
            100 == e.Ce ? e.Ce = T7ES.Ue - 1 : (e.Ce--,
            -1 == e.Ce && (e.Ce = 100,
            e.Ie = 1)))),
            2 == e.sa && (0 < e.right ? (XYSz.D(2, 1),
            (e.right = 0) < e.be ? e.be = 0 : e.be = 1) : 0 < e.left && (XYSz.D(2, 1),
            (e.left = 0) < e.be ? e.be = 0 : e.be = 1)),
            (0 < e.attack && 2 == e.sa || FouV.si && 0 == e.sa) && (XYSz.D(1, 1),
            CHARMENU_reset_random(e))
        }
        e.Zo <= 0 && 0 == e.fo && Jbbc(e),
        1 == e.rh && (D.Sy7M(0, 0, ZcYj, I2Gw, 0),
        D.QZUl())
    }
}
function CHARMENU_reset_random(s) {
    for (let t = 0; t < 500; t++)
        s.Ve[t] = 0;
    for (2 == s.be && (s.be = 1),
    k = 0; k < 8; k++)
        0 < s.io[k] && (s.eo[k] = 0);
    for (k = 0; k < 8; k++)
        if (0 < s.io[k]) {
            for (s.we = 0,
            l = 1; l < T7ES._e; l++) {
                for (s.De = 0,
                zz = 0; zz < 8; zz++)
                    s.eo[zz] == l && (s.De = 1);
                0 == T7ES.s0[l].type && 0 == s.De && T7ES.s0[l].id < 30 && (s.Ve[s.we] = l,
                s.we++)
            }
            s.eo[k] = s.Ve[s.ye(234, s.we)],
            s.ts[k].s0 = T7ES.s0[s.eo[k]]
        }
}
function CHARMENU_setup_cost_based_vs_mode(s) {
    if (0 == s.$s && s.ra) {
        for (s.Va = new Map,
        s.Ta = new Map,
        s.ka = new Map,
        s.Ia = new Map,
        s.Ca = 0,
        k = 0; k < s.Zs; k++)
            s.Ke[k] && 0 == s.ts[k].s0.type && !s.Va.has(s.ts[k].group) && (s.Ca++,
            s.Va.set(s.ts[k].group, s.ca),
            10 <= s.ts[k].group ? s.Ta.set(s.ts[k].group, k < 10 ? s.vi[k] : s.Ne ? "Com" : s.ts[k].s0.name) : s.Ta.set(s.ts[k].group, "Team " + s.ts[k].group),
            s.ka.set(s.ts[k].group, 0));
        if (2 == s.Ca) {
            var t = (e = Array.from(s.Va.keys()))[0]
              , e = e[1];
            s.Aa.set(t, "OkQn"),
            s.Aa.set(e, "KrcT"),
            s.Ia.set(t, 15),
            s.Ia.set(e, ZcYj - 15)
        } else if (s.Ca < 5) {
            var i = Array.from(s.Va.keys())
              , t = i[0]
              , e = i[i.length - 1];
            s.Aa.set(t, "OkQn"),
            s.Ia.set(t, 15);
            for (let t = 1; t < i.length - 1; t++) {
                var o = (ZcYj - 30) / (s.Ca - 1) * t + 15;
                s.Ia.set(i[t], o),
                s.Aa.set(i[t], "Itbg")
            }
            s.Aa.set(e, "KrcT"),
            s.Ia.set(e, ZcYj - 15)
        } else {
            var a = Array.from(s.Va.keys())
              , t = a[0]
              , e = a[a.length - 1];
            s.Aa.set(t, "OkQn"),
            s.Ia.set(t, 5);
            for (let t = 1; t < a.length - 1; t++) {
                var h = (ZcYj - 60) / (s.Ca - 1) * t + 30;
                s.Ia.set(a[t], h),
                s.Aa.set(a[t], "Itbg")
            }
            s.Aa.set(e, "KrcT"),
            s.Ia.set(e, ZcYj - 5)
        }
    }
}
function YroN(t) {
    for (t.po = 0,
    t.va = 0,
    i = 0; i < 8; i++)
        t.Ke[i] && t.po++;
    for (i = 0; i < 20; i++)
        t.Ke[i] && t.va++;
    ORUW_dragged || (t.va < 4 ? ORUW.style.top = "3.9%" : t.va < 7 ? ORUW.style.top = 1 == t.$s ? "13%" : "12%" : ORUW.style.top = 1 == t.$s ? "23%" : "22%")
}
function Jbbc(t) {
    t.attack = 0,
    YroN(t),
    t.fo = 1
}
function Jsh0(t, s, e) {
    var i = Math.floor(s / 4);
    1 == t.io[s] && 1 == t.be ? D.Dm9f(BLg_.N1, 107 + s % 4 * 153 + t.px, 61 + 212 * i + t.Yo, 0, 120 / D.E9px(e)) : D.Dm9f(e, 107 + s % 4 * 153 + t.px, 61 + 212 * i + t.Yo, 0, 120 / D.E9px(e))
}
function ZX3_(t, s, e, i) {
    var o = Math.floor(s / 4);
    D.S6nY(e, t.px + 107 + s % 4 * 153 + 60, t.Yo + 185 + 212 * o + (19 - JXAJ) / 2, "Itbg", i)
}
function SEnK(t, s, e) {
    var i = Math.floor(s / 4)
      , o = 1 == t.$s ? "----" : 0 == t.ts[s].group ? "Independent" : "Team " + t.ts[s].group;
    D.S6nY(o, t.px + 107 + s % 4 * 153 + 60, t.Yo + 229 + 212 * i + (19 - JXAJ) / 2, "Itbg", e)
}
function Y2UB(t, s, e, i, o) {
    var a = Math.floor(s / 4);
    1 == t.io[s] && 1 == t.be ? D.S6nY("Random", t.px + 107 + s % 4 * 153 + 60, t.Yo + 207 + 212 * a + (19 - JXAJ) / 2, "Itbg", i) : D.S6nY(e, t.px + 107 + s % 4 * 153 + 60, t.Yo + 207 + 212 * a + (19 - JXAJ) / 2, "Itbg", i),
    1 == t.fo && s < 3 || 0 != t.$s || 3 == t.fo && !t.ra || D.S6nY(`<span style="font-size:80%;">Cost: ₡${o}</span>`, t.px + 107 + s % 4 * 153 + 120, t.Yo + 207 - 163 + 212 * a + (19 - JXAJ) / 2, "KrcT", t.ra ? "#6785ff" : "#3f56b0")
}
function ZIEt(t, s, e=1) {
    D.S6nY(`<span style="font-size:90%;">${s}</span>`, t.Kt + 212 * e, t.$t + 111 * e + (16 - JXAJ) / 2, "Itbg", "#ffffff")
}
function Y29U(t, s, e=1) {
    D.S6nY(`<span style="font-size:90%;">${s.replaceAll("_", " ")}</span>`, t.Kt + 228 * e, t.$t + 87 * e + (16 - JXAJ) / 2, "Itbg", "#ffffff")
}
function FrDQ(t, s, e=1) {
    D.S6nY(`<span style="font-size:90%;">${s}</span>`, t.Kt + 212 * e, t.$t + 87 * e + (16 - JXAJ) / 2, "Itbg", "#ffffff")
}
class CrdD {
    static Q0 = 0;
    static j0 = 0;
    static Xa = 4;
    static Ya = 8;
    static C = new Array(100);
    static Na = 0;
    static Ua = 0;
    static qi = new Map;
    static Ra = new Map;
    static Zi = -1;
    static Qi = !1;
    static Wi = 0;
    static Pi = [];
    static xa = !1;
    static Ji() {
        CrdD.Pi = [],
        CrdD.xa = !1;
        for (let s = 0; s < 4; s++)
            for (let t = 1; t <= 7; t++) {
                var e = Sh7E.Y[11 * s + t];
                CrdD.qi.get(e) && (CrdD.Pi[e] ? (CrdD.xa = !0,
                CrdD.Pi[e]++) : CrdD.Pi[e] = 1)
            }
    }
    static Ga() {
        CrdD.Ra.set("`-0", {
            x: 17,
            y: 60,
            w: 28,
            i1: 28,
            t1: "`",
            keyCode: 192
        }),
        CrdD.Ra.set("1-0", {
            x: 47,
            y: 60,
            w: 28,
            i1: 28,
            t1: "1",
            keyCode: 49
        }),
        CrdD.Ra.set("2-0", {
            x: 77,
            y: 60,
            w: 28,
            i1: 28,
            t1: "2",
            keyCode: 50
        }),
        CrdD.Ra.set("3-0", {
            x: 107,
            y: 60,
            w: 28,
            i1: 28,
            t1: "3",
            keyCode: 51
        }),
        CrdD.Ra.set("4-0", {
            x: 137,
            y: 60,
            w: 28,
            i1: 28,
            t1: "4",
            keyCode: 52
        }),
        CrdD.Ra.set("5-0", {
            x: 167,
            y: 60,
            w: 28,
            i1: 28,
            t1: "5",
            keyCode: 53
        }),
        CrdD.Ra.set("6-0", {
            x: 197,
            y: 60,
            w: 28,
            i1: 28,
            t1: "6",
            keyCode: 54
        }),
        CrdD.Ra.set("7-0", {
            x: 227,
            y: 60,
            w: 28,
            i1: 28,
            t1: "7",
            keyCode: 55
        }),
        CrdD.Ra.set("8-0", {
            x: 257,
            y: 60,
            w: 28,
            i1: 28,
            t1: "8",
            keyCode: 56
        }),
        CrdD.Ra.set("9-0", {
            x: 287,
            y: 60,
            w: 28,
            i1: 28,
            t1: "9",
            keyCode: 57
        }),
        CrdD.Ra.set("0-0", {
            x: 317,
            y: 60,
            w: 28,
            i1: 28,
            t1: "0",
            keyCode: 48
        }),
        CrdD.Ra.set("--0", {
            x: 347,
            y: 60,
            w: 28,
            i1: 28,
            t1: "-",
            keyCode: 189
        }),
        CrdD.Ra.set("=-0", {
            x: 377,
            y: 60,
            w: 28,
            i1: 28,
            t1: "=",
            keyCode: 187
        }),
        CrdD.Ra.set("Backspace-0", {
            x: 407,
            y: 60,
            w: 58,
            i1: 28,
            t1: "Backspace",
            keyCode: 8
        }),
        CrdD.Ra.set("Home-0", {
            x: 512,
            y: 60,
            w: 28,
            i1: 28,
            t1: "Home",
            keyCode: 36
        }),
        CrdD.Ra.set("PageUp-0", {
            x: 542,
            y: 60,
            w: 28,
            i1: 28,
            t1: "Page Up",
            keyCode: 33
        }),
        CrdD.Ra.set("/-3", {
            x: 617,
            y: 60,
            w: 28,
            i1: 28,
            t1: "Numpad /",
            keyCode: 111
        }),
        CrdD.Ra.set("*-3", {
            x: 647,
            y: 60,
            w: 28,
            i1: 28,
            t1: "Numpad *",
            keyCode: 106
        }),
        CrdD.Ra.set("--3", {
            x: 677,
            y: 60,
            w: 28,
            i1: 28,
            t1: "Numpad -",
            keyCode: 109
        }),
        CrdD.Ra.set("Tab-0", {
            x: 17,
            y: 90,
            w: 43,
            i1: 28,
            t1: "Tab",
            keyCode: 9
        }),
        CrdD.Ra.set("q-0", {
            x: 62,
            y: 90,
            w: 28,
            i1: 28,
            t1: "q",
            keyCode: 81
        }),
        CrdD.Ra.set("w-0", {
            x: 92,
            y: 90,
            w: 28,
            i1: 28,
            t1: "w",
            keyCode: 87
        }),
        CrdD.Ra.set("e-0", {
            x: 122,
            y: 90,
            w: 28,
            i1: 28,
            t1: "e",
            keyCode: 69
        }),
        CrdD.Ra.set("r-0", {
            x: 152,
            y: 90,
            w: 28,
            i1: 28,
            t1: "r",
            keyCode: 82
        }),
        CrdD.Ra.set("t-0", {
            x: 182,
            y: 90,
            w: 28,
            i1: 28,
            t1: "t",
            keyCode: 84
        }),
        CrdD.Ra.set("y-0", {
            x: 212,
            y: 90,
            w: 28,
            i1: 28,
            t1: "y",
            keyCode: 89
        }),
        CrdD.Ra.set("u-0", {
            x: 242,
            y: 90,
            w: 28,
            i1: 28,
            t1: "u",
            keyCode: 85
        }),
        CrdD.Ra.set("i-0", {
            x: 272,
            y: 90,
            w: 28,
            i1: 28,
            t1: "i",
            keyCode: 73
        }),
        CrdD.Ra.set("o-0", {
            x: 302,
            y: 90,
            w: 28,
            i1: 28,
            t1: "o",
            keyCode: 79
        }),
        CrdD.Ra.set("p-0", {
            x: 332,
            y: 90,
            w: 28,
            i1: 28,
            t1: "p",
            keyCode: 80
        }),
        CrdD.Ra.set("[-0", {
            x: 362,
            y: 90,
            w: 28,
            i1: 28,
            t1: "[",
            keyCode: 219
        }),
        CrdD.Ra.set("]-0", {
            x: 392,
            y: 90,
            w: 28,
            i1: 28,
            t1: "]",
            keyCode: 221
        }),
        CrdD.Ra.set("\\-0", {
            x: 422,
            y: 90,
            w: 43,
            i1: 28,
            t1: "\\",
            keyCode: 220
        }),
        CrdD.Ra.set("Delete-0", {
            x: 482,
            y: 90,
            w: 28,
            i1: 28,
            t1: "Delete",
            keyCode: 46
        }),
        CrdD.Ra.set("End-0", {
            x: 512,
            y: 90,
            w: 28,
            i1: 28,
            t1: "End",
            keyCode: 35
        }),
        CrdD.Ra.set("PageDown-0", {
            x: 542,
            y: 90,
            w: 28,
            i1: 28,
            t1: "Page Down",
            keyCode: 34
        }),
        CrdD.Ra.set("7-3", {
            x: 587,
            y: 90,
            w: 28,
            i1: 28,
            t1: "Numpad 7",
            keyCode: 103
        }),
        CrdD.Ra.set("8-3", {
            x: 617,
            y: 90,
            w: 28,
            i1: 28,
            t1: "Numpad 8",
            keyCode: 104
        }),
        CrdD.Ra.set("9-3", {
            x: 647,
            y: 90,
            w: 28,
            i1: 28,
            t1: "Numpad 9",
            keyCode: 105
        }),
        CrdD.Ra.set("+-3", {
            x: 677,
            y: 90,
            w: 28,
            i1: 58,
            t1: "Numpad +",
            keyCode: 107
        }),
        CrdD.Ra.set("a-0", {
            x: 70,
            y: 120,
            w: 28,
            i1: 28,
            t1: "a",
            keyCode: 65
        }),
        CrdD.Ra.set("s-0", {
            x: 100,
            y: 120,
            w: 28,
            i1: 28,
            t1: "s",
            keyCode: 83
        }),
        CrdD.Ra.set("d-0", {
            x: 130,
            y: 120,
            w: 28,
            i1: 28,
            t1: "d",
            keyCode: 68
        }),
        CrdD.Ra.set("f-0", {
            x: 160,
            y: 120,
            w: 28,
            i1: 28,
            t1: "f",
            keyCode: 70
        }),
        CrdD.Ra.set("g-0", {
            x: 190,
            y: 120,
            w: 28,
            i1: 28,
            t1: "g",
            keyCode: 71
        }),
        CrdD.Ra.set("h-0", {
            x: 220,
            y: 120,
            w: 28,
            i1: 28,
            t1: "h",
            keyCode: 72
        }),
        CrdD.Ra.set("j-0", {
            x: 250,
            y: 120,
            w: 28,
            i1: 28,
            t1: "j",
            keyCode: 74
        }),
        CrdD.Ra.set("k-0", {
            x: 280,
            y: 120,
            w: 28,
            i1: 28,
            t1: "k",
            keyCode: 75
        }),
        CrdD.Ra.set("l-0", {
            x: 310,
            y: 120,
            w: 28,
            i1: 28,
            t1: "l",
            keyCode: 76
        }),
        CrdD.Ra.set(";-0", {
            x: 340,
            y: 120,
            w: 28,
            i1: 28,
            t1: ";",
            keyCode: 186
        }),
        CrdD.Ra.set("'-0", {
            x: 370,
            y: 120,
            w: 28,
            i1: 28,
            t1: "'",
            keyCode: 222
        }),
        CrdD.Ra.set("Enter-0", {
            x: 400,
            y: 120,
            w: 65,
            i1: 28,
            t1: "Enter",
            keyCode: 13
        }),
        CrdD.Ra.set("4-3", {
            x: 587,
            y: 120,
            w: 28,
            i1: 28,
            t1: "Numpad 4",
            keyCode: 100
        }),
        CrdD.Ra.set("5-3", {
            x: 617,
            y: 120,
            w: 28,
            i1: 28,
            t1: "Numpad 5",
            keyCode: 101
        }),
        CrdD.Ra.set("6-3", {
            x: 647,
            y: 120,
            w: 28,
            i1: 28,
            t1: "Numpad 6",
            keyCode: 102
        }),
        CrdD.Ra.set("z-0", {
            x: 86,
            y: 150,
            w: 28,
            i1: 28,
            t1: "z",
            keyCode: 90
        }),
        CrdD.Ra.set("x-0", {
            x: 116,
            y: 150,
            w: 28,
            i1: 28,
            t1: "x",
            keyCode: 88
        }),
        CrdD.Ra.set("c-0", {
            x: 146,
            y: 150,
            w: 28,
            i1: 28,
            t1: "c",
            keyCode: 67
        }),
        CrdD.Ra.set("v-0", {
            x: 176,
            y: 150,
            w: 28,
            i1: 28,
            t1: "v",
            keyCode: 86
        }),
        CrdD.Ra.set("b-0", {
            x: 206,
            y: 150,
            w: 28,
            i1: 28,
            t1: "b",
            keyCode: 66
        }),
        CrdD.Ra.set("n-0", {
            x: 236,
            y: 150,
            w: 28,
            i1: 28,
            t1: "n",
            keyCode: 78
        }),
        CrdD.Ra.set("m-0", {
            x: 266,
            y: 150,
            w: 28,
            i1: 28,
            t1: "m",
            keyCode: 77
        }),
        CrdD.Ra.set(",-0", {
            x: 296,
            y: 150,
            w: 28,
            i1: 28,
            t1: ",",
            keyCode: 188
        }),
        CrdD.Ra.set(".-0", {
            x: 326,
            y: 150,
            w: 28,
            i1: 28,
            t1: ".",
            keyCode: 190
        }),
        CrdD.Ra.set("/-0", {
            x: 356,
            y: 150,
            w: 28,
            i1: 28,
            t1: "/",
            keyCode: 191
        }),
        CrdD.Ra.set("ArrowUp-0", {
            x: 512,
            y: 150,
            w: 28,
            i1: 28,
            t1: "Arrow Up",
            keyCode: 38
        }),
        CrdD.Ra.set("1-3", {
            x: 587,
            y: 150,
            w: 28,
            i1: 28,
            t1: "Numpad 1",
            keyCode: 97
        }),
        CrdD.Ra.set("2-3", {
            x: 617,
            y: 150,
            w: 28,
            i1: 28,
            t1: "Numpad 2",
            keyCode: 98
        }),
        CrdD.Ra.set("3-3", {
            x: 647,
            y: 150,
            w: 28,
            i1: 28,
            t1: "Numpad 3",
            keyCode: 99
        }),
        CrdD.Ra.set("Enter-3", {
            x: 677,
            y: 150,
            w: 28,
            i1: 58,
            t1: "Numpad Enter",
            keyCode: 13
        }),
        CrdD.Ra.set(" -0", {
            x: 93,
            y: 180,
            w: 296,
            i1: 28,
            t1: "Space",
            keyCode: 32
        }),
        CrdD.Ra.set("ArrowLeft-0", {
            x: 482,
            y: 180,
            w: 28,
            i1: 28,
            t1: "Arrow Left",
            keyCode: 37
        }),
        CrdD.Ra.set("ArrowDown-0", {
            x: 512,
            y: 180,
            w: 28,
            i1: 28,
            t1: "Arrow Down",
            keyCode: 40
        }),
        CrdD.Ra.set("ArrowRight-0", {
            x: 542,
            y: 180,
            w: 28,
            i1: 28,
            t1: "Arrow Right",
            keyCode: 39
        }),
        CrdD.Ra.set("0-3", {
            x: 587,
            y: 180,
            w: 58,
            i1: 28,
            t1: "Numpad 0",
            keyCode: 96
        }),
        CrdD.Ra.set(".-3", {
            x: 647,
            y: 180,
            w: 28,
            i1: 28,
            t1: "Numpad .",
            keyCode: 110
        }),
        CrdD.qi.set("Backquote", {
            x: 17,
            y: 60,
            w: 28,
            i1: 28,
            t1: "`",
            keyCode: 192
        }),
        CrdD.qi.set("Digit1", {
            x: 47,
            y: 60,
            w: 28,
            i1: 28,
            t1: "1",
            keyCode: 49
        }),
        CrdD.qi.set("Digit2", {
            x: 77,
            y: 60,
            w: 28,
            i1: 28,
            t1: "2",
            keyCode: 50
        }),
        CrdD.qi.set("Digit3", {
            x: 107,
            y: 60,
            w: 28,
            i1: 28,
            t1: "3",
            keyCode: 51
        }),
        CrdD.qi.set("Digit4", {
            x: 137,
            y: 60,
            w: 28,
            i1: 28,
            t1: "4",
            keyCode: 52
        }),
        CrdD.qi.set("Digit5", {
            x: 167,
            y: 60,
            w: 28,
            i1: 28,
            t1: "5",
            keyCode: 53
        }),
        CrdD.qi.set("Digit6", {
            x: 197,
            y: 60,
            w: 28,
            i1: 28,
            t1: "6",
            keyCode: 54
        }),
        CrdD.qi.set("Digit7", {
            x: 227,
            y: 60,
            w: 28,
            i1: 28,
            t1: "7",
            keyCode: 55
        }),
        CrdD.qi.set("Digit8", {
            x: 257,
            y: 60,
            w: 28,
            i1: 28,
            t1: "8",
            keyCode: 56
        }),
        CrdD.qi.set("Digit9", {
            x: 287,
            y: 60,
            w: 28,
            i1: 28,
            t1: "9",
            keyCode: 57
        }),
        CrdD.qi.set("Digit0", {
            x: 317,
            y: 60,
            w: 28,
            i1: 28,
            t1: "0",
            keyCode: 48
        }),
        CrdD.qi.set("Minus", {
            x: 347,
            y: 60,
            w: 28,
            i1: 28,
            t1: "-",
            keyCode: 189
        }),
        CrdD.qi.set("Equal", {
            x: 377,
            y: 60,
            w: 28,
            i1: 28,
            t1: "=",
            keyCode: 187
        }),
        CrdD.qi.set("Backspace", {
            x: 407,
            y: 60,
            w: 58,
            i1: 28,
            t1: "Backspace",
            keyCode: 8
        }),
        CrdD.qi.set("Home", {
            x: 512,
            y: 60,
            w: 28,
            i1: 28,
            t1: "Home",
            keyCode: 36
        }),
        CrdD.qi.set("PageUp", {
            x: 542,
            y: 60,
            w: 28,
            i1: 28,
            t1: "Page Up",
            keyCode: 33
        }),
        CrdD.qi.set("NumpadDivide", {
            x: 617,
            y: 60,
            w: 28,
            i1: 28,
            t1: "Numpad /",
            keyCode: 111
        }),
        CrdD.qi.set("NumpadMultiply", {
            x: 647,
            y: 60,
            w: 28,
            i1: 28,
            t1: "Numpad *",
            keyCode: 106
        }),
        CrdD.qi.set("NumpadSubtract", {
            x: 677,
            y: 60,
            w: 28,
            i1: 28,
            t1: "Numpad -",
            keyCode: 109
        }),
        CrdD.qi.set("Tab", {
            x: 17,
            y: 90,
            w: 43,
            i1: 28,
            t1: "Tab",
            keyCode: 9
        }),
        CrdD.qi.set("KeyQ", {
            x: 62,
            y: 90,
            w: 28,
            i1: 28,
            t1: "q",
            keyCode: 81
        }),
        CrdD.qi.set("KeyW", {
            x: 92,
            y: 90,
            w: 28,
            i1: 28,
            t1: "w",
            keyCode: 87
        }),
        CrdD.qi.set("KeyE", {
            x: 122,
            y: 90,
            w: 28,
            i1: 28,
            t1: "e",
            keyCode: 69
        }),
        CrdD.qi.set("KeyR", {
            x: 152,
            y: 90,
            w: 28,
            i1: 28,
            t1: "r",
            keyCode: 82
        }),
        CrdD.qi.set("KeyT", {
            x: 182,
            y: 90,
            w: 28,
            i1: 28,
            t1: "t",
            keyCode: 84
        }),
        CrdD.qi.set("KeyY", {
            x: 212,
            y: 90,
            w: 28,
            i1: 28,
            t1: "y",
            keyCode: 89
        }),
        CrdD.qi.set("KeyU", {
            x: 242,
            y: 90,
            w: 28,
            i1: 28,
            t1: "u",
            keyCode: 85
        }),
        CrdD.qi.set("KeyI", {
            x: 272,
            y: 90,
            w: 28,
            i1: 28,
            t1: "i",
            keyCode: 73
        }),
        CrdD.qi.set("KeyO", {
            x: 302,
            y: 90,
            w: 28,
            i1: 28,
            t1: "o",
            keyCode: 79
        }),
        CrdD.qi.set("KeyP", {
            x: 332,
            y: 90,
            w: 28,
            i1: 28,
            t1: "p",
            keyCode: 80
        }),
        CrdD.qi.set("BracketLeft", {
            x: 362,
            y: 90,
            w: 28,
            i1: 28,
            t1: "[",
            keyCode: 219
        }),
        CrdD.qi.set("BracketRight", {
            x: 392,
            y: 90,
            w: 28,
            i1: 28,
            t1: "]",
            keyCode: 221
        }),
        CrdD.qi.set("Backslash", {
            x: 422,
            y: 90,
            w: 43,
            i1: 28,
            t1: "\\",
            keyCode: 220
        }),
        CrdD.qi.set("Delete", {
            x: 482,
            y: 90,
            w: 28,
            i1: 28,
            t1: "Delete",
            keyCode: 46
        }),
        CrdD.qi.set("End", {
            x: 512,
            y: 90,
            w: 28,
            i1: 28,
            t1: "End",
            keyCode: 35
        }),
        CrdD.qi.set("PageDown", {
            x: 542,
            y: 90,
            w: 28,
            i1: 28,
            t1: "Page Down",
            keyCode: 34
        }),
        CrdD.qi.set("Numpad7", {
            x: 587,
            y: 90,
            w: 28,
            i1: 28,
            t1: "Numpad 7",
            keyCode: 103
        }),
        CrdD.qi.set("Numpad8", {
            x: 617,
            y: 90,
            w: 28,
            i1: 28,
            t1: "Numpad 8",
            keyCode: 104
        }),
        CrdD.qi.set("Numpad9", {
            x: 647,
            y: 90,
            w: 28,
            i1: 28,
            t1: "Numpad 9",
            keyCode: 105
        }),
        CrdD.qi.set("NumpadAdd", {
            x: 677,
            y: 90,
            w: 28,
            i1: 58,
            t1: "Numpad +",
            keyCode: 107
        }),
        CrdD.qi.set("CapsLock", {
            x: 17,
            y: 120,
            w: 51,
            i1: 28,
            t1: "CapsLock",
            keyCode: 20
        }),
        CrdD.qi.set("KeyA", {
            x: 70,
            y: 120,
            w: 28,
            i1: 28,
            t1: "a",
            keyCode: 65
        }),
        CrdD.qi.set("KeyS", {
            x: 100,
            y: 120,
            w: 28,
            i1: 28,
            t1: "s",
            keyCode: 83
        }),
        CrdD.qi.set("KeyD", {
            x: 130,
            y: 120,
            w: 28,
            i1: 28,
            t1: "d",
            keyCode: 68
        }),
        CrdD.qi.set("KeyF", {
            x: 160,
            y: 120,
            w: 28,
            i1: 28,
            t1: "f",
            keyCode: 70
        }),
        CrdD.qi.set("KeyG", {
            x: 190,
            y: 120,
            w: 28,
            i1: 28,
            t1: "g",
            keyCode: 71
        }),
        CrdD.qi.set("KeyH", {
            x: 220,
            y: 120,
            w: 28,
            i1: 28,
            t1: "h",
            keyCode: 72
        }),
        CrdD.qi.set("KeyJ", {
            x: 250,
            y: 120,
            w: 28,
            i1: 28,
            t1: "j",
            keyCode: 74
        }),
        CrdD.qi.set("KeyK", {
            x: 280,
            y: 120,
            w: 28,
            i1: 28,
            t1: "k",
            keyCode: 75
        }),
        CrdD.qi.set("KeyL", {
            x: 310,
            y: 120,
            w: 28,
            i1: 28,
            t1: "l",
            keyCode: 76
        }),
        CrdD.qi.set("Semicolon", {
            x: 340,
            y: 120,
            w: 28,
            i1: 28,
            t1: ";",
            keyCode: 186
        }),
        CrdD.qi.set("Quote", {
            x: 370,
            y: 120,
            w: 28,
            i1: 28,
            t1: "'",
            keyCode: 222
        }),
        CrdD.qi.set("Enter", {
            x: 400,
            y: 120,
            w: 65,
            i1: 28,
            t1: "Enter",
            keyCode: 13
        }),
        CrdD.qi.set("Numpad4", {
            x: 587,
            y: 120,
            w: 28,
            i1: 28,
            t1: "Numpad 4",
            keyCode: 100
        }),
        CrdD.qi.set("Numpad5", {
            x: 617,
            y: 120,
            w: 28,
            i1: 28,
            t1: "Numpad 5",
            keyCode: 101
        }),
        CrdD.qi.set("Numpad6", {
            x: 647,
            y: 120,
            w: 28,
            i1: 28,
            t1: "Numpad 6",
            keyCode: 102
        }),
        CrdD.qi.set("ShiftLeft", {
            x: 17,
            y: 150,
            w: 67,
            i1: 28,
            t1: "Left Shift",
            keyCode: 16
        }),
        CrdD.qi.set("KeyZ", {
            x: 86,
            y: 150,
            w: 28,
            i1: 28,
            t1: "z",
            keyCode: 90
        }),
        CrdD.qi.set("KeyX", {
            x: 116,
            y: 150,
            w: 28,
            i1: 28,
            t1: "x",
            keyCode: 88
        }),
        CrdD.qi.set("KeyC", {
            x: 146,
            y: 150,
            w: 28,
            i1: 28,
            t1: "c",
            keyCode: 67
        }),
        CrdD.qi.set("KeyV", {
            x: 176,
            y: 150,
            w: 28,
            i1: 28,
            t1: "v",
            keyCode: 86
        }),
        CrdD.qi.set("KeyB", {
            x: 206,
            y: 150,
            w: 28,
            i1: 28,
            t1: "b",
            keyCode: 66
        }),
        CrdD.qi.set("KeyN", {
            x: 236,
            y: 150,
            w: 28,
            i1: 28,
            t1: "n",
            keyCode: 78
        }),
        CrdD.qi.set("KeyM", {
            x: 266,
            y: 150,
            w: 28,
            i1: 28,
            t1: "m",
            keyCode: 77
        }),
        CrdD.qi.set("Comma", {
            x: 296,
            y: 150,
            w: 28,
            i1: 28,
            t1: ",",
            keyCode: 188
        }),
        CrdD.qi.set("Period", {
            x: 326,
            y: 150,
            w: 28,
            i1: 28,
            t1: ".",
            keyCode: 190
        }),
        CrdD.qi.set("Slash", {
            x: 356,
            y: 150,
            w: 28,
            i1: 28,
            t1: "/",
            keyCode: 191
        }),
        CrdD.qi.set("ShiftRight", {
            x: 386,
            y: 150,
            w: 79,
            i1: 28,
            t1: "Right Shift",
            keyCode: 16
        }),
        CrdD.qi.set("ArrowUp", {
            x: 512,
            y: 150,
            w: 28,
            i1: 28,
            t1: "Arrow Up",
            keyCode: 38
        }),
        CrdD.qi.set("Numpad1", {
            x: 587,
            y: 150,
            w: 28,
            i1: 28,
            t1: "Numpad 1",
            keyCode: 97
        }),
        CrdD.qi.set("Numpad2", {
            x: 617,
            y: 150,
            w: 28,
            i1: 28,
            t1: "Numpad 2",
            keyCode: 98
        }),
        CrdD.qi.set("Numpad3", {
            x: 647,
            y: 150,
            w: 28,
            i1: 28,
            t1: "Numpad 3",
            keyCode: 99
        }),
        CrdD.qi.set("NumpadEnter", {
            x: 677,
            y: 150,
            w: 28,
            i1: 58,
            t1: "Numpad Enter",
            keyCode: 13
        }),
        CrdD.qi.set("ControlLeft", {
            x: 17,
            y: 180,
            w: 36,
            i1: 28,
            t1: "Left Control",
            keyCode: 17
        }),
        CrdD.qi.set("Space", {
            x: 93,
            y: 180,
            w: 296,
            i1: 28,
            t1: "Space",
            keyCode: 32
        }),
        CrdD.qi.set("ControlRight", {
            x: 429,
            y: 180,
            w: 36,
            i1: 28,
            t1: "Right Control",
            keyCode: 17
        }),
        CrdD.qi.set("ArrowLeft", {
            x: 482,
            y: 180,
            w: 28,
            i1: 28,
            t1: "Arrow Left",
            keyCode: 37
        }),
        CrdD.qi.set("ArrowDown", {
            x: 512,
            y: 180,
            w: 28,
            i1: 28,
            t1: "Arrow Down",
            keyCode: 40
        }),
        CrdD.qi.set("ArrowRight", {
            x: 542,
            y: 180,
            w: 28,
            i1: 28,
            t1: "Arrow Right",
            keyCode: 39
        }),
        CrdD.qi.set("Numpad0", {
            x: 587,
            y: 180,
            w: 58,
            i1: 28,
            t1: "Numpad 0",
            keyCode: 96
        }),
        CrdD.qi.set("NumpadDecimal", {
            x: 647,
            y: 180,
            w: 28,
            i1: 28,
            t1: "Numpad .",
            keyCode: 110
        })
    }
}
class XbQR {
    Oa = -1;
    th = 0;
    ih = 0;
    eh = 0;
    sh = 0;
    es = 0;
    hh = 0;
    oh = 0;
    de = 0;
    R0 = 0;
    left = 0;
    right = 0;
    attack = 0;
    fe = 0;
    ah = 0
}
function QAAV(t) {
    let s;
    for (t.de = 0,
    t.R0 = 0,
    t.left = 0,
    t.right = 0,
    t.attack = 0,
    t.fe = 0,
    t.ah = 0,
    s = 0; s < 8; s++)
        t.ts[s].de = 0,
        t.ts[s].R0 = 0,
        t.ts[s].left = 0,
        t.ts[s].right = 0,
        t.ts[s].attack = 0,
        t.ts[s].fe = 0,
        t.ts[s].ah = 0
}
function AUuK(t) {
    let s;
    for (s = 0; s < 8; s++)
        t.Oo[s] = !0,
        t.ts[s].attack = 0,
        t.ts[s].fe = 0
}
function NcPr() {
    let t;
    for (t = 0; t < MiVw.length; t++) {
        var s = MiVw[t].id;
        KUKH[s] = [-1, -1, -1, -1]
    }
}
function OHwl(t) {
    let s, e, i = !1;
    for (e = 0; e < MiVw.length; e++) {
        var o = MiVw[e].id;
        for (s = 0; s < 4; s++)
            if (KUKH[o][s] == t) {
                KUKH[o][s] = -1,
                i = !0;
                break
            }
        if (i)
            break
    }
}
function IakF() {
    for (let s = 0; s < HnDC; s++)
        for (let t = 0; t < MiVw.length; t++) {
            var e = MiVw[t].id;
            CrdD.C[s][e] = [];
            for (let t = 0; t < 6; t++)
                CrdD.C[s][e][t] = 0
        }
    for (let t = 0; t < MiVw.length; t++)
        MiVw[t].G = HnDC - 1
}
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
const tJ8m = this;
function P1oA(t) {
    return t = parseFloat(t),
    Math.round(1e5 * t) / 1e5
}
function splitContent(t) {
    return t.startsWith("<bmp") ? t.split(/\s+/g) : t.startsWith("v2") ? t.split("\n") : t.split("¶")
}
class WlEE {
    kind = 0;
    x = 0;
    y = 0;
    w = 0;
    i1 = 0;
    en = 0;
    sn = 0;
    hn = 0;
    on = 0;
    an = 0;
    nn = 0;
    rn = 0;
    ln = 0;
    cn = 0;
    effect = 0;
    dn = 0;
    _n = 0;
    un = 0;
    fn = 0;
    gn = 0;
    mn = 0
}
class _IUN {
    kind = 0;
    x = 0;
    y = 0;
    w = 0;
    i1 = 0
}
class Kahe {
    kind = 0;
    x = 0;
    y = 0;
    action = 0;
    en = 0;
    sn = 0;
    pn = 0;
    Ws = 0
}
class LFN6 {
    x = 0;
    y = 0
}
class AkRS {
    kind = 0;
    x = 0;
    y = 0;
    ln = 0;
    Sn = 0;
    bn = 130;
    En = 0;
    Fn = 0;
    Ln = 0;
    Bn = 0;
    Mn = 0;
    yn = 0;
    wn = 0;
    Dn = 0;
    Vn = 0;
    Tn = 0;
    kn = 0;
    In = 0;
    Cn = 0
}
class UNzS {
    kind = 0;
    x = 0;
    y = 0;
    An = 0;
    vn = 0;
    Sn = 0;
    en = 0;
    sn = 0;
    Xn = 0
}
class BCel {
    x = 0;
    y = 0;
    w = 0;
    i1 = 0;
    constructor(s) {
        this.x = s[0].x,
        this.y = s[0].y,
        this.w = s[0].w + s[0].x,
        this.i1 = s[0].i1 + s[0].y;
        for (let t = 1; t < s.length; t++)
            this.x > s[t].x && (this.x = s[t].x),
            this.y > s[t].y && (this.y = s[t].y),
            this.w < s[t].x + s[t].w && (this.w = s[t].x + s[t].w),
            this.i1 < s[t].y + s[t].i1 && (this.i1 = s[t].y + s[t].i1);
        this.w = this.w - this.x,
        this.i1 = this.i1 - this.y
    }
}
class GDLT {
    index = 0;
    Yn = -1;
    Nn = -1;
    Un = 0;
    state = 0;
    wait = 0;
    next = 0;
    en = 0;
    sn = 0;
    Xn = 0;
    Rn = 0;
    xn = 0;
    Gn = 0;
    Yh = 0;
    Rs = 0;
    On = 0;
    zn = 0;
    Wn = 0;
    Zn = 0;
    Pn = 0;
    Jn = 0;
    os = 0;
    Hn = 39;
    Qn = 79;
    jn = null;
    Kn = null;
    $n = null;
    qn = null;
    tr = [];
    ir = 0;
    er = [];
    sr = 0;
    hr = null;
    ar = null;
    nr = 0;
    rr = "";
    lr = null;
    cr = -1;
    constructor() {}
}
const M_r6 = 3
  , UppG = 5
  , ZYwY = 2.5
  , AGH8 = 3
  , Eght = 10
  , DIbN = 1.6
  , HEAVY_UppG = 3.7
  , HEAVY_ZYwY = 1.85
  , HEAVY_Eght = 6.2
  , HEAVY_DIbN = 1
  , MGPu = -16.3
  , TJMQ = 10
  , Ta0E = 3.75
  , KyO5 = -10
  , XGuY = 18
  , Scn2 = 5
  , MhEp = -2
  , OEbN = 5;
class TIJj {
    Ho = 100;
    ti = 1;
    Fe = 0;
    dr = M_r6;
    _r = UppG;
    ur = ZYwY;
    gr = AGH8;
    mr = Eght;
    pr = DIbN;
    Sr = HEAVY_UppG;
    br = HEAVY_ZYwY;
    Er = HEAVY_Eght;
    Fr = HEAVY_DIbN;
    Lr = MGPu;
    Br = TJMQ;
    Mr = Ta0E;
    yr = KyO5;
    wr = XGuY;
    Dr = Scn2;
    Vr = MhEp;
    Tr = OEbN;
    kr = 0;
    Ir = 0;
    Cr = "";
    Ar = "";
    vr = "";
    Xr = -1;
    Yr = -1;
    Nr = -1;
    Ur = [];
    Rr = [];
    Gr = 0;
    Or = 0;
    zr = [];
    Wr = [];
    w = [];
    i1 = [];
    Zr = [];
    Pr = [];
    id = -1;
    type = 0;
    Jr = "none";
    qe = "";
    Hr = "none";
    Ee = "";
    static Qr = 400;
    f = [];
    name = "none";
    filename = "";
    jr = !1;
    loaded = !1;
    Ts = !1;
    A0 = [];
    Kr = [];
    $r = [];
    qr = [];
    t2 = 0;
    i2 = [];
    e2 = [];
    s2 = [];
    h2 = [];
    async o2() {
        await new Promise((t,s)=>{
            const e = ()=>{
                void 0 !== XYSz ? t() : setTimeout(e, 10)
            }
            ;
            e()
        }
        )
    }
    static a2 = !1;
    static n2 = !1;
    async d0(t, s, e=!1) {
        void 0 === XYSz && await this.o2(),
        this.filename = s,
        this.name = s;
        for (let t = this.Or = 0; t < 10; t++)
            this.Wr[t] = 0;
        var i = splitContent(t);
        let o = null
          , a = null
          , h = null
          , n = null
          , r = null
          , l = null
          , u = null
          , f = !1
          , d = 0;
        var c = [];
        for (let s = 0; s < i.length; s++) {
            if (null == o && !f) {
                if (!e && "bmp>" == i[s]) {
                    for (let t = 0; t < this.Or; t++)
                        c.push(Ii9w.b0(`_res_pngs/${this.zr[t]}.json`));
                    for (let e = 0; e < this.Or; e++) {
                        var p = this.zr[e].replace("sys/", "");
                        let s = this.Wr[e];
                        for (let t = 0; t < this.Zr[e]; t++)
                            for (let t = 0; t < this.Pr[e]; t++)
                                this.A0[s] = `${this.filename}-${p}-${s}.png`,
                                s++
                    }
                }
                if (e && i[s],
                "head" == i[s]) {
                    s++,
                    this.Jr = i[s],
                    this.qe = `_res_pngs/${this.Jr}.png`,
                    c.push(Ii9w.m0(this.qe));
                    continue
                }
                if ("small" == i[s]) {
                    s++,
                    this.Hr = i[s],
                    this.Ee = `_res_pngs/${this.Hr}.png`,
                    c.push(Ii9w.m0(this.Ee));
                    continue
                }
                if ("small_x_shift" == i[s]) {
                    s++,
                    this.Fe = P1oA(i[s]);
                    continue
                }
                if ("resized" == i[s]) {
                    s++,
                    this.ti = P1oA(i[s]);
                    continue
                }
                if ("default_centerx" == i[s]) {
                    s++,
                    this.Yn = parseInt(i[s]);
                    continue
                }
                if ("default_centery" == i[s]) {
                    s++,
                    this.Nn = parseInt(i[s]);
                    continue
                }
                if ("cost" == i[s]) {
                    s++,
                    this.Ho = parseInt(i[s]);
                    continue
                }
                if ("walking_frame_rate" == i[s]) {
                    s++,
                    this.dr = parseInt(i[s]);
                    continue
                }
                if ("walking_speed" == i[s]) {
                    s++,
                    this._r = P1oA(i[s]);
                    continue
                }
                if ("walking_speedz" == i[s]) {
                    s++,
                    this.ur = P1oA(i[s]);
                    continue
                }
                if ("running_frame_rate" == i[s]) {
                    s++,
                    this.gr = parseInt(i[s]);
                    continue
                }
                if ("running_speed" == i[s]) {
                    s++,
                    this.mr = P1oA(i[s]);
                    continue
                }
                if ("running_speedz" == i[s]) {
                    s++,
                    this.pr = P1oA(i[s]);
                    continue
                }
                if ("heavy_walking_speed" == i[s]) {
                    s++,
                    this.Sr = P1oA(i[s]);
                    continue
                }
                if ("heavy_walking_speedz" == i[s]) {
                    s++,
                    this.br = P1oA(i[s]);
                    continue
                }
                if ("heavy_running_speed" == i[s]) {
                    s++,
                    this.Er = P1oA(i[s]);
                    continue
                }
                if ("heavy_running_speedz" == i[s]) {
                    s++,
                    this.Fr = P1oA(i[s]);
                    continue
                }
                if ("jump_height" == i[s]) {
                    s++,
                    this.Lr = P1oA(i[s]);
                    continue
                }
                if ("jump_distance" == i[s]) {
                    s++,
                    this.Br = P1oA(i[s]);
                    continue
                }
                if ("jump_distancez" == i[s]) {
                    s++,
                    this.Mr = P1oA(i[s]);
                    continue
                }
                if ("dash_height" == i[s]) {
                    s++,
                    this.yr = P1oA(i[s]);
                    continue
                }
                if ("dash_distance" == i[s]) {
                    s++,
                    this.wr = P1oA(i[s]);
                    continue
                }
                if ("dash_distancez" == i[s]) {
                    s++,
                    this.Dr = P1oA(i[s]);
                    continue
                }
                if ("rowing_height" == i[s]) {
                    s++,
                    this.Vr = P1oA(i[s]);
                    continue
                }
                if ("rowing_distance" == i[s]) {
                    s++,
                    this.Tr = P1oA(i[s]);
                    continue
                }
                if ("name" == i[s]) {
                    s++,
                    this.name = i[s];
                    continue
                }
                if ("weapon_hp" == i[s]) {
                    s++,
                    this.kr = parseInt(i[s]);
                    continue
                }
                if ("weapon_drop_hurt" == i[s]) {
                    s++,
                    this.Ir = parseInt(i[s]);
                    continue
                }
                if ("weapon_hit_sound" == i[s]) {
                    s++,
                    this.Cr = i[s],
                    this.Xr = XYSz._(this.Cr);
                    continue
                }
                if ("weapon_drop_sound" == i[s]) {
                    s++,
                    this.Ar = i[s],
                    this.Yr = XYSz._(this.Ar);
                    continue
                }
                if ("weapon_broken_sound" == i[s]) {
                    s++,
                    this.vr = i[s],
                    this.Nr = XYSz._(this.vr);
                    continue
                }
                if (4 < i[s].length && "file" == i[s].substring(0, 4) && (s++,
                this.zr[this.Or] = i[s],
                0 < this.Or && (this.Wr[this.Or] = this.Wr[this.Or - 1] + this.Zr[this.Or - 1] * this.Pr[this.Or - 1]),
                this.Or++),
                "limb_head_blood_60" == i[s]) {
                    for (let t = 0; t < 60; t++) {
                        s++;
                        var g = parseInt(i[s])
                          , y = (s++,
                        parseInt(i[s]));
                        this.s2[t] = {
                            x: g,
                            y: y
                        }
                    }
                    continue
                }
                if ("limb_head_blood" == i[s]) {
                    for (let t = 0; t < 30; t++) {
                        s++;
                        var x = parseInt(i[s])
                          , m = (s++,
                        parseInt(i[s]));
                        this.s2[t] = {
                            x: x,
                            y: m
                        }
                    }
                    continue
                }
                if ("limb_hand_weapon" == i[s]) {
                    for (let t = 0; t < 60; t++) {
                        s++;
                        var _ = parseInt(i[s])
                          , S = (s++,
                        parseInt(i[s]));
                        this.h2[t] = {
                            x: _,
                            y: S
                        }
                    }
                    continue
                }
                if ("limb_hand_weapon_120" == i[s]) {
                    for (let t = 0; t < 120; t++) {
                        s++;
                        var E = parseInt(i[s])
                          , b = (s++,
                        parseInt(i[s]));
                        this.h2[t] = {
                            x: E,
                            y: b
                        }
                    }
                    continue
                }
                if (5 < i[s].length && "limb_" == i[s].substring(0, 5)) {
                    var M = i[s]
                      , D = i[++s]
                      , w = (s++,
                    parseInt(i[s]))
                      , L = (s++,
                    parseInt(i[s]))
                      , B = (s++,
                    parseInt(i[s]))
                      , F = (s++,
                    parseInt(i[s]))
                      , I = (s++,
                    parseInt(i[s]))
                      , C = (s++,
                    parseInt(i[s]))
                      , T = D.replace("sys/", "");
                    this.$r[this.t2] = {
                        name: M,
                        l2: D,
                        w: w,
                        i1: L,
                        c: B,
                        r: F,
                        start: I,
                        c2: C,
                        Un: []
                    };
                    for (let t = 0; t < C; t++) {
                        var V = I + t;
                        this.$r[this.t2].Un.push({
                            l2: D,
                            x: V % B * w + 2,
                            y: Math.floor(V / B) * L + 2,
                            w: w - 4,
                            i1: L - 4,
                            d2: `${T}-${M}-${t}.png`
                        })
                    }
                    this.qr[M] = this.t2,
                    this.t2++,
                    null == this.i2[D] && (this.i2[D] = {
                        filename: D,
                        _2: []
                    }),
                    this.i2[D]._2.push({
                        u2: M,
                        w: w,
                        i1: L,
                        c: B,
                        r: F,
                        start: I,
                        c2: C
                    })
                }
                if ("w" == i[s] && 0 < this.Or) {
                    s++,
                    this.w[this.Or - 1] = parseInt(i[s]);
                    continue
                }
                if ("h" == i[s] && 0 < this.Or) {
                    s++,
                    this.i1[this.Or - 1] = parseInt(i[s]);
                    continue
                }
                if ("col" == i[s] && 0 < this.Or) {
                    s++,
                    this.Zr[this.Or - 1] = parseInt(i[s]);
                    continue
                }
                if ("row" == i[s] && 0 < this.Or) {
                    s++,
                    this.Pr[this.Or - 1] = parseInt(i[s]);
                    continue
                }
            }
            if ("<wsl" == i[s])
                f = !0;
            else if ("<f" == i[s])
                o = new GDLT,
                s++,
                o.index = parseInt(i[s]),
                s++,
                o.rr = i[s],
                "-" == o.rr && null != this.f[o.index - 1] && (o.rr = this.f[o.index - 1].rr),
                o.Hn = this.Yn,
                o.Qn = this.Nn,
                this.f[o.index] = o;
            else if ("<o" == i[s])
                a = new Kahe,
                o.jn = a;
            else if ("<bp" == i[s])
                n = new LFN6,
                o.Kn = n;
            else if ("<c" == i[s])
                r = new AkRS,
                o.$n = r;
            else if ("<w" == i[s])
                h = new UNzS,
                o.qn = h;
            else if ("<i" == i[s])
                u = new WlEE,
                o.tr.push(u),
                o.ir++;
            else if ("<b" == i[s])
                l = new _IUN,
                o.er.push(l),
                o.sr++;
            else {
                if (null != o) {
                    if (null != a) {
                        if ("kind" == i[s]) {
                            s++,
                            a.kind = parseInt(i[s]);
                            continue
                        }
                        if ("x" == i[s]) {
                            s++,
                            a.x = parseInt(i[s]);
                            continue
                        }
                        if ("y" == i[s]) {
                            s++,
                            a.y = parseInt(i[s]);
                            continue
                        }
                        if ("action" == i[s]) {
                            s++,
                            a.action = parseInt(i[s]);
                            continue
                        }
                        if ("dvx" == i[s]) {
                            s++,
                            a.en = parseInt(i[s]);
                            continue
                        }
                        if ("dvy" == i[s]) {
                            s++,
                            a.sn = parseInt(i[s]);
                            continue
                        }
                        if ("oid" == i[s]) {
                            s++,
                            a.pn = parseInt(i[s]);
                            continue
                        }
                        if ("facing" == i[s]) {
                            s++,
                            a.Ws = parseInt(i[s]);
                            continue
                        }
                        if ("o>" != i[s])
                            continue;
                        a = null;
                        continue
                    }
                    if (null != n) {
                        if ("x" == i[s]) {
                            s++,
                            n.x = P1oA(i[s]);
                            continue
                        }
                        if ("y" == i[s]) {
                            s++,
                            n.y = P1oA(i[s]);
                            continue
                        }
                        if ("bp>" != i[s])
                            continue;
                        n = null;
                        continue
                    }
                    if (null != r) {
                        if ("kind" == i[s]) {
                            s++,
                            r.kind = parseInt(i[s]);
                            continue
                        }
                        if ("x" == i[s]) {
                            s++,
                            r.x = parseInt(i[s]);
                            continue
                        }
                        if ("y" == i[s]) {
                            s++,
                            r.y = parseInt(i[s]);
                            continue
                        }
                        if ("injury" == i[s]) {
                            s++,
                            r.ln = parseInt(i[s]);
                            continue
                        }
                        if ("cover" == i[s]) {
                            s++,
                            r.Sn = parseInt(i[s]);
                            continue
                        }
                        if ("vaction" == i[s]) {
                            s++,
                            r.bn = parseInt(i[s]);
                            continue
                        }
                        if ("aaction" == i[s]) {
                            s++,
                            r.En = parseInt(i[s]);
                            continue
                        }
                        if ("jaction" == i[s]) {
                            s++,
                            r.Fn = parseInt(i[s]);
                            continue
                        }
                        if ("taction" == i[s]) {
                            s++,
                            r.Ln = parseInt(i[s]);
                            continue
                        }
                        if ("daction" == i[s]) {
                            s++,
                            r.Bn = parseInt(i[s]);
                            continue
                        }
                        if ("throwvx" == i[s]) {
                            s++,
                            r.Mn = parseInt(i[s]),
                            r.Mn < -9e4 && (r.Mn = 0);
                            continue
                        }
                        if ("throwvy" == i[s]) {
                            s++,
                            r.yn = parseInt(i[s]),
                            r.yn < -9e4 && (r.yn = 0);
                            continue
                        }
                        if ("throwvz" == i[s]) {
                            s++,
                            r.wn = parseInt(i[s]),
                            r.wn < -9e4 && (r.wn = 0);
                            continue
                        }
                        if ("hurtable" == i[s]) {
                            s++,
                            r.Dn = parseInt(i[s]);
                            continue
                        }
                        if ("throwinjury" == i[s]) {
                            s++,
                            r.Vn = parseInt(i[s]),
                            r.Vn < -9e4 && (r.Vn = 0);
                            continue
                        }
                        if ("fronthurtact" == i[s]) {
                            s++,
                            r.Tn = parseInt(i[s]);
                            continue
                        }
                        if ("backhurtact" == i[s]) {
                            s++,
                            r.kn = parseInt(i[s]);
                            continue
                        }
                        if ("decrease" == i[s]) {
                            s++,
                            r.In = parseInt(i[s]);
                            continue
                        }
                        if ("dircontrol" == i[s]) {
                            s++,
                            r.Cn = parseInt(i[s]);
                            continue
                        }
                        if ("c>" != i[s])
                            continue;
                        r = null;
                        continue
                    }
                    if (null != h) {
                        if ("kind" == i[s]) {
                            s++,
                            h.kind = parseInt(i[s]);
                            continue
                        }
                        if ("x" == i[s]) {
                            s++,
                            h.x = P1oA(i[s]);
                            continue
                        }
                        if ("y" == i[s]) {
                            s++,
                            h.y = P1oA(i[s]);
                            continue
                        }
                        if ("weaponact" == i[s]) {
                            s++,
                            h.An = parseInt(i[s]);
                            continue
                        }
                        if ("attacking" == i[s]) {
                            s++,
                            h.vn = parseInt(i[s]);
                            continue
                        }
                        if ("cover" == i[s]) {
                            s++,
                            h.Sn = parseInt(i[s]);
                            continue
                        }
                        if ("dvx" == i[s]) {
                            s++,
                            h.en = parseInt(i[s]);
                            continue
                        }
                        if ("dvy" == i[s]) {
                            s++,
                            h.sn = parseInt(i[s]);
                            continue
                        }
                        if ("dvz" == i[s]) {
                            s++,
                            h.Xn = parseInt(i[s]);
                            continue
                        }
                        if ("w>" != i[s])
                            continue;
                        h = null;
                        continue
                    }
                    if (null != u) {
                        if ("kind" == i[s]) {
                            s++,
                            u.kind = parseInt(i[s]);
                            continue
                        }
                        if ("x" == i[s]) {
                            s++,
                            u.x = parseInt(i[s]);
                            continue
                        }
                        if ("y" == i[s]) {
                            s++,
                            u.y = parseInt(i[s]);
                            continue
                        }
                        if ("w" == i[s]) {
                            s++,
                            u.w = parseInt(i[s]);
                            continue
                        }
                        if ("h" == i[s]) {
                            s++,
                            u.i1 = parseInt(i[s]);
                            continue
                        }
                        if ("dvx" == i[s]) {
                            s++,
                            u.en = parseInt(i[s]);
                            continue
                        }
                        if ("dvy" == i[s]) {
                            s++,
                            u.sn = parseInt(i[s]);
                            continue
                        }
                        if ("fall" == i[s]) {
                            s++,
                            u.hn = parseInt(i[s]);
                            continue
                        }
                        if ("arest" == i[s]) {
                            s++,
                            u.on = parseInt(i[s]);
                            continue
                        }
                        if ("vrest" == i[s]) {
                            s++,
                            u.an = parseInt(i[s]);
                            continue
                        }
                        if ("respond" == i[s]) {
                            s++,
                            u.nn = parseInt(i[s]);
                            continue
                        }
                        if ("bdefend" == i[s]) {
                            s++,
                            u.rn = parseInt(i[s]);
                            continue
                        }
                        if ("injury" == i[s]) {
                            s++,
                            u.ln = parseInt(i[s]);
                            continue
                        }
                        if ("zwidth" == i[s]) {
                            s++,
                            u.cn = parseInt(i[s]);
                            continue
                        }
                        if ("effect" == i[s]) {
                            s++,
                            u.effect = parseInt(i[s]);
                            continue
                        }
                        if ("catchingact" == i[s]) {
                            s++,
                            u.dn = parseInt(i[s]),
                            s++,
                            u._n = parseInt(i[s]);
                            continue
                        }
                        if ("caughtact" == i[s]) {
                            s++,
                            u.un = parseInt(i[s]),
                            s++,
                            u.fn = parseInt(i[s]);
                            continue
                        }
                        if ("pickingact" == i[s]) {
                            s++,
                            u.gn = parseInt(i[s]);
                            continue
                        }
                        if ("pickedact" == i[s]) {
                            s++,
                            u.mn = parseInt(i[s]);
                            continue
                        }
                        if ("i>" != i[s])
                            continue;
                        u = null;
                        continue
                    }
                    if (null != l) {
                        if ("kind" == i[s]) {
                            s++,
                            l.kind = parseInt(i[s]);
                            continue
                        }
                        if ("x" == i[s]) {
                            s++,
                            l.x = parseInt(i[s]);
                            continue
                        }
                        if ("y" == i[s]) {
                            s++,
                            l.y = parseInt(i[s]);
                            continue
                        }
                        if ("w" == i[s]) {
                            s++,
                            l.w = parseInt(i[s]);
                            continue
                        }
                        if ("h" == i[s]) {
                            s++,
                            l.i1 = parseInt(i[s]);
                            continue
                        }
                        if ("b>" != i[s])
                            continue;
                        l = null;
                        continue
                    }
                    if ("pic" == i[s]) {
                        s++,
                        o.Un = parseInt(i[s]);
                        continue
                    }
                    if ("state" == i[s]) {
                        s++,
                        o.state = parseInt(i[s]);
                        continue
                    }
                    if ("wait" == i[s]) {
                        s++,
                        o.wait = parseInt(i[s]);
                        continue
                    }
                    if ("next" == i[s]) {
                        s++,
                        o.next = parseInt(i[s]);
                        continue
                    }
                    if ("dvx" == i[s]) {
                        s++,
                        o.en = parseInt(i[s]);
                        continue
                    }
                    if ("dvy" == i[s]) {
                        s++,
                        o.sn = parseInt(i[s]);
                        continue
                    }
                    if ("dvz" == i[s]) {
                        s++,
                        o.Xn = parseInt(i[s]);
                        continue
                    }
                    if ("centerx" == i[s]) {
                        s++,
                        o.Hn = parseInt(i[s]);
                        continue
                    }
                    if ("centery" == i[s]) {
                        s++,
                        o.Qn = parseInt(i[s]);
                        continue
                    }
                    if ("hit_a" == i[s]) {
                        s++,
                        o.xn = parseInt(i[s]);
                        continue
                    }
                    if ("hit_d" == i[s]) {
                        s++,
                        o.Gn = parseInt(i[s]);
                        continue
                    }
                    if ("hit_j" == i[s]) {
                        s++,
                        o.Yh = parseInt(i[s]);
                        continue
                    }
                    if ("hit_Fa" == i[s]) {
                        s++,
                        o.Rs = parseInt(i[s]);
                        continue
                    }
                    if ("hit_Ua" == i[s]) {
                        s++,
                        o.On = parseInt(i[s]);
                        continue
                    }
                    if ("hit_Da" == i[s]) {
                        s++,
                        o.zn = parseInt(i[s]);
                        continue
                    }
                    if ("hit_Fj" == i[s]) {
                        s++,
                        o.Wn = parseInt(i[s]);
                        continue
                    }
                    if ("hit_Uj" == i[s]) {
                        s++,
                        o.Zn = parseInt(i[s]);
                        continue
                    }
                    if ("hit_Dj" == i[s]) {
                        s++,
                        o.Pn = parseInt(i[s]);
                        continue
                    }
                    if ("hit_ja" == i[s]) {
                        s++,
                        o.Jn = parseInt(i[s]);
                        continue
                    }
                    if ("mp" == i[s]) {
                        s++,
                        o.os = parseInt(i[s]);
                        continue
                    }
                    if ("sound" == i[s]) {
                        s++,
                        o.lr = i[s],
                        o.cr = XYSz._(o.lr);
                        continue
                    }
                    if ("f>" == i[s]) {
                        0 < o.tr.length && (o.hr = new BCel(o.tr)),
                        0 < o.er.length && (o.ar = new BCel(o.er)),
                        o = null;
                        continue
                    }
                }
                f && ("entry" == i[s] ? (s++,
                d = parseInt(i[s]),
                this.Ur[d] = new WlEE,
                s++,
                this.Rr[d] = i[s]) : "dvx" == i[s] ? (s++,
                this.Ur[d].en = parseInt(i[s])) : "dvy" == i[s] ? (s++,
                this.Ur[d].sn = parseInt(i[s])) : "fall" == i[s] ? (s++,
                this.Ur[d].hn = parseInt(i[s])) : "arest" == i[s] ? (s++,
                this.Ur[d].on = parseInt(i[s])) : "vrest" == i[s] ? (s++,
                this.Ur[d].an = parseInt(i[s])) : "respond" == i[s] ? (s++,
                this.Ur[d].nn = parseInt(i[s])) : "bdefend" == i[s] ? (s++,
                this.Ur[d].rn = parseInt(i[s])) : "injury" == i[s] ? (s++,
                this.Ur[d].ln = parseInt(i[s])) : "zwidth" == i[s] ? (s++,
                this.Ur[d].cn = parseInt(i[s])) : "effect" == i[s] ? (s++,
                this.Ur[d].effect = parseInt(i[s])) : "wsl>" == i[s] && (f = !1))
            }
        }
        this.t2;
        var A = new Map
          , z = new Map;
        for (let t = 0; t < TIJj.Qr; t++) {
            var v = this.f[t];
            null != v && (A.set(v.Hn, (A.get(v.Hn) || 0) + 1),
            z.set(v.Qn, (z.get(v.Qn) || 0) + 1))
        }
        this.Yn = [...A.entries()].reduce((t,s)=>s[1] > t[1] ? s : t)[0],
        this.Nn = [...z.entries()].reduce((t,s)=>s[1] > t[1] ? s : t)[0];
        try {
            await Promise.all(c),
            this.loaded = !0
        } catch (t) {
            dbl0(`Failed to load one or more textures for ${this.name}: ` + t)
        }
        TIJj.a2 = !1
    }
    f2() {}
    g2(t) {
        if (this.f[t]) {
            var s = this.f[t].Un;
            for (let t = 0; t < this.Or; t++)
                if (s >= this.Wr[t] && s < this.Wr[t] + this.Pr[t] * this.Zr[t])
                    return this.w[t]
        }
        return 0
    }
    put(t, s, e, i=1, o=!1, a=0) {
        this.f[e] && (e = this.f[e].Un + a,
        D.Mwfo(this.A0[e], t, s, 0, i / this.ti, 0, 0, 0, 1, o))
    }
}
class NEOE {
    id = 0;
    w = 0;
    us = 0;
    _s = 0;
    m2 = 0;
    S2 = 0;
    b2 = 0;
    E2 = 0;
    F2 = 1;
    L2 = 0;
    B2 = new Array(30);
    M2 = new Array(30);
    w2 = "";
    D2 = !1;
    V2 = "";
    name = "";
    T2 = new Array(30);
    I2 = new Array(30);
    C2 = new Array(30);
    A2 = new Array(30);
    loop = new Array(30);
    v2 = new Array(30);
    X2 = new Array(30);
    Y2 = new Array(30);
    c = new Array(30);
    N2 = new Array(30);
    U2 = new Array(30);
    R2 = new Array(30);
    G2 = new Array(30);
    O2 = new Array(30);
    z2 = new Array(30);
    W2 = void 0;
    filename = "";
    loaded = !1;
    Ts = !1;
    ks = !1;
    constructor() {}
    async Is() {
        this.ks = !0;
        var t = [];
        this.w2.toLowerCase().endsWith(".png") || (this.w2 = this.w2 + ".png"),
        t.push(await Ii9w.S0(this.w2)),
        this.V2 && (this.V2.toLowerCase().endsWith(".png") || (this.V2 = this.V2 + ".png"),
        t.push(await Ii9w.S0(this.V2)),
        this.D2 = !0);
        let s = 0;
        for (s = 0; s < this.L2; s++)
            this.B2[s].toLowerCase().endsWith(".png") || (this.B2[s] = this.B2[s] + ".png"),
            t.push(await Ii9w.S0(this.B2[s])),
            this.M2[s] && (this.M2[s].toLowerCase().endsWith(".png") || (this.M2[s] = this.M2[s] + ".png"),
            t.push(await Ii9w.S0(this.M2[s])));
        await Promise.all(t),
        this.ks = !1,
        this.Ts = !0
    }
}
class T7ES {
    static s0 = new Array(100);
    static Z2 = new Array(60);
    static Ae = new Array(100);
    static P2 = new Array(30);
    static _e = 0;
    static Ue = 0;
    static P0 = 0;
    static J2 = 0;
    static H2 = 0;
    static loading = !1;
    static loaded = !1;
    static Q2 = !1;
    static j2 = !1;
    static K2 = !1;
    static q2 = !1;
    static $ = !0;
    static async tl() {
        if (void 0 !== TIJj && void 0 !== NEOE) {
            T7ES.loading = !0;
            var s, e, i = (await lvT9.F0("_res_data/_data.txt")).split(/\s+/g);
            for (let t = 0; t < i.length; t++) {
                if ("<object>" == i[t])
                    for (t++; "id:" == i[t] && (t++,
                    (s = new TIJj).id = parseInt(i[t]),
                    t++,
                    t++,
                    s.type = parseInt(i[t]),
                    t++,
                    t++,
                    s.filename = i[t],
                    T7ES.s0[T7ES._e] = s,
                    T7ES._e++),
                    "<object_end>" != i[++t]; )
                        ;
                if ("<background>" == i[t])
                    for (t++; "id:" == i[t] && (t++,
                    (e = new NEOE).id = parseInt(i[t]),
                    t++,
                    t++,
                    e.filename = i[t],
                    T7ES.Ae[T7ES.Ue] = e,
                    T7ES.Ue++),
                    "<background_end>" != i[++t]; )
                        ;
            }
            T7ES.loaded = !0,
            T7ES.loading = !1
        }
    }
    static async il() {
        T7ES.Q2 = !0;
        var s = (await lvT9.F0("_res_data/_stage.txt")).split(/\s+/g);
        let e = null
          , i = null
          , o = null;
        for (let t = 0; t < s.length; t++)
            if ("<stage>" == s[t])
                e = new K2Ri,
                i = null,
                o = null;
            else if (null == i && "id:" == s[t])
                t++,
                e.id = parseInt(s[t]),
                T7ES.Z2[e.id] = e;
            else {
                if (null != e) {
                    if ("<phase>" == s[t]) {
                        i = new JM6H,
                        e.el[e.sl] = i,
                        e.sl++,
                        o = null,
                        t++,
                        t++,
                        i.bound = parseInt(s[t]);
                        continue
                    }
                    if (null != i) {
                        if ("id:" == s[t]) {
                            o = new R2BL,
                            t++,
                            o.id = parseInt(s[t]),
                            o.x = i.bound + 80,
                            i.hl[i.ol] = o,
                            i.ol++;
                            continue
                        }
                        if ("music:" == s[t]) {
                            t++,
                            i.al = s[t];
                            continue
                        }
                        if ("when_clear_goto_phase:" == s[t]) {
                            t++,
                            i.nl = parseInt(s[t]);
                            continue
                        }
                        if (null != o) {
                            if ("x:" == s[t]) {
                                t++,
                                o.x = parseInt(s[t]);
                                continue
                            }
                            if ("hp:" == s[t]) {
                                t++,
                                o.ls = parseInt(s[t]);
                                continue
                            }
                            if ("times:" == s[t]) {
                                t++,
                                o.rl = parseInt(s[t]);
                                continue
                            }
                            if ("reserve:" == s[t]) {
                                t++,
                                o.ll = parseInt(s[t]);
                                continue
                            }
                            if ("<boss>" == s[t]) {
                                o.cl = 2;
                                continue
                            }
                            if ("join:" == s[t]) {
                                t++,
                                o.join = parseInt(s[t]);
                                continue
                            }
                            if ("<soldier>" == s[t]) {
                                o.cl = 1,
                                o.rl = 50;
                                continue
                            }
                            if ("ratio:" == s[t]) {
                                t++,
                                o.ratio = parseFloat(s[t]);
                                continue
                            }
                            if ("y:" == s[t]) {
                                t++,
                                o.y = parseInt(s[t]);
                                continue
                            }
                            if ("act:" == s[t]) {
                                t++,
                                o.xs = parseInt(s[t]);
                                continue
                            }
                        }
                        "<phase_end>" == s[t] && (i = null,
                        o = null)
                    }
                }
                "<stage_end>" == s[t] && (null != e && (i = null,
                o = null),
                e = null)
            }
        T7ES.j2 = !0,
        T7ES.Q2 = !1
    }
    static async dl() {
        let s = !(T7ES.K2 = !0);
        var e = [];
        for (let t = 0; t < T7ES.Ue; t++) {
            var i = T7ES.Ae[t]
              , o = (await lvT9.F0(i.filename + ".txt")).split(/\s+/g);
            s = !1;
            for (let t = 0; t < o.length; t++) {
                if (!s) {
                    if ("name:" == o[t]) {
                        t++,
                        i.name = o[t];
                        continue
                    }
                    if ("width:" == o[t]) {
                        t++,
                        i.w = parseInt(o[t]);
                        continue
                    }
                    if ("zboundary:" == o[t]) {
                        t++,
                        i.us = parseInt(o[t]),
                        t++,
                        i._s = parseInt(o[t]);
                        continue
                    }
                    if ("perspective:" == o[t]) {
                        t++,
                        i.m2 = parseInt(o[t]),
                        t++,
                        i.S2 = parseInt(o[t]);
                        continue
                    }
                    if ("shadow:" == o[t]) {
                        t++,
                        i.w2 = o[t],
                        o[t].endsWith("_x3") && (i.V2 = o[t].replace("_x3", "_x1")),
                        t++,
                        t++,
                        i.b2 = parseInt(o[t]),
                        t++,
                        i.E2 = parseInt(o[t]);
                        continue
                    }
                    if ("upscale:" == o[t]) {
                        t++,
                        i.F2 = parseInt(o[t]);
                        continue
                    }
                    "layer:" == o[t] && (t++,
                    i.B2[i.L2] = o[t],
                    o[t].endsWith("_x3") && (i.M2[i.L2] = o[t].replace("_x3", "_x1")),
                    s = !0,
                    i.L2++)
                }
                s && ("width:" == o[t] ? (t++,
                i.T2[i.L2 - 1] = parseInt(o[t])) : "x:" == o[t] ? (t++,
                i.I2[i.L2 - 1] = parseInt(o[t])) : "y:" == o[t] ? (t++,
                i.C2[i.L2 - 1] = parseInt(o[t])) : "height:" == o[t] ? (t++,
                i.A2[i.L2 - 1] = parseInt(o[t])) : "loop:" == o[t] ? (t++,
                i.loop[i.L2 - 1] = parseInt(o[t])) : "cc:" == o[t] ? (t++,
                i.Y2[i.L2 - 1] = parseInt(o[t])) : "c1:" == o[t] ? (t++,
                i.v2[i.L2 - 1] = parseInt(o[t])) : "c2:" == o[t] ? (t++,
                i.X2[i.L2 - 1] = parseInt(o[t])) : "csx:" == o[t] ? (t++,
                i.U2[i.L2 - 1] = parseFloat(o[t])) : "csy:" == o[t] ? (t++,
                i.R2[i.L2 - 1] = parseFloat(o[t])) : "special:" == o[t] ? (t++,
                i.G2[i.L2 - 1] = parseInt(o[t])) : "csound:" == o[t] ? (t++,
                i.O2[i.L2 - 1] = XYSz._(o[t])) : "layer_end" == o[t] && (s = !1))
            }
            e.push(i.Is())
        }
        await Promise.all(e),
        T7ES.q2 = !0,
        T7ES.K2 = !1
    }
}
class Sh7E {
    be = 1;
    ki = !1;
    q = !1;
    Za = !1;
    Pa = !1;
    Ja = !1;
    Ha = !1;
    Qa = !1;
    ja = !1;
    Ka = !1;
    $a = !1;
    qa = !1;
    ge = !1;
    _l = !1;
    ul = !1;
    fl = !1;
    gl = !1;
    ml = !1;
    pl = !1;
    Sl = !1;
    bl = !1;
    El = !1;
    $s = 0;
    H0 = 10;
    vi = ["", "", "", "", "", "", "", ""];
    Fl = [0, 0, 0, 0, 0, 0, 0, 0];
    Co = 0;
    jh = [0, 0];
    Kh = [0, 0];
    Ll = 0;
    la = 120;
    ke = 90;
    Us = 90;
    ss = -1;
    Xe = !1;
    Ye = !1;
    ra = !0;
    ca = 300;
    Ne = !0;
    Ko = "en";
    zo = !1;
    Va = new Map;
    Ta = new Map;
    ka = new Map;
    Ia = new Map;
    Aa = new Map;
    Ca = 0;
    ha = 0;
    da = 0;
    _a = !1;
    pa = 0;
    Sa = 0;
    ua = 0;
    ma = 0;
    ga = 0;
    qs = 0;
    fa = 0;
    static Bl = OYHD;
    static Fo = !1;
    static So = !1;
    static Ml = 0;
    static yl = 30;
    static wl = -260;
    static Dl = 0;
    static Vl = 0;
    static Tl = 0;
    static kl = 0;
    static Il = 0;
    static Cl = 0;
    static Al = 0;
    static vl = 0;
    static Xl = 0;
    static Yl = 0;
    Bo = 0;
    bh = 0;
    Ce = 100;
    Ie = 1;
    Nl = 0;
    u = 1;
    Ul;
    Rl = 30;
    As = 0;
    Cs = 1;
    xl = 0;
    ba = 2;
    Ea = [0, 0];
    Fa = [0, 0];
    Gl = 0;
    Ol = new Array(3001).fill(0);
    zl = 0;
    Wl = 0;
    Zl = 0;
    Pl = 0;
    Jl = 0;
    Wo = 0;
    Qe = 0;
    wo = 0;
    Di = !1;
    yi = "";
    Hl = 0;
    static Y = new Array(44).fill("");
    static nt = [0, 0, 0, 0];
    static lt = new Array(44).fill("");
    static rt = [-1, -1, -1, -1];
    static st = [];
    static ht = [];
    static ct = 0;
    ya = 0;
    Ql = 0;
    jl = 0;
    Kl = 0;
    Xs = 0;
    $l = !1;
    ql = 31;
    pause = 0;
    Wa = 0;
    La = 0;
    Ba = 0;
    bs = 0;
    Es = 0;
    Fs = 0;
    Ls = 0;
    Bs = 0;
    Ms = 0;
    ys = 0;
    ws = 0;
    Ds = 0;
    Vs = 0;
    rh = 0;
    ve = 1;
    tc = 1;
    ic = 3;
    ec = 5;
    sc = 15;
    hc = 20;
    oc = -1;
    Zs = 400;
    ts = new Array(this.Zs);
    Ke = new Array(this.Zs);
    ac = 333;
    nc = new Array(this.ac).fill(0);
    rc = new Array(this.ac).fill(0);
    lc = new Array(this.ac).fill(0);
    cc = new Array(this.ac).fill(0);
    dc = 0;
    _c = 0;
    uc = 0;
    tn = !1;
    jo = 0;
    P0 = 0;
    J2 = 0;
    fc = 0;
    gc = 0;
    n = 0;
    mc = 0;
    Sc = 0;
    bc = 0;
    Ec = 0;
    c = 0;
    x = 0;
    y = 0;
    z = 0;
    x2 = 0;
    y2 = 0;
    oa = 0;
    yt = 0;
    Fc = 0;
    Lc = 0;
    Bc = 0;
    Mc = 0;
    yc = 0;
    wc;
    Un = new Array(this.Zs);
    Dc = 0;
    us = 0;
    _s = 0;
    Vc = 0;
    Tc = 0;
    b = 0;
    kc = 0;
    Ic = 0;
    Cc = 0;
    Ac = 0;
    vc = 0;
    Xc = 0;
    Yc = 0;
    Nc = 0;
    Uc = 0;
    cx = 0;
    cy = 0;
    Rc;
    Hs = 0;
    fh = 0;
    gh = 0;
    Nh = 0;
    target = 0;
    xc = 0;
    Gc = 0;
    Oc = 0;
    zc = 0;
    Wc = 0;
    Zc = new Array(200);
    jn;
    qn;
    Pc;
    Kn;
    $n;
    Jc;
    er;
    tr;
    Hc;
    Qc = new WlEE;
    jc = 0;
    Kc = 0;
    $c = 0;
    qc = 0;
    td = "";
    ed = "";
    sd;
    hd;
    od;
    ad;
    nd = !1;
    cn = 0;
    valid = 0;
    rd = 0;
    ld = 0;
    dd = 0;
    vn = 0;
    _d = 0;
    ud = 0;
    fd;
    gd;
    md;
    pd;
    Sd = 0;
    bd = 0;
    Ed = 0;
    Fd = 0;
    Ld = 0;
    Bd = 0;
    Md = 0;
    yd = 0;
    qo = new Array(40);
    wd = 0;
    ta = 0;
    ia = 0;
    Ve = new Array(500);
    we = 0;
    Dd = 0;
    De = 0;
    Vd = 0;
    pn = new Array(20);
    Td = 0;
    kd = 0;
    po = 0;
    va = 0;
    $o = 0;
    join = new Array(8);
    Oo = [!1, !1, !1, !1, !1, !1, !1, !1];
    eo = [0, 0, 0, 0, 0, 0, 0, 0];
    Id = [-1, -1, -1, -1, -1, -1, -1, -1];
    ea = -100;
    na = 0;
    aa = [0, 0, 0, 0, 0, 0, 0, 0];
    io = [0, 0, 0, 0, 0, 0, 0, 0];
    Ao = [0, 0, 0, 0, 0];
    vo = -1;
    Xo = 0;
    px = 0;
    Yo = 0;
    Cd = 0;
    Ad = 0;
    Zo = 45;
    fo = 0;
    Uo = 0;
    Ro = 0;
    xo = 0;
    sa = 0;
    Go = 0;
    Po = 100;
    Kt = 0;
    $t = 0;
    wt = 0;
    $e = new Array(20).fill(0);
    Re = [500, 500, 500, 500, 500, 500, 500, 500];
    xe = [-1, -1, -1, -1, -1, -1, -1, -1];
    ne = [0, 0, 0, 0, 0, 0, 0, 0];
    re = [-1, -1, -1, -1, -1, -1, -1, -1];
    le = [0, 0, 0, 0, 0, 0, 0, 0];
    ce = [0, 1, 2, 3, 4, 5, 6, 7];
    Ns = [1, 1, 2, 2, 3, 3, 4, 4];
    Se = 0;
    Je = 0;
    He = [0, 0, 0, 0];
    Pe = [4, 34, 34, 4, 4, 35, 64, 4, 4, 38, 124, 4, 4, 34];
    Ze = [235, 221, 235, 217, 265, 182, 265, 178, 325, 140, 325, 136, 445, 102, 295, 221, 265, 217, 265, 182, 265, 178, 325, 140, 325, 136, 445, 102, 355, 221, 355, 217, 385, 182, 325, 178, 325, 140, 325, 136, 445, 102, 415, 221, 385, 217, 385, 182, 325, 178, 325, 140, 325, 136, 445, 102, 475, 221, 475, 217, 505, 182, 505, 178, 565, 140, 445, 136, 445, 102, 535, 221, 505, 217, 505, 182, 505, 178, 565, 140, 445, 136, 445, 102, 595, 221, 595, 217, 625, 182, 565, 178, 565, 140, 445, 136, 445, 102, 655, 221, 625, 217, 625, 182, 565, 178, 565, 140, 445, 136, 445, 102];
    Ge = [0, 0, 0, 0, 0, 0, 0, 0];
    Oe = 1;
    ze = 0;
    We = 0;
    oe = 0;
    ae = 0;
    pe = 0;
    Le = ["C", "1", "2", "3", "4", "5", "6", "7", "8"];
    Me = 0;
    de = !1;
    R0 = !1;
    left = !1;
    right = !1;
    attack = !1;
    fe = !1;
    ah = !1;
    vd = [1, 2, 4, 5, 6, 11, 9, 10, 8, 7];
    Xd = -1;
    Yd = new Array(this.Zs);
    Nd = "";
    static t0 = 0;
    static Da = 0;
    Ud = !0;
    Vi = "";
    Rd = "";
    xd = 0;
    Gd = 0;
    Od = 0;
    zd = 0;
    Ps = new Array(this.Zs);
    Wd = 0;
    Zd = 0;
    Pd = 0;
    Jd = 0;
    Hd = 0;
    Qd = 0;
    Qs = 0;
    jd = 0;
    Kd = 0;
    $d = 0;
    qd = 0;
    t_ = 0;
    i_ = 0;
    e_ = 0;
    s_ = 0;
    h_ = 0;
    o_ = 0;
    a_ = 0;
    n_ = 0;
    r_ = 0;
    l_ = 0;
    c_ = 0;
    d_ = 0;
    __ = 0;
    u_ = 0;
    f_ = 0;
    g_ = 0;
    yh = 0;
    m_ = 0;
    p_ = 0;
    S_ = 0;
    b_ = 0;
    E_ = 0;
    F_ = 0;
    L_ = 0;
    B_ = 0;
    M_ = 0;
    y_ = 0;
    ls = 0;
    r = 0;
    w_ = 0;
    D_ = 0;
    V_ = 0;
    T_ = 0;
    ll = 0;
    k_ = 0;
    I_ = 0;
    C_ = 0;
    A_ = 0;
    Wh = [30, 31, 33, 34, 39, 32, 35, 36, 37, 122, 123];
    Rh = 11;
    ho = [1, 1];
    oo = [0, 0];
    Zh = new Array(11);
    xh = [20, 20, 8, 8, 8, 2, 2, 3, 2, 10, 10, 42, 42, 2, 8, 0, 0, 0, 3, 0, 10, 10, 0, 20, 12, 12, 0, 0, 8, 3, 0, 10, 10, 20, 0, 4, 0, 10, 8, 0, 3, 6, 10, 10, 0, 0, 0, 0, 0, 9, 8, 3, 8, 10, 10];
    Gh = [7, 7, 4, 4, 4, 1, 1, 1, 1, 3, 3, 20, 20, 1, 4, 0, 0, 0, 1, 0, 3, 3, 0, 10, 6, 6, 0, 0, 4, 1, 1, 3, 3, 10, 0, 2, 0, 5, 4, 0, 1, 3, 3, 3, 0, 0, 0, 0, 0, 6, 4, 1, 4, 3, 3];
    no = [30, 30, 10, 10, 10, 7, 7, 3, 3, 15, 15, 30, 30, 10, 10, 10, 7, 7, 3, 3, 15, 15];
    ro = [10, 10, 5, 5, 5, 3, 3, 1, 1, 3, 3, 10, 10, 5, 5, 5, 3, 3, 1, 1, 3, 3];
    Oh = [30, 30, 10, 10, 10, 7, 7, 3, 3, 15, 15, 30, 30, 10, 10, 10, 7, 7, 3, 3, 15, 15];
    zh = [10, 10, 5, 5, 5, 3, 3, 1, 1, 3, 3, 10, 10, 5, 5, 5, 3, 3, 1, 1, 3, 3];
    bo = [10, 10, 4, 4, 0, 0, 1, 1, 0, 5, 5, 10, 10, 4, 4, 0, 0, 1, 1, 0, 5, 5];
    Eo = [3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1];
    so = [100, 100];
    Uh = !0;
    Ph = 6;
    Jh = 2;
    Hh = 0;
    qh = new Array(2);
    co = [0, 0];
    _o = [0, 0];
    ao = 10;
    lo = 0;
    do = 0;
    uo = 0;
    v_ = 0;
    X_ = 0;
    Qh = 0;
    $h = 0;
    mo = 80;
    Do = new Array(22);
    Vo = new Array(2);
    To = new Array(2);
    ko = new Array(2);
    Y_ = "Man: {0}     HP: {1}     Reserve: {2}     Die: {3}";
    N_ = "Man: {0}     HP: {1}";
    static K0 = 0;
    Ci(t=!0) {
        0 == CrdD.qi.size && CrdD.Ga();
        let s;
        if ("" != (r = localStorage.getItem("z@yPoeS*") || "")) {
            let t = 0;
            var i = r.split("©");
            let s = !0
              , e = !1;
            for (t = 0; t < 44; t++)
                if (s = !0,
                1 <= t % 11 && t % 11 <= 7) {
                    var o = CrdD.Ra.get(i[t]);
                    if (o) {
                        for (var [a,h] of CrdD.qi.entries())
                            o.x === h.x && o.y === h.y && o.w === h.w && o.i1 === h.i1 && (i[t] = a,
                            s = !1);
                        if (s) {
                            e = !0;
                            break
                        }
                    }
                }
            e || localStorage.setItem("PoeS*z@y", i.join("©")),
            localStorage.removeItem("z@yPoeS*")
        }
        var e = (s = localStorage.getItem("PoeS*z@y") || "").split("©");
        "" != s && 44 == e.length || (s = "P1©ArrowUp©ArrowDown©ArrowLeft©ArrowRight©Enter©ShiftRight©Quote©None©None©None©P2©KeyW©KeyX©KeyA©KeyD©KeyS©Tab©Backquote©None©None©None©P3©Numpad8©Numpad2©Numpad4©Numpad6©Numpad5©Numpad0©NumpadAdd©None©None©None©P4©KeyI©Comma©KeyJ©KeyL©KeyK©Space©Period©None©None©None",
        localStorage.setItem("PoeS*z@y", s));
        let n = 0;
        for (e = s.split("©"),
        n = 0; n < 44; n++)
            Sh7E.Y[n] = e[n];
        if (CrdD.Ji(),
        t) {
            var r, l = (r = localStorage.getItem("PoeS*z@y2") || "").split("©");
            if ("" != r && 44 == l.length) {
                let t = 0;
                for (t = 0; t < 44; t++)
                    Sh7E.lt[t] = l[t]
            }
            var u = (t = localStorage.getItem("PoeS*z@y3") || "").split("©");
            if ("" != t && 4 == u.length) {
                let t = 0;
                for (t = 0; t < 4; t++)
                    Sh7E.nt[t] = parseInt(u[t])
            }
        }
    }
    $i() {
        0 == CrdD.qi.size && CrdD.Ga(),
        localStorage.setItem("PoeS*z@y", Sh7E.Y.join("©")),
        localStorage.setItem("PoeS*z@y2", Sh7E.lt.join("©")),
        localStorage.setItem("PoeS*z@y3", Sh7E.nt.join("©"))
    }
    I(t, s=3e3) {
        let e = t;
        for (let t = 0; t < s; t++) {
            e = (1103515245 * e + 12345) % 2 ** 31;
            var i = 255 & Math.floor(e / 2 ** 31 * 256);
            this.Ol[t] = i
        }
        this.Ol[s] = 0
    }
    wi() {
        if (XYSz.U_.length < 1) {
            this.yi = "Loading resources..." + this.yt + "%";
            for (let t = 0; t < this.ac; t++)
                this.nc[t] = 0;
            XYSz._("mp3/001"),
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
            XYSz._("mp3/sword_hit2")
        } else if (this.yt = 2,
        T7ES.loaded)
            if (this.yt = 4,
            T7ES.j2)
                if (this.yt = 0,
                T7ES.q2) {
                    let t = 999;
                    for (let s = this.yt = 0; s < T7ES._e; s++)
                        if (T7ES.s0[s].loaded)
                            this.yt++;
                        else if (!T7ES.s0[s].jr) {
                            T7ES.s0[s].jr = !0;
                            const e = T7ES.s0[s].filename;
                            if (lvT9.c0(e + ".txt", t=>T7ES.s0[s].d0(t, e.replace("_res_data/", ""))),
                            --t <= 0)
                                break
                        }
                    if (this.yt < T7ES._e)
                        this.yt = 50 + Math.floor(50 * this.yt / T7ES._e),
                        this.yi = "Loading resources..." + this.yt + "%";
                    else {
                        this.yi = "Loading resources...100%";
                        for (let t = this.yt = 0; t < this.Zs; t++)
                            this.ts[t] = new LWAh(T7ES.s0[0],200,0,300,this,t),
                            this.Ke[t] = !1;
                        this.ts[0].hs(T7ES.s0[0], 200, 0, 300),
                        this.Ke[0] = !0,
                        this.ts[1].hs(T7ES.s0[0], 200, 0, 300),
                        this.Ke[1] = !0,
                        this.ts[2].hs(T7ES.s0[0], 200, 0, 300),
                        this.Ke[2] = !0,
                        this.ts[3].hs(T7ES.s0[0], 200, 0, 300),
                        this.Ke[3] = !0,
                        this.ts[4].hs(T7ES.s0[0], 580, -200, 300),
                        this.Ke[4] = !0,
                        this.ts[5].hs(T7ES.s0[0], 570, 0, 300),
                        this.Ke[5] = !0,
                        this.ts[6].hs(T7ES.s0[0], 580, -200, 300),
                        this.Ke[6] = !0,
                        this.ts[7].hs(T7ES.s0[0], 570, 0, 300),
                        this.Ke[7] = !0;
                        for (let t = 0; t < 8; t++)
                            this.join[t] = 0,
                            this.Oo[t] = !1,
                            this.eo[t] = -1;
                        this.Di = !0
                    }
                } else {
                    T7ES.K2 || T7ES.dl();
                    for (let t = 0; t < T7ES.Ue; t++)
                        T7ES.Ae[t].Ts && this.yt++;
                    this.yt = 5 + Math.floor(45 * this.yt / T7ES.Ue),
                    this.yi = "Loading resources..." + this.yt + "%"
                }
            else
                this.yi = "Loading resources..." + this.yt + "%",
                T7ES.Q2 || T7ES.il();
        else
            this.yi = "Loading resources..." + this.yt + "%",
            T7ES.loading || T7ES.tl()
    }
    R_() {
        this.Ba = this.La = 1 - this.pause
    }
    x_() {
        this.Ba = 1,
        this.La = 0
    }
    G_() {
        this.Vs = 2
    }
    O_() {
        this.Ba = this.La = this.pause = 0,
        this.rh = 0,
        this.u = 1,
        2 == this.$s || 3 == this.$s ? (this.wo = 0,
        this.H0 = 10) : this.wo = 350
    }
    z_() {
        this.u = 1 - this.u
    }
    W_() {
        this.Vs < 2 && (0 == this.$s || 1 == this.Ql) && 0 == this.H0 && (this.Cs = 1 - this.Cs,
        this.Ms++,
        this.Vs = 1)
    }
    Z_() {
        this.Vs < 2 && (0 == this.$s || 1 == this.Ql || FouV.li && 1 == this.$s) && 0 == this.H0 && 0 == this.wo && (this.xl = 1 - this.xl,
        this.ys++,
        this.Vs = 1)
    }
    P_() {
        this.Vs < 2 && (0 == this.$s || 1 == this.Ql) && 0 == this.H0 && 0 == this.wo && (this.Nl = 1,
        this.ws++,
        this.Vs = 1)
    }
    J_() {
        this.Vs < 2 && (0 == this.$s || 1 == this.Ql) && 0 == this.H0 && 0 == this.wo && (this.Nl = 2,
        this.Ds++,
        this.Vs = 1)
    }
    Fi() {
        this.Za = !1,
        this.Pa = !1,
        this.Ja = !1,
        this.Ha = !1,
        this.Qa = !1,
        this.ja = !1,
        this.Ka = !1,
        this.$a = !1,
        this.qa = !1,
        this.ge = !1
    }
    Hi(t=!0) {
        let s = !1
          , e = !1;
        var i, o, a = FouV.Jt, h = FouV.Ht;
        let n = .7
          , r = "#9aaff3"
          , l = (3 <= a && a < 307 && 0 <= h && h < 21.6 ? (n = 1,
        FouV.F && (XYSz.D(0, 1),
        window.electronAPI ? window.electronAPI.zKJr() : window.open("https://lf2.net/control.html", "_blank"),
        FouV.F = !1,
        Sh7E.t0 = 0),
        r = "#fff") : n = .7,
        D.S6nY("Move List and Function keys", 30, 1.5 + (19 - JXAJ) / 2, "OkQn", r),
        D.Dm9f(BLg_.zi[36], 3, 0, 0, .8 / BLg_.Mi, 0, 0, 0, n),
        r = "#9aaff3",
        n = .7,
        o = .87 * ZcYj,
        i = .13 * ZcYj,
        o <= a && a < o + i + 280 && 0 <= h && h < 21.6 ? (n = 1,
        e = !0,
        FouV.F && (s = !0,
        FouV.F = !1),
        r = "#fff") : n = .7,
        t && (r = "#fff"),
        D.S6nY("ESC - OK 確定", ZcYj - 3, 0 + (19 - JXAJ) / 2, "KrcT", r),
        !1);
        for (let t = 0; t < 4; t++)
            if (1 == Sh7E.nt[t] && -1 == Sh7E.rt[t]) {
                l = !0;
                break
            }
        if (l) {
            let s = !1;
            for (let t = 0; t < 4; t++)
                if (-1 != Sh7E.rt[t]) {
                    s = !0;
                    break
                }
            s ? D.S6nY('<span style="font-size:80%;">Some gamepads are not detected. Check if they’re connected and active; pressing a gamepad button may help. 仍有手柄未偵測到，請確認是否已連接並已被喚醒，按一下手柄按鍵可能有幫助。</span>', ZcYj / 2, I2Gw - 25 + (19 - JXAJ) / 2, "Itbg", CrdD.Wi % 14 < 7 ? "#F88" : "#F55") : (D.S6nY('<span style="background: #051d56; font-size:70%;">Some gamepads are not detected. Check if they’re connected and active; pressing a gamepad button may help. 仍有手柄未偵測到，請確認是否已連接並已被喚醒，按一下手柄按鍵可能有幫助。</span>', ZcYj / 2, I2Gw - 42 + (19 - JXAJ) / 2, "Itbg", CrdD.Wi % 14 < 7 ? "#F88" : "#F55"),
            D.S6nY('<span style="font-size:70%;">If it still doesn’t work after checking, make sure Steam Input is disabled: Steam Library → Right-click the game → Properties → Controller → Override for [Game] → Disable Steam Input.</span>', ZcYj / 2, I2Gw - 31 + (19 - JXAJ) / 2, "Itbg", CrdD.Wi % 14 < 7 ? "#F88" : "#F55"),
            D.S6nY('<span style="font-size:70%;">如果檢查後仍然無法使用，請確認已停用 Steam 輸入：Steam 遊戲庫 → 右鍵點擊遊戲 → 內容(/属性) → 控制器 → [遊戲名稱]的替用配置(/先决替代)」 → 停用 Steam 輸入</span>', ZcYj / 2, I2Gw - 19 + (19 - JXAJ) / 2, "Itbg", CrdD.Wi % 14 < 7 ? "#F88" : "#F55"))
        } else if (Sh7E.ki) {
            let s = !1;
            for (let t = 0; t < 4; t++)
                if ("ArrowUp" == Sh7E.Y[11 * t + 1] && "ArrowDown" == Sh7E.Y[11 * t + 2] && "ArrowLeft" == Sh7E.Y[11 * t + 3] && "ArrowRight" == Sh7E.Y[11 * t + 4] && "Enter" == Sh7E.Y[11 * t + 5] && "ShiftRight" == Sh7E.Y[11 * t + 6] && "Quote" == Sh7E.Y[11 * t + 7]) {
                    s = !0;
                    break
                }
            s ? D.S6nY('<span style="font-size:70%;">On Steam Deck, the built-in gamepad can function as the "P1 Keyboard input" (using the official control layout by default). 在 Steam Deck 上，內建手柄可作為「P1 鍵盤輸入」使用（透過預設採用的「官方控制配置」）</span>', ZcYj / 2, I2Gw - 25 + (19 - JXAJ) / 2, "Itbg", CrdD.Wi % 14 < 7 ? "#fff" : "#ccc") : (D.S6nY('<span style="font-size:70%;">Note: You are using a Steam Deck, but none of the player keys match the default control layout. This may cause the game to be uncontrollable by the build-in gamepad. Clicking on "Restore Keyboard to Default" could help.</span>', ZcYj / 2, I2Gw - 32 + (19 - JXAJ) / 2, "Itbg", CrdD.Wi % 14 < 7 ? "#Fcc" : "#F55"),
            D.S6nY('<span style="font-size:70%;">注意：您正在使用 Steam Deck，但沒有任何一位玩家的按鍵與「官方控制配置」匹配，這可能導致無法以內建手柄操作。點擊「重設鍵盤至預設」能解決這問題。</span>', ZcYj / 2, I2Gw - 19 + (19 - JXAJ) / 2, "Itbg", CrdD.Wi % 14 < 7 ? "#Fcc" : "#F55"))
        }
        return {
            ji: e,
            Ki: s
        }
    }
    bi() {
        ckb1 && (ckb1 = !1,
        XYSz.D(0, 1),
        FouV.page = 60,
        GqLZ && _dFL.send(`AWAY
${WEPA}
control_setting`),
        GqLz) && GLOBAL_STEAM_MESSAGE.send(`AWAY
${WEPA}
control_setting`),
        window.electronAPI ? (XELe.R0["Alt-1"] || XELe.R0["Alt-2"] || XELe.R0["Alt-0"] || XELe.R0["Alt-3"]) && ((XELe.$0("[-0") || XELe.$0("{-0") || XELe.$0("“-0")) && s_decreaseSfxVol(),
        (XELe.$0("]-0") || XELe.$0("}-0") || XELe.$0("‘-0")) && s_increaseSfxVol(),
        (XELe.$0("<-0") || XELe.$0(",-0") || XELe.$0("≤-0")) && s_decreaseBgmVol(),
        XELe.$0(">-0") || XELe.$0(".-0") || XELe.$0("≥-0")) && s_increaseBgmVol() : (XELe.R0["Shift-1"] || XELe.R0["Shift-2"] || XELe.R0["Shift-3"] || XELe.R0["Shift-0"]) && ((XELe.$0("[-0") || XELe.$0("{-0")) && s_decreaseSfxVol(),
        (XELe.$0("]-0") || XELe.$0("}-0")) && s_increaseSfxVol(),
        (XELe.$0("<-0") || XELe.$0(",-0")) && s_decreaseBgmVol(),
        XELe.$0(">-0") || XELe.$0(".-0")) && s_increaseBgmVol()
    }
    Ei() {
        Sh7E.K0++
    }
    H_() {
        0 != this.H0 && 300 != this.H0 && 10 != this.H0 || (Sh7E.t0 = 0,
        Sh7E.Da = 0)
    }
    Q_ = [];
    j_ = -1;
    Si() {
        let a = 0;
        var s, e;
        let t = 0;
        if (this.tn = !1,
        0 == this.Ll && (this.pause = this.La,
        this.La = this.Ba,
        this.pause && s_show_bb(),
        this.pause || s_hide_bb()),
        1 == this.pause && (this.tn = !0),
        this.j_ != this.$s) {
            if (4 == this.j_ && 0 < this.Q_.length) {
                let t;
                for (t = 0; t < 20; t++)
                    this.ts[t].group = this.Q_[t]
            }
            if (4 == this.$s) {
                let t;
                for (this.Q_ = [],
                t = 0; t < 20; t++)
                    this.Q_[t] = this.ts[t].group
            }
            this.j_ = this.$s
        }
        if (Jc6D(this),
        0 == this.H0) {
            if (!this.tn)
                for (0 < this.bh ? this.yh = this.bh : this.yh = T7ES.Ae[this.Ce].w,
                this.b = this.Ce,
                this.mc = 10; this.mc < this.Zs; this.mc++)
                    this.Ke[this.mc] && (0 == this.ts[this.mc].s0.type ? (TI2f(this, this.mc),
                    1 == this.ts[this.mc].ph && 1 == this.ts[this.mc].sh && 1 == this.ts[this.mc].left && (this.ts[this.mc].K_ = 15),
                    1 == this.ts[this.mc].Sh && 1 == this.ts[this.mc].eh && 1 == this.ts[this.mc].right && (this.ts[this.mc].K_ = 15),
                    0 < this.ts[this.mc].K_ && (this.ts[this.mc].K_--,
                    this.ts[this.mc].left = 0,
                    this.ts[this.mc].right = 0)) : 0 != this.ts[this.mc].s0.type && 0 <= this.ts[this.mc].xs && this.ts[this.mc].xs < 400 && null != this.ts[this.mc].s0.f[this.ts[this.mc].xs] && 0 < this.ts[this.mc].s0.f[this.ts[this.mc].xs].Rs && Olrd(this, this.mc));
            if ((0 == this.$s || 2 == this.$s || 3 == this.$s) && 0 < this.ss && 0 == this.wo && 0 == this.pause && (this.ss--,
            0 == this.ss)) {
                XYSz.D(5, 1);
                var h, n, r, l, u = new Map, f = new Map, d = new Map;
                let s = [];
                if (this.ra && 0 == this.$s) {
                    let t = -1;
                    for (const _ of this.Va.keys())
                        this.Va.get(_) > t ? (t = this.Va.get(_),
                        s = [_]) : this.Va.get(_) == t && s.push(_)
                } else
                    for (a = 0; a < this.Zs; a++)
                        this.Ke[a] && 0 < this.ts[a].ls && 0 == this.ts[a].s0.type && 300 != this.ts[a].s0.id && (h = this.ts[a].group,
                        s.includes(h) || s.push(h));
                for (a = 0; a < this.Zs; a++)
                    this.Ke[a] && 0 == this.ts[a].s0.type && 300 != this.ts[a].s0.id && (n = this.ts[a].group,
                    0 < this.ts[a].ls && s.includes(n) && (u.has(n) ? (u.set(n, u.get(n) + 1),
                    d.set(n, d.get(n) + this.ts[a].ls)) : (u.set(n, 1),
                    d.set(n, this.ts[a].ls))),
                    f.has(n) ? f.set(n, f.get(n) + 1) : f.set(n, 1));
                let t = []
                  , e = -1
                  , i = -1;
                for ([r,l] of u) {
                    var c = d.get(r) / f.get(r)
                      , p = l / f.get(r);
                    p > e ? (t = [r],
                    e = p,
                    i = c) : p == e && (c > i ? (t = [r],
                    i = c) : c == i && t.push(r))
                }
                let o = -1;
                if (1 === t.length)
                    o = t[0];
                else if (1 < t.length) {
                    var g = this.ye(1685, t.length);
                    o = t[g]
                } else {
                    var y, x, m = [];
                    for ([y,x] of u)
                        m.push(y);
                    0 < m.length && (g = Math.floor(this.ye(1679, m.length)),
                    o = m[g])
                }
                for (a = 0; a < this.Zs; a++)
                    this.Ke[a] && 0 < this.ts[a].ls && 0 == this.ts[a].s0.type && 300 != this.ts[a].s0.id && this.ts[a].group != o && (this.ts[a].ls = 0,
                    this.ts[a].os = 0)
            }
            if ((this.Za || this.ge && 1 != this.rh && this.wo < 100) && this.R_(),
            this.Pa && this.x_(),
            this.Ja && this.G_(),
            this.Ha && this.O_(),
            this.Qa && this.z_(),
            this.ja && this.W_(),
            this.Ka && this.Z_(),
            this.$a && this.P_(),
            this.qa && this.J_(),
            this.tn)
                this.u = 1,
                J6av(this, !(Sh7E.Ml = 0)),
                MMsl(this),
                1 < gB75h && D.ZyDD(0, 128 - gB75h, GLOBAL_ZOOM_WIDTH, gB75h, 0),
                DH8U(this),
                (FouV.g.Wa ? s_hide_bb : (D.Dm9f(BLg_.D1, 360 + (ZcYj - 794) / 2, (I2Gw - 23) / 2, 0, 1 / BLg_.ie),
                s_show_bb))(),
                1 != this.rh && this.q_(),
                TzFr(this);
            else {
                if (2 == this.pause && (this.pause = 1),
                this.Wo = 1 - this.Wo,
                this.Qe = (this.Qe + 1) % 30,
                this.Pl = (this.Pl + 1) % 9,
                this.Zl = (this.Zl + 1) % 12,
                this.Jl = (this.Jl + 1) % 3,
                this.$l = !1,
                1 != this.$s) {
                    for (a = 0; a < 40; a++)
                        this.qo[a] = 0;
                    if (0 == this.$s && this.ra && 0 < this.ss)
                        for (const i of this.Va.keys())
                            0 < this.Va.get(i) && (this.qo[i] = 1);
                    for (a = 0; a < this.Zs; a++)
                        this.Ke[a] && 0 < this.ts[a].ls && 0 == this.ts[a].s0.type && 0 < this.ts[a].group && this.ts[a].group < 40 && 5 != this.ts[a].group && this.qo[this.ts[a].group]++;
                    for (this.wd = 0,
                    a = 0; a < 40; a++)
                        0 < this.qo[a] && (this.wd += 1,
                        this.Xs = a);
                    this.wd < 2 && 0 == this.H0 && (1 == this.Co || 4 != this.$s) ? (0 == this.wd && (this.Xs = -1),
                    this.wo++,
                    80 == this.wo && (0 != this.$s && 2 != this.$s && 3 != this.$s && 4 != this.$s && 5 != this.$s && XYSz.Ys(),
                    5 != this.$s && (this.u = 1),
                    XYSz.D(4, 1))) : 2 != this.$s && 3 != this.$s && (this.Xs = -1)
                } else if (0 == this.H0) {
                    for (this.$l = !0,
                    a = 0; a < this.Zs; a++)
                        this.Ke[a] && 0 < this.ts[a].ls && 0 == this.ts[a].s0.type && 0 < this.ts[a].group && this.ts[a].group < 40 && 5 != this.ts[a].group && (this.$l = !1);
                    (this.$l || 0 < this.fa) && (this.wo++,
                    this.fa <= 0) && 80 == this.wo && (5 != this.$s && (this.u = 1),
                    XYSz.Ys(),
                    XYSz.D(4, 1))
                }
                if (145 == this.wo && 0 == this.rh && (this.wo = 144),
                350 <= this.wo) {
                    for (a = 0; a < this.Zs; a++)
                        if (this.Ke[a] && -1 < this.ts[a].tu) {
                            for (t = 0; t < T7ES._e; t++)
                                if (T7ES.s0[t].id == this.ts[a].tu) {
                                    this.ts[a].s0 = T7ES.s0[t],
                                    this.ts[a].tu = -1,
                                    this.ts[a].iu = this.ts[a].eu = 0;
                                    break
                                }
                        } else if (this.Ke[a] && 50 == this.ts[a].s0.id && 0 == this.ya) {
                            for (t = 0; t < T7ES._e; t++)
                                if (6 == T7ES.s0[t].id) {
                                    this.ts[a].s0 = T7ES.s0[t],
                                    this.ts[a].iu = this.ts[a].eu = 0;
                                    break
                                }
                        } else if (this.Ke[a] && -1 < this.ts[a].su) {
                            s = this.ts[a].hu,
                            this.ts[a].su = -1,
                            this.ts[a].ou = 900;
                            let t = 0;
                            for (t = 0; t < T7ES._e; t++)
                                if (T7ES.s0[t])
                                    try {
                                        T7ES.s0[t].id == this.ts[a].au ? this.ts[a].s0 = T7ES.s0[t] : T7ES.s0[t].id == this.ts[a].nu && (this.ts[s].hs(T7ES.s0[t], 580, -200, 300),
                                        this.Ke[s] = !0)
                                    } catch (e) {
                                        dbl0("code 1745: " + e)
                                    }
                            this.ts[s].ls = this.ts[a].ls / 2,
                            this.ts[s].ls < 1 && (this.ts[s].ls = 1),
                            this.ts[s].rs = this.ts[a].rs / 2,
                            this.ts[s].rs < 1 && (this.ts[s].rs = 1),
                            this.ts[a].ls = this.ts[a].ls / 2,
                            this.ts[a].ls < 1 && (this.ts[a].ls = 1),
                            this.ts[a].rs = this.ts[a].rs / 2,
                            this.ts[a].rs < 1 && (this.ts[a].rs = 1),
                            this.ts[s].x = this.ts[a].x,
                            this.ts[s].z = this.ts[a].z,
                            this.ts[s].y = 0,
                            this.ts[s].fs = this.ts[s].x,
                            this.ts[s].gs = this.ts[s].z,
                            this.ts[s].ps = 0,
                            this.ts[a].Gs = 0,
                            this.ts[s].Gs = 0,
                            this.ts[s].Ws = 1 - this.ts[a].Ws,
                            this.ts[a].xs = 112,
                            this.ts[s].xs = 112,
                            this.ts[a].iu = this.ts[a].eu = this.ts[a].xs,
                            this.ts[s].iu = this.ts[s].eu = this.ts[s].xs,
                            this.ts[a].os = 0,
                            this.ts[s].os = 0,
                            this.ts[s].group = this.ts[a].group
                        }
                    2 == this.$s ? this.H0 = 28 : 3 == this.$s ? this.H0 = 128 : 4 == this.$s ? this.H0 = 202 : this.H0 = 2,
                    this.wo = 0,
                    AUuK(this)
                } else
                    VuC1(this)
            }
        } else
            this.Wo = 1 - this.Wo,
            this.Qe = (this.Qe + 1) % 30,
            0 < Sh7E.t0 && CrdD.j0 < 280 && -280 < CrdD.j0 ? (CrdD.j0 = 0,
            Sh7E.t0--,
            g = .99 * T0mk + (420 < Sh7E.t0 ? 4 * Math.sin(1.2 * (Sh7E.t0 - 410)) : 0),
            e = Sh7E.t0 < 420 || Math.floor(Sh7E.t0 / 5) % 2 == 0 ? "#5A77D8" : "#9aaff5",
            D.C_wB("Please use the keyboard to navigate. Press 'Attack' to confirm, 'Jump' to cancel. For key settings, click the keyboard icon at the upper right.", Hhar / 2, g - 84, "Itbg", e),
            D.C_wB("請用鍵盤操作。按「攻擊」確認/加入，「跳躍」取消。點擊右上角的鍵盤圖示可設定按鍵。", Hhar / 2, g - 28 * 1.4, "Itbg", e)) : 1 == this.H0 && (CrdD.j0 < 0 ? (g = .99 * T0mk,
            Hhar,
            D.C_wB("Sorry. The unlock code has been changed. Clear Stage Mode on Difficult to reveal it.", Hhar / 2, g - 90, "Itbg", "#FFF"),
            D.C_wB("抱歉. 解鎖碼已更改。完成「困難」的「關關模式」即可查看。", Hhar / 2, g - 42, "Itbg", "#FFF"),
            CrdD.j0++,
            Sh7E.t0 = 0) : 0 < CrdD.j0 && (e = .99 * T0mk,
            Hhar,
            D.C_wB("Unlock code accepted — Julian is now unlocked!", Hhar / 2, e - 90, "Itbg", "#FFF"),
            D.C_wB("解鎖碼使用成功 ── 邪鬼已解鎖！", Hhar / 2, e - 42, "Itbg", "#FFF"),
            CrdD.j0--,
            Sh7E.t0 = 0)),
            0 < Sh7E.Da && (Sh7E.Da--,
            T0mk,
            g = 420 < Sh7E.Da ? 4 * Math.sin(1.2 * (Sh7E.Da - 410)) : 0,
            e = Sh7E.Da < 420 || Math.floor(Sh7E.Da / 5) % 2 == 0 ? "#9aaff5" : "#5A77D8",
            D.C_wB("Clear Stage 1 to unlock Stage 2 at this difficulty. 完成第 1 關後即可解鎖此難度的第 2 關", .32 * Hhar, g + 28 * 2.7, "OkQn", e)),
            -1 == Sh7E.t0 ? Sh7E.t0 = 0 : this.H0 < 300 && 10 != this.H0 && FouV.F && (Sh7E.t0 = 440),
            10 == this.H0 ? (We0h(this),
            this.H_()) : 1 == this.H0 || 2 == this.H0 || 3 == this.H0 ? (5 == this.$s && 0 == this.rh ? (this.u = 1,
            this.H0 = 10) : (ChAz(this),
            4 == this.$s && 3 == this.fo && this.H0 < 200 && (this.H0 = 200)),
            this.H_()) : 20 <= this.H0 && this.H0 <= 50 ? (L7ce(this),
            this.H_()) : 120 <= this.H0 && this.H0 <= 150 ? (IV0O(this),
            this.H_()) : 200 <= this.H0 && this.H0 < 300 ? (GENs(this),
            this.H_()) : 300 == this.H0 ? (FouV.g.ru(),
            this.H_()) : 0 == this.H0 && (this.dc = 0)
    }
    ye(t, s) {
        return s <= 0 ? 0 : (this.Wl = (this.Wl + 1) % 1234,
        this.zl = (this.zl + 1) % 3e3,
        (this.Ol[this.zl] + this.Wl) % s)
    }
    Te() {
        1 == this.$s ? 0 < this.ah && (-1 != this.xd ? this.xd = -1 : this.xd = 0) : (0 < this.ah && this.xd++,
        8 < this.xd && (this.xd = -1)),
        1 == this.$s ? -1 != this.xd && (this.Rd = "ON") : (0 == this.xd && (this.Rd = "Random"),
        1 == this.xd && (this.Rd = "Main Theme"),
        2 == this.xd && (this.Rd = "Stage 1"),
        3 == this.xd && (this.Rd = "Stage 2"),
        4 == this.xd && (this.Rd = "Stage 3"),
        5 == this.xd && (this.Rd = "Stage 4"),
        6 == this.xd && (this.Rd = "Stage 5"),
        7 == this.xd && (this.Rd = "Boss"),
        8 == this.xd && (this.Rd = "Final Boss"),
        this.yt = this.xd,
        0 == this.yt && (this.yt = this.ye(1562, 8) + 1),
        -1 == this.yt ? this.Vi = "" : (1 == this.yt && (this.Vi = "mp3/main"),
        2 == this.yt && (this.Vi = "mp3/stage1"),
        3 == this.yt && (this.Vi = "mp3/stage2"),
        4 == this.yt && (this.Vi = "mp3/stage3"),
        5 == this.yt && (this.Vi = "mp3/stage4"),
        6 == this.yt && (this.Vi = "mp3/stage5"),
        7 == this.yt && (this.Vi = "mp3/boss1"),
        8 == this.yt && (this.Vi = "mp3/boss2"))),
        -1 == this.xd ? (this.Rd = "OFF",
        this.Ud = !1,
        XYSz.Ys()) : this.Ud = !0,
        D.S6nY("Music: " + this.Rd + "\n(Press Defend to change)", ZcYj / 2, 2 + (19 - JXAJ) / 2, "Itbg", D.OuCn[1])
    }
    wa() {
        this.Ud && (this.yt = this.ye(1606, 8),
        1 == this.yt && (this.Vi = "mp3/main"),
        2 == this.yt && (this.Vi = "mp3/stage1"),
        3 == this.yt && (this.Vi = "mp3/stage2"),
        4 == this.yt && (this.Vi = "mp3/stage3"),
        5 == this.yt && (this.Vi = "mp3/stage4"),
        6 == this.yt && (this.Vi = "mp3/stage5"),
        7 == this.yt && (this.Vi = "mp3/boss1"),
        8 == this.yt && (this.Vi = "mp3/boss2"),
        this.Ti())
    }
    Ti() {
        "" != this.Vi && XYSz.lu(this.Vi)
    }
    q_() {
        var t;
        if (0 != this.$s && 2 != this.$s && 3 != this.$s || (this.ss <= 0 ? this.Nd = "Time's Up" : (t = Math.floor(this.ss / SvvK),
        this.Nd = "Time Left: " + t + " sec"),
        D.VLeA(this.Nd, ZcYj / 2, (19 - JXAJ) / 2, "Itbg", "#aaa")),
        0 == this.$s && this.ra && (0 == this.pause || FouV.g.Wa))
            for (const i of this.Va.keys()) {
                var s = this.Ia.get(i);
                let t = this.ka.get(i);
                0 < t && (t--,
                this.ka.set(i, t));
                var e = i < 6 ? i : 0;
                D.VLeA(this.Ta.get(i) + ": ₡" + this.Va.get(i), s, 525 + (19 - JXAJ) / 2, this.Aa.get(i), (Math.floor(t / 5) % 2 == 0 ? D.GROUP_COST_C : D.GROUP_COST_C2)[e])
            }
        0 == this.$s && (this.Nd = "VS mode "),
        1 == this.$s && (this.Nd = "Stage mode "),
        2 == this.$s && (this.Nd = "1 on 1 "),
        3 == this.$s && (this.Nd = "2 on 2 "),
        4 == this.$s && (this.Nd = "Battle mode "),
        1 == this.$s && 5 == Math.floor(this.da / 10) && (this.Nd = "Survival Stage "),
        5 != this.$s && (0 == this.ve && (this.Nd += "(Difficult)"),
        1 == this.ve && (this.Nd += "(Normal)"),
        2 == this.ve && (this.Nd += "(Easy)"),
        -1 == this.ve) && (this.Nd += "(CRAZY!)"),
        0 == this.$s && this.ra && (this.Nd += " ₡" + this.ca),
        D.VLeA(this.Nd, ZcYj - 8 + 4 - (sT3xpd ? (Sh7E.q ? 378 : 440) / 3 : 43), (19 - JXAJ) / 2, "KrcT", "#FFF")
    }
    ru() {
        let t;
        this.A_ = (this.A_ + 1) % 10,
        1 == this.ve || 2 == this.ve ? 1 == this.k_ && (this.k_ = 2) : 0 == this.k_ && (this.k_ = 1);
        var s = 1.4 / BLg_.Mi
          , e = ZcYj
          , i = I2Gw
          , o = D.E9px(BLg_.c1[this.k_])
          , a = D.JjQ2(BLg_.c1[this.k_])
          , h = (e - o * s) / 2
          , n = (.94545 * i - a * s) / 2
          , i = h + o * s
          , o = n + a * s;
        if (D.Dm9f(BLg_.c1[this.k_], h, n, 0, s),
        1 == this.k_ && 13 <= this.I_ && 0 == this.C_ && D.VLeA("HF2.NET", ZcYj / 2, n - 3 * JXAJ, "Itbg", "#5077D0"),
        this.I_ < 13)
            for (this.I_++,
            t = 0; t < 26; t++)
                D.Sy7M(0, n + 13 * t * 1.4 / 2, e, 1.4 * (13 - this.I_) / 2, 0);
        else if (0 == this.C_) {
            if (0 == this.C_)
                for (t = 0; t < 8; t++)
                    if (0 < this.ts[t].attack && 0 == this.ts[t].es) {
                        this.C_ = 1;
                        break
                    }
        } else if (0 < this.C_) {
            for (t = 0; t < 26; t++)
                D.Sy7M(0, n + 13 * t * 1.4 / 2, e, 1.4 * this.C_ / 2, 0);
            this.C_++,
            13 <= this.C_ && (this.k_++,
            this.I_ = 0,
            this.C_ = 0)
        }
        this.A_ < 5 && 13 == this.I_ && 0 == this.C_ && D.Dm9f(BLg_.c1[5], i, o, 0, s),
        5 == this.k_ && (this.k_ = 0,
        this.I_ = 0,
        this.H0 = 10,
        AUuK(this))
    }
    Lo() {}
    static cu() {}
    constructor() {}
    ue(t) {
        return 0 == T7ES.s0[t].type && (5 != Math.floor(T7ES.s0[t].id / 10) && 3 != Math.floor(T7ES.s0[t].id / 10) || 1 == this.ya)
    }
    //ue(t, s) {
    //    let e = 0;
    //    if (0 <= s)
    //        e = MiVw[s].v.length;
    //    else
    //        for (let t = 0; t < MiVw.length; t++)
    //            MiVw[t].v.length > e && (e = MiVw[t].v.length);
    //    return 0 == T7ES.s0[t].type && (s = T7ES.s0[t].id,
    //    0 != this.ya || !(30 <= s || 0 == s)) && (s < 30 && 0 < s || (30 == s ? 2 <= e : 31 == s ? 3 <= e : 32 == s ? 4 <= e : 33 == s ? 6 <= e : 34 == s ? 9 <= e : 35 == s ? 12 <= e : 36 == s ? 15 <= e : 37 == s ? 18 <= e : 39 == s ? 22 <= e : 38 == s ? 26 <= e : 50 == s ? 30 <= e : 51 == s ? 40 <= e : 52 <= s ? 0 <= e : 0 == s && 50 <= e))
    //}
    _u(t) {
        return 5 == Math.floor(T7ES.s0[t].id / 10)
    }
    je(t) {
        return this._u(this.re[this.ce[this.He[t]]])
    }
    me() {
        return this.Qe % 6 < 3 ? "#FFFFFF" : "#4F9BFF"
    }
    Be() {
        return this.Qe % 6 < 3 ? 16777215 : 5217279
    }
    uu() {}
}
class LWAh {
    fu = 1;
    gu = 1.7;
    mu;
    index;
    pu;
    Su;
    ds;
    bu;
    Eu = [];
    Ma = !1;
    Fu;
    x;
    y;
    z;
    Lu;
    Bu;
    Mu;
    yu;
    wu;
    Gs;
    Os;
    zs;
    fs;
    ps;
    gs;
    xs;
    iu;
    eu;
    Du;
    Ws;
    next;
    waiting;
    Vu;
    Tu;
    ku;
    Eh;
    Mh;
    Iu;
    hn;
    Cu;
    Au;
    vu;
    Xu;
    Yu;
    Nu;
    Uu;
    Ru;
    xu;
    Gu;
    Ou;
    zu;
    Wu;
    th;
    ih;
    eh;
    sh;
    es;
    hh;
    oh;
    Sh;
    ph;
    K_;
    de;
    R0;
    left;
    right;
    attack;
    fe;
    ah;
    Qo;
    za = !1;
    Jo = 0;
    Ah;
    Xh;
    Th;
    Ih;
    wh;
    Dh;
    kh;
    Vh;
    Ch;
    Zu;
    Pu;
    Ks;
    Ju;
    Hu;
    Qu;
    ju;
    Ku;
    $u = [];
    qu = [];
    tf = [];
    if;
    ef;
    sf;
    hf;
    parent;
    js;
    ls;
    rs;
    ns;
    os;
    af;
    nf;
    join;
    Io;
    rf;
    lf;
    tu;
    su;
    hu;
    au;
    nu;
    ou;
    cs;
    yo;
    Mo;
    cf;
    df;
    _f;
    Ss;
    uf;
    ff;
    gf;
    mh;
    group;
    s0;
    mf;
    pf = [];
    Sf = [];
    bf = [];
    Lh;
    Bh;
    uh;
    nh;
    Js;
    lh;
    dh;
    _h;
    Fh;
    Ef = [];
    P0;
    Ff;
    Lf;
    Bf;
    x2;
    px;
    kc;
    f;
    Mf;
    vs() {
        this.Js = -1,
        this.lh = 0,
        this.Lu = this.ds = this.group = this.Mh = this.Iu = this.ju = this.Fu = this.x = this.y = this.z = this.xs = this.Du = this.iu = this.eu = this.Ws = this.next = this.waiting = this.ku = this.Eh = this.hn = this.vu = this.pu = this.Su = 0,
        this.bu = 0,
        this.Eu = [],
        this.Ma = !1,
        this.Vu = this.Tu = -1,
        this.de = this.R0 = this.left = this.right = this.attack = this.fe = this.ah = 0,
        this.th = this.ih = this.eh = this.sh = this.es = this.hh = this.oh = 0,
        this.Sh = 0,
        this.ph = 0,
        this.K_ = 0,
        this.Yu = 0,
        this.Nu = this.Uu = this.Ru = this.xu = 0,
        this.Gu = this.zu = this.Ou = this.Wu = 0,
        this.Zu = !1,
        this.Ah = this.Xh = this.Th = this.Ih = this.wh = this.Dh = this.kh = this.Vh = this.Ch = 0,
        this.Pu = 0,
        this.Ks = 0,
        this.Mu = this.yu = this.wu = this.Gs = this.Os = this.zs = .1,
        this.fs = this.ps = this.gs = 0,
        this.Cu = this.Au = 0,
        this.Ju = this.Hu = this.Qu = 0,
        this.Bu = this.lf = this.Ku = this.ef = 0,
        this.parent = -1,
        this.js = -1,
        this.ls = 500,
        this.ns = 500,
        this.Io = 0,
        this.rs = 500,
        this.os = 500,
        this.join = 0,
        this.nf = 0,
        this.ll = 0,
        this.cf = 0,
        this.df = 0,
        this._f = 0,
        this.uf = 0,
        this.ff = 0,
        this.gf = 0,
        this.Ss = 99,
        this.mh = -1,
        this.Lh = this.Bh = this.uh = this.nh = 0,
        this.tu = -1,
        this.su = -1,
        this.hu = -1,
        this.ou = 0,
        this.au = 0,
        this.nu = 0,
        this.cs = -1;
        let t = this.mf = 0;
        for (t = 0; t < Sh7E.Zs; t++)
            this.$u[t] = 0;
        for (t = 0; t < 20; t++)
            this.qu[t] = this.tf[t] = 0;
        for (this.yf(),
        this.dh = this._h = -1e3,
        this.Fh = 0,
        t = 0; t < 5; t++)
            this.Ef[t] = 0;
        this.yo = 0,
        this.Mo = 0
    }
    yf() {
        this.ef = 1e3,
        this.sf = 1e3,
        this.hf = 1e3,
        this.if = 0,
        this.ju = 0
    }
    constructor(t, s, e, i, o, a) {
        this.mu = o,
        this.hs(t, s, e, i),
        this.index = a
    }
    hs(t, s, e, i) {
        this.vs(),
        this.s0 = t,
        this.rf = this.s0.kr,
        this.fs = s,
        this.ps = e,
        this.gs = i
    }
    wf(t) {
        t = t.Ea[Sh7E.Ml],
        this.s0.f[this.xs] && (this.f = this.s0.f[this.xs].Un + this.Io,
        this.x2 = 0,
        this.Cu < 0 && (this.x2 = 6 * this.mu.Wo - 3),
        9997 == this.s0.f[this.xs].state ? 0 == this.Ws && (this.px = this.Lu + -t + this.x2 + this.x - this.s0.f[this.xs].Hn,
        this.px < 0 ? D.Ba6u(this.s0.A0[this.f], 0, this.z + this.y - this.s0.f[this.xs].Qn, 0, 1 / this.s0.ti) : this.px > GLOBAL_ZOOM_WIDTH - 80 ? D.Ba6u(this.s0.A0[this.f], GLOBAL_ZOOM_WIDTH - 80, this.z + this.y - this.s0.f[this.xs].Qn, 0, 1 / this.s0.ti) : D.Ba6u(this.s0.A0[this.f], this.px, this.z + this.y - this.s0.f[this.xs].Qn, 0, 1 / this.s0.ti)) : (this.s0.A0.length > this.f && (0 == this.Ws && D.Ba6u(this.s0.A0[this.f], this.Lu + -t + this.x2 + this.x - this.s0.f[this.xs].Hn, this.z + this.y - this.s0.f[this.xs].Qn, 0, 1 / this.s0.ti),
        1 == this.Ws) && D.Ba6u(this.s0.A0[this.f], this.Lu + -t + this.x2 + this.x + this.s0.f[this.xs].Hn, this.z + this.y - this.s0.f[this.xs].Qn, 1, 1 / this.s0.ti),
        this.ls < .3 * this.ns && null != this.s0.f[this.xs].Kn && (0 == this.Ws ? D.Ba6u(BLg_.M1, this.Lu + -t + this.x2 + this.x - this.s0.f[this.xs].Hn + this.s0.f[this.xs].Kn.x, this.z + this.y - this.s0.f[this.xs].Qn + this.s0.f[this.xs].Kn.y, 0, 1 / 3) : D.Ba6u(BLg_.M1, this.Lu + -t + this.x2 + this.x + this.s0.f[this.xs].Hn - this.s0.f[this.xs].Kn.x - 1, this.z + this.y - this.s0.f[this.xs].Qn + this.s0.f[this.xs].Kn.y, 0, 1 / 3))))
    }
    Df(e, i) {
        if ((0 == this.Cu || 3 == this.s0.type) && (0 < this.Ku && this.Ku--,
        !(this.Eh < 0)) && this.s0.f[this.xs] && (!this.s0.f[this.xs].$n || 2 != this.s0.f[this.xs].$n.kind)) {
            if (3 == this.s0.type && 0 < this.s0.f[this.xs].xn && (this.ls = this.ls - this.s0.f[this.xs].xn,
            this.ls <= 0) && (this.ls = 0,
            this.xs = this.s0.f[this.xs].Gn),
            0 < this.bu && this.bu--,
            0 < this.ds && this.ds--,
            this.ds < 0 && this.ds++,
            0 < this.hn && this.hn--,
            0 < this.Au && this.Au--,
            0 < this.Qu && this.Qu--,
            this.xs != this.iu && (0 <= this.s0.f[this.xs].cr && PCo6(e, this.x, this.s0.f[this.xs].cr),
            this.waiting = 0),
            this.waiting++,
            0 <= this.s0.type && 0 == this.s0.f[this.xs].state && this.y < 0 && (this.xs = 212),
            1001 != this.s0.f[this.xs].state || 0 != this.Eh || 1 != this.s0.type && 4 != this.s0.type && 6 != this.s0.type || (0 == this.Os && (this.Os = -1),
            this.xs = 0),
            2 == this.s0.type && 2e3 == this.s0.f[this.xs].state && 0 == this.y && this.Gs < .1 && -.1 < this.Gs && (this.xs = 20),
            14 == this.s0.f[this.xs].state && this.ls <= 0) {
                if (-1 < this.tu)
                    for (let t = 0; t < T7ES._e; t++)
                        if (T7ES.s0[t].id == this.tu) {
                            this.s0 = T7ES.s0[t],
                            this.tu = -1;
                            break
                        }
                if (0 <= this.parent || 5 == this.group || 20 <= this.index)
                    this.ds <= 0 && (this.ds = 30);
                else if (0 == this.mu.$s && this.mu.ra && 0 < this.mu.ss) {
                    var o = 0 == this.group ? this.group + 10 : this.group;
                    let s = this.mu.Va.get(o);
                    if (null != s && 0 < s)
                        if (0 == this.bu) {
                            if ((s -= this.s0.Ho) <= 0)
                                for (let t = s = 0; t < this.mu.Zs; t++)
                                    this.mu.Ke[t] && this.mu.ts[t].group == o && 0 < this.mu.ts[t].ls && 0 == this.mu.ts[t].s0.type && 300 != this.mu.ts[t].s0.id && (this.mu.ts[t].ls = 0,
                                    this.mu.ts[t].os = 0);
                            this.mu.Va.set(o, s),
                            this.mu.ka.set(o, 60),
                            0 < s && (this.ds = 61,
                            this.bu = 46)
                        } else if (1 == this.bu) {
                            if (this.Eu.push(this.s0),
                            this.gf < this.Eu.length && (this.gf = this.Eu.length),
                            this.Ma) {
                                var a = []
                                  , h = [];
                                for (let s = 0; s < 20; s++)
                                    if (s != i && this.mu.Ke[s]) {
                                        for (let t = 0; t < this.mu.ts[s].Eu.length; t++)
                                            a.includes(this.mu.ts[s].Eu[t]) || a.push(this.mu.ts[s].Eu[t]);
                                        a.includes(this.mu.ts[s].s0) || a.push(this.mu.ts[s].s0)
                                    }
                                for (let t = a.length - 1; 0 < t; t--) {
                                    var n = e.ye(453, t + 1)
                                      , r = a[t];
                                    a[t] = a[n],
                                    a[n] = r
                                }
                                h.push(this.s0);
                                for (let t = this.Eu.length - 1; 0 <= t; t--)
                                    h.includes(this.Eu[t]) || h.push(this.Eu[t]);
                                var l = [];
                                for (let t = 1; t < T7ES._e; t++)
                                    0 == T7ES.s0[t].type && 0 == e.De && T7ES.s0[t].id < 30 && l.push(T7ES.s0[t]);
                                var u = new Set(a)
                                  , f = new Set(h);
                                let t = 0
                                  , s = !1;
                                for (; !s && 0 < l.length; ) {
                                    for (; t < 200; ) {
                                        var d = l[Math.floor(e.ye(444, l.length))];
                                        if (!u.has(d) && !f.has(d)) {
                                            this.s0 = d,
                                            s = !0;
                                            break
                                        }
                                        t++
                                    }
                                    if (s)
                                        break;
                                    if (0 < a.length)
                                        for (let t = 0; t < 4 && 0 < a.length; t++)
                                            u.delete(a.pop());
                                    else
                                        0 < h.length ? f.delete(h.pop()) : (this.s0 = l[Math.floor(e.ye(444, l.length))],
                                        s = !0);
                                    t = 0
                                }
                            }
                            var c = this.s0.Ho;
                            let t = 100 * this.mu.Va.get(o) / c;
                            100 < t && (t = 100),
                            this.ns = Math.floor(500 * t / 100),
                            this.rs = Math.floor(500 * t / 100),
                            this.ls = Math.floor(500 * t / 100),
                            this.os = Math.floor(200 * t / 100),
                            this.bu = 0
                        }
                }
                this.waiting = 0
            }
            if (2e3 == this.s0.f[this.xs].state && (0 < this.Gs ? this.Ws = 0 : this.Ws = 1),
            this.waiting > this.s0.f[this.xs].wait && (this.waiting = 0) != this.s0.f[this.xs].next) {
                if (this.xs = this.s0.f[this.xs].next,
                this.xs < 0 && (this.Ws = 1 - this.Ws,
                this.xs = -this.xs),
                this.Mf = 0,
                999 == this.xs && (0 == this.y || 0 != this.s0.type ? this.xs = 0 : (this.Mf = 1,
                this.xs = 212)),
                this.xs < 0 || this.xs >= TIJj.Qr)
                    return;
                14 == this.s0.f[this.iu].state && 13 != this.s0.f[this.xs].state && this.mu && (5 != this.group && 0 == this.Mo || 2 != this.mu.ve) && (1 != this.mu.$s && 4 != this.mu.$s || 5 != this.group && 0 == this.Mo || 3 != parseInt(this.s0.id / 10) || 38 == this.s0.id || i < 18) && (this.ds = 15),
                212 == this.xs && 0 == this.Mf && (this.Os = this.s0.Lr,
                0 < this.right && 0 == this.left ? this.Gs = this.s0.Br : 0 < this.left && 0 == this.right && (this.Gs = -this.s0.Br),
                0 < this.de && 0 == this.R0 ? this.zs = -this.s0.Mr : 0 == this.de && 0 < this.R0 && (this.zs = this.s0.Mr)),
                this.xs < TIJj.Qr && 0 <= this.s0.f[this.xs].cr && PCo6(e, this.x, this.s0.f[this.xs].cr),
                0 <= this.xs && this.xs < TIJj.Qr && this.s0.f[this.xs].os < 0 && 0 != e.Cs && (this.os >= -this.s0.f[this.xs].os || 0 == this.s0.f[this.xs].Gn ? this.os > -this.s0.f[this.xs].os ? (this.os += this.s0.f[this.xs].os,
                this._f -= this.s0.f[this.xs].os) : (this.os += this.s0.f[this.xs].os,
                this.os = 0) : this.xs = this.s0.f[this.xs].Gn,
                0 < this.s0.f[this.xs].Gn) && (0 < this.left && 0 == this.right && 0 == this.y && 0 == this.Ws && (this.xs = this.s0.f[this.xs].Gn),
                0 == this.left) && 0 < this.right && 0 == this.y && 1 == this.Ws && (this.xs = this.s0.f[this.xs].Gn)
            }
            110 != this.xs && 114 != this.xs || (this.xu = 3),
            202 == this.xs && (this.ds = 20),
            this.iu = this.xs
        }
    }
    Vf(t) {
        if (0 != this.Cu)
            0 < this.Cu && this.Cu--,
            this.Cu < 0 && this.Cu++;
        else if (!(this.Eh < 0 || this.s0.f[this.xs].$n && 2 == this.s0.f[this.xs].$n.kind)) {
            if (0 < this.Gs && 1 == this.nh || this.Gs < 0 && 1 == this.uh || (this.fs += this.Gs),
            4 != this.s0.type && 120 != this.s0.id || (this.fs += .2 * this.Gs),
            101 == this.s0.id && (this.fs -= .2 * this.Gs),
            0 < this.zs && 1 == this.Bh || this.zs < 0 && 1 == this.Lh || (this.gs += this.zs),
            this.nh = 0,
            this.uh = 0,
            this.Lh = 0,
            this.Bh = 0,
            3 == this.s0.type && 0 < this.s0.f[this.xs].Yh && (this.gs += this.s0.f[this.xs].Yh - 50),
            0 <= this.y && (1e-4 < this.Gs && (this.Gs -= this.fu,
            this.Gs < 1e-4) && (this.Gs = 0),
            this.Gs < -1e-4 && (this.Gs += this.fu,
            1e-4 < this.Gs) && (this.Gs = 0),
            1e-4 < this.zs && (this.zs -= this.fu,
            this.zs < 1e-4) && (this.zs = 0),
            this.zs < -1e-4) && (this.zs += this.fu,
            1e-4 < this.zs) && (this.zs = 0),
            4 != this.s0.type && 6 != this.s0.type || 1e3 != this.s0.f[this.xs].state || !(9 < this.Gs || this.Gs < -9) || (this.xs = 40),
            0 <= this.y && 0 == this.Os && 0 == this.s0.type && 0 == this.s0.f[this.xs].next && (4 == this.s0.f[this.xs].state || 5 == this.s0.f[this.xs].state) && (this.xs = 215),
            this.ps += this.Os,
            this.ps < -1e-4)
                3 != this.s0.type && (6 == this.s0.type ? this.Os += this.gu / 1.5 : 4 == this.s0.type ? this.Os += this.gu / 2 : 1002 == this.s0.f[this.xs].state && 124 == this.s0.id ? this.Os += this.gu / 10 : 1002 == this.s0.f[this.xs].state && 120 == this.s0.id ? this.Os += this.gu / 4 : 1002 == this.s0.f[this.xs].state && 101 == this.s0.id ? this.Os += this.gu / 1.5 : 1002 == this.s0.f[this.xs].state ? this.Os += this.gu / 3 : this.Os += this.gu),
                0 == this.s0.type && (12 == this.s0.f[this.xs].state && (this.xs < 185 ? (this.Os < -8 ? this.xs = 180 : this.Os < 1 ? this.xs = 181 : this.Os < 8 ? this.xs = 182 : this.xs = 183,
                this.lf < 0 && (12 <= this.Os || t.Zl < 6 ? this.xs = 181 : this.xs = 182)) : this.xs < 191 && 185 < this.xs && (this.Os < -8 ? this.xs = 186 : this.Os < 1 ? this.xs = 187 : this.Os < 8 ? this.xs = 188 : this.xs = 189)),
                18 == this.s0.f[this.xs].state) && this.xs < 205 && 1 < this.Os && (this.xs = 205);
            else if (null == this.s0.f[this.xs].$n || 2 != this.s0.f[this.xs].$n.kind)
                if (0 == this.s0.type) {
                    if (1e-4 < this.ps && 1e-4 < this.Os && 13 == this.s0.f[this.xs].state && (17 < this.Os || 9 < this.Gs || this.Gs < -9 ? (0 == t.wo && (0 == this.yo ? this.ls = this.ls - 10 : this.ls = this.ls - 1e3 / this.yo),
                    this.ps = 0,
                    this.Os = -3.5,
                    7 < this.Gs && (this.Gs = 7),
                    this.Gs < -7 && (this.Gs = -7),
                    this.xs = 185) : (this.ps = 0,
                    this.Os = 0,
                    this.Gs /= 3)),
                    0 < this.ps && 0 == this.Os && 212 == this.xs || 1e-4 < this.ps && 1e-4 < this.Os && 12 != this.s0.f[this.xs].state && 18 != this.s0.f[this.xs].state)
                        this.ps = 0,
                        this.Os = 0,
                        this.Gs /= 3,
                        100 == this.s0.f[this.xs].state ? this.xs = 94 : 212 == this.xs || 6 == this.s0.f[this.xs].state ? this.xs = 215 : this.xs = 219,
                        this.waiting = 0;
                    else if (1e-4 < this.ps && 1e-4 < this.Os && (12 == this.s0.f[this.xs].state || 18 == this.s0.f[this.xs].state)) {
                        if (PCo6(t, this.x, 6),
                        0 != this.lf) {
                            if (0 == t.wo) {
                                this.lf < 0 && (this.lf = -this.lf);
                                let t = this.lf;
                                0 < this.yo && (t = 100 * t / this.yo),
                                this.ls = this.ls - t,
                                this.rs = this.rs - t,
                                this.df += this.lf
                            }
                            this.lf = 0
                        }
                        11 < this.Os || 9 < this.Gs || this.Gs < -9 || 18 == this.s0.f[this.xs].state ? (this.ps = 0,
                        this.Os = -3.5,
                        7 < this.Gs && (this.Gs = 7),
                        this.Gs < -7 && (this.Gs = -7),
                        this.xs < 186 || 18 == this.s0.f[this.xs].state ? this.xs = 185 : this.xs = 191) : (this.ps = 0,
                        this.Os = 0,
                        this.Gs /= 3,
                        this.xs < 186 ? this.xs = 230 : this.xs = 231,
                        this.waiting = 0)
                    }
                } else
                    1 == this.s0.type ? 1e-4 < this.ps && 1e-4 < this.Os && (this.rf = this.rf - this.s0.Ir,
                    this.ps = 0,
                    9.9 < this.Os && 1002 == this.s0.f[this.xs].state ? (this.xs = 7,
                    this.Ws = 1 - this.Ws,
                    this.Os = -8,
                    this.Gs /= 2,
                    -1 < this.s0.Yr && PCo6(t, this.x, this.s0.Yr)) : (1002 == this.s0.f[this.xs].state ? (this.Os = 0,
                    this.xs = 70) : (this.Os = 0,
                    this.xs = 60),
                    this.waiting = 0,
                    this.Gs /= 2)) : 4 == this.s0.type || 6 == this.s0.type ? 1e-4 < this.ps && 1e-4 < this.Os && (this.rf = this.rf - this.s0.Ir,
                    6 == this.s0.type && this.ls <= 0 && (this.rf = -1),
                    this.ps = 0,
                    !(8.5 < this.Os || this.Gs < -10 || 10 < this.Gs) || 1002 != this.s0.f[this.xs].state && 1e3 != this.s0.f[this.xs].state ? (1002 == this.s0.f[this.xs].state ? (this.Os = 0,
                    this.xs = 70) : (this.Os = 0,
                    this.xs = 60),
                    this.waiting = 0,
                    this.Gs *= .7) : (this.xs = 0,
                    this.Os *= -.7,
                    this.Os < -10 && (this.Os = -10),
                    this.Gs *= .7,
                    -1 < this.s0.Yr && PCo6(t, this.x, this.s0.Yr))) : 2 == this.s0.type ? 1e-4 < this.ps && (this.rf = this.rf - 1,
                    this.ps = 0,
                    9 < this.Os ? (-1 < this.s0.Yr && PCo6(t, this.x, this.s0.Yr),
                    this.Ws = 1 - this.Ws,
                    this.Os = -5) : (this.rf = this.rf - this.s0.Ir,
                    this.rf < 0 && (this.rf = 0),
                    this.Os = 0,
                    this.xs = 20,
                    this.waiting = 0),
                    this.Gs /= 2) : 999 == this.s0.id && -1e-4 < this.ps && (this.ps = 0,
                    this.Os = 0,
                    this.Gs = 0,
                    this.xs = 101,
                    this.waiting = 0);
            this.x = Math.trunc(this.fs),
            this.y = Math.trunc(this.ps),
            this.z = Math.trunc(this.gs),
            12 != this.s0.f[this.xs].state && (this.lf = 0)
        }
    }
    Tf(t) {
        this.Zu = !1,
        0 < this.Gu && this.Gu--,
        0 < this.Ou && this.Ou--,
        0 < this.zu && this.zu--,
        0 < this.Wu && this.Wu--,
        0 < this.Uu && this.Uu--,
        0 < this.Yu && this.Yu--,
        0 < this.Nu && this.Nu--,
        0 < this.Ru && this.Ru--,
        0 < this.xu && this.xu--,
        0 == this.sh && 0 < this.right && (this.Gu = 5,
        this.kf(6)),
        0 == this.eh && 0 < this.left && (this.Ou = 5,
        this.kf(4)),
        0 == this.th && 0 < this.de && (this.zu = 5,
        this.kf(8)),
        0 == this.ih && 0 < this.R0 && (this.Wu = 5,
        this.kf(2)),
        0 == this.oh && 0 < this.ah && (this.Ru = 5,
        this.kf(9)),
        0 == this.hh && 0 < this.fe && (this.Uu = 5,
        this.Yu = 5,
        this.kf(0)),
        0 == this.es && 0 < this.attack && (this.Nu = 5,
        this.kf(5)),
        this.If(t),
        this.Cf(t),
        this.Af(t),
        this.vf(t),
        this.Xf(t),
        this.Yf(t),
        this.Nf(t),
        this.Uf(t),
        this.Rf(t),
        null != this.s0.f[this.xs] && (0 != this.s0.f[this.xs].xn && this.Nu > this.Ru && this.Nu > this.Uu ? (this.xf(t, this.s0.f[this.xs].xn),
        this.Nu = 0) : 0 != this.s0.f[this.xs].Gn && this.Ru > this.Nu && this.Ru > this.Uu ? (this.xf(t, this.s0.f[this.xs].Gn),
        this.Ru = 0) : 0 != this.s0.f[this.xs].Yh && this.Uu > this.Nu && this.Uu > this.Ru && (this.xf(t, this.s0.f[this.xs].Yh),
        this.Uu = 0),
        110 == this.xs && 0 < this.right && (this.Ws = 0),
        110 == this.xs && 0 < this.left && (this.Ws = 1),
        301 == this.s0.f[this.xs].state ? (0 < this.de && 0 == this.R0 && 0 == this.y && (this.zs = -this.s0.pr),
        0 < this.R0 && 0 == this.de && 0 == this.y && (this.zs = this.s0.pr)) : 19 == this.s0.f[this.xs].state && (0 < this.de && 0 == this.R0 && 0 == this.y && (this.zs = -this.s0.pr),
        0 < this.R0) && 0 == this.de && 0 == this.y && (this.zs = this.s0.pr),
        2 == this.Eh || 0 != this.s0.f[this.xs].state && 1 != this.s0.f[this.xs].state || (0 < this.Su && this.Su--,
        this.Su < 0 && this.Su++,
        0 < this.right && 0 == this.left && 0 == this.y && (1 == this.Ws && (this.Su = 0),
        this.Ws = 0,
        this.pu = (this.pu + 1) % (6 * this.s0.dr),
        this.pu < 4 * this.s0.dr ? this.xs = Math.floor(this.pu / this.s0.dr) + 5 : this.xs = 11 - Math.floor(this.pu / this.s0.dr),
        this.Gs = +this.s0._r,
        !this.Zu) && (this.sh || (this.Su += 10),
        11 <= this.Su || 2 == this.right) && (this.xs = 9,
        this.pu = 0,
        this.Su = 0),
        0 == this.right && 0 < this.left && 0 == this.y && (0 == this.Ws && (this.Su = 0),
        this.Ws = 1,
        this.pu = (this.pu + 1) % (6 * this.s0.dr),
        this.pu < 4 * this.s0.dr ? this.xs = Math.floor(this.pu / this.s0.dr) + 5 : this.xs = 11 - Math.floor(this.pu / this.s0.dr),
        this.Gs = -this.s0._r,
        !this.Zu) && (0 == this.eh && (this.Su -= 10),
        this.Su <= -11 || 2 == this.left) && (this.xs = 9,
        this.pu = 0,
        this.Su = 0),
        0 < this.de && 0 == this.R0 && 0 == this.y && ((0 == this.left && 0 == this.right || 0 < this.left && 0 < this.right) && (this.pu = (this.pu + 1) % (6 * this.s0.dr),
        this.pu < 4 * this.s0.dr ? this.xs = Math.floor(this.pu / this.s0.dr) + 5 : this.xs = 11 - Math.floor(this.pu / this.s0.dr)),
        this.zs = -this.s0.ur,
        this.Gs /= 1.4),
        0 < this.R0 && 0 == this.de && 0 == this.y && ((0 == this.left && 0 == this.right || 0 < this.left && 0 < this.right) && (this.pu = (this.pu + 1) % (6 * this.s0.dr),
        this.pu < 4 * this.s0.dr ? this.xs = Math.floor(this.pu / this.s0.dr) + 5 : this.xs = 11 - Math.floor(this.pu / this.s0.dr)),
        this.zs = +this.s0.ur,
        this.Gs /= 1.4),
        0 < this.fe && 0 < this.Uu && !this.Zu && (9 == this.xs ? (PCo6(t, this.x, 7),
        this.Su = 0,
        this.xs = 213,
        this.Zu = !0,
        this.Uu = 0,
        this.Gs = this.s0.wr * (-2 * this.Ws + 1),
        this.Os = this.s0.yr,
        0 < this.de && 0 == this.R0 ? this.zs = -this.s0.Dr : 0 == this.de && 0 < this.R0 && (this.zs = this.s0.Dr)) : (this.Su = 0,
        this.waiting = 0,
        this.Su = 0,
        this.xs = 210,
        this.Zu = !0,
        this.Uu = 0)),
        0 < this.attack && 0 < this.Nu && !this.Zu && (9 == this.xs ? 0 == this.Eh ? (0 != t.Cs && 0 < this.s0.f[85].os && (this.os = this.os - this.s0.f[85].os,
        this._f += this.s0.f[85].os,
        this.os <= 0) && (this.os = 0),
        this.xs = 85,
        this.Zu = !0,
        this.Nu = 0) : this.Eh % 100 == 1 ? (0 < this.left || 0 < this.right || 0 < this.de || 0 < this.R0 ? this.xs = 45 : this.xs = 35,
        this.Zu = !0,
        this.Nu = 0) : 4 == this.Eh ? (this.xs = 45,
        this.Zu = !0,
        this.Nu = 0) : 6 == this.Eh && (0 < this.left || 0 < this.right || 0 < this.de || 0 < this.R0 ? this.xs = 45 : this.xs = 55,
        this.Zu = !0,
        this.Nu = 0) : (this.Su = 0,
        (this.waiting = 0) == this.Eh ? 0 < this.Qu ? (this.xs = 70,
        this.Zu = !0,
        this.Nu = 0) : (this.Ff = 5 * t.ye(130, 2) + 60,
        this.xs = this.Ff,
        this.Zu = !0,
        (this.Nu = 0) != t.Cs && 0 < this.s0.f[this.Ff].os && (this.os > this.s0.f[this.Ff].os ? (this.os = this.os - this.s0.f[this.Ff].os,
        this._f += this.s0.f[this.Ff].os) : (this._f += this.os,
        this.os = 0))) : this.Eh % 100 == 1 ? (101 == this.Eh ? 0 == this.right && 0 == this.left && 0 == this.de && 0 == this.R0 ? this.xs = 5 * t.ye(131, 2) + 20 : this.xs = 45 : this.xs = 5 * t.ye(132, 2) + 20,
        this.Zu = !0,
        this.Nu = 0) : 4 == this.Eh ? (this.xs = 45,
        this.Zu = !0,
        this.Nu = 0) : 6 == this.Eh && (this.xs = 55,
        this.Zu = !0,
        this.Nu = 0))),
        0 < this.ah && 0 == this.xu && 0 < this.Ru && !this.Zu && (9 == this.xs ? this.xs = 102 : (this.Su = 0,
        this.waiting = 0,
        this.xs = 110),
        this.Zu = !0)),
        2 != this.Eh || 0 != this.s0.f[this.xs].state && 1 != this.s0.f[this.xs].state || (0 < this.Su && this.Su--,
        this.Su < 0 && this.Su++,
        this.xs < 12 && (this.xs = 12),
        0 < this.right && 0 == this.left && 0 == this.y && (1 == this.Ws && (this.Su = 0),
        this.Ws = 0,
        this.pu = (this.pu + 1) % (6 * this.s0.dr),
        this.pu < 4 * this.s0.dr ? this.xs = Math.floor(this.pu / this.s0.dr) + 5 + 7 : this.xs = 11 - Math.floor(this.pu / this.s0.dr) + 7,
        this.Gs = +this.s0.Sr,
        this.sh || (this.Su += 10),
        11 <= this.Su || 2 == this.right) && (this.xs = 16,
        this.pu = 0,
        this.Su = 0),
        0 == this.right && 0 < this.left && 0 == this.y && (0 == this.Ws && (this.Su = 0),
        this.Ws = 1,
        this.pu = (this.pu + 1) % (6 * this.s0.dr),
        this.pu < 4 * this.s0.dr ? this.xs = Math.floor(this.pu / this.s0.dr) + 5 + 7 : this.xs = 11 - Math.floor(this.pu / this.s0.dr) + 7,
        this.Gs = -this.s0.Sr,
        0 == this.eh && (this.Su -= 10),
        this.Su <= -11 || 2 == this.left) && (this.xs = 16,
        this.pu = 0,
        this.Su = 0),
        0 < this.de && 0 == this.R0 && 0 == this.y && ((0 == this.left && 0 == this.right || 0 < this.left && 0 < this.right) && (this.pu = (this.pu + 1) % (6 * this.s0.dr),
        this.pu < 4 * this.s0.dr ? this.xs = Math.floor(this.pu / this.s0.dr) + 5 + 7 : this.xs = 11 - Math.floor(this.pu / this.s0.dr) + 7),
        this.zs = -this.s0.br,
        this.Gs /= 1.4),
        0 < this.R0 && 0 == this.de && 0 == this.y && ((0 == this.left && 0 == this.right || 0 < this.left && 0 < this.right) && (this.pu = (this.pu + 1) % (6 * this.s0.dr),
        this.pu < 4 * this.s0.dr ? this.xs = Math.floor(this.pu / this.s0.dr) + 5 + 7 : this.xs = 11 - Math.floor(this.pu / this.s0.dr) + 7),
        this.zs = +this.s0.br,
        this.Gs /= 1.4),
        0 < this.attack && 0 < this.Nu && (this.Su = 0,
        this.waiting = 0,
        this.xs = 50,
        this.Nu = 0)),
        4 == this.s0.f[this.xs].state && this.y < 0 && (0 < this.right && 0 == this.left && (this.Ws = 0),
        0 < this.left && 0 == this.right && (this.Ws = 1),
        0 < this.attack) && (0 == this.Eh ? (this.waiting = 0,
        this.xs = 80,
        0 != t.Cs && 0 < this.s0.f[80].os && (this.os > this.s0.f[80].os ? (this.os = this.os - this.s0.f[80].os,
        this._f += this.s0.f[80].os) : (this._f += this.os,
        this.os = 0))) : this.Eh % 100 == 1 ? (this.waiting = 0) < this.left || 0 < this.right || 0 < this.de || 0 < this.R0 ? this.xs = 52 : this.xs = 30 : 4 != this.Eh && 6 != this.Eh || (this.xs = 52)),
        2 == this.s0.f[this.xs].state && 2 != this.Eh && (this.waiting = 0,
        this.pu = (this.pu + 1) % (4 * this.s0.gr),
        this.pu < 3 * this.s0.gr ? this.xs = Math.floor(this.pu / this.s0.gr) + 9 : this.xs = 10,
        0 == this.Ws && (this.Gs = this.s0.mr,
        0 < this.left) && (this.xs = 218),
        1 == this.Ws && (this.Gs = -this.s0.mr,
        0 < this.right) && (this.xs = 218),
        0 < this.de && 0 == this.R0 && 0 == this.y && (this.zs = -this.s0.pr,
        this.Gs /= 1.2),
        0 == this.de && 0 < this.R0 && 0 == this.y && (this.zs = +this.s0.pr,
        this.Gs /= 1.2),
        0 < this.fe && 0 < this.Uu && !this.Zu && (PCo6(t, this.x, 7),
        this.Su = 0,
        this.xs = 213,
        this.Gs = this.s0.wr * (-2 * this.Ws + 1),
        this.Os = this.s0.yr,
        0 < this.de && 0 == this.R0 ? this.zs = -this.s0.Dr : 0 == this.de && 0 < this.R0 && (this.zs = this.s0.Dr),
        this.Zu = !0,
        this.Uu = 0),
        0 < this.attack && 0 < this.Nu && !this.Zu && (0 == this.Eh ? (0 != t.Cs && 0 < this.s0.f[85].os && (this.os = this.os - this.s0.f[85].os,
        this._f += this.s0.f[85].os,
        this.os <= 0) && (this.os = 0),
        this.xs = 85,
        this.Zu = !0,
        this.Nu = 0) : this.Eh % 100 == 1 ? 0 < this.left || 0 < this.right || 0 < this.de || 0 < this.R0 ? this.xs = 45 : this.xs = 35 : 4 == this.Eh ? this.xs = 45 : 6 == this.Eh && (0 < this.left || 0 < this.right || 0 < this.de || 0 < this.R0 ? this.xs = 45 : this.xs = 55),
        this.Zu = !0,
        this.Nu = 0),
        0 < this.ah) && 0 < this.Ru && !this.Zu && (this.xs = 102,
        this.Zu = !0),
        2 == this.s0.f[this.xs].state && 2 == this.Eh && (this.waiting = 0,
        this.pu = (this.pu + 1) % (4 * this.s0.gr),
        this.pu < 3 * this.s0.gr ? this.xs = Math.floor(this.pu / this.s0.gr) + 16 : this.xs = 17,
        0 == this.Ws && (this.Gs = this.s0.Er,
        0 < this.left) && (this.xs = 19),
        1 == this.Ws && (this.Gs = -this.s0.Er,
        0 < this.right) && (this.xs = 19),
        0 < this.de && 0 == this.R0 && 0 == this.y && (this.zs = -this.s0.Fr,
        this.Gs /= 1.2),
        0 == this.de && 0 < this.R0 && 0 == this.y && (this.zs = +this.s0.Fr,
        this.Gs /= 1.2),
        0 < this.attack) && 0 < this.Nu && (this.xs = 50),
        215 == this.xs && (0 < this.ah && 0 < this.Ru ? this.xs = 102 : (0 < this.fe && (0 < this.right || .001 < this.Gs) && 0 < this.Uu && (PCo6(t, this.x, 7),
        this.Su = 0,
        this.xs = 213 + this.Ws,
        this.Gs = this.s0.wr,
        this.Os = this.s0.yr),
        0 < this.fe && (0 < this.left || this.Gs < -.001) && 0 < this.Uu && (PCo6(t, this.x, 7),
        this.Su = 0,
        this.xs = 214 - this.Ws,
        this.Gs = -this.s0.wr,
        this.Os = this.s0.yr)),
        0 < this.de && 0 == this.R0 ? this.zs = -this.s0.Dr : 0 == this.de && 0 < this.R0 && (this.zs = this.s0.Dr)),
        (182 == this.xs || 188 == this.xs) && 0 <= this.lf && 0 < this.fe && 0 < this.Uu && 0 < this.ls && (0 == this.Ws && this.Gs <= 0 || 1 == this.Ws && 0 <= this.Gs ? this.xs = 100 : this.xs = 108,
        this.waiting = 0,
        this.Os > this.s0.Vr && (this.Os = this.s0.Vr),
        this.Gs < 1 && -1 < this.Gs ? 1 == this.Ws ? this.Gs = this.s0.Tr : this.Gs = -this.s0.Tr : 0 < this.Gs ? this.Gs = this.s0.Tr : this.Gs = -this.s0.Tr),
        5 == this.s0.f[this.xs].state && (0 < this.right && 0 == this.left && (this.Ws = 0),
        0 == this.Ws && 217 != this.xs && this.Gs < 0 && (this.xs = 214),
        0 == this.Ws && 216 != this.xs && 0 < this.Gs && (this.xs = 213),
        0 < this.left && 0 == this.right && (this.Ws = 1),
        1 == this.Ws && 217 != this.xs && 0 < this.Gs && (this.xs = 214),
        1 == this.Ws && 216 != this.xs && this.Gs < 0 && (this.xs = 213),
        0 < this.Gs && 0 == this.Ws || this.Gs < 0 && 1 == this.Ws) && 0 < this.attack && (0 == this.Eh ? (0 != t.Cs && 0 < this.s0.f[90].os && (this.os = this.os - this.s0.f[90].os,
        this._f += this.s0.f[90].os,
        this.os <= 0) && (this.os = 0),
        this.xs = 90) : this.Eh % 100 != 1 && (4 != this.Eh && 6 != this.Eh || !(0 < this.left || 0 < this.right || 0 < this.de || 0 < this.R0)) || (4 == this.Eh || 6 == this.Eh ? this.xs = 52 : this.xs = 40,
        --this.Os,
        this.waiting = 0)),
        500 < this.s0.f[this.xs].en ? this.Gs = this.s0.f[this.xs].en - 550 : (0 < this.s0.f[this.xs].en && this.s0.f[this.xs].en > this.Gs && 0 == this.Ws && (this.Gs = this.s0.f[this.xs].en),
        0 < this.s0.f[this.xs].en && this.s0.f[this.xs].en > -this.Gs && 1 == this.Ws && (this.Gs = -this.s0.f[this.xs].en),
        this.s0.f[this.xs].en < 0 && this.s0.f[this.xs].en < this.Gs && 0 == this.Ws && (this.Gs = this.s0.f[this.xs].en),
        this.s0.f[this.xs].en < 0 && this.s0.f[this.xs].en < -this.Gs && 1 == this.Ws && (this.Gs = -this.s0.f[this.xs].en)),
        0 != this.s0.f[this.xs].sn && 0 == this.Cu && (500 < this.s0.f[this.xs].sn ? this.Os = this.s0.f[this.xs].sn - 550 : this.Os += this.s0.f[this.xs].sn),
        0 != this.s0.f[this.xs].Xn) && (500 < this.s0.f[this.xs].Xn ? this.zs = this.s0.f[this.xs].Xn - 550 : (0 < this.de && this.zu >= this.Wu && (this.zs = -this.s0.f[this.xs].Xn),
        0 < this.R0 && this.zu <= this.Wu && (this.zs = this.s0.f[this.xs].Xn)))
    }
    Gf(t, s) {
        if (0 == s) {
            if (5 == this.Nu || 5 == this.Uu || 5 == this.Ru || 5 == this.Ou || 5 == this.zu || 5 == this.Wu || 5 == this.Gu)
                return !0
        } else if (1 == s)
            if ("U" == t) {
                if (5 == this.Nu || 5 == this.Uu || 5 == this.Ru || 5 == this.Ou || 5 == this.Wu || 5 == this.Gu)
                    return !0
            } else if ("D" == t) {
                if (5 == this.Nu || 5 == this.Uu || 5 == this.Ru || 5 == this.Ou || 5 == this.zu || 5 == this.Gu)
                    return !0
            } else if ("L" == t) {
                if (5 == this.Nu || 5 == this.Uu || 5 == this.Ru || 5 == this.zu || 5 == this.Wu || 5 == this.Gu)
                    return !0
            } else if ("R" == t) {
                if (5 == this.Nu || 5 == this.Uu || 5 == this.Ru || 5 == this.Ou || 5 == this.zu || 5 == this.Wu)
                    return !0
            } else if ("d" == t) {
                if (5 == this.Nu || 5 == this.Uu || 5 == this.Ou || 5 == this.zu || 5 == this.Wu || 5 == this.Gu)
                    return !0
            } else if ("j" == t) {
                if (5 == this.Nu || 5 == this.Ru || 5 == this.Ou || 5 == this.zu || 5 == this.Wu || 5 == this.Gu)
                    return !0
            } else if ("a" == t && (5 == this.Uu || 5 == this.Ru || 5 == this.Ou || 5 == this.zu || 5 == this.Wu || 5 == this.Gu))
                return !0;
        return !1
    }
    Of(t) {
        if (this.Nu > t || this.Uu > t || this.Ru > t || this.zu > t || this.Wu > t || this.Ou > t || this.Gu > t)
            return !0
    }
    If(t) {
        let s = 0;
        0 == this.Ah && 5 == this.Ru && (this.Ah = 1,
        s = 1),
        1 == this.Ah && (5 == this.Gu && this.Ou < 5 ? (this.Ah = 2,
        s = 2) : this.Of(this.Ru) && (this.Ah = 0)),
        2 == this.Ah && (2 == this.right || 5 == this.Gu && 2 != s ? this.Ah = 0 : 5 == this.Nu && this.Uu < 5 ? (this.Ah = 3,
        s = 3) : this.Of(this.Gu) && (this.Ah = 0)),
        3 == this.Ah && (0 != this.s0.f[this.xs].Rs && 2 != this.Eh ? (this.xf(t, this.s0.f[this.xs].Rs),
        this.Ws = 0,
        this.Ah = 0,
        this.Ah = 0,
        this.Xh = 0,
        this.Th = 0,
        this.Ih = 0,
        this.wh = 0,
        this.Dh = 0,
        this.kh = 0,
        this.Vh = 0,
        this.Ch = 0) : this.Of(this.Nu) && (this.Ah = 0))
    }
    Cf(t) {
        let s = 0;
        0 == this.Xh && 5 == this.Ru && (this.Xh = 1,
        s = 1),
        1 == this.Xh && (5 == this.Ou && this.Gu < 5 ? (this.Xh = 2,
        s = 2) : this.Of(this.Ru) && (this.Xh = 0)),
        2 == this.Xh && (2 == this.left || 5 == this.Ou && 2 != s ? this.Xh = 0 : 5 == this.Nu && this.Uu < 5 ? (this.Xh = 3,
        s = 3) : this.Of(this.Ou) && (this.Xh = 0)),
        3 == this.Xh && (0 != this.s0.f[this.xs].Rs && 2 != this.Eh ? (this.xf(t, this.s0.f[this.xs].Rs),
        this.Ws = 1,
        this.Xh = 0,
        this.Ah = 0,
        this.Xh = 0,
        this.Th = 0,
        this.Ih = 0,
        this.wh = 0,
        this.Dh = 0,
        this.kh = 0,
        this.Vh = 0,
        this.Ch = 0) : this.Of(this.Nu) && (this.Xh = 0))
    }
    Af(t) {
        let s = 0;
        0 == this.Th && 5 == this.Ru && (this.Th = 1,
        s = 1),
        1 == this.Th && (5 == this.zu && this.Wu < 5 ? (this.Th = 2,
        s = 2) : this.Of(this.Ru) && (this.Th = 0)),
        2 == this.Th && (2 == this.de || 5 == this.zu && 2 != s ? this.Th = 0 : 5 == this.Nu && this.Uu < 5 ? (this.Th = 3,
        s = 3) : this.Of(this.zu) && (this.Th = 0)),
        3 == this.Th && (0 != this.s0.f[this.xs].On && 2 != this.Eh ? (this.xf(t, this.s0.f[this.xs].On),
        this.Th = 0,
        this.Ah = 0,
        this.Xh = 0,
        this.Th = 0,
        this.Ih = 0,
        this.wh = 0,
        this.Dh = 0,
        this.kh = 0,
        this.Vh = 0,
        this.Ch = 0) : this.Of(this.Nu) && (this.Th = 0))
    }
    vf(t) {
        let s = 0;
        0 == this.Ih && 5 == this.Ru && (this.Ih = 1,
        s = 1),
        1 == this.Ih && (5 == this.Wu && this.zu < 5 ? (this.Ih = 2,
        s = 2) : this.Of(this.Ru) && (this.Ih = 0)),
        2 == this.Ih && (2 == this.R0 || 5 == this.Wu && 2 != s ? this.Ih = 0 : 5 == this.Nu && this.Uu < 5 ? (this.Ih = 3,
        s = 3) : this.Of(this.Wu) && (this.Ih = 0)),
        3 == this.Ih && (0 != this.s0.f[this.xs].zn && 2 != this.Eh ? (this.xf(t, this.s0.f[this.xs].zn),
        this.Ih = 0,
        this.Ah = 0,
        this.Xh = 0,
        this.Th = 0,
        this.Ih = 0,
        this.wh = 0,
        this.Dh = 0,
        this.kh = 0,
        this.Vh = 0,
        this.Ch = 0) : this.Of(this.Nu) && (this.Ih = 0))
    }
    Xf(t) {
        let s = 0;
        0 == this.wh && 5 == this.Ru && (this.wh = 1,
        s = 1),
        1 == this.wh && (5 == this.Gu && this.Ou < 5 ? (this.wh = 2,
        s = 2) : this.Of(this.Ru) && (this.wh = 0)),
        2 == this.wh && (2 == this.right || 5 == this.Gu && 2 != s ? this.wh = 0 : 5 == this.Uu && this.Nu < 5 ? (this.wh = 3,
        s = 3) : this.Of(this.Gu) && (this.wh = 0)),
        3 == this.wh && (0 != this.s0.f[this.xs].Wn && 2 != this.Eh ? (this.xf(t, this.s0.f[this.xs].Wn),
        this.Ws = 0,
        this.wh = 0,
        this.Ah = 0,
        this.Xh = 0,
        this.Th = 0,
        this.Ih = 0,
        this.wh = 0,
        this.Dh = 0,
        this.kh = 0,
        this.Vh = 0,
        this.Ch = 0) : this.Of(this.Uu) && (this.wh = 0))
    }
    Yf(t) {
        let s = 0;
        0 == this.Dh && 5 == this.Ru && (this.Dh = 1,
        s = 1),
        1 == this.Dh && (5 == this.Ou && this.Gu < 5 ? (this.Dh = 2,
        s = 2) : this.Of(this.Ru) && (this.Dh = 0)),
        2 == this.Dh && (2 == this.left || 5 == this.Ou && 2 != s ? this.Dh = 0 : 5 == this.Uu && this.Nu < 5 ? (this.Dh = 3,
        s = 3) : this.Of(this.Ou) && (this.Dh = 0)),
        3 == this.Dh && (0 != this.s0.f[this.xs].Wn && 2 != this.Eh ? (this.xf(t, this.s0.f[this.xs].Wn),
        this.Ws = 1,
        this.Dh = 0,
        this.Ah = 0,
        this.Xh = 0,
        this.Th = 0,
        this.Ih = 0,
        this.wh = 0,
        this.Dh = 0,
        this.kh = 0,
        this.Vh = 0,
        this.Ch = 0) : this.Of(this.Uu) && (this.Dh = 0))
    }
    Nf(t) {
        let s = 0;
        0 == this.kh && 5 == this.Ru && (this.kh = 1,
        s = 1),
        1 == this.kh && (5 == this.zu && this.Wu < 5 ? (this.kh = 2,
        s = 2) : this.Of(this.Ru) && (this.kh = 0)),
        2 == this.kh && (2 == this.de || 5 == this.zu && 2 != s ? this.kh = 0 : 5 == this.Uu && this.Nu < 5 ? (this.kh = 3,
        s = 3) : this.Of(this.zu) && (this.kh = 0)),
        3 == this.kh && (0 != this.s0.f[this.xs].Zn && 2 != this.Eh ? (this.xf(t, this.s0.f[this.xs].Zn),
        this.kh = 0,
        this.Ah = 0,
        this.Xh = 0,
        this.Th = 0,
        this.Ih = 0,
        this.wh = 0,
        this.Dh = 0,
        this.kh = 0,
        this.Vh = 0,
        this.Ch = 0) : this.Of(this.Uu) && (this.kh = 0))
    }
    Uf(t) {
        let s = 0;
        0 == this.Vh && 5 == this.Ru && (this.Vh = 1,
        s = 1),
        1 == this.Vh && (5 == this.Wu && this.zu < 5 ? (this.Vh = 2,
        s = 2) : this.Of(this.Ru) && (this.Vh = 0)),
        2 == this.Vh && (2 == this.R0 || 5 == this.Wu && 2 != s ? this.Vh = 0 : 5 == this.Uu && this.Nu < 5 ? (this.Vh = 3,
        s = 3) : this.Of(this.Wu) && (this.Vh = 0)),
        3 == this.Vh && (0 != this.s0.f[this.xs].Pn && 2 != this.Eh ? (this.xf(t, this.s0.f[this.xs].Pn),
        this.Vh = 0,
        this.Ah = 0,
        this.Xh = 0,
        this.Th = 0,
        this.Ih = 0,
        this.wh = 0,
        this.Dh = 0,
        this.kh = 0,
        this.Vh = 0,
        this.Ch = 0) : this.Of(this.Uu) && (this.Vh = 0))
    }
    Rf(t) {
        let s = 0;
        if (0 == this.Ch && 5 == this.Ru && (this.Ch = 1,
        s = 1),
        1 == this.Ch && (5 == this.Yu && this.zu < 5 && this.Wu < 5 && this.Ou < 5 && this.Gu < 5 ? (this.Ch = 2,
        s = 2) : this.Of(this.Ru) && (this.Ch = 0)),
        2 == this.Ch && (2 == this.fe || 5 == this.Yu && 2 != s ? this.Ch = 0 : 5 == this.Nu && this.zu < 5 && this.Wu < 5 && this.Ou < 5 && this.Gu < 5 ? (this.Ch = 3,
        s = 3) : this.Of(this.Yu) && (this.Ch = 0)),
        3 == this.Ch) {
            if (6 == this.s0.id && 300 == this.s0.f[this.xs].Jn) {
                if (150 <= this.ls)
                    return;
                if ((0 == t.$s || 2 == t.$s || 3 == t.$s) && !t.Ye)
                    return
            }
            0 != this.s0.f[this.xs].Jn && -1 == this.tu && 2 != this.Eh ? (this.xf(t, this.s0.f[this.xs].Jn),
            this.Ch = 0,
            this.Ah = 0,
            this.Xh = 0,
            this.Th = 0,
            this.Ih = 0,
            this.wh = 0,
            this.Dh = 0,
            this.kh = 0,
            this.Vh = 0,
            this.Ch = 0) : 1 == this.su ? (this.ou = 0,
            this.Ah = 0,
            this.Xh = 0,
            this.Th = 0,
            this.Ih = 0,
            this.wh = 0,
            this.Dh = 0,
            this.kh = 0,
            this.Vh = 0,
            this.Ch = 0) : this.Of(this.Nu) && (this.Ch = 0)
        }
    }
    xf(t, s) {
        var e;
        this.Zu || (this.Zu = !0,
        s < (this.Bf = 0) && (s = -s,
        this.Bf = 1),
        999 == s && (s = 0),
        e = Math.abs(this.s0.f[s].os),
        null != this.s0.f[s] && (0 == t.Cs ? (this.xs = s,
        this.Gu = 0,
        this.Ou = 0,
        this.zu = 0,
        this.Wu = 0,
        this.Ru = 0,
        this.Nu = 0,
        this.Uu = 0,
        this.Yu = 0) : (this.os >= e % 1e3 || this.s0.f[s].os < 0) && this.ls > 10 * Math.floor(e / 1e3) && (this.ls = this.ls - 10 * Math.floor(e / 1e3),
        this.os = this.os - e % 1e3,
        this.os < 0 && (this.os = 0),
        this.df += 10 * Math.floor(e / 1e3),
        this._f += e % 1e3,
        this.xs = s,
        1 == this.Bf && (this.Ws = 1 - this.Ws),
        this.Gu = 0,
        this.Ou = 0,
        this.zu = 0,
        this.Wu = 0,
        this.Ru = 0,
        this.Nu = 0,
        this.Uu = 0,
        this.Yu = 0)))
    }
    kf(t) {
        this.Ef[0] = this.Ef[1],
        this.Ef[1] = this.Ef[2],
        this.Ef[2] = this.Ef[3],
        this.Ef[3] = this.Ef[4],
        this.Ef[4] = t
    }
}
class K2Ri {
    id = 0;
    sl = 0;
    el = new Array(100);
    constructor() {
        this.sl = 0
    }
}
class R2BL {
    zf = 0;
    total = 0;
    max = 0;
    Wf = new Array(60);
    id = 0;
    x = 0;
    ls = 0;
    rl = 0;
    ll = 0;
    join = 0;
    nf = 0;
    xs = 0;
    y = 0;
    ratio = 0;
    cl = 0;
    constructor() {
        this.id = -1,
        this.x = 500,
        this.ls = 500,
        this.rl = 1,
        this.ll = 0,
        this.cl = 0,
        this.join = 0,
        this.nf = 0,
        this.ratio = 0,
        this.y = 0,
        this.xs = 9
    }
}
class JM6H {
    bound = 0;
    al = "";
    nl = 0;
    hl = new Array(60);
    ol = 0;
    constructor() {
        this.bound = -1,
        this.nl = -1,
        this.al = "",
        this.ol = 0
    }
}
class ZMqv {
}
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
function J6av(t, s) {
    let e, i, o, a, h, n, r, l, u, f, d;
    for (l = 0,
    d = 0,
    o = t.Ce,
    u = T7ES.Ae[o].us,
    f = T7ES.Ae[o]._s,
    h = T7ES.Ae[o].w,
    n = Math.floor(h),
    e = 0; e < t.Zs; e++)
        t.Ke[e] && (0 == t.ts[e].s0.type ? (t.ts[e].gs < u && (t.ts[e].gs = u),
        t.ts[e].gs > f && (t.ts[e].gs = f)) : (t.ts[e].gs < u - 1 && (t.ts[e].gs = u - 1),
        t.ts[e].gs > f + 1 && (t.ts[e].gs = f + 1)),
        t.ts[e].z = Math.floor(t.ts[e].gs),
        3 == t.ts[e].s0.type ? (t.ts[e].fs < -300 && (t.Ke[e] = !1),
        t.ts[e].fs > h + 300 && (t.Ke[e] = !1)) : 0 == t.ts[e].s0.type ? (20 <= e ? (t.ts[e].fs < -100 && (t.ts[e].fs = -100),
        t.ts[e].fs > h + 100 && (t.ts[e].fs = h + 100)) : (5 == t.ts[e].group ? t.ts[e].fs < -300 && (t.ts[e].fs = -300) : t.ts[e].fs < 0 && (t.ts[e].fs = 0),
        t.ts[e].fs > h && (t.ts[e].fs = h)),
        0 < t.bh && t.ts[e].fs > t.bh && 5 != t.ts[e].group && 0 == t.ts[e].ds && (t.ts[e].fs = t.bh)) : 0 <= t.ts[e].Eh && (122 != t.ts[e].s0.id && 123 != t.ts[e].s0.id || !(0 < t.ts[e].Mo || 1 == t.$s && 5 == Math.floor(t.da / 10)) ? (t.ts[e].fs < 0 && 0 == t.ts[e].y && (t.Ke[e] = !1),
        t.ts[e].fs > h && 0 == t.ts[e].y && (t.Ke[e] = !1)) : (t.ts[e].fs < 10 && (t.ts[e].fs = 10),
        t.ts[e].fs > h - 10 && (t.ts[e].fs = h - 10))),
        t.ts[e].x = Math.floor(t.ts[e].fs));
    for (e = 0; e < 8; e++)
        t.Ke[e] && t.ts[e].za && (!Sh7E.Fo || t.Id[e] == Sh7E.Ml) && 0 < t.ts[e].ls && (14 != t.ts[e].s0.f[t.ts[e].xs].state ? l = l + t.ts[e].x + (130 - 260 * t.ts[e].Ws) * GLOBAL_ZOOM_WIDTH / 794 : l += t.ts[e].x,
        d++);
    if (0 == d)
        for (e = 0; e < t.Zs; e++)
            if (t.Ke[e] && 0 == t.ts[e].s0.type && 0 < t.ts[e].ls) {
                if (isNaN(t.ts[e].x))
                    continue;
                l,
                t.ts[e].x,
                e,
                l += t.ts[e].x,
                d++
            }
    for (0 == d && (l = 800,
    d = 1),
    (l = l / d - GLOBAL_ZOOM_WIDTH / 2) < 0 ? l = 0 : l > n - GLOBAL_ZOOM_WIDTH && (l = n - GLOBAL_ZOOM_WIDTH),
    0 != t.Bo && l > t.Bo - GLOBAL_ZOOM_WIDTH && (l = t.Bo - GLOBAL_ZOOM_WIDTH),
    0 == t.pause && (t.Gl = (l - t.Ea[Sh7E.Ml]) / 14,
    t.Fa[Sh7E.Ml] = (t.Gl + 5.38 * t.Fa[Sh7E.Ml]) / 7,
    t.Ea[Sh7E.Ml] += t.Fa[Sh7E.Ml],
    t.Ea[Sh7E.Ml] < 0 ? t.Ea[Sh7E.Ml] = 0 : t.Ea[Sh7E.Ml] > n - GLOBAL_ZOOM_WIDTH && (t.Ea[Sh7E.Ml] = n - GLOBAL_ZOOM_WIDTH)),
    e = 0; e < T7ES.Ae[o].L2; e++) {
        var c = !T7ES.$ && !!T7ES.Ae[o].M2[e]
          , p = (c ? T7ES.Ae[o].M2 : T7ES.Ae[o].B2)[e]
          , g = c ? 1 / T7ES.Ae[o].F2 * 3 : 1 / T7ES.Ae[o].F2;
        if (null == T7ES.Ae[o].N2[e] || 0 == T7ES.Ae[o].N2[e])
            if (0 == T7ES.Ae[o].loop[e])
                a = 0,
                T7ES.Ae[o].w > GLOBAL_ZOOM_WIDTH && (a = -(T7ES.Ae[o].T2[e] - GLOBAL_ZOOM_WIDTH) * t.Ea[Sh7E.Ml] / (T7ES.Ae[o].w - GLOBAL_ZOOM_WIDTH)),
                (r = 1) == (r = 0 < T7ES.Ae[o].Y2[e] && (s && (null == T7ES.Ae[o].c[e] && (T7ES.Ae[o].c[e] = 0),
                T7ES.Ae[o].c[e] == T7ES.Ae[o].v2[e] && null != T7ES.Ae[o].O2[e] && PCo6(t, t.Ea[0] + 400, T7ES.Ae[o].O2[e]),
                0 == t.pause) && (T7ES.Ae[o].c[e] = (T7ES.Ae[o].c[e] + 1) % T7ES.Ae[o].Y2[e]),
                T7ES.Ae[o].c[e] < T7ES.Ae[o].v2[e] || T7ES.Ae[o].c[e] > T7ES.Ae[o].X2[e]) ? 0 : r) && (null != T7ES.Ae[o].U2[e] ? D.Ba6u(p, a + T7ES.Ae[o].I2[e] + T7ES.Ae[o].U2[e] * T7ES.Ae[o].c[e], T7ES.Ae[o].C2[e] + T7ES.Ae[o].R2[e] * T7ES.Ae[o].c[e], 0, g) : D.Ba6u(p, a + T7ES.Ae[o].I2[e], T7ES.Ae[o].C2[e], 0, g));
            else if ((r = 1) == (r = 0 < T7ES.Ae[o].Y2[e] && (s && (null == T7ES.Ae[o].c[e] && (T7ES.Ae[o].c[e] = 0),
            T7ES.Ae[o].c[e] == T7ES.Ae[o].v2[e] && null != T7ES.Ae[o].O2[e] && PCo6(t, t.Ea[0] + 400, T7ES.Ae[o].O2[e]),
            0 == t.pause) && (T7ES.Ae[o].c[e] = (T7ES.Ae[o].c[e] + 1) % T7ES.Ae[o].Y2[e]),
            T7ES.Ae[o].c[e] < T7ES.Ae[o].v2[e] || T7ES.Ae[o].c[e] > T7ES.Ae[o].X2[e]) ? 0 : r))
                for (i = T7ES.Ae[o].loop[e],
                a = 0,
                T7ES.Ae[o].w > GLOBAL_ZOOM_WIDTH && (a = -(T7ES.Ae[o].T2[e] - GLOBAL_ZOOM_WIDTH) * t.Ea[Sh7E.Ml] / (T7ES.Ae[o].w - GLOBAL_ZOOM_WIDTH)),
                x2 = T7ES.Ae[o].I2[e]; x2 < T7ES.Ae[o].T2[e]; x2 += i)
                    null != T7ES.Ae[o].U2[e] ? D.Ba6u(p, a + x2 + T7ES.Ae[o].U2[e] * T7ES.Ae[o].c[e], T7ES.Ae[o].C2[e] + T7ES.Ae[o].R2[e] * T7ES.Ae[o].c[e], 0, g) : D.Ba6u(p, a + x2, T7ES.Ae[o].C2[e], 0, g)
    }
}
function MMsl(t) {
    let s, e, i, o, a, h, n;
    for (t.wc = 0,
    s = 0; s < t.Zs; s++)
        t.Ke[s] && (t.Un[t.wc] = s,
        t.wc++);
    if (0 < t.wc)
        for (s = t.wc - 1; 0 <= s; s--)
            for (e = 0; e < s; e++)
                t.ts[t.Un[e]].z > t.ts[t.Un[e + 1]].z && (n = t.Un[e],
                t.Un[e] = t.Un[e + 1],
                t.Un[e + 1] = n);
    for (o = t.Ce,
    T7ES.Ae[o].us,
    T7ES.Ae[o]._s,
    T7ES.Ae[o].w,
    s = 0; s < t.wc; s++) {
        var r;
        if (e = t.Un[s],
        (n = t.ts[e].ds) < 0 && (n = -n),
        0 <= t.ts[e].Eh && 3005 != t.ts[e].s0.f[t.ts[e].xs].state && 9997 != t.ts[e].s0.f[t.ts[e].xs].state && 223 != t.ts[e].s0.id && 224 != t.ts[e].s0.id && -70 < t.ts[e].ds && n % 4 < 2 && (!T7ES.$ && T7ES.Ae[o].D2 ? D.Ba6u(T7ES.Ae[o].V2, -t.Ea[Sh7E.Ml] + t.ts[e].x + t.ts[e].Lu - T7ES.Ae[o].b2 / 2, t.ts[e].z - T7ES.Ae[o].E2 / 2, 0, 1 / T7ES.Ae[o].F2 * 3) : D.Ba6u(T7ES.Ae[o].w2, -t.Ea[Sh7E.Ml] + t.ts[e].x + t.ts[e].Lu - T7ES.Ae[o].b2 / 2, t.ts[e].z - T7ES.Ae[o].E2 / 2, 0, 1 / T7ES.Ae[o].F2)),
        n % 4 < 2 && -25 < t.ts[e].ds && t.ts[e].wf(t),
        t.wo < 100 && (1 < t.ts[e].ll && t.ts[e].x < t.bh ? (a = t.ts[e].x - t.Ea[Sh7E.Ml] + t.ts[e].Lu,
        h = t.ts[e].z + 3 + (8 - JXAJ) / 2,
        (a = a < 10 ? 10 : a) > GLOBAL_ZOOM_WIDTH - 10 && (a = GLOBAL_ZOOM_WIDTH - 10),
        D.OPYj("x" + t.ts[e].ll, a, h, "Itbg", D.FYH9[1 <= t.ts[e].group && t.ts[e].group <= 4 ? t.ts[e].group : 0])) : (e < 20 || 5 != t.ts[e].group && 0 == t.ts[e].s0.type) && -25 < t.ts[e].ds ? (a = t.ts[e].x - t.Ea[Sh7E.Ml] + t.ts[e].Lu,
        h = t.ts[e].z + 5 + (8 - JXAJ) / 2,
        (a = a < 10 ? 10 : a) > GLOBAL_ZOOM_WIDTH - 10 && (a = GLOBAL_ZOOM_WIDTH - 10),
        r = 1 <= t.ts[e].group && t.ts[e].group <= 4 ? t.ts[e].group : 0,
        D.Tetg(e < 10 ? t.vi[e] : "Com", a, h, "Itbg", D.FYH9[r], D.RXhw[r])) : 20 <= e && -25 < t.ts[e].ds && 0 == t.ts[e].s0.type && 5 == t.ts[e].group && (t.ts[e].s0.id < 30 || 50 <= t.ts[e].s0.id || 38 == t.ts[e].s0.id) && (a = t.ts[e].x - t.Ea[Sh7E.Ml] + t.ts[e].Lu,
        h = t.ts[e].z + 5 + (8 - JXAJ) / 2,
        (a = a < 10 ? 10 : a) > GLOBAL_ZOOM_WIDTH - 10 && (a = GLOBAL_ZOOM_WIDTH - 10),
        D.Tetg("Com", a, h, "Itbg", D.FYH9[5], D.RXhw[5]))),
        0 < t.ts[e].mf)
            for (i = 0; i < t.ts[e].mf; i++)
                t.ts[e].bf[i] < 5 ? (D.Ba6u(BLg_.P1[t.ts[e].bf[i]], t.ts[e].Lu - t.Ea[Sh7E.Ml] + t.ts[e].pf[i] - 51, t.ts[e].Sf[i] - 40, 0, 1 / BLg_.ie),
                0 == t.pause && t.ts[e].bf[i]++) : 10 <= t.ts[e].bf[i] && t.ts[e].bf[i] < 15 ? (D.Ba6u(BLg_.P1[t.ts[e].bf[i] - 5], t.ts[e].Lu - t.Ea[Sh7E.Ml] + t.ts[e].pf[i] - 30, t.ts[e].Sf[i] - 24, 0, 1 / BLg_.ie),
                0 == t.pause && t.ts[e].bf[i]++) : 20 <= t.ts[e].bf[i] && t.ts[e].bf[i] < 29 ? (D.Ba6u(BLg_.P1[Math.floor((t.ts[e].bf[i] - 20) / 2) + 10], t.ts[e].Lu - t.Ea[Sh7E.Ml] + t.ts[e].pf[i] - 51, t.ts[e].Sf[i] - 40, 0, 1 / BLg_.ie),
                0 == t.pause && t.ts[e].bf[i]++) : 30 <= t.ts[e].bf[i] && t.ts[e].bf[i] < 39 ? (D.Ba6u(BLg_.P1[Math.floor((t.ts[e].bf[i] - 30) / 2) + 15], t.ts[e].Lu - t.Ea[Sh7E.Ml] + t.ts[e].pf[i] - 30, t.ts[e].Sf[i] - 24, 0, 1 / BLg_.ie),
                0 == t.pause && t.ts[e].bf[i]++) : i == t.ts[e].mf - 1 && t.ts[e].mf--
    }
}
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
function CvPa(t) {
    let s;
    for (s = 0; s < t.Zs; s++)
        t.Ke[s] && 0 == t.ts[s].Cu && (0 != t.ts[s].Bu && (t.ts[s].Gs = 2 * t.ts[s].Mu / (1 + t.ts[s].Bu),
        0 == t.ts[s].yu && t.ts[s].y < 0 && 212 == t.ts[s].xs ? t.ts[s].Os = t.ts[s].Os / 1.5 : t.ts[s].Os = 2 * t.ts[s].yu / (1 + t.ts[s].Bu),
        t.ts[s].zs = 2 * t.ts[s].wu / (1 + t.ts[s].Bu),
        t.ts[s].Bu = 0),
        t.ts[s].Mu = 0,
        t.ts[s].yu = 0,
        t.ts[s].wu = 0)
}
function PMGc(t) {
    let s, e, i;
    for (s = 0; s < 20; s++)
        if (0 < t.ts[s].ou && t.ts[s].ou--,
        t.Ke[s] && (7 == t.ts[s].s0.id || 8 == t.ts[s].s0.id) && 0 < t.ts[s].ls && 2 == t.ts[s].s0.f[t.ts[s].xs].state && 0 == t.ts[s].ou && t.ts[s].ls < 150) {
            for (e = 0; e < 20; e++)
                if (t.Ke[e] && t.ts[e].s0.id == 15 - t.ts[s].s0.id && 0 < t.ts[e].ls && t.ts[s].group == t.ts[e].group && 0 == t.ts[e].ou && t.ts[e].ls < 150 && 0 <= t.ts[e].xs && t.ts[e].xs < TIJj.Qr && (2 == t.ts[e].s0.f[t.ts[e].xs].state || 14 != t.ts[e].s0.f[t.ts[e].xs].state && 0 == t.ts[e].y && 9 < e) && Math.abs(t.ts[s].x - t.ts[e].x) < 50 && Math.abs(t.ts[s].z - t.ts[e].z) < 8 && (t.ts[s].x > t.ts[e].x || 9 < e) && s < 10)
                    for (i = 0; i < T7ES._e; i++)
                        if (51 == T7ES.s0[i].id) {
                            t.ts[s].ls = t.ts[s].ls + t.ts[e].ls,
                            t.ts[s].rs = t.ts[s].rs + t.ts[e].rs,
                            t.ts[s].rs > t.ts[s].ns && (t.ts[s].rs = t.ts[s].ns),
                            t.ts[s].ls > t.ts[s].rs && (t.ts[s].ls = t.ts[s].rs),
                            t.ts[s].xs = 290,
                            t.ts[s].su = 1,
                            t.ts[s].Gs = 0,
                            t.ts[e].Os = 0,
                            t.ts[s].x = Math.floor((t.ts[s].x + t.ts[e].x) / 2),
                            t.ts[s].z = Math.floor((t.ts[s].z + t.ts[e].z) / 2),
                            t.ts[s].fs = t.ts[s].x,
                            t.ts[s].gs = t.ts[s].z,
                            t.ts[s].hu = e,
                            t.ts[s].ou = 4500,
                            t.ts[s].au = t.ts[s].s0.id,
                            t.ts[s].nu = t.ts[e].s0.id,
                            t.ts[s].s0 = T7ES.s0[i],
                            t.ts[s].os = 500,
                            t.ts[s].iu = t.ts[s].eu = t.ts[s].xs,
                            t.Ke[e] = !1;
                            break
                        }
        } else if (t.Ke[s] && 51 == t.ts[s].s0.id && 1 == t.ts[s].su && (t.ts[s].xs < 9 || 260 < t.ts[s].xs) && t.ts[s].ou <= 0) {
            for (e = t.ts[s].hu,
            t.ts[s].su = -1,
            t.ts[s].ou = 900,
            i = 0; i < T7ES._e; i++) {
                var o, a, h, n, r, l;
                T7ES.s0[i].id == t.ts[s].au ? t.ts[s].s0 = T7ES.s0[i] : T7ES.s0[i].id == t.ts[s].nu && (o = t.ts[e].cf,
                a = t.ts[e].df,
                h = t.ts[e]._f,
                n = t.ts[e].uf,
                r = t.ts[e].gf,
                l = t.ts[e].ff,
                t.ts[e].hs(T7ES.s0[i], 580, -200, 300),
                t.Ke[e] = !0,
                t.ts[e].cf = o,
                t.ts[e].df = a,
                t.ts[e]._f = h,
                t.ts[e].uf = n,
                t.ts[e].gf = r,
                t.ts[e].ff = l)
            }
            t.ts[e].ls = Math.floor(t.ts[s].ls / 2),
            t.ts[e].rs = Math.floor(t.ts[s].rs / 2),
            t.ts[s].ls = Math.floor(t.ts[s].ls / 2),
            t.ts[s].rs = Math.floor(t.ts[s].rs / 2),
            t.ts[e].x = t.ts[s].x,
            t.ts[e].z = t.ts[s].z,
            t.ts[e].y = 0,
            t.ts[e].fs = t.ts[e].x,
            t.ts[e].gs = t.ts[e].z,
            t.ts[e].ps = 0,
            t.ts[s].Gs = 0,
            t.ts[e].Gs = 0,
            t.ts[e].Ws = 1 - t.ts[s].Ws,
            t.ts[s].xs = 112,
            t.ts[e].xs = 112,
            t.ts[s].iu = t.ts[s].eu = t.ts[s].xs,
            t.ts[e].iu = t.ts[e].eu = t.ts[e].xs,
            t.ts[s].os = 0,
            t.ts[e].os = 0,
            t.ts[e].group = t.ts[s].group
        }
}
function XNl6(t, s, e) {
    var i, o, a, h, n, r, l, u, f, d;
    return null != t.ts[s].s0.f[t.ts[s].xs] && 0 != t.ts[s].s0.f[t.ts[s].xs].ir && null != t.ts[e].s0.f[t.ts[e].xs] && 0 != t.ts[e].s0.f[t.ts[e].xs].sr && !(0 < t.ts[s].Ku) && !(0 < t.ts[e].$u[s]) && (i = t.ts[s].s0.f[t.ts[s].Du],
    o = t.ts[e].s0.f[t.ts[e].Du],
    a = i.hr.x,
    h = i.hr.y,
    n = i.hr.w,
    r = i.hr.i1,
    l = o.ar.x,
    u = o.ar.y,
    f = o.ar.w,
    d = o.ar.i1,
    l = 0 == t.ts[e].Ws ? t.ts[e].x - o.Hn + l : t.ts[e].x + o.Hn - l - f,
    u = t.ts[e].y - o.Qn + u,
    a = 0 == t.ts[s].Ws ? t.ts[s].x - i.Hn + a : t.ts[s].x + i.Hn - a - n,
    h = t.ts[s].y - i.Qn + h,
    a - l < f) && l - a < n && h - u < d && u - h < r
}
function ZLbB(t, s, e) {
    let i, o, a, h, n, r, l, u, f, d, c, p, g, y, x, m, _, S, E, b;
    for (i = t.ts[s].s0.f[t.ts[s].Du],
    o = t.ts[e].s0.f[t.ts[e].Du],
    g = 0; g < i.ir; g++)
        for (m = i.tr[g],
        y = 0; !(!(y < o.sr && (200 != t.ts[s].s0.id && 203 != t.ts[s].s0.id && 205 != t.ts[s].s0.id && 206 != t.ts[s].s0.id && 207 != t.ts[s].s0.id && 215 != t.ts[s].s0.id && 216 != t.ts[s].s0.id || 209 != t.ts[e].s0.id || 9 == m.kind)) || 3 == m.kind && 0 != t.ts[e].s0.type || 0 == m.kind && 4 == m.effect && 0 == t.ts[e].s0.type || 0 == m.kind && 20 == m.effect && (0 != t.ts[e].s0.type || 18 == t.ts[e].s0.f[t.ts[e].eu].state || 19 == t.ts[e].s0.f[t.ts[e].eu].state) || 0 == m.kind && 21 == m.effect && (18 == t.ts[e].s0.f[t.ts[e].eu].state || 19 == t.ts[e].s0.f[t.ts[e].eu].state) || 0 == m.kind && 30 == m.effect && 200 <= t.ts[e].xs && t.ts[e].xs <= 202 || 0 == m.kind && 2 == m.effect && 19 == t.ts[s].s0.f[t.ts[s].eu].state && 18 == t.ts[e].s0.f[t.ts[e].eu].state || 8 == m.kind && 0 != t.ts[e].s0.type || 0 != t.ts[e].ds && 8 != m.kind && 14 != m.kind || !(!(m.kind < 4 || 6 == m.kind || 9 == m.kind && 0 == t.ts[e].s0.type || 10 == m.kind || 11 == m.kind || 15 == m.kind || 16 == m.kind) || 13 == t.ts[e].s0.f[t.ts[e].xs].state || 10 == t.ts[e].s0.f[t.ts[e].xs].state || 212 == t.ts[e].s0.id && (212 != t.ts[s].s0.id || t.ts[e].xs % 10 == 5 && t.ts[s].xs % 10 == 0) || t.ts[s].group != t.ts[e].group || 0 == t.ts[s].group || 8 == m.kind || 18 == t.ts[s].s0.f[t.ts[s].xs].state && 21 != m.effect && 22 != m.effect || 0 == t.ts[s].s0.type && 3 == t.ts[e].s0.type && t.ts[s].Ws != t.ts[e].Ws || 1 == t.ts[e].s0.type || 2 == t.ts[e].s0.type || 4 == t.ts[e].s0.type || 6 == t.ts[e].s0.type)); y++) {
            if (5 == m.kind) {
                if (!(t.ts[s].Eh < 0 && t.ts[t.ts[s].Iu].Mh == s))
                    break;
                if (x = t.ts[s].Iu,
                null == t.ts[x].s0.f[t.ts[x].Du].qn || 0 == t.ts[x].s0.f[t.ts[x].Du].qn.vn)
                    break
            }
            if (5 == m.kind && t.ts[t.ts[s].Iu].group == t.ts[e].group && 0 != t.ts[t.ts[s].Iu].group && 13 != t.ts[e].s0.f[t.ts[e].xs].state && 1 != t.ts[e].s0.type && 2 != t.ts[e].s0.type && 4 != t.ts[e].s0.type && 6 != t.ts[e].s0.type && (212 != t.ts[e].s0.id || 212 == t.ts[s].s0.id && (t.ts[e].xs % 10 != 5 || t.ts[s].xs % 10 != 0)))
                break;
            _ = o.er[y],
            a = m.x,
            h = m.y,
            n = m.w,
            r = m.i1,
            l = _.kind,
            u = _.x,
            f = _.y,
            d = _.w,
            c = _.i1,
            u = 0 == t.ts[e].Ws ? t.ts[e].x - t.ts[e].s0.f[t.ts[e].Du].Hn + u : t.ts[e].x + t.ts[e].s0.f[t.ts[e].Du].Hn - u - d,
            f = t.ts[e].y - t.ts[e].s0.f[t.ts[e].Du].Qn + f,
            a = 0 == t.ts[s].Ws ? t.ts[s].x - i.Hn + a : t.ts[s].x + i.Hn - a - n,
            h = t.ts[s].y - i.Qn + h,
            0 == (S = m.cn) && (S = 16),
            t.ts[s].z - t.ts[e].z < S && t.ts[s].z - t.ts[e].z > -S && a - u < d && u - a < n && h - f < c && f - h < r && (E = 0,
            12 == t.ts[e].s0.f[t.ts[e].xs].state && m.hn <= 40 && 10 != m.kind && 11 != m.kind && (E = 2),
            1 == t.$s && ((b = 0) != t.ts[s].s0.type && 201 != t.ts[s].s0.id && 202 != t.ts[s].s0.id || 5 == t.ts[s].group || (b = 1),
            t.ts[s].Eh < 0 && t.Ke[t.ts[s].Iu] && 0 == t.ts[t.ts[s].Iu].s0.type && 5 != t.ts[t.ts[s].Iu].group && (b = 1),
            1e3 <= l) && 0 == b && (E = 2),
            0 == m.an && 1 != m.kind && 2 != m.kind && 7 != m.kind && (1004 != t.ts[e].s0.f[t.ts[e].Du].state || 0 < t.ts[s].s0.type && 0 <= t.ts[s].Eh) && 0 == E ? (p = t.ts[s].x - t.ts[e].x,
            ((p = (p = t.ts[s].Eh < 0 ? e == t.ts[s].Iu ? 2e3 : t.ts[t.ts[s].Iu].x - t.ts[e].x : p) < 0 ? -p : p) < t.ts[s].ef || p == t.ts[s].ef && 0 == t.ye(133, 2)) && (t.ts[s].ef = p,
            t.ts[s].qu[0] = e,
            t.ts[s].tf[0] = g,
            t.ts[s].if = 1)) : t.ts[s].if < 20 && 0 == E && (1004 == t.ts[e].s0.f[t.ts[e].Du].state && (t.ts[s].s0.type <= 0 || t.ts[s].Eh < 0) && 2 != m.kind && 7 != m.kind && 10 != m.kind && (E = 2),
            1 == m.kind && ((p = (p = t.ts[s].x - t.ts[e].x) < 0 ? -p : p) < t.ts[e].sf || p == t.ts[e].sf && 0 == t.ye(134, 2) ? t.ts[e].sf = p : E = 2),
            4 == m.kind && 0 != t.ts[s].lf && 2 != E && (E = 1),
            1 != m.kind && 2 != m.kind && 7 != m.kind && 2 != E && (E = 1),
            1 == m.kind && (0 < t.ts[s].right && t.ts[s].x < t.ts[e].x || 0 < t.ts[s].left && t.ts[s].x >= t.ts[e].x) && 16 == t.ts[e].s0.f[t.ts[e].xs].state && 2 != E && (E = 1),
            2 == m.kind && 0 == t.ts[s].Eh && 0 < t.ts[s].attack && 0 == t.ts[s].es && 1004 == t.ts[e].s0.f[t.ts[e].xs].state && 2 != E && (E = 1),
            2 == m.kind && 0 < t.ts[s].attack && 0 == t.ts[s].es && 2004 == t.ts[e].s0.f[t.ts[e].xs].state && 2 != E && (E = 1),
            1 == (E = 7 == m.kind && 0 < t.ts[s].attack && 0 == t.ts[s].es && 1004 == t.ts[e].s0.f[t.ts[e].xs].state && 2 != E ? 1 : E)) && t.ts[s].if < 20 && (t.ts[s].qu[t.ts[s].if] = e,
            t.ts[s].tf[t.ts[s].if] = g,
            t.ts[s].if++))
        }
}
function Gdhm(t) {
    let s, e, i, o;
    for (s = 0; s < t.Zs; s++)
        t.Ke[s] && (t.ts[s].Du = t.ts[s].xs,
        null != t.ts[s].s0.f[t.ts[s].xs]) && (0 == t.ts[s].s0.f[t.ts[s].xs].ir || 1001 == t.ts[s].s0.f[t.ts[s].xs].state && null != t.ts[t.ts[s].Iu].s0.f[t.ts[t.ts[s].Iu].xs].qn && 0 == t.ts[t.ts[s].Iu].s0.f[t.ts[t.ts[s].Iu].xs].qn.vn) && (t.ts[s].Ku = 0);
    for (i = 0; i < t.Zs; i++)
        if (t.Ke[i])
            for (o = i + 1; o < t.Zs; o++)
                t.Ke[o] && (0 < t.ts[i].$u[o] && t.ts[i].$u[o]--,
                0 < t.ts[o].$u[i] && t.ts[o].$u[i]--,
                s = i,
                e = o,
                XNl6(t, s, e) && ZLbB(t, s, e),
                s = o,
                e = i,
                XNl6(t, s, e)) && ZLbB(t, s, e);
    PMGc(t)
}
function EAyD(t) {
    let s, e, i, o, a, h;
    for (s = 0; s < t.Zs; s++)
        t.Ke[s] && 0 == t.ts[s].s0.type && (t.ts[s].gs < T7ES.Ae[t.Ce].us && (t.ts[s].gs = T7ES.Ae[t.Ce].us),
        t.ts[s].gs > T7ES.Ae[t.Ce]._s && (t.ts[s].gs = T7ES.Ae[t.Ce]._s),
        t.ts[s].z = Math.floor(t.ts[s].gs));
    for (s = 0; s < t.Zs; s++)
        if (t.Ke[s] && t.ts[s].Eh < 0)
            if (0 <= (e = t.ts[s].Iu) && e < t.Zs && t.Ke[e] && s == t.ts[e].Mh && 0 < t.ts[e].Eh && 0 < t.ts[e].ls) {
                if (17 == t.ts[e].s0.f[t.ts[e].xs].state) {
                    if (122 == t.ts[s].s0.id && 0 < t.ts[s].ls && (--t.ts[s].ls,
                    t.ts[s].ls % 5 == 0 && (t.ts[e].rs += 2,
                    t.ts[e].ls += 4,
                    t.ts[e].rs > t.ts[e].ns && (t.ts[e].rs = t.ts[e].ns),
                    t.ts[e].ls > t.ts[e].rs) && (t.ts[e].ls = t.ts[e].rs),
                    t.ts[s].ls % 6 == 0 && (t.ts[e].os += 5,
                    500 < t.ts[e].os) && (t.ts[e].os = 500),
                    t.ts[s].ls <= 0)) {
                        t.ts[e].Eh = 0,
                        t.ts[s].Eh = 0,
                        t.ts[e].Mh = 0,
                        t.ts[s].Iu = 0,
                        t.ts[s].xs = 0,
                        t.ts[s].Os = -8,
                        t.ts[s].Gs = t.ye(136, 7) - 3,
                        t.ts[e].xs = 0,
                        t.ts[s].rf = 0;
                        continue
                    }
                    if (123 == t.ts[s].s0.id && 0 < t.ts[s].ls && (t.ts[s].ls -= 2,
                    t.ts[e].os += 3,
                    500 < t.ts[e].os && (t.ts[e].os = 500),
                    -1 < t.ts[s].parent && 150 < t.ts[s].os && (t.ts[e].os = 150),
                    t.ts[s].ls <= 0)) {
                        t.ts[e].Eh = 0,
                        t.ts[s].Eh = 0,
                        t.ts[e].Mh = 0,
                        t.ts[s].Iu = 0,
                        t.ts[s].xs = 0,
                        t.ts[s].Os = -8,
                        t.ts[s].Gs = t.ye(137, 7) - 3,
                        t.ts[e].xs = 0,
                        t.ts[s].rf = 0;
                        continue
                    }
                }
                null == (i = null != t.ts[e].s0.f[t.ts[e].xs] ? t.ts[e].s0.f[t.ts[e].xs].qn : null) ? (t.ts[s].x = t.ts[e].x + (0 == t.ts[s].Ws ? 20 : -20),
                t.ts[s].y = t.ts[e].y - 30,
                t.ts[s].z = t.ts[e].z - 1,
                t.ts[s].gs = t.ts[s].z,
                t.ts[s].fs = t.ts[s].x,
                t.ts[s].ps = t.ts[s].y) : (t.ts[s].xs = i.An,
                t.ts[s].Ws = t.ts[e].Ws,
                t.ts[s].Cu = t.ts[e].Cu,
                o = 0 == t.ts[e].Ws ? t.ts[e].x - t.ts[e].s0.f[t.ts[e].xs].Hn + i.x : t.ts[e].x + t.ts[e].s0.f[t.ts[e].xs].Hn - i.x,
                a = t.ts[e].y - t.ts[e].s0.f[t.ts[e].xs].Qn + i.y,
                null != (h = null != t.ts[s].s0.f[t.ts[s].xs] ? t.ts[s].s0.f[t.ts[s].xs].qn : null) && (0 == t.ts[s].Ws ? t.ts[s].x = o + t.ts[s].s0.f[t.ts[s].xs].Hn - h.x : t.ts[s].x = o - t.ts[s].s0.f[t.ts[s].xs].Hn + h.x,
                t.ts[s].y = a + t.ts[s].s0.f[t.ts[s].xs].Qn - h.y,
                t.ts[s].z = t.ts[e].z,
                0 == i.Sn ? (t.ts[s].z++,
                t.ts[s].y--) : (t.ts[s].z--,
                t.ts[s].y++),
                t.ts[s].gs = t.ts[s].z,
                t.ts[s].fs = t.ts[s].x,
                t.ts[s].ps = t.ts[s].y,
                12 != t.ts[e].s0.f[t.ts[e].xs].state && 10 != t.ts[e].s0.f[t.ts[e].xs].state || (t.ts[e].Eh = 0,
                t.ts[s].Eh = 0,
                t.ts[s].xs = t.ye(138, 16),
                1 == t.ts[e].Bu ? (t.ts[s].Os = t.ts[e].yu,
                t.ts[s].Gs = t.ts[e].Mu / 3) : (t.ts[s].Os = t.ts[e].Os,
                t.ts[s].Gs = t.ts[e].Gs / 3),
                -2 < t.ts[s].ps && (t.ts[s].ps = -2)),
                0 == i.en || 1 != t.ts[s].s0.type && 4 != t.ts[s].s0.type && 6 != t.ts[s].s0.type || (t.ts[s].js = e,
                t.ts[s].xs = 40,
                0 == t.ts[e].Ws ? t.ts[s].Gs = i.en : t.ts[s].Gs = -i.en,
                t.ts[s].Os = i.sn,
                t.ts[e].Eh = 0,
                (t.ts[s].Eh = 0) < t.ts[e].de && 0 == t.ts[e].R0 ? t.ts[s].zs = -i.Xn : 0 == t.ts[e].de && 0 < t.ts[e].R0 && (t.ts[s].zs = i.Xn)),
                0 != i.en && 2 == t.ts[s].s0.type && (t.ts[s].xs = t.ye(139, 6),
                0 == t.ts[e].Ws ? t.ts[s].Gs = i.en : t.ts[s].Gs = -i.en,
                t.ts[s].Os = i.sn,
                t.ts[e].Eh = 0,
                (t.ts[s].Eh = 0) < t.ts[e].de && 0 == t.ts[e].R0 ? t.ts[s].zs = -i.Xn : 0 == t.ts[e].de && 0 < t.ts[e].R0 && (t.ts[s].zs = i.Xn)),
                3 == i.kind) && (t.ts[s].Eh = 0,
                t.ts[e].Eh = 0,
                t.ts[s].xs = t.ye(140, 6),
                t.ts[s].Gs = t.ye(141, 7) - 3,
                t.ts[s].Os = -t.ye(142, 4),
                t.ts[s].zs = (t.ye(143, 5) - 2) / 5))
            } else
                t.ts[s].Eh = 0
}
function IgUc(s, e) {
    let i, t, o, a, h, n, r, l;
    var u;
    let f, d, c, p, g, y;
    if (null != (u = s.ts[e].s0.f[s.ts[e].Du]))
        for (o = 0; o < s.ts[e].if && !(s.ts[e].tf[o] > u.ir - 1); o++)
            if (i = s.ts[e].qu[o],
            null != (S = s.ts[i].s0.f[s.ts[i].Du]) && !(0 < s.ts[i].$u[e])) {
                if (0 < s.ts[e].ju && 0 == s.ts[i].s0.type)
                    return;
                if (null == S.$n || 2 != S.$n.kind || -1 == s.ts[i].Tu || s.ts[s.ts[i].Tu].Vu != i || null == s.ts[s.ts[i].Tu].s0.f[s.ts[s.ts[i].Tu].Du].$n || 0 != s.ts[s.ts[i].Tu].s0.f[s.ts[s.ts[i].Tu].Du].$n.Dn) {
                    if (0 == (f = u.tr[s.ts[e].tf[o]]).kind && 21 == f.effect && (18 == s.ts[i].s0.f[s.ts[i].xs].state || 19 == s.ts[i].s0.f[s.ts[i].xs].state))
                        break;
                    if (5 == f.kind && s.ts[e].Eh < 0 && s.ts[s.ts[e].Iu].Mh == e) {
                        if (t = s.ts[e].Iu,
                        !(0 < (y = s.ts[t].s0.f[s.ts[t].Du].qn.vn) && t != i))
                            continue;
                        s.Qc.kind = 0,
                        s.Qc.x = f.x,
                        s.Qc.y = f.y,
                        s.Qc.w = f.w,
                        s.Qc.i1 = f.i1,
                        d = s.ts[e].s0.Ur[y],
                        s.Qc.en = d.en,
                        s.Qc.sn = d.sn,
                        s.Qc.hn = d.hn,
                        s.Qc.on = d.on,
                        s.Qc.an = d.an,
                        s.Qc.nn = d.nn,
                        s.Qc.rn = d.rn,
                        s.Qc.ln = d.ln,
                        s.Qc.cn = d.cn,
                        s.Qc.effect = d.effect,
                        s.Qc.dn = d.dn,
                        s.Qc._n = d._n,
                        s.Qc.un = d.un,
                        s.Qc.fn = d.fn,
                        s.Qc.mn = d.mn,
                        s.Qc.gn = d.gn
                    } else
                        s.Qc.kind = f.kind,
                        s.Qc.x = f.x,
                        s.Qc.y = f.y,
                        s.Qc.w = f.w,
                        s.Qc.i1 = f.i1,
                        s.Qc.en = f.en,
                        s.Qc.sn = f.sn,
                        s.Qc.hn = f.hn,
                        s.Qc.on = f.on,
                        s.Qc.an = f.an,
                        s.Qc.nn = f.nn,
                        s.Qc.rn = f.rn,
                        s.Qc.ln = f.ln,
                        s.Qc.cn = f.cn,
                        s.Qc.effect = f.effect,
                        s.Qc.dn = f.dn,
                        s.Qc._n = f._n,
                        s.Qc.un = f.un,
                        s.Qc.fn = f.fn,
                        s.Qc.mn = f.mn,
                        s.Qc.gn = f.gn;
                    if (f = s.Qc,
                    0 < s.ts[e].lf && 4 == f.kind && ((f.kind = 0) < s.ts[e].Gs && 1 == s.ts[e].Ws || s.ts[e].Gs < 0 && 0 == s.ts[e].Ws) && (f.en = -f.en),
                    2 == s.ts[i].s0.type && (f.en = Math.floor(f.en / 2),
                    f.sn = Math.floor(f.sn / 2)),
                    c = 0,
                    9 != f.kind || 0 != s.ts[i].s0.type && 1002 != s.ts[i].s0.f[s.ts[i].xs].state && 2e3 != s.ts[i].s0.f[s.ts[i].xs].state || (f.kind = 0) == s.ts[i].s0.type && (s.ts[e].ls = 0),
                    0 == f.kind && (100 == f.rn || 8 == S.state || 11 == S.state || 12 == S.state || 13 == S.state || 14 == S.state || 16 == S.state || 18 == S.state || (37 != s.ts[i].s0.id || 15 < s.ts[i].Au || 2 == Math.floor(f.effect / 10) || 3 == Math.floor(f.effect / 10) || 2 == f.effect || 3 == f.effect || 214 == s.ts[e].s0.id || 208 == s.ts[e].s0.id) && (6 != s.ts[i].s0.id || 1 < s.ts[i].Au || 2 == Math.floor(f.effect / 10) || 3 == Math.floor(f.effect / 10) || 2 == f.effect || 3 == f.effect || 214 == s.ts[e].s0.id || 208 == s.ts[e].s0.id || !(s.ts[i].xs < 20 || 5 == s.ts[i].s0.f[s.ts[i].xs].state || 4 == s.ts[i].s0.f[s.ts[i].xs].state || 7 == s.ts[i].s0.f[s.ts[i].xs].state)) && (52 != s.ts[i].s0.id || 15 < s.ts[i].Au || 214 == s.ts[e].s0.id || 208 == s.ts[e].s0.id)) && (7 != S.state || 60 < f.rn || s.ts[e].Ws == s.ts[i].Ws && 0 <= f.en && 124 != s.ts[e].s0.id && 220 != s.ts[e].s0.id && 221 != s.ts[e].s0.id && 222 != s.ts[e].s0.id || s.ts[i].ls <= 0)) {
                        if (s.ts[i].Au = 45,
                        300 == s.ts[i].s0.id) {
                            0 < s.ts[i].s0.f[s.ts[i].xs].sr && 1e3 < s.ts[i].s0.f[s.ts[i].xs].er[0].kind && (s.ts[i].group = 1,
                            s.ts[i].xs = s.ts[i].s0.f[s.ts[i].xs].er[0].kind - 1e3,
                            s.ts[e].Cu = 3,
                            s.ts[i].Cu = -3);
                            break
                        }
                        if (6 != s.ts[i].s0.type && 0 == s.wo && (p = f.ln,
                        0 < s.ts[i].yo && (p = Math.floor(100 * p / s.ts[i].yo)),
                        0 < s.ts[i].ls && p >= s.ts[i].ls && 0 == s.ts[i].s0.type && -1 == s.ts[i].parent && (0 == s.$s && s.ra && s.ts[i].gf++,
                        s.ts[s.ts[e].Ss].uf++,
                        0 < s.ts[i].Mo) && s.ts[i].Mo < 3 && s.jh[s.ts[i].Mo - 1]++,
                        s.ts[i].ls -= p,
                        s.ts[i].rs -= Math.floor(p / 3),
                        s.ts[i].df += p,
                        0 == s.ts[i].s0.type && -1 == s.ts[i].parent && (s.ts[s.ts[e].Ss].cf += p),
                        0 < s.ts[i].Mo) && s.ts[i].Mo < 3 && (s.Kh[s.ts[i].Mo - 1] += p),
                        (s.ts[i].ls <= 0 || 4 == f.effect) && (s.ts[i].hn = 80),
                        1 != s.ts[i].s0.type && 2 != s.ts[i].s0.type && 4 != s.ts[i].s0.type && 6 != s.ts[i].s0.type || (s.ts[i].rf -= f.ln,
                        100 == f.rn && (s.ts[i].rf = -1)),
                        (2 != s.ts[i].s0.type || 40 < f.hn) && (s.ts[i].Bu += 1),
                        0 == f.hn ? s.ts[i].hn += 20 : s.ts[i].hn += f.hn,
                        13 != s.ts[i].s0.f[s.ts[i].eu].state && 12 != S.state && 1 != s.ts[i].s0.type && 4 != s.ts[i].s0.type && 6 != s.ts[i].s0.type && 2 != s.ts[i].s0.type || (s.ts[i].hn = 80),
                        60 < s.ts[i].hn && 3 != s.ts[i].s0.type ? s.ts[i].hn = 80 : 40 < s.ts[i].hn && 3 != s.ts[i].s0.type ? (s.ts[i].xs = 226,
                        s.ts[i].hn = 60,
                        s.ts[i].y < 0 && (s.ts[i].hn = 80)) : 20 < s.ts[i].hn && 3 != s.ts[i].s0.type ? (s.ts[i].Ws != s.ts[e].Ws ? s.ts[i].xs = 222 : s.ts[i].xs = 224,
                        s.ts[i].hn = 40,
                        s.ts[i].y < 0 && (s.ts[i].hn = 80)) : 0 < s.ts[i].hn && 3 != s.ts[i].s0.type && (s.ts[i].xs = 220,
                        s.ts[i].hn = 20,
                        s.ts[i].y < 0) && (s.ts[i].Ws != s.ts[e].Ws ? s.ts[i].xs = 222 : s.ts[i].xs = 224),
                        3 == s.ts[e].s0.type && -1 < s.ts[e].s0.Nr && PCo6(s, s.ts[e].x, s.ts[e].s0.Nr),
                        0 == s.ts[i].s0.type ? (0 == f.effect && (80 == s.ts[i].hn ? T0tL_hard(s, s.ts[i].x) : (s.ts[i].hn,
                        0 == s.ts[e].s0.type ? T0tL(s, s.ts[i].x) : PCo6(s, s.ts[i].x, 0))),
                        1 == f.effect && (c = 1,
                        80 == s.ts[i].hn ? (PCo6(s, s.ts[i].x, 12),
                        PCo6(s, s.ts[i].x, 2)) : (s.ts[i].hn,
                        Q_F2(s, s.ts[i].x),
                        PCo6(s, s.ts[i].x, 0)))) : 0 < s.ts[i].s0.type && -1 < s.ts[i].s0.Xr && PCo6(s, s.ts[i].x, s.ts[i].s0.Xr),
                        80 == s.ts[i].hn && s.ts[i].Gs < 5 && -5 < s.ts[i].Gs && 0 == f.en ? 2e3 == s.ts[e].s0.f[s.ts[e].xs].state ? (s.ts[e].x,
                        s.ts[i].x,
                        s.ts[i].Mu += 5) : s.ts[i].Mu += 5 * (-2 * s.ts[e].Ws + 1) : 2e3 == s.ts[e].s0.f[s.ts[e].xs].state ? s.ts[e].x < s.ts[i].x ? s.ts[i].Mu += f.en : s.ts[i].Mu += -f.en : 4 == s.ts[i].s0.type || 6 == s.ts[i].s0.type ? (l = .55 * s.ts[i].Gs,
                        s.ts[i].Gs < 0 && (l = -.55 * s.ts[i].Gs),
                        f.en > l || 0 == s.ts[e].Ws && 0 < s.ts[i].Mu || 1 == s.ts[e].Ws && s.ts[i].Mu < 0 ? (0 == s.ts[e].Ws && (s.ts[i].Mu += f.en),
                        1 == s.ts[e].Ws && (s.ts[i].Mu += -f.en)) : (1 == s.ts[e].Ws && 0 < s.ts[i].Gs || 0 == s.ts[e].Ws && s.ts[i].Gs < 0) && (s.ts[i].Mu = -.55 * s.ts[i].Gs),
                        100 == s.ts[e].s0.id && s.ts[e].Eh < 0 && (s.ts[i].Mu *= 2.5,
                        PCo6(s, s.ts[i].x, 13),
                        0 < s.ts[i].Mu && s.ts[i].Mu < 10 && (s.ts[i].Mu = 10),
                        s.ts[i].Mu < 0) && -10 < s.ts[i].Mu && (s.ts[i].Mu = -10)) : 22 == f.effect || 23 == f.effect ? s.ts[i].x > s.ts[e].x ? s.ts[i].Mu += -f.en : s.ts[i].Mu += f.en : (0 == s.ts[e].Ws && (s.ts[i].Mu += f.en),
                        1 == s.ts[e].Ws && (s.ts[i].Mu += -f.en)),
                        3e3 != s.ts[e].s0.f[s.ts[e].xs].state || 0 != s.ts[i].s0.type && 209 == s.ts[e].s0.id && (200 == s.ts[i].s0.id || 203 == s.ts[i].s0.id || 205 == s.ts[i].s0.id || 206 == s.ts[i].s0.id || 207 == s.ts[i].s0.id || 215 == s.ts[i].s0.id || 216 == s.ts[i].s0.id || 209 == s.ts[i].s0.id && 40 == s.ts[i].xs) || (s.ts[e].xs = 10,
                        s.ts[e].waiting = 0,
                        s.ts[e].Gs = 0,
                        s.ts[e].zs = s.ts[e].s0.f[s.ts[e].xs].sn),
                        80 == s.ts[i].hn && (0 != f.sn ? ((2 != s.ts[i].s0.type && 3 != s.ts[i].s0.type || 40 < f.hn) && (s.ts[i].yu += f.sn),
                        0 < Math.floor(s.ts[i].y + s.ts[i].yu) && (s.ts[i].yu = 12)) : (2 != s.ts[i].s0.type && 3 != s.ts[i].s0.type || 40 < f.hn) && (s.ts[i].yu += -7),
                        0 == s.ts[i].s0.type && (0 == s.ts[i].Ws && s.ts[i].Mu <= 0 || 1 == s.ts[i].Ws && 0 <= s.ts[i].Mu ? s.ts[i].xs = 180 : s.ts[i].xs = 186),
                        0 < s.ts[i].Eh) && i == s.ts[s.ts[i].Mh].Iu && (s.ts[e].$u[s.ts[i].Mh] = 45,
                        s.ts[i].$u[s.ts[i].Mh] = 30,
                        x = s.ts[i].Mh,
                        s.ts[i].Eh = 0,
                        s.ts[x].Eh = 0),
                        0 <= s.ts[e].Cu && (s.ts[e].Cu = 3),
                        s.ts[i].Cu = -3,
                        f.on < 4 && 0 == f.an ? s.ts[e].Ku = 4 : s.ts[e].Ku = f.on,
                        0 < f.an && (0 != f.an ? s.ts[i].$u[e] = f.an : s.ts[i].$u[e] = 4),
                        null != S.$n && 2 == S.$n.kind && -1 != s.ts[i].Tu && s.ts[s.ts[i].Tu].Vu == i && 80 != s.ts[i].hn && 0 != S.$n.Tn && (s.ts[i].Ws != s.ts[e].Ws ? s.ts[i].xs = S.$n.Tn : s.ts[i].xs = S.$n.kn),
                        80 == s.ts[i].hn && (s.ts[i].hn = 0),
                        s.ts[e].Eh < 0 && (s.ts[s.ts[e].Iu].Cu = s.ts[e].Cu),
                        1002 == s.ts[e].s0.f[s.ts[e].xs].state && (s.ts[e].xs = s.ye(238, 16),
                        s.ts[e].Gs = -s.ts[i].Mu / 2,
                        s.ts[e].Os = -4,
                        4 == s.ts[e].s0.type) && 4 == s.ts[i].s0.type && (s.ts[e].Mu = -s.ts[i].Mu),
                        1 == s.ts[i].s0.type && (s.ts[i].ju = 1,
                        s.ts[i].xs = s.ye(239, 16),
                        s.ts[i].group = s.ts[e].group),
                        4 != s.ts[i].s0.type && 6 != s.ts[i].s0.type || (s.ts[e].$u[i] = 30,
                        s.ts[i].ju = 1,
                        s.ts[i].xs = s.ye(240, 16),
                        s.ts[i].group = s.ts[e].group),
                        2 == s.ts[i].s0.type && (s.ts[i].ju = 1,
                        -2 == s.ts[e].Eh ? 40 < f.hn || 4 == f.effect ? s.ts[s.ts[e].Iu].$u[i] = 19 : s.ts[s.ts[e].Iu].$u[i] = 3 : 2 != s.ts[e].s0.type && (40 < f.hn || 4 == f.effect ? s.ts[e].$u[i] = 19 : s.ts[e].$u[i] = 3),
                        s.ts[i].Ws = s.ts[e].Ws,
                        40 < f.hn || s.ts[i].y < 0 || 4 == f.effect ? s.ts[i].xs = s.ye(241, 6) : s.ts[i].xs = 20,
                        s.ts[i].group = s.ts[e].group),
                        201 == s.ts[e].s0.id && 0 == s.ts[i].s0.type && (s.Ke[e] = !1),
                        214 == s.ts[e].s0.id && 0 == s.ts[i].s0.type && (s.ts[e].ls = 0),
                        3 == s.ts[i].s0.type) {
                            if (3005 != s.ts[i].s0.f[s.ts[i].xs].state && (3006 != s.ts[i].s0.f[s.ts[i].xs].state || 3005 == s.ts[e].s0.f[s.ts[e].xs].state)) {
                                if (s.ts[e].Eh < 0 ? (s.ts[i].group = s.ts[s.ts[e].Iu].group,
                                s.ts[i].Ss = s.ts[s.ts[e].Iu].Ss) : (s.ts[i].group = s.ts[e].group,
                                s.ts[i].Ss = s.ts[e].Ss),
                                s.ts[i].ju = 1,
                                s.ts[i].waiting = 0,
                                s.ts[i].yu = 0,
                                s.ts[i].Mu = 0,
                                s.ts[i].wu = 0,
                                209 != s.ts[e].s0.id || 200 != s.ts[i].s0.id && 203 != s.ts[i].s0.id && 205 != s.ts[i].s0.id && 206 != s.ts[i].s0.id && 207 != s.ts[i].s0.id && 215 != s.ts[i].s0.id && 216 != s.ts[i].s0.id)
                                    if ((0 == s.ts[e].s0.type || s.ts[e].Eh < 0) && 2 != f.effect && 20 != f.effect) {
                                        if (s.ts[i].xs = 30,
                                        8 == s.ts[e].s0.id && (200 == s.ts[i].s0.id || 203 == s.ts[i].s0.id || 205 == s.ts[i].s0.id || 206 == s.ts[i].s0.id || 207 == s.ts[i].s0.id || 215 == s.ts[i].s0.id || 216 == s.ts[i].s0.id))
                                            for (a = 0; a < T7ES._e; a++)
                                                if (209 == T7ES.s0[a].id) {
                                                    s.ts[i].s0 = T7ES.s0[a],
                                                    s.ts[i].iu = s.ts[i].eu = s.ts[i].xs;
                                                    break
                                                }
                                    } else
                                        s.ts[i].xs = 20;
                                else
                                    s.ts[i].group = s.ts[e].group,
                                    s.ts[i].Ss = s.ts[e].Ss,
                                    s.ts[i].s0 = s.ts[e].s0,
                                    s.ts[i].xs = 40,
                                    s.ts[i].iu = s.ts[i].eu = s.ts[i].xs;
                                if (s.ts[e].Eh < 0) {
                                    if (s.ts[i].pu = s.ts[e].Iu,
                                    213 == s.ts[e].s0.id && (200 == s.ts[i].s0.id || 203 == s.ts[i].s0.id || 205 == s.ts[i].s0.id || 206 == s.ts[i].s0.id || 207 == s.ts[i].s0.id || 215 == s.ts[i].s0.id || 216 == s.ts[i].s0.id)) {
                                        for (a = 0; a < T7ES._e; a++)
                                            if (209 == T7ES.s0[a].id) {
                                                s.ts[i].s0 = T7ES.s0[a],
                                                s.ts[i].iu = s.ts[i].eu = s.ts[i].xs;
                                                break
                                            }
                                        s.ts[i].group = s.ts[s.ts[e].Iu].group,
                                        s.ts[i].Ss = s.ts[s.ts[e].Iu].Ss
                                    }
                                } else
                                    s.ts[i].pu = e
                            }
                            (3005 == s.ts[i].s0.f[s.ts[i].xs].state && 3005 == s.ts[e].s0.f[s.ts[e].xs].state || 3006 == s.ts[i].s0.f[s.ts[i].xs].state && 3006 == s.ts[e].s0.f[s.ts[e].xs].state) && (s.ts[i].xs = 20,
                            s.ts[i].waiting = 0,
                            s.ts[i].yu = 0,
                            s.ts[i].Mu = 0,
                            s.ts[i].wu = 0,
                            s.ts[e].xs = 20,
                            s.ts[e].waiting = 0,
                            s.ts[e].yu = 0,
                            s.ts[e].Mu = 0,
                            s.ts[e].wu = 0),
                            s.ts[e].Eh < 0 ? (t = s.ts[e].Iu,
                            0 < s.ts[t].Cu && (s.ts[t].Cu = -s.ts[t].Cu)) : 0 < s.ts[e].Cu && (s.ts[e].Cu = -s.ts[e].Cu)
                        }
                        3 != f.effect && 30 != f.effect || 0 != s.ts[i].s0.type || 13 == s.ts[i].s0.f[s.ts[i].eu].state || (s.ts[i].xs = 200,
                        s.ts[i].waiting = 0,
                        PCo6(s, s.ts[i].x, 14)),
                        (2 == f.effect || 21 == f.effect || 22 == f.effect || 20 == f.effect && 18 != s.ts[i].s0.f[s.ts[i].eu].state) && 0 == s.ts[i].s0.type && (s.ts[i].xs = 203,
                        s.ts[i].waiting = 0,
                        PCo6(s, s.ts[i].x, 16),
                        0 <= s.ts[i].Mu ? s.ts[i].Ws = 1 : s.ts[i].Ws = 0),
                        23 == f.effect && PCo6(s, s.ts[i].x, 16)
                    } else if (0 == f.kind && 0 == s.ts[i].s0.type)
                        3 != s.ts[e].s0.type ? 37 == s.ts[i].s0.id || 6 == s.ts[i].s0.id ? PCo6(s, s.ts[i].x, 17) : T0tL_guard(s, s.ts[i].x) : -1 < s.ts[e].s0.Nr && PCo6(s, s.ts[e].x, s.ts[e].s0.Nr),
                        6 != s.ts[i].s0.type && 0 == s.wo && (p = f.ln,
                        0 < s.ts[i].yo && (p = Math.floor(100 * p / s.ts[i].yo)),
                        g = Math.floor(p / 10),
                        0 < s.ts[i].ls && g >= s.ts[i].ls && 0 == s.ts[i].s0.type && -1 == s.ts[i].parent && (0 == s.$s && s.ra && s.ts[i].gf++,
                        s.ts[s.ts[e].Ss].uf++,
                        0 < s.ts[i].Mo) && s.ts[i].Mo < 3 && s.jh[s.ts[i].Mo - 1]++,
                        s.ts[i].ls -= g,
                        s.ts[i].rs -= Math.floor(g / 3),
                        s.ts[i].df += g,
                        0 == s.ts[i].s0.type && -1 == s.ts[i].parent && (s.ts[s.ts[e].Ss].cf += g),
                        0 < s.ts[i].Mo) && s.ts[i].Mo < 3 && s.Kh[s.ts[i].Mo - 1],
                        1 != s.ts[i].s0.type && 2 != s.ts[i].s0.type && 1 != s.ts[i].s0.type && 4 != s.ts[i].s0.type && 6 != s.ts[i].s0.type || (s.ts[i].rf -= f.ln,
                        100 == f.rn && (s.ts[i].rf = -1)),
                        s.ts[i].ls <= 0 && (s.ts[i].hn = 80),
                        s.ts[i].waiting = 0,
                        s.ts[i].Au += f.rn,
                        s.ts[i].Bu += 1,
                        s.ts[e].Cu = 3,
                        s.ts[i].Cu = -5,
                        0 == s.ts[i].y ? (30 < s.ts[i].Au && 7 == S.state ? s.ts[i].xs = 112 : 110 == s.ts[i].xs && (s.ts[i].xs = 111),
                        80 == s.ts[i].hn && s.ts[i].Gs < 3 && -3 < s.ts[i].Gs && 0 == f.en ? 2e3 == s.ts[e].s0.f[s.ts[e].xs].state ? s.ts[e].x < s.ts[i].x ? s.ts[i].Mu += 6 : s.ts[i].Mu -= 6 : s.ts[i].Mu += 3 * (-2 * s.ts[e].Ws + 1) : 2e3 == s.ts[e].s0.f[s.ts[e].xs].state ? s.ts[e].x < s.ts[i].x ? s.ts[i].Mu += f.en : s.ts[i].Mu += -f.en : 22 == f.effect || 23 == f.effect ? s.ts[i].x > s.ts[e].x ? s.ts[i].Mu += -f.en : s.ts[i].Mu += f.en : (0 == s.ts[e].Ws && (s.ts[i].Mu += f.en / 2),
                        1 == s.ts[e].Ws && (s.ts[i].Mu += -f.en / 2))) : 80 == s.ts[i].hn && s.ts[i].Gs < 6 && -6 < s.ts[i].Gs && f.en < 6 ? s.ts[i].Mu += 6 * (-2 * s.ts[e].Ws + 1) : 22 == f.effect || 23 == f.effect ? s.ts[i].x > s.ts[e].x ? s.ts[i].Mu += -f.en : s.ts[i].Mu += f.en : (0 == s.ts[e].Ws && (s.ts[i].Mu += f.en),
                        1 == s.ts[e].Ws && (s.ts[i].Mu += -f.en)),
                        f.on < 4 && 0 == f.an ? s.ts[e].Ku = 4 : (s.ts[e].Ku = f.on,
                        12 < s.ts[e].Ku && (s.ts[e].Ku = 12)),
                        0 < f.an && (4 < f.an ? (s.ts[i].$u[e] = f.an,
                        12 < s.ts[i].$u[e] && (s.ts[i].$u[e] = 12)) : s.ts[i].$u[e] = 4),
                        s.ts[e].Eh < 0 && (s.ts[s.ts[e].Iu].Cu = s.ts[e].Cu),
                        1002 == s.ts[e].s0.f[s.ts[e].xs].state && (s.ts[e].xs = s.ye(243, 16),
                        s.ts[e].Gs = -s.ts[i].Mu / 2,
                        s.ts[e].Os = -4,
                        s.ts[e].zs = -s.ts[e].zs / 1.5),
                        2e3 == s.ts[e].s0.f[s.ts[e].xs].state && (s.ts[e].x > s.ts[i].x && s.ts[e].Gs < 0 || s.ts[e].x < s.ts[i].x && 0 < s.ts[e].Gs) && (s.ts[e].Gs = s.ts[e].Gs / 2.5,
                        s.ts[e].zs = s.ts[e].zs / 2.5),
                        3e3 == s.ts[e].s0.f[s.ts[e].xs].state && (s.ts[e].xs = 10,
                        s.ts[e].waiting = 0,
                        s.ts[e].Gs = 0);
                    else if (6 == f.kind)
                        s.ts[i].Qu = 3;
                    else if (1 == f.kind) {
                        var x = s.ts[e].xs;
                        11 <= (S = s.ts[e].s0.f[x].state) && S <= 14 || 16 == S || 200 <= x && x <= 206 || (s.ts[e].Gs = s.ts[i].Gs = 0,
                        s.ts[e].x > s.ts[i].x ? s.ts[e].Ws = 1 : s.ts[e].Ws = 0,
                        s.ts[i].Ws = 1 - s.ts[e].Ws,
                        s.ts[e].xs = f.dn,
                        s.ts[i].xs = f.un,
                        S = s.ts[e].s0.f[f.dn],
                        M = s.ts[i].s0.f[f.un],
                        m = S.$n.x,
                        S.$n.y,
                        _ = M.$n.x,
                        E = M.$n.y,
                        s.ts[e].fs = s.ts[e].x,
                        s.ts[e].ps = s.ts[e].y,
                        0 == s.ts[e].Ws ? s.ts[i].fs = s.ts[e].x - S.Hn + m + _ - M.Hn : s.ts[i].fs = s.ts[e].x + S.Hn - m - _ + M.Hn,
                        s.ts[i].ps = s.ts[e].y - S.Qn + E - E + M.Qn,
                        l = (s.ts[i].x - s.ts[i].fs) / 2,
                        s.ts[i].fs += l,
                        s.ts[e].fs += l,
                        s.ts[i].x = Math.floor(s.ts[i].fs),
                        s.ts[e].x = Math.floor(s.ts[e].fs),
                        s.ts[e].Vu = i,
                        0 != s.ts[i].Eh && (s.Ke[s.ts[i].Mh] && i == s.ts[s.ts[i].Mh].Iu && (s.ts[s.ts[i].Mh].Eh = 0),
                        s.ts[i].Eh = 0),
                        s.ts[i].Tu = e,
                        s.ts[e].ku = 300,
                        s.ts[i].hn = 0)
                    } else if (7 == f.kind && 0 == s.ts[e].Eh) {
                        var m = s.ts[e].xs
                          , _ = s.ts[e].s0.f[m].state;
                        11 <= _ && _ <= 14 || 16 == _ || 200 <= m && m <= 206 || (s.ts[e].Eh = 1,
                        s.ts[i].Eh = -1,
                        s.ts[i].group = s.ts[e].group,
                        s.ts[e].Mh = i,
                        s.ts[i].Iu = e,
                        s.ts[i].Ss = e,
                        s.ts[e].ff++,
                        120 != s.ts[i].s0.id && 124 != s.ts[i].s0.id || (s.ts[e].Eh = 101),
                        4 == s.ts[i].s0.type && (s.ts[e].Eh = 4,
                        s.ts[i].Eh = -4),
                        6 == s.ts[i].s0.type && (0 < s.ts[i].ls ? s.ts[e].Eh = 6 : (s.ts[e].Eh = 4,
                        s.ts[i].rf = 0),
                        s.ts[i].Eh = -s.ts[e].Eh))
                    } else if (2 == f.kind) {
                        var S = s.ts[e].xs
                          , E = s.ts[e].s0.f[S].state;
                        11 <= E && E <= 14 || 16 == E || 200 <= S && S <= 206 || (1 == s.ts[i].s0.type && (s.ts[e].xs = 115,
                        s.ts[e].Eh = 1,
                        120 != s.ts[i].s0.id && 124 != s.ts[i].s0.id || (s.ts[e].Eh = 101),
                        s.ts[i].Eh = -1,
                        s.ts[i].group = s.ts[e].group,
                        s.ts[e].Mh = i,
                        s.ts[i].Iu = e,
                        s.ts[i].Ss = e,
                        s.ts[e].ff++),
                        4 == s.ts[i].s0.type && (s.ts[e].xs = 115,
                        s.ts[e].Eh = 4,
                        s.ts[i].Eh = -4,
                        s.ts[e].Mh = i,
                        s.ts[i].Iu = e,
                        s.ts[i].group = s.ts[e].group,
                        s.ts[i].Ss = e,
                        s.ts[e].ff++),
                        6 == s.ts[i].s0.type && (s.ts[e].xs = 115,
                        0 < s.ts[i].ls ? s.ts[e].Eh = 6 : (s.ts[e].Eh = 4,
                        s.ts[i].rf = 0),
                        s.ts[i].Eh = -s.ts[e].Eh,
                        s.ts[e].Mh = i,
                        s.ts[i].Iu = e,
                        s.ts[i].group = s.ts[e].group,
                        s.ts[i].Ss = e,
                        s.ts[e].ff++),
                        2 == s.ts[i].s0.type && (s.ts[e].xs = 116,
                        s.ts[e].Eh = 2,
                        s.ts[i].Eh = -2,
                        s.ts[i].group = s.ts[e].group,
                        s.ts[e].Mh = i,
                        s.ts[i].Iu = e,
                        s.ts[i].Ss = e,
                        s.ts[e].ff++),
                        s.ts[e].waiting = 0)
                    } else if (8 == f.kind)
                        s.ts[i].Pu = 1e3 + f.ln,
                        s.ts[e].xs = f.en,
                        s.ts[e].fs = s.ts[i].fs,
                        s.ts[e].gs = s.ts[i].gs + 1;
                    else if (9 == f.kind)
                        3 == s.ts[i].s0.type ? (-1 < s.ts[i].s0.Nr && PCo6(s, s.ts[i].x, s.ts[i].s0.Nr),
                        3005 != s.ts[i].s0.f[s.ts[i].xs].state ? (s.ts[e].Cu = -3,
                        s.ts[i].group = s.ts[e].group,
                        s.ts[i].Ss = s.ts[e].Ss,
                        s.ts[i].ju = 1,
                        s.ts[i].Ss = s.ts[e].Ss,
                        s.ts[i].xs = 30,
                        s.ts[i].waiting = 0,
                        s.ts[i].Os = s.ts[i].yu = 0,
                        s.ts[i].Gs = s.ts[i].Mu = 0,
                        s.ts[i].zs = s.ts[i].wu = 0,
                        s.ts[i].pu = e) : (s.ts[e].Cu = -3,
                        s.ts[i].ju = 1,
                        s.ts[i].xs = 40)) : 0 == s.ts[i].s0.type && (s.ts[e].ls = 0);
                    else if (10 == f.kind || 11 == f.kind && s.ts[i].lf < 0)
                        0 == s.ts[i].s0.type ? (s.ts[i].lf = -20,
                        0 == s.wo && (0 == s.ts[i].s0.type && -1 == s.ts[i].parent && 0 == s.Zl && (s.ts[s.ts[e].Ss].cf += 11),
                        0 < s.ts[i].Mo) && s.ts[i].Mo < 3 && (s.Kh[s.ts[i].Mo - 1] += 11),
                        s.ts[i].Gs = s.ts[i].Mu = s.ts[i].Gs / 1.07,
                        s.ts[i].zs = s.ts[i].wu = s.ts[i].zs / 1.07,
                        s.ts[i].xs = 182,
                        -2 <= s.ts[i].y && (s.ts[i].y = -2,
                        s.ts[i].Os = -6),
                        l = -6,
                        s.ts[i].Os > l && (s.ts[i].Os -= 3,
                        s.ts[i].yu = s.ts[i].Os),
                        0 != s.ts[i].Eh && (h = s.ts[i].Mh,
                        s.Ke[h] && i == s.ts[h].Iu && (-2 <= s.ts[h].y && (s.ts[h].y = -2),
                        s.ts[h].Ss = h,
                        s.ts[h].Os -= 3,
                        s.ts[h].yu = s.ts[h].Os,
                        s.ts[h].Eh = 0,
                        s.ts[h].xs = 0),
                        s.ts[i].Eh = 0)) : 1 != s.ts[i].s0.type && 4 != s.ts[i].s0.type && 6 != s.ts[i].s0.type || 201 == s.ts[i].s0.id || 202 == s.ts[i].s0.id ? 2 == s.ts[i].s0.type && (2e3 != s.ts[i].s0.f[s.ts[i].xs].state && (s.ts[i].xs = 0),
                        s.ts[i].Gs = s.ts[i].Mu = s.ts[i].Gs / 1.07,
                        s.ts[i].zs = s.ts[i].wu = s.ts[i].zs / 1.07,
                        -2 <= s.ts[i].y && (s.ts[i].y = -2,
                        s.ts[i].Os = -6),
                        l = -6,
                        s.ts[i].Os > l) && (s.ts[i].Os -= 2.3,
                        s.ts[i].yu = s.ts[i].Os) : (1e3 != s.ts[i].s0.f[s.ts[i].xs].state && (s.ts[i].xs = 0),
                        s.ts[i].Gs = s.ts[i].Mu = s.ts[i].Gs / 1.07,
                        s.ts[i].zs = s.ts[i].wu = s.ts[i].zs / 1.07,
                        -2 <= s.ts[i].y && (s.ts[i].y = -2,
                        s.ts[i].Os = -6),
                        l = -6,
                        s.ts[i].Os > l && (s.ts[i].Os -= 3,
                        s.ts[i].yu = s.ts[i].Os));
                    else if (3 == f.kind) {
                        var b, M = s.ts[e].xs;
                        11 <= (S = s.ts[e].s0.f[M].state) && S <= 14 || 16 == S || 200 <= M && M <= 206 || (s.ts[e].Gs = s.ts[i].Gs = 0,
                        s.ts[e].x > s.ts[i].x ? s.ts[e].Ws = 1 : s.ts[e].Ws = 0,
                        s.ts[i].Ws = 1 - s.ts[e].Ws,
                        s.ts[e].xs = f.dn,
                        s.ts[i].xs = f.un,
                        S = s.ts[e].s0.f[f.dn].$n.x,
                        s.ts[e].s0.f[f.dn].$n.y,
                        D = s.ts[i].s0.f[f.un].$n.x,
                        b = s.ts[i].s0.f[f.un].$n.y,
                        s.ts[e].fs = s.ts[e].x,
                        s.ts[e].ps = s.ts[e].y,
                        0 == s.ts[e].Ws ? s.ts[i].fs = s.ts[e].x - s.ts[e].s0.f[f.dn].Hn + S + D - s.ts[e].s0.f[f.un].Hn : s.ts[i].fs = s.ts[e].x + s.ts[e].s0.f[f.dn].Hn - S - D + s.ts[e].s0.f[f.un].Hn,
                        s.ts[i].ps = s.ts[e].y - s.ts[e].s0.f[f.dn].Qn + b - b + s.ts[i].s0.f[f.un].Qn,
                        l = (s.ts[i].x - s.ts[i].fs) / 2,
                        s.ts[i].fs += l,
                        s.ts[e].fs += l,
                        s.ts[i].x = Math.floor(s.ts[i].fs),
                        s.ts[e].x = Math.floor(s.ts[e].fs),
                        s.ts[e].Vu = i,
                        s.ts[i].Tu = e,
                        s.ts[e].ku = 300,
                        0 != s.ts[i].Eh && (s.Ke[s.ts[i].Mh] && i == s.ts[s.ts[i].Mh].Iu && (s.ts[s.ts[i].Mh].Eh = 0),
                        s.ts[i].Eh = 0),
                        s.ts[i].hn = 0)
                    } else if (14 == f.kind)
                        s.ts[e].x > s.ts[i].x + 5 && (0 < s.ts[i].Gs || 0 < s.ts[i].Mu) ? s.ts[i].nh = 1 : s.ts[e].x < s.ts[i].x - 5 && (s.ts[i].Gs < 0 || s.ts[i].Mu < 0) && (s.ts[i].uh = 1),
                        s.ts[e].z > s.ts[i].z + 2 && (0 < s.ts[i].zs || 0 < s.ts[i].wu) ? s.ts[i].Bh = 1 : s.ts[e].z < s.ts[i].z - 2 && (s.ts[i].zs < 0 || s.ts[i].wu < 0) && (s.ts[i].Lh = 1);
                    else if (15 == f.kind || 16 == f.kind)
                        if (0 == s.ts[i].s0.type) {
                            if (16 == f.kind) {
                                let t = f.ln;
                                0 < s.ts[i].yo && (t = Math.floor(100 * t / s.ts[i].yo)),
                                0 == s.wo && (0 < s.ts[i].ls && t >= s.ts[i].ls && 0 == s.ts[i].s0.type && -1 == s.ts[i].parent && (0 == s.$s && s.ra && s.ts[i].gf++,
                                s.ts[s.ts[e].Ss].uf++,
                                0 < s.ts[i].Mo) && s.ts[i].Mo < 3 && s.jh[s.ts[i].Mo - 1]++,
                                s.ts[i].ls -= t,
                                s.ts[i].rs -= Math.floor(t / 3),
                                s.ts[i].df += t,
                                0 == s.ts[i].s0.type && -1 == s.ts[i].parent && (s.ts[s.ts[e].Ss].cf += t),
                                0 < s.ts[i].Mo) && s.ts[i].Mo < 3 && (s.Kh[s.ts[i].Mo - 1] += t),
                                s.ts[i].xs = 200,
                                s.ts[i].waiting = 0,
                                PCo6(s, s.ts[i].x, 14),
                                0 < f.an && (s.ts[i].$u[e] = f.an),
                                2 == s.ts[i].Eh && s.ts[s.ts[i].Mh].Iu == i && -2 == s.ts[s.ts[i].Mh].Eh && (s.ts[e].$u[s.ts[i].Mh] = 45,
                                s.ts[i].Eh = 0,
                                s.ts[i].$u[s.ts[i].Mh] = 30,
                                s.ts[s.ts[i].Mh].Eh = 0,
                                s.ts[s.ts[i].Mh].xs = s.ye(244, 6),
                                s.ts[s.ts[i].Mh].Os = -1)
                            }
                            15 == f.kind && (s.ts[i].x > s.ts[e].x ? s.ts[i].Gs = s.ts[i].Mu = s.ts[i].Gs - 1 : s.ts[i].Gs = s.ts[i].Mu = s.ts[i].Gs + 1,
                            s.ts[i].z > s.ts[e].z ? s.ts[i].zs = s.ts[i].wu = s.ts[i].zs - .5 : s.ts[i].zs = s.ts[i].wu = s.ts[i].zs + .5,
                            -2 <= s.ts[i].y && (s.ts[i].y = -2,
                            s.ts[i].Os = -6),
                            l = -6,
                            s.ts[i].Os > l) && (s.ts[i].Os -= 3,
                            s.ts[i].yu = s.ts[i].Os)
                        } else
                            1 != s.ts[i].s0.type && 4 != s.ts[i].s0.type && 6 != s.ts[i].s0.type || 201 == s.ts[i].s0.id || 202 == s.ts[i].s0.id ? 2 == s.ts[i].s0.type && (2e3 != s.ts[i].s0.f[s.ts[i].xs].state && (s.ts[i].xs = 0),
                            s.ts[i].x > s.ts[e].x ? s.ts[i].Gs = s.ts[i].Mu = s.ts[i].Gs - 1 : s.ts[i].Gs = s.ts[i].Mu = s.ts[i].Gs + 1,
                            s.ts[i].z > s.ts[e].z ? s.ts[i].zs = s.ts[i].wu = s.ts[i].zs - .5 : s.ts[i].zs = s.ts[i].wu = s.ts[i].zs + .5,
                            -2 <= s.ts[i].y && (s.ts[i].y = -2,
                            s.ts[i].Os = -6),
                            l = -6,
                            s.ts[i].Os > l) && (s.ts[i].Os -= 2.3,
                            s.ts[i].yu = s.ts[i].Os) : (1e3 != s.ts[i].s0.f[s.ts[i].xs].state && (s.ts[i].xs = 0),
                            s.ts[i].x > s.ts[e].x ? s.ts[i].Gs = s.ts[i].Mu = s.ts[i].Gs - 1 : s.ts[i].Gs = s.ts[i].Mu = s.ts[i].Gs + 1,
                            s.ts[i].z > s.ts[e].z ? s.ts[i].zs = s.ts[i].wu = s.ts[i].zs - .5 : s.ts[i].zs = s.ts[i].wu = s.ts[i].zs + .5,
                            -2 <= s.ts[i].y && (s.ts[i].y = -2,
                            s.ts[i].Os = -6),
                            l = -6,
                            s.ts[i].Os > l && (s.ts[i].Os -= 3,
                            s.ts[i].yu = s.ts[i].Os));
                    var S = s.ts[i].xs
                      , D = s.ts[i].s0.f[S].state;
                    (11 <= D && D <= 14 || 16 == D || 200 <= S && S <= 206) && 2 == s.ts[i].Eh && s.ts[s.ts[i].Mh].Iu == i && -2 == s.ts[s.ts[i].Mh].Eh && (s.ts[e].$u[s.ts[i].Mh] = 45,
                    s.ts[i].Eh = 0,
                    s.ts[i].$u[s.ts[i].Mh] = 30,
                    s.ts[s.ts[i].Mh].Eh = 0,
                    s.ts[s.ts[i].Mh].xs = s.ye(236, 6),
                    s.ts[s.ts[i].Mh].Os = -1),
                    0 == f.kind && (r = s.ts[e].z < s.ts[i].z || !s.Ke[e] || !(s.ts[e].z > s.ts[i].z || i < e) ? i : e,
                    s.ts[r].mf < 10) && (s.ts[r].mf++,
                    h = s.ts[r].mf - 1,
                    60 < f.hn ? s.ts[r].bf[h] = 0 + 20 * c : s.ts[r].bf[h] = 10 + 20 * c,
                    0 == s.ts[e].Ws ? (s.ts[r].pf[h] = s.ts[e].x - s.ts[e].s0.f[s.ts[e].xs].Hn + f.x + f.w,
                    s.ts[r].pf[h] > s.ts[i].x && (s.ts[r].pf[h] = s.ts[i].x)) : (s.ts[r].pf[h] = s.ts[e].x + s.ts[e].s0.f[s.ts[e].xs].Hn - f.x - f.w,
                    s.ts[r].pf[h] < s.ts[i].x && (s.ts[r].pf[h] = s.ts[i].x)),
                    (n = s.ts[e].y - s.ts[e].s0.f[s.ts[e].xs].Qn + f.y + Math.floor(f.i1 / 2)) < s.ts[i].y - s.ts[e].s0.f[s.ts[e].xs].Qn ? n = Math.floor((n + s.ts[i].y - s.ts[e].s0.f[s.ts[e].xs].Qn) / 2) : n > s.ts[i].y && (n = Math.floor((n + s.ts[i].y) / 2)),
                    s.ts[r].Sf[h] = n + s.ts[e].z + Math.floor(9 * Math.random()) - 4,
                    s.ts[r].pf[h] += Math.floor(9 * Math.random()) - 4)
                }
            }
}
function ALJM(t) {
    let s, e, i, o, a, h, n;
    for (s = 0; s < t.Zs; s++)
        if (t.Ke[s])
            if (o = null != t.ts[s].s0.f[t.ts[s].Du] ? t.ts[s].s0.f[t.ts[s].Du].$n : null,
            a = null != t.ts[s].s0.f[t.ts[s].xs] ? t.ts[s].s0.f[t.ts[s].xs].$n : null,
            null != o && 1 == o.kind && 0 <= t.ts[s].Cu) {
                if ((n = 1) == (n = -1 != t.ts[s].Vu && t.ts[t.ts[s].Vu].Tu == s && (e = t.ts[s].Vu,
                null != (h = null != t.ts[e].s0.f[t.ts[e].Du] ? t.ts[e].s0.f[t.ts[e].Du].$n : null)) && 2 == h.kind ? n : 0) && (0 < o.In && (t.ts[s].ku -= o.In),
                o.In < 0 && (t.ts[s].ku += o.In,
                t.ts[s].ku < 0) && (n = 0,
                t.ts[s].xs = 0,
                t.ts[e].xs = 0,
                t.ts[s].Bu = 1,
                t.ts[e].Bu = 1,
                t.ts[s].x > t.ts[e].x ? t.ts[e].Mu = -4 : t.ts[e].Mu = 4,
                t.ts[e].yu = -3,
                t.ts[e].xs = 181),
                0 < n) && (0 < t.ts[s].attack && 0 < t.ts[s].Nu && 0 != o.En && (0 == t.ts[s].left && 0 == t.ts[s].right || 0 == o.Ln) && (t.ts[s].xs = o.En,
                t.ts[s].xs < 0 && (t.ts[s].Ws = 1 - t.ts[s].Ws,
                t.ts[s].xs = -t.ts[s].xs),
                t.ts[e].xs = t.ts[s].s0.f[t.ts[s].xs].$n.bn,
                t.ts[s].waiting = 0,
                t.ts[e].waiting = 0),
                0 < t.ts[s].attack && 0 < t.ts[s].Nu && (0 < t.ts[s].left || 0 < t.ts[s].right || 0 < t.ts[s].de || 0 < t.ts[s].R0) && 0 != o.Ln && (t.ts[s].xs = o.Ln,
                t.ts[s].xs < 0 && (t.ts[s].Ws = 1 - t.ts[s].Ws,
                t.ts[s].xs = -t.ts[s].xs),
                t.ts[e].xs = t.ts[s].s0.f[t.ts[s].xs].$n.bn,
                t.ts[s].waiting = 0,
                t.ts[e].waiting = 0),
                0 < t.ts[s].fe) && 0 < t.ts[s].Uu && 0 != o.Fn && (t.ts[s].xs = o.Fn,
                t.ts[s].xs < 0 && (t.ts[s].Ws = 1 - t.ts[s].Ws,
                t.ts[s].xs = -t.ts[s].xs),
                t.ts[e].xs = t.ts[s].s0.f[t.ts[s].xs].$n.bn,
                t.ts[s].waiting = 0,
                t.ts[e].waiting = 0),
                0 == n && (t.ts[s].xs = 0,
                t.ts[s].Vu = -1),
                0 != o.Mn) {
                    if (0 < o.Vn)
                        t.ts[e].lf = o.Vn;
                    else if (-1 == o.Vn)
                        for (t.ts[s].tu = t.ts[s].s0.id,
                        t.ts[s].cs = t.ts[e].s0.id,
                        t.ts[s].s0 = t.ts[e].s0,
                        t.ts[s].xs = 0,
                        t.ts[s].iu = t.ts[s].eu = t.ts[s].xs,
                        i = 0; i < t.Zs; i++)
                            t.Ke[i] && t.ts[i].parent == s && (t.ts[i].s0 = t.ts[e].s0,
                            t.ts[i].xs = 0,
                            t.ts[i].iu = t.ts[i].eu = t.ts[i].xs);
                    t.ts[e].y = t.ts[s].y - t.ts[s].s0.f[t.ts[s].xs].Qn + o.y,
                    t.ts[e].ps = t.ts[e].y,
                    0 == t.ts[s].Ws ? t.ts[e].x = t.ts[s].x - t.ts[s].s0.f[t.ts[s].xs].Hn + o.x : t.ts[e].x = t.ts[s].x + t.ts[s].s0.f[t.ts[s].xs].Hn - o.x,
                    t.ts[e].fs = t.ts[e].x,
                    t.ts[s].Du = t.ts[s].xs = t.ts[s].s0.f[t.ts[s].xs].next,
                    (t.ts[s].waiting = 0) == t.ts[s].Ws ? t.ts[e].Gs = o.Mn : t.ts[e].Gs = -o.Mn,
                    t.ts[e].Du = t.ts[e].xs = o.bn,
                    t.ts[e].Os = o.yn,
                    0 < t.ts[s].de && 0 == t.ts[s].R0 ? t.ts[e].zs = -o.wn : 0 == t.ts[s].de && 0 < t.ts[s].R0 && (t.ts[e].zs = o.wn)
                }
                1 == o.Cn && 2 == t.ts[s].waiting && (0 < t.ts[s].right && 0 == t.ts[s].left && (t.ts[s].Ws = 0),
                0 == t.ts[s].right) && 0 < t.ts[s].left && (t.ts[s].Ws = 1),
                -1 == o.Cn && 2 == t.ts[s].waiting && (0 < t.ts[s].right && 0 == t.ts[s].left && (t.ts[s].Ws = 1),
                0 == t.ts[s].right) && 0 < t.ts[s].left && (t.ts[s].Ws = 0)
            } else
                null != a && 2 == a.kind && 0 == (n = -(n = 1) != t.ts[s].Tu && t.ts[t.ts[s].Tu].Vu == s && (e = t.ts[s].Tu,
                null != (h = null != t.ts[e].s0.f[t.ts[e].xs] ? t.ts[e].s0.f[t.ts[e].xs].$n : null)) && 1 == h.kind ? n : 0) && (t.ts[s].xs = 212,
                t.ts[s].Os = -3,
                -2 < t.ts[s].ps) && (t.ts[s].ps = -2)
}
function Rqv3(t) {
    let s, e, i, o, a, h, n;
    for (s = 0; s < t.Zs; s++)
        t.Ke[s] && null != (a = null != t.ts[s].s0.f[t.ts[s].xs] ? t.ts[s].s0.f[t.ts[s].xs].$n : null) && 1 == a.kind && 9 == t.ts[s].s0.f[t.ts[s].xs].state && 1 == (-1 != t.ts[s].Vu && t.ts[t.ts[s].Vu].Tu == s && (e = t.ts[s].Vu,
        null != (h = null != t.ts[e].s0.f[t.ts[e].xs] ? t.ts[e].s0.f[t.ts[e].xs].$n : null)) && 2 == h.kind ? 1 : 0) && ((0 == t.ts[e].Cu && 1 == a.Dn || 0 == a.Dn) && (t.ts[e].xs = a.bn),
        t.ts[e].xs < 0 && (t.ts[e].Ws = 1 - t.ts[e].Ws,
        t.ts[e].xs = -t.ts[e].xs),
        0 != a.ln && 0 == t.ts[s].waiting && (0 < a.ln ? (n = a.ln,
        0 < t.ts[e].yo && (n = Math.floor(100 * n / t.ts[e].yo)),
        0 == t.wo && (0 < t.ts[e].ls && n >= t.ts[e].ls && -1 == t.ts[e].parent && (0 == t.$s && t.ra && t.ts[e].gf++,
        t.ts[t.ts[s].Ss].uf++,
        0 < t.ts[e].Mo) && t.ts[e].Mo < 3 && t.jh[t.ts[e].Mo - 1]++,
        t.ts[e].ls -= n,
        t.ts[e].rs -= Math.floor(n / 3),
        t.ts[s].waiting = 1,
        t.ts[s].Cu = 2,
        t.ts[e].Cu = -3,
        t.ts[e].df += n,
        t.ts[t.ts[s].Ss].cf += n,
        0 < t.ts[e].Mo) && t.ts[e].Mo < 3 && (t.Kh[t.ts[e].Mo - 1] += n)) : (0 == t.wo && (t.ts[e].ls += a.ln,
        t.ts[e].rs += Math.floor(a.ln / 3)),
        t.ts[s].waiting = 1)),
        i = 0 == t.ts[s].Ws ? t.ts[s].x - t.ts[s].s0.f[t.ts[s].xs].Hn + a.x : t.ts[s].x + t.ts[s].s0.f[t.ts[s].xs].Hn - a.x,
        o = t.ts[s].y - t.ts[s].s0.f[t.ts[s].xs].Qn + a.y,
        null != (h = t.ts[e].s0.f[a.bn].$n) && (0 == t.ts[e].Ws ? t.ts[e].x = i + t.ts[e].s0.f[t.ts[e].xs].Hn - h.x : t.ts[e].x = i - t.ts[e].s0.f[t.ts[e].xs].Hn + h.x,
        t.ts[e].y = o + t.ts[e].s0.f[t.ts[e].xs].Qn - h.y),
        t.ts[e].z = t.ts[s].z,
        0 < a.Sn % 10 ? (t.ts[e].z++,
        t.ts[e].y--) : (t.ts[e].z--,
        t.ts[e].y++),
        1 == Math.floor(a.Sn / 10) ? t.ts[e].Ws = t.ts[s].Ws : 2 == Math.floor(a.Sn / 10) && (t.ts[e].Ws = 1 - t.ts[s].Ws),
        t.ts[e].gs = t.ts[e].z,
        t.ts[e].fs = t.ts[e].x,
        t.ts[e].ps = t.ts[e].y)
}
function VuC1(h) {
    let n, r, s, e, t, l, u, i, o, a, f, d, c, p, g, y, x, m, _;
    for ((144 <= h.wo || 1 == h.rh && 30 < h.As) && Bcmx() && (0 == h.rh && 1 == h.$s && 1 == h.fa ? h.fa = 3 : 1 == h.$s && 2 != h.fa && 0 != h.fa || (h.da = 10 * Math.floor(h.da / 10),
    h.wo = 350,
    h.rh = 0)),
    n = 0; n < h.Zs; n++)
        if (h.Ke[n] && (h.ts[n].Tf(h),
        null != h.ts[n].s0.f[h.ts[n].xs]) && (400 == h.ts[n].s0.f[h.ts[n].xs].state && 0 == h.Wo && Y3W6(h, n, 1),
        401 == h.ts[n].s0.f[h.ts[n].xs].state && 0 == h.Wo && Y3W6(h, n, 2),
        500 == h.ts[n].s0.f[h.ts[n].xs].state && (-1 == h.ts[n].cs || -1 < h.ts[n].tu) && (h.ts[n].xs = 0),
        501 == h.ts[n].s0.f[h.ts[n].xs].state) && -1 < h.ts[n].cs)
            for (e = 0; e < T7ES._e; e++)
                if (T7ES.s0[e].id == h.ts[n].cs) {
                    for (h.ts[n].tu = h.ts[n].s0.id,
                    h.ts[n].s0 = T7ES.s0[e],
                    h.ts[n].xs = 0,
                    h.ts[n].iu = h.ts[n].eu = h.ts[n].xs,
                    t = 0; t < h.Zs; t++)
                        h.Ke[t] && h.ts[t].parent == n && 0 < h.ts[t].ls && (h.ts[t].s0 = h.ts[n].s0,
                        h.ts[t].y < 0 ? h.ts[t].xs = 212 : h.ts[t].xs = 0,
                        h.ts[t].iu = h.ts[t].eu = h.ts[t].xs);
                    break
                }
    for (n = 0; n < h.Zs; n++)
        if (h.Ke[n]) {
            if (h.ts[n].Vf(h),
            null == h.ts[n].s0.f[h.ts[n].xs])
                continue;
            if (9998 == h.ts[n].s0.f[h.ts[n].xs].state && (h.Ke[n] = !1),
            14 == h.ts[n].s0.f[h.ts[n].xs].state && h.ts[n].ls <= 0 && (0 <= h.ts[n].parent || 5 == h.ts[n].group || 20 <= n) && 0 < h.ts[n].ds && h.ts[n].ds < 5)
                if (0 < h.ts[n].join) {
                    for (h.ts[n].ll = h.ts[n].nf,
                    h.ts[n].os = 0,
                    h.ts[n].ls = h.ts[n].rs = h.ts[n].ns = h.ts[n].join,
                    h.ts[n].join = 0,
                    h.ts[n].nf = 0,
                    h.ts[n].group = 1,
                    36 != h.ts[n].s0.id && 35 != h.ts[n].s0.id && 34 != h.ts[n].s0.id && 33 != h.ts[n].s0.id && 32 != h.ts[n].s0.id && 31 != h.ts[n].s0.id && 30 != h.ts[n].s0.id || (h.ts[n].Io = 140),
                    37 == h.ts[n].s0.id && (h.ts[n].Io = 84),
                    h.ts[n].xs = 219,
                    h.ts[n].waiting = 0,
                    h.ts[n].Cu = 10,
                    r = -1,
                    e = 50; e < h.Zs; e++)
                        if (!h.Ke[e]) {
                            r = e;
                            break
                        }
                    if ((s = -1) != r)
                        for (e = 0; e < T7ES._e; e++)
                            if (998 == T7ES.s0[e].id) {
                                s = e;
                                break
                            }
                    -1 != r && -1 != s && (h.ts[r].hs(T7ES.s0[s], 580, -200, 300),
                    h.ts[r].x = h.ts[n].x,
                    h.ts[r].y = h.ts[n].y,
                    h.ts[r].z = h.ts[n].z + 1,
                    h.ts[r].group = h.ts[n].group,
                    h.ts[r].fs = h.ts[n].fs,
                    h.ts[r].ps = h.ts[n].ps,
                    h.ts[r].gs = h.ts[n].gs,
                    h.ts[r].xs = 6,
                    h.ts[r].Gs = 0,
                    h.ts[r].Os = 0,
                    h.ts[r].zs = 0,
                    h.ts[r].Ws = 0,
                    h.Ke[r] = !0)
                } else if (h.ts[n].ll < 2)
                    h.Ke[n] = !1;
                else {
                    h.ts[n].ll--;
                    let t = 0
                      , s = 0;
                    for (y = 0,
                    r = 0; r < h.Zs; r++)
                        h.Ke[r] && n != r && 0 == h.ts[r].s0.type && h.ts[r].group == h.ts[n].group && (s += h.ts[r].x,
                        y += h.ts[r].z,
                        t++);
                    s = Math.floor(s / t),
                    y = Math.floor(y / t),
                    h.ts[n].fs = s + h.ye(144, 51) - 26,
                    h.ts[n].gs = y + h.ye(145, 31) - 16,
                    h.ts[n].os = 500,
                    h.ts[n].ls = h.ts[n].rs = h.ts[n].ns,
                    h.ts[n].ds = 20,
                    h.ts[n].xs = 212,
                    h.ts[n].y = -300,
                    h.ts[n].ps = h.ts[n].y,
                    h.ts[n].Os = 0
                }
            if (-1 < h.ts[n].tu && 3 == h.ts[n].Ch && 0 == h.ts[n].y && 0 < h.ts[n].ls)
                for (h.ts[n].Ch = 0,
                e = 0; e < T7ES._e; e++)
                    if (T7ES.s0[e].id == h.ts[n].tu) {
                        for (h.ts[n].s0 = T7ES.s0[e],
                        h.ts[n].xs = 245,
                        h.ts[n].iu = h.ts[n].eu = h.ts[n].xs,
                        h.ts[n].tu = -1,
                        o = 0; o < h.Zs; o++)
                            h.Ke[o] && h.ts[o].parent == n && 0 < h.ts[o].ls && 2 < h.ts[o].ns && (h.ts[o].s0 = T7ES.s0[e],
                            h.ts[o].y < 0 ? h.ts[o].xs = 212 : h.ts[o].xs = 0,
                            h.ts[o].iu = h.ts[o].eu = h.ts[o].xs);
                        break
                    }
        }
    for (EAyD(h),
    2 < h.As && Gdhm(h),
    h._c = 0,
    n = 0; n < h.Zs; n++)
        h.Ke[n] && (1 != h.ts[n].s0.type && 2 != h.ts[n].s0.type && 4 != h.ts[n].s0.type && 6 != h.ts[n].s0.type || h._c++,
        0 == h.ts[n].s0.type) && IgUc(h, n);
    if (h._c < 4 && (0 != h.$s || h.Xe) && (2 != h.$s || h.Xe) && (3 != h.$s || h.Xe) && 0 == h.ye(146, 200)) {
        for (r = -1,
        e = 50; e < h.Zs; e++)
            if (!h.Ke[e]) {
                r = e;
                break
            }
        if (-1 != r) {
            for (h.Wc = 0,
            d = 0; d < T7ES._e; d++)
                if (100 <= T7ES.s0[d].id && T7ES.s0[d].id < 200) {
                    if (!(122 != T7ES.s0[d].id && 123 != T7ES.s0[d].id || 0 != h.ye(147, 2) && 2 != h.$s && 3 != h.$s && 1 != h.$s && 4 != h.$s))
                        continue;
                    h.Zc[h.Wc] = d,
                    h.Wc++
                }
            for (t = h.Ce,
            l = 0 == h.bh ? Math.floor((T7ES.Ae[t].w - 60) / 30) * h.ye(148, 30) + h.ye(149, 30) + 30 : Math.floor((h.bh - 60) / 30) * h.ye(150, 30) + h.ye(151, 30) + 30,
            i = Math.floor((T7ES.Ae[t]._s - T7ES.Ae[t].us - 60) / 30) * h.ye(152, 30) + h.ye(153, 30) + T7ES.Ae[t].us + 30,
            h.ts[r].hs(T7ES.s0[h.Zc[h.ye(154, h.Wc)]], l, -500, i),
            h.Ke[r] = !0,
            d = 0; d < h.Zs; d++)
                h.Ke[d] && (h.ts[d].$u[r] = 0);
            h.ts[r].Gs = 0,
            h.ts[r].Os = 0,
            h.ts[r].zs = 0,
            122 == h.ts[r].s0.id && (h.ts[r].ls = 200),
            h.ts[r].x = Math.floor(h.ts[r].fs),
            h.ts[r].y = Math.floor(h.ts[r].ps),
            h.ts[r].z = Math.floor(h.ts[r].gs),
            h.ts[r].Ss = 99
        }
    }
    for (n = 0; n < h.Zs; n++)
        h.Ke[n] && 0 < h.ts[n].s0.type && IgUc(h, n);
    for (ALJM(h),
    Rqv3(h),
    n = 0; n < h.Zs; n++)
        h.Ke[n] && 0 < h.ts[n].Eh && (h.ts[n].Mh < 0 || h.ts[n].Mh >= h.Zs || !h.Ke[h.ts[n].Mh] || h.ts[h.ts[n].Mh].Iu != n) && (h.ts[n].Eh = 0);
    for (EAyD(h),
    Sh7E.Fo ? (Sh7E.Vl += Sh7E.yl,
    Sh7E.Ml = 1,
    J6av(h, !0),
    MMsl(h),
    Sh7E.Vl -= Sh7E.yl,
    Sh7E.Vl += Sh7E.wl,
    Sh7E.Ml = 0,
    J6av(h, !1),
    MMsl(h),
    Sh7E.Vl -= Sh7E.wl) : (J6av(h, !(Sh7E.Ml = 0)),
    MMsl(h),
    1 < gB75h && D.ZyDD(0, 128 - gB75h, GLOBAL_ZOOM_WIDTH, gB75h, 0)),
    1 == h.$s && Ma37(h),
    4 == h.$s && QBes(h),
    CvPa(h),
    n = 0; n < h.Zs; n++)
        if (h.Ke[n] && null != h.ts[n].s0.f[h.ts[n].xs]) {
            if (0 == h.ts[n].s0.type && 9995 == h.ts[n].s0.f[h.ts[n].xs].state) {
                for (e = 0; e < T7ES._e; e++)
                    if (50 == T7ES.s0[e].id) {
                        h.ts[n].s0 = T7ES.s0[e];
                        break
                    }
                h.ts[n].xs = 0,
                h.ts[n].iu = h.ts[n].eu = h.ts[n].xs
            }
            if (8e3 <= h.ts[n].s0.f[h.ts[n].xs].state && h.ts[n].s0.f[h.ts[n].xs].state < 9e3) {
                for (h.Oc = h.ts[n].s0.f[h.ts[n].xs].state - 8e3,
                e = 0; e < T7ES._e; e++)
                    if (T7ES.s0[e].id == h.Oc) {
                        h.ts[n].s0 = T7ES.s0[e];
                        break
                    }
                h.ts[n].xs = 0,
                h.ts[n].iu = h.ts[n].eu = h.ts[n].xs,
                37 == h.Oc ? h.ts[n].Io = 84 : h.ts[n].Io = 140
            }
            if (0 == h.ts[n].s0.type && 9996 == h.ts[n].s0.f[h.ts[n].xs].state && 1 == h.ts[n].waiting)
                for (i = 0; i < 5; i++) {
                    for (e = h.Zs,
                    r = -1,
                    e = 50; e < h.Zs; e++)
                        if (!h.Ke[e]) {
                            r = e;
                            break
                        }
                    if (-1 == r)
                        break;
                    if (e == h.Zs)
                        break;
                    for (h.zc = 217,
                    4 == i && (h.zc = 218),
                    e = 0; e < T7ES._e; e++)
                        if (T7ES.s0[e].id == h.zc) {
                            s = e;
                            break
                        }
                    h.ts[r].hs(T7ES.s0[s], 580, -200, 300),
                    h.Ke[r] = !0,
                    h.ts[r].x = h.ts[n].x + (h.ye(155, 7) - 3),
                    h.ts[r].y = h.ts[n].y + (h.ye(156, 7) - 3) - 6,
                    h.ts[r].z = h.ts[n].z + 1,
                    h.ts[r].gs = h.ts[r].z,
                    h.ts[r].ps = h.ts[r].y,
                    h.ts[r].fs = h.ts[r].x,
                    h.ts[r].Os = -h.ye(157, 15) / 2 - 5,
                    h.ts[r].Ku = 6,
                    0 == i || 2 == i ? h.ts[r].zs = 3 + h.ye(158, 2) : 1 == i || 3 == i ? h.ts[r].zs = -3 - h.ye(159, 2) : h.ts[r].zs = 1,
                    i < 2 ? h.ts[r].Gs = -10 - h.ye(160, 3) : i < 4 ? h.ts[r].Gs = 10 + h.ye(161, 3) : h.ts[r].Gs = h.ye(162, 7) - 3,
                    h.ts[r].xs = h.ye(164, 4),
                    h.ts[r].Ws = h.ye(165, 2)
                }
            if (0 == h.ts[n].s0.type && (0 < h.ts[n].ls && h.ts[n].ls < h.ts[n].rs && 0 == h.Zl && h.ts[n].ls++,
            h.ts[n].lf < 0 && 0 == h.Zl && 0 == h.wo && (d = 9,
            0 < h.ts[n].yo && (d = Math.floor(100 * d / h.ts[n].yo)),
            h.ts[n].ls -= d,
            h.ts[n].rs -= Math.floor(d / 3),
            h.ts[n].ls < 0 && (h.ts[n].ls = 0),
            h.ts[n].rs < 0 && (h.ts[n].rs = 0),
            h.ts[n].df += 9),
            -1 == h.ts[n].parent || h.ts[n].os < 150) && h.ts[n].os < 500 && 0 == h.Jl && 0 <= h.ts[n].ds && (500 < (d = h.ts[n].ls) && (d = 500),
            51 != h.ts[n].s0.id && 52 != h.ts[n].s0.id || (d = Math.floor(d / 2)),
            h.ts[n].os += 1 + Math.floor((500 - d) / 100)),
            h.ts[n].Df(h, n),
            11 == Math.floor(h.ts[n].xs / 100) || 12 == Math.floor(h.ts[n].xs / 100)) {
                for (d = 0; d < h.Zs; d++)
                    h.Ke[d] && h.ts[d].parent == n && (h.ts[d].ds = 1100 - h.ts[n].xs);
                h.ts[n].ds = 1100 - h.ts[n].xs,
                h.ts[n].xs = 0;
                continue
            }
            if (h.ts[n].xs < 0 || h.ts[n].xs >= TIJj.Qr)
                h.ts[n].xs = 0,
                h.Ke[n] = !1;
            else {
                if (0 == h.ts[n].s0.type && h.ts[n].ls <= 0 && (h.ts[n].xs < 12 || 110 == h.ts[n].xs || 111 == h.ts[n].xs) && (h.ts[n].xs = 186,
                h.ts[n].yu = h.ts[n].Os = -3,
                h.ts[n].ps = -1,
                h.ts[n].y = -1),
                0 == h.ts[n].s0.type && 0 == h.ts[n].y && 0 == h.ts[n].ps && 0 == h.ts[n].Os && 0 == h.ts[n].yu && (180 <= h.ts[n].xs && h.ts[n].xs <= 189 && 184 != h.ts[n].xs || 212 <= h.ts[n].xs && h.ts[n].xs <= 214) && (h.ts[n].xs = 186,
                h.ts[n].yu = h.ts[n].Os = -3,
                h.ts[n].ps = -1,
                h.ts[n].y = -1),
                null != (x = null != h.ts[n].s0.f[h.ts[n].xs] ? h.ts[n].s0.f[h.ts[n].xs].jn : null) && 0 < x.kind && 0 < x.pn && 0 == h.ts[n].waiting && (0 == h.ts[n].Cu || 0 != h.ts[n].s0.type)) {
                    for (m = 1,
                    10 < x.Ws && (m = Math.floor(x.Ws / 10)),
                    _ = 0,
                    d = 0; d < m; d++) {
                        for (e = 399,
                        r = -1,
                        s = -1,
                        e = 50; e < h.Zs; e++)
                            if (!h.Ke[e]) {
                                r = e;
                                break
                            }
                        for (e = 0; e < T7ES._e; e++)
                            if (T7ES.s0[e].id == x.pn) {
                                s = e;
                                break
                            }
                        if (-1 == r || -1 == s)
                            break;
                        for (h.pn[_] = r,
                        _++,
                        h.ts[r].hs(T7ES.s0[s], 580, -200, 300),
                        h.ts[r].Ss = h.ts[n].Ss,
                        o = 0; o < h.Zs; o++)
                            h.Ke[o] && (h.ts[o].$u[r] = 0);
                        h.Ke[r] = !0,
                        p = 0 == h.ts[n].Ws ? h.ts[n].x - h.ts[n].s0.f[h.ts[n].xs].Hn + x.x : h.ts[n].x + h.ts[n].s0.f[h.ts[n].xs].Hn - x.x,
                        g = h.ts[n].y - h.ts[n].s0.f[h.ts[n].xs].Qn + x.y,
                        h.ts[r].x = p,
                        h.ts[r].y = g,
                        h.ts[r].group = h.ts[n].group,
                        h.ts[r].gs = h.ts[n].gs + 1,
                        h.ts[r].ps = h.ts[r].y,
                        h.ts[r].xs = x.action,
                        h.ts[r].Os = x.sn,
                        h.ts[r].zs = 0,
                        3e3 != h.ts[r].s0.f[h.ts[r].xs].state && 1002 != h.ts[r].s0.f[h.ts[r].xs].state && 3006 != h.ts[r].s0.f[h.ts[r].xs].state || 223 == h.ts[r].s0.id || 224 == h.ts[r].s0.id || (0 < h.ts[n].de && 0 == h.ts[n].R0 ? h.ts[r].zs = -2.5 : 0 == h.ts[n].de && 0 < h.ts[n].R0 && (h.ts[r].zs = 2.5),
                        211 == h.ts[r].s0.id && (h.ts[r].zs /= 4)),
                        0 == h.ts[r].s0.type && (-1 < h.ts[n].parent ? h.ts[r].parent = h.ts[n].parent : h.ts[r].parent = n,
                        h.ts[r].ds = h.ts[n].ds),
                        x.Ws % 10 == 0 ? h.ts[r].Ws = h.ts[n].Ws : x.Ws % 10 == 1 ? h.ts[r].Ws = 1 - h.ts[n].Ws : h.ts[r].Ws = 0,
                        0 == h.ts[r].Ws ? h.ts[r].Gs = x.en : h.ts[r].Gs = -x.en,
                        h.ts[r].fs = h.ts[r].x,
                        1 < m && (f = 10 * d / (m - 1) - 5,
                        h.ts[r].zs += f,
                        (0 < h.ts[r].Gs && 0 < f || h.ts[r].Gs < 0 && f < 0) && (f = -f),
                        h.ts[r].Gs += f),
                        3 == h.ts[n].s0.type && 3003 == h.ts[n].s0.f[h.ts[n].xs].state && (h.ts[h.ts[n].pu].$u[r] = 10,
                        h.ts[r].$u[h.ts[n].pu] = 10),
                        5 != h.ts[r].s0.id && 52 != h.ts[r].s0.id || (h.ts[r].ls = 10,
                        h.ts[r].ns = 10,
                        52 == h.ts[r].s0.id && (h.ts[r].ns = 2),
                        h.ts[r].rs = 10,
                        h.ts[r].os = 5),
                        h.ts[r].x = Math.floor(h.ts[r].fs),
                        h.ts[r].y = Math.floor(h.ts[r].ps),
                        h.ts[r].z = Math.floor(h.ts[r].gs),
                        2 == x.kind && (h.ts[n].Eh = 1,
                        h.ts[r].Eh = -1,
                        h.ts[n].Mh = r,
                        h.ts[r].Iu = n,
                        h.ts[r].group = h.ts[n].group)
                    }
                    if (1 < _)
                        for (s = 0; s < _; s++)
                            for (1 < _ && _ % 2 == 0 ? s < Math.floor(_) / 2 - 1 ? h.ts[h.pn[s]].Ku = 2 * -(s - (Math.floor(_ / 2) - 1)) : s > Math.floor(_ / 2) && (h.ts[h.pn[s]].Ku = 2 * (s - Math.floor(_ / 2))) : 1 < _ && _ % 2 == 1 && (s < Math.floor(_ / 2) ? h.ts[h.pn[s]].Ku = 2 * -(s - Math.floor(_ / 2)) : Math.floor(s > _ / 2) && (h.ts[h.pn[s]].Ku = 2 * (s - Math.floor(_ / 2)))),
                            r = 0; r < s; r++)
                                h.ts[h.pn[s]].$u[h.pn[r]] = 40,
                                h.ts[h.pn[r]].$u[h.pn[s]] = 40
                } else if ((1 == h.ts[n].s0.type || 2 == h.ts[n].s0.type || 4 == h.ts[n].s0.type || 6 == h.ts[n].s0.type) && h.ts[n].rf < 0) {
                    let t = h.ts[n].rf = 0;
                    for (101 != h.ts[n].s0.id && 218 != h.ts[n].s0.id || (t = 7),
                    100 != h.ts[n].s0.id && 213 != h.ts[n].s0.id && 217 != h.ts[n].s0.id || (t = 5),
                    201 == h.ts[n].s0.id && (t = 3),
                    150 == h.ts[n].s0.id && (t = 13),
                    151 == h.ts[n].s0.id && (t = 15),
                    120 != h.ts[n].s0.id && 124 != h.ts[n].s0.id || (t = 3),
                    121 == h.ts[n].s0.id && (t = 4),
                    122 != h.ts[n].s0.id && 123 != h.ts[n].s0.id || (t = 9),
                    -1 < h.ts[n].s0.Nr && PCo6(h, h.ts[n].x, h.ts[n].s0.Nr),
                    o = 0; o < t; o++) {
                        for (e = h.Zs,
                        r = -1,
                        e = 50; e < h.Zs; e++)
                            if (!h.Ke[e]) {
                                r = e;
                                break
                            }
                        if (-1 == r)
                            break;
                        if (e == h.Zs)
                            break;
                        for (e = 0; e < T7ES._e; e++)
                            if (999 == T7ES.s0[e].id) {
                                s = e;
                                break
                            }
                        h.ts[r].hs(T7ES.s0[s], 580, -200, 300),
                        h.Ke[r] = !0,
                        h.ts[r].x = h.ts[n].x + (h.ye(166, 7) - 3),
                        h.ts[r].y = h.ts[n].y + (h.ye(167, 7) - 3),
                        h.ts[r].z = h.ts[n].z,
                        h.ts[r].gs = h.ts[r].z,
                        h.ts[r].ps = h.ts[r].y,
                        h.ts[r].fs = h.ts[r].x,
                        150 != h.ts[n].s0.id && 151 != h.ts[n].s0.id && 213 != h.ts[n].s0.id || (h.ts[r].Os = -h.ye(168, 20) / 2 - 8),
                        100 != h.ts[n].s0.id && 201 != h.ts[n].s0.id && 101 != h.ts[n].s0.id && 120 != h.ts[n].s0.id && 121 != h.ts[n].s0.id && 122 != h.ts[n].s0.id && 123 != h.ts[n].s0.id && 124 != h.ts[n].s0.id && 217 != h.ts[n].s0.id && 218 != h.ts[n].s0.id || (h.ts[r].Os = -h.ye(169, 8) / 2 - 6),
                        h.ts[r].Gs = h.ye(170, 11) - 5,
                        150 == h.ts[n].s0.id && (o < 5 ? h.ts[r].xs = h.ye(171, 4) : h.ts[r].xs = 4 + h.ye(172, 4)),
                        100 == h.ts[n].s0.id && (o < 2 ? h.ts[r].xs = 10 + h.ye(173, 4) : h.ts[r].xs = 14 + h.ye(174, 4)),
                        213 == h.ts[n].s0.id && (o < 2 ? h.ts[r].xs = 150 + h.ye(175, 4) : h.ts[r].xs = 154 + h.ye(176, 4)),
                        101 == h.ts[n].s0.id && (o < 5 ? h.ts[r].xs = 20 + 4 * h.ye(177, 2) + h.ye(178, 4) : h.ts[r].xs = 30 + h.ye(179, 4)),
                        151 == h.ts[n].s0.id && (o < 2 ? h.ts[r].xs = 40 + h.ye(180, 4) : o < 5 ? h.ts[r].xs = 44 + h.ye(181, 4) : o < 8 ? h.ts[r].xs = 50 + h.ye(182, 4) : h.ts[r].xs = 54 + h.ye(183, 4)),
                        120 == h.ts[n].s0.id && (o < 2 ? h.ts[r].xs = 54 + h.ye(184, 4) : o < 5 && (h.ts[r].xs = 30 + h.ye(185, 4))),
                        124 == h.ts[n].s0.id && (h.ts[r].xs = 170 + h.ye(186, 4)),
                        121 == h.ts[n].s0.id && (h.ts[r].xs = 60 + h.ye(187, 4)),
                        122 == h.ts[n].s0.id && (o < 1 ? h.ts[r].xs = 70 + h.ye(188, 4) : o < 3 ? h.ts[r].xs = 80 + h.ye(189, 4) : (h.ts[r].xs = 74 + h.ye(190, 4),
                        h.ts[r].Os = -h.ye(191, 18) / 2 - 4)),
                        123 == h.ts[n].s0.id && (o < 1 ? h.ts[r].xs = 160 + h.ye(192, 4) : o < 3 ? h.ts[r].xs = 164 + h.ye(193, 4) : (h.ts[r].xs = 74 + h.ye(194, 4),
                        h.ts[r].Os = -h.ye(195, 18) / 2 - 4)),
                        217 != h.ts[n].s0.id && 218 != h.ts[n].s0.id || (h.ts[r].xs = 174 + h.ye(196, 4))
                    }
                    h.Ke[n] = !1
                } else if (n < 10 && 0 < h.ts[n].ls && 0 == h.ts[n].s0.type) {
                    let t = 0;
                    if (9 == h.ts[n].Ef[1] && 0 == h.ts[n].Ef[2] && 9 == h.ts[n].Ef[3] && 0 == h.ts[n].Ef[4] && (t = 100),
                    9 == h.ts[n].Ef[1] && 9 == h.ts[n].Ef[2] && 9 == h.ts[n].Ef[3] && 9 == h.ts[n].Ef[4] && (t = 102),
                    0 < (t = 9 == h.ts[n].Ef[1] && 5 == h.ts[n].Ef[2] && 9 == h.ts[n].Ef[3] && 5 == h.ts[n].Ef[4] ? 104 : t)) {
                        for (h.ts[n].Ef[0] = 0,
                        h.ts[n].Ef[1] = 0,
                        h.ts[n].Ef[2] = 0,
                        h.ts[n].Ef[3] = 0,
                        h.ts[n].Ef[4] = 0,
                        e = h.Zs,
                        r = -1,
                        s = -1,
                        e = 50; e < h.Zs; e++)
                            if (!h.Ke[e]) {
                                r = e;
                                break
                            }
                        for (e = 0; e < T7ES._e; e++)
                            if (998 == T7ES.s0[e].id) {
                                s = e;
                                break
                            }
                        if (-1 != r && -1 != s)
                            for (h.ts[r].hs(T7ES.s0[s], 580, -200, 300),
                            h.Ke[r] = !0,
                            h.ts[r].x = h.ts[n].x,
                            h.ts[r].y = 0,
                            h.ts[r].z = h.ts[n].z,
                            h.ts[r].xs = t - 100,
                            h.ts[r].gs = h.ts[r].z,
                            h.ts[r].ps = h.ts[r].y,
                            h.ts[r].fs = h.ts[r].x,
                            h.ts[r].Gs = 0,
                            h.ts[r].Os = 0,
                            o = 0; o < h.Zs; o++)
                                h.Ke[o] && 0 < h.ts[o].ls && 0 == h.ts[o].s0.type && h.ts[o].group == h.ts[n].group && (100 == t ? (h.ts[o].dh = h.ts[r].x + h.ye(197, 81) - 40,
                                h.ts[o]._h = h.ts[r].z + h.ye(198, 81) - 40) : 102 == t ? h.ts[o].Fh = 1 : 104 == t && (h.ts[o].Fh = 0))
                    }
                }
                if ((13 == h.ts[n].s0.f[h.ts[n].eu].state || 200 == h.ts[n].eu) && 13 != h.ts[n].s0.f[h.ts[n].xs].state && 200 != h.ts[n].xs) {
                    for (PCo6(h, h.ts[n].x, 15),
                    e = h.Zs,
                    s = -1,
                    e = 0; e < T7ES._e; e++)
                        if (999 == T7ES.s0[e].id) {
                            s = e;
                            break
                        }
                    if (-1 < s)
                        for (o = 0; o < 15; o++) {
                            for (r = -1,
                            e = 50; e < h.Zs; e++)
                                if (!h.Ke[e]) {
                                    r = e;
                                    break
                                }
                            if (-1 == r)
                                break;
                            if (e == h.Zs)
                                break;
                            h.ts[r].hs(T7ES.s0[s], 580, -200, 300),
                            h.Ke[r] = !0,
                            h.ts[r].x = h.ts[n].x,
                            h.ts[r].y = h.ts[n].y,
                            h.ts[r].z = h.ts[n].z,
                            h.ts[r].gs = h.ts[n].gs,
                            h.ts[r].ps = h.ts[n].ps + -h.ye(199, 29),
                            h.ts[r].fs = h.ts[n].fs + (h.ye(200, 39) - 19),
                            h.ts[r].Os = -h.ye(201, 20) / 2 - 8,
                            h.ts[r].Gs = h.ye(202, 11) - 5 + h.ts[n].Mu / 2,
                            o < 2 ? h.ts[r].xs = 120 : o < 5 ? h.ts[r].xs = 130 : o < 9 ? h.ts[r].xs = 125 : o < 15 && (h.ts[r].xs = 135)
                        }
                }
                if (18 == h.ts[n].s0.f[h.ts[n].eu].state || 19 == h.ts[n].s0.f[h.ts[n].eu].state)
                    for (a = 0,
                    18 != h.ts[n].s0.f[h.ts[n].xs].state && 19 != h.ts[n].s0.f[h.ts[n].xs].state ? a = 7 : 0 == h.ye(203, 4) && (a = 1),
                    o = 0; o < a; o++) {
                        for (e = h.Zs,
                        r = -1,
                        e = 50; e < h.Zs; e++)
                            if (!h.Ke[e]) {
                                r = e;
                                break
                            }
                        if (-1 == r)
                            break;
                        if (e == h.Zs)
                            break;
                        for (e = 0; e < T7ES._e; e++)
                            if (999 == T7ES.s0[e].id) {
                                s = e;
                                break
                            }
                        h.ts[r].hs(T7ES.s0[s], 580, -200, 300),
                        h.Ke[r] = !0,
                        h.ts[r].x = h.ts[n].x,
                        h.ts[r].y = h.ts[n].y,
                        h.ts[r].z = h.ts[n].z,
                        h.ts[r].gs = h.ts[n].gs,
                        h.ts[r].ps = h.ts[n].ps + -h.ye(204, 29),
                        h.ts[r].fs = h.ts[n].fs + (h.ye(205, 59) - 29),
                        h.ts[r].Os = -1,
                        h.ts[r].Gs = h.ye(206, 11) - 5 + h.ts[n].Gs,
                        h.ts[r].xs = 140 + h.ye(207, 1)
                    }
                h.ts[n].eu = h.ts[n].xs
            }
        }
    if (1 == h.Nl) {
        for (h.Wc = 0,
        d = 0; d < T7ES._e; d++)
            if (100 <= T7ES.s0[d].id && T7ES.s0[d].id < 200) {
                if (122 == T7ES.s0[d].id && 0 == h.ye(208, 2))
                    continue;
                h.Zc[h.Wc] = d,
                h.Wc++
            }
        for (o = 0; o < h.Wc; o++) {
            for (r = -1,
            e = 50; e < h.Zs; e++)
                if (!h.Ke[e]) {
                    r = e;
                    break
                }
            if (-1 == r)
                break;
            for (t = h.Ce,
            l = Math.floor((T7ES.Ae[t].w - 60) / 30) * h.ye(209, 30) + h.ye(210, 30) + 30,
            i = Math.floor((T7ES.Ae[t]._s - T7ES.Ae[t].us - 60) / 30) * h.ye(211, 30) + h.ye(212, 30) + T7ES.Ae[t].us + 30,
            h.ts[r].hs(T7ES.s0[h.Zc[o]], l, -500, i),
            h.Ke[r] = !0,
            d = 0; d < h.Zs; d++)
                h.Ke[d] && (h.ts[d].$u[r] = 0);
            h.ts[r].Gs = 0,
            h.ts[r].Os = 0,
            h.ts[r].zs = 0,
            122 == h.ts[r].s0.id && (h.ts[r].ls = 200),
            h.ts[r].x = Math.floor(h.ts[r].fs),
            h.ts[r].y = Math.floor(h.ts[r].ps),
            h.ts[r].z = Math.floor(h.ts[r].gs)
        }
    }
    for (n = 0; n < h.Zs; n++)
        h.Ke[n] && (2 == h.Nl && 0 == h.ts[n].Eh && (1 == h.ts[n].s0.type || 2 == h.ts[n].s0.type || 4 == h.ts[n].s0.type || 6 == h.ts[n].s0.type ? h.ts[n].rf = -1 : 1 == h.$s && 5 == h.ts[n].group && 0 == h.ts[n].s0.type && 300 != h.ts[n].s0.id && (h.ts[n].ls = 0,
        h.ts[n].os = 0)),
        3 == h.Nl && 5 == h.ts[n].group && 0 == h.ts[n].s0.type && 300 != h.ts[n].s0.id && (h.ts[n].ls = 0,
        h.ts[n].os = 0),
        1 == h.xl && (1 != h.$s || n < 20 && 1 == h.ts[n].group) && (h.ts[n].ns < 500 && (h.ts[n].ns = 500),
        h.ts[n].ls = h.ts[n].rs = h.ts[n].ns,
        h.ts[n].os = 500,
        XYSz.Zf()),
        1 == Math.floor(h.ts[n].Pu / 1e3) && 0 < h.ts[n].ls && (h.ts[n].Pu--,
        h.ts[n].Pu % 8 == 0 && (h.ts[n].ls < h.ts[n].rs ? h.ts[n].ls < h.ts[n].rs - 8 ? h.ts[n].ls += 8 : h.ts[n].ls = h.ts[n].rs : h.ts[n].Pu = 0),
        h.ts[n].Pu % 1e3 == 0) && (h.ts[n].Pu = 0),
        0 < h.ts[n].Ks && 0 < h.ts[n].ls && (h.ts[n].Ks--,
        h.ts[n].Ks % 8 == 0) && h.ts[n].ls < h.ts[n].rs && (h.ts[n].ls += 8,
        h.ts[n].ls > h.ts[n].rs) && (h.ts[n].ls = h.ts[n].rs,
        h.ts[n].Ks = 0),
        null != h.ts[n].s0.f[h.ts[n].xs] && 1700 == h.ts[n].s0.f[h.ts[n].xs].state && (h.ts[n].Pu = 1100),
        h.Ke[n]) && h.ts[n].yf();
    if (h.xl = 0,
    h.Nl = 0,
    DH8U(h),
    1 == h.rh ? (D.VLeA("Press ESC or Attack to exit", 5, 531 + (19 - JXAJ) / 2, "OkQn", "#FFFFFF"),
    D.Dm9f(BLg_.V1, 360 + (ZcYj - 794) / 2, 288, 0, 1 / BLg_.ie)) : 1 == h.Vs && 0 == h.$s ? FouV.g.Wa || (h.Nd = "Function Keys Used:&nbsp;&nbsp;&nbsp;&nbsp;F6: " + h.Ms + " time(s)&nbsp;&nbsp;&nbsp;&nbsp;F7: " + h.ys + " time(s)&nbsp;&nbsp;&nbsp;&nbsp;F8: " + h.ws + " time(s)&nbsp;&nbsp;&nbsp;&nbsp;F9: " + h.Ds + " time(s)",
    D.VLeA(h.Nd, 5, 531 + (19 - JXAJ) / 2, "OkQn", "#FFFFFF")) : 2 == h.Vs && 0 == h.$s && D.VLeA("Function Keys Locked", 5, 531 + (19 - JXAJ) / 2, "OkQn", "#FFFFFF"),
    h.wo < 1 && 0 == h.pause && (h.As = h.As + 1),
    100 < h.wo && h.wo < 350) {
        if (101 == h.wo) {
            FouV.Yt = !1,
            FouV.Nt = !1;
            let s;
            for (let t = 0; t < 8; t++)
                (h.Ke[t] || h.Ke[t + 10]) && (s = -1,
                h.Ke[t] ? s = t : h.Ke[t + 10] && (s = t + 10),
                s < 10) && h.ts[s].za && 0 < h.ts[s].ls && (0 == h.$s ? (1e3 <= h.ts[s].cf && h.ve <= 1 && FouV.gi(atob("TU9ERV9WUzE=")),
                3e3 <= h.ts[s].cf && h.ve <= 0 && FouV.gi(atob("TU9ERV9WUzI="))) : 4 == h.$s ? (3e3 <= h.ts[s].cf && h.ve <= 1 && FouV.gi(atob("TU9ERV9CQVRUTEUx")),
                1e4 <= h.ts[s].cf && h.ve <= 0 && FouV.gi(atob("TU9ERV9CQVRUTEUy"))) : 2 == h.$s ? h.ts[s].ls >> 0 && h.ve <= 0 && (FouV.Yt = !0) : 3 == h.$s && h.ts[s].ls >> 0 && h.ve <= 0 && (FouV.Nt = !0))
        }
        ORUW_dragged || (ORUW.style.top = "3.9%");
        let t = 0, i, o, s, a;
        for (d = 45,
        t = 0,
        n = 0; n < 8; n++)
            (h.Ke[n] || h.Ke[n + 10]) && t++;
        for (s = 61 + d * t + 32,
        4 == h.$s && (s += d),
        o = (530 - s) / 2,
        i = 150 + (ZcYj - 794) / 2,
        D.Dm9f(BLg_.T1, i, o, 0, 1 / BLg_.ie),
        n = -1,
        i2 = 0; i2 < 8; i2++)
            if ((h.Ke[i2] || h.Ke[i2 + 10]) && (n++,
            D.KuNe(BLg_.I1, i, 61 + o + d * n - 2, 0, 1 / BLg_.ie, 1.09 / BLg_.ie),
            r = -1,
            h.Ke[i2] ? r = i2 : h.Ke[i2 + 10] && (r = i2 + 10),
            -1 < r)) {
                let s = 0
                  , e = 6;
                if (1 == h.ts[r].Eu.length && (e = 12),
                2 == h.ts[r].Eu.length && (e = 10),
                3 == h.ts[r].Eu.length && (e = 8),
                0 < h.ts[r].Eu.length) {
                    var S = h.ts[r].Eu.length;
                    s = -S * e / 2,
                    6 < S && (s = -6 * e / 2);
                    for (let t = 9 < S ? S - 9 : 0; t < S; t++) {
                        var E = h.ts[r].Eu[t];
                        D.Dm9f(E.Ee, 15 + i + s + E.Fe, 61 + o + d * n, 0, 1 / E.ti),
                        s += e
                    }
                }
                D.Dm9f(h.ts[r].s0.Ee, 15 + i + s + h.ts[r].s0.Fe, 61 + o + d * n, 0, 1 / h.ts[r].s0.ti),
                a = r < 10 ? h.vi[r] : "Com",
                l = 56 + i,
                u = 61 + o + d * n + 15,
                D.S6nY(a, 45 + i + 45, u - 15 + (45 - JXAJ) / 2, "KrcT", D.FYH9[1 <= h.ts[r].group && h.ts[r].group <= 4 ? h.ts[r].group : 0]),
                D.S6nY("" + h.ts[r].uf, 98 + i + 29, u - 15 + 10 + (24 - JXAJ) / 2, "Itbg", "#FFAAAA"),
                D.S6nY("" + h.ts[r].cf, 162 + i + 29, u - 15 + 10 + (24 - JXAJ) / 2, "Itbg", "#FFAAAA"),
                D.S6nY(`${h.ts[r].df}${0 < h.ts[r].gf ? `<span style="font-size:70%;">✟${h.ts[r].gf}</span>` : ""}
					`, 226 + i + 29, u - 15 + 10 + (24 - JXAJ) / 2, "Itbg", "#F0F0AA"),
                D.S6nY("" + h.ts[r]._f, 290 + i + 29, u - 15 + 10 + (24 - JXAJ) / 2, "Itbg", "#F0F0AA"),
                D.S6nY("" + h.ts[r].ff, 354 + i + 29, u - 15 + 10 + (24 - JXAJ) / 2, "Itbg", "#AAF5AA"),
                1 != h.$s ? 0 <= h.Xs && (h.Xs == h.ts[r].group ? 0 < h.ts[r].ls ? D.Dm9f(BLg_.X1, 421 + i, u, 0, 1 / BLg_.ie) : D.Dm9f(BLg_.v1, 421 + i, u, 0, 1 / BLg_.ie) : D.Dm9f(BLg_.Y1, 421 + i, u, 0, 1 / BLg_.ie)) : h.$l ? D.Dm9f(BLg_.Y1, 421 + i, u, 0, 1 / BLg_.ie) : 0 < h.ts[r].ls ? D.Dm9f(BLg_.X1, 421 + i, u, 0, 1 / BLg_.ie) : D.Dm9f(BLg_.v1, 421 + i, u, 0, 1 / BLg_.ie)
            }
        4 == h.$s ? (r = 61 + o + d * t,
        D.Dm9f(BLg_.A1, i, r, 0, 1 / BLg_.ie),
        D.Dm9f(BLg_.C1, i, r + d, 0, 1 / BLg_.ie),
        D.S6nY("" + h.jh[0], 85 + i + 29.5, r + 20 + (20 - JXAJ) / 2, "Itbg", "#AFAFFF"),
        D.S6nY("" + h.Kh[0], 165 + i + 29.5, r + 20 + (20 - JXAJ) / 2, "Itbg", "#AFAFFF"),
        D.S6nY("" + h.jh[1], 325 + i + 29.5, r + 20 + (20 - JXAJ) / 2, "Itbg", "#FFAAAA"),
        D.S6nY("" + h.Kh[1], 405 + i + 29.5, r + 20 + (20 - JXAJ) / 2, "Itbg", "#FFAAAA")) : D.Dm9f(BLg_.C1, i, 61 + o + d * t, 0, 1 / BLg_.ie),
        (c = Math.floor((h.As - 1) / SvvK)) < 0 && (c = 0),
        h.Nd = c < 3600 ? (Math.floor(c / 60) < 10 ? "0" + Math.floor(c / 60) : "" + Math.floor(c / 60)) + ":" + (c % 60 < 10 ? "0" + c % 60 : "" + c % 60) : Math.floor(c / 3600) + ":" + (Math.floor(c % 3600 / 60) < 10 ? "0" + Math.floor(c % 3600 / 60) : "" + Math.floor(c % 3600 / 60)) + ":" + (c % 3600 % 60 < 10 ? "0" + c % 3600 % 60 : "" + c % 3600 % 60),
        D.S6nY(h.Nd, 427 + i + 25, (4 == h.$s ? 61 + o + d * t + d + 4 : 61 + o + d * t + 4) + (20 - JXAJ) / 2, "Itbg", "#ffffff")
    }
    1 != h.rh && h.q_(),
    TzFr(h)
}
function T0tL(t, s) {
    var e = Math.random();
    PCo6(t, s, e < .2 ? 22 : e < .4 ? 23 : e < .6 ? 24 : e < .8 ? 25 : 26)
}
function T0tL_guard(t, s) {
    var e = Math.random();
    PCo6(t, s, e < .25 ? 18 : e < .5 ? 19 : e < .75 ? 20 : 21)
}
function T0tL_hard(t, s) {
    Math.random(),
    PCo6(t, s, 2),
    PCo6(t, s, 23)
}
function Q_F2(t, s) {
    var e = Math.random();
    PCo6(t, s, e < .333 ? 11 : e < .666 ? 28 : 29)
}
function PCo6(t, s, e, i=0) {
    0 == i && Sh7E.Fo && PCo6(t, s, e, 1),
    null != t.Ea && null != t.nc && (t.Md = (s - (t.Ea[i] + GLOBAL_ZOOM_WIDTH / 4)) / GLOBAL_ZOOM_WIDTH * 800,
    t.Md < 0 && (t.Md = -t.Md),
    t.Md < 200 ? t.Md = 100 : t.Md < 400 ? t.Md = (400 - t.Md) / 2 : t.Md = 0,
    t.yd = (s - (t.Ea[i] + .75 * GLOBAL_ZOOM_WIDTH)) / GLOBAL_ZOOM_WIDTH * 800,
    t.yd < 0 && (t.yd = -t.yd),
    t.yd < 200 ? t.yd = 100 : t.yd < 400 ? t.yd = (400 - t.yd) / 2 : t.yd = 0,
    0 == t.nc[e] && (t.lc[e] = 0,
    t.cc[e] = 0),
    t.nc[e] = 1,
    t.lc[e] += t.Md,
    t.cc[e] += t.yd)
}
function TzFr(t) {
    let s, e;
    for (s = 0; s < t.ac; s++)
        0 < t.nc[s] && (t.nc[s] = 0,
        100 < t.lc[s] + t.cc[s] ? t.wt = 100 : t.wt = t.lc[s] + t.cc[s],
        0 < t.wt) && (t.lc[s] > t.cc[s] ? (e = -1.5 * (t.lc[s] - t.cc[s]) / 100) < -1 && (e = -1) : 1 < (e = 1.5 * (t.cc[s] - t.lc[s]) / 100) && (e = 1),
        XYSz.Pf(s, t.wt / 100, e))
}
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
function GKR4(t) {
    let s;
    var e = new Array(20).fill(0);
    for (t.da++,
    t.ua = 70,
    t.fa = 0,
    t.qs = 0,
    t.ma = -1,
    t.Sa = -1,
    s = 0; s < t.ba; s++)
        t.Ea[s] = t.Fa[s] = 0;
    for (s = 0; s < t.Zs; s++)
        t.Ke[s] && 0 == t.ts[s].s0.type && (t.ts[s].x = 50 + t.ye(269, 30),
        t.ts[s].fs = t.ts[s].x,
        t.ts[s].rs += 100 + 50 * t.ve,
        t.ts[s].rs > t.ts[s].ns && (t.ts[s].rs = t.ts[s].ns),
        t.ts[s].ls = t.ts[s].rs,
        t.ts[s].os = 500,
        9 <= t.ts[s].xs && t.ts[s].xs <= 11 && (t.ts[s].xs = 0),
        16 <= t.ts[s].xs && t.ts[s].xs <= 18 && (t.ts[s].xs = 12),
        t.ts[s].z = t.ye(270, T7ES.Ae[t.Ce]._s - T7ES.Ae[t.Ce].us) + T7ES.Ae[t.Ce].us,
        t.ts[s].gs = t.ts[s].z);
    for (s = 0; s < t.Zs; s++)
        t.ts[s].dh = -1e3,
        t.ts[s]._h = -1e3;
    for (s = 20; s < t.Zs; s++)
        t.Ke[s] && 0 < t.ts[s].s0.type && 0 <= t.ts[s].Eh ? t.Ke[s] = !1 : 0 <= t.ts[s].parent && t.ts[s].parent < 20 && (e[t.ts[s].parent] < 2 ? e[t.ts[s].parent]++ : t.Ke[s] = !1)
}
function W_3r(t, s, e) {
    let i, o, a, h, n;
    for (h = 0,
    i = 20; i < t.Zs; i++)
        if (!t.Ke[i] && 0 == t.Yd[i]) {
            if (o = s.id,
            a = s.ls,
            -1 == t.ve && 300 != o && (a = Math.floor(15 * a / 10)),
            2 == t.ve && 300 != o && (a = Math.floor(75 * a / 100)),
            1e3 == o) {
                if (10 == t.Xd || -1 == t.Xd) {
                    var r, l, u;
                    for (n = 0; n < 50; n++)
                        r = t.ye(271, 10),
                        l = t.ye(272, 10),
                        u = t.vd[r],
                        t.vd[r] = t.vd[l],
                        t.vd[l] = u;
                    t.Xd = 0
                }
                o = t.vd[t.Xd],
                t.Xd++
            } else
                3e3 == o ? o = t.ye(273, 2) + 30 : 3001 == o && (0 == t.ye(274, 7) ? (o = 32,
                a *= 4) : o = t.ye(275, 2) + 30);
            for (n = 0; n < T7ES._e; n++)
                if (T7ES.s0[n].id == o) {
                    s.Wf[e] = i,
                    t.Ke[i] = !0,
                    t.ts[i].hs(T7ES.s0[n], 350, 0, 300),
                    t.ts[i].z = t.ye(276, T7ES.Ae[t.Ce]._s - T7ES.Ae[t.Ce].us) + T7ES.Ae[t.Ce].us,
                    -1e3 != s.x ? t.ts[i].x = s.x + t.ye(277, 300) : 0 == t.ye(278, 2) ? t.ts[i].x = t.bh + 150 + t.ye(279, 300) : t.ts[i].x = -150 - t.ye(280, 300),
                    t.ts[i].ll = s.ll,
                    t.ts[i].join = s.join,
                    t.ts[i].nf = s.nf,
                    t.ts[i].fs = t.ts[i].x,
                    t.ts[i].gs = t.ts[i].z,
                    t.ts[i].os = 500,
                    t.ts[i].ns = t.ts[i].ls = t.ts[i].rs = a,
                    t.ts[i].Ss = i,
                    0 == t.ts[i].s0.type || 5 == t.ts[i].s0.type ? (t.ts[i].ds = 20,
                    t.ts[i].x > t.bh - 794 ? t.ts[i].Ws = 1 : t.ts[i].Ws = 0,
                    t.ts[i].xs = s.xs,
                    t.ts[i].group = 5,
                    t.ts[i].y = s.y,
                    t.ts[i].ps = t.ts[i].y,
                    t.ts[i].Os = 0) : (t.ts[i].ds = 0,
                    t.ts[i].group = 0,
                    t.ts[i].y = -300,
                    t.ts[i].ps = t.ts[i].y),
                    122 == t.ts[i].s0.id && (t.ts[i].ls = 200),
                    s.zf++,
                    h = 1;
                    break
                }
            break
        }
    0 == h && (s.Wf[e] = -1)
}
function Ma37(o) {
    let t, s, e;
    for (t = 0; t < o.Zs; t++)
        o.Yd[t] = 0;
    if (o.fa < 3) {
        -1 == o.ma && o.da % 10 == 0 && (o.Xd = -1);
        try {
            (o.ma < T7ES.Z2[o.da].sl - 1 || 0 <= o.ma && -1 != T7ES.Z2[o.da].el[o.ma].nl) && -1 != o.ma && o.F_
        } catch (t) {
            return void dbl0("defended a crash on S199: " + t)
        }
        if ((o.ma < T7ES.Z2[o.da].sl - 1 || 0 <= o.ma && null != T7ES.Z2[o.da].el[o.ma] && -1 != T7ES.Z2[o.da].el[o.ma].nl) && (-1 == o.ma || 1 == o.F_)) {
            for (o.F_ = 0,
            o.L_ = 0,
            o.qs = 0,
            o.w_ = 0,
            s = 0; s < 20; s++)
                o.Ke[s] && 0 == o.ts[s].s0.type && (o.w_++,
                51 == o.ts[s].s0.id && o.w_++,
                52 == o.ts[s].s0.id) && (o.w_ += 2);
            if (-1 == o.ve && (o.w_ = Math.floor(15 * o.w_ / 10) + 1),
            o.Sa++,
            o.ve <= 0 && o.Sa % 10 == 1 && 11 <= o.Sa && o.Sa <= 101 && FouV.gi(atob("U1VSVklWQUxf") + (o.Sa - 1)),
            5 == Math.floor(o.da / 10) && (o.pa = 1),
            0 <= o.ma && -1 != T7ES.Z2[o.da].el[o.ma].nl ? o.ma = T7ES.Z2[o.da].el[o.ma].nl : o.ma++,
            "" != T7ES.Z2[o.da].el[o.ma].al && -1 != o.xd && XYSz.lu(T7ES.Z2[o.da].el[o.ma].al),
            o.Bo = T7ES.Z2[o.da].el[o.ma].bound,
            o.bh = T7ES.Z2[o.da].el[o.ma].bound,
            5 == Math.floor(o.da / 10))
                for (t = 0; t < 20; t++)
                    o.ts[t].ls <= 0 && (o.ts[t].rs < 5 && (o.ts[t].rs = 5),
                    o.ts[t].ls = 5,
                    o.ts[t].os = 500,
                    o.ts[t].fs = o.ts[t].x = 100);
            for (t = 0; t < 60; t++) {
                var i = T7ES.Z2[o.da].el[o.ma].hl[t];
                if (null != i && (i.zf = 0,
                -1 < i.id))
                    for (0 < i.ratio ? (i.total = Math.floor(o.w_ * i.ratio * i.rl),
                    i.max = Math.floor(o.w_ * i.ratio),
                    40 < i.max && (i.max = 40)) : (i.total = i.rl,
                    i.max = 1),
                    s = 0; s < i.max; s++)
                        W_3r(o, i, s)
            }
        }
        if (o.F_ = 1,
        o.L_ = 0,
        -1 < o.ma)
            for (t = 0; t < 60; t++) {
                var a = T7ES.Z2[o.da].el[o.ma].hl[t];
                if (null != a && -1 < a.id && 1 < a.cl)
                    for (s = 0; s < a.max; s++)
                        -1 < a.Wf[s] && (e = a.Wf[s],
                        o.Yd[e] = 1,
                        o.Ke[e]) && 5 == o.ts[e].group && 0 == o.ts[e].s0.type && (o.L_ = 1)
            }
        if (-1 < o.ma)
            for (e = 0; e < 2; e++)
                for (t = 0; t < 60; t++) {
                    var h = T7ES.Z2[o.da].el[o.ma].hl[t];
                    if (null != h && -1 < h.id)
                        for (s = 0; s < h.max; s++)
                            -1 < h.Wf[s] && (o.Ke[h.Wf[s]] || (0 == e && (1 == h.cl && (0 == o.L_ || h.zf >= h.total) && (h.Wf[s] = -1,
                            h.zf = h.total),
                            1 != h.cl) && h.zf >= h.total && (h.Wf[s] = -1,
                            h.zf = h.total),
                            1 == e && (h.zf < h.total || 1 == h.cl && 0 < o.L_ && h.zf < h.total) && (W_3r(o, h, s),
                            o.F_ = 0)))
                }
        for (t = 20; t < o.Zs; t++)
            if (o.Ke[t] && 0 == o.ts[t].s0.type && 5 == o.ts[t].group) {
                o.F_ = 0;
                break
            }
        if (1 == o.F_ && 0 == o.ua && 0 == o.qs && (o.ua = 169,
        o.ma == T7ES.Z2[o.da].sl - 1) && (o.qs = 1,
        o.bh = 0),
        XqVQ(o),
        100 < o.ua && o.ua < 300 && (o.ma < 99 && -1 < o.ma && o.ma < T7ES.Z2[o.da].sl - 1 && T7ES.Z2[o.da].el[o.ma].bound == T7ES.Z2[o.da].el[o.ma + 1].bound && 1 != o.qs && (o.ua = 0),
        n = ZcYj - 134,
        Math.floor(o.ua / 10) % 2 == 1 && (o.ua % 10 == 0 && o.ua < 200 && XYSz.D(1, 1),
        D.Dm9f(BLg_.e1[24], n, 299, 0, 1 / BLg_.Mi)),
        o.ua--,
        101 != o.ua && 201 != o.ua || (1 == o.qs ? o.ua = 280 : o.ua = 0)),
        1 == o.qs && 0 == o.ga)
            if (o.da % 10 == 9 || null == T7ES.Z2[o.da + 1] || -1 == T7ES.Z2[o.da + 1].sl) {
                if (1 == o.wo) {
                    o.u = 1,
                    XYSz.Ys(),
                    XYSz.D(3, 1);
                    var n = atob("U1RBR0Vf");
                    n += Math.floor(o.da / 10) + 1,
                    o.ve <= 2 && FouV.gi(n + atob("X0VBU1k=")),
                    o.ve <= 1 && FouV.gi(n + atob("X05PUk1BTA==")),
                    o.ve <= 0 && FouV.gi(n + atob("X0RJRkZJQ1VMVA==")),
                    -1 == o.ve && FouV.gi(n + atob("X0NSQVpZ"));
                    let s = 0, e = 0, i;
                    var r, l = [];
                    for (let t = 0; t < 8; t++)
                        (o.Ke[t] || o.Ke[t + 10]) && (i = -1,
                        o.Ke[t] ? i = t : o.Ke[t + 10] && (i = t + 10),
                        i < 10 && 555 <= o.ts[i].cf && (s++,
                        o.ts[i].za) && (r = o.ts[i].s0.name.toUpperCase(),
                        -1 < o.ts[i].tu ? l.Jf = !0 : l[r] = !0,
                        "FIRZEN" == r) && -1 < o.ts[i].su && (7 == o.ts[i].au ? l.Hf = !0 : l.Qf = !0,
                        o.ts[i].hu < 10) && (s++,
                        7 == o.ts[i].nu ? l.Hf = !0 : l.Qf = !0),
                        e++);
                    if (Math.floor(o.da / 10) + 1 == 5) {
                        if (2 == s && o.ve <= 0 && FouV.gi(atob("Q09PUF8=") + atob("MlA=")),
                        3 == s && o.ve <= 0 && FouV.gi(atob("Q09PUF8=") + atob("M1A=")),
                        (4 == s || 5 == s) && o.ve <= 1 && FouV.gi(atob("Q09PUF8=") + atob("NFA=")),
                        (6 == s || 7 == s) && o.ve <= 1 && FouV.gi(atob("Q09PUF8=") + atob("NlA=")),
                        8 == s && o.ve <= 1 && FouV.gi(atob("Q09PUF8=") + atob("OFA=")),
                        n = ["DAVIS", "WOODY", "DENNIS", "FREEZE", "FIREN", "LOUIS", "RUDOLF", "HENRY", "JOHN", "DEEP", "BAT", "LOUISEX", "FIRZEN", "JULIAN"],
                        o.ve <= 2 && 3 <= e)
                            for (var u of n)
                                l[u] && FouV.gi(atob("QlJPTlpFXw==") + u);
                        if (o.ve <= 1 && 2 <= e)
                            for (var f of n)
                                l[f] && FouV.gi(atob("U0lMVkVSXw==") + f);
                        if (o.ve <= 0)
                            for (var d of n)
                                l[d] && FouV.gi(atob("R09MRF8=") + d)
                    }
                }
                o.wo < 90 && D.Dm9f(BLg_.e1[37], 215 + (ZcYj - 794) / 2, (I2Gw - 40) / 2, 0, 1 / BLg_.Mi),
                0 == o.fa && (o.fa = 1),
                o.qs = 0,
                o.ua = 0,
                o.ga = 0
            } else {
                for (o.B_ = 1,
                t = 0; t < 20; t++)
                    o.Ke[t] && 0 == o.ts[t].s0.type && 0 < o.ts[t].ls && o.ts[t].x < T7ES.Z2[o.da].el[o.ma].bound && (o.B_ = 0);
                0 < o.B_ && (o.ga = 1)
            }
        if (10 < o.ga && o.ga <= 20) {
            for (t = 0; t < 11; t++)
                D.Sy7M(0, 50 * t, ZcYj, 50 * (21 - o.ga) / 10, 0);
            o.ga++,
            21 == o.ga && (o.ga = 0)
        }
        if (0 < o.ga && o.ga <= 10) {
            for (t = 0; t < 11; t++)
                D.Sy7M(0, 50 * t, ZcYj, 50 * o.ga / 10, 0);
            o.ga++,
            11 == o.ga && GKR4(o)
        }
        XB4M(o)
    } else if (3 == o.fa && (o.wo = 0) <= o.ga && o.ga <= 20) {
        if ((s = 10 < (s = o.ga) ? 10 : s) < 10)
            for (t = 0; t < 11; t++)
                D.Sy7M(0, 50 * t, ZcYj, 50 * s / 10, 0);
        else
            D.Sy7M(0, 0, ZcYj, I2Gw, 0);
        o.ga++,
        21 == o.ga && (4 != Math.floor(o.da / 10) ? (o.da = 10 * (Math.floor(o.da / 10) + 1),
        o._a = !0,
        o.wo = 350) : o.H0 = 300)
    }
}
function XB4M(t) {
    let s, e, i, o, a, h, n;
    for (e = 0,
    s = 0; s < 20; s++)
        if (t.Ke[s] && 0 == t.ts[s].s0.type && 0 < t.ts[s].ls && 5 != t.ts[s].group) {
            e = 1;
            break
        }
    for (i = 0,
    o = 0,
    a = 0,
    h = 0,
    n = 0,
    s = 0; s < t.Zs; s++)
        t.Ke[s] && 0 == t.ts[s].s0.type && (5 != t.ts[s].group ? (0 < t.ts[s].ls && (i += t.ts[s].ls,
        o++),
        1 < t.ts[s].ll && (1 == e ? n += t.ts[s].ll - 1 : 0 == e && 0 < t.ts[s].ll && (t.ts[s].ll = -t.ts[s].ll)),
        1 == e && t.ts[s].ll < 0 && (t.ts[s].ll = -t.ts[s].ll)) : 0 < t.ts[s].ls && (a += t.ts[s].ls,
        h++));
    var r;
    t.da < 50 ? (r = "STAGE " + (Math.floor(t.da / 10) + 1) + "-" + (t.da % 10 + 1),
    D.VLeA(r, ZcYj / 2, (19 - JXAJ) / 2, "Itbg", "#FFFFFF")) : -1 < t.Sa && (0 < t.pa && t.pa++,
    70 <= t.pa && (t.pa = 0),
    D.VLeA("Survival Stage: " + t.Sa, ZcYj / 2, (19 - JXAJ) / 2, "Itbg", 0 == t.pa || Math.floor(t.pa / 10) % 2 == 1 ? "#FFFFFF" : "#5077D0")),
    0 == n ? D.S6nY("Man: " + o + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HP: " + i, 5, 531 + (19 - JXAJ) / 2, "OkQn", "#AFAFFF") : D.S6nY("Man: " + o + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HP: " + i + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reserve: " + n, 5, 531 + (19 - JXAJ) / 2, "OkQn", "#AFAFFF"),
    D.S6nY("Man: " + h + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HP: " + a, ZcYj - 5, 531 + (19 - JXAJ) / 2, "KrcT", "#FFAAAA")
}
function XqVQ(t) {
    var s;
    0 < t.ua && t.ua < 100 && (s = (ZcYj - 264) / 2,
    Math.floor(t.da / 10) < 5 ? (D.Dm9f(BLg_.e1[25], s, 299, 0, 1 / BLg_.Mi),
    D.Dm9f(BLg_.e1[36], 225 + s, 299, 0, 1 / BLg_.Mi),
    D.Dm9f(BLg_.e1[27 + Math.floor(t.da / 10)], 195 + s, 299, 0, 1 / BLg_.Mi),
    D.Dm9f(BLg_.e1[27 + t.da % 10], 255 + s, 299, 0, 1 / BLg_.Mi)) : D.Dm9f(BLg_.zi[3], (ZcYj - 434) / 2, 299, 0, 1 / BLg_.Mi),
    t.ua--)
}
AUDIO_CONTEXT = new (window.AudioContext || window.webkitAudioContext);
class AdHZ {
    constructor(t) {
        this.path = t,
        this.buffer = null,
        this.jf = [],
        this.Kf = 5,
        this.$f = 0,
        this.qf(t)
    }
    async qf(t, s=!1) {
        var e = Date.now();
        if (s || !(e - this.$f < 2e4)) {
            this.$f = e;
            try {
                var i = await (await fetch(t)).arrayBuffer();
                this.buffer = await AUDIO_CONTEXT.decodeAudioData(i)
            } catch (t) {
                dbl0(`SAudio ${this.path}: Error loading audio: ` + t)
            }
        }
    }
    async play(t, s=0) {
        if (this.buffer) {
            "suspended" === AUDIO_CONTEXT.state && await AUDIO_CONTEXT.resume(),
            this.jf.length >= this.Kf && this.jf.shift().stop();
            const a = AUDIO_CONTEXT.createBufferSource();
            a.buffer = this.buffer;
            var e = AUDIO_CONTEXT.createGain()
              , i = AUDIO_CONTEXT.createGain()
              , o = .9 * Math.cos(.25 * (s + 1) * Math.PI) + .1
              , s = .9 * Math.sin(.25 * (s + 1) * Math.PI) + .1
              , o = (e.gain.value = o * t,
            i.gain.value = s * t,
            a.connect(e),
            a.connect(i),
            AUDIO_CONTEXT.createChannelMerger(2));
            e.connect(o, 0, 0),
            i.connect(o, 0, 1),
            o.connect(AUDIO_CONTEXT.destination),
            a.start(0),
            this.jf.push(a),
            a.onended = ()=>{
                var t = this.jf.indexOf(a);
                -1 < t && this.jf.splice(t, 1)
            }
        } else
            await this.qf(this.path, !0),
            this.buffer
    }
    pause() {
        this.jf.forEach(t=>{
            t.stop()
        }
        ),
        this.jf = []
    }
}
class XYSz {
    static t3 = [];
    static i3 = [];
    static e3 = [];
    static U_ = [];
    static l = [];
    static j = 60;
    static H = 40;
    static s3 = "";
    static h3(t) {
        return new AdHZ(t)
    }
    static o3(t) {
        var s = new Audio;
        return s.src = t,
        s.preload = "auto",
        s
    }
    static Ai() {
        XYSz.e3[0] = XYSz.h3("mp3/m_join.mp3"),
        XYSz.e3[1] = XYSz.h3("mp3/m_ok.mp3"),
        XYSz.e3[2] = XYSz.h3("mp3/m_cancel.mp3"),
        XYSz.e3[3] = XYSz.h3("mp3/m_pass.mp3"),
        XYSz.e3[4] = XYSz.h3("mp3/m_end.mp3"),
        XYSz.e3[5] = XYSz.h3("mp3/081.mp3")
    }
    static a3(s) {
        for (let t = 0; t < XYSz.i3.length; t++)
            if (XYSz.i3[t] == s)
                return t;
        var t = XYSz.o3(s + ".mp3");
        return XYSz.i3.push(s),
        XYSz.t3.push(t),
        XYSz.i3.length - 1
    }
    static _(s) {
        for (let t = 0; t < XYSz.l.length; t++)
            if (XYSz.l[t] == s)
                return t;
        var t = XYSz.h3(s + ".mp3");
        return XYSz.l.push(s),
        XYSz.U_.push(t),
        XYSz.l.length - 1
    }
    static async D(t, s) {
        XYSz.e3[t].play(s * XYSz.j / 100)
    }
    static async Pf(t, s, e=0) {
        XYSz.U_[t].play(s * XYSz.j / 100, e)
    }
    static Ys() {
        if ("" != XYSz.s3)
            for (let t = 0; t < XYSz.i3.length; t++)
                if (XYSz.i3[t] == XYSz.s3)
                    return XYSz.t3[t].pause(),
                    XYSz.t3[t].currentTime = 0,
                    void (XYSz.s3 = "")
    }
    static lu(e) {
        if (XYSz.s3 != e) {
            "" != XYSz.s3 && XYSz.Ys();
            let s = !1;
            for (let t = 0; t < XYSz.i3.length; t++)
                if (XYSz.i3[t] == e) {
                    s = !0;
                    break
                }
            s || XYSz.a3(e),
            s = !1;
            for (let t = 0; t < XYSz.i3.length; t++)
                if (XYSz.i3[t] == e) {
                    XYSz.s3 = e,
                    XYSz.t3[t].loop = !0,
                    XYSz.t3[t].volume = .5 * XYSz.H / 100,
                    XYSz.t3[t].play(),
                    s = !0;
                    break
                }
            s
        }
    }
    static Zf() {
        "" != XYSz.s3 && XYSz.lu(XYSz.s3)
    }
    static i0(t) {
        XYSz.H = t,
        100 < XYSz.H && (XYSz.H = 100);
        for (let t = 0; t < XYSz.i3.length; t++)
            XYSz.t3[t].volume = .5 * XYSz.H / 100
    }
}
