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