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